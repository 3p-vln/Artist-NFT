import { getElement, getElements } from '../composables/callDom';

export function radio() {
  const roles = getElement('.roles');
  const checkLabeles = getElements('.roles__check-label');

  checkLabeles.forEach((label) => {
    label.addEventListener('click', () => {
      checkLabeles.forEach((checkLabel) => {
        checkLabel.classList.remove('roles__check-label_active');
      });

      if (!roles.classList.contains('roles_visible')) {
        label.classList.remove('roles__check-label_active');
      }

      label.classList.add('roles__check-label_active');
    });
  });

  document.querySelector('.roles__check-label').click();
}
