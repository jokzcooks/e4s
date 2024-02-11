const fs = require("fs");
const { exit } = require("process");
const axios = require("axios")
const CountiesList = require("./cleaned/CountiesList");
const MissingChildren = require("./cleaned/MissingChildren");
const { loadDocuments } = require("./distributer");

const normalize = (min, max, value) => {
    return ((Number(value)-Number(min))/(Number(max)-Number(min)))
}

const distribute = (data) => {
  return data.map(county => {
    var distributed;
    if (county.density_magnitude > 0.5) {
      distributed = Math.floor((county.density_magnitude*10))/10 
    } else {
      distributed = Math.floor((county.density_magnitude*10)+1.5)/10 
    }
    return ({fips: county.fips, density_magnitude: distributed})
  })
}

const popDensities = async () => {
    var minimum, maximum, result, reducedToFips;
    reducedToFips = CountiesList.Row.map(county => ({"fips": county.county_fips, "density": county.density}))
    reducedToFips = Array.from(new Set(reducedToFips.map(s => s.fips)))
    .map(fips => {
      return {
        fips: fips,
        density: reducedToFips.filter(s => s.fips === fips).map(d => d.density).reduce((a,b) => a+b,0)
      }
    })
    console.log(`Mapping Population Densities from ${reducedToFips.length} Fips Regions`)
    console.log()
    minimum = reducedToFips.reduce((prev, curr) => prev.density < curr.density ? prev : curr);
    maximum = reducedToFips.reduce((prev, curr) => prev.density > curr.density ? prev : curr);
    console.log(`\tMinimum density value:\t${minimum.density}`)
    console.log(`\tMaximum density value:\t${maximum.density}`)
    result = reducedToFips.map(county => ({"fips": county.fips, "density_magnitude": normalize(minimum.density, maximum.density, county.density)}))
    result = distribute(result);
    console.log(result)
    result = result.sort((a,b) => b.density_magnitude - a.density_magnitude)
    try {
        fs.writeFileSync( __dirname + "/compiled/CountiesList.js", `module.exports = ${JSON.stringify(result)}`, { flag: 'w' });
        console.log()
        console.log("\tSuccessfully Mapped Population Densities!")
        console.log()
        return
    } catch (e) {
        console.log()
        console.log("Error mapping population densities!")
        console.log(e.message)
        exit(0)
    }
}


const downloadImage = (URL, fileName) => {
    return axios
      .get(URL, {responseType: 'arraybuffer'})
      .then(function(response) {
        fs.writeFileSync(__dirname + `/images/${fileName}.png`, response.data, (err) => {
            if (err) throw err;
        });
        return {
            success: true,
            data: response.data
        };
      })
      .catch(function(error) {
        return { success: false };
      });
}

const downloadImages = async () => {
    var reducedChildren, results, successCount;
    console.log(`Downloading Images for ${MissingChildren.Row.length} Missing Children`)
    console.log()
    reducedChildren = MissingChildren.Row.map(child => ({url: "https://api.missingkids.org/photographs/" + `${child.photolink.split("poster")[1].split("/")[1]}${child.photolink.split("poster")[1].split("/")[2]}c${child.photolink.split("poster")[1].split("/")[3]}.jpg`.replace(/ /g,""), name: `${child.firstname} ${child.lastname}`, city: child.missingcity, state: child.missingstate}))
    results = await Promise.all(reducedChildren.map(child => downloadImage(child.url, child.name.replace(/ /g,""))))
    successCount = results.filter((obj) => obj.success == true).length;
    console.log(`\tSuccesssfully downloaded ${successCount}/${reducedChildren.length} images`)
}

(async() => {
    console.log("Compiling Data")
    console.log()
    await popDensities()
    console.log()
    // await downloadImages()
    console.log()
    // lat lon for abduction cities
    // 
    await loadDocuments()
    return
})();