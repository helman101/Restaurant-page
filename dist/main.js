/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let showAbout = () => {
  let displayDiv = document.querySelector('#display');
  let displayPara = document.createElement('p');

  displayDiv.classList.remove('flex-wrap');

  displayPara.classList.add('para');
  displayPara.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country.';
  
  displayDiv.innerHTML = '';
  displayDiv.appendChild(displayPara)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let showContact = () => {
  let displayDiv = document.querySelector('#display');
  let displayPara = document.createElement('p');

  displayPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie tincidunt neque, sit amet egestas mi volutpat id. Quisque vel rutrum nisl, ut tempus neque.';
  displayPara.classList.add('about-para');
  displayDiv.innerHTML = '';
  
  displayDiv.appendChild(displayPara);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Foods {
  constructor(name, price, image)  {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const bandejaPaisa = new Foods('Bandeja Paisa', '5', '../src/img/bandeja-paisa.jpeg');
const ajiaco = new Foods('Ajiaco', '3', '../src/img/ajiaco.jpg');
const tamal= new Foods('Tamal', '2', '../src/img/tamal.jpg');
const arepa = new Foods('Arepa', '1.50', '../src/img/arepa.jpg');

const menuArray = [bandejaPaisa, ajiaco, tamal, arepa]

let showMenu = () => {
  let displayDiv = document.querySelector('#display');
  displayDiv.innerHTML = '';
  displayDiv.classList.add('flex-wrap')
  for(let i = 0; i < menuArray.length; i+=1){
    const div = document.createElement('div');
    const text = document.createElement('div');
    const name = document.createElement('span');
    const price = document.createElement('span');

    text.classList.add('food-text')
    div.classList.add('food');
    name.textContent = menuArray[i].name;
    price.textContent = `$ ${menuArray[i].price}`;

    text.appendChild(name);
    text.appendChild(price);
    div.appendChild(text);
    div.style.backgroundImage = `url(${menuArray[i].image})`;
    

    displayDiv.appendChild(div);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let pageLoad = () => {
  const container = document.querySelector('#content');
  const btnsDiv = document.createElement('div');
  const displayDiv = document.createElement('div');
  const aboutBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  document.body.style = 'background-image: url(../src/img/restaurant-homepage.jpg)';
  document.body.classList.add('body');

  aboutBtn.textContent = 'About';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  aboutBtn.classList.add('btns');
  menuBtn.classList.add('btns');
  contactBtn.classList.add('btns');

  aboutBtn.setAttribute('id', 'about');
  menuBtn.setAttribute('id', 'menu');
  contactBtn.setAttribute('id', 'contact');

  displayDiv.setAttribute('id', 'display');

  aboutBtn.autofocus = true;

  displayDiv.classList.add('display');

  btnsDiv.classList.add('btns-div')

  container.classList.add('content');

  btnsDiv.appendChild(aboutBtn);
  btnsDiv.appendChild(menuBtn);
  btnsDiv.appendChild(contactBtn);
  container.appendChild(btnsDiv);
  container.appendChild(displayDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad); 

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_about__WEBPACK_IMPORTED_MODULE_1__.default)();

let aboutBtn = document.querySelector('#about');
let menuBtn = document.querySelector('#menu');
let contactBtn = document.querySelector('#contact');

aboutBtn.onclick = _about__WEBPACK_IMPORTED_MODULE_1__.default;
menuBtn.onclick = _menu__WEBPACK_IMPORTED_MODULE_2__.default;
contactBtn.onclick = _contact__WEBPACK_IMPORTED_MODULE_3__.default;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUzs7Ozs7Ozs7Ozs7Ozs7QUNiZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVzs7Ozs7Ozs7Ozs7Ozs7QUNYZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1CQUFtQjs7O0FBRzFEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxROzs7Ozs7Ozs7Ozs7OztBQ3hDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEc7Ozs7OztVQ3hDdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDSDtBQUNGO0FBQ007O0FBRXBDLG1EQUFRO0FBQ1IsK0NBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwyQ0FBUztBQUM1QixrQkFBa0IsMENBQVE7QUFDMUIscUJBQXFCLDZDQUFXLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzaG93QWJvdXQgPSAoKSA9PiB7XG4gIGxldCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcbiAgbGV0IGRpc3BsYXlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGRpc3BsYXlEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC13cmFwJyk7XG5cbiAgZGlzcGxheVBhcmEuY2xhc3NMaXN0LmFkZCgncGFyYScpO1xuICBkaXNwbGF5UGFyYS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIENyaW9sbG8gRmxhdm9yLCB3ZSBhcmUgc3BlY2lhbGlzdHMgaW4gY29sb21iaWFuIGZvb2QsIHNvIHRha2UgYSBsb29rIHRvIG91ciBtZW51IGEgbGV0IHRoZSBmbGF2b3IgdGFrZSB5b3UgdG8gYW5vdGhlciBjb3VudHJ5Lic7XG4gIFxuICBkaXNwbGF5RGl2LmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlQYXJhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93QWJvdXQiLCJsZXQgc2hvd0NvbnRhY3QgPSAoKSA9PiB7XG4gIGxldCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcbiAgbGV0IGRpc3BsYXlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGRpc3BsYXlQYXJhLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBtb2xlc3RpZSB0aW5jaWR1bnQgbmVxdWUsIHNpdCBhbWV0IGVnZXN0YXMgbWkgdm9sdXRwYXQgaWQuIFF1aXNxdWUgdmVsIHJ1dHJ1bSBuaXNsLCB1dCB0ZW1wdXMgbmVxdWUuJztcbiAgZGlzcGxheVBhcmEuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYScpO1xuICBkaXNwbGF5RGl2LmlubmVySFRNTCA9ICcnO1xuICBcbiAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChkaXNwbGF5UGFyYSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dDb250YWN0IiwiY2xhc3MgRm9vZHMge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgaW1hZ2UpICB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG59XG5cbmNvbnN0IGJhbmRlamFQYWlzYSA9IG5ldyBGb29kcygnQmFuZGVqYSBQYWlzYScsICc1JywgJy4uL3NyYy9pbWcvYmFuZGVqYS1wYWlzYS5qcGVnJyk7XG5jb25zdCBhamlhY28gPSBuZXcgRm9vZHMoJ0FqaWFjbycsICczJywgJy4uL3NyYy9pbWcvYWppYWNvLmpwZycpO1xuY29uc3QgdGFtYWw9IG5ldyBGb29kcygnVGFtYWwnLCAnMicsICcuLi9zcmMvaW1nL3RhbWFsLmpwZycpO1xuY29uc3QgYXJlcGEgPSBuZXcgRm9vZHMoJ0FyZXBhJywgJzEuNTAnLCAnLi4vc3JjL2ltZy9hcmVwYS5qcGcnKTtcblxuY29uc3QgbWVudUFycmF5ID0gW2JhbmRlamFQYWlzYSwgYWppYWNvLCB0YW1hbCwgYXJlcGFdXG5cbmxldCBzaG93TWVudSA9ICgpID0+IHtcbiAgbGV0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xuICBkaXNwbGF5RGl2LmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtd3JhcCcpXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtZW51QXJyYXkubGVuZ3RoOyBpKz0xKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnZm9vZC10ZXh0JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBtZW51QXJyYXlbaV0ubmFtZTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGAkICR7bWVudUFycmF5W2ldLnByaWNlfWA7XG5cbiAgICB0ZXh0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21lbnVBcnJheVtpXS5pbWFnZX0pYDtcbiAgICBcblxuICAgIGRpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVudSIsImxldCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgYnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9pbWcvcmVzdGF1cmFudC1ob21lcGFnZS5qcGcpJztcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbiAgYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRucycpO1xuXG4gIGFib3V0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcblxuICBkaXNwbGF5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheScpO1xuXG4gIGFib3V0QnRuLmF1dG9mb2N1cyA9IHRydWU7XG5cbiAgZGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG5cbiAgYnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdidG5zLWRpdicpXG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBidG5zRGl2LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcbiAgYnRuc0Rpdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgYnRuc0Rpdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bnNEaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheURpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZS1sb2FkJztcbmltcG9ydCBzaG93QWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgc2hvd01lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBzaG93Q29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5wYWdlTG9hZCgpO1xuc2hvd0Fib3V0KCk7XG5cbmxldCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xubGV0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuXG5hYm91dEJ0bi5vbmNsaWNrID0gc2hvd0Fib3V0O1xubWVudUJ0bi5vbmNsaWNrID0gc2hvd01lbnU7XG5jb250YWN0QnRuLm9uY2xpY2sgPSBzaG93Q29udGFjdDsiXSwic291cmNlUm9vdCI6IiJ9