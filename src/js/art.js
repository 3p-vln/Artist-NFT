import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artLoad } from './art/artLoad';
import { focus } from './art/focus';
import { preloader } from './modules/preloader';
import { querySnapshot } from './modules/querySnapshot';

document.addEventListener('DOMContentLoaded', async () => {
    async function snap() {
        await querySnapshot('art', doc => new artLoad(doc.data(), doc.id, '.art-mesh'));
    }
    snap();
    focus('.art-mesh');
});
