$('#nav').affix({
  offset: {
    top: 100
  }
});

/* Fade in navbar-brand on scroll */


//$(function () {
//  if($('#nav').hasClass('affix')) {
//    $('navbar-brand').fadeIn();
//  }
//});

$(document).on('scroll', function() {
  $('#nav').each(function(){
    if($(this).hasClass('affix')) {
      $('.navbar-brand').fadeIn(500);
    } else {
      $('.navbar-brand').fadeOut(500);
    }
  });
});