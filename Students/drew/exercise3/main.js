// a variable
var name = "Drew";
var zip = 02906;
var colors = ["teal", "orange", "black", "red", "blue"];
var words = ["hello", "fuck", "yikes", "crap", "bam!", "salad?", "???"];

// functions
function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting);
}

$("div").hover(function() {
	$(this).html("ON");
	$(this).toggleClass("hovered")
	var randcolor = colors[Math.floor(Math.random() * colors.length)];
	$(this).css("background-color", randcolor);
}, function() {
	$(this).css("border-radius", Math.random() * 400);
	var wordchange = words[Math.floor(Math.random() * words.length)];
	$(this).html(wordchange);
	//$(this).html("DOPE")
	//$(this).removeClass("hovered")
	//$(this).html(" ");
});

$("div").click(function () {
	$(this).toggleClass("clicked");
	var randNumber = Math.random() * 360;
	$(this).css("font-size", (randNumber/2) + "px");
	$(this).css ("transform", "rotate(" + randNumber + "deg)");
	$(this).css ("height", randNumber + 100 + "px");
	$(this).css ("width", randNumber + 50 + "px");
	console.log(randNumber);
	;
});

// calling a function
sayHello();