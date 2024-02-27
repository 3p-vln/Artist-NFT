import $ from 'jquery';
import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { premiumLoad } from './premiumLoad';

const wrapper = document.querySelector('wrapper');

export async function snapPremiumSwiper() {
  const querySnapshot = await getDocs(collection(db, 'main-swiper'));
  querySnapshot.forEach((doc) => {
    premiumLoad(doc.data(), doc.id);
  });
}

export async function snapPremiumBanner() {
  const querySnapshot = await getDocs(collection(db, 'main-premium'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    document.querySelector('#premium-banner-title').innerHTML = data.bannerTitle;
    document.querySelector('#premium-banner-paragraph').innerHTML = data.bannerParagraph;
    document.querySelector('#premium-banner-btn-text').innerHTML = data.bannerBtnText;
  });
}

