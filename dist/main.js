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

/***/ "./src/Scripts/header.js":
/*!*******************************!*\
  !*** ./src/Scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _Styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Styles/style.scss */ \"./src/Styles/style.scss\");\n/* harmony import */ var _navData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navData.js */ \"./src/Scripts/navData.js\");\n/* harmony import */ var _navUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navUtils.js */ \"./src/Scripts/navUtils.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.id = 'header-container';\n    header.innerHTML = `\n        <div class='header-wrapper'>\n            <h1 class='header-title'>Daybreak</h1>\n            <button class='header-button'>Add task</button>\n        </div>\n        <nav class='nav-container'>\n            <ul class='nav-list'></ul>\n            <button class='nav-button'><span class='material-symbols-outlined span-icon'>add</span></button>\n        </nav>\n    `;\n\n    const navList = header.querySelector('.nav-list');\n    (0,_navUtils_js__WEBPACK_IMPORTED_MODULE_2__.populateNavList)(navList, _navData_js__WEBPACK_IMPORTED_MODULE_1__.navItems);\n\n    return header;\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/header.js?");

/***/ }),

/***/ "./src/Scripts/index.js":
/*!******************************!*\
  !*** ./src/Scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Styles/style.scss */ \"./src/Styles/style.scss\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/Scripts/header.js\");\n\n\n\nconst body = document.body;\n\nbody.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/index.js?");

/***/ }),

/***/ "./src/Scripts/navData.js":
/*!********************************!*\
  !*** ./src/Scripts/navData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItems: () => (/* binding */ navItems),\n/* harmony export */   navList: () => (/* binding */ navList)\n/* harmony export */ });\nconst navItems = ['All', 'Completed', 'Temporary', 'Permanent'];\nconst navList = document.querySelector('.nav-list');\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/navData.js?");

/***/ }),

/***/ "./src/Scripts/navUtils.js":
/*!*********************************!*\
  !*** ./src/Scripts/navUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateNavList: () => (/* binding */ populateNavList)\n/* harmony export */ });\nfunction populateNavList(navList, navItems) {\n    navList.innerHTML = ''; \n    navItems.forEach(item => {\n        const li = document.createElement('li');\n        li.className = 'nav-item';\n        li.textContent = item;\n        li.addEventListener('click', function(event) {\n            document.querySelectorAll('.nav-item').forEach(navItem => {\n                navItem.classList.remove('active');\n            });\n            event.target.classList.add('active');\n        });\n        navList.appendChild(li);\n    });\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/Scripts/navUtils.js?");

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