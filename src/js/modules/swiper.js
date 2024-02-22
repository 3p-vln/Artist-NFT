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
// biographySwiper();

export function premiumSwiper() {
    new Swiper('.premium-swiper', {
        loop: true,
        centeredSlides: true,
        updateOnWindowResize: true,

        on: {
            init: function () {
                console.log('swiper initialized');
            },
        },

        // breakpoints: {
        //     320: {
        //         slidesPerView: 'auto',
        //         spaceBetween: 16,
        //         loop: true,
        //     },
        //     1439: {
        //         slidesPerView: 7,
        //         spaceBetween: 30,
        //         loop: true,
        //     },
        // },

        breakpoints: {
            320: {
                slidesPerView: 1.15,
                spaceBetween: 16,
                loop: true,
            },
            376: {
                slidesPerView: 1.3,
                spaceBetween: 16,
                loop: true,
            },
            576: {
                slidesPerView: 1.7,
                spaceBetween: 16,
                loop: true,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
                loop: true,
            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
            },
        },
    });
}
// premiumSwiper();
