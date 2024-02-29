import { validate } from './main/contactValidate';
import { stop } from './modules/stopPreload';
import { getArts } from './oneArt/getArts';

document.addEventListener('DOMContentLoaded', async () => {
  await getArts();
  validate();

  stop();
});
