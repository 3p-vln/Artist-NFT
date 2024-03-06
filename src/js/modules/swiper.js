// import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

export function biographySwiper() {
    let swiper = new Swiper('.columns-swiper', {
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
    new Swiper('.premium-swiper', {
        loop: true,
        centeredSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 16,
            },
            430: {
                slidesPerView: 1.7,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1439: {
                slidesPerView: 3.8,
                spaceBetween: 30,
            },
            1700: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
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
