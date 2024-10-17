import imgSrc from './img.jpg';
export function createHome() {
    const content = document.querySelector('#content');
    content.textContent = '';
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Some Random Restaurant';
    container.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur vero corrupti culpa, esse iure dolores delectus deserunt, accusamus officia molestias, quas laudantium doloremque aspernatur. Mollitia nulla voluptate earum vitae!'
    container.appendChild(h3);

    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    container.appendChild(img);
}