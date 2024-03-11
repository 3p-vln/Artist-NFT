
export const chatCardTabChange = function() {
  const chatCards = document.querySelectorAll('.card');

chatCards.forEach((card) => {
  card.addEventListener('click', ()=> {

    let currentCard = card;
    chatCards.forEach((card) => {
      card.classList.remove('card_active');
    });

    card.classList.add('card_active');
  });
}) 
}

