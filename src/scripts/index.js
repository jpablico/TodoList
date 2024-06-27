import '../Styles/style.scss';
import { createHeader } from './headerComponent.js';
import { navItems } from './data.js';
import { initializeDialog, initializeButtons, openModal } from './logic.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDialog();
    initializeButtons();
});

const body = document.body;

const content = document.createElement('div');
content.className = 'content';

body.appendChild(createHeader());
