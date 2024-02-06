import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artLoad } from './art/artLoad';
import { focus } from './art/focus';

async function snap() {
    const querySnapshot = await getDocs(collection(db, 'art'));
    querySnapshot.forEach(doc => {
        new artLoad(doc.data(), doc.id, '.art-mesh');
    });
}
snap();

focus('.art-mesh');
