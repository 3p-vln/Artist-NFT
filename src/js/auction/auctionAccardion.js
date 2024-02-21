export function auctionAccordion() {
    const accordionItems = document.querySelectorAll('.description');

    accordionItems.forEach(accordionItem => {
      accordionItem.addEventListener("click", (event) => {
        if(event.target.closest('.description__btn')) { 
          accordionItem.classList.toggle('active')
        }
      });
    });
}
