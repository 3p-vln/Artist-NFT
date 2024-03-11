import { menuToggle } from "./forOwner/menuToggle";
import { loadPages } from "./forOwner/loadPages";
import { mobilePagesChange } from "./forOwner/mobilePagesChange";
import { searching } from "./forOwner/searching";
import { chatCardTabChange } from "./forOwner/chatCardsTabs";
import { opersSwiper } from "./modules/swiper";

const artLoadEvent = new Event('loadingIsFinished');
document.dispatchEvent(artLoadEvent);

document.addEventListener('DOMContentLoaded', async () => {
  menuToggle();
  loadPages();
  mobilePagesChange();
  searching();
  chatCardTabChange();
  opersSwiper();
});
