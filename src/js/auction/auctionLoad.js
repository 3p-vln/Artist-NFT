import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getElementId } from '../composables/callDom.js';

export async function snapAuction() {
  const querySnapshot = await getDocs(collection(db, 'auction'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    getElementId('imgWebp').src = data.imgWebp;
    getElementId('imgPng').src = data.imgPng;
    getElementId('title').innerHTML = data.title;
    getElementId('size').innerHTML = data.size;
    getElementId('estimatedValue').innerHTML = data.estimatedValue;
    getElementId('highestPrice').innerHTML = `$${data.highestPrice}`;
    getElementId('titleDescription').innerHTML = data.titleDescription;
    getElementId('paragraphDescription').innerHTML = data.paragraphDescription;
  });
}
