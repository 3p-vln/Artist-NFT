import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function stockSwiper() {
  let swiper = new Swiper('.stock-swiper', {
    slidesPerView: 'auto',
    speed: 1100,
    pagination: {
      el: '.stock__swiper-pagination',
    },
    navigation: {
      nextEl: '.stock__swiper-button-next',
      prevEl: '.stock__swiper-button-prev',
    },
  });
}
stockSwiper();

function biographySwiper() {
  let swiper = new Swiper('.columns-swiper', {
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      376: {
        slidesPerView: 3,
      },
      375: {
        slidesPerView: 2.5,
      }
    }
  });
}
biographySwiper();
