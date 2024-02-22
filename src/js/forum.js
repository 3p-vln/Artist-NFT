import { questionToBD } from './forum/asking';

document.addEventListener('DOMContentLoaded', async () => {
    await questionToBD();

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
