import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getElement } from '../composables/callDom';

export async function imgLoad() {
  const querySnapshot = await getDocs(collection(db, 'custom'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    getElement('#clother-webp').srcset = data.imgWebP;
    getElement('#clother-img').src = data.img;
  });
}
