import $ from 'jquery';
import { collection, getDocs } from "firebase/firestore";
import firebase from './modules/firebase';
import ArtLoad from './modules/artLoad';

class Art {
    constructor() {
        this.db = firebase.getFirestore();
        this.firebase();
    }

    async firebase() {
        const querySnapshot = await getDocs(collection(this.db, "art"));
        querySnapshot.forEach((doc) => {
            const load = new ArtLoad(doc.data(), doc.id);
        });
    }
}

new Art();


