import { getTemplate } from './template.js';

const heroTitle = 'TITLE';
const heroSubtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';

// TODO: Temporary content for landing page. Remove later.
const landingContent = (() => {

    const landingContent = new DocumentFragment();
    const headerText = 'Header';
    const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';
    for (let i = 0; i < 3; i++) {
        const _landingSlot = landingSlot(headerText, paragraphText);
        landingContent.appendChild(_landingSlot);
    }
    return landingContent;

})();

function landingSlot (headerText, paragraphText) {

    const landingSlot = document.createElement('div');
    landingSlot.classList.add('landing-slot', 'landing-slot-normal');

    const landingImg = document.createElement('img');
    landingImg.classList.add('landing-img');
    landingSlot.appendChild(landingImg);

    const landingText = (function landingText () {

        const landingText = document.createElement('div');
        landingText.classList.add('landing-text');

        const header = document.createElement('h2');
        header.classList.add('landing-title');
        header.textContent = headerText;
        landingText.appendChild(header);

        const paragraph = document.createElement('p');
        paragraph.classList.add('landing-paragraph');
        paragraph.textContent = paragraphText;
        landingText.appendChild(paragraph);

        return landingText;

    })();
    landingSlot.appendChild(landingText);

    return landingSlot;

}

export function displayLandingPage() {

    const landingTemplate =  getTemplate(heroTitle, heroSubtitle, landingContent.cloneNode(true)); // TODO: Remove temporary content later.

    const content = document.getElementById('content');
    content.appendChild(landingTemplate.cloneNode(true));

}









