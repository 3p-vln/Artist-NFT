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
  // поправить брейкпоинты
  
  let swiper = new Swiper('.columns-swiper', {
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      449: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 2.3,
        spaceBetween: 5,
      }
    }
  });
}
biographySwiper();

function premiumSwiper() {
  let swiper = new Swiper('.premium-swiper', {
    centeredSlides: 'true',
    centerSlides: 'true',
    updateOnWindowResize: true,
    breakpoints: {
      1920: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      375: {
        slidesPerView: 2.3,
        spaceBetween: 5,
      }
    }
  });
}
premiumSwiper();
