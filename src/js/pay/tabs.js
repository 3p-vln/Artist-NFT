export function tab() {
  const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
  const tabsItems = document.querySelectorAll('.tabs__item');

  tabsBtn.forEach((item) => {
    item.addEventListener('click', function () {
      const currentBtn = item;
      const tabId = currentBtn.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId);
      console.log(currentTab);

      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('active');
        });

        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  });

  document.querySelector('.tabs__nav-btn').click();
}
