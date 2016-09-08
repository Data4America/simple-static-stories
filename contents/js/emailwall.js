/**
 * ListView
 *
 * @module cs.ListView
 */
(function (window, document, $) {
  'use strict';

  var $elem;

  function init() {
    $elem = $('#dfa-email-wall');

    if (!$elem.length) {
      return;
    }

    if (cookieExists()) {
      $elem.remove();
      return;
    }

    $('#transcript-section')
      .addClass('locked')
      .append('<div class="wall"></div>');

    $elem.insertAfter('.media');

    $elem.find('.close').click(subscribed);

    window.subscribed = function() {
      subscribed();
    };

    events();
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function events() {
    $elem.find('.button').click(function() {
      var email = $elem.find('.input input').val();

      if (validateEmail(email)) {
        $(this).addClass('loading');
        $.getScript('https://dev.data4america.org/lifemap.php?email=' + email);
      }
    });

    $elem.find('.overlay').click(function() {
      subscribed();
    });
  }

  function subscribed() {
    setCookie();
    $elem.remove();
    $('#transcript-section')
      .removeClass('locked')
      .find('.wall')
      .remove();
  }

  function cookieExists() {
    if (document.cookie.search('isSubscribed=1') >= 0) {
      return true;
    }

    return false;
  }

  function setCookie() {
    var date = new Date();
    date.setTime(date.getTime()+(356*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = 'isSubscribed=1' + expires + '; path=/';
  }

  init();

}(window, document, jQuery));
