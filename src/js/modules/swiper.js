import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function biographySwiper() {
  // поправить брейкпоинты
  
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
    }
  });
}
biographySwiper();

function premiumSwiper() {
  let swiper = new Swiper('.premium-swiper', {
    loop: true,
    centeredSlides: 'true',
    updateOnWindowResize: true,
    breakpoints: {
      375: {
        slidesPerView: 1.15,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 1.7,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1439: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
}
premiumSwiper();
