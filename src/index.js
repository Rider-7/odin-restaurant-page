import { getLandingTemplate } from "./landing";
import { getMenuTemplate } from "./menu";

// ISSUE: Entire page gets replaced everytime, which then requires the navigation event listener to be recreated everytime
//        for navigation to work.

(function initialise () {
    const content = document.getElementById('content');
    content.replaceChildren(getLandingTemplate().cloneNode(true));

    const nav = document.querySelector('nav');
    nav.addEventListener('click', navigationDelegator);
})();

function navigationDelegator (e) {

    function main () {
        content.replaceChildren(getLandingTemplate().cloneNode(true));
    }

    function menu () {
        content.replaceChildren(getMenuTemplate().cloneNode(true));
    }

    e.preventDefault();
    const content = document.getElementById('content');

    switch (e.target.textContent) {
        case 'MAIN':
            main();
            break;
        case 'MENU':
            menu();
            break;
    } 

    const nav = document.querySelector('nav');
    nav.addEventListener('click', navigationDelegator);

}