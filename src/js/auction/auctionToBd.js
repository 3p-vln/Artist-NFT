import { db } from '../modules/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function auctionToBD() {
  const date = new Date();
  document
    .getElementById('form')
    .addEventListener('submit', async function (e) {
      e.preventDefault();

      const docRef = await addDoc(collection(db, 'auction'), {
        highestPrice: document.getElementById('highestPrice').value,
        dateYear: date.getFullYear(),
        dateDay: date.getDate(),
        dateMonth: date.getMonth() + 1,
      });
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('form').reset();
    });
  console.log('111');
  console.log(date.getFullYear());
  console.log(date.getMonth() + 1);
  console.log(date.getDate());
}
