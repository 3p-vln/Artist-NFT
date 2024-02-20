import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getPayInfo } from './pay/getPayInfo';
import { tab } from './pay/tabs';
import { validate } from './pay/payValidate';

document.addEventListener('DOMContentLoaded', async () => {
    tab();
    getPayInfo();
    validate();

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
