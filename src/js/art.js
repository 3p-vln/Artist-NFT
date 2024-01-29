import $ from 'jquery';
import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artLoad } from './art/artLoad';

async function snap() {
    const querySnapshot = await getDocs(collection(db, "art"));
    querySnapshot.forEach((doc) => {
        new artLoad(doc.data(), doc.id);
    });
}
snap();

function focus() {
    $('.art-mesh').on('click mouseenter', '.card', (event) => {
        $('.active').removeClass('active');
        const clickedElement = $(event.currentTarget);
        clickedElement.addClass('active');
        clickedElement.find('.btn').removeClass('btn_active');
        setTimeout(function(){
          clickedElement.find('.btn').addClass('btn_active');
        },1);
      });
      
      $('.art-mesh').on('mouseleave', '.card', () => {
        $('.active').removeClass('active');
      });
}
focus();



