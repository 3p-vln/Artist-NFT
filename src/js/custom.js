import { artLoad } from './art/artLoad';
import { validate } from './custom/customValidate';
import { focus } from './art/focus';
import { imgLoad } from './custom/imgLoad';
import { selectLoad } from './custom/select';
import { stop } from './modules/stopPreload';
import { querySnapshot } from './modules/snap';

document.addEventListener('DOMContentLoaded', async () => {
  await imgLoad();
  async function snap() {
    await querySnapshot('art', (doc) => new artLoad(doc.data(), doc.id, '.custom-mesh'));
  }
  await snap();
  focus('.custom-mesh');
  selectLoad();
  validate();

  stop();
});
