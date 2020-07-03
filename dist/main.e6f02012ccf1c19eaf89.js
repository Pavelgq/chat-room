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

// removed by extract-text-webpack-plugin

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
controller.connectElements(".login__button", 'click');

/***/ }),

/***/ "./scripts/controller.js":
/*!*******************************!*\
  !*** ./scripts/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Pavel\\Documents\\chat-room\\src\\scripts\\controller.js: Unexpected token, expected \",\" (74:98)\n\n\u001b[0m \u001b[90m 72 | \u001b[39m            method\u001b[33m:\u001b[39m \u001b[32m'POST'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 73 | \u001b[39m            headers\u001b[33m:\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 74 | \u001b[39m                \u001b[32m'Access-Control-Request-Headers'\u001b[39m\u001b[33m:\u001b[39m \u001b[32m'Origin, X-Requested-With, Content-Type, Accept'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 75 | \u001b[39m                \u001b[32m'Content-Type'\u001b[39m\u001b[33m:\u001b[39m \u001b[32m`application/json;charset=utf-8`\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 76 | \u001b[39m            }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 77 | \u001b[39m            body\u001b[33m:\u001b[39m \u001b[33mJSON\u001b[39m\u001b[33m.\u001b[39mstringify(data)\u001b[0m\n    at Parser._raise (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Parser.raiseWithData (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Parser.raise (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Parser.unexpected (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Parser.expect (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:8793:28)\n    at Parser.parseObj (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10439:14)\n    at Parser.parseExprAtom (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10055:28)\n    at Parser.parseExprSubscripts (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Parser.parseMaybeUnary (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Parser.parseExprOps (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Parser.parseObjectProperty (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10586:101)\n    at Parser.parseObjPropValue (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10611:101)\n    at Parser.parseObjectMember (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10535:10)\n    at Parser.parseObj (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10448:25)\n    at Parser.parseExprAtom (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10055:28)\n    at Parser.parseExprSubscripts (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Parser.parseMaybeUnary (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Parser.parseExprOps (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Parser.parseExprListItem (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10792:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9850:22)\n    at Parser.parseSubscript (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9750:31)\n    at Parser.parseSubscripts (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9679:19)\n    at Parser.parseExprSubscripts (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9662:17)\n    at Parser.parseMaybeUnary (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Parser.parseAwait (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10908:28)\n    at Parser.parseMaybeUnary (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9604:19)\n    at Parser.parseExprOps (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Parser.parseVar (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11815:26)\n    at Parser.parseVarStatement (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11624:10)\n    at Parser.parseStatementContent (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11223:21)");

/***/ })

/******/ });
//# sourceMappingURL=main.e6f02012ccf1c19eaf89.js.map