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

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Pavel\\Documents\\chat-room\\src\\scripts\\controller.js: Unexpected token (77:13)\n\n\u001b[0m \u001b[90m 75 | \u001b[39m            }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 76 | \u001b[39m            body\u001b[33m:\u001b[39m \u001b[33mJSON\u001b[39m\u001b[33m.\u001b[39mstringify(data)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 77 | \u001b[39m          })\u001b[33m;\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 78 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 79 | \u001b[39m        let req \u001b[33m=\u001b[39m await response\u001b[33m.\u001b[39mjson()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 80 | \u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Parser.raiseWithData (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Parser.raise (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Parser.unexpected (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Parser.parseExprAtom (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10130:20)\n    at Parser.parseExprSubscripts (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Parser.parseMaybeUnary (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Parser.parseExprOps (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Parser.parseExpression (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Parser.parseStatementContent (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Parser.parseStatement (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Parser.parseBlockBody (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Parser.parseBlock (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11701:10)\n    at Parser.parseFunctionBody (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10708:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10691:10)\n    at Parser.parseMethod (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:10653:10)\n    at Parser.pushClassMethod (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12156:30)\n    at Parser.parseClassMemberWithIsStatic (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12098:14)\n    at Parser.parseClassMember (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12015:10)\n    at C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11960:14\n    at Parser.withTopicForbiddingContext (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11031:14)\n    at Parser.parseClassBody (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11937:10)\n    at Parser.parseClass (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11911:22)\n    at Parser.parseExportDefaultExpression (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12347:19)\n    at Parser.parseExport (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12260:31)\n    at Parser.parseStatementContent (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11260:27)\n    at Parser.parseStatement (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Parser.parseBlockBody (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Parser.parseTopLevel (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Parser.parse (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\Users\\Pavel\\Documents\\chat-room\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)");

/***/ })

/******/ });
//# sourceMappingURL=main.9e595ccf64e49bc4e639.js.map