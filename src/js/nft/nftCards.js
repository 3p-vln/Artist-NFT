import $ from 'jquery';
import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getElementIdForFB } from '../composables/callDom.js';

export function navigation() {
    function initializeNFTApp() {
        const nftsCollection = collection(db, 'main-swiper');
        const prevButton = $('.nfts-pagination__prev');
        const nextButton = $('.nfts-pagination__next');
        const paginationList = $('.nfts-pagination__list');
        const paginationNumbers = $('.nfts-pagination__list-item');
        let currentPage = 1;
        let nftArr = [];
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('page');
        currentPage = parseInt(pageParam) || 1;

        function initPagination() {
            getDocsAndRender();
            prevButton.on('click', handlePrevClick);
            nextButton.on('click', handleNextClick);
            paginationNumbers.each((index, element) => {
                $(element).on('click', () => {
                    const pageNumber = $(element).data('page');
                    changePage(pageNumber);
                });
            });
        }

        function getDocsAndRender() {
            getDocs(nftsCollection).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    nftArr.push({
                        id: doc.id,
                        cardBtnText: data.cardBtnText,
                        cardImg: data.cardImg,
                        cardImgWebp: data.cardImgWebp,
                        cardNftText: data.cardNftText,
                        cardParagraph: data.cardParagraph,
                        cardTitle: data.cardTitle,
                        cardValue: data.cardValue,
                        text: data.text,
                    });
                });
                renderNFTs(nftArr.slice(0, 12));
                updateActiveClass();
                updateURL();
            });
        }

        function renderNFTs(product, nftArr) {
            product.forEach((nft, index) => {
                const cardId = `card-${index}`;

                getElementIdForFB('cardNftText', cardId).innerHTML = nft.cardNftText;
                getElementIdForFB('cardImgWebp', cardId).src = nft.cardImgWebp;
                getElementIdForFB('cardImg', cardId).src = nft.cardImg;
                getElementIdForFB('cardTitle', cardId).innerHTML = nft.cardTitle;
                getElementIdForFB('cardParagraph', cardId).innerHTML = nft.cardParagraph;
                getElementIdForFB('cardValue', cardId).innerHTML = nft.cardValue;
                getElementIdForFB('cardBtnText', cardId).innerHTML = nft.cardBtnText;
            });
        }

        // function renderNFTs(product, id) {
        //   const card = $('.nfts-content');
        //   card.html('');
        //   let index = 0;

        //   product.forEach((nft) => {
        //     const cardHtml = `
        //             <div class="nfts-content__item card ${nftArr[index].id}">
        //                 <h2 class="card__nft">${nft.cardNftText}</h2>
        //                 <div class="card__item">
        //                     <picture>
        //                         <source srcset="${nft.cardImgWebp}" type="webp">
        //                         <img src="${nft.cardImg}" alt="item" class="card__item-img" />
        //                     </picture>
        //                 </div>
        //                 <h3 class="card__title">${nft.cardTitle}</h3>
        //                 <p class="card__paragraph">${nft.cardParagraph}</p>
        //                 <div class="card__price">
        //                     <h2 class="card__price-value">${nft.cardValue}</h2>
        //                     <a href="pay.html?id=${nftArr[index].id}&name=nft">
        //                         <button class="card__price-btn">
        //                             <p>${nft.cardBtnText}</p>
        //                         </button>
        //                     </a>
        //                 </div>
        //             </div>
        //             `;

        //     card.append(cardHtml);
        //     index++;
        //   });
        // }

        function handlePrevClick() {
            if (currentPage > 1) {
                currentPage--;
                updateActiveClass();
                updateURL();
            }
        }

        function handleNextClick() {
            if (currentPage < 3) {
                currentPage++;
                updateActiveClass();
                updateURL();
            }
        }

        function changePage(newPage) {
            if (newPage >= 1 && newPage <= 3) {
                currentPage = newPage;
                updateActiveClass();
                updateURL();
            }
        }

        function updateActiveClass() {
            const paginationNumbers = paginationList.find('.nfts-pagination__list-item');
            paginationNumbers.each((index, number) => {
                const $number = $(number);
                if (index === currentPage - 1) {
                    $number.addClass('nfts-pagination__list-item_active');
                    renderNFTs(nftArr.slice(index * 12, index * 12 + 12), nftArr);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {  
                    $number.removeClass('nfts-pagination__list-item_active');
                }
            });
        }

        function updateURL() {
            const newURL = `?page=${currentPage}`;
            history.pushState({ page: currentPage }, null, newURL);
        }

        initPagination();
    }

    initializeNFTApp();
}
