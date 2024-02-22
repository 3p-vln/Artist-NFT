import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

const wrapper = document.querySelector('wrapper');

export async function snapAuction() {
    const querySnapshot = await getDocs(collection(db, 'auction'));
    querySnapshot.forEach(doc => {
        const data = doc.data();
        document.querySelector('#imgWebp').src = data.imgWebp;
        document.querySelector('#imgPng').src = data.imgPng;
        document.querySelector('#title').innerHTML = data.title;
        document.querySelector('#size').innerHTML = data.size;
        document.querySelector('#estimatedValue').innerHTML = data.estimatedValue;
        document.querySelector('#highestPrice').innerHTML = data.highestPrice;
        document.querySelector('#titleDescription').innerHTML = data.titleDescription;
        document.querySelector('#paragraphDescription').innerHTML = data.paragraphDescription;
    });
}
