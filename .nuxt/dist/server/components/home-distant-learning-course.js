exports.ids = [37];
exports.modules = {

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-distant-learning/Course.vue?vue&type=template&id=8926efb4&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "edu-course-area course-area-2 gap-tb-text bg-lighten03"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "preTitle": "Popular Courses",
      "title": "Pick A Course To Get Started",
      "alignment": "section-center"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row g-5\">", "</div>", _vm._l(_vm.courseData.courses.slice(0, 3), function (course) {
    return _vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"col-md-6 col-lg-4\">", "</div>", [_vm._ssrNode("<div class=\"edu-course course-style-1 hover-button-bg-white\">", "</div>", [_vm._ssrNode("<div class=\"inner\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
      attrs: {
        "to": "/course/course-details"
      }
    }, [_c('img', {
      attrs: {
        "src": '/images/course/course-type-01-02/' + course.image,
        "alt": course.alt
      }
    })]), _vm._ssrNode(" <div class=\"time-top\"><span class=\"duration\"><i class=\"icon-61\"></i>" + _vm._ssrEscape(_vm._s(course.duration)) + "</span></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<span class=\"course-level\">" + _vm._ssrEscape(_vm._s(course.level)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/course/course-details"
      }
    }, [_vm._v(_vm._s(course.title))])], 1), _vm._ssrNode(" <div class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(course.ratingAvarage) + " /" + _vm._s(course.ratingTotal) + " " + _vm._s(course.ratingTotal > 1 ? 'Ratings' : 'Rating') + ")") + "</span></div> <div class=\"course-price\">" + _vm._ssrEscape("$" + _vm._s(course.currentPrice)) + "</div> <ul class=\"course-meta\"><li><i class=\"icon-24\"></i>" + _vm._ssrEscape(_vm._s(course.lessons) + " " + _vm._s(course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li><i class=\"icon-25\"></i>" + _vm._ssrEscape(_vm._s(course.students) + " " + _vm._s(course.students ? 'Students' : 'Student')) + "</li></ul>")], 2)], 2), _vm._ssrNode(" <div class=\"course-hover-content-wrapper\"><button class=\"wishlist-btn\"><i class=\"icon-22\"></i></button></div> "), _vm._ssrNode("<div class=\"course-hover-content\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<button class=\"wishlist-btn\"><i class=\"icon-22\"></i></button> <span class=\"course-level\">" + _vm._ssrEscape(_vm._s(course.level)) + "</span> "), _vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/course/course-details"
      }
    }, [_vm._v(_vm._s(course.title))])], 1), _vm._ssrNode(" <div class=\"course-rating\"><div class=\"rating\"><i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i> <i class=\"icon-23\"></i></div> <span class=\"rating-count\">" + _vm._ssrEscape("(" + _vm._s(course.ratingAvarage) + " /" + _vm._s(course.ratingTotal + course.ratingTotal > 1 ? 'Ratings' : 'Rating') + ")") + "</span></div> <div class=\"course-price\">" + _vm._ssrEscape("$" + _vm._s(course.currentPrice)) + "</div> <p>" + _vm._ssrEscape(_vm._s(course.excerpt)) + "</p> <ul class=\"course-meta\"><li><i class=\"icon-24\"></i>" + _vm._ssrEscape(_vm._s(course.lessons + course.lessons > 1 ? 'Lessons' : 'Lesson')) + "</li> <li><i class=\"icon-25\"></i>" + _vm._ssrEscape(_vm._s(course.students + course.students ? 'Students' : 'Student')) + "</li></ul> "), _c('n-link', {
      staticClass: "edu-btn btn-secondary btn-small",
      attrs: {
        "to": "/course/course-details"
      }
    }, [_vm._v("Enrolled "), _c('i', {
      staticClass: "icon-4"
    })])], 2)])], 2)]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div data-aos-delay=\"150\" data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"course-view-all\">", "</div>", [_c('n-link', {
    staticClass: "edu-btn",
    attrs: {
      "to": "/course/course-one"
    }
  }, [_vm._v("Browse more courses "), _c('i', {
    staticClass: "icon-4"
  })])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-distant-learning/Course.vue?vue&type=template&id=8926efb4&

// EXTERNAL MODULE: ./data/course.json
var course = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-distant-learning/Course.vue?vue&type=script&lang=js&

/* harmony default export */ var Coursevue_type_script_lang_js_ = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 269))
  },

  data() {
    return {
      courseData: course
    };
  }

});
// CONCATENATED MODULE: ./components/home-distant-learning/Course.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_distant_learning_Coursevue_type_script_lang_js_ = (Coursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-distant-learning/Course.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_distant_learning_Coursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1bdbf356"
  
)

