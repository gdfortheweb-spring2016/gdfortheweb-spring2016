$(document).ready(function(){
	


	var risd = ["Michael&nbsp;", "Rock&nbsp;", "Rhode&nbsp;", "Island&nbsp;", "School&nbsp;", "of Design&nbsp;", "Visiting&nbsp;", "Designer&nbsp;", "February&nbsp;", "25&nbsp;", "6:30pm&nbsp;"];
	$(".aa").each(function(){
		var words = risd[Math.floor(Math.random() * risd.length)];
		$(this).html(words);
	});



	
	var backtwo = ["white", "black", "yellow"];
	var backimg = ["url('b1-01.svg') no-repeat", "url('b3.svg') no-repeat", "url('b4.svg') no-repeat", "url('b5.svg') no-repeat", "url('b6.svg') no-repeat", "url('b7.svg') no-repeat", "url('b9.svg') no-repeat", "url('b10.svg') no-repeat", "url('b12.svg') no-repeat", "url('b13.svg') no-repeat", "url('b14.svg') no-repeat", "url('b15.svg') no-repeat", "url('b16.svg') no-repeat", "url('b17.svg') no-repeat", "url('b18.svg') no-repeat", "url('b19.svg') no-repeat", "url('b20.svg') no-repeat", "url('b21.svg') no-repeat", "url('b22.svg') no-repeat", "url('b23.svg') no-repeat", "url('b24.svg') no-repeat", "url('b25.svg') no-repeat"]
	var risd = ["Michael&nbsp;", "Rock&nbsp;", "Rhode&nbsp;", "Island&nbsp;", "School&nbsp;", "of Design&nbsp;", "Visiting&nbsp;", "Designer&nbsp;", "February&nbsp;", "25&nbsp;", "6:30pm&nbsp;"];

	$(window).scroll(function (){
		var what = backtwo[Math.floor(Math.random() * backtwo.length)];
		var whattwo = backimg[Math.floor(Math.random() * backimg.length)];


		if(Math.random() > 0.6) {

			$(".theimage").css("background", whattwo);

		} else {

			$(".theimage").css("background", "transparent");
	
		};

		$("body").css("background-color", what);
			$(".theimage").css("background-size", "cover");
			$(".aa").each(function(){
			var what = backtwo[Math.floor(Math.random() * backtwo.length)];
			var words = risd[Math.floor(Math.random() * risd.length)];
			$(".aa").html(words);
		});
	});

});




$(window).mouseup(function() {
    $( ".pan" ).css( "display", "none" );
    $("html").css("cursor", "default")
  })
  .mousedown(function() {
    $( ".pan" ).css( "display", "inherit" );
    $("html").css("cursor", "help")
  });


/*if(Math.random() > 0.5) {

} else {

}*/



/*$(document).mousemove(function(e) {
    $('.logo').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});*/