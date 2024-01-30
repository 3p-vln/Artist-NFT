document.querySelectorAll('.select__content').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.select__btn');
    const dropDownTitle = dropDownWrapper.querySelector('.select__btn_p');
    const dropDownAfter = dropDownWrapper.querySelector('.select__btn_after');
    const dropDownList = dropDownWrapper.querySelector('.select__list');
    const dropDownListItems = dropDownList.querySelectorAll('.select__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.select__input-hidden');

    dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('select__list--visible');
        dropDownAfter.classList.toggle('select__btn_after--active')
        this.classList.add('select__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownTitle.innerText = this.innerText;
            dropDownBtn.focus();
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
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('select__btn--active');
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
        }
    });
});
