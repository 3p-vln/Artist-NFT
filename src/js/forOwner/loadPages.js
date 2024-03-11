
export const loadPages = function () {
  const sidebarLinks = document.querySelectorAll('.sidebar__content-link');
  const forOwnerBlocks = document.querySelectorAll('.content__box');

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
          });

          currentLink.classList.add('sidebar__content-link_active');
          currentTab.classList.add('content__box_active');
      });
  });

  sidebarLinks[0].click();
}


