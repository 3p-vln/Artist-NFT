import JustValidate from 'just-validate';

export function auctionValidate(highestPrice) {
  const form = document.querySelector('#form');
  const highestPriceElement = document.getElementById('highestPrice');
  const validate = new JustValidate('#form', {
    errorLabelStyle: {
      color: '#1D1F21',
    },
  });

  // validate.addRule('customRule', {
  //   handler: (value) => {
  //     const inputValue = parseFloat(value);
  //     return inputValue > highestPrice;
  //   },
  //   errorMessage: `Price must be higher than ${highestPrice}`,
  // });

  validate.addField('#number', [
    {
      rule: 'required',
      errorMessage: 'Enter your price',
    },
    {
      rule: 'customRegexp',
      value: /^[0-9]+$/,
      errorMessage: 'Enter your price with numbers',
    },
    {
      rule: 'minLength',
      value: 1,
      errorMessage: 'Minimum 4 characters',
    },
    {
      rule: 'maxLength',
      value: 16,
      errorMessage: 'Maximum 16 characters',
    },
    // 'customRule',
  ]);
}
