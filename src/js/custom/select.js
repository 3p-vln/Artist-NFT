import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getElement } from '../composables/callDom';

export async function selectLoad() {
  const querySnapshot = await getDocs(collection(db, 'clothers'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(doc.id);
    if (doc.id == 'type') {
      getElement('#hoodie').innerHTML = data.hoodie;
      getElement('#shitr').innerHTML = data.shitr;
      getElement('#sweater').innerHTML = data.sweater;
      getElement('#t-shitr').innerHTML = data.tShitr;
    }
    if (doc.id == 'size') {
      getElement('#xs').innerHTML = data.xs;
      getElement('#s').innerHTML = data.s;
      getElement('#m').innerHTML = data.m;
      getElement('#l').innerHTML = data.l;
      getElement('#xl').innerHTML = data.xl;
      getElement('#xxl').innerHTML = data.xxl;
      getElement('#xxxl').innerHTML = data.xxxl;
    }
  });
}
