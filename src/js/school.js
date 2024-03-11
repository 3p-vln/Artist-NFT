// const buttons = document.querySelectorAll('.tabs__button');
import { buttonsTabsChange } from './school/buttonsTabs';
import { registerButtonsChange } from './school/registerButtonsChange';
import { cardCheck } from './school/cardsCheck';

const artLoadEvent = new Event('loadingIsFinished');
document.dispatchEvent(artLoadEvent);

document.addEventListener('DOMContentLoaded', async () => {
  buttonsTabsChange();
  registerButtonsChange();
  cardCheck();
});



import JustValidate from 'just-validate';

const validator = new JustValidate(
  document.querySelector('#register-form', {
    errorLabelStyle: {
      color: '#1D1F21',
    },
  }),
);


// validator
//     .addField(document.querySelector('#email'), [
//         {
//             rule: 'required',
//             errorMessage: 'Enter your name',
//         },
//         {
//             rule: 'required',
//             errorMessage: 'Enter your email',
//         },
//         {
//             rule: 'customRegexp',
//             value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
//             errorMessage: 'Write correct email',
//         },
//     ])
//     .addField(document.querySelector('#password'), [
//         {
//             rule: 'required',
//         },
//         {
//             rule: 'customRegexp',
//             value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
//             errorMessage: 'incorrect password',
//         },
//     ]);



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
