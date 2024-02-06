const tabButtons = document.querySelectorAll('.tabs__button');
console.log(tabButtons);
const roles = document.querySelector('.roles');
console.log(roles);
const checkLabeles = document.querySelectorAll('.roles__check-label');
const tabAccaunts = document.querySelectorAll('.authorization__accaunt');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let tabId = button.getAttribute('data-tab');
    console.log(tabId)
    let currentTab = document.querySelector(tabId);

    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove('tabs__button_active');
    })

    button.classList.add('tabs__button_active');

    if (tabButtons[1].classList.contains('tabs__button_active')) {
      roles.classList.add('roles_visible');
      roles.style.maxHeight = roles.scrollHeight + 'px';
    } else {
      roles.classList.remove('roles_visible');
      roles.style.maxHeight = null;
    }

    tabAccaunts.forEach((tab) => {
      tab.classList.remove('authorization__accaunt_visible');
    });

    currentTab.classList.add('authorization__accaunt_visible');
  })
});

checkLabeles.forEach((label) => {
  label.addEventListener('click', () => {
    checkLabeles.forEach((checkLabel) => {
      checkLabel.classList.remove('roles__check-label_active');
    });

    if (!roles.classList.contains('roles_visible')) {
      label.classList.remove('roles__check-label_active');
    };
    
    label.classList.add('roles__check-label_active');
  });

})

tabButtons[0].click();

