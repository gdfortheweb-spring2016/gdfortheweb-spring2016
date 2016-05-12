// a variable
var colors = ["#F1FE00", "orange", "#e5e500", "#00FF38","yellow","#FF4900"];
var words = ["coming", "RISD", "stunning", "amazing", "visiting", "designer", "yay!", "2016", "March", "CIT 103", "10-13", "Keetra", "Dean", "Dixon", "is", "a", "Designer", ",", "Director", "and", "Artist", ".", "Her", "hybrid", "design", "background", "and", "expertise", "in", "graphic" ,"design", "often", "leads", "her", "work", "towards", "speculative", "terrain", "leveraging", "emergent", "technologies", "the", "shortcomings", "of", "ubiquitous", "creative", "tools"];
var typeface = ["arial", "terminal-grotesque_open","Times","Comic Sans","hobo", "impact", "Verdana", "courier new"]
// functions

$(".keetra").on("click", function() {
	// $(".name").text("A Lecture and Workshop");

	$(".lecture").toggle();
	$(".name").toggle();
});




// $("body").on("click", function(){
// 	$(".keetra").html ("A Lecture and a Workshop");
// });
// $("body").on("mouseup", function(){
// 	$(".keetra").html("Keetra Dixon")
// });

$(".keetra").mousemove(function() {
		var typechange = typeface[Math.floor(Math.random() * typeface.length)];
		$(this).css("font-family", typechange);

		});
$(document).ready(function() {

$(".keetra").mousemove(function(){
        var div = $(this); 
        var chars = div.text().split('');
        div.html('');     
        for(var i=0; i<chars.length; i++) {
            var typechange = Math.floor(Math.random() * typeface.length);
            var span = $('<span>' + chars[i] + '</span>').css("font-family", typechange)
            div.append(span);
        }

    }, function() {
        $(this).find('span').css("font-family");
    });

});


$(".keetra").hover(function() {
	$(".confetti").each(function() {
		
		var randNumber = Math.random();
		$(this).css ("transform", "rotate(" + (randNumber/10) + "deg)");
		$(this).toggleClass("hovered")
		
		var randcolor = colors[Math.floor(Math.random() * colors.length)];
		$(this).css("color", randcolor);
		$(this).css("font-size", "." + (randNumber/10));
		
		var wordchange = words[Math.floor(Math.random() * words.length)];
		$(this).html(wordchange);




	});
	});
	

$(document).on('mousemove', function(e){
    $('.keetra').css({
       left:  e.pageX,
       top:   e.pageY
    });
});