/* harmony default export */ var Course = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"id\":1,\"title\":\"Starting SEO as your Home Based Business\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"4 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"8\",\"currentPrice\":\"49.00\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Management\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Edward Norton\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":2,\"title\":\"The Complete Camtasia Course for Content Creators\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"7 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"9\",\"currentPrice\":\"39.00\",\"lessons\":\"61\",\"students\":\"55\",\"category\":\"Business\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Jane Seymour\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":3,\"title\":\"Building A Better World One Student At A Time\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"8 Weeks\",\"level\":\"All Levels\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"5\",\"currentPrice\":\"59.00\",\"lessons\":\"15\",\"students\":\"40\",\"category\":\"Economics\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Penelope Cruz\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":4,\"title\":\"Java Programming Masterclass for Software Developers\",\"image\":\"course-04.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"5 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"9\",\"currentPrice\":\"49.00\",\"lessons\":\"25\",\"students\":\"87\",\"category\":\"Software\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"John Travolta\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":5,\"title\":\"Angular & NodeJS - The MEAN Stack Guide [2023 Edition]\",\"image\":\"course-05.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"12 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"6\",\"currentPrice\":\"29.00\",\"lessons\":\"35\",\"students\":\"74\",\"category\":\"Software\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Edward Norton\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":6,\"title\":\"The Complete React Developer Course (Hooks and Redux)\",\"image\":\"course-06.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"15 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"4.7\",\"ratingTotal\":\"8\",\"currentPrice\":\"69.00\",\"lessons\":\"10\",\"students\":\"45\",\"category\":\"Software\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Jane Seymour\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":7,\"title\":\"Build an app with ASPNET Core & Angular from Scratch Begainer\",\"image\":\"course-07.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"8 Weeks\",\"level\":\"All Levels\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"4\",\"currentPrice\":\"19.00\",\"lessons\":\"15\",\"students\":\"27\",\"category\":\"Software\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Jane Seymour\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":8,\"title\":\"Become a WordPress Developer: Unlocking Power with Code\",\"image\":\"course-08.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"14 Weeks\",\"level\":\"Beginner\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"9\",\"currentPrice\":\"49.00\",\"lessons\":\"31\",\"students\":\"90\",\"category\":\"Software\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Penelope Cruz\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":9,\"title\":\"Build Responsive Real- World Websites with HTML and CSS\",\"image\":\"course-09.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"8 Weeks\",\"level\":\"All Levels\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"7\",\"currentPrice\":\"69.00\",\"lessons\":\"29\",\"students\":\"14\",\"category\":\"Development\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"John Travolta\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":10,\"title\":\"Vue - The Complete Guide (w/ Router, Vuex, Composition API)\",\"image\":\"course-10.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"11 Weeks\",\"level\":\"Basic\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"5\",\"currentPrice\":\"59.00\",\"lessons\":\"20\",\"students\":\"86\",\"category\":\"Development\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Edward Norton\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":11,\"title\":\"Master Microservices with Spring Boot and Spring Cloud\",\"image\":\"course-11.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"12 Weeks\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"3\",\"currentPrice\":\"49.00\",\"lessons\":\"41\",\"students\":\"74\",\"category\":\"Software\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"Penelope Cruz\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]},{\"id\":12,\"title\":\"The Complete Angular Course: Beginner to Advanced\",\"image\":\"course-12.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"7 Weeks\",\"level\":\"Basic\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"6\",\"currentPrice\":\"19.00\",\"lessons\":\"18\",\"students\":\"47\",\"category\":\"Development\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\",\"excerpt2\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"instructor\":\"John Travolta\",\"language\":\"English\",\"certificate\":true,\"features\":[\"Learn to use Python professionally, learning both Python 2 & Python 3!\",\"Build 6 beautiful real-world projects for your portfolio (not boring toy\",\"Understand the Theory behind Vue.js and use it in Real Projects\"]}],\"universityCourses\":[{\"id\":1,\"title\":\"Public Administration\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.9\",\"ratingTotal\":\"8\",\"currentPrice\":\"49.00\",\"category\":\"Management\",\"type\":\"Onsite Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"title\":\"Major in Economics\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"5.0\",\"ratingTotal\":\"9\",\"currentPrice\":\"39.00\",\"category\":\"Economics\",\"type\":\"Online + Onsite\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"title\":\"Business Studies\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"ratingAvarage\":\"4.8\",\"ratingTotal\":\"5\",\"currentPrice\":\"59.00\",\"category\":\"Business\",\"type\":\"Online Only\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"kitchenCourses\":[{\"id\":1,\"title\":\"Healthy Sushi Roll - Japanese Popular Cooking Class\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"35 hrs\",\"level\":\"Advanced\",\"ratingAvarage\":\"4.9\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Professional Japanese cooking from beginners to experts\",\"Will be able to cook authentic Italian recipes in their own kitchen\",\"Understand the HOW of cooking, before thinking of the WHAT to cook.\"]},{\"id\":2,\"title\":\"Nutrition Kitchen - Basics of Cooking for Busy People\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"29 hrs\",\"level\":\"Beginner\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Prepare a huge variety of simple, delicious, healthy recipes.\",\"Professional Indian cooking from beginners to experts\",\"Serve delicious and healthy meals for your loved ones.\"]},{\"id\":3,\"title\":\"Vegan Thai Cooking Classes Popular Vegan Recipes\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"duration\":\"14 hrs\",\"level\":\"Intermediate\",\"ratingAvarage\":\"5.0\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Cooking\",\"excerpt3\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor.\",\"features\":[\"Cook much loved recipes like ravioli, pizza and pesto from scratch\",\"Cook better than restaurant Thai food at home\",\"Keep your food safe from harmful bacteria and disease.\"]}],\"kindergartenCourses\":[{\"id\":1,\"colorClass\":\"bg-color-extra02\",\"title\":\"The Ultimate Drawing Course - Beginner to Advanced\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Drawing\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":2,\"colorClass\":\"bg-color-secondary\",\"title\":\"Powerful Calming Techniques For Kids and Teens\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"59\",\"students\":\"67\",\"category\":\"Techniques\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"},{\"id\":3,\"colorClass\":\"bg-color-primary\",\"title\":\"Parenting Skills to Raise Responsible Children\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"24\",\"students\":\"80\",\"category\":\"Parenting\",\"excerpt\":\"Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.\"}],\"yogaCourses\":[{\"id\":1,\"title\":\"Yoga for Back Pain Relief\",\"image\":\"course-01.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"30\",\"lessons\":\"15\",\"students\":\"31\",\"category\":\"Meditation\"},{\"id\":2,\"title\":\"Super Brain YOGA\",\"image\":\"course-02.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"40\",\"lessons\":\"18\",\"students\":\"43\",\"category\":\"Power Yoga\"},{\"id\":3,\"title\":\"Chair Yoga for Seniors\",\"image\":\"course-03.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"50\",\"lessons\":\"35\",\"students\":\"16\",\"category\":\"Pranayama\"},{\"id\":4,\"title\":\"Online Yoga for Beginners\",\"image\":\"course-04.jpg\",\"alt\":\"Course Thumb\",\"currentPrice\":\"60\",\"lessons\":\"22\",\"students\":\"56\",\"category\":\"Power Yoga\"}]}");

/***/ })

};;
//# sourceMappingURL=home-distant-learning-course.js.map