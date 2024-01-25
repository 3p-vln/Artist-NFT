import $ from 'jquery';

export function artLoad(data, id) {

    const premium = $('.swiper-premium');

    premium.append(`
        <div class="swiper premium-swiper ${id}">
            <div class="swiper-wrapper premium-wrapper">
                <div class="swiper-slide premium-slide">
                    <h2 class="premium-slide__nft">${data.cardNftText}</h2>
                    <div class="premium-slide__item">
                        <img src="${data.cardImg}" alt="item" class="premium-slide__item-img">
                    </div>
                    <h3 class="premium-slide__title">${data.cardTitle}</h3>
                    <p class="premium-slide__paragraph">${data.cardParagraph}</p>
                    <div class="premium-slide__price">
                        <h2 class="premium-slide__price-value">${data.cardValue}</h2>
                        <button class="premium-slide__price-btn">
                            <span>${data.cardBtnText}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
                        `);
}
