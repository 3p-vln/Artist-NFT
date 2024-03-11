import { getElement } from '../composables/callDom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import firebase from '../modules/firebase';
export async function logOut() {
    onAuthStateChanged((user) => {
        if (user) {
            this.user = user;
        } else {
            window.location.href = '/Artist-NFT/authorization.html';
        }
    });
    getElement('.sidebar__footer-link').addEventListener('click', () => {
        signOut();
    });
}
