//blinking time
function blinking () {

  $(".blink").each(function() {
    var elem = $(this);
    setInterval(function() {
      if (elem.css('visibility') == 'visible') {
        elem.css('visibility', 'hidden');
      } else {
        elem.css('visibility', 'visible');
      }
    }, 800);
  });
}

//randoFloatGenerator
function getRandomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

/****GO TIME SHOW TIME****/
$(document).ready(function() {

  var $allElements = $('.elements');
  var i = 0;

  //clicking magic
  $('.container').click(function(){

    $('.intro').hide();
    $('.reset-button').show();
    $('.print').show();

    $allElements.eq(i).css({
      "display": "block",
      "position": "absolute",
      "left": event.pageX,
      "top": event.pageY,
      'transform': 'rotate(' + getRandomInt(-90,90) + 'deg)'
    });

    i++ % $allElements.length;
    $('.container').append(eq(i));

      // //break the loop
      // if (i == 4) {
      //   return false;
      // }
  });

  //fire blinking
  blinking();

  //description show
  $(".moniker-star").hover(function() {
    $(".description").css({
      "background": "white",
      "z-index": 100
    });

    $(".description > p").css({
      "visibility": "visible",
    });
  }, function() {
    $(".description").css({
      "background": "none",
      "z-index": 0
    });

    $(".description > p").css("visibility", "hidden");
  });

});