// Hide navbar when scrolling
var scrolling = false;
window.onscroll = ((e) => {
    scrolling = true;
});


setInterval(() => {
    if (scrolling) {
        hideNav();
        scrolling = false;
    } else {
        showNav();
    }
}, 100);

var hideNav = (() => {
    $('.navigation-top').removeClass('close');
    $('.navigation-top').addClass('open');
});

var showNav = (() => {
    $('.navigation-top').removeClass('open');
    $('.navigation-top').addClass('close');
});