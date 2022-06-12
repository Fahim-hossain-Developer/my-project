$(document).ready(function(){


$('#mobile-menu').meanmenu({

    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'

  });

// top-button
   
$(window).scroll(function(){
 if($(this).scrollTop() > 40){
  $('#top-button').fadeIn();
} else{
  $('#top-button').fadeOut();
}

});

$("#top-button").click(function(){
   $('html ,body').animate({scrollTop :0},800);



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

// Counter

 $('.counter').counterUp({
    delay: 10,
    time: 3000
});


// Project-isotope

var $grid =$('.filter-active').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})

 

 // filter items on button click
$('.project-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



// Project-isotope

// Active nd remove class

$('.project-menu li').on('click', function (event) {

  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();

});


// Owl-slider


  $('.client-area .owl-carousel').owlCarousel({

    loop: true,
    autoplay:true,
    dots:true,
    navText:true,
    responsive:{
     
     0: {
      items: 1
     },
     767: {
      items: 2
     }

    }

  });












});