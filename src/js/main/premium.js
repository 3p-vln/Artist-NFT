import $ from 'jquery';
import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { premiumLoad } from './premiumLoad';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

const wrapper = document.querySelector('wrapper');

async function snap() {
    const querySnapshot = await getDocs(collection(db, 'main-swiper'));
    querySnapshot.forEach(doc => {
        new premiumLoad(doc.data(), doc.id);
    });
    // console.log(querySnapshot);

    // new Swiper('.premium-swiper', {
    //     loop: true,
    //     // centeredSlides: true,
    //     updateOnWindowResize: true,

    //     // on: {
    //     //   init: function () {
    //     //     console.log('swiper initialized');
    //     //   },
    //     // },

    //     breakpoints: {
    //         420: {
    //                   slidesPerView: 2.3,
    //                   centeredSlides: true,
    //                   loop: true,
    //                 },
    //                 940: {
    //                   slidesPerView: 3,
    //                   centeredSlides: true,
    //                   loop: true,
    //                 },
    //                 1024: {
    //                   slidesPerView: 3.3,
    //                   spaceBetween: 20,
    //                   centeredSlides: true,
    //                   loop: true,
    //                 },
    //                 1240: {
    //                   slidesPerView: 4,
    //                   spaceBetween: 20,
    //                   centeredSlides: true,
    //                   loop: true,
    //                 },
    //                 1441: {
    //                   slidesPerView: 4.5,
    //                   spaceBetween: 30,
    //                   centeredSlides: true,
    //                   loop: true,
    //                 },
    //                 1550: {
    //                   slidesPerView: 5,
    //                   spaceBetween: 30,
    //                   centeredSlides: true,
    //                   loop: true,
    //                 },
    //     }
    //   });
}
snap();

(async function () {
    const querySnapshot = await getDocs(collection(db, 'main-premium'));
    querySnapshot.forEach(doc => {
        const data = doc.data();

        // до сих пор не переделал!!!!!
        document.querySelector('#premium-banner-title').innerHTML = data.bannerTitle;
        document.querySelector('#premium-banner-paragraph').innerHTML = data.bannerParagraph;
        document.querySelector('#premium-banner-btn-text').innerHTML = data.bannerBtnText;
    });
    // console.log(querySnapshot);
})();
