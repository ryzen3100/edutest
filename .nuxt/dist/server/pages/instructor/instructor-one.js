exports.ids = [175,143];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/instructor/InstructorTwo.vue?vue&type=template&id=65742836&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "edu-team-grid team-style-2"
  }, [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail-wrap\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/instructor/instructor-profile"
    }
  }, [_c('img', {
    attrs: {
      "src": '/images/team/team-02/' + _vm.instructor.imgSrc,
      "alt": _vm.instructor.name + ' Thumbnail'
    }
  })])], 1), _vm._ssrNode(" <ul class=\"team-share-info\">" + _vm._ssrList(_vm.instructor.socialLinks, function (social, key) {
    return "<li><a" + _vm._ssrAttr("aria-label", social.name) + _vm._ssrAttr("href", social.url) + "><i" + _vm._ssrClass(null, social.iconName) + "></i></a></li>";
  }) + "</ul>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
    attrs: {
      "to": "/instructor/instructor-profile"
    }
  }, [_vm._v(_vm._s(_vm.instructor.name))])], 1), _vm._ssrNode(" <span class=\"designation\">" + _vm._ssrEscape(_vm._s(_vm.instructor.designation)) + "</span> <p>" + _vm._ssrEscape(_vm._s(_vm.instructor.excerpt)) + "</p>")], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/instructor/InstructorTwo.vue?vue&type=template&id=65742836&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/instructor/InstructorTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var InstructorTwovue_type_script_lang_js_ = ({
  props: ['instructor']
});
// CONCATENATED MODULE: ./components/instructor/InstructorTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var instructor_InstructorTwovue_type_script_lang_js_ = (InstructorTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/instructor/InstructorTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  instructor_InstructorTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d64c9fbe"
  
)

/* harmony default export */ var InstructorTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/instructor/instructor-one.vue?vue&type=template&id=a25c307c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('HeaderOne'), _vm._ssrNode(" "), _c('BreadCrumbOne', {
    attrs: {
      "pageTitle": "Instructor 1",
      "title": "Leadership Instruction"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"edu-team-area team-area-2 edu-section-gap\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Instructors",
      "title": "Course Instructors",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.instructorData.instructors.slice(0, 6), function (instructor, key) {
    return _vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-lg-4 col-md-6\">", "</div>", [_c('InstructorTwo', {
      attrs: {
        "instructor": instructor
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _c('FooterOne')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/instructor/instructor-one.vue?vue&type=template&id=a25c307c&

// EXTERNAL MODULE: ./data/instructor.json
var instructor = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/instructor/instructor-one.vue?vue&type=script&lang=js&

/* harmony default export */ var instructor_onevue_type_script_lang_js_ = ({
  components: {
    HeaderOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    BreadCrumbOne: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 267)),
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 269)),
    InstructorTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 107)),
    FooterOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33))
  },

  data() {
    return {
      instructorData: instructor
    };
  },

  head() {
    return {
      title: 'Instructor 1'
    };
  }

});
// CONCATENATED MODULE: ./pages/instructor/instructor-one.vue?vue&type=script&lang=js&
 /* harmony default export */ var instructor_instructor_onevue_type_script_lang_js_ = (instructor_onevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/instructor/instructor-one.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  instructor_instructor_onevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e03cbd70"
  
)

/* harmony default export */ var instructor_one = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOne: __webpack_require__(32).default,InstructorTwo: __webpack_require__(107).default,FooterOne: __webpack_require__(33).default})


/***/ }),

/***/ 98:
/***/ (function(module) {

module.exports = JSON.parse("{\"instructors\":[{\"imgSrc\":\"team-01.jpg\",\"name\":\"Jane Seymour\",\"designation\":\"UI Designer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-02.jpg\",\"name\":\"Edward Norton\",\"designation\":\"Web Developer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-03.jpg\",\"name\":\"Penelope Cruz\",\"designation\":\"Digital Marketer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-04.jpg\",\"name\":\"John Travolta\",\"designation\":\"WordPress Expert\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-05.jpg\",\"name\":\"Hilary Swank\",\"designation\":\"Laravel Expert\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-06.jpg\",\"name\":\"Steve Martin\",\"designation\":\"App Developer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-07.jpg\",\"name\":\"Louis Vargas\",\"designation\":\"WordPress Expert\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-08.jpg\",\"name\":\"Tamara Wilson\",\"designation\":\"Affiliate Markeer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]}],\"yogaInstructors\":[{\"imgSrc\":\"team-01.jpg\",\"name\":\"Jane Seymour\",\"designation\":\"Yoga Trainer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-02.jpg\",\"name\":\"Edward Norton\",\"designation\":\"Yoga Trainer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]},{\"imgSrc\":\"team-03.jpg\",\"name\":\"Penelope Cruz\",\"designation\":\"Yoga Trainer\",\"excerpt\":\"Consectetur adipisicing elit, sed do eius mod tempor incididunt\",\"socialLinks\":[{\"name\":\"Facebook\",\"iconName\":\"icon-facebook\",\"url\":\"https://www.facebook.com\"},{\"name\":\"Twitter\",\"iconName\":\"icon-twitter\",\"url\":\"https://www.twitter.com\"},{\"name\":\"LinkedIn\",\"iconName\":\"icon-linkedin2\",\"url\":\"https://www.linkedin.com\"}]}]}");

/***/ })

};;
//# sourceMappingURL=instructor-one.js.map