$(function() {

	/* get city info from url hash */

	var city = window.location.hash;

	/* find corresponding sentences */

	var SentencesSplit = city.split(",");

	$("#story").html(text[SentencesSplit[1]] + " ");
	$("#story").append(text[SentencesSplit[4]] + " ");
	$("#story").append(text[SentencesSplit[7]] + " ");
	$("#story").append(text[SentencesSplit[10]] + " ");
	$("#story").append(text[SentencesSplit[13]]);

	console.log(text.length);

	/* re-draw the city image */

	var redraw = new Path();

	var redrawCanvas = function() {

		var smallCanvasW = $("#smallCanvas").width();
		var smallCanvasH = $("#smallCanvas").width() * ($(window).height()) / ($(window).width());

		$("#smallCanvas").css("width", smallCanvasW);
		$("#smallCanvas").css("height", smallCanvasH);

		var cols = 25;
		var rows = 22;

		var stroke1 = new Point (smallCanvasW / cols * SentencesSplit[2], smallCanvasH * SentencesSplit[3] / rows);
		var stroke2 = new Point (smallCanvasW / cols * SentencesSplit[5], smallCanvasH * SentencesSplit[6] / rows);
		var stroke3 = new Point (smallCanvasW / cols * SentencesSplit[8], smallCanvasH * SentencesSplit[9] / rows);
		var stroke4 = new Point (smallCanvasW / cols * SentencesSplit[11], smallCanvasH * SentencesSplit[12] / rows);
		var stroke5 = new Point (smallCanvasW / cols * SentencesSplit[14], smallCanvasH * SentencesSplit[15] / rows);
		
		// console.log(stroke1);

		redraw.remove();
		redraw = new Path();
		// redraw.removeSegment(0);
		redraw.strokeColor = 'orange';
		redraw.strokeWidth = 8;
		redraw.strokeCap = 'round';
		redraw.strokeJoin = 'round';
		redraw.add(stroke1);
		redraw.add(stroke2);
		redraw.add(stroke3);
		redraw.add(stroke4);
		redraw.add(stroke5);
	};


	var cityname = SentencesSplit[1] + SentencesSplit[4] + SentencesSplit[7] + SentencesSplit[10] + SentencesSplit[13];
	$("#cityname3").html(cityname);
	// console.log (cityname);


	redrawCanvas();
	$(window).on("load resize", redrawCanvas);

function print() {
    $("body").print();
	}

function goBack() {
    window.history.back();
}


	// function print() {
 //    window.print();
	// }
	// window.onload = function() {

	//     $('body').html('before print');

	//     console.log('before print');

	//     window.print();
	// };

	/*
	$("#othercities").click(function() {
	    var city1 = $(stroke1).val();
	    var city2 = $(stroke2).val();
	    $.ajax({
	        type: 'POST',
	        url: 'index.php',
	        data: { city1: val1, city2: val2 },
	        success: function(response) {
	            $('#smallCanvas').html(response);
	        }
	    });
	});
	

	function genPDF() {
	   	var doc = new jsPDF();
	   	doc.fromHTML ($("#story").get(0), 20,20,{"width": 700 });
	   	doc.save ("yourCity.pdf");
	   };

	//  $("#othercities").click() {
	//  	function othercities(event) {
	//  		$("#smallCanvas").get();
	// 	};
	//  };


	// Problems: 
	// 1) smallCanvas proportion seems right but graphic is squeezed.
	// 2) can't find variable: genPDF
	// 3) cityname --> the last sentence value is being added five times
	// 4) php --> i want to store only the last five input


	// 1. Store values for stroke1, stroke2, stroke 3, ... (x5)
	// 2. Call them (echo?)

	// TO DO
	// 1) don't do PDF --> just print page.
	// 2) don't do php --> just have a textual list of cities, linking them to url



	//	SentencesSplit[x] is 'sentence'
	// 	event.point.x = mouse x
	//	event.point.y = mouse y

	// var c = document.getElementById("myCanvas");
	// var ctx = c.getContext("2d");

	//So now, 
*/
});