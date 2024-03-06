import JustValidate from 'just-validate';
import { getElement, getElements } from '../composables/callDom';

export function validate() {
  const auth = getElements('.tabs__nav-btn');

  auth.forEach((item) => {
    const tabId = item.getAttribute('data-tab');
    const currentTab = getElement(tabId + ' .form');

    if (currentTab.getAttribute('id') == 'login') {
      const validate = new JustValidate('#login', {
        errorLabelStyle: {
          color: '#1D1F21',
        },
      });

      validate
        .addField(getElement('#email-login'), [
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
        .addField(getElement('#password-login'), [
          {
            rule: 'required',
          },
          {
            rule: 'customRegexp',
            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
            errorMessage: 'incorrect password',
          },
        ]);

      validate.onSuccess((event) => {
        '#login'.reset();
      });
    } else if (currentTab.getAttribute('id') == 'signin') {
      const validate = new JustValidate('#signin', {
        errorLabelStyle: {
          color: '#1D1F21',
        },
      });

      validate
        .addField(getElement('#email-signin'), [
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
        .addField(getElement('#password-signin'), [
          {
            rule: 'required',
          },
          {
            rule: 'customRegexp',
            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
            errorMessage: 'incorrect password',
          },
        ]);

      validate.onSuccess((event) => {
        '#signin'.reset();
      });
    }
  });
}
