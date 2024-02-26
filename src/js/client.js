import { tab } from './pay/tabs';
import { chatTab } from './client/chatTab';

document.addEventListener('DOMContentLoaded', async () => {
    tab();
    chatTab();

    const loadingIsFinished = new Event('loadingIsFinished');
    document.dispatchEvent(loadingIsFinished);
});
