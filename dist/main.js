/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todolist/./src/style.scss?");

/***/ }),

/***/ "./src/scripts/calendar.js":
/*!*********************************!*\
  !*** ./src/scripts/calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCalendar: () => (/* binding */ createCalendar)\n/* harmony export */ });\nfunction createCalendar() {\n\tconst date = new Date();\n\tconst today = date.getDate();\n\tconst month = date.getMonth();\n\tconst year = date.getFullYear();\n\tconst daysInMonth = new Date(year, month + 1, 0).getDate();\n\tconst firstDay = new Date(year, month, 1).getDay();\n  \n\tconst monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n\t\"July\", \"August\", \"September\", \"October\", \"November\", \"December\"\n\t];\n  \n\tlet calendarHTML = `<h2 class=\"calendar-heading\">${monthNames[month]} ${year}</h2><table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>`;\n  \n\tfor (let i = 0; i < firstDay; i++) {\n\t  calendarHTML += '<td class=\"day\"></td>';\n\t}\n  \n\tfor (let i = 1; i <= daysInMonth; i++) {\n\t  if (i === today) {\n\t\tcalendarHTML += `<td class=\"day today\">${i}</td>`;\n\t  } else if ((i + firstDay) % 7 === 0) {\n\t\tcalendarHTML += `<td class=\"day\">${i}</td></tr><tr>`;\n\t  } else {\n\t\tcalendarHTML += `<td class=\"day\">${i}</td>`;\n\t  }\n\t}\n  \n\tcalendarHTML += '</tr></table>';\n  \n\tdocument.getElementById('calendar').innerHTML = calendarHTML;\n  }\n  \n  \n\n//# sourceURL=webpack://todolist/./src/scripts/calendar.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/style.scss */ \"./src/style.scss\");\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.js */ \"./src/scripts/calendar.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/scripts/tasks.js\");\n\n\n\n\n\n\nconst taskbutton = document.getElementsByClassName('task-button-wrapper')[0];\n\ntaskbutton.addEventListener('click', createTask);\n\nfunction createTask() {\n\tconsole.log(\"Bop\");\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/tasks.js":
/*!******************************!*\
  !*** ./src/scripts/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskList: () => (/* binding */ TaskList)\n/* harmony export */ });\nclass Task {\n\tconstructor(name, description) {\n\t  this.name = name;\n\t  this.description = description;\n\t  this.completed = false;\n\t}\n\n\tcomplete() {\n\t  this.completed = true;\n\t}\n  }\n  \n  class TaskList {\n\tconstructor() {\n\t  this.tasks = [];\n\t}\n  \n\taddTask(name, description) {\n\t  const newTask = new Task(name, description);\n\t  this.tasks.push(newTask);\n\t}\n  \n\tgetTasks() {\n\t  return this.tasks;\n\t}\n  }\n  \n  // Usage\n  const taskList = new TaskList();\n  taskList.addTask('Task 1', 'Description for Task 1');\n  taskList.addTask('Task 2', 'Description for Task 2');\n  \n  console.log(taskList.getTasks());\n\n\n\n//# sourceURL=webpack://todolist/./src/scripts/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;