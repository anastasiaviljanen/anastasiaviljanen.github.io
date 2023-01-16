

$(function () {
  "use strict";
  /*=========================================================================
          One Page Nav
  =========================================================================*/
  $(".navigation").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 700,
    scrollThreshold: 0.5,
    easing: 'easeInOutCubic'
  });


  /*=========================================================================
          Hamburger Menu & Mobile Push menu
  =========================================================================*/
  $(".hamburger-menu, .main-nav ul li a").on('click', function () {
    $(".header").toggleClass("pushed");
    $(".main-content").toggleClass("main-pushed");
    $('.bar').toggleClass('animate');
  });


});