"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/main.js?{"type":"appStyle"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/App.vue?vue&type=style&index=0&lang=scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/project/HX/flow/App.vue?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!*********************************************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/main.js?{"page":"pages%2Fcommunity%2Fdetail%2FvideoList"} ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/community/detail/videoList.nvue?mpType=page */ 33);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/community/detail/videoList'\n        _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY29tbXVuaXR5L2RldGFpbC92aWRlb0xpc3QubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jb21tdW5pdHkvZGV0YWlsL3ZpZGVvTGlzdCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page */ 34);\n/* harmony import */ var _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoList.nvue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page */ 43).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page */ 43).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"12d4ee14\",\n  \"500ec163\",\n  false,\n  _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/community/detail/videoList.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEk7QUFDOUk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtGQUF1RjtBQUMzSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0ZBQXVGO0FBQ2hKOztBQUVBOztBQUVBO0FBQzZMO0FBQzdMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSw0R0FBTTtBQUNSLEVBQUUscUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW9MaXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTJkNGVlMTQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZGVvTGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvTGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92aWRlb0xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyZDRlZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyZDRlZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTJkNGVlMTRcIixcbiAgXCI1MDBlYzE2M1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb21tdW5pdHkvZGV0YWlsL3ZpZGVvTGlzdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!*******************************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["container"] }, [
        _c(
          "list",
          {
            attrs: {
              loadmoreoffset: _vm.wHeight,
              pagingEnabled: true,
              scrollable: true,
              showScrollbar: false
            },
            on: { loadmore: _vm.getData }
          },
          _vm._l(_vm.dataList, function(item, index) {
            return _c(
              "cell",
              {
                key: index,
                appendAsTree: true,
                attrs: { append: "tree" },
                on: {
                  appear: function($event) {
                    _vm.apear(item, index)
                  }
                }
              },
              [
                _c(
                  "view",
                  { staticClass: ["item"], style: _vm.boxStyle },
                  [
                    _c("u-video", {
                      ref: "myVideos",
                      refInFor: true,
                      style: _vm.boxStyle,
                      attrs: {
                        id: item.videoId,
                        src: item.videoSrc,
                        enableProgressGesture: false,
                        pageGesture: false,
                        controls: true,
                        showFullscreenBtn: false,
                        showCenterPlayBtn: true,
                        objectFit: "fill",
                        poster:
                          item.videoSrc +
                          "?x-oss-process=video/snapshot,t_1000,f_jpg",
                        loop: true
                      },
                      on: { play: _vm.play }
                    }),
                    _c("view", { staticClass: ["right"] }, [
                      _c(
                        "view",
                        { staticClass: ["avatar"] },
                        [
                          _c("u-image", {
                            staticClass: ["avatarImg"],
                            attrs: { src: "/static/comm/avatar.png", mode: "" }
                          }),
                          _vm.attenList.indexOf(item.id) > -1
                            ? _c("u-image", {
                                staticClass: ["add"],
                                attrs: {
                                  src: "/static/comm/atten.png",
                                  mode: ""
                                },
                                on: {
                                  click: function($event) {
                                    _vm.atten(item.id, $event)
                                  }
                                }
                              })
                            : _c("u-image", {
                                staticClass: ["add"],
                                attrs: {
                                  src: "/static/comm/add2.png",
                                  mode: ""
                                },
                                on: {
                                  click: function($event) {
                                    _vm.atten(item.id, $event)
                                  }
                                }
                              })
                        ],
                        1
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["opera"],
                          on: {
                            click: function($event) {
                              _vm.praise(item.id, $event)
                            }
                          }
                        },
                        [
                          _vm.praiseList.indexOf(item.id) > -1
                            ? _c("u-image", {
                                staticClass: ["opera_img"],
                                attrs: {
                                  src: "/static/comm/videoPraiseOn.png",
                                  mode: ""
                                }
                              })
                            : _c("u-image", {
                                staticClass: ["opera_img"],
                                attrs: {
                                  src: "/static/comm/videoPraise.png",
                                  mode: ""
                                }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["opera_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v(_vm._s(item.like))]
                          )
                        ],
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["opera"], on: { click: _vm.open } },
                        [
                          _c("u-image", {
                            staticClass: ["opera_img"],
                            attrs: {
                              src: "/static/comm/videoComment.png",
                              mode: ""
                            }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["opera_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v(_vm._s(item.comment))]
                          )
                        ],
                        1
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["opera"],
                          on: { click: _vm.shareShow }
                        },
                        [
                          _c("u-image", {
                            staticClass: ["opera_img"],
                            attrs: {
                              src: "/static/comm/videoShare.png",
                              mode: ""
                            }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["opera_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("转发")]
                          )
                        ],
                        1
                      )
                    ]),
                    _c("view", { staticClass: ["info"] }, [
                      _c("view", { staticClass: ["lettle"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["nickname"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("@不是肥肥肥肥")]
                        ),
                        _c(
                          "view",
                          { staticClass: ["eye"] },
                          [
                            _c("u-image", {
                              staticClass: ["eye_img"],
                              attrs: { src: "/static/comm/eye.png", mode: "" }
                            }),
                            _c(
                              "u-text",
                              {
                                staticClass: ["eye_num"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v("231")]
                            )
                          ],
                          1
                        )
                      ]),
                      _c("view", { staticClass: ["darg"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["darg_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("#")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["darg_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("高级穿搭")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["darg_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("初秋穿搭")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["darg_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v("粉棕色高级感美式复古INS风")]
                        )
                      ]),
                      _c("view", { staticClass: ["desc"] }, [
                        _c(
                          "u-text",
                          {
                            class: ["desc_text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                item.status
                                  ? item.desc.substr(0, 55) + "· · ·"
                                  : item.desc
                              )
                            )
                          ]
                        ),
                        item.status && item.desc.length > 55
                          ? _c(
                              "u-text",
                              {
                                staticClass: ["open"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                                on: {
                                  click: function($event) {
                                    ;(item.status = false),
                                      $event.stopPropagation()
                                  }
                                }
                              },
                              [_vm._v("展开")]
                            )
                          : !item.status && item.desc.length > 55
                          ? _c(
                              "u-text",
                              {
                                staticClass: ["open"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                                on: {
                                  click: function($event) {
                                    ;(item.status = true),
                                      $event.stopPropagation()
                                  }
                                }
                              },
                              [_vm._v("收起")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ],
                  1
                )
              ]
            )
          }),
          0
        ),
        _vm.sharePopup
          ? _c("view", {
              staticClass: ["mask"],
              style: { height: _vm.wHeight },
              on: { click: _vm.hideSharePopup }
            })
          : _vm._e(),
        _c(
          "view",
          {
            class: ["popup", _vm.sharePopup ? "showPopup" : ""],
            on: { click: function($event) {} }
          },
          [
            _c("view", { staticClass: ["title"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["title_text"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v("分享至")]
              )
            ]),
            _c(
              "view",
              { staticClass: ["shares"] },
              _vm._l(_vm.shareList, function(elem, index) {
                return _c(
                  "view",
                  { key: index, staticClass: ["share_item"] },
                  [
                    _c("u-image", {
                      staticClass: ["share_img"],
                      attrs: { src: elem.src, mode: "" }
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["share_text"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v(_vm._s(elem.text))]
                    )
                  ],
                  1
                )
              }),
              0
            ),
            _c(
              "view",
              { staticClass: ["cancel"], on: { click: _vm.hideSharePopup } },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["cancel_text"],
                    appendAsTree: true,
                    attrs: { append: "tree" }
                  },
                  [_vm._v("取消")]
                )
              ]
            )
          ]
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!*************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoList.nvue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtnQixDQUFnQixtZ0JBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0xpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9MaXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n\n{\n  components: {},\n\n\n  data: function data() {\n    return {\n      dataList: [\n      {\n        id: 1,\n        state: 'pause',\n        like: 9865,\n        comment: 1588,\n        videoId: 'video1',\n        videoSrc: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f4829677-6fb5-47e5-835f-267d562699fd.mp4',\n        desc: '这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材',\n        status: true },\n\n      {\n        id: 2,\n        state: 'pause',\n        like: '3.2W',\n        comment: 5888,\n        videoId: 'video2',\n        videoSrc: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f4829677-6fb5-47e5-835f-267d562699fd.mp4',\n        desc: '搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材',\n        status: false },\n\n      {\n        id: 3,\n        state: 'pause',\n        like: 5,\n        comment: 58,\n        videoId: 'video3',\n        videoSrc: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f4829677-6fb5-47e5-835f-267d562699fd.mp4',\n        desc: '这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材',\n        status: true }],\n\n\n      wHeight: 0,\n      boxStyle: {\n        'height': 0,\n        'width': '750rpx' },\n\n      obj: {},\n      cut: 0,\n      touchNum: 0, // 双击\n      praiseList: [], // 点赞过的数据id\n      attenList: [], // 关注列表\n      sharePopup: false, // 分享弹窗\n      shareList: [\n      {\n        src: __webpack_require__(/*! @/static/comm/wxfriend.png */ 38),\n        text: '微信好友' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/wxcircle.png */ 39),\n        text: '朋友圈' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/copy.png */ 40),\n        text: '复制链接' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/downLoad.png */ 41),\n        text: '下载至相册' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/photo.png */ 42),\n        text: '生成分享图' }],\n\n\n      install: false };\n\n  },\n  onReady: function onReady() {\n    this.wHeight = uni.getSystemInfoSync().windowHeight;\n    this.boxStyle.height = this.wHeight;\n  },\n  onShow: function onShow() {\n    this.install = uni.getStorageSync('install');\n    if (!this.install) {\n      this.shareList.splice(0, 2);\n    }\n  },\n  methods: {\n    shot: function shot() {\n      __f__(\"log\", 1111, \" at pages/community/detail/videoList.nvue:166\");\n    },\n    getData: function getData() {\n      for (var i = 0; i < 2; i++) {\n        this.dataList.push({\n          id: this.dataList.length + 1,\n          state: 'pause',\n          like: this.dataList.length,\n          comment: 1588,\n          videoId: 'video' + (this.dataList.length + 1),\n          videoSrc: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f4829677-6fb5-47e5-835f-267d562699fd.mp4',\n          desc: '这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材',\n          status: true });\n\n      }\n      __f__(\"log\", this.dataList.length, \" at pages/community/detail/videoList.nvue:181\");\n    },\n    // 当前滑块即当前播放的视频\n    apear: function apear(e, n) {\n      this.$refs.myVideos.forEach(function (elem) {\n        if (elem.attr.id != e.videoId) {\n          // 关闭其他视频\n          uni.createVideoContext(elem.attr.id).pause();\n          uni.createVideoContext(elem.attr.id).seek(0);\n        } else {\n          // 播放当前视频\n          uni.createVideoContext(elem.attr.id).play();\n        }\n      });\n    },\n    // 点赞\n    praise: function praise(e, n) {\n      if (this.praiseList.indexOf(e) > -1) {\n        var index = this.praiseList.indexOf(e);\n        this.praiseList.splice(index, 1);\n      } else {\n        this.praiseList.push(e);\n      }\n\n      n.stopPropagation();\n\n    },\n    // 关注\n    atten: function atten(e, n) {\n      if (this.attenList.indexOf(e) > -1) {\n        var index = this.attenList.indexOf(e);\n        this.attenList.splice(index, 1);\n      } else {\n        this.attenList.push(e);\n      }\n\n      n.stopPropagation();\n\n    },\n    open: function open(e) {\n\n      // 通过 id 获取 nvue 子窗体\n      var subNVue = uni.getSubNVueById('comment');\n      // 打开 nvue 子窗体  \n      subNVue.show('slide-in-bottom', 300, function () {});\n\n      e.stopPropagation();\n    },\n    shareShow: function shareShow(e) {\n      this.sharePopup = true;\n      e.stopPropagation();\n    },\n    hideSharePopup: function hideSharePopup(e) {\n      this.sharePopup = false;\n      e.stopPropagation();\n    },\n    // 双击暂停、开始播放\n    dblclick: function dblclick(e, n) {var _this = this;\n      __f__(\"log\", e, \" at pages/community/detail/videoList.nvue:239\");\n      this.touchNum++;\n      var timer = setTimeout(function () {\n        if (_this.touchNum == 1) {\n          // 单击\n          __f__(\"log\", e, 111, \" at pages/community/detail/videoList.nvue:244\");\n        }\n        if (_this.touchNum >= 2) {\n          __f__(\"log\", e, 222, \" at pages/community/detail/videoList.nvue:247\");\n          // 双击\n          if (_this.praiseList.indexOf(e) > -1) {\n            var index = _this.praiseList.indexOf(e);\n            _this.praiseList.splice(index, 1);\n          } else {\n            _this.praiseList.push(e);\n          }\n        }\n        _this.touchNum = 0;\n        clearTimeout(timer);\n      }, 250);\n\n      n.stopPropagation();\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 17)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29tbXVuaXR5L2RldGFpbC92aWRlb0xpc3QubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0EsZ0JBREE7OztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQURBO0FBRUEsc0JBRkE7QUFHQSxrQkFIQTtBQUlBLHFCQUpBO0FBS0EseUJBTEE7QUFNQSwwSUFOQTtBQU9BLGdIQVBBO0FBUUEsb0JBUkEsRUFEQTs7QUFXQTtBQUNBLGFBREE7QUFFQSxzQkFGQTtBQUdBLG9CQUhBO0FBSUEscUJBSkE7QUFLQSx5QkFMQTtBQU1BLDBJQU5BO0FBT0EsdUVBUEE7QUFRQSxxQkFSQSxFQVhBOztBQXFCQTtBQUNBLGFBREE7QUFFQSxzQkFGQTtBQUdBLGVBSEE7QUFJQSxtQkFKQTtBQUtBLHlCQUxBO0FBTUEsMElBTkE7QUFPQSxnSEFQQTtBQVFBLG9CQVJBLEVBckJBLENBREE7OztBQWlDQSxnQkFqQ0E7QUFrQ0E7QUFDQSxtQkFEQTtBQUVBLHlCQUZBLEVBbENBOztBQXNDQSxhQXRDQTtBQXVDQSxZQXZDQTtBQXdDQSxpQkF4Q0EsRUF3Q0E7QUFDQSxvQkF6Q0EsRUF5Q0E7QUFDQSxtQkExQ0EsRUEwQ0E7QUFDQSx1QkEzQ0EsRUEyQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBREE7QUFFQSxvQkFGQSxFQURBOztBQUtBO0FBQ0Esc0VBREE7QUFFQSxtQkFGQSxFQUxBOztBQVNBO0FBQ0Esa0VBREE7QUFFQSxvQkFGQSxFQVRBOztBQWFBO0FBQ0Esc0VBREE7QUFFQSxxQkFGQSxFQWJBOztBQWlCQTtBQUNBLG1FQURBO0FBRUEscUJBRkEsRUFqQkEsQ0E1Q0E7OztBQWtFQSxvQkFsRUE7O0FBb0VBLEdBekVBO0FBMEVBLFNBMUVBLHFCQTBFQTtBQUNBO0FBQ0E7QUFDQSxHQTdFQTtBQThFQSxRQTlFQSxvQkE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbkZBO0FBb0ZBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFdBSkEscUJBSUE7QUFDQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSx3QkFGQTtBQUdBLG9DQUhBO0FBSUEsdUJBSkE7QUFLQSx1REFMQTtBQU1BLDRJQU5BO0FBT0Esa0hBUEE7QUFRQSxzQkFSQTs7QUFVQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkE7QUFDQSxTQXBCQSxpQkFvQkEsQ0FwQkEsRUFvQkEsQ0FwQkEsRUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBL0JBO0FBZ0NBO0FBQ0EsVUFqQ0Esa0JBaUNBLENBakNBLEVBaUNBLENBakNBLEVBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQTNDQTtBQTRDQTtBQUNBLFNBN0NBLGlCQTZDQSxDQTdDQSxFQTZDQSxDQTdDQSxFQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0F2REE7QUF3REEsUUF4REEsZ0JBd0RBLENBeERBLEVBd0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FoRUE7QUFpRUEsYUFqRUEscUJBaUVBLENBakVBLEVBaUVBO0FBQ0E7QUFDQTtBQUNBLEtBcEVBO0FBcUVBLGtCQXJFQSwwQkFxRUEsQ0FyRUEsRUFxRUE7QUFDQTtBQUNBO0FBQ0EsS0F4RUE7QUF5RUE7QUFDQSxZQTFFQSxvQkEwRUEsQ0ExRUEsRUEwRUEsQ0ExRUEsRUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWpCQSxFQWlCQSxHQWpCQTs7QUFtQkE7O0FBRUEsS0FsR0EsRUFwRkEsRSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0PGxpc3QgQGxvYWRtb3JlPVwiZ2V0RGF0YVwiIDpsb2FkbW9yZW9mZnNldD1cIndIZWlnaHRcIiA6cGFnaW5nRW5hYmxlZD1cInRydWVcIiA6c2Nyb2xsYWJsZT1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiPlxyXG5cdFx0ICAgIDwhLS0g5rOo5oSP5LqL6aG5OiDkuI3og73kvb/nlKggaW5kZXgg5L2c5Li6IGtleSDnmoTllK/kuIDmoIfor4Yg5qih5ouf5pWw5o2uLOaOpeWPo+aVsOaNruS9v+eUqGlkLS0+XHJcblx0XHRcdDxjZWxsIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhTGlzdFwiIDprZXk9XCJpbmRleFwiIEBhcHBlYXI9XCJhcGVhcihpdGVtLGluZGV4KVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiIDpzdHlsZT1cImJveFN0eWxlXCIgPlxyXG5cdFx0XHRcdFx0PCEtLSA8anZpZGVvIFxyXG5cdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbS52aWRlb1NyY1wiXHJcblx0XHRcdFx0XHRcdDpzdGF0ZT1cIml0ZW0uc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHQ6Ym94U3R5bGU9XCJib3hTdHlsZVwiXHJcblx0XHRcdFx0XHQ+PC9qdmlkZW8+IC0tPlxyXG5cdFx0XHRcdFx0PHZpZGVvIHJlZj1cIm15VmlkZW9zXCIgOmlkPVwiaXRlbS52aWRlb0lkXCIgOnNyYz1cIml0ZW0udmlkZW9TcmNcIiA6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpwYWdlLWdlc3R1cmU9XCJmYWxzZVwiIDpjb250cm9scz1cInRydWVcIiA6c2hvdy1mdWxsc2NyZWVuLWJ0bj1cImZhbHNlXCIgOnNob3ctY2VudGVyLXBsYXktYnRuPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpzdHlsZT1cImJveFN0eWxlXCIgb2JqZWN0LWZpdD1cImZpbGxcIiA6cG9zdGVyPVwiaXRlbS52aWRlb1NyYysnP3gtb3NzLXByb2Nlc3M9dmlkZW8vc25hcHNob3QsdF8xMDAwLGZfanBnJ1wiIFxyXG5cdFx0XHRcdFx0XHRAcGxheT1cInBsYXlcIiA6bG9vcD1cInRydWVcIlxyXG5cdFx0XHRcdFx0PjwvdmlkZW8+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXZhdGFyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYXZhdGFySW1nXCIgc3JjPVwiL3N0YXRpYy9jb21tL2F2YXRhci5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImF0dGVuTGlzdC5pbmRleE9mKGl0ZW0uaWQpID4gLTFcIiAgY2xhc3M9XCJhZGRcIiBzcmM9XCIvc3RhdGljL2NvbW0vYXR0ZW4ucG5nXCIgbW9kZT1cIlwiIEBjbGljaz1cImF0dGVuKGl0ZW0uaWQsJGV2ZW50KVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtZWxzZSBjbGFzcz1cImFkZFwiIHNyYz1cIi9zdGF0aWMvY29tbS9hZGQyLnBuZ1wiIG1vZGU9XCJcIiBAY2xpY2s9XCJhdHRlbihpdGVtLmlkLCRldmVudClcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmFcIiBAY2xpY2s9XCJwcmFpc2UoaXRlbS5pZCwkZXZlbnQpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwib3BlcmFfaW1nXCIgdi1pZj1cInByYWlzZUxpc3QuaW5kZXhPZihpdGVtLmlkKSA+IC0xXCIgc3JjPVwiL3N0YXRpYy9jb21tL3ZpZGVvUHJhaXNlT24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwib3BlcmFfaW1nXCIgdi1lbHNlIHNyYz1cIi9zdGF0aWMvY29tbS92aWRlb1ByYWlzZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wZXJhX3RleHRcIj57e2l0ZW0ubGlrZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmFcIiBAY2xpY2s9XCJvcGVuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwib3BlcmFfaW1nXCIgc3JjPVwiL3N0YXRpYy9jb21tL3ZpZGVvQ29tbWVudC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wZXJhX3RleHRcIj57e2l0ZW0uY29tbWVudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmFcIiBAY2xpY2s9XCJzaGFyZVNob3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJvcGVyYV9pbWdcIiBzcmM9XCIvc3RhdGljL2NvbW0vdmlkZW9TaGFyZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wZXJhX3RleHRcIj7ovazlj5E8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxldHRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmlja25hbWVcIj5A5LiN5piv6IKl6IKl6IKl6IKlPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZXllXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJleWVfaW1nXCIgc3JjPVwiL3N0YXRpYy9jb21tL2V5ZS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZXllX251bVwiPjIzMTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkYXJnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkYXJnX3RleHRcIj4jPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGFyZ190ZXh0XCI+6auY57qn56m/5pCtPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGFyZ190ZXh0XCI+5Yid56eL56m/5pCtPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGFyZ190ZXh0XCI+57KJ5qOV6Imy6auY57qn5oSf576O5byP5aSN5Y+kSU5T6aOOPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cIlsnZGVzY190ZXh0J11cIj57e2l0ZW0uc3RhdHVzID8gaXRlbS5kZXNjLnN1YnN0cigwLCA1NSkgKyAnwrcgwrcgwrcnIDogaXRlbS5kZXNjIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3BlblwiIHYtaWY9XCJpdGVtLnN0YXR1cyAmJiBpdGVtLmRlc2MubGVuZ3RoID4gNTVcIiBAY2xpY2suc3RvcD1cIml0ZW0uc3RhdHVzID0gZmFsc2UsJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+5bGV5byAPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3BlblwiIHYtZWxzZS1pZj1cIiFpdGVtLnN0YXR1cyAmJiBpdGVtLmRlc2MubGVuZ3RoID4gNTVcIiBAY2xpY2s9XCJpdGVtLnN0YXR1cyA9IHRydWUsJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+5pS26LW3PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2NlbGw+XHJcblx0XHQ8L2xpc3Q+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm1hc2tcIiA6c3R5bGU9XCJ7J2hlaWdodCc6IHdIZWlnaHR9XCIgdi1pZj1cInNoYXJlUG9wdXBcIiBAY2xpY2s9XCJoaWRlU2hhcmVQb3B1cFwiPjwvdmlldz5cclxuXHRcdDx2aWV3IDpjbGFzcz1cIlsncG9wdXAnLCBzaGFyZVBvcHVwID8gJ3Nob3dQb3B1cCcgOiAnJ11cIiBAY2xpY2s9XCJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVfdGV4dFwiPuWIhuS6q+iHszwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlc1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hhcmVfaXRlbVwiIHYtZm9yPVwiKGVsZW0saW5kZXgpIGluIHNoYXJlTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2hhcmVfaW1nXCIgOnNyYz1cImVsZW0uc3JjXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNoYXJlX3RleHRcIj57e2VsZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhbmNlbFwiIEBjbGljaz1cImhpZGVTaGFyZVBvcHVwXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjYW5jZWxfdGV4dFwiPuWPlua2iDwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0XHJcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhTGlzdDogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogMSwgXHJcblx0XHRcdFx0XHRcdHN0YXRlIDogJ3BhdXNlJywgXHJcblx0XHRcdFx0XHRcdGxpa2U6IDk4NjUsXHJcblx0XHRcdFx0XHRcdGNvbW1lbnQ6IDE1ODgsXHJcblx0XHRcdFx0XHRcdHZpZGVvSWQ6ICd2aWRlbzEnLFxyXG5cdFx0XHRcdFx0XHR2aWRlb1NyYzogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtZjE4NGU3YzMtMTkxMi00MWIyLWI4MWYtNDM1ZDFiMzdjN2I0L2Y0ODI5Njc3LTZmYjUtNDdlNS04MzVmLTI2N2Q1NjI2OTlmZC5tcDQnLFxyXG5cdFx0XHRcdFx0XHRkZXNjOifov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZAnLFxyXG5cdFx0XHRcdFx0XHRzdGF0dXM6IHRydWVcclxuXHRcdFx0XHRcdH0sIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogMiwgXHJcblx0XHRcdFx0XHRcdHN0YXRlIDogJ3BhdXNlJywgXHJcblx0XHRcdFx0XHRcdGxpa2U6ICczLjJXJyxcclxuXHRcdFx0XHRcdFx0Y29tbWVudDogNTg4OCxcclxuXHRcdFx0XHRcdFx0dmlkZW9JZDogJ3ZpZGVvMicsXHJcblx0XHRcdFx0XHRcdHZpZGVvU3JjOiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS1mMTg0ZTdjMy0xOTEyLTQxYjItYjgxZi00MzVkMWIzN2M3YjQvZjQ4Mjk2NzctNmZiNS00N2U1LTgzNWYtMjY3ZDU2MjY5OWZkLm1wNCcsXHJcblx0XHRcdFx0XHRcdGRlc2M6J+aQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkCcsXHJcblx0XHRcdFx0XHRcdHN0YXR1czogZmFsc2VcclxuXHRcdFx0XHRcdH0sIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogMywgXHJcblx0XHRcdFx0XHRcdHN0YXRlIDogJ3BhdXNlJywgXHJcblx0XHRcdFx0XHRcdGxpa2U6IDUsXHJcblx0XHRcdFx0XHRcdGNvbW1lbnQ6IDU4LFxyXG5cdFx0XHRcdFx0XHR2aWRlb0lkOiAndmlkZW8zJyxcclxuXHRcdFx0XHRcdFx0dmlkZW9TcmM6ICdodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLWYxODRlN2MzLTE5MTItNDFiMi1iODFmLTQzNWQxYjM3YzdiNC9mNDgyOTY3Ny02ZmI1LTQ3ZTUtODM1Zi0yNjdkNTYyNjk5ZmQubXA0JyxcclxuXHRcdFx0XHRcdFx0ZGVzYzon6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2QJyxcclxuXHRcdFx0XHRcdFx0c3RhdHVzOiB0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR3SGVpZ2h0OjAsXHJcblx0XHRcdFx0Ym94U3R5bGU6e1xyXG5cdFx0XHRcdFx0J2hlaWdodCc6IDAsXHJcblx0XHRcdFx0XHQnd2lkdGgnOic3NTBycHgnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b2JqOiB7fSxcclxuXHRcdFx0XHRjdXQ6IDAsXHJcblx0XHRcdFx0dG91Y2hOdW06IDAsIC8vIOWPjOWHu1xyXG5cdFx0XHRcdHByYWlzZUxpc3Q6IFtdLCAvLyDngrnotZ7ov4fnmoTmlbDmja5pZFxyXG5cdFx0XHRcdGF0dGVuTGlzdDogW10sIC8vIOWFs+azqOWIl+ihqFxyXG5cdFx0XHRcdHNoYXJlUG9wdXA6IGZhbHNlLC8vIOWIhuS6q+W8ueeql1xyXG5cdFx0XHRcdHNoYXJlTGlzdDogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6IHJlcXVpcmUoJ0Avc3RhdGljL2NvbW0vd3hmcmllbmQucG5nJyksXHJcblx0XHRcdFx0XHRcdHRleHQ6ICflvq7kv6Hlpb3lj4snXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6IHJlcXVpcmUoJ0Avc3RhdGljL2NvbW0vd3hjaXJjbGUucG5nJyksXHJcblx0XHRcdFx0XHRcdHRleHQ6ICfmnIvlj4vlnIgnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6IHJlcXVpcmUoJ0Avc3RhdGljL2NvbW0vY29weS5wbmcnKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+WkjeWItumTvuaOpSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogcmVxdWlyZSgnQC9zdGF0aWMvY29tbS9kb3duTG9hZC5wbmcnKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+S4i+i9veiHs+ebuOWGjCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogcmVxdWlyZSgnQC9zdGF0aWMvY29tbS9waG90by5wbmcnKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+eUn+aIkOWIhuS6q+WbvidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGluc3RhbGw6IGZhbHNlXHJcblx0XHRcdH07XG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHRoaXMud0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG5cdFx0XHR0aGlzLmJveFN0eWxlLmhlaWdodCA9IHRoaXMud0hlaWdodFxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdpbnN0YWxsJylcclxuXHRcdFx0aWYoIXRoaXMuaW5zdGFsbCl7XHJcblx0XHRcdFx0dGhpcy5zaGFyZUxpc3Quc3BsaWNlKDAsIDIpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0c2hvdCgpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKDExMTEpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldERhdGEoKXtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTGlzdC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuZGF0YUxpc3QubGVuZ3RoKzEsXHJcblx0XHRcdFx0XHRcdHN0YXRlIDogJ3BhdXNlJywgXHJcblx0XHRcdFx0XHRcdGxpa2U6IHRoaXMuZGF0YUxpc3QubGVuZ3RoLFxyXG5cdFx0XHRcdFx0XHRjb21tZW50OiAxNTg4LFxyXG5cdFx0XHRcdFx0XHR2aWRlb0lkOiAndmlkZW8nICsgKHRoaXMuZGF0YUxpc3QubGVuZ3RoKzEpLFxyXG5cdFx0XHRcdFx0XHR2aWRlb1NyYzogJ2h0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtZjE4NGU3YzMtMTkxMi00MWIyLWI4MWYtNDM1ZDFiMzdjN2I0L2Y0ODI5Njc3LTZmYjUtNDdlNS04MzVmLTI2N2Q1NjI2OTlmZC5tcDQnLFxyXG5cdFx0XHRcdFx0XHRkZXNjOifov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZAnLFxyXG5cdFx0XHRcdFx0XHRzdGF0dXM6IHRydWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmRhdGFMaXN0Lmxlbmd0aClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5b2T5YmN5ruR5Z2X5Y2z5b2T5YmN5pKt5pS+55qE6KeG6aKRXHJcblx0XHRcdGFwZWFyKGUsbil7ICBcclxuXHRcdFx0XHR0aGlzLiRyZWZzLm15VmlkZW9zLmZvckVhY2goZWxlbT0+e1xyXG5cdFx0XHRcdFx0aWYoZWxlbS5hdHRyLmlkICE9IGUudmlkZW9JZCl7XHJcblx0XHRcdFx0XHRcdC8vIOWFs+mXreWFtuS7luinhumikVxyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGVsZW0uYXR0ci5pZCkucGF1c2UoKVxyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGVsZW0uYXR0ci5pZCkuc2VlaygwKVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdC8vIOaSreaUvuW9k+WJjeinhumikVxyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGVsZW0uYXR0ci5pZCkucGxheSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K56LWeXHJcblx0XHRcdHByYWlzZShlLG4pe1xyXG5cdFx0XHRcdGlmKHRoaXMucHJhaXNlTGlzdC5pbmRleE9mKGUpID4gLTEpe1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5wcmFpc2VMaXN0LmluZGV4T2YoZSlcclxuXHRcdFx0XHRcdHRoaXMucHJhaXNlTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLnByYWlzZUxpc3QucHVzaChlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRuLnN0b3BQcm9wYWdhdGlvbigpXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWFs+azqFxyXG5cdFx0XHRhdHRlbihlLG4peyBcdFxyXG5cdFx0XHRcdGlmKHRoaXMuYXR0ZW5MaXN0LmluZGV4T2YoZSkgPiAtMSl7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLmF0dGVuTGlzdC5pbmRleE9mKGUpXHJcblx0XHRcdFx0XHR0aGlzLmF0dGVuTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmF0dGVuTGlzdC5wdXNoKGUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdG4uc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbihlKXtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHQvLyDpgJrov4cgaWQg6I635Y+WIG52dWUg5a2Q56qX5L2TXHJcblx0XHRcdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgnY29tbWVudCcpICBcclxuXHRcdFx0XHQvLyDmiZPlvIAgbnZ1ZSDlrZDnqpfkvZMgIFxyXG5cdFx0XHRcdHN1Yk5WdWUuc2hvdygnc2xpZGUtaW4tYm90dG9tJywgMzAwLCBmdW5jdGlvbigpe30pOyAgXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaGFyZVNob3coZSl7XHJcblx0XHRcdFx0dGhpcy5zaGFyZVBvcHVwID0gdHJ1ZVxyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZVNoYXJlUG9wdXAoZSl7XHJcblx0XHRcdFx0dGhpcy5zaGFyZVBvcHVwID0gZmFsc2VcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWPjOWHu+aaguWBnOOAgeW8gOWni+aSreaUvlxyXG5cdFx0XHRkYmxjbGljayhlLG4pe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0dGhpcy50b3VjaE51bSArK1xyXG5cdFx0XHRcdGxldCB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdGlmKHRoaXMudG91Y2hOdW0gPT0gMSl7XHJcblx0XHRcdFx0XHRcdC8vIOWNleWHu1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlLCAxMTEpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLnRvdWNoTnVtID49IDIpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlLCAyMjIpXHJcblx0XHRcdFx0XHRcdC8vIOWPjOWHu1xyXG5cdFx0XHRcdFx0XHRpZih0aGlzLnByYWlzZUxpc3QuaW5kZXhPZihlKSA+IC0xKXtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLnByYWlzZUxpc3QuaW5kZXhPZihlKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJhaXNlTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJhaXNlTGlzdC5wdXNoKGUpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMudG91Y2hOdW0gPSAwXHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXIpXHJcblx0XHRcdFx0fSwyNTApXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0bi5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC5jb250YWluZXJ7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Lml0ZW0ge1xyXG5cdFx0XHR3aWR0aCA6IDc1MHJweDtcclxuXHRcdFx0ZmxleDogMTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Ym9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuXHRcdFx0LnJpZ2h0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHQvKiAjaWZkZWYgIUFQUC1OVlVFICovXHJcblx0XHRcdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRcdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0XHR3aWR0aDogNzMwcnB4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdFx0ei1pbmRleDogOTk5OTk7XHJcblx0XHRcdFx0LmF2YXRhcntcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0LmF2YXRhckltZ3tcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5hZGR7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA0NHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NHJweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTE5cnB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm9wZXJhe1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdFx0XHRcdC5vcGVyYV9pbWd7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA3MHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5vcGVyYV90ZXh0e1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogUGluZ0ZhbmcgU0M7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0LmluZm97XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDI1cnB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMTUwcnB4O1xyXG5cdFx0XHRcdHdpZHRoOiA1ODBycHg7XHJcblx0XHRcdFx0LmxldHRsZXtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0Lm5pY2tuYW1le1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogUGluZ0ZhbmcgU0M7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI0Y2RjVGQTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5leWV7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDI0cnB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDE4cnB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjM7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHQuZXllX2ltZ3tcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZXllX251bXtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZyBTQztcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5kYXJne1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMjBycHggMDtcclxuXHRcdFx0XHRcdC5kYXJnX3RleHR7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZyBTQztcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuZGVzY3tcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdC5kZXNjX3RleHR7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZyBTQztcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm9wZW57XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIOWIhuS6q+W8ueeql1xyXG5cdFx0XHJcblx0XHQucG9wdXB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdGhlaWdodDogNDAwcnB4O1xyXG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBycHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHJweDtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwMHJweCk7XHJcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdC50aXRsZXtcclxuXHRcdFx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0LnRpdGxlX3RleHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC5zaGFyZXN7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDUwcnB4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHQuc2hhcmVfaXRlbXtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHQuc2hhcmVfaW1ne1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogODhycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogODhycHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc2hhcmVfdGV4dHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTdycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZyBTQztcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQuY2FuY2Vse1xyXG5cdFx0XHRcdGhlaWdodDogOTdycHg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItdG9wOiBzb2xpZCAxcHggI0YyRjJGMjtcclxuXHRcdFx0XHQuY2FuY2VsX3RleHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnNob3dQb3B1cHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBycHgpO1xyXG5cdFx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTtcclxuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuXHRcdH1cclxuXHRcdC8vIOmBrue9qVxyXG5cdFx0Lm1hc2t7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/static/comm/wxfriend.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/wxfriend.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvY29tbS93eGZyaWVuZC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/static/comm/wxcircle.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/wxcircle.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvY29tbS93eGNpcmNsZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!********************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/static/comm/copy.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/copy.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvY29tbS9jb3B5LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/static/comm/downLoad.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/downLoad.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvY29tbS9kb3duTG9hZC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!*********************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/static/comm/photo.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/photo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvY29tbS9waG90by5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!**********************************************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page */ 44);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/project/HX/flow/pages/community/detail/videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ]
    }
  },
  ".item": {
    ".container ": {
      "width": [
        "750rpx",
        0,
        1,
        17
      ],
      "flex": [
        1,
        0,
        1,
        17
      ],
      "alignItems": [
        "center",
        0,
        1,
        17
      ],
      "justifyContent": [
        "center",
        0,
        1,
        17
      ],
      "position": [
        "relative",
        0,
        1,
        17
      ],
      "borderWidth": [
        "1",
        0,
        1,
        17
      ],
      "borderStyle": [
        "solid",
        0,
        1,
        17
      ],
      "borderColor": [
        "#ffffff",
        0,
        1,
        17
      ]
    }
  },
  ".right": {
    ".container .item ": {
      "position": [
        "absolute",
        0,
        2,
        18
      ],
      "width": [
        "730rpx",
        0,
        2,
        18
      ],
      "justifyContent": [
        "flex-start",
        0,
        2,
        18
      ],
      "alignItems": [
        "flex-end",
        0,
        2,
        18
      ],
      "zIndex": [
        99999,
        0,
        2,
        18
      ]
    }
  },
  ".avatar": {
    ".container .item .right ": {
      "display": [
        "flex",
        0,
        3,
        19
      ],
      "justifyContent": [
        "flex-start",
        0,
        3,
        19
      ],
      "alignItems": [
        "center",
        0,
        3,
        19
      ]
    }
  },
  ".avatarImg": {
    ".container .item .right .avatar ": {
      "width": [
        "80rpx",
        0,
        4,
        20
      ],
      "height": [
        "80rpx",
        0,
        4,
        20
      ],
      "borderBottomLeftRadius": [
        50,
        0,
        4,
        20
      ],
      "borderBottomRightRadius": [
        50,
        0,
        4,
        20
      ],
      "borderTopLeftRadius": [
        50,
        0,
        4,
        20
      ],
      "borderTopRightRadius": [
        50,
        0,
        4,
        20
      ]
    }
  },
  ".add": {
    ".container .item .right .avatar ": {
      "width": [
        "44rpx",
        0,
        4,
        21
      ],
      "height": [
        "44rpx",
        0,
        4,
        21
      ],
      "marginTop": [
        "-19rpx",
        0,
        4,
        21
      ],
      "borderBottomLeftRadius": [
        50,
        0,
        4,
        21
      ],
      "borderBottomRightRadius": [
        50,
        0,
        4,
        21
      ],
      "borderTopLeftRadius": [
        50,
        0,
        4,
        21
      ],
      "borderTopRightRadius": [
        50,
        0,
        4,
        21
      ]
    }
  },
  ".opera": {
    ".container .item .right ": {
      "display": [
        "flex",
        0,
        3,
        22
      ],
      "justifyContent": [
        "flex-start",
        0,
        3,
        22
      ],
      "alignItems": [
        "center",
        0,
        3,
        22
      ],
      "marginTop": [
        "20rpx",
        0,
        3,
        22
      ]
    }
  },
  ".opera_img": {
    ".container .item .right .opera ": {
      "width": [
        "70rpx",
        0,
        4,
        23
      ],
      "height": [
        "70rpx",
        0,
        4,
        23
      ]
    }
  },
  ".opera_text": {
    ".container .item .right .opera ": {
      "fontSize": [
        "24rpx",
        0,
        4,
        24
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        24
      ],
      "fontWeight": [
        "500",
        0,
        4,
        24
      ],
      "color": [
        "#FFFFFF",
        0,
        4,
        24
      ]
    }
  },
  ".info": {
    ".container .item ": {
      "position": [
        "absolute",
        0,
        2,
        25
      ],
      "left": [
        "25rpx",
        0,
        2,
        25
      ],
      "bottom": [
        "150rpx",
        0,
        2,
        25
      ],
      "width": [
        "580rpx",
        0,
        2,
        25
      ]
    }
  },
  ".lettle": {
    ".container .item .info ": {
      "flexDirection": [
        "row",
        0,
        3,
        26
      ],
      "justifyContent": [
        "flex-start",
        0,
        3,
        26
      ],
      "alignItems": [
        "center",
        0,
        3,
        26
      ]
    }
  },
  ".nickname": {
    ".container .item .info .lettle ": {
      "fontSize": [
        "36rpx",
        0,
        4,
        27
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        27
      ],
      "fontWeight": [
        "bold",
        0,
        4,
        27
      ],
      "color": [
        "#F6F5FA",
        0,
        4,
        27
      ]
    }
  },
  ".eye": {
    ".container .item .info .lettle ": {
      "flexDirection": [
        "row",
        0,
        4,
        28
      ],
      "justifyContent": [
        "flex-start",
        0,
        4,
        28
      ],
      "alignItems": [
        "center",
        0,
        4,
        28
      ],
      "marginLeft": [
        "24rpx",
        0,
        4,
        28
      ],
      "paddingTop": [
        0,
        0,
        4,
        28
      ],
      "paddingRight": [
        "18rpx",
        0,
        4,
        28
      ],
      "paddingBottom": [
        0,
        0,
        4,
        28
      ],
      "paddingLeft": [
        "18rpx",
        0,
        4,
        28
      ],
      "backgroundColor": [
        "#000000",
        0,
        4,
        28
      ],
      "opacity": [
        0.3,
        0,
        4,
        28
      ],
      "borderRadius": [
        "20rpx",
        0,
        4,
        28
      ]
    }
  },
  ".eye_img": {
    ".container .item .info .lettle .eye ": {
      "width": [
        "40rpx",
        0,
        5,
        29
      ],
      "height": [
        "40rpx",
        0,
        5,
        29
      ]
    }
  },
  ".eye_num": {
    ".container .item .info .lettle .eye ": {
      "fontSize": [
        "20rpx",
        0,
        5,
        30
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        5,
        30
      ],
      "fontWeight": [
        "500",
        0,
        5,
        30
      ],
      "color": [
        "#FFFFFF",
        0,
        5,
        30
      ]
    }
  },
  ".darg": {
    ".container .item .info ": {
      "flexDirection": [
        "row",
        0,
        3,
        31
      ],
      "flexWrap": [
        "wrap",
        0,
        3,
        31
      ],
      "marginTop": [
        "20rpx",
        0,
        3,
        31
      ],
      "marginRight": [
        0,
        0,
        3,
        31
      ],
      "marginBottom": [
        "20rpx",
        0,
        3,
        31
      ],
      "marginLeft": [
        0,
        0,
        3,
        31
      ]
    }
  },
  ".darg_text": {
    ".container .item .info .darg ": {
      "fontSize": [
        "30rpx",
        0,
        4,
        32
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        32
      ],
      "fontWeight": [
        "bold",
        0,
        4,
        32
      ],
      "color": [
        "#FFFFFF",
        0,
        4,
        32
      ]
    }
  },
  ".desc": {
    ".container .item .info ": {
      "position": [
        "relative",
        0,
        3,
        33
      ],
      "justifyContent": [
        "flex-start",
        0,
        3,
        33
      ],
      "alignItems": [
        "flex-start",
        0,
        3,
        33
      ],
      "flexWrap": [
        "wrap",
        0,
        3,
        33
      ]
    }
  },
  ".desc_text": {
    ".container .item .info .desc ": {
      "fontSize": [
        "30rpx",
        0,
        4,
        34
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        34
      ],
      "fontWeight": [
        "bold",
        0,
        4,
        34
      ],
      "color": [
        "#FFFFFF",
        0,
        4,
        34
      ]
    }
  },
  ".open": {
    ".container .item .info .desc ": {
      "position": [
        "absolute",
        0,
        4,
        35
      ],
      "right": [
        0,
        0,
        4,
        35
      ],
      "bottom": [
        0,
        0,
        4,
        35
      ],
      "fontSize": [
        "30rpx",
        0,
        4,
        35
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        35
      ],
      "fontWeight": [
        "bold",
        0,
        4,
        35
      ],
      "color": [
        "#FFFFFF",
        0,
        4,
        35
      ]
    }
  },
  ".popup": {
    ".container ": {
      "backgroundColor": [
        "#ffffff",
        0,
        1,
        36
      ],
      "width": [
        "750rpx",
        0,
        1,
        36
      ],
      "height": [
        "400rpx",
        0,
        1,
        36
      ],
      "position": [
        "fixed",
        0,
        1,
        36
      ],
      "bottom": [
        0,
        0,
        1,
        36
      ],
      "borderTopLeftRadius": [
        "20rpx",
        0,
        1,
        36
      ],
      "borderTopRightRadius": [
        "20rpx",
        0,
        1,
        36
      ],
      "transform": [
        "translateY(400rpx)",
        0,
        1,
        36
      ],
      "transitionProperty": [
        "transform",
        0,
        1,
        36
      ],
      "transitionDuration": [
        300,
        0,
        1,
        36
      ],
      "justifyContent": [
        "space-between",
        0,
        1,
        36
      ]
    }
  },
  ".title": {
    ".container .popup ": {
      "paddingTop": [
        "40rpx",
        0,
        2,
        37
      ],
      "paddingRight": [
        0,
        0,
        2,
        37
      ],
      "paddingBottom": [
        "40rpx",
        0,
        2,
        37
      ],
      "paddingLeft": [
        0,
        0,
        2,
        37
      ],
      "alignItems": [
        "center",
        0,
        2,
        37
      ]
    }
  },
  ".title_text": {
    ".container .popup .title ": {
      "fontSize": [
        "30rpx",
        0,
        3,
        38
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        38
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        38
      ],
      "color": [
        "#000000",
        0,
        3,
        38
      ]
    }
  },
  ".shares": {
    ".container .popup ": {
      "flexDirection": [
        "row",
        0,
        2,
        39
      ],
      "paddingTop": [
        0,
        0,
        2,
        39
      ],
      "paddingRight": [
        "50rpx",
        0,
        2,
        39
      ],
      "paddingBottom": [
        0,
        0,
        2,
        39
      ],
      "paddingLeft": [
        "50rpx",
        0,
        2,
        39
      ],
      "justifyContent": [
        "space-between",
        0,
        2,
        39
      ]
    }
  },
  ".share_item": {
    ".container .popup .shares ": {
      "alignItems": [
        "center",
        0,
        3,
        40
      ]
    }
  },
  ".share_img": {
    ".container .popup .shares .share_item ": {
      "width": [
        "88rpx",
        0,
        4,
        41
      ],
      "height": [
        "88rpx",
        0,
        4,
        41
      ]
    }
  },
  ".share_text": {
    ".container .popup .shares .share_item ": {
      "marginTop": [
        "17rpx",
        0,
        4,
        42
      ],
      "fontSize": [
        "22rpx",
        0,
        4,
        42
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        42
      ],
      "fontWeight": [
        "500",
        0,
        4,
        42
      ],
      "color": [
        "#333333",
        0,
        4,
        42
      ]
    }
  },
  ".cancel": {
    ".container .popup ": {
      "height": [
        "97rpx",
        0,
        2,
        43
      ],
      "justifyContent": [
        "center",
        0,
        2,
        43
      ],
      "alignItems": [
        "center",
        0,
        2,
        43
      ],
      "borderTopWidth": [
        "1",
        0,
        2,
        43
      ],
      "borderTopStyle": [
        "solid",
        0,
        2,
        43
      ],
      "borderTopColor": [
        "#F2F2F2",
        0,
        2,
        43
      ]
    }
  },
  ".cancel_text": {
    ".container .popup .cancel ": {
      "fontSize": [
        "30rpx",
        0,
        3,
        44
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        44
      ],
      "fontWeight": [
        "500",
        0,
        3,
        44
      ],
      "color": [
        "#333333",
        0,
        3,
        44
      ]
    }
  },
  ".showPopup": {
    ".container ": {
      "transform": [
        "translateY(0rpx)",
        0,
        1,
        45
      ],
      "transitionProperty": [
        "transform",
        0,
        1,
        45
      ],
      "transitionDuration": [
        300,
        0,
        1,
        45
      ]
    }
  },
  ".mask": {
    ".container ": {
      "flex": [
        1,
        0,
        1,
        46
      ],
      "position": [
        "absolute",
        0,
        1,
        46
      ],
      "width": [
        "750rpx",
        0,
        1,
        46
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.5)",
        0,
        1,
        46
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);