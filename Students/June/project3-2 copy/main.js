$( window ).scroll(function() {
  $( "aside" ).css( "display", "inline" ).fadeOut( 1000 );
  // $("img").css( "display", "inline" ).fadeOut( 1000 );
});

$("div").hover(function() {
  $(this).animate({ width: "700px" }, 1000 );
  $(this).animate({ width: "30px" }, 0 );
});

$("div").click(function() {
  $(this).css("width", 500px);
});

$("div").mouseenter(function() {
	var color = Math.floor(Math.random() * 10000 + 113345);
	$(this).css("background-color", "#" + color);
});

$(".vk").click(function() {
	$(".vincapic").toggle();
});

$(".daniel").click(function() {
	$(".bothpic").toggle();
});