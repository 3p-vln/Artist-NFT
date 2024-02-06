import $ from 'jquery';

export function artLoad(info, id, content) {
  let classInfo = ' ';
  if (info.lock == false) {
    classInfo = 'unlock';
  } else {
    classInfo = 'lock';
    console.log(classInfo);
  }
  const arts = $(content);
  if (info.lock == false) {
    arts.append(`
                    <div class="card ${id} ${classInfo}">
                        <div class="card__picture">
                            <picture>
                                <source srcset="${info.imgWebP}" type="image/webp">
                                <img src="${info.img}" alt="art" itype="image/jpg">
                            </picture>
                        </div>
                        <div class="card__info card__info_unlock">
                            <div class="info">
                                <h3 class="info__name">${info.name} </h3>
                                <p class="info__about">${info.about}</p>
                                <p class="info__price">${info.price}</p>    
                            </div>
                            <div class="btns">
                                <a href="pay.html?id=${id}&name=art" class="btn black">
                                    <span>Buy</span>
                                </a>
                                <a href="oneArt.html?id=${id}" class="btn black">
                                    <span>View</span>
                                    <svg>
                                        <use href="#btn-arr"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `);
  } else if (info.lock == true) {
    arts.append(`
                    <div class="card ${id} ${classInfo}">
                        <div class="card__picture">
                            <picture>
                                <source srcset="${info.imgWebP}" type="image/webp">
                                <img src="${info.img}" alt="art" itype="image/jpg">
                            </picture>
                        </div>
                        <div class="card__info card__info_lock">
                            <p class="card__access">${info.sub}</p>
                            <div class="card__content">
                                <svg>
                                    <use href="#locked-content"></use>
                                </svg>
                                <p>${info.close}</p>
                            </div>
                            <div class="btns">
                                <a href="oneArt.html?id=${id}" class="btn black">
                                    <span>Unlock</span>
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
