import JustValidate from 'just-validate';

const validate = new JustValidate('#form');

validate.addField("#name", [
    {
        rule: 'required',
        errorMessage: 'Enter your name'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Minimum 2 characters'
    },
])