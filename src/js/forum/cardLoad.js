import $ from 'jquery';

export function cardLoad(info,id,content) {
  const card = $(content);
  card.append(`
                <div class="forum__card card" ${id}>
                    <div class="card__head">
                        <div class="card__counter">
                            <svg class="card__counter-svg">
                                <use href="#counter-up"></use>
                            </svg>

                            <p class="card__counter-count">12</p>

                            <svg class="card__counter-svg">
                                <use href="#counter-down"></use>
                            </svg>
                        </div>

                        <img src="${info.userImg}" alt="user" class="card__img" />

                        <div class="card__head-info">
                          <p class="card__head-name">${info.name}</p>
                          <p class="card__head-question">${info.question}</p>
                        </div>

                        <p class="card__head-date">${info.dateDay} ${info.dateMonth} ${info.dateYear}</p>
                    </div>

                    <div class="card__answer-box">
                      <p class="card__answer-question-mobile">${info.question}</p>
                      <p class="card__answer">${info.about} </p>

                      <div class="card__buttons">

                        <button class="btn card__button-view">
                          <span class="card__button-text">View answers (23)</span>
                        </button>

                        <button class="card__button-answer">
                          <svg class="card__button-svg">
                              <use href="#answer" />
                          </svg>
                          <span class="card__button-answer-text">Answer</span>
                        </button>
                      </div>
                      
                    </div>
                </div>`);
}