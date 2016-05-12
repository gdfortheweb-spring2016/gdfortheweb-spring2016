$("div").hover(function () {
    var color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    $(this).toggleClass("hover");
    $(this).css("background-color", color);
});


$("div").click(function () {
    $(this).toggleClass("disappear");
    $(this).css("background-color", "indianred");
});