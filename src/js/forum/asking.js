import { db } from '../modules/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function questionToBD() {
    const date = new Date();
    document.getElementById('form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const docRef = await addDoc(collection(db, 'questions'), {
            name: document.getElementById('name').value,
            question: document.getElementById('question').value,
            dateYear: date.getFullYear(),
            dateDay: date.getDate(),
            dateMonth: date.getMonth() + 1,
            userImg:
                'https://firebasestorage.googleapis.com/v0/b/artist-nft-d75ba.appspot.com/o/forum%2Fimg-for-popular-question.png?alt=media&token=50a9c358-0d74-4728-90e0-87a0c3f878ee',
            userImgWebp:
                'https://firebasestorage.googleapis.com/v0/b/artist-nft-d75ba.appspot.com/o/forum%2Fimg-for-popular-question.webp?alt=media&token=bcc135eb-fb24-4223-beb2-3cf4fb5774ee',
            about: 'no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses. ',
        });
        console.log('Document written with ID: ', docRef.id);
    });
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
    console.log(date.getDate());
}
