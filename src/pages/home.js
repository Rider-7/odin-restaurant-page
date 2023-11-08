import { getTemplate } from '../templates/page-template.js';
import { contentSlot } from '../templates/components.js';

import '../styles/content-slot.css';

export function getHomeTemplate() {

    return  getTemplate(heroTitle, heroSubtitle, homeContent.cloneNode(true)); // TODO: Remove temporary content later.

}

// TODO: Temporary content for home page. Remove later.
const heroTitle = 'TITLE';
const heroSubtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';

const homeContent = (() => {

    const homeContent = new DocumentFragment();
    const headerText = 'Header';
    const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';
    for (let i = 0; i < 3; i++) {
        const _homeSlot = contentSlot(headerText, paragraphText);
        homeContent.appendChild(_homeSlot);
    }
    return homeContent;

})();









