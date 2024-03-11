import $ from 'jquery';

export function premiumLoad(slide) {
    const premium = $('.premium__slider');
    premium.html('');

    let swiperSlide = '';

    slide.forEach((item) => {
        const cardSlide = ` 
  <div class="swiper-slide premium-slide"> 
    <h2 class="premium-slide__nft">${item.cardNftText}</h2> 
    <div class="premium-slide__item"> 
    <picture> 
        <source srcset="${item.cardImgWebp}" type="webp"> 
        <img src="${item.cardImg}" alt="${item.cardTitle}" loading="lazy" class="premium-slide__item-img"> 
    </picture> 
    </div> 
    <h3 class="premium-slide__title">${item.cardTitle}</h3> 
    <p class="premium-slide__paragraph">${item.cardParagraph}</p> 
    <div class="premium-slide__price"> 
        <h2 class="premium-slide__price-value">${item.cardValue}</h2> 
        <a href="pay.html?id=${item.id}&name=nft" class="premium-slide__price-btn"> 
            <p>${item.cardBtnText}</p> 
        </a> 
    </div> 
</div>`;

        swiperSlide += cardSlide;
    });

    const swiperWrapper = ` 
    <div class="swiper premium-swiper"> 
        <div class="swiper-wrapper premium-wrapper"> 
            ${swiperSlide} 
        </div> 
    </div>`;

    premium.append(swiperWrapper);
}
