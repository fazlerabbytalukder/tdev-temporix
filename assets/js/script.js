(function ($) {
  "use strict";


  // hero image slider 
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".custom-btn-next",
      prevEl: ".custom-btn-prev",
    },
  });


  // offcanvas bar 
  $(".td-offcanvas-toggle").on('click', function () {
    $(".td-offcanvas").addClass("td-offcanvas-open");
    $(".td-offcanvas-overlay").addClass("td-offcanvas-overlay-open");
  });
  $(".td-offcanvas-close-toggle,.td-offcanvas-overlay").on('click', function () {
    $(".td-offcanvas").removeClass("td-offcanvas-open");
    $(".td-offcanvas-overlay").removeClass("td-offcanvas-overlay-open");
  });


  // brands slider
  var swiper = new Swiper(".td-brand-active", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Enables infinite loop
    speed: 4000,
    autoplay: {
      delay: 1, // Delay between transitions (in milliseconds)
      disableOnInteraction: false, // Keeps autoplay running after user interactions
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
  });


})(jQuery);
