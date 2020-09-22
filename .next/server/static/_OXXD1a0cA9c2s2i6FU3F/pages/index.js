module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+yJc":
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next-server/dist/lib/utils"
var utils_ = __webpack_require__("p8BD");

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// CONCATENATED MODULE: ./src/hocs/withAnalytics.js
var __jsx = external_react_default.a.createElement;



/* harmony default export */ var withAnalytics = (() => Composed => class extends external_react_["Component"] {
  static getInitialProps(ctx) {
    return Object(utils_["loadGetInitialProps"])(Composed, ctx);
  }

  componentDidMount() {
    external_react_ga_default.a.initialize("UA-148359982-1");
    external_react_ga_default.a.pageview(window.location.pathname);
  }

  render() {
    return __jsx(Composed, this.props);
  }

});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./src/components/Links/styles.js

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-13ku84g-0"
})(["display:flex;align-items:center;justify-content:space-between;width:300px;margin-left:auto;margin-right:auto;a{background-color:", ";border-radius:8px;box-shadow:0px 4px 4px rgba(0,0,0,0.7);width:40px;height:40px;line-height:40px;display:flex;align-items:center;justify-content:center;img{margin:auto;display:block;}}"], ({
  theme
}) => theme.colors.green);
// CONCATENATED MODULE: ./src/components/Links/index.js
var Links_jsx = external_react_default.a.createElement;




function Links({
  className
}) {
  return Links_jsx(Container, {
    className: className
  }, Links_jsx(external_react_ga_default.a.OutboundLink, {
    eventLabel: "Link Github",
    to: "https://github.com/nurycaroline"
  }, Links_jsx("img", {
    src: "/static/github.png",
    alt: "Logo Github",
    title: "Github"
  })), Links_jsx(external_react_ga_default.a.OutboundLink, {
    eventLabel: "Link LinkedIn",
    to: "https://www.linkedin.com/in/nuriellybrizola/"
  }, Links_jsx("img", {
    src: "/static/linkedin.png",
    alt: "Logo LinkedIn",
    title: "LinkedIn"
  })), Links_jsx(external_react_ga_default.a.OutboundLink, {
    eventLabel: "Link Codepen",
    to: "https://codepen.io/nurycaroline/"
  }, Links_jsx("img", {
    src: "/static/codepen.png",
    alt: "Logo Codepen",
    title: "Codepen"
  })), Links_jsx(external_react_ga_default.a.OutboundLink, {
    eventLabel: "Link E-mail",
    to: "mailto:nurycaroline@gmail.com"
  }, Links_jsx("img", {
    src: "/static/email.png",
    alt: "Logo Email",
    title: "Email"
  })), Links_jsx(external_react_ga_default.a.OutboundLink, {
    eventLabel: "Link Behance",
    to: "https://www.behance.net/nurycaroline"
  }, Links_jsx("img", {
    src: "/static/behance.png",
    alt: "Logo Behance",
    title: "Behance"
  })));
}
// EXTERNAL MODULE: external "styled-media-query"
var external_styled_media_query_ = __webpack_require__("wqYh");
var external_styled_media_query_default = /*#__PURE__*/__webpack_require__.n(external_styled_media_query_);

// CONCATENATED MODULE: ./src/containers/Home/styles.js


const styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-6alqvr-0"
})(["width:100%;height:600px;"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-6alqvr-1"
})(["img{width:100%;min-height:22px;}"]);
const Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-6alqvr-2"
})(["text-transform:uppercase;margin:-10px 20px;span:nth-child(1){font:25px \"FiraCodeBold\";color:", ";}span:nth-child(2){font:25px \"FiraCodeSemiBold\";color:", ";letter-spacing:0.5px;}"], ({
  theme
}) => theme.colors.green, ({
  theme
}) => theme.colors.greyLight);
const Body = external_styled_components_default.a.main.withConfig({
  displayName: "styles__Body",
  componentId: "sc-6alqvr-3"
})(["margin:auto;max-width:615px;display:flex;flex-direction:column;padding:20px;"]);
const Presentation = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Presentation",
  componentId: "sc-6alqvr-4"
})(["display:flex;align-items:center;justify-content:space-between;margin:25% 0 40px;p{color:", ";width:100%;}p:nth-child(1){font:24px \"LivvicRegular\";}p:nth-child(2){font-size:24px \"LivvicBold\";}", ""], ({
  theme
}) => theme.colors.white, external_styled_media_query_default.a.lessThan("medium")`
    flex-direction: column-reverse;
    margin-top: 60px;
  `);
