$(window).scroll(function() {
  $("aside").css("display", "inline").fadeOut(1000);
  // $("img").css( "display", "inline" ).fadeOut( 1000 );
});

$("div").hover(function() {
  $(this).animate({ width: "700px" }, 1000 );
  $(this).animate({ width: "40px" }, 0 );
  	var a = Math.random() * 254;
 	var b = Math.floor(a / 4) * 4;
 	$("div").css("color", "rgb(" + b + "," + b + "," + b + ")");
 	$(this).addClass("glow");
});

$("div").click(function() {
  $(this).css("background-color", "#00ff00");
});

$("div").mouseenter(function() {
	// var color = Math.floor(Math.random() * 10000 + 113345);
	// $(this).css("background-color", "#" + color);
	

});

$(".vk").click(function() {
	$(".vincapic").toggle();
});

$(".daniel").click(function() {
	$(".bothpic").toggle();
});

setInterval(function(){ alert("TODAY! TODAY! TODAY! TODAY! TODAY! TODAY! TODAY! TODAY!"); }, 7000);