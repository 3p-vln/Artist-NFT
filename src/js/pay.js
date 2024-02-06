import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getPayInfo } from './pay/getPayInfo';
import { tab } from './pay/tabs';
import { copytext } from './pay/copy';

document.querySelector('copy-btn').addEventListener('click', function () {
  copytext('.form__copy');
});
