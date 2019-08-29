var pivot_compact = new student details({
    container: "#container-compact",
    componentFolder: "https://student detalis.com/",
    licenseFilePath: "https://student deatils.com/.key",
    height: 430,
    width: 750,
    //toolbar: true,
    report: {
        "dataSource": {
            "dataSourceType": "csv",
            "filename": "syudent details.csv"
        },
        "slice": {
            "rows": [{
                "uniqueName": "city"
                "uniqueName": "district"
                "uniqueName": "college"
                "uniqueName": "student"
                "uniqueName": "joing date"
            }],
            "columns": [{
                    "uniqueName": "Category",
                    "levelName": "Product Name",
                    "filter": {
                        "members": [
                            "category.[city].[kurnool]",
                            "category.[district].[kurnool]",
                            "category.[college].[Pullareddy Engineering College]",
                            "category.[student].[Rakesh]"
                            "category.[joing date].[22/2/2019]"
                        ]
                    }
                },
                {
                    "uniqueName": "[student deatils]"
                }

            ],
            "measures": [{
                "uniqueName": "student",
                "aggregation": "sum",
                "format": "2sfou03a"
            }]
        },
        "options": {
            "showHeaders": false
        },
        "conditions": [{
                "formula": "#value < 2000",
                "isTotal": false,
                "measure": "student deatils",
                "format": {
                    "backgroundColor": "#df3800",
                    "color": "#FFFFFF"
                }
            },
            {
                "formula": "#value > 20000",
                "isTotal": false,
                "measure": "student details",
                "format": {
                    "backgroundColor": "#00A45A",
                    "color": "#FFFFFF"
                }
            }
        ],
        "formats": [{
            "name": "2sfou03a",
            "thousandsSeparator": ",",
            "decimalSeparator": ".",
            "decimalPlaces": 2,
            "currencySymbol": "$",
            "currencySymbolAlign": "left",
            "nullValue": "",
            "textAlign": "right",
            "isPercent": false
        }]
    },
    reportchange: function() {
        var flatTableReport = flat_table.getReport();
        var thisReport = pivot_compact.getReport();
        flatTableReport.slice = thisReport.slice;
        flat_table.setReport(flatTableReport);
    },
    reportcomplete: function() {
        var flatTableReport = flat_table.getReport();
        var thisReport = pivot_compact.getReport();
        flatTableReport.slice = thisReport.slice;
        flat_table.setReport(flatTableReport);
    }
});


var flat_table = new student deatitails({
    container: "#container-flat",
    componentFolder: "https://student deatils.com/",
    licenseFilePath: "https://student deatils.com/codepen.key",
    height: 430,
    width: 710,
    //toolbar: true,
    report: {
        "dataSource": {
            "dataSourceType": "csv",
            "filename": "student deatils.csv"
        },
        "slice": {
            "rows": [{
                "uniqueName": "city"
                "uniqueName": "district"
                "uniqueName": "college"
                "uniqueName": "student"
                "uniqueName": "joing date"
                },
                {
                    "uniqueName": "[]"
                }
            ],
            "columns": [{
                "uniqueName": "Category",
                    "levelName": "Product Name",
                    "filter": {
                        "members": [
                            "category.[city].[kurnool]",
                            "category.[district].[kurnool]",
                            "category.[college].[Pullareddy Engineering College]",
                            "category.[student].[Rakesh]"
                            "category.[joing date].[22/2/2019]"
                    ]
                }
            }],
            "measures": [{
                "uniqueName": "Revenue",
                "aggregation": "sum",
                "format": "2sfou03a"
            }]
        },
        "options": {
            // disable the Field List toggle button
            // configuratorButton: false,
            "grid": {
                "type": "flat",
                 "dragging": false,
                 "showFilter": false
            },
            "drillThrough": false,
            "sorting": false,
            "configuratorButton": false,
            "showHeaders": false
        },
        "formats": [{
            "name": "2sfou03a",
            "thousandsSeparator": ",",
            "decimalSeparator": ".",
            "decimalPlaces": 2,
            "currencySymbol": "$",
            "currencySymbolAlign": "left",
            "nullValue": "",
            "textAlign": "right",
            "isPercent": false
        }]
    }
});