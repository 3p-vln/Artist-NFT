import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getPayInfo } from './pay/getPayInfo';
import { tab } from './pay/tabs';
import { validate } from './pay/payValidate';
import { copytext } from './pay/copy';

document.addEventListener('DOMContentLoaded', async () => {
    tab();
    await getPayInfo();
    validate();
    copytext();

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
