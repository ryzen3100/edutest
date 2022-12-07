(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{426:function(e,t,o){"use strict";o(20),o(34);var n=o(427),r=o.n(n);t.a=function(){var e=document.querySelectorAll(".rellax");e&&e.forEach((function(e,t){new r.a(e)}))}},427:function(e,t,o){(function(o){var n,r,l;"undefined"!=typeof window&&window,r=[],void 0===(l="function"==typeof(n=function(){var e=function(t,o){"use strict";var n=Object.create(e.prototype),r=0,l=0,c=0,d=0,m=[],v=!0,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},w=null,x=!1;try{var h=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}catch(e){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,A=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();function C(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(i){"number"!=typeof i&&(o=!1),null!==e&&i<e&&(t=!1),e=i})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&C(),t||(t=".rellax");var z="string"==typeof t?document.querySelectorAll(t):[t];if(z.length>0){if(n.elems=z,n.options.wrapper&&!n.options.wrapper.nodeType){var _=document.querySelector(n.options.wrapper);if(!_)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=_}var T,L=function(e){var t=n.options.breakpoints;return e<t[0]?"xs":e>=t[0]&&e<t[1]?"sm":e>=t[1]&&e<t[2]?"md":"lg"},E=function(){for(var i=0;i<n.elems.length;i++){var e=k(n.elems[i]);m.push(e)}},S=function(){for(var i=0;i<m.length;i++)n.elems[i].style.cssText=m[i].style;m=[],l=window.innerHeight,d=window.innerWidth,T=L(d),O(),E(),animate(),v&&(window.addEventListener("resize",S),v=!1,M())},k=function(e){var t,o=e.getAttribute("data-rellax-percentage"),r=e.getAttribute("data-rellax-speed"),c=e.getAttribute("data-rellax-xs-speed"),m=e.getAttribute("data-rellax-mobile-speed"),v=e.getAttribute("data-rellax-tablet-speed"),f=e.getAttribute("data-rellax-desktop-speed"),w=e.getAttribute("data-rellax-vertical-speed"),x=e.getAttribute("data-rellax-horizontal-speed"),h=e.getAttribute("data-rellax-vertical-scroll-axis"),y=e.getAttribute("data-rellax-horizontal-scroll-axis"),A=e.getAttribute("data-rellax-zindex")||0,C=e.getAttribute("data-rellax-min"),z=e.getAttribute("data-rellax-max"),_=e.getAttribute("data-rellax-min-x"),L=e.getAttribute("data-rellax-max-x"),E=e.getAttribute("data-rellax-min-y"),S=e.getAttribute("data-rellax-max-y"),k=!0;c||m||v||f?t={xs:c,sm:m,md:v,lg:f}:k=!1;var O=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(O=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var X=n.options.vertical&&(o||n.options.center)?O:0,M=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,R=X+e.getBoundingClientRect().top,W=e.clientHeight||e.offsetHeight||e.scrollHeight,F=M+e.getBoundingClientRect().left,N=e.clientWidth||e.offsetWidth||e.scrollWidth,P=o||(X-R+l)/(W+l),j=o||(M-F+d)/(N+d);n.options.center&&(j=.5,P=.5);var H=k&&null!==t[T]?Number(t[T]):r||n.options.speed,B=w||n.options.verticalSpeed,D=x||n.options.horizontalSpeed,J=h||n.options.verticalScrollAxis,Q=y||n.options.horizontalScrollAxis,I=Y(j,P,H,B,D),style=e.style.cssText,G="",K=/transform\s*:/i.exec(style);if(K){var U=K.index,V=style.slice(U),Z=V.indexOf(";");G=Z?" "+V.slice(11,Z).replace(/\s/g,""):" "+V.slice(11).replace(/\s/g,"")}return{baseX:I.x,baseY:I.y,top:R,left:F,height:W,width:N,speed:H,verticalSpeed:B,horizontalSpeed:D,verticalScrollAxis:J,horizontalScrollAxis:Q,style:style,transform:G,zindex:A,min:C,max:z,minX:_,maxX:L,minY:E,maxY:S}},O=function(){var e=r,t=c;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,c=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(e==r||!n.options.vertical)||!(t==c||!n.options.horizontal)},Y=function(e,t,o,r,l){var c={},d=(l||o)*(100*(1-e)),m=(r||o)*(100*(1-t));return c.x=n.options.round?Math.round(d):Math.round(100*d)/100,c.y=n.options.round?Math.round(m):Math.round(100*m)/100,c},X=function(){window.removeEventListener("resize",X),window.removeEventListener("orientationchange",X),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",X),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",X),w=f(M)},M=function(){O()&&!1===v?(animate(),w=f(M)):(w=null,window.addEventListener("resize",X),window.addEventListener("orientationchange",X),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",X,!!x&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",X,!!x&&{passive:!0}))},animate=function(){for(var e,i=0;i<n.elems.length;i++){var t=m[i].verticalScrollAxis.toLowerCase(),o=m[i].horizontalScrollAxis.toLowerCase(),v=-1!=t.indexOf("x")?r:0,f=-1!=t.indexOf("y")?r:0,w=-1!=o.indexOf("x")?c:0,x=(f+(-1!=o.indexOf("y")?c:0)-m[i].top+l)/(m[i].height+l),h=(v+w-m[i].left+d)/(m[i].width+d),y=(e=Y(h,x,m[i].speed,m[i].verticalSpeed,m[i].horizontalSpeed)).y-m[i].baseY,C=e.x-m[i].baseX;null!==m[i].min&&(n.options.vertical&&!n.options.horizontal&&(y=y<=m[i].min?m[i].min:y),n.options.horizontal&&!n.options.vertical&&(C=C<=m[i].min?m[i].min:C)),null!=m[i].minY&&(y=y<=m[i].minY?m[i].minY:y),null!=m[i].minX&&(C=C<=m[i].minX?m[i].minX:C),null!==m[i].max&&(n.options.vertical&&!n.options.horizontal&&(y=y>=m[i].max?m[i].max:y),n.options.horizontal&&!n.options.vertical&&(C=C>=m[i].max?m[i].max:C)),null!=m[i].maxY&&(y=y>=m[i].maxY?m[i].maxY:y),null!=m[i].maxX&&(C=C>=m[i].maxX?m[i].maxX:C);var z=m[i].zindex,_="translate3d("+(n.options.horizontal?C:"0")+"px,"+(n.options.vertical?y:"0")+"px,"+z+"px) "+m[i].transform;n.elems[i].style[A]=_}n.options.callback(e)};return n.destroy=function(){for(var i=0;i<n.elems.length;i++)n.elems[i].style.cssText=m[i].style;v||(window.removeEventListener("resize",S),v=!0),y(w),w=null},S(),n.refresh=S,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?n.apply(t,r):n)||(e.exports=l)}).call(this,o(35))},590:function(e,t,o){"use strict";o.r(t);o(20),o(28),o(29);var n=o(426),r={components:{MouseMove:function(){return Promise.all([o.e(1),o.e(0)]).then(o.bind(null,530))}},mounted:function(){Object(n.a)()},data:function(){return{features:[{title:"High Quality Courses",details:"Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",iconClass:"icon-45",colorClass:"color-primary-style"},{title:"Life Time Access",details:"Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",iconClass:"icon-46",colorClass:"color-secondary-style"},{title:"Expert Instructors",details:"Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore dolore magna.",iconClass:"icon-47",colorClass:"color-extra08-style"}]}}},l=o(13),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"why-choose-area-3 edu-section-gap"},[t("div",{staticClass:"container"},[e._m(0),e._v(" "),t("div",{staticClass:"row g-5"},e._l(e.features,(function(o,n){return t("div",{key:n,staticClass:"col-lg-4",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[t("div",{staticClass:"why-choose-box-2 features-box",class:o.colorClass},[t("div",{staticClass:"icon"},[t("i",{class:o.iconClass})]),e._v(" "),t("div",{staticClass:"content"},[t("h4",{staticClass:"title"},[e._v(e._s(o.title))]),e._v(" "),t("p",[e._v(e._s(o.details))])])])])})),0)]),e._v(" "),t("ul",{staticClass:"shape-group"},[t("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:".8"}}),e._v(" "),t("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-13.png"}}),e._v(" "),e._m(1)],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row row--45"},[t("div",{staticClass:"section-title-flex section-title",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[t("div",{staticClass:"left-content"},[t("h2",{staticClass:"title"},[e._v("We Providing The "),t("br"),e._v(" Best "),t("span",{staticClass:"color-secondary"},[e._v("Quality Online ")]),e._v(" Courses")]),e._v(" "),t("span",{staticClass:"shape-line"},[t("i",{staticClass:"icon-19"})])]),e._v(" "),t("div",{staticClass:"right-content"},[t("p",[e._v("Lorem ipsum dolor sit amet cons etur adipisicing elit sed do eiusm aut tempor incididunt labore dolore magna aliqua quis nostrud ex ertation lamcolab oris aliquip.")])])])])},function(){var e=this._self._c;return e("li",{staticClass:"shape-3"},[e("img",{staticClass:"rellax",attrs:{"data-rellax-speed":"-1.3","data-rellax-xs-speed":"-1.3","data-rellax-mobile-speed":"-0.5","data-rellax-tablet-speed":"-0.5",src:"/images/faq/shape-12.png",alt:"shape"}})])}],!1,null,null,null);t.default=component.exports}}]);