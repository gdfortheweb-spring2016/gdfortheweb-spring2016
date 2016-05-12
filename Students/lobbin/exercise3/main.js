

$(function(){
alert("shooting star");

	$("div").hover(function(){
		$(this).addClass("hovered");
	});
	$("div").click(function(){
		$(this). addClass("clicked");

		var randNumber = Math.floor(Math.random()*255);
			$(this).css("background-color", "rgb(" + randNumber + "," + randNumber + "," + randNumber + ")");
	});

	
});