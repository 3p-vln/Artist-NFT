const artLoadEvent = new Event('loadingIsFinished');
document.dispatchEvent(artLoadEvent);

const headerMenu = document.querySelector('.header__menu');
const sidebarLinks = document.querySelectorAll('.sidebar__content-link');
const forOwnerBlocks = document.querySelectorAll('.content__box');
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


sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    let currentLink = link;
    let tabId = currentLink.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    sidebarLinks.forEach((link) => {
      link.classList.remove('sidebar__content-link_active');
    });

    forOwnerBlocks.forEach((block) => {
      block.classList.remove('content__box_active');
    })

    currentLink.classList.add('sidebar__content-link_active');
    currentTab.classList.add('content__box_active');
  });
});

sidebarLinks[0].click();