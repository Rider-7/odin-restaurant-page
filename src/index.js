import { getHomeTemplate } from "./pages/home";
import { getMenuTemplate } from "./pages/menu";

// ISSUE: Entire page gets replaced everytime, which then requires the navigation event listener to be recreated everytime
//        for navigation to work.

(function initialise () {
    const content = document.getElementById('content');
    content.replaceChildren(getHomeTemplate().cloneNode(true));

    const nav = document.querySelector('nav');
    nav.addEventListener('click', navigationDelegator);
})();

function navigationDelegator (e) {

    function home () {
        content.replaceChildren(getHomeTemplate().cloneNode(true));
    }

    function menu () {
        content.replaceChildren(getMenuTemplate().cloneNode(true));
    }

    e.preventDefault();
    const content = document.getElementById('content');

    switch (e.target.textContent) {
        case 'HOME':
            home();
            break;
        case 'MENU':
            menu();
            break;
    } 

    const nav = document.querySelector('nav');
    nav.addEventListener('click', navigationDelegator);

}