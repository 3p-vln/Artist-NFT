export const buttonsTabsChange = function () {
  const buttons = document.querySelectorAll('.tabs__button');
  const cards = document.querySelectorAll('.card');
  
  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          let currentButton = button;
          let tabId = currentButton.getAttribute('data-tab');
          let currentCard = document.querySelector(tabId);

          buttons.forEach((btn) => {
              btn.classList.remove('tabs__button_active');
          });

          buttons.forEach((btn) => {
              btn.classList.remove('tabs__button_active');
          });

          cards.forEach((card) => {
              card.classList.remove('card_active');
          });

          currentButton.classList.add('tabs__button_active');
          currentCard.classList.add('card_active');
      });
  });

  buttons[0].click();
} 