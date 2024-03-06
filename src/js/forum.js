import { popularSwiper } from './modules/swiper';
import { questionToBD } from './forum/asking';
import { stop } from './modules/stopPreload';

document.addEventListener('DOMContentLoaded', async () => {
    await questionToBD();
    await questionToBD();
    popularSwiper();

    stop();
    // const artLoadEvent = new Event('loadingIsFinished');
    // document.dispatchEvent(artLoadEvent);
});
