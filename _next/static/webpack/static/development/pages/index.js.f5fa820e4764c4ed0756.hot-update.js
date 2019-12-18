webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/containers/ForFun/styles.js");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/projects.json */ "./src/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects.json */ "./src/data/projects.json", 1);
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/containers/ForFun/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ForFun = function ForFun() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "ForFun"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _data_projects_json__WEBPACK_IMPORTED_MODULE_2__.projects.map(function (project) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: project.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ForFun);

/***/ }),

/***/ "./src/containers/ForFun/styles.js":
/*!*****************************************!*\
  !*** ./src/containers/ForFun/styles.js ***!
  \*****************************************/
/*! exports provided: Container, Title, List, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1kk1r7i-0"
})(["background:", ";padding-bottom:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.gradients.greenBlue90;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1kk1r7i-1"
})(["color:", ";font:bold 50px/63px \"LivvicBold\";text-align:center;padding:50px 0 35px 0;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.blue2;
});
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__List",
  componentId: "sc-1kk1r7i-2"
})(["width:100%;padding:20px;display:flex;align-items:center;flex-wrap:wrap;justify-content:center;::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);border-radius:10px;background-color:", ";height:8px;}::-webkit-scrollbar{width:12px;height:8px;background-color:", ";}::-webkit-scrollbar-thumb{background-color:", ";border-radius:10px;height:8px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.green2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.green2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.blue;
});
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1kk1r7i-3"
})([""]);

/***/ })

})
//# sourceMappingURL=index.js.f5fa820e4764c4ed0756.hot-update.js.map