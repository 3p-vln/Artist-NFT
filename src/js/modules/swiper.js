import $ from 'jquery';
import 'slick-carousel';

export function biographySwiper() {
    $('.columns-wrapper').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
}

export function premiumSwiper() {
    $('.premium-wrapper').slick({
        centerMode: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 'auto',
        variableWidth: true,
        responsive: [
            {
                breakpoints: 576,
                settings: {
                    centerMode: false,
                },
            },
        ],
    });
}

export function popularSwiper() {
    $('.popular-wrapper').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToScroll: 1,
                },
            },
        ],
    });
}

export function opersSwiper() {
    $('.opers-mobile__cards').slick({
        arrows: false,
        slidesToShow: 7,
        variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 495,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    });
}
