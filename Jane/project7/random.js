(function makeDiv(){
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'background-color': color
    });
    
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(300).fadeOut(200, function(){
       $(this).remove();
       makeDiv(); 
    }); 
})();
