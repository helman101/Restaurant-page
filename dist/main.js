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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet showAbout = () => {\n  let displayDiv = document.querySelector('#display');\n  let displayPara = document.createElement('p');\n\n  displayDiv.classList.remove('flex-wrap');\n\n  displayPara.classList.add('para')\n  displayPara.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country.';\n  \n  displayDiv.innerHTML = '';\n  displayDiv.appendChild(displayPara)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet showContact = () => {\n  let displayDiv = document.querySelector('#display');\n  let displayPara = document.createElement('p');\n\n  displayPara.textContent = 'Contact';\n  displayDiv.innerHTML = '';\n  displayDiv.appendChild(displayPara);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_about__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nlet aboutBtn = document.querySelector('#about');\nlet menuBtn = document.querySelector('#menu');\nlet contactBtn = document.querySelector('#contact');\n\naboutBtn.onclick = _about__WEBPACK_IMPORTED_MODULE_1__.default;\nmenuBtn.onclick = _menu__WEBPACK_IMPORTED_MODULE_2__.default;\ncontactBtn.onclick = _contact__WEBPACK_IMPORTED_MODULE_3__.default;\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Foods {\n  constructor(name, price, image)  {\n    this.name = name;\n    this.price = price;\n    this.image = image;\n  }\n}\n\nconst bandejaPaisa = new Foods('Bandeja Paisa', '5', '../src/img/bandeja-paisa.jpeg');\nconst ajiaco = new Foods('Ajiaco', '3', '../src/img/ajiaco.jpg');\nconst tamal= new Foods('Tamal', '2', '../src/img/tamal.jpg');\nconst arepa = new Foods('Arepa', '1.50', '../src/img/arepa.jpg');\n\nconst menuArray = [bandejaPaisa, ajiaco, tamal, arepa]\n\nlet showMenu = () => {\n  let displayDiv = document.querySelector('#display');\n  displayDiv.innerHTML = '';\n  displayDiv.classList.add('flex-wrap')\n  for(let i = 0; i < menuArray.length; i+=1){\n    const div = document.createElement('div');\n    const text = document.createElement('div');\n    const name = document.createElement('span');\n    const price = document.createElement('span');\n\n    text.classList.add('food-text')\n    div.classList.add('food');\n    name.textContent = menuArray[i].name;\n    price.textContent = `$ ${menuArray[i].price}`;\n\n    text.appendChild(name);\n    text.appendChild(price);\n    div.appendChild(text);\n    div.style.backgroundImage = `url(${menuArray[i].image})`;\n    \n\n    displayDiv.appendChild(div);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet pageLoad = () => {\n  const container = document.querySelector('#content');\n  const btnsDiv = document.createElement('div');\n  const displayDiv = document.createElement('div');\n  const aboutBtn = document.createElement('button');\n  const menuBtn = document.createElement('button');\n  const contactBtn = document.createElement('button');\n\n  document.body.style = 'background-image: url(../src/img/restaurant-homepage.jpg)';\n  document.body.classList.add('body');\n\n  aboutBtn.textContent = 'About';\n  menuBtn.textContent = 'Menu';\n  contactBtn.textContent = 'Contact';\n\n  aboutBtn.classList.add('btns');\n  menuBtn.classList.add('btns');\n  contactBtn.classList.add('btns');\n\n  aboutBtn.setAttribute('id', 'about');\n  menuBtn.setAttribute('id', 'menu');\n  contactBtn.setAttribute('id', 'contact');\n\n  displayDiv.setAttribute('id', 'display');\n\n  aboutBtn.autofocus = true;\n\n  displayDiv.classList.add('display');\n\n  btnsDiv.classList.add('btns-div')\n\n  container.classList.add('content');\n\n  btnsDiv.appendChild(aboutBtn);\n  btnsDiv.appendChild(menuBtn);\n  btnsDiv.appendChild(contactBtn);\n  container.appendChild(btnsDiv);\n  container.appendChild(displayDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad); \n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;