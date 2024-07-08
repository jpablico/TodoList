import '../Styles/style.scss';
import { createHeader } from './headerComponent.js';
import { navItems } from './data.js';
import { initializeDialog, initializeButtons, openModal } from './logic.js';
import { populateNavList } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeButtons();
});

const body = document.body;

const content = document.createElement('div');
content.className = 'content';

body.appendChild(createHeader());
