import { getElement, getElements } from '../composables/callDom';

export function radio() {
  const checkLabeles = getElements('.roles__check-label');

  checkLabeles.forEach((label) => {
    label.addEventListener('click', () => {
      checkLabeles.forEach((checkLabel) => {
        checkLabel.classList.remove('roles__check-label_active');
      });

      label.classList.add('roles__check-label_active');
    });
  });

  getElement('.roles__check-label').click();
}
