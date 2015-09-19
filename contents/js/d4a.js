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