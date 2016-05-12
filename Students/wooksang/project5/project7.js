$(document).ready(function() {
   $(".shape").mouseenter(function() {
       $(this).animate({
           height: '+=0px'
       });
   });
   $(".shape").mouseleave(function() {
       $(this).animate({
           height: '-=0px'
       }); 
   });
   $(".shape").click(function() {
       $(this).toggle(1000);
   }); 
});