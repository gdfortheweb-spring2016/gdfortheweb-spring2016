//draw the first dot
var count = 0;

var myPath = new Path();
	myPath.strokeColor = 'orange'; 
	myPath.strokeWidth = 20;
	myPath.strokeCap = 'round';
	myPath.strokeJoin = 'round';

var city = "";
var cityname = "";

function onMouseDown(event) {
	count++;

	var cols = 25;
	var rows = 20;
	var colWidth = $(window).width() / cols;
	var rowHeight= $(window).height() / rows;

	var mouseX = event.point.x;
	var mouseY = event.point.y;

	var mouseCol = Math.floor(mouseX / colWidth);
	var mouseRow = Math.floor(mouseY / rowHeight);

	// console.log(mouseCol + "," + mouseRow);

	// find the sentence based on the mouse position

	var sentence = (mouseRow - 1) * cols + mouseCol;
	
	// save that sentence and mouse positition to our url for the next page

	city = city + "," + sentence + "," + mouseCol + "," + mouseRow;
	$("a#enter").attr("href", "citydetail.html#" + city);

	console.log (city);
	// save that sentence to the city's name, and show it

	cityname = cityname + sentence;
	
	if (count == 5){
	$("#cityname").html(cityname);
	}

	// console.log(text[sentence]);
	// console.log(sentence);



	if (count == 1) {
		var circle = new Path.Circle(event.point, 10);
		circle.fillColor = 'orange';
	}

	if (count <= 5) {
		myPath.add(event.point);
	}
	if (count == 5) {
		$("body").css('background', 'black');
		$(".enter").fadeIn(2000);
	}
}




// var color =[];
// color [0] = "hsla (10, 100, 50, 1)";
// color [1] = hsla (20, 100, 50, 1);
// color [2] = hsla (30, 100, 50, 1);
// color [3] = hsla (40, 100, 50, 1);
// color [4] = hsla (50, 100, 50, 1);
// color [5] = hsla (60, 100, 50, 1);
// color [6] = hsla (70, 100, 50, 1);
// color [7] = hsla (80, 100, 50, 1);
// color [8] = hsla (90, 100, 50, 1);
// color [9] = hsla (100, 100, 50, 1);
// color [10] = hsla (110, 100, 50, 1);
// color [11] = hsla (120, 100, 50, 1);
// color [12] = hsla (130, 100, 50, 1);
// color [13] = hsla (140, 100, 50, 1);
// color [14] = hsla (150, 100, 50, 1);
// color [15] = hsla (160, 100, 50, 1);
// color [16] = hsla (170, 100, 50, 1);
// color [17] = hsla (180, 100, 50, 1);
// color [18] = hsla (190, 100, 50, 1);
// color [19] = hsla (200, 100, 50, 1);
// color [20] = hsla (210, 100, 50, 1);
// color [21] = hsla (220, 100, 50, 1);
// color [22] = hsla (230, 100, 50, 1);
// color [23] = hsla (240, 100, 50, 1);
// color [24] = hsla (250, 100, 50, 1);
// color [25] = hsla (150, 100, 50, 1);
