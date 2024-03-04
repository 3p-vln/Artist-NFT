import { tab } from './pay/tabs';
import { chatTab } from './client/chatTab';
import { stop } from './modules/stopPreload';
import { chat } from './modules/swiper';
import { search } from './client/search';

document.addEventListener('DOMContentLoaded', async () => {
  tab();
  chatTab();
  chat();
  search();

  stop();
});
