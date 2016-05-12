

$(function() {



// variable
var name = "Who They Are";

// functions
function sayHello() {
	var greeting = "Click the Red Circles If You Want to Know " + name;
	alert(greeting);

} 

// calling a function 이 아래것은 펑션 안에 있지 않기 때문에 work 하지 않는다.

//괄호안의 파란 펑션은 허버되었을 때 실행되게 해줌)

sayHello();
	
});
	//$("h1").html(greeting)

//저 괄호안에 있는 것은 CSS다. 그 다음에 닷.-->access를 가능하게 해줌 to .html


$(".one").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 600;

	$(this).css("top", randNumber + "px");
});

$(".two").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 600;

	$(this).css("top", randNumber + "px");
});

$(".three").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 600;

	$(this).css("top", randNumber + "px");
});


});