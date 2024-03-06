const artLoadEvent = new Event('loadingIsFinished');
document.dispatchEvent(artLoadEvent);

const headerMenu = document.querySelector('.header__menu');
const sidebarLinks = document.querySelectorAll('.sidebar__content-link');
const forOwnerBlocks = document.querySelectorAll('.content__box');
const sidebar = document.querySelector('.for-owner__sidebar');
const opersImages = document.querySelectorAll('.opers-mobile__card-img');
const chatWindow = document.querySelector('.chat__window');
const opersMobile = document.querySelector('.opers-mobile');
const chatList = document.querySelector('.chat__list');
const chatMobileTitle = document.querySelector('.chat__mobile-title');
const chatArrow = document.querySelector('.chat__mobile-title-arrow');
const searchInput = document.querySelector('#search');
const cards = document.querySelectorAll('.card');
const cardsName = document.querySelectorAll('.card__name');
const ordersTitle = document.querySelector('.orders__title');


headerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu_active');
  if (headerMenu.classList.contains('header__menu_active')) {
    sidebar.classList.add('for-owner__sidebar_active');
    sidebar.nextElementSibling.classList.add('content__box_blackout');
  } else {
    sidebar.classList.remove('for-owner__sidebar_active');
    sidebar.nextElementSibling.classList.remove('content__box_blackout');
  }
});

sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    let currentLink = link;
    let tabId = currentLink.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    sidebarLinks.forEach((link) => {
      link.classList.remove('sidebar__content-link_active');
    });

    forOwnerBlocks.forEach((block) => {
      block.classList.remove('content__box_active');
    });

    currentLink.classList.add('sidebar__content-link_active');
    currentTab.classList.add('content__box_active');
  });
});

opersImages.forEach((image) => {
  image.addEventListener('click', () => {
    chatWindow.classList.add('chat__window_active');
    opersMobile.classList.add('opers-mobile_hidden');
    chatList.classList.add('chat__list_hidden');
    chatMobileTitle.classList.add('chat__mobile-title_active');
  });
});

chatArrow.addEventListener('click', () => {
  console.log('clicked');
  chatWindow.classList.remove('chat__window_active');
  opersMobile.classList.remove('opers-mobile_hidden');
  chatList.classList.remove('chat__list_hidden');
  chatMobileTitle.classList.remove('chat__mobile-title_active');
  ordersTitle.classList.add('orders__title_hidden');
})

sidebarLinks[0].click();

searchInput.oninput = function () {
  let value = this.value.trim();

  if (value !== '') {
    cards.forEach(function (element) {
      if (element.innerText.search(value) == -1) {
        element.classList.add('card__name_hidden');
        // element.innerHTML = element.innerText;
      } else {
        element.classList.remove('card__name_hidden');
        let string = element.innerText;
        // element.innerHTML = insertSrting(string, element.innerText.search(value), value.length);
      }
    });
  } else {
    cards.forEach(function (element) {
      element.classList.remove('card__name_hidden');
      // element.innerHTML = element.innerText;
    });
  }
};

// function insertSrting(string, position, length) {
//   return string.slice(0, position) + '<mark>' + string.slice(position, position + length) + '</mark>' + string.slice(position + length);
// }