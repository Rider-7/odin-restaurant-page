import { getTemplate } from '../templates/page-template.js';

function menuSlot (foodName) {

    const menuSlot = document.createElement('div');
    menuSlot.classList.add('menu-slot');

    const slotTitle = document.createElement('h2');
    slotTitle.classList.add('menu-slot-title');
    slotTitle.textContent = foodName;
    menuSlot.appendChild(slotTitle);

    const slotImg = document.createElement('img');
    slotImg.classList.add('menu-slot-img');
    menuSlot.appendChild(slotImg);

    return menuSlot;

}

export function getMenuTemplate() {

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(menuContent.cloneNode(true));

    return  getTemplate(heroTitle, heroSubtitle, menu); // TODO: Remove temporary content later.

}

// TODO: Temporary content for menu page. Remove later.
const heroTitle = 'MENU';
const heroSubtitle = 'In cursus vel ex non laoreet. Quisque tempus volutpat maximus.';

const menuContent = (() => {

    const menuContent = new DocumentFragment();
    const foodName = 'FOOD NAME';
    for (let i = 0; i < 3; i++) {
        const _menuSlot = menuSlot(foodName);
        menuContent.appendChild(_menuSlot);
    }
    return menuContent;

})();