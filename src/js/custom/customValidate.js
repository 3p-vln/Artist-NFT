import JustValidate from 'just-validate';
import { getElement } from '../composables/callDom';

export function validate() {
  const form = getElement('#form');
  const validate = new JustValidate('#form', {
    errorLabelStyle: {
      color: '#1D1F21',
    },
  });

  validate
    .addField('#coment', [
      {
        rule: 'required',
        errorMessage: 'Enter your coment',
      },
      {
        rule: 'maxLength',
        value: 100,
        errorMessage: 'Maximum 100 characters',
      },
    ])
    .addField('#checkbox', [
      {
        rule: 'required',
        errorMessage: 'Accept the user agreement',
      },
    ]);

  validate.onSuccess((event) => {
    form.reset();
  });
}
