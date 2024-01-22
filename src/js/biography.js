import {db} from './modules/firebase';
import {collection, getDocs} from 'firebase/firestore';

(async function () {
    const querySnapshot = await getDocs(collection(db, "main-biography"));
    querySnapshot.forEach(doc => {
         const data = doc.data()
        // console.log(doc.data().img);
        document.querySelector('#biography__img').src = data.img;
        document.querySelector('#biography__bg').src = data.bg;
        document.querySelector('#biography__subtitle').innerHTML = data.subtitle;
        document.querySelector('#biography__title').innerHTML = data.title;
        document.querySelector('#biography__paragraph').innerHTML = data.paragraph;
        document.querySelector('#biography__column-year-first').innerHTML = data.columnYearFirst;
        document.querySelector('#biography__column-paragraph-first').innerHTML = data.columnParagraphFirst;
        document.querySelector('#biography__column-year-second').innerHTML = data.columnYearSecond;
        document.querySelector('#biography__column-paragraph-second').innerHTML = data.columnParagraphSecond;
        document.querySelector('#biography__column-year-third').innerHTML = data.columnYearThird;
        document.querySelector('#biography__column-paragraph-third').innerHTML = data.columnParagraphThird;
    })
    console.log(querySnapshot);
})();
