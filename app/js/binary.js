/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"binary": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"404":"404","account_password":"account_password","api_toke":"api_toke","authorized_application":"authorized_application","cashier_password":"cashier_password","contract":"contract","financial_assessment":"financial_assessment","limits":"limits","login_history":"login_history","personal_details":"personal_details","portfolio":"portfolio","self_exclusion":"self_exclusion","settings":"settings","statement":"statement","vendors~smart_chart":"vendors~smart_chart","smart_chart":"smart_chart"}[chunkId]||chunkId) + "-" + {"404":"1f20d1cb6ffbf53419ed","account_password":"67c66084bc424d34b10b","api_toke":"7c72ca04a060c6e8363d","authorized_application":"97635409ac3488b8a4dc","cashier_password":"0061f340e2203b85c4de","contract":"d5ff3abe544011cd2843","financial_assessment":"fa615b65ab7d51a072e8","limits":"6122a66075b7120f5152","login_history":"f73b0e94430bafb6dff4","personal_details":"8c2c516db1200e2e67f1","portfolio":"1a4425be49f4fd7f85cc","self_exclusion":"10c70715aab8e89cdf0f","settings":"b65a79071afa6712cab7","statement":"d0b9847e8e35ffae3f6e","vendors~smart_chart":"e29bce83a9f50024f42a","smart_chart":"3bd5fe29258265801823"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/app/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/javascript/app_2/index.js","binary_common","react_mobx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ja":
/*!********************************************!*\
  !*** ./node_modules/moment/locale sync ja ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ja";

/***/ }),

/***/ "./src/images/app_2/header/symbol.svg":
/*!********************************************!*\
  !*** ./src/images/app_2/header/symbol.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", width: "46", height: "46", viewBox: "0 0 60.47 60.47" }, props), _react2.default.createElement("path", { fill: "#fff", d: "M51.61 8.85a30.24 30.24 0 1 0 0 42.77 30.26 30.26 0 0 0 0-42.77z" }), _react2.default.createElement("path", { fill: "#2a3052", d: "M21.8 38.17A5.51 5.51 0 0 0 24.33 42l-.58-1.08s1.11-2.92-1.95-2.75z" }), _react2.default.createElement("path", { fill: "#2a3052", d: "M50.08 10.38a28.08 28.08 0 1 0 0 39.72 28.1 28.1 0 0 0 0-39.72zm-2.9 36.81l-.92.87c-6.75 5.5-11.94 2.76-12 2.76-3.52-.7-5.27-.71-6.26-1.37-.25-.17-1-.59-1.23-.49a2.25 2.25 0 0 1-2.72-.16l-.25-.23a1.93 1.93 0 0 1-.37-2.67c.26-.26-.2-1-.2-1s-1.32-2-2.22-3.15a8.79 8.79 0 0 1-1.14-3.91 10.46 10.46 0 0 1-1.46-2.14 5.55 5.55 0 0 0-.78-.94 5 5 0 0 1-.47-.51.21.21 0 0 1 0-.16 5.65 5.65 0 0 1 1.55-2c.32-.21 1.68-1 1.68-1a2.71 2.71 0 0 1 2.08-1.21 9.93 9.93 0 0 1 3.93.6l.84.27c1.42.45 2.67 1 3.66 1.42a16.55 16.55 0 0 0 2 .79c1.75.46 4.85-1 5.5-1.56 1.07-1 1.53-1.63 1.54-2.16a1.2 1.2 0 0 0-.43-.88c-.16-.14-.36-.42-.62-.67a1.12 1.12 0 0 0-.14-.12c-3-3.15-2.46-5.13-2.45-5.16.13-1.42-.69-2.33-1.56-3.27l-.14-.18a1 1 0 0 1-.1-.11 37.8 37.8 0 0 0 4.59 1 8.79 8.79 0 0 0 2.08.11c1.54 0 2.77-.18 2.85-.54a21.27 21.27 0 0 1-4.11-1.21 65.92 65.92 0 0 0-2.72-1c-1.24-.42-2.58-1-2.58-1 5.35 1.4 7.1 2 9.54 2A7.68 7.68 0 0 0 46 18c.35-.06 1.43-.31 1.55-.68a8.74 8.74 0 0 1-3-.48c-6.24-2.06-6.77-3.09-10.23-4.44a31.17 31.17 0 0 0-5.25-1.67 10.13 10.13 0 0 0-4.54 0c-4.73-1.11-5.81-1-7.2-.69a24 24 0 0 1 29.86 3.23 24.46 24.46 0 0 1 2.92 3.54l.11.17a24 24 0 0 1-3 30.19zM31.46 20.13a5.51 5.51 0 0 1 3.1 3.34c-3 .68-2.36-2.37-2.36-2.37z" }));
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/AccountSwitcher/upgrade_button.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/AccountSwitcher/upgrade_button.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpgradeButton = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _button = __webpack_require__(/*! ../../Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpgradeButton = function UpgradeButton(_ref) {
    var onClick = _ref.onClick;
    return _react2.default.createElement(_button2.default, {
        id: 'acc-balance-btn',
        className: 'primary orange',
        has_effect: true,
        text: (0, _localize.localize)('Upgrade'),
        onClick: onClick
    });
};

UpgradeButton.propTypes = {
    onClick: _propTypes2.default.func
};

exports.UpgradeButton = UpgradeButton;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/calendar.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _calendar_footer = __webpack_require__(/*! ./calendar_footer.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_footer.jsx");

var _calendar_footer2 = _interopRequireDefault(_calendar_footer);

var _calendar_header = __webpack_require__(/*! ./calendar_header.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_header.jsx");

var _calendar_header2 = _interopRequireDefault(_calendar_header);

var _calendar_panel = __webpack_require__(/*! ./calendar_panel.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_panel.jsx");

var _calendar_panel2 = _interopRequireDefault(_calendar_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = (_temp = _class = function (_React$PureComponent) {
    _inherits(Calendar, _React$PureComponent);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        _initialiseProps.call(_this);

        var date_format = props.date_format,
            start_date = props.start_date;

        var current_date = _moment2.default.utc(start_date).format(date_format);
        _this.state = {
            calendar_date: current_date, // calendar date reference
            selected_date: '', // selected date
            calendar_view: 'date'
        };
        return _this;
    }

    // navigates to next or previous's month/year/decade/century


    // selects a day, a month, a year, or a decade


    // sets Calendar active view


    _createClass(Calendar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                date_format = _props.date_format,
                footer = _props.footer,
                has_today_btn = _props.has_today_btn,
                id = _props.id,
                max_date = _props.max_date,
                min_date = _props.min_date,
                start_date = _props.start_date;
            var _state = this.state,
                calendar_date = _state.calendar_date,
                calendar_view = _state.calendar_view,
                selected_date = _state.selected_date;


            return _react2.default.createElement(
                'div',
                { id: id, className: 'calendar', value: selected_date },
                children,
                _react2.default.createElement(_calendar_header2.default, {
                    calendar_date: calendar_date,
                    isPeriodDisabled: this.isPeriodDisabled,
                    onClick: this.navigators,
                    onSelect: this.calendarViews,
                    calendar_view: calendar_view
                }),
                _react2.default.createElement(_calendar_panel2.default, {
                    calendar_date: calendar_date,
                    date_format: date_format,
                    isPeriodDisabled: this.isPeriodDisabled,
                    max_date: max_date,
                    min_date: min_date,
                    start_date: start_date,
                    onClick: this.panelSelectors,
                    selected_date: selected_date,
                    calendar_view: calendar_view
                }),
                _react2.default.createElement(_calendar_footer2.default, {
                    footer: footer,
                    onClick: this.setToday,
                    has_today_btn: has_today_btn
                })
            );
        }
    }]);

    return Calendar;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.navigators = {
        nextMonth: function nextMonth() {
            _this2.navigateTo(1, 'months', true);
        },
        previousMonth: function previousMonth() {
            _this2.navigateTo(1, 'months', false);
        },
        nextYear: function nextYear() {
            _this2.navigateTo(1, 'years', true);
        },
        previousYear: function previousYear() {
            _this2.navigateTo(1, 'years', false);
        },
        nextDecade: function nextDecade() {
            _this2.navigateTo(10, 'years', true);
        },
        previousDecade: function previousDecade() {
            _this2.navigateTo(10, 'years', false);
        },
        nextCentury: function nextCentury() {
            _this2.navigateTo(100, 'years', true);
        },
        previousCentury: function previousCentury() {
            _this2.navigateTo(100, 'years', false);
        }
    };
    this.panelSelectors = {
        date: function date(e, is_disabled) {
            _this2.updateSelectedDate(e, is_disabled);
        },
        month: function month(e) {
            _this2.updateSelected(e, 'month');
        },
        year: function year(e) {
            _this2.updateSelected(e, 'year');
        },
        decade: function decade(e) {
            _this2.updateSelected(e, 'decade');
        }
    };
    this.calendarViews = {
        date: function date() {
            _this2.setState({ calendar_view: 'date' });
        },
        month: function month() {
            _this2.setState({ calendar_view: 'month' });
        },
        year: function year() {
            _this2.setState({ calendar_view: 'year' });
        },
        decade: function decade() {
            _this2.setState({ calendar_view: 'decade' });
        }
    };

    this.navigateTo = function (value, unit, is_add) {
        var _props2 = _this2.props,
            date_format = _props2.date_format,
            max_date = _props2.max_date,
            min_date = _props2.min_date;


        var new_date = _moment2.default.utc(_this2.state.calendar_date, date_format)[is_add ? 'add' : 'subtract'](value, unit).format(date_format);

        if (unit === 'months' && _this2.isPeriodDisabled(new_date, 'month')) return;

        if (unit === 'years' && _this2.isPeriodDisabled(new_date, 'years')) {
            new_date = is_add ? max_date : min_date;
        }

        _this2.setState({ calendar_date: _moment2.default.utc(new_date, date_format).format(date_format) }); // formatted date
    };

    this.updateSelectedDate = function (e, is_disabled) {
        if (is_disabled) {
            return;
        }

        var _props3 = _this2.props,
            date_format = _props3.date_format,
            max_date = _props3.max_date,
            min_date = _props3.min_date,
            onSelect = _props3.onSelect;


        var moment_date = _moment2.default.utc(e.target.dataset.date).startOf('day');
        var is_before = moment_date.isBefore(_moment2.default.utc(min_date));
        var is_after = moment_date.isAfter(_moment2.default.utc(max_date));

        if (is_before || is_after) {
            return;
        }

        var formatted_date = moment_date.format(date_format);
        _this2.setState({
            calendar_date: formatted_date,
            selected_date: formatted_date
        });

        if (onSelect) {
            onSelect(formatted_date);
        }
    };

    this.updateSelected = function (e, type) {
        var view_map = {
            month: 'date',
            year: 'month',
            decade: 'year'
        };
        var date = _moment2.default.utc(_this2.state.calendar_date, _this2.props.date_format)[type === 'decade' ? 'year' : type](e.target.dataset[type].split('-')[0]).format(_this2.props.date_format);

        if (_this2.isPeriodDisabled(date, type)) return;

        _this2.setState({
            calendar_date: date,
            calendar_view: view_map[type]
        });
    };

    this.resetCalendar = function () {
        var _props4 = _this2.props,
            date_format = _props4.date_format,
            start_date = _props4.start_date;


        var default_date = _moment2.default.utc(start_date).format(date_format);
        _this2.setState({
            calendar_date: default_date,
            selected_date: '',
            calendar_view: 'date'
        });
    };

    this.setToday = function () {
        var _props5 = _this2.props,
            date_format = _props5.date_format,
            onSelect = _props5.onSelect;


        var now = (0, _moment2.default)().utc().format(date_format);
        _this2.setState({
            calendar_date: now,
            selected_date: now,
            calendar_view: 'date'
        });

        if (onSelect) {
            onSelect(now, true);
        }
    };

    this.isPeriodDisabled = function (date, unit) {
        var _props6 = _this2.props,
            max_date = _props6.max_date,
            min_date = _props6.min_date;


        var start_of_period = _moment2.default.utc(date).startOf(unit);
        var end_of_period = _moment2.default.utc(date).endOf(unit);
        return end_of_period.isBefore(_moment2.default.utc(min_date)) || start_of_period.isAfter(_moment2.default.utc(max_date));
    };
}, _temp);


Calendar.defaultProps = {
    date_format: 'YYYY-MM-DD',
    min_date: (0, _moment2.default)(0).utc().format('YYYY-MM-DD'), // by default, min_date is set to Unix Epoch (January 1st 1970)
    max_date: (0, _moment2.default)().utc().add(120, 'y').format('YYYY-MM-DD') // by default, max_date is set to 120 years after today
};

Calendar.propTypes = {
    children: _propTypes2.default.object,
    date_format: _propTypes2.default.string,
    footer: _propTypes2.default.string,
    has_today_btn: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    is_nativepicker: _propTypes2.default.bool,
    max_date: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    min_date: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    onSelect: _propTypes2.default.func,
    start_date: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = Calendar;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_button.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/calendar_button.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CalendarButton;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalendarButton(_ref) {
    var children = _ref.children,
        className = _ref.className,
        is_hidden = _ref.is_hidden,
        label = _ref.label,
        onClick = _ref.onClick;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        !is_hidden && _react2.default.createElement(
            'span',
            {
                type: 'button',
                className: className,
                onClick: onClick
            },
            label,
            children
        )
    );
}

CalendarButton.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
    className: _propTypes2.default.string,
    is_hidden: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_footer.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/calendar_footer.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CalendarFooter;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _calendar_button = __webpack_require__(/*! ./calendar_button.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_button.jsx");

var _calendar_button2 = _interopRequireDefault(_calendar_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalendarFooter(_ref) {
    var footer = _ref.footer,
        has_today_btn = _ref.has_today_btn,
        onClick = _ref.onClick;

    return _react2.default.createElement(
        'div',
        { className: 'calendar-footer' },
        footer && _react2.default.createElement(
            'span',
            { className: 'calendar-footer-extra' },
            footer
        ),
        has_today_btn && _react2.default.createElement(
            _calendar_button2.default,
            { className: 'calendar-footer-btn' },
            _react2.default.createElement(
                'a',
                { role: 'button', onClick: onClick },
                (0, _localize.localize)('Today')
            )
        )
    );
}

CalendarFooter.propTypes = {
    footer: _propTypes2.default.string,
    has_today_btn: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_header.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/calendar_header.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _calendar_button = __webpack_require__(/*! ./calendar_button.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_button.jsx");

var _calendar_button2 = _interopRequireDefault(_calendar_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalendarHeader(_ref) {
    var calendar_date = _ref.calendar_date,
        isPeriodDisabled = _ref.isPeriodDisabled,
        _onClick = _ref.onClick,
        onSelect = _ref.onSelect,
        calendar_view = _ref.calendar_view;

    var is_date_view = calendar_view === 'date';
    var is_month_view = calendar_view === 'month';
    var is_year_view = calendar_view === 'year';
    var is_decade_view = calendar_view === 'decade';
    var moment_date = _moment2.default.utc(calendar_date);

    return _react2.default.createElement(
        'div',
        { className: 'calendar-header' },
        _react2.default.createElement(_calendar_button2.default, {
            className: (0, _classnames2.default)('calendar-prev-year-btn', {
                hidden: isPeriodDisabled(moment_date.clone().subtract(1, 'month'), 'month')
            }),
            onClick: function onClick() {
                return (is_date_view || is_month_view) && _onClick.previousYear() || is_year_view && _onClick.previousDecade() || is_decade_view && _onClick.previousCentury();
            }
        }),
        _react2.default.createElement(_calendar_button2.default, {
            className: (0, _classnames2.default)('calendar-prev-month-btn', {
                hidden: isPeriodDisabled(moment_date.clone().subtract(1, 'month'), 'month')
            }),
            is_hidden: !is_date_view,
            onClick: _onClick.previousMonth
        }),
        _react2.default.createElement(
            'div',
            { className: 'calendar-select' },
            is_date_view && _react2.default.createElement(_calendar_button2.default, {
                className: 'calendar-select-month-btn',
                is_hidden: !is_date_view,
                label: moment_date.format('MMM'),
                onClick: onSelect.month
            }),
            _react2.default.createElement(
                _calendar_button2.default,
                {
                    className: 'calendar-select-year-btn',
                    onClick: function onClick() {
                        return is_date_view || is_month_view ? onSelect.year() : onSelect.decade();
                    }
                },
                (is_date_view || is_month_view) && moment_date.year(),
                is_year_view && moment_date.clone().subtract(1, 'years').year() + '-' + moment_date.clone().add(10, 'years').year(),
                is_decade_view && moment_date.clone().subtract(10, 'years').year() + '-' + moment_date.clone().add(109, 'years').year()
            )
        ),
        _react2.default.createElement(_calendar_button2.default, {
            className: (0, _classnames2.default)('calendar-next-month-btn', {
                hidden: isPeriodDisabled(moment_date.clone().add(1, 'month'), 'month')
            }),
            is_hidden: !is_date_view,
            onClick: _onClick.nextMonth
        }),
        _react2.default.createElement(_calendar_button2.default, {
            className: (0, _classnames2.default)('calendar-next-year-btn', {
                hidden: isPeriodDisabled(moment_date.clone().add(1, 'month'), 'month')
            }),
            onClick: function onClick() {
                return (is_date_view || is_month_view) && _onClick.nextYear() || is_year_view && _onClick.nextDecade() || is_decade_view && _onClick.nextCentury();
            }
        })
    );
}

exports.default = CalendarHeader;
CalendarHeader.propTypes = {
    calendar_date: _propTypes2.default.string,
    calendar_view: _propTypes2.default.string,
    isPeriodDisabled: _propTypes2.default.func,
    onClick: _propTypes2.default.object,
    onSelect: _propTypes2.default.object
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar_panel.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/calendar_panel.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CalendarPanel;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _panels = __webpack_require__(/*! ./panels */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalendarPanel(props) {
    var calendar_panel = {
        date: _react2.default.createElement(_panels.CalendarDays, props),
        month: _react2.default.createElement(_panels.CalendarMonths, props),
        year: _react2.default.createElement(_panels.CalendarYears, props),
        decade: _react2.default.createElement(_panels.CalendarDecades, props)
    };

    return _react2.default.createElement(
        'div',
        { className: 'calendar-panel' },
        calendar_panel[props.calendar_view]
    );
}

CalendarPanel.propTypes = {
    calendar_view: _propTypes2.default.string
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/index.js":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _calendar = __webpack_require__(/*! ./calendar.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/calendar.jsx");

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _calendar2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_days.jsx":
/*!****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_days.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalendarDays = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _string_util = __webpack_require__(/*! ../../../../../../_common/string_util */ "./src/javascript/_common/string_util.js");

var _types = __webpack_require__(/*! ./types */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/types.js");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDays = function getDays(_ref) {
    var calendar_date = _ref.calendar_date,
        date_format = _ref.date_format,
        max_date = _ref.max_date,
        min_date = _ref.min_date,
        start_date = _ref.start_date,
        _onClick = _ref.onClick,
        selected_date = _ref.selected_date;

    var dates = [];
    var days = [];
    var moment_today = (0, _moment2.default)().utc().startOf('day');
    var moment_cur_date = _moment2.default.utc(calendar_date);
    var num_of_days = moment_cur_date.daysInMonth() + 1;
    var moment_month_start = moment_cur_date.clone().startOf('month');
    var moment_month_end = moment_cur_date.clone().endOf('month');
    var first_day = moment_month_start.day();
    var last_day = moment_month_end.day();
    var moment_min_date = _moment2.default.utc(min_date);
    var moment_max_date = _moment2.default.utc(max_date);
    var moment_selected = _moment2.default.utc(selected_date);

    for (var i = first_day; i > 0; i--) {
        dates.push(moment_month_start.clone().subtract(i, 'day').format(date_format));
    }
    for (var idx = 1; idx < num_of_days; idx += 1) {
        dates.push(moment_cur_date.clone().format(date_format.replace('DD', (0, _string_util.padLeft)(idx, 2, '0'))));
    }
    for (var _i = 1; _i <= 6 - last_day; _i++) {
        dates.push(moment_month_end.clone().add(_i, 'day').format(date_format));
    }

    var moment_start_date = _moment2.default.unix(start_date).utc().startOf('day');
    dates.map(function (date) {
        var moment_date = _moment2.default.utc(date).startOf('day');
        var is_active = selected_date && moment_date.isSame(moment_selected);
        var is_today = moment_date.isSame(moment_today, 'day');
        var is_disabled = moment_date.isBefore(moment_min_date) || moment_date.isAfter(moment_max_date) ||
        // for forward starting accounts, only show same day as start date and the day after
        start_date && (moment_date.isBefore(moment_start_date) || moment_date.isAfter(moment_start_date.clone().add(1, 'day')));

        days.push(_react2.default.createElement(
            'span',
            {
                key: date,
                className: (0, _classnames2.default)('calendar-date', {
                    active: is_active && !is_disabled,
                    today: is_today,
                    disabled: is_disabled
                }),
                onClick: function onClick(e) {
                    _onClick.date(e, is_disabled);
                },
                'data-date': date
            },
            moment_date.date()
        ));
    });

    return days;
};

var week_headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

var CalendarDays = exports.CalendarDays = function CalendarDays(props) {
    var days = getDays(props).map(function (day) {
        return day;
    });

    return _react2.default.createElement(
        'div',
        { className: 'calendar-date-panel' },
        week_headers.map(function (item, idx) {
            return _react2.default.createElement(
                'span',
                { key: idx, className: 'calendar-date-header' },
                item
            );
        }),
        days
    );
};

CalendarDays.propTypes = _extends({}, _types2.default);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_decades.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_decades.jsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalendarDecades = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__(/*! ./types */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/types.js");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarDecades = exports.CalendarDecades = function CalendarDecades(_ref) {
    var calendar_date = _ref.calendar_date,
        isPeriodDisabled = _ref.isPeriodDisabled,
        onClick = _ref.onClick,
        selected_date = _ref.selected_date;

    var selected_year = _moment2.default.utc(selected_date).year();
    var moment_date = _moment2.default.utc(calendar_date);

    var decades = [];
    var min_year = moment_date.year() - 10;
    for (var i = 0; i < 12; i++) {
        var max_year = min_year + 9;
        var range = min_year + '-' + max_year;
        decades.push(range);
        min_year = max_year + 1;
    }

    return _react2.default.createElement(
        'div',
        { className: 'calendar-decade-panel' },
        decades.map(function (range, idx) {
            var _range$split = range.split('-'),
                _range$split2 = _slicedToArray(_range$split, 2),
                start_year = _range$split2[0],
                end_year = _range$split2[1];

            return _react2.default.createElement(
                'span',
                {
                    key: idx,
                    className: (0, _classnames2.default)('calendar-decade', {
                        disabled: isPeriodDisabled(moment_date.year(start_year), 'year') && isPeriodDisabled(moment_date.year(end_year), 'year'),
                        active: start_year === selected_year
                    }),
                    onClick: onClick.decade,
                    'data-decade': range
                },
                range
            );
        })
    );
};

CalendarDecades.propTypes = _extends({}, _types2.default);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_months.jsx":
/*!******************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_months.jsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalendarMonths = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _types = __webpack_require__(/*! ./types */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/types.js");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMonthHeaders = function getMonthHeaders() {
    return {
        Jan: (0, _localize.localize)('Jan'),
        Feb: (0, _localize.localize)('Feb'),
        Mar: (0, _localize.localize)('Mar'),
        Apr: (0, _localize.localize)('Apr'),
        May: (0, _localize.localize)('May'),
        Jun: (0, _localize.localize)('Jun'),
        Jul: (0, _localize.localize)('Jul'),
        Aug: (0, _localize.localize)('Aug'),
        Sep: (0, _localize.localize)('Sep'),
        Oct: (0, _localize.localize)('Oct'),
        Nov: (0, _localize.localize)('Nov'),
        Dec: (0, _localize.localize)('Dec')
    };
};

var CalendarMonths = exports.CalendarMonths = function CalendarMonths(_ref) {
    var calendar_date = _ref.calendar_date,
        isPeriodDisabled = _ref.isPeriodDisabled,
        onClick = _ref.onClick,
        selected_date = _ref.selected_date;

    var moment_date = _moment2.default.utc(calendar_date);
    var selected_month = _moment2.default.utc(selected_date).month();
    var month_headers = getMonthHeaders();

    return _react2.default.createElement(
        'div',
        { className: 'calendar-month-panel' },
        Object.keys(month_headers).map(function (month, idx) {
            return _react2.default.createElement(
                'span',
                {
                    key: idx,
                    className: (0, _classnames2.default)('calendar-month', {
                        active: idx === selected_month,
                        disabled: isPeriodDisabled(moment_date.month(month), 'month')
                    }),
                    onClick: onClick.month,
                    'data-month': idx
                },
                month_headers[month]
            );
        })
    );
};

CalendarMonths.propTypes = _extends({}, _types2.default);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_years.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_years.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalendarYears = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__(/*! ./types */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/types.js");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarYears = exports.CalendarYears = function CalendarYears(_ref) {
    var calendar_date = _ref.calendar_date,
        isPeriodDisabled = _ref.isPeriodDisabled,
        onClick = _ref.onClick,
        selected_date = _ref.selected_date;

    var selected_year = _moment2.default.utc(selected_date).year();
    var moment_date = _moment2.default.utc(calendar_date);
    var current_year = moment_date.year();
    var years = [];
    for (var year = current_year - 1; year < current_year + 11; year++) {
        years.push(year);
    }
    return _react2.default.createElement(
        'div',
        { className: 'calendar-year-panel' },
        years.map(function (year, idx) {
            return _react2.default.createElement(
                'span',
                {
                    key: idx,
                    className: (0, _classnames2.default)('calendar-year', {
                        disabled: isPeriodDisabled(moment_date.year(year), 'year'),
                        active: year === selected_year
                    }),
                    onClick: onClick.year,
                    'data-year': year
                },
                year
            );
        })
    );
};

CalendarYears.propTypes = _extends({}, _types2.default);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/index.js":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/panels/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calendar_days = __webpack_require__(/*! ./calendar_days.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_days.jsx");

Object.keys(_calendar_days).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calendar_days[key];
    }
  });
});

var _calendar_months = __webpack_require__(/*! ./calendar_months.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_months.jsx");

Object.keys(_calendar_months).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calendar_months[key];
    }
  });
});

var _calendar_years = __webpack_require__(/*! ./calendar_years.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_years.jsx");

Object.keys(_calendar_years).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calendar_years[key];
    }
  });
});

var _calendar_decades = __webpack_require__(/*! ./calendar_decades.jsx */ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/calendar_decades.jsx");

Object.keys(_calendar_decades).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calendar_decades[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Calendar/panels/types.js":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Calendar/panels/types.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalendarPanelTypes = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarPanelTypes = exports.CalendarPanelTypes = {
    calendar_date: _propTypes2.default.string,
    calendar_view: _propTypes2.default.string,
    date_format: _propTypes2.default.string,
    isPeriodDisabled: _propTypes2.default.func,
    max_date: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    min_date: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    onClick: _propTypes2.default.object,
    selected_date: _propTypes2.default.string
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer.jsx":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/drawer.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Drawer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _connect = __webpack_require__(/*! ../../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _drawer_header = __webpack_require__(/*! ./drawer_header.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_header.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_React$Component) {
    _inherits(Drawer, _React$Component);

    function Drawer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Drawer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            is_this_drawer_on: false
        }, _this.setRef = function (node) {
            _this.ref = node;
        }, _this.hide = function () {
            _this.scrollToggle(false);
            _this.props.hideDrawers();
        }, _this.handleClickOutside = function (event) {
            if (_this.state.is_this_drawer_on) {
                if (_this.ref && !_this.ref.contains(event.target)) {
                    _this.hide();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Drawer, [{
        key: 'scrollToggle',
        value: function scrollToggle(state) {
            this.is_open = state;
            document.body.classList.toggle('no-scroll', this.is_open);
        }
    }, {
        key: 'render',
        value: function render() {
            var is_this_drawer_on = this.state.is_this_drawer_on;
            var _props = this.props,
                alignment = _props.alignment,
                closeBtn = _props.closeBtn,
                children = _props.children;


            var drawer_bg_class = (0, _classnames2.default)('drawer-bg', {
                'show': is_this_drawer_on
            });
            var drawer_class = (0, _classnames2.default)('drawer', alignment);

            return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                {
                    'in': is_this_drawer_on,
                    timeout: 150,
                    classNames: 'drawer-container',
                    unmountOnExit: true
                },
                _react2.default.createElement(
                    'aside',
                    { className: 'drawer-container' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: drawer_bg_class,
                            onClick: this.handleClickOutside
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                ref: this.setRef,
                                className: drawer_class
                            },
                            _react2.default.createElement(_drawer_header.DrawerHeader, {
                                alignment: alignment,
                                closeBtn: closeBtn
                            }),
                            children
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
            if (props.alignment === 'left') {
                state.is_this_drawer_on = props.is_main_drawer_on;
            } else if (props.alignment === 'right') {
                state.is_this_drawer_on = props.is_notifications_drawer_on;
            }

            return state;
        }
    }]);

    return Drawer;
}(_react2.default.Component);

Drawer.propTypes = {
    alignment: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    closeBtn: _propTypes2.default.func,
    footer: _propTypes2.default.func,
    hideDrawers: _propTypes2.default.func,
    icon_class: _propTypes2.default.string,
    icon_link: _propTypes2.default.string,
    is_main_drawer_on: _propTypes2.default.bool,
    is_notifications_drawer_on: _propTypes2.default.bool
};

var drawer_component = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        is_main_drawer_on: ui.is_main_drawer_on,
        is_notifications_drawer_on: ui.is_notifications_drawer_on,
        hideDrawers: ui.hideDrawers
    };
})(Drawer);

exports.Drawer = drawer_component;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_header.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/drawer_header.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawerHeader = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerHeader = exports.DrawerHeader = function DrawerHeader(_ref) {
    var alignment = _ref.alignment,
        closeBtn = _ref.closeBtn;

    var drawer_header_class = (0, _classnames2.default)('drawer-header', alignment);
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        alignment && alignment === 'right' ? _react2.default.createElement(
            'div',
            { className: drawer_header_class },
            _react2.default.createElement(
                'div',
                { className: 'icons btn-close', onClick: closeBtn },
                _react2.default.createElement(_Common.IconClose, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'notifications-header' },
                _react2.default.createElement(
                    'h4',
                    null,
                    (0, _localize.localize)('all notifications')
                )
            )
        ) : _react2.default.createElement(
            'div',
            { className: drawer_header_class },
            _react2.default.createElement(
                'div',
                { className: 'icons btn-close', onClick: closeBtn },
                _react2.default.createElement(_Common.IconClose, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'icons brand-logo' },
                _react2.default.createElement('div', { className: 'img' })
            )
        )
    );
};

DrawerHeader.propTypes = {
    alignment: _propTypes2.default.string,
    closeBtn: _propTypes2.default.func
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_item.jsx":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/drawer_item.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawerItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _Routes = __webpack_require__(/*! ../../Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerItem = function (_React$Component) {
    _inherits(DrawerItem, _React$Component);

    function DrawerItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DrawerItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrawerItem.__proto__ || Object.getPrototypeOf(DrawerItem)).call.apply(_ref, [this].concat(args))), _this), _this.drawerItemClicked = function () {
            _this.props.hideDrawers();
            if (_this.props.collapseItems) {
                _this.props.collapseItems();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DrawerItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                link_to = _props.link_to,
                text = _props.text,
                icon = _props.icon,
                custom_action = _props.custom_action;


            return _react2.default.createElement(
                'div',
                { className: 'drawer-item', onClick: this.drawerItemClicked },
                custom_action ? _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', onClick: custom_action },
                    _react2.default.createElement(
                        'span',
                        null,
                        icon,
                        text
                    )
                ) : _react2.default.createElement(
                    _Routes.BinaryLink,
                    { to: link_to },
                    _react2.default.createElement(
                        'span',
                        null,
                        icon,
                        text
                    )
                )
            );
        }
    }]);

    return DrawerItem;
}(_react2.default.Component);

DrawerItem.propTypes = {
    collapseItems: _propTypes2.default.func,
    custom_action: _propTypes2.default.func,
    hideDrawers: _propTypes2.default.func,
    href: _propTypes2.default.string,
    icon: _propTypes2.default.node,
    link_to: _propTypes2.default.string,
    text: _propTypes2.default.string
};

var drawer_item_component = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        hideDrawers: ui.hideDrawers
    };
})(DrawerItem);

exports.DrawerItem = drawer_item_component;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_items.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/drawer_items.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawerItems = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _drawer_item = __webpack_require__(/*! ./drawer_item.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerItems = function (_React$Component) {
    _inherits(DrawerItems, _React$Component);

    function DrawerItems() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DrawerItems);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrawerItems.__proto__ || Object.getPrototypeOf(DrawerItems)).call.apply(_ref, [this].concat(args))), _this), _this.state = { is_collapsed: false }, _this.collapseItems = function () {
            _this.setState({
                is_collapsed: !_this.state.is_collapsed
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DrawerItems, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var is_collapsed = this.state.is_collapsed;
            var _props = this.props,
                text = _props.text,
                items = _props.items;


            var list_is_collapsed = {
                visibility: is_collapsed ? 'visible' : 'hidden'
            };
            var parent_item_class = (0, _classnames2.default)('parent-item', {
                'show': is_collapsed
            });
            var drawer_items_class = (0, _classnames2.default)('drawer-items', {
                'show': is_collapsed
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'drawer-item', onClick: this.collapseItems },
                    _react2.default.createElement(
                        'span',
                        { className: parent_item_class },
                        text
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: drawer_items_class,
                        style: list_is_collapsed
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'items-group' },
                        items.map(function (item, idx) {
                            return _react2.default.createElement(_drawer_item.DrawerItem, _extends({ key: idx }, item, { collapseItems: _this2.collapseItems }));
                        })
                    )
                )
            );
        }
    }]);

    return DrawerItems;
}(_react2.default.Component);

DrawerItems.propTypes = {
    items: _propTypes2.default.array,
    text: _propTypes2.default.string
};

exports.DrawerItems = DrawerItems;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_toggle.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/drawer_toggle.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawerToggle = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _toggle_button = __webpack_require__(/*! ../toggle_button.jsx */ "./src/javascript/app_2/App/Components/Elements/toggle_button.jsx");

var _toggle_button2 = _interopRequireDefault(_toggle_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerToggle = function DrawerToggle(_ref) {
    var text = _ref.text,
        to_toggle = _ref.to_toggle,
        toggle = _ref.toggle;
    return _react2.default.createElement(
        'div',
        { className: 'drawer-item__toggle', onClick: toggle },
        _react2.default.createElement(
            'span',
            null,
            text
        ),
        _react2.default.createElement(_toggle_button2.default, {
            toggled: to_toggle
        })
    );
};

DrawerToggle.propTypes = {
    text: _propTypes2.default.string,
    to_toggle: _propTypes2.default.bool,
    toggle: _propTypes2.default.func
};

exports.DrawerToggle = DrawerToggle;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/index.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drawer_header = __webpack_require__(/*! ./drawer_header.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_header.jsx");

Object.keys(_drawer_header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drawer_header[key];
    }
  });
});

var _drawer_item = __webpack_require__(/*! ./drawer_item.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_item.jsx");

Object.keys(_drawer_item).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drawer_item[key];
    }
  });
});

var _drawer_items = __webpack_require__(/*! ./drawer_items.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_items.jsx");

Object.keys(_drawer_items).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drawer_items[key];
    }
  });
});

var _drawer = __webpack_require__(/*! ./drawer.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer.jsx");

Object.keys(_drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drawer[key];
    }
  });
});

var _drawer_toggle = __webpack_require__(/*! ./drawer_toggle.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer_toggle.jsx");

Object.keys(_drawer_toggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drawer_toggle[key];
    }
  });
});

var _toggle_drawer = __webpack_require__(/*! ./toggle_drawer.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/toggle_drawer.jsx");

Object.keys(_toggle_drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle_drawer[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Drawer/toggle_drawer.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Drawer/toggle_drawer.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleDrawer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _drawer = __webpack_require__(/*! ./drawer.jsx */ "./src/javascript/app_2/App/Components/Elements/Drawer/drawer.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleDrawer = function (_React$Component) {
    _inherits(ToggleDrawer, _React$Component);

    function ToggleDrawer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ToggleDrawer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToggleDrawer.__proto__ || Object.getPrototypeOf(ToggleDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.showDrawer = function () {
            var alignment = _this.props.alignment;

            if (alignment === 'left') {
                _this.props.showMainDrawer();
            } else if (alignment === 'right') {
                _this.props.showNotificationsDrawer();
            }
        }, _this.closeDrawer = function () {
            _this.props.hideDrawers();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ToggleDrawer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                icon_class = _props.icon_class,
                icon = _props.icon,
                alignment = _props.alignment,
                children = _props.children;


            var toggle_class = (0, _classnames2.default)('navbar-icons', icon_class);

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: toggle_class, onClick: this.showDrawer },
                    icon
                ),
                _react2.default.createElement(
                    _drawer.Drawer,
                    {
                        alignment: alignment,
                        closeBtn: this.closeDrawer
                    },
                    children
                )
            );
        }
    }]);

    return ToggleDrawer;
}(_react2.default.Component);

ToggleDrawer.propTypes = {
    alignment: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    footer: _propTypes2.default.func,
    hideDrawers: _propTypes2.default.func,
    icon: _propTypes2.default.shape({
        className: _propTypes2.default.string
    }),
    icon_class: _propTypes2.default.string,
    showMainDrawer: _propTypes2.default.func,
    showNotificationsDrawer: _propTypes2.default.func
};

var drawer_component = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        showMainDrawer: ui.showMainDrawer,
        showNotificationsDrawer: ui.showNotificationsDrawer,
        hideDrawers: ui.hideDrawers
    };
})(ToggleDrawer);

exports.ToggleDrawer = drawer_component;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Errors/error_boundary.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Errors/error_boundary.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
    _inherits(ErrorBoundary, _React$Component);

    function ErrorBoundary(props) {
        _classCallCheck(this, ErrorBoundary);

        var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

        _this.componentDidCatch = function (error, info) {
            _this.setState({
                hasError: true,
                error: error,
                info: info
            });
        };

        _this.render = function () {
            return _this.state.hasError ? _react2.default.createElement(
                'div',
                { className: 'error-box' },
                _this.state.error.message
            ) : _this.props.children;
        };

        _this.state = { hasError: false };
        return _this;
    }

    return ErrorBoundary;
}(_react2.default.Component);

exports.default = ErrorBoundary;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Errors/error_component.jsx":
/*!*********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Errors/error_component.jsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _icon_error = __webpack_require__(/*! ../../../../Assets/Common/icon_error.jsx */ "./src/javascript/app_2/Assets/Common/icon_error.jsx");

var _icon_error2 = _interopRequireDefault(_icon_error);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _localize2 = __webpack_require__(/*! ../localize.jsx */ "./src/javascript/app_2/App/Components/Elements/localize.jsx");

var _localize3 = _interopRequireDefault(_localize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorComponent = function ErrorComponent(_ref) {
    var type = _ref.type,
        message = _ref.message;

    var msg = '';
    if ((typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object') {
        msg = _react2.default.createElement(_localize3.default, {
            str: message.str,
            replacers: message.replacers
        });
    } else {
        msg = message;
    }
    return _react2.default.createElement(
        'div',
        { className: 'error-container' },
        _react2.default.createElement(_icon_error2.default, { type: type }),
        _react2.default.createElement(
            'p',
            null,
            msg || (0, _localize.localize)('Sorry, an error occured while processing your request.')
        )
    );
};

ErrorComponent.propTypes = {
    message: _propTypes2.default.oneOfType([_propTypes2.default.shape({
        replacers: _propTypes2.default.object,
        str: _propTypes2.default.string
    }), _propTypes2.default.string]),
    type: _propTypes2.default.string
};

exports.default = ErrorComponent;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Errors/index.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Errors/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _error_component = __webpack_require__(/*! ./error_component.jsx */ "./src/javascript/app_2/App/Components/Elements/Errors/error_component.jsx");

var _error_component2 = _interopRequireDefault(_error_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error_component2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/FullPageModal/full_page_modal.jsx":
/*!****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/FullPageModal/full_page_modal.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullPageModal = function FullPageModal(_ref) {
    var cancel_button_text = _ref.cancel_button_text,
        children = _ref.children,
        confirm_button_text = _ref.confirm_button_text,
        onConfirm = _ref.onConfirm,
        onCancel = _ref.onCancel,
        is_visible = _ref.is_visible,
        title = _ref.title;

    if (is_visible) {
        return _react2.default.createElement(
            'div',
            { className: 'full-page-modal' },
            _react2.default.createElement(
                'div',
                { className: 'modal-dialog' },
                _react2.default.createElement(
                    'h1',
                    null,
                    title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    children
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-footer' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'btn flat effect primary',
                            onClick: onCancel
                        },
                        _react2.default.createElement(
                            'span',
                            null,
                            cancel_button_text
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'btn flat effect primary',
                            onClick: onConfirm
                        },
                        _react2.default.createElement(
                            'span',
                            null,
                            confirm_button_text
                        )
                    )
                )
            )
        );
    }

    return _react2.default.createElement(_react2.default.Fragment, null);
};

FullPageModal.propTypes = {
    cancel_button_text: _propTypes2.default.string,
    confirm_button_text: _propTypes2.default.string,
    is_visible: _propTypes2.default.bool,
    onCancel: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func,
    title: _propTypes2.default.string
};

exports.default = FullPageModal;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/InkBar/index.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/InkBar/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inkbar = __webpack_require__(/*! ./inkbar.jsx */ "./src/javascript/app_2/App/Components/Elements/InkBar/inkbar.jsx");

Object.keys(_inkbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inkbar[key];
    }
  });
});

var _inkbar_div = __webpack_require__(/*! ./inkbar_div.jsx */ "./src/javascript/app_2/App/Components/Elements/InkBar/inkbar_div.jsx");

var _inkbar_div2 = _interopRequireDefault(_inkbar_div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inkbar_div2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/InkBar/inkbar.jsx":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/InkBar/inkbar.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InkBar = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InkBar = function InkBar(_ref) {
    var left = _ref.left,
        width = _ref.width;

    var inkbar_style = {
        left: left,
        width: width
    };

    return _react2.default.createElement('span', { style: inkbar_style, className: 'inkbar' });
};

InkBar.propTypes = {
    left: _propTypes2.default.number,
    width: _propTypes2.default.number
};

exports.InkBar = InkBar;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/InkBar/inkbar_div.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/InkBar/inkbar_div.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _inkbar = __webpack_require__(/*! ./inkbar.jsx */ "./src/javascript/app_2/App/Components/Elements/InkBar/inkbar.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InkBarDiv = function (_React$Component) {
    _inherits(InkBarDiv, _React$Component);

    function InkBarDiv(props) {
        _classCallCheck(this, InkBarDiv);

        var _this = _possibleConstructorReturn(this, (InkBarDiv.__proto__ || Object.getPrototypeOf(InkBarDiv)).call(this, props));

        _this.onClick = function (e) {
            if (!e.target) return;
            _this.updateInkbarPosition(e.target.closest('a'));
        };

        _this.clearInkBar = function () {
            _this.setState({
                left: 0,
                width: 0
            });
        };

        _this.updateInkbarPosition = function (el) {
            if (!el) return;
            var left = el.offsetLeft,
                width = el.offsetWidth;

            if (_this.state.width !== width) {
                _this.setState({ width: width });
            }
            if (_this.state.left !== left) {
                _this.setState({ left: left });
            }
        };

        window.addEventListener('resize', _this.updateInkbarPosition);
        _this.state = {
            left: 0,
            width: 0
        };
        return _this;
    }

    _createClass(InkBarDiv, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.node) return;
            this.updateInkbarPosition(this.node.querySelector('a[class="active"]'));
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var active_el = this.node.querySelector('a[class="active"]');
            if (active_el) {
                this.updateInkbarPosition(active_el);
            } else if (this.state.left !== 0 || this.state.width !== 0) {
                this.clearInkBar(); // clear InkBar when active element doesn't exist
            }
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            window.removeEventListener('resize', this.updateInkbarPosition);
            this.clearInkBar();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                other_props = _objectWithoutProperties(_props, ['className']);

            var props = _extends({
                className: (0, _classnames2.default)('has-inkbar', className)
            }, other_props);

            return _react2.default.createElement(
                'div',
                _extends({ ref: function ref(node) {
                        return _this2.node = node;
                    } }, props),
                _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, {
                        onClick: _this2.onClick
                    });
                }),
                _react2.default.createElement(_inkbar.InkBar, { left: this.state.left, width: this.state.width })
            );
        }
    }]);

    return InkBarDiv;
}(_react2.default.Component);

InkBarDiv.propTypes = {
    children: _propTypes2.default.array,
    className: _propTypes2.default.string
};

exports.default = InkBarDiv;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Notifications/index.js":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Notifications/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(/*! ./notifications.jsx */ "./src/javascript/app_2/App/Components/Elements/Notifications/notifications.jsx");

Object.keys(_notifications).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notifications[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Notifications/notifications.jsx":
/*!**************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Notifications/notifications.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Notifications = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _NavBar = __webpack_require__(/*! ../../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Drawer = __webpack_require__(/*! ../Drawer */ "./src/javascript/app_2/App/Components/Elements/Drawer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notifications = function Notifications(_ref) {
    var list = _ref.list;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        list && list.length ? list.map(function (item, idx) {
            return _react2.default.createElement(
                _react2.default.Fragment,
                { key: idx },
                _react2.default.createElement(_Drawer.DrawerItem, { text: item[idx] })
            );
        }) : _react2.default.createElement(
            'div',
            { className: 'no-notifications-container' },
            _react2.default.createElement(
                'div',
                { className: 'notification-message' },
                _react2.default.createElement(
                    'div',
                    { className: 'bell-icon' },
                    _react2.default.createElement(_NavBar.IconBell, null)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h4',
                        null,
                        (0, _localize.localize)('No Notifications')
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'no-notifications-message' },
                        (0, _localize.localize)('You have yet to receive any notifications')
                    )
                )
            )
        )
    );
};

Notifications.propTypes = {
    'list': _propTypes2.default.object
};

exports.Notifications = Notifications;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/PopConfirm/index.js":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/PopConfirm/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = __webpack_require__(/*! ./popconfirm.jsx */ "./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm.jsx");

Object.keys(_popconfirm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _popconfirm[key];
    }
  });
});

var _popconfirm_element = __webpack_require__(/*! ./popconfirm_element.jsx */ "./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm_element.jsx");

Object.keys(_popconfirm_element).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _popconfirm_element[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopConfirm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popconfirm_element = __webpack_require__(/*! ./popconfirm_element.jsx */ "./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm_element.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopConfirm = function (_React$Component) {
    _inherits(PopConfirm, _React$Component);

    function PopConfirm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PopConfirm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopConfirm.__proto__ || Object.getPrototypeOf(PopConfirm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            is_open: false
        }, _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target) && _this.state.is_open) {
                _this.setState({ is_open: false });
            }
        }, _this.handleClose = function () {
            _this.setState({ is_open: false });
        }, _this.handleOpen = function (event) {
            if (!_this.wrapper_ref.contains(event.target)) {
                _this.setState({ is_open: true });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PopConfirm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var popconfirm_element = _react2.default.createElement(_popconfirm_element.PopConfirmElement, {
                wrapperRef: this.setWrapperRef,
                alignment: this.props.alignment,
                cancel_text: this.props.cancel_text,
                confirm_text: this.props.confirm_text,
                is_visible: this.state.is_open,
                message: this.props.message,
                onConfirm: this.props.children.props.onClick,
                onClose: this.handleClose
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, {
                        onClick: _this2.handleOpen
                    }, popconfirm_element);
                })
            );
        }
    }]);

    return PopConfirm;
}(_react2.default.Component);

PopConfirm.propTypes = {
    alignment: _propTypes2.default.string,
    cancel_text: _propTypes2.default.string,
    children: _propTypes2.default.object,
    confirm_text: _propTypes2.default.string,
    message: _propTypes2.default.string
};

exports.PopConfirm = PopConfirm;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm_element.jsx":
/*!****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/PopConfirm/popconfirm_element.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopConfirmElement = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopConfirmElement = function PopConfirmElement(_ref) {
    var alignment = _ref.alignment,
        cancel_text = _ref.cancel_text,
        confirm_text = _ref.confirm_text,
        is_visible = _ref.is_visible,
        message = _ref.message,
        onClose = _ref.onClose,
        onConfirm = _ref.onConfirm,
        wrapperRef = _ref.wrapperRef;

    var popconfirm_class = (0, _classnames2.default)('popconfirm', alignment, {
        'open': is_visible
    });
    return _react2.default.createElement(
        'div',
        { ref: wrapperRef, className: popconfirm_class },
        _react2.default.createElement(
            'div',
            { className: 'popconfirm-title' },
            _react2.default.createElement(_Common.IconExclamation, null),
            _react2.default.createElement(
                'h4',
                null,
                message
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'popconfirm-buttons' },
            _react2.default.createElement(
                'div',
                {
                    className: 'btn flat effect',
                    onClick: onClose
                },
                _react2.default.createElement(
                    'span',
                    null,
                    cancel_text
                )
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'btn flat effect',
                    onClick: onConfirm
                },
                _react2.default.createElement(
                    'span',
                    null,
                    confirm_text
                )
            )
        )
    );
};

PopConfirmElement.propTypes = {
    alignment: _propTypes2.default.string,
    cancel_text: _propTypes2.default.string,
    confirm_text: _propTypes2.default.string,
    is_visible: _propTypes2.default.bool,
    message: _propTypes2.default.string,
    onClose: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func,
    wrapperRef: _propTypes2.default.func
};

exports.PopConfirmElement = PopConfirmElement;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/index.js":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _portfolio_drawer = __webpack_require__(/*! ./portfolio_drawer.jsx */ "./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/portfolio_drawer.jsx");

var _portfolio_drawer2 = _interopRequireDefault(_portfolio_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _portfolio_drawer2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/portfolio_drawer.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/portfolio_drawer.jsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _simplebarReact = __webpack_require__(/*! simplebar-react */ "./node_modules/simplebar-react/dist/simplebar-react.esm.js");

var _simplebarReact2 = _interopRequireDefault(_simplebarReact);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _empty_portfolio_message = __webpack_require__(/*! ../../../../Modules/Portfolio/Components/empty_portfolio_message.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/empty_portfolio_message.jsx");

var _empty_portfolio_message2 = _interopRequireDefault(_empty_portfolio_message);

var _connect = __webpack_require__(/*! ../../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _portfolio_drawer_card = __webpack_require__(/*! ./portfolio_drawer_card.jsx */ "./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/portfolio_drawer_card.jsx");

var _portfolio_drawer_card2 = _interopRequireDefault(_portfolio_drawer_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortfolioDrawer = function (_React$Component) {
    _inherits(PortfolioDrawer, _React$Component);

    function PortfolioDrawer() {
        _classCallCheck(this, PortfolioDrawer);

        return _possibleConstructorReturn(this, (PortfolioDrawer.__proto__ || Object.getPrototypeOf(PortfolioDrawer)).apply(this, arguments));
    }

    _createClass(PortfolioDrawer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                active_positions = _props.active_positions,
                error = _props.error,
                currency = _props.currency,
                is_empty = _props.is_empty,
                is_portfolio_drawer_on = _props.is_portfolio_drawer_on,
                toggleDrawer = _props.toggleDrawer;


            var body_content = void 0;

            if (error) {
                body_content = _react2.default.createElement(
                    'p',
                    null,
                    error
                );
            } else if (is_empty) {
                body_content = _react2.default.createElement(_empty_portfolio_message2.default, null);
            } else {
                body_content = active_positions.map(function (portfolio_position) {
                    return _react2.default.createElement(_portfolio_drawer_card2.default, _extends({
                        key: portfolio_position.id,
                        currency: currency
                    }, portfolio_position));
                });
            }

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('portfolio-drawer', { 'portfolio-drawer--open': is_portfolio_drawer_on }) },
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-drawer__header' },
                    _react2.default.createElement('span', { className: 'portfolio-drawer__icon-main ic-portfolio' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-drawer__title' },
                        (0, _localize.localize)('Portfolio Quick Menu')
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'portfolio-drawer__icon-close',
                            onClick: toggleDrawer
                        },
                        _react2.default.createElement(_Common.IconClose, null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-drawer__body' },
                    _react2.default.createElement(
                        _simplebarReact2.default,
                        { style: { height: '100%' } },
                        body_content
                    )
                )
            );
        }
    }]);

    return PortfolioDrawer;
}(_react2.default.Component);

PortfolioDrawer.propTypes = {
    active_positions: _mobxReact.PropTypes.arrayOrObservableArray,
    children: _propTypes2.default.any,
    currency: _propTypes2.default.string,
    error: _propTypes2.default.string,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    is_portfolio_drawer_on: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    toggleDrawer: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        client = _ref.client,
        ui = _ref.ui;
    return {
        active_positions: modules.portfolio.active_positions,
        is_loading: modules.portfolio.is_loading,
        error: modules.portfolio.error,
        is_empty: modules.portfolio.is_empty,
        onMount: modules.portfolio.onMount,
        onUnmount: modules.portfolio.onUnmount,
        currency: client.currency,
        is_portfolio_drawer_on: ui.is_portfolio_drawer_on,
        toggleDrawer: ui.togglePortfolioDrawer
    };
})(PortfolioDrawer);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/portfolio_drawer_card.jsx":
/*!************************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/portfolio_drawer_card.jsx ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _contract_type_cell = __webpack_require__(/*! ../../../../Modules/Portfolio/Components/contract_type_cell.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/contract_type_cell.jsx");

var _contract_type_cell2 = _interopRequireDefault(_contract_type_cell);

var _money = __webpack_require__(/*! ../money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _binary_link = __webpack_require__(/*! ../../Routes/binary_link.jsx */ "./src/javascript/app_2/App/Components/Routes/binary_link.jsx");

var _binary_link2 = _interopRequireDefault(_binary_link);

var _helpers = __webpack_require__(/*! ../../Routes/helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

var _remaining_time = __webpack_require__(/*! ../../../Containers/remaining_time.jsx */ "./src/javascript/app_2/App/Containers/remaining_time.jsx");

var _remaining_time2 = _interopRequireDefault(_remaining_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortfolioDrawerCard = function PortfolioDrawerCard(_ref) {
    var currency = _ref.currency,
        expiry_time = _ref.expiry_time,
        id = _ref.id,
        indicative = _ref.indicative,
        status = _ref.status,
        type = _ref.type,
        underlying = _ref.underlying;
    return _react2.default.createElement(
        _binary_link2.default,
        { className: 'portfolio-drawer-card', to: (0, _helpers.getContractPath)(id) },
        _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'portfolio-drawer-card__type' },
                _react2.default.createElement(_contract_type_cell2.default, { type: type })
            ),
            _react2.default.createElement(
                'div',
                { className: 'portfolio-drawer-card__indicative portfolio-drawer-card__indicative--' + status },
                _react2.default.createElement(_money2.default, { amount: indicative, currency: currency })
            ),
            _react2.default.createElement(
                'span',
                { className: 'portfolio-drawer-card__symbol' },
                underlying
            ),
            _react2.default.createElement(
                'span',
                { className: 'portfolio-drawer-card__remaining-time' },
                _react2.default.createElement(_remaining_time2.default, { end_time: expiry_time })
            )
        )
    );
};

PortfolioDrawerCard.propTypes = {
    currency: _propTypes2.default.string,
    expiry_time: _propTypes2.default.PropTypes.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    id: _propTypes2.default.number,
    indicative: _propTypes2.default.number,
    status: _propTypes2.default.string,
    type: _propTypes2.default.string,
    underlying: _propTypes2.default.string
};

exports.default = PortfolioDrawerCard;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/language_dialog.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/SettingsDialog/language_dialog.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _Language = __webpack_require__(/*! ../../../../Utils/Language */ "./src/javascript/app_2/Utils/Language/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LanguageDialog = function LanguageDialog(_ref) {
    var hide = _ref.hide,
        is_visible = _ref.is_visible,
        is_settings_on = _ref.is_settings_on;

    var language_dialog_class = (0, _classnames2.default)('language-dialog-container', {
        'show': is_visible && is_settings_on
    });

    return _react2.default.createElement(
        'div',
        { className: language_dialog_class },
        _react2.default.createElement(
            'div',
            { className: 'language-header', onClick: hide },
            _react2.default.createElement(_Common.IconBack, { className: 'arrow-back' }),
            _react2.default.createElement(
                'span',
                null,
                (0, _localize.localize)('language')
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'language-container' },
            Object.keys((0, _Language.getAllowedLanguages)()).map(function (key) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    { key: key },
                    _react2.default.createElement(
                        'div',
                        { className: 'language-row' },
                        _react2.default.createElement(
                            'a',
                            { href: (0, _Language.getURL)(key) },
                            _react2.default.createElement('i', { className: 'flag ic-flag-' + key.replace(/(\s|_)/, '-').toLowerCase() }),
                            _react2.default.createElement(
                                'span',
                                null,
                                (0, _Language.getAllowedLanguages)()[key]
                            )
                        )
                    )
                );
            })
        )
    );
};

LanguageDialog.propTypes = {
    hide: _propTypes2.default.func,
    is_settings_on: _propTypes2.default.bool,
    is_visible: _propTypes2.default.bool
};

exports.default = LanguageDialog;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_control.jsx":
/*!******************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_control.jsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _toggle_button = __webpack_require__(/*! ../toggle_button.jsx */ "./src/javascript/app_2/App/Components/Elements/toggle_button.jsx");

var _toggle_button2 = _interopRequireDefault(_toggle_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsControl = function SettingsControl(_ref) {
    var children = _ref.children,
        name = _ref.name,
        onClick = _ref.onClick,
        style = _ref.style,
        to_toggle = _ref.to_toggle,
        toggle = _ref.toggle;
    return _react2.default.createElement(
        'div',
        { className: 'settings-row', onClick: toggle || onClick },
        _react2.default.createElement(
            'span',
            null,
            name
        ),
        toggle ? _react2.default.createElement(_toggle_button2.default, {
            toggled: to_toggle,
            style: style
        }) : children
    );
};

SettingsControl.propTypes = {
    children: _propTypes2.default.node,
    name: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    style: _propTypes2.default.string,
    to_toggle: _propTypes2.default.bool,
    toggle: _propTypes2.default.func
};

exports.default = SettingsControl;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_dialog.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_dialog.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Tabs = __webpack_require__(/*! ../Tabs */ "./src/javascript/app_2/App/Components/Elements/Tabs/index.js");

var _SettingsDialog = __webpack_require__(/*! ../../../Containers/SettingsDialog */ "./src/javascript/app_2/App/Containers/SettingsDialog/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingsDialog = function (_React$PureComponent) {
    _inherits(SettingsDialog, _React$PureComponent);

    function SettingsDialog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SettingsDialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call.apply(_ref, [this].concat(args))), _this), _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            var footer_settings_btn = !event.target.classList.contains('ic-settings', 'ic-settings active');
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target) && _this.props.is_open && footer_settings_btn) {
                _this.props.toggleDialog();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // TODO - Simplify this


    _createClass(SettingsDialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var settings_dialog_class = (0, _classnames2.default)('settings-dialog', {
                'show': this.props.is_open
            });
            var settings_dialog_container_class = (0, _classnames2.default)('settings-dialog-container', {
                hide: this.props.is_language_dialog_visible
            });
            return _react2.default.createElement(
                'div',
                { ref: this.setWrapperRef, className: settings_dialog_class },
                _react2.default.createElement(
                    'div',
                    { className: settings_dialog_container_class },
                    _react2.default.createElement(
                        'span',
                        { className: 'settings-header' },
                        (0, _localize.localize)('Settings')
                    ),
                    _react2.default.createElement(_Tabs.Tabs, { alignment: 'center', list: SettingsDialog.settings_content })
                ),
                _react2.default.createElement(_SettingsDialog.LanguageSettings, null)
            );
        }
    }], [{
        key: 'settings_content',
        get: function get() {
            return {
                1: { header: (0, _localize.localize)('General'), content: _SettingsDialog.GeneralSettings },
                2: { header: (0, _localize.localize)('Chart'), content: _SettingsDialog.ChartSettings }
            };
        }
    }]);

    return SettingsDialog;
}(_react2.default.PureComponent);

SettingsDialog.propTypes = {
    is_language_dialog_visible: _propTypes2.default.bool,
    is_open: _propTypes2.default.bool,
    toggleDialog: _propTypes2.default.func
};

exports.default = SettingsDialog;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Tabs/index.js":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Tabs/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(/*! ./tabs.jsx */ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs.jsx");

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});

var _tabs_item = __webpack_require__(/*! ./tabs_item.jsx */ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs_item.jsx");

Object.keys(_tabs_item).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs_item[key];
    }
  });
});

var _tabs_wrapper = __webpack_require__(/*! ./tabs_wrapper.jsx */ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs_wrapper.jsx");

Object.keys(_tabs_wrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs_wrapper[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Tabs/tabs.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tabs_wrapper = __webpack_require__(/*! ./tabs_wrapper.jsx */ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs_wrapper.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$PureComponent) {
    _inherits(Tabs, _React$PureComponent);

    function Tabs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            active_tab_index: '1'
        }, _this.setActiveTab = function (index) {
            _this.setState({ active_tab_index: index });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tabs, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var TabContents = this.props.list[this.state.active_tab_index].content;
            var tab_container_class = (0, _classnames2.default)('tab-container', this.props.alignment);
            var tab_header_class = function tab_header_class(icon_name) {
                return (0, _classnames2.default)({ icon: icon_name }, icon_name);
            };

            return _react2.default.createElement(
                'div',
                { className: tab_container_class },
                _react2.default.createElement(
                    _tabs_wrapper.TabsWrapper,
                    {
                        active: this.state.active_tab_index,
                        onChange: function onChange(active) {
                            return _this2.setActiveTab(active);
                        }
                    },
                    Object.keys(this.props.list).map(function (key) {
                        return _react2.default.createElement(
                            _react2.default.Fragment,
                            { key: key },
                            _react2.default.createElement(
                                'span',
                                {
                                    className: tab_header_class(_this2.props.list[key].icon),
                                    title: _this2.props.list[key].header
                                },
                                _this2.props.list[key].header
                            )
                        );
                    })
                ),
                _react2.default.createElement(TabContents, null)
            );
        }
    }]);

    return Tabs;
}(_react2.default.PureComponent);

Tabs.propTypes = {
    alignment: _propTypes2.default.string,
    list: _propTypes2.default.shape({
        header: _propTypes2.default.string,
        icon: _propTypes2.default.string
    })
};

exports.Tabs = Tabs;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs_item.jsx":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Tabs/tabs_item.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabsItem = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsItem = function TabsItem(_ref) {
    var active = _ref.active,
        children = _ref.children,
        elements = _ref.elements,
        onChange = _ref.onChange;
    return _react2.default.Children.map(children, function (child) {
        var tab_class = (0, _classnames2.default)('tab', { 'tab--active': child.key === active });
        return _react2.default.createElement(
            'div',
            {
                className: tab_class,
                ref: function ref(el) {
                    return elements[child.key] = el;
                },
                onClick: function onClick() {
                    onChange(child.key);
                }
            },
            child
        );
    });
};

TabsItem.propTypes = {
    active: _propTypes2.default.string,
    children: _propTypes2.default.node,
    elements: _propTypes2.default.object,
    onChange: _propTypes2.default.func
};

exports.TabsItem = TabsItem;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs_wrapper.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Tabs/tabs_wrapper.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabsWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tabs_item = __webpack_require__(/*! ./tabs_item.jsx */ "./src/javascript/app_2/App/Components/Elements/Tabs/tabs_item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsWrapper = function (_React$PureComponent) {
    _inherits(TabsWrapper, _React$PureComponent);

    function TabsWrapper(props) {
        _classCallCheck(this, TabsWrapper);

        var _this = _possibleConstructorReturn(this, (TabsWrapper.__proto__ || Object.getPrototypeOf(TabsWrapper)).call(this, props));

        _this.getSizes = function () {
            var rootBounds = _this.root.getBoundingClientRect();
            var sizes = {};
            Object.keys(_this.els).forEach(function (key) {
                var el = _this.els[key];
                var bounds = el.getBoundingClientRect();

                var left = bounds.left - rootBounds.left;
                var right = rootBounds.right - bounds.right;

                sizes[key] = { left: left, right: right };
            });
            _this.setState({ sizes: sizes });
        };

        _this.getUnderlineStyle = function () {
            if (_this.props.active == null || Object.keys(_this.state.sizes).length === 0) {
                return { left: '0', right: '100%' };
            }
            var size = _this.state.sizes[_this.props.active];
            return {
                left: size.left + 'px',
                right: size.right + 'px',
                transition: 'left 0.2s, right 0.25s'
            };
        };

        _this.state = {
            sizes: {}
        };
        _this.els = {};
        return _this;
    }

    _createClass(TabsWrapper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getSizes();
            window.addEventListener('resize', this.getSizes);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.getSizes);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    className: 'tab-wrapper',
                    ref: function ref(el) {
                        return _this2.root = el;
                    }
                },
                _react2.default.createElement(
                    _tabs_item.TabsItem,
                    {
                        active: this.props.active,
                        onChange: this.props.onChange,
                        elements: this.els
                    },
                    this.props.children
                ),
                _react2.default.createElement('div', {
                    className: 'tab-underline',
                    style: this.getUnderlineStyle()
                })
            );
        }
    }]);

    return TabsWrapper;
}(_react2.default.PureComponent);

TabsWrapper.propTypes = {
    active: _propTypes2.default.string,
    children: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    toggleDialog: _propTypes2.default.func
};

exports.TabsWrapper = TabsWrapper;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/ToastMessage/close_button.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ToastMessage/close_button.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseButton = function CloseButton(_ref) {
    var onClick = _ref.onClick;
    return _react2.default.createElement('button', {
        className: 'toast__body__close-button',
        type: 'button',
        onClick: onClick
    });
};

CloseButton.propTypes = {
    onClick: _propTypes2.default.func
};

exports.default = CloseButton;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/ToastMessage/constants.js":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ToastMessage/constants.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEFAULT_DELAY = exports.DEFAULT_DELAY = 5000;

var POSITIONS = exports.POSITIONS = {
    TOP_LEFT: 'toast--top-left',
    TOP_RIGHT: 'toast--top-right',
    TOP_CENTER: 'toast--top-center',
    BOTTOM_LEFT: 'toast--bottom-left',
    BOTTOM_RIGHT: 'toast--bottom-right',
    BOTTOM_CENTER: 'toast--bottom-center'
};

var TYPES = exports.TYPES = {
    ERROR: 'toast__body--error',
    INFO: 'toast__body--info',
    SUCCESS: 'toast__body--success',
    WARNING: 'toast__body--warning'
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/ToastMessage/index.js":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ToastMessage/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _constants = __webpack_require__(/*! ./constants.js */ "./src/javascript/app_2/App/Components/Elements/ToastMessage/constants.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _toast = __webpack_require__(/*! ./toast.jsx */ "./src/javascript/app_2/App/Components/Elements/ToastMessage/toast.jsx");

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toast2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/ToastMessage/toast.jsx":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ToastMessage/toast.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _close_button = __webpack_require__(/*! ./close_button.jsx */ "./src/javascript/app_2/App/Components/Elements/ToastMessage/close_button.jsx");

var _close_button2 = _interopRequireDefault(_close_button);

var _constants = __webpack_require__(/*! ./constants */ "./src/javascript/app_2/App/Components/Elements/ToastMessage/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = function Toast(_ref) {
    var data = _ref.data,
        removeToastMessage = _ref.removeToastMessage;

    var destroy = function destroy(is_closed_by_user) {
        removeToastMessage(data);

        if (typeof data.closeOnClick === 'function') {
            data.closeOnClick(data, is_closed_by_user);
        }
    };

    var onClick = function onClick() {
        return destroy(true);
    };

    if (data.is_auto_close || data.is_auto_close === undefined) {
        setTimeout(destroy, data.delay || _constants.DEFAULT_DELAY);
    }

    return _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)('toast__body', _constants.POSITIONS.TOP_RIGHT, data.position, _constants.TYPES[data.type.toUpperCase()]),
            onClick: onClick
        },
        _react2.default.createElement(
            'div',
            { className: 'toast__body__icon' },
            _react2.default.createElement('span', { className: 'toast__body__icon--' + data.type.toLowerCase() })
        ),
        _react2.default.createElement(
            'div',
            { className: 'toast__body__message' },
            data.message
        ),
        _react2.default.createElement(_close_button2.default, { onClick: onClick })
    );
};

Toast.propTypes = {
    data: _propTypes2.default.shape({
        closeOnClick: _propTypes2.default.func,
        delay: _propTypes2.default.number,
        is_auto_close: _propTypes2.default.bool,
        message: _propTypes2.default.node,
        position: _propTypes2.default.string,
        type: _propTypes2.default.string
    }),
    removeToastMessage: _propTypes2.default.func
};

exports.default = Toast;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/localize.jsx":
/*!*******************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/localize.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _fill_template = __webpack_require__(/*! ../../../Utils/Language/fill_template */ "./src/javascript/app_2/Utils/Language/fill_template.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Localize = function Localize(_ref) {
    var str = _ref.str,
        replacers = _ref.replacers;

    var localized = (0, _localize.localize)(str /* localize-ignore */); // should be localized on the caller side

    if (!/\[_\d+\]/.test(localized)) {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            localized
        );
    }

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        (0, _fill_template.fillTemplate)(localized, replacers)
    );
};

Localize.propTypes = {
    replacers: _propTypes2.default.object,
    str: _propTypes2.default.string
};

exports.default = Localize;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/login_prompt.jsx":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/login_prompt.jsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ./localize.jsx */ "./src/javascript/app_2/App/Components/Elements/localize.jsx");

var _localize2 = _interopRequireDefault(_localize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPrompt = function LoginPrompt(_ref) {
    var IconComponent = _ref.IconComponent,
        onLogin = _ref.onLogin,
        onSignup = _ref.onSignup;
    return _react2.default.createElement(
        'div',
        { className: 'login-prompt' },
        _react2.default.createElement(
            'div',
            { className: 'login-prompt__icon' },
            IconComponent && // TODO: needs a general icon in case not specified in route
            _react2.default.createElement(IconComponent, { className: 'disabled' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'login-prompt__message' },
            _react2.default.createElement(_localize2.default, {
                str: 'Please [_1]log in[_2] or [_3]sign up[_2] to view this page.',
                replacers: {
                    '1_2': _react2.default.createElement('a', { href: 'javascript:;', onClick: onLogin }),
                    '3_2': _react2.default.createElement('a', { href: 'javascript:;', onClick: onSignup })
                }
            })
        )
    );
};

LoginPrompt.propTypes = {
    IconComponent: _propTypes2.default.func,
    onLogin: _propTypes2.default.func,
    onSignup: _propTypes2.default.func
};

exports.default = LoginPrompt;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/money.jsx":
/*!****************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/money.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _currency_base = __webpack_require__(/*! ../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Money = function Money(_ref) {
    var amount = _ref.amount,
        _ref$currency = _ref.currency,
        currency = _ref$currency === undefined ? 'USD' : _ref$currency,
        has_sign = _ref.has_sign,
        _ref$is_formatted = _ref.is_formatted,
        is_formatted = _ref$is_formatted === undefined ? true : _ref$is_formatted;

    var sign = '';
    if (+amount && (amount < 0 || has_sign)) {
        sign = amount > 0 ? '+' : '-';
    }

    var abs_value = Math.abs(amount);
    var final_amount = is_formatted ? (0, _currency_base.formatMoney)(currency, abs_value, true) : abs_value;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        sign,
        _react2.default.createElement('span', { className: 'symbols ' + currency.toLowerCase() }),
        final_amount
    );
};

Money.propTypes = {
    amount: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    currency: _propTypes2.default.string,
    has_sign: _propTypes2.default.bool,
    is_formatted: _propTypes2.default.bool
};

exports.default = Money;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/toggle_button.jsx":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/toggle_button.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleButton = function ToggleButton(_ref) {
    var style = _ref.style,
        toggled = _ref.toggled;

    var toggle_style = style || 'toggle-button';
    var icon_class = (0, _classnames2.default)(toggle_style, {
        'toggled': toggled
    });

    return _react2.default.createElement('div', { className: icon_class });
};

ToggleButton.propTypes = {
    style: _propTypes2.default.string,
    toggled: _propTypes2.default.bool
};

exports.default = ToggleButton;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/tooltip.jsx":
/*!******************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/tooltip.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function Tooltip(_ref) {
    var message = _ref.message,
        alignment = _ref.alignment,
        children = _ref.children,
        icon = _ref.icon;

    var icon_name = icon === 'question' || icon === 'info' ? icon : 'question';
    var icon_class = (0, _classnames2.default)(icon_name);
    return _react2.default.createElement(
        'span',
        { className: 'tooltip', 'data-tooltip': message, 'data-tooltip-pos': alignment },
        icon ? _react2.default.createElement('i', { className: icon_class }) : children
    );
};

Tooltip.propTypes = {
    alignment: _propTypes2.default.string,
    children: _propTypes2.default.node,
    icon: _propTypes2.default.string,
    message: _propTypes2.default.string
};

exports.default = Tooltip;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/ui_loader.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ui_loader.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UILoader = function UILoader(_ref) {
    var className = _ref.className;

    var loading_class = (0, _classnames2.default)('loading', className);
    return _react2.default.createElement(
        'div',
        { className: 'block-ui' },
        _react2.default.createElement(
            'div',
            { className: loading_class },
            _react2.default.createElement(
                'div',
                { className: 'spinner' },
                _react2.default.createElement(
                    'svg',
                    { className: 'circular', viewBox: '25 25 50 50' },
                    _react2.default.createElement('circle', { className: 'path', cx: '50', cy: '50', r: '20', fill: 'none', strokeWidth: '4', strokeMiterlimit: '10' })
                )
            )
        )
    );
};

UILoader.propTypes = {
    className: _propTypes2.default.string
};

exports.default = UILoader;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/DatePicker/date_picker.jsx":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/DatePicker/date_picker.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _Date = __webpack_require__(/*! ../../../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

var _date_picker_input = __webpack_require__(/*! ./date_picker_input.jsx */ "./src/javascript/app_2/App/Components/Form/DatePicker/date_picker_input.jsx");

var _date_picker_input2 = _interopRequireDefault(_date_picker_input);

var _Calendar = __webpack_require__(/*! ../../Elements/Calendar */ "./src/javascript/app_2/App/Components/Elements/Calendar/index.js");

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_React$PureComponent) {
    _inherits(DatePicker, _React$PureComponent);

    function DatePicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            is_datepicker_visible: false,
            is_close_btn_visible: false
        }, _this.handleVisibility = function () {
            _this.setState({ is_datepicker_visible: !_this.state.is_datepicker_visible });
        }, _this.onClickOutside = function (e) {
            if (!_this.mainNode.contains(e.target) && _this.state.is_datepicker_visible) {
                _this.setState({ is_datepicker_visible: false });
                if (!!_this.state.value && _this.props.mode !== 'duration') {
                    _this.updateDatePickerValue((0, _Date.formatDate)(_this.state.value));
                }
            }
        }, _this.onMouseEnter = function () {
            if (_this.state.value && (!('is_clearable' in _this.props) || _this.props.is_clearable)) {
                _this.setState({ is_close_btn_visible: true });
            }
        }, _this.onMouseLeave = function () {
            _this.setState({ is_close_btn_visible: false });
        }, _this.onSelectCalendar = function (selected_date, is_datepicker_visible) {
            var value = selected_date;
            if (!_moment2.default.utc(value).isValid) {
                value = '';
            }

            if (_this.props.mode === 'duration') {
                _this.updateDatePickerValue((0, _Date.daysFromTodayTo)(value), 'duration');
            } else {
                _this.updateDatePickerValue(value);
            }
            _this.setState({ is_datepicker_visible: is_datepicker_visible });
        }, _this.onChangeInput = function (e) {
            var value = e.target.value;
            _this.updateDatePickerValue(value, _this.props.mode);
        }, _this.clearDatePickerInput = function () {
            _this.setState({ value: '' }, _this.updateStore);
            _this.calendar.resetCalendar();
        }, _this.updateDatePickerValue = function (value, mode) {
            _this.setState({ value: value }, _this.updateStore);

            // update Calendar
            var _this$props = _this.props,
                date_format = _this$props.date_format,
                start_date = _this$props.start_date;

            var new_date = mode === 'duration' ? _moment2.default.utc().add(value, 'days').format(date_format) : value;
            if (_this.calendar && (_moment2.default.utc(new_date, date_format).isValid() || !new_date)) {
                if (!new_date) {
                    var current_date = _moment2.default.utc(start_date).format(date_format);
                    _this.calendar.setState({
                        calendar_date: current_date,
                        selected_date: current_date
                    });
                } else {
                    _this.calendar.setState({
                        calendar_date: (0, _Date.formatDate)(new_date),
                        selected_date: (0, _Date.formatDate)(new_date)
                    });
                }
            }
        }, _this.updateStore = function () {
            var _this$props2 = _this.props,
                name = _this$props2.name,
                onChange = _this$props2.onChange;

            if (onChange) {
                onChange({ target: { name: name, value: _this.state.value } });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DatePicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this.onClickOutside, true);
            var _props = this.props,
                value = _props.value,
                mode = _props.mode;

            this.updateDatePickerValue(value, mode);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.onClickOutside, true);
        }

        // TODO: handle cases where user inputs date before min_date and date after max_date


        // update MobX store

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.is_nativepicker) {
                return _react2.default.createElement(
                    'div',
                    { ref: function ref(node) {
                            _this2.mainNode = node;
                        }, className: 'datepicker-container' },
                    _react2.default.createElement('input', {
                        id: this.props.name,
                        name: this.props.name,
                        className: 'datepicker-display',
                        type: 'date',
                        value: this.state.value,
                        min: this.props.min_date,
                        max: this.props.max_date,
                        onChange: function onChange(e) {
                            // fix for ios issue: clear button doesn't work
                            // https://github.com/facebook/react/issues/8938
                            var target = e.nativeEvent.target;
                            function iosClearDefault() {
                                target.defaultValue = '';
                            }
                            window.setTimeout(iosClearDefault, 0);

                            _this2.onSelectCalendar(e.target.value);
                        }
                    }),
                    _react2.default.createElement(
                        'label',
                        { className: 'datepicker-native-overlay', htmlFor: this.props.name },
                        this.state.value || this.props.placeholder,
                        _react2.default.createElement(_Common.IconArrow, { className: 'datepicker-native-overlay__arrowhead' })
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { ref: function ref(node) {
                        _this2.mainNode = node;
                    }, className: 'datepicker-container' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'datepicker-display-wrapper',
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    },
                    _react2.default.createElement(_date_picker_input2.default, {
                        class_name: 'datepicker-display',
                        mode: this.props.mode,
                        name: this.props.name,
                        placeholder: this.props.placeholder,
                        onClick: this.handleVisibility,
                        is_read_only: true,
                        value: this.state.value
                    }),
                    _react2.default.createElement('span', {
                        className: (0, _classnames2.default)('picker-calendar-icon', {
                            show: !this.state.is_close_btn_visible
                        }),
                        onClick: this.handleVisibility
                    }),
                    _react2.default.createElement('span', {
                        className: (0, _classnames2.default)('close-circle-icon', {
                            show: this.state.is_close_btn_visible
                        }),
                        onClick: this.clearDatePickerInput
                    })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: (0, _classnames2.default)('datepicker-calendar', {
                            show: this.state.is_datepicker_visible
                        })
                    },
                    _react2.default.createElement(
                        _Calendar2.default,
                        _extends({
                            ref: function ref(node) {
                                _this2.calendar = node;
                            },
                            onSelect: this.onSelectCalendar
                        }, this.props),
                        _react2.default.createElement(_date_picker_input2.default, {
                            class_name: 'calendar-input',
                            mode: this.props.mode,
                            name: this.props.name,
                            onChange: this.onChangeInput,
                            placeholder: this.props.placeholder,
                            is_read_only: 'is_read_only' in this.props ? this.props.is_read_only : false,
                            value: this.state.value
                        })
                    )
                )
            );
        }
    }]);

    return DatePicker;
}(_react2.default.PureComponent);

DatePicker.defaultProps = {
    date_format: _Calendar2.default.defaultProps.date_format,
    mode: 'date'
};

DatePicker.propTypes = _extends({}, _date_picker_input2.default.propTypes, _Calendar2.default.propTypes);

exports.default = DatePicker;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/DatePicker/date_picker_input.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/DatePicker/date_picker_input.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DatePickerInput;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatePickerInput(props) {
    return _react2.default.createElement('input', {
        id: props.id,
        name: props.name,
        className: props.class_name,
        readOnly: props.is_read_only,
        placeholder: props.placeholder || (props.mode === 'duration' ? (0, _localize.localize)('Select a duration') : (0, _localize.localize)('Select date')),
        onChange: props.onChange,
        onClick: props.onClick,
        value: props.value
    });
}

DatePickerInput.propTypes = {
    class_name: _propTypes2.default.string,
    id: _propTypes2.default.string,
    is_clearable: _propTypes2.default.bool,
    is_read_only: _propTypes2.default.bool,
    mode: _propTypes2.default.string,
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, // duration
    _propTypes2.default.string] // date
    )
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/DatePicker/index.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/DatePicker/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _date_picker = __webpack_require__(/*! ./date_picker.jsx */ "./src/javascript/app_2/App/Components/Form/DatePicker/date_picker.jsx");

var _date_picker2 = _interopRequireDefault(_date_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _date_picker2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/DropDown/dropdown.jsx":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/DropDown/dropdown.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _simplebarReact = __webpack_require__(/*! simplebar-react */ "./node_modules/simplebar-react/dist/simplebar-react.esm.js");

var _simplebarReact2 = _interopRequireDefault(_simplebarReact);

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./src/javascript/app_2/App/Components/Form/DropDown/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.onKeyPressed = function (event) {
            if (event.keyCode === 9) {
                // Tab is pressed
                if (_this.state.is_list_visible) {
                    _this.handleVisibility();
                }
                return;
            }
            event.preventDefault();
            var index = (0, _helpers.getItemFromValue)(_this.props.list, _this.props.value);
            var value = (0, _helpers.getValueFromIndex)(_this.props.list, _this.state.curr_index);
            var handleToggle = function handleToggle() {
                if (_this.state.is_list_visible && _this.props.value !== value) {
                    _this.props.onChange({ target: { name: _this.props.name, value: value } });
                }
                _this.handleVisibility();
            };
            switch (event.keyCode) {
                case 13: // Enter is pressed
                case 32:
                    // Space is pressed
                    handleToggle();
                    break;
                case 38:
                    // Up Arrow is pressed
                    if (_this.state.is_list_visible) {
                        var prev_index = (0, _helpers.getPrevIndex)(_this.state.curr_index, index.length);
                        _this.setState({ curr_index: prev_index });
                    }
                    break;
                case 40:
                    // Down Arrow is pressed
                    if (_this.state.is_list_visible) {
                        var next_index = (0, _helpers.getNextIndex)(_this.state.curr_index, index.length);
                        _this.setState({ curr_index: next_index });
                    }
                    break;
                default:
            }

            // For char presses, we do a search for the item:
            if (event.key.length === 1) {
                var char = event.key.toLowerCase();
                var firstChars = _this.props.list.map(function (x) {
                    return x.text[0].toLowerCase();
                });
                var idx = void 0;
                // Tapping the same character again jumps to the next match:
                if (_this.state.curr_index) {
                    idx = firstChars.indexOf(char, _this.state.curr_index + 1);
                }
                if (idx === undefined || idx === -1) {
                    idx = firstChars.indexOf(char);
                }
                if (idx >= 0) {
                    _this.setState({ curr_index: idx });
                }
            }
        };

        _this.handleVisibility = _this.handleVisibility.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.setWrapperRef = _this.setWrapperRef.bind(_this);
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        _this.state = {
            is_list_visible: false,
            curr_index: (0, _helpers.getItemFromValue)(_this.props.list, _this.props.value).number
        };
        return _this;
    }

    _createClass(Dropdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(item) {
            if (item.value !== this.props.value) {
                this.props.onChange({ target: { name: this.props.name, value: item.value } });
            }
            this.handleVisibility();
        }
    }, {
        key: 'setWrapperRef',
        value: function setWrapperRef(node) {
            this.wrapper_ref = node;
        }
    }, {
        key: 'scrollToggle',
        value: function scrollToggle(state) {
            this.is_open = state;
            // Used to disable y-scroll on body - disabled in this component for now
            // document.body.classList.toggle('no-scroll', this.is_open);
        }
    }, {
        key: 'handleClickOutside',
        value: function handleClickOutside(event) {
            if (this.wrapper_ref && !this.wrapper_ref.contains(event.target) && this.state.is_list_visible) {
                this.setState({ is_list_visible: false });
                this.scrollToggle(this.state.is_list_visible);
            }
        }
    }, {
        key: 'handleVisibility',
        value: function handleVisibility() {
            this.setState({ is_list_visible: !this.state.is_list_visible });
            this.scrollToggle(!this.state.is_list_visible);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // TODO: Fix list not being populated in native picker dropdown before re-enabling
            // if (this.props.is_nativepicker) {
            //     return (
            //         <NativeSelect
            //             name={this.props.name}
            //             value={this.props.value}
            //             list={this.props.list}
            //             onChange={this.props.onChange}
            //         />
            //     );
            // }
            return _react2.default.createElement(
                'div',
                {
                    ref: this.setWrapperRef,
                    className: 'dropdown-container ' + (this.props.className ? this.props.className : '') + ' ' + (this.state.is_list_visible ? 'show' : '')
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'dropdown-display ' + (this.state.is_list_visible ? 'clicked' : ''),
                        onClick: this.handleVisibility,
                        tabIndex: '0',
                        onKeyDown: this.onKeyPressed
                    },
                    _react2.default.createElement(
                        'span',
                        { name: this.props.name, value: this.props.value },
                        (0, _helpers.getDisplayText)(this.props.list, this.props.value)
                    )
                ),
                _react2.default.createElement(_Common.IconArrow, { className: 'select-arrow' }),
                _react2.default.createElement(
                    _reactTransitionGroup.CSSTransition,
                    {
                        'in': this.state.is_list_visible,
                        timeout: 100,
                        classNames: 'dropdown-list',
                        unmountOnExit: true
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'dropdown-list' },
                        _react2.default.createElement(
                            'div',
                            { className: 'list-container' },
                            _react2.default.createElement(
                                _simplebarReact2.default,
                                { style: { 'height': '100%' } },
                                (0, _mobx.isArrayLike)(this.props.list) ? _react2.default.createElement(Items, {
                                    highlightedIdx: this.state.curr_index,
                                    items: this.props.list,
                                    name: this.props.name,
                                    value: this.props.value,
                                    handleSelect: this.handleSelect
                                }) : Object.keys(this.props.list).map(function (key) {
                                    return _react2.default.createElement(
                                        _react2.default.Fragment,
                                        { key: key },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'list-label' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                key
                                            )
                                        ),
                                        _react2.default.createElement(Items, {
                                            highlightedIdx: _this2.state.curr_index,
                                            items: _this2.props.list[key],
                                            name: _this2.props.name,
                                            value: _this2.props.value,
                                            handleSelect: _this2.handleSelect
                                        })
                                    );
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Dropdown;
}(_react2.default.Component);

var Items = function Items(_ref) {
    var items = _ref.items,
        name = _ref.name,
        value = _ref.value,
        handleSelect = _ref.handleSelect,
        highlightedIdx = _ref.highlightedIdx;
    return items.map(function (item, idx) {
        return _react2.default.createElement(
            _react2.default.Fragment,
            { key: idx },
            _react2.default.createElement(
                'div',
                {
                    className: 'list-item ' + (value === item.value ? 'selected' : '') + ' ' + (highlightedIdx === idx ? 'highlighted' : ''),
                    key: idx,
                    name: name,
                    value: item.value,
                    onClick: handleSelect.bind(null, item)
                },
                _react2.default.createElement(
                    'span',
                    null,
                    item.text
                )
            )
        );
    });
};

var NativeSelect = function NativeSelect(_ref2) {
    var name = _ref2.name,
        value = _ref2.value,
        list = _ref2.list,
        onChange = _ref2.onChange;
    return _react2.default.createElement(
        'div',
        { className: 'select-wrapper' },
        _react2.default.createElement(
            'select',
            { name: name, value: value, onChange: onChange },
            Array.isArray(list) ? list.map(function (item, idx) {
                return _react2.default.createElement(
                    'option',
                    { key: idx, value: item.value },
                    item.text
                );
            }) : Object.keys(list).map(function (key) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    { key: key },
                    _react2.default.createElement(
                        'optgroup',
                        { label: key },
                        list[key].map(function (item, idx) {
                            return _react2.default.createElement(
                                'option',
                                { key: idx, value: item.value },
                                item.text
                            );
                        })
                    )
                );
            })
        )
    );
};

// ToDo: Refactor Drop-down.
// It's now too risky to refactor Dropdown for 'list' and 'value' prop types.
Dropdown.propTypes = {
    className: _propTypes2.default.string,
    is_nativepicker: _propTypes2.default.bool,
    list: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    type: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

// ToDo: Refactor NativeSelect
NativeSelect.propTypes = {
    list: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = (0, _mobxReact.observer)(Dropdown);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/DropDown/helpers.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/DropDown/helpers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNextIndex = exports.getPrevIndex = exports.getValueFromIndex = exports.getItemFromValue = exports.getDisplayText = undefined;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var getDisplayText = exports.getDisplayText = function getDisplayText(list, value) {
    var findInArray = function findInArray(arr_list) {
        return (arr_list.find(function (item) {
            return item.value === value;
        }) || {}).text;
    };
    var text = '';
    if ((0, _mobx.isArrayLike)(list)) {
        text = findInArray(list);
    } else {
        Object.keys(list).some(function (key) {
            text = findInArray(list[key]);
            return text;
        });
    }
    return text;
};

var getItemFromValue = exports.getItemFromValue = function getItemFromValue(list, value) {
    var findInArray = function findInArray(arr_list) {
        return arr_list.findIndex(function (item) {
            return item.value === value;
        });
    };
    var item = {};
    if ((0, _mobx.isArrayLike)(list)) {
        item = { number: findInArray(list), length: list.length };
    } else {
        Object.keys(list).some(function (key) {
            item = { number: findInArray(list[key]), length: list[key].length };
            return item;
        });
    }
    return item;
};

var getValueFromIndex = exports.getValueFromIndex = function getValueFromIndex(list, index) {
    var findInArray = function findInArray(arr_list) {
        return arr_list[index];
    };
    var result = void 0;
    if ((0, _mobx.isArrayLike)(list)) {
        result = findInArray(list);
    } else {
        Object.keys(list).some(function (key) {
            result = findInArray(list[key]);
            return result.value;
        });
    }
    return result.value;
};

var getPrevIndex = exports.getPrevIndex = function getPrevIndex(index, length) {
    var prev_index = index - 1 < 0 ? length - 1 : index - 1;
    return prev_index;
};

var getNextIndex = exports.getNextIndex = function getNextIndex(index, length) {
    var next_index = index + 1 === length ? 0 : index + 1;
    return next_index;
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/DropDown/index.js":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/DropDown/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dropdown = __webpack_require__(/*! ./dropdown.jsx */ "./src/javascript/app_2/App/Components/Form/DropDown/dropdown.jsx");

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dropdown2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/button.jsx":
/*!*************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/button.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var children = _ref.children,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        has_effect = _ref.has_effect,
        id = _ref.id,
        is_disabled = _ref.is_disabled,
        onClick = _ref.onClick,
        text = _ref.text,
        wrapperClassName = _ref.wrapperClassName;

    var classes = 'btn' + (has_effect ? ' effect' : '') + ' ' + className;
    var button = _react2.default.createElement(
        'button',
        { id: id, className: classes, onClick: onClick || undefined, disabled: is_disabled },
        _react2.default.createElement(
            'span',
            null,
            text
        ),
        children
    );
    var wrapper = _react2.default.createElement(
        'div',
        { className: wrapperClassName },
        button
    );

    return wrapperClassName ? wrapper : button;
};

Button.propTypes = {
    children: _propTypes2.default.object,
    className: _propTypes2.default.string,
    has_effect: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    is_disabled: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    text: _propTypes2.default.string,
    wrapperClassName: _propTypes2.default.string
};

exports.default = Button;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/fieldset.jsx":
/*!***************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/fieldset.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _tooltip = __webpack_require__(/*! ../Elements/tooltip.jsx */ "./src/javascript/app_2/App/Components/Elements/tooltip.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fieldset = function Fieldset(_ref) {
    var children = _ref.children,
        className = _ref.className,
        header = _ref.header,
        icon = _ref.icon,
        onMouseEnter = _ref.onMouseEnter,
        onMouseLeave = _ref.onMouseLeave,
        tooltip = _ref.tooltip;

    var field_left_class = (0, _classnames2.default)('field-info left', { icon: icon }, icon);

    return _react2.default.createElement(
        'fieldset',
        { className: className, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        !!header && _react2.default.createElement(
            'div',
            { className: 'fieldset-header' },
            _react2.default.createElement(
                'span',
                { className: field_left_class },
                header
            )
        ),
        !!tooltip && _react2.default.createElement(
            'span',
            { className: 'field-info right' },
            _react2.default.createElement(_tooltip2.default, {
                alignment: 'left',
                icon: 'info',
                message: tooltip || 'Message goes here.'
            })
        ),
        children
    );
};

// ToDo:
// - Refactor Last Digit to keep the children as array type.
//   Currently last_digit.jsx returns object (React-Element) as 'children'
//   props type.
Fieldset.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    className: _propTypes2.default.string,
    header: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    tooltip: _propTypes2.default.string
};

exports.default = Fieldset;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/input_field.jsx":
/*!******************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/input_field.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _tooltip = __webpack_require__(/*! ../Elements/tooltip.jsx */ "./src/javascript/app_2/App/Components/Elements/tooltip.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputField = function InputField(_ref) {
    var className = _ref.className,
        error_messages = _ref.error_messages,
        fractional_digits = _ref.fractional_digits,
        helper = _ref.helper,
        is_disabled = _ref.is_disabled,
        is_float = _ref.is_float,
        _ref$is_signed = _ref.is_signed,
        is_signed = _ref$is_signed === undefined ? false : _ref$is_signed,
        label = _ref.label,
        max_length = _ref.max_length,
        name = _ref.name,
        onChange = _ref.onChange,
        placeholder = _ref.placeholder,
        prefix = _ref.prefix,
        required = _ref.required,
        type = _ref.type,
        value = _ref.value;

    var has_error = error_messages && error_messages.length;
    var has_valid_length = true;

    var changeValue = function changeValue(e) {
        if (type === 'number') {
            var is_empty = !e.target.value || e.target.value === '';
            var signed_regex = is_signed ? '(?!^([-+]0)$|^[-+]?$)^[+-]?' : '^';

            var is_number = new RegExp(signed_regex + '(\\d*)?' + (is_float ? '(\\.\\d+)?' : '') + '$').test(e.target.value);

            var is_not_completed_number = is_float && new RegExp(signed_regex + '(\\.|\\d+\\.)?$').test(e.target.value);

            // This regex check whether there is any zero at the end of fractional part or not.
            var has_zero_at_end = new RegExp(signed_regex + '(\\d+)?\\.(\\d+)?[0]+$').test(e.target.value);

            var is_scientific_notation = /e/.test('' + +e.target.value);

            if (max_length && fractional_digits) {
                has_valid_length = new RegExp(signed_regex + '(\\d{0,' + max_length + '})(\\.\\d{0,' + fractional_digits + '})?$').test(e.target.value);
            }

            if ((is_number || is_empty) && has_valid_length) {
                e.target.value = is_empty || is_signed || has_zero_at_end || is_scientific_notation ? e.target.value : +e.target.value;
            } else if (!is_not_completed_number) {
                e.target.value = value;
                return;
            }
        }

        onChange(e);
    };

    var input = _react2.default.createElement('input', {
        className: (0, _classnames2.default)({ error: has_error }),
        disabled: is_disabled,
        'data-for': 'error_tooltip_' + name,
        'data-tip': true,
        maxLength: fractional_digits ? max_length + fractional_digits + 1 : max_length,
        name: name,
        onChange: changeValue,
        placeholder: placeholder || undefined,
        required: required || undefined,
        type: type === 'number' ? 'text' : type,
        value: value
    });

    return _react2.default.createElement(
        'div',
        {
            className: 'input-field ' + (className || '')
        },
        _react2.default.createElement(
            _tooltip2.default,
            { alignment: 'left', message: has_error ? error_messages[0] : null },
            !!label && _react2.default.createElement(
                'label',
                { htmlFor: name, className: 'input-label' },
                label
            ),
            !!prefix && _react2.default.createElement(
                'i',
                null,
                _react2.default.createElement('span', { className: 'symbols ' + prefix.toLowerCase() })
            ),
            !!helper && _react2.default.createElement(
                'span',
                { className: 'input-helper' },
                helper
            ),
            input
        )
    );
};

// ToDo: Refactor input_field
// supports more than two different types of 'value' as a prop.
// Quick Solution - Pass two different props to input field.
InputField.propTypes = {
    className: _propTypes2.default.string,
    error_messages: _mobxReact.PropTypes.arrayOrObservableArray,
    fractional_digits: _propTypes2.default.number,
    helper: _propTypes2.default.string,
    is_disabled: _propTypes2.default.string,
    is_float: _propTypes2.default.bool,
    is_signed: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    max_length: _propTypes2.default.number,
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    prefix: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = (0, _mobxReact.observer)(InputField);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Form/time_picker.jsx":
/*!******************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Form/time_picker.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _start_date = __webpack_require__(/*! ../../../Stores/Modules/Trading/Helpers/start_date */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/start_date.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePickerDropdown = function (_React$Component) {
    _inherits(TimePickerDropdown, _React$Component);

    function TimePickerDropdown(props) {
        _classCallCheck(this, TimePickerDropdown);

        var _this = _possibleConstructorReturn(this, (TimePickerDropdown.__proto__ || Object.getPrototypeOf(TimePickerDropdown)).call(this, props));

        _this.selectOption = function (type, value) {
            var is_enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (is_enabled) {
                var _this$props$value$spl = _this.props.value.split(':'),
                    _this$props$value$spl2 = _slicedToArray(_this$props$value$spl, 2),
                    prev_hour = _this$props$value$spl2[0],
                    prev_minute = _this$props$value$spl2[1];

                if (type === 'h' && value !== prev_hour || type === 'm' && value !== prev_minute) {
                    var is_type_selected = type === 'h' ? 'is_hour_selected' : 'is_minute_selected';
                    _this.setState(_defineProperty({
                        last_updated_type: type
                    }, is_type_selected, true));
                    _this.props.onChange((type === 'h' ? value : prev_hour) + ':' + (type === 'm' ? value : prev_minute));
                }
            }
        };

        _this.clear = function (event) {
            event.stopPropagation();
            _this.resetValues();
            _this.props.onChange('');
        };

        _this.hours = [].concat(_toConsumableArray(Array(24).keys())).map(function (a) {
            return ('0' + a).slice(-2);
        });
        _this.minutes = [].concat(_toConsumableArray(Array(12).keys())).map(function (a) {
            return ('0' + a * 5).slice(-2);
        });
        _this.state = {
            is_hour_selected: false,
            is_minute_selected: false,
            last_updated_type: null
        };
        return _this;
    }

    _createClass(TimePickerDropdown, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var _state = this.state,
                is_hour_selected = _state.is_hour_selected,
                is_minute_selected = _state.is_minute_selected;

            if (is_hour_selected && is_minute_selected) {
                this.resetValues();
                this.props.toggle();
            }
            if (!prevProps.className && this.props.className === 'active') {
                this.resetValues();
            }
            if (prevState.last_updated_type !== this.state.last_updated_type && this.state.last_updated_type) {
                this.setState({ last_updated_type: null });
            }
        }
    }, {
        key: 'resetValues',
        value: function resetValues() {
            this.setState({
                is_hour_selected: false,
                is_minute_selected: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                preClass = _props.preClass,
                value = _props.value,
                toggle = _props.toggle,
                start_date = _props.start_date,
                sessions = _props.sessions;

            var start_moment = (0, _moment2.default)(start_date * 1000 || undefined).utc();
            var start_moment_clone = start_moment.clone().minute(0).second(0);

            var _value$split = value.split(':'),
                _value$split2 = _slicedToArray(_value$split, 2),
                hour = _value$split2[0],
                minute = _value$split2[1];

            return _react2.default.createElement(
                'div',
                { className: preClass + '-dropdown ' + this.props.className },
                _react2.default.createElement(
                    'div',
                    {
                        className: preClass + '-panel',
                        onClick: toggle
                    },
                    _react2.default.createElement(
                        'span',
                        { className: value ? '' : 'placeholder' },
                        value || (0, _localize.localize)('Select time')
                    ),
                    (!('is_clearable' in this.props) || this.props.is_clearable) && _react2.default.createElement('span', {
                        className: preClass + '-clear',
                        onClick: this.clear
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: preClass + '-selector' },
                    _react2.default.createElement(
                        'div',
                        {
                            ref: this.saveHourRef,
                            className: preClass + '-hours'
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'list-title center-text' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                (0, _localize.localize)('Hour')
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'list-container' },
                            this.hours.map(function (h, key) {
                                start_moment_clone.hour(h);
                                var is_enabled = (0, _start_date.isSessionAvailable)(sessions, start_moment_clone, start_moment, true);
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: 'list-item' + (hour === h ? ' selected' : '') + (is_enabled ? '' : ' disabled'),
                                        key: key,
                                        onClick: function onClick() {
                                            _this2.selectOption('h', h, is_enabled);
                                        }
                                    },
                                    h
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            ref: this.saveMinuteRef,
                            className: preClass + '-minutes'
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'list-title center-text' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                (0, _localize.localize)('Minute')
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'list-container' },
                            this.minutes.map(function (mm, key) {
                                start_moment_clone.hour(hour).minute(mm);
                                var is_enabled = (0, _start_date.isSessionAvailable)(sessions, start_moment_clone, start_moment);
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: 'list-item' + (minute === mm ? ' selected' : '') + (is_enabled ? '' : ' disabled'),
                                        key: key,
                                        onClick: function onClick() {
                                            _this2.selectOption('m', mm, is_enabled);
                                        }
                                    },
                                    mm
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return TimePickerDropdown;
}(_react2.default.Component);

var TimePicker = function (_React$Component2) {
    _inherits(TimePicker, _React$Component2);

    function TimePicker(props) {
        _classCallCheck(this, TimePicker);

        var _this3 = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

        _this3.toggleDropDown = function () {
            _this3.setState({ is_open: !_this3.state.is_open });
        };

        _this3.handleChange = function (arg) {
            // To handle nativepicker;
            var value = (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' ? arg.target.value : arg;

            if (value !== _this3.props.value) {
                _this3.props.onChange({ target: { name: _this3.props.name, value: value } });
            }
        };

        _this3.saveRef = function (node) {
            if (!node) return;
            if (node.nodeName === 'INPUT') {
                _this3.target_element = node;
                return;
            }
            _this3.wrapper_ref = node;
        };

        _this3.handleClickOutside = function (event) {
            if (_this3.wrapper_ref && !_this3.wrapper_ref.contains(event.target)) {
                if (_this3.state.is_open) {
                    _this3.setState({ is_open: false });
                }
            }
        };

        _this3.state = {
            is_open: false,
            value: ''
        };
        return _this3;
    }

    _createClass(TimePicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var prefix_class = 'time-picker';
            var _props2 = this.props,
                is_nativepicker = _props2.is_nativepicker,
                value = _props2.value,
                name = _props2.name,
                is_align_right = _props2.is_align_right,
                placeholder = _props2.placeholder,
                start_date = _props2.start_date,
                sessions = _props2.sessions;

            return _react2.default.createElement(
                'div',
                {
                    ref: this.saveRef,
                    className: '' + prefix_class + (this.props.padding ? ' padding' : '') + (this.state.is_open ? ' active' : '')
                },
                is_nativepicker ? _react2.default.createElement('input', {
                    type: 'time',
                    id: prefix_class + '-input',
                    value: value,
                    onChange: this.handleChange,
                    name: name
                }) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', {
                        ref: this.saveRef,
                        type: 'text',
                        readOnly: true,
                        id: prefix_class + '-input',
                        className: prefix_class + '-input ' + (this.state.is_open ? 'active' : ''),
                        value: value,
                        onClick: this.toggleDropDown,
                        name: name,
                        placeholder: placeholder
                    }),
                    _react2.default.createElement(TimePickerDropdown, {
                        className: '' + (this.state.is_open ? 'active' : '') + (is_align_right ? ' from-right' : ''),
                        toggle: this.toggleDropDown,
                        onChange: this.handleChange,
                        preClass: prefix_class,
                        start_date: start_date,
                        value: value,
                        sessions: sessions,
                        is_clearable: this.props.is_clearable
                    })
                )
            );
        }
    }]);

    return TimePicker;
}(_react2.default.Component);

TimePicker.propTypes = {
    is_align_right: _propTypes2.default.bool,
    is_clearable: _propTypes2.default.bool,
    is_nativepicker: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    padding: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    sessions: _mobxReact.PropTypes.arrayOrObservableArray,
    start_date: _propTypes2.default.number,
    value: _propTypes2.default.string
};

TimePickerDropdown.propTypes = {
    className: _propTypes2.default.string,
    is_clearable: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    preClass: _propTypes2.default.string,
    sessions: _mobxReact.PropTypes.arrayOrObservableArray,
    start_date: _propTypes2.default.number,
    toggle: _propTypes2.default.func,
    value: _propTypes2.default.string,
    value_split: _propTypes2.default.bool
};

exports.default = (0, _mobxReact.observer)(TimePicker);

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Footer/index.js":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Footer/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _network_status = __webpack_require__(/*! ./network_status.jsx */ "./src/javascript/app_2/App/Components/Layout/Footer/network_status.jsx");

Object.keys(_network_status).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _network_status[key];
    }
  });
});

var _toggle_fullscreen = __webpack_require__(/*! ./toggle_fullscreen.jsx */ "./src/javascript/app_2/App/Components/Layout/Footer/toggle_fullscreen.jsx");

Object.keys(_toggle_fullscreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle_fullscreen[key];
    }
  });
});

var _toggle_portfolio = __webpack_require__(/*! ./toggle_portfolio.jsx */ "./src/javascript/app_2/App/Components/Layout/Footer/toggle_portfolio.jsx");

Object.keys(_toggle_portfolio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle_portfolio[key];
    }
  });
});

var _toggle_settings = __webpack_require__(/*! ./toggle_settings.jsx */ "./src/javascript/app_2/App/Components/Layout/Footer/toggle_settings.jsx");

Object.keys(_toggle_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle_settings[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Footer/network_status.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Footer/network_status.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetworkStatus = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _tooltip = __webpack_require__(/*! ../../Elements/tooltip.jsx */ "./src/javascript/app_2/App/Components/Elements/tooltip.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkStatus = function NetworkStatus(_ref) {
    var status = _ref.status;
    return _react2.default.createElement(
        'div',
        { className: 'network-status-wrapper' },
        _react2.default.createElement(
            _tooltip2.default,
            { alignment: 'top', message: (0, _localize.localize)('Network status: [_1]', [status.tooltip || (0, _localize.localize)('Connecting to server')]) },
            _react2.default.createElement('div', { className: (0, _classnames2.default)('network-status-circle', status.class) })
        )
    );
};

NetworkStatus.propTypes = {
    status: _propTypes2.default.object
};

exports.NetworkStatus = NetworkStatus;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Footer/toggle_fullscreen.jsx":
/*!*********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Footer/toggle_fullscreen.jsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleFullScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(/*! ../../../../Assets/Footer */ "./src/javascript/app_2/Assets/Footer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleFullScreen = function (_React$Component) {
    _inherits(ToggleFullScreen, _React$Component);

    function ToggleFullScreen(props) {
        _classCallCheck(this, ToggleFullScreen);

        var _this = _possibleConstructorReturn(this, (ToggleFullScreen.__proto__ || Object.getPrototypeOf(ToggleFullScreen)).call(this, props));

        _this.onFullScreen = function () {
            var is_full_screen = _this.fullscreen_map.element.some(function (el) {
                return document[el];
            });
            _this.setState({ is_full_screen: is_full_screen });
        };

        _this.toggleFullScreen = function (e) {
            e.stopPropagation();

            var to_exit = _this.state.is_full_screen;
            var el = to_exit ? document : document.documentElement;
            var fncToCall = _this.fullscreen_map[to_exit ? 'fnc_exit' : 'fnc_enter'].find(function (fnc) {
                return el[fnc];
            });

            if (fncToCall) {
                el[fncToCall]();
            } else {
                _this.setState({ is_full_screen: false }); // fullscreen API is not enabled
            }
        };

        _this.state = {
            is_full_screen: false
        };
        _this.fullscreen_map = {
            event: ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'],
            element: ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'],
            fnc_enter: ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'],
            fnc_exit: ['exitFullscreen', 'webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen']
        };

        return _this;
    }

    _createClass(ToggleFullScreen, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.fullscreen_map.event.forEach(function (event) {
                document.addEventListener(event, _this2.onFullScreen, false);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var full_screen_icon_class = (0, _classnames2.default)('ic-fullscreen', {
                'active': this.state.is_full_screen
            });
            return _react2.default.createElement(
                'a',
                {
                    href: 'javascript:;',
                    className: full_screen_icon_class,
                    onClick: this.toggleFullScreen
                },
                _react2.default.createElement(_Footer.IconMaximize, { className: 'footer-icon' })
            );
        }
    }]);

    return ToggleFullScreen;
}(_react2.default.Component);

exports.ToggleFullScreen = ToggleFullScreen;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Footer/toggle_portfolio.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Footer/toggle_portfolio.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TogglePortfolio = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(/*! ../../../../Assets/Footer */ "./src/javascript/app_2/Assets/Footer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TogglePortfolio = function TogglePortfolio(_ref) {
    var is_portfolio_drawer_on = _ref.is_portfolio_drawer_on,
        togglePortfolioDrawer = _ref.togglePortfolioDrawer;

    var toggle_portfolio_class = (0, _classnames2.default)('ic-portfolio', {
        'active': is_portfolio_drawer_on
    });
    return _react2.default.createElement(
        'a',
        {
            href: 'javascript:;',
            className: toggle_portfolio_class,
            onClick: togglePortfolioDrawer
        },
        _react2.default.createElement(_Footer.IconQuickPortfolio, { className: 'footer-icon' })
    );
};

TogglePortfolio.propTypes = {
    is_portfolio_drawer_on: _propTypes2.default.bool,
    togglePortfolioDrawer: _propTypes2.default.func
};

exports.TogglePortfolio = TogglePortfolio;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Footer/toggle_settings.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Footer/toggle_settings.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleSettings = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Footer = __webpack_require__(/*! ../../../../Assets/Footer */ "./src/javascript/app_2/Assets/Footer/index.js");

var _settings_dialog = __webpack_require__(/*! ../../Elements/SettingsDialog/settings_dialog.jsx */ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_dialog.jsx");

var _settings_dialog2 = _interopRequireDefault(_settings_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleSettings = function ToggleSettings(_ref) {
    var is_language_visible = _ref.is_language_visible,
        is_settings_visible = _ref.is_settings_visible,
        toggleSettings = _ref.toggleSettings;

    var toggle_settings_class = (0, _classnames2.default)('ic-settings', {
        'active': is_settings_visible
    });
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'a',
            {
                href: 'javascript:;',
                onClick: toggleSettings,
                className: toggle_settings_class
            },
            _react2.default.createElement(_Footer.IconSettings, { className: 'footer-icon' })
        ),
        _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            {
                'in': is_settings_visible,
                timeout: 100,
                classNames: 'settings-dialog',
                unmountOnExit: true
            },
            _react2.default.createElement(_settings_dialog2.default, {
                is_open: is_settings_visible,
                is_language_dialog_visible: is_language_visible,
                toggleDialog: toggleSettings
            })
        )
    );
};

ToggleSettings.propTypes = {
    is_language_visible: _propTypes2.default.bool,
    is_settings_visible: _propTypes2.default.bool,
    toggleSettings: _propTypes2.default.func
};

exports.ToggleSettings = ToggleSettings;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/account_info.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/account_info.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountInfo = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _localize = __webpack_require__(/*! ../../Elements/localize.jsx */ "./src/javascript/app_2/App/Components/Elements/localize.jsx");

var _localize2 = _interopRequireDefault(_localize);

var _AccountSwitcher = __webpack_require__(/*! ../../../Containers/AccountSwitcher */ "./src/javascript/app_2/App/Containers/AccountSwitcher/index.js");

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo fix absolute path

var AccountInfo = function AccountInfo(_ref) {
    var balance = _ref.balance,
        currency = _ref.currency,
        loginid = _ref.loginid,
        is_dialog_on = _ref.is_dialog_on,
        is_upgrade_enabled = _ref.is_upgrade_enabled,
        onClickUpgrade = _ref.onClickUpgrade,
        toggleDialog = _ref.toggleDialog,
        account_type = _ref.account_type;
    return _react2.default.createElement(
        'div',
        { className: 'acc-balance' },
        _react2.default.createElement(
            'div',
            { className: 'acc-switcher-container' },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('acc-info', { 'show': is_dialog_on }), onClick: toggleDialog },
                _react2.default.createElement(
                    'p',
                    { className: 'acc-balance-type' },
                    _react2.default.createElement(_localize2.default, { str: account_type + ' Account' })
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'acc-balance-id' },
                    loginid
                ),
                _react2.default.createElement(_Common.IconArrow, { className: 'select-arrow' })
            ),
            _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                {
                    'in': is_dialog_on,
                    timeout: 400,
                    classNames: 'acc-switcher-wrapper',
                    unmountOnExit: true
                },
                _react2.default.createElement(
                    'div',
                    { className: 'acc-switcher-wrapper' },
                    _react2.default.createElement(_AccountSwitcher.AccountSwitcher, {
                        is_visible: is_dialog_on,
                        toggle: toggleDialog,
                        is_upgrade_enabled: is_upgrade_enabled,
                        onClickUpgrade: onClickUpgrade
                    })
                )
            )
        ),
        typeof balance !== 'undefined' && _react2.default.createElement(
            'p',
            { className: 'acc-balance-amount' },
            _react2.default.createElement(
                'i',
                null,
                _react2.default.createElement('span', { className: 'symbols ' + (currency || '').toLowerCase() })
            ),
            balance
        )
    );
};

AccountInfo.propTypes = {
    account_type: _propTypes2.default.string,
    balance: _propTypes2.default.string,
    currency: _propTypes2.default.string,
    is_dialog_on: _propTypes2.default.bool,
    is_upgrade_enabled: _propTypes2.default.bool,
    loginid: _propTypes2.default.string,
    onClickUpgrade: _propTypes2.default.func,
    toggleDialog: _propTypes2.default.func
};

exports.AccountInfo = AccountInfo;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/index.js":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _account_info = __webpack_require__(/*! ./account_info.jsx */ "./src/javascript/app_2/App/Components/Layout/Header/account_info.jsx");

Object.keys(_account_info).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _account_info[key];
    }
  });
});

var _install_pwa_button = __webpack_require__(/*! ./install_pwa_button.jsx */ "./src/javascript/app_2/App/Components/Layout/Header/install_pwa_button.jsx");

Object.keys(_install_pwa_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _install_pwa_button[key];
    }
  });
});

var _login_button = __webpack_require__(/*! ./login_button.jsx */ "./src/javascript/app_2/App/Components/Layout/Header/login_button.jsx");

Object.keys(_login_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login_button[key];
    }
  });
});

var _menu_links = __webpack_require__(/*! ./menu_links.jsx */ "./src/javascript/app_2/App/Components/Layout/Header/menu_links.jsx");

Object.keys(_menu_links).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menu_links[key];
    }
  });
});

var _toggle_menu_drawer = __webpack_require__(/*! ./toggle_menu_drawer.jsx */ "./src/javascript/app_2/App/Components/Layout/Header/toggle_menu_drawer.jsx");

Object.keys(_toggle_menu_drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle_menu_drawer[key];
    }
  });
});

var _toggle_notifications_drawer = __webpack_require__(/*! ./toggle_notifications_drawer.jsx */ "./src/javascript/app_2/App/Components/Layout/Header/toggle_notifications_drawer.jsx");

Object.keys(_toggle_notifications_drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle_notifications_drawer[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/install_pwa_button.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/install_pwa_button.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InstallPWAButton = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _button = __webpack_require__(/*! ../../Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstallPWAButton = function InstallPWAButton(_ref) {
    var prompt_event = _ref.prompt_event,
        onClick = _ref.onClick;


    var showPrompt = function showPrompt() {
        if (prompt_event) {
            prompt_event.prompt();
            prompt_event.userChoice.then(function (choice_result) {
                if (choice_result.outcome === 'accepted') {
                    onClick();
                }
            });
        }
    };

    return _react2.default.createElement(_button2.default, {
        className: 'primary orange',
        has_effect: true,
        text: (0, _localize.localize)('Install'),
        onClick: showPrompt
    });
};

InstallPWAButton.propTypes = {
    onClick: _propTypes2.default.func,
    prompt_event: _propTypes2.default.object
};

exports.InstallPWAButton = InstallPWAButton;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/login_button.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/login_button.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginButton = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _login = __webpack_require__(/*! ../../../../../_common/base/login */ "./src/javascript/_common/base/login.js");

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _button = __webpack_require__(/*! ../../Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginButton = function LoginButton() {
    return _react2.default.createElement(_button2.default, {
        className: 'secondary orange',
        has_effect: true,
        text: (0, _localize.localize)('Log in'),
        onClick: _login.redirectToLogin
    });
};

exports.LoginButton = LoginButton;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/menu_links.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/menu_links.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuLinks = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _symbol = __webpack_require__(/*! ../../../../../../images/app_2/header/symbol.svg */ "./src/images/app_2/header/symbol.svg");

var _symbol2 = _interopRequireDefault(_symbol);

var _InkBar = __webpack_require__(/*! ../../Elements/InkBar */ "./src/javascript/app_2/App/Components/Elements/InkBar/index.js");

var _InkBar2 = _interopRequireDefault(_InkBar);

var _Routes = __webpack_require__(/*! ../../Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuLinks = function MenuLinks(_ref) {
    var items = _ref.items;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'navbar-icons binary-logo' },
            _react2.default.createElement(_symbol2.default, { width: '30px', height: '30px' })
        ),
        !!items.length && _react2.default.createElement(
            _InkBar2.default,
            { className: 'menu-links' },
            items.map(function (item, idx) {
                return _react2.default.createElement(
                    _Routes.BinaryLink,
                    { key: idx, to: item.link_to },
                    _react2.default.createElement(
                        'span',
                        { title: item.text },
                        item.icon,
                        item.text
                    )
                );
            })
        )
    );
};

MenuLinks.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        icon: _propTypes2.default.shape({
            className: _propTypes2.default.string
        }),
        link_to: _propTypes2.default.string,
        text: _propTypes2.default.string
    }))
};

exports.MenuLinks = MenuLinks;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/toggle_menu_drawer.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/toggle_menu_drawer.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleMenuDrawer = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _NavBar = __webpack_require__(/*! ../../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Drawer = __webpack_require__(/*! ../../Elements/Drawer */ "./src/javascript/app_2/App/Components/Elements/Drawer/index.js");

var _menu_drawer = __webpack_require__(/*! ../../../Containers/Drawer/menu_drawer.jsx */ "./src/javascript/app_2/App/Containers/Drawer/menu_drawer.jsx");

var _menu_drawer2 = _interopRequireDefault(_menu_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleMenuDrawer = function ToggleMenuDrawer() {
    return _react2.default.createElement(
        _Drawer.ToggleDrawer,
        {
            alignment: 'left',
            icon: _react2.default.createElement(_NavBar.IconHamburger, null),
            icon_class: 'menu-toggle'
        },
        _react2.default.createElement(_menu_drawer2.default, null)
    );
};

exports.ToggleMenuDrawer = ToggleMenuDrawer;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Layout/Header/toggle_notifications_drawer.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Layout/Header/toggle_notifications_drawer.jsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleNotificationsDrawer = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _NavBar = __webpack_require__(/*! ../../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Drawer = __webpack_require__(/*! ../../Elements/Drawer */ "./src/javascript/app_2/App/Components/Elements/Drawer/index.js");

var _Notifications = __webpack_require__(/*! ../../Elements/Notifications */ "./src/javascript/app_2/App/Components/Elements/Notifications/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleNotificationsDrawer = function ToggleNotificationsDrawer() {
    return _react2.default.createElement(
        _Drawer.ToggleDrawer,
        {
            alignment: 'right',
            icon: _react2.default.createElement(_NavBar.IconBell, null),
            icon_class: 'notify-toggle'
        },
        _react2.default.createElement(_Notifications.Notifications, null)
    );
};

exports.ToggleNotificationsDrawer = ToggleNotificationsDrawer;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Routes/binary_link.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Routes/binary_link.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

var _routes_config = __webpack_require__(/*! ../../Constants/routes_config */ "./src/javascript/app_2/App/Constants/routes_config.js");

var _routes_config2 = _interopRequireDefault(_routes_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// TODO: solve circular dependency problem
// when binary link is imported into components present in routes config
// or into their descendants
var BinaryLink = function BinaryLink(_ref) {
    var to = _ref.to,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ['to', 'children']);

    var path = (0, _helpers.normalizePath)(to);
    var route = (0, _helpers.findRouteByPath)(path, (0, _routes_config2.default)());

    if (!route) {
        throw new Error('Route not found: ' + to);
    }

    return to ? _react2.default.createElement(
        _reactRouterDom.NavLink,
        _extends({ to: path, activeClassName: 'active', exact: route.exact }, props),
        children
    ) : _react2.default.createElement(
        'a',
        _extends({ href: 'javascript:;' }, props),
        children
    );
};

BinaryLink.propTypes = {
    children: _propTypes2.default.object,
    to: _propTypes2.default.string
};

exports.default = BinaryLink;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Routes/binary_routes.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Routes/binary_routes.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _routes_config = __webpack_require__(/*! ../../Constants/routes_config */ "./src/javascript/app_2/App/Constants/routes_config.js");

var _routes_config2 = _interopRequireDefault(_routes_config);

var _ui_loader = __webpack_require__(/*! ../Elements/ui_loader.jsx */ "./src/javascript/app_2/App/Components/Elements/ui_loader.jsx");

var _ui_loader2 = _interopRequireDefault(_ui_loader);

var _route_with_sub_routes = __webpack_require__(/*! ./route_with_sub_routes.jsx */ "./src/javascript/app_2/App/Components/Routes/route_with_sub_routes.jsx");

var _route_with_sub_routes2 = _interopRequireDefault(_route_with_sub_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BinaryRoutes = function BinaryRoutes(props) {
    return _react2.default.createElement(
        _react2.default.Suspense,
        { fallback: _react2.default.createElement(_ui_loader2.default, null) },
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            (0, _routes_config2.default)().map(function (route, idx) {
                return _react2.default.createElement(_route_with_sub_routes2.default, _extends({ key: idx }, route, props));
            })
        )
    );
};

exports.default = BinaryRoutes;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Routes/button_link.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Routes/button_link.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonLink = function ButtonLink(_ref) {
    var children = _ref.children,
        className = _ref.className,
        to = _ref.to;
    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: (0, _classnames2.default)('btn is-link', className, 'effect'),
            to: to
        },
        children
    );
};

ButtonLink.propTypes = {
    children: _propTypes2.default.object,
    className: _propTypes2.default.string,
    to: _propTypes2.default.string
};

exports.default = ButtonLink;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Routes/helpers.js":
/*!***************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Routes/helpers.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractPath = exports.getPath = exports.isRouteVisible = exports.findRouteByPath = exports.normalizePath = undefined;

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app_2/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizePath = exports.normalizePath = function normalizePath(path) {
    return (/^\//.test(path) ? path : '/' + (path || '')
    );
}; // Default to '/'

var findRouteByPath = exports.findRouteByPath = function findRouteByPath(path, routes_config) {
    var result = void 0;

    routes_config.some(function (route_info) {
        if ((0, _reactRouter.matchPath)(path, route_info)) {
            result = route_info;
            return true;
        } else if (route_info.routes) {
            result = findRouteByPath(path, route_info.routes);
            return result;
        }
        return false;
    });

    return result;
};

var isRouteVisible = exports.isRouteVisible = function isRouteVisible(route, is_logged_in) {
    return !(route && route.is_authenticated && !is_logged_in);
};

var getPath = exports.getPath = function getPath(route_path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.keys(params).reduce(function (p, name) {
        return p.replace(':' + name, params[name]);
    }, route_path);
};

var getContractPath = exports.getContractPath = function getContractPath(contract_id) {
    return getPath(_routes2.default.contract, { contract_id: contract_id });
};

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Routes/index.js":
/*!*************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Routes/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteWithSubRoutes = exports.default = exports.ButtonLink = exports.BinaryLink = undefined;

var _helpers = __webpack_require__(/*! ./helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpers[key];
    }
  });
});

var _binary_link = __webpack_require__(/*! ./binary_link.jsx */ "./src/javascript/app_2/App/Components/Routes/binary_link.jsx");

var _binary_link2 = _interopRequireDefault(_binary_link);

var _button_link = __webpack_require__(/*! ./button_link.jsx */ "./src/javascript/app_2/App/Components/Routes/button_link.jsx");

var _button_link2 = _interopRequireDefault(_button_link);

var _binary_routes = __webpack_require__(/*! ./binary_routes.jsx */ "./src/javascript/app_2/App/Components/Routes/binary_routes.jsx");

var _binary_routes2 = _interopRequireDefault(_binary_routes);

var _route_with_sub_routes = __webpack_require__(/*! ./route_with_sub_routes.jsx */ "./src/javascript/app_2/App/Components/Routes/route_with_sub_routes.jsx");

var _route_with_sub_routes2 = _interopRequireDefault(_route_with_sub_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BinaryLink = _binary_link2.default;
exports.ButtonLink = _button_link2.default;
exports.default = _binary_routes2.default;
exports.RouteWithSubRoutes = _route_with_sub_routes2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Routes/route_with_sub_routes.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Routes/route_with_sub_routes.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _login = __webpack_require__(/*! ../../../../_common/base/login */ "./src/javascript/_common/base/login.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app_2/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _gtm = __webpack_require__(/*! ../../../Utils/gtm */ "./src/javascript/app_2/Utils/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _login_prompt = __webpack_require__(/*! ../Elements/login_prompt.jsx */ "./src/javascript/app_2/App/Components/Elements/login_prompt.jsx");

var _login_prompt2 = _interopRequireDefault(_login_prompt);

var _app_config = __webpack_require__(/*! ../../Constants/app_config */ "./src/javascript/app_2/App/Constants/app_config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouteWithSubRoutes = function RouteWithSubRoutes(route) {
    var renderFactory = function renderFactory(props) {
        var result = null;
        if (route.component === _reactRouterDom.Redirect) {
            var to = route.to;

            // This if clause has been added just to remove '/index' from url in localhost env.
            if (route.path === _routes2.default.index) {
                var location = props.location;

                to = location.pathname.toLowerCase().replace(route.path, '');
            }
            result = _react2.default.createElement(_reactRouterDom.Redirect, { to: to });
        } else {
            result = route.is_authenticated && !route.is_logged_in ? _react2.default.createElement(_login_prompt2.default, { IconComponent: route.icon_component, onLogin: _login.redirectToLogin }) : _react2.default.createElement(route.component, _extends({}, props, { routes: route.routes }));
        }

        var title = route.title ? route.title + ' | ' : '';
        document.title = '' + title + _app_config.default_title;
        _gtm2.default.pushDataLayer({ event: 'page_load' });
        return result;
    };

    return _react2.default.createElement(_reactRouterDom.Route, {
        exact: route.exact,
        path: route.path,
        render: renderFactory
    });
};

exports.default = RouteWithSubRoutes;

/***/ }),

/***/ "./src/javascript/app_2/App/Constants/app_config.js":
/*!**********************************************************!*\
  !*** ./src/javascript/app_2/App/Constants/app_config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var website_name = exports.website_name = 'Binary.com';
var default_title = exports.default_title = website_name;

/***/ }),

/***/ "./src/javascript/app_2/App/Constants/header_links.js":
/*!************************************************************!*\
  !*** ./src/javascript/app_2/App/Constants/header_links.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../_common/localize */ "./src/javascript/_common/localize.js");

var _NavBar = __webpack_require__(/*! ../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Constants = __webpack_require__(/*! ../../Constants */ "./src/javascript/app_2/Constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header_links = [{
    icon: _react2.default.createElement(_NavBar.IconTrade, { className: 'ic-header__trade' }),
    text: (0, _localize.localize)('Trade'),
    link_to: _Constants.routes.trade
}, {
    icon: _react2.default.createElement(_NavBar.IconPortfolio, { className: 'ic-header__portfolio' }),
    text: (0, _localize.localize)('Portfolio'),
    link_to: _Constants.routes.portfolio
}, {
    icon: _react2.default.createElement(_NavBar.IconStatement, { className: 'ic-header__statement' }),
    text: (0, _localize.localize)('Statement'),
    link_to: _Constants.routes.statement
}];

exports.default = header_links;

/***/ }),

/***/ "./src/javascript/app_2/App/Constants/routes_config.js":
/*!*************************************************************!*\
  !*** ./src/javascript/app_2/App/Constants/routes_config.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _localize = __webpack_require__(/*! ../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Constants = __webpack_require__(/*! ../../Constants */ "./src/javascript/app_2/Constants/index.js");

var _NavBar = __webpack_require__(/*! ../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Trading = __webpack_require__(/*! ../../Modules/Trading */ "./src/javascript/app_2/Modules/Trading/index.js");

var _Trading2 = _interopRequireDefault(_Trading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractDetails = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | contract */ "contract").then(__webpack_require__.t.bind(null, /*! ../../Modules/Contract */ "./src/javascript/app_2/Modules/Contract/index.js", 7));
});
// import Statement       from 'Modules/Statement';

var Portfolio = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | portfolio */ "portfolio").then(__webpack_require__.t.bind(null, /*! ../../Modules/Portfolio */ "./src/javascript/app_2/Modules/Portfolio/index.js", 7));
});
var Settings = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | settings */ "settings").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/settings.jsx */ "./src/javascript/app_2/Modules/settings/settings.jsx", 7));
});
var Statement = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | statement */ "statement").then(__webpack_require__.t.bind(null, /*! ../../Modules/Statement */ "./src/javascript/app_2/Modules/Statement/index.js", 7));
});

// Settings Routes
var AccountPassword = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | account_password */ "account_password").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/account_password.jsx */ "./src/javascript/app_2/Modules/settings/sections/account_password.jsx", 7));
});
var ApiToken = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | api_toke */ "api_toke").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/api_token.jsx */ "./src/javascript/app_2/Modules/settings/sections/api_token.jsx", 7));
});
var AuthorizedApplications = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | authorized_application */ "authorized_application").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/authorized_applications.jsx */ "./src/javascript/app_2/Modules/settings/sections/authorized_applications.jsx", 7));
});
var CashierPassword = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | cashier_password */ "cashier_password").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/cashier_password.jsx */ "./src/javascript/app_2/Modules/settings/sections/cashier_password.jsx", 7));
});
var FinancialAssessment = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | financial_assessment */ "financial_assessment").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/financial_assessment.jsx */ "./src/javascript/app_2/Modules/settings/sections/financial_assessment.jsx", 7));
});
var Limits = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | limits */ "limits").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/limits.jsx */ "./src/javascript/app_2/Modules/settings/sections/limits.jsx", 7));
});
var LoginHistory = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | login_history */ "login_history").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/login_history.jsx */ "./src/javascript/app_2/Modules/settings/sections/login_history.jsx", 7));
});
var PersonalDetails = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | personal_details */ "personal_details").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/personal_details.jsx */ "./src/javascript/app_2/Modules/settings/sections/personal_details.jsx", 7));
});
var SelfExclusion = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | self_exclusion */ "self_exclusion").then(__webpack_require__.t.bind(null, /*! ../../Modules/settings/sections/self_exclusion.jsx */ "./src/javascript/app_2/Modules/settings/sections/self_exclusion.jsx", 7));
});

// Error Routes
var Page404 = (0, _react.lazy)(function () {
    return __webpack_require__.e(/*! import() | 404 */ "404").then(__webpack_require__.t.bind(null, /*! ../../Modules/Page404 */ "./src/javascript/app_2/Modules/Page404/index.js", 7));
});

var initRoutesConfig = function initRoutesConfig() {
    return [{ path: _Constants.routes.contract, component: ContractDetails, title: (0, _localize.localize)('Contract Details'), is_authenticated: true }, { path: _Constants.routes.index, component: _reactRouterDom.Redirect, title: '', to: '/trade' }, { path: _Constants.routes.portfolio, component: Portfolio, title: (0, _localize.localize)('Portfolio'), is_authenticated: true, icon_component: _NavBar.IconPortfolio }, { path: _Constants.routes.root, component: _reactRouterDom.Redirect, title: '', exact: true, to: '/trade' }, { path: _Constants.routes.statement, component: Statement, title: (0, _localize.localize)('Statement'), is_authenticated: true, icon_component: _NavBar.IconStatement }, { path: _Constants.routes.trade, component: _Trading2.default, title: (0, _localize.localize)('Trade'), exact: true }, {
        path: _Constants.routes.settings,
        component: Settings,
        is_authenticated: true,
        routes: [{ path: _Constants.routes.personal, component: PersonalDetails, title: (0, _localize.localize)('Personal Details') }, { path: _Constants.routes.financial, component: FinancialAssessment, title: (0, _localize.localize)('Financial Assessment') }, { path: _Constants.routes.account_password, component: AccountPassword, title: (0, _localize.localize)('Account Password') }, { path: _Constants.routes.cashier_password, component: CashierPassword, title: (0, _localize.localize)('Cashier Password') }, { path: _Constants.routes.exclusion, component: SelfExclusion, title: (0, _localize.localize)('Self Exclusion') }, { path: _Constants.routes.limits, component: Limits, title: (0, _localize.localize)('Account Limits') }, { path: _Constants.routes.history, component: LoginHistory, title: (0, _localize.localize)('Login History') }, { path: _Constants.routes.token, component: ApiToken, title: (0, _localize.localize)('API Token') }, { path: _Constants.routes.apps, component: AuthorizedApplications, title: (0, _localize.localize)('Authorized Applications') }]
    }, { path: _Constants.routes.error404, component: Page404, title: (0, _localize.localize)('Error 404') }];
};

var routes_config = void 0;

// For default page route if page/path is not found, must be kept at the end of routes_config array
var route_default = { component: Page404, title: (0, _localize.localize)('Error 404') };

var getRoutesConfig = function getRoutesConfig() {
    if (!routes_config) {
        routes_config = initRoutesConfig();
    }
    routes_config.push(route_default);
    return routes_config;
};

exports.default = getRoutesConfig;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/AccountSwitcher/account_switcher.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/AccountSwitcher/account_switcher.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountSwitcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _upgrade_button = __webpack_require__(/*! ../../Components/Elements/AccountSwitcher/upgrade_button.jsx */ "./src/javascript/app_2/App/Components/Elements/AccountSwitcher/upgrade_button.jsx");

var _Drawer = __webpack_require__(/*! ../../../Assets/Header/Drawer */ "./src/javascript/app_2/Assets/Header/Drawer/index.js");

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountSwitcher = function (_React$Component) {
    _inherits(AccountSwitcher, _React$Component);

    function AccountSwitcher() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AccountSwitcher);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccountSwitcher.__proto__ || Object.getPrototypeOf(AccountSwitcher)).call.apply(_ref, [this].concat(args))), _this), _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            var accounts_toggle_btn = !event.target.classList.contains('acc-info');
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target) && _this.props.is_visible && accounts_toggle_btn) {
                _this.props.toggle();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AccountSwitcher, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'doSwitch',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(loginid) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.props.toggle();
                                _context.next = 3;
                                return this.props.switchAccount(loginid);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function doSwitch(_x) {
                return _ref2.apply(this, arguments);
            }

            return doSwitch;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.is_logged_in) return false;

            return _react2.default.createElement(
                'div',
                { className: 'acc-switcher-list', ref: this.setWrapperRef },
                this.props.account_list.length > 0 && this.props.account_list.map(function (account) {
                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        { key: account.loginid },
                        _react2.default.createElement(
                            'div',
                            {
                                className: (0, _classnames2.default)('acc-switcher-account', account.icon),
                                onClick: _this2.doSwitch.bind(_this2, account.loginid)
                            },
                            _react2.default.createElement(
                                'span',
                                { className: 'acc-switcher-id' },
                                account.loginid
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'acc-switcher-type' },
                                account.title
                            )
                        )
                    );
                }),
                this.props.is_upgrade_enabled && _react2.default.createElement(
                    'div',
                    { className: 'acc-button' },
                    _react2.default.createElement(_upgrade_button.UpgradeButton, { onClick: this.props.onClickUpgrade })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'acc-logout', onClick: _Services.requestLogout },
                    _react2.default.createElement(
                        'span',
                        { className: 'acc-logout-text' },
                        (0, _localize.localize)('Log out')
                    ),
                    _react2.default.createElement(_Drawer.IconLogout, { className: 'drawer-icon' })
                )
            );
        }
    }]);

    return AccountSwitcher;
}(_react2.default.Component);

AccountSwitcher.propTypes = {
    account_list: _propTypes2.default.array,
    is_logged_in: _propTypes2.default.bool,
    is_upgrade_enabled: _propTypes2.default.bool,
    is_visible: _propTypes2.default.bool,
    onClickUpgrade: _propTypes2.default.func,
    toggle: _propTypes2.default.func
};

var account_switcher = (0, _connect.connect)(function (_ref3) {
    var client = _ref3.client;
    return {
        account_list: client.account_list,
        is_logged_in: client.is_logged_in,
        switchAccount: client.switchAccount
    };
})(AccountSwitcher);

exports.AccountSwitcher = account_switcher;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/AccountSwitcher/index.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/AccountSwitcher/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _account_switcher = __webpack_require__(/*! ./account_switcher.jsx */ "./src/javascript/app_2/App/Containers/AccountSwitcher/account_switcher.jsx");

Object.keys(_account_switcher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _account_switcher[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/DenialOfServiceModal/denial_of_service.jsx":
/*!****************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/DenialOfServiceModal/denial_of_service.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _url = __webpack_require__(/*! ../../../../_common/url */ "./src/javascript/_common/url.js");

var _url2 = _interopRequireDefault(_url);

var _full_page_modal = __webpack_require__(/*! ../../Components/Elements/FullPageModal/full_page_modal.jsx */ "./src/javascript/app_2/App/Components/Elements/FullPageModal/full_page_modal.jsx");

var _full_page_modal2 = _interopRequireDefault(_full_page_modal);

var _localize2 = __webpack_require__(/*! ../../Components/Elements/localize.jsx */ "./src/javascript/app_2/App/Components/Elements/localize.jsx");

var _localize3 = _interopRequireDefault(_localize2);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _onConfirm = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(client) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return client.switchAccount(client.virtual_account_loginid);

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function _onConfirm(_x) {
        return _ref.apply(this, arguments);
    };
}();

var onCancel = function onCancel() {
    window.location.href = _url2.default.urlFor('trading');
};

var DenialOfServiceModal = function DenialOfServiceModal(_ref2) {
    var client = _ref2.client,
        is_visible = _ref2.is_visible;
    return _react2.default.createElement(
        _full_page_modal2.default,
        {
            title: (0, _localize.localize)('Whoops!'),
            confirm_button_text: (0, _localize.localize)('Continue with my virtual account'),
            cancel_button_text: (0, _localize.localize)('Visit main website'),
            onConfirm: function onConfirm() {
                return _onConfirm(client);
            },
            onCancel: onCancel,
            is_visible: is_visible
        },
        _react2.default.createElement(_localize3.default, { str: 'You are not allowed to access this feature with your real money account at the moment.' })
    );
};

DenialOfServiceModal.propTypes = {
    client: _propTypes2.default.object,
    is_visible: _propTypes2.default.bool
};

var denial_of_service = (0, _connect.connect)(function (_ref3) {
    var client = _ref3.client;
    return {
        is_visible: !client.is_client_allowed_to_visit,
        client: client
    };
})(DenialOfServiceModal);
exports.default = denial_of_service;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/DenialOfServiceModal/index.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/DenialOfServiceModal/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _denial_of_service = __webpack_require__(/*! ./denial_of_service.jsx */ "./src/javascript/app_2/App/Containers/DenialOfServiceModal/denial_of_service.jsx");

var _denial_of_service2 = _interopRequireDefault(_denial_of_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _denial_of_service2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/Drawer/menu_drawer.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/Drawer/menu_drawer.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Drawer = __webpack_require__(/*! ../../Components/Elements/Drawer */ "./src/javascript/app_2/App/Components/Elements/Drawer/index.js");

var _Drawer2 = __webpack_require__(/*! ../../../Assets/Header/Drawer */ "./src/javascript/app_2/Assets/Header/Drawer/index.js");

var _NavBar = __webpack_require__(/*! ../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app_2/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuDrawer = function MenuDrawer(_ref) {
    var is_dark_mode = _ref.is_dark_mode,
        is_logged_in = _ref.is_logged_in,
        is_mobile = _ref.is_mobile,
        is_portfolio_drawer_on = _ref.is_portfolio_drawer_on,
        is_purchase_locked = _ref.is_purchase_locked,
        toggleDarkMode = _ref.toggleDarkMode,
        togglePortfolioDrawer = _ref.togglePortfolioDrawer,
        togglePurchaseLock = _ref.togglePurchaseLock;
    return _react2.default.createElement(
        'div',
        { className: 'drawer-items-container' },
        _react2.default.createElement(
            'div',
            { className: 'list-items-container' },
            is_mobile && _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_Drawer.DrawerItem, {
                    text: (0, _localize.localize)('Trade'),
                    icon: _react2.default.createElement(_NavBar.IconTrade, { className: 'drawer-icon' }),
                    link_to: _routes2.default.trade
                }),
                _react2.default.createElement(_Drawer.DrawerItem, {
                    text: (0, _localize.localize)('Portfolio'),
                    icon: _react2.default.createElement(_NavBar.IconPortfolio, { className: 'drawer-icon' }),
                    link_to: _routes2.default.portfolio
                }),
                _react2.default.createElement(_Drawer.DrawerItem, {
                    text: (0, _localize.localize)('Statement'),
                    icon: _react2.default.createElement(_NavBar.IconStatement, { className: 'drawer-icon' }),
                    link_to: _routes2.default.statement
                }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(_Drawer.DrawerToggle, {
                    text: (0, _localize.localize)('Dark Mode'),
                    toggle: toggleDarkMode,
                    to_toggle: is_dark_mode
                }),
                _react2.default.createElement(_Drawer.DrawerToggle, {
                    text: (0, _localize.localize)('Purchase Lock'),
                    toggle: togglePurchaseLock,
                    to_toggle: is_purchase_locked
                })
            )
        ),
        !!(is_logged_in && is_mobile) && _react2.default.createElement(
            'div',
            { className: 'drawer-footer' },
            _react2.default.createElement(_Drawer.DrawerItem, {
                icon: _react2.default.createElement(_Drawer2.IconLogout, { className: 'drawer-icon' }),
                text: (0, _localize.localize)('Logout'),
                custom_action: function custom_action() {
                    if (is_portfolio_drawer_on) {
                        togglePortfolioDrawer(); // TODO: hide drawer inside logout, once it is a mobx action
                    }
                    (0, _Services.requestLogout)();
                }
            })
        )
    );
};

MenuDrawer.propTypes = {
    is_dark_mode: _propTypes2.default.bool,
    is_logged_in: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_portfolio_drawer_on: _propTypes2.default.bool,
    is_purchase_confirmed: _propTypes2.default.bool,
    is_purchase_locked: _propTypes2.default.bool,
    toggleDarkMode: _propTypes2.default.func,
    togglePortfolioDrawer: _propTypes2.default.func,
    togglePurchaseConfirmation: _propTypes2.default.func,
    togglePurchaseLock: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var client = _ref2.client,
        ui = _ref2.ui;
    return {
        is_logged_in: client.is_logged_in,
        is_dark_mode: ui.is_dark_mode_on,
        is_mobile: ui.is_mobile,
        is_portfolio_drawer_on: ui.is_portfolio_drawer_on,
        is_purchase_confirmed: ui.is_purchase_confirm_on,
        is_purchase_locked: ui.is_purchase_lock_on,
        toggleDarkMode: ui.toggleDarkMode,
        togglePortfolioDrawer: ui.togglePortfolioDrawer,
        togglePurchaseConfirmation: ui.togglePurchaseConfirmation,
        togglePurchaseLock: ui.togglePurchaseLock
    };
})(MenuDrawer);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/Layout/app_contents.jsx":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/Layout/app_contents.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContents = function AppContents(_ref) {
    var children = _ref.children,
        is_portfolio_drawer_on = _ref.is_portfolio_drawer_on;
    return _react2.default.createElement(
        'div',
        {
            id: 'app_contents',
            className: (0, _classnames2.default)('app-contents', {
                'app-contents--show-portfolio-drawer': is_portfolio_drawer_on
            })
        },
        children
    );
};

AppContents.propTypes = {
    children: _propTypes2.default.any,
    is_portfolio_drawer_on: _propTypes2.default.bool
};

exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        is_portfolio_drawer_on: ui.is_portfolio_drawer_on
    };
})(AppContents));

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/Layout/footer.jsx":
/*!***************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/Layout/footer.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _server_time = __webpack_require__(/*! ../server_time.jsx */ "./src/javascript/app_2/App/Containers/server_time.jsx");

var _server_time2 = _interopRequireDefault(_server_time);

var _Footer = __webpack_require__(/*! ../../Components/Layout/Footer */ "./src/javascript/app_2/App/Components/Layout/Footer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
    var is_logged_in = _ref.is_logged_in,
        is_portfolio_drawer_on = _ref.is_portfolio_drawer_on,
        is_language_dialog_visible = _ref.is_language_dialog_visible,
        is_settings_dialog_on = _ref.is_settings_dialog_on,
        network_status = _ref.network_status,
        toggleSettingsDialog = _ref.toggleSettingsDialog,
        togglePortfolioDrawer = _ref.togglePortfolioDrawer;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Footer.NetworkStatus, { status: network_status }),
        _react2.default.createElement(_server_time2.default, null),
        _react2.default.createElement(
            'div',
            { className: 'footer-links' },
            is_logged_in && _react2.default.createElement(_Footer.TogglePortfolio, {
                is_portfolio_drawer_on: is_portfolio_drawer_on,
                togglePortfolioDrawer: togglePortfolioDrawer
            }),
            _react2.default.createElement(_Footer.ToggleFullScreen, null),
            _react2.default.createElement(_Footer.ToggleSettings, {
                is_settings_visible: is_settings_dialog_on,
                is_language_visible: is_language_dialog_visible,
                toggleSettings: toggleSettingsDialog
            })
        )
    );
};

Footer.propTypes = {
    is_language_dialog_visible: _propTypes2.default.bool,
    is_logged_in: _propTypes2.default.bool,
    is_portfolio_drawer_on: _propTypes2.default.bool,
    is_settings_dialog_on: _propTypes2.default.bool,
    network_status: _propTypes2.default.object,
    togglePortfolioDrawer: _propTypes2.default.func,
    toggleSettingsDialog: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var client = _ref2.client,
        common = _ref2.common,
        ui = _ref2.ui;
    return {
        is_logged_in: client.is_logged_in,
        is_language_dialog_visible: ui.is_language_dialog_on,
        is_portfolio_drawer_on: ui.is_portfolio_drawer_on,
        is_settings_dialog_on: ui.is_settings_dialog_on,
        network_status: common.network_status,
        togglePortfolioDrawer: ui.togglePortfolioDrawer,
        toggleSettingsDialog: ui.toggleSettingsDialog
    };
})(Footer);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/Layout/header.jsx":
/*!***************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/Layout/header.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _currency_base = __webpack_require__(/*! ../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _Header = __webpack_require__(/*! ../../Components/Layout/Header */ "./src/javascript/app_2/App/Components/Layout/Header/index.js");

var _header_links = __webpack_require__(/*! ../../Constants/header_links */ "./src/javascript/app_2/App/Constants/header_links.js");

var _header_links2 = _interopRequireDefault(_header_links);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var account_type = _ref.account_type,
        balance = _ref.balance,
        can_upgrade = _ref.can_upgrade,
        currency = _ref.currency,
        hideInstallButton = _ref.hideInstallButton,
        is_acc_switcher_on = _ref.is_acc_switcher_on,
        is_install_button_visible = _ref.is_install_button_visible,
        is_logged_in = _ref.is_logged_in,
        is_mobile = _ref.is_mobile,
        loginid = _ref.loginid,
        onClickUpgrade = _ref.onClickUpgrade,
        pwa_prompt_event = _ref.pwa_prompt_event,
        setPWAPromptEvent = _ref.setPWAPromptEvent,
        showInstallButton = _ref.showInstallButton,
        toggleAccountsDialog = _ref.toggleAccountsDialog;


    window.addEventListener('beforeinstallprompt', function (e) {
        console.log('Going to show the installation prompt'); // eslint-disable-line no-console

        e.preventDefault();

        setPWAPromptEvent(e);
        showInstallButton();
    });

    return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(
            'div',
            { className: 'menu-items' },
            _react2.default.createElement(
                'div',
                { className: 'menu-left' },
                is_mobile && _react2.default.createElement(_Header.ToggleMenuDrawer, null),
                _react2.default.createElement(_Header.MenuLinks, { items: _header_links2.default })
            ),
            _react2.default.createElement(
                'div',
                { className: 'menu-right' },
                _react2.default.createElement(
                    'div',
                    { className: 'acc-balance-container' },
                    is_install_button_visible && is_logged_in && _react2.default.createElement(_Header.InstallPWAButton, {
                        prompt_event: pwa_prompt_event,
                        onClick: hideInstallButton
                    }),
                    is_logged_in ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(_Header.AccountInfo, {
                            account_type: account_type,
                            balance: (0, _currency_base.formatMoney)(currency, balance, true),
                            is_upgrade_enabled: can_upgrade,
                            onClickUpgrade: onClickUpgrade,
                            currency: currency,
                            loginid: loginid,
                            is_dialog_on: is_acc_switcher_on,
                            toggleDialog: toggleAccountsDialog
                        })
                    ) : _react2.default.createElement(_Header.LoginButton, null)
                )
            ),
            _react2.default.createElement(_Header.ToggleNotificationsDrawer, null)
        )
    );
};

Header.propTypes = {
    account_type: _propTypes2.default.string,
    balance: _propTypes2.default.string,
    can_upgrade: _propTypes2.default.bool,
    currency: _propTypes2.default.string,
    hideInstallButton: _propTypes2.default.func,
    is_acc_switcher_on: _propTypes2.default.bool,
    is_dark_mode: _propTypes2.default.bool, // TODO: add dark theme handler
    is_install_button_visible: _propTypes2.default.bool,
    is_logged_in: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    loginid: _propTypes2.default.string,
    onClickUpgrade: _propTypes2.default.func, // TODO: add click handler
    pwa_prompt_event: _propTypes2.default.object,
    setPWAPromptEvent: _propTypes2.default.func,
    showInstallButton: _propTypes2.default.func,
    toggleAccountsDialog: _propTypes2.default.func
};

// need to wrap withRouter around connect
// to prevent updates on <MenuLinks /> from being blocked
exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref2) {
    var client = _ref2.client,
        ui = _ref2.ui;
    return {
        account_type: client.account_title,
        balance: client.balance,
        can_upgrade: client.can_upgrade,
        currency: client.currency,
        is_logged_in: client.is_logged_in,
        loginid: client.loginid,
        hideInstallButton: ui.hideInstallButton,
        is_acc_switcher_on: ui.is_accounts_switcher_on,
        is_dark_mode: ui.is_dark_mode_on,
        is_install_button_visible: ui.is_install_button_visible,
        is_mobile: ui.is_mobile,
        pwa_prompt_event: ui.pwa_prompt_event,
        setPWAPromptEvent: ui.setPWAPromptEvent,
        showInstallButton: ui.showInstallButton,
        toggleAccountsDialog: ui.toggleAccountsDialog
    };
})(Header));

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/Layout/theme_wrapper.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/Layout/theme_wrapper.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeWrapper = function ThemeWrapper(_ref) {
    var children = _ref.children,
        is_dark_theme = _ref.is_dark_theme;

    var theme_wrapper_class = (0, _classnames2.default)('theme-wrapper', {
        dark: is_dark_theme,
        light: !is_dark_theme
    });
    return _react2.default.createElement(
        'div',
        { id: 'theme_wrapper', className: theme_wrapper_class },
        children
    );
};

ThemeWrapper.propTypes = {
    children: _propTypes2.default.node,
    is_dark_theme: _propTypes2.default.bool
};

exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        is_dark_theme: ui.is_dark_mode_on
    };
})(ThemeWrapper));

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/Routes/routes.jsx":
/*!***************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/Routes/routes.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _Errors = __webpack_require__(/*! ../../Components/Elements/Errors */ "./src/javascript/app_2/App/Components/Elements/Errors/index.js");

var _Errors2 = _interopRequireDefault(_Errors);

var _Routes = __webpack_require__(/*! ../../Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

var _Routes2 = _interopRequireDefault(_Routes);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes(props) {
    if (props.has_error) {
        return _react2.default.createElement(_Errors2.default, props.error);
    }

    return _react2.default.createElement(_Routes2.default, { is_logged_in: props.is_logged_in });
};

Routes.propTypes = {
    error: _mobxReact.PropTypes.objectOrObservableObject,
    has_error: _propTypes2.default.bool,
    is_logged_in: _propTypes2.default.bool
};

// need to wrap withRouter around connect
// to prevent updates on <BinaryRoutes /> from being blocked
exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref) {
    var client = _ref.client,
        common = _ref.common;
    return {
        is_logged_in: client.is_logged_in,
        error: common.error,
        has_error: common.has_error
    };
})(Routes));

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/SettingsDialog/index.js":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/SettingsDialog/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSettings = exports.GeneralSettings = exports.ChartSettings = undefined;

var _settings_chart = __webpack_require__(/*! ./settings_chart.jsx */ "./src/javascript/app_2/App/Containers/SettingsDialog/settings_chart.jsx");

var _settings_chart2 = _interopRequireDefault(_settings_chart);

var _settings_general = __webpack_require__(/*! ./settings_general.jsx */ "./src/javascript/app_2/App/Containers/SettingsDialog/settings_general.jsx");

var _settings_general2 = _interopRequireDefault(_settings_general);

var _settings_language = __webpack_require__(/*! ./settings_language.jsx */ "./src/javascript/app_2/App/Containers/SettingsDialog/settings_language.jsx");

var _settings_language2 = _interopRequireDefault(_settings_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ChartSettings = _settings_chart2.default;
exports.GeneralSettings = _settings_general2.default;
exports.LanguageSettings = _settings_language2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/SettingsDialog/settings_chart.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/SettingsDialog/settings_chart.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _settings_control = __webpack_require__(/*! ../../Components/Elements/SettingsDialog/settings_control.jsx */ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_control.jsx");

var _settings_control2 = _interopRequireDefault(_settings_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartSettings = function ChartSettings(_ref) {
    var is_asset_visible = _ref.is_asset_visible,
        is_countdown_visible = _ref.is_countdown_visible,
        is_layout_default = _ref.is_layout_default,
        toggleAsset = _ref.toggleAsset,
        toggleCountdown = _ref.toggleCountdown,
        toggleLayout = _ref.toggleLayout;
    return _react2.default.createElement(
        'div',
        { className: 'tab-content' },
        _react2.default.createElement(
            'div',
            { className: 'chart-setting-container' },
            _react2.default.createElement(_settings_control2.default, {
                name: (0, _localize.localize)('Position'),
                toggle: toggleLayout,
                to_toggle: !is_layout_default,
                style: 'toggle-chart-layout'
            }),
            _react2.default.createElement(_settings_control2.default, {
                name: (0, _localize.localize)('Asset Information'),
                toggle: toggleAsset,
                to_toggle: is_asset_visible
            }),
            _react2.default.createElement(_settings_control2.default, {
                name: (0, _localize.localize)('Scale Countdown'),
                toggle: toggleCountdown,
                to_toggle: is_countdown_visible
            })
        )
    );
};

ChartSettings.propTypes = {
    is_asset_visible: _propTypes2.default.bool,
    is_countdown_visible: _propTypes2.default.bool,
    is_layout_default: _propTypes2.default.bool,
    toggleAsset: _propTypes2.default.func,
    toggleCountdown: _propTypes2.default.func,
    toggleLayout: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        is_layout_default: ui.is_chart_layout_default,
        is_asset_visible: ui.is_chart_asset_info_visible,
        is_countdown_visible: ui.is_chart_countdown_visible,
        toggleAsset: ui.toggleChartAssetInfo,
        toggleCountdown: ui.toggleChartCountdown,
        toggleLayout: ui.toggleChartLayout
    };
})(ChartSettings);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/SettingsDialog/settings_general.jsx":
/*!*********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/SettingsDialog/settings_general.jsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _settings_control = __webpack_require__(/*! ../../Components/Elements/SettingsDialog/settings_control.jsx */ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/settings_control.jsx");

var _settings_control2 = _interopRequireDefault(_settings_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralSettings = function GeneralSettings(_ref) {
    var curr_language = _ref.curr_language,
        is_dark_mode = _ref.is_dark_mode,
        is_purchase_confirmed = _ref.is_purchase_confirmed,
        is_purchase_locked = _ref.is_purchase_locked,
        showLanguage = _ref.showLanguage,
        toggleDarkMode = _ref.toggleDarkMode,
        togglePurchaseConfirmation = _ref.togglePurchaseConfirmation,
        togglePurchaseLock = _ref.togglePurchaseLock;
    return _react2.default.createElement(
        'div',
        { className: 'tab-content' },
        _react2.default.createElement(
            'div',
            { className: 'general-setting-container' },
            _react2.default.createElement(
                _settings_control2.default,
                {
                    name: (0, _localize.localize)('Language'),
                    onClick: showLanguage
                },
                _react2.default.createElement('i', { className: 'flag ic-flag-' + (curr_language || 'EN').toLowerCase() })
            ),
            _react2.default.createElement(_settings_control2.default, {
                name: (0, _localize.localize)('Dark Mode'),
                to_toggle: is_dark_mode,
                toggle: toggleDarkMode
            }),
            _react2.default.createElement(_settings_control2.default, {
                name: (0, _localize.localize)('Purchase Confirmation'),
                to_toggle: is_purchase_confirmed,
                toggle: togglePurchaseConfirmation
            }),
            _react2.default.createElement(_settings_control2.default, {
                name: (0, _localize.localize)('Purchase Lock'),
                to_toggle: is_purchase_locked,
                toggle: togglePurchaseLock
            })
        )
    );
};

GeneralSettings.propTypes = {
    curr_language: _propTypes2.default.string,
    is_dark_mode: _propTypes2.default.bool,
    is_language_visible: _propTypes2.default.bool,
    is_purchase_confirmed: _propTypes2.default.bool,
    is_purchase_locked: _propTypes2.default.bool,
    showLanguage: _propTypes2.default.func,
    toggleDarkMode: _propTypes2.default.func,
    togglePurchaseConfirmation: _propTypes2.default.func,
    togglePurchaseLock: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var common = _ref2.common,
        ui = _ref2.ui;
    return {
        curr_language: common.current_language,
        is_dark_mode: ui.is_dark_mode_on,
        is_language_visible: ui.is_language_dialog_on,
        is_purchase_confirmed: ui.is_purchase_confirm_on,
        is_purchase_locked: ui.is_purchase_lock_on,
        showLanguage: ui.showLanguageDialog,
        toggleDarkMode: ui.toggleDarkMode,
        togglePurchaseConfirmation: ui.togglePurchaseConfirmation,
        togglePurchaseLock: ui.togglePurchaseLock
    };
})(GeneralSettings);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/SettingsDialog/settings_language.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/SettingsDialog/settings_language.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _language_dialog = __webpack_require__(/*! ../../Components/Elements/SettingsDialog/language_dialog.jsx */ "./src/javascript/app_2/App/Components/Elements/SettingsDialog/language_dialog.jsx");

var _language_dialog2 = _interopRequireDefault(_language_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LanguageSettings = function LanguageSettings(_ref) {
    var hide = _ref.hide,
        is_visible = _ref.is_visible,
        is_settings_on = _ref.is_settings_on;
    return _react2.default.createElement(_language_dialog2.default, {
        hide: hide,
        is_visible: is_visible,
        is_settings_on: is_settings_on
    });
};

LanguageSettings.propTypes = {
    hide: _propTypes2.default.func,
    is_settings_on: _propTypes2.default.bool,
    is_visible: _propTypes2.default.bool
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        hide: ui.hideLanguageDialog,
        is_settings_on: ui.is_settings_dialog_on,
        is_visible: ui.is_language_dialog_on
    };
})(LanguageSettings);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/remaining_time.jsx":
/*!****************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/remaining_time.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _Date = __webpack_require__(/*! ../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemainingTime = function RemainingTime(_ref) {
    var _ref$end_time = _ref.end_time,
        end_time = _ref$end_time === undefined ? null : _ref$end_time,
        start_time = _ref.start_time;

    if (!+end_time || start_time.unix() > +end_time) {
        return '';
    }

    var remaining_time = (0, _Date.formatDuration)((0, _Date.getDiffDuration)(start_time.unix(), end_time));

    return _react2.default.createElement(
        'div',
        { className: 'remaining-time' },
        remaining_time
    );
};

RemainingTime.propTypes = {
    end_time: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    start_time: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var common = _ref2.common;
    return {
        start_time: common.server_time
    };
})(RemainingTime);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/server_time.jsx":
/*!*************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/server_time.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _Date = __webpack_require__(/*! ../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerTime = function ServerTime(_ref) {
    var server_time = _ref.server_time;

    var gmt_time = (0, _Date.toGMTFormat)(server_time);

    return _react2.default.createElement(
        'div',
        { className: 'server-time' },
        gmt_time
    );
};

ServerTime.propTypes = {
    server_time: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var common = _ref2.common;
    return {
        server_time: common.server_time
    };
})(ServerTime);

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/toast_message.jsx":
/*!***************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/toast_message.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _ToastMessage = __webpack_require__(/*! ../Components/Elements/ToastMessage */ "./src/javascript/app_2/App/Components/Elements/ToastMessage/index.js");

var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastMessage = function (_React$Component) {
    _inherits(ToastMessage, _React$Component);

    function ToastMessage() {
        _classCallCheck(this, ToastMessage);

        return _possibleConstructorReturn(this, (ToastMessage.__proto__ || Object.getPrototypeOf(ToastMessage)).apply(this, arguments));
    }

    _createClass(ToastMessage, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('toast', this.props.position) },
                this.props.toast_messages.map(function (toast, id) {
                    return _react2.default.createElement(_ToastMessage2.default, {
                        key: id,
                        data: toast,
                        removeToastMessage: _this2.props.removeToastMessage
                    });
                })
            );
        }
    }]);

    return ToastMessage;
}(_react2.default.Component);

ToastMessage.propTypes = {
    position: _propTypes2.default.string,
    removeToastMessage: _propTypes2.default.func,
    toast_messages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        closeOnClick: _propTypes2.default.func,
        delay: _propTypes2.default.number,
        is_auto_close: _propTypes2.default.bool,
        message: _propTypes2.default.node,
        position: _propTypes2.default.string,
        type: _propTypes2.default.string
    }))
};

exports.default = (0, _connect.connect)(function (_ref) {
    var ui = _ref.ui;
    return {
        removeToastMessage: ui.removeToastMessage,
        toast_messages: ui.toast_messages
    };
})(ToastMessage);

/***/ }),

/***/ "./src/javascript/app_2/App/app.js":
/*!*****************************************!*\
  !*** ./src/javascript/app_2/App/app.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _client_base = __webpack_require__(/*! ../../_common/base/client_base */ "./src/javascript/_common/base/client_base.js");

var _client_base2 = _interopRequireDefault(_client_base);

var _network_monitor = __webpack_require__(/*! ../Services/network_monitor */ "./src/javascript/app_2/Services/network_monitor.js");

var _network_monitor2 = _interopRequireDefault(_network_monitor);

var _outdated_browser = __webpack_require__(/*! ../Services/outdated_browser */ "./src/javascript/app_2/Services/outdated_browser.js");

var _outdated_browser2 = _interopRequireDefault(_outdated_browser);

var _Stores = __webpack_require__(/*! ../Stores */ "./src/javascript/app_2/Stores/index.js");

var _Stores2 = _interopRequireDefault(_Stores);

var _storage = __webpack_require__(/*! ../Utils/Events/storage */ "./src/javascript/app_2/Utils/Events/storage.js");

var _app = __webpack_require__(/*! ./app.jsx */ "./src/javascript/app_2/App/app.jsx");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mobx.configure)({ enforceActions: true });

var initApp = function initApp() {
    _client_base2.default.init();

    (0, _storage.setStorageEvents)();

    var root_store = new _Stores2.default();

    _network_monitor2.default.init(root_store);
    _outdated_browser2.default.init(root_store);
    root_store.client.init();
    root_store.modules.trade.init();

    var app = document.getElementById('binary_app');

    if (app) {
        (0, _reactDom.render)(_react2.default.createElement(_app2.default, { root_store: root_store }), app);
    }
};

exports.default = initApp;

/***/ }),

/***/ "./src/javascript/app_2/App/app.jsx":
/*!******************************************!*\
  !*** ./src/javascript/app_2/App/app.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _base_name = __webpack_require__(/*! ../Utils/URL/base_name */ "./src/javascript/app_2/Utils/URL/base_name.js");

var _base_name2 = _interopRequireDefault(_base_name);

var _connect = __webpack_require__(/*! ../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _error_boundary = __webpack_require__(/*! ./Components/Elements/Errors/error_boundary.jsx */ "./src/javascript/app_2/App/Components/Elements/Errors/error_boundary.jsx");

var _error_boundary2 = _interopRequireDefault(_error_boundary);

var _PortfolioDrawer = __webpack_require__(/*! ./Components/Elements/PortfolioDrawer */ "./src/javascript/app_2/App/Components/Elements/PortfolioDrawer/index.js");

var _PortfolioDrawer2 = _interopRequireDefault(_PortfolioDrawer);

var _ToastMessage = __webpack_require__(/*! ./Components/Elements/ToastMessage */ "./src/javascript/app_2/App/Components/Elements/ToastMessage/index.js");

var _toast_message = __webpack_require__(/*! ./Containers/toast_message.jsx */ "./src/javascript/app_2/App/Containers/toast_message.jsx");

var _toast_message2 = _interopRequireDefault(_toast_message);

var _app_contents = __webpack_require__(/*! ./Containers/Layout/app_contents.jsx */ "./src/javascript/app_2/App/Containers/Layout/app_contents.jsx");

var _app_contents2 = _interopRequireDefault(_app_contents);

var _footer = __webpack_require__(/*! ./Containers/Layout/footer.jsx */ "./src/javascript/app_2/App/Containers/Layout/footer.jsx");

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(/*! ./Containers/Layout/header.jsx */ "./src/javascript/app_2/App/Containers/Layout/header.jsx");

var _header2 = _interopRequireDefault(_header);

var _theme_wrapper = __webpack_require__(/*! ./Containers/Layout/theme_wrapper.jsx */ "./src/javascript/app_2/App/Containers/Layout/theme_wrapper.jsx");

var _theme_wrapper2 = _interopRequireDefault(_theme_wrapper);

var _routes = __webpack_require__(/*! ./Containers/Routes/routes.jsx */ "./src/javascript/app_2/App/Containers/Routes/routes.jsx");

var _routes2 = _interopRequireDefault(_routes);

var _DenialOfServiceModal = __webpack_require__(/*! ./Containers/DenialOfServiceModal */ "./src/javascript/app_2/App/Containers/DenialOfServiceModal/index.js");

var _DenialOfServiceModal2 = _interopRequireDefault(_DenialOfServiceModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var root_store = _ref.root_store;
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { basename: (0, _base_name2.default)() },
        _react2.default.createElement(
            _connect.MobxProvider,
            { store: root_store },
            _react2.default.createElement(
                _theme_wrapper2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'header' },
                    _react2.default.createElement(_header2.default, null)
                ),
                _react2.default.createElement(
                    _error_boundary2.default,
                    null,
                    _react2.default.createElement(
                        _app_contents2.default,
                        null,
                        _react2.default.createElement(_routes2.default, null),
                        _react2.default.createElement(_PortfolioDrawer2.default, null),
                        _react2.default.createElement(_toast_message2.default, { position: _ToastMessage.POSITIONS.TOP_RIGHT })
                    ),
                    _react2.default.createElement(_DenialOfServiceModal2.default, null)
                ),
                _react2.default.createElement(
                    'footer',
                    { id: 'footer' },
                    _react2.default.createElement(_footer2.default, null)
                )
            )
        )
    );
};

App.propTypes = {
    root_store: _propTypes2.default.object
};

exports.default = App;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Common/icon_arrow.jsx":
/*!***********************************************************!*\
  !*** ./src/javascript/app_2/Assets/Common/icon_arrow.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconArrow = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconArrow = function IconArrow(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, width: '16', height: '16', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement('path', { className: 'arrow-path', d: 'M13.164 5.13a.5.5 0 1 1 .672.74l-5.5 5a.5.5 0 0 1-.672 0l-5.5-5a.5.5 0 0 1 .672-.74L8 9.824l5.164-4.694z', fill: '#D2D3DA', fillRule: 'nonzero' })
    );
};

IconArrow.propTypes = {
    className: _propTypes2.default.string
};

exports.IconArrow = IconArrow;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Common/icon_back.jsx":
/*!**********************************************************!*\
  !*** ./src/javascript/app_2/Assets/Common/icon_back.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconBack = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconBack = function IconBack(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { fill: '#333', fillRule: 'nonzero', d: 'M3.6 8.5L7 12.2a.5.5 0 1 1-.8.6l-4-4.5a.5.5 0 0 1 0-.6l4-4.5a.5.5 0 0 1 .8.6L3.6 7.5h9.9a.5.5 0 1 1 0 1H3.6z' })
    );
};

IconBack.propTypes = {
    className: _propTypes2.default.string
};

exports.IconBack = IconBack;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Common/icon_close.jsx":
/*!***********************************************************!*\
  !*** ./src/javascript/app_2/Assets/Common/icon_close.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconClose = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconClose = function IconClose(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { className: 'color1-fill', fill: '#2A3052', fillRule: 'nonzero', d: 'M8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293z' })
    );
};

IconClose.propTypes = {
    className: _propTypes2.default.string
};

exports.IconClose = IconClose;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Common/icon_error.jsx":
/*!***********************************************************!*\
  !*** ./src/javascript/app_2/Assets/Common/icon_error.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconError = function IconError() {
    return (/* { type } */ // TODO: add icon for different types of error
        _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', width: '64', height: '64', viewBox: '0 0 64 64' },
            _react2.default.createElement(
                'g',
                { fill: 'none', fillRule: 'evenodd' },
                _react2.default.createElement('circle', { cx: '32', cy: '32', r: '32', fill: '#FFC107' }),
                _react2.default.createElement(
                    'g',
                    { fill: '#FFF', transform: 'matrix(1 0 0 -1 26 48)' },
                    _react2.default.createElement('circle', { cx: '6', cy: '4', r: '4' }),
                    _react2.default.createElement('path', { d: 'M6 12a4 4 0 0 1 4 4v12a4 4 0 1 1-8 0V16a4 4 0 0 1 4-4z' })
                )
            )
        )
    );
};

exports.default = IconError;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Common/icon_exclamation.jsx":
/*!*****************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Common/icon_exclamation.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconExclamation = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconExclamation = function IconExclamation(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', fill: '#FFC107' }),
            _react2.default.createElement(
                'g',
                { fill: '#FFF', transform: 'matrix(1 0 0 -1 6.5 12)' },
                _react2.default.createElement('circle', { cx: '1.5', cy: '1', r: '1' }),
                _react2.default.createElement('path', { d: 'M1.5 3c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0V4c0-.6.4-1 1-1z' })
            )
        )
    );
};

IconExclamation.propTypes = {
    className: _propTypes2.default.string
};

exports.IconExclamation = IconExclamation;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Common/index.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app_2/Assets/Common/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon_arrow = __webpack_require__(/*! ./icon_arrow.jsx */ "./src/javascript/app_2/Assets/Common/icon_arrow.jsx");

Object.keys(_icon_arrow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_arrow[key];
    }
  });
});

var _icon_back = __webpack_require__(/*! ./icon_back.jsx */ "./src/javascript/app_2/Assets/Common/icon_back.jsx");

Object.keys(_icon_back).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_back[key];
    }
  });
});

var _icon_close = __webpack_require__(/*! ./icon_close.jsx */ "./src/javascript/app_2/Assets/Common/icon_close.jsx");

Object.keys(_icon_close).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_close[key];
    }
  });
});

var _icon_exclamation = __webpack_require__(/*! ./icon_exclamation.jsx */ "./src/javascript/app_2/Assets/Common/icon_exclamation.jsx");

Object.keys(_icon_exclamation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_exclamation[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Assets/Contract/icon_entry_spot.jsx":
/*!******************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Contract/icon_entry_spot.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconEntrySpot = function IconEntrySpot() {
    return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('path', { d: 'M0 0h16v16H0z' }),
            _react2.default.createElement('path', { fill: '#fff', fillRule: 'nonzero', d: 'M9.033 7.912c-1.107 1.014-2.214 2.03-3.33 3.037L5.701 8.84H0V6.88h5.7c.001-.979.002-1.822.005-2.107 1.099.982 2.178 1.987 3.27 2.977.044.047.151.108.058.16z' }),
            _react2.default.createElement('path', { fill: '#fff', fillRule: 'nonzero', d: 'M7.66 3.005c2.9 0 5.258 2.244 5.258 5 0 2.757-2.357 5-5.258 5a5.329 5.329 0 0 1-4.178-2h-2.46c1.184 2.361 3.71 4 6.638 4 4.059 0 7.361-3.14 7.361-7s-3.302-7-7.36-7c-2.929 0-5.455 1.64-6.64 4h2.46a5.33 5.33 0 0 1 4.18-2z' })
        )
    );
};

IconEntrySpot.propTypes = {
    color: _propTypes2.default.string
};

exports.default = (0, _mobxReact.observer)(IconEntrySpot);

/***/ }),

/***/ "./src/javascript/app_2/Assets/Contract/icon_flag.jsx":
/*!************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Contract/icon_flag.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconFlag = function IconFlag() {
    return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('path', { d: 'M0 0h16v16H0z' }),
            _react2.default.createElement('path', { className: 'color1-fill', fill: '#fff', fillRule: 'nonzero', d: 'M5.736 15.144c.082.377-.181.745-.588.821-.406.076-.802-.167-.885-.545L1.084.856c-.082-.377.181-.745.588-.821.406-.077.802.167.885.544l3.179 14.565zM13.136 1.235c-2.8.256-3.3-1.03-5.971-.993C5.638.264 4.12.638 3.364.917l1.897 8.692c.462-.153 1.14-.284 2.054-.22 1.213.083 1.667.897 4.38.708 1.952-.137 3.029-1.223 3.029-1.223l.873-8.548s-.544.734-2.461.91z' })
        )
    );
};

IconFlag.propTypes = {
    color: _propTypes2.default.string
};

exports.default = (0, _mobxReact.observer)(IconFlag);

/***/ }),

/***/ "./src/javascript/app_2/Assets/Contract/icon_tick.jsx":
/*!************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Contract/icon_tick.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTick = function IconTick() {
    return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', fill: '#4caf50' }),
            _react2.default.createElement('path', { fill: '#fff', fillRule: 'nonzero', d: 'M6.5 10.793l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 10.793z' })
        )
    );
};

IconTick.propTypes = {
    circle_color: _propTypes2.default.string,
    tick_color: _propTypes2.default.string
};

exports.default = (0, _mobxReact.observer)(IconTick);

/***/ }),

/***/ "./src/javascript/app_2/Assets/Footer/icon_maximize.jsx":
/*!**************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Footer/icon_maximize.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconMaximize = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconMaximize = function IconMaximize(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement('path', { className: 'color1-stroke color3-stroke', d: 'M1.5 10.5v4m4 0h-4m9 0h4m0 0v-4m0-9v4m0-4h-4m-5 0h-4m0 0v4', fill: 'none', strokeLinecap: 'square', stroke: '#2A3052' })
    );
};

IconMaximize.propTypes = {
    className: _propTypes2.default.string
};

exports.IconMaximize = IconMaximize;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Footer/icon_quick_portfolio.jsx":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Footer/icon_quick_portfolio.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconQuickPortfolio = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconQuickPortfolio = function IconQuickPortfolio(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 12' },
        _react2.default.createElement('path', { className: 'color1-fill color3-fill', fill: '#2A3052', fillRule: 'evenodd', d: 'M1 0h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 1v10h5V1H1zm6 0v10h8V1H7zm1.5 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm2 0h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1zm-2 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm2 0h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1zm-2 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm2 0h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1zm-2 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm2 0h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1z' })
    );
};

IconQuickPortfolio.propTypes = {
    className: _propTypes2.default.string
};

exports.IconQuickPortfolio = IconQuickPortfolio;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Footer/icon_settings.jsx":
/*!**************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Footer/icon_settings.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconSettings = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconSettings = function IconSettings(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { className: 'color1-fill color3-fill', fill: '#2A3052', d: 'M15 6.9v-.4L13.8 6a6 6 0 0 0-.4-.9l.6-1-.2-.4a7.3 7.3 0 0 0-1.6-1.6l-.3-.2-1.1.5a6.1 6.1 0 0 0-1-.3L9.6 1h-.4A7 7 0 0 0 8 .9a7.1 7.1 0 0 0-1.1 0l-.4.1L6 2.2a6.3 6.3 0 0 0-.9.3l-1-.5-.4.2a7.2 7.2 0 0 0-1.6 1.6l-.2.3.5 1.1-.3 1-1.2.3v.4A7.2 7.2 0 0 0 .9 8v1.1l.1.4 1.2.4c0 .3.2.6.4.9l-.6 1 .2.4a7 7 0 0 0 1.6 1.6l.3.2 1.1-.6 1 .4.3 1.2h.4A7.2 7.2 0 0 0 9 15h.4l.4-1.2a6.5 6.5 0 0 0 .9-.3l1 .5.4-.2.8-.8a7.2 7.2 0 0 0 .8-.8l.2-.3-.5-1.1.3-1 1.2-.3v-.4l.1-1.1a6.3 6.3 0 0 0 0-1.1zm-1 1v.7l-.6.2-.5.2-.1.5-.4.8-.2.5.5 1a5.7 5.7 0 0 1-.5.4 5.2 5.2 0 0 1-.4.5l-1-.5-.5.2a5.2 5.2 0 0 1-.8.4l-.5.1-.2.5-.1.6a5.3 5.3 0 0 1-1.3 0l-.2-.6-.2-.5-.5-.1a4.7 4.7 0 0 1-.8-.4l-.5-.2-.4.2-.5.3a5.6 5.6 0 0 1-1-1l.5-1-.2-.4a4.8 4.8 0 0 1-.4-.8L3.1 9l-1-.3a5.3 5.3 0 0 1 0-1.4L3 7l.1-.5.4-.8.2-.5-.2-.4-.3-.6a6 6 0 0 1 1-.9l1 .5.4-.2.8-.4.5-.1.2-.5.1-.6a6 6 0 0 1 1.4 0L9 3l.5.2.8.4.5.2 1-.5.9 1-.5 1 .2.4.4.8.1.5.5.2.6.1V8zM8 5.4A2.7 2.7 0 0 0 5.3 8 2.7 2.7 0 0 0 8 10.7 2.7 2.7 0 0 0 10.7 8 2.7 2.7 0 0 0 8 5.3zM9.1 9a1.6 1.6 0 0 1-1.1.5c-.4 0-.8-.2-1.1-.5A1.6 1.6 0 0 1 6.4 8c0-.4.2-.8.5-1.1A1.6 1.6 0 0 1 8 6.4c.4 0 .8.2 1.1.5a1.6 1.6 0 0 1 0 2.2z' })
    );
};

IconSettings.propTypes = {
    className: _propTypes2.default.string
};

exports.IconSettings = IconSettings;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Footer/index.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app_2/Assets/Footer/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon_maximize = __webpack_require__(/*! ./icon_maximize.jsx */ "./src/javascript/app_2/Assets/Footer/icon_maximize.jsx");

Object.keys(_icon_maximize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_maximize[key];
    }
  });
});

var _icon_quick_portfolio = __webpack_require__(/*! ./icon_quick_portfolio.jsx */ "./src/javascript/app_2/Assets/Footer/icon_quick_portfolio.jsx");

Object.keys(_icon_quick_portfolio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_quick_portfolio[key];
    }
  });
});

var _icon_settings = __webpack_require__(/*! ./icon_settings.jsx */ "./src/javascript/app_2/Assets/Footer/icon_settings.jsx");

Object.keys(_icon_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_settings[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/Drawer/icon_logout.jsx":
/*!*******************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/Drawer/icon_logout.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconLogout = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLogout = function IconLogout(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { className: 'color1-fill', fill: '#2A3052', fillRule: 'nonzero' },
            _react2.default.createElement('path', { d: 'M8.4 13.8c0 .8-.4 1.4-.9 1.4H2c-.5 0-1-.6-1-1.4V2.4C1 1.6 1.5 1 2 1h5.6c.5 0 .9.6.9 1.4 0 .2.1.4.4.4.2 0 .3-.2.3-.4C9.1 1.2 8.4.2 7.5.2H2C.9.2.2 1.2.2 2.4v11.4C.2 15 1 16 2 16h5.6c1 0 1.6-1 1.6-2.2 0-.2-.1-.4-.3-.4-.3 0-.4.2-.4.4z' }),
            _react2.default.createElement('path', { d: 'M4.8 8.5h10.4c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H4.8c-.2 0-.3.2-.3.4s.1.4.3.4z' }),
            _react2.default.createElement('path', { d: 'M11.3 4.4l3.8 4h.6v-.6l-4-4a.4.4 0 0 0-.4 0c-.2.2-.2.4 0 .6z' }),
            _react2.default.createElement('path', { d: 'M11.8 12.4l3.9-4v-.6a.4.4 0 0 0-.6 0l-3.8 4c-.2.2-.2.4 0 .6.1.2.3.2.5 0z' })
        )
    );
};

IconLogout.propTypes = {
    className: _propTypes2.default.string
};

exports.IconLogout = IconLogout;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/Drawer/index.js":
/*!************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/Drawer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon_logout = __webpack_require__(/*! ./icon_logout.jsx */ "./src/javascript/app_2/Assets/Header/Drawer/icon_logout.jsx");

Object.keys(_icon_logout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_logout[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/icon_bell.jsx":
/*!*****************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/icon_bell.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconBell = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconBell = function IconBell(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { className: 'color1-stroke', fill: 'none', fillRule: 'evenodd', stroke: '#2A3052' },
            _react2.default.createElement('path', { d: 'M12.8 11.6l-.3-.2V7a4.5 4.5 0 1 0-9 0v4.4l-.3.2a1 1 0 0 0 .3 1.9h9a1 1 0 0 0 .3-2z' }),
            _react2.default.createElement('path', { d: 'M7 2.5h2v-1a1 1 0 1 0-2 0v1zm-.5 11v.5a1.5 1.5 0 0 0 3 0v-.5h-3z' })
        )
    );
};

IconBell.propTypes = {
    className: _propTypes2.default.string
};

exports.IconBell = IconBell;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/icon_cashier.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/icon_cashier.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconCashier = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconCashier = function IconCashier(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('rect', { stroke: '#2A3052', x: '.5', y: '5.5', width: '15', height: '9', rx: '1' }),
            _react2.default.createElement('path', { fill: '#2A3052', d: 'M0 11h16v1H0z' }),
            _react2.default.createElement('path', { stroke: '#2A3052', d: 'M2.5 3.5h4v2h-4z' }),
            _react2.default.createElement('rect', { stroke: '#2A3052', x: '9.5', y: '1.5', width: '6', height: '2', rx: '1' }),
            _react2.default.createElement('path', { fill: '#2A3052', d: 'M12 4h1v1h-1z' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '10', y: '9', width: '4', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '10', y: '7', width: '4', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '8', y: '9', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '8', y: '7', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '6', y: '9', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '6', y: '7', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '4', y: '9', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '4', y: '7', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '2', y: '9', width: '1', height: '1', rx: '.5' }),
            _react2.default.createElement('rect', { fill: '#2A3052', x: '2', y: '7', width: '1', height: '1', rx: '.5' })
        )
    );
};

IconCashier.propTypes = {
    className: _propTypes2.default.string
};

exports.IconCashier = IconCashier;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/icon_hamburger.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/icon_hamburger.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconHamburger = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconHamburger = function IconHamburger(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement('path', { className: 'color1-fill', d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z', fill: '#000', fillRule: 'evenodd' })
    );
};

IconHamburger.propTypes = {
    className: _propTypes2.default.string
};

exports.IconHamburger = IconHamburger;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/icon_portfolio.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/icon_portfolio.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconPortfolio = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconPortfolio = function IconPortfolio(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { className: 'color2-fill', fill: 'none', fillRule: 'evenodd', stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { className: 'color1-stroke color2-fill color3-stroke', fill: 'none', stroke: '#2A3052', d: 'M1.5 14.5h13a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1z' }),
                _react2.default.createElement('path', { className: 'color1-stroke color3-stroke color4-fill portfolio-fix', stroke: '#2A3052', d: 'M5.5 3v-.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V3' }),
                _react2.default.createElement('path', { className: 'color1-stroke scale-fix', stroke: '#2A3052', strokeLinecap: 'square', d: 'M0 8l4.047 2.248a2 2 0 0 0 .971.252h5.964a2 2 0 0 0 .971-.252L16 8' }),
                _react2.default.createElement('path', { className: 'color1-stroke', stroke: '#2A3052', strokeLinecap: 'round', d: 'M6.5 8.5h3' })
            )
        )
    );
};

IconPortfolio.propTypes = {
    className: _propTypes2.default.string
};

exports.IconPortfolio = IconPortfolio;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/icon_statement.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/icon_statement.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconStatement = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconStatement = function IconStatement(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
            'g',
            { className: 'color2-fill', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                { className: 'color1-stroke', stroke: '#2A3052' },
                _react2.default.createElement('path', { d: 'M12.5 15.5V4.207L8.79.5H1a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h11.5zM12.5 6.5v9H14a1.5 1.5 0 0 0 1.5-1.5V7a.5.5 0 0 0-.5-.5h-2.5z' })
            ),
            _react2.default.createElement('path', { className: 'color1-fill', d: 'M3.5 5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0 2h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0 2h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1z', fill: '#2A3052' })
        )
    );
};

IconStatement.propTypes = {
    className: _propTypes2.default.string
};

exports.IconStatement = IconStatement;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/icon_trade.jsx":
/*!******************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/icon_trade.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconTrade = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTrade = function IconTrade(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
            'g',
            { className: 'color1-stroke color3-stroke', stroke: '#2A3052', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('path', { className: 'color2-fill stroke-fill', d: 'M.5 15.5h3V9a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0-.5.5v6.5zM6.5 15.5h3V5a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v10.5zM12.5 15.5h3V1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v14.5z' })
        )
    );
};

IconTrade.propTypes = {
    className: _propTypes2.default.string
};

exports.IconTrade = IconTrade;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Header/NavBar/index.js":
/*!************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Header/NavBar/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon_bell = __webpack_require__(/*! ./icon_bell.jsx */ "./src/javascript/app_2/Assets/Header/NavBar/icon_bell.jsx");

Object.keys(_icon_bell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_bell[key];
    }
  });
});

var _icon_cashier = __webpack_require__(/*! ./icon_cashier.jsx */ "./src/javascript/app_2/Assets/Header/NavBar/icon_cashier.jsx");

Object.keys(_icon_cashier).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_cashier[key];
    }
  });
});

var _icon_hamburger = __webpack_require__(/*! ./icon_hamburger.jsx */ "./src/javascript/app_2/Assets/Header/NavBar/icon_hamburger.jsx");

Object.keys(_icon_hamburger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_hamburger[key];
    }
  });
});

var _icon_portfolio = __webpack_require__(/*! ./icon_portfolio.jsx */ "./src/javascript/app_2/Assets/Header/NavBar/icon_portfolio.jsx");

Object.keys(_icon_portfolio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_portfolio[key];
    }
  });
});

var _icon_statement = __webpack_require__(/*! ./icon_statement.jsx */ "./src/javascript/app_2/Assets/Header/NavBar/icon_statement.jsx");

Object.keys(_icon_statement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_statement[key];
    }
  });
});

var _icon_trade = __webpack_require__(/*! ./icon_trade.jsx */ "./src/javascript/app_2/Assets/Header/NavBar/icon_trade.jsx");

Object.keys(_icon_trade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_trade[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Assets/Trading/Categories/icon_trade_categories.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Trading/Categories/icon_trade_categories.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconTradeCategory = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Types = __webpack_require__(/*! ../Types */ "./src/javascript/app_2/Assets/Trading/Types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTradeCategory = function IconTradeCategory(_ref) {
    var category = _ref.category;

    var IconCategory = void 0;
    if (category) {
        switch (category) {
            case 'rise_fall':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'call'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'put'
                        })
                    )
                );
                break;
            case 'high_low':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'call_barrier'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'put_barrier'
                        })
                    )
                );
                break;
            case 'end':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'expirymiss'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'expiryrange'
                        })
                    )
                );
                break;
            case 'stay':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'range'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'upordown'
                        })
                    )
                );
                break;
            case 'match_diff':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'digitmatch'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'digitdiff'
                        })
                    )
                );
                break;
            case 'even_odd':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'digitodd'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'digiteven'
                        })
                    )
                );
                break;
            case 'over_under':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'digitover'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'digitunder'
                        })
                    )
                );
                break;
            case 'touch':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'onetouch'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'notouch'
                        })
                    )
                );
                break;
            case 'asian':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'asianu'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_Types.IconTradeType, {
                            className: 'category-type',
                            type: 'asiand'
                        })
                    )
                );
                break;
            case 'lb_call':
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_Types.IconTradeType, {
                        className: 'category-type',
                        type: 'lbfloatcall'
                    })
                );
                break;
            case 'lb_put':
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_Types.IconTradeType, {
                        className: 'category-type',
                        type: 'lbfloatput'
                    })
                );
                break;
            case 'lb_high_low':
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_Types.IconTradeType, {
                        className: 'category-type',
                        type: 'lbhighlow'
                    })
                );
                break;
            default:
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_Types.IconTradeType, {
                        className: 'category-type',
                        type: 'unknown'
                    })
                );
                break;
        }
    }
    return _react2.default.createElement(
        'div',
        { className: 'categories-container' },
        IconCategory
    );
};

IconTradeCategory.propTypes = {
    category: _propTypes2.default.string
};

exports.IconTradeCategory = IconTradeCategory;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Trading/Categories/index.js":
/*!*****************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Trading/Categories/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon_trade_categories = __webpack_require__(/*! ./icon_trade_categories.jsx */ "./src/javascript/app_2/Assets/Trading/Categories/icon_trade_categories.jsx");

Object.keys(_icon_trade_categories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_trade_categories[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Assets/Trading/Types/icon_trade_types.jsx":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Trading/Types/icon_trade_types.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconTradeType = undefined;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTradeType = function IconTradeType(_ref) {
    var type = _ref.type,
        className = _ref.className;

    var IconType = void 0;
    if (type) {
        switch (type) {
            case 'asiand':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 16h16V0H0z' }),
                    _react2.default.createElement('path', { fill: '#2A3052', d: 'M1 10.667h13.333V9.334H1zM1 6.667h13.333v-1H1zM1 4h13.333V3H1z' }),
                    _react2.default.createElement('path', { fill: '#2A3052', fillRule: 'nonzero', d: 'M7.765 6.093l5.541 6.427-1.01.87-4.728-5.483L6.22 8.918l-4.737-5.83 1.034-.842 3.93 4.836z' }),
                    _react2.default.createElement('path', { fill: '#2A3052', d: 'M13.576 13.6v-2.208l-1.006-1.007v2.19h-2.266l1.052 1.025z' })
                );
                break;
            case 'asianu':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { fill: '#2A3052', d: 'M1 5.333h13.333v1.333H1zM1 9.333h13.333v1H1zM1 12h13.333v1H1z' }),
                    _react2.default.createElement('path', { fill: '#2A3052', fillRule: 'nonzero', d: 'M7.765 9.907l5.541-6.427-1.01-.87-4.728 5.483L6.22 7.082l-4.737 5.83 1.034.842 3.93-4.836z' }),
                    _react2.default.createElement('path', { fill: '#2A3052', d: 'M13.576 2.4v2.208L12.57 5.615v-2.19h-2.266L11.356 2.4z' })
                );
                break;
            case 'call_barrier':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052', fillRule: 'evenodd' },
                    _react2.default.createElement('rect', { x: '3', y: '8', width: '10', height: '1', rx: '.5' }),
                    _react2.default.createElement('path', { d: 'M3.812 8.11a.5.5 0 0 0-.624.78l2.5 2a.5.5 0 0 0 .68-.05l6-6.5a.5.5 0 0 0-.735-.68L5.949 9.82l-2.137-1.71z', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M12 4v1.5a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1H12z', fillRule: 'nonzero' })
                );
                break;
            case 'call':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052' },
                    _react2.default.createElement('path', { d: 'M3.812 8.11a.5.5 0 0 0-.624.78l2.5 2a.5.5 0 0 0 .68-.05l6-6.5a.5.5 0 0 0-.735-.68L5.949 9.82 3.812 8.11z' }),
                    _react2.default.createElement('path', { d: 'M12 4v1.5a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1H12z' })
                );
                break;
            case 'calle_light':
                IconType = _react2.default.createElement('path', { d: 'M6.671 8l3.422-4.79A.5.5 0 0 1 10.5 3h1.79l-1.144-1.147a.5.5 0 1 1 .708-.706l1.963 1.966a.499.499 0 0 1 0 .774l-1.963 1.966a.5.5 0 0 1-.708-.706L12.291 4h-1.534L7.9 8h4.6a.5.5 0 1 1 0 1H7.186l-1.28 1.79a.5.5 0 0 1-.76.064l-2-2A.498.498 0 0 1 3.5 8h3.171zm-.714 1h-1.25l.73.73.52-.73zm6.897-2.147a.5.5 0 0 1-.708-.706l1.997-2a.5.5 0 1 1 .707.706l-1.996 2z', fill: '#2A3052', fillRule: 'evenodd' });
                break;
            case 'digitdiff':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { d: 'M5.5 6.75h-4v-1.5h4L4.5 4H6l1.5 2L6 8H4.5l1-1.25zM10.5 11.75h4v-1.5h-4l1-1.25H10l-1.5 2 1.5 2h1.5l-1-1.25zM7.5 0h1v16h-1z', fill: '#2A3052' })
                );
                break;
            case 'digiteven':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { d: 'M4.5 11.5h7v-7h-7v7zm8-8v9h-9v-9h9z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M2.698 9.5H.218v-.537L1.36 7.762c.281-.32.422-.576.422-.764 0-.153-.033-.27-.1-.35-.067-.08-.163-.12-.29-.12a.362.362 0 0 0-.306.16.657.657 0 0 0-.117.4H.144A1.167 1.167 0 0 1 .762 6.05c.193-.104.41-.156.65-.156.383 0 .68.089.887.266.207.178.31.432.31.764 0 .14-.025.277-.077.41a1.793 1.793 0 0 1-.243.417 6.12 6.12 0 0 1-.531.584l-.46.53h1.4V9.5zM9.107 8.194h.47v.825h-.47V10h-1.07v-.98H6.252l-.064-.655 1.85-2.977v-.01h1.07v2.816zm-1.9 0h.83V6.772l-.066.108-.765 1.314zM15.205 5.894v.647h-.037c-.308 0-.56.074-.758.221a.933.933 0 0 0-.365.614.962.962 0 0 1 .703-.273c.308 0 .553.112.735.336.182.225.273.52.273.884 0 .226-.053.434-.16.623a1.141 1.141 0 0 1-.446.443c-.192.107-.404.16-.636.16-.253 0-.478-.058-.677-.172a1.183 1.183 0 0 1-.463-.492 1.62 1.62 0 0 1-.171-.738v-.33c0-.365.078-.695.235-.987.157-.292.381-.52.673-.687.291-.166.614-.249.97-.249h.124zm-.743 1.838a.47.47 0 0 0-.437.262v.246c0 .45.156.674.467.674.125 0 .23-.056.313-.168a.687.687 0 0 0 .126-.423.674.674 0 0 0-.128-.426.41.41 0 0 0-.34-.165z', fill: '#2A3052' })
                );
                break;
            case 'digitmatch':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { d: 'M5.5 8.75H2v-1.5h3.5L4.5 6H6l1.5 2L6 10H4.5l1-1.25zM10.5 8.75H14v-1.5h-3.5l1-1.25H10L8.5 8l1.5 2h1.5l-1-1.25zM7.5 0h1v16h-1z', fill: '#2A3052' })
                );
                break;
            case 'digitodd':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { d: 'M4.5 11.5h7v-7h-7v7zm8-8v9h-9v-9h9z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { fill: '#2A3052', d: 'M2.041 9.5h-.825V6.873l-.81.237v-.625l1.56-.54h.075zM7.26 7.242h.505c.4 0 .6-.196.6-.587a.508.508 0 0 0-.143-.373c-.096-.096-.23-.145-.403-.145a.58.58 0 0 0-.37.124.378.378 0 0 0-.157.308h-1.07c0-.243.068-.46.203-.65.136-.191.323-.34.564-.446.24-.107.504-.16.792-.16.514 0 .918.117 1.212.352.294.234.441.557.441.968 0 .198-.06.386-.182.563a1.3 1.3 0 0 1-.532.43c.245.089.438.224.578.405.14.18.21.404.21.67 0 .414-.16.744-.477.991-.317.248-.734.371-1.25.371a2.05 2.05 0 0 1-.843-.172 1.32 1.32 0 0 1-.589-.48 1.246 1.246 0 0 1-.2-.696h1.076c0 .141.057.264.171.368a.605.605 0 0 0 .423.155.634.634 0 0 0 .45-.157.525.525 0 0 0 .168-.401c0-.233-.058-.398-.174-.495-.116-.098-.277-.146-.482-.146H7.26v-.797zM13.266 7.762l.217-1.817h2.078v.64h-1.409l-.08.706a.973.973 0 0 1 .23-.09c.096-.027.189-.04.28-.04.353 0 .625.105.814.314.19.209.285.502.285.88 0 .228-.051.434-.153.619a1.049 1.049 0 0 1-.428.426c-.184.1-.402.149-.652.149-.223 0-.432-.046-.628-.138a1.126 1.126 0 0 1-.459-.379.92.92 0 0 1-.163-.543h.825c.008.13.05.234.124.31a.395.395 0 0 0 .296.115c.277 0 .415-.205.415-.615 0-.38-.17-.569-.508-.569-.192 0-.335.062-.43.186l-.654-.154z' })
                );
                break;
            case 'digitover':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('rect', { fill: '#2A3052', transform: 'rotate(180 8 8)', y: '7.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('path', { d: 'M12.866 5.834a.5.5 0 0 0 1 0V3.713a.5.5 0 0 0-.5-.5h-2.121a.5.5 0 0 0 0 1h1.62v1.621z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M.5 11a.5.5 0 1 0 0 1h5a.5.5 0 0 0 .354-.146l7.5-7.5a.5.5 0 0 0-.708-.708L5.293 11H.5z', fill: '#2A3052', fillRule: 'nonzero' })
                );
                break;
            case 'digitunder':
                IconType = _react2.default.createElement(
                    'g',
                    { transform: 'matrix(1 0 0 -1 0 16)', fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('rect', { fill: '#2A3052', transform: 'rotate(180 8 8)', y: '7.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('path', { d: 'M12.866 5.834a.5.5 0 0 0 1 0V3.713a.5.5 0 0 0-.5-.5h-2.121a.5.5 0 0 0 0 1h1.62v1.621z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M.5 11a.5.5 0 1 0 0 1h5a.5.5 0 0 0 .354-.146l7.5-7.5a.5.5 0 0 0-.708-.708L5.293 11H.5z', fill: '#2A3052', fillRule: 'nonzero' })
                );
                break;
            case 'expirymiss':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052', fillRule: 'evenodd' },
                    _react2.default.createElement('rect', { transform: 'rotate(180 8 5)', y: '4.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('rect', { transform: 'rotate(180 8 11)', y: '10.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement(
                        'g',
                        { fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M13.646 3.146a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708L14.793 2l-1.147 1.146z' }),
                        _react2.default.createElement('path', { d: 'M15.5 1.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z' })
                    )
                );
                break;
            case 'expiryrange':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052', fillRule: 'evenodd' },
                    _react2.default.createElement('rect', { transform: 'rotate(180 8 5)', y: '4.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('rect', { transform: 'rotate(180 8 11)', y: '10.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement(
                        'g',
                        { fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M13.646 9.146a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708L14.793 8l-1.147 1.146z' }),
                        _react2.default.createElement('path', { d: 'M15.5 7.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z' })
                    )
                );
                break;
            case 'expiryrangee':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052', fillRule: 'evenodd' },
                    _react2.default.createElement('rect', { transform: 'rotate(180 8 5)', y: '4.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('rect', { transform: 'rotate(180 8 11)', y: '10.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement(
                        'g',
                        { fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M13.646 9.146a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708L14.793 8l-1.147 1.146z' }),
                        _react2.default.createElement('path', { d: 'M15.5 7.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z' })
                    )
                );
                break;
            case 'lbfloatcall':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 16h16V0H0z' }),
                    _react2.default.createElement('path', { d: 'M.5 11a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement(
                        'g',
                        { fill: '#2A3052', fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M12.5 9V3a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0z' }),
                        _react2.default.createElement('path', { d: 'M13.021 8.586l1.061-1.06a.5.5 0 1 1 .707.706l-1.414 1.414a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.06 1.06zM13.021 3.172l1.061 1.06a.5.5 0 1 0 .707-.707l-1.414-1.414a.5.5 0 0 0-.707 0l-1.414 1.414a.5.5 0 0 0 .707.707l1.06-1.06z' })
                    ),
                    _react2.default.createElement(
                        'g',
                        { fill: '#2A3052', fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M.812 7.11a.5.5 0 0 0-.624.78l2.5 2a.5.5 0 0 0 .68-.05l6-6.5a.5.5 0 1 0-.735-.68L2.949 8.82.812 7.109z' }),
                        _react2.default.createElement('path', { d: 'M9 3v1.5a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1H9z' })
                    )
                );
                break;
            case 'lbfloatput':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { d: 'M.5 5a.5.5 0 0 1 0-1h15a.5.5 0 1 1 0 1H.5z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement(
                        'g',
                        { fill: '#2A3052', fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M12.5 7v6a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0z' }),
                        _react2.default.createElement('path', { d: 'M13.021 7.414l1.061 1.06a.5.5 0 1 0 .707-.706l-1.414-1.414a.5.5 0 0 0-.707 0l-1.414 1.414a.5.5 0 0 0 .707.707l1.06-1.06zM13.021 12.828l1.061-1.06a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.06 1.06z' })
                    ),
                    _react2.default.createElement(
                        'g',
                        { fill: '#2A3052', fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M.812 8.89a.5.5 0 0 1-.624-.78l2.5-2a.5.5 0 0 1 .68.05l6 6.5a.5.5 0 1 1-.735.68L2.949 7.18.812 8.891z' }),
                        _react2.default.createElement('path', { d: 'M9 13v-1.5a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 1 1 0-1H9z' })
                    )
                );
                break;
            case 'lbhighlow':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('path', { d: 'M.5 14a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1H.5zM.5 3a.5.5 0 0 1 0-1h15a.5.5 0 1 1 0 1H.5z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement(
                        'g',
                        { fill: '#2A3052', fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M12.5 4.536v6.428c0 .296.224.536.5.536s.5-.24.5-.536V4.536C13.5 4.24 13.276 4 13 4s-.5.24-.5.536z' }),
                        _react2.default.createElement('path', { d: 'M13.021 4.914l1.061 1.06a.5.5 0 1 0 .707-.706l-1.414-1.414a.5.5 0 0 0-.707 0l-1.414 1.414a.5.5 0 0 0 .707.707l1.06-1.06zM13.021 11.088l1.061-1.06a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.06 1.06z' })
                    ),
                    _react2.default.createElement(
                        'g',
                        { fill: '#2A3052', fillRule: 'nonzero' },
                        _react2.default.createElement('path', { d: 'M9.496 6.5V8a.5.5 0 1 0 1 0V6a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1h1.5z' }),
                        _react2.default.createElement('path', { d: 'M5.246 10.923L3.486 3.88c-.125-.497-.826-.508-.967-.016l-2 7a.5.5 0 1 0 .962.274l1.487-5.204 1.547 6.188a.5.5 0 0 0 .87.2l5-6a.5.5 0 1 0-.77-.641l-4.369 5.243z' })
                    )
                );
                break;
            case 'notouch':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052', fillRule: 'nonzero' },
                    _react2.default.createElement('path', { d: 'M9.839 9.87a.5.5 0 0 0 .707 0l2.019-2.019a.5.5 0 1 0-.707-.707l-1.666 1.665-3.794-3.793a.5.5 0 0 0-.707 0l-.454.454-.823-.824a.5.5 0 1 0-.707.708L4.884 6.53a.5.5 0 0 0 .707 0l.454-.454L9.839 9.87z' }),
                    _react2.default.createElement('path', { d: 'M12.428 8.79a.5.5 0 1 0 1 0V6.667a.5.5 0 0 0-.5-.5h-2.12a.5.5 0 1 0 0 1h1.62v1.621zM3 11.7h10.5a.5.5 0 1 0 0-1H3a.5.5 0 1 0 0 1z' })
                );
                break;
            case 'onetouch':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'stroke-white', d: 'M3 4h10.5', stroke: '#2A3052', strokeLinecap: 'round' }),
                    _react2.default.createElement('path', { d: 'M11.074 5.454a.5.5 0 0 0-.707-.708L5.924 9.191a.5.5 0 0 0 .041.744l.953.762-1.272 1.272a.5.5 0 0 0 .707.707l1.666-1.667a.5.5 0 0 0-.04-.744l-.953-.762 4.048-4.05z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { fill: '#2A3052', d: 'M11.263 4.556l.034 3.944H10.282V6.26l-.676-.76H7.34v-.944z' })
                );
                break;
            case 'put_barrier':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052', fillRule: 'evenodd' },
                    _react2.default.createElement('rect', { x: '3', y: '6.5', width: '10', height: '1', rx: '.5' }),
                    _react2.default.createElement('path', { d: 'M11.62 12.325a.5.5 0 0 0 .76-.65l-6-7a.5.5 0 0 0-.692-.065l-2.5 2a.5.5 0 0 0 .624.78l2.123-1.698 5.685 6.633z', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M12 12h-1.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 1 0-1 0V12z', fillRule: 'nonzero' })
                );
                break;
            case 'put':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: '#2A3052' },
                    _react2.default.createElement('path', { d: 'M11.62 12.325a.5.5 0 0 0 .76-.65l-6-7a.5.5 0 0 0-.692-.065l-2.5 2a.5.5 0 0 0 .624.78l2.123-1.698 5.685 6.633z' }),
                    _react2.default.createElement('path', { d: 'M12 12h-1.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 1 0-1 0V12z' })
                );
                break;
            case 'range':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('rect', { fill: '#2A3052', transform: 'rotate(180 8 11.5)', y: '11', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('rect', { fill: '#2A3052', transform: 'rotate(180 8 4.5)', y: '4', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('path', { d: 'M12.646 9.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708L13.793 8l-1.147 1.146z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M11.167 7.5L9.3 6.1a.5.5 0 0 0-.716.123L6.955 8.665 4.885 6.18a.5.5 0 0 0-.739-.034L2.293 8H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .354-.146L4.466 7.24l2.15 2.58a.5.5 0 0 0 .8-.044l1.707-2.56L10.7 8.4a.5.5 0 0 0 .3.1h3.5a.5.5 0 1 0 0-1h-3.333z', fill: '#2A3052', fillRule: 'nonzero' })
                );
                break;
            case 'upordown':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: 'transparent', d: 'M0 0h16v16H0z' }),
                    _react2.default.createElement('rect', { fill: '#2A3052', transform: 'rotate(180 8 12)', y: '11.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('rect', { fill: '#2A3052', transform: 'rotate(180 8 5)', y: '4.5', width: '16', height: '1', rx: '.5' }),
                    _react2.default.createElement('path', { d: 'M13.277 3.772a.5.5 0 0 0 .966-.259l-.55-2.049a.5.5 0 0 0-.612-.353l-2.049.549a.5.5 0 0 0 .259.966l1.566-.42.42 1.566z', fill: '#2A3052', fillRule: 'nonzero' }),
                    _react2.default.createElement('path', { d: 'M4.876 6.17a.5.5 0 0 0-.766.018L2.26 8.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .39-.188L4.517 7.28l3.107 3.55a.5.5 0 0 0 .807-.075l5-8.5a.5.5 0 0 0-.862-.508L7.92 9.65 4.876 6.17z', fill: '#2A3052', fillRule: 'nonzero' })
                );
                break;
            default:
                IconType = _react2.default.createElement('path', { fill: '#B0B3BF', fillRule: 'evenodd', d: 'M7 10.4L7.4 9 8 7.9l1-1c.4-.5.6-1 .6-1.5 0-.6-.1-1-.4-1.3-.2-.3-.6-.4-1.2-.4-.5 0-.9.1-1.2.4-.3.3-.4.6-.4 1H5c0-.7.3-1.4.9-1.9.5-.5 1.2-.7 2.1-.7 1 0 1.7.3 2.2.8.5.5.8 1.1.8 2 0 .9-.4 1.7-1.2 2.6l-.8.8c-.4.4-.5 1-.5 1.7H7zm0 2.3c0-.2 0-.4.2-.5l.6-.3c.3 0 .5.1.6.3.2.1.2.3.2.5 0 .3 0 .4-.2.6l-.6.2c-.2 0-.4 0-.6-.2a.8.8 0 0 1-.2-.6z' });
                break;
        }
    }
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
        IconType
    );
};

IconTradeType.propTypes = {
    className: _propTypes2.default.string,
    type: _propTypes2.default.string
};

exports.IconTradeType = IconTradeType;

/***/ }),

/***/ "./src/javascript/app_2/Assets/Trading/Types/index.js":
/*!************************************************************!*\
  !*** ./src/javascript/app_2/Assets/Trading/Types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon_trade_types = __webpack_require__(/*! ./icon_trade_types.jsx */ "./src/javascript/app_2/Assets/Trading/Types/icon_trade_types.jsx");

Object.keys(_icon_trade_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon_trade_types[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Assets/Trading/icon_lock.jsx":
/*!***********************************************************!*\
  !*** ./src/javascript/app_2/Assets/Trading/icon_lock.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconLock = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLock = function IconLock(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd', transform: 'translate(3 1)' },
            _react2.default.createElement('rect', { width: '9', height: '7', x: '.5', y: '6.5', stroke: '#2A3052', rx: '1' }),
            _react2.default.createElement('circle', { cx: '5', cy: '10', r: '1', fill: '#2A3052' }),
            _react2.default.createElement('path', { stroke: '#2A3052', d: 'M5 .5C7 .5 8.5 2.1 8.5 4v2.5h-7V4C1.5 2 3.1.5 5 .5z' })
        )
    );
};

IconLock.propTypes = {
    className: _propTypes2.default.string
};

exports.IconLock = IconLock;

/***/ }),

/***/ "./src/javascript/app_2/Constants/contract.js":
/*!****************************************************!*\
  !*** ./src/javascript/app_2/Constants/contract.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractTypeDisplay = undefined;

var _localize = __webpack_require__(/*! ../../_common/localize */ "./src/javascript/_common/localize.js");

var getContractTypeDisplay = exports.getContractTypeDisplay = function getContractTypeDisplay() {
    return {
        ASIANU: (0, _localize.localize)('Asian Up'),
        ASIAND: (0, _localize.localize)('Asian Down'),
        CALL: (0, _localize.localize)('Higher'),
        CALLE: (0, _localize.localize)('Higher or equal'),
        PUT: (0, _localize.localize)('Lower'),
        PUTE: (0, _localize.localize)('Lower or equal'),
        DIGITMATCH: (0, _localize.localize)('Digit Matches'),
        DIGITDIFF: (0, _localize.localize)('Digit Differs'),
        DIGITODD: (0, _localize.localize)('Digit Odd'),
        DIGITEVEN: (0, _localize.localize)('Digit Even'),
        DIGITOVER: (0, _localize.localize)('Digit Over'),
        DIGITUNDER: (0, _localize.localize)('Digit Under'),
        EXPIRYMISS: (0, _localize.localize)('Ends Outside'),
        EXPIRYRANGE: (0, _localize.localize)('Ends Between'),
        EXPIRYRANGEE: (0, _localize.localize)('Ends Between'),
        LBFLOATCALL: (0, _localize.localize)('Close-Low'),
        LBFLOATPUT: (0, _localize.localize)('High-Close'),
        LBHIGHLOW: (0, _localize.localize)('High-Low'),
        RANGE: (0, _localize.localize)('Stays Between'),
        UPORDOWN: (0, _localize.localize)('Goes Outside'),
        ONETOUCH: (0, _localize.localize)('Touches'),
        NOTOUCH: (0, _localize.localize)('Does Not Touch')
    };
};

/***/ }),

/***/ "./src/javascript/app_2/Constants/index.js":
/*!*************************************************!*\
  !*** ./src/javascript/app_2/Constants/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _contract = __webpack_require__(/*! ./contract */ "./src/javascript/app_2/Constants/contract.js");

Object.keys(_contract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contract[key];
    }
  });
});

var _ui = __webpack_require__(/*! ./ui */ "./src/javascript/app_2/Constants/ui.js");

Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

var _routes2 = __webpack_require__(/*! ./routes */ "./src/javascript/app_2/Constants/routes.js");

var _routes3 = _interopRequireDefault(_routes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.routes = _routes3.default;

/***/ }),

/***/ "./src/javascript/app_2/Constants/routes.js":
/*!**************************************************!*\
  !*** ./src/javascript/app_2/Constants/routes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var routes = {
    error404: '/404',
    account_password: '/settings/account_password',
    apps: '/settings/apps',
    cashier_password: '/settings/cashier_password',
    contract: '/contract/:contract_id',
    exclusion: '/settings/exclusion',
    financial: '/settings/financial',
    history: '/settings/history',
    index: '/index',
    limits: '/settings/limits',
    personal: '/settings/personal',
    portfolio: '/portfolio',
    root: '/',
    settings: '/settings',
    statement: '/statement',
    token: '/settings/token',
    trade: '/trade'
};

exports.default = routes;

/***/ }),

/***/ "./src/javascript/app_2/Constants/ui.js":
/*!**********************************************!*\
  !*** ./src/javascript/app_2/Constants/ui.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAX_MOBILE_WIDTH = exports.MAX_MOBILE_WIDTH = 767;
var MAX_TABLET_WIDTH = exports.MAX_TABLET_WIDTH = 980;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/Details/details_contents.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/Details/details_contents.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _details_group = __webpack_require__(/*! ./details_group.jsx */ "./src/javascript/app_2/Modules/Contract/Components/Details/details_group.jsx");

var _details_group2 = _interopRequireDefault(_details_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailsContents = function DetailsContents(_ref) {
    var buy_id = _ref.buy_id,
        details_expiry = _ref.details_expiry,
        details_info = _ref.details_info,
        longcode = _ref.longcode;
    return _react2.default.createElement(
        'div',
        { className: 'contract-contents' },
        _react2.default.createElement(
            'div',
            { className: 'longcode' },
            longcode
        ),
        _react2.default.createElement(
            'div',
            { className: 'ref-number' },
            (0, _localize.localize)('Reference No:'),
            ' ',
            buy_id
        ),
        _react2.default.createElement(_details_group2.default, {
            title: (0, _localize.localize)('Contract Information'),
            items: details_info
        }),
        _react2.default.createElement(_details_group2.default, {
            title: (0, _localize.localize)('Contract Expiry'),
            items: details_expiry
        })
    );
};

DetailsContents.propTypes = {
    buy_id: _propTypes2.default.string,
    details_expiry: _propTypes2.default.object,
    details_info: _propTypes2.default.object,
    longcode: _propTypes2.default.string
};

exports.default = (0, _mobxReact.observer)(DetailsContents);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/Details/details_group.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/Details/details_group.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _utility = __webpack_require__(/*! ../../../../../_common/utility */ "./src/javascript/_common/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailsGroup = function DetailsGroup(_ref) {
    var items = _ref.items,
        title = _ref.title;
    return !title || (0, _utility.isEmptyObject)(items) ? '' : _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'info-header' },
            title
        ),
        Object.keys(items).map(function (key) {
            return _react2.default.createElement(
                'div',
                { className: 'info-item', key: key },
                _react2.default.createElement(
                    'div',
                    null,
                    key
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    items[key]
                )
            );
        })
    );
};

DetailsGroup.propTypes = {
    items: _propTypes2.default.object,
    title: _propTypes2.default.string
};

exports.default = (0, _mobxReact.observer)(DetailsGroup);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/Details/details_header.jsx":
/*!*************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/Details/details_header.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../../Stores/Modules/Contract/Constants/ui */ "./src/javascript/app_2/Stores/Modules/Contract/Constants/ui.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailsHeader = function DetailsHeader(_ref) {
    var status = _ref.status;

    var header_config = (0, _ui.getHeaderConfig)();
    var title_purchased = header_config.purchased.title;
    var title_result = header_config[status].title;
    var icon_purchased = header_config.purchased.icon;
    var icon_result = header_config[status].icon;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('contract-header', status) },
        _react2.default.createElement(
            'div',
            { className: 'header-wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'header-result' },
                icon_result,
                title_result
            ),
            _react2.default.createElement(
                'div',
                { className: 'header-purchased' },
                icon_purchased,
                title_purchased
            )
        )
    );
};

DetailsHeader.propTypes = {
    status: _propTypes2.default.oneOf(['purchased', 'won', 'lost'])
};

exports.default = (0, _mobxReact.observer)(DetailsHeader);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/digit_display.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/InfoBox/digit_display.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DigitDisplay = function DigitDisplay(_ref) {
    var _ref$digit_info = _ref.digit_info,
        digit_info = _ref$digit_info === undefined ? {} : _ref$digit_info,
        digit_number = _ref.digit_number;

    var digit_class = (0, _classnames2.default)('digit-value', digit_info.is_win ? 'win' : 'loss', { last: digit_info.is_last });

    return _react2.default.createElement(
        'div',
        { className: 'digit-info' },
        _react2.default.createElement(
            'div',
            { className: digit_class },
            digit_info.digit
        ),
        _react2.default.createElement(
            'div',
            { className: 'tick-number' },
            (0, _localize.localize)('Tick [_1]', [digit_number])
        )
    );
};

DigitDisplay.propTypes = {
    digit_info: _propTypes2.default.object,
    digit_number: _propTypes2.default.number
};

exports.default = (0, _mobxReact.observer)(DigitDisplay);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/index.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/InfoBox/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoBoxGeneral = exports.InfoBoxExpired = exports.InfoBoxDigit = undefined;

var _info_box_digit = __webpack_require__(/*! ./info_box_digit.jsx */ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_digit.jsx");

var _info_box_digit2 = _interopRequireDefault(_info_box_digit);

var _info_box_expired = __webpack_require__(/*! ./info_box_expired.jsx */ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_expired.jsx");

var _info_box_expired2 = _interopRequireDefault(_info_box_expired);

var _info_box_general = __webpack_require__(/*! ./info_box_general.jsx */ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_general.jsx");

var _info_box_general2 = _interopRequireDefault(_info_box_general);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.InfoBoxDigit = _info_box_digit2.default;
exports.InfoBoxExpired = _info_box_expired2.default;
exports.InfoBoxGeneral = _info_box_general2.default;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_digit.jsx":
/*!*************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_digit.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _digit_display = __webpack_require__(/*! ./digit_display.jsx */ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/digit_display.jsx");

var _digit_display2 = _interopRequireDefault(_digit_display);

var _info_box_expired = __webpack_require__(/*! ./info_box_expired.jsx */ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_expired.jsx");

var _info_box_expired2 = _interopRequireDefault(_info_box_expired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var InfoBoxDigit = function InfoBoxDigit(_ref) {
    var contract_info = _ref.contract_info,
        digits_info = _ref.digits_info,
        is_ended = _ref.is_ended;

    var digits_array = Object.keys(digits_info).sort().map(function (spot_time) {
        return digits_info[spot_time];
    });
    var count = +contract_info.tick_count;
    var latest_digit = digits_array.slice(-1)[0] || {};
    var display_array = [].concat(_toConsumableArray(Array(count).keys())).map(function (i) {
        // manually put the last one at the end because some ticks are missing from responses
        var last_item = i + 1 === count && latest_digit.is_last ? latest_digit : {};
        return digits_array[i] && !digits_array[i].is_last ? digits_array[i] : last_item;
    });

    return _react2.default.createElement(
        'div',
        { className: 'digits' },
        _react2.default.createElement(
            'div',
            { className: 'digit-title' },
            (0, _localize.localize)('Last Digit')
        ),
        _react2.default.createElement(
            'div',
            { className: 'digit-list' },
            display_array.map(function (info, idx) {
                return _react2.default.createElement(_digit_display2.default, { digit_info: info, digit_number: idx + 1, key: idx });
            })
        ),
        _react2.default.createElement(_info_box_expired2.default, {
            contract_info: contract_info,
            has_flag: is_ended,
            has_percentage: is_ended
        })
    );
};

InfoBoxDigit.propTypes = {
    contract_info: _propTypes2.default.object,
    digits_info: _propTypes2.default.object,
    is_ended: _propTypes2.default.bool
};

exports.default = (0, _mobxReact.observer)(InfoBoxDigit);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_expired.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_expired.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _money = __webpack_require__(/*! ../../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _icon_flag = __webpack_require__(/*! ../../../../Assets/Contract/icon_flag.jsx */ "./src/javascript/app_2/Assets/Contract/icon_flag.jsx");

var _icon_flag2 = _interopRequireDefault(_icon_flag);

var _sell_info = __webpack_require__(/*! ../Sell/sell_info.jsx */ "./src/javascript/app_2/Modules/Contract/Components/Sell/sell_info.jsx");

var _sell_info2 = _interopRequireDefault(_sell_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoBoxExpired = function InfoBoxExpired(_ref) {
    var contract_info = _ref.contract_info,
        _ref$has_flag = _ref.has_flag,
        has_flag = _ref$has_flag === undefined ? true : _ref$has_flag,
        _ref$has_percentage = _ref.has_percentage,
        has_percentage = _ref$has_percentage === undefined ? true : _ref$has_percentage,
        _ref$sell_info = _ref.sell_info,
        sell_info = _ref$sell_info === undefined ? {} : _ref$sell_info;
    var currency = contract_info.currency,
        profit = contract_info.profit,
        profit_percentage = contract_info.profit_percentage;


    var percentage_text = '' + (profit_percentage > 0 ? '+' : '') + profit_percentage + '%';

    return _react2.default.createElement(
        'div',
        { className: 'expired ' + (profit > 0 ? 'won' : 'lost') },
        sell_info.transaction_id && _react2.default.createElement(_sell_info2.default, { contract_info: contract_info, sell_info: sell_info }),
        has_flag && _react2.default.createElement(_icon_flag2.default, null),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                (0, _localize.localize)('Profit/Loss'),
                ':'
            ),
            _react2.default.createElement(
                'div',
                { className: 'pl-value' },
                _react2.default.createElement(_money2.default, { amount: profit, currency: currency, has_sign: true }),
                has_percentage && _react2.default.createElement(
                    'span',
                    { className: 'percentage' },
                    '(',
                    percentage_text,
                    ')'
                )
            )
        )
    );
};

InfoBoxExpired.propTypes = {
    contract_info: _propTypes2.default.object,
    has_flag: _propTypes2.default.bool,
    has_percentage: _propTypes2.default.bool,
    sell_info: _propTypes2.default.object
};

exports.default = (0, _mobxReact.observer)(InfoBoxExpired);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_general.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/InfoBox/info_box_general.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _money = __webpack_require__(/*! ../../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _remaining_time = __webpack_require__(/*! ../../../../App/Containers/remaining_time.jsx */ "./src/javascript/app_2/App/Containers/remaining_time.jsx");

var _remaining_time2 = _interopRequireDefault(_remaining_time);

var _logic = __webpack_require__(/*! ../../../../Stores/Modules/Contract/Helpers/logic */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/logic.js");

var _contract_sell = __webpack_require__(/*! ../../Containers/contract_sell.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/contract_sell.jsx");

var _contract_sell2 = _interopRequireDefault(_contract_sell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoBoxGeneral = function InfoBoxGeneral(_ref) {
    var className = _ref.className,
        contract_info = _ref.contract_info;
    var buy_price = contract_info.buy_price,
        currency = contract_info.currency,
        date_expiry = contract_info.date_expiry,
        profit = contract_info.profit;


    var indicative_price = (0, _logic.getIndicativePrice)(contract_info);
    var is_started = (0, _logic.isStarted)(contract_info);
    var is_ended = (0, _logic.isEnded)(contract_info);

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('general', className) },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                (0, _localize.localize)('Purchase Price')
            ),
            _react2.default.createElement(
                'div',
                null,
                (0, _localize.localize)('Indicative Price')
            ),
            _react2.default.createElement(
                'div',
                null,
                (0, _localize.localize)('Profit/Loss')
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'values' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_money2.default, { amount: buy_price, currency: currency })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_money2.default, { amount: indicative_price, currency: currency })
            ),
            _react2.default.createElement(
                'div',
                { className: profit >= 0 ? 'profit' : 'loss' },
                _react2.default.createElement(_money2.default, { amount: profit, currency: currency, has_sign: true })
            )
        ),
        !is_ended && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                (0, _localize.localize)('Remaining Time')
            ),
            _react2.default.createElement(
                'strong',
                null,
                is_started && date_expiry ? _react2.default.createElement(_remaining_time2.default, { end_time: date_expiry }) : '-'
            )
        ),
        _react2.default.createElement(_contract_sell2.default, null)
    );
};

InfoBoxGeneral.propTypes = {
    className: _propTypes2.default.string,
    contract_info: _propTypes2.default.object,
    onClickSell: _propTypes2.default.func
};

exports.default = (0, _mobxReact.observer)(InfoBoxGeneral);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/Sell/sell_button.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/Sell/sell_button.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _tooltip = __webpack_require__(/*! ../../../../App/Components/Elements/tooltip.jsx */ "./src/javascript/app_2/App/Components/Elements/tooltip.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _button = __webpack_require__(/*! ../../../../App/Components/Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SellButton = function SellButton(_ref) {
    var contract_info = _ref.contract_info,
        is_sell_requested = _ref.is_sell_requested,
        is_valid_to_sell = _ref.is_valid_to_sell,
        onClickSell = _ref.onClickSell;

    var sell_message = is_valid_to_sell ? (0, _localize.localize)('Contract will be sold at the prevailing market price when the request is received by our servers. This price may differ from the indicated price.') : contract_info.validation_error;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_tooltip2.default, { alignment: 'left', icon: 'question', message: sell_message }),
        _react2.default.createElement(_button2.default, {
            className: 'secondary green',
            is_disabled: !is_valid_to_sell || is_sell_requested,
            text: (0, _localize.localize)('Sell'),
            onClick: onClickSell
        })
    );
};

SellButton.propTypes = {
    contract_info: _propTypes2.default.object,
    is_sell_requested: _propTypes2.default.bool,
    is_valid_to_sell: _propTypes2.default.bool,
    onClickSell: _propTypes2.default.func
};

exports.default = (0, _mobxReact.observer)(SellButton);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/Sell/sell_info.jsx":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/Sell/sell_info.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _localize2 = __webpack_require__(/*! ../../../../App/Components/Elements/localize.jsx */ "./src/javascript/app_2/App/Components/Elements/localize.jsx");

var _localize3 = _interopRequireDefault(_localize2);

var _money = __webpack_require__(/*! ../../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SellInfo = function SellInfo(_ref) {
    var contract_info = _ref.contract_info,
        sell_info = _ref.sell_info;
    return _react2.default.createElement(
        'div',
        { className: 'sell-info' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_localize3.default, {
                str: 'You have sold this contract at [_1]',
                replacers: {
                    '1': _react2.default.createElement(_money2.default, {
                        key: sell_info.transaction_id,
                        currency: contract_info.currency,
                        amount: sell_info.sell_price
                    })
                }
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            (0, _localize.localize)('Your transaction reference number is [_1]', [sell_info.transaction_id])
        )
    );
};

SellInfo.propTypes = {
    contract_info: _propTypes2.default.object,
    sell_info: _propTypes2.default.object
};

exports.default = (0, _mobxReact.observer)(SellInfo);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Components/contract_error.jsx":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Components/contract_error.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Common = __webpack_require__(/*! ../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: move to App/Components, Refactor svg, consider other types, more features;
// when a general design and more icons for all messages is ready
var ContractError = function ContractError(_ref) {
    var _ref$message = _ref.message,
        message = _ref$message === undefined ? '' : _ref$message,
        onClickClose = _ref.onClickClose;
    return !message ? null : _react2.default.createElement(
        'div',
        { className: 'message' },
        _react2.default.createElement(
            'div',
            { className: 'message-icon' },
            _react2.default.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
                _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', fill: '#F44336' }),
                    _react2.default.createElement('path', { fill: '#FFF', fillRule: 'nonzero', d: 'M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z' })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'message-text' },
            message
        ),
        _react2.default.createElement(
            'div',
            { className: 'message-close', onClick: onClickClose },
            _react2.default.createElement(_Common.IconClose, null)
        )
    );
};

ContractError.propTypes = {
    message: _propTypes2.default.string,
    onClickClose: _propTypes2.default.func
};

exports.default = ContractError;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Containers/contract_details.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/contract_details.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _ui_loader = __webpack_require__(/*! ../../../App/Components/Elements/ui_loader.jsx */ "./src/javascript/app_2/App/Components/Elements/ui_loader.jsx");

var _ui_loader2 = _interopRequireDefault(_ui_loader);

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app_2/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _details_contents = __webpack_require__(/*! ../Components/Details/details_contents.jsx */ "./src/javascript/app_2/Modules/Contract/Components/Details/details_contents.jsx");

var _details_contents2 = _interopRequireDefault(_details_contents);

var _details_header = __webpack_require__(/*! ../Components/Details/details_header.jsx */ "./src/javascript/app_2/Modules/Contract/Components/Details/details_header.jsx");

var _details_header2 = _interopRequireDefault(_details_header);

var _Errors = __webpack_require__(/*! ../../../App/Components/Elements/Errors */ "./src/javascript/app_2/App/Components/Elements/Errors/index.js");

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractDetails = function (_React$Component) {
    _inherits(ContractDetails, _React$Component);

    function ContractDetails() {
        _classCallCheck(this, ContractDetails);

        return _possibleConstructorReturn(this, (ContractDetails.__proto__ || Object.getPrototypeOf(ContractDetails)).apply(this, arguments));
    }

    _createClass(ContractDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount(this.props.contract_id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$contract_info = this.props.contract_info,
                contract_id = _props$contract_info.contract_id,
                longcode = _props$contract_info.longcode,
                transaction_ids = _props$contract_info.transaction_ids;


            if (contract_id && !this.props.has_error) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'contract-container' },
                        _react2.default.createElement(_details_header2.default, { status: this.props.display_status }),
                        _react2.default.createElement(_details_contents2.default, {
                            buy_id: transaction_ids.buy,
                            details_expiry: this.props.details_expiry,
                            details_info: this.props.details_info,
                            longcode: longcode
                        }),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                className: 'btn secondary orange',
                                to: _routes2.default.trade,
                                onClick: this.props.onClickNewTrade
                            },
                            _react2.default.createElement(
                                'span',
                                null,
                                (0, _localize.localize)('Start a new trade')
                            )
                        )
                    )
                );
            } else if (!contract_id && !this.props.has_error) {
                return _react2.default.createElement(_ui_loader2.default, null);
            }
            return _react2.default.createElement(_Errors2.default, { message: this.props.error_message });
        }
    }]);

    return ContractDetails;
}(_react2.default.Component);

ContractDetails.propTypes = {
    contract_id: _propTypes2.default.string,
    contract_info: _propTypes2.default.object,
    details_expiry: _propTypes2.default.object,
    details_info: _propTypes2.default.object,
    display_status: _propTypes2.default.string,
    error_message: _propTypes2.default.string,
    has_error: _propTypes2.default.bool,
    onClickNewTrade: _propTypes2.default.func,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules;
    return {
        contract_info: modules.contract.contract_info,
        details_info: modules.contract.details_info,
        details_expiry: modules.contract.details_expiry,
        display_status: modules.contract.display_status,
        error_message: modules.contract.error_message,
        has_error: modules.contract.has_error,
        onMount: modules.contract.onMount,
        onUnmount: modules.contract.onUnmount
    };
})(ContractDetails);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Containers/contract_sell.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/contract_sell.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _sell_button = __webpack_require__(/*! ../Components/Sell/sell_button.jsx */ "./src/javascript/app_2/Modules/Contract/Components/Sell/sell_button.jsx");

var _sell_button2 = _interopRequireDefault(_sell_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractSell = function ContractSell(_ref) {
    var contract_info = _ref.contract_info,
        is_sell_requested = _ref.is_sell_requested,
        is_valid_to_sell = _ref.is_valid_to_sell,
        onClickSell = _ref.onClickSell;
    return contract_info.tick_count ? null : // Sell is not available for tick contracts
    _react2.default.createElement(
        'div',
        { className: 'sell' },
        _react2.default.createElement(_sell_button2.default, {
            contract_info: contract_info,
            is_sell_requested: is_sell_requested,
            is_valid_to_sell: is_valid_to_sell,
            onClickSell: onClickSell
        })
    );
};

ContractSell.propTypes = {
    contract_info: _propTypes2.default.object,
    is_sell_requested: _propTypes2.default.bool,
    is_valid_to_sell: _propTypes2.default.bool,
    onClickSell: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules;
    return {
        contract_info: modules.contract.contract_info,
        is_sell_requested: modules.contract.is_sell_requested,
        is_valid_to_sell: modules.contract.is_valid_to_sell,
        onClickSell: modules.contract.onClickSell
    };
})(ContractSell);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Containers/info_box.jsx":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/info_box.jsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _digits = __webpack_require__(/*! ../../../Stores/Modules/Contract/Helpers/digits */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/digits.js");

var _logic = __webpack_require__(/*! ../../../Stores/Modules/Contract/Helpers/logic */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/logic.js");

var _contract_error = __webpack_require__(/*! ../Components/contract_error.jsx */ "./src/javascript/app_2/Modules/Contract/Components/contract_error.jsx");

var _contract_error2 = _interopRequireDefault(_contract_error);

var _InfoBox = __webpack_require__(/*! ../Components/InfoBox */ "./src/javascript/app_2/Modules/Contract/Components/InfoBox/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoBox = function InfoBox(_ref) {
    var contract_info = _ref.contract_info,
        digits_info = _ref.digits_info,
        is_trade_page = _ref.is_trade_page,
        removeError = _ref.removeError,
        sell_info = _ref.sell_info;

    var is_digit = (0, _digits.isDigitContract)(contract_info.contract_type);
    var is_ended = (0, _logic.isEnded)(contract_info);
    var box_class = (0, _classnames2.default)('info-box', {
        'ended': is_ended
    });

    var Contents = is_ended ? _InfoBox.InfoBoxExpired : _InfoBox.InfoBoxGeneral;
    if (is_digit && is_trade_page) {
        // we don't display digit info in Statement/Portfolio because of API shortages
        Contents = _InfoBox.InfoBoxDigit;
    }

    return (
        // TODO: Resolve issue with undefined contract_info showing upon unmounting transition
        // <CSSTransition
        //     in={is_contract_mode}
        //     timeout={400}
        //     classNames='info-box-container'
        //     unmountOnExit
        // >
        _react2.default.createElement(
            'div',
            { className: 'info-box-container' },
            contract_info.contract_type && _react2.default.createElement(
                'div',
                { className: box_class },
                _react2.default.createElement(Contents, {
                    contract_info: contract_info,
                    digits_info: digits_info,
                    is_ended: is_ended,
                    sell_info: sell_info
                })
            ),
            _react2.default.createElement(_contract_error2.default, {
                message: sell_info.error_message,
                onClickClose: removeError
            })
        )
        // </CSSTransition>

    );
};
// import { CSSTransition }   from 'react-transition-group';


InfoBox.propTypes = {
    contract_info: _propTypes2.default.object,
    digits_info: _propTypes2.default.object,
    // is_contract_mode: PropTypes.bool,
    is_trade_page: _propTypes2.default.bool,
    removeError: _propTypes2.default.func,
    sell_info: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules;
    return {
        contract_info: modules.contract.contract_info,
        digits_info: modules.contract.digits_info,
        removeError: modules.contract.removeSellError,
        sell_info: modules.contract.sell_info
        // is_contract_mode: modules.smart_chart.is_contract_mode,
    };
})(InfoBox);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/contract_type_cell.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/contract_type_cell.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contract = __webpack_require__(/*! ../../../Constants/contract */ "./src/javascript/app_2/Constants/contract.js");

var _Types = __webpack_require__(/*! ../../../Assets/Trading/Types */ "./src/javascript/app_2/Assets/Trading/Types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractTypeCell = function ContractTypeCell(_ref) {
    var type = _ref.type;
    return _react2.default.createElement(
        'div',
        { className: 'contract-type' },
        _react2.default.createElement(
            'div',
            { className: 'type-wrapper' },
            _react2.default.createElement(_Types.IconTradeType, { type: type.toLowerCase(), className: 'type' })
        ),
        _react2.default.createElement(
            'span',
            null,
            (0, _contract.getContractTypeDisplay)()[type] || ''
        )
    );
};

ContractTypeCell.propTypes = {
    type: _propTypes2.default.string
};

exports.default = ContractTypeCell;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/empty_portfolio_message.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/empty_portfolio_message.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _NavBar = __webpack_require__(/*! ../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyPortfolioMessage = function EmptyPortfolioMessage() {
    return (
        // TODO: combine with statement component, once design is final
        _react2.default.createElement(
            'div',
            { className: 'portfolio-empty' },
            _react2.default.createElement(_NavBar.IconPortfolio, { className: 'portfolio-empty__icon' }),
            _react2.default.createElement(
                'span',
                { className: 'portfolio-empty__text' },
                (0, _localize.localize)('No open positions.')
            )
        )
    );
};

exports.default = EmptyPortfolioMessage;

/***/ }),

/***/ "./src/javascript/app_2/Modules/SmartChart/Components/Markers/marker_line.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/SmartChart/Components/Markers/marker_line.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerLine = function MarkerLine(_ref) {
    var label = _ref.label,
        line_style = _ref.line_style;
    return _react2.default.createElement(
        'div',
        { className: line_style },
        _react2.default.createElement(
            'div',
            null,
            label
        )
    );
};

MarkerLine.propTypes = {
    label: _propTypes2.default.string,
    line_style: _propTypes2.default.string
};
exports.default = (0, _mobxReact.observer)(MarkerLine);

/***/ }),

/***/ "./src/javascript/app_2/Modules/SmartChart/Components/Markers/marker_spot.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/SmartChart/Components/Markers/marker_spot.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _currency_base = __webpack_require__(/*! ../../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerSpot = function MarkerSpot(_ref) {
    var align = _ref.align,
        icon = _ref.icon,
        spot_value = _ref.spot_value,
        status = _ref.status;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('chart-spot', align, status) },
        _react2.default.createElement(
            'div',
            { className: 'content' },
            icon,
            (0, _currency_base.addComma)(spot_value)
        ),
        _react2.default.createElement('div', { className: 'arrow' }),
        _react2.default.createElement('div', { className: 'spot' })
    );
};

MarkerSpot.propTypes = {
    align: _propTypes2.default.oneOf(['left', 'right']),
    icon: _propTypes2.default.object,
    spot_value: _propTypes2.default.string,
    status: _propTypes2.default.oneOf(['won', 'lost'])
};
exports.default = (0, _mobxReact.observer)(MarkerSpot);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Elements/full_screen_dialog.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Elements/full_screen_dialog.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullScreenDialog = function FullScreenDialog(props) {
    var title = props.title,
        visible = props.visible,
        children = props.children;


    var checkVisibility = function checkVisibility() {
        if (props.visible) {
            document.body.classList.add('no-scroll');
            document.getElementById('binary_app').classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
            document.getElementById('binary_app').classList.remove('no-scroll');
        }
    };

    var scrollToElement = function scrollToElement(parent, el) {
        var viewport_offset = el.getBoundingClientRect();
        var hidden = viewport_offset.top + el.clientHeight + 20 > window.innerHeight;
        if (hidden) {
            var new_el_top = (window.innerHeight - el.clientHeight) / 2;
            parent.scrollTop += viewport_offset.top - new_el_top;
        }
    };

    // sometimes input is covered by virtual keyboard on mobile chrome, uc browser
    var handleClick = function handleClick(e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
            var scrollToTarget = scrollToElement(e.currentTarget, e.target);
            window.addEventListener('resize', scrollToTarget, false);

            // remove listener, resize is not fired on iOS safari
            window.setTimeout(function () {
                window.removeEventListener('resize', scrollToTarget, false);
            }, 2000);
        }
    };

    checkVisibility();

    return _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)('fullscreen-dialog', {
                'fullscreen-dialog--open': visible
            }),
            onClick: handleClick
        },
        _react2.default.createElement(
            'div',
            { className: 'fullscreen-dialog__header' },
            _react2.default.createElement(
                'h2',
                { className: 'fullscreen-dialog__title' },
                title
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'icons btn-close fullscreen-dialog__close-btn',
                    onClick: props.onClose
                },
                _react2.default.createElement(_Common.IconClose, { className: 'ic-close' })
            )
        ),
        _react2.default.createElement('div', { className: 'fullscreen-dialog__header-shadow-cover' }),
        _react2.default.createElement('div', { className: 'fullscreen-dialog__header-shadow' }),
        _react2.default.createElement(
            'div',
            { className: 'fullscreen-dialog__content' },
            _react2.default.createElement(
                'div',
                { className: 'contracts-modal-list' },
                children
            )
        )
    );
};

FullScreenDialog.propTypes = {
    children: _propTypes2.default.any,
    onClose: _propTypes2.default.func,
    title: _propTypes2.default.string,
    visible: _propTypes2.default.bool
};

exports.default = FullScreenDialog;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Elements/mobile_widget.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Elements/mobile_widget.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _full_screen_dialog = __webpack_require__(/*! ./full_screen_dialog.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Elements/full_screen_dialog.jsx");

var _full_screen_dialog2 = _interopRequireDefault(_full_screen_dialog);

var _trade_params = __webpack_require__(/*! ../../Containers/trade_params.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/trade_params.jsx");

var _trade_params2 = _interopRequireDefault(_trade_params);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileWidget = function (_React$PureComponent) {
    _inherits(MobileWidget, _React$PureComponent);

    function MobileWidget(props) {
        _classCallCheck(this, MobileWidget);

        var _this = _possibleConstructorReturn(this, (MobileWidget.__proto__ || Object.getPrototypeOf(MobileWidget)).call(this, props));

        _this.state = {
            open: false
        };
        _this.handleDialogClose = _this.handleDialogClose.bind(_this);
        _this.handleWidgetClick = _this.handleWidgetClick.bind(_this);
        return _this;
    }

    _createClass(MobileWidget, [{
        key: 'handleWidgetClick',
        value: function handleWidgetClick() {
            this.setState({
                open: true
            });
        }
    }, {
        key: 'handleDialogClose',
        value: function handleDialogClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mobile-widget', onClick: this.handleWidgetClick },
                    _react2.default.createElement(_trade_params2.default, { is_minimized: true })
                ),
                _react2.default.createElement(
                    _full_screen_dialog2.default,
                    {
                        title: 'Set parameters',
                        visible: this.state.open,
                        onClose: this.handleDialogClose
                    },
                    _react2.default.createElement(_trade_params2.default, { is_nativepicker: true })
                )
            );
        }
    }]);

    return MobileWidget;
}(_react2.default.PureComponent);

exports.default = MobileWidget;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_dialog.jsx":
/*!****************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_dialog.jsx ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _full_screen_dialog = __webpack_require__(/*! ../../Elements/full_screen_dialog.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Elements/full_screen_dialog.jsx");

var _full_screen_dialog2 = _interopRequireDefault(_full_screen_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractTypeDialog = function ContractTypeDialog(_ref) {
    var children = _ref.children,
        is_mobile = _ref.is_mobile,
        open = _ref.open,
        onClose = _ref.onClose;
    return is_mobile ? _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('span', { className: 'select-arrow' }),
        _react2.default.createElement(
            _full_screen_dialog2.default,
            {
                title: 'Select Trading Type',
                visible: open,
                onClose: onClose
            },
            children
        )
    ) : _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
            'in': open,
            timeout: 100,
            classNames: 'contracts-popup-list',
            unmountOnExit: true
        },
        _react2.default.createElement(
            'div',
            { className: 'contracts-popup-list' },
            _react2.default.createElement(
                'div',
                { className: 'list-container' },
                children
            )
        )
    );
};

ContractTypeDialog.propTypes = {
    children: _propTypes2.default.element,
    is_mobile: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    open: _propTypes2.default.bool
};

exports.default = ContractTypeDialog;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_item.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_item.jsx ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Categories = __webpack_require__(/*! ../../../../../Assets/Trading/Categories */ "./src/javascript/app_2/Assets/Trading/Categories/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractTypeItem = function ContractTypeItem(_ref) {
    var contracts = _ref.contracts,
        name = _ref.name,
        value = _ref.value,
        handleSelect = _ref.handleSelect;
    return contracts.map(function (contract, idx) {
        return _react2.default.createElement(
            'div',
            {
                key: idx,
                className: 'list-item ' + (value === contract.value ? 'selected' : ''),
                name: name,
                value: contract.value,
                onClick: function onClick() {
                    return handleSelect(contract);
                }
            },
            _react2.default.createElement(_Categories.IconTradeCategory, { category: contract.value }),
            _react2.default.createElement(
                'span',
                { className: 'contract-title' },
                contract.text
            )
        );
    });
};

ContractTypeItem.propTypes = {
    contracts: _mobxReact.PropTypes.arrayOrObservableArray,
    handleSelect: _propTypes2.default.func,
    name: _propTypes2.default.string,
    value: _propTypes2.default.string
};

exports.default = ContractTypeItem;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_list.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_list.jsx ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _contract_type_item = __webpack_require__(/*! ./contract_type_item.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_item.jsx");

var _contract_type_item2 = _interopRequireDefault(_contract_type_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractTypeList = function ContractTypeList(_ref) {
    var handleSelect = _ref.handleSelect,
        list = _ref.list,
        name = _ref.name,
        value = _ref.value;
    return Object.keys(list).map(function (key) {
        return _react2.default.createElement(
            _react2.default.Fragment,
            { key: key },
            _react2.default.createElement(
                'div',
                { className: 'list-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-label' },
                    _react2.default.createElement(
                        'span',
                        null,
                        key
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'list-items' },
                    _react2.default.createElement(_contract_type_item2.default, {
                        contracts: list[key],
                        name: name,
                        value: value,
                        handleSelect: handleSelect
                    })
                )
            )
        );
    });
};

ContractTypeList.propTypes = {
    handleSelect: _propTypes2.default.func,
    list: _mobxReact.PropTypes.objectOrObservableObject,
    name: _propTypes2.default.string,
    value: _propTypes2.default.string
};

exports.default = ContractTypeList;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_widget.jsx":
/*!****************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_widget.jsx ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Common = __webpack_require__(/*! ../../../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _Categories = __webpack_require__(/*! ../../../../../Assets/Trading/Categories */ "./src/javascript/app_2/Assets/Trading/Categories/index.js");

var _contract_type_dialog = __webpack_require__(/*! ./contract_type_dialog.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_dialog.jsx");

var _contract_type_dialog2 = _interopRequireDefault(_contract_type_dialog);

var _contract_type_list = __webpack_require__(/*! ./contract_type_list.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_list.jsx");

var _contract_type_list2 = _interopRequireDefault(_contract_type_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractTypeWidget = function (_React$PureComponent) {
    _inherits(ContractTypeWidget, _React$PureComponent);

    function ContractTypeWidget(props) {
        _classCallCheck(this, ContractTypeWidget);

        var _this = _possibleConstructorReturn(this, (ContractTypeWidget.__proto__ || Object.getPrototypeOf(ContractTypeWidget)).call(this, props));

        _this.handleSelect = function (item) {
            if (item.value !== _this.props.value) {
                _this.props.onChange({ target: { name: _this.props.name, value: item.value } });
            }
            _this.handleVisibility();
        };

        _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        };

        _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target) && _this.state.is_dialog_open) {
                _this.setState({ is_dialog_open: false });
            }
        };

        _this.handleVisibility = function () {
            _this.setState({ is_dialog_open: !_this.state.is_dialog_open });
        };

        _this.getDisplayText = function () {
            var _this$props = _this.props,
                list = _this$props.list,
                value = _this$props.value;

            var findInArray = function findInArray(arr_list) {
                return (arr_list.find(function (item) {
                    return item.value === value;
                }) || {}).text;
            };
            var text = '';
            if (list) {
                Object.keys(list).some(function (key) {
                    text = findInArray(list[key]);
                    return text;
                });
            }
            return text;
        };

        _this.getStyles = function () {
            var container_classes = ['contracts-popup-container'];
            if (_this.props.is_mobile) {
                container_classes.push('mobile-only');
            } else {
                container_classes.push('desktop-only');
            }
            if (_this.state.is_dialog_open) container_classes.push('show');
            return container_classes;
        };

        _this.state = {
            is_dialog_open: false
        };
        return _this;
    }

    _createClass(ContractTypeWidget, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var container_classes = this.getStyles();

            return _react2.default.createElement(
                'div',
                {
                    ref: this.setWrapperRef,
                    className: container_classes.join(' '),
                    tabIndex: '0'
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'contracts-popup-display ' + (this.state.is_dialog_open ? 'clicked' : ''),
                        onClick: this.handleVisibility
                    },
                    _react2.default.createElement(_Categories.IconTradeCategory, { category: this.props.value }),
                    _react2.default.createElement(
                        'span',
                        { name: this.props.name, value: this.props.value },
                        this.getDisplayText()
                    )
                ),
                _react2.default.createElement(_Common.IconArrow, { className: 'select-arrow' }),
                _react2.default.createElement(
                    _contract_type_dialog2.default,
                    {
                        is_mobile: this.props.is_mobile,
                        open: this.state.is_dialog_open,
                        onClose: this.handleVisibility
                    },
                    _react2.default.createElement(_contract_type_list2.default, {
                        list: this.props.list,
                        name: this.props.name,
                        value: this.props.value,
                        handleSelect: this.handleSelect
                    })
                )
            );
        }
    }]);

    return ContractTypeWidget;
}(_react2.default.PureComponent);

ContractTypeWidget.propTypes = {
    is_mobile: _propTypes2.default.bool,
    list: _propTypes2.default.object,
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    value: _propTypes2.default.string
};

exports.default = ContractTypeWidget;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_balance.jsx":
/*!**************************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_balance.jsx ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorBalance = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _button = __webpack_require__(/*! ../../../../../../../App/Components/Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBalance = function ErrorBalance() {
    return _react2.default.createElement(
        'div',
        { className: 'purchase-login-wrapper' },
        _react2.default.createElement(
            'span',
            { className: 'info-text' },
            (0, _localize.localize)('You have an insufficient amount of balance.')
        ),
        _react2.default.createElement(_button2.default, {
            className: 'secondary orange',
            has_effect: true,
            text: (0, _localize.localize)('Deposit')
        })
    );
};

exports.ErrorBalance = ErrorBalance;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_general.jsx":
/*!**************************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_general.jsx ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorGeneral = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorGeneral = function ErrorGeneral(_ref) {
    var message = _ref.message;
    return _react2.default.createElement(
        'div',
        { className: 'purchase-error-wrapper' },
        _react2.default.createElement(
            'span',
            { className: 'info-text' },
            message
        )
    );
};

ErrorGeneral.propTypes = {
    message: _propTypes2.default.string
};

exports.ErrorGeneral = ErrorGeneral;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_login.jsx":
/*!************************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_login.jsx ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorLogin = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _login = __webpack_require__(/*! ../../../../../../../../_common/base/login */ "./src/javascript/_common/base/login.js");

var _localize = __webpack_require__(/*! ../../../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _button = __webpack_require__(/*! ../../../../../../../App/Components/Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorLogin = function ErrorLogin() {
    return _react2.default.createElement(
        'div',
        { className: 'purchase-login-wrapper' },
        _react2.default.createElement(
            'span',
            { className: 'info-text' },
            (0, _localize.localize)('Please log in to purchase the contract')
        ),
        _react2.default.createElement(_button2.default, {
            className: 'secondary orange',
            has_effect: true,
            text: (0, _localize.localize)('log in'),
            onClick: _login.redirectToLogin
        }),
        _react2.default.createElement(
            'p',
            null,
            (0, _localize.localize)('Don\'t have a [_1] account?', ['Binary.com'])
        ),
        _react2.default.createElement(
            'a',
            { href: 'javascript:;' },
            _react2.default.createElement(
                'span',
                { className: 'info-text' },
                (0, _localize.localize)('Create one now')
            )
        )
    );
};

exports.ErrorLogin = ErrorLogin;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/index.js":
/*!*****************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error_balance = __webpack_require__(/*! ./error_balance.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_balance.jsx");

Object.keys(_error_balance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _error_balance[key];
    }
  });
});

var _error_general = __webpack_require__(/*! ./error_general.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_general.jsx");

Object.keys(_error_general).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _error_general[key];
    }
  });
});

var _error_login = __webpack_require__(/*! ./error_login.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/error_login.jsx");

Object.keys(_error_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _error_login[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/index.js":
/*!*******************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _message_box = __webpack_require__(/*! ./message_box.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/message_box.jsx");

var _message_box2 = _interopRequireDefault(_message_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _message_box2.default;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/message_box.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/message_box.jsx ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _utility = __webpack_require__(/*! ../../../../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _icon_close = __webpack_require__(/*! ../../../../../../Assets/Common/icon_close.jsx */ "./src/javascript/app_2/Assets/Common/icon_close.jsx");

var _purchase_result = __webpack_require__(/*! ./purchase_result.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/purchase_result.jsx");

var _purchase_result2 = _interopRequireDefault(_purchase_result);

var _Templates = __webpack_require__(/*! ./Templates */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/Templates/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageBox = function MessageBox(_ref) {
    var currency = _ref.currency,
        purchase_info = _ref.purchase_info,
        onClick = _ref.onClick;

    var has_error = !!purchase_info.error;
    var ErrorComponent = void 0;
    if (has_error) {
        var error_code = (0, _utility.getPropertyValue)(purchase_info, ['error', 'code']);
        switch (error_code) {
            case 'AuthorizationRequired':
                ErrorComponent = _react2.default.createElement(_Templates.ErrorLogin, null);
                break;
            case 'InsufficientBalance':
                ErrorComponent = _react2.default.createElement(_Templates.ErrorBalance, null);
                break;
            default:
                ErrorComponent = _react2.default.createElement(_Templates.ErrorGeneral, { message: purchase_info.error.message });
                break;
        }
    }

    return _react2.default.createElement(
        'div',
        { className: 'purchase-error' },
        _react2.default.createElement(
            'div',
            { className: 'close-btn-container', onClick: onClick },
            _react2.default.createElement(_icon_close.IconClose, { className: 'ic-close' })
        ),
        has_error ? ErrorComponent : _react2.default.createElement(_purchase_result2.default, {
            purchase_info: purchase_info.buy,
            currency: currency
        })
    );
};

MessageBox.propTypes = {
    currency: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    purchase_info: _propTypes2.default.object
};

exports.default = MessageBox;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/purchase_result.jsx":
/*!******************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/purchase_result.jsx ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Date = __webpack_require__(/*! ../../../../../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PurchaseResult = function PurchaseResult(_ref) {
    var currency = _ref.currency,
        purchase_info = _ref.purchase_info;
    return _react2.default.createElement(
        'div',
        { className: 'purchase-result-wrapper' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'strong',
                null,
                (0, _localize.localize)('Purchase Info')
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'label' },
                (0, _localize.localize)('Buy Price'),
                ':'
            ),
            _react2.default.createElement(
                'span',
                { className: 'buy-price' },
                _react2.default.createElement('i', { className: (0, _classnames2.default)('symbols', currency.toLowerCase()) }),
                purchase_info.buy_price
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'label' },
                (0, _localize.localize)('Payout'),
                ':'
            ),
            _react2.default.createElement(
                'span',
                { className: 'payout' },
                _react2.default.createElement('i', { className: (0, _classnames2.default)('symbols', currency.toLowerCase()) }),
                purchase_info.payout
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'label' },
                (0, _localize.localize)('Start'),
                ':'
            ),
            ' ',
            (0, _Date.toGMTFormat)(purchase_info.start_time * 1000)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'label' },
                (0, _localize.localize)('Contract ID'),
                ':'
            ),
            ' ',
            purchase_info.contract_id
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'label' },
                (0, _localize.localize)('Transaction ID'),
                ':'
            ),
            ' ',
            purchase_info.transaction_id
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'label' },
                (0, _localize.localize)('Description'),
                ':'
            ),
            ' ',
            purchase_info.longcode
        )
    );
};

PurchaseResult.propTypes = {
    currency: _propTypes2.default.string,
    purchase_info: _propTypes2.default.object
};

exports.default = PurchaseResult;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/PurchaseLock/index.js":
/*!*********************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/PurchaseLock/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _purchase_lock = __webpack_require__(/*! ./purchase_lock.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/PurchaseLock/purchase_lock.jsx");

var _purchase_lock2 = _interopRequireDefault(_purchase_lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _purchase_lock2.default;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/PurchaseLock/purchase_lock.jsx":
/*!******************************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/PurchaseLock/purchase_lock.jsx ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _localize = __webpack_require__(/*! ../../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _button = __webpack_require__(/*! ../../../../../../App/Components/Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

var _icon_lock = __webpack_require__(/*! ../../../../../../Assets/Trading/icon_lock.jsx */ "./src/javascript/app_2/Assets/Trading/icon_lock.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PurchaseLock = function PurchaseLock(_ref) {
    var onClick = _ref.onClick;
    return _react2.default.createElement(
        'div',
        { className: 'purchase-lock-container' },
        _react2.default.createElement(
            'div',
            { className: 'lock-container' },
            _react2.default.createElement(_icon_lock.IconLock, { className: 'ic-lock' })
        ),
        _react2.default.createElement(
            'h4',
            null,
            (0, _localize.localize)('Purchase Locked')
        ),
        _react2.default.createElement(_button2.default, {
            className: 'flat secondary orange',
            has_effect: true,
            onClick: onClick,
            text: (0, _localize.localize)('Unlock')
        }),
        _react2.default.createElement(
            'span',
            { className: 'lock-message' },
            (0, _localize.localize)('You can lock/unlock the purchase button from the Settings menu')
        )
    );
};

PurchaseLock.propTypes = {
    onClick: _propTypes2.default.func
};

exports.default = PurchaseLock;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/contract_info.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/contract_info.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _money = __webpack_require__(/*! ../../../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _tooltip = __webpack_require__(/*! ../../../../../App/Components/Elements/tooltip.jsx */ "./src/javascript/app_2/App/Components/Elements/tooltip.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _Types = __webpack_require__(/*! ../../../../../Assets/Trading/Types */ "./src/javascript/app_2/Assets/Trading/Types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractInfo = function ContractInfo(_ref) {
    var barrier_count = _ref.barrier_count,
        contract_title = _ref.contract_title,
        contract_type = _ref.contract_type,
        currency = _ref.currency,
        proposal_info = _ref.proposal_info;

    var icon_type = ('' + contract_type + (/^(call|put)$/i.test(contract_type) && barrier_count > 0 ? '_barrier' : '')).toLowerCase();

    return _react2.default.createElement(
        'div',
        { className: 'box' },
        _react2.default.createElement(
            'div',
            { className: 'left-column' },
            _react2.default.createElement(
                'div',
                { className: 'type-wrapper' },
                _react2.default.createElement(_Types.IconTradeType, { type: icon_type, className: 'type' })
            ),
            _react2.default.createElement(
                'h4',
                { className: 'trade-type' },
                contract_title
            )
        ),
        proposal_info.has_error || !proposal_info.id ? _react2.default.createElement(
            'div',
            { className: proposal_info.has_error ? 'error-info-wrapper' : '' },
            _react2.default.createElement(
                'span',
                null,
                proposal_info.message
            )
        ) : _react2.default.createElement(
            'div',
            { className: 'purchase-info-wrapper' },
            _react2.default.createElement(
                'span',
                { className: 'purchase-tooltip' },
                _react2.default.createElement(_tooltip2.default, { alignment: 'left', icon: 'info', message: proposal_info.message })
            ),
            _react2.default.createElement(
                'div',
                { className: 'info-wrapper' },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _localize.localize)('Stake'),
                    ':'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_money2.default, { amount: proposal_info.stake, currency: currency })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'info-wrapper' },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _localize.localize)('Payout'),
                    ':'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_money2.default, { amount: proposal_info.payout, currency: currency })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'info-wrapper' },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _localize.localize)('Net Profit'),
                    ':'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_money2.default, { amount: proposal_info.profit, currency: currency })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'info-wrapper' },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _localize.localize)('Return'),
                    ':'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    proposal_info.returns
                )
            )
        )
    );
};

ContractInfo.propTypes = {
    barrier_count: _propTypes2.default.number,
    contract_title: _propTypes2.default.string,
    contract_type: _propTypes2.default.string,
    currency: _propTypes2.default.string,
    proposal_info: _propTypes2.default.object
};

exports.default = ContractInfo;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/amount.jsx":
/*!*************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/amount.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _currency_base = __webpack_require__(/*! ../../../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DropDown = __webpack_require__(/*! ../../../../../App/Components/Form/DropDown */ "./src/javascript/app_2/App/Components/Form/DropDown/index.js");

var _DropDown2 = _interopRequireDefault(_DropDown);

var _fieldset = __webpack_require__(/*! ../../../../../App/Components/Form/fieldset.jsx */ "./src/javascript/app_2/App/Components/Form/fieldset.jsx");

var _fieldset2 = _interopRequireDefault(_fieldset);

var _input_field = __webpack_require__(/*! ../../../../../App/Components/Form/input_field.jsx */ "./src/javascript/app_2/App/Components/Form/input_field.jsx");

var _input_field2 = _interopRequireDefault(_input_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Amount = function Amount(_ref) {
    var amount = _ref.amount,
        basis = _ref.basis,
        basis_list = _ref.basis_list,
        currencies_list = _ref.currencies_list,
        currency = _ref.currency,
        is_minimized = _ref.is_minimized,
        is_nativepicker = _ref.is_nativepicker,
        is_single_currency = _ref.is_single_currency,
        onChange = _ref.onChange,
        validation_errors = _ref.validation_errors;

    if (is_minimized) {
        return _react2.default.createElement(
            'div',
            { className: 'fieldset-minimized amount' },
            _react2.default.createElement('span', { className: 'icon invest-amount' }),
            _react2.default.createElement(
                'span',
                { className: 'fieldset-minimized__basis' },
                (basis_list.find(function (o) {
                    return o.value === basis;
                }) || {}).text
            ),
            '\xA0',
            _react2.default.createElement(
                'i',
                null,
                _react2.default.createElement('span', { className: 'symbols ' + (currency || '').toLowerCase() })
            ),
            (0, _currency_base.addComma)(amount, 2)
        );
    }
    var amount_container_class = (0, _classnames2.default)('amount-container', {
        'three-columns': !is_single_currency
    });

    return _react2.default.createElement(
        _fieldset2.default,
        {
            header: (0, _localize.localize)('Invest Amount'),
            icon: 'invest-amount'
        },
        _react2.default.createElement(
            'div',
            { className: amount_container_class },
            _react2.default.createElement(_DropDown2.default, {
                list: basis_list,
                value: basis,
                name: 'basis',
                onChange: onChange,
                is_nativepicker: is_nativepicker
            }),
            !is_single_currency && _react2.default.createElement(_DropDown2.default, {
                list: currencies_list,
                value: currency,
                name: 'currency',
                onChange: onChange,
                is_nativepicker: is_nativepicker
            }),
            _react2.default.createElement(_input_field2.default, {
                error_messages: validation_errors.amount,
                fractional_digits: (0, _currency_base.getDecimalPlaces)(currency),
                is_float: true,
                is_nativepicker: is_nativepicker,
                max_length: 10,
                name: 'amount',
                onChange: onChange,
                prefix: is_single_currency ? currency : null,
                type: 'number',
                value: amount
            })
        )
    );
};

Amount.propTypes = {
    amount: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    basis: _propTypes2.default.string,
    basis_list: _mobxReact.PropTypes.arrayOrObservableArray,
    currencies_list: _mobxReact.PropTypes.observableObject,
    currency: _propTypes2.default.string,
    is_minimized: _propTypes2.default.bool,
    is_nativepicker: _propTypes2.default.bool,
    is_single_currency: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    validation_errors: _propTypes2.default.object
};

exports.default = (0, _mobxReact.observer)(Amount);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/barrier.jsx":
/*!**************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/barrier.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _fieldset = __webpack_require__(/*! ../../../../../App/Components/Form/fieldset.jsx */ "./src/javascript/app_2/App/Components/Form/fieldset.jsx");

var _fieldset2 = _interopRequireDefault(_fieldset);

var _input_field = __webpack_require__(/*! ../../../../../App/Components/Form/input_field.jsx */ "./src/javascript/app_2/App/Components/Form/input_field.jsx");

var _input_field2 = _interopRequireDefault(_input_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Barrier = function Barrier(_ref) {
    var barrier_1 = _ref.barrier_1,
        barrier_2 = _ref.barrier_2,
        barrier_count = _ref.barrier_count,
        is_minimized = _ref.is_minimized,
        onChange = _ref.onChange,
        validation_errors = _ref.validation_errors;

    if (is_minimized) {
        if (barrier_count !== 2) {
            return _react2.default.createElement(
                'div',
                { className: 'fieldset-minimized barrier1' },
                _react2.default.createElement('span', { className: 'icon barriers' }),
                barrier_1
            );
        }
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'fieldset-minimized barrier1' },
                _react2.default.createElement('span', { className: 'icon barriers' }),
                barrier_1
            ),
            _react2.default.createElement(
                'div',
                { className: 'fieldset-minimized barrier2' },
                _react2.default.createElement('span', { className: 'icon barriers' }),
                barrier_2
            )
        );
    }
    return _react2.default.createElement(
        _fieldset2.default,
        {
            header: barrier_count > 1 ? (0, _localize.localize)('Barriers') : (0, _localize.localize)('Barrier'),
            icon: 'barriers'
        },
        _react2.default.createElement(_input_field2.default, {
            type: 'number',
            name: 'barrier_1',
            value: barrier_1,
            onChange: onChange,
            error_messages: validation_errors.barrier_1 || [],
            is_float: true,
            is_signed: true
        }),
        barrier_count === 2 && _react2.default.createElement(_input_field2.default, {
            type: 'number',
            name: 'barrier_2',
            value: barrier_2,
            onChange: onChange,
            error_messages: validation_errors.barrier_2,
            is_float: true,
            is_signed: true
        })
    );
};

Barrier.propTypes = {
    barrier_1: _propTypes2.default.string,
    barrier_2: _propTypes2.default.string,
    barrier_count: _propTypes2.default.number,
    is_minimized: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    validation_errors: _propTypes2.default.object
};

exports.default = (0, _mobxReact.observer)(Barrier);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/duration.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/duration.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DatePicker = __webpack_require__(/*! ../../../../../App/Components/Form/DatePicker */ "./src/javascript/app_2/App/Components/Form/DatePicker/index.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _DropDown = __webpack_require__(/*! ../../../../../App/Components/Form/DropDown */ "./src/javascript/app_2/App/Components/Form/DropDown/index.js");

var _DropDown2 = _interopRequireDefault(_DropDown);

var _fieldset = __webpack_require__(/*! ../../../../../App/Components/Form/fieldset.jsx */ "./src/javascript/app_2/App/Components/Form/fieldset.jsx");

var _fieldset2 = _interopRequireDefault(_fieldset);

var _input_field = __webpack_require__(/*! ../../../../../App/Components/Form/input_field.jsx */ "./src/javascript/app_2/App/Components/Form/input_field.jsx");

var _input_field2 = _interopRequireDefault(_input_field);

var _time_picker = __webpack_require__(/*! ../../../../../App/Components/Form/time_picker.jsx */ "./src/javascript/app_2/App/Components/Form/time_picker.jsx");

var _time_picker2 = _interopRequireDefault(_time_picker);

var _duration = __webpack_require__(/*! ../../../../../Stores/Modules/Trading/Helpers/duration */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* TODO:
      1. disable days other than today and tomorrow if start date is forward starting
*/

var expiry_list = [{ text: (0, _localize.localize)('Duration'), value: 'duration' }];

var now_date = void 0,
    min_date_duration = void 0,
    max_date_duration = void 0,
    min_date_expiry = void 0,
    min_day = void 0,
    max_day = void 0,
    start_date_time = void 0;

var Duration = function Duration(_ref) {
    var contract_expiry_type = _ref.contract_expiry_type,
        duration = _ref.duration,
        duration_unit = _ref.duration_unit,
        duration_units_list = _ref.duration_units_list,
        duration_min_max = _ref.duration_min_max,
        expiry_date = _ref.expiry_date,
        expiry_time = _ref.expiry_time,
        expiry_type = _ref.expiry_type,
        onChange = _ref.onChange,
        is_minimized = _ref.is_minimized,
        is_nativepicker = _ref.is_nativepicker,
        server_time = _ref.server_time,
        sessions = _ref.sessions,
        start_date = _ref.start_date,
        start_time = _ref.start_time,
        validation_errors = _ref.validation_errors;

    if (duration_min_max[contract_expiry_type]) {
        var moment_now = (0, _moment2.default)(server_time);
        var new_min_day = (0, _duration.convertDurationUnit)(duration_min_max[contract_expiry_type].min, 's', 'd');
        var new_max_day = (0, _duration.convertDurationUnit)(duration_min_max[contract_expiry_type].max, 's', 'd');
        if (!now_date || moment_now.date() !== now_date.date() || duration_unit === 'd' && (min_day !== new_min_day || max_day !== new_max_day)) {
            if (duration_unit === 'd') {
                min_day = new_min_day;
                max_day = new_max_day;
            }

            var moment_today = moment_now.clone().startOf('day');

            now_date = moment_now.clone();
            min_date_duration = moment_today.clone().add(min_day || 1, 'd');
            max_date_duration = moment_today.clone().add(max_day || 365, 'd');
            min_date_expiry = moment_today.clone();
        }
    }

    var moment_expiry = _moment2.default.utc(expiry_date);
    var is_same_day = moment_expiry.isSame((0, _moment2.default)(start_date * 1000 || undefined).utc(), 'day');
    if (is_same_day) {
        var date_time = _moment2.default.utc(start_date * 1000 || undefined);
        if (start_date) {
            var _start_time$split = start_time.split(':'),
                _start_time$split2 = _slicedToArray(_start_time$split, 2),
                hour = _start_time$split2[0],
                minute = _start_time$split2[1];

            date_time.hour(hour).minute(minute).second(0).add(5, 'minutes');
        }
        // only update start time every five minutes, since time picker shows five minute durations
        var moment_start_date_time = _moment2.default.unix(start_date_time);
        if (!start_date_time || moment_start_date_time.isAfter(date_time) || moment_start_date_time.clone().add(5, 'minutes').isBefore(date_time) || moment_start_date_time.minutes() !== date_time.minutes() && date_time.minutes() % 5 === 0) {
            start_date_time = date_time.unix();
        }
    }
    if (is_minimized) {
        var duration_unit_text = (duration_units_list.find(function (o) {
            return o.value === duration_unit;
        }) || {}).text;
        return _react2.default.createElement(
            'div',
            { className: 'fieldset-minimized duration' },
            _react2.default.createElement('span', { className: 'icon trade-duration' }),
            expiry_type === 'duration' ? duration + ' ' + duration_unit_text : moment_expiry.format('ddd - DD MMM, YYYY') + '\n' + expiry_time
        );
    }
    var datepicker_footer = min_day > 1 ? (0, _localize.localize)('The minimum duration is [_1] days', [min_day]) : (0, _localize.localize)('The minimum duration is [_1] day', [min_day]);

    var has_end_time = expiry_list.find(function (expiry) {
        return expiry.value === 'endtime';
    });
    if (duration_units_list.length === 1 && duration_unit === 't') {
        if (has_end_time) {
            expiry_list.pop(); // remove end time for contracts with only tick duration
        }
    } else if (!has_end_time) {
        expiry_list.push({ text: (0, _localize.localize)('End Time'), value: 'endtime' });
    }

    var endtime_container_class = (0, _classnames2.default)('endtime-container', {
        'has-time': is_same_day
    });

    return _react2.default.createElement(
        _fieldset2.default,
        {
            header: (0, _localize.localize)('Trade Duration'),
            icon: 'trade-duration'
        },
        _react2.default.createElement(_DropDown2.default, {
            list: expiry_list,
            value: expiry_type,
            name: 'expiry_type',
            onChange: onChange,
            is_nativepicker: is_nativepicker
        }),
        expiry_type === 'duration' ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'duration-container' },
                duration_unit === 'd' && !is_nativepicker ? _react2.default.createElement(_DatePicker2.default, {
                    name: 'duration',
                    min_date: min_date_duration,
                    max_date: max_date_duration,
                    mode: 'duration',
                    onChange: onChange,
                    value: duration || min_day,
                    is_read_only: true,
                    is_clearable: false,
                    is_nativepicker: is_nativepicker,
                    footer: datepicker_footer
                }) : _react2.default.createElement(_input_field2.default, {
                    type: 'number',
                    name: 'duration',
                    value: duration,
                    onChange: onChange,
                    is_nativepicker: is_nativepicker,
                    error_messages: validation_errors.duration || []
                }),
                _react2.default.createElement(_DropDown2.default, {
                    list: duration_units_list,
                    value: duration_unit,
                    name: 'duration_unit',
                    onChange: onChange,
                    is_nativepicker: is_nativepicker
                })
            )
        ) : _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: endtime_container_class },
                _react2.default.createElement(_DatePicker2.default, {
                    name: 'expiry_date',
                    has_today_btn: true,
                    min_date: min_date_expiry,
                    max_date: max_date_duration,
                    start_date: start_date,
                    onChange: onChange,
                    value: expiry_date,
                    is_read_only: true,
                    is_clearable: false,
                    is_nativepicker: is_nativepicker
                }),
                is_same_day && _react2.default.createElement(_time_picker2.default, {
                    onChange: onChange,
                    is_align_right: true,
                    name: 'expiry_time',
                    value: expiry_time,
                    placeholder: '12:00',
                    start_date: start_date_time,
                    sessions: sessions,
                    is_clearable: false,
                    is_nativepicker: is_nativepicker
                })
            )
        )
    );
};

// ToDo: Refactor Duration.jsx and date_picker.jsx
Duration.propTypes = {
    contract_expiry_type: _propTypes2.default.string,
    duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    duration_min_max: _propTypes2.default.object,
    duration_unit: _propTypes2.default.string,
    duration_units_list: _mobxReact.PropTypes.arrayOrObservableArray,
    expiry_date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    expiry_time: _propTypes2.default.string,
    expiry_type: _propTypes2.default.string,
    is_minimized: _propTypes2.default.bool,
    is_nativepicker: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    server_time: _propTypes2.default.object,
    sessions: _mobxReact.PropTypes.arrayOrObservableArray,
    start_date: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    start_time: _propTypes2.default.string,
    validation_errors: _propTypes2.default.object
};

exports.default = (0, _mobxReact.observer)(Duration);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/last_digit.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/last_digit.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DropDown = __webpack_require__(/*! ../../../../../App/Components/Form/DropDown */ "./src/javascript/app_2/App/Components/Form/DropDown/index.js");

var _DropDown2 = _interopRequireDefault(_DropDown);

var _fieldset = __webpack_require__(/*! ../../../../../App/Components/Form/fieldset.jsx */ "./src/javascript/app_2/App/Components/Form/fieldset.jsx");

var _fieldset2 = _interopRequireDefault(_fieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var last_digit_numbers = [].concat(_toConsumableArray(Array(10).keys())).map(function (number) {
    return {
        text: number,
        value: number
    };
});

var LastDigit = function LastDigit(_ref) {
    var is_minimized = _ref.is_minimized,
        is_nativepicker = _ref.is_nativepicker,
        last_digit = _ref.last_digit,
        onChange = _ref.onChange;

    if (is_minimized) {
        return _react2.default.createElement(
            'div',
            { className: 'fieldset-minimized' },
            _react2.default.createElement('span', { className: 'icon digits' }),
            (0, _localize.localize)('Last Digit') + ': ' + last_digit
        );
    }
    return _react2.default.createElement(
        _fieldset2.default,
        {
            header: (0, _localize.localize)('Last Digit Prediction'),
            icon: 'digits'
        },
        _react2.default.createElement(_DropDown2.default, {
            list: last_digit_numbers,
            value: +last_digit,
            name: 'last_digit',
            onChange: onChange,
            is_nativepicker: is_nativepicker
        })
    );
};

LastDigit.propTypes = {
    is_minimized: _propTypes2.default.bool,
    is_nativepicker: _propTypes2.default.bool,
    last_digit: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    onChange: _propTypes2.default.func
};

exports.default = (0, _mobxReact.observer)(LastDigit);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/start_date.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/start_date.jsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DropDown = __webpack_require__(/*! ../../../../../App/Components/Form/DropDown */ "./src/javascript/app_2/App/Components/Form/DropDown/index.js");

var _DropDown2 = _interopRequireDefault(_DropDown);

var _fieldset = __webpack_require__(/*! ../../../../../App/Components/Form/fieldset.jsx */ "./src/javascript/app_2/App/Components/Form/fieldset.jsx");

var _fieldset2 = _interopRequireDefault(_fieldset);

var _time_picker = __webpack_require__(/*! ../../../../../App/Components/Form/time_picker.jsx */ "./src/javascript/app_2/App/Components/Form/time_picker.jsx");

var _time_picker2 = _interopRequireDefault(_time_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* TODO:
    1. update sessions list when the selected one doesn’t have any enabled time
*/

var StartDate = function StartDate(_ref) {
    var is_minimized = _ref.is_minimized,
        is_nativepicker = _ref.is_nativepicker,
        onChange = _ref.onChange,
        sessions = _ref.sessions,
        start_date = _ref.start_date,
        start_dates_list = _ref.start_dates_list,
        start_time = _ref.start_time;

    // Number(0) refers to 'now'
    var is_today = start_date === Number(0);
    var current_date_config = '';
    if (!is_today) {
        current_date_config = start_dates_list.find(function (o) {
            return o.value === +start_date;
        }) || {};
    }
    if (is_minimized) {
        return _react2.default.createElement(
            'div',
            { className: 'fieldset-minimized start-date' },
            _react2.default.createElement('span', { className: 'icon start-time' }),
            is_today ? (0, _localize.localize)('Now') : current_date_config.text + '\n' + start_time
        );
    }
    return _react2.default.createElement(
        _fieldset2.default,
        {
            header: (0, _localize.localize)('Start time'),
            icon: 'start-time'
        },
        _react2.default.createElement(_DropDown2.default, {
            name: 'start_date',
            value: start_date,
            list: start_dates_list,
            onChange: onChange,
            is_nativepicker: is_nativepicker
        }),
        !is_today && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_time_picker2.default, {
                onChange: onChange,
                is_align_right: true,
                name: 'start_time',
                value: start_time,
                placeholder: '12:00',
                start_date: start_date,
                sessions: sessions,
                is_clearable: false,
                is_nativepicker: is_nativepicker
            })
        )
    );
};

StartDate.propTypes = {
    is_minimized: _propTypes2.default.bool,
    is_nativepicker: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    sessions: _mobxReact.PropTypes.arrayOrObservableArray,
    start_date: _propTypes2.default.number,
    start_dates_list: _mobxReact.PropTypes.arrayOrObservableArray,
    start_time: _propTypes2.default.string
};

exports.default = (0, _mobxReact.observer)(StartDate);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/form_layout.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/form_layout.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _screen_large = __webpack_require__(/*! ./screen_large.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/screen_large.jsx");

var _screen_large2 = _interopRequireDefault(_screen_large);

var _screen_small = __webpack_require__(/*! ./screen_small.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/screen_small.jsx");

var _screen_small2 = _interopRequireDefault(_screen_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLayout = function FormLayout(_ref) {
    var is_contract_visible = _ref.is_contract_visible,
        is_mobile = _ref.is_mobile,
        is_trade_enabled = _ref.is_trade_enabled;
    return is_mobile ? _react2.default.createElement(_screen_small2.default, {
        is_trade_enabled: is_trade_enabled
    }) : _react2.default.createElement(_screen_large2.default, {
        is_contract_visible: is_contract_visible,
        is_trade_enabled: is_trade_enabled
    });
};

FormLayout.propTypes = {
    is_contract_visible: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_trade_enabled: _propTypes2.default.bool
};

exports.default = FormLayout;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/screen_large.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/screen_large.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ui_loader = __webpack_require__(/*! ../../../../App/Components/Elements/ui_loader.jsx */ "./src/javascript/app_2/App/Components/Elements/ui_loader.jsx");

var _ui_loader2 = _interopRequireDefault(_ui_loader);

var _contract_type = __webpack_require__(/*! ../../Containers/contract_type.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/contract_type.jsx");

var _contract_type2 = _interopRequireDefault(_contract_type);

var _purchase = __webpack_require__(/*! ../../Containers/purchase.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/purchase.jsx");

var _purchase2 = _interopRequireDefault(_purchase);

var _trade_params = __webpack_require__(/*! ../../Containers/trade_params.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/trade_params.jsx");

var _trade_params2 = _interopRequireDefault(_trade_params);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenLarge = function ScreenLarge(_ref) {
    var is_contract_visible = _ref.is_contract_visible,
        is_trade_enabled = _ref.is_trade_enabled;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('sidebar-items', {
                'sidebar-items__slideout': is_contract_visible
            })
        },
        !is_trade_enabled && !is_contract_visible ? _react2.default.createElement(_ui_loader2.default, null) : _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'fieldset',
                { className: 'trade-types' },
                _react2.default.createElement(_contract_type2.default, null)
            ),
            _react2.default.createElement(_trade_params2.default, null),
            _react2.default.createElement(
                'div',
                { className: 'purchase-wrapper' },
                _react2.default.createElement(_purchase2.default, null)
            )
        )
    );
};

ScreenLarge.propTypes = {
    is_contract_visible: _propTypes2.default.bool,
    is_trade_enabled: _propTypes2.default.bool
};

exports.default = ScreenLarge;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Components/Form/screen_small.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Components/Form/screen_small.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mobile_widget = __webpack_require__(/*! ../Elements/mobile_widget.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Elements/mobile_widget.jsx");

var _mobile_widget2 = _interopRequireDefault(_mobile_widget);

var _contract_type = __webpack_require__(/*! ../../Containers/contract_type.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/contract_type.jsx");

var _contract_type2 = _interopRequireDefault(_contract_type);

var _purchase = __webpack_require__(/*! ../../Containers/purchase.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/purchase.jsx");

var _purchase2 = _interopRequireDefault(_purchase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenSmall = function ScreenSmall() {
    return (/* { is_trade_enabled } */_react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_contract_type2.default, null),
            _react2.default.createElement(
                'div',
                { className: 'mobile-only' },
                _react2.default.createElement(_mobile_widget2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'purchase-wrapper' },
                _react2.default.createElement(_purchase2.default, null)
            )
        )
    );
};

ScreenSmall.propTypes = {
    is_trade_enabled: _propTypes2.default.bool
};

exports.default = ScreenSmall;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Containers/contract_type.jsx":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Containers/contract_type.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _contract_type_widget = __webpack_require__(/*! ../Components/Form/ContractType/contract_type_widget.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/ContractType/contract_type_widget.jsx");

var _contract_type_widget2 = _interopRequireDefault(_contract_type_widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contract = function Contract(_ref) {
    var contract_type = _ref.contract_type,
        contract_types_list = _ref.contract_types_list,
        onChange = _ref.onChange,
        is_mobile = _ref.is_mobile;
    return _react2.default.createElement(_contract_type_widget2.default, {
        name: 'contract_type',
        list: contract_types_list,
        value: contract_type,
        onChange: onChange,
        is_mobile: is_mobile
    });
};

Contract.propTypes = {
    contract_type: _propTypes2.default.string,
    contract_types_list: _propTypes2.default.object,
    is_mobile: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        ui = _ref2.ui;
    return {
        contract_type: modules.trade.contract_type,
        contract_types_list: modules.trade.contract_types_list,
        onChange: modules.trade.onChange,
        is_mobile: ui.is_mobile
    };
})(Contract);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Containers/purchase.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Containers/purchase.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _utility = __webpack_require__(/*! ../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _PopConfirm = __webpack_require__(/*! ../../../App/Components/Elements/PopConfirm */ "./src/javascript/app_2/App/Components/Elements/PopConfirm/index.js");

var _ui_loader = __webpack_require__(/*! ../../../App/Components/Elements/ui_loader.jsx */ "./src/javascript/app_2/App/Components/Elements/ui_loader.jsx");

var _ui_loader2 = _interopRequireDefault(_ui_loader);

var _button = __webpack_require__(/*! ../../../App/Components/Form/button.jsx */ "./src/javascript/app_2/App/Components/Form/button.jsx");

var _button2 = _interopRequireDefault(_button);

var _fieldset = __webpack_require__(/*! ../../../App/Components/Form/fieldset.jsx */ "./src/javascript/app_2/App/Components/Form/fieldset.jsx");

var _fieldset2 = _interopRequireDefault(_fieldset);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _contract_info = __webpack_require__(/*! ../Components/Form/Purchase/contract_info.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/contract_info.jsx");

var _contract_info2 = _interopRequireDefault(_contract_info);

var _MessageBox = __webpack_require__(/*! ../Components/Form/Purchase/MessageBox */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/MessageBox/index.js");

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _PurchaseLock = __webpack_require__(/*! ../Components/Form/Purchase/PurchaseLock */ "./src/javascript/app_2/Modules/Trading/Components/Form/Purchase/PurchaseLock/index.js");

var _PurchaseLock2 = _interopRequireDefault(_PurchaseLock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Purchase = function Purchase(_ref) {
    var barrier_count = _ref.barrier_count,
        currency = _ref.currency,
        is_client_allowed_to_visit = _ref.is_client_allowed_to_visit,
        is_purchase_confirm_on = _ref.is_purchase_confirm_on,
        is_purchase_enabled = _ref.is_purchase_enabled,
        is_purchase_locked = _ref.is_purchase_locked,
        is_trade_enabled = _ref.is_trade_enabled,
        onClickPurchase = _ref.onClickPurchase,
        onHoverPurchase = _ref.onHoverPurchase,
        togglePurchaseLock = _ref.togglePurchaseLock,
        resetPurchase = _ref.resetPurchase,
        proposal_info = _ref.proposal_info,
        purchase_info = _ref.purchase_info,
        trade_types = _ref.trade_types;
    return Object.keys(trade_types).map(function (type, idx) {
        var info = proposal_info[type] || {};
        var is_disabled = !is_purchase_enabled || !is_trade_enabled || !info.id || !is_client_allowed_to_visit;

        var purchase_button = _react2.default.createElement(_button2.default, {
            is_disabled: is_disabled,
            id: 'purchase_' + type,
            className: 'primary green',
            has_effect: true,
            text: (0, _localize.localize)('Purchase'),
            onClick: function onClick() {
                onClickPurchase(info.id, info.stake, type);
            },
            wrapperClassName: 'submit-section'
        });

        var is_purchase_error = !(0, _utility.isEmptyObject)(purchase_info) && purchase_info.echo_req.buy === info.id;

        return _react2.default.createElement(
            _fieldset2.default,
            {
                className: 'purchase-option',
                key: idx,
                onMouseEnter: function onMouseEnter() {
                    onHoverPurchase(true, type);
                },
                onMouseLeave: function onMouseLeave() {
                    onHoverPurchase(false);
                }
            },
            is_purchase_locked && idx === 0 && _react2.default.createElement(_PurchaseLock2.default, { onClick: togglePurchaseLock }),
            is_purchase_error ? _react2.default.createElement(_MessageBox2.default, {
                purchase_info: purchase_info,
                onClick: resetPurchase,
                currency: currency
            }) : _react2.default.createElement(
                _react2.default.Fragment,
                null,
                !is_purchase_enabled && idx === 0 && _react2.default.createElement(_ui_loader2.default, null),
                _react2.default.createElement(_contract_info2.default, {
                    barrier_count: barrier_count,
                    contract_title: trade_types[type],
                    contract_type: type,
                    currency: currency,
                    proposal_info: info
                }),
                is_purchase_confirm_on ? _react2.default.createElement(
                    _PopConfirm.PopConfirm,
                    {
                        alignment: 'left',
                        cancel_text: (0, _localize.localize)('Cancel'),
                        confirm_text: (0, _localize.localize)('Purchase'),
                        message: (0, _localize.localize)('Are you sure you want to purchase this contract?')
                    },
                    purchase_button
                ) : purchase_button
            )
        );
    });
};

Purchase.propTypes = {
    barrier_count: _propTypes2.default.number,
    currency: _propTypes2.default.string,
    is_client_allowed_to_visit: _propTypes2.default.bool,
    is_purchase_confirm_on: _propTypes2.default.bool,
    is_purchase_enabled: _propTypes2.default.bool,
    is_purchase_locked: _propTypes2.default.bool,
    is_trade_enabled: _propTypes2.default.bool,
    onClickPurchase: _propTypes2.default.func,
    onHoverPurchase: _propTypes2.default.func,
    proposal_info: _propTypes2.default.object,
    purchase_info: _propTypes2.default.object,
    resetPurchase: _propTypes2.default.func,
    togglePurchaseLock: _propTypes2.default.func,
    trade_types: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var client = _ref2.client,
        modules = _ref2.modules,
        ui = _ref2.ui;
    return {
        currency: client.currency,
        is_client_allowed_to_visit: client.is_client_allowed_to_visit,
        barrier_count: modules.trade.barrier_count,
        is_purchase_enabled: modules.trade.is_purchase_enabled,
        is_trade_enabled: modules.trade.is_trade_enabled,
        onClickPurchase: modules.trade.onPurchase,
        onHoverPurchase: modules.trade.onHoverPurchase,
        resetPurchase: modules.trade.requestProposal,
        proposal_info: modules.trade.proposal_info,
        purchase_info: modules.trade.purchase_info,
        trade_types: modules.trade.trade_types,
        is_purchase_confirm_on: ui.is_purchase_confirm_on,
        is_purchase_locked: ui.is_purchase_lock_on,
        togglePurchaseLock: ui.togglePurchaseLock
    };
})(Purchase);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Containers/test.jsx":
/*!******************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Containers/test.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Test);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.state = { is_visible: false }, _this.setVisibility = _this.stateVisibility.bind(_this), _this.styles = {
            container: {
                fontSize: '10px',
                lineHeight: '15px',
                position: 'absolute',
                zIndex: 1,
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#ccc',
                padding: '10px',
                marginTop: '-10px',
                display: 'none',
                overflowY: 'auto',
                height: '100%'
            },
            prop_name: {
                color: 'yellowgreen'
            }
        }, _this.componentDidMount = function () {
            document.addEventListener('keyup', _this.setVisibility, false);
        }, _this.componentWillUnmount = function () {
            document.removeEventListener('keyup', _this.setVisibility);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Test, [{
        key: 'stateVisibility',
        value: function stateVisibility(e) {
            if (e.ctrlKey && e.keyCode === 83) {
                // Ctrl + S
                this.setState({ is_visible: !this.state.is_visible });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'code',
                { id: 'state_info', style: Object.assign({}, this.styles.container, { display: this.state.is_visible ? 'block' : 'none' }) },
                this.props.entries.sort().map(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                        k = _ref3[0],
                        v = _ref3[1];

                    return k !== 'root_store' && typeof v !== 'function' && _react2.default.createElement(
                        'div',
                        { key: k },
                        _react2.default.createElement(
                            'span',
                            { style: _this2.styles.prop_name },
                            k,
                            ':'
                        ),
                        ' ',
                        v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? JSON.stringify((0, _mobx.toJS)(v), null, 1) : v
                    );
                })
            );
        }
    }]);

    return Test;
}(_react2.default.Component);

Test.propTypes = {
    entries: _propTypes2.default.array
};

exports.default = (0, _connect.connect)(function (_ref4) {
    var modules = _ref4.modules;
    return {
        entries: Object.entries(modules.trade)
    };
})(Test);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Containers/trade.jsx":
/*!*******************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Containers/trade.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _utility = __webpack_require__(/*! ../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _ui_loader = __webpack_require__(/*! ../../../App/Components/Elements/ui_loader.jsx */ "./src/javascript/app_2/App/Components/Elements/ui_loader.jsx");

var _ui_loader2 = _interopRequireDefault(_ui_loader);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _test = __webpack_require__(/*! ./test.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/test.jsx");

var _test2 = _interopRequireDefault(_test);

var _form_layout = __webpack_require__(/*! ../Components/Form/form_layout.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/form_layout.jsx");

var _form_layout2 = _interopRequireDefault(_form_layout);

var _contract_details = __webpack_require__(/*! ../../Contract/Containers/contract_details.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/contract_details.jsx");

var _contract_details2 = _interopRequireDefault(_contract_details);

var _info_box = __webpack_require__(/*! ../../Contract/Containers/info_box.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/info_box.jsx");

var _info_box2 = _interopRequireDefault(_info_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartChart = _react2.default.lazy(function () {
    return Promise.all(/*! import() | smart_chart */[__webpack_require__.e("vendors~smart_chart"), __webpack_require__.e("smart_chart")]).then(__webpack_require__.t.bind(null, /*! ../../SmartChart */ "./src/javascript/app_2/Modules/SmartChart/index.js", 7));
});

var Trade = function (_React$Component) {
    _inherits(Trade, _React$Component);

    function Trade() {
        _classCallCheck(this, Trade);

        return _possibleConstructorReturn(this, (Trade.__proto__ || Object.getPrototypeOf(Trade)).apply(this, arguments));
    }

    _createClass(Trade, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var contract_id = (0, _utility.getPropertyValue)(this.props.purchase_info, ['buy', 'contract_id']);
            var form_wrapper_class = this.props.is_mobile ? 'mobile-wrapper' : 'sidebar-container desktop-only';

            return _react2.default.createElement(
                'div',
                { id: 'trade_container', className: 'trade-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'chart-container notice-msg' },
                    this.props.symbol && _react2.default.createElement(
                        _react2.default.Suspense,
                        { fallback: _react2.default.createElement(_ui_loader2.default, null) },
                        _react2.default.createElement(SmartChart, {
                            chart_id: this.props.chart_id,
                            InfoBox: _react2.default.createElement(_info_box2.default, { is_trade_page: true }),
                            onSymbolChange: this.props.onSymbolChange,
                            symbol: this.props.symbol,
                            chart_type: this.props.chart_type,
                            granularity: this.props.granularity,
                            updateChartType: this.props.updateChartType,
                            updateGranularity: this.props.updateGranularity
                        })
                    ),
                    _react2.default.createElement(_test2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: form_wrapper_class
                    },
                    _react2.default.createElement(_form_layout2.default, {
                        is_mobile: this.props.is_mobile,
                        is_contract_visible: !!contract_id,
                        is_trade_enabled: this.props.is_trade_enabled
                    }),
                    _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        {
                            'in': !!contract_id,
                            timeout: 400,
                            classNames: 'contract-wrapper',
                            unmountOnExit: true
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-wrapper' },
                            _react2.default.createElement(_contract_details2.default, {
                                contract_id: contract_id,
                                onClickNewTrade: this.props.onClickNewTrade
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Trade;
}(_react2.default.Component);

Trade.propTypes = {
    chart_id: _propTypes2.default.number,
    is_contract_mode: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_trade_enabled: _propTypes2.default.bool,
    onClickNewTrade: _propTypes2.default.func,
    onMount: _propTypes2.default.func,
    onSymbolChange: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    purchase_info: _propTypes2.default.object,
    symbol: _propTypes2.default.string
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        ui = _ref.ui;
    return {
        chart_type: modules.smart_chart.chart_type,
        granularity: modules.smart_chart.granularity,
        is_contract_mode: modules.smart_chart.is_contract_mode,
        updateChartType: modules.smart_chart.updateChartType,
        updateGranularity: modules.smart_chart.updateGranularity,
        chart_id: modules.trade.chart_id,
        is_trade_enabled: modules.trade.is_trade_enabled,
        onClickNewTrade: modules.trade.onClickNewTrade,
        onMount: modules.trade.onMount,
        onSymbolChange: modules.trade.onChange,
        onUnmount: modules.trade.onUnmount,
        purchase_info: modules.trade.purchase_info,
        symbol: modules.trade.symbol,
        is_mobile: ui.is_mobile
    };
})(Trade);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/Containers/trade_params.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/Containers/trade_params.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _ui = __webpack_require__(/*! ../../../Stores/Modules/Trading/Constants/ui */ "./src/javascript/app_2/Stores/Modules/Trading/Constants/ui.js");

var _component = __webpack_require__(/*! ../../../Utils/React/component */ "./src/javascript/app_2/Utils/React/component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TradeParams = function (_React$Component) {
    _inherits(TradeParams, _React$Component);

    function TradeParams() {
        _classCallCheck(this, TradeParams);

        return _possibleConstructorReturn(this, (TradeParams.__proto__ || Object.getPrototypeOf(TradeParams)).apply(this, arguments));
    }

    _createClass(TradeParams, [{
        key: 'isVisible',
        value: function isVisible(component_name) {
            return this.props.form_components.includes(component_name);
        }
    }, {
        key: 'renderCards',
        value: function renderCards() {
            var _this2 = this;

            return _ui.form_components.filter(function (_ref) {
                var name = _ref.name;
                return _this2.isVisible(name);
            }).map(function (_ref2) {
                var name = _ref2.name,
                    Component = _ref2.Component;
                return _react2.default.createElement(Component, _extends({
                    key: name,
                    is_minimized: _this2.props.is_minimized,
                    is_nativepicker: _this2.props.is_nativepicker
                }, (0, _component.getComponentProperties)(Component, _this2.props.trade_store, {
                    server_time: _this2.props.server_time
                }, _this2.props.client_store)));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderCards();
        }
    }]);

    return TradeParams;
}(_react2.default.Component);

TradeParams.propTypes = {
    client_store: _propTypes2.default.object,
    form_components: _mobxReact.PropTypes.arrayOrObservableArray,
    is_minimized: _propTypes2.default.bool,
    is_nativepicker: _propTypes2.default.bool,
    server_time: _propTypes2.default.object,
    trade_store: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref3) {
    var client = _ref3.client,
        common = _ref3.common,
        modules = _ref3.modules;
    return {
        client_store: client,
        server_time: common.server_time,
        form_components: modules.trade.form_components,
        trade_store: modules.trade
    };
})(TradeParams);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Trading/index.js":
/*!*******************************************************!*\
  !*** ./src/javascript/app_2/Modules/Trading/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _trade = __webpack_require__(/*! ./Containers/trade.jsx */ "./src/javascript/app_2/Modules/Trading/Containers/trade.jsx");

var _trade2 = _interopRequireDefault(_trade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _trade2.default;

/***/ }),

/***/ "./src/javascript/app_2/Services/index.js":
/*!************************************************!*\
  !*** ./src/javascript/app_2/Services/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WS = exports.BinarySocketGeneral = undefined;

var _logout = __webpack_require__(/*! ./logout */ "./src/javascript/app_2/Services/logout.js");

Object.keys(_logout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _logout[key];
    }
  });
});

var _socket_general = __webpack_require__(/*! ./socket_general */ "./src/javascript/app_2/Services/socket_general.js");

var _socket_general2 = _interopRequireDefault(_socket_general);

var _ws_methods = __webpack_require__(/*! ./ws_methods */ "./src/javascript/app_2/Services/ws_methods.js");

var _ws_methods2 = _interopRequireDefault(_ws_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BinarySocketGeneral = _socket_general2.default;
exports.WS = _ws_methods2.default;

/***/ }),

/***/ "./src/javascript/app_2/Services/logout.js":
/*!*************************************************!*\
  !*** ./src/javascript/app_2/Services/logout.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestLogout = undefined;

var _client_base = __webpack_require__(/*! ../../_common/base/client_base */ "./src/javascript/_common/base/client_base.js");

var _client_base2 = _interopRequireDefault(_client_base);

var _socket_cache = __webpack_require__(/*! ../../_common/base/socket_cache */ "./src/javascript/_common/base/socket_cache.js");

var _socket_cache2 = _interopRequireDefault(_socket_cache);

var _storage = __webpack_require__(/*! ../../_common/storage */ "./src/javascript/_common/storage.js");

var _ws_methods = __webpack_require__(/*! ./ws_methods */ "./src/javascript/app_2/Services/ws_methods.js");

var _ws_methods2 = _interopRequireDefault(_ws_methods);

var _gtm = __webpack_require__(/*! ../Utils/gtm */ "./src/javascript/app_2/Utils/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestLogout = exports.requestLogout = function requestLogout() {
    _ws_methods2.default.logout().then(doLogout);
};

var doLogout = function doLogout(response) {
    if (response.logout !== 1) return;
    _gtm2.default.pushDataLayer({ event: 'log_out' });
    (0, _storage.removeCookies)('affiliate_token', 'affiliate_tracking');
    _client_base2.default.clearAllAccounts();
    _client_base2.default.set('loginid', '');
    _socket_cache2.default.clear();
    window.location.reload();
};

/***/ }),

/***/ "./src/javascript/app_2/Services/network_monitor.js":
/*!**********************************************************!*\
  !*** ./src/javascript/app_2/Services/network_monitor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _network_monitor_base = __webpack_require__(/*! ../../_common/base/network_monitor_base */ "./src/javascript/_common/base/network_monitor_base.js");

var _network_monitor_base2 = _interopRequireDefault(_network_monitor_base);

var _index = __webpack_require__(/*! ./index */ "./src/javascript/app_2/Services/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common_store = void 0; // eslint-disable-line import/order


var NetworkMonitor = function () {
    var init = function init(store) {
        _network_monitor_base2.default.init(_index.BinarySocketGeneral.init(store), updateStore);
        common_store = store.common;
    };

    var updateStore = (0, _mobx.action)(function (status, is_online) {
        if (common_store) {
            common_store.network_status = status;
            common_store.is_network_online = is_online;
        }
    });

    return {
        init: init
    };
}();

exports.default = NetworkMonitor;

/***/ }),

/***/ "./src/javascript/app_2/Services/outdated_browser.js":
/*!***********************************************************!*\
  !*** ./src/javascript/app_2/Services/outdated_browser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var common_store = void 0;

var OutdatedBrowser = function () {
    var init = function init(store) {
        common_store = store.common;

        var src = '//browser-update.org/update.min.js';
        if (document.querySelector('script[src*="' + src + '"]')) return;
        window.$buoop = {
            vs: { i: 11, f: -4, o: -4, s: 9, c: -4 },
            api: 4,
            url: 'https://whatbrowser.org/',
            noclose: true, // Do not show the 'ignore' button to close the notification
            reminder: 0, // show all the time
            onshow: updateStore,
            nomessage: true,
            insecure: true
        };
        if (document.body) {
            var script = document.createElement('script');
            script.setAttribute('src', src);
            document.body.appendChild(script);
        }
    };

    var updateStore = (0, _mobx.action)('showError', function () {
        if (common_store) {
            common_store.showError({
                str: 'Your web browser is out of date and may affect your trading experience. Please [_1]update your browser[_2].',
                replacers: {
                    '1_2': {
                        tagName: 'A',
                        href: 'http://outdatedbrowser.com',
                        rel: 'noopener noreferrer',
                        target: '_blank'
                    }
                }
            });
        }
    });

    return {
        init: init
    };
}();

exports.default = OutdatedBrowser;

/***/ }),

/***/ "./src/javascript/app_2/Services/socket_general.js":
/*!*********************************************************!*\
  !*** ./src/javascript/app_2/Services/socket_general.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _currency_base = __webpack_require__(/*! ../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _login = __webpack_require__(/*! ../../_common/base/login */ "./src/javascript/_common/base/login.js");

var _login2 = _interopRequireDefault(_login);

var _server_time = __webpack_require__(/*! ../../_common/base/server_time */ "./src/javascript/_common/base/server_time.js");

var _server_time2 = _interopRequireDefault(_server_time);

var _socket_base = __webpack_require__(/*! ../../_common/base/socket_base */ "./src/javascript/_common/base/socket_base.js");

var _socket_base2 = _interopRequireDefault(_socket_base);

var _storage = __webpack_require__(/*! ../../_common/storage */ "./src/javascript/_common/storage.js");

var _utility = __webpack_require__(/*! ../../_common/utility */ "./src/javascript/_common/utility.js");

var _logout = __webpack_require__(/*! ./logout */ "./src/javascript/app_2/Services/logout.js");

var _ws_methods = __webpack_require__(/*! ./ws_methods */ "./src/javascript/app_2/Services/ws_methods.js");

var _ws_methods2 = _interopRequireDefault(_ws_methods);

var _gtm = __webpack_require__(/*! ../Utils/gtm */ "./src/javascript/app_2/Utils/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client_store = void 0,
    common_store = void 0;

// TODO: update commented statements to the corresponding functions from app_2
var BinarySocketGeneral = function () {
    var onDisconnect = function onDisconnect() {
        common_store.setIsSocketOpened(false);
    };

    var onOpen = function onOpen(is_ready) {
        // Header.hideNotification();
        if (is_ready) {
            if (!_login2.default.isLoginPages()) {
                if (!client_store.is_valid_login) {
                    (0, _logout.requestLogout)();
                    return;
                }
                _ws_methods2.default.subscribeWebsiteStatus(ResponseHandlers.websiteStatus);
            }
            _server_time2.default.init((0, _mobx.action)('setTime', function () {
                common_store.server_time = _server_time2.default.get();
            }));
            common_store.setIsSocketOpened(true);
        }
    };

    var onMessage = function onMessage(response) {
        handleError(response);
        // Header.hideNotification('CONNECTION_ERROR');
        switch (response.msg_type) {
            case 'authorize':
                if (response.error) {
                    var is_active_tab = sessionStorage.getItem('active_tab') === '1';
                    if ((0, _utility.getPropertyValue)(response, ['error', 'code']) === 'SelfExclusion' && is_active_tab) {
                        sessionStorage.removeItem('active_tab');
                        // Dialog.alert({ id: 'authorize_error_alert', message: response.error.message });
                    }
                    (0, _logout.requestLogout)();
                } else if (!_login2.default.isLoginPages() && !/authorize/.test(_storage.State.get('skip_response'))) {
                    if (response.authorize.loginid !== client_store.loginid) {
                        (0, _logout.requestLogout)();
                    } else {
                        client_store.responseAuthorize(response);
                        _ws_methods2.default.subscribeBalance(ResponseHandlers.balance);
                        _ws_methods2.default.getSettings();
                        _ws_methods2.default.getAccountStatus();
                        _ws_methods2.default.payoutCurrencies();
                        _ws_methods2.default.mt5LoginList();
                        setResidence(response.authorize.country || client_store.accounts[client_store.loginid].residence);
                        if (!client_store.is_virtual) {
                            _ws_methods2.default.getSelfExclusion();
                        }
                        _socket_base2.default.sendBuffered();
                        if (/bch/i.test(response.authorize.currency) && !client_store.accounts[client_store.loginid].accepted_bch) {
                            // showPopup({
                            //     url        : urlFor('user/warning'),
                            //     popup_id   : 'warning_popup',
                            //     form_id    : '#frm_warning',
                            //     content_id : '#warning_content',
                            //     validations: [{ selector: '#chk_accept', validations: [['req', { hide_asterisk: true }]] }],
                            //     onAccept   : () => { Client.set('accepted_bch', 1); },
                            // });
                        }
                    }
                }
                break;
            case 'landing_company':
                // Header.upgradeMessageVisibility();
                break;
            case 'get_self_exclusion':
                // SessionDurationLimit.exclusionResponseHandler(response);
                break;
            case 'get_settings':
                if (response.get_settings) {
                    setResidence(response.get_settings.country_code);
                    client_store.setEmail(response.get_settings.email);
                    // GTM.eventHandler(response.get_settings);
                    // if (response.get_settings.is_authenticated_payment_agent) {
                    //     $('#topMenuPaymentAgent').setVisibility(1);
                    // }
                }
                break;
            case 'payout_currencies':
                client_store.responsePayoutCurrencies(response.payout_currencies);
                break;
            case 'transaction':
                _gtm2.default.pushTransactionData(response, { bom_ui: 'new' });
                break;
            // no default
        }
    };

    var setResidence = function setResidence(residence) {
        if (residence) {
            client_store.setResidence(residence);
            _ws_methods2.default.landingCompany(residence);
        }
    };

    var setBalance = (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(balance) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _socket_base2.default.wait('website_status');

                    case 2:
                        client_store.setBalance(balance);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    var handleError = function handleError(response) {
        var msg_type = response.msg_type;
        var error_code = (0, _utility.getPropertyValue)(response, ['error', 'code']);
        switch (error_code) {
            case 'WrongResponse':
            case 'InternalServerError':
            case 'OutputValidationFailed':
                {
                    if (msg_type !== 'mt5_login_list') {
                        common_store.setError(true, { message: response.error.message });
                    }
                    break;
                }
            case 'RateLimit':
                if (msg_type !== 'cashier_password') {
                    common_store.setError(true, { message: 'You have reached the rate limit of requests per second. Please try later.' });
                }
                break;
            case 'InvalidAppID':
                common_store.setError(true, { message: response.error.message });
                break;
            case 'DisabledClient':
                common_store.setError(true, { message: response.error.message });
                break;
            // no default
        }
    };

    var init = function init(store) {
        client_store = store.client;
        common_store = store.common;

        return {
            onDisconnect: onDisconnect,
            onOpen: onOpen,
            onMessage: onMessage
        };
    };

    return {
        init: init,
        setBalance: setBalance
    };
}();

exports.default = BinarySocketGeneral;


var ResponseHandlers = function () {
    var is_available = false;
    var websiteStatus = function websiteStatus(response) {
        if (response.website_status) {
            is_available = /^up$/i.test(response.website_status.site_status);
            if (is_available && !_socket_base2.default.availability()) {
                window.location.reload();
                return;
            }
            if (response.website_status.message) {
                // Footer.displayNotification(response.website_status.message);
            } else {
                    // Footer.clearNotification();
                }
            _socket_base2.default.availability(is_available);
            (0, _currency_base.setCurrencies)(response.website_status);
        }
    };

    var balance = function balance(response) {
        if (!response.error) {
            BinarySocketGeneral.setBalance(response.balance.balance);
        }
    };

    return {
        websiteStatus: websiteStatus,
        balance: balance
    };
}();

/***/ }),

/***/ "./src/javascript/app_2/Services/ws_methods.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app_2/Services/ws_methods.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _socket_base = __webpack_require__(/*! ../../_common/base/socket_base */ "./src/javascript/_common/base/socket_base.js");

var _socket_base2 = _interopRequireDefault(_socket_base);

var _subscription_manager = __webpack_require__(/*! ../../_common/base/subscription_manager */ "./src/javascript/_common/base/subscription_manager.js");

var _subscription_manager2 = _interopRequireDefault(_subscription_manager);

var _utility = __webpack_require__(/*! ../../_common/utility */ "./src/javascript/_common/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WS = function () {
    var activeSymbols = function activeSymbols() {
        return _socket_base2.default.send({ active_symbols: 'brief' });
    };

    var buy = function buy(proposal_id, price) {
        return _socket_base2.default.send({ buy: proposal_id, price: price });
    };

    var contractsFor = function contractsFor(symbol) {
        return _socket_base2.default.send({ contracts_for: symbol });
    };

    var getAccountStatus = function getAccountStatus() {
        return _socket_base2.default.send({ get_account_status: 1 });
    };

    var getSelfExclusion = function getSelfExclusion() {
        return _socket_base2.default.send({ get_self_exclusion: 1 });
    };

    var getSettings = function getSettings() {
        return _socket_base2.default.send({ get_settings: 1 });
    };

    var landingCompany = function landingCompany(residence) {
        return _socket_base2.default.send({ landing_company: residence });
    };

    var logout = function logout() {
        return _socket_base2.default.send({ logout: 1 });
    };

    var mt5LoginList = function mt5LoginList() {
        return _socket_base2.default.send({ mt5_login_list: 1 });
    };

    var oauthApps = function oauthApps() {
        return _socket_base2.default.send({ oauth_apps: 1 });
    };

    var payoutCurrencies = function payoutCurrencies() {
        return _socket_base2.default.send({ payout_currencies: 1 });
    };

    var portfolio = function portfolio() {
        return _socket_base2.default.send({ portfolio: 1 });
    };

    var proposalOpenContract = function proposalOpenContract(contract_id) {
        return _socket_base2.default.send({ proposal_open_contract: 1, contract_id: contract_id });
    };

    var sell = function sell(contract_id, price) {
        return _socket_base2.default.send({ sell: contract_id, price: price });
    };

    var sellExpired = function sellExpired() {
        return _socket_base2.default.send({ sell_expired: 1 });
    };

    var sendRequest = function sendRequest(request_object) {
        return Promise.resolve(!(0, _utility.isEmptyObject)(request_object) ? _socket_base2.default.send(request_object) : {});
    };

    var statement = function statement(limit, offset, date_boundaries) {
        return _socket_base2.default.send(_extends({ statement: 1, description: 1, limit: limit, offset: offset }, date_boundaries));
    };

    // ----- Streaming calls -----
    var forget = function forget(msg_type, cb, match_values) {
        return _subscription_manager2.default.forget(msg_type, cb, match_values);
    };

    var forgetAll = function forgetAll() {
        return _subscription_manager2.default.forgetAll.apply(_subscription_manager2.default, arguments);
    };

    var subscribeBalance = function subscribeBalance(cb) {
        return _subscription_manager2.default.subscribe('balance', { balance: 1, subscribe: 1 }, cb);
    };

    var subscribeProposal = function subscribeProposal(req, cb, should_forget_first) {
        return _subscription_manager2.default.subscribe('proposal', req, cb, should_forget_first);
    };

    var subscribeProposalOpenContract = function subscribeProposalOpenContract() {
        var contract_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var cb = arguments[1];
        var should_forget_first = arguments[2];
        return _subscription_manager2.default.subscribe('proposal_open_contract', _extends({ proposal_open_contract: 1, subscribe: 1 }, contract_id && { contract_id: contract_id }), cb, should_forget_first);
    };

    var subscribeTicks = function subscribeTicks(symbol, cb, should_forget_first) {
        return _subscription_manager2.default.subscribe('ticks', { ticks: symbol, subscribe: 1 }, cb, should_forget_first);
    };

    var subscribeTicksHistory = function subscribeTicksHistory(request_object, cb, should_forget_first) {
        return _subscription_manager2.default.subscribe('ticks_history', request_object, cb, should_forget_first);
    };

    var subscribeTransaction = function subscribeTransaction(cb, should_forget_first) {
        return _subscription_manager2.default.subscribe('transaction', { transaction: 1, subscribe: 1 }, cb, should_forget_first);
    };

    var subscribeWebsiteStatus = function subscribeWebsiteStatus(cb) {
        return _subscription_manager2.default.subscribe('website_status', { website_status: 1, subscribe: 1 }, cb);
    };

    return {
        activeSymbols: activeSymbols,
        buy: buy,
        contractsFor: contractsFor,
        getAccountStatus: getAccountStatus,
        getSelfExclusion: getSelfExclusion,
        getSettings: getSettings,
        landingCompany: landingCompany,
        logout: logout,
        mt5LoginList: mt5LoginList,
        oauthApps: oauthApps,
        portfolio: portfolio,
        payoutCurrencies: payoutCurrencies,
        proposalOpenContract: proposalOpenContract,
        sell: sell,
        sellExpired: sellExpired,
        sendRequest: sendRequest,
        statement: statement,

        // streams
        forget: forget,
        forgetAll: forgetAll,
        subscribeBalance: subscribeBalance,
        subscribeProposal: subscribeProposal,
        subscribeProposalOpenContract: subscribeProposalOpenContract,
        subscribeTicks: subscribeTicks,
        subscribeTicksHistory: subscribeTicksHistory,
        subscribeTransaction: subscribeTransaction,
        subscribeWebsiteStatus: subscribeWebsiteStatus
    };
}();

exports.default = WS;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/Constants/ui.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/Constants/ui.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHeaderConfig = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _icon_flag = __webpack_require__(/*! ../../../../Assets/Contract/icon_flag.jsx */ "./src/javascript/app_2/Assets/Contract/icon_flag.jsx");

var _icon_flag2 = _interopRequireDefault(_icon_flag);

var _icon_tick = __webpack_require__(/*! ../../../../Assets/Contract/icon_tick.jsx */ "./src/javascript/app_2/Assets/Contract/icon_tick.jsx");

var _icon_tick2 = _interopRequireDefault(_icon_tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeaderConfig = exports.getHeaderConfig = function getHeaderConfig() {
    return {
        purchased: { title: (0, _localize.localize)('Contract Purchased'), icon: _react2.default.createElement(_icon_tick2.default, null) },
        won: { title: (0, _localize.localize)('Contract Won'), icon: _react2.default.createElement(_icon_flag2.default, null) },
        lost: { title: (0, _localize.localize)('Contract Lost'), icon: _react2.default.createElement(_icon_flag2.default, null) }
    };
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/chart_barriers.js":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/Helpers/chart_barriers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createChartBarrier = undefined;

var _barriers = __webpack_require__(/*! ../../SmartChart/Constants/barriers */ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/barriers.js");

var createChartBarrier = exports.createChartBarrier = function createChartBarrier(SmartChartStore, contract_info) {
    SmartChartStore.removeBarriers();

    if (contract_info) {
        var contract_type = contract_info.contract_type,
            barrier = contract_info.barrier,
            high_barrier = contract_info.high_barrier,
            low_barrier = contract_info.low_barrier;


        if (barrier || high_barrier) {
            // create barrier only when it's available in response
            SmartChartStore.createBarriers(contract_type, barrier || high_barrier, low_barrier, null, {
                line_style: _barriers.BARRIER_LINE_STYLES.SOLID,
                not_draggable: true
            });

            SmartChartStore.updateBarrierShade(true, contract_type);
        }
    }
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/chart_markers.js":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/Helpers/chart_markers.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createChartMarkers = undefined;

var _marker_creators;

var _extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");

var _extend2 = _interopRequireDefault(_extend);

var _markers = __webpack_require__(/*! ../../SmartChart/Constants/markers */ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/markers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createChartMarkers = exports.createChartMarkers = function createChartMarkers(SmartChartStore, contract_info) {
    var ContractStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (contract_info) {
        Object.keys(marker_creators).forEach(function (marker_type) {
            if (marker_type in SmartChartStore.markers) return;

            var marker_config = marker_creators[marker_type](contract_info, ContractStore);
            if (marker_config) {
                SmartChartStore.createMarker(marker_config);
            }
        });
    }
};

var marker_creators = (_marker_creators = {}, _defineProperty(_marker_creators, _markers.MARKER_TYPES_CONFIG.LINE_END.type, createMarkerEndTime), _defineProperty(_marker_creators, _markers.MARKER_TYPES_CONFIG.LINE_PURCHASE.type, createMarkerPurchaseTime), _defineProperty(_marker_creators, _markers.MARKER_TYPES_CONFIG.LINE_START.type, createMarkerStartTime), _defineProperty(_marker_creators, _markers.MARKER_TYPES_CONFIG.SPOT_ENTRY.type, createMarkerSpotEntry), _defineProperty(_marker_creators, _markers.MARKER_TYPES_CONFIG.SPOT_EXIT.type, createMarkerSpotExit), _marker_creators);

// -------------------- Lines --------------------
function createMarkerEndTime(contract_info) {
    if (contract_info.status === 'open' || !contract_info.date_expiry) return false;

    return createMarkerConfig(_markers.MARKER_TYPES_CONFIG.LINE_END.type, contract_info.date_expiry);
}

function createMarkerPurchaseTime(contract_info) {
    if (!contract_info.purchase_time || !contract_info.date_start || +contract_info.purchase_time === +contract_info.date_start) return false;

    return createMarkerConfig(_markers.MARKER_TYPES_CONFIG.LINE_PURCHASE.type, contract_info.purchase_time);
}

function createMarkerStartTime(contract_info) {
    if (!contract_info.date_start) return false;

    return createMarkerConfig(_markers.MARKER_TYPES_CONFIG.LINE_START.type, contract_info.date_start);
}

// -------------------- Spots --------------------
function createMarkerSpotEntry(contract_info, ContractStore) {
    if (!contract_info.entry_tick_time || ContractStore.is_sold_before_start) return false;

    return createMarkerConfig(_markers.MARKER_TYPES_CONFIG.SPOT_ENTRY.type, contract_info.entry_tick_time, contract_info.entry_tick, {
        spot_value: '' + contract_info.entry_tick
    });
}

function createMarkerSpotExit(contract_info, ContractStore) {
    if (!ContractStore.end_spot_time) return false;

    return createMarkerConfig(_markers.MARKER_TYPES_CONFIG.SPOT_EXIT.type, ContractStore.end_spot_time, ContractStore.end_spot, {
        spot_value: '' + ContractStore.end_spot,
        status: '' + (contract_info.profit > 0 ? 'won' : 'lost')
    });
}

// -------------------- Helpers --------------------
var createMarkerConfig = function createMarkerConfig(marker_type, x, y, content_config) {
    return (0, _extend2.default)(true, {}, _markers.MARKER_TYPES_CONFIG[marker_type], {
        marker_config: {
            x: +x,
            y: y
        },
        content_config: content_config
    });
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/details.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/Helpers/details.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDetailsExpiry = exports.getDetailsInfo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _currency_base = __webpack_require__(/*! ../../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _money = __webpack_require__(/*! ../../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _contract = __webpack_require__(/*! ../../../../Constants/contract */ "./src/javascript/app_2/Constants/contract.js");

var _Date = __webpack_require__(/*! ../../../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var detailsProps = function () {
    var details_props = void 0;

    var initDetailsProps = function initDetailsProps() {
        return {
            contract_type: (0, _localize.localize)('Contract Type'),
            start_time: (0, _localize.localize)('Start Time'),
            entry_spot: (0, _localize.localize)('Entry Spot'),
            purchase_price: (0, _localize.localize)('Purchase Price'),
            end_time: (0, _localize.localize)('End Time'),
            exit_spot: (0, _localize.localize)('Exit Spot'),
            exit_spot_time: (0, _localize.localize)('Exit Spot Time'),
            payout: (0, _localize.localize)('Payout')
        };
    };

    return {
        get: function get() {
            if (!details_props) {
                details_props = initDetailsProps();
            }
            return details_props;
        }
    };
}();

var getDetailsInfo = exports.getDetailsInfo = function getDetailsInfo(contract_info) {
    var _ref;

    var buy_price = contract_info.buy_price,
        contract_type = contract_info.contract_type,
        currency = contract_info.currency,
        date_start = contract_info.date_start,
        entry_spot = contract_info.entry_spot,
        sell_time = contract_info.sell_time;


    var details_props = detailsProps.get();

    // if a forward starting contract was sold before starting
    // API will still send entry spot when start time is passed
    // we will hide it from our side
    var is_sold_before_start = sell_time && +sell_time < +date_start;
    var txt_start_time = date_start && (0, _Date.toGMTFormat)(+date_start * 1000);
    var txt_entry_spot = entry_spot && !is_sold_before_start ? (0, _currency_base.addComma)(entry_spot) : '-';

    return _ref = {}, _defineProperty(_ref, details_props.contract_type, (0, _contract.getContractTypeDisplay)()[contract_type]), _defineProperty(_ref, details_props.start_time, txt_start_time), _defineProperty(_ref, details_props.entry_spot, txt_entry_spot), _defineProperty(_ref, details_props.purchase_price, _react2.default.createElement(_money2.default, { amount: buy_price, currency: currency })), _ref;
};

var getDetailsExpiry = exports.getDetailsExpiry = function getDetailsExpiry(store) {
    var _ref3;

    if (!store.is_ended) return {};

    var contract_info = store.contract_info,
        end_spot = store.end_spot,
        end_spot_time = store.end_spot_time,
        indicative_price = store.indicative_price,
        is_user_sold = store.is_user_sold;


    var details_props = detailsProps.get();

    // for user sold contracts sell spot can get updated when the next tick becomes available
    // so we only show end time instead of any spot information
    return _extends({}, is_user_sold ? _defineProperty({}, details_props.end_time, contract_info.date_expiry && (0, _Date.toGMTFormat)(+contract_info.date_expiry * 1000)) : (_ref3 = {}, _defineProperty(_ref3, details_props.exit_spot, end_spot ? (0, _currency_base.addComma)(end_spot) : '-'), _defineProperty(_ref3, details_props.exit_spot_time, end_spot_time ? (0, _Date.toGMTFormat)(+end_spot_time * 1000) : '-'), _ref3), _defineProperty({}, details_props.payout, _react2.default.createElement(_money2.default, { amount: indicative_price, currency: contract_info.currency })));
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/digits.js":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/Helpers/digits.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isDigitContract = exports.isDigitContract = function isDigitContract(contract_type) {
    return (/digit/i.test(contract_type)
    );
};

var getDigitInfo = exports.getDigitInfo = function getDigitInfo(digits_info, contract_info) {
    var start_time = +contract_info.entry_tick_time;
    if (!start_time) return {}; // filter out the responses before contract start

    var entry = start_time in digits_info ? {} : createDigitInfo(contract_info, contract_info.entry_tick, start_time);

    var spot_time = +contract_info.current_spot_time;
    var exit_time = +contract_info.exit_tick_time;
    var is_after_expiry = exit_time && spot_time > exit_time;

    var current = spot_time in digits_info || is_after_expiry ? {} : // filter out duplicated responses and those after contract expiry
    createDigitInfo(contract_info, contract_info.current_spot, spot_time);

    return _extends({}, entry, current);
};

var createDigitInfo = function createDigitInfo(contract_info, spot, spot_time) {
    var digit = +("" + spot).slice(-1);

    return _defineProperty({}, +spot_time, {
        digit: digit,
        is_win: isWin(contract_info, digit),
        is_last: spot_time === +contract_info.exit_tick_time
    });
};

var isWin = function isWin(contract_info, current) {
    return (win_checker[contract_info.contract_type] || function () {})(+contract_info.barrier, current);
};

var win_checker = {
    DIGITMATCH: function DIGITMATCH(barrier, current) {
        return current === barrier;
    },
    DIGITDIFF: function DIGITDIFF(barrier, current) {
        return current !== barrier;
    },
    DIGITODD: function DIGITODD(barrier, current) {
        return current % 2;
    },
    DIGITEVEN: function DIGITEVEN(barrier, current) {
        return !(current % 2);
    },
    DIGITOVER: function DIGITOVER(barrier, current) {
        return current > barrier;
    },
    DIGITUNDER: function DIGITUNDER(barrier, current) {
        return current < barrier;
    }
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/logic.js":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/Helpers/logic.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getChartConfig = exports.getChartConfig = function getChartConfig(contract_info) {
    var start = contract_info.date_start;
    var end = contract_info.date_expiry;
    var granularity = calculateGranularity(end - start);

    return {
        granularity: granularity,
        chart_type: granularity ? 'candle' : 'mountain',
        end_epoch: end + (granularity || 3),
        start_epoch: start - (granularity || 3)
    };
};

var hour_to_granularity_map = [[1, 0], [2, 120], [6, 600], [24, 900], [5 * 24, 3600], [30 * 24, 14400]];
var calculateGranularity = function calculateGranularity(duration) {
    return (hour_to_granularity_map.find(function (m) {
        return duration <= m[0] * 3600;
    }) || [null, 86400])[1];
};

var getDisplayStatus = exports.getDisplayStatus = function getDisplayStatus(contract_info) {
    var status = 'purchased';
    if (isEnded(contract_info)) {
        status = contract_info.profit >= 0 ? 'won' : 'lost';
    }
    return status;
};

// for path dependent contracts the contract is sold from server side
// so we need to use sell spot and sell spot time instead
var getEndSpot = exports.getEndSpot = function getEndSpot(contract_info) {
    return contract_info.is_path_dependent ? contract_info.sell_spot : contract_info.exit_tick;
};

var getEndSpotTime = exports.getEndSpotTime = function getEndSpotTime(contract_info) {
    return contract_info.is_path_dependent ? contract_info.sell_spot_time : contract_info.exit_tick_time;
};

var getFinalPrice = exports.getFinalPrice = function getFinalPrice(contract_info) {
    return +(contract_info.sell_price || contract_info.bid_price);
};

var getIndicativePrice = exports.getIndicativePrice = function getIndicativePrice(contract_info) {
    return getFinalPrice(contract_info) && isEnded(contract_info) ? getFinalPrice(contract_info) : +contract_info.bid_price || null;
};

var isEnded = exports.isEnded = function isEnded(contract_info) {
    return !!(contract_info.status && contract_info.status !== 'open' || contract_info.is_expired || contract_info.is_settleable);
};

var isSoldBeforeStart = exports.isSoldBeforeStart = function isSoldBeforeStart(contract_info) {
    return contract_info.sell_time && +contract_info.sell_time < +contract_info.date_start;
};

var isStarted = exports.isStarted = function isStarted(contract_info) {
    return !contract_info.is_forward_starting || contract_info.current_spot_time > contract_info.date_start;
};

var isUserSold = exports.isUserSold = function isUserSold(contract_info) {
    return contract_info.status === 'sold';
};

var isValidToSell = exports.isValidToSell = function isValidToSell(contract_info) {
    return !isEnded(contract_info) && !isUserSold(contract_info) && +contract_info.is_valid_to_sell === 1;
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Contract/contract_store.js":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Contract/contract_store.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _utility = __webpack_require__(/*! ../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _chart_barriers = __webpack_require__(/*! ./Helpers/chart_barriers */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/chart_barriers.js");

var _chart_markers = __webpack_require__(/*! ./Helpers/chart_markers */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/chart_markers.js");

var _details = __webpack_require__(/*! ./Helpers/details */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/details.js");

var _digits = __webpack_require__(/*! ./Helpers/digits */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/digits.js");

var _logic = __webpack_require__(/*! ./Helpers/logic */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/logic.js");

var _base_store = __webpack_require__(/*! ../../base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ContractStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, _dec10 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(ContractStore, _BaseStore);

    function ContractStore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContractStore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContractStore.__proto__ || Object.getPrototypeOf(ContractStore)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'contract_id', _descriptor, _this), _initDefineProp(_this, 'contract_info', _descriptor2, _this), _initDefineProp(_this, 'digits_info', _descriptor3, _this), _initDefineProp(_this, 'sell_info', _descriptor4, _this), _initDefineProp(_this, 'chart_config', _descriptor5, _this), _initDefineProp(_this, 'has_error', _descriptor6, _this), _initDefineProp(_this, 'error_message', _descriptor7, _this), _initDefineProp(_this, 'is_sell_requested', _descriptor8, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContractStore, [{
        key: 'updateChartType',


        // -------------------
        // ----- Actions -----
        // -------------------
        value: function updateChartType(chart_type) {
            this.chart_config.chart_type = chart_type;
        }
    }, {
        key: 'updateGranularity',
        value: function updateGranularity(granularity) {
            this.chart_config.granularity = granularity;
        }
    }, {
        key: 'onMount',
        value: function onMount(contract_id) {
            this.onSwitchAccount(this.accountSwitcherListener.bind(null, contract_id));
            this.has_error = false;
            this.error_message = '';
            this.contract_id = contract_id;
            this.smart_chart = this.root_store.modules.smart_chart;
            this.smart_chart.setContractMode(true);

            if (contract_id) {
                _Services.WS.subscribeProposalOpenContract(this.contract_id, this.updateProposal, false);
            }
        }
    }, {
        key: 'accountSwitcherListener',
        value: function accountSwitcherListener(contract_id) {
            this.has_error = false;
            this.error_message = '';
            this.contract_id = contract_id;
            this.smart_chart = this.root_store.modules.smart_chart;
            this.smart_chart.setContractMode(true);

            if (contract_id) {
                _Services.WS.subscribeProposalOpenContract(this.contract_id, this.updateProposal, false);
            }
        }
    }, {
        key: 'onUnmount',
        value: function onUnmount() {
            this.disposeSwitchAccount();
            this.forgetProposalOpenContract();

            this.contract_id = null;
            this.contract_info = {};
            this.digits_info = {};
            this.sell_info = {};
            this.is_sell_requested = false;

            this.smart_chart.removeBarriers();
            this.smart_chart.removeMarkers();
            this.smart_chart.setContractMode(false);
        }
    }, {
        key: 'updateProposal',
        value: function updateProposal(response) {
            if ('error' in response) {
                this.has_error = true;
                this.error_message = response.error.message;
                this.contract_info = {};
                return;
            }
            if ((0, _utility.isEmptyObject)(response.proposal_open_contract)) {
                this.has_error = true;
                this.error_message = (0, _localize.localize)('Contract does not exist or does not belong to this client.');
                this.contract_info = {};
                return;
            }
            this.contract_info = response.proposal_open_contract;
            if ((0, _logic.isEnded)(this.contract_info)) {
                this.chart_config = (0, _logic.getChartConfig)(this.contract_info);
            } else {
                delete this.chart_config.end_epoch;
                delete this.chart_config.start_epoch;
            }
            (0, _chart_barriers.createChartBarrier)(this.smart_chart, this.contract_info);
            (0, _chart_markers.createChartMarkers)(this.smart_chart, this.contract_info, this);
            this.handleDigits();
        }
    }, {
        key: 'handleDigits',
        value: function handleDigits() {
            if ((0, _digits.isDigitContract)(this.contract_info.contract_type)) {
                (0, _mobx.extendObservable)(this.digits_info, (0, _digits.getDigitInfo)(this.digits_info, this.contract_info));
            }
        }
    }, {
        key: 'onClickSell',
        value: function onClickSell() {
            if (this.contract_id && !this.is_sell_requested && (0, _utility.isEmptyObject)(this.sell_info)) {
                this.is_sell_requested = true;
                _Services.WS.sell(this.contract_id, this.contract_info.bid_price).then(this.handleSell);
            }
        }
    }, {
        key: 'handleSell',
        value: function handleSell(response) {
            var _this2 = this;

            if (response.error) {
                this.sell_info = {
                    error_message: response.error.message
                };

                this.is_sell_requested = false;
            } else {
                this.forgetProposalOpenContract();
                _Services.WS.proposalOpenContract(this.contract_id).then((0, _mobx.action)(function (proposal_response) {
                    _this2.updateProposal(proposal_response);
                    _this2.sell_info = {
                        sell_price: response.sell.sold_for,
                        transaction_id: response.sell.transaction_id
                    };
                }));
            }
        }
    }, {
        key: 'forgetProposalOpenContract',
        value: function forgetProposalOpenContract() {
            _Services.WS.forget('proposal_open_contract', this.updateProposal, { contract_id: this.contract_id });
        }
    }, {
        key: 'removeSellError',
        value: function removeSellError() {
            delete this.sell_info.error_message;
        }

        // ---------------------------
        // ----- Computed values -----
        // ---------------------------
        // TODO: currently this runs on each response, even if contract_info is deep equal previous one

    }, {
        key: 'details_expiry',
        get: function get() {
            return (0, _details.getDetailsExpiry)(this);
        }
    }, {
        key: 'details_info',
        get: function get() {
            return (0, _details.getDetailsInfo)(this.contract_info);
        }
    }, {
        key: 'display_status',
        get: function get() {
            return (0, _logic.getDisplayStatus)(this.contract_info);
        }
    }, {
        key: 'end_spot',
        get: function get() {
            return (0, _logic.getEndSpot)(this.contract_info);
        }
    }, {
        key: 'end_spot_time',
        get: function get() {
            return (0, _logic.getEndSpotTime)(this.contract_info);
        }
    }, {
        key: 'final_price',
        get: function get() {
            return (0, _logic.getFinalPrice)(this.contract_info);
        }
    }, {
        key: 'indicative_price',
        get: function get() {
            return (0, _logic.getIndicativePrice)(this.contract_info);
        }
    }, {
        key: 'is_ended',
        get: function get() {
            return (0, _logic.isEnded)(this.contract_info);
        }
    }, {
        key: 'is_sold_before_start',
        get: function get() {
            return (0, _logic.isSoldBeforeStart)(this.contract_info);
        }
    }, {
        key: 'is_started',
        get: function get() {
            return (0, _logic.isStarted)(this.contract_info);
        }
    }, {
        key: 'is_user_sold',
        get: function get() {
            return (0, _logic.isUserSold)(this.contract_info);
        }
    }, {
        key: 'is_valid_to_sell',
        get: function get() {
            return (0, _logic.isValidToSell)(this.contract_info);
        }
    }]);

    return ContractStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'contract_id', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'contract_info', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'digits_info', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'sell_info', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'chart_config', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'has_error', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'error_message', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'is_sell_requested', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'updateChartType', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'updateChartType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateGranularity', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'updateGranularity'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMount', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'onMount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'accountSwitcherListener', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'accountSwitcherListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onUnmount', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'onUnmount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateProposal', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'updateProposal'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleDigits', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'handleDigits'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onClickSell', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'onClickSell'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSell', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSell'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeSellError', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'removeSellError'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'details_expiry', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'details_expiry'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'details_info', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'details_info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display_status', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'display_status'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'end_spot', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'end_spot'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'end_spot_time', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'end_spot_time'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'final_price', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'final_price'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'indicative_price', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'indicative_price'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_ended', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_ended'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_sold_before_start', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_sold_before_start'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_started', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_started'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_user_sold', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_user_sold'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_valid_to_sell', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_valid_to_sell'), _class.prototype)), _class));
exports.default = ContractStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Portfolio/Helpers/format_response.js":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Portfolio/Helpers/format_response.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var formatPortfolioPosition = exports.formatPortfolioPosition = function formatPortfolioPosition(portfolio_pos) {
    var purchase = parseFloat(portfolio_pos.buy_price);
    var payout = parseFloat(portfolio_pos.payout);

    return {
        reference: +portfolio_pos.transaction_id,
        type: portfolio_pos.contract_type,
        details: portfolio_pos.longcode.replace(/\n/g, '<br />'),
        payout: payout,
        purchase: purchase,
        expiry_time: portfolio_pos.expiry_time,
        id: portfolio_pos.contract_id,
        indicative: 0
    };
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Portfolio/portfolio_store.js":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Portfolio/portfolio_store.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _format_response = __webpack_require__(/*! ./Helpers/format_response */ "./src/javascript/app_2/Stores/Modules/Portfolio/Helpers/format_response.js");

var _base_store = __webpack_require__(/*! ../../base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var PortfolioStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, _dec10 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(PortfolioStore, _BaseStore);

    function PortfolioStore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PortfolioStore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PortfolioStore.__proto__ || Object.getPrototypeOf(PortfolioStore)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'data', _descriptor, _this), _initDefineProp(_this, 'is_loading', _descriptor2, _this), _initDefineProp(_this, 'error', _descriptor3, _this), _initDefineProp(_this, 'initializePortfolio', _descriptor4, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PortfolioStore, [{
        key: 'clearTable',
        value: function clearTable() {
            this.data = [];
            this.is_loading = false;
            this.error = '';
        }
    }, {
        key: 'portfolioHandler',
        value: function portfolioHandler(response) {
            this.is_loading = false;
            if ('error' in response) {
                this.error = response.error.message;
                return;
            }
            this.error = '';
            if (response.portfolio.contracts) {
                this.data = response.portfolio.contracts.map(function (pos) {
                    return (0, _format_response.formatPortfolioPosition)(pos);
                }).sort(function (pos1, pos2) {
                    return pos2.reference - pos1.reference;
                }); // new contracts first
            }
        }
    }, {
        key: 'transactionHandler',
        value: function transactionHandler(response) {
            var _this2 = this;

            if ('error' in response) {
                this.error = response.error.message;
            }
            if (!response.transaction) return;
            var _response$transaction = response.transaction,
                contract_id = _response$transaction.contract_id,
                act = _response$transaction.action;


            if (act === 'buy') {
                _Services.WS.portfolio().then(function (res) {
                    var new_pos = res.portfolio.contracts.find(function (pos) {
                        return +pos.contract_id === +contract_id;
                    });
                    if (!new_pos) return;
                    _this2.pushNewPosition(new_pos);
                });
                // subscribe to new contract:
                _Services.WS.subscribeProposalOpenContract(contract_id, this.proposalOpenContractHandler, false);
            } else if (act === 'sell') {
                this.removePositionById(contract_id);
            }
        }
    }, {
        key: 'proposalOpenContractHandler',
        value: function proposalOpenContractHandler(response) {
            if ('error' in response) return;

            var proposal = response.proposal_open_contract;
            var portfolio_position = this.data.find(function (position) {
                return +position.id === +proposal.contract_id;
            });

            if (!portfolio_position) return;

            var prev_indicative = portfolio_position.indicative;
            var new_indicative = +proposal.bid_price;

            portfolio_position.indicative = new_indicative;
            portfolio_position.underlying = proposal.display_name;

            if (!proposal.is_valid_to_sell) {
                portfolio_position.status = 'no-resale';
            } else if (new_indicative > prev_indicative) {
                portfolio_position.status = 'price-moved-up';
            } else if (new_indicative < prev_indicative) {
                portfolio_position.status = 'price-moved-down';
            } else {
                portfolio_position.status = 'price-stable';
            }
        }
    }, {
        key: 'pushNewPosition',
        value: function pushNewPosition(new_pos) {
            this.data.unshift((0, _format_response.formatPortfolioPosition)(new_pos));
        }
    }, {
        key: 'removePositionById',
        value: function removePositionById(contract_id) {
            var i = this.data.findIndex(function (pos) {
                return +pos.id === +contract_id;
            });
            this.data.splice(i, 1);
        }
    }, {
        key: 'accountSwitcherListener',
        value: function accountSwitcherListener() {
            var _this3 = this;

            return new Promise(function (resolve) {
                if (_this3.data.length === 0) {
                    resolve(_this3.initializePortfolio());
                }
            });
        }
    }, {
        key: 'onMount',
        value: function onMount() {
            this.onSwitchAccount(this.accountSwitcherListener);
            if (this.data.length === 0) {
                this.initializePortfolio();
            }
        }
    }, {
        key: 'onUnmount',
        value: function onUnmount() {
            this.disposeSwitchAccount();
            // keep data and connections for portfolio drawer on desktop
            if (this.root_store.ui.is_mobile) {
                this.clearTable();
                _Services.WS.forgetAll('proposal_open_contract', 'transaction');
            }
        }
    }, {
        key: 'totals',
        get: function get() {
            var indicative = 0;
            var payout = 0;
            var purchase = 0;

            this.data.forEach(function (portfolio_pos) {
                indicative += +portfolio_pos.indicative;
                payout += +portfolio_pos.payout;
                purchase += +portfolio_pos.purchase;
            });
            return {
                indicative: indicative,
                payout: payout,
                purchase: purchase
            };
        }
    }, {
        key: 'active_positions',
        get: function get() {
            var _this4 = this;

            return this.data.filter(function (portfolio_pos) {
                var server_epoch = _this4.root_store.common.server_time.unix();
                return portfolio_pos.expiry_time > server_epoch;
            });
        }
    }, {
        key: 'is_empty',
        get: function get() {
            return !this.is_loading && this.active_positions.length === 0;
        }
    }]);

    return PortfolioStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'data', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'is_loading', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'error', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'initializePortfolio', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        var _this5 = this;

        return function () {
            if (!_this5.root_store.client.is_logged_in) return;
            _this5.is_loading = true;

            _Services.WS.portfolio().then(_this5.portfolioHandler);
            _Services.WS.subscribeProposalOpenContract(null, _this5.proposalOpenContractHandler, false);
            _Services.WS.subscribeTransaction(_this5.transactionHandler, false);
        };
    }
}), _applyDecoratedDescriptor(_class.prototype, 'clearTable', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'clearTable'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'portfolioHandler', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'portfolioHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transactionHandler', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'transactionHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'proposalOpenContractHandler', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'proposalOpenContractHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pushNewPosition', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'pushNewPosition'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removePositionById', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'removePositionById'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'accountSwitcherListener', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'accountSwitcherListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMount', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'onMount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onUnmount', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'onUnmount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'totals', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'totals'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'active_positions', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'active_positions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_empty', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_empty'), _class.prototype)), _class));
exports.default = PortfolioStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/barriers.js":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/Constants/barriers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CONTRACT_SHADES = exports.CONTRACT_SHADES = {
    CALL: 'ABOVE',
    PUT: 'BELOW',
    EXPIRYRANGE: 'BETWEEN',
    EXPIRYMISS: 'OUTSIDE',
    RANGE: 'BETWEEN',
    UPORDOWN: 'OUTSIDE',
    ONETOUCH: 'NONE_SINGLE', // no shade
    NOTOUCH: 'NONE_SINGLE' // no shade
};

// Default non-shade according to number of barriers
var DEFAULT_SHADES = exports.DEFAULT_SHADES = {
    1: 'NONE_SINGLE',
    2: 'NONE_DOUBLE'
};

var BARRIER_COLORS = exports.BARRIER_COLORS = {
    GREEN: 'green',
    RED: 'red'
};

var BARRIER_LINE_STYLES = exports.BARRIER_LINE_STYLES = {
    DASHED: 'dashed',
    DOTTED: 'dotted',
    SOLID: 'solid'
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/chart.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/Constants/chart.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var tick_chart_types = exports.tick_chart_types = ['mountain', 'line', 'colored_line', 'spline', 'baseline'];

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/markers.js":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/Constants/markers.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MARKER_TYPES_CONFIG = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _icon_entry_spot = __webpack_require__(/*! ../../../../Assets/Contract/icon_entry_spot.jsx */ "./src/javascript/app_2/Assets/Contract/icon_entry_spot.jsx");

var _icon_entry_spot2 = _interopRequireDefault(_icon_entry_spot);

var _icon_flag = __webpack_require__(/*! ../../../../Assets/Contract/icon_flag.jsx */ "./src/javascript/app_2/Assets/Contract/icon_flag.jsx");

var _icon_flag2 = _interopRequireDefault(_icon_flag);

var _marker_line = __webpack_require__(/*! ../../../../Modules/SmartChart/Components/Markers/marker_line.jsx */ "./src/javascript/app_2/Modules/SmartChart/Components/Markers/marker_line.jsx");

var _marker_line2 = _interopRequireDefault(_marker_line);

var _marker_spot = __webpack_require__(/*! ../../../../Modules/SmartChart/Components/Markers/marker_spot.jsx */ "./src/javascript/app_2/Modules/SmartChart/Components/Markers/marker_spot.jsx");

var _marker_spot2 = _interopRequireDefault(_marker_spot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MARKER_X_POSITIONER = {
    EPOCH: 'epoch',
    NONE: 'none'
};

var MARKER_Y_POSITIONER = {
    VALUE: 'value',
    NONE: 'none'
};

var MARKER_CONTENT_TYPES = {
    LINE: {
        ContentComponent: _marker_line2.default,
        xPositioner: MARKER_X_POSITIONER.EPOCH,
        yPositioner: MARKER_Y_POSITIONER.NONE,
        className: 'chart-marker-line'
    },
    SPOT: {
        ContentComponent: _marker_spot2.default,
        xPositioner: MARKER_X_POSITIONER.EPOCH,
        yPositioner: MARKER_Y_POSITIONER.VALUE
    }
};

var MARKER_TYPES_CONFIG = exports.MARKER_TYPES_CONFIG = {
    LINE_END: { type: 'LINE_END', marker_config: MARKER_CONTENT_TYPES.LINE, content_config: { line_style: 'dash', label: (0, _localize.localize)('End Time') } },
    LINE_PURCHASE: { type: 'LINE_PURCHASE', marker_config: MARKER_CONTENT_TYPES.LINE, content_config: { line_style: 'solid', label: (0, _localize.localize)('Purchase Time') } },
    LINE_START: { type: 'LINE_START', marker_config: MARKER_CONTENT_TYPES.LINE, content_config: { line_style: 'solid', label: (0, _localize.localize)('Start Time') } },
    SPOT_ENTRY: { type: 'SPOT_ENTRY', marker_config: MARKER_CONTENT_TYPES.SPOT, content_config: { align: 'left', icon: _react2.default.createElement(_icon_entry_spot2.default, null) } },
    SPOT_EXIT: { type: 'SPOT_EXIT', marker_config: MARKER_CONTENT_TYPES.SPOT, content_config: { align: 'right', icon: _react2.default.createElement(_icon_flag2.default, null) } }
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/Helpers/barriers.js":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/Helpers/barriers.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.barriersObjectToArray = exports.barriersToString = exports.isBarrierSupported = undefined;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _utility = __webpack_require__(/*! ../../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _barriers = __webpack_require__(/*! ../Constants/barriers */ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/barriers.js");

var isBarrierSupported = exports.isBarrierSupported = function isBarrierSupported(contract_type) {
    return contract_type in _barriers.CONTRACT_SHADES;
};

var barriersToString = exports.barriersToString = function barriersToString(is_relative) {
    for (var _len = arguments.length, barriers_list = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        barriers_list[_key - 1] = arguments[_key];
    }

    return barriers_list.map(function (barrier) {
        return '' + (is_relative && !/^[+-]/.test(barrier) ? '+' : '') + barrier;
    });
};

var barriersObjectToArray = exports.barriersObjectToArray = function barriersObjectToArray(barriers) {
    return Object.keys(barriers || {}).map(function (key) {
        return (0, _mobx.toJS)(barriers[key]);
    }).filter(function (item) {
        return !(0, _utility.isEmptyObject)(item);
    });
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/chart_barrier_store.js":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/chart_barrier_store.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChartBarrierStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _barriers = __webpack_require__(/*! ./Constants/barriers */ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/barriers.js");

var _barriers2 = __webpack_require__(/*! ./Helpers/barriers */ "./src/javascript/app_2/Stores/Modules/SmartChart/Helpers/barriers.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ChartBarrierStore = exports.ChartBarrierStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, (_class = function () {
    function ChartBarrierStore(high_barrier, low_barrier) {
        var onChartBarrierChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
            color = _ref.color,
            line_style = _ref.line_style,
            not_draggable = _ref.not_draggable;

        _classCallCheck(this, ChartBarrierStore);

        _initDefineProp(this, 'color', _descriptor, this);

        _initDefineProp(this, 'lineStyle', _descriptor2, this);

        _initDefineProp(this, 'shade', _descriptor3, this);

        _initDefineProp(this, 'high', _descriptor4, this);

        _initDefineProp(this, 'low', _descriptor5, this);

        _initDefineProp(this, 'relative', _descriptor6, this);

        _initDefineProp(this, 'draggable', _descriptor7, this);

        _initDefineProp(this, 'hidePriceLines', _descriptor8, this);

        this.color = color || _barriers.BARRIER_COLORS.GREEN;
        this.lineStyle = line_style || _barriers.BARRIER_LINE_STYLES.DASHED;
        this.onChange = this.onBarrierChange;

        // trade_store's action to process new barriers on dragged
        this.onChartBarrierChange = typeof onChartBarrierChange === 'function' ? onChartBarrierChange.bind(this) : function () {};

        this.high = +high_barrier || 0; // 0 to follow the price
        if (low_barrier) {
            this.low = +low_barrier;
        }

        this.shade = this.default_shade;

        var has_barrier = !!high_barrier;
        this.relative = !has_barrier || /^[+-]/.test(high_barrier);
        this.draggable = !not_draggable && has_barrier;
        this.hidePriceLines = !has_barrier;
    }

    _createClass(ChartBarrierStore, [{
        key: 'updateBarriers',
        value: function updateBarriers(high, low) {
            this.relative = /^[+-]/.test(high);
            this.high = +high || undefined;
            this.low = +low || undefined;
        }
    }, {
        key: 'updateBarrierShade',
        value: function updateBarrierShade(should_display, contract_type) {
            this.shade = should_display && _barriers.CONTRACT_SHADES[contract_type] || this.default_shade;
        }
    }, {
        key: 'onBarrierChange',
        value: function onBarrierChange(_ref2) {
            var high = _ref2.high,
                low = _ref2.low;

            this.updateBarriers(high, low);
            this.onChartBarrierChange.apply(this, _toConsumableArray((0, _barriers2.barriersToString)(this.relative, high, low)));
        }
    }, {
        key: 'barrier_count',
        get: function get() {
            return (typeof this.high !== 'undefined') + (typeof this.low !== 'undefined');
        }
    }, {
        key: 'default_shade',
        get: function get() {
            return _barriers.DEFAULT_SHADES[this.barrier_count];
        }
    }]);

    return ChartBarrierStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'color', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'lineStyle', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'shade', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'high', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'low', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'relative', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'draggable', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'hidePriceLines', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'updateBarriers', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'updateBarriers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateBarrierShade', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'updateBarrierShade'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onBarrierChange', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'onBarrierChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'barrier_count', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'barrier_count'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'default_shade', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'default_shade'), _class.prototype)), _class));

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/chart_marker_store.js":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/chart_marker_store.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChartMarkerStore = undefined;

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ChartMarkerStore = exports.ChartMarkerStore = (_class = function ChartMarkerStore(marker_config, content_config) {
    _classCallCheck(this, ChartMarkerStore);

    _initDefineProp(this, 'marker_config', _descriptor, this);

    _initDefineProp(this, 'content_config', _descriptor2, this);

    this.marker_config = marker_config;
    this.content_config = content_config;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'marker_config', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'content_config', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
})), _class);

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/SmartChart/smart_chart_store.js":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/SmartChart/smart_chart_store.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

var _extend2 = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");

var _extend3 = _interopRequireDefault(_extend2);

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _utility = __webpack_require__(/*! ../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _server_time = __webpack_require__(/*! ../../../../_common/base/server_time */ "./src/javascript/_common/base/server_time.js");

var _server_time2 = _interopRequireDefault(_server_time);

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _chart_barrier_store = __webpack_require__(/*! ./chart_barrier_store */ "./src/javascript/app_2/Stores/Modules/SmartChart/chart_barrier_store.js");

var _chart_marker_store = __webpack_require__(/*! ./chart_marker_store */ "./src/javascript/app_2/Stores/Modules/SmartChart/chart_marker_store.js");

var _chart = __webpack_require__(/*! ./Constants/chart */ "./src/javascript/app_2/Stores/Modules/SmartChart/Constants/chart.js");

var _barriers = __webpack_require__(/*! ./Helpers/barriers */ "./src/javascript/app_2/Stores/Modules/SmartChart/Helpers/barriers.js");

var _base_store = __webpack_require__(/*! ../../base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SmartChartStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, _dec10 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(SmartChartStore, _BaseStore);

    function SmartChartStore(_ref) {
        var root_store = _ref.root_store;

        _classCallCheck(this, SmartChartStore);

        var local_storage_properties = ['chart_type', 'granularity'];

        var _this = _possibleConstructorReturn(this, (SmartChartStore.__proto__ || Object.getPrototypeOf(SmartChartStore)).call(this, { root_store: root_store, local_storage_properties: local_storage_properties }));

        _initDefineProp(_this, 'symbol', _descriptor, _this);

        _initDefineProp(_this, 'barriers', _descriptor2, _this);

        _initDefineProp(_this, 'markers', _descriptor3, _this);

        _initDefineProp(_this, 'is_title_enabled', _descriptor4, _this);

        _initDefineProp(_this, 'is_contract_mode', _descriptor5, _this);

        _initDefineProp(_this, 'chart_type', _descriptor6, _this);

        _initDefineProp(_this, 'granularity', _descriptor7, _this);

        _initDefineProp(_this, 'onUnmount', _descriptor8, _this);

        _initDefineProp(_this, 'createBarriers', _descriptor9, _this);

        _this.wsSubscribe = function (request_object, callback) {
            if (request_object.subscribe !== 1) return;
            _Services.WS.subscribeTicksHistory(_extends({}, request_object), callback); // use a copy of the request_object to prevent updating the source
        };

        _this.wsForget = function (match_values, callback) {
            return _Services.WS.forget('ticks_history', callback, match_values);
        };

        _this.wsSendRequest = function (request_object) {
            if (request_object.time) {
                return _server_time2.default.timePromise.then(function () {
                    return {
                        msg_type: 'time',
                        time: _server_time2.default.get().unix()
                    };
                });
            }
            return _Services.WS.sendRequest(request_object);
        };

        return _this;
    }

    _createClass(SmartChartStore, [{
        key: 'updateChartType',
        value: function updateChartType(chart_type) {
            this.chart_type = chart_type;
        }
    }, {
        key: 'updateGranularity',
        value: function updateGranularity(granularity) {
            this.granularity = granularity;
            if (granularity === 0 && !_chart.tick_chart_types.includes(this.chart_type)) {
                this.chart_type = 'mountain';
            }
        }
    }, {
        key: 'setContractMode',
        value: function setContractMode(is_contract_mode) {
            this.is_contract_mode = is_contract_mode;
            this.is_title_enabled = !is_contract_mode;
        }

        // ---------- Barriers ----------

    }, {
        key: 'updateBarriers',
        value: function updateBarriers(barrier_1, barrier_2) {
            if (!(0, _utility.isEmptyObject)(this.barriers.main)) {
                this.barriers.main.updateBarriers(barrier_1, barrier_2);
            }
        }
    }, {
        key: 'updateBarrierShade',
        value: function updateBarrierShade(should_display, contract_type) {
            if (!(0, _utility.isEmptyObject)(this.barriers.main)) {
                this.barriers.main.updateBarrierShade(should_display, contract_type);
            }
        }
    }, {
        key: 'removeBarriers',
        value: function removeBarriers() {
            this.barriers = {};
        }
    }, {
        key: 'createMarker',
        value: function createMarker(config) {
            this.markers = (0, _extend3.default)({}, this.markers, _defineProperty({}, config.type, new _chart_marker_store.ChartMarkerStore(config.marker_config, config.content_config)));
        }
    }, {
        key: 'removeMarkers',
        value: function removeMarkers() {
            this.markers = {};
        }
    }, {
        key: 'barriers_array',
        get: function get() {
            return (0, _barriers.barriersObjectToArray)(this.barriers);
        }

        // ---------- Markers ----------

    }, {
        key: 'markers_array',
        get: function get() {
            return (0, _barriers.barriersObjectToArray)(this.markers);
        }

        // ---------- Chart Settings ----------

    }, {
        key: 'settings',
        get: function get() {
            var _this2 = this;

            // TODO: consider moving chart settings from ui_store to chart_store
            return function () {
                var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.root_store,
                    common = _ref2.common,
                    ui = _ref2.ui;

                return {
                    assetInformation: ui.is_chart_asset_info_visible,
                    countdown: ui.is_chart_countdown_visible,
                    lang: common.current_language,
                    position: ui.is_chart_layout_default ? 'bottom' : 'left',
                    theme: ui.is_dark_mode_on ? 'dark' : 'light'
                };
            }();
        }

        // ---------- WS ----------

    }]);

    return SmartChartStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'symbol', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'barriers', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'markers', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _mobx.observable.object({});
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'is_title_enabled', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'is_contract_mode', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'chart_type', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 'mountain';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'granularity', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'updateChartType', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'updateChartType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateGranularity', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'updateGranularity'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setContractMode', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'setContractMode'), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'onUnmount', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        var _this3 = this;

        return function () {
            _this3.symbol = null;
            _this3.removeBarriers();
            _this3.removeMarkers();
        };
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'createBarriers', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        var _this4 = this;

        return function (contract_type, high_barrier, low_barrier, onChartBarrierChange, config) {
            if ((0, _utility.isEmptyObject)(_this4.barriers.main)) {
                var main_barrier = {};
                if ((0, _barriers.isBarrierSupported)(contract_type)) {
                    main_barrier = new _chart_barrier_store.ChartBarrierStore(high_barrier, low_barrier, onChartBarrierChange, config);
                }

                _this4.barriers = {
                    main: main_barrier
                };
            }
        };
    }
}), _applyDecoratedDescriptor(_class.prototype, 'updateBarriers', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'updateBarriers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateBarrierShade', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'updateBarrierShade'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeBarriers', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'removeBarriers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'barriers_array', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'barriers_array'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createMarker', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'createMarker'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeMarkers', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'removeMarkers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'markers_array', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'markers_array'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'settings', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'settings'), _class.prototype)), _class));
exports.default = SmartChartStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Statement/Helpers/format_response.js":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Statement/Helpers/format_response.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatStatementTransaction = undefined;

var _currency_base = __webpack_require__(/*! ../../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _string_util = __webpack_require__(/*! ../../../../../_common/string_util */ "./src/javascript/_common/string_util.js");

var _Date = __webpack_require__(/*! ../../../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

var formatStatementTransaction = exports.formatStatementTransaction = function formatStatementTransaction(transaction, currency) {
    var moment_obj = (0, _Date.toMoment)(transaction.transaction_time);
    var date_str = moment_obj.format('YYYY-MM-DD');
    var time_str = moment_obj.format('HH:mm:ss') + ' GMT';
    var payout = parseFloat(transaction.payout);
    var amount = parseFloat(transaction.amount);
    var balance = parseFloat(transaction.balance_after);
    var should_exclude_currency = true;

    return {
        action: (0, _localize.localize)((0, _string_util.toTitleCase)(transaction.action_type) /* localize-ignore */), // handled in static_strings_app_2.js: 'Buy', 'Sell', 'Deposit', 'Withdrawal'
        date: date_str + '\n' + time_str,
        refid: transaction.transaction_id,
        payout: isNaN(payout) ? '-' : (0, _currency_base.formatMoney)(currency, payout, should_exclude_currency),
        amount: isNaN(amount) ? '-' : (0, _currency_base.formatMoney)(currency, amount, should_exclude_currency),
        balance: isNaN(balance) ? '-' : (0, _currency_base.formatMoney)(currency, balance, should_exclude_currency),
        desc: transaction.longcode.replace(/\n/g, '<br />'),
        id: transaction.contract_id,
        app_id: transaction.app_id
    };
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Statement/statement_store.js":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Statement/statement_store.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _format_response = __webpack_require__(/*! ./Helpers/format_response */ "./src/javascript/app_2/Stores/Modules/Statement/Helpers/format_response.js");

var _base_store = __webpack_require__(/*! ../../base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var batch_size = 100; // request response limit

var StatementStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(StatementStore, _BaseStore);

    function StatementStore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, StatementStore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementStore.__proto__ || Object.getPrototypeOf(StatementStore)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'data', _descriptor, _this), _initDefineProp(_this, 'is_loading', _descriptor2, _this), _initDefineProp(_this, 'has_loaded_all', _descriptor3, _this), _initDefineProp(_this, 'date_from', _descriptor4, _this), _initDefineProp(_this, 'date_to', _descriptor5, _this), _initDefineProp(_this, 'error', _descriptor6, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StatementStore, [{
        key: 'clearTable',
        value: function clearTable() {
            this.data = [];
            this.has_loaded_all = false;
            this.is_loading = false;
        }
    }, {
        key: 'clearDateFilter',
        value: function clearDateFilter() {
            this.date_from = '';
            this.date_to = '';
        }
    }, {
        key: 'fetchNextBatch',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.has_loaded_all || this.is_loading)) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 2:

                                this.is_loading = true;

                                _context.next = 5;
                                return _Services.WS.statement(batch_size, this.data.length, _extends({}, this.date_from && { date_from: (0, _moment2.default)(this.date_from).unix() }, this.date_to && { date_to: (0, _moment2.default)(this.date_to).add(1, 'd').subtract(1, 's').unix() }));

                            case 5:
                                response = _context.sent;

                                this.statementHandler(response);

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchNextBatch() {
                return _ref2.apply(this, arguments);
            }

            return fetchNextBatch;
        }()
    }, {
        key: 'statementHandler',
        value: function statementHandler(response) {
            var _this2 = this;

            if ('error' in response) {
                this.error = response.error.message;
                return;
            }

            var formatted_transactions = response.statement.transactions.map(function (transaction) {
                return (0, _format_response.formatStatementTransaction)(transaction, _this2.root_store.client.currency);
            });

            this.data = [].concat(_toConsumableArray(this.data), _toConsumableArray(formatted_transactions));
            this.has_loaded_all = formatted_transactions.length < batch_size;
            this.is_loading = false;
        }
    }, {
        key: 'handleDateChange',
        value: function handleDateChange(e) {
            if (e.target.value !== this[e.target.name]) {
                this[e.target.name] = e.target.value;
                this.clearTable();
                this.fetchNextBatch();
            }
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _event$target = event.target,
                scrollTop = _event$target.scrollTop,
                scrollHeight = _event$target.scrollHeight,
                clientHeight = _event$target.clientHeight;

            var left_to_scroll = scrollHeight - (scrollTop + clientHeight);

            if (left_to_scroll < 2000) {
                this.fetchNextBatch();
            }
        }
    }, {
        key: 'accountSwitcherListener',
        value: function accountSwitcherListener() {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.clearTable();
                _this3.clearDateFilter();
                return resolve(_this3.fetchNextBatch());
            });
        }
    }, {
        key: 'onMount',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.onSwitchAccount(this.accountSwitcherListener);
                                _context2.next = 3;
                                return this.fetchNextBatch();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onMount() {
                return _ref3.apply(this, arguments);
            }

            return onMount;
        }()
    }, {
        key: 'onUnmount',
        value: function onUnmount() {
            this.disposeSwitchAccount();
            this.clearTable();
            this.clearDateFilter();
        }
    }, {
        key: 'is_empty',
        get: function get() {
            return !this.is_loading && this.data.length === 0;
        }
    }, {
        key: 'has_selected_date',
        get: function get() {
            return !!(this.date_from || this.date_to);
        }
    }]);

    return StatementStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'data', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'is_loading', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'has_loaded_all', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'date_from', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'date_to', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'error', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _applyDecoratedDescriptor(_class.prototype, 'is_empty', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_empty'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'has_selected_date', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'has_selected_date'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearTable', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'clearTable'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearDateFilter', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'clearDateFilter'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fetchNextBatch', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'fetchNextBatch'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'statementHandler', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'statementHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleDateChange', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'handleDateChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleScroll', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'handleScroll'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'accountSwitcherListener', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'accountSwitcherListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMount', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'onMount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onUnmount', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'onUnmount'), _class.prototype)), _class));
exports.default = StatementStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Actions/contract_type.js":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Actions/contract_type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onChangeContractType = exports.onChangeContractTypeList = undefined;

var _contract_type = __webpack_require__(/*! ../Helpers/contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js");

var _contract_type2 = _interopRequireDefault(_contract_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChangeContractTypeList = exports.onChangeContractTypeList = function onChangeContractTypeList(_ref) {
    var contract_types_list = _ref.contract_types_list,
        contract_type = _ref.contract_type;
    return _contract_type2.default.getContractType(contract_types_list, contract_type);
};

var onChangeContractType = exports.onChangeContractType = function onChangeContractType(store) {
    return _contract_type2.default.getContractValues(store);
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Actions/duration.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Actions/duration.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onChangeExpiry = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contract_type = __webpack_require__(/*! ../Helpers/contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js");

var _contract_type2 = _interopRequireDefault(_contract_type);

var _duration = __webpack_require__(/*! ../Helpers/duration */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChangeExpiry = exports.onChangeExpiry = function onChangeExpiry(store) {
    var contract_expiry_type = (0, _duration.getExpiryType)(store);

    // TODO: there will be no barrier available if contract is only daily but client chooses intraday endtime. we should find a way to handle this.
    var obj_barriers = store.contract_expiry_type !== contract_expiry_type && // barrier value changes for tick/intraday/daily
    _contract_type2.default.getBarriers(store.contract_type, contract_expiry_type);

    return _extends({
        contract_expiry_type: contract_expiry_type
    }, obj_barriers);
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Actions/purchase.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Actions/purchase.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processPurchase = undefined;

var _Services = __webpack_require__(/*! ../../../../Services */ "./src/javascript/app_2/Services/index.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var processPurchase = exports.processPurchase = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(proposal_id, price) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', _Services.WS.buy(proposal_id, price));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function processPurchase(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Actions/start_date.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Actions/start_date.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onChangeStartDate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contract_type = __webpack_require__(/*! ../Helpers/contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js");

var _contract_type2 = _interopRequireDefault(_contract_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChangeStartDate = exports.onChangeStartDate = function onChangeStartDate(store) {
    var contract_type = store.contract_type,
        start_date = store.start_date,
        duration_unit = store.duration_unit,
        expiry_time = store.expiry_time;
    var start_time = store.start_time,
        expiry_date = store.expiry_date;


    var obj_contract_start_type = _contract_type2.default.getStartType(start_date);
    var contract_start_type = obj_contract_start_type.contract_start_type;
    var obj_sessions = _contract_type2.default.getSessions(contract_type, start_date);
    var sessions = obj_sessions.sessions;
    var obj_start_time = _contract_type2.default.getStartTime(sessions, start_date, start_time);
    start_time = obj_start_time.start_time;

    var obj_duration_units_list = _contract_type2.default.getDurationUnitsList(contract_type, contract_start_type);
    var obj_duration_unit = _contract_type2.default.getDurationUnit(duration_unit, contract_type, contract_start_type);

    var obj_expiry_date = _contract_type2.default.getExpiryDate(expiry_date, start_date);
    expiry_date = obj_expiry_date.expiry_date;
    var obj_expiry_time = _contract_type2.default.getExpiryTime(sessions, start_date, start_time, expiry_date, expiry_time);

    var obj_duration_min_max = _contract_type2.default.getDurationMinMax(contract_type, contract_start_type);

    return _extends({}, obj_contract_start_type, obj_duration_units_list, obj_duration_min_max, obj_duration_unit, obj_sessions, obj_start_time, obj_expiry_date, obj_expiry_time);
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Actions/symbol.js":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Actions/symbol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onChangeSymbolAsync = undefined;

var _contract_type = __webpack_require__(/*! ../Helpers/contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js");

var _contract_type2 = _interopRequireDefault(_contract_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var onChangeSymbolAsync = exports.onChangeSymbolAsync = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(symbol) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _contract_type2.default.buildContractTypesConfig(symbol);

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function onChangeSymbolAsync(_x) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Constants/contract.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Constants/contract.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractCategoriesConfig = exports.getContractTypesConfig = exports.getLocalizedBasis = undefined;

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getLocalizedBasis = exports.getLocalizedBasis = function getLocalizedBasis() {
    return {
        payout: (0, _localize.localize)('Payout'),
        stake: (0, _localize.localize)('Stake'),
        multiplier: (0, _localize.localize)('Multiplier')
    };
};

/**
 * components can be undef or an array containing any of: 'start_date', 'barrier', 'last_digit'
 *     ['duration', 'amount'] are omitted, as they're available in all contract types
 */
var getContractTypesConfig = exports.getContractTypesConfig = function getContractTypesConfig() {
    return {
        rise_fall: { title: (0, _localize.localize)('Rise/Fall'), trade_types: ['CALL', 'PUT'], basis: ['payout', 'stake'], components: ['start_date'], barrier_count: 0 },
        high_low: { title: (0, _localize.localize)('Higher/Lower'), trade_types: ['CALL', 'PUT'], basis: ['payout', 'stake'], components: ['barrier'], barrier_count: 1 },
        touch: { title: (0, _localize.localize)('Touch/No Touch'), trade_types: ['ONETOUCH', 'NOTOUCH'], basis: ['payout', 'stake'], components: ['barrier'] },
        end: { title: (0, _localize.localize)('Ends Between/Ends Outside'), trade_types: ['EXPIRYMISS', 'EXPIRYRANGE'], basis: ['payout', 'stake'], components: ['barrier'] },
        stay: { title: (0, _localize.localize)('Stays Between/Goes Outside'), trade_types: ['RANGE', 'UPORDOWN'], basis: ['payout', 'stake'], components: ['barrier'] },
        asian: { title: (0, _localize.localize)('Asians'), trade_types: ['ASIANU', 'ASIAND'], basis: ['payout', 'stake'], components: [] },
        match_diff: { title: (0, _localize.localize)('Matches/Differs'), trade_types: ['DIGITMATCH', 'DIGITDIFF'], basis: ['payout', 'stake'], components: ['last_digit'] },
        even_odd: { title: (0, _localize.localize)('Even/Odd'), trade_types: ['DIGITODD', 'DIGITEVEN'], basis: ['payout', 'stake'], components: [] },
        over_under: { title: (0, _localize.localize)('Over/Under'), trade_types: ['DIGITOVER', 'DIGITUNDER'], basis: ['payout', 'stake'], components: ['last_digit'] },
        lb_call: { title: (0, _localize.localize)('Close-Low'), trade_types: ['LBFLOATCALL'], basis: ['multiplier'], components: [] },
        lb_put: { title: (0, _localize.localize)('High-Close'), trade_types: ['LBFLOATPUT'], basis: ['multiplier'], components: [] },
        lb_high_low: { title: (0, _localize.localize)('High-Low'), trade_types: ['LBHIGHLOW'], basis: ['multiplier'], components: [] }
    };
};

var getContractCategoriesConfig = exports.getContractCategoriesConfig = function getContractCategoriesConfig() {
    var _ref;

    return _ref = {}, _defineProperty(_ref, (0, _localize.localize)('Up/Down'), ['rise_fall', 'high_low']), _defineProperty(_ref, (0, _localize.localize)('Touch/No Touch'), ['touch']), _defineProperty(_ref, (0, _localize.localize)('In/Out'), ['end', 'stay']), _defineProperty(_ref, (0, _localize.localize)('Asians'), ['asian']), _defineProperty(_ref, (0, _localize.localize)('Digits'), ['match_diff', 'even_odd', 'over_under']), _ref;
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Constants/query_string.js":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Constants/query_string.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// list of trade's options that should be used in query string of trade page url.
var allowed_query_string_variables = exports.allowed_query_string_variables = ['amount', 'barrier_1', 'barrier_2', 'basis', 'contract_start_type', 'contract_type', 'duration', 'duration_unit', 'expiry_date', 'expiry_type', 'last_digit', 'start_date', 'symbol'];

var non_proposal_query_string_variable = exports.non_proposal_query_string_variable = ['contract_start_type', 'expiry_type'];

var proposal_properties_alternative_names = exports.proposal_properties_alternative_names = {
    barrier: function barrier(is_digit) {
        return is_digit ? 'last_digit' : 'barrier_1';
    },
    barrier2: 'barrier_2',
    date_expiry: 'expiry_date',
    date_start: 'start_date'
};

var removable_proposal_properties = exports.removable_proposal_properties = ['currency', 'passthrough', 'proposal', 'req_id', 'subscribe'];

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Constants/ui.js":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Constants/ui.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.form_components = undefined;

var _amount = __webpack_require__(/*! ../../../../Modules/Trading/Components/Form/TradeParams/amount.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/amount.jsx");

var _amount2 = _interopRequireDefault(_amount);

var _barrier = __webpack_require__(/*! ../../../../Modules/Trading/Components/Form/TradeParams/barrier.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/barrier.jsx");

var _barrier2 = _interopRequireDefault(_barrier);

var _duration = __webpack_require__(/*! ../../../../Modules/Trading/Components/Form/TradeParams/duration.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/duration.jsx");

var _duration2 = _interopRequireDefault(_duration);

var _last_digit = __webpack_require__(/*! ../../../../Modules/Trading/Components/Form/TradeParams/last_digit.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/last_digit.jsx");

var _last_digit2 = _interopRequireDefault(_last_digit);

var _start_date = __webpack_require__(/*! ../../../../Modules/Trading/Components/Form/TradeParams/start_date.jsx */ "./src/javascript/app_2/Modules/Trading/Components/Form/TradeParams/start_date.jsx");

var _start_date2 = _interopRequireDefault(_start_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var form_components = exports.form_components = [{ name: 'start_date', Component: _start_date2.default }, { name: 'duration', Component: _duration2.default }, { name: 'barrier', Component: _barrier2.default }, { name: 'last_digit', Component: _last_digit2.default }, { name: 'amount', Component: _amount2.default }];

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Constants/validation_rules.js":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Constants/validation_rules.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var getValidationRules = function getValidationRules() {
    return {
        amount: {
            rules: [['req', { message: (0, _localize.localize)('Amount is a required field.') }], ['number', { min: 0, type: 'float' }]]
        },
        barrier_1: {
            rules: [['req', { condition: function condition(store) {
                    return store.barrier_count && store.form_components.indexOf('barrier') > -1;
                }, message: (0, _localize.localize)('Barrier is a required field.') }], ['barrier', { condition: function condition(store) {
                    return store.contract_expiry_type !== 'daily' && store.barrier_count;
                } }], ['number', { condition: function condition(store) {
                    return store.contract_expiry_type === 'daily' && store.barrier_count;
                }, type: 'float' }], ['custom', { func: function func(value, options, store, inputs) {
                    return store.barrier_count > 1 ? +value > +inputs.barrier_2 : true;
                }, message: (0, _localize.localize)('Higher barrier must be higher than lower barrier.') }]],
            trigger: 'barrier_2'
        },
        barrier_2: {
            rules: [['req', { condition: function condition(store) {
                    return store.barrier_count > 1 && store.form_components.indexOf('barrier') > -1;
                }, message: (0, _localize.localize)('Barrier is a required field.') }], ['barrier', { condition: function condition(store) {
                    return store.contract_expiry_type !== 'daily' && store.barrier_count;
                } }], ['number', { condition: function condition(store) {
                    return store.contract_expiry_type === 'daily' && store.barrier_count;
                }, type: 'float' }], ['custom', { func: function func(value, options, store, inputs) {
                    return (/^[+-]/g.test(inputs.barrier_1) && /^[+-]/g.test(value) || /^(?![+-])/g.test(inputs.barrier_1) && /^(?![+-])/g.test(value)
                    );
                }, message: (0, _localize.localize)('Both barriers should be relative or absolute') }], ['custom', { func: function func(value, options, store, inputs) {
                    return +inputs.barrier_1 > +value;
                }, message: (0, _localize.localize)('Lower barrier must be lower than higher barrier.') }]],
            trigger: 'barrier_1'
        },
        duration: {
            rules: [['req', { message: (0, _localize.localize)('Duration is a required field.') }]]
        }
    };
};

exports.default = getValidationRules;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/barrier.js":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/barrier.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildBarriersConfig = exports.buildBarriersConfig = function buildBarriersConfig(contract) {
    var barriers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { count: contract.barriers };

    if (!contract.barriers) {
        return undefined;
    }

    var obj_barrier = {};

    ['barrier', 'low_barrier', 'high_barrier'].forEach(function (field) {
        if (field in contract) obj_barrier[field] = contract[field];
    });

    return Object.assign(barriers || {}, _defineProperty({}, contract.expiry_type, obj_barrier));
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/chart.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/chart.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var setChartBarrier = exports.setChartBarrier = function setChartBarrier(SmartChartStore, proposal_response, onBarrierChange) {
    var _proposal_response$ec = proposal_response.echo_req,
        barrier = _proposal_response$ec.barrier,
        barrier2 = _proposal_response$ec.barrier2,
        contract_type = _proposal_response$ec.contract_type;

    SmartChartStore.createBarriers(contract_type, barrier, barrier2, onBarrierChange);
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _utility = __webpack_require__(/*! ../../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _Services = __webpack_require__(/*! ../../../../Services */ "./src/javascript/app_2/Services/index.js");

var _barrier = __webpack_require__(/*! ./barrier */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/barrier.js");

var _duration = __webpack_require__(/*! ./duration */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/duration.js");

var _start_date = __webpack_require__(/*! ./start_date */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/start_date.js");

var _contract = __webpack_require__(/*! ../Constants/contract */ "./src/javascript/app_2/Stores/Modules/Trading/Constants/contract.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ContractType = function () {
    var available_contract_types = {};
    var available_categories = {};
    var contract_types = void 0;

    var buildContractTypesConfig = function buildContractTypesConfig(symbol) {
        return _Services.WS.contractsFor(symbol).then(function (r) {
            var contract_categories = (0, _contract.getContractCategoriesConfig)();
            contract_types = (0, _contract.getContractTypesConfig)();

            available_contract_types = {};
            available_categories = (0, _utility.cloneObject)(contract_categories); // To preserve the order (will clean the extra items later in this function)

            r.contracts_for.available.forEach(function (contract) {
                var type = Object.keys(contract_types).find(function (key) {
                    return contract_types[key].trade_types.indexOf(contract.contract_type) !== -1 && (typeof contract_types[key].barrier_count === 'undefined' || +contract_types[key].barrier_count === contract.barriers) // To distinguish betweeen Rise/Fall & Higher/Lower
                    ;
                });

                if (!type) return; // ignore unsupported contract types

                /*
                add to this config if a value you are looking for does not exist yet
                accordingly create a function to retrieve the value
                config: {
                    has_spot: 1,
                    durations: {
                        min_max: {
                            spot: {
                                tick    : { min: 5,     max: 10 },    // value in ticks, as cannot convert to seconds
                                intraday: { min: 18000, max: 86400 }, // all values converted to seconds
                                daily   : { min: 86400, max: 432000 },
                            },
                            forward: {
                                intraday: { min: 18000, max: 86400 },
                            },
                        },
                        units_display: {
                            spot: [
                                { text: 'ticks',   value: 't' },
                                { text: 'seconds', value: 's' },
                                { text: 'minutes', value: 'm' },
                                { text: 'hours',   value: 'h' },
                                { text: 'days',    value: 'd' },
                            ],
                            forward: [
                                { text: 'days',    value: 'd' },
                            ],
                        },
                    },
                    forward_starting_dates: [
                        { text: 'Mon - 19 Mar, 2018', value: 1517356800, sessions: [{ open: obj_moment, close: obj_moment }] },
                        { text: 'Tue - 20 Mar, 2018', value: 1517443200, sessions: [{ open: obj_moment, close: obj_moment }] },
                        { text: 'Wed - 21 Mar, 2018', value: 1517529600, sessions: [{ open: obj_moment, close: obj_moment }] },
                    ],
                    trade_types: {
                        'CALL': 'Higher',
                        'PUT' : 'Lower',
                    },
                    barriers: {
                        count   : 2,
                        tick    : { high_barrier: '+1.12', low_barrier : '-1.12' },
                        intraday: { high_barrier: '+2.12', low_barrier : '-2.12' },
                        daily   : { high_barrier: 1111,    low_barrier : 1093 },
                    },
                }
                */

                if (!available_contract_types[type]) {
                    // extend contract_categories to include what is needed to create the contract list
                    var sub_cats = available_categories[Object.keys(available_categories).find(function (key) {
                        return available_categories[key].indexOf(type) !== -1;
                    })];

                    if (!sub_cats) return;

                    sub_cats[sub_cats.indexOf(type)] = { value: type, text: contract_types[type].title };

                    // populate available contract types
                    available_contract_types[type] = (0, _utility.cloneObject)(contract_types[type]);
                }
                var config = available_contract_types[type].config || {};

                // set config values
                config.has_spot = config.has_spot || contract.start_type === 'spot';
                config.durations = (0, _duration.buildDurationConfig)(contract, config.durations);
                config.trade_types = buildTradeTypesConfig(contract, config.trade_types);
                config.barriers = (0, _barrier.buildBarriersConfig)(contract, config.barriers);
                config.forward_starting_dates = (0, _start_date.buildForwardStartingConfig)(contract, config.forward_starting_dates);

                available_contract_types[type].config = config;
            });

            // cleanup categories
            Object.keys(available_categories).forEach(function (key) {
                available_categories[key] = available_categories[key].filter(function (item) {
                    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object';
                });
                if (available_categories[key].length === 0) {
                    delete available_categories[key];
                }
            });
        });
    };

    var buildTradeTypesConfig = function buildTradeTypesConfig(contract) {
        var trade_types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        trade_types[contract.contract_type] = contract.contract_display;
        return trade_types;
    };

    var getArrayDefaultValue = function getArrayDefaultValue(arr_new_values, value) {
        return arr_new_values.indexOf(value) !== -1 ? value : arr_new_values[0];
    };

    var getContractValues = function getContractValues(store) {
        var contract_expiry_type = store.contract_expiry_type,
            contract_type = store.contract_type,
            basis = store.basis,
            duration_unit = store.duration_unit,
            start_date = store.start_date;

        var form_components = getComponents(contract_type);
        var obj_basis = getBasis(contract_type, basis);
        var obj_trade_types = getTradeTypes(contract_type);
        var obj_start_dates = getStartDates(contract_type, start_date);
        var obj_start_type = getStartType(obj_start_dates.start_date);
        var obj_barrier = getBarriers(contract_type, contract_expiry_type);
        var obj_duration_unit = getDurationUnit(duration_unit, contract_type, obj_start_type.contract_start_type);

        var obj_duration_units_list = getDurationUnitsList(contract_type, obj_start_type.contract_start_type);
        var obj_duration_units_min_max = getDurationMinMax(contract_type, obj_start_type.contract_start_type);

        return _extends({}, form_components, obj_basis, obj_trade_types, obj_start_dates, obj_start_type, obj_barrier, obj_duration_unit, obj_duration_units_list, obj_duration_units_min_max);
    };

    var getContractType = function getContractType(list, contract_type) {
        var arr_list = Object.keys(list || {}).reduce(function (k, l) {
            return [].concat(_toConsumableArray(k), _toConsumableArray(list[l].map(function (ct) {
                return ct.value;
            })));
        }, []);
        return {
            contract_type: getArrayDefaultValue(arr_list, contract_type)
        };
    };

    var getComponents = function getComponents(c_type) {
        return { form_components: ['duration', 'amount'].concat(_toConsumableArray(contract_types[c_type].components)) };
    };

    var getDurationUnitsList = function getDurationUnitsList(contract_type, contract_start_type) {
        return {
            duration_units_list: (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config', 'durations', 'units_display', contract_start_type]) || []
        };
    };

    var getDurationUnit = function getDurationUnit(duration_unit, contract_type, contract_start_type) {
        var duration_units = (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config', 'durations', 'units_display', contract_start_type]) || [];
        var arr_units = [];
        duration_units.forEach(function (obj) {
            arr_units.push(obj.value);
        });

        return {
            duration_unit: getArrayDefaultValue(arr_units, duration_unit)
        };
    };

    var getDurationMinMax = function getDurationMinMax(contract_type, contract_start_type, contract_expiry_type) {
        var duration_min_max = (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config', 'durations', 'min_max', contract_start_type]) || {};

        if (contract_expiry_type) {
            duration_min_max = duration_min_max[contract_expiry_type] || {};
        }

        return { duration_min_max: duration_min_max };
    };

    var getStartType = function getStartType(start_date) {
        return {
            // Number(0) refers to 'now'
            contract_start_type: start_date === Number(0) ? 'spot' : 'forward'
        };
    };

    var getStartDates = function getStartDates(contract_type, current_start_date) {
        var config = (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config']);
        var start_dates_list = [];

        if (config.has_spot) {
            // Number(0) refers to 'now'
            start_dates_list.push({ text: (0, _localize.localize)('Now'), value: Number(0) });
        }
        if (config.forward_starting_dates) {
            start_dates_list.push.apply(start_dates_list, _toConsumableArray(config.forward_starting_dates));
        }

        var start_date = start_dates_list.find(function (item) {
            return item.value === current_start_date;
        }) ? current_start_date : start_dates_list[0].value;

        return { start_date: start_date, start_dates_list: start_dates_list };
    };

    var getSessions = function getSessions(contract_type, start_date) {
        var config = (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config']) || {};
        var sessions = ((config.forward_starting_dates || []).find(function (option) {
            return option.value === start_date;
        }) || {}).sessions;
        return { sessions: sessions };
    };

    var hours = [].concat(_toConsumableArray(Array(24).keys())).map(function (a) {
        return ('0' + a).slice(-2);
    });
    var minutes = [].concat(_toConsumableArray(Array(12).keys())).map(function (a) {
        return ('0' + a * 5).slice(-2);
    });

    var getValidTime = function getValidTime(sessions, compare_moment, start_moment) {
        if (sessions && !(0, _start_date.isSessionAvailable)(sessions, compare_moment)) {
            // first see if changing the minute brings it to the right session
            compare_moment.minute(minutes.find(function (m) {
                return (0, _start_date.isSessionAvailable)(sessions, compare_moment.minute(m));
            }) || compare_moment.format('mm'));
            // if not, also change the hour
            if (!(0, _start_date.isSessionAvailable)(sessions, compare_moment)) {
                compare_moment.minute(0);
                compare_moment.hour(hours.find(function (h) {
                    return (0, _start_date.isSessionAvailable)(sessions, compare_moment.hour(h), start_moment, true);
                }) || compare_moment.format('HH'));
                compare_moment.minute(minutes.find(function (m) {
                    return (0, _start_date.isSessionAvailable)(sessions, compare_moment.minute(m));
                }) || compare_moment.format('mm'));
            }
        }
        return compare_moment.format('HH:mm');
    };

    var buildMoment = function buildMoment(date, time) {
        var _time$split = time.split(':'),
            _time$split2 = _slicedToArray(_time$split, 2),
            hour = _time$split2[0],
            minute = _time$split2[1];

        return _moment2.default.utc(isNaN(date) ? date : +date * 1000).hour(hour).minute(minute);
    };

    var getStartTime = function getStartTime(sessions, start_date, start_time) {
        return {
            start_time: getValidTime(sessions, buildMoment(start_date, start_time))
        };
    };

    var getExpiryDate = function getExpiryDate(expiry_date, start_date) {
        var moment_start = _moment2.default.utc(start_date ? start_date * 1000 : undefined);
        var moment_expiry = _moment2.default.utc(expiry_date || undefined);
        // forward starting contracts should only show today and tomorrow as expiry date
        var is_invalid = moment_expiry.isBefore(moment_start, 'day') || start_date && moment_expiry.isAfter(moment_start.clone().add(1, 'day'));
        return {
            expiry_date: (is_invalid ? moment_start : moment_expiry).format('YYYY-MM-DD')
        };
    };

    // has to follow the correct order of checks:
    // first check if end time is within available sessions
    // then confirm that end time is after start time
    var getExpiryTime = function getExpiryTime(sessions, start_date, start_time, expiry_date, expiry_time) {
        var start_moment = start_date ? buildMoment(start_date, start_time) : (0, _moment2.default)().utc();
        var end_moment = buildMoment(expiry_date, expiry_time);

        var end_time = expiry_time;
        if (sessions && !(0, _start_date.isSessionAvailable)(sessions, end_moment)) {
            end_time = getValidTime(sessions, end_moment, start_moment);
        }
        if (end_moment.isSameOrBefore(start_moment)) {
            var is_end_of_day = start_moment.get('hours') === 23 && start_moment.get('minute') >= 55;
            var is_end_of_session = sessions && !(0, _start_date.isSessionAvailable)(sessions, start_moment.clone().add(5, 'minutes'));
            end_time = start_moment.clone().add(is_end_of_day || is_end_of_session ? 0 : 5, 'minutes').format('HH:mm');
        }
        return { expiry_time: end_time };
    };

    var getTradeTypes = function getTradeTypes(contract_type) {
        return {
            trade_types: (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config', 'trade_types'])
        };
    };

    var getBarriers = function getBarriers(contract_type, expiry_type) {
        var barriers = (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'config', 'barriers']) || {};
        var barrier_values = barriers[expiry_type] || {};
        var barrier_1 = barrier_values.barrier || barrier_values.high_barrier || '';
        var barrier_2 = barrier_values.low_barrier || '';
        return {
            barrier_count: barriers.count || 0,
            barrier_1: barrier_1.toString(),
            barrier_2: barrier_2.toString()
        };
    };

    var getBasis = function getBasis(contract_type, basis) {
        var arr_basis = (0, _utility.getPropertyValue)(available_contract_types, [contract_type, 'basis']) || {};
        var localized_basis = (0, _contract.getLocalizedBasis)();
        var basis_list = arr_basis.reduce(function (cur, bas) {
            return [].concat(_toConsumableArray(cur), [{ text: localized_basis[bas], value: bas }]);
        }, []);

        return {
            basis_list: basis_list,
            basis: getArrayDefaultValue(arr_basis, basis)
        };
    };

    return {
        buildContractTypesConfig: buildContractTypesConfig,
        getBarriers: getBarriers,
        getContractType: getContractType,
        getContractValues: getContractValues,
        getDurationMinMax: getDurationMinMax,
        getDurationUnit: getDurationUnit,
        getDurationUnitsList: getDurationUnitsList,
        getExpiryDate: getExpiryDate,
        getExpiryTime: getExpiryTime,
        getSessions: getSessions,
        getStartTime: getStartTime,
        getStartType: getStartType,

        getContractCategories: function getContractCategories() {
            return { contract_types_list: available_categories };
        }
    };
}();

exports.default = ContractType;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/currency.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/currency.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDefaultCurrency = exports.buildCurrenciesList = undefined;

var _currency_base = __webpack_require__(/*! ../../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildCurrenciesList = exports.buildCurrenciesList = function buildCurrenciesList(payout_currencies) {
    var _ref;

    var fiat = [];
    var crypto = [];

    payout_currencies.forEach(function (cur) {
        ((0, _currency_base.isCryptocurrency)(cur) ? crypto : fiat).push({ text: cur, value: cur });
    });

    return _ref = {}, _defineProperty(_ref, (0, _localize.localize)('Fiat'), fiat), _defineProperty(_ref, (0, _localize.localize)('Crypto'), crypto), _ref;
};

var getDefaultCurrency = exports.getDefaultCurrency = function getDefaultCurrency(currencies_list) {
    var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var supported_currencies = Object.values(currencies_list).reduce(function (a, b) {
        return [].concat(_toConsumableArray(a), _toConsumableArray(b));
    });
    var default_currency = supported_currencies.find(function (c) {
        return c.value === currency;
    }) ? currency : supported_currencies[0].value;

    return {
        currency: default_currency
    };
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/duration.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/duration.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertDurationLimit = exports.getExpiryType = exports.convertDurationUnit = exports.buildDurationConfig = undefined;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getDurationMaps = function getDurationMaps() {
    return {
        t: { display: (0, _localize.localize)('ticks'), order: 1 },
        s: { display: (0, _localize.localize)('seconds'), order: 2, to_second: 1 },
        m: { display: (0, _localize.localize)('minutes'), order: 3, to_second: 60 },
        h: { display: (0, _localize.localize)('hours'), order: 4, to_second: 60 * 60 },
        d: { display: (0, _localize.localize)('days'), order: 5, to_second: 60 * 60 * 24 }
    };
};

var buildDurationConfig = exports.buildDurationConfig = function buildDurationConfig(contract) {
    var durations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { min_max: {}, units_display: {} };

    durations.min_max[contract.start_type] = durations.min_max[contract.start_type] || {};
    durations.units_display[contract.start_type] = durations.units_display[contract.start_type] || [];

    var obj_min = getDurationFromString(contract.min_contract_duration);
    var obj_max = getDurationFromString(contract.max_contract_duration);

    durations.min_max[contract.start_type][contract.expiry_type] = {
        min: convertDurationUnit(obj_min.duration, obj_min.unit, 's'),
        max: convertDurationUnit(obj_max.duration, obj_max.unit, 's')
    };

    var arr_units = [];
    durations.units_display[contract.start_type].forEach(function (obj) {
        arr_units.push(obj.value);
    });

    var duration_maps = getDurationMaps();

    if (/^tick|daily$/.test(contract.expiry_type)) {
        if (arr_units.indexOf(obj_min.unit) === -1) {
            arr_units.push(obj_min.unit);
        }
    } else {
        Object.keys(duration_maps).forEach(function (u) {
            if (u !== 'd' && // when the expiray_type is intraday, the supported units are seconds, minutes and hours.
            arr_units.indexOf(u) === -1 && duration_maps[u].order >= duration_maps[obj_min.unit].order && duration_maps[u].order <= duration_maps[obj_max.unit].order) {
                arr_units.push(u);
            }
        });
    }

    durations.units_display[contract.start_type] = arr_units.sort(function (a, b) {
        return duration_maps[a].order > duration_maps[b].order ? 1 : -1;
    }).reduce(function (o, c) {
        return [].concat(_toConsumableArray(o), [{ text: duration_maps[c].display, value: c }]);
    }, []);

    return durations;
};

var convertDurationUnit = exports.convertDurationUnit = function convertDurationUnit(value, from_unit, to_unit) {
    if (!value || !from_unit || !to_unit || isNaN(parseInt(value))) {
        return null;
    }

    var duration_maps = getDurationMaps();

    if (from_unit === to_unit || !('to_second' in duration_maps[from_unit])) {
        return value;
    }

    return value * duration_maps[from_unit].to_second / duration_maps[to_unit].to_second;
};

var getDurationFromString = function getDurationFromString(duration_string) {
    var duration = duration_string.toString().match(/[a-zA-Z]+|[0-9]+/g);
    return {
        duration: duration[0],
        unit: duration[1]
    };
};

var getExpiryType = exports.getExpiryType = function getExpiryType(store) {
    var duration_unit = store.duration_unit,
        expiry_date = store.expiry_date,
        expiry_type = store.expiry_type;

    var server_time = store.root_store.common.server_time;

    var duration_is_day = expiry_type === 'duration' && duration_unit === 'd';
    var expiry_is_after_today = expiry_type === 'endtime' && _moment2.default.utc(expiry_date).isAfter((0, _moment2.default)(server_time).utc(), 'day');

    var contract_expiry_type = 'daily';
    if (!duration_is_day && !expiry_is_after_today) {
        contract_expiry_type = duration_unit === 't' ? 'tick' : 'intraday';
    }

    return contract_expiry_type;
};

var convertDurationLimit = exports.convertDurationLimit = function convertDurationLimit(value, unit) {
    if (!(value >= 0) || !unit || !Number.isInteger(value)) {
        return null;
    }

    if (unit === 'm') {
        var minute = value / 60;
        return minute >= 1 ? Math.floor(minute) : 1;
    } else if (unit === 'h') {
        var hour = value / (60 * 60);
        return hour >= 1 ? Math.floor(hour) : 1;
    } else if (unit === 'd') {
        var day = value / (60 * 60 * 24);
        return day >= 1 ? Math.floor(day) : 1;
    }

    return value;
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/process.js":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/process.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processTradeParams = undefined;

var _extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");

var _extend2 = _interopRequireDefault(_extend);

var _contract_type = __webpack_require__(/*! ./contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js");

var _contract_type2 = _interopRequireDefault(_contract_type);

var _contract_type3 = __webpack_require__(/*! ../Actions/contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Actions/contract_type.js");

var ContractType = _interopRequireWildcard(_contract_type3);

var _duration = __webpack_require__(/*! ../Actions/duration */ "./src/javascript/app_2/Stores/Modules/Trading/Actions/duration.js");

var Duration = _interopRequireWildcard(_duration);

var _start_date = __webpack_require__(/*! ../Actions/start_date */ "./src/javascript/app_2/Stores/Modules/Trading/Actions/start_date.js");

var StartDate = _interopRequireWildcard(_start_date);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var processTradeParams = exports.processTradeParams = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store, new_state) {
        var snapshot;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        snapshot = store.getSnapshot();


                        getMethodsList(store, new_state).forEach(function (fnc) {
                            extendOrReplace(snapshot, fnc(snapshot));
                        });

                        return _context.abrupt('return', snapshot);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function processTradeParams(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var getMethodsList = function getMethodsList(store, new_state) {
    return [_contract_type2.default.getContractCategories, ContractType.onChangeContractTypeList].concat(_toConsumableArray(/\b(symbol|contract_type)\b/.test(Object.keys(new_state)) || !store.contract_type ? // symbol/contract_type changed or contract_type not set yet
    [ContractType.onChangeContractType] : []), [Duration.onChangeExpiry, StartDate.onChangeStartDate]);
};

// Some values need to be replaced, not extended
var extendOrReplace = function extendOrReplace(source, new_values) {
    var to_replace = ['contract_types_list', 'duration_units_list', 'form_components', 'trade_types'];

    to_replace.forEach(function (key) {
        if (key in new_values) {
            source[key] = undefined;
        }
    });

    (0, _extend2.default)(true, source, new_values);
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/proposal.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/proposal.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProposalParametersName = exports.createProposalRequests = exports.getProposalInfo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _currency_base = __webpack_require__(/*! ../../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _utility = __webpack_require__(/*! ../../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _Date = __webpack_require__(/*! ../../../../Utils/Date */ "./src/javascript/app_2/Utils/Date/index.js");

var _query_string = __webpack_require__(/*! ../Constants/query_string */ "./src/javascript/app_2/Stores/Modules/Trading/Constants/query_string.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProposalInfo = exports.getProposalInfo = function getProposalInfo(store, response) {
    var proposal = response.proposal || {};
    var profit = proposal.payout - proposal.ask_price || 0;
    var returns = profit * 100 / (proposal.ask_price || 1);

    return {
        profit: profit.toFixed((0, _currency_base.getDecimalPlaces)(store.currency)),
        returns: returns.toFixed(2) + '%',
        stake: proposal.display_value,
        payout: proposal.payout,
        id: proposal.id || '',
        message: proposal.longcode || response.error.message,
        has_error: !!response.error
    };
};

var createProposalRequests = exports.createProposalRequests = function createProposalRequests(store) {
    var requests = {};

    Object.keys(store.trade_types).forEach(function (type) {
        var new_req = createProposalRequestForContract(store, type);
        var current_req = store.proposal_requests[type];
        if (!(0, _utility.isDeepEqual)(new_req, current_req)) {
            requests[type] = new_req;
        }
    });

    return requests;
};

var createProposalRequestForContract = function createProposalRequestForContract(store, type_of_contract) {
    var obj_expiry = {};
    if (store.expiry_type === 'endtime') {
        var expiry_date = _moment2.default.utc(store.expiry_date);
        var start_date = _moment2.default.unix(store.start_date || store.root_store.common.server_time / 1000).utc();
        var is_same_day = expiry_date.isSame(start_date, 'day');
        var expiry_time = is_same_day ? store.expiry_time : '23:59:59';
        obj_expiry.date_expiry = (0, _Date.convertToUnix)(expiry_date.unix(), expiry_time);
    }

    return _extends({
        proposal: 1,
        subscribe: 1,
        amount: parseFloat(store.amount),
        basis: store.basis,
        contract_type: type_of_contract,
        currency: store.root_store.client.currency,
        symbol: store.symbol
    }, store.start_date && { date_start: (0, _Date.convertToUnix)(store.start_date, store.start_time) }, store.expiry_type === 'duration' ? {
        duration: parseInt(store.duration),
        duration_unit: store.duration_unit
    } : obj_expiry, (store.barrier_count > 0 || store.form_components.indexOf('last_digit') !== -1) && { barrier: store.barrier_1 || store.last_digit }, store.barrier_count === 2 && { barrier2: store.barrier_2 });
};

var getProposalParametersName = exports.getProposalParametersName = function getProposalParametersName(proposal_requests) {
    var proper_param_name = [];
    var is_digit = Object.keys(proposal_requests).findIndex(function (i) {
        return i.toUpperCase().indexOf('DIGIT') > -1;
    }) > -1;

    var keys = Object.keys(Object.values(proposal_requests)[0]);

    keys.forEach(function (name) {
        var alternative_name = _query_string.proposal_properties_alternative_names[name];

        if (alternative_name) {
            proper_param_name.push(typeof alternative_name === 'string' ? alternative_name : alternative_name(is_digit));
        } else if (_query_string.removable_proposal_properties.indexOf(name) === -1) {
            proper_param_name.push(name);
        }
    });

    proper_param_name.sort();
    return proper_param_name;
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/start_date.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/start_date.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSessionAvailable = exports.buildForwardStartingConfig = undefined;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildForwardStartingConfig = exports.buildForwardStartingConfig = function buildForwardStartingConfig(contract, forward_starting_dates) {
    var forward_starting_config = [];

    if ((contract.forward_starting_options || []).length) {
        contract.forward_starting_options.forEach(function (option) {
            var duplicated_option = forward_starting_config.find(function (opt) {
                return opt.value === parseInt(option.date);
            });
            var current_session = { open: _moment2.default.unix(option.open).utc(), close: _moment2.default.unix(option.close).utc() };
            if (duplicated_option) {
                duplicated_option.sessions.push(current_session);
            } else {
                forward_starting_config.push({
                    text: _moment2.default.unix(option.date).format('ddd - DD MMM, YYYY'),
                    value: parseInt(option.date),
                    sessions: [current_session]
                });
            }
        });
    }

    return forward_starting_config.length ? forward_starting_config : forward_starting_dates;
};

// returns false if same as now
var isBeforeDate = function isBeforeDate(compare_moment, start_moment, should_only_check_hour) {
    var now_moment = _moment2.default.utc(start_moment);
    if (should_only_check_hour) {
        now_moment.minute(0).second(0);
    }
    return compare_moment.isBefore(now_moment) && now_moment.unix() !== compare_moment.unix();
};

var isSessionAvailable = exports.isSessionAvailable = function isSessionAvailable() {
    var sessions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compare_moment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _moment2.default.utc();
    var start_moment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _moment2.default.utc();
    var should_only_check_hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return !isBeforeDate(compare_moment, undefined, should_only_check_hour) && !isBeforeDate(compare_moment, start_moment, should_only_check_hour) && (!sessions.length || !!sessions.find(function (session) {
        return compare_moment.isBetween(should_only_check_hour ? session.open.clone().minute(0) : session.open, session.close, null, '[]');
    }));
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/symbol.js":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/Helpers/symbol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var pickDefaultSymbol = exports.pickDefaultSymbol = function pickDefaultSymbol() {
    var active_symbols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!active_symbols.length) return '';
    return active_symbols.filter(function (symbol_info) {
        return (/major_pairs|random_index/.test(symbol_info.submarket)
        );
    })[0].symbol;
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/Trading/trade_store.js":
/*!********************************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/Trading/trade_store.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31;

var _lodash = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _socket_base = __webpack_require__(/*! ../../../../_common/base/socket_base */ "./src/javascript/_common/base/socket_base.js");

var _socket_base2 = _interopRequireDefault(_socket_base);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _utility = __webpack_require__(/*! ../../../../_common/utility */ "./src/javascript/_common/utility.js");

var _currency_base = __webpack_require__(/*! ../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _Services = __webpack_require__(/*! ../../../Services */ "./src/javascript/app_2/Services/index.js");

var _gtm = __webpack_require__(/*! ../../../Utils/gtm */ "./src/javascript/app_2/Utils/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _url_helper = __webpack_require__(/*! ../../../Utils/URL/url_helper */ "./src/javascript/app_2/Utils/URL/url_helper.js");

var _url_helper2 = _interopRequireDefault(_url_helper);

var _purchase = __webpack_require__(/*! ./Actions/purchase */ "./src/javascript/app_2/Stores/Modules/Trading/Actions/purchase.js");

var _symbol = __webpack_require__(/*! ./Actions/symbol */ "./src/javascript/app_2/Stores/Modules/Trading/Actions/symbol.js");

var _Symbol = _interopRequireWildcard(_symbol);

var _query_string = __webpack_require__(/*! ./Constants/query_string */ "./src/javascript/app_2/Stores/Modules/Trading/Constants/query_string.js");

var _validation_rules = __webpack_require__(/*! ./Constants/validation_rules */ "./src/javascript/app_2/Stores/Modules/Trading/Constants/validation_rules.js");

var _validation_rules2 = _interopRequireDefault(_validation_rules);

var _chart = __webpack_require__(/*! ./Helpers/chart */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/chart.js");

var _contract_type = __webpack_require__(/*! ./Helpers/contract_type */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/contract_type.js");

var _contract_type2 = _interopRequireDefault(_contract_type);

var _duration = __webpack_require__(/*! ./Helpers/duration */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/duration.js");

var _process = __webpack_require__(/*! ./Helpers/process */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/process.js");

var _proposal = __webpack_require__(/*! ./Helpers/proposal */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/proposal.js");

var _symbol2 = __webpack_require__(/*! ./Helpers/symbol */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/symbol.js");

var _base_store = __webpack_require__(/*! ../../base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var TradeStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, _dec10 = _mobx.action.bound, _dec11 = _mobx.action.bound, _dec12 = _mobx.action.bound, _dec13 = _mobx.action.bound, _dec14 = _mobx.action.bound, _dec15 = _mobx.action.bound, _dec16 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(TradeStore, _BaseStore);

    // Chart


    // Purchase
    // Number(0) refers to 'now'


    // Barrier


    // Amount


    // Contract Type
    function TradeStore(_ref) {
        var root_store = _ref.root_store;

        _classCallCheck(this, TradeStore);

        _url_helper2.default.pruneQueryString(_query_string.allowed_query_string_variables);

        var _this = _possibleConstructorReturn(this, (TradeStore.__proto__ || Object.getPrototypeOf(TradeStore)).call(this, {
            root_store: root_store,
            session_storage_properties: _query_string.allowed_query_string_variables,
            validation_rules: (0, _validation_rules2.default)()
        }));

        _initDefineProp(_this, 'is_trade_component_mounted', _descriptor, _this);

        _initDefineProp(_this, 'is_purchase_enabled', _descriptor2, _this);

        _initDefineProp(_this, 'is_trade_enabled', _descriptor3, _this);

        _initDefineProp(_this, 'symbol', _descriptor4, _this);

        _initDefineProp(_this, 'contract_expiry_type', _descriptor5, _this);

        _initDefineProp(_this, 'contract_start_type', _descriptor6, _this);

        _initDefineProp(_this, 'contract_type', _descriptor7, _this);

        _initDefineProp(_this, 'contract_types_list', _descriptor8, _this);

        _initDefineProp(_this, 'form_components', _descriptor9, _this);

        _initDefineProp(_this, 'trade_types', _descriptor10, _this);

        _initDefineProp(_this, 'amount', _descriptor11, _this);

        _initDefineProp(_this, 'basis', _descriptor12, _this);

        _initDefineProp(_this, 'basis_list', _descriptor13, _this);

        _initDefineProp(_this, 'duration', _descriptor14, _this);

        _initDefineProp(_this, 'duration_unit', _descriptor15, _this);

        _initDefineProp(_this, 'duration_units_list', _descriptor16, _this);

        _initDefineProp(_this, 'duration_min_max', _descriptor17, _this);

        _initDefineProp(_this, 'expiry_date', _descriptor18, _this);

        _initDefineProp(_this, 'expiry_time', _descriptor19, _this);

        _initDefineProp(_this, 'expiry_type', _descriptor20, _this);

        _initDefineProp(_this, 'barrier_1', _descriptor21, _this);

        _initDefineProp(_this, 'barrier_2', _descriptor22, _this);

        _initDefineProp(_this, 'barrier_count', _descriptor23, _this);

        _initDefineProp(_this, 'start_date', _descriptor24, _this);

        _initDefineProp(_this, 'start_dates_list', _descriptor25, _this);

        _initDefineProp(_this, 'start_time', _descriptor26, _this);

        _initDefineProp(_this, 'sessions', _descriptor27, _this);

        _initDefineProp(_this, 'last_digit', _descriptor28, _this);

        _initDefineProp(_this, 'proposal_info', _descriptor29, _this);

        _initDefineProp(_this, 'purchase_info', _descriptor30, _this);

        _this.chart_id = 1;
        _this.debouncedProposal = (0, _lodash2.default)(_this.requestProposal, 500);
        _this.proposal_requests = {};

        _initDefineProp(_this, 'init', _descriptor31, _this);

        Object.defineProperty(_this, 'is_query_string_applied', {
            enumerable: false,
            value: false,
            writable: true
        });
        // Adds intercept to change min_max value of duration validation
        (0, _mobx.reaction)(function () {
            return [_this.contract_expiry_type, _this.duration_min_max, _this.duration_unit, _this.expiry_type];
        }, function () {
            _this.changeDurationValidationRules();
        });
        return _this;
    }

    // Last Digit


    // Start Time


    // Duration


    // Underlying


    _createClass(TradeStore, [{
        key: 'refresh',
        value: function refresh() {
            this.symbol = null;
            _Services.WS.forgetAll('proposal');
        }
    }, {
        key: 'prepareTradeStore',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var query_string_values, active_symbols, is_invalid_symbol;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                query_string_values = this.updateQueryString();

                                this.smart_chart = this.root_store.modules.smart_chart;
                                _context2.next = 4;
                                return _Services.WS.activeSymbols();

                            case 4:
                                active_symbols = _context2.sent;

                                if (!active_symbols.active_symbols || active_symbols.active_symbols.length === 0) {
                                    this.root_store.common.showError((0, _localize.localize)('Trading is unavailable at this time.'));
                                }

                                // Checks for finding out that the current account has access to the defined symbol in quersy string or not.
                                is_invalid_symbol = !!query_string_values.symbol && !active_symbols.active_symbols.find(function (s) {
                                    return s.symbol === query_string_values.symbol;
                                });

                                // Changes the symbol in query string to default symbol since the account doesn't have access to the defined symbol.

                                if (is_invalid_symbol) {
                                    this.root_store.ui.addToastMessage({
                                        message: (0, _localize.localize)('Certain trade parameters have been changed due to your account settings.'),
                                        type: 'info'
                                    });
                                    _url_helper2.default.setQueryParam({ 'symbol': (0, _symbol2.pickDefaultSymbol)(active_symbols.active_symbols) });
                                    query_string_values = this.updateQueryString();
                                }

                                if (this.symbol) {
                                    _context2.next = 11;
                                    break;
                                }

                                _context2.next = 11;
                                return this.processNewValuesAsync(_extends({
                                    symbol: (0, _symbol2.pickDefaultSymbol)(active_symbols.active_symbols)
                                }, query_string_values));

                            case 11:

                                if (this.symbol) {
                                    _contract_type2.default.buildContractTypesConfig(query_string_values.symbol || this.symbol).then((0, _mobx.action)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return _this2.processNewValuesAsync(_extends({}, _contract_type2.default.getContractValues(_this2), _contract_type2.default.getContractCategories(), query_string_values));

                                                    case 2:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }))));
                                }

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function prepareTradeStore() {
                return _ref2.apply(this, arguments);
            }

            return prepareTradeStore;
        }()
    }, {
        key: 'onChange',
        value: function onChange(e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            if (name === 'currency') {
                this.root_store.client.selectCurrency(value);
            } else if (!(name in this)) {
                throw new Error('Invalid Argument: ' + name);
            }

            this.processNewValuesAsync(_defineProperty({}, name, value), true);
        }
    }, {
        key: 'onHoverPurchase',
        value: function onHoverPurchase(is_over, contract_type) {
            this.smart_chart.updateBarrierShade(is_over, contract_type);
        }
    }, {
        key: 'onPurchase',
        value: function onPurchase(proposal_id, price, type) {
            var _this3 = this;

            if (proposal_id) {
                (0, _purchase.processPurchase)(proposal_id, price).then((0, _mobx.action)(function (response) {
                    if (_this3.proposal_info[type].id !== proposal_id) {
                        throw new Error('Proposal ID does not match.');
                    }
                    if (response.buy) {
                        var contract_data = _extends({}, _this3.proposal_requests[type], _this3.proposal_info[type], {
                            buy_price: response.buy.buy_price
                        });
                        _gtm2.default.pushPurchaseData(contract_data, _this3.root_store);
                    }
                    _Services.WS.forgetAll('proposal');
                    _this3.purchase_info = response;
                }));
            }
        }
    }, {
        key: 'onClickNewTrade',
        value: function onClickNewTrade(e) {
            this.requestProposal();
            e.preventDefault();
        }

        /**
         * Updates the store with new values
         * @param  {Object} new_state - new values to update the store with
         * @return {Object} returns the object having only those values that are updated
         */

    }, {
        key: 'updateStore',
        value: function updateStore(new_state) {
            var _this4 = this;

            Object.keys((0, _utility.cloneObject)(new_state)).forEach(function (key) {
                if (key === 'root_store' || ['validation_rules', 'validation_errors', 'currency'].indexOf(key) > -1) return;
                if (JSON.stringify(_this4[key]) === JSON.stringify(new_state[key])) {
                    delete new_state[key];
                } else {
                    if (key === 'symbol') {
                        _this4.is_purchase_enabled = false;
                        _this4.is_trade_enabled = false;
                    }

                    if (new_state.start_date && typeof new_state.start_date === 'string') {
                        new_state.start_date = parseInt(new_state.start_date);
                    }

                    // Add changes to queryString of the url
                    if (_query_string.allowed_query_string_variables.indexOf(key) !== -1 && _this4.is_trade_component_mounted) {
                        _url_helper2.default.setQueryParam(_defineProperty({}, key, new_state[key]));
                    }

                    _this4[key] = new_state[key];

                    // validation is done in mobx intercept (base_store.js)
                    // when barrier_1 is set, it is compared with store.barrier_2 (which is not updated yet)
                    if (key === 'barrier_2' && new_state.barrier_1) {
                        _this4.barrier_1 = new_state.barrier_1; // set it again, after barrier_2 is updated in store
                    }
                }
            });

            return new_state;
        }
    }, {
        key: 'processNewValuesAsync',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var obj_new_values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var is_changed_by_user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var new_state, is_barrier_changed, snapshot, query_string_values;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                // Sets the default value to Amount when Currency has changed from Fiat to Crypto and vice versa.
                                // The source of default values is the website_status response.
                                if (is_changed_by_user && /\bcurrency\b/.test(Object.keys(obj_new_values)) && (0, _currency_base.isCryptocurrency)(obj_new_values.currency) !== (0, _currency_base.isCryptocurrency)(this.currency)) {
                                    obj_new_values.amount = obj_new_values.amount || (0, _currency_base.getMinPayout)(obj_new_values.currency);
                                }

                                new_state = this.updateStore((0, _utility.cloneObject)(obj_new_values));

                                if (!(is_changed_by_user || /\b(symbol|contract_types_list)\b/.test(Object.keys(new_state)))) {
                                    _context3.next = 17;
                                    break;
                                }

                                if (!('symbol' in new_state)) {
                                    _context3.next = 6;
                                    break;
                                }

                                _context3.next = 6;
                                return _Symbol.onChangeSymbolAsync(new_state.symbol);

                            case 6:

                                this.updateStore({ // disable purchase button(s), clear contract info
                                    is_purchase_enabled: false,
                                    proposal_info: {}
                                });

                                if (!this.smart_chart.is_contract_mode) {
                                    is_barrier_changed = 'barrier_1' in new_state || 'barrier_2' in new_state;

                                    if (is_barrier_changed) {
                                        this.smart_chart.updateBarriers(this.barrier_1, this.barrier_2);
                                    } else {
                                        this.smart_chart.removeBarriers();
                                    }
                                }

                                _context3.next = 10;
                                return (0, _process.processTradeParams)(this, new_state);

                            case 10:
                                snapshot = _context3.sent;
                                query_string_values = this.updateQueryString();

                                snapshot.is_trade_enabled = true;

                                this.updateStore(_extends({}, snapshot, this.is_query_string_applied ? {} : query_string_values) // Applies the query string values again to set barriers.
                                );

                                this.is_query_string_applied = true;

                                if (/\bcontract_type\b/.test(Object.keys(new_state))) {
                                    this.validateAllProperties();
                                }

                                this.debouncedProposal();

                            case 17:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function processNewValuesAsync() {
                return _ref4.apply(this, arguments);
            }

            return processNewValuesAsync;
        }()
    }, {
        key: 'requestProposal',
        value: function requestProposal() {
            var _this5 = this;

            var requests = (0, _proposal.createProposalRequests)(this);

            if (Object.values(this.validation_errors).some(function (e) {
                return e.length;
            })) {
                this.proposal_info = {};
                this.purchase_info = {};
                _Services.WS.forgetAll('proposal');
                return;
            }

            if (!(0, _utility.isEmptyObject)(requests)) {
                var proper_proposal_params_for_query_string = (0, _proposal.getProposalParametersName)(requests);

                _url_helper2.default.pruneQueryString([].concat(_toConsumableArray(proper_proposal_params_for_query_string), _toConsumableArray(_query_string.non_proposal_query_string_variable)));

                this.proposal_requests = requests;
                this.proposal_info = {};
                this.purchase_info = {};

                _Services.WS.forgetAll('proposal').then(function () {
                    Object.keys(_this5.proposal_requests).forEach(function (type) {
                        _Services.WS.subscribeProposal(_this5.proposal_requests[type], _this5.onProposalResponse);
                    });
                });
            }
        }
    }, {
        key: 'onProposalResponse',
        value: function onProposalResponse(response) {
            var contract_type = response.echo_req.contract_type;
            this.proposal_info = _extends({}, this.proposal_info, _defineProperty({}, contract_type, (0, _proposal.getProposalInfo)(this, response)));

            if (!this.smart_chart.is_contract_mode) {
                (0, _chart.setChartBarrier)(this.smart_chart, response, this.onChartBarrierChange);
            }

            this.is_purchase_enabled = true;
        }
    }, {
        key: 'onChartBarrierChange',
        value: function onChartBarrierChange(barrier_1, barrier_2) {
            this.processNewValuesAsync({ barrier_1: barrier_1, barrier_2: barrier_2 }, true);
        }
    }, {
        key: 'updateQueryString',
        value: function updateQueryString() {

            // Update the url's query string by default values of the store
            var query_params = _url_helper2.default.updateQueryString(this, _query_string.allowed_query_string_variables, this.is_trade_component_mounted);

            // update state values from query string
            var config = {};
            [].concat(_toConsumableArray(query_params)).forEach(function (param) {
                return config[param[0]] = param[1];
            });
            return config;
        }
    }, {
        key: 'changeDurationValidationRules',
        value: function changeDurationValidationRules() {
            if (this.expiry_type === 'endtime') {
                this.validation_errors.duration = [];
                return;
            }

            var index = this.validation_rules.duration.rules.findIndex(function (item) {
                return item[0] === 'number';
            });
            var limits = this.duration_min_max[this.contract_expiry_type] || false;

            if (limits) {
                var duration_options = {
                    min: (0, _duration.convertDurationLimit)(+limits.min, this.duration_unit),
                    max: (0, _duration.convertDurationLimit)(+limits.max, this.duration_unit)
                };

                if (index > -1) {
                    this.validation_rules.duration.rules[index][1] = duration_options;
                } else {
                    this.validation_rules.duration.rules.push(['number', duration_options]);
                }
                this.validateProperty('duration', this.duration);
            }
        }
    }, {
        key: 'accountSwitcherListener',
        value: function accountSwitcherListener() {
            var _this6 = this;

            return new Promise(function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return _this6.refresh();

                                case 2:
                                    _context4.next = 4;
                                    return _this6.prepareTradeStore();

                                case 4:
                                    return _context4.abrupt('return', resolve(_this6.debouncedProposal()));

                                case 5:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, _this6);
                }));

                return function (_x3) {
                    return _ref5.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'onMount',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this7 = this;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.prepareTradeStore();

                            case 2:
                                this.debouncedProposal();
                                (0, _mobx.runInAction)(function () {
                                    _this7.is_trade_component_mounted = true;
                                });
                                this.updateQueryString();
                                this.onSwitchAccount(this.accountSwitcherListener);

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function onMount() {
                return _ref6.apply(this, arguments);
            }

            return onMount;
        }()
    }, {
        key: 'onUnmount',
        value: function onUnmount() {
            this.disposeSwitchAccount();
            _Services.WS.forgetAll('proposal');
            this.is_trade_component_mounted = false;
        }
    }]);

    return TradeStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'is_trade_component_mounted', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'is_purchase_enabled', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'is_trade_enabled', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'symbol', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'contract_expiry_type', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'contract_start_type', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'contract_type', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'contract_types_list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'form_components', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'trade_types', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'amount', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 10;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'basis', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'basis_list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'duration', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 5;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'duration_unit', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'duration_units_list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'duration_min_max', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'expiry_date', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'expiry_time', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '09:40';
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'expiry_type', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 'duration';
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'barrier_1', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'barrier_2', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'barrier_count', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'start_date', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return Number(0);
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'start_dates_list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'start_time', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '12:30';
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'sessions', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'last_digit', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 5;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'proposal_info', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, 'purchase_info', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, 'init', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        var _this8 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return _socket_base2.default.wait('website_status');

                        case 2:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this8);
        }));
    }
}), _applyDecoratedDescriptor(_class.prototype, 'refresh', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'refresh'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'prepareTradeStore', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'prepareTradeStore'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onChange', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'onChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onHoverPurchase', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'onHoverPurchase'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onPurchase', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'onPurchase'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onClickNewTrade', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'onClickNewTrade'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateStore', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'updateStore'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'requestProposal', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'requestProposal'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onProposalResponse', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'onProposalResponse'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onChartBarrierChange', [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'onChartBarrierChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateQueryString', [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'updateQueryString'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeDurationValidationRules', [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'changeDurationValidationRules'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'accountSwitcherListener', [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, 'accountSwitcherListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMount', [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'onMount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onUnmount', [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'onUnmount'), _class.prototype)), _class));
exports.default = TradeStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/Modules/index.js":
/*!******************************************************!*\
  !*** ./src/javascript/app_2/Stores/Modules/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _contract_store = __webpack_require__(/*! ./Contract/contract_store */ "./src/javascript/app_2/Stores/Modules/Contract/contract_store.js");

var _contract_store2 = _interopRequireDefault(_contract_store);

var _portfolio_store = __webpack_require__(/*! ./Portfolio/portfolio_store */ "./src/javascript/app_2/Stores/Modules/Portfolio/portfolio_store.js");

var _portfolio_store2 = _interopRequireDefault(_portfolio_store);

var _smart_chart_store = __webpack_require__(/*! ./SmartChart/smart_chart_store */ "./src/javascript/app_2/Stores/Modules/SmartChart/smart_chart_store.js");

var _smart_chart_store2 = _interopRequireDefault(_smart_chart_store);

var _statement_store = __webpack_require__(/*! ./Statement/statement_store */ "./src/javascript/app_2/Stores/Modules/Statement/statement_store.js");

var _statement_store2 = _interopRequireDefault(_statement_store);

var _trade_store = __webpack_require__(/*! ./Trading/trade_store */ "./src/javascript/app_2/Stores/Modules/Trading/trade_store.js");

var _trade_store2 = _interopRequireDefault(_trade_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModulesStore = function ModulesStore(root_store) {
    _classCallCheck(this, ModulesStore);

    this.contract = new _contract_store2.default({ root_store: root_store });
    this.portfolio = new _portfolio_store2.default({ root_store: root_store });
    this.smart_chart = new _smart_chart_store2.default({ root_store: root_store });
    this.statement = new _statement_store2.default({ root_store: root_store });
    this.trade = new _trade_store2.default({ root_store: root_store });
};

exports.default = ModulesStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/base_store.js":
/*!***************************************************!*\
  !*** ./src/javascript/app_2/Stores/base_store.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _class2, _temp;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _utility = __webpack_require__(/*! ../../_common/utility */ "./src/javascript/_common/utility.js");

var _Validator = __webpack_require__(/*! ../Utils/Validator */ "./src/javascript/app_2/Utils/Validator/index.js");

var _Validator2 = _interopRequireDefault(_Validator);

var _config = __webpack_require__(/*! ../../config */ "./src/javascript/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

/**
 * BaseStore class is the base class for all defined stores in the application. It handles some stuff such as:
 *  1. Creating snapshot object from the store.
 *  2. Saving the store's snapshot in local/session storage and keeping them in sync.
 */
var BaseStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, (_class = (_temp = _class2 = function () {

    /**
     * Constructor of the base class that gets properties' name of child which should be saved in storages
     *
     * @param {Object} options - An object that contains the following properties:
     *     @property {Object}   root_store - An object that contains the root store of the app.
     *     @property {String[]} local_storage_properties - A list of properties' names that should be kept in localStorage.
     *     @property {String[]} session_storage_properties - A list of properties' names that should be kept in sessionStorage.
     *     @property {Object}   validation_rules - An object that contains the validation rules for each property of the store.
     */
    function BaseStore() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BaseStore);

        _initDefineProp(this, 'validation_errors', _descriptor, this);

        _initDefineProp(this, 'validation_rules', _descriptor2, this);

        this.switchAccountDisposer = null;
        this.switch_account_listener = null;
        var root_store = options.root_store,
            local_storage_properties = options.local_storage_properties,
            session_storage_properties = options.session_storage_properties,
            validation_rules = options.validation_rules;


        Object.defineProperty(this, 'root_store', {
            enumerable: false,
            writable: true
        });
        Object.defineProperty(this, 'local_storage_properties', {
            enumerable: false,
            writable: true
        });
        Object.defineProperty(this, 'session_storage_properties', {
            enumerable: false,
            writable: true
        });

        this.root_store = root_store;
        this.local_storage_properties = local_storage_properties || [];
        this.session_storage_properties = session_storage_properties || [];
        this.setValidationRules(validation_rules);

        this.setupReactionForLocalStorage();
        this.setupReactionForSessionStorage();
        this.retrieveFromStorage();
    }

    /**
     * Returns an snapshot of the current store
     *
     * @param {String[]} properties - A list of properties' names that should be in the snapshot.
     *
     * @return {Object} Returns a cloned object of the store.
     */


    /**
     * An enum object to define LOCAL_STORAGE and SESSION_STORAGE
     */


    _createClass(BaseStore, [{
        key: 'getSnapshot',
        value: function getSnapshot(properties) {
            var snapshot = (0, _mobx.toJS)(this);

            if (!(0, _utility.isEmptyObject)(this.root_store)) {
                snapshot.root_store = this.root_store;
            }

            if (properties && properties.length) {
                snapshot = properties.reduce(function (result, p) {
                    return Object.assign(result, _defineProperty({}, p, snapshot[p]));
                }, {});
            }

            return snapshot;
        }

        /**
         * Sets up a reaction on properties which are mentioned in `local_storage_properties`
         *  and invokes `saveToStorage` when there are any changes on them.
         *
         */

    }, {
        key: 'setupReactionForLocalStorage',
        value: function setupReactionForLocalStorage() {
            var _this = this;

            if (this.local_storage_properties.length) {
                (0, _mobx.reaction)(function () {
                    return _this.local_storage_properties.map(function (i) {
                        return _this[i];
                    });
                }, function () {
                    return _this.saveToStorage(_this.local_storage_properties, BaseStore.STORAGES.LOCAL_STORAGE);
                });
            }
        }

        /**
         * Sets up a reaction on properties which are mentioned in `session_storage_properties`
         *  and invokes `saveToStorage` when there are any changes on them.
         *
         */

    }, {
        key: 'setupReactionForSessionStorage',
        value: function setupReactionForSessionStorage() {
            var _this2 = this;

            if (this.session_storage_properties.length) {
                (0, _mobx.reaction)(function () {
                    return _this2.session_storage_properties.map(function (i) {
                        return _this2[i];
                    });
                }, function () {
                    return _this2.saveToStorage(_this2.session_storage_properties, BaseStore.STORAGES.SESSION_STORAGE);
                });
            }
        }

        /**
         * Removes properties that are not passed from the snapshot of the store and saves it to the passed storage
         *
         * @param {String[]} properties - A list of the store's properties' names which should be saved in the storage.
         * @param {Symbol}   storage    - A symbol object that defines the storage which the snapshot should be stored in it.
         *
         */

    }, {
        key: 'saveToStorage',
        value: function saveToStorage(properties, storage) {
            var snapshot = JSON.stringify(this.getSnapshot(properties));

            if (storage === BaseStore.STORAGES.LOCAL_STORAGE) {
                localStorage.setItem(this.constructor.name, snapshot);
            } else if (storage === BaseStore.STORAGES.SESSION_STORAGE) {
                sessionStorage.setItem(this.constructor.name, snapshot);
            }
        }

        /**
         * Retrieves saved snapshot of the store and assigns to the current instance.
         *
         */

    }, {
        key: 'retrieveFromStorage',
        value: function retrieveFromStorage() {
            var _this3 = this;

            var local_storage_snapshot = JSON.parse(localStorage.getItem(this.constructor.name, {}));
            var session_storage_snapshot = JSON.parse(sessionStorage.getItem(this.constructor.name, {}));

            var snapshot = _extends({}, local_storage_snapshot, session_storage_snapshot);

            Object.keys(snapshot).forEach(function (k) {
                return _this3[k] = snapshot[k];
            });
        }

        /**
         * Sets validation error messages for an observable property of the store
         *
         * @param {String} propertyName - The observable property's name
         * @param {String} messages - An array of strings that contains validation error messages for the particular property.
         *
         */

    }, {
        key: 'setValidationErrorMessages',
        value: function setValidationErrorMessages(propertyName, messages) {
            this.validation_errors[propertyName] = messages;
        }

        /**
         * Sets validation rules
         *
         * @param {object} rules
         *
         */

    }, {
        key: 'setValidationRules',
        value: function setValidationRules() {
            var _this4 = this;

            var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object.keys(rules).forEach(function (key) {
                _this4.addRule(key, rules[key]);
            });
        }

        /**
         * Adds rules to the particular property
         *
         * @param {String} property
         * @param {String} rules
         *
         */

    }, {
        key: 'addRule',
        value: function addRule(property, rules) {
            var _this5 = this;

            this.validation_rules[property] = rules;

            (0, _mobx.intercept)(this, property, function (change) {
                _this5.validateProperty(property, change.newValue);
                return change;
            });
        }

        /**
         * Validates a particular property of the store
         *
         * @param {String} property - The name of the property in the store
         * @param {object} value    - The value of the property, it can be undefined.
         *
         */

    }, {
        key: 'validateProperty',
        value: function validateProperty(property, value) {
            var _this6 = this;

            var trigger = this.validation_rules[property].trigger;
            var inputs = _defineProperty({}, property, value !== undefined ? value : this[property]);
            var validation_rules = _defineProperty({}, property, this.validation_rules[property].rules || []);

            if (!!trigger && Object.hasOwnProperty.call(this, trigger)) {
                inputs[trigger] = this[trigger];
                validation_rules[trigger] = this.validation_rules[trigger].rules || [];
            }

            var validator = new _Validator2.default(inputs, validation_rules, this);

            validator.isPassed();

            Object.keys(inputs).forEach(function (key) {
                _this6.setValidationErrorMessages(key, validator.errors.get(key));
            });
        }

        /**
         * Validates all properties which validation rule has been set for.
         *
         */

    }, {
        key: 'validateAllProperties',
        value: function validateAllProperties() {
            var _this7 = this;

            this.validation_errors = {};
            Object.keys(this.validation_rules).forEach(function (p) {
                _this7.validateProperty(p, _this7[p]);
            });
        }
    }, {
        key: 'onSwitchAccount',
        value: function onSwitchAccount(listener) {
            var _this8 = this;

            this.switchAccountDisposer = (0, _mobx.when)(function () {
                return _this8.root_store.client.switch_broadcast;
            }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                result = _this8.switch_account_listener();

                                if (!(result && result.then && typeof result.then === 'function')) {
                                    _context.next = 6;
                                    break;
                                }

                                result.then(function () {
                                    _this8.root_store.client.switchEndSignal();
                                    _this8.onSwitchAccount(_this8.switch_account_listener);
                                });
                                _context.next = 7;
                                break;

                            case 6:
                                throw new Error('Switching account listeners are required to return a promise.');

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](0);

                                // there is no listener currently active. so we can just ignore the error raised from treating
                                // a null object as a function. Although, in development mode, we throw a console error.
                                if (!(0, _config.isProduction)()) {
                                    console.error(_context.t0); // eslint-disable-line
                                }

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this8, [[0, 9]]);
            })));
            this.switch_account_listener = listener;
        }
    }, {
        key: 'disposeSwitchAccount',
        value: function disposeSwitchAccount() {
            if (typeof this.switchAccountDisposer === 'function') {
                this.switchAccountDisposer();
            }
            this.switch_account_listener = null;
        }
    }, {
        key: 'onUnmount',
        value: function onUnmount() {
            this.disposeSwitchAccount();
        }
    }]);

    return BaseStore;
}(), _class2.STORAGES = Object.freeze({
    LOCAL_STORAGE: Symbol('LOCAL_STORAGE'),
    SESSION_STORAGE: Symbol('SESSION_STORAGE')
}), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'validation_errors', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'validation_rules', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class.prototype, 'retrieveFromStorage', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'retrieveFromStorage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setValidationErrorMessages', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setValidationErrorMessages'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setValidationRules', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setValidationRules'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addRule', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addRule'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'validateProperty', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'validateProperty'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'validateAllProperties', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'validateAllProperties'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onSwitchAccount', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'onSwitchAccount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'disposeSwitchAccount', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'disposeSwitchAccount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onUnmount', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'onUnmount'), _class.prototype)), _class));
exports.default = BaseStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/client_store.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app_2/Stores/client_store.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _Services = __webpack_require__(/*! ../Services */ "./src/javascript/app_2/Services/index.js");

var _client_base = __webpack_require__(/*! ../../_common/base/client_base */ "./src/javascript/_common/base/client_base.js");

var _gtm = __webpack_require__(/*! ../../_common/base/gtm */ "./src/javascript/_common/base/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _socket_base = __webpack_require__(/*! ../../_common/base/socket_base */ "./src/javascript/_common/base/socket_base.js");

var _socket_base2 = _interopRequireDefault(_socket_base);

var _socket_cache = __webpack_require__(/*! ../../_common/base/socket_cache */ "./src/javascript/_common/base/socket_cache.js");

var SocketCache = _interopRequireWildcard(_socket_cache);

var _localize = __webpack_require__(/*! ../../_common/localize */ "./src/javascript/_common/localize.js");

var _storage = __webpack_require__(/*! ../../_common/storage */ "./src/javascript/_common/storage.js");

var _base_store = __webpack_require__(/*! ./base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

var _currency = __webpack_require__(/*! ./Modules/Trading/Helpers/currency */ "./src/javascript/app_2/Stores/Modules/Trading/Helpers/currency.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var storage_key = 'client.accounts';
var ClientStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, _dec10 = _mobx.action.bound, _dec11 = _mobx.action.bound, _dec12 = _mobx.action.bound, _dec13 = _mobx.action.bound, _dec14 = _mobx.action.bound, _dec15 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(ClientStore, _BaseStore);

    function ClientStore(root_store) {
        _classCallCheck(this, ClientStore);

        var _this = _possibleConstructorReturn(this, (ClientStore.__proto__ || Object.getPrototypeOf(ClientStore)).call(this, { root_store: root_store }));

        _initDefineProp(_this, 'loginid', _descriptor, _this);

        _initDefineProp(_this, 'upgrade_info', _descriptor2, _this);

        _initDefineProp(_this, 'accounts', _descriptor3, _this);

        _initDefineProp(_this, 'switched', _descriptor4, _this);

        _initDefineProp(_this, 'switch_broadcast', _descriptor5, _this);

        _initDefineProp(_this, 'currencies_list', _descriptor6, _this);

        _initDefineProp(_this, 'selected_currency', _descriptor7, _this);

        return _this;
    }

    _createClass(ClientStore, [{
        key: 'resetLocalStorageValues',
        value: function resetLocalStorageValues(loginid) {
            this.accounts[loginid].cashier_confirmed = 0;
            this.accounts[loginid].accepted_bch = 0;
            _storage.LocalStore.setObject(storage_key, this.accounts);
            _storage.LocalStore.set('active_loginid', loginid);
            this.loginid = loginid;
        }
    }, {
        key: 'getBasicUpgradeInfo',
        value: function getBasicUpgradeInfo() {
            var _this2 = this;

            var upgradeable_landing_companies = _storage.State.getResponse('authorize.upgradeable_landing_companies');
            var can_open_multi = false;
            var type = void 0,
                can_upgrade_to = void 0;
            if ((upgradeable_landing_companies || []).length) {
                can_open_multi = upgradeable_landing_companies.indexOf(this.accounts[this.loginid].landing_company_shortcode) !== -1;
                var canUpgrade = function canUpgrade() {
                    for (var _len = arguments.length, landing_companies = Array(_len), _key = 0; _key < _len; _key++) {
                        landing_companies[_key] = arguments[_key];
                    }

                    return landing_companies.find(function (landing_company) {
                        return landing_company !== _this2.accounts[_this2.loginid].landing_company_shortcode && upgradeable_landing_companies.indexOf(landing_company) !== -1;
                    });
                };
                can_upgrade_to = canUpgrade('costarica', 'iom', 'malta', 'maltainvest');
                if (can_upgrade_to) {
                    type = can_upgrade_to === 'maltainvest' ? 'financial' : 'real';
                }
            }

            return {
                type: type,
                can_upgrade: !!can_upgrade_to,
                can_upgrade_to: can_upgrade_to,
                can_open_multi: can_open_multi
            };
        }
    }, {
        key: 'responsePayoutCurrencies',
        value: function responsePayoutCurrencies(response) {
            var list = response.payout_currencies || response;
            this.currencies_list = (0, _currency.buildCurrenciesList)(list);
            this.selectCurrency('');
        }
    }, {
        key: 'responseAuthorize',
        value: function responseAuthorize(response) {
            this.accounts[this.loginid].email = response.authorize.email;
            this.accounts[this.loginid].currency = response.authorize.currency;
            this.accounts[this.loginid].is_virtual = +response.authorize.is_virtual;
            this.accounts[this.loginid].session_start = parseInt((0, _moment2.default)().valueOf() / 1000);
            this.accounts[this.loginid].landing_company_shortcode = response.authorize.landing_company_name;
            this.updateAccountList(response.authorize.account_list);
        }
    }, {
        key: 'updateAccountList',
        value: function updateAccountList(account_list) {
            var _this3 = this;

            account_list.forEach(function (account) {
                _this3.accounts[account.loginid].excluded_until = account.excluded_until || '';
                Object.keys(account).forEach(function (param) {
                    var param_to_set = param === 'country' ? 'residence' : param;
                    var value_to_set = typeof account[param] === 'undefined' ? '' : account[param];
                    if (param_to_set !== 'loginid') {
                        _this3.accounts[account.loginid][param_to_set] = value_to_set;
                    }
                });
            });
        }

        /**
         * Switch to the given loginid account.
         *
         * @param {string} loginid
         */

    }, {
        key: 'switchAccount',
        value: function switchAccount(loginid) {
            this.switched = loginid;
        }
    }, {
        key: 'switchEndSignal',
        value: function switchEndSignal() {
            this.switch_broadcast = false;
        }

        /**
         * We initially fetch things from local storage, and then do everything inside the store.
         * This will probably be the only place we are fetching data from Client_base.
         */

    }, {
        key: 'init',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.loginid = _storage.LocalStore.get('active_loginid');
                                this.accounts = _storage.LocalStore.getObject(storage_key);
                                this.upgrade_info = this.getBasicUpgradeInfo();
                                this.switched = '';

                                this.selectCurrency('');

                                _context.t0 = this;
                                _context.next = 8;
                                return _Services.WS.payoutCurrencies();

                            case 8:
                                _context.t1 = _context.sent;

                                _context.t0.responsePayoutCurrencies.call(_context.t0, _context.t1);

                                this.registerReactions();

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init() {
                return _ref.apply(this, arguments);
            }

            return init;
        }()

        /**
         * Check if account is disabled or not
         *
         * @param loginid
         * @returns {string}
         */

    }, {
        key: 'isDisabled',
        value: function isDisabled() {
            var loginid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.loginid;

            return this.getAccount(loginid).is_disabled;
        }

        /**
         * Get accounts token from given login id.
         *
         * @param loginid
         * @returns {string}
         */

    }, {
        key: 'getToken',
        value: function getToken() {
            var loginid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.loginid;

            return this.getAccount(loginid).token;
        }

        /**
         * Get account object from given login id
         *
         * @param loginid
         * @returns {object}
         */

    }, {
        key: 'getAccount',
        value: function getAccount() {
            var loginid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.loginid;

            return this.accounts[loginid];
        }

        /**
         * Get information required by account switcher
         *
         * @param loginid
         * @returns {{loginid: *, is_virtual: (number|number|*), icon: string, title: *}}
         */

    }, {
        key: 'getAccountInfo',
        value: function getAccountInfo() {
            var loginid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.loginid;

            var account = this.getAccount(loginid);
            var currency = account.currency;
            var is_virtual = account.is_virtual;
            var account_type = !is_virtual && currency ? currency : (0, _client_base.getAccountTitle)(loginid);

            return {
                loginid: loginid,
                is_virtual: is_virtual,
                icon: account_type.toLowerCase(), // TODO: display the icon
                title: account_type.toLowerCase() === 'virtual' ? (0, _localize.localize)('DEMO') : account_type
            };
        }
    }, {
        key: 'broadcastAccountChange',
        value: function broadcastAccountChange() {
            this.switch_broadcast = true;
        }
    }, {
        key: 'switchAccountHandler',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this4 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!(!this.switched || !this.switched.length || !this.getAccount(this.switched).token)) {
                                    _context2.next = 10;
                                    break;
                                }

                                if (!(!this.all_loginids.some(function (id) {
                                    return id !== _this4.switched;
                                }) || this.switched === this.loginid)) {
                                    _context2.next = 5;
                                    break;
                                }

                                this.root_store.ui.addToastMessage({
                                    message: (0, _localize.localize)('Could not switch to default account.'),
                                    type: 'error'
                                });
                                // request a logout
                                (0, _Services.requestLogout)();
                                return _context2.abrupt('return');

                            case 5:

                                // Send a toast message to let the user know we can't switch his account.
                                this.root_store.ui.addToastMessage({
                                    message: (0, _localize.localize)('Switching to default account.'),
                                    type: 'info'
                                });

                                // switch to default account.
                                this.switchAccount(this.all_loginids[0]);
                                _context2.next = 9;
                                return this.switchAccountHandler();

                            case 9:
                                return _context2.abrupt('return');

                            case 10:
                                sessionStorage.setItem('active_tab', '1');
                                // set local storage
                                _gtm2.default.setLoginFlag();
                                this.resetLocalStorageValues(this.switched);
                                SocketCache.clear();
                                _context2.next = 16;
                                return _socket_base2.default.send({ 'authorize': this.getToken() }, { forced: true });

                            case 16:
                                _context2.next = 18;
                                return this.init();

                            case 18:
                                this.broadcastAccountChange();

                            case 19:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function switchAccountHandler() {
                return _ref2.apply(this, arguments);
            }

            return switchAccountHandler;
        }()
    }, {
        key: 'registerReactions',
        value: function registerReactions() {
            var _this5 = this;

            // Switch account reactions.
            (0, _mobx.when)(function () {
                return _this5.switched;
            }, this.switchAccountHandler);
        }
    }, {
        key: 'setBalance',
        value: function setBalance(balance) {
            this.accounts[this.loginid].balance = balance;
        }
    }, {
        key: 'selectCurrency',
        value: function selectCurrency(value) {
            this.selected_currency = value;
        }
    }, {
        key: 'setResidence',
        value: function setResidence(residence) {
            this.accounts[this.loginid].residence = residence;
        }
    }, {
        key: 'setEmail',
        value: function setEmail(email) {
            this.accounts[this.loginid].email = email;
        }
    }, {
        key: 'balance',
        get: function get() {
            if (!this.accounts) return '';
            return this.accounts[this.loginid] && this.accounts[this.loginid].balance ? this.accounts[this.loginid].balance.toString() : '';
        }

        /**
         * Temporary property. should be removed once we are fully migrated from the old app.
         *
         * @returns {boolean}
         */

    }, {
        key: 'is_client_allowed_to_visit',
        get: function get() {
            return !!(!this.is_logged_in || this.is_virtual || this.accounts[this.loginid].landing_company_shortcode === 'costarica');
        }
    }, {
        key: 'account_list',
        get: function get() {
            var _this6 = this;

            return this.all_loginids.map(function (id) {
                return id !== _this6.loginid && !_this6.isDisabled(id) && _this6.getToken(id) ? _this6.getAccountInfo(id) : undefined;
            }).filter(function (account) {
                return account;
            });
        }
    }, {
        key: 'active_accounts',
        get: function get() {
            return this.accounts instanceof Object ? Object.values(this.accounts).filter(function (account) {
                return !account.is_disabled;
            }) : [];
        }
    }, {
        key: 'all_loginids',
        get: function get() {
            return this.accounts instanceof Object ? Object.keys(this.accounts) : [];
        }
    }, {
        key: 'account_title',
        get: function get() {
            return (0, _client_base.getAccountTitle)(this.loginid);
        }
    }, {
        key: 'currency',
        get: function get() {
            if (this.selected_currency.length) {
                return this.selected_currency;
            } else if (this.is_logged_in) {
                return this.accounts[this.loginid].currency;
            }
            return this.default_currency;
        }
    }, {
        key: 'default_currency',
        get: function get() {
            if (Object.keys(this.currencies_list).length > 0) {
                var keys = Object.keys(this.currencies_list);
                return Object.values(this.currencies_list['' + keys[0]])[0].text;
            }return 'USD';
        }
    }, {
        key: 'is_valid_login',
        get: function get() {
            if (!this.is_logged_in) return true;
            var valid_login_ids_regex = new RegExp('^(MX|MF|VRTC|MLT|CR|FOG)[0-9]+$', 'i');
            return this.all_loginids.every(function (id) {
                return valid_login_ids_regex.test(id);
            });
        }
    }, {
        key: 'is_logged_in',
        get: function get() {
            return !!(this.accounts instanceof Object && Object.keys(this.accounts).length > 0 && this.loginid && this.accounts[this.loginid].token);
        }
    }, {
        key: 'is_virtual',
        get: function get() {
            return !!this.accounts[this.loginid].is_virtual;
        }
    }, {
        key: 'can_upgrade',
        get: function get() {
            return this.upgrade_info.can_upgrade || this.upgrade_info.can_open_multi;
        }
    }, {
        key: 'virtual_account_loginid',
        get: function get() {
            var _this7 = this;

            return this.all_loginids.filter(function (loginid) {
                return !!_this7.accounts[loginid].is_virtual;
            }).reduce(function (loginid) {
                return loginid;
            });
        }
    }, {
        key: 'is_single_currency',
        get: function get() {
            var _this8 = this;

            return Object.keys(this.currencies_list).map(function (type) {
                return Object.values(_this8.currencies_list[type]).length;
            }).reduce(function (acc, cur) {
                return acc + cur;
            }, 0) === 1;
        }

        /**
         * Store Values relevant to the loginid to local storage.
         *
         * @param loginid
         */

    }]);

    return ClientStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'loginid', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'upgrade_info', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'accounts', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'switched', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'switch_broadcast', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'currencies_list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'selected_currency', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _applyDecoratedDescriptor(_class.prototype, 'balance', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'balance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_client_allowed_to_visit', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_client_allowed_to_visit'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'account_list', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'account_list'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'active_accounts', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'active_accounts'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'all_loginids', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'all_loginids'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'account_title', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'account_title'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'currency', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'currency'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'default_currency', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'default_currency'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_valid_login', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_valid_login'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_logged_in', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_logged_in'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_virtual', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_virtual'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'can_upgrade', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'can_upgrade'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'virtual_account_loginid', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'virtual_account_loginid'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_single_currency', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_single_currency'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resetLocalStorageValues', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'resetLocalStorageValues'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getBasicUpgradeInfo', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'getBasicUpgradeInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'responsePayoutCurrencies', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'responsePayoutCurrencies'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'responseAuthorize', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'responseAuthorize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateAccountList', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'updateAccountList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'switchAccount', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'switchAccount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'switchEndSignal', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'switchEndSignal'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'init', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'broadcastAccountChange', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'broadcastAccountChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'switchAccountHandler', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'switchAccountHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'registerReactions', [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'registerReactions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setBalance', [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'setBalance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'selectCurrency', [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'selectCurrency'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setResidence', [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, 'setResidence'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setEmail', [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'setEmail'), _class.prototype)), _class));
exports.default = ClientStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/common_store.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app_2/Stores/common_store.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _Language = __webpack_require__(/*! ../Utils/Language */ "./src/javascript/app_2/Utils/Language/index.js");

var _base_store = __webpack_require__(/*! ./base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var CommonStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(CommonStore, _BaseStore);

    function CommonStore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommonStore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommonStore.__proto__ || Object.getPrototypeOf(CommonStore)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'server_time', _descriptor, _this), _initDefineProp(_this, 'current_language', _descriptor2, _this), _initDefineProp(_this, 'has_error', _descriptor3, _this), _initDefineProp(_this, 'error', _descriptor4, _this), _initDefineProp(_this, 'network_status', _descriptor5, _this), _initDefineProp(_this, 'is_network_online', _descriptor6, _this), _initDefineProp(_this, 'is_socket_opened', _descriptor7, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommonStore, [{
        key: 'setIsSocketOpened',
        value: function setIsSocketOpened(is_socket_opened) {
            this.is_socket_opened = is_socket_opened;
        }
    }, {
        key: 'setError',
        value: function setError(has_error, error) {
            this.has_error = has_error;
            this.error = {
                type: error ? error.type : 'info',
                message: error ? error.message : ''
            };
        }
    }, {
        key: 'showError',
        value: function showError(message) {
            this.setError(true, {
                message: message,
                type: 'error'
            });
        }
    }]);

    return CommonStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'server_time', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _moment2.default.utc();
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'current_language', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return _Language.currentLanguage;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'has_error', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'error', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {
            type: 'info',
            message: ''
        };
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'network_status', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'is_network_online', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'is_socket_opened', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setIsSocketOpened', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'setIsSocketOpened'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setError', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setError'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showError', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'showError'), _class.prototype)), _class));
exports.default = CommonStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/connect.js":
/*!************************************************!*\
  !*** ./src/javascript/app_2/Stores/connect.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = exports.MobxProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SPECIAL_REACT_KEYS = { children: true, key: true, ref: true };

var MobxProvider = exports.MobxProvider = (_temp = _class = function (_Provider) {
    _inherits(MobxProvider, _Provider);

    function MobxProvider() {
        _classCallCheck(this, MobxProvider);

        return _possibleConstructorReturn(this, (MobxProvider.__proto__ || Object.getPrototypeOf(MobxProvider)).apply(this, arguments));
    }

    _createClass(MobxProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var stores = {};

            // inherit stores
            var baseStores = this.context.mobxStores;
            if (baseStores) {
                for (var key in baseStores) {
                    // eslint-disable-line
                    stores[key] = baseStores[key];
                }
            }

            // add own stores
            for (var _key in this.props.store) {
                // eslint-disable-line
                if (!SPECIAL_REACT_KEYS[_key]) {
                    stores[_key] = this.props.store[_key];
                }
            }

            return _extends({
                mobxStores: stores
            }, stores);
        }
    }]);

    return MobxProvider;
}(_mobxReact.Provider), _class.childContextTypes = {
    mobxStores: _propTypes2.default.object,
    client: _propTypes2.default.object,
    common: _propTypes2.default.object,
    modules: _propTypes2.default.object,
    ui: _propTypes2.default.object
}, _temp);


var connect_global_store = function connect_global_store(mapper) {
    return function (Component) {
        return (0, _mobxReact.inject)(mapper)((0, _mobxReact.observer)(Component));
    };
};

var connect = exports.connect = function connect(StoreClass, mapper) {
    return function (Component) {
        if (!mapper) {
            return connect_global_store(StoreClass)(Component);
        }

        var observed = (0, _mobxReact.observer)(Component);

        var StoredComponent = function (_Component) {
            _inherits(StoredComponent, _Component);

            function StoredComponent() {
                var _ref;

                var _temp2, _this2, _ret;

                _classCallCheck(this, StoredComponent);

                for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return _ret = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref = StoredComponent.__proto__ || Object.getPrototypeOf(StoredComponent)).call.apply(_ref, [this].concat(args))), _this2), _this2.store = new StoreClass(), _this2.propTypes = {
                    children: _propTypes2.default.object
                }, _temp2), _possibleConstructorReturn(_this2, _ret);
            }

            _createClass(StoredComponent, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(observed, _extends({}, this.props, {
                        store: this.store
                    }), this.props.children);
                }
            }]);

            return StoredComponent;
        }(Component);

        var wrappedDisplayName = Component.displayName || Component.name || Component.constructor && Component.constructor.name || 'Unknown';
        StoredComponent.displayName = 'store-' + wrappedDisplayName;

        return (0, _mobxReact.inject)(mapper)(StoredComponent);
    };
};

/***/ }),

/***/ "./src/javascript/app_2/Stores/index.js":
/*!**********************************************!*\
  !*** ./src/javascript/app_2/Stores/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _client_store = __webpack_require__(/*! ./client_store */ "./src/javascript/app_2/Stores/client_store.js");

var _client_store2 = _interopRequireDefault(_client_store);

var _common_store = __webpack_require__(/*! ./common_store */ "./src/javascript/app_2/Stores/common_store.js");

var _common_store2 = _interopRequireDefault(_common_store);

var _Modules = __webpack_require__(/*! ./Modules */ "./src/javascript/app_2/Stores/Modules/index.js");

var _Modules2 = _interopRequireDefault(_Modules);

var _ui_store = __webpack_require__(/*! ./ui_store */ "./src/javascript/app_2/Stores/ui_store.js");

var _ui_store2 = _interopRequireDefault(_ui_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RootStore = function RootStore() {
    _classCallCheck(this, RootStore);

    this.client = new _client_store2.default(this);
    this.common = new _common_store2.default();
    this.modules = new _Modules2.default(this);
    this.ui = new _ui_store2.default();
};

exports.default = RootStore;

/***/ }),

/***/ "./src/javascript/app_2/Stores/ui_store.js":
/*!*************************************************!*\
  !*** ./src/javascript/app_2/Stores/ui_store.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _ui = __webpack_require__(/*! ../Constants/ui */ "./src/javascript/app_2/Constants/ui.js");

var _base_store = __webpack_require__(/*! ./base_store */ "./src/javascript/app_2/Stores/base_store.js");

var _base_store2 = _interopRequireDefault(_base_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var UIStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, _dec8 = _mobx.action.bound, _dec9 = _mobx.action.bound, _dec10 = _mobx.action.bound, _dec11 = _mobx.action.bound, _dec12 = _mobx.action.bound, _dec13 = _mobx.action.bound, _dec14 = _mobx.action.bound, _dec15 = _mobx.action.bound, _dec16 = _mobx.action.bound, _dec17 = _mobx.action.bound, _dec18 = _mobx.action.bound, _dec19 = _mobx.action.bound, _dec20 = _mobx.action.bound, _dec21 = _mobx.action.bound, (_class = function (_BaseStore) {
    _inherits(UIStore, _BaseStore);

    // PWA event and config
    function UIStore() {
        _classCallCheck(this, UIStore);

        var local_storage_properties = ['is_chart_asset_info_visible', 'is_chart_countdown_visible', 'is_chart_layout_default', 'is_dark_mode_on', 'is_portfolio_drawer_on', 'is_purchase_confirm_on', 'is_purchase_lock_on'];

        var _this = _possibleConstructorReturn(this, (UIStore.__proto__ || Object.getPrototypeOf(UIStore)).call(this, { local_storage_properties: local_storage_properties }));

        _initDefineProp(_this, 'is_main_drawer_on', _descriptor, _this);

        _initDefineProp(_this, 'is_notifications_drawer_on', _descriptor2, _this);

        _initDefineProp(_this, 'is_portfolio_drawer_on', _descriptor3, _this);

        _initDefineProp(_this, 'is_dark_mode_on', _descriptor4, _this);

        _initDefineProp(_this, 'is_language_dialog_on', _descriptor5, _this);

        _initDefineProp(_this, 'is_settings_dialog_on', _descriptor6, _this);

        _initDefineProp(_this, 'is_accounts_switcher_on', _descriptor7, _this);

        _initDefineProp(_this, 'is_purchase_confirm_on', _descriptor8, _this);

        _initDefineProp(_this, 'is_purchase_lock_on', _descriptor9, _this);

        _initDefineProp(_this, 'is_chart_asset_info_visible', _descriptor10, _this);

        _initDefineProp(_this, 'is_chart_countdown_visible', _descriptor11, _this);

        _initDefineProp(_this, 'is_chart_layout_default', _descriptor12, _this);

        _initDefineProp(_this, 'is_install_button_visible', _descriptor13, _this);

        _initDefineProp(_this, 'pwa_prompt_event', _descriptor14, _this);

        _initDefineProp(_this, 'screen_width', _descriptor15, _this);

        _initDefineProp(_this, 'toast_messages', _descriptor16, _this);

        window.addEventListener('resize', _this.handleResize);
        (0, _mobx.autorun)(function () {
            return document.body.classList[_this.is_dark_mode_on ? 'add' : 'remove']('dark');
        });
        return _this;
    }

    // SmartCharts Controls


    // Purchase Controls


    _createClass(UIStore, [{
        key: 'handleResize',
        value: function handleResize() {
            this.screen_width = window.innerWidth;
            if (this.is_mobile) {
                this.is_portfolio_drawer_on = false;
            }
        }
    }, {
        key: 'toggleAccountsDialog',
        value: function toggleAccountsDialog() {
            this.is_accounts_switcher_on = !this.is_accounts_switcher_on;
        }
    }, {
        key: 'toggleChartLayout',
        value: function toggleChartLayout() {
            this.is_chart_layout_default = !this.is_chart_layout_default;
        }
    }, {
        key: 'toggleChartAssetInfo',
        value: function toggleChartAssetInfo() {
            this.is_chart_asset_info_visible = !this.is_chart_asset_info_visible;
        }
    }, {
        key: 'toggleChartCountdown',
        value: function toggleChartCountdown() {
            this.is_chart_countdown_visible = !this.is_chart_countdown_visible;
        }
    }, {
        key: 'togglePurchaseLock',
        value: function togglePurchaseLock() {
            this.is_purchase_lock_on = !this.is_purchase_lock_on;
        }
    }, {
        key: 'togglePurchaseConfirmation',
        value: function togglePurchaseConfirmation() {
            this.is_purchase_confirm_on = !this.is_purchase_confirm_on;
        }
    }, {
        key: 'toggleDarkMode',
        value: function toggleDarkMode() {
            this.is_dark_mode_on = !this.is_dark_mode_on;
        }
    }, {
        key: 'toggleSettingsDialog',
        value: function toggleSettingsDialog() {
            this.is_settings_dialog_on = !this.is_settings_dialog_on;
            if (!this.is_settings_dialog_on) this.is_language_dialog_on = false;
        }
    }, {
        key: 'showLanguageDialog',
        value: function showLanguageDialog() {
            this.is_language_dialog_on = true;
        }
    }, {
        key: 'hideLanguageDialog',
        value: function hideLanguageDialog() {
            this.is_language_dialog_on = false;
        }
    }, {
        key: 'togglePortfolioDrawer',
        value: function togglePortfolioDrawer() {
            // show and hide Portfolio Drawer
            this.is_portfolio_drawer_on = !this.is_portfolio_drawer_on;
        }
    }, {
        key: 'showMainDrawer',
        value: function showMainDrawer() {
            // show main Drawer
            this.is_main_drawer_on = true;
        }
    }, {
        key: 'showNotificationsDrawer',
        value: function showNotificationsDrawer() {
            // show nofitications Drawer
            this.is_notifications_drawer_on = true;
        }
    }, {
        key: 'hideDrawers',
        value: function hideDrawers() {
            // hide both menu drawers
            this.is_main_drawer_on = false;
            this.is_notifications_drawer_on = false;
        }
    }, {
        key: 'showInstallButton',
        value: function showInstallButton() {
            this.is_install_button_visible = true;
        }
    }, {
        key: 'hideInstallButton',
        value: function hideInstallButton() {
            this.is_install_button_visible = false;
            this.pwa_prompt_event = null;
        }
    }, {
        key: 'setPWAPromptEvent',
        value: function setPWAPromptEvent(e) {
            this.pwa_prompt_event = e;
        }
    }, {
        key: 'addToastMessage',
        value: function addToastMessage(toast_message) {
            this.toast_messages.push(toast_message);
        }
    }, {
        key: 'removeToastMessage',
        value: function removeToastMessage(toast_message) {
            var index = this.toast_messages.indexOf(toast_message);
            if (index > -1) {
                this.toast_messages.splice(index, 1);
            }
        }
    }, {
        key: 'removeAllToastMessages',
        value: function removeAllToastMessages() {
            this.toast_messages = [];
        }
    }, {
        key: 'is_mobile',
        get: function get() {
            return this.screen_width <= _ui.MAX_MOBILE_WIDTH;
        }
    }, {
        key: 'is_tablet',
        get: function get() {
            return this.screen_width <= _ui.MAX_TABLET_WIDTH;
        }
    }]);

    return UIStore;
}(_base_store2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'is_main_drawer_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'is_notifications_drawer_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'is_portfolio_drawer_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'is_dark_mode_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'is_language_dialog_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'is_settings_dialog_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'is_accounts_switcher_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'is_purchase_confirm_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'is_purchase_lock_on', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'is_chart_asset_info_visible', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'is_chart_countdown_visible', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'is_chart_layout_default', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'is_install_button_visible', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'pwa_prompt_event', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'screen_width', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return window.innerWidth;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'toast_messages', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, 'handleResize', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'handleResize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_mobile', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_mobile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'is_tablet', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'is_tablet'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleAccountsDialog', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleAccountsDialog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleChartLayout', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleChartLayout'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleChartAssetInfo', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleChartAssetInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleChartCountdown', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleChartCountdown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'togglePurchaseLock', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'togglePurchaseLock'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'togglePurchaseConfirmation', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'togglePurchaseConfirmation'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleDarkMode', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleDarkMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleSettingsDialog', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleSettingsDialog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showLanguageDialog', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'showLanguageDialog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'hideLanguageDialog', [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'hideLanguageDialog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'togglePortfolioDrawer', [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'togglePortfolioDrawer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showMainDrawer', [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'showMainDrawer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showNotificationsDrawer', [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, 'showNotificationsDrawer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'hideDrawers', [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'hideDrawers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showInstallButton', [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'showInstallButton'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'hideInstallButton', [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'hideInstallButton'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setPWAPromptEvent', [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, 'setPWAPromptEvent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addToastMessage', [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, 'addToastMessage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeToastMessage', [_dec20], Object.getOwnPropertyDescriptor(_class.prototype, 'removeToastMessage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeAllToastMessages', [_dec21], Object.getOwnPropertyDescriptor(_class.prototype, 'removeAllToastMessages'), _class.prototype)), _class));
exports.default = UIStore;

/***/ }),

/***/ "./src/javascript/app_2/Utils/Date/date_time.js":
/*!******************************************************!*\
  !*** ./src/javascript/app_2/Utils/Date/date_time.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDuration = exports.getDiffDuration = exports.daysFromTodayTo = exports.formatDate = exports.toGMTFormat = exports.convertToUnix = exports.toMoment = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _localize = __webpack_require__(/*! ../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert epoch to moment object
 * @param  {Number} epoch
 * @return {moment} the moment object of provided epoch
 */
var toMoment = exports.toMoment = function toMoment(epoch) {
  return _moment2.default.unix(epoch).utc();
};

/**
 * Set specified time on moment object
 * @param  {moment} moment_obj  the moment to set the time on
 * @param  {String} time        24 hours format, may or may not include seconds
 * @return {moment} a new moment object of result
 */
var setTime = function setTime(moment_obj, time) {
  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 3),
      hour = _time$split2[0],
      minute = _time$split2[1],
      second = _time$split2[2];

  moment_obj.hour(hour).minute(minute || 0).second(second || 0);
  return moment_obj;
};

/**
 * return the unix value of provided epoch and time
 * @param  {Number} epoch  the date to update with provided time
 * @param  {String} time   the time to set on the date
 * @return {Number} unix value of the result
 */
var convertToUnix = exports.convertToUnix = function convertToUnix(epoch, time) {
  return setTime(toMoment(epoch), time).unix();
};

var toGMTFormat = exports.toGMTFormat = function toGMTFormat(time) {
  return (0, _moment2.default)(time || undefined).utc().format('YYYY-MM-DD HH:mm:ss [GMT]');
};

var formatDate = exports.formatDate = function formatDate(date) {
  var date_format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  return (0, _moment2.default)(date || undefined, date_format).format(date_format);
};

/**
 * return the number of days from today to date specified
 * @param  {String} date   the date to calculate number of days from today
 * @return {Number} an integer of the number of days
 */
var daysFromTodayTo = exports.daysFromTodayTo = function daysFromTodayTo(date) {
  var diff = (0, _moment2.default)(date).utc().diff((0, _moment2.default)().utc(), 'days');
  return !date || diff < 0 ? '' : diff + 1;
};

/**
 * return moment duration between two dates
 * @param  {Number} epoch start time
 * @param  {Number} epoch end time
 * @return {moment.duration} moment duration between start time and end time
 */
var getDiffDuration = exports.getDiffDuration = function getDiffDuration(start_time, end_time) {
  return _moment2.default.duration(_moment2.default.unix(end_time).diff(_moment2.default.unix(start_time)));
};

/**
 * return formatted duration `2 days 01:23:59`
 * @param  {moment.duration} moment duration object
 * @return {String} formatted display string
 */
var formatDuration = exports.formatDuration = function formatDuration(duration) {
  var d = Math.floor(duration.asDays()); // duration.days() does not include months/years
  var h = duration.hours();
  var m = duration.minutes();
  var s = duration.seconds();
  var formatted_str = (0, _moment2.default)(0).hour(h).minute(m).seconds(s).format('HH:mm:ss');
  if (d > 0) {
    formatted_str = d + ' ' + (d > 1 ? (0, _localize.localize)('days') : (0, _localize.localize)('day')) + ' ' + formatted_str;
  }
  return formatted_str;
};

/***/ }),

/***/ "./src/javascript/app_2/Utils/Date/index.js":
/*!**************************************************!*\
  !*** ./src/javascript/app_2/Utils/Date/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date_time = __webpack_require__(/*! ./date_time */ "./src/javascript/app_2/Utils/Date/date_time.js");

Object.keys(_date_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _date_time[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Utils/Events/storage.js":
/*!******************************************************!*\
  !*** ./src/javascript/app_2/Utils/Events/storage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var setStorageEvents = exports.setStorageEvents = function setStorageEvents() {
    window.addEventListener('storage', function (evt) {
        switch (evt.key) {
            case 'active_loginid':
                if (document.hidden && (evt.newValue === '' || !window.is_logging_in)) {
                    window.location.reload();
                }
                break;
            // no default
        }
    });
};

/***/ }),

/***/ "./src/javascript/app_2/Utils/Language/fill_template.js":
/*!**************************************************************!*\
  !*** ./src/javascript/app_2/Utils/Language/fill_template.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fillTemplate = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var convertObjectToReactElement = function convertObjectToReactElement(props) {
    var tagName = props.tagName,
        other_props = _objectWithoutProperties(props, ['tagName']);

    if (!tagName) throw new Error('Missing tagName');

    return _react2.default.createElement(tagName.toLowerCase(), other_props);
};

var fillTemplate = exports.fillTemplate = function fillTemplate(template, replacers) {
    var res = [];
    var str = template;
    var open_tag_id = null;

    while (str.length) {
        var match = str.match(/\[_(\d+)\]/);

        if (!match) {
            res.push(str);
            break;
        }

        var tag = match[0],
            tag_id = match[1],
            index = match.index;


        var before = str.slice(0, index);
        str = str.slice(index + tag.length);

        if (open_tag_id) {
            var pair_code = open_tag_id + '_' + tag_id;
            var element = replacers[pair_code];
            var wrapper = _react2.default.isValidElement(element) ? element : convertObjectToReactElement(element);

            if (!_react2.default.isValidElement(wrapper)) throw new Error('Localize: pair tag ' + pair_code + ' must be replaced with a react element.');
            if (!wrapper) throw new Error('Localize: no ' + open_tag_id + ' or ' + pair_code + ' replacer for "' + template + '" template.');

            res.push(_react2.default.cloneElement(wrapper, { key: index, children: before }));
            open_tag_id = null;
        } else {
            if (before.length) res.push(before);

            if (tag_id in replacers) {
                res.push(replacers[tag_id]);
            } else {
                open_tag_id = tag_id;
            }
        }
    }
    if (open_tag_id) throw new Error('Localize: no ' + open_tag_id + ' replacer for "' + template + '" template.');

    // concat adjacent strings in result array
    return res.reduce(function (arr, current) {
        var last = arr[arr.length - 1];
        if (typeof last === 'string' && typeof current === 'string') {
            arr[arr.length - 1] = last + current;
        } else {
            arr.push(current);
        }
        return arr;
    }, []);
};

/***/ }),

/***/ "./src/javascript/app_2/Utils/Language/index.js":
/*!******************************************************!*\
  !*** ./src/javascript/app_2/Utils/Language/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = __webpack_require__(/*! ./language */ "./src/javascript/app_2/Utils/Language/language.js");

Object.keys(_language).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _language[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Utils/Language/language.js":
/*!*********************************************************!*\
  !*** ./src/javascript/app_2/Utils/Language/language.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getURL = exports.getAllowedLanguages = exports.currentLanguage = undefined;

var _language = __webpack_require__(/*! ../../../_common/language */ "./src/javascript/_common/language.js");

var currentLanguage = exports.currentLanguage = (0, _language.get)();

var getAllowedLanguages = exports.getAllowedLanguages = function getAllowedLanguages() {
    var exclude_languages = ['ACH'];
    var language_list = Object.keys((0, _language.getAll)()).filter(function (key) {
        return !exclude_languages.includes(key);
    }).reduce(function (obj, key) {
        obj[key] = (0, _language.getAll)()[key];
        return obj;
    }, {});

    return language_list;
};

var getURL = exports.getURL = function getURL(lang) {
    return (0, _language.urlFor)(lang);
};

/***/ }),

/***/ "./src/javascript/app_2/Utils/React/component.js":
/*!*******************************************************!*\
  !*** ./src/javascript/app_2/Utils/React/component.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Returns an object that maps component properties to corresponding values from the store
 * @param  {Object} Component - the react presentational component
 * @param  {Object} stores    - the store objects to look for the property to get its value
 * @return {Object}
 */
var getComponentProperties = exports.getComponentProperties = function getComponentProperties(Component) {
    for (var _len = arguments.length, stores = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        stores[_key - 1] = arguments[_key];
    }

    return Object.getOwnPropertyNames(Component.propTypes || {}).reduce(function (acc, prop) {
        return _extends({}, acc, getPropFromStores.apply(undefined, [prop].concat(stores)));
    }, {});
};

/**
 * Find the property among provided stores and return an object {prop: value}
 * @param  {Object} stores - the store objects to look for the property to get its value
 * @param  {String} prop   - the property to find among stores
 * @return {Object}
 */
var getPropFromStores = function getPropFromStores(prop) {
    for (var _len2 = arguments.length, stores = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        stores[_key2 - 1] = arguments[_key2];
    }

    var store = stores.find(function (item) {
        return prop in item;
    }) || {};
    return prop in store ? _defineProperty({}, prop, store[prop]) : {};
};

/***/ }),

/***/ "./src/javascript/app_2/Utils/URL/base_name.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app_2/Utils/URL/base_name.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _language = __webpack_require__(/*! ../../../_common/language */ "./src/javascript/_common/language.js");

/*
 * Retrieves basename from current url
 *
 * @return {string} returns the basename of current url
 */
var getBaseName = function getBaseName() {
    var regex_string = '(.*app/(' + Object.keys((0, _language.getAll)()).join('|') + ')(/index\\.html)?).*';
    var basename = new RegExp(regex_string, 'ig').exec(window.location.pathname);

    if (basename && basename.length) {
        return basename[1];
    }

    return '/app/en/';
};

exports.default = getBaseName;

/***/ }),

/***/ "./src/javascript/app_2/Utils/URL/url_helper.js":
/*!******************************************************!*\
  !*** ./src/javascript/app_2/Utils/URL/url_helper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utility = __webpack_require__(/*! ../../../_common/utility */ "./src/javascript/_common/utility.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URLHelper = function () {
    function URLHelper() {
        _classCallCheck(this, URLHelper);
    }

    _createClass(URLHelper, null, [{
        key: 'getQueryParams',

        /**
         * Get query string of the url
         *
         * @param {String|null} url
         *
         * @return {Object} returns a key-value object that contains all query string of the url.
         */
        value: function getQueryParams(url) {
            var query_string = url ? new URL(url).search : window.location.search;
            var query_params = new URLSearchParams(query_string.slice(1));

            return query_params;
        }

        /**
         * append params to url query string
         *
         * @param {Object} params - a key value object that contains all query strings should be added to the url
         * @param {String} url - the url that should query strings add to
         *
         * @return {Object} returns modified url object.
         */

    }, {
        key: 'setQueryParam',
        value: function setQueryParam(params) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var url_object = url ? new URL(url) : window.location;
            var param_object = new URLSearchParams(url_object.search.slice(1));
            Object.keys(params).forEach(function (name) {
                param_object.delete(name);

                var value = params[name];

                if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value !== '') {
                    param_object.append(name, params[name]);
                }
            });

            if (param_object.length) {
                param_object.sort();
            }

            if (!url) {
                window.history.replaceState(null, null, '?' + param_object.toString());
            } else {
                url_object.search = param_object.toString();
            }

            return url_object;
        }

        /**
         * Update query string by values of passing object
         *
         * @param {Object} store - an object that contains values which should be added to the query string
         * @param {string[]} allowed_query_string_variables - a list of variables those are allowed to add to query string.
         *
         * @return {Object} returns an iterator object of updated query string
         */

    }, {
        key: 'updateQueryString',
        value: function updateQueryString(store, allowed_query_string_variables) {
            var set_query_string = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var query_params = URLHelper.getQueryParams();

            if (!(0, _utility.isEmptyObject)(store)) {

                // create query string by default values in trade_store if the param doesn't exist in query string.
                allowed_query_string_variables.filter(function (p) {
                    return !query_params.get(p);
                }).forEach(function (key) {
                    if (store[key]) {
                        if (set_query_string) {
                            URLHelper.setQueryParam(_defineProperty({}, key, store[key]));
                        }

                        query_params.set(key, store[key]);
                    }
                });
            }

            return query_params;
        }

        /**
         * Prunes the query string values
         *
         * @param {string[]} keys - A list of variable's name which should be in url's query string.
         */

    }, {
        key: 'pruneQueryString',
        value: function pruneQueryString() {
            var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var query_params = URLHelper.getQueryParams();

            [].concat(_toConsumableArray(query_params)).forEach(function (value) {
                return keys.indexOf(value[0]) <= -1 && query_params.delete(value[0]);
            });

            var query_string = [].concat(_toConsumableArray(query_params)).length ? '?' + query_params.toString() : '';

            window.history.replaceState(null, null, query_string);
        }
    }]);

    return URLHelper;
}();

exports.default = URLHelper;

/***/ }),

/***/ "./src/javascript/app_2/Utils/Validator/declarative_validation_rules.js":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Utils/Validator/declarative_validation_rules.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPasswordLengthConfig = exports.getPreBuildDVRs = undefined;

var _client_base = __webpack_require__(/*! ../../../_common/base/client_base */ "./src/javascript/_common/base/client_base.js");

var _client_base2 = _interopRequireDefault(_client_base);

var _currency_base = __webpack_require__(/*! ../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _check_password = __webpack_require__(/*! ../../../_common/check_password */ "./src/javascript/_common/check_password.js");

var _check_password2 = _interopRequireDefault(_check_password);

var _localize = __webpack_require__(/*! ../../../_common/localize */ "./src/javascript/_common/localize.js");

var _string_util = __webpack_require__(/*! ../../../_common/string_util */ "./src/javascript/_common/string_util.js");

var _utility = __webpack_require__(/*! ../../../_common/utility */ "./src/javascript/_common/utility.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------
// ----- Validation Methods -----
// ------------------------------
var validRequired = function validRequired(value /* , options, field */) {
    if (value === undefined || value === null) {
        return false;
    }

    var str = String(value).replace(/\s/g, '');
    return str.length > 0;
};
var validEmail = function validEmail(value) {
    return (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(value)
    );
};
var validPassword = function validPassword(value, options, field) {
    if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+/.test(value)) {
        _check_password2.default.checkPassword(field.selector);
        return true;
    }
    // else
    return false;
};
var validLetterSymbol = function validLetterSymbol(value) {
    return !/[`~!@#$%^&*)(_=+[}{\]\\/";:?><,|\d]+/.test(value);
};
var validGeneral = function validGeneral(value) {
    return !/[`~!@#$%^&*)(_=+[}{\]\\/";:?><|]+/.test(value);
};
var validAddress = function validAddress(value) {
    return !/[`~!$%^&*_=+[}{\]\\"?><|]+/.test(value);
};
var validPostCode = function validPostCode(value) {
    return (/^[a-zA-Z\d-\s]*$/.test(value)
    );
};
var validPhone = function validPhone(value) {
    return (/^\+?[0-9\s]*$/.test(value)
    );
};
var validRegular = function validRegular(value, options) {
    return options.regex.test(value);
};
var validEmailToken = function validEmailToken(value) {
    return value.trim().length === 8;
};
var validTaxID = function validTaxID(value) {
    return (/^[a-zA-Z0-9]*[\w-]*$/.test(value)
    );
};
var validBarrier = function validBarrier(value) {
    return (/^[+-]?\d+\.?\d*$/.test(value)
    );
};

var validCompare = function validCompare(value, options) {
    return value === $(options.to).val();
};
var validNotEqual = function validNotEqual(value, options) {
    return value !== $(options.to).val();
};
var validMin = function validMin(value, options) {
    return options.min ? value.length >= options.min : true;
};
var validLength = function validLength(value, options) {
    return (options.min ? value.length >= options.min : true) && (options.max ? value.length <= options.max : true);
};

var validNumber = function validNumber(value, opts) {
    var options = (0, _utility.cloneObject)(opts);
    var message = null;
    if (options.allow_empty && value.length === 0) {
        return true;
    }

    var is_ok = true;
    if ('min' in options && typeof options.min === 'function') {
        options.min = options.min();
    }
    if ('max' in options && typeof options.max === 'function') {
        options.max = options.max();
    }

    if (!(options.type === 'float' ? /^\d*(\.\d+)?$/ : /^\d+$/).test(value) || isNaN(value)) {
        is_ok = false;
        message = (0, _localize.localize)('Should be a valid number.');
    } else if (options.type === 'float' && options.decimals && !new RegExp('^\\d+(\\.\\d{0,' + options.decimals + '})?$').test(value)) {
        is_ok = false;
        message = (0, _localize.localize)('Up to [_1] decimal places are allowed.', [options.decimals]);
    } else if ('min' in options && 'max' in options && +options.min === +options.max && +value !== +options.min) {
        is_ok = false;
        message = (0, _localize.localize)('Should be [_1]', [(0, _currency_base.addComma)(options.min, options.format_money ? (0, _currency_base.getDecimalPlaces)(_client_base2.default.get('currency')) : undefined)]);
    } else if ('min' in options && 'max' in options && (+value < +options.min || isMoreThanMax(value, options))) {
        is_ok = false;
        message = (0, _localize.localize)('Should be between [_1] and [_2]', [(0, _currency_base.addComma)(options.min, options.format_money ? (0, _currency_base.getDecimalPlaces)(_client_base2.default.get('currency')) : undefined), (0, _currency_base.addComma)(options.max, options.format_money ? (0, _currency_base.getDecimalPlaces)(_client_base2.default.get('currency')) : undefined)]);
    } else if ('min' in options && +value < +options.min) {
        is_ok = false;
        message = (0, _localize.localize)('Should be more than [_1]', [(0, _currency_base.addComma)(options.min, options.format_money ? (0, _currency_base.getDecimalPlaces)(_client_base2.default.get('currency')) : undefined)]);
    } else if ('max' in options && isMoreThanMax(value, options)) {
        is_ok = false;
        message = (0, _localize.localize)('Should be less than [_1]', [(0, _currency_base.addComma)(options.max, options.format_money ? (0, _currency_base.getDecimalPlaces)(_client_base2.default.get('currency')) : undefined)]);
    }

    getPreBuildDVRs().number.message = message;
    return is_ok;
};

var isMoreThanMax = function isMoreThanMax(value, options) {
    return options.type === 'float' ? +value > +options.max : (0, _string_util.compareBigUnsignedInt)(value, options.max) === 1;
};

var initPreBuildDVRs = function initPreBuildDVRs() {
    return {
        address: { func: validAddress, message: (0, _localize.localize)('Only letters, numbers, space, and these special characters are allowed: [_1]', ['- . \' # ; : ( ) , @ /']) },
        barrier: { func: validBarrier, message: (0, _localize.localize)('Only numbers and these special characters are allowed: [_1]', ['+ - .']) },
        compare: { func: validCompare, message: (0, _localize.localize)('The two passwords that you entered do not match.') },
        email: { func: validEmail, message: (0, _localize.localize)('Invalid email address.') },
        general: { func: validGeneral, message: (0, _localize.localize)('Only letters, numbers, space, hyphen, period, and apostrophe are allowed.') },
        length: { func: validLength, message: (0, _localize.localize)('You should enter [_1] characters.', ['[_1]']) },
        letter_symbol: { func: validLetterSymbol, message: (0, _localize.localize)('Only letters, space, hyphen, period, and apostrophe are allowed.') },
        min: { func: validMin, message: (0, _localize.localize)('Minimum of [_1] characters required.', ['[_1]']) },
        not_equal: { func: validNotEqual, message: (0, _localize.localize)('[_1] and [_2] cannot be the same.', ['[_1]', '[_2]']) },
        number: { func: validNumber, message: '' },
        password: { func: validPassword, message: (0, _localize.localize)('Password should have lower and uppercase letters with numbers.') },
        phone: { func: validPhone, message: (0, _localize.localize)('Only numbers and spaces are allowed.') },
        postcode: { func: validPostCode, message: (0, _localize.localize)('Only letters, numbers, space, and hyphen are allowed.') },
        regular: { func: validRegular, message: '' },
        req: { func: validRequired, message: '' },
        signup_token: { func: validEmailToken, message: (0, _localize.localize)('The length of token should be 8.') },
        tax_id: { func: validTaxID, message: (0, _localize.localize)('Should start with letter or number, and may contain hyphen and underscore.') }
    };
};

var pre_build_dvrs = void 0;
var getPreBuildDVRs = exports.getPreBuildDVRs = function getPreBuildDVRs() {
    if (!pre_build_dvrs) {
        pre_build_dvrs = initPreBuildDVRs();
    }
    return pre_build_dvrs;
};

var getPasswordLengthConfig = exports.getPasswordLengthConfig = function getPasswordLengthConfig(type) {
    return { min: /^mt$/.test(type) ? 8 : 6, max: 25 };
};

/***/ }),

/***/ "./src/javascript/app_2/Utils/Validator/errors.js":
/*!********************************************************!*\
  !*** ./src/javascript/app_2/Utils/Validator/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: "add",
        value: function add(attribute, message) {
            if (!this.has(attribute)) {
                this.errors[attribute] = [];
            }

            if (this.errors[attribute].indexOf(message) === -1) {
                this.errors[attribute].push(message);
            }
        }
    }, {
        key: "all",
        value: function all() {
            return this.errors;
        }
    }, {
        key: "first",
        value: function first(attribute) {
            if (this.has(attribute)) {
                return this.errors[attribute][0];
            }
            return null;
        }
    }, {
        key: "get",
        value: function get(attribute) {
            if (this.has(attribute)) {
                return this.errors[attribute];
            }

            return [];
        }
    }, {
        key: "has",
        value: function has(attribute) {
            return Object.prototype.hasOwnProperty.call(this.errors, attribute);
        }
    }]);

    return Errors;
}();

exports.default = Errors;

/***/ }),

/***/ "./src/javascript/app_2/Utils/Validator/index.js":
/*!*******************************************************!*\
  !*** ./src/javascript/app_2/Utils/Validator/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _validator = __webpack_require__(/*! ./validator */ "./src/javascript/app_2/Utils/Validator/validator.js");

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _validator2.default;

/***/ }),

/***/ "./src/javascript/app_2/Utils/Validator/validator.js":
/*!***********************************************************!*\
  !*** ./src/javascript/app_2/Utils/Validator/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utility = __webpack_require__(/*! ../../../_common/utility */ "./src/javascript/_common/utility.js");

var _declarative_validation_rules = __webpack_require__(/*! ./declarative_validation_rules */ "./src/javascript/app_2/Utils/Validator/declarative_validation_rules.js");

var _errors = __webpack_require__(/*! ./errors */ "./src/javascript/app_2/Utils/Validator/errors.js");

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
    function Validator(input, rules) {
        var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Validator);

        this.input = input;
        this.rules = rules;
        this.store = store;
        this.errors = new _errors2.default();

        this.error_count = 0;
    }

    /**
     * Add failure and error message for given rule
     *
     * @param {string} attribute
     * @param {object} rule
     */


    _createClass(Validator, [{
        key: 'addFailure',
        value: function addFailure(attribute, rule) {
            var message = rule.options.message || (0, _declarative_validation_rules.getPreBuildDVRs)()[rule.name].message;
            if (rule.name === 'length') {
                message = (0, _utility.template)(message, [rule.options.min === rule.options.max ? rule.options.min : rule.options.min + '-' + rule.options.max]);
            } else if (rule.name === 'min') {
                message = (0, _utility.template)(message, [rule.options.min]);
            } else if (rule.name === 'not_equal') {
                message = (0, _utility.template)(message, [rule.options.name1, rule.options.name2]);
            }
            this.errors.add(attribute, message);
            this.error_count++;
        }

        /**
         * Runs validator
         *
         * @return {boolean} Whether it passes; true = passes, false = fails
         */

    }, {
        key: 'check',
        value: function check() {
            var _this = this;

            Object.keys(this.input).forEach(function (attribute) {
                if (!Object.prototype.hasOwnProperty.call(_this.rules, attribute)) {
                    return;
                }

                _this.rules[attribute].forEach(function (rule) {
                    var ruleObject = Validator.getRuleObject(rule);

                    if (!ruleObject.validator && typeof ruleObject.validator !== 'function') {
                        return;
                    }

                    if (ruleObject.options.condition && !ruleObject.options.condition(_this.store)) {
                        return;
                    }

                    if (_this.input[attribute] === '' && ruleObject.name !== 'req') {
                        return;
                    }

                    var is_valid = ruleObject.validator(_this.input[attribute], ruleObject.options, _this.store, _this.input);

                    if (!is_valid) {
                        _this.addFailure(attribute, ruleObject);
                    }
                });
            });
            return !this.error_count;
        }

        /**
         * Determine if validation passes
         *
         * @return {boolean}
         */

    }, {
        key: 'isPassed',
        value: function isPassed() {
            return this.check();
        }

        /**
         * Converts the rule array to an object
         *
         * @param {array} rule
         * @return {object}
         */

    }], [{
        key: 'getRuleObject',
        value: function getRuleObject(rule) {
            var is_rule_string = typeof rule === 'string';
            var rule_object = {
                name: is_rule_string ? rule : rule[0],
                options: is_rule_string ? {} : rule[1] || {}
            };

            rule_object.validator = rule_object.name === 'custom' ? rule[1].func : (0, _declarative_validation_rules.getPreBuildDVRs)()[rule_object.name].func;

            return rule_object;
        }
    }]);

    return Validator;
}();

exports.default = Validator;

/***/ }),

/***/ "./src/javascript/app_2/Utils/gtm.js":
/*!*******************************************!*\
  !*** ./src/javascript/app_2/Utils/gtm.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gtm = __webpack_require__(/*! ../../_common/base/gtm */ "./src/javascript/_common/base/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GTM = function () {
    var pushPurchaseData = function pushPurchaseData(contract_data, root_store) {
        var data = {
            event: 'buy_contract',
            bom_ui: 'new',
            contract: {
                amount: contract_data.amount,
                barrier1: contract_data.barrier,
                barrier2: contract_data.barrier2,
                basis: contract_data.basis,
                buy_price: contract_data.buy_price,
                contract_type: contract_data.contract_type,
                currency: contract_data.currency,
                date_expiry: contract_data.date_expiry,
                date_start: contract_data.date_start,
                duration: contract_data.duration,
                duration_unit: contract_data.duration_unit,
                payout: contract_data.payout,
                symbol: contract_data.symbol
            },
            settings: {
                theme: root_store.ui.is_dark_mode_on ? 'dark' : 'light',
                portfolio_drawer: root_store.ui.is_portfolio_drawer_on ? 'open' : 'closed',
                purchase_confirm: root_store.ui.is_purchase_confirm_on ? 'enabled' : 'disabled',
                chart: {
                    toolbar_position: root_store.ui.is_chart_layout_default ? 'bottom' : 'left',
                    chart_asset_info: root_store.ui.is_chart_asset_info_visible ? 'visible' : 'hidden',
                    chart_type: root_store.modules.smart_chart.chart_type,
                    granularity: root_store.modules.smart_chart.granularity
                }
            }
        };
        _gtm2.default.pushDataLayer(data);
    };

    return _extends({}, _gtm2.default, {
        pushPurchaseData: pushPurchaseData
    });
}();

exports.default = GTM;

/***/ }),

/***/ "./src/javascript/app_2/Utils/pwa/index.js":
/*!*************************************************!*\
  !*** ./src/javascript/app_2/Utils/pwa/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregister = exports.default = undefined;

var _register_service_worker = __webpack_require__(/*! ./register_service_worker */ "./src/javascript/app_2/Utils/pwa/register_service_worker.js");

Object.defineProperty(exports, 'unregister', {
  enumerable: true,
  get: function get() {
    return _register_service_worker.unregister;
  }
});

var _register_service_worker2 = _interopRequireDefault(_register_service_worker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _register_service_worker2.default;

/***/ }),

/***/ "./src/javascript/app_2/Utils/pwa/register_service_worker.js":
/*!*******************************************************************!*\
  !*** ./src/javascript/app_2/Utils/pwa/register_service_worker.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = register;
exports.unregister = unregister;
function register() {
    // Register the service worker
    if ( /* process.env.NODE_ENV === 'production' && */'serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            var path_name = window.location.pathname;
            path_name = /index\.html/g.test(path_name) ? window.location.pathname.replace('index.html', '') : '';
            var sw_url = path_name + 'service-worker.js';
            navigator.serviceWorker.register(sw_url).then(function (registration) {
                registration.onupdatefound = function () {
                    var installingWorker = registration.installing;
                    installingWorker.onstatechange = function () {
                        if (installingWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // At this point, the old content will have been purged and
                                // the fresh content will have been added to the cache.
                                // It's the perfect time to display a "New content is
                                // available; please refresh." message in your web app.
                                console.log('New content is available; please refresh.'); // eslint-disable-line no-console
                            } else {
                                // At this point, everything has been precached.
                                // It's the perfect time to display a
                                // "Content is cached for offline use." message.
                                console.log('Content is cached for offline use.'); // eslint-disable-line no-console
                            }
                        }
                    };
                };
            }).catch(function (error) {
                console.error('Error during service worker registration:', error); // eslint-disable-line no-console
            });
        });
    }
}

function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}

/***/ }),

/***/ "./src/javascript/app_2/index.js":
/*!***************************************!*\
  !*** ./src/javascript/app_2/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

__webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/promise.js");

var _check_new_release = __webpack_require__(/*! ../_common/check_new_release */ "./src/javascript/_common/check_new_release.js");

var _app = __webpack_require__(/*! ./App/app */ "./src/javascript/app_2/App/app.js");

var _app2 = _interopRequireDefault(_app);

var _pwa = __webpack_require__(/*! ./Utils/pwa */ "./src/javascript/app_2/Utils/pwa/index.js");

var _pwa2 = _interopRequireDefault(_pwa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.check_new_release = _check_new_release.checkNewRelease; // used by GTM to update page after a new release

(0, _pwa2.default)();
(0, _app2.default)();

// TODO Remove the below comments
/**
 * The below lines are not necessary anymore since we are using `defer` in script tags.
 * It tells the browser to download the scripts without blocking the HTML parsing and
 * execute them after parsing is completely finished in the order they appear in the HTML.
 * Please let me know if you think we need to listen to this two events; otherwise, I will remove them totally in the next PR.
 */

// document.addEventListener('DOMContentLoaded', initApp);
// window.addEventListener('pageshow', (e) => { // Safari doesn't fire load event when using back button
//     if (e.persisted) {
//         initApp();
//     }
// });

/***/ }),

/***/ "./src/javascript/config.js":
/*!**********************************!*\
  !*** ./src/javascript/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const Cookies = require('js-cookie');

/*
 * Configuration values needed in js codes
 *
 * NOTE:
 * Please use the following command to avoid accidentally committing personal changes
 * git update-index --assume-unchanged src/javascript/config.js
 *
 */
var domain_app_ids = { // these domains also being used in '_common/url.js' as supported "production domains"
    'binary.com': 1,
    'binary.me': 15284
};

var getCurrentBinaryDomain = function getCurrentBinaryDomain() {
    return Object.keys(domain_app_ids).find(function (domain) {
        return new RegExp('.' + domain + '$', 'i').test(window.location.hostname);
    });
};

var isProduction = function isProduction() {
    var all_domains = Object.keys(domain_app_ids).map(function (domain) {
        return 'www\\.' + domain.replace('.', '\\.');
    });
    return new RegExp('^(' + all_domains.join('|') + ')$', 'i').test(window.location.hostname);
};

var binary_desktop_app_id = 14473;

var getAppId = function getAppId() {
    var app_id = null;
    var user_app_id = '1108'; // you can insert Application ID of your registered application here
    var config_app_id = window.localStorage.getItem('config.app_id');
    var is_new_app = /\/app\//.test(window.location.pathname);
    if (config_app_id) {
        app_id = config_app_id;
    } else if (/desktop-app/i.test(window.location.href) || window.localStorage.getItem('config.is_desktop_app')) {
        window.localStorage.removeItem('config.default_app_id');
        window.localStorage.setItem('config.is_desktop_app', 1);
        app_id = binary_desktop_app_id;
    } else if (/staging\.binary\.com/i.test(window.location.hostname)) {
        window.localStorage.removeItem('config.default_app_id');
        app_id = 1098;
    } else if (user_app_id.length) {
        window.localStorage.setItem('config.default_app_id', user_app_id); // it's being used in endpoint chrome extension - please do not remove
        app_id = user_app_id;
    } else if (/localhost/i.test(window.location.hostname)) {
        app_id = 1159;
    } else if (is_new_app) {
        window.localStorage.removeItem('config.default_app_id');
        app_id = 15265;
    } else {
        window.localStorage.removeItem('config.default_app_id');
        app_id = domain_app_ids[getCurrentBinaryDomain()] || 1;
    }
    return app_id;
};

var isBinaryApp = function isBinaryApp() {
    return +getAppId() === binary_desktop_app_id;
};

var getSocketURL = function getSocketURL() {
    var server_url = window.localStorage.getItem('config.server_url');
    if (!server_url) {
        // const to_green_percent = { real: 100, virtual: 0, logged_out: 0 }; // default percentage
        // const category_map     = ['real', 'virtual', 'logged_out'];
        // const percent_values   = Cookies.get('connection_setup'); // set by GTM
        //
        // // override defaults by cookie values
        // if (percent_values && percent_values.indexOf(',') > 0) {
        //     const cookie_percents = percent_values.split(',');
        //     category_map.map((cat, idx) => {
        //         if (cookie_percents[idx] && !isNaN(cookie_percents[idx])) {
        //             to_green_percent[cat] = +cookie_percents[idx].trim();
        //         }
        //     });
        // }

        // let server = 'blue';
        // if (/www\.binary\.com/i.test(window.location.hostname)) {
        //     const loginid = window.localStorage.getItem('active_loginid');
        //     let client_type = category_map[2];
        //     if (loginid) {
        //         client_type = /^VRT/.test(loginid) ? category_map[1] : category_map[0];
        //     }
        //
        //     const random_percent = Math.random() * 100;
        //     if (random_percent < to_green_percent[client_type]) {
        //         server = 'green';
        //     }
        // }

        // TODO: in order to use connection_setup config, uncomment the above section and remove next lines

        var loginid = window.localStorage.getItem('active_loginid');
        var is_real = loginid && !/^VRT/.test(loginid);
        var server = isProduction() && is_real ? 'green' : 'blue';

        server_url = server + '.binaryws.com';
    }
    return 'wss://' + server_url + '/websockets/v3';
};

module.exports = {
    getCurrentBinaryDomain: getCurrentBinaryDomain,
    isProduction: isProduction,
    getAppId: getAppId,
    isBinaryApp: isBinaryApp,
    getSocketURL: getSocketURL
};

/***/ })

/******/ });
//# sourceMappingURL=binary.js.map