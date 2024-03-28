// const buttons = document.querySelectorAll('.tabs__button');
import { buttonsTabsChange } from './school/buttonsTabs';
import { registerButtonsChange } from './school/registerButtonsChange';
import { cardCheck } from './school/cardsCheck';
import { validate } from './school/schoolValidate';

const artLoadEvent = new Event('loadingIsFinished');
document.dispatchEvent(artLoadEvent);

document.addEventListener('DOMContentLoaded', async () => {
    buttonsTabsChange();
    registerButtonsChange();
    cardCheck();
    validate();
});
