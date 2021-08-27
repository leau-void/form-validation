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

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zipcodeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcodeData */ \"./zipcodeData.js\");\n\n\nconst form = {\n  self: document.querySelector(\"#survey-form\"),\n  fieldsName: [\"name\", \"email\", \"country\", \"zip\", \"password\", \"password2\"],\n  checkAllValidity() {\n    return this.fieldsName.every((field) => {\n      return this.self[field].checkValidity();\n    });\n  },\n  updateZipRegex() {},\n  handleChange() {},\n  boundHandleChange() {},\n  handleSubmit(event) {\n    if (!event.target.closest('[type=\"submit\"]')) return;\n    event.preventDefault();\n    if (this.checkAllValidity()) return this.displayDone();\n    return console.log(\"false\");\n  },\n  boundHandleSubmit() {},\n  displayDone() {\n    document.querySelector(\"#done\").classList.add(\"thanks\");\n  },\n  init() {\n    this.boundHandleChange = this.handleChange.bind(this);\n    this.boundHandleSubmit = this.handleSubmit.bind(this);\n    this.self.addEventListener(\"change\", this.boundHandleChange);\n    this.self.addEventListener(\"click\", this.boundHandleSubmit);\n  },\n};\n\nform.init();\n\n\n//# sourceURL=webpack://form-validation/./script.js?");

/***/ }),

