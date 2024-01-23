import $ from 'jquery';
import {db} from './modules/firebase';
import {collection, getDocs} from 'firebase/firestore';
import { customLoad } from './modules/customLoad';

async function snap() {
    const querySnapshot = await getDocs(collection(db, "art"));
    querySnapshot.forEach((doc) => {
        new customLoad(doc.data(), doc.id);
    });
}
snap();
