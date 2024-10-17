import "./style.css";
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');

homeBtn.addEventListener('click', () => { createHome() });
menuBtn.addEventListener('click', () => { createMenu() });
contactBtn.addEventListener('click', () => { createContact() });

createHome();