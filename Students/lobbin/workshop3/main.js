//a variable
var name = "Andrew";
var zip = 10001;

//functions
function sayHello(){
	var greeting ="Hello " + name;
	//alert(greeting);
	//console.log(greeting);
		// $("h1").html(greeting);

}
// calling a function
sayHello();

$(function() {

	$("h1").hover(function() {
		$(this).html("hi");
		$(this).addClass("hovered")
	}, function() {
		$(this).html("Hello");
		$(this).removeClass("hovered");
	});

	$("h1").click(function(){
		$(this).addClass("clicked");
		var randNumber =Math.random()*200;
		$(this).css("font-size", randNumber +"px");
	});

});

