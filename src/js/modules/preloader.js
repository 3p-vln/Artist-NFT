import $ from 'jquery';
function preloader() {
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut(500);
    });
}

preloader();