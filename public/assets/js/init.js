function init ($) {
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({indicators: false, interval: 5000})

  });
}

// init(jQuery);
// (function($){
//   $(function(){

//     $('.button-collapse').sideNav();
//     $('.parallax').parallax();
//     $('.slider').slider();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space
