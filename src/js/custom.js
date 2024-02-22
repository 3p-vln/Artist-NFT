import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artLoad } from './art/artLoad';
import { validate } from './custom/customValidate';
import JustValidate from 'just-validate';
import { focus } from './art/focus';
import { imgLoad } from './custom/imgLoad';
import { selectLoad } from './custom/select';

document.addEventListener('DOMContentLoaded', async () => {
    await imgLoad();
    async function snap() {
        const querySnapshot = await getDocs(collection(db, 'art'));
        querySnapshot.forEach(doc => {
            new artLoad(doc.data(), doc.id, '.custom-mesh');
        });
    }
    await snap();
    focus('.custom-mesh');
    selectLoad();
    validate();

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
