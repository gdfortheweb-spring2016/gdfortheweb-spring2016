// variables
var name = "Boyang";
var zip = 10001;

// functions
function sayHello() {
	var greeting = "Hello" + name;
	// alert(greeting);
	console.log(greeting);
	//css: h1{} the same
	// $("h1")
}

//calling a function
sayHello();


$("h1").hover(function(){
	$(this).html("Hovered");
})
//this just the one got hovered. 

$("h1").hover(function() {
	$(this).html("Hi");
	$(this).addClass("hovered");
}, function() {
	$(this).html("see ya");
	$(this).removeClass("hovered");
});


$("h1").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 100;
	$(this).css("font-size", randNumber + "px");
});

$("div").hover(function(){
	$(this).addClass("hoverhover");
}, function(){
	$(this).removeClass("hoverhover");
});