/***/ "./zipcodeData.js":
/*!************************!*\
  !*** ./zipcodeData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst zipcodeData = {\n  GB: \"GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(d[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?d{1,4}\",\n  JE: \"JEd[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}\",\n  GG: \"GYd[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}\",\n  IM: \"IMd[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}\",\n  US: \"d{5}([ -]d{4})?\",\n  CA: \"[ABCEGHJKLMNPRSTVXY]d[ABCEGHJ-NPRSTV-Z][ ]?d[ABCEGHJ-NPRSTV-Z]d\",\n  DE: \"d{5}\",\n  JP: \"d{3}-d{4}\",\n  FR: \"d{2}[ ]?d{3}\",\n  AU: \"d{4}\",\n  IT: \"d{5}\",\n  CH: \"d{4}\",\n  AT: \"d{4}\",\n  ES: \"d{5}\",\n  NL: \"d{4}[ ]?[A-Z]{2}\",\n  BE: \"d{4}\",\n  DK: \"d{4}\",\n  SE: \"d{3}[ ]?d{2}\",\n  NO: \"d{4}\",\n  BR: \"d{5}[-]?d{3}\",\n  PT: \"d{4}([-]d{3})?\",\n  FI: \"d{5}\",\n  AX: \"22d{3}\",\n  KR: \"d{3}[-]d{3}\",\n  CN: \"d{6}\",\n  TW: \"d{3}(d{2})?\",\n  SG: \"d{6}\",\n  DZ: \"d{5}\",\n  AD: \"ADd{3}\",\n  AR: \"([A-HJ-NP-Z])?d{4}([A-Z]{3})?\",\n  AM: \"(37)?d{4}\",\n  AZ: \"d{4}\",\n  BH: \"((1[0-2]|[2-9])d{2})?\",\n  BD: \"d{4}\",\n  BB: \"(BBd{5})?\",\n  BY: \"d{6}\",\n  BM: \"[A-Z]{2}[ ]?[A-Z0-9]{2}\",\n  BA: \"d{5}\",\n  IO: \"BBND 1ZZ\",\n  BN: \"[A-Z]{2}[ ]?d{4}\",\n  BG: \"d{4}\",\n  KH: \"d{5}\",\n  CV: \"d{4}\",\n  CL: \"d{7}\",\n  CR: \"d{4,5}|d{3}-d{4}\",\n  HR: \"d{5}\",\n  CY: \"d{4}\",\n  CZ: \"d{3}[ ]?d{2}\",\n  DO: \"d{5}\",\n  EC: \"([A-Z]d{4}[A-Z]|(?:[A-Z]{2})?d{6})?\",\n  EG: \"d{5}\",\n  EE: \"d{5}\",\n  FO: \"d{3}\",\n  GE: \"d{4}\",\n  GR: \"d{3}[ ]?d{2}\",\n  GL: \"39d{2}\",\n  GT: \"d{5}\",\n  HT: \"d{4}\",\n  HN: \"(?:d{5})?\",\n  HU: \"d{4}\",\n  IS: \"d{3}\",\n  IN: \"d{6}\",\n  ID: \"d{5}\",\n  IL: \"d{5}\",\n  JO: \"d{5}\",\n  KZ: \"d{6}\",\n  KE: \"d{5}\",\n  KW: \"d{5}\",\n  LA: \"d{5}\",\n  LV: \"d{4}\",\n  LB: \"(d{4}([ ]?d{4})?)?\",\n  LI: \"(948[5-9])|(949[0-7])\",\n  LT: \"d{5}\",\n  LU: \"d{4}\",\n  MK: \"d{4}\",\n  MY: \"d{5}\",\n  MV: \"d{5}\",\n  MT: \"[A-Z]{3}[ ]?d{2,4}\",\n  MU: \"(d{3}[A-Z]{2}d{3})?\",\n  MX: \"d{5}\",\n  MD: \"d{4}\",\n  MC: \"980d{2}\",\n  MA: \"d{5}\",\n  NP: \"d{5}\",\n  NZ: \"d{4}\",\n  NI: \"((d{4}-)?d{3}-d{3}(-d{1})?)?\",\n  NG: \"(d{6})?\",\n  OM: \"(PC )?d{3}\",\n  PK: \"d{5}\",\n  PY: \"d{4}\",\n  PH: \"d{4}\",\n  PL: \"d{2}-d{3}\",\n  PR: \"00[679]d{2}([ -]d{4})?\",\n  RO: \"d{6}\",\n  RU: \"d{6}\",\n  SM: \"4789d\",\n  SA: \"d{5}\",\n  SN: \"d{5}\",\n  SK: \"d{3}[ ]?d{2}\",\n  SI: \"d{4}\",\n  ZA: \"d{4}\",\n  LK: \"d{5}\",\n  TJ: \"d{6}\",\n  TH: \"d{5}\",\n  TN: \"d{4}\",\n  TR: \"d{5}\",\n  TM: \"d{6}\",\n  UA: \"d{5}\",\n  UY: \"d{5}\",\n  UZ: \"d{6}\",\n  VA: \"00120\",\n  VE: \"d{4}\",\n  ZM: \"d{5}\",\n  AS: \"96799\",\n  CC: \"6799\",\n  CK: \"d{4}\",\n  RS: \"d{6}\",\n  ME: \"8d{4}\",\n  CS: \"d{5}\",\n  YU: \"d{5}\",\n  CX: \"6798\",\n  ET: \"d{4}\",\n  FK: \"FIQQ 1ZZ\",\n  NF: \"2899\",\n  FM: \"(9694[1-4])([ -]d{4})?\",\n  GF: \"9[78]3d{2}\",\n  GN: \"d{3}\",\n  GP: \"9[78][01]d{2}\",\n  GS: \"SIQQ 1ZZ\",\n  GU: \"969[123]d([ -]d{4})?\",\n  GW: \"d{4}\",\n  HM: \"d{4}\",\n  IQ: \"d{5}\",\n  KG: \"d{6}\",\n  LR: \"d{4}\",\n  LS: \"d{3}\",\n  MG: \"d{3}\",\n  MH: \"969[67]d([ -]d{4})?\",\n  MN: \"d{6}\",\n  MP: \"9695[012]([ -]d{4})?\",\n  MQ: \"9[78]2d{2}\",\n  NC: \"988d{2}\",\n  NE: \"d{4}\",\n  VI: \"008(([0-4]d)|(5[01]))([ -]d{4})?\",\n  PF: \"987d{2}\",\n  PG: \"d{3}\",\n  PM: \"9[78]5d{2}\",\n  PN: \"PCRN 1ZZ\",\n  PW: \"96940\",\n  RE: \"9[78]4d{2}\",\n  SH: \"(ASCN|STHL) 1ZZ\",\n  SJ: \"d{4}\",\n  SO: \"d{5}\",\n  SZ: \"[HLMS]d{3}\",\n  TC: \"TKCA 1ZZ\",\n  WF: \"986d{2}\",\n  XK: \"d{5}\",\n  YT: \"976d{2}\",\n  \"\": \"(?i)^[a-z0-9][a-z0-9- ]{0,10}[a-z0-9]$\",\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zipcodeData);\n\n\n//# sourceURL=webpack://form-validation/./zipcodeData.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;