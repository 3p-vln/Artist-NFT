import $ from 'jquery';

export function popularLoad(data, id) {
    const premium = $('.popular-wrapper');

    premium.append(`
                <div class="popular-slide ${id}">
                    <div class="popular-slide__bg">
                        <img src="images/forum/first-bg-questions.png" alt="background" class="popular-slide__bg-img" />
                    </div>
                    <div class="popular-slide__user user">
                        <div class="user__face">
                        <picture>
                            <source srcset="${data.userImgWebp}" type="webp"> 
                            <img src="${data.userImg}" alt="face" class="user__face-img" />
                        </picture>
                        </div>
                        <h2 class="user__date">${data.dateDay}/${data.dateMonth}/${data.dateYear}</h2>
                    </div>
                    <h3 class="popular-slide__name">${data.name}</h3>
                    <h2 class="popular-slide__question">${data.question}</h2>
                    <div class="popular-slide__btn">
                        <button class="popular-slide__btn-view btn">
                            <span>View answers (23)</span>
                        </button>
                        <button class="popular-slide__btn-answer">
                            <svg class="popular-slide__btn-answer-svg">
                                <use href="#answer" />
                            </svg>
                            <span>Answer</span>
                        </button>
                    </div>
                </div>
                `);
}