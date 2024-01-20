import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFDHjyCkH0iQMHWYr8nVcO6IIBzHwxXec",
  authDomain: "artist-nft-d75ba.firebaseapp.com",
  projectId: "artist-nft-d75ba",
  storageBucket: "artist-nft-d75ba.appspot.com",
  messagingSenderId: "1045494293646",
  appId: "1:1045494293646:web:9a83d99847b9c7434c15df",
  measurementId: "G-NNSQZW2MNN"
};

class Firebase {
  constructor() {
    if (!Firebase.instance) {
      this.app = initializeApp(firebaseConfig);
      Firebase.instance = this;
    }

    return Firebase.instance;
  }

  getAuth() {
    return getAuth(this.app);
  }

  getFirestore() {
    return getFirestore(this.app);
  }

  getDatabase() {
    return getDatabase(this.app);
  }
}

const firebase = new Firebase();

export default firebase;