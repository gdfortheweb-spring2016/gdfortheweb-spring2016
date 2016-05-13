$(document).ready(function() {
	console.log("ready!");

//viewport dimensions
	var vWidth = $(window).width();
	var vHeight = $(window).height();

//randoInt
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//lunaMaurer
function lunaMaurer (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("LM PosXPosY", PosX, PosY);
	
	$('.luna-maurer').css({
		'top': PosY,
		'left': PosX
	});
}

//studioMoniker
function studioMoniker (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("SM PosXPosY", PosX, PosY);
	
	$('.studio-moniker').css({
		'top': PosY,
		'left': PosX
	});
}

//date
function date (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("date PosXPosY", PosX, PosY);
	
	$('.date').css({
	'top': PosY + 'px',
	'left': PosX + 'px'
	});
}

//time
function time (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("time PosXPosY", PosX, PosY);
	
	$('.time').css({
		'top': PosY,
		'left': PosX
	});

	$("#blink").each(function() {
		var elem = $(this);
		setInterval(function() {
			if (elem.css('visibility') == 'visible') {
				elem.css('visibility', 'hidden');
			} else {
				elem.css('visibility', 'visible');
			}
		}, 500);
	});
}

//place
function place (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("place PosXPosY", PosX, PosY);
	
	$('.place').css({
		'top': PosY,
		'left': PosX
	});
}

//toggling
function toggle () {
	
	$('.luna-maurer').click(function() {
		$('h1').toggle();
	})

	$('.studio-moniker').click(function() {
		$('h2').toggle();
	})

	$('.date').click(function() {
		$('.date > h3').toggle();
	})

	$('.time').click(function() {
		$('.time > h3').toggle();
	})

	$('.place').click(function() {
		$('.place > h3').toggle();
	})

	$('.description').click(function() {
		$('p').toggle();
	})

}

//execute functions
	lunaMaurer(1000, 400);
	studioMoniker(200, 200);
	date(300, 100);
	time(300, 100);
	place(50, 150);

	toggle();

});