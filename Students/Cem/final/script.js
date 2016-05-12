var grids = $(".grid");

var $randomGrid = $(grids[Math.floor(Math.random() * grids.length)]);

//console.log($randomGrid);

$randomGrid.removeClass("notselected");

$(".notselected").remove();


//every div is class = empty
$('div.traget').addClass("empty");




var orientOptions = ["horiz", "vert"];
var currentEvent = "";
var timeInactive = 0;
var $currentDiv = "";
var timer = setInterval(time, 500);
var currentDirection = "";
var $availableDivs = $("div.empty");

function time(){

	timeInactive++;
	//console.log(timeInactive);
	//console.log(currentEvent);

	if (timeInactive>3) {

		currentEvent = "Idle";
	};
}



$(window).click(function (){

	timeInactive = 0;
	
	
	if(currentEvent != "click"){

		currentEvent = "click";		
		$currentDiv = $($availableDivs[Math.floor(Math.random() * $availableDivs.length)]);
		$currentDiv.removeClass("empty");
		$availableDivs = $("div.empty");
		var orientAssign = orientOptions[Math.floor(Math.random() * orientOptions.length)];
		currentDirection = orientAssign;
		$currentDiv.append("<img src='circle.svg'>");
		var $imgs = $currentDiv.find("img");
		var size = 100 / $currentDiv.children().length + "%";




		if(currentDirection === "horiz"){

			//console.log("its horiz");
			$imgs.css("width", size);
			$imgs.css("height", "100%");

		}

		else

		{
			//console.log("its vert");
			$imgs.css("height", size);
			$imgs.css("width", "100%");

		}	

	


	}
	else
	{

		$currentDiv.append("<img src='circle.svg'>");
		var $imgs = $currentDiv.find("img");
		var size = 100 / $currentDiv.children().length + "%";


		if(currentDirection === "horiz"){

			$imgs.css("width", size);
			$imgs.css("height", "100%");

		}

		else

		{
			$imgs.css("height", size);
			$imgs.css("width", "100%");

		}

	}


});



$(window).resize(function (){

	timeInactive = 0;

	if (currentEvent != "resize") {

		currentEvent = "resize";
		$currentDiv = $($availableDivs[Math.floor(Math.random() * $availableDivs.length)]);
		$currentDiv.removeClass("empty");
		$availableDivs = $("div.empty");
		var orientAssign = orientOptions[Math.floor(Math.random() * orientOptions.length)];
		currentDirection = orientAssign;


		if(currentDirection === "horiz"){

			//console.log("its horiz");
			$currentDiv.append("<img src='triangle.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("width", size);
			$imgs.css("height", "100%");

		}

		else

		{
			//console.log("its vert");
			
			$currentDiv.append("<img src='triangle2.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("height", size);
			$imgs.css("width", "100%");


		}




	}
	else
	{

	
			if(currentDirection === "horiz"){

			$currentDiv.append("<img src='triangle.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("width", size);
			$imgs.css("height", "100%");

		}

		else

		{
			
			$currentDiv.append("<img src='triangle2.svg'>")
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("height", size);
			$imgs.css("width", "100%");


		}








	}

		


});




$(window).keypress(function (){



	timeInactive = 0;

	if (currentEvent != "keypress") {

		currentEvent = "keypress";
		$currentDiv = $($availableDivs[Math.floor(Math.random() * $availableDivs.length)]);
		$currentDiv.removeClass("empty");
		$availableDivs = $("div.empty");
		var orientAssign = orientOptions[Math.floor(Math.random() * orientOptions.length)];
		currentDirection = orientAssign;


		if(currentDirection === "horiz"){

			//console.log("its horiz");
			$currentDiv.append("<img src='R2.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("width", size);
			$imgs.css("height", "100%");

		}

		else

		{
			//console.log("its vert");
			
			$currentDiv.append("<img src='R.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("height", size);
			$imgs.css("width", "100%");


		}




	}
	else
	{

	
			if(currentDirection === "horiz"){

			$currentDiv.append("<img src='R2.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("width", size);
			$imgs.css("height", "100%");

		}

		else

		{
			
			$currentDiv.append("<img src='R.svg'>");
			var $imgs = $currentDiv.find("img");
			var size = 100 / $currentDiv.children().length + "%";


			$imgs.css("height", size);
			$imgs.css("width", "100%");


		}








	}



	

		
  
});




//timeout for timer

/*setTimeout(function( ){ 

	clearInterval(timer);
	window.print();

}, 5000);
*/


