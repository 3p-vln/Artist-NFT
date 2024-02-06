// import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function biographySwiper() {
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
biographySwiper();

function premiumSwiper() {
  // new Swiper('.premium-swiper', {
  //   slidesPerView: 1.3,
  //   spaceBetween: 16,
  //   centeredSlides: false,
  //   loop: true,
  //   breakpoints: {
  //     420: {
  //       slidesPerView: 2.3,
  //       centeredSlides: true,
  //       loop: true,
  //     },
  //     940: {
  //       slidesPerView: 3,
  //       centeredSlides: true,
  //       loop: true,
  //     },
  //     1024: {
  //       slidesPerView: 3.3,
  //       spaceBetween: 20,
  //       centeredSlides: true,
  //       loop: true,
  //     },
  //     1240: {
  //       slidesPerView: 4,
  //       spaceBetween: 20,
  //       centeredSlides: true,
  //       loop: true,
  //     },
  //     1441: {
  //       slidesPerView: 4.5,
  //       spaceBetween: 30,
  //       centeredSlides: true,
  //       loop: true,
  //     },
  //     1550: {
  //       slidesPerView: 5,
  //       spaceBetween: 30,
  //       centeredSlides: true,
  //       loop: true,
  //     },
  //   },
  // });
  // new Swiper('.premium-swiper', {
  //   loop: true,
  //   centeredSlides: true,
  //   updateOnWindowResize: true,
  //   on: {
  //     init: function () {
  //       console.log('swiper initialized');
  //     },
  //   },
  //   breakpoints: {
  //     375: {
  //       slidesPerView: 1.15,
  //       spaceBetween: 16,
  //       loop: true,
  //     },
  //     576: {
  //       slidesPerView: 1.7,
  //       spaceBetween: 16,
  //       loop: true,
  //     },
  //     768: {
  //       slidesPerView: 2.5,
  //       spaceBetween: 30,
  //       loop: true,
  //     },
  //     1439: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //       loop: true,
  //     },
  //     // 1440: {
  //     //   slidesPerView: 4,
  //     //   spaceBetween: 30,
  //     //   loop: true,
  //     // },
  //     // 1920: {
  //     //   slidesPerView: 3,
  //     //   spaceBetween: 30,
  //     //   loop: true,
  //     // },
  //   }
  // });
}
premiumSwiper();