const Photo = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Photo",
  componentId: "sc-6alqvr-5"
})(["width:100px;border-radius:100%;", ""], external_styled_media_query_default.a.lessThan("medium")`
    margin-bottom: 40px;
    width: 150px;
  `);
// CONCATENATED MODULE: ./src/containers/Home/index.js
var Home_jsx = external_react_default.a.createElement;



function Home() {
  return Home_jsx(styles_Container, null, Home_jsx(Header, null, Home_jsx("img", {
    src: "/static/polygon-top.png",
    alt: "Poligno de decoracao",
    title: "Polygon Decoration Top"
  }), Home_jsx(Logo, null, Home_jsx("span", null, "nury"), Home_jsx("span", null, "caroline"))), Home_jsx(Body, null, Home_jsx(Presentation, null, Home_jsx("div", null, Home_jsx("p", null, "Hi!"), Home_jsx("p", null, "I'm a Freelancer Developer.")), Home_jsx(Photo, {
    src: "/static/nurycaroline.jpg",
    alt: "Nurielly Caroline Brizola"
  })), Home_jsx(Links, null)));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./src/components/Title/styles.js

const Title_styles_Container = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__Container",
  componentId: "olth5a-0"
})(["color:", ";font:bold 50px/63px \"LivvicBold\";text-align:center;padding:50px 0 35px 0;text-transform:uppercase;text-shadow:0px 4px 4px rgba(0,0,0,0.4);"], ({
  theme
}) => theme.colors.dark);
// CONCATENATED MODULE: ./src/components/Title/index.js

var Title_jsx = external_react_default.a.createElement;


function Title(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return Title_jsx(Title_styles_Container, props, children);
}
// CONCATENATED MODULE: ./src/components/List/styles.js

const List_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-109d0w5-0"
})(["width:100%;padding:20px;display:flex;align-items:center;flex-wrap:wrap;justify-content:center;::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);border-radius:10px;background-color:", ";height:8px;}::-webkit-scrollbar{width:12px;height:8px;background-color:", ";}::-webkit-scrollbar-thumb{background-color:", ";border-radius:10px;height:8px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);}"], ({
  theme
}) => theme.colors.green2, ({
  theme
}) => theme.colors.green2, ({
  theme
}) => theme.colors.blue);
// CONCATENATED MODULE: ./src/components/List/index.js
var List_jsx = external_react_default.a.createElement;


function List({
  children
}) {
  return List_jsx(List_styles_Container, null, children);
}
// EXTERNAL MODULE: external "react-grid-gallery"
var external_react_grid_gallery_ = __webpack_require__("+yJc");
var external_react_grid_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_grid_gallery_);

// CONCATENATED MODULE: ./src/containers/Works/Card/styles.js

const Card_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "wo5t13-0"
})(["background-color:", ";padding:20px;margin:20px;height:400px;width:350px;display:flex;align-items:center;justify-content:space-between;flex-direction:column;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:8px;"], ({
  theme
}) => theme.colors.white);
const Images = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Images",
  componentId: "wo5t13-1"
})(["width:300px;height:180px;display:block;margin-bottom:20px;box-shadow:0px 1px 4px rgba(0,0,0,0.25);.ReactGridGallery_tile-viewport img{max-width:300px;object-fit:cover;}"]);
const ProjetcName = external_styled_components_default.a.a.withConfig({
  displayName: "styles__ProjetcName",
  componentId: "wo5t13-2"
})(["font:18px/22px \"FiraCodeLight\";font-weight:500;margin-bottom:10px;text-decoration:none;"]);
const Company = external_styled_components_default.a.a.withConfig({
  displayName: "styles__Company",
  componentId: "wo5t13-3"
})(["font:14px/17px \"FiraCodeMedium\";font-weight:600;text-decoration:none;margin-bottom:10px;"]);
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Description",
  componentId: "wo5t13-4"
})(["font:14px/18px \"LivvicRegular\";"]);
const Tags = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__Tags",
  componentId: "wo5t13-5"
})(["display:flex;align-items:center;justify-content:center;"]);
const TagItem = external_styled_components_default.a.li.withConfig({
  displayName: "styles__TagItem",
  componentId: "wo5t13-6"
})(["font:12px \"FiraCodeLight\";margin-right:5px;background-color:", ";border-radius:30px;padding:5px 10px;"], ({
  theme
}) => theme.colors.green2);
// CONCATENATED MODULE: ./src/containers/Works/Card/index.js
var Card_jsx = external_react_default.a.createElement;



