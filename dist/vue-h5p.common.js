module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02ac":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator");

/***/ }),

/***/ "0eb3":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.set-prototype-of");

/***/ }),

/***/ "10c1":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "139f":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ "18d2":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ "1ce0":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ "1de5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3470":
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),

/***/ "3e88":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join");

/***/ }),

/***/ "407e":
/***/ (function(module, exports) {

module.exports = require("toposort-class");

/***/ }),

/***/ "437b":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.global-this");

/***/ }),

/***/ "477d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("1de5");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("64ac");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__("3470");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__("a622");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__("d48c");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__("10c1");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#h5p" });
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, "/* General CSS for H5P. Licensed under the MIT License.*/\n\n/* Custom H5P font to use for icons. */\n@font-face {\n  font-family: 'h5p';\n  src:    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src:    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\nhtml.h5p-iframe, html.h5p-iframe > body {\n  font-family: Sans-Serif; /* Use the browser's default sans-serif font. (Since Heletica doesn't look nice on Windows, and Arial on OS X.) */\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.h5p-semi-fullscreen, .h5p-fullscreen, html.h5p-iframe .h5p-container {\n  overflow: hidden;\n}\n.h5p-content {\n  position: relative;\n  background: #fefefe;\n  border: 1px solid #EEE;\n  border-bottom: none;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.h5p-noselect\n{\n  -khtml-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\nhtml.h5p-iframe .h5p-content {\n  font-size: 16px;\n  line-height: 1.5em;\n  width: 100%;\n  height: auto;\n}\nhtml.h5p-iframe .h5p-fullscreen .h5p-content,\nhtml.h5p-iframe .h5p-semi-fullscreen .h5p-content {\n  height: 100%;\n}\n.h5p-content.h5p-no-frame,\n.h5p-fullscreen .h5p-content,\n.h5p-semi-fullscreen .h5p-content {\n  border: 0;\n}\n.h5p-container {\n  position: relative;\n  z-index: 1;\n}\n.h5p-iframe-wrapper.h5p-fullscreen {\n  background-color: #000;\n}\nbody.h5p-semi-fullscreen {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n.h5p-container.h5p-semi-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 101;\n  width: 100%;\n  height: 100%;\n  background-color: #FFF;\n}\n\n.h5p-content-controls {\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n.h5p-fullscreen .h5p-content-controls {\n  display: none;\n}\n\n.h5p-content-controls > a:link, .h5p-content-controls > a:visited, a.h5p-disable-fullscreen:link, a.h5p-disable-fullscreen:visited {\n  color: #e5eef6;\n}\n\n.h5p-enable-fullscreen:before {\n  font-family: 'H5P';\n  content: \"\\e88c\";\n}\n.h5p-disable-fullscreen:before {\n  font-family: 'H5P';\n  content: \"\\e891\";\n}\n.h5p-enable-fullscreen, .h5p-disable-fullscreen {\n  cursor: pointer;\n  color: #EEE;\n  background: rgb(0,0,0);\n  background: rgba(0,0,0,0.3);\n  line-height: 0.975em;\n  font-size: 2em;\n  width: 1.125em;\n  height: 1em;\n  text-indent: 0.04em;\n}\n.h5p-disable-fullscreen {\n  line-height: 0.925em;\n  width: 1.1em;\n  height: 0.9em;\n}\n\n.h5p-enable-fullscreen:focus,\n.h5p-disable-fullscreen:focus {\n  outline-style: solid;\n  outline-width: 1px;\n  outline-offset: 0.25em;\n}\n\n.h5p-enable-fullscreen:hover, .h5p-disable-fullscreen:hover {\n  background: rgba(0,0,0,0.5);\n}\n.h5p-semi-fullscreen .h5p-enable-fullscreen {\n  display: none;\n}\n\ndiv.h5p-fullscreen {\n  width: 100%;\n  height: 100%;\n}\n.h5p-iframe-wrapper {\n  width: auto;\n  height: auto;\n}\n\n.h5p-fullscreen .h5p-iframe-wrapper,\n.h5p-semi-fullscreen .h5p-iframe-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.h5p-iframe-wrapper.h5p-semi-fullscreen {\n  width: auto;\n  height: auto;\n  background: black;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100001;\n}\n.h5p-iframe-wrapper.h5p-semi-fullscreen .buttons {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 20;\n}\n.h5p-iframe-wrapper iframe.h5p-iframe {\n  /* Hack for IOS landscape / portrait */\n  width: 10px;\n  min-width: 100%;\n  *width: 100%;\n  /* End of hack */\n  height: 100%;\n  z-index: 10;\n  overflow: hidden;\n  border: 0;\n  display: block;\n}\n\n.h5p-content ul.h5p-actions {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  overflow: hidden;\n  list-style: none;\n  padding: 0px 10px;\n  margin: 0;\n  height: 25px;\n  font-size: 12px;\n  background: #FAFAFA;\n  border-top: 1px solid #EEE;\n  border-bottom: 1px solid #EEE;\n  clear: both;\n  font-family: Sans-Serif;\n}\n.h5p-fullscreen .h5p-actions, .h5p-semi-fullscreen .h5p-actions {\n  display: none;\n}\n.h5p-actions > .h5p-button {\n  float: left;\n  cursor: pointer;\n  margin: 0 0.5em 0 0;\n  background: none;\n  padding: 0 0.75em 0 0.25em;\n  vertical-align: top;\n  color: #999;\n  text-decoration: none;\n  outline: none;\n  line-height: 22px;\n}\n.h5p-actions > .h5p-button:hover {\n  color: #666;\n}\n.h5p-actions > .h5p-button:active,\n.h5p-actions > .h5p-button:focus,\n.h5p-actions .h5p-link:active,\n.h5p-actions .h5p-link:focus {\n  color: #666;\n}\n.h5p-actions > .h5p-button:focus,\n.h5p-actions .h5p-link:focus {\n  outline-style: solid;\n  outline-width: thin;\n  outline-offset: -2px;\n  outline-color: #9ecaed;\n}\n.h5p-actions > .h5p-button:before {\n  font-family: 'H5P';\n  font-size: 20px;\n  line-height: 23px;\n  vertical-align: bottom;\n  padding-right: 0;\n}\n.h5p-actions > .h5p-button.h5p-export:before {\n  content: \"\\e90b\";\n}\n.h5p-actions > .h5p-button.h5p-copyrights:before {\n  content: \"\\e88f\";\n}\n.h5p-actions > .h5p-button.h5p-embed:before {\n  content: \"\\e892\";\n}\n.h5p-actions .h5p-link {\n  float: right;\n  margin-right: 0;\n  font-size: 2.0em;\n  line-height: 23px;\n  overflow: hidden;\n  color: #999;\n  text-decoration: none;\n  outline: none;\n}\n.h5p-actions .h5p-link:before {\n  font-family: 'H5P';\n  content: \"\\e88e\";\n  vertical-align: bottom;\n}\n.h5p-actions > li {\n  margin: 0;\n  list-style: none;\n}\n.h5p-popup-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  z-index: 100;\n  padding: 2em;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  opacity: 0;\n  -webkit-transition: opacity 0.2s;\n  -moz-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  background:#000;\n  background:rgba(0,0,0,0.75);\n}\n.h5p-popup-dialog.h5p-open {\n  opacity: 1;\n}\n.h5p-popup-dialog .h5p-inner {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  background: #fff;\n  height: 100%;\n  max-height: 100%;\n  position: relative;\n}\n.h5p-popup-dialog .h5p-inner > h2 {\n  position: absolute;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  background: #eee;\n  display: block;\n  color: #656565;\n  font-size: 1.25em;\n  padding: 0.325em 0.5em 0.25em;\n  line-height: 1.25em;\n  border-bottom: 1px solid #ccc;\n  z-index: 2;\n}\n.h5p-popup-dialog .h5p-inner > h2 > a {\n  font-size: 12px;\n  margin-left: 1em;\n}\n.h5p-embed-dialog .h5p-inner,\n.h5p-reuse-dialog .h5p-inner,\n.h5p-content-user-data-reset-dialog .h5p-inner {\n  min-width: 316px;\n  max-width: 400px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%);\n}\n.h5p-embed-dialog .h5p-embed-code-container,\n.h5p-embed-size {\n  resize: none;\n  outline: none;\n  width: 100%;\n  padding: 0.375em 0.5em 0.25em;\n  margin: 0;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  box-shadow: 0 1px 2px 0 #d0d0d0 inset;\n  font-size: 0.875em;\n  letter-spacing: 0.065em;\n  font-family: sans-serif;\n  white-space: pre;\n  line-height: 1.5em;\n  height: 2.0714em;\n  background: #f5f5f5;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.h5p-embed-dialog .h5p-embed-code-container:focus {\n  height: 5em;\n}\n.h5p-embed-size {\n  width: 3.5em;\n  text-align: right;\n  margin: 0.5em 0;\n  line-height: 2em;\n}\n.h5p-popup-dialog .h5p-scroll-content {\n  border-top: 2.25em solid transparent;\n  padding: 1em;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  color: #555555;\n  z-index: 1;\n}\n.h5p-popup-dialog.h5p-open .h5p-scroll-content {\n  overflow: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n}\n.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar {\n  width: 8px;\n}\n.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar-track {\n  background: #e0e0e0;\n}\n.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar-thumb {\n  box-shadow: 0 0 10px #000 inset;\n  border-radius: 4px;\n}\n.h5p-popup-dialog .h5p-close {\n  cursor: pointer;\n  font-size: 2em;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1.125em;\n  height: 1.125em;\n  line-height: 1.125em;\n  color: #656565;\n  cursor: pointer;\n  text-indent: -0.065em;\n  z-index: 3\n}\n.h5p-popup-dialog .h5p-close:after {\n  font-family: 'H5P';\n  content: \"\\e894\";\n}\n.h5p-popup-dialog .h5p-close:hover:after,\n.h5p-popup-dialog .h5p-close:focus:after {\n  color: #454545;\n}\n.h5p-popup-dialog .h5p-close:active:after {\n  color: #252525;\n}\n.h5p-poopup-dialog h2 {\n  margin: 0.25em 0 0.5em;\n}\n.h5p-popup-dialog h3 {\n  margin: 0.75em 0 0.25em;\n}\n.h5p-popup-dialog dl {\n  margin: 0.25em 0 0.75em;\n}\n.h5p-popup-dialog dt {\n  float: left;\n  margin: 0 0.75em 0 0;\n}\n.h5p-popup-dialog dt:after {\n  content: ':';\n}\n.h5p-popup-dialog dd {\n  margin: 0;\n}\n.h5p-expander {\n  cursor: pointer;\n  font-size: 1.125em;\n  margin: 0.5em 0 0;\n  display: inline-block;\n}\n.h5p-expander:before {\n  content: \"+\";\n  width: 1em;\n  display: inline-block;\n  font-weight: bold;\n}\n.h5p-expander.h5p-open:before {\n  content: \"-\";\n  text-indent: 0.125em;\n}\n.h5p-expander:hover,\n.h5p-expander:focus {\n  color: #303030;\n}\n.h5p-expander:active {\n  color: #202020;\n}\n.h5p-expander-content {\n  display: none;\n}\n.h5p-expander-content p {\n  margin: 0.5em 0;\n}\n.h5p-content-copyrights {\n  border-left: 0.25em solid #d0d0d0;\n  margin-left: 0.25em;\n  padding-left: 0.25em;\n}\n.h5p-throbber {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 10px center no-repeat;\n  padding-left: 38px;\n  min-height: 30px;\n  line-height: 30px;\n}\n.h5p-dialog-ok-button {\n  cursor: default;\n  float: right;\n  outline: none;\n  border: 2px solid #ccc;\n  padding: 0.25em 0.75em 0.125em;\n  background: #eee;\n}\n.h5p-dialog-ok-button:hover,\n.h5p-dialog-ok-button:focus {\n  background: #fafafa;\n}\n.h5p-dialog-ok-button:active {\n  background: #eeffee;\n}\n.h5p-big-button {\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  padding: 1em 1em 1em 3.75em;\n  text-align: left;\n  border: 1px solid #dedede;\n  background: linear-gradient(#ffffff, #f1f1f2);\n  border-radius: 0.25em;\n}\n.h5p-big-button:before {\n  font-family: 'h5p';\n  content: \"\\e893\";\n  line-height: 1;\n  font-size: 3em;\n  color: #2747f7;\n  position: absolute;\n  left: 0.125em;\n  top: 0.125em;\n}\n.h5p-copy-button:before {\n  content: \"\\e905\";\n}\n.h5p-big-button:hover {\n  border: 1px solid #2747f7;\n  background: #eff1fe;\n}\n.h5p-big-button:active {\n  border: 1px solid #dedede;\n  background: #dfe4fe;\n}\n.h5p-button-title {\n  color: #2747f7;\n  font-size: 15px;\n  font-weight: bold;\n  margin-bottom: 0.5em;\n}\n.h5p-button-description {\n  color: #757575;\n}\n.h5p-horizontal-line-text {\n  border-top: 1px solid #dadada;\n  line-height: 1;\n  color: #474747;\n  text-align: center;\n  position: relative;\n  margin: 1.25em 0;\n}\n.h5p-horizontal-line-text > span {\n  background: white;\n  padding: 0.5em;\n  position: absolute;\n  top: -1em;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.h5p-toast {\n  font-size: 0.75em;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #fff;\n  z-index: 110;\n  position: absolute;\n  padding: 0 0.5em;\n  line-height: 2;\n  border-radius: 4px;\n  white-space: nowrap;\n  pointer-events: none;\n  top: 0;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 1s;\n}\n.h5p-toast-disabled {\n  opacity: 0;\n  visibility: hidden;\n}\n.h5p-content code,\n.h5peditor code {\n  color: #3d3d3d;\n  background: #e0e0e0;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n.h5p-content pre > code,\n.h5peditor pre > code {\n  background-color: #fafafa;\n  padding: 5px;\n  display: block;\n  line-height: normal;\n  border: 1px solid #c7c7c7;\n  border-left-width: 4px;\n  max-width: 100%;\n  white-space: pre;\n  overflow: auto;\n}\n\n\n/* This is loaded as part of Core and not Editor since this needs to be outside the editor iframe */\n.h5peditor-semi-fullscreen {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 101;\n}\niframe.h5peditor-semi-fullscreen {\n  background: #fff;\n  z-index: 100001;\n}\n\n.h5p-content.using-mouse *:not(textarea):focus {\n  outline: none !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4a38":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ "51e9":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),

/***/ "5c3b":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.from-entries");

/***/ }),

/***/ "5d94":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("477d");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "5fef":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),

/***/ "6049":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ "64ac":
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "6579":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ "6bb1":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),

/***/ "79d0":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "8075":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.ends-with");

/***/ }),

/***/ "8495":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ "850c":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ "8c84":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ "907b":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ "9861":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.map");

/***/ }),

/***/ "9a3c":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.flat");

/***/ }),

/***/ "9aa8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-prototype-of");

/***/ }),

/***/ "9bb0":
/***/ (function(module, exports) {

module.exports = require("@soda/get-current-script");

/***/ }),

/***/ "a622":
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "b917":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.assign");

/***/ }),

