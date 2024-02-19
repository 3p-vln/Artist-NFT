import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artLoad } from './art/artLoad';
import { focus } from './art/focus';

document.addEventListener('DOMContentLoaded', async () => {
    async function snap() {
        const querySnapshot = await getDocs(collection(db, 'art'));
        querySnapshot.forEach(doc => {
            new artLoad(doc.data(), doc.id, '.art-mesh');
        });
    }
    await snap();
    focus('.art-mesh');

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
