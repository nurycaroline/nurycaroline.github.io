webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/List/index.js":
/*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/List/styles.js");
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/components/List/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function List(_ref) {
  var children = _ref.children;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
}

/***/ }),

/***/ "./src/components/List/styles.js":
/*!***************************************!*\
  !*** ./src/components/List/styles.js ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-109d0w5-0"
})(["width:100%;padding:20px;display:flex;align-items:center;flex-wrap:wrap;justify-content:center;::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);border-radius:10px;background-color:", ";height:8px;}::-webkit-scrollbar{width:12px;height:8px;background-color:", ";}::-webkit-scrollbar-thumb{background-color:", ";border-radius:10px;height:8px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.green2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.green2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.blue;
});

/***/ }),

/***/ "./src/containers/Works/index.js":
/*!***************************************!*\
  !*** ./src/containers/Works/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Title */ "./src/components/Title/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/List */ "./src/components/List/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/containers/Works/styles.js");
/* harmony import */ var _data_works_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/works.json */ "./src/data/works.json");
var _data_works_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/works.json */ "./src/data/works.json", 1);
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/containers/Works/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Works = function Works() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Works"), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _data_works_json__WEBPACK_IMPORTED_MODULE_4__.works.map(function (work) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: work.name,
      work: work,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "./src/containers/Works/styles.js":
/*!****************************************!*\
  !*** ./src/containers/Works/styles.js ***!
  \****************************************/
/*! exports provided: Container, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/containers/Works/Card/index.js");


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1xy50ah-0"
})(["background:", ";padding-bottom:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.gradients.greenBlue90;
});
var ListItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Card__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "styles__ListItem",
  componentId: "sc-1xy50ah-1"
})([""]);

/***/ })

})
//# sourceMappingURL=index.js.08e38cd0f4aaf9dae848.hot-update.js.map