import $ from 'jquery';
import {db} from './modules/firebase';
import {collection, getDocs} from 'firebase/firestore';
import CustomLoad from './modules/customLoad';

async function snap() {
    const querySnapshot = await getDocs(collection(db, "art"));
    querySnapshot.forEach((doc) => {
        const load = new CustomLoad(doc.data(), doc.id);
    });
}
snap();
