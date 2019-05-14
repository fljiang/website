// Smooth Scrolling
$(document).on('click', 'a[href^="#timeline"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// Load page on top
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}