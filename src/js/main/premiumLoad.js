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

<section class="auction">
    <div class="auction-content">
        <div class="auction__image">
            <img src="images/nft-card/card-item.png" alt="lot" class="auction__image-img" />
        </div>
        <div class="auction__info">
            <h3 class="auction__info-subtitle">AUCTION</h3>
            <h2 class="auction__info-title">Title of picture or NFT</h2>
            <div class="auction__info-columns columns">
                <div class="columns__item">
                    <h2 class="columns__item-text">36 × 27 in <br class="br-desctop" />91.4 × 68.6 cm</h2>
                </div>
                <div class="columns__item">
                    <h2 class="columns__item-text">Estimated value</h2>
                    <h3 class="columns__item-value">$6,000</h3>
                </div>
                <div class="columns__item">
                    <h2 class="columns__item-text">This work is part of a limited edition set.</h2>
                </div>
            </div>
            <div class="auction__info-bargain bargain">
                <h2 class="bargain__title">highest price</h2>
                <h3 class="bargain__value">$100 322</h3>
                <form action="" class="bargain__form">
                    <label for="" class="bargain__form-label">Place your bid</label>
                    <div class="bargain__form-wrapper">
                        <input type="text" class="bargain__form-input" placeholder="$100 322" />
                        <button class="bargain__form-btn btn gradient">
                            <span>Place bid</span>
                        </button>
                    </div>
                </form>
                <div class="bargain__date">
                    <h2 class="bargain__date-timer">28d 17h 26m 31s</h2>
                    <h3 class="bargain__date-deadline">Live март 5, 8:00pm</h3>
                </div>
                <h4 class="bargain__description">
                    You can purchase Art or NFT using popular system of payment. We accepting PayPal, Visa/Mastercard. Any crypto currency
                </h4>
            </div>
        </div>
    </div>

    <div class="auction__progress">
        <h2 class="auction__progress-text">About the work</h2>
        <div class="auction__progress-bar"></div>
    </div>

    <div class="auction__blocks">
        <div class="auction__blocks-description description">
            <h2 class="description__title">100% of the proceeds of this sale are donated to LAM.</h2>
            <h3 class="description__paragraph">
                Multidisciplinary artist Judy Chicago helped pioneer the feminist art movement in the 1960s and ’70s; for decades, she has made work
                that celebrates the multiplicity of female identity. Chicago’s practice spans painting, textile arts, sculpture, and installation and
                has explored the intricacies of childbirth (as seen in her “Birth Project” series, 1980–85), the possibilities of minimalist
                sculpture, and the relationship between landscape and the female body. Her most famous work, an installation called The Dinner Party
                (1974–79), is an homage to 39 influential female figures from Eastern and Western mythology and civilization. Chicago studied at the
                University of California, Los Angeles. She founded a groundbreaking and widely influential feminist art program while on staff at
                California State University, Fresno. Her work has been exhibited in New York, London, Milan, Chicago, and San Francisco and belongs in
                the collections of the British Museum, Moderna Museet, the Metropolitan Museum of Art, the Los Angeles County Museum of Art, the Tate,
                the Art Institute of Chicago, and the National Gallery of Art in Washington, D.C. <br /><br />
                Applicable sales tax will apply to all works shipped to and within the US. Please note, your card will automatically be charged for
                the Total Purchase Price, buyer’s premium, shipping, and any applicable sales tax, based on your registration address. For
                transactions over $50,000, you will be given the option to pay via wire transfer.
            </h3>
            <button class="description__btn btn grey">
                <span>Hide info</span>
            </button>
        </div>
        <div class="auction__blocks-banner banner">
            <div class="banner__info">
                <svg class="banner__info-svg">
                    <use href="#default-crown" />
                </svg>
                <h2 class="banner__info-title">Liked the work?</h2>
                <h3 class="banner__info-subtitle">Share with friends in social media</h3>
                <div class="banner__info-social social">
                    <a class="social__link" href="#">
                        <svg class="social__link-svg">
                            <use href="#default-instagram" />
                        </svg>
                    </a>

                    <a class="social__link" href="#">
                        <svg class="social__link-svg">
                            <use href="#default-twitter" />
                        </svg>
                    </a>

                    <a class="social__link" href="#">
                        <svg class="social__link-svg">
                            <use href="#default-telegram" />
                        </svg>
                    </a>

                    <a class="social__link" href="#">
                        <svg class="social__link-svg">
                            <use href="#default-pinterest" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="banner__arrow">
                <img src="images/auction/arrow.png" alt="arrow" class="banner__arrow-img" />
            </div>

            <div class="banner__sapphire">
                <img src="images/auction/sapphire.png" alt="sapphire" class="banner__sapphire-img" />
            </div>

            <div class="banner__ruby">
                <img src="images/auction/ruby.png" alt="ruby" class="banner__ruby-img" />
            </div>

            <div class="banner__circle">
                <img src="images/auction/circle.png" alt="circle" class="banner__circle-img" />
            </div>
        </div>
    </div>
</section>

                `);
    // console.log(premium)
}
