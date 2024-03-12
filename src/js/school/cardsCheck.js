export const cardCheck = function () {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card) => {
      card.addEventListener('mouseover', () => {
          card.classList.add('card_individual');
      });

      card.addEventListener('mouseout', () => {
          card.classList.remove('card_individual');
      });
  });
}