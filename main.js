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
const showAbout = () => {
  const displayDiv = document.querySelector('#display');
  const displayPara = document.createElement('p');

  displayDiv.classList.remove('flex-wrap');

  displayPara.classList.add('para');
  displayPara.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country.';

  displayDiv.innerHTML = '';
  displayDiv.appendChild(displayPara);
};

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
const showContact = () => {
  const displayDiv = document.querySelector('#display');
  const displayPara = document.createElement('p');

  displayPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie tincidunt neque, sit amet egestas mi volutpat id. Quisque vel rutrum nisl, ut tempus neque.';
  displayPara.classList.add('about-para');
  displayDiv.innerHTML = '';

  displayDiv.appendChild(displayPara);
};

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
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const bandejaPaisa = new Foods('Bandeja Paisa', '5', '../src/img/bandeja-paisa.jpeg');
const ajiaco = new Foods('Ajiaco', '3', '../src/img/ajiaco.jpg');
const tamal = new Foods('Tamal', '2', '../src/img/tamal.jpg');
const arepa = new Foods('Arepa', '1.50', '../src/img/arepa.jpg');

const menuArray = [bandejaPaisa, ajiaco, tamal, arepa];

const showMenu = () => {
  const displayDiv = document.querySelector('#display');
  displayDiv.innerHTML = '';
  displayDiv.classList.add('flex-wrap');
  for (let i = 0; i < menuArray.length; i += 1) {
    const div = document.createElement('div');
    const text = document.createElement('div');
    const name = document.createElement('span');
    const price = document.createElement('span');

    text.classList.add('food-text');
    div.classList.add('food');
    name.textContent = menuArray[i].name;
    price.textContent = `$ ${menuArray[i].price}`;

    text.appendChild(name);
    text.appendChild(price);
    div.appendChild(text);
    div.style.backgroundImage = `url(${menuArray[i].image})`;


    displayDiv.appendChild(div);
  }
};

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
const pageLoad = () => {
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

  btnsDiv.classList.add('btns-div');

  container.classList.add('content');

  btnsDiv.appendChild(aboutBtn);
  btnsDiv.appendChild(menuBtn);
  btnsDiv.appendChild(contactBtn);
  container.appendChild(btnsDiv);
  container.appendChild(displayDiv);
};

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

const aboutBtn = document.querySelector('#about');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

aboutBtn.onclick = _about__WEBPACK_IMPORTED_MODULE_1__.default;
menuBtn.onclick = _menu__WEBPACK_IMPORTED_MODULE_2__.default;
contactBtn.onclick = _contact__WEBPACK_IMPORTED_MODULE_3__.default;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7OztBQ2J4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1CQUFtQjs7O0FBRzFEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7OztVQ3hDdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDSDtBQUNGO0FBQ007O0FBRXBDLG1EQUFRO0FBQ1IsK0NBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwyQ0FBUztBQUM1QixrQkFBa0IsMENBQVE7QUFDMUIscUJBQXFCLDZDQUFXLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNob3dBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Jyk7XG4gIGNvbnN0IGRpc3BsYXlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGRpc3BsYXlEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC13cmFwJyk7XG5cbiAgZGlzcGxheVBhcmEuY2xhc3NMaXN0LmFkZCgncGFyYScpO1xuICBkaXNwbGF5UGFyYS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIENyaW9sbG8gRmxhdm9yLCB3ZSBhcmUgc3BlY2lhbGlzdHMgaW4gY29sb21iaWFuIGZvb2QsIHNvIHRha2UgYSBsb29rIHRvIG91ciBtZW51IGEgbGV0IHRoZSBmbGF2b3IgdGFrZSB5b3UgdG8gYW5vdGhlciBjb3VudHJ5Lic7XG5cbiAgZGlzcGxheURpdi5pbm5lckhUTUwgPSAnJztcbiAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChkaXNwbGF5UGFyYSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93QWJvdXQ7IiwiY29uc3Qgc2hvd0NvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xuICBjb25zdCBkaXNwbGF5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBkaXNwbGF5UGFyYS50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gbW9sZXN0aWUgdGluY2lkdW50IG5lcXVlLCBzaXQgYW1ldCBlZ2VzdGFzIG1pIHZvbHV0cGF0IGlkLiBRdWlzcXVlIHZlbCBydXRydW0gbmlzbCwgdXQgdGVtcHVzIG5lcXVlLic7XG4gIGRpc3BsYXlQYXJhLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhcmEnKTtcbiAgZGlzcGxheURpdi5pbm5lckhUTUwgPSAnJztcblxuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlQYXJhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dDb250YWN0OyIsImNsYXNzIEZvb2RzIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGltYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG59XG5cbmNvbnN0IGJhbmRlamFQYWlzYSA9IG5ldyBGb29kcygnQmFuZGVqYSBQYWlzYScsICc1JywgJy4uL3NyYy9pbWcvYmFuZGVqYS1wYWlzYS5qcGVnJyk7XG5jb25zdCBhamlhY28gPSBuZXcgRm9vZHMoJ0FqaWFjbycsICczJywgJy4uL3NyYy9pbWcvYWppYWNvLmpwZycpO1xuY29uc3QgdGFtYWwgPSBuZXcgRm9vZHMoJ1RhbWFsJywgJzInLCAnLi4vc3JjL2ltZy90YW1hbC5qcGcnKTtcbmNvbnN0IGFyZXBhID0gbmV3IEZvb2RzKCdBcmVwYScsICcxLjUwJywgJy4uL3NyYy9pbWcvYXJlcGEuanBnJyk7XG5cbmNvbnN0IG1lbnVBcnJheSA9IFtiYW5kZWphUGFpc2EsIGFqaWFjbywgdGFtYWwsIGFyZXBhXTtcblxuY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xuICBkaXNwbGF5RGl2LmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtd3JhcCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdmb29kLXRleHQnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBtZW51QXJyYXlbaV0ubmFtZTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGAkICR7bWVudUFycmF5W2ldLnByaWNlfWA7XG5cbiAgICB0ZXh0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21lbnVBcnJheVtpXS5pbWFnZX0pYDtcblxuXG4gICAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVudTsiLCJjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgYnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9pbWcvcmVzdGF1cmFudC1ob21lcGFnZS5qcGcpJztcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbiAgYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRucycpO1xuXG4gIGFib3V0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcblxuICBkaXNwbGF5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheScpO1xuXG4gIGFib3V0QnRuLmF1dG9mb2N1cyA9IHRydWU7XG5cbiAgZGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG5cbiAgYnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdidG5zLWRpdicpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgYnRuc0Rpdi5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG4gIGJ0bnNEaXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIGJ0bnNEaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5zRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlEaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlLWxvYWQnO1xuaW1wb3J0IHNob3dBYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBzaG93TWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHNob3dDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbnBhZ2VMb2FkKCk7XG5zaG93QWJvdXQoKTtcblxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5cbmFib3V0QnRuLm9uY2xpY2sgPSBzaG93QWJvdXQ7XG5tZW51QnRuLm9uY2xpY2sgPSBzaG93TWVudTtcbmNvbnRhY3RCdG4ub25jbGljayA9IHNob3dDb250YWN0OyJdLCJzb3VyY2VSb290IjoiIn0=