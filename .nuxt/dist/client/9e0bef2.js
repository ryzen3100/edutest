(window.webpackJsonp=window.webpackJsonp||[]).push([[152,100,127],{404:function(t,e,n){"use strict";n.r(e);var r=n(405),o={props:["number","decimal","suffix","duration","startVal"],components:{countTo:n.n(r).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},405:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},409:function(t,e,n){"use strict";n.r(e);n(20),n(28),n(29);var r={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,589))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,530))}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-gap-large edu-about-area about-style-7"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5 align-items-center"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Providing The <span class="color-secondary">Best Quality</span> Online Courses.',subTitle:"Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"about-image-gallery"},[e("img",{staticClass:"main-img-1",attrs:{src:"/images/about/about-11.jpg",alt:"About Image"}}),t._v(" "),e("img",{staticClass:"main-img-2",attrs:{src:"/images/about/about-12.jpg","data-aos-delay":"150","data-aos":"fade-down","data-aos-duration":"800",alt:"About Image"}}),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-38.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-37.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-1.8",imgSrc:"/images/about/shape-04.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),t._m(1)],1)])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"features-list",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("li",[t._v("Flexible Classes")]),t._v(" "),e("li",[t._v("Offline Classe Mode")]),t._v(" "),e("li",[t._v("Educator Support")])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-4 scene",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{attrs:{src:"/images/counterup/shape-02.png",alt:"Shape"}})])},function(){var t=this._self._c;return t("ul",{staticClass:"shape-group"},[t("li",{staticClass:"shape-1",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})])}],!1,null,null,null);e.default=component.exports},533:function(t,e,n){"use strict";n.r(e);n(20),n(28),n(29);var r={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,225))},BreadCrumbThree:function(){return n.e(31).then(n.bind(null,588))},About:function(){return n.e(200).then(n.bind(null,657))},FunFact:function(){return n.e(201).then(n.bind(null,519))},WhyChoose:function(){return n.e(25).then(n.bind(null,586))},ContactInfo:function(){return n.e(22).then(n.bind(null,583))},Instructor:function(){return n.e(23).then(n.bind(null,584))},Testimonial:function(){return n.e(24).then(n.bind(null,585))},FooterOne:function(){return Promise.resolve().then(n.bind(null,226))}},head:function(){return{title:"About Us 3"}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne"),t._v(" "),e("BreadCrumbThree",{attrs:{title:"About Us 3"}}),t._v(" "),e("About"),t._v(" "),e("FunFact"),t._v(" "),e("WhyChoose"),t._v(" "),e("ContactInfo"),t._v(" "),e("Instructor"),t._v(" "),e("Testimonial"),t._v(" "),e("FooterOne")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(225).default,About:n(409).default,FunFact:n(404).default,FooterOne:n(226).default})}}]);