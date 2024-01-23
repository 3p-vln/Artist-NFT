function burger() {
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const body = document.querySelector("body");
    const burgerBackdrop = document.querySelector('.burger_backdrop');
    const buttonAuthorization = document.querySelector('.authorization');

    if (headerBurger) {
        headerBurger.addEventListener('click', () => {
            headerBurger.classList.toggle("_active");
            burgerBackdrop.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
            buttonAuthorization.classList.toggle('_active');
            body.classList.toggle("_lock");
        });
        burgerBackdrop.addEventListener('click', () => {
            headerBurger.classList.toggle("_active");
            burgerBackdrop.classList.toggle("_active");
            headerMenu.classList.toggle('_active');
            buttonAuthorization.classList.toggle('_active');
            body.classList.toggle("_lock");
        });
    }
}

burger();


