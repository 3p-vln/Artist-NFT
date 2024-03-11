import JustValidate from 'just-validate';
import { tab } from './pay/tabs';
import { radio } from './authorization/radio';
import { stop } from './modules/stopPreload';
import { validate } from './authorization/authValidate';
// import { signInUp } from './authorization/signin';

document.addEventListener('DOMContentLoaded', async () => {
    tab();
    radio();
    validate();
    // signInUp();

    stop();
});
