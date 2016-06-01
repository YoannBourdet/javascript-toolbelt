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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _array = __webpack_require__(/*! ./array */ 2);
	
	Object.keys(_array).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _array[key];
	    }
	  });
	});
	
	var _object = __webpack_require__(/*! ./object */ 3);
	
	Object.keys(_object).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _object[key];
	    }
	  });
	});
	
	var _string = __webpack_require__(/*! ./string */ 4);
	
	Object.keys(_string).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _string[key];
	    }
	  });
	});

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint no-unused-vars: 0 */
	
	var getFirst = exports.getFirst = function getFirst(arr) {
	  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	  var newArr = n < 0 ? arr.slice(0, n) : arr.slice(0, Math.abs(n));
	  return newArr;
	};
	
	var getLast = exports.getLast = function getLast(arr) {
	  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	  var newArr = n < 0 ? arr.slice(+('-' + n)) : arr.slice(0, n);
	  return newArr;
	};
	
	var ignoreLast = exports.ignoreLast = function ignoreLast(arr) {
	  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	  var newArr = n < 0 ? arr.slice(0, +('-' + n)) : arr.slice(0, n);
	  return newArr;
	};
	
	var ignoreFirst = exports.ignoreFirst = function ignoreFirst(arr) {
	  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	  var newArr = n < 0 ? arr.slice(n) : arr.slice(Math.abs(n));
	  return newArr;
	};
	
	var compact = exports.compact = function compact(arr) {
	  var newArr = [];
	  arr.forEach(function (el) {
	    if (el) {
	      newArr.push(el);
	    }
	  });
	  return newArr;
	};
	
	var removeDoubleKeys = exports.removeDoubleKeys = function removeDoubleKeys(arr) {
	  var newArr = [];
	  arr.forEach(function (el) {
	    if (!newArr.includes(el)) {
	      newArr.push(el);
	    }
	  });
	  return newArr;
	};
	
	/*
	 * transform array to string
	 * separate word by ',' and the two last by '&',
	 * you can overide this default behavoir
	 */
	var sentencify = exports.sentencify = function sentencify(arr) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref$join = _ref.join;
	  var join = _ref$join === undefined ? ' , ' : _ref$join;
	  var _ref$last = _ref.last;
	  var last = _ref$last === undefined ? ' & ' : _ref$last;
	  return arr.reduce(function (agg, x, i) {
	    switch (i) {
	      case 0:
	        return '' + agg + x;
	      case arr.length - 1:
	        return '' + agg + last + x;
	      default:
	        return '' + agg + join + x;
	    }
	  }, '');
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
	
	/* eslint no-unused-vars: 0 */
	
	var iterate = exports.iterate = regeneratorRuntime.mark(function iterate(obj) {
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
	  }, iterate, this);
	});
	
	var getValues = exports.getValues = function getValues(obj) {
	  var newArray = [];
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      newArray.push(key);
	    }
	  }
	  return newArray;
	};
	
	var getKeys = exports.getKeys = function getKeys(obj) {
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
	};
	
	var filter = exports.filter = function filter(obj, cb) {
	  var newObj = {};
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = iterate(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var _ref4 = _step2.value;
	      var key = _ref4.key;
	      var val = _ref4.val;
	
	      if (cb({ key: key, val: val })) {
	        newObj[key] = val;
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
	
	  return newObj;
	};
	
	var map = exports.map = function map(obj, cb) {
	  var newObject = {};
	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;
	
	  try {
	    for (var _iterator3 = iterate(obj)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      var entry = _step3.value;
	
	      if (cb) {
	        var _cb = cb(entry);
	
	        var key = _cb.key;
	        var val = _cb.val;
	
	        newObject[key] = val;
	      }
	    }
	  } catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion3 && _iterator3.return) {
	        _iterator3.return();
	      }
	    } finally {
	      if (_didIteratorError3) {
	        throw _iteratorError3;
	      }
	    }
	  }
	
	  return newObject;
	};
	
	var invert = exports.invert = function invert(obj) {
	  var newObject = {};
	  var _iteratorNormalCompletion4 = true;
	  var _didIteratorError4 = false;
	  var _iteratorError4 = undefined;
	
	  try {
	    for (var _iterator4 = iterate(obj)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	      var _ref6 = _step4.value;
	      var key = _ref6.key;
	      var val = _ref6.val;
	
	      newObject[val] = key;
	    }
	  } catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion4 && _iterator4.return) {
	        _iterator4.return();
	      }
	    } finally {
	      if (_didIteratorError4) {
	        throw _iteratorError4;
	      }
	    }
	  }
	
	  return newObject;
	};
	
	var pick = exports.pick = function pick(obj) {
	  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    keys[_key - 1] = arguments[_key];
	  }
	
	  var newObject = {};
	  keys.forEach(function (key) {
	    if (typeof obj[key] !== 'undefined') {
	      newObject[key] = obj[key];
	    }
	  });
	  return newObject;
	};
	
	var omit = exports.omit = function omit(obj) {
	  for (var _len2 = arguments.length, keys = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    keys[_key2 - 1] = arguments[_key2];
	  }
	
	  var newObject = {};
	  var _iteratorNormalCompletion5 = true;
	  var _didIteratorError5 = false;
	  var _iteratorError5 = undefined;
	
	  try {
	    for (var _iterator5 = iterate(obj)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	      var _ref8 = _step5.value;
	      var key = _ref8.key;
	      var val = _ref8.val;
	
	      if (!keys.includes(key)) {
	        newObject[key] = val;
	      }
	    }
	  } catch (err) {
	    _didIteratorError5 = true;
	    _iteratorError5 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion5 && _iterator5.return) {
	        _iterator5.return();
	      }
	    } finally {
	      if (_didIteratorError5) {
	        throw _iteratorError5;
	      }
	    }
	  }
	
	  return newObject;
	};
	
	var hasKey = exports.hasKey = function hasKey(obj, key) {
	  var bool = false;
	  for (var k in obj) {
	    if (k === key) {
	      bool = true;
	    }
	  }
	  return bool;
	};
	
	var hasProperty = exports.hasProperty = function hasProperty(obj, property) {
	  var bool = false;
	  var _iteratorNormalCompletion6 = true;
	  var _didIteratorError6 = false;
	  var _iteratorError6 = undefined;
	
	  try {
	    for (var _iterator6 = obj[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	      var val = _step6.value;
	
	      if (val === property) {
	        bool = true;
	      }
	    }
	  } catch (err) {
	    _didIteratorError6 = true;
	    _iteratorError6 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion6 && _iterator6.return) {
	        _iterator6.return();
	      }
	    } finally {
	      if (_didIteratorError6) {
	        throw _iteratorError6;
	      }
	    }
	  }
	
	  return bool;
	};
	
	var isMatch = exports.isMatch = function isMatch(obj, properties) {
	  var bool = false;
	  var _iteratorNormalCompletion7 = true;
	  var _didIteratorError7 = false;
	  var _iteratorError7 = undefined;
	
	  try {
	    for (var _iterator7 = iterate(obj)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	      var _ref10 = _step7.value;
	      var key = _ref10.key;
	      var val = _ref10.val;
	
	      if (properties[key] === val) {
	        bool = true;
	      }
	    }
	  } catch (err) {
	    _didIteratorError7 = true;
	    _iteratorError7 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion7 && _iterator7.return) {
	        _iterator7.return();
	      }
	    } finally {
	      if (_didIteratorError7) {
	        throw _iteratorError7;
	      }
	    }
	  }
	
	  return bool;
	};
	
	var clone = exports.clone = function clone(obj) {
	  return Object.assign({}, obj);
	};
	
	var extend = exports.extend = function extend(destination, source) {
	  return Object.assign({}, destination, source);
	};
	
	var extendOwn = exports.extendOwn = function extendOwn(destination, source) {
	  var newObject = {};
	  for (var key in source) {
	    if (source.hasOwnProperty(key)) {
	      newObject[key] = source[key];
	    }
	  }
	  return Object.assign({}, destination, newObject);
	};
	
	var fillObject = exports.fillObject = function fillObject(defaultObj, obj) {
	  return Object.assign({}, obj, defaultObj);
	};
	
	var isObject = exports.isObject = function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || obj instanceof Object || typeof obj === 'function';
	};

/***/ },
/* 4 */
/*!***********************!*\
  !*** ./src/string.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	/* eslint no-unused-vars: 0 */
	
	var capitalize = exports.capitalize = function capitalize(str) {
	   return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	var dashify = exports.dashify = function dashify(str) {
	   return str.repalce(/[ \s]/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	
	var underscorify = exports.underscorify = function underscorify(str) {
	   return str.repalce(/[ \s]/g, '_').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jst.js.map