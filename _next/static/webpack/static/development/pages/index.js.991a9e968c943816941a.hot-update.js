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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/containers/Works/Card/styles.js");
var _jsxFileName = "/Users/nuriellycarolinebrizola/Desktop/workspace/Github/NuryCaroline/nurycaroline.github.io/src/containers/Works/Card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Card(_ref) {
  var work = _ref.work;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Images"], {
    images: work.images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ProjetcName"], {
    href: work.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, work.name), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Company"], {
    href: work.company.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, work.company.name), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, work.description)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, work.tags.map(function (tag) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["TagItem"], {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, tag);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.991a9e968c943816941a.hot-update.js.map