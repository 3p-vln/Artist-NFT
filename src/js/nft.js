import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { navigation } from './pay/getPayInfo';

document.addEventListener('DOMContentLoaded', async () => {
    navigation();
});
