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

var shareFacebookEl = document.getElementById('share-facebook');
if (shareFacebookEl) {
    shareFacebookEl.addEventListener('click', function () {
        FB.ui({
            method: 'share',
            href: this.dataset.url,
        }, function () {});
    });
}

var shareTwitterEl = document.getElementById('share-twitter')
if (shareTwitterEl) {
    shareTwitterEl.addEventListener('click', function () {
        PopupCenter('http://twitter.com/intent/tweet?url=' + encodeURI(this.dataset.url) + '&text=' + encodeURI(this.dataset.text) + '&hashtags=d4a&via=data4america', 'Share on Twitter', 550, 400);
    });
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