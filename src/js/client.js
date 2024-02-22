import { tab } from './pay/tabs';

document.addEventListener('DOMContentLoaded', async () => {
    tab();

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
