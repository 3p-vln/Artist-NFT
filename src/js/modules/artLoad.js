import $ from 'jquery'; 

export default class ArtLoad {
    constructor(info, id) {
        this.info = info;
        this.id = id;
        this.arts = document.querySelector('.art-mesh');
        this.addClass();
        this.loaditem();
    }

    addClass() {
        this.classInfo = 'card';
        if (this.info.lock == false) {
            this.classInfo = 'card unlocl';
        } else if (this.info.lock == true) {
            this.classInfo = 'card lock';
        }
    }

    loaditem() {
        this.cardBlock.append(`
            <div class="card ${this.id} ${this.classInfo}">
                <div class="card__picture">
                    <img src="${this.info.img}" alt="art">
                </div>
                <div class="card__info_unlock">
                    <div class="info">
                        <h3 class="info__name">${this.info.name} </h3>
                        <p class="info__about">${this.info.about}</p>
                        <p class="info__price">$ ${this.info.price}</p>    
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

                <div class="card__info_lock">
                    <p class="card__access">${this.info.sub}</p>
                    <div class="card__content">
                        <svg>
                            <use href="#locked-content"></use>
                        </svg>
                        <p>${this.info.close}</p>
                    </div>
                    <div class="btns">
                        <a href="custom.html" class="btn">
                            <p>Unlock</p>
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