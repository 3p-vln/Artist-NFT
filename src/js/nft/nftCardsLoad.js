import $ from 'jquery';

export function nftCardsLoad(data, id) {
    const premium = $('.nfts-content');

    premium.append(`
        <div class="nfts-content__item card ${id}">
            <h2 class="card__nft">${data.cardNftText}</h2>
            <div class="card__item">
                <picture>
                    <source srcset="${data.cardImgWebp}" type="webp">
                    <img src="${data.cardImg}" alt="item" class="card__item-img" />
                </picture>
            </div>
            <h3 class="card__title">${data.cardTitle}</h3>
            <p class="card__paragraph">${data.cardParagraph}</p>
            <div class="card__price">
                <h2 class="card__price-value">${data.cardValue}</h2>
                <a href="pay.html?id=${id}&name=nft">
                    <button class="card__price-btn">
                        <p>${data.cardBtnText}</p>
                    </button>
                </a>
            </div>
        </div>
        `);
}