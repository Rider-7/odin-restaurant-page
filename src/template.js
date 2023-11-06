function header (title, subtitle) {
    
    const header = document.createElement('header');

    const navDiv = (function navDiv () {

        const navDiv = document.createElement('div');
        navDiv.classList.add('nav-div');
        header.appendChild(navDiv);
    
        const logo = document.createElement('span');
        logo.classList.add('logo');
        logo.textContent = 'LOGO';

        navDiv.appendChild(logo);
    
        const nav = document.createElement('nav');
        navDiv.appendChild(nav);
    
        const ul = (function ul () {
            const ul = document.createElement('ul');
            const tabNames = ['MAIN MENU', 'MENU', 'CONTACTS'];
            tabNames.forEach(name => {
                let li = document.createElement('li');
                li.textContent = name;
                ul.appendChild(li);
            })

            return ul

        })();
        nav.appendChild(ul);

        return navDiv;

    })();
    header.appendChild(navDiv);

    const heroDiv = (function heroDiv () {

        const heroDiv = document.createElement('div');
        header.appendChild(heroDiv);
        
        const heroTitle = document.createElement('h1');
        heroTitle.textContent = `${title}`;
        heroDiv.appendChild(heroTitle);
        
        const heroSubtitle = document.createElement('p');
        heroSubtitle.textContent = `${subtitle}`;
        heroDiv.appendChild(heroSubtitle);
        
        return heroDiv;
        
        })();
    header.appendChild(heroDiv);
    
    return header;

}

function main (content) {
    const main = document.createElement('div');
    main.classList.add('main');
    main.replaceChildren(content);

    return main;

}

function footer () {

    const footer = document.createElement('footer');

    const copyright = document.createElement('span');
    copyright.textContent = '2023 Rider-7';
    footer.appendChild(copyright);

    return footer;
    
}

export function getTemplate (heroTitle, heroSubtitle, content) {

    const template = new DocumentFragment();

    const _header = header(heroTitle, heroSubtitle);
    template.appendChild(_header);
    
    const _main = main(content);
    template.appendChild(_main);

    const _footer = footer();
    template.appendChild(_footer);

    return template;
}