import JustValidate from 'just-validate';

export function validate() {
    const card = document.querySelectorAll('.tabs__nav-btn');
    const forms = document.querySelectorAll('.form');

    card.forEach(item => {
        const tabId = item.getAttribute('data-tab');
        const currentTab = document.querySelector(tabId + ' .form');
        console.log(currentTab);

        if (currentTab.getAttribute('id') == 'form-paypal') {
            const validate = new JustValidate('#form-paypal', {
                errorLabelStyle: {
                    color: '#1D1F21',
                },
                // submitHandler: function (form, values, ajax) {
                //     console.log('Form is valid. Resetting...');
                //     form.reset();
                // },
            });

            validate
                .addField('#card-numb', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your card number',
                    },
                    // {
                    //     rule: 'text',
                    // },
                    {
                        rule: 'customRegexp',
                        value: /^[0-9]+$/,
                        errorMessage: 'Enter your card number with numbers',
                    },
                    {
                        rule: 'minLength',
                        value: 16,
                        errorMessage: 'Minimum 16 characters',
                    },
                    {
                        rule: 'maxLength',
                        value: 16,
                        errorMessage: 'Maximum 16 characters',
                    },
                ])
                .addField('#date', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your card expiration date',
                    },
                    {
                        rule: 'customRegexp',
                        // value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                        value: /^[0-9/]+$/,
                        errorMessage: 'Write correct card expiration date',
                    },
                    {
                        rule: 'minLength',
                        value: 5,
                        errorMessage: 'Minimum 5 characters',
                    },
                    {
                        rule: 'maxLength',
                        value: 5,
                        errorMessage: 'Maximum 5 characters',
                    },
                ])
                .addField('#cvv', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your CVV',
                    },
                    {
                        rule: 'customRegexp',
                        // value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                        value: /^[0-9]+$/,
                        errorMessage: 'Write correct CVV',
                    },
                    {
                        rule: 'minLength',
                        value: 3,
                        errorMessage: 'Minimum 3 characters',
                    },
                    {
                        rule: 'maxLength',
                        value: 3,
                        errorMessage: 'Maximum 3 characters',
                    },
                ])
                .addField('#name', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your name',
                    },
                    {
                        rule: 'minLength',
                        value: 13,
                        errorMessage: 'Minimum 13 characters',
                    },
                ])
                .addField('#checkbox', [
                    {
                        rule: 'required',
                        errorMessage: 'Accept the user agreement',
                    },
                ]);

            validate.onSuccess(event => {
                '#form-paypal'.reset();
            });
        } else if (currentTab.getAttribute('id') == 'form-card') {
            const validate = new JustValidate('#form-card', {
                errorLabelStyle: {
                    color: '#1D1F21',
                },
                // submitHandler: function (form, values, ajax) {
                //     console.log('Form is valid. Resetting...');
                //     form.reset();
                // },
            });

            validate
                .addField('#card-numb', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your card number',
                    },
                    // {
                    //     rule: 'text',
                    // },
                    {
                        rule: 'customRegexp',
                        value: /^[0-9]+$/,
                        errorMessage: 'Enter your card number with numbers',
                    },
                    {
                        rule: 'minLength',
                        value: 16,
                        errorMessage: 'Minimum 16 characters',
                    },
                    {
                        rule: 'maxLength',
                        value: 16,
                        errorMessage: 'Maximum 16 characters',
                    },
                ])
                .addField('#date', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your card expiration date',
                    },
                    {
                        rule: 'customRegexp',
                        // value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                        value: /^[0-9/]+$/,
                        errorMessage: 'Write correct card expiration date',
                    },
                    {
                        rule: 'minLength',
                        value: 5,
                        errorMessage: 'Minimum 5 characters',
                    },
                    {
                        rule: 'maxLength',
                        value: 5,
                        errorMessage: 'Maximum 5 characters',
                    },
                ])
                .addField('#cvv', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your CVV',
                    },
                    {
                        rule: 'customRegexp',
                        // value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                        value: /^[0-9]+$/,
                        errorMessage: 'Write correct CVV',
                    },
                    {
                        rule: 'minLength',
                        value: 3,
                        errorMessage: 'Minimum 3 characters',
                    },
                    {
                        rule: 'maxLength',
                        value: 3,
                        errorMessage: 'Maximum 3 characters',
                    },
                ])
                .addField('#name', [
                    {
                        rule: 'required',
                        errorMessage: 'Enter your name',
                    },
                    {
                        rule: 'minLength',
                        value: 13,
                        errorMessage: 'Minimum 13 characters',
                    },
                ])
                .addField('#checkbox', [
                    {
                        rule: 'required',
                        errorMessage: 'Accept the user agreement',
                    },
                ]);

            validate.onSuccess(event => {
                '#form-card'.reset();
            });
        } else if (currentTab.getAttribute('id') == 'form-crypto') {
            const validate = new JustValidate('#form-crypto', {
                errorLabelStyle: {
                    color: '#1D1F21',
                },
                // submitHandler: function (form, values, ajax) {
                //     console.log('Form is valid. Resetting...');
                //     form.reset();
                // },
            });

            validate
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
                .addField('#checkbox', [
                    {
                        rule: 'required',
                        errorMessage: 'Accept the user agreement',
                    },
                ]);

            validate.onSuccess(event => {
                '#form-crypto'.reset();
            });
        }
    });
}

// validate();
