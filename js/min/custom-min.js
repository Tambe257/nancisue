$(document).ready(function(){$(".bxslider").bxSlider({minSlides:1,maxSlides:3,slideWidth:387,slideMargin:0})}),$(window).scroll(function(){$(document).scrollTop()>100?$("nav").addClass("shrink"):$("nav").removeClass("shrink")}),$(".burger a").click(function(){$(".topnav").toggleClass("responsive")}),$(function(){$(".hamburger-menu").on("click",function(){$(".bar").toggleClass("animate")})}),$(function(){$("a.page-scroll").bind("click",function(i){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top},1500,"easeInOutExpo"),i.preventDefault()})}),$(function(){$(window).scroll(function(){$("#third-section").each(function(){var i=$(this).position().top+$(this).outerHeight(),n=$(window).scrollTop()+$(window).height();n-=50,n>i&&($("div#box1").addClass("animate3"),$("div#box2").addClass("animate2"),$("div#box3").addClass("animate1"))})})}),$(function(){$("[id^=vendor-]").click(function(){var i=this.id.split("vendor-")[1],n="#vendor-"+i+"-content";$(n).addClass("is-visible")})}),$(function(){$(".vendor-content").click(function(){$(this).removeClass("is-visible")})});