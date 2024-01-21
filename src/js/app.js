import { burger } from './modules/burger';
// import firebase from './modules/firebase';
// import { get, ref, child } from 'firebase/database';

import {db} from './modules/firebase';
import {collection, getDocs} from 'firebase/firestore';

// const DBref = ref(firebase.getDatabase());

// get(child(DBref, `main/Biography/img`))
// .then((snap) => {
//     document.querySelector('#biography__image__img').src = snap.val();
// })
// .catch((e) => {
//     document.querySelector('#biography__image__img').src = '/defualt.img'
// })

// get(child(DBref, `main/Biography/subtitle`))
// .then((snap) => {
//     document.querySelector('#biography__subtitle__text').src = snap.val();
//     console.log(document.querySelector('#biography__subtitle__text').src = snap.val())
// })

async function snap() {
    const querySnapshot = await getDocs(collection(db, "art"));
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    })
    console.log(querySnapshot);
};
snap();




