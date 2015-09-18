function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

document.getElementById('share-facebook').addEventListener('click', function () {
    PopupCenter('http://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this.dataset.url), 'Share with Facebook', 550, 400);
});

document.getElementById('share-twitter').addEventListener('click', function () {
    PopupCenter('http://twitter.com/intent/tweet?url=' + encodeURI(this.dataset.url) + '&text=' + encodeURI(this.dataset.text), 'Share on Twitter', 550, 400);
});