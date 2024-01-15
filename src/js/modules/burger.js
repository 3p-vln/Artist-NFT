function burger() {
    document.querySelector('.header__burger')
        .addEventListener("click", function (e) {
            const headerBurgerMenu = document.querySelector('.header__menu');
            const headerBurger = document.querySelector('.header__burger');
            const burgerBackdrop = document.querySelector('.burger-backdrop');
            document.body.classList.toggle('lock');
            burgerBackdrop.classList.toggle('active')
            headerBurger.classList.toggle('active');
            headerBurgerMenu.classList.toggle('active');
        });

    document.querySelector('.burger-backdrop').addEventListener("click", function (e) {
        const headerBurgerMenu = document.querySelector('.header-menu');
        const headerBurger = document.querySelector('.header-burger');
        const burgerBackdrop = document.querySelector('.burger-backdrop');
        document.body.classList.toggle('lock');
        burgerBackdrop.classList.toggle('active')
        headerBurger.classList.toggle('active');
        headerBurgerMenu.classList.toggle('active');
    });
}
