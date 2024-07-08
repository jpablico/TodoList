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

/***/ "./src/Styles/style.scss":
/*!*******************************!*\
  !*** ./src/Styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todolist/./src/Styles/style.scss?");

/***/ }),

/***/ "./src/Scripts/data.js":
/*!*****************************!*\
  !*** ./src/Scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItems: () => (/* binding */ navItems),\n/* harmony export */   navList: () => (/* binding */ navList)\n/* harmony export */ });\nconst navItems = [\n\t{ Label: 'All'},\n\t{ Label: 'Completed'},\n\t{ Label: 'Temporary'},\n\t{ Label: 'Permanent'}\n];\n\n\n\nconst navList = document.querySelector('.nav-list');\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/data.js?");

/***/ }),

/***/ "./src/Scripts/headerComponent.js":
/*!****************************************!*\
  !*** ./src/Scripts/headerComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _Styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Styles/style.scss */ \"./src/Styles/style.scss\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/Scripts/data.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/Scripts/utils.js\");\n\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.id = 'header-container';\n    header.innerHTML = `\n        <div class='header-wrapper'>\n            <h1 class='header-title'>Daybreak</h1>\n            <button class='header-button' id='addTaskButton' >Add task</button>\n        </div>\n        <nav class='nav-container'>\n            <ul class='nav-list'></ul>\n            <button class='nav-button' id='addButton' ><span class='material-symbols-outlined span-icon'>add</span></button>\n        </nav>\n    `;\n    const navList = header.querySelector('.nav-list');\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.populateNavList)(navList, _data_js__WEBPACK_IMPORTED_MODULE_1__.navItems);\n    return header;\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/headerComponent.js?");

/***/ }),

/***/ "./src/Scripts/index.js":
/*!******************************!*\
  !*** ./src/Scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Styles/style.scss */ \"./src/Styles/style.scss\");\n/* harmony import */ var _headerComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerComponent.js */ \"./src/Scripts/headerComponent.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ \"./src/Scripts/data.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic.js */ \"./src/Scripts/logic.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./src/Scripts/utils.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_3__.initializeButtons)();\n});\n\nconst body = document.body;\n\nconst content = document.createElement('div');\ncontent.className = 'content';\n\nbody.appendChild((0,_headerComponent_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/index.js?");

/***/ }),

