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

// const chatCards = document.querySelectorAll('.card');

// console.log(chatCards);

// chatCards.forEach((card) => {
//   card.addEventListener('click', ()=> {

//     let currentCard = card;
//     chatCards.forEach((card) => {
//       card.classList.remove('card_active');
//     });

//     card.classList.add('card_active');
//   });

  
// })

// const searchInput = document.querySelector('#search');
// const cards = document.querySelectorAll('.card');
// const cardsName = document.querySelectorAll('.card__name');

// searchInput.oninput = function () {
//   let value = this.value.trim();

//   if (value !== '') {
//     cards.forEach(function (element) {
//       if (element.innerText.search(value) == -1) {
//         element.classList.add('card__name_hidden');
//       } else {
//         element.classList.remove('card__name_hidden');
        
//       }
//     });
//   } else {
//     cards.forEach(function (element) {
//       element.classList.remove('card__name_hidden');
//     });
//   }
// };
