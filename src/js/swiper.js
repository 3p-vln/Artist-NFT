import { snapPremiumSwiper } from './main/premium';
import { premiumSwiper } from './modules/swiper';

document.addEventListener('DOMContentLoaded', async () => {
  await snapPremiumSwiper();
  premiumSwiper();
//   const artLoadEvent = new Event('loadingIsFinished');
//   document.dispatchEvent(artLoadEvent);
});
