import $ from 'jquery';

export function focus(content) {
    $(content).on('click mouseenter', '.card', event => {
        $('.active').removeClass('active');
        const clickedElement = $(event.currentTarget);
        clickedElement.addClass('active');
        clickedElement.find('.btn').removeClass('btn_active');
        setTimeout(function () {
            clickedElement.find('.btn').addClass('btn_active');
        }, 1);
    });

    $(content).on('mouseleave', '.card', () => {
        $('.active').removeClass('active');
    });
}