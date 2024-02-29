export function preloader() {
  setTimeout(() => {
    const loader = document.querySelector('.preloader');
    loader.classList.add('loaded');
  }, 1000);
}
