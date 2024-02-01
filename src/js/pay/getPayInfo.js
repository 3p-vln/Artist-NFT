import $ from 'jquery';
import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getPayInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log(productId);
    const productArts = [];
    const productDataArts = await getDocs(collection(db, "art"));
    productDataArts.forEach((doc) => {
        productArts.push({
            id: doc.id,
            name: doc.data().name,
            text: doc.data().text,
            price: doc.data().price
        });
    });

    const art = [];
    art.push(productArts.find((item) => item.id === productId));
    console.log(art[0]);

    document.querySelector('#pay-name').innerHTML = art[0].name;
    document.querySelector('#art-name').innerHTML = art[0].name;
    document.querySelector('#price').innerHTML = art[0].price;
    document.querySelector('#art-info').innerHTML = art[0].text;
}

getPayInfo();