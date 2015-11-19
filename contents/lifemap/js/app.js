$(document).ready(function() {

  var height = $(window).height();

  $('header').height(height);

  $('section').each(function() {
    if ($(this).find('.lf-milestone').length > 6) {
    }

    if ($(this).height() < height) {
      $(this).height(height);
    }
  });

  window.sr = new scrollReveal();

});
