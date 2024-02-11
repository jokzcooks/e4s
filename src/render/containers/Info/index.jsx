import { useEffect, useState } from "react";
import { Chevron, ChevronFlipped } from "../../components/Images";
import { ChoroplethCounties, ChoroplethStates, Layered, topoJsonFolder } from "@hpcc-js/map";
import CountiesList from "../../utils/CountiesListUnfiltered";

const InfoPage = ({setError}) => {

    const [densityData, setDensityData] = useState([])

    document.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, {passive: false})


    topoJsonFolder("https://cdn.jsdelivr.net/npm/@hpcc-js/map@2.0.0/TopoJSON");
    console.log(densityData)

    useEffect(() => {

        if (document.getElementById("target").innerHTML != "") return
        // const states = new ChoroplethStates()
        // .columns(["State ID", "Weight"])
        // .data([["AL", 4779736], ["AK", 710231], ["AZ", 6392017], ["AR", 2915918], ["CA", 37253956], ["CO", 5029196], ["CT", 3574097], ["DC", 601723], ["FL", 18801310], ["GA", 9687653], ["HI", 1360301], ["ID", 1567582], ["IL", 12830632], ["IN", 6483802], ["IA", 3046355], ["ME", 1328361], ["MD", 5773552], ["MA", 6547629], ["MI", 9883640], ["MN", 5303925], ["MS", 2967297], ["MO", 5988927], ["MT", 989415], ["NE", 1826341], ["NV", 2700551], ["NH", 1316470], ["NJ", 8791894], ["NM", 2059179], ["NY", 19378102], ["NC", 9535483], ["ND", 672591], ["OH", 11536504], ["OK", 3751351], ["OR", 3831074], ["PA", 12702379], ["RI", 1052567], ["SC", 4625364], ["SD", 814180], ["TN", 6346105], ["TX", 25145561], ["UT", 2763885], ["VT", 625741], ["VA", 8001024], ["WA", 6724540], ["WV", 1852994], ["WI", 5686986], ["WY", 563626]])
        // .paletteID("Blues")
        // ;

        const counties = new ChoroplethCounties()
            .columns(["Fips Code", "Weight"])
            .data(CountiesList.Row.map(county => ([county.county_fips, county.density])))
            .paletteID("Reds")
            .opacity(1)
            ;
        console.log(
        new Layered()
        .layers([
            // states,
            counties
        ])
        .target("target")
        .projection("AlbersUsaPr")
        .render()
        )
    }, [])

    return (
        <div className="infoContainer">
            <p className="p1">every 40 seconds,</p>
            <p className="p2">a child goes missing or is abducted in the United States       <span>(Source: https://childfindofamerica.org)</span></p>
            <p className="p3"><span className="bracket-span">[</span>that's 2,000+ children. <span className="under-span">every. day.</span><span className="bracket-span">]</span></p>
            <img className="c1" src={Chevron} alt="" onClick={e => document.querySelector(".p4").scrollIntoView({behavior: "smooth"})}/>
            <p className="p4">it’s <span>our mission</span> to combat this staggering incidence rate by increasing <span>awareness</span> and <span>advocation</span> for at risk children</p>
            <div className="up-down">
                <img className="c2" src={ChevronFlipped} alt="" onClick={e => document.querySelector(".infoContainer").scrollTo({top: 0, behavior: "smooth"})}/>
                <img className="c3" src={Chevron} alt="" onClick={e => document.querySelector(".mapContainer").scrollIntoView({behavior: "smooth"})}/>
            </div>
            <div className="mapContainer">
                <div id="mapControls"></div>
                <div id="target"></div>
            </div>
            <div className="up-down">
                <img className="c2" src={ChevronFlipped} alt="" onClick={e => document.querySelector(".p4").scrollIntoView({behavior: "smooth"})}/>
                <img className="c3" src={Chevron} alt="" onClick={e => document.querySelector(".mapContainer").scrollIntoView({behavior: "smooth"})}/>
            </div>
            <p></p>
        </div>
    )
}

export default InfoPage