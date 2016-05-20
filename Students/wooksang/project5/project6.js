
$(function() {

$(".shape").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 900;

	$(this).css("left", randNumber + "px");

});