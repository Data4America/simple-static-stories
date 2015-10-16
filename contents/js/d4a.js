window.fbAsyncInit = function() {
    FB.init({
        appId: '170634933274064',
        xfbml: true,
        version: 'v2.4'
    });
};

function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

// Only run Google Analytics in production
var enableAnalyticsHostnames = ['stories.data4america.org', 'data4america.org', 'www.data4america.org'];
if (enableAnalyticsHostnames.indexOf(location.hostname) >= 0) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-64882029-1', 'auto');
    ga('send', 'pageview');
}

var isMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

$(document).ready(function() {
  $('#dfa-header .ui.dropdown').dropdown();

  $('.dfa-sidebar-tap, .ui.sidebar .angle.double.left').click(function() {
    $('.ui.sidebar')
      .sidebar({
        transition: 'overlay',
        mobileTransition: 'overlay',
      })
      .sidebar('toggle');
  });

  $('#dfa-sidebar-border').height(screen.height);

  if (isMobile()) {
    $('#dfa-header.ui.menu .ui.dropdown .menu').width(screen.width);

    $('#dfa-sidebar').width(screen.width);

    $('.dfa-share .container:not(.mobile)').hide();
    $('.dfa-share .container.mobile').show();

    $('.dfa-donate-modal .close.icon').remove();

    $('.dfa-header-title').remove();
    $('.dfa-header-article-share').remove();
  } else {
    $('.dfa-article-header .sms').remove();
  }

  $('#dfa-header .subscribe').click(function() {
    $('#dfa-email').transition('slide down', function() {
      $('#dfa-email input:eq(0)').focus();
    });
  });

  $('#dfa-email .cancel').click(function() {
    $('#dfa-email').transition('slide up');
  });

  $('#dfa-email .submit').click(function() {

    $(this).addClass('loading');
    setTimeout(function() {

      $('#dfa-email').transition('slide up');
      $('#dfa-email-modal')
        .modal('show');
    }, 1000);
  });

  $('.ui.button.facebook, .dfa-header-article-share.fb').click(function() {
    FB.ui({
        method: 'share',
        href: this.dataset.url
    }, function () {});
  });

  $('.ui.button.twitter, .dfa-header-article-share.tw').click(function() {
    PopupCenter('http://twitter.com/intent/tweet?url=' + encodeURI(this.dataset.url) + '&text=' + encodeURI(this.dataset.text) + '&hashtags=d4a&via=data4america', 'Share on Twitter', 550, 400);
  });

  var scrollCount = 0;
  var contentTop = $('#dfa-cover').height();
  $(window).on('scroll', function() {
    scrollCount++;
    if (scrollCount >= 20) {
      scrollCount = 0;
      hideEmailForm();
    }

    if ($(window).scrollTop() > 10) {
      $('#dfa-footer').show();
    } else {
      $('#dfa-footer').hide();
    }

    if ($(window).scrollTop() > contentTop) {
      $('#dfa-header').show();
    } else {
      $('#dfa-header').hide();
    }
  });

  if ($('article.article.big').length) {
    var title = $('.dfa-article-header .ui.header').html();
    $('.dfa-header-title').html(title);
  } else {
    $('.dfa-header-article-share').remove();
  }

  if (window.location.pathname.search("/donate") === 0) {
    $('#dfa-footer').remove();
    $('.dfa-btn-donate').remove();
    $('#dfa-donate-modal').remove();
  }

  var $donateModal = $('#dfa-donate-modal');
  $donateModal
    .modal({
      onShow: function() {
        $donateModal.modal('refresh');
      },
      onHidden: function() {
        $donateModal.find('.body-text').html('');
        $.getScript('/js/donate.js');
      },
    });
  $('.dfa-btn-donate').click(function() {
    $donateModal.modal('show');
  });

  $.getScript('https://checkout.stripe.com/checkout.js', function() {
    $.getScript('/js/donate.js');
  });

  $.getScript('//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js', function() {
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[3]='LNAME';ftypes[3]='text';fnames[2]='AMOUNT';ftypes[2]='number';fnames[4]='DONATETO';ftypes[4]='text';fnames[6]='TSHIRT';ftypes[6]='text';fnames[7]='FACEBOOK';ftypes[7]='url';fnames[8]='TWITTER';ftypes[8]='url';fnames[9]='LINKEDIN';ftypes[9]='url';fnames[5]='ADDRESS';ftypes[5]='text';fnames[10]='ID';ftypes[10]='text';fnames[11]='DT';ftypes[11]='text';fnames[12]='ANON';ftypes[12]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
  });

  $('.dfa-btn-share').click(function() {
    $('#dfa-share-modal').modal('show');
    $.getScript('https://cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min.js', function() {
      var clipboard = new Clipboard('.copy-button');

      clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);

          e.clearSelection();
      });
    });
  });

  $('.dfa-btn-subscribe').click(function() {
    $('#dfa-subscribe-modal').modal('show');
  });
});

function hideEmailForm() {
  if ($('#dfa-email').css('display') === 'block') {
    $('#dfa-email').transition('slide up');
  }
}
