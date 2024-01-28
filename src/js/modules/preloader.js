import $ from 'jquery';
function preloader() {
    $(document).ready( function () {
        $('.preloader').delay(1000).fadeOut(500);
    });
}

preloader();