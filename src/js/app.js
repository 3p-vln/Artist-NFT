import { burger } from './modules/burger';
import firebase from './modules/firebase';
import { get, ref, child } from 'firebase/database';

const DBref = ref(firebase.getDatabase());

get(child(DBref, `main/Biography/img`))
.then((snap) => {
    document.querySelector('#biography__image__img').src = snap.val();
})
.catch((e) => {
    document.querySelector('#biography__image__img').src = '/defualt.img'
})



>>>>>>> 2cbc09d6717afb58f3d44f3e13492b9e48efd6a2
