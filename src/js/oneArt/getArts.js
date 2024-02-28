import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { load } from '../oneArt/loadOne';

export async function getArts() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const productArts = [];
  const productDataArts = await getDocs(collection(db, 'art'));
  productDataArts.forEach((doc) => {
    productArts.push({
      id: doc.id,
      img: doc.data().img,
      imgWebP: doc.data().imgWebP,
      name: doc.data().name,
      text: doc.data().text,
      price: doc.data().price,
      lock: doc.data().lock,
      sub: doc.data().sub,
      close: doc.data().close,
      authName: doc.data().authName,
      authImg: doc.data().authImg,
      authImgWebP: doc.data().autnImgWebP,
      date: doc.data().date,
    });
  });

  const art = [];
  art.push(productArts.find((item) => item.id === productId));
  await load(art);
}
