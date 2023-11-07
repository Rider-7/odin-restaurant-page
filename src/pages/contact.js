import { getTemplate } from '../templates/page-template.js';
import { contentSlot } from '../templates/components.js';


export function getContactTemplate() {

    return  getTemplate(heroTitle, heroSubtitle, contactContent.cloneNode(true)); // TODO: Remove temporary content later.

}

// TODO: Temporary content for contact page. Remove later.
const heroTitle = 'CONTACT';
const heroSubtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';

const contactContent = (() => {

    const contactContent = new DocumentFragment();
    const headerText = 'Header';
    const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';
    for (let i = 0; i < 3; i++) {
        const _contactSlot = contentSlot(headerText, paragraphText);
        contactContent.appendChild(_contactSlot);
    }
    return contactContent;

})();

