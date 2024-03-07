import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getElementId } from '../composables/callDom.js';
import { premiumLoad } from './premiumLoad';

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

    getElementId('premium-banner-title').innerHTML = data.bannerTitle;
    getElementId('premium-banner-paragraph').innerHTML = data.bannerParagraph;
    getElementId('premium-banner-btn-text').innerHTML = data.bannerBtnText;
  });
}
