/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

window.onload = init;
    
function init()
{
    var elemToBind = document.getElementById ( "cmb1" );
    elemToBind.onchange = function () { SetSel ( this ); }
    var button = document.getElementById("sumButton")
    button.onclick = handleButtonClick;
}
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 1; i--) {
        selectElement.remove(i);
    }
}

function SetSel(elem)
{
    var secondCombo = document.getElementById ( "cmb2" );
    removeOptions(secondCombo);
    switch (elem.value) {
        case "1":
            var first = document.createElement('option');
            first.text = '6 месяцев';
            first.value = '1';
            secondCombo.options.add(first);

            var second = document.createElement('option');
            second.text = '1 год';
            second.value = '2';
            secondCombo.options.add(second);

            var third = document.createElement('option');
            third.text = '1,5 года';
            third.value = '3';
            secondCombo.options.add(third);

            var fourth = document.createElement('option');
            fourth.text = '2 года';
            fourth.value = '4';
            secondCombo.options.add(fourth);
            break;
        case "2":
            var first = document.createElement('option');
            first.text = '3 месяца';
            first.value = '1';
            secondCombo.options.add(first);

            var second = document.createElement('option');
            second.text = '6 месяцев';
            second.value = '2';
            secondCombo.options.add(second);

            var third = document.createElement('option');
            third.text = '9 месяцев';
            third.value = '3';
            secondCombo.options.add(third);

            var fourth = document.createElement('option');
            fourth.text = '1 год';
            fourth.value = '4';
            secondCombo.options.add(fourth);

            var fifth = document.createElement('option');
            fifth.text = '1,5 года';
            fifth.value = '5';
            secondCombo.options.add(fifth);

            var sixth = document.createElement('option');
            sixth.text = '2 года';
            sixth.value = '6';
            secondCombo.options.add(sixth);
            break;
        default:
            break;
    }
}

function handleButtonClick() {
    var sumInput = document.getElementById("sumInput");
    var cmb1 = document.getElementById("cmb1");
    var cmb2 = document.getElementById("cmb2");
    var textInfo = document.getElementById("textInfo");
    if(cmb1.value == "" || cmb2.value == "" || sumInput.value == "")
    {
        alert("Введите данные!");
    }
    else
    {
        var percent = 0;
        var sum = sumInput.value;
        var vlkad = "";
        var months = 0;
        switch (cmb1.value) {
            case "1":
                vklad = "Пополняемый";
                switch (cmb2.value) {
                    case "1":
                        percent = 20;
                        months = 6;
                        break;
                    case "2":
                        percent = 22;
                        months = 12;
                        break;
                    case "3":
                        percent = 15;
                        months = 18;
                        break;
                    case "4":
                        percent = 10;
                        months = 24;
                        break;
                    default:
                        break;
                }
                break;
            case "2":
                vklad = "Срочный";
                switch (cmb2.value) {
                    case "1":
                        percent = 20;
                        months = 3;
                        break;
                    case "2":
                        percent = 22;
                        months = 6;
                        break;
                    case "3":
                        percent = 23;
                        months = 9;
                        break;
                    case "4":
                        percent = 24;
                        months = 12;
                        break;
                    case "5":
                        percent = 18;
                        months = 18;
                        break;
                    case "6":
                        percent = 15;
                        months = 24;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        var x = sum*(1+(percent/100)*months/12);
        textInfo.innerHTML = "Вклад '" + vklad + "' на срок " + months + " месяцев на сумму " + sum + ". В конце срока получите " + x.toFixed(2) + " рублей";
    }

}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map