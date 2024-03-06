import { getElement, getElements } from '../composables/callDom';

export function chatOne() {
  const chats = getElements('.chat__nav-btn');
  const chatList = document.querySelector('.chat__list');
  console.log(chats);

  chats.forEach((el) => {
    console.log(chatList);
    if (el.classList.contains('active')) {
      console.log(el);
      //   console.log(chatList);
      document.getElementsByClassName('chat__list')[0].style = 'display: none';
    } else {
      //   chatList.getElementsByClassName('mystyle')[0].style = 'display: block';
    }
  });
}
