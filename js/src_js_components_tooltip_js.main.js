"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_tooltip_js"],{

/***/ "./src/js/components/tooltip.js":
/*!**************************************!*\
  !*** ./src/js/components/tooltip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");

const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt');
(0,_popperjs_core__WEBPACK_IMPORTED_MODULE_0__.createPopper)(el, tooltip, {
  placement: 'top-start',
  modifiers: [{
    name: 'offset',
    options: {
      offset: [0, 10]
    }
  }]
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_tooltip_js.main.js.map