function Card({
  work
}) {
  return Card_jsx(Card_styles_Container, null, Card_jsx("div", null, Card_jsx(Images, null, Card_jsx(external_react_grid_gallery_default.a, {
    images: work.images,
    enableImageSelection: false
  })), Card_jsx(ProjetcName, {
    href: work.link
  }, work.name), Card_jsx("br", null), Card_jsx(Company, {
    href: work.company.link
  }, work.company.name), Card_jsx(Description, null, work.description)));
}
// CONCATENATED MODULE: ./src/containers/Works/styles.js

const Works_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1xy50ah-0"
})(["background:", ";padding-bottom:20px;"], ({
  theme
}) => theme.gradients.greenBlue90);
// EXTERNAL MODULE: ./src/data/works.json
var data_works = __webpack_require__("WWec");

// CONCATENATED MODULE: ./src/containers/Works/index.js
var Works_jsx = external_react_default.a.createElement;







const Works = () => {
  return Works_jsx(Works_styles_Container, null, Works_jsx(Title, null, "Works"), Works_jsx(List, null, data_works.works.map(work => Works_jsx(Card, {
    key: work.name,
    work: work
  }))));
};

/* harmony default export */ var containers_Works = (Works);
// CONCATENATED MODULE: ./src/containers/About/styles.js



const About_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-138l8o9-0"
})(["background-color:", ";height:600px;display:flex;justify-content:space-between;flex-direction:column;"], ({
  theme
}) => theme.colors.dark);
const styles_Title = external_styled_components_default()(Title).withConfig({
  displayName: "styles__Title",
  componentId: "sc-138l8o9-1"
})(["color:", " !important;"], ({
  theme
}) => theme.colors.white);
const SkillsGroup = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SkillsGroup",
  componentId: "sc-138l8o9-2"
})(["max-width:850px;height:140px;margin:auto;display:flex;justify-content:center;flex-wrap:wrap;a{margin-top:25px;}p{color:", ";}", ""], ({
  theme
}) => theme.colors.white, external_styled_media_query_default.a.lessThan("medium")`
    a {
      margin-top: 45px;
    }
  `);
const Skill = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Skill",
  componentId: "sc-138l8o9-3"
})(["min-width:320px;padding:20px 0;h3{color:", ";font:20px/25px \"LivvicBold\";}li{color:", ";font:20px/24px \"FiraCodeRegular\";}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.greyLight);
// CONCATENATED MODULE: ./src/containers/About/index.js
var About_jsx = external_react_default.a.createElement;



function About() {
  return About_jsx(About_styles_Container, null, About_jsx("div", null, About_jsx(styles_Title, null, "About"), About_jsx(SkillsGroup, null, About_jsx("p", null, "I work for about 6 years with web(HTML5, CSS3, ES6), and 3 years with React. I am a quick learner, and a dedicated professional. In addition, I am always eager to further develop my skills and add value to the solutions I work with."), About_jsx(Skill, null, About_jsx("h3", null, "Web App Development")), About_jsx(Skill, null, About_jsx("h3", null, "Mobile App Development")), About_jsx("br", null), About_jsx(Links, null))), About_jsx("img", {
    src: "/static/polygon-bottom.png",
    alt: "Polygon Decoration",
    title: "Polygon Decoration Bottom"
  }));
}
// CONCATENATED MODULE: ./src/containers/ForFun/styles.js

const ForFun_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1kk1r7i-0"
})(["background:", ";padding-bottom:20px;"], ({
  theme
}) => theme.gradients.blueGreen90);
const Item = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1kk1r7i-1"
})(["background:#fbfbfb;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:24px;width:100%;max-width:410px;height:210px;display:flex;align-items:center;justify-content:space-between;padding:20px;margin:20px;div{display:flex;align-items:center;flex-direction:column;justify-content:space-between;height:100%;padding:20px;}img{max-width:140px;}h3{font:20px/24px Fira Code;text-align:center;}p{font:10px/12px Fira Code;text-align:center;}a{box-shadow:0px 4px 4px rgba(0,0,0,0.25);background:linear-gradient(102.19deg,#1d929e 0%,#46eeb4 97.12%);border-radius:50px;width:120px;height:35px;color:", ";font:14px/35px Fira Code;font-weight:500;text-align:center;}"], ({
  theme
}) => theme.colors.dark);
// EXTERNAL MODULE: ./src/data/projects.json
var projects = __webpack_require__("qtb/");

