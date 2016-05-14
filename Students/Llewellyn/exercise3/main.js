// a variable (container); can have a text or a number inside; two different types; can name them whatever you want (no special requirements)//
var name = "Llewellyn";
var zip = 10001;

// functions (just like a variable, instead of containing a value, it contains a set of instructions)
function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting);
}

sayHello();
sayHello();
sayHello();
sayHello();

// alert("is this working");

// $("div").hover(function() {
// 	$(this).html("Hi");
// 	$(this).addClass("hovered");
// }, function() {
// 	$(this).html("Bye");
// 	$(this).removeClass("hovered");
// });

// $("h1").click(function() {
// 	$(this).addClass("clicked");
// 	var randNumber = Math.random() * 100;
// 	console.log(randNumber);
// 	$(this).css("font-size", randNumber + "px");
// });

// $("div.border").click(function() {
// 	$(this).addClass("clicked");
// 	var randNumber = Math.random() * 100;
// 	console.log(randNumber);
// 	$(this).css("border-width", randNumber + "px");
// });

$("div").hover(function() {
	$(this).addClass("hovered");
	var foo = Math.random() * 100;
	console.log(foo);
	$(this).css("border-width", foo + "px");

	$(this).addClass("hovered");
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	console.log(foo);
	$(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")"   );
});

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