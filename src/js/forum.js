import { popularSwiper } from './modules/swiper';
import { questionToBD } from './forum/asking';
import { stop } from './modules/stopPreload';
import { searching } from './forum/search';
import { querySnapshot } from './modules/snap';
import { cardLoad } from './forum/cardLoad';

document.addEventListener('DOMContentLoaded', async () => {
    await questionToBD();
    await questionToBD();
    popularSwiper();
  searching();
  
    async function snap() {
        await querySnapshot('questions', (doc) => new cardLoad(doc.data(), doc.id, '.forum__cards'));
    }
    await snap();

    stop();
    // const artLoadEvent = new Event('loadingIsFinished');
    // document.dispatchEvent(artLoadEvent);
});

// const cards = document.querySelectorAll('.card');
// const questions = document.querySelectorAll('.card__head-question');
// const input = document.querySelector('.form__input');

// input.oninput = function () {
//     let value = this.value.trim();

//     if (value !== '') {
//         cards.forEach(function (element) {
//             if (element.innerText.search(value) == -1) {
//                 element.classList.add('card_hidden');
//             } else {
//                 element.classList.remove('card_hidden');
//             }
//         });
//     } else {
//         cards.forEach(function (element) {
//             element.classList.remove('card_hidden');
//         });
//     }
// };