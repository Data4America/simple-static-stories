/**
 * Unplugged
 */
(function (window, document, $) {
  'use strict';

  var $elem,
    $player,
    $iframe,
    widget,
    loaded = false,
    audioLength = 0;

  function init() {
    $elem = $('#dfa-unplugged');
    $iframe = $elem.find('iframe');
    $player = $('#dfa-unplugged-player');

    if (isMobile()) {
      $player.find('.progress-bar').parent().hide();
      $player.find('.nine.wide.column').attr('class', 'eleven wide column');
      $player.find('.one.wide.column').attr('class', 'two wide column');
    }

    if (!$elem.length) {
      return;
    }

    loadScript();
  }

  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return mins + ':' + (secs < 10 ? '0' + secs : secs);
  }

  function updateTimer(time) {
    $player.find('.time').html(msToTime(time));
  }

  function updateProgressBar(point) {
    $player.find('.progress-bar .progress').css('width', (point * 100) + '%');
  }

  function loadScript() {
    $.getScript('https://w.soundcloud.com/player/api.js', function() {
      bindEvents();
    });
  }

  function initPlayer(url) {

    $iframe.attr('src', url);

    widget = SC.Widget($iframe[0]);

    widget.bind(SC.Widget.Events.READY, function() {
      loaded = true;

      widget.getDuration(function(duration) {
        audioLength = duration;
      });

      if ($player.css('display') === 'block') {
        widget.play();
      }
    });

    widget.bind(SC.Widget.Events.LOAD_PROGRESS, function() {

    });

    widget.bind(SC.Widget.Events.PLAY, function() {
      playerState('playing');
    });

    widget.bind(SC.Widget.Events.SEEK, function() {
      playerState('playing');
    });

    widget.bind(SC.Widget.Events.LOAD_PROGRESS, function() {
      playerState('loading');
    });

    widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(stats) {
      updateTimer(stats.currentPosition);
      updateProgressBar(stats.relativePosition);
    });

    widget.bind(SC.Widget.Events.PAUSE, function() {
      playerState('paused');
    });

    widget.bind(SC.Widget.Events.FINISH, function() {
      playerState('paused');
    });
  }

  function playerState(state) {
    console.log(state);
    $player.find('.icons').hide();
    $player.find('.lf-pause').hide();
    $player.find('.lf-play').hide();

    if (state === 'playing') {
      $player.find('.lf-pause').show();
    } else if (state === 'paused') {
      $player.find('.lf-play').show();
    } else {
      $player.find('.icons').show();
    }
  }

  function bindEvents() {

    $elem.find('.play').click(function() {
      $player.transition('vertical flip');

      var url = $(this).parents('.lf-podcast').attr('data-url');

      initPlayer(url);
    });

    $player.find('.lf-pause').click(function() {
      widget.pause();
    });

    $player.find('.lf-play').click(function() {
      widget.play();
    });

    $player.find('.progress-bar .bar').click(function(e) {
      var m_posx = 0, m_posy = 0, e_posx = 0, e_posy = 0,
           obj = this;
      //get mouse position on document crossbrowser
      if (!e){e = window.event;}
      if (e.pageX || e.pageY){
          m_posx = e.pageX;
          m_posy = e.pageY;
      } else if (e.clientX || e.clientY){
          m_posx = e.clientX + document.body.scrollLeft
                   + document.documentElement.scrollLeft;
          m_posy = e.clientY + document.body.scrollTop
                   + document.documentElement.scrollTop;
      }
      //get parent element position in document
      if (obj.offsetParent){
          do{ 
              e_posx += obj.offsetLeft;
              e_posy += obj.offsetTop;
          } while (obj = obj.offsetParent);
      }

      // mouse position minus elm position is mouseposition relative to element:
      console.log(' X Position: ' + (m_posx-e_posx)
                  + ' Y Position: ' + (m_posy-e_posy));
      var width = $(this).width();
      var percent = ((m_posx-e_posx) / width);

      if (audioLength) {
        widget.seekTo(audioLength * percent);
        playerState('loading');
      }
    });
  }

  init();

}(window, document, jQuery));
