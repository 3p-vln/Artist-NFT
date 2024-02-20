import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { navigation } from './nft/nftCards';

document.addEventListener('DOMContentLoaded', async () => {
    await navigation();
    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);
});

