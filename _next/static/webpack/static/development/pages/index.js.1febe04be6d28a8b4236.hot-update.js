webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./src/components/Title/index.js":
/*!***************************************!*\
  !*** ./src/components/Title/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Title/styles.js");
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/components/Title/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Title(_ref) {
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

/***/ "./src/components/Title/styles.js":
/*!****************************************!*\
  !*** ./src/components/Title/styles.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "styles__Container",
  componentId: "olth5a-0"
})(["color:", ";font:bold 50px/63px \"LivvicBold\";text-align:center;padding:50px 0 35px 0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.blue2;
});

/***/ }),

/***/ "./src/containers/ForFun/index.js":
/*!****************************************!*\
  !*** ./src/containers/ForFun/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Title */ "./src/components/Title/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/containers/ForFun/styles.js");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects.json */ "./src/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects.json */ "./src/data/projects.json", 1);
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/containers/ForFun/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ForFun = function ForFun() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "ForFun"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _data_projects_json__WEBPACK_IMPORTED_MODULE_3__.projects.map(function (project) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      key: project.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      src: project.image,
      alt: "Project picture",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, project.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, project.description), __jsx("a", {
      href: project.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "view project")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ForFun);

/***/ }),

/***/ "./src/containers/ForFun/styles.js":
/*!*****************************************!*\
  !*** ./src/containers/ForFun/styles.js ***!
  \*****************************************/
/*! exports provided: Container, List, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1kk1r7i-0"
})(["background:", ";padding-bottom:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.gradients.blueGreen90;
});
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__List",
  componentId: "sc-1kk1r7i-1"
})(["width:100%;padding:20px;display:flex;align-items:center;flex-wrap:wrap;justify-content:center;::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);border-radius:10px;background-color:", ";height:8px;}::-webkit-scrollbar{width:12px;height:8px;background-color:", ";}::-webkit-scrollbar-thumb{background-color:", ";border-radius:10px;height:8px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.green2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.green2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.blue;
});
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1kk1r7i-2"
})(["background:#fbfbfb;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:24px;max-width:410px;height:210px;display:flex;align-items:center;justify-content:space-between;padding:20px;margin:20px;div{display:flex;align-items:center;flex-direction:column;justify-content:space-between;height:100%;padding:20px;}img{max-width:140px;}h4{font:20px/24px Fira Code;text-align:center;}p{font:10px/12px Fira Code;text-align:center;}a{box-shadow:0px 4px 4px rgba(0,0,0,0.25);background:linear-gradient(102.19deg,#1d929e 0%,#46eeb4 97.12%);border-radius:50px;width:120px;height:35px;color:", ";font:14px/35px Fira Code;font-weight:500;text-align:center;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.dark;
});

/***/ })

})
//# sourceMappingURL=index.js.1febe04be6d28a8b4236.hot-update.js.map