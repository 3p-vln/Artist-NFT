import { getElements } from "../composables/callDom";

export function checkAuthLinks() {
    const tabsButtons = getElements('.tabs__nav-btn');
    const authLinks = getElements('.authorization__link');

    authLinks.forEach((link) => {
        link.addEventListener('click', () => {
            console.log(link.innerHTML);
            if (link.innerHTML === 'Sign up') {
                tabsButtons[1].click();
            } else {
                tabsButtons[0].click();
            }
        });
    });
}
