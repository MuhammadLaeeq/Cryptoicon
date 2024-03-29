
 window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: ""
        },
        axisY2: {
            title: "",
            prefix: "$",
            suffix: "K"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "center",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type:"line",
            axisYType: "secondary",
            name: "47.000",
            showInLegend: false,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [		
                { x: new Date(2014, 00, 01), y: 850 },
                { x: new Date(2014, 01, 01), y: 889 },
                { x: new Date(2014, 02, 01), y: 890 },
                { x: new Date(2014, 03, 01), y: 899 },
                { x: new Date(2014, 04, 01), y: 903 },
                { x: new Date(2014, 05, 01), y: 925 },
                { x: new Date(2014, 06, 01), y: 899 },
                { x: new Date(2014, 07, 01), y: 875 },
                { x: new Date(2014, 08, 01), y: 927 },
                { x: new Date(2014, 09, 01), y: 949 },
                { x: new Date(2014, 10, 01), y: 946 },
                { x: new Date(2014, 11, 01), y: 927 },
                { x: new Date(2015, 00, 01), y: 950 },
                { x: new Date(2015, 01, 01), y: 998 },
                { x: new Date(2015, 02, 01), y: 998 },
                { x: new Date(2015, 03, 01), y: 1050 },
                { x: new Date(2015, 04, 01), y: 1050 },
                { x: new Date(2015, 05, 01), y: 999 },
                { x: new Date(2015, 06, 01), y: 998 },
                { x: new Date(2015, 07, 01), y: 998 },
                { x: new Date(2015, 08, 01), y: 1050 },
                { x: new Date(2015, 09, 01), y: 1070 },
                { x: new Date(2015, 10, 01), y: 1050 },
                { x: new Date(2015, 11, 01), y: 1050 },
                { x: new Date(2016, 00, 01), y: 995 },
                { x: new Date(2016, 01, 01), y: 1090 },
                { x: new Date(2016, 02, 01), y: 1100 },
                { x: new Date(2016, 03, 01), y: 1150 },
                { x: new Date(2016, 04, 01), y: 1150 },
                { x: new Date(2016, 05, 01), y: 1150 },
                { x: new Date(2016, 06, 01), y: 1100 },
                { x: new Date(2016, 07, 01), y: 1100 },
                { x: new Date(2016, 08, 01), y: 1150 },
                { x: new Date(2016, 09, 01), y: 1170 },
                { x: new Date(2016, 10, 01), y: 1150 },
                { x: new Date(2016, 11, 01), y: 1150 },
                { x: new Date(2017, 00, 01), y: 1150 },
                { x: new Date(2017, 01, 01), y: 1200 },
                { x: new Date(2017, 02, 01), y: 1200 },
                { x: new Date(2017, 03, 01), y: 1200 },
                { x: new Date(2017, 04, 01), y: 1190 },
                { x: new Date(2017, 05, 01), y: 1170 }
            ]
        }]
               
    });
    chart.render();
    
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }