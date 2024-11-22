(function ($) {
  "use strict";

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


})(jQuery);
