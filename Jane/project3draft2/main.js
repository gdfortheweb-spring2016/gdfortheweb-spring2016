
$("div").ready(function(){

		var choices = ["chair","armchair","leg", "table", "spoon", "bottle"];
		$(".choices").each(function(index){
			var len = choices.length;
		var choice= choices[Math.floor(Math.random()*choices.length)];
		document.write('<font size = \"50px\">' + "<br>" + choice);
	});


});

