$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function() {
      // Toggles a class on the menu button to transform the burger menu into a cross
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
      
      // Toggles a class that slides the menu into view on the screen
      $('.mobile-menu').toggleClass('mobile-menu--open');
      return false;
    }); 
  });


  var sliderCarousel =  $('.slider-carousel .owl-carousel')

  sliderCarousel.owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoPlay:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        1199:{
            items:3
        }
    }
  });

  $(".slider-left-carousel").click(function() {
      sliderCarousel.trigger("prev.owl.carousel");
  })

  $(".slider-right-carousel").click(function() {
      sliderCarousel.trigger("next.owl.carousel");
  })


  var numberYasko = $(".four-left-carousel .owl-carousel");

  numberYasko.owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        }
    }
  });


  $(".carousel-nav-extra .extra-prev").click(function() {
     numberYasko.trigger("prev.owl.carousel");
  })

  $(".carousel-nav-extra .extra-next").click(function() {
      numberYasko.trigger("next.owl.carousel");
  });


  var pdGallery = $(".project-detail-gallery-carousel .owl-carousel");

  pdGallery.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,    
  })


  $(".project-detail-gallery-carousel .s2-left").click(function() {
      pdGallery.trigger("prev.owl.carousel");
  })

  $(".project-detail-gallery-carousel .s2-right").click(function() {
      pdGallery.trigger("next.owl.carousel");
  });