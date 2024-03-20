import { auctionToBD } from './auction/auctionToBd';
import { snapAuction } from './auction/auctionLoad';
import { auctionAccordion } from './auction/auctionAccardion';
import { auctionValidate } from './auction/auctionValidate';
import { auctionTimer } from './auction/auctionTimer';

document.addEventListener('DOMContentLoaded', async () => {
    await snapAuction();
    await auctionValidate();
    auctionTimer();
    auctionAccordion();

    document.getElementById('form').addEventListener('submit', async function (event) {
        event.preventDefault();
        await auctionToBD();
    });

    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);
});
