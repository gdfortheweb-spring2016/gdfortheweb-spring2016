//This is the function to blur or unblur text on the website based on the scrolling position
$(document).ready(function () {
    //caches a jQuery object containing the text element
    var text1 = $(".real");
    var text2 = $(".the");
    var text3 = $(".however");
    var text4 = $(".psych");
    var text5 = $(".once");
    $(".panel").on("scroll", function () {
        //unblurs text elements according to scroll point
        var scroll = $(".panel").scrollTop();

        if (scroll >= 1300) {
            text1.css("-webkit-filter", "blur(0px)");
            console.log("Scrolling-down");
        } else {
            text1.css("-webkit-filter", "blur(5px)");

        }
    });
    //unblurs text elements according to scroll point

    $(".panel").on("scroll", function () {

        var scroll = $(".panel").scrollTop();

        if (scroll >= 1950) {
            text2.css("-webkit-filter", "blur(0px)");
        } else {
            text2.css("-webkit-filter", "blur(5px)");

        }
    });
    //unblurs text elements according to scroll point

    $(".panel").on("scroll", function () {

        var scroll = $(".panel").scrollTop();

        if (scroll >= 2800) {
            text3.css("-webkit-filter", "blur(0px)");
        } else {
            text3.css("-webkit-filter", "blur(5px)");

        }
    });
    //unblurs text elements according to scroll point

    $(".panel").on("scroll", function () {

        var scroll = $(".panel").scrollTop();

        if (scroll >= 4300) {
            text4.css("-webkit-filter", "blur(0px)");
        } else {
            text4.css("-webkit-filter", "blur(5px)");

        }
    });
    //unblurs text elements according to scroll point

    $(".panel").on("scroll", function () {

        var scroll = $(".panel").scrollTop();

        if (scroll >= 5000) {
            text5.css("-webkit-filter", "blur(0px)");
        } else {
            text5.css("-webkit-filter", "blur(5px)");

        }
    });
});

//This is the function to hide the left column
function hideColumn() {
    $(".panel-right").css("visibility", "hidden");
    $("#plus").css("visibility", "visible");
    $("body").css("background-color", "black");
}

//This is the function to show the left column
function showColumn() {
    $(".panel-right").css("visibility", "visible");
    $("#plus").css("visibility", "hidden");
    $("body").css("background-color", "white");
}

//This is the function for both the line graph and the bar graph
$(function () {
    function casualtiesData() {
        var chartContainer = new CanvasJS.Chart("chartContainer", {


            animationEnabled: true,
            axisX: {


                labelFontSize: 12,
                labelFontFamily: "Roboto"

            },
            toolTip: {
                shared: true
            },

            axisY: {

                labelFontFamily: "Roboto"
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "right",
                FontFamily: "Roboto"
            },
            data: [
                {
                    type: "line",
                    showInLegend: true,
                    lineThickness: 2,
                    name: "Minimum Number of Strikes",
                    markerType: "square",
                    color: "#CB3030",
                    dataPoints: [
                        {
                            x: 10,
                            y: 11,
                            label: "2011"
                        },
                        {
                            x: 20,
                            y: 37,
                            label: "2012"
                        },
                        {
                            x: 30,
                            y: 22,
                            label: "2013"
                        },
                        {
                            x: 40,
                            y: 17,
                            label: "2014"
                        },
                        {
                            x: 50,
                            y: 21,
                            label: "2015"
                        },
                        {
                            x: 60,
                            y: 8,
                            label: "2016"
                        }
				]
			},
                {
                    type: "line",
                    showInLegend: true,
                    name: "Maximum Number of Strikes",
                    color: "Black",
                    markerType: "square",

                    lineThickness: 2,

                    dataPoints: [
                        {
                            x: 10,
                            y: 14,
                            label: "2011"
                        },
                        {
                            x: 20,
                            y: 51,
                            label: "2012"
                        },
                        {
                            x: 30,
                            y: 22,
                            label: "2013"
                        },
                        {
                            x: 40,
                            y: 19,
                            label: "2014"
                        },
                        {
                            x: 50,
                            y: 22,
                            label: "2015"
                        },
                        {
                            x: 60,
                            y: 8,
                            label: "2016"
                        }
				]
			}



			],
            legend: {
                cursor: "pointer",
                labelFontFamily: "Roboto",
                itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
                    chartContainer.render();
                }
            }
        });

        chartContainer.render();
    }


    function strikesData() {
        var chart = new CanvasJS.Chart("chart", {
            animationEnabled: true,
            axisY: {
                labelFontSize: 12,
                labelFontFamily: "Roboto"
            },
            axisX: {
                labelFontSize: 12,
                labelFontFamily: "Roboto",

            },

            legend: {
                verticalAlign: "bottom",
                labelFontFamily: "Roboto",


            },
            data: [

                {
                    type: "bar",
                    showInLegend: true,
                    legendText: "Maximum Number of People Killed",


                    dataPoints: [
                        {
                            x: 60,
                            y: 46,
                            label: "2011"
                        },
                        {
                            x: 50,
                            y: 205,
                            label: "2012"
                        },
                        {
                            x: 40,
                            y: 79,
                            label: "2013"
                        },
                        {
                            x: 30,
                            y: 90,
                            label: "2014"
                        },
                        {
                            x: 20,
                            y: 75,
                            label: "2015"
                        },
                        {
                            x: 10,
                            y: 27,
                            label: "2016"
                        }

        ]
      },
                {
                    type: "bar",
                    axisYType: "secondary",
                    showInLegend: true,
                    legendText: "Minimum Number of People Killed",
                    dataPoints: [
                        {
                            x: 60,
                            y: 102,
                            label: "2011"
                        },
                        {
                            x: 50,
                            y: 267,
                            label: "2012"
                        },
                        {
                            x: 40,
                            y: 129,
                            label: "2013"
                        },
                        {
                            x: 30,
                            y: 127,
                            label: "2014"
                        },
                        {
                            x: 20,
                            y: 103,
                            label: "2015"
                        },
                        {
                            x: 10,
                            y: 31,
                            label: "2016"
                        }
        ]
      }

      ],
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
                    chart.render();
                }
            }
        });
        chart.render();
    }

    $(window).on("load", strikesData);
    $(window).on("load", casualtiesData);

});