/***/ "./src/Scripts/logic.js":
/*!******************************!*\
  !*** ./src/Scripts/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeButtons: () => (/* binding */ initializeButtons),\n/* harmony export */   initializeDialog: () => (/* binding */ initializeDialog),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/Scripts/utils.js\");\n\n\nfunction openModal(contentType) {\n    // Assuming modal and navItem are accessible or passed as parameters\n\tconst dialog = document.querySelector('#dialog');\n\tif(contentType === 'addTask') {\n\t\tconsole.log('Add Task');\n\t\tconst dialog = document.createElement('dialog');\n\t\tdialog.id = 'dialog';\n\t\tdialog.innerHTML = `\n\t\t\t<form class='dialog-form'>\n\t\t\t\t<input type=\"text\"  class='input-element' id='input-data' value=\"Task name...\">\n                \n                <input type='Radio' class='Priority' value='Low'>\n                <div class=\"button-container\">\n                    <button class='button-element' value=\"cancel\">Cancel</button>\n                    <button class='button-element' value=\"default\">OK</button>\n                </div>\n\t\t\t</form>\n\t\t`;\n\t\tdocument.body.appendChild(dialog);\n\t\tdialog.showModal();\n\t} else if(contentType === 'add') {\n\t\tconsole.log('Add');\n\t\tconst dialog = document.createElement('dialog');\n\t\tdialog.id = 'dialog';\n\t\tdialog.innerHTML = `\n\t\t\t<form class='dialog-form'>\n\t\t\t\t<input type=\"text\"  class='input-element' id='input-data' value=\"Label name...\">\n\t\t\t\t<div class='button-container'>\n\t\t\t\t\t<button class='button-element' value=\"cancel\">Cancel</button>\n\t\t\t\t\t<button class='button-element' value=\"default\">OK</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t`;\n\t\tdocument.body.appendChild(dialog);\n\t\tdialog.showModal();\n\t} else {\n\t\tconsole.log('Default');\n\t}\n\tconsole.log('openModal');\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateNavItemContent)(); // Update the nav item content\n    modal.style.display = 'block'; // Show the modal\n}\n\n\n// Item class\nfunction Item(label, taskTitle, taskPriority, taskDue, taskCompletion) {\n\tthis.label = label,\n\tthis.taskTitle = taskTitle,\n\tthis. taskPriority = taskPriority,\n\tthis.taskDue = taskDue,\n\tthis.taskCompletion = taskCompletion\n}\n\n// Dialog initialization function\nfunction initializeDialog(contentType) {\n    const dialog = document.querySelector('dialog');\n    dialog.addEventListener('submit', event => {\n        event.preventDefault();\n        if(contentType === 'addTask') { \n            let taskData = document.getElementById('input-data').value.trim();\n            if (taskData === '') {\n                alert('Please enter a task name.');\n                return;\n            } else {\n                taskData = new Item(taskData);\n\n            }\n\n            console.log('Form submitted with task:', taskData);\n            document.getElementById('input-data').value = '';\n            dialog.close();\n        } else if (contentType === 'add') {\n            \n        }\n\n        let labelData = document.getElementById('input-data').value.trim();\n        if (labelData === '') {\n            alert('Please enter a label name.');\n            return;\n        }\n        console.log('Form submitted with label:', labelData);\n        document.getElementById('input-data').value = '';\n        dialog.close();\n    });\n}\n\n// Button initialization function, called on DOMContentLoaded\nfunction initializeButtons() {\n    const addTaskButton = document.getElementById('addTaskButton');\n    const addButton = document.getElementById('addButton');\n\n    if (addTaskButton) {\n        addTaskButton.addEventListener('click', () => openModal('addTask'));\n    } else {\n        console.error('Add Task Button not found');\n    }\n\n    if (addButton) {\n        addButton.addEventListener('click', () => openModal('add'));\n    } else {\n        console.error('+ Button not found');\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/logic.js?");

/***/ }),

/***/ "./src/Scripts/utils.js":
/*!******************************!*\
  !*** ./src/Scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateNavList: () => (/* binding */ populateNavList),\n/* harmony export */   updateNavItemContent: () => (/* binding */ updateNavItemContent)\n/* harmony export */ });\nfunction populateNavList(navList, navItems) {\n    navList.innerHTML = ''; \n    navItems.forEach(item => {\n        const li = document.createElement('li');\n        li.className = 'nav-item';\n        li.textContent = item.Label;\n        li.addEventListener('click', function(event) {\n            document.querySelectorAll('.nav-item').forEach(navItem => {\n                navItem.classList.remove('active');\n            });\n            event.target.classList.add('active');\n            updateNavItemContent(event.target);\n        });\n        navList.appendChild(li);\n    });\n}\n\nfunction updateNavItemContent(navItem, contentType) {\n    const content = document.querySelector('.content');\n    content.innerHTML = ''; // Clear existing content\n\n    // Determine content based on contentType\n    if (contentType === 'addTask') {\n        const input = document.createElement('input');\n        input.placeholder = 'Enter task name';\n        content.appendChild(input);\n        // Add more elements as needed for the Add Task dialog\n    } else if (contentType === 'add') {\n        const message = document.createElement('p');\n        message.textContent = 'Additional content for \"+\" button';\n        content.appendChild(message);\n        // Customize as needed for the \"+\" dialog\n    } else {\n        // Default content\n        const h2 = document.createElement('h2');\n        h2.textContent = navItem.textContent;\n        content.appendChild(h2);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Scripts/index.js");
/******/ 	
/******/ })()
;