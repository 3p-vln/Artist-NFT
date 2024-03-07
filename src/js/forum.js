import { popularSwiper } from './modules/swiper';
import { snapPopularSwiper } from './forum/questions';
import { questionToBD } from './forum/asking';
import { stop } from './modules/stopPreload';

document.addEventListener('DOMContentLoaded', async () => {
    await snapPopularSwiper();
    await questionToBD();
    popularSwiper();

    stop();
});
