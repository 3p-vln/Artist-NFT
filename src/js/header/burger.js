import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function burger() {
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const burgerBackdrop = document.querySelector('.burger__backdrop');
    const buttonAuthorization = document.querySelector('.authorization');
    const $scrollableElement = document.querySelector('.my-scrollable-element');

    if (headerBurger) {
        headerBurger.addEventListener('click', () => {
            headerBurger.classList.toggle("header__burger_active");
            burgerBackdrop.classList.toggle('burger__backdrop_active');
            headerMenu.classList.toggle('header__menu_active');
            buttonAuthorization.classList.toggle('authorization_active');
           
            if (headerBurger.classList.contains('header__burger_active')) {
                disablePageScroll($scrollableElement);
            } else {
                enablePageScroll($scrollableElement);
            } 
        });
        
        burgerBackdrop.addEventListener('click', () => {
            headerBurger.classList.toggle("header__burger_active");
            burgerBackdrop.classList.toggle('burger__backdrop_active');
            headerMenu.classList.toggle('header__menu_active');
            buttonAuthorization.classList.toggle('authorization_active');

            if (headerBurger.classList.contains('header__burger_active')) {
                disablePageScroll($scrollableElement);
            } else {
                enablePageScroll($scrollableElement);
            } 
        });
    } 
}

burger();

