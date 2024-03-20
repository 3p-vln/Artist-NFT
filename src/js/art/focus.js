import $ from 'jquery';

export function focus(content) {
    $(content).on('click mouseenter', '.card', (event) => {
        const clickedElement = $(event.currentTarget);
        clickedElement.find('.btn').removeClass('btn_active');
        setTimeout(function () {
            clickedElement.find('.btn').addClass('btn_active');
        }, 100);
    });

    $(content).on('mouseleave', '.card', () => {
        $('.btn').removeClass('btn_active');
    });
}
