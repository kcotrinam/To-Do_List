(()=>{"use strict";var __webpack_modules__={"./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackTemplate/./src/scss/styles.scss?")},"./src/components/Porject.js":
/*!***********************************!*\
  !*** ./src/components/Porject.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n  }\n\n  get showName() {\n    console.log(this.name)\n  }\n}\n\n//# sourceURL=webpack://webpackTemplate/./src/components/Porject.js?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _components_Porject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Porject */ \"./src/components/Porject.js\");\n\n\n\nconst newProjectBtn = document.querySelector('#project-form__btn');\nconst projectName = document.querySelector('#project-form__name');\n\nnewProjectBtn.addEventListener('click', e => {\n  e.preventDefault();\n  const newProject = new _components_Porject__WEBPACK_IMPORTED_MODULE_1__.default(projectName.value);\n  newProject.showName\n})\n\n//# sourceURL=webpack://webpackTemplate/./src/index.js?")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();