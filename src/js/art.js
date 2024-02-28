import { artLoad } from './art/artLoad';
import { focus } from './art/focus';
import { querySnapshot } from './modules/snap';
import { stop } from './modules/stopPreload';

document.addEventListener('DOMContentLoaded', async () => {
  async function snap() {
    await querySnapshot('art', (doc) => new artLoad(doc.data(), doc.id, '.art-mesh'));
  }
  await snap();
  focus('.art-mesh');

  stop();
});
