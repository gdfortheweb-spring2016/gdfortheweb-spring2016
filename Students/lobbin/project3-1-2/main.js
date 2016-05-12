// $("div").hover(function() {
//   $(this).animate({ width: "700px" }, 1000 );
//   $(this).animate({ width: "30px" }, 0 );
// });

$("h2").hover(function(){
		$(this).addClass("hovered");
		var randNumber =Math.random()*50;
		$(this).css("font-size", randNumber +"px");
		$(this).addclass("color");
	// },function() {
	// 	$(this).removeClass("hovered");
	});
$("h1,h3,h4").hover(function(){
	$(this).addClass("hovered");
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	$(this).css("color", "rgb(" + r + "," + g + "," + b + ")"   );
	
});

$("div").hover(function(){
		$(this).addClass("width");
		var randNumber =Math.random()*300;
		$(this).css("width", randNumber +"px");
		$(this).css("height", randNumber +"px");
		// $(this).addclass("color");
		// $(this).css("color", "white");
	// },function() {
	// 	$(this).removeClass("hovered");
	});