/***/ "bcd8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ "bcda":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ "d48c":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+Cjxqc29uPgo8IVtDREFUQVsKewoJImZvbnRGYW1pbHkiOiAiaDVwLWNvcmUiLAoJImRlc2NyaXB0aW9uIjogIkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uIiwKCSJtYWpvclZlcnNpb24iOiAxLAoJIm1pbm9yVmVyc2lvbiI6IDEsCgkidmVyc2lvbiI6ICJWZXJzaW9uIDEuMSIsCgkiZm9udElkIjogImg1cC1jb3JlIiwKCSJwc05hbWUiOiAiaDVwLWNvcmUiLAoJInN1YkZhbWlseSI6ICJSZWd1bGFyIiwKCSJmdWxsTmFtZSI6ICJoNXAtY29yZSIKfQpdXT4KPC9qc29uPgo8L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Img1cC1jb3JlIiBob3Jpei1hZHYteD0iMTAyNCI+Cjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0IiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTU2NTsiIGdseXBoLW5hbWU9ImFycm93LWRvd24iIGRhdGEtdGFncz0iYXJyb3ctZG93biIgZD0iTTIzNCA1NjUuNjY3aDU1NmwtMjc4LTI3OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNTY2OyIgZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgZGF0YS10YWdzPSJhcnJvdy1sZWZ0IiBkPSJNMzgxIDE2NC42Njd2NTI0bDI2Mi0yNjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTU4ZTsiIGdseXBoLW5hbWU9ImNvbGFwc2UiIGRhdGEtdGFncz0iY29sYXBzZSIgZD0iTTUxMiA1ODQuNjY3bDI1Ni0yNTYtNjAtNjAtMTk2IDE5Ni0xOTYtMTk2LTYwIDYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU1OGY7IiBnbHlwaC1uYW1lPSJleHBhbmQiIGRhdGEtdGFncz0iZXhwYW5kIiBkPSJNNzA4IDU4NC42NjdsNjAtNjAtMjU2LTI1Ni0yNTYgMjU2IDYwIDYwIDE5Ni0xOTZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwMDsiIGdseXBoLW5hbWU9Im1vdmUiIGRhdGEtdGFncz0ibW92ZSIgZD0iTTM4Ni42NjIgODUzLjA2MWg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDg1My4wNjFoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNMzg2LjY2MiA2OTYuNzk4aDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgNjk2Ljc5OGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek0zODYuNjYyIDU0MC40MzNoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNNTY2LjA2NyA1NDAuNDMzaDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTM4Ni42NjIgMzg0LjE3MWg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDM4NC4xNzFoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNMzg2LjY2MiAyMjcuODA2aDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgMjI3LjgwNmg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek0zODYuNjYyIDcxLjU0NGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDcxLjU0NGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU2MDE7IiBnbHlwaC1uYW1lPSJjaGVjay1tYXJrIiBkYXRhLXRhZ3M9ImNoZWNrLW1hcmsiIGQ9Ik00NTQuMzAxIDM5NS4yNTNsLTExNi45MTcgMTE2LjkxNy04NC43ODEtODQuNzA3IDIwMS42OTYtMjAxLjY5NyAzMTcuMDk3IDMxNy4wOTctODQuNzgxIDg0LjcwNnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODg4OyIgZ2x5cGgtbmFtZT0iYXJyb3ctdXAtY2lyY2xlIiBkYXRhLXRhZ3M9ImFycm93LXVwLWNpcmNsZSIgZD0iTTUxMy4zNDQgNjg5LjA2OGMtMTQ4LjYxNiAwLTI2NC43MjItMTIwLjc1LTI2MC4wNzctMjY5LjM2NyAwLTEyNS4zOTUgODguMjQxLTIzMi4yMTIgMjA4Ljk5MS0yNTUuNDM0djIxMy42MzZoLTkyLjg4NWMtMTMuOTMzIDAtMTMuOTMzIDkuMjg4LTkuMjg4IDE4LjU3N2wxMzkuMzI3IDE3MS44MzhjNC42NDUgOS4yODggMTMuOTMzIDkuMjg4IDIzLjIyMSA0LjY0NSAwIDAgNC42NDUtNC42NDUgNC42NDUtNC42NDVsMTM5LjMyNy0xNzEuODM4YzkuMjg4LTkuMjg4IDQuNjQ1LTE4LjU3Ny05LjI4OC0xOC41NzdoLTkyLjg4NXYtMjEzLjYzNmMxNDMuOTcyIDMyLjUxIDIzMi4yMTIgMTcxLjgzOCAxOTkuNzAzIDMxNS44MDgtMjMuMjIxIDEyMC43NS0xMzAuMDM5IDIwNC4zNDctMjUwLjc4OSAyMDguOTkxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4ODk7IiBnbHlwaC1uYW1lPSJpbmZvLWNpcmNsZSIgZGF0YS10YWdzPSJpbmZvLWNpcmNsZSIgZD0iTTUxMiA2ODYuOTMzYy0xNDQuMDc3IDAtMjYwLjI2Ni0xMTYuMTkxLTI2MC4yNjYtMjYwLjI2NnMxMTYuMTkxLTI2MC4yNjYgMjYwLjI2Ni0yNjAuMjY2IDI2MC4yNjYgMTE2LjE5MSAyNjAuMjY2IDI2MC4yNjZ2MGMwIDEzOS40MjktMTE2LjE5MSAyNTUuNjE5LTI2MC4yNjYgMjYwLjI2NnpNNDcwLjE3MSA2MzUuODFoODguMzA1di02OS43MTRoLTg4LjMwNXY2OS43MTR6TTYwMC4zMDUgMjQ1LjQxaC0xODEuMjU3djUxLjEyM2g1MS4xMjN2MTYyLjY2NmgtNTEuMTIzdjUxLjEyM2gxMzkuNDI5di0yMTguNDM4aDQ2LjQ3N2wtNC42NDgtNDYuNDc3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OGE7IiBnbHlwaC1uYW1lPSJzZWFyY2giIGRhdGEtdGFncz0ic2VhcmNoIiBkPSJNNzY5LjI2MyAyMjMuMTYzbC0xMTAuNjggMTEwLjY4YzcxLjk0MyA5OS42MTIgNDkuODA2IDI0My40OTQtNDkuODA2IDMxNS40MzdzLTI0My40OTQgNDQuMjctMzE1LjQzNy01NS4zMzljLTcxLjk0My05OS42MTItNDkuODA2LTI0My40OTQgNDkuODA2LTMxNS40MzcgNzcuNDc1LTU1LjMzOSAxODIuNjIzLTU1LjMzOSAyNjAuMDk4IDBsMTEwLjY4LTExMC42OGM1LjUzMy01LjUzMyAxMS4wNjgtNS41MzMgMTYuNjAxIDAgMCAwIDAgMCAwIDBsMzMuMjA1IDMzLjIwNWMxMS4wNjggNS41MzMgMTEuMDY4IDE2LjYwMSA1LjUzMyAyMi4xMzcgMCAwIDAgMCAwIDB6TTQ3NS45NiAzMDAuNjM4Yy04OC41NDQgMC0xNjAuNDg2IDcxLjk0My0xNjAuNDg2IDE2MC40ODZzNzEuOTQzIDE2MC40ODYgMTYwLjQ4NiAxNjAuNDg2IDE2MC40ODYtNzEuOTQzIDE2MC40ODYtMTYwLjQ4Ni03MS45NDMtMTYwLjQ4Ni0xNjAuNDg2LTE2MC40ODZ2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODhjOyIgZ2x5cGgtbmFtZT0iZnVsbHNjcmVlbiIgZGF0YS10YWdzPSJmdWxsc2NyZWVuIiBkPSJNMzU3LjA3NSA1NzIuOTgzYzUuNzM3IDUuNzM3IDAgNS43MzctNS43MzcgNS43MzdsLTEwMy4yODQgMTEuNDc2Yy01LjczNyA1LjczNy0xMS40NzYgMC0xMS40NzYtNS43MzdsMTEuNDc2LTEwOS4wMjFjMC01LjczNyA1LjczNy01LjczNyA1LjczNy01LjczN2wxMDMuMjg0IDEwMy4yODR6TTI4Mi40ODQgNTA5Ljg2NWw2My4xMTgtNjMuMTE4YzUuNzM3LTUuNzM3IDExLjQ3Ni01LjczNyAxNy4yMTMgMGwyMi45NTMgMjIuOTUzYzUuNzM3IDUuNzM3IDUuNzM3IDExLjQ3NiAwIDE3LjIxM2wtNjMuMTE4IDU3LjM3OS00MC4xNjYtMzQuNDI5ek03NzUuOTQ1IDQ2OS42OTljNS43MzctNS43MzcgNS43MzcgMCA1LjczNyA1LjczN2wxMS40NzYgMTA5LjAyMWMwIDUuNzM3LTUuNzM3IDExLjQ3Ni0xMS40NzYgMTEuNDc2bC0xMDkuMDIxLTExLjQ3NmMtNS43MzcgMC01LjczNy01LjczNy01LjczNy01LjczN2wxMDkuMDIxLTEwOS4wMjF6TTcxMi44MyA1NDQuMjk0bC02My4xMTgtNjMuMTE4Yy01LjczNy01LjczNy01LjczNy0xMS40NzYgMC0xNy4yMTNsMjIuOTUzLTIyLjk1M2M1LjczNy01LjczNyAxMS40NzYtNS43MzcgMTcuMjEzIDBsNjMuMTE4IDYzLjExOC00MC4xNjYgNDAuMTY2ek02NzguNDAxIDI2My4xMzRjLTUuNzM3LTUuNzM3IDAtNS43MzcgNS43MzctNS43MzdsMTA5LjAyMS0xMS40NzZjNS43MzcgMCAxMS40NzYgNS43MzcgMTEuNDc2IDExLjQ3NmwtMTcuMjEzIDEwMy4yODRjMCA1LjczNy01LjczNyA1LjczNy01LjczNyA1LjczN2wtMTAzLjI4NC0xMDMuMjg0ek03NDcuMjU2IDMzMS45ODlsLTYzLjExOCA2My4xMThjLTUuNzM3IDUuNzM3LTExLjQ3NiA1LjczNy0xNy4yMTMgMGwtMjIuOTUzLTIyLjk1M2MtNS43MzctNS43MzctNS43MzctMTEuNDc2IDAtMTcuMjEzbDYzLjExOC02My4xMTggNDAuMTY2IDQwLjE2NnpNMjUzLjc5NCAzNjYuNDE4Yy01LjczNyA1LjczNy01LjczNyAwLTUuNzM3LTUuNzM3bC0xMS40NzYtMTA5LjAyMWMwLTUuNzM3IDUuNzM3LTExLjQ3NiAxMS40NzYtMTEuNDc2bDEwOS4wMjEgMTEuNDc2YzUuNzM3IDAgNS43MzcgNS43MzcgNS43MzcgNS43MzdsLTEwOS4wMjEgMTA5LjAyMXpNMzIyLjY0OSAyOTEuODI0bDYzLjExOCA2My4xMThjNS43MzcgNS43MzcgNS43MzcgMTEuNDc2IDAgMTcuMjEzbC0yMi45NTMgMjIuOTUzYy01LjczNyA1LjczNy0xMS40NzYgNS43MzctMTcuMjEzIDBsLTYzLjExOC02My4xMTggNDAuMTY2LTQwLjE2NnpNMTUwLjUxIDY3Ni4yNjd2LTQ5OS4yMDFoNzIyLjk3OXY0OTkuMjAxaC03MjIuOTc5ek04MzMuMzI0IDIxNy4yMzJoLTYzNi45MTF2NDEzLjEzaDYzNi45MTF2LTQxMy4xM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODhlOyIgZ2x5cGgtbmFtZT0iaDVwIiBkYXRhLXRhZ3M9Img1cCIgZD0iTTg5MS40MDYgNTc0LjUyNGMtMjIuMzE5IDE2LjczOC01MC4yMTYgMjcuODk3LTg5LjI3MyAyNy44OTdoLTEzOS40ODd2LTY2Ljk1NGgtMTU2LjIyNWwtMTEuMTU5LTU1Ljc5NWMxMS4xNTkgNS41NzkgMjcuODk3IDExLjE1OSAzOS4wNTcgMTEuMTU5czIyLjMxOSAwIDMzLjQ3NiAwYzMzLjQ3NiAwIDY2Ljk1NC0xMS4xNTkgODkuMjczLTMzLjQ3NnMzMy40NzYtNTAuMjE2IDMzLjQ3Ni04My42OTJjMC0yMi4zMTktNS41NzktNDQuNjM1LTE2LjczOC02Ni45NTRzLTI3Ljg5Ny0zOS4wNTctNTAuMjE2LTUwLjIxNmMtNS41NzktNS41NzktMTYuNzM4IDAtMjIuMzE5LTExLjE1OWgxMTcuMTd2MTMzLjkwOGg2Ni45NTRjNDQuNjM1IDAgNzguMTEzIDExLjE1OSAxMDAuNDMgMjcuODk3IDIyLjMxOSAyMi4zMTkgMzMuNDc2IDUwLjIxNiAzMy40NzYgODMuNjkyIDAgMzkuMDU3LTExLjE1OSA2Ni45NTQtMjcuODk3IDgzLjY5MnYwek03OTYuNTU1IDQ2Mi45MzVjLTExLjE1OS01LjU3OS0yMi4zMTktMTEuMTU5LTQ0LjYzNS0xMS4xNTloLTMzLjQ3NnY4My42OTJoMzkuMDU3YzIyLjMxOSAwIDMzLjQ3Ni01LjU3OSA0NC42MzUtMTEuMTU5IDUuNTc5LTUuNTc5IDExLjE1OS0xNi43MzggMTEuMTU5LTI3Ljg5NyAwLTE2LjczOC01LjU3OS0yNy44OTctMTYuNzM4LTMzLjQ3NnYwek01MjMuMTYgNDIzLjg3OGMtMTYuNzM4IDAtMzMuNDc2LTExLjE1OS00NC42MzUtMjcuODk3bC05NC44NTEgMTYuNzM4IDQ0LjYzNSAxOTUuMjgxaC05NC44NTF2LTE1MC42NDZoLTExNy4xN3YxNTAuNjQ2aC0xMTEuNTg5di0zNjIuNjY3aDExMS41ODl2MTMzLjkwOGgxMTcuMTd2LTEzMy45MDhoMTM5LjQ4N2MtMTYuNzM4IDExLjE1OS0zMy40NzYgMTEuMTU5LTQ0LjYzNSAyMi4zMTlzLTIyLjMxOSAyMi4zMTktMjcuODk3IDMzLjQ3NmMtNS41NzkgMTEuMTU5LTExLjE1OSAyMi4zMTktMTYuNzM4IDM5LjA1N2w5NC44NTEgMTYuNzM4YzUuNTc5LTE2LjczOCAyMi4zMTktMjcuODk3IDQ0LjYzNS0yNy44OTcgMjcuODk3IDAgNTAuMjE2IDIyLjMxOSA1MC4yMTYgNTAuMjE2IDAgMjIuMzE5LTIyLjMxOSA0NC42MzUtNTAuMjE2IDQ0LjYzNXYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OGY7IiBnbHlwaC1uYW1lPSJyaWdodHMtb2YtdXNlIiBkYXRhLXRhZ3M9InJpZ2h0cy1vZi11c2UiIGQ9Ik04NzguMjc3IDQxNC4zNWMwLTUuOTA3IDAtNS45MDcgMC01LjkwNy0yMy42MzEtMjMuNjMxLTQ3LjI2MS0zNS40NDgtNzYuNzk5LTQxLjM1NS0xMS44MTMgMC0yMy42MzEtNS45MDctMzUuNDQ4LTUuOTA3cy0xNy43MjQgMC0yOS41MzcgMGMwIDAtNS45MDcgMC01LjkwNyA1LjkwNy02NC45ODUgNTkuMDc5LTEzNS44NzcgMTE4LjE1My0yMDAuODYzIDE4My4xMzkgMCAwLTUuOTA3IDAtNS45MDcgMC0yMy42MzEtNS45MDctNDcuMjYxLTExLjgxMy03MC44OTItMTcuNzI0cy01My4xNjggMC03Ni43OTkgMTEuODEzYy0xNy43MjQgMTEuODEzLTIzLjYzMSAxNy43MjQtMjkuNTM3IDM1LjQ0OC01LjkwNyA1LjkwNyAwIDIzLjYzMSAxMS44MTMgMjMuNjMxIDQxLjM1NSAxMS44MTMgODguNjE2IDI5LjUzNyAxMjkuOTcxIDQ3LjI2MSAxMS44MTMgNS45MDcgMjkuNTM3IDUuOTA3IDQxLjM1NSA1LjkwNyA1LjkwNyAwIDExLjgxMy01LjkwNyAxMS44MTMtNS45MDcgNDEuMzU1LTE3LjcyNCA4Mi43MDktMjkuNTM3IDEyNC4wNjAtNDcuMjYxIDAgMCA1LjkwNyAwIDUuOTA3IDAgMjkuNTM3IDUuOTA3IDY0Ljk4NSAxNy43MjQgOTQuNTIzIDIzLjYzMSA1LjkwNyAwIDUuOTA3IDAgNS45MDcgMGwxMDYuMzQtMjEyLjY3NnpNMjY5Ljc4NiA0MjAuMjZjMTcuNzI0IDExLjgxMyAzNS40NDggNS45MDcgNTMuMTY4LTExLjgxMyAxMS44MTMtMTEuODEzIDExLjgxMy0yOS41MzcgNS45MDctNDcuMjYxIDE3LjcyNCA1LjkwNyAzNS40NDgtNS45MDcgNDEuMzU1LTE3LjcyNCAxMS44MTMtMTcuNzI0IDUuOTA3LTM1LjQ0OC01LjkwNy00Ny4yNjEgNS45MDcgMCAxMS44MTMgMCAxNy43MjQgMCAxMS44MTMtNS45MDcgMjMuNjMxLTExLjgxMyAyOS41MzctMjkuNTM3czAtMjkuNTM3LTUuOTA3LTM1LjQ0OGMtNS45MDctNS45MDctMTEuODEzLTExLjgxMy0xNy43MjQtMTcuNzI0cy0xMS44MTMtMTEuODEzLTE3LjcyNC0xNy43MjQtMzUuNDQ4LTE3LjcyNC01My4xNjggMGMtMjkuNTM3IDI5LjUzNy01My4xNjggNjQuOTg1LTgyLjcwOSA5NC41MjMtMTcuNzI0IDIzLjYzMS0zNS40NDggNDEuMzU1LTQ3LjI2MSA2NC45ODUtNS45MDcgMTEuODEzLTExLjgxMyAxNy43MjQtMTEuODEzIDI5LjUzNyAwIDUuOTA3IDAgMTcuNzI0IDUuOTA3IDIzLjYzMSAxMS44MTMgMTEuODEzIDE3LjcyNCAxNy43MjQgMjkuNTM3IDI5LjUzNyAxNy43MjQgMTcuNzI0IDQ3LjI2MSAxMS44MTMgNjQuOTg1LTUuOTA3LTUuOTA3IDAtNS45MDctNS45MDctNS45MDctMTEuODEzdjB6TTQxNy40NzcgMjEzLjQ5MWwyOS41MzctMjkuNTM3YzE3LjcyNC0xNy43MjQgNDcuMjYxLTExLjgxMyA1OS4wNzkgNS45MDdsLTUuOTA3IDUuOTA3Yy0yMy42MzEgMjMuNjMxLTQ3LjI2MSA0Ny4yNjEtNzAuODkyIDcwLjg5Mi01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxMS44MTNzNS45MDcgNS45MDcgMTEuODEzIDExLjgxM2M1LjkwNyAwIDExLjgxMyAwIDExLjgxMy01LjkwNyAxMS44MTMtMTEuODEzIDI5LjUzNy0yOS41MzcgNDcuMjYxLTQ3LjI2MSAxMS44MTMtMTEuODEzIDI5LjUzNy0yOS41MzcgNDcuMjYxLTQ3LjI2MSA1LjkwNy0xMS44MTMgMTcuNzI0LTExLjgxMyAyOS41MzctMTEuODEzIDExLjgxMyA1LjkwNyAyMy42MzEgMTEuODEzIDI5LjUzNyAyMy42MzEgMCA1LjkwNyAwIDUuOTA3IDAgNS45MDctNDEuMzU1IDQxLjM1NS04OC42MTYgODIuNzA5LTEyOS45NzEgMTI5Ljk3MS01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxMS44MTMgMCAxMS44MTMgMTEuODEzIDExLjgxMyAyMy42MzEgNS45MDcgMCAwIDUuOTA3IDAgNS45MDctNS45MDcgNDEuMzU1LTQxLjM1NSA4OC42MTYtODguNjE2IDEyOS45NzEtMTI5Ljk3MSA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxNy43MjQgMCAzNS40NDggMTcuNzI0IDM1LjQ0OCAzNS40NDggMCA1LjkwNyAwIDUuOTA3IDAgNS45MDctNDcuMjYxIDQ3LjI2MS0xMDAuNDI5IDEwMC40MjktMTQ3LjY5MSAxNDcuNjkxLTUuOTA3IDUuOTA3LTUuOTA3IDUuOTA3LTUuOTA3IDExLjgxM3M1LjkwNyAxMS44MTMgNS45MDcgMTEuODEzYzUuOTA3IDAgMTEuODEzIDAgMTEuODEzLTUuOTA3IDUuOTA3LTUuOTA3IDUuOTA3LTUuOTA3IDExLjgxMy0xMS44MTMgMzUuNDQ4LTM1LjQ0OCA3MC44OTItNzAuODkyIDEwNi4zNC0xMDYuMzQgMTEuODEzLTExLjgxMyAyMy42MzEtMjMuNjMxIDI5LjUzNy0yOS41MzcgMCAwIDUuOTA3LTUuOTA3IDUuOTA3IDAgMjMuNjMxIDUuOTA3IDM1LjQ0OCAyOS41MzcgMjkuNTM3IDUzLjE2OGgzNS40NDhjMCAwIDAgMCAwIDAgMC01LjkwNyAwLTE3LjcyNCAwLTIzLjYzMS01LjkwNy0yOS41MzctMjMuNjMxLTQ3LjI2MS01My4xNjgtNTkuMDc5IDAgMC01LjkwNyAwLTUuOTA3LTUuOTA3LTExLjgxMy0yOS41MzctMzUuNDQ4LTUzLjE2OC02NC45ODUtNTMuMTY4LTUuOTA3IDAtNS45MDcgMC01LjkwNy01LjkwNy0xNy43MjQtMzUuNDQ4LTU5LjA3OS00Ny4yNjEtODguNjE2LTM1LjQ0OC01LjkwNyAwLTExLjgxMyA1LjkwNy0xMS44MTMgNS45MDctNS45MDctNS45MDctMTEuODEzLTExLjgxMy0yMy42MzEtMTcuNzI0LTI5LjUzNy0xMS44MTMtNTkuMDc5LTUuOTA3LTc2Ljc5OSAxMS44MTMtMTEuODEzIDExLjgxMy0xNy43MjQgMTcuNzI0LTI5LjUzNyAyOS41MzcgMTcuNzI0IDIzLjYzMSAyMy42MzEgMjkuNTM3IDI5LjUzNyA0MS4zNTV2MCAwek0yNTIuMDYyIDcyNy40NTljMjkuNTM3LTExLjgxMyA2NC45ODUtMjMuNjMxIDk0LjUyMy0yOS41MzcgMzUuNDQ4LTExLjgxMyA2NC45ODUtMjMuNjMxIDEwMC40MjktMjkuNTM3IDAgMCAwIDAgNS45MDcgMC0xNy43MjQtNS45MDctMzUuNDQ4LTExLjgxMy00Ny4yNjEtMTcuNzI0IDAgMC01LjkwNyAwLTUuOTA3IDAtNDcuMjYxIDExLjgxMy05NC41MjMgMjMuNjMxLTEzNS44NzcgNDEuMzU1LTUuOTA3IDAtNS45MDcgMC01LjkwNyAwbC03Ni43OTktMTgzLjEzOWMwLTExLjgxMyA1LjkwNy0xNy43MjQgMTEuODEzLTIzLjYzMXM1LjkwNy01LjkwNyA1LjkwNy0xMS44MTNjLTUuOTA3LTUuOTA3LTExLjgxMy0xNy43MjQtMjMuNjMxLTIzLjYzMS0xNy43MjQgMTcuNzI0LTI5LjUzNyAzNS40NDgtMjkuNTM3IDY0Ljk4NWw4OC42MTYgMjEyLjY3NmMtNS45MDctMTEuODEzIDUuOTA3IDUuOTA3IDE3LjcyNCAwdjB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MDsiIGdseXBoLW5hbWU9ImRlbGV0ZS1jaXJjbGUiIGRhdGEtdGFncz0iZGVsZXRlLWNpcmNsZSIgZD0iTTUxMiA2ODYuOTMzYy0xNDcuMTA3IDAtMjYwLjI2Ni0xMTguODE3LTI2MC4yNjYtMjYwLjI2NnMxMTguODE3LTI2MC4yNjYgMjYwLjI2Ni0yNjAuMjY2IDI2MC4yNjYgMTE4LjgxNyAyNjAuMjY2IDI2MC4yNjYtMTEzLjE1OCAyNjAuMjY2LTI2MC4yNjYgMjYwLjI2NnpNNjUzLjQ0OSAzNDcuNDU1YzUuNjU5LTUuNjU5IDUuNjU5LTE2Ljk3MyAwLTI4LjI5bC0zMy45NDktMzMuOTQ5Yy01LjY1OS01LjY1OS0xNi45NzMtNS42NTktMjguMjkgMGwtNzkuMjEyIDc5LjIxMi03OS4yMTItNzkuMjEyYy01LjY1OS01LjY1OS0xNi45NzMtNS42NTktMjguMjkgMGwtMzMuOTQ5IDMzLjk0OWMtNS42NTkgNS42NTktNS42NTkgMTYuOTczIDAgMjguMjlsODQuODcxIDc5LjIxMi03OS4yMTIgNzkuMjEyYy01LjY1OSA1LjY1OS01LjY1OSAxNi45NzMgMCAyOC4yOWwzMy45NDkgMzMuOTQ5YzUuNjU5IDUuNjU5IDE2Ljk3MyA1LjY1OSAyOC4yOSAwbDczLjU1NC04NC44NzEgNzkuMjEyIDc5LjIxMmM1LjY1OSA1LjY1OSAxNi45NzMgNS42NTkgMjguMjkgMGwzMy45NDktMzMuOTQ5YzUuNjU5LTUuNjU5IDUuNjU5LTE2Ljk3MyAwLTI4LjI5bC03OS4yMTItNzMuNTU0IDc5LjIxMi03OS4yMTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MTsiIGdseXBoLW5hbWU9IndpbmRvdyIgZGF0YS10YWdzPSJ3aW5kb3ciIGQ9Ik0xODYuODIxIDU0OS4zMTljLTUuNzA0LTUuNzA0IDAtNS43MDQgNS43MDQtNS43MDRsMTA4LjM5NC0xMS40MWM1LjcwNCAwIDExLjQxIDUuNzA0IDExLjQxIDExLjQxbC0xNy4xMTQgMTAyLjY4N2MwIDUuNzA0LTUuNzA0IDUuNzA0LTUuNzA0IDUuNzA0bC0xMDIuNjg3LTEwMi42ODd6TTI1NS4yOCA2MTIuMDc0bC02Mi43NTIgNjIuNzUyYy01LjcwNCA1LjcwNC0xMS40MSA1LjcwNC0xNy4xMTQgMGwtMTcuMTE0LTIyLjgyMWMtNS43MDQtNS43MDQtNS43MDQtMTEuNDEgMC0xNy4xMTRsNjIuNzUyLTYyLjc1MiAzNC4yMjggMzkuOTM1ek03MzQuNDkgNjQ2LjMwMmMtNS43MDQgNS43MDQtNS43MDQgMC01LjcwNC01LjcwNGwtMTEuNDEtMTA4LjM5NGMwLTUuNzA0IDUuNzA0LTExLjQxIDExLjQxLTExLjQxbDEwOC4zOTQgMTEuNDFjNS43MDQgMCA1LjcwNCA1LjcwNCA1LjcwNCA1LjcwNGwtMTA4LjM5NCAxMDguMzk0ek03OTcuMjQyIDU3Mi4xNGw2Mi43NTIgNjIuNzUyYzUuNzA0IDUuNzA0IDUuNzA0IDExLjQxIDAgMTcuMTE0bC0yMi44MjEgMjIuODIxYy01LjcwNCA1LjcwNC0xMS40MSA1LjcwNC0xNy4xMTQgMGwtNjIuNzUyLTYyLjc1MiAzOS45MzUtMzkuOTM1ek04MzEuNDczIDMwOS43MTdjNS43MDQgNS43MDQgMCA1LjcwNC01LjcwNCA1LjcwNGwtMTAyLjY4NyAxNy4xMTRjLTUuNzA0IDAtMTEuNDEtNS43MDQtMTEuNDEtMTEuNDFsMTEuNDEtMTA4LjM5NGMwLTUuNzA0IDUuNzA0LTUuNzA0IDUuNzA0LTUuNzA0bDEwMi42ODcgMTAyLjY4N3pNNzYzLjAxNCAyNDYuOTYybDYyLjc1Mi02Mi43NTJjNS43MDQtNS43MDQgMTEuNDEtNS43MDQgMTcuMTE0IDBsMjIuODIxIDIyLjgyMWM1LjcwNCA1LjcwNCA1LjcwNCAxMS40MSAwIDE3LjExNGwtNjIuNzUyIDYyLjc1Mi0zOS45MzUtMzkuOTM1ek0yODMuODA0IDIxMi43MzRjNS43MDQtNS43MDQgNS43MDQgMCA1LjcwNCA1LjcwNGwxMS40MSAxMDguMzk0YzAgNS43MDQtNS43MDQgMTEuNDEtMTEuNDEgMTEuNDFsLTEwOC4zOTQtMTEuNDFjLTUuNzA0IDAtNS43MDQtNS43MDQtNS43MDQtNS43MDRsMTA4LjM5NC0xMDguMzk0ek0yMjEuMDUyIDI4MS4xOTNsLTYyLjc1Mi02Mi43NTJjLTUuNzA0LTUuNzA0LTUuNzA0LTExLjQxIDAtMTcuMTE0bDIyLjgyMS0yMi44MjFjNS43MDQtNS43MDQgMTEuNDEtNS43MDQgMTcuMTE0IDBsNjIuNzUyIDYyLjc1Mi0zOS45MzUgMzkuOTM1ek0zMzUuMTQ5IDU1NS4wMjZ2LTIzOS42MDVoMzQ3Ljk5OHYyMzkuNjA1aC0zNDcuOTk4ek02MzcuNTA3IDM1NS4zNTVoLTI2Mi40MjR2MTU0LjAzMmgyNjIuNDI0di0xNTQuMDMyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OTI7IiBnbHlwaC1uYW1lPSJjb2RlIiBkYXRhLXRhZ3M9ImNvZGUiIGQ9Ik00NDYuNTIzIDMxMS4zMDNjNi4yMzUtNi4yMzUgNi4yMzUtMTIuNDcyIDYuMjM1LTE4LjcwN3YtNjIuMzU5YzAtNi4yMzUtNi4yMzUtNi4yMzUtNi4yMzUtNi4yMzVsLTIzMC43MjggMTU1Ljg5N2MtNi4yMzUgNi4yMzUtNi4yMzUgMTIuNDcyLTYuMjM1IDE4LjcwN3Y0OS44ODZjMCA2LjIzNSA2LjIzNSAxMi40NzIgNi4yMzUgMTguNzA3bDIzMC43MjggMTU1Ljg5N2M2LjIzNSA2LjIzNSA2LjIzNSAwIDYuMjM1LTYuMjM1di02Mi4zNTljMC02LjIzNS02LjIzNS0xMi40NzItNi4yMzUtMTguNzA3bC0xNjIuMTM0LTExMi4yNDVjLTYuMjM1LTYuMjM1LTYuMjM1LTYuMjM1IDAtMTIuNDcybDE2Mi4xMzQtOTkuNzc2ek03MzMuMzc1IDQxNy4zMTNjNi4yMzUgNi4yMzUgNi4yMzUgNi4yMzUgMCAxMi40NzJsLTE1NS44OTcgMTEyLjI0NWMtNi4yMzUgNi4yMzUtNi4yMzUgMTIuNDcyLTYuMjM1IDE4LjcwN3Y2Mi4zNTljMCA2LjIzNSA2LjIzNSA2LjIzNSA2LjIzNSA2LjIzNWwyMzAuNzI4LTE1NS44OTdjNi4yMzUtNi4yMzUgNi4yMzUtMTIuNDcyIDYuMjM1LTE4LjcwN3YtNDkuODg2YzAtNi4yMzUtNi4yMzUtMTIuNDcyLTYuMjM1LTE4LjcwN2wtMjMwLjcyOC0xNTUuODk3Yy02LjIzNS02LjIzNS02LjIzNSAwLTYuMjM1IDYuMjM1djYyLjM1OWMwIDYuMjM1IDYuMjM1IDEyLjQ3MiA2LjIzNSAxOC43MDdsMTU1Ljg5NyA5OS43NzZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MzsiIGdseXBoLW5hbWU9ImRvd25sb2FkIiBkYXRhLXRhZ3M9ImRvd25sb2FkIiBkPSJNMzUzLjA1MCA1MTIuMDI3Yy0xMS43NzMgMC0xNy42Ni01Ljg4Ny01Ljg4Ny0xNy42NmwxNTMuMDU5LTE4OC4zODJjNS44ODctMTEuNzczIDIzLjU0Ny0xMS43NzMgMjkuNDMzIDBsMTUzLjA1OSAxODguMzgyYzUuODg3IDExLjc3MyA1Ljg4NyAxNy42Ni01Ljg4NyAxNy42NmgtMzIzLjc4MnpNNTcwLjg2NSA1MDAuMjUzdjEzNS4zOTljMCAxMS43NzMtMTEuNzczIDIzLjU0Ny0yMy41NDcgMjMuNTQ3aC03MC42NDNjLTExLjc3MyAwLTIzLjU0Ny0xMS43NzMtMjMuNTQ3LTIzLjU0N3YtMTQxLjI4NmgxMTcuNzM5ek02NDcuMzk1IDM2NC44NTRjLTUuODg3IDAtMTcuNjYtNS44ODctMjMuNTQ3LTExLjc3M2wtNzYuNTMtOTQuMTljLTUuODg3LTUuODg3LTE3LjY2LTE3LjY2LTIzLjU0Ny0yMy41NDcgMCAwLTUuODg3LTUuODg3LTExLjc3My01Ljg4N3MtMTcuNjYgMTEuNzczLTE3LjY2IDExLjc3M2MtNS44ODcgNS44ODctMTcuNjYgMTcuNjYtMjMuNTQ3IDIzLjU0N2wtNzYuNTMgOTQuMTljLTUuODg3IDUuODg3LTE3LjY2IDExLjc3My0yMy41NDcgMTEuNzczaC0xMjMuNjI2Yy01Ljg4NyAwLTE3LjY2LTUuODg3LTE3LjY2LTE3LjY2di0xNDEuMjg2YzAtNS44ODcgNS44ODctMTcuNjYgMTcuNjYtMTcuNjZoNTI5LjgyNGM1Ljg4NyAwIDE3LjY2IDUuODg3IDE3LjY2IDE3LjY2djE0MS4yODZjMCA1Ljg4Ny01Ljg4NyAxNy42Ni0xNy42NiAxNy42NmwtMTI5LjUxMy01Ljg4N3pNMzAwLjA2NyAyNTMuMDA0Yy0xNy42NiAwLTI5LjQzMyAxMS43NzMtMjkuNDMzIDI5LjQzM3MxMS43NzMgMjkuNDMzIDI5LjQzMyAyOS40MzNjMTcuNjYgMCAyOS40MzMtMTEuNzczIDI5LjQzMy0yOS40MzNzLTExLjc3My0yOS40MzMtMjkuNDMzLTI5LjQzM3YweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OTQ7IiBnbHlwaC1uYW1lPSJkZWxldGUiIGRhdGEtdGFncz0iZGVsZXRlIiBkPSJNNjE1LjExMSA0MjYuNjY3bDEzNC4wNDUgMTM0LjA0NWMxMC4zMTEgMTAuMzExIDEwLjMxMSAzMC45MzQgMCA0MS4yNDVsLTYxLjg2NiA2MS44NjZjLTEwLjMxMSAxMC4zMTEtMzAuOTM0IDEwLjMxMS00MS4yNDUgMGwtMTM0LjA0NS0xMzQuMDQ1LTEzNC4wNDUgMTM0LjA0NWMtMTAuMzExIDEwLjMxMS0zMC45MzQgMTAuMzExLTQxLjI0NSAwbC02MS44NjYtNjEuODY2Yy0xMC4zMTEtMTAuMzExLTEwLjMxMS0zMC45MzQgMC00MS4yNDVsMTM0LjA0NS0xMzQuMDQ1LTEzNC4wNDUtMTM0LjA0NWMtMTAuMzExLTEwLjMxMS0xMC4zMTEtMzAuOTM0IDAtNDEuMjQ1bDYxLjg2Ni02MS44NjZjMTAuMzExLTEwLjMxMSAzMC45MzQtMTAuMzExIDQxLjI0NSAwbDEzNC4wNDUgMTM0LjA0NSAxMzQuMDQ1LTEzNC4wNDVjMTAuMzExLTEwLjMxMSAzMC45MzQtMTAuMzExIDQxLjI0NSAwbDYxLjg2NiA2MS44NjZjMTAuMzExIDEwLjMxMSAxMC4zMTEgMzAuOTM0IDAgNDEuMjQ1bC0xMzQuMDQ1IDEzNC4wNDV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMDsiIGdseXBoLW5hbWU9ImVkaXQtaW1hZ2UiIGRhdGEtdGFncz0iZWRpdC1pbWFnZSIgZD0iTTMwMC4zMzYgNzQ5LjY2NGM2OS4wMTggMjMuMTQyIDEzMy4zMjUgMTQuMjM0IDE4OS4xMzMtMzMuMjggNTYuNjI3LTQ4LjEyOCA3Ny42MTktMTEwLjU5MiA2My4xODEtMTgzLjgwOC0yLjM1NS0xMi4xODYgMC4zMDctMTkuNDU2IDguNzA0LTI3Ljg1MyA5My45MDEtOTMuMzg5IDE1Ni43NzQtMTU2LjQ2NyAyNTAuNDctMjUwLjE2MyA1LjQyNy01LjQyNyAxMC45NTctMTAuODU0IDE1LjY2Ny0xNi44OTYgMzkuNDI0LTUwLjI3OCAxNi43OTQtMTI0LjAwNi00NC4yMzctMTQyLjAyOS0zNi45NjYtMTAuOTU3LTY4LjQwMyAwLTk1LjMzNCAyNy4wMzQtOTUuNjQyIDk2LjA1MS0xNjAuOTczIDE2MC45NzMtMjU2LjYxNCAyNTcuMDI0LTYuOTYzIDYuOTYzLTEyLjggOC45MDktMjIuNjMgNi43NTgtMTE3Ljc2LTI2LjMxNy0yMjkuMTcxIDYwLjgyNi0yMzEuNzMxIDE4MS40NTMtMC42MTQgMjYuNDE5IDMuNTg0IDUyLjMyNiAxNS45NzQgNzcuOTI2IDM0LjgxNi0zNC44MTYgNjguNTA2LTY3Ljc4OSAxMDEuMjc0LTEwMS43ODYgMTAuNDQ1LTEwLjc1MiAyMC45OTItMTUuMzYgMzYuMDQ1LTE1LjM2IDE0LjY0MyAwIDI1LjE5IDMuODkxIDM0LjgxNiAxNC44NDggMTAuNzUyIDEyLjM5IDIzLjA0MCAyMy4zNDcgMzQuNjExIDM1LjAyMSAxNC4zMzYgMTQuNDM4IDE0LjMzNiA0Ni4wODAtMC4yMDUgNjAuNTE4LTM1LjEyMyAzNS4yMjYtNzAuMzQ5IDcwLjM0OS0xMDYuNTk4IDEwNi40OTYgMy44OTEgMi4yNTMgNS42MzIgMy40ODIgNy40NzUgNC4wOTZ6TTcwMy40ODUgMTkxLjU4NGMtMC40MS0yNC4yNjkgMjAuNjg1LTQ1LjQ2NiA0NC44NTEtNDUuMTU4IDIzLjc1NyAwLjQxIDQ0LjAzMiAyMC45OTIgNDMuOTMgNDQuNTQ0LTAuMTAyIDIzLjc1Ny0yMC4yNzUgNDQuMDMyLTQ0LjIzNyA0NC4xMzQtMjMuODU5IDAuMzA3LTQ0LjIzNy0xOS42NjEtNDQuNTQ0LTQzLjUyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDE7IiBnbHlwaC1uYW1lPSJob3VyZ2xhc3MiIGRhdGEtdGFncz0iaG91cmdsYXNzIiBkPSJNNzMzLjQxNCAxMTcuNDE5Yy0xNDcuNzYzIDAtMjk1LjUyNiAwLTQ0My4yOSAwIDAgMi4wNDggMC4xMDIgNC4wOTYgMCA2LjE0NC0wLjMwNyAxMy44MjQtMS4wMjQgMzIuNjY2LTAuOTIyIDQ2LjQ5IDAuNDEgMzkuNzMxIDYuODYxIDc4LjEzMSAxOS4wNDYgMTE1LjIgMTcuMjAzIDUyLjIyNCA0My43MjUgOTYuMjU2IDgxLjMwNiAxMzAuMzU1IDQuNTA2IDQuMDk2IDkuMjE2IDcuODg1IDEzLjcyMiAxMS43NzYtMC4yMDUgMC43MTctMC4zMDcgMS4xMjYtMC40MSAxLjIyOS0xLjMzMSAxLjIyOS0yLjc2NSAyLjM1NS00LjE5OCAzLjU4NC0yOC4wNTggMjIuNjMtNTAuNjg4IDUxLjQwNS02OC40MDMgODUuNjA2LTMwLjYxOCA1OS4wODUtNDMuNTIgMTIzLjU5Ny00MS4xNjUgMTkyLjYxNCAwLjIwNSA3LjE2OCAwLjYxNCAxOC4zMyAwLjkyMiAyNS40OTggMTQ3Ljc2MyAwIDI5NS41MjYgMCA0NDMuMjkgMCAwLjIwNS0xLjMzMSAwLjUxMi0yLjY2MiAwLjYxNC0zLjk5NCAyLjY2Mi0zNi45NjYgMS4yMjktNzcuNzIyLTUuOTM5LTExMy44NjktMTQuMzM2LTcyLjkwOS00NC41NDQtMTMzLjgzNy05NS4wMjctMTc5LjQwNS00LjA5Ni0zLjY4Ni04LjI5NC03LjA2Ni0xMi4zOS0xMC41NDcgMC4yMDUtMC43MTcgMC4zMDctMS4xMjYgMC41MTItMS4zMzEgMC44MTktMC43MTcgMS42MzgtMS40MzQgMi40NTgtMi4xNSA0Mi4xODktMzMuODk0IDcxLjY4LTc5Ljg3MiA5MC45MzEtMTM1Ljc4MiAxMS43NzYtMzQuMjAyIDE4LjYzNy02OS44MzcgMjAuMDcwLTEwNi43MDEgMC44MTktMTkuNzYzLTAuNjE0LTQ0Ljg1MS0xLjEyNi02NC43MTd6TTY4Ny40MzcgMTYwLjYzMmMwIDYuNTU0IDAuMjA1IDEyLjQ5MyAwIDE4LjQzMi0xLjMzMSAzNy41ODEtNy4yNyA3NC4xMzgtMTkuODY2IDEwOC43NDktMTcuOTIgNDkuNTYyLTQ1LjU2OCA4OC4yNjktODguNjc4IDEwOC42NDYtMi40NTggMS4xMjYtMi45NyAzLjA3Mi0yLjk3IDUuODM3IDAuMTAyIDE2LjY5MSAwLjEwMiAzMy40ODUgMCA1MC4xNzYgMCAzLjk5NCAxLjMzMSA1LjQyNyA0LjA5NiA2Ljk2MyA5LjExNCA1LjMyNSAxOC40MzIgMTAuMjQgMjYuODI5IDE2Ljg5NiAyOS42OTYgMjMuNTUyIDQ5LjE1MiA1Ni45MzQgNjIuMzYyIDk1Ljc0NCAxMC4zNDIgMzAuNDEzIDE1Ljc3IDYyLjI1OSAxNy44MTggOTQuODIyIDAuNjE0IDkuMTE0IDAuMTAyIDE4LjIyNyAwLjEwMiAyNy41NDYtMTE2LjYzNCAwLTIzMy41NzQgMC0zNTEuMDI3IDAgMC4zMDctOC43MDQgMC42MTQtMTYuOTk4IDEuMDI0LTI1LjM5NSAxLjk0Ni0zNy4yNzQgOC40OTktNzMuMjE2IDIxLjUwNC0xMDcuMjEzIDE4LjEyNS00Ny4xMDQgNDUuMjYxLTgzLjU1OCA4Ni41MjgtMTAzLjExNyAyLjI1My0xLjAyNCAyLjg2Ny0yLjY2MiAyLjg2Ny01LjQyNy0wLjEwMi0xNy4yMDMtMC4xMDItMzQuNTA5IDAtNTEuNzEyIDAtMy4wNzItMS4wMjQtNC41MDYtMy4yNzctNS42MzItNS42MzItMi44NjctMTEuMzY2LTUuNzM0LTE2LjY5MS05LjIxNi0zNC4zMDQtMjIuNzMzLTU2LjgzMi01Ny43NTQtNzEuOTg3LTEwMC4xNDctMTIuNDkzLTM1LjEyMy0xOC4xMjUtNzEuOTg3LTE5LjY2MS0xMDkuODc1LTAuMjA1LTUuMzI1IDAtMTAuNzUyIDAtMTYuMjgyIDExNy4zNSAwLjIwNSAyMzQuMTg5IDAuMjA1IDM1MS4wMjcgMC4yMDV6TTQxMC4zNDIgNTc5Ljk2YzY4LjA5NiAwIDEzNS4zNzMgMCAyMDMuNjc0IDAtMy43ODktNi41NTQtNy4xNjgtMTIuNTk1LTEwLjc1Mi0xOC4yMjctMTAuOTU3LTE2Ljk5OC0yNC4yNjktMzAuNjE4LTM5LjczMS00MS40NzJzLTI3Ljc1LTI1LjI5My0zMi43NjgtNDYuNTkyYy0xLjYzOC02Ljk2My0yLjc2NS0xNC4zMzYtMi44NjctMjEuNjA2LTAuMzA3LTE3LjIwMy0wLjIwNS0zNC40MDYgMC4zMDctNTEuNzEyIDAuNzE3LTI4LjA1OCAxMi40OTMtNDguOTQ3IDMyLjE1NC02Mi41NjYgNDMuMDA4LTMwLjAwMyA2NS44NDMtNzUuODc4IDc1Ljc3Ni0xMzIuNTA2IDAuMzA3LTEuNjM4IDAuMzA3LTMuMzc5IDAuNjE0LTUuNTMtODMuMTQ5IDAtMTY2LjA5MyAwLTI0OS4yNDIgMCAyLjY2MiAyMC42ODUgNy44ODUgNDAuMzQ2IDE1LjQ2MiA1OS4wODUgMTMuMzEyIDMyLjk3MyAzMi43NjggNTkuMTg3IDU5LjQ5NCA3Ny43MjIgMTYuNTg5IDExLjQ2OSAyOC4zNjUgMjcuOTU1IDMyLjM1OCA1MC45OTUgMC44MTkgNC44MTMgMS4zMzEgOS44MyAxLjQzNCAxNC43NDYgMC4xMDIgMTguNjM3IDAuNjE0IDM3LjI3NC0wLjIwNSA1NS44MDgtMS4xMjYgMjQuNjc4LTExLjk4MSA0My4yMTMtMjguNTcgNTcuMTM5LTkuMjE2IDcuNzgyLTE4Ljk0NCAxNC43NDYtMjcuNjQ4IDIzLjE0Mi0xMS45ODEgMTEuMTYyLTIxLjE5NyAyNS4zOTUtMjkuNDkxIDQxLjU3NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAyOyIgZ2x5cGgtbmFtZT0icGx1cy1pY29uIiBkYXRhLXRhZ3M9InBsdXMtaWNvbiIgZD0iTTc2Ny43ODcgMzkxLjg5M2MwLTE5LjMyMy0xNS42NjQtMzQuOTg3LTM0Ljk4Ny0zNC45ODdoLTE1MS4wNDB2LTE1MS40NjdjMC0xOS4zMjMtMTUuNjY0LTM0Ljk4Ny0zNC45ODctMzQuOTg3aC02OS41NDdjLTE5LjMyMyAwLTM0Ljk4NyAxNS42NjQtMzQuOTg3IDM0Ljk4N3YxNTEuNDY3aC0xNTEuNDY3Yy0xOS4zMjMgMC0zNC45ODcgMTUuNjY0LTM0Ljk4NyAzNC45ODd2NjkuNTQ3YzAgMTkuMzIzIDE1LjY2NCAzNC45ODcgMzQuOTg3IDM0Ljk4N2gxNTEuNDY3djE1MS40NjdjMCAxOS4zMjMgMTUuNjY0IDM0Ljk4NyAzNC45ODcgMzQuOTg3aDY5LjU0N2MxOS4zMjMgMCAzNC45ODctMTUuNjY0IDM0Ljk4Ny0zNC45ODd2LTE1MS40NjdoMTUxLjQ2N2MxOS4zMjMgMCAzNC45ODctMTUuNjY0IDM0Ljk4Ny0zNC45ODd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9InZpZGVvLXVwbG9hZC1pY29uIiBkYXRhLXRhZ3M9InZpZGVvLXVwbG9hZC1pY29uIiBkPSJNMzk1Ljg0OCAzODcuMjAxdi0xMjhjMC0yMS4zMzMgMjEuMzMzLTQyLjY2NyA0Mi42NjctNDIuNjY3aDEyOGMyMS4zMzMgMCA0Mi42NjcgMTcuMDY3IDQyLjY2NyA0Mi42Njd2MTI4YzAgMjEuMzMzLTE3LjA2NyA0Mi42NjctNDIuNjY3IDQyLjY2N2gtMTI4Yy0yMS4zMzMgMC00Mi42NjctMTcuMDY3LTQyLjY2Ny00Mi42Njd6TTc5Ni45MTUgNTU3Ljg2N2wtMTAyLjQgMTA2LjY2N2MtMTIuOCAxMi44LTM4LjQgMjEuMzMzLTU1LjQ2NyAyMS4zMzNoLTE0MC44bDIxLjMzMy00Mi42NjdoODkuNnYtMTM2LjUzM2MwLTE3LjA2NyAxMi44LTI5Ljg2NyAyOS44NjctMjkuODY3aDE0MC44di0zNDEuMzMzaC00MjYuNjY3djMyOC41MzNoLTQyLjY2N3YtMzQxLjMzM2MwLTE3LjA2NyAxMi44LTI5Ljg2NyAyOS44NjctMjkuODY3aDQ0OGMxNy4wNjcgMCAyOS44NjcgMTIuOCAyOS44NjcgMjkuODY3djM4NGM0LjI2NyAxNy4wNjctOC41MzMgMzguNC0yMS4zMzMgNTEuMnpNNjUxLjg0OCA1MTUuMjAxdjEyMy43MzNjNC4yNjcgMCAxMi44LTQuMjY3IDEyLjgtOC41MzNsMTAyLjQtMTAyLjRjNC4yNjctNC4yNjcgNC4yNjctOC41MzMgOC41MzMtMTIuOGgtMTIzLjczM3pNNzM3LjE4MSAyMjUuMDY3djE5Ni4yNjdjMCA0LjI2Ny00LjI2NyA4LjUzMy04LjUzMyA4LjUzM3MtOC41MzMgMC0xMi44LTQuMjY3bC04OS42LTg5LjZ2LTI5Ljg2N2w4OS42LTg5LjZjOC41MzMtNC4yNjcgOC41MzMgMCAxMi44IDAgNC4yNjcgNC4yNjcgOC41MzMgNC4yNjcgOC41MzMgOC41MzN6TTM2MS43MTUgNTMyLjI2N3YxMzYuNTMzbDU5LjczMy01OS43MzNjOC41MzMtOC41MzMgMTcuMDY3LTQuMjY3IDI1LjYgMGwxMi44IDEyLjhjOC41MzMgOC41MzMgOC41MzMgMTcuMDY3IDAgMjUuNmwtMTE1LjIgMTA2LjY2N2MtOC41MzMgOC41MzMtMTcuMDY3IDguNTMzLTIxLjMzMyAwbC0xMTUuMi0xMTAuOTMzYy00LjI2Ny04LjUzMy00LjI2Ny0xNy4wNjcgMC0yNS42bDEyLjgtMTIuOGM4LjUzMy04LjUzMyAxNy4wNjctOC41MzMgMjEuMzMzIDBsNTkuNzMzIDU5LjczM3YtMTM2LjUzM2MwLTguNTMzIDguNTMzLTE3LjA2NyAxNy4wNjctMTcuMDY3aDI1LjZjMCAwIDE3LjA2NyA4LjUzMyAxNy4wNjcgMjEuMzMzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDQ7IiBnbHlwaC1uYW1lPSJwbGF5LWljb24iIGRhdGEtdGFncz0icGxheS1pY29uIiBkPSJNMzc1LjQ0NCA2NjEuMzU3YzgxLjA2NyA0Ni45MzMgMTg3LjczMyA0Ni45MzMgMjczLjA2NyAwIDQyLjY2Ny0yNS42IDcyLjUzMy01NS40NjcgOTguMTMzLTk4LjEzMyA3Mi41MzMtMTI4IDI5Ljg2Ny0yOTQuNC05OC4xMzMtMzcxLjItMTI4LTcyLjUzMy0yOTQuNC0yOS44NjctMzcxLjIgOTguMTMzLTQ2LjkzMyA4MS4wNjctNDYuOTMzIDE4Ny43MzMgMCAyNzMuMDY3IDIxLjMzMyA0Mi42NjcgNTUuNDY3IDcyLjUzMyA5OC4xMzMgOTguMTMzek02NDQuMjQ0IDQwOS42MjNjMTIuOCA4LjUzMyAxMi44IDI5Ljg2NyAwIDM4LjRsLTE5MiAxMTAuOTMzYy04LjUzMyA0LjI2Ny0xMi44IDQuMjY3LTIxLjMzMyAwcy0xMi44LTEyLjgtMTIuOC0yMS4zMzN2LTIyNi4xMzNjMC04LjUzMyA0LjI2Ny0xNy4wNjcgMTIuOC0yMS4zMzNzMTcuMDY3LTQuMjY3IDIxLjMzMyAwbDE5MiAxMTkuNDY3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDU7IiBnbHlwaC1uYW1lPSJjb3B5IiBkYXRhLXRhZ3M9ImNvcHkiIGQ9Ik03MjIuMTMzIDYwMy44NjdoLTI0Ny43MzNjLTY1Ljg2NyAwLTExOS4yLTUzLjMzMy0xMTkuMi0xMTkuMnYtMjg4LjUzM2MwLTY1Ljg2NyA1My4zMzMtMTE5LjIgMTE5LjItMTE5LjJoMjQ3Ljg2N2M2NS44NjcgMCAxMTkuMiA1My4zMzMgMTE5LjIgMTE5LjJ2Mjg4LjUzM2MtMC4yNjcgNjUuODY3LTUzLjQ2NyAxMTkuMi0xMTkuMzMzIDExOS4yek03NzguNTMzIDE5OS4yYzAtMzEuMzMzLTI1LjA2Ny01Ni40LTU2LjQtNTYuNGgtMjQ3Ljg2N2MtMzEuMzMzIDAtNTYuNCAyNS4wNjctNTYuNCA1Ni40djI4NS40NjdjMCAzMS4zMzMgMjUuMDY3IDU2LjQgNTYuNCA1Ni40aDI0Ny43MzNjMzEuMzMzIDAgNTYuNC0yNS4wNjcgNTYuNC01Ni40di0yODUuNDY3ek0yNDUuMiAzNjguNjY3djI4OC41MzNjMCAzMS4zMzMgMjUuMDY3IDU2LjQgNTYuNCA1Ni40aDI0Ny43MzNjMzEuMzMzIDAgNTYuNC0yNS4wNjcgNTYuNC01Ni40di0xOC44aDYyLjY2N3YxOC44YzAgNjUuODY3LTUzLjMzMyAxMTkuMi0xMTkuMiAxMTkuMmgtMjQ3LjQ2N2MtNjUuODY3IDAtMTE5LjItNTMuMzMzLTExOS4yLTExOS4ydi0yODguNTMzYzAtNjUuODY3IDUzLjMzMy0xMTkuMiAxMTkuMi0xMTkuMmgxOC44djYyLjY2N2gtMTguOGMtMzEuNDY3LTMuMDY3LTU2LjUzMyAyMi01Ni41MzMgNTYuNTMzek02ODEuMiA0MDMuMmgtMTYzLjA2N2MtMTguOCAwLTMxLjMzMyAxMi41MzMtMzEuMzMzIDMxLjMzM3MxMi41MzMgMzEuMzMzIDMxLjMzMyAzMS4zMzNoMTYzLjA2N2MxOC44IDAgMzEuMzMzLTEyLjUzMyAzMS4zMzMtMzEuMzMzcy0xNS42LTMxLjMzMy0zMS4zMzMtMzEuMzMzek02ODEuMiAzMDkuMDY3aC0xNjMuMDY3Yy0xOC44IDAtMzEuMzMzIDEyLjUzMy0zMS4zMzMgMzEuMzMzczEyLjUzMyAzMS4zMzMgMzEuMzMzIDMxLjMzM2gxNjMuMDY3YzE4LjggMCAzMS4zMzMtMTIuNTMzIDMxLjMzMy0zMS4zMzNzLTE1LjYtMzEuMzMzLTMxLjMzMy0zMS4zMzN6TTY4MS4yIDIxNC45MzRoLTE2My4wNjdjLTE4LjggMC0zMS4zMzMgMTIuNTMzLTMxLjMzMyAzMS4zMzNzMTIuNTMzIDMxLjMzMyAzMS4zMzMgMzEuMzMzaDE2My4wNjdjMTguOCAwIDMxLjMzMy0xMi41MzMgMzEuMzMzLTMxLjMzM3MtMTUuNi0zMS4zMzMtMzEuMzMzLTMxLjMzM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA2OyIgZ2x5cGgtbmFtZT0iZXhhbXBsZXMtaWNvbiIgZGF0YS10YWdzPSJleGFtcGxlcy1pY29uIiBkPSJNMjEzLjMzMyAyNzUuMjAxYzg5LjYgMzguNCAxODMuNDY3IDY4LjI2NyAyNzMuMDY3IDE3LjA2N3YyODEuNmMtNjguMjY3IDQ2LjkzMy0xNTcuODY3IDU1LjQ2Ny0yMzQuNjY3IDEyLjhsLTM4LjQtMzExLjQ2N3pNODEwLjY2NyAyNzUuMjAxbC00Mi42NjcgMzE1LjczM2MtNzIuNTMzIDM4LjQtMTY2LjQgMzQuMTMzLTIzNC42NjctMTcuMDY3di0yODUuODY3YzkzLjg2NyA1MS4yIDE4Ny43MzMgMjEuMzMzIDI3Ny4zMzMtMTIuOHpNODMyIDYyOS4zMzRjLTUxLjIgMjkuODY3LTExMC45MzMgNDYuOTMzLTE3MC42NjcgNTUuNDY3LTUxLjIgMC0xMDIuNC04LjUzMy0xNDkuMzMzLTI5Ljg2Ny00Ni45MzMgMjEuMzMzLTk4LjEzMyAyOS44NjctMTQ5LjMzMyAyOS44NjctNTkuNzMzLTQuMjY3LTExOS40NjctMjUuNi0xNzAuNjY3LTU1LjQ2N2wtNjQtNDUyLjI2N2MwIDAgMjkuODY3LTE3LjA2NyAxMTAuOTMzIDIxLjMzMyA0Ni45MzMgMjUuNiAxMDIuNCAzNC4xMzMgMTU3Ljg2NyAyNS42IDQyLjY2Ny00LjI2NyA4NS4zMzMtMjEuMzMzIDExNS4yLTU1LjQ2N3YwYzI5Ljg2NyAzNC4xMzMgNzIuNTMzIDUxLjIgMTE1LjIgNTUuNDY3IDU1LjQ2NyA0LjI2NyAxMDYuNjY3LTQuMjY3IDE1Ny44NjctMjkuODY3IDgxLjA2Ny0zOC40IDExMC45MzMtMjEuMzMzIDExMC45MzMtMjEuMzMzbC02NCA0NTYuNTMzek03OTMuNiAyMjQuMDAxYy00Mi42NjcgMjEuMzMzLTg5LjYgMzQuMTMzLTE0MC44IDM0LjEzMy04LjUzMyAwLTIxLjMzMyAwLTI5Ljg2NyAwLTQyLjY2Ny00LjI2Ny04MS4wNjctMTcuMDY3LTExNS4yLTQyLjY2Ny0zNC4xMzMgMjUuNi03Mi41MzMgMzguNC0xMTUuMiA0Mi42NjctMTIuOCAwLTIxLjMzMyAwLTM0LjEzMyAwLTQ2LjkzMyAwLTkzLjg2Ny04LjUzMy0xMzYuNTMzLTI5Ljg2Ny0yMS4zMzMtMTIuOC00Ni45MzMtMjEuMzMzLTcyLjUzMy0yNS42bDY0IDQxMy44NjdjNDYuOTMzIDI1LjYgOTguMTMzIDM4LjQgMTQ5LjMzMyA0Mi42NjcgNDYuOTMzIDAgOTMuODY3LTguNTMzIDEzNi41MzMtMjUuNmwxMi44LTguNTMzIDEyLjggNC4yNjdjNDIuNjY3IDE3LjA2NyA4OS42IDI1LjYgMTM2LjUzMyAyNS42IDUxLjItNC4yNjcgMTAyLjQtMTcuMDY3IDE0OS4zMzMtNDIuNjY3bDU5LjczMy00MTguMTMzYy0yOS44NjcgOC41MzMtNTEuMiAxNy4wNjctNzYuOCAyOS44Njd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNzsiIGdseXBoLW5hbWU9InR1dG9yaWFscy1pY29uIiBkYXRhLXRhZ3M9InR1dG9yaWFscy1pY29uIiBkPSJNODg3LjQ2OCA1MzcuNTk4bC0zNzUuNDY3LTExMC45MzNoLTQuMjY3bC0yMTcuNiA2OC4yNjdjLTIxLjMzMy0yNS42LTM0LjEzMy01OS43MzMtMzQuMTMzLTk4LjEzMyAyMS4zMzMtMTIuOCAyNS42LTM4LjQgMTIuOC01OS43MzMtNC4yNjctNC4yNjctOC41MzMtOC41MzMtMTIuOC0xMi44bDE3LjA2Ny0xNDUuMDY3YzAtNC4yNjcgMC00LjI2Ny00LjI2Ny04LjUzMyAwIDAgMCAwLTQuMjY3IDBoLTY0Yy00LjI2NyAwLTQuMjY3IDAtOC41MzMgNC4yNjcgMCA0LjI2Ny00LjI2NyA0LjI2Ny00LjI2NyA4LjUzM2wxNy4wNjcgMTQ1LjA2N2MtMTIuOCA4LjUzMy0xNy4wNjcgMjEuMzMzLTE3LjA2NyAzNC4xMzMgMCAxNy4wNjcgOC41MzMgMjkuODY3IDIxLjMzMyAzOC40IDAgMzguNCAxMi44IDc2LjggMzQuMTMzIDExMC45MzNsLTEwNi42NjcgMjkuODY3Yy04LjUzMyA0LjI2Ny04LjUzMyA4LjUzMy04LjUzMyAxNy4wNjcgMCA0LjI2NyA0LjI2NyA0LjI2NyA0LjI2NyA0LjI2N2wzNzUuNDY3IDExOS40NjdoNC4yNjdsMzc1LjQ2Ny0xMjMuNzMzYzQuMjY3IDAgOC41MzMtNC4yNjcgOC41MzMtOC41MzNzLTQuMjY3LTguNTMzLTguNTMzLTEyLjh6TTcyNS4zMzQgMzQxLjMzMmM0LjI2Ny00Ni45MzMtOTMuODY3LTg1LjMzMy0yMTMuMzMzLTg1LjMzM3MtMjEzLjMzMyAzOC40LTIxMy4zMzMgODUuMzMzbDQuMjY3IDEwNi42NjcgMTkyLTY0YzQuMjY3IDAgMTIuOCAwIDE3LjA2NyAwczEyLjggMCAxNy4wNjcgNC4yNjdsMTkyIDU5LjczMyA0LjI2Ny0xMDYuNjY3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDg7IiBnbHlwaC1uYW1lPSJpbmZvLWltcG9ydGFudC1kZXNjcmlwdGlvbiIgZGF0YS10YWdzPSJpbmZvLWltcG9ydGFudC1kZXNjcmlwdGlvbiIgZD0iTTUxMiA3NjguMDE3Yy0xODguNSAwLTM0MS4zLTE1Mi44LTM0MS4zLTM0MS4zczE1Mi44LTM0MS40IDM0MS4zLTM0MS40IDM0MS4zIDE1Mi44IDM0MS4zIDM0MS4zLTE1Mi44IDM0MS40LTM0MS4zIDM0MS40djB6TTUxMiAxMTMuOTE3Yy0xNzIuNyAwLTMxMi43IDE0MC0zMTIuNyAzMTIuN3MxNDAgMzEyLjcgMzEyLjcgMzEyLjdjMTcyLjcgMCAzMTIuNy0xNDAgMzEyLjctMzEyLjctMC4yLTE3Mi42LTE0MC4xLTMxMi41LTMxMi43LTMxMi43djB6TTUxMiA2NzYuMjE3Yy0xMzcuOSAwLTI0OS42LTExMS44LTI0OS42LTI0OS42czExMS43LTI0OS42IDI0OS42LTI0OS42IDI0OS42IDExMS44IDI0OS42IDI0OS42LTExMS44IDI0OS42LTI0OS42IDI0OS42djB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwOTsiIGdseXBoLW5hbWU9Imljb24taW5mbyIgZGF0YS10YWdzPSJpY29uLWluZm8iIGQ9Ik00NjguODc1IDU2NS45NzRoODcuNDY3YzAuMDI4IDAgMC4wNjIgMCAwLjA5NSAwIDYuMDU2IDAgMTEuNDk5IDIuNjI5IDE1LjI0OCA2LjgwOCAzLjk3OSA0LjE1IDYuNDE5IDkuNzY5IDYuNDE5IDE1Ljk1NyAwIDAuMDk3LTAuMDAxIDAuMTk0LTAuMDAyIDAuMjl2NzAuMzg1YzAuMDAxIDAuMDgyIDAuMDAyIDAuMTc5IDAuMDAyIDAuMjc2IDAgNi4xODgtMi40NCAxMS44MDYtNi40MDkgMTUuOTQ2LTMuNzU5IDQuMTktOS4yMDEgNi44MTktMTUuMjU3IDYuODE5LTAuMDMzIDAtMC4wNjcgMC0wLjEgMGgtODcuNDYyYy0wLjAyOCAwLTAuMDYyIDAtMC4wOTUgMC02LjA1NiAwLTExLjQ5OS0yLjYyOS0xNS4yNDgtNi44MDgtMy45NzktNC4xNS02LjQxOS05Ljc2OS02LjQxOS0xNS45NTcgMC0wLjA5NyAwLjAwMS0wLjE5NCAwLjAwMi0wLjI5di02OS45NTljLTAuMDAxLTAuMDgyLTAuMDAyLTAuMTc5LTAuMDAyLTAuMjc2IDAtNi4xODggMi40NC0xMS44MDYgNi40MDktMTUuOTQ2IDMuNzE1LTQuMzczIDkuMi03LjE1OSAxNS4zMzgtNy4yNDV6TTU5OS4wMDggMjYzLjA0MWgtMjIuMTg3djIwOS45MmMwLjAwMSAwLjA4MiAwLjAwMiAwLjE3OSAwLjAwMiAwLjI3NiAwIDYuMTg4LTIuNDQgMTEuODA2LTYuNDA5IDE1Ljk0Ni0zLjc1OSA0LjE5LTkuMjAxIDYuODE5LTE1LjI1NyA2LjgxOS0wLjAzMyAwLTAuMDY3IDAtMC4xIDBoLTEzMC4xMjhjLTAuMDI4IDAtMC4wNjIgMC0wLjA5NSAwLTYuMDU2IDAtMTEuNDk5LTIuNjI5LTE1LjI0OC02LjgwOC0zLjk3OS00LjE1LTYuNDE5LTkuNzY5LTYuNDE5LTE1Ljk1NyAwLTAuMDk3IDAuMDAxLTAuMTk0IDAuMDAyLTAuMjl2LTQ2LjQ5MmMtMC4wMDEtMC4wODItMC4wMDItMC4xNzktMC4wMDItMC4yNzYgMC02LjE4OCAyLjQ0LTExLjgwNiA2LjQwOS0xNS45NDYgMy43NTktNC4xOSA5LjIwMS02LjgxOSAxNS4yNTctNi44MTkgMC4wMzMgMCAwLjA2NyAwIDAuMSAwaDIyLjE4MnYtMTM5Ljk0N2gtMjIuMTg3Yy0wLjAyOCAwLTAuMDYyIDAtMC4wOTUgMC02LjA1NiAwLTExLjQ5OS0yLjYyOS0xNS4yNDgtNi44MDgtMy45NzktNC4xNS02LjQxOS05Ljc2OS02LjQxOS0xNS45NTcgMC0wLjA5NyAwLjAwMS0wLjE5NCAwLjAwMi0wLjI5di00Ni40OTJjLTAuMDAxLTAuMDgyLTAuMDAyLTAuMTc5LTAuMDAyLTAuMjc2IDAtNi4xODggMi40NC0xMS44MDYgNi40MDktMTUuOTQ2IDMuNzU5LTQuMTkgOS4yMDEtNi44MTkgMTUuMjU3LTYuODE5IDAuMDMzIDAgMC4wNjcgMCAwLjEgMGgxNzQuMDc1YzAuMDI4IDAgMC4wNjIgMCAwLjA5NSAwIDYuMDU2IDAgMTEuNDk5IDIuNjI5IDE1LjI0OCA2LjgwOCAzLjk3OSA0LjE1IDYuNDE5IDkuNzY5IDYuNDE5IDE1Ljk1NyAwIDAuMDk3LTAuMDAxIDAuMTk0LTAuMDAyIDAuMjl2NDYuMDY1YzAuMDQzIDAuNTI3IDAuMDY3IDEuMTQxIDAuMDY3IDEuNzYxIDAgNS4zMDItMS43OTEgMTAuMTg1LTQuOCAxNC4wNzktMy43NDIgNC40MjQtOS4zNiA3LjI0Ny0xNS42MzYgNy4yNDctMC40ODkgMC0wLjk3NS0wLjAxNy0xLjQ1Ni0wLjA1MXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBhOyIgZ2x5cGgtbmFtZT0icGFzdGUiIGRhdGEtdGFncz0icGFzdGUiIGQ9Ik0zOTQuNDAyIDc0NS4wNjdoLTc1LjMzM2MtNjUuODY3IDAtMTE5LjItNTMuMzMzLTExOS4yLTExOS4ydi0yODguNTMzYzAtNTYuNCAzNy42LTEwMC40IDg3Ljg2Ny0xMTZ2NjkuMDY3Yy0xNS43MzMgOS40NjctMjUuMDY3IDI1LjA2Ny0yNS4wNjcgNDcuMDY3djI4OC40YzAgMzEuMzMzIDI1LjA2NyA1Ni40IDU2LjQgNTYuNGgxMzEuNzMzYzAgMCAwIDAgMy4yIDMuMnYwYzAgMzEuMzMzLTI4LjI2NyA1OS42LTU5LjYgNTkuNnpNNzA0LjgwMiA2MzUuMmMwIDAtMjguMjY3IDAtNDAuOCAwLTEyLjUzMyAzNC41MzMtNDMuODY3IDU5LjYtODQuNjY3IDU5LjZzLTY5LjA2Ny0yNS4wNjctODEuNi01OS42Yy0xMi41MzMgMC00MC44IDAtNDAuOCAwLTY1Ljg2NyAwLTExOS4yLTUzLjMzMy0xMTkuMi0xMTkuMnYtMjg4LjUzM2MwLTY1Ljg2NyA1My4zMzMtMTE5LjIgMTE5LjItMTE5LjJoMjQ3Ljg2N2M2NS44NjcgMCAxMTkuMiA1My4zMzMgMTE5LjIgMTE5LjJ2Mjg1LjQ2N2MzLjIgNjUuODY3LTUzLjIgMTIyLjI2Ny0xMTkuMiAxMjIuMjY3ek01ODIuNTM1IDY0Ny44NjdjMjIgMCA0MC44LTE4LjggNDAuOC00MC44cy0xOC44LTQwLjgtNDAuOC00MC44Yy0yMiAwLTQwLjggMTguOC00MC44IDQwLjhzMTUuNzMzIDQwLjggNDAuOCA0MC44ek03NjQuNDAyIDIyNC40YzAtMzEuMzMzLTI1LjA2Ny01Ni40LTU2LjQtNTYuNGgtMjUwLjkzM2MtMzEuMzMzIDAtNTYuNCAyNS4wNjctNTYuNCA1Ni40djI4OC41MzNjMCAxOC44IDkuNDY3IDM3LjYgMjUuMDY3IDQ3LjA2N3YwYzAtNDMuODY3IDM0LjUzMy03OC40IDc4LjQtNzguNGgxNjBjNDMuODY3IDAgNzguNCAzNC41MzMgNzguNCA3OC40djBjMTIuNTMzLTkuNDY3IDIyLTI4LjI2NyAyMi00Ny4wNjd2LTI4OC41MzN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwYjsiIGdseXBoLW5hbWU9InJldXNlIiBkYXRhLXRhZ3M9InJldXNlIiBkPSJNNzM0Ljk3NCA2MjQuNzUxYy01NC42MDUgNjEuNjE5LTEzNC4xMjMgMTAwLjU3My0yMjIuOTc3IDEwMC41NzMtMTY0LjkzNiAwLTI5OC42NjEtMTMzLjcyNC0yOTguNjYxLTI5OC42NjFoNzQuNjY3YzAgMTIzLjcyMSAxMDAuMjcyIDIyMy45OTMgMjIzLjk5MyAyMjMuOTkzIDY4LjIxNCAwIDEyOC43NDctMzAuOTYgMTY5Ljc2Ni03OS4xMTlsLTcwLjIxMy03MC4yMTNoMTk5LjEwOXYxOTkuMTA5bC03NS42ODktNzUuNjg5ek01MTEuOTk5IDIwMi42NzFjLTY4LjIxNCAwLTEyOC43NDcgMzAuOTYtMTY5Ljc2NiA3OS4xMTlsNzAuMjEzIDcwLjIxM2gtMTk5LjEwOXYtMTk5LjEwOWw3NS42ODkgNzUuNjg5YzU0LjYwNS02MS42MTkgMTM0LjEyMy0xMDAuNTczIDIyMi45NzctMTAwLjU3MyAxNjQuOTM2IDAgMjk4LjY2MSAxMzMuNzI0IDI5OC42NjEgMjk4LjY2MWgtNzQuNjY3YzAtMTIzLjcyMS0xMDAuMjcyLTIyMy45OTMtMjIzLjk5My0yMjMuOTkzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGM7IiBnbHlwaC1uYW1lPSJpbmZvLW91dGxpbmVkIiBkYXRhLXRhZ3M9ImluZm8tb3V0bGluZWQiIGQ9Ik00NjcuMTk5IDE4MS4zMzZoODkuNTk5djI2OC44aC04OS41OTl2LTI2OC44ek01MTIgODUzLjMzNWMtMjQ3LjI5NiAwLTQ0OC4wMDEtMjAwLjcwNS00NDguMDAxLTQ0OC4wMDFzMjAwLjcwNS00NDguMDAxIDQ0OC4wMDEtNDQ4LjAwMSA0NDguMDAxIDIwMC43MDUgNDQ4LjAwMSA0NDguMDAxLTIwMC43MDUgNDQ4LjAwMS00NDguMDAxIDQ0OC4wMDF6TTUxMiA0Ni45MzZjLTE5Ny41NjggMC0zNTguMzk4IDE2MC44My0zNTguMzk4IDM1OC4zOThzMTYwLjgzIDM1OC4zOTggMzU4LjM5OCAzNTguMzk4IDM1OC4zOTgtMTYwLjgzIDM1OC4zOTgtMzU4LjM5OC0xNjAuODMtMzU4LjM5OC0zNTguMzk4LTM1OC4zOTh6TTQ2Ny4xOTkgNTM5LjczNGg4OS41OTl2ODkuNTk5aC04OS41OTl2LTg5LjU5OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBkOyIgZ2x5cGgtbmFtZT0ic3Bpbm5lciIgZGF0YS10YWdzPSJzcGlubmVyIiBkPSJNNjAwIDgwOC4wMDFjMC00OC42MDItMzkuMzk4LTg4LTg4LTg4cy04OCAzOS4zOTgtODggODggMzkuMzk4IDg4IDg4IDg4IDg4LTM5LjM5OCA4OC04OHpNNTEyIDEzMy4zMzNjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4LTM5LjM5OCA4OC04OCA4OHpNODkzLjMzNCA1MTQuNjY3Yy00OC42MDIgMC04OC0zOS4zOTgtODgtODhzMzkuMzk4LTg4IDg4LTg4IDg4IDM5LjM5OCA4OCA4OC0zOS4zOTggODgtODggODh6TTIxOC42NjYgNDI2LjY2N2MwIDQ4LjYwMi0zOS4zOTggODgtODggODhzLTg4LTM5LjM5OC04OC04OCAzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4ek0yNDIuMzU3IDI0NS4wMjRjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4YzAgNDguNi0zOS40IDg4LTg4IDg4ek03ODEuNjQzIDI0NS4wMjRjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4YzAgNDguNi0zOS4zOTggODgtODggODh6TTI0Mi4zNTcgNzg0LjMxYy00OC42MDIgMC04OC0zOS4zOTgtODgtODhzMzkuMzk4LTg4IDg4LTg4IDg4IDM5LjM5OCA4OCA4OC0zOS40IDg4LTg4IDg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGU7IiBnbHlwaC1uYW1lPSJjb3B5LWVuYWJsZWQiIGRhdGEtdGFncz0iY29weS1lbmFibGVkIiBkPSJNNjE0LjUyNSA4MDkuMjkyaC0zMTcuNjcyYy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC00My44MTcgMjAuODgtODIuODQyIDUzLjIzMS0xMDcuODN2NzAuMzQ2Yy00LjQ1IDExLjI5Ny03LjAxNiAyMy45NjItNy4wMTYgMzcuNDg0djM3MC4zODhjMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjMTUuMjMyIDAgMjkuNjExLTMuNzY2IDQyLjEwNy0xMC42MTNoNjguMjk0Yy0yNC42NDYgMzQuNDAyLTY1LjAzOSA1Ni45OTctMTEwLjU3IDU2Ljk5N3pNNjc0LjQzMSAyNjcuNDAzaC0yMDkuMzI3Yy0xNC43MjEgMC0yMy4xMDUtOC4zODgtMjMuMTA1LTIzLjEwNXM4LjM4OC0yMy4xMDUgMjMuMTA1LTIzLjEwNWgyMDkuMzI3YzExLjEyNCAwIDIzLjEwNSA4Ljg5OSAyMy4xMDUgMjMuMTA1IDAgMTQuNzIxLTguMzg4IDIzLjEwNS0yMy4xMDUgMjMuMTA1ek02NzQuNDMxIDM4OC4yNDRoLTIwOS4zMjdjLTE0LjcyMSAwLTIzLjEwNS04LjM4OC0yMy4xMDUtMjMuMTA1czguMzg4LTIzLjEwNSAyMy4xMDUtMjMuMTA1aDIwOS4zMjdjMTEuMTI0IDAgMjMuMTA1IDguODk5IDIzLjEwNSAyMy4xMDUgMCAxNC43MjEtOC4zODggMjMuMTA1LTIzLjEwNSAyMy4xMDV6TTcyNi45NzggNjg2LjIzaC0zMTguMDE0Yy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC03NC45NjggNjAuOTMxLTEzNS45IDEzNS45LTEzNS45djBoMzE4LjE4M2M3NC45NjggMCAxMzUuOSA2MC45MzEgMTM1LjkgMTM1Ljl2MzcwLjM4OGMtMC4zNDIgNzQuOTY4LTYxLjI3MyAxMzUuOS0xMzYuMDczIDEzNS45ek04MTYuNDk0IDE4My44NzhjMC00OS4yOTItNDAuMjI0LTg5LjUxNi04OS41MTYtODkuNTE2aC0zMTguMTgzYy00OS4yOTIgMC04OS41MTYgNDAuMjI0LTg5LjUxNiA4OS41MTZ2MzY2LjQ0OWMwIDQ5LjI5MiA0MC4yMjQgODkuNTE2IDg5LjUxNiA4OS41MTZoMzE4LjAxNGM0OS4yOTIgMCA4OS41MTYtNDAuMjI0IDg5LjUxNi04OS41MTZ2LTM0OS4zMzRoMC4xNzN2LTE3LjExNXpNNjc0LjQzMSA1MDkuMDgxaC0yMDkuMzI3Yy0xNC43MjEgMC0yMy4xMDUtOC4zODgtMjMuMTA1LTIzLjEwNXM4LjM4OC0yMy4xMDUgMjMuMTA1LTIzLjEwNWgyMDkuMzI3YzExLjEyNCAwIDIzLjEwNSA4Ljg5OSAyMy4xMDUgMjMuMTA1IDAgMTQuNzIxLTguMzg4IDIzLjEwNS0yMy4xMDUgMjMuMTA1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGY7IiBnbHlwaC1uYW1lPSJjb3B5LWRpc2FibGVkIiBkYXRhLXRhZ3M9ImNvcHktZGlzYWJsZWQiIGQ9Ik02MTQuNTI1IDgwOS4yOTJoLTMxNy42NzJjLTc0Ljk2OCAwLTEzNS45LTYwLjkzMS0xMzUuOS0xMzUuOXYtMzcwLjM4OGMwLTQzLjgxNyAyMC44OC04Mi44NDIgNTMuMjMxLTEwNy44M3Y3MC4zNDZjLTQuNDUgMTEuMjk3LTcuMDE2IDIzLjk2Mi03LjAxNiAzNy40ODR2MzcwLjM4OGMwIDQ5LjI5MiA0MC4yMjQgODkuNTE2IDg5LjUxNiA4OS41MTZoMzE4LjAxNGMxNS4yMzIgMCAyOS42MTEtMy43NjYgNDIuMTA3LTEwLjYxM2g2OC4yOTRjLTI0LjY0NiAzNC40MDItNjUuMDM5IDU2Ljk5Ny0xMTAuNTcgNTYuOTk3ek03MjYuOTc4IDY4Ni4yM2gtMzE4LjAxNGMtNzQuOTY4IDAtMTM1LjktNjAuOTMxLTEzNS45LTEzNS45di0zNzAuMzg4YzAtNzQuOTY4IDYwLjkzMS0xMzUuOSAxMzUuOS0xMzUuOXYwaDMxOC4xODNjNzQuOTY4IDAgMTM1LjkgNjAuOTMxIDEzNS45IDEzNS45djM3MC4zODhjLTAuMzQyIDc0Ljk2OC02MS4yNzMgMTM1LjktMTM2LjA3MyAxMzUuOXpNODE2LjQ5NCAxODMuODc4YzAtNDkuMjkyLTQwLjIyNC04OS41MTYtODkuNTE2LTg5LjUxNmgtMzE4LjE4M2MtNDkuMjkyIDAtODkuNTE2IDQwLjIyNC04OS41MTYgODkuNTE2djM2Ni40NDljMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjNDkuMjkyIDAgODkuNTE2LTQwLjIyNCA4OS41MTYtODkuNTE2di0zNDkuMzM0aDAuMTczdi0xNy4xMTV6TTcwOS41MjEgNDY4Ljg1N2wtMjcuNzI4IDI3LjU1NS0xMDkuNTQ0LTEwOS41NDQtMTA5LjU0NCAxMDkuNTQ0LTI3LjU1NS0yNy41NTUgMTA5LjU0NC0xMDkuNTQ0LTEwOS41NDQtMTA5LjU0NCAyNy41NTUtMjcuNTU1IDEwOS41NDQgMTA5LjU0NCAxMDkuNTQ0LTEwOS41NDQgMjcuNTU1IDI3LjU1NS0xMDkuNTQ0IDEwOS41NDQgMTA5LjcxMyAxMDkuNTQ0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTA7IiBnbHlwaC1uYW1lPSJwYXN0ZS1lbmFibGVkIiBkYXRhLXRhZ3M9InBhc3RlLWVuYWJsZWQiIGQ9Ik00MTAuMjM3IDU3LjI3NWMtNzUuNDAyIDAtMTM2Ljc5MyA2MS4zOTQtMTM2Ljc5MyAxMzYuNzkzdjM3My4wMjVjMCA3NS40MDIgNjEuMzk0IDEzNi43OTMgMTM2Ljc5MyAxMzYuNzkzaDY0Ljg1bDQuMTUyIDExLjQxM2MxNS4yMTkgNDEuNjc4IDQ3LjczMiA2NS43MTUgODkuMjM3IDY1LjcxNSA0Mi43MTYgMCA3OC41MTItMjUuMDc1IDkzLjIxMi02NS43MTVsNC4xNTItMTEuNDEzaDY0Ljg1YzM3LjAwNyAwIDczLjQ5OS0xNS45MTEgOTkuNzg2LTQzLjU4MSAyNS41OTQtMjYuODA1IDM4LjczNy02MS4wNDggMzcuMDA3LTk2LjMyNnYtMzY5LjczOGMwLTc1LjQwMi02MS4zOTQtMTM2Ljc5My0xMzYuNzkzLTEzNi43OTNsLTMyMC40NTMtMC4xNzN6TTM2MC45NDcgNjM4LjY4OWMtMjQuNzI5LTE1LjA0Ni00MC42NC00NC42MTktNDAuNjQtNzUuNTc1di0zNzMuMDI1YzAtNDkuODA0IDQwLjQ2Ny05MC4yNzEgOTAuMjcxLTkwLjI3MWgzMjQuNDMyYzQzLjc1NCAwIDgwLjQxNSAzMS40NzYgODguNTQ1IDcyLjk4MWgxLjczbDAuMTczIDE3LjI5NXYzNzMuMDI1YzAgMjguNzA4LTE0LjE4MSA1OC42MjctMzUuMjc3IDc0LjcxbC0yNy42NyAyMC45MjN2LTE3LjQ2OGMwLTQ3LjIxMy0zNi44MzQtODQuMDQ4LTg0LjA0OC04NC4wNDhoLTIwNy4zNTFjLTQ3LjIxMyAwLTg0LjA0OCAzNi44MzQtODQuMDQ4IDg0LjA0OHYxMy40ODlsLTI2LjExMy0xNi4wODR6TTU3Mi40NTEgNzMzLjYzMWMtMjcuODQzIDAtNDguNzY2LTIwLjkyMy00OC43NjYtNDguNzY2IDAtMjYuNDU5IDIyLjMwNy00OC43NjYgNDguNzY2LTQ4Ljc2NnM0OC43NjYgMjIuMzA3IDQ4Ljc2NiA0OC43NjZjMC4xNzMgMjYuMjg2LTIyLjEzNCA0OC43NjYtNDguNzY2IDQ4Ljc2NnpNNDIyLjE2OSA3NjQuMDY5YzcuNzggOC44MTggMTYuNjAzIDE2Ljc3NiAyNC4zODMgMjUuNTk0IDEuOTAzIDIuMDc2IDMuODA2IDQuMzI1IDUuNzA5IDYuNDAxaC0xNTguNTg1Yy03NS43NDggMC0xMzcuMzEyLTYxLjU2Ny0xMzcuMzEyLTEzNy4zMTJ2LTM3NC4yMzZjMC00NC45NjUgMjEuNzg4LTg0LjkxMyA1NS4xNjctMTA5Ljk4OHY2OC44MjljLTUuNTM2IDEyLjI3OC04LjQ3MiAyNi4xMTMtOC40NzIgNDEuMTU5djM3NC4yMzZjMCA0OS44MDQgNDAuNjQgOTAuNDQ0IDkwLjQ0NCA5MC40NDRoMTE2LjU2MWMzLjYzMyA1LjE5IDcuNzggMTAuMjAyIDEyLjEwNSAxNC44NzN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMTsiIGdseXBoLW5hbWU9InBhc3RlLWRpc2FibGVkIiBkYXRhLXRhZ3M9InBhc3RlLWRpc2FibGVkIiBkPSJNNDEwLjIzNyA1Ny4yNzVjLTc1LjQwMiAwLTEzNi43OTMgNjEuMzk0LTEzNi43OTMgMTM2Ljc5M3YzNzMuMDI1YzAgNzUuNDAyIDYxLjM5NCAxMzYuNzkzIDEzNi43OTMgMTM2Ljc5M2g2NC44NWw0LjE1MiAxMS40MTNjMTUuMjE5IDQxLjY3OCA0Ny43MzIgNjUuNzE1IDg5LjIzNyA2NS43MTUgNDIuNzE2IDAgNzguNTEyLTI1LjA3NSA5My4yMTItNjUuNzE1bDQuMTUyLTExLjQxM2g2NC44NWMzNy4wMDcgMCA3My40OTktMTUuOTExIDk5Ljc4Ni00My41ODEgMjUuNTk0LTI2LjgwNSAzOC43MzctNjEuMDQ4IDM3LjAwNy05Ni4zMjZ2LTM2OS43MzhjMC03NS40MDItNjEuMzk0LTEzNi43OTMtMTM2Ljc5My0xMzYuNzkzbC0zMjAuNDUzLTAuMTczek0zNjAuOTQ3IDYzOC42ODljLTI0LjcyOS0xNS4wNDYtNDAuNjQtNDQuNjE5LTQwLjY0LTc1LjU3NXYtMzczLjAyNWMwLTQ5LjgwNCA0MC40NjctOTAuMjcxIDkwLjI3MS05MC4yNzFoMzI0LjQzMmM0My43NTQgMCA4MC40MTUgMzEuNDc2IDg4LjU0NSA3Mi45ODFoMS43M2wwLjE3MyAxNy4yOTV2MzczLjAyNWMwIDI4LjcwOC0xNC4xODEgNTguNjI3LTM1LjI3NyA3NC43MWwtMjcuNjcgMjAuOTIzdi0xNy40NjhjMC00Ny4yMTMtMzYuODM0LTg0LjA0OC04NC4wNDgtODQuMDQ4aC0yMDcuMzUxYy00Ny4yMTMgMC04NC4wNDggMzYuODM0LTg0LjA0OCA4NC4wNDh2MTMuNDg5bC0yNi4xMTMtMTYuMDg0ek01NzIuNDUxIDczMy42MzFjLTI3Ljg0MyAwLTQ4Ljc2Ni0yMC45MjMtNDguNzY2LTQ4Ljc2NiAwLTI2LjQ1OSAyMi4zMDctNDguNzY2IDQ4Ljc2Ni00OC43NjZzNDguNzY2IDIyLjMwNyA0OC43NjYgNDguNzY2YzAuMTczIDI2LjI4Ni0yMi4xMzQgNDguNzY2LTQ4Ljc2NiA0OC43NjZ6TTQyMi4xNjkgNzY0LjA2OWM3Ljc4IDguODE4IDE2LjYwMyAxNi43NzYgMjQuMzgzIDI1LjU5NCAxLjkwMyAyLjA3NiAzLjgwNiA0LjMyNSA1LjcwOSA2LjQwMWgtMTU4LjU4NWMtNzUuNzQ4IDAtMTM3LjMxMi02MS41NjctMTM3LjMxMi0xMzcuMzEydi0zNzQuMjM2YzAtNDQuOTY1IDIxLjc4OC04NC45MTMgNTUuMTY3LTEwOS45ODh2NjguODI5Yy01LjUzNiAxMi4yNzgtOC40NzIgMjYuMTEzLTguNDcyIDQxLjE1OXYzNzQuMjM2YzAgNDkuODA0IDQwLjY0IDkwLjQ0NCA5MC40NDQgOTAuNDQ0aDExNi41NjFjMy42MzMgNS4xOSA3Ljc4IDEwLjIwMiAxMi4xMDUgMTQuODczek03MTguNTg1IDQ2My44NDhsLTI4LjAxNiAyNy44NDMtMTEwLjY4LTExMC42OC0xMTAuNjggMTEwLjY4LTI3Ljg0My0yNy44NDMgMTEwLjY4LTExMC42OC0xMTAuNjgtMTEwLjY4IDI3Ljg0My0yNy44NDMgMTEwLjY4IDExMC42OCAxMTAuNjgtMTEwLjY4IDI3Ljg0MyAyNy44NDMtMTEwLjY4IDExMC42OCAxMTAuODUzIDExMC42OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTEyOyIgZ2x5cGgtbmFtZT0iYnV0dG9uLWRpc2FibGVkIiBkYXRhLXRhZ3M9ImJ1dHRvbi1kaXNhYmxlZCIgZD0iTTg1My4zMzMgNjk5LjI0NmwtNjguNzU0IDY4Ljc1NC0yNzIuNTc5LTI3Mi41NzktMjcyLjU3OSAyNzIuNTc5LTY4Ljc1NC02OC43NTQgMjcyLjU3OS0yNzIuNTc5LTI3Mi41NzktMjcyLjU3OSA2OC43NTQtNjguNzU0IDI3Mi41NzkgMjcyLjU3OSAyNzIuNTc5LTI3Mi41NzkgNjguNzU0IDY4Ljc1NC0yNzIuNTc5IDI3Mi41Nzl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMzsiIGdseXBoLW5hbWU9ImF1ZGlvLWljb24iIGRhdGEtdGFncz0iYXVkaW8taWNvbiIgZD0iTTQ3Mi44IDU5MC4ydi0zMTkuM2MwLTEwLjMtOC4zLTE4LjctMTguNi0xOC44LTUgMC05LjkgMi0xMy40IDUuNmwtOTcuOCA5Ny43aC03N2MtMTAuMyAwLjItMTguNyA4LjUtMTguOCAxOC44djExMi42YzAuMiAxMC4zIDguNSAxOC43IDE4LjggMTguOGg3Ni45bDk3LjggOTcuOGM3LjQgNy4zIDE5LjMgNy4yIDI2LjYtMC4yIDMuNC0zLjUgNS40LTguMSA1LjQtMTNoMC4xek01ODUuOSA0NzIuNmM4LjItMTIuNSAxMi42LTI3LjIgMTIuNi00Mi4xcy00LjQtMjkuNS0xMi42LTQyYy03LjktMTIuNi0xOS43LTIyLjQtMzMuNi0yNy45LTIuMy0xLjEtNC45LTEuNi03LjQtMS41LTUgMC05LjggMS45LTEzLjMgNS41LTMuOCAzLjUtNS45IDguNC01LjggMTMuNS0wLjEgMy44IDEuMiA3LjYgMy42IDEwLjVzNS4zIDUuNCA4LjYgNy40YzMuMyAyLjEgNi43IDQuMyAxMC4xIDYuOCAzLjYgMi44IDYuNiA2LjQgOC42IDEwLjUgNC43IDEwLjggNC43IDIzIDAgMzMuOC0yIDQuMS01IDcuNy04LjYgMTAuNS0zLjMgMi41LTYuNyA0LjctMTAuMSA2LjgtMy4zIDItNi4yIDQuNS04LjYgNy40LTIuNCAzLTMuNyA2LjctMy42IDEwLjUtMC4xIDUuMSAyLjEgMTAgNS44IDEzLjUgMy41IDMuNiA4LjMgNS41IDEzLjMgNS41IDIuNiAwLjEgNS4xLTAuNCA3LjQtMS41IDEzLjgtNSAyNS42LTE0LjYgMzMuNi0yNy4ydjB6TTY2My4zIDUxNC4zYzMzLjYtNTAuOCAzMy42LTExNi44IDAtMTY3LjYtMTYtMjUuMS0zOS4yLTQ0LjYtNjYuNi01Ni4yLTIuNC0xLTQuOS0xLjUtNy40LTEuNS01LjIgMC0xMC4xIDIuMS0xMy42IDUuOC0zLjcgMy40LTUuOCA4LjMtNS44IDEzLjMgMCA3LjcgNC42IDE0LjYgMTEuNyAxNy41IDcuOCAzLjggMTUuNCA4LjIgMjIuNiAxMyA1MC42IDM2LjkgNjEuOCAxMDcuOCAyNC45IDE1OC40LTcgOS42LTE1LjQgMTgtMjQuOSAyNC45LTcuMiA0LjktMTQuNyA5LjMtMjIuNiAxMy4xLTcuMSAyLjktMTEuNyA5LjgtMTEuNyAxNy41IDAuMSAxMC40IDguNiAxOC45IDE5IDE5IDIuNiAwIDUuMy0wLjUgNy43LTEuNSAyNy4zLTExLjIgNTAuNi0zMC43IDY2LjctNTUuN3pNNzQxIDU1NS44YzY5LjMtMTA1LjEgNDAuMi0yNDYuNC02NC45LTMxNS43LTExLjItNy40LTIzLjEtMTMuOC0zNS40LTE5LjEtMi41LTEtNS4xLTEuNS03LjctMS41LTEwLjQgMC4yLTE4LjggOC42LTE5IDE5IDAuMyA3LjYgNC44IDE0LjQgMTEuNyAxNy41IDIuMiAxLjIgNC40IDIuMiA2LjcgMy4xczQuNSAxLjkgNi43IDMuMWM4LjQgNC41IDE2LjUgOS42IDI0LjMgMTUuMSAyNCAxNy42IDQzLjYgNDAuNyA1NyA2Ny4zIDI3LjMgNTMuOSAyNy4zIDExNy41IDAgMTcxLjQtMTMuNCAyNi43LTMzIDQ5LjgtNTcgNjcuNC03LjggNS41LTE1LjkgMTAuNi0yNC4zIDE1LjEtMi4yIDEuMi00LjQgMi4yLTYuNyAzLjFzLTQuNSAxLjktNi43IDMuMWMtNi45IDMuMi0xMS40IDkuOS0xMS43IDE3LjUgMC4zIDEwLjQgOC44IDE4LjYgMTkuMiAxOC43IDIuNiAwIDUuMy0wLjUgNy43LTEuNSA0MS0xNy4zIDc1LjktNDYuNSAxMDAuMy04My44aC0wLjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxNDsiIGdseXBoLW5hbWU9ImF1ZGlvLXVwbG9hZC1pY29uIiBkYXRhLXRhZ3M9ImF1ZGlvLXVwbG9hZC1pY29uIiBkPSJNNzk2LjkgNTU3LjlsLTEwMi40IDEwNi42Yy0xMi44IDEyLjgtMzguNCAyMS4zLTU1LjUgMjEuM2gtMTQwLjhsMjEuMy00Mi43aDg5LjZ2LTEzNi41YzAtMTcuMSAxMi44LTI5LjkgMjkuOS0yOS45aDE0MC44di0zNDEuM2gtNDI2LjZ2MzI4LjZoLTQyLjd2LTM0MS4zYzAtMTcuMSAxMi44LTI5LjkgMjkuOS0yOS45aDQ0OGMxNy4xIDAgMjkuOSAxMi44IDI5LjkgMjkuOXYzODRjNC4yIDE3LTguNiAzOC40LTIxLjQgNTEuMnpNNjUxLjggNTE1LjJ2MTIzLjdjNC4zIDAgMTIuOC00LjMgMTIuOC04LjVsMTAyLjQtMTAyLjRjNC4zLTQuMyA0LjMtOC41IDguNS0xMi44aC0xMjMuN3pNMzYxLjcgNTMyLjN2MTM2LjVsNTkuNy01OS43YzguNS04LjUgMTcuMS00LjMgMjUuNiAwbDEyLjggMTIuOGM4LjUgOC41IDguNSAxNy4xIDAgMjUuNmwtMTE1LjIgMTA2LjZjLTguNSA4LjUtMTcuMSA4LjUtMjEuMyAwbC0xMTUuMi0xMTAuOWMtNC4zLTguNS00LjMtMTcuMSAwLTI1LjZsMTIuOC0xMi44YzguNS04LjUgMTcuMS04LjUgMjEuMyAwbDU5LjcgNTkuN3YtMTM2LjVjMC04LjUgOC41LTE3LjEgMTcuMS0xNy4xaDI1LjZjMCAwIDE3LjEgOC42IDE3LjEgMjEuNHpNNTMyLjcgNDAxLjh2LTE4OGMwLTUuMi01LjItMTAuNC01LjItMTAuNGgtNS4yYy01LjIgMC01LjIgMC0xMC40IDUuMmwtNTcuNSA1Ny40aC00N2MtNS4yIDAtMTAuNCA1LjItMTAuNCAxMC40djYyLjdjMCA1LjIgNS4yIDEwLjQgMTAuNCAxMC40aDQ3bDU3LjUgNTcuNWM1LjIgNS4yIDEyLjggOS43IDE2LjUgNnM0LjMtNiA0LjMtMTEuMnpNNjE2LjMgMjI5LjVjMjAuOSAyMC45IDMxLjMgNDcgMzEuMyA3OC4zcy0xMC40IDU3LjUtMzEuMyA3OC4zYy0xMC40IDEwLjQtMjAuOSAxMC40LTMxLjMgMHMtMTAuNC0yMC45IDAtMzEuM2MxMC40LTEwLjQgMTUuNy0yNi4xIDE1LjctNDdzLTUuMi0zMS4zLTE1LjctNDdjLTEwLjQtMTAuNC0xMC40LTIwLjkgMC0zMS4zIDUuMi01LjIgMTAuNC01LjIgMTUuNy01LjJzMTAuNC0wLjEgMTUuNiA1LjJ6TTY4OS40IDE3Ny4yYzMxLjMgMzYuNiA0NyA3OC4zIDQ3IDEyNS40IDAgNDctMTUuNyA4OC44LTQ3IDEyNS40LTEwLjQgMTUuNy0yMC45IDE1LjctMzEuMyAxMC40LTEwLjQtMTAuNC0xMC40LTIwLjktNS4yLTMxLjMgMjAuOS0yNi4xIDM2LjYtNjIuNyAzNi42LTk5LjJzLTEwLjQtNzMuMS0zNi42LTk5LjJjLTEwLjQtMTAuNC01LjItMjYuMSA1LjItMzEuMyA1LjItNS4yIDEwLjQtNS4yIDE1LjctNS4yczEwLjQtMC4yIDE1LjYgNXoiIC8+CjwvZm9udD48L2RlZnM+PC9zdmc+"

