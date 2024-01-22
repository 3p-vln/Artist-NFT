import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import ArtLoad from './modules/artLoad';

async function snap() {
    const querySnapshot = await getDocs(collection(db, "art"));
    querySnapshot.forEach((doc) => {
        const load = new ArtLoad(doc.data(), doc.id);
    });
}

snap();


