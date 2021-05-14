"use strict";

jQuery(document).ready(function ($) {
  // $('#featurePortfolio').flexslider({
  // 	selector: '.slides > .slide-group',
  // 	directionNav: false,
  // 	controlsContainer: "#slide-controller",
  // 	smoothHeight: true
  // }); 
  $('.flexslider').flexslider({
    selector: '.slides > .slide-group',
    directionNav: false,
    controlsContainer: "#slide-controller" // smoothHeight: true

  });
  $(document).on("click", "#toggleMenu", function () {
    $(this).toggleClass('open');
    $("#site-navigation").toggleClass('menu-open');
  });
  new WOW().init();
  /*
  *
  *	Smooth Scroll to Anchor
  *
  ------------------------------------*/

  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }

          ;
        });
      }
    }
  });
  /* Slick Carousel */

  $('.swipe-projects').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  /* Portfolio Filter */

  if ($("#portfolioFilter").length > 0) {
    //var filter_params = '';
    var currentURL = $("#portfolioFilter").attr("data-currentURL");
    $("#portfolioFilter select").on("change", function () {
      $(".spinnerDiv").addClass("show");
      $("#filterBtn").submit();
    });
    $("#filterBtn").on("submit", function (e) {
      e.preventDefault();
      var filter_params = '';
      $("#portfolioFilter select").each(function (k) {
        var name = $(this).attr("name");
        var and = k > 0 ? '&' : '?';
        var selected = $(this).find("option:selected").val();
        filter_params += and + name + "=" + selected;
      });
      var url = currentURL + filter_params;
      $("#filterResult").load(url + ' #filterContent', function () {});
    });
  }

  $('.select-style').select2({
    minimumResultsForSearch: -1,
    selectOnClose: true
  });
});