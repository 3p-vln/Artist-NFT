// import stockSwiper from './modules/swiper';
// import setMouseParalaxStyle from './modules/paralax';
import { biographySwiper } from './modules/swiper';
import { snapBiography } from './main/biography';
import { snapPremiumSwiper } from './main/premium';
import { snapPremiumBanner } from './main/premium';
import { premiumSwiper } from './modules/swiper';
import { validate } from './main/contactValidate';

document.addEventListener('DOMContentLoaded', async () => {
    snapBiography();
    snapPremiumBanner();
    snapPremiumSwiper();
    biographySwiper();
    premiumSwiper();
    validate();
});