/***/ }),

/***/ "e42b":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.from");

/***/ }),

/***/ "ece9":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.entries");

/***/ }),

/***/ "ee85":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.unscopables.flat");

/***/ }),

/***/ "eef8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.reflect.construct");

/***/ }),

/***/ "f705":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("9bb0")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "core-js/modules/es.global-this"
var es_global_this_ = __webpack_require__("437b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28b38ab2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/h5p.vue?vue&type=template&id=1d0ba3b5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('div',[_vm._t("default")],2):(_vm.error)?_c('div',[_vm._t("error",null,{"error":_vm.error})],2):_c('iframe',{ref:"iframe",staticStyle:{"width":"100%","height":"100%","border":"none"},attrs:{"srcdoc":_vm.srcdoc},on:{"load":_vm.addEventHandlers}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/h5p.vue?vue&type=template&id=1d0ba3b5&

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__("18d2");

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__("4a38");

// EXTERNAL MODULE: external "core-js/modules/es.array.find"
var es_array_find_ = __webpack_require__("fe0e");

// EXTERNAL MODULE: external "core-js/modules/es.array.flat"
var es_array_flat_ = __webpack_require__("9a3c");

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__("139f");

// EXTERNAL MODULE: external "core-js/modules/es.array.iterator"
var es_array_iterator_ = __webpack_require__("8c84");

// EXTERNAL MODULE: external "core-js/modules/es.array.join"
var es_array_join_ = __webpack_require__("3e88");

// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__("f705");

// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__("6579");

// EXTERNAL MODULE: external "core-js/modules/es.array.unscopables.flat"
var es_array_unscopables_flat_ = __webpack_require__("ee85");

// EXTERNAL MODULE: external "core-js/modules/es.object.assign"
var es_object_assign_ = __webpack_require__("b917");

// EXTERNAL MODULE: external "core-js/modules/es.object.entries"
var es_object_entries_ = __webpack_require__("ece9");

// EXTERNAL MODULE: external "core-js/modules/es.object.from-entries"
var es_object_from_entries_ = __webpack_require__("5c3b");

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__("850c");

// EXTERNAL MODULE: external "core-js/modules/es.promise"
var es_promise_ = __webpack_require__("8495");

// EXTERNAL MODULE: external "core-js/modules/es.string.ends-with"
var es_string_ends_with_ = __webpack_require__("8075");

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator"
var es_string_iterator_ = __webpack_require__("907b");

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__("bcda");

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator"
var web_dom_collections_iterator_ = __webpack_require__("1ce0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: external "core-js/modules/es.symbol"
var es_symbol_ = __webpack_require__("6049");

// EXTERNAL MODULE: external "core-js/modules/es.symbol.description"
var es_symbol_description_ = __webpack_require__("51e9");

// EXTERNAL MODULE: external "core-js/modules/es.symbol.iterator"
var es_symbol_iterator_ = __webpack_require__("02ac");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: external "core-js/modules/es.array.from"
var es_array_from_ = __webpack_require__("e42b");

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__("bcd8");

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__("5fef");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__("79d0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: external "toposort-class"
var external_toposort_class_ = __webpack_require__("407e");
var external_toposort_class_default = /*#__PURE__*/__webpack_require__.n(external_toposort_class_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: external "core-js/modules/es.object.set-prototype-of"
var es_object_set_prototype_of_ = __webpack_require__("0eb3");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "core-js/modules/es.reflect.construct"
var es_reflect_construct_ = __webpack_require__("eef8");

// EXTERNAL MODULE: external "core-js/modules/es.object.get-prototype-of"
var es_object_get_prototype_of_ = __webpack_require__("9aa8");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js


function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js



function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js




function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
// EXTERNAL MODULE: external "core-js/modules/es.map"
var es_map_ = __webpack_require__("9861");

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of"
var es_array_index_of_ = __webpack_require__("6bb1");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js



function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js



function construct_construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js









function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}
// CONCATENATED MODULE: ./src/errors.js








var errors_FetchError = /*#__PURE__*/function (_Error) {
  _inherits(FetchError, _Error);

  var _super = _createSuper(FetchError);

  function FetchError(resp, body) {
    var _this;

    _classCallCheck(this, FetchError);

    _this = _super.call(this, resp.statusText);
    _this.name = 'FetchError';
    _this.resp = resp;
    _this.status = resp.status;
    Object.assign(_assertThisInitialized(_this), body);
    return _this;
  }

  return FetchError;
}( /*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));


// CONCATENATED MODULE: ./src/l10n.js
/* harmony default export */ var l10n = ({
  H5P: {
    advancedHelp: 'Include this script on your website if you want dynamic sizing of the embedded content:',
    author: 'Author',
    by: 'by',
    cancelLabel: 'Cancel',
    changes: 'Changelog',
    close: 'Close',
    confirmDialogBody: 'Please confirm that you wish to proceed. This action is not reversible.',
    confirmDialogHeader: 'Confirm action',
    confirmLabel: 'Confirm',
    connectionLost: 'Connection lost. Results will be stored and sent when you regain connection.',
    connectionReestablished: 'Connection reestablished.',
    contentChanged: 'This content has changed since you last used it.',
    contentCopied: 'Content is copied to the clipboard',
    contentType: 'Content Type',
    copyrightInformation: 'Rights of use',
    copyrights: 'Rights of use',
    copyrightsDescription: 'View copyright information for this content.',
    disableFullscreen: 'Disable fullscreen',
    download: 'Download',
    downloadDescription: 'Download this content as a H5P file.',
    embed: 'Embed',
    embedDescription: 'View the embed code for this content.',
    fullscreen: 'Fullscreen',
    h5pDescription: 'Visit H5P.org to check out more cool content.',
    hideAdvanced: 'Hide advanced',
    license: 'License',
    licenseC: 'Copyright',
    licenseCC010: 'CC0 1.0 Universal (CC0 1.0) Public Domain Dedication',
    licenseCC10: '1.0 Generic',
    licenseCC20: '2.0 Generic',
    licenseCC25: '2.5 Generic',
    licenseCC30: '3.0 Unported',
    licenseCC40: '4.0 International',
    licenseCCBY: 'Attribution',
    licenseCCBYNC: 'Attribution-NonCommercial',
    licenseCCBYNCND: 'Attribution-NonCommercial-NoDerivs',
    licenseCCBYNCSA: 'Attribution-NonCommercial-ShareAlike',
    licenseCCBYND: 'Attribution-NoDerivs',
    licenseCCBYSA: 'Attribution-ShareAlike',
    licenseExtras: 'License Extras',
    licenseGPL: 'General Public License',
    licensePD: 'Public Domain',
    licensePDM: 'Public Domain Mark',
    licenseU: 'Undisclosed',
    licenseV1: 'Version 1',
    licenseV2: 'Version 2',
    licenseV3: 'Version 3',
    noCopyrights: 'No copyright information available for this content.',
    offlineDialogBody: 'We were unable to send information about your completion of this task. Please check your internet connection.',
    offlineDialogHeader: 'Your connection to the server was lost',
    offlineDialogRetryButtonLabel: 'Retry now',
    offlineDialogRetryMessage: 'Retrying in :num....',
    offlineSuccessfulSubmit: 'Successfully submitted results.',
    resubmitScores: 'Attempting to submit stored results.',
    reuse: 'Reuse',
    reuseContent: 'Reuse Content',
    reuseDescription: 'Reuse this content.',
    showAdvanced: 'Show advanced',
    showLess: 'Show less',
    showMore: 'Show more',
    size: 'Size',
    source: 'Source',
    startingOver: 'You\'ll be starting over.',
    subLevel: 'Sublevel',
    thumbnail: 'Thumbnail',
    title: 'Title',
    year: 'Year'
  }
});
// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./frame/frame.js
/* harmony default export */ var cjs_js_frame_frame = ("!function(e,t){if(\"object\"==typeof exports&&\"object\"==typeof module)module.exports=t();else if(\"function\"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)(\"object\"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=3)}([function(e,t,n){var r;\n/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license\n*/!function(i,o){var a,s,c=typeof o,l=i.document,u=i.location,d=i.jQuery,f=i.$,p={},h=[],g=\"1.9.1\",m=h.concat,v=h.push,y=h.slice,b=h.indexOf,x=p.toString,w=p.hasOwnProperty,C=g.trim,T=function(e,t){return new T.fn.init(e,t,s)},P=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,E=/\\S+/g,S=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,H=/^(?:(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,k=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,N=/^[\\],:{}\\s]*$/,I=/(?:^|:|,)(?:\\s*\\[)+/g,A=/\\\\(?:[\"\\\\\\/bfnrt]|u[\\da-fA-F]{4})/g,D=/\"[^\"\\\\\\r\\n]*\"|true|false|null|-?(?:\\d+\\.|)\\d+(?:[eE][+-]?\\d+|)/g,j=/^-ms-/,L=/-([\\da-z])/gi,F=function(e,t){return t.toUpperCase()},O=function(e){(l.addEventListener||\"load\"===e.type||\"complete\"===l.readyState)&&(M(),T.ready())},M=function(){l.addEventListener?(l.removeEventListener(\"DOMContentLoaded\",O,!1),i.removeEventListener(\"load\",O,!1)):(l.detachEvent(\"onreadystatechange\",O),i.detachEvent(\"onload\",O))};function q(e){var t=e.length,n=T.type(e);return!T.isWindow(e)&&(!(1!==e.nodeType||!t)||(\"array\"===n||\"function\"!==n&&(0===t||\"number\"==typeof t&&t>0&&t-1 in e)))}T.fn=T.prototype={jquery:g,constructor:T,init:function(e,t,n){var r,i;if(!e)return this;if(\"string\"==typeof e){if(!(r=\"<\"===e.charAt(0)&&\">\"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:H.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:l,!0)),k.test(r[1])&&T.isPlainObject(t))for(r in t)T.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}if((i=l.getElementById(r[2]))&&i.parentNode){if(i.id!==r[2])return n.find(e);this.length=1,this[0]=i}return this.context=l,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):T.isFunction(e)?n.ready(e):(e.selector!==o&&(this.selector=e.selector,this.context=e.context),T.makeArray(e,this))},selector:\"\",length:0,size:function(){return this.length},toArray:function(){return y.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return T.each(this,e,t)},ready:function(e){return T.ready.promise().done(e),this},slice:function(){return this.pushStack(y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},end:function(){return this.prevObject||this.constructor(null)},push:v,sort:[].sort,splice:[].splice},T.fn.init.prototype=T.fn,T.extend=T.fn.extend=function(){var e,t,n,r,i,a,s=arguments[0]||{},c=1,l=arguments.length,u=!1;for(\"boolean\"==typeof s&&(u=s,s=arguments[1]||{},c=2),\"object\"==typeof s||T.isFunction(s)||(s={}),l===c&&(s=this,--c);l>c;c++)if(null!=(i=arguments[c]))for(r in i)e=s[r],s!==(n=i[r])&&(u&&n&&(T.isPlainObject(n)||(t=T.isArray(n)))?(t?(t=!1,a=e&&T.isArray(e)?e:[]):a=e&&T.isPlainObject(e)?e:{},s[r]=T.extend(u,a,n)):n!==o&&(s[r]=n));return s},T.extend({noConflict:function(e){return i.$===T&&(i.$=f),e&&i.jQuery===T&&(i.jQuery=d),T},isReady:!1,readyWait:1,holdReady:function(e){e?T.readyWait++:T.ready(!0)},ready:function(e){if(!0===e?!--T.readyWait:!T.isReady){if(!l.body)return setTimeout(T.ready);T.isReady=!0,!0!==e&&--T.readyWait>0||(a.resolveWith(l,[T]),T.fn.trigger&&T(l).trigger(\"ready\").off(\"ready\"))}},isFunction:function(e){return\"function\"===T.type(e)},isArray:Array.isArray||function(e){return\"array\"===T.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+\"\":\"object\"==typeof e||\"function\"==typeof e?p[x.call(e)]||\"object\":typeof e},isPlainObject:function(e){if(!e||\"object\"!==T.type(e)||e.nodeType||T.isWindow(e))return!1;try{if(e.constructor&&!w.call(e,\"constructor\")&&!w.call(e.constructor.prototype,\"isPrototypeOf\"))return!1}catch(e){return!1}var t;for(t in e);return t===o||w.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||\"string\"!=typeof e)return null;\"boolean\"==typeof t&&(n=t,t=!1),t=t||l;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=T.buildFragment([e],t,i),i&&T(i).remove(),T.merge([],r.childNodes))},parseJSON:function(e){return i.JSON&&i.JSON.parse?i.JSON.parse(e):null===e?e:\"string\"==typeof e&&((e=T.trim(e))&&N.test(e.replace(A,\"@\").replace(D,\"]\").replace(I,\"\")))?Function(\"return \"+e)():(T.error(\"Invalid JSON: \"+e),o)},parseXML:function(e){var t;if(!e||\"string\"!=typeof e)return null;try{i.DOMParser?t=(new DOMParser).parseFromString(e,\"text/xml\"):((t=new ActiveXObject(\"Microsoft.XMLDOM\")).async=\"false\",t.loadXML(e))}catch(e){t=o}return t&&t.documentElement&&!t.getElementsByTagName(\"parsererror\").length||T.error(\"Invalid XML: \"+e),t},noop:function(){},globalEval:function(e){e&&T.trim(e)&&(i.execScript||function(e){i.eval.call(i,e)})(e)},camelCase:function(e){return e.replace(j,\"ms-\").replace(L,F)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=q(e);if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:C&&!C.call(\"\\ufeff \")?function(e){return null==e?\"\":C.call(e)}:function(e){return null==e?\"\":(e+\"\").replace(S,\"\")},makeArray:function(e,t){var n=t||[];return null!=e&&(q(Object(e))?T.merge(n,\"string\"==typeof e?[e]:e):v.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(b)return b.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){var n=t.length,r=e.length,i=0;if(\"number\"==typeof n)for(;n>i;i++)e[r++]=t[i];else for(;t[i]!==o;)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r=[],i=0,o=e.length;for(n=!!n;o>i;i++)n!==!!t(e[i],i)&&r.push(e[i]);return r},map:function(e,t,n){var r,i=0,o=e.length,a=[];if(q(e))for(;o>i;i++)null!=(r=t(e[i],i,n))&&(a[a.length]=r);else for(i in e)null!=(r=t(e[i],i,n))&&(a[a.length]=r);return m.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return\"string\"==typeof t&&(i=e[t],t=e,e=i),T.isFunction(e)?(n=y.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(y.call(arguments)))}).guid=e.guid=e.guid||T.guid++,r):o},access:function(e,t,n,r,i,a,s){var c=0,l=e.length,u=null==n;if(\"object\"===T.type(n))for(c in i=!0,n)T.access(e,t,c,n[c],!0,a,s);else if(r!==o&&(i=!0,T.isFunction(r)||(s=!0),u&&(s?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(T(e),n)})),t))for(;l>c;c++)t(e[c],n,s?r:r.call(e[c],c,t(e[c],n)));return i?e:u?t.call(e):l?t(e[0],n):a},now:function(){return(new Date).getTime()}}),T.ready.promise=function(e){if(!a)if(a=T.Deferred(),\"complete\"===l.readyState)setTimeout(T.ready);else if(l.addEventListener)l.addEventListener(\"DOMContentLoaded\",O,!1),i.addEventListener(\"load\",O,!1);else{l.attachEvent(\"onreadystatechange\",O),i.attachEvent(\"onload\",O);var t=!1;try{t=null==i.frameElement&&l.documentElement}catch(e){}t&&t.doScroll&&function e(){if(!T.isReady){try{t.doScroll(\"left\")}catch(t){return setTimeout(e,50)}M(),T.ready()}}()}return a.promise(e)},T.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"),(function(e,t){p[\"[object \"+t+\"]\"]=t.toLowerCase()})),s=T(l);var B={};T.Callbacks=function(e){e=\"string\"==typeof e?B[e]||function(e){var t=B[e]={};return T.each(e.match(E)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var t,n,r,i,a,s,c=[],l=!e.once&&[],u=function(o){for(n=e.memory&&o,r=!0,a=s||0,s=0,i=c.length,t=!0;c&&i>a;a++)if(!1===c[a].apply(o[0],o[1])&&e.stopOnFalse){n=!1;break}t=!1,c&&(l?l.length&&u(l.shift()):n?c=[]:d.disable())},d={add:function(){if(c){var r=c.length;(function t(n){T.each(n,(function(n,r){var i=T.type(r);\"function\"===i?e.unique&&d.has(r)||c.push(r):r&&r.length&&\"string\"!==i&&t(r)}))})(arguments),t?i=c.length:n&&(s=r,u(n))}return this},remove:function(){return c&&T.each(arguments,(function(e,n){for(var r;(r=T.inArray(n,c,r))>-1;)c.splice(r,1),t&&(i>=r&&i--,a>=r&&a--)})),this},has:function(e){return e?T.inArray(e,c)>-1:!(!c||!c.length)},empty:function(){return c=[],this},disable:function(){return c=l=n=o,this},disabled:function(){return!c},lock:function(){return l=o,n||d.disable(),this},locked:function(){return!l},fireWith:function(e,n){return n=[e,(n=n||[]).slice?n.slice():n],!c||r&&!l||(t?l.push(n):u(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!r}};return d},T.extend({Deferred:function(e){var t=[[\"resolve\",\"done\",T.Callbacks(\"once memory\"),\"resolved\"],[\"reject\",\"fail\",T.Callbacks(\"once memory\"),\"rejected\"],[\"notify\",\"progress\",T.Callbacks(\"memory\")]],n=\"pending\",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return T.Deferred((function(n){T.each(t,(function(t,o){var a=o[0],s=T.isFunction(e[t])&&e[t];i[o[1]]((function(){var e=s&&s.apply(this,arguments);e&&T.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+\"With\"](this===r?n.promise():this,s?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?T.extend(e,r):r}},i={};return r.pipe=r.then,T.each(t,(function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+\"With\"](this===i?r:this,arguments),this},i[o[0]+\"With\"]=a.fireWith})),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=y.call(arguments),a=o.length,s=1!==a||e&&T.isFunction(e.promise)?a:0,c=1===s?e:T.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?y.call(arguments):i,r===t?c.notifyWith(n,r):--s||c.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&T.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(c.reject).progress(l(i,n,t)):--s;return s||c.resolveWith(r,o),c.promise()}}),T.support=function(){var e,t,n,r,o,a,s,u,d,f,p=l.createElement(\"div\");if(p.setAttribute(\"className\",\"t\"),p.innerHTML=\"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>\",t=p.getElementsByTagName(\"*\"),n=p.getElementsByTagName(\"a\")[0],!t||!n||!t.length)return{};s=(o=l.createElement(\"select\")).appendChild(l.createElement(\"option\")),r=p.getElementsByTagName(\"input\")[0],n.style.cssText=\"top:1px;float:left;opacity:.5\",e={getSetAttribute:\"t\"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName(\"tbody\").length,htmlSerialize:!!p.getElementsByTagName(\"link\").length,style:/top/.test(n.getAttribute(\"style\")),hrefNormalized:\"/a\"===n.getAttribute(\"href\"),opacity:/^0.5/.test(n.style.opacity),cssFloat:!!n.style.cssFloat,checkOn:!!r.value,optSelected:s.selected,enctype:!!l.createElement(\"form\").enctype,html5Clone:\"<:nav></:nav>\"!==l.createElement(\"nav\").cloneNode(!0).outerHTML,boxModel:\"CSS1Compat\"===l.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},r.checked=!0,e.noCloneChecked=r.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!s.disabled;try{delete p.test}catch(t){e.deleteExpando=!1}for(f in(r=l.createElement(\"input\")).setAttribute(\"value\",\"\"),e.input=\"\"===r.getAttribute(\"value\"),r.value=\"t\",r.setAttribute(\"type\",\"radio\"),e.radioValue=\"t\"===r.value,r.setAttribute(\"checked\",\"t\"),r.setAttribute(\"name\",\"t\"),(a=l.createDocumentFragment()).appendChild(r),e.appendChecked=r.checked,e.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent(\"onclick\",(function(){e.noCloneEvent=!1})),p.cloneNode(!0).click()),{submit:!0,change:!0,focusin:!0})p.setAttribute(u=\"on\"+f,\"t\"),e[f+\"Bubbles\"]=u in i||!1===p.attributes[u].expando;return p.style.backgroundClip=\"content-box\",p.cloneNode(!0).style.backgroundClip=\"\",e.clearCloneStyle=\"content-box\"===p.style.backgroundClip,T((function(){var t,n,r,o=\"padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;\",a=l.getElementsByTagName(\"body\")[0];a&&((t=l.createElement(\"div\")).style.cssText=\"border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px\",a.appendChild(t).appendChild(p),p.innerHTML=\"<table><tr><td></td><td>t</td></tr></table>\",(r=p.getElementsByTagName(\"td\"))[0].style.cssText=\"padding:0;margin:0;border:0;display:none\",d=0===r[0].offsetHeight,r[0].style.display=\"\",r[1].style.display=\"none\",e.reliableHiddenOffsets=d&&0===r[0].offsetHeight,p.innerHTML=\"\",p.style.cssText=\"box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;\",e.boxSizing=4===p.offsetWidth,e.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,i.getComputedStyle&&(e.pixelPosition=\"1%\"!==(i.getComputedStyle(p,null)||{}).top,e.boxSizingReliable=\"4px\"===(i.getComputedStyle(p,null)||{width:\"4px\"}).width,(n=p.appendChild(l.createElement(\"div\"))).style.cssText=p.style.cssText=o,n.style.marginRight=n.style.width=\"0\",p.style.width=\"1px\",e.reliableMarginRight=!parseFloat((i.getComputedStyle(n,null)||{}).marginRight)),typeof p.style.zoom!==c&&(p.innerHTML=\"\",p.style.cssText=o+\"width:1px;padding:1px;display:inline;zoom:1\",e.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display=\"block\",p.innerHTML=\"<div></div>\",p.firstChild.style.width=\"5px\",e.shrinkWrapBlocks=3!==p.offsetWidth,e.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(t),t=p=r=n=null)})),t=o=a=s=n=r=null,e}();var R=/(?:\\{[\\s\\S]*\\}|\\[[\\s\\S]*\\])$/,_=/([A-Z])/g;function z(e,t,n,r){if(T.acceptData(e)){var i,a,s=T.expando,c=\"string\"==typeof t,l=e.nodeType,u=l?T.cache:e,d=l?e[s]:e[s]&&s;if(d&&u[d]&&(r||u[d].data)||!c||n!==o)return d||(l?e[s]=d=h.pop()||T.guid++:d=s),u[d]||(u[d]={},l||(u[d].toJSON=T.noop)),(\"object\"==typeof t||\"function\"==typeof t)&&(r?u[d]=T.extend(u[d],t):u[d].data=T.extend(u[d].data,t)),i=u[d],r||(i.data||(i.data={}),i=i.data),n!==o&&(i[T.camelCase(t)]=n),c?null==(a=i[t])&&(a=i[T.camelCase(t)]):a=i,a}}function Q(e,t,n){if(T.acceptData(e)){var r,i,o,a=e.nodeType,s=a?T.cache:e,c=a?e[T.expando]:T.expando;if(s[c]){if(t&&(o=n?s[c]:s[c].data)){T.isArray(t)?t=t.concat(T.map(t,T.camelCase)):t in o?t=[t]:t=(t=T.camelCase(t))in o?[t]:t.split(\" \");for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?X:T.isEmptyObject)(o))return}(n||(delete s[c].data,X(s[c])))&&(a?T.cleanData([e],!0):T.support.deleteExpando||s!=s.window?delete s[c]:s[c]=null)}}}function $(e,t,n){if(n===o&&1===e.nodeType){var r=\"data-\"+t.replace(_,\"-$1\").toLowerCase();if(\"string\"==typeof(n=e.getAttribute(r))){try{n=\"true\"===n||\"false\"!==n&&(\"null\"===n?null:+n+\"\"===n?+n:R.test(n)?T.parseJSON(n):n)}catch(e){}T.data(e,t,n)}else n=o}return n}function X(e){var t;for(t in e)if((\"data\"!==t||!T.isEmptyObject(e[t]))&&\"toJSON\"!==t)return!1;return!0}T.extend({cache:{},expando:\"jQuery\"+(g+Math.random()).replace(/\\D/g,\"\"),noData:{embed:!0,object:\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\",applet:!0},hasData:function(e){return!!(e=e.nodeType?T.cache[e[T.expando]]:e[T.expando])&&!X(e)},data:function(e,t,n){return z(e,t,n)},removeData:function(e,t){return Q(e,t)},_data:function(e,t,n){return z(e,t,n,!0)},_removeData:function(e,t){return Q(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&T.noData[e.nodeName.toLowerCase()];return!t||!0!==t&&e.getAttribute(\"classid\")===t}}),T.fn.extend({data:function(e,t){var n,r,i=this[0],a=0,s=null;if(e===o){if(this.length&&(s=T.data(i),1===i.nodeType&&!T._data(i,\"parsedAttrs\"))){for(n=i.attributes;n.length>a;a++)(r=n[a].name).indexOf(\"data-\")||(r=T.camelCase(r.slice(5)),$(i,r,s[r]));T._data(i,\"parsedAttrs\",!0)}return s}return\"object\"==typeof e?this.each((function(){T.data(this,e)})):T.access(this,(function(t){return t===o?i?$(i,e,T.data(i,e)):null:(this.each((function(){T.data(this,e,t)})),o)}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){T.removeData(this,e)}))}}),T.extend({queue:function(e,t,n){var r;return e?(t=(t||\"fx\")+\"queue\",r=T._data(e,t),n&&(!r||T.isArray(n)?r=T._data(e,t,T.makeArray(n)):r.push(n)),r||[]):o},dequeue:function(e,t){t=t||\"fx\";var n=T.queue(e,t),r=n.length,i=n.shift(),o=T._queueHooks(e,t);\"inprogress\"===i&&(i=n.shift(),r--),o.cur=i,i&&(\"fx\"===t&&n.unshift(\"inprogress\"),delete o.stop,i.call(e,(function(){T.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+\"queueHooks\";return T._data(e,n)||T._data(e,n,{empty:T.Callbacks(\"once memory\").add((function(){T._removeData(e,t+\"queue\"),T._removeData(e,n)}))})}}),T.fn.extend({queue:function(e,t){var n=2;return\"string\"!=typeof e&&(t=e,e=\"fx\",n--),n>arguments.length?T.queue(this[0],e):t===o?this:this.each((function(){var n=T.queue(this,e,t);T._queueHooks(this,e),\"fx\"===e&&\"inprogress\"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},delay:function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||\"fx\",this.queue(t,(function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}}))},clearQueue:function(e){return this.queue(e||\"fx\",[])},promise:function(e,t){var n,r=1,i=T.Deferred(),a=this,s=this.length,c=function(){--r||i.resolveWith(a,[a])};for(\"string\"!=typeof e&&(t=e,e=o),e=e||\"fx\";s--;)(n=T._data(a[s],e+\"queueHooks\"))&&n.empty&&(r++,n.empty.add(c));return c(),i.promise(t)}});var W,U,V=/[\\t\\r\\n]/g,Y=/\\r/g,J=/^(?:input|select|textarea|button|object)$/i,G=/^(?:a|area)$/i,K=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Z=/^(?:checked|selected)$/i,ee=T.support.getSetAttribute,te=T.support.input;T.fn.extend({attr:function(e,t){return T.access(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))},prop:function(e,t){return T.access(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return e=T.propFix[e]||e,this.each((function(){try{this[e]=o,delete this[e]}catch(e){}}))},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,c=\"string\"==typeof e&&e;if(T.isFunction(e))return this.each((function(t){T(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||\"\").match(E)||[];s>a;a++)if(r=1===(n=this[a]).nodeType&&(n.className?(\" \"+n.className+\" \").replace(V,\" \"):\" \")){for(o=0;i=t[o++];)0>r.indexOf(\" \"+i+\" \")&&(r+=i+\" \");n.className=T.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,c=0===arguments.length||\"string\"==typeof e&&e;if(T.isFunction(e))return this.each((function(t){T(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||\"\").match(E)||[];s>a;a++)if(r=1===(n=this[a]).nodeType&&(n.className?(\" \"+n.className+\" \").replace(V,\" \"):\"\")){for(o=0;i=t[o++];)for(;r.indexOf(\" \"+i+\" \")>=0;)r=r.replace(\" \"+i+\" \",\" \");n.className=e?T.trim(r):\"\"}return this},toggleClass:function(e,t){var n=typeof e,r=\"boolean\"==typeof t;return T.isFunction(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if(\"string\"===n)for(var i,o=0,a=T(this),s=t,l=e.match(E)||[];i=l[o++];)s=r?s:!a.hasClass(i),a[s?\"addClass\":\"removeClass\"](i);else(n===c||\"boolean\"===n)&&(this.className&&T._data(this,\"__className__\",this.className),this.className=this.className||!1===e?\"\":T._data(this,\"__className__\")||\"\")}))},hasClass:function(e){for(var t=\" \"+e+\" \",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(\" \"+this[n].className+\" \").replace(V,\" \").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];return arguments.length?(r=T.isFunction(e),this.each((function(t){var i,a=T(this);1===this.nodeType&&(null==(i=r?e.call(this,t,a.val()):e)?i=\"\":\"number\"==typeof i?i+=\"\":T.isArray(i)&&(i=T.map(i,(function(e){return null==e?\"\":e+\"\"}))),(n=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&\"set\"in n&&n.set(this,i,\"value\")!==o||(this.value=i))}))):i?(n=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&\"get\"in n&&(t=n.get(i,\"value\"))!==o?t:\"string\"==typeof(t=i.value)?t.replace(Y,\"\"):null==t?\"\":t:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o=\"select-one\"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,c=0>i?s:o?i:0;s>c;c++)if(!(!(n=r[c]).selected&&c!==i||(T.support.optDisabled?n.disabled:null!==n.getAttribute(\"disabled\"))||n.parentNode.disabled&&T.nodeName(n.parentNode,\"optgroup\"))){if(t=T(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=T.makeArray(t);return T(e).find(\"option\").each((function(){this.selected=T.inArray(T(this).val(),n)>=0})),n.length||(e.selectedIndex=-1),n}}},attr:function(e,t,n){var r,i,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===c?T.prop(e,t,n):((i=1!==s||!T.isXMLDoc(e))&&(t=t.toLowerCase(),r=T.attrHooks[t]||(K.test(t)?U:W)),n===o?r&&i&&\"get\"in r&&null!==(a=r.get(e,t))?a:(typeof e.getAttribute!==c&&(a=e.getAttribute(t)),null==a?o:a):null!==n?r&&i&&\"set\"in r&&(a=r.set(e,n,t))!==o?a:(e.setAttribute(t,n+\"\"),n):(T.removeAttr(e,t),o))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(E);if(o&&1===e.nodeType)for(;n=o[i++];)r=T.propFix[n]||n,K.test(n)?!ee&&Z.test(n)?e[T.camelCase(\"default-\"+n)]=e[r]=!1:e[r]=!1:T.attr(e,n,\"\"),e.removeAttribute(ee?n:r)},attrHooks:{type:{set:function(e,t){if(!T.support.radioValue&&\"radio\"===t&&T.nodeName(e,\"input\")){var n=e.value;return e.setAttribute(\"type\",t),n&&(e.value=n),t}}}},propFix:{tabindex:\"tabIndex\",readonly:\"readOnly\",for:\"htmlFor\",class:\"className\",maxlength:\"maxLength\",cellspacing:\"cellSpacing\",cellpadding:\"cellPadding\",rowspan:\"rowSpan\",colspan:\"colSpan\",usemap:\"useMap\",frameborder:\"frameBorder\",contenteditable:\"contentEditable\"},prop:function(e,t,n){var r,i,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return(1!==a||!T.isXMLDoc(e))&&(t=T.propFix[t]||t,i=T.propHooks[t]),n!==o?i&&\"set\"in i&&(r=i.set(e,n,t))!==o?r:e[t]=n:i&&\"get\"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttributeNode(\"tabindex\");return t&&t.specified?parseInt(t.value,10):J.test(e.nodeName)||G.test(e.nodeName)&&e.href?0:o}}}}),U={get:function(e,t){var n=T.prop(e,t),r=\"boolean\"==typeof n&&e.getAttribute(t),i=\"boolean\"==typeof n?te&&ee?null!=r:Z.test(t)?e[T.camelCase(\"default-\"+t)]:!!r:e.getAttributeNode(t);return i&&!1!==i.value?t.toLowerCase():o},set:function(e,t,n){return!1===t?T.removeAttr(e,n):te&&ee||!Z.test(n)?e.setAttribute(!ee&&T.propFix[n]||n,n):e[T.camelCase(\"default-\"+n)]=e[n]=!0,n}},te&&ee||(T.attrHooks.value={get:function(e,t){var n=e.getAttributeNode(t);return T.nodeName(e,\"input\")?e.defaultValue:n&&n.specified?n.value:o},set:function(e,t,n){return T.nodeName(e,\"input\")?(e.defaultValue=t,o):W&&W.set(e,t,n)}}),ee||(W=T.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&(\"id\"===t||\"name\"===t||\"coords\"===t?\"\"!==n.value:n.specified)?n.value:o},set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+=\"\",\"value\"===n||t===e.getAttribute(n)?t:o}},T.attrHooks.contenteditable={get:W.get,set:function(e,t,n){W.set(e,\"\"!==t&&t,n)}},T.each([\"width\",\"height\"],(function(e,t){T.attrHooks[t]=T.extend(T.attrHooks[t],{set:function(e,n){return\"\"===n?(e.setAttribute(t,\"auto\"),n):o}})}))),T.support.hrefNormalized||(T.each([\"href\",\"src\",\"width\",\"height\"],(function(e,t){T.attrHooks[t]=T.extend(T.attrHooks[t],{get:function(e){var n=e.getAttribute(t,2);return null==n?o:n}})})),T.each([\"href\",\"src\"],(function(e,t){T.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}))),T.support.style||(T.attrHooks.style={get:function(e){return e.style.cssText||o},set:function(e,t){return e.style.cssText=t+\"\"}}),T.support.optSelected||(T.propHooks.selected=T.extend(T.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),T.support.enctype||(T.propFix.enctype=\"encoding\"),T.support.checkOn||T.each([\"radio\",\"checkbox\"],(function(){T.valHooks[this]={get:function(e){return null===e.getAttribute(\"value\")?\"on\":e.value}}})),T.each([\"radio\",\"checkbox\"],(function(){T.valHooks[this]=T.extend(T.valHooks[this],{set:function(e,t){return T.isArray(t)?e.checked=T.inArray(T(e).val(),t)>=0:o}})}));var ne=/^(?:input|select|textarea)$/i,re=/^key/,ie=/^(?:mouse|contextmenu)|click/,oe=/^(?:focusinfocus|focusoutblur)$/,ae=/^([^.]*)(?:\\.(.+)|)$/;function se(){return!0}function ce(){return!1}T.event={global:{},add:function(e,t,n,r,i){var a,s,l,u,d,f,p,h,g,m,v,y=T._data(e);if(y){for(n.handler&&(n=(u=n).handler,i=u.selector),n.guid||(n.guid=T.guid++),(s=y.events)||(s=y.events={}),(f=y.handle)||((f=y.handle=function(e){return typeof T===c||e&&T.event.triggered===e.type?o:T.event.dispatch.apply(f.elem,arguments)}).elem=e),l=(t=(t||\"\").match(E)||[\"\"]).length;l--;)g=v=(a=ae.exec(t[l])||[])[1],m=(a[2]||\"\").split(\".\").sort(),d=T.event.special[g]||{},g=(i?d.delegateType:d.bindType)||g,d=T.event.special[g]||{},p=T.extend({type:g,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&T.expr.match.needsContext.test(i),namespace:m.join(\".\")},u),(h=s[g])||((h=s[g]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,m,f)||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent(\"on\"+g,f))),d.add&&(d.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,p):h.push(p),T.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,c,l,u,d,f,p,h,g,m=T.hasData(e)&&T._data(e);if(m&&(u=m.events)){for(l=(t=(t||\"\").match(E)||[\"\"]).length;l--;)if(p=g=(s=ae.exec(t[l])||[])[1],h=(s[2]||\"\").split(\".\").sort(),p){for(d=T.event.special[p]||{},f=u[p=(r?d.delegateType:d.bindType)||p]||[],s=s[2]&&RegExp(\"(^|\\\\.)\"+h.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"),c=o=f.length;o--;)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&(\"**\"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,d.remove&&d.remove.call(e,a));c&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,m.handle)||T.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)T.event.remove(e,p+t[l],n,r,!0);T.isEmptyObject(u)&&(delete m.handle,T._removeData(e,\"events\"))}},trigger:function(e,t,n,r){var a,s,c,u,d,f,p,h=[n||l],g=w.call(e,\"type\")?e.type:e,m=w.call(e,\"namespace\")?e.namespace.split(\".\"):[];if(c=f=n=n||l,3!==n.nodeType&&8!==n.nodeType&&!oe.test(g+T.event.triggered)&&(g.indexOf(\".\")>=0&&(m=g.split(\".\"),g=m.shift(),m.sort()),s=0>g.indexOf(\":\")&&\"on\"+g,(e=e[T.expando]?e:new T.Event(g,\"object\"==typeof e&&e)).isTrigger=!0,e.namespace=m.join(\".\"),e.namespace_re=e.namespace?RegExp(\"(^|\\\\.)\"+m.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,e.result=o,e.target||(e.target=n),t=null==t?[e]:T.makeArray(t,[e]),d=T.event.special[g]||{},r||!d.trigger||!1!==d.trigger.apply(n,t))){if(!r&&!d.noBubble&&!T.isWindow(n)){for(u=d.delegateType||g,oe.test(u+g)||(c=c.parentNode);c;c=c.parentNode)h.push(c),f=c;f===(n.ownerDocument||l)&&h.push(f.defaultView||f.parentWindow||i)}for(p=0;(c=h[p++])&&!e.isPropagationStopped();)e.type=p>1?u:d.bindType||g,(a=(T._data(c,\"events\")||{})[e.type]&&T._data(c,\"handle\"))&&a.apply(c,t),(a=s&&c[s])&&T.acceptData(c)&&a.apply&&!1===a.apply(c,t)&&e.preventDefault();if(e.type=g,!(r||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(n.ownerDocument,t)||\"click\"===g&&T.nodeName(n,\"a\"))&&T.acceptData(n)&&s&&n[g]&&!T.isWindow(n)){(f=n[s])&&(n[s]=null),T.event.triggered=g;try{n[g]()}catch(e){}T.event.triggered=o,f&&(n[s]=f)}return e.result}},dispatch:function(e){e=T.event.fix(e);var t,n,r,i,a,s=[],c=y.call(arguments),l=(T._data(this,\"events\")||{})[e.type]||[],u=T.event.special[e.type]||{};if(c[0]=e,e.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,e)){for(s=T.event.handlers.call(this,e,l),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,a=0;(r=i.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,(n=((T.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,c))!==o&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,a,s=[],c=t.delegateCount,l=e.target;if(c&&l.nodeType&&(!e.button||\"click\"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||\"click\"!==e.type)){for(i=[],a=0;c>a;a++)i[n=(r=t[a]).selector+\" \"]===o&&(i[n]=r.needsContext?T(n,this).index(l)>=0:T.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return t.length>c&&s.push({elem:this,handlers:t.slice(c)}),s},fix:function(e){if(e[T.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=ie.test(i)?this.mouseHooks:re.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new T.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=o.srcElement||l),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:\"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),fixHooks:{},keyHooks:{props:\"char charCode key keyCode\".split(\" \"),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:\"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),filter:function(e,t){var n,r,i,a=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=(r=e.target.ownerDocument||l).documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||a===o||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return T.nodeName(this,\"input\")&&\"checkbox\"===this.type&&this.click?(this.click(),!1):o}},focus:{trigger:function(){if(this!==l.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:\"focusin\"},blur:{trigger:function(){return this===l.activeElement&&this.blur?(this.blur(),!1):o},delegateType:\"focusout\"},beforeunload:{postDispatch:function(e){e.result!==o&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?T.event.trigger(i,null,t):T.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},T.removeEvent=l.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r=\"on\"+t;e.detachEvent&&(typeof e[r]===c&&(e[r]=null),e.detachEvent(r,n))},T.Event=function(e,t){return this instanceof T.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?se:ce):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||T.now(),this[T.expando]=!0,o):new T.Event(e,t)},T.Event.prototype={isDefaultPrevented:ce,isPropagationStopped:ce,isImmediatePropagationStopped:ce,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=se,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=se,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=se,this.stopPropagation()}},T.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!T.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),T.support.submitBubbles||(T.event.special.submit={setup:function(){return!T.nodeName(this,\"form\")&&(T.event.add(this,\"click._submit keypress._submit\",(function(e){var t=e.target,n=T.nodeName(t,\"input\")||T.nodeName(t,\"button\")?t.form:o;n&&!T._data(n,\"submitBubbles\")&&(T.event.add(n,\"submit._submit\",(function(e){e._submit_bubble=!0})),T._data(n,\"submitBubbles\",!0))})),o)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&T.event.simulate(\"submit\",this.parentNode,e,!0))},teardown:function(){return!T.nodeName(this,\"form\")&&(T.event.remove(this,\"._submit\"),o)}}),T.support.changeBubbles||(T.event.special.change={setup:function(){return ne.test(this.nodeName)?((\"checkbox\"===this.type||\"radio\"===this.type)&&(T.event.add(this,\"propertychange._change\",(function(e){\"checked\"===e.originalEvent.propertyName&&(this._just_changed=!0)})),T.event.add(this,\"click._change\",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),T.event.simulate(\"change\",this,e,!0)}))),!1):(T.event.add(this,\"beforeactivate._change\",(function(e){var t=e.target;ne.test(t.nodeName)&&!T._data(t,\"changeBubbles\")&&(T.event.add(t,\"change._change\",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||T.event.simulate(\"change\",this.parentNode,e,!0)})),T._data(t,\"changeBubbles\",!0))})),o)},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||\"radio\"!==t.type&&\"checkbox\"!==t.type?e.handleObj.handler.apply(this,arguments):o},teardown:function(){return T.event.remove(this,\"._change\"),!ne.test(this.nodeName)}}),T.support.focusinBubbles||T.each({focus:\"focusin\",blur:\"focusout\"},(function(e,t){var n=0,r=function(e){T.event.simulate(t,e.target,T.event.fix(e),!0)};T.event.special[t]={setup:function(){0==n++&&l.addEventListener(e,r,!0)},teardown:function(){0==--n&&l.removeEventListener(e,r,!0)}}})),T.fn.extend({on:function(e,t,n,r,i){var a,s;if(\"object\"==typeof e){for(a in\"string\"!=typeof t&&(n=n||t,t=o),e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=o):null==r&&(\"string\"==typeof t?(r=n,n=o):(r=n,n=t,t=o)),!1===r)r=ce;else if(!r)return this;return 1===i&&(s=r,(r=function(e){return T().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),this.each((function(){T.event.add(this,e,r,n,t)}))},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,T(e.delegateTarget).off(r.namespace?r.origType+\".\"+r.namespace:r.origType,r.selector,r.handler),this;if(\"object\"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||\"function\"==typeof t)&&(n=t,t=o),!1===n&&(n=ce),this.each((function(){T.event.remove(this,e,n,t)}))},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,\"**\"):this.off(t,e||\"**\",n)},trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];return n?T.event.trigger(e,t,n,!0):o}}),function(e,t){var n,r,i,o,a,s,c,l,u,d,f,p,h,g,m,v,y,b=\"sizzle\"+-new Date,x=e.document,w={},C=0,P=0,E=te(),S=te(),H=te(),k=typeof t,N=[],I=N.pop,A=N.push,D=N.slice,j=N.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},L=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",F=\"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",O=F.replace(\"w\",\"w#\"),M=\"\\\\[\"+L+\"*(\"+F+\")\"+L+\"*(?:([*^$|!~]?=)\"+L+\"*(?:(['\\\"])((?:\\\\\\\\.|[^\\\\\\\\])*?)\\\\3|(\"+O+\")|)|)\"+L+\"*\\\\]\",q=\":(\"+F+\")(?:\\\\(((['\\\"])((?:\\\\\\\\.|[^\\\\\\\\])*?)\\\\3|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+M.replace(3,8)+\")*)|.*)\\\\)|)\",B=RegExp(\"^\"+L+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+L+\"+$\",\"g\"),R=RegExp(\"^\"+L+\"*,\"+L+\"*\"),_=RegExp(\"^\"+L+\"*([\\\\x20\\\\t\\\\r\\\\n\\\\f>+~])\"+L+\"*\"),z=RegExp(q),Q=RegExp(\"^\"+O+\"$\"),$={ID:RegExp(\"^#(\"+F+\")\"),CLASS:RegExp(\"^\\\\.(\"+F+\")\"),NAME:RegExp(\"^\\\\[name=['\\\"]?(\"+F+\")['\\\"]?\\\\]\"),TAG:RegExp(\"^(\"+F.replace(\"w\",\"w*\")+\")\"),ATTR:RegExp(\"^\"+M),PSEUDO:RegExp(\"^\"+q),CHILD:RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+L+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+L+\"*(?:([+-]|)\"+L+\"*(\\\\d+)|))\"+L+\"*\\\\)|)\",\"i\"),needsContext:RegExp(\"^\"+L+\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+L+\"*((?:-\\\\d)?\\\\d*)\"+L+\"*\\\\)|)(?=[^-]|$)\",\"i\")},X=/[\\x20\\t\\r\\n\\f]*[+~]/,W=/^[^{]+\\{\\s*\\[native code/,U=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,V=/^(?:input|select|textarea|button)$/i,Y=/^h\\d$/i,J=/'|\\\\/g,G=/\\=[\\x20\\t\\r\\n\\f]*([^'\"\\]]*)[\\x20\\t\\r\\n\\f]*\\]/g,K=/\\\\([\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|.)/g,Z=function(e,t){var n=\"0x\"+t-65536;return n!=n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{D.call(x.documentElement.childNodes,0)[0].nodeType}catch(e){D=function(e){for(var t,n=[];t=this[e++];)n.push(t);return n}}function ee(e){return W.test(e+\"\")}function te(){var e,t=[];return e=function(n,r){return t.push(n+=\" \")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ne(e){return e[b]=!0,e}function re(e){var t=d.createElement(\"div\");try{return e(t)}catch(e){return!1}finally{t=null}}function ie(e,t,n,r){var i,o,a,s,c,l,f,g,m,y;if((t?t.ownerDocument||t:x)!==d&&u(t),n=n||[],!e||\"string\"!=typeof e)return n;if(1!==(s=(t=t||d).nodeType)&&9!==s)return[];if(!p&&!r){if(i=U.exec(e))if(a=i[1]){if(9===s){if(!(o=t.getElementById(a))||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&v(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return A.apply(n,D.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&w.getByClassName&&t.getElementsByClassName)return A.apply(n,D.call(t.getElementsByClassName(a),0)),n}if(w.qsa&&!h.test(e)){if(f=!0,g=b,m=t,y=9===s&&e,1===s&&\"object\"!==t.nodeName.toLowerCase()){for(l=le(e),(f=t.getAttribute(\"id\"))?g=f.replace(J,\"\\\\$&\"):t.setAttribute(\"id\",g),g=\"[id='\"+g+\"'] \",c=l.length;c--;)l[c]=g+ue(l[c]);m=X.test(e)&&t.parentNode||t,y=l.join(\",\")}if(y)try{return A.apply(n,D.call(m.querySelectorAll(y),0)),n}catch(e){}finally{f||t.removeAttribute(\"id\")}}}return ve(e.replace(B,\"$1\"),t,n,r)}function oe(e,t){var n=t&&e,r=n&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ae(e){return function(t){return\"input\"===t.nodeName.toLowerCase()&&t.type===e}}function se(e){return function(t){var n=t.nodeName.toLowerCase();return(\"input\"===n||\"button\"===n)&&t.type===e}}function ce(e){return ne((function(t){return t=+t,ne((function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))}))}))}for(n in a=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&\"HTML\"!==t.nodeName},u=ie.setDocument=function(e){var n=e?e.ownerDocument||e:x;return n!==d&&9===n.nodeType&&n.documentElement?(d=n,f=n.documentElement,p=a(n),w.tagNameNoComments=re((function(e){return e.appendChild(n.createComment(\"\")),!e.getElementsByTagName(\"*\").length})),w.attributes=re((function(e){e.innerHTML=\"<select></select>\";var t=typeof e.lastChild.getAttribute(\"multiple\");return\"boolean\"!==t&&\"string\"!==t})),w.getByClassName=re((function(e){return e.innerHTML=\"<div class='hidden e'></div><div class='hidden'></div>\",!(!e.getElementsByClassName||!e.getElementsByClassName(\"e\").length)&&(e.lastChild.className=\"e\",2===e.getElementsByClassName(\"e\").length)})),w.getByName=re((function(e){e.id=b+0,e.innerHTML=\"<a name='\"+b+\"'></a><div name='\"+b+\"'></div>\",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(b).length===2+n.getElementsByName(b+0).length;return w.getIdNotName=!n.getElementById(b),f.removeChild(e),t})),i.attrHandle=re((function(e){return e.innerHTML=\"<a href='#'></a>\",e.firstChild&&typeof e.firstChild.getAttribute!==k&&\"#\"===e.firstChild.getAttribute(\"href\")}))?{}:{href:function(e){return e.getAttribute(\"href\",2)},type:function(e){return e.getAttribute(\"type\")}},w.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==k&&!p){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(K,Z);return function(e){return e.getAttribute(\"id\")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==k&&!p){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==k&&r.getAttributeNode(\"id\").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(K,Z);return function(e){var n=typeof e.getAttributeNode!==k&&e.getAttributeNode(\"id\");return n&&n.value===t}}),i.find.TAG=w.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==k?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if(\"*\"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=w.getByName&&function(e,n){return typeof n.getElementsByName!==k?n.getElementsByName(name):t},i.find.CLASS=w.getByClassName&&function(e,n){return typeof n.getElementsByClassName===k||p?t:n.getElementsByClassName(e)},g=[],h=[\":focus\"],(w.qsa=ee(n.querySelectorAll))&&(re((function(e){e.innerHTML=\"<select><option selected=''></option></select>\",e.querySelectorAll(\"[selected]\").length||h.push(\"\\\\[\"+L+\"*(?:checked|disabled|ismap|multiple|readonly|selected|value)\"),e.querySelectorAll(\":checked\").length||h.push(\":checked\")})),re((function(e){e.innerHTML=\"<input type='hidden' i=''/>\",e.querySelectorAll(\"[i^='']\").length&&h.push(\"[*^$]=\"+L+\"*(?:\\\"\\\"|'')\"),e.querySelectorAll(\":enabled\").length||h.push(\":enabled\",\":disabled\"),e.querySelectorAll(\"*,:x\"),h.push(\",.*:\")}))),(w.matchesSelector=ee(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&re((function(e){w.disconnectedMatch=m.call(e,\"div\"),m.call(e,\"[s!='']:x\"),g.push(\"!=\",q)})),h=RegExp(h.join(\"|\")),g=RegExp(g.join(\"|\")),v=ee(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},y=f.compareDocumentPosition?function(e,t){var r;return e===t?(c=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||v(x,e)?-1:t===n||v(x,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return c=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return oe(e,t);for(r=e;r=r.parentNode;)s.unshift(r);for(r=t;r=r.parentNode;)l.unshift(r);for(;s[i]===l[i];)i++;return i?oe(s[i],l[i]):s[i]===x?-1:l[i]===x?1:0},c=!1,[0,0].sort(y),w.detectDuplicates=c,d):d},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&u(e),t=t.replace(G,\"='$1']\"),!(!w.matchesSelector||p||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return ie(t,d,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==d&&u(e),v(e,t)},ie.attr=function(e,t){var n;return(e.ownerDocument||e)!==d&&u(e),p||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):p||w.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&!0===e[t]?t:n&&n.specified?n.value:null},ie.error=function(e){throw Error(\"Syntax error, unrecognized expression: \"+e)},ie.uniqueSort=function(e){var t,n=[],r=1,i=0;if(c=!w.detectDuplicates,e.sort(y),c){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},o=ie.getText=function(e){var t,n=\"\",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if(\"string\"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ie.selectors={cacheLength:50,createPseudo:ne,match:$,find:{},relative:{\">\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(K,Z),e[3]=(e[4]||e[5]||\"\").replace(K,Z),\"~=\"===e[2]&&(e[3]=\" \"+e[3]+\" \"),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),\"nth\"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(\"even\"===e[3]||\"odd\"===e[3])),e[5]=+(e[7]+e[8]||\"odd\"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return $.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=le(n,!0))&&(t=n.indexOf(\")\",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return\"*\"===e?function(){return!0}:(e=e.replace(K,Z).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=E[e+\" \"];return t||(t=RegExp(\"(^|\"+L+\")\"+e+\"(\"+L+\"|$)\"))&&E(e,(function(e){return t.test(e.className||typeof e.getAttribute!==k&&e.getAttribute(\"class\")||\"\")}))},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?\"!=\"===t:!t||(i+=\"\",\"=\"===t?i===n:\"!=\"===t?i!==n:\"^=\"===t?n&&0===i.indexOf(n):\"*=\"===t?n&&i.indexOf(n)>-1:\"$=\"===t?n&&i.slice(-n.length)===n:\"~=\"===t?(\" \"+i+\" \").indexOf(n)>-1:\"|=\"===t&&(i===n||i.slice(0,n.length+1)===n+\"-\"))}},CHILD:function(e,t,n,r,i){var o=\"nth\"!==e.slice(0,3),a=\"last\"!==e.slice(-4),s=\"of-type\"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var l,u,d,f,p,h,g=o!==a?\"nextSibling\":\"previousSibling\",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!c&&!s;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=g=\"only\"===e&&!h&&\"nextSibling\"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(p=(l=(u=m[b]||(m[b]={}))[e]||[])[0]===C&&l[1],f=l[0]===C&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){u[e]=[C,p,f];break}}else if(y&&(l=(t[b]||(t[b]={}))[e])&&l[0]===C)f=l[1];else for(;(d=++p&&d&&d[g]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[b]||(d[b]={}))[e]=[C,f]),d!==t)););return(f-=i)===r||0==f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ie.error(\"unsupported pseudo: \"+e);return r[b]?r(t):r.length>1?(n=[e,e,\"\",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ne((function(e,n){for(var i,o=r(e,t),a=o.length;a--;)e[i=j.call(e,o[a])]=!(n[i]=o[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:ne((function(e){var t=[],n=[],r=s(e.replace(B,\"$1\"));return r[b]?ne((function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}})),has:ne((function(e){return function(t){return ie(e,t).length>0}})),contains:ne((function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}})),lang:ne((function(e){return Q.test(e||\"\")||ie.error(\"unsupported lang: \"+e),e=e.replace(K,Z).toLowerCase(),function(t){var n;do{if(n=p?t.getAttribute(\"xml:lang\")||t.getAttribute(\"lang\"):t.lang)return(n=n.toLowerCase())===e||0===n.indexOf(e+\"-\")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return\"input\"===t&&!!e.checked||\"option\"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>\"@\"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return\"input\"===t&&\"button\"===e.type||\"button\"===t},text:function(e){var t;return\"input\"===e.nodeName.toLowerCase()&&\"text\"===e.type&&(null==(t=e.getAttribute(\"type\"))||t.toLowerCase()===e.type)},first:ce((function(){return[0]})),last:ce((function(e,t){return[t-1]})),eq:ce((function(e,t,n){return[0>n?n+t:n]})),even:ce((function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e})),odd:ce((function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e})),lt:ce((function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e})),gt:ce((function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e}))}},{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=ae(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=se(n);function le(e,t){var n,r,o,a,s,c,l,u=S[e+\" \"];if(u)return t?0:u.slice(0);for(s=e,c=[],l=i.preFilter;s;){for(a in(!n||(r=R.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),c.push(o=[])),n=!1,(r=_.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(B,\" \")}),s=s.slice(n.length)),i.filter)!(r=$[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):S(e,c).slice(0)}function ue(e){for(var t=0,n=e.length,r=\"\";n>t;t++)r+=e[t].value;return r}function de(e,t,n){var i=t.dir,o=n&&\"parentNode\"===i,a=P++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var c,l,u,d=C+\" \"+a;if(s){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||o)if((l=(u=t[b]||(t[b]={}))[i])&&l[0]===d){if(!0===(c=l[1])||c===r)return!0===c}else if((l=u[i]=[d])[1]=e(t,n,s)||r,!0===l[1])return!0}}function fe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function pe(e,t,n,r,i){for(var o,a=[],s=0,c=e.length,l=null!=t;c>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function he(e,t,n,r,i,o){return r&&!r[b]&&(r=he(r)),i&&!i[b]&&(i=he(i,o)),ne((function(o,a,s,c){var l,u,d,f=[],p=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)ie(e,t[r],n);return n}(t||\"*\",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:pe(g,f,e,s,c),v=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,v,s,c),r)for(l=pe(v,p),r(l,[],s,c),u=l.length;u--;)(d=l[u])&&(v[p[u]]=!(m[p[u]]=d));if(o){if(i||e){if(i){for(l=[],u=v.length;u--;)(d=v[u])&&l.push(m[u]=d);i(null,v=[],l,c)}for(u=v.length;u--;)(d=v[u])&&(l=i?j.call(o,d):f[u])>-1&&(o[l]=!(a[l]=d))}}else v=pe(v===a?v.splice(h,v.length):v),i?i(null,a,v,c):A.apply(a,v)}))}function ge(e){for(var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[\" \"],c=a?1:0,u=de((function(e){return e===t}),s,!0),d=de((function(e){return j.call(t,e)>-1}),s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?u(e,n,r):d(e,n,r))}];o>c;c++)if(n=i.relative[e[c].type])f=[de(fe(f),n)];else{if((n=i.filter[e[c].type].apply(null,e[c].matches))[b]){for(r=++c;o>r&&!i.relative[e[r].type];r++);return he(c>1&&fe(f),c>1&&ue(e.slice(0,c-1)).replace(B,\"$1\"),n,r>c&&ge(e.slice(c,r)),o>r&&ge(e=e.slice(r)),o>r&&ue(e))}f.push(n)}return fe(f)}function me(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,c,u,f,p){var h,g,m,v=[],y=0,b=\"0\",x=s&&[],w=null!=p,T=l,P=s||a&&i.find.TAG(\"*\",p&&c.parentNode||c),E=C+=null==T?1:Math.random()||.1;for(w&&(l=c!==d&&c,r=n);null!=(h=P[b]);b++){if(a&&h){for(g=0;m=e[g++];)if(m(h,c,u)){f.push(h);break}w&&(C=E,r=++n)}o&&((h=!m&&h)&&y--,s&&x.push(h))}if(y+=b,o&&b!==y){for(g=0;m=t[g++];)m(x,v,c,u);if(s){if(y>0)for(;b--;)x[b]||v[b]||(v[b]=I.call(f));v=pe(v)}A.apply(f,v),w&&!s&&v.length>0&&y+t.length>1&&ie.uniqueSort(f)}return w&&(C=E,l=T),x};return o?ne(s):s}function ve(e,t,n,r){var o,a,c,l,u,d=le(e);if(!r&&1===d.length){if((a=d[0]=d[0].slice(0)).length>2&&\"ID\"===(c=a[0]).type&&9===t.nodeType&&!p&&i.relative[a[1].type]){if(!(t=i.find.ID(c.matches[0].replace(K,Z),t)[0]))return n;e=e.slice(a.shift().value.length)}for(o=$.needsContext.test(e)?0:a.length;o--&&(c=a[o],!i.relative[l=c.type]);)if((u=i.find[l])&&(r=u(c.matches[0].replace(K,Z),X.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),!(e=r.length&&ue(a)))return A.apply(n,D.call(r,0)),n;break}}return s(e,d)(r,t,p,n,X.test(e)),n}function ye(){}s=ie.compile=function(e,t){var n,r=[],i=[],o=H[e+\" \"];if(!o){for(t||(t=le(e)),n=t.length;n--;)(o=ge(t[n]))[b]?r.push(o):i.push(o);o=H(e,me(i,r))}return o},i.pseudos.nth=i.pseudos.eq,i.filters=ye.prototype=i.pseudos,i.setFilters=new ye,u(),ie.attr=T.attr,T.find=ie,T.expr=ie.selectors,T.expr[\":\"]=T.expr.pseudos,T.unique=ie.uniqueSort,T.text=ie.getText,T.isXMLDoc=ie.isXML,T.contains=ie.contains}(i);var le=/Until$/,ue=/^(?:parents|prev(?:Until|All))/,de=/^.[^:#\\[\\.,]*$/,fe=T.expr.match.needsContext,pe={children:!0,contents:!0,next:!0,prev:!0};function he(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function ge(e,t,n){if(t=t||0,T.isFunction(t))return T.grep(e,(function(e,r){return!!t.call(e,r,e)===n}));if(t.nodeType)return T.grep(e,(function(e){return e===t===n}));if(\"string\"==typeof t){var r=T.grep(e,(function(e){return 1===e.nodeType}));if(de.test(t))return T.filter(t,r,!n);t=T.filter(t,r)}return T.grep(e,(function(e){return T.inArray(e,t)>=0===n}))}function me(e){var t=ve.split(\"|\"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}T.fn.extend({find:function(e){var t,n,r,i=this.length;if(\"string\"!=typeof e)return r=this,this.pushStack(T(e).filter((function(){for(t=0;i>t;t++)if(T.contains(r[t],this))return!0})));for(n=[],t=0;i>t;t++)T.find(e,this[t],n);return(n=this.pushStack(i>1?T.unique(n):n)).selector=(this.selector?this.selector+\" \":\"\")+e,n},has:function(e){var t,n=T(e,this),r=n.length;return this.filter((function(){for(t=0;r>t;t++)if(T.contains(this,n[t]))return!0}))},not:function(e){return this.pushStack(ge(this,e,!1))},filter:function(e){return this.pushStack(ge(this,e,!0))},is:function(e){return!!e&&(\"string\"==typeof e?fe.test(e)?T(e,this.context).index(this[0])>=0:T.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=fe.test(e)||\"string\"!=typeof e?T(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:T.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?T.unique(o):o)},index:function(e){return e?\"string\"==typeof e?T.inArray(this[0],T(e)):T.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=\"string\"==typeof e?T(e,t):T.makeArray(e&&e.nodeType?[e]:e),r=T.merge(this.get(),n);return this.pushStack(T.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.fn.andSelf=T.fn.addBack,T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T.dir(e,\"parentNode\")},parentsUntil:function(e,t,n){return T.dir(e,\"parentNode\",n)},next:function(e){return he(e,\"nextSibling\")},prev:function(e){return he(e,\"previousSibling\")},nextAll:function(e){return T.dir(e,\"nextSibling\")},prevAll:function(e){return T.dir(e,\"previousSibling\")},nextUntil:function(e,t,n){return T.dir(e,\"nextSibling\",n)},prevUntil:function(e,t,n){return T.dir(e,\"previousSibling\",n)},siblings:function(e){return T.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return T.sibling(e.firstChild)},contents:function(e){return T.nodeName(e,\"iframe\")?e.contentDocument||e.contentWindow.document:T.merge([],e.childNodes)}},(function(e,t){T.fn[e]=function(n,r){var i=T.map(this,t,n);return le.test(e)||(r=n),r&&\"string\"==typeof r&&(i=T.filter(r,i)),i=this.length>1&&!pe[e]?T.unique(i):i,this.length>1&&ue.test(e)&&(i=i.reverse()),this.pushStack(i)}})),T.extend({filter:function(e,t,n){return n&&(e=\":not(\"+e+\")\"),1===t.length?T.find.matchesSelector(t[0],e)?[t[0]]:[]:T.find.matches(e,t)},dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(n===o||1!==i.nodeType||!T(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var ve=\"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video\",ye=/ jQuery\\d+=\"(?:null|\\d+)\"/g,be=RegExp(\"<(?:\"+ve+\")[\\\\s/>]\",\"i\"),xe=/^\\s+/,we=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,Ce=/<([\\w:]+)/,Te=/<tbody/i,Pe=/<|&#?\\w+;/,Ee=/<(?:script|style|link)/i,Se=/^(?:checkbox|radio)$/i,He=/checked\\s*(?:[^=]|=\\s*.checked.)/i,ke=/^$|\\/(?:java|ecma)script/i,Ne=/^true\\/(.*)/,Ie=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,Ae={option:[1,\"<select multiple='multiple'>\",\"</select>\"],legend:[1,\"<fieldset>\",\"</fieldset>\"],area:[1,\"<map>\",\"</map>\"],param:[1,\"<object>\",\"</object>\"],thead:[1,\"<table>\",\"</table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],col:[2,\"<table><tbody></tbody><colgroup>\",\"</colgroup></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:T.support.htmlSerialize?[0,\"\",\"\"]:[1,\"X<div>\",\"</div>\"]},De=me(l).appendChild(l.createElement(\"div\"));function je(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Le(e){var t=e.getAttributeNode(\"type\");return e.type=(t&&t.specified)+\"/\"+e.type,e}function Fe(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute(\"type\"),e}function Oe(e,t){for(var n,r=0;null!=(n=e[r]);r++)T._data(n,\"globalEval\",!t||T._data(t[r],\"globalEval\"))}function Me(e,t){if(1===t.nodeType&&T.hasData(e)){var n,r,i,o=T._data(e),a=T._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;i>r;r++)T.event.add(t,n,s[n][r]);a.data&&(a.data=T.extend({},a.data))}}function qe(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!T.support.noCloneEvent&&t[T.expando]){for(r in(i=T._data(t)).events)T.removeEvent(t,r,i.handle);t.removeAttribute(T.expando)}\"script\"===n&&t.text!==e.text?(Le(t).text=e.text,Fe(t)):\"object\"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),T.support.html5Clone&&e.innerHTML&&!T.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):\"input\"===n&&Se.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):\"option\"===n?t.defaultSelected=t.selected=e.defaultSelected:(\"input\"===n||\"textarea\"===n)&&(t.defaultValue=e.defaultValue)}}function Be(e,t){var n,r,i=0,a=typeof e.getElementsByTagName!==c?e.getElementsByTagName(t||\"*\"):typeof e.querySelectorAll!==c?e.querySelectorAll(t||\"*\"):o;if(!a)for(a=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||T.nodeName(r,t)?a.push(r):T.merge(a,Be(r,t));return t===o||t&&T.nodeName(e,t)?T.merge([e],a):a}function Re(e){Se.test(e.type)&&(e.defaultChecked=e.checked)}Ae.optgroup=Ae.option,Ae.tbody=Ae.tfoot=Ae.colgroup=Ae.caption=Ae.thead,Ae.th=Ae.td,T.fn.extend({text:function(e){return T.access(this,(function(e){return e===o?T.text(this):this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(e))}),null,e,arguments.length)},wrapAll:function(e){if(T.isFunction(e))return this.each((function(t){T(this).wrapAll(e.call(this,t))}));if(this[0]){var t=T(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return T.isFunction(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=T.isFunction(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){T.nodeName(this,\"body\")||T(this).replaceWith(this.childNodes)})).end()},append:function(){return this.domManip(arguments,!0,(function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)}))},prepend:function(){return this.domManip(arguments,!0,(function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)}))},before:function(){return this.domManip(arguments,!1,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,!1,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||T.filter(e,[n]).length>0)&&(t||1!==n.nodeType||T.cleanData(Be(n)),n.parentNode&&(t&&T.contains(n.ownerDocument,n)&&Oe(Be(n,\"script\")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&T.cleanData(Be(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&T.nodeName(e,\"select\")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return T.access(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(e===o)return 1===t.nodeType?t.innerHTML.replace(ye,\"\"):o;if(!(\"string\"!=typeof e||Ee.test(e)||!T.support.htmlSerialize&&be.test(e)||!T.support.leadingWhitespace&&xe.test(e)||Ae[(Ce.exec(e)||[\"\",\"\"])[1].toLowerCase()])){e=e.replace(we,\"<$1></$2>\");try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(Be(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(e){return T.isFunction(e)||\"string\"==typeof e||(e=T(e).not(this).detach()),this.domManip([e],!0,(function(e){var t=this.nextSibling,n=this.parentNode;n&&(T(this).remove(),n.insertBefore(e,t))}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=m.apply([],e);var r,i,a,s,c,l,u=0,d=this.length,f=this,p=d-1,h=e[0],g=T.isFunction(h);if(g||!(1>=d||\"string\"!=typeof h||T.support.checkClone)&&He.test(h))return this.each((function(r){var i=f.eq(r);g&&(e[0]=h.call(this,r,t?i.html():o)),i.domManip(e,t,n)}));if(d&&(r=(l=T.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===l.childNodes.length&&(l=r),r)){for(t=t&&T.nodeName(r,\"tr\"),a=(s=T.map(Be(l,\"script\"),Le)).length;d>u;u++)i=l,u!==p&&(i=T.clone(i,!0,!0),a&&T.merge(s,Be(i,\"script\"))),n.call(t&&T.nodeName(this[u],\"table\")?je(this[u],\"tbody\"):this[u],i,u);if(a)for(c=s[s.length-1].ownerDocument,T.map(s,Fe),u=0;a>u;u++)i=s[u],ke.test(i.type||\"\")&&!T._data(i,\"globalEval\")&&T.contains(c,i)&&(i.src?T.ajax({url:i.src,type:\"GET\",dataType:\"script\",async:!1,global:!1,throws:!0}):T.globalEval((i.text||i.textContent||i.innerHTML||\"\").replace(Ie,\"\")));l=r=null}return this}}),T.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},(function(e,t){T.fn[e]=function(e){for(var n,r=0,i=[],o=T(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),T(o[r])[t](n),v.apply(i,n.get());return this.pushStack(i)}})),T.extend({clone:function(e,t,n){var r,i,o,a,s,c=T.contains(e.ownerDocument,e);if(T.support.html5Clone||T.isXMLDoc(e)||!be.test(\"<\"+e.nodeName+\">\")?o=e.cloneNode(!0):(De.innerHTML=e.outerHTML,De.removeChild(o=De.firstChild)),!(T.support.noCloneEvent&&T.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(r=Be(o),s=Be(e),a=0;null!=(i=s[a]);++a)r[a]&&qe(i,r[a]);if(t)if(n)for(s=s||Be(e),r=r||Be(o),a=0;null!=(i=s[a]);a++)Me(i,r[a]);else Me(e,o);return(r=Be(o,\"script\")).length>0&&Oe(r,!c&&Be(e,\"script\")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,c,l,u,d=e.length,f=me(t),p=[],h=0;d>h;h++)if((o=e[h])||0===o)if(\"object\"===T.type(o))T.merge(p,o.nodeType?[o]:o);else if(Pe.test(o)){for(s=s||f.appendChild(t.createElement(\"div\")),c=(Ce.exec(o)||[\"\",\"\"])[1].toLowerCase(),u=Ae[c]||Ae._default,s.innerHTML=u[1]+o.replace(we,\"<$1></$2>\")+u[2],i=u[0];i--;)s=s.lastChild;if(!T.support.leadingWhitespace&&xe.test(o)&&p.push(t.createTextNode(xe.exec(o)[0])),!T.support.tbody)for(i=(o=\"table\"!==c||Te.test(o)?\"<table>\"!==u[1]||Te.test(o)?0:s:s.firstChild)&&o.childNodes.length;i--;)T.nodeName(l=o.childNodes[i],\"tbody\")&&!l.childNodes.length&&o.removeChild(l);for(T.merge(p,s.childNodes),s.textContent=\"\";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(o));for(s&&f.removeChild(s),T.support.appendChecked||T.grep(Be(p,\"input\"),Re),h=0;o=p[h++];)if((!r||-1===T.inArray(o,r))&&(a=T.contains(o.ownerDocument,o),s=Be(f.appendChild(o),\"script\"),a&&Oe(s),n))for(i=0;o=s[i++];)ke.test(o.type||\"\")&&n.push(o);return s=null,f},cleanData:function(e,t){for(var n,r,i,o,a=0,s=T.expando,l=T.cache,u=T.support.deleteExpando,d=T.event.special;null!=(n=e[a]);a++)if((t||T.acceptData(n))&&(o=(i=n[s])&&l[i])){if(o.events)for(r in o.events)d[r]?T.event.remove(n,r):T.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==c?n.removeAttribute(s):n[s]=null,h.push(i))}}});var _e,ze,Qe,$e=/alpha\\([^)]*\\)/i,Xe=/opacity\\s*=\\s*([^)]*)/,We=/^(top|right|bottom|left)$/,Ue=/^(none|table(?!-c[ea]).+)/,Ve=/^margin/,Ye=RegExp(\"^(\"+P+\")(.*)$\",\"i\"),Je=RegExp(\"^(\"+P+\")(?!px)[a-z%]+$\",\"i\"),Ge=RegExp(\"^([+-])=(\"+P+\")\",\"i\"),Ke={BODY:\"block\"},Ze={position:\"absolute\",visibility:\"hidden\",display:\"block\"},et={letterSpacing:0,fontWeight:400},tt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],nt=[\"Webkit\",\"O\",\"Moz\",\"ms\"];function rt(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=nt.length;i--;)if((t=nt[i]+n)in e)return t;return r}function it(e,t){return e=t||e,\"none\"===T.css(e,\"display\")||!T.contains(e.ownerDocument,e)}function ot(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)(r=e[a]).style&&(o[a]=T._data(r,\"olddisplay\"),n=r.style.display,t?(o[a]||\"none\"!==n||(r.style.display=\"\"),\"\"===r.style.display&&it(r)&&(o[a]=T._data(r,\"olddisplay\",lt(r.nodeName)))):o[a]||(i=it(r),(n&&\"none\"!==n||!i)&&T._data(r,\"olddisplay\",i?n:T.css(r,\"display\"))));for(a=0;s>a;a++)(r=e[a]).style&&(t&&\"none\"!==r.style.display&&\"\"!==r.style.display||(r.style.display=t?o[a]||\"\":\"none\"));return e}function at(e,t,n){var r=Ye.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||\"px\"):t}function st(e,t,n,r,i){for(var o=n===(r?\"border\":\"content\")?4:\"width\"===t?1:0,a=0;4>o;o+=2)\"margin\"===n&&(a+=T.css(e,n+tt[o],!0,i)),r?(\"content\"===n&&(a-=T.css(e,\"padding\"+tt[o],!0,i)),\"margin\"!==n&&(a-=T.css(e,\"border\"+tt[o]+\"Width\",!0,i))):(a+=T.css(e,\"padding\"+tt[o],!0,i),\"padding\"!==n&&(a+=T.css(e,\"border\"+tt[o]+\"Width\",!0,i)));return a}function ct(e,t,n){var r=!0,i=\"width\"===t?e.offsetWidth:e.offsetHeight,o=ze(e),a=T.support.boxSizing&&\"border-box\"===T.css(e,\"boxSizing\",!1,o);if(0>=i||null==i){if((0>(i=Qe(e,t,o))||null==i)&&(i=e.style[t]),Je.test(i))return i;r=a&&(T.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+st(e,t,n||(a?\"border\":\"content\"),r,o)+\"px\"}function lt(e){var t=l,n=Ke[e];return n||(\"none\"!==(n=ut(e,t))&&n||((t=((_e=(_e||T(\"<iframe frameborder='0' width='0' height='0'/>\").css(\"cssText\",\"display:block !important\")).appendTo(t.documentElement))[0].contentWindow||_e[0].contentDocument).document).write(\"<!doctype html><html><body>\"),t.close(),n=ut(e,t),_e.detach()),Ke[e]=n),n}function ut(e,t){var n=T(t.createElement(e)).appendTo(t.body),r=T.css(n[0],\"display\");return n.remove(),r}T.fn.extend({css:function(e,t){return T.access(this,(function(e,t,n){var r,i,a={},s=0;if(T.isArray(t)){for(i=ze(e),r=t.length;r>s;s++)a[t[s]]=T.css(e,t[s],!1,i);return a}return n!==o?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)},show:function(){return ot(this,!0)},hide:function(){return ot(this)},toggle:function(e){var t=\"boolean\"==typeof e;return this.each((function(){(t?e:it(this))?T(this).show():T(this).hide()}))}}),T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Qe(e,\"opacity\");return\"\"===n?\"1\":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:T.support.cssFloat?\"cssFloat\":\"styleFloat\"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,a,s,c=T.camelCase(t),l=e.style;if(t=T.cssProps[c]||(T.cssProps[c]=rt(l,c)),s=T.cssHooks[t]||T.cssHooks[c],n===o)return s&&\"get\"in s&&(i=s.get(e,!1,r))!==o?i:l[t];if(\"string\"===(a=typeof n)&&(i=Ge.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(T.css(e,t)),a=\"number\"),!(null==n||\"number\"===a&&isNaN(n)||(\"number\"!==a||T.cssNumber[c]||(n+=\"px\"),T.support.clearCloneStyle||\"\"!==n||0!==t.indexOf(\"background\")||(l[t]=\"inherit\"),s&&\"set\"in s&&(n=s.set(e,n,r))===o)))try{l[t]=n}catch(e){}}},css:function(e,t,n,r){var i,a,s,c=T.camelCase(t);return t=T.cssProps[c]||(T.cssProps[c]=rt(e.style,c)),(s=T.cssHooks[t]||T.cssHooks[c])&&\"get\"in s&&(a=s.get(e,!0,n)),a===o&&(a=Qe(e,t,r)),\"normal\"===a&&t in et&&(a=et[t]),\"\"===n||n?(i=parseFloat(a),!0===n||T.isNumeric(i)?i||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i}}),i.getComputedStyle?(ze=function(e){return i.getComputedStyle(e,null)},Qe=function(e,t,n){var r,i,a,s=n||ze(e),c=s?s.getPropertyValue(t)||s[t]:o,l=e.style;return s&&(\"\"!==c||T.contains(e.ownerDocument,e)||(c=T.style(e,t)),Je.test(c)&&Ve.test(t)&&(r=l.width,i=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=c,c=s.width,l.width=r,l.minWidth=i,l.maxWidth=a)),c}):l.documentElement.currentStyle&&(ze=function(e){return e.currentStyle},Qe=function(e,t,n){var r,i,a,s=n||ze(e),c=s?s[t]:o,l=e.style;return null==c&&l&&l[t]&&(c=l[t]),Je.test(c)&&!We.test(t)&&(r=l.left,(a=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),l.left=\"fontSize\"===t?\"1em\":c,c=l.pixelLeft+\"px\",l.left=r,a&&(i.left=a)),\"\"===c?\"auto\":c}),T.each([\"height\",\"width\"],(function(e,t){T.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&Ue.test(T.css(e,\"display\"))?T.swap(e,Ze,(function(){return ct(e,t,r)})):ct(e,t,r):o},set:function(e,n,r){var i=r&&ze(e);return at(0,n,r?st(e,t,r,T.support.boxSizing&&\"border-box\"===T.css(e,\"boxSizing\",!1,i),i):0)}}})),T.support.opacity||(T.cssHooks.opacity={get:function(e,t){return Xe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||\"\")?.01*parseFloat(RegExp.$1)+\"\":t?\"1\":\"\"},set:function(e,t){var n=e.style,r=e.currentStyle,i=T.isNumeric(t)?\"alpha(opacity=\"+100*t+\")\":\"\",o=r&&r.filter||n.filter||\"\";n.zoom=1,(t>=1||\"\"===t)&&\"\"===T.trim(o.replace($e,\"\"))&&n.removeAttribute&&(n.removeAttribute(\"filter\"),\"\"===t||r&&!r.filter)||(n.filter=$e.test(o)?o.replace($e,i):o+\" \"+i)}}),T((function(){T.support.reliableMarginRight||(T.cssHooks.marginRight={get:function(e,t){return t?T.swap(e,{display:\"inline-block\"},Qe,[e,\"marginRight\"]):o}}),!T.support.pixelPosition&&T.fn.position&&T.each([\"top\",\"left\"],(function(e,t){T.cssHooks[t]={get:function(e,n){return n?(n=Qe(e,t),Je.test(n)?T(e).position()[t]+\"px\":n):o}}}))})),T.expr&&T.expr.filters&&(T.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!T.support.reliableHiddenOffsets&&\"none\"===(e.style&&e.style.display||T.css(e,\"display\"))},T.expr.filters.visible=function(e){return!T.expr.filters.hidden(e)}),T.each({margin:\"\",padding:\"\",border:\"Width\"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o=\"string\"==typeof n?n.split(\" \"):[n];4>r;r++)i[e+tt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ve.test(e)||(T.cssHooks[e+t].set=at)}));var dt=/%20/g,ft=/\\[\\]$/,pt=/\\r?\\n/g,ht=/^(?:submit|button|image|reset|file)$/i,gt=/^(?:input|select|textarea|keygen)/i;function mt(e,t,n,r){var i;if(T.isArray(t))T.each(t,(function(t,i){n||ft.test(e)?r(e,i):mt(e+\"[\"+(\"object\"==typeof i?t:\"\")+\"]\",i,n,r)}));else if(n||\"object\"!==T.type(t))r(e,t);else for(i in t)mt(e+\"[\"+i+\"]\",t[i],n,r)}T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=T.prop(this,\"elements\");return e?T.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!T(this).is(\":disabled\")&&gt.test(this.nodeName)&&!ht.test(e)&&(this.checked||!Se.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:T.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(pt,\"\\r\\n\")}})):{name:t.name,value:n.replace(pt,\"\\r\\n\")}})).get()}}),T.param=function(e,t){var n,r=[],i=function(e,t){t=T.isFunction(t)?t():null==t?\"\":t,r[r.length]=encodeURIComponent(e)+\"=\"+encodeURIComponent(t)};if(t===o&&(t=T.ajaxSettings&&T.ajaxSettings.traditional),T.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,(function(){i(this.name,this.value)}));else for(n in e)mt(n,e[n],t,i);return r.join(\"&\").replace(dt,\"+\")},T.each(\"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu\".split(\" \"),(function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),T.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var vt,yt,bt=T.now(),xt=/\\?/,wt=/#.*$/,Ct=/([?&])_=[^&]*/,Tt=/^(.*?):[ \\t]*([^\\r\\n]*)\\r?$/gm,Pt=/^(?:GET|HEAD)$/,Et=/^\\/\\//,St=/^([\\w.+-]+:)(?:\\/\\/([^\\/?#:]*)(?::(\\d+)|)|)/,Ht=T.fn.load,kt={},Nt={},It=\"*/\".concat(\"*\");try{yt=u.href}catch(e){(yt=l.createElement(\"a\")).href=\"\",yt=yt.href}function At(e){return function(t,n){\"string\"!=typeof t&&(n=t,t=\"*\");var r,i=0,o=t.toLowerCase().match(E)||[];if(T.isFunction(n))for(;r=o[i++];)\"+\"===r[0]?(r=r.slice(1)||\"*\",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Dt(e,t,n,r){var i={},a=e===Nt;function s(c){var l;return i[c]=!0,T.each(e[c]||[],(function(e,c){var u=c(t,n,r);return\"string\"!=typeof u||a||i[u]?a?!(l=u):o:(t.dataTypes.unshift(u),s(u),!1)})),l}return s(t.dataTypes[0])||!i[\"*\"]&&s(\"*\")}function jt(e,t){var n,r,i=T.ajaxSettings.flatOptions||{};for(r in t)t[r]!==o&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&T.extend(!0,e,n),e}vt=St.exec(yt.toLowerCase())||[],T.fn.load=function(e,t,n){if(\"string\"!=typeof e&&Ht)return Ht.apply(this,arguments);var r,i,a,s=this,c=e.indexOf(\" \");return c>=0&&(r=e.slice(c,e.length),e=e.slice(0,c)),T.isFunction(t)?(n=t,t=o):t&&\"object\"==typeof t&&(a=\"POST\"),s.length>0&&T.ajax({url:e,type:a,dataType:\"html\",data:t}).done((function(e){i=arguments,s.html(r?T(\"<div>\").append(T.parseHTML(e)).find(r):e)})).complete(n&&function(e,t){s.each(n,i||[e.responseText,t,e])}),this},T.each([\"ajaxStart\",\"ajaxStop\",\"ajaxComplete\",\"ajaxError\",\"ajaxSuccess\",\"ajaxSend\"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.each([\"get\",\"post\"],(function(e,t){T[t]=function(e,n,r,i){return T.isFunction(n)&&(i=i||r,r=n,n=o),T.ajax({url:e,type:t,dataType:i,data:n,success:r})}})),T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yt,type:\"GET\",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt[1]),global:!0,processData:!0,async:!0,contentType:\"application/x-www-form-urlencoded; charset=UTF-8\",accepts:{\"*\":It,text:\"text/plain\",html:\"text/html\",xml:\"application/xml, text/xml\",json:\"application/json, text/javascript\"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:\"responseXML\",text:\"responseText\"},converters:{\"* text\":i.String,\"text html\":!0,\"text json\":T.parseJSON,\"text xml\":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?jt(jt(e,T.ajaxSettings),t):jt(T.ajaxSettings,e)},ajaxPrefilter:At(kt),ajaxTransport:At(Nt),ajax:function(e,t){\"object\"==typeof e&&(t=e,e=o),t=t||{};var n,r,i,a,s,c,l,u,d=T.ajaxSetup({},t),f=d.context||d,p=d.context&&(f.nodeType||f.jquery)?T(f):T.event,h=T.Deferred(),g=T.Callbacks(\"once memory\"),m=d.statusCode||{},v={},y={},b=0,x=\"canceled\",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!u)for(u={};t=Tt.exec(a);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return l&&l.abort(t),C(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,d.url=((e||d.url||yt)+\"\").replace(wt,\"\").replace(Et,vt[1]+\"//\"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=T.trim(d.dataType||\"*\").toLowerCase().match(E)||[\"\"],null==d.crossDomain&&(n=St.exec(d.url.toLowerCase()),d.crossDomain=!(!n||n[1]===vt[1]&&n[2]===vt[2]&&(n[3]||(\"http:\"===n[1]?80:443))==(vt[3]||(\"http:\"===vt[1]?80:443)))),d.data&&d.processData&&\"string\"!=typeof d.data&&(d.data=T.param(d.data,d.traditional)),Dt(kt,d,t,w),2===b)return w;for(r in(c=d.global)&&0==T.active++&&T.event.trigger(\"ajaxStart\"),d.type=d.type.toUpperCase(),d.hasContent=!Pt.test(d.type),i=d.url,d.hasContent||(d.data&&(i=d.url+=(xt.test(i)?\"&\":\"?\")+d.data,delete d.data),!1===d.cache&&(d.url=Ct.test(i)?i.replace(Ct,\"$1_=\"+bt++):i+(xt.test(i)?\"&\":\"?\")+\"_=\"+bt++)),d.ifModified&&(T.lastModified[i]&&w.setRequestHeader(\"If-Modified-Since\",T.lastModified[i]),T.etag[i]&&w.setRequestHeader(\"If-None-Match\",T.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&w.setRequestHeader(\"Content-Type\",d.contentType),w.setRequestHeader(\"Accept\",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(\"*\"!==d.dataTypes[0]?\", \"+It+\"; q=0.01\":\"\"):d.accepts[\"*\"]),d.headers)w.setRequestHeader(r,d.headers[r]);if(d.beforeSend&&(!1===d.beforeSend.call(f,w,d)||2===b))return w.abort();for(r in x=\"abort\",{success:1,error:1,complete:1})w[r](d[r]);if(l=Dt(Nt,d,t,w)){w.readyState=1,c&&p.trigger(\"ajaxSend\",[w,d]),d.async&&d.timeout>0&&(s=setTimeout((function(){w.abort(\"timeout\")}),d.timeout));try{b=1,l.send(v,C)}catch(e){if(!(2>b))throw e;C(-1,e)}}else C(-1,\"No Transport\");function C(e,t,n,r){var u,v,y,x,C,P=t;2!==b&&(b=2,s&&clearTimeout(s),l=o,a=r||\"\",w.readyState=e>0?4:0,n&&(x=function(e,t,n){var r,i,a,s,c=e.contents,l=e.dataTypes,u=e.responseFields;for(s in u)s in n&&(t[u[s]]=n[s]);for(;\"*\"===l[0];)l.shift(),i===o&&(i=e.mimeType||t.getResponseHeader(\"Content-Type\"));if(i)for(s in c)if(c[s]&&c[s].test(i)){l.unshift(s);break}if(l[0]in n)a=l[0];else{for(s in n){if(!l[0]||e.converters[s+\" \"+l[0]]){a=s;break}r||(r=s)}a=a||r}return a?(a!==l[0]&&l.unshift(a),n[a]):o}(d,w,n)),e>=200&&300>e||304===e?(d.ifModified&&((C=w.getResponseHeader(\"Last-Modified\"))&&(T.lastModified[i]=C),(C=w.getResponseHeader(\"etag\"))&&(T.etag[i]=C)),204===e?(u=!0,P=\"nocontent\"):304===e?(u=!0,P=\"notmodified\"):(P=(u=function(e,t){var n,r,i,o,a={},s=0,c=e.dataTypes.slice(),l=c[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=c[++s];)if(\"*\"!==r){if(\"*\"!==l&&l!==r){if(!(i=a[l+\" \"+r]||a[\"* \"+r]))for(n in a)if((o=n.split(\" \"))[1]===r&&(i=a[l+\" \"+o[0]]||a[\"* \"+o[0]])){!0===i?i=a[n]:!0!==a[n]&&(r=o[0],c.splice(s--,0,r));break}if(!0!==i)if(i&&e.throws)t=i(t);else try{t=i(t)}catch(e){return{state:\"parsererror\",error:i?e:\"No conversion from \"+l+\" to \"+r}}}l=r}return{state:\"success\",data:t}}(d,x)).state,v=u.data,u=!(y=u.error))):(y=P,(e||!P)&&(P=\"error\",0>e&&(e=0))),w.status=e,w.statusText=(t||P)+\"\",u?h.resolveWith(f,[v,P,w]):h.rejectWith(f,[w,P,y]),w.statusCode(m),m=o,c&&p.trigger(u?\"ajaxSuccess\":\"ajaxError\",[w,d,u?v:y]),g.fireWith(f,[w,P]),c&&(p.trigger(\"ajaxComplete\",[w,d]),--T.active||T.event.trigger(\"ajaxStop\")))}return w},getScript:function(e,t){return T.get(e,o,t,\"script\")},getJSON:function(e,t,n){return T.get(e,t,n,\"json\")}}),T.ajaxSetup({accepts:{script:\"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"},contents:{script:/(?:java|ecma)script/},converters:{\"text script\":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter(\"script\",(function(e){e.cache===o&&(e.cache=!1),e.crossDomain&&(e.type=\"GET\",e.global=!1)})),T.ajaxTransport(\"script\",(function(e){if(e.crossDomain){var t,n=l.head||T(\"head\")[0]||l.documentElement;return{send:function(r,i){(t=l.createElement(\"script\")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,\"success\"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(o,!0)}}}}));var Lt=[],Ft=/(=)\\?(?=&|$)|\\?\\?/;T.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var e=Lt.pop()||T.expando+\"_\"+bt++;return this[e]=!0,e}}),T.ajaxPrefilter(\"json jsonp\",(function(e,t,n){var r,a,s,c=!1!==e.jsonp&&(Ft.test(e.url)?\"url\":\"string\"==typeof e.data&&!(e.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&Ft.test(e.data)&&\"data\");return c||\"jsonp\"===e.dataTypes[0]?(r=e.jsonpCallback=T.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,c?e[c]=e[c].replace(Ft,\"$1\"+r):!1!==e.jsonp&&(e.url+=(xt.test(e.url)?\"&\":\"?\")+e.jsonp+\"=\"+r),e.converters[\"script json\"]=function(){return s||T.error(r+\" was not called\"),s[0]},e.dataTypes[0]=\"json\",a=i[r],i[r]=function(){s=arguments},n.always((function(){i[r]=a,e[r]&&(e.jsonpCallback=t.jsonpCallback,Lt.push(r)),s&&T.isFunction(a)&&a(s[0]),s=a=o})),\"script\"):o}));var Ot,Mt,qt=0,Bt=i.ActiveXObject&&function(){var e;for(e in Ot)Ot[e](o,!0)};function Rt(){try{return new i.XMLHttpRequest}catch(e){}}T.ajaxSettings.xhr=i.ActiveXObject?function(){return!this.isLocal&&Rt()||function(){try{return new i.ActiveXObject(\"Microsoft.XMLHTTP\")}catch(e){}}()}:Rt,Mt=T.ajaxSettings.xhr(),T.support.cors=!!Mt&&\"withCredentials\"in Mt,(Mt=T.support.ajax=!!Mt)&&T.ajaxTransport((function(e){var t;if(!e.crossDomain||T.support.cors)return{send:function(n,r){var a,s,c=e.xhr();if(e.username?c.open(e.type,e.url,e.async,e.username,e.password):c.open(e.type,e.url,e.async),e.xhrFields)for(s in e.xhrFields)c[s]=e.xhrFields[s];e.mimeType&&c.overrideMimeType&&c.overrideMimeType(e.mimeType),e.crossDomain||n[\"X-Requested-With\"]||(n[\"X-Requested-With\"]=\"XMLHttpRequest\");try{for(s in n)c.setRequestHeader(s,n[s])}catch(e){}c.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u,d;try{if(t&&(i||4===c.readyState))if(t=o,a&&(c.onreadystatechange=T.noop,Bt&&delete Ot[a]),i)4!==c.readyState&&c.abort();else{d={},s=c.status,l=c.getAllResponseHeaders(),\"string\"==typeof c.responseText&&(d.text=c.responseText);try{u=c.statusText}catch(e){u=\"\"}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=d.text?200:404}}catch(e){i||r(-1,e)}d&&r(s,u,d,l)},e.async?4===c.readyState?setTimeout(t):(a=++qt,Bt&&(Ot||(Ot={},T(i).unload(Bt)),Ot[a]=t),c.onreadystatechange=t):t()},abort:function(){t&&t(o,!0)}}}));var _t,zt,Qt=/^(?:toggle|show|hide)$/,$t=RegExp(\"^(?:([+-])=|)(\"+P+\")([a-z%]*)$\",\"i\"),Xt=/queueHooks$/,Wt=[function(e,t,n){var r,i,o,a,s,c,l,u,d,f=this,p=e.style,h={},g=[],m=e.nodeType&&it(e);for(i in n.queue||(null==(u=T._queueHooks(e,\"fx\")).unqueued&&(u.unqueued=0,d=u.empty.fire,u.empty.fire=function(){u.unqueued||d()}),u.unqueued++,f.always((function(){f.always((function(){u.unqueued--,T.queue(e,\"fx\").length||u.empty.fire()}))}))),1===e.nodeType&&(\"height\"in t||\"width\"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],\"inline\"===T.css(e,\"display\")&&\"none\"===T.css(e,\"float\")&&(T.support.inlineBlockNeedsLayout&&\"inline\"!==lt(e.nodeName)?p.zoom=1:p.display=\"inline-block\")),n.overflow&&(p.overflow=\"hidden\",T.support.shrinkWrapBlocks||f.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),t)if(a=t[i],Qt.exec(a)){if(delete t[i],c=c||\"toggle\"===a,a===(m?\"hide\":\"show\"))continue;g.push(i)}if(o=g.length){\"hidden\"in(s=T._data(e,\"fxshow\")||T._data(e,\"fxshow\",{}))&&(m=s.hidden),c&&(s.hidden=!m),m?T(e).show():f.done((function(){T(e).hide()})),f.done((function(){var t;for(t in T._removeData(e,\"fxshow\"),h)T.style(e,t,h[t])}));for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||T.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start=\"width\"===r||\"height\"===r?1:0))}}],Ut={\"*\":[function(e,t){var n,r,i=this.createTween(e,t),o=$t.exec(t),a=i.cur(),s=+a||0,c=1,l=20;if(o){if(n=+o[2],\"px\"!==(r=o[3]||(T.cssNumber[e]?\"\":\"px\"))&&s){s=T.css(i.elem,e,!0)||n||1;do{s/=c=c||\".5\",T.style(i.elem,e,s+r)}while(c!==(c=i.cur()/a)&&1!==c&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Vt(){return setTimeout((function(){_t=o})),_t=T.now()}function Yt(e,t,n){var r,i,o=0,a=Wt.length,s=T.Deferred().always((function(){delete c.elem})),c=function(){if(i)return!1;for(var t=_t||Vt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;a>o;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),1>r&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:_t||Vt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),u=l.props;for(function(e,t){var n,r,i,o,a;for(i in e)if(r=T.camelCase(i),o=t[r],n=e[i],T.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),(a=T.cssHooks[r])&&\"expand\"in a)for(i in n=a.expand(n),delete e[r],n)i in e||(e[i]=n[i],t[i]=o);else t[r]=o}(u,l.opts.specialEasing);a>o;o++)if(r=Wt[o].call(l,e,u,l.opts))return r;return function(e,t){T.each(t,(function(t,n){for(var r=(Ut[t]||[]).concat(Ut[\"*\"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return}))}(l,u),T.isFunction(l.opts.start)&&l.opts.start.call(e,l),T.fx.timer(T.extend(c,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Jt(e,t,n,r,i){return new Jt.prototype.init(e,t,n,r,i)}function Gt(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)r[\"margin\"+(n=tt[i])]=r[\"padding\"+n]=e;return t&&(r.opacity=r.width=e),r}function Kt(e){return T.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}T.Animation=T.extend(Yt,{tweener:function(e,t){T.isFunction(e)?(t=e,e=[\"*\"]):e=e.split(\" \");for(var n,r=0,i=e.length;i>r;r++)n=e[r],Ut[n]=Ut[n]||[],Ut[n].unshift(t)},prefilter:function(e,t){t?Wt.unshift(e):Wt.push(e)}}),T.Tween=Jt,Jt.prototype={constructor:Jt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||\"swing\",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(T.cssNumber[n]?\"\":\"px\")},cur:function(){var e=Jt.propHooks[this.prop];return e&&e.get?e.get(this):Jt.propHooks._default.get(this)},run:function(e){var t,n=Jt.propHooks[this.prop];return this.pos=t=this.options.duration?T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Jt.propHooks._default.set(this),this}},Jt.prototype.init.prototype=Jt.prototype,Jt.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=T.css(e.elem,e.prop,\"\"))&&\"auto\"!==t?t:0:e.elem[e.prop]},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[T.cssProps[e.prop]]||T.cssHooks[e.prop])?T.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Jt.propHooks.scrollTop=Jt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.each([\"toggle\",\"show\",\"hide\"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,i){return null==e||\"boolean\"==typeof e?n.apply(this,arguments):this.animate(Gt(t,!0),e,r,i)}})),T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(it).css(\"opacity\",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=T.isEmptyObject(e),o=T.speed(t,n,r),a=function(){var t=Yt(this,T.extend({},e),o);a.finish=function(){t.stop(!0)},(i||T._data(this,\"finish\"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return\"string\"!=typeof e&&(n=t,t=e,e=o),t&&!1!==e&&this.queue(e||\"fx\",[]),this.each((function(){var t=!0,i=null!=e&&e+\"queueHooks\",o=T.timers,a=T._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Xt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||\"fx\"),this.each((function(){var t,n=T._data(this),r=n[e+\"queue\"],i=n[e+\"queueHooks\"],o=T.timers,a=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),T.each({slideDown:Gt(\"show\"),slideUp:Gt(\"hide\"),slideToggle:Gt(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},(function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),T.speed=function(e,t,n){var r=e&&\"object\"==typeof e?T.extend({},e):{complete:n||!n&&t||T.isFunction(e)&&e,duration:e,easing:n&&t||t&&!T.isFunction(t)&&t};return r.duration=T.fx.off?0:\"number\"==typeof r.duration?r.duration:r.duration in T.fx.speeds?T.fx.speeds[r.duration]:T.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue=\"fx\"),r.old=r.complete,r.complete=function(){T.isFunction(r.old)&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},T.timers=[],T.fx=Jt.prototype.init,T.fx.tick=function(){var e,t=T.timers,n=0;for(_t=T.now();t.length>n;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||T.fx.stop(),_t=o},T.fx.timer=function(e){e()&&T.timers.push(e)&&T.fx.start()},T.fx.interval=13,T.fx.start=function(){zt||(zt=setInterval(T.fx.tick,T.fx.interval))},T.fx.stop=function(){clearInterval(zt),zt=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fx.step={},T.expr&&T.expr.filters&&(T.expr.filters.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length}),T.fn.offset=function(e){if(arguments.length)return e===o?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,r={top:0,left:0},i=this[0],a=i&&i.ownerDocument;return a?(t=a.documentElement,T.contains(t,i)?(typeof i.getBoundingClientRect!==c&&(r=i.getBoundingClientRect()),n=Kt(a),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},T.offset={setOffset:function(e,t,n){var r=T.css(e,\"position\");\"static\"===r&&(e.style.position=\"relative\");var i,o,a=T(e),s=a.offset(),c=T.css(e,\"top\"),l=T.css(e,\"left\"),u={},d={};(\"absolute\"===r||\"fixed\"===r)&&T.inArray(\"auto\",[c,l])>-1?(i=(d=a.position()).top,o=d.left):(i=parseFloat(c)||0,o=parseFloat(l)||0),T.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(u.top=t.top-s.top+i),null!=t.left&&(u.left=t.left-s.left+o),\"using\"in t?t.using.call(e,u):a.css(u)}},T.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return\"fixed\"===T.css(r,\"position\")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),T.nodeName(e[0],\"html\")||(n=e.offset()),n.top+=T.css(e[0],\"borderTopWidth\",!0),n.left+=T.css(e[0],\"borderLeftWidth\",!0)),{top:t.top-n.top-T.css(r,\"marginTop\",!0),left:t.left-n.left-T.css(r,\"marginLeft\",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent||l.documentElement;e&&!T.nodeName(e,\"html\")&&\"static\"===T.css(e,\"position\");)e=e.offsetParent;return e||l.documentElement}))}}),T.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},(function(e,t){var n=/Y/.test(t);T.fn[e]=function(r){return T.access(this,(function(e,r,i){var a=Kt(e);return i===o?a?t in a?a[t]:a.document.documentElement[r]:e[r]:(a?a.scrollTo(n?T(a).scrollLeft():i,n?i:T(a).scrollTop()):e[r]=i,o)}),e,r,arguments.length,null)}})),T.each({Height:\"height\",Width:\"width\"},(function(e,t){T.each({padding:\"inner\"+e,content:t,\"\":\"outer\"+e},(function(n,r){T.fn[r]=function(r,i){var a=arguments.length&&(n||\"boolean\"!=typeof r),s=n||(!0===r||!0===i?\"margin\":\"border\");return T.access(this,(function(t,n,r){var i;return T.isWindow(t)?t.document.documentElement[\"client\"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body[\"scroll\"+e],i[\"scroll\"+e],t.body[\"offset\"+e],i[\"offset\"+e],i[\"client\"+e])):r===o?T.css(t,n,s):T.style(t,n,r,s)}),t,a?r:o,a,null)}}))})),i.jQuery=i.$=T,n(1).jQuery&&(void 0===(r=function(){return T}.apply(t,[]))||(e.exports=r))}(window);var i=window.H5P=window.H5P||{};i.jQuery=jQuery.noConflict(!0),i.jQuery.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)}))},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t){var n,r;H5P.RequestQueue=function(e,t){const n=function(e){t.call(this),this.processingQueue=!1,e=e||{},this.showToast=e.showToast,this.itemName=\"requestQueue\"};return n.prototype.add=function(e,t){if(!window.localStorage)return!1;let n=this.getStoredRequests();return n||(n=[]),n.push({url:e,data:t}),window.localStorage.setItem(this.itemName,JSON.stringify(n)),this.trigger(\"requestQueued\",{storedStatements:n,processingQueue:this.processingQueue}),!0},n.prototype.getStoredRequests=function(){if(!window.localStorage)return!1;const e=window.localStorage.getItem(this.itemName);return e?JSON.parse(e):[]},n.prototype.clearQueue=function(){return!!window.localStorage&&(window.localStorage.removeItem(this.itemName),!0)},n.prototype.resumeQueue=function(){if(!H5PIntegration||!window.navigator||!window.localStorage)return!1;if(this.processingQueue)return!1;const e=this.getStoredRequests(),t=e.length;return this.clearQueue(),t?(this.processingQueue=!0,this.processQueue(e),!0):(this.trigger(\"emptiedQueue\",e),!0)},n.prototype.processQueue=function(t){if(!t.length)return;this.trigger(\"processingQueue\");const n=t.shift();e.post(n.url,n.data).fail(this.onQueuedRequestFail.bind(this,n)).always(this.onQueuedRequestProcessed.bind(this,t))},n.prototype.onQueuedRequestFail=function(e){window.navigator.onLine||this.add(e.url,e.data)},n.prototype.onQueuedRequestProcessed=function(e){if(e.length)return void this.processQueue(e);this.processingQueue=!1;const t=this.getStoredRequests();this.trigger(\"queueEmptied\",t)},n.prototype.displayToastMessage=function(e,t,n){if(!this.showToast&&!t)return;const r=H5P.jQuery.extend(!0,{},{position:{horizontal:\"centered\",vertical:\"centered\",noOverflowX:!0}},n);H5P.attachToastTo(H5P.jQuery(\".h5p-content:first\")[0],e,r)},n}(H5P.jQuery,H5P.EventDispatcher),H5P.OfflineRequestQueue=(n=H5P.RequestQueue,r=H5P.ConfirmationDialog,function(e){const t=new n;t.clearQueue();let i=null;const o=[10,20,40,60,120,300,600];let a=-1,s=null,c=!1,l=!1,u=!1;const d=e.instance,f=new r({headerText:H5P.t(\"offlineDialogHeader\"),dialogText:H5P.t(\"offlineDialogBody\"),confirmText:H5P.t(\"offlineDialogRetryButtonLabel\"),hideCancel:!0,hideExit:!0,classes:[\"offline\"],instance:d,skipRestoreFocus:!0}),p=f.getElement(),h=document.createElement(\"div\");h.classList.add(\"count-down\"),h.innerHTML=H5P.t(\"offlineDialogRetryMessage\").replace(\":num\",'<span class=\"count-down-num\">0</span>'),p.querySelector(\".h5p-confirmation-dialog-text\").appendChild(h);const g=h.querySelector(\".count-down-num\"),m=document.createElement(\"div\");m.classList.add(\"throbber-wrapper\");const v=document.createElement(\"div\");v.classList.add(\"sending-requests-throbber\"),m.appendChild(v),t.on(\"requestQueued\",function(e){if(!e.data||!e.data.processingQueue){if(!c){const e=document.body.querySelector(\".h5p-content\");if(!e)return;f.appendTo(e),e.appendChild(m),c=!0}x()}}.bind(this)),t.on(\"queueEmptied\",function(e){e.data&&e.data.length?x(!0):(clearInterval(s),y(!1),a=-1,l&&(f.hide(),l=!1),t.displayToastMessage(H5P.t(\"offlineSuccessfulSubmit\"),!0,{position:{vertical:\"top\",offsetVertical:\"100\"}}))}.bind(this)),f.on(\"confirmed\",function(){l=!1,setTimeout((function(){b()}),100)}.bind(this)),window.addEventListener(\"online\",function(){b()}.bind(this)),window.addEventListener(\"message\",function(e){window.parent===e.source&&\"h5p\"===e.data.context&&\"queueRequest\"===e.data.action&&this.add(e.data.url,e.data.data)}.bind(this));const y=function(e){u=!u,void 0!==e&&(u=e),u&&l&&(f.hide(),l=!1),u?m.classList.add(\"show\"):m.classList.remove(\"show\")},b=function(){clearInterval(s),y(!0),t.resumeQueue()},x=function(e){l||(y(!1),l||(e?setTimeout((function(){f.show(0)}),100):f.show(0)),l=!0,i=(new Date).getTime(),a+=1,a>=o.length&&(a=o.length-1),clearInterval(s),s=setInterval(w,100))},w=function(){const e=(new Date).getTime(),t=Math.floor((e-i)/1e3),n=o[a]-t;g.textContent=n.toString(),n<=0&&b()};this.add=function(e,n){if(window.navigator.onLine)return!1;t.add(e,n)}})},function(e,t,n){\"use strict\";n.r(t);n(0);var r=window.H5P=window.H5P||{};r.isFramed=window.self!==window.parent,r.$window=r.jQuery(window),r.instances=[],document.documentElement.requestFullScreen?r.fullScreenBrowserPrefix=\"\":document.documentElement.webkitRequestFullScreen?(r.safariBrowser=navigator.userAgent.match(/version\\/([.\\d]+)/i),r.safariBrowser=null===r.safariBrowser?0:parseInt(r.safariBrowser[1]),(0===r.safariBrowser||r.safariBrowser>6)&&(r.fullScreenBrowserPrefix=\"webkit\")):document.documentElement.mozRequestFullScreen?r.fullScreenBrowserPrefix=\"moz\":document.documentElement.msRequestFullscreen&&(r.fullScreenBrowserPrefix=\"ms\"),r.opened={},r.init=function(e){void 0===r.$body&&(r.$body=r.jQuery(document.body)),void 0===r.fullscreenSupported&&(r.fullscreenSupported=!(H5PIntegration.fullscreenDisabled||r.fullscreenDisabled||r.isFramed&&!1!==r.externalEmbed&&!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled))),void 0===r.canHasFullScreen&&(r.canHasFullScreen=r.fullscreenSupported),r.jQuery(\".h5p-content:not(.h5p-initialized)\",e).each((function(){var e=r.jQuery(this).addClass(\"h5p-initialized\"),t=r.jQuery('<div class=\"h5p-container\"></div>').appendTo(e),n=e.data(\"content-id\"),i=H5PIntegration.contents[\"cid-\"+n];if(void 0===i)return r.error(\"No data for content id \"+n+\". Perhaps the library is gone?\");var o={library:i.library,params:JSON.parse(i.jsonContent),metadata:i.metadata};r.getUserData(n,\"state\",(function(e,s){if(s)o.userDatas={state:s};else if(null===s&&H5PIntegration.saveFreq){delete i.contentUserData;var c=new r.Dialog(\"content-user-data-reset\",\"Data Reset\",\"<p>\"+r.t(\"contentChanged\")+\"</p><p>\"+r.t(\"startingOver\")+'</p><div class=\"h5p-dialog-ok-button\" tabIndex=\"0\" role=\"button\">OK</div>',t);r.jQuery(c).on(\"dialog-opened\",(function(e,t){var i=function(e){\"click\"!==e.type&&32!==e.which||(c.close(),r.deleteUserData(n,\"state\",0))};t.find(\".h5p-dialog-ok-button\").click(i).keypress(i),r.trigger(a,\"resize\")})).on(\"dialog-closed\",(function(){r.trigger(a,\"resize\")})),c.open()}}));var a=r.newRunnable(o,n,t,!0,{standalone:!0});r.offlineRequestQueue=new r.OfflineRequestQueue({instance:a}),1==i.fullScreen&&r.fullscreenSupported&&r.jQuery('<div class=\"h5p-content-controls\"><div role=\"button\" tabindex=\"0\" class=\"h5p-enable-fullscreen\" aria-label=\"'+r.t(\"fullscreen\")+'\" title=\"'+r.t(\"fullscreen\")+'\"></div></div>').prependTo(t).children().click((function(){r.fullScreen(t,a)})).keydown((function(e){if(32===e.which||13===e.which)return r.fullScreen(t,a),!1}));var s,c=i.displayOptions,l=!1;if(c.frame){if(c.copyright){var u=r.getCopyrights(a,o.params,n,o.metadata);u||(c.copyright=!1)}var d=new r.ActionBar(c),f=d.getDOMElement();d.on(\"reuse\",(function(){r.openReuseDialog(f,i,o,a,n),a.triggerXAPI(\"accessed-reuse\")})),d.on(\"copyrights\",(function(){new r.Dialog(\"copyrights\",r.t(\"copyrightInformation\"),u,t).open(!0),a.triggerXAPI(\"accessed-copyright\")})),d.on(\"embed\",(function(){r.openEmbedDialog(f,i.embedCode,i.resizeCode,{width:e.width(),height:e.height()},a),a.triggerXAPI(\"accessed-embed\")})),d.hasActions()&&(l=!0,f.insertAfter(t))}if(e.addClass(l?\"h5p-frame\":\"h5p-no-frame\"),r.opened[n]=new Date,r.on(a,\"finish\",(function(e){void 0!==e.data&&r.setFinished(n,e.data.score,e.data.maxScore,e.data.time)})),r.on(a,\"xAPI\",r.xAPICompletedListener),!1!==H5PIntegration.saveFreq&&(a.getCurrentState instanceof Function||\"function\"==typeof a.getCurrentState)){var p,h=function(){var e=a.getCurrentState();void 0!==e&&r.setUserData(n,\"state\",e,{deleteOnChange:!0}),H5PIntegration.saveFreq&&(p=setTimeout(h,1e3*H5PIntegration.saveFreq))};H5PIntegration.saveFreq&&(p=setTimeout(h,1e3*H5PIntegration.saveFreq)),r.on(a,\"xAPI\",(function(e){var t=e.getVerb();\"completed\"!==t&&\"progressed\"!==t||(clearTimeout(p),p=setTimeout(h,3e3))}))}if(r.isFramed)if(!1===r.externalEmbed){var g=window.frameElement;r.on(a,\"resize\",(function(){clearTimeout(s),s=setTimeout((function(){!function(){if(!window.parent.H5P.isFullscreen){var e=g.parentElement.style.height;g.parentElement.style.height=g.parentElement.clientHeight+\"px\",g.getBoundingClientRect(),g.style.height=\"1px\",g.style.height=g.contentDocument.body.scrollHeight+\"px\",g.parentElement.style.height=e}}()}),1)}))}else if(r.communicator){var m=!1;r.communicator.on(\"ready\",(function(){r.communicator.send(\"hello\")})),r.communicator.on(\"hello\",(function(){m=!0,document.body.style.height=\"auto\",document.body.style.overflow=\"hidden\",r.trigger(a,\"resize\")})),r.communicator.on(\"resizePrepared\",(function(){r.communicator.send(\"resize\",{scrollHeight:document.body.scrollHeight})})),r.communicator.on(\"resize\",(function(){r.trigger(a,\"resize\")})),r.on(a,\"resize\",(function(){r.isFullscreen||(clearTimeout(s),s=setTimeout((function(){m?r.communicator.send(\"prepareResize\",{scrollHeight:document.body.scrollHeight,clientHeight:document.body.clientHeight}):r.communicator.send(\"hello\")}),0))}))}r.isFramed&&!1!==r.externalEmbed||r.jQuery(window.parent).resize((function(){window.parent.H5P.isFullscreen,r.trigger(a,\"resize\")})),r.instances.push(a),r.trigger(a,\"resize\"),e.addClass(\"using-mouse\"),e.on(\"mousedown keydown keyup\",(function(t){e.toggleClass(\"using-mouse\",\"mousedown\"===t.type)})),r.externalDispatcher&&r.externalDispatcher.trigger(\"initialized\")})),r.jQuery(\"iframe.h5p-iframe:not(.h5p-initialized)\",e).each((function(){var e=r.jQuery(this).addClass(\"h5p-initialized\").data(\"content-id\");this.contentDocument.open(),this.contentDocument.write('<!doctype html><html class=\"h5p-iframe\"><head>'+r.getHeadTags(e)+'</head><body><div class=\"h5p-content\" data-content-id=\"'+e+'\"/></body></html>'),this.contentDocument.close()}))},r.getHeadTags=function(e){var t=function(e){for(var t=\"\",n=0;n<e.length;n++)t+='<link rel=\"stylesheet\" href=\"'+e[n]+'\">';return t},n=function(e){for(var t=\"\",n=0;n<e.length;n++)t+='<script src=\"'+e[n]+'\"><\\/script>';return t};return'<base target=\"_parent\">'+t(H5PIntegration.core.styles)+t(H5PIntegration.contents[\"cid-\"+e].styles)+n(H5PIntegration.core.scripts)+n(H5PIntegration.contents[\"cid-\"+e].scripts)+\"<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;<\\/script>\"},r.communicator=window.postMessage&&window.addEventListener?new function(){var e={};window.addEventListener(\"message\",(function(t){window.parent===t.source&&\"h5p\"===t.data.context&&void 0!==e[t.data.action]&&e[t.data.action](t.data)}),!1),this.on=function(t,n){e[t]=n},this.send=function(e,t){void 0===t&&(t={}),t.context=\"h5p\",t.action=e,window.parent.postMessage(t,\"*\")}}:void 0,r.semiFullScreen=function(e,t,n,i){r.fullScreen(e,t,n,i,!0)},r.fullScreen=function(e,t,n,i,o){if(void 0===r.exitFullScreen){if(r.isFramed&&!1===r.externalEmbed)return window.parent.H5P.fullScreen(e,t,n,r.$body.get(),o),r.isFullscreen=!0,r.exitFullScreen=function(){window.parent.H5P.exitFullScreen()},void r.on(t,\"exitFullScreen\",(function(){r.isFullscreen=!1,r.exitFullScreen=void 0}));var a,s,c,l=e;if(void 0===i)c=r.$body;else{c=r.jQuery(i),a=c.add(e.get());var u=\"#h5p-iframe-\"+e.parent().data(\"content-id\");e=(s=r.jQuery(u)).parent()}a=e.add(r.$body).add(a);var d=function(e){a.addClass(e),void 0!==s&&s.css(\"height\",\"\")},f=function(){r.trigger(t,\"resize\"),r.trigger(t,\"focus\"),r.trigger(t,\"enterFullScreen\")},p=function(e){r.isFullscreen=!1,a.removeClass(e),r.trigger(t,\"resize\"),r.trigger(t,\"focus\"),r.exitFullScreen=void 0,void 0!==n&&n(),r.trigger(t,\"exitFullScreen\")};if(r.isFullscreen=!0,void 0===r.fullScreenBrowserPrefix||!0===o){if(r.isFramed)return;d(\"h5p-semi-fullscreen\");var h,g,m,v=r.jQuery('<div role=\"button\" tabindex=\"0\" class=\"h5p-disable-fullscreen\" title=\"'+r.t(\"disableFullscreen\")+'\" aria-label=\"'+r.t(\"disableFullscreen\")+'\"></div>').appendTo(l.find(\".h5p-content-controls\")),y=r.exitFullScreen=function(){g?m.content=g:w.removeChild(m),v.remove(),c.unbind(\"keyup\",h),p(\"h5p-semi-fullscreen\")};h=function(e){27===e.keyCode&&y()},v.click(y),c.keyup(h);for(var b=document.getElementsByTagName(\"meta\"),x=0;x<b.length;x++)if(\"viewport\"===b[x].name){m=b[x],g=m.content;break}if(g||((m=document.createElement(\"meta\")).name=\"viewport\"),m.content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\",!g){var w=document.getElementsByTagName(\"head\")[0];w.appendChild(m)}f()}else{d(\"h5p-fullscreen\");var C,T=\"ms\"===r.fullScreenBrowserPrefix?\"MSFullscreenChange\":r.fullScreenBrowserPrefix+\"fullscreenchange\";if(document.addEventListener(T,(function(){if(void 0===C)return C=!1,void f();p(\"h5p-fullscreen\"),document.removeEventListener(T,arguments.callee,!1)})),\"\"===r.fullScreenBrowserPrefix)e[0].requestFullScreen();else{var P=\"ms\"===r.fullScreenBrowserPrefix?\"msRequestFullscreen\":r.fullScreenBrowserPrefix+\"RequestFullScreen\",E=\"webkit\"===r.fullScreenBrowserPrefix&&0===r.safariBrowser?Element.ALLOW_KEYBOARD_INPUT:void 0;e[0][P](E)}r.exitFullScreen=function(){\"\"===r.fullScreenBrowserPrefix?document.exitFullscreen():\"moz\"===r.fullScreenBrowserPrefix?document.mozCancelFullScreen():document[r.fullScreenBrowserPrefix+\"ExitFullscreen\"]()}}}},function(){r.addQueryParameter=function(e,t){let n,r;const i=e.split(\"?\");return i[1]?(r=i[1].split(\"#\"),n=i[0]+\"?\"+r[0]+\"&\"):(r=i[0].split(\"#\"),n=r[0]+\"?\"),n+=t,r[1]&&(n+=\"#\"+r[1]),n},r.setSource=function(e,t,n){let i=t.path;const o=r.getCrossOrigin(t);o?(e.crossOrigin=o,H5PIntegration.crossoriginCacheBuster&&(i=r.addQueryParameter(i,H5PIntegration.crossoriginCacheBuster))):e.removeAttribute(\"crossorigin\"),e.src=r.getPath(i,n)};var e=function(e){return e.match(/^[a-z0-9]+:\\/\\//i)};r.getCrossOrigin=function(t){return\"object\"!=typeof t?H5PIntegration.crossorigin&&H5PIntegration.crossoriginRegex&&t.match(H5PIntegration.crossoriginRegex)?H5PIntegration.crossorigin:null:H5PIntegration.crossorigin&&!e(t.path)?H5PIntegration.crossorigin:void 0},r.getPath=function(t,n){if(e(t))return t;var r,i=\"#tmp\"===t.substr(-4,4);if(void 0===n||i){if(void 0===window.H5PEditor)return;r=H5PEditor.filesPath}else void 0!==H5PIntegration.contents&&H5PIntegration.contents[\"cid-\"+n]&&(r=H5PIntegration.contents[\"cid-\"+n].contentUrl),r||(r=H5PIntegration.url+\"/content/\"+n);return e(r)||(r=window.location.protocol+\"//\"+window.location.host+r),r+\"/\"+t}}(),r.getContentPath=function(e){return H5PIntegration.url+\"/content/\"+e},r.classFromName=function(e){var t=e.split(\".\");return this[t[t.length-1]]},r.newRunnable=function(e,t,n,i,o){var a,s,c,l;try{c=(a=e.library.split(\" \",2))[0],s=a[1].split(\".\",2)}catch(t){return r.error(\"Invalid library string: \"+e.library)}if(e.params instanceof Object!=!0||e.params instanceof Array==!0)return r.error(\"Invalid library params for: \"+e.library),r.error(e.params);try{a=a[0].split(\".\"),l=window;for(var u=0;u<a.length;u++)l=l[a[u]];if(\"function\"!=typeof l)throw null}catch(t){return r.error(\"Unable to find constructor for: \"+e.library)}void 0===o&&(o={}),e.subContentId&&(o.subContentId=e.subContentId),e.userDatas&&e.userDatas.state&&H5PIntegration.saveFreq&&(o.previousState=e.userDatas.state),e.metadata&&(o.metadata=e.metadata);var d,f=o.standalone||!1;return l.prototype=r.jQuery.extend({},r.ContentType(f).prototype,l.prototype),void 0===(d=r.jQuery.inArray(e.library,[\"H5P.CoursePresentation 1.0\",\"H5P.CoursePresentation 1.1\",\"H5P.CoursePresentation 1.2\",\"H5P.CoursePresentation 1.3\"])>-1?new l(e.params,t):new l(e.params,t,o)).$&&(d.$=r.jQuery(d)),void 0===d.contentId&&(d.contentId=t),void 0===d.subContentId&&e.subContentId&&(d.subContentId=e.subContentId),void 0===d.parent&&o&&o.parent&&(d.parent=o.parent),void 0===d.libraryInfo&&(d.libraryInfo={versionedName:e.library,versionedNameNoSpaces:c+\"-\"+s[0]+\".\"+s[1],machineName:c,majorVersion:s[0],minorVersion:s[1]}),void 0!==n&&(n.toggleClass(\"h5p-standalone\",f),d.attach(n),r.trigger(d,\"domChanged\",{$target:n,library:c,key:\"newLibrary\"},{bubbles:!0,external:!0}),void 0!==i&&i||r.trigger(d,\"resize\")),d},r.error=function(e){void 0!==window.console&&void 0!==console.error&&console.error(e.stack?e.stack:e)},r.t=function(e,t,n){if(void 0===n&&(n=\"H5P\"),void 0===H5PIntegration.l10n[n])return'[Missing translation namespace \"'+n+'\"]';if(void 0===H5PIntegration.l10n[n][e])return'[Missing translation \"'+e+'\" in \"'+n+'\"]';var r=H5PIntegration.l10n[n][e];if(void 0!==t)for(var i in t)r=r.replace(i,t[i]);return r},r.Dialog=function(e,t,n,i){var o=this,a=r.jQuery('<div class=\"h5p-popup-dialog h5p-'+e+'-dialog\" role=\"dialog\" tabindex=\"-1\">                              <div class=\"h5p-inner\">                                <h2>'+t+'</h2>                                <div class=\"h5p-scroll-content\">'+n+'</div>                                <div class=\"h5p-close\" role=\"button\" tabindex=\"0\" aria-label=\"'+r.t(\"close\")+'\" title=\"'+r.t(\"close\")+'\"></div>                              </div>                            </div>').insertAfter(i).click((function(e){e&&e.originalEvent&&e.originalEvent.preventClosing||o.close()})).children(\".h5p-inner\").click((function(e){e.originalEvent.preventClosing=!0})).find(\".h5p-close\").click((function(){o.close()})).keypress((function(e){if(13===e.which||32===e.which)return o.close(),!1})).end().find(\"a\").click((function(e){e.stopPropagation()})).end().end();o.open=function(e){e&&a.css(\"height\",\"100%\"),setTimeout((function(){a.addClass(\"h5p-open\"),r.jQuery(o).trigger(\"dialog-opened\",[a]),a.focus()}),1)},o.close=function(){a.removeClass(\"h5p-open\"),setTimeout((function(){a.remove(),r.jQuery(o).trigger(\"dialog-closed\",[a]),i.attr(\"tabindex\",\"-1\"),i.focus()}),200)}},r.getCopyrights=function(e,t,n,i){var o;if(void 0!==e.getCopyrights)try{o=e.getCopyrights()}catch(e){}void 0===o&&(o=new r.ContentCopyrights,r.findCopyrights(o,t,n));var a=r.buildMetadataCopyrights(i,e.libraryInfo.machineName);return void 0!==a&&o.addMediaInFront(a),void 0!==o&&(o=o.toString()),o},r.findCopyrights=function(e,t,n,i){var o;for(var a in i&&(i.params=t,l(i,i.machineName,n)),t)if(t.hasOwnProperty(a))if(\"overrideSettings\"!==a){var s=t[a];if(s&&s.library&&\"string\"==typeof s.library?o=s.library.split(\" \")[0]:s&&s.library&&\"object\"==typeof s.library&&(o=s.library.library&&\"string\"==typeof s.library.library?s.library.library.split(\" \")[0]:o),s instanceof Array)r.findCopyrights(e,s,n);else if(s instanceof Object)if(l(s,o,n),void 0===s.copyright||void 0===s.copyright.license||void 0===s.path||void 0===s.mime)r.findCopyrights(e,s,n);else{var c=new r.MediaCopyright(s.copyright);void 0!==s.width&&void 0!==s.height&&c.setThumbnail(new r.Thumbnail(r.getPath(s.path,n),s.width,s.height)),e.addMedia(c)}}else console.warn(\"The semantics field 'overrideSettings' is DEPRECATED and should not be used.\"),console.warn(t);function l(t,n,i){if(t.metadata){const o=r.buildMetadataCopyrights(t.metadata,n);if(void 0!==o){if(t.params&&\"Image\"===t.params.contentName&&t.params.file){const e=t.params.file.path,n=t.params.file.width,a=t.params.file.height;o.setThumbnail(new r.Thumbnail(r.getPath(e,i),n,a))}e.addMedia(o)}}}},r.buildMetadataCopyrights=function(e){if(e&&void 0!==e.license&&\"U\"!==e.license){var t={contentType:e.contentType,title:e.title,author:e.authors&&e.authors.length>0?e.authors.map((function(e){return e.role?e.name+\" (\"+e.role+\")\":e.name})).join(\", \"):void 0,source:e.source,year:e.yearFrom?e.yearFrom+(e.yearTo?\"-\"+e.yearTo:\"\"):void 0,license:e.license,version:e.licenseVersion,licenseExtras:e.licenseExtras,changes:e.changes&&e.changes.length>0?e.changes.map((function(e){return e.log+(e.author?\", \"+e.author:\"\")+(e.date?\", \"+e.date:\"\")})).join(\" / \"):void 0};return new r.MediaCopyright(t)}},r.openReuseDialog=function(e,t,n,i,o){let a=\"\";t.displayOptions.export&&(a+='<button type=\"button\" class=\"h5p-big-button h5p-download-button\"><div class=\"h5p-button-title\">Download as an .h5p file</div><div class=\"h5p-button-description\">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>'),t.displayOptions.export&&t.displayOptions.copy&&(a+='<div class=\"h5p-horizontal-line-text\"><span>or</span></div>'),t.displayOptions.copy&&(a+='<button type=\"button\" class=\"h5p-big-button h5p-copy-button\"><div class=\"h5p-button-title\">Copy content</div><div class=\"h5p-button-description\">Copied content may be pasted anywhere this content type is supported on this website.</div></button>');const s=new r.Dialog(\"reuse\",r.t(\"reuseContent\"),a,e);r.jQuery(s).on(\"dialog-opened\",(function(e,a){r.jQuery('<a href=\"https://h5p.org/node/442225\" target=\"_blank\">More Info</a>').click((function(e){e.stopPropagation()})).appendTo(a.find(\"h2\")),a.find(\".h5p-download-button\").click((function(){window.location.href=t.exportUrl,i.triggerXAPI(\"downloaded\"),s.close()})),a.find(\".h5p-copy-button\").click((function(){const e=new r.ClipboardItem(n);e.contentId=o,r.setClipboard(e),i.triggerXAPI(\"copied\"),s.close(),r.attachToastTo(r.jQuery(\".h5p-content:first\")[0],r.t(\"contentCopied\"),{position:{horizontal:\"centered\",vertical:\"centered\",noOverflowX:!0}})})),r.trigger(i,\"resize\")})).on(\"dialog-closed\",(function(){r.trigger(i,\"resize\")})),s.open()},r.openEmbedDialog=function(e,t,n,i,o){var a=t+n,s=new r.Dialog(\"embed\",r.t(\"embed\"),'<textarea class=\"h5p-embed-code-container\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></textarea>'+r.t(\"size\")+': <input type=\"text\" value=\"'+Math.ceil(i.width)+'\" class=\"h5p-embed-size\"/> × <input type=\"text\" value=\"'+Math.ceil(i.height)+'\" class=\"h5p-embed-size\"/> px<br/><div role=\"button\" tabindex=\"0\" class=\"h5p-expander\">'+r.t(\"showAdvanced\")+'</div><div class=\"h5p-expander-content\"><p>'+r.t(\"advancedHelp\")+'</p><textarea class=\"h5p-embed-code-container\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">'+n+\"</textarea></div>\",e);r.jQuery(s).on(\"dialog-opened\",(function(e,t){var n=t.find(\".h5p-inner\").find(\".h5p-scroll-content\"),s=(n.outerHeight(),n.innerHeight(),function(){r.trigger(o,\"resize\")}),c=t.find(\".h5p-embed-size:eq(0)\"),l=t.find(\".h5p-embed-size:eq(1)\"),u=function(e,t){var n=parseFloat(e.val());return isNaN(n)?t:Math.ceil(n)},d=function(){t.find(\".h5p-embed-code-container:first\").val(a.replace(\":w\",u(c,i.width)).replace(\":h\",u(l,i.height)))};c.change(d),l.change(d),d(),t.find(\".h5p-embed-code-container\").each((function(){r.jQuery(this).css(\"height\",this.scrollHeight+\"px\").focus((function(){r.jQuery(this).select()}))})),t.find(\".h5p-embed-code-container\").eq(0).select(),s();var f=function(){var e=r.jQuery(this),n=e.next();n.is(\":visible\")?(e.removeClass(\"h5p-open\").text(r.t(\"showAdvanced\")).attr(\"aria-expanded\",\"true\"),n.hide()):(e.addClass(\"h5p-open\").text(r.t(\"hideAdvanced\")).attr(\"aria-expanded\",\"false\"),n.show()),t.find(\".h5p-embed-code-container\").each((function(){r.jQuery(this).css(\"height\",this.scrollHeight+\"px\")})),s()};t.find(\".h5p-expander\").click(f).keypress((function(e){if(32===e.keyCode)return f.apply(this),!1}))})).on(\"dialog-closed\",(function(){r.trigger(o,\"resize\")})),s.open()},r.attachToastTo=function(e,t,n){if(void 0===e||void 0===t)return;const r=function(t){-1===function(e){var t=e.composedPath&&e.composedPath()||e.path,n=e.target;if(null!=t)return t.indexOf(window)<0?t.concat(window):t;if(n===window)return[window];return[n].concat(function e(t,n){n=n||[];var r=t.parentNode;return r?e(r,n.concat(r)):n}(n),window)}(t).indexOf(e)&&(clearTimeout(c),i())},i=function(){document.removeEventListener(\"click\",r),o.parentNode&&o.parentNode.removeChild(o)};(n=n||{}).style=n.style||\"h5p-toast\",n.duration=n.duration||3e3;const o=document.createElement(\"div\");o.setAttribute(\"id\",n.style),o.classList.add(\"h5p-toast-disabled\"),o.classList.add(n.style);const a=document.createElement(\"span\");a.innerHTML=t,o.appendChild(a),document.body.appendChild(o);const s=function(e,t,n){(n=n||{}).offsetHorizontal=n.offsetHorizontal||0,n.offsetVertical=n.offsetVertical||0;const r=t.getBoundingClientRect(),i=e.getBoundingClientRect();let o=0,a=0;switch(n.horizontal){case\"before\":o=i.left-r.width-n.offsetHorizontal;break;case\"after\":o=i.left+i.width+n.offsetHorizontal;break;case\"left\":o=i.left+n.offsetHorizontal;break;case\"right\":o=i.left+i.width-r.width-n.offsetHorizontal;break;case\"centered\":o=i.left+i.width/2-r.width/2+n.offsetHorizontal;break;default:o=i.left+i.width/2-r.width/2+n.offsetHorizontal}switch(n.vertical){case\"above\":a=i.top-r.height-n.offsetVertical;break;case\"below\":a=i.top+i.height+n.offsetVertical;break;case\"top\":a=i.top+n.offsetVertical;break;case\"bottom\":a=i.top+i.height-r.height-n.offsetVertical;break;case\"centered\":a=i.top+i.height/2-r.height/2+n.offsetVertical;break;default:a=i.top+i.height+n.offsetVertical}const s=document.body.getBoundingClientRect();return(n.noOverflowLeft||n.noOverflowX)&&o<s.x&&(o=s.x),(n.noOverflowRight||n.noOverflowX)&&o+r.width>s.x+s.width&&(o=s.x+s.width-r.width),(n.noOverflowTop||n.noOverflowY)&&a<s.y&&(a=s.y),(n.noOverflowBottom||n.noOverflowY)&&a+r.height>s.y+s.height&&(o=s.y+s.height-r.height),{left:o,top:a}}(e,o,n.position);o.style.left=Math.round(s.left)+\"px\",o.style.top=Math.round(s.top)+\"px\",o.classList.remove(\"h5p-toast-disabled\");const c=setTimeout(i,n.duration);document.addEventListener(\"click\",r)},r.ContentCopyrights=function(){var e,t=[],n=[];this.setLabel=function(t){e=t},this.addMedia=function(e){void 0!==e&&t.push(e)},this.addMediaInFront=function(e){void 0!==e&&t.unshift(e)},this.addContent=function(e){void 0!==e&&n.push(e)},this.toString=function(){for(var r=\"\",i=0;i<t.length;i++)r+=t[i];for(i=0;i<n.length;i++)r+=n[i];return\"\"!==r&&(void 0!==e&&(r=\"<h3>\"+e+\"</h3>\"+r),r='<div class=\"h5p-content-copyrights\">'+r+\"</div>\"),r}},r.MediaCopyright=function(e,t,n,i){var o,a=new r.DefinitionList,s=function(e){return void 0===t||void 0===t[e]?r.t(e):t[e]},c=function(e,t){var n,i,o=r.copyrightLicenses[e],a=\"\";\"PD\"===e&&t||(a+=o.hasOwnProperty(\"label\")?o.label:o),o.versions&&(!o.versions.default||t&&o.versions[t]||(t=o.versions.default),t&&o.versions[t]&&(n=o.versions[t])),n&&(a&&(a+=\" \"),a+=n.hasOwnProperty(\"label\")?n.label:n),o.hasOwnProperty(\"link\")?i=o.link.replace(\":version\",o.linkVersions?o.linkVersions[t]:t):n&&o.hasOwnProperty(\"link\")&&(i=n.link),i&&(a='<a href=\"'+i+'\" target=\"_blank\">'+a+\"</a>\");var s=\"\";return\"PD\"!==e&&\"C\"!==e&&(s+=e),t&&\"CC0 1.0\"!==t&&(s&&\"GNU GPL\"!==e&&(s+=\" \"),s+=t),s&&(a+=\" (\"+s+\")\"),\"C\"===e&&(a+=\" &copy;\"),a};if(void 0!==e){for(var l in i)i.hasOwnProperty(l)&&(e[l]=i[l]);void 0===n&&(n=[\"contentType\",\"title\",\"license\",\"author\",\"year\",\"source\",\"licenseExtras\",\"changes\"]);for(var u=0;u<n.length;u++){var d=n[u];if(void 0!==e[d]&&\"\"!==e[d]){var f=e[d];\"license\"===d&&(f=c(e.license,e.version)),\"source\"===d&&(f=f?'<a href=\"'+f+'\" target=\"_blank\">'+f+\"</a>\":void 0),a.add(new r.Field(s(d),f))}}}this.setThumbnail=function(e){o=e},this.undisclosed=function(){if(1===a.size()){var e=a.get(0);if(e.getLabel()===s(\"license\")&&e.getValue()===c(\"U\"))return!0}return!1},this.toString=function(){var e=\"\";return this.undisclosed()||(void 0!==o&&(e+=o),\"\"!==(e+=a)&&(e='<div class=\"h5p-media-copyright\">'+e+\"</div>\")),e}},r.Thumbnail=function(e,t,n){var i;void 0!==t&&(i=Math.round(t/n*100)),this.toString=function(){return'<img src=\"'+e+'\" alt=\"'+r.t(\"thumbnail\")+'\" class=\"h5p-thumbnail\" height=\"100\"'+(void 0===i?\"\":' width=\"'+i+'\"')+\"/>\"}},r.Field=function(e,t){this.getLabel=function(){return e},this.getValue=function(){return t}},r.DefinitionList=function(){var e=[];this.add=function(t){e.push(t)},this.size=function(){return e.length},this.get=function(t){return e[t]},this.toString=function(){for(var t=\"\",n=0;n<e.length;n++){var r=e[n];t+=\"<dt>\"+r.getLabel()+\"</dt><dd>\"+r.getValue()+\"</dd>\"}return\"\"===t?t:'<dl class=\"h5p-definition-list\">'+t+\"</dl>\"}},r.Coords=function(e,t,n,i){return this instanceof r.Coords?(this.x=0,this.y=0,this.w=1,this.h=1,\"object\"==typeof e?(this.x=e.x,this.y=e.y,this.w=e.w,this.h=e.h):(void 0!==e&&(this.x=e),void 0!==t&&(this.y=t),void 0!==n&&(this.w=n),void 0!==i&&(this.h=i)),this):new r.Coords(e,t,n,i)},r.libraryFromString=function(e){var t=/(.+)\\s(\\d+)\\.(\\d+)$/g.exec(e);return null!==t&&{machineName:t[1],majorVersion:parseInt(t[2]),minorVersion:parseInt(t[3])}},r.getLibraryPath=function(e){return void 0!==H5PIntegration.urlLibraries?H5PIntegration.urlLibraries+\"/\"+e:H5PIntegration.url+\"/libraries/\"+e},r.cloneObject=function(e,t){var n=e instanceof Array?[]:{};for(var i in e)e.hasOwnProperty(i)&&(void 0!==t&&t&&\"object\"==typeof e[i]?n[i]=r.cloneObject(e[i],t):n[i]=e[i]);return n},r.trim=function(e){return e.replace(/^\\s+|\\s+$/g,\"\")},r.jsLoaded=function(e){return H5PIntegration.loadedJs=H5PIntegration.loadedJs||[],-1!==r.jQuery.inArray(e,H5PIntegration.loadedJs)},r.cssLoaded=function(e){return H5PIntegration.loadedCss=H5PIntegration.loadedCss||[],-1!==r.jQuery.inArray(e,H5PIntegration.loadedCss)},r.shuffleArray=function(e){if(e instanceof Array){var t,n,r,i=e.length;if(0===i)return!1;for(;--i;)t=Math.floor(Math.random()*(i+1)),n=e[i],r=e[t],e[i]=r,e[t]=n;return e}},r.setFinished=function(e,t,n,i){if((\"number\"==typeof t||t instanceof Number)&&!0===H5PIntegration.postUserStatistics){var o=function(e){return Math.round(e.getTime()/1e3)};const a={contentId:e,score:t,maxScore:n,opened:o(r.opened[e]),finished:o(new Date),time:i};r.jQuery.post(H5PIntegration.ajax.setFinished,a).fail((function(){r.offlineRequestQueue.add(H5PIntegration.ajax.setFinished,a)}))}},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1}),void 0===String.prototype.trim&&(String.prototype.trim=function(){return r.trim(this)}),r.trigger=function(e,t,n,r){void 0!==e.trigger?e.trigger(t,n,r):void 0!==e.$&&void 0!==e.$.trigger&&e.$.trigger(t)},r.on=function(e,t,n){void 0!==e.on?e.on(t,n):void 0!==e.$&&void 0!==e.$.on&&e.$.on(t,n)},r.createUUID=function(){return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return(\"x\"===e?t:3&t|8).toString(16)}))},r.createTitle=function(e,t){if(!e)return\"\";void 0===t&&(t=60);var n=r.jQuery(\"<div></div>\").text(e.replace(/(<([^>]+)>)/gi,\"\")).text();return n.length>t&&(n=n.substr(0,t-3)+\"...\"),n},function(e){function t(t,n,r,i,o,a,s,c){if(void 0!==H5PIntegration.user){var l={url:H5PIntegration.ajax.contentUserData.replace(\":contentId\",t).replace(\":dataType\",n).replace(\":subContentId\",r||0),dataType:\"json\",async:void 0===c||c};void 0!==o?(l.type=\"POST\",l.data={data:null===o?0:o,preload:a?1:0,invalidate:s?1:0}):l.type=\"GET\",void 0!==i&&(l.error=function(e,t){i(t)},l.success=function(e){e.success?!1!==e.data&&void 0!==e.data?i(void 0,e.data):i():i(e.message)}),e.ajax(l)}else i(\"Not signed in.\")}r.getUserData=function(e,n,r,i){i||(i=0),H5PIntegration.contents=H5PIntegration.contents||{};var o=H5PIntegration.contents[\"cid-\"+e]||{},a=o.contentUserData;if(a&&a[i]&&void 0!==a[i][n]){if(\"RESET\"===a[i][n])return void r(void 0,null);try{r(void 0,JSON.parse(a[i][n]))}catch(e){r(e)}}else t(e,n,i,(function(e,t){if(e||void 0===t)r(e,t);else{void 0===o.contentUserData&&(o.contentUserData=a={}),void 0===a[i]&&(a[i]={}),a[i][n]=t;try{r(void 0,JSON.parse(t))}catch(e){r(e)}}}))},r.setUserData=function(e,n,i,o){var a=r.jQuery.extend(!0,{},{subContentId:0,preloaded:!0,deleteOnChange:!1,async:!0},o);try{i=JSON.stringify(i)}catch(e){return void(a.errorCallback&&a.errorCallback(e))}var s=H5PIntegration.contents[\"cid-\"+e];void 0===s&&(s=H5PIntegration.contents[\"cid-\"+e]={}),s.contentUserData||(s.contentUserData={});var c=s.contentUserData;void 0===c[a.subContentId]&&(c[a.subContentId]={}),i!==c[a.subContentId][n]&&(c[a.subContentId][n]=i,t(e,n,a.subContentId,(function(e){a.errorCallback&&e&&a.errorCallback(e)}),i,a.preloaded,a.deleteOnChange,a.async))},r.deleteUserData=function(e,n,r){r||(r=0);var i=H5PIntegration.contents[\"cid-\"+e].contentUserData;i&&i[r]&&i[r][n]&&delete i[r][n],t(e,n,r,void 0,null)},r.getContentForInstance=function(e){var t=\"cid-\"+e;return H5PIntegration&&H5PIntegration.contents&&H5PIntegration.contents[t]?H5PIntegration.contents[t]:void 0},r.ClipboardItem=function(e,t,n){var r=this;t||(t=\"action\",e={action:e}),r.specific=e,t&&e[t]&&(r.generic=t),n&&(r.from=n),window.H5PEditor&&H5PEditor.contentId&&(r.contentId=H5PEditor.contentId),r.specific.width||r.specific.height||function(){if(r.generic){var e=r.specific[r.generic];e.params.file&&e.params.file.width&&e.params.file.height&&(r.width=20,r.height=e.params.file.height/e.params.file.width*r.width)}}()},r.clipboardify=function(e){e instanceof r.ClipboardItem||(e=new r.ClipboardItem(e)),r.setClipboard(e)},r.getClipboard=function(){return n()},r.setClipboard=function(e){localStorage.setItem(\"h5pClipboard\",JSON.stringify(e)),r.externalDispatcher.trigger(\"datainclipboard\",{reset:!1})},r.getLibraryConfig=function(e){return H5PIntegration.libraryConfig&&H5PIntegration.libraryConfig[e]?H5PIntegration.libraryConfig[e]:{}};var n=function(){var e=localStorage.getItem(\"h5pClipboard\");if(e){try{e=JSON.parse(e)}catch(e){return void console.error(\"Unable to parse JSON from clipboard.\",e)}return i(e.specific,(function(t){return\"#tmp\"===t.substr(-4,4)||!e.contentId||t.match(/^https?:\\/\\//i)?t:H5PEditor.contentId?\"../\"+e.contentId+\"/\"+t:(H5PEditor.contentRelUrl?H5PEditor.contentRelUrl:\"../content/\")+e.contentId+\"/\"+t})),e.generic&&(e.generic=e.specific[e.generic]),e}},i=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]instanceof Object){var r=e[n];void 0!==r.path&&void 0!==r.mime?r.path=t(r.path):(void 0!==r.library&&void 0!==r.subContentId&&delete r.subContentId,i(r,t))}};e(document).ready((function(){window.addEventListener(\"storage\",(function(e){\"h5pClipboard\"===e.key&&r.externalDispatcher.trigger(\"datainclipboard\",{reset:null===e.newValue})}));var e={default:\"4.0\",\"4.0\":r.t(\"licenseCC40\"),\"3.0\":r.t(\"licenseCC30\"),2.5:r.t(\"licenseCC25\"),\"2.0\":r.t(\"licenseCC20\"),\"1.0\":r.t(\"licenseCC10\")};if(r.copyrightLicenses={U:r.t(\"licenseU\"),\"CC BY\":{label:r.t(\"licenseCCBY\"),link:\"http://creativecommons.org/licenses/by/:version\",versions:e},\"CC BY-SA\":{label:r.t(\"licenseCCBYSA\"),link:\"http://creativecommons.org/licenses/by-sa/:version\",versions:e},\"CC BY-ND\":{label:r.t(\"licenseCCBYND\"),link:\"http://creativecommons.org/licenses/by-nd/:version\",versions:e},\"CC BY-NC\":{label:r.t(\"licenseCCBYNC\"),link:\"http://creativecommons.org/licenses/by-nc/:version\",versions:e},\"CC BY-NC-SA\":{label:r.t(\"licenseCCBYNCSA\"),link:\"http://creativecommons.org/licenses/by-nc-sa/:version\",versions:e},\"CC BY-NC-ND\":{label:r.t(\"licenseCCBYNCND\"),link:\"http://creativecommons.org/licenses/by-nc-nd/:version\",versions:e},\"CC0 1.0\":{label:r.t(\"licenseCC010\"),link:\"https://creativecommons.org/publicdomain/zero/1.0/\"},\"GNU GPL\":{label:r.t(\"licenseGPL\"),link:\"http://www.gnu.org/licenses/gpl-:version-standalone.html\",linkVersions:{v3:\"3.0\",v2:\"2.0\",v1:\"1.0\"},versions:{default:\"v3\",v3:r.t(\"licenseV3\"),v2:r.t(\"licenseV2\"),v1:r.t(\"licenseV1\")}},PD:{label:r.t(\"licensePD\"),versions:{\"CC0 1.0\":{label:r.t(\"licenseCC010\"),link:\"https://creativecommons.org/publicdomain/zero/1.0/\"},\"CC PDM\":{label:r.t(\"licensePDM\"),link:\"https://creativecommons.org/publicdomain/mark/1.0/\"}}},\"ODC PDDL\":'<a href=\"http://opendatacommons.org/licenses/pddl/1.0/\" target=\"_blank\">Public Domain Dedication and Licence</a>',\"CC PDM\":{label:r.t(\"licensePDM\"),link:\"https://creativecommons.org/publicdomain/mark/1.0/\"},C:r.t(\"licenseC\")},r.isFramed&&!1===r.externalEmbed&&r.externalDispatcher.on(\"*\",(function(e){window.parent.H5P.externalDispatcher.trigger.call(this,e)})),r.preventInit||r.init(document.body),!1!==H5PIntegration.saveFreq){var t=0,n=function(){var e=(new Date).getTime();if(e-t>250){t=e;for(var n=0;n<r.instances.length;n++){var i=r.instances[n];if(i.getCurrentState instanceof Function||\"function\"==typeof i.getCurrentState){var o=i.getCurrentState();void 0!==o&&r.setUserData(i.contentId,\"state\",o,{deleteOnChange:!0,async:!1})}}}};r.$window.one(\"beforeunload unload\",(function(){r.$window.off(\"pagehide beforeunload unload\"),n()})),r.$window.on(\"pagehide\",n)}}))}(r.jQuery);var i=r,o=window.H5P=window.H5P||{};o.Event=function(e,t,n){this.type=e,this.data=t;var r=!1,i=!1,o=!1;void 0===n&&(n={}),!0===n.bubbles&&(r=!0),!0===n.external&&(i=!0),this.preventBubbling=function(){r=!1},this.getBubbles=function(){return r},this.scheduleForExternal=function(){return!(!i||o)&&(o=!0,!0)}},o.EventDispatcher=function(){var e=this,t={};this.on=function(n,r,i){if(\"function\"!=typeof r)throw TypeError(\"listener must be a function\");e.trigger(\"newListener\",{type:n,listener:r});var o={listener:r,thisArg:i};t[n]?t[n].push(o):t[n]=[o]},this.once=function(t,n,r){if(!(n instanceof Function))throw TypeError(\"listener must be a function\");var i=function(t){e.off(t.type,i),n.call(this,t)};e.on(t,i,r)},this.off=function(n,r){if(void 0!==r&&!(r instanceof Function))throw TypeError(\"listener must be a function\");if(void 0!==t[n]){if(void 0===r)return delete t[n],void e.trigger(\"removeListener\",n);for(var i=0;i<t[n].length;i++)if(t[n][i].listener===r){t[n].splice(i,1),e.trigger(\"removeListener\",n,{listener:r});break}t[n].length||delete t[n]}};var n=function(e,n){if(void 0!==t[e])for(var r=t[e].slice(),i=0;i<r.length;i++){var o=r[i],a=o.thisArg?o.thisArg:this;o.listener.call(a,n)}};this.trigger=function(t,r,i){if(void 0!==t){t instanceof String||\"string\"==typeof t?t=new o.Event(t,r,i):void 0!==r&&(t.data=r);var a=t.scheduleForExternal();n.call(this,t.type,t),n.call(this,\"*\",t),t.getBubbles()&&e.parent instanceof o.EventDispatcher&&(e.parent.trigger instanceof Function||\"function\"==typeof e.parent.trigger)&&e.parent.trigger(t),a&&o.externalDispatcher.trigger.call(this,t)}}};var a=window.H5P=window.H5P||{};a.externalDispatcher=new a.EventDispatcher,a.EventDispatcher.prototype.triggerXAPI=function(e,t){this.trigger(this.createXAPIEventTemplate(e,t))},a.EventDispatcher.prototype.createXAPIEventTemplate=function(e,t){var n=new a.XAPIEvent;if(n.setActor(),n.setVerb(e),void 0!==t)for(var r in t)n.data.statement[r]=t[r];return\"object\"in n.data.statement||n.setObject(this),\"context\"in n.data.statement||n.setContext(this),n},a.EventDispatcher.prototype.triggerXAPICompleted=function(e,t,n){this.triggerXAPIScored(e,t,\"completed\",!0,n)},a.EventDispatcher.prototype.triggerXAPIScored=function(e,t,n,r,i){var o=this.createXAPIEventTemplate(n);o.setScoredResult(e,t,this,r,i),this.trigger(o)},a.EventDispatcher.prototype.setActivityStarted=function(){void 0===this.activityStartTime&&(void 0!==this.contentId&&void 0!==H5PIntegration.contents&&void 0!==H5PIntegration.contents[\"cid-\"+this.contentId]&&this.triggerXAPI(\"attempted\"),this.activityStartTime=Date.now())},a.xAPICompletedListener=function(e){if((\"completed\"===e.getVerb()||\"answered\"===e.getVerb())&&!e.getVerifiedStatementValue([\"context\",\"contextActivities\",\"parent\"])){var t=e.getScore(),n=e.getMaxScore(),r=e.getVerifiedStatementValue([\"object\",\"definition\",\"extensions\",\"http://h5p.org/x-api/h5p-local-content-id\"]);a.setFinished(r,t,n)}};var s=window.H5P=window.H5P||{};s.XAPIEvent=function(){s.Event.call(this,\"xAPI\",{statement:{}},{bubbles:!0,external:!0})},s.XAPIEvent.prototype=Object.create(s.Event.prototype),s.XAPIEvent.prototype.constructor=s.XAPIEvent,s.XAPIEvent.prototype.setScoredResult=function(e,t,n,r,i){if(this.data.statement.result={},void 0!==e&&(void 0===t?this.data.statement.result.score={raw:e}:(this.data.statement.result.score={min:0,max:t,raw:e},t>0&&(this.data.statement.result.score.scaled=Math.round(e/t*1e4)/1e4))),this.data.statement.result.completion=void 0===r?\"completed\"===this.getVerb()||\"answered\"===this.getVerb():r,void 0!==i&&(this.data.statement.result.success=i),n&&n.activityStartTime){var o=Math.round((Date.now()-n.activityStartTime)/10)/100;this.data.statement.result.duration=\"PT\"+o+\"S\"}},s.XAPIEvent.prototype.setVerb=function(e){-1!==s.jQuery.inArray(e,s.XAPIEvent.allowedXAPIVerbs)?this.data.statement.verb={id:\"http://adlnet.gov/expapi/verbs/\"+e,display:{\"en-US\":e}}:void 0!==e.id&&(this.data.statement.verb=e)},s.XAPIEvent.prototype.getVerb=function(e){var t=this.data.statement;return\"verb\"in t?!0===e?t.verb:t.verb.id.slice(31):null},s.XAPIEvent.prototype.setObject=function(e){if(e.contentId)if(this.data.statement.object={id:this.getContentXAPIId(e),objectType:\"Activity\",definition:{extensions:{\"http://h5p.org/x-api/h5p-local-content-id\":e.contentId}}},e.subContentId)this.data.statement.object.definition.extensions[\"http://h5p.org/x-api/h5p-subContentId\"]=e.subContentId,\"function\"==typeof e.getTitle&&(this.data.statement.object.definition.name={\"en-US\":e.getTitle()});else{var t=s.getContentForInstance(e.contentId);t&&t.metadata&&t.metadata.title&&(this.data.statement.object.definition.name={\"en-US\":s.createTitle(t.metadata.title)})}else this.data.statement.object={definition:{}}},s.XAPIEvent.prototype.setContext=function(e){e.parent&&(e.parent.contentId||e.parent.subContentId)&&(this.data.statement.context={contextActivities:{parent:[{id:this.getContentXAPIId(e.parent),objectType:\"Activity\"}]}}),e.libraryInfo&&(void 0===this.data.statement.context&&(this.data.statement.context={contextActivities:{}}),this.data.statement.context.contextActivities.category=[{id:\"http://h5p.org/libraries/\"+e.libraryInfo.versionedNameNoSpaces,objectType:\"Activity\"}])},s.XAPIEvent.prototype.setActor=function(){if(void 0!==H5PIntegration.user)this.data.statement.actor={name:H5PIntegration.user.name,mbox:\"mailto:\"+H5PIntegration.user.mail,objectType:\"Agent\"};else{var e;try{localStorage.H5PUserUUID?e=localStorage.H5PUserUUID:(e=s.createUUID(),localStorage.H5PUserUUID=e)}catch(t){e=\"not-trackable-\"+s.createUUID()}this.data.statement.actor={account:{name:e,homePage:H5PIntegration.siteUrl},objectType:\"Agent\"}}},s.XAPIEvent.prototype.getMaxScore=function(){return this.getVerifiedStatementValue([\"result\",\"score\",\"max\"])},s.XAPIEvent.prototype.getScore=function(){return this.getVerifiedStatementValue([\"result\",\"score\",\"raw\"])},s.XAPIEvent.prototype.getContentXAPIId=function(e){var t;return e.contentId&&H5PIntegration&&H5PIntegration.contents&&H5PIntegration.contents[\"cid-\"+e.contentId]&&(t=H5PIntegration.contents[\"cid-\"+e.contentId].url,e.subContentId&&(t+=\"?subContentId=\"+e.subContentId)),t},s.XAPIEvent.prototype.isFromChild=function(){var e=this.getVerifiedStatementValue([\"context\",\"contextActivities\",\"parent\",0,\"id\"]);return!e||-1===e.indexOf(\"subContentId\")},s.XAPIEvent.prototype.getVerifiedStatementValue=function(e){for(var t=this.data.statement,n=0;n<e.length;n++){if(void 0===t[e[n]])return null;t=t[e[n]]}return t},s.XAPIEvent.allowedXAPIVerbs=[\"answered\",\"asked\",\"attempted\",\"attended\",\"commented\",\"completed\",\"exited\",\"experienced\",\"failed\",\"imported\",\"initialized\",\"interacted\",\"launched\",\"mastered\",\"passed\",\"preferred\",\"progressed\",\"registered\",\"responded\",\"resumed\",\"scored\",\"shared\",\"suspended\",\"terminated\",\"voided\",\"downloaded\",\"copied\",\"accessed-reuse\",\"accessed-embed\",\"accessed-copyright\"];H5P.ContentType=function(e){function t(){}return t.prototype=new H5P.EventDispatcher,t.prototype.isRoot=function(){return e},t.prototype.getLibraryFilePath=function(e){return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces)+\"/\"+e},t};H5P;H5P.ConfirmationDialog=function(e){function t(t){e.call(this);var n=this;H5P.ConfirmationDialog.uniqueId+=1;var r=H5P.ConfirmationDialog.uniqueId;function i(e){n.hide(),n.trigger(\"confirmed\"),e.preventDefault()}function o(e){n.hide(),n.trigger(\"canceled\"),e.preventDefault()}function a(e,t){e.focus(),t.preventDefault()}(t=t||{}).headerText=t.headerText||H5P.t(\"confirmDialogHeader\"),t.dialogText=t.dialogText||H5P.t(\"confirmDialogBody\"),t.cancelText=t.cancelText||H5P.t(\"cancelLabel\"),t.confirmText=t.confirmText||H5P.t(\"confirmLabel\");var s=!1,c=document.createElement(\"div\");c.classList.add(\"h5p-confirmation-dialog-background\",\"hidden\",\"hiding\");var l=document.createElement(\"div\");l.classList.add(\"h5p-confirmation-dialog-popup\",\"hidden\"),t.classes&&t.classes.forEach((function(e){l.classList.add(e)})),l.setAttribute(\"role\",\"dialog\"),l.setAttribute(\"aria-labelledby\",\"h5p-confirmation-dialog-dialog-text-\"+r),c.appendChild(l),l.addEventListener(\"keydown\",(function(e){27===e.which&&o(e)}));var u=document.createElement(\"div\");u.classList.add(\"h5p-confirmation-dialog-header\"),l.appendChild(u);var d=document.createElement(\"div\");d.classList.add(\"h5p-confirmation-dialog-header-text\"),d.innerHTML=t.headerText,u.appendChild(d);var f=document.createElement(\"div\");f.classList.add(\"h5p-confirmation-dialog-body\"),l.appendChild(f);var p=document.createElement(\"div\");p.classList.add(\"h5p-confirmation-dialog-text\"),p.innerHTML=t.dialogText,p.id=\"h5p-confirmation-dialog-dialog-text-\"+r,f.appendChild(p);var h=document.createElement(\"div\");h.classList.add(\"h5p-confirmation-dialog-buttons\"),f.appendChild(h);var g=document.createElement(\"button\");g.classList.add(\"h5p-core-cancel-button\"),g.textContent=t.cancelText;var m=document.createElement(\"button\");m.classList.add(\"h5p-core-button\"),m.classList.add(\"h5p-confirmation-dialog-confirm-button\"),m.textContent=t.confirmText;var v,y,b=document.createElement(\"button\");b.classList.add(\"h5p-confirmation-dialog-exit\"),b.setAttribute(\"aria-hidden\",\"true\"),b.tabIndex=-1,b.title=t.cancelText,g.addEventListener(\"click\",o),g.addEventListener(\"keydown\",(function(e){32===e.which?o(e):9===e.which&&e.shiftKey&&a(m,e)})),t.hideCancel?h.classList.add(\"center\"):h.appendChild(g),m.addEventListener(\"click\",i),m.addEventListener(\"keydown\",(function(e){if(32===e.which)i(e);else if(9===e.which&&!e.shiftKey){a(t.hideCancel?m:g,e)}})),h.appendChild(m),b.addEventListener(\"click\",o),b.addEventListener(\"keydown\",(function(e){32===e.which&&o(e)})),t.hideExit||l.appendChild(b);var x,w=[],C=[];this.appendTo=function(e){return v=e,this};var T=function(e){c.contains(e.target)||(e.preventDefault(),m.focus())},P=function(e){var t,n=[],r=e.parentNode.children;for(t=0;t<r.length;t+=1)n[t]=!!r[t].getAttribute(\"aria-hidden\"),r[t]!==e&&r[t].setAttribute(\"aria-hidden\",!0);return n},E=function(e,t){var n,r=e.parentNode.children;for(n=0;n<r.length;n+=1)r[n]===e||t[n]||r[n].removeAttribute(\"aria-hidden\")};this.show=function(e){return x=document.activeElement,v.appendChild(c),(y=v.parentNode||v).addEventListener(\"focus\",T,!0),w=P(v),C=P(c),c.classList.remove(\"hidden\"),function(e){var t=parseInt(l.style.top,10);void 0!==e&&(t=e),t||(t=0),t+l.offsetHeight>v.offsetHeight&&(t=v.offsetHeight-l.offsetHeight-8),t-32<=0&&(t=40,s=!0),l.style.top=t+\"px\"}(e),setTimeout((function(){l.classList.remove(\"hidden\"),c.classList.remove(\"hiding\"),setTimeout((function(){if(m.focus(),s&&t.instance){var e=parseInt(l.offsetHeight,10)+32+16;n.setViewPortMinimumHeight(e),t.instance.trigger(\"resize\"),s=!1}}),100)}),0),this},this.hide=function(){return c.classList.add(\"hiding\"),l.classList.add(\"hidden\"),y.removeAttribute(\"aria-hidden\"),y.removeEventListener(\"focus\",T,!0),t.skipRestoreFocus||x.focus(),E(v,w),E(c,C),setTimeout((function(){c.classList.add(\"hidden\"),v.removeChild(c),n.setViewPortMinimumHeight(null)}),100),this},this.getElement=function(){return l},this.getPreviouslyFocused=function(){return x},this.setViewPortMinimumHeight=function(e){(document.querySelector(\".h5p-container\")||document.body).style.minHeight=\"number\"==typeof e?e+\"px\":e}}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}(H5P.EventDispatcher),H5P.ConfirmationDialog.uniqueId=-1;H5P,n(2);H5P.ActionBar=function(e,t){function n(e){t.call(this);var n=this,r=!1,i=H5P.jQuery('<ul class=\"h5p-actions\"></ul>'),o=function(e,t){var o=function(){n.trigger(e)};H5P.jQuery(\"<li/>\",{class:\"h5p-button h5p-noselect h5p-\"+(t||e),role:\"button\",tabindex:0,title:H5P.t(e+\"Description\"),html:H5P.t(e),on:{click:o,keypress:function(e){32===e.which&&(o(),e.preventDefault())}},appendTo:i}),r=!0};(e.export||e.copy)&&o(\"reuse\",\"export\"),e.copyright&&o(\"copyrights\"),e.embed&&o(\"embed\"),e.icon&&(H5P.jQuery('<li><a class=\"h5p-link\" href=\"http://h5p.org\" target=\"_blank\" title=\"'+H5P.t(\"h5pDescription\")+'\"></a></li>').appendTo(i),r=!0),n.getDOMElement=function(){return i},n.hasActions=function(){return r}}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n}(H5P.jQuery,H5P.EventDispatcher);H5P;i.getLibraryPath=function(e){return H5PIntegration._libraryPaths[e]},i.getPath=function(e,t){var n;if(function(e){return e.match(/^[a-z0-9]+:\\/\\//i)}(e))return e;if(void 0!==t)n=H5PIntegration.url+\"/content\";else{if(void 0===window.H5PEditor)return;n=H5PEditor.filesPath}return n+\"/\"+e}}])}));");
// EXTERNAL MODULE: ./node_modules/to-string-loader/src/to-string.js!./node_modules/css-loader/dist/cjs.js!./vendor/h5p/styles/h5p.css
var styles_h5p = __webpack_require__("5d94");
var h5p_default = /*#__PURE__*/__webpack_require__.n(styles_h5p);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/h5p.vue?vue&type=script&lang=js&






















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // eslint-disable-next-line import/no-webpack-loader-syntax

 // eslint-disable-next-line import/no-webpack-loader-syntax


/* harmony default export */ var h5pvue_type_script_lang_js_ = ({
  name: 'h5p',
  props: {
    src: {
      type: String,
      required: true
    },
    embed: {
      type: String,
      default: ''
    },
    resize: {
      type: String,
      default: ''
    },
    export: {
      type: String,
      default: ''
    },
    copyright: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    l10n: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      loading: true,
      error: undefined,
      srcdoc: ''
    };
  },
  computed: {
    path: function path() {
      return this.src.endsWith('/') ? this.src.slice(0, -1) : this.src;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var h5p, content, libraries, _h5p$preloadedDepende, machineName, majorVersion, minorVersion, h5pIntegration, _this$sortDependencie, styles, scripts, endScript, contentStyles, contentScripts;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.getJSON('h5p.json');

            case 3:
              h5p = _context.sent;
              _context.next = 6;
              return _this.getJSON('content', 'content.json');

            case 6:
              content = _context.sent;
              _context.next = 9;
              return _this.loadDependencies(h5p.preloadedDependencies);

            case 9:
              libraries = _context.sent;
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              _this.error = _context.t0;
              _this.loading = false;
              return _context.abrupt("return");

            case 17:
              _h5p$preloadedDepende = h5p.preloadedDependencies.find(function (dep) {
                return dep.machineName === h5p.mainLibrary;
              }), machineName = _h5p$preloadedDepende.machineName, majorVersion = _h5p$preloadedDepende.majorVersion, minorVersion = _h5p$preloadedDepende.minorVersion;
              h5pIntegration = {
                l10n: {
                  H5P: Object.assign({}, l10n.H5P, _this.l10n)
                },
                url: _this.path,
                contents: {
                  'cid-default': {
                    embedCode: _this.embed,
                    resizeCode: _this.resize,
                    exportUrl: _this.export,
                    fullScreen: _this.fullscreen,
                    library: "".concat(machineName, " ").concat(majorVersion, ".").concat(minorVersion),
                    jsonContent: JSON.stringify(content),
                    url: _this.path,
                    displayOptions: {
                      frame: Boolean(_this.export || _this.embed || _this.copyright || _this.icon),
                      export: Boolean(_this.export),
                      embed: Boolean(_this.embed),
                      copyright: _this.copyright,
                      icon: _this.icon
                    }
                  }
                },
                _libraryPaths: Object.fromEntries(Object.entries(libraries).map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      id = _ref2[0],
                      lib = _ref2[1];

                  return [id, lib.path];
                }))
              };
              _this$sortDependencie = _this.sortDependencies(libraries), styles = _this$sortDependencie.styles, scripts = _this$sortDependencie.scripts; // workaround for vue-loader parsing this as the end of our SFC's script block

              endScript = '</' + 'script>';
              contentStyles = styles.map(function (style) {
                return "<link rel=\"stylesheet\" href=\"".concat(style, "\">");
              }).join('\n');
              contentScripts = scripts.map(function (script) {
                return "<script src=\"".concat(script, "\">").concat(endScript);
              }).join('\n');
              _this.srcdoc = "<!doctype html>\n<html class=\"h5p-iframe\">\n  <head>\n    <base target=\"_parent\">\n    <style>".concat(h5p_default.a, "</style>\n    ").concat(contentStyles, "\n    <script>H5PIntegration = ").concat(JSON.stringify(h5pIntegration), ";var H5P = H5P || {};H5P.externalEmbed = true;").concat(endScript, "\n    <script>").concat(cjs_js_frame_frame).concat(endScript, "\n    ").concat(contentScripts, "\n  </head>\n  <body>\n    <div class=\"h5p-content\" data-content-id=\"default\"/>\n  </body>\n</html>");
              _this.loading = false;

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }))();
  },
  methods: {
    addEventHandlers: function addEventHandlers() {
      var _this2 = this;

      this.$refs.iframe.contentWindow.H5P.externalDispatcher.on('*', function (ev) {
        _this2.$emit(ev.type.toLowerCase(), ev.data);
      });
    },
    getJSON: function getJSON() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _len, url, _key, resp, body;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _arguments.length, url = new Array(_len), _key = 0; _key < _len; _key++) {
                  url[_key] = _arguments[_key];
                }

                _context2.next = 3;
                return fetch(_this3.path + '/' + url.join('/'), {
                  // credentials: 'include'
                });

              case 3:
                resp = _context2.sent;

                if (resp.ok) {
                  _context2.next = 15;
                  break;
                }

                body = {};
                _context2.prev = 6;
                _context2.next = 9;
                return resp.json();

              case 9:
                body = _context2.sent;
                _context2.next = 14;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](6);

              case 14:
                throw new errors_FetchError(resp, body);

              case 15:
                return _context2.abrupt("return", resp.json());

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[6, 12]]);
      }))();
    },
    loadDependencies: function loadDependencies(deps) {
      var _arguments2 = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var libraryMap;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                libraryMap = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : {};
                _context4.next = 3;
                return Promise.all(deps.map( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
                    var machineName, majorVersion, minorVersion, id, libDeps;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            machineName = _ref3.machineName, majorVersion = _ref3.majorVersion, minorVersion = _ref3.minorVersion;
                            id = "".concat(machineName, "-").concat(majorVersion, ".").concat(minorVersion);

                            if (!libraryMap[id]) {
                              _context3.next = 4;
                              break;
                            }

                            return _context3.abrupt("return");

                          case 4:
                            _context3.prev = 4;
                            _context3.next = 7;
                            return _this4.getJSON(id, 'library.json');

                          case 7:
                            _context3.t0 = _context3.sent;
                            _context3.t1 = id;
                            libraryMap[id] = {
                              library: _context3.t0,
                              path: _context3.t1
                            };
                            _context3.next = 19;
                            break;

                          case 12:
                            _context3.prev = 12;
                            _context3.t2 = _context3["catch"](4);
                            _context3.next = 16;
                            return _this4.getJSON(machineName, 'library.json');

                          case 16:
                            _context3.t3 = _context3.sent;
                            _context3.t4 = machineName;
                            libraryMap[id] = {
                              library: _context3.t3,
                              path: _context3.t4
                            };

                          case 19:
                            libDeps = libraryMap[id].library.preloadedDependencies;

                            if (libDeps) {
                              _this4.loadDependencies(libDeps, libraryMap);

                              libraryMap[id].dependencies = libDeps.map(function (_ref5) {
                                var machineName = _ref5.machineName,
                                    majorVersion = _ref5.majorVersion,
                                    minorVersion = _ref5.minorVersion;
                                return "".concat(machineName, "-").concat(majorVersion, ".").concat(minorVersion);
                              });
                            }

                          case 21:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[4, 12]]);
                  }));

                  return function (_x) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 3:
                return _context4.abrupt("return", libraryMap);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    sortDependencies: function sortDependencies(libraries) {
      var _this5 = this;

      var sorter = new external_toposort_class_default.a();
      Object.entries(libraries).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            id = _ref7[0],
            _ref7$1$dependencies = _ref7[1].dependencies,
            dependencies = _ref7$1$dependencies === void 0 ? [] : _ref7$1$dependencies;

        return sorter.add(id, dependencies);
      });
      var sorted = sorter.sort().reverse();
      var styles = sorted.map(function (id) {
        return libraries[id];
      }).map(function (_ref8) {
        var _library$preloadedCss;

        var path = _ref8.path,
            library = _ref8.library;
        return (_library$preloadedCss = library.preloadedCss) === null || _library$preloadedCss === void 0 ? void 0 : _library$preloadedCss.map(function (file) {
          return "".concat(_this5.path, "/").concat(path, "/").concat(file.path);
        });
      }).flat(1).filter(Boolean);
      var scripts = sorted.map(function (id) {
        return libraries[id];
      }).map(function (_ref9) {
        var _library$preloadedJs;

        var path = _ref9.path,
            library = _ref9.library;
        return (_library$preloadedJs = library.preloadedJs) === null || _library$preloadedJs === void 0 ? void 0 : _library$preloadedJs.map(function (file) {
          return "".concat(_this5.path, "/").concat(path, "/").concat(file.path);
        });
      }).flat(1).filter(Boolean);
      return {
        styles: styles,
        scripts: scripts
      };
    }
  }
});
// CONCATENATED MODULE: ./src/h5p.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_h5pvue_type_script_lang_js_ = (h5pvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/h5p.vue





/* normalize component */

var component = normalizeComponent(
  src_h5pvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_h5p = (component.exports);
// CONCATENATED MODULE: ./src/index.js

 // Declare install function executed by Vue.use()

function install(Vue) {
  Vue.component('h5p', src_h5p);
} // Auto-install when vue is found (eg. in browser via <script> tag)

if (typeof globalThis !== 'undefined' && globalThis.Vue) {
  globalThis.Vue.use({
    install: install
  });
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ var src_0 = (src_h5p);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fe0e":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find");

/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-h5p.common.js.map