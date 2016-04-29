$('#nav').affix({
  offset: {
    top: 100
  }
});

/* Fade in navbar-brand on scroll */

$(document).on('scroll', function() {
  $('#nav').each(function(){
    if($(this).hasClass('affix')) {
      $('.navbar-brand').fadeIn(500);
    } else {
      $('.navbar-brand').fadeOut(500);
    }
  });
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});