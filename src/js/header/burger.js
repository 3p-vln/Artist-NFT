import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function burger() {
  const headerBurger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');
  const burgerBackdrop = document.querySelector('.burger__backdrop');
  const buttonAuthorization = document.querySelector('.authorization');
  const scrollableElement = document.querySelector('.my-scrollable-element');

  function activeBurger() {
    headerBurger.classList.toggle('header__burger_active');
    burgerBackdrop.classList.toggle('burger__backdrop_active');
    headerMenu.classList.toggle('header__menu_active');
    buttonAuthorization.classList.toggle('authorization_active');

    if (headerBurger.classList.contains('header__burger_active')) {
      disablePageScroll(scrollableElement);
      document.body.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      enablePageScroll(scrollableElement);
      document.body.removeEventListener('touchmove', preventScroll, { passive: false });
    }
  }

  function preventScroll(event) {
    event.preventDefault();
  }

  if (headerBurger) {
    headerBurger.addEventListener('touchstart', () => {
      activeBurger();
    });

    burgerBackdrop.addEventListener('touchstart', () => {
      activeBurger();
    });
  }
}

burger();
