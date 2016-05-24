
$("div").hover(function() {
	$(this).html("click me");
	$(this).addClass("hovered");
}, function() {
	$(this).html("come back");
	$(this).removeClass("hovered");
});


$("div").click(function(){
	if($(this).hasClass("clicked")) {

		$(this).removeClass("clicked");
		$(this).html("come back");
		$(this).css("font-size", 18);
		$(this).css("transform", "skew(0deg)");
		$(this).css("background-color", "#" + "96ff00");
		$(this).css("opacity", 1);

	} else {
		$(this).addClass("clicked");
		$(this).html("go away");
		$(this).css("font-size", 100);
		var skew = Math.floor(Math.random() * 100);
		var color = Math.floor(Math.random() * 100000 + 560034);
		// $(this).css("transform", "skew(-" + skew + "deg)");
		$(this).css("transform", "rotate(-" + skew + "deg)");
		$(this).css("background-color", "#" + color);
		$(this).css("opacity", .7);
	}
	// console.log("rgb(" + red + "," + green + "," + blue + ")");
});

$(".first").click(function(){

});
