import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { validate } from './main/contactValidate';

async function getArts() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log(productId);
    const productArts = [];
    const productDataArts = await getDocs(collection(db, "art"));
    productDataArts.forEach((doc) => {
        productArts.push({
            id: doc.id,
            img: doc.data().img,
            imgWebP: doc.data().imgWebP,
            name: doc.data().name,
            text: doc.data().text,
            price: doc.data().price,
            lock: doc.data().lock,
            sub: doc.data().sub,
            close: doc.data().close,
            authName: doc.data().authName,
            authImg: doc.data().authImg,
            authImgWebP: doc.data().autnImgWebP,
            date: doc.data().date,
        });
    });

    const art = [];
    art.push(productArts.find((item) => item.id === productId));
    console.log(art);
    const product = $('.one-art');
    console.log(art[0]);
    document.querySelector('#product').innerHTML = art[0].name;
    product.append(`
        <div class="art ${art[0].id}">
            <div class="art__picture">
                <picture>
                    <source srcset="${art[0].imgWebP}" type="image/webp">
                    <img src="${art[0].img}" alt="art" itype="image/jpg">
                </picture>
            </div>
            <div class="art__info art__info_unlock">
                <div class="info">
                    <div class="info__head">
                        <h2 class="info__art">ART</h2>
                        <h3 class="info__name">${art[0].name}</h3>
                        <p class="info__text">${art[0].text}</p>
                    </div>
                    <div class="info__buy">
                        <div class="info__buy_first">
                            <p class="info__price">$${art[0].price}</p>
                            <div class="info__btn">
                                <a href="#" class="btn gradient">
                                    <svg>
                                    <use href="#coin"></use>
                                    </svg>
                                    <span>Buy now</span>
                                </a>
                            </btn>
                            </div>
                        </div>
                        <div class="info__buy_last">
                            <p class="info__about">You can purchase Art or NFT using popular system of payment. We accepting
                            PayPal, Visa/Mastercard. Any crypto currency</p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    `);
    // document.querySelector('#imgWebP').srcset = art[0].imgWebP;
    // document.querySelector('#imgJpg').src = art[0].img;

    const info = $('.about');
    if (art[0].lock == true) {
        info.append(`
            <div class="about__bg about__bg_blur">
                <picture>
                    <source srcset="${art[0].imgWebP}" type="image/webp">
                    <img src="${art[0].img}" alt="art" itype="image/jpg">
                </picture>
            </div>
            <div class="about__lock">
                <p class="about__access">${art[0].sub}</p>
                <div class="about__content">
                    <svg>
                        <use href="#locked-content"></use>
                    </svg>
                    <p>${art[0].close}</p>
                </div>
                <div class="btns">
                    <a href="#" class="btn black">
                        <span>Unlock</span>
                        <svg>
                            <use href="#btn-arr"></use>
                        </svg>
                    </a>
                </div>
            </div>
        `)
    } else if (art[0].lock == false) {
        info.append(`
            <div class="about__bg">
                <picture>
                    <source srcset="${art[0].imgWebP}" type="image/webp">
                    <img src="${art[0].img}" alt="art" itype="image/jpg">
                </picture>
            </div>
            <div class="about__unlock">
                <svg class="play">
                    <use href="#play"></use>
                </svg>
                <div class="about__info">
                    <div class="info">
                        <div class="auth">
                            <div class="auth__img">
                                <picture>
                                    <source srcset="${art[0].authImgWebP}" type="image/webp">
                                    <img src="${art[0].authImg}" alt="art" itype="image/png">
                                </picture>
                            </div>
                            <p class="auth__name">${art[0].authName}</p>
                        </div>
                        <div class="about__premium">
                            <svg>
                                <use href="#gradient-crown"></use>
                            </svg>
                            <p class="premium">premium content</p>
                        </div>
                        <p class="about__date">${art[0].date}</p>
                    </div>
                </div>
            </div>
        `)
    }
}

getArts();