
export const mobilePagesChange = function () {
  const opersImages = document.querySelectorAll('.opers-mobile__card-img');
  const chatWindow = document.querySelector('.chat__window');
  const opersMobile = document.querySelector('.opers-mobile');
  const chatList = document.querySelector('.chat__list');
  const chatMobileTitle = document.querySelector('.chat__mobile-title');
  const chatArrow = document.querySelector('.chat__mobile-title-arrow');
  const ordersTitle = document.querySelector('.orders__title');
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        opersMobile.classList.add('opers-mobile_hidden');
        chatList.classList.add('chat__list_hidden');
        chatWindow.classList.add('chat__window_active');
        chatMobileTitle.classList.add('chat__mobile-title_active');
      }
    })
  })

  opersImages.forEach((image) => {
      image.addEventListener('click', () => {
          chatWindow.classList.add('chat__window_active');
          opersMobile.classList.add('opers-mobile_hidden');
          chatList.classList.add('chat__list_hidden');
          chatMobileTitle.classList.add('chat__mobile-title_active');
      });
  });

  chatArrow.addEventListener('click', () => {
      chatWindow.classList.remove('chat__window_active');
      opersMobile.classList.remove('opers-mobile_hidden');
      chatList.classList.remove('chat__list_hidden');
      chatMobileTitle.classList.remove('chat__mobile-title_active');
      ordersTitle.classList.add('orders__title_hidden');
  });
}





