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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry/index-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/index.less":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/index.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".tab-root {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n.tab-root .tab-header {\\n  display: flex;\\n  flex-wrap: nowrap;\\n  color: white;\\n  font-size: 50px;\\n  height: 1.2rem;\\n  font-family: PingFangSC-Medium, Microsoft YaHei, sans-serif;\\n  font-weight: lighter;\\n  background-color: #892bfd;\\n  justify-content: flex-start;\\n}\\n.tab-root .tab-header .tab-header-item {\\n  margin: 0.2rem 0.333rem 0.185rem 0.333rem;\\n}\\n.tab-root .tab-header .tab-header-item-active {\\n  font-weight: 500;\\n}\\n.tab-root .tab-header .tab-header-item-active:after {\\n  content: '';\\n  display: block;\\n  position: relative;\\n  height: 3px;\\n  width: 70%;\\n  background-color: white;\\n  top: 0.15rem;\\n  left: 15%;\\n}\\n.tab-root .tab-panes-container {\\n  display: flex;\\n  width: 100%;\\n  height: 100%;\\n}\\n.tab-root .tab-panes-container .tab-pane {\\n  height: 100%;\\n  width: 100%;\\n  background-color: antiquewhite;\\n  overflow: hidden;\\n  display: none;\\n}\\n.tab-root .tab-panes-container .tab-pane-active {\\n  display: block;\\n}\\n.scrollView {\\n  height: 100%;\\n  overflow: scroll;\\n  background-color: lightblue;\\n  white-space: normal;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/babel/babelTransformToJSX.js":
/*!******************************************!*\
  !*** ./src/babel/babelTransformToJSX.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElement; });\nvar myComponents = ['Tab', 'TabPane', 'ScrollView'];\nfunction createElement(NodeClass, attributes) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  console.log(arguments);\n\n  if (NodeClass instanceof Function && myComponents.indexOf(NodeClass.name) >= 0) {\n    var object = new NodeClass();\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var child = _step.value;\n        object.appendChild(child);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    if (!object.isValid()) {\n      throw Error(\"Invalid componet: \".concat(NodeClass.name));\n    }\n\n    for (var attr in attributes) {\n      object.setAttribute(attr, attributes[attr]);\n    }\n\n    return object;\n  } else if (typeof NodeClass === 'string') {// const textNode = document.createTextNode( vnode );\n    // return container.appendChild( textNode );\n  } else {// // TODO 白名单校验\n      // const elem = document.createElement(NodeClass);\n      // for (let child of children) {\n      //   elem.appendChild(child);\n      // }\n      // return elem;\n    }\n}\n\n//# sourceURL=webpack:///./src/babel/babelTransformToJSX.js?");

/***/ }),

/***/ "./src/components/Base/BaseComponent.ts":
/*!**********************************************!*\
  !*** ./src/components/Base/BaseComponent.ts ***!
  \**********************************************/
/*! exports provided: emptyObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emptyObject\", function() { return emptyObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseComponent; });\nconst emptyObject = () => Object.create(null);\r\n/**\r\n * BaseComponent\r\n *\r\n * @class BaseComponent\r\n */\r\nclass BaseComponent {\r\n    constructor() {\r\n        // should define interface\r\n        this.PROPERTY = emptyObject();\r\n        this.ATTRIBUTE = emptyObject();\r\n        this.EVENTS = emptyObject();\r\n        this.STATE = emptyObject();\r\n        this.root = null;\r\n        this.PROPERTY.children = [];\r\n    }\r\n    created() { }\r\n    destroy() {\r\n        this.unmounted();\r\n        this.ATTRIBUTE._container.removeChild(this.root);\r\n        this.root = null;\r\n    }\r\n    appendTo(element) {\r\n        this.ATTRIBUTE._container = element;\r\n        if (this.root) {\r\n            element.appendChild(this.root);\r\n            this.mounted();\r\n        }\r\n    }\r\n    appendChild(child) {\r\n        return child;\r\n    }\r\n    mounted() { }\r\n    unmounted() {\r\n        Object.getOwnPropertyNames(this.EVENTS).forEach(name => {\r\n            this.EVENTS[name].clear();\r\n        });\r\n        this.ATTRIBUTE = null;\r\n        this.PROPERTY = null;\r\n        this.STATE = null;\r\n        this.EVENTS = null;\r\n    }\r\n    update() { }\r\n    get children() {\r\n        return this.PROPERTY.children;\r\n    }\r\n    getAttribute(name) {\r\n        if (name === 'style' && this.root) {\r\n            return this.root.getAttribute('style');\r\n        }\r\n        return this.ATTRIBUTE[name];\r\n    }\r\n    setAttribute(name, value) {\r\n        if (name === 'className' && this.root) {\r\n            // this.root.setAttribute('class', value);\r\n            this.root.className = value;\r\n        }\r\n        return (this.ATTRIBUTE[name] = value);\r\n    }\r\n    addEventListener(type, listener) {\r\n        if (!this.EVENTS[type])\r\n            this.EVENTS[type] = new Set();\r\n        this.EVENTS[type].add(listener);\r\n    }\r\n    removeEventListener(type, listener) {\r\n        if (!this.EVENTS[type]) {\r\n            return;\r\n        }\r\n        this.EVENTS[type].delete(listener);\r\n    }\r\n    triggerEvent(type) {\r\n        if (!this.EVENTS[type])\r\n            return;\r\n        for (let event of this.EVENTS[type])\r\n            event.call(this);\r\n    }\r\n    isValid(child) {\r\n        return true;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/Base/BaseComponent.ts?");

/***/ }),

