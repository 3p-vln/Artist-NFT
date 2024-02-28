import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getElementId } from '../composables/callDom.js';

export async function snapBiography() {
  const querySnapshot = await getDocs(collection(db, 'main-biography'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    getElementId('biography-img').src = data.img;
    getElementId('biography-bg').src = data.bg;
    getElementId('biography-subtitle').innerHTML = data.subtitle;
    getElementId('biography-title').innerHTML = data.title;
    getElementId('biography-paragraph').innerHTML = data.paragraph;
    getElementId('biography-column-year-first').innerHTML = data.columnYearFirst;
    getElementId('biography-column-paragraph-first').innerHTML = data.columnParagraphFirst;
    getElementId('biography-column-year-second').innerHTML = data.columnYearSecond;
    getElementId('biography-column-paragraph-second').innerHTML = data.columnParagraphSecond;
    getElementId('biography-column-year-third').innerHTML = data.columnYearThird;
    getElementId('biography-column-paragraph-third').innerHTML = data.columnParagraphThird;
  });
}
