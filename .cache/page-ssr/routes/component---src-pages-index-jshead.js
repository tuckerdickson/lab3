exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fonts/stylesheet.css */ "./src/fonts/stylesheet.css");
/* harmony import */ var _fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_ryan_portrait_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/ryan_portrait.jpg */ "./src/images/ryan_portrait.jpg");
/* harmony import */ var _images_tucker_portrait_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/tucker_portrait.jpeg */ "./src/images/tucker_portrait.jpeg");
/* harmony import */ var _images_cathrynlyonss_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/cathrynlyonss.jpeg */ "./src/images/cathrynlyonss.jpeg");
/* harmony import */ var _images_abigail_portrait_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/abigail_portrait.jpeg */ "./src/images/abigail_portrait.jpeg");
/* harmony import */ var _images_group_photo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/group_photo.png */ "./src/images/group_photo.png");


//importing stylesheets



//importing images





const Abigail = {
  name: "Abigail Bright",
  major: "Electrical Engineering: Computer Track",
  portrait: _images_abigail_portrait_jpeg__WEBPACK_IMPORTED_MODULE_6__["default"],
  webPage: 'abigail'
};
const Tucker = {
  name: "Tucker Dickson",
  major: "Computer Science and Engineering",
  portrait: _images_tucker_portrait_jpeg__WEBPACK_IMPORTED_MODULE_4__["default"],
  webPage: 'tucker'
};
const Cathryn = {
  name: "Cathryn Lyons",
  major: "Computer Science and Engineering",
  portrait: _images_cathrynlyonss_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"],
  webPage: 'cathryn'
};
const Ryan = {
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  portrait: _images_ryan_portrait_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  webPage: 'ryan'
};
const groupMembers = [Abigail, Tucker, Ryan, Cathryn];
function MemberList(members) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "members"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "two-column-wrapper"
  }, members.groupMembers.map(memberInfo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "member"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: memberInfo.webPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: memberInfo.portrait,
    class: "portraitImage",
    alt: memberInfo.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, memberInfo.name))))));
}
const displayMembers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MemberList, {
  groupMembers: groupMembers
});
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "navbar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "navbar-link-wrapper active-nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/"
  }, "HOME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "navbar-link-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/about"
  }, "ABOUT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "CTRL ALT ELITE")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "indexheader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Ctrl Alt Elite", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    class: "blink"
  }, "_"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "pageinfo"
  }, displayMembers));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/fonts/stylesheet.css":
/*!**********************************!*\
  !*** ./src/fonts/stylesheet.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/abigail_portrait.jpeg":
/*!******************************************!*\
  !*** ./src/images/abigail_portrait.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/abigail_portrait-23e157ba4db20a8341ce2306dfd727e7.jpeg");

/***/ }),

/***/ "./src/images/cathrynlyonss.jpeg":
/*!***************************************!*\
  !*** ./src/images/cathrynlyonss.jpeg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/cathrynlyonss-c554e4b1899264f17f5d0ef98cb6140f.jpeg");

/***/ }),

/***/ "./src/images/group_photo.png":
/*!************************************!*\
  !*** ./src/images/group_photo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/group_photo-d7aaa35e319848fa6aec1a735d2295fe.png");

/***/ }),

/***/ "./src/images/ryan_portrait.jpg":
/*!**************************************!*\
  !*** ./src/images/ryan_portrait.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/ryan_portrait-3026c0ec273217e93e9f1574824d81a3.jpg");

/***/ }),

/***/ "./src/images/tucker_portrait.jpeg":
/*!*****************************************!*\
  !*** ./src/images/tucker_portrait.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/tucker_portrait-360ef34f91518f0baf3c3a9bbfa05808.jpeg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map