import $ from 'jquery';

export function customLoad(info, id) {
    const custom = $('.custom-mesh');
    
    custom.append(`
            <div class="card ${id}">
                <div class="card__picture">
                    <picture>
                        <source srcset="${info.imgWebP}" type="image/webp">
                        <img src="${info.img}" alt="art" itype="image/jpg">
                    </picture>
                </div>
                <div class="card__info">
                    <div class="info">
                        <h3 class="info__name">${info.name}</h3>
                        <p class="info__about">${info.about}</p>
                        <p class="info__price">$${info.price}</p>    
                    </div>
                    <div class="btns">
                        <a href="#" class="btn black">
                            <span>Buy</span>
                        </a>
                        <a href="#" class="btn black">
                            <span>View</span>
                            <svg>
                                <use href="#btn-arr"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `);
}