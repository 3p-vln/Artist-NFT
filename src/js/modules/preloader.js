import $ from 'jquery';
export async function preloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.querySelector('.preloader');
            loader.classList.add('loaded');
        }, 3000);
    });
}
