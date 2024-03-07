import { getElementId, getElements } from '../composables/callDom';

export function search() {
  getElementId('search-input').oninput = function () {
    let value = this.value.trim();
    let list = getElements('.chats__item');

    if (value != '') {
      list.forEach(function (el) {
        if (el.innerText.search(RegExp(value, 'gi')) == -1) {
          console.log(el.innerText.search(value));
          el.classList.add('hide');
        } else {
          el.classList.remove('hide');
        }
      });
    } else {
      list.forEach(function (el) {
        el.classList.remove('hide');
      });
    }
  };
}
