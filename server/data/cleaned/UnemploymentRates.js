module.exports = {
    "XmlSchema": {
        "@name": "myschema",
        "xml": "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:hpcc=\"urn:hpccsystems:xsd:appinfo\" elementFormDefault=\"qualified\" attributeFormDefault=\"unqualified\">\n<xs:element name=\"Dataset\"><xs:complexType><xs:sequence minOccurs=\"0\" maxOccurs=\"unbounded\">\n<xs:element name=\"Row\"><xs:complexType><xs:sequence>\n<xs:element name=\"fips_code\" type=\"xs:nonNegativeInteger\"/>\n<xs:element name=\"state\" type=\"string2\"/>\n<xs:element name=\"area_name\" type=\"string50\"/>\n<xs:element name=\"attribute\" type=\"string45\"/>\n<xs:element name=\"value\" type=\"xs:double\"/>\n</xs:sequence></xs:complexType></xs:element>\n</xs:sequence></xs:complexType></xs:element>\n<xs:simpleType name=\"string2\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"2\"/></xs:restriction></xs:simpleType>\n<xs:simpleType name=\"string50\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"50\"/></xs:restriction></xs:simpleType>\n<xs:simpleType name=\"string45\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"45\"/></xs:restriction></xs:simpleType>\n</xs:schema>"
    },
    "@xmlSchema": "myschema",
    "Row": [{
            "fips_code": 0,
            "state": "US",
            "area_name": "United States",
            "value": 3.7
        },
        {
            "fips_code": 1000,
            "state": "AL",
            "area_name": "Alabama",
            "value": 2.6
        }, {
            "fips_code": 1001,
            "state": "AL",
            "area_name": "Autauga County, AL",
            "value": 2.3
        }, {
            "fips_code": 1003,
            "state": "AL",
            "area_name": "Baldwin County, AL",
            "value": 2.4
        }, {
            "fips_code": 1005,
            "state": "AL",
            "area_name": "Barbour County, AL",
            "value": 4.1
        }, {
            "fips_code": 1007,
            "state": "AL",
            "area_name": "Bibb County, AL",
            "value": 2.5
        }, {
            "fips_code": 1009,
            "state": "AL",
            "area_name": "Blount County, AL",
            "value": 2.2
        }, {
            "fips_code": 1011,
            "state": "AL",
            "area_name": "Bullock County, AL",
            "value": 2.8
        }, {
            "fips_code": 1013,
            "state": "AL",
            "area_name": "Butler County, AL",
            "value": 3.4
        }, {
            "fips_code": 1015,
            "state": "AL",
            "area_name": "Calhoun County, AL",
            "value": 3.0
        }, {
            "fips_code": 1017,
            "state": "AL",
            "area_name": "Chambers County, AL",
            "value": 2.6
        }, {
            "fips_code": 1019,
            "state": "AL",
            "area_name": "Cherokee County, AL",
            "value": 2.3
        }, {
            "fips_code": 1021,
            "state": "AL",
            "area_name": "Chilton County, AL",
            "value": 2.3
        }, {
            "fips_code": 1023,
            "state": "AL",
            "area_name": "Choctaw County, AL",
            "value": 3.8
        }, {
            "fips_code": 1025,
            "state": "AL",
            "area_name": "Clarke County, AL",
            "value": 5.0
        }, {
            "fips_code": 1027,
            "state": "AL",
            "area_name": "Clay County, AL",
            "value": 2.3
        }, {
            "fips_code": 1029,
            "state": "AL",
            "area_name": "Cleburne County, AL",
            "value": 2.4
        }, {
            "fips_code": 1031,
            "state": "AL",
            "area_name": "Coffee County, AL",
            "value": 2.5
        }, {
            "fips_code": 1033,
            "state": "AL",
            "area_name": "Colbert County, AL",
            "value": 3.0
        }, {
            "fips_code": 1035,
            "state": "AL",
            "area_name": "Conecuh County, AL",
            "value": 3.5
        }, {
            "fips_code": 1037,
            "state": "AL",
            "area_name": "Coosa County, AL",
            "value": 2.5
        }, {
            "fips_code": 1039,
            "state": "AL",
            "area_name": "Covington County, AL",
            "value": 2.6
        }, {
            "fips_code": 1041,
            "state": "AL",
            "area_name": "Crenshaw County, AL",
            "value": 2.6
        }, {
            "fips_code": 1043,
            "state": "AL",
            "area_name": "Cullman County, AL",
            "value": 2.1
        }, {
            "fips_code": 1045,
            "state": "AL",
            "area_name": "Dale County, AL",
            "value": 2.6
        }, {
            "fips_code": 1047,
            "state": "AL",
            "area_name": "Dallas County, AL",
            "value": 5.0
        }, {
            "fips_code": 1049,
            "state": "AL",
            "area_name": "DeKalb County, AL",
            "value": 2.3
        }, {
            "fips_code": 1051,
            "state": "AL",
            "area_name": "Elmore County, AL",
            "value": 2.2
        }, {
            "fips_code": 1053,
            "state": "AL",
            "area_name": "Escambia County, AL",
            "value": 3.1
        }, {
            "fips_code": 1055,
            "state": "AL",
            "area_name": "Etowah County, AL",
            "value": 3.0
        }, {
            "fips_code": 1057,
            "state": "AL",
            "area_name": "Fayette County, AL",
            "value": 2.7
        }, {
            "fips_code": 1059,
            "state": "AL",
            "area_name": "Franklin County, AL",
            "value": 2.3
        }, {
            "fips_code": 1061,
            "state": "AL",
            "area_name": "Geneva County, AL",
            "value": 2.4
        }, {
            "fips_code": 1063,
            "state": "AL",
            "area_name": "Greene County, AL",
            "value": 4.4
        }, {
            "fips_code": 1065,
            "state": "AL",
            "area_name": "Hale County, AL",
            "value": 3.9
        }, {
            "fips_code": 1067,
            "state": "AL",
            "area_name": "Henry County, AL",
            "value": 2.7
        }, {
            "fips_code": 1069,
            "state": "AL",
            "area_name": "Houston County, AL",
            "value": 2.6
        }, {
            "fips_code": 1071,
            "state": "AL",
            "area_name": "Jackson County, AL",
            "value": 2.5
        }, {
            "fips_code": 1073,
            "state": "AL",
            "area_name": "Jefferson County, AL",
            "value": 2.6
        }, {
            "fips_code": 1075,
            "state": "AL",
            "area_name": "Lamar County, AL",
            "value": 2.7
        }, {
            "fips_code": 1077,
            "state": "AL",
            "area_name": "Lauderdale County, AL",
            "value": 2.6
        }, {
            "fips_code": 1079,
            "state": "AL",
            "area_name": "Lawrence County, AL",
            "value": 2.4
        }, {
            "fips_code": 1081,
            "state": "AL",
            "area_name": "Lee County, AL",
            "value": 2.4
        }, {
            "fips_code": 1083,
            "state": "AL",
            "area_name": "Limestone County, AL",
            "value": 2.1
        }, {
            "fips_code": 1085,
            "state": "AL",
            "area_name": "Lowndes County, AL",
            "value": 5.2
        }, {
            "fips_code": 1087,
            "state": "AL",
            "area_name": "Macon County, AL",
            "value": 3.8
        }, {
            "fips_code": 1089,
            "state": "AL",
            "area_name": "Madison County, AL",
            "value": 2.1
        }, {
            "fips_code": 1091,
            "state": "AL",
            "area_name": "Marengo County, AL",
            "value": 3.4
        }, {
            "fips_code": 1093,
            "state": "AL",
            "area_name": "Marion County, AL",
            "value": 2.5
        }, {
            "fips_code": 1095,
            "state": "AL",
            "area_name": "Marshall County, AL",
            "value": 2.1
        }, {
            "fips_code": 1097,
            "state": "AL",
            "area_name": "Mobile County, AL",
            "value": 3.2
        }, {
            "fips_code": 1099,
            "state": "AL",
            "area_name": "Monroe County, AL",
            "value": 4.1
        }, {
            "fips_code": 1101,
            "state": "AL",
            "area_name": "Montgomery County, AL",
            "value": 3.1
        }, {
            "fips_code": 1103,
            "state": "AL",
            "area_name": "Morgan County, AL",
            "value": 2.1
        }, {
            "fips_code": 1105,
            "state": "AL",
            "area_name": "Perry County, AL",
            "value": 5.3
        }, {
            "fips_code": 1107,
            "state": "AL",
            "area_name": "Pickens County, AL",
            "value": 3.3
        }, {
            "fips_code": 1109,
            "state": "AL",
            "area_name": "Pike County, AL",
            "value": 2.7
        }, {
            "fips_code": 1111,
            "state": "AL",
            "area_name": "Randolph County, AL",
            "value": 2.5
        }, {
            "fips_code": 1113,
            "state": "AL",
            "area_name": "Russell County, AL",
            "value": 2.6
        }, {
            "fips_code": 1115,
            "state": "AL",
            "area_name": "St. Clair County, AL",
            "value": 2.2
        }, {
            "fips_code": 1117,
            "state": "AL",
            "area_name": "Shelby County, AL",
            "value": 1.8
        }, {
            "fips_code": 1119,
            "state": "AL",
            "area_name": "Sumter County, AL",
            "value": 3.5
        }, {
            "fips_code": 1121,
            "state": "AL",
            "area_name": "Talladega County, AL",
            "value": 3.1
        }, {
            "fips_code": 1123,
            "state": "AL",
            "area_name": "Tallapoosa County, AL",
            "value": 2.9
        }, {
            "fips_code": 1125,
            "state": "AL",
            "area_name": "Tuscaloosa County, AL",
            "value": 2.5
        }, {
            "fips_code": 1127,
            "state": "AL",
            "area_name": "Walker County, AL",
            "value": 2.8
        }, {
            "fips_code": 1129,
            "state": "AL",
            "area_name": "Washington County, AL",
            "value": 3.6
        }, {
            "fips_code": 1131,
            "state": "AL",
            "area_name": "Wilcox County, AL",
            "value": 7.8
        }, {
            "fips_code": 1133,
            "state": "AL",
            "area_name": "Winston County, AL",
            "value": 2.4
        }, {
            "fips_code": 2000,
            "state": "AK",
            "area_name": "Alaska",
            "value": 4.0
        }, {
            "fips_code": 2013,
            "state": "AK",
            "area_name": "Aleutians East Borough, AK",
            "value": 2.0
        }, {
            "fips_code": 2016,
            "state": "AK",
            "area_name": "Aleutians West Census Area, AK",
            "value": 3.1
        }, {
            "fips_code": 2020,
            "state": "AK",
            "area_name": "Anchorage Borough/municipality, AK",
            "value": 3.3
        }, {
            "fips_code": 2050,
            "state": "AK",
            "area_name": "Bethel Census Area, AK",
            "value": 8.800000000000001
        }, {
            "fips_code": 2060,
            "state": "AK",
            "area_name": "Bristol Bay Borough, AK",
            "value": 4.3
        }, {
            "fips_code": 2063,
            "state": "AK",
            "area_name": "Chugach Census Area, AK",
            "value": 2.9
        }, {
            "fips_code": 2066,
            "state": "AK",
            "area_name": "Copper River Census Area, AK",
            "value": 9.300000000000001
        }, {
            "fips_code": 2068,
            "state": "AK",
            "area_name": "Denali Borough, AK",
            "value": 6.3
        }, {
            "fips_code": 2070,
            "state": "AK",
            "area_name": "Dillingham Census Area, AK",
            "value": 5.6
        }, {
            "fips_code": 2090,
            "state": "AK",
            "area_name": "Fairbanks North Star Borough, AK",
            "value": 3.7
        }, {
            "fips_code": 2100,
            "state": "AK",
            "area_name": "Haines Borough, AK",
            "value": 6.6
        }, {
            "fips_code": 2105,
            "state": "AK",
            "area_name": "Hoonah-Angoon Census Area, AK",
            "value": 5.6
        }, {
            "fips_code": 2110,
            "state": "AK",
            "area_name": "Juneau Borough/city, AK",
            "value": 2.8
        }, {
            "fips_code": 2122,
            "state": "AK",
            "area_name": "Kenai Peninsula Borough, AK",
            "value": 4.5
        }, {
            "fips_code": 2130,
            "state": "AK",
            "area_name": "Ketchikan Gateway Borough, AK",
            "value": 3.8
        }, {
            "fips_code": 2150,
            "state": "AK",
            "area_name": "Kodiak Island Borough, AK",
            "value": 4.3
        }, {
            "fips_code": 2158,
            "state": "AK",
            "area_name": "Kusilvak Census Area, AK",
            "value": 12.9
        }, {
            "fips_code": 2164,
            "state": "AK",
            "area_name": "Lake and Peninsula Borough, AK",
            "value": 5.8
        }, {
            "fips_code": 2170,
            "state": "AK",
            "area_name": "Matanuska-Susitna Borough, AK",
            "value": 4.6
        }, {
            "fips_code": 2180,
            "state": "AK",
            "area_name": "Nome Census Area, AK",
            "value": 6.9
        }, {
            "fips_code": 2185,
            "state": "AK",
            "area_name": "North Slope Borough, AK",
            "value": 5.0
        }, {
            "fips_code": 2188,
            "state": "AK",
            "area_name": "Northwest Arctic Borough, AK",
            "value": 9.0
        }, {
            "fips_code": 2195,
            "state": "AK",
            "area_name": "Petersburg Borough, AK",
            "value": 5.8
        }, {
            "fips_code": 2198,
            "state": "AK",
            "area_name": "Prince of Wales-Hyder Census Area, AK",
            "value": 5.5
        }, {
            "fips_code": 2220,
            "state": "AK",
            "area_name": "Sitka Borough/city, AK",
            "value": 2.8
        }, {
            "fips_code": 2230,
            "state": "AK",
            "area_name": "Skagway Municipality, AK",
            "value": 6.7
        }, {
            "fips_code": 2240,
            "state": "AK",
            "area_name": "Southeast Fairbanks Census Area, AK",
            "value": 5.2
        }, {
            "fips_code": 2275,
            "state": "AK",
            "area_name": "Wrangell Borough/city, AK",
            "value": 5.1
        }, {
            "fips_code": 2282,
            "state": "AK",
            "area_name": "Yakutat Borough/city, AK",
            "value": 5.1
        }, {
            "fips_code": 2290,
            "state": "AK",
            "area_name": "Yukon-Koyukuk Census Area, AK",
            "value": 7.9
        }, {
            "fips_code": 4000,
            "state": "AZ",
            "area_name": "Arizona",
            "value": 3.8
        }, {
            "fips_code": 4001,
            "state": "AZ",
            "area_name": "Apache County, AZ",
            "value": 7.7
        }, {
            "fips_code": 4003,
            "state": "AZ",
            "area_name": "Cochise County, AZ",
            "value": 4.4
        }, {
            "fips_code": 4005,
            "state": "AZ",
            "area_name": "Coconino County, AZ",
            "value": 4.3
        }, {
            "fips_code": 4007,
            "state": "AZ",
            "area_name": "Gila County, AZ",
            "value": 4.2
        }, {
            "fips_code": 4009,
            "state": "AZ",
            "area_name": "Graham County, AZ",
            "value": 3.6
        }, {
            "fips_code": 4011,
            "state": "AZ",
            "area_name": "Greenlee County, AZ",
            "value": 2.9
        }, {
            "fips_code": 4012,
            "state": "AZ",
            "area_name": "La Paz County, AZ",
            "value": 4.7
        }, {
            "fips_code": 4013,
            "state": "AZ",
            "area_name": "Maricopa County, AZ",
            "value": 3.3
        }, {
            "fips_code": 4015,
            "state": "AZ",
            "area_name": "Mohave County, AZ",
            "value": 4.5
        }, {
            "fips_code": 4017,
            "state": "AZ",
            "area_name": "Navajo County, AZ",
            "value": 5.2
        }, {
            "fips_code": 4019,
            "state": "AZ",
            "area_name": "Pima County, AZ",
            "value": 3.8
        }, {
            "fips_code": 4021,
            "state": "AZ",
            "area_name": "Pinal County, AZ",
            "value": 3.9
        }, {
            "fips_code": 4023,
            "state": "AZ",
            "area_name": "Santa Cruz County, AZ",
            "value": 7.5
        }, {
            "fips_code": 4025,
            "state": "AZ",
            "area_name": "Yavapai County, AZ",
            "value": 3.5
        }, {
            "fips_code": 4027,
            "state": "AZ",
            "area_name": "Yuma County, AZ",
            "value": 12.5
        }, {
            "fips_code": 5000,
            "state": "AR",
            "area_name": "Arkansas",
            "value": 3.3
        }, {
            "fips_code": 5001,
            "state": "AR",
            "area_name": "Arkansas County, AR",
            "value": 3.3
        }, {
            "fips_code": 5003,
            "state": "AR",
            "area_name": "Ashley County, AR",
            "value": 5.5
        }, {
            "fips_code": 5005,
            "state": "AR",
            "area_name": "Baxter County, AR",
            "value": 3.6
        }, {
            "fips_code": 5007,
            "state": "AR",
            "area_name": "Benton County, AR",
            "value": 2.4
        }, {
            "fips_code": 5009,
            "state": "AR",
            "area_name": "Boone County, AR",
            "value": 2.9
        }, {
            "fips_code": 5011,
            "state": "AR",
            "area_name": "Bradley County, AR",
            "value": 5.0
        }, {
            "fips_code": 5013,
            "state": "AR",
            "area_name": "Calhoun County, AR",
            "value": 3.1
        }, {
            "fips_code": 5015,
            "state": "AR",
            "area_name": "Carroll County, AR",
            "value": 2.9
        }, {
            "fips_code": 5017,
            "state": "AR",
            "area_name": "Chicot County, AR",
            "value": 6.2
        }, {
            "fips_code": 5019,
            "state": "AR",
            "area_name": "Clark County, AR",
            "value": 4.5
        }, {
            "fips_code": 5021,
            "state": "AR",
            "area_name": "Clay County, AR",
            "value": 4.0
        }, {
            "fips_code": 5023,
            "state": "AR",
            "area_name": "Cleburne County, AR",
            "value": 4.2
        }, {
            "fips_code": 5025,
            "state": "AR",
            "area_name": "Cleveland County, AR",
            "value": 3.9
        }, {
            "fips_code": 5027,
            "state": "AR",
            "area_name": "Columbia County, AR",
            "value": 4.4
        }, {
            "fips_code": 5029,
            "state": "AR",
            "area_name": "Conway County, AR",
            "value": 3.7
        }, {
            "fips_code": 5031,
            "state": "AR",
            "area_name": "Craighead County, AR",
            "value": 2.8
        }, {
            "fips_code": 5033,
            "state": "AR",
            "area_name": "Crawford County, AR",
            "value": 3.2
        }, {
            "fips_code": 5035,
            "state": "AR",
            "area_name": "Crittenden County, AR",
            "value": 4.0
        }, {
            "fips_code": 5037,
            "state": "AR",
            "area_name": "Cross County, AR",
            "value": 3.7
        }, {
            "fips_code": 5039,
            "state": "AR",
            "area_name": "Dallas County, AR",
            "value": 4.0
        }, {
            "fips_code": 5041,
            "state": "AR",
            "area_name": "Desha County, AR",
            "value": 5.3
        }, {
            "fips_code": 5043,
            "state": "AR",
            "area_name": "Drew County, AR",
            "value": 4.4
        }, {
            "fips_code": 5045,
            "state": "AR",
            "area_name": "Faulkner County, AR",
            "value": 2.9
        }, {
            "fips_code": 5047,
            "state": "AR",
            "area_name": "Franklin County, AR",
            "value": 3.3
        }, {
            "fips_code": 5049,
            "state": "AR",
            "area_name": "Fulton County, AR",
            "value": 3.4
        }, {
            "fips_code": 5051,
            "state": "AR",
            "area_name": "Garland County, AR",
            "value": 3.8
        }, {
            "fips_code": 5053,
            "state": "AR",
            "area_name": "Grant County, AR",
            "value": 3.1
        }, {
            "fips_code": 5055,
            "state": "AR",
            "area_name": "Greene County, AR",
            "value": 3.3
        }, {
            "fips_code": 5057,
            "state": "AR",
            "area_name": "Hempstead County, AR",
            "value": 3.3
        }, {
            "fips_code": 5059,
            "state": "AR",
            "area_name": "Hot Spring County, AR",
            "value": 3.5
        }, {
            "fips_code": 5061,
            "state": "AR",
            "area_name": "Howard County, AR",
            "value": 3.3
        }, {
            "fips_code": 5063,
            "state": "AR",
            "area_name": "Independence County, AR",
            "value": 3.4
        }, {
            "fips_code": 5065,
            "state": "AR",
            "area_name": "Izard County, AR",
            "value": 5.2
        }, {
            "fips_code": 5067,
            "state": "AR",
            "area_name": "Jackson County, AR",
            "value": 5.0
        }, {
            "fips_code": 5069,
            "state": "AR",
            "area_name": "Jefferson County, AR",
            "value": 5.2
        }, {
            "fips_code": 5071,
            "state": "AR",
            "area_name": "Johnson County, AR",
            "value": 4.1
        }, {
            "fips_code": 5073,
            "state": "AR",
            "area_name": "Lafayette County, AR",
            "value": 4.8
        }, {
            "fips_code": 5075,
            "state": "AR",
            "area_name": "Lawrence County, AR",
            "value": 3.6
        }, {
            "fips_code": 5077,
            "state": "AR",
            "area_name": "Lee County, AR",
            "value": 4.6
        }, {
            "fips_code": 5079,
            "state": "AR",
            "area_name": "Lincoln County, AR",
            "value": 4.5
        }, {
            "fips_code": 5081,
            "state": "AR",
            "area_name": "Little River County, AR",
            "value": 3.9
        }, {
            "fips_code": 5083,
            "state": "AR",
            "area_name": "Logan County, AR",
            "value": 3.8
        }, {
            "fips_code": 5085,
            "state": "AR",
            "area_name": "Lonoke County, AR",
            "value": 2.8
        }, {
            "fips_code": 5087,
            "state": "AR",
            "area_name": "Madison County, AR",
            "value": 2.5
        }, {
            "fips_code": 5089,
            "state": "AR",
            "area_name": "Marion County, AR",
            "value": 3.7
        }, {
            "fips_code": 5091,
            "state": "AR",
            "area_name": "Miller County, AR",
            "value": 3.9
        }, {
            "fips_code": 5093,
            "state": "AR",
            "area_name": "Mississippi County, AR",
            "value": 5.2
        }, {
            "fips_code": 5095,
            "state": "AR",
            "area_name": "Monroe County, AR",
            "value": 4.4
        }, {
            "fips_code": 5097,
            "state": "AR",
            "area_name": "Montgomery County, AR",
            "value": 4.8
        }, {
            "fips_code": 5099,
            "state": "AR",
            "area_name": "Nevada County, AR",
            "value": 3.9
        }, {
            "fips_code": 5101,
            "state": "AR",
            "area_name": "Newton County, AR",
            "value": 3.0
        }, {
            "fips_code": 5103,
            "state": "AR",
            "area_name": "Ouachita County, AR",
            "value": 3.9
        }, {
            "fips_code": 5105,
            "state": "AR",
            "area_name": "Perry County, AR",
            "value": 3.6
        }, {
            "fips_code": 5107,
            "state": "AR",
            "area_name": "Phillips County, AR",
            "value": 6.3
        }, {
            "fips_code": 5109,
            "state": "AR",
            "area_name": "Pike County, AR",
            "value": 3.7
        }, {
            "fips_code": 5111,
            "state": "AR",
            "area_name": "Poinsett County, AR",
            "value": 3.4
        }, {
            "fips_code": 5113,
            "state": "AR",
            "area_name": "Polk County, AR",
            "value": 3.7
        }, {
            "fips_code": 5115,
            "state": "AR",
            "area_name": "Pope County, AR",
            "value": 3.9
        }, {
            "fips_code": 5117,
            "state": "AR",
            "area_name": "Prairie County, AR",
            "value": 3.0
        }, {
            "fips_code": 5119,
            "state": "AR",
            "area_name": "Pulaski County, AR",
            "value": 3.5
        }, {
            "fips_code": 5121,
            "state": "AR",
            "area_name": "Randolph County, AR",
            "value": 3.4
        }, {
            "fips_code": 5123,
            "state": "AR",
            "area_name": "St. Francis County, AR",
            "value": 4.9
        }, {
            "fips_code": 5125,
            "state": "AR",
            "area_name": "Saline County, AR",
            "value": 2.8
        }, {
            "fips_code": 5127,
            "state": "AR",
            "area_name": "Scott County, AR",
            "value": 2.8
        }, {
            "fips_code": 5129,
            "state": "AR",
            "area_name": "Searcy County, AR",
            "value": 4.5
        }, {
            "fips_code": 5131,
            "state": "AR",
            "area_name": "Sebastian County, AR",
            "value": 3.1
        }, {
            "fips_code": 5133,
            "state": "AR",
            "area_name": "Sevier County, AR",
            "value": 3.9
        }, {
            "fips_code": 5135,
            "state": "AR",
            "area_name": "Sharp County, AR",
            "value": 4.1
        }, {
            "fips_code": 5137,
            "state": "AR",
            "area_name": "Stone County, AR",
            "value": 4.2
        }, {
            "fips_code": 5139,
            "state": "AR",
            "area_name": "Union County, AR",
            "value": 4.8
        }, {
            "fips_code": 5141,
            "state": "AR",
            "area_name": "Van Buren County, AR",
            "value": 4.3
        }, {
            "fips_code": 5143,
            "state": "AR",
            "area_name": "Washington County, AR",
            "value": 2.3
        }, {
            "fips_code": 5145,
            "state": "AR",
            "area_name": "White County, AR",
            "value": 3.5
        }, {
            "fips_code": 5147,
            "state": "AR",
            "area_name": "Woodruff County, AR",
            "value": 3.5
        }, {
            "fips_code": 5149,
            "state": "AR",
            "area_name": "Yell County, AR",
            "value": 3.8
        }, {
            "fips_code": 6000,
            "state": "CA",
            "area_name": "California",
            "value": 4.2
        }, {
            "fips_code": 6001,
            "state": "CA",
            "area_name": "Alameda County, CA",
            "value": 3.3
        }, {
            "fips_code": 6003,
            "state": "CA",
            "area_name": "Alpine County, CA",
            "value": 5.4
        }, {
            "fips_code": 6005,
            "state": "CA",
            "area_name": "Amador County, CA",
            "value": 4.4
        }, {
            "fips_code": 6007,
            "state": "CA",
            "area_name": "Butte County, CA",
            "value": 4.5
        }, {
            "fips_code": 6009,
            "state": "CA",
            "area_name": "Calaveras County, CA",
            "value": 3.6
        }, {
            "fips_code": 6011,
            "state": "CA",
            "area_name": "Colusa County, CA",
            "value": 11.6
        }, {
            "fips_code": 6013,
            "state": "CA",
            "area_name": "Contra Costa County, CA",
            "value": 3.5
        }, {
            "fips_code": 6015,
            "state": "CA",
            "area_name": "Del Norte County, CA",
            "value": 5.1
        }, {
            "fips_code": 6017,
            "state": "CA",
            "area_name": "El Dorado County, CA",
            "value": 3.4
        }, {
            "fips_code": 6019,
            "state": "CA",
            "area_name": "Fresno County, CA",
            "value": 6.4
        }, {
            "fips_code": 6021,
            "state": "CA",
            "area_name": "Glenn County, CA",
            "value": 5.3
        }, {
            "fips_code": 6023,
            "state": "CA",
            "area_name": "Humboldt County, CA",
            "value": 4.0
        }, {
            "fips_code": 6025,
            "state": "CA",
            "area_name": "Imperial County, CA",
            "value": 14.7
        }, {
            "fips_code": 6027,
            "state": "CA",
            "area_name": "Inyo County, CA",
            "value": 3.7
        }, {
            "fips_code": 6029,
            "state": "CA",
            "area_name": "Kern County, CA",
            "value": 6.9
        }, {
            "fips_code": 6031,
            "state": "CA",
            "area_name": "Kings County, CA",
            "value": 7.0
        }, {
            "fips_code": 6033,
            "state": "CA",
            "area_name": "Lake County, CA",
            "value": 5.0
        }, {
            "fips_code": 6035,
            "state": "CA",
            "area_name": "Lassen County, CA",
            "value": 4.5
        }, {
            "fips_code": 6037,
            "state": "CA",
            "area_name": "Los Angeles County, CA",
            "value": 4.9
        }, {
            "fips_code": 6039,
            "state": "CA",
            "area_name": "Madera County, CA",
            "value": 6.1
        }, {
            "fips_code": 6041,
            "state": "CA",
            "area_name": "Marin County, CA",
            "value": 2.7
        }, {
            "fips_code": 6043,
            "state": "CA",
            "area_name": "Mariposa County, CA",
            "value": 4.5
        }, {
            "fips_code": 6045,
            "state": "CA",
            "area_name": "Mendocino County, CA",
            "value": 4.1
        }, {
            "fips_code": 6047,
            "state": "CA",
            "area_name": "Merced County, CA",
            "value": 7.7
        }, {
            "fips_code": 6049,
            "state": "CA",
            "area_name": "Modoc County, CA",
            "value": 5.5
        }, {
            "fips_code": 6051,
            "state": "CA",
            "area_name": "Mono County, CA",
            "value": 3.7
        }, {
            "fips_code": 6053,
            "state": "CA",
            "area_name": "Monterey County, CA",
            "value": 5.9
        }, {
            "fips_code": 6055,
            "state": "CA",
            "area_name": "Napa County, CA",
            "value": 3.2
        }, {
            "fips_code": 6057,
            "state": "CA",
            "area_name": "Nevada County, CA",
            "value": 3.4
        }, {
            "fips_code": 6059,
            "state": "CA",
            "area_name": "Orange County, CA",
            "value": 3.2
        }, {
            "fips_code": 6061,
            "state": "CA",
            "area_name": "Placer County, CA",
            "value": 3.1
        }, {
            "fips_code": 6063,
            "state": "CA",
            "area_name": "Plumas County, CA",
            "value": 6.5
        }, {
            "fips_code": 6065,
            "state": "CA",
            "area_name": "Riverside County, CA",
            "value": 4.2
        }, {
            "fips_code": 6067,
            "state": "CA",
            "area_name": "Sacramento County, CA",
            "value": 3.9
        }, {
            "fips_code": 6069,
            "state": "CA",
            "area_name": "San Benito County, CA",
            "value": 5.0
        }, {
            "fips_code": 6071,
            "state": "CA",
            "area_name": "San Bernardino County, CA",
            "value": 4.1
        }, {
            "fips_code": 6073,
            "state": "CA",
            "area_name": "San Diego County, CA",
            "value": 3.4
        }, {
            "fips_code": 6075,
            "state": "CA",
            "area_name": "San Francisco County/city, CA",
            "value": 2.5
        }, {
            "fips_code": 6077,
            "state": "CA",
            "area_name": "San Joaquin County, CA",
            "value": 5.2
        }, {
            "fips_code": 6079,
            "state": "CA",
            "area_name": "San Luis Obispo County, CA",
            "value": 3.0
        }, {
            "fips_code": 6081,
            "state": "CA",
            "area_name": "San Mateo County, CA",
            "value": 2.4
        }, {
            "fips_code": 6083,
            "state": "CA",
            "area_name": "Santa Barbara County, CA",
            "value": 3.5
        }, {
            "fips_code": 6085,
            "state": "CA",
            "area_name": "Santa Clara County, CA",
            "value": 2.6
        }, {
            "fips_code": 6087,
            "state": "CA",
            "area_name": "Santa Cruz County, CA",
            "value": 4.8
        }, {
            "fips_code": 6089,
            "state": "CA",
            "area_name": "Shasta County, CA",
            "value": 4.6
        }, {
            "fips_code": 6091,
            "state": "CA",
            "area_name": "Sierra County, CA",
            "value": 4.2
        }, {
            "fips_code": 6093,
            "state": "CA",
            "area_name": "Siskiyou County, CA",
            "value": 5.7
        }, {
            "fips_code": 6095,
            "state": "CA",
            "area_name": "Solano County, CA",
            "value": 4.2
        }, {
            "fips_code": 6097,
            "state": "CA",
            "area_name": "Sonoma County, CA",
            "value": 3.1
        }, {
            "fips_code": 6099,
            "state": "CA",
            "area_name": "Stanislaus County, CA",
            "value": 5.4
        }, {
            "fips_code": 6101,
            "state": "CA",
            "area_name": "Sutter County, CA",
            "value": 6.6
        }, {
            "fips_code": 6103,
            "state": "CA",
            "area_name": "Tehama County, CA",
            "value": 4.8
        }, {
            "fips_code": 6105,
            "state": "CA",
            "area_name": "Trinity County, CA",
            "value": 4.6
        }, {
            "fips_code": 6107,
            "state": "CA",
            "area_name": "Tulare County, CA",
            "value": 8.199999999999999
        }, {
            "fips_code": 6109,
            "state": "CA",
            "area_name": "Tuolumne County, CA",
            "value": 4.5
        }, {
            "fips_code": 6111,
            "state": "CA",
            "area_name": "Ventura County, CA",
            "value": 3.7
        }, {
            "fips_code": 6113,
            "state": "CA",
            "area_name": "Yolo County, CA",
            "value": 4.0
        }, {
            "fips_code": 6115,
            "state": "CA",
            "area_name": "Yuba County, CA",
            "value": 5.5
        }, {
            "fips_code": 8000,
            "state": "CO",
            "area_name": "Colorado",
            "value": 3.0
        }, {
            "fips_code": 8001,
            "state": "CO",
            "area_name": "Adams County, CO",
            "value": 3.4
        }, {
            "fips_code": 8003,
            "state": "CO",
            "area_name": "Alamosa County, CO",
            "value": 3.6
        }, {
            "fips_code": 8005,
            "state": "CO",
            "area_name": "Arapahoe County, CO",
            "value": 3.1
        }, {
            "fips_code": 8007,
            "state": "CO",
            "area_name": "Archuleta County, CO",
            "value": 3.2
        }, {
            "fips_code": 8009,
            "state": "CO",
            "area_name": "Baca County, CO",
            "value": 1.7
        }, {
            "fips_code": 8011,
            "state": "CO",
            "area_name": "Bent County, CO",
            "value": 3.6
        }, {
            "fips_code": 8013,
            "state": "CO",
            "area_name": "Boulder County, CO",
            "value": 2.5
        }, {
            "fips_code": 8014,
            "state": "CO",
            "area_name": "Broomfield County/city, CO",
            "value": 2.6
        }, {
            "fips_code": 8015,
            "state": "CO",
            "area_name": "Chaffee County, CO",
            "value": 2.7
        }, {
            "fips_code": 8017,
            "state": "CO",
            "area_name": "Cheyenne County, CO",
            "value": 1.9
        }, {
            "fips_code": 8019,
            "state": "CO",
            "area_name": "Clear Creek County, CO",
            "value": 2.9
        }, {
            "fips_code": 8021,
            "state": "CO",
            "area_name": "Conejos County, CO",
            "value": 3.2
        }, {
            "fips_code": 8023,
            "state": "CO",
            "area_name": "Costilla County, CO",
            "value": 4.1
        }, {
            "fips_code": 8025,
            "state": "CO",
            "area_name": "Crowley County, CO",
            "value": 3.8
        }, {
            "fips_code": 8027,
            "state": "CO",
            "area_name": "Custer County, CO",
            "value": 2.9
        }, {
            "fips_code": 8029,
            "state": "CO",
            "area_name": "Delta County, CO",
            "value": 3.6
        }, {
            "fips_code": 8031,
            "state": "CO",
            "area_name": "Denver County/city, CO",
            "value": 3.1
        }, {
            "fips_code": 8033,
            "state": "CO",
            "area_name": "Dolores County, CO",
            "value": 3.0
        }, {
            "fips_code": 8035,
            "state": "CO",
            "area_name": "Douglas County, CO",
            "value": 2.5
        }, {
            "fips_code": 8037,
            "state": "CO",
            "area_name": "Eagle County, CO",
            "value": 2.6
        }, {
            "fips_code": 8039,
            "state": "CO",
            "area_name": "Elbert County, CO",
            "value": 2.4
        }, {
            "fips_code": 8041,
            "state": "CO",
            "area_name": "El Paso County, CO",
            "value": 3.3
        }, {
            "fips_code": 8043,
            "state": "CO",
            "area_name": "Fremont County, CO",
            "value": 4.7
        }, {
            "fips_code": 8045,
            "state": "CO",
            "area_name": "Garfield County, CO",
            "value": 3.0
        }, {
            "fips_code": 8047,
            "state": "CO",
            "area_name": "Gilpin County, CO",
            "value": 2.7
        }, {
            "fips_code": 8049,
            "state": "CO",
            "area_name": "Grand County, CO",
            "value": 2.7
        }, {
            "fips_code": 8051,
            "state": "CO",
            "area_name": "Gunnison County, CO",
            "value": 2.5
        }, {
            "fips_code": 8053,
            "state": "CO",
            "area_name": "Hinsdale County, CO",
            "value": 2.5
        }, {
            "fips_code": 8055,
            "state": "CO",
            "area_name": "Huerfano County, CO",
            "value": 6.1
        }, {
            "fips_code": 8057,
            "state": "CO",
            "area_name": "Jackson County, CO",
            "value": 2.1
        }, {
            "fips_code": 8059,
            "state": "CO",
            "area_name": "Jefferson County, CO",
            "value": 2.8
        }, {
            "fips_code": 8061,
            "state": "CO",
            "area_name": "Kiowa County, CO",
            "value": 1.8
        }, {
            "fips_code": 8063,
            "state": "CO",
            "area_name": "Kit Carson County, CO",
            "value": 1.9
        }, {
            "fips_code": 8065,
            "state": "CO",
            "area_name": "Lake County, CO",
            "value": 2.6
        }, {
            "fips_code": 8067,
            "state": "CO",
            "area_name": "La Plata County, CO",
            "value": 3.0
        }, {
            "fips_code": 8069,
            "state": "CO",
            "area_name": "Larimer County, CO",
            "value": 2.7
        }, {
            "fips_code": 8071,
            "state": "CO",
            "area_name": "Las Animas County, CO",
            "value": 4.6
        }, {
            "fips_code": 8073,
            "state": "CO",
            "area_name": "Lincoln County, CO",
            "value": 2.9
        }, {
            "fips_code": 8075,
            "state": "CO",
            "area_name": "Logan County, CO",
            "value": 2.8
        }, {
            "fips_code": 8077,
            "state": "CO",
            "area_name": "Mesa County, CO",
            "value": 3.4
        }, {
            "fips_code": 8079,
            "state": "CO",
            "area_name": "Mineral County, CO",
            "value": 2.8
        }, {
            "fips_code": 8081,
            "state": "CO",
            "area_name": "Moffat County, CO",
            "value": 3.2
        }, {
            "fips_code": 8083,
            "state": "CO",
            "area_name": "Montezuma County, CO",
            "value": 3.8
        }, {
            "fips_code": 8085,
            "state": "CO",
            "area_name": "Montrose County, CO",
            "value": 3.4
        }, {
            "fips_code": 8087,
            "state": "CO",
            "area_name": "Morgan County, CO",
            "value": 3.2
        }, {
            "fips_code": 8089,
            "state": "CO",
            "area_name": "Otero County, CO",
            "value": 4.2
        }, {
            "fips_code": 8091,
            "state": "CO",
            "area_name": "Ouray County, CO",
            "value": 3.1
        }, {
            "fips_code": 8093,
            "state": "CO",
            "area_name": "Park County, CO",
            "value": 2.6
        }, {
            "fips_code": 8095,
            "state": "CO",
            "area_name": "Phillips County, CO",
            "value": 2.1
        }, {
            "fips_code": 8097,
            "state": "CO",
            "area_name": "Pitkin County, CO",
            "value": 3.3
        }, {
            "fips_code": 8099,
            "state": "CO",
            "area_name": "Prowers County, CO",
            "value": 2.8
        }, {
            "fips_code": 8101,
            "state": "CO",
            "area_name": "Pueblo County, CO",
            "value": 4.4
        }, {
            "fips_code": 8103,
            "state": "CO",
            "area_name": "Rio Blanco County, CO",
            "value": 3.7
        }, {
            "fips_code": 8105,
            "state": "CO",
            "area_name": "Rio Grande County, CO",
            "value": 4.2
        }, {
            "fips_code": 8107,
            "state": "CO",
            "area_name": "Routt County, CO",
            "value": 2.5
        }, {
            "fips_code": 8109,
            "state": "CO",
            "area_name": "Saguache County, CO",
            "value": 3.4
        }, {
            "fips_code": 8111,
            "state": "CO",
            "area_name": "San Juan County, CO",
            "value": 2.6
        }, {
            "fips_code": 8113,
            "state": "CO",
            "area_name": "San Miguel County, CO",
            "value": 3.1
        }, {
            "fips_code": 8115,
            "state": "CO",
            "area_name": "Sedgwick County, CO",
            "value": 2.6
        }, {
            "fips_code": 8117,
            "state": "CO",
            "area_name": "Summit County, CO",
            "value": 2.2
        }, {
            "fips_code": 8119,
            "state": "CO",
            "area_name": "Teller County, CO",
            "value": 3.0
        }, {
            "fips_code": 8121,
            "state": "CO",
            "area_name": "Washington County, CO",
            "value": 2.3
        }, {
            "fips_code": 8123,
            "state": "CO",
            "area_name": "Weld County, CO",
            "value": 3.2
        }, {
            "fips_code": 8125,
            "state": "CO",
            "area_name": "Yuma County, CO",
            "value": 2.0
        }, {
            "fips_code": 9000,
            "state": "CT",
            "area_name": "Connecticut",
            "value": 4.2
        }, {
            "fips_code": 9001,
            "state": "CT",
            "area_name": "Fairfield County, CT",
            "value": 4.1
        }, {
            "fips_code": 9003,
            "state": "CT",
            "area_name": "Hartford County, CT",
            "value": 4.3
        }, {
            "fips_code": 9005,
            "state": "CT",
            "area_name": "Litchfield County, CT",
            "value": 3.9
        }, {
            "fips_code": 9007,
            "state": "CT",
            "area_name": "Middlesex County, CT",
            "value": 3.6
        }, {
            "fips_code": 9009,
            "state": "CT",
            "area_name": "New Haven County, CT",
            "value": 4.3
        }, {
            "fips_code": 9011,
            "state": "CT",
            "area_name": "New London County, CT",
            "value": 4.2
        }, {
            "fips_code": 9013,
            "state": "CT",
            "area_name": "Tolland County, CT",
            "value": 3.8
        }, {
            "fips_code": 9015,
            "state": "CT",
            "area_name": "Windham County, CT",
            "value": 4.3
        }, {
            "fips_code": 10000,
            "state": "DE",
            "area_name": "Delaware",
            "value": 4.5
        }, {
            "fips_code": 10001,
            "state": "DE",
            "area_name": "Kent County, DE",
            "value": 5.2
        }, {
            "fips_code": 10003,
            "state": "DE",
            "area_name": "New Castle County, DE",
            "value": 4.4
        }, {
            "fips_code": 10005,
            "state": "DE",
            "area_name": "Sussex County, DE",
            "value": 4.4
        }, {
            "fips_code": 11000,
            "state": "DC",
            "area_name": "District of Columbia",
            "value": 4.7
        }, {
            "fips_code": 11001,
            "state": "DC",
            "area_name": "District of Columbia",
            "value": 4.7
        }, {
            "fips_code": 12000,
            "state": "FL",
            "area_name": "Florida",
            "value": 2.9
        }, {
            "fips_code": 12001,
            "state": "FL",
            "area_name": "Alachua County, FL",
            "value": 2.8
        }, {
            "fips_code": 12003,
            "state": "FL",
            "area_name": "Baker County, FL",
            "value": 2.8
        }, {
            "fips_code": 12005,
            "state": "FL",
            "area_name": "Bay County, FL",
            "value": 2.7
        }, {
            "fips_code": 12007,
            "state": "FL",
            "area_name": "Bradford County, FL",
            "value": 3.1
        }, {
            "fips_code": 12009,
            "state": "FL",
            "area_name": "Brevard County, FL",
            "value": 2.8
        }, {
            "fips_code": 12011,
            "state": "FL",
            "area_name": "Broward County, FL",
            "value": 2.9
        }, {
            "fips_code": 12013,
            "state": "FL",
            "area_name": "Calhoun County, FL",
            "value": 3.3
        }, {
            "fips_code": 12015,
            "state": "FL",
            "area_name": "Charlotte County, FL",
            "value": 3.4
        }, {
            "fips_code": 12017,
            "state": "FL",
            "area_name": "Citrus County, FL",
            "value": 4.1
        }, {
            "fips_code": 12019,
            "state": "FL",
            "area_name": "Clay County, FL",
            "value": 2.6
        }, {
            "fips_code": 12021,
            "state": "FL",
            "area_name": "Collier County, FL",
            "value": 2.8
        }, {
            "fips_code": 12023,
            "state": "FL",
            "area_name": "Columbia County, FL",
            "value": 3.2
        }, {
            "fips_code": 12027,
            "state": "FL",
            "area_name": "DeSoto County, FL",
            "value": 3.3
        }, {
            "fips_code": 12029,
            "state": "FL",
            "area_name": "Dixie County, FL",
            "value": 3.3
        }, {
            "fips_code": 12031,
            "state": "FL",
            "area_name": "Duval County, FL",
            "value": 3.0
        }, {
            "fips_code": 12033,
            "state": "FL",
            "area_name": "Escambia County, FL",
            "value": 3.0
        }, {
            "fips_code": 12035,
            "state": "FL",
            "area_name": "Flagler County, FL",
            "value": 3.4
        }, {
            "fips_code": 12037,
            "state": "FL",
            "area_name": "Franklin County, FL",
            "value": 2.8
        }, {
            "fips_code": 12039,
            "state": "FL",
            "area_name": "Gadsden County, FL",
            "value": 3.8
        }, {
            "fips_code": 12041,
            "state": "FL",
            "area_name": "Gilchrist County, FL",
            "value": 3.0
        }, {
            "fips_code": 12043,
            "state": "FL",
            "area_name": "Glades County, FL",
            "value": 3.2
        }, {
            "fips_code": 12045,
            "state": "FL",
            "area_name": "Gulf County, FL",
            "value": 2.7
        }, {
            "fips_code": 12047,
            "state": "FL",
            "area_name": "Hamilton County, FL",
            "value": 4.0
        }, {
            "fips_code": 12049,
            "state": "FL",
            "area_name": "Hardee County, FL",
            "value": 3.9
        }, {
            "fips_code": 12051,
            "state": "FL",
            "area_name": "Hendry County, FL",
            "value": 4.7
        }, {
            "fips_code": 12053,
            "state": "FL",
            "area_name": "Hernando County, FL",
            "value": 3.6
        }, {
            "fips_code": 12055,
            "state": "FL",
            "area_name": "Highlands County, FL",
            "value": 4.2
        }, {
            "fips_code": 12057,
            "state": "FL",
            "area_name": "Hillsborough County, FL",
            "value": 2.8
        }, {
            "fips_code": 12059,
            "state": "FL",
            "area_name": "Holmes County, FL",
            "value": 3.1
        }, {
            "fips_code": 12061,
            "state": "FL",
            "area_name": "Indian River County, FL",
            "value": 3.4
        }, {
            "fips_code": 12063,
            "state": "FL",
            "area_name": "Jackson County, FL",
            "value": 3.2
        }, {
            "fips_code": 12065,
            "state": "FL",
            "area_name": "Jefferson County, FL",
            "value": 3.2
        }, {
            "fips_code": 12067,
            "state": "FL",
            "area_name": "Lafayette County, FL",
            "value": 3.1
        }, {
            "fips_code": 12069,
            "state": "FL",
            "area_name": "Lake County, FL",
            "value": 3.0
        }, {
            "fips_code": 12071,
            "state": "FL",
            "area_name": "Lee County, FL",
            "value": 3.1
        }, {
            "fips_code": 12073,
            "state": "FL",
            "area_name": "Leon County, FL",
            "value": 3.0
        }, {
            "fips_code": 12075,
            "state": "FL",
            "area_name": "Levy County, FL",
            "value": 3.5
        }, {
            "fips_code": 12077,
            "state": "FL",
            "area_name": "Liberty County, FL",
            "value": 3.2
        }, {
            "fips_code": 12079,
            "state": "FL",
            "area_name": "Madison County, FL",
            "value": 3.3
        }, {
            "fips_code": 12081,
            "state": "FL",
            "area_name": "Manatee County, FL",
            "value": 2.9
        }, {
            "fips_code": 12083,
            "state": "FL",
            "area_name": "Marion County, FL",
            "value": 3.4
        }, {
            "fips_code": 12085,
            "state": "FL",
            "area_name": "Martin County, FL",
            "value": 2.7
        }, {
            "fips_code": 12086,
            "state": "FL",
            "area_name": "Miami-Dade County, FL",
            "value": 2.6
        }, {
            "fips_code": 12087,
            "state": "FL",
            "area_name": "Monroe County, FL",
            "value": 1.9
        }, {
            "fips_code": 12089,
            "state": "FL",
            "area_name": "Nassau County, FL",
            "value": 2.5
        }, {
            "fips_code": 12091,
            "state": "FL",
            "area_name": "Okaloosa County, FL",
            "value": 2.4
        }, {
            "fips_code": 12093,
            "state": "FL",
            "area_name": "Okeechobee County, FL",
            "value": 3.1
        }, {
            "fips_code": 12095,
            "state": "FL",
            "area_name": "Orange County, FL",
            "value": 2.9
        }, {
            "fips_code": 12097,
            "state": "FL",
            "area_name": "Osceola County, FL",
            "value": 3.4
        }, {
            "fips_code": 12099,
            "state": "FL",
            "area_name": "Palm Beach County, FL",
            "value": 2.9
        }, {
            "fips_code": 12101,
            "state": "FL",
            "area_name": "Pasco County, FL",
            "value": 3.0
        }, {
            "fips_code": 12103,
            "state": "FL",
            "area_name": "Pinellas County, FL",
            "value": 2.6
        }, {
            "fips_code": 12105,
            "state": "FL",
            "area_name": "Polk County, FL",
            "value": 3.5
        }, {
            "fips_code": 12107,
            "state": "FL",
            "area_name": "Putnam County, FL",
            "value": 4.1
        }, {
            "fips_code": 12109,
            "state": "FL",
            "area_name": "St. Johns County, FL",
            "value": 2.3
        }, {
            "fips_code": 12111,
            "state": "FL",
            "area_name": "St. Lucie County, FL",
            "value": 3.4
        }, {
            "fips_code": 12113,
            "state": "FL",
            "area_name": "Santa Rosa County, FL",
            "value": 2.7
        }, {
            "fips_code": 12115,
            "state": "FL",
            "area_name": "Sarasota County, FL",
            "value": 2.9
        }, {
            "fips_code": 12117,
            "state": "FL",
            "area_name": "Seminole County, FL",
            "value": 2.7
        }, {
            "fips_code": 12119,
            "state": "FL",
            "area_name": "Sumter County, FL",
            "value": 4.1
        }, {
            "fips_code": 12121,
            "state": "FL",
            "area_name": "Suwannee County, FL",
            "value": 3.2
        }, {
            "fips_code": 12123,
            "state": "FL",
            "area_name": "Taylor County, FL",
            "value": 3.3
        }, {
            "fips_code": 12125,
            "state": "FL",
            "area_name": "Union County, FL",
            "value": 2.9
        }, {
            "fips_code": 12127,
            "state": "FL",
            "area_name": "Volusia County, FL",
            "value": 3.1
        }, {
            "fips_code": 12129,
            "state": "FL",
            "area_name": "Wakulla County, FL",
            "value": 2.5
        }, {
            "fips_code": 12131,
            "state": "FL",
            "area_name": "Walton County, FL",
            "value": 2.6
        }, {
            "fips_code": 12133,
            "state": "FL",
            "area_name": "Washington County, FL",
            "value": 3.2
        }, {
            "fips_code": 13000,
            "state": "GA",
            "area_name": "Georgia",
            "value": 3.0
        }, {
            "fips_code": 13001,
            "state": "GA",
            "area_name": "Appling County, GA",
            "value": 3.6
        }, {
            "fips_code": 13003,
            "state": "GA",
            "area_name": "Atkinson County, GA",
            "value": 2.7
        }, {
            "fips_code": 13005,
            "state": "GA",
            "area_name": "Bacon County, GA",
            "value": 2.9
        }, {
            "fips_code": 13007,
            "state": "GA",
            "area_name": "Baker County, GA",
            "value": 4.0
        }, {
            "fips_code": 13009,
            "state": "GA",
            "area_name": "Baldwin County, GA",
            "value": 4.0
        }, {
            "fips_code": 13011,
            "state": "GA",
            "area_name": "Banks County, GA",
            "value": 2.2
        }, {
            "fips_code": 13013,
            "state": "GA",
            "area_name": "Barrow County, GA",
            "value": 2.5
        }, {
            "fips_code": 13015,
            "state": "GA",
            "area_name": "Bartow County, GA",
            "value": 2.9
        }, {
            "fips_code": 13017,
            "state": "GA",
            "area_name": "Ben Hill County, GA",
            "value": 4.3
        }, {
            "fips_code": 13019,
            "state": "GA",
            "area_name": "Berrien County, GA",
            "value": 3.2
        }, {
            "fips_code": 13021,
            "state": "GA",
            "area_name": "Bibb County, GA",
            "value": 3.7
        }, {
            "fips_code": 13023,
            "state": "GA",
            "area_name": "Bleckley County, GA",
            "value": 4.3
        }, {
            "fips_code": 13025,
            "state": "GA",
            "area_name": "Brantley County, GA",
            "value": 3.5
        }, {
            "fips_code": 13027,
            "state": "GA",
            "area_name": "Brooks County, GA",
            "value": 3.1
        }, {
            "fips_code": 13029,
            "state": "GA",
            "area_name": "Bryan County, GA",
            "value": 2.6
        }, {
            "fips_code": 13031,
            "state": "GA",
            "area_name": "Bulloch County, GA",
            "value": 3.4
        }, {
            "fips_code": 13033,
            "state": "GA",
            "area_name": "Burke County, GA",
            "value": 5.2
        }, {
            "fips_code": 13035,
            "state": "GA",
            "area_name": "Butts County, GA",
            "value": 2.8
        }, {
            "fips_code": 13037,
            "state": "GA",
            "area_name": "Calhoun County, GA",
            "value": 3.2
        }, {
            "fips_code": 13039,
            "state": "GA",
            "area_name": "Camden County, GA",
            "value": 3.0
        }, {
            "fips_code": 13043,
            "state": "GA",
            "area_name": "Candler County, GA",
            "value": 2.4
        }, {
            "fips_code": 13045,
            "state": "GA",
            "area_name": "Carroll County, GA",
            "value": 3.1
        }, {
            "fips_code": 13047,
            "state": "GA",
            "area_name": "Catoosa County, GA",
            "value": 2.7
        }, {
            "fips_code": 13049,
            "state": "GA",
            "area_name": "Charlton County, GA",
            "value": 3.1
        }, {
            "fips_code": 13051,
            "state": "GA",
            "area_name": "Chatham County, GA",
            "value": 3.0
        }, {
            "fips_code": 13053,
            "state": "GA",
            "area_name": "Chattahoochee County, GA",
            "value": 4.6
        }, {
            "fips_code": 13055,
            "state": "GA",
            "area_name": "Chattooga County, GA",
            "value": 4.2
        }, {
            "fips_code": 13057,
            "state": "GA",
            "area_name": "Cherokee County, GA",
            "value": 2.4
        }, {
            "fips_code": 13059,
            "state": "GA",
            "area_name": "Clarke County, GA",
            "value": 3.3
        }, {
            "fips_code": 13061,
            "state": "GA",
            "area_name": "Clay County, GA",
            "value": 6.7
        }, {
            "fips_code": 13063,
            "state": "GA",
            "area_name": "Clayton County, GA",
            "value": 3.9
        }, {
            "fips_code": 13065,
            "state": "GA",
            "area_name": "Clinch County, GA",
            "value": 2.8
        }, {
            "fips_code": 13067,
            "state": "GA",
            "area_name": "Cobb County, GA",
            "value": 2.6
        }, {
            "fips_code": 13069,
            "state": "GA",
            "area_name": "Coffee County, GA",
            "value": 3.5
        }, {
            "fips_code": 13071,
            "state": "GA",
            "area_name": "Colquitt County, GA",
            "value": 2.8
        }, {
            "fips_code": 13073,
            "state": "GA",
            "area_name": "Columbia County, GA",
            "value": 2.8
        }, {
            "fips_code": 13075,
            "state": "GA",
            "area_name": "Cook County, GA",
            "value": 3.1
        }, {
            "fips_code": 13077,
            "state": "GA",
            "area_name": "Coweta County, GA",
            "value": 2.7
        }, {
            "fips_code": 13079,
            "state": "GA",
            "area_name": "Crawford County, GA",
            "value": 3.1
        }, {
            "fips_code": 13081,
            "state": "GA",
            "area_name": "Crisp County, GA",
            "value": 4.2
        }, {
            "fips_code": 13083,
            "state": "GA",
            "area_name": "Dade County, GA",
            "value": 2.6
        }, {
            "fips_code": 13085,
            "state": "GA",
            "area_name": "Dawson County, GA",
            "value": 2.5
        }, {
            "fips_code": 13087,
            "state": "GA",
            "area_name": "Decatur County, GA",
            "value": 3.2
        }, {
            "fips_code": 13089,
            "state": "GA",
            "area_name": "DeKalb County, GA",
            "value": 3.1
        }, {
            "fips_code": 13091,
            "state": "GA",
            "area_name": "Dodge County, GA",
            "value": 3.7
        }, {
            "fips_code": 13093,
            "state": "GA",
            "area_name": "Dooly County, GA",
            "value": 4.0
        }, {
            "fips_code": 13095,
            "state": "GA",
            "area_name": "Dougherty County, GA",
            "value": 4.3
        }, {
            "fips_code": 13097,
            "state": "GA",
            "area_name": "Douglas County, GA",
            "value": 3.2
        }, {
            "fips_code": 13099,
            "state": "GA",
            "area_name": "Early County, GA",
            "value": 3.6
        }, {
            "fips_code": 13101,
            "state": "GA",
            "area_name": "Echols County, GA",
            "value": 2.5
        }, {
            "fips_code": 13103,
            "state": "GA",
            "area_name": "Effingham County, GA",
            "value": 2.6
        }, {
            "fips_code": 13105,
            "state": "GA",
            "area_name": "Elbert County, GA",
            "value": 3.7
        }, {
            "fips_code": 13107,
            "state": "GA",
            "area_name": "Emanuel County, GA",
            "value": 4.1
        }, {
            "fips_code": 13109,
            "state": "GA",
            "area_name": "Evans County, GA",
            "value": 2.9
        }, {
            "fips_code": 13111,
            "state": "GA",
            "area_name": "Fannin County, GA",
            "value": 2.7
        }, {
            "fips_code": 13113,
            "state": "GA",
            "area_name": "Fayette County, GA",
            "value": 2.6
        }, {
            "fips_code": 13115,
            "state": "GA",
            "area_name": "Floyd County, GA",
            "value": 3.1
        }, {
            "fips_code": 13117,
            "state": "GA",
            "area_name": "Forsyth County, GA",
            "value": 2.3
        }, {
            "fips_code": 13119,
            "state": "GA",
            "area_name": "Franklin County, GA",
            "value": 3.2
        }, {
            "fips_code": 13121,
            "state": "GA",
            "area_name": "Fulton County, GA",
            "value": 3.2
        }, {
            "fips_code": 13123,
            "state": "GA",
            "area_name": "Gilmer County, GA",
            "value": 3.1
        }, {
            "fips_code": 13125,
            "state": "GA",
            "area_name": "Glascock County, GA",
            "value": 3.0
        }, {
            "fips_code": 13127,
            "state": "GA",
            "area_name": "Glynn County, GA",
            "value": 2.9
        }, {
            "fips_code": 13129,
            "state": "GA",
            "area_name": "Gordon County, GA",
            "value": 2.8
        }, {
            "fips_code": 13131,
            "state": "GA",
            "area_name": "Grady County, GA",
            "value": 3.0
        }, {
            "fips_code": 13133,
            "state": "GA",
            "area_name": "Greene County, GA",
            "value": 3.2
        }, {
            "fips_code": 13135,
            "state": "GA",
            "area_name": "Gwinnett County, GA",
            "value": 2.7
        }, {
            "fips_code": 13137,
            "state": "GA",
            "area_name": "Habersham County, GA",
            "value": 3.1
        }, {
            "fips_code": 13139,
            "state": "GA",
            "area_name": "Hall County, GA",
            "value": 2.4
        }, {
            "fips_code": 13141,
            "state": "GA",
            "area_name": "Hancock County, GA",
            "value": 4.9
        }, {
            "fips_code": 13143,
            "state": "GA",
            "area_name": "Haralson County, GA",
            "value": 3.0
        }, {
            "fips_code": 13145,
            "state": "GA",
            "area_name": "Harris County, GA",
            "value": 2.7
        }, {
            "fips_code": 13147,
            "state": "GA",
            "area_name": "Hart County, GA",
            "value": 3.0
        }, {
            "fips_code": 13149,
            "state": "GA",
            "area_name": "Heard County, GA",
            "value": 3.0
        }, {
            "fips_code": 13151,
            "state": "GA",
            "area_name": "Henry County, GA",
            "value": 3.2
        }, {
            "fips_code": 13153,
            "state": "GA",
            "area_name": "Houston County, GA",
            "value": 3.1
        }, {
            "fips_code": 13155,
            "state": "GA",
            "area_name": "Irwin County, GA",
            "value": 4.0
        }, {
            "fips_code": 13157,
            "state": "GA",
            "area_name": "Jackson County, GA",
            "value": 2.0
        }, {
            "fips_code": 13159,
            "state": "GA",
            "area_name": "Jasper County, GA",
            "value": 2.6
        }, {
            "fips_code": 13161,
            "state": "GA",
            "area_name": "Jeff Davis County, GA",
            "value": 3.6
        }, {
            "fips_code": 13163,
            "state": "GA",
            "area_name": "Jefferson County, GA",
            "value": 4.0
        }, {
            "fips_code": 13165,
            "state": "GA",
            "area_name": "Jenkins County, GA",
            "value": 4.2
        }, {
            "fips_code": 13167,
            "state": "GA",
            "area_name": "Johnson County, GA",
            "value": 2.9
        }, {
            "fips_code": 13169,
            "state": "GA",
            "area_name": "Jones County, GA",
            "value": 2.9
        }, {
            "fips_code": 13171,
            "state": "GA",
            "area_name": "Lamar County, GA",
            "value": 3.3
        }, {
            "fips_code": 13173,
            "state": "GA",
            "area_name": "Lanier County, GA",
            "value": 3.4
        }, {
            "fips_code": 13175,
            "state": "GA",
            "area_name": "Laurens County, GA",
            "value": 3.8
        }, {
            "fips_code": 13177,
            "state": "GA",
            "area_name": "Lee County, GA",
            "value": 2.9
        }, {
            "fips_code": 13179,
            "state": "GA",
            "area_name": "Liberty County, GA",
            "value": 3.3
        }, {
            "fips_code": 13181,
            "state": "GA",
            "area_name": "Lincoln County, GA",
            "value": 3.5
        }, {
            "fips_code": 13183,
            "state": "GA",
            "area_name": "Long County, GA",
            "value": 3.1
        }, {
            "fips_code": 13185,
            "state": "GA",
            "area_name": "Lowndes County, GA",
            "value": 3.3
        }, {
            "fips_code": 13187,
            "state": "GA",
            "area_name": "Lumpkin County, GA",
            "value": 2.4
        }, {
            "fips_code": 13189,
            "state": "GA",
            "area_name": "McDuffie County, GA",
            "value": 4.4
        }, {
            "fips_code": 13191,
            "state": "GA",
            "area_name": "McIntosh County, GA",
            "value": 3.1
        }, {
            "fips_code": 13193,
            "state": "GA",
            "area_name": "Macon County, GA",
            "value": 4.2
        }, {
            "fips_code": 13195,
            "state": "GA",
            "area_name": "Madison County, GA",
            "value": 2.9
        }, {
            "fips_code": 13197,
            "state": "GA",
            "area_name": "Marion County, GA",
            "value": 3.5
        }, {
            "fips_code": 13199,
            "state": "GA",
            "area_name": "Meriwether County, GA",
            "value": 3.8
        }, {
            "fips_code": 13201,
            "state": "GA",
            "area_name": "Miller County, GA",
            "value": 2.6
        }, {
            "fips_code": 13205,
            "state": "GA",
            "area_name": "Mitchell County, GA",
            "value": 4.0
        }, {
            "fips_code": 13207,
            "state": "GA",
            "area_name": "Monroe County, GA",
            "value": 2.8
        }, {
            "fips_code": 13209,
            "state": "GA",
            "area_name": "Montgomery County, GA",
            "value": 3.8
        }, {
            "fips_code": 13211,
            "state": "GA",
            "area_name": "Morgan County, GA",
            "value": 2.7
        }, {
            "fips_code": 13213,
            "state": "GA",
            "area_name": "Murray County, GA",
            "value": 4.0
        }, {
            "fips_code": 13215,
            "state": "GA",
            "area_name": "Muscogee County, GA",
            "value": 4.1
        }, {
            "fips_code": 13217,
            "state": "GA",
            "area_name": "Newton County, GA",
            "value": 3.4
        }, {
            "fips_code": 13219,
            "state": "GA",
            "area_name": "Oconee County, GA",
            "value": 2.3
        }, {
            "fips_code": 13221,
            "state": "GA",
            "area_name": "Oglethorpe County, GA",
            "value": 2.7
        }, {
            "fips_code": 13223,
            "state": "GA",
            "area_name": "Paulding County, GA",
            "value": 2.6
        }, {
            "fips_code": 13225,
            "state": "GA",
            "area_name": "Peach County, GA",
            "value": 3.8
        }, {
            "fips_code": 13227,
            "state": "GA",
            "area_name": "Pickens County, GA",
            "value": 2.6
        }, {
            "fips_code": 13229,
            "state": "GA",
            "area_name": "Pierce County, GA",
            "value": 2.7
        }, {
            "fips_code": 13231,
            "state": "GA",
            "area_name": "Pike County, GA",
            "value": 2.7
        }, {
            "fips_code": 13233,
            "state": "GA",
            "area_name": "Polk County, GA",
            "value": 3.1
        }, {
            "fips_code": 13235,
            "state": "GA",
            "area_name": "Pulaski County, GA",
            "value": 3.3
        }, {
            "fips_code": 13237,
            "state": "GA",
            "area_name": "Putnam County, GA",
            "value": 3.5
        }, {
            "fips_code": 13239,
            "state": "GA",
            "area_name": "Quitman County, GA",
            "value": 4.9
        }, {
            "fips_code": 13241,
            "state": "GA",
            "area_name": "Rabun County, GA",
            "value": 2.9
        }, {
            "fips_code": 13243,
            "state": "GA",
            "area_name": "Randolph County, GA",
            "value": 4.4
        }, {
            "fips_code": 13245,
            "state": "GA",
            "area_name": "Richmond County, GA",
            "value": 4.2
        }, {
            "fips_code": 13247,
            "state": "GA",
            "area_name": "Rockdale County, GA",
            "value": 3.5
        }, {
            "fips_code": 13249,
            "state": "GA",
            "area_name": "Schley County, GA",
            "value": 3.7
        }, {
            "fips_code": 13251,
            "state": "GA",
            "area_name": "Screven County, GA",
            "value": 4.3
        }, {
            "fips_code": 13253,
            "state": "GA",
            "area_name": "Seminole County, GA",
            "value": 3.5
        }, {
            "fips_code": 13255,
            "state": "GA",
            "area_name": "Spalding County, GA",
            "value": 3.3
        }, {
            "fips_code": 13257,
            "state": "GA",
            "area_name": "Stephens County, GA",
            "value": 3.6
        }, {
            "fips_code": 13259,
            "state": "GA",
            "area_name": "Stewart County, GA",
            "value": 3.6
        }, {
            "fips_code": 13261,
            "state": "GA",
            "area_name": "Sumter County, GA",
            "value": 4.1
        }, {
            "fips_code": 13263,
            "state": "GA",
            "area_name": "Talbot County, GA",
            "value": 3.7
        }, {
            "fips_code": 13265,
            "state": "GA",
            "area_name": "Taliaferro County, GA",
            "value": 4.3
        }, {
            "fips_code": 13267,
            "state": "GA",
            "area_name": "Tattnall County, GA",
            "value": 3.0
        }, {
            "fips_code": 13269,
            "state": "GA",
            "area_name": "Taylor County, GA",
            "value": 5.0
        }, {
            "fips_code": 13271,
            "state": "GA",
            "area_name": "Telfair County, GA",
            "value": 5.7
        }, {
            "fips_code": 13273,
            "state": "GA",
            "area_name": "Terrell County, GA",
            "value": 4.5
        }, {
            "fips_code": 13275,
            "state": "GA",
            "area_name": "Thomas County, GA",
            "value": 3.5
        }, {
            "fips_code": 13277,
            "state": "GA",
            "area_name": "Tift County, GA",
            "value": 2.8
        }, {
            "fips_code": 13279,
            "state": "GA",
            "area_name": "Toombs County, GA",
            "value": 3.8
        }, {
            "fips_code": 13281,
            "state": "GA",
            "area_name": "Towns County, GA",
            "value": 4.1
        }, {
            "fips_code": 13283,
            "state": "GA",
            "area_name": "Treutlen County, GA",
            "value": 3.9
        }, {
            "fips_code": 13285,
            "state": "GA",
            "area_name": "Troup County, GA",
            "value": 3.0
        }, {
            "fips_code": 13287,
            "state": "GA",
            "area_name": "Turner County, GA",
            "value": 4.1
        }, {
            "fips_code": 13289,
            "state": "GA",
            "area_name": "Twiggs County, GA",
            "value": 4.6
        }, {
            "fips_code": 13291,
            "state": "GA",
            "area_name": "Union County, GA",
            "value": 2.6
        }, {
            "fips_code": 13293,
            "state": "GA",
            "area_name": "Upson County, GA",
            "value": 3.2
        }, {
            "fips_code": 13295,
            "state": "GA",
            "area_name": "Walker County, GA",
            "value": 3.0
        }, {
            "fips_code": 13297,
            "state": "GA",
            "area_name": "Walton County, GA",
            "value": 2.8
        }, {
            "fips_code": 13299,
            "state": "GA",
            "area_name": "Ware County, GA",
            "value": 3.0
        }, {
            "fips_code": 13301,
            "state": "GA",
            "area_name": "Warren County, GA",
            "value": 3.8
        }, {
            "fips_code": 13303,
            "state": "GA",
            "area_name": "Washington County, GA",
            "value": 3.9
        }, {
            "fips_code": 13305,
            "state": "GA",
            "area_name": "Wayne County, GA",
            "value": 3.1
        }, {
            "fips_code": 13307,
            "state": "GA",
            "area_name": "Webster County, GA",
            "value": 3.7
        }, {
            "fips_code": 13309,
            "state": "GA",
            "area_name": "Wheeler County, GA",
            "value": 5.0
        }, {
            "fips_code": 13311,
            "state": "GA",
            "area_name": "White County, GA",
            "value": 2.4
        }, {
            "fips_code": 13313,
            "state": "GA",
            "area_name": "Whitfield County, GA",
            "value": 3.8
        }, {
            "fips_code": 13315,
            "state": "GA",
            "area_name": "Wilcox County, GA",
            "value": 3.7
        }, {
            "fips_code": 13317,
            "state": "GA",
            "area_name": "Wilkes County, GA",
            "value": 4.1
        }, {
            "fips_code": 13319,
            "state": "GA",
            "area_name": "Wilkinson County, GA",
            "value": 3.3
        }, {
            "fips_code": 13321,
            "state": "GA",
            "area_name": "Worth County, GA",
            "value": 3.1
        }, {
            "fips_code": 15000,
            "state": "HI",
            "area_name": "Hawaii",
            "value": 3.5
        }, {
            "fips_code": 15001,
            "state": "HI",
            "area_name": "Hawaii County, HI",
            "value": 3.6
        }, {
            "fips_code": 15003,
            "state": "HI",
            "area_name": "Honolulu County/city, HI",
            "value": 3.5
        }, {
            "fips_code": 15007,
            "state": "HI",
            "area_name": "Kauai County, HI",
            "value": 3.6
        }, {
            "fips_code": 15009,
            "state": "HI",
            "area_name": "Maui County, HI",
            "value": 3.5
        }, {
            "fips_code": 16000,
            "state": "ID",
            "area_name": "Idaho",
            "value": 2.7
        }, {
            "fips_code": 16001,
            "state": "ID",
            "area_name": "Ada County, ID",
            "value": 2.3
        }, {
            "fips_code": 16003,
            "state": "ID",
            "area_name": "Adams County, ID",
            "value": 5.3
        }, {
            "fips_code": 16005,
            "state": "ID",
            "area_name": "Bannock County, ID",
            "value": 2.7
        }, {
            "fips_code": 16007,
            "state": "ID",
            "area_name": "Bear Lake County, ID",
            "value": 2.6
        }, {
            "fips_code": 16009,
            "state": "ID",
            "area_name": "Benewah County, ID",
            "value": 4.2
        }, {
            "fips_code": 16011,
            "state": "ID",
            "area_name": "Bingham County, ID",
            "value": 2.6
        }, {
            "fips_code": 16013,
            "state": "ID",
            "area_name": "Blaine County, ID",
            "value": 2.5
        }, {
            "fips_code": 16015,
            "state": "ID",
            "area_name": "Boise County, ID",
            "value": 3.8
        }, {
            "fips_code": 16017,
            "state": "ID",
            "area_name": "Bonner County, ID",
            "value": 3.6
        }, {
            "fips_code": 16019,
            "state": "ID",
            "area_name": "Bonneville County, ID",
            "value": 2.3
        }, {
            "fips_code": 16021,
            "state": "ID",
            "area_name": "Boundary County, ID",
            "value": 3.8
        }, {
            "fips_code": 16023,
            "state": "ID",
            "area_name": "Butte County, ID",
            "value": 3.0
        }, {
            "fips_code": 16025,
            "state": "ID",
            "area_name": "Camas County, ID",
            "value": 2.8
        }, {
            "fips_code": 16027,
            "state": "ID",
            "area_name": "Canyon County, ID",
            "value": 2.9
        }, {
            "fips_code": 16029,
            "state": "ID",
            "area_name": "Caribou County, ID",
            "value": 2.8
        }, {
            "fips_code": 16031,
            "state": "ID",
            "area_name": "Cassia County, ID",
            "value": 2.2
        }, {
            "fips_code": 16033,
            "state": "ID",
            "area_name": "Clark County, ID",
            "value": 3.6
        }, {
            "fips_code": 16035,
            "state": "ID",
            "area_name": "Clearwater County, ID",
            "value": 5.1
        }, {
            "fips_code": 16037,
            "state": "ID",
            "area_name": "Custer County, ID",
            "value": 3.2
        }, {
            "fips_code": 16039,
            "state": "ID",
            "area_name": "Elmore County, ID",
            "value": 2.9
        }, {
            "fips_code": 16041,
            "state": "ID",
            "area_name": "Franklin County, ID",
            "value": 2.2
        }, {
            "fips_code": 16043,
            "state": "ID",
            "area_name": "Fremont County, ID",
            "value": 2.5
        }, {
            "fips_code": 16045,
            "state": "ID",
            "area_name": "Gem County, ID",
            "value": 2.9
        }, {
            "fips_code": 16047,
            "state": "ID",
            "area_name": "Gooding County, ID",
            "value": 2.4
        }, {
            "fips_code": 16049,
            "state": "ID",
            "area_name": "Idaho County, ID",
            "value": 3.8
        }, {
            "fips_code": 16051,
            "state": "ID",
            "area_name": "Jefferson County, ID",
            "value": 2.2
        }, {
            "fips_code": 16053,
            "state": "ID",
            "area_name": "Jerome County, ID",
            "value": 2.5
        }, {
            "fips_code": 16055,
            "state": "ID",
            "area_name": "Kootenai County, ID",
            "value": 3.2
        }, {
            "fips_code": 16057,
            "state": "ID",
            "area_name": "Latah County, ID",
            "value": 2.5
        }, {
            "fips_code": 16059,
            "state": "ID",
            "area_name": "Lemhi County, ID",
            "value": 3.7
        }, {
            "fips_code": 16061,
            "state": "ID",
            "area_name": "Lewis County, ID",
            "value": 3.9
        }, {
            "fips_code": 16063,
            "state": "ID",
            "area_name": "Lincoln County, ID",
            "value": 3.4
        }, {
            "fips_code": 16065,
            "state": "ID",
            "area_name": "Madison County, ID",
            "value": 1.8
        }, {
            "fips_code": 16067,
            "state": "ID",
            "area_name": "Minidoka County, ID",
            "value": 2.4
        }, {
            "fips_code": 16069,
            "state": "ID",
            "area_name": "Nez Perce County, ID",
            "value": 2.6
        }, {
            "fips_code": 16071,
            "state": "ID",
            "area_name": "Oneida County, ID",
            "value": 2.5
        }, {
            "fips_code": 16073,
            "state": "ID",
            "area_name": "Owyhee County, ID",
            "value": 3.2
        }, {
            "fips_code": 16075,
            "state": "ID",
            "area_name": "Payette County, ID",
            "value": 3.0
        }, {
            "fips_code": 16077,
            "state": "ID",
            "area_name": "Power County, ID",
            "value": 2.8
        }, {
            "fips_code": 16079,
            "state": "ID",
            "area_name": "Shoshone County, ID",
            "value": 4.6
        }, {
            "fips_code": 16081,
            "state": "ID",
            "area_name": "Teton County, ID",
            "value": 2.1
        }, {
            "fips_code": 16083,
            "state": "ID",
            "area_name": "Twin Falls County, ID",
            "value": 2.6
        }, {
            "fips_code": 16085,
            "state": "ID",
            "area_name": "Valley County, ID",
            "value": 3.7
        }, {
            "fips_code": 16087,
            "state": "ID",
            "area_name": "Washington County, ID",
            "value": 3.3
        }, {
            "fips_code": 17000,
            "state": "IL",
            "area_name": "Illinois",
            "value": 4.6
        }, {
            "fips_code": 17001,
            "state": "IL",
            "area_name": "Adams County, IL",
            "value": 3.3
        }, {
            "fips_code": 17003,
            "state": "IL",
            "area_name": "Alexander County, IL",
            "value": 6.3
        }, {
            "fips_code": 17005,
            "state": "IL",
            "area_name": "Bond County, IL",
            "value": 3.8
        }, {
            "fips_code": 17007,
            "state": "IL",
            "area_name": "Boone County, IL",
            "value": 6.4
        }, {
            "fips_code": 17009,
            "state": "IL",
            "area_name": "Brown County, IL",
            "value": 2.2
        }, {
            "fips_code": 17011,
            "state": "IL",
            "area_name": "Bureau County, IL",
            "value": 4.4
        }, {
            "fips_code": 17013,
            "state": "IL",
            "area_name": "Calhoun County, IL",
            "value": 4.0
        }, {
            "fips_code": 17015,
            "state": "IL",
            "area_name": "Carroll County, IL",
            "value": 3.8
        }, {
            "fips_code": 17017,
            "state": "IL",
            "area_name": "Cass County, IL",
            "value": 4.2
        }, {
            "fips_code": 17019,
            "state": "IL",
            "area_name": "Champaign County, IL",
            "value": 3.8
        }, {
            "fips_code": 17021,
            "state": "IL",
            "area_name": "Christian County, IL",
            "value": 4.6
        }, {
            "fips_code": 17023,
            "state": "IL",
            "area_name": "Clark County, IL",
            "value": 4.2
        }, {
            "fips_code": 17025,
            "state": "IL",
            "area_name": "Clay County, IL",
            "value": 4.7
        }, {
            "fips_code": 17027,
            "state": "IL",
            "area_name": "Clinton County, IL",
            "value": 3.0
        }, {
            "fips_code": 17029,
            "state": "IL",
            "area_name": "Coles County, IL",
            "value": 4.2
        }, {
            "fips_code": 17031,
            "state": "IL",
            "area_name": "Cook County, IL",
            "value": 5.0
        }, {
            "fips_code": 17033,
            "state": "IL",
            "area_name": "Crawford County, IL",
            "value": 4.1
        }, {
            "fips_code": 17035,
            "state": "IL",
            "area_name": "Cumberland County, IL",
            "value": 3.4
        }, {
            "fips_code": 17037,
            "state": "IL",
            "area_name": "DeKalb County, IL",
            "value": 4.2
        }, {
            "fips_code": 17039,
            "state": "IL",
            "area_name": "De Witt County, IL",
            "value": 4.0
        }, {
            "fips_code": 17041,
            "state": "IL",
            "area_name": "Douglas County, IL",
            "value": 3.3
        }, {
            "fips_code": 17043,
            "state": "IL",
            "area_name": "DuPage County, IL",
            "value": 3.6
        }, {
            "fips_code": 17045,
            "state": "IL",
            "area_name": "Edgar County, IL",
            "value": 3.4
        }, {
            "fips_code": 17047,
            "state": "IL",
            "area_name": "Edwards County, IL",
            "value": 4.4
        }, {
            "fips_code": 17049,
            "state": "IL",
            "area_name": "Effingham County, IL",
            "value": 3.0
        }, {
            "fips_code": 17051,
            "state": "IL",
            "area_name": "Fayette County, IL",
            "value": 4.3
        }, {
            "fips_code": 17053,
            "state": "IL",
            "area_name": "Ford County, IL",
            "value": 4.0
        }, {
            "fips_code": 17055,
            "state": "IL",
            "area_name": "Franklin County, IL",
            "value": 5.2
        }, {
            "fips_code": 17057,
            "state": "IL",
            "area_name": "Fulton County, IL",
            "value": 4.8
        }, {
            "fips_code": 17059,
            "state": "IL",
            "area_name": "Gallatin County, IL",
            "value": 5.0
        }, {
            "fips_code": 17061,
            "state": "IL",
            "area_name": "Greene County, IL",
            "value": 4.1
        }, {
            "fips_code": 17063,
            "state": "IL",
            "area_name": "Grundy County, IL",
            "value": 4.9
        }, {
            "fips_code": 17065,
            "state": "IL",
            "area_name": "Hamilton County, IL",
            "value": 3.4
        }, {
            "fips_code": 17067,
            "state": "IL",
            "area_name": "Hancock County, IL",
            "value": 3.9
        }, {
            "fips_code": 17069,
            "state": "IL",
            "area_name": "Hardin County, IL",
            "value": 5.1
        }, {
            "fips_code": 17071,
            "state": "IL",
            "area_name": "Henderson County, IL",
            "value": 4.0
        }, {
            "fips_code": 17073,
            "state": "IL",
            "area_name": "Henry County, IL",
            "value": 4.2
        }, {
            "fips_code": 17075,
            "state": "IL",
            "area_name": "Iroquois County, IL",
            "value": 4.5
        }, {
            "fips_code": 17077,
            "state": "IL",
            "area_name": "Jackson County, IL",
            "value": 4.2
        }, {
            "fips_code": 17079,
            "state": "IL",
            "area_name": "Jasper County, IL",
            "value": 3.7
        }, {
            "fips_code": 17081,
            "state": "IL",
            "area_name": "Jefferson County, IL",
            "value": 4.6
        }, {
            "fips_code": 17083,
            "state": "IL",
            "area_name": "Jersey County, IL",
            "value": 3.5
        }, {
            "fips_code": 17085,
            "state": "IL",
            "area_name": "Jo Daviess County, IL",
            "value": 3.7
        }, {
            "fips_code": 17087,
            "state": "IL",
            "area_name": "Johnson County, IL",
            "value": 5.4
        }, {
            "fips_code": 17089,
            "state": "IL",
            "area_name": "Kane County, IL",
            "value": 4.5
        }, {
            "fips_code": 17091,
            "state": "IL",
            "area_name": "Kankakee County, IL",
            "value": 5.3
        }, {
            "fips_code": 17093,
            "state": "IL",
            "area_name": "Kendall County, IL",
            "value": 4.0
        }, {
            "fips_code": 17095,
            "state": "IL",
            "area_name": "Knox County, IL",
            "value": 5.2
        }, {
            "fips_code": 17097,
            "state": "IL",
            "area_name": "Lake County, IL",
            "value": 4.2
        }, {
            "fips_code": 17099,
            "state": "IL",
            "area_name": "LaSalle County, IL",
            "value": 4.9
        }, {
            "fips_code": 17101,
            "state": "IL",
            "area_name": "Lawrence County, IL",
            "value": 5.6
        }, {
            "fips_code": 17103,
            "state": "IL",
            "area_name": "Lee County, IL",
            "value": 4.0
        }, {
            "fips_code": 17105,
            "state": "IL",
            "area_name": "Livingston County, IL",
            "value": 4.0
        }, {
            "fips_code": 17107,
            "state": "IL",
            "area_name": "Logan County, IL",
            "value": 4.2
        }, {
            "fips_code": 17109,
            "state": "IL",
            "area_name": "McDonough County, IL",
            "value": 4.1
        }, {
            "fips_code": 17111,
            "state": "IL",
            "area_name": "McHenry County, IL",
            "value": 4.0
        }, {
            "fips_code": 17113,
            "state": "IL",
            "area_name": "McLean County, IL",
            "value": 3.5
        }, {
            "fips_code": 17115,
            "state": "IL",
            "area_name": "Macon County, IL",
            "value": 5.5
        }, {
            "fips_code": 17117,
            "state": "IL",
            "area_name": "Macoupin County, IL",
            "value": 3.7
        }, {
            "fips_code": 17119,
            "state": "IL",
            "area_name": "Madison County, IL",
            "value": 3.7
        }, {
            "fips_code": 17121,
            "state": "IL",
            "area_name": "Marion County, IL",
            "value": 4.6
        }, {
            "fips_code": 17123,
            "state": "IL",
            "area_name": "Marshall County, IL",
            "value": 4.6
        }, {
            "fips_code": 17125,
            "state": "IL",
            "area_name": "Mason County, IL",
            "value": 4.5
        }, {
            "fips_code": 17127,
            "state": "IL",
            "area_name": "Massac County, IL",
            "value": 4.8
        }, {
            "fips_code": 17129,
            "state": "IL",
            "area_name": "Menard County, IL",
            "value": 3.6
        }, {
            "fips_code": 17131,
            "state": "IL",
            "area_name": "Mercer County, IL",
            "value": 4.1
        }, {
            "fips_code": 17133,
            "state": "IL",
            "area_name": "Monroe County, IL",
            "value": 2.8
        }, {
            "fips_code": 17135,
            "state": "IL",
            "area_name": "Montgomery County, IL",
            "value": 4.6
        }, {
            "fips_code": 17137,
            "state": "IL",
            "area_name": "Morgan County, IL",
            "value": 4.0
        }, {
            "fips_code": 17139,
            "state": "IL",
            "area_name": "Moultrie County, IL",
            "value": 3.2
        }, {
            "fips_code": 17141,
            "state": "IL",
            "area_name": "Ogle County, IL",
            "value": 4.8
        }, {
            "fips_code": 17143,
            "state": "IL",
            "area_name": "Peoria County, IL",
            "value": 5.0
        }, {
            "fips_code": 17145,
            "state": "IL",
            "area_name": "Perry County, IL",
            "value": 4.9
        }, {
            "fips_code": 17147,
            "state": "IL",
            "area_name": "Piatt County, IL",
            "value": 3.4
        }, {
            "fips_code": 17149,
            "state": "IL",
            "area_name": "Pike County, IL",
            "value": 4.2
        }, {
            "fips_code": 17151,
            "state": "IL",
            "area_name": "Pope County, IL",
            "value": 4.5
        }, {
            "fips_code": 17153,
            "state": "IL",
            "area_name": "Pulaski County, IL",
            "value": 6.9
        }, {
            "fips_code": 17155,
            "state": "IL",
            "area_name": "Putnam County, IL",
            "value": 4.7
        }, {
            "fips_code": 17157,
            "state": "IL",
            "area_name": "Randolph County, IL",
            "value": 3.6
        }, {
            "fips_code": 17159,
            "state": "IL",
            "area_name": "Richland County, IL",
            "value": 3.7
        }, {
            "fips_code": 17161,
            "state": "IL",
            "area_name": "Rock Island County, IL",
            "value": 4.3
        }, {
            "fips_code": 17163,
            "state": "IL",
            "area_name": "St. Clair County, IL",
            "value": 4.3
        }, {
            "fips_code": 17165,
            "state": "IL",
            "area_name": "Saline County, IL",
            "value": 5.0
        }, {
            "fips_code": 17167,
            "state": "IL",
            "area_name": "Sangamon County, IL",
            "value": 4.1
        }, {
            "fips_code": 17169,
            "state": "IL",
            "area_name": "Schuyler County, IL",
            "value": 4.1
        }, {
            "fips_code": 17171,
            "state": "IL",
            "area_name": "Scott County, IL",
            "value": 4.8
        }, {
            "fips_code": 17173,
            "state": "IL",
            "area_name": "Shelby County, IL",
            "value": 4.1
        }, {
            "fips_code": 17175,
            "state": "IL",
            "area_name": "Stark County, IL",
            "value": 4.9
        }, {
            "fips_code": 17177,
            "state": "IL",
            "area_name": "Stephenson County, IL",
            "value": 4.5
        }, {
            "fips_code": 17179,
            "state": "IL",
            "area_name": "Tazewell County, IL",
            "value": 4.1
        }, {
            "fips_code": 17181,
            "state": "IL",
            "area_name": "Union County, IL",
            "value": 5.1
        }, {
            "fips_code": 17183,
            "state": "IL",
            "area_name": "Vermilion County, IL",
            "value": 5.0
        }, {
            "fips_code": 17185,
            "state": "IL",
            "area_name": "Wabash County, IL",
            "value": 3.3
        }, {
            "fips_code": 17187,
            "state": "IL",
            "area_name": "Warren County, IL",
            "value": 3.9
        }, {
            "fips_code": 17189,
            "state": "IL",
            "area_name": "Washington County, IL",
            "value": 2.4
        }, {
            "fips_code": 17191,
            "state": "IL",
            "area_name": "Wayne County, IL",
            "value": 3.9
        }, {
            "fips_code": 17193,
            "state": "IL",
            "area_name": "White County, IL",
            "value": 3.9
        }, {
            "fips_code": 17195,
            "state": "IL",
            "area_name": "Whiteside County, IL",
            "value": 4.0
        }, {
            "fips_code": 17197,
            "state": "IL",
            "area_name": "Will County, IL",
            "value": 4.6
        }, {
            "fips_code": 17199,
            "state": "IL",
            "area_name": "Williamson County, IL",
            "value": 4.3
        }, {
            "fips_code": 17201,
            "state": "IL",
            "area_name": "Winnebago County, IL",
            "value": 5.8
        }, {
            "fips_code": 17203,
            "state": "IL",
            "area_name": "Woodford County, IL",
            "value": 3.4
        }, {
            "fips_code": 18000,
            "state": "IN",
            "area_name": "Indiana",
            "value": 3.0
        }, {
            "fips_code": 18001,
            "state": "IN",
            "area_name": "Adams County, IN",
            "value": 2.2
        }, {
            "fips_code": 18003,
            "state": "IN",
            "area_name": "Allen County, IN",
            "value": 2.9
        }, {
            "fips_code": 18005,
            "state": "IN",
            "area_name": "Bartholomew County, IN",
            "value": 2.4
        }, {
            "fips_code": 18007,
            "state": "IN",
            "area_name": "Benton County, IN",
            "value": 2.4
        }, {
            "fips_code": 18009,
            "state": "IN",
            "area_name": "Blackford County, IN",
            "value": 3.5
        }, {
            "fips_code": 18011,
            "state": "IN",
            "area_name": "Boone County, IN",
            "value": 2.0
        }, {
            "fips_code": 18013,
            "state": "IN",
            "area_name": "Brown County, IN",
            "value": 3.3
        }, {
            "fips_code": 18015,
            "state": "IN",
            "area_name": "Carroll County, IN",
            "value": 2.9
        }, {
            "fips_code": 18017,
            "state": "IN",
            "area_name": "Cass County, IN",
            "value": 3.2
        }, {
            "fips_code": 18019,
            "state": "IN",
            "area_name": "Clark County, IN",
            "value": 2.7
        }, {
            "fips_code": 18021,
            "state": "IN",
            "area_name": "Clay County, IN",
            "value": 3.3
        }, {
            "fips_code": 18023,
            "state": "IN",
            "area_name": "Clinton County, IN",
            "value": 2.5
        }, {
            "fips_code": 18025,
            "state": "IN",
            "area_name": "Crawford County, IN",
            "value": 3.5
        }, {
            "fips_code": 18027,
            "state": "IN",
            "area_name": "Daviess County, IN",
            "value": 2.3
        }, {
            "fips_code": 18029,
            "state": "IN",
            "area_name": "Dearborn County, IN",
            "value": 2.6
        }, {
            "fips_code": 18031,
            "state": "IN",
            "area_name": "Decatur County, IN",
            "value": 2.6
        }, {
            "fips_code": 18033,
            "state": "IN",
            "area_name": "DeKalb County, IN",
            "value": 2.6
        }, {
            "fips_code": 18035,
            "state": "IN",
            "area_name": "Delaware County, IN",
            "value": 3.5
        }, {
            "fips_code": 18037,
            "state": "IN",
            "area_name": "Dubois County, IN",
            "value": 2.2
        }, {
            "fips_code": 18039,
            "state": "IN",
            "area_name": "Elkhart County, IN",
            "value": 2.5
        }, {
            "fips_code": 18041,
            "state": "IN",
            "area_name": "Fayette County, IN",
            "value": 4.4
        }, {
            "fips_code": 18043,
            "state": "IN",
            "area_name": "Floyd County, IN",
            "value": 2.5
        }, {
            "fips_code": 18045,
            "state": "IN",
            "area_name": "Fountain County, IN",
            "value": 2.8
        }, {
            "fips_code": 18047,
            "state": "IN",
            "area_name": "Franklin County, IN",
            "value": 2.7
        }, {
            "fips_code": 18049,
            "state": "IN",
            "area_name": "Fulton County, IN",
            "value": 3.0
        }, {
            "fips_code": 18051,
            "state": "IN",
            "area_name": "Gibson County, IN",
            "value": 2.2
        }, {
            "fips_code": 18053,
            "state": "IN",
            "area_name": "Grant County, IN",
            "value": 3.3
        }, {
            "fips_code": 18055,
            "state": "IN",
            "area_name": "Greene County, IN",
            "value": 3.8
        }, {
            "fips_code": 18057,
            "state": "IN",
            "area_name": "Hamilton County, IN",
            "value": 2.1
        }, {
            "fips_code": 18059,
            "state": "IN",
            "area_name": "Hancock County, IN",
            "value": 2.6
        }, {
            "fips_code": 18061,
            "state": "IN",
            "area_name": "Harrison County, IN",
            "value": 2.5
        }, {
            "fips_code": 18063,
            "state": "IN",
            "area_name": "Hendricks County, IN",
            "value": 2.4
        }, {
            "fips_code": 18065,
            "state": "IN",
            "area_name": "Henry County, IN",
            "value": 3.2
        }, {
            "fips_code": 18067,
            "state": "IN",
            "area_name": "Howard County, IN",
            "value": 5.0
        }, {
            "fips_code": 18069,
            "state": "IN",
            "area_name": "Huntington County, IN",
            "value": 2.6
        }, {
            "fips_code": 18071,
            "state": "IN",
            "area_name": "Jackson County, IN",
            "value": 2.7
        }, {
            "fips_code": 18073,
            "state": "IN",
            "area_name": "Jasper County, IN",
            "value": 3.3
        }, {
            "fips_code": 18075,
            "state": "IN",
            "area_name": "Jay County, IN",
            "value": 2.7
        }, {
            "fips_code": 18077,
            "state": "IN",
            "area_name": "Jefferson County, IN",
            "value": 2.8
        }, {
            "fips_code": 18079,
            "state": "IN",
            "area_name": "Jennings County, IN",
            "value": 3.3
        }, {
            "fips_code": 18081,
            "state": "IN",
            "area_name": "Johnson County, IN",
            "value": 2.4
        }, {
            "fips_code": 18083,
            "state": "IN",
            "area_name": "Knox County, IN",
            "value": 2.7
        }, {
            "fips_code": 18085,
            "state": "IN",
            "area_name": "Kosciusko County, IN",
            "value": 2.5
        }, {
            "fips_code": 18087,
            "state": "IN",
            "area_name": "LaGrange County, IN",
            "value": 2.2
        }, {
            "fips_code": 18089,
            "state": "IN",
            "area_name": "Lake County, IN",
            "value": 4.6
        }, {
            "fips_code": 18091,
            "state": "IN",
            "area_name": "LaPorte County, IN",
            "value": 3.7
        }, {
            "fips_code": 18093,
            "state": "IN",
            "area_name": "Lawrence County, IN",
            "value": 3.3
        }, {
            "fips_code": 18095,
            "state": "IN",
            "area_name": "Madison County, IN",
            "value": 3.3
        }, {
            "fips_code": 18097,
            "state": "IN",
            "area_name": "Marion County, IN",
            "value": 3.2
        }, {
            "fips_code": 18099,
            "state": "IN",
            "area_name": "Marshall County, IN",
            "value": 2.6
        }, {
            "fips_code": 18101,
            "state": "IN",
            "area_name": "Martin County, IN",
            "value": 2.7
        }, {
            "fips_code": 18103,
            "state": "IN",
            "area_name": "Miami County, IN",
            "value": 4.1
        }, {
            "fips_code": 18105,
            "state": "IN",
            "area_name": "Monroe County, IN",
            "value": 2.8
        }, {
            "fips_code": 18107,
            "state": "IN",
            "area_name": "Montgomery County, IN",
            "value": 2.5
        }, {
            "fips_code": 18109,
            "state": "IN",
            "area_name": "Morgan County, IN",
            "value": 2.8
        }, {
            "fips_code": 18111,
            "state": "IN",
            "area_name": "Newton County, IN",
            "value": 3.6
        }, {
            "fips_code": 18113,
            "state": "IN",
            "area_name": "Noble County, IN",
            "value": 2.8
        }, {
            "fips_code": 18115,
            "state": "IN",
            "area_name": "Ohio County, IN",
            "value": 2.2
        }, {
            "fips_code": 18117,
            "state": "IN",
            "area_name": "Orange County, IN",
            "value": 3.4
        }, {
            "fips_code": 18119,
            "state": "IN",
            "area_name": "Owen County, IN",
            "value": 3.2
        }, {
            "fips_code": 18121,
            "state": "IN",
            "area_name": "Parke County, IN",
            "value": 3.0
        }, {
            "fips_code": 18123,
            "state": "IN",
            "area_name": "Perry County, IN",
            "value": 3.1
        }, {
            "fips_code": 18125,
            "state": "IN",
            "area_name": "Pike County, IN",
            "value": 3.2
        }, {
            "fips_code": 18127,
            "state": "IN",
            "area_name": "Porter County, IN",
            "value": 3.3
        }, {
            "fips_code": 18129,
            "state": "IN",
            "area_name": "Posey County, IN",
            "value": 2.4
        }, {
            "fips_code": 18131,
            "state": "IN",
            "area_name": "Pulaski County, IN",
            "value": 2.6
        }, {
            "fips_code": 18133,
            "state": "IN",
            "area_name": "Putnam County, IN",
            "value": 3.1
        }, {
            "fips_code": 18135,
            "state": "IN",
            "area_name": "Randolph County, IN",
            "value": 3.0
        }, {
            "fips_code": 18137,
            "state": "IN",
            "area_name": "Ripley County, IN",
            "value": 3.0
        }, {
            "fips_code": 18139,
            "state": "IN",
            "area_name": "Rush County, IN",
            "value": 2.5
        }, {
            "fips_code": 18141,
            "state": "IN",
            "area_name": "St. Joseph County, IN",
            "value": 3.4
        }, {
            "fips_code": 18143,
            "state": "IN",
            "area_name": "Scott County, IN",
            "value": 3.4
        }, {
            "fips_code": 18145,
            "state": "IN",
            "area_name": "Shelby County, IN",
            "value": 2.5
        }, {
            "fips_code": 18147,
            "state": "IN",
            "area_name": "Spencer County, IN",
            "value": 2.6
        }, {
            "fips_code": 18149,
            "state": "IN",
            "area_name": "Starke County, IN",
            "value": 3.8
        }, {
            "fips_code": 18151,
            "state": "IN",
            "area_name": "Steuben County, IN",
            "value": 2.2
        }, {
            "fips_code": 18153,
            "state": "IN",
            "area_name": "Sullivan County, IN",
            "value": 3.8
        }, {
            "fips_code": 18155,
            "state": "IN",
            "area_name": "Switzerland County, IN",
            "value": 2.8
        }, {
            "fips_code": 18157,
            "state": "IN",
            "area_name": "Tippecanoe County, IN",
            "value": 2.8
        }, {
            "fips_code": 18159,
            "state": "IN",
            "area_name": "Tipton County, IN",
            "value": 2.8
        }, {
            "fips_code": 18161,
            "state": "IN",
            "area_name": "Union County, IN",
            "value": 2.4
        }, {
            "fips_code": 18163,
            "state": "IN",
            "area_name": "Vanderburgh County, IN",
            "value": 3.0
        }, {
            "fips_code": 18165,
            "state": "IN",
            "area_name": "Vermillion County, IN",
            "value": 3.6
        }, {
            "fips_code": 18167,
            "state": "IN",
            "area_name": "Vigo County, IN",
            "value": 3.5
        }, {
            "fips_code": 18169,
            "state": "IN",
            "area_name": "Wabash County, IN",
            "value": 2.7
        }, {
            "fips_code": 18171,
            "state": "IN",
            "area_name": "Warren County, IN",
            "value": 2.6
        }, {
            "fips_code": 18173,
            "state": "IN",
            "area_name": "Warrick County, IN",
            "value": 2.6
        }, {
            "fips_code": 18175,
            "state": "IN",
            "area_name": "Washington County, IN",
            "value": 2.7
        }, {
            "fips_code": 18177,
            "state": "IN",
            "area_name": "Wayne County, IN",
            "value": 3.1
        }, {
            "fips_code": 18179,
            "state": "IN",
            "area_name": "Wells County, IN",
            "value": 2.3
        }, {
            "fips_code": 18181,
            "state": "IN",
            "area_name": "White County, IN",
            "value": 2.5
        }, {
            "fips_code": 18183,
            "state": "IN",
            "area_name": "Whitley County, IN",
            "value": 2.4
        }, {
            "fips_code": 19000,
            "state": "IA",
            "area_name": "Iowa",
            "value": 2.7
        }, {
            "fips_code": 19001,
            "state": "IA",
            "area_name": "Adair County, IA",
            "value": 2.1
        }, {
            "fips_code": 19003,
            "state": "IA",
            "area_name": "Adams County, IA",
            "value": 2.0
        }, {
            "fips_code": 19005,
            "state": "IA",
            "area_name": "Allamakee County, IA",
            "value": 3.8
        }, {
            "fips_code": 19007,
            "state": "IA",
            "area_name": "Appanoose County, IA",
            "value": 2.9
        }, {
            "fips_code": 19009,
            "state": "IA",
            "area_name": "Audubon County, IA",
            "value": 2.3
        }, {
            "fips_code": 19011,
            "state": "IA",
            "area_name": "Benton County, IA",
            "value": 3.0
        }, {
            "fips_code": 19013,
            "state": "IA",
            "area_name": "Black Hawk County, IA",
            "value": 2.9
        }, {
            "fips_code": 19015,
            "state": "IA",
            "area_name": "Boone County, IA",
            "value": 2.3
        }, {
            "fips_code": 19017,
            "state": "IA",
            "area_name": "Bremer County, IA",
            "value": 2.3
        }, {
            "fips_code": 19019,
            "state": "IA",
            "area_name": "Buchanan County, IA",
            "value": 2.8
        }, {
            "fips_code": 19021,
            "state": "IA",
            "area_name": "Buena Vista County, IA",
            "value": 2.3
        }, {
            "fips_code": 19023,
            "state": "IA",
            "area_name": "Butler County, IA",
            "value": 2.8
        }, {
            "fips_code": 19025,
            "state": "IA",
            "area_name": "Calhoun County, IA",
            "value": 2.5
        }, {
            "fips_code": 19027,
            "state": "IA",
            "area_name": "Carroll County, IA",
            "value": 2.0
        }, {
            "fips_code": 19029,
            "state": "IA",
            "area_name": "Cass County, IA",
            "value": 2.5
        }, {
            "fips_code": 19031,
            "state": "IA",
            "area_name": "Cedar County, IA",
            "value": 2.6
        }, {
            "fips_code": 19033,
            "state": "IA",
            "area_name": "Cerro Gordo County, IA",
            "value": 2.8
        }, {
            "fips_code": 19035,
            "state": "IA",
            "area_name": "Cherokee County, IA",
            "value": 2.3
        }, {
            "fips_code": 19037,
            "state": "IA",
            "area_name": "Chickasaw County, IA",
            "value": 2.5
        }, {
            "fips_code": 19039,
            "state": "IA",
            "area_name": "Clarke County, IA",
            "value": 2.9
        }, {
            "fips_code": 19041,
            "state": "IA",
            "area_name": "Clay County, IA",
            "value": 2.7
        }, {
            "fips_code": 19043,
            "state": "IA",
            "area_name": "Clayton County, IA",
            "value": 3.8
        }, {
            "fips_code": 19045,
            "state": "IA",
            "area_name": "Clinton County, IA",
            "value": 3.5
        }, {
            "fips_code": 19047,
            "state": "IA",
            "area_name": "Crawford County, IA",
            "value": 4.0
        }, {
            "fips_code": 19049,
            "state": "IA",
            "area_name": "Dallas County, IA",
            "value": 2.0
        }, {
            "fips_code": 19051,
            "state": "IA",
            "area_name": "Davis County, IA",
            "value": 2.4
        }, {
            "fips_code": 19053,
            "state": "IA",
            "area_name": "Decatur County, IA",
            "value": 2.5
        }, {
            "fips_code": 19055,
            "state": "IA",
            "area_name": "Delaware County, IA",
            "value": 2.3
        }, {
            "fips_code": 19057,
            "state": "IA",
            "area_name": "Des Moines County, IA",
            "value": 4.2
        }, {
            "fips_code": 19059,
            "state": "IA",
            "area_name": "Dickinson County, IA",
            "value": 2.8
        }, {
            "fips_code": 19061,
            "state": "IA",
            "area_name": "Dubuque County, IA",
            "value": 2.8
        }, {
            "fips_code": 19063,
            "state": "IA",
            "area_name": "Emmet County, IA",
            "value": 2.9
        }, {
            "fips_code": 19065,
            "state": "IA",
            "area_name": "Fayette County, IA",
            "value": 3.1
        }, {
            "fips_code": 19067,
            "state": "IA",
            "area_name": "Floyd County, IA",
            "value": 2.9
        }, {
            "fips_code": 19069,
            "state": "IA",
            "area_name": "Franklin County, IA",
            "value": 2.5
        }, {
            "fips_code": 19071,
            "state": "IA",
            "area_name": "Fremont County, IA",
            "value": 2.4
        }, {
            "fips_code": 19073,
            "state": "IA",
            "area_name": "Greene County, IA",
            "value": 2.0
        }, {
            "fips_code": 19075,
            "state": "IA",
            "area_name": "Grundy County, IA",
            "value": 2.5
        }, {
            "fips_code": 19077,
            "state": "IA",
            "area_name": "Guthrie County, IA",
            "value": 2.8
        }, {
            "fips_code": 19079,
            "state": "IA",
            "area_name": "Hamilton County, IA",
            "value": 2.8
        }, {
            "fips_code": 19081,
            "state": "IA",
            "area_name": "Hancock County, IA",
            "value": 2.3
        }, {
            "fips_code": 19083,
            "state": "IA",
            "area_name": "Hardin County, IA",
            "value": 3.0
        }, {
            "fips_code": 19085,
            "state": "IA",
            "area_name": "Harrison County, IA",
            "value": 2.7
        }, {
            "fips_code": 19087,
            "state": "IA",
            "area_name": "Henry County, IA",
            "value": 2.9
        }, {
            "fips_code": 19089,
            "state": "IA",
            "area_name": "Howard County, IA",
            "value": 3.1
        }, {
            "fips_code": 19091,
            "state": "IA",
            "area_name": "Humboldt County, IA",
            "value": 2.4
        }, {
            "fips_code": 19093,
            "state": "IA",
            "area_name": "Ida County, IA",
            "value": 2.2
        }, {
            "fips_code": 19095,
            "state": "IA",
            "area_name": "Iowa County, IA",
            "value": 2.5
        }, {
            "fips_code": 19097,
            "state": "IA",
            "area_name": "Jackson County, IA",
            "value": 3.2
        }, {
            "fips_code": 19099,
            "state": "IA",
            "area_name": "Jasper County, IA",
            "value": 3.0
        }, {
            "fips_code": 19101,
            "state": "IA",
            "area_name": "Jefferson County, IA",
            "value": 2.5
        }, {
            "fips_code": 19103,
            "state": "IA",
            "area_name": "Johnson County, IA",
            "value": 2.3
        }, {
            "fips_code": 19105,
            "state": "IA",
            "area_name": "Jones County, IA",
            "value": 3.2
        }, {
            "fips_code": 19107,
            "state": "IA",
            "area_name": "Keokuk County, IA",
            "value": 3.0
        }, {
            "fips_code": 19109,
            "state": "IA",
            "area_name": "Kossuth County, IA",
            "value": 2.3
        }, {
            "fips_code": 19111,
            "state": "IA",
            "area_name": "Lee County, IA",
            "value": 4.4
        }, {
            "fips_code": 19113,
            "state": "IA",
            "area_name": "Linn County, IA",
            "value": 3.1
        }, {
            "fips_code": 19115,
            "state": "IA",
            "area_name": "Louisa County, IA",
            "value": 3.1
        }, {
            "fips_code": 19117,
            "state": "IA",
            "area_name": "Lucas County, IA",
            "value": 2.1
        }, {
            "fips_code": 19119,
            "state": "IA",
            "area_name": "Lyon County, IA",
            "value": 1.8
        }, {
            "fips_code": 19121,
            "state": "IA",
            "area_name": "Madison County, IA",
            "value": 3.1
        }, {
            "fips_code": 19123,
            "state": "IA",
            "area_name": "Mahaska County, IA",
            "value": 2.4
        }, {
            "fips_code": 19125,
            "state": "IA",
            "area_name": "Marion County, IA",
            "value": 2.1
        }, {
            "fips_code": 19127,
            "state": "IA",
            "area_name": "Marshall County, IA",
            "value": 5.3
        }, {
            "fips_code": 19129,
            "state": "IA",
            "area_name": "Mills County, IA",
            "value": 2.3
        }, {
            "fips_code": 19131,
            "state": "IA",
            "area_name": "Mitchell County, IA",
            "value": 2.0
        }, {
            "fips_code": 19133,
            "state": "IA",
            "area_name": "Monona County, IA",
            "value": 2.9
        }, {
            "fips_code": 19135,
            "state": "IA",
            "area_name": "Monroe County, IA",
            "value": 2.8
        }, {
            "fips_code": 19137,
            "state": "IA",
            "area_name": "Montgomery County, IA",
            "value": 2.5
        }, {
            "fips_code": 19139,
            "state": "IA",
            "area_name": "Muscatine County, IA",
            "value": 3.0
        }, {
            "fips_code": 19141,
            "state": "IA",
            "area_name": "O'Brien County, IA",
            "value": 2.1
        }, {
            "fips_code": 19143,
            "state": "IA",
            "area_name": "Osceola County, IA",
            "value": 1.8
        }, {
            "fips_code": 19145,
            "state": "IA",
            "area_name": "Page County, IA",
            "value": 2.4
        }, {
            "fips_code": 19147,
            "state": "IA",
            "area_name": "Palo Alto County, IA",
            "value": 2.5
        }, {
            "fips_code": 19149,
            "state": "IA",
            "area_name": "Plymouth County, IA",
            "value": 2.1
        }, {
            "fips_code": 19151,
            "state": "IA",
            "area_name": "Pocahontas County, IA",
            "value": 2.1
        }, {
            "fips_code": 19153,
            "state": "IA",
            "area_name": "Polk County, IA",
            "value": 2.7
        }, {
            "fips_code": 19155,
            "state": "IA",
            "area_name": "Pottawattamie County, IA",
            "value": 2.8
        }, {
            "fips_code": 19157,
            "state": "IA",
            "area_name": "Poweshiek County, IA",
            "value": 2.7
        }, {
            "fips_code": 19159,
            "state": "IA",
            "area_name": "Ringgold County, IA",
            "value": 2.3
        }, {
            "fips_code": 19161,
            "state": "IA",
            "area_name": "Sac County, IA",
            "value": 2.4
        }, {
            "fips_code": 19163,
            "state": "IA",
            "area_name": "Scott County, IA",
            "value": 3.2
        }, {
            "fips_code": 19165,
            "state": "IA",
            "area_name": "Shelby County, IA",
            "value": 2.2
        }, {
            "fips_code": 19167,
            "state": "IA",
            "area_name": "Sioux County, IA",
            "value": 1.9
        }, {
            "fips_code": 19169,
            "state": "IA",
            "area_name": "Story County, IA",
            "value": 2.0
        }, {
            "fips_code": 19171,
            "state": "IA",
            "area_name": "Tama County, IA",
            "value": 3.3
        }, {
            "fips_code": 19173,
            "state": "IA",
            "area_name": "Taylor County, IA",
            "value": 2.0
        }, {
            "fips_code": 19175,
            "state": "IA",
            "area_name": "Union County, IA",
            "value": 2.7
        }, {
            "fips_code": 19177,
            "state": "IA",
            "area_name": "Van Buren County, IA",
            "value": 2.8
        }, {
            "fips_code": 19179,
            "state": "IA",
            "area_name": "Wapello County, IA",
            "value": 3.2
        }, {
            "fips_code": 19181,
            "state": "IA",
            "area_name": "Warren County, IA",
            "value": 2.4
        }, {
            "fips_code": 19183,
            "state": "IA",
            "area_name": "Washington County, IA",
            "value": 2.6
        }, {
            "fips_code": 19185,
            "state": "IA",
            "area_name": "Wayne County, IA",
            "value": 2.5
        }, {
            "fips_code": 19187,
            "state": "IA",
            "area_name": "Webster County, IA",
            "value": 3.0
        }, {
            "fips_code": 19189,
            "state": "IA",
            "area_name": "Winnebago County, IA",
            "value": 2.7
        }, {
            "fips_code": 19191,
            "state": "IA",
            "area_name": "Winneshiek County, IA",
            "value": 3.1
        }, {
            "fips_code": 19193,
            "state": "IA",
            "area_name": "Woodbury County, IA",
            "value": 2.7
        }, {
            "fips_code": 19195,
            "state": "IA",
            "area_name": "Worth County, IA",
            "value": 2.7
        }, {
            "fips_code": 19197,
            "state": "IA",
            "area_name": "Wright County, IA",
            "value": 2.6
        }, {
            "fips_code": 20000,
            "state": "KS",
            "area_name": "Kansas",
            "value": 2.7
        }, {
            "fips_code": 20001,
            "state": "KS",
            "area_name": "Allen County, KS",
            "value": 2.9
        }, {
            "fips_code": 20003,
            "state": "KS",
            "area_name": "Anderson County, KS",
            "value": 2.3
        }, {
            "fips_code": 20005,
            "state": "KS",
            "area_name": "Atchison County, KS",
            "value": 3.5
        }, {
            "fips_code": 20007,
            "state": "KS",
            "area_name": "Barber County, KS",
            "value": 2.1
        }, {
            "fips_code": 20009,
            "state": "KS",
            "area_name": "Barton County, KS",
            "value": 2.6
        }, {
            "fips_code": 20011,
            "state": "KS",
            "area_name": "Bourbon County, KS",
            "value": 3.5
        }, {
            "fips_code": 20013,
            "state": "KS",
            "area_name": "Brown County, KS",
            "value": 2.4
        }, {
            "fips_code": 20015,
            "state": "KS",
            "area_name": "Butler County, KS",
            "value": 2.8
        }, {
            "fips_code": 20017,
            "state": "KS",
            "area_name": "Chase County, KS",
            "value": 2.2
        }, {
            "fips_code": 20019,
            "state": "KS",
            "area_name": "Chautauqua County, KS",
            "value": 2.8
        }, {
            "fips_code": 20021,
            "state": "KS",
            "area_name": "Cherokee County, KS",
            "value": 2.6
        }, {
            "fips_code": 20023,
            "state": "KS",
            "area_name": "Cheyenne County, KS",
            "value": 2.4
        }, {
            "fips_code": 20025,
            "state": "KS",
            "area_name": "Clark County, KS",
            "value": 2.0
        }, {
            "fips_code": 20027,
            "state": "KS",
            "area_name": "Clay County, KS",
            "value": 2.6
        }, {
            "fips_code": 20029,
            "state": "KS",
            "area_name": "Cloud County, KS",
            "value": 2.7
        }, {
            "fips_code": 20031,
            "state": "KS",
            "area_name": "Coffey County, KS",
            "value": 3.5
        }, {
            "fips_code": 20033,
            "state": "KS",
            "area_name": "Comanche County, KS",
            "value": 2.2
        }, {
            "fips_code": 20035,
            "state": "KS",
            "area_name": "Cowley County, KS",
            "value": 3.0
        }, {
            "fips_code": 20037,
            "state": "KS",
            "area_name": "Crawford County, KS",
            "value": 2.9
        }, {
            "fips_code": 20039,
            "state": "KS",
            "area_name": "Decatur County, KS",
            "value": 2.9
        }, {
            "fips_code": 20041,
            "state": "KS",
            "area_name": "Dickinson County, KS",
            "value": 2.8
        }, {
            "fips_code": 20043,
            "state": "KS",
            "area_name": "Doniphan County, KS",
            "value": 2.6
        }, {
            "fips_code": 20045,
            "state": "KS",
            "area_name": "Douglas County, KS",
            "value": 2.6
        }, {
            "fips_code": 20047,
            "state": "KS",
            "area_name": "Edwards County, KS",
            "value": 2.3
        }, {
            "fips_code": 20049,
            "state": "KS",
            "area_name": "Elk County, KS",
            "value": 2.7
        }, {
            "fips_code": 20051,
            "state": "KS",
            "area_name": "Ellis County, KS",
            "value": 2.0
        }, {
            "fips_code": 20053,
            "state": "KS",
            "area_name": "Ellsworth County, KS",
            "value": 2.3
        }, {
            "fips_code": 20055,
            "state": "KS",
            "area_name": "Finney County, KS",
            "value": 2.1
        }, {
            "fips_code": 20057,
            "state": "KS",
            "area_name": "Ford County, KS",
            "value": 2.1
        }, {
            "fips_code": 20059,
            "state": "KS",
            "area_name": "Franklin County, KS",
            "value": 2.4
        }, {
            "fips_code": 20061,
            "state": "KS",
            "area_name": "Geary County, KS",
            "value": 3.8
        }, {
            "fips_code": 20063,
            "state": "KS",
            "area_name": "Gove County, KS",
            "value": 2.1
        }, {
            "fips_code": 20065,
            "state": "KS",
            "area_name": "Graham County, KS",
            "value": 2.4
        }, {
            "fips_code": 20067,
            "state": "KS",
            "area_name": "Grant County, KS",
            "value": 2.9
        }, {
            "fips_code": 20069,
            "state": "KS",
            "area_name": "Gray County, KS",
            "value": 2.0
        }, {
            "fips_code": 20071,
            "state": "KS",
            "area_name": "Greeley County, KS",
            "value": 1.5
        }, {
            "fips_code": 20073,
            "state": "KS",
            "area_name": "Greenwood County, KS",
            "value": 2.4
        }, {
            "fips_code": 20075,
            "state": "KS",
            "area_name": "Hamilton County, KS",
            "value": 1.7
        }, {
            "fips_code": 20077,
            "state": "KS",
            "area_name": "Harper County, KS",
            "value": 2.1
        }, {
            "fips_code": 20079,
            "state": "KS",
            "area_name": "Harvey County, KS",
            "value": 2.5
        }, {
            "fips_code": 20081,
            "state": "KS",
            "area_name": "Haskell County, KS",
            "value": 1.9
        }, {
            "fips_code": 20083,
            "state": "KS",
            "area_name": "Hodgeman County, KS",
            "value": 2.0
        }, {
            "fips_code": 20085,
            "state": "KS",
            "area_name": "Jackson County, KS",
            "value": 2.3
        }, {
            "fips_code": 20087,
            "state": "KS",
            "area_name": "Jefferson County, KS",
            "value": 2.7
        }, {
            "fips_code": 20089,
            "state": "KS",
            "area_name": "Jewell County, KS",
            "value": 2.6
        }, {
            "fips_code": 20091,
            "state": "KS",
            "area_name": "Johnson County, KS",
            "value": 2.3
        }, {
            "fips_code": 20093,
            "state": "KS",
            "area_name": "Kearny County, KS",
            "value": 1.9
        }, {
            "fips_code": 20095,
            "state": "KS",
            "area_name": "Kingman County, KS",
            "value": 2.4
        }, {
            "fips_code": 20097,
            "state": "KS",
            "area_name": "Kiowa County, KS",
            "value": 2.2
        }, {
            "fips_code": 20099,
            "state": "KS",
            "area_name": "Labette County, KS",
            "value": 3.0
        }, {
            "fips_code": 20101,
            "state": "KS",
            "area_name": "Lane County, KS",
            "value": 2.9
        }, {
            "fips_code": 20103,
            "state": "KS",
            "area_name": "Leavenworth County, KS",
            "value": 2.9
        }, {
            "fips_code": 20105,
            "state": "KS",
            "area_name": "Lincoln County, KS",
            "value": 2.4
        }, {
            "fips_code": 20107,
            "state": "KS",
            "area_name": "Linn County, KS",
            "value": 3.9
        }, {
            "fips_code": 20109,
            "state": "KS",
            "area_name": "Logan County, KS",
            "value": 1.9
        }, {
            "fips_code": 20111,
            "state": "KS",
            "area_name": "Lyon County, KS",
            "value": 2.5
        }, {
            "fips_code": 20113,
            "state": "KS",
            "area_name": "McPherson County, KS",
            "value": 1.9
        }, {
            "fips_code": 20115,
            "state": "KS",
            "area_name": "Marion County, KS",
            "value": 2.4
        }, {
            "fips_code": 20117,
            "state": "KS",
            "area_name": "Marshall County, KS",
            "value": 2.0
        }, {
            "fips_code": 20119,
            "state": "KS",
            "area_name": "Meade County, KS",
            "value": 1.9
        }, {
            "fips_code": 20121,
            "state": "KS",
            "area_name": "Miami County, KS",
            "value": 2.6
        }, {
            "fips_code": 20123,
            "state": "KS",
            "area_name": "Mitchell County, KS",
            "value": 2.0
        }, {
            "fips_code": 20125,
            "state": "KS",
            "area_name": "Montgomery County, KS",
            "value": 3.1
        }, {
            "fips_code": 20127,
            "state": "KS",
            "area_name": "Morris County, KS",
            "value": 2.3
        }, {
            "fips_code": 20129,
            "state": "KS",
            "area_name": "Morton County, KS",
            "value": 2.7
        }, {
            "fips_code": 20131,
            "state": "KS",
            "area_name": "Nemaha County, KS",
            "value": 1.8
        }, {
            "fips_code": 20133,
            "state": "KS",
            "area_name": "Neosho County, KS",
            "value": 3.6
        }, {
            "fips_code": 20135,
            "state": "KS",
            "area_name": "Ness County, KS",
            "value": 2.2
        }, {
            "fips_code": 20137,
            "state": "KS",
            "area_name": "Norton County, KS",
            "value": 1.9
        }, {
            "fips_code": 20139,
            "state": "KS",
            "area_name": "Osage County, KS",
            "value": 2.8
        }, {
            "fips_code": 20141,
            "state": "KS",
            "area_name": "Osborne County, KS",
            "value": 2.0
        }, {
            "fips_code": 20143,
            "state": "KS",
            "area_name": "Ottawa County, KS",
            "value": 2.5
        }, {
            "fips_code": 20145,
            "state": "KS",
            "area_name": "Pawnee County, KS",
            "value": 2.4
        }, {
            "fips_code": 20147,
            "state": "KS",
            "area_name": "Phillips County, KS",
            "value": 2.2
        }, {
            "fips_code": 20149,
            "state": "KS",
            "area_name": "Pottawatomie County, KS",
            "value": 2.4
        }, {
            "fips_code": 20151,
            "state": "KS",
            "area_name": "Pratt County, KS",
            "value": 2.1
        }, {
            "fips_code": 20153,
            "state": "KS",
            "area_name": "Rawlins County, KS",
            "value": 1.8
        }, {
            "fips_code": 20155,
            "state": "KS",
            "area_name": "Reno County, KS",
            "value": 2.8
        }, {
            "fips_code": 20157,
            "state": "KS",
            "area_name": "Republic County, KS",
            "value": 2.1
        }, {
            "fips_code": 20159,
            "state": "KS",
            "area_name": "Rice County, KS",
            "value": 2.3
        }, {
            "fips_code": 20161,
            "state": "KS",
            "area_name": "Riley County, KS",
            "value": 2.7
        }, {
            "fips_code": 20163,
            "state": "KS",
            "area_name": "Rooks County, KS",
            "value": 2.6
        }, {
            "fips_code": 20165,
            "state": "KS",
            "area_name": "Rush County, KS",
            "value": 2.2
        }, {
            "fips_code": 20167,
            "state": "KS",
            "area_name": "Russell County, KS",
            "value": 2.3
        }, {
            "fips_code": 20169,
            "state": "KS",
            "area_name": "Saline County, KS",
            "value": 2.4
        }, {
            "fips_code": 20171,
            "state": "KS",
            "area_name": "Scott County, KS",
            "value": 1.8
        }, {
            "fips_code": 20173,
            "state": "KS",
            "area_name": "Sedgwick County, KS",
            "value": 3.1
        }, {
            "fips_code": 20175,
            "state": "KS",
            "area_name": "Seward County, KS",
            "value": 2.6
        }, {
            "fips_code": 20177,
            "state": "KS",
            "area_name": "Shawnee County, KS",
            "value": 2.7
        }, {
            "fips_code": 20179,
            "state": "KS",
            "area_name": "Sheridan County, KS",
            "value": 1.9
        }, {
            "fips_code": 20181,
            "state": "KS",
            "area_name": "Sherman County, KS",
            "value": 2.3
        }, {
            "fips_code": 20183,
            "state": "KS",
            "area_name": "Smith County, KS",
            "value": 2.0
        }, {
            "fips_code": 20185,
            "state": "KS",
            "area_name": "Stafford County, KS",
            "value": 2.4
        }, {
            "fips_code": 20187,
            "state": "KS",
            "area_name": "Stanton County, KS",
            "value": 1.9
        }, {
            "fips_code": 20189,
            "state": "KS",
            "area_name": "Stevens County, KS",
            "value": 2.0
        }, {
            "fips_code": 20191,
            "state": "KS",
            "area_name": "Sumner County, KS",
            "value": 3.0
        }, {
            "fips_code": 20193,
            "state": "KS",
            "area_name": "Thomas County, KS",
            "value": 1.9
        }, {
            "fips_code": 20195,
            "state": "KS",
            "area_name": "Trego County, KS",
            "value": 2.4
        }, {
            "fips_code": 20197,
            "state": "KS",
            "area_name": "Wabaunsee County, KS",
            "value": 2.5
        }, {
            "fips_code": 20199,
            "state": "KS",
            "area_name": "Wallace County, KS",
            "value": 2.0
        }, {
            "fips_code": 20201,
            "state": "KS",
            "area_name": "Washington County, KS",
            "value": 2.0
        }, {
            "fips_code": 20203,
            "state": "KS",
            "area_name": "Wichita County, KS",
            "value": 2.0
        }, {
            "fips_code": 20205,
            "state": "KS",
            "area_name": "Wilson County, KS",
            "value": 3.1
        }, {
            "fips_code": 20207,
            "state": "KS",
            "area_name": "Woodson County, KS",
            "value": 3.5
        }, {
            "fips_code": 20209,
            "state": "KS",
            "area_name": "Wyandotte County, KS",
            "value": 3.5
        }, {
            "fips_code": 21000,
            "state": "KY",
            "area_name": "Kentucky",
            "value": 3.9
        }, {
            "fips_code": 21001,
            "state": "KY",
            "area_name": "Adair County, KY",
            "value": 4.5
        }, {
            "fips_code": 21003,
            "state": "KY",
            "area_name": "Allen County, KY",
            "value": 3.8
        }, {
            "fips_code": 21005,
            "state": "KY",
            "area_name": "Anderson County, KY",
            "value": 3.2
        }, {
            "fips_code": 21007,
            "state": "KY",
            "area_name": "Ballard County, KY",
            "value": 4.8
        }, {
            "fips_code": 21009,
            "state": "KY",
            "area_name": "Barren County, KY",
            "value": 4.1
        }, {
            "fips_code": 21011,
            "state": "KY",
            "area_name": "Bath County, KY",
            "value": 5.2
        }, {
            "fips_code": 21013,
            "state": "KY",
            "area_name": "Bell County, KY",
            "value": 5.0
        }, {
            "fips_code": 21015,
            "state": "KY",
            "area_name": "Boone County, KY",
            "value": 3.1
        }, {
            "fips_code": 21017,
            "state": "KY",
            "area_name": "Bourbon County, KY",
            "value": 3.5
        }, {
            "fips_code": 21019,
            "state": "KY",
            "area_name": "Boyd County, KY",
            "value": 5.1
        }, {
            "fips_code": 21021,
            "state": "KY",
            "area_name": "Boyle County, KY",
            "value": 3.9
        }, {
            "fips_code": 21023,
            "state": "KY",
            "area_name": "Bracken County, KY",
            "value": 4.3
        }, {
            "fips_code": 21025,
            "state": "KY",
            "area_name": "Breathitt County, KY",
            "value": 7.3
        }, {
            "fips_code": 21027,
            "state": "KY",
            "area_name": "Breckinridge County, KY",
            "value": 4.6
        }, {
            "fips_code": 21029,
            "state": "KY",
            "area_name": "Bullitt County, KY",
            "value": 4.0
        }, {
            "fips_code": 21031,
            "state": "KY",
            "area_name": "Butler County, KY",
            "value": 4.1
        }, {
            "fips_code": 21033,
            "state": "KY",
            "area_name": "Caldwell County, KY",
            "value": 3.4
        }, {
            "fips_code": 21035,
            "state": "KY",
            "area_name": "Calloway County, KY",
            "value": 4.0
        }, {
            "fips_code": 21037,
            "state": "KY",
            "area_name": "Campbell County, KY",
            "value": 3.3
        }, {
            "fips_code": 21039,
            "state": "KY",
            "area_name": "Carlisle County, KY",
            "value": 3.7
        }, {
            "fips_code": 21041,
            "state": "KY",
            "area_name": "Carroll County, KY",
            "value": 3.1
        }, {
            "fips_code": 21043,
            "state": "KY",
            "area_name": "Carter County, KY",
            "value": 7.0
        }, {
            "fips_code": 21045,
            "state": "KY",
            "area_name": "Casey County, KY",
            "value": 3.7
        }, {
            "fips_code": 21047,
            "state": "KY",
            "area_name": "Christian County, KY",
            "value": 4.8
        }, {
            "fips_code": 21049,
            "state": "KY",
            "area_name": "Clark County, KY",
            "value": 3.6
        }, {
            "fips_code": 21051,
            "state": "KY",
            "area_name": "Clay County, KY",
            "value": 5.6
        }, {
            "fips_code": 21053,
            "state": "KY",
            "area_name": "Clinton County, KY",
            "value": 4.8
        }, {
            "fips_code": 21055,
            "state": "KY",
            "area_name": "Crittenden County, KY",
            "value": 4.1
        }, {
            "fips_code": 21057,
            "state": "KY",
            "area_name": "Cumberland County, KY",
            "value": 3.2
        }, {
            "fips_code": 21059,
            "state": "KY",
            "area_name": "Daviess County, KY",
            "value": 3.9
        }, {
            "fips_code": 21061,
            "state": "KY",
            "area_name": "Edmonson County, KY",
            "value": 4.8
        }, {
            "fips_code": 21063,
            "state": "KY",
            "area_name": "Elliott County, KY",
            "value": 8.0
        }, {
            "fips_code": 21065,
            "state": "KY",
            "area_name": "Estill County, KY",
            "value": 4.8
        }, {
            "fips_code": 21067,
            "state": "KY",
            "area_name": "Fayette County, KY",
            "value": 3.1
        }, {
            "fips_code": 21069,
            "state": "KY",
            "area_name": "Fleming County, KY",
            "value": 4.4
        }, {
            "fips_code": 21071,
            "state": "KY",
            "area_name": "Floyd County, KY",
            "value": 5.8
        }, {
            "fips_code": 21073,
            "state": "KY",
            "area_name": "Franklin County, KY",
            "value": 3.4
        }, {
            "fips_code": 21075,
            "state": "KY",
            "area_name": "Fulton County, KY",
            "value": 4.5
        }, {
            "fips_code": 21077,
            "state": "KY",
            "area_name": "Gallatin County, KY",
            "value": 3.6
        }, {
            "fips_code": 21079,
            "state": "KY",
            "area_name": "Garrard County, KY",
            "value": 3.8
        }, {
            "fips_code": 21081,
            "state": "KY",
            "area_name": "Grant County, KY",
            "value": 3.7
        }, {
            "fips_code": 21083,
            "state": "KY",
            "area_name": "Graves County, KY",
            "value": 4.5
        }, {
            "fips_code": 21085,
            "state": "KY",
            "area_name": "Grayson County, KY",
            "value": 4.6
        }, {
            "fips_code": 21087,
            "state": "KY",
            "area_name": "Green County, KY",
            "value": 3.7
        }, {
            "fips_code": 21089,
            "state": "KY",
            "area_name": "Greenup County, KY",
            "value": 5.8
        }, {
            "fips_code": 21091,
            "state": "KY",
            "area_name": "Hancock County, KY",
            "value": 4.2
        }, {
            "fips_code": 21093,
            "state": "KY",
            "area_name": "Hardin County, KY",
            "value": 4.1
        }, {
            "fips_code": 21095,
            "state": "KY",
            "area_name": "Harlan County, KY",
            "value": 6.3
        }, {
            "fips_code": 21097,
            "state": "KY",
            "area_name": "Harrison County, KY",
            "value": 3.3
        }, {
            "fips_code": 21099,
            "state": "KY",
            "area_name": "Hart County, KY",
            "value": 3.9
        }, {
            "fips_code": 21101,
            "state": "KY",
            "area_name": "Henderson County, KY",
            "value": 3.8
        }, {
            "fips_code": 21103,
            "state": "KY",
            "area_name": "Henry County, KY",
            "value": 3.6
        }, {
            "fips_code": 21105,
            "state": "KY",
            "area_name": "Hickman County, KY",
            "value": 4.3
        }, {
            "fips_code": 21107,
            "state": "KY",
            "area_name": "Hopkins County, KY",
            "value": 4.4
        }, {
            "fips_code": 21109,
            "state": "KY",
            "area_name": "Jackson County, KY",
            "value": 5.6
        }, {
            "fips_code": 21111,
            "state": "KY",
            "area_name": "Jefferson County, KY",
            "value": 3.8
        }, {
            "fips_code": 21113,
            "state": "KY",
            "area_name": "Jessamine County, KY",
            "value": 3.2
        }, {
            "fips_code": 21115,
            "state": "KY",
            "area_name": "Johnson County, KY",
            "value": 5.9
        }, {
            "fips_code": 21117,
            "state": "KY",
            "area_name": "Kenton County, KY",
            "value": 3.3
        }, {
            "fips_code": 21119,
            "state": "KY",
            "area_name": "Knott County, KY",
            "value": 6.1
        }, {
            "fips_code": 21121,
            "state": "KY",
            "area_name": "Knox County, KY",
            "value": 5.3
        }, {
            "fips_code": 21123,
            "state": "KY",
            "area_name": "Larue County, KY",
            "value": 4.4
        }, {
            "fips_code": 21125,
            "state": "KY",
            "area_name": "Laurel County, KY",
            "value": 4.2
        }, {
            "fips_code": 21127,
            "state": "KY",
            "area_name": "Lawrence County, KY",
            "value": 5.3
        }, {
            "fips_code": 21129,
            "state": "KY",
            "area_name": "Lee County, KY",
            "value": 5.4
        }, {
            "fips_code": 21131,
            "state": "KY",
            "area_name": "Leslie County, KY",
            "value": 6.6
        }, {
            "fips_code": 21133,
            "state": "KY",
            "area_name": "Letcher County, KY",
            "value": 6.1
        }, {
            "fips_code": 21135,
            "state": "KY",
            "area_name": "Lewis County, KY",
            "value": 7.2
        }, {
            "fips_code": 21137,
            "state": "KY",
            "area_name": "Lincoln County, KY",
            "value": 4.7
        }, {
            "fips_code": 21139,
            "state": "KY",
            "area_name": "Livingston County, KY",
            "value": 4.8
        }, {
            "fips_code": 21141,
            "state": "KY",
            "area_name": "Logan County, KY",
            "value": 3.5
        }, {
            "fips_code": 21143,
            "state": "KY",
            "area_name": "Lyon County, KY",
            "value": 4.2
        }, {
            "fips_code": 21145,
            "state": "KY",
            "area_name": "McCracken County, KY",
            "value": 4.0
        }, {
            "fips_code": 21147,
            "state": "KY",
            "area_name": "McCreary County, KY",
            "value": 5.2
        }, {
            "fips_code": 21149,
            "state": "KY",
            "area_name": "McLean County, KY",
            "value": 4.4
        }, {
            "fips_code": 21151,
            "state": "KY",
            "area_name": "Madison County, KY",
            "value": 3.6
        }, {
            "fips_code": 21153,
            "state": "KY",
            "area_name": "Magoffin County, KY",
            "value": 10.5
        }, {
            "fips_code": 21155,
            "state": "KY",
            "area_name": "Marion County, KY",
            "value": 3.3
        }, {
            "fips_code": 21157,
            "state": "KY",
            "area_name": "Marshall County, KY",
            "value": 4.1
        }, {
            "fips_code": 21159,
            "state": "KY",
            "area_name": "Martin County, KY",
            "value": 7.3
        }, {
            "fips_code": 21161,
            "state": "KY",
            "area_name": "Mason County, KY",
            "value": 4.8
        }, {
            "fips_code": 21163,
            "state": "KY",
            "area_name": "Meade County, KY",
            "value": 4.4
        }, {
            "fips_code": 21165,
            "state": "KY",
            "area_name": "Menifee County, KY",
            "value": 5.6
        }, {
            "fips_code": 21167,
            "state": "KY",
            "area_name": "Mercer County, KY",
            "value": 3.7
        }, {
            "fips_code": 21169,
            "state": "KY",
            "area_name": "Metcalfe County, KY",
            "value": 4.5
        }, {
            "fips_code": 21171,
            "state": "KY",
            "area_name": "Monroe County, KY",
            "value": 3.3
        }, {
            "fips_code": 21173,
            "state": "KY",
            "area_name": "Montgomery County, KY",
            "value": 4.5
        }, {
            "fips_code": 21175,
            "state": "KY",
            "area_name": "Morgan County, KY",
            "value": 5.3
        }, {
            "fips_code": 21177,
            "state": "KY",
            "area_name": "Muhlenberg County, KY",
            "value": 5.7
        }, {
            "fips_code": 21179,
            "state": "KY",
            "area_name": "Nelson County, KY",
            "value": 3.8
        }, {
            "fips_code": 21181,
            "state": "KY",
            "area_name": "Nicholas County, KY",
            "value": 4.1
        }, {
            "fips_code": 21183,
            "state": "KY",
            "area_name": "Ohio County, KY",
            "value": 4.9
        }, {
            "fips_code": 21185,
            "state": "KY",
            "area_name": "Oldham County, KY",
            "value": 3.3
        }, {
            "fips_code": 21187,
            "state": "KY",
            "area_name": "Owen County, KY",
            "value": 3.4
        }, {
            "fips_code": 21189,
            "state": "KY",
            "area_name": "Owsley County, KY",
            "value": 6.9
        }, {
            "fips_code": 21191,
            "state": "KY",
            "area_name": "Pendleton County, KY",
            "value": 3.5
        }, {
            "fips_code": 21193,
            "state": "KY",
            "area_name": "Perry County, KY",
            "value": 5.0
        }, {
            "fips_code": 21195,
            "state": "KY",
            "area_name": "Pike County, KY",
            "value": 5.2
        }, {
            "fips_code": 21197,
            "state": "KY",
            "area_name": "Powell County, KY",
            "value": 4.1
        }, {
            "fips_code": 21199,
            "state": "KY",
            "area_name": "Pulaski County, KY",
            "value": 4.5
        }, {
            "fips_code": 21201,
            "state": "KY",
            "area_name": "Robertson County, KY",
            "value": 5.0
        }, {
            "fips_code": 21203,
            "state": "KY",
            "area_name": "Rockcastle County, KY",
            "value": 4.6
        }, {
            "fips_code": 21205,
            "state": "KY",
            "area_name": "Rowan County, KY",
            "value": 4.6
        }, {
            "fips_code": 21207,
            "state": "KY",
            "area_name": "Russell County, KY",
            "value": 4.9
        }, {
            "fips_code": 21209,
            "state": "KY",
            "area_name": "Scott County, KY",
            "value": 3.0
        }, {
            "fips_code": 21211,
            "state": "KY",
            "area_name": "Shelby County, KY",
            "value": 3.4
        }, {
            "fips_code": 21213,
            "state": "KY",
            "area_name": "Simpson County, KY",
            "value": 3.4
        }, {
            "fips_code": 21215,
            "state": "KY",
            "area_name": "Spencer County, KY",
            "value": 3.9
        }, {
            "fips_code": 21217,
            "state": "KY",
            "area_name": "Taylor County, KY",
            "value": 3.7
        }, {
            "fips_code": 21219,
            "state": "KY",
            "area_name": "Todd County, KY",
            "value": 3.2
        }, {
            "fips_code": 21221,
            "state": "KY",
            "area_name": "Trigg County, KY",
            "value": 4.5
        }, {
            "fips_code": 21223,
            "state": "KY",
            "area_name": "Trimble County, KY",
            "value": 4.3
        }, {
            "fips_code": 21225,
            "state": "KY",
            "area_name": "Union County, KY",
            "value": 4.3
        }, {
            "fips_code": 21227,
            "state": "KY",
            "area_name": "Warren County, KY",
            "value": 3.6
        }, {
            "fips_code": 21229,
            "state": "KY",
            "area_name": "Washington County, KY",
            "value": 3.4
        }, {
            "fips_code": 21231,
            "state": "KY",
            "area_name": "Wayne County, KY",
            "value": 5.0
        }, {
            "fips_code": 21233,
            "state": "KY",
            "area_name": "Webster County, KY",
            "value": 3.9
        }, {
            "fips_code": 21235,
            "state": "KY",
            "area_name": "Whitley County, KY",
            "value": 4.4
        }, {
            "fips_code": 21237,
            "state": "KY",
            "area_name": "Wolfe County, KY",
            "value": 5.6
        }, {
            "fips_code": 21239,
            "state": "KY",
            "area_name": "Woodford County, KY",
            "value": 3.0
        }, {
            "fips_code": 22000,
            "state": "LA",
            "area_name": "Louisiana",
            "value": 3.7
        }, {
            "fips_code": 22001,
            "state": "LA",
            "area_name": "Acadia Parish, LA",
            "value": 3.7
        }, {
            "fips_code": 22003,
            "state": "LA",
            "area_name": "Allen Parish, LA",
            "value": 4.2
        }, {
            "fips_code": 22005,
            "state": "LA",
            "area_name": "Ascension Parish, LA",
            "value": 3.0
        }, {
            "fips_code": 22007,
            "state": "LA",
            "area_name": "Assumption Parish, LA",
            "value": 4.6
        }, {
            "fips_code": 22009,
            "state": "LA",
            "area_name": "Avoyelles Parish, LA",
            "value": 4.2
        }, {
            "fips_code": 22011,
            "state": "LA",
            "area_name": "Beauregard Parish, LA",
            "value": 3.4
        }, {
            "fips_code": 22013,
            "state": "LA",
            "area_name": "Bienville Parish, LA",
            "value": 4.2
        }, {
            "fips_code": 22015,
            "state": "LA",
            "area_name": "Bossier Parish, LA",
            "value": 3.0
        }, {
            "fips_code": 22017,
            "state": "LA",
            "area_name": "Caddo Parish, LA",
            "value": 4.1
        }, {
            "fips_code": 22019,
            "state": "LA",
            "area_name": "Calcasieu Parish, LA",
            "value": 3.5
        }, {
            "fips_code": 22021,
            "state": "LA",
            "area_name": "Caldwell Parish, LA",
            "value": 3.8
        }, {
            "fips_code": 22023,
            "state": "LA",
            "area_name": "Cameron Parish, LA",
            "value": 2.8
        }, {
            "fips_code": 22025,
            "state": "LA",
            "area_name": "Catahoula Parish, LA",
            "value": 4.1
        }, {
            "fips_code": 22027,
            "state": "LA",
            "area_name": "Claiborne Parish, LA",
            "value": 3.8
        }, {
            "fips_code": 22029,
            "state": "LA",
            "area_name": "Concordia Parish, LA",
            "value": 4.6
        }, {
            "fips_code": 22031,
            "state": "LA",
            "area_name": "De Soto Parish, LA",
            "value": 3.8
        }, {
            "fips_code": 22033,
            "state": "LA",
            "area_name": "East Baton Rouge Parish, LA",
            "value": 3.5
        }, {
            "fips_code": 22035,
            "state": "LA",
            "area_name": "East Carroll Parish, LA",
            "value": 7.9
        }, {
            "fips_code": 22037,
            "state": "LA",
            "area_name": "East Feliciana Parish, LA",
            "value": 3.2
        }, {
            "fips_code": 22039,
            "state": "LA",
            "area_name": "Evangeline Parish, LA",
            "value": 4.1
        }, {
            "fips_code": 22041,
            "state": "LA",
            "area_name": "Franklin Parish, LA",
            "value": 4.8
        }, {
            "fips_code": 22043,
            "state": "LA",
            "area_name": "Grant Parish, LA",
            "value": 3.5
        }, {
            "fips_code": 22045,
            "state": "LA",
            "area_name": "Iberia Parish, LA",
            "value": 4.2
        }, {
            "fips_code": 22047,
            "state": "LA",
            "area_name": "Iberville Parish, LA",
            "value": 4.4
        }, {
            "fips_code": 22049,
            "state": "LA",
            "area_name": "Jackson Parish, LA",
            "value": 3.2
        }, {
            "fips_code": 22051,
            "state": "LA",
            "area_name": "Jefferson Parish, LA",
            "value": 3.6
        }, {
            "fips_code": 22053,
            "state": "LA",
            "area_name": "Jefferson Davis Parish, LA",
            "value": 3.5
        }, {
            "fips_code": 22055,
            "state": "LA",
            "area_name": "Lafayette Parish, LA",
            "value": 3.2
        }, {
            "fips_code": 22057,
            "state": "LA",
            "area_name": "Lafourche Parish, LA",
            "value": 3.4
        }, {
            "fips_code": 22059,
            "state": "LA",
            "area_name": "LaSalle Parish, LA",
            "value": 2.6
        }, {
            "fips_code": 22061,
            "state": "LA",
            "area_name": "Lincoln Parish, LA",
            "value": 3.5
        }, {
            "fips_code": 22063,
            "state": "LA",
            "area_name": "Livingston Parish, LA",
            "value": 2.8
        }, {
            "fips_code": 22065,
            "state": "LA",
            "area_name": "Madison Parish, LA",
            "value": 5.0
        }, {
            "fips_code": 22067,
            "state": "LA",
            "area_name": "Morehouse Parish, LA",
            "value": 5.2
        }, {
            "fips_code": 22069,
            "state": "LA",
            "area_name": "Natchitoches Parish, LA",
            "value": 3.9
        }, {
            "fips_code": 22071,
            "state": "LA",
            "area_name": "Orleans Parish, LA",
            "value": 4.5
        }, {
            "fips_code": 22073,
            "state": "LA",
            "area_name": "Ouachita Parish, LA",
            "value": 3.6
        }, {
            "fips_code": 22075,
            "state": "LA",
            "area_name": "Plaquemines Parish, LA",
            "value": 3.2
        }, {
            "fips_code": 22077,
            "state": "LA",
            "area_name": "Pointe Coupee Parish, LA",
            "value": 3.9
        }, {
            "fips_code": 22079,
            "state": "LA",
            "area_name": "Rapides Parish, LA",
            "value": 3.2
        }, {
            "fips_code": 22081,
            "state": "LA",
            "area_name": "Red River Parish, LA",
            "value": 3.3
        }, {
            "fips_code": 22083,
            "state": "LA",
            "area_name": "Richland Parish, LA",
            "value": 4.1
        }, {
            "fips_code": 22085,
            "state": "LA",
            "area_name": "Sabine Parish, LA",
            "value": 3.3
        }, {
            "fips_code": 22087,
            "state": "LA",
            "area_name": "St. Bernard Parish, LA",
            "value": 4.0
        }, {
            "fips_code": 22089,
            "state": "LA",
            "area_name": "St. Charles Parish, LA",
            "value": 3.3
        }, {
            "fips_code": 22091,
            "state": "LA",
            "area_name": "St. Helena Parish, LA",
            "value": 5.3
        }, {
            "fips_code": 22093,
            "state": "LA",
            "area_name": "St. James Parish, LA",
            "value": 4.6
        }, {
            "fips_code": 22095,
            "state": "LA",
            "area_name": "St. John the Baptist Parish, LA",
            "value": 5.0
        }, {
            "fips_code": 22097,
            "state": "LA",
            "area_name": "St. Landry Parish, LA",
            "value": 4.4
        }, {
            "fips_code": 22099,
            "state": "LA",
            "area_name": "St. Martin Parish, LA",
            "value": 3.7
        }, {
            "fips_code": 22101,
            "state": "LA",
            "area_name": "St. Mary Parish, LA",
            "value": 4.3
        }, {
            "fips_code": 22103,
            "state": "LA",
            "area_name": "St. Tammany Parish, LA",
            "value": 2.9
        }, {
            "fips_code": 22105,
            "state": "LA",
            "area_name": "Tangipahoa Parish, LA",
            "value": 4.3
        }, {
            "fips_code": 22107,
            "state": "LA",
            "area_name": "Tensas Parish, LA",
            "value": 5.0
        }, {
            "fips_code": 22109,
            "state": "LA",
            "area_name": "Terrebonne Parish, LA",
            "value": 3.9
        }, {
            "fips_code": 22111,
            "state": "LA",
            "area_name": "Union Parish, LA",
            "value": 3.8
        }, {
            "fips_code": 22113,
            "state": "LA",
            "area_name": "Vermilion Parish, LA",
            "value": 3.5
        }, {
            "fips_code": 22115,
            "state": "LA",
            "area_name": "Vernon Parish, LA",
            "value": 4.0
        }, {
            "fips_code": 22117,
            "state": "LA",
            "area_name": "Washington Parish, LA",
            "value": 4.2
        }, {
            "fips_code": 22119,
            "state": "LA",
            "area_name": "Webster Parish, LA",
            "value": 4.1
        }, {
            "fips_code": 22121,
            "state": "LA",
            "area_name": "West Baton Rouge Parish, LA",
            "value": 3.3
        }, {
            "fips_code": 22123,
            "state": "LA",
            "area_name": "West Carroll Parish, LA",
            "value": 5.5
        }, {
            "fips_code": 22125,
            "state": "LA",
            "area_name": "West Feliciana Parish, LA",
            "value": 2.6
        }, {
            "fips_code": 22127,
            "state": "LA",
            "area_name": "Winn Parish, LA",
            "value": 4.0
        }, {
            "fips_code": 23000,
            "state": "ME",
            "area_name": "Maine",
            "value": 3.0
        }, {
            "fips_code": 23001,
            "state": "ME",
            "area_name": "Androscoggin County, ME",
            "value": 3.0
        }, {
            "fips_code": 23003,
            "state": "ME",
            "area_name": "Aroostook County, ME",
            "value": 4.1
        }, {
            "fips_code": 23005,
            "state": "ME",
            "area_name": "Cumberland County, ME",
            "value": 2.4
        }, {
            "fips_code": 23007,
            "state": "ME",
            "area_name": "Franklin County, ME",
            "value": 3.6
        }, {
            "fips_code": 23009,
            "state": "ME",
            "area_name": "Hancock County, ME",
            "value": 3.5
        }, {
            "fips_code": 23011,
            "state": "ME",
            "area_name": "Kennebec County, ME",
            "value": 2.8
        }, {
            "fips_code": 23013,
            "state": "ME",
            "area_name": "Knox County, ME",
            "value": 3.0
        }, {
            "fips_code": 23015,
            "state": "ME",
            "area_name": "Lincoln County, ME",
            "value": 2.9
        }, {
            "fips_code": 23017,
            "state": "ME",
            "area_name": "Oxford County, ME",
            "value": 3.3
        }, {
            "fips_code": 23019,
            "state": "ME",
            "area_name": "Penobscot County, ME",
            "value": 3.1
        }, {
            "fips_code": 23021,
            "state": "ME",
            "area_name": "Piscataquis County, ME",
            "value": 3.8
        }, {
            "fips_code": 23023,
            "state": "ME",
            "area_name": "Sagadahoc County, ME",
            "value": 2.4
        }, {
            "fips_code": 23025,
            "state": "ME",
            "area_name": "Somerset County, ME",
            "value": 4.1
        }, {
            "fips_code": 23027,
            "state": "ME",
            "area_name": "Waldo County, ME",
            "value": 3.2
        }, {
            "fips_code": 23029,
            "state": "ME",
            "area_name": "Washington County, ME",
            "value": 4.3
        }, {
            "fips_code": 23031,
            "state": "ME",
            "area_name": "York County, ME",
            "value": 2.7
        }, {
            "fips_code": 24000,
            "state": "MD",
            "area_name": "Maryland",
            "value": 3.2
        }, {
            "fips_code": 24001,
            "state": "MD",
            "area_name": "Allegany County, MD",
            "value": 4.0
        }, {
            "fips_code": 24003,
            "state": "MD",
            "area_name": "Anne Arundel County, MD",
            "value": 2.8
        }, {
            "fips_code": 24005,
            "state": "MD",
            "area_name": "Baltimore County, MD",
            "value": 3.3
        }, {
            "fips_code": 24009,
            "state": "MD",
            "area_name": "Calvert County, MD",
            "value": 2.9
        }, {
            "fips_code": 24011,
            "state": "MD",
            "area_name": "Caroline County, MD",
            "value": 3.1
        }, {
            "fips_code": 24013,
            "state": "MD",
            "area_name": "Carroll County, MD",
            "value": 2.7
        }, {
            "fips_code": 24015,
            "state": "MD",
            "area_name": "Cecil County, MD",
            "value": 3.3
        }, {
            "fips_code": 24017,
            "state": "MD",
            "area_name": "Charles County, MD",
            "value": 3.3
        }, {
            "fips_code": 24019,
            "state": "MD",
            "area_name": "Dorchester County, MD",
            "value": 3.6
        }, {
            "fips_code": 24021,
            "state": "MD",
            "area_name": "Frederick County, MD",
            "value": 3.0
        }, {
            "fips_code": 24023,
            "state": "MD",
            "area_name": "Garrett County, MD",
            "value": 3.5
        }, {
            "fips_code": 24025,
            "state": "MD",
            "area_name": "Harford County, MD",
            "value": 3.0
        }, {
            "fips_code": 24027,
            "state": "MD",
            "area_name": "Howard County, MD",
            "value": 2.6
        }, {
            "fips_code": 24029,
            "state": "MD",
            "area_name": "Kent County, MD",
            "value": 3.6
        }, {
            "fips_code": 24031,
            "state": "MD",
            "area_name": "Montgomery County, MD",
            "value": 2.9
        }, {
            "fips_code": 24033,
            "state": "MD",
            "area_name": "Prince George's County, MD",
            "value": 3.5
        }, {
            "fips_code": 24035,
            "state": "MD",
            "area_name": "Queen Anne's County, MD",
            "value": 2.8
        }, {
            "fips_code": 24037,
            "state": "MD",
            "area_name": "St. Mary's County, MD",
            "value": 3.1
        }, {
            "fips_code": 24039,
            "state": "MD",
            "area_name": "Somerset County, MD",
            "value": 4.8
        }, {
            "fips_code": 24041,
            "state": "MD",
            "area_name": "Talbot County, MD",
            "value": 3.4
        }, {
            "fips_code": 24043,
            "state": "MD",
            "area_name": "Washington County, MD",
            "value": 3.3
        }, {
            "fips_code": 24045,
            "state": "MD",
            "area_name": "Wicomico County, MD",
            "value": 3.8
        }, {
            "fips_code": 24047,
            "state": "MD",
            "area_name": "Worcester County, MD",
            "value": 5.0
        }, {
            "fips_code": 24510,
            "state": "MD",
            "area_name": "Baltimore city, MD",
            "value": 4.3
        }, {
            "fips_code": 25000,
            "state": "MA",
            "area_name": "Massachusetts",
            "value": 3.8
        }, {
            "fips_code": 25001,
            "state": "MA",
            "area_name": "Barnstable County, MA",
            "value": 4.7
        }, {
            "fips_code": 25003,
            "state": "MA",
            "area_name": "Berkshire County, MA",
            "value": 4.4
        }, {
            "fips_code": 25005,
            "state": "MA",
            "area_name": "Bristol County, MA",
            "value": 4.6
        }, {
            "fips_code": 25007,
            "state": "MA",
            "area_name": "Dukes County, MA",
            "value": 5.2
        }, {
            "fips_code": 25009,
            "state": "MA",
            "area_name": "Essex County, MA",
            "value": 3.9
        }, {
            "fips_code": 25011,
            "state": "MA",
            "area_name": "Franklin County, MA",
            "value": 3.4
        }, {
            "fips_code": 25013,
            "state": "MA",
            "area_name": "Hampden County, MA",
            "value": 4.9
        }, {
            "fips_code": 25015,
            "state": "MA",
            "area_name": "Hampshire County, MA",
            "value": 3.4
        }, {
            "fips_code": 25017,
            "state": "MA",
            "area_name": "Middlesex County, MA",
            "value": 3.1
        }, {
            "fips_code": 25019,
            "state": "MA",
            "area_name": "Nantucket County/town, MA",
            "value": 6.3
        }, {
            "fips_code": 25021,
            "state": "MA",
            "area_name": "Norfolk County, MA",
            "value": 3.3
        }, {
            "fips_code": 25023,
            "state": "MA",
            "area_name": "Plymouth County, MA",
            "value": 4.0
        }, {
            "fips_code": 25025,
            "state": "MA",
            "area_name": "Suffolk County, MA",
            "value": 3.6
        }, {
            "fips_code": 25027,
            "state": "MA",
            "area_name": "Worcester County, MA",
            "value": 3.9
        }, {
            "fips_code": 26000,
            "state": "MI",
            "area_name": "Michigan",
            "value": 4.2
        }, {
            "fips_code": 26001,
            "state": "MI",
            "area_name": "Alcona County, MI",
            "value": 7.0
        }, {
            "fips_code": 26003,
            "state": "MI",
            "area_name": "Alger County, MI",
            "value": 7.4
        }, {
            "fips_code": 26005,
            "state": "MI",
            "area_name": "Allegan County, MI",
            "value": 3.7
        }, {
            "fips_code": 26007,
            "state": "MI",
            "area_name": "Alpena County, MI",
            "value": 5.0
        }, {
            "fips_code": 26009,
            "state": "MI",
            "area_name": "Antrim County, MI",
            "value": 5.8
        }, {
            "fips_code": 26011,
            "state": "MI",
            "area_name": "Arenac County, MI",
            "value": 7.4
        }, {
            "fips_code": 26013,
            "state": "MI",
            "area_name": "Baraga County, MI",
            "value": 7.3
        }, {
            "fips_code": 26015,
            "state": "MI",
            "area_name": "Barry County, MI",
            "value": 3.9
        }, {
            "fips_code": 26017,
            "state": "MI",
            "area_name": "Bay County, MI",
            "value": 5.2
        }, {
            "fips_code": 26019,
            "state": "MI",
            "area_name": "Benzie County, MI",
            "value": 5.3
        }, {
            "fips_code": 26021,
            "state": "MI",
            "area_name": "Berrien County, MI",
            "value": 4.6
        }, {
            "fips_code": 26023,
            "state": "MI",
            "area_name": "Branch County, MI",
            "value": 4.1
        }, {
            "fips_code": 26025,
            "state": "MI",
            "area_name": "Calhoun County, MI",
            "value": 4.8
        }, {
            "fips_code": 26027,
            "state": "MI",
            "area_name": "Cass County, MI",
            "value": 4.5
        }, {
            "fips_code": 26029,
            "state": "MI",
            "area_name": "Charlevoix County, MI",
            "value": 4.7
        }, {
            "fips_code": 26031,
            "state": "MI",
            "area_name": "Cheboygan County, MI",
            "value": 8.300000000000001
        }, {
            "fips_code": 26033,
            "state": "MI",
            "area_name": "Chippewa County, MI",
            "value": 6.4
        }, {
            "fips_code": 26035,
            "state": "MI",
            "area_name": "Clare County, MI",
            "value": 7.0
        }, {
            "fips_code": 26037,
            "state": "MI",
            "area_name": "Clinton County, MI",
            "value": 3.9
        }, {
            "fips_code": 26039,
            "state": "MI",
            "area_name": "Crawford County, MI",
            "value": 6.6
        }, {
            "fips_code": 26041,
            "state": "MI",
            "area_name": "Delta County, MI",
            "value": 5.6
        }, {
            "fips_code": 26043,
            "state": "MI",
            "area_name": "Dickinson County, MI",
            "value": 4.3
        }, {
            "fips_code": 26045,
            "state": "MI",
            "area_name": "Eaton County, MI",
            "value": 4.4
        }, {
            "fips_code": 26047,
            "state": "MI",
            "area_name": "Emmet County, MI",
            "value": 5.6
        }, {
            "fips_code": 26049,
            "state": "MI",
            "area_name": "Genesee County, MI",
            "value": 5.6
        }, {
            "fips_code": 26051,
            "state": "MI",
            "area_name": "Gladwin County, MI",
            "value": 6.1
        }, {
            "fips_code": 26053,
            "state": "MI",
            "area_name": "Gogebic County, MI",
            "value": 5.2
        }, {
            "fips_code": 26055,
            "state": "MI",
            "area_name": "Grand Traverse County, MI",
            "value": 3.8
        }, {
            "fips_code": 26057,
            "state": "MI",
            "area_name": "Gratiot County, MI",
            "value": 4.6
        }, {
            "fips_code": 26059,
            "state": "MI",
            "area_name": "Hillsdale County, MI",
            "value": 4.6
        }, {
            "fips_code": 26061,
            "state": "MI",
            "area_name": "Houghton County, MI",
            "value": 4.8
        }, {
            "fips_code": 26063,
            "state": "MI",
            "area_name": "Huron County, MI",
            "value": 4.7
        }, {
            "fips_code": 26065,
            "state": "MI",
            "area_name": "Ingham County, MI",
            "value": 4.4
        }, {
            "fips_code": 26067,
            "state": "MI",
            "area_name": "Ionia County, MI",
            "value": 3.9
        }, {
            "fips_code": 26069,
            "state": "MI",
            "area_name": "Iosco County, MI",
            "value": 6.4
        }, {
            "fips_code": 26071,
            "state": "MI",
            "area_name": "Iron County, MI",
            "value": 6.0
        }, {
            "fips_code": 26073,
            "state": "MI",
            "area_name": "Isabella County, MI",
            "value": 4.9
        }, {
            "fips_code": 26075,
            "state": "MI",
            "area_name": "Jackson County, MI",
            "value": 4.5
        }, {
            "fips_code": 26077,
            "state": "MI",
            "area_name": "Kalamazoo County, MI",
            "value": 3.9
        }, {
            "fips_code": 26079,
            "state": "MI",
            "area_name": "Kalkaska County, MI",
            "value": 6.0
        }, {
            "fips_code": 26081,
            "state": "MI",
            "area_name": "Kent County, MI",
            "value": 3.5
        }, {
            "fips_code": 26083,
            "state": "MI",
            "area_name": "Keweenaw County, MI",
            "value": 6.1
        }, {
            "fips_code": 26085,
            "state": "MI",
            "area_name": "Lake County, MI",
            "value": 7.1
        }, {
            "fips_code": 26087,
            "state": "MI",
            "area_name": "Lapeer County, MI",
            "value": 4.3
        }, {
            "fips_code": 26089,
            "state": "MI",
            "area_name": "Leelanau County, MI",
            "value": 4.3
        }, {
            "fips_code": 26091,
            "state": "MI",
            "area_name": "Lenawee County, MI",
            "value": 4.7
        }, {
            "fips_code": 26093,
            "state": "MI",
            "area_name": "Livingston County, MI",
            "value": 2.8
        }, {
            "fips_code": 26095,
            "state": "MI",
            "area_name": "Luce County, MI",
            "value": 6.2
        }, {
            "fips_code": 26097,
            "state": "MI",
            "area_name": "Mackinac County, MI",
            "value": 9.1
        }, {
            "fips_code": 26099,
            "state": "MI",
            "area_name": "Macomb County, MI",
            "value": 3.7
        }, {
            "fips_code": 26101,
            "state": "MI",
            "area_name": "Manistee County, MI",
            "value": 5.9
        }, {
            "fips_code": 26103,
            "state": "MI",
            "area_name": "Marquette County, MI",
            "value": 5.0
        }, {
            "fips_code": 26105,
            "state": "MI",
            "area_name": "Mason County, MI",
            "value": 5.3
        }, {
            "fips_code": 26107,
            "state": "MI",
            "area_name": "Mecosta County, MI",
            "value": 5.5
        }, {
            "fips_code": 26109,
            "state": "MI",
            "area_name": "Menominee County, MI",
            "value": 4.3
        }, {
            "fips_code": 26111,
            "state": "MI",
            "area_name": "Midland County, MI",
            "value": 4.3
        }, {
            "fips_code": 26113,
            "state": "MI",
            "area_name": "Missaukee County, MI",
            "value": 5.1
        }, {
            "fips_code": 26115,
            "state": "MI",
            "area_name": "Monroe County, MI",
            "value": 4.8
        }, {
            "fips_code": 26117,
            "state": "MI",
            "area_name": "Montcalm County, MI",
            "value": 4.5
        }, {
            "fips_code": 26119,
            "state": "MI",
            "area_name": "Montmorency County, MI",
            "value": 8.199999999999999
        }, {
            "fips_code": 26121,
            "state": "MI",
            "area_name": "Muskegon County, MI",
            "value": 5.1
        }, {
            "fips_code": 26123,
            "state": "MI",
            "area_name": "Newaygo County, MI",
            "value": 4.7
        }, {
            "fips_code": 26125,
            "state": "MI",
            "area_name": "Oakland County, MI",
            "value": 3.0
        }, {
            "fips_code": 26127,
            "state": "MI",
            "area_name": "Oceana County, MI",
            "value": 6.6
        }, {
            "fips_code": 26129,
            "state": "MI",
            "area_name": "Ogemaw County, MI",
            "value": 7.0
        }, {
            "fips_code": 26131,
            "state": "MI",
            "area_name": "Ontonagon County, MI",
            "value": 7.5
        }, {
            "fips_code": 26133,
            "state": "MI",
            "area_name": "Osceola County, MI",
            "value": 4.7
        }, {
            "fips_code": 26135,
            "state": "MI",
            "area_name": "Oscoda County, MI",
            "value": 7.9
        }, {
            "fips_code": 26137,
            "state": "MI",
            "area_name": "Otsego County, MI",
            "value": 5.4
        }, {
            "fips_code": 26139,
            "state": "MI",
            "area_name": "Ottawa County, MI",
            "value": 3.3
        }, {
            "fips_code": 26141,
            "state": "MI",
            "area_name": "Presque Isle County, MI",
            "value": 7.7
        }, {
            "fips_code": 26143,
            "state": "MI",
            "area_name": "Roscommon County, MI",
            "value": 8.5
        }, {
            "fips_code": 26145,
            "state": "MI",
            "area_name": "Saginaw County, MI",
            "value": 5.6
        }, {
            "fips_code": 26147,
            "state": "MI",
            "area_name": "St. Clair County, MI",
            "value": 3.9
        }, {
            "fips_code": 26149,
            "state": "MI",
            "area_name": "St. Joseph County, MI",
            "value": 4.3
        }, {
            "fips_code": 26151,
            "state": "MI",
            "area_name": "Sanilac County, MI",
            "value": 5.3
        }, {
            "fips_code": 26153,
            "state": "MI",
            "area_name": "Schoolcraft County, MI",
            "value": 7.8
        }, {
            "fips_code": 26155,
            "state": "MI",
            "area_name": "Shiawassee County, MI",
            "value": 4.8
        }, {
            "fips_code": 26157,
            "state": "MI",
            "area_name": "Tuscola County, MI",
            "value": 5.4
        }, {
            "fips_code": 26159,
            "state": "MI",
            "area_name": "Van Buren County, MI",
            "value": 5.1
        }, {
            "fips_code": 26161,
            "state": "MI",
            "area_name": "Washtenaw County, MI",
            "value": 3.6
        }, {
            "fips_code": 26163,
            "state": "MI",
            "area_name": "Wayne County, MI",
            "value": 4.6
        }, {
            "fips_code": 26165,
            "state": "MI",
            "area_name": "Wexford County, MI",
            "value": 4.9
        }, {
            "fips_code": 27000,
            "state": "MN",
            "area_name": "Minnesota",
            "value": 2.7
        }, {
            "fips_code": 27001,
            "state": "MN",
            "area_name": "Aitkin County, MN",
            "value": 4.5
        }, {
            "fips_code": 27003,
            "state": "MN",
            "area_name": "Anoka County, MN",
            "value": 2.6
        }, {
            "fips_code": 27005,
            "state": "MN",
            "area_name": "Becker County, MN",
            "value": 2.9
        }, {
            "fips_code": 27007,
            "state": "MN",
            "area_name": "Beltrami County, MN",
            "value": 3.3
        }, {
            "fips_code": 27009,
            "state": "MN",
            "area_name": "Benton County, MN",
            "value": 3.4
        }, {
            "fips_code": 27011,
            "state": "MN",
            "area_name": "Big Stone County, MN",
            "value": 3.3
        }, {
            "fips_code": 27013,
            "state": "MN",
            "area_name": "Blue Earth County, MN",
            "value": 2.3
        }, {
            "fips_code": 27015,
            "state": "MN",
            "area_name": "Brown County, MN",
            "value": 2.7
        }, {
            "fips_code": 27017,
            "state": "MN",
            "area_name": "Carlton County, MN",
            "value": 3.6
        }, {
            "fips_code": 27019,
            "state": "MN",
            "area_name": "Carver County, MN",
            "value": 2.2
        }, {
            "fips_code": 27021,
            "state": "MN",
            "area_name": "Cass County, MN",
            "value": 4.2
        }, {
            "fips_code": 27023,
            "state": "MN",
            "area_name": "Chippewa County, MN",
            "value": 2.4
        }, {
            "fips_code": 27025,
            "state": "MN",
            "area_name": "Chisago County, MN",
            "value": 3.1
        }, {
            "fips_code": 27027,
            "state": "MN",
            "area_name": "Clay County, MN",
            "value": 2.2
        }, {
            "fips_code": 27029,
            "state": "MN",
            "area_name": "Clearwater County, MN",
            "value": 6.6
        }, {
            "fips_code": 27031,
            "state": "MN",
            "area_name": "Cook County, MN",
            "value": 3.5
        }, {
            "fips_code": 27033,
            "state": "MN",
            "area_name": "Cottonwood County, MN",
            "value": 2.8
        }, {
            "fips_code": 27035,
            "state": "MN",
            "area_name": "Crow Wing County, MN",
            "value": 3.2
        }, {
            "fips_code": 27037,
            "state": "MN",
            "area_name": "Dakota County, MN",
            "value": 2.4
        }, {
            "fips_code": 27039,
            "state": "MN",
            "area_name": "Dodge County, MN",
            "value": 2.7
        }, {
            "fips_code": 27041,
            "state": "MN",
            "area_name": "Douglas County, MN",
            "value": 2.4
        }, {
            "fips_code": 27043,
            "state": "MN",
            "area_name": "Faribault County, MN",
            "value": 3.2
        }, {
            "fips_code": 27045,
            "state": "MN",
            "area_name": "Fillmore County, MN",
            "value": 2.6
        }, {
            "fips_code": 27047,
            "state": "MN",
            "area_name": "Freeborn County, MN",
            "value": 2.7
        }, {
            "fips_code": 27049,
            "state": "MN",
            "area_name": "Goodhue County, MN",
            "value": 2.6
        }, {
            "fips_code": 27051,
            "state": "MN",
            "area_name": "Grant County, MN",
            "value": 2.9
        }, {
            "fips_code": 27053,
            "state": "MN",
            "area_name": "Hennepin County, MN",
            "value": 2.5
        }, {
            "fips_code": 27055,
            "state": "MN",
            "area_name": "Houston County, MN",
            "value": 2.3
        }, {
            "fips_code": 27057,
            "state": "MN",
            "area_name": "Hubbard County, MN",
            "value": 4.2
        }, {
            "fips_code": 27059,
            "state": "MN",
            "area_name": "Isanti County, MN",
            "value": 3.4
        }, {
            "fips_code": 27061,
            "state": "MN",
            "area_name": "Itasca County, MN",
            "value": 4.5
        }, {
            "fips_code": 27063,
            "state": "MN",
            "area_name": "Jackson County, MN",
            "value": 2.5
        }, {
            "fips_code": 27065,
            "state": "MN",
            "area_name": "Kanabec County, MN",
            "value": 4.7
        }, {
            "fips_code": 27067,
            "state": "MN",
            "area_name": "Kandiyohi County, MN",
            "value": 2.9
        }, {
            "fips_code": 27069,
            "state": "MN",
            "area_name": "Kittson County, MN",
            "value": 2.8
        }, {
            "fips_code": 27071,
            "state": "MN",
            "area_name": "Koochiching County, MN",
            "value": 4.0
        }, {
            "fips_code": 27073,
            "state": "MN",
            "area_name": "Lac qui Parle County, MN",
            "value": 2.7
        }, {
            "fips_code": 27075,
            "state": "MN",
            "area_name": "Lake County, MN",
            "value": 5.0
        }, {
            "fips_code": 27077,
            "state": "MN",
            "area_name": "Lake of the Woods County, MN",
            "value": 3.2
        }, {
            "fips_code": 27079,
            "state": "MN",
            "area_name": "Le Sueur County, MN",
            "value": 3.6
        }, {
            "fips_code": 27081,
            "state": "MN",
            "area_name": "Lincoln County, MN",
            "value": 2.9
        }, {
            "fips_code": 27083,
            "state": "MN",
            "area_name": "Lyon County, MN",
            "value": 2.5
        }, {
            "fips_code": 27085,
            "state": "MN",
            "area_name": "McLeod County, MN",
            "value": 2.9
        }, {
            "fips_code": 27087,
            "state": "MN",
            "area_name": "Mahnomen County, MN",
            "value": 4.9
        }, {
            "fips_code": 27089,
            "state": "MN",
            "area_name": "Marshall County, MN",
            "value": 4.0
        }, {
            "fips_code": 27091,
            "state": "MN",
            "area_name": "Martin County, MN",
            "value": 2.7
        }, {
            "fips_code": 27093,
            "state": "MN",
            "area_name": "Meeker County, MN",
            "value": 2.9
        }, {
            "fips_code": 27095,
            "state": "MN",
            "area_name": "Mille Lacs County, MN",
            "value": 4.5
        }, {
            "fips_code": 27097,
            "state": "MN",
            "area_name": "Morrison County, MN",
            "value": 4.4
        }, {
            "fips_code": 27099,
            "state": "MN",
            "area_name": "Mower County, MN",
            "value": 2.5
        }, {
            "fips_code": 27101,
            "state": "MN",
            "area_name": "Murray County, MN",
            "value": 3.3
        }, {
            "fips_code": 27103,
            "state": "MN",
            "area_name": "Nicollet County, MN",
            "value": 2.0
        }, {
            "fips_code": 27105,
            "state": "MN",
            "area_name": "Nobles County, MN",
            "value": 2.3
        }, {
            "fips_code": 27107,
            "state": "MN",
            "area_name": "Norman County, MN",
            "value": 3.6
        }, {
            "fips_code": 27109,
            "state": "MN",
            "area_name": "Olmsted County, MN",
            "value": 2.2
        }, {
            "fips_code": 27111,
            "state": "MN",
            "area_name": "Otter Tail County, MN",
            "value": 3.0
        }, {
            "fips_code": 27113,
            "state": "MN",
            "area_name": "Pennington County, MN",
            "value": 3.3
        }, {
            "fips_code": 27115,
            "state": "MN",
            "area_name": "Pine County, MN",
            "value": 4.4
        }, {
            "fips_code": 27117,
            "state": "MN",
            "area_name": "Pipestone County, MN",
            "value": 2.5
        }, {
            "fips_code": 27119,
            "state": "MN",
            "area_name": "Polk County, MN",
            "value": 3.0
        }, {
            "fips_code": 27121,
            "state": "MN",
            "area_name": "Pope County, MN",
            "value": 2.4
        }, {
            "fips_code": 27123,
            "state": "MN",
            "area_name": "Ramsey County, MN",
            "value": 2.7
        }, {
            "fips_code": 27125,
            "state": "MN",
            "area_name": "Red Lake County, MN",
            "value": 3.8
        }, {
            "fips_code": 27127,
            "state": "MN",
            "area_name": "Redwood County, MN",
            "value": 2.6
        }, {
            "fips_code": 27129,
            "state": "MN",
            "area_name": "Renville County, MN",
            "value": 3.6
        }, {
            "fips_code": 27131,
            "state": "MN",
            "area_name": "Rice County, MN",
            "value": 2.6
        }, {
            "fips_code": 27133,
            "state": "MN",
            "area_name": "Rock County, MN",
            "value": 1.7
        }, {
            "fips_code": 27135,
            "state": "MN",
            "area_name": "Roseau County, MN",
            "value": 2.6
        }, {
            "fips_code": 27137,
            "state": "MN",
            "area_name": "St. Louis County, MN",
            "value": 3.3
        }, {
            "fips_code": 27139,
            "state": "MN",
            "area_name": "Scott County, MN",
            "value": 2.3
        }, {
            "fips_code": 27141,
            "state": "MN",
            "area_name": "Sherburne County, MN",
            "value": 2.9
        }, {
            "fips_code": 27143,
            "state": "MN",
            "area_name": "Sibley County, MN",
            "value": 3.2
        }, {
            "fips_code": 27145,
            "state": "MN",
            "area_name": "Stearns County, MN",
            "value": 2.7
        }, {
            "fips_code": 27147,
            "state": "MN",
            "area_name": "Steele County, MN",
            "value": 2.8
        }, {
            "fips_code": 27149,
            "state": "MN",
            "area_name": "Stevens County, MN",
            "value": 2.2
        }, {
            "fips_code": 27151,
            "state": "MN",
            "area_name": "Swift County, MN",
            "value": 3.0
        }, {
            "fips_code": 27153,
            "state": "MN",
            "area_name": "Todd County, MN",
            "value": 3.2
        }, {
            "fips_code": 27155,
            "state": "MN",
            "area_name": "Traverse County, MN",
            "value": 2.5
        }, {
            "fips_code": 27157,
            "state": "MN",
            "area_name": "Wabasha County, MN",
            "value": 2.6
        }, {
            "fips_code": 27159,
            "state": "MN",
            "area_name": "Wadena County, MN",
            "value": 4.1
        }, {
            "fips_code": 27161,
            "state": "MN",
            "area_name": "Waseca County, MN",
            "value": 3.5
        }, {
            "fips_code": 27163,
            "state": "MN",
            "area_name": "Washington County, MN",
            "value": 2.3
        }, {
            "fips_code": 27165,
            "state": "MN",
            "area_name": "Watonwan County, MN",
            "value": 2.5
        }, {
            "fips_code": 27167,
            "state": "MN",
            "area_name": "Wilkin County, MN",
            "value": 2.2
        }, {
            "fips_code": 27169,
            "state": "MN",
            "area_name": "Winona County, MN",
            "value": 2.2
        }, {
            "fips_code": 27171,
            "state": "MN",
            "area_name": "Wright County, MN",
            "value": 2.6
        }, {
            "fips_code": 27173,
            "state": "MN",
            "area_name": "Yellow Medicine County, MN",
            "value": 2.8
        }, {
            "fips_code": 28000,
            "state": "MS",
            "area_name": "Mississippi",
            "value": 3.9
        }, {
            "fips_code": 28001,
            "state": "MS",
            "area_name": "Adams County, MS",
            "value": 5.2
        }, {
            "fips_code": 28003,
            "state": "MS",
            "area_name": "Alcorn County, MS",
            "value": 3.6
        }, {
            "fips_code": 28005,
            "state": "MS",
            "area_name": "Amite County, MS",
            "value": 5.2
        }, {
            "fips_code": 28007,
            "state": "MS",
            "area_name": "Attala County, MS",
            "value": 4.3
        }, {
            "fips_code": 28009,
            "state": "MS",
            "area_name": "Benton County, MS",
            "value": 4.9
        }, {
            "fips_code": 28011,
            "state": "MS",
            "area_name": "Bolivar County, MS",
            "value": 4.8
        }, {
            "fips_code": 28013,
            "state": "MS",
            "area_name": "Calhoun County, MS",
            "value": 4.1
        }, {
            "fips_code": 28015,
            "state": "MS",
            "area_name": "Carroll County, MS",
            "value": 4.5
        }, {
            "fips_code": 28017,
            "state": "MS",
            "area_name": "Chickasaw County, MS",
            "value": 4.5
        }, {
            "fips_code": 28019,
            "state": "MS",
            "area_name": "Choctaw County, MS",
            "value": 3.7
        }, {
            "fips_code": 28021,
            "state": "MS",
            "area_name": "Claiborne County, MS",
            "value": 8.199999999999999
        }, {
            "fips_code": 28023,
            "state": "MS",
            "area_name": "Clarke County, MS",
            "value": 4.7
        }, {
            "fips_code": 28025,
            "state": "MS",
            "area_name": "Clay County, MS",
            "value": 4.1
        }, {
            "fips_code": 28027,
            "state": "MS",
            "area_name": "Coahoma County, MS",
            "value": 5.6
        }, {
            "fips_code": 28029,
            "state": "MS",
            "area_name": "Copiah County, MS",
            "value": 4.4
        }, {
            "fips_code": 28031,
            "state": "MS",
            "area_name": "Covington County, MS",
            "value": 3.5
        }, {
            "fips_code": 28033,
            "state": "MS",
            "area_name": "DeSoto County, MS",
            "value": 3.2
        }, {
            "fips_code": 28035,
            "state": "MS",
            "area_name": "Forrest County, MS",
            "value": 3.8
        }, {
            "fips_code": 28037,
            "state": "MS",
            "area_name": "Franklin County, MS",
            "value": 5.4
        }, {
            "fips_code": 28039,
            "state": "MS",
            "area_name": "George County, MS",
            "value": 5.0
        }, {
            "fips_code": 28041,
            "state": "MS",
            "area_name": "Greene County, MS",
            "value": 5.8
        }, {
            "fips_code": 28043,
            "state": "MS",
            "area_name": "Grenada County, MS",
            "value": 3.7
        }, {
            "fips_code": 28045,
            "state": "MS",
            "area_name": "Hancock County, MS",
            "value": 4.1
        }, {
            "fips_code": 28047,
            "state": "MS",
            "area_name": "Harrison County, MS",
            "value": 3.8
        }, {
            "fips_code": 28049,
            "state": "MS",
            "area_name": "Hinds County, MS",
            "value": 3.9
        }, {
            "fips_code": 28051,
            "state": "MS",
            "area_name": "Holmes County, MS",
            "value": 6.6
        }, {
            "fips_code": 28053,
            "state": "MS",
            "area_name": "Humphreys County, MS",
            "value": 7.6
        }, {
            "fips_code": 28055,
            "state": "MS",
            "area_name": "Issaquena County, MS",
            "value": 7.3
        }, {
            "fips_code": 28057,
            "state": "MS",
            "area_name": "Itawamba County, MS",
            "value": 3.4
        }, {
            "fips_code": 28059,
            "state": "MS",
            "area_name": "Jackson County, MS",
            "value": 4.3
        }, {
            "fips_code": 28061,
            "state": "MS",
            "area_name": "Jasper County, MS",
            "value": 5.0
        }, {
            "fips_code": 28063,
            "state": "MS",
            "area_name": "Jefferson County, MS",
            "value": 13.0
        }, {
            "fips_code": 28065,
            "state": "MS",
            "area_name": "Jefferson Davis County, MS",
            "value": 5.0
        }, {
            "fips_code": 28067,
            "state": "MS",
            "area_name": "Jones County, MS",
            "value": 4.1
        }, {
            "fips_code": 28069,
            "state": "MS",
            "area_name": "Kemper County, MS",
            "value": 5.9
        }, {
            "fips_code": 28071,
            "state": "MS",
            "area_name": "Lafayette County, MS",
            "value": 3.2
        }, {
            "fips_code": 28073,
            "state": "MS",
            "area_name": "Lamar County, MS",
            "value": 3.1
        }, {
            "fips_code": 28075,
            "state": "MS",
            "area_name": "Lauderdale County, MS",
            "value": 4.1
        }, {
            "fips_code": 28077,
            "state": "MS",
            "area_name": "Lawrence County, MS",
            "value": 4.7
        }, {
            "fips_code": 28079,
            "state": "MS",
            "area_name": "Leake County, MS",
            "value": 4.1
        }, {
            "fips_code": 28081,
            "state": "MS",
            "area_name": "Lee County, MS",
            "value": 3.3
        }, {
            "fips_code": 28083,
            "state": "MS",
            "area_name": "Leflore County, MS",
            "value": 5.4
        }, {
            "fips_code": 28085,
            "state": "MS",
            "area_name": "Lincoln County, MS",
            "value": 3.7
        }, {
            "fips_code": 28087,
            "state": "MS",
            "area_name": "Lowndes County, MS",
            "value": 4.1
        }, {
            "fips_code": 28089,
            "state": "MS",
            "area_name": "Madison County, MS",
            "value": 3.1
        }, {
            "fips_code": 28091,
            "state": "MS",
            "area_name": "Marion County, MS",
            "value": 3.8
        }, {
            "fips_code": 28093,
            "state": "MS",
            "area_name": "Marshall County, MS",
            "value": 4.1
        }, {
            "fips_code": 28095,
            "state": "MS",
            "area_name": "Monroe County, MS",
            "value": 4.0
        }, {
            "fips_code": 28097,
            "state": "MS",
            "area_name": "Montgomery County, MS",
            "value": 4.3
        }, {
            "fips_code": 28099,
            "state": "MS",
            "area_name": "Neshoba County, MS",
            "value": 4.4
        }, {
            "fips_code": 28101,
            "state": "MS",
            "area_name": "Newton County, MS",
            "value": 4.3
        }, {
            "fips_code": 28103,
            "state": "MS",
            "area_name": "Noxubee County, MS",
            "value": 6.0
        }, {
            "fips_code": 28105,
            "state": "MS",
            "area_name": "Oktibbeha County, MS",
            "value": 4.1
        }, {
            "fips_code": 28107,
            "state": "MS",
            "area_name": "Panola County, MS",
            "value": 4.7
        }, {
            "fips_code": 28109,
            "state": "MS",
            "area_name": "Pearl River County, MS",
            "value": 3.9
        }, {
            "fips_code": 28111,
            "state": "MS",
            "area_name": "Perry County, MS",
            "value": 4.8
        }, {
            "fips_code": 28113,
            "state": "MS",
            "area_name": "Pike County, MS",
            "value": 4.8
        }, {
            "fips_code": 28115,
            "state": "MS",
            "area_name": "Pontotoc County, MS",
            "value": 3.5
        }, {
            "fips_code": 28117,
            "state": "MS",
            "area_name": "Prentiss County, MS",
            "value": 3.3
        }, {
            "fips_code": 28119,
            "state": "MS",
            "area_name": "Quitman County, MS",
            "value": 5.6
        }, {
            "fips_code": 28121,
            "state": "MS",
            "area_name": "Rankin County, MS",
            "value": 2.9
        }, {
            "fips_code": 28123,
            "state": "MS",
            "area_name": "Scott County, MS",
            "value": 3.5
        }, {
            "fips_code": 28125,
            "state": "MS",
            "area_name": "Sharkey County, MS",
            "value": 5.9
        }, {
            "fips_code": 28127,
            "state": "MS",
            "area_name": "Simpson County, MS",
            "value": 3.8
        }, {
            "fips_code": 28129,
            "state": "MS",
            "area_name": "Smith County, MS",
            "value": 3.7
        }, {
            "fips_code": 28131,
            "state": "MS",
            "area_name": "Stone County, MS",
            "value": 4.2
        }, {
            "fips_code": 28133,
            "state": "MS",
            "area_name": "Sunflower County, MS",
            "value": 5.8
        }, {
            "fips_code": 28135,
            "state": "MS",
            "area_name": "Tallahatchie County, MS",
            "value": 4.2
        }, {
            "fips_code": 28137,
            "state": "MS",
            "area_name": "Tate County, MS",
            "value": 3.9
        }, {
            "fips_code": 28139,
            "state": "MS",
            "area_name": "Tippah County, MS",
            "value": 3.4
        }, {
            "fips_code": 28141,
            "state": "MS",
            "area_name": "Tishomingo County, MS",
            "value": 3.7
        }, {
            "fips_code": 28143,
            "state": "MS",
            "area_name": "Tunica County, MS",
            "value": 4.5
        }, {
            "fips_code": 28145,
            "state": "MS",
            "area_name": "Union County, MS",
            "value": 2.9
        }, {
            "fips_code": 28147,
            "state": "MS",
            "area_name": "Walthall County, MS",
            "value": 4.9
        }, {
            "fips_code": 28149,
            "state": "MS",
            "area_name": "Warren County, MS",
            "value": 4.2
        }, {
            "fips_code": 28151,
            "state": "MS",
            "area_name": "Washington County, MS",
            "value": 5.8
        }, {
            "fips_code": 28153,
            "state": "MS",
            "area_name": "Wayne County, MS",
            "value": 4.9
        }, {
            "fips_code": 28155,
            "state": "MS",
            "area_name": "Webster County, MS",
            "value": 3.9
        }, {
            "fips_code": 28157,
            "state": "MS",
            "area_name": "Wilkinson County, MS",
            "value": 6.4
        }, {
            "fips_code": 28159,
            "state": "MS",
            "area_name": "Winston County, MS",
            "value": 4.4
        }, {
            "fips_code": 28161,
            "state": "MS",
            "area_name": "Yalobusha County, MS",
            "value": 4.1
        }, {
            "fips_code": 28163,
            "state": "MS",
            "area_name": "Yazoo County, MS",
            "value": 4.5
        }, {
            "fips_code": 29000,
            "state": "MO",
            "area_name": "Missouri",
            "value": 2.5
        }, {
            "fips_code": 29001,
            "state": "MO",
            "area_name": "Adair County, MO",
            "value": 3.0
        }, {
            "fips_code": 29003,
            "state": "MO",
            "area_name": "Andrew County, MO",
            "value": 2.1
        }, {
            "fips_code": 29005,
            "state": "MO",
            "area_name": "Atchison County, MO",
            "value": 2.4
        }, {
            "fips_code": 29007,
            "state": "MO",
            "area_name": "Audrain County, MO",
            "value": 3.0
        }, {
            "fips_code": 29009,
            "state": "MO",
            "area_name": "Barry County, MO",
            "value": 2.7
        }, {
            "fips_code": 29011,
            "state": "MO",
            "area_name": "Barton County, MO",
            "value": 2.3
        }, {
            "fips_code": 29013,
            "state": "MO",
            "area_name": "Bates County, MO",
            "value": 2.7
        }, {
            "fips_code": 29015,
            "state": "MO",
            "area_name": "Benton County, MO",
            "value": 3.6
        }, {
            "fips_code": 29017,
            "state": "MO",
            "area_name": "Bollinger County, MO",
            "value": 2.6
        }, {
            "fips_code": 29019,
            "state": "MO",
            "area_name": "Boone County, MO",
            "value": 2.0
        }, {
            "fips_code": 29021,
            "state": "MO",
            "area_name": "Buchanan County, MO",
            "value": 2.4
        }, {
            "fips_code": 29023,
            "state": "MO",
            "area_name": "Butler County, MO",
            "value": 2.9
        }, {
            "fips_code": 29025,
            "state": "MO",
            "area_name": "Caldwell County, MO",
            "value": 2.8
        }, {
            "fips_code": 29027,
            "state": "MO",
            "area_name": "Callaway County, MO",
            "value": 2.3
        }, {
            "fips_code": 29029,
            "state": "MO",
            "area_name": "Camden County, MO",
            "value": 3.1
        }, {
            "fips_code": 29031,
            "state": "MO",
            "area_name": "Cape Girardeau County, MO",
            "value": 2.2
        }, {
            "fips_code": 29033,
            "state": "MO",
            "area_name": "Carroll County, MO",
            "value": 2.6
        }, {
            "fips_code": 29035,
            "state": "MO",
            "area_name": "Carter County, MO",
            "value": 3.6
        }, {
            "fips_code": 29037,
            "state": "MO",
            "area_name": "Cass County, MO",
            "value": 2.4
        }, {
            "fips_code": 29039,
            "state": "MO",
            "area_name": "Cedar County, MO",
            "value": 2.7
        }, {
            "fips_code": 29041,
            "state": "MO",
            "area_name": "Chariton County, MO",
            "value": 2.1
        }, {
            "fips_code": 29043,
            "state": "MO",
            "area_name": "Christian County, MO",
            "value": 2.0
        }, {
            "fips_code": 29045,
            "state": "MO",
            "area_name": "Clark County, MO",
            "value": 3.2
        }, {
            "fips_code": 29047,
            "state": "MO",
            "area_name": "Clay County, MO",
            "value": 2.5
        }, {
            "fips_code": 29049,
            "state": "MO",
            "area_name": "Clinton County, MO",
            "value": 2.8
        }, {
            "fips_code": 29051,
            "state": "MO",
            "area_name": "Cole County, MO",
            "value": 2.0
        }, {
            "fips_code": 29053,
            "state": "MO",
            "area_name": "Cooper County, MO",
            "value": 2.4
        }, {
            "fips_code": 29055,
            "state": "MO",
            "area_name": "Crawford County, MO",
            "value": 2.8
        }, {
            "fips_code": 29057,
            "state": "MO",
            "area_name": "Dade County, MO",
            "value": 2.2
        }, {
            "fips_code": 29059,
            "state": "MO",
            "area_name": "Dallas County, MO",
            "value": 2.7
        }, {
            "fips_code": 29061,
            "state": "MO",
            "area_name": "Daviess County, MO",
            "value": 2.4
        }, {
            "fips_code": 29063,
            "state": "MO",
            "area_name": "DeKalb County, MO",
            "value": 2.6
        }, {
            "fips_code": 29065,
            "state": "MO",
            "area_name": "Dent County, MO",
            "value": 3.1
        }, {
            "fips_code": 29067,
            "state": "MO",
            "area_name": "Douglas County, MO",
            "value": 2.7
        }, {
            "fips_code": 29069,
            "state": "MO",
            "area_name": "Dunklin County, MO",
            "value": 4.0
        }, {
            "fips_code": 29071,
            "state": "MO",
            "area_name": "Franklin County, MO",
            "value": 2.3
        }, {
            "fips_code": 29073,
            "state": "MO",
            "area_name": "Gasconade County, MO",
            "value": 2.3
        }, {
            "fips_code": 29075,
            "state": "MO",
            "area_name": "Gentry County, MO",
            "value": 2.1
        }, {
            "fips_code": 29077,
            "state": "MO",
            "area_name": "Greene County, MO",
            "value": 2.0
        }, {
            "fips_code": 29079,
            "state": "MO",
            "area_name": "Grundy County, MO",
            "value": 2.6
        }, {
            "fips_code": 29081,
            "state": "MO",
            "area_name": "Harrison County, MO",
            "value": 2.4
        }, {
            "fips_code": 29083,
            "state": "MO",
            "area_name": "Henry County, MO",
            "value": 2.6
        }, {
            "fips_code": 29085,
            "state": "MO",
            "area_name": "Hickory County, MO",
            "value": 2.7
        }, {
            "fips_code": 29087,
            "state": "MO",
            "area_name": "Holt County, MO",
            "value": 1.9
        }, {
            "fips_code": 29089,
            "state": "MO",
            "area_name": "Howard County, MO",
            "value": 2.4
        }, {
            "fips_code": 29091,
            "state": "MO",
            "area_name": "Howell County, MO",
            "value": 2.9
        }, {
            "fips_code": 29093,
            "state": "MO",
            "area_name": "Iron County, MO",
            "value": 4.0
        }, {
            "fips_code": 29095,
            "state": "MO",
            "area_name": "Jackson County, MO",
            "value": 2.9
        }, {
            "fips_code": 29097,
            "state": "MO",
            "area_name": "Jasper County, MO",
            "value": 2.3
        }, {
            "fips_code": 29099,
            "state": "MO",
            "area_name": "Jefferson County, MO",
            "value": 2.4
        }, {
            "fips_code": 29101,
            "state": "MO",
            "area_name": "Johnson County, MO",
            "value": 2.6
        }, {
            "fips_code": 29103,
            "state": "MO",
            "area_name": "Knox County, MO",
            "value": 2.6
        }, {
            "fips_code": 29105,
            "state": "MO",
            "area_name": "Laclede County, MO",
            "value": 2.5
        }, {
            "fips_code": 29107,
            "state": "MO",
            "area_name": "Lafayette County, MO",
            "value": 2.6
        }, {
            "fips_code": 29109,
            "state": "MO",
            "area_name": "Lawrence County, MO",
            "value": 2.4
        }, {
            "fips_code": 29111,
            "state": "MO",
            "area_name": "Lewis County, MO",
            "value": 2.3
        }, {
            "fips_code": 29113,
            "state": "MO",
            "area_name": "Lincoln County, MO",
            "value": 2.6
        }, {
            "fips_code": 29115,
            "state": "MO",
            "area_name": "Linn County, MO",
            "value": 2.9
        }, {
            "fips_code": 29117,
            "state": "MO",
            "area_name": "Livingston County, MO",
            "value": 2.0
        }, {
            "fips_code": 29119,
            "state": "MO",
            "area_name": "McDonald County, MO",
            "value": 2.4
        }, {
            "fips_code": 29121,
            "state": "MO",
            "area_name": "Macon County, MO",
            "value": 2.5
        }, {
            "fips_code": 29123,
            "state": "MO",
            "area_name": "Madison County, MO",
            "value": 2.9
        }, {
            "fips_code": 29125,
            "state": "MO",
            "area_name": "Maries County, MO",
            "value": 2.5
        }, {
            "fips_code": 29127,
            "state": "MO",
            "area_name": "Marion County, MO",
            "value": 2.4
        }, {
            "fips_code": 29129,
            "state": "MO",
            "area_name": "Mercer County, MO",
            "value": 2.4
        }, {
            "fips_code": 29131,
            "state": "MO",
            "area_name": "Miller County, MO",
            "value": 2.5
        }, {
            "fips_code": 29133,
            "state": "MO",
            "area_name": "Mississippi County, MO",
            "value": 3.2
        }, {
            "fips_code": 29135,
            "state": "MO",
            "area_name": "Moniteau County, MO",
            "value": 2.3
        }, {
            "fips_code": 29137,
            "state": "MO",
            "area_name": "Monroe County, MO",
            "value": 2.7
        }, {
            "fips_code": 29139,
            "state": "MO",
            "area_name": "Montgomery County, MO",
            "value": 2.4
        }, {
            "fips_code": 29141,
            "state": "MO",
            "area_name": "Morgan County, MO",
            "value": 3.0
        }, {
            "fips_code": 29143,
            "state": "MO",
            "area_name": "New Madrid County, MO",
            "value": 3.0
        }, {
            "fips_code": 29145,
            "state": "MO",
            "area_name": "Newton County, MO",
            "value": 2.4
        }, {
            "fips_code": 29147,
            "state": "MO",
            "area_name": "Nodaway County, MO",
            "value": 2.2
        }, {
            "fips_code": 29149,
            "state": "MO",
            "area_name": "Oregon County, MO",
            "value": 3.1
        }, {
            "fips_code": 29151,
            "state": "MO",
            "area_name": "Osage County, MO",
            "value": 1.9
        }, {
            "fips_code": 29153,
            "state": "MO",
            "area_name": "Ozark County, MO",
            "value": 3.7
        }, {
            "fips_code": 29155,
            "state": "MO",
            "area_name": "Pemiscot County, MO",
            "value": 3.8
        }, {
            "fips_code": 29157,
            "state": "MO",
            "area_name": "Perry County, MO",
            "value": 2.1
        }, {
            "fips_code": 29159,
            "state": "MO",
            "area_name": "Pettis County, MO",
            "value": 2.6
        }, {
            "fips_code": 29161,
            "state": "MO",
            "area_name": "Phelps County, MO",
            "value": 2.5
        }, {
            "fips_code": 29163,
            "state": "MO",
            "area_name": "Pike County, MO",
            "value": 2.5
        }, {
            "fips_code": 29165,
            "state": "MO",
            "area_name": "Platte County, MO",
            "value": 2.2
        }, {
            "fips_code": 29167,
            "state": "MO",
            "area_name": "Polk County, MO",
            "value": 2.4
        }, {
            "fips_code": 29169,
            "state": "MO",
            "area_name": "Pulaski County, MO",
            "value": 2.9
        }, {
            "fips_code": 29171,
            "state": "MO",
            "area_name": "Putnam County, MO",
            "value": 2.3
        }, {
            "fips_code": 29173,
            "state": "MO",
            "area_name": "Ralls County, MO",
            "value": 2.3
        }, {
            "fips_code": 29175,
            "state": "MO",
            "area_name": "Randolph County, MO",
            "value": 2.6
        }, {
            "fips_code": 29177,
            "state": "MO",
            "area_name": "Ray County, MO",
            "value": 3.3
        }, {
            "fips_code": 29179,
            "state": "MO",
            "area_name": "Reynolds County, MO",
            "value": 2.9
        }, {
            "fips_code": 29181,
            "state": "MO",
            "area_name": "Ripley County, MO",
            "value": 3.2
        }, {
            "fips_code": 29183,
            "state": "MO",
            "area_name": "St. Charles County, MO",
            "value": 2.1
        }, {
            "fips_code": 29185,
            "state": "MO",
            "area_name": "St. Clair County, MO",
            "value": 2.9
        }, {
            "fips_code": 29186,
            "state": "MO",
            "area_name": "Ste. Genevieve County, MO",
            "value": 2.3
        }, {
            "fips_code": 29187,
            "state": "MO",
            "area_name": "St. Francois County, MO",
            "value": 3.3
        }, {
            "fips_code": 29189,
            "state": "MO",
            "area_name": "St. Louis County, MO",
            "value": 2.4
        }, {
            "fips_code": 29195,
            "state": "MO",
            "area_name": "Saline County, MO",
            "value": 2.5
        }, {
            "fips_code": 29197,
            "state": "MO",
            "area_name": "Schuyler County, MO",
            "value": 3.0
        }, {
            "fips_code": 29199,
            "state": "MO",
            "area_name": "Scotland County, MO",
            "value": 2.1
        }, {
            "fips_code": 29201,
            "state": "MO",
            "area_name": "Scott County, MO",
            "value": 2.4
        }, {
            "fips_code": 29203,
            "state": "MO",
            "area_name": "Shannon County, MO",
            "value": 3.6
        }, {
            "fips_code": 29205,
            "state": "MO",
            "area_name": "Shelby County, MO",
            "value": 2.3
        }, {
            "fips_code": 29207,
            "state": "MO",
            "area_name": "Stoddard County, MO",
            "value": 2.9
        }, {
            "fips_code": 29209,
            "state": "MO",
            "area_name": "Stone County, MO",
            "value": 3.8
        }, {
            "fips_code": 29211,
            "state": "MO",
            "area_name": "Sullivan County, MO",
            "value": 2.8
        }, {
            "fips_code": 29213,
            "state": "MO",
            "area_name": "Taney County, MO",
            "value": 4.0
        }, {
            "fips_code": 29215,
            "state": "MO",
            "area_name": "Texas County, MO",
            "value": 3.0
        }, {
            "fips_code": 29217,
            "state": "MO",
            "area_name": "Vernon County, MO",
            "value": 2.5
        }, {
            "fips_code": 29219,
            "state": "MO",
            "area_name": "Warren County, MO",
            "value": 2.5
        }, {
            "fips_code": 29221,
            "state": "MO",
            "area_name": "Washington County, MO",
            "value": 3.2
        }, {
            "fips_code": 29223,
            "state": "MO",
            "area_name": "Wayne County, MO",
            "value": 3.6
        }, {
            "fips_code": 29225,
            "state": "MO",
            "area_name": "Webster County, MO",
            "value": 2.2
        }, {
            "fips_code": 29227,
            "state": "MO",
            "area_name": "Worth County, MO",
            "value": 1.9
        }, {
            "fips_code": 29229,
            "state": "MO",
            "area_name": "Wright County, MO",
            "value": 2.7
        }, {
            "fips_code": 29510,
            "state": "MO",
            "area_name": "St. Louis city, MO",
            "value": 3.1
        }, {
            "fips_code": 30000,
            "state": "MT",
            "area_name": "Montana",
            "value": 2.6
        }, {
            "fips_code": 30001,
            "state": "MT",
            "area_name": "Beaverhead County, MT",
            "value": 2.3
        }, {
            "fips_code": 30003,
            "state": "MT",
            "area_name": "Big Horn County, MT",
            "value": 4.4
        }, {
            "fips_code": 30005,
            "state": "MT",
            "area_name": "Blaine County, MT",
            "value": 3.1
        }, {
            "fips_code": 30007,
            "state": "MT",
            "area_name": "Broadwater County, MT",
            "value": 3.4
        }, {
            "fips_code": 30009,
            "state": "MT",
            "area_name": "Carbon County, MT",
            "value": 2.6
        }, {
            "fips_code": 30011,
            "state": "MT",
            "area_name": "Carter County, MT",
            "value": 2.1
        }, {
            "fips_code": 30013,
            "state": "MT",
            "area_name": "Cascade County, MT",
            "value": 2.6
        }, {
            "fips_code": 30015,
            "state": "MT",
            "area_name": "Chouteau County, MT",
            "value": 2.3
        }, {
            "fips_code": 30017,
            "state": "MT",
            "area_name": "Custer County, MT",
            "value": 2.4
        }, {
            "fips_code": 30019,
            "state": "MT",
            "area_name": "Daniels County, MT",
            "value": 1.9
        }, {
            "fips_code": 30021,
            "state": "MT",
            "area_name": "Dawson County, MT",
            "value": 2.3
        }, {
            "fips_code": 30023,
            "state": "MT",
            "area_name": "Deer Lodge County, MT",
            "value": 2.5
        }, {
            "fips_code": 30025,
            "state": "MT",
            "area_name": "Fallon County, MT",
            "value": 1.6
        }, {
            "fips_code": 30027,
            "state": "MT",
            "area_name": "Fergus County, MT",
            "value": 2.8
        }, {
            "fips_code": 30029,
            "state": "MT",
            "area_name": "Flathead County, MT",
            "value": 3.1
        }, {
            "fips_code": 30031,
            "state": "MT",
            "area_name": "Gallatin County, MT",
            "value": 1.9
        }, {
            "fips_code": 30033,
            "state": "MT",
            "area_name": "Garfield County, MT",
            "value": 2.9
        }, {
            "fips_code": 30035,
            "state": "MT",
            "area_name": "Glacier County, MT",
            "value": 5.0
        }, {
            "fips_code": 30037,
            "state": "MT",
            "area_name": "Golden Valley County, MT",
            "value": 3.2
        }, {
            "fips_code": 30039,
            "state": "MT",
            "area_name": "Granite County, MT",
            "value": 3.8
        }, {
            "fips_code": 30041,
            "state": "MT",
            "area_name": "Hill County, MT",
            "value": 2.5
        }, {
            "fips_code": 30043,
            "state": "MT",
            "area_name": "Jefferson County, MT",
            "value": 2.5
        }, {
            "fips_code": 30045,
            "state": "MT",
            "area_name": "Judith Basin County, MT",
            "value": 2.4
        }, {
            "fips_code": 30047,
            "state": "MT",
            "area_name": "Lake County, MT",
            "value": 3.0
        }, {
            "fips_code": 30049,
            "state": "MT",
            "area_name": "Lewis and Clark County, MT",
            "value": 2.4
        }, {
            "fips_code": 30051,
            "state": "MT",
            "area_name": "Liberty County, MT",
            "value": 2.3
        }, {
            "fips_code": 30053,
            "state": "MT",
            "area_name": "Lincoln County, MT",
            "value": 4.8
        }, {
            "fips_code": 30055,
            "state": "MT",
            "area_name": "McCone County, MT",
            "value": 1.8
        }, {
            "fips_code": 30057,
            "state": "MT",
            "area_name": "Madison County, MT",
            "value": 2.2
        }, {
            "fips_code": 30059,
            "state": "MT",
            "area_name": "Meagher County, MT",
            "value": 2.3
        }, {
            "fips_code": 30061,
            "state": "MT",
            "area_name": "Mineral County, MT",
            "value": 5.1
        }, {
            "fips_code": 30063,
            "state": "MT",
            "area_name": "Missoula County, MT",
            "value": 2.6
        }, {
            "fips_code": 30065,
            "state": "MT",
            "area_name": "Musselshell County, MT",
            "value": 2.9
        }, {
            "fips_code": 30067,
            "state": "MT",
            "area_name": "Park County, MT",
            "value": 2.7
        }, {
            "fips_code": 30069,
            "state": "MT",
            "area_name": "Petroleum County, MT",
            "value": 3.0
        }, {
            "fips_code": 30071,
            "state": "MT",
            "area_name": "Phillips County, MT",
            "value": 3.7
        }, {
            "fips_code": 30073,
            "state": "MT",
            "area_name": "Pondera County, MT",
            "value": 2.6
        }, {
            "fips_code": 30075,
            "state": "MT",
            "area_name": "Powder River County, MT",
            "value": 2.2
        }, {
            "fips_code": 30077,
            "state": "MT",
            "area_name": "Powell County, MT",
            "value": 2.6
        }, {
            "fips_code": 30079,
            "state": "MT",
            "area_name": "Prairie County, MT",
            "value": 3.0
        }, {
            "fips_code": 30081,
            "state": "MT",
            "area_name": "Ravalli County, MT",
            "value": 2.8
        }, {
            "fips_code": 30083,
            "state": "MT",
            "area_name": "Richland County, MT",
            "value": 2.6
        }, {
            "fips_code": 30085,
            "state": "MT",
            "area_name": "Roosevelt County, MT",
            "value": 3.5
        }, {
            "fips_code": 30087,
            "state": "MT",
            "area_name": "Rosebud County, MT",
            "value": 3.4
        }, {
            "fips_code": 30089,
            "state": "MT",
            "area_name": "Sanders County, MT",
            "value": 4.3
        }, {
            "fips_code": 30091,
            "state": "MT",
            "area_name": "Sheridan County, MT",
            "value": 1.9
        }, {
            "fips_code": 30093,
            "state": "MT",
            "area_name": "Silver Bow County, MT",
            "value": 2.9
        }, {
            "fips_code": 30095,
            "state": "MT",
            "area_name": "Stillwater County, MT",
            "value": 2.2
        }, {
            "fips_code": 30097,
            "state": "MT",
            "area_name": "Sweet Grass County, MT",
            "value": 2.0
        }, {
            "fips_code": 30099,
            "state": "MT",
            "area_name": "Teton County, MT",
            "value": 2.7
        }, {
            "fips_code": 30101,
            "state": "MT",
            "area_name": "Toole County, MT",
            "value": 2.0
        }, {
            "fips_code": 30103,
            "state": "MT",
            "area_name": "Treasure County, MT",
            "value": 2.0
        }, {
            "fips_code": 30105,
            "state": "MT",
            "area_name": "Valley County, MT",
            "value": 2.5
        }, {
            "fips_code": 30107,
            "state": "MT",
            "area_name": "Wheatland County, MT",
            "value": 3.7
        }, {
            "fips_code": 30109,
            "state": "MT",
            "area_name": "Wibaux County, MT",
            "value": 2.4
        }, {
            "fips_code": 30111,
            "state": "MT",
            "area_name": "Yellowstone County, MT",
            "value": 2.4
        }, {
            "fips_code": 31000,
            "state": "NE",
            "area_name": "Nebraska",
            "value": 2.3
        }, {
            "fips_code": 31001,
            "state": "NE",
            "area_name": "Adams County, NE",
            "value": 2.2
        }, {
            "fips_code": 31003,
            "state": "NE",
            "area_name": "Antelope County, NE",
            "value": 1.9
        }, {
            "fips_code": 31005,
            "state": "NE",
            "area_name": "Arthur County, NE",
            "value": 2.1
        }, {
            "fips_code": 31007,
            "state": "NE",
            "area_name": "Banner County, NE",
            "value": 3.1
        }, {
            "fips_code": 31009,
            "state": "NE",
            "area_name": "Blaine County, NE",
            "value": 4.0
        }, {
            "fips_code": 31011,
            "state": "NE",
            "area_name": "Boone County, NE",
            "value": 1.8
        }, {
            "fips_code": 31013,
            "state": "NE",
            "area_name": "Box Butte County, NE",
            "value": 2.4
        }, {
            "fips_code": 31015,
            "state": "NE",
            "area_name": "Boyd County, NE",
            "value": 2.3
        }, {
            "fips_code": 31017,
            "state": "NE",
            "area_name": "Brown County, NE",
            "value": 2.6
        }, {
            "fips_code": 31019,
            "state": "NE",
            "area_name": "Buffalo County, NE",
            "value": 2.0
        }, {
            "fips_code": 31021,
            "state": "NE",
            "area_name": "Burt County, NE",
            "value": 2.4
        }, {
            "fips_code": 31023,
            "state": "NE",
            "area_name": "Butler County, NE",
            "value": 1.8
        }, {
            "fips_code": 31025,
            "state": "NE",
            "area_name": "Cass County, NE",
            "value": 2.5
        }, {
            "fips_code": 31027,
            "state": "NE",
            "area_name": "Cedar County, NE",
            "value": 1.9
        }, {
            "fips_code": 31029,
            "state": "NE",
            "area_name": "Chase County, NE",
            "value": 1.8
        }, {
            "fips_code": 31031,
            "state": "NE",
            "area_name": "Cherry County, NE",
            "value": 1.8
        }, {
            "fips_code": 31033,
            "state": "NE",
            "area_name": "Cheyenne County, NE",
            "value": 2.5
        }, {
            "fips_code": 31035,
            "state": "NE",
            "area_name": "Clay County, NE",
            "value": 2.4
        }, {
            "fips_code": 31037,
            "state": "NE",
            "area_name": "Colfax County, NE",
            "value": 2.0
        }, {
            "fips_code": 31039,
            "state": "NE",
            "area_name": "Cuming County, NE",
            "value": 1.9
        }, {
            "fips_code": 31041,
            "state": "NE",
            "area_name": "Custer County, NE",
            "value": 1.7
        }, {
            "fips_code": 31043,
            "state": "NE",
            "area_name": "Dakota County, NE",
            "value": 2.8
        }, {
            "fips_code": 31045,
            "state": "NE",
            "area_name": "Dawes County, NE",
            "value": 2.1
        }, {
            "fips_code": 31047,
            "state": "NE",
            "area_name": "Dawson County, NE",
            "value": 2.5
        }, {
            "fips_code": 31049,
            "state": "NE",
            "area_name": "Deuel County, NE",
            "value": 2.4
        }, {
            "fips_code": 31051,
            "state": "NE",
            "area_name": "Dixon County, NE",
            "value": 2.2
        }, {
            "fips_code": 31053,
            "state": "NE",
            "area_name": "Dodge County, NE",
            "value": 2.2
        }, {
            "fips_code": 31055,
            "state": "NE",
            "area_name": "Douglas County, NE",
            "value": 2.7
        }, {
            "fips_code": 31057,
            "state": "NE",
            "area_name": "Dundy County, NE",
            "value": 1.6
        }, {
            "fips_code": 31059,
            "state": "NE",
            "area_name": "Fillmore County, NE",
            "value": 1.9
        }, {
            "fips_code": 31061,
            "state": "NE",
            "area_name": "Franklin County, NE",
            "value": 2.3
        }, {
            "fips_code": 31063,
            "state": "NE",
            "area_name": "Frontier County, NE",
            "value": 2.2
        }, {
            "fips_code": 31065,
            "state": "NE",
            "area_name": "Furnas County, NE",
            "value": 2.0
        }, {
            "fips_code": 31067,
            "state": "NE",
            "area_name": "Gage County, NE",
            "value": 2.6
        }, {
            "fips_code": 31069,
            "state": "NE",
            "area_name": "Garden County, NE",
            "value": 2.0
        }, {
            "fips_code": 31071,
            "state": "NE",
            "area_name": "Garfield County, NE",
            "value": 2.1
        }, {
            "fips_code": 31073,
            "state": "NE",
            "area_name": "Gosper County, NE",
            "value": 2.0
        }, {
            "fips_code": 31075,
            "state": "NE",
            "area_name": "Grant County, NE",
            "value": 1.7
        }, {
            "fips_code": 31077,
            "state": "NE",
            "area_name": "Greeley County, NE",
            "value": 2.1
        }, {
            "fips_code": 31079,
            "state": "NE",
            "area_name": "Hall County, NE",
            "value": 2.4
        }, {
            "fips_code": 31081,
            "state": "NE",
            "area_name": "Hamilton County, NE",
            "value": 2.1
        }, {
            "fips_code": 31083,
            "state": "NE",
            "area_name": "Harlan County, NE",
            "value": 1.9
        }, {
            "fips_code": 31085,
            "state": "NE",
            "area_name": "Hayes County, NE",
            "value": 1.7
        }, {
            "fips_code": 31087,
            "state": "NE",
            "area_name": "Hitchcock County, NE",
            "value": 2.4
        }, {
            "fips_code": 31089,
            "state": "NE",
            "area_name": "Holt County, NE",
            "value": 1.9
        }, {
            "fips_code": 31091,
            "state": "NE",
            "area_name": "Hooker County, NE",
            "value": 2.7
        }, {
            "fips_code": 31093,
            "state": "NE",
            "area_name": "Howard County, NE",
            "value": 2.1
        }, {
            "fips_code": 31095,
            "state": "NE",
            "area_name": "Jefferson County, NE",
            "value": 1.9
        }, {
            "fips_code": 31097,
            "state": "NE",
            "area_name": "Johnson County, NE",
            "value": 2.9
        }, {
            "fips_code": 31099,
            "state": "NE",
            "area_name": "Kearney County, NE",
            "value": 1.9
        }, {
            "fips_code": 31101,
            "state": "NE",
            "area_name": "Keith County, NE",
            "value": 1.9
        }, {
            "fips_code": 31103,
            "state": "NE",
            "area_name": "Keya Paha County, NE",
            "value": 2.2
        }, {
            "fips_code": 31105,
            "state": "NE",
            "area_name": "Kimball County, NE",
            "value": 1.9
        }, {
            "fips_code": 31107,
            "state": "NE",
            "area_name": "Knox County, NE",
            "value": 2.3
        }, {
            "fips_code": 31109,
            "state": "NE",
            "area_name": "Lancaster County, NE",
            "value": 2.2
        }, {
            "fips_code": 31111,
            "state": "NE",
            "area_name": "Lincoln County, NE",
            "value": 2.2
        }, {
            "fips_code": 31113,
            "state": "NE",
            "area_name": "Logan County, NE",
            "value": 2.2
        }, {
            "fips_code": 31115,
            "state": "NE",
            "area_name": "Loup County, NE",
            "value": 2.7
        }, {
            "fips_code": 31117,
            "state": "NE",
            "area_name": "McPherson County, NE",
            "value": 1.8
        }, {
            "fips_code": 31119,
            "state": "NE",
            "area_name": "Madison County, NE",
            "value": 2.1
        }, {
            "fips_code": 31121,
            "state": "NE",
            "area_name": "Merrick County, NE",
            "value": 2.0
        }, {
            "fips_code": 31123,
            "state": "NE",
            "area_name": "Morrill County, NE",
            "value": 2.1
        }, {
            "fips_code": 31125,
            "state": "NE",
            "area_name": "Nance County, NE",
            "value": 2.1
        }, {
            "fips_code": 31127,
            "state": "NE",
            "area_name": "Nemaha County, NE",
            "value": 2.4
        }, {
            "fips_code": 31129,
            "state": "NE",
            "area_name": "Nuckolls County, NE",
            "value": 2.2
        }, {
            "fips_code": 31131,
            "state": "NE",
            "area_name": "Otoe County, NE",
            "value": 2.3
        }, {
            "fips_code": 31133,
            "state": "NE",
            "area_name": "Pawnee County, NE",
            "value": 2.2
        }, {
            "fips_code": 31135,
            "state": "NE",
            "area_name": "Perkins County, NE",
            "value": 1.7
        }, {
            "fips_code": 31137,
            "state": "NE",
            "area_name": "Phelps County, NE",
            "value": 2.0
        }, {
            "fips_code": 31139,
            "state": "NE",
            "area_name": "Pierce County, NE",
            "value": 2.0
        }, {
            "fips_code": 31141,
            "state": "NE",
            "area_name": "Platte County, NE",
            "value": 2.1
        }, {
            "fips_code": 31143,
            "state": "NE",
            "area_name": "Polk County, NE",
            "value": 2.0
        }, {
            "fips_code": 31145,
            "state": "NE",
            "area_name": "Red Willow County, NE",
            "value": 2.0
        }, {
            "fips_code": 31147,
            "state": "NE",
            "area_name": "Richardson County, NE",
            "value": 2.1
        }, {
            "fips_code": 31149,
            "state": "NE",
            "area_name": "Rock County, NE",
            "value": 1.7
        }, {
            "fips_code": 31151,
            "state": "NE",
            "area_name": "Saline County, NE",
            "value": 2.6
        }, {
            "fips_code": 31153,
            "state": "NE",
            "area_name": "Sarpy County, NE",
            "value": 2.3
        }, {
            "fips_code": 31155,
            "state": "NE",
            "area_name": "Saunders County, NE",
            "value": 2.1
        }, {
            "fips_code": 31157,
            "state": "NE",
            "area_name": "Scotts Bluff County, NE",
            "value": 2.6
        }, {
            "fips_code": 31159,
            "state": "NE",
            "area_name": "Seward County, NE",
            "value": 2.2
        }, {
            "fips_code": 31161,
            "state": "NE",
            "area_name": "Sheridan County, NE",
            "value": 2.0
        }, {
            "fips_code": 31163,
            "state": "NE",
            "area_name": "Sherman County, NE",
            "value": 2.3
        }, {
            "fips_code": 31165,
            "state": "NE",
            "area_name": "Sioux County, NE",
            "value": 1.9
        }, {
            "fips_code": 31167,
            "state": "NE",
            "area_name": "Stanton County, NE",
            "value": 2.0
        }, {
            "fips_code": 31169,
            "state": "NE",
            "area_name": "Thayer County, NE",
            "value": 1.9
        }, {
            "fips_code": 31171,
            "state": "NE",
            "area_name": "Thomas County, NE",
            "value": 2.6
        }, {
            "fips_code": 31173,
            "state": "NE",
            "area_name": "Thurston County, NE",
            "value": 3.4
        }, {
            "fips_code": 31175,
            "state": "NE",
            "area_name": "Valley County, NE",
            "value": 2.2
        }, {
            "fips_code": 31177,
            "state": "NE",
            "area_name": "Washington County, NE",
            "value": 2.2
        }, {
            "fips_code": 31179,
            "state": "NE",
            "area_name": "Wayne County, NE",
            "value": 2.2
        }, {
            "fips_code": 31181,
            "state": "NE",
            "area_name": "Webster County, NE",
            "value": 2.5
        }, {
            "fips_code": 31183,
            "state": "NE",
            "area_name": "Wheeler County, NE",
            "value": 1.6
        }, {
            "fips_code": 31185,
            "state": "NE",
            "area_name": "York County, NE",
            "value": 2.1
        }, {
            "fips_code": 32000,
            "state": "NV",
            "area_name": "Nevada",
            "value": 5.4
        }, {
            "fips_code": 32001,
            "state": "NV",
            "area_name": "Churchill County, NV",
            "value": 3.6
        }, {
            "fips_code": 32003,
            "state": "NV",
            "area_name": "Clark County, NV",
            "value": 6.0
        }, {
            "fips_code": 32005,
            "state": "NV",
            "area_name": "Douglas County, NV",
            "value": 4.0
        }, {
            "fips_code": 32007,
            "state": "NV",
            "area_name": "Elko County, NV",
            "value": 3.2
        }, {
            "fips_code": 32009,
            "state": "NV",
            "area_name": "Esmeralda County, NV",
            "value": 3.7
        }, {
            "fips_code": 32011,
            "state": "NV",
            "area_name": "Eureka County, NV",
            "value": 2.9
        }, {
            "fips_code": 32013,
            "state": "NV",
            "area_name": "Humboldt County, NV",
            "value": 3.3
        }, {
            "fips_code": 32015,
            "state": "NV",
            "area_name": "Lander County, NV",
            "value": 3.4
        }, {
            "fips_code": 32017,
            "state": "NV",
            "area_name": "Lincoln County, NV",
            "value": 3.9
        }, {
            "fips_code": 32019,
            "state": "NV",
            "area_name": "Lyon County, NV",
            "value": 4.9
        }, {
            "fips_code": 32021,
            "state": "NV",
            "area_name": "Mineral County, NV",
            "value": 4.1
        }, {
            "fips_code": 32023,
            "state": "NV",
            "area_name": "Nye County, NV",
            "value": 5.7
        }, {
            "fips_code": 32027,
            "state": "NV",
            "area_name": "Pershing County, NV",
            "value": 3.6
        }, {
            "fips_code": 32029,
            "state": "NV",
            "area_name": "Storey County, NV",
            "value": 4.0
        }, {
            "fips_code": 32031,
            "state": "NV",
            "area_name": "Washoe County, NV",
            "value": 3.5
        }, {
            "fips_code": 32033,
            "state": "NV",
            "area_name": "White Pine County, NV",
            "value": 3.1
        }, {
            "fips_code": 32510,
            "state": "NV",
            "area_name": "Carson City, NV",
            "value": 4.0
        }, {
            "fips_code": 33000,
            "state": "NH",
            "area_name": "New Hampshire",
            "value": 2.5
        }, {
            "fips_code": 33001,
            "state": "NH",
            "area_name": "Belknap County, NH",
            "value": 2.5
        }, {
            "fips_code": 33003,
            "state": "NH",
            "area_name": "Carroll County, NH",
            "value": 2.6
        }, {
            "fips_code": 33005,
            "state": "NH",
            "area_name": "Cheshire County, NH",
            "value": 2.7
        }, {
            "fips_code": 33007,
            "state": "NH",
            "area_name": "Coos County, NH",
            "value": 3.3
        }, {
            "fips_code": 33009,
            "state": "NH",
            "area_name": "Grafton County, NH",
            "value": 2.3
        }, {
            "fips_code": 33011,
            "state": "NH",
            "area_name": "Hillsborough County, NH",
            "value": 2.6
        }, {
            "fips_code": 33013,
            "state": "NH",
            "area_name": "Merrimack County, NH",
            "value": 2.3
        }, {
            "fips_code": 33015,
            "state": "NH",
            "area_name": "Rockingham County, NH",
            "value": 2.6
        }, {
            "fips_code": 33017,
            "state": "NH",
            "area_name": "Strafford County, NH",
            "value": 2.3
        }, {
            "fips_code": 33019,
            "state": "NH",
            "area_name": "Sullivan County, NH",
            "value": 2.4
        }, {
            "fips_code": 34000,
            "state": "NJ",
            "area_name": "New Jersey",
            "value": 3.7
        }, {
            "fips_code": 34001,
            "state": "NJ",
            "area_name": "Atlantic County, NJ",
            "value": 5.1
        }, {
            "fips_code": 34003,
            "state": "NJ",
            "area_name": "Bergen County, NJ",
            "value": 3.4
        }, {
            "fips_code": 34005,
            "state": "NJ",
            "area_name": "Burlington County, NJ",
            "value": 3.3
        }, {
            "fips_code": 34007,
            "state": "NJ",
            "area_name": "Camden County, NJ",
            "value": 4.0
        }, {
            "fips_code": 34009,
            "state": "NJ",
            "area_name": "Cape May County, NJ",
            "value": 6.5
        }, {
            "fips_code": 34011,
            "state": "NJ",
            "area_name": "Cumberland County, NJ",
            "value": 5.1
        }, {
            "fips_code": 34013,
            "state": "NJ",
            "area_name": "Essex County, NJ",
            "value": 4.5
        }, {
            "fips_code": 34015,
            "state": "NJ",
            "area_name": "Gloucester County, NJ",
            "value": 3.7
        }, {
            "fips_code": 34017,
            "state": "NJ",
            "area_name": "Hudson County, NJ",
            "value": 3.6
        }, {
            "fips_code": 34019,
            "state": "NJ",
            "area_name": "Hunterdon County, NJ",
            "value": 2.9
        }, {
            "fips_code": 34021,
            "state": "NJ",
            "area_name": "Mercer County, NJ",
            "value": 3.2
        }, {
            "fips_code": 34023,
            "state": "NJ",
            "area_name": "Middlesex County, NJ",
            "value": 3.3
        }, {
            "fips_code": 34025,
            "state": "NJ",
            "area_name": "Monmouth County, NJ",
            "value": 3.3
        }, {
            "fips_code": 34027,
            "state": "NJ",
            "area_name": "Morris County, NJ",
            "value": 3.0
        }, {
            "fips_code": 34029,
            "state": "NJ",
            "area_name": "Ocean County, NJ",
            "value": 3.7
        }, {
            "fips_code": 34031,
            "state": "NJ",
            "area_name": "Passaic County, NJ",
            "value": 4.6
        }, {
            "fips_code": 34033,
            "state": "NJ",
            "area_name": "Salem County, NJ",
            "value": 4.6
        }, {
            "fips_code": 34035,
            "state": "NJ",
            "area_name": "Somerset County, NJ",
            "value": 3.1
        }, {
            "fips_code": 34037,
            "state": "NJ",
            "area_name": "Sussex County, NJ",
            "value": 3.7
        }, {
            "fips_code": 34039,
            "state": "NJ",
            "area_name": "Union County, NJ",
            "value": 3.9
        }, {
            "fips_code": 34041,
            "state": "NJ",
            "area_name": "Warren County, NJ",
            "value": 3.5
        }, {
            "fips_code": 35000,
            "state": "NM",
            "area_name": "New Mexico",
            "value": 4.0
        }, {
            "fips_code": 35001,
            "state": "NM",
            "area_name": "Bernalillo County, NM",
            "value": 3.6
        }, {
            "fips_code": 35003,
            "state": "NM",
            "area_name": "Catron County, NM",
            "value": 5.1
        }, {
            "fips_code": 35005,
            "state": "NM",
            "area_name": "Chaves County, NM",
            "value": 4.2
        }, {
            "fips_code": 35006,
            "state": "NM",
            "area_name": "Cibola County, NM",
            "value": 5.5
        }, {
            "fips_code": 35007,
            "state": "NM",
            "area_name": "Colfax County, NM",
            "value": 3.9
        }, {
            "fips_code": 35009,
            "state": "NM",
            "area_name": "Curry County, NM",
            "value": 3.2
        }, {
            "fips_code": 35011,
            "state": "NM",
            "area_name": "De Baca County, NM",
            "value": 3.4
        }, {
            "fips_code": 35013,
            "state": "NM",
            "area_name": "Dona Ana County, NM",
            "value": 4.4
        }, {
            "fips_code": 35015,
            "state": "NM",
            "area_name": "Eddy County, NM",
            "value": 3.3
        }, {
            "fips_code": 35017,
            "state": "NM",
            "area_name": "Grant County, NM",
            "value": 4.1
        }, {
            "fips_code": 35019,
            "state": "NM",
            "area_name": "Guadalupe County, NM",
            "value": 5.6
        }, {
            "fips_code": 35021,
            "state": "NM",
            "area_name": "Harding County, NM",
            "value": 3.5
        }, {
            "fips_code": 35023,
            "state": "NM",
            "area_name": "Hidalgo County, NM",
            "value": 3.4
        }, {
            "fips_code": 35025,
            "state": "NM",
            "area_name": "Lea County, NM",
            "value": 4.4
        }, {
            "fips_code": 35027,
            "state": "NM",
            "area_name": "Lincoln County, NM",
            "value": 4.0
        }, {
            "fips_code": 35028,
            "state": "NM",
            "area_name": "Los Alamos County, NM",
            "value": 2.2
        }, {
            "fips_code": 35029,
            "state": "NM",
            "area_name": "Luna County, NM",
            "value": 9.9
        }, {
            "fips_code": 35031,
            "state": "NM",
            "area_name": "McKinley County, NM",
            "value": 5.7
        }, {
            "fips_code": 35033,
            "state": "NM",
            "area_name": "Mora County, NM",
            "value": 5.5
        }, {
            "fips_code": 35035,
            "state": "NM",
            "area_name": "Otero County, NM",
            "value": 4.1
        }, {
            "fips_code": 35037,
            "state": "NM",
            "area_name": "Quay County, NM",
            "value": 4.3
        }, {
            "fips_code": 35039,
            "state": "NM",
            "area_name": "Rio Arriba County, NM",
            "value": 4.3
        }, {
            "fips_code": 35041,
            "state": "NM",
            "area_name": "Roosevelt County, NM",
            "value": 3.8
        }, {
            "fips_code": 35043,
            "state": "NM",
            "area_name": "Sandoval County, NM",
            "value": 3.8
        }, {
            "fips_code": 35045,
            "state": "NM",
            "area_name": "San Juan County, NM",
            "value": 4.6
        }, {
            "fips_code": 35047,
            "state": "NM",
            "area_name": "San Miguel County, NM",
            "value": 4.9
        }, {
            "fips_code": 35049,
            "state": "NM",
            "area_name": "Santa Fe County, NM",
            "value": 3.6
        }, {
            "fips_code": 35051,
            "state": "NM",
            "area_name": "Sierra County, NM",
            "value": 5.9
        }, {
            "fips_code": 35053,
            "state": "NM",
            "area_name": "Socorro County, NM",
            "value": 4.3
        }, {
            "fips_code": 35055,
            "state": "NM",
            "area_name": "Taos County, NM",
            "value": 4.9
        }, {
            "fips_code": 35057,
            "state": "NM",
            "area_name": "Torrance County, NM",
            "value": 5.4
        }, {
            "fips_code": 35059,
            "state": "NM",
            "area_name": "Union County, NM",
            "value": 2.9
        }, {
            "fips_code": 35061,
            "state": "NM",
            "area_name": "Valencia County, NM",
            "value": 4.3
        }, {
            "fips_code": 36000,
            "state": "NY",
            "area_name": "New York",
            "value": 4.3
        }, {
            "fips_code": 36001,
            "state": "NY",
            "area_name": "Albany County, NY",
            "value": 3.0
        }, {
            "fips_code": 36003,
            "state": "NY",
            "area_name": "Allegany County, NY",
            "value": 4.0
        }, {
            "fips_code": 36005,
            "state": "NY",
            "area_name": "Bronx County, NY",
            "value": 7.8
        }, {
            "fips_code": 36007,
            "state": "NY",
            "area_name": "Broome County, NY",
            "value": 3.8
        }, {
            "fips_code": 36009,
            "state": "NY",
            "area_name": "Cattaraugus County, NY",
            "value": 4.0
        }, {
            "fips_code": 36011,
            "state": "NY",
            "area_name": "Cayuga County, NY",
            "value": 3.4
        }, {
            "fips_code": 36013,
            "state": "NY",
            "area_name": "Chautauqua County, NY",
            "value": 3.9
        }, {
            "fips_code": 36015,
            "state": "NY",
            "area_name": "Chemung County, NY",
            "value": 3.7
        }, {
            "fips_code": 36017,
            "state": "NY",
            "area_name": "Chenango County, NY",
            "value": 3.3
        }, {
            "fips_code": 36019,
            "state": "NY",
            "area_name": "Clinton County, NY",
            "value": 3.3
        }, {
            "fips_code": 36021,
            "state": "NY",
            "area_name": "Columbia County, NY",
            "value": 2.7
        }, {
            "fips_code": 36023,
            "state": "NY",
            "area_name": "Cortland County, NY",
            "value": 3.8
        }, {
            "fips_code": 36025,
            "state": "NY",
            "area_name": "Delaware County, NY",
            "value": 3.7
        }, {
            "fips_code": 36027,
            "state": "NY",
            "area_name": "Dutchess County, NY",
            "value": 3.1
        }, {
            "fips_code": 36029,
            "state": "NY",
            "area_name": "Erie County, NY",
            "value": 3.6
        }, {
            "fips_code": 36031,
            "state": "NY",
            "area_name": "Essex County, NY",
            "value": 3.6
        }, {
            "fips_code": 36033,
            "state": "NY",
            "area_name": "Franklin County, NY",
            "value": 3.6
        }, {
            "fips_code": 36035,
            "state": "NY",
            "area_name": "Fulton County, NY",
            "value": 3.9
        }, {
            "fips_code": 36037,
            "state": "NY",
            "area_name": "Genesee County, NY",
            "value": 3.1
        }, {
            "fips_code": 36039,
            "state": "NY",
            "area_name": "Greene County, NY",
            "value": 3.5
        }, {
            "fips_code": 36041,
            "state": "NY",
            "area_name": "Hamilton County, NY",
            "value": 4.3
        }, {
            "fips_code": 36043,
            "state": "NY",
            "area_name": "Herkimer County, NY",
            "value": 3.9
        }, {
            "fips_code": 36045,
            "state": "NY",
            "area_name": "Jefferson County, NY",
            "value": 4.0
        }, {
            "fips_code": 36047,
            "state": "NY",
            "area_name": "Kings County, NY",
            "value": 5.9
        }, {
            "fips_code": 36049,
            "state": "NY",
            "area_name": "Lewis County, NY",
            "value": 4.0
        }, {
            "fips_code": 36051,
            "state": "NY",
            "area_name": "Livingston County, NY",
            "value": 3.3
        }, {
            "fips_code": 36053,
            "state": "NY",
            "area_name": "Madison County, NY",
            "value": 3.4
        }, {
            "fips_code": 36055,
            "state": "NY",
            "area_name": "Monroe County, NY",
            "value": 3.4
        }, {
            "fips_code": 36057,
            "state": "NY",
            "area_name": "Montgomery County, NY",
            "value": 4.0
        }, {
            "fips_code": 36059,
            "state": "NY",
            "area_name": "Nassau County, NY",
            "value": 2.9
        }, {
            "fips_code": 36061,
            "state": "NY",
            "area_name": "New York County, NY",
            "value": 4.6
        }, {
            "fips_code": 36063,
            "state": "NY",
            "area_name": "Niagara County, NY",
            "value": 3.8
        }, {
            "fips_code": 36065,
            "state": "NY",
            "area_name": "Oneida County, NY",
            "value": 3.5
        }, {
            "fips_code": 36067,
            "state": "NY",
            "area_name": "Onondaga County, NY",
            "value": 3.3
        }, {
            "fips_code": 36069,
            "state": "NY",
            "area_name": "Ontario County, NY",
            "value": 3.1
        }, {
            "fips_code": 36071,
            "state": "NY",
            "area_name": "Orange County, NY",
            "value": 3.2
        }, {
            "fips_code": 36073,
            "state": "NY",
            "area_name": "Orleans County, NY",
            "value": 3.8
        }, {
            "fips_code": 36075,
            "state": "NY",
            "area_name": "Oswego County, NY",
            "value": 4.0
        }, {
            "fips_code": 36077,
            "state": "NY",
            "area_name": "Otsego County, NY",
            "value": 3.4
        }, {
            "fips_code": 36079,
            "state": "NY",
            "area_name": "Putnam County, NY",
            "value": 2.9
        }, {
            "fips_code": 36081,
            "state": "NY",
            "area_name": "Queens County, NY",
            "value": 5.2
        }, {
            "fips_code": 36083,
            "state": "NY",
            "area_name": "Rensselaer County, NY",
            "value": 3.1
        }, {
            "fips_code": 36085,
            "state": "NY",
            "area_name": "Richmond County, NY",
            "value": 5.5
        }, {
            "fips_code": 36087,
            "state": "NY",
            "area_name": "Rockland County, NY",
            "value": 2.8
        }, {
            "fips_code": 36089,
            "state": "NY",
            "area_name": "St. Lawrence County, NY",
            "value": 4.1
        }, {
            "fips_code": 36091,
            "state": "NY",
            "area_name": "Saratoga County, NY",
            "value": 2.7
        }, {
            "fips_code": 36093,
            "state": "NY",
            "area_name": "Schenectady County, NY",
            "value": 3.3
        }, {
            "fips_code": 36095,
            "state": "NY",
            "area_name": "Schoharie County, NY",
            "value": 3.6
        }, {
            "fips_code": 36097,
            "state": "NY",
            "area_name": "Schuyler County, NY",
            "value": 3.7
        }, {
            "fips_code": 36099,
            "state": "NY",
            "area_name": "Seneca County, NY",
            "value": 3.2
        }, {
            "fips_code": 36101,
            "state": "NY",
            "area_name": "Steuben County, NY",
            "value": 3.6
        }, {
            "fips_code": 36103,
            "state": "NY",
            "area_name": "Suffolk County, NY",
            "value": 3.1
        }, {
            "fips_code": 36105,
            "state": "NY",
            "area_name": "Sullivan County, NY",
            "value": 3.3
        }, {
            "fips_code": 36107,
            "state": "NY",
            "area_name": "Tioga County, NY",
            "value": 3.2
        }, {
            "fips_code": 36109,
            "state": "NY",
            "area_name": "Tompkins County, NY",
            "value": 2.8
        }, {
            "fips_code": 36111,
            "state": "NY",
            "area_name": "Ulster County, NY",
            "value": 3.2
        }, {
            "fips_code": 36113,
            "state": "NY",
            "area_name": "Warren County, NY",
            "value": 3.4
        }, {
            "fips_code": 36115,
            "state": "NY",
            "area_name": "Washington County, NY",
            "value": 3.2
        }, {
            "fips_code": 36117,
            "state": "NY",
            "area_name": "Wayne County, NY",
            "value": 3.2
        }, {
            "fips_code": 36119,
            "state": "NY",
            "area_name": "Westchester County, NY",
            "value": 3.1
        }, {
            "fips_code": 36121,
            "state": "NY",
            "area_name": "Wyoming County, NY",
            "value": 3.5
        }, {
            "fips_code": 36123,
            "state": "NY",
            "area_name": "Yates County, NY",
            "value": 2.9
        }, {
            "fips_code": 37000,
            "state": "NC",
            "area_name": "North Carolina",
            "value": 3.7
        }, {
            "fips_code": 37001,
            "state": "NC",
            "area_name": "Alamance County, NC",
            "value": 3.7
        }, {
            "fips_code": 37003,
            "state": "NC",
            "area_name": "Alexander County, NC",
            "value": 3.2
        }, {
            "fips_code": 37005,
            "state": "NC",
            "area_name": "Alleghany County, NC",
            "value": 3.9
        }, {
            "fips_code": 37007,
            "state": "NC",
            "area_name": "Anson County, NC",
            "value": 4.4
        }, {
            "fips_code": 37009,
            "state": "NC",
            "area_name": "Ashe County, NC",
            "value": 3.4
        }, {
            "fips_code": 37011,
            "state": "NC",
            "area_name": "Avery County, NC",
            "value": 3.3
        }, {
            "fips_code": 37013,
            "state": "NC",
            "area_name": "Beaufort County, NC",
            "value": 3.9
        }, {
            "fips_code": 37015,
            "state": "NC",
            "area_name": "Bertie County, NC",
            "value": 4.9
        }, {
            "fips_code": 37017,
            "state": "NC",
            "area_name": "Bladen County, NC",
            "value": 4.3
        }, {
            "fips_code": 37019,
            "state": "NC",
            "area_name": "Brunswick County, NC",
            "value": 4.7
        }, {
            "fips_code": 37021,
            "state": "NC",
            "area_name": "Buncombe County, NC",
            "value": 3.0
        }, {
            "fips_code": 37023,
            "state": "NC",
            "area_name": "Burke County, NC",
            "value": 3.4
        }, {
            "fips_code": 37025,
            "state": "NC",
            "area_name": "Cabarrus County, NC",
            "value": 3.4
        }, {
            "fips_code": 37027,
            "state": "NC",
            "area_name": "Caldwell County, NC",
            "value": 3.6
        }, {
            "fips_code": 37029,
            "state": "NC",
            "area_name": "Camden County, NC",
            "value": 3.8
        }, {
            "fips_code": 37031,
            "state": "NC",
            "area_name": "Carteret County, NC",
            "value": 3.5
        }, {
            "fips_code": 37033,
            "state": "NC",
            "area_name": "Caswell County, NC",
            "value": 4.0
        }, {
            "fips_code": 37035,
            "state": "NC",
            "area_name": "Catawba County, NC",
            "value": 3.4
        }, {
            "fips_code": 37037,
            "state": "NC",
            "area_name": "Chatham County, NC",
            "value": 3.1
        }, {
            "fips_code": 37039,
            "state": "NC",
            "area_name": "Cherokee County, NC",
            "value": 4.0
        }, {
            "fips_code": 37041,
            "state": "NC",
            "area_name": "Chowan County, NC",
            "value": 4.0
        }, {
            "fips_code": 37043,
            "state": "NC",
            "area_name": "Clay County, NC",
            "value": 4.0
        }, {
            "fips_code": 37045,
            "state": "NC",
            "area_name": "Cleveland County, NC",
            "value": 3.8
        }, {
            "fips_code": 37047,
            "state": "NC",
            "area_name": "Columbus County, NC",
            "value": 4.2
        }, {
            "fips_code": 37049,
            "state": "NC",
            "area_name": "Craven County, NC",
            "value": 3.7
        }, {
            "fips_code": 37051,
            "state": "NC",
            "area_name": "Cumberland County, NC",
            "value": 5.1
        }, {
            "fips_code": 37053,
            "state": "NC",
            "area_name": "Currituck County, NC",
            "value": 3.5
        }, {
            "fips_code": 37055,
            "state": "NC",
            "area_name": "Dare County, NC",
            "value": 4.3
        }, {
            "fips_code": 37057,
            "state": "NC",
            "area_name": "Davidson County, NC",
            "value": 3.5
        }, {
            "fips_code": 37059,
            "state": "NC",
            "area_name": "Davie County, NC",
            "value": 3.4
        }, {
            "fips_code": 37061,
            "state": "NC",
            "area_name": "Duplin County, NC",
            "value": 3.7
        }, {
            "fips_code": 37063,
            "state": "NC",
            "area_name": "Durham County, NC",
            "value": 3.2
        }, {
            "fips_code": 37065,
            "state": "NC",
            "area_name": "Edgecombe County, NC",
            "value": 6.5
        }, {
            "fips_code": 37067,
            "state": "NC",
            "area_name": "Forsyth County, NC",
            "value": 3.7
        }, {
            "fips_code": 37069,
            "state": "NC",
            "area_name": "Franklin County, NC",
            "value": 3.6
        }, {
            "fips_code": 37071,
            "state": "NC",
            "area_name": "Gaston County, NC",
            "value": 3.7
        }, {
            "fips_code": 37073,
            "state": "NC",
            "area_name": "Gates County, NC",
            "value": 3.5
        }, {
            "fips_code": 37075,
            "state": "NC",
            "area_name": "Graham County, NC",
            "value": 5.4
        }, {
            "fips_code": 37077,
            "state": "NC",
            "area_name": "Granville County, NC",
            "value": 3.2
        }, {
            "fips_code": 37079,
            "state": "NC",
            "area_name": "Greene County, NC",
            "value": 3.2
        }, {
            "fips_code": 37081,
            "state": "NC",
            "area_name": "Guilford County, NC",
            "value": 4.1
        }, {
            "fips_code": 37083,
            "state": "NC",
            "area_name": "Halifax County, NC",
            "value": 5.5
        }, {
            "fips_code": 37085,
            "state": "NC",
            "area_name": "Harnett County, NC",
            "value": 4.1
        }, {
            "fips_code": 37087,
            "state": "NC",
            "area_name": "Haywood County, NC",
            "value": 3.2
        }, {
            "fips_code": 37089,
            "state": "NC",
            "area_name": "Henderson County, NC",
            "value": 3.2
        }, {
            "fips_code": 37091,
            "state": "NC",
            "area_name": "Hertford County, NC",
            "value": 5.1
        }, {
            "fips_code": 37093,
            "state": "NC",
            "area_name": "Hoke County, NC",
            "value": 4.9
        }, {
            "fips_code": 37095,
            "state": "NC",
            "area_name": "Hyde County, NC",
            "value": 5.6
        }, {
            "fips_code": 37097,
            "state": "NC",
            "area_name": "Iredell County, NC",
            "value": 3.4
        }, {
            "fips_code": 37099,
            "state": "NC",
            "area_name": "Jackson County, NC",
            "value": 3.8
        }, {
            "fips_code": 37101,
            "state": "NC",
            "area_name": "Johnston County, NC",
            "value": 3.3
        }, {
            "fips_code": 37103,
            "state": "NC",
            "area_name": "Jones County, NC",
            "value": 3.4
        }, {
            "fips_code": 37105,
            "state": "NC",
            "area_name": "Lee County, NC",
            "value": 4.2
        }, {
            "fips_code": 37107,
            "state": "NC",
            "area_name": "Lenoir County, NC",
            "value": 3.7
        }, {
            "fips_code": 37109,
            "state": "NC",
            "area_name": "Lincoln County, NC",
            "value": 3.1
        }, {
            "fips_code": 37111,
            "state": "NC",
            "area_name": "McDowell County, NC",
            "value": 3.5
        }, {
            "fips_code": 37113,
            "state": "NC",
            "area_name": "Macon County, NC",
            "value": 3.5
        }, {
            "fips_code": 37115,
            "state": "NC",
            "area_name": "Madison County, NC",
            "value": 3.4
        }, {
            "fips_code": 37117,
            "state": "NC",
            "area_name": "Martin County, NC",
            "value": 4.4
        }, {
            "fips_code": 37119,
            "state": "NC",
            "area_name": "Mecklenburg County, NC",
            "value": 3.5
        }, {
            "fips_code": 37121,
            "state": "NC",
            "area_name": "Mitchell County, NC",
            "value": 4.2
        }, {
            "fips_code": 37123,
            "state": "NC",
            "area_name": "Montgomery County, NC",
            "value": 3.7
        }, {
            "fips_code": 37125,
            "state": "NC",
            "area_name": "Moore County, NC",
            "value": 3.7
        }, {
            "fips_code": 37127,
            "state": "NC",
            "area_name": "Nash County, NC",
            "value": 5.0
        }, {
            "fips_code": 37129,
            "state": "NC",
            "area_name": "New Hanover County, NC",
            "value": 3.3
        }, {
            "fips_code": 37131,
            "state": "NC",
            "area_name": "Northampton County, NC",
            "value": 4.9
        }, {
            "fips_code": 37133,
            "state": "NC",
            "area_name": "Onslow County, NC",
            "value": 4.3
        }, {
            "fips_code": 37135,
            "state": "NC",
            "area_name": "Orange County, NC",
            "value": 3.0
        }, {
            "fips_code": 37137,
            "state": "NC",
            "area_name": "Pamlico County, NC",
            "value": 3.6
        }, {
            "fips_code": 37139,
            "state": "NC",
            "area_name": "Pasquotank County, NC",
            "value": 4.5
        }, {
            "fips_code": 37141,
            "state": "NC",
            "area_name": "Pender County, NC",
            "value": 3.5
        }, {
            "fips_code": 37143,
            "state": "NC",
            "area_name": "Perquimans County, NC",
            "value": 4.5
        }, {
            "fips_code": 37145,
            "state": "NC",
            "area_name": "Person County, NC",
            "value": 3.8
        }, {
            "fips_code": 37147,
            "state": "NC",
            "area_name": "Pitt County, NC",
            "value": 4.1
        }, {
            "fips_code": 37149,
            "state": "NC",
            "area_name": "Polk County, NC",
            "value": 3.8
        }, {
            "fips_code": 37151,
            "state": "NC",
            "area_name": "Randolph County, NC",
            "value": 3.6
        }, {
            "fips_code": 37153,
            "state": "NC",
            "area_name": "Richmond County, NC",
            "value": 5.0
        }, {
            "fips_code": 37155,
            "state": "NC",
            "area_name": "Robeson County, NC",
            "value": 5.5
        }, {
            "fips_code": 37157,
            "state": "NC",
            "area_name": "Rockingham County, NC",
            "value": 4.1
        }, {
            "fips_code": 37159,
            "state": "NC",
            "area_name": "Rowan County, NC",
            "value": 3.6
        }, {
            "fips_code": 37161,
            "state": "NC",
            "area_name": "Rutherford County, NC",
            "value": 4.7
        }, {
            "fips_code": 37163,
            "state": "NC",
            "area_name": "Sampson County, NC",
            "value": 3.7
        }, {
            "fips_code": 37165,
            "state": "NC",
            "area_name": "Scotland County, NC",
            "value": 6.4
        }, {
            "fips_code": 37167,
            "state": "NC",
            "area_name": "Stanly County, NC",
            "value": 3.3
        }, {
            "fips_code": 37169,
            "state": "NC",
            "area_name": "Stokes County, NC",
            "value": 3.3
        }, {
            "fips_code": 37171,
            "state": "NC",
            "area_name": "Surry County, NC",
            "value": 3.4
        }, {
            "fips_code": 37173,
            "state": "NC",
            "area_name": "Swain County, NC",
            "value": 3.2
        }, {
            "fips_code": 37175,
            "state": "NC",
            "area_name": "Transylvania County, NC",
            "value": 3.4
        }, {
            "fips_code": 37177,
            "state": "NC",
            "area_name": "Tyrrell County, NC",
            "value": 5.2
        }, {
            "fips_code": 37179,
            "state": "NC",
            "area_name": "Union County, NC",
            "value": 3.1
        }, {
            "fips_code": 37181,
            "state": "NC",
            "area_name": "Vance County, NC",
            "value": 5.8
        }, {
            "fips_code": 37183,
            "state": "NC",
            "area_name": "Wake County, NC",
            "value": 3.1
        }, {
            "fips_code": 37185,
            "state": "NC",
            "area_name": "Warren County, NC",
            "value": 6.3
        }, {
            "fips_code": 37187,
            "state": "NC",
            "area_name": "Washington County, NC",
            "value": 5.1
        }, {
            "fips_code": 37189,
            "state": "NC",
            "area_name": "Watauga County, NC",
            "value": 3.2
        }, {
            "fips_code": 37191,
            "state": "NC",
            "area_name": "Wayne County, NC",
            "value": 4.0
        }, {
            "fips_code": 37193,
            "state": "NC",
            "area_name": "Wilkes County, NC",
            "value": 3.8
        }, {
            "fips_code": 37195,
            "state": "NC",
            "area_name": "Wilson County, NC",
            "value": 5.1
        }, {
            "fips_code": 37197,
            "state": "NC",
            "area_name": "Yadkin County, NC",
            "value": 3.3
        }, {
            "fips_code": 37199,
            "state": "NC",
            "area_name": "Yancey County, NC",
            "value": 3.6
        }, {
            "fips_code": 38000,
            "state": "ND",
            "area_name": "North Dakota",
            "value": 2.1
        }, {
            "fips_code": 38001,
            "state": "ND",
            "area_name": "Adams County, ND",
            "value": 2.2
        }, {
            "fips_code": 38003,
            "state": "ND",
            "area_name": "Barnes County, ND",
            "value": 2.2
        }, {
            "fips_code": 38005,
            "state": "ND",
            "area_name": "Benson County, ND",
            "value": 2.9
        }, {
            "fips_code": 38007,
            "state": "ND",
            "area_name": "Billings County, ND",
            "value": 2.0
        }, {
            "fips_code": 38009,
            "state": "ND",
            "area_name": "Bottineau County, ND",
            "value": 3.0
        }, {
            "fips_code": 38011,
            "state": "ND",
            "area_name": "Bowman County, ND",
            "value": 1.7
        }, {
            "fips_code": 38013,
            "state": "ND",
            "area_name": "Burke County, ND",
            "value": 2.0
        }, {
            "fips_code": 38015,
            "state": "ND",
            "area_name": "Burleigh County, ND",
            "value": 1.9
        }, {
            "fips_code": 38017,
            "state": "ND",
            "area_name": "Cass County, ND",
            "value": 1.8
        }, {
            "fips_code": 38019,
            "state": "ND",
            "area_name": "Cavalier County, ND",
            "value": 2.4
        }, {
            "fips_code": 38021,
            "state": "ND",
            "area_name": "Dickey County, ND",
            "value": 1.7
        }, {
            "fips_code": 38023,
            "state": "ND",
            "area_name": "Divide County, ND",
            "value": 1.3
        }, {
            "fips_code": 38025,
            "state": "ND",
            "area_name": "Dunn County, ND",
            "value": 1.3
        }, {
            "fips_code": 38027,
            "state": "ND",
            "area_name": "Eddy County, ND",
            "value": 2.9
        }, {
            "fips_code": 38029,
            "state": "ND",
            "area_name": "Emmons County, ND",
            "value": 4.3
        }, {
            "fips_code": 38031,
            "state": "ND",
            "area_name": "Foster County, ND",
            "value": 2.1
        }, {
            "fips_code": 38033,
            "state": "ND",
            "area_name": "Golden Valley County, ND",
            "value": 1.6
        }, {
            "fips_code": 38035,
            "state": "ND",
            "area_name": "Grand Forks County, ND",
            "value": 1.9
        }, {
            "fips_code": 38037,
            "state": "ND",
            "area_name": "Grant County, ND",
            "value": 2.0
        }, {
            "fips_code": 38039,
            "state": "ND",
            "area_name": "Griggs County, ND",
            "value": 2.2
        }, {
            "fips_code": 38041,
            "state": "ND",
            "area_name": "Hettinger County, ND",
            "value": 1.7
        }, {
            "fips_code": 38043,
            "state": "ND",
            "area_name": "Kidder County, ND",
            "value": 3.9
        }, {
            "fips_code": 38045,
            "state": "ND",
            "area_name": "LaMoure County, ND",
            "value": 1.9
        }, {
            "fips_code": 38047,
            "state": "ND",
            "area_name": "Logan County, ND",
            "value": 2.2
        }, {
            "fips_code": 38049,
            "state": "ND",
            "area_name": "McHenry County, ND",
            "value": 3.2
        }, {
            "fips_code": 38051,
            "state": "ND",
            "area_name": "McIntosh County, ND",
            "value": 2.1
        }, {
            "fips_code": 38053,
            "state": "ND",
            "area_name": "McKenzie County, ND",
            "value": 1.9
        }, {
            "fips_code": 38055,
            "state": "ND",
            "area_name": "McLean County, ND",
            "value": 3.1
        }, {
            "fips_code": 38057,
            "state": "ND",
            "area_name": "Mercer County, ND",
            "value": 3.3
        }, {
            "fips_code": 38059,
            "state": "ND",
            "area_name": "Morton County, ND",
            "value": 2.5
        }, {
            "fips_code": 38061,
            "state": "ND",
            "area_name": "Mountrail County, ND",
            "value": 1.5
        }, {
            "fips_code": 38063,
            "state": "ND",
            "area_name": "Nelson County, ND",
            "value": 2.9
        }, {
            "fips_code": 38065,
            "state": "ND",
            "area_name": "Oliver County, ND",
            "value": 3.3
        }, {
            "fips_code": 38067,
            "state": "ND",
            "area_name": "Pembina County, ND",
            "value": 3.4
        }, {
            "fips_code": 38069,
            "state": "ND",
            "area_name": "Pierce County, ND",
            "value": 2.6
        }, {
            "fips_code": 38071,
            "state": "ND",
            "area_name": "Ramsey County, ND",
            "value": 2.3
        }, {
            "fips_code": 38073,
            "state": "ND",
            "area_name": "Ransom County, ND",
            "value": 1.7
        }, {
            "fips_code": 38075,
            "state": "ND",
            "area_name": "Renville County, ND",
            "value": 2.0
        }, {
            "fips_code": 38077,
            "state": "ND",
            "area_name": "Richland County, ND",
            "value": 1.9
        }, {
            "fips_code": 38079,
            "state": "ND",
            "area_name": "Rolette County, ND",
            "value": 6.6
        }, {
            "fips_code": 38081,
            "state": "ND",
            "area_name": "Sargent County, ND",
            "value": 1.7
        }, {
            "fips_code": 38083,
            "state": "ND",
            "area_name": "Sheridan County, ND",
            "value": 2.6
        }, {
            "fips_code": 38085,
            "state": "ND",
            "area_name": "Sioux County, ND",
            "value": 2.6
        }, {
            "fips_code": 38087,
            "state": "ND",
            "area_name": "Slope County, ND",
            "value": 2.6
        }, {
            "fips_code": 38089,
            "state": "ND",
            "area_name": "Stark County, ND",
            "value": 1.9
        }, {
            "fips_code": 38091,
            "state": "ND",
            "area_name": "Steele County, ND",
            "value": 2.0
        }, {
            "fips_code": 38093,
            "state": "ND",
            "area_name": "Stutsman County, ND",
            "value": 2.0
        }, {
            "fips_code": 38095,
            "state": "ND",
            "area_name": "Towner County, ND",
            "value": 2.4
        }, {
            "fips_code": 38097,
            "state": "ND",
            "area_name": "Traill County, ND",
            "value": 2.0
        }, {
            "fips_code": 38099,
            "state": "ND",
            "area_name": "Walsh County, ND",
            "value": 3.1
        }, {
            "fips_code": 38101,
            "state": "ND",
            "area_name": "Ward County, ND",
            "value": 2.3
        }, {
            "fips_code": 38103,
            "state": "ND",
            "area_name": "Wells County, ND",
            "value": 3.1
        }, {
            "fips_code": 38105,
            "state": "ND",
            "area_name": "Williams County, ND",
            "value": 2.3
        }, {
            "fips_code": 39000,
            "state": "OH",
            "area_name": "Ohio",
            "value": 4.0
        }, {
            "fips_code": 39001,
            "state": "OH",
            "area_name": "Adams County, OH",
            "value": 5.4
        }, {
            "fips_code": 39003,
            "state": "OH",
            "area_name": "Allen County, OH",
            "value": 4.2
        }, {
            "fips_code": 39005,
            "state": "OH",
            "area_name": "Ashland County, OH",
            "value": 3.8
        }, {
            "fips_code": 39007,
            "state": "OH",
            "area_name": "Ashtabula County, OH",
            "value": 4.4
        }, {
            "fips_code": 39009,
            "state": "OH",
            "area_name": "Athens County, OH",
            "value": 4.8
        }, {
            "fips_code": 39011,
            "state": "OH",
            "area_name": "Auglaize County, OH",
            "value": 3.1
        }, {
            "fips_code": 39013,
            "state": "OH",
            "area_name": "Belmont County, OH",
            "value": 5.2
        }, {
            "fips_code": 39015,
            "state": "OH",
            "area_name": "Brown County, OH",
            "value": 4.5
        }, {
            "fips_code": 39017,
            "state": "OH",
            "area_name": "Butler County, OH",
            "value": 3.5
        }, {
            "fips_code": 39019,
            "state": "OH",
            "area_name": "Carroll County, OH",
            "value": 4.3
        }, {
            "fips_code": 39021,
            "state": "OH",
            "area_name": "Champaign County, OH",
            "value": 3.7
        }, {
            "fips_code": 39023,
            "state": "OH",
            "area_name": "Clark County, OH",
            "value": 4.1
        }, {
            "fips_code": 39025,
            "state": "OH",
            "area_name": "Clermont County, OH",
            "value": 3.6
        }, {
            "fips_code": 39027,
            "state": "OH",
            "area_name": "Clinton County, OH",
            "value": 4.4
        }, {
            "fips_code": 39029,
            "state": "OH",
            "area_name": "Columbiana County, OH",
            "value": 4.6
        }, {
            "fips_code": 39031,
            "state": "OH",
            "area_name": "Coshocton County, OH",
            "value": 4.9
        }, {
            "fips_code": 39033,
            "state": "OH",
            "area_name": "Crawford County, OH",
            "value": 4.8
        }, {
            "fips_code": 39035,
            "state": "OH",
            "area_name": "Cuyahoga County, OH",
            "value": 4.9
        }, {
            "fips_code": 39037,
            "state": "OH",
            "area_name": "Darke County, OH",
            "value": 3.5
        }, {
            "fips_code": 39039,
            "state": "OH",
            "area_name": "Defiance County, OH",
            "value": 3.9
        }, {
            "fips_code": 39041,
            "state": "OH",
            "area_name": "Delaware County, OH",
            "value": 3.0
        }, {
            "fips_code": 39043,
            "state": "OH",
            "area_name": "Erie County, OH",
            "value": 4.9
        }, {
            "fips_code": 39045,
            "state": "OH",
            "area_name": "Fairfield County, OH",
            "value": 3.5
        }, {
            "fips_code": 39047,
            "state": "OH",
            "area_name": "Fayette County, OH",
            "value": 3.9
        }, {
            "fips_code": 39049,
            "state": "OH",
            "area_name": "Franklin County, OH",
            "value": 3.4
        }, {
            "fips_code": 39051,
            "state": "OH",
            "area_name": "Fulton County, OH",
            "value": 4.0
        }, {
            "fips_code": 39053,
            "state": "OH",
            "area_name": "Gallia County, OH",
            "value": 4.7
        }, {
            "fips_code": 39055,
            "state": "OH",
            "area_name": "Geauga County, OH",
            "value": 4.0
        }, {
            "fips_code": 39057,
            "state": "OH",
            "area_name": "Greene County, OH",
            "value": 3.6
        }, {
            "fips_code": 39059,
            "state": "OH",
            "area_name": "Guernsey County, OH",
            "value": 4.9
        }, {
            "fips_code": 39061,
            "state": "OH",
            "area_name": "Hamilton County, OH",
            "value": 3.6
        }, {
            "fips_code": 39063,
            "state": "OH",
            "area_name": "Hancock County, OH",
            "value": 3.3
        }, {
            "fips_code": 39065,
            "state": "OH",
            "area_name": "Hardin County, OH",
            "value": 4.2
        }, {
            "fips_code": 39067,
            "state": "OH",
            "area_name": "Harrison County, OH",
            "value": 4.9
        }, {
            "fips_code": 39069,
            "state": "OH",
            "area_name": "Henry County, OH",
            "value": 4.5
        }, {
            "fips_code": 39071,
            "state": "OH",
            "area_name": "Highland County, OH",
            "value": 4.9
        }, {
            "fips_code": 39073,
            "state": "OH",
            "area_name": "Hocking County, OH",
            "value": 4.1
        }, {
            "fips_code": 39075,
            "state": "OH",
            "area_name": "Holmes County, OH",
            "value": 2.8
        }, {
            "fips_code": 39077,
            "state": "OH",
            "area_name": "Huron County, OH",
            "value": 5.1
        }, {
            "fips_code": 39079,
            "state": "OH",
            "area_name": "Jackson County, OH",
            "value": 5.0
        }, {
            "fips_code": 39081,
            "state": "OH",
            "area_name": "Jefferson County, OH",
            "value": 5.4
        }, {
            "fips_code": 39083,
            "state": "OH",
            "area_name": "Knox County, OH",
            "value": 3.5
        }, {
            "fips_code": 39085,
            "state": "OH",
            "area_name": "Lake County, OH",
            "value": 4.3
        }, {
            "fips_code": 39087,
            "state": "OH",
            "area_name": "Lawrence County, OH",
            "value": 4.6
        }, {
            "fips_code": 39089,
            "state": "OH",
            "area_name": "Licking County, OH",
            "value": 3.4
        }, {
            "fips_code": 39091,
            "state": "OH",
            "area_name": "Logan County, OH",
            "value": 3.5
        }, {
            "fips_code": 39093,
            "state": "OH",
            "area_name": "Lorain County, OH",
            "value": 5.1
        }, {
            "fips_code": 39095,
            "state": "OH",
            "area_name": "Lucas County, OH",
            "value": 4.4
        }, {
            "fips_code": 39097,
            "state": "OH",
            "area_name": "Madison County, OH",
            "value": 3.2
        }, {
            "fips_code": 39099,
            "state": "OH",
            "area_name": "Mahoning County, OH",
            "value": 4.8
        }, {
            "fips_code": 39101,
            "state": "OH",
            "area_name": "Marion County, OH",
            "value": 4.4
        }, {
            "fips_code": 39103,
            "state": "OH",
            "area_name": "Medina County, OH",
            "value": 4.0
        }, {
            "fips_code": 39105,
            "state": "OH",
            "area_name": "Meigs County, OH",
            "value": 5.8
        }, {
            "fips_code": 39107,
            "state": "OH",
            "area_name": "Mercer County, OH",
            "value": 2.7
        }, {
            "fips_code": 39109,
            "state": "OH",
            "area_name": "Miami County, OH",
            "value": 3.6
        }, {
            "fips_code": 39111,
            "state": "OH",
            "area_name": "Monroe County, OH",
            "value": 6.4
        }, {
            "fips_code": 39113,
            "state": "OH",
            "area_name": "Montgomery County, OH",
            "value": 4.1
        }, {
            "fips_code": 39115,
            "state": "OH",
            "area_name": "Morgan County, OH",
            "value": 5.3
        }, {
            "fips_code": 39117,
            "state": "OH",
            "area_name": "Morrow County, OH",
            "value": 3.9
        }, {
            "fips_code": 39119,
            "state": "OH",
            "area_name": "Muskingum County, OH",
            "value": 4.3
        }, {
            "fips_code": 39121,
            "state": "OH",
            "area_name": "Noble County, OH",
            "value": 6.0
        }, {
            "fips_code": 39123,
            "state": "OH",
            "area_name": "Ottawa County, OH",
            "value": 5.2
        }, {
            "fips_code": 39125,
            "state": "OH",
            "area_name": "Paulding County, OH",
            "value": 3.5
        }, {
            "fips_code": 39127,
            "state": "OH",
            "area_name": "Perry County, OH",
            "value": 4.4
        }, {
            "fips_code": 39129,
            "state": "OH",
            "area_name": "Pickaway County, OH",
            "value": 3.7
        }, {
            "fips_code": 39131,
            "state": "OH",
            "area_name": "Pike County, OH",
            "value": 5.1
        }, {
            "fips_code": 39133,
            "state": "OH",
            "area_name": "Portage County, OH",
            "value": 3.8
        }, {
            "fips_code": 39135,
            "state": "OH",
            "area_name": "Preble County, OH",
            "value": 3.4
        }, {
            "fips_code": 39137,
            "state": "OH",
            "area_name": "Putnam County, OH",
            "value": 3.0
        }, {
            "fips_code": 39139,
            "state": "OH",
            "area_name": "Richland County, OH",
            "value": 4.5
        }, {
            "fips_code": 39141,
            "state": "OH",
            "area_name": "Ross County, OH",
            "value": 3.8
        }, {
            "fips_code": 39143,
            "state": "OH",
            "area_name": "Sandusky County, OH",
            "value": 4.7
        }, {
            "fips_code": 39145,
            "state": "OH",
            "area_name": "Scioto County, OH",
            "value": 5.1
        }, {
            "fips_code": 39147,
            "state": "OH",
            "area_name": "Seneca County, OH",
            "value": 4.2
        }, {
            "fips_code": 39149,
            "state": "OH",
            "area_name": "Shelby County, OH",
            "value": 3.5
        }, {
            "fips_code": 39151,
            "state": "OH",
            "area_name": "Stark County, OH",
            "value": 4.0
        }, {
            "fips_code": 39153,
            "state": "OH",
            "area_name": "Summit County, OH",
            "value": 4.1
        }, {
            "fips_code": 39155,
            "state": "OH",
            "area_name": "Trumbull County, OH",
            "value": 4.9
        }, {
            "fips_code": 39157,
            "state": "OH",
            "area_name": "Tuscarawas County, OH",
            "value": 3.8
        }, {
            "fips_code": 39159,
            "state": "OH",
            "area_name": "Union County, OH",
            "value": 3.0
        }, {
            "fips_code": 39161,
            "state": "OH",
            "area_name": "Van Wert County, OH",
            "value": 3.3
        }, {
            "fips_code": 39163,
            "state": "OH",
            "area_name": "Vinton County, OH",
            "value": 5.0
        }, {
            "fips_code": 39165,
            "state": "OH",
            "area_name": "Warren County, OH",
            "value": 3.3
        }, {
            "fips_code": 39167,
            "state": "OH",
            "area_name": "Washington County, OH",
            "value": 4.7
        }, {
            "fips_code": 39169,
            "state": "OH",
            "area_name": "Wayne County, OH",
            "value": 3.2
        }, {
            "fips_code": 39171,
            "state": "OH",
            "area_name": "Williams County, OH",
            "value": 3.4
        }, {
            "fips_code": 39173,
            "state": "OH",
            "area_name": "Wood County, OH",
            "value": 3.5
        }, {
            "fips_code": 39175,
            "state": "OH",
            "area_name": "Wyandot County, OH",
            "value": 2.9
        }, {
            "fips_code": 40000,
            "state": "OK",
            "area_name": "Oklahoma",
            "value": 3.0
        }, {
            "fips_code": 40001,
            "state": "OK",
            "area_name": "Adair County, OK",
            "value": 3.3
        }, {
            "fips_code": 40003,
            "state": "OK",
            "area_name": "Alfalfa County, OK",
            "value": 2.0
        }, {
            "fips_code": 40005,
            "state": "OK",
            "area_name": "Atoka County, OK",
            "value": 3.9
        }, {
            "fips_code": 40007,
            "state": "OK",
            "area_name": "Beaver County, OK",
            "value": 1.9
        }, {
            "fips_code": 40009,
            "state": "OK",
            "area_name": "Beckham County, OK",
            "value": 2.6
        }, {
            "fips_code": 40011,
            "state": "OK",
            "area_name": "Blaine County, OK",
            "value": 2.2
        }, {
            "fips_code": 40013,
            "state": "OK",
            "area_name": "Bryan County, OK",
            "value": 2.7
        }, {
            "fips_code": 40015,
            "state": "OK",
            "area_name": "Caddo County, OK",
            "value": 3.2
        }, {
            "fips_code": 40017,
            "state": "OK",
            "area_name": "Canadian County, OK",
            "value": 2.5
        }, {
            "fips_code": 40019,
            "state": "OK",
            "area_name": "Carter County, OK",
            "value": 3.5
        }, {
            "fips_code": 40021,
            "state": "OK",
            "area_name": "Cherokee County, OK",
            "value": 3.5
        }, {
            "fips_code": 40023,
            "state": "OK",
            "area_name": "Choctaw County, OK",
            "value": 4.6
        }, {
            "fips_code": 40025,
            "state": "OK",
            "area_name": "Cimarron County, OK",
            "value": 1.4
        }, {
            "fips_code": 40027,
            "state": "OK",
            "area_name": "Cleveland County, OK",
            "value": 2.5
        }, {
            "fips_code": 40029,
            "state": "OK",
            "area_name": "Coal County, OK",
            "value": 3.2
        }, {
            "fips_code": 40031,
            "state": "OK",
            "area_name": "Comanche County, OK",
            "value": 3.6
        }, {
            "fips_code": 40033,
            "state": "OK",
            "area_name": "Cotton County, OK",
            "value": 3.1
        }, {
            "fips_code": 40035,
            "state": "OK",
            "area_name": "Craig County, OK",
            "value": 3.1
        }, {
            "fips_code": 40037,
            "state": "OK",
            "area_name": "Creek County, OK",
            "value": 3.5
        }, {
            "fips_code": 40039,
            "state": "OK",
            "area_name": "Custer County, OK",
            "value": 2.6
        }, {
            "fips_code": 40041,
            "state": "OK",
            "area_name": "Delaware County, OK",
            "value": 2.9
        }, {
            "fips_code": 40043,
            "state": "OK",
            "area_name": "Dewey County, OK",
            "value": 2.0
        }, {
            "fips_code": 40045,
            "state": "OK",
            "area_name": "Ellis County, OK",
            "value": 2.3
        }, {
            "fips_code": 40047,
            "state": "OK",
            "area_name": "Garfield County, OK",
            "value": 2.9
        }, {
            "fips_code": 40049,
            "state": "OK",
            "area_name": "Garvin County, OK",
            "value": 2.9
        }, {
            "fips_code": 40051,
            "state": "OK",
            "area_name": "Grady County, OK",
            "value": 2.7
        }, {
            "fips_code": 40053,
            "state": "OK",
            "area_name": "Grant County, OK",
            "value": 1.9
        }, {
            "fips_code": 40055,
            "state": "OK",
            "area_name": "Greer County, OK",
            "value": 3.4
        }, {
            "fips_code": 40057,
            "state": "OK",
            "area_name": "Harmon County, OK",
            "value": 2.7
        }, {
            "fips_code": 40059,
            "state": "OK",
            "area_name": "Harper County, OK",
            "value": 2.0
        }, {
            "fips_code": 40061,
            "state": "OK",
            "area_name": "Haskell County, OK",
            "value": 4.3
        }, {
            "fips_code": 40063,
            "state": "OK",
            "area_name": "Hughes County, OK",
            "value": 3.9
        }, {
            "fips_code": 40065,
            "state": "OK",
            "area_name": "Jackson County, OK",
            "value": 2.7
        }, {
            "fips_code": 40067,
            "state": "OK",
            "area_name": "Jefferson County, OK",
            "value": 3.1
        }, {
            "fips_code": 40069,
            "state": "OK",
            "area_name": "Johnston County, OK",
            "value": 3.7
        }, {
            "fips_code": 40071,
            "state": "OK",
            "area_name": "Kay County, OK",
            "value": 3.5
        }, {
            "fips_code": 40073,
            "state": "OK",
            "area_name": "Kingfisher County, OK",
            "value": 2.0
        }, {
            "fips_code": 40075,
            "state": "OK",
            "area_name": "Kiowa County, OK",
            "value": 3.2
        }, {
            "fips_code": 40077,
            "state": "OK",
            "area_name": "Latimer County, OK",
            "value": 5.6
        }, {
            "fips_code": 40079,
            "state": "OK",
            "area_name": "Le Flore County, OK",
            "value": 3.7
        }, {
            "fips_code": 40081,
            "state": "OK",
            "area_name": "Lincoln County, OK",
            "value": 3.0
        }, {
            "fips_code": 40083,
            "state": "OK",
            "area_name": "Logan County, OK",
            "value": 2.7
        }, {
            "fips_code": 40085,
            "state": "OK",
            "area_name": "Love County, OK",
            "value": 2.4
        }, {
            "fips_code": 40087,
            "state": "OK",
            "area_name": "McClain County, OK",
            "value": 2.7
        }, {
            "fips_code": 40089,
            "state": "OK",
            "area_name": "McCurtain County, OK",
            "value": 4.0
        }, {
            "fips_code": 40091,
            "state": "OK",
            "area_name": "McIntosh County, OK",
            "value": 4.9
        }, {
            "fips_code": 40093,
            "state": "OK",
            "area_name": "Major County, OK",
            "value": 2.4
        }, {
            "fips_code": 40095,
            "state": "OK",
            "area_name": "Marshall County, OK",
            "value": 3.0
        }, {
            "fips_code": 40097,
            "state": "OK",
            "area_name": "Mayes County, OK",
            "value": 3.1
        }, {
            "fips_code": 40099,
            "state": "OK",
            "area_name": "Murray County, OK",
            "value": 3.0
        }, {
            "fips_code": 40101,
            "state": "OK",
            "area_name": "Muskogee County, OK",
            "value": 3.5
        }, {
            "fips_code": 40103,
            "state": "OK",
            "area_name": "Noble County, OK",
            "value": 2.2
        }, {
            "fips_code": 40105,
            "state": "OK",
            "area_name": "Nowata County, OK",
            "value": 2.9
        }, {
            "fips_code": 40107,
            "state": "OK",
            "area_name": "Okfuskee County, OK",
            "value": 3.9
        }, {
            "fips_code": 40109,
            "state": "OK",
            "area_name": "Oklahoma County, OK",
            "value": 2.9
        }, {
            "fips_code": 40111,
            "state": "OK",
            "area_name": "Okmulgee County, OK",
            "value": 4.2
        }, {
            "fips_code": 40113,
            "state": "OK",
            "area_name": "Osage County, OK",
            "value": 3.6
        }, {
            "fips_code": 40115,
            "state": "OK",
            "area_name": "Ottawa County, OK",
            "value": 2.8
        }, {
            "fips_code": 40117,
            "state": "OK",
            "area_name": "Pawnee County, OK",
            "value": 3.6
        }, {
            "fips_code": 40119,
            "state": "OK",
            "area_name": "Payne County, OK",
            "value": 2.8
        }, {
            "fips_code": 40121,
            "state": "OK",
            "area_name": "Pittsburg County, OK",
            "value": 4.3
        }, {
            "fips_code": 40123,
            "state": "OK",
            "area_name": "Pontotoc County, OK",
            "value": 2.8
        }, {
            "fips_code": 40125,
            "state": "OK",
            "area_name": "Pottawatomie County, OK",
            "value": 3.4
        }, {
            "fips_code": 40127,
            "state": "OK",
            "area_name": "Pushmataha County, OK",
            "value": 3.8
        }, {
            "fips_code": 40129,
            "state": "OK",
            "area_name": "Roger Mills County, OK",
            "value": 2.3
        }, {
            "fips_code": 40131,
            "state": "OK",
            "area_name": "Rogers County, OK",
            "value": 2.9
        }, {
            "fips_code": 40133,
            "state": "OK",
            "area_name": "Seminole County, OK",
            "value": 4.2
        }, {
            "fips_code": 40135,
            "state": "OK",
            "area_name": "Sequoyah County, OK",
            "value": 3.4
        }, {
            "fips_code": 40137,
            "state": "OK",
            "area_name": "Stephens County, OK",
            "value": 3.2
        }, {
            "fips_code": 40139,
            "state": "OK",
            "area_name": "Texas County, OK",
            "value": 1.8
        }, {
            "fips_code": 40141,
            "state": "OK",
            "area_name": "Tillman County, OK",
            "value": 3.3
        }, {
            "fips_code": 40143,
            "state": "OK",
            "area_name": "Tulsa County, OK",
            "value": 3.0
        }, {
            "fips_code": 40145,
            "state": "OK",
            "area_name": "Wagoner County, OK",
            "value": 3.0
        }, {
            "fips_code": 40147,
            "state": "OK",
            "area_name": "Washington County, OK",
            "value": 3.3
        }, {
            "fips_code": 40149,
            "state": "OK",
            "area_name": "Washita County, OK",
            "value": 3.0
        }, {
            "fips_code": 40151,
            "state": "OK",
            "area_name": "Woods County, OK",
            "value": 1.9
        }, {
            "fips_code": 40153,
            "state": "OK",
            "area_name": "Woodward County, OK",
            "value": 2.9
        }, {
            "fips_code": 41000,
            "state": "OR",
            "area_name": "Oregon",
            "value": 4.2
        }, {
            "fips_code": 41001,
            "state": "OR",
            "area_name": "Baker County, OR",
            "value": 4.7
        }, {
            "fips_code": 41003,
            "state": "OR",
            "area_name": "Benton County, OR",
            "value": 3.6
        }, {
            "fips_code": 41005,
            "state": "OR",
            "area_name": "Clackamas County, OR",
            "value": 3.8
        }, {
            "fips_code": 41007,
            "state": "OR",
            "area_name": "Clatsop County, OR",
            "value": 4.3
        }, {
            "fips_code": 41009,
            "state": "OR",
            "area_name": "Columbia County, OR",
            "value": 4.8
        }, {
            "fips_code": 41011,
            "state": "OR",
            "area_name": "Coos County, OR",
            "value": 5.3
        }, {
            "fips_code": 41013,
            "state": "OR",
            "area_name": "Crook County, OR",
            "value": 5.5
        }, {
            "fips_code": 41015,
            "state": "OR",
            "area_name": "Curry County, OR",
            "value": 5.4
        }, {
            "fips_code": 41017,
            "state": "OR",
            "area_name": "Deschutes County, OR",
            "value": 4.2
        }, {
            "fips_code": 41019,
            "state": "OR",
            "area_name": "Douglas County, OR",
            "value": 5.3
        }, {
            "fips_code": 41021,
            "state": "OR",
            "area_name": "Gilliam County, OR",
            "value": 4.0
        }, {
            "fips_code": 41023,
            "state": "OR",
            "area_name": "Grant County, OR",
            "value": 6.1
        }, {
            "fips_code": 41025,
            "state": "OR",
            "area_name": "Harney County, OR",
            "value": 4.9
        }, {
            "fips_code": 41027,
            "state": "OR",
            "area_name": "Hood River County, OR",
            "value": 3.6
        }, {
            "fips_code": 41029,
            "state": "OR",
            "area_name": "Jackson County, OR",
            "value": 4.7
        }, {
            "fips_code": 41031,
            "state": "OR",
            "area_name": "Jefferson County, OR",
            "value": 5.5
        }, {
            "fips_code": 41033,
            "state": "OR",
            "area_name": "Josephine County, OR",
            "value": 5.6
        }, {
            "fips_code": 41035,
            "state": "OR",
            "area_name": "Klamath County, OR",
            "value": 6.0
        }, {
            "fips_code": 41037,
            "state": "OR",
            "area_name": "Lake County, OR",
            "value": 5.4
        }, {
            "fips_code": 41039,
            "state": "OR",
            "area_name": "Lane County, OR",
            "value": 4.6
        }, {
            "fips_code": 41041,
            "state": "OR",
            "area_name": "Lincoln County, OR",
            "value": 5.2
        }, {
            "fips_code": 41043,
            "state": "OR",
            "area_name": "Linn County, OR",
            "value": 4.6
        }, {
            "fips_code": 41045,
            "state": "OR",
            "area_name": "Malheur County, OR",
            "value": 4.4
        }, {
            "fips_code": 41047,
            "state": "OR",
            "area_name": "Marion County, OR",
            "value": 4.3
        }, {
            "fips_code": 41049,
            "state": "OR",
            "area_name": "Morrow County, OR",
            "value": 4.1
        }, {
            "fips_code": 41051,
            "state": "OR",
            "area_name": "Multnomah County, OR",
            "value": 3.9
        }, {
            "fips_code": 41053,
            "state": "OR",
            "area_name": "Polk County, OR",
            "value": 4.2
        }, {
            "fips_code": 41055,
            "state": "OR",
            "area_name": "Sherman County, OR",
            "value": 3.3
        }, {
            "fips_code": 41057,
            "state": "OR",
            "area_name": "Tillamook County, OR",
            "value": 4.4
        }, {
            "fips_code": 41059,
            "state": "OR",
            "area_name": "Umatilla County, OR",
            "value": 4.6
        }, {
            "fips_code": 41061,
            "state": "OR",
            "area_name": "Union County, OR",
            "value": 4.7
        }, {
            "fips_code": 41063,
            "state": "OR",
            "area_name": "Wallowa County, OR",
            "value": 5.4
        }, {
            "fips_code": 41065,
            "state": "OR",
            "area_name": "Wasco County, OR",
            "value": 4.3
        }, {
            "fips_code": 41067,
            "state": "OR",
            "area_name": "Washington County, OR",
            "value": 3.5
        }, {
            "fips_code": 41069,
            "state": "OR",
            "area_name": "Wheeler County, OR",
            "value": 3.4
        }, {
            "fips_code": 41071,
            "state": "OR",
            "area_name": "Yamhill County, OR",
            "value": 3.9
        }, {
            "fips_code": 42000,
            "state": "PA",
            "area_name": "Pennsylvania",
            "value": 4.4
        }, {
            "fips_code": 42001,
            "state": "PA",
            "area_name": "Adams County, PA",
            "value": 3.3
        }, {
            "fips_code": 42003,
            "state": "PA",
            "area_name": "Allegheny County, PA",
            "value": 4.2
        }, {
            "fips_code": 42005,
            "state": "PA",
            "area_name": "Armstrong County, PA",
            "value": 5.3
        }, {
            "fips_code": 42007,
            "state": "PA",
            "area_name": "Beaver County, PA",
            "value": 5.4
        }, {
            "fips_code": 42009,
            "state": "PA",
            "area_name": "Bedford County, PA",
            "value": 4.5
        }, {
            "fips_code": 42011,
            "state": "PA",
            "area_name": "Berks County, PA",
            "value": 4.3
        }, {
            "fips_code": 42013,
            "state": "PA",
            "area_name": "Blair County, PA",
            "value": 4.5
        }, {
            "fips_code": 42015,
            "state": "PA",
            "area_name": "Bradford County, PA",
            "value": 4.2
        }, {
            "fips_code": 42017,
            "state": "PA",
            "area_name": "Bucks County, PA",
            "value": 3.8
        }, {
            "fips_code": 42019,
            "state": "PA",
            "area_name": "Butler County, PA",
            "value": 4.2
        }, {
            "fips_code": 42021,
            "state": "PA",
            "area_name": "Cambria County, PA",
            "value": 5.4
        }, {
            "fips_code": 42023,
            "state": "PA",
            "area_name": "Cameron County, PA",
            "value": 5.7
        }, {
            "fips_code": 42025,
            "state": "PA",
            "area_name": "Carbon County, PA",
            "value": 5.1
        }, {
            "fips_code": 42027,
            "state": "PA",
            "area_name": "Centre County, PA",
            "value": 3.6
        }, {
            "fips_code": 42029,
            "state": "PA",
            "area_name": "Chester County, PA",
            "value": 3.2
        }, {
            "fips_code": 42031,
            "state": "PA",
            "area_name": "Clarion County, PA",
            "value": 5.2
        }, {
            "fips_code": 42033,
            "state": "PA",
            "area_name": "Clearfield County, PA",
            "value": 5.4
        }, {
            "fips_code": 42035,
            "state": "PA",
            "area_name": "Clinton County, PA",
            "value": 5.3
        }, {
            "fips_code": 42037,
            "state": "PA",
            "area_name": "Columbia County, PA",
            "value": 4.5
        }, {
            "fips_code": 42039,
            "state": "PA",
            "area_name": "Crawford County, PA",
            "value": 4.8
        }, {
            "fips_code": 42041,
            "state": "PA",
            "area_name": "Cumberland County, PA",
            "value": 3.4
        }, {
            "fips_code": 42043,
            "state": "PA",
            "area_name": "Dauphin County, PA",
            "value": 4.0
        }, {
            "fips_code": 42045,
            "state": "PA",
            "area_name": "Delaware County, PA",
            "value": 4.1
        }, {
            "fips_code": 42047,
            "state": "PA",
            "area_name": "Elk County, PA",
            "value": 4.9
        }, {
            "fips_code": 42049,
            "state": "PA",
            "area_name": "Erie County, PA",
            "value": 5.0
        }, {
            "fips_code": 42051,
            "state": "PA",
            "area_name": "Fayette County, PA",
            "value": 6.1
        }, {
            "fips_code": 42053,
            "state": "PA",
            "area_name": "Forest County, PA",
            "value": 6.5
        }, {
            "fips_code": 42055,
            "state": "PA",
            "area_name": "Franklin County, PA",
            "value": 3.7
        }, {
            "fips_code": 42057,
            "state": "PA",
            "area_name": "Fulton County, PA",
            "value": 4.1
        }, {
            "fips_code": 42059,
            "state": "PA",
            "area_name": "Greene County, PA",
            "value": 5.3
        }, {
            "fips_code": 42061,
            "state": "PA",
            "area_name": "Huntingdon County, PA",
            "value": 5.6
        }, {
            "fips_code": 42063,
            "state": "PA",
            "area_name": "Indiana County, PA",
            "value": 5.3
        }, {
            "fips_code": 42065,
            "state": "PA",
            "area_name": "Jefferson County, PA",
            "value": 4.9
        }, {
            "fips_code": 42067,
            "state": "PA",
            "area_name": "Juniata County, PA",
            "value": 4.3
        }, {
            "fips_code": 42069,
            "state": "PA",
            "area_name": "Lackawanna County, PA",
            "value": 4.7
        }, {
            "fips_code": 42071,
            "state": "PA",
            "area_name": "Lancaster County, PA",
            "value": 3.5
        }, {
            "fips_code": 42073,
            "state": "PA",
            "area_name": "Lawrence County, PA",
            "value": 5.4
        }, {
            "fips_code": 42075,
            "state": "PA",
            "area_name": "Lebanon County, PA",
            "value": 3.7
        }, {
            "fips_code": 42077,
            "state": "PA",
            "area_name": "Lehigh County, PA",
            "value": 4.4
        }, {
            "fips_code": 42079,
            "state": "PA",
            "area_name": "Luzerne County, PA",
            "value": 5.3
        }, {
            "fips_code": 42081,
            "state": "PA",
            "area_name": "Lycoming County, PA",
            "value": 4.7
        }, {
            "fips_code": 42083,
            "state": "PA",
            "area_name": "McKean County, PA",
            "value": 5.4
        }, {
            "fips_code": 42085,
            "state": "PA",
            "area_name": "Mercer County, PA",
            "value": 5.0
        }, {
            "fips_code": 42087,
            "state": "PA",
            "area_name": "Mifflin County, PA",
            "value": 4.8
        }, {
            "fips_code": 42089,
            "state": "PA",
            "area_name": "Monroe County, PA",
            "value": 5.7
        }, {
            "fips_code": 42091,
            "state": "PA",
            "area_name": "Montgomery County, PA",
            "value": 3.5
        }, {
            "fips_code": 42093,
            "state": "PA",
            "area_name": "Montour County, PA",
            "value": 3.4
        }, {
            "fips_code": 42095,
            "state": "PA",
            "area_name": "Northampton County, PA",
            "value": 4.2
        }, {
            "fips_code": 42097,
            "state": "PA",
            "area_name": "Northumberland County, PA",
            "value": 5.0
        }, {
            "fips_code": 42099,
            "state": "PA",
            "area_name": "Perry County, PA",
            "value": 3.6
        }, {
            "fips_code": 42101,
            "state": "PA",
            "area_name": "Philadelphia County/city, PA",
            "value": 5.4
        }, {
            "fips_code": 42103,
            "state": "PA",
            "area_name": "Pike County, PA",
            "value": 5.6
        }, {
            "fips_code": 42105,
            "state": "PA",
            "area_name": "Potter County, PA",
            "value": 5.9
        }, {
            "fips_code": 42107,
            "state": "PA",
            "area_name": "Schuylkill County, PA",
            "value": 5.0
        }, {
            "fips_code": 42109,
            "state": "PA",
            "area_name": "Snyder County, PA",
            "value": 4.3
        }, {
            "fips_code": 42111,
            "state": "PA",
            "area_name": "Somerset County, PA",
            "value": 5.4
        }, {
            "fips_code": 42113,
            "state": "PA",
            "area_name": "Sullivan County, PA",
            "value": 5.3
        }, {
            "fips_code": 42115,
            "state": "PA",
            "area_name": "Susquehanna County, PA",
            "value": 4.2
        }, {
            "fips_code": 42117,
            "state": "PA",
            "area_name": "Tioga County, PA",
            "value": 4.9
        }, {
            "fips_code": 42119,
            "state": "PA",
            "area_name": "Union County, PA",
            "value": 3.9
        }, {
            "fips_code": 42121,
            "state": "PA",
            "area_name": "Venango County, PA",
            "value": 5.0
        }, {
            "fips_code": 42123,
            "state": "PA",
            "area_name": "Warren County, PA",
            "value": 4.7
        }, {
            "fips_code": 42125,
            "state": "PA",
            "area_name": "Washington County, PA",
            "value": 4.6
        }, {
            "fips_code": 42127,
            "state": "PA",
            "area_name": "Wayne County, PA",
            "value": 5.1
        }, {
            "fips_code": 42129,
            "state": "PA",
            "area_name": "Westmoreland County, PA",
            "value": 4.6
        }, {
            "fips_code": 42131,
            "state": "PA",
            "area_name": "Wyoming County, PA",
            "value": 4.9
        }, {
            "fips_code": 42133,
            "state": "PA",
            "area_name": "York County, PA",
            "value": 3.8
        }, {
            "fips_code": 44000,
            "state": "RI",
            "area_name": "Rhode Island",
            "value": 3.2
        }, {
            "fips_code": 44001,
            "state": "RI",
            "area_name": "Bristol County, RI",
            "value": 2.6
        }, {
            "fips_code": 44003,
            "state": "RI",
            "area_name": "Kent County, RI",
            "value": 2.9
        }, {
            "fips_code": 44005,
            "state": "RI",
            "area_name": "Newport County, RI",
            "value": 2.8
        }, {
            "fips_code": 44007,
            "state": "RI",
            "area_name": "Providence County, RI",
            "value": 3.5
        }, {
            "fips_code": 44009,
            "state": "RI",
            "area_name": "Washington County, RI",
            "value": 2.8
        }, {
            "fips_code": 45000,
            "state": "SC",
            "area_name": "South Carolina",
            "value": 3.2
        }, {
            "fips_code": 45001,
            "state": "SC",
            "area_name": "Abbeville County, SC",
            "value": 3.9
        }, {
            "fips_code": 45003,
            "state": "SC",
            "area_name": "Aiken County, SC",
            "value": 3.2
        }, {
            "fips_code": 45005,
            "state": "SC",
            "area_name": "Allendale County, SC",
            "value": 5.7
        }, {
            "fips_code": 45007,
            "state": "SC",
            "area_name": "Anderson County, SC",
            "value": 3.0
        }, {
            "fips_code": 45009,
            "state": "SC",
            "area_name": "Bamberg County, SC",
            "value": 5.5
        }, {
            "fips_code": 45011,
            "state": "SC",
            "area_name": "Barnwell County, SC",
            "value": 4.7
        }, {
            "fips_code": 45013,
            "state": "SC",
            "area_name": "Beaufort County, SC",
            "value": 3.1
        }, {
            "fips_code": 45015,
            "state": "SC",
            "area_name": "Berkeley County, SC",
            "value": 3.1
        }, {
            "fips_code": 45017,
            "state": "SC",
            "area_name": "Calhoun County, SC",
            "value": 3.5
        }, {
            "fips_code": 45019,
            "state": "SC",
            "area_name": "Charleston County, SC",
            "value": 2.8
        }, {
            "fips_code": 45021,
            "state": "SC",
            "area_name": "Cherokee County, SC",
            "value": 4.1
        }, {
            "fips_code": 45023,
            "state": "SC",
            "area_name": "Chester County, SC",
            "value": 4.3
        }, {
            "fips_code": 45025,
            "state": "SC",
            "area_name": "Chesterfield County, SC",
            "value": 3.6
        }, {
            "fips_code": 45027,
            "state": "SC",
            "area_name": "Clarendon County, SC",
            "value": 4.1
        }, {
            "fips_code": 45029,
            "state": "SC",
            "area_name": "Colleton County, SC",
            "value": 3.5
        }, {
            "fips_code": 45031,
            "state": "SC",
            "area_name": "Darlington County, SC",
            "value": 3.5
        }, {
            "fips_code": 45033,
            "state": "SC",
            "area_name": "Dillon County, SC",
            "value": 4.6
        }, {
            "fips_code": 45035,
            "state": "SC",
            "area_name": "Dorchester County, SC",
            "value": 2.9
        }, {
            "fips_code": 45037,
            "state": "SC",
            "area_name": "Edgefield County, SC",
            "value": 3.3
        }, {
            "fips_code": 45039,
            "state": "SC",
            "area_name": "Fairfield County, SC",
            "value": 4.7
        }, {
            "fips_code": 45041,
            "state": "SC",
            "area_name": "Florence County, SC",
            "value": 3.2
        }, {
            "fips_code": 45043,
            "state": "SC",
            "area_name": "Georgetown County, SC",
            "value": 3.7
        }, {
            "fips_code": 45045,
            "state": "SC",
            "area_name": "Greenville County, SC",
            "value": 2.8
        }, {
            "fips_code": 45047,
            "state": "SC",
            "area_name": "Greenwood County, SC",
            "value": 3.7
        }, {
            "fips_code": 45049,
            "state": "SC",
            "area_name": "Hampton County, SC",
            "value": 2.9
        }, {
            "fips_code": 45051,
            "state": "SC",
            "area_name": "Horry County, SC",
            "value": 3.9
        }, {
            "fips_code": 45053,
            "state": "SC",
            "area_name": "Jasper County, SC",
            "value": 3.1
        }, {
            "fips_code": 45055,
            "state": "SC",
            "area_name": "Kershaw County, SC",
            "value": 3.3
        }, {
            "fips_code": 45057,
            "state": "SC",
            "area_name": "Lancaster County, SC",
            "value": 3.6
        }, {
            "fips_code": 45059,
            "state": "SC",
            "area_name": "Laurens County, SC",
            "value": 3.4
        }, {
            "fips_code": 45061,
            "state": "SC",
            "area_name": "Lee County, SC",
            "value": 4.7
        }, {
            "fips_code": 45063,
            "state": "SC",
            "area_name": "Lexington County, SC",
            "value": 2.7
        }, {
            "fips_code": 45065,
            "state": "SC",
            "area_name": "McCormick County, SC",
            "value": 3.6
        }, {
            "fips_code": 45067,
            "state": "SC",
            "area_name": "Marion County, SC",
            "value": 4.9
        }, {
            "fips_code": 45069,
            "state": "SC",
            "area_name": "Marlboro County, SC",
            "value": 6.5
        }, {
            "fips_code": 45071,
            "state": "SC",
            "area_name": "Newberry County, SC",
            "value": 2.8
        }, {
            "fips_code": 45073,
            "state": "SC",
            "area_name": "Oconee County, SC",
            "value": 3.1
        }, {
            "fips_code": 45075,
            "state": "SC",
            "area_name": "Orangeburg County, SC",
            "value": 5.0
        }, {
            "fips_code": 45077,
            "state": "SC",
            "area_name": "Pickens County, SC",
            "value": 3.1
        }, {
            "fips_code": 45079,
            "state": "SC",
            "area_name": "Richland County, SC",
            "value": 3.3
        }, {
            "fips_code": 45081,
            "state": "SC",
            "area_name": "Saluda County, SC",
            "value": 2.9
        }, {
            "fips_code": 45083,
            "state": "SC",
            "area_name": "Spartanburg County, SC",
            "value": 3.1
        }, {
            "fips_code": 45085,
            "state": "SC",
            "area_name": "Sumter County, SC",
            "value": 3.8
        }, {
            "fips_code": 45087,
            "state": "SC",
            "area_name": "Union County, SC",
            "value": 4.7
        }, {
            "fips_code": 45089,
            "state": "SC",
            "area_name": "Williamsburg County, SC",
            "value": 4.8
        }, {
            "fips_code": 45091,
            "state": "SC",
            "area_name": "York County, SC",
            "value": 3.1
        }, {
            "fips_code": 46000,
            "state": "SD",
            "area_name": "South Dakota",
            "value": 2.1
        }, {
            "fips_code": 46003,
            "state": "SD",
            "area_name": "Aurora County, SD",
            "value": 1.9
        }, {
            "fips_code": 46005,
            "state": "SD",
            "area_name": "Beadle County, SD",
            "value": 1.9
        }, {
            "fips_code": 46007,
            "state": "SD",
            "area_name": "Bennett County, SD",
            "value": 3.3
        }, {
            "fips_code": 46009,
            "state": "SD",
            "area_name": "Bon Homme County, SD",
            "value": 1.9
        }, {
            "fips_code": 46011,
            "state": "SD",
            "area_name": "Brookings County, SD",
            "value": 2.1
        }, {
            "fips_code": 46013,
            "state": "SD",
            "area_name": "Brown County, SD",
            "value": 2.3
        }, {
            "fips_code": 46015,
            "state": "SD",
            "area_name": "Brule County, SD",
            "value": 1.7
        }, {
            "fips_code": 46017,
            "state": "SD",
            "area_name": "Buffalo County, SD",
            "value": 4.5
        }, {
            "fips_code": 46019,
            "state": "SD",
            "area_name": "Butte County, SD",
            "value": 1.9
        }, {
            "fips_code": 46021,
            "state": "SD",
            "area_name": "Campbell County, SD",
            "value": 2.6
        }, {
            "fips_code": 46023,
            "state": "SD",
            "area_name": "Charles Mix County, SD",
            "value": 2.3
        }, {
            "fips_code": 46025,
            "state": "SD",
            "area_name": "Clark County, SD",
            "value": 2.3
        }, {
            "fips_code": 46027,
            "state": "SD",
            "area_name": "Clay County, SD",
            "value": 2.1
        }, {
            "fips_code": 46029,
            "state": "SD",
            "area_name": "Codington County, SD",
            "value": 2.0
        }, {
            "fips_code": 46031,
            "state": "SD",
            "area_name": "Corson County, SD",
            "value": 3.0
        }, {
            "fips_code": 46033,
            "state": "SD",
            "area_name": "Custer County, SD",
            "value": 2.8
        }, {
            "fips_code": 46035,
            "state": "SD",
            "area_name": "Davison County, SD",
            "value": 1.9
        }, {
            "fips_code": 46037,
            "state": "SD",
            "area_name": "Day County, SD",
            "value": 3.0
        }, {
            "fips_code": 46039,
            "state": "SD",
            "area_name": "Deuel County, SD",
            "value": 2.9
        }, {
            "fips_code": 46041,
            "state": "SD",
            "area_name": "Dewey County, SD",
            "value": 5.7
        }, {
            "fips_code": 46043,
            "state": "SD",
            "area_name": "Douglas County, SD",
            "value": 2.0
        }, {
            "fips_code": 46045,
            "state": "SD",
            "area_name": "Edmunds County, SD",
            "value": 1.9
        }, {
            "fips_code": 46047,
            "state": "SD",
            "area_name": "Fall River County, SD",
            "value": 2.3
        }, {
            "fips_code": 46049,
            "state": "SD",
            "area_name": "Faulk County, SD",
            "value": 2.0
        }, {
            "fips_code": 46051,
            "state": "SD",
            "area_name": "Grant County, SD",
            "value": 2.6
        }, {
            "fips_code": 46053,
            "state": "SD",
            "area_name": "Gregory County, SD",
            "value": 1.9
        }, {
            "fips_code": 46055,
            "state": "SD",
            "area_name": "Haakon County, SD",
            "value": 1.9
        }, {
            "fips_code": 46057,
            "state": "SD",
            "area_name": "Hamlin County, SD",
            "value": 2.0
        }, {
            "fips_code": 46059,
            "state": "SD",
            "area_name": "Hand County, SD",
            "value": 1.7
        }, {
            "fips_code": 46061,
            "state": "SD",
            "area_name": "Hanson County, SD",
            "value": 2.6
        }, {
            "fips_code": 46063,
            "state": "SD",
            "area_name": "Harding County, SD",
            "value": 2.0
        }, {
            "fips_code": 46065,
            "state": "SD",
            "area_name": "Hughes County, SD",
            "value": 1.7
        }, {
            "fips_code": 46067,
            "state": "SD",
            "area_name": "Hutchinson County, SD",
            "value": 2.3
        }, {
            "fips_code": 46069,
            "state": "SD",
            "area_name": "Hyde County, SD",
            "value": 2.1
        }, {
            "fips_code": 46071,
            "state": "SD",
            "area_name": "Jackson County, SD",
            "value": 3.0
        }, {
            "fips_code": 46073,
            "state": "SD",
            "area_name": "Jerauld County, SD",
            "value": 1.3
        }, {
            "fips_code": 46075,
            "state": "SD",
            "area_name": "Jones County, SD",
            "value": 2.5
        }, {
            "fips_code": 46077,
            "state": "SD",
            "area_name": "Kingsbury County, SD",
            "value": 1.9
        }, {
            "fips_code": 46079,
            "state": "SD",
            "area_name": "Lake County, SD",
            "value": 2.1
        }, {
            "fips_code": 46081,
            "state": "SD",
            "area_name": "Lawrence County, SD",
            "value": 1.9
        }, {
            "fips_code": 46083,
            "state": "SD",
            "area_name": "Lincoln County, SD",
            "value": 1.6
        }, {
            "fips_code": 46085,
            "state": "SD",
            "area_name": "Lyman County, SD",
            "value": 2.5
        }, {
            "fips_code": 46087,
            "state": "SD",
            "area_name": "McCook County, SD",
            "value": 1.7
        }, {
            "fips_code": 46089,
            "state": "SD",
            "area_name": "McPherson County, SD",
            "value": 2.7
        }, {
            "fips_code": 46091,
            "state": "SD",
            "area_name": "Marshall County, SD",
            "value": 2.8
        }, {
            "fips_code": 46093,
            "state": "SD",
            "area_name": "Meade County, SD",
            "value": 2.1
        }, {
            "fips_code": 46095,
            "state": "SD",
            "area_name": "Mellette County, SD",
            "value": 3.1
        }, {
            "fips_code": 46097,
            "state": "SD",
            "area_name": "Miner County, SD",
            "value": 1.9
        }, {
            "fips_code": 46099,
            "state": "SD",
            "area_name": "Minnehaha County, SD",
            "value": 1.9
        }, {
            "fips_code": 46101,
            "state": "SD",
            "area_name": "Moody County, SD",
            "value": 2.2
        }, {
            "fips_code": 46102,
            "state": "SD",
            "area_name": "Oglala Lakota County, SD",
            "value": 4.9
        }, {
            "fips_code": 46103,
            "state": "SD",
            "area_name": "Pennington County, SD",
            "value": 2.0
        }, {
            "fips_code": 46105,
            "state": "SD",
            "area_name": "Perkins County, SD",
            "value": 2.1
        }, {
            "fips_code": 46107,
            "state": "SD",
            "area_name": "Potter County, SD",
            "value": 2.3
        }, {
            "fips_code": 46109,
            "state": "SD",
            "area_name": "Roberts County, SD",
            "value": 3.3
        }, {
            "fips_code": 46111,
            "state": "SD",
            "area_name": "Sanborn County, SD",
            "value": 2.1
        }, {
            "fips_code": 46115,
            "state": "SD",
            "area_name": "Spink County, SD",
            "value": 2.4
        }, {
            "fips_code": 46117,
            "state": "SD",
            "area_name": "Stanley County, SD",
            "value": 1.9
        }, {
            "fips_code": 46119,
            "state": "SD",
            "area_name": "Sully County, SD",
            "value": 1.6
        }, {
            "fips_code": 46121,
            "state": "SD",
            "area_name": "Todd County, SD",
            "value": 3.7
        }, {
            "fips_code": 46123,
            "state": "SD",
            "area_name": "Tripp County, SD",
            "value": 1.7
        }, {
            "fips_code": 46125,
            "state": "SD",
            "area_name": "Turner County, SD",
            "value": 1.9
        }, {
            "fips_code": 46127,
            "state": "SD",
            "area_name": "Union County, SD",
            "value": 2.2
        }, {
            "fips_code": 46129,
            "state": "SD",
            "area_name": "Walworth County, SD",
            "value": 3.5
        }, {
            "fips_code": 46135,
            "state": "SD",
            "area_name": "Yankton County, SD",
            "value": 1.8
        }, {
            "fips_code": 46137,
            "state": "SD",
            "area_name": "Ziebach County, SD",
            "value": 3.7
        }, {
            "fips_code": 47000,
            "state": "TN",
            "area_name": "Tennessee",
            "value": 3.4
        }, {
            "fips_code": 47001,
            "state": "TN",
            "area_name": "Anderson County, TN",
            "value": 3.3
        }, {
            "fips_code": 47003,
            "state": "TN",
            "area_name": "Bedford County, TN",
            "value": 3.4
        }, {
            "fips_code": 47005,
            "state": "TN",
            "area_name": "Benton County, TN",
            "value": 4.1
        }, {
            "fips_code": 47007,
            "state": "TN",
            "area_name": "Bledsoe County, TN",
            "value": 5.3
        }, {
            "fips_code": 47009,
            "state": "TN",
            "area_name": "Blount County, TN",
            "value": 3.1
        }, {
            "fips_code": 47011,
            "state": "TN",
            "area_name": "Bradley County, TN",
            "value": 3.6
        }, {
            "fips_code": 47013,
            "state": "TN",
            "area_name": "Campbell County, TN",
            "value": 4.1
        }, {
            "fips_code": 47015,
            "state": "TN",
            "area_name": "Cannon County, TN",
            "value": 3.0
        }, {
            "fips_code": 47017,
            "state": "TN",
            "area_name": "Carroll County, TN",
            "value": 3.9
        }, {
            "fips_code": 47019,
            "state": "TN",
            "area_name": "Carter County, TN",
            "value": 3.6
        }, {
            "fips_code": 47021,
            "state": "TN",
            "area_name": "Cheatham County, TN",
            "value": 2.7
        }, {
            "fips_code": 47023,
            "state": "TN",
            "area_name": "Chester County, TN",
            "value": 3.0
        }, {
            "fips_code": 47025,
            "state": "TN",
            "area_name": "Claiborne County, TN",
            "value": 3.8
        }, {
            "fips_code": 47027,
            "state": "TN",
            "area_name": "Clay County, TN",
            "value": 4.6
        }, {
            "fips_code": 47029,
            "state": "TN",
            "area_name": "Cocke County, TN",
            "value": 5.1
        }, {
            "fips_code": 47031,
            "state": "TN",
            "area_name": "Coffee County, TN",
            "value": 3.4
        }, {
            "fips_code": 47033,
            "state": "TN",
            "area_name": "Crockett County, TN",
            "value": 3.2
        }, {
            "fips_code": 47035,
            "state": "TN",
            "area_name": "Cumberland County, TN",
            "value": 4.3
        }, {
            "fips_code": 47037,
            "state": "TN",
            "area_name": "Davidson County, TN",
            "value": 2.8
        }, {
            "fips_code": 47039,
            "state": "TN",
            "area_name": "Decatur County, TN",
            "value": 4.5
        }, {
            "fips_code": 47041,
            "state": "TN",
            "area_name": "DeKalb County, TN",
            "value": 3.8
        }, {
            "fips_code": 47043,
            "state": "TN",
            "area_name": "Dickson County, TN",
            "value": 3.0
        }, {
            "fips_code": 47045,
            "state": "TN",
            "area_name": "Dyer County, TN",
            "value": 3.6
        }, {
            "fips_code": 47047,
            "state": "TN",
            "area_name": "Fayette County, TN",
            "value": 3.5
        }, {
            "fips_code": 47049,
            "state": "TN",
            "area_name": "Fentress County, TN",
            "value": 3.8
        }, {
            "fips_code": 47051,
            "state": "TN",
            "area_name": "Franklin County, TN",
            "value": 3.5
        }, {
            "fips_code": 47053,
            "state": "TN",
            "area_name": "Gibson County, TN",
            "value": 3.5
        }, {
            "fips_code": 47055,
            "state": "TN",
            "area_name": "Giles County, TN",
            "value": 3.3
        }, {
            "fips_code": 47057,
            "state": "TN",
            "area_name": "Grainger County, TN",
            "value": 3.8
        }, {
            "fips_code": 47059,
            "state": "TN",
            "area_name": "Greene County, TN",
            "value": 4.0
        }, {
            "fips_code": 47061,
            "state": "TN",
            "area_name": "Grundy County, TN",
            "value": 4.5
        }, {
            "fips_code": 47063,
            "state": "TN",
            "area_name": "Hamblen County, TN",
            "value": 3.6
        }, {
            "fips_code": 47065,
            "state": "TN",
            "area_name": "Hamilton County, TN",
            "value": 3.4
        }, {
            "fips_code": 47067,
            "state": "TN",
            "area_name": "Hancock County, TN",
            "value": 4.2
        }, {
            "fips_code": 47069,
            "state": "TN",
            "area_name": "Hardeman County, TN",
            "value": 4.2
        }, {
            "fips_code": 47071,
            "state": "TN",
            "area_name": "Hardin County, TN",
            "value": 4.0
        }, {
            "fips_code": 47073,
            "state": "TN",
            "area_name": "Hawkins County, TN",
            "value": 3.9
        }, {
            "fips_code": 47075,
            "state": "TN",
            "area_name": "Haywood County, TN",
            "value": 4.5
        }, {
            "fips_code": 47077,
            "state": "TN",
            "area_name": "Henderson County, TN",
            "value": 3.6
        }, {
            "fips_code": 47079,
            "state": "TN",
            "area_name": "Henry County, TN",
            "value": 4.0
        }, {
            "fips_code": 47081,
            "state": "TN",
            "area_name": "Hickman County, TN",
            "value": 2.9
        }, {
            "fips_code": 47083,
            "state": "TN",
            "area_name": "Houston County, TN",
            "value": 4.4
        }, {
            "fips_code": 47085,
            "state": "TN",
            "area_name": "Humphreys County, TN",
            "value": 3.5
        }, {
            "fips_code": 47087,
            "state": "TN",
            "area_name": "Jackson County, TN",
            "value": 3.9
        }, {
            "fips_code": 47089,
            "state": "TN",
            "area_name": "Jefferson County, TN",
            "value": 3.6
        }, {
            "fips_code": 47091,
            "state": "TN",
            "area_name": "Johnson County, TN",
            "value": 3.4
        }, {
            "fips_code": 47093,
            "state": "TN",
            "area_name": "Knox County, TN",
            "value": 2.9
        }, {
            "fips_code": 47095,
            "state": "TN",
            "area_name": "Lake County, TN",
            "value": 5.0
        }, {
            "fips_code": 47097,
            "state": "TN",
            "area_name": "Lauderdale County, TN",
            "value": 4.7
        }, {
            "fips_code": 47099,
            "state": "TN",
            "area_name": "Lawrence County, TN",
            "value": 3.5
        }, {
            "fips_code": 47101,
            "state": "TN",
            "area_name": "Lewis County, TN",
            "value": 3.6
        }, {
            "fips_code": 47103,
            "state": "TN",
            "area_name": "Lincoln County, TN",
            "value": 3.2
        }, {
            "fips_code": 47105,
            "state": "TN",
            "area_name": "Loudon County, TN",
            "value": 3.2
        }, {
            "fips_code": 47107,
            "state": "TN",
            "area_name": "McMinn County, TN",
            "value": 4.0
        }, {
            "fips_code": 47109,
            "state": "TN",
            "area_name": "McNairy County, TN",
            "value": 4.6
        }, {
            "fips_code": 47111,
            "state": "TN",
            "area_name": "Macon County, TN",
            "value": 3.1
        }, {
            "fips_code": 47113,
            "state": "TN",
            "area_name": "Madison County, TN",
            "value": 3.4
        }, {
            "fips_code": 47115,
            "state": "TN",
            "area_name": "Marion County, TN",
            "value": 3.9
        }, {
            "fips_code": 47117,
            "state": "TN",
            "area_name": "Marshall County, TN",
            "value": 3.3
        }, {
            "fips_code": 47119,
            "state": "TN",
            "area_name": "Maury County, TN",
            "value": 3.0
        }, {
            "fips_code": 47121,
            "state": "TN",
            "area_name": "Meigs County, TN",
            "value": 4.4
        }, {
            "fips_code": 47123,
            "state": "TN",
            "area_name": "Monroe County, TN",
            "value": 3.4
        }, {
            "fips_code": 47125,
            "state": "TN",
            "area_name": "Montgomery County, TN",
            "value": 3.7
        }, {
            "fips_code": 47127,
            "state": "TN",
            "area_name": "Moore County, TN",
            "value": 2.5
        }, {
            "fips_code": 47129,
            "state": "TN",
            "area_name": "Morgan County, TN",
            "value": 3.8
        }, {
            "fips_code": 47131,
            "state": "TN",
            "area_name": "Obion County, TN",
            "value": 3.9
        }, {
            "fips_code": 47133,
            "state": "TN",
            "area_name": "Overton County, TN",
            "value": 3.4
        }, {
            "fips_code": 47135,
            "state": "TN",
            "area_name": "Perry County, TN",
            "value": 5.4
        }, {
            "fips_code": 47137,
            "state": "TN",
            "area_name": "Pickett County, TN",
            "value": 3.8
        }, {
            "fips_code": 47139,
            "state": "TN",
            "area_name": "Polk County, TN",
            "value": 3.7
        }, {
            "fips_code": 47141,
            "state": "TN",
            "area_name": "Putnam County, TN",
            "value": 3.4
        }, {
            "fips_code": 47143,
            "state": "TN",
            "area_name": "Rhea County, TN",
            "value": 4.3
        }, {
            "fips_code": 47145,
            "state": "TN",
            "area_name": "Roane County, TN",
            "value": 3.7
        }, {
            "fips_code": 47147,
            "state": "TN",
            "area_name": "Robertson County, TN",
            "value": 2.8
        }, {
            "fips_code": 47149,
            "state": "TN",
            "area_name": "Rutherford County, TN",
            "value": 2.7
        }, {
            "fips_code": 47151,
            "state": "TN",
            "area_name": "Scott County, TN",
            "value": 4.9
        }, {
            "fips_code": 47153,
            "state": "TN",
            "area_name": "Sequatchie County, TN",
            "value": 4.1
        }, {
            "fips_code": 47155,
            "state": "TN",
            "area_name": "Sevier County, TN",
            "value": 3.2
        }, {
            "fips_code": 47157,
            "state": "TN",
            "area_name": "Shelby County, TN",
            "value": 4.5
        }, {
            "fips_code": 47159,
            "state": "TN",
            "area_name": "Smith County, TN",
            "value": 3.0
        }, {
            "fips_code": 47161,
            "state": "TN",
            "area_name": "Stewart County, TN",
            "value": 3.9
        }, {
            "fips_code": 47163,
            "state": "TN",
            "area_name": "Sullivan County, TN",
            "value": 3.5
        }, {
            "fips_code": 47165,
            "state": "TN",
            "area_name": "Sumner County, TN",
            "value": 2.7
        }, {
            "fips_code": 47167,
            "state": "TN",
            "area_name": "Tipton County, TN",
            "value": 3.6
        }, {
            "fips_code": 47169,
            "state": "TN",
            "area_name": "Trousdale County, TN",
            "value": 3.0
        }, {
            "fips_code": 47171,
            "state": "TN",
            "area_name": "Unicoi County, TN",
            "value": 4.3
        }, {
            "fips_code": 47173,
            "state": "TN",
            "area_name": "Union County, TN",
            "value": 3.8
        }, {
            "fips_code": 47175,
            "state": "TN",
            "area_name": "Van Buren County, TN",
            "value": 4.2
        }, {
            "fips_code": 47177,
            "state": "TN",
            "area_name": "Warren County, TN",
            "value": 4.2
        }, {
            "fips_code": 47179,
            "state": "TN",
            "area_name": "Washington County, TN",
            "value": 3.2
        }, {
            "fips_code": 47181,
            "state": "TN",
            "area_name": "Wayne County, TN",
            "value": 4.5
        }, {
            "fips_code": 47183,
            "state": "TN",
            "area_name": "Weakley County, TN",
            "value": 3.5
        }, {
            "fips_code": 47185,
            "state": "TN",
            "area_name": "White County, TN",
            "value": 3.5
        }, {
            "fips_code": 47187,
            "state": "TN",
            "area_name": "Williamson County, TN",
            "value": 2.4
        }, {
            "fips_code": 47189,
            "state": "TN",
            "area_name": "Wilson County, TN",
            "value": 2.6
        }, {
            "fips_code": 48000,
            "state": "TX",
            "area_name": "Texas",
            "value": 3.9
        }, {
            "fips_code": 48001,
            "state": "TX",
            "area_name": "Anderson County, TX",
            "value": 3.4
        }, {
            "fips_code": 48003,
            "state": "TX",
            "area_name": "Andrews County, TX",
            "value": 3.2
        }, {
            "fips_code": 48005,
            "state": "TX",
            "area_name": "Angelina County, TX",
            "value": 4.6
        }, {
            "fips_code": 48007,
            "state": "TX",
            "area_name": "Aransas County, TX",
            "value": 5.3
        }, {
            "fips_code": 48009,
            "state": "TX",
            "area_name": "Archer County, TX",
            "value": 3.4
        }, {
            "fips_code": 48011,
            "state": "TX",
            "area_name": "Armstrong County, TX",
            "value": 2.8
        }, {
            "fips_code": 48013,
            "state": "TX",
            "area_name": "Atascosa County, TX",
            "value": 4.0
        }, {
            "fips_code": 48015,
            "state": "TX",
            "area_name": "Austin County, TX",
            "value": 3.9
        }, {
            "fips_code": 48017,
            "state": "TX",
            "area_name": "Bailey County, TX",
            "value": 4.2
        }, {
            "fips_code": 48019,
            "state": "TX",
            "area_name": "Bandera County, TX",
            "value": 3.7
        }, {
            "fips_code": 48021,
            "state": "TX",
            "area_name": "Bastrop County, TX",
            "value": 3.3
        }, {
            "fips_code": 48023,
            "state": "TX",
            "area_name": "Baylor County, TX",
            "value": 2.7
        }, {
            "fips_code": 48025,
            "state": "TX",
            "area_name": "Bee County, TX",
            "value": 5.8
        }, {
            "fips_code": 48027,
            "state": "TX",
            "area_name": "Bell County, TX",
            "value": 4.4
        }, {
            "fips_code": 48029,
            "state": "TX",
            "area_name": "Bexar County, TX",
            "value": 3.7
        }, {
            "fips_code": 48031,
            "state": "TX",
            "area_name": "Blanco County, TX",
            "value": 2.8
        }, {
            "fips_code": 48033,
            "state": "TX",
            "area_name": "Borden County, TX",
            "value": 1.9
        }, {
            "fips_code": 48035,
            "state": "TX",
            "area_name": "Bosque County, TX",
            "value": 3.7
        }, {
            "fips_code": 48037,
            "state": "TX",
            "area_name": "Bowie County, TX",
            "value": 4.6
        }, {
            "fips_code": 48039,
            "state": "TX",
            "area_name": "Brazoria County, TX",
            "value": 4.5
        }, {
            "fips_code": 48041,
            "state": "TX",
            "area_name": "Brazos County, TX",
            "value": 3.1
        }, {
            "fips_code": 48043,
            "state": "TX",
            "area_name": "Brewster County, TX",
            "value": 3.4
        }, {
            "fips_code": 48045,
            "state": "TX",
            "area_name": "Briscoe County, TX",
            "value": 3.5
        }, {
            "fips_code": 48047,
            "state": "TX",
            "area_name": "Brooks County, TX",
            "value": 6.0
        }, {
            "fips_code": 48049,
            "state": "TX",
            "area_name": "Brown County, TX",
            "value": 4.3
        }, {
            "fips_code": 48051,
            "state": "TX",
            "area_name": "Burleson County, TX",
            "value": 3.6
        }, {
            "fips_code": 48053,
            "state": "TX",
            "area_name": "Burnet County, TX",
            "value": 3.0
        }, {
            "fips_code": 48055,
            "state": "TX",
            "area_name": "Caldwell County, TX",
            "value": 3.5
        }, {
            "fips_code": 48057,
            "state": "TX",
            "area_name": "Calhoun County, TX",
            "value": 3.7
        }, {
            "fips_code": 48059,
            "state": "TX",
            "area_name": "Callahan County, TX",
            "value": 3.6
        }, {
            "fips_code": 48061,
            "state": "TX",
            "area_name": "Cameron County, TX",
            "value": 5.7
        }, {
            "fips_code": 48063,
            "state": "TX",
            "area_name": "Camp County, TX",
            "value": 4.5
        }, {
            "fips_code": 48065,
            "state": "TX",
            "area_name": "Carson County, TX",
            "value": 3.1
        }, {
            "fips_code": 48067,
            "state": "TX",
            "area_name": "Cass County, TX",
            "value": 4.7
        }, {
            "fips_code": 48069,
            "state": "TX",
            "area_name": "Castro County, TX",
            "value": 3.1
        }, {
            "fips_code": 48071,
            "state": "TX",
            "area_name": "Chambers County, TX",
            "value": 5.3
        }, {
            "fips_code": 48073,
            "state": "TX",
            "area_name": "Cherokee County, TX",
            "value": 4.4
        }, {
            "fips_code": 48075,
            "state": "TX",
            "area_name": "Childress County, TX",
            "value": 2.8
        }, {
            "fips_code": 48077,
            "state": "TX",
            "area_name": "Clay County, TX",
            "value": 3.8
        }, {
            "fips_code": 48079,
            "state": "TX",
            "area_name": "Cochran County, TX",
            "value": 4.8
        }, {
            "fips_code": 48081,
            "state": "TX",
            "area_name": "Coke County, TX",
            "value": 3.5
        }, {
            "fips_code": 48083,
            "state": "TX",
            "area_name": "Coleman County, TX",
            "value": 4.3
        }, {
            "fips_code": 48085,
            "state": "TX",
            "area_name": "Collin County, TX",
            "value": 3.2
        }, {
            "fips_code": 48087,
            "state": "TX",
            "area_name": "Collingsworth County, TX",
            "value": 3.5
        }, {
            "fips_code": 48089,
            "state": "TX",
            "area_name": "Colorado County, TX",
            "value": 3.5
        }, {
            "fips_code": 48091,
            "state": "TX",
            "area_name": "Comal County, TX",
            "value": 3.5
        }, {
            "fips_code": 48093,
            "state": "TX",
            "area_name": "Comanche County, TX",
            "value": 3.5
        }, {
            "fips_code": 48095,
            "state": "TX",
            "area_name": "Concho County, TX",
            "value": 3.1
        }, {
            "fips_code": 48097,
            "state": "TX",
            "area_name": "Cooke County, TX",
            "value": 3.4
        }, {
            "fips_code": 48099,
            "state": "TX",
            "area_name": "Coryell County, TX",
            "value": 4.5
        }, {
            "fips_code": 48101,
            "state": "TX",
            "area_name": "Cottle County, TX",
            "value": 2.7
        }, {
            "fips_code": 48103,
            "state": "TX",
            "area_name": "Crane County, TX",
            "value": 5.0
        }, {
            "fips_code": 48105,
            "state": "TX",
            "area_name": "Crockett County, TX",
            "value": 4.0
        }, {
            "fips_code": 48107,
            "state": "TX",
            "area_name": "Crosby County, TX",
            "value": 4.1
        }, {
            "fips_code": 48109,
            "state": "TX",
            "area_name": "Culberson County, TX",
            "value": 2.9
        }, {
            "fips_code": 48111,
            "state": "TX",
            "area_name": "Dallam County, TX",
            "value": 2.4
        }, {
            "fips_code": 48113,
            "state": "TX",
            "area_name": "Dallas County, TX",
            "value": 3.7
        }, {
            "fips_code": 48115,
            "state": "TX",
            "area_name": "Dawson County, TX",
            "value": 4.4
        }, {
            "fips_code": 48117,
            "state": "TX",
            "area_name": "Deaf Smith County, TX",
            "value": 3.0
        }, {
            "fips_code": 48119,
            "state": "TX",
            "area_name": "Delta County, TX",
            "value": 4.0
        }, {
            "fips_code": 48121,
            "state": "TX",
            "area_name": "Denton County, TX",
            "value": 3.2
        }, {
            "fips_code": 48123,
            "state": "TX",
            "area_name": "DeWitt County, TX",
            "value": 3.4
        }, {
            "fips_code": 48125,
            "state": "TX",
            "area_name": "Dickens County, TX",
            "value": 4.8
        }, {
            "fips_code": 48127,
            "state": "TX",
            "area_name": "Dimmit County, TX",
            "value": 3.8
        }, {
            "fips_code": 48129,
            "state": "TX",
            "area_name": "Donley County, TX",
            "value": 3.6
        }, {
            "fips_code": 48131,
            "state": "TX",
            "area_name": "Duval County, TX",
            "value": 4.5
        }, {
            "fips_code": 48133,
            "state": "TX",
            "area_name": "Eastland County, TX",
            "value": 4.6
        }, {
            "fips_code": 48135,
            "state": "TX",
            "area_name": "Ector County, TX",
            "value": 3.9
        }, {
            "fips_code": 48137,
            "state": "TX",
            "area_name": "Edwards County, TX",
            "value": 2.8
        }, {
            "fips_code": 48139,
            "state": "TX",
            "area_name": "Ellis County, TX",
            "value": 3.5
        }, {
            "fips_code": 48141,
            "state": "TX",
            "area_name": "El Paso County, TX",
            "value": 4.3
        }, {
            "fips_code": 48143,
            "state": "TX",
            "area_name": "Erath County, TX",
            "value": 3.5
        }, {
            "fips_code": 48145,
            "state": "TX",
            "area_name": "Falls County, TX",
            "value": 4.1
        }, {
            "fips_code": 48147,
            "state": "TX",
            "area_name": "Fannin County, TX",
            "value": 3.5
        }, {
            "fips_code": 48149,
            "state": "TX",
            "area_name": "Fayette County, TX",
            "value": 3.5
        }, {
            "fips_code": 48151,
            "state": "TX",
            "area_name": "Fisher County, TX",
            "value": 3.5
        }, {
            "fips_code": 48153,
            "state": "TX",
            "area_name": "Floyd County, TX",
            "value": 4.1
        }, {
            "fips_code": 48155,
            "state": "TX",
            "area_name": "Foard County, TX",
            "value": 3.2
        }, {
            "fips_code": 48157,
            "state": "TX",
            "area_name": "Fort Bend County, TX",
            "value": 3.9
        }, {
            "fips_code": 48159,
            "state": "TX",
            "area_name": "Franklin County, TX",
            "value": 3.2
        }, {
            "fips_code": 48161,
            "state": "TX",
            "area_name": "Freestone County, TX",
            "value": 5.3
        }, {
            "fips_code": 48163,
            "state": "TX",
            "area_name": "Frio County, TX",
            "value": 3.4
        }, {
            "fips_code": 48165,
            "state": "TX",
            "area_name": "Gaines County, TX",
            "value": 3.0
        }, {
            "fips_code": 48167,
            "state": "TX",
            "area_name": "Galveston County, TX",
            "value": 4.4
        }, {
            "fips_code": 48169,
            "state": "TX",
            "area_name": "Garza County, TX",
            "value": 4.1
        }, {
            "fips_code": 48171,
            "state": "TX",
            "area_name": "Gillespie County, TX",
            "value": 2.6
        }, {
            "fips_code": 48173,
            "state": "TX",
            "area_name": "Glasscock County, TX",
            "value": 2.6
        }, {
            "fips_code": 48175,
            "state": "TX",
            "area_name": "Goliad County, TX",
            "value": 4.4
        }, {
            "fips_code": 48177,
            "state": "TX",
            "area_name": "Gonzales County, TX",
            "value": 3.2
        }, {
            "fips_code": 48179,
            "state": "TX",
            "area_name": "Gray County, TX",
            "value": 4.5
        }, {
            "fips_code": 48181,
            "state": "TX",
            "area_name": "Grayson County, TX",
            "value": 3.7
        }, {
            "fips_code": 48183,
            "state": "TX",
            "area_name": "Gregg County, TX",
            "value": 4.2
        }, {
            "fips_code": 48185,
            "state": "TX",
            "area_name": "Grimes County, TX",
            "value": 4.5
        }, {
            "fips_code": 48187,
            "state": "TX",
            "area_name": "Guadalupe County, TX",
            "value": 3.4
        }, {
            "fips_code": 48189,
            "state": "TX",
            "area_name": "Hale County, TX",
            "value": 4.9
        }, {
            "fips_code": 48191,
            "state": "TX",
            "area_name": "Hall County, TX",
            "value": 4.2
        }, {
            "fips_code": 48193,
            "state": "TX",
            "area_name": "Hamilton County, TX",
            "value": 3.4
        }, {
            "fips_code": 48195,
            "state": "TX",
            "area_name": "Hansford County, TX",
            "value": 2.4
        }, {
            "fips_code": 48197,
            "state": "TX",
            "area_name": "Hardeman County, TX",
            "value": 3.5
        }, {
            "fips_code": 48199,
            "state": "TX",
            "area_name": "Hardin County, TX",
            "value": 5.2
        }, {
            "fips_code": 48201,
            "state": "TX",
            "area_name": "Harris County, TX",
            "value": 4.2
        }, {
            "fips_code": 48203,
            "state": "TX",
            "area_name": "Harrison County, TX",
            "value": 4.5
        }, {
            "fips_code": 48205,
            "state": "TX",
            "area_name": "Hartley County, TX",
            "value": 2.0
        }, {
            "fips_code": 48207,
            "state": "TX",
            "area_name": "Haskell County, TX",
            "value": 3.0
        }, {
            "fips_code": 48209,
            "state": "TX",
            "area_name": "Hays County, TX",
            "value": 3.0
        }, {
            "fips_code": 48211,
            "state": "TX",
            "area_name": "Hemphill County, TX",
            "value": 3.3
        }, {
            "fips_code": 48213,
            "state": "TX",
            "area_name": "Henderson County, TX",
            "value": 3.8
        }, {
            "fips_code": 48215,
            "state": "TX",
            "area_name": "Hidalgo County, TX",
            "value": 6.5
        }, {
            "fips_code": 48217,
            "state": "TX",
            "area_name": "Hill County, TX",
            "value": 3.9
        }, {
            "fips_code": 48219,
            "state": "TX",
            "area_name": "Hockley County, TX",
            "value": 3.7
        }, {
            "fips_code": 48221,
            "state": "TX",
            "area_name": "Hood County, TX",
            "value": 3.7
        }, {
            "fips_code": 48223,
            "state": "TX",
            "area_name": "Hopkins County, TX",
            "value": 3.5
        }, {
            "fips_code": 48225,
            "state": "TX",
            "area_name": "Houston County, TX",
            "value": 3.6
        }, {
            "fips_code": 48227,
            "state": "TX",
            "area_name": "Howard County, TX",
            "value": 5.1
        }, {
            "fips_code": 48229,
            "state": "TX",
            "area_name": "Hudspeth County, TX",
            "value": 4.0
        }, {
            "fips_code": 48231,
            "state": "TX",
            "area_name": "Hunt County, TX",
            "value": 3.9
        }, {
            "fips_code": 48233,
            "state": "TX",
            "area_name": "Hutchinson County, TX",
            "value": 4.5
        }, {
            "fips_code": 48235,
            "state": "TX",
            "area_name": "Irion County, TX",
            "value": 3.0
        }, {
            "fips_code": 48237,
            "state": "TX",
            "area_name": "Jack County, TX",
            "value": 3.8
        }, {
            "fips_code": 48239,
            "state": "TX",
            "area_name": "Jackson County, TX",
            "value": 3.5
        }, {
            "fips_code": 48241,
            "state": "TX",
            "area_name": "Jasper County, TX",
            "value": 6.4
        }, {
            "fips_code": 48243,
            "state": "TX",
            "area_name": "Jeff Davis County, TX",
            "value": 3.4
        }, {
            "fips_code": 48245,
            "state": "TX",
            "area_name": "Jefferson County, TX",
            "value": 6.2
        }, {
            "fips_code": 48247,
            "state": "TX",
            "area_name": "Jim Hogg County, TX",
            "value": 5.4
        }, {
            "fips_code": 48249,
            "state": "TX",
            "area_name": "Jim Wells County, TX",
            "value": 5.7
        }, {
            "fips_code": 48251,
            "state": "TX",
            "area_name": "Johnson County, TX",
            "value": 3.5
        }, {
            "fips_code": 48253,
            "state": "TX",
            "area_name": "Jones County, TX",
            "value": 4.3
        }, {
            "fips_code": 48255,
            "state": "TX",
            "area_name": "Karnes County, TX",
            "value": 3.3
        }, {
            "fips_code": 48257,
            "state": "TX",
            "area_name": "Kaufman County, TX",
            "value": 3.7
        }, {
            "fips_code": 48259,
            "state": "TX",
            "area_name": "Kendall County, TX",
            "value": 3.1
        }, {
            "fips_code": 48261,
            "state": "TX",
            "area_name": "Kenedy County, TX",
            "value": 6.1
        }, {
            "fips_code": 48263,
            "state": "TX",
            "area_name": "Kent County, TX",
            "value": 2.1
        }, {
            "fips_code": 48265,
            "state": "TX",
            "area_name": "Kerr County, TX",
            "value": 3.6
        }, {
            "fips_code": 48267,
            "state": "TX",
            "area_name": "Kimble County, TX",
            "value": 3.4
        }, {
            "fips_code": 48269,
            "state": "TX",
            "area_name": "King County, TX",
            "value": 0.9
        }, {
            "fips_code": 48271,
            "state": "TX",
            "area_name": "Kinney County, TX",
            "value": 4.7
        }, {
            "fips_code": 48273,
            "state": "TX",
            "area_name": "Kleberg County, TX",
            "value": 4.8
        }, {
            "fips_code": 48275,
            "state": "TX",
            "area_name": "Knox County, TX",
            "value": 3.9
        }, {
            "fips_code": 48277,
            "state": "TX",
            "area_name": "Lamar County, TX",
            "value": 4.3
        }, {
            "fips_code": 48279,
            "state": "TX",
            "area_name": "Lamb County, TX",
            "value": 4.0
        }, {
            "fips_code": 48281,
            "state": "TX",
            "area_name": "Lampasas County, TX",
            "value": 3.7
        }, {
            "fips_code": 48283,
            "state": "TX",
            "area_name": "La Salle County, TX",
            "value": 2.8
        }, {
            "fips_code": 48285,
            "state": "TX",
            "area_name": "Lavaca County, TX",
            "value": 3.3
        }, {
            "fips_code": 48287,
            "state": "TX",
            "area_name": "Lee County, TX",
            "value": 3.5
        }, {
            "fips_code": 48289,
            "state": "TX",
            "area_name": "Leon County, TX",
            "value": 5.2
        }, {
            "fips_code": 48291,
            "state": "TX",
            "area_name": "Liberty County, TX",
            "value": 5.8
        }, {
            "fips_code": 48293,
            "state": "TX",
            "area_name": "Limestone County, TX",
            "value": 4.6
        }, {
            "fips_code": 48295,
            "state": "TX",
            "area_name": "Lipscomb County, TX",
            "value": 3.1
        }, {
            "fips_code": 48297,
            "state": "TX",
            "area_name": "Live Oak County, TX",
            "value": 4.2
        }, {
            "fips_code": 48299,
            "state": "TX",
            "area_name": "Llano County, TX",
            "value": 3.8
        }, {
            "fips_code": 48301,
            "state": "TX",
            "area_name": "Loving County, TX",
            "value": 0.6
        }, {
            "fips_code": 48303,
            "state": "TX",
            "area_name": "Lubbock County, TX",
            "value": 3.4
        }, {
            "fips_code": 48305,
            "state": "TX",
            "area_name": "Lynn County, TX",
            "value": 3.5
        }, {
            "fips_code": 48307,
            "state": "TX",
            "area_name": "McCulloch County, TX",
            "value": 4.2
        }, {
            "fips_code": 48309,
            "state": "TX",
            "area_name": "McLennan County, TX",
            "value": 3.6
        }, {
            "fips_code": 48311,
            "state": "TX",
            "area_name": "McMullen County, TX",
            "value": 1.8
        }, {
            "fips_code": 48313,
            "state": "TX",
            "area_name": "Madison County, TX",
            "value": 4.3
        }, {
            "fips_code": 48315,
            "state": "TX",
            "area_name": "Marion County, TX",
            "value": 5.0
        }, {
            "fips_code": 48317,
            "state": "TX",
            "area_name": "Martin County, TX",
            "value": 3.1
        }, {
            "fips_code": 48319,
            "state": "TX",
            "area_name": "Mason County, TX",
            "value": 3.3
        }, {
            "fips_code": 48321,
            "state": "TX",
            "area_name": "Matagorda County, TX",
            "value": 5.9
        }, {
            "fips_code": 48323,
            "state": "TX",
            "area_name": "Maverick County, TX",
            "value": 7.9
        }, {
            "fips_code": 48325,
            "state": "TX",
            "area_name": "Medina County, TX",
            "value": 3.8
        }, {
            "fips_code": 48327,
            "state": "TX",
            "area_name": "Menard County, TX",
            "value": 3.8
        }, {
            "fips_code": 48329,
            "state": "TX",
            "area_name": "Midland County, TX",
            "value": 2.9
        }, {
            "fips_code": 48331,
            "state": "TX",
            "area_name": "Milam County, TX",
            "value": 4.3
        }, {
            "fips_code": 48333,
            "state": "TX",
            "area_name": "Mills County, TX",
            "value": 4.2
        }, {
            "fips_code": 48335,
            "state": "TX",
            "area_name": "Mitchell County, TX",
            "value": 4.4
        }, {
            "fips_code": 48337,
            "state": "TX",
            "area_name": "Montague County, TX",
            "value": 3.6
        }, {
            "fips_code": 48339,
            "state": "TX",
            "area_name": "Montgomery County, TX",
            "value": 3.9
        }, {
            "fips_code": 48341,
            "state": "TX",
            "area_name": "Moore County, TX",
            "value": 2.6
        }, {
            "fips_code": 48343,
            "state": "TX",
            "area_name": "Morris County, TX",
            "value": 6.3
        }, {
            "fips_code": 48345,
            "state": "TX",
            "area_name": "Motley County, TX",
            "value": 4.1
        }, {
            "fips_code": 48347,
            "state": "TX",
            "area_name": "Nacogdoches County, TX",
            "value": 4.3
        }, {
            "fips_code": 48349,
            "state": "TX",
            "area_name": "Navarro County, TX",
            "value": 3.9
        }, {
            "fips_code": 48351,
            "state": "TX",
            "area_name": "Newton County, TX",
            "value": 6.8
        }, {
            "fips_code": 48353,
            "state": "TX",
            "area_name": "Nolan County, TX",
            "value": 3.7
        }, {
            "fips_code": 48355,
            "state": "TX",
            "area_name": "Nueces County, TX",
            "value": 4.7
        }, {
            "fips_code": 48357,
            "state": "TX",
            "area_name": "Ochiltree County, TX",
            "value": 3.4
        }, {
            "fips_code": 48359,
            "state": "TX",
            "area_name": "Oldham County, TX",
            "value": 3.0
        }, {
            "fips_code": 48361,
            "state": "TX",
            "area_name": "Orange County, TX",
            "value": 5.7
        }, {
            "fips_code": 48363,
            "state": "TX",
            "area_name": "Palo Pinto County, TX",
            "value": 3.8
        }, {
            "fips_code": 48365,
            "state": "TX",
            "area_name": "Panola County, TX",
            "value": 4.6
        }, {
            "fips_code": 48367,
            "state": "TX",
            "area_name": "Parker County, TX",
            "value": 3.3
        }, {
            "fips_code": 48369,
            "state": "TX",
            "area_name": "Parmer County, TX",
            "value": 2.4
        }, {
            "fips_code": 48371,
            "state": "TX",
            "area_name": "Pecos County, TX",
            "value": 4.0
        }, {
            "fips_code": 48373,
            "state": "TX",
            "area_name": "Polk County, TX",
            "value": 5.5
        }, {
            "fips_code": 48375,
            "state": "TX",
            "area_name": "Potter County, TX",
            "value": 3.2
        }, {
            "fips_code": 48377,
            "state": "TX",
            "area_name": "Presidio County, TX",
            "value": 6.2
        }, {
            "fips_code": 48379,
            "state": "TX",
            "area_name": "Rains County, TX",
            "value": 3.4
        }, {
            "fips_code": 48381,
            "state": "TX",
            "area_name": "Randall County, TX",
            "value": 2.8
        }, {
            "fips_code": 48383,
            "state": "TX",
            "area_name": "Reagan County, TX",
            "value": 3.5
        }, {
            "fips_code": 48385,
            "state": "TX",
            "area_name": "Real County, TX",
            "value": 4.6
        }, {
            "fips_code": 48387,
            "state": "TX",
            "area_name": "Red River County, TX",
            "value": 5.1
        }, {
            "fips_code": 48389,
            "state": "TX",
            "area_name": "Reeves County, TX",
            "value": 3.4
        }, {
            "fips_code": 48391,
            "state": "TX",
            "area_name": "Refugio County, TX",
            "value": 4.7
        }, {
            "fips_code": 48393,
            "state": "TX",
            "area_name": "Roberts County, TX",
            "value": 3.8
        }, {
            "fips_code": 48395,
            "state": "TX",
            "area_name": "Robertson County, TX",
            "value": 3.8
        }, {
            "fips_code": 48397,
            "state": "TX",
            "area_name": "Rockwall County, TX",
            "value": 3.3
        }, {
            "fips_code": 48399,
            "state": "TX",
            "area_name": "Runnels County, TX",
            "value": 3.3
        }, {
            "fips_code": 48401,
            "state": "TX",
            "area_name": "Rusk County, TX",
            "value": 4.2
        }, {
            "fips_code": 48403,
            "state": "TX",
            "area_name": "Sabine County, TX",
            "value": 7.0
        }, {
            "fips_code": 48405,
            "state": "TX",
            "area_name": "San Augustine County, TX",
            "value": 5.8
        }, {
            "fips_code": 48407,
            "state": "TX",
            "area_name": "San Jacinto County, TX",
            "value": 4.8
        }, {
            "fips_code": 48409,
            "state": "TX",
            "area_name": "San Patricio County, TX",
            "value": 6.0
        }, {
            "fips_code": 48411,
            "state": "TX",
            "area_name": "San Saba County, TX",
            "value": 3.5
        }, {
            "fips_code": 48413,
            "state": "TX",
            "area_name": "Schleicher County, TX",
            "value": 3.5
        }, {
            "fips_code": 48415,
            "state": "TX",
            "area_name": "Scurry County, TX",
            "value": 4.1
        }, {
            "fips_code": 48417,
            "state": "TX",
            "area_name": "Shackelford County, TX",
            "value": 2.7
        }, {
            "fips_code": 48419,
            "state": "TX",
            "area_name": "Shelby County, TX",
            "value": 4.2
        }, {
            "fips_code": 48421,
            "state": "TX",
            "area_name": "Sherman County, TX",
            "value": 2.8
        }, {
            "fips_code": 48423,
            "state": "TX",
            "area_name": "Smith County, TX",
            "value": 3.7
        }, {
            "fips_code": 48425,
            "state": "TX",
            "area_name": "Somervell County, TX",
            "value": 3.8
        }, {
            "fips_code": 48427,
            "state": "TX",
            "area_name": "Starr County, TX",
            "value": 11.0
        }, {
            "fips_code": 48429,
            "state": "TX",
            "area_name": "Stephens County, TX",
            "value": 3.7
        }, {
            "fips_code": 48431,
            "state": "TX",
            "area_name": "Sterling County, TX",
            "value": 4.0
        }, {
            "fips_code": 48433,
            "state": "TX",
            "area_name": "Stonewall County, TX",
            "value": 3.0
        }, {
            "fips_code": 48435,
            "state": "TX",
            "area_name": "Sutton County, TX",
            "value": 5.7
        }, {
            "fips_code": 48437,
            "state": "TX",
            "area_name": "Swisher County, TX",
            "value": 4.0
        }, {
            "fips_code": 48439,
            "state": "TX",
            "area_name": "Tarrant County, TX",
            "value": 3.6
        }, {
            "fips_code": 48441,
            "state": "TX",
            "area_name": "Taylor County, TX",
            "value": 3.3
        }, {
            "fips_code": 48443,
            "state": "TX",
            "area_name": "Terrell County, TX",
            "value": 3.4
        }, {
            "fips_code": 48445,
            "state": "TX",
            "area_name": "Terry County, TX",
            "value": 4.1
        }, {
            "fips_code": 48447,
            "state": "TX",
            "area_name": "Throckmorton County, TX",
            "value": 3.1
        }, {
            "fips_code": 48449,
            "state": "TX",
            "area_name": "Titus County, TX",
            "value": 4.3
        }, {
            "fips_code": 48451,
            "state": "TX",
            "area_name": "Tom Green County, TX",
            "value": 3.4
        }, {
            "fips_code": 48453,
            "state": "TX",
            "area_name": "Travis County, TX",
            "value": 2.8
        }, {
            "fips_code": 48455,
            "state": "TX",
            "area_name": "Trinity County, TX",
            "value": 5.2
        }, {
            "fips_code": 48457,
            "state": "TX",
            "area_name": "Tyler County, TX",
            "value": 6.0
        }, {
            "fips_code": 48459,
            "state": "TX",
            "area_name": "Upshur County, TX",
            "value": 4.3
        }, {
            "fips_code": 48461,
            "state": "TX",
            "area_name": "Upton County, TX",
            "value": 2.7
        }, {
            "fips_code": 48463,
            "state": "TX",
            "area_name": "Uvalde County, TX",
            "value": 4.4
        }, {
            "fips_code": 48465,
            "state": "TX",
            "area_name": "Val Verde County, TX",
            "value": 4.5
        }, {
            "fips_code": 48467,
            "state": "TX",
            "area_name": "Van Zandt County, TX",
            "value": 3.5
        }, {
            "fips_code": 48469,
            "state": "TX",
            "area_name": "Victoria County, TX",
            "value": 4.2
        }, {
            "fips_code": 48471,
            "state": "TX",
            "area_name": "Walker County, TX",
            "value": 4.7
        }, {
            "fips_code": 48473,
            "state": "TX",
            "area_name": "Waller County, TX",
            "value": 4.3
        }, {
            "fips_code": 48475,
            "state": "TX",
            "area_name": "Ward County, TX",
            "value": 3.7
        }, {
            "fips_code": 48477,
            "state": "TX",
            "area_name": "Washington County, TX",
            "value": 4.0
        }, {
            "fips_code": 48479,
            "state": "TX",
            "area_name": "Webb County, TX",
            "value": 4.1
        }, {
            "fips_code": 48481,
            "state": "TX",
            "area_name": "Wharton County, TX",
            "value": 3.8
        }, {
            "fips_code": 48483,
            "state": "TX",
            "area_name": "Wheeler County, TX",
            "value": 3.9
        }, {
            "fips_code": 48485,
            "state": "TX",
            "area_name": "Wichita County, TX",
            "value": 3.9
        }, {
            "fips_code": 48487,
            "state": "TX",
            "area_name": "Wilbarger County, TX",
            "value": 4.9
        }, {
            "fips_code": 48489,
            "state": "TX",
            "area_name": "Willacy County, TX",
            "value": 8.199999999999999
        }, {
            "fips_code": 48491,
            "state": "TX",
            "area_name": "Williamson County, TX",
            "value": 2.9
        }, {
            "fips_code": 48493,
            "state": "TX",
            "area_name": "Wilson County, TX",
            "value": 3.3
        }, {
            "fips_code": 48495,
            "state": "TX",
            "area_name": "Winkler County, TX",
            "value": 3.9
        }, {
            "fips_code": 48497,
            "state": "TX",
            "area_name": "Wise County, TX",
            "value": 3.5
        }, {
            "fips_code": 48499,
            "state": "TX",
            "area_name": "Wood County, TX",
            "value": 4.5
        }, {
            "fips_code": 48501,
            "state": "TX",
            "area_name": "Yoakum County, TX",
            "value": 4.0
        }, {
            "fips_code": 48503,
            "state": "TX",
            "area_name": "Young County, TX",
            "value": 3.4
        }, {
            "fips_code": 48505,
            "state": "TX",
            "area_name": "Zapata County, TX",
            "value": 6.9
        }, {
            "fips_code": 48507,
            "state": "TX",
            "area_name": "Zavala County, TX",
            "value": 8.6
        }, {
            "fips_code": 49000,
            "state": "UT",
            "area_name": "Utah",
            "value": 2.3
        }, {
            "fips_code": 49001,
            "state": "UT",
            "area_name": "Beaver County, UT",
            "value": 2.7
        }, {
            "fips_code": 49003,
            "state": "UT",
            "area_name": "Box Elder County, UT",
            "value": 2.3
        }, {
            "fips_code": 49005,
            "state": "UT",
            "area_name": "Cache County, UT",
            "value": 2.0
        }, {
            "fips_code": 49007,
            "state": "UT",
            "area_name": "Carbon County, UT",
            "value": 3.5
        }, {
            "fips_code": 49009,
            "state": "UT",
            "area_name": "Daggett County, UT",
            "value": 4.5
        }, {
            "fips_code": 49011,
            "state": "UT",
            "area_name": "Davis County, UT",
            "value": 2.2
        }, {
            "fips_code": 49013,
            "state": "UT",
            "area_name": "Duchesne County, UT",
            "value": 3.2
        }, {
            "fips_code": 49015,
            "state": "UT",
            "area_name": "Emery County, UT",
            "value": 3.3
        }, {
            "fips_code": 49017,
            "state": "UT",
            "area_name": "Garfield County, UT",
            "value": 5.9
        }, {
            "fips_code": 49019,
            "state": "UT",
            "area_name": "Grand County, UT",
            "value": 3.2
        }, {
            "fips_code": 49021,
            "state": "UT",
            "area_name": "Iron County, UT",
            "value": 2.4
        }, {
            "fips_code": 49023,
            "state": "UT",
            "area_name": "Juab County, UT",
            "value": 2.0
        }, {
            "fips_code": 49025,
            "state": "UT",
            "area_name": "Kane County, UT",
            "value": 2.5
        }, {
            "fips_code": 49027,
            "state": "UT",
            "area_name": "Millard County, UT",
            "value": 2.3
        }, {
            "fips_code": 49029,
            "state": "UT",
            "area_name": "Morgan County, UT",
            "value": 2.0
        }, {
            "fips_code": 49031,
            "state": "UT",
            "area_name": "Piute County, UT",
            "value": 4.1
        }, {
            "fips_code": 49033,
            "state": "UT",
            "area_name": "Rich County, UT",
            "value": 2.5
        }, {
            "fips_code": 49035,
            "state": "UT",
            "area_name": "Salt Lake County, UT",
            "value": 2.3
        }, {
            "fips_code": 49037,
            "state": "UT",
            "area_name": "San Juan County, UT",
            "value": 4.4
        }, {
            "fips_code": 49039,
            "state": "UT",
            "area_name": "Sanpete County, UT",
            "value": 2.7
        }, {
            "fips_code": 49041,
            "state": "UT",
            "area_name": "Sevier County, UT",
            "value": 2.8
        }, {
            "fips_code": 49043,
            "state": "UT",
            "area_name": "Summit County, UT",
            "value": 2.1
        }, {
            "fips_code": 49045,
            "state": "UT",
            "area_name": "Tooele County, UT",
            "value": 2.5
        }, {
            "fips_code": 49047,
            "state": "UT",
            "area_name": "Uintah County, UT",
            "value": 3.6
        }, {
            "fips_code": 49049,
            "state": "UT",
            "area_name": "Utah County, UT",
            "value": 2.1
        }, {
            "fips_code": 49051,
            "state": "UT",
            "area_name": "Wasatch County, UT",
            "value": 2.3
        }, {
            "fips_code": 49053,
            "state": "UT",
            "area_name": "Washington County, UT",
            "value": 2.5
        }, {
            "fips_code": 49055,
            "state": "UT",
            "area_name": "Wayne County, UT",
            "value": 4.4
        }, {
            "fips_code": 49057,
            "state": "UT",
            "area_name": "Weber County, UT",
            "value": 2.5
        }, {
            "fips_code": 50000,
            "state": "VT",
            "area_name": "Vermont",
            "value": 2.6
        }, {
            "fips_code": 50001,
            "state": "VT",
            "area_name": "Addison County, VT",
            "value": 2.4
        }, {
            "fips_code": 50003,
            "state": "VT",
            "area_name": "Bennington County, VT",
            "value": 3.2
        }, {
            "fips_code": 50005,
            "state": "VT",
            "area_name": "Caledonia County, VT",
            "value": 3.1
        }, {
            "fips_code": 50007,
            "state": "VT",
            "area_name": "Chittenden County, VT",
            "value": 2.1
        }, {
            "fips_code": 50009,
            "state": "VT",
            "area_name": "Essex County, VT",
            "value": 4.0
        }, {
            "fips_code": 50011,
            "state": "VT",
            "area_name": "Franklin County, VT",
            "value": 2.6
        }, {
            "fips_code": 50013,
            "state": "VT",
            "area_name": "Grand Isle County, VT",
            "value": 3.3
        }, {
            "fips_code": 50015,
            "state": "VT",
            "area_name": "Lamoille County, VT",
            "value": 3.4
        }, {
            "fips_code": 50017,
            "state": "VT",
            "area_name": "Orange County, VT",
            "value": 2.6
        }, {
            "fips_code": 50019,
            "state": "VT",
            "area_name": "Orleans County, VT",
            "value": 4.4
        }, {
            "fips_code": 50021,
            "state": "VT",
            "area_name": "Rutland County, VT",
            "value": 3.3
        }, {
            "fips_code": 50023,
            "state": "VT",
            "area_name": "Washington County, VT",
            "value": 2.4
        }, {
            "fips_code": 50025,
            "state": "VT",
            "area_name": "Windham County, VT",
            "value": 2.9
        }, {
            "fips_code": 50027,
            "state": "VT",
            "area_name": "Windsor County, VT",
            "value": 2.2
        }, {
            "fips_code": 51000,
            "state": "VA",
            "area_name": "Virginia",
            "value": 2.9
        }, {
            "fips_code": 51001,
            "state": "VA",
            "area_name": "Accomack County, VA",
            "value": 3.3
        }, {
            "fips_code": 51003,
            "state": "VA",
            "area_name": "Albemarle County, VA",
            "value": 2.7
        }, {
            "fips_code": 51005,
            "state": "VA",
            "area_name": "Alleghany County, VA",
            "value": 3.3
        }, {
            "fips_code": 51007,
            "state": "VA",
            "area_name": "Amelia County, VA",
            "value": 2.9
        }, {
            "fips_code": 51009,
            "state": "VA",
            "area_name": "Amherst County, VA",
            "value": 3.1
        }, {
            "fips_code": 51011,
            "state": "VA",
            "area_name": "Appomattox County, VA",
            "value": 3.2
        }, {
            "fips_code": 51013,
            "state": "VA",
            "area_name": "Arlington County, VA",
            "value": 2.1
        }, {
            "fips_code": 51015,
            "state": "VA",
            "area_name": "Augusta County, VA",
            "value": 2.6
        }, {
            "fips_code": 51017,
            "state": "VA",
            "area_name": "Bath County, VA",
            "value": 2.5
        }, {
            "fips_code": 51019,
            "state": "VA",
            "area_name": "Bedford County, VA",
            "value": 2.9
        }, {
            "fips_code": 51021,
            "state": "VA",
            "area_name": "Bland County, VA",
            "value": 2.9
        }, {
            "fips_code": 51023,
            "state": "VA",
            "area_name": "Botetourt County, VA",
            "value": 2.6
        }, {
            "fips_code": 51025,
            "state": "VA",
            "area_name": "Brunswick County, VA",
            "value": 4.6
        }, {
            "fips_code": 51027,
            "state": "VA",
            "area_name": "Buchanan County, VA",
            "value": 4.7
        }, {
            "fips_code": 51029,
            "state": "VA",
            "area_name": "Buckingham County, VA",
            "value": 3.9
        }, {
            "fips_code": 51031,
            "state": "VA",
            "area_name": "Campbell County, VA",
            "value": 3.1
        }, {
            "fips_code": 51033,
            "state": "VA",
            "area_name": "Caroline County, VA",
            "value": 3.2
        }, {
            "fips_code": 51035,
            "state": "VA",
            "area_name": "Carroll County, VA",
            "value": 3.5
        }, {
            "fips_code": 51036,
            "state": "VA",
            "area_name": "Charles City County, VA",
            "value": 3.1
        }, {
            "fips_code": 51037,
            "state": "VA",
            "area_name": "Charlotte County, VA",
            "value": 3.0
        }, {
            "fips_code": 51041,
            "state": "VA",
            "area_name": "Chesterfield County, VA",
            "value": 2.8
        }, {
            "fips_code": 51043,
            "state": "VA",
            "area_name": "Clarke County, VA",
            "value": 2.5
        }, {
            "fips_code": 51045,
            "state": "VA",
            "area_name": "Craig County, VA",
            "value": 3.0
        }, {
            "fips_code": 51047,
            "state": "VA",
            "area_name": "Culpeper County, VA",
            "value": 2.8
        }, {
            "fips_code": 51049,
            "state": "VA",
            "area_name": "Cumberland County, VA",
            "value": 3.4
        }, {
            "fips_code": 51051,
            "state": "VA",
            "area_name": "Dickenson County, VA",
            "value": 4.4
        }, {
            "fips_code": 51053,
            "state": "VA",
            "area_name": "Dinwiddie County, VA",
            "value": 3.3
        }, {
            "fips_code": 51057,
            "state": "VA",
            "area_name": "Essex County, VA",
            "value": 3.4
        }, {
            "fips_code": 51059,
            "state": "VA",
            "area_name": "Fairfax County, VA",
            "value": 2.5
        }, {
            "fips_code": 51061,
            "state": "VA",
            "area_name": "Fauquier County, VA",
            "value": 2.6
        }, {
            "fips_code": 51063,
            "state": "VA",
            "area_name": "Floyd County, VA",
            "value": 2.5
        }, {
            "fips_code": 51065,
            "state": "VA",
            "area_name": "Fluvanna County, VA",
            "value": 2.6
        }, {
            "fips_code": 51067,
            "state": "VA",
            "area_name": "Franklin County, VA",
            "value": 2.9
        }, {
            "fips_code": 51069,
            "state": "VA",
            "area_name": "Frederick County, VA",
            "value": 2.4
        }, {
            "fips_code": 51071,
            "state": "VA",
            "area_name": "Giles County, VA",
            "value": 3.1
        }, {
            "fips_code": 51073,
            "state": "VA",
            "area_name": "Gloucester County, VA",
            "value": 2.7
        }, {
            "fips_code": 51075,
            "state": "VA",
            "area_name": "Goochland County, VA",
            "value": 2.7
        }, {
            "fips_code": 51077,
            "state": "VA",
            "area_name": "Grayson County, VA",
            "value": 2.6
        }, {
            "fips_code": 51079,
            "state": "VA",
            "area_name": "Greene County, VA",
            "value": 2.4
        }, {
            "fips_code": 51081,
            "state": "VA",
            "area_name": "Greensville County, VA",
            "value": 3.8
        }, {
            "fips_code": 51083,
            "state": "VA",
            "area_name": "Halifax County, VA",
            "value": 3.9
        }, {
            "fips_code": 51085,
            "state": "VA",
            "area_name": "Hanover County, VA",
            "value": 2.4
        }, {
            "fips_code": 51087,
            "state": "VA",
            "area_name": "Henrico County, VA",
            "value": 2.8
        }, {
            "fips_code": 51089,
            "state": "VA",
            "area_name": "Henry County, VA",
            "value": 3.4
        }, {
            "fips_code": 51091,
            "state": "VA",
            "area_name": "Highland County, VA",
            "value": 2.3
        }, {
            "fips_code": 51093,
            "state": "VA",
            "area_name": "Isle of Wight County, VA",
            "value": 2.8
        }, {
            "fips_code": 51095,
            "state": "VA",
            "area_name": "James City County, VA",
            "value": 2.9
        }, {
            "fips_code": 51097,
            "state": "VA",
            "area_name": "King and Queen County, VA",
            "value": 2.6
        }, {
            "fips_code": 51099,
            "state": "VA",
            "area_name": "King George County, VA",
            "value": 2.6
        }, {
            "fips_code": 51101,
            "state": "VA",
            "area_name": "King William County, VA",
            "value": 2.7
        }, {
            "fips_code": 51103,
            "state": "VA",
            "area_name": "Lancaster County, VA",
            "value": 3.6
        }, {
            "fips_code": 51105,
            "state": "VA",
            "area_name": "Lee County, VA",
            "value": 3.8
        }, {
            "fips_code": 51107,
            "state": "VA",
            "area_name": "Loudoun County, VA",
            "value": 2.4
        }, {
            "fips_code": 51109,
            "state": "VA",
            "area_name": "Louisa County, VA",
            "value": 2.7
        }, {
            "fips_code": 51111,
            "state": "VA",
            "area_name": "Lunenburg County, VA",
            "value": 3.4
        }, {
            "fips_code": 51113,
            "state": "VA",
            "area_name": "Madison County, VA",
            "value": 2.2
        }, {
            "fips_code": 51115,
            "state": "VA",
            "area_name": "Mathews County, VA",
            "value": 2.9
        }, {
            "fips_code": 51117,
            "state": "VA",
            "area_name": "Mecklenburg County, VA",
            "value": 3.6
        }, {
            "fips_code": 51119,
            "state": "VA",
            "area_name": "Middlesex County, VA",
            "value": 2.7
        }, {
            "fips_code": 51121,
            "state": "VA",
            "area_name": "Montgomery County, VA",
            "value": 2.8
        }, {
            "fips_code": 51125,
            "state": "VA",
            "area_name": "Nelson County, VA",
            "value": 2.8
        }, {
            "fips_code": 51127,
            "state": "VA",
            "area_name": "New Kent County, VA",
            "value": 2.4
        }, {
            "fips_code": 51131,
            "state": "VA",
            "area_name": "Northampton County, VA",
            "value": 3.5
        }, {
            "fips_code": 51133,
            "state": "VA",
            "area_name": "Northumberland County, VA",
            "value": 4.0
        }, {
            "fips_code": 51135,
            "state": "VA",
            "area_name": "Nottoway County, VA",
            "value": 3.1
        }, {
            "fips_code": 51137,
            "state": "VA",
            "area_name": "Orange County, VA",
            "value": 3.0
        }, {
            "fips_code": 51139,
            "state": "VA",
            "area_name": "Page County, VA",
            "value": 3.4
        }, {
            "fips_code": 51141,
            "state": "VA",
            "area_name": "Patrick County, VA",
            "value": 3.6
        }, {
            "fips_code": 51143,
            "state": "VA",
            "area_name": "Pittsylvania County, VA",
            "value": 3.1
        }, {
            "fips_code": 51145,
            "state": "VA",
            "area_name": "Powhatan County, VA",
            "value": 2.5
        }, {
            "fips_code": 51147,
            "state": "VA",
            "area_name": "Prince Edward County, VA",
            "value": 3.9
        }, {
            "fips_code": 51149,
            "state": "VA",
            "area_name": "Prince George County, VA",
            "value": 3.4
        }, {
            "fips_code": 51153,
            "state": "VA",
            "area_name": "Prince William County, VA",
            "value": 2.7
        }, {
            "fips_code": 51155,
            "state": "VA",
            "area_name": "Pulaski County, VA",
            "value": 3.1
        }, {
            "fips_code": 51157,
            "state": "VA",
            "area_name": "Rappahannock County, VA",
            "value": 2.5
        }, {
            "fips_code": 51159,
            "state": "VA",
            "area_name": "Richmond County, VA",
            "value": 2.9
        }, {
            "fips_code": 51161,
            "state": "VA",
            "area_name": "Roanoke County, VA",
            "value": 2.6
        }, {
            "fips_code": 51163,
            "state": "VA",
            "area_name": "Rockbridge County, VA",
            "value": 2.9
        }, {
            "fips_code": 51165,
            "state": "VA",
            "area_name": "Rockingham County, VA",
            "value": 2.6
        }, {
            "fips_code": 51167,
            "state": "VA",
            "area_name": "Russell County, VA",
            "value": 3.6
        }, {
            "fips_code": 51169,
            "state": "VA",
            "area_name": "Scott County, VA",
            "value": 3.2
        }, {
            "fips_code": 51171,
            "state": "VA",
            "area_name": "Shenandoah County, VA",
            "value": 2.8
        }, {
            "fips_code": 51173,
            "state": "VA",
            "area_name": "Smyth County, VA",
            "value": 3.2
        }, {
            "fips_code": 51175,
            "state": "VA",
            "area_name": "Southampton County, VA",
            "value": 2.8
        }, {
            "fips_code": 51177,
            "state": "VA",
            "area_name": "Spotsylvania County, VA",
            "value": 2.9
        }, {
            "fips_code": 51179,
            "state": "VA",
            "area_name": "Stafford County, VA",
            "value": 2.9
        }, {
            "fips_code": 51181,
            "state": "VA",
            "area_name": "Surry County, VA",
            "value": 3.0
        }, {
            "fips_code": 51183,
            "state": "VA",
            "area_name": "Sussex County, VA",
            "value": 4.2
        }, {
            "fips_code": 51185,
            "state": "VA",
            "area_name": "Tazewell County, VA",
            "value": 4.2
        }, {
            "fips_code": 51187,
            "state": "VA",
            "area_name": "Warren County, VA",
            "value": 2.9
        }, {
            "fips_code": 51191,
            "state": "VA",
            "area_name": "Washington County, VA",
            "value": 2.9
        }, {
            "fips_code": 51193,
            "state": "VA",
            "area_name": "Westmoreland County, VA",
            "value": 3.2
        }, {
            "fips_code": 51195,
            "state": "VA",
            "area_name": "Wise County, VA",
            "value": 4.1
        }, {
            "fips_code": 51197,
            "state": "VA",
            "area_name": "Wythe County, VA",
            "value": 3.1
        }, {
            "fips_code": 51199,
            "state": "VA",
            "area_name": "York County, VA",
            "value": 2.8
        }, {
            "fips_code": 51510,
            "state": "VA",
            "area_name": "Alexandria city, VA",
            "value": 2.4
        }, {
            "fips_code": 51520,
            "state": "VA",
            "area_name": "Bristol city, VA",
            "value": 3.4
        }, {
            "fips_code": 51530,
            "state": "VA",
            "area_name": "Buena Vista city, VA",
            "value": 3.1
        }, {
            "fips_code": 51540,
            "state": "VA",
            "area_name": "Charlottesville city, VA",
            "value": 2.6
        }, {
            "fips_code": 51550,
            "state": "VA",
            "area_name": "Chesapeake city, VA",
            "value": 2.9
        }, {
            "fips_code": 51570,
            "state": "VA",
            "area_name": "Colonial Heights city, VA",
            "value": 3.2
        }, {
            "fips_code": 51580,
            "state": "VA",
            "area_name": "Covington city, VA",
            "value": 4.1
        }, {
            "fips_code": 51590,
            "state": "VA",
            "area_name": "Danville city, VA",
            "value": 4.6
        }, {
            "fips_code": 51595,
            "state": "VA",
            "area_name": "Emporia city, VA",
            "value": 4.7
        }, {
            "fips_code": 51600,
            "state": "VA",
            "area_name": "Fairfax city, VA",
            "value": 2.4
        }, {
            "fips_code": 51610,
            "state": "VA",
            "area_name": "Falls Church city, VA",
            "value": 2.2
        }, {
            "fips_code": 51620,
            "state": "VA",
            "area_name": "Franklin city, VA",
            "value": 4.1
        }, {
            "fips_code": 51630,
            "state": "VA",
            "area_name": "Fredericksburg city, VA",
            "value": 3.4
        }, {
            "fips_code": 51640,
            "state": "VA",
            "area_name": "Galax city, VA",
            "value": 3.1
        }, {
            "fips_code": 51650,
            "state": "VA",
            "area_name": "Hampton city, VA",
            "value": 3.8
        }, {
            "fips_code": 51660,
            "state": "VA",
            "area_name": "Harrisonburg city, VA",
            "value": 3.4
        }, {
            "fips_code": 51670,
            "state": "VA",
            "area_name": "Hopewell city, VA",
            "value": 4.4
        }, {
            "fips_code": 51678,
            "state": "VA",
            "area_name": "Lexington city, VA",
            "value": 4.1
        }, {
            "fips_code": 51680,
            "state": "VA",
            "area_name": "Lynchburg city, VA",
            "value": 3.9
        }, {
            "fips_code": 51683,
            "state": "VA",
            "area_name": "Manassas city, VA",
            "value": 2.6
        }, {
            "fips_code": 51685,
            "state": "VA",
            "area_name": "Manassas Park city, VA",
            "value": 2.5
        }, {
            "fips_code": 51690,
            "state": "VA",
            "area_name": "Martinsville city, VA",
            "value": 4.6
        }, {
            "fips_code": 51700,
            "state": "VA",
            "area_name": "Newport News city, VA",
            "value": 3.6
        }, {
            "fips_code": 51710,
            "state": "VA",
            "area_name": "Norfolk city, VA",
            "value": 3.5
        }, {
            "fips_code": 51720,
            "state": "VA",
            "area_name": "Norton city, VA",
            "value": 3.8
        }, {
            "fips_code": 51730,
            "state": "VA",
            "area_name": "Petersburg city, VA",
            "value": 5.6
        }, {
            "fips_code": 51735,
            "state": "VA",
            "area_name": "Poquoson city, VA",
            "value": 2.5
        }, {
            "fips_code": 51740,
            "state": "VA",
            "area_name": "Portsmouth city, VA",
            "value": 3.9
        }, {
            "fips_code": 51750,
            "state": "VA",
            "area_name": "Radford city, VA",
            "value": 3.5
        }, {
            "fips_code": 51760,
            "state": "VA",
            "area_name": "Richmond city, VA",
            "value": 3.4
        }, {
            "fips_code": 51770,
            "state": "VA",
            "area_name": "Roanoke city, VA",
            "value": 3.2
        }, {
            "fips_code": 51775,
            "state": "VA",
            "area_name": "Salem city, VA",
            "value": 2.9
        }, {
            "fips_code": 51790,
            "state": "VA",
            "area_name": "Staunton city, VA",
            "value": 2.7
        }, {
            "fips_code": 51800,
            "state": "VA",
            "area_name": "Suffolk city, VA",
            "value": 3.1
        }, {
            "fips_code": 51810,
            "state": "VA",
            "area_name": "Virginia Beach city, VA",
            "value": 2.8
        }, {
            "fips_code": 51820,
            "state": "VA",
            "area_name": "Waynesboro city, VA",
            "value": 3.0
        }, {
            "fips_code": 51830,
            "state": "VA",
            "area_name": "Williamsburg city, VA",
            "value": 4.1
        }, {
            "fips_code": 51840,
            "state": "VA",
            "area_name": "Winchester city, VA",
            "value": 2.7
        }, {
            "fips_code": 53000,
            "state": "WA",
            "area_name": "Washington",
            "value": 4.2
        }, {
            "fips_code": 53001,
            "state": "WA",
            "area_name": "Adams County, WA",
            "value": 5.1
        }, {
            "fips_code": 53003,
            "state": "WA",
            "area_name": "Asotin County, WA",
            "value": 3.9
        }, {
            "fips_code": 53005,
            "state": "WA",
            "area_name": "Benton County, WA",
            "value": 5.0
        }, {
            "fips_code": 53007,
            "state": "WA",
            "area_name": "Chelan County, WA",
            "value": 4.8
        }, {
            "fips_code": 53009,
            "state": "WA",
            "area_name": "Clallam County, WA",
            "value": 6.0
        }, {
            "fips_code": 53011,
            "state": "WA",
            "area_name": "Clark County, WA",
            "value": 4.7
        }, {
            "fips_code": 53013,
            "state": "WA",
            "area_name": "Columbia County, WA",
            "value": 5.5
        }, {
            "fips_code": 53015,
            "state": "WA",
            "area_name": "Cowlitz County, WA",
            "value": 5.7
        }, {
            "fips_code": 53017,
            "state": "WA",
            "area_name": "Douglas County, WA",
            "value": 5.3
        }, {
            "fips_code": 53019,
            "state": "WA",
            "area_name": "Ferry County, WA",
            "value": 9.6
        }, {
            "fips_code": 53021,
            "state": "WA",
            "area_name": "Franklin County, WA",
            "value": 6.2
        }, {
            "fips_code": 53023,
            "state": "WA",
            "area_name": "Garfield County, WA",
            "value": 7.0
        }, {
            "fips_code": 53025,
            "state": "WA",
            "area_name": "Grant County, WA",
            "value": 6.0
        }, {
            "fips_code": 53027,
            "state": "WA",
            "area_name": "Grays Harbor County, WA",
            "value": 6.7
        }, {
            "fips_code": 53029,
            "state": "WA",
            "area_name": "Island County, WA",
            "value": 4.9
        }, {
            "fips_code": 53031,
            "state": "WA",
            "area_name": "Jefferson County, WA",
            "value": 5.6
        }, {
            "fips_code": 53033,
            "state": "WA",
            "area_name": "King County, WA",
            "value": 2.9
        }, {
            "fips_code": 53035,
            "state": "WA",
            "area_name": "Kitsap County, WA",
            "value": 4.5
        }, {
            "fips_code": 53037,
            "state": "WA",
            "area_name": "Kittitas County, WA",
            "value": 5.8
        }, {
            "fips_code": 53039,
            "state": "WA",
            "area_name": "Klickitat County, WA",
            "value": 5.8
        }, {
            "fips_code": 53041,
            "state": "WA",
            "area_name": "Lewis County, WA",
            "value": 6.0
        }, {
            "fips_code": 53043,
            "state": "WA",
            "area_name": "Lincoln County, WA",
            "value": 5.4
        }, {
            "fips_code": 53045,
            "state": "WA",
            "area_name": "Mason County, WA",
            "value": 6.3
        }, {
            "fips_code": 53047,
            "state": "WA",
            "area_name": "Okanogan County, WA",
            "value": 6.4
        }, {
            "fips_code": 53049,
            "state": "WA",
            "area_name": "Pacific County, WA",
            "value": 6.8
        }, {
            "fips_code": 53051,
            "state": "WA",
            "area_name": "Pend Oreille County, WA",
            "value": 6.9
        }, {
            "fips_code": 53053,
            "state": "WA",
            "area_name": "Pierce County, WA",
            "value": 5.1
        }, {
            "fips_code": 53055,
            "state": "WA",
            "area_name": "San Juan County, WA",
            "value": 3.9
        }, {
            "fips_code": 53057,
            "state": "WA",
            "area_name": "Skagit County, WA",
            "value": 5.3
        }, {
            "fips_code": 53059,
            "state": "WA",
            "area_name": "Skamania County, WA",
            "value": 5.3
        }, {
            "fips_code": 53061,
            "state": "WA",
            "area_name": "Snohomish County, WA",
            "value": 3.2
        }, {
            "fips_code": 53063,
            "state": "WA",
            "area_name": "Spokane County, WA",
            "value": 4.8
        }, {
            "fips_code": 53065,
            "state": "WA",
            "area_name": "Stevens County, WA",
            "value": 6.7
        }, {
            "fips_code": 53067,
            "state": "WA",
            "area_name": "Thurston County, WA",
            "value": 4.7
        }, {
            "fips_code": 53069,
            "state": "WA",
            "area_name": "Wahkiakum County, WA",
            "value": 6.8
        }, {
            "fips_code": 53071,
            "state": "WA",
            "area_name": "Walla Walla County, WA",
            "value": 4.6
        }, {
            "fips_code": 53073,
            "state": "WA",
            "area_name": "Whatcom County, WA",
            "value": 4.9
        }, {
            "fips_code": 53075,
            "state": "WA",
            "area_name": "Whitman County, WA",
            "value": 4.7
        }, {
            "fips_code": 53077,
            "state": "WA",
            "area_name": "Yakima County, WA",
            "value": 6.4
        }, {
            "fips_code": 54000,
            "state": "WV",
            "area_name": "West Virginia",
            "value": 3.9
        }, {
            "fips_code": 54001,
            "state": "WV",
            "area_name": "Barbour County, WV",
            "value": 4.4
        }, {
            "fips_code": 54003,
            "state": "WV",
            "area_name": "Berkeley County, WV",
            "value": 2.9
        }, {
            "fips_code": 54005,
            "state": "WV",
            "area_name": "Boone County, WV",
            "value": 4.5
        }, {
            "fips_code": 54007,
            "state": "WV",
            "area_name": "Braxton County, WV",
            "value": 6.1
        }, {
            "fips_code": 54009,
            "state": "WV",
            "area_name": "Brooke County, WV",
            "value": 4.5
        }, {
            "fips_code": 54011,
            "state": "WV",
            "area_name": "Cabell County, WV",
            "value": 3.5
        }, {
            "fips_code": 54013,
            "state": "WV",
            "area_name": "Calhoun County, WV",
            "value": 8.199999999999999
        }, {
            "fips_code": 54015,
            "state": "WV",
            "area_name": "Clay County, WV",
            "value": 6.0
        }, {
            "fips_code": 54017,
            "state": "WV",
            "area_name": "Doddridge County, WV",
            "value": 3.1
        }, {
            "fips_code": 54019,
            "state": "WV",
            "area_name": "Fayette County, WV",
            "value": 4.7
        }, {
            "fips_code": 54021,
            "state": "WV",
            "area_name": "Gilmer County, WV",
            "value": 5.2
        }, {
            "fips_code": 54023,
            "state": "WV",
            "area_name": "Grant County, WV",
            "value": 3.7
        }, {
            "fips_code": 54025,
            "state": "WV",
            "area_name": "Greenbrier County, WV",
            "value": 3.8
        }, {
            "fips_code": 54027,
            "state": "WV",
            "area_name": "Hampshire County, WV",
            "value": 2.6
        }, {
            "fips_code": 54029,
            "state": "WV",
            "area_name": "Hancock County, WV",
            "value": 4.9
        }, {
            "fips_code": 54031,
            "state": "WV",
            "area_name": "Hardy County, WV",
            "value": 4.0
        }, {
            "fips_code": 54033,
            "state": "WV",
            "area_name": "Harrison County, WV",
            "value": 3.6
        }, {
            "fips_code": 54035,
            "state": "WV",
            "area_name": "Jackson County, WV",
            "value": 4.3
        }, {
            "fips_code": 54037,
            "state": "WV",
            "area_name": "Jefferson County, WV",
            "value": 2.5
        }, {
            "fips_code": 54039,
            "state": "WV",
            "area_name": "Kanawha County, WV",
            "value": 3.8
        }, {
            "fips_code": 54041,
            "state": "WV",
            "area_name": "Lewis County, WV",
            "value": 4.7
        }, {
            "fips_code": 54043,
            "state": "WV",
            "area_name": "Lincoln County, WV",
            "value": 5.0
        }, {
            "fips_code": 54045,
            "state": "WV",
            "area_name": "Logan County, WV",
            "value": 4.3
        }, {
            "fips_code": 54047,
            "state": "WV",
            "area_name": "McDowell County, WV",
            "value": 6.3
        }, {
            "fips_code": 54049,
            "state": "WV",
            "area_name": "Marion County, WV",
            "value": 4.3
        }, {
            "fips_code": 54051,
            "state": "WV",
            "area_name": "Marshall County, WV",
            "value": 5.0
        }, {
            "fips_code": 54053,
            "state": "WV",
            "area_name": "Mason County, WV",
            "value": 4.3
        }, {
            "fips_code": 54055,
            "state": "WV",
            "area_name": "Mercer County, WV",
            "value": 4.5
        }, {
            "fips_code": 54057,
            "state": "WV",
            "area_name": "Mineral County, WV",
            "value": 3.8
        }, {
            "fips_code": 54059,
            "state": "WV",
            "area_name": "Mingo County, WV",
            "value": 5.6
        }, {
            "fips_code": 54061,
            "state": "WV",
            "area_name": "Monongalia County, WV",
            "value": 3.4
        }, {
            "fips_code": 54063,
            "state": "WV",
            "area_name": "Monroe County, WV",
            "value": 3.4
        }, {
            "fips_code": 54065,
            "state": "WV",
            "area_name": "Morgan County, WV",
            "value": 2.8
        }, {
            "fips_code": 54067,
            "state": "WV",
            "area_name": "Nicholas County, WV",
            "value": 4.6
        }, {
            "fips_code": 54069,
            "state": "WV",
            "area_name": "Ohio County, WV",
            "value": 4.0
        }, {
            "fips_code": 54071,
            "state": "WV",
            "area_name": "Pendleton County, WV",
            "value": 2.6
        }, {
            "fips_code": 54073,
            "state": "WV",
            "area_name": "Pleasants County, WV",
            "value": 5.3
        }, {
            "fips_code": 54075,
            "state": "WV",
            "area_name": "Pocahontas County, WV",
            "value": 4.0
        }, {
            "fips_code": 54077,
            "state": "WV",
            "area_name": "Preston County, WV",
            "value": 4.0
        }, {
            "fips_code": 54079,
            "state": "WV",
            "area_name": "Putnam County, WV",
            "value": 3.3
        }, {
            "fips_code": 54081,
            "state": "WV",
            "area_name": "Raleigh County, WV",
            "value": 3.7
        }, {
            "fips_code": 54083,
            "state": "WV",
            "area_name": "Randolph County, WV",
            "value": 4.7
        }, {
            "fips_code": 54085,
            "state": "WV",
            "area_name": "Ritchie County, WV",
            "value": 4.2
        }, {
            "fips_code": 54087,
            "state": "WV",
            "area_name": "Roane County, WV",
            "value": 6.3
        }, {
            "fips_code": 54089,
            "state": "WV",
            "area_name": "Summers County, WV",
            "value": 3.7
        }, {
            "fips_code": 54091,
            "state": "WV",
            "area_name": "Taylor County, WV",
            "value": 3.8
        }, {
            "fips_code": 54093,
            "state": "WV",
            "area_name": "Tucker County, WV",
            "value": 3.8
        }, {
            "fips_code": 54095,
            "state": "WV",
            "area_name": "Tyler County, WV",
            "value": 5.9
        }, {
            "fips_code": 54097,
            "state": "WV",
            "area_name": "Upshur County, WV",
            "value": 4.8
        }, {
            "fips_code": 54099,
            "state": "WV",
            "area_name": "Wayne County, WV",
            "value": 4.0
        }, {
            "fips_code": 54101,
            "state": "WV",
            "area_name": "Webster County, WV",
            "value": 4.6
        }, {
            "fips_code": 54103,
            "state": "WV",
            "area_name": "Wetzel County, WV",
            "value": 5.6
        }, {
            "fips_code": 54105,
            "state": "WV",
            "area_name": "Wirt County, WV",
            "value": 5.9
        }, {
            "fips_code": 54107,
            "state": "WV",
            "area_name": "Wood County, WV",
            "value": 4.1
        }, {
            "fips_code": 54109,
            "state": "WV",
            "area_name": "Wyoming County, WV",
            "value": 4.3
        }, {
            "fips_code": 55000,
            "state": "WI",
            "area_name": "Wisconsin",
            "value": 2.9
        }, {
            "fips_code": 55001,
            "state": "WI",
            "area_name": "Adams County, WI",
            "value": 4.8
        }, {
            "fips_code": 55003,
            "state": "WI",
            "area_name": "Ashland County, WI",
            "value": 3.9
        }, {
            "fips_code": 55005,
            "state": "WI",
            "area_name": "Barron County, WI",
            "value": 3.3
        }, {
            "fips_code": 55007,
            "state": "WI",
            "area_name": "Bayfield County, WI",
            "value": 4.8
        }, {
            "fips_code": 55009,
            "state": "WI",
            "area_name": "Brown County, WI",
            "value": 2.6
        }, {
            "fips_code": 55011,
            "state": "WI",
            "area_name": "Buffalo County, WI",
            "value": 3.8
        }, {
            "fips_code": 55013,
            "state": "WI",
            "area_name": "Burnett County, WI",
            "value": 4.6
        }, {
            "fips_code": 55015,
            "state": "WI",
            "area_name": "Calumet County, WI",
            "value": 2.3
        }, {
            "fips_code": 55017,
            "state": "WI",
            "area_name": "Chippewa County, WI",
            "value": 3.3
        }, {
            "fips_code": 55019,
            "state": "WI",
            "area_name": "Clark County, WI",
            "value": 2.6
        }, {
            "fips_code": 55021,
            "state": "WI",
            "area_name": "Columbia County, WI",
            "value": 2.6
        }, {
            "fips_code": 55023,
            "state": "WI",
            "area_name": "Crawford County, WI",
            "value": 3.8
        }, {
            "fips_code": 55025,
            "state": "WI",
            "area_name": "Dane County, WI",
            "value": 2.2
        }, {
            "fips_code": 55027,
            "state": "WI",
            "area_name": "Dodge County, WI",
            "value": 2.6
        }, {
            "fips_code": 55029,
            "state": "WI",
            "area_name": "Door County, WI",
            "value": 3.1
        }, {
            "fips_code": 55031,
            "state": "WI",
            "area_name": "Douglas County, WI",
            "value": 4.1
        }, {
            "fips_code": 55033,
            "state": "WI",
            "area_name": "Dunn County, WI",
            "value": 3.1
        }, {
            "fips_code": 55035,
            "state": "WI",
            "area_name": "Eau Claire County, WI",
            "value": 2.5
        }, {
            "fips_code": 55037,
            "state": "WI",
            "area_name": "Florence County, WI",
            "value": 3.5
        }, {
            "fips_code": 55039,
            "state": "WI",
            "area_name": "Fond du Lac County, WI",
            "value": 2.6
        }, {
            "fips_code": 55041,
            "state": "WI",
            "area_name": "Forest County, WI",
            "value": 4.7
        }, {
            "fips_code": 55043,
            "state": "WI",
            "area_name": "Grant County, WI",
            "value": 2.7
        }, {
            "fips_code": 55045,
            "state": "WI",
            "area_name": "Green County, WI",
            "value": 2.4
        }, {
            "fips_code": 55047,
            "state": "WI",
            "area_name": "Green Lake County, WI",
            "value": 3.3
        }, {
            "fips_code": 55049,
            "state": "WI",
            "area_name": "Iowa County, WI",
            "value": 2.6
        }, {
            "fips_code": 55051,
            "state": "WI",
            "area_name": "Iron County, WI",
            "value": 5.1
        }, {
            "fips_code": 55053,
            "state": "WI",
            "area_name": "Jackson County, WI",
            "value": 3.8
        }, {
            "fips_code": 55055,
            "state": "WI",
            "area_name": "Jefferson County, WI",
            "value": 2.7
        }, {
            "fips_code": 55057,
            "state": "WI",
            "area_name": "Juneau County, WI",
            "value": 3.2
        }, {
            "fips_code": 55059,
            "state": "WI",
            "area_name": "Kenosha County, WI",
            "value": 3.3
        }, {
            "fips_code": 55061,
            "state": "WI",
            "area_name": "Kewaunee County, WI",
            "value": 2.5
        }, {
            "fips_code": 55063,
            "state": "WI",
            "area_name": "La Crosse County, WI",
            "value": 2.5
        }, {
            "fips_code": 55065,
            "state": "WI",
            "area_name": "Lafayette County, WI",
            "value": 2.4
        }, {
            "fips_code": 55067,
            "state": "WI",
            "area_name": "Langlade County, WI",
            "value": 3.6
        }, {
            "fips_code": 55069,
            "state": "WI",
            "area_name": "Lincoln County, WI",
            "value": 3.1
        }, {
            "fips_code": 55071,
            "state": "WI",
            "area_name": "Manitowoc County, WI",
            "value": 2.8
        }, {
            "fips_code": 55073,
            "state": "WI",
            "area_name": "Marathon County, WI",
            "value": 2.5
        }, {
            "fips_code": 55075,
            "state": "WI",
            "area_name": "Marinette County, WI",
            "value": 3.8
        }, {
            "fips_code": 55077,
            "state": "WI",
            "area_name": "Marquette County, WI",
            "value": 3.5
        }, {
            "fips_code": 55078,
            "state": "WI",
            "area_name": "Menominee County, WI",
            "value": 5.5
        }, {
            "fips_code": 55079,
            "state": "WI",
            "area_name": "Milwaukee County, WI",
            "value": 3.7
        }, {
            "fips_code": 55081,
            "state": "WI",
            "area_name": "Monroe County, WI",
            "value": 2.7
        }, {
            "fips_code": 55083,
            "state": "WI",
            "area_name": "Oconto County, WI",
            "value": 3.1
        }, {
            "fips_code": 55085,
            "state": "WI",
            "area_name": "Oneida County, WI",
            "value": 3.3
        }, {
            "fips_code": 55087,
            "state": "WI",
            "area_name": "Outagamie County, WI",
            "value": 2.5
        }, {
            "fips_code": 55089,
            "state": "WI",
            "area_name": "Ozaukee County, WI",
            "value": 2.5
        }, {
            "fips_code": 55091,
            "state": "WI",
            "area_name": "Pepin County, WI",
            "value": 3.1
        }, {
            "fips_code": 55093,
            "state": "WI",
            "area_name": "Pierce County, WI",
            "value": 3.3
        }, {
            "fips_code": 55095,
            "state": "WI",
            "area_name": "Polk County, WI",
            "value": 3.8
        }, {
            "fips_code": 55097,
            "state": "WI",
            "area_name": "Portage County, WI",
            "value": 2.9
        }, {
            "fips_code": 55099,
            "state": "WI",
            "area_name": "Price County, WI",
            "value": 3.4
        }, {
            "fips_code": 55101,
            "state": "WI",
            "area_name": "Racine County, WI",
            "value": 3.5
        }, {
            "fips_code": 55103,
            "state": "WI",
            "area_name": "Richland County, WI",
            "value": 2.8
        }, {
            "fips_code": 55105,
            "state": "WI",
            "area_name": "Rock County, WI",
            "value": 3.4
        }, {
            "fips_code": 55107,
            "state": "WI",
            "area_name": "Rusk County, WI",
            "value": 3.7
        }, {
            "fips_code": 55109,
            "state": "WI",
            "area_name": "St. Croix County, WI",
            "value": 3.1
        }, {
            "fips_code": 55111,
            "state": "WI",
            "area_name": "Sauk County, WI",
            "value": 2.8
        }, {
            "fips_code": 55113,
            "state": "WI",
            "area_name": "Sawyer County, WI",
            "value": 4.0
        }, {
            "fips_code": 55115,
            "state": "WI",
            "area_name": "Shawano County, WI",
            "value": 2.9
        }, {
            "fips_code": 55117,
            "state": "WI",
            "area_name": "Sheboygan County, WI",
            "value": 2.4
        }, {
            "fips_code": 55119,
            "state": "WI",
            "area_name": "Taylor County, WI",
            "value": 3.4
        }, {
            "fips_code": 55121,
            "state": "WI",
            "area_name": "Trempealeau County, WI",
            "value": 3.1
        }, {
            "fips_code": 55123,
            "state": "WI",
            "area_name": "Vernon County, WI",
            "value": 2.7
        }, {
            "fips_code": 55125,
            "state": "WI",
            "area_name": "Vilas County, WI",
            "value": 3.9
        }, {
            "fips_code": 55127,
            "state": "WI",
            "area_name": "Walworth County, WI",
            "value": 2.9
        }, {
            "fips_code": 55129,
            "state": "WI",
            "area_name": "Washburn County, WI",
            "value": 3.7
        }, {
            "fips_code": 55131,
            "state": "WI",
            "area_name": "Washington County, WI",
            "value": 2.4
        }, {
            "fips_code": 55133,
            "state": "WI",
            "area_name": "Waukesha County, WI",
            "value": 2.5
        }, {
            "fips_code": 55135,
            "state": "WI",
            "area_name": "Waupaca County, WI",
            "value": 3.0
        }, {
            "fips_code": 55137,
            "state": "WI",
            "area_name": "Waushara County, WI",
            "value": 3.4
        }, {
            "fips_code": 55139,
            "state": "WI",
            "area_name": "Winnebago County, WI",
            "value": 2.5
        }, {
            "fips_code": 55141,
            "state": "WI",
            "area_name": "Wood County, WI",
            "value": 3.3
        }, {
            "fips_code": 56000,
            "state": "WY",
            "area_name": "Wyoming",
            "value": 3.6
        }, {
            "fips_code": 56001,
            "state": "WY",
            "area_name": "Albany County, WY",
            "value": 3.1
        }, {
            "fips_code": 56003,
            "state": "WY",
            "area_name": "Big Horn County, WY",
            "value": 4.1
        }, {
            "fips_code": 56005,
            "state": "WY",
            "area_name": "Campbell County, WY",
            "value": 3.6
        }, {
            "fips_code": 56007,
            "state": "WY",
            "area_name": "Carbon County, WY",
            "value": 3.7
        }, {
            "fips_code": 56009,
            "state": "WY",
            "area_name": "Converse County, WY",
            "value": 3.1
        }, {
            "fips_code": 56011,
            "state": "WY",
            "area_name": "Crook County, WY",
            "value": 3.0
        }, {
            "fips_code": 56013,
            "state": "WY",
            "area_name": "Fremont County, WY",
            "value": 4.0
        }, {
            "fips_code": 56015,
            "state": "WY",
            "area_name": "Goshen County, WY",
            "value": 2.9
        }, {
            "fips_code": 56017,
            "state": "WY",
            "area_name": "Hot Springs County, WY",
            "value": 2.9
        }, {
            "fips_code": 56019,
            "state": "WY",
            "area_name": "Johnson County, WY",
            "value": 3.5
        }, {
            "fips_code": 56021,
            "state": "WY",
            "area_name": "Laramie County, WY",
            "value": 3.5
        }, {
            "fips_code": 56023,
            "state": "WY",
            "area_name": "Lincoln County, WY",
            "value": 3.4
        }, {
            "fips_code": 56025,
            "state": "WY",
            "area_name": "Natrona County, WY",
            "value": 4.0
        }, {
            "fips_code": 56027,
            "state": "WY",
            "area_name": "Niobrara County, WY",
            "value": 2.9
        }, {
            "fips_code": 56029,
            "state": "WY",
            "area_name": "Park County, WY",
            "value": 3.6
        }, {
            "fips_code": 56031,
            "state": "WY",
            "area_name": "Platte County, WY",
            "value": 3.5
        }, {
            "fips_code": 56033,
            "state": "WY",
            "area_name": "Sheridan County, WY",
            "value": 3.3
        }, {
            "fips_code": 56035,
            "state": "WY",
            "area_name": "Sublette County, WY",
            "value": 4.1
        }, {
            "fips_code": 56037,
            "state": "WY",
            "area_name": "Sweetwater County, WY",
            "value": 4.2
        }, {
            "fips_code": 56039,
            "state": "WY",
            "area_name": "Teton County, WY",
            "value": 2.7
        }, {
            "fips_code": 56041,
            "state": "WY",
            "area_name": "Uinta County, WY",
            "value": 3.8
        }, {
            "fips_code": 56043,
            "state": "WY",
            "area_name": "Washakie County, WY",
            "value": 4.0
        }, {
            "fips_code": 56045,
            "state": "WY",
            "area_name": "Weston County, WY",
            "value": 2.7
        }, {
            "fips_code": 72000,
            "state": "PR",
            "area_name": "Puerto Rico",
            "value": 6.0
        }, {
            "fips_code": 72001,
            "state": "PR",
            "area_name": "Adjuntas Municipio, PR",
            "value": 8.1
        }, {
            "fips_code": 72003,
            "state": "PR",
            "area_name": "Aguada Municipio, PR",
            "value": 7.2
        }, {
            "fips_code": 72005,
            "state": "PR",
            "area_name": "Aguadilla Municipio, PR",
            "value": 7.8
        }, {
            "fips_code": 72007,
            "state": "PR",
            "area_name": "Aguas Buenas Municipio, PR",
            "value": 6.5
        }, {
            "fips_code": 72009,
            "state": "PR",
            "area_name": "Aibonito Municipio, PR",
            "value": 7.0
        }, {
            "fips_code": 72011,
            "state": "PR",
            "area_name": "Anasco Municipio, PR",
            "value": 6.0
        }, {
            "fips_code": 72013,
            "state": "PR",
            "area_name": "Arecibo Municipio, PR",
            "value": 6.7
        }, {
            "fips_code": 72015,
            "state": "PR",
            "area_name": "Arroyo Municipio, PR",
            "value": 8.4
        }, {
            "fips_code": 72017,
            "state": "PR",
            "area_name": "Barceloneta Municipio, PR",
            "value": 8.1
        }, {
            "fips_code": 72019,
            "state": "PR",
            "area_name": "Barranquitas Municipio, PR",
            "value": 7.0
        }, {
            "fips_code": 72021,
            "state": "PR",
            "area_name": "Bayamon Municipio, PR",
            "value": 4.8
        }, {
            "fips_code": 72023,
            "state": "PR",
            "area_name": "Cabo Rojo Municipio, PR",
            "value": 6.6
        }, {
            "fips_code": 72025,
            "state": "PR",
            "area_name": "Caguas Municipio, PR",
            "value": 4.9
        }, {
            "fips_code": 72027,
            "state": "PR",
            "area_name": "Camuy Municipio, PR",
            "value": 7.0
        }, {
            "fips_code": 72029,
            "state": "PR",
            "area_name": "Canovanas Municipio, PR",
            "value": 4.7
        }, {
            "fips_code": 72031,
            "state": "PR",
            "area_name": "Carolina Municipio, PR",
            "value": 4.7
        }, {
            "fips_code": 72033,
            "state": "PR",
            "area_name": "Catano Municipio, PR",
            "value": 5.1
        }, {
            "fips_code": 72035,
            "state": "PR",
            "area_name": "Cayey Municipio, PR",
            "value": 5.0
        }, {
            "fips_code": 72037,
            "state": "PR",
            "area_name": "Ceiba Municipio, PR",
            "value": 6.5
        }, {
            "fips_code": 72039,
            "state": "PR",
            "area_name": "Ciales Municipio, PR",
            "value": 8.6
        }, {
            "fips_code": 72041,
            "state": "PR",
            "area_name": "Cidra Municipio, PR",
            "value": 4.7
        }, {
            "fips_code": 72043,
            "state": "PR",
            "area_name": "Coamo Municipio, PR",
            "value": 7.2
        }, {
            "fips_code": 72045,
            "state": "PR",
            "area_name": "Comerio Municipio, PR",
            "value": 6.8
        }, {
            "fips_code": 72047,
            "state": "PR",
            "area_name": "Corozal Municipio, PR",
            "value": 7.2
        }, {
            "fips_code": 72049,
            "state": "PR",
            "area_name": "Culebra Municipio, PR",
            "value": 2.4
        }, {
            "fips_code": 72051,
            "state": "PR",
            "area_name": "Dorado Municipio, PR",
            "value": 4.3
        }, {
            "fips_code": 72053,
            "state": "PR",
            "area_name": "Fajardo Municipio, PR",
            "value": 6.4
        }, {
            "fips_code": 72054,
            "state": "PR",
            "area_name": "Florida Municipio, PR",
            "value": 7.7
        }, {
            "fips_code": 72055,
            "state": "PR",
            "area_name": "Guanica Municipio, PR",
            "value": 9.699999999999999
        }, {
            "fips_code": 72057,
            "state": "PR",
            "area_name": "Guayama Municipio, PR",
            "value": 6.7
        }, {
            "fips_code": 72059,
            "state": "PR",
            "area_name": "Guayanilla Municipio, PR",
            "value": 9.9
        }, {
            "fips_code": 72061,
            "state": "PR",
            "area_name": "Guaynabo Municipio, PR",
            "value": 3.1
        }, {
            "fips_code": 72063,
            "state": "PR",
            "area_name": "Gurabo Municipio, PR",
            "value": 4.1
        }, {
            "fips_code": 72065,
            "state": "PR",
            "area_name": "Hatillo Municipio, PR",
            "value": 11.3
        }, {
            "fips_code": 72067,
            "state": "PR",
            "area_name": "Hormigueros Municipio, PR",
            "value": 6.2
        }, {
            "fips_code": 72069,
            "state": "PR",
            "area_name": "Humacao Municipio, PR",
            "value": 6.3
        }, {
            "fips_code": 72071,
            "state": "PR",
            "area_name": "Isabela Municipio, PR",
            "value": 6.8
        }, {
            "fips_code": 72073,
            "state": "PR",
            "area_name": "Jayuya Municipio, PR",
            "value": 8.0
        }, {
            "fips_code": 72075,
            "state": "PR",
            "area_name": "Juana Diaz Municipio, PR",
            "value": 6.8
        }, {
            "fips_code": 72077,
            "state": "PR",
            "area_name": "Juncos Municipio, PR",
            "value": 6.3
        }, {
            "fips_code": 72079,
            "state": "PR",
            "area_name": "Lajas Municipio, PR",
            "value": 9.9
        }, {
            "fips_code": 72081,
            "state": "PR",
            "area_name": "Lares Municipio, PR",
            "value": 11.6
        }, {
            "fips_code": 72083,
            "state": "PR",
            "area_name": "Las Marias Municipio, PR",
            "value": 12.1
        }, {
            "fips_code": 72085,
            "state": "PR",
            "area_name": "Las Piedras Municipio, PR",
            "value": 6.0
        }, {
            "fips_code": 72087,
            "state": "PR",
            "area_name": "Loiza Municipio, PR",
            "value": 5.8
        }, {
            "fips_code": 72089,
            "state": "PR",
            "area_name": "Luquillo Municipio, PR",
            "value": 6.0
        }, {
            "fips_code": 72091,
            "state": "PR",
            "area_name": "Manati Municipio, PR",
            "value": 6.1
        }, {
            "fips_code": 72093,
            "state": "PR",
            "area_name": "Maricao Municipio, PR",
            "value": 9.9
        }, {
            "fips_code": 72095,
            "state": "PR",
            "area_name": "Maunabo Municipio, PR",
            "value": 11.2
        }, {
            "fips_code": 72097,
            "state": "PR",
            "area_name": "Mayaguez Municipio, PR",
            "value": 7.0
        }, {
            "fips_code": 72099,
            "state": "PR",
            "area_name": "Moca Municipio, PR",
            "value": 8.4
        }, {
            "fips_code": 72101,
            "state": "PR",
            "area_name": "Morovis Municipio, PR",
            "value": 7.1
        }, {
            "fips_code": 72103,
            "state": "PR",
            "area_name": "Naguabo Municipio, PR",
            "value": 6.1
        }, {
            "fips_code": 72105,
            "state": "PR",
            "area_name": "Naranjito Municipio, PR",
            "value": 7.1
        }, {
            "fips_code": 72107,
            "state": "PR",
            "area_name": "Orocovis Municipio, PR",
            "value": 8.1
        }, {
            "fips_code": 72109,
            "state": "PR",
            "area_name": "Patillas Municipio, PR",
            "value": 10.1
        }, {
            "fips_code": 72111,
            "state": "PR",
            "area_name": "Penuelas Municipio, PR",
            "value": 9.699999999999999
        }, {
            "fips_code": 72113,
            "state": "PR",
            "area_name": "Ponce Municipio, PR",
            "value": 7.0
        }, {
            "fips_code": 72115,
            "state": "PR",
            "area_name": "Quebradillas Municipio, PR",
            "value": 8.199999999999999
        }, {
            "fips_code": 72117,
            "state": "PR",
            "area_name": "Rincon Municipio, PR",
            "value": 8.6
        }, {
            "fips_code": 72119,
            "state": "PR",
            "area_name": "Rio Grande Municipio, PR",
            "value": 5.5
        }, {
            "fips_code": 72121,
            "state": "PR",
            "area_name": "Sabana Grande Municipio, PR",
            "value": 8.199999999999999
        }, {
            "fips_code": 72123,
            "state": "PR",
            "area_name": "Salinas Municipio, PR",
            "value": 8.699999999999999
        }, {
            "fips_code": 72125,
            "state": "PR",
            "area_name": "San German Municipio, PR",
            "value": 7.8
        }, {
            "fips_code": 72127,
            "state": "PR",
            "area_name": "San Juan Municipio, PR",
            "value": 4.3
        }, {
            "fips_code": 72129,
            "state": "PR",
            "area_name": "San Lorenzo Municipio, PR",
            "value": 6.3
        }, {
            "fips_code": 72131,
            "state": "PR",
            "area_name": "San Sebastian Municipio, PR",
            "value": 10.2
        }, {
            "fips_code": 72133,
            "state": "PR",
            "area_name": "Santa Isabel Municipio, PR",
            "value": 7.8
        }, {
            "fips_code": 72135,
            "state": "PR",
            "area_name": "Toa Alta Municipio, PR",
            "value": 4.5
        }, {
            "fips_code": 72137,
            "state": "PR",
            "area_name": "Toa Baja Municipio, PR",
            "value": 4.6
        }, {
            "fips_code": 72139,
            "state": "PR",
            "area_name": "Trujillo Alto Municipio, PR",
            "value": 3.7
        }, {
            "fips_code": 72141,
            "state": "PR",
            "area_name": "Utuado Municipio, PR",
            "value": 8.0
        }, {
            "fips_code": 72143,
            "state": "PR",
            "area_name": "Vega Alta Municipio, PR",
            "value": 7.3
        }, {
            "fips_code": 72145,
            "state": "PR",
            "area_name": "Vega Baja Municipio, PR",
            "value": 7.4
        }, {
            "fips_code": 72147,
            "state": "PR",
            "area_name": "Vieques Municipio, PR",
            "value": 6.9
        }, {
            "fips_code": 72149,
            "state": "PR",
            "area_name": "Villalba Municipio, PR",
            "value": 10.4
        }, {
            "fips_code": 72151,
            "state": "PR",
            "area_name": "Yabucoa Municipio, PR",
            "value": 8.300000000000001
        }, {
            "fips_code": 72153,
            "state": "PR",
            "area_name": "Yauco Municipio, PR",
            "value": 10.3
        }
    ]
}