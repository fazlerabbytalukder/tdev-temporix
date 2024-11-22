(function ($) {
  "use strict";


  // hero image slider 
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Allow bullets to be clickable
    },
    navigation: {
      nextEl: ".custom-btn-next",
      prevEl: ".custom-btn-prev",
    },
  });
  $(".custom-btn-next").on("click", function () {
    swiper.slideNext();
  });
  $(".custom-btn-prev").on("click", function () {
    swiper.slidePrev();
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
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
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

  //location slider
  var swiper = new Swiper(".td-location-slider-active", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".location-slider-btn-next",
      prevEl: ".location-slider-btn-prev",
    },
    breakpoints: {
      329: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


})(jQuery);
