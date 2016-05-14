var name = "Llewellyn";
var zip = 10001;

function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting);
}

sayHello();

$("h1").hover(function() {
	$(this).addClass("hover");
	var foo = Math.random() * 100;
	console.log(foo);
	$(this).css("font-size", foo + "px");

	$(this).addClass("hovered");
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	console.log(foo);
	$(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")"   );
});

// make each letter in keetra dixon a random color
// make background a video
// add additional text from poster
// make dots buttons?

// color: rgb(255, 255, 255);

// with hover, 
// generate a random red value
// generate a random blue value
// generate a random green value
// set shape color to random color, based on rgb values

// this=just the one that is hovered

// jquery is a toolkit of functions, written in javascript; 
// $ and jquery are =; reach out and grab elements in html; 
// parentheses are like input into the function, 
// a place where function accepts input; CSS selector of the html element we want to work with;
// give jquery a selector; modify the page after it's loaded

// ask DIV AND ID

// window.setInterval(update, 5000);
	// update();
// array (a type of variable) [with sq bracket]
// return array (ccall the function and use what it generates)