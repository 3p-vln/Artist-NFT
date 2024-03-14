import { menuToggle } from './forOwner/menuToggle';
import { loadPages } from './forOwner/loadPages';
import { mobilePagesChange } from './forOwner/mobilePagesChange';
import { searching } from './forOwner/searching';
import { chatCardTabChange } from './forOwner/chatCardsTabs';
import { opersSwiper } from './modules/swiper';
import { logOut } from './forOwner/logOut';

const artLoadEvent = new Event('loadingIsFinished');
document.dispatchEvent(artLoadEvent);

document.addEventListener('DOMContentLoaded', async () => {
    menuToggle();
    loadPages();
    mobilePagesChange();
    searching();
    chatCardTabChange();
    await logOut();
    opersSwiper();
});

const links = document.querySelectorAll('.sidebar__content-link');

links.forEach((link) => {
    link.addEventListener('click', () => {
      const svgIcon = link.children[0];
      const svgIcon1 = link.children[1];
        links.forEach((currentLink) => {
          currentLink.children[0].classList.add('sidebar__content-svg_active');
          currentLink.children[1].classList.remove('sidebar__content-svg_active');
        });
      svgIcon.classList.remove('sidebar__content-svg_active');
      svgIcon1.classList.add('sidebar__content-svg_active');
      
    });
});
