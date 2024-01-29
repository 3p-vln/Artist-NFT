import JustValidate from 'just-validate';

function validate() {
    const validate = new JustValidate('#form');

    console.log(validate);
    
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
}

validate();



