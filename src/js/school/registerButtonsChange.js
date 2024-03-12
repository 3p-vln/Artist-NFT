export const registerButtonsChange = function () {
  const registerButtons = document.querySelectorAll('.register-form__plans-button');

  registerButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
          registerButtons.forEach((btn) => {
              btn.classList.remove('register-form__plans-button_active');
          });

          button.classList.add('register-form__plans-button_active');
      });
  });
}