// CONCATENATED MODULE: ./src/containers/ForFun/index.js
var ForFun_jsx = external_react_default.a.createElement;






const ForFun = () => {
  return ForFun_jsx(ForFun_styles_Container, null, ForFun_jsx(Title, null, "For Fun"), ForFun_jsx(List, null, projects.projects.map(project => ForFun_jsx(Item, {
    key: project.name
  }, ForFun_jsx("img", {
    src: project.image,
    alt: "Project picture",
    description: project.description,
    title: project.title
  }), ForFun_jsx("div", null, ForFun_jsx("h3", null, project.title), ForFun_jsx("p", null, project.description), ForFun_jsx("a", {
    href: project.link
  }, "view project"))))));
};

/* harmony default export */ var containers_ForFun = (ForFun);
// CONCATENATED MODULE: ./src/layout/styles.js

const layout_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "j1pyaz-0"
})(["width:100%;height:100vh;z-index:2;font-size:24px;color:", ";overflow-y:auto;animation-delay:1.2s;animation:", " 4s;"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.fadeIn);
// CONCATENATED MODULE: ./src/layout/index.js
var layout_jsx = external_react_default.a.createElement;






function Site() {
  return layout_jsx(layout_styles_Container, null, layout_jsx(Home, null), layout_jsx(containers_Works, null), layout_jsx(About, null));
}
// CONCATENATED MODULE: ./src/styles/index.js

const Animation = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Animation",
  componentId: "sc-19jztf2-0"
})(["position:absolute;z-index:1;width:100%;"]);
const AnimationToTop = external_styled_components_default()(Animation).withConfig({
  displayName: "styles__AnimationToTop",
  componentId: "sc-19jztf2-1"
})(["animation:", " 2s forwards;z-index:2;height:53vh;background:", ";clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 5vw));"], ({
  theme
}) => theme.slideTop, ({
  theme
}) => theme.gradients.greenBlue270);
const AnimationToBotton = external_styled_components_default()(Animation).withConfig({
  displayName: "styles__AnimationToBotton",
  componentId: "sc-19jztf2-2"
})(["z-index:1;height:54vh;bottom:0;background:", ";animation:", " 2s forwards;clip-path:polygon(0 0,100% calc(100% - 35vw),100% 100%,0% 100%);"], ({
  theme
}) => theme.gradients.greenBlue270, ({
  theme
}) => theme.slideBotton);
// CONCATENATED MODULE: ./src/styles/theme.js

