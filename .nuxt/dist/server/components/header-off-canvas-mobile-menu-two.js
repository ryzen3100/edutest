exports.ids = [32];
exports.modules = {

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/OffCanvasMobileMenuTwo.vue?vue&type=template&id=7918c2e6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "edublink-vue-mobile-popup-menu",
    attrs: {
      "id": "offcanvas-menu"
    }
  }, [_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "), _vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"header-top\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm.$colorMode.value === 'light' ? _c('img', {
    staticClass: "logo-light",
    attrs: {
      "src": "/images/logo/logo-dark-2.png",
      "alt": "Dark Logo"
    }
  }) : _vm._e(), _vm._v(" "), _vm.$colorMode.value === 'dark' ? _c('img', {
    staticClass: "logo-dark",
    attrs: {
      "src": "/images/logo/logo-white.png",
      "alt": "Light Logo"
    }
  }) : _vm._e()])], 1), _vm._ssrNode(" <div class=\"close-menu\"><button class=\"close-button\"><i class=\"icon-73\"></i></button></div>")], 2), _vm._ssrNode(" "), _c('MobileMenu')], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/OffCanvasMobileMenuTwo.vue?vue&type=template&id=7918c2e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/OffCanvasMobileMenuTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var OffCanvasMobileMenuTwovue_type_script_lang_js_ = ({
  components: {
    MobileMenu: () => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 210)),
    ColorMode: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 259))
  },
  methods: {
    // Off-canvas Mobile Menu Close
    mobileMenuClose(triggerRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (triggerRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/header/OffCanvasMobileMenuTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_OffCanvasMobileMenuTwovue_type_script_lang_js_ = (OffCanvasMobileMenuTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header/OffCanvasMobileMenuTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_OffCanvasMobileMenuTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2243975c"
  
)

/* harmony default export */ var OffCanvasMobileMenuTwo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-off-canvas-mobile-menu-two.js.map