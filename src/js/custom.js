import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { customLoad } from './modules/customLoad';

async function snap() {
  const querySnapshot = await getDocs(collection(db, "art"));
  querySnapshot.forEach((doc) => {
    new customLoad(doc.data(), doc.id);
  });
}
snap();

async function snap2() {
  const querySnapshot = await getDocs(collection(db, "custom"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    document.querySelector('#clother-webp').srcset = data.imgWebP;
    document.querySelector('#clother-img').src = data.img;
  });
}
snap2();

function focus() {
  $('.custom-mesh').on('click', '.card', (event) => {
    $('.active').removeClass('active');
    const clickedElement = $(event.currentTarget);
    clickedElement.addClass('active');
    clickedElement.find('.btn').removeClass('btn_active');
    setTimeout(function () {
      clickedElement.find('.btn').addClass('btn_active');
    }, 1);
  });

  $('.custom-mesh').on('mouseleave', '.card', () => {
    $('.active').removeClass('active');
  });
}
focus();