/***/ "./src/components/_utils_/utils.ts":
/*!*****************************************!*\
  !*** ./src/components/_utils_/utils.ts ***!
  \*****************************************/
/*! exports provided: createSpanElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpanElem\", function() { return createSpanElem; });\nfunction createSpanElem(text) {\r\n    const spanElem = document.createElement('span');\r\n    spanElem.innerText = text;\r\n    return spanElem;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/_utils_/utils.ts?");

/***/ }),

/***/ "./src/components/index.less":
/*!***********************************!*\
  !*** ./src/components/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/index.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/index.less?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Tab, ScrollView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ \"./src/components/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tab_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab/index */ \"./src/components/tab/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tab\", function() { return _tab_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _scrollView_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollView/index */ \"./src/components/scrollView/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScrollView\", function() { return _scrollView_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/index.ts?");

/***/ }),

/***/ "./src/components/scrollView/index.ts":
/*!********************************************!*\
  !*** ./src/components/scrollView/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollView; });\n/* harmony import */ var _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/BaseComponent */ \"./src/components/Base/BaseComponent.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_utils_/utils */ \"./src/components/_utils_/utils.ts\");\n\r\n\r\nclass ScrollView extends _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.created();\r\n    }\r\n    created() {\r\n        this.root = document.createElement('div');\r\n        this.root.classList.add('scrollView');\r\n        this.root.addEventListener('touchmove', e => {\r\n            e.cancelBubble = true;\r\n            e.stopImmediatePropagation();\r\n        }, {\r\n            passive: false\r\n        });\r\n    }\r\n    appendChild(child) {\r\n        if (!this.root)\r\n            return;\r\n        this.PROPERTY.children.push(child);\r\n        if (child instanceof _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            child.appendTo(this.root);\r\n        }\r\n        else if (typeof child === 'string') {\r\n            this.root.appendChild(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(child));\r\n        }\r\n        else {\r\n            this.root.appendChild(child);\r\n        }\r\n        return child;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/scrollView/index.ts?");

/***/ }),

/***/ "./src/components/tab/TabHeader.ts":
/*!*****************************************!*\
  !*** ./src/components/tab/TabHeader.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabHeader; });\n/* harmony import */ var _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/BaseComponent */ \"./src/components/Base/BaseComponent.ts\");\n\r\nconst active_CLASS = 'tab-header-item-active';\r\nclass TabHeader extends _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.created();\r\n    }\r\n    created() {\r\n        this.root = document.createElement('div');\r\n        this.root.classList.add('tab-header');\r\n        this.STATE.active = 0;\r\n    }\r\n    set active(value) {\r\n        this.STATE.active = value;\r\n        this.triggerEvent('activeIndexChange');\r\n    }\r\n    appendChild(child) {\r\n        if (this.root) {\r\n            if (this.PROPERTY.children.length === 0) {\r\n                child.classList.add(active_CLASS);\r\n            }\r\n            this.root.appendChild(child);\r\n            this.PROPERTY.children.push(child);\r\n        }\r\n        return child;\r\n    }\r\n    activeIndexChange() {\r\n        const children = this.PROPERTY.children;\r\n        children.forEach((child, index) => {\r\n            if (index === this.STATE.active) {\r\n                child.classList.add(active_CLASS);\r\n            }\r\n            else {\r\n                child.classList.remove(active_CLASS);\r\n            }\r\n        });\r\n    }\r\n    mounted() {\r\n        this.addEventListener('activeIndexChange', this.activeIndexChange);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/tab/TabHeader.ts?");

/***/ }),

/***/ "./src/components/tab/TabPane.ts":
/*!***************************************!*\
  !*** ./src/components/tab/TabPane.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabPane; });\n/* harmony import */ var _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/BaseComponent */ \"./src/components/Base/BaseComponent.ts\");\n\r\nclass TabPane extends _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.created();\r\n    }\r\n    created() {\r\n        this.root = document.createElement('div');\r\n        this.root.classList.add('tab-pane');\r\n    }\r\n    appendChild(child) {\r\n        if (this.root) {\r\n            if (typeof child === 'string') {\r\n                const childNode = document.createTextNode(child);\r\n                this.root.appendChild(childNode);\r\n            }\r\n            else {\r\n                child.appendTo(this.root);\r\n            }\r\n            this.PROPERTY.children.push(child);\r\n        }\r\n        return child;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/tab/TabPane.ts?");

