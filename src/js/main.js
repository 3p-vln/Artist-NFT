import { biographySwiper } from './modules/swiper';
import { snapBiography } from './main/biography';
import { snapPremiumSwiper } from './main/premium';
import { snapPremiumBanner } from './main/premium';
import { premiumSwiper } from './modules/swiper';
import { validate } from './main/contactValidate';

document.addEventListener('DOMContentLoaded', async () => {
    skeletonCardLoad();
    await snapBiography();
    await snapPremiumBanner();
    await snapPremiumSwiper();
    biographySwiper();
    premiumSwiper();
    validate();
    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);
});

function skeletonCardLoad() {
    window.addEventListener('load', function () {
        document.querySelectorAll('.skeleton-card').remove();
    });
}
