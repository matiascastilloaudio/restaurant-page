export function createContact() {
    const content = document.querySelector('#content');
    content.textContent = '';
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    const form = document.createElement('form');
    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Your Name');
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Your Email');
    const message = document.createElement('textarea');
    message.setAttribute('placeholder', 'Your Message');
    message.setAttribute('rows', '10');
    const formBtn = document.createElement('button');
    formBtn.textContent = 'Submit';
    formBtn.setAttribute('type', 'submit');

    container.append(h1, form);
    form.append(name, email, message, formBtn);
}