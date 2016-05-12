var gotAFish = false;

$(".someDiv").mouseenter(function() {

	var $fish = $("#fish").clone();
		$fish.appendTo("body");


		// Step 1: show the fish, change position to absolute
		// 
		$fish.css({"position" : "absolute"});
		$fish.show();


		// Let's get a random fish
		//
		// 1.png ... 8.png
		//
		// 3.7 --> 3
		//
		// Math.random() --> (0 ... 1)				// () --> inclusive, [] --> exclusives
		// Math.random() * 8 --> (0 ... 7)
		// Math.random() * 8 + 1 --> (1 ... 8)
		//
		var randomFishIndex = Math.floor(Math.random() * 8) + 1;
		console.log(`Getting the fish: ${randomFishIndex}`);

		// 1.png, 2.png ... 8.png
		//
		var randomFishPath = `${randomFishIndex}.png`;
		console.log(randomFishPath);

		// Change the source attribute of the fish
		//
		$fish.attr("src", randomFishPath);	

		// Step 2: set up a function handler to mousemove (ie. whenever i move my mouse a function gets called)
		//
	    $(document).mousemove(function(event) {
	        $fish.css(
	        	{
	        		"left"	: event.clientX, 
	        		"top"	: event.clientY
	        	});   
	    });  
});

//end movement with click on the div.
$(document).bind("click",function(){
    $(document).unbind("mousemove");
    // $(".image").hide();
});



	
