import { getPayInfo } from './pay/getPayInfo';
import { tab } from './pay/tabs';
import { validate } from './pay/payValidate';
import { copytext } from './pay/copy';
import { stop } from './modules/stopPreload';

document.addEventListener('DOMContentLoaded', async () => {
  tab();
  await getPayInfo();
  validate();
  copytext();
  stop();
});
