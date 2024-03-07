import firebase from '../modules/firebase';
import $ from 'jquery';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getElement, getElementId, getElements } from '../composables/callDom';
import { db } from '../modules/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const auth = getAuth();
const signInForm = getElement('#login');
const signUpForm = getElement('#signup');
const forms = getElements('.tabs__item');
const btnLogin = getElement('#accaunt-log .btn');
const btnSignup = getElement('#accaunt-sign .btn');
console.log(btnSignup);

export const loginEmailPassword = async () => {
    const email = getElementId('email-login');
    const password = getElementId('password-login');
    const userData = await getDocs(collection(db, 'users'));
    const allUsers = [];
    userData.forEach((doc) => {
        allUsers.push({
            id: doc.id,
            uid: doc.data().uid,
            modifier: doc.data().modifier,
        });
    });
    console.log(allUsers);
    try {
        const user = await signInWithEmailAndPassword(auth, email.value, password.value);
        const userUid = user.user.uid;
        const currentUser = [];
        currentUser.push(allUsers.find((item) => item.uid === userUid));
        if (currentUser[0].modifier == 'admin') {
            window.location.href = '/for-owner.html';
        } else {
            window.location.href = '/client.html';
        }
        console.log(currentUser);
    } catch (error) {
        console.log(error);
        // showLoginError(error);
    }
};

export const createAccount = async () => {
    const email = getElementId('email-signin').value;
    const password = getElementId('password-signin').value;
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        const radio = getElements('.roles__check-label');
        if (radio[0].classList.contains('roles__check-label_active')) {
            const userAdd = await addDoc(collection(db, 'users'), {
                uid: user.user.uid,
                modifier: 'customer',
            });
            console.log('Document written with ID: ', userAdd.id);
            window.location.href = '/client.html';
        } else {
            const userAdd = await addDoc(collection(db, 'users'), {
                uid: user.user.uid,
                modifier: 'admin',
            });
            console.log('Document written with ID: ', userAdd.id);
            window.location.href = '/for-owner.html';
        }
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
};

// const showLoginError = (error) => {
//     // divLoginError.style.display = 'block';
//     if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//         lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
//     } else {
//         lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
//     }
// };

// forms.forEach((item) => {
//     if (item.classList.contains('active') && item.getAttribute('id') == 'accaunt-log') {
//         btnLogin.addEventListener('click', loginEmailPassword);
//     } else if (item.classList.contains('active') && item.getAttribute('id') == 'accaunt-sign') {
//         btnSignup.addEventListener('click', createAccount);
//     }
// });
