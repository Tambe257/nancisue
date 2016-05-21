$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$('.burger a').click(function(){
  $('.topnav').toggleClass('responsive');
});


//$('#nav').affix({
//  offset: {
//    top: 100
//  }
//});




/* Fade in navbar-brand on scroll */
//
//$(document).on('scroll', function() {
//  $('#nav').each(function(){
//    if($(this).hasClass('affix')) {
//      $('.navbar-brand').fadeIn(500);
//      $('#right-nav').addClass('navbar-right');
//    } else {
//      $('.navbar-brand').hide();
//      $('#right-nav').removeClass('navbar-right');
//      $('navbar-nav').attr('float: none');
//    }
//  });
//});


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


$(function () {
  $('[id^=vendor-]').click(function () {
    var num = this.id.split('vendor-')[1];
    var vendorId = '#vendor-' + num + '-content';
    
    $(vendorId).addClass('is-visible');

  });
});

$(function() {
   $('.vendor-content').click(function() {

     $(this).removeClass('is-visible');

   });
});
