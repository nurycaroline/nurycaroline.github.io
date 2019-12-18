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
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Title */ "./src/components/Title/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/List */ "./src/components/List/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/containers/ForFun/styles.js");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/projects.json */ "./src/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects.json */ "./src/data/projects.json", 1);
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/containers/ForFun/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ForFun = function ForFun() {
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
  }, "ForFun"), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _data_projects_json__WEBPACK_IMPORTED_MODULE_4__.projects.map(function (project) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Item"], {
      key: project.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("img", {
      src: project.image,
      alt: "Project picture",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, project.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, project.description), __jsx("a", {
      href: project.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
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
/*! exports provided: Container, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1kk1r7i-0"
})(["background:", ";padding-bottom:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.gradients.blueGreen90;
});
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1kk1r7i-1"
})(["background:#fbfbfb;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:24px;max-width:410px;height:210px;display:flex;align-items:center;justify-content:space-between;padding:20px;margin:20px;div{display:flex;align-items:center;flex-direction:column;justify-content:space-between;height:100%;padding:20px;}img{max-width:140px;}h4{font:20px/24px Fira Code;text-align:center;}p{font:10px/12px Fira Code;text-align:center;}a{box-shadow:0px 4px 4px rgba(0,0,0,0.25);background:linear-gradient(102.19deg,#1d929e 0%,#46eeb4 97.12%);border-radius:50px;width:120px;height:35px;color:", ";font:14px/35px Fira Code;font-weight:500;text-align:center;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.dark;
});

/***/ })

})
//# sourceMappingURL=index.js.1c4f96b87e792ce0f1ad.hot-update.js.map