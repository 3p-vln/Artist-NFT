import { burger } from './header/burger';
import { preloader } from './modules/preloader';
import { skeletonsArt } from './art/removeSkeletonArt';

import { db } from './modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { select } from './modules/select';

import setMouseParalaxStyle from './modules/paralax';
import { skeletonsCustom } from './custom/removeSkeletonCustom';
import { skeletonsMain } from './main/removeSkeletonMain';
import { skeletonsNft } from './nft/removeSkeletonNft';
import { skeletonsForumPopular } from './forum/removeSkeletonPopular';

const allSkeleton = document.querySelectorAll('.skeleton');

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
        allSkeleton.forEach((item) => {
            // item.remove('skeleton');

            if (window.location.toString().includes('art.html')) {
                skeletonsArt('.art-mesh');
            } else if (window.location.toString().includes('custom.html')) {
                skeletonsCustom('.custom-mesh');
            } else if (window.location.toString().includes('index.html')) {
                skeletonsMain();
            } else if (window.location.toString().includes('nft.html')) {
                skeletonsNft();
            } else if (window.location.toString().includes('forum.html')) {
                skeletonsForumPopular();
            } else {
                item.classList.remove('skeleton');
            }
        });
    });
});