/***/ }),

/***/ "./src/components/tab/index.ts":
/*!*************************************!*\
  !*** ./src/components/tab/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/BaseComponent */ \"./src/components/Base/BaseComponent.ts\");\n/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPane */ \"./src/components/tab/TabPane.ts\");\n/* harmony import */ var _TabHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabHeader */ \"./src/components/tab/TabHeader.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_utils_/utils */ \"./src/components/_utils_/utils.ts\");\n\r\n\r\n\r\n\r\nclass Tab extends _Base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.tabPanes = [];\r\n        this.header = new _TabHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.contentContainer = null;\r\n        this.created();\r\n    }\r\n    created() {\r\n        this.root = document.createElement('div');\r\n        this.contentContainer = document.createElement('div');\r\n        this.contentContainer.classList.add('tab-panes-container');\r\n        // this.root.setAttribute('id', `hbw-Tab${Date.now()}`);\r\n        this.header.appendTo(this.root);\r\n        this.root.appendChild(this.contentContainer);\r\n        this.STATE.activeIndex = 0;\r\n    }\r\n    appendChild(child) {\r\n        this.addTabHeader(child.getAttribute('title'));\r\n        this.tabPanes.push(child);\r\n        if (this.contentContainer) {\r\n            if (this.PROPERTY.children.length === 0) {\r\n                child.setAttribute('className', 'tab-pane tab-pane-active');\r\n                child.appendTo(this.contentContainer);\r\n            }\r\n            this.PROPERTY.children.push(child);\r\n        }\r\n        return child;\r\n    }\r\n    addTabHeader(title) {\r\n        const headText = title ? title : '';\r\n        const headChild = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__[\"createSpanElem\"])(headText);\r\n        headChild.classList.add('tab-header-item');\r\n        this.header.appendChild(headChild);\r\n        headChild.addEventListener('click', event => {\r\n            this.STATE.activeIndex = this.header.active = this.header.children.indexOf(headChild);\r\n            this.triggerEvent('activeIndexChange');\r\n        });\r\n    }\r\n    activeIndexChange() {\r\n        if (!this.contentContainer)\r\n            return;\r\n        // 删除所有子节点\r\n        this.contentContainer.childNodes.forEach(child => {\r\n            // @ts-ignore\r\n            this.contentContainer.removeChild(child);\r\n        });\r\n        // 添加激活节点\r\n        const children = this.PROPERTY.children;\r\n        this.PROPERTY.children.forEach((child, index) => {\r\n            if (index === this.STATE.activeIndex && this.contentContainer) {\r\n                child.appendTo(this.contentContainer);\r\n                child.setAttribute('className', 'tab-pane tab-pane-active');\r\n            }\r\n        });\r\n    }\r\n    mounted() {\r\n        this.addEventListener('activeIndexChange', this.activeIndexChange);\r\n    }\r\n    destroy() {\r\n        this.tabPanes.forEach(tabpane => {\r\n            tabpane.destroy();\r\n        });\r\n        this.header.destroy();\r\n        super.destroy();\r\n    }\r\n    isValid() {\r\n        const children = this.PROPERTY.children;\r\n        if (children.length > 0)\r\n            return true;\r\n        return false;\r\n    }\r\n}\r\nTab.TabPane = _TabPane__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tab);\r\n\n\n//# sourceURL=webpack:///./src/components/tab/index.ts?");

/***/ }),

/***/ "./src/entry/App.js":
/*!**************************!*\
  !*** ./src/entry/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/index */ \"./src/components/index.ts\");\n/* harmony import */ var _babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../babel/babelTransformToJSX */ \"./src/babel/babelTransformToJSX.js\");\n\n\nvar App = Object(_babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"], {\n  className: \"tab-root\"\n}, Object(_babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"].TabPane, {\n  title: '推荐'\n}, Object(_babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index__WEBPACK_IMPORTED_MODULE_0__[\"ScrollView\"], {\n  style: \"-webkit-overflow-scrolling:touch;overflow:scroll;background-color:lightblue;white-space:normal;font-size:50px\"\n}, \"qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqq\")), Object(_babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"].TabPane, {\n  title: '有趣的店'\n}, \"2222\"), Object(_babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"].TabPane, {\n  title: '品牌新店'\n}, \"3333\"), Object(_babel_babelTransformToJSX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"].TabPane, {\n  title: '发现'\n}, \"4444\"));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/entry/App.js?");

/***/ }),

/***/ "./src/entry/index-entry.js":
/*!**********************************!*\
  !*** ./src/entry/index-entry.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/entry/App.js\");\n\n\nfunction initPage() {\n  var rootElem = document.getElementById('content');\n  _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendTo(rootElem);\n}\n\ninitPage();\n\n//# sourceURL=webpack:///./src/entry/index-entry.js?");

/***/ })

/******/ });