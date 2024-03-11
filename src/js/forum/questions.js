import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { popularLoad } from './popularLoad';

export async function snapPopularSwiper() {
  const querySnapshot = await getDocs(collection(db, 'questions'));
  querySnapshot.forEach((doc) => {
    popularLoad(doc.data(), doc.id);
  });
}
