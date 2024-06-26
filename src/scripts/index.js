import '../Styles/style.scss';
import { createHeader } from './header.js';
import { openModal } from './dialog.js';
import { navItems } from './data.js';


const body = document.body;

const content = document.createElement('div');
content.className = 'content';

body.appendChild(createHeader());
