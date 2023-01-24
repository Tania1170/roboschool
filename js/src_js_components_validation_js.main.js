"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_validation_js"],{

/***/ "./src/js/components/validation.js":
/*!*****************************************!*\
  !*** ./src/js/components/validation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_validate_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/validate-forms */ "./src/js/functions/validate-forms.js");

const rules = [{
  ruleSelector: '.input-name',
  rules: [{
    rule: 'minLength',
    value: 3
  }, {
    rule: 'required',
    value: true,
    errorMessage: 'Заполните имя!'
  }]
}, {
  ruleSelector: '.input-tel',
  tel: true,
  telError: 'Введите корректный телефон',
  rules: [{
    rule: 'required',
    value: true,
    errorMessage: 'Заполните телефон!'
  }]
}, {
  ruleSelector: '.input-email',
  tel: true,
  telError: 'Заполните Email',
  rules: [{
    rule: 'required',
    value: true,
    errorMessage: 'Введите корректный Email!'
  }]
}];
const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};
(0,_functions_validate_forms__WEBPACK_IMPORTED_MODULE_0__.validateForms)('.order__form', rules, afterForm);

/***/ }),

/***/ "./src/js/functions/validate-forms.js":
/*!********************************************!*\
  !*** ./src/js/functions/validate-forms.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateForms": () => (/* binding */ validateForms)
/* harmony export */ });
/* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);


const validateForms = (selector, rules, afterSend) => {
  var _document;
  const form = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(selector);
  const telSelector = form === null || form === void 0 ? void 0 : form.querySelector('input[type="tel"]');
  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }
  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }
  if (telSelector) {
    const inputMask = new (inputmask__WEBPACK_IMPORTED_MODULE_1___default())('+7 (999) 999-99-99');
    inputMask.mask(telSelector);
    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }
  const validation = new just_validate__WEBPACK_IMPORTED_MODULE_0__["default"](selector);
  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }
  validation.onSuccess(ev => {
    let formData = new FormData(ev.target);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log('Отправлено');
        }
      }
    };
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    ev.target.reset();
  });
};

/***/ })

}]);
//# sourceMappingURL=src_js_components_validation_js.main.js.map