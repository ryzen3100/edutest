exports.ids = [87];
exports.modules = {

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-university/Video.vue?vue&type=template&id=7ef2b210&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"video-area-2 bg-image--14 bg-image\"><div class=\"container\"><div class=\"row justify-content-center\"><div class=\"col-lg-6 col-md-8\"><div class=\"video-banner-content\"><div class=\"video-btn\">" + _vm._ssrList(_vm.items, function (_, imageIndex) {
    return "<span><a class=\"video-play-btn video-popup-activation\"><i class=\"icon-18\"></i></a></span>";
  }) + "</div> <h2 class=\"title\">Take a Video Tour to Learn Intro of Campus</h2></div></div></div></div></div> "), _c('CoolLightBox', {
    attrs: {
      "items": _vm.items,
      "index": _vm.index
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-university/Video.vue?vue&type=template&id=7ef2b210&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-university/Video.vue?vue&type=script&lang=js&
/* harmony default export */ var Videovue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
      }],
      index: null
    };
  }

});
// CONCATENATED MODULE: ./components/home-university/Video.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_university_Videovue_type_script_lang_js_ = (Videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-university/Video.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_university_Videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ac5c598"
  
)

/* harmony default export */ var Video = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-university-video.js.map