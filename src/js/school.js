const buttons = document.querySelectorAll('.tabs__button');
const registerButtons = document.querySelectorAll('.register-form__plans-button');
const cards = document.querySelectorAll('.card');

import JustValidate from 'just-validate';
const validator = new JustValidate(
    document.querySelector('#register-form', {
        errorLabelStyle: {
            color: '#1D1F21',
        },
    })
);


registerButtons.forEach((button) => {
  button.addEventListener('click', () => { 
    registerButtons.forEach(btn => {
        btn.classList.remove('tabs__button_active');
    });

    button.classList.add('tabs__button_active');
  })
})

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let currentButton = button;
    let tabId = currentButton.getAttribute('data-tab');
    let currentCard = document.querySelector(tabId);
    
    buttons.forEach((btn) => {
      btn.classList.remove('tabs__button_active');
    });

        buttons.forEach(btn => {
            btn.classList.remove('tabs__button_active');
        });

        cards.forEach(card => {
            card.classList.remove('card_active');
        });

        currentButton.classList.add('tabs__button_active');
        currentCard.classList.add('card_active');
    });
});

buttons[0].click();

validator
    .addField(document.querySelector('#email'), [
        {
            rule: 'required',
            errorMessage: 'Enter your name',
        },
        {
            rule: 'required',
            errorMessage: 'Enter your email',
        },
        {
            rule: 'customRegexp',
            value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            errorMessage: 'Write correct email',
        },
    ])
    .addField(document.querySelector('#password'), [
        {
            rule: 'required',
        },
        {
            rule: 'customRegexp',
            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
            errorMessage: 'incorrect password',
        },
    ]);
