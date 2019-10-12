webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/Works/Card/index.js":
/*!********************************************!*\
  !*** ./src/containers/Works/Card/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/containers/Works/Card/styles.js");
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/containers/Works/Card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Card(_ref) {
  var work = _ref.work;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Images"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {
    images: work.images,
    enableImageSelection: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), "\xCE"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ProjetcName"], {
    href: work.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, work.name), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Company"], {
    href: work.company.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, work.company.name), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, work.description)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Tags"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, work.tags.map(function (tag) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["TagItem"], {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, tag);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.3a3c0b78c04f32ff46af.hot-update.js.map