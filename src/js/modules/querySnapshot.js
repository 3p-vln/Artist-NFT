import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { preloader } from './preloader';
import { artLoad } from '../art/artLoad';

export async function querySnapshot(dbName, callback) {
    const querySnapshot = await getDocs(collection(db, dbName));
    querySnapshot.forEach(doc => {
        callback(doc);
        Promise.all(
            Array.from(document.images)
                .filter(img => !img.complete)
                .map(
                    img =>
                        new Promise(resolve => {
                            img.onload = img.onerror = resolve;
                        })
                )
        ).then(() => {
            console.log(5);
            preloader();
        });
    });
}
