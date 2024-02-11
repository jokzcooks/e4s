module.exports = {
    "XmlSchema": {
        "@name": "myschema",
        "xml": "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:hpcc=\"urn:hpccsystems:xsd:appinfo\" elementFormDefault=\"qualified\" attributeFormDefault=\"unqualified\">\n<xs:element name=\"Dataset\"><xs:complexType><xs:sequence minOccurs=\"0\" maxOccurs=\"unbounded\">\n<xs:element name=\"Row\"><xs:complexType><xs:sequence>\n<xs:element name=\"fips_code\" type=\"xs:nonNegativeInteger\"/>\n<xs:element name=\"state\" type=\"string2\"/>\n<xs:element name=\"area_name\" type=\"string45\"/>\n<xs:element name=\"attribute\" type=\"string75\"/>\n<xs:element name=\"value\" type=\"xs:double\"/>\n</xs:sequence></xs:complexType></xs:element>\n</xs:sequence></xs:complexType></xs:element>\n<xs:simpleType name=\"string2\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"2\"/></xs:restriction></xs:simpleType>\n<xs:simpleType name=\"string45\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"45\"/></xs:restriction></xs:simpleType>\n<xs:simpleType name=\"string75\"><xs:restriction base=\"xs:string\"><xs:maxLength value=\"75\"/></xs:restriction></xs:simpleType>\n</xs:schema>"
    },
    "@xmlSchema": "myschema",
    "Row": [{
            "fips_code": 0,
            "state": "US",
            "area_name": "United States",
            "value": 11.12595968
        },
        {
            "fips_code": 1000,
            "state": "AL",
            "area_name": "Alabama",
            "value": 12.59729984
        }, {
            "fips_code": 1001,
            "state": "AL",
            "area_name": "Autauga County",
            "value": 10.41550967
        }, {
            "fips_code": 1003,
            "state": "AL",
            "area_name": "Baldwin County",
            "value": 8.985843668999999
        }, {
            "fips_code": 1005,
            "state": "AL",
            "area_name": "Barbour County",
            "value": 24.32898027
        }, {
            "fips_code": 1007,
            "state": "AL",
            "area_name": "Bibb County",
            "value": 19.46191692
        }, {
            "fips_code": 1009,
            "state": "AL",
            "area_name": "Blount County",
            "value": 16.35192289
        }, {
            "fips_code": 1011,
            "state": "AL",
            "area_name": "Bullock County",
            "value": 22.39348553
        }, {
            "fips_code": 1013,
            "state": "AL",
            "area_name": "Butler County",
            "value": 14.43514644
        }, {
            "fips_code": 1015,
            "state": "AL",
            "area_name": "Calhoun County",
            "value": 14.78514384
        }, {
            "fips_code": 1017,
            "state": "AL",
            "area_name": "Chambers County",
            "value": 17.21846303
        }, {
            "fips_code": 1019,
            "state": "AL",
            "area_name": "Cherokee County",
            "value": 20.17791278
        }, {
            "fips_code": 1021,
            "state": "AL",
            "area_name": "Chilton County",
            "value": 18.23868474
        }, {
            "fips_code": 1023,
            "state": "AL",
            "area_name": "Choctaw County",
            "value": 19.41601121
        }, {
            "fips_code": 1025,
            "state": "AL",
            "area_name": "Clarke County",
            "value": 17.77613867
        }, {
            "fips_code": 1027,
            "state": "AL",
            "area_name": "Clay County",
            "value": 16.9926773
        }, {
            "fips_code": 1029,
            "state": "AL",
            "area_name": "Cleburne County",
            "value": 16.94289232
        }, {
            "fips_code": 1031,
            "state": "AL",
            "area_name": "Coffee County",
            "value": 13.64377955
        }, {
            "fips_code": 1033,
            "state": "AL",
            "area_name": "Colbert County",
            "value": 13.20376331
        }, {
            "fips_code": 1035,
            "state": "AL",
            "area_name": "Conecuh County",
            "value": 12.42931333
        }, {
            "fips_code": 1037,
            "state": "AL",
            "area_name": "Coosa County",
            "value": 14.90508267
        }, {
            "fips_code": 1039,
            "state": "AL",
            "area_name": "Covington County",
            "value": 14.8177586
        }, {
            "fips_code": 1041,
            "state": "AL",
            "area_name": "Crenshaw County",
            "value": 18.76952915
        }, {
            "fips_code": 1043,
            "state": "AL",
            "area_name": "Cullman County",
            "value": 15.7852154
        }, {
            "fips_code": 1045,
            "state": "AL",
            "area_name": "Dale County",
            "value": 15.15503184
        }, {
            "fips_code": 1047,
            "state": "AL",
            "area_name": "Dallas County",
            "value": 14.09248072
        }, {
            "fips_code": 1049,
            "state": "AL",
            "area_name": "DeKalb County",
            "value": 21.79099532
        }, {
            "fips_code": 1051,
            "state": "AL",
            "area_name": "Elmore County",
            "value": 12.35506526
        }, {
            "fips_code": 1053,
            "state": "AL",
            "area_name": "Escambia County",
            "value": 18.26489345
        }, {
            "fips_code": 1055,
            "state": "AL",
            "area_name": "Etowah County",
            "value": 13.80137269
        }, {
            "fips_code": 1057,
            "state": "AL",
            "area_name": "Fayette County",
            "value": 16.96816838
        }, {
            "fips_code": 1059,
            "state": "AL",
            "area_name": "Franklin County",
            "value": 20.50166129
        }, {
            "fips_code": 1061,
            "state": "AL",
            "area_name": "Geneva County",
            "value": 17.50823855
        }, {
            "fips_code": 1063,
            "state": "AL",
            "area_name": "Greene County",
            "value": 15.55836646
        }, {
            "fips_code": 1065,
            "state": "AL",
            "area_name": "Hale County",
            "value": 18.73141724
        }, {
            "fips_code": 1067,
            "state": "AL",
            "area_name": "Henry County",
            "value": 18.6854614
        }, {
            "fips_code": 1069,
            "state": "AL",
            "area_name": "Houston County",
            "value": 12.24323332
        }, {
            "fips_code": 1071,
            "state": "AL",
            "area_name": "Jackson County",
            "value": 17.57405394
        }, {
            "fips_code": 1073,
            "state": "AL",
            "area_name": "Jefferson County",
            "value": 9.038611141000001
        }, {
            "fips_code": 1075,
            "state": "AL",
            "area_name": "Lamar County",
            "value": 17.54121431
        }, {
            "fips_code": 1077,
            "state": "AL",
            "area_name": "Lauderdale County",
            "value": 11.30641552
        }, {
            "fips_code": 1079,
            "state": "AL",
            "area_name": "Lawrence County",
            "value": 16.7659538
        }, {
            "fips_code": 1081,
            "state": "AL",
            "area_name": "Lee County",
            "value": 8.624695362000001
        }, {
            "fips_code": 1083,
            "state": "AL",
            "area_name": "Limestone County",
            "value": 13.4794914
        }, {
            "fips_code": 1085,
            "state": "AL",
            "area_name": "Lowndes County",
            "value": 15.25589179
        }, {
            "fips_code": 1087,
            "state": "AL",
            "area_name": "Macon County",
            "value": 16.48456815
        }, {
            "fips_code": 1089,
            "state": "AL",
            "area_name": "Madison County",
            "value": 8.027137848000001
        }, {
            "fips_code": 1091,
            "state": "AL",
            "area_name": "Marengo County",
            "value": 13.41613002
        }, {
            "fips_code": 1093,
            "state": "AL",
            "area_name": "Marion County",
            "value": 18.66698405
        }, {
            "fips_code": 1095,
            "state": "AL",
            "area_name": "Marshall County",
            "value": 16.4844498
        }, {
            "fips_code": 1097,
            "state": "AL",
            "area_name": "Mobile County",
            "value": 12.14035964
        }, {
            "fips_code": 1099,
            "state": "AL",
            "area_name": "Monroe County",
            "value": 17.59573087
        }, {
            "fips_code": 1101,
            "state": "AL",
            "area_name": "Montgomery County",
            "value": 12.27084371
        }, {
            "fips_code": 1103,
            "state": "AL",
            "area_name": "Morgan County",
            "value": 15.3159211
        }, {
            "fips_code": 1105,
            "state": "AL",
            "area_name": "Perry County",
            "value": 21.36690647
        }, {
            "fips_code": 1107,
            "state": "AL",
            "area_name": "Pickens County",
            "value": 16.72883788
        }, {
            "fips_code": 1109,
            "state": "AL",
            "area_name": "Pike County",
            "value": 12.70684056
        }, {
            "fips_code": 1111,
            "state": "AL",
            "area_name": "Randolph County",
            "value": 19.72224025
        }, {
            "fips_code": 1113,
            "state": "AL",
            "area_name": "Russell County",
            "value": 14.74563097
        }, {
            "fips_code": 1115,
            "state": "AL",
            "area_name": "St. Clair County",
            "value": 13.98776681
        }, {
            "fips_code": 1117,
            "state": "AL",
            "area_name": "Shelby County",
            "value": 6.375767846
        }, {
            "fips_code": 1119,
            "state": "AL",
            "area_name": "Sumter County",
            "value": 12.72680145
        }, {
            "fips_code": 1121,
            "state": "AL",
            "area_name": "Talladega County",
            "value": 17.10684588
        }, {
            "fips_code": 1123,
            "state": "AL",
            "area_name": "Tallapoosa County",
            "value": 18.43856076
        }, {
            "fips_code": 1125,
            "state": "AL",
            "area_name": "Tuscaloosa County",
            "value": 10.35775249
        }, {
            "fips_code": 1127,
            "state": "AL",
            "area_name": "Walker County",
            "value": 17.70865482
        }, {
            "fips_code": 1129,
            "state": "AL",
            "area_name": "Washington County",
            "value": 13.83067122
        }, {
            "fips_code": 1131,
            "state": "AL",
            "area_name": "Wilcox County",
            "value": 20.75761812
        }, {
            "fips_code": 1133,
            "state": "AL",
            "area_name": "Winston County",
            "value": 20.68641279
        }, {
            "fips_code": 2000,
            "state": "AK",
            "area_name": "Alaska",
            "value": 6.744470273
        }, {
            "fips_code": 2013,
            "state": "AK",
            "area_name": "Aleutians East Borough",
            "value": 15.28098537
        }, {
            "fips_code": 2016,
            "state": "AK",
            "area_name": "Aleutians West Census Area",
            "value": 8.963001563000001
        }, {
            "fips_code": 2020,
            "state": "AK",
            "area_name": "Anchorage Municipality",
            "value": 5.844955305
        }, {
            "fips_code": 2050,
            "state": "AK",
            "area_name": "Bethel Census Area",
            "value": 18.03491272
        }, {
            "fips_code": 2060,
            "state": "AK",
            "area_name": "Bristol Bay Borough",
            "value": 5.287713841
        }, {
            "fips_code": 2063,
            "state": "AK",
            "area_name": "Chugach Census Area, Alaska",
            "value": 4.584352078
        }, {
            "fips_code": 2066,
            "state": "AK",
            "area_name": "Copper River Census Area, Alaska",
            "value": 5.907859079
        }, {
            "fips_code": 2068,
            "state": "AK",
            "area_name": "Denali Borough",
            "value": 1.630434783
        }, {
            "fips_code": 2070,
            "state": "AK",
            "area_name": "Dillingham Census Area",
            "value": 13.45820326
        }, {
            "fips_code": 2090,
            "state": "AK",
            "area_name": "Fairbanks North Star Borough",
            "value": 5.531193453
        }, {
            "fips_code": 2100,
            "state": "AK",
            "area_name": "Haines Borough",
            "value": 2.306079665
        }, {
            "fips_code": 2105,
            "state": "AK",
            "area_name": "Hoonah-Angoon Census Area",
            "value": 6.256572029
        }, {
            "fips_code": 2110,
            "state": "AK",
            "area_name": "Juneau City and Borough",
            "value": 4.59543523
        }, {
            "fips_code": 2122,
            "state": "AK",
            "area_name": "Kenai Peninsula Borough",
            "value": 6.049227191
        }, {
            "fips_code": 2130,
            "state": "AK",
            "area_name": "Ketchikan Gateway Borough",
            "value": 6.029996939
        }, {
            "fips_code": 2150,
            "state": "AK",
            "area_name": "Kodiak Island Borough",
            "value": 9.509374649
        }, {
            "fips_code": 2158,
            "state": "AK",
            "area_name": "Kusilvak Census Area",
            "value": 20.44171779
        }, {
            "fips_code": 2164,
            "state": "AK",
            "area_name": "Lake and Peninsula Borough",
            "value": 10.72555205
        }, {
            "fips_code": 2170,
            "state": "AK",
            "area_name": "Matanuska-Susitna Borough",
            "value": 6.281162244
        }, {
            "fips_code": 2180,
            "state": "AK",
            "area_name": "Nome Census Area",
            "value": 12.3621487
        }, {
            "fips_code": 2185,
            "state": "AK",
            "area_name": "North Slope Borough",
            "value": 12.34479806
        }, {
            "fips_code": 2188,
            "state": "AK",
            "area_name": "Northwest Arctic Borough",
            "value": 15.68764569
        }, {
            "fips_code": 2195,
            "state": "AK",
            "area_name": "Petersburg Census Area",
            "value": 8.510638298
        }, {
            "fips_code": 2198,
            "state": "AK",
            "area_name": "Prince of Wales-Hyder Census Area",
            "value": 7.646212848
        }, {
            "fips_code": 2220,
            "state": "AK",
            "area_name": "Sitka City and Borough",
            "value": 5.190538765
        }, {
            "fips_code": 2230,
            "state": "AK",
            "area_name": "Skagway Municipality",
            "value": 9.510357815000001
        }, {
            "fips_code": 2240,
            "state": "AK",
            "area_name": "Southeast Fairbanks Census Area",
            "value": 7.42563185
        }, {
            "fips_code": 2275,
            "state": "AK",
            "area_name": "Wrangell City and Borough",
            "value": 15.22712732
        }, {
            "fips_code": 2282,
            "state": "AK",
            "area_name": "Yakutat City and Borough",
            "value": 5.412371134
        }, {
            "fips_code": 2290,
            "state": "AK",
            "area_name": "Yukon-Koyukuk Census Area",
            "value": 12.87726358
        }, {
            "fips_code": 4000,
            "state": "AZ",
            "area_name": "Arizona",
            "value": 11.69572582
        }, {
            "fips_code": 4001,
            "state": "AZ",
            "area_name": "Apache County",
            "value": 17.82021623
        }, {
            "fips_code": 4003,
            "state": "AZ",
            "area_name": "Cochise County",
            "value": 11.31926574
        }, {
            "fips_code": 4005,
            "state": "AZ",
            "area_name": "Coconino County",
            "value": 9.032692173999999
        }, {
            "fips_code": 4007,
            "state": "AZ",
            "area_name": "Gila County",
            "value": 13.05863789
        }, {
            "fips_code": 4009,
            "state": "AZ",
            "area_name": "Graham County",
            "value": 16.55160942
        }, {
            "fips_code": 4011,
            "state": "AZ",
            "area_name": "Greenlee County",
            "value": 12.32211038
        }, {
            "fips_code": 4012,
            "state": "AZ",
            "area_name": "La Paz County",
            "value": 16.00667577
        }, {
            "fips_code": 4013,
            "state": "AZ",
            "area_name": "Maricopa County",
            "value": 11.15749581
        }, {
            "fips_code": 4015,
            "state": "AZ",
            "area_name": "Mohave County",
            "value": 12.55120402
        }, {
            "fips_code": 4017,
            "state": "AZ",
            "area_name": "Navajo County",
            "value": 15.45196199
        }, {
            "fips_code": 4019,
            "state": "AZ",
            "area_name": "Pima County",
            "value": 10.64911739
        }, {
            "fips_code": 4021,
            "state": "AZ",
            "area_name": "Pinal County",
            "value": 12.42628389
        }, {
            "fips_code": 4023,
            "state": "AZ",
            "area_name": "Santa Cruz County",
            "value": 22.25552518
        }, {
            "fips_code": 4025,
            "state": "AZ",
            "area_name": "Yavapai County",
            "value": 8.448757292
        }, {
            "fips_code": 4027,
            "state": "AZ",
            "area_name": "Yuma County",
            "value": 25.08990789
        }, {
            "fips_code": 5000,
            "state": "AR",
            "area_name": "Arkansas",
            "value": 12.30506261
        }, {
            "fips_code": 5001,
            "state": "AR",
            "area_name": "Arkansas County",
            "value": 13.31331331
        }, {
            "fips_code": 5003,
            "state": "AR",
            "area_name": "Ashley County",
            "value": 14.82365223
        }, {
            "fips_code": 5005,
            "state": "AR",
            "area_name": "Baxter County",
            "value": 11.34583807
        }, {
            "fips_code": 5007,
            "state": "AR",
            "area_name": "Benton County",
            "value": 10.28597988
        }, {
            "fips_code": 5009,
            "state": "AR",
            "area_name": "Boone County",
            "value": 10.88817549
        }, {
            "fips_code": 5011,
            "state": "AR",
            "area_name": "Bradley County",
            "value": 15.8736726
        }, {
            "fips_code": 5013,
            "state": "AR",
            "area_name": "Calhoun County",
            "value": 15.79406632
        }, {
            "fips_code": 5015,
            "state": "AR",
            "area_name": "Carroll County",
            "value": 14.79102905
        }, {
            "fips_code": 5017,
            "state": "AR",
            "area_name": "Chicot County",
            "value": 21.60528535
        }, {
            "fips_code": 5019,
            "state": "AR",
            "area_name": "Clark County",
            "value": 9.464498215000001
        }, {
            "fips_code": 5021,
            "state": "AR",
            "area_name": "Clay County",
            "value": 15.70503528
        }, {
            "fips_code": 5023,
            "state": "AR",
            "area_name": "Cleburne County",
            "value": 11.7532678
        }, {
            "fips_code": 5025,
            "state": "AR",
            "area_name": "Cleveland County",
            "value": 9.293075393000001
        }, {
            "fips_code": 5027,
            "state": "AR",
            "area_name": "Columbia County",
            "value": 12.98128247
        }, {
            "fips_code": 5029,
            "state": "AR",
            "area_name": "Conway County",
            "value": 11.86287463
        }, {
            "fips_code": 5031,
            "state": "AR",
            "area_name": "Craighead County",
            "value": 10.34076889
        }, {
            "fips_code": 5033,
            "state": "AR",
            "area_name": "Crawford County",
            "value": 15.07868523
        }, {
            "fips_code": 5035,
            "state": "AR",
            "area_name": "Crittenden County",
            "value": 15.49975701
        }, {
            "fips_code": 5037,
            "state": "AR",
            "area_name": "Cross County",
            "value": 18.20039159
        }, {
            "fips_code": 5039,
            "state": "AR",
            "area_name": "Dallas County",
            "value": 12.25321888
        }, {
            "fips_code": 5041,
            "state": "AR",
            "area_name": "Desha County",
            "value": 19.11231884
        }, {
            "fips_code": 5043,
            "state": "AR",
            "area_name": "Drew County",
            "value": 13.03491495
        }, {
            "fips_code": 5045,
            "state": "AR",
            "area_name": "Faulkner County",
            "value": 6.889336437
        }, {
            "fips_code": 5047,
            "state": "AR",
            "area_name": "Franklin County",
            "value": 13.52198594
        }, {
            "fips_code": 5049,
            "state": "AR",
            "area_name": "Fulton County",
            "value": 14.1046324
        }, {
            "fips_code": 5051,
            "state": "AR",
            "area_name": "Garland County",
            "value": 9.622568416
        }, {
            "fips_code": 5053,
            "state": "AR",
            "area_name": "Grant County",
            "value": 8.403696032999999
        }, {
            "fips_code": 5055,
            "state": "AR",
            "area_name": "Greene County",
            "value": 11.33886449
        }, {
            "fips_code": 5057,
            "state": "AR",
            "area_name": "Hempstead County",
            "value": 16.16633311
        }, {
            "fips_code": 5059,
            "state": "AR",
            "area_name": "Hot Spring County",
            "value": 11.43547157
        }, {
            "fips_code": 5061,
            "state": "AR",
            "area_name": "Howard County",
            "value": 11.94793119
        }, {
            "fips_code": 5063,
            "state": "AR",
            "area_name": "Independence County",
            "value": 14.21595653
        }, {
            "fips_code": 5065,
            "state": "AR",
            "area_name": "Izard County",
            "value": 17.89678676
        }, {
            "fips_code": 5067,
            "state": "AR",
            "area_name": "Jackson County",
            "value": 16.51789439
        }, {
            "fips_code": 5069,
            "state": "AR",
            "area_name": "Jefferson County",
            "value": 11.59854345
        }, {
            "fips_code": 5071,
            "state": "AR",
            "area_name": "Johnson County",
            "value": 19.91977821
        }, {
            "fips_code": 5073,
            "state": "AR",
            "area_name": "Lafayette County",
            "value": 18.92247043
        }, {
            "fips_code": 5075,
            "state": "AR",
            "area_name": "Lawrence County",
            "value": 15.20787746
        }, {
            "fips_code": 5077,
            "state": "AR",
            "area_name": "Lee County",
            "value": 18.26184379
        }, {
            "fips_code": 5079,
            "state": "AR",
            "area_name": "Lincoln County",
            "value": 18.79242225
        }, {
            "fips_code": 5081,
            "state": "AR",
            "area_name": "Little River County",
            "value": 10.10981141
        }, {
            "fips_code": 5083,
            "state": "AR",
            "area_name": "Logan County",
            "value": 12.27152318
        }, {
            "fips_code": 5085,
            "state": "AR",
            "area_name": "Lonoke County",
            "value": 10.05968816
        }, {
            "fips_code": 5087,
            "state": "AR",
            "area_name": "Madison County",
            "value": 15.0887574
        }, {
            "fips_code": 5089,
            "state": "AR",
            "area_name": "Marion County",
            "value": 13.82704476
        }, {
            "fips_code": 5091,
            "state": "AR",
            "area_name": "Miller County",
            "value": 13.10285812
        }, {
            "fips_code": 5093,
            "state": "AR",
            "area_name": "Mississippi County",
            "value": 17.38578206
        }, {
            "fips_code": 5095,
            "state": "AR",
            "area_name": "Monroe County",
            "value": 21.18905575
        }, {
            "fips_code": 5097,
            "state": "AR",
            "area_name": "Montgomery County",
            "value": 16.04111509
        }, {
            "fips_code": 5099,
            "state": "AR",
            "area_name": "Nevada County",
            "value": 9.032145353000001
        }, {
            "fips_code": 5101,
            "state": "AR",
            "area_name": "Newton County",
            "value": 14.78016838
        }, {
            "fips_code": 5103,
            "state": "AR",
            "area_name": "Ouachita County",
            "value": 12.43843132
        }, {
            "fips_code": 5105,
            "state": "AR",
            "area_name": "Perry County",
            "value": 8.702397743000001
        }, {
            "fips_code": 5107,
            "state": "AR",
            "area_name": "Phillips County",
            "value": 18.31268222
        }, {
            "fips_code": 5109,
            "state": "AR",
            "area_name": "Pike County",
            "value": 12.10467394
        }, {
            "fips_code": 5111,
            "state": "AR",
            "area_name": "Poinsett County",
            "value": 18.51030111
        }, {
            "fips_code": 5113,
            "state": "AR",
            "area_name": "Polk County",
            "value": 11.53082972
        }, {
            "fips_code": 5115,
            "state": "AR",
            "area_name": "Pope County",
            "value": 15.7560045
        }, {
            "fips_code": 5117,
            "state": "AR",
            "area_name": "Prairie County",
            "value": 13.16182573
        }, {
            "fips_code": 5119,
            "state": "AR",
            "area_name": "Pulaski County",
            "value": 8.522869929000001
        }, {
            "fips_code": 5121,
            "state": "AR",
            "area_name": "Randolph County",
            "value": 14.41234666
        }, {
            "fips_code": 5123,
            "state": "AR",
            "area_name": "St. Francis County",
            "value": 17.68055139
        }, {
            "fips_code": 5125,
            "state": "AR",
            "area_name": "Saline County",
            "value": 8.193282263
        }, {
            "fips_code": 5127,
            "state": "AR",
            "area_name": "Scott County",
            "value": 20.04045658
        }, {
            "fips_code": 5129,
            "state": "AR",
            "area_name": "Searcy County",
            "value": 19.84746057
        }, {
            "fips_code": 5131,
            "state": "AR",
            "area_name": "Sebastian County",
            "value": 15.42268234
        }, {
            "fips_code": 5133,
            "state": "AR",
            "area_name": "Sevier County",
            "value": 26.46912598
        }, {
            "fips_code": 5135,
            "state": "AR",
            "area_name": "Sharp County",
            "value": 17.76852889
        }, {
            "fips_code": 5137,
            "state": "AR",
            "area_name": "Stone County",
            "value": 15.37104422
        }, {
            "fips_code": 5139,
            "state": "AR",
            "area_name": "Union County",
            "value": 13.66960155
        }, {
            "fips_code": 5141,
            "state": "AR",
            "area_name": "Van Buren County",
            "value": 14.94037479
        }, {
            "fips_code": 5143,
            "state": "AR",
            "area_name": "Washington County",
            "value": 13.50287617
        }, {
            "fips_code": 5145,
            "state": "AR",
            "area_name": "White County",
            "value": 14.21419025
        }, {
            "fips_code": 5147,
            "state": "AR",
            "area_name": "Woodruff County",
            "value": 17.55759338
        }, {
            "fips_code": 5149,
            "state": "AR",
            "area_name": "Yell County",
            "value": 22.54584682
        }, {
            "fips_code": 6000,
            "state": "CA",
            "area_name": "California",
            "value": 15.80782899
        }, {
            "fips_code": 6001,
            "state": "CA",
            "area_name": "Alameda County",
            "value": 10.99556649
        }, {
            "fips_code": 6003,
            "state": "CA",
            "area_name": "Alpine County",
            "value": 6.295149639
        }, {
            "fips_code": 6005,
            "state": "CA",
            "area_name": "Amador County",
            "value": 8.690307328999999
        }, {
            "fips_code": 6007,
            "state": "CA",
            "area_name": "Butte County",
            "value": 9.660469729000001
        }, {
            "fips_code": 6009,
            "state": "CA",
            "area_name": "Calaveras County",
            "value": 9.195731166
        }, {
            "fips_code": 6011,
            "state": "CA",
            "area_name": "Colusa County",
            "value": 26.67479558
        }, {
            "fips_code": 6013,
            "state": "CA",
            "area_name": "Contra Costa County",
            "value": 10.2561427
        }, {
            "fips_code": 6015,
            "state": "CA",
            "area_name": "Del Norte County",
            "value": 19.41328732
        }, {
            "fips_code": 6017,
            "state": "CA",
            "area_name": "El Dorado County",
            "value": 5.321849631
        }, {
            "fips_code": 6019,
            "state": "CA",
            "area_name": "Fresno County",
            "value": 22.09239622
        }, {
            "fips_code": 6021,
            "state": "CA",
            "area_name": "Glenn County",
            "value": 23.52137313
        }, {
            "fips_code": 6023,
            "state": "CA",
            "area_name": "Humboldt County",
            "value": 9.008154346
        }, {
            "fips_code": 6025,
            "state": "CA",
            "area_name": "Imperial County",
            "value": 29.56006784
        }, {
            "fips_code": 6027,
            "state": "CA",
            "area_name": "Inyo County",
            "value": 7.915029827
        }, {
            "fips_code": 6029,
            "state": "CA",
            "area_name": "Kern County",
            "value": 24.05209301
        }, {
            "fips_code": 6031,
            "state": "CA",
            "area_name": "Kings County",
            "value": 26.36989571
        }, {
            "fips_code": 6033,
            "state": "CA",
            "area_name": "Lake County",
            "value": 13.40484769
        }, {
            "fips_code": 6035,
            "state": "CA",
            "area_name": "Lassen County",
            "value": 19.95230851
        }, {
            "fips_code": 6037,
            "state": "CA",
            "area_name": "Los Angeles County",
            "value": 19.95716305
        }, {
            "fips_code": 6039,
            "state": "CA",
            "area_name": "Madera County",
            "value": 28.1912897
        }, {
            "fips_code": 6041,
            "state": "CA",
            "area_name": "Marin County",
            "value": 6.576024909
        }, {
            "fips_code": 6043,
            "state": "CA",
            "area_name": "Mariposa County",
            "value": 9.124546733000001
        }, {
            "fips_code": 6045,
            "state": "CA",
            "area_name": "Mendocino County",
            "value": 13.35973354
        }, {
            "fips_code": 6047,
            "state": "CA",
            "area_name": "Merced County",
            "value": 29.64686542
        }, {
            "fips_code": 6049,
            "state": "CA",
            "area_name": "Modoc County",
            "value": 14.54905545
        }, {
            "fips_code": 6051,
            "state": "CA",
            "area_name": "Mono County",
            "value": 12.7829841
        }, {
            "fips_code": 6053,
            "state": "CA",
            "area_name": "Monterey County",
            "value": 27.01052316
        }, {
            "fips_code": 6055,
            "state": "CA",
            "area_name": "Napa County",
            "value": 14.75569537
        }, {
            "fips_code": 6057,
            "state": "CA",
            "area_name": "Nevada County",
            "value": 4.870195979
        }, {
            "fips_code": 6059,
            "state": "CA",
            "area_name": "Orange County",
            "value": 13.38891948
        }, {
            "fips_code": 6061,
            "state": "CA",
            "area_name": "Placer County",
            "value": 5.174401896
        }, {
            "fips_code": 6063,
            "state": "CA",
            "area_name": "Plumas County",
            "value": 5.449591281
        }, {
            "fips_code": 6065,
            "state": "CA",
            "area_name": "Riverside County",
            "value": 17.00949518
        }, {
            "fips_code": 6067,
            "state": "CA",
            "area_name": "Sacramento County",
            "value": 11.93478218
        }, {
            "fips_code": 6069,
            "state": "CA",
            "area_name": "San Benito County",
            "value": 16.74878043
        }, {
            "fips_code": 6071,
            "state": "CA",
            "area_name": "San Bernardino County",
            "value": 18.89536361
        }, {
            "fips_code": 6073,
            "state": "CA",
            "area_name": "San Diego County",
            "value": 11.6848286
        }, {
            "fips_code": 6075,
            "state": "CA",
            "area_name": "San Francisco County",
            "value": 11.219663
        }, {
            "fips_code": 6077,
            "state": "CA",
            "area_name": "San Joaquin County",
            "value": 19.70052806
        }, {
            "fips_code": 6079,
            "state": "CA",
            "area_name": "San Luis Obispo County",
            "value": 8.067338157
        }, {
            "fips_code": 6081,
            "state": "CA",
            "area_name": "San Mateo County",
            "value": 9.180960184
        }, {
            "fips_code": 6083,
            "state": "CA",
            "area_name": "Santa Barbara County",
            "value": 18.09198215
        }, {
            "fips_code": 6085,
            "state": "CA",
            "area_name": "Santa Clara County",
            "value": 10.81273363
        }, {
            "fips_code": 6087,
            "state": "CA",
            "area_name": "Santa Cruz County",
            "value": 11.72431036
        }, {
            "fips_code": 6089,
            "state": "CA",
            "area_name": "Shasta County",
            "value": 8.935611037999999
        }, {
            "fips_code": 6091,
            "state": "CA",
            "area_name": "Sierra County",
            "value": 5.63502384
        }, {
            "fips_code": 6093,
            "state": "CA",
            "area_name": "Siskiyou County",
            "value": 10.08596344
        }, {
            "fips_code": 6095,
            "state": "CA",
            "area_name": "Solano County",
            "value": 11.14930279
        }, {
            "fips_code": 6097,
            "state": "CA",
            "area_name": "Sonoma County",
            "value": 10.83449059
        }, {
            "fips_code": 6099,
            "state": "CA",
            "area_name": "Stanislaus County",
            "value": 20.04687921
        }, {
            "fips_code": 6101,
            "state": "CA",
            "area_name": "Sutter County",
            "value": 20.35084474
        }, {
            "fips_code": 6103,
            "state": "CA",
            "area_name": "Tehama County",
            "value": 14.2313004
        }, {
            "fips_code": 6105,
            "state": "CA",
            "area_name": "Trinity County",
            "value": 6.115424638
        }, {
            "fips_code": 6107,
            "state": "CA",
            "area_name": "Tulare County",
            "value": 27.38189719
        }, {
            "fips_code": 6109,
            "state": "CA",
            "area_name": "Tuolumne County",
            "value": 7.908241693
        }, {
            "fips_code": 6111,
            "state": "CA",
            "area_name": "Ventura County",
            "value": 14.3749402
        }, {
            "fips_code": 6113,
            "state": "CA",
            "area_name": "Yolo County",
            "value": 12.3989725
        }, {
            "fips_code": 6115,
            "state": "CA",
            "area_name": "Yuba County",
            "value": 18.8320507
        }, {
            "fips_code": 8000,
            "state": "CO",
            "area_name": "Colorado",
            "value": 7.635685693
        }, {
            "fips_code": 8001,
            "state": "CO",
            "area_name": "Adams County",
            "value": 15.13580771
        }, {
            "fips_code": 8003,
            "state": "CO",
            "area_name": "Alamosa County",
            "value": 13.05278174
        }, {
            "fips_code": 8005,
            "state": "CO",
            "area_name": "Arapahoe County",
            "value": 7.93063273
        }, {
            "fips_code": 8007,
            "state": "CO",
            "area_name": "Archuleta County",
            "value": 5.9637077
        }, {
            "fips_code": 8009,
            "state": "CO",
            "area_name": "Baca County",
            "value": 14.45972495
        }, {
            "fips_code": 8011,
            "state": "CO",
            "area_name": "Bent County",
            "value": 12.9160238
        }, {
            "fips_code": 8013,
            "state": "CO",
            "area_name": "Boulder County",
            "value": 4.512600829
        }, {
            "fips_code": 8014,
            "state": "CO",
            "area_name": "Broomfield County",
            "value": 3.415477735
        }, {
            "fips_code": 8015,
            "state": "CO",
            "area_name": "Chaffee County",
            "value": 5.591158776
        }, {
            "fips_code": 8017,
            "state": "CO",
            "area_name": "Cheyenne County",
            "value": 6.968641115
        }, {
            "fips_code": 8019,
            "state": "CO",
            "area_name": "Clear Creek County",
            "value": 2.652064916
        }, {
            "fips_code": 8021,
            "state": "CO",
            "area_name": "Conejos County",
            "value": 10.5400522
        }, {
            "fips_code": 8023,
            "state": "CO",
            "area_name": "Costilla County",
            "value": 13.13868613
        }, {
            "fips_code": 8025,
            "state": "CO",
            "area_name": "Crowley County",
            "value": 10.97387173
        }, {
            "fips_code": 8027,
            "state": "CO",
            "area_name": "Custer County",
            "value": 1.712887439
        }, {
            "fips_code": 8029,
            "state": "CO",
            "area_name": "Delta County",
            "value": 10.35880891
        }, {
            "fips_code": 8031,
            "state": "CO",
            "area_name": "Denver County",
            "value": 9.96761362
        }, {
            "fips_code": 8033,
            "state": "CO",
            "area_name": "Dolores County",
            "value": 3.569607343
        }, {
            "fips_code": 8035,
            "state": "CO",
            "area_name": "Douglas County",
            "value": 2.124376929
        }, {
            "fips_code": 8037,
            "state": "CO",
            "area_name": "Eagle County",
            "value": 8.294571694
        }, {
            "fips_code": 8039,
            "state": "CO",
            "area_name": "Elbert County",
            "value": 3.650382832
        }, {
            "fips_code": 8041,
            "state": "CO",
            "area_name": "El Paso County",
            "value": 5.550444714
        }, {
            "fips_code": 8043,
            "state": "CO",
            "area_name": "Fremont County",
            "value": 10.32210449
        }, {
            "fips_code": 8045,
            "state": "CO",
            "area_name": "Garfield County",
            "value": 10.40134841
        }, {
            "fips_code": 8047,
            "state": "CO",
            "area_name": "Gilpin County",
            "value": 6.26603935
        }, {
            "fips_code": 8049,
            "state": "CO",
            "area_name": "Grand County",
            "value": 5.552279046
        }, {
            "fips_code": 8051,
            "state": "CO",
            "area_name": "Gunnison County",
            "value": 2.041750595
        }, {
            "fips_code": 8053,
            "state": "CO",
            "area_name": "Hinsdale County",
            "value": 3.629032258
        }, {
            "fips_code": 8055,
            "state": "CO",
            "area_name": "Huerfano County",
            "value": 7.901427733
        }, {
            "fips_code": 8057,
            "state": "CO",
            "area_name": "Jackson County",
            "value": 13.90176089
        }, {
            "fips_code": 8059,
            "state": "CO",
            "area_name": "Jefferson County",
            "value": 4.860872918
        }, {
            "fips_code": 8061,
            "state": "CO",
            "area_name": "Kiowa County",
            "value": 2.900107411
        }, {
            "fips_code": 8063,
            "state": "CO",
            "area_name": "Kit Carson County",
            "value": 10.80008356
        }, {
            "fips_code": 8065,
            "state": "CO",
            "area_name": "Lake County",
            "value": 11.71976896
        }, {
            "fips_code": 8067,
            "state": "CO",
            "area_name": "La Plata County",
            "value": 3.405712001
        }, {
            "fips_code": 8069,
            "state": "CO",
            "area_name": "Larimer County",
            "value": 3.67583225
        }, {
            "fips_code": 8071,
            "state": "CO",
            "area_name": "Las Animas County",
            "value": 11.8160488
        }, {
            "fips_code": 8073,
            "state": "CO",
            "area_name": "Lincoln County",
            "value": 11.26693606
        }, {
            "fips_code": 8075,
            "state": "CO",
            "area_name": "Logan County",
            "value": 8.574250905
        }, {
            "fips_code": 8077,
            "state": "CO",
            "area_name": "Mesa County",
            "value": 8.451408568
        }, {
            "fips_code": 8079,
            "state": "CO",
            "area_name": "Mineral County",
            "value": 2.089552239
        }, {
            "fips_code": 8081,
            "state": "CO",
            "area_name": "Moffat County",
            "value": 8.020134228
        }, {
            "fips_code": 8083,
            "state": "CO",
            "area_name": "Montezuma County",
            "value": 9.123733563
        }, {
            "fips_code": 8085,
            "state": "CO",
            "area_name": "Montrose County",
            "value": 11.21550786
        }, {
            "fips_code": 8087,
            "state": "CO",
            "area_name": "Morgan County",
            "value": 19.28330387
        }, {
            "fips_code": 8089,
            "state": "CO",
            "area_name": "Otero County",
            "value": 12.15831885
        }, {
            "fips_code": 8091,
            "state": "CO",
            "area_name": "Ouray County",
            "value": 1.379829403
        }, {
            "fips_code": 8093,
            "state": "CO",
            "area_name": "Park County",
            "value": 2.541396688
        }, {
            "fips_code": 8095,
            "state": "CO",
            "area_name": "Phillips County",
            "value": 13.22807018
        }, {
            "fips_code": 8097,
            "state": "CO",
            "area_name": "Pitkin County",
            "value": 2.491261992
        }, {
            "fips_code": 8099,
            "state": "CO",
            "area_name": "Prowers County",
            "value": 17.83026213
        }, {
            "fips_code": 8101,
            "state": "CO",
            "area_name": "Pueblo County",
            "value": 9.467635656000001
        }, {
            "fips_code": 8103,
            "state": "CO",
            "area_name": "Rio Blanco County",
            "value": 8.532344075999999
        }, {
            "fips_code": 8105,
            "state": "CO",
            "area_name": "Rio Grande County",
            "value": 10.91478697
        }, {
            "fips_code": 8107,
            "state": "CO",
            "area_name": "Routt County",
            "value": 3.327092806
        }, {
            "fips_code": 8109,
            "state": "CO",
            "area_name": "Saguache County",
            "value": 13.34033613
        }, {
            "fips_code": 8111,
            "state": "CO",
            "area_name": "San Juan County",
            "value": 3.423423423
        }, {
            "fips_code": 8113,
            "state": "CO",
            "area_name": "San Miguel County",
            "value": 1.714194169
        }, {
            "fips_code": 8115,
            "state": "CO",
            "area_name": "Sedgwick County",
            "value": 11.26357919
        }, {
            "fips_code": 8117,
            "state": "CO",
            "area_name": "Summit County",
            "value": 5.456349206
        }, {
            "fips_code": 8119,
            "state": "CO",
            "area_name": "Teller County",
            "value": 2.158836106
        }, {
            "fips_code": 8121,
            "state": "CO",
            "area_name": "Washington County",
            "value": 8.582420835000001
        }, {
            "fips_code": 8123,
            "state": "CO",
            "area_name": "Weld County",
            "value": 11.91132816
        }, {
            "fips_code": 8125,
            "state": "CO",
            "area_name": "Yuma County",
            "value": 12.52102125
        }, {
            "fips_code": 9000,
            "state": "CT",
            "area_name": "Connecticut",
            "value": 8.946669704
        }, {
            "fips_code": 9001,
            "state": "CT",
            "area_name": "Fairfield County",
            "value": 9.805912404000001
        }, {
            "fips_code": 9003,
            "state": "CT",
            "area_name": "Hartford County",
            "value": 9.694218399
        }, {
            "fips_code": 9005,
            "state": "CT",
            "area_name": "Litchfield County",
            "value": 6.109383044
        }, {
            "fips_code": 9007,
            "state": "CT",
            "area_name": "Middlesex County",
            "value": 5.013307844
        }, {
            "fips_code": 9009,
            "state": "CT",
            "area_name": "New Haven County",
            "value": 9.67656556
        }, {
            "fips_code": 9011,
            "state": "CT",
            "area_name": "New London County",
            "value": 6.960755929
        }, {
            "fips_code": 9013,
            "state": "CT",
            "area_name": "Tolland County",
            "value": 5.177327918
        }, {
            "fips_code": 9015,
            "state": "CT",
            "area_name": "Windham County",
            "value": 10.56921481
        }, {
            "fips_code": 10000,
            "state": "DE",
            "area_name": "Delaware",
            "value": 8.946769415
        }, {
            "fips_code": 10001,
            "state": "DE",
            "area_name": "Kent County",
            "value": 11.18182044
        }, {
            "fips_code": 10003,
            "state": "DE",
            "area_name": "New Castle County",
            "value": 7.62630641
        }, {
            "fips_code": 10005,
            "state": "DE",
            "area_name": "Sussex County",
            "value": 10.35991611
        }, {
            "fips_code": 11000,
            "state": "DC",
            "area_name": "District of Columbia",
            "value": 7.777727659
        }, {
            "fips_code": 11001,
            "state": "DC",
            "area_name": "District of Columbia",
            "value": 7.777727659
        }, {
            "fips_code": 12000,
            "state": "FL",
            "area_name": "Florida",
            "value": 10.96145164
        }, {
            "fips_code": 12001,
            "state": "FL",
            "area_name": "Alachua County",
            "value": 6.820671056
        }, {
            "fips_code": 12003,
            "state": "FL",
            "area_name": "Baker County",
            "value": 14.18166464
        }, {
            "fips_code": 12005,
            "state": "FL",
            "area_name": "Bay County",
            "value": 9.921141628000001
        }, {
            "fips_code": 12007,
            "state": "FL",
            "area_name": "Bradford County",
            "value": 18.01956832
        }, {
            "fips_code": 12009,
            "state": "FL",
            "area_name": "Brevard County",
            "value": 7.509306291
        }, {
            "fips_code": 12011,
            "state": "FL",
            "area_name": "Broward County",
            "value": 10.03151306
        }, {
            "fips_code": 12013,
            "state": "FL",
            "area_name": "Calhoun County",
            "value": 22.33497537
        }, {
            "fips_code": 12015,
            "state": "FL",
            "area_name": "Charlotte County",
            "value": 8.247080636
        }, {
            "fips_code": 12017,
            "state": "FL",
            "area_name": "Citrus County",
            "value": 10.10200289
        }, {
            "fips_code": 12019,
            "state": "FL",
            "area_name": "Clay County",
            "value": 8.081519805999999
        }, {
            "fips_code": 12021,
            "state": "FL",
            "area_name": "Collier County",
            "value": 10.52422948
        }, {
            "fips_code": 12023,
            "state": "FL",
            "area_name": "Columbia County",
            "value": 13.52467609
        }, {
            "fips_code": 12027,
            "state": "FL",
            "area_name": "DeSoto County",
            "value": 25.21195895
        }, {
            "fips_code": 12029,
            "state": "FL",
            "area_name": "Dixie County",
            "value": 19.09878127
        }, {
            "fips_code": 12031,
            "state": "FL",
            "area_name": "Duval County",
            "value": 9.500403306999999
        }, {
            "fips_code": 12033,
            "state": "FL",
            "area_name": "Escambia County",
            "value": 9.400516531999999
        }, {
            "fips_code": 12035,
            "state": "FL",
            "area_name": "Flagler County",
            "value": 7.679241196
        }, {
            "fips_code": 12037,
            "state": "FL",
            "area_name": "Franklin County",
            "value": 21.10856428
        }, {
            "fips_code": 12039,
            "state": "FL",
            "area_name": "Gadsden County",
            "value": 19.2192867
        }, {
            "fips_code": 12041,
            "state": "FL",
            "area_name": "Gilchrist County",
            "value": 13.69042803
        }, {
            "fips_code": 12043,
            "state": "FL",
            "area_name": "Glades County",
            "value": 30.57706204
        }, {
            "fips_code": 12045,
            "state": "FL",
            "area_name": "Gulf County",
            "value": 13.26125517
        }, {
            "fips_code": 12047,
            "state": "FL",
            "area_name": "Hamilton County",
            "value": 24.08155415
        }, {
            "fips_code": 12049,
            "state": "FL",
            "area_name": "Hardee County",
            "value": 23.75927154
        }, {
            "fips_code": 12051,
            "state": "FL",
            "area_name": "Hendry County",
            "value": 30.68086634
        }, {
            "fips_code": 12053,
            "state": "FL",
            "area_name": "Hernando County",
            "value": 11.01209731
        }, {
            "fips_code": 12055,
            "state": "FL",
            "area_name": "Highlands County",
            "value": 14.09233217
        }, {
            "fips_code": 12057,
            "state": "FL",
            "area_name": "Hillsborough County",
            "value": 10.81641086
        }, {
            "fips_code": 12059,
            "state": "FL",
            "area_name": "Holmes County",
            "value": 19.51577916
        }, {
            "fips_code": 12061,
            "state": "FL",
            "area_name": "Indian River County",
            "value": 8.869152476
        }, {
            "fips_code": 12063,
            "state": "FL",
            "area_name": "Jackson County",
            "value": 16.64626683
        }, {
            "fips_code": 12065,
            "state": "FL",
            "area_name": "Jefferson County",
            "value": 16.19489559
        }, {
            "fips_code": 12067,
            "state": "FL",
            "area_name": "Lafayette County",
            "value": 26.38006022
        }, {
            "fips_code": 12069,
            "state": "FL",
            "area_name": "Lake County",
            "value": 9.619611158
        }, {
            "fips_code": 12071,
            "state": "FL",
            "area_name": "Lee County",
            "value": 10.23274888
        }, {
            "fips_code": 12073,
            "state": "FL",
            "area_name": "Leon County",
            "value": 6.801426327
        }, {
            "fips_code": 12075,
            "state": "FL",
            "area_name": "Levy County",
            "value": 12.44063663
        }, {
            "fips_code": 12077,
            "state": "FL",
            "area_name": "Liberty County",
            "value": 23.00069541
        }, {
            "fips_code": 12079,
            "state": "FL",
            "area_name": "Madison County",
            "value": 19.53049551
        }, {
            "fips_code": 12081,
            "state": "FL",
            "area_name": "Manatee County",
            "value": 9.74082771
        }, {
            "fips_code": 12083,
            "state": "FL",
            "area_name": "Marion County",
            "value": 11.61702559
        }, {
            "fips_code": 12085,
            "state": "FL",
            "area_name": "Martin County",
            "value": 7.896494973
        }, {
            "fips_code": 12086,
            "state": "FL",
            "area_name": "Miami-Dade County",
            "value": 17.51028211
        }, {
            "fips_code": 12087,
            "state": "FL",
            "area_name": "Monroe County",
            "value": 7.933035437
        }, {
            "fips_code": 12089,
            "state": "FL",
            "area_name": "Nassau County",
            "value": 8.503645730000001
        }, {
            "fips_code": 12091,
            "state": "FL",
            "area_name": "Okaloosa County",
            "value": 7.119078462
        }, {
            "fips_code": 12093,
            "state": "FL",
            "area_name": "Okeechobee County",
            "value": 19.377863
        }, {
            "fips_code": 12095,
            "state": "FL",
            "area_name": "Orange County",
            "value": 10.53289676
        }, {
            "fips_code": 12097,
            "state": "FL",
            "area_name": "Osceola County",
            "value": 13.38991996
        }, {
            "fips_code": 12099,
            "state": "FL",
            "area_name": "Palm Beach County",
            "value": 10.93339908
        }, {
            "fips_code": 12101,
            "state": "FL",
            "area_name": "Pasco County",
            "value": 9.565610905
        }, {
            "fips_code": 12103,
            "state": "FL",
            "area_name": "Pinellas County",
            "value": 7.8532266
        }, {
            "fips_code": 12105,
            "state": "FL",
            "area_name": "Polk County",
            "value": 13.64263731
        }, {
            "fips_code": 12107,
            "state": "FL",
            "area_name": "Putnam County",
            "value": 18.13857528
        }, {
            "fips_code": 12109,
            "state": "FL",
            "area_name": "St. Johns County",
            "value": 5.300202003
        }, {
            "fips_code": 12111,
            "state": "FL",
            "area_name": "St. Lucie County",
            "value": 11.78188448
        }, {
            "fips_code": 12113,
            "state": "FL",
            "area_name": "Santa Rosa County",
            "value": 7.717260342
        }, {
            "fips_code": 12115,
            "state": "FL",
            "area_name": "Sarasota County",
            "value": 6.316132467
        }, {
            "fips_code": 12117,
            "state": "FL",
            "area_name": "Seminole County",
            "value": 5.819891457
        }, {
            "fips_code": 12119,
            "state": "FL",
            "area_name": "Sumter County",
            "value": 7.780015168
        }, {
            "fips_code": 12121,
            "state": "FL",
            "area_name": "Suwannee County",
            "value": 17.09312898
        }, {
            "fips_code": 12123,
            "state": "FL",
            "area_name": "Taylor County",
            "value": 17.80085064
        }, {
            "fips_code": 12125,
            "state": "FL",
            "area_name": "Union County",
            "value": 22.68093782
        }, {
            "fips_code": 12127,
            "state": "FL",
            "area_name": "Volusia County",
            "value": 8.868399488
        }, {
            "fips_code": 12129,
            "state": "FL",
            "area_name": "Wakulla County",
            "value": 11.82157676
        }, {
            "fips_code": 12131,
            "state": "FL",
            "area_name": "Walton County",
            "value": 8.775849335
        }, {
            "fips_code": 12133,
            "state": "FL",
            "area_name": "Washington County",
            "value": 16.42857143
        }, {
            "fips_code": 13000,
            "state": "GA",
            "area_name": "Georgia",
            "value": 11.75813923
        }, {
            "fips_code": 13001,
            "state": "GA",
            "area_name": "Appling County",
            "value": 22.20422706
        }, {
            "fips_code": 13003,
            "state": "GA",
            "area_name": "Atkinson County",
            "value": 33.15609571
        }, {
            "fips_code": 13005,
            "state": "GA",
            "area_name": "Bacon County",
            "value": 16.65753425
        }, {
            "fips_code": 13007,
            "state": "GA",
            "area_name": "Baker County",
            "value": 16.36278635
        }, {
            "fips_code": 13009,
            "state": "GA",
            "area_name": "Baldwin County",
            "value": 14.3018346
        }, {
            "fips_code": 13011,
            "state": "GA",
            "area_name": "Banks County",
            "value": 23.09836718
        }, {
            "fips_code": 13013,
            "state": "GA",
            "area_name": "Barrow County",
            "value": 12.27639425
        }, {
            "fips_code": 13015,
            "state": "GA",
            "area_name": "Bartow County",
            "value": 13.44835244
        }, {
            "fips_code": 13017,
            "state": "GA",
            "area_name": "Ben Hill County",
            "value": 16.22788088
        }, {
            "fips_code": 13019,
            "state": "GA",
            "area_name": "Berrien County",
            "value": 19.41654711
        }, {
            "fips_code": 13021,
            "state": "GA",
            "area_name": "Bibb County",
            "value": 13.60984841
        }, {
            "fips_code": 13023,
            "state": "GA",
            "area_name": "Bleckley County",
            "value": 12.42350061
        }, {
            "fips_code": 13025,
            "state": "GA",
            "area_name": "Brantley County",
            "value": 18.71086852
        }, {
            "fips_code": 13027,
            "state": "GA",
            "area_name": "Brooks County",
            "value": 18.44334628
        }, {
            "fips_code": 13029,
            "state": "GA",
            "area_name": "Bryan County",
            "value": 7.715788312
        }, {
            "fips_code": 13031,
            "state": "GA",
            "area_name": "Bulloch County",
            "value": 11.79932422
        }, {
            "fips_code": 13033,
            "state": "GA",
            "area_name": "Burke County",
            "value": 16.07926672
        }, {
            "fips_code": 13035,
            "state": "GA",
            "area_name": "Butts County",
            "value": 18.84905982
        }, {
            "fips_code": 13037,
            "state": "GA",
            "area_name": "Calhoun County",
            "value": 23.42682065
        }, {
            "fips_code": 13039,
            "state": "GA",
            "area_name": "Camden County",
            "value": 8.17988261
        }, {
            "fips_code": 13043,
            "state": "GA",
            "area_name": "Candler County",
            "value": 21.86168019
        }, {
            "fips_code": 13045,
            "state": "GA",
            "area_name": "Carroll County",
            "value": 14.40415197
        }, {
            "fips_code": 13047,
            "state": "GA",
            "area_name": "Catoosa County",
            "value": 10.88432478
        }, {
            "fips_code": 13049,
            "state": "GA",
            "area_name": "Charlton County",
            "value": 19.18924873
        }, {
            "fips_code": 13051,
            "state": "GA",
            "area_name": "Chatham County",
            "value": 9.384328172
        }, {
            "fips_code": 13053,
            "state": "GA",
            "area_name": "Chattahoochee County",
            "value": 4.925146453
        }, {
            "fips_code": 13055,
            "state": "GA",
            "area_name": "Chattooga County",
            "value": 28.01656266
        }, {
            "fips_code": 13057,
            "state": "GA",
            "area_name": "Cherokee County",
            "value": 8.05040979
        }, {
            "fips_code": 13059,
            "state": "GA",
            "area_name": "Clarke County",
            "value": 10.28831937
        }, {
            "fips_code": 13061,
            "state": "GA",
            "area_name": "Clay County",
            "value": 19.57029426
        }, {
            "fips_code": 13063,
            "state": "GA",
            "area_name": "Clayton County",
            "value": 14.62884712
        }, {
            "fips_code": 13065,
            "state": "GA",
            "area_name": "Clinch County",
            "value": 25.76914685
        }, {
            "fips_code": 13067,
            "state": "GA",
            "area_name": "Cobb County",
            "value": 7.087758459
        }, {
            "fips_code": 13069,
            "state": "GA",
            "area_name": "Coffee County",
            "value": 22.82053989
        }, {
            "fips_code": 13071,
            "state": "GA",
            "area_name": "Colquitt County",
            "value": 23.58960639
        }, {
            "fips_code": 13073,
            "state": "GA",
            "area_name": "Columbia County",
            "value": 7.083308985
        }, {
            "fips_code": 13075,
            "state": "GA",
            "area_name": "Cook County",
            "value": 18.61788618
        }, {
            "fips_code": 13077,
            "state": "GA",
            "area_name": "Coweta County",
            "value": 9.502253217
        }, {
            "fips_code": 13079,
            "state": "GA",
            "area_name": "Crawford County",
            "value": 18.7260258
        }, {
            "fips_code": 13081,
            "state": "GA",
            "area_name": "Crisp County",
            "value": 16.62311266
        }, {
            "fips_code": 13083,
            "state": "GA",
            "area_name": "Dade County",
            "value": 17.16491606
        }, {
            "fips_code": 13085,
            "state": "GA",
            "area_name": "Dawson County",
            "value": 11.6186111
        }, {
            "fips_code": 13087,
            "state": "GA",
            "area_name": "Decatur County",
            "value": 15.56491009
        }, {
            "fips_code": 13089,
            "state": "GA",
            "area_name": "DeKalb County",
            "value": 9.27675981
        }, {
            "fips_code": 13091,
            "state": "GA",
            "area_name": "Dodge County",
            "value": 14.09178611
        }, {
            "fips_code": 13093,
            "state": "GA",
            "area_name": "Dooly County",
            "value": 19.96720928
        }, {
            "fips_code": 13095,
            "state": "GA",
            "area_name": "Dougherty County",
            "value": 16.44026846
        }, {
            "fips_code": 13097,
            "state": "GA",
            "area_name": "Douglas County",
            "value": 11.69248632
        }, {
            "fips_code": 13099,
            "state": "GA",
            "area_name": "Early County",
            "value": 19.83494593
        }, {
            "fips_code": 13101,
            "state": "GA",
            "area_name": "Echols County",
            "value": 20.98039216
        }, {
            "fips_code": 13103,
            "state": "GA",
            "area_name": "Effingham County",
            "value": 9.648509962
        }, {
            "fips_code": 13105,
            "state": "GA",
            "area_name": "Elbert County",
            "value": 20.80522307
        }, {
            "fips_code": 13107,
            "state": "GA",
            "area_name": "Emanuel County",
            "value": 19.85245248
        }, {
            "fips_code": 13109,
            "state": "GA",
            "area_name": "Evans County",
            "value": 22.82192945
        }, {
            "fips_code": 13111,
            "state": "GA",
            "area_name": "Fannin County",
            "value": 12.36471309
        }, {
            "fips_code": 13113,
            "state": "GA",
            "area_name": "Fayette County",
            "value": 5.148920328
        }, {
            "fips_code": 13115,
            "state": "GA",
            "area_name": "Floyd County",
            "value": 16.29800143
        }, {
            "fips_code": 13117,
            "state": "GA",
            "area_name": "Forsyth County",
            "value": 6.374847253
        }, {
            "fips_code": 13119,
            "state": "GA",
            "area_name": "Franklin County",
            "value": 18.23365433
        }, {
            "fips_code": 13121,
            "state": "GA",
            "area_name": "Fulton County",
            "value": 6.754374519
        }, {
            "fips_code": 13123,
            "state": "GA",
            "area_name": "Gilmer County",
            "value": 14.96646049
        }, {
            "fips_code": 13125,
            "state": "GA",
            "area_name": "Glascock County",
            "value": 18.1678608
        }, {
            "fips_code": 13127,
            "state": "GA",
            "area_name": "Glynn County",
            "value": 11.03449436
        }, {
            "fips_code": 13129,
            "state": "GA",
            "area_name": "Gordon County",
            "value": 23.26724986
        }, {
            "fips_code": 13131,
            "state": "GA",
            "area_name": "Grady County",
            "value": 20.26381624
        }, {
            "fips_code": 13133,
            "state": "GA",
            "area_name": "Greene County",
            "value": 12.36895748
        }, {
            "fips_code": 13135,
            "state": "GA",
            "area_name": "Gwinnett County",
            "value": 12.12225558
        }, {
            "fips_code": 13137,
            "state": "GA",
            "area_name": "Habersham County",
            "value": 19.46467295
        }, {
            "fips_code": 13139,
            "state": "GA",
            "area_name": "Hall County",
            "value": 19.35884973
        }, {
            "fips_code": 13141,
            "state": "GA",
            "area_name": "Hancock County",
            "value": 30.97371126
        }, {
            "fips_code": 13143,
            "state": "GA",
            "area_name": "Haralson County",
            "value": 16.92992322
        }, {
            "fips_code": 13145,
            "state": "GA",
            "area_name": "Harris County",
            "value": 6.694665059
        }, {
            "fips_code": 13147,
            "state": "GA",
            "area_name": "Hart County",
            "value": 17.86890471
        }, {
            "fips_code": 13149,
            "state": "GA",
            "area_name": "Heard County",
            "value": 17.95689325
        }, {
            "fips_code": 13151,
            "state": "GA",
            "area_name": "Henry County",
            "value": 7.610178964
        }, {
            "fips_code": 13153,
            "state": "GA",
            "area_name": "Houston County",
            "value": 6.989415137
        }, {
            "fips_code": 13155,
            "state": "GA",
            "area_name": "Irwin County",
            "value": 21.13918373
        }, {
            "fips_code": 13157,
            "state": "GA",
            "area_name": "Jackson County",
            "value": 13.73406848
        }, {
            "fips_code": 13159,
            "state": "GA",
            "area_name": "Jasper County",
            "value": 12.39193084
        }, {
            "fips_code": 13161,
            "state": "GA",
            "area_name": "Jeff Davis County",
            "value": 20.45572781
        }, {
            "fips_code": 13163,
            "state": "GA",
            "area_name": "Jefferson County",
            "value": 20.28284332
        }, {
            "fips_code": 13165,
            "state": "GA",
            "area_name": "Jenkins County",
            "value": 17.77350016
        }, {
            "fips_code": 13167,
            "state": "GA",
            "area_name": "Johnson County",
            "value": 24.75850795
        }, {
            "fips_code": 13169,
            "state": "GA",
            "area_name": "Jones County",
            "value": 8.801767547000001
        }, {
            "fips_code": 13171,
            "state": "GA",
            "area_name": "Lamar County",
            "value": 10.31589339
        }, {
            "fips_code": 13173,
            "state": "GA",
            "area_name": "Lanier County",
            "value": 14.65685538
        }, {
            "fips_code": 13175,
            "state": "GA",
            "area_name": "Laurens County",
            "value": 13.61983271
        }, {
            "fips_code": 13177,
            "state": "GA",
            "area_name": "Lee County",
            "value": 8.843792473000001
        }, {
            "fips_code": 13179,
            "state": "GA",
            "area_name": "Liberty County",
            "value": 8.569062691999999
        }, {
            "fips_code": 13181,
            "state": "GA",
            "area_name": "Lincoln County",
            "value": 16.47286822
        }, {
            "fips_code": 13183,
            "state": "GA",
            "area_name": "Long County",
            "value": 17.5472058
        }, {
            "fips_code": 13185,
            "state": "GA",
            "area_name": "Lowndes County",
            "value": 11.0835949
        }, {
            "fips_code": 13187,
            "state": "GA",
            "area_name": "Lumpkin County",
            "value": 11.64445718
        }, {
            "fips_code": 13189,
            "state": "GA",
            "area_name": "McDuffie County",
            "value": 15.90489854
        }, {
            "fips_code": 13191,
            "state": "GA",
            "area_name": "McIntosh County",
            "value": 16.54894046
        }, {
            "fips_code": 13193,
            "state": "GA",
            "area_name": "Macon County",
            "value": 27.44920993
        }, {
            "fips_code": 13195,
            "state": "GA",
            "area_name": "Madison County",
            "value": 18.17431415
        }, {
            "fips_code": 13197,
            "state": "GA",
            "area_name": "Marion County",
            "value": 23.04307974
        }, {
            "fips_code": 13199,
            "state": "GA",
            "area_name": "Meriwether County",
            "value": 20.57675183
        }, {
            "fips_code": 13201,
            "state": "GA",
            "area_name": "Miller County",
            "value": 14.92971401
        }, {
            "fips_code": 13205,
            "state": "GA",
            "area_name": "Mitchell County",
            "value": 17.47746554
        }, {
            "fips_code": 13207,
            "state": "GA",
            "area_name": "Monroe County",
            "value": 11.28965589
        }, {
            "fips_code": 13209,
            "state": "GA",
            "area_name": "Montgomery County",
            "value": 19.08396947
        }, {
            "fips_code": 13211,
            "state": "GA",
            "area_name": "Morgan County",
            "value": 10.49791337
        }, {
            "fips_code": 13213,
            "state": "GA",
            "area_name": "Murray County",
            "value": 27.22295143
        }, {
            "fips_code": 13215,
            "state": "GA",
            "area_name": "Muscogee County",
            "value": 11.58384465
        }, {
            "fips_code": 13217,
            "state": "GA",
            "area_name": "Newton County",
            "value": 10.96936283
        }, {
            "fips_code": 13219,
            "state": "GA",
            "area_name": "Oconee County",
            "value": 3.979576513
        }, {
            "fips_code": 13221,
            "state": "GA",
            "area_name": "Oglethorpe County",
            "value": 15.10666923
        }, {
            "fips_code": 13223,
            "state": "GA",
            "area_name": "Paulding County",
            "value": 9.249065703999999
        }, {
            "fips_code": 13225,
            "state": "GA",
            "area_name": "Peach County",
            "value": 14.9712948
        }, {
            "fips_code": 13227,
            "state": "GA",
            "area_name": "Pickens County",
            "value": 11.86468853
        }, {
            "fips_code": 13229,
            "state": "GA",
            "area_name": "Pierce County",
            "value": 13.87770604
        }, {
            "fips_code": 13231,
            "state": "GA",
            "area_name": "Pike County",
            "value": 11.94158076
        }, {
            "fips_code": 13233,
            "state": "GA",
            "area_name": "Polk County",
            "value": 18.04991704
        }, {
            "fips_code": 13235,
            "state": "GA",
            "area_name": "Pulaski County",
            "value": 19.60890088
        }, {
            "fips_code": 13237,
            "state": "GA",
            "area_name": "Putnam County",
            "value": 12.36118122
        }, {
            "fips_code": 13239,
            "state": "GA",
            "area_name": "Quitman County",
            "value": 31.08956075
        }, {
            "fips_code": 13241,
            "state": "GA",
            "area_name": "Rabun County",
            "value": 14.35312623
        }, {
            "fips_code": 13243,
            "state": "GA",
            "area_name": "Randolph County",
            "value": 20.96661219
        }, {
            "fips_code": 13245,
            "state": "GA",
            "area_name": "Richmond County",
            "value": 13.63092159
        }, {
            "fips_code": 13247,
            "state": "GA",
            "area_name": "Rockdale County",
            "value": 10.59445306
        }, {
            "fips_code": 13249,
            "state": "GA",
            "area_name": "Schley County",
            "value": 13.55540897
        }, {
            "fips_code": 13251,
            "state": "GA",
            "area_name": "Screven County",
            "value": 16.60490736
        }, {
            "fips_code": 13253,
            "state": "GA",
            "area_name": "Seminole County",
            "value": 14.13139982
        }, {
            "fips_code": 13255,
            "state": "GA",
            "area_name": "Spalding County",
            "value": 16.2071901
        }, {
            "fips_code": 13257,
            "state": "GA",
            "area_name": "Stephens County",
            "value": 16.1110805
        }, {
            "fips_code": 13259,
            "state": "GA",
            "area_name": "Stewart County",
            "value": 28.97674419
        }, {
            "fips_code": 13261,
            "state": "GA",
            "area_name": "Sumter County",
            "value": 16.66044876
        }, {
            "fips_code": 13263,
            "state": "GA",
            "area_name": "Talbot County",
            "value": 18.08050944
        }, {
            "fips_code": 13265,
            "state": "GA",
            "area_name": "Taliaferro County",
            "value": 17.60617761
        }, {
            "fips_code": 13267,
            "state": "GA",
            "area_name": "Tattnall County",
            "value": 22.06200879
        }, {
            "fips_code": 13269,
            "state": "GA",
            "area_name": "Taylor County",
            "value": 23.75178317
        }, {
            "fips_code": 13271,
            "state": "GA",
            "area_name": "Telfair County",
            "value": 29.62391089
        }, {
            "fips_code": 13273,
            "state": "GA",
            "area_name": "Terrell County",
            "value": 20.77098243
        }, {
            "fips_code": 13275,
            "state": "GA",
            "area_name": "Thomas County",
            "value": 13.15873625
        }, {
            "fips_code": 13277,
            "state": "GA",
            "area_name": "Tift County",
            "value": 15.96823829
        }, {
            "fips_code": 13279,
            "state": "GA",
            "area_name": "Toombs County",
            "value": 17.67369869
        }, {
            "fips_code": 13281,
            "state": "GA",
            "area_name": "Towns County",
            "value": 7.476836889
        }, {
            "fips_code": 13283,
            "state": "GA",
            "area_name": "Treutlen County",
            "value": 24.79829141
        }, {
            "fips_code": 13285,
            "state": "GA",
            "area_name": "Troup County",
            "value": 12.85524511
        }, {
            "fips_code": 13287,
            "state": "GA",
            "area_name": "Turner County",
            "value": 20.33624313
        }, {
            "fips_code": 13289,
            "state": "GA",
            "area_name": "Twiggs County",
            "value": 19.63993453
        }, {
            "fips_code": 13291,
            "state": "GA",
            "area_name": "Union County",
            "value": 12.25238445
        }, {
            "fips_code": 13293,
            "state": "GA",
            "area_name": "Upson County",
            "value": 17.30923052
        }, {
            "fips_code": 13295,
            "state": "GA",
            "area_name": "Walker County",
            "value": 15.6281365
        }, {
            "fips_code": 13297,
            "state": "GA",
            "area_name": "Walton County",
            "value": 12.21439481
        }, {
            "fips_code": 13299,
            "state": "GA",
            "area_name": "Ware County",
            "value": 18.20479374
        }, {
            "fips_code": 13301,
            "state": "GA",
            "area_name": "Warren County",
            "value": 28.4589131
        }, {
            "fips_code": 13303,
            "state": "GA",
            "area_name": "Washington County",
            "value": 16.0039691
        }, {
            "fips_code": 13305,
            "state": "GA",
            "area_name": "Wayne County",
            "value": 15.4815614
        }, {
            "fips_code": 13307,
            "state": "GA",
            "area_name": "Webster County",
            "value": 19.40828402
        }, {
            "fips_code": 13309,
            "state": "GA",
            "area_name": "Wheeler County",
            "value": 27.01649863
        }, {
            "fips_code": 13311,
            "state": "GA",
            "area_name": "White County",
            "value": 14.83115303
        }, {
            "fips_code": 13313,
            "state": "GA",
            "area_name": "Whitfield County",
            "value": 27.68127681
        }, {
            "fips_code": 13315,
            "state": "GA",
            "area_name": "Wilcox County",
            "value": 17.7278402
        }, {
            "fips_code": 13317,
            "state": "GA",
            "area_name": "Wilkes County",
            "value": 19.17336395
        }, {
            "fips_code": 13319,
            "state": "GA",
            "area_name": "Wilkinson County",
            "value": 13.30761813
        }, {
            "fips_code": 13321,
            "state": "GA",
            "area_name": "Worth County",
            "value": 15.07979812
        }, {
            "fips_code": 15000,
            "state": "HI",
            "area_name": "Hawaii",
            "value": 7.297765042
        }, {
            "fips_code": 15001,
            "state": "HI",
            "area_name": "Hawaii County",
            "value": 7.175247663
        }, {
            "fips_code": 15003,
            "state": "HI",
            "area_name": "Honolulu County",
            "value": 7.252190302
        }, {
            "fips_code": 15005,
            "state": "HI",
            "area_name": "Kalawao County",
            "value": 6.382978723
        }, {
            "fips_code": 15007,
            "state": "HI",
            "area_name": "Kauai County",
            "value": 7.915904239
        }, {
            "fips_code": 15009,
            "state": "HI",
            "area_name": "Maui County",
            "value": 7.445318667
        }, {
            "fips_code": 16000,
            "state": "ID",
            "area_name": "Idaho",
            "value": 8.832540076000001
        }, {
            "fips_code": 16001,
            "state": "ID",
            "area_name": "Ada County",
            "value": 4.970223423
        }, {
            "fips_code": 16003,
            "state": "ID",
            "area_name": "Adams County",
            "value": 7.499270499
        }, {
            "fips_code": 16005,
            "state": "ID",
            "area_name": "Bannock County",
            "value": 6.711945665
        }, {
            "fips_code": 16007,
            "state": "ID",
            "area_name": "Bear Lake County",
            "value": 6.890674458
        }, {
            "fips_code": 16009,
            "state": "ID",
            "area_name": "Benewah County",
            "value": 14.19039146
        }, {
            "fips_code": 16011,
            "state": "ID",
            "area_name": "Bingham County",
            "value": 10.67450926
        }, {
            "fips_code": 16013,
            "state": "ID",
            "area_name": "Blaine County",
            "value": 9.975253358
        }, {
            "fips_code": 16015,
            "state": "ID",
            "area_name": "Boise County",
            "value": 5.293037235
        }, {
            "fips_code": 16017,
            "state": "ID",
            "area_name": "Bonner County",
            "value": 8.101411697
        }, {
            "fips_code": 16019,
            "state": "ID",
            "area_name": "Bonneville County",
            "value": 7.497636732
        }, {
            "fips_code": 16021,
            "state": "ID",
            "area_name": "Boundary County",
            "value": 11.71532847
        }, {
            "fips_code": 16023,
            "state": "ID",
            "area_name": "Butte County",
            "value": 10.783798
        }, {
            "fips_code": 16025,
            "state": "ID",
            "area_name": "Camas County",
            "value": 20.4735376
        }, {
            "fips_code": 16027,
            "state": "ID",
            "area_name": "Canyon County",
            "value": 13.47545693
        }, {
            "fips_code": 16029,
            "state": "ID",
            "area_name": "Caribou County",
            "value": 10.30927835
        }, {
            "fips_code": 16031,
            "state": "ID",
            "area_name": "Cassia County",
            "value": 15.68883692
        }, {
            "fips_code": 16033,
            "state": "ID",
            "area_name": "Clark County",
            "value": 34.61538462
        }, {
            "fips_code": 16035,
            "state": "ID",
            "area_name": "Clearwater County",
            "value": 7.570243121
        }, {
            "fips_code": 16037,
            "state": "ID",
            "area_name": "Custer County",
            "value": 12.99140049
        }, {
            "fips_code": 16039,
            "state": "ID",
            "area_name": "Elmore County",
            "value": 10.74661898
        }, {
            "fips_code": 16041,
            "state": "ID",
            "area_name": "Franklin County",
            "value": 7.25363875
        }, {
            "fips_code": 16043,
            "state": "ID",
            "area_name": "Fremont County",
            "value": 11.46352515
        }, {
            "fips_code": 16045,
            "state": "ID",
            "area_name": "Gem County",
            "value": 12.20310597
        }, {
            "fips_code": 16047,
            "state": "ID",
            "area_name": "Gooding County",
            "value": 22.83146521
        }, {
            "fips_code": 16049,
            "state": "ID",
            "area_name": "Idaho County",
            "value": 7.846670489
        }, {
            "fips_code": 16051,
            "state": "ID",
            "area_name": "Jefferson County",
            "value": 8.206739005999999
        }, {
            "fips_code": 16053,
            "state": "ID",
            "area_name": "Jerome County",
            "value": 23.69420703
        }, {
            "fips_code": 16055,
            "state": "ID",
            "area_name": "Kootenai County",
            "value": 6.46293866
        }, {
            "fips_code": 16057,
            "state": "ID",
            "area_name": "Latah County",
            "value": 3.484033322
        }, {
            "fips_code": 16059,
            "state": "ID",
            "area_name": "Lemhi County",
            "value": 10.03637566
        }, {
            "fips_code": 16061,
            "state": "ID",
            "area_name": "Lewis County",
            "value": 10.03098373
        }, {
            "fips_code": 16063,
            "state": "ID",
            "area_name": "Lincoln County",
            "value": 18.66387058
        }, {
            "fips_code": 16065,
            "state": "ID",
            "area_name": "Madison County",
            "value": 4.386246051
        }, {
            "fips_code": 16067,
            "state": "ID",
            "area_name": "Minidoka County",
            "value": 20.8847427
        }, {
            "fips_code": 16069,
            "state": "ID",
            "area_name": "Nez Perce County",
            "value": 6.838280661
        }, {
            "fips_code": 16071,
            "state": "ID",
            "area_name": "Oneida County",
            "value": 9.911444142000001
        }, {
            "fips_code": 16073,
            "state": "ID",
            "area_name": "Owyhee County",
            "value": 25.14073695
        }, {
            "fips_code": 16075,
            "state": "ID",
            "area_name": "Payette County",
            "value": 13.85549484
        }, {
            "fips_code": 16077,
            "state": "ID",
            "area_name": "Power County",
            "value": 20.54738562
        }, {
            "fips_code": 16079,
            "state": "ID",
            "area_name": "Shoshone County",
            "value": 11.5964802
        }, {
            "fips_code": 16081,
            "state": "ID",
            "area_name": "Teton County",
            "value": 7.607052897
        }, {
            "fips_code": 16083,
            "state": "ID",
            "area_name": "Twin Falls County",
            "value": 12.96978629
        }, {
            "fips_code": 16085,
            "state": "ID",
            "area_name": "Valley County",
            "value": 9.450744941
        }, {
            "fips_code": 16087,
            "state": "ID",
            "area_name": "Washington County",
            "value": 12.18686527
        }, {
            "fips_code": 17000,
            "state": "IL",
            "area_name": "Illinois",
            "value": 10.1007795
        }, {
            "fips_code": 17001,
            "state": "IL",
            "area_name": "Adams County",
            "value": 7.557305032
        }, {
            "fips_code": 17003,
            "state": "IL",
            "area_name": "Alexander County",
            "value": 13.79942393
        }, {
            "fips_code": 17005,
            "state": "IL",
            "area_name": "Bond County",
            "value": 11.23736319
        }, {
            "fips_code": 17007,
            "state": "IL",
            "area_name": "Boone County",
            "value": 12.91898455
        }, {
            "fips_code": 17009,
            "state": "IL",
            "area_name": "Brown County",
            "value": 19.31228374
        }, {
            "fips_code": 17011,
            "state": "IL",
            "area_name": "Bureau County",
            "value": 9.405314213
        }, {
            "fips_code": 17013,
            "state": "IL",
            "area_name": "Calhoun County",
            "value": 7.239411235
        }, {
            "fips_code": 17015,
            "state": "IL",
            "area_name": "Carroll County",
            "value": 12.07653151
        }, {
            "fips_code": 17017,
            "state": "IL",
            "area_name": "Cass County",
            "value": 15.06333447
        }, {
            "fips_code": 17019,
            "state": "IL",
            "area_name": "Champaign County",
            "value": 5.229051393
        }, {
            "fips_code": 17021,
            "state": "IL",
            "area_name": "Christian County",
            "value": 10.58901117
        }, {
            "fips_code": 17023,
            "state": "IL",
            "area_name": "Clark County",
            "value": 6.956201693
        }, {
            "fips_code": 17025,
            "state": "IL",
            "area_name": "Clay County",
            "value": 11.62191192
        }, {
            "fips_code": 17027,
            "state": "IL",
            "area_name": "Clinton County",
            "value": 8.703394968
        }, {
            "fips_code": 17029,
            "state": "IL",
            "area_name": "Coles County",
            "value": 8.075348075000001
        }, {
            "fips_code": 17031,
            "state": "IL",
            "area_name": "Cook County",
            "value": 12.02660655
        }, {
            "fips_code": 17033,
            "state": "IL",
            "area_name": "Crawford County",
            "value": 13.68550903
        }, {
            "fips_code": 17035,
            "state": "IL",
            "area_name": "Cumberland County",
            "value": 7.076425394
        }, {
            "fips_code": 17037,
            "state": "IL",
            "area_name": "DeKalb County",
            "value": 7.365533851
        }, {
            "fips_code": 17039,
            "state": "IL",
            "area_name": "De Witt County",
            "value": 6.87778769
        }, {
            "fips_code": 17041,
            "state": "IL",
            "area_name": "Douglas County",
            "value": 16.11626845
        }, {
            "fips_code": 17043,
            "state": "IL",
            "area_name": "DuPage County",
            "value": 6.513435021
        }, {
            "fips_code": 17045,
            "state": "IL",
            "area_name": "Edgar County",
            "value": 11.99582195
        }, {
            "fips_code": 17047,
            "state": "IL",
            "area_name": "Edwards County",
            "value": 7.856010867
        }, {
            "fips_code": 17049,
            "state": "IL",
            "area_name": "Effingham County",
            "value": 6.876343859
        }, {
            "fips_code": 17051,
            "state": "IL",
            "area_name": "Fayette County",
            "value": 13.5732075
        }, {
            "fips_code": 17053,
            "state": "IL",
            "area_name": "Ford County",
            "value": 8.247750132
        }, {
            "fips_code": 17055,
            "state": "IL",
            "area_name": "Franklin County",
            "value": 10.44781671
        }, {
            "fips_code": 17057,
            "state": "IL",
            "area_name": "Fulton County",
            "value": 10.48739088
        }, {
            "fips_code": 17059,
            "state": "IL",
            "area_name": "Gallatin County",
            "value": 11.96858922
        }, {
            "fips_code": 17061,
            "state": "IL",
            "area_name": "Greene County",
            "value": 9.340148699
        }, {
            "fips_code": 17063,
            "state": "IL",
            "area_name": "Grundy County",
            "value": 6.387854483
        }, {
            "fips_code": 17065,
            "state": "IL",
            "area_name": "Hamilton County",
            "value": 11.83680616
        }, {
            "fips_code": 17067,
            "state": "IL",
            "area_name": "Hancock County",
            "value": 6.592892768
        }, {
            "fips_code": 17069,
            "state": "IL",
            "area_name": "Hardin County",
            "value": 15.18771331
        }, {
            "fips_code": 17071,
            "state": "IL",
            "area_name": "Henderson County",
            "value": 7.543679342
        }, {
            "fips_code": 17073,
            "state": "IL",
            "area_name": "Henry County",
            "value": 7.718755372
        }, {
            "fips_code": 17075,
            "state": "IL",
            "area_name": "Iroquois County",
            "value": 11.55656717
        }, {
            "fips_code": 17077,
            "state": "IL",
            "area_name": "Jackson County",
            "value": 8.370914932
        }, {
            "fips_code": 17079,
            "state": "IL",
            "area_name": "Jasper County",
            "value": 7.970570202
        }, {
            "fips_code": 17081,
            "state": "IL",
            "area_name": "Jefferson County",
            "value": 10.10548846
        }, {
            "fips_code": 17083,
            "state": "IL",
            "area_name": "Jersey County",
            "value": 7.592321024
        }, {
            "fips_code": 17085,
            "state": "IL",
            "area_name": "Jo Daviess County",
            "value": 7.754755846
        }, {
            "fips_code": 17087,
            "state": "IL",
            "area_name": "Johnson County",
            "value": 16.9237139
        }, {
            "fips_code": 17089,
            "state": "IL",
            "area_name": "Kane County",
            "value": 13.97087945
        }, {
            "fips_code": 17091,
            "state": "IL",
            "area_name": "Kankakee County",
            "value": 10.4568046
        }, {
            "fips_code": 17093,
            "state": "IL",
            "area_name": "Kendall County",
            "value": 6.381136749
        }, {
            "fips_code": 17095,
            "state": "IL",
            "area_name": "Knox County",
            "value": 11.06237817
        }, {
            "fips_code": 17097,
            "state": "IL",
            "area_name": "Lake County",
            "value": 9.187170764999999
        }, {
            "fips_code": 17099,
            "state": "IL",
            "area_name": "La Salle County",
            "value": 9.445188543
        }, {
            "fips_code": 17101,
            "state": "IL",
            "area_name": "Lawrence County",
            "value": 15.63468863
        }, {
            "fips_code": 17103,
            "state": "IL",
            "area_name": "Lee County",
            "value": 10.38438558
        }, {
            "fips_code": 17105,
            "state": "IL",
            "area_name": "Livingston County",
            "value": 9.862666719
        }, {
            "fips_code": 17107,
            "state": "IL",
            "area_name": "Logan County",
            "value": 9.654543613
        }, {
            "fips_code": 17109,
            "state": "IL",
            "area_name": "McDonough County",
            "value": 4.951151851
        }, {
            "fips_code": 17111,
            "state": "IL",
            "area_name": "McHenry County",
            "value": 6.464794043
        }, {
            "fips_code": 17113,
            "state": "IL",
            "area_name": "McLean County",
            "value": 4.012333857
        }, {
            "fips_code": 17115,
            "state": "IL",
            "area_name": "Macon County",
            "value": 8.250723991999999
        }, {
            "fips_code": 17117,
            "state": "IL",
            "area_name": "Macoupin County",
            "value": 8.912806114
        }, {
            "fips_code": 17119,
            "state": "IL",
            "area_name": "Madison County",
            "value": 6.999919418
        }, {
            "fips_code": 17121,
            "state": "IL",
            "area_name": "Marion County",
            "value": 11.0135522
        }, {
            "fips_code": 17123,
            "state": "IL",
            "area_name": "Marshall County",
            "value": 7.552447552
        }, {
            "fips_code": 17125,
            "state": "IL",
            "area_name": "Mason County",
            "value": 9.363883658000001
        }, {
            "fips_code": 17127,
            "state": "IL",
            "area_name": "Massac County",
            "value": 12.68583725
        }, {
            "fips_code": 17129,
            "state": "IL",
            "area_name": "Menard County",
            "value": 4.281592614
        }, {
            "fips_code": 17131,
            "state": "IL",
            "area_name": "Mercer County",
            "value": 7.477797513
        }, {
            "fips_code": 17133,
            "state": "IL",
            "area_name": "Monroe County",
            "value": 4.691879595
        }, {
            "fips_code": 17135,
            "state": "IL",
            "area_name": "Montgomery County",
            "value": 12.15079749
        }, {
            "fips_code": 17137,
            "state": "IL",
            "area_name": "Morgan County",
            "value": 10.59479554
        }, {
            "fips_code": 17139,
            "state": "IL",
            "area_name": "Moultrie County",
            "value": 13.45136345
        }, {
            "fips_code": 17141,
            "state": "IL",
            "area_name": "Ogle County",
            "value": 9.047195508
        }, {
            "fips_code": 17143,
            "state": "IL",
            "area_name": "Peoria County",
            "value": 7.823298547
        }, {
            "fips_code": 17145,
            "state": "IL",
            "area_name": "Perry County",
            "value": 16.37840671
        }, {
            "fips_code": 17147,
            "state": "IL",
            "area_name": "Piatt County",
            "value": 6.301089918
        }, {
            "fips_code": 17149,
            "state": "IL",
            "area_name": "Pike County",
            "value": 8.858931151
        }, {
            "fips_code": 17151,
            "state": "IL",
            "area_name": "Pope County",
            "value": 10.8777969
        }, {
            "fips_code": 17153,
            "state": "IL",
            "area_name": "Pulaski County",
            "value": 10.71049841
        }, {
            "fips_code": 17155,
            "state": "IL",
            "area_name": "Putnam County",
            "value": 6.687743191
        }, {
            "fips_code": 17157,
            "state": "IL",
            "area_name": "Randolph County",
            "value": 14.9222097
        }, {
            "fips_code": 17159,
            "state": "IL",
            "area_name": "Richland County",
            "value": 7.665030005
        }, {
            "fips_code": 17161,
            "state": "IL",
            "area_name": "Rock Island County",
            "value": 10.97617372
        }, {
            "fips_code": 17163,
            "state": "IL",
            "area_name": "St. Clair County",
            "value": 7.725484862
        }, {
            "fips_code": 17165,
            "state": "IL",
            "area_name": "Saline County",
            "value": 12.1542135
        }, {
            "fips_code": 17167,
            "state": "IL",
            "area_name": "Sangamon County",
            "value": 7.22523943
        }, {
            "fips_code": 17169,
            "state": "IL",
            "area_name": "Schuyler County",
            "value": 7.593984962
        }, {
            "fips_code": 17171,
            "state": "IL",
            "area_name": "Scott County",
            "value": 5.996573387
        }, {
            "fips_code": 17173,
            "state": "IL",
            "area_name": "Shelby County",
            "value": 6.83664707
        }, {
            "fips_code": 17175,
            "state": "IL",
            "area_name": "Stark County",
            "value": 10.42311662
        }, {
            "fips_code": 17177,
            "state": "IL",
            "area_name": "Stephenson County",
            "value": 8.095282988999999
        }, {
            "fips_code": 17179,
            "state": "IL",
            "area_name": "Tazewell County",
            "value": 6.77687203
        }, {
            "fips_code": 17181,
            "state": "IL",
            "area_name": "Union County",
            "value": 10.76923077
        }, {
            "fips_code": 17183,
            "state": "IL",
            "area_name": "Vermilion County",
            "value": 9.767969193000001
        }, {
            "fips_code": 17185,
            "state": "IL",
            "area_name": "Wabash County",
            "value": 8.117443869000001
        }, {
            "fips_code": 17187,
            "state": "IL",
            "area_name": "Warren County",
            "value": 12.12203759
        }, {
            "fips_code": 17189,
            "state": "IL",
            "area_name": "Washington County",
            "value": 7.864943392
        }, {
            "fips_code": 17191,
            "state": "IL",
            "area_name": "Wayne County",
            "value": 12.61182249
        }, {
            "fips_code": 17193,
            "state": "IL",
            "area_name": "White County",
            "value": 10.31237485
        }, {
            "fips_code": 17195,
            "state": "IL",
            "area_name": "Whiteside County",
            "value": 8.650175599000001
        }, {
            "fips_code": 17197,
            "state": "IL",
            "area_name": "Will County",
            "value": 8.520828764999999
        }, {
            "fips_code": 17199,
            "state": "IL",
            "area_name": "Williamson County",
            "value": 7.311783107
        }, {
            "fips_code": 17201,
            "state": "IL",
            "area_name": "Winnebago County",
            "value": 11.82381011
        }, {
            "fips_code": 17203,
            "state": "IL",
            "area_name": "Woodford County",
            "value": 5.719350985
        }, {
            "fips_code": 18000,
            "state": "IN",
            "area_name": "Indiana",
            "value": 10.23012903
        }, {
            "fips_code": 18001,
            "state": "IN",
            "area_name": "Adams County",
            "value": 13.74349843
        }, {
            "fips_code": 18003,
            "state": "IN",
            "area_name": "Allen County",
            "value": 9.936967447000001
        }, {
            "fips_code": 18005,
            "state": "IN",
            "area_name": "Bartholomew County",
            "value": 8.401672439
        }, {
            "fips_code": 18007,
            "state": "IN",
            "area_name": "Benton County",
            "value": 11.57589209
        }, {
            "fips_code": 18009,
            "state": "IN",
            "area_name": "Blackford County",
            "value": 9.121700537000001
        }, {
            "fips_code": 18011,
            "state": "IN",
            "area_name": "Boone County",
            "value": 5.590678606
        }, {
            "fips_code": 18013,
            "state": "IN",
            "area_name": "Brown County",
            "value": 6.939051157
        }, {
            "fips_code": 18015,
            "state": "IN",
            "area_name": "Carroll County",
            "value": 10.91152437
        }, {
            "fips_code": 18017,
            "state": "IN",
            "area_name": "Cass County",
            "value": 15.31859458
        }, {
            "fips_code": 18019,
            "state": "IN",
            "area_name": "Clark County",
            "value": 9.092102124
        }, {
            "fips_code": 18021,
            "state": "IN",
            "area_name": "Clay County",
            "value": 8.809081978
        }, {
            "fips_code": 18023,
            "state": "IN",
            "area_name": "Clinton County",
            "value": 13.18416044
        }, {
            "fips_code": 18025,
            "state": "IN",
            "area_name": "Crawford County",
            "value": 17.14208827
        }, {
            "fips_code": 18027,
            "state": "IN",
            "area_name": "Daviess County",
            "value": 23.13270486
        }, {
            "fips_code": 18029,
            "state": "IN",
            "area_name": "Dearborn County",
            "value": 9.23959339
        }, {
            "fips_code": 18031,
            "state": "IN",
            "area_name": "Decatur County",
            "value": 8.218484559
        }, {
            "fips_code": 18033,
            "state": "IN",
            "area_name": "DeKalb County",
            "value": 9.046622526
        }, {
            "fips_code": 18035,
            "state": "IN",
            "area_name": "Delaware County",
            "value": 9.533907412
        }, {
            "fips_code": 18037,
            "state": "IN",
            "area_name": "Dubois County",
            "value": 10.002035
        }, {
            "fips_code": 18039,
            "state": "IN",
            "area_name": "Elkhart County",
            "value": 18.0686669
        }, {
            "fips_code": 18041,
            "state": "IN",
            "area_name": "Fayette County",
            "value": 15.05664515
        }, {
            "fips_code": 18043,
            "state": "IN",
            "area_name": "Floyd County",
            "value": 8.725442087999999
        }, {
            "fips_code": 18045,
            "state": "IN",
            "area_name": "Fountain County",
            "value": 12.14807091
        }, {
            "fips_code": 18047,
            "state": "IN",
            "area_name": "Franklin County",
            "value": 11.71446781
        }, {
            "fips_code": 18049,
            "state": "IN",
            "area_name": "Fulton County",
            "value": 12.46784796
        }, {
            "fips_code": 18051,
            "state": "IN",
            "area_name": "Gibson County",
            "value": 8.54727475
        }, {
            "fips_code": 18053,
            "state": "IN",
            "area_name": "Grant County",
            "value": 11.70717383
        }, {
            "fips_code": 18055,
            "state": "IN",
            "area_name": "Greene County",
            "value": 11.63917196
        }, {
            "fips_code": 18057,
            "state": "IN",
            "area_name": "Hamilton County",
            "value": 2.762228546
        }, {
            "fips_code": 18059,
            "state": "IN",
            "area_name": "Hancock County",
            "value": 6.679930732
        }, {
            "fips_code": 18061,
            "state": "IN",
            "area_name": "Harrison County",
            "value": 9.763090929000001
        }, {
            "fips_code": 18063,
            "state": "IN",
            "area_name": "Hendricks County",
            "value": 4.883829965
        }, {
            "fips_code": 18065,
            "state": "IN",
            "area_name": "Henry County",
            "value": 9.203071525
        }, {
            "fips_code": 18067,
            "state": "IN",
            "area_name": "Howard County",
            "value": 9.098666109
        }, {
            "fips_code": 18069,
            "state": "IN",
            "area_name": "Huntington County",
            "value": 7.172171973
        }, {
            "fips_code": 18071,
            "state": "IN",
            "area_name": "Jackson County",
            "value": 10.85881295
        }, {
            "fips_code": 18073,
            "state": "IN",
            "area_name": "Jasper County",
            "value": 8.560328659
        }, {
            "fips_code": 18075,
            "state": "IN",
            "area_name": "Jay County",
            "value": 11.97034668
        }, {
            "fips_code": 18077,
            "state": "IN",
            "area_name": "Jefferson County",
            "value": 10.46920439
        }, {
            "fips_code": 18079,
            "state": "IN",
            "area_name": "Jennings County",
            "value": 11.09410461
        }, {
            "fips_code": 18081,
            "state": "IN",
            "area_name": "Johnson County",
            "value": 7.230282965
        }, {
            "fips_code": 18083,
            "state": "IN",
            "area_name": "Knox County",
            "value": 11.31872675
        }, {
            "fips_code": 18085,
            "state": "IN",
            "area_name": "Kosciusko County",
            "value": 12.26983564
        }, {
            "fips_code": 18087,
            "state": "IN",
            "area_name": "LaGrange County",
            "value": 40.41286565
        }, {
            "fips_code": 18089,
            "state": "IN",
            "area_name": "Lake County",
            "value": 10.19718645
        }, {
            "fips_code": 18091,
            "state": "IN",
            "area_name": "LaPorte County",
            "value": 10.6194241
        }, {
            "fips_code": 18093,
            "state": "IN",
            "area_name": "Lawrence County",
            "value": 11.20027585
        }, {
            "fips_code": 18095,
            "state": "IN",
            "area_name": "Madison County",
            "value": 10.23992058
        }, {
            "fips_code": 18097,
            "state": "IN",
            "area_name": "Marion County",
            "value": 13.10866706
        }, {
            "fips_code": 18099,
            "state": "IN",
            "area_name": "Marshall County",
            "value": 14.47030106
        }, {
            "fips_code": 18101,
            "state": "IN",
            "area_name": "Martin County",
            "value": 12.66006985
        }, {
            "fips_code": 18103,
            "state": "IN",
            "area_name": "Miami County",
            "value": 13.60482176
        }, {
            "fips_code": 18105,
            "state": "IN",
            "area_name": "Monroe County",
            "value": 6.148417714
        }, {
            "fips_code": 18107,
            "state": "IN",
            "area_name": "Montgomery County",
            "value": 9.474214031000001
        }, {
            "fips_code": 18109,
            "state": "IN",
            "area_name": "Morgan County",
            "value": 11.51743752
        }, {
            "fips_code": 18111,
            "state": "IN",
            "area_name": "Newton County",
            "value": 12.17452498
        }, {
            "fips_code": 18113,
            "state": "IN",
            "area_name": "Noble County",
            "value": 17.15832887
        }, {
            "fips_code": 18115,
            "state": "IN",
            "area_name": "Ohio County",
            "value": 10.67543064
        }, {
            "fips_code": 18117,
            "state": "IN",
            "area_name": "Orange County",
            "value": 15.11847652
        }, {
            "fips_code": 18119,
            "state": "IN",
            "area_name": "Owen County",
            "value": 14.14359579
        }, {
            "fips_code": 18121,
            "state": "IN",
            "area_name": "Parke County",
            "value": 15.12119382
        }, {
            "fips_code": 18123,
            "state": "IN",
            "area_name": "Perry County",
            "value": 9.206581353000001
        }, {
            "fips_code": 18125,
            "state": "IN",
            "area_name": "Pike County",
            "value": 11.77421217
        }, {
            "fips_code": 18127,
            "state": "IN",
            "area_name": "Porter County",
            "value": 5.936629966
        }, {
            "fips_code": 18129,
            "state": "IN",
            "area_name": "Posey County",
            "value": 7.319668459
        }, {
            "fips_code": 18131,
            "state": "IN",
            "area_name": "Pulaski County",
            "value": 12.79659065
        }, {
            "fips_code": 18133,
            "state": "IN",
            "area_name": "Putnam County",
            "value": 10.85653716
        }, {
            "fips_code": 18135,
            "state": "IN",
            "area_name": "Randolph County",
            "value": 10.93969144
        }, {
            "fips_code": 18137,
            "state": "IN",
            "area_name": "Ripley County",
            "value": 9.847094801000001
        }, {
            "fips_code": 18139,
            "state": "IN",
            "area_name": "Rush County",
            "value": 10.26998871
        }, {
            "fips_code": 18141,
            "state": "IN",
            "area_name": "St. Joseph County",
            "value": 8.985650891000001
        }, {
            "fips_code": 18143,
            "state": "IN",
            "area_name": "Scott County",
            "value": 19.02797704
        }, {
            "fips_code": 18145,
            "state": "IN",
            "area_name": "Shelby County",
            "value": 10.93293055
        }, {
            "fips_code": 18147,
            "state": "IN",
            "area_name": "Spencer County",
            "value": 8.587355348999999
        }, {
            "fips_code": 18149,
            "state": "IN",
            "area_name": "Starke County",
            "value": 14.43164123
        }, {
            "fips_code": 18151,
            "state": "IN",
            "area_name": "Steuben County",
            "value": 7.626797083
        }, {
            "fips_code": 18153,
            "state": "IN",
            "area_name": "Sullivan County",
            "value": 12.57276681
        }, {
            "fips_code": 18155,
            "state": "IN",
            "area_name": "Switzerland County",
            "value": 15.04818384
        }, {
            "fips_code": 18157,
            "state": "IN",
            "area_name": "Tippecanoe County",
            "value": 7.420327387
        }, {
            "fips_code": 18159,
            "state": "IN",
            "area_name": "Tipton County",
            "value": 9.447594659
        }, {
            "fips_code": 18161,
            "state": "IN",
            "area_name": "Union County",
            "value": 11.77833559
        }, {
            "fips_code": 18163,
            "state": "IN",
            "area_name": "Vanderburgh County",
            "value": 9.052648683999999
        }, {
            "fips_code": 18165,
            "state": "IN",
            "area_name": "Vermillion County",
            "value": 8.573003766999999
        }, {
            "fips_code": 18167,
            "state": "IN",
            "area_name": "Vigo County",
            "value": 10.36192581
        }, {
            "fips_code": 18169,
            "state": "IN",
            "area_name": "Wabash County",
            "value": 10.13551666
        }, {
            "fips_code": 18171,
            "state": "IN",
            "area_name": "Warren County",
            "value": 6.490066225
        }, {
            "fips_code": 18173,
            "state": "IN",
            "area_name": "Warrick County",
            "value": 5.453840717
        }, {
            "fips_code": 18175,
            "state": "IN",
            "area_name": "Washington County",
            "value": 13.33299054
        }, {
            "fips_code": 18177,
            "state": "IN",
            "area_name": "Wayne County",
            "value": 11.84398566
        }, {
            "fips_code": 18179,
            "state": "IN",
            "area_name": "Wells County",
            "value": 6.797495659
        }, {
            "fips_code": 18181,
            "state": "IN",
            "area_name": "White County",
            "value": 10.85545723
        }, {
            "fips_code": 18183,
            "state": "IN",
            "area_name": "Whitley County",
            "value": 7.862656599
        }, {
            "fips_code": 19000,
            "state": "IA",
            "area_name": "Iowa",
            "value": 7.188129162
        }, {
            "fips_code": 19001,
            "state": "IA",
            "area_name": "Adair County",
            "value": 5.303030303
        }, {
            "fips_code": 19003,
            "state": "IA",
            "area_name": "Adams County",
            "value": 5.470213563
        }, {
            "fips_code": 19005,
            "state": "IA",
            "area_name": "Allamakee County",
            "value": 9.645448043
        }, {
            "fips_code": 19007,
            "state": "IA",
            "area_name": "Appanoose County",
            "value": 9.133894591000001
        }, {
            "fips_code": 19009,
            "state": "IA",
            "area_name": "Audubon County",
            "value": 8.215788171
        }, {
            "fips_code": 19011,
            "state": "IA",
            "area_name": "Benton County",
            "value": 5.76869067
        }, {
            "fips_code": 19013,
            "state": "IA",
            "area_name": "Black Hawk County",
            "value": 7.887973798
        }, {
            "fips_code": 19015,
            "state": "IA",
            "area_name": "Boone County",
            "value": 5.853761623
        }, {
            "fips_code": 19017,
            "state": "IA",
            "area_name": "Bremer County",
            "value": 3.512751349
        }, {
            "fips_code": 19019,
            "state": "IA",
            "area_name": "Buchanan County",
            "value": 6.241371794
        }, {
            "fips_code": 19021,
            "state": "IA",
            "area_name": "Buena Vista County",
            "value": 20.63322117
        }, {
            "fips_code": 19023,
            "state": "IA",
            "area_name": "Butler County",
            "value": 5.856832972
        }, {
            "fips_code": 19025,
            "state": "IA",
            "area_name": "Calhoun County",
            "value": 5.997447895
        }, {
            "fips_code": 19027,
            "state": "IA",
            "area_name": "Carroll County",
            "value": 5.779197728
        }, {
            "fips_code": 19029,
            "state": "IA",
            "area_name": "Cass County",
            "value": 10.66538297
        }, {
            "fips_code": 19031,
            "state": "IA",
            "area_name": "Cedar County",
            "value": 4.447151995
        }, {
            "fips_code": 19033,
            "state": "IA",
            "area_name": "Cerro Gordo County",
            "value": 6.488574396
        }, {
            "fips_code": 19035,
            "state": "IA",
            "area_name": "Cherokee County",
            "value": 6.476902666
        }, {
            "fips_code": 19037,
            "state": "IA",
            "area_name": "Chickasaw County",
            "value": 6.665852765
        }, {
            "fips_code": 19039,
            "state": "IA",
            "area_name": "Clarke County",
            "value": 15.4861002
        }, {
            "fips_code": 19041,
            "state": "IA",
            "area_name": "Clay County",
            "value": 4.55272986
        }, {
            "fips_code": 19043,
            "state": "IA",
            "area_name": "Clayton County",
            "value": 9.070993915000001
        }, {
            "fips_code": 19045,
            "state": "IA",
            "area_name": "Clinton County",
            "value": 8.018387684
        }, {
            "fips_code": 19047,
            "state": "IA",
            "area_name": "Crawford County",
            "value": 18.7019321
        }, {
            "fips_code": 19049,
            "state": "IA",
            "area_name": "Dallas County",
            "value": 4.113583064
        }, {
            "fips_code": 19051,
            "state": "IA",
            "area_name": "Davis County",
            "value": 20.51054778
        }, {
            "fips_code": 19053,
            "state": "IA",
            "area_name": "Decatur County",
            "value": 10.10401189
        }, {
            "fips_code": 19055,
            "state": "IA",
            "area_name": "Delaware County",
            "value": 7.807708247
        }, {
            "fips_code": 19057,
            "state": "IA",
            "area_name": "Des Moines County",
            "value": 7.067514425
        }, {
            "fips_code": 19059,
            "state": "IA",
            "area_name": "Dickinson County",
            "value": 4.446837975
        }, {
            "fips_code": 19061,
            "state": "IA",
            "area_name": "Dubuque County",
            "value": 6.247065061
        }, {
            "fips_code": 19063,
            "state": "IA",
            "area_name": "Emmet County",
            "value": 10.25250989
        }, {
            "fips_code": 19065,
            "state": "IA",
            "area_name": "Fayette County",
            "value": 7.433328422
        }, {
            "fips_code": 19067,
            "state": "IA",
            "area_name": "Floyd County",
            "value": 7.194841087
        }, {
            "fips_code": 19069,
            "state": "IA",
            "area_name": "Franklin County",
            "value": 9.188186617
        }, {
            "fips_code": 19071,
            "state": "IA",
            "area_name": "Fremont County",
            "value": 5.267593763
        }, {
            "fips_code": 19073,
            "state": "IA",
            "area_name": "Greene County",
            "value": 6.810497504
        }, {
            "fips_code": 19075,
            "state": "IA",
            "area_name": "Grundy County",
            "value": 4.590354445
        }, {
            "fips_code": 19077,
            "state": "IA",
            "area_name": "Guthrie County",
            "value": 5.628964059
        }, {
            "fips_code": 19079,
            "state": "IA",
            "area_name": "Hamilton County",
            "value": 6.497548095
        }, {
            "fips_code": 19081,
            "state": "IA",
            "area_name": "Hancock County",
            "value": 8.243681141
        }, {
            "fips_code": 19083,
            "state": "IA",
            "area_name": "Hardin County",
            "value": 7.629117527
        }, {
            "fips_code": 19085,
            "state": "IA",
            "area_name": "Harrison County",
            "value": 7.814347655
        }, {
            "fips_code": 19087,
            "state": "IA",
            "area_name": "Henry County",
            "value": 8.089181077999999
        }, {
            "fips_code": 19089,
            "state": "IA",
            "area_name": "Howard County",
            "value": 8.420723118
        }, {
            "fips_code": 19091,
            "state": "IA",
            "area_name": "Humboldt County",
            "value": 6.890906385
        }, {
            "fips_code": 19093,
            "state": "IA",
            "area_name": "Ida County",
            "value": 7.386121754
        }, {
            "fips_code": 19095,
            "state": "IA",
            "area_name": "Iowa County",
            "value": 5.456272123
        }, {
            "fips_code": 19097,
            "state": "IA",
            "area_name": "Jackson County",
            "value": 6.481414127
        }, {
            "fips_code": 19099,
            "state": "IA",
            "area_name": "Jasper County",
            "value": 5.855533366
        }, {
            "fips_code": 19101,
            "state": "IA",
            "area_name": "Jefferson County",
            "value": 7.226290098
        }, {
            "fips_code": 19103,
            "state": "IA",
            "area_name": "Johnson County",
            "value": 3.764371643
        }, {
            "fips_code": 19105,
            "state": "IA",
            "area_name": "Jones County",
            "value": 5.329174859
        }, {
            "fips_code": 19107,
            "state": "IA",
            "area_name": "Keokuk County",
            "value": 7.025028441
        }, {
            "fips_code": 19109,
            "state": "IA",
            "area_name": "Kossuth County",
            "value": 6.419305609
        }, {
            "fips_code": 19111,
            "state": "IA",
            "area_name": "Lee County",
            "value": 6.695815116
        }, {
            "fips_code": 19113,
            "state": "IA",
            "area_name": "Linn County",
            "value": 5.103030146
        }, {
            "fips_code": 19115,
            "state": "IA",
            "area_name": "Louisa County",
            "value": 15.46364594
        }, {
            "fips_code": 19117,
            "state": "IA",
            "area_name": "Lucas County",
            "value": 7.167687469
        }, {
            "fips_code": 19119,
            "state": "IA",
            "area_name": "Lyon County",
            "value": 6.26625065
        }, {
            "fips_code": 19121,
            "state": "IA",
            "area_name": "Madison County",
            "value": 3.526877861
        }, {
            "fips_code": 19123,
            "state": "IA",
            "area_name": "Mahaska County",
            "value": 8.035714285999999
        }, {
            "fips_code": 19125,
            "state": "IA",
            "area_name": "Marion County",
            "value": 5.978039854
        }, {
            "fips_code": 19127,
            "state": "IA",
            "area_name": "Marshall County",
            "value": 14.73180654
        }, {
            "fips_code": 19129,
            "state": "IA",
            "area_name": "Mills County",
            "value": 4.778761062
        }, {
            "fips_code": 19131,
            "state": "IA",
            "area_name": "Mitchell County",
            "value": 7.24032303
        }, {
            "fips_code": 19133,
            "state": "IA",
            "area_name": "Monona County",
            "value": 7.193320488
        }, {
            "fips_code": 19135,
            "state": "IA",
            "area_name": "Monroe County",
            "value": 6.499032882
        }, {
            "fips_code": 19137,
            "state": "IA",
            "area_name": "Montgomery County",
            "value": 7.809172228
        }, {
            "fips_code": 19139,
            "state": "IA",
            "area_name": "Muscatine County",
            "value": 10.39119379
        }, {
            "fips_code": 19141,
            "state": "IA",
            "area_name": "O'Brien County",
            "value": 8.405707196
        }, {
            "fips_code": 19143,
            "state": "IA",
            "area_name": "Osceola County",
            "value": 11.4265928
        }, {
            "fips_code": 19145,
            "state": "IA",
            "area_name": "Page County",
            "value": 7.922739873
        }, {
            "fips_code": 19147,
            "state": "IA",
            "area_name": "Palo Alto County",
            "value": 6.536901865
        }, {
            "fips_code": 19149,
            "state": "IA",
            "area_name": "Plymouth County",
            "value": 5.629932768
        }, {
            "fips_code": 19151,
            "state": "IA",
            "area_name": "Pocahontas County",
            "value": 10.47771979
        }, {
            "fips_code": 19153,
            "state": "IA",
            "area_name": "Polk County",
            "value": 7.510229466
        }, {
            "fips_code": 19155,
            "state": "IA",
            "area_name": "Pottawattamie County",
            "value": 10.04078922
        }, {
            "fips_code": 19157,
            "state": "IA",
            "area_name": "Poweshiek County",
            "value": 5.827409489
        }, {
            "fips_code": 19159,
            "state": "IA",
            "area_name": "Ringgold County",
            "value": 6.732247156
        }, {
            "fips_code": 19161,
            "state": "IA",
            "area_name": "Sac County",
            "value": 6.404365307
        }, {
            "fips_code": 19163,
            "state": "IA",
            "area_name": "Scott County",
            "value": 6.062733686
        }, {
            "fips_code": 19165,
            "state": "IA",
            "area_name": "Shelby County",
            "value": 6.521217933
        }, {
            "fips_code": 19167,
            "state": "IA",
            "area_name": "Sioux County",
            "value": 7.984126234
        }, {
            "fips_code": 19169,
            "state": "IA",
            "area_name": "Story County",
            "value": 3.145039337
        }, {
            "fips_code": 19171,
            "state": "IA",
            "area_name": "Tama County",
            "value": 9.296137338999999
        }, {
            "fips_code": 19173,
            "state": "IA",
            "area_name": "Taylor County",
            "value": 9.193154034000001
        }, {
            "fips_code": 19175,
            "state": "IA",
            "area_name": "Union County",
            "value": 8.928786601000001
        }, {
            "fips_code": 19177,
            "state": "IA",
            "area_name": "Van Buren County",
            "value": 12.19077776
        }, {
            "fips_code": 19179,
            "state": "IA",
            "area_name": "Wapello County",
            "value": 12.00982433
        }, {
            "fips_code": 19181,
            "state": "IA",
            "area_name": "Warren County",
            "value": 4.226093056
        }, {
            "fips_code": 19183,
            "state": "IA",
            "area_name": "Washington County",
            "value": 8.084185680999999
        }, {
            "fips_code": 19185,
            "state": "IA",
            "area_name": "Wayne County",
            "value": 10.52028421
        }, {
            "fips_code": 19187,
            "state": "IA",
            "area_name": "Webster County",
            "value": 8.497463145999999
        }, {
            "fips_code": 19189,
            "state": "IA",
            "area_name": "Winnebago County",
            "value": 5.687794077
        }, {
            "fips_code": 19191,
            "state": "IA",
            "area_name": "Winneshiek County",
            "value": 4.115599939
        }, {
            "fips_code": 19193,
            "state": "IA",
            "area_name": "Woodbury County",
            "value": 12.25617201
        }, {
            "fips_code": 19195,
            "state": "IA",
            "area_name": "Worth County",
            "value": 6.874649729
        }, {
            "fips_code": 19197,
            "state": "IA",
            "area_name": "Wright County",
            "value": 7.318166536
        }, {
            "fips_code": 20000,
            "state": "KS",
            "area_name": "Kansas",
            "value": 8.392149436
        }, {
            "fips_code": 20001,
            "state": "KS",
            "area_name": "Allen County",
            "value": 7.34351323
        }, {
            "fips_code": 20003,
            "state": "KS",
            "area_name": "Anderson County",
            "value": 14.43358252
        }, {
            "fips_code": 20005,
            "state": "KS",
            "area_name": "Atchison County",
            "value": 6.04779231
        }, {
            "fips_code": 20007,
            "state": "KS",
            "area_name": "Barber County",
            "value": 8.728522336999999
        }, {
            "fips_code": 20009,
            "state": "KS",
            "area_name": "Barton County",
            "value": 11.34588884
        }, {
            "fips_code": 20011,
            "state": "KS",
            "area_name": "Bourbon County",
            "value": 9.879797554
        }, {
            "fips_code": 20013,
            "state": "KS",
            "area_name": "Brown County",
            "value": 6.495726496
        }, {
            "fips_code": 20015,
            "state": "KS",
            "area_name": "Butler County",
            "value": 6.303005631
        }, {
            "fips_code": 20017,
            "state": "KS",
            "area_name": "Chase County",
            "value": 6.504961411
        }, {
            "fips_code": 20019,
            "state": "KS",
            "area_name": "Chautauqua County",
            "value": 11.96054254
        }, {
            "fips_code": 20021,
            "state": "KS",
            "area_name": "Cherokee County",
            "value": 11.66282614
        }, {
            "fips_code": 20023,
            "state": "KS",
            "area_name": "Cheyenne County",
            "value": 7.881002088
        }, {
            "fips_code": 20025,
            "state": "KS",
            "area_name": "Clark County",
            "value": 5.66572238
        }, {
            "fips_code": 20027,
            "state": "KS",
            "area_name": "Clay County",
            "value": 5.843810873
        }, {
            "fips_code": 20029,
            "state": "KS",
            "area_name": "Cloud County",
            "value": 4.983388704
        }, {
            "fips_code": 20031,
            "state": "KS",
            "area_name": "Coffey County",
            "value": 6.159605241
        }, {
            "fips_code": 20033,
            "state": "KS",
            "area_name": "Comanche County",
            "value": 4.232804233
        }, {
            "fips_code": 20035,
            "state": "KS",
            "area_name": "Cowley County",
            "value": 8.114370655
        }, {
            "fips_code": 20037,
            "state": "KS",
            "area_name": "Crawford County",
            "value": 6.781540561
        }, {
            "fips_code": 20039,
            "state": "KS",
            "area_name": "Decatur County",
            "value": 6.564659427
        }, {
            "fips_code": 20041,
            "state": "KS",
            "area_name": "Dickinson County",
            "value": 6.65640631
        }, {
            "fips_code": 20043,
            "state": "KS",
            "area_name": "Doniphan County",
            "value": 8.839556004
        }, {
            "fips_code": 20045,
            "state": "KS",
            "area_name": "Douglas County",
            "value": 3.742480665
        }, {
            "fips_code": 20047,
            "state": "KS",
            "area_name": "Edwards County",
            "value": 12.66730402
        }, {
            "fips_code": 20049,
            "state": "KS",
            "area_name": "Elk County",
            "value": 12.79594138
        }, {
            "fips_code": 20051,
            "state": "KS",
            "area_name": "Ellis County",
            "value": 5.96696258
        }, {
            "fips_code": 20053,
            "state": "KS",
            "area_name": "Ellsworth County",
            "value": 8.327925588999999
        }, {
            "fips_code": 20055,
            "state": "KS",
            "area_name": "Finney County",
            "value": 28.16702676
        }, {
            "fips_code": 20057,
            "state": "KS",
            "area_name": "Ford County",
            "value": 24.93815183
        }, {
            "fips_code": 20059,
            "state": "KS",
            "area_name": "Franklin County",
            "value": 7.215131655
        }, {
            "fips_code": 20061,
            "state": "KS",
            "area_name": "Geary County",
            "value": 6.177292355
        }, {
            "fips_code": 20063,
            "state": "KS",
            "area_name": "Gove County",
            "value": 5.685967658
        }, {
            "fips_code": 20065,
            "state": "KS",
            "area_name": "Graham County",
            "value": 6.214689266
        }, {
            "fips_code": 20067,
            "state": "KS",
            "area_name": "Grant County",
            "value": 20.8968814
        }, {
            "fips_code": 20069,
            "state": "KS",
            "area_name": "Gray County",
            "value": 22.41526631
        }, {
            "fips_code": 20071,
            "state": "KS",
            "area_name": "Greeley County",
            "value": 12.17391304
        }, {
            "fips_code": 20073,
            "state": "KS",
            "area_name": "Greenwood County",
            "value": 7.641423358
        }, {
            "fips_code": 20075,
            "state": "KS",
            "area_name": "Hamilton County",
            "value": 18.77300613
        }, {
            "fips_code": 20077,
            "state": "KS",
            "area_name": "Harper County",
            "value": 10.92459366
        }, {
            "fips_code": 20079,
            "state": "KS",
            "area_name": "Harvey County",
            "value": 8.332964161
        }, {
            "fips_code": 20081,
            "state": "KS",
            "area_name": "Haskell County",
            "value": 27.64632628
        }, {
            "fips_code": 20083,
            "state": "KS",
            "area_name": "Hodgeman County",
            "value": 8.575924469
        }, {
            "fips_code": 20085,
            "state": "KS",
            "area_name": "Jackson County",
            "value": 5.690140845
        }, {
            "fips_code": 20087,
            "state": "KS",
            "area_name": "Jefferson County",
            "value": 5.148591277
        }, {
            "fips_code": 20089,
            "state": "KS",
            "area_name": "Jewell County",
            "value": 7.274401473
        }, {
            "fips_code": 20091,
            "state": "KS",
            "area_name": "Johnson County",
            "value": 3.730066672
        }, {
            "fips_code": 20093,
            "state": "KS",
            "area_name": "Kearny County",
            "value": 22.27427598
        }, {
            "fips_code": 20095,
            "state": "KS",
            "area_name": "Kingman County",
            "value": 8.833458365
        }, {
            "fips_code": 20097,
            "state": "KS",
            "area_name": "Kiowa County",
            "value": 11.8718593
        }, {
            "fips_code": 20099,
            "state": "KS",
            "area_name": "Labette County",
            "value": 9.935220903999999
        }, {
            "fips_code": 20101,
            "state": "KS",
            "area_name": "Lane County",
            "value": 4.259259259
        }, {
            "fips_code": 20103,
            "state": "KS",
            "area_name": "Leavenworth County",
            "value": 7.046804209
        }, {
            "fips_code": 20105,
            "state": "KS",
            "area_name": "Lincoln County",
            "value": 4.479065239
        }, {
            "fips_code": 20107,
            "state": "KS",
            "area_name": "Linn County",
            "value": 6.319322825
        }, {
            "fips_code": 20109,
            "state": "KS",
            "area_name": "Logan County",
            "value": 7.505285412
        }, {
            "fips_code": 20111,
            "state": "KS",
            "area_name": "Lyon County",
            "value": 11.64454583
        }, {
            "fips_code": 20113,
            "state": "KS",
            "area_name": "McPherson County",
            "value": 8.28672358
        }, {
            "fips_code": 20115,
            "state": "KS",
            "area_name": "Marion County",
            "value": 8.178347087000001
        }, {
            "fips_code": 20117,
            "state": "KS",
            "area_name": "Marshall County",
            "value": 8.586296618
        }, {
            "fips_code": 20119,
            "state": "KS",
            "area_name": "Meade County",
            "value": 15.49618321
        }, {
            "fips_code": 20121,
            "state": "KS",
            "area_name": "Miami County",
            "value": 4.707362575
        }, {
            "fips_code": 20123,
            "state": "KS",
            "area_name": "Mitchell County",
            "value": 5.17020732
        }, {
            "fips_code": 20125,
            "state": "KS",
            "area_name": "Montgomery County",
            "value": 9.963356371
        }, {
            "fips_code": 20127,
            "state": "KS",
            "area_name": "Morris County",
            "value": 7.200811359
        }, {
            "fips_code": 20129,
            "state": "KS",
            "area_name": "Morton County",
            "value": 12.25842076
        }, {
            "fips_code": 20131,
            "state": "KS",
            "area_name": "Nemaha County",
            "value": 6.554392353
        }, {
            "fips_code": 20133,
            "state": "KS",
            "area_name": "Neosho County",
            "value": 8.981525342999999
        }, {
            "fips_code": 20135,
            "state": "KS",
            "area_name": "Ness County",
            "value": 8.514013749
        }, {
            "fips_code": 20137,
            "state": "KS",
            "area_name": "Norton County",
            "value": 9.757317988
        }, {
            "fips_code": 20139,
            "state": "KS",
            "area_name": "Osage County",
            "value": 8.262576463
        }, {
            "fips_code": 20141,
            "state": "KS",
            "area_name": "Osborne County",
            "value": 5.891594658
        }, {
            "fips_code": 20143,
            "state": "KS",
            "area_name": "Ottawa County",
            "value": 5.027241209
        }, {
            "fips_code": 20145,
            "state": "KS",
            "area_name": "Pawnee County",
            "value": 9.263803681000001
        }, {
            "fips_code": 20147,
            "state": "KS",
            "area_name": "Phillips County",
            "value": 9.098639456000001
        }, {
            "fips_code": 20149,
            "state": "KS",
            "area_name": "Pottawatomie County",
            "value": 4.312413183
        }, {
            "fips_code": 20151,
            "state": "KS",
            "area_name": "Pratt County",
            "value": 7.155932768
        }, {
            "fips_code": 20153,
            "state": "KS",
            "area_name": "Rawlins County",
            "value": 4.538174052
        }, {
            "fips_code": 20155,
            "state": "KS",
            "area_name": "Reno County",
            "value": 8.719269492
        }, {
            "fips_code": 20157,
            "state": "KS",
            "area_name": "Republic County",
            "value": 4.803102625
        }, {
            "fips_code": 20159,
            "state": "KS",
            "area_name": "Rice County",
            "value": 7.117028271
        }, {
            "fips_code": 20161,
            "state": "KS",
            "area_name": "Riley County",
            "value": 3.888426088
        }, {
            "fips_code": 20163,
            "state": "KS",
            "area_name": "Rooks County",
            "value": 9.521110796
        }, {
            "fips_code": 20165,
            "state": "KS",
            "area_name": "Rush County",
            "value": 7.588206863
        }, {
            "fips_code": 20167,
            "state": "KS",
            "area_name": "Russell County",
            "value": 6.917706791
        }, {
            "fips_code": 20169,
            "state": "KS",
            "area_name": "Saline County",
            "value": 6.655424701
        }, {
            "fips_code": 20171,
            "state": "KS",
            "area_name": "Scott County",
            "value": 16.00239736
        }, {
            "fips_code": 20173,
            "state": "KS",
            "area_name": "Sedgwick County",
            "value": 10.44684029
        }, {
            "fips_code": 20175,
            "state": "KS",
            "area_name": "Seward County",
            "value": 29.57768307
        }, {
            "fips_code": 20177,
            "state": "KS",
            "area_name": "Shawnee County",
            "value": 6.799720751
        }, {
            "fips_code": 20179,
            "state": "KS",
            "area_name": "Sheridan County",
            "value": 4.159343878
        }, {
            "fips_code": 20181,
            "state": "KS",
            "area_name": "Sherman County",
            "value": 9.736632083
        }, {
            "fips_code": 20183,
            "state": "KS",
            "area_name": "Smith County",
            "value": 3.834472285
        }, {
            "fips_code": 20185,
            "state": "KS",
            "area_name": "Stafford County",
            "value": 7.788944724
        }, {
            "fips_code": 20187,
            "state": "KS",
            "area_name": "Stanton County",
            "value": 18.44135802
        }, {
            "fips_code": 20189,
            "state": "KS",
            "area_name": "Stevens County",
            "value": 26.13325221
        }, {
            "fips_code": 20191,
            "state": "KS",
            "area_name": "Sumner County",
            "value": 6.65748393
        }, {
            "fips_code": 20193,
            "state": "KS",
            "area_name": "Thomas County",
            "value": 7.923551662
        }, {
            "fips_code": 20195,
            "state": "KS",
            "area_name": "Trego County",
            "value": 5.29986053
        }, {
            "fips_code": 20197,
            "state": "KS",
            "area_name": "Wabaunsee County",
            "value": 3.581267218
        }, {
            "fips_code": 20199,
            "state": "KS",
            "area_name": "Wallace County",
            "value": 4.299065421
        }, {
            "fips_code": 20201,
            "state": "KS",
            "area_name": "Washington County",
            "value": 6.324520477
        }, {
            "fips_code": 20203,
            "state": "KS",
            "area_name": "Wichita County",
            "value": 13.40206186
        }, {
            "fips_code": 20205,
            "state": "KS",
            "area_name": "Wilson County",
            "value": 9.341755319000001
        }, {
            "fips_code": 20207,
            "state": "KS",
            "area_name": "Woodson County",
            "value": 9.384288746999999
        }, {
            "fips_code": 20209,
            "state": "KS",
            "area_name": "Wyandotte County",
            "value": 18.83442072
        }, {
            "fips_code": 21000,
            "state": "KY",
            "area_name": "Kentucky",
            "value": 12.34501717
        }, {
            "fips_code": 21001,
            "state": "KY",
            "area_name": "Adair County",
            "value": 14.81422674
        }, {
            "fips_code": 21003,
            "state": "KY",
            "area_name": "Allen County",
            "value": 14.07944781
        }, {
            "fips_code": 21005,
            "state": "KY",
            "area_name": "Anderson County",
            "value": 8.866752752
        }, {
            "fips_code": 21007,
            "state": "KY",
            "area_name": "Ballard County",
            "value": 10.7908485
        }, {
            "fips_code": 21009,
            "state": "KY",
            "area_name": "Barren County",
            "value": 15.75580632
        }, {
            "fips_code": 21011,
            "state": "KY",
            "area_name": "Bath County",
            "value": 17.98287345
        }, {
            "fips_code": 21013,
            "state": "KY",
            "area_name": "Bell County",
            "value": 24.67878227
        }, {
            "fips_code": 21015,
            "state": "KY",
            "area_name": "Boone County",
            "value": 6.818309843
        }, {
            "fips_code": 21017,
            "state": "KY",
            "area_name": "Bourbon County",
            "value": 14.20678769
        }, {
            "fips_code": 21019,
            "state": "KY",
            "area_name": "Boyd County",
            "value": 11.74770191
        }, {
            "fips_code": 21021,
            "state": "KY",
            "area_name": "Boyle County",
            "value": 10.30300054
        }, {
            "fips_code": 21023,
            "state": "KY",
            "area_name": "Bracken County",
            "value": 11.13423517
        }, {
            "fips_code": 21025,
            "state": "KY",
            "area_name": "Breathitt County",
            "value": 22.53939022
        }, {
            "fips_code": 21027,
            "state": "KY",
            "area_name": "Breckinridge County",
            "value": 13.90610529
        }, {
            "fips_code": 21029,
            "state": "KY",
            "area_name": "Bullitt County",
            "value": 10.50860978
        }, {
            "fips_code": 21031,
            "state": "KY",
            "area_name": "Butler County",
            "value": 19.17050691
        }, {
            "fips_code": 21033,
            "state": "KY",
            "area_name": "Caldwell County",
            "value": 13.0777903
        }, {
            "fips_code": 21035,
            "state": "KY",
            "area_name": "Calloway County",
            "value": 9.793792242
        }, {
            "fips_code": 21037,
            "state": "KY",
            "area_name": "Campbell County",
            "value": 6.988845267
        }, {
            "fips_code": 21039,
            "state": "KY",
            "area_name": "Carlisle County",
            "value": 14.70322386
        }, {
            "fips_code": 21041,
            "state": "KY",
            "area_name": "Carroll County",
            "value": 19.24480629
        }, {
            "fips_code": 21043,
            "state": "KY",
            "area_name": "Carter County",
            "value": 20.49713193
        }, {
            "fips_code": 21045,
            "state": "KY",
            "area_name": "Casey County",
            "value": 25.54950045
        }, {
            "fips_code": 21047,
            "state": "KY",
            "area_name": "Christian County",
            "value": 13.82032602
        }, {
            "fips_code": 21049,
            "state": "KY",
            "area_name": "Clark County",
            "value": 10.77059824
        }, {
            "fips_code": 21051,
            "state": "KY",
            "area_name": "Clay County",
            "value": 31.65477404
        }, {
            "fips_code": 21053,
            "state": "KY",
            "area_name": "Clinton County",
            "value": 21.89693801
        }, {
            "fips_code": 21055,
            "state": "KY",
            "area_name": "Crittenden County",
            "value": 14.23856671
        }, {
            "fips_code": 21057,
            "state": "KY",
            "area_name": "Cumberland County",
            "value": 20.36313491
        }, {
            "fips_code": 21059,
            "state": "KY",
            "area_name": "Daviess County",
            "value": 9.074402254000001
        }, {
            "fips_code": 21061,
            "state": "KY",
            "area_name": "Edmonson County",
            "value": 19.10099638
        }, {
            "fips_code": 21063,
            "state": "KY",
            "area_name": "Elliott County",
            "value": 24.88186114
        }, {
            "fips_code": 21065,
            "state": "KY",
            "area_name": "Estill County",
            "value": 25.73325406
        }, {
            "fips_code": 21067,
            "state": "KY",
            "area_name": "Fayette County",
            "value": 7.63656873
        }, {
            "fips_code": 21069,
            "state": "KY",
            "area_name": "Fleming County",
            "value": 18.68716736
        }, {
            "fips_code": 21071,
            "state": "KY",
            "area_name": "Floyd County",
            "value": 22.86413322
        }, {
            "fips_code": 21073,
            "state": "KY",
            "area_name": "Franklin County",
            "value": 9.429624089000001
        }, {
            "fips_code": 21075,
            "state": "KY",
            "area_name": "Fulton County",
            "value": 20.0
        }, {
            "fips_code": 21077,
            "state": "KY",
            "area_name": "Gallatin County",
            "value": 15.02234445
        }, {
            "fips_code": 21079,
            "state": "KY",
            "area_name": "Garrard County",
            "value": 14.53431373
        }, {
            "fips_code": 21081,
            "state": "KY",
            "area_name": "Grant County",
            "value": 11.73366834
        }, {
            "fips_code": 21083,
            "state": "KY",
            "area_name": "Graves County",
            "value": 10.53120582
        }, {
            "fips_code": 21085,
            "state": "KY",
            "area_name": "Grayson County",
            "value": 16.77379688
        }, {
            "fips_code": 21087,
            "state": "KY",
            "area_name": "Green County",
            "value": 19.1875
        }, {
            "fips_code": 21089,
            "state": "KY",
            "area_name": "Greenup County",
            "value": 9.819302970000001
        }, {
            "fips_code": 21091,
            "state": "KY",
            "area_name": "Hancock County",
            "value": 14.46098479
        }, {
            "fips_code": 21093,
            "state": "KY",
            "area_name": "Hardin County",
            "value": 7.978672369
        }, {
            "fips_code": 21095,
            "state": "KY",
            "area_name": "Harlan County",
            "value": 25.14728518
        }, {
            "fips_code": 21097,
            "state": "KY",
            "area_name": "Harrison County",
            "value": 14.97614284
        }, {
            "fips_code": 21099,
            "state": "KY",
            "area_name": "Hart County",
            "value": 22.02241943
        }, {
            "fips_code": 21101,
            "state": "KY",
            "area_name": "Henderson County",
            "value": 11.52409235
        }, {
            "fips_code": 21103,
            "state": "KY",
            "area_name": "Henry County",
            "value": 15.71228398
        }, {
            "fips_code": 21105,
            "state": "KY",
            "area_name": "Hickman County",
            "value": 11.2962963
        }, {
            "fips_code": 21107,
            "state": "KY",
            "area_name": "Hopkins County",
            "value": 12.30808113
        }, {
            "fips_code": 21109,
            "state": "KY",
            "area_name": "Jackson County",
            "value": 28.65554465
        }, {
            "fips_code": 21111,
            "state": "KY",
            "area_name": "Jefferson County",
            "value": 8.747038353000001
        }, {
            "fips_code": 21113,
            "state": "KY",
            "area_name": "Jessamine County",
            "value": 10.3140289
        }, {
            "fips_code": 21115,
            "state": "KY",
            "area_name": "Johnson County",
            "value": 16.94006112
        }, {
            "fips_code": 21117,
            "state": "KY",
            "area_name": "Kenton County",
            "value": 8.454289474999999
        }, {
            "fips_code": 21119,
            "state": "KY",
            "area_name": "Knott County",
            "value": 29.58515284
        }, {
            "fips_code": 21121,
            "state": "KY",
            "area_name": "Knox County",
            "value": 23.97350993
        }, {
            "fips_code": 21123,
            "state": "KY",
            "area_name": "Larue County",
            "value": 19.18942061
        }, {
            "fips_code": 21125,
            "state": "KY",
            "area_name": "Laurel County",
            "value": 17.50974579
        }, {
            "fips_code": 21127,
            "state": "KY",
            "area_name": "Lawrence County",
            "value": 23.57974594
        }, {
            "fips_code": 21129,
            "state": "KY",
            "area_name": "Lee County",
            "value": 27.07628711
        }, {
            "fips_code": 21131,
            "state": "KY",
            "area_name": "Leslie County",
            "value": 16.45962733
        }, {
            "fips_code": 21133,
            "state": "KY",
            "area_name": "Letcher County",
            "value": 23.04381344
        }, {
            "fips_code": 21135,
            "state": "KY",
            "area_name": "Lewis County",
            "value": 22.83498963
        }, {
            "fips_code": 21137,
            "state": "KY",
            "area_name": "Lincoln County",
            "value": 17.64670837
        }, {
            "fips_code": 21139,
            "state": "KY",
            "area_name": "Livingston County",
            "value": 13.59695817
        }, {
            "fips_code": 21141,
            "state": "KY",
            "area_name": "Logan County",
            "value": 12.47859589
        }, {
            "fips_code": 21143,
            "state": "KY",
            "area_name": "Lyon County",
            "value": 10.76743507
        }, {
            "fips_code": 21145,
            "state": "KY",
            "area_name": "McCracken County",
            "value": 7.572298326
        }, {
            "fips_code": 21147,
            "state": "KY",
            "area_name": "McCreary County",
            "value": 22.03031073
        }, {
            "fips_code": 21149,
            "state": "KY",
            "area_name": "McLean County",
            "value": 9.984399376000001
        }, {
            "fips_code": 21151,
            "state": "KY",
            "area_name": "Madison County",
            "value": 10.33590367
        }, {
            "fips_code": 21153,
            "state": "KY",
            "area_name": "Magoffin County",
            "value": 27.88426763
        }, {
            "fips_code": 21155,
            "state": "KY",
            "area_name": "Marion County",
            "value": 14.73439026
        }, {
            "fips_code": 21157,
            "state": "KY",
            "area_name": "Marshall County",
            "value": 8.208890432
        }, {
            "fips_code": 21159,
            "state": "KY",
            "area_name": "Martin County",
            "value": 26.28166647
        }, {
            "fips_code": 21161,
            "state": "KY",
            "area_name": "Mason County",
            "value": 13.90320128
        }, {
            "fips_code": 21163,
            "state": "KY",
            "area_name": "Meade County",
            "value": 10.69560163
        }, {
            "fips_code": 21165,
            "state": "KY",
            "area_name": "Menifee County",
            "value": 23.38112858
        }, {
            "fips_code": 21167,
            "state": "KY",
            "area_name": "Mercer County",
            "value": 11.87296313
        }, {
            "fips_code": 21169,
            "state": "KY",
            "area_name": "Metcalfe County",
            "value": 18.46499228
        }, {
            "fips_code": 21171,
            "state": "KY",
            "area_name": "Monroe County",
            "value": 19.26629041
        }, {
            "fips_code": 21173,
            "state": "KY",
            "area_name": "Montgomery County",
            "value": 14.58998378
        }, {
            "fips_code": 21175,
            "state": "KY",
            "area_name": "Morgan County",
            "value": 23.09203418
        }, {
            "fips_code": 21177,
            "state": "KY",
            "area_name": "Muhlenberg County",
            "value": 16.65078717
        }, {
            "fips_code": 21179,
            "state": "KY",
            "area_name": "Nelson County",
            "value": 7.875475136
        }, {
            "fips_code": 21181,
            "state": "KY",
            "area_name": "Nicholas County",
            "value": 18.91421947
        }, {
            "fips_code": 21183,
            "state": "KY",
            "area_name": "Ohio County",
            "value": 18.6897057
        }, {
            "fips_code": 21185,
            "state": "KY",
            "area_name": "Oldham County",
            "value": 6.073289105
        }, {
            "fips_code": 21187,
            "state": "KY",
            "area_name": "Owen County",
            "value": 17.1384457
        }, {
            "fips_code": 21189,
            "state": "KY",
            "area_name": "Owsley County",
            "value": 31.45728643
        }, {
            "fips_code": 21191,
            "state": "KY",
            "area_name": "Pendleton County",
            "value": 16.58706468
        }, {
            "fips_code": 21193,
            "state": "KY",
            "area_name": "Perry County",
            "value": 22.16385493
        }, {
            "fips_code": 21195,
            "state": "KY",
            "area_name": "Pike County",
            "value": 21.11741972
        }, {
            "fips_code": 21197,
            "state": "KY",
            "area_name": "Powell County",
            "value": 17.99257342
        }, {
            "fips_code": 21199,
            "state": "KY",
            "area_name": "Pulaski County",
            "value": 16.58053876
        }, {
            "fips_code": 21201,
            "state": "KY",
            "area_name": "Robertson County",
            "value": 15.2948801
        }, {
            "fips_code": 21203,
            "state": "KY",
            "area_name": "Rockcastle County",
            "value": 19.56521739
        }, {
            "fips_code": 21205,
            "state": "KY",
            "area_name": "Rowan County",
            "value": 13.10287148
        }, {
            "fips_code": 21207,
            "state": "KY",
            "area_name": "Russell County",
            "value": 18.12510128
        }, {
            "fips_code": 21209,
            "state": "KY",
            "area_name": "Scott County",
            "value": 6.421720046
        }, {
            "fips_code": 21211,
            "state": "KY",
            "area_name": "Shelby County",
            "value": 12.91858726
        }, {
            "fips_code": 21213,
            "state": "KY",
            "area_name": "Simpson County",
            "value": 10.52225565
        }, {
            "fips_code": 21215,
            "state": "KY",
            "area_name": "Spencer County",
            "value": 7.882177479
        }, {
            "fips_code": 21217,
            "state": "KY",
            "area_name": "Taylor County",
            "value": 12.87530908
        }, {
            "fips_code": 21219,
            "state": "KY",
            "area_name": "Todd County",
            "value": 20.8385639
        }, {
            "fips_code": 21221,
            "state": "KY",
            "area_name": "Trigg County",
            "value": 11.11668506
        }, {
            "fips_code": 21223,
            "state": "KY",
            "area_name": "Trimble County",
            "value": 16.14505713
        }, {
            "fips_code": 21225,
            "state": "KY",
            "area_name": "Union County",
            "value": 8.73605948
        }, {
            "fips_code": 21227,
            "state": "KY",
            "area_name": "Warren County",
            "value": 12.16412402
        }, {
            "fips_code": 21229,
            "state": "KY",
            "area_name": "Washington County",
            "value": 13.32527207
        }, {
            "fips_code": 21231,
            "state": "KY",
            "area_name": "Wayne County",
            "value": 22.80751708
        }, {
            "fips_code": 21233,
            "state": "KY",
            "area_name": "Webster County",
            "value": 14.79724387
        }, {
            "fips_code": 21235,
            "state": "KY",
            "area_name": "Whitley County",
            "value": 17.50377888
        }, {
            "fips_code": 21237,
            "state": "KY",
            "area_name": "Wolfe County",
            "value": 34.08890845
        }, {
            "fips_code": 21239,
            "state": "KY",
            "area_name": "Woodford County",
            "value": 8.163155342
        }, {
            "fips_code": 22000,
            "state": "LA",
            "area_name": "Lousiana",
            "value": 13.77201562
        }, {
            "fips_code": 22001,
            "state": "LA",
            "area_name": "Acadia Parish",
            "value": 19.6951506
        }, {
            "fips_code": 22003,
            "state": "LA",
            "area_name": "Allen Parish",
            "value": 20.22160665
        }, {
            "fips_code": 22005,
            "state": "LA",
            "area_name": "Ascension Parish",
            "value": 11.31185693
        }, {
            "fips_code": 22007,
            "state": "LA",
            "area_name": "Assumption Parish",
            "value": 23.24226597
        }, {
            "fips_code": 22009,
            "state": "LA",
            "area_name": "Avoyelles Parish",
            "value": 23.43178827
        }, {
            "fips_code": 22011,
            "state": "LA",
            "area_name": "Beauregard Parish",
            "value": 12.50359535
        }, {
            "fips_code": 22013,
            "state": "LA",
            "area_name": "Bienville Parish",
            "value": 13.48570191
        }, {
            "fips_code": 22015,
            "state": "LA",
            "area_name": "Bossier Parish",
            "value": 9.634980007999999
        }, {
            "fips_code": 22017,
            "state": "LA",
            "area_name": "Caddo Parish",
            "value": 13.45001935
        }, {
            "fips_code": 22019,
            "state": "LA",
            "area_name": "Calcasieu Parish",
            "value": 11.82856778
        }, {
            "fips_code": 22021,
            "state": "LA",
            "area_name": "Caldwell Parish",
            "value": 23.18668252
        }, {
            "fips_code": 22023,
            "state": "LA",
            "area_name": "Cameron Parish",
            "value": 13.89100127
        }, {
            "fips_code": 22025,
            "state": "LA",
            "area_name": "Catahoula Parish",
            "value": 27.16754088
        }, {
            "fips_code": 22027,
            "state": "LA",
            "area_name": "Claiborne Parish",
            "value": 22.080343
        }, {
            "fips_code": 22029,
            "state": "LA",
            "area_name": "Concordia Parish",
            "value": 18.83726434
        }, {
            "fips_code": 22031,
            "state": "LA",
            "area_name": "De Soto Parish",
            "value": 17.52824936
        }, {
            "fips_code": 22033,
            "state": "LA",
            "area_name": "East Baton Rouge Parish",
            "value": 9.561163733000001
        }, {
            "fips_code": 22035,
            "state": "LA",
            "area_name": "East Carroll Parish",
            "value": 34.43548387
        }, {
            "fips_code": 22037,
            "state": "LA",
            "area_name": "East Feliciana Parish",
            "value": 18.75171845
        }, {
            "fips_code": 22039,
            "state": "LA",
            "area_name": "Evangeline Parish",
            "value": 25.05714952
        }, {
            "fips_code": 22041,
            "state": "LA",
            "area_name": "Franklin Parish",
            "value": 23.13950885
        }, {
            "fips_code": 22043,
            "state": "LA",
            "area_name": "Grant Parish",
            "value": 18.78688936
        }, {
            "fips_code": 22045,
            "state": "LA",
            "area_name": "Iberia Parish",
            "value": 16.48748621
        }, {
            "fips_code": 22047,
            "state": "LA",
            "area_name": "Iberville Parish",
            "value": 20.16188374
        }, {
            "fips_code": 22049,
            "state": "LA",
            "area_name": "Jackson Parish",
            "value": 16.69753658
        }, {
            "fips_code": 22051,
            "state": "LA",
            "area_name": "Jefferson Parish",
            "value": 13.20846305
        }, {
            "fips_code": 22053,
            "state": "LA",
            "area_name": "Jefferson Davis Parish",
            "value": 17.06106162
        }, {
            "fips_code": 22055,
            "state": "LA",
            "area_name": "Lafayette Parish",
            "value": 10.69709538
        }, {
            "fips_code": 22057,
            "state": "LA",
            "area_name": "Lafourche Parish",
            "value": 19.0778943
        }, {
            "fips_code": 22059,
            "state": "LA",
            "area_name": "La Salle Parish",
            "value": 18.92792247
        }, {
            "fips_code": 22061,
            "state": "LA",
            "area_name": "Lincoln Parish",
            "value": 11.12746763
        }, {
            "fips_code": 22063,
            "state": "LA",
            "area_name": "Livingston Parish",
            "value": 12.64340753
        }, {
            "fips_code": 22065,
            "state": "LA",
            "area_name": "Madison Parish",
            "value": 24.56114471
        }, {
            "fips_code": 22067,
            "state": "LA",
            "area_name": "Morehouse Parish",
            "value": 19.97135491
        }, {
            "fips_code": 22069,
            "state": "LA",
            "area_name": "Natchitoches Parish",
            "value": 13.04271324
        }, {
            "fips_code": 22071,
            "state": "LA",
            "area_name": "Orleans Parish",
            "value": 11.82497953
        }, {
            "fips_code": 22073,
            "state": "LA",
            "area_name": "Ouachita Parish",
            "value": 11.81637641
        }, {
            "fips_code": 22075,
            "state": "LA",
            "area_name": "Plaquemines Parish",
            "value": 15.11030129
        }, {
            "fips_code": 22077,
            "state": "LA",
            "area_name": "Pointe Coupee Parish",
            "value": 18.85901908
        }, {
            "fips_code": 22079,
            "state": "LA",
            "area_name": "Rapides Parish",
            "value": 12.99549056
        }, {
            "fips_code": 22081,
            "state": "LA",
            "area_name": "Red River Parish",
            "value": 18.51569933
        }, {
            "fips_code": 22083,
            "state": "LA",
            "area_name": "Richland Parish",
            "value": 21.35901163
        }, {
            "fips_code": 22085,
            "state": "LA",
            "area_name": "Sabine Parish",
            "value": 13.88816305
        }, {
            "fips_code": 22087,
            "state": "LA",
            "area_name": "St. Bernard Parish",
            "value": 18.52044352
        }, {
            "fips_code": 22089,
            "state": "LA",
            "area_name": "St. Charles Parish",
            "value": 9.295207867
        }, {
            "fips_code": 22091,
            "state": "LA",
            "area_name": "St. Helena Parish",
            "value": 22.55749036
        }, {
            "fips_code": 22093,
            "state": "LA",
            "area_name": "St. James Parish",
            "value": 14.00467058
        }, {
            "fips_code": 22095,
            "state": "LA",
            "area_name": "St. John the Baptist Parish",
            "value": 13.8600579
        }, {
            "fips_code": 22097,
            "state": "LA",
            "area_name": "St. Landry Parish",
            "value": 21.77419355
        }, {
            "fips_code": 22099,
            "state": "LA",
            "area_name": "St. Martin Parish",
            "value": 16.23144896
        }, {
            "fips_code": 22101,
            "state": "LA",
            "area_name": "St. Mary Parish",
            "value": 18.93178367
        }, {
            "fips_code": 22103,
            "state": "LA",
            "area_name": "St. Tammany Parish",
            "value": 8.701854494000001
        }, {
            "fips_code": 22105,
            "state": "LA",
            "area_name": "Tangipahoa Parish",
            "value": 17.57914768
        }, {
            "fips_code": 22107,
            "state": "LA",
            "area_name": "Tensas Parish",
            "value": 22.23346829
        }, {
            "fips_code": 22109,
            "state": "LA",
            "area_name": "Terrebonne Parish",
            "value": 18.86779587
        }, {
            "fips_code": 22111,
            "state": "LA",
            "area_name": "Union Parish",
            "value": 13.4690313
        }, {
            "fips_code": 22113,
            "state": "LA",
            "area_name": "Vermilion Parish",
            "value": 16.82817547
        }, {
            "fips_code": 22115,
            "state": "LA",
            "area_name": "Vernon Parish",
            "value": 11.98149011
        }, {
            "fips_code": 22117,
            "state": "LA",
            "area_name": "Washington Parish",
            "value": 18.39643795
        }, {
            "fips_code": 22119,
            "state": "LA",
            "area_name": "Webster Parish",
            "value": 14.52062215
        }, {
            "fips_code": 22121,
            "state": "LA",
            "area_name": "West Baton Rouge Parish",
            "value": 12.84560672
        }, {
            "fips_code": 22123,
            "state": "LA",
            "area_name": "West Carroll Parish",
            "value": 19.25358021
        }, {
            "fips_code": 22125,
            "state": "LA",
            "area_name": "West Feliciana Parish",
            "value": 17.38396624
        }, {
            "fips_code": 22127,
            "state": "LA",
            "area_name": "Winn Parish",
            "value": 18.21198713
        }, {
            "fips_code": 23000,
            "state": "ME",
            "area_name": "Maine",
            "value": 6.292793246
        }, {
            "fips_code": 23001,
            "state": "ME",
            "area_name": "Androscoggin County",
            "value": 8.211830869
        }, {
            "fips_code": 23003,
            "state": "ME",
            "area_name": "Aroostook County",
            "value": 9.630416482999999
        }, {
            "fips_code": 23005,
            "state": "ME",
            "area_name": "Cumberland County",
            "value": 4.333530941
        }, {
            "fips_code": 23007,
            "state": "ME",
            "area_name": "Franklin County",
            "value": 6.283603722
        }, {
            "fips_code": 23009,
            "state": "ME",
            "area_name": "Hancock County",
            "value": 4.778422767
        }, {
            "fips_code": 23011,
            "state": "ME",
            "area_name": "Kennebec County",
            "value": 6.20622306
        }, {
            "fips_code": 23013,
            "state": "ME",
            "area_name": "Knox County",
            "value": 6.410589151
        }, {
            "fips_code": 23015,
            "state": "ME",
            "area_name": "Lincoln County",
            "value": 6.080202178
        }, {
            "fips_code": 23017,
            "state": "ME",
            "area_name": "Oxford County",
            "value": 8.170543706
        }, {
            "fips_code": 23019,
            "state": "ME",
            "area_name": "Penobscot County",
            "value": 6.453454643
        }, {
            "fips_code": 23021,
            "state": "ME",
            "area_name": "Piscataquis County",
            "value": 8.620556114999999
        }, {
            "fips_code": 23023,
            "state": "ME",
            "area_name": "Sagadahoc County",
            "value": 5.899458398
        }, {
            "fips_code": 23025,
            "state": "ME",
            "area_name": "Somerset County",
            "value": 8.992326547999999
        }, {
            "fips_code": 23027,
            "state": "ME",
            "area_name": "Waldo County",
            "value": 6.942839666
        }, {
            "fips_code": 23029,
            "state": "ME",
            "area_name": "Washington County",
            "value": 8.816562855999999
        }, {
            "fips_code": 23031,
            "state": "ME",
            "area_name": "York County",
            "value": 5.611153112
        }, {
            "fips_code": 24000,
            "state": "MD",
            "area_name": "Maryland",
            "value": 9.228293280000001
        }, {
            "fips_code": 24001,
            "state": "MD",
            "area_name": "Allegany County",
            "value": 9.735102092
        }, {
            "fips_code": 24003,
            "state": "MD",
            "area_name": "Anne Arundel County",
            "value": 6.59570141
        }, {
            "fips_code": 24005,
            "state": "MD",
            "area_name": "Baltimore County",
            "value": 8.399365012000001
        }, {
            "fips_code": 24009,
            "state": "MD",
            "area_name": "Calvert County",
            "value": 5.474791703
        }, {
            "fips_code": 24011,
            "state": "MD",
            "area_name": "Caroline County",
            "value": 15.13308655
        }, {
            "fips_code": 24013,
            "state": "MD",
            "area_name": "Carroll County",
            "value": 6.208875064
        }, {
            "fips_code": 24015,
            "state": "MD",
            "area_name": "Cecil County",
            "value": 9.180122494000001
        }, {
            "fips_code": 24017,
            "state": "MD",
            "area_name": "Charles County",
            "value": 6.330615804
        }, {
            "fips_code": 24019,
            "state": "MD",
            "area_name": "Dorchester County",
            "value": 12.57950834
        }, {
            "fips_code": 24021,
            "state": "MD",
            "area_name": "Frederick County",
            "value": 7.063954763
        }, {
            "fips_code": 24023,
            "state": "MD",
            "area_name": "Garrett County",
            "value": 9.578526237
        }, {
            "fips_code": 24025,
            "state": "MD",
            "area_name": "Harford County",
            "value": 6.26796276
        }, {
            "fips_code": 24027,
            "state": "MD",
            "area_name": "Howard County",
            "value": 4.625167156
        }, {
            "fips_code": 24029,
            "state": "MD",
            "area_name": "Kent County",
            "value": 9.396508005999999
        }, {
            "fips_code": 24031,
            "state": "MD",
            "area_name": "Montgomery County",
            "value": 8.768635991
        }, {
            "fips_code": 24033,
            "state": "MD",
            "area_name": "Prince George's County",
            "value": 12.77031258
        }, {
            "fips_code": 24035,
            "state": "MD",
            "area_name": "Queen Anne's County",
            "value": 7.131608549
        }, {
            "fips_code": 24037,
            "state": "MD",
            "area_name": "St. Mary's County",
            "value": 8.330675172999999
        }, {
            "fips_code": 24039,
            "state": "MD",
            "area_name": "Somerset County",
            "value": 16.77989539
        }, {
            "fips_code": 24041,
            "state": "MD",
            "area_name": "Talbot County",
            "value": 8.336259568999999
        }, {
            "fips_code": 24043,
            "state": "MD",
            "area_name": "Washington County",
            "value": 11.92175767
        }, {
            "fips_code": 24045,
            "state": "MD",
            "area_name": "Wicomico County",
            "value": 12.24285692
        }, {
            "fips_code": 24047,
            "state": "MD",
            "area_name": "Worcester County",
            "value": 7.211297281
        }, {
            "fips_code": 24510,
            "state": "MD",
            "area_name": "Baltimore city",
            "value": 13.66887749
        }, {
            "fips_code": 25000,
            "state": "MA",
            "area_name": "Massachusetts",
            "value": 8.835950713000001
        }, {
            "fips_code": 25001,
            "state": "MA",
            "area_name": "Barnstable County",
            "value": 4.315068493
        }, {
            "fips_code": 25003,
            "state": "MA",
            "area_name": "Berkshire County",
            "value": 6.957060498
        }, {
            "fips_code": 25005,
            "state": "MA",
            "area_name": "Bristol County",
            "value": 14.16479155
        }, {
            "fips_code": 25007,
            "state": "MA",
            "area_name": "Dukes County",
            "value": 4.19130882
        }, {
            "fips_code": 25009,
            "state": "MA",
            "area_name": "Essex County",
            "value": 10.25775212
        }, {
            "fips_code": 25011,
            "state": "MA",
            "area_name": "Franklin County",
            "value": 6.3969443
        }, {
            "fips_code": 25013,
            "state": "MA",
            "area_name": "Hampden County",
            "value": 13.86629257
        }, {
            "fips_code": 25015,
            "state": "MA",
            "area_name": "Hampshire County",
            "value": 4.73665818
        }, {
            "fips_code": 25017,
            "state": "MA",
            "area_name": "Middlesex County",
            "value": 6.428638948
        }, {
            "fips_code": 25019,
            "state": "MA",
            "area_name": "Nantucket County",
            "value": 3.798335781
        }, {
            "fips_code": 25021,
            "state": "MA",
            "area_name": "Norfolk County",
            "value": 5.811546938
        }, {
            "fips_code": 25023,
            "state": "MA",
            "area_name": "Plymouth County",
            "value": 6.994871185
        }, {
            "fips_code": 25025,
            "state": "MA",
            "area_name": "Suffolk County",
            "value": 12.98803008
        }, {
            "fips_code": 25027,
            "state": "MA",
            "area_name": "Worcester County",
            "value": 8.435959451
        }, {
            "fips_code": 26000,
            "state": "MI",
            "area_name": "Michigan",
            "value": 8.419614127999999
        }, {
            "fips_code": 26001,
            "state": "MI",
            "area_name": "Alcona County",
            "value": 9.572301425999999
        }, {
            "fips_code": 26003,
            "state": "MI",
            "area_name": "Alger County",
            "value": 8.413813287
        }, {
            "fips_code": 26005,
            "state": "MI",
            "area_name": "Allegan County",
            "value": 8.692286900999999
        }, {
            "fips_code": 26007,
            "state": "MI",
            "area_name": "Alpena County",
            "value": 7.310145737
        }, {
            "fips_code": 26009,
            "state": "MI",
            "area_name": "Antrim County",
            "value": 6.876239026
        }, {
            "fips_code": 26011,
            "state": "MI",
            "area_name": "Arenac County",
            "value": 11.19950499
        }, {
            "fips_code": 26013,
            "state": "MI",
            "area_name": "Baraga County",
            "value": 8.929143956000001
        }, {
            "fips_code": 26015,
            "state": "MI",
            "area_name": "Barry County",
            "value": 6.574902501
        }, {
            "fips_code": 26017,
            "state": "MI",
            "area_name": "Bay County",
            "value": 8.902443886
        }, {
            "fips_code": 26019,
            "state": "MI",
            "area_name": "Benzie County",
            "value": 7.020775011
        }, {
            "fips_code": 26021,
            "state": "MI",
            "area_name": "Berrien County",
            "value": 9.230313631
        }, {
            "fips_code": 26023,
            "state": "MI",
            "area_name": "Branch County",
            "value": 11.1276156
        }, {
            "fips_code": 26025,
            "state": "MI",
            "area_name": "Calhoun County",
            "value": 8.975858187
        }, {
            "fips_code": 26027,
            "state": "MI",
            "area_name": "Cass County",
            "value": 10.93432909
        }, {
            "fips_code": 26029,
            "state": "MI",
            "area_name": "Charlevoix County",
            "value": 6.016822333
        }, {
            "fips_code": 26031,
            "state": "MI",
            "area_name": "Cheboygan County",
            "value": 9.276522443999999
        }, {
            "fips_code": 26033,
            "state": "MI",
            "area_name": "Chippewa County",
            "value": 7.850668305
        }, {
            "fips_code": 26035,
            "state": "MI",
            "area_name": "Clare County",
            "value": 13.49470231
        }, {
            "fips_code": 26037,
            "state": "MI",
            "area_name": "Clinton County",
            "value": 4.736890272
        }, {
            "fips_code": 26039,
            "state": "MI",
            "area_name": "Crawford County",
            "value": 8.640112652999999
        }, {
            "fips_code": 26041,
            "state": "MI",
            "area_name": "Delta County",
            "value": 7.28085405
        }, {
            "fips_code": 26043,
            "state": "MI",
            "area_name": "Dickinson County",
            "value": 4.342347073
        }, {
            "fips_code": 26045,
            "state": "MI",
            "area_name": "Eaton County",
            "value": 5.080717431
        }, {
            "fips_code": 26047,
            "state": "MI",
            "area_name": "Emmet County",
            "value": 4.61854673
        }, {
            "fips_code": 26049,
            "state": "MI",
            "area_name": "Genesee County",
            "value": 8.847604354
        }, {
            "fips_code": 26051,
            "state": "MI",
            "area_name": "Gladwin County",
            "value": 11.67046841
        }, {
            "fips_code": 26053,
            "state": "MI",
            "area_name": "Gogebic County",
            "value": 5.843247026
        }, {
            "fips_code": 26055,
            "state": "MI",
            "area_name": "Grand Traverse County",
            "value": 4.83710447
        }, {
            "fips_code": 26057,
            "state": "MI",
            "area_name": "Gratiot County",
            "value": 8.157912898999999
        }, {
            "fips_code": 26059,
            "state": "MI",
            "area_name": "Hillsdale County",
            "value": 10.24986438
        }, {
            "fips_code": 26061,
            "state": "MI",
            "area_name": "Houghton County",
            "value": 7.085084271
        }, {
            "fips_code": 26063,
            "state": "MI",
            "area_name": "Huron County",
            "value": 9.025751073
        }, {
            "fips_code": 26065,
            "state": "MI",
            "area_name": "Ingham County",
            "value": 6.302091367
        }, {
            "fips_code": 26067,
            "state": "MI",
            "area_name": "Ionia County",
            "value": 8.484623124000001
        }, {
            "fips_code": 26069,
            "state": "MI",
            "area_name": "Iosco County",
            "value": 10.54858774
        }, {
            "fips_code": 26071,
            "state": "MI",
            "area_name": "Iron County",
            "value": 7.732825283
        }, {
            "fips_code": 26073,
            "state": "MI",
            "area_name": "Isabella County",
            "value": 7.482194995
        }, {
            "fips_code": 26075,
            "state": "MI",
            "area_name": "Jackson County",
            "value": 8.165625723
        }, {
            "fips_code": 26077,
            "state": "MI",
            "area_name": "Kalamazoo County",
            "value": 5.696448525
        }, {
            "fips_code": 26079,
            "state": "MI",
            "area_name": "Kalkaska County",
            "value": 11.9167376
        }, {
            "fips_code": 26081,
            "state": "MI",
            "area_name": "Kent County",
            "value": 7.899779465
        }, {
            "fips_code": 26083,
            "state": "MI",
            "area_name": "Keweenaw County",
            "value": 3.573591763
        }, {
            "fips_code": 26085,
            "state": "MI",
            "area_name": "Lake County",
            "value": 18.03710732
        }, {
            "fips_code": 26087,
            "state": "MI",
            "area_name": "Lapeer County",
            "value": 8.309681488000001
        }, {
            "fips_code": 26089,
            "state": "MI",
            "area_name": "Leelanau County",
            "value": 3.647065613
        }, {
            "fips_code": 26091,
            "state": "MI",
            "area_name": "Lenawee County",
            "value": 8.544500499
        }, {
            "fips_code": 26093,
            "state": "MI",
            "area_name": "Livingston County",
            "value": 4.051507538
        }, {
            "fips_code": 26095,
            "state": "MI",
            "area_name": "Luce County",
            "value": 7.60715968
        }, {
            "fips_code": 26097,
            "state": "MI",
            "area_name": "Mackinac County",
            "value": 8.553176387000001
        }, {
            "fips_code": 26099,
            "state": "MI",
            "area_name": "Macomb County",
            "value": 9.608559206000001
        }, {
            "fips_code": 26101,
            "state": "MI",
            "area_name": "Manistee County",
            "value": 8.824309274999999
        }, {
            "fips_code": 26103,
            "state": "MI",
            "area_name": "Marquette County",
            "value": 4.713789526
        }, {
            "fips_code": 26105,
            "state": "MI",
            "area_name": "Mason County",
            "value": 6.694382766
        }, {
            "fips_code": 26107,
            "state": "MI",
            "area_name": "Mecosta County",
            "value": 7.573604862
        }, {
            "fips_code": 26109,
            "state": "MI",
            "area_name": "Menominee County",
            "value": 6.981132075
        }, {
            "fips_code": 26111,
            "state": "MI",
            "area_name": "Midland County",
            "value": 5.308919804
        }, {
            "fips_code": 26113,
            "state": "MI",
            "area_name": "Missaukee County",
            "value": 9.838556505
        }, {
            "fips_code": 26115,
            "state": "MI",
            "area_name": "Monroe County",
            "value": 8.498552424
        }, {
            "fips_code": 26117,
            "state": "MI",
            "area_name": "Montcalm County",
            "value": 11.52324431
        }, {
            "fips_code": 26119,
            "state": "MI",
            "area_name": "Montmorency County",
            "value": 11.88772702
        }, {
            "fips_code": 26121,
            "state": "MI",
            "area_name": "Muskegon County",
            "value": 8.301299046
        }, {
            "fips_code": 26123,
            "state": "MI",
            "area_name": "Newaygo County",
            "value": 10.23753379
        }, {
            "fips_code": 26125,
            "state": "MI",
            "area_name": "Oakland County",
            "value": 5.353933728
        }, {
            "fips_code": 26127,
            "state": "MI",
            "area_name": "Oceana County",
            "value": 11.624778
        }, {
            "fips_code": 26129,
            "state": "MI",
            "area_name": "Ogemaw County",
            "value": 12.91335555
        }, {
            "fips_code": 26131,
            "state": "MI",
            "area_name": "Ontonagon County",
            "value": 6.732348112
        }, {
            "fips_code": 26133,
            "state": "MI",
            "area_name": "Osceola County",
            "value": 11.21090121
        }, {
            "fips_code": 26135,
            "state": "MI",
            "area_name": "Oscoda County",
            "value": 17.87809648
        }, {
            "fips_code": 26137,
            "state": "MI",
            "area_name": "Otsego County",
            "value": 6.404381357
        }, {
            "fips_code": 26139,
            "state": "MI",
            "area_name": "Ottawa County",
            "value": 6.228765572
        }, {
            "fips_code": 26141,
            "state": "MI",
            "area_name": "Presque Isle County",
            "value": 9.206006478000001
        }, {
            "fips_code": 26143,
            "state": "MI",
            "area_name": "Roscommon County",
            "value": 9.167909653000001
        }, {
            "fips_code": 26145,
            "state": "MI",
            "area_name": "Saginaw County",
            "value": 9.453436369
        }, {
            "fips_code": 26147,
            "state": "MI",
            "area_name": "St. Clair County",
            "value": 8.157279564
        }, {
            "fips_code": 26149,
            "state": "MI",
            "area_name": "St. Joseph County",
            "value": 13.17309802
        }, {
            "fips_code": 26151,
            "state": "MI",
            "area_name": "Sanilac County",
            "value": 10.03749441
        }, {
            "fips_code": 26153,
            "state": "MI",
            "area_name": "Schoolcraft County",
            "value": 9.819834441999999
        }, {
            "fips_code": 26155,
            "state": "MI",
            "area_name": "Shiawassee County",
            "value": 7.957065003
        }, {
            "fips_code": 26157,
            "state": "MI",
            "area_name": "Tuscola County",
            "value": 9.484327078
        }, {
            "fips_code": 26159,
            "state": "MI",
            "area_name": "Van Buren County",
            "value": 11.70083975
        }, {
            "fips_code": 26161,
            "state": "MI",
            "area_name": "Washtenaw County",
            "value": 4.278514555
        }, {
            "fips_code": 26163,
            "state": "MI",
            "area_name": "Wayne County",
            "value": 12.39187201
        }, {
            "fips_code": 26165,
            "state": "MI",
            "area_name": "Wexford County",
            "value": 9.522174044
        }, {
            "fips_code": 27000,
            "state": "MN",
            "area_name": "Minnesota",
            "value": 6.435605865
        }, {
            "fips_code": 27001,
            "state": "MN",
            "area_name": "Aitkin County",
            "value": 8.156753661
        }, {
            "fips_code": 27003,
            "state": "MN",
            "area_name": "Anoka County",
            "value": 5.857053012
        }, {
            "fips_code": 27005,
            "state": "MN",
            "area_name": "Becker County",
            "value": 7.074290484
        }, {
            "fips_code": 27007,
            "state": "MN",
            "area_name": "Beltrami County",
            "value": 7.038226677
        }, {
            "fips_code": 27009,
            "state": "MN",
            "area_name": "Benton County",
            "value": 8.704961607
        }, {
            "fips_code": 27011,
            "state": "MN",
            "area_name": "Big Stone County",
            "value": 8.054589243000001
        }, {
            "fips_code": 27013,
            "state": "MN",
            "area_name": "Blue Earth County",
            "value": 5.20353017
        }, {
            "fips_code": 27015,
            "state": "MN",
            "area_name": "Brown County",
            "value": 6.827173053
        }, {
            "fips_code": 27017,
            "state": "MN",
            "area_name": "Carlton County",
            "value": 6.184634741
        }, {
            "fips_code": 27019,
            "state": "MN",
            "area_name": "Carver County",
            "value": 3.805973384
        }, {
            "fips_code": 27021,
            "state": "MN",
            "area_name": "Cass County",
            "value": 6.377434397
        }, {
            "fips_code": 27023,
            "state": "MN",
            "area_name": "Chippewa County",
            "value": 9.132101777999999
        }, {
            "fips_code": 27025,
            "state": "MN",
            "area_name": "Chisago County",
            "value": 4.672039172
        }, {
            "fips_code": 27027,
            "state": "MN",
            "area_name": "Clay County",
            "value": 5.125356629
        }, {
            "fips_code": 27029,
            "state": "MN",
            "area_name": "Clearwater County",
            "value": 13.66695427
        }, {
            "fips_code": 27031,
            "state": "MN",
            "area_name": "Cook County",
            "value": 3.459262631
        }, {
            "fips_code": 27033,
            "state": "MN",
            "area_name": "Cottonwood County",
            "value": 8.894292296
        }, {
            "fips_code": 27035,
            "state": "MN",
            "area_name": "Crow Wing County",
            "value": 6.006730586
        }, {
            "fips_code": 27037,
            "state": "MN",
            "area_name": "Dakota County",
            "value": 4.906625129
        }, {
            "fips_code": 27039,
            "state": "MN",
            "area_name": "Dodge County",
            "value": 4.128807153
        }, {
            "fips_code": 27041,
            "state": "MN",
            "area_name": "Douglas County",
            "value": 4.656871593
        }, {
            "fips_code": 27043,
            "state": "MN",
            "area_name": "Faribault County",
            "value": 7.450582869
        }, {
            "fips_code": 27045,
            "state": "MN",
            "area_name": "Fillmore County",
            "value": 8.398316196
        }, {
            "fips_code": 27047,
            "state": "MN",
            "area_name": "Freeborn County",
            "value": 11.7689859
        }, {
            "fips_code": 27049,
            "state": "MN",
            "area_name": "Goodhue County",
            "value": 5.603191616
        }, {
            "fips_code": 27051,
            "state": "MN",
            "area_name": "Grant County",
            "value": 7.159460716
        }, {
            "fips_code": 27053,
            "state": "MN",
            "area_name": "Hennepin County",
            "value": 6.133782088
        }, {
            "fips_code": 27055,
            "state": "MN",
            "area_name": "Houston County",
            "value": 4.575651265
        }, {
            "fips_code": 27057,
            "state": "MN",
            "area_name": "Hubbard County",
            "value": 5.583263165
        }, {
            "fips_code": 27059,
            "state": "MN",
            "area_name": "Isanti County",
            "value": 8.037622916
        }, {
            "fips_code": 27061,
            "state": "MN",
            "area_name": "Itasca County",
            "value": 5.618012041
        }, {
            "fips_code": 27063,
            "state": "MN",
            "area_name": "Jackson County",
            "value": 7.155886067
        }, {
            "fips_code": 27065,
            "state": "MN",
            "area_name": "Kanabec County",
            "value": 9.961551905
        }, {
            "fips_code": 27067,
            "state": "MN",
            "area_name": "Kandiyohi County",
            "value": 8.816466552
        }, {
            "fips_code": 27069,
            "state": "MN",
            "area_name": "Kittson County",
            "value": 4.29386112
        }, {
            "fips_code": 27071,
            "state": "MN",
            "area_name": "Koochiching County",
            "value": 7.650510759
        }, {
            "fips_code": 27073,
            "state": "MN",
            "area_name": "Lac qui Parle County",
            "value": 5.988999796
        }, {
            "fips_code": 27075,
            "state": "MN",
            "area_name": "Lake County",
            "value": 6.588813768
        }, {
            "fips_code": 27077,
            "state": "MN",
            "area_name": "Lake of the Woods County",
            "value": 2.418207681
        }, {
            "fips_code": 27079,
            "state": "MN",
            "area_name": "Le Sueur County",
            "value": 5.202135774
        }, {
            "fips_code": 27081,
            "state": "MN",
            "area_name": "Lincoln County",
            "value": 6.224899598
        }, {
            "fips_code": 27083,
            "state": "MN",
            "area_name": "Lyon County",
            "value": 6.982512712
        }, {
            "fips_code": 27085,
            "state": "MN",
            "area_name": "McLeod County",
            "value": 6.207141168
        }, {
            "fips_code": 27087,
            "state": "MN",
            "area_name": "Mahnomen County",
            "value": 13.54897772
        }, {
            "fips_code": 27089,
            "state": "MN",
            "area_name": "Marshall County",
            "value": 8.182969293999999
        }, {
            "fips_code": 27091,
            "state": "MN",
            "area_name": "Martin County",
            "value": 6.678801456
        }, {
            "fips_code": 27093,
            "state": "MN",
            "area_name": "Meeker County",
            "value": 6.094708225
        }, {
            "fips_code": 27095,
            "state": "MN",
            "area_name": "Mille Lacs County",
            "value": 9.709962169000001
        }, {
            "fips_code": 27097,
            "state": "MN",
            "area_name": "Morrison County",
            "value": 8.081708923000001
        }, {
            "fips_code": 27099,
            "state": "MN",
            "area_name": "Mower County",
            "value": 10.60974242
        }, {
            "fips_code": 27101,
            "state": "MN",
            "area_name": "Murray County",
            "value": 9.887102292
        }, {
            "fips_code": 27103,
            "state": "MN",
            "area_name": "Nicollet County",
            "value": 5.027882713
        }, {
            "fips_code": 27105,
            "state": "MN",
            "area_name": "Nobles County",
            "value": 21.18050593
        }, {
            "fips_code": 27107,
            "state": "MN",
            "area_name": "Norman County",
            "value": 7.840071476
        }, {
            "fips_code": 27109,
            "state": "MN",
            "area_name": "Olmsted County",
            "value": 5.037121435
        }, {
            "fips_code": 27111,
            "state": "MN",
            "area_name": "Otter Tail County",
            "value": 7.373250206
        }, {
            "fips_code": 27113,
            "state": "MN",
            "area_name": "Pennington County",
            "value": 4.951728434
        }, {
            "fips_code": 27115,
            "state": "MN",
            "area_name": "Pine County",
            "value": 8.725082863000001
        }, {
            "fips_code": 27117,
            "state": "MN",
            "area_name": "Pipestone County",
            "value": 8.445297504999999
        }, {
            "fips_code": 27119,
            "state": "MN",
            "area_name": "Polk County",
            "value": 7.21571232
        }, {
            "fips_code": 27121,
            "state": "MN",
            "area_name": "Pope County",
            "value": 5.437844458
        }, {
            "fips_code": 27123,
            "state": "MN",
            "area_name": "Ramsey County",
            "value": 9.045746728999999
        }, {
            "fips_code": 27125,
            "state": "MN",
            "area_name": "Red Lake County",
            "value": 5.508938344
        }, {
            "fips_code": 27127,
            "state": "MN",
            "area_name": "Redwood County",
            "value": 7.113372372
        }, {
            "fips_code": 27129,
            "state": "MN",
            "area_name": "Renville County",
            "value": 9.433411215
        }, {
            "fips_code": 27131,
            "state": "MN",
            "area_name": "Rice County",
            "value": 7.690861668
        }, {
            "fips_code": 27133,
            "state": "MN",
            "area_name": "Rock County",
            "value": 5.634236453
        }, {
            "fips_code": 27135,
            "state": "MN",
            "area_name": "Roseau County",
            "value": 6.593301435
        }, {
            "fips_code": 27137,
            "state": "MN",
            "area_name": "St. Louis County",
            "value": 5.37347867
        }, {
            "fips_code": 27139,
            "state": "MN",
            "area_name": "Scott County",
            "value": 5.074137469
        }, {
            "fips_code": 27141,
            "state": "MN",
            "area_name": "Sherburne County",
            "value": 5.716770776
        }, {
            "fips_code": 27143,
            "state": "MN",
            "area_name": "Sibley County",
            "value": 7.362022385
        }, {
            "fips_code": 27145,
            "state": "MN",
            "area_name": "Stearns County",
            "value": 7.748657842
        }, {
            "fips_code": 27147,
            "state": "MN",
            "area_name": "Steele County",
            "value": 8.345249444
        }, {
            "fips_code": 27149,
            "state": "MN",
            "area_name": "Stevens County",
            "value": 6.527370057
        }, {
            "fips_code": 27151,
            "state": "MN",
            "area_name": "Swift County",
            "value": 8.937728937999999
        }, {
            "fips_code": 27153,
            "state": "MN",
            "area_name": "Todd County",
            "value": 12.2208151
        }, {
            "fips_code": 27155,
            "state": "MN",
            "area_name": "Traverse County",
            "value": 6.555981269
        }, {
            "fips_code": 27157,
            "state": "MN",
            "area_name": "Wabasha County",
            "value": 5.584052984
        }, {
            "fips_code": 27159,
            "state": "MN",
            "area_name": "Wadena County",
            "value": 9.330476701
        }, {
            "fips_code": 27161,
            "state": "MN",
            "area_name": "Waseca County",
            "value": 7.183034357
        }, {
            "fips_code": 27163,
            "state": "MN",
            "area_name": "Washington County",
            "value": 3.742043551
        }, {
            "fips_code": 27165,
            "state": "MN",
            "area_name": "Watonwan County",
            "value": 12.8215275
        }, {
            "fips_code": 27167,
            "state": "MN",
            "area_name": "Wilkin County",
            "value": 5.890168291
        }, {
            "fips_code": 27169,
            "state": "MN",
            "area_name": "Winona County",
            "value": 6.641911527
        }, {
            "fips_code": 27171,
            "state": "MN",
            "area_name": "Wright County",
            "value": 5.453944105
        }, {
            "fips_code": 27173,
            "state": "MN",
            "area_name": "Yellow Medicine County",
            "value": 7.71420012
        }, {
            "fips_code": 28000,
            "state": "MS",
            "area_name": "Mississippi",
            "value": 14.36205268
        }, {
            "fips_code": 28001,
            "state": "MS",
            "area_name": "Adams County",
            "value": 20.32345785
        }, {
            "fips_code": 28003,
            "state": "MS",
            "area_name": "Alcorn County",
            "value": 19.00557046
        }, {
            "fips_code": 28005,
            "state": "MS",
            "area_name": "Amite County",
            "value": 14.60372083
        }, {
            "fips_code": 28007,
            "state": "MS",
            "area_name": "Attala County",
            "value": 18.82118214
        }, {
            "fips_code": 28009,
            "state": "MS",
            "area_name": "Benton County",
            "value": 25.6099765
        }, {
            "fips_code": 28011,
            "state": "MS",
            "area_name": "Bolivar County",
            "value": 19.61534687
        }, {
            "fips_code": 28013,
            "state": "MS",
            "area_name": "Calhoun County",
            "value": 21.6483636
        }, {
            "fips_code": 28015,
            "state": "MS",
            "area_name": "Carroll County",
            "value": 19.30062348
        }, {
            "fips_code": 28017,
            "state": "MS",
            "area_name": "Chickasaw County",
            "value": 23.44627809
        }, {
            "fips_code": 28019,
            "state": "MS",
            "area_name": "Choctaw County",
            "value": 18.26280624
        }, {
            "fips_code": 28021,
            "state": "MS",
            "area_name": "Claiborne County",
            "value": 18.38467615
        }, {
            "fips_code": 28023,
            "state": "MS",
            "area_name": "Clarke County",
            "value": 14.82536765
        }, {
            "fips_code": 28025,
            "state": "MS",
            "area_name": "Clay County",
            "value": 16.55685606
        }, {
            "fips_code": 28027,
            "state": "MS",
            "area_name": "Coahoma County",
            "value": 18.78862794
        }, {
            "fips_code": 28029,
            "state": "MS",
            "area_name": "Copiah County",
            "value": 16.20911528
        }, {
            "fips_code": 28031,
            "state": "MS",
            "area_name": "Covington County",
            "value": 15.80115037
        }, {
            "fips_code": 28033,
            "state": "MS",
            "area_name": "DeSoto County",
            "value": 8.902930784
        }, {
            "fips_code": 28035,
            "state": "MS",
            "area_name": "Forrest County",
            "value": 11.0005152
        }, {
            "fips_code": 28037,
            "state": "MS",
            "area_name": "Franklin County",
            "value": 16.32158179
        }, {
            "fips_code": 28039,
            "state": "MS",
            "area_name": "George County",
            "value": 15.18255514
        }, {
            "fips_code": 28041,
            "state": "MS",
            "area_name": "Greene County",
            "value": 22.56295695
        }, {
            "fips_code": 28043,
            "state": "MS",
            "area_name": "Grenada County",
            "value": 17.94974874
        }, {
            "fips_code": 28045,
            "state": "MS",
            "area_name": "Hancock County",
            "value": 11.09501826
        }, {
            "fips_code": 28047,
            "state": "MS",
            "area_name": "Harrison County",
            "value": 10.9710838
        }, {
            "fips_code": 28049,
            "state": "MS",
            "area_name": "Hinds County",
            "value": 11.89289332
        }, {
            "fips_code": 28051,
            "state": "MS",
            "area_name": "Holmes County",
            "value": 22.42025409
        }, {
            "fips_code": 28053,
            "state": "MS",
            "area_name": "Humphreys County",
            "value": 23.70098513
        }, {
            "fips_code": 28055,
            "state": "MS",
            "area_name": "Issaquena County",
            "value": 40.4685836
        }, {
            "fips_code": 28057,
            "state": "MS",
            "area_name": "Itawamba County",
            "value": 16.45113156
        }, {
            "fips_code": 28059,
            "state": "MS",
            "area_name": "Jackson County",
            "value": 11.28445509
        }, {
            "fips_code": 28061,
            "state": "MS",
            "area_name": "Jasper County",
            "value": 13.06242219
        }, {
            "fips_code": 28063,
            "state": "MS",
            "area_name": "Jefferson County",
            "value": 21.53531218
        }, {
            "fips_code": 28065,
            "state": "MS",
            "area_name": "Jefferson Davis County",
            "value": 15.6171914
        }, {
            "fips_code": 28067,
            "state": "MS",
            "area_name": "Jones County",
            "value": 13.95264857
        }, {
            "fips_code": 28069,
            "state": "MS",
            "area_name": "Kemper County",
            "value": 18.41663871
        }, {
            "fips_code": 28071,
            "state": "MS",
            "area_name": "Lafayette County",
            "value": 8.808624343
        }, {
            "fips_code": 28073,
            "state": "MS",
            "area_name": "Lamar County",
            "value": 10.40387949
        }, {
            "fips_code": 28075,
            "state": "MS",
            "area_name": "Lauderdale County",
            "value": 15.40003207
        }, {
            "fips_code": 28077,
            "state": "MS",
            "area_name": "Lawrence County",
            "value": 18.28220859
        }, {
            "fips_code": 28079,
            "state": "MS",
            "area_name": "Leake County",
            "value": 18.91123588
        }, {
            "fips_code": 28081,
            "state": "MS",
            "area_name": "Lee County",
            "value": 13.75110358
        }, {
            "fips_code": 28083,
            "state": "MS",
            "area_name": "Leflore County",
            "value": 17.46157324
        }, {
            "fips_code": 28085,
            "state": "MS",
            "area_name": "Lincoln County",
            "value": 14.58228485
        }, {
            "fips_code": 28087,
            "state": "MS",
            "area_name": "Lowndes County",
            "value": 12.86554192
        }, {
            "fips_code": 28089,
            "state": "MS",
            "area_name": "Madison County",
            "value": 7.789178457
        }, {
            "fips_code": 28091,
            "state": "MS",
            "area_name": "Marion County",
            "value": 16.355307
        }, {
            "fips_code": 28093,
            "state": "MS",
            "area_name": "Marshall County",
            "value": 19.11572375
        }, {
            "fips_code": 28095,
            "state": "MS",
            "area_name": "Monroe County",
            "value": 16.70839593
        }, {
            "fips_code": 28097,
            "state": "MS",
            "area_name": "Montgomery County",
            "value": 22.32336368
        }, {
            "fips_code": 28099,
            "state": "MS",
            "area_name": "Neshoba County",
            "value": 18.88470563
        }, {
            "fips_code": 28101,
            "state": "MS",
            "area_name": "Newton County",
            "value": 15.87176361
        }, {
            "fips_code": 28103,
            "state": "MS",
            "area_name": "Noxubee County",
            "value": 22.7788419
        }, {
            "fips_code": 28105,
            "state": "MS",
            "area_name": "Oktibbeha County",
            "value": 9.157973174
        }, {
            "fips_code": 28107,
            "state": "MS",
            "area_name": "Panola County",
            "value": 19.84409498
        }, {
            "fips_code": 28109,
            "state": "MS",
            "area_name": "Pearl River County",
            "value": 14.15050063
        }, {
            "fips_code": 28111,
            "state": "MS",
            "area_name": "Perry County",
            "value": 15.31994981
        }, {
            "fips_code": 28113,
            "state": "MS",
            "area_name": "Pike County",
            "value": 16.64874414
        }, {
            "fips_code": 28115,
            "state": "MS",
            "area_name": "Pontotoc County",
            "value": 21.18021548
        }, {
            "fips_code": 28117,
            "state": "MS",
            "area_name": "Prentiss County",
            "value": 16.19064514
        }, {
            "fips_code": 28119,
            "state": "MS",
            "area_name": "Quitman County",
            "value": 25.4005108
        }, {
            "fips_code": 28121,
            "state": "MS",
            "area_name": "Rankin County",
            "value": 10.19467782
        }, {
            "fips_code": 28123,
            "state": "MS",
            "area_name": "Scott County",
            "value": 22.17701483
        }, {
            "fips_code": 28125,
            "state": "MS",
            "area_name": "Sharkey County",
            "value": 20.18484288
        }, {
            "fips_code": 28127,
            "state": "MS",
            "area_name": "Simpson County",
            "value": 20.58112741
        }, {
            "fips_code": 28129,
            "state": "MS",
            "area_name": "Smith County",
            "value": 18.78952123
        }, {
            "fips_code": 28131,
            "state": "MS",
            "area_name": "Stone County",
            "value": 15.57619596
        }, {
            "fips_code": 28133,
            "state": "MS",
            "area_name": "Sunflower County",
            "value": 23.9791923
        }, {
            "fips_code": 28135,
            "state": "MS",
            "area_name": "Tallahatchie County",
            "value": 21.90201729
        }, {
            "fips_code": 28137,
            "state": "MS",
            "area_name": "Tate County",
            "value": 14.28958198
        }, {
            "fips_code": 28139,
            "state": "MS",
            "area_name": "Tippah County",
            "value": 22.1181856
        }, {
            "fips_code": 28141,
            "state": "MS",
            "area_name": "Tishomingo County",
            "value": 21.09077325
        }, {
            "fips_code": 28143,
            "state": "MS",
            "area_name": "Tunica County",
            "value": 15.9487417
        }, {
            "fips_code": 28145,
            "state": "MS",
            "area_name": "Union County",
            "value": 21.72995781
        }, {
            "fips_code": 28147,
            "state": "MS",
            "area_name": "Walthall County",
            "value": 18.22735192
        }, {
            "fips_code": 28149,
            "state": "MS",
            "area_name": "Warren County",
            "value": 12.02857889
        }, {
            "fips_code": 28151,
            "state": "MS",
            "area_name": "Washington County",
            "value": 19.01180089
        }, {
            "fips_code": 28153,
            "state": "MS",
            "area_name": "Wayne County",
            "value": 19.04427266
        }, {
            "fips_code": 28155,
            "state": "MS",
            "area_name": "Webster County",
            "value": 15.24939904
        }, {
            "fips_code": 28157,
            "state": "MS",
            "area_name": "Wilkinson County",
            "value": 18.65659902
        }, {
            "fips_code": 28159,
            "state": "MS",
            "area_name": "Winston County",
            "value": 14.31682529
        }, {
            "fips_code": 28161,
            "state": "MS",
            "area_name": "Yalobusha County",
            "value": 14.73298546
        }, {
            "fips_code": 28163,
            "state": "MS",
            "area_name": "Yazoo County",
            "value": 24.03348554
        }, {
            "fips_code": 29000,
            "state": "MO",
            "area_name": "Missouri",
            "value": 9.015169949000001
        }, {
            "fips_code": 29001,
            "state": "MO",
            "area_name": "Adair County",
            "value": 8.099620216
        }, {
            "fips_code": 29003,
            "state": "MO",
            "area_name": "Andrew County",
            "value": 6.495166573
        }, {
            "fips_code": 29005,
            "state": "MO",
            "area_name": "Atchison County",
            "value": 9.956264471000001
        }, {
            "fips_code": 29007,
            "state": "MO",
            "area_name": "Audrain County",
            "value": 12.72060509
        }, {
            "fips_code": 29009,
            "state": "MO",
            "area_name": "Barry County",
            "value": 14.89064872
        }, {
            "fips_code": 29011,
            "state": "MO",
            "area_name": "Barton County",
            "value": 12.32569721
        }, {
            "fips_code": 29013,
            "state": "MO",
            "area_name": "Bates County",
            "value": 11.94178268
        }, {
            "fips_code": 29015,
            "state": "MO",
            "area_name": "Benton County",
            "value": 13.04696373
        }, {
            "fips_code": 29017,
            "state": "MO",
            "area_name": "Bollinger County",
            "value": 15.12757415
        }, {
            "fips_code": 29019,
            "state": "MO",
            "area_name": "Boone County",
            "value": 5.001082876
        }, {
            "fips_code": 29021,
            "state": "MO",
            "area_name": "Buchanan County",
            "value": 10.47633819
        }, {
            "fips_code": 29023,
            "state": "MO",
            "area_name": "Butler County",
            "value": 15.81034424
        }, {
            "fips_code": 29025,
            "state": "MO",
            "area_name": "Caldwell County",
            "value": 10.77076744
        }, {
            "fips_code": 29027,
            "state": "MO",
            "area_name": "Callaway County",
            "value": 10.85010455
        }, {
            "fips_code": 29029,
            "state": "MO",
            "area_name": "Camden County",
            "value": 8.628928505999999
        }, {
            "fips_code": 29031,
            "state": "MO",
            "area_name": "Cape Girardeau County",
            "value": 8.139579423000001
        }, {
            "fips_code": 29033,
            "state": "MO",
            "area_name": "Carroll County",
            "value": 9.630496572
        }, {
            "fips_code": 29035,
            "state": "MO",
            "area_name": "Carter County",
            "value": 13.03517862
        }, {
            "fips_code": 29037,
            "state": "MO",
            "area_name": "Cass County",
            "value": 6.672769254
        }, {
            "fips_code": 29039,
            "state": "MO",
            "area_name": "Cedar County",
            "value": 13.83769474
        }, {
            "fips_code": 29041,
            "state": "MO",
            "area_name": "Chariton County",
            "value": 8.64906238
        }, {
            "fips_code": 29043,
            "state": "MO",
            "area_name": "Christian County",
            "value": 7.502786315
        }, {
            "fips_code": 29045,
            "state": "MO",
            "area_name": "Clark County",
            "value": 13.57970698
        }, {
            "fips_code": 29047,
            "state": "MO",
            "area_name": "Clay County",
            "value": 6.448746093
        }, {
            "fips_code": 29049,
            "state": "MO",
            "area_name": "Clinton County",
            "value": 6.654823722
        }, {
            "fips_code": 29051,
            "state": "MO",
            "area_name": "Cole County",
            "value": 7.43764596
        }, {
            "fips_code": 29053,
            "state": "MO",
            "area_name": "Cooper County",
            "value": 10.70855502
        }, {
            "fips_code": 29055,
            "state": "MO",
            "area_name": "Crawford County",
            "value": 18.89715375
        }, {
            "fips_code": 29057,
            "state": "MO",
            "area_name": "Dade County",
            "value": 10.77343039
        }, {
            "fips_code": 29059,
            "state": "MO",
            "area_name": "Dallas County",
            "value": 13.16217373
        }, {
            "fips_code": 29061,
            "state": "MO",
            "area_name": "Daviess County",
            "value": 12.83288651
        }, {
            "fips_code": 29063,
            "state": "MO",
            "area_name": "DeKalb County",
            "value": 10.42543245
        }, {
            "fips_code": 29065,
            "state": "MO",
            "area_name": "Dent County",
            "value": 16.14912878
        }, {
            "fips_code": 29067,
            "state": "MO",
            "area_name": "Douglas County",
            "value": 16.24557261
        }, {
            "fips_code": 29069,
            "state": "MO",
            "area_name": "Dunklin County",
            "value": 20.79763038
        }, {
            "fips_code": 29071,
            "state": "MO",
            "area_name": "Franklin County",
            "value": 10.05284435
        }, {
            "fips_code": 29073,
            "state": "MO",
            "area_name": "Gasconade County",
            "value": 11.65455562
        }, {
            "fips_code": 29075,
            "state": "MO",
            "area_name": "Gentry County",
            "value": 13.96608573
        }, {
            "fips_code": 29077,
            "state": "MO",
            "area_name": "Greene County",
            "value": 7.101236293
        }, {
            "fips_code": 29079,
            "state": "MO",
            "area_name": "Grundy County",
            "value": 15.55421323
        }, {
            "fips_code": 29081,
            "state": "MO",
            "area_name": "Harrison County",
            "value": 8.644818423
        }, {
            "fips_code": 29083,
            "state": "MO",
            "area_name": "Henry County",
            "value": 11.40681978
        }, {
            "fips_code": 29085,
            "state": "MO",
            "area_name": "Hickory County",
            "value": 10.86856264
        }, {
            "fips_code": 29087,
            "state": "MO",
            "area_name": "Holt County",
            "value": 5.843124802
        }, {
            "fips_code": 29089,
            "state": "MO",
            "area_name": "Howard County",
            "value": 12.09457411
        }, {
            "fips_code": 29091,
            "state": "MO",
            "area_name": "Howell County",
            "value": 14.15156871
        }, {
            "fips_code": 29093,
            "state": "MO",
            "area_name": "Iron County",
            "value": 17.32272069
        }, {
            "fips_code": 29095,
            "state": "MO",
            "area_name": "Jackson County",
            "value": 8.633831902000001
        }, {
            "fips_code": 29097,
            "state": "MO",
            "area_name": "Jasper County",
            "value": 12.38721384
        }, {
            "fips_code": 29099,
            "state": "MO",
            "area_name": "Jefferson County",
            "value": 9.259884666
        }, {
            "fips_code": 29101,
            "state": "MO",
            "area_name": "Johnson County",
            "value": 7.045727658
        }, {
            "fips_code": 29103,
            "state": "MO",
            "area_name": "Knox County",
            "value": 13.30089213
        }, {
            "fips_code": 29105,
            "state": "MO",
            "area_name": "Laclede County",
            "value": 13.4734495
        }, {
            "fips_code": 29107,
            "state": "MO",
            "area_name": "Lafayette County",
            "value": 9.579234013000001
        }, {
            "fips_code": 29109,
            "state": "MO",
            "area_name": "Lawrence County",
            "value": 14.97264727
        }, {
            "fips_code": 29111,
            "state": "MO",
            "area_name": "Lewis County",
            "value": 14.60452406
        }, {
            "fips_code": 29113,
            "state": "MO",
            "area_name": "Lincoln County",
            "value": 9.150825763
        }, {
            "fips_code": 29115,
            "state": "MO",
            "area_name": "Linn County",
            "value": 10.09017792
        }, {
            "fips_code": 29117,
            "state": "MO",
            "area_name": "Livingston County",
            "value": 11.76806084
        }, {
            "fips_code": 29119,
            "state": "MO",
            "area_name": "McDonald County",
            "value": 21.83442602
        }, {
            "fips_code": 29121,
            "state": "MO",
            "area_name": "Macon County",
            "value": 9.664146971999999
        }, {
            "fips_code": 29123,
            "state": "MO",
            "area_name": "Madison County",
            "value": 12.47142204
        }, {
            "fips_code": 29125,
            "state": "MO",
            "area_name": "Maries County",
            "value": 14.13025556
        }, {
            "fips_code": 29127,
            "state": "MO",
            "area_name": "Marion County",
            "value": 10.38495506
        }, {
            "fips_code": 29129,
            "state": "MO",
            "area_name": "Mercer County",
            "value": 12.50512505
        }, {
            "fips_code": 29131,
            "state": "MO",
            "area_name": "Miller County",
            "value": 10.99799929
        }, {
            "fips_code": 29133,
            "state": "MO",
            "area_name": "Mississippi County",
            "value": 20.18999782
        }, {
            "fips_code": 29135,
            "state": "MO",
            "area_name": "Moniteau County",
            "value": 14.41825239
        }, {
            "fips_code": 29137,
            "state": "MO",
            "area_name": "Monroe County",
            "value": 9.144639632000001
        }, {
            "fips_code": 29139,
            "state": "MO",
            "area_name": "Montgomery County",
            "value": 14.15730337
        }, {
            "fips_code": 29141,
            "state": "MO",
            "area_name": "Morgan County",
            "value": 20.88667938
        }, {
            "fips_code": 29143,
            "state": "MO",
            "area_name": "New Madrid County",
            "value": 17.71821425
        }, {
            "fips_code": 29145,
            "state": "MO",
            "area_name": "Newton County",
            "value": 10.75711204
        }, {
            "fips_code": 29147,
            "state": "MO",
            "area_name": "Nodaway County",
            "value": 6.047283285
        }, {
            "fips_code": 29149,
            "state": "MO",
            "area_name": "Oregon County",
            "value": 16.63458454
        }, {
            "fips_code": 29151,
            "state": "MO",
            "area_name": "Osage County",
            "value": 8.148716823999999
        }, {
            "fips_code": 29153,
            "state": "MO",
            "area_name": "Ozark County",
            "value": 18.44734819
        }, {
            "fips_code": 29155,
            "state": "MO",
            "area_name": "Pemiscot County",
            "value": 20.19835972
        }, {
            "fips_code": 29157,
            "state": "MO",
            "area_name": "Perry County",
            "value": 13.80076628
        }, {
            "fips_code": 29159,
            "state": "MO",
            "area_name": "Pettis County",
            "value": 12.60930889
        }, {
            "fips_code": 29161,
            "state": "MO",
            "area_name": "Phelps County",
            "value": 9.401037011
        }, {
            "fips_code": 29163,
            "state": "MO",
            "area_name": "Pike County",
            "value": 12.94324822
        }, {
            "fips_code": 29165,
            "state": "MO",
            "area_name": "Platte County",
            "value": 3.371145329
        }, {
            "fips_code": 29167,
            "state": "MO",
            "area_name": "Polk County",
            "value": 10.75902727
        }, {
            "fips_code": 29169,
            "state": "MO",
            "area_name": "Pulaski County",
            "value": 5.563528352
        }, {
            "fips_code": 29171,
            "state": "MO",
            "area_name": "Putnam County",
            "value": 5.614035088
        }, {
            "fips_code": 29173,
            "state": "MO",
            "area_name": "Ralls County",
            "value": 9.545268332999999
        }, {
            "fips_code": 29175,
            "state": "MO",
            "area_name": "Randolph County",
            "value": 11.00788782
        }, {
            "fips_code": 29177,
            "state": "MO",
            "area_name": "Ray County",
            "value": 10.62589169
        }, {
            "fips_code": 29179,
            "state": "MO",
            "area_name": "Reynolds County",
            "value": 22.17362782
        }, {
            "fips_code": 29181,
            "state": "MO",
            "area_name": "Ripley County",
            "value": 18.22679339
        }, {
            "fips_code": 29183,
            "state": "MO",
            "area_name": "St. Charles County",
            "value": 4.619972901
        }, {
            "fips_code": 29185,
            "state": "MO",
            "area_name": "St. Clair County",
            "value": 11.92336035
        }, {
            "fips_code": 29186,
            "state": "MO",
            "area_name": "Ste. Genevieve County",
            "value": 8.598386851000001
        }, {
            "fips_code": 29187,
            "state": "MO",
            "area_name": "St. Francois County",
            "value": 14.0260667
        }, {
            "fips_code": 29189,
            "state": "MO",
            "area_name": "St. Louis County",
            "value": 5.902439305
        }, {
            "fips_code": 29195,
            "state": "MO",
            "area_name": "Saline County",
            "value": 12.90917473
        }, {
            "fips_code": 29197,
            "state": "MO",
            "area_name": "Schuyler County",
            "value": 10.31687546
        }, {
            "fips_code": 29199,
            "state": "MO",
            "area_name": "Scotland County",
            "value": 20.56951424
        }, {
            "fips_code": 29201,
            "state": "MO",
            "area_name": "Scott County",
            "value": 14.42070349
        }, {
            "fips_code": 29203,
            "state": "MO",
            "area_name": "Shannon County",
            "value": 14.24142608
        }, {
            "fips_code": 29205,
            "state": "MO",
            "area_name": "Shelby County",
            "value": 11.3018598
        }, {
            "fips_code": 29207,
            "state": "MO",
            "area_name": "Stoddard County",
            "value": 18.91408115
        }, {
            "fips_code": 29209,
            "state": "MO",
            "area_name": "Stone County",
            "value": 9.948884179
        }, {
            "fips_code": 29211,
            "state": "MO",
            "area_name": "Sullivan County",
            "value": 14.94670543
        }, {
            "fips_code": 29213,
            "state": "MO",
            "area_name": "Taney County",
            "value": 9.929315860000001
        }, {
            "fips_code": 29215,
            "state": "MO",
            "area_name": "Texas County",
            "value": 14.86218801
        }, {
            "fips_code": 29217,
            "state": "MO",
            "area_name": "Vernon County",
            "value": 10.66001361
        }, {
            "fips_code": 29219,
            "state": "MO",
            "area_name": "Warren County",
            "value": 12.04570769
        }, {
            "fips_code": 29221,
            "state": "MO",
            "area_name": "Washington County",
            "value": 19.51013003
        }, {
            "fips_code": 29223,
            "state": "MO",
            "area_name": "Wayne County",
            "value": 18.22695894
        }, {
            "fips_code": 29225,
            "state": "MO",
            "area_name": "Webster County",
            "value": 12.68091518
        }, {
            "fips_code": 29227,
            "state": "MO",
            "area_name": "Worth County",
            "value": 8.605974395
        }, {
            "fips_code": 29229,
            "state": "MO",
            "area_name": "Wright County",
            "value": 17.03233256
        }, {
            "fips_code": 29510,
            "state": "MO",
            "area_name": "St. Louis city",
            "value": 10.75324937
        }, {
            "fips_code": 30000,
            "state": "MT",
            "area_name": "Montana",
            "value": 5.647976722
        }, {
            "fips_code": 30001,
            "state": "MT",
            "area_name": "Beaverhead County",
            "value": 5.464824121
        }, {
            "fips_code": 30003,
            "state": "MT",
            "area_name": "Big Horn County",
            "value": 10.60483871
        }, {
            "fips_code": 30005,
            "state": "MT",
            "area_name": "Blaine County",
            "value": 9.316623314999999
        }, {
            "fips_code": 30007,
            "state": "MT",
            "area_name": "Broadwater County",
            "value": 7.091599831
        }, {
            "fips_code": 30009,
            "state": "MT",
            "area_name": "Carbon County",
            "value": 4.491166957
        }, {
            "fips_code": 30011,
            "state": "MT",
            "area_name": "Carter County",
            "value": 7.692307692
        }, {
            "fips_code": 30013,
            "state": "MT",
            "area_name": "Cascade County",
            "value": 7.043426945
        }, {
            "fips_code": 30015,
            "state": "MT",
            "area_name": "Chouteau County",
            "value": 7.922964408
        }, {
            "fips_code": 30017,
            "state": "MT",
            "area_name": "Custer County",
            "value": 5.924973706
        }, {
            "fips_code": 30019,
            "state": "MT",
            "area_name": "Daniels County",
            "value": 7.071483474
        }, {
            "fips_code": 30021,
            "state": "MT",
            "area_name": "Dawson County",
            "value": 5.016057501
        }, {
            "fips_code": 30023,
            "state": "MT",
            "area_name": "Deer Lodge County",
            "value": 9.281842817999999
        }, {
            "fips_code": 30025,
            "state": "MT",
            "area_name": "Fallon County",
            "value": 4.514889529
        }, {
            "fips_code": 30027,
            "state": "MT",
            "area_name": "Fergus County",
            "value": 4.679802956
        }, {
            "fips_code": 30029,
            "state": "MT",
            "area_name": "Flathead County",
            "value": 5.055380069
        }, {
            "fips_code": 30031,
            "state": "MT",
            "area_name": "Gallatin County",
            "value": 2.553729456
        }, {
            "fips_code": 30033,
            "state": "MT",
            "area_name": "Garfield County",
            "value": 2.388059701
        }, {
            "fips_code": 30035,
            "state": "MT",
            "area_name": "Glacier County",
            "value": 11.44042679
        }, {
            "fips_code": 30037,
            "state": "MT",
            "area_name": "Golden Valley County",
            "value": 8.439490446000001
        }, {
            "fips_code": 30039,
            "state": "MT",
            "area_name": "Granite County",
            "value": 9.047044632
        }, {
            "fips_code": 30041,
            "state": "MT",
            "area_name": "Hill County",
            "value": 8.838083927
        }, {
            "fips_code": 30043,
            "state": "MT",
            "area_name": "Jefferson County",
            "value": 5.474452555
        }, {
            "fips_code": 30045,
            "state": "MT",
            "area_name": "Judith Basin County",
            "value": 5.063291139
        }, {
            "fips_code": 30047,
            "state": "MT",
            "area_name": "Lake County",
            "value": 7.671130605
        }, {
            "fips_code": 30049,
            "state": "MT",
            "area_name": "Lewis and Clark County",
            "value": 4.367305752
        }, {
            "fips_code": 30051,
            "state": "MT",
            "area_name": "Liberty County",
            "value": 27.37588652
        }, {
            "fips_code": 30053,
            "state": "MT",
            "area_name": "Lincoln County",
            "value": 8.489322436
        }, {
            "fips_code": 30055,
            "state": "MT",
            "area_name": "McCone County",
            "value": 3.934669636
        }, {
            "fips_code": 30057,
            "state": "MT",
            "area_name": "Madison County",
            "value": 3.604271729
        }, {
            "fips_code": 30059,
            "state": "MT",
            "area_name": "Meagher County",
            "value": 3.644008409
        }, {
            "fips_code": 30061,
            "state": "MT",
            "area_name": "Mineral County",
            "value": 7.45396083
        }, {
            "fips_code": 30063,
            "state": "MT",
            "area_name": "Missoula County",
            "value": 3.655587988
        }, {
            "fips_code": 30065,
            "state": "MT",
            "area_name": "Musselshell County",
            "value": 8.63823934
        }, {
            "fips_code": 30067,
            "state": "MT",
            "area_name": "Park County",
            "value": 3.423777492
        }, {
            "fips_code": 30069,
            "state": "MT",
            "area_name": "Petroleum County",
            "value": 0.602409639
        }, {
            "fips_code": 30071,
            "state": "MT",
            "area_name": "Phillips County",
            "value": 7.398805574
        }, {
            "fips_code": 30073,
            "state": "MT",
            "area_name": "Pondera County",
            "value": 8.652205703
        }, {
            "fips_code": 30075,
            "state": "MT",
            "area_name": "Powder River County",
            "value": 6.163328197
        }, {
            "fips_code": 30077,
            "state": "MT",
            "area_name": "Powell County",
            "value": 9.817309466999999
        }, {
            "fips_code": 30079,
            "state": "MT",
            "area_name": "Prairie County",
            "value": 13.04824561
        }, {
            "fips_code": 30081,
            "state": "MT",
            "area_name": "Ravalli County",
            "value": 7.396900927
        }, {
            "fips_code": 30083,
            "state": "MT",
            "area_name": "Richland County",
            "value": 4.6141607
        }, {
            "fips_code": 30085,
            "state": "MT",
            "area_name": "Roosevelt County",
            "value": 9.598715890999999
        }, {
            "fips_code": 30087,
            "state": "MT",
            "area_name": "Rosebud County",
            "value": 10.52631579
        }, {
            "fips_code": 30089,
            "state": "MT",
            "area_name": "Sanders County",
            "value": 8.969889065
        }, {
            "fips_code": 30091,
            "state": "MT",
            "area_name": "Sheridan County",
            "value": 7.398661944
        }, {
            "fips_code": 30093,
            "state": "MT",
            "area_name": "Silver Bow County",
            "value": 6.239103362
        }, {
            "fips_code": 30095,
            "state": "MT",
            "area_name": "Stillwater County",
            "value": 7.287134866
        }, {
            "fips_code": 30097,
            "state": "MT",
            "area_name": "Sweet Grass County",
            "value": 3.942790877
        }, {
            "fips_code": 30099,
            "state": "MT",
            "area_name": "Teton County",
            "value": 7.546717777
        }, {
            "fips_code": 30101,
            "state": "MT",
            "area_name": "Toole County",
            "value": 10.53811659
        }, {
            "fips_code": 30103,
            "state": "MT",
            "area_name": "Treasure County",
            "value": 8.925318761
        }, {
            "fips_code": 30105,
            "state": "MT",
            "area_name": "Valley County",
            "value": 7.004330635
        }, {
            "fips_code": 30107,
            "state": "MT",
            "area_name": "Wheatland County",
            "value": 9.453376206
        }, {
            "fips_code": 30109,
            "state": "MT",
            "area_name": "Wibaux County",
            "value": 7.361111111
        }, {
            "fips_code": 30111,
            "state": "MT",
            "area_name": "Yellowstone County",
            "value": 4.984017572
        }, {
            "fips_code": 31000,
            "state": "NE",
            "area_name": "Nebraska",
            "value": 8.280777690000001
        }, {
            "fips_code": 31001,
            "state": "NE",
            "area_name": "Adams County",
            "value": 8.427821136
        }, {
            "fips_code": 31003,
            "state": "NE",
            "area_name": "Antelope County",
            "value": 7.678075856
        }, {
            "fips_code": 31005,
            "state": "NE",
            "area_name": "Arthur County",
            "value": 4.375
        }, {
            "fips_code": 31007,
            "state": "NE",
            "area_name": "Banner County",
            "value": 7.249466951
        }, {
            "fips_code": 31009,
            "state": "NE",
            "area_name": "Blaine County",
            "value": 7.958477509
        }, {
            "fips_code": 31011,
            "state": "NE",
            "area_name": "Boone County",
            "value": 5.176093917
        }, {
            "fips_code": 31013,
            "state": "NE",
            "area_name": "Box Butte County",
            "value": 9.4695955
        }, {
            "fips_code": 31015,
            "state": "NE",
            "area_name": "Boyd County",
            "value": 4.926470588
        }, {
            "fips_code": 31017,
            "state": "NE",
            "area_name": "Brown County",
            "value": 6.256109482
        }, {
            "fips_code": 31019,
            "state": "NE",
            "area_name": "Buffalo County",
            "value": 7.703544994
        }, {
            "fips_code": 31021,
            "state": "NE",
            "area_name": "Burt County",
            "value": 8.938428875
        }, {
            "fips_code": 31023,
            "state": "NE",
            "area_name": "Butler County",
            "value": 6.254355401
        }, {
            "fips_code": 31025,
            "state": "NE",
            "area_name": "Cass County",
            "value": 5.687801667
        }, {
            "fips_code": 31027,
            "state": "NE",
            "area_name": "Cedar County",
            "value": 5.711743772
        }, {
            "fips_code": 31029,
            "state": "NE",
            "area_name": "Chase County",
            "value": 12.10116732
        }, {
            "fips_code": 31031,
            "state": "NE",
            "area_name": "Cherry County",
            "value": 2.733245729
        }, {
            "fips_code": 31033,
            "state": "NE",
            "area_name": "Cheyenne County",
            "value": 6.256564141
        }, {
            "fips_code": 31035,
            "state": "NE",
            "area_name": "Clay County",
            "value": 7.028448482
        }, {
            "fips_code": 31037,
            "state": "NE",
            "area_name": "Colfax County",
            "value": 26.5690054
        }, {
            "fips_code": 31039,
            "state": "NE",
            "area_name": "Cuming County",
            "value": 10.62550772
        }, {
            "fips_code": 31041,
            "state": "NE",
            "area_name": "Custer County",
            "value": 5.574485485
        }, {
            "fips_code": 31043,
            "state": "NE",
            "area_name": "Dakota County",
            "value": 22.06678003
        }, {
            "fips_code": 31045,
            "state": "NE",
            "area_name": "Dawes County",
            "value": 5.086410055
        }, {
            "fips_code": 31047,
            "state": "NE",
            "area_name": "Dawson County",
            "value": 22.27652733
        }, {
            "fips_code": 31049,
            "state": "NE",
            "area_name": "Deuel County",
            "value": 9.541150764999999
        }, {
            "fips_code": 31051,
            "state": "NE",
            "area_name": "Dixon County",
            "value": 15.58201058
        }, {
            "fips_code": 31053,
            "state": "NE",
            "area_name": "Dodge County",
            "value": 10.76021027
        }, {
            "fips_code": 31055,
            "state": "NE",
            "area_name": "Douglas County",
            "value": 8.805695887000001
        }, {
            "fips_code": 31057,
            "state": "NE",
            "area_name": "Dundy County",
            "value": 9.418070444
        }, {
            "fips_code": 31059,
            "state": "NE",
            "area_name": "Fillmore County",
            "value": 5.625153525
        }, {
            "fips_code": 31061,
            "state": "NE",
            "area_name": "Franklin County",
            "value": 7.703016241
        }, {
            "fips_code": 31063,
            "state": "NE",
            "area_name": "Frontier County",
            "value": 5.799648506
        }, {
            "fips_code": 31065,
            "state": "NE",
            "area_name": "Furnas County",
            "value": 9.586122946
        }, {
            "fips_code": 31067,
            "state": "NE",
            "area_name": "Gage County",
            "value": 9.102285451
        }, {
            "fips_code": 31069,
            "state": "NE",
            "area_name": "Garden County",
            "value": 6.174698795
        }, {
            "fips_code": 31071,
            "state": "NE",
            "area_name": "Garfield County",
            "value": 3.258508327
        }, {
            "fips_code": 31073,
            "state": "NE",
            "area_name": "Gosper County",
            "value": 6.002824859
        }, {
            "fips_code": 31075,
            "state": "NE",
            "area_name": "Grant County",
            "value": 7.066381156
        }, {
            "fips_code": 31077,
            "state": "NE",
            "area_name": "Greeley County",
            "value": 8.26873385
        }, {
            "fips_code": 31079,
            "state": "NE",
            "area_name": "Hall County",
            "value": 15.09982844
        }, {
            "fips_code": 31081,
            "state": "NE",
            "area_name": "Hamilton County",
            "value": 3.294483294
        }, {
            "fips_code": 31083,
            "state": "NE",
            "area_name": "Harlan County",
            "value": 7.142857143
        }, {
            "fips_code": 31085,
            "state": "NE",
            "area_name": "Hayes County",
            "value": 6.5830721
        }, {
            "fips_code": 31087,
            "state": "NE",
            "area_name": "Hitchcock County",
            "value": 5.013623978
        }, {
            "fips_code": 31089,
            "state": "NE",
            "area_name": "Holt County",
            "value": 6.398616515
        }, {
            "fips_code": 31091,
            "state": "NE",
            "area_name": "Hooker County",
            "value": 7.188160677
        }, {
            "fips_code": 31093,
            "state": "NE",
            "area_name": "Howard County",
            "value": 4.689252861
        }, {
            "fips_code": 31095,
            "state": "NE",
            "area_name": "Jefferson County",
            "value": 8.314132104
        }, {
            "fips_code": 31097,
            "state": "NE",
            "area_name": "Johnson County",
            "value": 11.51818661
        }, {
            "fips_code": 31099,
            "state": "NE",
            "area_name": "Kearney County",
            "value": 5.177847816
        }, {
            "fips_code": 31101,
            "state": "NE",
            "area_name": "Keith County",
            "value": 10.39473684
        }, {
            "fips_code": 31103,
            "state": "NE",
            "area_name": "Keya Paha County",
            "value": 4.692556634
        }, {
            "fips_code": 31105,
            "state": "NE",
            "area_name": "Kimball County",
            "value": 12.06088993
        }, {
            "fips_code": 31107,
            "state": "NE",
            "area_name": "Knox County",
            "value": 7.620204826
        }, {
            "fips_code": 31109,
            "state": "NE",
            "area_name": "Lancaster County",
            "value": 6.67067398
        }, {
            "fips_code": 31111,
            "state": "NE",
            "area_name": "Lincoln County",
            "value": 6.090762687
        }, {
            "fips_code": 31113,
            "state": "NE",
            "area_name": "Logan County",
            "value": 4.07079646
        }, {
            "fips_code": 31115,
            "state": "NE",
            "area_name": "Loup County",
            "value": 1.677148847
        }, {
            "fips_code": 31117,
            "state": "NE",
            "area_name": "McPherson County",
            "value": 6.970509383
        }, {
            "fips_code": 31119,
            "state": "NE",
            "area_name": "Madison County",
            "value": 7.907600467
        }, {
            "fips_code": 31121,
            "state": "NE",
            "area_name": "Merrick County",
            "value": 6.847045831
        }, {
            "fips_code": 31123,
            "state": "NE",
            "area_name": "Morrill County",
            "value": 9.369024856999999
        }, {
            "fips_code": 31125,
            "state": "NE",
            "area_name": "Nance County",
            "value": 6.946209233
        }, {
            "fips_code": 31127,
            "state": "NE",
            "area_name": "Nemaha County",
            "value": 9.152468326999999
        }, {
            "fips_code": 31129,
            "state": "NE",
            "area_name": "Nuckolls County",
            "value": 7.863304579
        }, {
            "fips_code": 31131,
            "state": "NE",
            "area_name": "Otoe County",
            "value": 7.017382507
        }, {
            "fips_code": 31133,
            "state": "NE",
            "area_name": "Pawnee County",
            "value": 14.77398015
        }, {
            "fips_code": 31135,
            "state": "NE",
            "area_name": "Perkins County",
            "value": 10.53435115
        }, {
            "fips_code": 31137,
            "state": "NE",
            "area_name": "Phelps County",
            "value": 7.950673373
        }, {
            "fips_code": 31139,
            "state": "NE",
            "area_name": "Pierce County",
            "value": 5.620036652
        }, {
            "fips_code": 31141,
            "state": "NE",
            "area_name": "Platte County",
            "value": 11.43377292
        }, {
            "fips_code": 31143,
            "state": "NE",
            "area_name": "Polk County",
            "value": 8.718516468000001
        }, {
            "fips_code": 31145,
            "state": "NE",
            "area_name": "Red Willow County",
            "value": 7.335640138
        }, {
            "fips_code": 31147,
            "state": "NE",
            "area_name": "Richardson County",
            "value": 6.436338127
        }, {
            "fips_code": 31149,
            "state": "NE",
            "area_name": "Rock County",
            "value": 4.094827586
        }, {
            "fips_code": 31151,
            "state": "NE",
            "area_name": "Saline County",
            "value": 19.80654595
        }, {
            "fips_code": 31153,
            "state": "NE",
            "area_name": "Sarpy County",
            "value": 4.486221951
        }, {
            "fips_code": 31155,
            "state": "NE",
            "area_name": "Saunders County",
            "value": 5.321922845
        }, {
            "fips_code": 31157,
            "state": "NE",
            "area_name": "Scotts Bluff County",
            "value": 10.64233818
        }, {
            "fips_code": 31159,
            "state": "NE",
            "area_name": "Seward County",
            "value": 5.627431467
        }, {
            "fips_code": 31161,
            "state": "NE",
            "area_name": "Sheridan County",
            "value": 10.1379893
        }, {
            "fips_code": 31163,
            "state": "NE",
            "area_name": "Sherman County",
            "value": 8.371665133
        }, {
            "fips_code": 31165,
            "state": "NE",
            "area_name": "Sioux County",
            "value": 5.22875817
        }, {
            "fips_code": 31167,
            "state": "NE",
            "area_name": "Stanton County",
            "value": 5.208067399
        }, {
            "fips_code": 31169,
            "state": "NE",
            "area_name": "Thayer County",
            "value": 6.475433116
        }, {
            "fips_code": 31171,
            "state": "NE",
            "area_name": "Thomas County",
            "value": 7.640449438
        }, {
            "fips_code": 31173,
            "state": "NE",
            "area_name": "Thurston County",
            "value": 9.466484268
        }, {
            "fips_code": 31175,
            "state": "NE",
            "area_name": "Valley County",
            "value": 6.107406107
        }, {
            "fips_code": 31177,
            "state": "NE",
            "area_name": "Washington County",
            "value": 4.380803856
        }, {
            "fips_code": 31179,
            "state": "NE",
            "area_name": "Wayne County",
            "value": 3.81511372
        }, {
            "fips_code": 31181,
            "state": "NE",
            "area_name": "Webster County",
            "value": 5.654147751
        }, {
            "fips_code": 31183,
            "state": "NE",
            "area_name": "Wheeler County",
            "value": 5.033557047
        }, {
            "fips_code": 31185,
            "state": "NE",
            "area_name": "York County",
            "value": 5.686807443
        }, {
            "fips_code": 32000,
            "state": "NV",
            "area_name": "Nevada",
            "value": 12.9804726
        }, {
            "fips_code": 32001,
            "state": "NV",
            "area_name": "Churchill County",
            "value": 6.456341993
        }, {
            "fips_code": 32003,
            "state": "NV",
            "area_name": "Clark County",
            "value": 13.62216164
        }, {
            "fips_code": 32005,
            "state": "NV",
            "area_name": "Douglas County",
            "value": 5.757085443
        }, {
            "fips_code": 32007,
            "state": "NV",
            "area_name": "Elko County",
            "value": 11.05408148
        }, {
            "fips_code": 32009,
            "state": "NV",
            "area_name": "Esmeralda County",
            "value": 19.79405034
        }, {
            "fips_code": 32011,
            "state": "NV",
            "area_name": "Eureka County",
            "value": 4.940711462
        }, {
            "fips_code": 32013,
            "state": "NV",
            "area_name": "Humboldt County",
            "value": 14.00070935
        }, {
            "fips_code": 32015,
            "state": "NV",
            "area_name": "Lander County",
            "value": 11.86528497
        }, {
            "fips_code": 32017,
            "state": "NV",
            "area_name": "Lincoln County",
            "value": 13.18222487
        }, {
            "fips_code": 32019,
            "state": "NV",
            "area_name": "Lyon County",
            "value": 13.40139787
        }, {
            "fips_code": 32021,
            "state": "NV",
            "area_name": "Mineral County",
            "value": 11.22635754
        }, {
            "fips_code": 32023,
            "state": "NV",
            "area_name": "Nye County",
            "value": 13.5474932
        }, {
            "fips_code": 32027,
            "state": "NV",
            "area_name": "Pershing County",
            "value": 15.89884336
        }, {
            "fips_code": 32029,
            "state": "NV",
            "area_name": "Storey County",
            "value": 6.048652202
        }, {
            "fips_code": 32031,
            "state": "NV",
            "area_name": "Washoe County",
            "value": 11.4533594
        }, {
            "fips_code": 32033,
            "state": "NV",
            "area_name": "White Pine County",
            "value": 9.538904899
        }, {
            "fips_code": 32510,
            "state": "NV",
            "area_name": "Carson City",
            "value": 12.31514106
        }, {
            "fips_code": 33000,
            "state": "NH",
            "area_name": "New Hampshire",
            "value": 6.369396393
        }, {
            "fips_code": 33001,
            "state": "NH",
            "area_name": "Belknap County",
            "value": 6.450592552
        }, {
            "fips_code": 33003,
            "state": "NH",
            "area_name": "Carroll County",
            "value": 4.906756344
        }, {
            "fips_code": 33005,
            "state": "NH",
            "area_name": "Cheshire County",
            "value": 6.306523351
        }, {
            "fips_code": 33007,
            "state": "NH",
            "area_name": "Coos County",
            "value": 10.82925626
        }, {
            "fips_code": 33009,
            "state": "NH",
            "area_name": "Grafton County",
            "value": 7.007893592
        }, {
            "fips_code": 33011,
            "state": "NH",
            "area_name": "Hillsborough County",
            "value": 7.092061051
        }, {
            "fips_code": 33013,
            "state": "NH",
            "area_name": "Merrimack County",
            "value": 6.799209839
        }, {
            "fips_code": 33015,
            "state": "NH",
            "area_name": "Rockingham County",
            "value": 4.478061296
        }, {
            "fips_code": 33017,
            "state": "NH",
            "area_name": "Strafford County",
            "value": 6.16629432
        }, {
            "fips_code": 33019,
            "state": "NH",
            "area_name": "Sullivan County",
            "value": 9.313998885
        }, {
            "fips_code": 34000,
            "state": "NJ",
            "area_name": "New Jersey",
            "value": 9.496481849
        }, {
            "fips_code": 34001,
            "state": "NJ",
            "area_name": "Atlantic County",
            "value": 12.200708
        }, {
            "fips_code": 34003,
            "state": "NJ",
            "area_name": "Bergen County",
            "value": 7.1022875
        }, {
            "fips_code": 34005,
            "state": "NJ",
            "area_name": "Burlington County",
            "value": 6.036378357
        }, {
            "fips_code": 34007,
            "state": "NJ",
            "area_name": "Camden County",
            "value": 10.8164315
        }, {
            "fips_code": 34009,
            "state": "NJ",
            "area_name": "Cape May County",
            "value": 5.953423705
        }, {
            "fips_code": 34011,
            "state": "NJ",
            "area_name": "Cumberland County",
            "value": 19.22118588
        }, {
            "fips_code": 34013,
            "state": "NJ",
            "area_name": "Essex County",
            "value": 13.33648748
        }, {
            "fips_code": 34015,
            "state": "NJ",
            "area_name": "Gloucester County",
            "value": 6.327289789
        }, {
            "fips_code": 34017,
            "state": "NJ",
            "area_name": "Hudson County",
            "value": 13.21815716
        }, {
            "fips_code": 34019,
            "state": "NJ",
            "area_name": "Hunterdon County",
            "value": 4.310846646
        }, {
            "fips_code": 34021,
            "state": "NJ",
            "area_name": "Mercer County",
            "value": 10.44109372
        }, {
            "fips_code": 34023,
            "state": "NJ",
            "area_name": "Middlesex County",
            "value": 10.07716834
        }, {
            "fips_code": 34025,
            "state": "NJ",
            "area_name": "Monmouth County",
            "value": 5.881430502
        }, {
            "fips_code": 34027,
            "state": "NJ",
            "area_name": "Morris County",
            "value": 5.446090684
        }, {
            "fips_code": 34029,
            "state": "NJ",
            "area_name": "Ocean County",
            "value": 7.166791244
        }, {
            "fips_code": 34031,
            "state": "NJ",
            "area_name": "Passaic County",
            "value": 14.97773311
        }, {
            "fips_code": 34033,
            "state": "NJ",
            "area_name": "Salem County",
            "value": 9.523599762
        }, {
            "fips_code": 34035,
            "state": "NJ",
            "area_name": "Somerset County",
            "value": 5.653969901
        }, {
            "fips_code": 34037,
            "state": "NJ",
            "area_name": "Sussex County",
            "value": 4.635248918
        }, {
            "fips_code": 34039,
            "state": "NJ",
            "area_name": "Union County",
            "value": 12.73444984
        }, {
            "fips_code": 34041,
            "state": "NJ",
            "area_name": "Warren County",
            "value": 6.804650926
        }, {
            "fips_code": 35000,
            "state": "NM",
            "area_name": "New Mexico",
            "value": 13.22794344
        }, {
            "fips_code": 35001,
            "state": "NM",
            "area_name": "Bernalillo County",
            "value": 9.713680244000001
        }, {
            "fips_code": 35003,
            "state": "NM",
            "area_name": "Catron County",
            "value": 5.157103825
        }, {
            "fips_code": 35005,
            "state": "NM",
            "area_name": "Chaves County",
            "value": 20.11041767
        }, {
            "fips_code": 35006,
            "state": "NM",
            "area_name": "Cibola County",
            "value": 18.18429069
        }, {
            "fips_code": 35007,
            "state": "NM",
            "area_name": "Colfax County",
            "value": 10.35306898
        }, {
            "fips_code": 35009,
            "state": "NM",
            "area_name": "Curry County",
            "value": 19.2654424
        }, {
            "fips_code": 35011,
            "state": "NM",
            "area_name": "De Baca County",
            "value": 19.12350598
        }, {
            "fips_code": 35013,
            "state": "NM",
            "area_name": "Dona Ana County",
            "value": 19.25569491
        }, {
            "fips_code": 35015,
            "state": "NM",
            "area_name": "Eddy County",
            "value": 16.97065016
        }, {
            "fips_code": 35017,
            "state": "NM",
            "area_name": "Grant County",
            "value": 12.79138389
        }, {
            "fips_code": 35019,
            "state": "NM",
            "area_name": "Guadalupe County",
            "value": 16.30057803
        }, {
            "fips_code": 35021,
            "state": "NM",
            "area_name": "Harding County",
            "value": 13.39950372
        }, {
            "fips_code": 35023,
            "state": "NM",
            "area_name": "Hidalgo County",
            "value": 16.78583589
        }, {
            "fips_code": 35025,
            "state": "NM",
            "area_name": "Lea County",
            "value": 23.76541076
        }, {
            "fips_code": 35027,
            "state": "NM",
            "area_name": "Lincoln County",
            "value": 9.883531785000001
        }, {
            "fips_code": 35028,
            "state": "NM",
            "area_name": "Los Alamos County",
            "value": 1.81938229
        }, {
            "fips_code": 35029,
            "state": "NM",
            "area_name": "Luna County",
            "value": 29.20310383
        }, {
            "fips_code": 35031,
            "state": "NM",
            "area_name": "McKinley County",
            "value": 20.87805736
        }, {
            "fips_code": 35033,
            "state": "NM",
            "area_name": "Mora County",
            "value": 8.124816014
        }, {
            "fips_code": 35035,
            "state": "NM",
            "area_name": "Otero County",
            "value": 13.67068309
        }, {
            "fips_code": 35037,
            "state": "NM",
            "area_name": "Quay County",
            "value": 15.77072539
        }, {
            "fips_code": 35039,
            "state": "NM",
            "area_name": "Rio Arriba County",
            "value": 13.72541932
        }, {
            "fips_code": 35041,
            "state": "NM",
            "area_name": "Roosevelt County",
            "value": 16.94839858
        }, {
            "fips_code": 35043,
            "state": "NM",
            "area_name": "Sandoval County",
            "value": 8.620588235
        }, {
            "fips_code": 35045,
            "state": "NM",
            "area_name": "San Juan County",
            "value": 14.14941179
        }, {
            "fips_code": 35047,
            "state": "NM",
            "area_name": "San Miguel County",
            "value": 15.28192162
        }, {
            "fips_code": 35049,
            "state": "NM",
            "area_name": "Santa Fe County",
            "value": 9.913516142000001
        }, {
            "fips_code": 35051,
            "state": "NM",
            "area_name": "Sierra County",
            "value": 10.47452438
        }, {
            "fips_code": 35053,
            "state": "NM",
            "area_name": "Socorro County",
            "value": 16.13707741
        }, {
            "fips_code": 35055,
            "state": "NM",
            "area_name": "Taos County",
            "value": 7.893015201
        }, {
            "fips_code": 35057,
            "state": "NM",
            "area_name": "Torrance County",
            "value": 12.64323544
        }, {
            "fips_code": 35059,
            "state": "NM",
            "area_name": "Union County",
            "value": 15.65307533
        }, {
            "fips_code": 35061,
            "state": "NM",
            "area_name": "Valencia County",
            "value": 15.21908017
        }, {
            "fips_code": 36000,
            "state": "NY",
            "area_name": "New York",
            "value": 12.56762265
        }, {
            "fips_code": 36001,
            "state": "NY",
            "area_name": "Albany County",
            "value": 7.184548747
        }, {
            "fips_code": 36003,
            "state": "NY",
            "area_name": "Allegany County",
            "value": 9.000966054999999
        }, {
            "fips_code": 36005,
            "state": "NY",
            "area_name": "Bronx County",
            "value": 25.8710362
        }, {
            "fips_code": 36007,
            "state": "NY",
            "area_name": "Broome County",
            "value": 9.423849255
        }, {
            "fips_code": 36009,
            "state": "NY",
            "area_name": "Cattaraugus County",
            "value": 10.39918541
        }, {
            "fips_code": 36011,
            "state": "NY",
            "area_name": "Cayuga County",
            "value": 11.92401696
        }, {
            "fips_code": 36013,
            "state": "NY",
            "area_name": "Chautauqua County",
            "value": 10.67475901
        }, {
            "fips_code": 36015,
            "state": "NY",
            "area_name": "Chemung County",
            "value": 10.54317923
        }, {
            "fips_code": 36017,
            "state": "NY",
            "area_name": "Chenango County",
            "value": 11.20061148
        }, {
            "fips_code": 36019,
            "state": "NY",
            "area_name": "Clinton County",
            "value": 12.45445812
        }, {
            "fips_code": 36021,
            "state": "NY",
            "area_name": "Columbia County",
            "value": 8.779088301
        }, {
            "fips_code": 36023,
            "state": "NY",
            "area_name": "Cortland County",
            "value": 9.929438904
        }, {
            "fips_code": 36025,
            "state": "NY",
            "area_name": "Delaware County",
            "value": 9.943345351
        }, {
            "fips_code": 36027,
            "state": "NY",
            "area_name": "Dutchess County",
            "value": 8.471607361
        }, {
            "fips_code": 36029,
            "state": "NY",
            "area_name": "Erie County",
            "value": 7.903184645
        }, {
            "fips_code": 36031,
            "state": "NY",
            "area_name": "Essex County",
            "value": 8.853716694999999
        }, {
            "fips_code": 36033,
            "state": "NY",
            "area_name": "Franklin County",
            "value": 11.85832969
        }, {
            "fips_code": 36035,
            "state": "NY",
            "area_name": "Fulton County",
            "value": 12.68770122
        }, {
            "fips_code": 36037,
            "state": "NY",
            "area_name": "Genesee County",
            "value": 7.401386565
        }, {
            "fips_code": 36039,
            "state": "NY",
            "area_name": "Greene County",
            "value": 12.06677001
        }, {
            "fips_code": 36041,
            "state": "NY",
            "area_name": "Hamilton County",
            "value": 20.30112923
        }, {
            "fips_code": 36043,
            "state": "NY",
            "area_name": "Herkimer County",
            "value": 9.133396889
        }, {
            "fips_code": 36045,
            "state": "NY",
            "area_name": "Jefferson County",
            "value": 8.829269597
        }, {
            "fips_code": 36047,
            "state": "NY",
            "area_name": "Kings County",
            "value": 16.30432698
        }, {
            "fips_code": 36049,
            "state": "NY",
            "area_name": "Lewis County",
            "value": 8.862055954000001
        }, {
            "fips_code": 36051,
            "state": "NY",
            "area_name": "Livingston County",
            "value": 8.138068843999999
        }, {
            "fips_code": 36053,
            "state": "NY",
            "area_name": "Madison County",
            "value": 7.243075998
        }, {
            "fips_code": 36055,
            "state": "NY",
            "area_name": "Monroe County",
            "value": 8.907209275
        }, {
            "fips_code": 36057,
            "state": "NY",
            "area_name": "Montgomery County",
            "value": 11.34505315
        }, {
            "fips_code": 36059,
            "state": "NY",
            "area_name": "Nassau County",
            "value": 8.297057987000001
        }, {
            "fips_code": 36061,
            "state": "NY",
            "area_name": "New York County",
            "value": 11.61625074
        }, {
            "fips_code": 36063,
            "state": "NY",
            "area_name": "Niagara County",
            "value": 8.372577401999999
        }, {
            "fips_code": 36065,
            "state": "NY",
            "area_name": "Oneida County",
            "value": 11.1849522
        }, {
            "fips_code": 36067,
            "state": "NY",
            "area_name": "Onondaga County",
            "value": 8.683475112
        }, {
            "fips_code": 36069,
            "state": "NY",
            "area_name": "Ontario County",
            "value": 6.734624618
        }, {
            "fips_code": 36071,
            "state": "NY",
            "area_name": "Orange County",
            "value": 10.0838488
        }, {
            "fips_code": 36073,
            "state": "NY",
            "area_name": "Orleans County",
            "value": 13.01245372
        }, {
            "fips_code": 36075,
            "state": "NY",
            "area_name": "Oswego County",
            "value": 10.27376804
        }, {
            "fips_code": 36077,
            "state": "NY",
            "area_name": "Otsego County",
            "value": 7.168774883
        }, {
            "fips_code": 36079,
            "state": "NY",
            "area_name": "Putnam County",
            "value": 6.666005075
        }, {
            "fips_code": 36081,
            "state": "NY",
            "area_name": "Queens County",
            "value": 17.2982753
        }, {
            "fips_code": 36083,
            "state": "NY",
            "area_name": "Rensselaer County",
            "value": 7.715919085
        }, {
            "fips_code": 36085,
            "state": "NY",
            "area_name": "Richmond County",
            "value": 11.39931879
        }, {
            "fips_code": 36087,
            "state": "NY",
            "area_name": "Rockland County",
            "value": 11.14410731
        }, {
            "fips_code": 36089,
            "state": "NY",
            "area_name": "St. Lawrence County",
            "value": 11.39764627
        }, {
            "fips_code": 36091,
            "state": "NY",
            "area_name": "Saratoga County",
            "value": 6.28892943
        }, {
            "fips_code": 36093,
            "state": "NY",
            "area_name": "Schenectady County",
            "value": 8.669461889000001
        }, {
            "fips_code": 36095,
            "state": "NY",
            "area_name": "Schoharie County",
            "value": 9.374709221
        }, {
            "fips_code": 36097,
            "state": "NY",
            "area_name": "Schuyler County",
            "value": 9.175691937
        }, {
            "fips_code": 36099,
            "state": "NY",
            "area_name": "Seneca County",
            "value": 15.25278492
        }, {
            "fips_code": 36101,
            "state": "NY",
            "area_name": "Steuben County",
            "value": 8.475363186999999
        }, {
            "fips_code": 36103,
            "state": "NY",
            "area_name": "Suffolk County",
            "value": 9.607497875
        }, {
            "fips_code": 36105,
            "state": "NY",
            "area_name": "Sullivan County",
            "value": 13.37394259
        }, {
            "fips_code": 36107,
            "state": "NY",
            "area_name": "Tioga County",
            "value": 7.302820956
        }, {
            "fips_code": 36109,
            "state": "NY",
            "area_name": "Tompkins County",
            "value": 5.044410118
        }, {
            "fips_code": 36111,
            "state": "NY",
            "area_name": "Ulster County",
            "value": 8.581555501
        }, {
            "fips_code": 36113,
            "state": "NY",
            "area_name": "Warren County",
            "value": 8.487024976000001
        }, {
            "fips_code": 36115,
            "state": "NY",
            "area_name": "Washington County",
            "value": 11.32493792
        }, {
            "fips_code": 36117,
            "state": "NY",
            "area_name": "Wayne County",
            "value": 9.663076923
        }, {
            "fips_code": 36119,
            "state": "NY",
            "area_name": "Westchester County",
            "value": 11.14831093
        }, {
            "fips_code": 36121,
            "state": "NY",
            "area_name": "Wyoming County",
            "value": 11.59302797
        }, {
            "fips_code": 36123,
            "state": "NY",
            "area_name": "Yates County",
            "value": 13.81268882
        }, {
            "fips_code": 37000,
            "state": "NC",
            "area_name": "North Carolina",
            "value": 10.9625913
        }, {
            "fips_code": 37001,
            "state": "NC",
            "area_name": "Alamance County",
            "value": 12.28700499
        }, {
            "fips_code": 37003,
            "state": "NC",
            "area_name": "Alexander County",
            "value": 14.97593767
        }, {
            "fips_code": 37005,
            "state": "NC",
            "area_name": "Alleghany County",
            "value": 20.54157223
        }, {
            "fips_code": 37007,
            "state": "NC",
            "area_name": "Anson County",
            "value": 17.52171468
        }, {
            "fips_code": 37009,
            "state": "NC",
            "area_name": "Ashe County",
            "value": 12.97781276
        }, {
            "fips_code": 37011,
            "state": "NC",
            "area_name": "Avery County",
            "value": 13.88807286
        }, {
            "fips_code": 37013,
            "state": "NC",
            "area_name": "Beaufort County",
            "value": 12.31418609
        }, {
            "fips_code": 37015,
            "state": "NC",
            "area_name": "Bertie County",
            "value": 19.83751846
        }, {
            "fips_code": 37017,
            "state": "NC",
            "area_name": "Bladen County",
            "value": 15.01581101
        }, {
            "fips_code": 37019,
            "state": "NC",
            "area_name": "Brunswick County",
            "value": 7.207892882
        }, {
            "fips_code": 37021,
            "state": "NC",
            "area_name": "Buncombe County",
            "value": 8.134063384999999
        }, {
            "fips_code": 37023,
            "state": "NC",
            "area_name": "Burke County",
            "value": 16.6864016
        }, {
            "fips_code": 37025,
            "state": "NC",
            "area_name": "Cabarrus County",
            "value": 9.320959895
        }, {
            "fips_code": 37027,
            "state": "NC",
            "area_name": "Caldwell County",
            "value": 18.51635213
        }, {
            "fips_code": 37029,
            "state": "NC",
            "area_name": "Camden County",
            "value": 10.05415914
        }, {
            "fips_code": 37031,
            "state": "NC",
            "area_name": "Carteret County",
            "value": 7.920140837
        }, {
            "fips_code": 37033,
            "state": "NC",
            "area_name": "Caswell County",
            "value": 17.5284943
        }, {
            "fips_code": 37035,
            "state": "NC",
            "area_name": "Catawba County",
            "value": 13.50468425
        }, {
            "fips_code": 37037,
            "state": "NC",
            "area_name": "Chatham County",
            "value": 10.52574447
        }, {
            "fips_code": 37039,
            "state": "NC",
            "area_name": "Cherokee County",
            "value": 10.16057335
        }, {
            "fips_code": 37041,
            "state": "NC",
            "area_name": "Chowan County",
            "value": 15.4785762
        }, {
            "fips_code": 37043,
            "state": "NC",
            "area_name": "Clay County",
            "value": 11.15334363
        }, {
            "fips_code": 37045,
            "state": "NC",
            "area_name": "Cleveland County",
            "value": 13.65130131
        }, {
            "fips_code": 37047,
            "state": "NC",
            "area_name": "Columbus County",
            "value": 15.95522306
        }, {
            "fips_code": 37049,
            "state": "NC",
            "area_name": "Craven County",
            "value": 10.29856948
        }, {
            "fips_code": 37051,
            "state": "NC",
            "area_name": "Cumberland County",
            "value": 8.022421416
        }, {
            "fips_code": 37053,
            "state": "NC",
            "area_name": "Currituck County",
            "value": 7.737041719
        }, {
            "fips_code": 37055,
            "state": "NC",
            "area_name": "Dare County",
            "value": 4.706395032
        }, {
            "fips_code": 37057,
            "state": "NC",
            "area_name": "Davidson County",
            "value": 14.21276452
        }, {
            "fips_code": 37059,
            "state": "NC",
            "area_name": "Davie County",
            "value": 9.801464283
        }, {
            "fips_code": 37061,
            "state": "NC",
            "area_name": "Duplin County",
            "value": 20.32277169
        }, {
            "fips_code": 37063,
            "state": "NC",
            "area_name": "Durham County",
            "value": 10.06629685
        }, {
            "fips_code": 37065,
            "state": "NC",
            "area_name": "Edgecombe County",
            "value": 15.39574591
        }, {
            "fips_code": 37067,
            "state": "NC",
            "area_name": "Forsyth County",
            "value": 10.73154898
        }, {
            "fips_code": 37069,
            "state": "NC",
            "area_name": "Franklin County",
            "value": 13.49615213
        }, {
            "fips_code": 37071,
            "state": "NC",
            "area_name": "Gaston County",
            "value": 13.3027289
        }, {
            "fips_code": 37073,
            "state": "NC",
            "area_name": "Gates County",
            "value": 10.6490478
        }, {
            "fips_code": 37075,
            "state": "NC",
            "area_name": "Graham County",
            "value": 17.46086358
        }, {
            "fips_code": 37077,
            "state": "NC",
            "area_name": "Granville County",
            "value": 13.94190679
        }, {
            "fips_code": 37079,
            "state": "NC",
            "area_name": "Greene County",
            "value": 22.3770942
        }, {
            "fips_code": 37081,
            "state": "NC",
            "area_name": "Guilford County",
            "value": 9.811499637000001
        }, {
            "fips_code": 37083,
            "state": "NC",
            "area_name": "Halifax County",
            "value": 20.13514669
        }, {
            "fips_code": 37085,
            "state": "NC",
            "area_name": "Harnett County",
            "value": 11.55314354
        }, {
            "fips_code": 37087,
            "state": "NC",
            "area_name": "Haywood County",
            "value": 10.26928048
        }, {
            "fips_code": 37089,
            "state": "NC",
            "area_name": "Henderson County",
            "value": 8.368680897999999
        }, {
            "fips_code": 37091,
            "state": "NC",
            "area_name": "Hertford County",
            "value": 16.23056995
        }, {
            "fips_code": 37093,
            "state": "NC",
            "area_name": "Hoke County",
            "value": 12.26975639
        }, {
            "fips_code": 37095,
            "state": "NC",
            "area_name": "Hyde County",
            "value": 21.28247651
        }, {
            "fips_code": 37097,
            "state": "NC",
            "area_name": "Iredell County",
            "value": 8.91728756
        }, {
            "fips_code": 37099,
            "state": "NC",
            "area_name": "Jackson County",
            "value": 10.82221421
        }, {
            "fips_code": 37101,
            "state": "NC",
            "area_name": "Johnston County",
            "value": 11.2778755
        }, {
            "fips_code": 37103,
            "state": "NC",
            "area_name": "Jones County",
            "value": 16.60644602
        }, {
            "fips_code": 37105,
            "state": "NC",
            "area_name": "Lee County",
            "value": 14.39263775
        }, {
            "fips_code": 37107,
            "state": "NC",
            "area_name": "Lenoir County",
            "value": 18.98806583
        }, {
            "fips_code": 37109,
            "state": "NC",
            "area_name": "Lincoln County",
            "value": 11.10985057
        }, {
            "fips_code": 37111,
            "state": "NC",
            "area_name": "McDowell County",
            "value": 14.5997053
        }, {
            "fips_code": 37113,
            "state": "NC",
            "area_name": "Macon County",
            "value": 11.1547697
        }, {
            "fips_code": 37115,
            "state": "NC",
            "area_name": "Madison County",
            "value": 10.43020535
        }, {
            "fips_code": 37117,
            "state": "NC",
            "area_name": "Martin County",
            "value": 17.5
        }, {
            "fips_code": 37119,
            "state": "NC",
            "area_name": "Mecklenburg County",
            "value": 9.171039812
        }, {
            "fips_code": 37121,
            "state": "NC",
            "area_name": "Mitchell County",
            "value": 11.69228004
        }, {
            "fips_code": 37123,
            "state": "NC",
            "area_name": "Montgomery County",
            "value": 17.71773434
        }, {
            "fips_code": 37125,
            "state": "NC",
            "area_name": "Moore County",
            "value": 7.709129901
        }, {
            "fips_code": 37127,
            "state": "NC",
            "area_name": "Nash County",
            "value": 12.64012724
        }, {
            "fips_code": 37129,
            "state": "NC",
            "area_name": "New Hanover County",
            "value": 6.21247128
        }, {
            "fips_code": 37131,
            "state": "NC",
            "area_name": "Northampton County",
            "value": 19.05181918
        }, {
            "fips_code": 37133,
            "state": "NC",
            "area_name": "Onslow County",
            "value": 8.230047812
        }, {
            "fips_code": 37135,
            "state": "NC",
            "area_name": "Orange County",
            "value": 6.29062765
        }, {
            "fips_code": 37137,
            "state": "NC",
            "area_name": "Pamlico County",
            "value": 10.40575244
        }, {
            "fips_code": 37139,
            "state": "NC",
            "area_name": "Pasquotank County",
            "value": 10.76805863
        }, {
            "fips_code": 37141,
            "state": "NC",
            "area_name": "Pender County",
            "value": 10.63427098
        }, {
            "fips_code": 37143,
            "state": "NC",
            "area_name": "Perquimans County",
            "value": 13.71066612
        }, {
            "fips_code": 37145,
            "state": "NC",
            "area_name": "Person County",
            "value": 12.20098268
        }, {
            "fips_code": 37147,
            "state": "NC",
            "area_name": "Pitt County",
            "value": 10.0866153
        }, {
            "fips_code": 37149,
            "state": "NC",
            "area_name": "Polk County",
            "value": 7.347504621
        }, {
            "fips_code": 37151,
            "state": "NC",
            "area_name": "Randolph County",
            "value": 16.10332592
        }, {
            "fips_code": 37153,
            "state": "NC",
            "area_name": "Richmond County",
            "value": 17.32848304
        }, {
            "fips_code": 37155,
            "state": "NC",
            "area_name": "Robeson County",
            "value": 22.08999531
        }, {
            "fips_code": 37157,
            "state": "NC",
            "area_name": "Rockingham County",
            "value": 16.22628881
        }, {
            "fips_code": 37159,
            "state": "NC",
            "area_name": "Rowan County",
            "value": 13.12679972
        }, {
            "fips_code": 37161,
            "state": "NC",
            "area_name": "Rutherford County",
            "value": 14.48274383
        }, {
            "fips_code": 37163,
            "state": "NC",
            "area_name": "Sampson County",
            "value": 18.18546668
        }, {
            "fips_code": 37165,
            "state": "NC",
            "area_name": "Scotland County",
            "value": 18.66609109
        }, {
            "fips_code": 37167,
            "state": "NC",
            "area_name": "Stanly County",
            "value": 13.94879787
        }, {
            "fips_code": 37169,
            "state": "NC",
            "area_name": "Stokes County",
            "value": 13.68652076
        }, {
            "fips_code": 37171,
            "state": "NC",
            "area_name": "Surry County",
            "value": 18.98661606
        }, {
            "fips_code": 37173,
            "state": "NC",
            "area_name": "Swain County",
            "value": 14.94824017
        }, {
            "fips_code": 37175,
            "state": "NC",
            "area_name": "Transylvania County",
            "value": 8.018867925
        }, {
            "fips_code": 37177,
            "state": "NC",
            "area_name": "Tyrrell County",
            "value": 23.75899962
        }, {
            "fips_code": 37179,
            "state": "NC",
            "area_name": "Union County",
            "value": 9.877081970000001
        }, {
            "fips_code": 37181,
            "state": "NC",
            "area_name": "Vance County",
            "value": 15.56440443
        }, {
            "fips_code": 37183,
            "state": "NC",
            "area_name": "Wake County",
            "value": 6.338787435
        }, {
            "fips_code": 37185,
            "state": "NC",
            "area_name": "Warren County",
            "value": 14.27341845
        }, {
            "fips_code": 37187,
            "state": "NC",
            "area_name": "Washington County",
            "value": 16.45124859
        }, {
            "fips_code": 37189,
            "state": "NC",
            "area_name": "Watauga County",
            "value": 6.929099059
        }, {
            "fips_code": 37191,
            "state": "NC",
            "area_name": "Wayne County",
            "value": 14.16308464
        }, {
            "fips_code": 37193,
            "state": "NC",
            "area_name": "Wilkes County",
            "value": 18.8270639
        }, {
            "fips_code": 37195,
            "state": "NC",
            "area_name": "Wilson County",
            "value": 17.82862237
        }, {
            "fips_code": 37197,
            "state": "NC",
            "area_name": "Yadkin County",
            "value": 14.37945469
        }, {
            "fips_code": 37199,
            "state": "NC",
            "area_name": "Yancey County",
            "value": 12.03872189
        }, {
            "fips_code": 38000,
            "state": "ND",
            "area_name": "North Dakota",
            "value": 6.713872081
        }, {
            "fips_code": 38001,
            "state": "ND",
            "area_name": "Adams County",
            "value": 7.283090564
        }, {
            "fips_code": 38003,
            "state": "ND",
            "area_name": "Barnes County",
            "value": 5.174234424
        }, {
            "fips_code": 38005,
            "state": "ND",
            "area_name": "Benson County",
            "value": 13.3666275
        }, {
            "fips_code": 38007,
            "state": "ND",
            "area_name": "Billings County",
            "value": 5.833333333
        }, {
            "fips_code": 38009,
            "state": "ND",
            "area_name": "Bottineau County",
            "value": 6.738787469
        }, {
            "fips_code": 38011,
            "state": "ND",
            "area_name": "Bowman County",
            "value": 9.683604986000001
        }, {
            "fips_code": 38013,
            "state": "ND",
            "area_name": "Burke County",
            "value": 5.952380952
        }, {
            "fips_code": 38015,
            "state": "ND",
            "area_name": "Burleigh County",
            "value": 5.112921084
        }, {
            "fips_code": 38017,
            "state": "ND",
            "area_name": "Cass County",
            "value": 4.745546745
        }, {
            "fips_code": 38019,
            "state": "ND",
            "area_name": "Cavalier County",
            "value": 5.524025728
        }, {
            "fips_code": 38021,
            "state": "ND",
            "area_name": "Dickey County",
            "value": 7.772337821
        }, {
            "fips_code": 38023,
            "state": "ND",
            "area_name": "Divide County",
            "value": 7.270408163
        }, {
            "fips_code": 38025,
            "state": "ND",
            "area_name": "Dunn County",
            "value": 10.79876586
        }, {
            "fips_code": 38027,
            "state": "ND",
            "area_name": "Eddy County",
            "value": 10.37735849
        }, {
            "fips_code": 38029,
            "state": "ND",
            "area_name": "Emmons County",
            "value": 11.27728375
        }, {
            "fips_code": 38031,
            "state": "ND",
            "area_name": "Foster County",
            "value": 7.64091858
        }, {
            "fips_code": 38033,
            "state": "ND",
            "area_name": "Golden Valley County",
            "value": 5.94795539
        }, {
            "fips_code": 38035,
            "state": "ND",
            "area_name": "Grand Forks County",
            "value": 4.636934471
        }, {
            "fips_code": 38037,
            "state": "ND",
            "area_name": "Grant County",
            "value": 6.659012629
        }, {
            "fips_code": 38039,
            "state": "ND",
            "area_name": "Griggs County",
            "value": 7.594936709
        }, {
            "fips_code": 38041,
            "state": "ND",
            "area_name": "Hettinger County",
            "value": 11.3452188
        }, {
            "fips_code": 38043,
            "state": "ND",
            "area_name": "Kidder County",
            "value": 10.96892139
        }, {
            "fips_code": 38045,
            "state": "ND",
            "area_name": "LaMoure County",
            "value": 11.68256131
        }, {
            "fips_code": 38047,
            "state": "ND",
            "area_name": "Logan County",
            "value": 10.15683346
        }, {
            "fips_code": 38049,
            "state": "ND",
            "area_name": "McHenry County",
            "value": 7.832898172
        }, {
            "fips_code": 38051,
            "state": "ND",
            "area_name": "McIntosh County",
            "value": 15.36536537
        }, {
            "fips_code": 38053,
            "state": "ND",
            "area_name": "McKenzie County",
            "value": 6.72178289
        }, {
            "fips_code": 38055,
            "state": "ND",
            "area_name": "McLean County",
            "value": 7.648564117
        }, {
            "fips_code": 38057,
            "state": "ND",
            "area_name": "Mercer County",
            "value": 9.719878502
        }, {
            "fips_code": 38059,
            "state": "ND",
            "area_name": "Morton County",
            "value": 8.033705386999999
        }, {
            "fips_code": 38061,
            "state": "ND",
            "area_name": "Mountrail County",
            "value": 10.50138821
        }, {
            "fips_code": 38063,
            "state": "ND",
            "area_name": "Nelson County",
            "value": 6.699640288
        }, {
            "fips_code": 38065,
            "state": "ND",
            "area_name": "Oliver County",
            "value": 6.284367636
        }, {
            "fips_code": 38067,
            "state": "ND",
            "area_name": "Pembina County",
            "value": 9.438518817
        }, {
            "fips_code": 38069,
            "state": "ND",
            "area_name": "Pierce County",
            "value": 6.947368421
        }, {
            "fips_code": 38071,
            "state": "ND",
            "area_name": "Ramsey County",
            "value": 8.922452088
        }, {
            "fips_code": 38073,
            "state": "ND",
            "area_name": "Ransom County",
            "value": 7.474747475
        }, {
            "fips_code": 38075,
            "state": "ND",
            "area_name": "Renville County",
            "value": 6.422018349
        }, {
            "fips_code": 38077,
            "state": "ND",
            "area_name": "Richland County",
            "value": 7.496463932
        }, {
            "fips_code": 38079,
            "state": "ND",
            "area_name": "Rolette County",
            "value": 13.45053718
        }, {
            "fips_code": 38081,
            "state": "ND",
            "area_name": "Sargent County",
            "value": 6.132756133
        }, {
            "fips_code": 38083,
            "state": "ND",
            "area_name": "Sheridan County",
            "value": 12.60744986
        }, {
            "fips_code": 38085,
            "state": "ND",
            "area_name": "Sioux County",
            "value": 15.32985287
        }, {
            "fips_code": 38087,
            "state": "ND",
            "area_name": "Slope County",
            "value": 8.965517241000001
        }, {
            "fips_code": 38089,
            "state": "ND",
            "area_name": "Stark County",
            "value": 7.824065288
        }, {
            "fips_code": 38091,
            "state": "ND",
            "area_name": "Steele County",
            "value": 3.765060241
        }, {
            "fips_code": 38093,
            "state": "ND",
            "area_name": "Stutsman County",
            "value": 8.489872318
        }, {
            "fips_code": 38095,
            "state": "ND",
            "area_name": "Towner County",
            "value": 11.93111931
        }, {
            "fips_code": 38097,
            "state": "ND",
            "area_name": "Traill County",
            "value": 5.703282597
        }, {
            "fips_code": 38099,
            "state": "ND",
            "area_name": "Walsh County",
            "value": 12.86888559
        }, {
            "fips_code": 38101,
            "state": "ND",
            "area_name": "Ward County",
            "value": 6.197773173
        }, {
            "fips_code": 38103,
            "state": "ND",
            "area_name": "Wells County",
            "value": 8.539478143
        }, {
            "fips_code": 38105,
            "state": "ND",
            "area_name": "Williams County",
            "value": 8.763615199
        }, {
            "fips_code": 39000,
            "state": "OH",
            "area_name": "Ohio",
            "value": 8.861097675
        }, {
            "fips_code": 39001,
            "state": "OH",
            "area_name": "Adams County",
            "value": 16.32783395
        }, {
            "fips_code": 39003,
            "state": "OH",
            "area_name": "Allen County",
            "value": 8.852802514
        }, {
            "fips_code": 39005,
            "state": "OH",
            "area_name": "Ashland County",
            "value": 10.31590321
        }, {
            "fips_code": 39007,
            "state": "OH",
            "area_name": "Ashtabula County",
            "value": 13.60595661
        }, {
            "fips_code": 39009,
            "state": "OH",
            "area_name": "Athens County",
            "value": 9.083814143
        }, {
            "fips_code": 39011,
            "state": "OH",
            "area_name": "Auglaize County",
            "value": 6.320556158
        }, {
            "fips_code": 39013,
            "state": "OH",
            "area_name": "Belmont County",
            "value": 8.476603682
        }, {
            "fips_code": 39015,
            "state": "OH",
            "area_name": "Brown County",
            "value": 13.27764128
        }, {
            "fips_code": 39017,
            "state": "OH",
            "area_name": "Butler County",
            "value": 8.478621626000001
        }, {
            "fips_code": 39019,
            "state": "OH",
            "area_name": "Carroll County",
            "value": 10.27612903
        }, {
            "fips_code": 39021,
            "state": "OH",
            "area_name": "Champaign County",
            "value": 8.80873104
        }, {
            "fips_code": 39023,
            "state": "OH",
            "area_name": "Clark County",
            "value": 11.2584917
        }, {
            "fips_code": 39025,
            "state": "OH",
            "area_name": "Clermont County",
            "value": 9.455143782
        }, {
            "fips_code": 39027,
            "state": "OH",
            "area_name": "Clinton County",
            "value": 8.791441584999999
        }, {
            "fips_code": 39029,
            "state": "OH",
            "area_name": "Columbiana County",
            "value": 10.48861879
        }, {
            "fips_code": 39031,
            "state": "OH",
            "area_name": "Coshocton County",
            "value": 15.71530081
        }, {
            "fips_code": 39033,
            "state": "OH",
            "area_name": "Crawford County",
            "value": 9.965856462
        }, {
            "fips_code": 39035,
            "state": "OH",
            "area_name": "Cuyahoga County",
            "value": 9.283024202
        }, {
            "fips_code": 39037,
            "state": "OH",
            "area_name": "Darke County",
            "value": 8.731955845
        }, {
            "fips_code": 39039,
            "state": "OH",
            "area_name": "Defiance County",
            "value": 7.888186866
        }, {
            "fips_code": 39041,
            "state": "OH",
            "area_name": "Delaware County",
            "value": 2.791581514
        }, {
            "fips_code": 39043,
            "state": "OH",
            "area_name": "Erie County",
            "value": 8.098746426
        }, {
            "fips_code": 39045,
            "state": "OH",
            "area_name": "Fairfield County",
            "value": 6.450128646
        }, {
            "fips_code": 39047,
            "state": "OH",
            "area_name": "Fayette County",
            "value": 15.75415048
        }, {
            "fips_code": 39049,
            "state": "OH",
            "area_name": "Franklin County",
            "value": 8.539437609
        }, {
            "fips_code": 39051,
            "state": "OH",
            "area_name": "Fulton County",
            "value": 6.893838311
        }, {
            "fips_code": 39053,
            "state": "OH",
            "area_name": "Gallia County",
            "value": 14.91114862
        }, {
            "fips_code": 39055,
            "state": "OH",
            "area_name": "Geauga County",
            "value": 9.411425011
        }, {
            "fips_code": 39057,
            "state": "OH",
            "area_name": "Greene County",
            "value": 5.976944171
        }, {
            "fips_code": 39059,
            "state": "OH",
            "area_name": "Guernsey County",
            "value": 14.1337386
        }, {
            "fips_code": 39061,
            "state": "OH",
            "area_name": "Hamilton County",
            "value": 8.058353595
        }, {
            "fips_code": 39063,
            "state": "OH",
            "area_name": "Hancock County",
            "value": 6.557408806
        }, {
            "fips_code": 39065,
            "state": "OH",
            "area_name": "Hardin County",
            "value": 9.544849614
        }, {
            "fips_code": 39067,
            "state": "OH",
            "area_name": "Harrison County",
            "value": 11.61778619
        }, {
            "fips_code": 39069,
            "state": "OH",
            "area_name": "Henry County",
            "value": 6.425954997
        }, {
            "fips_code": 39071,
            "state": "OH",
            "area_name": "Highland County",
            "value": 16.27347298
        }, {
            "fips_code": 39073,
            "state": "OH",
            "area_name": "Hocking County",
            "value": 11.89126837
        }, {
            "fips_code": 39075,
            "state": "OH",
            "area_name": "Holmes County",
            "value": 43.44092617
        }, {
            "fips_code": 39077,
            "state": "OH",
            "area_name": "Huron County",
            "value": 10.04543287
        }, {
            "fips_code": 39079,
            "state": "OH",
            "area_name": "Jackson County",
            "value": 12.55166217
        }, {
            "fips_code": 39081,
            "state": "OH",
            "area_name": "Jefferson County",
            "value": 7.284199682
        }, {
            "fips_code": 39083,
            "state": "OH",
            "area_name": "Knox County",
            "value": 8.259255640999999
        }, {
            "fips_code": 39085,
            "state": "OH",
            "area_name": "Lake County",
            "value": 6.963600848
        }, {
            "fips_code": 39087,
            "state": "OH",
            "area_name": "Lawrence County",
            "value": 11.05152037
        }, {
            "fips_code": 39089,
            "state": "OH",
            "area_name": "Licking County",
            "value": 7.169751727
        }, {
            "fips_code": 39091,
            "state": "OH",
            "area_name": "Logan County",
            "value": 7.187842707
        }, {
            "fips_code": 39093,
            "state": "OH",
            "area_name": "Lorain County",
            "value": 9.098504817
        }, {
            "fips_code": 39095,
            "state": "OH",
            "area_name": "Lucas County",
            "value": 9.836908935
        }, {
            "fips_code": 39097,
            "state": "OH",
            "area_name": "Madison County",
            "value": 11.64612954
        }, {
            "fips_code": 39099,
            "state": "OH",
            "area_name": "Mahoning County",
            "value": 8.566787974
        }, {
            "fips_code": 39101,
            "state": "OH",
            "area_name": "Marion County",
            "value": 10.06289308
        }, {
            "fips_code": 39103,
            "state": "OH",
            "area_name": "Medina County",
            "value": 4.933614612
        }, {
            "fips_code": 39105,
            "state": "OH",
            "area_name": "Meigs County",
            "value": 14.87024058
        }, {
            "fips_code": 39107,
            "state": "OH",
            "area_name": "Mercer County",
            "value": 7.089108911
        }, {
            "fips_code": 39109,
            "state": "OH",
            "area_name": "Miami County",
            "value": 6.816667111
        }, {
            "fips_code": 39111,
            "state": "OH",
            "area_name": "Monroe County",
            "value": 10.16293279
        }, {
            "fips_code": 39113,
            "state": "OH",
            "area_name": "Montgomery County",
            "value": 8.970950405
        }, {
            "fips_code": 39115,
            "state": "OH",
            "area_name": "Morgan County",
            "value": 15.31110005
        }, {
            "fips_code": 39117,
            "state": "OH",
            "area_name": "Morrow County",
            "value": 11.03917391
        }, {
            "fips_code": 39119,
            "state": "OH",
            "area_name": "Muskingum County",
            "value": 10.17663181
        }, {
            "fips_code": 39121,
            "state": "OH",
            "area_name": "Noble County",
            "value": 14.98050863
        }, {
            "fips_code": 39123,
            "state": "OH",
            "area_name": "Ottawa County",
            "value": 7.644085598
        }, {
            "fips_code": 39125,
            "state": "OH",
            "area_name": "Paulding County",
            "value": 10.26370416
        }, {
            "fips_code": 39127,
            "state": "OH",
            "area_name": "Perry County",
            "value": 11.16018484
        }, {
            "fips_code": 39129,
            "state": "OH",
            "area_name": "Pickaway County",
            "value": 12.80964399
        }, {
            "fips_code": 39131,
            "state": "OH",
            "area_name": "Pike County",
            "value": 14.87664823
        }, {
            "fips_code": 39133,
            "state": "OH",
            "area_name": "Portage County",
            "value": 7.60406455
        }, {
            "fips_code": 39135,
            "state": "OH",
            "area_name": "Preble County",
            "value": 8.645483211
        }, {
            "fips_code": 39137,
            "state": "OH",
            "area_name": "Putnam County",
            "value": 5.423817634
        }, {
            "fips_code": 39139,
            "state": "OH",
            "area_name": "Richland County",
            "value": 11.5523092
        }, {
            "fips_code": 39141,
            "state": "OH",
            "area_name": "Ross County",
            "value": 11.21266406
        }, {
            "fips_code": 39143,
            "state": "OH",
            "area_name": "Sandusky County",
            "value": 7.406066749
        }, {
            "fips_code": 39145,
            "state": "OH",
            "area_name": "Scioto County",
            "value": 14.01475644
        }, {
            "fips_code": 39147,
            "state": "OH",
            "area_name": "Seneca County",
            "value": 6.980545581
        }, {
            "fips_code": 39149,
            "state": "OH",
            "area_name": "Shelby County",
            "value": 10.37885627
        }, {
            "fips_code": 39151,
            "state": "OH",
            "area_name": "Stark County",
            "value": 7.703113846
        }, {
            "fips_code": 39153,
            "state": "OH",
            "area_name": "Summit County",
            "value": 7.376722633
        }, {
            "fips_code": 39155,
            "state": "OH",
            "area_name": "Trumbull County",
            "value": 10.78663473
        }, {
            "fips_code": 39157,
            "state": "OH",
            "area_name": "Tuscarawas County",
            "value": 11.63069171
        }, {
            "fips_code": 39159,
            "state": "OH",
            "area_name": "Union County",
            "value": 5.635454306
        }, {
            "fips_code": 39161,
            "state": "OH",
            "area_name": "Van Wert County",
            "value": 7.115142353
        }, {
            "fips_code": 39163,
            "state": "OH",
            "area_name": "Vinton County",
            "value": 19.75499393
        }, {
            "fips_code": 39165,
            "state": "OH",
            "area_name": "Warren County",
            "value": 5.398424304
        }, {
            "fips_code": 39167,
            "state": "OH",
            "area_name": "Washington County",
            "value": 8.600121161000001
        }, {
            "fips_code": 39169,
            "state": "OH",
            "area_name": "Wayne County",
            "value": 13.91676005
        }, {
            "fips_code": 39171,
            "state": "OH",
            "area_name": "Williams County",
            "value": 8.313327654
        }, {
            "fips_code": 39173,
            "state": "OH",
            "area_name": "Wood County",
            "value": 5.040033097
        }, {
            "fips_code": 39175,
            "state": "OH",
            "area_name": "Wyandot County",
            "value": 6.369218709
        }, {
            "fips_code": 40000,
            "state": "OK",
            "area_name": "Oklahoma",
            "value": 11.25008197
        }, {
            "fips_code": 40001,
            "state": "OK",
            "area_name": "Adair County",
            "value": 19.02097902
        }, {
            "fips_code": 40003,
            "state": "OK",
            "area_name": "Alfalfa County",
            "value": 14.45275959
        }, {
            "fips_code": 40005,
            "state": "OK",
            "area_name": "Atoka County",
            "value": 16.30710017
        }, {
            "fips_code": 40007,
            "state": "OK",
            "area_name": "Beaver County",
            "value": 15.12382075
        }, {
            "fips_code": 40009,
            "state": "OK",
            "area_name": "Beckham County",
            "value": 14.79805927
        }, {
            "fips_code": 40011,
            "state": "OK",
            "area_name": "Blaine County",
            "value": 17.00648016
        }, {
            "fips_code": 40013,
            "state": "OK",
            "area_name": "Bryan County",
            "value": 12.88781254
        }, {
            "fips_code": 40015,
            "state": "OK",
            "area_name": "Caddo County",
            "value": 14.33631212
        }, {
            "fips_code": 40017,
            "state": "OK",
            "area_name": "Canadian County",
            "value": 7.942882197
        }, {
            "fips_code": 40019,
            "state": "OK",
            "area_name": "Carter County",
            "value": 12.81324907
        }, {
            "fips_code": 40021,
            "state": "OK",
            "area_name": "Cherokee County",
            "value": 11.80093042
        }, {
            "fips_code": 40023,
            "state": "OK",
            "area_name": "Choctaw County",
            "value": 16.34141331
        }, {
            "fips_code": 40025,
            "state": "OK",
            "area_name": "Cimarron County",
            "value": 13.81495564
        }, {
            "fips_code": 40027,
            "state": "OK",
            "area_name": "Cleveland County",
            "value": 7.988742844
        }, {
            "fips_code": 40029,
            "state": "OK",
            "area_name": "Coal County",
            "value": 15.1169265
        }, {
            "fips_code": 40031,
            "state": "OK",
            "area_name": "Comanche County",
            "value": 9.394693094000001
        }, {
            "fips_code": 40033,
            "state": "OK",
            "area_name": "Cotton County",
            "value": 16.38110073
        }, {
            "fips_code": 40035,
            "state": "OK",
            "area_name": "Craig County",
            "value": 13.13529352
        }, {
            "fips_code": 40037,
            "state": "OK",
            "area_name": "Creek County",
            "value": 10.19801779
        }, {
            "fips_code": 40039,
            "state": "OK",
            "area_name": "Custer County",
            "value": 11.78007363
        }, {
            "fips_code": 40041,
            "state": "OK",
            "area_name": "Delaware County",
            "value": 14.82748112
        }, {
            "fips_code": 40043,
            "state": "OK",
            "area_name": "Dewey County",
            "value": 7.397165572
        }, {
            "fips_code": 40045,
            "state": "OK",
            "area_name": "Ellis County",
            "value": 12.21146687
        }, {
            "fips_code": 40047,
            "state": "OK",
            "area_name": "Garfield County",
            "value": 11.80667546
        }, {
            "fips_code": 40049,
            "state": "OK",
            "area_name": "Garvin County",
            "value": 11.8334677
        }, {
            "fips_code": 40051,
            "state": "OK",
            "area_name": "Grady County",
            "value": 9.761597938
        }, {
            "fips_code": 40053,
            "state": "OK",
            "area_name": "Grant County",
            "value": 9.058360186
        }, {
            "fips_code": 40055,
            "state": "OK",
            "area_name": "Greer County",
            "value": 17.06772513
        }, {
            "fips_code": 40057,
            "state": "OK",
            "area_name": "Harmon County",
            "value": 18.26432218
        }, {
            "fips_code": 40059,
            "state": "OK",
            "area_name": "Harper County",
            "value": 10.75783972
        }, {
            "fips_code": 40061,
            "state": "OK",
            "area_name": "Haskell County",
            "value": 15.30713753
        }, {
            "fips_code": 40063,
            "state": "OK",
            "area_name": "Hughes County",
            "value": 16.6556583
        }, {
            "fips_code": 40065,
            "state": "OK",
            "area_name": "Jackson County",
            "value": 13.62645575
        }, {
            "fips_code": 40067,
            "state": "OK",
            "area_name": "Jefferson County",
            "value": 16.52221018
        }, {
            "fips_code": 40069,
            "state": "OK",
            "area_name": "Johnston County",
            "value": 12.82670455
        }, {
            "fips_code": 40071,
            "state": "OK",
            "area_name": "Kay County",
            "value": 11.73188183
        }, {
            "fips_code": 40073,
            "state": "OK",
            "area_name": "Kingfisher County",
            "value": 10.79329149
        }, {
            "fips_code": 40075,
            "state": "OK",
            "area_name": "Kiowa County",
            "value": 13.95584022
        }, {
            "fips_code": 40077,
            "state": "OK",
            "area_name": "Latimer County",
            "value": 13.56036202
        }, {
            "fips_code": 40079,
            "state": "OK",
            "area_name": "Le Flore County",
            "value": 15.78266095
        }, {
            "fips_code": 40081,
            "state": "OK",
            "area_name": "Lincoln County",
            "value": 11.01302523
        }, {
            "fips_code": 40083,
            "state": "OK",
            "area_name": "Logan County",
            "value": 8.358410612
        }, {
            "fips_code": 40085,
            "state": "OK",
            "area_name": "Love County",
            "value": 15.71046373
        }, {
            "fips_code": 40087,
            "state": "OK",
            "area_name": "McClain County",
            "value": 10.68530861
        }, {
            "fips_code": 40089,
            "state": "OK",
            "area_name": "McCurtain County",
            "value": 15.93553727
        }, {
            "fips_code": 40091,
            "state": "OK",
            "area_name": "McIntosh County",
            "value": 13.69686561
        }, {
            "fips_code": 40093,
            "state": "OK",
            "area_name": "Major County",
            "value": 10.46001145
        }, {
            "fips_code": 40095,
            "state": "OK",
            "area_name": "Marshall County",
            "value": 18.72865275
        }, {
            "fips_code": 40097,
            "state": "OK",
            "area_name": "Mayes County",
            "value": 11.94524013
        }, {
            "fips_code": 40099,
            "state": "OK",
            "area_name": "Murray County",
            "value": 14.35024687
        }, {
            "fips_code": 40101,
            "state": "OK",
            "area_name": "Muskogee County",
            "value": 13.71253298
        }, {
            "fips_code": 40103,
            "state": "OK",
            "area_name": "Noble County",
            "value": 10.44776119
        }, {
            "fips_code": 40105,
            "state": "OK",
            "area_name": "Nowata County",
            "value": 10.88672943
        }, {
            "fips_code": 40107,
            "state": "OK",
            "area_name": "Okfuskee County",
            "value": 18.22311964
        }, {
            "fips_code": 40109,
            "state": "OK",
            "area_name": "Oklahoma County",
            "value": 11.58215701
        }, {
            "fips_code": 40111,
            "state": "OK",
            "area_name": "Okmulgee County",
            "value": 13.41547721
        }, {
            "fips_code": 40113,
            "state": "OK",
            "area_name": "Osage County",
            "value": 10.67815317
        }, {
            "fips_code": 40115,
            "state": "OK",
            "area_name": "Ottawa County",
            "value": 13.70400161
        }, {
            "fips_code": 40117,
            "state": "OK",
            "area_name": "Pawnee County",
            "value": 11.20585782
        }, {
            "fips_code": 40119,
            "state": "OK",
            "area_name": "Payne County",
            "value": 7.917519282
        }, {
            "fips_code": 40121,
            "state": "OK",
            "area_name": "Pittsburg County",
            "value": 12.98015834
        }, {
            "fips_code": 40123,
            "state": "OK",
            "area_name": "Pontotoc County",
            "value": 10.58852101
        }, {
            "fips_code": 40125,
            "state": "OK",
            "area_name": "Pottawatomie County",
            "value": 11.34440679
        }, {
            "fips_code": 40127,
            "state": "OK",
            "area_name": "Pushmataha County",
            "value": 14.48266976
        }, {
            "fips_code": 40129,
            "state": "OK",
            "area_name": "Roger Mills County",
            "value": 8.708456036999999
        }, {
            "fips_code": 40131,
            "state": "OK",
            "area_name": "Rogers County",
            "value": 8.140130750999999
        }, {
            "fips_code": 40133,
            "state": "OK",
            "area_name": "Seminole County",
            "value": 15.97918518
        }, {
            "fips_code": 40135,
            "state": "OK",
            "area_name": "Sequoyah County",
            "value": 17.45736895
        }, {
            "fips_code": 40137,
            "state": "OK",
            "area_name": "Stephens County",
            "value": 12.12886286
        }, {
            "fips_code": 40139,
            "state": "OK",
            "area_name": "Texas County",
            "value": 26.80633076
        }, {
            "fips_code": 40141,
            "state": "OK",
            "area_name": "Tillman County",
            "value": 21.01069407
        }, {
            "fips_code": 40143,
            "state": "OK",
            "area_name": "Tulsa County",
            "value": 10.17444252
        }, {
            "fips_code": 40145,
            "state": "OK",
            "area_name": "Wagoner County",
            "value": 9.003549004
        }, {
            "fips_code": 40147,
            "state": "OK",
            "area_name": "Washington County",
            "value": 9.490526316
        }, {
            "fips_code": 40149,
            "state": "OK",
            "area_name": "Washita County",
            "value": 10.44155147
        }, {
            "fips_code": 40151,
            "state": "OK",
            "area_name": "Woods County",
            "value": 8.502397639
        }, {
            "fips_code": 40153,
            "state": "OK",
            "area_name": "Woodward County",
            "value": 12.10163652
        }, {
            "fips_code": 41000,
            "state": "OR",
            "area_name": "Oregon",
            "value": 8.501122032
        }, {
            "fips_code": 41001,
            "state": "OR",
            "area_name": "Baker County",
            "value": 9.216214012
        }, {
            "fips_code": 41003,
            "state": "OR",
            "area_name": "Benton County",
            "value": 3.706522303
        }, {
            "fips_code": 41005,
            "state": "OR",
            "area_name": "Clackamas County",
            "value": 5.663613252
        }, {
            "fips_code": 41007,
            "state": "OR",
            "area_name": "Clatsop County",
            "value": 7.867115391
        }, {
            "fips_code": 41009,
            "state": "OR",
            "area_name": "Columbia County",
            "value": 9.544732663
        }, {
            "fips_code": 41011,
            "state": "OR",
            "area_name": "Coos County",
            "value": 10.04199681
        }, {
            "fips_code": 41013,
            "state": "OR",
            "area_name": "Crook County",
            "value": 9.158826785
        }, {
            "fips_code": 41015,
            "state": "OR",
            "area_name": "Curry County",
            "value": 8.088429272000001
        }, {
            "fips_code": 41017,
            "state": "OR",
            "area_name": "Deschutes County",
            "value": 5.66981462
        }, {
            "fips_code": 41019,
            "state": "OR",
            "area_name": "Douglas County",
            "value": 9.455187119
        }, {
            "fips_code": 41021,
            "state": "OR",
            "area_name": "Gilliam County",
            "value": 6.562922869
        }, {
            "fips_code": 41023,
            "state": "OR",
            "area_name": "Grant County",
            "value": 9.462133477
        }, {
            "fips_code": 41025,
            "state": "OR",
            "area_name": "Harney County",
            "value": 9.319992588
        }, {
            "fips_code": 41027,
            "state": "OR",
            "area_name": "Hood River County",
            "value": 16.75204293
        }, {
            "fips_code": 41029,
            "state": "OR",
            "area_name": "Jackson County",
            "value": 9.13041567
        }, {
            "fips_code": 41031,
            "state": "OR",
            "area_name": "Jefferson County",
            "value": 12.15512598
        }, {
            "fips_code": 41033,
            "state": "OR",
            "area_name": "Josephine County",
            "value": 9.19176884
        }, {
            "fips_code": 41035,
            "state": "OR",
            "area_name": "Klamath County",
            "value": 11.63195163
        }, {
            "fips_code": 41037,
            "state": "OR",
            "area_name": "Lake County",
            "value": 13.94468225
        }, {
            "fips_code": 41039,
            "state": "OR",
            "area_name": "Lane County",
            "value": 7.113270943
        }, {
            "fips_code": 41041,
            "state": "OR",
            "area_name": "Lincoln County",
            "value": 7.258693279
        }, {
            "fips_code": 41043,
            "state": "OR",
            "area_name": "Linn County",
            "value": 9.817684491
        }, {
            "fips_code": 41045,
            "state": "OR",
            "area_name": "Malheur County",
            "value": 18.51030267
        }, {
            "fips_code": 41047,
            "state": "OR",
            "area_name": "Marion County",
            "value": 14.32772244
        }, {
            "fips_code": 41049,
            "state": "OR",
            "area_name": "Morrow County",
            "value": 22.54449572
        }, {
            "fips_code": 41051,
            "state": "OR",
            "area_name": "Multnomah County",
            "value": 7.632992897
        }, {
            "fips_code": 41053,
            "state": "OR",
            "area_name": "Polk County",
            "value": 8.426585887
        }, {
            "fips_code": 41055,
            "state": "OR",
            "area_name": "Sherman County",
            "value": 12.6848249
        }, {
            "fips_code": 41057,
            "state": "OR",
            "area_name": "Tillamook County",
            "value": 9.332221186
        }, {
            "fips_code": 41059,
            "state": "OR",
            "area_name": "Umatilla County",
            "value": 16.76212295
        }, {
            "fips_code": 41061,
            "state": "OR",
            "area_name": "Union County",
            "value": 7.253501
        }, {
            "fips_code": 41063,
            "state": "OR",
            "area_name": "Wallowa County",
            "value": 5.988882912
        }, {
            "fips_code": 41065,
            "state": "OR",
            "area_name": "Wasco County",
            "value": 12.97497186
        }, {
            "fips_code": 41067,
            "state": "OR",
            "area_name": "Washington County",
            "value": 7.005919336
        }, {
            "fips_code": 41069,
            "state": "OR",
            "area_name": "Wheeler County",
            "value": 10.39647577
        }, {
            "fips_code": 41071,
            "state": "OR",
            "area_name": "Yamhill County",
            "value": 9.884538014
        }, {
            "fips_code": 42000,
            "state": "PA",
            "area_name": "Pennsylvania",
            "value": 8.641565705
        }, {
            "fips_code": 42001,
            "state": "PA",
            "area_name": "Adams County",
            "value": 10.23809199
        }, {
            "fips_code": 42003,
            "state": "PA",
            "area_name": "Allegheny County",
            "value": 4.914186636
        }, {
            "fips_code": 42005,
            "state": "PA",
            "area_name": "Armstrong County",
            "value": 7.607246169
        }, {
            "fips_code": 42007,
            "state": "PA",
            "area_name": "Beaver County",
            "value": 5.451478436
        }, {
            "fips_code": 42009,
            "state": "PA",
            "area_name": "Bedford County",
            "value": 10.53491572
        }, {
            "fips_code": 42011,
            "state": "PA",
            "area_name": "Berks County",
            "value": 12.45221003
        }, {
            "fips_code": 42013,
            "state": "PA",
            "area_name": "Blair County",
            "value": 7.620437296
        }, {
            "fips_code": 42015,
            "state": "PA",
            "area_name": "Bradford County",
            "value": 9.780795527
        }, {
            "fips_code": 42017,
            "state": "PA",
            "area_name": "Bucks County",
            "value": 5.51385825
        }, {
            "fips_code": 42019,
            "state": "PA",
            "area_name": "Butler County",
            "value": 4.496127407
        }, {
            "fips_code": 42021,
            "state": "PA",
            "area_name": "Cambria County",
            "value": 7.523197567
        }, {
            "fips_code": 42023,
            "state": "PA",
            "area_name": "Cameron County",
            "value": 7.575330893
        }, {
            "fips_code": 42025,
            "state": "PA",
            "area_name": "Carbon County",
            "value": 9.69581749
        }, {
            "fips_code": 42027,
            "state": "PA",
            "area_name": "Centre County",
            "value": 5.636834802
        }, {
            "fips_code": 42029,
            "state": "PA",
            "area_name": "Chester County",
            "value": 5.489974817
        }, {
            "fips_code": 42031,
            "state": "PA",
            "area_name": "Clarion County",
            "value": 9.571021506999999
        }, {
            "fips_code": 42033,
            "state": "PA",
            "area_name": "Clearfield County",
            "value": 11.38945723
        }, {
            "fips_code": 42035,
            "state": "PA",
            "area_name": "Clinton County",
            "value": 9.939164417000001
        }, {
            "fips_code": 42037,
            "state": "PA",
            "area_name": "Columbia County",
            "value": 8.899768926
        }, {
            "fips_code": 42039,
            "state": "PA",
            "area_name": "Crawford County",
            "value": 9.736503856000001
        }, {
            "fips_code": 42041,
            "state": "PA",
            "area_name": "Cumberland County",
            "value": 6.744256935
        }, {
            "fips_code": 42043,
            "state": "PA",
            "area_name": "Dauphin County",
            "value": 9.086666023999999
        }, {
            "fips_code": 42045,
            "state": "PA",
            "area_name": "Delaware County",
            "value": 6.562482421
        }, {
            "fips_code": 42047,
            "state": "PA",
            "area_name": "Elk County",
            "value": 7.023484915
        }, {
            "fips_code": 42049,
            "state": "PA",
            "area_name": "Erie County",
            "value": 8.340849776000001
        }, {
            "fips_code": 42051,
            "state": "PA",
            "area_name": "Fayette County",
            "value": 10.96844076
        }, {
            "fips_code": 42053,
            "state": "PA",
            "area_name": "Forest County",
            "value": 16.59016393
        }, {
            "fips_code": 42055,
            "state": "PA",
            "area_name": "Franklin County",
            "value": 10.71022415
        }, {
            "fips_code": 42057,
            "state": "PA",
            "area_name": "Fulton County",
            "value": 11.37651057
        }, {
            "fips_code": 42059,
            "state": "PA",
            "area_name": "Greene County",
            "value": 11.94739896
        }, {
            "fips_code": 42061,
            "state": "PA",
            "area_name": "Huntingdon County",
            "value": 10.06939042
        }, {
            "fips_code": 42063,
            "state": "PA",
            "area_name": "Indiana County",
            "value": 8.270006907999999
        }, {
            "fips_code": 42065,
            "state": "PA",
            "area_name": "Jefferson County",
            "value": 9.531023165000001
        }, {
            "fips_code": 42067,
            "state": "PA",
            "area_name": "Juniata County",
            "value": 16.98056077
        }, {
            "fips_code": 42069,
            "state": "PA",
            "area_name": "Lackawanna County",
            "value": 8.441310976
        }, {
            "fips_code": 42071,
            "state": "PA",
            "area_name": "Lancaster County",
            "value": 13.64479849
        }, {
            "fips_code": 42073,
            "state": "PA",
            "area_name": "Lawrence County",
            "value": 8.239410503
        }, {
            "fips_code": 42075,
            "state": "PA",
            "area_name": "Lebanon County",
            "value": 12.43742898
        }, {
            "fips_code": 42077,
            "state": "PA",
            "area_name": "Lehigh County",
            "value": 10.30784759
        }, {
            "fips_code": 42079,
            "state": "PA",
            "area_name": "Luzerne County",
            "value": 9.779699936
        }, {
            "fips_code": 42081,
            "state": "PA",
            "area_name": "Lycoming County",
            "value": 9.384280833
        }, {
            "fips_code": 42083,
            "state": "PA",
            "area_name": "McKean County",
            "value": 7.351515991
        }, {
            "fips_code": 42085,
            "state": "PA",
            "area_name": "Mercer County",
            "value": 9.872010735
        }, {
            "fips_code": 42087,
            "state": "PA",
            "area_name": "Mifflin County",
            "value": 14.67453428
        }, {
            "fips_code": 42089,
            "state": "PA",
            "area_name": "Monroe County",
            "value": 10.34934127
        }, {
            "fips_code": 42091,
            "state": "PA",
            "area_name": "Montgomery County",
            "value": 5.342988975
        }, {
            "fips_code": 42093,
            "state": "PA",
            "area_name": "Montour County",
            "value": 8.349705305000001
        }, {
            "fips_code": 42095,
            "state": "PA",
            "area_name": "Northampton County",
            "value": 8.363248899
        }, {
            "fips_code": 42097,
            "state": "PA",
            "area_name": "Northumberland County",
            "value": 10.37834292
        }, {
            "fips_code": 42099,
            "state": "PA",
            "area_name": "Perry County",
            "value": 11.13748402
        }, {
            "fips_code": 42101,
            "state": "PA",
            "area_name": "Philadelphia County",
            "value": 13.44967286
        }, {
            "fips_code": 42103,
            "state": "PA",
            "area_name": "Pike County",
            "value": 6.912822392
        }, {
            "fips_code": 42105,
            "state": "PA",
            "area_name": "Potter County",
            "value": 10.53907229
        }, {
            "fips_code": 42107,
            "state": "PA",
            "area_name": "Schuylkill County",
            "value": 10.59681799
        }, {
            "fips_code": 42109,
            "state": "PA",
            "area_name": "Snyder County",
            "value": 13.50610329
        }, {
            "fips_code": 42111,
            "state": "PA",
            "area_name": "Somerset County",
            "value": 10.52792462
        }, {
            "fips_code": 42113,
            "state": "PA",
            "area_name": "Sullivan County",
            "value": 9.627964023000001
        }, {
            "fips_code": 42115,
            "state": "PA",
            "area_name": "Susquehanna County",
            "value": 9.480937706000001
        }, {
            "fips_code": 42117,
            "state": "PA",
            "area_name": "Tioga County",
            "value": 9.003193586
        }, {
            "fips_code": 42119,
            "state": "PA",
            "area_name": "Union County",
            "value": 11.77952541
        }, {
            "fips_code": 42121,
            "state": "PA",
            "area_name": "Venango County",
            "value": 8.398489442000001
        }, {
            "fips_code": 42123,
            "state": "PA",
            "area_name": "Warren County",
            "value": 6.880733945
        }, {
            "fips_code": 42125,
            "state": "PA",
            "area_name": "Washington County",
            "value": 6.135307762
        }, {
            "fips_code": 42127,
            "state": "PA",
            "area_name": "Wayne County",
            "value": 9.472961635000001
        }, {
            "fips_code": 42129,
            "state": "PA",
            "area_name": "Westmoreland County",
            "value": 5.104629524
        }, {
            "fips_code": 42131,
            "state": "PA",
            "area_name": "Wyoming County",
            "value": 7.065446128
        }, {
            "fips_code": 42133,
            "state": "PA",
            "area_name": "York County",
            "value": 9.228183687
        }, {
            "fips_code": 44000,
            "state": "RI",
            "area_name": "Rhode Island",
            "value": 10.89308193
        }, {
            "fips_code": 44001,
            "state": "RI",
            "area_name": "Bristol County",
            "value": 8.404067569
        }, {
            "fips_code": 44003,
            "state": "RI",
            "area_name": "Kent County",
            "value": 7.536188034
        }, {
            "fips_code": 44005,
            "state": "RI",
            "area_name": "Newport County",
            "value": 5.596844181
        }, {
            "fips_code": 44007,
            "state": "RI",
            "area_name": "Providence County",
            "value": 13.83477314
        }, {
            "fips_code": 44009,
            "state": "RI",
            "area_name": "Washington County",
            "value": 5.525506181
        }, {
            "fips_code": 45000,
            "state": "SC",
            "area_name": "South Carolina",
            "value": 11.21838656
        }, {
            "fips_code": 45001,
            "state": "SC",
            "area_name": "Abbeville County",
            "value": 16.29292221
        }, {
            "fips_code": 45003,
            "state": "SC",
            "area_name": "Aiken County",
            "value": 10.707657
        }, {
            "fips_code": 45005,
            "state": "SC",
            "area_name": "Allendale County",
            "value": 23.80547526
        }, {
            "fips_code": 45007,
            "state": "SC",
            "area_name": "Anderson County",
            "value": 14.17289481
        }, {
            "fips_code": 45009,
            "state": "SC",
            "area_name": "Bamberg County",
            "value": 22.42855554
        }, {
            "fips_code": 45011,
            "state": "SC",
            "area_name": "Barnwell County",
            "value": 18.55788567
        }, {
            "fips_code": 45013,
            "state": "SC",
            "area_name": "Beaufort County",
            "value": 6.602259193
        }, {
            "fips_code": 45015,
            "state": "SC",
            "area_name": "Berkeley County",
            "value": 10.43281697
        }, {
            "fips_code": 45017,
            "state": "SC",
            "area_name": "Calhoun County",
            "value": 13.9481268
        }, {
            "fips_code": 45019,
            "state": "SC",
            "area_name": "Charleston County",
            "value": 7.114868334
        }, {
            "fips_code": 45021,
            "state": "SC",
            "area_name": "Cherokee County",
            "value": 16.66404199
        }, {
            "fips_code": 45023,
            "state": "SC",
            "area_name": "Chester County",
            "value": 15.4074929
        }, {
            "fips_code": 45025,
            "state": "SC",
            "area_name": "Chesterfield County",
            "value": 19.9534899
        }, {
            "fips_code": 45027,
            "state": "SC",
            "area_name": "Clarendon County",
            "value": 20.22718302
        }, {
            "fips_code": 45029,
            "state": "SC",
            "area_name": "Colleton County",
            "value": 14.03332962
        }, {
            "fips_code": 45031,
            "state": "SC",
            "area_name": "Darlington County",
            "value": 15.19172024
        }, {
            "fips_code": 45033,
            "state": "SC",
            "area_name": "Dillon County",
            "value": 21.26175631
        }, {
            "fips_code": 45035,
            "state": "SC",
            "area_name": "Dorchester County",
            "value": 9.560723513999999
        }, {
            "fips_code": 45037,
            "state": "SC",
            "area_name": "Edgefield County",
            "value": 17.93665063
        }, {
            "fips_code": 45039,
            "state": "SC",
            "area_name": "Fairfield County",
            "value": 15.47179587
        }, {
            "fips_code": 45041,
            "state": "SC",
            "area_name": "Florence County",
            "value": 13.70339275
        }, {
            "fips_code": 45043,
            "state": "SC",
            "area_name": "Georgetown County",
            "value": 10.29508336
        }, {
            "fips_code": 45045,
            "state": "SC",
            "area_name": "Greenville County",
            "value": 10.34835111
        }, {
            "fips_code": 45047,
            "state": "SC",
            "area_name": "Greenwood County",
            "value": 14.02125983
        }, {
            "fips_code": 45049,
            "state": "SC",
            "area_name": "Hampton County",
            "value": 18.52598566
        }, {
            "fips_code": 45051,
            "state": "SC",
            "area_name": "Horry County",
            "value": 8.905959589
        }, {
            "fips_code": 45053,
            "state": "SC",
            "area_name": "Jasper County",
            "value": 11.22248428
        }, {
            "fips_code": 45055,
            "state": "SC",
            "area_name": "Kershaw County",
            "value": 10.23002688
        }, {
            "fips_code": 45057,
            "state": "SC",
            "area_name": "Lancaster County",
            "value": 12.10600665
        }, {
            "fips_code": 45059,
            "state": "SC",
            "area_name": "Laurens County",
            "value": 17.88547775
        }, {
            "fips_code": 45061,
            "state": "SC",
            "area_name": "Lee County",
            "value": 17.74626615
        }, {
            "fips_code": 45063,
            "state": "SC",
            "area_name": "Lexington County",
            "value": 9.607678226999999
        }, {
            "fips_code": 45065,
            "state": "SC",
            "area_name": "McCormick County",
            "value": 16.50314465
        }, {
            "fips_code": 45067,
            "state": "SC",
            "area_name": "Marion County",
            "value": 19.60506379
        }, {
            "fips_code": 45069,
            "state": "SC",
            "area_name": "Marlboro County",
            "value": 20.2524413
        }, {
            "fips_code": 45071,
            "state": "SC",
            "area_name": "Newberry County",
            "value": 13.82766301
        }, {
            "fips_code": 45073,
            "state": "SC",
            "area_name": "Oconee County",
            "value": 13.8836213
        }, {
            "fips_code": 45075,
            "state": "SC",
            "area_name": "Orangeburg County",
            "value": 15.68402977
        }, {
            "fips_code": 45077,
            "state": "SC",
            "area_name": "Pickens County",
            "value": 13.40087217
        }, {
            "fips_code": 45079,
            "state": "SC",
            "area_name": "Richland County",
            "value": 8.185476949
        }, {
            "fips_code": 45081,
            "state": "SC",
            "area_name": "Saluda County",
            "value": 18.72108641
        }, {
            "fips_code": 45083,
            "state": "SC",
            "area_name": "Spartanburg County",
            "value": 12.50108659
        }, {
            "fips_code": 45085,
            "state": "SC",
            "area_name": "Sumter County",
            "value": 11.92828078
        }, {
            "fips_code": 45087,
            "state": "SC",
            "area_name": "Union County",
            "value": 17.19755056
        }, {
            "fips_code": 45089,
            "state": "SC",
            "area_name": "Williamsburg County",
            "value": 16.06648199
        }, {
            "fips_code": 45091,
            "state": "SC",
            "area_name": "York County",
            "value": 8.390517111999999
        }, {
            "fips_code": 46000,
            "state": "SD",
            "area_name": "South Dakota",
            "value": 7.467319276
        }, {
            "fips_code": 46003,
            "state": "SD",
            "area_name": "Aurora County",
            "value": 9.965034964999999
        }, {
            "fips_code": 46005,
            "state": "SD",
            "area_name": "Beadle County",
            "value": 14.22715216
        }, {
            "fips_code": 46007,
            "state": "SD",
            "area_name": "Bennett County",
            "value": 11.75128351
        }, {
            "fips_code": 46009,
            "state": "SD",
            "area_name": "Bon Homme County",
            "value": 11.3743148
        }, {
            "fips_code": 46011,
            "state": "SD",
            "area_name": "Brookings County",
            "value": 3.755562792
        }, {
            "fips_code": 46013,
            "state": "SD",
            "area_name": "Brown County",
            "value": 6.791124471
        }, {
            "fips_code": 46015,
            "state": "SD",
            "area_name": "Brule County",
            "value": 11.96777906
        }, {
            "fips_code": 46017,
            "state": "SD",
            "area_name": "Buffalo County",
            "value": 18.81881882
        }, {
            "fips_code": 46019,
            "state": "SD",
            "area_name": "Butte County",
            "value": 8.689438331
        }, {
            "fips_code": 46021,
            "state": "SD",
            "area_name": "Campbell County",
            "value": 12.69990593
        }, {
            "fips_code": 46023,
            "state": "SD",
            "area_name": "Charles Mix County",
            "value": 11.7698496
        }, {
            "fips_code": 46025,
            "state": "SD",
            "area_name": "Clark County",
            "value": 6.146380914
        }, {
            "fips_code": 46027,
            "state": "SD",
            "area_name": "Clay County",
            "value": 5.115961801
        }, {
            "fips_code": 46029,
            "state": "SD",
            "area_name": "Codington County",
            "value": 8.421709294999999
        }, {
            "fips_code": 46031,
            "state": "SD",
            "area_name": "Corson County",
            "value": 14.01392111
        }, {
            "fips_code": 46033,
            "state": "SD",
            "area_name": "Custer County",
            "value": 7.055814653
        }, {
            "fips_code": 46035,
            "state": "SD",
            "area_name": "Davison County",
            "value": 10.11847105
        }, {
            "fips_code": 46037,
            "state": "SD",
            "area_name": "Day County",
            "value": 8.036856923
        }, {
            "fips_code": 46039,
            "state": "SD",
            "area_name": "Deuel County",
            "value": 8.423180593
        }, {
            "fips_code": 46041,
            "state": "SD",
            "area_name": "Dewey County",
            "value": 16.59765355
        }, {
            "fips_code": 46043,
            "state": "SD",
            "area_name": "Douglas County",
            "value": 9.93168681
        }, {
            "fips_code": 46045,
            "state": "SD",
            "area_name": "Edmunds County",
            "value": 7.398051245
        }, {
            "fips_code": 46047,
            "state": "SD",
            "area_name": "Fall River County",
            "value": 6.574523721
        }, {
            "fips_code": 46049,
            "state": "SD",
            "area_name": "Faulk County",
            "value": 8.418194162000001
        }, {
            "fips_code": 46051,
            "state": "SD",
            "area_name": "Grant County",
            "value": 8.025988915999999
        }, {
            "fips_code": 46053,
            "state": "SD",
            "area_name": "Gregory County",
            "value": 9.61815562
        }, {
            "fips_code": 46055,
            "state": "SD",
            "area_name": "Haakon County",
            "value": 4.253673627
        }, {
            "fips_code": 46057,
            "state": "SD",
            "area_name": "Hamlin County",
            "value": 7.838807618
        }, {
            "fips_code": 46059,
            "state": "SD",
            "area_name": "Hand County",
            "value": 7.142857143
        }, {
            "fips_code": 46061,
            "state": "SD",
            "area_name": "Hanson County",
            "value": 4.828879512
        }, {
            "fips_code": 46063,
            "state": "SD",
            "area_name": "Harding County",
            "value": 5.231866825
        }, {
            "fips_code": 46065,
            "state": "SD",
            "area_name": "Hughes County",
            "value": 3.713635625
        }, {
            "fips_code": 46067,
            "state": "SD",
            "area_name": "Hutchinson County",
            "value": 9.566968781
        }, {
            "fips_code": 46069,
            "state": "SD",
            "area_name": "Hyde County",
            "value": 8.622398413999999
        }, {
            "fips_code": 46071,
            "state": "SD",
            "area_name": "Jackson County",
            "value": 13.74927787
        }, {
            "fips_code": 46073,
            "state": "SD",
            "area_name": "Jerauld County",
            "value": 7.982261641
        }, {
            "fips_code": 46075,
            "state": "SD",
            "area_name": "Jones County",
            "value": 5.688622754
        }, {
            "fips_code": 46077,
            "state": "SD",
            "area_name": "Kingsbury County",
            "value": 7.951329938
        }, {
            "fips_code": 46079,
            "state": "SD",
            "area_name": "Lake County",
            "value": 8.725779546
        }, {
            "fips_code": 46081,
            "state": "SD",
            "area_name": "Lawrence County",
            "value": 5.623852701
        }, {
            "fips_code": 46083,
            "state": "SD",
            "area_name": "Lincoln County",
            "value": 4.13980319
        }, {
            "fips_code": 46085,
            "state": "SD",
            "area_name": "Lyman County",
            "value": 8.885017422000001
        }, {
            "fips_code": 46087,
            "state": "SD",
            "area_name": "McCook County",
            "value": 8.742579600999999
        }, {
            "fips_code": 46089,
            "state": "SD",
            "area_name": "McPherson County",
            "value": 13.87387387
        }, {
            "fips_code": 46091,
            "state": "SD",
            "area_name": "Marshall County",
            "value": 8.692788935999999
        }, {
            "fips_code": 46093,
            "state": "SD",
            "area_name": "Meade County",
            "value": 4.506513915
        }, {
            "fips_code": 46095,
            "state": "SD",
            "area_name": "Mellette County",
            "value": 18.90756303
        }, {
            "fips_code": 46097,
            "state": "SD",
            "area_name": "Miner County",
            "value": 10.89351285
        }, {
            "fips_code": 46099,
            "state": "SD",
            "area_name": "Minnehaha County",
            "value": 6.845228799
        }, {
            "fips_code": 46101,
            "state": "SD",
            "area_name": "Moody County",
            "value": 5.96308566
        }, {
            "fips_code": 46102,
            "state": "SD",
            "area_name": "Oglala Lakota County",
            "value": 26.76134781
        }, {
            "fips_code": 46103,
            "state": "SD",
            "area_name": "Pennington County",
            "value": 5.551981127
        }, {
            "fips_code": 46105,
            "state": "SD",
            "area_name": "Perkins County",
            "value": 8.174904943
        }, {
            "fips_code": 46107,
            "state": "SD",
            "area_name": "Potter County",
            "value": 5.97826087
        }, {
            "fips_code": 46109,
            "state": "SD",
            "area_name": "Roberts County",
            "value": 10.15026066
        }, {
            "fips_code": 46111,
            "state": "SD",
            "area_name": "Sanborn County",
            "value": 8.253358925000001
        }, {
            "fips_code": 46115,
            "state": "SD",
            "area_name": "Spink County",
            "value": 9.790365745000001
        }, {
            "fips_code": 46117,
            "state": "SD",
            "area_name": "Stanley County",
            "value": 6.300331596
        }, {
            "fips_code": 46119,
            "state": "SD",
            "area_name": "Sully County",
            "value": 3.393213573
        }, {
            "fips_code": 46121,
            "state": "SD",
            "area_name": "Todd County",
            "value": 21.29409219
        }, {
            "fips_code": 46123,
            "state": "SD",
            "area_name": "Tripp County",
            "value": 12.02157719
        }, {
            "fips_code": 46125,
            "state": "SD",
            "area_name": "Turner County",
            "value": 8.454024924
        }, {
            "fips_code": 46127,
            "state": "SD",
            "area_name": "Union County",
            "value": 5.574354408
        }, {
            "fips_code": 46129,
            "state": "SD",
            "area_name": "Walworth County",
            "value": 10.04505698
        }, {
            "fips_code": 46135,
            "state": "SD",
            "area_name": "Yankton County",
            "value": 8.493133737000001
        }, {
            "fips_code": 46137,
            "state": "SD",
            "area_name": "Ziebach County",
            "value": 10.82887701
        }, {
            "fips_code": 47000,
            "state": "TN",
            "area_name": "Tennessee",
            "value": 11.23848885
        }, {
            "fips_code": 47001,
            "state": "TN",
            "area_name": "Anderson County",
            "value": 10.13828252
        }, {
            "fips_code": 47003,
            "state": "TN",
            "area_name": "Bedford County",
            "value": 16.21949371
        }, {
            "fips_code": 47005,
            "state": "TN",
            "area_name": "Benton County",
            "value": 15.24267599
        }, {
            "fips_code": 47007,
            "state": "TN",
            "area_name": "Bledsoe County",
            "value": 23.44497608
        }, {
            "fips_code": 47009,
            "state": "TN",
            "area_name": "Blount County",
            "value": 10.22662449
        }, {
            "fips_code": 47011,
            "state": "TN",
            "area_name": "Bradley County",
            "value": 12.58655032
        }, {
            "fips_code": 47013,
            "state": "TN",
            "area_name": "Campbell County",
            "value": 19.93101749
        }, {
            "fips_code": 47015,
            "state": "TN",
            "area_name": "Cannon County",
            "value": 15.47851563
        }, {
            "fips_code": 47017,
            "state": "TN",
            "area_name": "Carroll County",
            "value": 11.94251227
        }, {
            "fips_code": 47019,
            "state": "TN",
            "area_name": "Carter County",
            "value": 13.20786143
        }, {
            "fips_code": 47021,
            "state": "TN",
            "area_name": "Cheatham County",
            "value": 12.71882691
        }, {
            "fips_code": 47023,
            "state": "TN",
            "area_name": "Chester County",
            "value": 15.33975435
        }, {
            "fips_code": 47025,
            "state": "TN",
            "area_name": "Claiborne County",
            "value": 17.97184817
        }, {
            "fips_code": 47027,
            "state": "TN",
            "area_name": "Clay County",
            "value": 17.87508973
        }, {
            "fips_code": 47029,
            "state": "TN",
            "area_name": "Cocke County",
            "value": 16.19742654
        }, {
            "fips_code": 47031,
            "state": "TN",
            "area_name": "Coffee County",
            "value": 12.21022873
        }, {
            "fips_code": 47033,
            "state": "TN",
            "area_name": "Crockett County",
            "value": 15.83447693
        }, {
            "fips_code": 47035,
            "state": "TN",
            "area_name": "Cumberland County",
            "value": 11.42179584
        }, {
            "fips_code": 47037,
            "state": "TN",
            "area_name": "Davidson County",
            "value": 9.887325145
        }, {
            "fips_code": 47039,
            "state": "TN",
            "area_name": "Decatur County",
            "value": 15.59224003
        }, {
            "fips_code": 47041,
            "state": "TN",
            "area_name": "DeKalb County",
            "value": 19.45774648
        }, {
            "fips_code": 47043,
            "state": "TN",
            "area_name": "Dickson County",
            "value": 12.81662006
        }, {
            "fips_code": 47045,
            "state": "TN",
            "area_name": "Dyer County",
            "value": 12.14380185
        }, {
            "fips_code": 47047,
            "state": "TN",
            "area_name": "Fayette County",
            "value": 10.66602161
        }, {
            "fips_code": 47049,
            "state": "TN",
            "area_name": "Fentress County",
            "value": 19.7485039
        }, {
            "fips_code": 47051,
            "state": "TN",
            "area_name": "Franklin County",
            "value": 11.34644478
        }, {
            "fips_code": 47053,
            "state": "TN",
            "area_name": "Gibson County",
            "value": 12.89908364
        }, {
            "fips_code": 47055,
            "state": "TN",
            "area_name": "Giles County",
            "value": 12.41411765
        }, {
            "fips_code": 47057,
            "state": "TN",
            "area_name": "Grainger County",
            "value": 20.0684285
        }, {
            "fips_code": 47059,
            "state": "TN",
            "area_name": "Greene County",
            "value": 14.92248445
        }, {
            "fips_code": 47061,
            "state": "TN",
            "area_name": "Grundy County",
            "value": 21.84838608
        }, {
            "fips_code": 47063,
            "state": "TN",
            "area_name": "Hamblen County",
            "value": 15.20778073
        }, {
            "fips_code": 47065,
            "state": "TN",
            "area_name": "Hamilton County",
            "value": 9.523660845
        }, {
            "fips_code": 47067,
            "state": "TN",
            "area_name": "Hancock County",
            "value": 18.70578444
        }, {
            "fips_code": 47069,
            "state": "TN",
            "area_name": "Hardeman County",
            "value": 17.857336
        }, {
            "fips_code": 47071,
            "state": "TN",
            "area_name": "Hardin County",
            "value": 15.62890462
        }, {
            "fips_code": 47073,
            "state": "TN",
            "area_name": "Hawkins County",
            "value": 13.41360219
        }, {
            "fips_code": 47075,
            "state": "TN",
            "area_name": "Haywood County",
            "value": 17.24469363
        }, {
            "fips_code": 47077,
            "state": "TN",
            "area_name": "Henderson County",
            "value": 13.268642
        }, {
            "fips_code": 47079,
            "state": "TN",
            "area_name": "Henry County",
            "value": 14.24245009
        }, {
            "fips_code": 47081,
            "state": "TN",
            "area_name": "Hickman County",
            "value": 18.06288602
        }, {
            "fips_code": 47083,
            "state": "TN",
            "area_name": "Houston County",
            "value": 15.69468268
        }, {
            "fips_code": 47085,
            "state": "TN",
            "area_name": "Humphreys County",
            "value": 13.66361865
        }, {
            "fips_code": 47087,
            "state": "TN",
            "area_name": "Jackson County",
            "value": 18.62677671
        }, {
            "fips_code": 47089,
            "state": "TN",
            "area_name": "Jefferson County",
            "value": 13.62254624
        }, {
            "fips_code": 47091,
            "state": "TN",
            "area_name": "Johnson County",
            "value": 18.95831807
        }, {
            "fips_code": 47093,
            "state": "TN",
            "area_name": "Knox County",
            "value": 7.86500652
        }, {
            "fips_code": 47095,
            "state": "TN",
            "area_name": "Lake County",
            "value": 26.30902076
        }, {
            "fips_code": 47097,
            "state": "TN",
            "area_name": "Lauderdale County",
            "value": 20.40347146
        }, {
            "fips_code": 47099,
            "state": "TN",
            "area_name": "Lawrence County",
            "value": 13.90325525
        }, {
            "fips_code": 47101,
            "state": "TN",
            "area_name": "Lewis County",
            "value": 16.63001967
        }, {
            "fips_code": 47103,
            "state": "TN",
            "area_name": "Lincoln County",
            "value": 14.29852084
        }, {
            "fips_code": 47105,
            "state": "TN",
            "area_name": "Loudon County",
            "value": 12.67171013
        }, {
            "fips_code": 47107,
            "state": "TN",
            "area_name": "McMinn County",
            "value": 14.01746842
        }, {
            "fips_code": 47109,
            "state": "TN",
            "area_name": "McNairy County",
            "value": 14.81663125
        }, {
            "fips_code": 47111,
            "state": "TN",
            "area_name": "Macon County",
            "value": 20.19265503
        }, {
            "fips_code": 47113,
            "state": "TN",
            "area_name": "Madison County",
            "value": 10.5226375
        }, {
            "fips_code": 47115,
            "state": "TN",
            "area_name": "Marion County",
            "value": 18.51743477
        }, {
            "fips_code": 47117,
            "state": "TN",
            "area_name": "Marshall County",
            "value": 12.18045113
        }, {
            "fips_code": 47119,
            "state": "TN",
            "area_name": "Maury County",
            "value": 8.894223774
        }, {
            "fips_code": 47121,
            "state": "TN",
            "area_name": "Meigs County",
            "value": 16.78918919
        }, {
            "fips_code": 47123,
            "state": "TN",
            "area_name": "Monroe County",
            "value": 15.30695771
        }, {
            "fips_code": 47125,
            "state": "TN",
            "area_name": "Montgomery County",
            "value": 6.42678497
        }, {
            "fips_code": 47127,
            "state": "TN",
            "area_name": "Moore County",
            "value": 13.25275657
        }, {
            "fips_code": 47129,
            "state": "TN",
            "area_name": "Morgan County",
            "value": 18.81863669
        }, {
            "fips_code": 47131,
            "state": "TN",
            "area_name": "Obion County",
            "value": 16.9893268
        }, {
            "fips_code": 47133,
            "state": "TN",
            "area_name": "Overton County",
            "value": 18.64278027
        }, {
            "fips_code": 47135,
            "state": "TN",
            "area_name": "Perry County",
            "value": 22.32034632
        }, {
            "fips_code": 47137,
            "state": "TN",
            "area_name": "Pickett County",
            "value": 20.77956281
        }, {
            "fips_code": 47139,
            "state": "TN",
            "area_name": "Polk County",
            "value": 17.68770867
        }, {
            "fips_code": 47141,
            "state": "TN",
            "area_name": "Putnam County",
            "value": 11.12414697
        }, {
            "fips_code": 47143,
            "state": "TN",
            "area_name": "Rhea County",
            "value": 16.87758033
        }, {
            "fips_code": 47145,
            "state": "TN",
            "area_name": "Roane County",
            "value": 9.333367168000001
        }, {
            "fips_code": 47147,
            "state": "TN",
            "area_name": "Robertson County",
            "value": 12.14911839
        }, {
            "fips_code": 47149,
            "state": "TN",
            "area_name": "Rutherford County",
            "value": 7.662927275
        }, {
            "fips_code": 47151,
            "state": "TN",
            "area_name": "Scott County",
            "value": 20.0954686
        }, {
            "fips_code": 47153,
            "state": "TN",
            "area_name": "Sequatchie County",
            "value": 17.92436389
        }, {
            "fips_code": 47155,
            "state": "TN",
            "area_name": "Sevier County",
            "value": 13.431413
        }, {
            "fips_code": 47157,
            "state": "TN",
            "area_name": "Shelby County",
            "value": 10.72462202
        }, {
            "fips_code": 47159,
            "state": "TN",
            "area_name": "Smith County",
            "value": 12.80734741
        }, {
            "fips_code": 47161,
            "state": "TN",
            "area_name": "Stewart County",
            "value": 13.22690992
        }, {
            "fips_code": 47163,
            "state": "TN",
            "area_name": "Sullivan County",
            "value": 11.67481927
        }, {
            "fips_code": 47165,
            "state": "TN",
            "area_name": "Sumner County",
            "value": 9.317920119
        }, {
            "fips_code": 47167,
            "state": "TN",
            "area_name": "Tipton County",
            "value": 11.18255385
        }, {
            "fips_code": 47169,
            "state": "TN",
            "area_name": "Trousdale County",
            "value": 14.20854271
        }, {
            "fips_code": 47171,
            "state": "TN",
            "area_name": "Unicoi County",
            "value": 13.79105365
        }, {
            "fips_code": 47173,
            "state": "TN",
            "area_name": "Union County",
            "value": 20.84808206
        }, {
            "fips_code": 47175,
            "state": "TN",
            "area_name": "Van Buren County",
            "value": 19.08584169
        }, {
            "fips_code": 47177,
            "state": "TN",
            "area_name": "Warren County",
            "value": 16.78759069
        }, {
            "fips_code": 47179,
            "state": "TN",
            "area_name": "Washington County",
            "value": 9.351886399
        }, {
            "fips_code": 47181,
            "state": "TN",
            "area_name": "Wayne County",
            "value": 17.51612903
        }, {
            "fips_code": 47183,
            "state": "TN",
            "area_name": "Weakley County",
            "value": 12.81212008
        }, {
            "fips_code": 47185,
            "state": "TN",
            "area_name": "White County",
            "value": 18.51504738
        }, {
            "fips_code": 47187,
            "state": "TN",
            "area_name": "Williamson County",
            "value": 4.223235372
        }, {
            "fips_code": 47189,
            "state": "TN",
            "area_name": "Wilson County",
            "value": 7.010427571
        }, {
            "fips_code": 48000,
            "state": "TX",
            "area_name": "Texas",
            "value": 15.17863372
        }, {
            "fips_code": 48001,
            "state": "TX",
            "area_name": "Anderson County",
            "value": 17.94033991
        }, {
            "fips_code": 48003,
            "state": "TX",
            "area_name": "Andrews County",
            "value": 23.93558952
        }, {
            "fips_code": 48005,
            "state": "TX",
            "area_name": "Angelina County",
            "value": 16.19603967
        }, {
            "fips_code": 48007,
            "state": "TX",
            "area_name": "Aransas County",
            "value": 11.29111438
        }, {
            "fips_code": 48009,
            "state": "TX",
            "area_name": "Archer County",
            "value": 9.34284766
        }, {
            "fips_code": 48011,
            "state": "TX",
            "area_name": "Armstrong County",
            "value": 7.892720307
        }, {
            "fips_code": 48013,
            "state": "TX",
            "area_name": "Atascosa County",
            "value": 19.33331184
        }, {
            "fips_code": 48015,
            "state": "TX",
            "area_name": "Austin County",
            "value": 12.78640777
        }, {
            "fips_code": 48017,
            "state": "TX",
            "area_name": "Bailey County",
            "value": 28.10623557
        }, {
            "fips_code": 48019,
            "state": "TX",
            "area_name": "Bandera County",
            "value": 9.282753423000001
        }, {
            "fips_code": 48021,
            "state": "TX",
            "area_name": "Bastrop County",
            "value": 15.64117401
        }, {
            "fips_code": 48023,
            "state": "TX",
            "area_name": "Baylor County",
            "value": 16.04191858
        }, {
            "fips_code": 48025,
            "state": "TX",
            "area_name": "Bee County",
            "value": 20.96033011
        }, {
            "fips_code": 48027,
            "state": "TX",
            "area_name": "Bell County",
            "value": 8.897628229
        }, {
            "fips_code": 48029,
            "state": "TX",
            "area_name": "Bexar County",
            "value": 14.62809859
        }, {
            "fips_code": 48031,
            "state": "TX",
            "area_name": "Blanco County",
            "value": 9.847961299
        }, {
            "fips_code": 48033,
            "state": "TX",
            "area_name": "Borden County",
            "value": 7.82122905
        }, {
            "fips_code": 48035,
            "state": "TX",
            "area_name": "Bosque County",
            "value": 10.47931613
        }, {
            "fips_code": 48037,
            "state": "TX",
            "area_name": "Bowie County",
            "value": 10.24676067
        }, {
            "fips_code": 48039,
            "state": "TX",
            "area_name": "Brazoria County",
            "value": 11.19059594
        }, {
            "fips_code": 48041,
            "state": "TX",
            "area_name": "Brazos County",
            "value": 11.28264227
        }, {
            "fips_code": 48043,
            "state": "TX",
            "area_name": "Brewster County",
            "value": 12.01117318
        }, {
            "fips_code": 48045,
            "state": "TX",
            "area_name": "Briscoe County",
            "value": 14.80331263
        }, {
            "fips_code": 48047,
            "state": "TX",
            "area_name": "Brooks County",
            "value": 31.46233383
        }, {
            "fips_code": 48049,
            "state": "TX",
            "area_name": "Brown County",
            "value": 13.05808205
        }, {
            "fips_code": 48051,
            "state": "TX",
            "area_name": "Burleson County",
            "value": 17.1975547
        }, {
            "fips_code": 48053,
            "state": "TX",
            "area_name": "Burnet County",
            "value": 11.40277738
        }, {
            "fips_code": 48055,
            "state": "TX",
            "area_name": "Caldwell County",
            "value": 19.9396692
        }, {
            "fips_code": 48057,
            "state": "TX",
            "area_name": "Calhoun County",
            "value": 16.99552556
        }, {
            "fips_code": 48059,
            "state": "TX",
            "area_name": "Callahan County",
            "value": 10.43202293
        }, {
            "fips_code": 48061,
            "state": "TX",
            "area_name": "Cameron County",
            "value": 30.54213548
        }, {
            "fips_code": 48063,
            "state": "TX",
            "area_name": "Camp County",
            "value": 12.61756443
        }, {
            "fips_code": 48065,
            "state": "TX",
            "area_name": "Carson County",
            "value": 7.480802576
        }, {
            "fips_code": 48067,
            "state": "TX",
            "area_name": "Cass County",
            "value": 13.06886228
        }, {
            "fips_code": 48069,
            "state": "TX",
            "area_name": "Castro County",
            "value": 23.62998685
        }, {
            "fips_code": 48071,
            "state": "TX",
            "area_name": "Chambers County",
            "value": 10.58110192
        }, {
            "fips_code": 48073,
            "state": "TX",
            "area_name": "Cherokee County",
            "value": 19.54343999
        }, {
            "fips_code": 48075,
            "state": "TX",
            "area_name": "Childress County",
            "value": 17.13713714
        }, {
            "fips_code": 48077,
            "state": "TX",
            "area_name": "Clay County",
            "value": 7.97751305
        }, {
            "fips_code": 48079,
            "state": "TX",
            "area_name": "Cochran County",
            "value": 32.62285376
        }, {
            "fips_code": 48081,
            "state": "TX",
            "area_name": "Coke County",
            "value": 16.2456446
        }, {
            "fips_code": 48083,
            "state": "TX",
            "area_name": "Coleman County",
            "value": 14.22168592
        }, {
            "fips_code": 48085,
            "state": "TX",
            "area_name": "Collin County",
            "value": 6.102487371
        }, {
            "fips_code": 48087,
            "state": "TX",
            "area_name": "Collingsworth County",
            "value": 25.43906333
        }, {
            "fips_code": 48089,
            "state": "TX",
            "area_name": "Colorado County",
            "value": 15.63576349
        }, {
            "fips_code": 48091,
            "state": "TX",
            "area_name": "Comal County",
            "value": 6.183444945
        }, {
            "fips_code": 48093,
            "state": "TX",
            "area_name": "Comanche County",
            "value": 14.45527766
        }, {
            "fips_code": 48095,
            "state": "TX",
            "area_name": "Concho County",
            "value": 24.70023981
        }, {
            "fips_code": 48097,
            "state": "TX",
            "area_name": "Cooke County",
            "value": 12.10595837
        }, {
            "fips_code": 48099,
            "state": "TX",
            "area_name": "Coryell County",
            "value": 10.8426067
        }, {
            "fips_code": 48101,
            "state": "TX",
            "area_name": "Cottle County",
            "value": 14.6100691
        }, {
            "fips_code": 48103,
            "state": "TX",
            "area_name": "Crane County",
            "value": 24.47988904
        }, {
            "fips_code": 48105,
            "state": "TX",
            "area_name": "Crockett County",
            "value": 20.33213645
        }, {
            "fips_code": 48107,
            "state": "TX",
            "area_name": "Crosby County",
            "value": 22.84057971
        }, {
            "fips_code": 48109,
            "state": "TX",
            "area_name": "Culberson County",
            "value": 36.28028815
        }, {
            "fips_code": 48111,
            "state": "TX",
            "area_name": "Dallam County",
            "value": 29.63982565
        }, {
            "fips_code": 48113,
            "state": "TX",
            "area_name": "Dallas County",
            "value": 19.27701005
        }, {
            "fips_code": 48115,
            "state": "TX",
            "area_name": "Dawson County",
            "value": 29.15436931
        }, {
            "fips_code": 48117,
            "state": "TX",
            "area_name": "Deaf Smith County",
            "value": 25.76283574
        }, {
            "fips_code": 48119,
            "state": "TX",
            "area_name": "Delta County",
            "value": 12.65077139
        }, {
            "fips_code": 48121,
            "state": "TX",
            "area_name": "Denton County",
            "value": 6.740225923
        }, {
            "fips_code": 48123,
            "state": "TX",
            "area_name": "DeWitt County",
            "value": 16.86634622
        }, {
            "fips_code": 48125,
            "state": "TX",
            "area_name": "Dickens County",
            "value": 16.22544833
        }, {
            "fips_code": 48127,
            "state": "TX",
            "area_name": "Dimmit County",
            "value": 31.41873528
        }, {
            "fips_code": 48129,
            "state": "TX",
            "area_name": "Donley County",
            "value": 14.02843602
        }, {
            "fips_code": 48131,
            "state": "TX",
            "area_name": "Duval County",
            "value": 27.63260836
        }, {
            "fips_code": 48133,
            "state": "TX",
            "area_name": "Eastland County",
            "value": 14.99298622
        }, {
            "fips_code": 48135,
            "state": "TX",
            "area_name": "Ector County",
            "value": 23.67253873
        }, {
            "fips_code": 48137,
            "state": "TX",
            "area_name": "Edwards County",
            "value": 21.61572052
        }, {
            "fips_code": 48139,
            "state": "TX",
            "area_name": "Ellis County",
            "value": 12.57189946
        }, {
            "fips_code": 48141,
            "state": "TX",
            "area_name": "El Paso County",
            "value": 20.24416302
        }, {
            "fips_code": 48143,
            "state": "TX",
            "area_name": "Erath County",
            "value": 12.36410318
        }, {
            "fips_code": 48145,
            "state": "TX",
            "area_name": "Falls County",
            "value": 20.49979175
        }, {
            "fips_code": 48147,
            "state": "TX",
            "area_name": "Fannin County",
            "value": 14.12132633
        }, {
            "fips_code": 48149,
            "state": "TX",
            "area_name": "Fayette County",
            "value": 11.50906555
        }, {
            "fips_code": 48151,
            "state": "TX",
            "area_name": "Fisher County",
            "value": 13.60518293
        }, {
            "fips_code": 48153,
            "state": "TX",
            "area_name": "Floyd County",
            "value": 26.33652223
        }, {
            "fips_code": 48155,
            "state": "TX",
            "area_name": "Foard County",
            "value": 24.27184466
        }, {
            "fips_code": 48157,
            "state": "TX",
            "area_name": "Fort Bend County",
            "value": 8.98735641
        }, {
            "fips_code": 48159,
            "state": "TX",
            "area_name": "Franklin County",
            "value": 9.706293706
        }, {
            "fips_code": 48161,
            "state": "TX",
            "area_name": "Freestone County",
            "value": 17.36739272
        }, {
            "fips_code": 48163,
            "state": "TX",
            "area_name": "Frio County",
            "value": 34.45702306
        }, {
            "fips_code": 48165,
            "state": "TX",
            "area_name": "Gaines County",
            "value": 38.44397612
        }, {
            "fips_code": 48167,
            "state": "TX",
            "area_name": "Galveston County",
            "value": 10.14135895
        }, {
            "fips_code": 48169,
            "state": "TX",
            "area_name": "Garza County",
            "value": 33.79326473
        }, {
            "fips_code": 48171,
            "state": "TX",
            "area_name": "Gillespie County",
            "value": 10.41229193
        }, {
            "fips_code": 48173,
            "state": "TX",
            "area_name": "Glasscock County",
            "value": 24.54873646
        }, {
            "fips_code": 48175,
            "state": "TX",
            "area_name": "Goliad County",
            "value": 16.27586207
        }, {
            "fips_code": 48177,
            "state": "TX",
            "area_name": "Gonzales County",
            "value": 23.54182955
        }, {
            "fips_code": 48179,
            "state": "TX",
            "area_name": "Gray County",
            "value": 18.97675737
        }, {
            "fips_code": 48181,
            "state": "TX",
            "area_name": "Grayson County",
            "value": 9.655347747
        }, {
            "fips_code": 48183,
            "state": "TX",
            "area_name": "Gregg County",
            "value": 14.13492886
        }, {
            "fips_code": 48185,
            "state": "TX",
            "area_name": "Grimes County",
            "value": 18.33457991
        }, {
            "fips_code": 48187,
            "state": "TX",
            "area_name": "Guadalupe County",
            "value": 10.71234415
        }, {
            "fips_code": 48189,
            "state": "TX",
            "area_name": "Hale County",
            "value": 24.7590808
        }, {
            "fips_code": 48191,
            "state": "TX",
            "area_name": "Hall County",
            "value": 17.41093828
        }, {
            "fips_code": 48193,
            "state": "TX",
            "area_name": "Hamilton County",
            "value": 13.08328931
        }, {
            "fips_code": 48195,
            "state": "TX",
            "area_name": "Hansford County",
            "value": 27.2699197
        }, {
            "fips_code": 48197,
            "state": "TX",
            "area_name": "Hardeman County",
            "value": 14.52853096
        }, {
            "fips_code": 48199,
            "state": "TX",
            "area_name": "Hardin County",
            "value": 11.54859099
        }, {
            "fips_code": 48201,
            "state": "TX",
            "area_name": "Harris County",
            "value": 18.13170496
        }, {
            "fips_code": 48203,
            "state": "TX",
            "area_name": "Harrison County",
            "value": 11.93935012
        }, {
            "fips_code": 48205,
            "state": "TX",
            "area_name": "Hartley County",
            "value": 14.01085348
        }, {
            "fips_code": 48207,
            "state": "TX",
            "area_name": "Haskell County",
            "value": 21.13415595
        }, {
            "fips_code": 48209,
            "state": "TX",
            "area_name": "Hays County",
            "value": 9.534400741000001
        }, {
            "fips_code": 48211,
            "state": "TX",
            "area_name": "Hemphill County",
            "value": 14.49846693
        }, {
            "fips_code": 48213,
            "state": "TX",
            "area_name": "Henderson County",
            "value": 15.1589708
        }, {
            "fips_code": 48215,
            "state": "TX",
            "area_name": "Hidalgo County",
            "value": 32.67802177
        }, {
            "fips_code": 48217,
            "state": "TX",
            "area_name": "Hill County",
            "value": 14.55745501
        }, {
            "fips_code": 48219,
            "state": "TX",
            "area_name": "Hockley County",
            "value": 23.45260052
        }, {
            "fips_code": 48221,
            "state": "TX",
            "area_name": "Hood County",
            "value": 8.076870468999999
        }, {
            "fips_code": 48223,
            "state": "TX",
            "area_name": "Hopkins County",
            "value": 13.82589612
        }, {
            "fips_code": 48225,
            "state": "TX",
            "area_name": "Houston County",
            "value": 20.42602681
        }, {
            "fips_code": 48227,
            "state": "TX",
            "area_name": "Howard County",
            "value": 19.45512144
        }, {
            "fips_code": 48229,
            "state": "TX",
            "area_name": "Hudspeth County",
            "value": 50.32651284
        }, {
            "fips_code": 48231,
            "state": "TX",
            "area_name": "Hunt County",
            "value": 12.69904337
        }, {
            "fips_code": 48233,
            "state": "TX",
            "area_name": "Hutchinson County",
            "value": 13.73626374
        }, {
            "fips_code": 48235,
            "state": "TX",
            "area_name": "Irion County",
            "value": 11.31898971
        }, {
            "fips_code": 48237,
            "state": "TX",
            "area_name": "Jack County",
            "value": 18.37193225
        }, {
            "fips_code": 48239,
            "state": "TX",
            "area_name": "Jackson County",
            "value": 19.4251834
        }, {
            "fips_code": 48241,
            "state": "TX",
            "area_name": "Jasper County",
            "value": 15.52277657
        }, {
            "fips_code": 48243,
            "state": "TX",
            "area_name": "Jeff Davis County",
            "value": 13.38994121
        }, {
            "fips_code": 48245,
            "state": "TX",
            "area_name": "Jefferson County",
            "value": 15.13455808
        }, {
            "fips_code": 48247,
            "state": "TX",
            "area_name": "Jim Hogg County",
            "value": 27.16581733
        }, {
            "fips_code": 48249,
            "state": "TX",
            "area_name": "Jim Wells County",
            "value": 21.05726168
        }, {
            "fips_code": 48251,
            "state": "TX",
            "area_name": "Johnson County",
            "value": 13.68462105
        }, {
            "fips_code": 48253,
            "state": "TX",
            "area_name": "Jones County",
            "value": 19.2966822
        }, {
            "fips_code": 48255,
            "state": "TX",
            "area_name": "Karnes County",
            "value": 24.91113744
        }, {
            "fips_code": 48257,
            "state": "TX",
            "area_name": "Kaufman County",
            "value": 13.59742921
        }, {
            "fips_code": 48259,
            "state": "TX",
            "area_name": "Kendall County",
            "value": 6.742539535
        }, {
            "fips_code": 48261,
            "state": "TX",
            "area_name": "Kenedy County",
            "value": 81.55339806000001
        }, {
            "fips_code": 48263,
            "state": "TX",
            "area_name": "Kent County",
            "value": 11.08545035
        }, {
            "fips_code": 48265,
            "state": "TX",
            "area_name": "Kerr County",
            "value": 9.825012462
        }, {
            "fips_code": 48267,
            "state": "TX",
            "area_name": "Kimble County",
            "value": 14.32129514
        }, {
            "fips_code": 48269,
            "state": "TX",
            "area_name": "King County",
            "value": 23.4939759
        }, {
            "fips_code": 48271,
            "state": "TX",
            "area_name": "Kinney County",
            "value": 14.97348021
        }, {
            "fips_code": 48273,
            "state": "TX",
            "area_name": "Kleberg County",
            "value": 19.38746357
        }, {
            "fips_code": 48275,
            "state": "TX",
            "area_name": "Knox County",
            "value": 18.99782135
        }, {
            "fips_code": 48277,
            "state": "TX",
            "area_name": "Lamar County",
            "value": 12.55117558
        }, {
            "fips_code": 48279,
            "state": "TX",
            "area_name": "Lamb County",
            "value": 23.73085735
        }, {
            "fips_code": 48281,
            "state": "TX",
            "area_name": "Lampasas County",
            "value": 8.605535878
        }, {
            "fips_code": 48283,
            "state": "TX",
            "area_name": "La Salle County",
            "value": 31.17532044
        }, {
            "fips_code": 48285,
            "state": "TX",
            "area_name": "Lavaca County",
            "value": 13.6832307
        }, {
            "fips_code": 48287,
            "state": "TX",
            "area_name": "Lee County",
            "value": 12.89300512
        }, {
            "fips_code": 48289,
            "state": "TX",
            "area_name": "Leon County",
            "value": 16.61447616
        }, {
            "fips_code": 48291,
            "state": "TX",
            "area_name": "Liberty County",
            "value": 21.94361734
        }, {
            "fips_code": 48293,
            "state": "TX",
            "area_name": "Limestone County",
            "value": 15.5011655
        }, {
            "fips_code": 48295,
            "state": "TX",
            "area_name": "Lipscomb County",
            "value": 14.12756985
        }, {
            "fips_code": 48297,
            "state": "TX",
            "area_name": "Live Oak County",
            "value": 23.3156138
        }, {
            "fips_code": 48299,
            "state": "TX",
            "area_name": "Llano County",
            "value": 10.85945882
        }, {
            "fips_code": 48301,
            "state": "TX",
            "area_name": "Loving County",
            "value": 5.769230769
        }, {
            "fips_code": 48303,
            "state": "TX",
            "area_name": "Lubbock County",
            "value": 12.12816771
        }, {
            "fips_code": 48305,
            "state": "TX",
            "area_name": "Lynn County",
            "value": 20.95395644
        }, {
            "fips_code": 48307,
            "state": "TX",
            "area_name": "McCulloch County",
            "value": 19.50009189
        }, {
            "fips_code": 48309,
            "state": "TX",
            "area_name": "McLennan County",
            "value": 13.60033031
        }, {
            "fips_code": 48311,
            "state": "TX",
            "area_name": "McMullen County",
            "value": 10.18711019
        }, {
            "fips_code": 48313,
            "state": "TX",
            "area_name": "Madison County",
            "value": 21.7186832
        }, {
            "fips_code": 48315,
            "state": "TX",
            "area_name": "Marion County",
            "value": 12.99085151
        }, {
            "fips_code": 48317,
            "state": "TX",
            "area_name": "Martin County",
            "value": 19.25324675
        }, {
            "fips_code": 48319,
            "state": "TX",
            "area_name": "Mason County",
            "value": 17.62114537
        }, {
            "fips_code": 48321,
            "state": "TX",
            "area_name": "Matagorda County",
            "value": 18.61929957
        }, {
            "fips_code": 48323,
            "state": "TX",
            "area_name": "Maverick County",
            "value": 36.44658664
        }, {
            "fips_code": 48325,
            "state": "TX",
            "area_name": "Medina County",
            "value": 14.1775273
        }, {
            "fips_code": 48327,
            "state": "TX",
            "area_name": "Menard County",
            "value": 17.91143424
        }, {
            "fips_code": 48329,
            "state": "TX",
            "area_name": "Midland County",
            "value": 15.48338659
        }, {
            "fips_code": 48331,
            "state": "TX",
            "area_name": "Milam County",
            "value": 13.93403725
        }, {
            "fips_code": 48333,
            "state": "TX",
            "area_name": "Mills County",
            "value": 14.67808624
        }, {
            "fips_code": 48335,
            "state": "TX",
            "area_name": "Mitchell County",
            "value": 17.75192344
        }, {
            "fips_code": 48337,
            "state": "TX",
            "area_name": "Montague County",
            "value": 13.52086465
        }, {
            "fips_code": 48339,
            "state": "TX",
            "area_name": "Montgomery County",
            "value": 10.40189422
        }, {
            "fips_code": 48341,
            "state": "TX",
            "area_name": "Moore County",
            "value": 32.89221939
        }, {
            "fips_code": 48343,
            "state": "TX",
            "area_name": "Morris County",
            "value": 10.06572541
        }, {
            "fips_code": 48345,
            "state": "TX",
            "area_name": "Motley County",
            "value": 13.41330425
        }, {
            "fips_code": 48347,
            "state": "TX",
            "area_name": "Nacogdoches County",
            "value": 14.67102466
        }, {
            "fips_code": 48349,
            "state": "TX",
            "area_name": "Navarro County",
            "value": 19.82161439
        }, {
            "fips_code": 48351,
            "state": "TX",
            "area_name": "Newton County",
            "value": 17.92978071
        }, {
            "fips_code": 48353,
            "state": "TX",
            "area_name": "Nolan County",
            "value": 17.67123288
        }, {
            "fips_code": 48355,
            "state": "TX",
            "area_name": "Nueces County",
            "value": 15.89297826
        }, {
            "fips_code": 48357,
            "state": "TX",
            "area_name": "Ochiltree County",
            "value": 23.34494774
        }, {
            "fips_code": 48359,
            "state": "TX",
            "area_name": "Oldham County",
            "value": 12.56664128
        }, {
            "fips_code": 48361,
            "state": "TX",
            "area_name": "Orange County",
            "value": 11.04340802
        }, {
            "fips_code": 48363,
            "state": "TX",
            "area_name": "Palo Pinto County",
            "value": 13.13804505
        }, {
            "fips_code": 48365,
            "state": "TX",
            "area_name": "Panola County",
            "value": 17.32524778
        }, {
            "fips_code": 48367,
            "state": "TX",
            "area_name": "Parker County",
            "value": 10.33565833
        }, {
            "fips_code": 48369,
            "state": "TX",
            "area_name": "Parmer County",
            "value": 26.70737586
        }, {
            "fips_code": 48371,
            "state": "TX",
            "area_name": "Pecos County",
            "value": 25.0295858
        }, {
            "fips_code": 48373,
            "state": "TX",
            "area_name": "Polk County",
            "value": 19.61603139
        }, {
            "fips_code": 48375,
            "state": "TX",
            "area_name": "Potter County",
            "value": 23.50863267
        }, {
            "fips_code": 48377,
            "state": "TX",
            "area_name": "Presidio County",
            "value": 47.91100124
        }, {
            "fips_code": 48379,
            "state": "TX",
            "area_name": "Rains County",
            "value": 13.64247312
        }, {
            "fips_code": 48381,
            "state": "TX",
            "area_name": "Randall County",
            "value": 6.281218374
        }, {
            "fips_code": 48383,
            "state": "TX",
            "area_name": "Reagan County",
            "value": 14.8340249
        }, {
            "fips_code": 48385,
            "state": "TX",
            "area_name": "Real County",
            "value": 10.75214538
        }, {
            "fips_code": 48387,
            "state": "TX",
            "area_name": "Red River County",
            "value": 12.2339807
        }, {
            "fips_code": 48389,
            "state": "TX",
            "area_name": "Reeves County",
            "value": 29.52018122
        }, {
            "fips_code": 48391,
            "state": "TX",
            "area_name": "Refugio County",
            "value": 18.77248677
        }, {
            "fips_code": 48393,
            "state": "TX",
            "area_name": "Roberts County",
            "value": 6.428571429
        }, {
            "fips_code": 48395,
            "state": "TX",
            "area_name": "Robertson County",
            "value": 15.05976791
        }, {
            "fips_code": 48397,
            "state": "TX",
            "area_name": "Rockwall County",
            "value": 6.43826234
        }, {
            "fips_code": 48399,
            "state": "TX",
            "area_name": "Runnels County",
            "value": 16.80339877
        }, {
            "fips_code": 48401,
            "state": "TX",
            "area_name": "Rusk County",
            "value": 15.45891038
        }, {
            "fips_code": 48403,
            "state": "TX",
            "area_name": "Sabine County",
            "value": 13.62437352
        }, {
            "fips_code": 48405,
            "state": "TX",
            "area_name": "San Augustine County",
            "value": 18.92450879
        }, {
            "fips_code": 48407,
            "state": "TX",
            "area_name": "San Jacinto County",
            "value": 15.50910317
        }, {
            "fips_code": 48409,
            "state": "TX",
            "area_name": "San Patricio County",
            "value": 18.24547138
        }, {
            "fips_code": 48411,
            "state": "TX",
            "area_name": "San Saba County",
            "value": 18.35651075
        }, {
            "fips_code": 48413,
            "state": "TX",
            "area_name": "Schleicher County",
            "value": 15.07566938
        }, {
            "fips_code": 48415,
            "state": "TX",
            "area_name": "Scurry County",
            "value": 18.98653566
        }, {
            "fips_code": 48417,
            "state": "TX",
            "area_name": "Shackelford County",
            "value": 9.437470943999999
        }, {
            "fips_code": 48419,
            "state": "TX",
            "area_name": "Shelby County",
            "value": 19.33645688
        }, {
            "fips_code": 48421,
            "state": "TX",
            "area_name": "Sherman County",
            "value": 28.399747
        }, {
            "fips_code": 48423,
            "state": "TX",
            "area_name": "Smith County",
            "value": 12.36307656
        }, {
            "fips_code": 48425,
            "state": "TX",
            "area_name": "Somervell County",
            "value": 10.69377619
        }, {
            "fips_code": 48427,
            "state": "TX",
            "area_name": "Starr County",
            "value": 41.24550964
        }, {
            "fips_code": 48429,
            "state": "TX",
            "area_name": "Stephens County",
            "value": 15.14569324
        }, {
            "fips_code": 48431,
            "state": "TX",
            "area_name": "Sterling County",
            "value": 7.577639752
        }, {
            "fips_code": 48433,
            "state": "TX",
            "area_name": "Stonewall County",
            "value": 15.53884712
        }, {
            "fips_code": 48435,
            "state": "TX",
            "area_name": "Sutton County",
            "value": 23.07692308
        }, {
            "fips_code": 48437,
            "state": "TX",
            "area_name": "Swisher County",
            "value": 27.11791334
        }, {
            "fips_code": 48439,
            "state": "TX",
            "area_name": "Tarrant County",
            "value": 13.34850079
        }, {
            "fips_code": 48441,
            "state": "TX",
            "area_name": "Taylor County",
            "value": 10.64497157
        }, {
            "fips_code": 48443,
            "state": "TX",
            "area_name": "Terrell County",
            "value": 13.58024691
        }, {
            "fips_code": 48445,
            "state": "TX",
            "area_name": "Terry County",
            "value": 27.02739354
        }, {
            "fips_code": 48447,
            "state": "TX",
            "area_name": "Throckmorton County",
            "value": 8.955223881
        }, {
            "fips_code": 48449,
            "state": "TX",
            "area_name": "Titus County",
            "value": 20.82201797
        }, {
            "fips_code": 48451,
            "state": "TX",
            "area_name": "Tom Green County",
            "value": 12.56429385
        }, {
            "fips_code": 48453,
            "state": "TX",
            "area_name": "Travis County",
            "value": 9.365507855000001
        }, {
            "fips_code": 48455,
            "state": "TX",
            "area_name": "Trinity County",
            "value": 16.09922667
        }, {
            "fips_code": 48457,
            "state": "TX",
            "area_name": "Tyler County",
            "value": 18.59636872
        }, {
            "fips_code": 48459,
            "state": "TX",
            "area_name": "Upshur County",
            "value": 14.44496219
        }, {
            "fips_code": 48461,
            "state": "TX",
            "area_name": "Upton County",
            "value": 23.9442947
        }, {
            "fips_code": 48463,
            "state": "TX",
            "area_name": "Uvalde County",
            "value": 25.2228802
        }, {
            "fips_code": 48465,
            "state": "TX",
            "area_name": "Val Verde County",
            "value": 29.09021539
        }, {
            "fips_code": 48467,
            "state": "TX",
            "area_name": "Van Zandt County",
            "value": 13.86913055
        }, {
            "fips_code": 48469,
            "state": "TX",
            "area_name": "Victoria County",
            "value": 16.36339265
        }, {
            "fips_code": 48471,
            "state": "TX",
            "area_name": "Walker County",
            "value": 14.14419483
        }, {
            "fips_code": 48473,
            "state": "TX",
            "area_name": "Waller County",
            "value": 12.48157406
        }, {
            "fips_code": 48475,
            "state": "TX",
            "area_name": "Ward County",
            "value": 21.2831672
        }, {
            "fips_code": 48477,
            "state": "TX",
            "area_name": "Washington County",
            "value": 10.87477406
        }, {
            "fips_code": 48479,
            "state": "TX",
            "area_name": "Webb County",
            "value": 31.17904047
        }, {
            "fips_code": 48481,
            "state": "TX",
            "area_name": "Wharton County",
            "value": 19.47242743
        }, {
            "fips_code": 48483,
            "state": "TX",
            "area_name": "Wheeler County",
            "value": 18.64904552
        }, {
            "fips_code": 48485,
            "state": "TX",
            "area_name": "Wichita County",
            "value": 11.90909859
        }, {
            "fips_code": 48487,
            "state": "TX",
            "area_name": "Wilbarger County",
            "value": 21.43921164
        }, {
            "fips_code": 48489,
            "state": "TX",
            "area_name": "Willacy County",
            "value": 31.46179914
        }, {
            "fips_code": 48491,
            "state": "TX",
            "area_name": "Williamson County",
            "value": 5.993944591
        }, {
            "fips_code": 48493,
            "state": "TX",
            "area_name": "Wilson County",
            "value": 10.66575277
        }, {
            "fips_code": 48495,
            "state": "TX",
            "area_name": "Winkler County",
            "value": 28.27213823
        }, {
            "fips_code": 48497,
            "state": "TX",
            "area_name": "Wise County",
            "value": 14.12194535
        }, {
            "fips_code": 48499,
            "state": "TX",
            "area_name": "Wood County",
            "value": 13.8467727
        }, {
            "fips_code": 48501,
            "state": "TX",
            "area_name": "Yoakum County",
            "value": 27.09443615
        }, {
            "fips_code": 48503,
            "state": "TX",
            "area_name": "Young County",
            "value": 13.24855119
        }, {
            "fips_code": 48505,
            "state": "TX",
            "area_name": "Zapata County",
            "value": 31.7552989
        }, {
            "fips_code": 48507,
            "state": "TX",
            "area_name": "Zavala County",
            "value": 24.42631311
        }, {
            "fips_code": 49000,
            "state": "UT",
            "area_name": "Utah",
            "value": 6.894518852
        }, {
            "fips_code": 49001,
            "state": "UT",
            "area_name": "Beaver County",
            "value": 9.265175719
        }, {
            "fips_code": 49003,
            "state": "UT",
            "area_name": "Box Elder County",
            "value": 6.279309836
        }, {
            "fips_code": 49005,
            "state": "UT",
            "area_name": "Cache County",
            "value": 5.837091277
        }, {
            "fips_code": 49007,
            "state": "UT",
            "area_name": "Carbon County",
            "value": 8.523290386999999
        }, {
            "fips_code": 49009,
            "state": "UT",
            "area_name": "Daggett County",
            "value": 4.249291785
        }, {
            "fips_code": 49011,
            "state": "UT",
            "area_name": "Davis County",
            "value": 4.316243566
        }, {
            "fips_code": 49013,
            "state": "UT",
            "area_name": "Duchesne County",
            "value": 10.23384244
        }, {
            "fips_code": 49015,
            "state": "UT",
            "area_name": "Emery County",
            "value": 5.751570807
        }, {
            "fips_code": 49017,
            "state": "UT",
            "area_name": "Garfield County",
            "value": 4.821327283
        }, {
            "fips_code": 49019,
            "state": "UT",
            "area_name": "Grand County",
            "value": 6.238480079
        }, {
            "fips_code": 49021,
            "state": "UT",
            "area_name": "Iron County",
            "value": 6.667304686
        }, {
            "fips_code": 49023,
            "state": "UT",
            "area_name": "Juab County",
            "value": 7.480916031
        }, {
            "fips_code": 49025,
            "state": "UT",
            "area_name": "Kane County",
            "value": 7.304875871
        }, {
            "fips_code": 49027,
            "state": "UT",
            "area_name": "Millard County",
            "value": 10.26722925
        }, {
            "fips_code": 49029,
            "state": "UT",
            "area_name": "Morgan County",
            "value": 2.163355408
        }, {
            "fips_code": 49031,
            "state": "UT",
            "area_name": "Piute County",
            "value": 10.80222399
        }, {
            "fips_code": 49033,
            "state": "UT",
            "area_name": "Rich County",
            "value": 3.162853297
        }, {
            "fips_code": 49035,
            "state": "UT",
            "area_name": "Salt Lake County",
            "value": 8.199408369
        }, {
            "fips_code": 49037,
            "state": "UT",
            "area_name": "San Juan County",
            "value": 13.44956413
        }, {
            "fips_code": 49039,
            "state": "UT",
            "area_name": "Sanpete County",
            "value": 9.008168028
        }, {
            "fips_code": 49041,
            "state": "UT",
            "area_name": "Sevier County",
            "value": 7.640017733
        }, {
            "fips_code": 49043,
            "state": "UT",
            "area_name": "Summit County",
            "value": 4.963990866
        }, {
            "fips_code": 49045,
            "state": "UT",
            "area_name": "Tooele County",
            "value": 7.625131592
        }, {
            "fips_code": 49047,
            "state": "UT",
            "area_name": "Uintah County",
            "value": 12.41939336
        }, {
            "fips_code": 49049,
            "state": "UT",
            "area_name": "Utah County",
            "value": 4.874927105
        }, {
            "fips_code": 49051,
            "state": "UT",
            "area_name": "Wasatch County",
            "value": 3.942059982
        }, {
            "fips_code": 49053,
            "state": "UT",
            "area_name": "Washington County",
            "value": 6.307141681
        }, {
            "fips_code": 49055,
            "state": "UT",
            "area_name": "Wayne County",
            "value": 8.314479638
        }, {
            "fips_code": 49057,
            "state": "UT",
            "area_name": "Weber County",
            "value": 8.180795709
        }, {
            "fips_code": 50000,
            "state": "VT",
            "area_name": "Vermont",
            "value": 6.142414234
        }, {
            "fips_code": 50001,
            "state": "VT",
            "area_name": "Addison County",
            "value": 5.676133303
        }, {
            "fips_code": 50003,
            "state": "VT",
            "area_name": "Bennington County",
            "value": 5.993453478
        }, {
            "fips_code": 50005,
            "state": "VT",
            "area_name": "Caledonia County",
            "value": 7.140889052
        }, {
            "fips_code": 50007,
            "state": "VT",
            "area_name": "Chittenden County",
            "value": 4.986687774
        }, {
            "fips_code": 50009,
            "state": "VT",
            "area_name": "Essex County",
            "value": 10.24797016
        }, {
            "fips_code": 50011,
            "state": "VT",
            "area_name": "Franklin County",
            "value": 8.290333677
        }, {
            "fips_code": 50013,
            "state": "VT",
            "area_name": "Grand Isle County",
            "value": 5.184373859
        }, {
            "fips_code": 50015,
            "state": "VT",
            "area_name": "Lamoille County",
            "value": 6.630106937
        }, {
            "fips_code": 50017,
            "state": "VT",
            "area_name": "Orange County",
            "value": 6.41849711
        }, {
            "fips_code": 50019,
            "state": "VT",
            "area_name": "Orleans County",
            "value": 8.780609695000001
        }, {
            "fips_code": 50021,
            "state": "VT",
            "area_name": "Rutland County",
            "value": 6.272704709
        }, {
            "fips_code": 50023,
            "state": "VT",
            "area_name": "Washington County",
            "value": 5.393937973
        }, {
            "fips_code": 50025,
            "state": "VT",
            "area_name": "Windham County",
            "value": 6.321145983
        }, {
            "fips_code": 50027,
            "state": "VT",
            "area_name": "Windsor County",
            "value": 5.838080682
        }, {
            "fips_code": 51000,
            "state": "VA",
            "area_name": "Virginia",
            "value": 9.17292093
        }, {
            "fips_code": 51001,
            "state": "VA",
            "area_name": "Accomack County",
            "value": 17.72385006
        }, {
            "fips_code": 51003,
            "state": "VA",
            "area_name": "Albemarle County",
            "value": 6.680372699
        }, {
            "fips_code": 51005,
            "state": "VA",
            "area_name": "Alleghany County",
            "value": 10.6964731
        }, {
            "fips_code": 51007,
            "state": "VA",
            "area_name": "Amelia County",
            "value": 14.54488583
        }, {
            "fips_code": 51009,
            "state": "VA",
            "area_name": "Amherst County",
            "value": 12.34066952
        }, {
            "fips_code": 51011,
            "state": "VA",
            "area_name": "Appomattox County",
            "value": 11.10719634
        }, {
            "fips_code": 51013,
            "state": "VA",
            "area_name": "Arlington County",
            "value": 5.107305291
        }, {
            "fips_code": 51015,
            "state": "VA",
            "area_name": "Augusta County",
            "value": 10.55681176
        }, {
            "fips_code": 51017,
            "state": "VA",
            "area_name": "Bath County",
            "value": 14.84703059
        }, {
            "fips_code": 51019,
            "state": "VA",
            "area_name": "Bedford County",
            "value": 7.668893063
        }, {
            "fips_code": 51021,
            "state": "VA",
            "area_name": "Bland County",
            "value": 11.09308457
        }, {
            "fips_code": 51023,
            "state": "VA",
            "area_name": "Botetourt County",
            "value": 6.188358933
        }, {
            "fips_code": 51025,
            "state": "VA",
            "area_name": "Brunswick County",
            "value": 21.59177135
        }, {
            "fips_code": 51027,
            "state": "VA",
            "area_name": "Buchanan County",
            "value": 26.27859162
        }, {
            "fips_code": 51029,
            "state": "VA",
            "area_name": "Buckingham County",
            "value": 19.17102552
        }, {
            "fips_code": 51031,
            "state": "VA",
            "area_name": "Campbell County",
            "value": 10.56711953
        }, {
            "fips_code": 51033,
            "state": "VA",
            "area_name": "Caroline County",
            "value": 11.33469059
        }, {
            "fips_code": 51035,
            "state": "VA",
            "area_name": "Carroll County",
            "value": 18.44522645
        }, {
            "fips_code": 51036,
            "state": "VA",
            "area_name": "Charles City County",
            "value": 17.10870377
        }, {
            "fips_code": 51037,
            "state": "VA",
            "area_name": "Charlotte County",
            "value": 15.51005395
        }, {
            "fips_code": 51041,
            "state": "VA",
            "area_name": "Chesterfield County",
            "value": 7.428481959
        }, {
            "fips_code": 51043,
            "state": "VA",
            "area_name": "Clarke County",
            "value": 8.321710832000001
        }, {
            "fips_code": 51045,
            "state": "VA",
            "area_name": "Craig County",
            "value": 11.37656428
        }, {
            "fips_code": 51047,
            "state": "VA",
            "area_name": "Culpeper County",
            "value": 11.12443949
        }, {
            "fips_code": 51049,
            "state": "VA",
            "area_name": "Cumberland County",
            "value": 11.9673492
        }, {
            "fips_code": 51051,
            "state": "VA",
            "area_name": "Dickenson County",
            "value": 20.02465156
        }, {
            "fips_code": 51053,
            "state": "VA",
            "area_name": "Dinwiddie County",
            "value": 11.29949188
        }, {
            "fips_code": 51057,
            "state": "VA",
            "area_name": "Essex County",
            "value": 15.34253712
        }, {
            "fips_code": 51059,
            "state": "VA",
            "area_name": "Fairfax County",
            "value": 6.63522628
        }, {
            "fips_code": 51061,
            "state": "VA",
            "area_name": "Fauquier County",
            "value": 7.160434548
        }, {
            "fips_code": 51063,
            "state": "VA",
            "area_name": "Floyd County",
            "value": 9.800378592
        }, {
            "fips_code": 51065,
            "state": "VA",
            "area_name": "Fluvanna County",
            "value": 6.513793621
        }, {
            "fips_code": 51067,
            "state": "VA",
            "area_name": "Franklin County",
            "value": 10.8680947
        }, {
            "fips_code": 51069,
            "state": "VA",
            "area_name": "Frederick County",
            "value": 11.64833059
        }, {
            "fips_code": 51071,
            "state": "VA",
            "area_name": "Giles County",
            "value": 10.09099106
        }, {
            "fips_code": 51073,
            "state": "VA",
            "area_name": "Gloucester County",
            "value": 10.56659934
        }, {
            "fips_code": 51075,
            "state": "VA",
            "area_name": "Goochland County",
            "value": 5.992795546
        }, {
            "fips_code": 51077,
            "state": "VA",
            "area_name": "Grayson County",
            "value": 17.33607964
        }, {
            "fips_code": 51079,
            "state": "VA",
            "area_name": "Greene County",
            "value": 11.6188452
        }, {
            "fips_code": 51081,
            "state": "VA",
            "area_name": "Greensville County",
            "value": 22.804629
        }, {
            "fips_code": 51083,
            "state": "VA",
            "area_name": "Halifax County",
            "value": 17.27136674
        }, {
            "fips_code": 51085,
            "state": "VA",
            "area_name": "Hanover County",
            "value": 6.188040498
        }, {
            "fips_code": 51087,
            "state": "VA",
            "area_name": "Henrico County",
            "value": 7.284484623
        }, {
            "fips_code": 51089,
            "state": "VA",
            "area_name": "Henry County",
            "value": 19.13080642
        }, {
            "fips_code": 51091,
            "state": "VA",
            "area_name": "Highland County",
            "value": 7.879146919
        }, {
            "fips_code": 51093,
            "state": "VA",
            "area_name": "Isle of Wight County",
            "value": 9.039280644
        }, {
            "fips_code": 51095,
            "state": "VA",
            "area_name": "James City County",
            "value": 4.419203124
        }, {
            "fips_code": 51097,
            "state": "VA",
            "area_name": "King and Queen County",
            "value": 11.73664122
        }, {
            "fips_code": 51099,
            "state": "VA",
            "area_name": "King George County",
            "value": 7.710611297
        }, {
            "fips_code": 51101,
            "state": "VA",
            "area_name": "King William County",
            "value": 7.418446763
        }, {
            "fips_code": 51103,
            "state": "VA",
            "area_name": "Lancaster County",
            "value": 10.09438306
        }, {
            "fips_code": 51105,
            "state": "VA",
            "area_name": "Lee County",
            "value": 20.20154399
        }, {
            "fips_code": 51107,
            "state": "VA",
            "area_name": "Loudoun County",
            "value": 5.933944019
        }, {
            "fips_code": 51109,
            "state": "VA",
            "area_name": "Louisa County",
            "value": 10.83631271
        }, {
            "fips_code": 51111,
            "state": "VA",
            "area_name": "Lunenburg County",
            "value": 20.27120202
        }, {
            "fips_code": 51113,
            "state": "VA",
            "area_name": "Madison County",
            "value": 12.35876412
        }, {
            "fips_code": 51115,
            "state": "VA",
            "area_name": "Mathews County",
            "value": 7.363678732
        }, {
            "fips_code": 51117,
            "state": "VA",
            "area_name": "Mecklenburg County",
            "value": 13.5340349
        }, {
            "fips_code": 51119,
            "state": "VA",
            "area_name": "Middlesex County",
            "value": 12.0526191
        }, {
            "fips_code": 51121,
            "state": "VA",
            "area_name": "Montgomery County",
            "value": 5.813522529
        }, {
            "fips_code": 51125,
            "state": "VA",
            "area_name": "Nelson County",
            "value": 15.50533584
        }, {
            "fips_code": 51127,
            "state": "VA",
            "area_name": "New Kent County",
            "value": 6.720495386
        }, {
            "fips_code": 51131,
            "state": "VA",
            "area_name": "Northampton County",
            "value": 14.13485865
        }, {
            "fips_code": 51133,
            "state": "VA",
            "area_name": "Northumberland County",
            "value": 9.594928548
        }, {
            "fips_code": 51135,
            "state": "VA",
            "area_name": "Nottoway County",
            "value": 16.66075545
        }, {
            "fips_code": 51137,
            "state": "VA",
            "area_name": "Orange County",
            "value": 10.37861046
        }, {
            "fips_code": 51139,
            "state": "VA",
            "area_name": "Page County",
            "value": 16.97950253
        }, {
            "fips_code": 51141,
            "state": "VA",
            "area_name": "Patrick County",
            "value": 16.79558011
        }, {
            "fips_code": 51143,
            "state": "VA",
            "area_name": "Pittsylvania County",
            "value": 15.94556255
        }, {
            "fips_code": 51145,
            "state": "VA",
            "area_name": "Powhatan County",
            "value": 8.639021797
        }, {
            "fips_code": 51147,
            "state": "VA",
            "area_name": "Prince Edward County",
            "value": 14.31300748
        }, {
            "fips_code": 51149,
            "state": "VA",
            "area_name": "Prince George County",
            "value": 11.273064
        }, {
            "fips_code": 51153,
            "state": "VA",
            "area_name": "Prince William County",
            "value": 10.37427183
        }, {
            "fips_code": 51155,
            "state": "VA",
            "area_name": "Pulaski County",
            "value": 10.58209365
        }, {
            "fips_code": 51157,
            "state": "VA",
            "area_name": "Rappahannock County",
            "value": 8.260637351
        }, {
            "fips_code": 51159,
            "state": "VA",
            "area_name": "Richmond County",
            "value": 22.18181818
        }, {
            "fips_code": 51161,
            "state": "VA",
            "area_name": "Roanoke County",
            "value": 6.493450534
        }, {
            "fips_code": 51163,
            "state": "VA",
            "area_name": "Rockbridge County",
            "value": 10.81240073
        }, {
            "fips_code": 51165,
            "state": "VA",
            "area_name": "Rockingham County",
            "value": 13.79920157
        }, {
            "fips_code": 51167,
            "state": "VA",
            "area_name": "Russell County",
            "value": 18.24419149
        }, {
            "fips_code": 51169,
            "state": "VA",
            "area_name": "Scott County",
            "value": 18.00211351
        }, {
            "fips_code": 51171,
            "state": "VA",
            "area_name": "Shenandoah County",
            "value": 11.01144252
        }, {
            "fips_code": 51173,
            "state": "VA",
            "area_name": "Smyth County",
            "value": 15.8410427
        }, {
            "fips_code": 51175,
            "state": "VA",
            "area_name": "Southampton County",
            "value": 14.49697513
        }, {
            "fips_code": 51177,
            "state": "VA",
            "area_name": "Spotsylvania County",
            "value": 8.419792498
        }, {
            "fips_code": 51179,
            "state": "VA",
            "area_name": "Stafford County",
            "value": 6.793772039
        }, {
            "fips_code": 51181,
            "state": "VA",
            "area_name": "Surry County",
            "value": 14.62626263
        }, {
            "fips_code": 51183,
            "state": "VA",
            "area_name": "Sussex County",
            "value": 20.16476085
        }, {
            "fips_code": 51185,
            "state": "VA",
            "area_name": "Tazewell County",
            "value": 15.17348875
        }, {
            "fips_code": 51187,
            "state": "VA",
            "area_name": "Warren County",
            "value": 11.67732765
        }, {
            "fips_code": 51191,
            "state": "VA",
            "area_name": "Washington County",
            "value": 12.10957948
        }, {
            "fips_code": 51193,
            "state": "VA",
            "area_name": "Westmoreland County",
            "value": 16.64359105
        }, {
            "fips_code": 51195,
            "state": "VA",
            "area_name": "Wise County",
            "value": 21.83719421
        }, {
            "fips_code": 51197,
            "state": "VA",
            "area_name": "Wythe County",
            "value": 11.14684845
        }, {
            "fips_code": 51199,
            "state": "VA",
            "area_name": "York County",
            "value": 4.758775649
        }, {
            "fips_code": 51510,
            "state": "VA",
            "area_name": "Alexandria city",
            "value": 6.850617665
        }, {
            "fips_code": 51520,
            "state": "VA",
            "area_name": "Bristol city",
            "value": 13.21998048
        }, {
            "fips_code": 51530,
            "state": "VA",
            "area_name": "Buena Vista city",
            "value": 20.15144113
        }, {
            "fips_code": 51540,
            "state": "VA",
            "area_name": "Charlottesville city",
            "value": 7.617116069
        }, {
            "fips_code": 51550,
            "state": "VA",
            "area_name": "Chesapeake city",
            "value": 6.499395587
        }, {
            "fips_code": 51570,
            "state": "VA",
            "area_name": "Colonial Heights city",
            "value": 8.420391171
        }, {
            "fips_code": 51580,
            "state": "VA",
            "area_name": "Covington city",
            "value": 11.01570167
        }, {
            "fips_code": 51590,
            "state": "VA",
            "area_name": "Danville city",
            "value": 15.82077448
        }, {
            "fips_code": 51595,
            "state": "VA",
            "area_name": "Emporia city",
            "value": 25.36534447
        }, {
            "fips_code": 51600,
            "state": "VA",
            "area_name": "Fairfax city",
            "value": 7.190461633
        }, {
            "fips_code": 51610,
            "state": "VA",
            "area_name": "Falls Church city",
            "value": 2.68442623
        }, {
            "fips_code": 51620,
            "state": "VA",
            "area_name": "Franklin city",
            "value": 16.24198301
        }, {
            "fips_code": 51630,
            "state": "VA",
            "area_name": "Fredericksburg city",
            "value": 8.942945076000001
        }, {
            "fips_code": 51640,
            "state": "VA",
            "area_name": "Galax city",
            "value": 21.33918771
        }, {
            "fips_code": 51650,
            "state": "VA",
            "area_name": "Hampton city",
            "value": 7.437430448
        }, {
            "fips_code": 51660,
            "state": "VA",
            "area_name": "Harrisonburg city",
            "value": 16.6340214
        }, {
            "fips_code": 51670,
            "state": "VA",
            "area_name": "Hopewell city",
            "value": 14.79352494
        }, {
            "fips_code": 51678,
            "state": "VA",
            "area_name": "Lexington city",
            "value": 3.544542033
        }, {
            "fips_code": 51680,
            "state": "VA",
            "area_name": "Lynchburg city",
            "value": 10.17408998
        }, {
            "fips_code": 51683,
            "state": "VA",
            "area_name": "Manassas city",
            "value": 14.1598035
        }, {
            "fips_code": 51685,
            "state": "VA",
            "area_name": "Manassas Park city",
            "value": 20.43260636
        }, {
            "fips_code": 51690,
            "state": "VA",
            "area_name": "Martinsville city",
            "value": 11.67358851
        }, {
            "fips_code": 51700,
            "state": "VA",
            "area_name": "Newport News city",
            "value": 8.439180303000001
        }, {
            "fips_code": 51710,
            "state": "VA",
            "area_name": "Norfolk city",
            "value": 11.13950571
        }, {
            "fips_code": 51720,
            "state": "VA",
            "area_name": "Norton city",
            "value": 11.2528132
        }, {
            "fips_code": 51730,
            "state": "VA",
            "area_name": "Petersburg city",
            "value": 15.14664349
        }, {
            "fips_code": 51735,
            "state": "VA",
            "area_name": "Poquoson city",
            "value": 4.423054887
        }, {
            "fips_code": 51740,
            "state": "VA",
            "area_name": "Portsmouth city",
            "value": 9.756766642000001
        }, {
            "fips_code": 51750,
            "state": "VA",
            "area_name": "Radford city",
            "value": 7.774655426
        }, {
            "fips_code": 51760,
            "state": "VA",
            "area_name": "Richmond city",
            "value": 12.26369092
        }, {
            "fips_code": 51770,
            "state": "VA",
            "area_name": "Roanoke city",
            "value": 11.72568586
        }, {
            "fips_code": 51775,
            "state": "VA",
            "area_name": "Salem city",
            "value": 6.791023025
        }, {
            "fips_code": 51790,
            "state": "VA",
            "area_name": "Staunton city",
            "value": 8.348417531000001
        }, {
            "fips_code": 51800,
            "state": "VA",
            "area_name": "Suffolk city",
            "value": 9.191106906
        }, {
            "fips_code": 51810,
            "state": "VA",
            "area_name": "Virginia Beach city",
            "value": 5.548167473
        }, {
            "fips_code": 51820,
            "state": "VA",
            "area_name": "Waynesboro city",
            "value": 12.33996011
        }, {
            "fips_code": 51830,
            "state": "VA",
            "area_name": "Williamsburg city",
            "value": 6.644059282
        }, {
            "fips_code": 51840,
            "state": "VA",
            "area_name": "Winchester city",
            "value": 12.724376
        }, {
            "fips_code": 53000,
            "state": "WA",
            "area_name": "Washington",
            "value": 8.079733235000001
        }, {
            "fips_code": 53001,
            "state": "WA",
            "area_name": "Adams County",
            "value": 31.50907613
        }, {
            "fips_code": 53003,
            "state": "WA",
            "area_name": "Asotin County",
            "value": 8.465739821
        }, {
            "fips_code": 53005,
            "state": "WA",
            "area_name": "Benton County",
            "value": 9.694542114000001
        }, {
            "fips_code": 53007,
            "state": "WA",
            "area_name": "Chelan County",
            "value": 15.2692938
        }, {
            "fips_code": 53009,
            "state": "WA",
            "area_name": "Clallam County",
            "value": 7.119883536
        }, {
            "fips_code": 53011,
            "state": "WA",
            "area_name": "Clark County",
            "value": 6.994771203
        }, {
            "fips_code": 53013,
            "state": "WA",
            "area_name": "Columbia County",
            "value": 8.959632425000001
        }, {
            "fips_code": 53015,
            "state": "WA",
            "area_name": "Cowlitz County",
            "value": 10.06484982
        }, {
            "fips_code": 53017,
            "state": "WA",
            "area_name": "Douglas County",
            "value": 17.91802813
        }, {
            "fips_code": 53019,
            "state": "WA",
            "area_name": "Ferry County",
            "value": 9.804993620999999
        }, {
            "fips_code": 53021,
            "state": "WA",
            "area_name": "Franklin County",
            "value": 24.07058824
        }, {
            "fips_code": 53023,
            "state": "WA",
            "area_name": "Garfield County",
            "value": 6.009615385
        }, {
            "fips_code": 53025,
            "state": "WA",
            "area_name": "Grant County",
            "value": 19.74826389
        }, {
            "fips_code": 53027,
            "state": "WA",
            "area_name": "Grays Harbor County",
            "value": 9.882897954000001
        }, {
            "fips_code": 53029,
            "state": "WA",
            "area_name": "Island County",
            "value": 4.539646029
        }, {
            "fips_code": 53031,
            "state": "WA",
            "area_name": "Jefferson County",
            "value": 3.860059161
        }, {
            "fips_code": 53033,
            "state": "WA",
            "area_name": "King County",
            "value": 6.331713642
        }, {
            "fips_code": 53035,
            "state": "WA",
            "area_name": "Kitsap County",
            "value": 4.79287933
        }, {
            "fips_code": 53037,
            "state": "WA",
            "area_name": "Kittitas County",
            "value": 7.619642726
        }, {
            "fips_code": 53039,
            "state": "WA",
            "area_name": "Klickitat County",
            "value": 9.424520434
        }, {
            "fips_code": 53041,
            "state": "WA",
            "area_name": "Lewis County",
            "value": 10.73820845
        }, {
            "fips_code": 53043,
            "state": "WA",
            "area_name": "Lincoln County",
            "value": 7.705301455
        }, {
            "fips_code": 53045,
            "state": "WA",
            "area_name": "Mason County",
            "value": 9.594608824
        }, {
            "fips_code": 53047,
            "state": "WA",
            "area_name": "Okanogan County",
            "value": 15.05325444
        }, {
            "fips_code": 53049,
            "state": "WA",
            "area_name": "Pacific County",
            "value": 9.670098528
        }, {
            "fips_code": 53051,
            "state": "WA",
            "area_name": "Pend Oreille County",
            "value": 7.217238891
        }, {
            "fips_code": 53053,
            "state": "WA",
            "area_name": "Pierce County",
            "value": 7.924204393
        }, {
            "fips_code": 53055,
            "state": "WA",
            "area_name": "San Juan County",
            "value": 4.288579927
        }, {
            "fips_code": 53057,
            "state": "WA",
            "area_name": "Skagit County",
            "value": 8.891192624
        }, {
            "fips_code": 53059,
            "state": "WA",
            "area_name": "Skamania County",
            "value": 7.161803714
        }, {
            "fips_code": 53061,
            "state": "WA",
            "area_name": "Snohomish County",
            "value": 7.138865215
        }, {
            "fips_code": 53063,
            "state": "WA",
            "area_name": "Spokane County",
            "value": 5.839724042
        }, {
            "fips_code": 53065,
            "state": "WA",
            "area_name": "Stevens County",
            "value": 7.638427631
        }, {
            "fips_code": 53067,
            "state": "WA",
            "area_name": "Thurston County",
            "value": 5.816146973
        }, {
            "fips_code": 53069,
            "state": "WA",
            "area_name": "Wahkiakum County",
            "value": 7.227138643
        }, {
            "fips_code": 53071,
            "state": "WA",
            "area_name": "Walla Walla County",
            "value": 11.61511187
        }, {
            "fips_code": 53073,
            "state": "WA",
            "area_name": "Whatcom County",
            "value": 6.800694301
        }, {
            "fips_code": 53075,
            "state": "WA",
            "area_name": "Whitman County",
            "value": 4.650294532
        }, {
            "fips_code": 53077,
            "state": "WA",
            "area_name": "Yakima County",
            "value": 26.24001342
        }, {
            "fips_code": 54000,
            "state": "WV",
            "area_name": "West Virginia",
            "value": 11.93984885
        }, {
            "fips_code": 54001,
            "state": "WV",
            "area_name": "Barbour County",
            "value": 12.19031532
        }, {
            "fips_code": 54003,
            "state": "WV",
            "area_name": "Berkeley County",
            "value": 9.606384908000001
        }, {
            "fips_code": 54005,
            "state": "WV",
            "area_name": "Boone County",
            "value": 15.92587876
        }, {
            "fips_code": 54007,
            "state": "WV",
            "area_name": "Braxton County",
            "value": 17.94489948
        }, {
            "fips_code": 54009,
            "state": "WV",
            "area_name": "Brooke County",
            "value": 7.052573731
        }, {
            "fips_code": 54011,
            "state": "WV",
            "area_name": "Cabell County",
            "value": 10.73396378
        }, {
            "fips_code": 54013,
            "state": "WV",
            "area_name": "Calhoun County",
            "value": 15.41330019
        }, {
            "fips_code": 54015,
            "state": "WV",
            "area_name": "Clay County",
            "value": 19.93231208
        }, {
            "fips_code": 54017,
            "state": "WV",
            "area_name": "Doddridge County",
            "value": 16.50959273
        }, {
            "fips_code": 54019,
            "state": "WV",
            "area_name": "Fayette County",
            "value": 15.6197059
        }, {
            "fips_code": 54021,
            "state": "WV",
            "area_name": "Gilmer County",
            "value": 15.78438949
        }, {
            "fips_code": 54023,
            "state": "WV",
            "area_name": "Grant County",
            "value": 15.957578
        }, {
            "fips_code": 54025,
            "state": "WV",
            "area_name": "Greenbrier County",
            "value": 12.86004882
        }, {
            "fips_code": 54027,
            "state": "WV",
            "area_name": "Hampshire County",
            "value": 12.87914413
        }, {
            "fips_code": 54029,
            "state": "WV",
            "area_name": "Hancock County",
            "value": 10.05266562
        }, {
            "fips_code": 54031,
            "state": "WV",
            "area_name": "Hardy County",
            "value": 15.75884766
        }, {
            "fips_code": 54033,
            "state": "WV",
            "area_name": "Harrison County",
            "value": 11.58949536
        }, {
            "fips_code": 54035,
            "state": "WV",
            "area_name": "Jackson County",
            "value": 10.63734291
        }, {
            "fips_code": 54037,
            "state": "WV",
            "area_name": "Jefferson County",
            "value": 9.607926538999999
        }, {
            "fips_code": 54039,
            "state": "WV",
            "area_name": "Kanawha County",
            "value": 9.719470068
        }, {
            "fips_code": 54041,
            "state": "WV",
            "area_name": "Lewis County",
            "value": 12.56145526
        }, {
            "fips_code": 54043,
            "state": "WV",
            "area_name": "Lincoln County",
            "value": 19.01312192
        }, {
            "fips_code": 54045,
            "state": "WV",
            "area_name": "Logan County",
            "value": 19.67213115
        }, {
            "fips_code": 54047,
            "state": "WV",
            "area_name": "McDowell County",
            "value": 25.4139015
        }, {
            "fips_code": 54049,
            "state": "WV",
            "area_name": "Marion County",
            "value": 8.850678733000001
        }, {
            "fips_code": 54051,
            "state": "WV",
            "area_name": "Marshall County",
            "value": 7.333537895
        }, {
            "fips_code": 54053,
            "state": "WV",
            "area_name": "Mason County",
            "value": 13.46536785
        }, {
            "fips_code": 54055,
            "state": "WV",
            "area_name": "Mercer County",
            "value": 14.63039622
        }, {
            "fips_code": 54057,
            "state": "WV",
            "area_name": "Mineral County",
            "value": 6.456749538
        }, {
            "fips_code": 54059,
            "state": "WV",
            "area_name": "Mingo County",
            "value": 24.24349464
        }, {
            "fips_code": 54061,
            "state": "WV",
            "area_name": "Monongalia County",
            "value": 6.708851224
        }, {
            "fips_code": 54063,
            "state": "WV",
            "area_name": "Monroe County",
            "value": 11.5720524
        }, {
            "fips_code": 54065,
            "state": "WV",
            "area_name": "Morgan County",
            "value": 10.56577524
        }, {
            "fips_code": 54067,
            "state": "WV",
            "area_name": "Nicholas County",
            "value": 11.22812791
        }, {
            "fips_code": 54069,
            "state": "WV",
            "area_name": "Ohio County",
            "value": 7.024184364
        }, {
            "fips_code": 54071,
            "state": "WV",
            "area_name": "Pendleton County",
            "value": 16.98595147
        }, {
            "fips_code": 54073,
            "state": "WV",
            "area_name": "Pleasants County",
            "value": 10.82149919
        }, {
            "fips_code": 54075,
            "state": "WV",
            "area_name": "Pocahontas County",
            "value": 17.48446189
        }, {
            "fips_code": 54077,
            "state": "WV",
            "area_name": "Preston County",
            "value": 12.97790661
        }, {
            "fips_code": 54079,
            "state": "WV",
            "area_name": "Putnam County",
            "value": 7.529243374
        }, {
            "fips_code": 54081,
            "state": "WV",
            "area_name": "Raleigh County",
            "value": 13.46632018
        }, {
            "fips_code": 54083,
            "state": "WV",
            "area_name": "Randolph County",
            "value": 11.50670293
        }, {
            "fips_code": 54085,
            "state": "WV",
            "area_name": "Ritchie County",
            "value": 18.55588838
        }, {
            "fips_code": 54087,
            "state": "WV",
            "area_name": "Roane County",
            "value": 19.7260274
        }, {
            "fips_code": 54089,
            "state": "WV",
            "area_name": "Summers County",
            "value": 15.63060686
        }, {
            "fips_code": 54091,
            "state": "WV",
            "area_name": "Taylor County",
            "value": 11.48725442
        }, {
            "fips_code": 54093,
            "state": "WV",
            "area_name": "Tucker County",
            "value": 12.26345083
        }, {
            "fips_code": 54095,
            "state": "WV",
            "area_name": "Tyler County",
            "value": 9.821284817
        }, {
            "fips_code": 54097,
            "state": "WV",
            "area_name": "Upshur County",
            "value": 13.10605599
        }, {
            "fips_code": 54099,
            "state": "WV",
            "area_name": "Wayne County",
            "value": 18.27728864
        }, {
            "fips_code": 54101,
            "state": "WV",
            "area_name": "Webster County",
            "value": 21.25389792
        }, {
            "fips_code": 54103,
            "state": "WV",
            "area_name": "Wetzel County",
            "value": 11.06152678
        }, {
            "fips_code": 54105,
            "state": "WV",
            "area_name": "Wirt County",
            "value": 18.14661848
        }, {
            "fips_code": 54107,
            "state": "WV",
            "area_name": "Wood County",
            "value": 9.32081522
        }, {
            "fips_code": 54109,
            "state": "WV",
            "area_name": "Wyoming County",
            "value": 22.56851498
        }, {
            "fips_code": 55000,
            "state": "WI",
            "area_name": "Wisconsin",
            "value": 7.082852805
        }, {
            "fips_code": 55001,
            "state": "WI",
            "area_name": "Adams County",
            "value": 12.14424714
        }, {
            "fips_code": 55003,
            "state": "WI",
            "area_name": "Ashland County",
            "value": 6.225009088
        }, {
            "fips_code": 55005,
            "state": "WI",
            "area_name": "Barron County",
            "value": 9.476995673999999
        }, {
            "fips_code": 55007,
            "state": "WI",
            "area_name": "Bayfield County",
            "value": 4.572031834
        }, {
            "fips_code": 55009,
            "state": "WI",
            "area_name": "Brown County",
            "value": 7.622260637
        }, {
            "fips_code": 55011,
            "state": "WI",
            "area_name": "Buffalo County",
            "value": 8.442293833000001
        }, {
            "fips_code": 55013,
            "state": "WI",
            "area_name": "Burnett County",
            "value": 7.325599873
        }, {
            "fips_code": 55015,
            "state": "WI",
            "area_name": "Calumet County",
            "value": 5.211545407
        }, {
            "fips_code": 55017,
            "state": "WI",
            "area_name": "Chippewa County",
            "value": 7.281252007
        }, {
            "fips_code": 55019,
            "state": "WI",
            "area_name": "Clark County",
            "value": 17.18931475
        }, {
            "fips_code": 55021,
            "state": "WI",
            "area_name": "Columbia County",
            "value": 6.00620088
        }, {
            "fips_code": 55023,
            "state": "WI",
            "area_name": "Crawford County",
            "value": 7.676560901
        }, {
            "fips_code": 55025,
            "state": "WI",
            "area_name": "Dane County",
            "value": 3.924206475
        }, {
            "fips_code": 55027,
            "state": "WI",
            "area_name": "Dodge County",
            "value": 8.012324271000001
        }, {
            "fips_code": 55029,
            "state": "WI",
            "area_name": "Door County",
            "value": 4.506065858
        }, {
            "fips_code": 55031,
            "state": "WI",
            "area_name": "Douglas County",
            "value": 5.757786781
        }, {
            "fips_code": 55033,
            "state": "WI",
            "area_name": "Dunn County",
            "value": 5.987485616
        }, {
            "fips_code": 55035,
            "state": "WI",
            "area_name": "Eau Claire County",
            "value": 4.479418886
        }, {
            "fips_code": 55037,
            "state": "WI",
            "area_name": "Florence County",
            "value": 8.298524088000001
        }, {
            "fips_code": 55039,
            "state": "WI",
            "area_name": "Fond du Lac County",
            "value": 7.77609474
        }, {
            "fips_code": 55041,
            "state": "WI",
            "area_name": "Forest County",
            "value": 10.04380003
        }, {
            "fips_code": 55043,
            "state": "WI",
            "area_name": "Grant County",
            "value": 7.696101094
        }, {
            "fips_code": 55045,
            "state": "WI",
            "area_name": "Green County",
            "value": 7.16969674
        }, {
            "fips_code": 55047,
            "state": "WI",
            "area_name": "Green Lake County",
            "value": 9.385742042
        }, {
            "fips_code": 55049,
            "state": "WI",
            "area_name": "Iowa County",
            "value": 4.159694
        }, {
            "fips_code": 55051,
            "state": "WI",
            "area_name": "Iron County",
            "value": 4.282478896
        }, {
            "fips_code": 55053,
            "state": "WI",
            "area_name": "Jackson County",
            "value": 9.485714286
        }, {
            "fips_code": 55055,
            "state": "WI",
            "area_name": "Jefferson County",
            "value": 7.521601188
        }, {
            "fips_code": 55057,
            "state": "WI",
            "area_name": "Juneau County",
            "value": 9.661242452
        }, {
            "fips_code": 55059,
            "state": "WI",
            "area_name": "Kenosha County",
            "value": 8.651446286000001
        }, {
            "fips_code": 55061,
            "state": "WI",
            "area_name": "Kewaunee County",
            "value": 6.070549631
        }, {
            "fips_code": 55063,
            "state": "WI",
            "area_name": "La Crosse County",
            "value": 4.341055341
        }, {
            "fips_code": 55065,
            "state": "WI",
            "area_name": "Lafayette County",
            "value": 8.457404634
        }, {
            "fips_code": 55067,
            "state": "WI",
            "area_name": "Langlade County",
            "value": 9.937583281
        }, {
            "fips_code": 55069,
            "state": "WI",
            "area_name": "Lincoln County",
            "value": 7.3729454
        }, {
            "fips_code": 55071,
            "state": "WI",
            "area_name": "Manitowoc County",
            "value": 7.366491967
        }, {
            "fips_code": 55073,
            "state": "WI",
            "area_name": "Marathon County",
            "value": 7.150778373
        }, {
            "fips_code": 55075,
            "state": "WI",
            "area_name": "Marinette County",
            "value": 8.555548416000001
        }, {
            "fips_code": 55077,
            "state": "WI",
            "area_name": "Marquette County",
            "value": 8.471502591
        }, {
            "fips_code": 55078,
            "state": "WI",
            "area_name": "Menominee County",
            "value": 5.226337449
        }, {
            "fips_code": 55079,
            "state": "WI",
            "area_name": "Milwaukee County",
            "value": 10.83366094
        }, {
            "fips_code": 55081,
            "state": "WI",
            "area_name": "Monroe County",
            "value": 9.271416618
        }, {
            "fips_code": 55083,
            "state": "WI",
            "area_name": "Oconto County",
            "value": 7.826881192
        }, {
            "fips_code": 55085,
            "state": "WI",
            "area_name": "Oneida County",
            "value": 5.333472862
        }, {
            "fips_code": 55087,
            "state": "WI",
            "area_name": "Outagamie County",
            "value": 5.694744923
        }, {
            "fips_code": 55089,
            "state": "WI",
            "area_name": "Ozaukee County",
            "value": 2.636955087
        }, {
            "fips_code": 55091,
            "state": "WI",
            "area_name": "Pepin County",
            "value": 7.63849499
        }, {
            "fips_code": 55093,
            "state": "WI",
            "area_name": "Pierce County",
            "value": 4.885370155
        }, {
            "fips_code": 55095,
            "state": "WI",
            "area_name": "Polk County",
            "value": 6.161793193
        }, {
            "fips_code": 55097,
            "state": "WI",
            "area_name": "Portage County",
            "value": 5.217066854
        }, {
            "fips_code": 55099,
            "state": "WI",
            "area_name": "Price County",
            "value": 7.556390977
        }, {
            "fips_code": 55101,
            "state": "WI",
            "area_name": "Racine County",
            "value": 8.285959613999999
        }, {
            "fips_code": 55103,
            "state": "WI",
            "area_name": "Richland County",
            "value": 8.819218241
        }, {
            "fips_code": 55105,
            "state": "WI",
            "area_name": "Rock County",
            "value": 7.96615481
        }, {
            "fips_code": 55107,
            "state": "WI",
            "area_name": "Rusk County",
            "value": 10.68805566
        }, {
            "fips_code": 55109,
            "state": "WI",
            "area_name": "St. Croix County",
            "value": 3.696969697
        }, {
            "fips_code": 55111,
            "state": "WI",
            "area_name": "Sauk County",
            "value": 8.223525807
        }, {
            "fips_code": 55113,
            "state": "WI",
            "area_name": "Sawyer County",
            "value": 6.608761329
        }, {
            "fips_code": 55115,
            "state": "WI",
            "area_name": "Shawano County",
            "value": 7.525776727
        }, {
            "fips_code": 55117,
            "state": "WI",
            "area_name": "Sheboygan County",
            "value": 6.060532007
        }, {
            "fips_code": 55119,
            "state": "WI",
            "area_name": "Taylor County",
            "value": 11.04550691
        }, {
            "fips_code": 55121,
            "state": "WI",
            "area_name": "Trempealeau County",
            "value": 8.271730202000001
        }, {
            "fips_code": 55123,
            "state": "WI",
            "area_name": "Vernon County",
            "value": 9.573073000000001
        }, {
            "fips_code": 55125,
            "state": "WI",
            "area_name": "Vilas County",
            "value": 4.887091338
        }, {
            "fips_code": 55127,
            "state": "WI",
            "area_name": "Walworth County",
            "value": 8.369695686
        }, {
            "fips_code": 55129,
            "state": "WI",
            "area_name": "Washburn County",
            "value": 7.173232769
        }, {
            "fips_code": 55131,
            "state": "WI",
            "area_name": "Washington County",
            "value": 4.982855249
        }, {
            "fips_code": 55133,
            "state": "WI",
            "area_name": "Waukesha County",
            "value": 3.602824212
        }, {
            "fips_code": 55135,
            "state": "WI",
            "area_name": "Waupaca County",
            "value": 6.985900505
        }, {
            "fips_code": 55137,
            "state": "WI",
            "area_name": "Waushara County",
            "value": 11.00365356
        }, {
            "fips_code": 55139,
            "state": "WI",
            "area_name": "Winnebago County",
            "value": 6.376551415
        }, {
            "fips_code": 55141,
            "state": "WI",
            "area_name": "Wood County",
            "value": 6.655432272
        }, {
            "fips_code": 56000,
            "state": "WY",
            "area_name": "Wyoming",
            "value": 6.262270544
        }, {
            "fips_code": 56001,
            "state": "WY",
            "area_name": "Albany County",
            "value": 4.129474772
        }, {
            "fips_code": 56003,
            "state": "WY",
            "area_name": "Big Horn County",
            "value": 11.27277328
        }, {
            "fips_code": 56005,
            "state": "WY",
            "area_name": "Campbell County",
            "value": 7.564081363
        }, {
            "fips_code": 56007,
            "state": "WY",
            "area_name": "Carbon County",
            "value": 9.993039674
        }, {
            "fips_code": 56009,
            "state": "WY",
            "area_name": "Converse County",
            "value": 6.664547574
        }, {
            "fips_code": 56011,
            "state": "WY",
            "area_name": "Crook County",
            "value": 7.196819085
        }, {
            "fips_code": 56013,
            "state": "WY",
            "area_name": "Fremont County",
            "value": 7.697568389
        }, {
            "fips_code": 56015,
            "state": "WY",
            "area_name": "Goshen County",
            "value": 6.861755802
        }, {
            "fips_code": 56017,
            "state": "WY",
            "area_name": "Hot Springs County",
            "value": 4.172876304
        }, {
            "fips_code": 56019,
            "state": "WY",
            "area_name": "Johnson County",
            "value": 4.618440656
        }, {
            "fips_code": 56021,
            "state": "WY",
            "area_name": "Laramie County",
            "value": 6.013241518
        }, {
            "fips_code": 56023,
            "state": "WY",
            "area_name": "Lincoln County",
            "value": 6.494310705
        }, {
            "fips_code": 56025,
            "state": "WY",
            "area_name": "Natrona County",
            "value": 6.015301597
        }, {
            "fips_code": 56027,
            "state": "WY",
            "area_name": "Niobrara County",
            "value": 7.827890098
        }, {
            "fips_code": 56029,
            "state": "WY",
            "area_name": "Park County",
            "value": 4.635389869
        }, {
            "fips_code": 56031,
            "state": "WY",
            "area_name": "Platte County",
            "value": 8.286623239000001
        }, {
            "fips_code": 56033,
            "state": "WY",
            "area_name": "Sheridan County",
            "value": 4.194321534
        }, {
            "fips_code": 56035,
            "state": "WY",
            "area_name": "Sublette County",
            "value": 4.966398951
        }, {
            "fips_code": 56037,
            "state": "WY",
            "area_name": "Sweetwater County",
            "value": 7.294362957
        }, {
            "fips_code": 56039,
            "state": "WY",
            "area_name": "Teton County",
            "value": 3.969647205
        }, {
            "fips_code": 56041,
            "state": "WY",
            "area_name": "Uinta County",
            "value": 6.430892466
        }, {
            "fips_code": 56043,
            "state": "WY",
            "area_name": "Washakie County",
            "value": 5.900792919
        }, {
            "fips_code": 56045,
            "state": "WY",
            "area_name": "Weston County",
            "value": 7.113654947
        }, {
            "fips_code": 72000,
            "state": "PR",
            "area_name": "Puerto Rico",
            "value": 21.63967335
        }, {
            "fips_code": 72001,
            "state": "PR",
            "area_name": "Adjuntas Municipio",
            "value": 34.87478875
        }, {
            "fips_code": 72003,
            "state": "PR",
            "area_name": "Aguada Municipio",
            "value": 33.54439285
        }, {
            "fips_code": 72005,
            "state": "PR",
            "area_name": "Aguadilla Municipio",
            "value": 24.86888767
        }, {
            "fips_code": 72007,
            "state": "PR",
            "area_name": "Aguas Buenas Municipio",
            "value": 25.92217724
        }, {
            "fips_code": 72009,
            "state": "PR",
            "area_name": "Aibonito Municipio",
            "value": 20.83126345
        }, {
            "fips_code": 72011,
            "state": "PR",
            "area_name": "A\u00f1asco Municipio",
            "value": 28.830244
        }, {
            "fips_code": 72013,
            "state": "PR",
            "area_name": "Arecibo Municipio",
            "value": 22.03663709
        }, {
            "fips_code": 72015,
            "state": "PR",
            "area_name": "Arroyo Municipio",
            "value": 23.42302988
        }, {
            "fips_code": 72017,
            "state": "PR",
            "area_name": "Barceloneta Municipio",
            "value": 25.56793958
        }, {
            "fips_code": 72019,
            "state": "PR",
            "area_name": "Barranquitas Municipio",
            "value": 24.76861167
        }, {
            "fips_code": 72021,
            "state": "PR",
            "area_name": "Bayam\u00f3n Municipio",
            "value": 17.54221731
        }, {
            "fips_code": 72023,
            "state": "PR",
            "area_name": "Cabo Rojo Municipio",
            "value": 26.13196815
        }, {
            "fips_code": 72025,
            "state": "PR",
            "area_name": "Caguas Municipio",
            "value": 16.50694392
        }, {
            "fips_code": 72027,
            "state": "PR",
            "area_name": "Camuy Municipio",
            "value": 27.42665062
        }, {
            "fips_code": 72029,
            "state": "PR",
            "area_name": "Can\u00f3vanas Municipio",
            "value": 22.26402748
        }, {
            "fips_code": 72031,
            "state": "PR",
            "area_name": "Carolina Municipio",
            "value": 12.96912529
        }, {
            "fips_code": 72033,
            "state": "PR",
            "area_name": "Cata\u00f1o Municipio",
            "value": 23.14167161
        }, {
            "fips_code": 72035,
            "state": "PR",
            "area_name": "Cayey Municipio",
            "value": 22.48039406
        }, {
            "fips_code": 72037,
            "state": "PR",
            "area_name": "Ceiba Municipio",
            "value": 24.81630718
        }, {
            "fips_code": 72039,
            "state": "PR",
            "area_name": "Ciales Municipio",
            "value": 32.90587951
        }, {
            "fips_code": 72041,
            "state": "PR",
            "area_name": "Cidra Municipio",
            "value": 22.29963949
        }, {
            "fips_code": 72043,
            "state": "PR",
            "area_name": "Coamo Municipio",
            "value": 19.26541659
        }, {
            "fips_code": 72045,
            "state": "PR",
            "area_name": "Comer\u00edo Municipio",
            "value": 27.76472316
        }, {
            "fips_code": 72047,
            "state": "PR",
            "area_name": "Corozal Municipio",
            "value": 27.51852757
        }, {
            "fips_code": 72049,
            "state": "PR",
            "area_name": "Culebra Municipio",
            "value": 18.40425532
        }, {
            "fips_code": 72051,
            "state": "PR",
            "area_name": "Dorado Municipio",
            "value": 17.78587949
        }, {
            "fips_code": 72053,
            "state": "PR",
            "area_name": "Fajardo Municipio",
            "value": 16.93264693
        }, {
            "fips_code": 72054,
            "state": "PR",
            "area_name": "Florida Municipio",
            "value": 21.56814551
        }, {
            "fips_code": 72055,
            "state": "PR",
            "area_name": "Gu\u00e1nica Municipio",
            "value": 29.77490098
        }, {
            "fips_code": 72057,
            "state": "PR",
            "area_name": "Guayama Municipio",
            "value": 21.39868049
        }, {
            "fips_code": 72059,
            "state": "PR",
            "area_name": "Guayanilla Municipio",
            "value": 22.93720407
        }, {
            "fips_code": 72061,
            "state": "PR",
            "area_name": "Guaynabo Municipio",
            "value": 14.25983021
        }, {
            "fips_code": 72063,
            "state": "PR",
            "area_name": "Gurabo Municipio",
            "value": 18.2759671
        }, {
            "fips_code": 72065,
            "state": "PR",
            "area_name": "Hatillo Municipio",
            "value": 23.60965739
        }, {
            "fips_code": 72067,
            "state": "PR",
            "area_name": "Hormigueros Municipio",
            "value": 20.5014626
        }, {
            "fips_code": 72069,
            "state": "PR",
            "area_name": "Humacao Municipio",
            "value": 21.01263141
        }, {
            "fips_code": 72071,
            "state": "PR",
            "area_name": "Isabela Municipio",
            "value": 26.07734108
        }, {
            "fips_code": 72073,
            "state": "PR",
            "area_name": "Jayuya Municipio",
            "value": 20.52616363
        }, {
            "fips_code": 72075,
            "state": "PR",
            "area_name": "Juana D\u00edaz Municipio",
            "value": 22.5514679
        }, {
            "fips_code": 72077,
            "state": "PR",
            "area_name": "Juncos Municipio",
            "value": 24.0790827
        }, {
            "fips_code": 72079,
            "state": "PR",
            "area_name": "Lajas Municipio",
            "value": 32.94249352
        }, {
            "fips_code": 72081,
            "state": "PR",
            "area_name": "Lares Municipio",
            "value": 32.93958172
        }, {
            "fips_code": 72083,
            "state": "PR",
            "area_name": "Las Mar\u00edas Municipio",
            "value": 36.57669307
        }, {
            "fips_code": 72085,
            "state": "PR",
            "area_name": "Las Piedras Municipio",
            "value": 19.71457537
        }, {
            "fips_code": 72087,
            "state": "PR",
            "area_name": "Lo\u00edza Municipio",
            "value": 24.02966053
        }, {
            "fips_code": 72089,
            "state": "PR",
            "area_name": "Luquillo Municipio",
            "value": 21.88463911
        }, {
            "fips_code": 72091,
            "state": "PR",
            "area_name": "Manat\u00ed Municipio",
            "value": 24.5869065
        }, {
            "fips_code": 72093,
            "state": "PR",
            "area_name": "Maricao Municipio",
            "value": 41.17352056
        }, {
            "fips_code": 72095,
            "state": "PR",
            "area_name": "Maunabo Municipio",
            "value": 26.37072435
        }, {
            "fips_code": 72097,
            "state": "PR",
            "area_name": "Mayag\u00fcez Municipio",
            "value": 27.74976175
        }, {
            "fips_code": 72099,
            "state": "PR",
            "area_name": "Moca Municipio",
            "value": 29.81017635
        }, {
            "fips_code": 72101,
            "state": "PR",
            "area_name": "Morovis Municipio",
            "value": 26.10200897
        }, {
            "fips_code": 72103,
            "state": "PR",
            "area_name": "Naguabo Municipio",
            "value": 23.18989484
        }, {
            "fips_code": 72105,
            "state": "PR",
            "area_name": "Naranjito Municipio",
            "value": 28.72386033
        }, {
            "fips_code": 72107,
            "state": "PR",
            "area_name": "Orocovis Municipio",
            "value": 29.81599947
        }, {
            "fips_code": 72109,
            "state": "PR",
            "area_name": "Patillas Municipio",
            "value": 22.44440757
        }, {
            "fips_code": 72111,
            "state": "PR",
            "area_name": "Pe\u00f1uelas Municipio",
            "value": 25.79988774
        }, {
            "fips_code": 72113,
            "state": "PR",
            "area_name": "Ponce Municipio",
            "value": 21.88207818
        }, {
            "fips_code": 72115,
            "state": "PR",
            "area_name": "Quebradillas Municipio",
            "value": 25.46864152
        }, {
            "fips_code": 72117,
            "state": "PR",
            "area_name": "Rinc\u00f3n Municipio",
            "value": 26.86089738
        }, {
            "fips_code": 72119,
            "state": "PR",
            "area_name": "R\u00edo Grande Municipio",
            "value": 22.23181897
        }, {
            "fips_code": 72121,
            "state": "PR",
            "area_name": "Sabana Grande Municipio",
            "value": 24.68597795
        }, {
            "fips_code": 72123,
            "state": "PR",
            "area_name": "Salinas Municipio",
            "value": 23.19193889
        }, {
            "fips_code": 72125,
            "state": "PR",
            "area_name": "San Germ\u00e1n Municipio",
            "value": 29.03505351
        }, {
            "fips_code": 72127,
            "state": "PR",
            "area_name": "San Juan Municipio",
            "value": 16.42881634
        }, {
            "fips_code": 72129,
            "state": "PR",
            "area_name": "San Lorenzo Municipio",
            "value": 27.68563686
        }, {
            "fips_code": 72131,
            "state": "PR",
            "area_name": "San Sebasti\u00e1n Municipio",
            "value": 30.51725925
        }, {
            "fips_code": 72133,
            "state": "PR",
            "area_name": "Santa Isabel Municipio",
            "value": 16.12564712
        }, {
            "fips_code": 72135,
            "state": "PR",
            "area_name": "Toa Alta Municipio",
            "value": 16.55277621
        }, {
            "fips_code": 72137,
            "state": "PR",
            "area_name": "Toa Baja Municipio",
            "value": 18.14978934
        }, {
            "fips_code": 72139,
            "state": "PR",
            "area_name": "Trujillo Alto Municipio",
            "value": 14.58278441
        }, {
            "fips_code": 72141,
            "state": "PR",
            "area_name": "Utuado Municipio",
            "value": 26.46171527
        }, {
            "fips_code": 72143,
            "state": "PR",
            "area_name": "Vega Alta Municipio",
            "value": 24.60496614
        }, {
            "fips_code": 72145,
            "state": "PR",
            "area_name": "Vega Baja Municipio",
            "value": 23.8847396
        }, {
            "fips_code": 72147,
            "state": "PR",
            "area_name": "Vieques Municipio",
            "value": 27.01842546
        }, {
            "fips_code": 72149,
            "state": "PR",
            "area_name": "Villalba Municipio",
            "value": 21.44559686
        }, {
            "fips_code": 72151,
            "state": "PR",
            "area_name": "Yabucoa Municipio",
            "value": 26.87086822
        }, {
            "fips_code": 72153,
            "state": "PR",
            "area_name": "Yauco Municipio",
            "value": 22.15034488
        }
    ]
}