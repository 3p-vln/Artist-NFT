import $ from 'jquery'; 

export default class CustomLoad {
    constructor(info, id) {
        this.info = info;
        this.id = id;
        this.custom = $('.custom-mesh');
        this.loaditem();
    }

    loaditem() {
        this.custom.append(`
            <div class="card ${this.id}">
                <div class="card__picture">
                    <picture>
                        <source srcset="${this.info.imgWebP}" type="image/webp">
                        <img src="${this.info.img}" alt="art" itype="image/jpg">
                    </picture>
                </div>
                <div class="card__info">
                    <div class="info">
                        <h3 class="info__name">${this.info.name}</h3>
                        <p class="info__about">${this.info.about}</p>
                        <p class="info__price">$${this.info.price}</p>    
                    </div>
                    <div class="btns">
                        <a href="#" class="btn">
                            <p>Buy</p>
                        </a>
                        <a href="#" class="btn">
                            <p>View</p>
                            <svg>
                                <use href="#btn-arr"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `);
    }
}