import $ from 'jquery';
import 'slick-carousel';
import Swiper from 'swiper';

export function biographySwiper() {
    new Swiper('.columns-swiper', {
        slidesPerView: 'auto',
        breakpoints: {
            576: {
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            577: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 3,
            },
        },
    });
}

export function premiumSwiper() {
    $('.premium-wrapper').slick({
        centerMode: true,
        arrows: false,
        slidesToShow: 5,
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
    new Swiper('.popular-swiper', {
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1.185,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 1.8,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
            1023: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

export function opersSwiper() {
  new Swiper('.opers-mobile', {
    loop: true,
    
    breakpoints: {
      320: {
        slidesPerView: 4.4, 
        spaceBetween:27,
      }
    }
  });
}
