webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/About/styles.js":
/*!****************************************!*\
  !*** ./src/containers/About/styles.js ***!
  \****************************************/
/*! exports provided: Container, Title, SkillsGroup, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsGroup", function() { return SkillsGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Title */ "./src/components/Title/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    a {\n      margin-top: 45px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-138l8o9-0"
})(["background-color:", ";height:600px;display:flex;justify-content:space-between;flex-direction:column;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark;
});
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "styles__Title",
  componentId: "sc-138l8o9-1"
})(["color:", " !important;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.darkLight;
});
var SkillsGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__SkillsGroup",
  componentId: "sc-138l8o9-2"
})(["max-width:850px;height:140px;margin:auto;display:flex;justify-content:center;flex-wrap:wrap;", ""], styled_media_query__WEBPACK_IMPORTED_MODULE_2__["default"].lessThan('medium')(_templateObject()));
var Skill = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Skill",
  componentId: "sc-138l8o9-3"
})(["min-width:350px;padding:20px 0;h3{color:", ";font:20px/25px \"LivvicBold\";}li{color:", ";font:20px/24px \"FiraCodeRegular\";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.greyLight;
});

/***/ })

})
//# sourceMappingURL=index.js.a17cbc62c4b5188c0e4a.hot-update.js.map