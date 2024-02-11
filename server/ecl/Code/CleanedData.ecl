IMPORT $;
ALL_CLEANED := $.Cleaner;
#option ('outputLimitMb', 100);

OUTPUT(ALL_CLEANED.allMissingChildrenData);
OUTPUT(SORT(ALL_CLEANED.policeStationData, id));
OUTPUT(ALL_CLEANED.unemploymentRatesByCounty(ALL_CLEANED.unemploymentRatesByCounty.attribute = 'Unemployment_rate_2022'));
// PCTPOV017_2021	Estimated percent of people age 0-17 in poverty 2021
OUTPUT(ALL_CLEANED.povRatesByCounty(ALL_CLEANED.povRatesByCounty.attribute = 'PCTPOV017_2021'));
OUTPUT(ALL_CLEANED.educationRatesByCounty(ALL_CLEANED.educationRatesByCounty.attribute = 'Percent of adults with less than a high school diploma, 2017-21'));
OUTPUT(ALL_CLEANED.fireStations);
OUTPUT(ALL_CLEANED.citiesData);