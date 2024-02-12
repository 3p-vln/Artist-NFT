import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { snapNftCardsLoad } from './nft/nftCards';
import { navigation } from './nft/nftNavigation';

document.addEventListener('DOMContentLoaded', async () => {
    snapNftCardsLoad();
    navigation();
});

