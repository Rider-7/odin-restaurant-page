export function contentSlot (headerText, paragraphText) {

    const contentSlot = document.createElement('div');
    contentSlot.classList.add('content-slot', 'content-slot-normal');

    const contentImg = document.createElement('img');
    contentImg.classList.add('content-img');
    contentSlot.appendChild(contentImg);

    const contentText = (function contentText () {

        const contentText = document.createElement('div');
        contentText.classList.add('content-text');

        const header = document.createElement('h2');
        header.classList.add('content-title');
        header.textContent = headerText;
        contentText.appendChild(header);

        const paragraph = document.createElement('p');
        paragraph.classList.add('content-paragraph');
        paragraph.textContent = paragraphText;
        contentText.appendChild(paragraph);

        return contentText;

    })();
    contentSlot.appendChild(contentText);

    return contentSlot;

}