import pageLoad from './page-load';
import showAbout from './about';
import showMenu from './menu';
import showContact from './contact';

pageLoad();
showAbout();

let aboutBtn = document.querySelector('#about');
let menuBtn = document.querySelector('#menu');
let contactBtn = document.querySelector('#contact');

aboutBtn.onclick = showAbout;
menuBtn.onclick = showMenu;
contactBtn.onclick = showContact;