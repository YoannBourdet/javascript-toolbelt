(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jst", [], factory);
	else if(typeof exports === 'object')
		exports["jst"] = factory();
	else
		root["jst"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** multi jst ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.js */1);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	_object.Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _array = __webpack_require__(/*! ./array */ 2);
	
	var _object = __webpack_require__(/*! ./object */ 3);
	
	var jst = {
	  Array: _array.Array,
	  Object: _object.Object
	};
	
	exports.default = jst;
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	  eslint
	  no-unused-vars: 0
	*/
	
	var Array = exports.Array = function Array() {
	  _classCallCheck(this, Array);
	};

/***/ },
/* 3 */
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.iterate = iterate;
	exports.values = values;
	exports.keys = keys;
	exports.map = map;
	exports.clone = clone;
	exports.isObject = isObject;
	
	var _marked = [iterate].map(regeneratorRuntime.mark);
	
	function iterate(obj) {
	  var key;
	  return regeneratorRuntime.wrap(function iterate$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.t0 = regeneratorRuntime.keys(obj);
	
	        case 1:
	          if ((_context.t1 = _context.t0()).done) {
	            _context.next = 8;
	            break;
	          }
	
	          key = _context.t1.value;
	
	          if (!obj.hasOwnProperty(key)) {
	            _context.next = 6;
	            break;
	          }
	
	          _context.next = 6;
	          return { key: key, val: obj[key] };
	
	        case 6:
	          _context.next = 1;
	          break;
	
	        case 8:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	function values(obj) {
	  var newArray = [];
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      newArray.push(key);
	    }
	  }
	  return newArray;
	}
	
	function keys(obj) {
	  var newArray = [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = iterate(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _ref2 = _step.value;
	      var key = _ref2.key;
	
	      newArray.push(key);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return newArray;
	}
	
	function map(obj, cb) {
	  var newObject = {};
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = iterate(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var _ref4 = _step2.value;
	      var entry = _ref4.entry;
	
	      if (cb) {
	        var _cb = cb(entry);
	
	        var key = _cb.key;
	        var val = _cb.val;
	
	        newObject[key] = val;
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  return newObject;
	}
	
	function clone(obj) {
	  return Object.assign({}, obj);
	}
	
	function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || obj instanceof Object || typeof obj === 'function';
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jst.js.map