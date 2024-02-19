import { preloader } from './modules/preloader';

document.addEventListener('loadingIsFinished', () => {
    Promise.all(
        Array.from(document.images)
            .filter(img => !img.complete)
            .map(
                img =>
                    new Promise(resolve => {
                        img.onload = img.onerror = resolve;
                    })
            )
    ).then(() => {
        preloader();
    });
});
