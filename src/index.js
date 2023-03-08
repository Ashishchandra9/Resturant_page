import { initialPageLoad } from './initial-page-load.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

// let tabSwitching = (function(){
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', initialPageLoad);

    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click', menu);

    const contactBtn = document.querySelector('.contact');
    contactBtn.addEventListener('click', contact);

// })();
