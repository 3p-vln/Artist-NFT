import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCFDHjyCkH0iQMHWYr8nVcO6IIBzHwxXec',
  authDomain: 'artist-nft-d75ba.firebaseapp.com',
  projectId: 'artist-nft-d75ba',
  storageBucket: 'artist-nft-d75ba.appspot.com',
  messagingSenderId: '1045494293646',
  appId: '1:1045494293646:web:9a83d99847b9c7434c15df',
  measurementId: 'G-NNSQZW2MNN',
};

const app = initializeApp(firebaseConfig);
const secondaryApp = initializeApp(firebaseConfig, 'Secondary');
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { auth, db, storage, secondaryApp };
