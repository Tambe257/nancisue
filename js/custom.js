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
      $('#right-nav').addClass('navbar-right');
    } else {
      $('.navbar-brand').hide();
      $('#right-nav').removeClass('navbar-right');
      $('navbar-nav').attr('float: none');
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

/* Animate third section on scroll */
$(function() {
  $(window).scroll( function(){
    $('#third-section').each( function(){

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* Adjust the "50" to either have a delay or that the content starts fading a bit before you reach it  */
      bottom_of_window = bottom_of_window + 10;  

      if( bottom_of_window > bottom_of_object ){

          $('div#box1').addClass('animate3');
          $('div#box2').addClass('animate2');
          $('div#box3').addClass('animate1');
      }
    }); 
  });
});

/* box slider */

$(document).ready(function(){
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 387,
    slideMargin: 0
  });
});


/* Show and remove the vendor content  */

$('#vendor-1').click(function(){
  $('#vendor-1-content').addClass('is-visible');
});

$('#close').click(function(){
  $('.vendor-content').addClass('close-content').removeClass('is-visible');
});