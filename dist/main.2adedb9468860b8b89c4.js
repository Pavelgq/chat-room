/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/style.less */ "./less/style.less");
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_style_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/app.js */ "./scripts/app.js");


/**
 * Точка входа
 */

/***/ }),

/***/ "./less/style.less":
/*!*************************!*\
  !*** ./less/style.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/css-loader/dist/cjs.js):\nModuleBuildError: Module build failed (from ../node_modules/less-loader/dist/cjs.js):\n\n\n        s\n    }\n  ^\nUnrecognised input. Possibly missing opening '{'\n      Error in C:\\Users\\Pavel\\Documents\\chat-room\\src\\less\\blocks\\login.less (line 7, column 4)\n    at C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\less-loader\\dist\\index.js:58:5");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./scripts/controller.js");

const controller = new _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
controller.init();
controller.connectElements(".room__send", 'click');

/***/ }),

/***/ "./scripts/controller.js":
/*!*******************************!*\
  !*** ./scripts/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./scripts/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./scripts/view.js");


class Controller {
  constructor(model, view) {
    this.model = model || new _model_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.view = view || new _view_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.model);
  }

  init() {
    this.socket = new WebSocket("ws://localhost:8081");
    console.log(this.socket); // отправить сообщение из формы publish
    // document.forms.publish.onsubmit = function () {
    //     let outgoingMessage = this.message.value;
    //     socket.send(outgoingMessage);
    //     return false;
    // };
    // обработчик входящих сообщений

    this.socket.onmessage = this.newMessage.bind(this);
  }

  newMessage(event) {
    console.log(event.data);
    let pack = JSON.parse(event.data);
    this.model.addMessage(pack);
    console.log(this.model);
    this.view.showMessage(pack);
  }

  connectElements(selector, event) {
    let els = document.querySelectorAll(selector);

    for (let el of els) el.addEventListener(event, e => this.eventHandler(e));
  }

  eventHandler(e) {
    switch (event.target.dataset.index) {
      case 'auth':
        break;

      case 'login':
        break;

      case 'send':
        let outgoingMessage = document.querySelector(".room__message").value;
        this.socket.send(outgoingMessage);
        return false;
        break;

      default:
        break;
    }
  }

}

/***/ }),

/***/ "./scripts/message.js":
/*!****************************!*\
  !*** ./scripts/message.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ "./scripts/user.js");

class Message {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.date = new Data();
  }

}

/***/ }),

/***/ "./scripts/model.js":
/*!**************************!*\
  !*** ./scripts/model.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.js */ "./scripts/message.js");

class Model {
  constructor() {
    this.messages = [];
  }

  newUser() {}

  getUser() {}

  getMassage() {
    return this.messages;
  }

  addMessage(message) {
    this.messages.push(message);
  }

}

/***/ }),

/***/ "./scripts/user.js":
/*!*************************!*\
  !*** ./scripts/user.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
class User {
  constructor(name, status, image) {
    this.name = name;
    this.status = status;
    this.image = image;
  }

  changeImage(src) {
    //проверка корректности
    this.image = src;
  }

}

/***/ }),

/***/ "./scripts/view.js":
/*!*************************!*\
  !*** ./scripts/view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
class View {
  constructor(model) {
    this.model = model;
  } // authorization() {
  //         /**
  //          * Открываю модальное окно и подписываюсь на события кнопок
  //          */
  // }
  // createUser() {
  //     /**
  //      * Добавляю пользователя, обновляю модель?? через контроллер??
  //      */
  // }


  showMessage(pack) {
    let messageElem = document.createElement("DIV");
    messageElem.setAttribute('class', 'room__post post');
    let template = `
    <img class="user__avatar post__avatar" src="/src/image/dog.jpg" alt="Аватар пользователя" srcset="${pack.userId}">
    <p class="post__text">
    ${pack.text}
    </p>`;
    messageElem.innerHTML = template;
    document.querySelector('.room__field').appendChild(messageElem);
  }

}

/***/ })

/******/ });
//# sourceMappingURL=main.2adedb9468860b8b89c4.js.map