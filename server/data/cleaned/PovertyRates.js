module.exports = {
    "XmlSchema": {
        "@name": "myschema",
        "xml": "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:hpcc=\"urn:hpccsystems:xsd:appinfo\" elementFormDefault=\"qualified\" attributeFormDefault=\"unqualified\">\n<xs:element name=\"Dataset\"><xs:complexType><xs:sequence minOccurs=\"0\" maxOccurs=\"unbounded\">\n<xs:element name=\"Row\"><xs:complexType><xs:sequence>\n<xs:element name=\"fips_code\" type=\"xs:nonNegativeInteger\"/>\n<xs:element name=\"state\" type=\"string2\"/>\n<xs:element name=\"area_name\" type=\"string35\"/>\n<xs:element name=\"attribute\" type=\"string35\"/>\n<xs:element name=\"value\" type=\"xs:double\"/>\n</xs:sequence></xs:complexType></xs:element>\n</xs:sequence></xs:complexType></xs:element>\n<xs:simpleType name=\"string2\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"2\"/></xs:restriction></xs:simpleType>\n<xs:simpleType name=\"string35\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"35\"/></xs:restriction></xs:simpleType>\n</xs:schema>"
    },
    "@xmlSchema": "myschema",
    "Row": [{
            "fips_code": 0,
            "state": "US",
            "area_name": "United States",
            "value": 16.9
        },
        {
            "fips_code": 1000,
            "state": "AL",
            "area_name": "Alabama",
            "value": 22.7
        }, {
            "fips_code": 1001,
            "state": "AL",
            "area_name": "Autauga County",
            "value": 16.1
        }, {
            "fips_code": 1003,
            "state": "AL",
            "area_name": "Baldwin County",
            "value": 16.4
        }, {
            "fips_code": 1005,
            "state": "AL",
            "area_name": "Barbour County",
            "value": 35.1
        }, {
            "fips_code": 1007,
            "state": "AL",
            "area_name": "Bibb County",
            "value": 29.0
        }, {
            "fips_code": 1009,
            "state": "AL",
            "area_name": "Blount County",
            "value": 16.7
        }, {
            "fips_code": 1011,
            "state": "AL",
            "area_name": "Bullock County",
            "value": 41.7
        }, {
            "fips_code": 1013,
            "state": "AL",
            "area_name": "Butler County",
            "value": 34.2
        }, {
            "fips_code": 1015,
            "state": "AL",
            "area_name": "Calhoun County",
            "value": 25.2
        }, {
            "fips_code": 1017,
            "state": "AL",
            "area_name": "Chambers County",
            "value": 32.2
        }, {
            "fips_code": 1019,
            "state": "AL",
            "area_name": "Cherokee County",
            "value": 26.6
        }, {
            "fips_code": 1021,
            "state": "AL",
            "area_name": "Chilton County",
            "value": 22.4
        }, {
            "fips_code": 1023,
            "state": "AL",
            "area_name": "Choctaw County",
            "value": 32.4
        }, {
            "fips_code": 1025,
            "state": "AL",
            "area_name": "Clarke County",
            "value": 29.2
        }, {
            "fips_code": 1027,
            "state": "AL",
            "area_name": "Clay County",
            "value": 27.6
        }, {
            "fips_code": 1029,
            "state": "AL",
            "area_name": "Cleburne County",
            "value": 22.1
        }, {
            "fips_code": 1031,
            "state": "AL",
            "area_name": "Coffee County",
            "value": 24.2
        }, {
            "fips_code": 1033,
            "state": "AL",
            "area_name": "Colbert County",
            "value": 23.6
        }, {
            "fips_code": 1035,
            "state": "AL",
            "area_name": "Conecuh County",
            "value": 33.9
        }, {
            "fips_code": 1037,
            "state": "AL",
            "area_name": "Coosa County",
            "value": 29.9
        }, {
            "fips_code": 1039,
            "state": "AL",
            "area_name": "Covington County",
            "value": 28.3
        }, {
            "fips_code": 1041,
            "state": "AL",
            "area_name": "Crenshaw County",
            "value": 28.9
        }, {
            "fips_code": 1043,
            "state": "AL",
            "area_name": "Cullman County",
            "value": 17.5
        }, {
            "fips_code": 1045,
            "state": "AL",
            "area_name": "Dale County",
            "value": 22.7
        }, {
            "fips_code": 1047,
            "state": "AL",
            "area_name": "Dallas County",
            "value": 45.4
        }, {
            "fips_code": 1049,
            "state": "AL",
            "area_name": "DeKalb County",
            "value": 29.3
        }, {
            "fips_code": 1051,
            "state": "AL",
            "area_name": "Elmore County",
            "value": 17.3
        }, {
            "fips_code": 1053,
            "state": "AL",
            "area_name": "Escambia County",
            "value": 29.9
        }, {
            "fips_code": 1055,
            "state": "AL",
            "area_name": "Etowah County",
            "value": 25.0
        }, {
            "fips_code": 1057,
            "state": "AL",
            "area_name": "Fayette County",
            "value": 26.5
        }, {
            "fips_code": 1059,
            "state": "AL",
            "area_name": "Franklin County",
            "value": 25.1
        }, {
            "fips_code": 1061,
            "state": "AL",
            "area_name": "Geneva County",
            "value": 29.1
        }, {
            "fips_code": 1063,
            "state": "AL",
            "area_name": "Greene County",
            "value": 51.8
        }, {
            "fips_code": 1065,
            "state": "AL",
            "area_name": "Hale County",
            "value": 32.6
        }, {
            "fips_code": 1067,
            "state": "AL",
            "area_name": "Henry County",
            "value": 24.6
        }, {
            "fips_code": 1069,
            "state": "AL",
            "area_name": "Houston County",
            "value": 27.1
        }, {
            "fips_code": 1071,
            "state": "AL",
            "area_name": "Jackson County",
            "value": 27.0
        }, {
            "fips_code": 1073,
            "state": "AL",
            "area_name": "Jefferson County",
            "value": 23.6
        }, {
            "fips_code": 1075,
            "state": "AL",
            "area_name": "Lamar County",
            "value": 24.7
        }, {
            "fips_code": 1077,
            "state": "AL",
            "area_name": "Lauderdale County",
            "value": 22.8
        }, {
            "fips_code": 1079,
            "state": "AL",
            "area_name": "Lawrence County",
            "value": 23.0
        }, {
            "fips_code": 1081,
            "state": "AL",
            "area_name": "Lee County",
            "value": 18.4
        }, {
            "fips_code": 1083,
            "state": "AL",
            "area_name": "Limestone County",
            "value": 11.8
        }, {
            "fips_code": 1085,
            "state": "AL",
            "area_name": "Lowndes County",
            "value": 43.0
        }, {
            "fips_code": 1087,
            "state": "AL",
            "area_name": "Macon County",
            "value": 42.9
        }, {
            "fips_code": 1089,
            "state": "AL",
            "area_name": "Madison County",
            "value": 13.9
        }, {
            "fips_code": 1091,
            "state": "AL",
            "area_name": "Marengo County",
            "value": 34.2
        }, {
            "fips_code": 1093,
            "state": "AL",
            "area_name": "Marion County",
            "value": 24.5
        }, {
            "fips_code": 1095,
            "state": "AL",
            "area_name": "Marshall County",
            "value": 22.3
        }, {
            "fips_code": 1097,
            "state": "AL",
            "area_name": "Mobile County",
            "value": 24.8
        }, {
            "fips_code": 1099,
            "state": "AL",
            "area_name": "Monroe County",
            "value": 33.2
        }, {
            "fips_code": 1101,
            "state": "AL",
            "area_name": "Montgomery County",
            "value": 33.5
        }, {
            "fips_code": 1103,
            "state": "AL",
            "area_name": "Morgan County",
            "value": 17.0
        }, {
            "fips_code": 1105,
            "state": "AL",
            "area_name": "Perry County",
            "value": 50.3
        }, {
            "fips_code": 1107,
            "state": "AL",
            "area_name": "Pickens County",
            "value": 30.1
        }, {
            "fips_code": 1109,
            "state": "AL",
            "area_name": "Pike County",
            "value": 30.0
        }, {
            "fips_code": 1111,
            "state": "AL",
            "area_name": "Randolph County",
            "value": 30.1
        }, {
            "fips_code": 1113,
            "state": "AL",
            "area_name": "Russell County",
            "value": 31.0
        }, {
            "fips_code": 1115,
            "state": "AL",
            "area_name": "St. Clair County",
            "value": 16.8
        }, {
            "fips_code": 1117,
            "state": "AL",
            "area_name": "Shelby County",
            "value": 9.1
        }, {
            "fips_code": 1119,
            "state": "AL",
            "area_name": "Sumter County",
            "value": 48.1
        }, {
            "fips_code": 1121,
            "state": "AL",
            "area_name": "Talladega County",
            "value": 27.1
        }, {
            "fips_code": 1123,
            "state": "AL",
            "area_name": "Tallapoosa County",
            "value": 27.9
        }, {
            "fips_code": 1125,
            "state": "AL",
            "area_name": "Tuscaloosa County",
            "value": 18.3
        }, {
            "fips_code": 1127,
            "state": "AL",
            "area_name": "Walker County",
            "value": 27.7
        }, {
            "fips_code": 1129,
            "state": "AL",
            "area_name": "Washington County",
            "value": 30.6
        }, {
            "fips_code": 1131,
            "state": "AL",
            "area_name": "Wilcox County",
            "value": 49.4
        }, {
            "fips_code": 1133,
            "state": "AL",
            "area_name": "Winston County",
            "value": 26.9
        }, {
            "fips_code": 2000,
            "state": "AK",
            "area_name": "Alaska",
            "value": 13.5
        }, {
            "fips_code": 2013,
            "state": "AK",
            "area_name": "Aleutians East Borough",
            "value": 15.7
        }, {
            "fips_code": 2016,
            "state": "AK",
            "area_name": "Aleutians West Census Area",
            "value": 7.0
        }, {
            "fips_code": 2020,
            "state": "AK",
            "area_name": "Anchorage Borough",
            "value": 11.3
        }, {
            "fips_code": 2050,
            "state": "AK",
            "area_name": "Bethel Census Area",
            "value": 26.8
        }, {
            "fips_code": 2060,
            "state": "AK",
            "area_name": "Bristol Bay Borough",
            "value": 20.0
        }, {
            "fips_code": 2063,
            "state": "AK",
            "area_name": "Chugach Census Area",
            "value": 9.5
        }, {
            "fips_code": 2066,
            "state": "AK",
            "area_name": "Copper River Census Area",
            "value": 18.5
        }, {
            "fips_code": 2068,
            "state": "AK",
            "area_name": "Denali Borough",
            "value": 7.6
        }, {
            "fips_code": 2070,
            "state": "AK",
            "area_name": "Dillingham Census Area",
            "value": 31.0
        }, {
            "fips_code": 2090,
            "state": "AK",
            "area_name": "Fairbanks North Star Borough",
            "value": 9.4
        }, {
            "fips_code": 2100,
            "state": "AK",
            "area_name": "Haines Borough",
            "value": 17.4
        }, {
            "fips_code": 2105,
            "state": "AK",
            "area_name": "Hoonah-Angoon Census Area",
            "value": 26.2
        }, {
            "fips_code": 2110,
            "state": "AK",
            "area_name": "Juneau Borough",
            "value": 8.9
        }, {
            "fips_code": 2122,
            "state": "AK",
            "area_name": "Kenai Peninsula Borough",
            "value": 13.8
        }, {
            "fips_code": 2130,
            "state": "AK",
            "area_name": "Ketchikan Gateway Borough",
            "value": 13.4
        }, {
            "fips_code": 2150,
            "state": "AK",
            "area_name": "Kodiak Island Borough",
            "value": 8.9
        }, {
            "fips_code": 2158,
            "state": "AK",
            "area_name": "Kusilvak Census Area",
            "value": 40.6
        }, {
            "fips_code": 2164,
            "state": "AK",
            "area_name": "Lake and Peninsula Borough",
            "value": 28.0
        }, {
            "fips_code": 2170,
            "state": "AK",
            "area_name": "Matanuska-Susitna Borough",
            "value": 11.6
        }, {
            "fips_code": 2180,
            "state": "AK",
            "area_name": "Nome Census Area",
            "value": 23.6
        }, {
            "fips_code": 2185,
            "state": "AK",
            "area_name": "North Slope Borough",
            "value": 15.5
        }, {
            "fips_code": 2188,
            "state": "AK",
            "area_name": "Northwest Arctic Borough",
            "value": 28.4
        }, {
            "fips_code": 2195,
            "state": "AK",
            "area_name": "Petersburg Borough",
            "value": 10.5
        }, {
            "fips_code": 2198,
            "state": "AK",
            "area_name": "Prince of Wales-Hyder Census Area",
            "value": 22.9
        }, {
            "fips_code": 2220,
            "state": "AK",
            "area_name": "Sitka Borough",
            "value": 10.7
        }, {
            "fips_code": 2230,
            "state": "AK",
            "area_name": "Skagway Municipality",
            "value": 9.300000000000001
        }, {
            "fips_code": 2240,
            "state": "AK",
            "area_name": "Southeast Fairbanks Census Area",
            "value": 15.6
        }, {
            "fips_code": 2275,
            "state": "AK",
            "area_name": "Wrangell City and Borough",
            "value": 16.9
        }, {
            "fips_code": 2282,
            "state": "AK",
            "area_name": "Yakutat Borough",
            "value": 19.0
        }, {
            "fips_code": 2290,
            "state": "AK",
            "area_name": "Yukon-Koyukuk Census Area",
            "value": 32.1
        }, {
            "fips_code": 4000,
            "state": "AZ",
            "area_name": "Arizona",
            "value": 17.8
        }, {
            "fips_code": 4001,
            "state": "AZ",
            "area_name": "Apache County",
            "value": 34.7
        }, {
            "fips_code": 4003,
            "state": "AZ",
            "area_name": "Cochise County",
            "value": 26.0
        }, {
            "fips_code": 4005,
            "state": "AZ",
            "area_name": "Coconino County",
            "value": 19.4
        }, {
            "fips_code": 4007,
            "state": "AZ",
            "area_name": "Gila County",
            "value": 27.3
        }, {
            "fips_code": 4009,
            "state": "AZ",
            "area_name": "Graham County",
            "value": 23.3
        }, {
            "fips_code": 4011,
            "state": "AZ",
            "area_name": "Greenlee County",
            "value": 11.2
        }, {
            "fips_code": 4012,
            "state": "AZ",
            "area_name": "La Paz County",
            "value": 31.2
        }, {
            "fips_code": 4013,
            "state": "AZ",
            "area_name": "Maricopa County",
            "value": 15.4
        }, {
            "fips_code": 4015,
            "state": "AZ",
            "area_name": "Mohave County",
            "value": 30.4
        }, {
            "fips_code": 4017,
            "state": "AZ",
            "area_name": "Navajo County",
            "value": 33.8
        }, {
            "fips_code": 4019,
            "state": "AZ",
            "area_name": "Pima County",
            "value": 20.4
        }, {
            "fips_code": 4021,
            "state": "AZ",
            "area_name": "Pinal County",
            "value": 14.3
        }, {
            "fips_code": 4023,
            "state": "AZ",
            "area_name": "Santa Cruz County",
            "value": 30.8
        }, {
            "fips_code": 4025,
            "state": "AZ",
            "area_name": "Yavapai County",
            "value": 19.2
        }, {
            "fips_code": 4027,
            "state": "AZ",
            "area_name": "Yuma County",
            "value": 25.0
        }, {
            "fips_code": 5000,
            "state": "AR",
            "area_name": "Arkansas",
            "value": 21.8
        }, {
            "fips_code": 5001,
            "state": "AR",
            "area_name": "Arkansas County",
            "value": 25.1
        }, {
            "fips_code": 5003,
            "state": "AR",
            "area_name": "Ashley County",
            "value": 31.2
        }, {
            "fips_code": 5005,
            "state": "AR",
            "area_name": "Baxter County",
            "value": 18.7
        }, {
            "fips_code": 5007,
            "state": "AR",
            "area_name": "Benton County",
            "value": 10.9
        }, {
            "fips_code": 5009,
            "state": "AR",
            "area_name": "Boone County",
            "value": 19.7
        }, {
            "fips_code": 5011,
            "state": "AR",
            "area_name": "Bradley County",
            "value": 26.8
        }, {
            "fips_code": 5013,
            "state": "AR",
            "area_name": "Calhoun County",
            "value": 19.3
        }, {
            "fips_code": 5015,
            "state": "AR",
            "area_name": "Carroll County",
            "value": 24.7
        }, {
            "fips_code": 5017,
            "state": "AR",
            "area_name": "Chicot County",
            "value": 37.0
        }, {
            "fips_code": 5019,
            "state": "AR",
            "area_name": "Clark County",
            "value": 24.7
        }, {
            "fips_code": 5021,
            "state": "AR",
            "area_name": "Clay County",
            "value": 26.0
        }, {
            "fips_code": 5023,
            "state": "AR",
            "area_name": "Cleburne County",
            "value": 26.2
        }, {
            "fips_code": 5025,
            "state": "AR",
            "area_name": "Cleveland County",
            "value": 20.7
        }, {
            "fips_code": 5027,
            "state": "AR",
            "area_name": "Columbia County",
            "value": 34.1
        }, {
            "fips_code": 5029,
            "state": "AR",
            "area_name": "Conway County",
            "value": 25.7
        }, {
            "fips_code": 5031,
            "state": "AR",
            "area_name": "Craighead County",
            "value": 24.2
        }, {
            "fips_code": 5033,
            "state": "AR",
            "area_name": "Crawford County",
            "value": 20.9
        }, {
            "fips_code": 5035,
            "state": "AR",
            "area_name": "Crittenden County",
            "value": 32.1
        }, {
            "fips_code": 5037,
            "state": "AR",
            "area_name": "Cross County",
            "value": 25.0
        }, {
            "fips_code": 5039,
            "state": "AR",
            "area_name": "Dallas County",
            "value": 32.6
        }, {
            "fips_code": 5041,
            "state": "AR",
            "area_name": "Desha County",
            "value": 37.5
        }, {
            "fips_code": 5043,
            "state": "AR",
            "area_name": "Drew County",
            "value": 25.2
        }, {
            "fips_code": 5045,
            "state": "AR",
            "area_name": "Faulkner County",
            "value": 14.3
        }, {
            "fips_code": 5047,
            "state": "AR",
            "area_name": "Franklin County",
            "value": 24.9
        }, {
            "fips_code": 5049,
            "state": "AR",
            "area_name": "Fulton County",
            "value": 29.2
        }, {
            "fips_code": 5051,
            "state": "AR",
            "area_name": "Garland County",
            "value": 21.2
        }, {
            "fips_code": 5053,
            "state": "AR",
            "area_name": "Grant County",
            "value": 15.9
        }, {
            "fips_code": 5055,
            "state": "AR",
            "area_name": "Greene County",
            "value": 18.6
        }, {
            "fips_code": 5057,
            "state": "AR",
            "area_name": "Hempstead County",
            "value": 27.8
        }, {
            "fips_code": 5059,
            "state": "AR",
            "area_name": "Hot Spring County",
            "value": 27.0
        }, {
            "fips_code": 5061,
            "state": "AR",
            "area_name": "Howard County",
            "value": 26.5
        }, {
            "fips_code": 5063,
            "state": "AR",
            "area_name": "Independence County",
            "value": 22.3
        }, {
            "fips_code": 5065,
            "state": "AR",
            "area_name": "Izard County",
            "value": 27.2
        }, {
            "fips_code": 5067,
            "state": "AR",
            "area_name": "Jackson County",
            "value": 29.5
        }, {
            "fips_code": 5069,
            "state": "AR",
            "area_name": "Jefferson County",
            "value": 28.8
        }, {
            "fips_code": 5071,
            "state": "AR",
            "area_name": "Johnson County",
            "value": 23.3
        }, {
            "fips_code": 5073,
            "state": "AR",
            "area_name": "Lafayette County",
            "value": 32.6
        }, {
            "fips_code": 5075,
            "state": "AR",
            "area_name": "Lawrence County",
            "value": 30.3
        }, {
            "fips_code": 5077,
            "state": "AR",
            "area_name": "Lee County",
            "value": 45.4
        }, {
            "fips_code": 5079,
            "state": "AR",
            "area_name": "Lincoln County",
            "value": 25.1
        }, {
            "fips_code": 5081,
            "state": "AR",
            "area_name": "Little River County",
            "value": 25.0
        }, {
            "fips_code": 5083,
            "state": "AR",
            "area_name": "Logan County",
            "value": 21.5
        }, {
            "fips_code": 5085,
            "state": "AR",
            "area_name": "Lonoke County",
            "value": 14.6
        }, {
            "fips_code": 5087,
            "state": "AR",
            "area_name": "Madison County",
            "value": 22.7
        }, {
            "fips_code": 5089,
            "state": "AR",
            "area_name": "Marion County",
            "value": 30.7
        }, {
            "fips_code": 5091,
            "state": "AR",
            "area_name": "Miller County",
            "value": 30.2
        }, {
            "fips_code": 5093,
            "state": "AR",
            "area_name": "Mississippi County",
            "value": 31.2
        }, {
            "fips_code": 5095,
            "state": "AR",
            "area_name": "Monroe County",
            "value": 36.5
        }, {
            "fips_code": 5097,
            "state": "AR",
            "area_name": "Montgomery County",
            "value": 29.6
        }, {
            "fips_code": 5099,
            "state": "AR",
            "area_name": "Nevada County",
            "value": 32.2
        }, {
            "fips_code": 5101,
            "state": "AR",
            "area_name": "Newton County",
            "value": 30.0
        }, {
            "fips_code": 5103,
            "state": "AR",
            "area_name": "Ouachita County",
            "value": 29.4
        }, {
            "fips_code": 5105,
            "state": "AR",
            "area_name": "Perry County",
            "value": 23.9
        }, {
            "fips_code": 5107,
            "state": "AR",
            "area_name": "Phillips County",
            "value": 45.9
        }, {
            "fips_code": 5109,
            "state": "AR",
            "area_name": "Pike County",
            "value": 25.2
        }, {
            "fips_code": 5111,
            "state": "AR",
            "area_name": "Poinsett County",
            "value": 30.3
        }, {
            "fips_code": 5113,
            "state": "AR",
            "area_name": "Polk County",
            "value": 28.8
        }, {
            "fips_code": 5115,
            "state": "AR",
            "area_name": "Pope County",
            "value": 23.1
        }, {
            "fips_code": 5117,
            "state": "AR",
            "area_name": "Prairie County",
            "value": 23.5
        }, {
            "fips_code": 5119,
            "state": "AR",
            "area_name": "Pulaski County",
            "value": 24.9
        }, {
            "fips_code": 5121,
            "state": "AR",
            "area_name": "Randolph County",
            "value": 24.4
        }, {
            "fips_code": 5123,
            "state": "AR",
            "area_name": "St. Francis County",
            "value": 42.2
        }, {
            "fips_code": 5125,
            "state": "AR",
            "area_name": "Saline County",
            "value": 12.1
        }, {
            "fips_code": 5127,
            "state": "AR",
            "area_name": "Scott County",
            "value": 29.5
        }, {
            "fips_code": 5129,
            "state": "AR",
            "area_name": "Searcy County",
            "value": 32.0
        }, {
            "fips_code": 5131,
            "state": "AR",
            "area_name": "Sebastian County",
            "value": 23.4
        }, {
            "fips_code": 5133,
            "state": "AR",
            "area_name": "Sevier County",
            "value": 26.0
        }, {
            "fips_code": 5135,
            "state": "AR",
            "area_name": "Sharp County",
            "value": 28.4
        }, {
            "fips_code": 5137,
            "state": "AR",
            "area_name": "Stone County",
            "value": 34.7
        }, {
            "fips_code": 5139,
            "state": "AR",
            "area_name": "Union County",
            "value": 23.9
        }, {
            "fips_code": 5141,
            "state": "AR",
            "area_name": "Van Buren County",
            "value": 27.1
        }, {
            "fips_code": 5143,
            "state": "AR",
            "area_name": "Washington County",
            "value": 15.2
        }, {
            "fips_code": 5145,
            "state": "AR",
            "area_name": "White County",
            "value": 20.6
        }, {
            "fips_code": 5147,
            "state": "AR",
            "area_name": "Woodruff County",
            "value": 33.7
        }, {
            "fips_code": 5149,
            "state": "AR",
            "area_name": "Yell County",
            "value": 21.5
        }, {
            "fips_code": 6000,
            "state": "CA",
            "area_name": "California",
            "value": 15.8
        }, {
            "fips_code": 6001,
            "state": "CA",
            "area_name": "Alameda County",
            "value": 9.9
        }, {
            "fips_code": 6003,
            "state": "CA",
            "area_name": "Alpine County",
            "value": 27.2
        }, {
            "fips_code": 6005,
            "state": "CA",
            "area_name": "Amador County",
            "value": 13.5
        }, {
            "fips_code": 6007,
            "state": "CA",
            "area_name": "Butte County",
            "value": 18.3
        }, {
            "fips_code": 6009,
            "state": "CA",
            "area_name": "Calaveras County",
            "value": 18.3
        }, {
            "fips_code": 6011,
            "state": "CA",
            "area_name": "Colusa County",
            "value": 15.6
        }, {
            "fips_code": 6013,
            "state": "CA",
            "area_name": "Contra Costa County",
            "value": 11.3
        }, {
            "fips_code": 6015,
            "state": "CA",
            "area_name": "Del Norte County",
            "value": 27.2
        }, {
            "fips_code": 6017,
            "state": "CA",
            "area_name": "El Dorado County",
            "value": 10.5
        }, {
            "fips_code": 6019,
            "state": "CA",
            "area_name": "Fresno County",
            "value": 26.8
        }, {
            "fips_code": 6021,
            "state": "CA",
            "area_name": "Glenn County",
            "value": 21.4
        }, {
            "fips_code": 6023,
            "state": "CA",
            "area_name": "Humboldt County",
            "value": 23.8
        }, {
            "fips_code": 6025,
            "state": "CA",
            "area_name": "Imperial County",
            "value": 21.6
        }, {
            "fips_code": 6027,
            "state": "CA",
            "area_name": "Inyo County",
            "value": 16.9
        }, {
            "fips_code": 6029,
            "state": "CA",
            "area_name": "Kern County",
            "value": 25.3
        }, {
            "fips_code": 6031,
            "state": "CA",
            "area_name": "Kings County",
            "value": 22.6
        }, {
            "fips_code": 6033,
            "state": "CA",
            "area_name": "Lake County",
            "value": 25.0
        }, {
            "fips_code": 6035,
            "state": "CA",
            "area_name": "Lassen County",
            "value": 20.2
        }, {
            "fips_code": 6037,
            "state": "CA",
            "area_name": "Los Angeles County",
            "value": 18.4
        }, {
            "fips_code": 6039,
            "state": "CA",
            "area_name": "Madera County",
            "value": 27.7
        }, {
            "fips_code": 6041,
            "state": "CA",
            "area_name": "Marin County",
            "value": 7.9
        }, {
            "fips_code": 6043,
            "state": "CA",
            "area_name": "Mariposa County",
            "value": 22.0
        }, {
            "fips_code": 6045,
            "state": "CA",
            "area_name": "Mendocino County",
            "value": 22.3
        }, {
            "fips_code": 6047,
            "state": "CA",
            "area_name": "Merced County",
            "value": 28.8
        }, {
            "fips_code": 6049,
            "state": "CA",
            "area_name": "Modoc County",
            "value": 29.8
        }, {
            "fips_code": 6051,
            "state": "CA",
            "area_name": "Mono County",
            "value": 12.1
        }, {
            "fips_code": 6053,
            "state": "CA",
            "area_name": "Monterey County",
            "value": 15.5
        }, {
            "fips_code": 6055,
            "state": "CA",
            "area_name": "Napa County",
            "value": 10.1
        }, {
            "fips_code": 6057,
            "state": "CA",
            "area_name": "Nevada County",
            "value": 14.7
        }, {
            "fips_code": 6059,
            "state": "CA",
            "area_name": "Orange County",
            "value": 11.0
        }, {
            "fips_code": 6061,
            "state": "CA",
            "area_name": "Placer County",
            "value": 7.2
        }, {
            "fips_code": 6063,
            "state": "CA",
            "area_name": "Plumas County",
            "value": 21.8
        }, {
            "fips_code": 6065,
            "state": "CA",
            "area_name": "Riverside County",
            "value": 16.0
        }, {
            "fips_code": 6067,
            "state": "CA",
            "area_name": "Sacramento County",
            "value": 16.9
        }, {
            "fips_code": 6069,
            "state": "CA",
            "area_name": "San Benito County",
            "value": 11.1
        }, {
            "fips_code": 6071,
            "state": "CA",
            "area_name": "San Bernardino County",
            "value": 17.1
        }, {
            "fips_code": 6073,
            "state": "CA",
            "area_name": "San Diego County",
            "value": 12.3
        }, {
            "fips_code": 6075,
            "state": "CA",
            "area_name": "San Francisco County",
            "value": 11.7
        }, {
            "fips_code": 6077,
            "state": "CA",
            "area_name": "San Joaquin County",
            "value": 15.7
        }, {
            "fips_code": 6079,
            "state": "CA",
            "area_name": "San Luis Obispo County",
            "value": 13.8
        }, {
            "fips_code": 6081,
            "state": "CA",
            "area_name": "San Mateo County",
            "value": 6.5
        }, {
            "fips_code": 6083,
            "state": "CA",
            "area_name": "Santa Barbara County",
            "value": 16.8
        }, {
            "fips_code": 6085,
            "state": "CA",
            "area_name": "Santa Clara County",
            "value": 7.4
        }, {
            "fips_code": 6087,
            "state": "CA",
            "area_name": "Santa Cruz County",
            "value": 12.3
        }, {
            "fips_code": 6089,
            "state": "CA",
            "area_name": "Shasta County",
            "value": 18.0
        }, {
            "fips_code": 6091,
            "state": "CA",
            "area_name": "Sierra County",
            "value": 16.2
        }, {
            "fips_code": 6093,
            "state": "CA",
            "area_name": "Siskiyou County",
            "value": 23.3
        }, {
            "fips_code": 6095,
            "state": "CA",
            "area_name": "Solano County",
            "value": 12.6
        }, {
            "fips_code": 6097,
            "state": "CA",
            "area_name": "Sonoma County",
            "value": 10.4
        }, {
            "fips_code": 6099,
            "state": "CA",
            "area_name": "Stanislaus County",
            "value": 19.4
        }, {
            "fips_code": 6101,
            "state": "CA",
            "area_name": "Sutter County",
            "value": 22.3
        }, {
            "fips_code": 6103,
            "state": "CA",
            "area_name": "Tehama County",
            "value": 20.6
        }, {
            "fips_code": 6105,
            "state": "CA",
            "area_name": "Trinity County",
            "value": 29.2
        }, {
            "fips_code": 6107,
            "state": "CA",
            "area_name": "Tulare County",
            "value": 24.4
        }, {
            "fips_code": 6109,
            "state": "CA",
            "area_name": "Tuolumne County",
            "value": 17.3
        }, {
            "fips_code": 6111,
            "state": "CA",
            "area_name": "Ventura County",
            "value": 12.1
        }, {
            "fips_code": 6113,
            "state": "CA",
            "area_name": "Yolo County",
            "value": 11.6
        }, {
            "fips_code": 6115,
            "state": "CA",
            "area_name": "Yuba County",
            "value": 21.9
        }, {
            "fips_code": 8000,
            "state": "CO",
            "area_name": "Colorado",
            "value": 11.8
        }, {
            "fips_code": 8001,
            "state": "CO",
            "area_name": "Adams County",
            "value": 12.9
        }, {
            "fips_code": 8003,
            "state": "CO",
            "area_name": "Alamosa County",
            "value": 23.4
        }, {
            "fips_code": 8005,
            "state": "CO",
            "area_name": "Arapahoe County",
            "value": 11.5
        }, {
            "fips_code": 8007,
            "state": "CO",
            "area_name": "Archuleta County",
            "value": 20.3
        }, {
            "fips_code": 8009,
            "state": "CO",
            "area_name": "Baca County",
            "value": 27.0
        }, {
            "fips_code": 8011,
            "state": "CO",
            "area_name": "Bent County",
            "value": 28.8
        }, {
            "fips_code": 8013,
            "state": "CO",
            "area_name": "Boulder County",
            "value": 8.6
        }, {
            "fips_code": 8014,
            "state": "CO",
            "area_name": "Broomfield County",
            "value": 5.3
        }, {
            "fips_code": 8015,
            "state": "CO",
            "area_name": "Chaffee County",
            "value": 12.8
        }, {
            "fips_code": 8017,
            "state": "CO",
            "area_name": "Cheyenne County",
            "value": 20.2
        }, {
            "fips_code": 8019,
            "state": "CO",
            "area_name": "Clear Creek County",
            "value": 12.2
        }, {
            "fips_code": 8021,
            "state": "CO",
            "area_name": "Conejos County",
            "value": 22.7
        }, {
            "fips_code": 8023,
            "state": "CO",
            "area_name": "Costilla County",
            "value": 36.0
        }, {
            "fips_code": 8025,
            "state": "CO",
            "area_name": "Crowley County",
            "value": 31.0
        }, {
            "fips_code": 8027,
            "state": "CO",
            "area_name": "Custer County",
            "value": 22.4
        }, {
            "fips_code": 8029,
            "state": "CO",
            "area_name": "Delta County",
            "value": 21.1
        }, {
            "fips_code": 8031,
            "state": "CO",
            "area_name": "Denver County",
            "value": 15.8
        }, {
            "fips_code": 8033,
            "state": "CO",
            "area_name": "Dolores County",
            "value": 19.3
        }, {
            "fips_code": 8035,
            "state": "CO",
            "area_name": "Douglas County",
            "value": 2.8
        }, {
            "fips_code": 8037,
            "state": "CO",
            "area_name": "Eagle County",
            "value": 7.5
        }, {
            "fips_code": 8039,
            "state": "CO",
            "area_name": "Elbert County",
            "value": 7.1
        }, {
            "fips_code": 8041,
            "state": "CO",
            "area_name": "El Paso County",
            "value": 11.5
        }, {
            "fips_code": 8043,
            "state": "CO",
            "area_name": "Fremont County",
            "value": 19.4
        }, {
            "fips_code": 8045,
            "state": "CO",
            "area_name": "Garfield County",
            "value": 12.5
        }, {
            "fips_code": 8047,
            "state": "CO",
            "area_name": "Gilpin County",
            "value": 10.3
        }, {
            "fips_code": 8049,
            "state": "CO",
            "area_name": "Grand County",
            "value": 10.1
        }, {
            "fips_code": 8051,
            "state": "CO",
            "area_name": "Gunnison County",
            "value": 12.1
        }, {
            "fips_code": 8053,
            "state": "CO",
            "area_name": "Hinsdale County",
            "value": 17.2
        }, {
            "fips_code": 8055,
            "state": "CO",
            "area_name": "Huerfano County",
            "value": 31.9
        }, {
            "fips_code": 8057,
            "state": "CO",
            "area_name": "Jackson County",
            "value": 26.0
        }, {
            "fips_code": 8059,
            "state": "CO",
            "area_name": "Jefferson County",
            "value": 8.0
        }, {
            "fips_code": 8061,
            "state": "CO",
            "area_name": "Kiowa County",
            "value": 19.5
        }, {
            "fips_code": 8063,
            "state": "CO",
            "area_name": "Kit Carson County",
            "value": 17.8
        }, {
            "fips_code": 8065,
            "state": "CO",
            "area_name": "Lake County",
            "value": 15.9
        }, {
            "fips_code": 8067,
            "state": "CO",
            "area_name": "La Plata County",
            "value": 12.1
        }, {
            "fips_code": 8069,
            "state": "CO",
            "area_name": "Larimer County",
            "value": 10.6
        }, {
            "fips_code": 8071,
            "state": "CO",
            "area_name": "Las Animas County",
            "value": 29.0
        }, {
            "fips_code": 8073,
            "state": "CO",
            "area_name": "Lincoln County",
            "value": 20.2
        }, {
            "fips_code": 8075,
            "state": "CO",
            "area_name": "Logan County",
            "value": 18.1
        }, {
            "fips_code": 8077,
            "state": "CO",
            "area_name": "Mesa County",
            "value": 14.4
        }, {
            "fips_code": 8079,
            "state": "CO",
            "area_name": "Mineral County",
            "value": 16.2
        }, {
            "fips_code": 8081,
            "state": "CO",
            "area_name": "Moffat County",
            "value": 14.4
        }, {
            "fips_code": 8083,
            "state": "CO",
            "area_name": "Montezuma County",
            "value": 23.5
        }, {
            "fips_code": 8085,
            "state": "CO",
            "area_name": "Montrose County",
            "value": 18.7
        }, {
            "fips_code": 8087,
            "state": "CO",
            "area_name": "Morgan County",
            "value": 16.3
        }, {
            "fips_code": 8089,
            "state": "CO",
            "area_name": "Otero County",
            "value": 28.7
        }, {
            "fips_code": 8091,
            "state": "CO",
            "area_name": "Ouray County",
            "value": 8.5
        }, {
            "fips_code": 8093,
            "state": "CO",
            "area_name": "Park County",
            "value": 11.4
        }, {
            "fips_code": 8095,
            "state": "CO",
            "area_name": "Phillips County",
            "value": 16.4
        }, {
            "fips_code": 8097,
            "state": "CO",
            "area_name": "Pitkin County",
            "value": 6.2
        }, {
            "fips_code": 8099,
            "state": "CO",
            "area_name": "Prowers County",
            "value": 25.2
        }, {
            "fips_code": 8101,
            "state": "CO",
            "area_name": "Pueblo County",
            "value": 19.4
        }, {
            "fips_code": 8103,
            "state": "CO",
            "area_name": "Rio Blanco County",
            "value": 12.8
        }, {
            "fips_code": 8105,
            "state": "CO",
            "area_name": "Rio Grande County",
            "value": 21.0
        }, {
            "fips_code": 8107,
            "state": "CO",
            "area_name": "Routt County",
            "value": 6.6
        }, {
            "fips_code": 8109,
            "state": "CO",
            "area_name": "Saguache County",
            "value": 34.7
        }, {
            "fips_code": 8111,
            "state": "CO",
            "area_name": "San Juan County",
            "value": 26.1
        }, {
            "fips_code": 8113,
            "state": "CO",
            "area_name": "San Miguel County",
            "value": 9.5
        }, {
            "fips_code": 8115,
            "state": "CO",
            "area_name": "Sedgwick County",
            "value": 21.3
        }, {
            "fips_code": 8117,
            "state": "CO",
            "area_name": "Summit County",
            "value": 7.4
        }, {
            "fips_code": 8119,
            "state": "CO",
            "area_name": "Teller County",
            "value": 13.6
        }, {
            "fips_code": 8121,
            "state": "CO",
            "area_name": "Washington County",
            "value": 16.9
        }, {
            "fips_code": 8123,
            "state": "CO",
            "area_name": "Weld County",
            "value": 11.3
        }, {
            "fips_code": 8125,
            "state": "CO",
            "area_name": "Yuma County",
            "value": 18.2
        }, {
            "fips_code": 9000,
            "state": "CT",
            "area_name": "Connecticut",
            "value": 12.9
        }, {
            "fips_code": 9001,
            "state": "CT",
            "area_name": "Fairfield County",
            "value": 11.3
        }, {
            "fips_code": 9003,
            "state": "CT",
            "area_name": "Hartford County",
            "value": 13.8
        }, {
            "fips_code": 9005,
            "state": "CT",
            "area_name": "Litchfield County",
            "value": 10.1
        }, {
            "fips_code": 9007,
            "state": "CT",
            "area_name": "Middlesex County",
            "value": 7.9
        }, {
            "fips_code": 9009,
            "state": "CT",
            "area_name": "New Haven County",
            "value": 15.5
        }, {
            "fips_code": 9011,
            "state": "CT",
            "area_name": "New London County",
            "value": 12.2
        }, {
            "fips_code": 9013,
            "state": "CT",
            "area_name": "Tolland County",
            "value": 9.4
        }, {
            "fips_code": 9015,
            "state": "CT",
            "area_name": "Windham County",
            "value": 16.7
        }, {
            "fips_code": 10000,
            "state": "DE",
            "area_name": "Delaware",
            "value": 16.2
        }, {
            "fips_code": 10001,
            "state": "DE",
            "area_name": "Kent County",
            "value": 17.5
        }, {
            "fips_code": 10003,
            "state": "DE",
            "area_name": "New Castle County",
            "value": 14.8
        }, {
            "fips_code": 10005,
            "state": "DE",
            "area_name": "Sussex County",
            "value": 18.9
        }, {
            "fips_code": 11000,
            "state": "DC",
            "area_name": "District of Columbia",
            "value": 25.5
        }, {
            "fips_code": 11001,
            "state": "DC",
            "area_name": "District of Columbia",
            "value": 25.5
        }, {
            "fips_code": 12000,
            "state": "FL",
            "area_name": "Florida",
            "value": 18.4
        }, {
            "fips_code": 12001,
            "state": "FL",
            "area_name": "Alachua County",
            "value": 16.2
        }, {
            "fips_code": 12003,
            "state": "FL",
            "area_name": "Baker County",
            "value": 22.3
        }, {
            "fips_code": 12005,
            "state": "FL",
            "area_name": "Bay County",
            "value": 23.8
        }, {
            "fips_code": 12007,
            "state": "FL",
            "area_name": "Bradford County",
            "value": 24.8
        }, {
            "fips_code": 12009,
            "state": "FL",
            "area_name": "Brevard County",
            "value": 17.3
        }, {
            "fips_code": 12011,
            "state": "FL",
            "area_name": "Broward County",
            "value": 16.5
        }, {
            "fips_code": 12013,
            "state": "FL",
            "area_name": "Calhoun County",
            "value": 28.8
        }, {
            "fips_code": 12015,
            "state": "FL",
            "area_name": "Charlotte County",
            "value": 19.2
        }, {
            "fips_code": 12017,
            "state": "FL",
            "area_name": "Citrus County",
            "value": 24.9
        }, {
            "fips_code": 12019,
            "state": "FL",
            "area_name": "Clay County",
            "value": 12.1
        }, {
            "fips_code": 12021,
            "state": "FL",
            "area_name": "Collier County",
            "value": 17.3
        }, {
            "fips_code": 12023,
            "state": "FL",
            "area_name": "Columbia County",
            "value": 22.7
        }, {
            "fips_code": 12027,
            "state": "FL",
            "area_name": "DeSoto County",
            "value": 36.7
        }, {
            "fips_code": 12029,
            "state": "FL",
            "area_name": "Dixie County",
            "value": 32.7
        }, {
            "fips_code": 12031,
            "state": "FL",
            "area_name": "Duval County",
            "value": 20.9
        }, {
            "fips_code": 12033,
            "state": "FL",
            "area_name": "Escambia County",
            "value": 28.1
        }, {
            "fips_code": 12035,
            "state": "FL",
            "area_name": "Flagler County",
            "value": 19.2
        }, {
            "fips_code": 12037,
            "state": "FL",
            "area_name": "Franklin County",
            "value": 35.0
        }, {
            "fips_code": 12039,
            "state": "FL",
            "area_name": "Gadsden County",
            "value": 42.4
        }, {
            "fips_code": 12041,
            "state": "FL",
            "area_name": "Gilchrist County",
            "value": 22.5
        }, {
            "fips_code": 12043,
            "state": "FL",
            "area_name": "Glades County",
            "value": 24.7
        }, {
            "fips_code": 12045,
            "state": "FL",
            "area_name": "Gulf County",
            "value": 25.2
        }, {
            "fips_code": 12047,
            "state": "FL",
            "area_name": "Hamilton County",
            "value": 35.7
        }, {
            "fips_code": 12049,
            "state": "FL",
            "area_name": "Hardee County",
            "value": 26.2
        }, {
            "fips_code": 12051,
            "state": "FL",
            "area_name": "Hendry County",
            "value": 28.3
        }, {
            "fips_code": 12053,
            "state": "FL",
            "area_name": "Hernando County",
            "value": 18.0
        }, {
            "fips_code": 12055,
            "state": "FL",
            "area_name": "Highlands County",
            "value": 22.8
        }, {
            "fips_code": 12057,
            "state": "FL",
            "area_name": "Hillsborough County",
            "value": 19.5
        }, {
            "fips_code": 12059,
            "state": "FL",
            "area_name": "Holmes County",
            "value": 30.3
        }, {
            "fips_code": 12061,
            "state": "FL",
            "area_name": "Indian River County",
            "value": 19.3
        }, {
            "fips_code": 12063,
            "state": "FL",
            "area_name": "Jackson County",
            "value": 26.9
        }, {
            "fips_code": 12065,
            "state": "FL",
            "area_name": "Jefferson County",
            "value": 25.4
        }, {
            "fips_code": 12067,
            "state": "FL",
            "area_name": "Lafayette County",
            "value": 28.2
        }, {
            "fips_code": 12069,
            "state": "FL",
            "area_name": "Lake County",
            "value": 15.9
        }, {
            "fips_code": 12071,
            "state": "FL",
            "area_name": "Lee County",
            "value": 18.1
        }, {
            "fips_code": 12073,
            "state": "FL",
            "area_name": "Leon County",
            "value": 16.1
        }, {
            "fips_code": 12075,
            "state": "FL",
            "area_name": "Levy County",
            "value": 32.8
        }, {
            "fips_code": 12077,
            "state": "FL",
            "area_name": "Liberty County",
            "value": 27.8
        }, {
            "fips_code": 12079,
            "state": "FL",
            "area_name": "Madison County",
            "value": 31.2
        }, {
            "fips_code": 12081,
            "state": "FL",
            "area_name": "Manatee County",
            "value": 15.8
        }, {
            "fips_code": 12083,
            "state": "FL",
            "area_name": "Marion County",
            "value": 20.7
        }, {
            "fips_code": 12085,
            "state": "FL",
            "area_name": "Martin County",
            "value": 16.9
        }, {
            "fips_code": 12086,
            "state": "FL",
            "area_name": "Miami-Dade County",
            "value": 18.1
        }, {
            "fips_code": 12087,
            "state": "FL",
            "area_name": "Monroe County",
            "value": 17.4
        }, {
            "fips_code": 12089,
            "state": "FL",
            "area_name": "Nassau County",
            "value": 14.3
        }, {
            "fips_code": 12091,
            "state": "FL",
            "area_name": "Okaloosa County",
            "value": 14.6
        }, {
            "fips_code": 12093,
            "state": "FL",
            "area_name": "Okeechobee County",
            "value": 30.4
        }, {
            "fips_code": 12095,
            "state": "FL",
            "area_name": "Orange County",
            "value": 20.4
        }, {
            "fips_code": 12097,
            "state": "FL",
            "area_name": "Osceola County",
            "value": 20.4
        }, {
            "fips_code": 12099,
            "state": "FL",
            "area_name": "Palm Beach County",
            "value": 15.9
        }, {
            "fips_code": 12101,
            "state": "FL",
            "area_name": "Pasco County",
            "value": 16.8
        }, {
            "fips_code": 12103,
            "state": "FL",
            "area_name": "Pinellas County",
            "value": 15.7
        }, {
            "fips_code": 12105,
            "state": "FL",
            "area_name": "Polk County",
            "value": 22.7
        }, {
            "fips_code": 12107,
            "state": "FL",
            "area_name": "Putnam County",
            "value": 41.1
        }, {
            "fips_code": 12109,
            "state": "FL",
            "area_name": "St. Johns County",
            "value": 6.6
        }, {
            "fips_code": 12111,
            "state": "FL",
            "area_name": "St. Lucie County",
            "value": 18.4
        }, {
            "fips_code": 12113,
            "state": "FL",
            "area_name": "Santa Rosa County",
            "value": 12.0
        }, {
            "fips_code": 12115,
            "state": "FL",
            "area_name": "Sarasota County",
            "value": 13.3
        }, {
            "fips_code": 12117,
            "state": "FL",
            "area_name": "Seminole County",
            "value": 11.2
        }, {
            "fips_code": 12119,
            "state": "FL",
            "area_name": "Sumter County",
            "value": 25.6
        }, {
            "fips_code": 12121,
            "state": "FL",
            "area_name": "Suwannee County",
            "value": 28.4
        }, {
            "fips_code": 12123,
            "state": "FL",
            "area_name": "Taylor County",
            "value": 28.6
        }, {
            "fips_code": 12125,
            "state": "FL",
            "area_name": "Union County",
            "value": 24.3
        }, {
            "fips_code": 12127,
            "state": "FL",
            "area_name": "Volusia County",
            "value": 19.1
        }, {
            "fips_code": 12129,
            "state": "FL",
            "area_name": "Wakulla County",
            "value": 16.8
        }, {
            "fips_code": 12131,
            "state": "FL",
            "area_name": "Walton County",
            "value": 18.8
        }, {
            "fips_code": 12133,
            "state": "FL",
            "area_name": "Washington County",
            "value": 28.1
        }, {
            "fips_code": 13000,
            "state": "GA",
            "area_name": "Georgia",
            "value": 20.5
        }, {
            "fips_code": 13001,
            "state": "GA",
            "area_name": "Appling County",
            "value": 27.6
        }, {
            "fips_code": 13003,
            "state": "GA",
            "area_name": "Atkinson County",
            "value": 38.7
        }, {
            "fips_code": 13005,
            "state": "GA",
            "area_name": "Bacon County",
            "value": 35.7
        }, {
            "fips_code": 13007,
            "state": "GA",
            "area_name": "Baker County",
            "value": 41.5
        }, {
            "fips_code": 13009,
            "state": "GA",
            "area_name": "Baldwin County",
            "value": 31.6
        }, {
            "fips_code": 13011,
            "state": "GA",
            "area_name": "Banks County",
            "value": 19.4
        }, {
            "fips_code": 13013,
            "state": "GA",
            "area_name": "Barrow County",
            "value": 13.3
        }, {
            "fips_code": 13015,
            "state": "GA",
            "area_name": "Bartow County",
            "value": 17.3
        }, {
            "fips_code": 13017,
            "state": "GA",
            "area_name": "Ben Hill County",
            "value": 34.4
        }, {
            "fips_code": 13019,
            "state": "GA",
            "area_name": "Berrien County",
            "value": 27.9
        }, {
            "fips_code": 13021,
            "state": "GA",
            "area_name": "Bibb County",
            "value": 39.0
        }, {
            "fips_code": 13023,
            "state": "GA",
            "area_name": "Bleckley County",
            "value": 28.8
        }, {
            "fips_code": 13025,
            "state": "GA",
            "area_name": "Brantley County",
            "value": 27.4
        }, {
            "fips_code": 13027,
            "state": "GA",
            "area_name": "Brooks County",
            "value": 36.0
        }, {
            "fips_code": 13029,
            "state": "GA",
            "area_name": "Bryan County",
            "value": 11.2
        }, {
            "fips_code": 13031,
            "state": "GA",
            "area_name": "Bulloch County",
            "value": 25.3
        }, {
            "fips_code": 13033,
            "state": "GA",
            "area_name": "Burke County",
            "value": 30.5
        }, {
            "fips_code": 13035,
            "state": "GA",
            "area_name": "Butts County",
            "value": 20.6
        }, {
            "fips_code": 13037,
            "state": "GA",
            "area_name": "Calhoun County",
            "value": 39.1
        }, {
            "fips_code": 13039,
            "state": "GA",
            "area_name": "Camden County",
            "value": 16.6
        }, {
            "fips_code": 13043,
            "state": "GA",
            "area_name": "Candler County",
            "value": 34.0
        }, {
            "fips_code": 13045,
            "state": "GA",
            "area_name": "Carroll County",
            "value": 20.0
        }, {
            "fips_code": 13047,
            "state": "GA",
            "area_name": "Catoosa County",
            "value": 17.2
        }, {
            "fips_code": 13049,
            "state": "GA",
            "area_name": "Charlton County",
            "value": 33.5
        }, {
            "fips_code": 13051,
            "state": "GA",
            "area_name": "Chatham County",
            "value": 24.1
        }, {
            "fips_code": 13053,
            "state": "GA",
            "area_name": "Chattahoochee County",
            "value": 17.1
        }, {
            "fips_code": 13055,
            "state": "GA",
            "area_name": "Chattooga County",
            "value": 28.6
        }, {
            "fips_code": 13057,
            "state": "GA",
            "area_name": "Cherokee County",
            "value": 9.199999999999999
        }, {
            "fips_code": 13059,
            "state": "GA",
            "area_name": "Clarke County",
            "value": 25.4
        }, {
            "fips_code": 13061,
            "state": "GA",
            "area_name": "Clay County",
            "value": 38.6
        }, {
            "fips_code": 13063,
            "state": "GA",
            "area_name": "Clayton County",
            "value": 29.1
        }, {
            "fips_code": 13065,
            "state": "GA",
            "area_name": "Clinch County",
            "value": 31.4
        }, {
            "fips_code": 13067,
            "state": "GA",
            "area_name": "Cobb County",
            "value": 12.2
        }, {
            "fips_code": 13069,
            "state": "GA",
            "area_name": "Coffee County",
            "value": 35.0
        }, {
            "fips_code": 13071,
            "state": "GA",
            "area_name": "Colquitt County",
            "value": 30.8
        }, {
            "fips_code": 13073,
            "state": "GA",
            "area_name": "Columbia County",
            "value": 9.199999999999999
        }, {
            "fips_code": 13075,
            "state": "GA",
            "area_name": "Cook County",
            "value": 30.5
        }, {
            "fips_code": 13077,
            "state": "GA",
            "area_name": "Coweta County",
            "value": 12.5
        }, {
            "fips_code": 13079,
            "state": "GA",
            "area_name": "Crawford County",
            "value": 26.3
        }, {
            "fips_code": 13081,
            "state": "GA",
            "area_name": "Crisp County",
            "value": 38.6
        }, {
            "fips_code": 13083,
            "state": "GA",
            "area_name": "Dade County",
            "value": 16.7
        }, {
            "fips_code": 13085,
            "state": "GA",
            "area_name": "Dawson County",
            "value": 13.9
        }, {
            "fips_code": 13087,
            "state": "GA",
            "area_name": "Decatur County",
            "value": 35.7
        }, {
            "fips_code": 13089,
            "state": "GA",
            "area_name": "DeKalb County",
            "value": 22.4
        }, {
            "fips_code": 13091,
            "state": "GA",
            "area_name": "Dodge County",
            "value": 31.7
        }, {
            "fips_code": 13093,
            "state": "GA",
            "area_name": "Dooly County",
            "value": 33.8
        }, {
            "fips_code": 13095,
            "state": "GA",
            "area_name": "Dougherty County",
            "value": 38.4
        }, {
            "fips_code": 13097,
            "state": "GA",
            "area_name": "Douglas County",
            "value": 20.8
        }, {
            "fips_code": 13099,
            "state": "GA",
            "area_name": "Early County",
            "value": 41.5
        }, {
            "fips_code": 13101,
            "state": "GA",
            "area_name": "Echols County",
            "value": 31.7
        }, {
            "fips_code": 13103,
            "state": "GA",
            "area_name": "Effingham County",
            "value": 12.6
        }, {
            "fips_code": 13105,
            "state": "GA",
            "area_name": "Elbert County",
            "value": 30.3
        }, {
            "fips_code": 13107,
            "state": "GA",
            "area_name": "Emanuel County",
            "value": 33.2
        }, {
            "fips_code": 13109,
            "state": "GA",
            "area_name": "Evans County",
            "value": 37.1
        }, {
            "fips_code": 13111,
            "state": "GA",
            "area_name": "Fannin County",
            "value": 22.9
        }, {
            "fips_code": 13113,
            "state": "GA",
            "area_name": "Fayette County",
            "value": 8.6
        }, {
            "fips_code": 13115,
            "state": "GA",
            "area_name": "Floyd County",
            "value": 25.2
        }, {
            "fips_code": 13117,
            "state": "GA",
            "area_name": "Forsyth County",
            "value": 5.6
        }, {
            "fips_code": 13119,
            "state": "GA",
            "area_name": "Franklin County",
            "value": 27.7
        }, {
            "fips_code": 13121,
            "state": "GA",
            "area_name": "Fulton County",
            "value": 19.3
        }, {
            "fips_code": 13123,
            "state": "GA",
            "area_name": "Gilmer County",
            "value": 23.3
        }, {
            "fips_code": 13125,
            "state": "GA",
            "area_name": "Glascock County",
            "value": 19.4
        }, {
            "fips_code": 13127,
            "state": "GA",
            "area_name": "Glynn County",
            "value": 26.1
        }, {
            "fips_code": 13129,
            "state": "GA",
            "area_name": "Gordon County",
            "value": 17.5
        }, {
            "fips_code": 13131,
            "state": "GA",
            "area_name": "Grady County",
            "value": 31.3
        }, {
            "fips_code": 13133,
            "state": "GA",
            "area_name": "Greene County",
            "value": 26.4
        }, {
            "fips_code": 13135,
            "state": "GA",
            "area_name": "Gwinnett County",
            "value": 15.6
        }, {
            "fips_code": 13137,
            "state": "GA",
            "area_name": "Habersham County",
            "value": 19.0
        }, {
            "fips_code": 13139,
            "state": "GA",
            "area_name": "Hall County",
            "value": 16.1
        }, {
            "fips_code": 13141,
            "state": "GA",
            "area_name": "Hancock County",
            "value": 44.0
        }, {
            "fips_code": 13143,
            "state": "GA",
            "area_name": "Haralson County",
            "value": 20.6
        }, {
            "fips_code": 13145,
            "state": "GA",
            "area_name": "Harris County",
            "value": 9.699999999999999
        }, {
            "fips_code": 13147,
            "state": "GA",
            "area_name": "Hart County",
            "value": 24.0
        }, {
            "fips_code": 13149,
            "state": "GA",
            "area_name": "Heard County",
            "value": 26.0
        }, {
            "fips_code": 13151,
            "state": "GA",
            "area_name": "Henry County",
            "value": 14.0
        }, {
            "fips_code": 13153,
            "state": "GA",
            "area_name": "Houston County",
            "value": 16.3
        }, {
            "fips_code": 13155,
            "state": "GA",
            "area_name": "Irwin County",
            "value": 29.9
        }, {
            "fips_code": 13157,
            "state": "GA",
            "area_name": "Jackson County",
            "value": 13.3
        }, {
            "fips_code": 13159,
            "state": "GA",
            "area_name": "Jasper County",
            "value": 20.8
        }, {
            "fips_code": 13161,
            "state": "GA",
            "area_name": "Jeff Davis County",
            "value": 29.9
        }, {
            "fips_code": 13163,
            "state": "GA",
            "area_name": "Jefferson County",
            "value": 31.5
        }, {
            "fips_code": 13165,
            "state": "GA",
            "area_name": "Jenkins County",
            "value": 37.2
        }, {
            "fips_code": 13167,
            "state": "GA",
            "area_name": "Johnson County",
            "value": 32.3
        }, {
            "fips_code": 13169,
            "state": "GA",
            "area_name": "Jones County",
            "value": 17.5
        }, {
            "fips_code": 13171,
            "state": "GA",
            "area_name": "Lamar County",
            "value": 22.5
        }, {
            "fips_code": 13173,
            "state": "GA",
            "area_name": "Lanier County",
            "value": 31.4
        }, {
            "fips_code": 13175,
            "state": "GA",
            "area_name": "Laurens County",
            "value": 30.7
        }, {
            "fips_code": 13177,
            "state": "GA",
            "area_name": "Lee County",
            "value": 14.8
        }, {
            "fips_code": 13179,
            "state": "GA",
            "area_name": "Liberty County",
            "value": 25.4
        }, {
            "fips_code": 13181,
            "state": "GA",
            "area_name": "Lincoln County",
            "value": 26.5
        }, {
            "fips_code": 13183,
            "state": "GA",
            "area_name": "Long County",
            "value": 21.7
        }, {
            "fips_code": 13185,
            "state": "GA",
            "area_name": "Lowndes County",
            "value": 33.3
        }, {
            "fips_code": 13187,
            "state": "GA",
            "area_name": "Lumpkin County",
            "value": 16.9
        }, {
            "fips_code": 13189,
            "state": "GA",
            "area_name": "McDuffie County",
            "value": 31.2
        }, {
            "fips_code": 13191,
            "state": "GA",
            "area_name": "McIntosh County",
            "value": 34.2
        }, {
            "fips_code": 13193,
            "state": "GA",
            "area_name": "Macon County",
            "value": 37.6
        }, {
            "fips_code": 13195,
            "state": "GA",
            "area_name": "Madison County",
            "value": 22.4
        }, {
            "fips_code": 13197,
            "state": "GA",
            "area_name": "Marion County",
            "value": 32.9
        }, {
            "fips_code": 13199,
            "state": "GA",
            "area_name": "Meriwether County",
            "value": 38.5
        }, {
            "fips_code": 13201,
            "state": "GA",
            "area_name": "Miller County",
            "value": 35.8
        }, {
            "fips_code": 13205,
            "state": "GA",
            "area_name": "Mitchell County",
            "value": 34.0
        }, {
            "fips_code": 13207,
            "state": "GA",
            "area_name": "Monroe County",
            "value": 17.1
        }, {
            "fips_code": 13209,
            "state": "GA",
            "area_name": "Montgomery County",
            "value": 27.3
        }, {
            "fips_code": 13211,
            "state": "GA",
            "area_name": "Morgan County",
            "value": 18.0
        }, {
            "fips_code": 13213,
            "state": "GA",
            "area_name": "Murray County",
            "value": 23.2
        }, {
            "fips_code": 13215,
            "state": "GA",
            "area_name": "Muscogee County",
            "value": 29.2
        }, {
            "fips_code": 13217,
            "state": "GA",
            "area_name": "Newton County",
            "value": 21.3
        }, {
            "fips_code": 13219,
            "state": "GA",
            "area_name": "Oconee County",
            "value": 6.3
        }, {
            "fips_code": 13221,
            "state": "GA",
            "area_name": "Oglethorpe County",
            "value": 20.0
        }, {
            "fips_code": 13223,
            "state": "GA",
            "area_name": "Paulding County",
            "value": 11.1
        }, {
            "fips_code": 13225,
            "state": "GA",
            "area_name": "Peach County",
            "value": 30.0
        }, {
            "fips_code": 13227,
            "state": "GA",
            "area_name": "Pickens County",
            "value": 16.8
        }, {
            "fips_code": 13229,
            "state": "GA",
            "area_name": "Pierce County",
            "value": 23.0
        }, {
            "fips_code": 13231,
            "state": "GA",
            "area_name": "Pike County",
            "value": 12.7
        }, {
            "fips_code": 13233,
            "state": "GA",
            "area_name": "Polk County",
            "value": 26.8
        }, {
            "fips_code": 13235,
            "state": "GA",
            "area_name": "Pulaski County",
            "value": 30.8
        }, {
            "fips_code": 13237,
            "state": "GA",
            "area_name": "Putnam County",
            "value": 27.8
        }, {
            "fips_code": 13239,
            "state": "GA",
            "area_name": "Quitman County",
            "value": 41.1
        }, {
            "fips_code": 13241,
            "state": "GA",
            "area_name": "Rabun County",
            "value": 21.4
        }, {
            "fips_code": 13243,
            "state": "GA",
            "area_name": "Randolph County",
            "value": 41.2
        }, {
            "fips_code": 13245,
            "state": "GA",
            "area_name": "Richmond County",
            "value": 33.8
        }, {
            "fips_code": 13247,
            "state": "GA",
            "area_name": "Rockdale County",
            "value": 22.7
        }, {
            "fips_code": 13249,
            "state": "GA",
            "area_name": "Schley County",
            "value": 22.6
        }, {
            "fips_code": 13251,
            "state": "GA",
            "area_name": "Screven County",
            "value": 31.9
        }, {
            "fips_code": 13253,
            "state": "GA",
            "area_name": "Seminole County",
            "value": 36.9
        }, {
            "fips_code": 13255,
            "state": "GA",
            "area_name": "Spalding County",
            "value": 34.7
        }, {
            "fips_code": 13257,
            "state": "GA",
            "area_name": "Stephens County",
            "value": 24.1
        }, {
            "fips_code": 13259,
            "state": "GA",
            "area_name": "Stewart County",
            "value": 36.4
        }, {
            "fips_code": 13261,
            "state": "GA",
            "area_name": "Sumter County",
            "value": 39.7
        }, {
            "fips_code": 13263,
            "state": "GA",
            "area_name": "Talbot County",
            "value": 38.9
        }, {
            "fips_code": 13265,
            "state": "GA",
            "area_name": "Taliaferro County",
            "value": 37.5
        }, {
            "fips_code": 13267,
            "state": "GA",
            "area_name": "Tattnall County",
            "value": 33.8
        }, {
            "fips_code": 13269,
            "state": "GA",
            "area_name": "Taylor County",
            "value": 34.7
        }, {
            "fips_code": 13271,
            "state": "GA",
            "area_name": "Telfair County",
            "value": 38.3
        }, {
            "fips_code": 13273,
            "state": "GA",
            "area_name": "Terrell County",
            "value": 42.3
        }, {
            "fips_code": 13275,
            "state": "GA",
            "area_name": "Thomas County",
            "value": 28.9
        }, {
            "fips_code": 13277,
            "state": "GA",
            "area_name": "Tift County",
            "value": 31.8
        }, {
            "fips_code": 13279,
            "state": "GA",
            "area_name": "Toombs County",
            "value": 33.1
        }, {
            "fips_code": 13281,
            "state": "GA",
            "area_name": "Towns County",
            "value": 21.3
        }, {
            "fips_code": 13283,
            "state": "GA",
            "area_name": "Treutlen County",
            "value": 34.3
        }, {
            "fips_code": 13285,
            "state": "GA",
            "area_name": "Troup County",
            "value": 24.6
        }, {
            "fips_code": 13287,
            "state": "GA",
            "area_name": "Turner County",
            "value": 39.5
        }, {
            "fips_code": 13289,
            "state": "GA",
            "area_name": "Twiggs County",
            "value": 32.0
        }, {
            "fips_code": 13291,
            "state": "GA",
            "area_name": "Union County",
            "value": 21.2
        }, {
            "fips_code": 13293,
            "state": "GA",
            "area_name": "Upson County",
            "value": 29.1
        }, {
            "fips_code": 13295,
            "state": "GA",
            "area_name": "Walker County",
            "value": 20.4
        }, {
            "fips_code": 13297,
            "state": "GA",
            "area_name": "Walton County",
            "value": 15.1
        }, {
            "fips_code": 13299,
            "state": "GA",
            "area_name": "Ware County",
            "value": 34.4
        }, {
            "fips_code": 13301,
            "state": "GA",
            "area_name": "Warren County",
            "value": 40.1
        }, {
            "fips_code": 13303,
            "state": "GA",
            "area_name": "Washington County",
            "value": 33.2
        }, {
            "fips_code": 13305,
            "state": "GA",
            "area_name": "Wayne County",
            "value": 32.3
        }, {
            "fips_code": 13307,
            "state": "GA",
            "area_name": "Webster County",
            "value": 31.9
        }, {
            "fips_code": 13309,
            "state": "GA",
            "area_name": "Wheeler County",
            "value": 34.8
        }, {
            "fips_code": 13311,
            "state": "GA",
            "area_name": "White County",
            "value": 19.8
        }, {
            "fips_code": 13313,
            "state": "GA",
            "area_name": "Whitfield County",
            "value": 19.4
        }, {
            "fips_code": 13315,
            "state": "GA",
            "area_name": "Wilcox County",
            "value": 35.5
        }, {
            "fips_code": 13317,
            "state": "GA",
            "area_name": "Wilkes County",
            "value": 33.6
        }, {
            "fips_code": 13319,
            "state": "GA",
            "area_name": "Wilkinson County",
            "value": 35.7
        }, {
            "fips_code": 13321,
            "state": "GA",
            "area_name": "Worth County",
            "value": 32.2
        }, {
            "fips_code": 15000,
            "state": "HI",
            "area_name": "Hawaii",
            "value": 12.9
        }, {
            "fips_code": 15001,
            "state": "HI",
            "area_name": "Hawaii County",
            "value": 19.8
        }, {
            "fips_code": 15003,
            "state": "HI",
            "area_name": "Honolulu County",
            "value": 11.2
        }, {
            "fips_code": 15007,
            "state": "HI",
            "area_name": "Kauai County",
            "value": 13.9
        }, {
            "fips_code": 15009,
            "state": "HI",
            "area_name": "Maui County",
            "value": 13.9
        }, {
            "fips_code": 16000,
            "state": "ID",
            "area_name": "Idaho",
            "value": 12.5
        }, {
            "fips_code": 16001,
            "state": "ID",
            "area_name": "Ada County",
            "value": 9.1
        }, {
            "fips_code": 16003,
            "state": "ID",
            "area_name": "Adams County",
            "value": 20.0
        }, {
            "fips_code": 16005,
            "state": "ID",
            "area_name": "Bannock County",
            "value": 14.3
        }, {
            "fips_code": 16007,
            "state": "ID",
            "area_name": "Bear Lake County",
            "value": 13.4
        }, {
            "fips_code": 16009,
            "state": "ID",
            "area_name": "Benewah County",
            "value": 18.3
        }, {
            "fips_code": 16011,
            "state": "ID",
            "area_name": "Bingham County",
            "value": 13.4
        }, {
            "fips_code": 16013,
            "state": "ID",
            "area_name": "Blaine County",
            "value": 8.199999999999999
        }, {
            "fips_code": 16015,
            "state": "ID",
            "area_name": "Boise County",
            "value": 16.8
        }, {
            "fips_code": 16017,
            "state": "ID",
            "area_name": "Bonner County",
            "value": 17.8
        }, {
            "fips_code": 16019,
            "state": "ID",
            "area_name": "Bonneville County",
            "value": 11.8
        }, {
            "fips_code": 16021,
            "state": "ID",
            "area_name": "Boundary County",
            "value": 18.7
        }, {
            "fips_code": 16023,
            "state": "ID",
            "area_name": "Butte County",
            "value": 21.4
        }, {
            "fips_code": 16025,
            "state": "ID",
            "area_name": "Camas County",
            "value": 13.3
        }, {
            "fips_code": 16027,
            "state": "ID",
            "area_name": "Canyon County",
            "value": 12.6
        }, {
            "fips_code": 16029,
            "state": "ID",
            "area_name": "Caribou County",
            "value": 12.6
        }, {
            "fips_code": 16031,
            "state": "ID",
            "area_name": "Cassia County",
            "value": 13.9
        }, {
            "fips_code": 16033,
            "state": "ID",
            "area_name": "Clark County",
            "value": 21.2
        }, {
            "fips_code": 16035,
            "state": "ID",
            "area_name": "Clearwater County",
            "value": 22.8
        }, {
            "fips_code": 16037,
            "state": "ID",
            "area_name": "Custer County",
            "value": 20.3
        }, {
            "fips_code": 16039,
            "state": "ID",
            "area_name": "Elmore County",
            "value": 17.1
        }, {
            "fips_code": 16041,
            "state": "ID",
            "area_name": "Franklin County",
            "value": 10.1
        }, {
            "fips_code": 16043,
            "state": "ID",
            "area_name": "Fremont County",
            "value": 15.5
        }, {
            "fips_code": 16045,
            "state": "ID",
            "area_name": "Gem County",
            "value": 15.2
        }, {
            "fips_code": 16047,
            "state": "ID",
            "area_name": "Gooding County",
            "value": 15.0
        }, {
            "fips_code": 16049,
            "state": "ID",
            "area_name": "Idaho County",
            "value": 18.7
        }, {
            "fips_code": 16051,
            "state": "ID",
            "area_name": "Jefferson County",
            "value": 9.4
        }, {
            "fips_code": 16053,
            "state": "ID",
            "area_name": "Jerome County",
            "value": 15.9
        }, {
            "fips_code": 16055,
            "state": "ID",
            "area_name": "Kootenai County",
            "value": 10.7
        }, {
            "fips_code": 16057,
            "state": "ID",
            "area_name": "Latah County",
            "value": 10.3
        }, {
            "fips_code": 16059,
            "state": "ID",
            "area_name": "Lemhi County",
            "value": 21.2
        }, {
            "fips_code": 16061,
            "state": "ID",
            "area_name": "Lewis County",
            "value": 20.9
        }, {
            "fips_code": 16063,
            "state": "ID",
            "area_name": "Lincoln County",
            "value": 15.6
        }, {
            "fips_code": 16065,
            "state": "ID",
            "area_name": "Madison County",
            "value": 13.4
        }, {
            "fips_code": 16067,
            "state": "ID",
            "area_name": "Minidoka County",
            "value": 15.0
        }, {
            "fips_code": 16069,
            "state": "ID",
            "area_name": "Nez Perce County",
            "value": 16.0
        }, {
            "fips_code": 16071,
            "state": "ID",
            "area_name": "Oneida County",
            "value": 13.5
        }, {
            "fips_code": 16073,
            "state": "ID",
            "area_name": "Owyhee County",
            "value": 19.7
        }, {
            "fips_code": 16075,
            "state": "ID",
            "area_name": "Payette County",
            "value": 15.6
        }, {
            "fips_code": 16077,
            "state": "ID",
            "area_name": "Power County",
            "value": 16.0
        }, {
            "fips_code": 16079,
            "state": "ID",
            "area_name": "Shoshone County",
            "value": 25.4
        }, {
            "fips_code": 16081,
            "state": "ID",
            "area_name": "Teton County",
            "value": 9.6
        }, {
            "fips_code": 16083,
            "state": "ID",
            "area_name": "Twin Falls County",
            "value": 16.5
        }, {
            "fips_code": 16085,
            "state": "ID",
            "area_name": "Valley County",
            "value": 11.2
        }, {
            "fips_code": 16087,
            "state": "ID",
            "area_name": "Washington County",
            "value": 20.0
        }, {
            "fips_code": 17000,
            "state": "IL",
            "area_name": "Illinois",
            "value": 15.9
        }, {
            "fips_code": 17001,
            "state": "IL",
            "area_name": "Adams County",
            "value": 15.6
        }, {
            "fips_code": 17003,
            "state": "IL",
            "area_name": "Alexander County",
            "value": 42.0
        }, {
            "fips_code": 17005,
            "state": "IL",
            "area_name": "Bond County",
            "value": 17.6
        }, {
            "fips_code": 17007,
            "state": "IL",
            "area_name": "Boone County",
            "value": 14.3
        }, {
            "fips_code": 17009,
            "state": "IL",
            "area_name": "Brown County",
            "value": 13.6
        }, {
            "fips_code": 17011,
            "state": "IL",
            "area_name": "Bureau County",
            "value": 17.2
        }, {
            "fips_code": 17013,
            "state": "IL",
            "area_name": "Calhoun County",
            "value": 13.2
        }, {
            "fips_code": 17015,
            "state": "IL",
            "area_name": "Carroll County",
            "value": 19.1
        }, {
            "fips_code": 17017,
            "state": "IL",
            "area_name": "Cass County",
            "value": 15.9
        }, {
            "fips_code": 17019,
            "state": "IL",
            "area_name": "Champaign County",
            "value": 13.7
        }, {
            "fips_code": 17021,
            "state": "IL",
            "area_name": "Christian County",
            "value": 17.4
        }, {
            "fips_code": 17023,
            "state": "IL",
            "area_name": "Clark County",
            "value": 16.5
        }, {
            "fips_code": 17025,
            "state": "IL",
            "area_name": "Clay County",
            "value": 18.5
        }, {
            "fips_code": 17027,
            "state": "IL",
            "area_name": "Clinton County",
            "value": 11.7
        }, {
            "fips_code": 17029,
            "state": "IL",
            "area_name": "Coles County",
            "value": 20.4
        }, {
            "fips_code": 17031,
            "state": "IL",
            "area_name": "Cook County",
            "value": 18.9
        }, {
            "fips_code": 17033,
            "state": "IL",
            "area_name": "Crawford County",
            "value": 17.1
        }, {
            "fips_code": 17035,
            "state": "IL",
            "area_name": "Cumberland County",
            "value": 14.2
        }, {
            "fips_code": 17037,
            "state": "IL",
            "area_name": "DeKalb County",
            "value": 16.8
        }, {
            "fips_code": 17039,
            "state": "IL",
            "area_name": "De Witt County",
            "value": 15.6
        }, {
            "fips_code": 17041,
            "state": "IL",
            "area_name": "Douglas County",
            "value": 12.9
        }, {
            "fips_code": 17043,
            "state": "IL",
            "area_name": "DuPage County",
            "value": 7.5
        }, {
            "fips_code": 17045,
            "state": "IL",
            "area_name": "Edgar County",
            "value": 20.4
        }, {
            "fips_code": 17047,
            "state": "IL",
            "area_name": "Edwards County",
            "value": 16.5
        }, {
            "fips_code": 17049,
            "state": "IL",
            "area_name": "Effingham County",
            "value": 12.4
        }, {
            "fips_code": 17051,
            "state": "IL",
            "area_name": "Fayette County",
            "value": 21.5
        }, {
            "fips_code": 17053,
            "state": "IL",
            "area_name": "Ford County",
            "value": 15.6
        }, {
            "fips_code": 17055,
            "state": "IL",
            "area_name": "Franklin County",
            "value": 24.0
        }, {
            "fips_code": 17057,
            "state": "IL",
            "area_name": "Fulton County",
            "value": 21.2
        }, {
            "fips_code": 17059,
            "state": "IL",
            "area_name": "Gallatin County",
            "value": 25.2
        }, {
            "fips_code": 17061,
            "state": "IL",
            "area_name": "Greene County",
            "value": 19.1
        }, {
            "fips_code": 17063,
            "state": "IL",
            "area_name": "Grundy County",
            "value": 8.800000000000001
        }, {
            "fips_code": 17065,
            "state": "IL",
            "area_name": "Hamilton County",
            "value": 19.9
        }, {
            "fips_code": 17067,
            "state": "IL",
            "area_name": "Hancock County",
            "value": 17.0
        }, {
            "fips_code": 17069,
            "state": "IL",
            "area_name": "Hardin County",
            "value": 33.3
        }, {
            "fips_code": 17071,
            "state": "IL",
            "area_name": "Henderson County",
            "value": 18.8
        }, {
            "fips_code": 17073,
            "state": "IL",
            "area_name": "Henry County",
            "value": 12.7
        }, {
            "fips_code": 17075,
            "state": "IL",
            "area_name": "Iroquois County",
            "value": 14.7
        }, {
            "fips_code": 17077,
            "state": "IL",
            "area_name": "Jackson County",
            "value": 27.9
        }, {
            "fips_code": 17079,
            "state": "IL",
            "area_name": "Jasper County",
            "value": 13.6
        }, {
            "fips_code": 17081,
            "state": "IL",
            "area_name": "Jefferson County",
            "value": 19.2
        }, {
            "fips_code": 17083,
            "state": "IL",
            "area_name": "Jersey County",
            "value": 13.5
        }, {
            "fips_code": 17085,
            "state": "IL",
            "area_name": "Jo Daviess County",
            "value": 12.6
        }, {
            "fips_code": 17087,
            "state": "IL",
            "area_name": "Johnson County",
            "value": 17.0
        }, {
            "fips_code": 17089,
            "state": "IL",
            "area_name": "Kane County",
            "value": 12.1
        }, {
            "fips_code": 17091,
            "state": "IL",
            "area_name": "Kankakee County",
            "value": 17.5
        }, {
            "fips_code": 17093,
            "state": "IL",
            "area_name": "Kendall County",
            "value": 6.1
        }, {
            "fips_code": 17095,
            "state": "IL",
            "area_name": "Knox County",
            "value": 20.0
        }, {
            "fips_code": 17097,
            "state": "IL",
            "area_name": "Lake County",
            "value": 10.2
        }, {
            "fips_code": 17099,
            "state": "IL",
            "area_name": "La Salle County",
            "value": 19.4
        }, {
            "fips_code": 17101,
            "state": "IL",
            "area_name": "Lawrence County",
            "value": 24.1
        }, {
            "fips_code": 17103,
            "state": "IL",
            "area_name": "Lee County",
            "value": 17.0
        }, {
            "fips_code": 17105,
            "state": "IL",
            "area_name": "Livingston County",
            "value": 15.2
        }, {
            "fips_code": 17107,
            "state": "IL",
            "area_name": "Logan County",
            "value": 16.5
        }, {
            "fips_code": 17109,
            "state": "IL",
            "area_name": "McDonough County",
            "value": 22.1
        }, {
            "fips_code": 17111,
            "state": "IL",
            "area_name": "McHenry County",
            "value": 6.4
        }, {
            "fips_code": 17113,
            "state": "IL",
            "area_name": "McLean County",
            "value": 11.5
        }, {
            "fips_code": 17115,
            "state": "IL",
            "area_name": "Macon County",
            "value": 22.6
        }, {
            "fips_code": 17117,
            "state": "IL",
            "area_name": "Macoupin County",
            "value": 19.8
        }, {
            "fips_code": 17119,
            "state": "IL",
            "area_name": "Madison County",
            "value": 15.1
        }, {
            "fips_code": 17121,
            "state": "IL",
            "area_name": "Marion County",
            "value": 22.8
        }, {
            "fips_code": 17123,
            "state": "IL",
            "area_name": "Marshall County",
            "value": 14.3
        }, {
            "fips_code": 17125,
            "state": "IL",
            "area_name": "Mason County",
            "value": 20.5
        }, {
            "fips_code": 17127,
            "state": "IL",
            "area_name": "Massac County",
            "value": 27.2
        }, {
            "fips_code": 17129,
            "state": "IL",
            "area_name": "Menard County",
            "value": 13.2
        }, {
            "fips_code": 17131,
            "state": "IL",
            "area_name": "Mercer County",
            "value": 14.6
        }, {
            "fips_code": 17133,
            "state": "IL",
            "area_name": "Monroe County",
            "value": 4.5
        }, {
            "fips_code": 17135,
            "state": "IL",
            "area_name": "Montgomery County",
            "value": 17.8
        }, {
            "fips_code": 17137,
            "state": "IL",
            "area_name": "Morgan County",
            "value": 19.4
        }, {
            "fips_code": 17139,
            "state": "IL",
            "area_name": "Moultrie County",
            "value": 12.7
        }, {
            "fips_code": 17141,
            "state": "IL",
            "area_name": "Ogle County",
            "value": 11.7
        }, {
            "fips_code": 17143,
            "state": "IL",
            "area_name": "Peoria County",
            "value": 22.0
        }, {
            "fips_code": 17145,
            "state": "IL",
            "area_name": "Perry County",
            "value": 20.7
        }, {
            "fips_code": 17147,
            "state": "IL",
            "area_name": "Piatt County",
            "value": 7.7
        }, {
            "fips_code": 17149,
            "state": "IL",
            "area_name": "Pike County",
            "value": 19.3
        }, {
            "fips_code": 17151,
            "state": "IL",
            "area_name": "Pope County",
            "value": 25.7
        }, {
            "fips_code": 17153,
            "state": "IL",
            "area_name": "Pulaski County",
            "value": 35.6
        }, {
            "fips_code": 17155,
            "state": "IL",
            "area_name": "Putnam County",
            "value": 12.9
        }, {
            "fips_code": 17157,
            "state": "IL",
            "area_name": "Randolph County",
            "value": 20.3
        }, {
            "fips_code": 17159,
            "state": "IL",
            "area_name": "Richland County",
            "value": 18.2
        }, {
            "fips_code": 17161,
            "state": "IL",
            "area_name": "Rock Island County",
            "value": 23.2
        }, {
            "fips_code": 17163,
            "state": "IL",
            "area_name": "St. Clair County",
            "value": 20.2
        }, {
            "fips_code": 17165,
            "state": "IL",
            "area_name": "Saline County",
            "value": 26.5
        }, {
            "fips_code": 17167,
            "state": "IL",
            "area_name": "Sangamon County",
            "value": 20.9
        }, {
            "fips_code": 17169,
            "state": "IL",
            "area_name": "Schuyler County",
            "value": 16.6
        }, {
            "fips_code": 17171,
            "state": "IL",
            "area_name": "Scott County",
            "value": 18.7
        }, {
            "fips_code": 17173,
            "state": "IL",
            "area_name": "Shelby County",
            "value": 14.4
        }, {
            "fips_code": 17175,
            "state": "IL",
            "area_name": "Stark County",
            "value": 18.6
        }, {
            "fips_code": 17177,
            "state": "IL",
            "area_name": "Stephenson County",
            "value": 19.4
        }, {
            "fips_code": 17179,
            "state": "IL",
            "area_name": "Tazewell County",
            "value": 12.4
        }, {
            "fips_code": 17181,
            "state": "IL",
            "area_name": "Union County",
            "value": 21.2
        }, {
            "fips_code": 17183,
            "state": "IL",
            "area_name": "Vermilion County",
            "value": 27.3
        }, {
            "fips_code": 17185,
            "state": "IL",
            "area_name": "Wabash County",
            "value": 19.2
        }, {
            "fips_code": 17187,
            "state": "IL",
            "area_name": "Warren County",
            "value": 16.6
        }, {
            "fips_code": 17189,
            "state": "IL",
            "area_name": "Washington County",
            "value": 12.0
        }, {
            "fips_code": 17191,
            "state": "IL",
            "area_name": "Wayne County",
            "value": 18.7
        }, {
            "fips_code": 17193,
            "state": "IL",
            "area_name": "White County",
            "value": 22.0
        }, {
            "fips_code": 17195,
            "state": "IL",
            "area_name": "Whiteside County",
            "value": 19.5
        }, {
            "fips_code": 17197,
            "state": "IL",
            "area_name": "Will County",
            "value": 9.800000000000001
        }, {
            "fips_code": 17199,
            "state": "IL",
            "area_name": "Williamson County",
            "value": 19.9
        }, {
            "fips_code": 17201,
            "state": "IL",
            "area_name": "Winnebago County",
            "value": 20.7
        }, {
            "fips_code": 17203,
            "state": "IL",
            "area_name": "Woodford County",
            "value": 8.199999999999999
        }, {
            "fips_code": 18000,
            "state": "IN",
            "area_name": "Indiana",
            "value": 15.7
        }, {
            "fips_code": 18001,
            "state": "IN",
            "area_name": "Adams County",
            "value": 20.8
        }, {
            "fips_code": 18003,
            "state": "IN",
            "area_name": "Allen County",
            "value": 17.2
        }, {
            "fips_code": 18005,
            "state": "IN",
            "area_name": "Bartholomew County",
            "value": 11.4
        }, {
            "fips_code": 18007,
            "state": "IN",
            "area_name": "Benton County",
            "value": 15.1
        }, {
            "fips_code": 18009,
            "state": "IN",
            "area_name": "Blackford County",
            "value": 20.0
        }, {
            "fips_code": 18011,
            "state": "IN",
            "area_name": "Boone County",
            "value": 5.8
        }, {
            "fips_code": 18013,
            "state": "IN",
            "area_name": "Brown County",
            "value": 14.9
        }, {
            "fips_code": 18015,
            "state": "IN",
            "area_name": "Carroll County",
            "value": 12.4
        }, {
            "fips_code": 18017,
            "state": "IN",
            "area_name": "Cass County",
            "value": 17.4
        }, {
            "fips_code": 18019,
            "state": "IN",
            "area_name": "Clark County",
            "value": 13.9
        }, {
            "fips_code": 18021,
            "state": "IN",
            "area_name": "Clay County",
            "value": 17.6
        }, {
            "fips_code": 18023,
            "state": "IN",
            "area_name": "Clinton County",
            "value": 13.8
        }, {
            "fips_code": 18025,
            "state": "IN",
            "area_name": "Crawford County",
            "value": 24.0
        }, {
            "fips_code": 18027,
            "state": "IN",
            "area_name": "Daviess County",
            "value": 17.4
        }, {
            "fips_code": 18029,
            "state": "IN",
            "area_name": "Dearborn County",
            "value": 10.5
        }, {
            "fips_code": 18031,
            "state": "IN",
            "area_name": "Decatur County",
            "value": 14.3
        }, {
            "fips_code": 18033,
            "state": "IN",
            "area_name": "De Kalb County",
            "value": 12.1
        }, {
            "fips_code": 18035,
            "state": "IN",
            "area_name": "Delaware County",
            "value": 19.4
        }, {
            "fips_code": 18037,
            "state": "IN",
            "area_name": "Dubois County",
            "value": 8.800000000000001
        }, {
            "fips_code": 18039,
            "state": "IN",
            "area_name": "Elkhart County",
            "value": 15.4
        }, {
            "fips_code": 18041,
            "state": "IN",
            "area_name": "Fayette County",
            "value": 20.8
        }, {
            "fips_code": 18043,
            "state": "IN",
            "area_name": "Floyd County",
            "value": 12.5
        }, {
            "fips_code": 18045,
            "state": "IN",
            "area_name": "Fountain County",
            "value": 15.3
        }, {
            "fips_code": 18047,
            "state": "IN",
            "area_name": "Franklin County",
            "value": 10.8
        }, {
            "fips_code": 18049,
            "state": "IN",
            "area_name": "Fulton County",
            "value": 16.7
        }, {
            "fips_code": 18051,
            "state": "IN",
            "area_name": "Gibson County",
            "value": 14.1
        }, {
            "fips_code": 18053,
            "state": "IN",
            "area_name": "Grant County",
            "value": 25.5
        }, {
            "fips_code": 18055,
            "state": "IN",
            "area_name": "Greene County",
            "value": 22.2
        }, {
            "fips_code": 18057,
            "state": "IN",
            "area_name": "Hamilton County",
            "value": 3.9
        }, {
            "fips_code": 18059,
            "state": "IN",
            "area_name": "Hancock County",
            "value": 6.9
        }, {
            "fips_code": 18061,
            "state": "IN",
            "area_name": "Harrison County",
            "value": 11.5
        }, {
            "fips_code": 18063,
            "state": "IN",
            "area_name": "Hendricks County",
            "value": 5.8
        }, {
            "fips_code": 18065,
            "state": "IN",
            "area_name": "Henry County",
            "value": 22.8
        }, {
            "fips_code": 18067,
            "state": "IN",
            "area_name": "Howard County",
            "value": 16.5
        }, {
            "fips_code": 18069,
            "state": "IN",
            "area_name": "Huntington County",
            "value": 13.9
        }, {
            "fips_code": 18071,
            "state": "IN",
            "area_name": "Jackson County",
            "value": 16.7
        }, {
            "fips_code": 18073,
            "state": "IN",
            "area_name": "Jasper County",
            "value": 12.2
        }, {
            "fips_code": 18075,
            "state": "IN",
            "area_name": "Jay County",
            "value": 20.9
        }, {
            "fips_code": 18077,
            "state": "IN",
            "area_name": "Jefferson County",
            "value": 16.1
        }, {
            "fips_code": 18079,
            "state": "IN",
            "area_name": "Jennings County",
            "value": 17.1
        }, {
            "fips_code": 18081,
            "state": "IN",
            "area_name": "Johnson County",
            "value": 9.4
        }, {
            "fips_code": 18083,
            "state": "IN",
            "area_name": "Knox County",
            "value": 19.0
        }, {
            "fips_code": 18085,
            "state": "IN",
            "area_name": "Kosciusko County",
            "value": 12.3
        }, {
            "fips_code": 18087,
            "state": "IN",
            "area_name": "Lagrange County",
            "value": 10.9
        }, {
            "fips_code": 18089,
            "state": "IN",
            "area_name": "Lake County",
            "value": 20.0
        }, {
            "fips_code": 18091,
            "state": "IN",
            "area_name": "La Porte County",
            "value": 18.7
        }, {
            "fips_code": 18093,
            "state": "IN",
            "area_name": "Lawrence County",
            "value": 17.2
        }, {
            "fips_code": 18095,
            "state": "IN",
            "area_name": "Madison County",
            "value": 21.2
        }, {
            "fips_code": 18097,
            "state": "IN",
            "area_name": "Marion County",
            "value": 20.9
        }, {
            "fips_code": 18099,
            "state": "IN",
            "area_name": "Marshall County",
            "value": 11.6
        }, {
            "fips_code": 18101,
            "state": "IN",
            "area_name": "Martin County",
            "value": 15.6
        }, {
            "fips_code": 18103,
            "state": "IN",
            "area_name": "Miami County",
            "value": 21.1
        }, {
            "fips_code": 18105,
            "state": "IN",
            "area_name": "Monroe County",
            "value": 14.4
        }, {
            "fips_code": 18107,
            "state": "IN",
            "area_name": "Montgomery County",
            "value": 15.5
        }, {
            "fips_code": 18109,
            "state": "IN",
            "area_name": "Morgan County",
            "value": 12.5
        }, {
            "fips_code": 18111,
            "state": "IN",
            "area_name": "Newton County",
            "value": 18.1
        }, {
            "fips_code": 18113,
            "state": "IN",
            "area_name": "Noble County",
            "value": 13.1
        }, {
            "fips_code": 18115,
            "state": "IN",
            "area_name": "Ohio County",
            "value": 14.2
        }, {
            "fips_code": 18117,
            "state": "IN",
            "area_name": "Orange County",
            "value": 21.9
        }, {
            "fips_code": 18119,
            "state": "IN",
            "area_name": "Owen County",
            "value": 17.9
        }, {
            "fips_code": 18121,
            "state": "IN",
            "area_name": "Parke County",
            "value": 21.8
        }, {
            "fips_code": 18123,
            "state": "IN",
            "area_name": "Perry County",
            "value": 16.6
        }, {
            "fips_code": 18125,
            "state": "IN",
            "area_name": "Pike County",
            "value": 13.9
        }, {
            "fips_code": 18127,
            "state": "IN",
            "area_name": "Porter County",
            "value": 12.0
        }, {
            "fips_code": 18129,
            "state": "IN",
            "area_name": "Posey County",
            "value": 11.6
        }, {
            "fips_code": 18131,
            "state": "IN",
            "area_name": "Pulaski County",
            "value": 17.1
        }, {
            "fips_code": 18133,
            "state": "IN",
            "area_name": "Putnam County",
            "value": 15.1
        }, {
            "fips_code": 18135,
            "state": "IN",
            "area_name": "Randolph County",
            "value": 20.8
        }, {
            "fips_code": 18137,
            "state": "IN",
            "area_name": "Ripley County",
            "value": 12.5
        }, {
            "fips_code": 18139,
            "state": "IN",
            "area_name": "Rush County",
            "value": 16.2
        }, {
            "fips_code": 18141,
            "state": "IN",
            "area_name": "St. Joseph County",
            "value": 18.6
        }, {
            "fips_code": 18143,
            "state": "IN",
            "area_name": "Scott County",
            "value": 20.9
        }, {
            "fips_code": 18145,
            "state": "IN",
            "area_name": "Shelby County",
            "value": 13.7
        }, {
            "fips_code": 18147,
            "state": "IN",
            "area_name": "Spencer County",
            "value": 10.9
        }, {
            "fips_code": 18149,
            "state": "IN",
            "area_name": "Starke County",
            "value": 20.8
        }, {
            "fips_code": 18151,
            "state": "IN",
            "area_name": "Steuben County",
            "value": 14.8
        }, {
            "fips_code": 18153,
            "state": "IN",
            "area_name": "Sullivan County",
            "value": 20.6
        }, {
            "fips_code": 18155,
            "state": "IN",
            "area_name": "Switzerland County",
            "value": 23.2
        }, {
            "fips_code": 18157,
            "state": "IN",
            "area_name": "Tippecanoe County",
            "value": 14.5
        }, {
            "fips_code": 18159,
            "state": "IN",
            "area_name": "Tipton County",
            "value": 11.7
        }, {
            "fips_code": 18161,
            "state": "IN",
            "area_name": "Union County",
            "value": 17.0
        }, {
            "fips_code": 18163,
            "state": "IN",
            "area_name": "Vanderburgh County",
            "value": 18.5
        }, {
            "fips_code": 18165,
            "state": "IN",
            "area_name": "Vermillion County",
            "value": 16.5
        }, {
            "fips_code": 18167,
            "state": "IN",
            "area_name": "Vigo County",
            "value": 23.8
        }, {
            "fips_code": 18169,
            "state": "IN",
            "area_name": "Wabash County",
            "value": 16.1
        }, {
            "fips_code": 18171,
            "state": "IN",
            "area_name": "Warren County",
            "value": 13.5
        }, {
            "fips_code": 18173,
            "state": "IN",
            "area_name": "Warrick County",
            "value": 9.0
        }, {
            "fips_code": 18175,
            "state": "IN",
            "area_name": "Washington County",
            "value": 18.1
        }, {
            "fips_code": 18177,
            "state": "IN",
            "area_name": "Wayne County",
            "value": 21.7
        }, {
            "fips_code": 18179,
            "state": "IN",
            "area_name": "Wells County",
            "value": 11.0
        }, {
            "fips_code": 18181,
            "state": "IN",
            "area_name": "White County",
            "value": 14.5
        }, {
            "fips_code": 18183,
            "state": "IN",
            "area_name": "Whitley County",
            "value": 9.5
        }, {
            "fips_code": 19000,
            "state": "IA",
            "area_name": "Iowa",
            "value": 12.4
        }, {
            "fips_code": 19001,
            "state": "IA",
            "area_name": "Adair County",
            "value": 13.8
        }, {
            "fips_code": 19003,
            "state": "IA",
            "area_name": "Adams County",
            "value": 15.3
        }, {
            "fips_code": 19005,
            "state": "IA",
            "area_name": "Allamakee County",
            "value": 15.2
        }, {
            "fips_code": 19007,
            "state": "IA",
            "area_name": "Appanoose County",
            "value": 20.7
        }, {
            "fips_code": 19009,
            "state": "IA",
            "area_name": "Audubon County",
            "value": 14.5
        }, {
            "fips_code": 19011,
            "state": "IA",
            "area_name": "Benton County",
            "value": 8.9
        }, {
            "fips_code": 19013,
            "state": "IA",
            "area_name": "Black Hawk County",
            "value": 13.5
        }, {
            "fips_code": 19015,
            "state": "IA",
            "area_name": "Boone County",
            "value": 9.199999999999999
        }, {
            "fips_code": 19017,
            "state": "IA",
            "area_name": "Bremer County",
            "value": 6.5
        }, {
            "fips_code": 19019,
            "state": "IA",
            "area_name": "Buchanan County",
            "value": 13.2
        }, {
            "fips_code": 19021,
            "state": "IA",
            "area_name": "Buena Vista County",
            "value": 12.7
        }, {
            "fips_code": 19023,
            "state": "IA",
            "area_name": "Butler County",
            "value": 9.800000000000001
        }, {
            "fips_code": 19025,
            "state": "IA",
            "area_name": "Calhoun County",
            "value": 13.4
        }, {
            "fips_code": 19027,
            "state": "IA",
            "area_name": "Carroll County",
            "value": 9.699999999999999
        }, {
            "fips_code": 19029,
            "state": "IA",
            "area_name": "Cass County",
            "value": 19.1
        }, {
            "fips_code": 19031,
            "state": "IA",
            "area_name": "Cedar County",
            "value": 8.199999999999999
        }, {
            "fips_code": 19033,
            "state": "IA",
            "area_name": "Cerro Gordo County",
            "value": 13.8
        }, {
            "fips_code": 19035,
            "state": "IA",
            "area_name": "Cherokee County",
            "value": 11.9
        }, {
            "fips_code": 19037,
            "state": "IA",
            "area_name": "Chickasaw County",
            "value": 8.699999999999999
        }, {
            "fips_code": 19039,
            "state": "IA",
            "area_name": "Clarke County",
            "value": 15.3
        }, {
            "fips_code": 19041,
            "state": "IA",
            "area_name": "Clay County",
            "value": 12.2
        }, {
            "fips_code": 19043,
            "state": "IA",
            "area_name": "Clayton County",
            "value": 11.7
        }, {
            "fips_code": 19045,
            "state": "IA",
            "area_name": "Clinton County",
            "value": 15.5
        }, {
            "fips_code": 19047,
            "state": "IA",
            "area_name": "Crawford County",
            "value": 13.7
        }, {
            "fips_code": 19049,
            "state": "IA",
            "area_name": "Dallas County",
            "value": 5.3
        }, {
            "fips_code": 19051,
            "state": "IA",
            "area_name": "Davis County",
            "value": 14.5
        }, {
            "fips_code": 19053,
            "state": "IA",
            "area_name": "Decatur County",
            "value": 22.7
        }, {
            "fips_code": 19055,
            "state": "IA",
            "area_name": "Delaware County",
            "value": 10.3
        }, {
            "fips_code": 19057,
            "state": "IA",
            "area_name": "Des Moines County",
            "value": 18.5
        }, {
            "fips_code": 19059,
            "state": "IA",
            "area_name": "Dickinson County",
            "value": 8.699999999999999
        }, {
            "fips_code": 19061,
            "state": "IA",
            "area_name": "Dubuque County",
            "value": 9.4
        }, {
            "fips_code": 19063,
            "state": "IA",
            "area_name": "Emmet County",
            "value": 15.6
        }, {
            "fips_code": 19065,
            "state": "IA",
            "area_name": "Fayette County",
            "value": 14.7
        }, {
            "fips_code": 19067,
            "state": "IA",
            "area_name": "Floyd County",
            "value": 15.6
        }, {
            "fips_code": 19069,
            "state": "IA",
            "area_name": "Franklin County",
            "value": 15.4
        }, {
            "fips_code": 19071,
            "state": "IA",
            "area_name": "Fremont County",
            "value": 14.4
        }, {
            "fips_code": 19073,
            "state": "IA",
            "area_name": "Greene County",
            "value": 14.8
        }, {
            "fips_code": 19075,
            "state": "IA",
            "area_name": "Grundy County",
            "value": 7.0
        }, {
            "fips_code": 19077,
            "state": "IA",
            "area_name": "Guthrie County",
            "value": 11.4
        }, {
            "fips_code": 19079,
            "state": "IA",
            "area_name": "Hamilton County",
            "value": 11.4
        }, {
            "fips_code": 19081,
            "state": "IA",
            "area_name": "Hancock County",
            "value": 10.6
        }, {
            "fips_code": 19083,
            "state": "IA",
            "area_name": "Hardin County",
            "value": 13.7
        }, {
            "fips_code": 19085,
            "state": "IA",
            "area_name": "Harrison County",
            "value": 13.4
        }, {
            "fips_code": 19087,
            "state": "IA",
            "area_name": "Henry County",
            "value": 15.2
        }, {
            "fips_code": 19089,
            "state": "IA",
            "area_name": "Howard County",
            "value": 13.1
        }, {
            "fips_code": 19091,
            "state": "IA",
            "area_name": "Humboldt County",
            "value": 12.0
        }, {
            "fips_code": 19093,
            "state": "IA",
            "area_name": "Ida County",
            "value": 10.9
        }, {
            "fips_code": 19095,
            "state": "IA",
            "area_name": "Iowa County",
            "value": 7.7
        }, {
            "fips_code": 19097,
            "state": "IA",
            "area_name": "Jackson County",
            "value": 15.0
        }, {
            "fips_code": 19099,
            "state": "IA",
            "area_name": "Jasper County",
            "value": 10.6
        }, {
            "fips_code": 19101,
            "state": "IA",
            "area_name": "Jefferson County",
            "value": 17.9
        }, {
            "fips_code": 19103,
            "state": "IA",
            "area_name": "Johnson County",
            "value": 10.4
        }, {
            "fips_code": 19105,
            "state": "IA",
            "area_name": "Jones County",
            "value": 11.7
        }, {
            "fips_code": 19107,
            "state": "IA",
            "area_name": "Keokuk County",
            "value": 16.3
        }, {
            "fips_code": 19109,
            "state": "IA",
            "area_name": "Kossuth County",
            "value": 12.2
        }, {
            "fips_code": 19111,
            "state": "IA",
            "area_name": "Lee County",
            "value": 18.2
        }, {
            "fips_code": 19113,
            "state": "IA",
            "area_name": "Linn County",
            "value": 10.8
        }, {
            "fips_code": 19115,
            "state": "IA",
            "area_name": "Louisa County",
            "value": 14.6
        }, {
            "fips_code": 19117,
            "state": "IA",
            "area_name": "Lucas County",
            "value": 19.8
        }, {
            "fips_code": 19119,
            "state": "IA",
            "area_name": "Lyon County",
            "value": 7.2
        }, {
            "fips_code": 19121,
            "state": "IA",
            "area_name": "Madison County",
            "value": 7.7
        }, {
            "fips_code": 19123,
            "state": "IA",
            "area_name": "Mahaska County",
            "value": 14.4
        }, {
            "fips_code": 19125,
            "state": "IA",
            "area_name": "Marion County",
            "value": 8.699999999999999
        }, {
            "fips_code": 19127,
            "state": "IA",
            "area_name": "Marshall County",
            "value": 14.0
        }, {
            "fips_code": 19129,
            "state": "IA",
            "area_name": "Mills County",
            "value": 9.5
        }, {
            "fips_code": 19131,
            "state": "IA",
            "area_name": "Mitchell County",
            "value": 13.0
        }, {
            "fips_code": 19133,
            "state": "IA",
            "area_name": "Monona County",
            "value": 15.9
        }, {
            "fips_code": 19135,
            "state": "IA",
            "area_name": "Monroe County",
            "value": 14.3
        }, {
            "fips_code": 19137,
            "state": "IA",
            "area_name": "Montgomery County",
            "value": 17.0
        }, {
            "fips_code": 19139,
            "state": "IA",
            "area_name": "Muscatine County",
            "value": 13.3
        }, {
            "fips_code": 19141,
            "state": "IA",
            "area_name": "O'Brien County",
            "value": 13.6
        }, {
            "fips_code": 19143,
            "state": "IA",
            "area_name": "Osceola County",
            "value": 12.8
        }, {
            "fips_code": 19145,
            "state": "IA",
            "area_name": "Page County",
            "value": 19.7
        }, {
            "fips_code": 19147,
            "state": "IA",
            "area_name": "Palo Alto County",
            "value": 13.7
        }, {
            "fips_code": 19149,
            "state": "IA",
            "area_name": "Plymouth County",
            "value": 8.4
        }, {
            "fips_code": 19151,
            "state": "IA",
            "area_name": "Pocahontas County",
            "value": 15.3
        }, {
            "fips_code": 19153,
            "state": "IA",
            "area_name": "Polk County",
            "value": 11.6
        }, {
            "fips_code": 19155,
            "state": "IA",
            "area_name": "Pottawattamie County",
            "value": 15.1
        }, {
            "fips_code": 19157,
            "state": "IA",
            "area_name": "Poweshiek County",
            "value": 11.6
        }, {
            "fips_code": 19159,
            "state": "IA",
            "area_name": "Ringgold County",
            "value": 19.4
        }, {
            "fips_code": 19161,
            "state": "IA",
            "area_name": "Sac County",
            "value": 12.8
        }, {
            "fips_code": 19163,
            "state": "IA",
            "area_name": "Scott County",
            "value": 16.0
        }, {
            "fips_code": 19165,
            "state": "IA",
            "area_name": "Shelby County",
            "value": 9.800000000000001
        }, {
            "fips_code": 19167,
            "state": "IA",
            "area_name": "Sioux County",
            "value": 5.8
        }, {
            "fips_code": 19169,
            "state": "IA",
            "area_name": "Story County",
            "value": 8.199999999999999
        }, {
            "fips_code": 19171,
            "state": "IA",
            "area_name": "Tama County",
            "value": 16.4
        }, {
            "fips_code": 19173,
            "state": "IA",
            "area_name": "Taylor County",
            "value": 16.1
        }, {
            "fips_code": 19175,
            "state": "IA",
            "area_name": "Union County",
            "value": 16.1
        }, {
            "fips_code": 19177,
            "state": "IA",
            "area_name": "Van Buren County",
            "value": 20.6
        }, {
            "fips_code": 19179,
            "state": "IA",
            "area_name": "Wapello County",
            "value": 18.3
        }, {
            "fips_code": 19181,
            "state": "IA",
            "area_name": "Warren County",
            "value": 5.7
        }, {
            "fips_code": 19183,
            "state": "IA",
            "area_name": "Washington County",
            "value": 11.3
        }, {
            "fips_code": 19185,
            "state": "IA",
            "area_name": "Wayne County",
            "value": 20.8
        }, {
            "fips_code": 19187,
            "state": "IA",
            "area_name": "Webster County",
            "value": 16.6
        }, {
            "fips_code": 19189,
            "state": "IA",
            "area_name": "Winnebago County",
            "value": 14.3
        }, {
            "fips_code": 19191,
            "state": "IA",
            "area_name": "Winneshiek County",
            "value": 8.199999999999999
        }, {
            "fips_code": 19193,
            "state": "IA",
            "area_name": "Woodbury County",
            "value": 20.1
        }, {
            "fips_code": 19195,
            "state": "IA",
            "area_name": "Worth County",
            "value": 12.8
        }, {
            "fips_code": 19197,
            "state": "IA",
            "area_name": "Wright County",
            "value": 15.4
        }, {
            "fips_code": 20000,
            "state": "KS",
            "area_name": "Kansas",
            "value": 13.5
        }, {
            "fips_code": 20001,
            "state": "KS",
            "area_name": "Allen County",
            "value": 22.5
        }, {
            "fips_code": 20003,
            "state": "KS",
            "area_name": "Anderson County",
            "value": 16.1
        }, {
            "fips_code": 20005,
            "state": "KS",
            "area_name": "Atchison County",
            "value": 17.1
        }, {
            "fips_code": 20007,
            "state": "KS",
            "area_name": "Barber County",
            "value": 16.0
        }, {
            "fips_code": 20009,
            "state": "KS",
            "area_name": "Barton County",
            "value": 21.6
        }, {
            "fips_code": 20011,
            "state": "KS",
            "area_name": "Bourbon County",
            "value": 22.3
        }, {
            "fips_code": 20013,
            "state": "KS",
            "area_name": "Brown County",
            "value": 19.2
        }, {
            "fips_code": 20015,
            "state": "KS",
            "area_name": "Butler County",
            "value": 11.0
        }, {
            "fips_code": 20017,
            "state": "KS",
            "area_name": "Chase County",
            "value": 14.6
        }, {
            "fips_code": 20019,
            "state": "KS",
            "area_name": "Chautauqua County",
            "value": 23.6
        }, {
            "fips_code": 20021,
            "state": "KS",
            "area_name": "Cherokee County",
            "value": 19.9
        }, {
            "fips_code": 20023,
            "state": "KS",
            "area_name": "Cheyenne County",
            "value": 20.8
        }, {
            "fips_code": 20025,
            "state": "KS",
            "area_name": "Clark County",
            "value": 18.5
        }, {
            "fips_code": 20027,
            "state": "KS",
            "area_name": "Clay County",
            "value": 12.9
        }, {
            "fips_code": 20029,
            "state": "KS",
            "area_name": "Cloud County",
            "value": 16.6
        }, {
            "fips_code": 20031,
            "state": "KS",
            "area_name": "Coffey County",
            "value": 12.7
        }, {
            "fips_code": 20033,
            "state": "KS",
            "area_name": "Comanche County",
            "value": 14.2
        }, {
            "fips_code": 20035,
            "state": "KS",
            "area_name": "Cowley County",
            "value": 17.8
        }, {
            "fips_code": 20037,
            "state": "KS",
            "area_name": "Crawford County",
            "value": 22.8
        }, {
            "fips_code": 20039,
            "state": "KS",
            "area_name": "Decatur County",
            "value": 19.6
        }, {
            "fips_code": 20041,
            "state": "KS",
            "area_name": "Dickinson County",
            "value": 13.0
        }, {
            "fips_code": 20043,
            "state": "KS",
            "area_name": "Doniphan County",
            "value": 14.9
        }, {
            "fips_code": 20045,
            "state": "KS",
            "area_name": "Douglas County",
            "value": 10.6
        }, {
            "fips_code": 20047,
            "state": "KS",
            "area_name": "Edwards County",
            "value": 16.1
        }, {
            "fips_code": 20049,
            "state": "KS",
            "area_name": "Elk County",
            "value": 25.7
        }, {
            "fips_code": 20051,
            "state": "KS",
            "area_name": "Ellis County",
            "value": 11.1
        }, {
            "fips_code": 20053,
            "state": "KS",
            "area_name": "Ellsworth County",
            "value": 10.9
        }, {
            "fips_code": 20055,
            "state": "KS",
            "area_name": "Finney County",
            "value": 13.5
        }, {
            "fips_code": 20057,
            "state": "KS",
            "area_name": "Ford County",
            "value": 14.1
        }, {
            "fips_code": 20059,
            "state": "KS",
            "area_name": "Franklin County",
            "value": 12.3
        }, {
            "fips_code": 20061,
            "state": "KS",
            "area_name": "Geary County",
            "value": 16.9
        }, {
            "fips_code": 20063,
            "state": "KS",
            "area_name": "Gove County",
            "value": 14.4
        }, {
            "fips_code": 20065,
            "state": "KS",
            "area_name": "Graham County",
            "value": 16.6
        }, {
            "fips_code": 20067,
            "state": "KS",
            "area_name": "Grant County",
            "value": 15.3
        }, {
            "fips_code": 20069,
            "state": "KS",
            "area_name": "Gray County",
            "value": 9.300000000000001
        }, {
            "fips_code": 20071,
            "state": "KS",
            "area_name": "Greeley County",
            "value": 11.5
        }, {
            "fips_code": 20073,
            "state": "KS",
            "area_name": "Greenwood County",
            "value": 23.6
        }, {
            "fips_code": 20075,
            "state": "KS",
            "area_name": "Hamilton County",
            "value": 16.7
        }, {
            "fips_code": 20077,
            "state": "KS",
            "area_name": "Harper County",
            "value": 22.8
        }, {
            "fips_code": 20079,
            "state": "KS",
            "area_name": "Harvey County",
            "value": 11.9
        }, {
            "fips_code": 20081,
            "state": "KS",
            "area_name": "Haskell County",
            "value": 13.6
        }, {
            "fips_code": 20083,
            "state": "KS",
            "area_name": "Hodgeman County",
            "value": 10.8
        }, {
            "fips_code": 20085,
            "state": "KS",
            "area_name": "Jackson County",
            "value": 12.8
        }, {
            "fips_code": 20087,
            "state": "KS",
            "area_name": "Jefferson County",
            "value": 9.6
        }, {
            "fips_code": 20089,
            "state": "KS",
            "area_name": "Jewell County",
            "value": 20.7
        }, {
            "fips_code": 20091,
            "state": "KS",
            "area_name": "Johnson County",
            "value": 5.3
        }, {
            "fips_code": 20093,
            "state": "KS",
            "area_name": "Kearny County",
            "value": 14.1
        }, {
            "fips_code": 20095,
            "state": "KS",
            "area_name": "Kingman County",
            "value": 16.4
        }, {
            "fips_code": 20097,
            "state": "KS",
            "area_name": "Kiowa County",
            "value": 13.9
        }, {
            "fips_code": 20099,
            "state": "KS",
            "area_name": "Labette County",
            "value": 20.7
        }, {
            "fips_code": 20101,
            "state": "KS",
            "area_name": "Lane County",
            "value": 14.4
        }, {
            "fips_code": 20103,
            "state": "KS",
            "area_name": "Leavenworth County",
            "value": 8.699999999999999
        }, {
            "fips_code": 20105,
            "state": "KS",
            "area_name": "Lincoln County",
            "value": 15.9
        }, {
            "fips_code": 20107,
            "state": "KS",
            "area_name": "Linn County",
            "value": 16.3
        }, {
            "fips_code": 20109,
            "state": "KS",
            "area_name": "Logan County",
            "value": 13.4
        }, {
            "fips_code": 20111,
            "state": "KS",
            "area_name": "Lyon County",
            "value": 13.8
        }, {
            "fips_code": 20113,
            "state": "KS",
            "area_name": "McPherson County",
            "value": 9.199999999999999
        }, {
            "fips_code": 20115,
            "state": "KS",
            "area_name": "Marion County",
            "value": 11.4
        }, {
            "fips_code": 20117,
            "state": "KS",
            "area_name": "Marshall County",
            "value": 11.9
        }, {
            "fips_code": 20119,
            "state": "KS",
            "area_name": "Meade County",
            "value": 13.1
        }, {
            "fips_code": 20121,
            "state": "KS",
            "area_name": "Miami County",
            "value": 8.699999999999999
        }, {
            "fips_code": 20123,
            "state": "KS",
            "area_name": "Mitchell County",
            "value": 13.2
        }, {
            "fips_code": 20125,
            "state": "KS",
            "area_name": "Montgomery County",
            "value": 21.9
        }, {
            "fips_code": 20127,
            "state": "KS",
            "area_name": "Morris County",
            "value": 14.3
        }, {
            "fips_code": 20129,
            "state": "KS",
            "area_name": "Morton County",
            "value": 16.0
        }, {
            "fips_code": 20131,
            "state": "KS",
            "area_name": "Nemaha County",
            "value": 9.699999999999999
        }, {
            "fips_code": 20133,
            "state": "KS",
            "area_name": "Neosho County",
            "value": 20.8
        }, {
            "fips_code": 20135,
            "state": "KS",
            "area_name": "Ness County",
            "value": 12.7
        }, {
            "fips_code": 20137,
            "state": "KS",
            "area_name": "Norton County",
            "value": 16.4
        }, {
            "fips_code": 20139,
            "state": "KS",
            "area_name": "Osage County",
            "value": 13.0
        }, {
            "fips_code": 20141,
            "state": "KS",
            "area_name": "Osborne County",
            "value": 16.9
        }, {
            "fips_code": 20143,
            "state": "KS",
            "area_name": "Ottawa County",
            "value": 13.5
        }, {
            "fips_code": 20145,
            "state": "KS",
            "area_name": "Pawnee County",
            "value": 16.7
        }, {
            "fips_code": 20147,
            "state": "KS",
            "area_name": "Phillips County",
            "value": 13.6
        }, {
            "fips_code": 20149,
            "state": "KS",
            "area_name": "Pottawatomie County",
            "value": 8.9
        }, {
            "fips_code": 20151,
            "state": "KS",
            "area_name": "Pratt County",
            "value": 13.7
        }, {
            "fips_code": 20153,
            "state": "KS",
            "area_name": "Rawlins County",
            "value": 14.7
        }, {
            "fips_code": 20155,
            "state": "KS",
            "area_name": "Reno County",
            "value": 15.5
        }, {
            "fips_code": 20157,
            "state": "KS",
            "area_name": "Republic County",
            "value": 13.1
        }, {
            "fips_code": 20159,
            "state": "KS",
            "area_name": "Rice County",
            "value": 17.2
        }, {
            "fips_code": 20161,
            "state": "KS",
            "area_name": "Riley County",
            "value": 12.4
        }, {
            "fips_code": 20163,
            "state": "KS",
            "area_name": "Rooks County",
            "value": 13.7
        }, {
            "fips_code": 20165,
            "state": "KS",
            "area_name": "Rush County",
            "value": 20.3
        }, {
            "fips_code": 20167,
            "state": "KS",
            "area_name": "Russell County",
            "value": 19.8
        }, {
            "fips_code": 20169,
            "state": "KS",
            "area_name": "Saline County",
            "value": 15.1
        }, {
            "fips_code": 20171,
            "state": "KS",
            "area_name": "Scott County",
            "value": 9.5
        }, {
            "fips_code": 20173,
            "state": "KS",
            "area_name": "Sedgwick County",
            "value": 16.6
        }, {
            "fips_code": 20175,
            "state": "KS",
            "area_name": "Seward County",
            "value": 16.1
        }, {
            "fips_code": 20177,
            "state": "KS",
            "area_name": "Shawnee County",
            "value": 16.4
        }, {
            "fips_code": 20179,
            "state": "KS",
            "area_name": "Sheridan County",
            "value": 13.1
        }, {
            "fips_code": 20181,
            "state": "KS",
            "area_name": "Sherman County",
            "value": 17.9
        }, {
            "fips_code": 20183,
            "state": "KS",
            "area_name": "Smith County",
            "value": 14.8
        }, {
            "fips_code": 20185,
            "state": "KS",
            "area_name": "Stafford County",
            "value": 18.6
        }, {
            "fips_code": 20187,
            "state": "KS",
            "area_name": "Stanton County",
            "value": 13.0
        }, {
            "fips_code": 20189,
            "state": "KS",
            "area_name": "Stevens County",
            "value": 14.2
        }, {
            "fips_code": 20191,
            "state": "KS",
            "area_name": "Sumner County",
            "value": 15.4
        }, {
            "fips_code": 20193,
            "state": "KS",
            "area_name": "Thomas County",
            "value": 10.9
        }, {
            "fips_code": 20195,
            "state": "KS",
            "area_name": "Trego County",
            "value": 10.6
        }, {
            "fips_code": 20197,
            "state": "KS",
            "area_name": "Wabaunsee County",
            "value": 8.4
        }, {
            "fips_code": 20199,
            "state": "KS",
            "area_name": "Wallace County",
            "value": 19.1
        }, {
            "fips_code": 20201,
            "state": "KS",
            "area_name": "Washington County",
            "value": 11.1
        }, {
            "fips_code": 20203,
            "state": "KS",
            "area_name": "Wichita County",
            "value": 12.7
        }, {
            "fips_code": 20205,
            "state": "KS",
            "area_name": "Wilson County",
            "value": 21.7
        }, {
            "fips_code": 20207,
            "state": "KS",
            "area_name": "Woodson County",
            "value": 18.8
        }, {
            "fips_code": 20209,
            "state": "KS",
            "area_name": "Wyandotte County",
            "value": 22.3
        }, {
            "fips_code": 21000,
            "state": "KY",
            "area_name": "Kentucky",
            "value": 21.2
        }, {
            "fips_code": 21001,
            "state": "KY",
            "area_name": "Adair County",
            "value": 35.1
        }, {
            "fips_code": 21003,
            "state": "KY",
            "area_name": "Allen County",
            "value": 24.6
        }, {
            "fips_code": 21005,
            "state": "KY",
            "area_name": "Anderson County",
            "value": 12.8
        }, {
            "fips_code": 21007,
            "state": "KY",
            "area_name": "Ballard County",
            "value": 21.9
        }, {
            "fips_code": 21009,
            "state": "KY",
            "area_name": "Barren County",
            "value": 26.3
        }, {
            "fips_code": 21011,
            "state": "KY",
            "area_name": "Bath County",
            "value": 30.7
        }, {
            "fips_code": 21013,
            "state": "KY",
            "area_name": "Bell County",
            "value": 39.4
        }, {
            "fips_code": 21015,
            "state": "KY",
            "area_name": "Boone County",
            "value": 8.300000000000001
        }, {
            "fips_code": 21017,
            "state": "KY",
            "area_name": "Bourbon County",
            "value": 20.3
        }, {
            "fips_code": 21019,
            "state": "KY",
            "area_name": "Boyd County",
            "value": 26.6
        }, {
            "fips_code": 21021,
            "state": "KY",
            "area_name": "Boyle County",
            "value": 20.9
        }, {
            "fips_code": 21023,
            "state": "KY",
            "area_name": "Bracken County",
            "value": 23.2
        }, {
            "fips_code": 21025,
            "state": "KY",
            "area_name": "Breathitt County",
            "value": 42.6
        }, {
            "fips_code": 21027,
            "state": "KY",
            "area_name": "Breckinridge County",
            "value": 23.9
        }, {
            "fips_code": 21029,
            "state": "KY",
            "area_name": "Bullitt County",
            "value": 13.7
        }, {
            "fips_code": 21031,
            "state": "KY",
            "area_name": "Butler County",
            "value": 23.8
        }, {
            "fips_code": 21033,
            "state": "KY",
            "area_name": "Caldwell County",
            "value": 23.5
        }, {
            "fips_code": 21035,
            "state": "KY",
            "area_name": "Calloway County",
            "value": 18.4
        }, {
            "fips_code": 21037,
            "state": "KY",
            "area_name": "Campbell County",
            "value": 13.4
        }, {
            "fips_code": 21039,
            "state": "KY",
            "area_name": "Carlisle County",
            "value": 25.4
        }, {
            "fips_code": 21041,
            "state": "KY",
            "area_name": "Carroll County",
            "value": 25.5
        }, {
            "fips_code": 21043,
            "state": "KY",
            "area_name": "Carter County",
            "value": 29.6
        }, {
            "fips_code": 21045,
            "state": "KY",
            "area_name": "Casey County",
            "value": 32.1
        }, {
            "fips_code": 21047,
            "state": "KY",
            "area_name": "Christian County",
            "value": 22.7
        }, {
            "fips_code": 21049,
            "state": "KY",
            "area_name": "Clark County",
            "value": 17.9
        }, {
            "fips_code": 21051,
            "state": "KY",
            "area_name": "Clay County",
            "value": 45.3
        }, {
            "fips_code": 21053,
            "state": "KY",
            "area_name": "Clinton County",
            "value": 33.5
        }, {
            "fips_code": 21055,
            "state": "KY",
            "area_name": "Crittenden County",
            "value": 29.4
        }, {
            "fips_code": 21057,
            "state": "KY",
            "area_name": "Cumberland County",
            "value": 31.2
        }, {
            "fips_code": 21059,
            "state": "KY",
            "area_name": "Daviess County",
            "value": 17.2
        }, {
            "fips_code": 21061,
            "state": "KY",
            "area_name": "Edmonson County",
            "value": 22.9
        }, {
            "fips_code": 21063,
            "state": "KY",
            "area_name": "Elliott County",
            "value": 32.4
        }, {
            "fips_code": 21065,
            "state": "KY",
            "area_name": "Estill County",
            "value": 30.0
        }, {
            "fips_code": 21067,
            "state": "KY",
            "area_name": "Fayette County",
            "value": 16.2
        }, {
            "fips_code": 21069,
            "state": "KY",
            "area_name": "Fleming County",
            "value": 24.1
        }, {
            "fips_code": 21071,
            "state": "KY",
            "area_name": "Floyd County",
            "value": 35.5
        }, {
            "fips_code": 21073,
            "state": "KY",
            "area_name": "Franklin County",
            "value": 18.1
        }, {
            "fips_code": 21075,
            "state": "KY",
            "area_name": "Fulton County",
            "value": 37.2
        }, {
            "fips_code": 21077,
            "state": "KY",
            "area_name": "Gallatin County",
            "value": 22.8
        }, {
            "fips_code": 21079,
            "state": "KY",
            "area_name": "Garrard County",
            "value": 20.7
        }, {
            "fips_code": 21081,
            "state": "KY",
            "area_name": "Grant County",
            "value": 19.2
        }, {
            "fips_code": 21083,
            "state": "KY",
            "area_name": "Graves County",
            "value": 22.2
        }, {
            "fips_code": 21085,
            "state": "KY",
            "area_name": "Grayson County",
            "value": 23.9
        }, {
            "fips_code": 21087,
            "state": "KY",
            "area_name": "Green County",
            "value": 27.5
        }, {
            "fips_code": 21089,
            "state": "KY",
            "area_name": "Greenup County",
            "value": 18.5
        }, {
            "fips_code": 21091,
            "state": "KY",
            "area_name": "Hancock County",
            "value": 16.8
        }, {
            "fips_code": 21093,
            "state": "KY",
            "area_name": "Hardin County",
            "value": 15.6
        }, {
            "fips_code": 21095,
            "state": "KY",
            "area_name": "Harlan County",
            "value": 43.8
        }, {
            "fips_code": 21097,
            "state": "KY",
            "area_name": "Harrison County",
            "value": 20.4
        }, {
            "fips_code": 21099,
            "state": "KY",
            "area_name": "Hart County",
            "value": 28.8
        }, {
            "fips_code": 21101,
            "state": "KY",
            "area_name": "Henderson County",
            "value": 17.7
        }, {
            "fips_code": 21103,
            "state": "KY",
            "area_name": "Henry County",
            "value": 19.5
        }, {
            "fips_code": 21105,
            "state": "KY",
            "area_name": "Hickman County",
            "value": 28.4
        }, {
            "fips_code": 21107,
            "state": "KY",
            "area_name": "Hopkins County",
            "value": 24.4
        }, {
            "fips_code": 21109,
            "state": "KY",
            "area_name": "Jackson County",
            "value": 36.1
        }, {
            "fips_code": 21111,
            "state": "KY",
            "area_name": "Jefferson County",
            "value": 19.2
        }, {
            "fips_code": 21113,
            "state": "KY",
            "area_name": "Jessamine County",
            "value": 18.1
        }, {
            "fips_code": 21115,
            "state": "KY",
            "area_name": "Johnson County",
            "value": 29.5
        }, {
            "fips_code": 21117,
            "state": "KY",
            "area_name": "Kenton County",
            "value": 16.8
        }, {
            "fips_code": 21119,
            "state": "KY",
            "area_name": "Knott County",
            "value": 39.0
        }, {
            "fips_code": 21121,
            "state": "KY",
            "area_name": "Knox County",
            "value": 42.2
        }, {
            "fips_code": 21123,
            "state": "KY",
            "area_name": "Larue County",
            "value": 20.8
        }, {
            "fips_code": 21125,
            "state": "KY",
            "area_name": "Laurel County",
            "value": 26.7
        }, {
            "fips_code": 21127,
            "state": "KY",
            "area_name": "Lawrence County",
            "value": 34.2
        }, {
            "fips_code": 21129,
            "state": "KY",
            "area_name": "Lee County",
            "value": 43.9
        }, {
            "fips_code": 21131,
            "state": "KY",
            "area_name": "Leslie County",
            "value": 36.3
        }, {
            "fips_code": 21133,
            "state": "KY",
            "area_name": "Letcher County",
            "value": 37.3
        }, {
            "fips_code": 21135,
            "state": "KY",
            "area_name": "Lewis County",
            "value": 31.4
        }, {
            "fips_code": 21137,
            "state": "KY",
            "area_name": "Lincoln County",
            "value": 24.4
        }, {
            "fips_code": 21139,
            "state": "KY",
            "area_name": "Livingston County",
            "value": 22.3
        }, {
            "fips_code": 21141,
            "state": "KY",
            "area_name": "Logan County",
            "value": 24.7
        }, {
            "fips_code": 21143,
            "state": "KY",
            "area_name": "Lyon County",
            "value": 19.7
        }, {
            "fips_code": 21145,
            "state": "KY",
            "area_name": "McCracken County",
            "value": 24.6
        }, {
            "fips_code": 21147,
            "state": "KY",
            "area_name": "McCreary County",
            "value": 40.3
        }, {
            "fips_code": 21149,
            "state": "KY",
            "area_name": "McLean County",
            "value": 18.8
        }, {
            "fips_code": 21151,
            "state": "KY",
            "area_name": "Madison County",
            "value": 17.6
        }, {
            "fips_code": 21153,
            "state": "KY",
            "area_name": "Magoffin County",
            "value": 47.0
        }, {
            "fips_code": 21155,
            "state": "KY",
            "area_name": "Marion County",
            "value": 21.2
        }, {
            "fips_code": 21157,
            "state": "KY",
            "area_name": "Marshall County",
            "value": 19.0
        }, {
            "fips_code": 21159,
            "state": "KY",
            "area_name": "Martin County",
            "value": 44.3
        }, {
            "fips_code": 21161,
            "state": "KY",
            "area_name": "Mason County",
            "value": 24.4
        }, {
            "fips_code": 21163,
            "state": "KY",
            "area_name": "Meade County",
            "value": 19.7
        }, {
            "fips_code": 21165,
            "state": "KY",
            "area_name": "Menifee County",
            "value": 42.0
        }, {
            "fips_code": 21167,
            "state": "KY",
            "area_name": "Mercer County",
            "value": 18.3
        }, {
            "fips_code": 21169,
            "state": "KY",
            "area_name": "Metcalfe County",
            "value": 31.8
        }, {
            "fips_code": 21171,
            "state": "KY",
            "area_name": "Monroe County",
            "value": 32.1
        }, {
            "fips_code": 21173,
            "state": "KY",
            "area_name": "Montgomery County",
            "value": 23.4
        }, {
            "fips_code": 21175,
            "state": "KY",
            "area_name": "Morgan County",
            "value": 31.0
        }, {
            "fips_code": 21177,
            "state": "KY",
            "area_name": "Muhlenberg County",
            "value": 29.2
        }, {
            "fips_code": 21179,
            "state": "KY",
            "area_name": "Nelson County",
            "value": 14.0
        }, {
            "fips_code": 21181,
            "state": "KY",
            "area_name": "Nicholas County",
            "value": 26.4
        }, {
            "fips_code": 21183,
            "state": "KY",
            "area_name": "Ohio County",
            "value": 21.0
        }, {
            "fips_code": 21185,
            "state": "KY",
            "area_name": "Oldham County",
            "value": 4.6
        }, {
            "fips_code": 21187,
            "state": "KY",
            "area_name": "Owen County",
            "value": 20.5
        }, {
            "fips_code": 21189,
            "state": "KY",
            "area_name": "Owsley County",
            "value": 43.5
        }, {
            "fips_code": 21191,
            "state": "KY",
            "area_name": "Pendleton County",
            "value": 20.8
        }, {
            "fips_code": 21193,
            "state": "KY",
            "area_name": "Perry County",
            "value": 37.5
        }, {
            "fips_code": 21195,
            "state": "KY",
            "area_name": "Pike County",
            "value": 39.6
        }, {
            "fips_code": 21197,
            "state": "KY",
            "area_name": "Powell County",
            "value": 32.0
        }, {
            "fips_code": 21199,
            "state": "KY",
            "area_name": "Pulaski County",
            "value": 25.4
        }, {
            "fips_code": 21201,
            "state": "KY",
            "area_name": "Robertson County",
            "value": 26.6
        }, {
            "fips_code": 21203,
            "state": "KY",
            "area_name": "Rockcastle County",
            "value": 29.1
        }, {
            "fips_code": 21205,
            "state": "KY",
            "area_name": "Rowan County",
            "value": 25.5
        }, {
            "fips_code": 21207,
            "state": "KY",
            "area_name": "Russell County",
            "value": 31.4
        }, {
            "fips_code": 21209,
            "state": "KY",
            "area_name": "Scott County",
            "value": 12.4
        }, {
            "fips_code": 21211,
            "state": "KY",
            "area_name": "Shelby County",
            "value": 12.2
        }, {
            "fips_code": 21213,
            "state": "KY",
            "area_name": "Simpson County",
            "value": 20.8
        }, {
            "fips_code": 21215,
            "state": "KY",
            "area_name": "Spencer County",
            "value": 9.1
        }, {
            "fips_code": 21217,
            "state": "KY",
            "area_name": "Taylor County",
            "value": 25.0
        }, {
            "fips_code": 21219,
            "state": "KY",
            "area_name": "Todd County",
            "value": 27.8
        }, {
            "fips_code": 21221,
            "state": "KY",
            "area_name": "Trigg County",
            "value": 27.9
        }, {
            "fips_code": 21223,
            "state": "KY",
            "area_name": "Trimble County",
            "value": 18.0
        }, {
            "fips_code": 21225,
            "state": "KY",
            "area_name": "Union County",
            "value": 22.4
        }, {
            "fips_code": 21227,
            "state": "KY",
            "area_name": "Warren County",
            "value": 20.4
        }, {
            "fips_code": 21229,
            "state": "KY",
            "area_name": "Washington County",
            "value": 17.8
        }, {
            "fips_code": 21231,
            "state": "KY",
            "area_name": "Wayne County",
            "value": 34.0
        }, {
            "fips_code": 21233,
            "state": "KY",
            "area_name": "Webster County",
            "value": 21.1
        }, {
            "fips_code": 21235,
            "state": "KY",
            "area_name": "Whitley County",
            "value": 33.5
        }, {
            "fips_code": 21237,
            "state": "KY",
            "area_name": "Wolfe County",
            "value": 42.6
        }, {
            "fips_code": 21239,
            "state": "KY",
            "area_name": "Woodford County",
            "value": 11.9
        }, {
            "fips_code": 22000,
            "state": "LA",
            "area_name": "Louisiana",
            "value": 26.9
        }, {
            "fips_code": 22001,
            "state": "LA",
            "area_name": "Acadia Parish",
            "value": 28.7
        }, {
            "fips_code": 22003,
            "state": "LA",
            "area_name": "Allen Parish",
            "value": 26.9
        }, {
            "fips_code": 22005,
            "state": "LA",
            "area_name": "Ascension Parish",
            "value": 14.7
        }, {
            "fips_code": 22007,
            "state": "LA",
            "area_name": "Assumption Parish",
            "value": 27.2
        }, {
            "fips_code": 22009,
            "state": "LA",
            "area_name": "Avoyelles Parish",
            "value": 45.0
        }, {
            "fips_code": 22011,
            "state": "LA",
            "area_name": "Beauregard Parish",
            "value": 20.4
        }, {
            "fips_code": 22013,
            "state": "LA",
            "area_name": "Bienville Parish",
            "value": 38.5
        }, {
            "fips_code": 22015,
            "state": "LA",
            "area_name": "Bossier Parish",
            "value": 19.9
        }, {
            "fips_code": 22017,
            "state": "LA",
            "area_name": "Caddo Parish",
            "value": 33.6
        }, {
            "fips_code": 22019,
            "state": "LA",
            "area_name": "Calcasieu Parish",
            "value": 23.6
        }, {
            "fips_code": 22021,
            "state": "LA",
            "area_name": "Caldwell Parish",
            "value": 31.7
        }, {
            "fips_code": 22023,
            "state": "LA",
            "area_name": "Cameron Parish",
            "value": 18.1
        }, {
            "fips_code": 22025,
            "state": "LA",
            "area_name": "Catahoula Parish",
            "value": 39.2
        }, {
            "fips_code": 22027,
            "state": "LA",
            "area_name": "Claiborne Parish",
            "value": 36.7
        }, {
            "fips_code": 22029,
            "state": "LA",
            "area_name": "Concordia Parish",
            "value": 55.7
        }, {
            "fips_code": 22031,
            "state": "LA",
            "area_name": "De Soto Parish",
            "value": 25.7
        }, {
            "fips_code": 22033,
            "state": "LA",
            "area_name": "East Baton Rouge Parish",
            "value": 26.9
        }, {
            "fips_code": 22035,
            "state": "LA",
            "area_name": "East Carroll Parish",
            "value": 50.5
        }, {
            "fips_code": 22037,
            "state": "LA",
            "area_name": "East Feliciana Parish",
            "value": 23.4
        }, {
            "fips_code": 22039,
            "state": "LA",
            "area_name": "Evangeline Parish",
            "value": 35.1
        }, {
            "fips_code": 22041,
            "state": "LA",
            "area_name": "Franklin Parish",
            "value": 36.6
        }, {
            "fips_code": 22043,
            "state": "LA",
            "area_name": "Grant Parish",
            "value": 25.6
        }, {
            "fips_code": 22045,
            "state": "LA",
            "area_name": "Iberia Parish",
            "value": 37.7
        }, {
            "fips_code": 22047,
            "state": "LA",
            "area_name": "Iberville Parish",
            "value": 27.8
        }, {
            "fips_code": 22049,
            "state": "LA",
            "area_name": "Jackson Parish",
            "value": 28.5
        }, {
            "fips_code": 22051,
            "state": "LA",
            "area_name": "Jefferson Parish",
            "value": 24.9
        }, {
            "fips_code": 22053,
            "state": "LA",
            "area_name": "Jefferson Davis Parish",
            "value": 23.5
        }, {
            "fips_code": 22055,
            "state": "LA",
            "area_name": "Lafayette Parish",
            "value": 26.3
        }, {
            "fips_code": 22057,
            "state": "LA",
            "area_name": "Lafourche Parish",
            "value": 20.8
        }, {
            "fips_code": 22059,
            "state": "LA",
            "area_name": "La Salle Parish",
            "value": 23.8
        }, {
            "fips_code": 22061,
            "state": "LA",
            "area_name": "Lincoln Parish",
            "value": 26.5
        }, {
            "fips_code": 22063,
            "state": "LA",
            "area_name": "Livingston Parish",
            "value": 16.3
        }, {
            "fips_code": 22065,
            "state": "LA",
            "area_name": "Madison Parish",
            "value": 48.1
        }, {
            "fips_code": 22067,
            "state": "LA",
            "area_name": "Morehouse Parish",
            "value": 42.9
        }, {
            "fips_code": 22069,
            "state": "LA",
            "area_name": "Natchitoches Parish",
            "value": 27.6
        }, {
            "fips_code": 22071,
            "state": "LA",
            "area_name": "Orleans Parish",
            "value": 36.8
        }, {
            "fips_code": 22073,
            "state": "LA",
            "area_name": "Ouachita Parish",
            "value": 31.1
        }, {
            "fips_code": 22075,
            "state": "LA",
            "area_name": "Plaquemines Parish",
            "value": 19.4
        }, {
            "fips_code": 22077,
            "state": "LA",
            "area_name": "Pointe Coupee Parish",
            "value": 27.3
        }, {
            "fips_code": 22079,
            "state": "LA",
            "area_name": "Rapides Parish",
            "value": 27.9
        }, {
            "fips_code": 22081,
            "state": "LA",
            "area_name": "Red River Parish",
            "value": 35.1
        }, {
            "fips_code": 22083,
            "state": "LA",
            "area_name": "Richland Parish",
            "value": 34.3
        }, {
            "fips_code": 22085,
            "state": "LA",
            "area_name": "Sabine Parish",
            "value": 28.6
        }, {
            "fips_code": 22087,
            "state": "LA",
            "area_name": "St. Bernard Parish",
            "value": 30.9
        }, {
            "fips_code": 22089,
            "state": "LA",
            "area_name": "St. Charles Parish",
            "value": 17.2
        }, {
            "fips_code": 22091,
            "state": "LA",
            "area_name": "St. Helena Parish",
            "value": 37.9
        }, {
            "fips_code": 22093,
            "state": "LA",
            "area_name": "St. James Parish",
            "value": 23.3
        }, {
            "fips_code": 22095,
            "state": "LA",
            "area_name": "St. John the Baptist Parish",
            "value": 27.3
        }, {
            "fips_code": 22097,
            "state": "LA",
            "area_name": "St. Landry Parish",
            "value": 34.4
        }, {
            "fips_code": 22099,
            "state": "LA",
            "area_name": "St. Martin Parish",
            "value": 26.4
        }, {
            "fips_code": 22101,
            "state": "LA",
            "area_name": "St. Mary Parish",
            "value": 32.2
        }, {
            "fips_code": 22103,
            "state": "LA",
            "area_name": "St. Tammany Parish",
            "value": 17.1
        }, {
            "fips_code": 22105,
            "state": "LA",
            "area_name": "Tangipahoa Parish",
            "value": 25.4
        }, {
            "fips_code": 22107,
            "state": "LA",
            "area_name": "Tensas Parish",
            "value": 47.7
        }, {
            "fips_code": 22109,
            "state": "LA",
            "area_name": "Terrebonne Parish",
            "value": 22.7
        }, {
            "fips_code": 22111,
            "state": "LA",
            "area_name": "Union Parish",
            "value": 29.1
        }, {
            "fips_code": 22113,
            "state": "LA",
            "area_name": "Vermilion Parish",
            "value": 27.2
        }, {
            "fips_code": 22115,
            "state": "LA",
            "area_name": "Vernon Parish",
            "value": 19.6
        }, {
            "fips_code": 22117,
            "state": "LA",
            "area_name": "Washington Parish",
            "value": 35.4
        }, {
            "fips_code": 22119,
            "state": "LA",
            "area_name": "Webster Parish",
            "value": 34.4
        }, {
            "fips_code": 22121,
            "state": "LA",
            "area_name": "West Baton Rouge Parish",
            "value": 21.2
        }, {
            "fips_code": 22123,
            "state": "LA",
            "area_name": "West Carroll Parish",
            "value": 32.2
        }, {
            "fips_code": 22125,
            "state": "LA",
            "area_name": "West Feliciana Parish",
            "value": 19.2
        }, {
            "fips_code": 22127,
            "state": "LA",
            "area_name": "Winn Parish",
            "value": 34.3
        }, {
            "fips_code": 23000,
            "state": "ME",
            "area_name": "Maine",
            "value": 13.8
        }, {
            "fips_code": 23001,
            "state": "ME",
            "area_name": "Androscoggin County",
            "value": 19.1
        }, {
            "fips_code": 23003,
            "state": "ME",
            "area_name": "Aroostook County",
            "value": 18.9
        }, {
            "fips_code": 23005,
            "state": "ME",
            "area_name": "Cumberland County",
            "value": 8.699999999999999
        }, {
            "fips_code": 23007,
            "state": "ME",
            "area_name": "Franklin County",
            "value": 15.7
        }, {
            "fips_code": 23009,
            "state": "ME",
            "area_name": "Hancock County",
            "value": 14.2
        }, {
            "fips_code": 23011,
            "state": "ME",
            "area_name": "Kennebec County",
            "value": 12.8
        }, {
            "fips_code": 23013,
            "state": "ME",
            "area_name": "Knox County",
            "value": 13.5
        }, {
            "fips_code": 23015,
            "state": "ME",
            "area_name": "Lincoln County",
            "value": 13.3
        }, {
            "fips_code": 23017,
            "state": "ME",
            "area_name": "Oxford County",
            "value": 20.9
        }, {
            "fips_code": 23019,
            "state": "ME",
            "area_name": "Penobscot County",
            "value": 15.7
        }, {
            "fips_code": 23021,
            "state": "ME",
            "area_name": "Piscataquis County",
            "value": 21.3
        }, {
            "fips_code": 23023,
            "state": "ME",
            "area_name": "Sagadahoc County",
            "value": 11.3
        }, {
            "fips_code": 23025,
            "state": "ME",
            "area_name": "Somerset County",
            "value": 19.2
        }, {
            "fips_code": 23027,
            "state": "ME",
            "area_name": "Waldo County",
            "value": 18.2
        }, {
            "fips_code": 23029,
            "state": "ME",
            "area_name": "Washington County",
            "value": 22.5
        }, {
            "fips_code": 23031,
            "state": "ME",
            "area_name": "York County",
            "value": 9.9
        }, {
            "fips_code": 24000,
            "state": "MD",
            "area_name": "Maryland",
            "value": 14.0
        }, {
            "fips_code": 24001,
            "state": "MD",
            "area_name": "Allegany County",
            "value": 22.4
        }, {
            "fips_code": 24003,
            "state": "MD",
            "area_name": "Anne Arundel County",
            "value": 7.9
        }, {
            "fips_code": 24005,
            "state": "MD",
            "area_name": "Baltimore County",
            "value": 14.2
        }, {
            "fips_code": 24009,
            "state": "MD",
            "area_name": "Calvert County",
            "value": 7.4
        }, {
            "fips_code": 24011,
            "state": "MD",
            "area_name": "Caroline County",
            "value": 20.3
        }, {
            "fips_code": 24013,
            "state": "MD",
            "area_name": "Carroll County",
            "value": 6.2
        }, {
            "fips_code": 24015,
            "state": "MD",
            "area_name": "Cecil County",
            "value": 15.1
        }, {
            "fips_code": 24017,
            "state": "MD",
            "area_name": "Charles County",
            "value": 9.199999999999999
        }, {
            "fips_code": 24019,
            "state": "MD",
            "area_name": "Dorchester County",
            "value": 25.7
        }, {
            "fips_code": 24021,
            "state": "MD",
            "area_name": "Frederick County",
            "value": 8.4
        }, {
            "fips_code": 24023,
            "state": "MD",
            "area_name": "Garrett County",
            "value": 17.1
        }, {
            "fips_code": 24025,
            "state": "MD",
            "area_name": "Harford County",
            "value": 10.2
        }, {
            "fips_code": 24027,
            "state": "MD",
            "area_name": "Howard County",
            "value": 7.4
        }, {
            "fips_code": 24029,
            "state": "MD",
            "area_name": "Kent County",
            "value": 20.2
        }, {
            "fips_code": 24031,
            "state": "MD",
            "area_name": "Montgomery County",
            "value": 11.4
        }, {
            "fips_code": 24033,
            "state": "MD",
            "area_name": "Prince George's County",
            "value": 15.7
        }, {
            "fips_code": 24035,
            "state": "MD",
            "area_name": "Queen Anne's County",
            "value": 10.5
        }, {
            "fips_code": 24037,
            "state": "MD",
            "area_name": "St. Mary's County",
            "value": 10.1
        }, {
            "fips_code": 24039,
            "state": "MD",
            "area_name": "Somerset County",
            "value": 30.4
        }, {
            "fips_code": 24041,
            "state": "MD",
            "area_name": "Talbot County",
            "value": 15.0
        }, {
            "fips_code": 24043,
            "state": "MD",
            "area_name": "Washington County",
            "value": 18.4
        }, {
            "fips_code": 24045,
            "state": "MD",
            "area_name": "Wicomico County",
            "value": 18.6
        }, {
            "fips_code": 24047,
            "state": "MD",
            "area_name": "Worcester County",
            "value": 16.5
        }, {
            "fips_code": 24510,
            "state": "MD",
            "area_name": "Baltimore city",
            "value": 33.8
        }, {
            "fips_code": 25000,
            "state": "MA",
            "area_name": "Massachusetts",
            "value": 12.8
        }, {
            "fips_code": 25001,
            "state": "MA",
            "area_name": "Barnstable County",
            "value": 11.3
        }, {
            "fips_code": 25003,
            "state": "MA",
            "area_name": "Berkshire County",
            "value": 15.4
        }, {
            "fips_code": 25005,
            "state": "MA",
            "area_name": "Bristol County",
            "value": 15.3
        }, {
            "fips_code": 25007,
            "state": "MA",
            "area_name": "Dukes County",
            "value": 12.6
        }, {
            "fips_code": 25009,
            "state": "MA",
            "area_name": "Essex County",
            "value": 12.2
        }, {
            "fips_code": 25011,
            "state": "MA",
            "area_name": "Franklin County",
            "value": 17.3
        }, {
            "fips_code": 25013,
            "state": "MA",
            "area_name": "Hampden County",
            "value": 24.8
        }, {
            "fips_code": 25015,
            "state": "MA",
            "area_name": "Hampshire County",
            "value": 11.0
        }, {
            "fips_code": 25017,
            "state": "MA",
            "area_name": "Middlesex County",
            "value": 8.300000000000001
        }, {
            "fips_code": 25019,
            "state": "MA",
            "area_name": "Nantucket County",
            "value": 6.0
        }, {
            "fips_code": 25021,
            "state": "MA",
            "area_name": "Norfolk County",
            "value": 6.8
        }, {
            "fips_code": 25023,
            "state": "MA",
            "area_name": "Plymouth County",
            "value": 8.5
        }, {
            "fips_code": 25025,
            "state": "MA",
            "area_name": "Suffolk County",
            "value": 25.1
        }, {
            "fips_code": 25027,
            "state": "MA",
            "area_name": "Worcester County",
            "value": 12.1
        }, {
            "fips_code": 26000,
            "state": "MI",
            "area_name": "Michigan",
            "value": 17.6
        }, {
            "fips_code": 26001,
            "state": "MI",
            "area_name": "Alcona County",
            "value": 26.3
        }, {
            "fips_code": 26003,
            "state": "MI",
            "area_name": "Alger County",
            "value": 17.0
        }, {
            "fips_code": 26005,
            "state": "MI",
            "area_name": "Allegan County",
            "value": 12.1
        }, {
            "fips_code": 26007,
            "state": "MI",
            "area_name": "Alpena County",
            "value": 23.7
        }, {
            "fips_code": 26009,
            "state": "MI",
            "area_name": "Antrim County",
            "value": 16.6
        }, {
            "fips_code": 26011,
            "state": "MI",
            "area_name": "Arenac County",
            "value": 22.9
        }, {
            "fips_code": 26013,
            "state": "MI",
            "area_name": "Baraga County",
            "value": 22.2
        }, {
            "fips_code": 26015,
            "state": "MI",
            "area_name": "Barry County",
            "value": 12.1
        }, {
            "fips_code": 26017,
            "state": "MI",
            "area_name": "Bay County",
            "value": 16.6
        }, {
            "fips_code": 26019,
            "state": "MI",
            "area_name": "Benzie County",
            "value": 14.1
        }, {
            "fips_code": 26021,
            "state": "MI",
            "area_name": "Berrien County",
            "value": 24.3
        }, {
            "fips_code": 26023,
            "state": "MI",
            "area_name": "Branch County",
            "value": 17.9
        }, {
            "fips_code": 26025,
            "state": "MI",
            "area_name": "Calhoun County",
            "value": 19.9
        }, {
            "fips_code": 26027,
            "state": "MI",
            "area_name": "Cass County",
            "value": 16.1
        }, {
            "fips_code": 26029,
            "state": "MI",
            "area_name": "Charlevoix County",
            "value": 13.6
        }, {
            "fips_code": 26031,
            "state": "MI",
            "area_name": "Cheboygan County",
            "value": 20.8
        }, {
            "fips_code": 26033,
            "state": "MI",
            "area_name": "Chippewa County",
            "value": 21.6
        }, {
            "fips_code": 26035,
            "state": "MI",
            "area_name": "Clare County",
            "value": 30.7
        }, {
            "fips_code": 26037,
            "state": "MI",
            "area_name": "Clinton County",
            "value": 9.0
        }, {
            "fips_code": 26039,
            "state": "MI",
            "area_name": "Crawford County",
            "value": 25.3
        }, {
            "fips_code": 26041,
            "state": "MI",
            "area_name": "Delta County",
            "value": 15.4
        }, {
            "fips_code": 26043,
            "state": "MI",
            "area_name": "Dickinson County",
            "value": 14.3
        }, {
            "fips_code": 26045,
            "state": "MI",
            "area_name": "Eaton County",
            "value": 12.0
        }, {
            "fips_code": 26047,
            "state": "MI",
            "area_name": "Emmet County",
            "value": 11.9
        }, {
            "fips_code": 26049,
            "state": "MI",
            "area_name": "Genesee County",
            "value": 22.6
        }, {
            "fips_code": 26051,
            "state": "MI",
            "area_name": "Gladwin County",
            "value": 25.1
        }, {
            "fips_code": 26053,
            "state": "MI",
            "area_name": "Gogebic County",
            "value": 26.0
        }, {
            "fips_code": 26055,
            "state": "MI",
            "area_name": "Grand Traverse County",
            "value": 11.7
        }, {
            "fips_code": 26057,
            "state": "MI",
            "area_name": "Gratiot County",
            "value": 20.1
        }, {
            "fips_code": 26059,
            "state": "MI",
            "area_name": "Hillsdale County",
            "value": 21.5
        }, {
            "fips_code": 26061,
            "state": "MI",
            "area_name": "Houghton County",
            "value": 13.8
        }, {
            "fips_code": 26063,
            "state": "MI",
            "area_name": "Huron County",
            "value": 16.5
        }, {
            "fips_code": 26065,
            "state": "MI",
            "area_name": "Ingham County",
            "value": 16.5
        }, {
            "fips_code": 26067,
            "state": "MI",
            "area_name": "Ionia County",
            "value": 15.2
        }, {
            "fips_code": 26069,
            "state": "MI",
            "area_name": "Iosco County",
            "value": 24.5
        }, {
            "fips_code": 26071,
            "state": "MI",
            "area_name": "Iron County",
            "value": 25.8
        }, {
            "fips_code": 26073,
            "state": "MI",
            "area_name": "Isabella County",
            "value": 16.2
        }, {
            "fips_code": 26075,
            "state": "MI",
            "area_name": "Jackson County",
            "value": 17.8
        }, {
            "fips_code": 26077,
            "state": "MI",
            "area_name": "Kalamazoo County",
            "value": 14.6
        }, {
            "fips_code": 26079,
            "state": "MI",
            "area_name": "Kalkaska County",
            "value": 18.7
        }, {
            "fips_code": 26081,
            "state": "MI",
            "area_name": "Kent County",
            "value": 12.7
        }, {
            "fips_code": 26083,
            "state": "MI",
            "area_name": "Keweenaw County",
            "value": 16.1
        }, {
            "fips_code": 26085,
            "state": "MI",
            "area_name": "Lake County",
            "value": 32.0
        }, {
            "fips_code": 26087,
            "state": "MI",
            "area_name": "Lapeer County",
            "value": 11.3
        }, {
            "fips_code": 26089,
            "state": "MI",
            "area_name": "Leelanau County",
            "value": 11.4
        }, {
            "fips_code": 26091,
            "state": "MI",
            "area_name": "Lenawee County",
            "value": 15.4
        }, {
            "fips_code": 26093,
            "state": "MI",
            "area_name": "Livingston County",
            "value": 5.7
        }, {
            "fips_code": 26095,
            "state": "MI",
            "area_name": "Luce County",
            "value": 26.7
        }, {
            "fips_code": 26097,
            "state": "MI",
            "area_name": "Mackinac County",
            "value": 20.4
        }, {
            "fips_code": 26099,
            "state": "MI",
            "area_name": "Macomb County",
            "value": 16.5
        }, {
            "fips_code": 26101,
            "state": "MI",
            "area_name": "Manistee County",
            "value": 21.1
        }, {
            "fips_code": 26103,
            "state": "MI",
            "area_name": "Marquette County",
            "value": 14.1
        }, {
            "fips_code": 26105,
            "state": "MI",
            "area_name": "Mason County",
            "value": 21.4
        }, {
            "fips_code": 26107,
            "state": "MI",
            "area_name": "Mecosta County",
            "value": 19.3
        }, {
            "fips_code": 26109,
            "state": "MI",
            "area_name": "Menominee County",
            "value": 16.8
        }, {
            "fips_code": 26111,
            "state": "MI",
            "area_name": "Midland County",
            "value": 13.2
        }, {
            "fips_code": 26113,
            "state": "MI",
            "area_name": "Missaukee County",
            "value": 17.1
        }, {
            "fips_code": 26115,
            "state": "MI",
            "area_name": "Monroe County",
            "value": 12.4
        }, {
            "fips_code": 26117,
            "state": "MI",
            "area_name": "Montcalm County",
            "value": 17.9
        }, {
            "fips_code": 26119,
            "state": "MI",
            "area_name": "Montmorency County",
            "value": 28.5
        }, {
            "fips_code": 26121,
            "state": "MI",
            "area_name": "Muskegon County",
            "value": 19.1
        }, {
            "fips_code": 26123,
            "state": "MI",
            "area_name": "Newaygo County",
            "value": 19.8
        }, {
            "fips_code": 26125,
            "state": "MI",
            "area_name": "Oakland County",
            "value": 8.6
        }, {
            "fips_code": 26127,
            "state": "MI",
            "area_name": "Oceana County",
            "value": 20.9
        }, {
            "fips_code": 26129,
            "state": "MI",
            "area_name": "Ogemaw County",
            "value": 26.6
        }, {
            "fips_code": 26131,
            "state": "MI",
            "area_name": "Ontonagon County",
            "value": 20.5
        }, {
            "fips_code": 26133,
            "state": "MI",
            "area_name": "Osceola County",
            "value": 19.0
        }, {
            "fips_code": 26135,
            "state": "MI",
            "area_name": "Oscoda County",
            "value": 26.9
        }, {
            "fips_code": 26137,
            "state": "MI",
            "area_name": "Otsego County",
            "value": 15.0
        }, {
            "fips_code": 26139,
            "state": "MI",
            "area_name": "Ottawa County",
            "value": 6.5
        }, {
            "fips_code": 26141,
            "state": "MI",
            "area_name": "Presque Isle County",
            "value": 23.1
        }, {
            "fips_code": 26143,
            "state": "MI",
            "area_name": "Roscommon County",
            "value": 31.9
        }, {
            "fips_code": 26145,
            "state": "MI",
            "area_name": "Saginaw County",
            "value": 30.3
        }, {
            "fips_code": 26147,
            "state": "MI",
            "area_name": "St. Clair County",
            "value": 16.7
        }, {
            "fips_code": 26149,
            "state": "MI",
            "area_name": "St. Joseph County",
            "value": 17.3
        }, {
            "fips_code": 26151,
            "state": "MI",
            "area_name": "Sanilac County",
            "value": 21.6
        }, {
            "fips_code": 26153,
            "state": "MI",
            "area_name": "Schoolcraft County",
            "value": 23.9
        }, {
            "fips_code": 26155,
            "state": "MI",
            "area_name": "Shiawassee County",
            "value": 14.3
        }, {
            "fips_code": 26157,
            "state": "MI",
            "area_name": "Tuscola County",
            "value": 19.0
        }, {
            "fips_code": 26159,
            "state": "MI",
            "area_name": "Van Buren County",
            "value": 17.4
        }, {
            "fips_code": 26161,
            "state": "MI",
            "area_name": "Washtenaw County",
            "value": 11.2
        }, {
            "fips_code": 26163,
            "state": "MI",
            "area_name": "Wayne County",
            "value": 28.5
        }, {
            "fips_code": 26165,
            "state": "MI",
            "area_name": "Wexford County",
            "value": 21.6
        }, {
            "fips_code": 27000,
            "state": "MN",
            "area_name": "Minnesota",
            "value": 10.8
        }, {
            "fips_code": 27001,
            "state": "MN",
            "area_name": "Aitkin County",
            "value": 16.8
        }, {
            "fips_code": 27003,
            "state": "MN",
            "area_name": "Anoka County",
            "value": 8.6
        }, {
            "fips_code": 27005,
            "state": "MN",
            "area_name": "Becker County",
            "value": 15.2
        }, {
            "fips_code": 27007,
            "state": "MN",
            "area_name": "Beltrami County",
            "value": 21.0
        }, {
            "fips_code": 27009,
            "state": "MN",
            "area_name": "Benton County",
            "value": 9.6
        }, {
            "fips_code": 27011,
            "state": "MN",
            "area_name": "Big Stone County",
            "value": 16.6
        }, {
            "fips_code": 27013,
            "state": "MN",
            "area_name": "Blue Earth County",
            "value": 12.1
        }, {
            "fips_code": 27015,
            "state": "MN",
            "area_name": "Brown County",
            "value": 10.9
        }, {
            "fips_code": 27017,
            "state": "MN",
            "area_name": "Carlton County",
            "value": 12.2
        }, {
            "fips_code": 27019,
            "state": "MN",
            "area_name": "Carver County",
            "value": 4.1
        }, {
            "fips_code": 27021,
            "state": "MN",
            "area_name": "Cass County",
            "value": 18.7
        }, {
            "fips_code": 27023,
            "state": "MN",
            "area_name": "Chippewa County",
            "value": 14.3
        }, {
            "fips_code": 27025,
            "state": "MN",
            "area_name": "Chisago County",
            "value": 7.8
        }, {
            "fips_code": 27027,
            "state": "MN",
            "area_name": "Clay County",
            "value": 13.6
        }, {
            "fips_code": 27029,
            "state": "MN",
            "area_name": "Clearwater County",
            "value": 18.6
        }, {
            "fips_code": 27031,
            "state": "MN",
            "area_name": "Cook County",
            "value": 16.9
        }, {
            "fips_code": 27033,
            "state": "MN",
            "area_name": "Cottonwood County",
            "value": 15.7
        }, {
            "fips_code": 27035,
            "state": "MN",
            "area_name": "Crow Wing County",
            "value": 13.8
        }, {
            "fips_code": 27037,
            "state": "MN",
            "area_name": "Dakota County",
            "value": 5.6
        }, {
            "fips_code": 27039,
            "state": "MN",
            "area_name": "Dodge County",
            "value": 6.9
        }, {
            "fips_code": 27041,
            "state": "MN",
            "area_name": "Douglas County",
            "value": 9.300000000000001
        }, {
            "fips_code": 27043,
            "state": "MN",
            "area_name": "Faribault County",
            "value": 16.4
        }, {
            "fips_code": 27045,
            "state": "MN",
            "area_name": "Fillmore County",
            "value": 17.8
        }, {
            "fips_code": 27047,
            "state": "MN",
            "area_name": "Freeborn County",
            "value": 14.0
        }, {
            "fips_code": 27049,
            "state": "MN",
            "area_name": "Goodhue County",
            "value": 8.699999999999999
        }, {
            "fips_code": 27051,
            "state": "MN",
            "area_name": "Grant County",
            "value": 13.2
        }, {
            "fips_code": 27053,
            "state": "MN",
            "area_name": "Hennepin County",
            "value": 10.4
        }, {
            "fips_code": 27055,
            "state": "MN",
            "area_name": "Houston County",
            "value": 8.699999999999999
        }, {
            "fips_code": 27057,
            "state": "MN",
            "area_name": "Hubbard County",
            "value": 14.7
        }, {
            "fips_code": 27059,
            "state": "MN",
            "area_name": "Isanti County",
            "value": 9.4
        }, {
            "fips_code": 27061,
            "state": "MN",
            "area_name": "Itasca County",
            "value": 14.9
        }, {
            "fips_code": 27063,
            "state": "MN",
            "area_name": "Jackson County",
            "value": 12.8
        }, {
            "fips_code": 27065,
            "state": "MN",
            "area_name": "Kanabec County",
            "value": 16.7
        }, {
            "fips_code": 27067,
            "state": "MN",
            "area_name": "Kandiyohi County",
            "value": 15.5
        }, {
            "fips_code": 27069,
            "state": "MN",
            "area_name": "Kittson County",
            "value": 12.1
        }, {
            "fips_code": 27071,
            "state": "MN",
            "area_name": "Koochiching County",
            "value": 18.9
        }, {
            "fips_code": 27073,
            "state": "MN",
            "area_name": "Lac qui Parle County",
            "value": 12.9
        }, {
            "fips_code": 27075,
            "state": "MN",
            "area_name": "Lake County",
            "value": 11.4
        }, {
            "fips_code": 27077,
            "state": "MN",
            "area_name": "Lake of the Woods County",
            "value": 14.3
        }, {
            "fips_code": 27079,
            "state": "MN",
            "area_name": "Le Sueur County",
            "value": 7.6
        }, {
            "fips_code": 27081,
            "state": "MN",
            "area_name": "Lincoln County",
            "value": 11.7
        }, {
            "fips_code": 27083,
            "state": "MN",
            "area_name": "Lyon County",
            "value": 11.7
        }, {
            "fips_code": 27085,
            "state": "MN",
            "area_name": "McLeod County",
            "value": 8.699999999999999
        }, {
            "fips_code": 27087,
            "state": "MN",
            "area_name": "Mahnomen County",
            "value": 29.7
        }, {
            "fips_code": 27089,
            "state": "MN",
            "area_name": "Marshall County",
            "value": 11.3
        }, {
            "fips_code": 27091,
            "state": "MN",
            "area_name": "Martin County",
            "value": 14.9
        }, {
            "fips_code": 27093,
            "state": "MN",
            "area_name": "Meeker County",
            "value": 9.5
        }, {
            "fips_code": 27095,
            "state": "MN",
            "area_name": "Mille Lacs County",
            "value": 15.7
        }, {
            "fips_code": 27097,
            "state": "MN",
            "area_name": "Morrison County",
            "value": 11.8
        }, {
            "fips_code": 27099,
            "state": "MN",
            "area_name": "Mower County",
            "value": 14.4
        }, {
            "fips_code": 27101,
            "state": "MN",
            "area_name": "Murray County",
            "value": 12.5
        }, {
            "fips_code": 27103,
            "state": "MN",
            "area_name": "Nicollet County",
            "value": 10.1
        }, {
            "fips_code": 27105,
            "state": "MN",
            "area_name": "Nobles County",
            "value": 13.4
        }, {
            "fips_code": 27107,
            "state": "MN",
            "area_name": "Norman County",
            "value": 17.3
        }, {
            "fips_code": 27109,
            "state": "MN",
            "area_name": "Olmsted County",
            "value": 8.5
        }, {
            "fips_code": 27111,
            "state": "MN",
            "area_name": "Otter Tail County",
            "value": 11.8
        }, {
            "fips_code": 27113,
            "state": "MN",
            "area_name": "Pennington County",
            "value": 12.4
        }, {
            "fips_code": 27115,
            "state": "MN",
            "area_name": "Pine County",
            "value": 15.0
        }, {
            "fips_code": 27117,
            "state": "MN",
            "area_name": "Pipestone County",
            "value": 14.8
        }, {
            "fips_code": 27119,
            "state": "MN",
            "area_name": "Polk County",
            "value": 15.1
        }, {
            "fips_code": 27121,
            "state": "MN",
            "area_name": "Pope County",
            "value": 10.6
        }, {
            "fips_code": 27123,
            "state": "MN",
            "area_name": "Ramsey County",
            "value": 18.0
        }, {
            "fips_code": 27125,
            "state": "MN",
            "area_name": "Red Lake County",
            "value": 10.8
        }, {
            "fips_code": 27127,
            "state": "MN",
            "area_name": "Redwood County",
            "value": 11.7
        }, {
            "fips_code": 27129,
            "state": "MN",
            "area_name": "Renville County",
            "value": 14.7
        }, {
            "fips_code": 27131,
            "state": "MN",
            "area_name": "Rice County",
            "value": 10.9
        }, {
            "fips_code": 27133,
            "state": "MN",
            "area_name": "Rock County",
            "value": 11.4
        }, {
            "fips_code": 27135,
            "state": "MN",
            "area_name": "Roseau County",
            "value": 10.9
        }, {
            "fips_code": 27137,
            "state": "MN",
            "area_name": "St. Louis County",
            "value": 13.8
        }, {
            "fips_code": 27139,
            "state": "MN",
            "area_name": "Scott County",
            "value": 5.7
        }, {
            "fips_code": 27141,
            "state": "MN",
            "area_name": "Sherburne County",
            "value": 6.7
        }, {
            "fips_code": 27143,
            "state": "MN",
            "area_name": "Sibley County",
            "value": 10.2
        }, {
            "fips_code": 27145,
            "state": "MN",
            "area_name": "Stearns County",
            "value": 15.0
        }, {
            "fips_code": 27147,
            "state": "MN",
            "area_name": "Steele County",
            "value": 12.1
        }, {
            "fips_code": 27149,
            "state": "MN",
            "area_name": "Stevens County",
            "value": 9.6
        }, {
            "fips_code": 27151,
            "state": "MN",
            "area_name": "Swift County",
            "value": 13.6
        }, {
            "fips_code": 27153,
            "state": "MN",
            "area_name": "Todd County",
            "value": 17.8
        }, {
            "fips_code": 27155,
            "state": "MN",
            "area_name": "Traverse County",
            "value": 22.3
        }, {
            "fips_code": 27157,
            "state": "MN",
            "area_name": "Wabasha County",
            "value": 8.4
        }, {
            "fips_code": 27159,
            "state": "MN",
            "area_name": "Wadena County",
            "value": 16.7
        }, {
            "fips_code": 27161,
            "state": "MN",
            "area_name": "Waseca County",
            "value": 11.0
        }, {
            "fips_code": 27163,
            "state": "MN",
            "area_name": "Washington County",
            "value": 5.4
        }, {
            "fips_code": 27165,
            "state": "MN",
            "area_name": "Watonwan County",
            "value": 15.2
        }, {
            "fips_code": 27167,
            "state": "MN",
            "area_name": "Wilkin County",
            "value": 12.5
        }, {
            "fips_code": 27169,
            "state": "MN",
            "area_name": "Winona County",
            "value": 11.0
        }, {
            "fips_code": 27171,
            "state": "MN",
            "area_name": "Wright County",
            "value": 4.9
        }, {
            "fips_code": 27173,
            "state": "MN",
            "area_name": "Yellow Medicine County",
            "value": 14.5
        }, {
            "fips_code": 28000,
            "state": "MS",
            "area_name": "Mississippi",
            "value": 27.1
        }, {
            "fips_code": 28001,
            "state": "MS",
            "area_name": "Adams County",
            "value": 36.6
        }, {
            "fips_code": 28003,
            "state": "MS",
            "area_name": "Alcorn County",
            "value": 23.5
        }, {
            "fips_code": 28005,
            "state": "MS",
            "area_name": "Amite County",
            "value": 30.4
        }, {
            "fips_code": 28007,
            "state": "MS",
            "area_name": "Attala County",
            "value": 32.0
        }, {
            "fips_code": 28009,
            "state": "MS",
            "area_name": "Benton County",
            "value": 30.5
        }, {
            "fips_code": 28011,
            "state": "MS",
            "area_name": "Bolivar County",
            "value": 46.6
        }, {
            "fips_code": 28013,
            "state": "MS",
            "area_name": "Calhoun County",
            "value": 32.1
        }, {
            "fips_code": 28015,
            "state": "MS",
            "area_name": "Carroll County",
            "value": 23.3
        }, {
            "fips_code": 28017,
            "state": "MS",
            "area_name": "Chickasaw County",
            "value": 28.7
        }, {
            "fips_code": 28019,
            "state": "MS",
            "area_name": "Choctaw County",
            "value": 30.9
        }, {
            "fips_code": 28021,
            "state": "MS",
            "area_name": "Claiborne County",
            "value": 39.9
        }, {
            "fips_code": 28023,
            "state": "MS",
            "area_name": "Clarke County",
            "value": 29.1
        }, {
            "fips_code": 28025,
            "state": "MS",
            "area_name": "Clay County",
            "value": 33.5
        }, {
            "fips_code": 28027,
            "state": "MS",
            "area_name": "Coahoma County",
            "value": 54.1
        }, {
            "fips_code": 28029,
            "state": "MS",
            "area_name": "Copiah County",
            "value": 27.9
        }, {
            "fips_code": 28031,
            "state": "MS",
            "area_name": "Covington County",
            "value": 30.6
        }, {
            "fips_code": 28033,
            "state": "MS",
            "area_name": "DeSoto County",
            "value": 14.1
        }, {
            "fips_code": 28035,
            "state": "MS",
            "area_name": "Forrest County",
            "value": 27.6
        }, {
            "fips_code": 28037,
            "state": "MS",
            "area_name": "Franklin County",
            "value": 32.0
        }, {
            "fips_code": 28039,
            "state": "MS",
            "area_name": "George County",
            "value": 22.1
        }, {
            "fips_code": 28041,
            "state": "MS",
            "area_name": "Greene County",
            "value": 24.8
        }, {
            "fips_code": 28043,
            "state": "MS",
            "area_name": "Grenada County",
            "value": 36.0
        }, {
            "fips_code": 28045,
            "state": "MS",
            "area_name": "Hancock County",
            "value": 24.1
        }, {
            "fips_code": 28047,
            "state": "MS",
            "area_name": "Harrison County",
            "value": 27.9
        }, {
            "fips_code": 28049,
            "state": "MS",
            "area_name": "Hinds County",
            "value": 34.0
        }, {
            "fips_code": 28051,
            "state": "MS",
            "area_name": "Holmes County",
            "value": 48.3
        }, {
            "fips_code": 28053,
            "state": "MS",
            "area_name": "Humphreys County",
            "value": 47.6
        }, {
            "fips_code": 28055,
            "state": "MS",
            "area_name": "Issaquena County",
            "value": 58.4
        }, {
            "fips_code": 28057,
            "state": "MS",
            "area_name": "Itawamba County",
            "value": 18.1
        }, {
            "fips_code": 28059,
            "state": "MS",
            "area_name": "Jackson County",
            "value": 19.6
        }, {
            "fips_code": 28061,
            "state": "MS",
            "area_name": "Jasper County",
            "value": 27.5
        }, {
            "fips_code": 28063,
            "state": "MS",
            "area_name": "Jefferson County",
            "value": 43.9
        }, {
            "fips_code": 28065,
            "state": "MS",
            "area_name": "Jefferson Davis County",
            "value": 39.9
        }, {
            "fips_code": 28067,
            "state": "MS",
            "area_name": "Jones County",
            "value": 25.6
        }, {
            "fips_code": 28069,
            "state": "MS",
            "area_name": "Kemper County",
            "value": 38.0
        }, {
            "fips_code": 28071,
            "state": "MS",
            "area_name": "Lafayette County",
            "value": 16.0
        }, {
            "fips_code": 28073,
            "state": "MS",
            "area_name": "Lamar County",
            "value": 17.6
        }, {
            "fips_code": 28075,
            "state": "MS",
            "area_name": "Lauderdale County",
            "value": 31.1
        }, {
            "fips_code": 28077,
            "state": "MS",
            "area_name": "Lawrence County",
            "value": 27.2
        }, {
            "fips_code": 28079,
            "state": "MS",
            "area_name": "Leake County",
            "value": 37.1
        }, {
            "fips_code": 28081,
            "state": "MS",
            "area_name": "Lee County",
            "value": 21.5
        }, {
            "fips_code": 28083,
            "state": "MS",
            "area_name": "Leflore County",
            "value": 47.9
        }, {
            "fips_code": 28085,
            "state": "MS",
            "area_name": "Lincoln County",
            "value": 25.5
        }, {
            "fips_code": 28087,
            "state": "MS",
            "area_name": "Lowndes County",
            "value": 27.4
        }, {
            "fips_code": 28089,
            "state": "MS",
            "area_name": "Madison County",
            "value": 16.2
        }, {
            "fips_code": 28091,
            "state": "MS",
            "area_name": "Marion County",
            "value": 31.2
        }, {
            "fips_code": 28093,
            "state": "MS",
            "area_name": "Marshall County",
            "value": 29.4
        }, {
            "fips_code": 28095,
            "state": "MS",
            "area_name": "Monroe County",
            "value": 22.6
        }, {
            "fips_code": 28097,
            "state": "MS",
            "area_name": "Montgomery County",
            "value": 32.7
        }, {
            "fips_code": 28099,
            "state": "MS",
            "area_name": "Neshoba County",
            "value": 31.1
        }, {
            "fips_code": 28101,
            "state": "MS",
            "area_name": "Newton County",
            "value": 27.8
        }, {
            "fips_code": 28103,
            "state": "MS",
            "area_name": "Noxubee County",
            "value": 40.5
        }, {
            "fips_code": 28105,
            "state": "MS",
            "area_name": "Oktibbeha County",
            "value": 24.5
        }, {
            "fips_code": 28107,
            "state": "MS",
            "area_name": "Panola County",
            "value": 34.1
        }, {
            "fips_code": 28109,
            "state": "MS",
            "area_name": "Pearl River County",
            "value": 22.0
        }, {
            "fips_code": 28111,
            "state": "MS",
            "area_name": "Perry County",
            "value": 29.4
        }, {
            "fips_code": 28113,
            "state": "MS",
            "area_name": "Pike County",
            "value": 39.4
        }, {
            "fips_code": 28115,
            "state": "MS",
            "area_name": "Pontotoc County",
            "value": 22.7
        }, {
            "fips_code": 28117,
            "state": "MS",
            "area_name": "Prentiss County",
            "value": 22.0
        }, {
            "fips_code": 28119,
            "state": "MS",
            "area_name": "Quitman County",
            "value": 49.7
        }, {
            "fips_code": 28121,
            "state": "MS",
            "area_name": "Rankin County",
            "value": 14.3
        }, {
            "fips_code": 28123,
            "state": "MS",
            "area_name": "Scott County",
            "value": 28.0
        }, {
            "fips_code": 28125,
            "state": "MS",
            "area_name": "Sharkey County",
            "value": 53.1
        }, {
            "fips_code": 28127,
            "state": "MS",
            "area_name": "Simpson County",
            "value": 31.6
        }, {
            "fips_code": 28129,
            "state": "MS",
            "area_name": "Smith County",
            "value": 24.1
        }, {
            "fips_code": 28131,
            "state": "MS",
            "area_name": "Stone County",
            "value": 24.9
        }, {
            "fips_code": 28133,
            "state": "MS",
            "area_name": "Sunflower County",
            "value": 58.5
        }, {
            "fips_code": 28135,
            "state": "MS",
            "area_name": "Tallahatchie County",
            "value": 42.8
        }, {
            "fips_code": 28137,
            "state": "MS",
            "area_name": "Tate County",
            "value": 20.6
        }, {
            "fips_code": 28139,
            "state": "MS",
            "area_name": "Tippah County",
            "value": 28.1
        }, {
            "fips_code": 28141,
            "state": "MS",
            "area_name": "Tishomingo County",
            "value": 20.3
        }, {
            "fips_code": 28143,
            "state": "MS",
            "area_name": "Tunica County",
            "value": 42.0
        }, {
            "fips_code": 28145,
            "state": "MS",
            "area_name": "Union County",
            "value": 21.1
        }, {
            "fips_code": 28147,
            "state": "MS",
            "area_name": "Walthall County",
            "value": 35.0
        }, {
            "fips_code": 28149,
            "state": "MS",
            "area_name": "Warren County",
            "value": 34.8
        }, {
            "fips_code": 28151,
            "state": "MS",
            "area_name": "Washington County",
            "value": 40.2
        }, {
            "fips_code": 28153,
            "state": "MS",
            "area_name": "Wayne County",
            "value": 33.0
        }, {
            "fips_code": 28155,
            "state": "MS",
            "area_name": "Webster County",
            "value": 24.7
        }, {
            "fips_code": 28157,
            "state": "MS",
            "area_name": "Wilkinson County",
            "value": 39.5
        }, {
            "fips_code": 28159,
            "state": "MS",
            "area_name": "Winston County",
            "value": 32.9
        }, {
            "fips_code": 28161,
            "state": "MS",
            "area_name": "Yalobusha County",
            "value": 34.7
        }, {
            "fips_code": 28163,
            "state": "MS",
            "area_name": "Yazoo County",
            "value": 38.9
        }, {
            "fips_code": 29000,
            "state": "MO",
            "area_name": "Missouri",
            "value": 16.5
        }, {
            "fips_code": 29001,
            "state": "MO",
            "area_name": "Adair County",
            "value": 20.1
        }, {
            "fips_code": 29003,
            "state": "MO",
            "area_name": "Andrew County",
            "value": 10.7
        }, {
            "fips_code": 29005,
            "state": "MO",
            "area_name": "Atchison County",
            "value": 17.6
        }, {
            "fips_code": 29007,
            "state": "MO",
            "area_name": "Audrain County",
            "value": 23.1
        }, {
            "fips_code": 29009,
            "state": "MO",
            "area_name": "Barry County",
            "value": 29.3
        }, {
            "fips_code": 29011,
            "state": "MO",
            "area_name": "Barton County",
            "value": 20.8
        }, {
            "fips_code": 29013,
            "state": "MO",
            "area_name": "Bates County",
            "value": 18.8
        }, {
            "fips_code": 29015,
            "state": "MO",
            "area_name": "Benton County",
            "value": 26.9
        }, {
            "fips_code": 29017,
            "state": "MO",
            "area_name": "Bollinger County",
            "value": 22.5
        }, {
            "fips_code": 29019,
            "state": "MO",
            "area_name": "Boone County",
            "value": 13.5
        }, {
            "fips_code": 29021,
            "state": "MO",
            "area_name": "Buchanan County",
            "value": 22.8
        }, {
            "fips_code": 29023,
            "state": "MO",
            "area_name": "Butler County",
            "value": 28.5
        }, {
            "fips_code": 29025,
            "state": "MO",
            "area_name": "Caldwell County",
            "value": 17.6
        }, {
            "fips_code": 29027,
            "state": "MO",
            "area_name": "Callaway County",
            "value": 14.3
        }, {
            "fips_code": 29029,
            "state": "MO",
            "area_name": "Camden County",
            "value": 20.6
        }, {
            "fips_code": 29031,
            "state": "MO",
            "area_name": "Cape Girardeau County",
            "value": 13.5
        }, {
            "fips_code": 29033,
            "state": "MO",
            "area_name": "Carroll County",
            "value": 19.3
        }, {
            "fips_code": 29035,
            "state": "MO",
            "area_name": "Carter County",
            "value": 32.3
        }, {
            "fips_code": 29037,
            "state": "MO",
            "area_name": "Cass County",
            "value": 9.6
        }, {
            "fips_code": 29039,
            "state": "MO",
            "area_name": "Cedar County",
            "value": 27.0
        }, {
            "fips_code": 29041,
            "state": "MO",
            "area_name": "Chariton County",
            "value": 15.1
        }, {
            "fips_code": 29043,
            "state": "MO",
            "area_name": "Christian County",
            "value": 10.1
        }, {
            "fips_code": 29045,
            "state": "MO",
            "area_name": "Clark County",
            "value": 21.4
        }, {
            "fips_code": 29047,
            "state": "MO",
            "area_name": "Clay County",
            "value": 10.2
        }, {
            "fips_code": 29049,
            "state": "MO",
            "area_name": "Clinton County",
            "value": 13.1
        }, {
            "fips_code": 29051,
            "state": "MO",
            "area_name": "Cole County",
            "value": 14.7
        }, {
            "fips_code": 29053,
            "state": "MO",
            "area_name": "Cooper County",
            "value": 16.7
        }, {
            "fips_code": 29055,
            "state": "MO",
            "area_name": "Crawford County",
            "value": 22.8
        }, {
            "fips_code": 29057,
            "state": "MO",
            "area_name": "Dade County",
            "value": 22.6
        }, {
            "fips_code": 29059,
            "state": "MO",
            "area_name": "Dallas County",
            "value": 24.7
        }, {
            "fips_code": 29061,
            "state": "MO",
            "area_name": "Daviess County",
            "value": 21.2
        }, {
            "fips_code": 29063,
            "state": "MO",
            "area_name": "DeKalb County",
            "value": 13.5
        }, {
            "fips_code": 29065,
            "state": "MO",
            "area_name": "Dent County",
            "value": 24.6
        }, {
            "fips_code": 29067,
            "state": "MO",
            "area_name": "Douglas County",
            "value": 28.7
        }, {
            "fips_code": 29069,
            "state": "MO",
            "area_name": "Dunklin County",
            "value": 32.0
        }, {
            "fips_code": 29071,
            "state": "MO",
            "area_name": "Franklin County",
            "value": 12.1
        }, {
            "fips_code": 29073,
            "state": "MO",
            "area_name": "Gasconade County",
            "value": 16.1
        }, {
            "fips_code": 29075,
            "state": "MO",
            "area_name": "Gentry County",
            "value": 19.8
        }, {
            "fips_code": 29077,
            "state": "MO",
            "area_name": "Greene County",
            "value": 14.8
        }, {
            "fips_code": 29079,
            "state": "MO",
            "area_name": "Grundy County",
            "value": 24.4
        }, {
            "fips_code": 29081,
            "state": "MO",
            "area_name": "Harrison County",
            "value": 23.8
        }, {
            "fips_code": 29083,
            "state": "MO",
            "area_name": "Henry County",
            "value": 19.9
        }, {
            "fips_code": 29085,
            "state": "MO",
            "area_name": "Hickory County",
            "value": 30.1
        }, {
            "fips_code": 29087,
            "state": "MO",
            "area_name": "Holt County",
            "value": 19.9
        }, {
            "fips_code": 29089,
            "state": "MO",
            "area_name": "Howard County",
            "value": 15.7
        }, {
            "fips_code": 29091,
            "state": "MO",
            "area_name": "Howell County",
            "value": 25.0
        }, {
            "fips_code": 29093,
            "state": "MO",
            "area_name": "Iron County",
            "value": 28.1
        }, {
            "fips_code": 29095,
            "state": "MO",
            "area_name": "Jackson County",
            "value": 17.3
        }, {
            "fips_code": 29097,
            "state": "MO",
            "area_name": "Jasper County",
            "value": 19.3
        }, {
            "fips_code": 29099,
            "state": "MO",
            "area_name": "Jefferson County",
            "value": 11.0
        }, {
            "fips_code": 29101,
            "state": "MO",
            "area_name": "Johnson County",
            "value": 13.3
        }, {
            "fips_code": 29103,
            "state": "MO",
            "area_name": "Knox County",
            "value": 28.8
        }, {
            "fips_code": 29105,
            "state": "MO",
            "area_name": "Laclede County",
            "value": 21.7
        }, {
            "fips_code": 29107,
            "state": "MO",
            "area_name": "Lafayette County",
            "value": 14.9
        }, {
            "fips_code": 29109,
            "state": "MO",
            "area_name": "Lawrence County",
            "value": 20.0
        }, {
            "fips_code": 29111,
            "state": "MO",
            "area_name": "Lewis County",
            "value": 18.7
        }, {
            "fips_code": 29113,
            "state": "MO",
            "area_name": "Lincoln County",
            "value": 12.1
        }, {
            "fips_code": 29115,
            "state": "MO",
            "area_name": "Linn County",
            "value": 21.6
        }, {
            "fips_code": 29117,
            "state": "MO",
            "area_name": "Livingston County",
            "value": 17.7
        }, {
            "fips_code": 29119,
            "state": "MO",
            "area_name": "McDonald County",
            "value": 25.5
        }, {
            "fips_code": 29121,
            "state": "MO",
            "area_name": "Macon County",
            "value": 20.5
        }, {
            "fips_code": 29123,
            "state": "MO",
            "area_name": "Madison County",
            "value": 21.4
        }, {
            "fips_code": 29125,
            "state": "MO",
            "area_name": "Maries County",
            "value": 16.9
        }, {
            "fips_code": 29127,
            "state": "MO",
            "area_name": "Marion County",
            "value": 17.5
        }, {
            "fips_code": 29129,
            "state": "MO",
            "area_name": "Mercer County",
            "value": 19.1
        }, {
            "fips_code": 29131,
            "state": "MO",
            "area_name": "Miller County",
            "value": 19.9
        }, {
            "fips_code": 29133,
            "state": "MO",
            "area_name": "Mississippi County",
            "value": 29.3
        }, {
            "fips_code": 29135,
            "state": "MO",
            "area_name": "Moniteau County",
            "value": 15.1
        }, {
            "fips_code": 29137,
            "state": "MO",
            "area_name": "Monroe County",
            "value": 20.6
        }, {
            "fips_code": 29139,
            "state": "MO",
            "area_name": "Montgomery County",
            "value": 19.2
        }, {
            "fips_code": 29141,
            "state": "MO",
            "area_name": "Morgan County",
            "value": 25.0
        }, {
            "fips_code": 29143,
            "state": "MO",
            "area_name": "New Madrid County",
            "value": 29.5
        }, {
            "fips_code": 29145,
            "state": "MO",
            "area_name": "Newton County",
            "value": 21.5
        }, {
            "fips_code": 29147,
            "state": "MO",
            "area_name": "Nodaway County",
            "value": 12.1
        }, {
            "fips_code": 29149,
            "state": "MO",
            "area_name": "Oregon County",
            "value": 31.7
        }, {
            "fips_code": 29151,
            "state": "MO",
            "area_name": "Osage County",
            "value": 9.9
        }, {
            "fips_code": 29153,
            "state": "MO",
            "area_name": "Ozark County",
            "value": 33.5
        }, {
            "fips_code": 29155,
            "state": "MO",
            "area_name": "Pemiscot County",
            "value": 35.5
        }, {
            "fips_code": 29157,
            "state": "MO",
            "area_name": "Perry County",
            "value": 13.4
        }, {
            "fips_code": 29159,
            "state": "MO",
            "area_name": "Pettis County",
            "value": 20.8
        }, {
            "fips_code": 29161,
            "state": "MO",
            "area_name": "Phelps County",
            "value": 21.8
        }, {
            "fips_code": 29163,
            "state": "MO",
            "area_name": "Pike County",
            "value": 21.6
        }, {
            "fips_code": 29165,
            "state": "MO",
            "area_name": "Platte County",
            "value": 8.1
        }, {
            "fips_code": 29167,
            "state": "MO",
            "area_name": "Polk County",
            "value": 19.9
        }, {
            "fips_code": 29169,
            "state": "MO",
            "area_name": "Pulaski County",
            "value": 14.2
        }, {
            "fips_code": 29171,
            "state": "MO",
            "area_name": "Putnam County",
            "value": 20.9
        }, {
            "fips_code": 29173,
            "state": "MO",
            "area_name": "Ralls County",
            "value": 13.1
        }, {
            "fips_code": 29175,
            "state": "MO",
            "area_name": "Randolph County",
            "value": 20.0
        }, {
            "fips_code": 29177,
            "state": "MO",
            "area_name": "Ray County",
            "value": 14.4
        }, {
            "fips_code": 29179,
            "state": "MO",
            "area_name": "Reynolds County",
            "value": 31.5
        }, {
            "fips_code": 29181,
            "state": "MO",
            "area_name": "Ripley County",
            "value": 33.0
        }, {
            "fips_code": 29183,
            "state": "MO",
            "area_name": "St. Charles County",
            "value": 6.0
        }, {
            "fips_code": 29185,
            "state": "MO",
            "area_name": "St. Clair County",
            "value": 28.9
        }, {
            "fips_code": 29186,
            "state": "MO",
            "area_name": "Ste. Genevieve County",
            "value": 14.3
        }, {
            "fips_code": 29187,
            "state": "MO",
            "area_name": "St. Francois County",
            "value": 23.0
        }, {
            "fips_code": 29189,
            "state": "MO",
            "area_name": "St. Louis County",
            "value": 13.2
        }, {
            "fips_code": 29195,
            "state": "MO",
            "area_name": "Saline County",
            "value": 18.1
        }, {
            "fips_code": 29197,
            "state": "MO",
            "area_name": "Schuyler County",
            "value": 22.0
        }, {
            "fips_code": 29199,
            "state": "MO",
            "area_name": "Scotland County",
            "value": 20.5
        }, {
            "fips_code": 29201,
            "state": "MO",
            "area_name": "Scott County",
            "value": 23.1
        }, {
            "fips_code": 29203,
            "state": "MO",
            "area_name": "Shannon County",
            "value": 32.5
        }, {
            "fips_code": 29205,
            "state": "MO",
            "area_name": "Shelby County",
            "value": 21.1
        }, {
            "fips_code": 29207,
            "state": "MO",
            "area_name": "Stoddard County",
            "value": 21.7
        }, {
            "fips_code": 29209,
            "state": "MO",
            "area_name": "Stone County",
            "value": 24.2
        }, {
            "fips_code": 29211,
            "state": "MO",
            "area_name": "Sullivan County",
            "value": 20.0
        }, {
            "fips_code": 29213,
            "state": "MO",
            "area_name": "Taney County",
            "value": 22.4
        }, {
            "fips_code": 29215,
            "state": "MO",
            "area_name": "Texas County",
            "value": 31.6
        }, {
            "fips_code": 29217,
            "state": "MO",
            "area_name": "Vernon County",
            "value": 26.5
        }, {
            "fips_code": 29219,
            "state": "MO",
            "area_name": "Warren County",
            "value": 12.3
        }, {
            "fips_code": 29221,
            "state": "MO",
            "area_name": "Washington County",
            "value": 26.5
        }, {
            "fips_code": 29223,
            "state": "MO",
            "area_name": "Wayne County",
            "value": 30.9
        }, {
            "fips_code": 29225,
            "state": "MO",
            "area_name": "Webster County",
            "value": 23.9
        }, {
            "fips_code": 29227,
            "state": "MO",
            "area_name": "Worth County",
            "value": 20.3
        }, {
            "fips_code": 29229,
            "state": "MO",
            "area_name": "Wright County",
            "value": 28.1
        }, {
            "fips_code": 29510,
            "state": "MO",
            "area_name": "St. Louis city",
            "value": 33.0
        }, {
            "fips_code": 30000,
            "state": "MT",
            "area_name": "Montana",
            "value": 14.9
        }, {
            "fips_code": 30001,
            "state": "MT",
            "area_name": "Beaverhead County",
            "value": 14.9
        }, {
            "fips_code": 30003,
            "state": "MT",
            "area_name": "Big Horn County",
            "value": 32.9
        }, {
            "fips_code": 30005,
            "state": "MT",
            "area_name": "Blaine County",
            "value": 24.0
        }, {
            "fips_code": 30007,
            "state": "MT",
            "area_name": "Broadwater County",
            "value": 12.6
        }, {
            "fips_code": 30009,
            "state": "MT",
            "area_name": "Carbon County",
            "value": 13.8
        }, {
            "fips_code": 30011,
            "state": "MT",
            "area_name": "Carter County",
            "value": 15.9
        }, {
            "fips_code": 30013,
            "state": "MT",
            "area_name": "Cascade County",
            "value": 16.1
        }, {
            "fips_code": 30015,
            "state": "MT",
            "area_name": "Chouteau County",
            "value": 19.7
        }, {
            "fips_code": 30017,
            "state": "MT",
            "area_name": "Custer County",
            "value": 14.2
        }, {
            "fips_code": 30019,
            "state": "MT",
            "area_name": "Daniels County",
            "value": 13.0
        }, {
            "fips_code": 30021,
            "state": "MT",
            "area_name": "Dawson County",
            "value": 14.9
        }, {
            "fips_code": 30023,
            "state": "MT",
            "area_name": "Deer Lodge County",
            "value": 18.5
        }, {
            "fips_code": 30025,
            "state": "MT",
            "area_name": "Fallon County",
            "value": 11.4
        }, {
            "fips_code": 30027,
            "state": "MT",
            "area_name": "Fergus County",
            "value": 15.4
        }, {
            "fips_code": 30029,
            "state": "MT",
            "area_name": "Flathead County",
            "value": 11.6
        }, {
            "fips_code": 30031,
            "state": "MT",
            "area_name": "Gallatin County",
            "value": 6.8
        }, {
            "fips_code": 30033,
            "state": "MT",
            "area_name": "Garfield County",
            "value": 19.8
        }, {
            "fips_code": 30035,
            "state": "MT",
            "area_name": "Glacier County",
            "value": 29.6
        }, {
            "fips_code": 30037,
            "state": "MT",
            "area_name": "Golden Valley County",
            "value": 27.5
        }, {
            "fips_code": 30039,
            "state": "MT",
            "area_name": "Granite County",
            "value": 16.1
        }, {
            "fips_code": 30041,
            "state": "MT",
            "area_name": "Hill County",
            "value": 21.6
        }, {
            "fips_code": 30043,
            "state": "MT",
            "area_name": "Jefferson County",
            "value": 9.300000000000001
        }, {
            "fips_code": 30045,
            "state": "MT",
            "area_name": "Judith Basin County",
            "value": 23.2
        }, {
            "fips_code": 30047,
            "state": "MT",
            "area_name": "Lake County",
            "value": 20.6
        }, {
            "fips_code": 30049,
            "state": "MT",
            "area_name": "Lewis and Clark County",
            "value": 11.2
        }, {
            "fips_code": 30051,
            "state": "MT",
            "area_name": "Liberty County",
            "value": 21.7
        }, {
            "fips_code": 30053,
            "state": "MT",
            "area_name": "Lincoln County",
            "value": 27.5
        }, {
            "fips_code": 30055,
            "state": "MT",
            "area_name": "McCone County",
            "value": 20.2
        }, {
            "fips_code": 30057,
            "state": "MT",
            "area_name": "Madison County",
            "value": 13.5
        }, {
            "fips_code": 30059,
            "state": "MT",
            "area_name": "Meagher County",
            "value": 23.5
        }, {
            "fips_code": 30061,
            "state": "MT",
            "area_name": "Mineral County",
            "value": 22.9
        }, {
            "fips_code": 30063,
            "state": "MT",
            "area_name": "Missoula County",
            "value": 13.2
        }, {
            "fips_code": 30065,
            "state": "MT",
            "area_name": "Musselshell County",
            "value": 24.4
        }, {
            "fips_code": 30067,
            "state": "MT",
            "area_name": "Park County",
            "value": 12.6
        }, {
            "fips_code": 30069,
            "state": "MT",
            "area_name": "Petroleum County",
            "value": 23.3
        }, {
            "fips_code": 30071,
            "state": "MT",
            "area_name": "Phillips County",
            "value": 21.8
        }, {
            "fips_code": 30073,
            "state": "MT",
            "area_name": "Pondera County",
            "value": 22.9
        }, {
            "fips_code": 30075,
            "state": "MT",
            "area_name": "Powder River County",
            "value": 15.5
        }, {
            "fips_code": 30077,
            "state": "MT",
            "area_name": "Powell County",
            "value": 17.9
        }, {
            "fips_code": 30079,
            "state": "MT",
            "area_name": "Prairie County",
            "value": 17.8
        }, {
            "fips_code": 30081,
            "state": "MT",
            "area_name": "Ravalli County",
            "value": 14.7
        }, {
            "fips_code": 30083,
            "state": "MT",
            "area_name": "Richland County",
            "value": 11.8
        }, {
            "fips_code": 30085,
            "state": "MT",
            "area_name": "Roosevelt County",
            "value": 31.4
        }, {
            "fips_code": 30087,
            "state": "MT",
            "area_name": "Rosebud County",
            "value": 24.2
        }, {
            "fips_code": 30089,
            "state": "MT",
            "area_name": "Sanders County",
            "value": 24.6
        }, {
            "fips_code": 30091,
            "state": "MT",
            "area_name": "Sheridan County",
            "value": 14.8
        }, {
            "fips_code": 30093,
            "state": "MT",
            "area_name": "Silver Bow County",
            "value": 16.8
        }, {
            "fips_code": 30095,
            "state": "MT",
            "area_name": "Stillwater County",
            "value": 10.0
        }, {
            "fips_code": 30097,
            "state": "MT",
            "area_name": "Sweet Grass County",
            "value": 13.0
        }, {
            "fips_code": 30099,
            "state": "MT",
            "area_name": "Teton County",
            "value": 16.9
        }, {
            "fips_code": 30101,
            "state": "MT",
            "area_name": "Toole County",
            "value": 19.3
        }, {
            "fips_code": 30103,
            "state": "MT",
            "area_name": "Treasure County",
            "value": 19.9
        }, {
            "fips_code": 30105,
            "state": "MT",
            "area_name": "Valley County",
            "value": 15.2
        }, {
            "fips_code": 30107,
            "state": "MT",
            "area_name": "Wheatland County",
            "value": 24.6
        }, {
            "fips_code": 30109,
            "state": "MT",
            "area_name": "Wibaux County",
            "value": 13.4
        }, {
            "fips_code": 30111,
            "state": "MT",
            "area_name": "Yellowstone County",
            "value": 13.0
        }, {
            "fips_code": 31000,
            "state": "NE",
            "area_name": "Nebraska",
            "value": 12.1
        }, {
            "fips_code": 31001,
            "state": "NE",
            "area_name": "Adams County",
            "value": 12.0
        }, {
            "fips_code": 31003,
            "state": "NE",
            "area_name": "Antelope County",
            "value": 13.6
        }, {
            "fips_code": 31005,
            "state": "NE",
            "area_name": "Arthur County",
            "value": 18.9
        }, {
            "fips_code": 31007,
            "state": "NE",
            "area_name": "Banner County",
            "value": 17.6
        }, {
            "fips_code": 31009,
            "state": "NE",
            "area_name": "Blaine County",
            "value": 20.6
        }, {
            "fips_code": 31011,
            "state": "NE",
            "area_name": "Boone County",
            "value": 12.2
        }, {
            "fips_code": 31013,
            "state": "NE",
            "area_name": "Box Butte County",
            "value": 13.8
        }, {
            "fips_code": 31015,
            "state": "NE",
            "area_name": "Boyd County",
            "value": 22.8
        }, {
            "fips_code": 31017,
            "state": "NE",
            "area_name": "Brown County",
            "value": 16.5
        }, {
            "fips_code": 31019,
            "state": "NE",
            "area_name": "Buffalo County",
            "value": 11.1
        }, {
            "fips_code": 31021,
            "state": "NE",
            "area_name": "Burt County",
            "value": 12.0
        }, {
            "fips_code": 31023,
            "state": "NE",
            "area_name": "Butler County",
            "value": 9.699999999999999
        }, {
            "fips_code": 31025,
            "state": "NE",
            "area_name": "Cass County",
            "value": 7.1
        }, {
            "fips_code": 31027,
            "state": "NE",
            "area_name": "Cedar County",
            "value": 8.9
        }, {
            "fips_code": 31029,
            "state": "NE",
            "area_name": "Chase County",
            "value": 10.4
        }, {
            "fips_code": 31031,
            "state": "NE",
            "area_name": "Cherry County",
            "value": 14.5
        }, {
            "fips_code": 31033,
            "state": "NE",
            "area_name": "Cheyenne County",
            "value": 16.3
        }, {
            "fips_code": 31035,
            "state": "NE",
            "area_name": "Clay County",
            "value": 11.8
        }, {
            "fips_code": 31037,
            "state": "NE",
            "area_name": "Colfax County",
            "value": 11.4
        }, {
            "fips_code": 31039,
            "state": "NE",
            "area_name": "Cuming County",
            "value": 9.800000000000001
        }, {
            "fips_code": 31041,
            "state": "NE",
            "area_name": "Custer County",
            "value": 14.2
        }, {
            "fips_code": 31043,
            "state": "NE",
            "area_name": "Dakota County",
            "value": 14.7
        }, {
            "fips_code": 31045,
            "state": "NE",
            "area_name": "Dawes County",
            "value": 17.4
        }, {
            "fips_code": 31047,
            "state": "NE",
            "area_name": "Dawson County",
            "value": 12.7
        }, {
            "fips_code": 31049,
            "state": "NE",
            "area_name": "Deuel County",
            "value": 17.5
        }, {
            "fips_code": 31051,
            "state": "NE",
            "area_name": "Dixon County",
            "value": 10.0
        }, {
            "fips_code": 31053,
            "state": "NE",
            "area_name": "Dodge County",
            "value": 12.1
        }, {
            "fips_code": 31055,
            "state": "NE",
            "area_name": "Douglas County",
            "value": 13.6
        }, {
            "fips_code": 31057,
            "state": "NE",
            "area_name": "Dundy County",
            "value": 20.4
        }, {
            "fips_code": 31059,
            "state": "NE",
            "area_name": "Fillmore County",
            "value": 11.8
        }, {
            "fips_code": 31061,
            "state": "NE",
            "area_name": "Franklin County",
            "value": 18.9
        }, {
            "fips_code": 31063,
            "state": "NE",
            "area_name": "Frontier County",
            "value": 15.0
        }, {
            "fips_code": 31065,
            "state": "NE",
            "area_name": "Furnas County",
            "value": 16.1
        }, {
            "fips_code": 31067,
            "state": "NE",
            "area_name": "Gage County",
            "value": 13.8
        }, {
            "fips_code": 31069,
            "state": "NE",
            "area_name": "Garden County",
            "value": 25.2
        }, {
            "fips_code": 31071,
            "state": "NE",
            "area_name": "Garfield County",
            "value": 16.5
        }, {
            "fips_code": 31073,
            "state": "NE",
            "area_name": "Gosper County",
            "value": 13.8
        }, {
            "fips_code": 31075,
            "state": "NE",
            "area_name": "Grant County",
            "value": 16.4
        }, {
            "fips_code": 31077,
            "state": "NE",
            "area_name": "Greeley County",
            "value": 16.4
        }, {
            "fips_code": 31079,
            "state": "NE",
            "area_name": "Hall County",
            "value": 15.1
        }, {
            "fips_code": 31081,
            "state": "NE",
            "area_name": "Hamilton County",
            "value": 7.8
        }, {
            "fips_code": 31083,
            "state": "NE",
            "area_name": "Harlan County",
            "value": 13.2
        }, {
            "fips_code": 31085,
            "state": "NE",
            "area_name": "Hayes County",
            "value": 21.4
        }, {
            "fips_code": 31087,
            "state": "NE",
            "area_name": "Hitchcock County",
            "value": 18.0
        }, {
            "fips_code": 31089,
            "state": "NE",
            "area_name": "Holt County",
            "value": 12.8
        }, {
            "fips_code": 31091,
            "state": "NE",
            "area_name": "Hooker County",
            "value": 6.7
        }, {
            "fips_code": 31093,
            "state": "NE",
            "area_name": "Howard County",
            "value": 11.0
        }, {
            "fips_code": 31095,
            "state": "NE",
            "area_name": "Jefferson County",
            "value": 12.1
        }, {
            "fips_code": 31097,
            "state": "NE",
            "area_name": "Johnson County",
            "value": 13.9
        }, {
            "fips_code": 31099,
            "state": "NE",
            "area_name": "Kearney County",
            "value": 9.1
        }, {
            "fips_code": 31101,
            "state": "NE",
            "area_name": "Keith County",
            "value": 18.2
        }, {
            "fips_code": 31103,
            "state": "NE",
            "area_name": "Keya Paha County",
            "value": 30.1
        }, {
            "fips_code": 31105,
            "state": "NE",
            "area_name": "Kimball County",
            "value": 15.8
        }, {
            "fips_code": 31107,
            "state": "NE",
            "area_name": "Knox County",
            "value": 16.5
        }, {
            "fips_code": 31109,
            "state": "NE",
            "area_name": "Lancaster County",
            "value": 11.8
        }, {
            "fips_code": 31111,
            "state": "NE",
            "area_name": "Lincoln County",
            "value": 14.8
        }, {
            "fips_code": 31113,
            "state": "NE",
            "area_name": "Logan County",
            "value": 13.2
        }, {
            "fips_code": 31115,
            "state": "NE",
            "area_name": "Loup County",
            "value": 29.1
        }, {
            "fips_code": 31117,
            "state": "NE",
            "area_name": "McPherson County",
            "value": 19.4
        }, {
            "fips_code": 31119,
            "state": "NE",
            "area_name": "Madison County",
            "value": 11.4
        }, {
            "fips_code": 31121,
            "state": "NE",
            "area_name": "Merrick County",
            "value": 11.6
        }, {
            "fips_code": 31123,
            "state": "NE",
            "area_name": "Morrill County",
            "value": 18.7
        }, {
            "fips_code": 31125,
            "state": "NE",
            "area_name": "Nance County",
            "value": 12.0
        }, {
            "fips_code": 31127,
            "state": "NE",
            "area_name": "Nemaha County",
            "value": 12.1
        }, {
            "fips_code": 31129,
            "state": "NE",
            "area_name": "Nuckolls County",
            "value": 12.6
        }, {
            "fips_code": 31131,
            "state": "NE",
            "area_name": "Otoe County",
            "value": 11.2
        }, {
            "fips_code": 31133,
            "state": "NE",
            "area_name": "Pawnee County",
            "value": 19.4
        }, {
            "fips_code": 31135,
            "state": "NE",
            "area_name": "Perkins County",
            "value": 13.3
        }, {
            "fips_code": 31137,
            "state": "NE",
            "area_name": "Phelps County",
            "value": 10.9
        }, {
            "fips_code": 31139,
            "state": "NE",
            "area_name": "Pierce County",
            "value": 10.7
        }, {
            "fips_code": 31141,
            "state": "NE",
            "area_name": "Platte County",
            "value": 8.800000000000001
        }, {
            "fips_code": 31143,
            "state": "NE",
            "area_name": "Polk County",
            "value": 8.4
        }, {
            "fips_code": 31145,
            "state": "NE",
            "area_name": "Red Willow County",
            "value": 13.1
        }, {
            "fips_code": 31147,
            "state": "NE",
            "area_name": "Richardson County",
            "value": 15.3
        }, {
            "fips_code": 31149,
            "state": "NE",
            "area_name": "Rock County",
            "value": 17.3
        }, {
            "fips_code": 31151,
            "state": "NE",
            "area_name": "Saline County",
            "value": 10.1
        }, {
            "fips_code": 31153,
            "state": "NE",
            "area_name": "Sarpy County",
            "value": 6.0
        }, {
            "fips_code": 31155,
            "state": "NE",
            "area_name": "Saunders County",
            "value": 7.2
        }, {
            "fips_code": 31157,
            "state": "NE",
            "area_name": "Scotts Bluff County",
            "value": 17.9
        }, {
            "fips_code": 31159,
            "state": "NE",
            "area_name": "Seward County",
            "value": 6.7
        }, {
            "fips_code": 31161,
            "state": "NE",
            "area_name": "Sheridan County",
            "value": 20.8
        }, {
            "fips_code": 31163,
            "state": "NE",
            "area_name": "Sherman County",
            "value": 16.3
        }, {
            "fips_code": 31165,
            "state": "NE",
            "area_name": "Sioux County",
            "value": 24.9
        }, {
            "fips_code": 31167,
            "state": "NE",
            "area_name": "Stanton County",
            "value": 9.4
        }, {
            "fips_code": 31169,
            "state": "NE",
            "area_name": "Thayer County",
            "value": 12.6
        }, {
            "fips_code": 31171,
            "state": "NE",
            "area_name": "Thomas County",
            "value": 19.6
        }, {
            "fips_code": 31173,
            "state": "NE",
            "area_name": "Thurston County",
            "value": 25.6
        }, {
            "fips_code": 31175,
            "state": "NE",
            "area_name": "Valley County",
            "value": 15.5
        }, {
            "fips_code": 31177,
            "state": "NE",
            "area_name": "Washington County",
            "value": 6.6
        }, {
            "fips_code": 31179,
            "state": "NE",
            "area_name": "Wayne County",
            "value": 10.5
        }, {
            "fips_code": 31181,
            "state": "NE",
            "area_name": "Webster County",
            "value": 12.6
        }, {
            "fips_code": 31183,
            "state": "NE",
            "area_name": "Wheeler County",
            "value": 14.5
        }, {
            "fips_code": 31185,
            "state": "NE",
            "area_name": "York County",
            "value": 10.8
        }, {
            "fips_code": 32000,
            "state": "NV",
            "area_name": "Nevada",
            "value": 18.8
        }, {
            "fips_code": 32001,
            "state": "NV",
            "area_name": "Churchill County",
            "value": 14.0
        }, {
            "fips_code": 32003,
            "state": "NV",
            "area_name": "Clark County",
            "value": 20.6
        }, {
            "fips_code": 32005,
            "state": "NV",
            "area_name": "Douglas County",
            "value": 11.4
        }, {
            "fips_code": 32007,
            "state": "NV",
            "area_name": "Elko County",
            "value": 12.0
        }, {
            "fips_code": 32009,
            "state": "NV",
            "area_name": "Esmeralda County",
            "value": 22.2
        }, {
            "fips_code": 32011,
            "state": "NV",
            "area_name": "Eureka County",
            "value": 13.3
        }, {
            "fips_code": 32013,
            "state": "NV",
            "area_name": "Humboldt County",
            "value": 14.1
        }, {
            "fips_code": 32015,
            "state": "NV",
            "area_name": "Lander County",
            "value": 15.2
        }, {
            "fips_code": 32017,
            "state": "NV",
            "area_name": "Lincoln County",
            "value": 17.6
        }, {
            "fips_code": 32019,
            "state": "NV",
            "area_name": "Lyon County",
            "value": 13.8
        }, {
            "fips_code": 32021,
            "state": "NV",
            "area_name": "Mineral County",
            "value": 27.1
        }, {
            "fips_code": 32023,
            "state": "NV",
            "area_name": "Nye County",
            "value": 24.6
        }, {
            "fips_code": 32027,
            "state": "NV",
            "area_name": "Pershing County",
            "value": 16.8
        }, {
            "fips_code": 32029,
            "state": "NV",
            "area_name": "Storey County",
            "value": 9.5
        }, {
            "fips_code": 32031,
            "state": "NV",
            "area_name": "Washoe County",
            "value": 11.9
        }, {
            "fips_code": 32033,
            "state": "NV",
            "area_name": "White Pine County",
            "value": 15.5
        }, {
            "fips_code": 32510,
            "state": "NV",
            "area_name": "Carson City",
            "value": 16.6
        }, {
            "fips_code": 33000,
            "state": "NH",
            "area_name": "New Hampshire",
            "value": 9.300000000000001
        }, {
            "fips_code": 33001,
            "state": "NH",
            "area_name": "Belknap County",
            "value": 11.4
        }, {
            "fips_code": 33003,
            "state": "NH",
            "area_name": "Carroll County",
            "value": 12.1
        }, {
            "fips_code": 33005,
            "state": "NH",
            "area_name": "Cheshire County",
            "value": 12.1
        }, {
            "fips_code": 33007,
            "state": "NH",
            "area_name": "Coos County",
            "value": 20.5
        }, {
            "fips_code": 33009,
            "state": "NH",
            "area_name": "Grafton County",
            "value": 11.7
        }, {
            "fips_code": 33011,
            "state": "NH",
            "area_name": "Hillsborough County",
            "value": 9.9
        }, {
            "fips_code": 33013,
            "state": "NH",
            "area_name": "Merrimack County",
            "value": 9.300000000000001
        }, {
            "fips_code": 33015,
            "state": "NH",
            "area_name": "Rockingham County",
            "value": 4.9
        }, {
            "fips_code": 33017,
            "state": "NH",
            "area_name": "Strafford County",
            "value": 10.0
        }, {
            "fips_code": 33019,
            "state": "NH",
            "area_name": "Sullivan County",
            "value": 12.1
        }, {
            "fips_code": 34000,
            "state": "NJ",
            "area_name": "New Jersey",
            "value": 13.9
        }, {
            "fips_code": 34001,
            "state": "NJ",
            "area_name": "Atlantic County",
            "value": 22.6
        }, {
            "fips_code": 34003,
            "state": "NJ",
            "area_name": "Bergen County",
            "value": 9.1
        }, {
            "fips_code": 34005,
            "state": "NJ",
            "area_name": "Burlington County",
            "value": 9.800000000000001
        }, {
            "fips_code": 34007,
            "state": "NJ",
            "area_name": "Camden County",
            "value": 16.8
        }, {
            "fips_code": 34009,
            "state": "NJ",
            "area_name": "Cape May County",
            "value": 13.7
        }, {
            "fips_code": 34011,
            "state": "NJ",
            "area_name": "Cumberland County",
            "value": 20.9
        }, {
            "fips_code": 34013,
            "state": "NJ",
            "area_name": "Essex County",
            "value": 19.8
        }, {
            "fips_code": 34015,
            "state": "NJ",
            "area_name": "Gloucester County",
            "value": 9.800000000000001
        }, {
            "fips_code": 34017,
            "state": "NJ",
            "area_name": "Hudson County",
            "value": 23.3
        }, {
            "fips_code": 34019,
            "state": "NJ",
            "area_name": "Hunterdon County",
            "value": 4.1
        }, {
            "fips_code": 34021,
            "state": "NJ",
            "area_name": "Mercer County",
            "value": 11.8
        }, {
            "fips_code": 34023,
            "state": "NJ",
            "area_name": "Middlesex County",
            "value": 9.4
        }, {
            "fips_code": 34025,
            "state": "NJ",
            "area_name": "Monmouth County",
            "value": 8.800000000000001
        }, {
            "fips_code": 34027,
            "state": "NJ",
            "area_name": "Morris County",
            "value": 5.7
        }, {
            "fips_code": 34029,
            "state": "NJ",
            "area_name": "Ocean County",
            "value": 19.2
        }, {
            "fips_code": 34031,
            "state": "NJ",
            "area_name": "Passaic County",
            "value": 21.3
        }, {
            "fips_code": 34033,
            "state": "NJ",
            "area_name": "Salem County",
            "value": 19.2
        }, {
            "fips_code": 34035,
            "state": "NJ",
            "area_name": "Somerset County",
            "value": 6.3
        }, {
            "fips_code": 34037,
            "state": "NJ",
            "area_name": "Sussex County",
            "value": 7.3
        }, {
            "fips_code": 34039,
            "state": "NJ",
            "area_name": "Union County",
            "value": 12.1
        }, {
            "fips_code": 34041,
            "state": "NJ",
            "area_name": "Warren County",
            "value": 11.3
        }, {
            "fips_code": 35000,
            "state": "NM",
            "area_name": "New Mexico",
            "value": 23.1
        }, {
            "fips_code": 35001,
            "state": "NM",
            "area_name": "Bernalillo County",
            "value": 18.2
        }, {
            "fips_code": 35003,
            "state": "NM",
            "area_name": "Catron County",
            "value": 36.8
        }, {
            "fips_code": 35005,
            "state": "NM",
            "area_name": "Chaves County",
            "value": 35.7
        }, {
            "fips_code": 35006,
            "state": "NM",
            "area_name": "Cibola County",
            "value": 34.0
        }, {
            "fips_code": 35007,
            "state": "NM",
            "area_name": "Colfax County",
            "value": 28.7
        }, {
            "fips_code": 35009,
            "state": "NM",
            "area_name": "Curry County",
            "value": 24.5
        }, {
            "fips_code": 35011,
            "state": "NM",
            "area_name": "DeBaca County",
            "value": 30.8
        }, {
            "fips_code": 35013,
            "state": "NM",
            "area_name": "Dona Ana County",
            "value": 22.7
        }, {
            "fips_code": 35015,
            "state": "NM",
            "area_name": "Eddy County",
            "value": 17.2
        }, {
            "fips_code": 35017,
            "state": "NM",
            "area_name": "Grant County",
            "value": 26.7
        }, {
            "fips_code": 35019,
            "state": "NM",
            "area_name": "Guadalupe County",
            "value": 29.9
        }, {
            "fips_code": 35021,
            "state": "NM",
            "area_name": "Harding County",
            "value": 31.6
        }, {
            "fips_code": 35023,
            "state": "NM",
            "area_name": "Hidalgo County",
            "value": 31.6
        }, {
            "fips_code": 35025,
            "state": "NM",
            "area_name": "Lea County",
            "value": 23.3
        }, {
            "fips_code": 35027,
            "state": "NM",
            "area_name": "Lincoln County",
            "value": 29.9
        }, {
            "fips_code": 35028,
            "state": "NM",
            "area_name": "Los Alamos County",
            "value": 3.2
        }, {
            "fips_code": 35029,
            "state": "NM",
            "area_name": "Luna County",
            "value": 37.4
        }, {
            "fips_code": 35031,
            "state": "NM",
            "area_name": "McKinley County",
            "value": 38.0
        }, {
            "fips_code": 35033,
            "state": "NM",
            "area_name": "Mora County",
            "value": 31.8
        }, {
            "fips_code": 35035,
            "state": "NM",
            "area_name": "Otero County",
            "value": 27.7
        }, {
            "fips_code": 35037,
            "state": "NM",
            "area_name": "Quay County",
            "value": 33.7
        }, {
            "fips_code": 35039,
            "state": "NM",
            "area_name": "Rio Arriba County",
            "value": 26.0
        }, {
            "fips_code": 35041,
            "state": "NM",
            "area_name": "Roosevelt County",
            "value": 26.9
        }, {
            "fips_code": 35043,
            "state": "NM",
            "area_name": "Sandoval County",
            "value": 11.3
        }, {
            "fips_code": 35045,
            "state": "NM",
            "area_name": "San Juan County",
            "value": 32.2
        }, {
            "fips_code": 35047,
            "state": "NM",
            "area_name": "San Miguel County",
            "value": 29.7
        }, {
            "fips_code": 35049,
            "state": "NM",
            "area_name": "Santa Fe County",
            "value": 17.9
        }, {
            "fips_code": 35051,
            "state": "NM",
            "area_name": "Sierra County",
            "value": 50.2
        }, {
            "fips_code": 35053,
            "state": "NM",
            "area_name": "Socorro County",
            "value": 36.8
        }, {
            "fips_code": 35055,
            "state": "NM",
            "area_name": "Taos County",
            "value": 29.2
        }, {
            "fips_code": 35057,
            "state": "NM",
            "area_name": "Torrance County",
            "value": 30.5
        }, {
            "fips_code": 35059,
            "state": "NM",
            "area_name": "Union County",
            "value": 27.8
        }, {
            "fips_code": 35061,
            "state": "NM",
            "area_name": "Valencia County",
            "value": 24.3
        }, {
            "fips_code": 36000,
            "state": "NY",
            "area_name": "New York",
            "value": 18.8
        }, {
            "fips_code": 36001,
            "state": "NY",
            "area_name": "Albany County",
            "value": 16.1
        }, {
            "fips_code": 36003,
            "state": "NY",
            "area_name": "Allegany County",
            "value": 20.3
        }, {
            "fips_code": 36005,
            "state": "NY",
            "area_name": "Bronx County",
            "value": 34.3
        }, {
            "fips_code": 36007,
            "state": "NY",
            "area_name": "Broome County",
            "value": 17.6
        }, {
            "fips_code": 36009,
            "state": "NY",
            "area_name": "Cattaraugus County",
            "value": 21.6
        }, {
            "fips_code": 36011,
            "state": "NY",
            "area_name": "Cayuga County",
            "value": 21.5
        }, {
            "fips_code": 36013,
            "state": "NY",
            "area_name": "Chautauqua County",
            "value": 23.2
        }, {
            "fips_code": 36015,
            "state": "NY",
            "area_name": "Chemung County",
            "value": 18.3
        }, {
            "fips_code": 36017,
            "state": "NY",
            "area_name": "Chenango County",
            "value": 20.8
        }, {
            "fips_code": 36019,
            "state": "NY",
            "area_name": "Clinton County",
            "value": 20.9
        }, {
            "fips_code": 36021,
            "state": "NY",
            "area_name": "Columbia County",
            "value": 15.3
        }, {
            "fips_code": 36023,
            "state": "NY",
            "area_name": "Cortland County",
            "value": 15.5
        }, {
            "fips_code": 36025,
            "state": "NY",
            "area_name": "Delaware County",
            "value": 23.4
        }, {
            "fips_code": 36027,
            "state": "NY",
            "area_name": "Dutchess County",
            "value": 11.6
        }, {
            "fips_code": 36029,
            "state": "NY",
            "area_name": "Erie County",
            "value": 19.2
        }, {
            "fips_code": 36031,
            "state": "NY",
            "area_name": "Essex County",
            "value": 16.2
        }, {
            "fips_code": 36033,
            "state": "NY",
            "area_name": "Franklin County",
            "value": 21.3
        }, {
            "fips_code": 36035,
            "state": "NY",
            "area_name": "Fulton County",
            "value": 21.6
        }, {
            "fips_code": 36037,
            "state": "NY",
            "area_name": "Genesee County",
            "value": 14.2
        }, {
            "fips_code": 36039,
            "state": "NY",
            "area_name": "Greene County",
            "value": 17.9
        }, {
            "fips_code": 36041,
            "state": "NY",
            "area_name": "Hamilton County",
            "value": 16.6
        }, {
            "fips_code": 36043,
            "state": "NY",
            "area_name": "Herkimer County",
            "value": 19.6
        }, {
            "fips_code": 36045,
            "state": "NY",
            "area_name": "Jefferson County",
            "value": 17.6
        }, {
            "fips_code": 36047,
            "state": "NY",
            "area_name": "Kings County",
            "value": 25.8
        }, {
            "fips_code": 36049,
            "state": "NY",
            "area_name": "Lewis County",
            "value": 18.8
        }, {
            "fips_code": 36051,
            "state": "NY",
            "area_name": "Livingston County",
            "value": 14.1
        }, {
            "fips_code": 36053,
            "state": "NY",
            "area_name": "Madison County",
            "value": 14.0
        }, {
            "fips_code": 36055,
            "state": "NY",
            "area_name": "Monroe County",
            "value": 18.1
        }, {
            "fips_code": 36057,
            "state": "NY",
            "area_name": "Montgomery County",
            "value": 24.5
        }, {
            "fips_code": 36059,
            "state": "NY",
            "area_name": "Nassau County",
            "value": 6.9
        }, {
            "fips_code": 36061,
            "state": "NY",
            "area_name": "New York County",
            "value": 22.7
        }, {
            "fips_code": 36063,
            "state": "NY",
            "area_name": "Niagara County",
            "value": 19.1
        }, {
            "fips_code": 36065,
            "state": "NY",
            "area_name": "Oneida County",
            "value": 21.4
        }, {
            "fips_code": 36067,
            "state": "NY",
            "area_name": "Onondaga County",
            "value": 19.9
        }, {
            "fips_code": 36069,
            "state": "NY",
            "area_name": "Ontario County",
            "value": 11.6
        }, {
            "fips_code": 36071,
            "state": "NY",
            "area_name": "Orange County",
            "value": 18.0
        }, {
            "fips_code": 36073,
            "state": "NY",
            "area_name": "Orleans County",
            "value": 22.8
        }, {
            "fips_code": 36075,
            "state": "NY",
            "area_name": "Oswego County",
            "value": 23.1
        }, {
            "fips_code": 36077,
            "state": "NY",
            "area_name": "Otsego County",
            "value": 18.3
        }, {
            "fips_code": 36079,
            "state": "NY",
            "area_name": "Putnam County",
            "value": 7.0
        }, {
            "fips_code": 36081,
            "state": "NY",
            "area_name": "Queens County",
            "value": 17.0
        }, {
            "fips_code": 36083,
            "state": "NY",
            "area_name": "Rensselaer County",
            "value": 16.9
        }, {
            "fips_code": 36085,
            "state": "NY",
            "area_name": "Richmond County",
            "value": 16.5
        }, {
            "fips_code": 36087,
            "state": "NY",
            "area_name": "Rockland County",
            "value": 26.3
        }, {
            "fips_code": 36089,
            "state": "NY",
            "area_name": "St. Lawrence County",
            "value": 19.5
        }, {
            "fips_code": 36091,
            "state": "NY",
            "area_name": "Saratoga County",
            "value": 8.800000000000001
        }, {
            "fips_code": 36093,
            "state": "NY",
            "area_name": "Schenectady County",
            "value": 18.3
        }, {
            "fips_code": 36095,
            "state": "NY",
            "area_name": "Schoharie County",
            "value": 18.5
        }, {
            "fips_code": 36097,
            "state": "NY",
            "area_name": "Schuyler County",
            "value": 22.2
        }, {
            "fips_code": 36099,
            "state": "NY",
            "area_name": "Seneca County",
            "value": 20.5
        }, {
            "fips_code": 36101,
            "state": "NY",
            "area_name": "Steuben County",
            "value": 18.4
        }, {
            "fips_code": 36103,
            "state": "NY",
            "area_name": "Suffolk County",
            "value": 7.5
        }, {
            "fips_code": 36105,
            "state": "NY",
            "area_name": "Sullivan County",
            "value": 27.8
        }, {
            "fips_code": 36107,
            "state": "NY",
            "area_name": "Tioga County",
            "value": 16.6
        }, {
            "fips_code": 36109,
            "state": "NY",
            "area_name": "Tompkins County",
            "value": 14.0
        }, {
            "fips_code": 36111,
            "state": "NY",
            "area_name": "Ulster County",
            "value": 14.2
        }, {
            "fips_code": 36113,
            "state": "NY",
            "area_name": "Warren County",
            "value": 15.4
        }, {
            "fips_code": 36115,
            "state": "NY",
            "area_name": "Washington County",
            "value": 18.3
        }, {
            "fips_code": 36117,
            "state": "NY",
            "area_name": "Wayne County",
            "value": 13.8
        }, {
            "fips_code": 36119,
            "state": "NY",
            "area_name": "Westchester County",
            "value": 11.4
        }, {
            "fips_code": 36121,
            "state": "NY",
            "area_name": "Wyoming County",
            "value": 12.0
        }, {
            "fips_code": 36123,
            "state": "NY",
            "area_name": "Yates County",
            "value": 18.9
        }, {
            "fips_code": 37000,
            "state": "NC",
            "area_name": "North Carolina",
            "value": 18.2
        }, {
            "fips_code": 37001,
            "state": "NC",
            "area_name": "Alamance County",
            "value": 17.6
        }, {
            "fips_code": 37003,
            "state": "NC",
            "area_name": "Alexander County",
            "value": 18.3
        }, {
            "fips_code": 37005,
            "state": "NC",
            "area_name": "Alleghany County",
            "value": 28.4
        }, {
            "fips_code": 37007,
            "state": "NC",
            "area_name": "Anson County",
            "value": 30.5
        }, {
            "fips_code": 37009,
            "state": "NC",
            "area_name": "Ashe County",
            "value": 22.4
        }, {
            "fips_code": 37011,
            "state": "NC",
            "area_name": "Avery County",
            "value": 24.0
        }, {
            "fips_code": 37013,
            "state": "NC",
            "area_name": "Beaufort County",
            "value": 32.0
        }, {
            "fips_code": 37015,
            "state": "NC",
            "area_name": "Bertie County",
            "value": 30.8
        }, {
            "fips_code": 37017,
            "state": "NC",
            "area_name": "Bladen County",
            "value": 30.6
        }, {
            "fips_code": 37019,
            "state": "NC",
            "area_name": "Brunswick County",
            "value": 18.4
        }, {
            "fips_code": 37021,
            "state": "NC",
            "area_name": "Buncombe County",
            "value": 17.0
        }, {
            "fips_code": 37023,
            "state": "NC",
            "area_name": "Burke County",
            "value": 19.9
        }, {
            "fips_code": 37025,
            "state": "NC",
            "area_name": "Cabarrus County",
            "value": 12.7
        }, {
            "fips_code": 37027,
            "state": "NC",
            "area_name": "Caldwell County",
            "value": 21.2
        }, {
            "fips_code": 37029,
            "state": "NC",
            "area_name": "Camden County",
            "value": 9.800000000000001
        }, {
            "fips_code": 37031,
            "state": "NC",
            "area_name": "Carteret County",
            "value": 17.9
        }, {
            "fips_code": 37033,
            "state": "NC",
            "area_name": "Caswell County",
            "value": 27.8
        }, {
            "fips_code": 37035,
            "state": "NC",
            "area_name": "Catawba County",
            "value": 17.9
        }, {
            "fips_code": 37037,
            "state": "NC",
            "area_name": "Chatham County",
            "value": 16.7
        }, {
            "fips_code": 37039,
            "state": "NC",
            "area_name": "Cherokee County",
            "value": 26.9
        }, {
            "fips_code": 37041,
            "state": "NC",
            "area_name": "Chowan County",
            "value": 28.5
        }, {
            "fips_code": 37043,
            "state": "NC",
            "area_name": "Clay County",
            "value": 25.2
        }, {
            "fips_code": 37045,
            "state": "NC",
            "area_name": "Cleveland County",
            "value": 26.8
        }, {
            "fips_code": 37047,
            "state": "NC",
            "area_name": "Columbus County",
            "value": 33.9
        }, {
            "fips_code": 37049,
            "state": "NC",
            "area_name": "Craven County",
            "value": 18.0
        }, {
            "fips_code": 37051,
            "state": "NC",
            "area_name": "Cumberland County",
            "value": 21.7
        }, {
            "fips_code": 37053,
            "state": "NC",
            "area_name": "Currituck County",
            "value": 12.8
        }, {
            "fips_code": 37055,
            "state": "NC",
            "area_name": "Dare County",
            "value": 14.0
        }, {
            "fips_code": 37057,
            "state": "NC",
            "area_name": "Davidson County",
            "value": 19.6
        }, {
            "fips_code": 37059,
            "state": "NC",
            "area_name": "Davie County",
            "value": 14.4
        }, {
            "fips_code": 37061,
            "state": "NC",
            "area_name": "Duplin County",
            "value": 28.4
        }, {
            "fips_code": 37063,
            "state": "NC",
            "area_name": "Durham County",
            "value": 19.3
        }, {
            "fips_code": 37065,
            "state": "NC",
            "area_name": "Edgecombe County",
            "value": 33.0
        }, {
            "fips_code": 37067,
            "state": "NC",
            "area_name": "Forsyth County",
            "value": 19.9
        }, {
            "fips_code": 37069,
            "state": "NC",
            "area_name": "Franklin County",
            "value": 17.4
        }, {
            "fips_code": 37071,
            "state": "NC",
            "area_name": "Gaston County",
            "value": 19.6
        }, {
            "fips_code": 37073,
            "state": "NC",
            "area_name": "Gates County",
            "value": 20.7
        }, {
            "fips_code": 37075,
            "state": "NC",
            "area_name": "Graham County",
            "value": 27.6
        }, {
            "fips_code": 37077,
            "state": "NC",
            "area_name": "Granville County",
            "value": 16.7
        }, {
            "fips_code": 37079,
            "state": "NC",
            "area_name": "Greene County",
            "value": 31.8
        }, {
            "fips_code": 37081,
            "state": "NC",
            "area_name": "Guilford County",
            "value": 17.7
        }, {
            "fips_code": 37083,
            "state": "NC",
            "area_name": "Halifax County",
            "value": 35.9
        }, {
            "fips_code": 37085,
            "state": "NC",
            "area_name": "Harnett County",
            "value": 17.8
        }, {
            "fips_code": 37087,
            "state": "NC",
            "area_name": "Haywood County",
            "value": 20.4
        }, {
            "fips_code": 37089,
            "state": "NC",
            "area_name": "Henderson County",
            "value": 18.6
        }, {
            "fips_code": 37091,
            "state": "NC",
            "area_name": "Hertford County",
            "value": 35.1
        }, {
            "fips_code": 37093,
            "state": "NC",
            "area_name": "Hoke County",
            "value": 21.5
        }, {
            "fips_code": 37095,
            "state": "NC",
            "area_name": "Hyde County",
            "value": 30.3
        }, {
            "fips_code": 37097,
            "state": "NC",
            "area_name": "Iredell County",
            "value": 12.8
        }, {
            "fips_code": 37099,
            "state": "NC",
            "area_name": "Jackson County",
            "value": 22.5
        }, {
            "fips_code": 37101,
            "state": "NC",
            "area_name": "Johnston County",
            "value": 15.2
        }, {
            "fips_code": 37103,
            "state": "NC",
            "area_name": "Jones County",
            "value": 29.1
        }, {
            "fips_code": 37105,
            "state": "NC",
            "area_name": "Lee County",
            "value": 20.6
        }, {
            "fips_code": 37107,
            "state": "NC",
            "area_name": "Lenoir County",
            "value": 30.1
        }, {
            "fips_code": 37109,
            "state": "NC",
            "area_name": "Lincoln County",
            "value": 12.3
        }, {
            "fips_code": 37111,
            "state": "NC",
            "area_name": "McDowell County",
            "value": 21.8
        }, {
            "fips_code": 37113,
            "state": "NC",
            "area_name": "Macon County",
            "value": 21.8
        }, {
            "fips_code": 37115,
            "state": "NC",
            "area_name": "Madison County",
            "value": 22.2
        }, {
            "fips_code": 37117,
            "state": "NC",
            "area_name": "Martin County",
            "value": 30.8
        }, {
            "fips_code": 37119,
            "state": "NC",
            "area_name": "Mecklenburg County",
            "value": 14.1
        }, {
            "fips_code": 37121,
            "state": "NC",
            "area_name": "Mitchell County",
            "value": 22.4
        }, {
            "fips_code": 37123,
            "state": "NC",
            "area_name": "Montgomery County",
            "value": 27.8
        }, {
            "fips_code": 37125,
            "state": "NC",
            "area_name": "Moore County",
            "value": 13.1
        }, {
            "fips_code": 37127,
            "state": "NC",
            "area_name": "Nash County",
            "value": 22.3
        }, {
            "fips_code": 37129,
            "state": "NC",
            "area_name": "New Hanover County",
            "value": 13.2
        }, {
            "fips_code": 37131,
            "state": "NC",
            "area_name": "Northampton County",
            "value": 36.4
        }, {
            "fips_code": 37133,
            "state": "NC",
            "area_name": "Onslow County",
            "value": 18.1
        }, {
            "fips_code": 37135,
            "state": "NC",
            "area_name": "Orange County",
            "value": 10.6
        }, {
            "fips_code": 37137,
            "state": "NC",
            "area_name": "Pamlico County",
            "value": 26.3
        }, {
            "fips_code": 37139,
            "state": "NC",
            "area_name": "Pasquotank County",
            "value": 22.4
        }, {
            "fips_code": 37141,
            "state": "NC",
            "area_name": "Pender County",
            "value": 15.4
        }, {
            "fips_code": 37143,
            "state": "NC",
            "area_name": "Perquimans County",
            "value": 27.2
        }, {
            "fips_code": 37145,
            "state": "NC",
            "area_name": "Person County",
            "value": 25.6
        }, {
            "fips_code": 37147,
            "state": "NC",
            "area_name": "Pitt County",
            "value": 23.5
        }, {
            "fips_code": 37149,
            "state": "NC",
            "area_name": "Polk County",
            "value": 18.8
        }, {
            "fips_code": 37151,
            "state": "NC",
            "area_name": "Randolph County",
            "value": 21.1
        }, {
            "fips_code": 37153,
            "state": "NC",
            "area_name": "Richmond County",
            "value": 40.2
        }, {
            "fips_code": 37155,
            "state": "NC",
            "area_name": "Robeson County",
            "value": 36.0
        }, {
            "fips_code": 37157,
            "state": "NC",
            "area_name": "Rockingham County",
            "value": 26.5
        }, {
            "fips_code": 37159,
            "state": "NC",
            "area_name": "Rowan County",
            "value": 23.6
        }, {
            "fips_code": 37161,
            "state": "NC",
            "area_name": "Rutherford County",
            "value": 25.3
        }, {
            "fips_code": 37163,
            "state": "NC",
            "area_name": "Sampson County",
            "value": 29.2
        }, {
            "fips_code": 37165,
            "state": "NC",
            "area_name": "Scotland County",
            "value": 35.0
        }, {
            "fips_code": 37167,
            "state": "NC",
            "area_name": "Stanly County",
            "value": 20.7
        }, {
            "fips_code": 37169,
            "state": "NC",
            "area_name": "Stokes County",
            "value": 19.1
        }, {
            "fips_code": 37171,
            "state": "NC",
            "area_name": "Surry County",
            "value": 21.1
        }, {
            "fips_code": 37173,
            "state": "NC",
            "area_name": "Swain County",
            "value": 25.8
        }, {
            "fips_code": 37175,
            "state": "NC",
            "area_name": "Transylvania County",
            "value": 21.9
        }, {
            "fips_code": 37177,
            "state": "NC",
            "area_name": "Tyrrell County",
            "value": 30.9
        }, {
            "fips_code": 37179,
            "state": "NC",
            "area_name": "Union County",
            "value": 9.4
        }, {
            "fips_code": 37181,
            "state": "NC",
            "area_name": "Vance County",
            "value": 34.4
        }, {
            "fips_code": 37183,
            "state": "NC",
            "area_name": "Wake County",
            "value": 10.1
        }, {
            "fips_code": 37185,
            "state": "NC",
            "area_name": "Warren County",
            "value": 29.2
        }, {
            "fips_code": 37187,
            "state": "NC",
            "area_name": "Washington County",
            "value": 38.8
        }, {
            "fips_code": 37189,
            "state": "NC",
            "area_name": "Watauga County",
            "value": 13.8
        }, {
            "fips_code": 37191,
            "state": "NC",
            "area_name": "Wayne County",
            "value": 26.7
        }, {
            "fips_code": 37193,
            "state": "NC",
            "area_name": "Wilkes County",
            "value": 23.9
        }, {
            "fips_code": 37195,
            "state": "NC",
            "area_name": "Wilson County",
            "value": 26.6
        }, {
            "fips_code": 37197,
            "state": "NC",
            "area_name": "Yadkin County",
            "value": 18.8
        }, {
            "fips_code": 37199,
            "state": "NC",
            "area_name": "Yancey County",
            "value": 24.2
        }, {
            "fips_code": 38000,
            "state": "ND",
            "area_name": "North Dakota",
            "value": 11.5
        }, {
            "fips_code": 38001,
            "state": "ND",
            "area_name": "Adams County",
            "value": 14.6
        }, {
            "fips_code": 38003,
            "state": "ND",
            "area_name": "Barnes County",
            "value": 11.6
        }, {
            "fips_code": 38005,
            "state": "ND",
            "area_name": "Benson County",
            "value": 37.0
        }, {
            "fips_code": 38007,
            "state": "ND",
            "area_name": "Billings County",
            "value": 13.3
        }, {
            "fips_code": 38009,
            "state": "ND",
            "area_name": "Bottineau County",
            "value": 13.7
        }, {
            "fips_code": 38011,
            "state": "ND",
            "area_name": "Bowman County",
            "value": 9.199999999999999
        }, {
            "fips_code": 38013,
            "state": "ND",
            "area_name": "Burke County",
            "value": 9.699999999999999
        }, {
            "fips_code": 38015,
            "state": "ND",
            "area_name": "Burleigh County",
            "value": 8.6
        }, {
            "fips_code": 38017,
            "state": "ND",
            "area_name": "Cass County",
            "value": 9.300000000000001
        }, {
            "fips_code": 38019,
            "state": "ND",
            "area_name": "Cavalier County",
            "value": 8.6
        }, {
            "fips_code": 38021,
            "state": "ND",
            "area_name": "Dickey County",
            "value": 11.0
        }, {
            "fips_code": 38023,
            "state": "ND",
            "area_name": "Divide County",
            "value": 12.5
        }, {
            "fips_code": 38025,
            "state": "ND",
            "area_name": "Dunn County",
            "value": 14.3
        }, {
            "fips_code": 38027,
            "state": "ND",
            "area_name": "Eddy County",
            "value": 14.0
        }, {
            "fips_code": 38029,
            "state": "ND",
            "area_name": "Emmons County",
            "value": 16.4
        }, {
            "fips_code": 38031,
            "state": "ND",
            "area_name": "Foster County",
            "value": 9.1
        }, {
            "fips_code": 38033,
            "state": "ND",
            "area_name": "Golden Valley County",
            "value": 19.5
        }, {
            "fips_code": 38035,
            "state": "ND",
            "area_name": "Grand Forks County",
            "value": 12.1
        }, {
            "fips_code": 38037,
            "state": "ND",
            "area_name": "Grant County",
            "value": 26.2
        }, {
            "fips_code": 38039,
            "state": "ND",
            "area_name": "Griggs County",
            "value": 14.3
        }, {
            "fips_code": 38041,
            "state": "ND",
            "area_name": "Hettinger County",
            "value": 18.0
        }, {
            "fips_code": 38043,
            "state": "ND",
            "area_name": "Kidder County",
            "value": 16.9
        }, {
            "fips_code": 38045,
            "state": "ND",
            "area_name": "LaMoure County",
            "value": 10.8
        }, {
            "fips_code": 38047,
            "state": "ND",
            "area_name": "Logan County",
            "value": 21.3
        }, {
            "fips_code": 38049,
            "state": "ND",
            "area_name": "McHenry County",
            "value": 14.7
        }, {
            "fips_code": 38051,
            "state": "ND",
            "area_name": "McIntosh County",
            "value": 17.4
        }, {
            "fips_code": 38053,
            "state": "ND",
            "area_name": "McKenzie County",
            "value": 11.2
        }, {
            "fips_code": 38055,
            "state": "ND",
            "area_name": "McLean County",
            "value": 11.9
        }, {
            "fips_code": 38057,
            "state": "ND",
            "area_name": "Mercer County",
            "value": 7.9
        }, {
            "fips_code": 38059,
            "state": "ND",
            "area_name": "Morton County",
            "value": 10.2
        }, {
            "fips_code": 38061,
            "state": "ND",
            "area_name": "Mountrail County",
            "value": 14.2
        }, {
            "fips_code": 38063,
            "state": "ND",
            "area_name": "Nelson County",
            "value": 10.3
        }, {
            "fips_code": 38065,
            "state": "ND",
            "area_name": "Oliver County",
            "value": 15.9
        }, {
            "fips_code": 38067,
            "state": "ND",
            "area_name": "Pembina County",
            "value": 10.3
        }, {
            "fips_code": 38069,
            "state": "ND",
            "area_name": "Pierce County",
            "value": 12.6
        }, {
            "fips_code": 38071,
            "state": "ND",
            "area_name": "Ramsey County",
            "value": 16.1
        }, {
            "fips_code": 38073,
            "state": "ND",
            "area_name": "Ransom County",
            "value": 11.2
        }, {
            "fips_code": 38075,
            "state": "ND",
            "area_name": "Renville County",
            "value": 5.9
        }, {
            "fips_code": 38077,
            "state": "ND",
            "area_name": "Richland County",
            "value": 10.6
        }, {
            "fips_code": 38079,
            "state": "ND",
            "area_name": "Rolette County",
            "value": 30.8
        }, {
            "fips_code": 38081,
            "state": "ND",
            "area_name": "Sargent County",
            "value": 11.7
        }, {
            "fips_code": 38083,
            "state": "ND",
            "area_name": "Sheridan County",
            "value": 26.0
        }, {
            "fips_code": 38085,
            "state": "ND",
            "area_name": "Sioux County",
            "value": 50.7
        }, {
            "fips_code": 38087,
            "state": "ND",
            "area_name": "Slope County",
            "value": 16.1
        }, {
            "fips_code": 38089,
            "state": "ND",
            "area_name": "Stark County",
            "value": 8.9
        }, {
            "fips_code": 38091,
            "state": "ND",
            "area_name": "Steele County",
            "value": 11.9
        }, {
            "fips_code": 38093,
            "state": "ND",
            "area_name": "Stutsman County",
            "value": 11.5
        }, {
            "fips_code": 38095,
            "state": "ND",
            "area_name": "Towner County",
            "value": 15.0
        }, {
            "fips_code": 38097,
            "state": "ND",
            "area_name": "Traill County",
            "value": 8.9
        }, {
            "fips_code": 38099,
            "state": "ND",
            "area_name": "Walsh County",
            "value": 12.6
        }, {
            "fips_code": 38101,
            "state": "ND",
            "area_name": "Ward County",
            "value": 10.1
        }, {
            "fips_code": 38103,
            "state": "ND",
            "area_name": "Wells County",
            "value": 13.2
        }, {
            "fips_code": 38105,
            "state": "ND",
            "area_name": "Williams County",
            "value": 9.300000000000001
        }, {
            "fips_code": 39000,
            "state": "OH",
            "area_name": "Ohio",
            "value": 18.2
        }, {
            "fips_code": 39001,
            "state": "OH",
            "area_name": "Adams County",
            "value": 27.5
        }, {
            "fips_code": 39003,
            "state": "OH",
            "area_name": "Allen County",
            "value": 20.1
        }, {
            "fips_code": 39005,
            "state": "OH",
            "area_name": "Ashland County",
            "value": 14.9
        }, {
            "fips_code": 39007,
            "state": "OH",
            "area_name": "Ashtabula County",
            "value": 22.0
        }, {
            "fips_code": 39009,
            "state": "OH",
            "area_name": "Athens County",
            "value": 23.3
        }, {
            "fips_code": 39011,
            "state": "OH",
            "area_name": "Auglaize County",
            "value": 10.1
        }, {
            "fips_code": 39013,
            "state": "OH",
            "area_name": "Belmont County",
            "value": 21.2
        }, {
            "fips_code": 39015,
            "state": "OH",
            "area_name": "Brown County",
            "value": 22.6
        }, {
            "fips_code": 39017,
            "state": "OH",
            "area_name": "Butler County",
            "value": 12.8
        }, {
            "fips_code": 39019,
            "state": "OH",
            "area_name": "Carroll County",
            "value": 19.8
        }, {
            "fips_code": 39021,
            "state": "OH",
            "area_name": "Champaign County",
            "value": 14.7
        }, {
            "fips_code": 39023,
            "state": "OH",
            "area_name": "Clark County",
            "value": 22.8
        }, {
            "fips_code": 39025,
            "state": "OH",
            "area_name": "Clermont County",
            "value": 10.1
        }, {
            "fips_code": 39027,
            "state": "OH",
            "area_name": "Clinton County",
            "value": 15.8
        }, {
            "fips_code": 39029,
            "state": "OH",
            "area_name": "Columbiana County",
            "value": 24.3
        }, {
            "fips_code": 39031,
            "state": "OH",
            "area_name": "Coshocton County",
            "value": 19.0
        }, {
            "fips_code": 39033,
            "state": "OH",
            "area_name": "Crawford County",
            "value": 20.3
        }, {
            "fips_code": 39035,
            "state": "OH",
            "area_name": "Cuyahoga County",
            "value": 23.1
        }, {
            "fips_code": 39037,
            "state": "OH",
            "area_name": "Darke County",
            "value": 13.6
        }, {
            "fips_code": 39039,
            "state": "OH",
            "area_name": "Defiance County",
            "value": 13.6
        }, {
            "fips_code": 39041,
            "state": "OH",
            "area_name": "Delaware County",
            "value": 4.0
        }, {
            "fips_code": 39043,
            "state": "OH",
            "area_name": "Erie County",
            "value": 20.4
        }, {
            "fips_code": 39045,
            "state": "OH",
            "area_name": "Fairfield County",
            "value": 10.9
        }, {
            "fips_code": 39047,
            "state": "OH",
            "area_name": "Fayette County",
            "value": 24.6
        }, {
            "fips_code": 39049,
            "state": "OH",
            "area_name": "Franklin County",
            "value": 19.9
        }, {
            "fips_code": 39051,
            "state": "OH",
            "area_name": "Fulton County",
            "value": 11.3
        }, {
            "fips_code": 39053,
            "state": "OH",
            "area_name": "Gallia County",
            "value": 25.6
        }, {
            "fips_code": 39055,
            "state": "OH",
            "area_name": "Geauga County",
            "value": 7.1
        }, {
            "fips_code": 39057,
            "state": "OH",
            "area_name": "Greene County",
            "value": 12.1
        }, {
            "fips_code": 39059,
            "state": "OH",
            "area_name": "Guernsey County",
            "value": 22.2
        }, {
            "fips_code": 39061,
            "state": "OH",
            "area_name": "Hamilton County",
            "value": 22.1
        }, {
            "fips_code": 39063,
            "state": "OH",
            "area_name": "Hancock County",
            "value": 12.5
        }, {
            "fips_code": 39065,
            "state": "OH",
            "area_name": "Hardin County",
            "value": 24.5
        }, {
            "fips_code": 39067,
            "state": "OH",
            "area_name": "Harrison County",
            "value": 21.4
        }, {
            "fips_code": 39069,
            "state": "OH",
            "area_name": "Henry County",
            "value": 11.9
        }, {
            "fips_code": 39071,
            "state": "OH",
            "area_name": "Highland County",
            "value": 20.2
        }, {
            "fips_code": 39073,
            "state": "OH",
            "area_name": "Hocking County",
            "value": 23.7
        }, {
            "fips_code": 39075,
            "state": "OH",
            "area_name": "Holmes County",
            "value": 13.1
        }, {
            "fips_code": 39077,
            "state": "OH",
            "area_name": "Huron County",
            "value": 16.8
        }, {
            "fips_code": 39079,
            "state": "OH",
            "area_name": "Jackson County",
            "value": 24.6
        }, {
            "fips_code": 39081,
            "state": "OH",
            "area_name": "Jefferson County",
            "value": 23.7
        }, {
            "fips_code": 39083,
            "state": "OH",
            "area_name": "Knox County",
            "value": 16.7
        }, {
            "fips_code": 39085,
            "state": "OH",
            "area_name": "Lake County",
            "value": 10.6
        }, {
            "fips_code": 39087,
            "state": "OH",
            "area_name": "Lawrence County",
            "value": 22.4
        }, {
            "fips_code": 39089,
            "state": "OH",
            "area_name": "Licking County",
            "value": 15.5
        }, {
            "fips_code": 39091,
            "state": "OH",
            "area_name": "Logan County",
            "value": 15.0
        }, {
            "fips_code": 39093,
            "state": "OH",
            "area_name": "Lorain County",
            "value": 19.9
        }, {
            "fips_code": 39095,
            "state": "OH",
            "area_name": "Lucas County",
            "value": 24.5
        }, {
            "fips_code": 39097,
            "state": "OH",
            "area_name": "Madison County",
            "value": 17.0
        }, {
            "fips_code": 39099,
            "state": "OH",
            "area_name": "Mahoning County",
            "value": 28.5
        }, {
            "fips_code": 39101,
            "state": "OH",
            "area_name": "Marion County",
            "value": 21.5
        }, {
            "fips_code": 39103,
            "state": "OH",
            "area_name": "Medina County",
            "value": 7.7
        }, {
            "fips_code": 39105,
            "state": "OH",
            "area_name": "Meigs County",
            "value": 29.3
        }, {
            "fips_code": 39107,
            "state": "OH",
            "area_name": "Mercer County",
            "value": 9.199999999999999
        }, {
            "fips_code": 39109,
            "state": "OH",
            "area_name": "Miami County",
            "value": 11.5
        }, {
            "fips_code": 39111,
            "state": "OH",
            "area_name": "Monroe County",
            "value": 21.8
        }, {
            "fips_code": 39113,
            "state": "OH",
            "area_name": "Montgomery County",
            "value": 22.5
        }, {
            "fips_code": 39115,
            "state": "OH",
            "area_name": "Morgan County",
            "value": 23.8
        }, {
            "fips_code": 39117,
            "state": "OH",
            "area_name": "Morrow County",
            "value": 16.8
        }, {
            "fips_code": 39119,
            "state": "OH",
            "area_name": "Muskingum County",
            "value": 22.3
        }, {
            "fips_code": 39121,
            "state": "OH",
            "area_name": "Noble County",
            "value": 17.0
        }, {
            "fips_code": 39123,
            "state": "OH",
            "area_name": "Ottawa County",
            "value": 12.3
        }, {
            "fips_code": 39125,
            "state": "OH",
            "area_name": "Paulding County",
            "value": 15.6
        }, {
            "fips_code": 39127,
            "state": "OH",
            "area_name": "Perry County",
            "value": 21.1
        }, {
            "fips_code": 39129,
            "state": "OH",
            "area_name": "Pickaway County",
            "value": 13.3
        }, {
            "fips_code": 39131,
            "state": "OH",
            "area_name": "Pike County",
            "value": 27.7
        }, {
            "fips_code": 39133,
            "state": "OH",
            "area_name": "Portage County",
            "value": 15.7
        }, {
            "fips_code": 39135,
            "state": "OH",
            "area_name": "Preble County",
            "value": 15.3
        }, {
            "fips_code": 39137,
            "state": "OH",
            "area_name": "Putnam County",
            "value": 7.2
        }, {
            "fips_code": 39139,
            "state": "OH",
            "area_name": "Richland County",
            "value": 19.1
        }, {
            "fips_code": 39141,
            "state": "OH",
            "area_name": "Ross County",
            "value": 26.5
        }, {
            "fips_code": 39143,
            "state": "OH",
            "area_name": "Sandusky County",
            "value": 18.0
        }, {
            "fips_code": 39145,
            "state": "OH",
            "area_name": "Scioto County",
            "value": 32.2
        }, {
            "fips_code": 39147,
            "state": "OH",
            "area_name": "Seneca County",
            "value": 16.7
        }, {
            "fips_code": 39149,
            "state": "OH",
            "area_name": "Shelby County",
            "value": 14.0
        }, {
            "fips_code": 39151,
            "state": "OH",
            "area_name": "Stark County",
            "value": 17.0
        }, {
            "fips_code": 39153,
            "state": "OH",
            "area_name": "Summit County",
            "value": 16.1
        }, {
            "fips_code": 39155,
            "state": "OH",
            "area_name": "Trumbull County",
            "value": 22.3
        }, {
            "fips_code": 39157,
            "state": "OH",
            "area_name": "Tuscarawas County",
            "value": 16.1
        }, {
            "fips_code": 39159,
            "state": "OH",
            "area_name": "Union County",
            "value": 5.5
        }, {
            "fips_code": 39161,
            "state": "OH",
            "area_name": "Van Wert County",
            "value": 13.1
        }, {
            "fips_code": 39163,
            "state": "OH",
            "area_name": "Vinton County",
            "value": 28.7
        }, {
            "fips_code": 39165,
            "state": "OH",
            "area_name": "Warren County",
            "value": 6.3
        }, {
            "fips_code": 39167,
            "state": "OH",
            "area_name": "Washington County",
            "value": 19.4
        }, {
            "fips_code": 39169,
            "state": "OH",
            "area_name": "Wayne County",
            "value": 12.8
        }, {
            "fips_code": 39171,
            "state": "OH",
            "area_name": "Williams County",
            "value": 13.6
        }, {
            "fips_code": 39173,
            "state": "OH",
            "area_name": "Wood County",
            "value": 10.1
        }, {
            "fips_code": 39175,
            "state": "OH",
            "area_name": "Wyandot County",
            "value": 10.9
        }, {
            "fips_code": 40000,
            "state": "OK",
            "area_name": "Oklahoma",
            "value": 20.5
        }, {
            "fips_code": 40001,
            "state": "OK",
            "area_name": "Adair County",
            "value": 28.5
        }, {
            "fips_code": 40003,
            "state": "OK",
            "area_name": "Alfalfa County",
            "value": 16.9
        }, {
            "fips_code": 40005,
            "state": "OK",
            "area_name": "Atoka County",
            "value": 20.3
        }, {
            "fips_code": 40007,
            "state": "OK",
            "area_name": "Beaver County",
            "value": 17.1
        }, {
            "fips_code": 40009,
            "state": "OK",
            "area_name": "Beckham County",
            "value": 23.0
        }, {
            "fips_code": 40011,
            "state": "OK",
            "area_name": "Blaine County",
            "value": 24.4
        }, {
            "fips_code": 40013,
            "state": "OK",
            "area_name": "Bryan County",
            "value": 21.4
        }, {
            "fips_code": 40015,
            "state": "OK",
            "area_name": "Caddo County",
            "value": 36.1
        }, {
            "fips_code": 40017,
            "state": "OK",
            "area_name": "Canadian County",
            "value": 10.1
        }, {
            "fips_code": 40019,
            "state": "OK",
            "area_name": "Carter County",
            "value": 19.1
        }, {
            "fips_code": 40021,
            "state": "OK",
            "area_name": "Cherokee County",
            "value": 24.1
        }, {
            "fips_code": 40023,
            "state": "OK",
            "area_name": "Choctaw County",
            "value": 26.5
        }, {
            "fips_code": 40025,
            "state": "OK",
            "area_name": "Cimarron County",
            "value": 25.2
        }, {
            "fips_code": 40027,
            "state": "OK",
            "area_name": "Cleveland County",
            "value": 13.5
        }, {
            "fips_code": 40029,
            "state": "OK",
            "area_name": "Coal County",
            "value": 26.7
        }, {
            "fips_code": 40031,
            "state": "OK",
            "area_name": "Comanche County",
            "value": 23.4
        }, {
            "fips_code": 40033,
            "state": "OK",
            "area_name": "Cotton County",
            "value": 24.9
        }, {
            "fips_code": 40035,
            "state": "OK",
            "area_name": "Craig County",
            "value": 24.4
        }, {
            "fips_code": 40037,
            "state": "OK",
            "area_name": "Creek County",
            "value": 19.2
        }, {
            "fips_code": 40039,
            "state": "OK",
            "area_name": "Custer County",
            "value": 20.8
        }, {
            "fips_code": 40041,
            "state": "OK",
            "area_name": "Delaware County",
            "value": 26.6
        }, {
            "fips_code": 40043,
            "state": "OK",
            "area_name": "Dewey County",
            "value": 21.8
        }, {
            "fips_code": 40045,
            "state": "OK",
            "area_name": "Ellis County",
            "value": 18.1
        }, {
            "fips_code": 40047,
            "state": "OK",
            "area_name": "Garfield County",
            "value": 18.7
        }, {
            "fips_code": 40049,
            "state": "OK",
            "area_name": "Garvin County",
            "value": 21.2
        }, {
            "fips_code": 40051,
            "state": "OK",
            "area_name": "Grady County",
            "value": 18.4
        }, {
            "fips_code": 40053,
            "state": "OK",
            "area_name": "Grant County",
            "value": 19.2
        }, {
            "fips_code": 40055,
            "state": "OK",
            "area_name": "Greer County",
            "value": 28.5
        }, {
            "fips_code": 40057,
            "state": "OK",
            "area_name": "Harmon County",
            "value": 38.8
        }, {
            "fips_code": 40059,
            "state": "OK",
            "area_name": "Harper County",
            "value": 17.0
        }, {
            "fips_code": 40061,
            "state": "OK",
            "area_name": "Haskell County",
            "value": 33.6
        }, {
            "fips_code": 40063,
            "state": "OK",
            "area_name": "Hughes County",
            "value": 27.2
        }, {
            "fips_code": 40065,
            "state": "OK",
            "area_name": "Jackson County",
            "value": 20.6
        }, {
            "fips_code": 40067,
            "state": "OK",
            "area_name": "Jefferson County",
            "value": 36.6
        }, {
            "fips_code": 40069,
            "state": "OK",
            "area_name": "Johnston County",
            "value": 26.8
        }, {
            "fips_code": 40071,
            "state": "OK",
            "area_name": "Kay County",
            "value": 23.4
        }, {
            "fips_code": 40073,
            "state": "OK",
            "area_name": "Kingfisher County",
            "value": 14.1
        }, {
            "fips_code": 40075,
            "state": "OK",
            "area_name": "Kiowa County",
            "value": 29.0
        }, {
            "fips_code": 40077,
            "state": "OK",
            "area_name": "Latimer County",
            "value": 27.2
        }, {
            "fips_code": 40079,
            "state": "OK",
            "area_name": "Le Flore County",
            "value": 31.0
        }, {
            "fips_code": 40081,
            "state": "OK",
            "area_name": "Lincoln County",
            "value": 20.0
        }, {
            "fips_code": 40083,
            "state": "OK",
            "area_name": "Logan County",
            "value": 15.1
        }, {
            "fips_code": 40085,
            "state": "OK",
            "area_name": "Love County",
            "value": 22.0
        }, {
            "fips_code": 40087,
            "state": "OK",
            "area_name": "McClain County",
            "value": 11.2
        }, {
            "fips_code": 40089,
            "state": "OK",
            "area_name": "McCurtain County",
            "value": 30.5
        }, {
            "fips_code": 40091,
            "state": "OK",
            "area_name": "McIntosh County",
            "value": 27.9
        }, {
            "fips_code": 40093,
            "state": "OK",
            "area_name": "Major County",
            "value": 17.7
        }, {
            "fips_code": 40095,
            "state": "OK",
            "area_name": "Marshall County",
            "value": 21.3
        }, {
            "fips_code": 40097,
            "state": "OK",
            "area_name": "Mayes County",
            "value": 19.1
        }, {
            "fips_code": 40099,
            "state": "OK",
            "area_name": "Murray County",
            "value": 19.2
        }, {
            "fips_code": 40101,
            "state": "OK",
            "area_name": "Muskogee County",
            "value": 27.1
        }, {
            "fips_code": 40103,
            "state": "OK",
            "area_name": "Noble County",
            "value": 15.0
        }, {
            "fips_code": 40105,
            "state": "OK",
            "area_name": "Nowata County",
            "value": 23.1
        }, {
            "fips_code": 40107,
            "state": "OK",
            "area_name": "Okfuskee County",
            "value": 33.0
        }, {
            "fips_code": 40109,
            "state": "OK",
            "area_name": "Oklahoma County",
            "value": 23.9
        }, {
            "fips_code": 40111,
            "state": "OK",
            "area_name": "Okmulgee County",
            "value": 24.0
        }, {
            "fips_code": 40113,
            "state": "OK",
            "area_name": "Osage County",
            "value": 18.0
        }, {
            "fips_code": 40115,
            "state": "OK",
            "area_name": "Ottawa County",
            "value": 26.8
        }, {
            "fips_code": 40117,
            "state": "OK",
            "area_name": "Pawnee County",
            "value": 20.0
        }, {
            "fips_code": 40119,
            "state": "OK",
            "area_name": "Payne County",
            "value": 20.0
        }, {
            "fips_code": 40121,
            "state": "OK",
            "area_name": "Pittsburg County",
            "value": 24.1
        }, {
            "fips_code": 40123,
            "state": "OK",
            "area_name": "Pontotoc County",
            "value": 20.4
        }, {
            "fips_code": 40125,
            "state": "OK",
            "area_name": "Pottawatomie County",
            "value": 18.6
        }, {
            "fips_code": 40127,
            "state": "OK",
            "area_name": "Pushmataha County",
            "value": 24.5
        }, {
            "fips_code": 40129,
            "state": "OK",
            "area_name": "Roger Mills County",
            "value": 22.2
        }, {
            "fips_code": 40131,
            "state": "OK",
            "area_name": "Rogers County",
            "value": 11.8
        }, {
            "fips_code": 40133,
            "state": "OK",
            "area_name": "Seminole County",
            "value": 23.6
        }, {
            "fips_code": 40135,
            "state": "OK",
            "area_name": "Sequoyah County",
            "value": 26.2
        }, {
            "fips_code": 40137,
            "state": "OK",
            "area_name": "Stephens County",
            "value": 24.6
        }, {
            "fips_code": 40139,
            "state": "OK",
            "area_name": "Texas County",
            "value": 16.0
        }, {
            "fips_code": 40141,
            "state": "OK",
            "area_name": "Tillman County",
            "value": 28.3
        }, {
            "fips_code": 40143,
            "state": "OK",
            "area_name": "Tulsa County",
            "value": 19.1
        }, {
            "fips_code": 40145,
            "state": "OK",
            "area_name": "Wagoner County",
            "value": 13.0
        }, {
            "fips_code": 40147,
            "state": "OK",
            "area_name": "Washington County",
            "value": 22.2
        }, {
            "fips_code": 40149,
            "state": "OK",
            "area_name": "Washita County",
            "value": 24.8
        }, {
            "fips_code": 40151,
            "state": "OK",
            "area_name": "Woods County",
            "value": 17.1
        }, {
            "fips_code": 40153,
            "state": "OK",
            "area_name": "Woodward County",
            "value": 19.0
        }, {
            "fips_code": 41000,
            "state": "OR",
            "area_name": "Oregon",
            "value": 13.8
        }, {
            "fips_code": 41001,
            "state": "OR",
            "area_name": "Baker County",
            "value": 20.4
        }, {
            "fips_code": 41003,
            "state": "OR",
            "area_name": "Benton County",
            "value": 11.4
        }, {
            "fips_code": 41005,
            "state": "OR",
            "area_name": "Clackamas County",
            "value": 8.9
        }, {
            "fips_code": 41007,
            "state": "OR",
            "area_name": "Clatsop County",
            "value": 16.9
        }, {
            "fips_code": 41009,
            "state": "OR",
            "area_name": "Columbia County",
            "value": 12.5
        }, {
            "fips_code": 41011,
            "state": "OR",
            "area_name": "Coos County",
            "value": 24.4
        }, {
            "fips_code": 41013,
            "state": "OR",
            "area_name": "Crook County",
            "value": 16.6
        }, {
            "fips_code": 41015,
            "state": "OR",
            "area_name": "Curry County",
            "value": 22.4
        }, {
            "fips_code": 41017,
            "state": "OR",
            "area_name": "Deschutes County",
            "value": 10.1
        }, {
            "fips_code": 41019,
            "state": "OR",
            "area_name": "Douglas County",
            "value": 22.1
        }, {
            "fips_code": 41021,
            "state": "OR",
            "area_name": "Gilliam County",
            "value": 14.8
        }, {
            "fips_code": 41023,
            "state": "OR",
            "area_name": "Grant County",
            "value": 21.3
        }, {
            "fips_code": 41025,
            "state": "OR",
            "area_name": "Harney County",
            "value": 22.5
        }, {
            "fips_code": 41027,
            "state": "OR",
            "area_name": "Hood River County",
            "value": 13.1
        }, {
            "fips_code": 41029,
            "state": "OR",
            "area_name": "Jackson County",
            "value": 15.5
        }, {
            "fips_code": 41031,
            "state": "OR",
            "area_name": "Jefferson County",
            "value": 22.6
        }, {
            "fips_code": 41033,
            "state": "OR",
            "area_name": "Josephine County",
            "value": 23.6
        }, {
            "fips_code": 41035,
            "state": "OR",
            "area_name": "Klamath County",
            "value": 23.9
        }, {
            "fips_code": 41037,
            "state": "OR",
            "area_name": "Lake County",
            "value": 20.1
        }, {
            "fips_code": 41039,
            "state": "OR",
            "area_name": "Lane County",
            "value": 14.8
        }, {
            "fips_code": 41041,
            "state": "OR",
            "area_name": "Lincoln County",
            "value": 22.1
        }, {
            "fips_code": 41043,
            "state": "OR",
            "area_name": "Linn County",
            "value": 14.5
        }, {
            "fips_code": 41045,
            "state": "OR",
            "area_name": "Malheur County",
            "value": 24.4
        }, {
            "fips_code": 41047,
            "state": "OR",
            "area_name": "Marion County",
            "value": 16.0
        }, {
            "fips_code": 41049,
            "state": "OR",
            "area_name": "Morrow County",
            "value": 15.7
        }, {
            "fips_code": 41051,
            "state": "OR",
            "area_name": "Multnomah County",
            "value": 12.7
        }, {
            "fips_code": 41053,
            "state": "OR",
            "area_name": "Polk County",
            "value": 12.6
        }, {
            "fips_code": 41055,
            "state": "OR",
            "area_name": "Sherman County",
            "value": 18.8
        }, {
            "fips_code": 41057,
            "state": "OR",
            "area_name": "Tillamook County",
            "value": 21.3
        }, {
            "fips_code": 41059,
            "state": "OR",
            "area_name": "Umatilla County",
            "value": 16.4
        }, {
            "fips_code": 41061,
            "state": "OR",
            "area_name": "Union County",
            "value": 22.0
        }, {
            "fips_code": 41063,
            "state": "OR",
            "area_name": "Wallowa County",
            "value": 17.4
        }, {
            "fips_code": 41065,
            "state": "OR",
            "area_name": "Wasco County",
            "value": 18.5
        }, {
            "fips_code": 41067,
            "state": "OR",
            "area_name": "Washington County",
            "value": 9.1
        }, {
            "fips_code": 41069,
            "state": "OR",
            "area_name": "Wheeler County",
            "value": 33.0
        }, {
            "fips_code": 41071,
            "state": "OR",
            "area_name": "Yamhill County",
            "value": 12.1
        }, {
            "fips_code": 42000,
            "state": "PA",
            "area_name": "Pennsylvania",
            "value": 16.3
        }, {
            "fips_code": 42001,
            "state": "PA",
            "area_name": "Adams County",
            "value": 11.6
        }, {
            "fips_code": 42003,
            "state": "PA",
            "area_name": "Allegheny County",
            "value": 13.9
        }, {
            "fips_code": 42005,
            "state": "PA",
            "area_name": "Armstrong County",
            "value": 15.7
        }, {
            "fips_code": 42007,
            "state": "PA",
            "area_name": "Beaver County",
            "value": 17.0
        }, {
            "fips_code": 42009,
            "state": "PA",
            "area_name": "Bedford County",
            "value": 15.4
        }, {
            "fips_code": 42011,
            "state": "PA",
            "area_name": "Berks County",
            "value": 18.1
        }, {
            "fips_code": 42013,
            "state": "PA",
            "area_name": "Blair County",
            "value": 16.3
        }, {
            "fips_code": 42015,
            "state": "PA",
            "area_name": "Bradford County",
            "value": 18.7
        }, {
            "fips_code": 42017,
            "state": "PA",
            "area_name": "Bucks County",
            "value": 8.199999999999999
        }, {
            "fips_code": 42019,
            "state": "PA",
            "area_name": "Butler County",
            "value": 8.800000000000001
        }, {
            "fips_code": 42021,
            "state": "PA",
            "area_name": "Cambria County",
            "value": 19.4
        }, {
            "fips_code": 42023,
            "state": "PA",
            "area_name": "Cameron County",
            "value": 25.0
        }, {
            "fips_code": 42025,
            "state": "PA",
            "area_name": "Carbon County",
            "value": 22.4
        }, {
            "fips_code": 42027,
            "state": "PA",
            "area_name": "Centre County",
            "value": 10.6
        }, {
            "fips_code": 42029,
            "state": "PA",
            "area_name": "Chester County",
            "value": 7.8
        }, {
            "fips_code": 42031,
            "state": "PA",
            "area_name": "Clarion County",
            "value": 15.8
        }, {
            "fips_code": 42033,
            "state": "PA",
            "area_name": "Clearfield County",
            "value": 19.0
        }, {
            "fips_code": 42035,
            "state": "PA",
            "area_name": "Clinton County",
            "value": 18.3
        }, {
            "fips_code": 42037,
            "state": "PA",
            "area_name": "Columbia County",
            "value": 18.3
        }, {
            "fips_code": 42039,
            "state": "PA",
            "area_name": "Crawford County",
            "value": 21.1
        }, {
            "fips_code": 42041,
            "state": "PA",
            "area_name": "Cumberland County",
            "value": 10.5
        }, {
            "fips_code": 42043,
            "state": "PA",
            "area_name": "Dauphin County",
            "value": 17.0
        }, {
            "fips_code": 42045,
            "state": "PA",
            "area_name": "Delaware County",
            "value": 13.9
        }, {
            "fips_code": 42047,
            "state": "PA",
            "area_name": "Elk County",
            "value": 14.1
        }, {
            "fips_code": 42049,
            "state": "PA",
            "area_name": "Erie County",
            "value": 23.8
        }, {
            "fips_code": 42051,
            "state": "PA",
            "area_name": "Fayette County",
            "value": 21.0
        }, {
            "fips_code": 42053,
            "state": "PA",
            "area_name": "Forest County",
            "value": 34.8
        }, {
            "fips_code": 42055,
            "state": "PA",
            "area_name": "Franklin County",
            "value": 13.9
        }, {
            "fips_code": 42057,
            "state": "PA",
            "area_name": "Fulton County",
            "value": 18.5
        }, {
            "fips_code": 42059,
            "state": "PA",
            "area_name": "Greene County",
            "value": 20.2
        }, {
            "fips_code": 42061,
            "state": "PA",
            "area_name": "Huntingdon County",
            "value": 19.7
        }, {
            "fips_code": 42063,
            "state": "PA",
            "area_name": "Indiana County",
            "value": 18.2
        }, {
            "fips_code": 42065,
            "state": "PA",
            "area_name": "Jefferson County",
            "value": 18.7
        }, {
            "fips_code": 42067,
            "state": "PA",
            "area_name": "Juniata County",
            "value": 13.6
        }, {
            "fips_code": 42069,
            "state": "PA",
            "area_name": "Lackawanna County",
            "value": 19.2
        }, {
            "fips_code": 42071,
            "state": "PA",
            "area_name": "Lancaster County",
            "value": 10.8
        }, {
            "fips_code": 42073,
            "state": "PA",
            "area_name": "Lawrence County",
            "value": 18.5
        }, {
            "fips_code": 42075,
            "state": "PA",
            "area_name": "Lebanon County",
            "value": 12.3
        }, {
            "fips_code": 42077,
            "state": "PA",
            "area_name": "Lehigh County",
            "value": 15.6
        }, {
            "fips_code": 42079,
            "state": "PA",
            "area_name": "Luzerne County",
            "value": 18.8
        }, {
            "fips_code": 42081,
            "state": "PA",
            "area_name": "Lycoming County",
            "value": 15.1
        }, {
            "fips_code": 42083,
            "state": "PA",
            "area_name": "Mc Kean County",
            "value": 19.1
        }, {
            "fips_code": 42085,
            "state": "PA",
            "area_name": "Mercer County",
            "value": 17.7
        }, {
            "fips_code": 42087,
            "state": "PA",
            "area_name": "Mifflin County",
            "value": 23.7
        }, {
            "fips_code": 42089,
            "state": "PA",
            "area_name": "Monroe County",
            "value": 16.3
        }, {
            "fips_code": 42091,
            "state": "PA",
            "area_name": "Montgomery County",
            "value": 7.8
        }, {
            "fips_code": 42093,
            "state": "PA",
            "area_name": "Montour County",
            "value": 13.6
        }, {
            "fips_code": 42095,
            "state": "PA",
            "area_name": "Northampton County",
            "value": 12.6
        }, {
            "fips_code": 42097,
            "state": "PA",
            "area_name": "Northumberland County",
            "value": 17.3
        }, {
            "fips_code": 42099,
            "state": "PA",
            "area_name": "Perry County",
            "value": 12.6
        }, {
            "fips_code": 42101,
            "state": "PA",
            "area_name": "Philadelphia County",
            "value": 32.7
        }, {
            "fips_code": 42103,
            "state": "PA",
            "area_name": "Pike County",
            "value": 14.1
        }, {
            "fips_code": 42105,
            "state": "PA",
            "area_name": "Potter County",
            "value": 25.8
        }, {
            "fips_code": 42107,
            "state": "PA",
            "area_name": "Schuylkill County",
            "value": 17.4
        }, {
            "fips_code": 42109,
            "state": "PA",
            "area_name": "Snyder County",
            "value": 11.6
        }, {
            "fips_code": 42111,
            "state": "PA",
            "area_name": "Somerset County",
            "value": 18.8
        }, {
            "fips_code": 42113,
            "state": "PA",
            "area_name": "Sullivan County",
            "value": 17.3
        }, {
            "fips_code": 42115,
            "state": "PA",
            "area_name": "Susquehanna County",
            "value": 17.4
        }, {
            "fips_code": 42117,
            "state": "PA",
            "area_name": "Tioga County",
            "value": 19.4
        }, {
            "fips_code": 42119,
            "state": "PA",
            "area_name": "Union County",
            "value": 12.0
        }, {
            "fips_code": 42121,
            "state": "PA",
            "area_name": "Venango County",
            "value": 21.0
        }, {
            "fips_code": 42123,
            "state": "PA",
            "area_name": "Warren County",
            "value": 20.2
        }, {
            "fips_code": 42125,
            "state": "PA",
            "area_name": "Washington County",
            "value": 11.6
        }, {
            "fips_code": 42127,
            "state": "PA",
            "area_name": "Wayne County",
            "value": 18.2
        }, {
            "fips_code": 42129,
            "state": "PA",
            "area_name": "Westmoreland County",
            "value": 14.7
        }, {
            "fips_code": 42131,
            "state": "PA",
            "area_name": "Wyoming County",
            "value": 17.4
        }, {
            "fips_code": 42133,
            "state": "PA",
            "area_name": "York County",
            "value": 12.3
        }, {
            "fips_code": 44000,
            "state": "RI",
            "area_name": "Rhode Island",
            "value": 17.0
        }, {
            "fips_code": 44001,
            "state": "RI",
            "area_name": "Bristol County",
            "value": 7.9
        }, {
            "fips_code": 44003,
            "state": "RI",
            "area_name": "Kent County",
            "value": 9.9
        }, {
            "fips_code": 44005,
            "state": "RI",
            "area_name": "Newport County",
            "value": 12.7
        }, {
            "fips_code": 44007,
            "state": "RI",
            "area_name": "Providence County",
            "value": 21.0
        }, {
            "fips_code": 44009,
            "state": "RI",
            "area_name": "Washington County",
            "value": 8.6
        }, {
            "fips_code": 45000,
            "state": "SC",
            "area_name": "South Carolina",
            "value": 19.7
        }, {
            "fips_code": 45001,
            "state": "SC",
            "area_name": "Abbeville County",
            "value": 21.2
        }, {
            "fips_code": 45003,
            "state": "SC",
            "area_name": "Aiken County",
            "value": 22.7
        }, {
            "fips_code": 45005,
            "state": "SC",
            "area_name": "Allendale County",
            "value": 47.2
        }, {
            "fips_code": 45007,
            "state": "SC",
            "area_name": "Anderson County",
            "value": 21.7
        }, {
            "fips_code": 45009,
            "state": "SC",
            "area_name": "Bamberg County",
            "value": 34.4
        }, {
            "fips_code": 45011,
            "state": "SC",
            "area_name": "Barnwell County",
            "value": 32.5
        }, {
            "fips_code": 45013,
            "state": "SC",
            "area_name": "Beaufort County",
            "value": 19.4
        }, {
            "fips_code": 45015,
            "state": "SC",
            "area_name": "Berkeley County",
            "value": 14.2
        }, {
            "fips_code": 45017,
            "state": "SC",
            "area_name": "Calhoun County",
            "value": 26.3
        }, {
            "fips_code": 45019,
            "state": "SC",
            "area_name": "Charleston County",
            "value": 18.5
        }, {
            "fips_code": 45021,
            "state": "SC",
            "area_name": "Cherokee County",
            "value": 28.7
        }, {
            "fips_code": 45023,
            "state": "SC",
            "area_name": "Chester County",
            "value": 26.2
        }, {
            "fips_code": 45025,
            "state": "SC",
            "area_name": "Chesterfield County",
            "value": 27.0
        }, {
            "fips_code": 45027,
            "state": "SC",
            "area_name": "Clarendon County",
            "value": 28.0
        }, {
            "fips_code": 45029,
            "state": "SC",
            "area_name": "Colleton County",
            "value": 30.6
        }, {
            "fips_code": 45031,
            "state": "SC",
            "area_name": "Darlington County",
            "value": 28.6
        }, {
            "fips_code": 45033,
            "state": "SC",
            "area_name": "Dillon County",
            "value": 39.6
        }, {
            "fips_code": 45035,
            "state": "SC",
            "area_name": "Dorchester County",
            "value": 14.0
        }, {
            "fips_code": 45037,
            "state": "SC",
            "area_name": "Edgefield County",
            "value": 22.8
        }, {
            "fips_code": 45039,
            "state": "SC",
            "area_name": "Fairfield County",
            "value": 30.5
        }, {
            "fips_code": 45041,
            "state": "SC",
            "area_name": "Florence County",
            "value": 23.3
        }, {
            "fips_code": 45043,
            "state": "SC",
            "area_name": "Georgetown County",
            "value": 25.3
        }, {
            "fips_code": 45045,
            "state": "SC",
            "area_name": "Greenville County",
            "value": 14.2
        }, {
            "fips_code": 45047,
            "state": "SC",
            "area_name": "Greenwood County",
            "value": 22.9
        }, {
            "fips_code": 45049,
            "state": "SC",
            "area_name": "Hampton County",
            "value": 35.1
        }, {
            "fips_code": 45051,
            "state": "SC",
            "area_name": "Horry County",
            "value": 19.2
        }, {
            "fips_code": 45053,
            "state": "SC",
            "area_name": "Jasper County",
            "value": 28.0
        }, {
            "fips_code": 45055,
            "state": "SC",
            "area_name": "Kershaw County",
            "value": 19.7
        }, {
            "fips_code": 45057,
            "state": "SC",
            "area_name": "Lancaster County",
            "value": 17.3
        }, {
            "fips_code": 45059,
            "state": "SC",
            "area_name": "Laurens County",
            "value": 25.0
        }, {
            "fips_code": 45061,
            "state": "SC",
            "area_name": "Lee County",
            "value": 34.0
        }, {
            "fips_code": 45063,
            "state": "SC",
            "area_name": "Lexington County",
            "value": 14.3
        }, {
            "fips_code": 45065,
            "state": "SC",
            "area_name": "McCormick County",
            "value": 35.7
        }, {
            "fips_code": 45067,
            "state": "SC",
            "area_name": "Marion County",
            "value": 39.5
        }, {
            "fips_code": 45069,
            "state": "SC",
            "area_name": "Marlboro County",
            "value": 32.8
        }, {
            "fips_code": 45071,
            "state": "SC",
            "area_name": "Newberry County",
            "value": 23.4
        }, {
            "fips_code": 45073,
            "state": "SC",
            "area_name": "Oconee County",
            "value": 23.5
        }, {
            "fips_code": 45075,
            "state": "SC",
            "area_name": "Orangeburg County",
            "value": 41.9
        }, {
            "fips_code": 45077,
            "state": "SC",
            "area_name": "Pickens County",
            "value": 16.4
        }, {
            "fips_code": 45079,
            "state": "SC",
            "area_name": "Richland County",
            "value": 19.6
        }, {
            "fips_code": 45081,
            "state": "SC",
            "area_name": "Saluda County",
            "value": 23.7
        }, {
            "fips_code": 45083,
            "state": "SC",
            "area_name": "Spartanburg County",
            "value": 17.1
        }, {
            "fips_code": 45085,
            "state": "SC",
            "area_name": "Sumter County",
            "value": 27.2
        }, {
            "fips_code": 45087,
            "state": "SC",
            "area_name": "Union County",
            "value": 29.3
        }, {
            "fips_code": 45089,
            "state": "SC",
            "area_name": "Williamsburg County",
            "value": 33.4
        }, {
            "fips_code": 45091,
            "state": "SC",
            "area_name": "York County",
            "value": 12.4
        }, {
            "fips_code": 46000,
            "state": "SD",
            "area_name": "South Dakota",
            "value": 14.4
        }, {
            "fips_code": 46003,
            "state": "SD",
            "area_name": "Aurora County",
            "value": 11.9
        }, {
            "fips_code": 46005,
            "state": "SD",
            "area_name": "Beadle County",
            "value": 15.6
        }, {
            "fips_code": 46007,
            "state": "SD",
            "area_name": "Bennett County",
            "value": 43.3
        }, {
            "fips_code": 46009,
            "state": "SD",
            "area_name": "Bon Homme County",
            "value": 14.7
        }, {
            "fips_code": 46011,
            "state": "SD",
            "area_name": "Brookings County",
            "value": 8.1
        }, {
            "fips_code": 46013,
            "state": "SD",
            "area_name": "Brown County",
            "value": 11.8
        }, {
            "fips_code": 46015,
            "state": "SD",
            "area_name": "Brule County",
            "value": 16.8
        }, {
            "fips_code": 46017,
            "state": "SD",
            "area_name": "Buffalo County",
            "value": 44.4
        }, {
            "fips_code": 46019,
            "state": "SD",
            "area_name": "Butte County",
            "value": 17.1
        }, {
            "fips_code": 46021,
            "state": "SD",
            "area_name": "Campbell County",
            "value": 13.4
        }, {
            "fips_code": 46023,
            "state": "SD",
            "area_name": "Charles Mix County",
            "value": 28.6
        }, {
            "fips_code": 46025,
            "state": "SD",
            "area_name": "Clark County",
            "value": 16.0
        }, {
            "fips_code": 46027,
            "state": "SD",
            "area_name": "Clay County",
            "value": 16.2
        }, {
            "fips_code": 46029,
            "state": "SD",
            "area_name": "Codington County",
            "value": 11.0
        }, {
            "fips_code": 46031,
            "state": "SD",
            "area_name": "Corson County",
            "value": 53.1
        }, {
            "fips_code": 46033,
            "state": "SD",
            "area_name": "Custer County",
            "value": 15.0
        }, {
            "fips_code": 46035,
            "state": "SD",
            "area_name": "Davison County",
            "value": 12.6
        }, {
            "fips_code": 46037,
            "state": "SD",
            "area_name": "Day County",
            "value": 19.3
        }, {
            "fips_code": 46039,
            "state": "SD",
            "area_name": "Deuel County",
            "value": 8.9
        }, {
            "fips_code": 46041,
            "state": "SD",
            "area_name": "Dewey County",
            "value": 26.3
        }, {
            "fips_code": 46043,
            "state": "SD",
            "area_name": "Douglas County",
            "value": 11.7
        }, {
            "fips_code": 46045,
            "state": "SD",
            "area_name": "Edmunds County",
            "value": 11.3
        }, {
            "fips_code": 46047,
            "state": "SD",
            "area_name": "Fall River County",
            "value": 18.8
        }, {
            "fips_code": 46049,
            "state": "SD",
            "area_name": "Faulk County",
            "value": 26.1
        }, {
            "fips_code": 46051,
            "state": "SD",
            "area_name": "Grant County",
            "value": 12.3
        }, {
            "fips_code": 46053,
            "state": "SD",
            "area_name": "Gregory County",
            "value": 18.7
        }, {
            "fips_code": 46055,
            "state": "SD",
            "area_name": "Haakon County",
            "value": 13.6
        }, {
            "fips_code": 46057,
            "state": "SD",
            "area_name": "Hamlin County",
            "value": 6.5
        }, {
            "fips_code": 46059,
            "state": "SD",
            "area_name": "Hand County",
            "value": 7.8
        }, {
            "fips_code": 46061,
            "state": "SD",
            "area_name": "Hanson County",
            "value": 11.1
        }, {
            "fips_code": 46063,
            "state": "SD",
            "area_name": "Harding County",
            "value": 14.3
        }, {
            "fips_code": 46065,
            "state": "SD",
            "area_name": "Hughes County",
            "value": 11.6
        }, {
            "fips_code": 46067,
            "state": "SD",
            "area_name": "Hutchinson County",
            "value": 16.5
        }, {
            "fips_code": 46069,
            "state": "SD",
            "area_name": "Hyde County",
            "value": 14.9
        }, {
            "fips_code": 46071,
            "state": "SD",
            "area_name": "Jackson County",
            "value": 36.8
        }, {
            "fips_code": 46073,
            "state": "SD",
            "area_name": "Jerauld County",
            "value": 15.2
        }, {
            "fips_code": 46075,
            "state": "SD",
            "area_name": "Jones County",
            "value": 22.6
        }, {
            "fips_code": 46077,
            "state": "SD",
            "area_name": "Kingsbury County",
            "value": 10.6
        }, {
            "fips_code": 46079,
            "state": "SD",
            "area_name": "Lake County",
            "value": 10.2
        }, {
            "fips_code": 46081,
            "state": "SD",
            "area_name": "Lawrence County",
            "value": 14.2
        }, {
            "fips_code": 46083,
            "state": "SD",
            "area_name": "Lincoln County",
            "value": 4.1
        }, {
            "fips_code": 46085,
            "state": "SD",
            "area_name": "Lyman County",
            "value": 28.1
        }, {
            "fips_code": 46087,
            "state": "SD",
            "area_name": "McCook County",
            "value": 11.1
        }, {
            "fips_code": 46089,
            "state": "SD",
            "area_name": "McPherson County",
            "value": 23.0
        }, {
            "fips_code": 46091,
            "state": "SD",
            "area_name": "Marshall County",
            "value": 17.8
        }, {
            "fips_code": 46093,
            "state": "SD",
            "area_name": "Meade County",
            "value": 10.5
        }, {
            "fips_code": 46095,
            "state": "SD",
            "area_name": "Mellette County",
            "value": 40.2
        }, {
            "fips_code": 46097,
            "state": "SD",
            "area_name": "Miner County",
            "value": 13.4
        }, {
            "fips_code": 46099,
            "state": "SD",
            "area_name": "Minnehaha County",
            "value": 10.0
        }, {
            "fips_code": 46101,
            "state": "SD",
            "area_name": "Moody County",
            "value": 12.4
        }, {
            "fips_code": 46102,
            "state": "SD",
            "area_name": "Oglala Lakota County",
            "value": 41.4
        }, {
            "fips_code": 46103,
            "state": "SD",
            "area_name": "Pennington County",
            "value": 15.6
        }, {
            "fips_code": 46105,
            "state": "SD",
            "area_name": "Perkins County",
            "value": 19.2
        }, {
            "fips_code": 46107,
            "state": "SD",
            "area_name": "Potter County",
            "value": 12.4
        }, {
            "fips_code": 46109,
            "state": "SD",
            "area_name": "Roberts County",
            "value": 22.4
        }, {
            "fips_code": 46111,
            "state": "SD",
            "area_name": "Sanborn County",
            "value": 17.6
        }, {
            "fips_code": 46115,
            "state": "SD",
            "area_name": "Spink County",
            "value": 14.7
        }, {
            "fips_code": 46117,
            "state": "SD",
            "area_name": "Stanley County",
            "value": 10.4
        }, {
            "fips_code": 46119,
            "state": "SD",
            "area_name": "Sully County",
            "value": 5.7
        }, {
            "fips_code": 46121,
            "state": "SD",
            "area_name": "Todd County",
            "value": 48.1
        }, {
            "fips_code": 46123,
            "state": "SD",
            "area_name": "Tripp County",
            "value": 29.1
        }, {
            "fips_code": 46125,
            "state": "SD",
            "area_name": "Turner County",
            "value": 10.0
        }, {
            "fips_code": 46127,
            "state": "SD",
            "area_name": "Union County",
            "value": 5.6
        }, {
            "fips_code": 46129,
            "state": "SD",
            "area_name": "Walworth County",
            "value": 27.2
        }, {
            "fips_code": 46135,
            "state": "SD",
            "area_name": "Yankton County",
            "value": 11.8
        }, {
            "fips_code": 46137,
            "state": "SD",
            "area_name": "Ziebach County",
            "value": 45.8
        }, {
            "fips_code": 47000,
            "state": "TN",
            "area_name": "Tennessee",
            "value": 18.4
        }, {
            "fips_code": 47001,
            "state": "TN",
            "area_name": "Anderson County",
            "value": 18.7
        }, {
            "fips_code": 47003,
            "state": "TN",
            "area_name": "Bedford County",
            "value": 20.3
        }, {
            "fips_code": 47005,
            "state": "TN",
            "area_name": "Benton County",
            "value": 29.1
        }, {
            "fips_code": 47007,
            "state": "TN",
            "area_name": "Bledsoe County",
            "value": 28.9
        }, {
            "fips_code": 47009,
            "state": "TN",
            "area_name": "Blount County",
            "value": 13.9
        }, {
            "fips_code": 47011,
            "state": "TN",
            "area_name": "Bradley County",
            "value": 15.2
        }, {
            "fips_code": 47013,
            "state": "TN",
            "area_name": "Campbell County",
            "value": 25.3
        }, {
            "fips_code": 47015,
            "state": "TN",
            "area_name": "Cannon County",
            "value": 21.1
        }, {
            "fips_code": 47017,
            "state": "TN",
            "area_name": "Carroll County",
            "value": 22.1
        }, {
            "fips_code": 47019,
            "state": "TN",
            "area_name": "Carter County",
            "value": 25.1
        }, {
            "fips_code": 47021,
            "state": "TN",
            "area_name": "Cheatham County",
            "value": 12.9
        }, {
            "fips_code": 47023,
            "state": "TN",
            "area_name": "Chester County",
            "value": 23.3
        }, {
            "fips_code": 47025,
            "state": "TN",
            "area_name": "Claiborne County",
            "value": 24.5
        }, {
            "fips_code": 47027,
            "state": "TN",
            "area_name": "Clay County",
            "value": 27.3
        }, {
            "fips_code": 47029,
            "state": "TN",
            "area_name": "Cocke County",
            "value": 33.0
        }, {
            "fips_code": 47031,
            "state": "TN",
            "area_name": "Coffee County",
            "value": 20.5
        }, {
            "fips_code": 47033,
            "state": "TN",
            "area_name": "Crockett County",
            "value": 20.7
        }, {
            "fips_code": 47035,
            "state": "TN",
            "area_name": "Cumberland County",
            "value": 23.9
        }, {
            "fips_code": 47037,
            "state": "TN",
            "area_name": "Davidson County",
            "value": 21.1
        }, {
            "fips_code": 47039,
            "state": "TN",
            "area_name": "Decatur County",
            "value": 24.3
        }, {
            "fips_code": 47041,
            "state": "TN",
            "area_name": "DeKalb County",
            "value": 21.3
        }, {
            "fips_code": 47043,
            "state": "TN",
            "area_name": "Dickson County",
            "value": 17.2
        }, {
            "fips_code": 47045,
            "state": "TN",
            "area_name": "Dyer County",
            "value": 22.7
        }, {
            "fips_code": 47047,
            "state": "TN",
            "area_name": "Fayette County",
            "value": 18.6
        }, {
            "fips_code": 47049,
            "state": "TN",
            "area_name": "Fentress County",
            "value": 26.5
        }, {
            "fips_code": 47051,
            "state": "TN",
            "area_name": "Franklin County",
            "value": 15.9
        }, {
            "fips_code": 47053,
            "state": "TN",
            "area_name": "Gibson County",
            "value": 19.4
        }, {
            "fips_code": 47055,
            "state": "TN",
            "area_name": "Giles County",
            "value": 19.9
        }, {
            "fips_code": 47057,
            "state": "TN",
            "area_name": "Grainger County",
            "value": 23.1
        }, {
            "fips_code": 47059,
            "state": "TN",
            "area_name": "Greene County",
            "value": 20.2
        }, {
            "fips_code": 47061,
            "state": "TN",
            "area_name": "Grundy County",
            "value": 29.3
        }, {
            "fips_code": 47063,
            "state": "TN",
            "area_name": "Hamblen County",
            "value": 25.2
        }, {
            "fips_code": 47065,
            "state": "TN",
            "area_name": "Hamilton County",
            "value": 16.8
        }, {
            "fips_code": 47067,
            "state": "TN",
            "area_name": "Hancock County",
            "value": 42.6
        }, {
            "fips_code": 47069,
            "state": "TN",
            "area_name": "Hardeman County",
            "value": 27.3
        }, {
            "fips_code": 47071,
            "state": "TN",
            "area_name": "Hardin County",
            "value": 26.2
        }, {
            "fips_code": 47073,
            "state": "TN",
            "area_name": "Hawkins County",
            "value": 22.7
        }, {
            "fips_code": 47075,
            "state": "TN",
            "area_name": "Haywood County",
            "value": 31.4
        }, {
            "fips_code": 47077,
            "state": "TN",
            "area_name": "Henderson County",
            "value": 19.9
        }, {
            "fips_code": 47079,
            "state": "TN",
            "area_name": "Henry County",
            "value": 24.0
        }, {
            "fips_code": 47081,
            "state": "TN",
            "area_name": "Hickman County",
            "value": 21.7
        }, {
            "fips_code": 47083,
            "state": "TN",
            "area_name": "Houston County",
            "value": 23.3
        }, {
            "fips_code": 47085,
            "state": "TN",
            "area_name": "Humphreys County",
            "value": 19.3
        }, {
            "fips_code": 47087,
            "state": "TN",
            "area_name": "Jackson County",
            "value": 26.8
        }, {
            "fips_code": 47089,
            "state": "TN",
            "area_name": "Jefferson County",
            "value": 21.2
        }, {
            "fips_code": 47091,
            "state": "TN",
            "area_name": "Johnson County",
            "value": 34.1
        }, {
            "fips_code": 47093,
            "state": "TN",
            "area_name": "Knox County",
            "value": 12.6
        }, {
            "fips_code": 47095,
            "state": "TN",
            "area_name": "Lake County",
            "value": 38.9
        }, {
            "fips_code": 47097,
            "state": "TN",
            "area_name": "Lauderdale County",
            "value": 29.3
        }, {
            "fips_code": 47099,
            "state": "TN",
            "area_name": "Lawrence County",
            "value": 19.7
        }, {
            "fips_code": 47101,
            "state": "TN",
            "area_name": "Lewis County",
            "value": 22.0
        }, {
            "fips_code": 47103,
            "state": "TN",
            "area_name": "Lincoln County",
            "value": 21.1
        }, {
            "fips_code": 47105,
            "state": "TN",
            "area_name": "Loudon County",
            "value": 15.5
        }, {
            "fips_code": 47107,
            "state": "TN",
            "area_name": "McMinn County",
            "value": 21.3
        }, {
            "fips_code": 47109,
            "state": "TN",
            "area_name": "McNairy County",
            "value": 21.7
        }, {
            "fips_code": 47111,
            "state": "TN",
            "area_name": "Macon County",
            "value": 22.9
        }, {
            "fips_code": 47113,
            "state": "TN",
            "area_name": "Madison County",
            "value": 25.0
        }, {
            "fips_code": 47115,
            "state": "TN",
            "area_name": "Marion County",
            "value": 22.8
        }, {
            "fips_code": 47117,
            "state": "TN",
            "area_name": "Marshall County",
            "value": 16.0
        }, {
            "fips_code": 47119,
            "state": "TN",
            "area_name": "Maury County",
            "value": 16.2
        }, {
            "fips_code": 47121,
            "state": "TN",
            "area_name": "Meigs County",
            "value": 24.6
        }, {
            "fips_code": 47123,
            "state": "TN",
            "area_name": "Monroe County",
            "value": 21.3
        }, {
            "fips_code": 47125,
            "state": "TN",
            "area_name": "Montgomery County",
            "value": 14.5
        }, {
            "fips_code": 47127,
            "state": "TN",
            "area_name": "Moore County",
            "value": 14.6
        }, {
            "fips_code": 47129,
            "state": "TN",
            "area_name": "Morgan County",
            "value": 22.9
        }, {
            "fips_code": 47131,
            "state": "TN",
            "area_name": "Obion County",
            "value": 22.6
        }, {
            "fips_code": 47133,
            "state": "TN",
            "area_name": "Overton County",
            "value": 19.2
        }, {
            "fips_code": 47135,
            "state": "TN",
            "area_name": "Perry County",
            "value": 24.8
        }, {
            "fips_code": 47137,
            "state": "TN",
            "area_name": "Pickett County",
            "value": 25.4
        }, {
            "fips_code": 47139,
            "state": "TN",
            "area_name": "Polk County",
            "value": 21.0
        }, {
            "fips_code": 47141,
            "state": "TN",
            "area_name": "Putnam County",
            "value": 17.9
        }, {
            "fips_code": 47143,
            "state": "TN",
            "area_name": "Rhea County",
            "value": 23.0
        }, {
            "fips_code": 47145,
            "state": "TN",
            "area_name": "Roane County",
            "value": 19.5
        }, {
            "fips_code": 47147,
            "state": "TN",
            "area_name": "Robertson County",
            "value": 13.3
        }, {
            "fips_code": 47149,
            "state": "TN",
            "area_name": "Rutherford County",
            "value": 10.6
        }, {
            "fips_code": 47151,
            "state": "TN",
            "area_name": "Scott County",
            "value": 29.2
        }, {
            "fips_code": 47153,
            "state": "TN",
            "area_name": "Sequatchie County",
            "value": 22.7
        }, {
            "fips_code": 47155,
            "state": "TN",
            "area_name": "Sevier County",
            "value": 19.2
        }, {
            "fips_code": 47157,
            "state": "TN",
            "area_name": "Shelby County",
            "value": 23.9
        }, {
            "fips_code": 47159,
            "state": "TN",
            "area_name": "Smith County",
            "value": 16.8
        }, {
            "fips_code": 47161,
            "state": "TN",
            "area_name": "Stewart County",
            "value": 20.5
        }, {
            "fips_code": 47163,
            "state": "TN",
            "area_name": "Sullivan County",
            "value": 25.3
        }, {
            "fips_code": 47165,
            "state": "TN",
            "area_name": "Sumner County",
            "value": 10.4
        }, {
            "fips_code": 47167,
            "state": "TN",
            "area_name": "Tipton County",
            "value": 16.9
        }, {
            "fips_code": 47169,
            "state": "TN",
            "area_name": "Trousdale County",
            "value": 18.5
        }, {
            "fips_code": 47171,
            "state": "TN",
            "area_name": "Unicoi County",
            "value": 22.0
        }, {
            "fips_code": 47173,
            "state": "TN",
            "area_name": "Union County",
            "value": 23.5
        }, {
            "fips_code": 47175,
            "state": "TN",
            "area_name": "Van Buren County",
            "value": 26.7
        }, {
            "fips_code": 47177,
            "state": "TN",
            "area_name": "Warren County",
            "value": 22.6
        }, {
            "fips_code": 47179,
            "state": "TN",
            "area_name": "Washington County",
            "value": 18.3
        }, {
            "fips_code": 47181,
            "state": "TN",
            "area_name": "Wayne County",
            "value": 21.8
        }, {
            "fips_code": 47183,
            "state": "TN",
            "area_name": "Weakley County",
            "value": 21.4
        }, {
            "fips_code": 47185,
            "state": "TN",
            "area_name": "White County",
            "value": 23.0
        }, {
            "fips_code": 47187,
            "state": "TN",
            "area_name": "Williamson County",
            "value": 3.9
        }, {
            "fips_code": 47189,
            "state": "TN",
            "area_name": "Wilson County",
            "value": 8.300000000000001
        }, {
            "fips_code": 48000,
            "state": "TX",
            "area_name": "Texas",
            "value": 19.5
        }, {
            "fips_code": 48001,
            "state": "TX",
            "area_name": "Anderson County",
            "value": 24.5
        }, {
            "fips_code": 48003,
            "state": "TX",
            "area_name": "Andrews County",
            "value": 15.4
        }, {
            "fips_code": 48005,
            "state": "TX",
            "area_name": "Angelina County",
            "value": 26.4
        }, {
            "fips_code": 48007,
            "state": "TX",
            "area_name": "Aransas County",
            "value": 27.8
        }, {
            "fips_code": 48009,
            "state": "TX",
            "area_name": "Archer County",
            "value": 12.5
        }, {
            "fips_code": 48011,
            "state": "TX",
            "area_name": "Armstrong County",
            "value": 13.2
        }, {
            "fips_code": 48013,
            "state": "TX",
            "area_name": "Atascosa County",
            "value": 23.8
        }, {
            "fips_code": 48015,
            "state": "TX",
            "area_name": "Austin County",
            "value": 16.5
        }, {
            "fips_code": 48017,
            "state": "TX",
            "area_name": "Bailey County",
            "value": 24.7
        }, {
            "fips_code": 48019,
            "state": "TX",
            "area_name": "Bandera County",
            "value": 19.4
        }, {
            "fips_code": 48021,
            "state": "TX",
            "area_name": "Bastrop County",
            "value": 18.1
        }, {
            "fips_code": 48023,
            "state": "TX",
            "area_name": "Baylor County",
            "value": 25.2
        }, {
            "fips_code": 48025,
            "state": "TX",
            "area_name": "Bee County",
            "value": 30.9
        }, {
            "fips_code": 48027,
            "state": "TX",
            "area_name": "Bell County",
            "value": 19.7
        }, {
            "fips_code": 48029,
            "state": "TX",
            "area_name": "Bexar County",
            "value": 20.8
        }, {
            "fips_code": 48031,
            "state": "TX",
            "area_name": "Blanco County",
            "value": 14.2
        }, {
            "fips_code": 48033,
            "state": "TX",
            "area_name": "Borden County",
            "value": 12.0
        }, {
            "fips_code": 48035,
            "state": "TX",
            "area_name": "Bosque County",
            "value": 19.8
        }, {
            "fips_code": 48037,
            "state": "TX",
            "area_name": "Bowie County",
            "value": 23.6
        }, {
            "fips_code": 48039,
            "state": "TX",
            "area_name": "Brazoria County",
            "value": 11.8
        }, {
            "fips_code": 48041,
            "state": "TX",
            "area_name": "Brazos County",
            "value": 23.5
        }, {
            "fips_code": 48043,
            "state": "TX",
            "area_name": "Brewster County",
            "value": 20.8
        }, {
            "fips_code": 48045,
            "state": "TX",
            "area_name": "Briscoe County",
            "value": 24.3
        }, {
            "fips_code": 48047,
            "state": "TX",
            "area_name": "Brooks County",
            "value": 45.6
        }, {
            "fips_code": 48049,
            "state": "TX",
            "area_name": "Brown County",
            "value": 22.3
        }, {
            "fips_code": 48051,
            "state": "TX",
            "area_name": "Burleson County",
            "value": 20.7
        }, {
            "fips_code": 48053,
            "state": "TX",
            "area_name": "Burnet County",
            "value": 16.3
        }, {
            "fips_code": 48055,
            "state": "TX",
            "area_name": "Caldwell County",
            "value": 19.4
        }, {
            "fips_code": 48057,
            "state": "TX",
            "area_name": "Calhoun County",
            "value": 22.1
        }, {
            "fips_code": 48059,
            "state": "TX",
            "area_name": "Callahan County",
            "value": 19.1
        }, {
            "fips_code": 48061,
            "state": "TX",
            "area_name": "Cameron County",
            "value": 32.6
        }, {
            "fips_code": 48063,
            "state": "TX",
            "area_name": "Camp County",
            "value": 26.0
        }, {
            "fips_code": 48065,
            "state": "TX",
            "area_name": "Carson County",
            "value": 13.0
        }, {
            "fips_code": 48067,
            "state": "TX",
            "area_name": "Cass County",
            "value": 29.9
        }, {
            "fips_code": 48069,
            "state": "TX",
            "area_name": "Castro County",
            "value": 21.0
        }, {
            "fips_code": 48071,
            "state": "TX",
            "area_name": "Chambers County",
            "value": 12.7
        }, {
            "fips_code": 48073,
            "state": "TX",
            "area_name": "Cherokee County",
            "value": 25.1
        }, {
            "fips_code": 48075,
            "state": "TX",
            "area_name": "Childress County",
            "value": 24.0
        }, {
            "fips_code": 48077,
            "state": "TX",
            "area_name": "Clay County",
            "value": 15.1
        }, {
            "fips_code": 48079,
            "state": "TX",
            "area_name": "Cochran County",
            "value": 31.4
        }, {
            "fips_code": 48081,
            "state": "TX",
            "area_name": "Coke County",
            "value": 22.4
        }, {
            "fips_code": 48083,
            "state": "TX",
            "area_name": "Coleman County",
            "value": 31.8
        }, {
            "fips_code": 48085,
            "state": "TX",
            "area_name": "Collin County",
            "value": 7.9
        }, {
            "fips_code": 48087,
            "state": "TX",
            "area_name": "Collingsworth County",
            "value": 27.1
        }, {
            "fips_code": 48089,
            "state": "TX",
            "area_name": "Colorado County",
            "value": 21.8
        }, {
            "fips_code": 48091,
            "state": "TX",
            "area_name": "Comal County",
            "value": 9.6
        }, {
            "fips_code": 48093,
            "state": "TX",
            "area_name": "Comanche County",
            "value": 24.7
        }, {
            "fips_code": 48095,
            "state": "TX",
            "area_name": "Concho County",
            "value": 25.6
        }, {
            "fips_code": 48097,
            "state": "TX",
            "area_name": "Cooke County",
            "value": 19.3
        }, {
            "fips_code": 48099,
            "state": "TX",
            "area_name": "Coryell County",
            "value": 17.9
        }, {
            "fips_code": 48101,
            "state": "TX",
            "area_name": "Cottle County",
            "value": 34.0
        }, {
            "fips_code": 48103,
            "state": "TX",
            "area_name": "Crane County",
            "value": 17.9
        }, {
            "fips_code": 48105,
            "state": "TX",
            "area_name": "Crockett County",
            "value": 22.0
        }, {
            "fips_code": 48107,
            "state": "TX",
            "area_name": "Crosby County",
            "value": 36.7
        }, {
            "fips_code": 48109,
            "state": "TX",
            "area_name": "Culberson County",
            "value": 29.9
        }, {
            "fips_code": 48111,
            "state": "TX",
            "area_name": "Dallam County",
            "value": 16.4
        }, {
            "fips_code": 48113,
            "state": "TX",
            "area_name": "Dallas County",
            "value": 20.3
        }, {
            "fips_code": 48115,
            "state": "TX",
            "area_name": "Dawson County",
            "value": 27.8
        }, {
            "fips_code": 48117,
            "state": "TX",
            "area_name": "Deaf Smith County",
            "value": 24.1
        }, {
            "fips_code": 48119,
            "state": "TX",
            "area_name": "Delta County",
            "value": 23.3
        }, {
            "fips_code": 48121,
            "state": "TX",
            "area_name": "Denton County",
            "value": 7.6
        }, {
            "fips_code": 48123,
            "state": "TX",
            "area_name": "DeWitt County",
            "value": 25.0
        }, {
            "fips_code": 48125,
            "state": "TX",
            "area_name": "Dickens County",
            "value": 27.4
        }, {
            "fips_code": 48127,
            "state": "TX",
            "area_name": "Dimmit County",
            "value": 36.5
        }, {
            "fips_code": 48129,
            "state": "TX",
            "area_name": "Donley County",
            "value": 24.7
        }, {
            "fips_code": 48131,
            "state": "TX",
            "area_name": "Duval County",
            "value": 43.3
        }, {
            "fips_code": 48133,
            "state": "TX",
            "area_name": "Eastland County",
            "value": 25.5
        }, {
            "fips_code": 48135,
            "state": "TX",
            "area_name": "Ector County",
            "value": 22.0
        }, {
            "fips_code": 48137,
            "state": "TX",
            "area_name": "Edwards County",
            "value": 32.6
        }, {
            "fips_code": 48139,
            "state": "TX",
            "area_name": "Ellis County",
            "value": 12.4
        }, {
            "fips_code": 48141,
            "state": "TX",
            "area_name": "El Paso County",
            "value": 27.4
        }, {
            "fips_code": 48143,
            "state": "TX",
            "area_name": "Erath County",
            "value": 20.4
        }, {
            "fips_code": 48145,
            "state": "TX",
            "area_name": "Falls County",
            "value": 27.5
        }, {
            "fips_code": 48147,
            "state": "TX",
            "area_name": "Fannin County",
            "value": 17.9
        }, {
            "fips_code": 48149,
            "state": "TX",
            "area_name": "Fayette County",
            "value": 15.5
        }, {
            "fips_code": 48151,
            "state": "TX",
            "area_name": "Fisher County",
            "value": 21.6
        }, {
            "fips_code": 48153,
            "state": "TX",
            "area_name": "Floyd County",
            "value": 30.5
        }, {
            "fips_code": 48155,
            "state": "TX",
            "area_name": "Foard County",
            "value": 31.8
        }, {
            "fips_code": 48157,
            "state": "TX",
            "area_name": "Fort Bend County",
            "value": 8.9
        }, {
            "fips_code": 48159,
            "state": "TX",
            "area_name": "Franklin County",
            "value": 22.4
        }, {
            "fips_code": 48161,
            "state": "TX",
            "area_name": "Freestone County",
            "value": 21.2
        }, {
            "fips_code": 48163,
            "state": "TX",
            "area_name": "Frio County",
            "value": 33.7
        }, {
            "fips_code": 48165,
            "state": "TX",
            "area_name": "Gaines County",
            "value": 20.3
        }, {
            "fips_code": 48167,
            "state": "TX",
            "area_name": "Galveston County",
            "value": 16.4
        }, {
            "fips_code": 48169,
            "state": "TX",
            "area_name": "Garza County",
            "value": 26.7
        }, {
            "fips_code": 48171,
            "state": "TX",
            "area_name": "Gillespie County",
            "value": 14.8
        }, {
            "fips_code": 48173,
            "state": "TX",
            "area_name": "Glasscock County",
            "value": 10.3
        }, {
            "fips_code": 48175,
            "state": "TX",
            "area_name": "Goliad County",
            "value": 24.3
        }, {
            "fips_code": 48177,
            "state": "TX",
            "area_name": "Gonzales County",
            "value": 23.1
        }, {
            "fips_code": 48179,
            "state": "TX",
            "area_name": "Gray County",
            "value": 23.6
        }, {
            "fips_code": 48181,
            "state": "TX",
            "area_name": "Grayson County",
            "value": 14.8
        }, {
            "fips_code": 48183,
            "state": "TX",
            "area_name": "Gregg County",
            "value": 21.6
        }, {
            "fips_code": 48185,
            "state": "TX",
            "area_name": "Grimes County",
            "value": 21.7
        }, {
            "fips_code": 48187,
            "state": "TX",
            "area_name": "Guadalupe County",
            "value": 12.5
        }, {
            "fips_code": 48189,
            "state": "TX",
            "area_name": "Hale County",
            "value": 28.1
        }, {
            "fips_code": 48191,
            "state": "TX",
            "area_name": "Hall County",
            "value": 42.3
        }, {
            "fips_code": 48193,
            "state": "TX",
            "area_name": "Hamilton County",
            "value": 22.8
        }, {
            "fips_code": 48195,
            "state": "TX",
            "area_name": "Hansford County",
            "value": 16.7
        }, {
            "fips_code": 48197,
            "state": "TX",
            "area_name": "Hardeman County",
            "value": 26.3
        }, {
            "fips_code": 48199,
            "state": "TX",
            "area_name": "Hardin County",
            "value": 15.1
        }, {
            "fips_code": 48201,
            "state": "TX",
            "area_name": "Harris County",
            "value": 23.0
        }, {
            "fips_code": 48203,
            "state": "TX",
            "area_name": "Harrison County",
            "value": 20.0
        }, {
            "fips_code": 48205,
            "state": "TX",
            "area_name": "Hartley County",
            "value": 8.199999999999999
        }, {
            "fips_code": 48207,
            "state": "TX",
            "area_name": "Haskell County",
            "value": 27.4
        }, {
            "fips_code": 48209,
            "state": "TX",
            "area_name": "Hays County",
            "value": 12.6
        }, {
            "fips_code": 48211,
            "state": "TX",
            "area_name": "Hemphill County",
            "value": 14.9
        }, {
            "fips_code": 48213,
            "state": "TX",
            "area_name": "Henderson County",
            "value": 22.7
        }, {
            "fips_code": 48215,
            "state": "TX",
            "area_name": "Hidalgo County",
            "value": 37.6
        }, {
            "fips_code": 48217,
            "state": "TX",
            "area_name": "Hill County",
            "value": 21.3
        }, {
            "fips_code": 48219,
            "state": "TX",
            "area_name": "Hockley County",
            "value": 22.8
        }, {
            "fips_code": 48221,
            "state": "TX",
            "area_name": "Hood County",
            "value": 16.1
        }, {
            "fips_code": 48223,
            "state": "TX",
            "area_name": "Hopkins County",
            "value": 20.6
        }, {
            "fips_code": 48225,
            "state": "TX",
            "area_name": "Houston County",
            "value": 28.8
        }, {
            "fips_code": 48227,
            "state": "TX",
            "area_name": "Howard County",
            "value": 19.4
        }, {
            "fips_code": 48229,
            "state": "TX",
            "area_name": "Hudspeth County",
            "value": 34.8
        }, {
            "fips_code": 48231,
            "state": "TX",
            "area_name": "Hunt County",
            "value": 17.6
        }, {
            "fips_code": 48233,
            "state": "TX",
            "area_name": "Hutchinson County",
            "value": 17.5
        }, {
            "fips_code": 48235,
            "state": "TX",
            "area_name": "Irion County",
            "value": 12.4
        }, {
            "fips_code": 48237,
            "state": "TX",
            "area_name": "Jack County",
            "value": 20.6
        }, {
            "fips_code": 48239,
            "state": "TX",
            "area_name": "Jackson County",
            "value": 18.1
        }, {
            "fips_code": 48241,
            "state": "TX",
            "area_name": "Jasper County",
            "value": 32.2
        }, {
            "fips_code": 48243,
            "state": "TX",
            "area_name": "Jeff Davis County",
            "value": 57.1
        }, {
            "fips_code": 48245,
            "state": "TX",
            "area_name": "Jefferson County",
            "value": 27.0
        }, {
            "fips_code": 48247,
            "state": "TX",
            "area_name": "Jim Hogg County",
            "value": 37.1
        }, {
            "fips_code": 48249,
            "state": "TX",
            "area_name": "Jim Wells County",
            "value": 29.3
        }, {
            "fips_code": 48251,
            "state": "TX",
            "area_name": "Johnson County",
            "value": 12.8
        }, {
            "fips_code": 48253,
            "state": "TX",
            "area_name": "Jones County",
            "value": 22.0
        }, {
            "fips_code": 48255,
            "state": "TX",
            "area_name": "Karnes County",
            "value": 25.0
        }, {
            "fips_code": 48257,
            "state": "TX",
            "area_name": "Kaufman County",
            "value": 12.0
        }, {
            "fips_code": 48259,
            "state": "TX",
            "area_name": "Kendall County",
            "value": 9.199999999999999
        }, {
            "fips_code": 48261,
            "state": "TX",
            "area_name": "Kenedy County",
            "value": 23.4
        }, {
            "fips_code": 48263,
            "state": "TX",
            "area_name": "Kent County",
            "value": 15.8
        }, {
            "fips_code": 48265,
            "state": "TX",
            "area_name": "Kerr County",
            "value": 20.1
        }, {
            "fips_code": 48267,
            "state": "TX",
            "area_name": "Kimble County",
            "value": 32.1
        }, {
            "fips_code": 48269,
            "state": "TX",
            "area_name": "King County",
            "value": 14.5
        }, {
            "fips_code": 48271,
            "state": "TX",
            "area_name": "Kinney County",
            "value": 24.7
        }, {
            "fips_code": 48273,
            "state": "TX",
            "area_name": "Kleberg County",
            "value": 32.0
        }, {
            "fips_code": 48275,
            "state": "TX",
            "area_name": "Knox County",
            "value": 28.6
        }, {
            "fips_code": 48277,
            "state": "TX",
            "area_name": "Lamar County",
            "value": 25.2
        }, {
            "fips_code": 48279,
            "state": "TX",
            "area_name": "Lamb County",
            "value": 26.3
        }, {
            "fips_code": 48281,
            "state": "TX",
            "area_name": "Lampasas County",
            "value": 19.4
        }, {
            "fips_code": 48283,
            "state": "TX",
            "area_name": "La Salle County",
            "value": 32.3
        }, {
            "fips_code": 48285,
            "state": "TX",
            "area_name": "Lavaca County",
            "value": 15.9
        }, {
            "fips_code": 48287,
            "state": "TX",
            "area_name": "Lee County",
            "value": 18.1
        }, {
            "fips_code": 48289,
            "state": "TX",
            "area_name": "Leon County",
            "value": 23.8
        }, {
            "fips_code": 48291,
            "state": "TX",
            "area_name": "Liberty County",
            "value": 22.0
        }, {
            "fips_code": 48293,
            "state": "TX",
            "area_name": "Limestone County",
            "value": 24.5
        }, {
            "fips_code": 48295,
            "state": "TX",
            "area_name": "Lipscomb County",
            "value": 19.0
        }, {
            "fips_code": 48297,
            "state": "TX",
            "area_name": "Live Oak County",
            "value": 25.0
        }, {
            "fips_code": 48299,
            "state": "TX",
            "area_name": "Llano County",
            "value": 23.1
        }, {
            "fips_code": 48301,
            "state": "TX",
            "area_name": "Loving County",
            "value": 8.699999999999999
        }, {
            "fips_code": 48303,
            "state": "TX",
            "area_name": "Lubbock County",
            "value": 17.6
        }, {
            "fips_code": 48305,
            "state": "TX",
            "area_name": "Lynn County",
            "value": 23.2
        }, {
            "fips_code": 48307,
            "state": "TX",
            "area_name": "McCulloch County",
            "value": 29.0
        }, {
            "fips_code": 48309,
            "state": "TX",
            "area_name": "McLennan County",
            "value": 18.2
        }, {
            "fips_code": 48311,
            "state": "TX",
            "area_name": "McMullen County",
            "value": 17.6
        }, {
            "fips_code": 48313,
            "state": "TX",
            "area_name": "Madison County",
            "value": 23.4
        }, {
            "fips_code": 48315,
            "state": "TX",
            "area_name": "Marion County",
            "value": 34.3
        }, {
            "fips_code": 48317,
            "state": "TX",
            "area_name": "Martin County",
            "value": 20.1
        }, {
            "fips_code": 48319,
            "state": "TX",
            "area_name": "Mason County",
            "value": 20.8
        }, {
            "fips_code": 48321,
            "state": "TX",
            "area_name": "Matagorda County",
            "value": 31.7
        }, {
            "fips_code": 48323,
            "state": "TX",
            "area_name": "Maverick County",
            "value": 28.0
        }, {
            "fips_code": 48325,
            "state": "TX",
            "area_name": "Medina County",
            "value": 19.6
        }, {
            "fips_code": 48327,
            "state": "TX",
            "area_name": "Menard County",
            "value": 32.9
        }, {
            "fips_code": 48329,
            "state": "TX",
            "area_name": "Midland County",
            "value": 12.9
        }, {
            "fips_code": 48331,
            "state": "TX",
            "area_name": "Milam County",
            "value": 22.7
        }, {
            "fips_code": 48333,
            "state": "TX",
            "area_name": "Mills County",
            "value": 22.5
        }, {
            "fips_code": 48335,
            "state": "TX",
            "area_name": "Mitchell County",
            "value": 25.3
        }, {
            "fips_code": 48337,
            "state": "TX",
            "area_name": "Montague County",
            "value": 21.2
        }, {
            "fips_code": 48339,
            "state": "TX",
            "area_name": "Montgomery County",
            "value": 14.7
        }, {
            "fips_code": 48341,
            "state": "TX",
            "area_name": "Moore County",
            "value": 15.6
        }, {
            "fips_code": 48343,
            "state": "TX",
            "area_name": "Morris County",
            "value": 29.3
        }, {
            "fips_code": 48345,
            "state": "TX",
            "area_name": "Motley County",
            "value": 29.9
        }, {
            "fips_code": 48347,
            "state": "TX",
            "area_name": "Nacogdoches County",
            "value": 25.7
        }, {
            "fips_code": 48349,
            "state": "TX",
            "area_name": "Navarro County",
            "value": 22.3
        }, {
            "fips_code": 48351,
            "state": "TX",
            "area_name": "Newton County",
            "value": 27.3
        }, {
            "fips_code": 48353,
            "state": "TX",
            "area_name": "Nolan County",
            "value": 25.0
        }, {
            "fips_code": 48355,
            "state": "TX",
            "area_name": "Nueces County",
            "value": 24.9
        }, {
            "fips_code": 48357,
            "state": "TX",
            "area_name": "Ochiltree County",
            "value": 16.8
        }, {
            "fips_code": 48359,
            "state": "TX",
            "area_name": "Oldham County",
            "value": 30.6
        }, {
            "fips_code": 48361,
            "state": "TX",
            "area_name": "Orange County",
            "value": 18.6
        }, {
            "fips_code": 48363,
            "state": "TX",
            "area_name": "Palo Pinto County",
            "value": 22.3
        }, {
            "fips_code": 48365,
            "state": "TX",
            "area_name": "Panola County",
            "value": 19.3
        }, {
            "fips_code": 48367,
            "state": "TX",
            "area_name": "Parker County",
            "value": 9.5
        }, {
            "fips_code": 48369,
            "state": "TX",
            "area_name": "Parmer County",
            "value": 22.9
        }, {
            "fips_code": 48371,
            "state": "TX",
            "area_name": "Pecos County",
            "value": 28.9
        }, {
            "fips_code": 48373,
            "state": "TX",
            "area_name": "Polk County",
            "value": 24.7
        }, {
            "fips_code": 48375,
            "state": "TX",
            "area_name": "Potter County",
            "value": 28.3
        }, {
            "fips_code": 48377,
            "state": "TX",
            "area_name": "Presidio County",
            "value": 35.0
        }, {
            "fips_code": 48379,
            "state": "TX",
            "area_name": "Rains County",
            "value": 20.2
        }, {
            "fips_code": 48381,
            "state": "TX",
            "area_name": "Randall County",
            "value": 10.8
        }, {
            "fips_code": 48383,
            "state": "TX",
            "area_name": "Reagan County",
            "value": 18.0
        }, {
            "fips_code": 48385,
            "state": "TX",
            "area_name": "Real County",
            "value": 29.7
        }, {
            "fips_code": 48387,
            "state": "TX",
            "area_name": "Red River County",
            "value": 28.2
        }, {
            "fips_code": 48389,
            "state": "TX",
            "area_name": "Reeves County",
            "value": 26.3
        }, {
            "fips_code": 48391,
            "state": "TX",
            "area_name": "Refugio County",
            "value": 28.3
        }, {
            "fips_code": 48393,
            "state": "TX",
            "area_name": "Roberts County",
            "value": 9.1
        }, {
            "fips_code": 48395,
            "state": "TX",
            "area_name": "Robertson County",
            "value": 24.9
        }, {
            "fips_code": 48397,
            "state": "TX",
            "area_name": "Rockwall County",
            "value": 6.9
        }, {
            "fips_code": 48399,
            "state": "TX",
            "area_name": "Runnels County",
            "value": 23.1
        }, {
            "fips_code": 48401,
            "state": "TX",
            "area_name": "Rusk County",
            "value": 23.8
        }, {
            "fips_code": 48403,
            "state": "TX",
            "area_name": "Sabine County",
            "value": 27.6
        }, {
            "fips_code": 48405,
            "state": "TX",
            "area_name": "San Augustine County",
            "value": 32.0
        }, {
            "fips_code": 48407,
            "state": "TX",
            "area_name": "San Jacinto County",
            "value": 27.7
        }, {
            "fips_code": 48409,
            "state": "TX",
            "area_name": "San Patricio County",
            "value": 24.1
        }, {
            "fips_code": 48411,
            "state": "TX",
            "area_name": "San Saba County",
            "value": 27.3
        }, {
            "fips_code": 48413,
            "state": "TX",
            "area_name": "Schleicher County",
            "value": 21.6
        }, {
            "fips_code": 48415,
            "state": "TX",
            "area_name": "Scurry County",
            "value": 20.7
        }, {
            "fips_code": 48417,
            "state": "TX",
            "area_name": "Shackelford County",
            "value": 18.8
        }, {
            "fips_code": 48419,
            "state": "TX",
            "area_name": "Shelby County",
            "value": 29.2
        }, {
            "fips_code": 48421,
            "state": "TX",
            "area_name": "Sherman County",
            "value": 17.2
        }, {
            "fips_code": 48423,
            "state": "TX",
            "area_name": "Smith County",
            "value": 17.8
        }, {
            "fips_code": 48425,
            "state": "TX",
            "area_name": "Somervell County",
            "value": 15.0
        }, {
            "fips_code": 48427,
            "state": "TX",
            "area_name": "Starr County",
            "value": 40.6
        }, {
            "fips_code": 48429,
            "state": "TX",
            "area_name": "Stephens County",
            "value": 27.4
        }, {
            "fips_code": 48431,
            "state": "TX",
            "area_name": "Sterling County",
            "value": 16.1
        }, {
            "fips_code": 48433,
            "state": "TX",
            "area_name": "Stonewall County",
            "value": 22.7
        }, {
            "fips_code": 48435,
            "state": "TX",
            "area_name": "Sutton County",
            "value": 20.9
        }, {
            "fips_code": 48437,
            "state": "TX",
            "area_name": "Swisher County",
            "value": 29.4
        }, {
            "fips_code": 48439,
            "state": "TX",
            "area_name": "Tarrant County",
            "value": 15.3
        }, {
            "fips_code": 48441,
            "state": "TX",
            "area_name": "Taylor County",
            "value": 20.6
        }, {
            "fips_code": 48443,
            "state": "TX",
            "area_name": "Terrell County",
            "value": 21.4
        }, {
            "fips_code": 48445,
            "state": "TX",
            "area_name": "Terry County",
            "value": 31.0
        }, {
            "fips_code": 48447,
            "state": "TX",
            "area_name": "Throckmorton County",
            "value": 24.4
        }, {
            "fips_code": 48449,
            "state": "TX",
            "area_name": "Titus County",
            "value": 20.6
        }, {
            "fips_code": 48451,
            "state": "TX",
            "area_name": "Tom Green County",
            "value": 16.5
        }, {
            "fips_code": 48453,
            "state": "TX",
            "area_name": "Travis County",
            "value": 13.8
        }, {
            "fips_code": 48455,
            "state": "TX",
            "area_name": "Trinity County",
            "value": 27.3
        }, {
            "fips_code": 48457,
            "state": "TX",
            "area_name": "Tyler County",
            "value": 23.3
        }, {
            "fips_code": 48459,
            "state": "TX",
            "area_name": "Upshur County",
            "value": 19.9
        }, {
            "fips_code": 48461,
            "state": "TX",
            "area_name": "Upton County",
            "value": 20.9
        }, {
            "fips_code": 48463,
            "state": "TX",
            "area_name": "Uvalde County",
            "value": 31.1
        }, {
            "fips_code": 48465,
            "state": "TX",
            "area_name": "Val Verde County",
            "value": 27.8
        }, {
            "fips_code": 48467,
            "state": "TX",
            "area_name": "Van Zandt County",
            "value": 19.1
        }, {
            "fips_code": 48469,
            "state": "TX",
            "area_name": "Victoria County",
            "value": 21.9
        }, {
            "fips_code": 48471,
            "state": "TX",
            "area_name": "Walker County",
            "value": 24.8
        }, {
            "fips_code": 48473,
            "state": "TX",
            "area_name": "Waller County",
            "value": 17.7
        }, {
            "fips_code": 48475,
            "state": "TX",
            "area_name": "Ward County",
            "value": 20.0
        }, {
            "fips_code": 48477,
            "state": "TX",
            "area_name": "Washington County",
            "value": 19.8
        }, {
            "fips_code": 48479,
            "state": "TX",
            "area_name": "Webb County",
            "value": 29.0
        }, {
            "fips_code": 48481,
            "state": "TX",
            "area_name": "Wharton County",
            "value": 22.7
        }, {
            "fips_code": 48483,
            "state": "TX",
            "area_name": "Wheeler County",
            "value": 22.0
        }, {
            "fips_code": 48485,
            "state": "TX",
            "area_name": "Wichita County",
            "value": 19.3
        }, {
            "fips_code": 48487,
            "state": "TX",
            "area_name": "Wilbarger County",
            "value": 21.0
        }, {
            "fips_code": 48489,
            "state": "TX",
            "area_name": "Willacy County",
            "value": 39.4
        }, {
            "fips_code": 48491,
            "state": "TX",
            "area_name": "Williamson County",
            "value": 7.3
        }, {
            "fips_code": 48493,
            "state": "TX",
            "area_name": "Wilson County",
            "value": 13.4
        }, {
            "fips_code": 48495,
            "state": "TX",
            "area_name": "Winkler County",
            "value": 21.6
        }, {
            "fips_code": 48497,
            "state": "TX",
            "area_name": "Wise County",
            "value": 13.7
        }, {
            "fips_code": 48499,
            "state": "TX",
            "area_name": "Wood County",
            "value": 21.5
        }, {
            "fips_code": 48501,
            "state": "TX",
            "area_name": "Yoakum County",
            "value": 19.0
        }, {
            "fips_code": 48503,
            "state": "TX",
            "area_name": "Young County",
            "value": 21.1
        }, {
            "fips_code": 48505,
            "state": "TX",
            "area_name": "Zapata County",
            "value": 44.6
        }, {
            "fips_code": 48507,
            "state": "TX",
            "area_name": "Zavala County",
            "value": 38.8
        }, {
            "fips_code": 49000,
            "state": "UT",
            "area_name": "Utah",
            "value": 8.5
        }, {
            "fips_code": 49001,
            "state": "UT",
            "area_name": "Beaver County",
            "value": 13.0
        }, {
            "fips_code": 49003,
            "state": "UT",
            "area_name": "Box Elder County",
            "value": 8.1
        }, {
            "fips_code": 49005,
            "state": "UT",
            "area_name": "Cache County",
            "value": 9.0
        }, {
            "fips_code": 49007,
            "state": "UT",
            "area_name": "Carbon County",
            "value": 17.8
        }, {
            "fips_code": 49009,
            "state": "UT",
            "area_name": "Daggett County",
            "value": 11.2
        }, {
            "fips_code": 49011,
            "state": "UT",
            "area_name": "Davis County",
            "value": 6.4
        }, {
            "fips_code": 49013,
            "state": "UT",
            "area_name": "Duchesne County",
            "value": 16.3
        }, {
            "fips_code": 49015,
            "state": "UT",
            "area_name": "Emery County",
            "value": 14.8
        }, {
            "fips_code": 49017,
            "state": "UT",
            "area_name": "Garfield County",
            "value": 15.0
        }, {
            "fips_code": 49019,
            "state": "UT",
            "area_name": "Grand County",
            "value": 16.8
        }, {
            "fips_code": 49021,
            "state": "UT",
            "area_name": "Iron County",
            "value": 14.5
        }, {
            "fips_code": 49023,
            "state": "UT",
            "area_name": "Juab County",
            "value": 10.8
        }, {
            "fips_code": 49025,
            "state": "UT",
            "area_name": "Kane County",
            "value": 12.5
        }, {
            "fips_code": 49027,
            "state": "UT",
            "area_name": "Millard County",
            "value": 13.7
        }, {
            "fips_code": 49029,
            "state": "UT",
            "area_name": "Morgan County",
            "value": 4.6
        }, {
            "fips_code": 49031,
            "state": "UT",
            "area_name": "Piute County",
            "value": 25.3
        }, {
            "fips_code": 49033,
            "state": "UT",
            "area_name": "Rich County",
            "value": 11.3
        }, {
            "fips_code": 49035,
            "state": "UT",
            "area_name": "Salt Lake County",
            "value": 8.9
        }, {
            "fips_code": 49037,
            "state": "UT",
            "area_name": "San Juan County",
            "value": 30.4
        }, {
            "fips_code": 49039,
            "state": "UT",
            "area_name": "Sanpete County",
            "value": 12.0
        }, {
            "fips_code": 49041,
            "state": "UT",
            "area_name": "Sevier County",
            "value": 12.4
        }, {
            "fips_code": 49043,
            "state": "UT",
            "area_name": "Summit County",
            "value": 5.8
        }, {
            "fips_code": 49045,
            "state": "UT",
            "area_name": "Tooele County",
            "value": 6.0
        }, {
            "fips_code": 49047,
            "state": "UT",
            "area_name": "Uintah County",
            "value": 15.2
        }, {
            "fips_code": 49049,
            "state": "UT",
            "area_name": "Utah County",
            "value": 6.2
        }, {
            "fips_code": 49051,
            "state": "UT",
            "area_name": "Wasatch County",
            "value": 6.2
        }, {
            "fips_code": 49053,
            "state": "UT",
            "area_name": "Washington County",
            "value": 9.9
        }, {
            "fips_code": 49055,
            "state": "UT",
            "area_name": "Wayne County",
            "value": 15.3
        }, {
            "fips_code": 49057,
            "state": "UT",
            "area_name": "Weber County",
            "value": 10.4
        }, {
            "fips_code": 50000,
            "state": "VT",
            "area_name": "Vermont",
            "value": 11.2
        }, {
            "fips_code": 50001,
            "state": "VT",
            "area_name": "Addison County",
            "value": 9.300000000000001
        }, {
            "fips_code": 50003,
            "state": "VT",
            "area_name": "Bennington County",
            "value": 16.1
        }, {
            "fips_code": 50005,
            "state": "VT",
            "area_name": "Caledonia County",
            "value": 15.4
        }, {
            "fips_code": 50007,
            "state": "VT",
            "area_name": "Chittenden County",
            "value": 7.9
        }, {
            "fips_code": 50009,
            "state": "VT",
            "area_name": "Essex County",
            "value": 18.1
        }, {
            "fips_code": 50011,
            "state": "VT",
            "area_name": "Franklin County",
            "value": 10.9
        }, {
            "fips_code": 50013,
            "state": "VT",
            "area_name": "Grand Isle County",
            "value": 12.5
        }, {
            "fips_code": 50015,
            "state": "VT",
            "area_name": "Lamoille County",
            "value": 10.7
        }, {
            "fips_code": 50017,
            "state": "VT",
            "area_name": "Orange County",
            "value": 12.4
        }, {
            "fips_code": 50019,
            "state": "VT",
            "area_name": "Orleans County",
            "value": 16.7
        }, {
            "fips_code": 50021,
            "state": "VT",
            "area_name": "Rutland County",
            "value": 13.4
        }, {
            "fips_code": 50023,
            "state": "VT",
            "area_name": "Washington County",
            "value": 9.300000000000001
        }, {
            "fips_code": 50025,
            "state": "VT",
            "area_name": "Windham County",
            "value": 14.1
        }, {
            "fips_code": 50027,
            "state": "VT",
            "area_name": "Windsor County",
            "value": 9.9
        }, {
            "fips_code": 51000,
            "state": "VA",
            "area_name": "Virginia",
            "value": 13.3
        }, {
            "fips_code": 51001,
            "state": "VA",
            "area_name": "Accomack County",
            "value": 25.7
        }, {
            "fips_code": 51003,
            "state": "VA",
            "area_name": "Albemarle County",
            "value": 8.199999999999999
        }, {
            "fips_code": 51005,
            "state": "VA",
            "area_name": "Alleghany County",
            "value": 19.7
        }, {
            "fips_code": 51007,
            "state": "VA",
            "area_name": "Amelia County",
            "value": 13.8
        }, {
            "fips_code": 51009,
            "state": "VA",
            "area_name": "Amherst County",
            "value": 17.4
        }, {
            "fips_code": 51011,
            "state": "VA",
            "area_name": "Appomattox County",
            "value": 16.1
        }, {
            "fips_code": 51013,
            "state": "VA",
            "area_name": "Arlington County",
            "value": 9.5
        }, {
            "fips_code": 51015,
            "state": "VA",
            "area_name": "Augusta County",
            "value": 11.4
        }, {
            "fips_code": 51017,
            "state": "VA",
            "area_name": "Bath County",
            "value": 17.0
        }, {
            "fips_code": 51019,
            "state": "VA",
            "area_name": "Bedford County",
            "value": 12.0
        }, {
            "fips_code": 51021,
            "state": "VA",
            "area_name": "Bland County",
            "value": 17.4
        }, {
            "fips_code": 51023,
            "state": "VA",
            "area_name": "Botetourt County",
            "value": 8.0
        }, {
            "fips_code": 51025,
            "state": "VA",
            "area_name": "Brunswick County",
            "value": 30.5
        }, {
            "fips_code": 51027,
            "state": "VA",
            "area_name": "Buchanan County",
            "value": 34.2
        }, {
            "fips_code": 51029,
            "state": "VA",
            "area_name": "Buckingham County",
            "value": 21.7
        }, {
            "fips_code": 51031,
            "state": "VA",
            "area_name": "Campbell County",
            "value": 15.5
        }, {
            "fips_code": 51033,
            "state": "VA",
            "area_name": "Caroline County",
            "value": 15.5
        }, {
            "fips_code": 51035,
            "state": "VA",
            "area_name": "Carroll County",
            "value": 23.8
        }, {
            "fips_code": 51036,
            "state": "VA",
            "area_name": "Charles City County",
            "value": 19.0
        }, {
            "fips_code": 51037,
            "state": "VA",
            "area_name": "Charlotte County",
            "value": 25.8
        }, {
            "fips_code": 51041,
            "state": "VA",
            "area_name": "Chesterfield County",
            "value": 9.699999999999999
        }, {
            "fips_code": 51043,
            "state": "VA",
            "area_name": "Clarke County",
            "value": 7.9
        }, {
            "fips_code": 51045,
            "state": "VA",
            "area_name": "Craig County",
            "value": 18.5
        }, {
            "fips_code": 51047,
            "state": "VA",
            "area_name": "Culpeper County",
            "value": 12.0
        }, {
            "fips_code": 51049,
            "state": "VA",
            "area_name": "Cumberland County",
            "value": 23.9
        }, {
            "fips_code": 51051,
            "state": "VA",
            "area_name": "Dickenson County",
            "value": 27.7
        }, {
            "fips_code": 51053,
            "state": "VA",
            "area_name": "Dinwiddie County",
            "value": 16.2
        }, {
            "fips_code": 51057,
            "state": "VA",
            "area_name": "Essex County",
            "value": 20.5
        }, {
            "fips_code": 51059,
            "state": "VA",
            "area_name": "Fairfax County",
            "value": 8.800000000000001
        }, {
            "fips_code": 51061,
            "state": "VA",
            "area_name": "Fauquier County",
            "value": 7.2
        }, {
            "fips_code": 51063,
            "state": "VA",
            "area_name": "Floyd County",
            "value": 16.7
        }, {
            "fips_code": 51065,
            "state": "VA",
            "area_name": "Fluvanna County",
            "value": 9.300000000000001
        }, {
            "fips_code": 51067,
            "state": "VA",
            "area_name": "Franklin County",
            "value": 16.8
        }, {
            "fips_code": 51069,
            "state": "VA",
            "area_name": "Frederick County",
            "value": 9.9
        }, {
            "fips_code": 51071,
            "state": "VA",
            "area_name": "Giles County",
            "value": 17.3
        }, {
            "fips_code": 51073,
            "state": "VA",
            "area_name": "Gloucester County",
            "value": 12.2
        }, {
            "fips_code": 51075,
            "state": "VA",
            "area_name": "Goochland County",
            "value": 8.1
        }, {
            "fips_code": 51077,
            "state": "VA",
            "area_name": "Grayson County",
            "value": 24.4
        }, {
            "fips_code": 51079,
            "state": "VA",
            "area_name": "Greene County",
            "value": 11.8
        }, {
            "fips_code": 51081,
            "state": "VA",
            "area_name": "Greensville County",
            "value": 25.4
        }, {
            "fips_code": 51083,
            "state": "VA",
            "area_name": "Halifax County",
            "value": 22.4
        }, {
            "fips_code": 51085,
            "state": "VA",
            "area_name": "Hanover County",
            "value": 8.5
        }, {
            "fips_code": 51087,
            "state": "VA",
            "area_name": "Henrico County",
            "value": 9.9
        }, {
            "fips_code": 51089,
            "state": "VA",
            "area_name": "Henry County",
            "value": 24.6
        }, {
            "fips_code": 51091,
            "state": "VA",
            "area_name": "Highland County",
            "value": 21.6
        }, {
            "fips_code": 51093,
            "state": "VA",
            "area_name": "Isle of Wight County",
            "value": 11.4
        }, {
            "fips_code": 51095,
            "state": "VA",
            "area_name": "James City County",
            "value": 10.3
        }, {
            "fips_code": 51097,
            "state": "VA",
            "area_name": "King and Queen County",
            "value": 22.5
        }, {
            "fips_code": 51099,
            "state": "VA",
            "area_name": "King George County",
            "value": 8.4
        }, {
            "fips_code": 51101,
            "state": "VA",
            "area_name": "King William County",
            "value": 10.0
        }, {
            "fips_code": 51103,
            "state": "VA",
            "area_name": "Lancaster County",
            "value": 23.1
        }, {
            "fips_code": 51105,
            "state": "VA",
            "area_name": "Lee County",
            "value": 33.9
        }, {
            "fips_code": 51107,
            "state": "VA",
            "area_name": "Loudoun County",
            "value": 3.7
        }, {
            "fips_code": 51109,
            "state": "VA",
            "area_name": "Louisa County",
            "value": 14.1
        }, {
            "fips_code": 51111,
            "state": "VA",
            "area_name": "Lunenburg County",
            "value": 24.7
        }, {
            "fips_code": 51113,
            "state": "VA",
            "area_name": "Madison County",
            "value": 15.8
        }, {
            "fips_code": 51115,
            "state": "VA",
            "area_name": "Mathews County",
            "value": 15.3
        }, {
            "fips_code": 51117,
            "state": "VA",
            "area_name": "Mecklenburg County",
            "value": 22.9
        }, {
            "fips_code": 51119,
            "state": "VA",
            "area_name": "Middlesex County",
            "value": 21.1
        }, {
            "fips_code": 51121,
            "state": "VA",
            "area_name": "Montgomery County",
            "value": 14.0
        }, {
            "fips_code": 51125,
            "state": "VA",
            "area_name": "Nelson County",
            "value": 18.8
        }, {
            "fips_code": 51127,
            "state": "VA",
            "area_name": "New Kent County",
            "value": 7.2
        }, {
            "fips_code": 51131,
            "state": "VA",
            "area_name": "Northampton County",
            "value": 29.2
        }, {
            "fips_code": 51133,
            "state": "VA",
            "area_name": "Northumberland County",
            "value": 24.2
        }, {
            "fips_code": 51135,
            "state": "VA",
            "area_name": "Nottoway County",
            "value": 21.1
        }, {
            "fips_code": 51137,
            "state": "VA",
            "area_name": "Orange County",
            "value": 12.9
        }, {
            "fips_code": 51139,
            "state": "VA",
            "area_name": "Page County",
            "value": 18.0
        }, {
            "fips_code": 51141,
            "state": "VA",
            "area_name": "Patrick County",
            "value": 22.5
        }, {
            "fips_code": 51143,
            "state": "VA",
            "area_name": "Pittsylvania County",
            "value": 18.3
        }, {
            "fips_code": 51145,
            "state": "VA",
            "area_name": "Powhatan County",
            "value": 7.3
        }, {
            "fips_code": 51147,
            "state": "VA",
            "area_name": "Prince Edward County",
            "value": 25.1
        }, {
            "fips_code": 51149,
            "state": "VA",
            "area_name": "Prince George County",
            "value": 12.7
        }, {
            "fips_code": 51153,
            "state": "VA",
            "area_name": "Prince William County",
            "value": 8.4
        }, {
            "fips_code": 51155,
            "state": "VA",
            "area_name": "Pulaski County",
            "value": 20.0
        }, {
            "fips_code": 51157,
            "state": "VA",
            "area_name": "Rappahannock County",
            "value": 15.9
        }, {
            "fips_code": 51159,
            "state": "VA",
            "area_name": "Richmond County",
            "value": 20.1
        }, {
            "fips_code": 51161,
            "state": "VA",
            "area_name": "Roanoke County",
            "value": 8.699999999999999
        }, {
            "fips_code": 51163,
            "state": "VA",
            "area_name": "Rockbridge County",
            "value": 16.8
        }, {
            "fips_code": 51165,
            "state": "VA",
            "area_name": "Rockingham County",
            "value": 10.6
        }, {
            "fips_code": 51167,
            "state": "VA",
            "area_name": "Russell County",
            "value": 24.0
        }, {
            "fips_code": 51169,
            "state": "VA",
            "area_name": "Scott County",
            "value": 24.0
        }, {
            "fips_code": 51171,
            "state": "VA",
            "area_name": "Shenandoah County",
            "value": 14.9
        }, {
            "fips_code": 51173,
            "state": "VA",
            "area_name": "Smyth County",
            "value": 23.2
        }, {
            "fips_code": 51175,
            "state": "VA",
            "area_name": "Southampton County",
            "value": 19.2
        }, {
            "fips_code": 51177,
            "state": "VA",
            "area_name": "Spotsylvania County",
            "value": 10.5
        }, {
            "fips_code": 51179,
            "state": "VA",
            "area_name": "Stafford County",
            "value": 6.7
        }, {
            "fips_code": 51181,
            "state": "VA",
            "area_name": "Surry County",
            "value": 20.1
        }, {
            "fips_code": 51183,
            "state": "VA",
            "area_name": "Sussex County",
            "value": 26.9
        }, {
            "fips_code": 51185,
            "state": "VA",
            "area_name": "Tazewell County",
            "value": 27.8
        }, {
            "fips_code": 51187,
            "state": "VA",
            "area_name": "Warren County",
            "value": 13.4
        }, {
            "fips_code": 51191,
            "state": "VA",
            "area_name": "Washington County",
            "value": 17.6
        }, {
            "fips_code": 51193,
            "state": "VA",
            "area_name": "Westmoreland County",
            "value": 24.2
        }, {
            "fips_code": 51195,
            "state": "VA",
            "area_name": "Wise County",
            "value": 25.7
        }, {
            "fips_code": 51197,
            "state": "VA",
            "area_name": "Wythe County",
            "value": 25.4
        }, {
            "fips_code": 51199,
            "state": "VA",
            "area_name": "York County",
            "value": 6.1
        }, {
            "fips_code": 51510,
            "state": "VA",
            "area_name": "Alexandria city",
            "value": 15.1
        }, {
            "fips_code": 51520,
            "state": "VA",
            "area_name": "Bristol city",
            "value": 31.6
        }, {
            "fips_code": 51530,
            "state": "VA",
            "area_name": "Buena Vista city",
            "value": 21.7
        }, {
            "fips_code": 51540,
            "state": "VA",
            "area_name": "Charlottesville city",
            "value": 20.4
        }, {
            "fips_code": 51550,
            "state": "VA",
            "area_name": "Chesapeake city",
            "value": 9.800000000000001
        }, {
            "fips_code": 51570,
            "state": "VA",
            "area_name": "Colonial Heights city",
            "value": 16.4
        }, {
            "fips_code": 51580,
            "state": "VA",
            "area_name": "Covington city",
            "value": 29.3
        }, {
            "fips_code": 51590,
            "state": "VA",
            "area_name": "Danville city",
            "value": 37.8
        }, {
            "fips_code": 51595,
            "state": "VA",
            "area_name": "Emporia city",
            "value": 33.8
        }, {
            "fips_code": 51600,
            "state": "VA",
            "area_name": "Fairfax city",
            "value": 7.7
        }, {
            "fips_code": 51610,
            "state": "VA",
            "area_name": "Falls Church city",
            "value": 3.6
        }, {
            "fips_code": 51620,
            "state": "VA",
            "area_name": "Franklin city",
            "value": 33.4
        }, {
            "fips_code": 51630,
            "state": "VA",
            "area_name": "Fredericksburg city",
            "value": 20.8
        }, {
            "fips_code": 51640,
            "state": "VA",
            "area_name": "Galax city",
            "value": 36.7
        }, {
            "fips_code": 51650,
            "state": "VA",
            "area_name": "Hampton city",
            "value": 19.3
        }, {
            "fips_code": 51660,
            "state": "VA",
            "area_name": "Harrisonburg city",
            "value": 18.3
        }, {
            "fips_code": 51670,
            "state": "VA",
            "area_name": "Hopewell city",
            "value": 30.8
        }, {
            "fips_code": 51678,
            "state": "VA",
            "area_name": "Lexington city",
            "value": 13.1
        }, {
            "fips_code": 51680,
            "state": "VA",
            "area_name": "Lynchburg city",
            "value": 21.6
        }, {
            "fips_code": 51683,
            "state": "VA",
            "area_name": "Manassas city",
            "value": 15.2
        }, {
            "fips_code": 51685,
            "state": "VA",
            "area_name": "Manassas Park city",
            "value": 13.3
        }, {
            "fips_code": 51690,
            "state": "VA",
            "area_name": "Martinsville city",
            "value": 32.2
        }, {
            "fips_code": 51700,
            "state": "VA",
            "area_name": "Newport News city",
            "value": 23.0
        }, {
            "fips_code": 51710,
            "state": "VA",
            "area_name": "Norfolk city",
            "value": 23.1
        }, {
            "fips_code": 51720,
            "state": "VA",
            "area_name": "Norton city",
            "value": 31.9
        }, {
            "fips_code": 51730,
            "state": "VA",
            "area_name": "Petersburg city",
            "value": 35.6
        }, {
            "fips_code": 51735,
            "state": "VA",
            "area_name": "Poquoson city",
            "value": 5.9
        }, {
            "fips_code": 51740,
            "state": "VA",
            "area_name": "Portsmouth city",
            "value": 25.8
        }, {
            "fips_code": 51750,
            "state": "VA",
            "area_name": "Radford city",
            "value": 17.9
        }, {
            "fips_code": 51760,
            "state": "VA",
            "area_name": "Richmond city",
            "value": 32.0
        }, {
            "fips_code": 51770,
            "state": "VA",
            "area_name": "Roanoke city",
            "value": 27.4
        }, {
            "fips_code": 51775,
            "state": "VA",
            "area_name": "Salem city",
            "value": 13.6
        }, {
            "fips_code": 51790,
            "state": "VA",
            "area_name": "Staunton city",
            "value": 17.5
        }, {
            "fips_code": 51800,
            "state": "VA",
            "area_name": "Suffolk city",
            "value": 13.7
        }, {
            "fips_code": 51810,
            "state": "VA",
            "area_name": "Virginia Beach city",
            "value": 11.9
        }, {
            "fips_code": 51820,
            "state": "VA",
            "area_name": "Waynesboro city",
            "value": 19.2
        }, {
            "fips_code": 51830,
            "state": "VA",
            "area_name": "Williamsburg city",
            "value": 21.9
        }, {
            "fips_code": 51840,
            "state": "VA",
            "area_name": "Winchester city",
            "value": 18.9
        }, {
            "fips_code": 53000,
            "state": "WA",
            "area_name": "Washington",
            "value": 12.0
        }, {
            "fips_code": 53001,
            "state": "WA",
            "area_name": "Adams County",
            "value": 21.1
        }, {
            "fips_code": 53003,
            "state": "WA",
            "area_name": "Asotin County",
            "value": 21.2
        }, {
            "fips_code": 53005,
            "state": "WA",
            "area_name": "Benton County",
            "value": 13.4
        }, {
            "fips_code": 53007,
            "state": "WA",
            "area_name": "Chelan County",
            "value": 13.7
        }, {
            "fips_code": 53009,
            "state": "WA",
            "area_name": "Clallam County",
            "value": 18.5
        }, {
            "fips_code": 53011,
            "state": "WA",
            "area_name": "Clark County",
            "value": 11.2
        }, {
            "fips_code": 53013,
            "state": "WA",
            "area_name": "Columbia County",
            "value": 20.4
        }, {
            "fips_code": 53015,
            "state": "WA",
            "area_name": "Cowlitz County",
            "value": 15.9
        }, {
            "fips_code": 53017,
            "state": "WA",
            "area_name": "Douglas County",
            "value": 14.1
        }, {
            "fips_code": 53019,
            "state": "WA",
            "area_name": "Ferry County",
            "value": 30.5
        }, {
            "fips_code": 53021,
            "state": "WA",
            "area_name": "Franklin County",
            "value": 14.7
        }, {
            "fips_code": 53023,
            "state": "WA",
            "area_name": "Garfield County",
            "value": 18.1
        }, {
            "fips_code": 53025,
            "state": "WA",
            "area_name": "Grant County",
            "value": 14.6
        }, {
            "fips_code": 53027,
            "state": "WA",
            "area_name": "Grays Harbor County",
            "value": 20.8
        }, {
            "fips_code": 53029,
            "state": "WA",
            "area_name": "Island County",
            "value": 9.9
        }, {
            "fips_code": 53031,
            "state": "WA",
            "area_name": "Jefferson County",
            "value": 20.2
        }, {
            "fips_code": 53033,
            "state": "WA",
            "area_name": "King County",
            "value": 10.4
        }, {
            "fips_code": 53035,
            "state": "WA",
            "area_name": "Kitsap County",
            "value": 9.800000000000001
        }, {
            "fips_code": 53037,
            "state": "WA",
            "area_name": "Kittitas County",
            "value": 13.2
        }, {
            "fips_code": 53039,
            "state": "WA",
            "area_name": "Klickitat County",
            "value": 19.6
        }, {
            "fips_code": 53041,
            "state": "WA",
            "area_name": "Lewis County",
            "value": 16.6
        }, {
            "fips_code": 53043,
            "state": "WA",
            "area_name": "Lincoln County",
            "value": 15.2
        }, {
            "fips_code": 53045,
            "state": "WA",
            "area_name": "Mason County",
            "value": 19.2
        }, {
            "fips_code": 53047,
            "state": "WA",
            "area_name": "Okanogan County",
            "value": 20.9
        }, {
            "fips_code": 53049,
            "state": "WA",
            "area_name": "Pacific County",
            "value": 20.2
        }, {
            "fips_code": 53051,
            "state": "WA",
            "area_name": "Pend Oreille County",
            "value": 24.9
        }, {
            "fips_code": 53053,
            "state": "WA",
            "area_name": "Pierce County",
            "value": 10.0
        }, {
            "fips_code": 53055,
            "state": "WA",
            "area_name": "San Juan County",
            "value": 16.5
        }, {
            "fips_code": 53057,
            "state": "WA",
            "area_name": "Skagit County",
            "value": 14.8
        }, {
            "fips_code": 53059,
            "state": "WA",
            "area_name": "Skamania County",
            "value": 14.2
        }, {
            "fips_code": 53061,
            "state": "WA",
            "area_name": "Snohomish County",
            "value": 7.9
        }, {
            "fips_code": 53063,
            "state": "WA",
            "area_name": "Spokane County",
            "value": 12.2
        }, {
            "fips_code": 53065,
            "state": "WA",
            "area_name": "Stevens County",
            "value": 20.1
        }, {
            "fips_code": 53067,
            "state": "WA",
            "area_name": "Thurston County",
            "value": 11.7
        }, {
            "fips_code": 53069,
            "state": "WA",
            "area_name": "Wahkiakum County",
            "value": 21.6
        }, {
            "fips_code": 53071,
            "state": "WA",
            "area_name": "Walla Walla County",
            "value": 14.8
        }, {
            "fips_code": 53073,
            "state": "WA",
            "area_name": "Whatcom County",
            "value": 15.3
        }, {
            "fips_code": 53075,
            "state": "WA",
            "area_name": "Whitman County",
            "value": 12.6
        }, {
            "fips_code": 53077,
            "state": "WA",
            "area_name": "Yakima County",
            "value": 19.7
        }, {
            "fips_code": 54000,
            "state": "WV",
            "area_name": "West Virginia",
            "value": 21.4
        }, {
            "fips_code": 54001,
            "state": "WV",
            "area_name": "Barbour County",
            "value": 27.5
        }, {
            "fips_code": 54003,
            "state": "WV",
            "area_name": "Berkeley County",
            "value": 12.7
        }, {
            "fips_code": 54005,
            "state": "WV",
            "area_name": "Boone County",
            "value": 28.2
        }, {
            "fips_code": 54007,
            "state": "WV",
            "area_name": "Braxton County",
            "value": 29.0
        }, {
            "fips_code": 54009,
            "state": "WV",
            "area_name": "Brooke County",
            "value": 18.8
        }, {
            "fips_code": 54011,
            "state": "WV",
            "area_name": "Cabell County",
            "value": 23.9
        }, {
            "fips_code": 54013,
            "state": "WV",
            "area_name": "Calhoun County",
            "value": 32.0
        }, {
            "fips_code": 54015,
            "state": "WV",
            "area_name": "Clay County",
            "value": 31.0
        }, {
            "fips_code": 54017,
            "state": "WV",
            "area_name": "Doddridge County",
            "value": 23.4
        }, {
            "fips_code": 54019,
            "state": "WV",
            "area_name": "Fayette County",
            "value": 23.6
        }, {
            "fips_code": 54021,
            "state": "WV",
            "area_name": "Gilmer County",
            "value": 23.8
        }, {
            "fips_code": 54023,
            "state": "WV",
            "area_name": "Grant County",
            "value": 21.9
        }, {
            "fips_code": 54025,
            "state": "WV",
            "area_name": "Greenbrier County",
            "value": 24.5
        }, {
            "fips_code": 54027,
            "state": "WV",
            "area_name": "Hampshire County",
            "value": 25.2
        }, {
            "fips_code": 54029,
            "state": "WV",
            "area_name": "Hancock County",
            "value": 20.1
        }, {
            "fips_code": 54031,
            "state": "WV",
            "area_name": "Hardy County",
            "value": 22.0
        }, {
            "fips_code": 54033,
            "state": "WV",
            "area_name": "Harrison County",
            "value": 20.2
        }, {
            "fips_code": 54035,
            "state": "WV",
            "area_name": "Jackson County",
            "value": 21.6
        }, {
            "fips_code": 54037,
            "state": "WV",
            "area_name": "Jefferson County",
            "value": 10.9
        }, {
            "fips_code": 54039,
            "state": "WV",
            "area_name": "Kanawha County",
            "value": 20.6
        }, {
            "fips_code": 54041,
            "state": "WV",
            "area_name": "Lewis County",
            "value": 24.2
        }, {
            "fips_code": 54043,
            "state": "WV",
            "area_name": "Lincoln County",
            "value": 26.7
        }, {
            "fips_code": 54045,
            "state": "WV",
            "area_name": "Logan County",
            "value": 30.2
        }, {
            "fips_code": 54047,
            "state": "WV",
            "area_name": "McDowell County",
            "value": 40.2
        }, {
            "fips_code": 54049,
            "state": "WV",
            "area_name": "Marion County",
            "value": 19.3
        }, {
            "fips_code": 54051,
            "state": "WV",
            "area_name": "Marshall County",
            "value": 22.4
        }, {
            "fips_code": 54053,
            "state": "WV",
            "area_name": "Mason County",
            "value": 24.7
        }, {
            "fips_code": 54055,
            "state": "WV",
            "area_name": "Mercer County",
            "value": 26.0
        }, {
            "fips_code": 54057,
            "state": "WV",
            "area_name": "Mineral County",
            "value": 19.8
        }, {
            "fips_code": 54059,
            "state": "WV",
            "area_name": "Mingo County",
            "value": 35.8
        }, {
            "fips_code": 54061,
            "state": "WV",
            "area_name": "Monongalia County",
            "value": 15.4
        }, {
            "fips_code": 54063,
            "state": "WV",
            "area_name": "Monroe County",
            "value": 21.7
        }, {
            "fips_code": 54065,
            "state": "WV",
            "area_name": "Morgan County",
            "value": 18.0
        }, {
            "fips_code": 54067,
            "state": "WV",
            "area_name": "Nicholas County",
            "value": 25.1
        }, {
            "fips_code": 54069,
            "state": "WV",
            "area_name": "Ohio County",
            "value": 18.9
        }, {
            "fips_code": 54071,
            "state": "WV",
            "area_name": "Pendleton County",
            "value": 22.6
        }, {
            "fips_code": 54073,
            "state": "WV",
            "area_name": "Pleasants County",
            "value": 18.1
        }, {
            "fips_code": 54075,
            "state": "WV",
            "area_name": "Pocahontas County",
            "value": 26.8
        }, {
            "fips_code": 54077,
            "state": "WV",
            "area_name": "Preston County",
            "value": 19.5
        }, {
            "fips_code": 54079,
            "state": "WV",
            "area_name": "Putnam County",
            "value": 12.3
        }, {
            "fips_code": 54081,
            "state": "WV",
            "area_name": "Raleigh County",
            "value": 25.8
        }, {
            "fips_code": 54083,
            "state": "WV",
            "area_name": "Randolph County",
            "value": 23.8
        }, {
            "fips_code": 54085,
            "state": "WV",
            "area_name": "Ritchie County",
            "value": 25.6
        }, {
            "fips_code": 54087,
            "state": "WV",
            "area_name": "Roane County",
            "value": 26.3
        }, {
            "fips_code": 54089,
            "state": "WV",
            "area_name": "Summers County",
            "value": 29.9
        }, {
            "fips_code": 54091,
            "state": "WV",
            "area_name": "Taylor County",
            "value": 19.3
        }, {
            "fips_code": 54093,
            "state": "WV",
            "area_name": "Tucker County",
            "value": 20.6
        }, {
            "fips_code": 54095,
            "state": "WV",
            "area_name": "Tyler County",
            "value": 21.9
        }, {
            "fips_code": 54097,
            "state": "WV",
            "area_name": "Upshur County",
            "value": 25.2
        }, {
            "fips_code": 54099,
            "state": "WV",
            "area_name": "Wayne County",
            "value": 23.1
        }, {
            "fips_code": 54101,
            "state": "WV",
            "area_name": "Webster County",
            "value": 36.3
        }, {
            "fips_code": 54103,
            "state": "WV",
            "area_name": "Wetzel County",
            "value": 24.7
        }, {
            "fips_code": 54105,
            "state": "WV",
            "area_name": "Wirt County",
            "value": 28.1
        }, {
            "fips_code": 54107,
            "state": "WV",
            "area_name": "Wood County",
            "value": 20.1
        }, {
            "fips_code": 54109,
            "state": "WV",
            "area_name": "Wyoming County",
            "value": 28.4
        }, {
            "fips_code": 55000,
            "state": "WI",
            "area_name": "Wisconsin",
            "value": 13.6
        }, {
            "fips_code": 55001,
            "state": "WI",
            "area_name": "Adams County",
            "value": 22.3
        }, {
            "fips_code": 55003,
            "state": "WI",
            "area_name": "Ashland County",
            "value": 21.1
        }, {
            "fips_code": 55005,
            "state": "WI",
            "area_name": "Barron County",
            "value": 12.9
        }, {
            "fips_code": 55007,
            "state": "WI",
            "area_name": "Bayfield County",
            "value": 18.5
        }, {
            "fips_code": 55009,
            "state": "WI",
            "area_name": "Brown County",
            "value": 10.7
        }, {
            "fips_code": 55011,
            "state": "WI",
            "area_name": "Buffalo County",
            "value": 10.6
        }, {
            "fips_code": 55013,
            "state": "WI",
            "area_name": "Burnett County",
            "value": 17.7
        }, {
            "fips_code": 55015,
            "state": "WI",
            "area_name": "Calumet County",
            "value": 6.5
        }, {
            "fips_code": 55017,
            "state": "WI",
            "area_name": "Chippewa County",
            "value": 13.2
        }, {
            "fips_code": 55019,
            "state": "WI",
            "area_name": "Clark County",
            "value": 18.0
        }, {
            "fips_code": 55021,
            "state": "WI",
            "area_name": "Columbia County",
            "value": 10.6
        }, {
            "fips_code": 55023,
            "state": "WI",
            "area_name": "Crawford County",
            "value": 17.5
        }, {
            "fips_code": 55025,
            "state": "WI",
            "area_name": "Dane County",
            "value": 10.1
        }, {
            "fips_code": 55027,
            "state": "WI",
            "area_name": "Dodge County",
            "value": 10.0
        }, {
            "fips_code": 55029,
            "state": "WI",
            "area_name": "Door County",
            "value": 12.0
        }, {
            "fips_code": 55031,
            "state": "WI",
            "area_name": "Douglas County",
            "value": 18.3
        }, {
            "fips_code": 55033,
            "state": "WI",
            "area_name": "Dunn County",
            "value": 12.8
        }, {
            "fips_code": 55035,
            "state": "WI",
            "area_name": "Eau Claire County",
            "value": 11.5
        }, {
            "fips_code": 55037,
            "state": "WI",
            "area_name": "Florence County",
            "value": 16.5
        }, {
            "fips_code": 55039,
            "state": "WI",
            "area_name": "Fond du Lac County",
            "value": 10.9
        }, {
            "fips_code": 55041,
            "state": "WI",
            "area_name": "Forest County",
            "value": 21.5
        }, {
            "fips_code": 55043,
            "state": "WI",
            "area_name": "Grant County",
            "value": 13.0
        }, {
            "fips_code": 55045,
            "state": "WI",
            "area_name": "Green County",
            "value": 9.6
        }, {
            "fips_code": 55047,
            "state": "WI",
            "area_name": "Green Lake County",
            "value": 20.3
        }, {
            "fips_code": 55049,
            "state": "WI",
            "area_name": "Iowa County",
            "value": 10.5
        }, {
            "fips_code": 55051,
            "state": "WI",
            "area_name": "Iron County",
            "value": 18.7
        }, {
            "fips_code": 55053,
            "state": "WI",
            "area_name": "Jackson County",
            "value": 18.1
        }, {
            "fips_code": 55055,
            "state": "WI",
            "area_name": "Jefferson County",
            "value": 9.1
        }, {
            "fips_code": 55057,
            "state": "WI",
            "area_name": "Juneau County",
            "value": 17.1
        }, {
            "fips_code": 55059,
            "state": "WI",
            "area_name": "Kenosha County",
            "value": 13.9
        }, {
            "fips_code": 55061,
            "state": "WI",
            "area_name": "Kewaunee County",
            "value": 8.699999999999999
        }, {
            "fips_code": 55063,
            "state": "WI",
            "area_name": "La Crosse County",
            "value": 11.0
        }, {
            "fips_code": 55065,
            "state": "WI",
            "area_name": "Lafayette County",
            "value": 15.4
        }, {
            "fips_code": 55067,
            "state": "WI",
            "area_name": "Langlade County",
            "value": 18.4
        }, {
            "fips_code": 55069,
            "state": "WI",
            "area_name": "Lincoln County",
            "value": 14.7
        }, {
            "fips_code": 55071,
            "state": "WI",
            "area_name": "Manitowoc County",
            "value": 13.0
        }, {
            "fips_code": 55073,
            "state": "WI",
            "area_name": "Marathon County",
            "value": 9.5
        }, {
            "fips_code": 55075,
            "state": "WI",
            "area_name": "Marinette County",
            "value": 15.9
        }, {
            "fips_code": 55077,
            "state": "WI",
            "area_name": "Marquette County",
            "value": 18.7
        }, {
            "fips_code": 55078,
            "state": "WI",
            "area_name": "Menominee County",
            "value": 41.2
        }, {
            "fips_code": 55079,
            "state": "WI",
            "area_name": "Milwaukee County",
            "value": 23.6
        }, {
            "fips_code": 55081,
            "state": "WI",
            "area_name": "Monroe County",
            "value": 15.1
        }, {
            "fips_code": 55083,
            "state": "WI",
            "area_name": "Oconto County",
            "value": 11.0
        }, {
            "fips_code": 55085,
            "state": "WI",
            "area_name": "Oneida County",
            "value": 13.4
        }, {
            "fips_code": 55087,
            "state": "WI",
            "area_name": "Outagamie County",
            "value": 8.6
        }, {
            "fips_code": 55089,
            "state": "WI",
            "area_name": "Ozaukee County",
            "value": 4.5
        }, {
            "fips_code": 55091,
            "state": "WI",
            "area_name": "Pepin County",
            "value": 15.8
        }, {
            "fips_code": 55093,
            "state": "WI",
            "area_name": "Pierce County",
            "value": 7.9
        }, {
            "fips_code": 55095,
            "state": "WI",
            "area_name": "Polk County",
            "value": 11.9
        }, {
            "fips_code": 55097,
            "state": "WI",
            "area_name": "Portage County",
            "value": 10.8
        }, {
            "fips_code": 55099,
            "state": "WI",
            "area_name": "Price County",
            "value": 20.9
        }, {
            "fips_code": 55101,
            "state": "WI",
            "area_name": "Racine County",
            "value": 18.2
        }, {
            "fips_code": 55103,
            "state": "WI",
            "area_name": "Richland County",
            "value": 20.2
        }, {
            "fips_code": 55105,
            "state": "WI",
            "area_name": "Rock County",
            "value": 14.4
        }, {
            "fips_code": 55107,
            "state": "WI",
            "area_name": "Rusk County",
            "value": 20.6
        }, {
            "fips_code": 55109,
            "state": "WI",
            "area_name": "St. Croix County",
            "value": 5.6
        }, {
            "fips_code": 55111,
            "state": "WI",
            "area_name": "Sauk County",
            "value": 14.1
        }, {
            "fips_code": 55113,
            "state": "WI",
            "area_name": "Sawyer County",
            "value": 22.7
        }, {
            "fips_code": 55115,
            "state": "WI",
            "area_name": "Shawano County",
            "value": 13.3
        }, {
            "fips_code": 55117,
            "state": "WI",
            "area_name": "Sheboygan County",
            "value": 10.7
        }, {
            "fips_code": 55119,
            "state": "WI",
            "area_name": "Taylor County",
            "value": 15.2
        }, {
            "fips_code": 55121,
            "state": "WI",
            "area_name": "Trempealeau County",
            "value": 11.7
        }, {
            "fips_code": 55123,
            "state": "WI",
            "area_name": "Vernon County",
            "value": 22.8
        }, {
            "fips_code": 55125,
            "state": "WI",
            "area_name": "Vilas County",
            "value": 19.5
        }, {
            "fips_code": 55127,
            "state": "WI",
            "area_name": "Walworth County",
            "value": 10.8
        }, {
            "fips_code": 55129,
            "state": "WI",
            "area_name": "Washburn County",
            "value": 18.6
        }, {
            "fips_code": 55131,
            "state": "WI",
            "area_name": "Washington County",
            "value": 5.8
        }, {
            "fips_code": 55133,
            "state": "WI",
            "area_name": "Waukesha County",
            "value": 4.9
        }, {
            "fips_code": 55135,
            "state": "WI",
            "area_name": "Waupaca County",
            "value": 13.8
        }, {
            "fips_code": 55137,
            "state": "WI",
            "area_name": "Waushara County",
            "value": 19.6
        }, {
            "fips_code": 55139,
            "state": "WI",
            "area_name": "Winnebago County",
            "value": 11.9
        }, {
            "fips_code": 55141,
            "state": "WI",
            "area_name": "Wood County",
            "value": 14.5
        }, {
            "fips_code": 56000,
            "state": "WY",
            "area_name": "Wyoming",
            "value": 12.1
        }, {
            "fips_code": 56001,
            "state": "WY",
            "area_name": "Albany County",
            "value": 12.7
        }, {
            "fips_code": 56003,
            "state": "WY",
            "area_name": "Big Horn County",
            "value": 16.0
        }, {
            "fips_code": 56005,
            "state": "WY",
            "area_name": "Campbell County",
            "value": 9.4
        }, {
            "fips_code": 56007,
            "state": "WY",
            "area_name": "Carbon County",
            "value": 13.6
        }, {
            "fips_code": 56009,
            "state": "WY",
            "area_name": "Converse County",
            "value": 12.1
        }, {
            "fips_code": 56011,
            "state": "WY",
            "area_name": "Crook County",
            "value": 9.199999999999999
        }, {
            "fips_code": 56013,
            "state": "WY",
            "area_name": "Fremont County",
            "value": 19.1
        }, {
            "fips_code": 56015,
            "state": "WY",
            "area_name": "Goshen County",
            "value": 14.8
        }, {
            "fips_code": 56017,
            "state": "WY",
            "area_name": "Hot Springs County",
            "value": 16.7
        }, {
            "fips_code": 56019,
            "state": "WY",
            "area_name": "Johnson County",
            "value": 12.7
        }, {
            "fips_code": 56021,
            "state": "WY",
            "area_name": "Laramie County",
            "value": 11.7
        }, {
            "fips_code": 56023,
            "state": "WY",
            "area_name": "Lincoln County",
            "value": 8.800000000000001
        }, {
            "fips_code": 56025,
            "state": "WY",
            "area_name": "Natrona County",
            "value": 13.0
        }, {
            "fips_code": 56027,
            "state": "WY",
            "area_name": "Niobrara County",
            "value": 18.6
        }, {
            "fips_code": 56029,
            "state": "WY",
            "area_name": "Park County",
            "value": 13.8
        }, {
            "fips_code": 56031,
            "state": "WY",
            "area_name": "Platte County",
            "value": 14.8
        }, {
            "fips_code": 56033,
            "state": "WY",
            "area_name": "Sheridan County",
            "value": 10.5
        }, {
            "fips_code": 56035,
            "state": "WY",
            "area_name": "Sublette County",
            "value": 8.199999999999999
        }, {
            "fips_code": 56037,
            "state": "WY",
            "area_name": "Sweetwater County",
            "value": 9.699999999999999
        }, {
            "fips_code": 56039,
            "state": "WY",
            "area_name": "Teton County",
            "value": 5.5
        }, {
            "fips_code": 56041,
            "state": "WY",
            "area_name": "Uinta County",
            "value": 11.2
        }, {
            "fips_code": 56043,
            "state": "WY",
            "area_name": "Washakie County",
            "value": 12.5
        }, {
            "fips_code": 56045,
            "state": "WY",
            "area_name": "Weston County",
            "value": 12.3
        }
    ]
}