import { auctionToBD } from './auction/auctionToBd';
import { snapAuction } from './auction/auctionLoad';
import { auctionAccordion } from './auction/auctionAccardion';
import { auctionValidate } from './auction/auctionValidate';
import { auctionTimer } from './auction/auctionTimer';

document.addEventListener('DOMContentLoaded', async () => {
    await auctionToBD();
    await snapAuction();
    auctionTimer();
    auctionValidate();
    auctionAccordion();
    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);
});
