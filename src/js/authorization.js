import JustValidate from "just-validate";
const validator = new JustValidate(document.querySelector('#auth-form', {
   errorLabelStyle: {
            color: '#1D1F21',
        },
}));

const form = document.getElementById('auth-form');
const tabButtons = document.querySelectorAll('.tabs__button');
const roles = document.querySelector('.roles');
const checkLabeles = document.querySelectorAll('.roles__check-label');
const tabAccaunts = document.querySelectorAll('.authorization__accaunt');
const autBlock = document.querySelector('.authorization');
const tabsSelect = document.querySelector('.tabs__select');
const inputs = document.querySelectorAll('.form__item-input');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        let tabId = button.getAttribute('data-tab');
        console.log(tabId);
        let currentTab = document.querySelector(tabId);

        tabButtons.forEach(tabButton => {
          tabButton.classList.remove('tabs__button_active');
        });

      button.classList.add('tabs__button_active');
      tabsSelect.classList.toggle('tabs__select_active');

        if (tabButtons[1].classList.contains('tabs__button_active')) {
            roles.classList.add('roles_visible');
            roles.style.maxHeight = roles.scrollHeight + 'px';
            autBlock.classList.add('authorization_log');
        } else {
            roles.classList.remove('roles_visible');
            roles.style.maxHeight = null;
            autBlock.classList.remove('authorization_log');
        }

        tabAccaunts.forEach(tab => {
            tab.classList.remove('authorization__accaunt_visible');
        });

        currentTab.classList.add('authorization__accaunt_visible');
    });
});

checkLabeles.forEach(label => {
    label.addEventListener('click', () => {
        checkLabeles.forEach(checkLabel => {
            checkLabel.classList.remove('roles__check-label_active');
        });

        if (!roles.classList.contains('roles_visible')) {
            label.classList.remove('roles__check-label_active');
        }

        label.classList.add('roles__check-label_active');
    });
});

tabButtons[0].click();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validator.validate()) {
    form.reset();
  }
});


validator
    .addField(document.querySelector('#email'), [
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

    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);