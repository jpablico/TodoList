import '/src/style.scss';
import { createCalendar } from './calendar.js';

const taskbutton = document.getElementsByClassName('task-button-wrapper')[0];

taskbutton.addEventListener('click', createTask);

function createTask() {
	console.log("Bop");
}

  createCalendar();