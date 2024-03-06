import JustValidate from 'just-validate';
import { tab } from './pay/tabs';
import { radio } from './authorization/radio';
import { stop } from './modules/stopPreload';
import { validate } from './authorization/authValidate';

document.addEventListener('DOMContentLoaded', async () => {
  tab();
  radio();
  validate();

  stop();
});

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (validator.validate()) {
//     form.reset();
//   }
// });

// validator
//   .addField(document.querySelector('#email'), [
//     {
//       rule: 'required',
//       errorMessage: 'Enter your email',
//     },
//     {
//       rule: 'customRegexp',
//       value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
//       errorMessage: 'Write correct email',
//     },
//   ])
//   .addField(document.querySelector('#password'), [
//     {
//       rule: 'required',
//     },
//     {
//       rule: 'customRegexp',
//       value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
//       errorMessage: 'incorrect password',
//     },
//   ]);
