import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function selectLoad() {
  const querySnapshot = await getDocs(collection(db, 'clothers'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(doc.id);
    if (doc.id == 'type') {
      document.querySelector('#hoodie').innerHTML = data.hoodie;
      document.querySelector('#shitr').innerHTML = data.shitr;
      document.querySelector('#sweater').innerHTML = data.sweater;
      document.querySelector('#t-shitr').innerHTML = data.tShitr;
    }
    if (doc.id == 'size') {
      document.querySelector('#xs').innerHTML = data.xs;
      document.querySelector('#s').innerHTML = data.s;
      document.querySelector('#m').innerHTML = data.m;
      document.querySelector('#l').innerHTML = data.l;
      document.querySelector('#xl').innerHTML = data.xl;
      document.querySelector('#xxl').innerHTML = data.xxl;
      document.querySelector('#xxxl').innerHTML = data.xxxl;
    }
  });
}
