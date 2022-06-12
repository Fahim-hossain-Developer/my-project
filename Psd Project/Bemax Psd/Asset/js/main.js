$(document).ready(function(){

   $('.mob-menu').meanmenu({
    meanScreenWidth: "768",
    meanMenuContainer: '.mobile-menu',
   });



  $('.slider-part').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





$('.project-active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})






$('.video-popup-link').magnificPopup({
  type: 'image'
  // other options
});






$('.brands-active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:6
        },
        768:{
            items:4
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
})


$('.blog-active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('.testimonal-active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





})