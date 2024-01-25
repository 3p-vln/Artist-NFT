import {db} from './modules/firebase';
import {collection, getDocs} from 'firebase/firestore';

const wrapper =  document.querySelector('wrapper');

// async function snap() {
//     const querySnapshot = await getDocs(collection(db, "main-premium"));
//     querySnapshot.forEach((doc) => {
//         new premiumLoad(doc.data(), doc.id);
//     });
// }
// snap();

(async function () {
    const querySnapshot = await getDocs(collection(db, "main-premium"));
    querySnapshot.forEach(doc => {
        const data = doc.data()
        
        // до сих пор не переделал!!!!! 
        document.querySelector('#premium-banner-title').innerHTML = data.bannerTitle;
        document.querySelector('#premium-banner-paragraph').innerHTML = data.bannerParagraph;
        document.querySelector('#premium-banner-btn-text').innerHTML = data.bannerBtnText;

        document.querySelector('#premium-card-nft-text').innerHTML = data.cardNftText;
        document.querySelector('#premium-card-title').innerHTML = data.cardTitle;
        document.querySelector('#premium-card-paragraph').innerHTML = data.cardParagraph;
        document.querySelector('#premium-card-value').innerHTML = data.cardValue;
        document.querySelector('#premium-card-btn-text').innerHTML = data.cardBtnText;
        document.querySelector('#premium-card-img-first').src = data.cardImgFirst;
        document.querySelector('#premium-card-img-second').src = data.cardImgSecond;
        document.querySelector('#premium-card-img-third').src = data.cardImgThird;
        document.querySelector('#premium-card-img-fourth').src = data.cardImgFourth;
        document.querySelector('#premium-card-img-fiveth').src = data.cardImgFiveth;
    })
    // console.log(querySnapshot);
})();