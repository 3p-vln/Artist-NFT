import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { customLoad } from './custom/customLoad';


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
  $('.custom-mesh').on('click mouseenter', '.card', (event) => {
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

async function selectLoad() {
  const querySnapshot = await getDocs(collection(db, "clothers"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(doc.id);
    if(doc.id == "type"){
      document.querySelector('#hoodie').innerHTML = data.hoodie;
      document.querySelector('#shitr').innerHTML = data.shitr;  
      document.querySelector('#sweater').innerHTML = data.sweater;  
      document.querySelector('#t-shitr').innerHTML = data.tShitr;  
    }
    if(doc.id == "size"){
      document.querySelector('#xs').innerHTML = data.xs;
      document.querySelector('#s').innerHTML = data.s;
      document.querySelector('#m').innerHTML = data.m;
      document.querySelector('#l').innerHTML = data.l;
      document.querySelector('#xl').innerHTML = data.xl;
      document.querySelector('#xxl').innerHTML = data.xxl;
      document.querySelector('#xxxl').innerHTML = data.xxxl;
    }
  });
}

selectLoad();