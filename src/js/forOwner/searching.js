export const searching = function () {
  const searchInput = document.querySelector('#search');
  const cards = document.querySelectorAll('.card');
  const cardsName = document.querySelectorAll('.card__name');

 searchInput.oninput = function () {
     let value = this.value.trim();
    console.log(value)
     if (value !== '') {
         cards.forEach(function (element) {
             if (element.innerText.search(value) == -1) {
                 element.classList.add('card__name_hidden');
             } else {
                 element.classList.remove('card__name_hidden');
             }
         });
     } else {
         cards.forEach(function (element) {
             element.classList.remove('card__name_hidden');
         });
     }
 };
}



