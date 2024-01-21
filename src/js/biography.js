import {db} from './modules/firebase';
import {collection, getDocs} from 'firebase/firestore';

async function snap() {
    const querySnapshot = await getDocs(collection(db, "main-biography"));
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    })
    console.log(querySnapshot);
};
snap();