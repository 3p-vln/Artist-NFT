import { burger } from './header/burger';
import { preloader } from './modules/preloader';

import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { select } from './modules/select';

import setMouseParalaxStyle from './modules/paralax';

// const allSkeleton = document.querySelectorAll('.skeleton');

// window.addEventListener('load', function () {
//     allSkeleton.forEach((item) => {
//         item.classList.remove('skeleton');
//     });
// });

document.addEventListener('loadingIsFinished', () => {
    Promise.all(
        Array.from(document.images)
            .filter((img) => !img.complete)
            .map(
                (img) =>
                    new Promise((resolve) => {
                        img.onload = img.onerror = resolve;
                    }),
            ),
    ).then(() => {
        preloader();
    });
});
