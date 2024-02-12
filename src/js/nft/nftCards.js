import $ from 'jquery';
import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { nftCardsLoad } from './nftCardsLoad';

export async function snapNftCardsLoad() {
    const querySnapshot = await getDocs(collection(db, 'main-swiper'));
    querySnapshot.forEach(doc => {
        nftCardsLoad(doc.data(), doc.id);
    });
}
