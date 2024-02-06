import $ from 'jquery';
import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getPayInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productCategory = urlParams.get('name');
    console.log(productCategory);
    const productArts = [];
    if (productCategory === 'art') {
        const productData = await getDocs(collection(db, 'art'));
        productData.forEach(doc => {
            productArts.push({
                id: doc.id,
                name: doc.data().name,
                text: doc.data().text,
                price: doc.data().price,
            });
        });
    } else if (productCategory === 'nft') {
        const productData = await getDocs(collection(db, 'main-swiper'));
        productData.forEach(doc => {
            productArts.push({
                id: doc.id,
                name: doc.data().cardTitle,
                text: doc.data().text,
                price: doc.data().cardValue,
            });
        });
    }

    const art = [];
    art.push(productArts.find(item => item.id === productId));
    console.log(art[0]);

    document.querySelector('#pay-name').innerHTML = art[0].name;
    document.querySelector('#art-name').innerHTML = art[0].name;
    document.querySelector('#price').innerHTML = art[0].price;
    document.querySelector('#art-info').innerHTML = art[0].text;
}

getPayInfo();
