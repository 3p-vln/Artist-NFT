import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function imgLoad() {
  const querySnapshot = await getDocs(collection(db, 'custom'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    document.querySelector('#clother-webp').srcset = data.imgWebP;
    document.querySelector('#clother-img').src = data.img;
  });
}
