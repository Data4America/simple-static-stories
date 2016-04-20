/**
 * Unplugged
 */
(function (window, document, $) {
  'use strict';

  var $elem,
    $player,
    $iframe,
    player,
    checkInterval  = 50.0,
    lastPlayPos    = 0,
    currentPlayPos = 0,
    bufferingDetected = false,
    duration = 0;

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

    bindEvents();
    loadAudio();
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

  function formatSecondsAsTime(secs) {
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

    if (min < 10){
      min = "0" + min;
    }
    if (sec < 10){
      sec  = "0" + sec;
    }

    return min + ':' + sec;
  }

  function loadAudio() {
    var url = $('.lf-podcast:eq(0)').attr('data-url');
    var content = '' +
      '<audio id="unpluggedPlayer" controls="controls" style="position: absolute; top: -1000px; left: -1000px;">' +
      ' <source src="' + url + '" type="audio/mpeg" />' +
      '</audio>';

    $('body').append(content);

    player = document.getElementById('unpluggedPlayer');

    initPlayer();
  }

  function initPlayer() {


    player.addEventListener("timeupdate", timeUpdate, false);

    player.addEventListener("canplaythrough", function () {
      console.log(msToTime(player.duration));
      duration = player.duration;
    }, false);

    player.addEventListener("playing", function() {
      playerState('playing');
    }, false);

    player.addEventListener("canplay", function() {
      setInterval(checkBuffering, checkInterval);
    }, false);

    player.addEventListener("pause", function() {
      playerState('paused');
    }, false);

    player.addEventListener("waiting", function(e) {
      console.log('waiting');
    }, false);

    player.addEventListener("timeupdate", function(e) {
      updateTimer(e.target.currentTime);
    }, false);
    /*
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
    */
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

  function timeUpdate() {
    var playPercent = 100 * (player.currentTime / duration);
    updateProgressBar(playPercent);
  }

  function updateTimer(time) {
    $player.find('.time').html(formatSecondsAsTime(time));
  }

  function updateProgressBar(percent) {
    $player.find('.progress-bar .progress').css('width', percent + '%');
  }

  function checkBuffering() {
    currentPlayPos = player.currentTime

    // checking offset, e.g. 1 / 50ms = 0.02
    var offset = 1 / checkInterval

    // if no buffering is currently detected,
    // and the position does not seem to increase
    // and the player isn't manually paused...
    if (
            !bufferingDetected 
            && currentPlayPos < (lastPlayPos + offset)
            && !player.paused
        ) {
        //console.log("buffering")
        playerState('loading');
        bufferingDetected = true
    }

    // if we were buffering but the player has advanced,
    // then there is no buffering
    if (
        bufferingDetected 
        && currentPlayPos > (lastPlayPos + offset)
        && !player.paused
        ) {
        playerState('playing');
        bufferingDetected = false
    }
    lastPlayPos = currentPlayPos
  }

  function bindEvents() {

    $elem.find('.play-on-d4a').click(function() {
      $player.transition('vertical flip');
      var url = $(this).parents('.lf-podcast').attr('data-url');
      player.play();
    });

    $player.find('.lf-pause').click(function() {
      player.pause();
    });

    $player.find('.lf-play').click(function() {
      player.play();
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
