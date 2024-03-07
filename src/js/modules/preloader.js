import { getElement } from '../composables/callDom';

export function preloader() {
  setTimeout(() => {
    const loader = getElement('.preloader');
    loader.classList.add('loaded');
  }, 1000);
}
