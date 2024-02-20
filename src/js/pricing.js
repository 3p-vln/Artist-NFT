import $ from 'jquery';
// import { db } from './modules/firebase';
// import { collection, doc, getDocs } from 'firebase/firestore';
import { priciingTabs } from './pricing/pricingTabs';

document.addEventListener('DOMContentLoaded', () => {
    priciingTabs();
    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);
});
