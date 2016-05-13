for (i = 0; i < 100; i++) {
	$("body").append("<div>YO</div>");
}

//hover
$("div").hover(function () {

	// $(this).html("YO");
}, function () {
	$(this).html("DUDE");
});

//click
// $("div").click(function () {
// 	$(this).css({
// 		transform: 'skew(' + randoNum + 'deg,' + randoNum2 + 'deg)'
// 	})
// });

//click
$("div").click(function () {

	var randoNum = Math.floor(Math.random() * 1000);
	var randoNum2 = Math.floor(Math.random()* 10);

	$(this).css("transform", 'scale(' + randoNum2 + ') ' + 'skewX(' + randoNum + 'deg)');


// $(this).css({
// 		transform: 'skew(' + randoNum + 'deg)'
// 	})

// 			transform: 'scale(' + randoNum2 + ')'

	console.log(randoNum);
	console.log(randoNum2);
});