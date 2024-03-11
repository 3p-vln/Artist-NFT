import { getElement } from '../composables/callDom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import firebase from '../modules/firebase';
export async function logOut() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            user = user;
        } else {
            window.location.href = '/Artist-NFT/authorization.html';
        }
    });
    getElement('.sidebar__footer-link').addEventListener('click', () => {
        auth.signOut();
    });
}
