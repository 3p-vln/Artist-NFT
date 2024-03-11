import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function querySnapshot(dbName, callback) {
    const querySnapshot = await getDocs(collection(db, dbName));
    querySnapshot.forEach((doc) => {
        callback(doc);
    });
}
