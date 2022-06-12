$(document).ready(function(){

  
  $('#mobile-menu').meanmenu({

    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'

  });

// Sticky

$(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 1) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
});


// slide-active

$('.slide-active').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
});


// Counter


$('.counter').counterUp({
    delay: 10,
    time: 3000
});


// client-slide


$('.client-slide').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});


// Logo active

$('.logo-active').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow:4,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]





});





});







