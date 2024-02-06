const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector('.select');
  const svg = dropdown.querySelector('.svg');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelector('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    svg.classList.toggle('svg-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      svg.classList.remove('svg-rotate');
      menu.classList.remove('menu-open');

      options.forEach((option) => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
});
