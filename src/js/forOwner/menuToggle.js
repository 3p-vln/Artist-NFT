export const menuToggle = function () {
  const headerMenu = document.querySelector('.header__menu');
  const sidebar = document.querySelector('.for-owner__sidebar');

  headerMenu.addEventListener('click', () => {
      headerMenu.classList.toggle('header__menu_active');
      if (headerMenu.classList.contains('header__menu_active')) {
          sidebar.classList.add('for-owner__sidebar_active');
          sidebar.nextElementSibling.classList.add('content__box_blackout');
      } else {
          sidebar.classList.remove('for-owner__sidebar_active');
          sidebar.nextElementSibling.classList.remove('content__box_blackout');
      }
  });
}