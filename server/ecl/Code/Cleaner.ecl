IMPORT $;
HMK := $.File_AllData;

EXPORT Cleaner := MODULE;

//OUTPUT(HMK.mc_byStateDS, {firstName, lastName})

//OUTPUT(TABLE(HMK.mc_byStateDS, {RecID, DatePosted, FirstName, LastName, CurrentAge, DateMissing, MissingCity, MissingState, Contact, PhotoLink}, MERGE));

MissingChildrenRec := RECORD
    STRING18  FirstName;
    STRING24  LastName;
    UNSIGNED1 CurrentAge;
    UNSIGNED4 DateMissing;
    STRING25  MissingCity;
    STRING2   MissingState;
    STRING150 Contact;
    STRING100 PhotoLink;
END;

// Transform and select all fields from mc_byState
EXPORT allMissingChildrenData := PROJECT(HMK.mc_byStateDS, TRANSFORM(MissingChildrenRec,
                          SELF.FirstName := LEFT.FirstName,
                          SELF.LastName := LEFT.LastName,
                          SELF.CurrentAge := LEFT.CurrentAge,
                          SELF.DateMissing := LEFT.DateMissing,
                          SELF.MissingCity := LEFT.MissingCity,
                          SELF.MissingState := LEFT.MissingState,
                          SELF.Contact := LEFT.Contact,
                          SELF.PhotoLink := LEFT.PhotoLink));

// Output the transformed dataset
// OUTPUT(allMissingChildrenData, NAMED('AllMissingChildrenData'));
// EXPORT MC := DATASET('~HMK::OUT::mc_byStateDS',MissingChildrenRec,FLAT);


CleanPoliceStationRec := RECORD
    UNSIGNED4 id;
    STRING135 name;
    STRING80  address;
    STRING30  city;
    STRING2   state;
    STRING5   zip;
    STRING15  telephone;
    REAL8     latitude;
    REAL8     longitude;
    STRING155 website;
END;

EXPORT policeStationData := PROJECT(HMK.PoliceDS, TRANSFORM(CleanPoliceStationRec,
                          SELF.city := LEFT.city,
                          SELF.state := LEFT.state,
                          SELF.zip := LEFT.zip,
                          SELF.address := LEFT.address,
                          SELF.latitude := LEFT.latitude,
                          SELF.longitude := LEFT.longitude,
                          SELF.id := LEFT.id,
                          SELF.telephone := LEFT.telephone,
                          SELF.website := LEFT.website,
                          SELF.name := LEFT.name));
// Outputting police station data
// OUTPUT(policeStationData, NAMED('PoliceStationData'));



EXPORT unemploymentRatesByCounty := PROJECT(HMK.unemp_byCountyDS, TRANSFORM(RECORDOF(LEFT),
                          SELF.FIPS_CODE := LEFT.FIPS_CODE,
                          SELF.State := LEFT.State,
                          SELF.Area_Name := LEFT.Area_Name,
                          SELF.Attribute := LEFT.Attribute,
                          SELF.Value := LEFT.Value));
// Outputting unemployment data
// OUTPUT(unemploymentRatesByCounty, NAMED('UnemploymentRatesByCounty'));


EXPORT povRatesByCounty := PROJECT(HMK.pov_estimatesDS, TRANSFORM(RECORDOF(LEFT),
                          SELF.FIPS_CODE := LEFT.FIPS_CODE,
                          SELF.State := LEFT.State,
                          SELF.Area_Name := LEFT.Area_Name,
                          SELF.Attribute := LEFT.Attribute,
                          SELF.Value := LEFT.Value));
// Outputting poverty rate data
// OUTPUT(povRatesByCounty, NAMED('PovertyRatesByCounty'));


EXPORT educationRatesByCounty := PROJECT(HMK.EducationDS, TRANSFORM(RECORDOF(LEFT),
                          SELF.FIPS_CODE := LEFT.FIPS_CODE,
                          SELF.State := LEFT.State,
                          SELF.Area_Name := LEFT.Area_Name,
                          SELF.Attribute := LEFT.Attribute,
                          SELF.Value := LEFT.Value));

// Outputting education data
// OUTPUT(educationRatesByCounty, NAMED('EducationByCounty'));


CleanFireStationRec := RECORD
    STRING100 name;
    STRING65  address;
    STRING35  city;
    STRING2   state;
    STRING10   zipcode;
END;
EXPORT fireStations := PROJECT(HMK.FireDS, TRANSFORM(CleanFireStationRec,
                        SELF.name := LEFT.name,
                        SELF.address := LEFT.address,
                        SELF.city := LEFT.city,
                        SELF.state := LEFT.state,
                        SELF.zipcode := LEFT.zipcode));
// Outputting fire station data
// OUTPUT(fireStations, NAMED('FireStations'));


CleanCitiesRec := RECORD
    STRING45  city;
    STRING2   state_id;
    STRING20  state_name;
    STRING5   county_fips;
    STRING30  county_name;
    REAL4     lat;
    REAL8     lng;
    UNSIGNED4 population;
    REAL4     density;
    STRING1855 zips;
END;
EXPORT citiesData := PROJECT(HMK.City_DS, TRANSFORM(CleanCitiesRec,
                        SELF.city := LEFT.city,
                        SELF.state_id := LEFT.state_id,
                        SELF.state_name := LEFT.state_name,
                        SELF.county_fips := LEFT.county_fips,
                        SELF.county_name := LEFT.county_name,
                        SELF.lat := LEFT.lat,
                        SELF.lng := LEFT.lng,
                        SELF.population := LEFT.population,
                        SELF.density := LEFT.density,
                        SELF.zips := LEFT.zips));

// Outputting Cities data
// OUTPUT(citiesData, NAMED('Cities'));

END;