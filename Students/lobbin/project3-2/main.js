var timeout_callback = null;

$("#parent_container").click(function() {
	if (timeout_callback) {
		clearTimeout(timeout_callback);
		timeout_callback = null;
	}

	timeout_callback = setTimeout(function() {
		$("#name").css('opacity', '1');
		$("#main_image").toggleClass("rotate_ccw");
		$("#name").toggleClass("rotate_cw");
	}, 3000);

	$("#main_image").toggleClass("rotate_ccw");
	$("#name").toggleClass("rotate_cw");

}); 

// $("#text").hover(
// 	function() {
// 		$(this).css("opacity","1")
// 	// 	$(this).addClass("hovered");
// 	// };
// 	// function() {
// 	// 	$(this).removeClass("hovered");
	
// })s;
	