import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

const wrapper = document.querySelector('wrapper');

export async function snapBiography() {
  const querySnapshot = await getDocs(collection(db, 'main-biography'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    document.querySelector('#biography-img').src = data.img;
    document.querySelector('#biography-bg').src = data.bg;
    document.querySelector('#biography-subtitle').innerHTML = data.subtitle;
    document.querySelector('#biography-title').innerHTML = data.title;
    document.querySelector('#biography-paragraph').innerHTML = data.paragraph;
    document.querySelector('#biography-column-year-first').innerHTML = data.columnYearFirst;
    document.querySelector('#biography-column-paragraph-first').innerHTML =
      data.columnParagraphFirst;
    document.querySelector('#biography-column-year-second').innerHTML = data.columnYearSecond;
    document.querySelector('#biography-column-paragraph-second').innerHTML =
      data.columnParagraphSecond;
    document.querySelector('#biography-column-year-third').innerHTML = data.columnYearThird;
    document.querySelector('#biography-column-paragraph-third').innerHTML =
      data.columnParagraphThird;
  });
  // console.log(querySnapshot);
}

// snapBiography();
