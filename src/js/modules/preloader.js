import $ from 'jquery';
function preloader() {
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
    });
}

preloader();