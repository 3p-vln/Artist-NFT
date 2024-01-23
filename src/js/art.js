import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artLoad } from './modules/artLoad';

async function snap() {
    const querySnapshot = await getDocs(collection(db, "art"));
    querySnapshot.forEach((doc) => {
        new artLoad(doc.data(), doc.id);
    });
}

snap();


