import { getElement, getElements } from '../composables/callDom';

export function radio() {
    // const checkLabeles = getElements('.roles__check-label');
    const checkBoxes = getElements('.roles__check');

  checkBoxes.forEach((box) => {
    const label = box.children[0];
    console.log(label);
    box.addEventListener('click', () => {
      checkBoxes.forEach((checkBox) => {
        const checkLabel = checkBox.children[0];
        checkLabel.classList.remove('roles__check-label_active');
        
      });

      label.classList.add('roles__check-label_active');

    });
  });

    getElement('.roles__check-label').click();
}


//  checkLabeles.forEach((label) => {
//      label.addEventListener('click', () => {
//          checkLabeles.forEach((checkLabel) => {
//              checkLabel.classList.remove('roles__check-label_active');
//          });

//          label.classList.add('roles__check-label_active');
//      });
//  });