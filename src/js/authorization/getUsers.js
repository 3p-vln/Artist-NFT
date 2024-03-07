import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getUsers() {
    const userData = await getDocs(collection(db, 'users'));
    const allUsers = [];
    userData.forEach((doc) => {
        allUsers.push({
            id: doc.id,
            uid: doc.data().uid,
            modifier: doc.data().modifier,
        });
    });

    return allUsers;
}
