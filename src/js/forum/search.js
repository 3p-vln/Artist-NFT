export const searching = function () {
  const cards = document.querySelectorAll('.card');
  const questions = document.querySelectorAll('.card__head-question');
  const input = document.querySelector('.form__input');

  input.oninput = function () {
      let value = this.value.trim();

      if (value !== '') {
          cards.forEach(function (element) {
              if (element.innerText.search(value) == -1) {
                  element.classList.add('card_hidden');
              } else {
                  element.classList.remove('card_hidden');
              }
          });
      } else {
          cards.forEach(function (element) {
              element.classList.remove('card_hidden');
          });
      }
  };
}


