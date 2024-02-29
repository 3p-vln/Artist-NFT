import { auctionToBD } from './auction/auctionToBd';
import { snapAuction } from './auction/auctionLoad';
import { auctionAccordion } from './auction/auctionAccardion';
import { auctionValidate } from './auction/auctionValidate';
import { auctionTimer } from './auction/auctionTimer';

document.addEventListener('DOMContentLoaded', async () => {
  await snapAuction();
  auctionTimer();
  auctionValidate();
  auctionAccordion();

  document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const inputValue = document.getElementById('number').value;

    if (inputValue.trim() === '') {
      return;
    }

    const newValue = parseInt(inputValue);

    await auctionToBD();
  });

  const artLoadEvent = new Event('loadingIsFinished');
  document.dispatchEvent(artLoadEvent);
});
