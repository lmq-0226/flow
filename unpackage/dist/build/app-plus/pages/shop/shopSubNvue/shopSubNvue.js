!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=52)}([function(t,e){t.exports={"@VERSION":2}},function(t,e,i){"use strict";function n(t,e,i,n,s,o,r,a,h,c){var l,p="function"==typeof t?t.options:t;if(h){p.components||(p.components={});var u=Object.prototype.hasOwnProperty;for(var f in h)u.call(h,f)&&!u.call(p.components,f)&&(p.components[f]=h[f])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=i,p._compiled=!0),n&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=l):s&&(l=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(p.functional){p._injectStyles=l;var d=p.render;p.render=function(t,e){return l.call(e),d(t,e)}}else{var g=p.beforeCreate;p.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:p}}i.d(e,"a",(function(){return n}))},function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(3).default,Vue.prototype.__$appStyle__)},function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=s.a},function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function s(){return"string"==typeof __channelId__&&__channelId__}function o(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];console[t].apply(console,i)},e.default=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=e.shift();if(s())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),h="";if(a.length>1){var c=a.pop();h=a.join("---COMMA---"),0===c.indexOf(" at ")?h+=c:h+="---COMMA---"+c}else h=a[0];console[r](h)}},,,function(t,e,i){"use strict";var n=i(28),s=i(20),o=i(1);var r=Object(o.a)(s.default,n.b,n.c,!1,null,"2af2f260","99fa545e",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(38).default,this.options.style):Object.assign(this.options.style,i(38).default)}).call(r),e.default=r.exports},,,,,,,,,,,,,function(t,e,i){"use strict";var n=i(21),s=i.n(n);e.default=s.a},function(t,e,i){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={components:{mpHtml:((n=i(53))&&n.__esModule?n:{default:n}).default},data:function(){return{plan:!0,htmls:'\n\t\t\t\t\u611f\u8c22\u60a8\u9009\u62e9\u6d41\u8c61APP!\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u548c\u9690\u79c1\u4fdd\u62a4\u3002\n\t\t\t\t\u4e3a\u4e86\u66f4\u597d\u5730\u4fdd\u969c\u60a8\u7684\u4e2a\u4eba\u6743\u76ca\uff0c\u5728\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u524d\uff0c\n\t\t\t\t\u8bf7\u52a1\u5fc5\u5ba1\u614e\u9605\u8bfb\u300a\u9690\u79c1\u653f\u7b56\u300b\u548c\u300a\u7528\u6237\u534f\u8bae\u300b\u5185\u7684\u6240\u6709\u6761\u6b3e\uff0c\n\t\t\t\t\u5c24\u5176\u662f:1.\u6211\u4eec\u5bf9\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u7684\u6536\u96c6/\u4fdd\u5b58/\u4f7f\u7528/\u5bf9\u5916\u63d0\u4f9b/\u4fdd\u62a4\u7b49\u89c4\u5219\u6761\u6b3e\uff0c\u4ee5\u53ca\u60a8\u7684\u7528\u6237\u6743\u5229\u7b49\u6761\u6b3e; \n\t\t\t\t2. \u7ea6\u5b9a\u6211\u4eec\u7684\u9650\u5236\u8d23\u4efb\u3001\u514d\u8d23\u6761\u6b3e; 3.\u5176\u4ed6\u4ee5\u989c\u8272\u6216\u52a0\u7c97\u8fdb\u884c\u6807\u8bc6\u7684\u91cd\u8981\u6761\u6b3e\u3002\u5982\u60a8\u5bf9\u4ee5\u4e0a\u534f\u8bae\u6709\u4efb\u4f55\u7591\u95ee\uff0c\n\t\t\t\t\u53ef\u901a\u8fc7\u4eba\u5de5\u5ba2\u670d\u6216\u53d1\u90ae\u4ef6\u81f32827708043@qq.com \u4e0e\u6211\u4eec\u8054\u7cfb\u3002\u60a8\u70b9\u51fb"\u540c\u610f\u5e76\u7ee7\u7eed\u201d\u7684\u884c\u4e3a\u5373\u8868\u793a\u60a8\u5df2\u9605\u8bfb\u5b8c\u6bd5\u5e76\u540c\u610f\u4ee5\u4e0a\u534f\u8bae\u7684\u5168\u90e8\u5185\u5bb9\u3002\n\t\t\t\t\u5982\u60a8\u540c\u610f\u4ee5\u4e0a\u534f\u8bae\u5185\u5bb9\uff0c\u8bf7\u70b9\u51fb"\u540c\u610f\u5e76\u7ee7\u7eed\u201d\uff0c\u5f00\u59cb\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u548c\u670d\u52a1!\n\t\t\t'}},onShow:function(){plus.key.addEventListener("backbutton",(function(){t("log","BackButton Key pressed!"," at pages/shop/shopSubNvue/shopSubNvue.nvue:52")}))},methods:{consent:function(){this.plan=!1,t("log","\u540c\u610f"," at pages/shop/shopSubNvue/shopSubNvue.nvue:58")},disagree:function(){t("log","\u4e0d\u540c\u610f"," at pages/shop/shopSubNvue/shopSubNvue.nvue:61"),"ios"==uni.getSystemInfoSync().platform?plus.ios.import("UIApplication").sharedApplication().performSelector("exit"):"android"==uni.getSystemInfoSync().platform&&plus.runtime.quit()},cancel:function(){uni.getSubNVueById("privacy").close("fade-out",300,(function(){}))},go:function(){uni.getSubNVueById("privacy").close("fade-out",300),uni.navigateTo({url:"/pages/my/set/newInfor/newInfor"})}}};e.default=s}).call(this,i(4).default)},function(t,e,i){"use strict";i.r(e);var n=i(23),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=s.a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[],s=i(54),o=weex.requireModule("dom"),r={name:"mp-html",data:function(){return{nodes:[],height:3}},props:{containerStyle:{type:String,default:""},content:String,copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=n.length;t--;)this.plugins.push(new n[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,e,i){},navigateTo:function(t,e){var i=this;return new Promise((function(n,s){i.useAnchor?(e=e||parseInt(i.useAnchor)||0,t?(i._navigateTo={resolve:n,reject:s,offset:e},i.$refs.web.evalJs('uni.postMessage({data:{action:"getOffset",offset:(document.getElementById('+t+")||{}).offsetTop}})")):(o.scrollToElement(i.$refs.web,{offset:e}),n())):s(Error("Anchor is disabled"))}))},getText:function(t){var e="";return function t(i){for(var n=0;n<i.length;n++){var s=i[n];if("text"===s.type)e+=s.text.replace(/&amp;/g,"&");else if("br"===s.name)e+="\n";else{var o="p"===s.name||"div"===s.name||"tr"===s.name||"li"===s.name||"h"===s.name[0]&&s.name[1]>"0"&&s.name[1]<"7";o&&e&&"\n"!==e[e.length-1]&&(e+="\n"),s.children&&t(s.children),o&&"\n"!==e[e.length-1]?e+="\n":"td"!==s.name&&"th"!==s.name||(e+="\t")}}}(t||this.nodes),e},getRect:function(){var t=this;return new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(t){return t[0]?e(t[0]):i(Error("Root label not found"))}))}))},setContent:function(t,e){e&&this.imgList||(this.imgList=[]);var i=new s(this).parse(t);this._ready&&this._set(i,e),this.$set(this,"nodes",e?(this.nodes||[]).concat(i):i)},_hook:function(t){for(var e=n.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()},_set:function(t,e){this.$refs.web.evalJs("setContent("+JSON.stringify(t)+","+JSON.stringify([this.containerStyle.replace(/(?:margin|padding)[^;]+/g,""),this.errorImg,this.loadingImg,this.pauseVideo,this.scrollTable,this.selectable])+","+e+")")},_onMessage:function(t){var e=this,i=t.detail.data[0];switch(i.action){case"onJSBridgeReady":this._ready=!0,this.nodes&&this._set(this.nodes);break;case"onLoad":this.height=i.height,this._hook("onLoad"),this.$emit("load");break;case"onReady":this.getRect().then((function(t){e.$emit("ready",t)})).catch((function(){}));break;case"onHeightChange":this.height=i.height;break;case"onImgTap":this.$emit("imgtap",i.attrs),this.previewImg&&uni.previewImage({current:parseInt(i.attrs.i),urls:this.imgList});break;case"onLinkTap":var n=i.attrs.href;this.$emit("linktap",i.attrs),n&&("#"===n[0]?this.useAnchor&&o.scrollToElement(this.$refs.web,{offset:i.offset}):n.includes("://")?this.copyLink&&plus.runtime.openWeb(n):uni.navigateTo({url:n,fail:function(){uni.switchTab({url:n})}}));break;case"getOffset":"number"==typeof i.offset?(o.scrollToElement(this.$refs.web,{offset:i.offset+this._navigateTo.offset}),this._navigateTo.resolve()):this._navigateTo.reject(Error("Label not found"));break;case"onClick":this.$emit("tap"),this.$emit("click");break;case"onError":this.$emit("error",{source:i.source,attrs:i.attrs})}}}};e.default=r},function(t,e){t.exports={"@VERSION":2}},function(t,e){t.exports={".content":{"":{backgroundColor:["rgba(0,0,0,0.7)",0,0,16],display:["flex",0,0,16],justifyContent:["center",0,0,16],alignItems:["center",0,0,16]}},".popup":{".content ":{width:["650rpx",0,1,17],height:["783rpx",0,1,17],backgroundColor:["#FFFFFF",0,1,17],borderRadius:["20rpx",0,1,17],paddingTop:["30rpx",0,1,17],paddingRight:["40rpx",0,1,17],paddingBottom:["30rpx",0,1,17],paddingLeft:["40rpx",0,1,17]}},".title":{".content .popup ":{fontSize:["30rpx",0,2,18],fontFamily:["PingFang SC",0,2,18],fontWeight:["bold",0,2,18],color:["#000000",0,2,18],textAlign:["center",0,2,18]},".content .inform ":{fontSize:["30rpx",0,2,27],fontFamily:["PingFang SC",0,2,27],fontWeight:["bold",0,2,27],color:["#000000",0,2,27],textAlign:["center",0,2,27]}},".desc":{".content .popup ":{height:["415rpx",0,2,19],marginTop:["20rpx",0,2,19],marginRight:[0,0,2,19],marginBottom:["20rpx",0,2,19],marginLeft:[0,0,2,19]},".content .inform ":{fontSize:["26rpx",0,2,28],fontFamily:["PingFang SC",0,2,28],fontWeight:["500",0,2,28],color:["#333333",0,2,28],lineHeight:["38rpx",0,2,28],textAlign:["center",0,2,28]}},".pro":{".content .popup ":{display:["flex",0,2,20],flexDirection:["row",0,2,20]}},".pro_text":{".content .popup .pro ":{fontSize:["26rpx",0,3,21],fontFamily:["PingFang SC",0,3,21],fontWeight:["500",0,3,21],color:["#F55454",0,3,21]}},".consent":{".content .popup ":{marginTop:["20rpx",0,2,22],height:["80rpx",0,2,22],backgroundColor:["#F55454",0,2,22],borderRadius:["6rpx",0,2,22],display:["flex",0,2,22],alignItems:["center",0,2,22],justifyContent:["center",0,2,22]}},".con_text":{".content .popup .consent ":{fontSize:["30rpx",0,3,23],fontFamily:["PingFang SC",0,3,23],fontWeight:["500",0,3,23],color:["#FFFFFF",0,3,23]}},".disagree":{".content .popup ":{marginTop:["20rpx",0,2,24],display:["flex",0,2,24],alignItems:["center",0,2,24],justifyContent:["center",0,2,24],height:["80rpx",0,2,24],backgroundColor:["#F9F9FB",0,2,24],borderRadius:["6rpx",0,2,24]}},".dis_text":{".content .popup .disagree ":{fontSize:["30rpx",0,3,25],fontFamily:["PingFang SC",0,3,25],fontWeight:["500",0,3,25],color:["#333333",0,3,25]}},".inform":{".content ":{width:["650rpx",0,1,26],height:["337rpx",0,1,26],backgroundColor:["#FFFFFF",0,1,26],borderRadius:["20rpx",0,1,26],paddingTop:["30rpx",0,1,26],paddingRight:["40rpx",0,1,26],paddingBottom:["30rpx",0,1,26],paddingLeft:["40rpx",0,1,26],display:["flex",0,1,26],justifyContent:["space-between",0,1,26]}},".btns":{".content .inform ":{display:["flex",0,2,29],flexDirection:["row",0,2,29],justifyContent:["space-between",0,2,29],alignItems:["center",0,2,29]}},".cancel":{".content .inform .btns ":{width:["278rpx",0,3,30],height:["80rpx",0,3,30],backgroundColor:["#F9F9FB",0,3,30],borderRadius:["6rpx",0,3,30],fontSize:["30rpx",0,3,30],fontFamily:["PingFang SC",0,3,30],fontWeight:["500",0,3,30],color:["#333333",0,3,30],textAlign:["center",0,3,30],lineHeight:["80rpx",0,3,30]}},".go":{".content .inform .btns ":{width:["278rpx",0,3,31],height:["80rpx",0,3,31],backgroundColor:["#F55454",0,3,31],borderRadius:["6rpx",0,3,31],fontSize:["30rpx",0,3,31],fontFamily:["PingFang SC",0,3,31],fontWeight:["500",0,3,31],color:["#ffffff",0,3,31],textAlign:["center",0,3,31],lineHeight:["80rpx",0,3,31]}},"@VERSION":2}},,,function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["content"],on:{click:function(t){}}},[t.plan?i("view",{staticClass:["popup"]},[i("u-text",{staticClass:["title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6d41\u8c61\u6cd5\u5f8b\u6761\u6b3e\u53ca\u9690\u79c1\u653f\u7b56")]),i("scroll-view",{staticClass:["desc"],attrs:{scrollY:"true"}},[i("mp-html",{attrs:{content:t.htmls}})],1),t._m(0),i("view",{staticClass:["consent"],on:{click:function(e){t.consent()}}},[i("u-text",{staticClass:["con_text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u540c\u610f")])]),i("view",{staticClass:["disagree"],on:{click:function(e){t.disagree()}}},[i("u-text",{staticClass:["dis_text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4e0d\u540c\u610f")])])],1):i("view",{staticClass:["inform"]},[i("u-text",{staticClass:["title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5f00\u542f\u63a8\u9001\u901a\u77e5")]),i("u-text",{staticClass:["desc"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u672a\u5f00\u542f\u63a8\u52a8\u901a\u77e5\uff0c\u53ef\u80fd\u4f1a\u9519\u8fc7\u8ba2\u5355\u4fe1\u606f\u3001\u4f18\u60e0\u6d3b\u52a8\u7b49\u6d88\u606f")]),i("view",{staticClass:["btns"]},[i("u-text",{staticClass:["cancel"],appendAsTree:!0,attrs:{append:"tree"},on:{click:function(e){t.cancel()}}},[t._v("\u53d6\u6d88")]),i("u-text",{staticClass:["go"],appendAsTree:!0,attrs:{append:"tree"},on:{click:function(e){t.go()}}},[t._v("\u53bb\u5f00\u542f")])])])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["pro"]},[e("u-text",{staticClass:["pro_text"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u300a\u6cd5\u5f8b\u6761\u6b3e\u300b")]),e("u-text",{staticClass:["pro_text"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u300a\u9690\u79c1\u653f\u7b56\u300b")])])}]},,,function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{class:(this.selectable?"_select ":"")+"_root",style:this.containerStyle,attrs:{id:"_root"}},[this.nodes[0]?this._e():this._t("default"),e("u-web-view",{ref:"web",style:"margin-top:-2px;height:"+this.height+"px",attrs:{src:"/static/app-plus/mp-html/local.html"},on:{onPostMessage:this._onMessage}})],2)},s=[]},,,,,,function(t,e,i){"use strict";i.r(e);var n=i(24),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=s.a},function(t,e,i){"use strict";i.r(e);var n=i(25),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=s.a},,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e);i(2);var n=i(7);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),n.default.mpType="page",n.default.route="pages/shop/shopSubNvue/shopSubNvue",n.default.el="#root",new Vue(n.default)},function(t,e,i){"use strict";i.r(e);var n=i(31),s=i(22);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);var r=i(1);var a=Object(r.a)(s.default,n.b,n.c,!1,null,null,"ee882bc0",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(37).default,this.options.style):Object.assign(this.options.style,i(37).default)}).call(a),e.default=a.exports},function(t,e){var i={trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:"\u2002",emsp:"\u2003",nbsp:"\xa0",semi:";",ndash:"\u2013",mdash:"\u2014",middot:"\xb7",lsquo:"\u2018",rsquo:"\u2019",ldquo:"\u201c",rdquo:"\u201d",bull:"\u2022",hellip:"\u2026"},tagStyle:{},svgDict:{animatetransform:"animateTransform",lineargradient:"linearGradient",viewbox:"viewBox",attributename:"attributeName",repeatcount:"repeatCount",repeatdur:"repeatDur"}},n={},s=uni.getSystemInfoSync().windowWidth,o=r(" ,\r,\n,\t,\f");function r(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}function a(t,e){for(var n=t.indexOf("&");-1!==n;){var s=t.indexOf(";",n+3),o=void 0;if(-1===s)break;"#"===t[n+1]?(o=parseInt(("x"===t[n+2]?"0":"")+t.substring(n+2,s)),isNaN(o)||(t=t.substr(0,n)+String.fromCharCode(o)+t.substr(s+1))):(o=t.substring(n+1,s),(i.entities[o]||"amp"===o&&e)&&(t=t.substr(0,n)+(i.entities[o]||"&")+t.substr(s+1))),n=t.indexOf("&",n+1)}return t}function h(t){this.options=t||{},this.tagStyle=Object.assign({},i.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[],this.pre=(this.options.containerStyle||"").includes("white-space")&&this.options.containerStyle.includes("pre")?2:0}function c(t){this.handler=t}i.ignoreTags.iframe=void 0,i.trustTags.iframe=!0,i.ignoreTags.embed=void 0,i.trustTags.embed=!0,i.ignoreTags.source=void 0,i.ignoreTags.style=void 0,h.prototype.parse=function(t){for(var e=this.plugins.length;e--;)this.plugins[e].onUpdate&&(t=this.plugins[e].onUpdate(t,i)||t);for(new c(this).parse(t);this.stack.length;)this.popNode();return this.nodes},h.prototype.expose=function(){},h.prototype.hook=function(t){for(var e=this.plugins.length;e--;)if(this.plugins[e].onParse&&!1===this.plugins[e].onParse(t,this))return!1;return!0},h.prototype.getUrl=function(t){var e=this.options.domain;return"/"===t[0]?"/"===t[1]?t=(e?e.split("://")[0]:"http")+":"+t:e&&(t=e+t):!e||t.includes("data:")||t.includes("://")||(t=e+"/"+t),t},h.prototype.parseStyle=function(t){var e=t.attrs,i=(this.tagStyle[t.name]||"").split(";").concat((e.style||"").split(";")),n={},r="";e.id&&!this.xml&&(this.options.useAnchor?this.expose():"img"!==t.name&&"a"!==t.name&&"video"!==t.name&&"audio"!==t.name&&(e.id=void 0)),e.width&&(n.width=parseFloat(e.width)+(e.width.includes("%")?"%":"px"),e.width=void 0),e.height&&(n.height=parseFloat(e.height)+(e.height.includes("%")?"%":"px"),e.height=void 0);for(var a=0,h=i.length;a<h;a++){var c=i[a].split(":");if(!(c.length<2)){var l=c.shift().trim().toLowerCase(),p=c.join(":").trim();if("-"===p[0]&&p.lastIndexOf("-")>0||p.includes("safe"))r+=";".concat(l,":").concat(p);else if(!n[l]||p.includes("import")||!n[l].includes("import")){if(p.includes("url")){var u=p.indexOf("(")+1;if(u){for(;'"'===p[u]||"'"===p[u]||o[p[u]];)u++;p=p.substr(0,u)+this.getUrl(p.substr(u))}}else p.includes("rpx")&&(p=p.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"})));n[l]=p}}}return t.attrs.style=r,n},h.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"===this.tagName&&(this.xml=(this.xml||0)+1)},h.prototype.onAttrName=function(t){"data-"===(t=this.xml?t:t.toLowerCase()).substr(0,5)?"data-src"!==t||this.attrs.src?"img"===this.tagName||"a"===this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},h.prototype.onAttrVal=function(t){var e=this.attrName||"";"style"===e||"href"===e?this.attrs[e]=a(t,!0):e.includes("src")?this.attrs[e]=this.getUrl(a(t,!0)):e&&(this.attrs[e]=t)},h.prototype.onOpenTag=function(t){var e=Object.create(null);e.name=this.tagName,e.attrs=this.attrs,this.options.nodes.length&&(e.type="node"),this.attrs=Object.create(null);var o=e.attrs,r=this.stack[this.stack.length-1],a=r?r.children:this.nodes,h=this.xml?t:i.voidTags[e.name];if(n[e.name]&&(o.class=n[e.name]+(o.class?" "+o.class:"")),"embed"===e.name&&this.expose(),h){if(!this.hook(e)||i.ignoreTags[e.name])return void("base"!==e.name||this.options.domain||(this.options.domain=o.href));var c=this.parseStyle(e);if("img"===e.name){if(o.src&&(o.src.includes("webp")&&(e.webp="T"),o.src.includes("data:")&&!o["original-src"]&&(o.ignore="T"),!o.ignore||e.webp||o.src.includes("cloud://"))){for(var l=this.stack.length;l--;){var p=this.stack[l];if("a"===p.name){e.a=p.attrs;break}p.c=1}o.i=this.imgList.length.toString();var u=o["original-src"]||o.src;this.imgList.push(u),this.options.lazyLoad&&(o["data-src"]=o.src,o.src=void 0)}"inline"===c.display&&(c.display=""),parseInt(c.width)>s&&(c.height=void 0),c.width&&(c.width.includes("auto")?c.width="":(e.w="T",c.height&&!c.height.includes("auto")&&(e.h="T")))}else if("svg"===e.name)return a.push(e),this.stack.push(e),void this.popNode();for(var f in c)c[f]&&(o.style+=";".concat(f,":").concat(c[f].replace(" !important","")));o.style=o.style.substr(1)||void 0}else("pre"===e.name||(o.style||"").includes("white-space")&&o.style.includes("pre"))&&2!==this.pre&&(this.pre=e.pre=1),e.children=[],this.stack.push(e);a.push(e)},h.prototype.onCloseTag=function(t){var e;for(t=this.xml?t:t.toLowerCase(),e=this.stack.length;e--&&this.stack[e].name!==t;);if(-1!==e)for(;this.stack.length>e;)this.popNode();else if("p"===t||"br"===t){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push({name:t,attrs:{class:n[t],style:this.tagStyle[t]}})}},h.prototype.popNode=function(){var t=this.stack.pop(),e=t.attrs,n=t.children,o=this.stack[this.stack.length-1],r=o?o.children:this.nodes;if(!this.hook(t)||i.ignoreTags[t.name])return"title"===t.name&&n.length&&"text"===n[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:n[0].text}),void r.pop();if(t.pre&&2!==this.pre){this.pre=t.pre=void 0;for(var a=this.stack.length;a--;)this.stack[a].pre&&(this.pre=1)}var h={};if("svg"===t.name)return this.xml>1?void this.xml--:(function t(e){if(e.name){for(var n in e.name=i.svgDict[e.name]||e.name,e.attrs)i.svgDict[n]&&(e.attrs[i.svgDict[n]]=e.attrs[n],e.attrs[n]=void 0);for(var s=0;s<(e.children||[]).length;s++)t(e.children[s])}}(t),void(this.xml=!1));for(var c in(e.class||"").includes("align-center")&&(h["text-align"]="center"),Object.assign(h,this.parseStyle(t)),"table"!==t.name&&parseInt(h.width)>s&&(h["max-width"]="100%",h["box-sizing"]="border-box"),h)if(h[c]){var l=";".concat(c,":").concat(h[c].replace(" !important",""));e.style+=l}e.style=e.style.substr(1)||void 0},h.prototype.onText=function(t){if(!this.pre){for(var e,i="",n=0,s=t.length;n<s;n++)o[t[n]]?(" "!==i[i.length-1]&&(i+=" "),"\n"!==t[n]||e||(e=!0)):i+=t[n];if(" "===i&&e)return;t=i}var r=Object.create(null);(r.type="text",r.text=a(t),this.hook(r))&&(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push(r)},c.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var e=this.content.length;-1!==this.i&&this.i<e;)this.state()},c.prototype.checkClose=function(t){var e="/"===this.content[this.i];return!!(">"===this.content[this.i]||e&&">"===this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=e?2:1,this.start=this.i,this.handler.onOpenTag(e),"script"===this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!==this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},c.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!==this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"===t||"!"===t||"?"===t){this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i));var e=this.content[this.i+2];if("/"===t&&(e>="a"&&e<="z"||e>="A"&&e<="Z"))return this.i+=2,this.start=this.i,void(this.state=this.endTag);var i="--\x3e";"!"===t&&"-"===this.content[this.i+2]&&"-"===this.content[this.i+3]||(i=">"),this.i=this.content.indexOf(i,this.i),-1!==this.i&&(this.i+=i.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},c.prototype.tagName=function(){if(o[this.content[this.i]]){for(this.handler.onTagName(this.content.substring(this.start,this.i));o[this.content[++this.i]];);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},c.prototype.attrName=function(){var t=this.content[this.i];if(o[t]||"="===t){this.handler.onAttrName(this.content.substring(this.start,this.i));for(var e="="===t,i=this.content.length;++this.i<i;)if(t=this.content[this.i],!o[t]){if(this.checkClose())return;if(e)return this.start=this.i,void(this.state=this.attrVal);if("="!==this.content[this.i])return this.start=this.i,void(this.state=this.attrName);e=!0}}else this.checkClose("onAttrName")||this.i++},c.prototype.attrVal=function(){var t=this.content[this.i],e=this.content.length;if('"'===t||"'"===t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1===this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<e;this.i++){if(o[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}for(;o[this.content[++this.i]];);this.i<e&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},c.prototype.endTag=function(){var t=this.content[this.i];if(o[t]||">"===t||"/"===t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!==t&&(this.i=this.content.indexOf(">",this.i),-1===this.i))return;this.start=++this.i,this.state=this.text}else this.i++},t.exports=h}]);