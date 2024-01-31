import JustValidate from 'just-validate';

// document.querySelectorAll(".form__send-btn")
// .forEach(function (elem) {
//   elem.onclick = function (e) {
//     document.elem.reset();
//     // let selector = this.dataset.clearSelector;
//     // document.querySelectorAll(selector)
//     // .forEach(function (item) {
//     //   item.value = "";
//     // });
//   };
// });

// $(".form__send-btn").click(function() {

//     $("form")[0].reset();

// });

// const form = document.getElementById("myForm");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.target.reset(); // очищаем форму
//   })


function validate() {
    
    const validate = new JustValidate('#form',{
        errorLabelStyle: {
            color: '#1D1F21'
        }
    });
    
    validate.addField("#name", [
        {
            rule: 'required',
            errorMessage: 'Enter your name'
        },
        {
            rule: 'customRegexp',
            value: /^[а-яА-ЯёЁa-zA-Z]+$/,   
            errorMessage: 'Enter your name with letters'
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Minimum 2 characters'
        },
        {
            rule: 'maxLength',
            value: 16,
            errorMessage: 'Maximum 16 characters'
        },
    ])
    .addField("#email", [
        {
            rule: 'required',
            errorMessage: 'Enter your email'
        },
        {
            rule: 'customRegexp',
            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            errorMessage: 'Write correct email'
        }
    ])
    .addField("#question", [
        {
            rule: 'required',
            errorMessage: 'Enter your question'
        },
        {
            rule: 'maxLength',
            value: 100,
            errorMessage: 'Maximum 100 characters'
        },
    ])
    .addField("#checkbox", [
        {
            rule: 'required',
            errorMessage: 'Accept the user agreement'
        },
    ])  
}

validate();







