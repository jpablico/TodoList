import '/src/style.scss';
import { createCalendar } from './calendar.js';
import { Task } from './tasks.js';
import { TaskList }from './tasks.js';


const taskbutton = document.getElementsByClassName('task-button-wrapper')[0];

taskbutton.addEventListener('click', createTask);

function createTask() {
	console.log("Bop");
}

createCalendar();

