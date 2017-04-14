$(document).ready(function(){
  $('.header-logo-image').mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "50%", height: "50%"}, 'slow');
  });

  $('.header-logo-image').mouseleave(function() {
    $(this).animate({width: "28%"}, 'slow');
  });
});
