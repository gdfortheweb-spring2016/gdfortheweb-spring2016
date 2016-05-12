// variable
var name = "Wooksang";
var zip = 10001;



// functions
function sayHello() {
	var greeting = "Hellow " + name;
	console.log(greeting);
	// alert(greeting);

} 


// calling a function 이 아래것은 펑션 안에 있지 않기 때문에 work 하지 않는다.

//괄호안의 파란 펑션은 허버되었을 때 실행되게 해줌)

sayHello();

	$("h1").hover(function() {   
		$(this).html("Hovered");
		$(this).addClass("hovered")
	}, function() {
		$(this).html("Unhovered");
		$(this).removeClass("hovered");
	
});
	//$("h1").html(greeting)

//저 괄호안에 있는 것은 CSS다. 그 다음에 닷.-->access를 가능하게 해줌 to .html

$("h1").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 200;

	$(this).css("font-size", randNumber + "px");
});