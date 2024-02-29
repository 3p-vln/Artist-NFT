import { tab } from './pay/tabs';
import { chatTab } from './client/chatTab';
import { stop } from './modules/stopPreload';

document.addEventListener('DOMContentLoaded', async () => {
  tab();
  chatTab();

  stop();
});
