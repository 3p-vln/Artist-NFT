import $ from 'jquery';

export function premiumLoad(data, id) {
  const premium = $('.premium-wrapper');

  premium.append(`
                <div class="swiper-slide premium-slide ${id}">
                    <h2 class="premium-slide__nft">${data.cardNftText}</h2>
                    <div class="premium-slide__item">
                    <picture>
                        <source srcset="${data.cardImgWebp}" type="webp">
                        <img src="${data.cardImg}" alt="item" class="premium-slide__item-img">
                    </picture>    
                    </div>
                    <h3 class="premium-slide__title">${data.cardTitle}</h3>
                    <p class="premium-slide__paragraph">${data.cardParagraph}</p>
                    <div class="premium-slide__price">
                        <h2 class="premium-slide__price-value">${data.cardValue}</h2>
                        <a href="pay.html?id=${id}&name=nft">
                            <button class="premium-slide__price-btn">
                                <p>${data.cardBtnText}</p>
                            </button>
                        </a>
                    </div>
                </div>
                `);
}
