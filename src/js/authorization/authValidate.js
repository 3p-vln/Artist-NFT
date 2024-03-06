import JustValidate from 'just-validate';

export function validate() {
  const auth = document.querySelectorAll('.tabs__nav-btn');

  auth.forEach((item) => {
    const tabId = item.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId + ' .form');
    console.log(tabId, currentTab);
    console.log(currentTab.getAttribute('id'));

    if (currentTab.getAttribute('id') == 'login') {
      const validate = new JustValidate('#login', {
        errorLabelStyle: {
          color: '#1D1F21',
        },
      });

      validate
        .addField(document.querySelector('#email-login'), [
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
        .addField(document.querySelector('#password-login'), [
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
        .addField(document.querySelector('#email-signin'), [
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
        .addField(document.querySelector('#password-signin'), [
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
