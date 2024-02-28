import { questionToBD } from './forum/asking';
import { stop } from './modules/stopPreload';

document.addEventListener('DOMContentLoaded', async () => {
  await questionToBD();

  stop();
});
