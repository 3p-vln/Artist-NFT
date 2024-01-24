import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
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
