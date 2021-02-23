(()=>{"use strict";var __webpack_modules__={"./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackTemplate/./src/scss/styles.scss?")},"./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/components/common.js");\n\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n  }\n\n  get getDeleteBtns() {\n    return document.querySelectorAll(\'.delete-pj-btn\');\n  }\n\n  deleteProject() {\n    const btns = this.getDeleteBtns;\n    btns.forEach(btn => {\n      btn.addEventListener(\'click\', (e) => {\n        const projectIndex = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getProjectIndex)(e.target.dataset.id);\n        _storage__WEBPACK_IMPORTED_MODULE_0__.store.splice(projectIndex, 1)\n        ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)()\n        ;(0,_common__WEBPACK_IMPORTED_MODULE_1__.deleteElementFromDOM)(e.target.dataset.id)\n      })\n    });\n  }\n\n  saveProject() {\n    (0,_common__WEBPACK_IMPORTED_MODULE_1__.storeProject)(this.name)\n    ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)()\n  }\n}\n\n\n//# sourceURL=webpack://webpackTemplate/./src/components/Project.js?')},"./src/components/Todos.js":
/*!*********************************!*\
  !*** ./src/components/Todos.js ***!
  \*********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/components/storage.js\");\n\n\n\nclass Todos {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.todoForm = document.querySelector('.todo-form-container');\n  }\n\n  get getDeleteBtns() {\n    return document.querySelectorAll('.add-todo-btn');\n  }\n\n  showForm() {\n    const addBtns = this.getDeleteBtns;\n\n    addBtns.forEach(btn => {\n      btn.addEventListener('click', e => {\n        (0,_common__WEBPACK_IMPORTED_MODULE_0__.displayTodoForm)(this.todoForm)\n        _storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.id = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getProjectIndex)(e.target.dataset.id);\n      })\n    })\n  }\n\n  saveTodo() {\n    (0,_common__WEBPACK_IMPORTED_MODULE_0__.storeTodos)(this.title, this.description, this.dueDate, this.priority);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\n  }\n}\n\n//# sourceURL=webpack://webpackTemplate/./src/components/Todos.js?")},"./src/components/Ui.js":
/*!******************************!*\
  !*** ./src/components/Ui.js ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Ui)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/components/common.js");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");\n/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos */ "./src/components/Todos.js");\n\n\n\n\n\nconst pj = new _Project__WEBPACK_IMPORTED_MODULE_2__.default()\nconst newTodo = new _Todos__WEBPACK_IMPORTED_MODULE_3__.default();\n\nclass Ui {\n  constructor() {\n    this.projectContainer = document.querySelector(\'.project-list\');\n  }\n\n\n\n  renderProject() {\n    this.projectContainer.textContent = \'\';\n    (0,_common__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(this.projectContainer);\n    pj.deleteProject();\n    newTodo.showForm();\n  }\n}\n\n//# sourceURL=webpack://webpackTemplate/./src/components/Ui.js?')},"./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "storeProject": () => (/* binding */ storeProject),\n/* harmony export */   "storeTodos": () => (/* binding */ storeTodos),\n/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),\n/* harmony export */   "sanitizeId": () => (/* binding */ sanitizeId),\n/* harmony export */   "getProjectIndex": () => (/* binding */ getProjectIndex),\n/* harmony export */   "deleteElementFromDOM": () => (/* binding */ deleteElementFromDOM),\n/* harmony export */   "displayTodoForm": () => (/* binding */ displayTodoForm),\n/* harmony export */   "hideTodoForm": () => (/* binding */ hideTodoForm)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");\n\n\nconst storeProject = (projectName) => {\n  _storage__WEBPACK_IMPORTED_MODULE_0__.store.push({\n    projectName: projectName,\n    todos: []\n  })\n  console.log(_storage__WEBPACK_IMPORTED_MODULE_0__.store)\n}\n\nconst storeTodos = (title, description, date, priority) => _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id]\n  .todos\n  .push(\n    {\n      title: title,\n      description: description,\n      date: date,\n      priority: priority\n    }\n  );\n\nconst renderProjects = (container) => {\n  _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach(project => {\n    const li = `\n                <li id="${sanitizeId(project.projectName)}">${project.projectName}\n                  <span>\n                    <i class="fa fa-times delete-pj-btn" data-id="${sanitizeId(project.projectName)}"></i>\n                    <i class="fas fa-plus mr-4 add-todo-btn" data-id="${sanitizeId(project.projectName)}"></i>\n\n                  </span>\n                </li>\n                `\n    container.insertAdjacentHTML(\'afterbegin\', li)\n  })\n}\n\nconst deleteElementFromDOM = (id) => document.querySelector(`#${id}`).remove()\n\nconst getProjectIndex = (id) => _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(pj => sanitizeId(pj.projectName) === id)\n\nconst sanitizeId = (text) => text.split(\' \').join(\'\');\n\nconst displayTodoForm = (element) => element.classList.add(\'show\')\nconst hideTodoForm = (element) => element.classList.remove(\'show\')\n\n\n\n//# sourceURL=webpack://webpackTemplate/./src/components/common.js?')},"./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage),\n/* harmony export */   "populateStore": () => (/* binding */ populateStore),\n/* harmony export */   "store": () => (/* binding */ store),\n/* harmony export */   "currentIndex": () => (/* binding */ currentIndex)\n/* harmony export */ });\nconst store = [\n];\n\nconst currentIndex = { id: 0 }\n\nconst setLocalStorage = () => {\n  window.localStorage.setItem(\'todos\', JSON.stringify(store));\n};\n\nconst populateStore = () => {\n  const colletion = JSON.parse(window.localStorage.getItem(\'todos\'));\n  if (colletion) {\n    colletion.forEach(el => {\n      store.push(el);\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://webpackTemplate/./src/components/storage.js?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Project */ \"./src/components/Project.js\");\n/* harmony import */ var _components_Ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Ui */ \"./src/components/Ui.js\");\n/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Todos */ \"./src/components/Todos.js\");\n/* harmony import */ var _components_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/storage */ \"./src/components/storage.js\");\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common */ \"./src/components/common.js\");\n\n\n\n\n\n\n\n\nconst UI = new _components_Ui__WEBPACK_IMPORTED_MODULE_2__.default();\n\nconst newProjectBtn = document.querySelector('#project-form__btn');\nconst projectName = document.querySelector('#project-form__name');\nconst todoSubmit = document.querySelector('.submit-todo');\nconst todoForm = document.querySelector('.todo-form-container');\n\n\nnewProjectBtn.addEventListener('click', e => {\n  e.preventDefault();\n  const newProject = new _components_Project__WEBPACK_IMPORTED_MODULE_1__.default(projectName.value);\n  newProject.saveProject()\n  UI.renderProject()\n})\n\ntodoSubmit.addEventListener('click', e => {\n  e.preventDefault();\n  const title = document.querySelector('.todo-title').value;\n  const description = document.querySelector('.todo-description').value;\n  const dueDate = document.querySelector('.todo-due-date').value;\n  const priority = document.querySelector('#priority').value;\n\n  const Todo = new _components_Todos__WEBPACK_IMPORTED_MODULE_3__.default(title, description, dueDate, priority)\n  Todo.saveTodo();\n  console.log(_components_storage__WEBPACK_IMPORTED_MODULE_4__.store[_components_storage__WEBPACK_IMPORTED_MODULE_4__.currentIndex.id].todos);\n\n  (0,_components_common__WEBPACK_IMPORTED_MODULE_5__.hideTodoForm)(todoForm);\n\n})\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  ;(0,_components_storage__WEBPACK_IMPORTED_MODULE_4__.populateStore)();\n  UI.renderProject();\n})\n\n//# sourceURL=webpack://webpackTemplate/./src/index.js?")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,_)=>{for(var o in _)__webpack_require__.o(_,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:_[o]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();