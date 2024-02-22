import JustValidate from 'just-validate';

export function auctionValidate() {
    const form = document.querySelector('#form');
    const validate = new JustValidate('#form', {
        errorLabelStyle: {
            color: '#1D1F21',
        },
    });

    validate.addField('#number', [
        {
            rule: 'required',
            errorMessage: 'Enter your price',
        },
        {
            rule: 'minLength',
            value: 4,
            errorMessage: 'Minimum 4 characters',
        },
        {
            rule: 'maxLength',
            value: 16,
            errorMessage: 'Maximum 16 characters',
        },
    ]);

    validate.onSuccess(event => {
        form.reset();
    });
}
