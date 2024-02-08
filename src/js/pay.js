import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getPayInfo } from './pay/getPayInfo';
import { tab } from './pay/tabs';

document.addEventListener('DOMContentLoaded', async () => {
    tab();
    getPayInfo();
});
