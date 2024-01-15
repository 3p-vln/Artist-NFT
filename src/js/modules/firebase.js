import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFDHjyCkH0iQMHWYr8nVcO6IIBzHwxXec",
  authDomain: "artist-nft-d75ba.firebaseapp.com",
  projectId: "artist-nft-d75ba",
  storageBucket: "artist-nft-d75ba.appspot.com",
  messagingSenderId: "1045494293646",
  appId: "1:1045494293646:web:9a83d99847b9c7434c15df",
  measurementId: "G-NNSQZW2MNN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyDO8MiN9PG7tKA9mFASAZd3l3ZSZkSZkpY",
//     authDomain: "our-flowers.firebaseapp.com",
//     projectId: "our-flowers",
//     storageBucket: "our-flowers.appspot.com",
//     messagingSenderId: "1059937229113",
//     appId: "1:1059937229113:web:2f1bd4d3f5809db0fdb0e8"
// };

// class Firebase {
//     constructor() {
//       if (!Firebase.instance) {
//         this.app = initializeApp(firebaseConfig);
//         Firebase.instance = this;
//       }
  
//       return Firebase.instance;
//     }
  
//     getAuth() {
//       return getAuth(this.app);
//     }
  
//     getFirestore() {
//       return getFirestore(this.app);
//     }
  
//     getDatabase() {
//       return getDatabase(this.app);
//     }

//     getSinged(){
//       return new Promise((resolve, reject) => {
//           const auth = getAuth();
//           onAuthStateChanged(auth, (user) => {
//               if (user) {
//                   resolve(user);
//               } else {
//                   reject('Вход не выполнене')
//               }
//           });
//         })
//     }
//     exit(){
//       const auth = getAuth();
//       signOut(auth).then(() => {
//       }).catch((error) => {
//           console.log(error)
//       });
//     }
//   }



  
//   const firebase = new Firebase();
  
//   export default firebase;

