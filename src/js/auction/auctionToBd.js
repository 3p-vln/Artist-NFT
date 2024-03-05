import { db } from '../modules/firebase';
import { collection, getDoc, doc, updateDoc } from 'firebase/firestore';

export async function auctionToBD() {
  const collectionRef = collection(db, 'auction');
  const docRef = doc(collectionRef, '0');
  const docSnap = await getDoc(docRef);
  const end = new Date('2024-03-10 00:08:00');
  const now = new Date();

  if (docSnap.exists()) {
    const currentValue = docSnap.data().highestPrice;

    const inputValue = document.getElementById('number').value;

    if (inputValue.trim() === '') {
      return;
    }

    let newValue = parseInt(inputValue);

    if (isNaN(newValue)) {
      return;
    }

    if (newValue > 999999999) {
      return;
    }

    if (now > end) {
      return;
    }

    if (newValue > currentValue) {
      await updateDoc(docRef, {
        highestPrice: newValue,
      });

      const formattedNewValue = `$${newValue}`;

      const highestPriceElement = document.getElementById('highestPrice');
      if (highestPriceElement) {
        highestPriceElement.textContent = formattedNewValue;
      }

      document.getElementById('number').value = '';
    }
  }
}
