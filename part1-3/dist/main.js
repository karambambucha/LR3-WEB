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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\n\n\n\n\n//# sourceURL=webpack://part1-3/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SetSel\": () => (/* binding */ SetSel),\n/* harmony export */   \"handleButtonClick\": () => (/* binding */ handleButtonClick),\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"removeOptions\": () => (/* binding */ removeOptions)\n/* harmony export */ });\nwindow.onload = init;\nfunction init() {\n  var elemToBind = document.getElementById(\"cmb1\");\n  elemToBind.onchange = function () {\n    SetSel(this);\n  };\n  var button = document.getElementById(\"sumButton\");\n  button.onclick = handleButtonClick;\n}\nfunction removeOptions(selectElement) {\n  var i,\n    L = selectElement.options.length - 1;\n  for (i = L; i >= 1; i--) {\n    selectElement.remove(i);\n  }\n}\nfunction SetSel(elem) {\n  var secondCombo = document.getElementById(\"cmb2\");\n  removeOptions(secondCombo);\n  switch (elem.value) {\n    case \"1\":\n      var first = document.createElement('option');\n      first.text = '6 месяцев';\n      first.value = '1';\n      secondCombo.options.add(first);\n      var second = document.createElement('option');\n      second.text = '1 год';\n      second.value = '2';\n      secondCombo.options.add(second);\n      var third = document.createElement('option');\n      third.text = '1,5 года';\n      third.value = '3';\n      secondCombo.options.add(third);\n      var fourth = document.createElement('option');\n      fourth.text = '2 года';\n      fourth.value = '4';\n      secondCombo.options.add(fourth);\n      break;\n    case \"2\":\n      var first = document.createElement('option');\n      first.text = '3 месяца';\n      first.value = '1';\n      secondCombo.options.add(first);\n      var second = document.createElement('option');\n      second.text = '6 месяцев';\n      second.value = '2';\n      secondCombo.options.add(second);\n      var third = document.createElement('option');\n      third.text = '9 месяцев';\n      third.value = '3';\n      secondCombo.options.add(third);\n      var fourth = document.createElement('option');\n      fourth.text = '1 год';\n      fourth.value = '4';\n      secondCombo.options.add(fourth);\n      var fifth = document.createElement('option');\n      fifth.text = '1,5 года';\n      fifth.value = '5';\n      secondCombo.options.add(fifth);\n      var sixth = document.createElement('option');\n      sixth.text = '2 года';\n      sixth.value = '6';\n      secondCombo.options.add(sixth);\n      break;\n    default:\n      break;\n  }\n}\nfunction handleButtonClick() {\n  var sumInput = document.getElementById(\"sumInput\");\n  var cmb1 = document.getElementById(\"cmb1\");\n  var cmb2 = document.getElementById(\"cmb2\");\n  var textInfo = document.getElementById(\"textInfo\");\n  if (cmb1.value == \"\" || cmb2.value == \"\" || sumInput.value == \"\") {\n    alert(\"Введите данные!\");\n  } else {\n    var percent = 0;\n    var sum = sumInput.value;\n    var months = 0;\n    var vklad = \"Вклад\";\n    switch (cmb1.value) {\n      case \"1\":\n        vklad = \"Пополняемый\";\n        switch (cmb2.value) {\n          case \"1\":\n            percent = 20;\n            months = 6;\n            break;\n          case \"2\":\n            percent = 22;\n            months = 12;\n            break;\n          case \"3\":\n            percent = 15;\n            months = 18;\n            break;\n          case \"4\":\n            percent = 10;\n            months = 24;\n            break;\n          default:\n            break;\n        }\n        break;\n      case \"2\":\n        vklad = \"Срочный\";\n        switch (cmb2.value) {\n          case \"1\":\n            percent = 20;\n            months = 3;\n            break;\n          case \"2\":\n            percent = 22;\n            months = 6;\n            break;\n          case \"3\":\n            percent = 23;\n            months = 9;\n            break;\n          case \"4\":\n            percent = 24;\n            months = 12;\n            break;\n          case \"5\":\n            percent = 18;\n            months = 18;\n            break;\n          case \"6\":\n            percent = 15;\n            months = 24;\n            break;\n          default:\n            break;\n        }\n        break;\n      default:\n        break;\n    }\n    var x = sum * (1 + percent / 100 * months / 12);\n    textInfo.innerHTML = \"Вклад '\" + vklad + \"' на срок \" + months + \" месяцев на сумму \" + sum + \". В конце срока получите \" + x.toFixed(2) + \" рублей\";\n  }\n}\n\n//# sourceURL=webpack://part1-3/./src/script.js?");

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