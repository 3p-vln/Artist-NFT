import JustValidate from 'just-validate';

export function validate() {
    const form = document.querySelector('#register-form');
    const validate = new JustValidate('#register-form', {
        errorLabelStyle: {
            color: '#1D1F21',
        },
    });

    validate
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Enter your name',
            },
            {
                rule: 'customRegexp',
                value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                errorMessage: 'Enter your name with letters',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Minimum 2 characters',
            },
            {
                rule: 'maxLength',
                value: 16,
                errorMessage: 'Maximum 16 characters',
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Enter your email',
            },
            {
                rule: 'customRegexp',
                // value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                value: /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/,
                errorMessage: 'Write correct email',
            },
            {
                rule: 'email',
            },
        ])
        .addField('#question', [
            {
                rule: 'required',
                errorMessage: 'Enter your question',
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
