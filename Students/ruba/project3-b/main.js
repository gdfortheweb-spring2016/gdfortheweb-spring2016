var finalColor; 
$("div").hover(function () {

    var colors = new Array();
    colors = [
        'rgb(' + 0 + ',' + 0 + ',' + 0 + ')', 
        'rgb(' + 220 + ',' + 220 + ',' + 220 + ')',

    ];
    var randIndex = Math.floor(Math.random() * colors.length);
    finalColor = colors[randIndex];

    $(this).toggleClass("hover");
    $(this).css("background-color", finalColor);
});


$("h3").mouseover(function () {
    $(this).css("color", "white");
});

$("h3").mouseout(function () {
    $(this).css("color", "transparent");
});

$("h4").mouseover(function () {
    $(this).css("color", "white");
});

$("h4").mouseout(function () {
    $(this).css("color", "transparent");
});

$("h5").mouseover(function () {
    $(this).css("color", "white");
});

$("h5").mouseout(function () {
    $(this).css("color", "transparent");
});

$("h6").mouseover(function () {
    $(this).css("color", "white");
});

$("h6").mouseout(function () {
    $(this).css("color", "transparent");
});




