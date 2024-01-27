import $ from 'jquery';
function preloader() {
    $(window).on('load', function () {
        $('.preloader').fadeOut(1700);
    });
}

preloader();