const theme = {
  colors: {
    blue: "#198a9c",
    blue2: "#24a1a2",
    green: "#41e4a4",
    green2: "#35CBB8",
    dark: "#333",
    darkLight: "#505050",
    greyDark: " #5d5a5c",
    greyLight: " #B3AFB2",
    white: "#FFFFFF"
  },
  gradients: {
    greenBlue270: `linear-gradient(270deg, #198a9c 0%, #46efb4 99.99%)`,
    greenBlue90: `linear-gradient(90deg, #45edb4 0%, #1d939e 100%)`,
    blueGreen90: `linear-gradient(90deg, #1D939E 0%, #45EDB4 100%)`
  },

  /* Keyframs */
  fadeIn: Object(external_styled_components_["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]),
  slideBotton: Object(external_styled_components_["keyframes"])(["0%{transform:translateY(0);}100%{transform:translateY(100%);}"]),
  slideTop: Object(external_styled_components_["keyframes"])(["0%{transform:translateY(0);}100%{transform:translateY(-101%);}"])
};
/* harmony default export */ var styles_theme = (theme);
// CONCATENATED MODULE: ./src/styles/global.js

/* harmony default export */ var global = (external_styled_components_["createGlobalStyle"]`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Fira Code", monospace;
    color: ${({
  theme
}) => theme.colors.dark};
  }

  html { height: 100%; }

  body{
    background-color: ${({
  theme
}) => theme.colors.dark};
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  @font-face {
    font-family: "FiraCodeBold";
    src: url("static/fonts/Fira_Code/static/FiraCode-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: "FiraCodeLight";
    src: url("static/fonts/Fira_Code/static/FiraCode-Light.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "FiraCodeMedium";
    src: url("static/fonts/Fira_Code/static/FiraCode-Medium.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "FiraCodeRegular";
    src: url("static/fonts/Fira_Code/static/FiraCode-Regular.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "FiraCodeSemiBold";
    src: url("static/fonts/Fira_Code/static/FiraCode-SemiBold.ttf")
      format("truetype");
  }

  @font-face {
    font-family: "LivvicRegular";
    src: url("static/fonts/Livvic/Livvic-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "LivvicBold";
    src: url("static/fonts/Livvic/Livvic-Bold.ttf") format("truetype");
  }
`);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;







const MainPage = ({
  works
}) => pages_jsx(external_styled_components_["ThemeProvider"], {
  theme: styles_theme
}, pages_jsx(external_react_default.a.Fragment, null, pages_jsx(global, null), pages_jsx(AnimationToTop, null), pages_jsx(AnimationToBotton, null), pages_jsx(Site, {
  works: works
})));

/* harmony default export */ var pages = __webpack_exports__["default"] = (withAnalytics()(MainPage));

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WWec":
/***/ (function(module) {

module.exports = JSON.parse("{\"works\":[{\"company\":{\"link\":\"https://www.wk.com.br/\",\"name\":\"WK Sistemas\"},\"description-pt\":\"Desenvolvimento de aplicativos web (PWA) para gestão móvel integrado com o ERP Radar, para traze mais agilidade aos usuário.\",\"description\":\"Web application development (PWA) for mobile management integrated with ERP Radar, to bring more agility to users.\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fwk%2Fcapawk.png?alt=media&token=1145211e-be38-4979-ba48-4f6134a5d18e\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fwk%2Fcapawk.png?alt=media&token=1145211e-be38-4979-ba48-4f6134a5d18e\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fwk%2Fautorizacao%20saldo%20bancario.png?alt=media&token=4058d6b7-c923-49a7-9a51-67fbc1128535\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fwk%2Fstore.png?alt=media&token=d1d9fa36-912b-4df7-a8b0-1021328829ed\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fwk%2Ftitulos%20autorizacao.png?alt=media&token=1c94e9c7-6038-4813-9e9b-7120916d7d4f\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fwk%2Fviagem%20graficos%20de%20gasto2.png?alt=media&token=f793fcd5-2985-4d38-ae71-9c1cd4f0c939\"}],\"link\":\"https://www.solucoes.wk.com.br/apps/\",\"name\":\"Mobile Management WK\"},{\"company\":{\"link\":\"https://www.bg7.com.br/pt/\",\"name\":\"BG7\"},\"description-pt\":\"Desenvolvimento de uma rede de apoio os novos pais, com conteudo para auxilia-los na jornada e Organização do chá de bebê online com lista de presentes.\",\"description\":\"Development of a support network for new parents, with content to assist them in the journey and organization of online baby shower with gift list.\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmaisabraco%2Fblog.png?alt=media&token=cfadc7cc-fe75-43d8-82dc-e4ef613778c0\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmaisabraco%2Fblog.png?alt=media&token=cfadc7cc-fe75-43d8-82dc-e4ef613778c0\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmaisabraco%2Fcha%20controle.png?alt=media&token=2c9357a0-68b3-4c18-ad9d-b8393b3c5940\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmaisabraco%2Fconvite.png?alt=media&token=8b32089e-c7dc-4e9c-948e-39a365179be5\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmaisabraco%2Fsexo%20bebe.png?alt=media&token=bf925520-289d-46cc-ab9b-f077a2004b2c\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmaisabraco%2Ftema%20convite.png?alt=media&token=a785618e-da98-4856-ae1d-7ea411237b90\"}],\"link\":\"https://www.maisabracos.com.br/\",\"name\":\"Mais Abraços\"},{\"company\":{\"link\":\"https://www.bg7.com.br/pt/\",\"name\":\"BG7\"},\"description-pt\":\"Web Site para buscar e comparar os carros seminovos da Mercedes Benz.\",\"description\":\"Web Site to search and compare Mercedes Benz used cars.\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmercedesbenz%2Fhome.png?alt=media&token=788f7a37-d755-4bc5-b3ad-398c47ee6479\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmercedesbenz%2Fhome.png?alt=media&token=788f7a37-d755-4bc5-b3ad-398c47ee6479\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmercedesbenz%2Fcompare.png?alt=media&token=cdde3e30-f4d2-495d-8324-9d88ecb58ca2\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmercedesbenz%2Ffiltro%20km.png?alt=media&token=efc7d2b0-6f9a-43d1-b50e-69c6de184471\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmercedesbenz%2Ffiltro%20modelo.png?alt=media&token=7454a1ad-1ec6-43af-b6b4-b8255710dec3\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fbg7%2Fmercedesbenz%2Fselecao.png?alt=media&token=2a629878-bb12-4666-9b76-d5c2a1517a34\"}],\"link\":null,\"name\":\"Mercedes Benz\"},{\"company\":{\"link\":\"http://www.mhtec.com.br\",\"name\":\"MHTec Sistemas\"},\"description-pt\":\"Desenvolvimento de uma plataforma Web para gerenciar instalações, monitorar estações. Trazendo mais agilidade nas atualizações e no controle de licensas.\",\"description\":\"Development of a web platform to manage facilities, monitor stations. Bringing more agility in updates and licensing control\",\"images\":[{\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fmhtec%2FLogin.png?alt=media&token=47e2e671-8eab-4c50-8518-e07e997a9fc9\",\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fmhtec%2FLogin.png?alt=media&token=47e2e671-8eab-4c50-8518-e07e997a9fc9\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fmhtec%2FClient-Details.png?alt=media&token=5b4a54a5-53b4-4b06-b9bc-2da08275ebec\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fmhtec%2FClient-Edit.png?alt=media&token=7f26fae0-567d-4576-83f8-b04382008c82\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fmhtec%2FClient.png?alt=media&token=8edd0ac0-3490-4316-9a4d-c021154292e7\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fmhtec%2FReleases.png?alt=media&token=6756c070-478d-4ebb-a0cb-239d225ab3ac\"}],\"link\":null,\"name\":\"Portal\"},{\"company\":{\"link\":\"https://www.gasola.net/\",\"name\":\"Gasola\"},\"description-pt\":\"Gasola é uma plataforma online para unir empresas a postos de combustiveis, com descontos excluivos e controle de qualidade.\",\"description\":\"Gasola is an online platform for linking companies to gas stations with exclusive discounts and quality control.\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2021.01.30.png?alt=media&token=c5fc290b-653a-4fcc-ad94-b7341b8d4c6b\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2021.01.30.png?alt=media&token=c5fc290b-653a-4fcc-ad94-b7341b8d4c6b\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2020.55.37.png?alt=media&token=3afbdb6b-3009-4cd9-a2fa-ff4dd63dfae7\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2020.56.23.png?alt=media&token=24a85e7f-7506-4e10-b3c7-6c9ddc645845\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2020.56.38.png?alt=media&token=84a84691-e22b-454d-b39b-1b503785eefe\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2020.57.50.png?alt=media&token=f8dd6796-8008-4669-958c-a8bb94fcce2c\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FScreen%20Shot%202019-09-11%20at%2021.01.19.png?alt=media&token=b168200a-4e22-4e3f-a732-2359ecd8ee1e\"}],\"link\":null,\"name\":\"Gasola\"},{\"company\":{\"link\":\"https://www.gasola.net/\",\"name\":\"Gasola\"},\"description-pt\":\"Gasola é uma plataforma online para unir empresas a postos de combustiveis, com descontos excluivos e controle de qualidade.\",\"description\":\"Gasola is an online platform for linking companies to gas stations with exclusive discounts and quality control.\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2Fwww.gasola%203.png?alt=media&token=de470152-dbc1-4874-9305-b0de0f778f9d\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2FGroup%2090.png?alt=media&token=63795c3c-01b2-4f25-b8df-336a38e0b177\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fgasola%2Fwww.gasola%202.png?alt=media&token=181e3e6e-019a-4e33-8d99-5ff085669a86\"}],\"link\":null,\"name\":\"Gasola Site\"},{\"company\":{\"link\":\"https://www.unifinance.com.br/\",\"name\":\"Unifinance\"},\"description-pt\":\"Desenvolvimento da interface pra um aplicativo que permite exclusivamente aos clientes da Unifinance, o acompanhamento de seus investimentos de maneira prática e completa.\",\"description\":\"Interface development for an application that allows Unifinance customers exclusively, to follow their investments in a practical and complete way.\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Funifinance%2FGraph.png?alt=media&token=14f57c81-d53b-4803-bd03-30c2fea13539\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Funifinance%2FGraph.png?alt=media&token=14f57c81-d53b-4803-bd03-30c2fea13539\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Funifinance%2F2-2.jpg?alt=media&token=3cf4501f-5a08-4564-9ac9-199f6f3741fd\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Funifinance%2F2.jpg?alt=media&token=5367ac17-c88c-45a3-980d-528e0ccedd7f\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Funifinance%2F2-1.jpg?alt=media&token=fc2dc9e0-a208-4770-a939-f911d53ba66a\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Funifinance%2F1.jpg?alt=media&token=faad60bb-c1fa-4627-8987-7316f48a22e2\"}],\"link\":\"https://apps.apple.com/us/app/id1528593168\",\"name\":\"Unifinance\"},{\"company\":{\"link\":\"\",\"name\":\"\"},\"description-pt\":\"\",\"description\":\"Application for online reading of the magazine necrotica\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fnecrotica%2FGraph.png?alt=media&token=5d2dfaf7-799d-45b6-bd9c-c2a3ff58cd91\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fnecrotica%2FAndroid.png?alt=media&token=d00e16fc-22e5-40c1-854b-729e56616570\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fnecrotica%2FAndroid-3.png?alt=media&token=83e7afb0-3f2d-49ad-b176-4c8127f4b6ed\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fnecrotica%2FAndroid-2.png?alt=media&token=2c35bf2d-c4b0-4342-9196-0ba899b21524\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Fnecrotica%2FAndroid-1.png?alt=media&token=18381937-ac2a-4b2a-ae83-784ae0f7e9e5\"}],\"link\":\"\",\"name\":\"Magazine Necrótica\"},{\"company\":{\"link\":\"https://www.futurebrand.com/br\",\"name\":\"Futurebrand\"},\"description-pt\":\"\",\"description\":\"Site to search, buy or rent properties\",\"images\":[{\"thumbnail\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Faxpe%2FHome.png?alt=media&token=06149bf1-6fe6-4ec0-a194-56f46d01504a\",\"thumbnailWidth\":300,\"thumbnailHeight\":180,\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Faxpe%2FHome.png?alt=media&token=06149bf1-6fe6-4ec0-a194-56f46d01504a\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Faxpe%2Fbusca.png?alt=media&token=6b030dec-2f4a-49c3-a45f-085ae9691db5\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Faxpe%2FBusca%20Imoveis%2003%20-%20SP%20Alugar%20mode.png?alt=media&token=f785d207-9d69-4116-bfa3-70cd669dddc0\"},{\"src\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/works%2Faxpe%2FApartamento.png?alt=media&token=ad572036-2eab-4148-b087-270223d259a8\"}],\"link\":\"https://www.axpe.com.br/\",\"name\":\"Axpe\"}]}");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qtb/":
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"image\":\"https://www.github.com/nurycaroline/pricing-component-with-toggle/raw/master/design/desktop-preview.jpg\",\"link\":\"https://nurielly.dev/pricing-component-with-toggle/\",\"title\":\"Pricing Component\",\"description\":\"Challeng by Frontend Mentor\"},{\"image\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/projects%2Fmoviewebapp.png?alt=media&token=b55f463c-b441-4c85-b29a-bdda4674e851\",\"link\":\"https://nurielly.dev/movie-web-app\",\"title\":\"Movie web app\",\"description\":\"List popular movies.\"},{\"image\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/projects%2Ftictactoe.png?alt=media&token=457e81b2-800c-4e6b-bc30-b7eb375735e8\",\"link\":\"https://nurielly.dev/tictactoe_react\",\"title\":\"Tic Tac Toe\",\"description\":\"Play the classic game of X's and O's vs. the computer or 2 players.\"},{\"image\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/projects%2Fpomodoroclock.png?alt=media&token=61feddc1-f9be-4146-b094-7e7386f96ced\",\"link\":\"https://www.codepen.io/nurycaroline/full/egpybZ\",\"title\":\"Pomodoro Clock\",\"description\":\"Challeng by Free Code Camp\"},{\"image\":\"https://firebasestorage.googleapis.com/v0/b/nurycaroline-1993f.appspot.com/o/projects%2Fcalculator.png?alt=media&token=ff40526c-7ba8-42d2-b7c9-d7133124adce\",\"link\":\"https://www.codepen.io/nurycaroline/full/KNVxEQ\",\"title\":\"Calculator\",\"description\":\"Challeng by Free Code Camp\"}]}");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "wqYh":
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ })

/******/ });