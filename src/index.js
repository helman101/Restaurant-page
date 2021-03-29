import pageLoad from './page-load';
import showAbout from './about';
import showMenu from './menu';
import showContact from './contact';

pageLoad();
showAbout();

const aboutBtn = document.querySelector('#about');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

aboutBtn.onclick = showAbout;
menuBtn.onclick = showMenu;
contactBtn.onclick = showContact;