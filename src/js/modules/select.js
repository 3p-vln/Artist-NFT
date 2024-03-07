import { getElements } from '../composables/callDom';

getElements('.select__content').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.select__btn');
    const dropDownTitle = dropDownWrapper.querySelector('.select__btn_p');
    const dropDownAfter = dropDownWrapper.querySelector('.select__btn_after');
    const dropDownList = dropDownWrapper.querySelector('.select__list');
    const dropDownListItems = dropDownList.querySelectorAll('.select__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.select__input-hidden');
    // var height = dropDownList.height;

    // var options = {
    //     rootMargin: `0px 0px -${height + 70}px 0px`,
    //     threshold: 0,
    // };
    // var observer = new IntersectionObserver(callback, options);

    // function callback(entries) {
    //     entries.forEach(function (entry) {
    //         if (entry.isIntersecting) {
    //             dropDownList.style.top = '64px';
    //         } else {
    //             dropDownList.style.top = -height + 'px';
    //         }
    //     });
    // }
    // const options = {
    //     rootMargin: `0px 0px -250px 0px`,
    //     threshold: 0,
    // };

    // // const observer = new IntersectionObserver(callback, options);
    // // const self = this;

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             dropDownList.style.top = '115px';
    //         } else {
    //             dropDownList.style.top = -dropDownList.height + 'px';
    //         }
    //     });
    // }, options);

    dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('select__list--visible');
        dropDownAfter.classList.toggle('select__btn_after--active');
        dropDownBtn.classList.toggle('select__btn-clicked');
        this.classList.add('select__button--active');
        observer.observe(dropDownList);
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownTitle.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownBtn.classList.toggle('select__btn-clicked');
            dropDownInput.value = this.dataset.value;
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('select__btn--active');
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
            dropDownBtn.classList.remove('select__btn-clicked');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('select__btn--active');
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
            dropDownBtn.classList.remove('select__btn-clicked');
        }
    });
});
