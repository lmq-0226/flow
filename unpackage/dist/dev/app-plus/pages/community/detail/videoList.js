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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!****************************************************!*\
  !*** D:/工作文件夹/HX/flow/main.js?{"type":"appStyle"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************!*\
  !*** D:/工作文件夹/HX/flow/App.vue?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/App.vue?vue&type=style&index=0&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 9 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);

/***/ }),
/* 10 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
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
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/*!*****************************************!*\
  !*** D:/工作文件夹/HX/flow/utils/request.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.date = exports.default = exports.socketurl = exports.ImgUrl = exports.url = void 0;\n\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../store/store.js */ 81));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var url = 'http://app.51liuxiang.com/api/';exports.url = url;var ImgUrl = 'http://app.51liuxiang.com';exports.ImgUrl = ImgUrl;var socketurl = 'wss://chat.51liuxiang.com';exports.socketurl = socketurl;\n// 全局token\nvar token = uni.getStorageSync('userInfo').token || '';var _default =\nfunction _default(options) {\n  return new Promise(function (resolved, rejected) {\n    // uni.showLoading({\n    // \ttitle: '加载中...'\n    // })\n    __f__(\"log\", '------------------------start------------------', \" at utils/request.js:12\");\n    __f__(\"log\", '接口地址:' + url + options.url, \" at utils/request.js:13\");\n    if (JSON.stringify(options.data) !== '{}') {\n      __f__(\"log\", '请求参数:', \" at utils/request.js:15\");\n      for (var field in options.data) {\n        __f__(\"log\", field + ':' + options.data[field], \" at utils/request.js:17\");\n      }\n    }\n    // request请求封装\n    uni.request({\n      url: url + options.url, // 请求接口地址\n      method: options.method || 'POST', // 方法从options中获取，如果没有传入method，则默认为POST，\n      data: options.data, // 请求接口参数\n      dataType: 'json',\n      header: options.header || {\n        'content-type': 'application/x-www-form-urlencoded',\n        'Authorization': 'Bearer' + token },\n\n      success: function success(res) {\n        __f__(\"log\", res.data.msg, res, \" at utils/request.js:31\");\n        if (res.statusCode == 200) {\n          if (res.data.code != 1 && options.url != 'userauth/info') {\n            uni.showToast({\n              title: res.data.msg,\n              icon: 'none' });\n\n          }\n        } else if (res.statusCode == 401 && options.url != 'wanlshop/chat/lists' && options.url != 'wanlshop/find/find/get_topic' && options.url != 'wanlshop/user/refresh') {\n          uni.showToast({\n            title: '请登录后操作',\n            icon: 'none' });\n\n        } else if (res.statusCode == 500) {\n          uni.showToast({\n            title: '服务器错误',\n            icon: 'none' });\n\n        }\n        resolved(res);\n      },\n      fail: function fail(err) {\n        rejected(err);\n      },\n      complete: function complete(all) {\n        // 关闭加载中的特效\n        // uni.hideLoading()\n        __f__(\"log\", '------------------------end------------------', \" at utils/request.js:58\");\n      } });\n\n  });\n};exports.default = _default;\nvar date = function date(format, timeStamp) {\n  if ('' + timeStamp.length <= 10) {\n    timeStamp = +timeStamp * 1000;\n  } else {\n    timeStamp = +timeStamp;\n  }\n  var _date = new Date(timeStamp),\n  Y = _date.getFullYear(),\n  m = _date.getMonth() + 1,\n  d = _date.getDate(),\n  H = _date.getHours(),\n  i = _date.getMinutes(),\n  s = _date.getSeconds();\n\n  m = m < 10 ? '0' + m : m;\n  d = d < 10 ? '0' + d : d;\n  H = H < 10 ? '0' + H : H;\n  i = i < 10 ? '0' + i : i;\n  s = s < 10 ? '0' + s : s;\n  return Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;\n  // return format.replace(/[YmdHis]/g, key=>{\n  // \treturn {Y,m,d,H,i,s}[key];\n  // });\n};exports.date = date;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 43)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJJbWdVcmwiLCJzb2NrZXR1cmwiLCJ0b2tlbiIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlZCIsInJlamVjdGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJmaWVsZCIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhVHlwZSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJtc2ciLCJzdGF0dXNDb2RlIiwiY29kZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImFsbCIsImRhdGUiLCJmb3JtYXQiLCJ0aW1lU3RhbXAiLCJsZW5ndGgiLCJfZGF0ZSIsIkRhdGUiLCJZIiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsIkgiLCJnZXRIb3VycyIsImkiLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7OztBQUdBLHNGLDZGQUhPLElBQU1BLEdBQUcsR0FBRyxnQ0FBWixDLGtCQUNBLElBQU1DLE1BQU0sR0FBRywyQkFBZixDLHdCQUNBLElBQU1DLFNBQVMsR0FBRywyQkFBbEIsQztBQUVQO0FBQ0EsSUFBSUMsS0FBSyxHQUFHQyxHQUFHLENBQUNDLGNBQUosQ0FBbUIsVUFBbkIsRUFBK0JGLEtBQS9CLElBQXdDLEVBQXBELEM7QUFDZSxrQkFBQ0csT0FBRCxFQUFhO0FBQzNCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxpQkFBWSxpREFBWjtBQUNBLGlCQUFZLFVBQVVULEdBQVYsR0FBZ0JNLE9BQU8sQ0FBQ04sR0FBcEM7QUFDQSxRQUFJVSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsT0FBTyxDQUFDTSxJQUF2QixNQUFpQyxJQUFyQyxFQUEyQztBQUMxQyxtQkFBWSxPQUFaO0FBQ0EsV0FBSyxJQUFJQyxLQUFULElBQWtCUCxPQUFPLENBQUNNLElBQTFCLEVBQWdDO0FBQy9CLHFCQUFZQyxLQUFLLEdBQUcsR0FBUixHQUFjUCxPQUFPLENBQUNNLElBQVIsQ0FBYUMsS0FBYixDQUExQjtBQUNBO0FBQ0Q7QUFDRDtBQUNBVCxPQUFHLENBQUNVLE9BQUosQ0FBWTtBQUNYZCxTQUFHLEVBQUVBLEdBQUcsR0FBR00sT0FBTyxDQUFDTixHQURSLEVBQ2E7QUFDeEJlLFlBQU0sRUFBRVQsT0FBTyxDQUFDUyxNQUFSLElBQWtCLE1BRmYsRUFFdUI7QUFDbENILFVBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUhILEVBR1M7QUFDcEJJLGNBQVEsRUFBRSxNQUpDO0FBS1hDLFlBQU0sRUFBRVgsT0FBTyxDQUFDVyxNQUFSLElBQWtCO0FBQ3pCLHdCQUFnQixtQ0FEUztBQUV6Qix5QkFBaUIsV0FBV2QsS0FGSCxFQUxmOztBQVNYZSxhQUFPLEVBQUUsaUJBQUNDLEdBQUQsRUFBUztBQUNqQixxQkFBWUEsR0FBRyxDQUFDUCxJQUFKLENBQVNRLEdBQXJCLEVBQTBCRCxHQUExQjtBQUNBLFlBQUdBLEdBQUcsQ0FBQ0UsVUFBSixJQUFrQixHQUFyQixFQUF5QjtBQUN4QixjQUFHRixHQUFHLENBQUNQLElBQUosQ0FBU1UsSUFBVCxJQUFpQixDQUFqQixJQUFzQmhCLE9BQU8sQ0FBQ04sR0FBUixJQUFlLGVBQXhDLEVBQXdEO0FBQ3ZESSxlQUFHLENBQUNtQixTQUFKLENBQWM7QUFDYkMsbUJBQUssRUFBRUwsR0FBRyxDQUFDUCxJQUFKLENBQVNRLEdBREg7QUFFYkssa0JBQUksRUFBRSxNQUZPLEVBQWQ7O0FBSUE7QUFDRCxTQVBELE1BT00sSUFBR04sR0FBRyxDQUFDRSxVQUFKLElBQWtCLEdBQWxCLElBQXlCZixPQUFPLENBQUNOLEdBQVIsSUFBZSxxQkFBeEMsSUFBaUVNLE9BQU8sQ0FBQ04sR0FBUixJQUFlLDhCQUFoRixJQUFrSE0sT0FBTyxDQUFDTixHQUFSLElBQWUsdUJBQXBJLEVBQTRKO0FBQ2pLSSxhQUFHLENBQUNtQixTQUFKLENBQWM7QUFDYkMsaUJBQUssRUFBRSxRQURNO0FBRWJDLGdCQUFJLEVBQUUsTUFGTyxFQUFkOztBQUlBLFNBTEssTUFLQSxJQUFHTixHQUFHLENBQUNFLFVBQUosSUFBa0IsR0FBckIsRUFBeUI7QUFDOUJqQixhQUFHLENBQUNtQixTQUFKLENBQWM7QUFDYkMsaUJBQUssRUFBRSxPQURNO0FBRWJDLGdCQUFJLEVBQUUsTUFGTyxFQUFkOztBQUlBO0FBQ0RqQixnQkFBUSxDQUFDVyxHQUFELENBQVI7QUFDQSxPQTlCVTtBQStCWE8sVUFBSSxFQUFFLGNBQUNDLEdBQUQsRUFBUztBQUNkbEIsZ0JBQVEsQ0FBQ2tCLEdBQUQsQ0FBUjtBQUNBLE9BakNVO0FBa0NYQyxjQWxDVyxvQkFrQ0ZDLEdBbENFLEVBa0NHO0FBQ2I7QUFDQTtBQUNBLHFCQUFZLCtDQUFaO0FBQ0EsT0F0Q1UsRUFBWjs7QUF3Q0EsR0FyRE0sQ0FBUDtBQXNEQSxDO0FBQ00sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQXVCO0FBQzFDLE1BQUcsS0FBS0EsU0FBUyxDQUFDQyxNQUFmLElBQXlCLEVBQTVCLEVBQStCO0FBQzlCRCxhQUFTLEdBQUcsQ0FBRUEsU0FBRixHQUFjLElBQTFCO0FBQ0EsR0FGRCxNQUVLO0FBQ0pBLGFBQVMsR0FBRyxDQUFFQSxTQUFkO0FBQ0E7QUFDRCxNQUFJRSxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTSCxTQUFULENBQVo7QUFDQ0ksR0FBQyxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFETDtBQUVDQyxHQUFDLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUZ4QjtBQUdDQyxHQUFDLEdBQUdOLEtBQUssQ0FBQ08sT0FBTixFQUhMO0FBSUNDLEdBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFOLEVBSkw7QUFLQ0MsR0FBQyxHQUFHVixLQUFLLENBQUNXLFVBQU4sRUFMTDtBQU1DQyxHQUFDLEdBQUdaLEtBQUssQ0FBQ2EsVUFBTixFQU5MOztBQVFBVCxHQUFDLEdBQUdBLENBQUMsR0FBRyxFQUFKLEdBQVMsTUFBTUEsQ0FBZixHQUFtQkEsQ0FBdkI7QUFDQUUsR0FBQyxHQUFHQSxDQUFDLEdBQUcsRUFBSixHQUFTLE1BQU1BLENBQWYsR0FBbUJBLENBQXZCO0FBQ0FFLEdBQUMsR0FBR0EsQ0FBQyxHQUFHLEVBQUosR0FBUyxNQUFNQSxDQUFmLEdBQW1CQSxDQUF2QjtBQUNBRSxHQUFDLEdBQUdBLENBQUMsR0FBRyxFQUFKLEdBQVMsTUFBTUEsQ0FBZixHQUFtQkEsQ0FBdkI7QUFDQUUsR0FBQyxHQUFHQSxDQUFDLEdBQUcsRUFBSixHQUFTLE1BQU1BLENBQWYsR0FBbUJBLENBQXZCO0FBQ0EsU0FBT1YsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCRSxDQUE5QixHQUFrQyxHQUFsQyxHQUF3Q0UsQ0FBeEMsR0FBNEMsR0FBNUMsR0FBa0RFLENBQXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2Qk0sQyIsImZpbGUiOiI4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmwgPSAnaHR0cDovL2FwcC41MWxpdXhpYW5nLmNvbS9hcGkvJ1xyXG5leHBvcnQgY29uc3QgSW1nVXJsID0gJ2h0dHA6Ly9hcHAuNTFsaXV4aWFuZy5jb20nXHJcbmV4cG9ydCBjb25zdCBzb2NrZXR1cmwgPSAnd3NzOi8vY2hhdC41MWxpdXhpYW5nLmNvbSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlLmpzJ1xyXG4vLyDlhajlsYB0b2tlblxyXG5sZXQgdG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykudG9rZW4gfHwgJydcclxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMpID0+IHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVkLCByZWplY3RlZCkgPT4ge1xyXG5cdFx0Ly8gdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdC8vIFx0dGl0bGU6ICfliqDovb3kuK0uLi4nXHJcblx0XHQvLyB9KVxyXG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXJ0LS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblx0XHRjb25zb2xlLmxvZygn5o6l5Y+j5Zyw5Z2AOicgKyB1cmwgKyBvcHRpb25zLnVybCk7XHJcblx0XHRpZiAoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKSAhPT0gJ3t9Jykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn6K+35rGC5Y+C5pWwOicpO1xyXG5cdFx0XHRmb3IgKGxldCBmaWVsZCBpbiBvcHRpb25zLmRhdGEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhmaWVsZCArICc6JyArIG9wdGlvbnMuZGF0YVtmaWVsZF0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyByZXF1ZXN06K+35rGC5bCB6KOFXHJcblx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdHVybDogdXJsICsgb3B0aW9ucy51cmwsIC8vIOivt+axguaOpeWPo+WcsOWdgFxyXG5cdFx0XHRtZXRob2Q6IG9wdGlvbnMubWV0aG9kIHx8ICdQT1NUJywgLy8g5pa55rOV5LuOb3B0aW9uc+S4reiOt+WPlu+8jOWmguaenOayoeacieS8oOWFpW1ldGhvZO+8jOWImem7mOiupOS4ulBPU1TvvIxcclxuXHRcdFx0ZGF0YTogb3B0aW9ucy5kYXRhLCAvLyDor7fmsYLmjqXlj6Plj4LmlbBcclxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0aGVhZGVyOiBvcHRpb25zLmhlYWRlciB8fCB7XHJcblx0XHRcdFx0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlcicgKyB0b2tlblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEubXNnLCByZXMpXHJcblx0XHRcdFx0aWYocmVzLnN0YXR1c0NvZGUgPT0gMjAwKXtcclxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGUgIT0gMSAmJiBvcHRpb25zLnVybCAhPSAndXNlcmF1dGgvaW5mbycpe1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNlIGlmKHJlcy5zdGF0dXNDb2RlID09IDQwMSAmJiBvcHRpb25zLnVybCAhPSAnd2FubHNob3AvY2hhdC9saXN0cycgJiYgb3B0aW9ucy51cmwgIT0gJ3dhbmxzaG9wL2ZpbmQvZmluZC9nZXRfdG9waWMnICYmIG9wdGlvbnMudXJsICE9ICd3YW5sc2hvcC91c2VyL3JlZnJlc2gnKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+eZu+W9leWQjuaTjeS9nCcsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZihyZXMuc3RhdHVzQ29kZSA9PSA1MDApe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pyN5Yqh5Zmo6ZSZ6K+vJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlZChyZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRyZWplY3RlZChlcnIpXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbXBsZXRlKGFsbCkge1xyXG5cdFx0XHRcdC8vIOWFs+mXreWKoOi9veS4reeahOeJueaViFxyXG5cdFx0XHRcdC8vIHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZC0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRhdGUgPSAoZm9ybWF0LCB0aW1lU3RhbXApID0+IHtcclxuXHRpZignJyArIHRpbWVTdGFtcC5sZW5ndGggPD0gMTApe1xyXG5cdFx0dGltZVN0YW1wID0gKyB0aW1lU3RhbXAgKiAxMDAwO1xyXG5cdH1lbHNle1xyXG5cdFx0dGltZVN0YW1wID0gKyB0aW1lU3RhbXA7XHJcblx0fVxyXG5cdGxldCBfZGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcCksXHJcblx0XHRZID0gX2RhdGUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdG0gPSBfZGF0ZS5nZXRNb250aCgpICsgMSxcclxuXHRcdGQgPSBfZGF0ZS5nZXREYXRlKCksXHJcblx0XHRIID0gX2RhdGUuZ2V0SG91cnMoKSxcclxuXHRcdGkgPSBfZGF0ZS5nZXRNaW51dGVzKCksXHJcblx0XHRzID0gX2RhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFxyXG5cdG0gPSBtIDwgMTAgPyAnMCcgKyBtIDogbTtcclxuXHRkID0gZCA8IDEwID8gJzAnICsgZCA6IGQ7XHJcblx0SCA9IEggPCAxMCA/ICcwJyArIEggOiBIO1xyXG5cdGkgPSBpIDwgMTAgPyAnMCcgKyBpIDogaTtcclxuXHRzID0gcyA8IDEwID8gJzAnICsgcyA6IHM7XHJcblx0cmV0dXJuIFkgKyAnLScgKyBtICsgJy0nICsgZCArICcgJyArIEggKyAnOicgKyBpICsgJzonICsgc1xyXG5cdC8vIHJldHVybiBmb3JtYXQucmVwbGFjZSgvW1ltZEhpc10vZywga2V5PT57XHJcblx0Ly8gXHRyZXR1cm4ge1ksbSxkLEgsaSxzfVtrZXldO1xyXG5cdC8vIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///80\n");

/***/ }),
/* 81 */
/*!***************************************!*\
  !*** D:/工作文件夹/HX/flow/store/store.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 82));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 83));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //因为uniapp内部已经内置了vuex，只要正确引用就可以\n//1.根目录创建store文件->index.js\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    userInfo: uni.getStorageSync('userInfo') || {}, // 登录用户信息\n    registerID: '' // 极光注册id\n  },\n  mutations: {\n    setUserInfo: function setUserInfo(state, data) {\n      state.userInfo = data;\n    },\n    setRegisterID: function setRegisterID(state, data) {\n      state.registerID = data;\n    } },\n\n  getters: {},\n\n\n  actions: {} });var _default =\n\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsInVzZXJJbmZvIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZWdpc3RlcklEIiwibXV0YXRpb25zIiwic2V0VXNlckluZm8iLCJkYXRhIiwic2V0UmVnaXN0ZXJJRCIsImdldHRlcnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0Esd0UsOEZBSEE7QUFDQTtBQUdBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEVBQUU7QUFDTkMsWUFBUSxFQUFFQyxHQUFHLENBQUNDLGNBQUosQ0FBbUIsVUFBbkIsS0FBa0MsRUFEdEMsRUFDMEM7QUFDaERDLGNBQVUsRUFBRSxFQUZOLENBRVM7QUFGVCxHQURxQjtBQUs1QkMsV0FBUyxFQUFFO0FBQ1ZDLGVBRFUsdUJBQ0VOLEtBREYsRUFDU08sSUFEVCxFQUNjO0FBQ3ZCUCxXQUFLLENBQUNDLFFBQU4sR0FBaUJNLElBQWpCO0FBQ0EsS0FIUztBQUlWQyxpQkFKVSx5QkFJSVIsS0FKSixFQUlXTyxJQUpYLEVBSWdCO0FBQ3pCUCxXQUFLLENBQUNJLFVBQU4sR0FBbUJHLElBQW5CO0FBQ0EsS0FOUyxFQUxpQjs7QUFhNUJFLFNBQU8sRUFBRSxFQWJtQjs7O0FBZ0I1QkMsU0FBTyxFQUFFLEVBaEJtQixFQUFmLENBQWQsQzs7Ozs7QUFxQmVaLEsiLCJmaWxlIjoiODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WboOS4unVuaWFwcOWGhemDqOW3sue7j+WGhee9ruS6hnZ1ZXjvvIzlj6ropoHmraPnoa7lvJXnlKjlsLHlj6/ku6VcclxuLy8xLuagueebruW9leWIm+W7unN0b3Jl5paH5Lu2LT5pbmRleC5qc1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuVnVlLnVzZShWdWV4KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcblx0c3RhdGU6IHtcclxuXHRcdHVzZXJJbmZvOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykgfHwge30sIC8vIOeZu+W9leeUqOaIt+S/oeaBr1xyXG5cdFx0cmVnaXN0ZXJJRDogJycgLy8g5p6B5YWJ5rOo5YaMaWRcclxuXHR9LFxyXG5cdG11dGF0aW9uczoge1xyXG5cdFx0c2V0VXNlckluZm8oc3RhdGUsIGRhdGEpe1xyXG5cdFx0XHRzdGF0ZS51c2VySW5mbyA9IGRhdGFcclxuXHRcdH0sXHJcblx0XHRzZXRSZWdpc3RlcklEKHN0YXRlLCBkYXRhKXtcclxuXHRcdFx0c3RhdGUucmVnaXN0ZXJJRCA9IGRhdGFcclxuXHRcdH1cclxuXHR9LFxyXG5cdGdldHRlcnM6IHtcclxuXHJcblx0fSxcclxuXHRhY3Rpb25zOiB7XHJcblxyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///81\n");

/***/ }),
/* 82 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 83 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */
/*!**********************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/main.js?{"page":"pages%2Fcommunity%2Fdetail%2FvideoList"} ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/community/detail/videoList.nvue?mpType=page */ 87);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/community/detail/videoList'\n        _pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_community_detail_videoList_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiI4Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY29tbXVuaXR5L2RldGFpbC92aWRlb0xpc3QubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jb21tdW5pdHkvZGV0YWlsL3ZpZGVvTGlzdCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///86\n");

/***/ }),
/* 87 */
/*!**************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page */ 88);\n/* harmony import */ var _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoList.nvue?vue&type=script&lang=js&mpType=page */ 104);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page */ 111).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page */ 111).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"12d4ee14\",\n  \"7820cf24\",\n  false,\n  _videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/community/detail/videoList.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEk7QUFDOUk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdHQUF1RjtBQUMzSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0dBQXVGO0FBQ2hKOztBQUVBOztBQUVBO0FBQ3VMO0FBQ3ZMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSw0R0FBTTtBQUNSLEVBQUUscUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW9MaXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTJkNGVlMTQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZGVvTGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvTGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92aWRlb0xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyZDRlZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyZDRlZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTJkNGVlMTRcIixcbiAgXCI3ODIwY2YyNFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb21tdW5pdHkvZGV0YWlsL3ZpZGVvTGlzdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///87\n");

/***/ }),
/* 88 */
/*!********************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page */ 89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_template_id_12d4ee14_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 89 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?vue&type=template&id=12d4ee14&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    chunleiVideo: __webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 90)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
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
      _c(
        "div",
        {
          staticClass: ["page"],
          style: { width: "750rpx", height: _vm.height }
        },
        [
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              attrs: { vertical: true, current: _vm.index },
              on: {
                change: _vm.changeCurrent,
                animationfinish: _vm.animationFinish
              }
            },
            _vm._l(_vm.videoList, function(item, idx) {
              return _c(
                "swiper-item",
                { key: idx, staticClass: ["swiper-item"] },
                [
                  Math.abs(_vm.index - idx) <= 1
                    ? _c(
                        "div",
                        { staticClass: ["video-box"] },
                        [
                          item.video_url
                            ? _c(
                                "block",
                                { staticClass: ["vblock"] },
                                [
                                  Math.abs(_vm.index - idx) <= 1
                                    ? _c("chunlei-video", {
                                        staticClass: ["video"],
                                        attrs: {
                                          src: item.video_url,
                                          height: _vm.height,
                                          width: _vm.width,
                                          play: item.flag,
                                          gDuration: item.duration,
                                          initialTime: item.initialTime,
                                          objectFit: item.objectFit
                                        },
                                        on: {
                                          pause: _vm.pauseVideo,
                                          playEnd: _vm.playEnd,
                                          add: _vm.commentAdd
                                        }
                                      })
                                    : _vm._e(),
                                  _c("view", { staticClass: ["right"] }, [
                                    item.avatar != ""
                                      ? _c(
                                          "view",
                                          { staticClass: ["avatar"] },
                                          [
                                            _c("u-image", {
                                              staticClass: ["avatarImg"],
                                              attrs: {
                                                src: item.avatar,
                                                mode: ""
                                              }
                                            }),
                                            _c(
                                              "view",
                                              {
                                                staticClass: ["add"],
                                                on: {
                                                  click: function($event) {
                                                    _vm.atten(item.user_no)
                                                  }
                                                }
                                              },
                                              [
                                                item.isFollow
                                                  ? _c("u-image", {
                                                      staticClass: [
                                                        "add_image"
                                                      ],
                                                      attrs: {
                                                        src:
                                                          "/static/comm/atten.png",
                                                        mode: ""
                                                      }
                                                    })
                                                  : _c("u-image", {
                                                      staticClass: [
                                                        "add_image"
                                                      ],
                                                      attrs: {
                                                        src:
                                                          "/static/comm/add2.png",
                                                        mode: ""
                                                      }
                                                    })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["opera"],
                                        on: {
                                          click: function($event) {
                                            _vm.praise(item.id)
                                          }
                                        }
                                      },
                                      [
                                        item.isLike
                                          ? _c("u-image", {
                                              staticClass: ["opera_img"],
                                              attrs: {
                                                src:
                                                  "/static/comm/videoPraiseOn.png",
                                                mode: ""
                                              }
                                            })
                                          : _c("u-image", {
                                              staticClass: ["opera_img"],
                                              attrs: {
                                                src:
                                                  "/static/comm/videoPraise.png",
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
                                          [_vm._v(_vm._s(item.likes))]
                                        )
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["opera"],
                                        on: {
                                          click: function($event) {
                                            _vm.open(item, $event)
                                          }
                                        }
                                      },
                                      [
                                        _c("u-image", {
                                          staticClass: ["opera_img"],
                                          attrs: {
                                            src:
                                              "/static/comm/videoComment.png",
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
                                          [_vm._v(_vm._s(item.comments))]
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
                                      item.nickname != ""
                                        ? _c(
                                            "u-text",
                                            {
                                              staticClass: ["nickname"],
                                              appendAsTree: true,
                                              attrs: { append: "tree" }
                                            },
                                            [
                                              _vm._v(
                                                "@" + _vm._s(item.nickname)
                                              )
                                            ]
                                          )
                                        : _vm._e()
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
                                                ? item.desc.substr(0, 55) +
                                                    " · · ·"
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
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            }),
            1
          ),
          _vm.sharePopup
            ? _c("view", {
                staticClass: ["mask"],
                style: { height: _vm.height },
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
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 90 */
/*!********************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 91);\n/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 93);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 102).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 102).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"bc70e9d0\",\n  \"004db7ef\",\n  false,\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunlei-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ29MO0FBQ3BMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJjNzBlOWQwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYzcwZTlkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmM3MGU5ZDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiYzcwZTlkMFwiLFxuICBcIjAwNGRiN2VmXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///90\n");

/***/ }),
/* 91 */
/*!***************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 92 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    { staticClass: ["video"] },
    [
      _c("u-video", {
        ref: "`video_${src}`",
        staticClass: ["video"],
        style: { height: _vm.height },
        attrs: {
          src: _vm.src,
          controls: _vm.controls,
          showPlayBtn: false,
          muted: !_vm.load || !_vm.play,
          loop: true,
          enableProgressGesture: false,
          objectFit: _vm.objectFit,
          initialTime: _vm.startTime,
          id: "video_" + _vm.src
        },
        on: {
          play: _vm.continuePlay,
          ended: _vm.playEnd,
          timeupdate: _vm.timeupdate
        }
      }),
      !_vm.play && !_vm.playFirst
        ? _c("cover-view", { staticClass: ["icon-view"] }, [
            _c(
              "u-text",
              {
                staticClass: ["icon"],
                staticStyle: { color: "#FFF" },
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("")]
            )
          ])
        : _vm._e(),
      _vm.poster != "" && _vm.playFirst
        ? _c("cover-image", {
            staticClass: ["img"],
            style: { height: _vm.height },
            attrs: { src: _vm.poster }
          })
        : _vm._e(),
      _c("cover-view", { staticClass: ["top"] }),
      _c("cover-view", { staticClass: ["bottom"] }),
      _c(
        "cover-view",
        { staticClass: ["slider-view"] },
        [
          _c("chunLei-slider", {
            style: { width: 380 + "px" },
            attrs: {
              max: _vm.duration,
              value: _vm.time,
              screenLeft: 120,
              width: 380
            },
            on: { change: _vm.changeCurrent }
          })
        ],
        1
      ),
      _c("cover-image", {
        staticClass: ["rotate-img"],
        style: { transform: "rotate(" + _vm.time * 20 + "deg)" },
        attrs: { src: _vm.rotateImg }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 93 */
/*!*********************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=script&lang=js& */ 94);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdlLENBQWdCLDRmQUFHLEVBQUMiLCJmaWxlIjoiOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///93\n");

/***/ }),
/* 94 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _chunLeiSlider = _interopRequireDefault(__webpack_require__(/*! ./chunLei-slider/chunLei-slider.nvue */ 95));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { chunLeiSlider: _chunLeiSlider.default }, props: { controls: { type: Boolean, default: false }, src: { type: String, default: '' }, rotateImg: { type: String, default: '' }, play: { type: Boolean, default: false }, height: { type: String, default: '' }, width: { type: String,\n      default: '' },\n\n    initialTime: {\n      type: Number,\n      default: 0 },\n\n    gDuration: {\n      type: Number,\n      default: 999 },\n    //大概时长使进度条更准确\n    objectFit: {\n      type: String,\n      default: 'contain' },\n\n    poster: { //视频封面的图片\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      time: 0,\n      duration: 0,\n      playFirst: true,\n      load: false,\n      timer: null };\n\n  },\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"texticons\",\n      'src': \"url('//static/chunlei-video/text-icon.ttf')\" });\n\n\n  },\n  mounted: function mounted() {var _this = this;\n    this.$nextTick(function () {\n      _this.videoCtx = uni.createVideoContext(\"video_\".concat(_this.src), _this);\n\n      setTimeout(function () {\n        _this.videoCtx.play();\n      }, 200);\n\n    });\n  },\n  methods: {\n    playVideo: function playVideo() {\n      uni.$emit('playStatus', {\n        status: !this.play });\n\n    },\n    continuePlay: function continuePlay() {var _this2 = this;\n      if (!this.load) {\n        setTimeout(function () {\n          _this2.load = true;\n          _this2.videoPlay();\n        }, 1000);\n      }\n    },\n    //拖动滑块\n    changeCurrent: function changeCurrent(e) {\n      this.time = e.detail.value;\n      this.videoCtx.seek(this.time);\n    },\n    //\n    playEnd: function playEnd() {\n      this.$emit('playEnd');\n    },\n    timeupdate: function timeupdate(event) {\n      this.duration = event.detail.duration;\n      if (this.time >= event.detail.duration) this.time = 0;\n      this.time = event.detail.currentTime;\n      this.$emit('timeupdate', this.time);\n    },\n    videoPlay: function videoPlay() {var _this3 = this;\n      if (this.timer) clearTimeout(this.timer);\n      this.timer = setTimeout(function () {\n        if (_this3.play) {\n          _this3.videoCtx.play();\n          _this3.playFirst = false;\n        } else {\n          _this3.videoCtx.pause();\n          // this.$emit('pause', this.time)\n        }\n      });\n\n    } },\n\n  watch: {\n    //防抖 防止视频播放暂停太快\n    play: function play(newVal, oldVal) {\n      if (this.load) this.videoPlay();\n    },\n    startTime: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.time = newVal;\n      } },\n\n    gDuration: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        this.duration = newVal;\n      } } },\n\n\n  computed: {\n    barWidth: function barWidth() {\n\n      var width = this.time / this.duration * parseInt(this.width);\n\n      return \"\".concat(width, \"px\");\n    },\n    startTime: function startTime() {\n      return this.initialTime;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLGlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLGNBQ0EscUNBREEsRUFEQSxFQUlBLFNBQ0EsWUFDQSxhQURBLEVBRUEsY0FGQSxFQURBLEVBS0EsT0FDQSxZQURBLEVBRUEsV0FGQSxFQUxBLEVBU0EsYUFDQSxZQURBLEVBRUEsV0FGQSxFQVRBLEVBYUEsUUFDQSxhQURBLEVBRUEsY0FGQSxFQWJBLEVBaUJBLFVBQ0EsWUFEQSxFQUVBLFdBRkEsRUFqQkEsRUFxQkEsU0FDQSxZQURBO0FBRUEsaUJBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBN0JBO0FBZ0NBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBakNBOztBQXFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFyQ0EsRUFKQTs7O0FBOENBLE1BOUNBLGtCQThDQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLGlCQUZBO0FBR0EscUJBSEE7QUFJQSxpQkFKQTtBQUtBLGlCQUxBOztBQU9BLEdBdERBO0FBdURBLGNBdkRBLDBCQXVEQTs7QUFFQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwwREFGQTs7O0FBS0EsR0EvREE7QUFnRUEsU0FoRUEscUJBZ0VBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7O0FBSUEsS0FQQTtBQVFBLEdBekVBO0FBMEVBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsMEJBREE7O0FBR0EsS0FMQTtBQU1BLGdCQU5BLDBCQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsSUFIQTtBQUlBO0FBQ0EsS0FiQTtBQWNBO0FBQ0EsaUJBZkEseUJBZUEsQ0FmQSxFQWVBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBO0FBQ0EsV0FwQkEscUJBb0JBO0FBQ0E7QUFDQSxLQXRCQTtBQXVCQSxjQXZCQSxzQkF1QkEsS0F2QkEsRUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUJBO0FBNkJBLGFBN0JBLHVCQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBOztBQVVBLEtBekNBLEVBMUVBOztBQXFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBOztBQUVBO0FBQ0EsT0FMQSxFQUxBOztBQVlBO0FBQ0EscUJBREE7QUFFQSxhQUZBLG1CQUVBLE1BRkEsRUFFQSxNQUZBLEVBRUE7QUFDQTtBQUNBLE9BSkEsRUFaQSxFQXJIQTs7O0FBd0lBO0FBQ0EsWUFEQSxzQkFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBTkE7QUFPQSxhQVBBLHVCQU9BO0FBQ0E7QUFDQSxLQVRBLEVBeElBLEUiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlb1wiPlxyXG5cdFx0PHZpZGVvIDpzcmM9XCJzcmNcIiA6Y29udHJvbHM9XCJjb250cm9sc1wiIDpzaG93LXBsYXktYnRuPVwiZmFsc2VcIiA6bXV0ZWQ9XCIhbG9hZHx8IXBsYXlcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0IH1cIlxyXG5cdFx0XHQ6bG9vcD1cInRydWVcIiBAcGxheT1cImNvbnRpbnVlUGxheVwiIDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCIgOm9iamVjdEZpdD1cIm9iamVjdEZpdFwiIEBlbmRlZD1cInBsYXlFbmRcIlxyXG5cdFx0XHQ6aW5pdGlhbC10aW1lPVwic3RhcnRUaW1lXCIgOmlkPVwiYHZpZGVvXyR7c3JjfWBcIiByZWY9XCJgdmlkZW9fJHtzcmN9YFwiIGNsYXNzPVwidmlkZW9cIiBAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIlxyXG5cdFx0XHRcclxuXHRcdFx0PlxyXG5cdFx0XHQ8IS0tIEBjbGljaz1cInBsYXlWaWRlb1wiIC0tPlxyXG5cdFx0PC92aWRlbz5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiaWNvbi12aWV3XCIgdi1pZj1cIiFwbGF5JiYhcGxheUZpcnN0XCI+PHRleHQgY2xhc3M9XCJpY29uXCIgc3R5bGU9XCJjb2xvcjojRkZGXCI+JiN4ZTg5Njs8L3RleHQ+XHJcblx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJpbWdcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0IH1cIiA6c3JjPVwicG9zdGVyXCIgdi1pZj1cInBvc3RlciE9JycmJnBsYXlGaXJzdFwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInRvcFwiPjwvY292ZXItdmlldz5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiYm90dG9tXCI+PC9jb3Zlci12aWV3PlxyXG5cdFx0PCEtLSAjaWZuZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwic2xpZGVyLXZpZXdcIj5cclxuXHRcdFx0PGNodW5MZWktc2xpZGVyIDptYXg9XCJkdXJhdGlvblwiIDp2YWx1ZT1cInRpbWVcIiA6c3R5bGU9XCJ7d2lkdGg6YCR7MzgwfXB4YH1cIiA6c2NyZWVuTGVmdD1cIjEyMFwiIDp3aWR0aD1cIjM4MFwiXHJcblx0XHRcdFx0QGNoYW5nZT1cImNoYW5nZUN1cnJlbnRcIj48L2NodW5MZWktc2xpZGVyPlxyXG5cdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJyb3RhdGVJbWdcIiBjbGFzcz1cInJvdGF0ZS1pbWdcIiA6c3R5bGU9XCJ7dHJhbnNmb3JtOmByb3RhdGUoJHt0aW1lKjIwfWRlZylgfVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicHJvZ3Jlc3NCYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBiYXJXaWR0aCB9XCI+PC9jb3Zlci12aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY2h1bkxlaVNsaWRlciBmcm9tICcuL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Y2h1bkxlaVNsaWRlclxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGNvbnRyb2xzOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzcmM6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0cm90YXRlSW1nOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXk6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGhlaWdodDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWR0aDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0aWFsVGltZToge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGdEdXJhdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiA5OTlcclxuXHRcdFx0fSwgLy/lpKfmpoLml7bplb/kvb/ov5vluqbmnaHmm7Tlh4bnoa5cclxuXHRcdFx0b2JqZWN0Rml0OiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdjb250YWluJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3N0ZXI6IHsgLy/op4bpopHlsIHpnaLnmoTlm77niYdcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGltZTogMCxcclxuXHRcdFx0XHRkdXJhdGlvbjogMCxcclxuXHRcdFx0XHRwbGF5Rmlyc3Q6IHRydWUsXHJcblx0XHRcdFx0bG9hZDogZmFsc2UsXHJcblx0XHRcdFx0dGltZXI6IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZUNyZWF0ZSgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdHZhciBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcInRleHRpY29uc1wiLFxyXG5cdFx0XHRcdCdzcmMnOiBcInVybCgnLy9zdGF0aWMvY2h1bmxlaS12aWRlby90ZXh0LWljb24udHRmJylcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudmlkZW9DdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuc3JjfWAsIHRoaXMpXHJcblx0XHRcdFx0Ly8jaWZuZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wbGF5KCk7XHJcblx0XHRcdFx0fSwgMjAwKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0cGxheVZpZGVvKCkge1xyXG5cdFx0XHRcdHVuaS4kZW1pdCgncGxheVN0YXR1cycsIHtcclxuXHRcdFx0XHRcdHN0YXR1czogIXRoaXMucGxheVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRpbnVlUGxheSgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubG9hZCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMubG9hZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb1BsYXkoKVxyXG5cdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5ouW5Yqo5ruR5Z2XXHJcblx0XHRcdGNoYW5nZUN1cnJlbnQoZSkge1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5zZWVrKHRoaXMudGltZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0cGxheUVuZCgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdwbGF5RW5kJylcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZXVwZGF0ZShldmVudCkge1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBldmVudC5kZXRhaWwuZHVyYXRpb25cclxuXHRcdFx0XHRpZiAodGhpcy50aW1lID49IGV2ZW50LmRldGFpbC5kdXJhdGlvbikgdGhpcy50aW1lID0gMFxyXG5cdFx0XHRcdHRoaXMudGltZSA9IGV2ZW50LmRldGFpbC5jdXJyZW50VGltZVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3RpbWV1cGRhdGUnLCB0aGlzLnRpbWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvUGxheSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy50aW1lcikgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGxheSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBsYXkoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5Rmlyc3QgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLiRlbWl0KCdwYXVzZScsIHRoaXMudGltZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHQvL+mYsuaKliDpmLLmraLop4bpopHmkq3mlL7mmoLlgZzlpKrlv6tcclxuXHRcdFx0cGxheTogZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5sb2FkKSB0aGlzLnZpZGVvUGxheSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJ0VGltZToge1xyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRoYW5kbGVyKG5ld1ZhbCwgb2xkVmFsKSB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy50aW1lID0gbmV3VmFsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnRHVyYXRpb246IHtcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsIG9sZFZhbCkge1xyXG5cdFx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IG5ld1ZhbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGJhcldpZHRoKCkge1xyXG5cclxuXHRcdFx0XHRsZXQgd2lkdGggPSB0aGlzLnRpbWUgLyB0aGlzLmR1cmF0aW9uICogcGFyc2VJbnQodGhpcy53aWR0aClcclxuXHJcblx0XHRcdFx0cmV0dXJuIGAke3dpZHRofXB4YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGFydFRpbWUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5pdGlhbFRpbWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdC8qIEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL2NodW5sZWktdmlkZW8vdGV4dC1pY29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9ICovXHJcblx0LyogI2VuZGlmKi9cclxuXHQudmlkZW8ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuaW1nIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdH1cclxuXHJcblx0Lmljb24tdmlldyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0fVxyXG5cclxuXHQudG9wIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC43KSk7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMDBycHg7XHJcblx0fVxyXG5cclxuXHQuaWNvbiB7XHJcblx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHRmb250LXNpemU6IDQycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XHJcblx0XHQvKiAjZW5kaWYqL1xyXG5cdFx0Zm9udC1mYW1pbHk6IHRleHRpY29ucztcclxuXHR9XHJcblxyXG5cdC5ib3R0b20ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDMwMHJweDtcclxuXHR9XHJcblxyXG5cdC5zbGlkZXItdmlldyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAzMHB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHR9XHJcblxyXG5cdC5wcm9ncmVzc0JhciB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAydXB4O1xyXG5cdFx0aGVpZ2h0OiA0dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDMwcHg7XHJcblx0XHQvLyNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0YW5pbWF0aW9uOiBmbGlja2VyIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuXHRcdC8vI2VuZGlmXHJcblx0fVxyXG5cclxuXHQvLyNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5cdEBrZXlmcmFtZXMgZmxpY2tlciB7XHJcblx0XHQwJSB7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAwICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIOaaguWBnOaViOaenCAqL1xyXG5cdFx0MTAlIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDJ1cHggI0ZGRkZGRjtcclxuXHRcdH1cclxuXHJcblx0XHQ1MCUge1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMTB1cHggI0ZGRkZGRjtcclxuXHRcdH1cclxuXHJcblx0XHQ2MCUge1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMTJ1cHggI0ZGRkZGRjtcclxuXHRcdH1cclxuXHJcblx0XHQ5MCUge1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMTh1cHggI0ZGRkZGRjtcclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDIwdXB4ICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly8jZW5kaWZcclxuXHQuZGFubXUtdmlldyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRoZWlnaHQ6IDE2MHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdGF0ZS1pbWcge1xyXG5cdFx0d2lkdGg6IDkwcnB4O1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMTAwcnB4O1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDVycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///94\n");

/***/ }),
/* 95 */
/*!************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& */ 96);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=script&lang=js& */ 98);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 100).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 100).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5a6b26ee\",\n  \"0d94ba13\",\n  false,\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunLei-slider/chunLei-slider.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ3VMO0FBQ3ZMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTZiMjZlZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE2YjI2ZWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE2YjI2ZWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWE2YjI2ZWVcIixcbiAgXCIwZDk0YmExM1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bkxlaS1zbGlkZXIvY2h1bkxlaS1zbGlkZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///95\n");

/***/ }),
/* 96 */
/*!*******************************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& */ 97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 97 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      ref: "slider",
      staticClass: ["slider", "flex"],
      style: { width: _vm.width + "px" },
      attrs: { id: "slider" }
    },
    [
      _c(
        "div",
        {
          staticClass: ["slider-left", "flex"],
          style: { width: _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [
          _c("div", {
            staticClass: ["left"],
            style: { backgroundColor: _vm.backgroundColor }
          })
        ]
      ),
      _c(
        "div",
        {
          staticClass: ["slider-right", "flex"],
          style: { width: _vm.currentWidth - _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [_c("div", { staticClass: ["right"] })]
      ),
      _c(
        "div",
        {
          staticClass: ["block", "flex"],
          style: {
            backgroundColor: _vm.touch ? _vm.blockOuterColor : "rgba(0,0,0,0)",
            left: _vm.leftWidth + "px"
          },
          on: { click: function($event) {} }
        },
        [
          _c(
            "div",
            {
              staticClass: ["block-inner", "flex"],
              style: { backgroundColor: _vm.blockBackgroundColor },
              on: {
                touchmove: _vm.blockTouchMove,
                touchend: _vm.blockTouchEnd,
                touchstart: _vm.blockTouchStart
              }
            },
            [
              _c("div", {
                staticClass: ["block-inner-inner"],
                style: { backgroundColor: _vm.blockColor }
              })
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 98 */
/*!*************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=script&lang=js& */ 99);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBlLENBQWdCLDZmQUFHLEVBQUMiLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///98\n");

/***/ }),
/* 99 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    min: {\n      type: Number,\n      default: 0 },\n\n    max: {\n      type: Number,\n      default: 0 },\n\n    value: {\n      type: Number,\n      default: 0 },\n\n    width: {\n      type: Number,\n      default: 0 },\n\n    ratio: {\n      type: Number,\n      default: 1 },\n\n    direction: {\n      type: String,\n      default: 'screenX' },\n\n    backgroundColor: { //滑块右侧背景条的颜色\n      type: String,\n      default: '#e9e9e9' },\n\n    blockColor: { //滑块颜色\n      type: String,\n      default: '#ffffff' },\n\n    screenLeft: { //slider距离左边距离\n      type: Number,\n      default: 0 },\n\n    iosDirection: {\n      type: Number,\n      default: 1 } },\n\n\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false };\n\n  },\n  mounted: function mounted() {\n\n\n  },\n  methods: {\n    sliderTouch: function sliderTouch(e) {\n      __f__(\"log\", e, \" at components/chunlei-video/chunLei-slider/chunLei-slider.nvue:78\");\n      var touches = e.changedTouches[0];\n      this.leftWidth = (touches[this.direction] || touches['clientX']) * this.ratio - this.screenLeft;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n      this.blockTouchEnd();\n\n    },\n    // 触摸开始\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      this.oldToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX;\n\n      newToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n\n      this.leftWidth = this.iosDirection * (newToucesX - this.oldToucesX) * this.ratio + this.oldLeftWidth;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n\n    },\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      var current = this.leftWidth / this.currentWidth * this.max;\n      var event = { detail: { value: current } };\n      this.$emit('change', event);\n      this.touch = false;\n    },\n    colorRgb: function colorRgb(string, opacity) {\n      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n      var sColor = string.toLowerCase();\n      if (sColor && reg.test(sColor)) {\n        if (sColor.length === 4) {\n          var sColorNew = \"#\";\n          for (var i = 1; i < 4; i += 1) {\n            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));\n          }\n          sColor = sColorNew;\n        }\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i = 1; i < 7; i += 2) {\n          sColorChange.push(parseInt(\"0x\" + sColor.slice(i, i + 2)));\n        }\n        return \"rgba(\" + sColorChange.join(\",\") + \",\".concat(opacity) + \")\";\n      } else {\n        return sColor;\n      }\n    } },\n\n  computed: {\n    blockOuterColor: function blockOuterColor() {\n      return this.colorRgb(this.blockColor, 0.4);\n    },\n    blockBackgroundColor: function blockBackgroundColor() {\n      return this.colorRgb(this.blockColor, 0.5);\n    },\n    currentWidth: function currentWidth() {\n      return this.width - 40;\n    } },\n\n  watch: {\n    value: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n\n        this.leftWidth = newVal / this.max * this.currentWidth;\n        this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      } } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 43)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWJBOztBQWlCQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFqQkE7O0FBcUJBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXJCQTs7QUF5QkE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBekJBOztBQTZCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUE3QkE7O0FBaUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWpDQTs7QUFxQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBckNBLEVBREE7OztBQTJDQSxNQTNDQSxrQkEyQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQSxxQkFIQTtBQUlBLGtCQUpBOztBQU1BLEdBbERBO0FBbURBLFNBbkRBLHFCQW1EQTs7O0FBR0EsR0F0REE7QUF1REE7QUFDQSxlQURBLHVCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQVRBO0FBVUE7QUFDQSxtQkFYQSwyQkFXQSxDQVhBLEVBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBO0FBQ0Esa0JBakJBLDBCQWlCQSxDQWpCQSxFQWlCQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQTFCQTtBQTJCQTtBQUNBLGlCQTVCQSx5QkE0QkEsQ0E1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakNBO0FBa0NBLFlBbENBLG9CQWtDQSxNQWxDQSxFQWtDQSxPQWxDQSxFQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FkQSxNQWNBO0FBQ0E7QUFDQTtBQUNBLEtBdERBLEVBdkRBOztBQStHQTtBQUNBLG1CQURBLDZCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsd0JBSkEsa0NBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxnQkFQQSwwQkFPQTtBQUNBO0FBQ0EsS0FUQSxFQS9HQTs7QUEwSEE7QUFDQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BUEEsRUFEQSxFQTFIQSxFIiwiZmlsZSI6Ijk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJzbGlkZXIgZmxleFwiIGlkPVwic2xpZGVyXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIiByZWY9XCJzbGlkZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJzbGlkZXItbGVmdCBmbGV4XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7bGVmdFdpZHRofXB4YCB9XCIgQHRvdWNoZW5kLnN0b3A9XCJzbGlkZXJUb3VjaFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVmdFwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yfVwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwic2xpZGVyLXJpZ2h0IGZsZXhcIiBAdG91Y2hlbmQuc3RvcD1cInNsaWRlclRvdWNoXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7Y3VycmVudFdpZHRoLWxlZnRXaWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmlnaHRcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImJsb2NrIGZsZXhcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOnRvdWNoP2Jsb2NrT3V0ZXJDb2xvcjoncmdiYSgwLDAsMCwwKScsIGxlZnQ6IGAke2xlZnRXaWR0aH1weGB9XCJcclxuXHRcdFx0QGNsaWNrLnN0b3A9XCJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrLWlubmVyIGZsZXhcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJsb2NrQmFja2dyb3VuZENvbG9yfVwiICBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImJsb2NrVG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwiYmxvY2tUb3VjaEVuZFwiIEB0b3VjaHN0YXJ0PVwiYmxvY2tUb3VjaFN0YXJ0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrLWlubmVyLWlubmVyXCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpibG9ja0NvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRtaW46e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXg6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2YWx1ZTp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZHRoOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0cmF0aW86e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaXJlY3Rpb246e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6J3NjcmVlblgnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjp7IC8v5ruR5Z2X5Y+z5L6n6IOM5pmv5p2h55qE6aKc6ImyXHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonI2U5ZTllOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YmxvY2tDb2xvcjp7IC8v5ruR5Z2X6aKc6ImyXHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonI2ZmZmZmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0c2NyZWVuTGVmdDp7IC8vc2xpZGVy6Led56a75bem6L656Led56a7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdGlvc0RpcmVjdGlvbjp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDoxXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHRvbGRUb3VjZXNYOjAsXHJcblx0XHRcdFx0bGVmdFdpZHRoOjAsXHJcblx0XHRcdFx0b2xkTGVmdFdpZHRoOjAsXHJcblx0XHRcdFx0dG91Y2g6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0c2xpZGVyVG91Y2goZSl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRsZXQgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9ICh0b3VjaGVzW3RoaXMuZGlyZWN0aW9uXXx8dG91Y2hlc1snY2xpZW50WCddKSp0aGlzLnJhdGlvLXRoaXMuc2NyZWVuTGVmdFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLmN1cnJlbnRXaWR0aD8gdGhpcy5jdXJyZW50V2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPCAwPyAwIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmJsb2NrVG91Y2hFbmQoKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDop6bmkbjlvIDlp4tcclxuXHRcdFx0YmxvY2tUb3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnRvdWNoID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMub2xkTGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLm9sZFRvdWNlc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdW3RoaXMuZGlyZWN0aW9uXXx8ZS5jaGFuZ2VkVG91Y2hlc1swXVsnY2xpZW50WCddO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpfmlrnlkJFcclxuXHRcdFx0YmxvY2tUb3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdGxldCBuZXdUb3VjZXNYXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bmV3VG91Y2VzWD0gZS5jaGFuZ2VkVG91Y2hlc1swXVt0aGlzLmRpcmVjdGlvbl18fGUuY2hhbmdlZFRvdWNoZXNbMF1bJ2NsaWVudFgnXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMuaW9zRGlyZWN0aW9uKihuZXdUb3VjZXNYIC0gdGhpcy5vbGRUb3VjZXNYKSp0aGlzLnJhdGlvKyB0aGlzLm9sZExlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLmN1cnJlbnRXaWR0aD8gdGhpcy5jdXJyZW50V2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPCAwPyAwIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uT5p2f6Kem5pG4XHJcblx0XHRcdGJsb2NrVG91Y2hFbmQoZSkge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50ID0gdGhpcy5sZWZ0V2lkdGggLyB0aGlzLmN1cnJlbnRXaWR0aCAqdGhpcy5tYXhcclxuXHRcdFx0XHRjb25zdCBldmVudCA9IHtkZXRhaWw6e3ZhbHVlOmN1cnJlbnR9fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsZXZlbnQpXHJcblx0XHRcdFx0dGhpcy50b3VjaCA9IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbG9yUmdiKHN0cmluZyxvcGFjaXR5KXtcclxuXHRcdFx0XHR2YXIgcmVnID0gL14jKFswLTlhLWZBLWZdezN9fFswLTlhLWZBLWZdezZ9KSQvO1xyXG5cdFx0XHRcdHZhciBzQ29sb3IgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRpZihzQ29sb3IgJiYgcmVnLnRlc3Qoc0NvbG9yKSl7XHJcblx0XHRcdFx0ICAgIGlmKHNDb2xvci5sZW5ndGggPT09IDQpe1xyXG5cdFx0XHRcdCAgICAgICAgdmFyIHNDb2xvck5ldyA9IFwiI1wiO1xyXG5cdFx0XHRcdCAgICAgICAgZm9yKHZhciBpPTE7IGk8NDsgaSs9MSl7XHJcblx0XHRcdFx0ICAgICAgICAgICAgc0NvbG9yTmV3ICs9IHNDb2xvci5zbGljZShpLGkrMSkuY29uY2F0KHNDb2xvci5zbGljZShpLGkrMSkpOyAgIFxyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICAgICAgc0NvbG9yID0gc0NvbG9yTmV3O1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIC8v5aSE55CG5YWt5L2N55qE6aKc6Imy5YC8XHJcblx0XHRcdFx0ICAgIHZhciBzQ29sb3JDaGFuZ2UgPSBbXTtcclxuXHRcdFx0XHQgICAgZm9yKHZhciBpPTE7IGk8NzsgaSs9Mil7XHJcblx0XHRcdFx0ICAgICAgICBzQ29sb3JDaGFuZ2UucHVzaChwYXJzZUludChcIjB4XCIrc0NvbG9yLnNsaWNlKGksaSsyKSkpOyAgXHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgcmV0dXJuIFwicmdiYShcIiArIHNDb2xvckNoYW5nZS5qb2luKFwiLFwiKSArYCwke29wYWNpdHl9YCtcIilcIjtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQgICAgcmV0dXJuIHNDb2xvcjsgIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0YmxvY2tPdXRlckNvbG9yKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3JSZ2IodGhpcy5ibG9ja0NvbG9yLDAuNClcclxuXHRcdFx0fSxcclxuXHRcdFx0YmxvY2tCYWNrZ3JvdW5kQ29sb3IoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xvclJnYih0aGlzLmJsb2NrQ29sb3IsMC41KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50V2lkdGgoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy53aWR0aCAtIDQwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdHZhbHVlOntcclxuXHRcdFx0XHRpbW1lZGlhdGU6dHJ1ZSxcclxuXHRcdFx0XHRoYW5kbGVyKG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy50b3VjaCkgcmV0dXJuXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gbmV3VmFsL3RoaXMubWF4ICogdGhpcy5jdXJyZW50V2lkdGhcclxuXHRcdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLmN1cnJlbnRXaWR0aD8gdGhpcy5jdXJyZW50V2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5mbGV4e1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHJcblx0fVxyXG5cdC5zbGlkZXJ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFxyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5zbGlkZXItbGVmdHtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubGVmdHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHR9XHJcblx0LnNsaWRlci1yaWdodHtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQucmlnaHR7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC5ibG9ja3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHR9XHJcblx0LmJsb2NrLWlubmVye1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuYmxvY2staW5uZXItaW5uZXJ7XHJcblx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHR3aWR0aDogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFxyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///99\n");

/***/ }),
/* 100 */
/*!**********************************************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 101);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 101 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".slider": {
    "": {
      "position": [
        "relative",
        0,
        0,
        16
      ],
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "height": [
        "40",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".slider-left": {
    "": {
      "height": [
        "40",
        0,
        0,
        17
      ],
      "flexDirection": [
        "row",
        0,
        0,
        17
      ],
      "alignItems": [
        "center",
        0,
        0,
        17
      ]
    }
  },
  ".left": {
    "": {
      "flex": [
        1,
        0,
        0,
        18
      ],
      "height": [
        "3",
        0,
        0,
        18
      ]
    }
  },
  ".slider-right": {
    "": {
      "height": [
        "40",
        0,
        0,
        19
      ],
      "flexDirection": [
        "row",
        0,
        0,
        19
      ],
      "alignItems": [
        "center",
        0,
        0,
        19
      ]
    }
  },
  ".right": {
    "": {
      "height": [
        "3",
        0,
        0,
        20
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.3)",
        0,
        0,
        20
      ],
      "flex": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".block": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        21
      ],
      "height": [
        "40",
        0,
        0,
        21
      ],
      "width": [
        "40",
        0,
        0,
        21
      ],
      "borderRadius": [
        "20",
        0,
        0,
        21
      ],
      "justifyContent": [
        "center",
        0,
        0,
        21
      ],
      "alignItems": [
        "center",
        0,
        0,
        21
      ],
      "zIndex": [
        999999,
        0,
        0,
        21
      ]
    }
  },
  ".block-inner": {
    "": {
      "height": [
        "20",
        0,
        0,
        22
      ],
      "width": [
        "20",
        0,
        0,
        22
      ],
      "borderRadius": [
        "10",
        0,
        0,
        22
      ],
      "justifyContent": [
        "center",
        0,
        0,
        22
      ],
      "alignItems": [
        "center",
        0,
        0,
        22
      ]
    }
  },
  ".block-inner-inner": {
    "": {
      "height": [
        "10",
        0,
        0,
        23
      ],
      "width": [
        "10",
        0,
        0,
        23
      ],
      "borderRadius": [
        "5",
        0,
        0,
        23
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 102 */
/*!*****************************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 103);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 103 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".video": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        0
      ],
      "justifyContent": [
        "center",
        0,
        0,
        0
      ],
      "alignItems": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  ".img": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        1
      ],
      "width": [
        "750rpx",
        0,
        0,
        1
      ]
    }
  },
  ".icon-view": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        2
      ]
    }
  },
  ".top": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        3
      ],
      "top": [
        0,
        0,
        0,
        3
      ],
      "backgroundImage": [
        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
        0,
        0,
        3
      ],
      "width": [
        "750rpx",
        0,
        0,
        3
      ],
      "height": [
        "300rpx",
        0,
        0,
        3
      ]
    }
  },
  ".icon": {
    "": {
      "opacity": [
        0.6,
        0,
        0,
        4
      ],
      "fontSize": [
        "42",
        0,
        0,
        4
      ],
      "color": [
        "#ffffff",
        0,
        0,
        4
      ],
      "fontFamily": [
        "texticons",
        0,
        0,
        4
      ]
    }
  },
  ".bottom": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        5
      ],
      "bottom": [
        0,
        0,
        0,
        5
      ],
      "backgroundImage": [
        "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
        0,
        0,
        5
      ],
      "width": [
        "750rpx",
        0,
        0,
        5
      ],
      "height": [
        "300rpx",
        0,
        0,
        5
      ]
    }
  },
  ".slider-view": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        6
      ],
      "left": [
        0,
        0,
        0,
        6
      ],
      "bottom": [
        "30",
        0,
        0,
        6
      ],
      "width": [
        "750rpx",
        0,
        0,
        6
      ]
    }
  },
  ".progressBar": {
    "": {
      "borderRadius": [
        "2upx",
        0,
        0,
        7
      ],
      "height": [
        "4upx",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "zIndex": [
        999999,
        0,
        0,
        7
      ],
      "position": [
        "absolute",
        0,
        0,
        7
      ],
      "left": [
        0,
        0,
        0,
        7
      ],
      "bottom": [
        "30",
        0,
        0,
        7
      ]
    }
  },
  ".danmu-view": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        8
      ],
      "top": [
        0,
        0,
        0,
        8
      ],
      "height": [
        "160",
        0,
        0,
        8
      ]
    }
  },
  ".rotate-img": {
    "": {
      "width": [
        "90rpx",
        0,
        0,
        9
      ],
      "height": [
        "90rpx",
        0,
        0,
        9
      ],
      "position": [
        "absolute",
        0,
        0,
        9
      ],
      "bottom": [
        "100rpx",
        0,
        0,
        9
      ],
      "right": [
        "20rpx",
        0,
        0,
        9
      ],
      "borderRadius": [
        "45rpx",
        0,
        0,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 104 */
/*!**************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoList.nvue?vue&type=script&lang=js&mpType=page */ 105);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdmLENBQWdCLG1nQkFBRyxFQUFDIiwiZmlsZSI6IjEwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0xpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9MaXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///104\n");

/***/ }),
/* 105 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! @/components/chunlei-video/chunlei-video */ 90));\nvar _request = __webpack_require__(/*! @/utils/request.js */ 80);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n\n\n\n{\n  components: {\n    chunleiVideo: _chunleiVideo.default },\n\n  data: function data() {\n    return {\n      sysheight: 0,\n      playCount: 2, //剩余多少视频加载视频列表\n      videoList: [],\n      height: '667px',\n      index: 0,\n      width: '',\n      oldIndex: 0,\n      // ********************\n      praiseList: [], // 点赞过的数据id\n      attenList: [], // 关注列表\n      sharePopup: false, // 分享弹窗\n      shareList: [{\n        src: __webpack_require__(/*! @/static/comm/wxfriend.png */ 106),\n        text: '微信好友' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/wxcircle.png */ 107),\n        text: '朋友圈' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/copy.png */ 108),\n        text: '复制链接' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/downLoad.png */ 109),\n        text: '下载至相册' },\n\n      {\n        src: __webpack_require__(/*! @/static/comm/photo.png */ 110),\n        text: '生成分享图' }],\n\n\n      install: false,\n      detail: {\n        id: '' },\n\n      page: 1 };\n\n  },\n  onReady: function onReady() {\n    this.height = uni.getSystemInfoSync().windowHeight + 'px';\n  },\n  onLoad: function onLoad(option) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var id;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!\n              option.video) {_context.next = 6;break;}\n              _this.detail = JSON.parse(option.video);\n              __f__(\"log\", _this.detail, '111', \" at pages/community/detail/videoList.nvue:136\");\n              _this.videoList.push({\n                video_url: _request.ImgUrl + _this.detail.video_url,\n                content: _this.detail.content,\n                flag: true,\n                check: false,\n                isLike: _this.detail.isLike == 0 ? false : true,\n                likes: _this.detail.likes,\n                isFollow: _this.detail.isFollow == 0 ? false : true,\n                comments: _this.detail.comments,\n                type_text: _this.detail.id,\n                id: _this.detail.id,\n                avatar: '',\n                initialTime: 0,\n                duration: 0,\n                user_id: _this.detail.user_id,\n                user_no: _this.detail.user_no,\n                nickname: '',\n                desc: '这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材',\n                status: true });_context.next = 11;break;case 6:\n\n\n              id = _this.detail.id;\n              //设置id 通过id轮到相应位置\n              _context.next = 9;return _this.pushVideoList();case 9:\n              _this.index = _this.videoList.reduce(function (total, item) {\n                if (id == '' || id == item.id) {\n                  id = '';\n                } else {\n                  total++;\n                }\n                return total;\n              }, 0);\n              if (!_this.index) {\n                _this.$nextTick(function () {\n                  _this.videoPlay(_this.index);\n                });\n              }case 11:case \"end\":return _context.stop();}}}, _callee);}))();\n\n\n\n\n\n  },\n  created: function created() {var _this2 = this;\n    // 评论成功，评论数量加1\n    uni.$on('add', function (e) {\n      _this2.videoList[_this2.index].comments = e.count;\n    });\n    // 监听点击播放/暂停\n    uni.$on('playStatus', function (e) {\n      _this2.videoList[_this2.index].flag = e.status;\n    });\n\n    plus.screen.lockOrientation(\"portrait-primary\");\n    //隐藏subnvue\n    uni.getSubNVueById('comment').hide();\n    // uni.getSubNVueById('input-box').hide()\n\n    var width = uni.getSystemInfoSync().windowWidth;\n    this.width = \"\".concat(width, \"px\");\n    // this.videoList.length = 300\n    // this.videoList.fill({\n    // \tsrc: ''\n    // })\n  },\n  onShow: function onShow() {\n    this.install = uni.getStorageSync('install');\n    if (!this.install) {\n      this.shareList.splice(0, 2);\n    }\n  },\n  onHide: function onHide() {var _iterator = _createForOfIteratorHelper(\n    this.videoList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n        item.flag = false;\n      }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  },\n  methods: {\n    // playEnd(){\n    // \tthis.videoList[this.oldIndex].initialTime = 0\n    // },\n    animationFinish: function animationFinish(e) {\n\n      this.changeCurrent(e);\n\n    },\n    changeCurrent: function changeCurrent(e) {var _this3 = this;\n      // 滑动视频清空评论弹窗中的评论数据\n      uni.$emit('clearCom');\n\n      this.index = e.detail.current;\n      this.$nextTick(function () {var _iterator2 = _createForOfIteratorHelper(\n\n        _this3.videoList),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;\n            item.flag = false;\n          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}\n\n        _this3.videoList[_this3.index].flag = true;\n\n      });\n\n    },\n    pushVideoList: function pushVideoList() {var _this4 = this;\n      var promise = new Promise(function (resolve, reject) {\n        uni.request({\n          url: 'http://app.51liuxiang.com/api/wanlshop/find/find/getList',\n          header: {\n            token: uni.getStorageSync('userInfo').token },\n\n          data: {\n            type: 'video',\n            page: _this4.page },\n\n          success: function success(res) {\n            var videoGroup = [];\n            res.data.data.data.forEach(function (item) {\n              if (item.type == 'video') {\n                videoGroup.push({\n                  video_url: _request.ImgUrl + item.video_url,\n                  content: item.content,\n                  flag: false,\n                  check: false,\n                  isLike: item.isLike == 0 ? false : true,\n                  likes: item.likes,\n                  isFollow: item.isFollow == 0 ? false : true,\n                  comments: item.comments,\n                  type_text: item.id,\n                  id: item.id,\n                  avatar: _request.ImgUrl + item.user.avatar,\n                  initialTime: 0,\n                  duration: 0,\n                  user_id: item.user_id,\n                  user_no: item.user_no,\n                  nickname: item.user.nickname,\n                  desc: '这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材这件菱格深得我心 搭配同色系同材',\n                  status: true });\n\n              }\n            });\n            var len = _this4.videoList.filter(function (item) {return item.video_url;}).length;\n            for (var i = len; i < len + videoGroup.length; i++) {\n              _this4.$set(_this4.videoList, i, videoGroup[i - len]);\n            }\n            _this4.page++;\n            resolve();\n          } });\n\n      });\n      return promise;\n    },\n    videoPlay: function videoPlay(index) {var _this5 = this;\n      var promise = new Promise(function (resolve, reject) {\n        resolve();\n      });\n      promise.then(function (res) {\n        _this5.$set(_this5.videoList[index], 'flag', !_this5.videoList[index].flag);\n\n      });\n    },\n    pauseVideo: function pauseVideo(val) {\n      if (typeof this.videoList[this.oldIndex].initialTime != 'undefined') this.videoList[this.oldIndex].\n      initialTime = val;\n    },\n    clickVideo: function clickVideo() {\n      __f__(\"log\", 111, \" at pages/community/detail/videoList.nvue:300\");\n      this.videoList[this.index].flag = !this.videoList[this.index].flag;\n    },\n    // 评论subNvue弹窗\n    open: function open(e, n) {\n\n      // 通过 id 获取 nvue 子窗体\n      var subNVue = uni.getSubNVueById('comment');\n      // 打开 nvue 子窗体  \n      subNVue.show('slide-in-bottom', 300, function () {\n        uni.$emit('subNVueShow', {\n          id: e.id,\n          user_id: e.user_id });\n\n      });\n\n      n.stopPropagation();\n    },\n    // 分享弹窗\n    shareShow: function shareShow(e) {\n      this.sharePopup = true;\n      e.stopPropagation();\n    },\n    // 关闭分享弹窗\n    hideSharePopup: function hideSharePopup(e) {\n      this.sharePopup = false;\n      e.stopPropagation();\n    },\n\n    // 点赞\n    praise: function praise(e, n) {var _this6 = this;\n      uni.request({\n        url: 'http://app.51liuxiang.com/api/wanlshop/find/user/setFindUser',\n        method: 'POST',\n        header: {\n          token: uni.getStorageSync('userInfo').token,\n          'content-type': 'application/json;charset=UTF-8' },\n\n        data: {\n          id: e,\n          type: 'likes' },\n\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/community/detail/videoList.nvue:343\");\n          if (res.data.code == 1) {\n            _this6.videoList.forEach(function (elem) {\n              if (elem.id == e) {\n                elem.isLike = res.data.data.data == 0 ? false : true;\n                if (res.data.data.data == 1) {\n                  elem.likes++;\n                } else {\n                  elem.likes--;\n                }\n              }\n            });\n          }\n        } });\n\n    },\n    // 关注\n    atten: function atten(e, n) {var _this7 = this;\n      uni.request({\n        url: 'http://app.51liuxiang.com/api/wanlshop/find/user/setFindUser',\n        method: 'POST',\n        header: {\n          token: uni.getStorageSync('userInfo').token,\n          'content-type': 'application/json;charset=UTF-8' },\n\n        data: {\n          id: e,\n          type: 'follow' },\n\n        success: function success(res) {\n          if (res.data.code == 1) {\n            _this7.videoList.forEach(function (elem) {\n              if (elem.user_no == e) {\n                elem.isFollow = res.data.data.data == 0 ? false : true;\n              }\n            });\n          }\n        } });\n\n\n    } },\n\n  watch: {\n    index: function index(newVal, oldVal) {\n      var len = this.videoList.filter(function (item) {return item.src;}).length;\n      //加载视频\n      if (len - this.index - 1 <= this.playCount) {\n        this.pushVideoList();\n      }\n      this.oldIndex = oldVal;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 43)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29tbXVuaXR5L2RldGFpbC92aWRlb0xpc3QubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0EsaUU7Ozs7QUFJQTtBQUNBO0FBQ0EsdUNBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBRUE7QUFDQSxtQkFIQTtBQUlBLHFCQUpBO0FBS0EsY0FMQTtBQU1BLGVBTkE7QUFPQSxpQkFQQTtBQVFBO0FBQ0Esb0JBVEEsRUFTQTtBQUNBLG1CQVZBLEVBVUE7QUFDQSx1QkFYQSxFQVdBO0FBQ0E7QUFDQSx1RUFEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0EsdUVBREE7QUFFQSxtQkFGQSxFQUpBOztBQVFBO0FBQ0EsbUVBREE7QUFFQSxvQkFGQSxFQVJBOztBQVlBO0FBQ0EsdUVBREE7QUFFQSxxQkFGQSxFQVpBOztBQWdCQTtBQUNBLG9FQURBO0FBRUEscUJBRkEsRUFoQkEsQ0FaQTs7O0FBaUNBLG9CQWpDQTtBQWtDQTtBQUNBLGNBREEsRUFsQ0E7O0FBcUNBLGFBckNBOztBQXVDQSxHQTVDQTtBQTZDQSxTQTdDQSxxQkE2Q0E7QUFDQTtBQUNBLEdBL0NBO0FBZ0RBLFFBaERBLGtCQWdEQSxNQWhEQSxFQWdEQTtBQUNBLDBCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBREE7QUFFQSw2Q0FGQTtBQUdBLDBCQUhBO0FBSUEsNEJBSkE7QUFLQSwrREFMQTtBQU1BLHlDQU5BO0FBT0EsbUVBUEE7QUFRQSwrQ0FSQTtBQVNBLDBDQVRBO0FBVUEsbUNBVkE7QUFXQSwwQkFYQTtBQVlBLDhCQVpBO0FBYUEsMkJBYkE7QUFjQSw2Q0FkQTtBQWVBLDZDQWZBO0FBZ0JBLDRCQWhCQTtBQWlCQSx3SEFqQkE7QUFrQkEsNEJBbEJBLElBSkE7OztBQXlCQSxnQkF6QkEsR0F5QkEsZUF6QkE7QUEwQkE7QUExQkEsdUNBMkJBLHFCQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFQQSxFQU9BLENBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQTtBQUdBLGVBeENBOzs7Ozs7QUE4Q0EsR0E5RkE7QUErRkEsU0EvRkEscUJBK0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FwSEE7QUFxSEEsUUFySEEsb0JBcUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTFIQTtBQTJIQSxRQTNIQSxvQkEySEE7QUFDQSxrQkFEQSxhQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsR0EvSEE7QUFnSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFKQSwyQkFJQSxDQUpBLEVBSUE7O0FBRUE7O0FBRUEsS0FSQTtBQVNBLGlCQVRBLHlCQVNBLENBVEEsRUFTQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFGQSxjQUVBO0FBQ0E7QUFDQSxXQUpBOztBQU1BOztBQUVBLE9BUkE7O0FBVUEsS0F4QkE7QUF5QkEsaUJBekJBLDJCQXlCQTtBQUNBO0FBQ0E7QUFDQSx5RUFEQTtBQUVBO0FBQ0EsdURBREEsRUFGQTs7QUFLQTtBQUNBLHlCQURBO0FBRUEsNkJBRkEsRUFMQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBREE7QUFFQSx1Q0FGQTtBQUdBLDZCQUhBO0FBSUEsOEJBSkE7QUFLQSx5REFMQTtBQU1BLG1DQU5BO0FBT0EsNkRBUEE7QUFRQSx5Q0FSQTtBQVNBLG9DQVRBO0FBVUEsNkJBVkE7QUFXQSw0REFYQTtBQVlBLGdDQVpBO0FBYUEsNkJBYkE7QUFjQSx1Q0FkQTtBQWVBLHVDQWZBO0FBZ0JBLDhDQWhCQTtBQWlCQSwwSEFqQkE7QUFrQkEsOEJBbEJBOztBQW9CQTtBQUNBLGFBdkJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBekNBOztBQTJDQSxPQTVDQTtBQTZDQTtBQUNBLEtBeEVBO0FBeUVBLGFBekVBLHFCQXlFQSxLQXpFQSxFQXlFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTs7QUFFQSxPQUhBO0FBSUEsS0FqRkE7QUFrRkEsY0FsRkEsc0JBa0ZBLEdBbEZBLEVBa0ZBO0FBQ0E7QUFDQSxpQkFEQSxHQUNBLEdBREE7QUFFQSxLQXJGQTtBQXNGQSxjQXRGQSx3QkFzRkE7QUFDQTtBQUNBO0FBQ0EsS0F6RkE7QUEwRkE7QUFDQSxRQTNGQSxnQkEyRkEsQ0EzRkEsRUEyRkEsQ0EzRkEsRUEyRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsNEJBRkE7O0FBSUEsT0FMQTs7QUFPQTtBQUNBLEtBeEdBO0FBeUdBO0FBQ0EsYUExR0EscUJBMEdBLENBMUdBLEVBMEdBO0FBQ0E7QUFDQTtBQUNBLEtBN0dBO0FBOEdBO0FBQ0Esa0JBL0dBLDBCQStHQSxDQS9HQSxFQStHQTtBQUNBO0FBQ0E7QUFDQSxLQWxIQTs7QUFvSEE7QUFDQSxVQXJIQSxrQkFxSEEsQ0FySEEsRUFxSEEsQ0FySEEsRUFxSEE7QUFDQTtBQUNBLDJFQURBO0FBRUEsc0JBRkE7QUFHQTtBQUNBLHFEQURBO0FBRUEsMERBRkEsRUFIQTs7QUFPQTtBQUNBLGVBREE7QUFFQSx1QkFGQSxFQVBBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFUQTtBQVVBO0FBQ0EsU0F6QkE7O0FBMkJBLEtBakpBO0FBa0pBO0FBQ0EsU0FuSkEsaUJBbUpBLENBbkpBLEVBbUpBLENBbkpBLEVBbUpBO0FBQ0E7QUFDQSwyRUFEQTtBQUVBLHNCQUZBO0FBR0E7QUFDQSxxREFEQTtBQUVBLDBEQUZBLEVBSEE7O0FBT0E7QUFDQSxlQURBO0FBRUEsd0JBRkEsRUFQQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBO0FBS0E7QUFDQSxTQW5CQTs7O0FBc0JBLEtBMUtBLEVBaElBOztBQTRTQTtBQUNBLFNBREEsaUJBQ0EsTUFEQSxFQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUkEsRUE1U0EsRSIsImZpbGUiOiIxMDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cInBhZ2VcIiA6c3R5bGU9XCJ7d2lkdGg6ICc3NTBycHgnLCBoZWlnaHQ6IGhlaWdodCB9XCI+XHJcblx0XHQ8c3dpcGVyIGNsYXNzPVwic3dpcGVyXCIgOnZlcnRpY2FsPVwidHJ1ZVwiIEBjaGFuZ2U9XCJjaGFuZ2VDdXJyZW50XCIgQGFuaW1hdGlvbmZpbmlzaD1cImFuaW1hdGlvbkZpbmlzaFwiIDpjdXJyZW50PVwiaW5kZXhcIj5cclxuXHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiKGl0ZW0sIGlkeCkgaW4gdmlkZW9MaXN0XCIgOmtleT1cImlkeFwiIGNsYXNzPVwic3dpcGVyLWl0ZW1cIj5cclxuXHRcdFx0XHQ8IS0tIOinhumikea4suafk+aVsOmihOWKoOi9veaVsOW9seWTjeaAp+iDvSAtLT5cclxuXHRcdFx0XHQ8ZGl2IHYtaWY9XCJNYXRoLmFicyhpbmRleC1pZHgpPD0xXCIgY2xhc3M9XCJ2aWRlby1ib3hcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWlmPVwiaXRlbS52aWRlb191cmxcIiBjbGFzcz1cInZibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHQ8Y2h1bmxlaS12aWRlbyBjbGFzcz1cInZpZGVvXCIgOnNyYz1cIml0ZW0udmlkZW9fdXJsXCIgOmhlaWdodD1cImhlaWdodFwiIDp3aWR0aD1cIndpZHRoXCJcclxuXHRcdFx0XHRcdFx0XHQ6cGxheT1cIml0ZW0uZmxhZ1wiIHYtaWY9XCJNYXRoLmFicyhpbmRleC1pZHgpPD0xXCIgOmdEdXJhdGlvbj1cIml0ZW0uZHVyYXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdDppbml0aWFsVGltZT1cIml0ZW0uaW5pdGlhbFRpbWVcIiBAcGF1c2U9XCJwYXVzZVZpZGVvXCIgOm9iamVjdEZpdD1cIml0ZW0ub2JqZWN0Rml0XCJcclxuXHRcdFx0XHRcdFx0XHRAcGxheUVuZD1cInBsYXlFbmRcIiBAYWRkPVwiY29tbWVudEFkZFwiPlxyXG5cdFx0XHRcdFx0XHQ8L2NodW5sZWktdmlkZW8+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImF2YXRhclwiIHYtaWY9XCJpdGVtLmF2YXRhciAhPSAnJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYXZhdGFySW1nXCIgOnNyYz1cIml0ZW0uYXZhdGFyXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZFwiIEBjbGljaz1cImF0dGVuKGl0ZW0udXNlcl9ubylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmlzRm9sbG93XCIgY2xhc3M9XCJhZGRfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2NvbW0vYXR0ZW4ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWVsc2UgY2xhc3M9XCJhZGRfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2NvbW0vYWRkMi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYVwiIEBjbGljaz1cInByYWlzZShpdGVtLmlkKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwib3BlcmFfaW1nXCIgdi1pZj1cIml0ZW0uaXNMaWtlXCIgc3JjPVwiL3N0YXRpYy9jb21tL3ZpZGVvUHJhaXNlT24ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJvcGVyYV9pbWdcIiB2LWVsc2Ugc3JjPVwiL3N0YXRpYy9jb21tL3ZpZGVvUHJhaXNlLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcGVyYV90ZXh0XCI+e3tpdGVtLmxpa2VzfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmFcIiBAY2xpY2s9XCJvcGVuKGl0ZW0sICRldmVudClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm9wZXJhX2ltZ1wiIHNyYz1cIi9zdGF0aWMvY29tbS92aWRlb0NvbW1lbnQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wZXJhX3RleHRcIj57e2l0ZW0uY29tbWVudHN9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYVwiIEBjbGljaz1cInNoYXJlU2hvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwib3BlcmFfaW1nXCIgc3JjPVwiL3N0YXRpYy9jb21tL3ZpZGVvU2hhcmUucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wZXJhX3RleHRcIj7ovazlj5E8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGV0dGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm5pY2tuYW1lXCIgdi1pZj1cIml0ZW0ubmlja25hbWUgIT0gJydcIj5Ae3tpdGVtLm5pY2tuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiZXllXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImV5ZV9pbWdcIiBzcmM9XCIvc3RhdGljL2NvbW0vZXllLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImV5ZV9udW1cIj4yMzE8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiZGFyZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkYXJnX3RleHRcIj4jPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkYXJnX3RleHRcIj57e2l0ZW0udHlwZV90ZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRhcmdfdGV4dFwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGFyZ190ZXh0XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGVzY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0OmNsYXNzPVwiWydkZXNjX3RleHQnXVwiPnt7aXRlbS5zdGF0dXMgPyBpdGVtLmRlc2Muc3Vic3RyKDAsIDU1KSArICcgwrcgwrcgwrcnIDogaXRlbS5kZXNjIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcGVuXCIgdi1pZj1cIml0ZW0uc3RhdHVzICYmIGl0ZW0uZGVzYy5sZW5ndGggPiA1NVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljay5zdG9wPVwiaXRlbS5zdGF0dXMgPSBmYWxzZSwkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj7lsZXlvIA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9wZW5cIiB2LWVsc2UtaWY9XCIhaXRlbS5zdGF0dXMgJiYgaXRlbS5kZXNjLmxlbmd0aCA+IDU1XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiaXRlbS5zdGF0dXMgPSB0cnVlLCRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPuaUtui1tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWFza1wiIDpzdHlsZT1cInsnaGVpZ2h0JzogaGVpZ2h0fVwiIHYtaWY9XCJzaGFyZVBvcHVwXCIgQGNsaWNrPVwiaGlkZVNoYXJlUG9wdXBcIj48L3ZpZXc+XHJcblx0XHQ8dmlldyA6Y2xhc3M9XCJbJ3BvcHVwJywgc2hhcmVQb3B1cCA/ICdzaG93UG9wdXAnIDogJyddXCIgQGNsaWNrPVwiXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlX3RleHRcIj7liIbkuqvoh7M8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzaGFyZXNcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlX2l0ZW1cIiB2LWZvcj1cIihlbGVtLGluZGV4KSBpbiBzaGFyZUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNoYXJlX2ltZ1wiIDpzcmM9XCJlbGVtLnNyY1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzaGFyZV90ZXh0XCI+e3tlbGVtLnRleHR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYW5jZWxcIiBAY2xpY2s9XCJoaWRlU2hhcmVQb3B1cFwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2FuY2VsX3RleHRcIj7lj5bmtog8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY2h1bmxlaVZpZGVvIGZyb20gJ0AvY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8nXHJcblx0aW1wb3J0IHtcclxuXHRcdHJlcXVlc3QsXHJcblx0XHRJbWdVcmxcclxuXHR9IGZyb20gJ0AvdXRpbHMvcmVxdWVzdC5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGNodW5sZWlWaWRlb1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3lzaGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHBsYXlDb3VudDogMiwgLy/liankvZnlpJrlsJHop4bpopHliqDovb3op4bpopHliJfooahcclxuXHRcdFx0XHR2aWRlb0xpc3Q6IFtdLFxyXG5cdFx0XHRcdGhlaWdodDogJzY2N3B4JyxcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0b2xkSW5kZXg6IDAsXHJcblx0XHRcdFx0Ly8gKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFx0XHRwcmFpc2VMaXN0OiBbXSwgLy8g54K56LWe6L+H55qE5pWw5o2uaWRcclxuXHRcdFx0XHRhdHRlbkxpc3Q6IFtdLCAvLyDlhbPms6jliJfooahcclxuXHRcdFx0XHRzaGFyZVBvcHVwOiBmYWxzZSwgLy8g5YiG5Lqr5by556qXXHJcblx0XHRcdFx0c2hhcmVMaXN0OiBbe1xyXG5cdFx0XHRcdFx0XHRzcmM6IHJlcXVpcmUoJ0Avc3RhdGljL2NvbW0vd3hmcmllbmQucG5nJyksXHJcblx0XHRcdFx0XHRcdHRleHQ6ICflvq7kv6Hlpb3lj4snXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6IHJlcXVpcmUoJ0Avc3RhdGljL2NvbW0vd3hjaXJjbGUucG5nJyksXHJcblx0XHRcdFx0XHRcdHRleHQ6ICfmnIvlj4vlnIgnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6IHJlcXVpcmUoJ0Avc3RhdGljL2NvbW0vY29weS5wbmcnKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+WkjeWItumTvuaOpSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogcmVxdWlyZSgnQC9zdGF0aWMvY29tbS9kb3duTG9hZC5wbmcnKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+S4i+i9veiHs+ebuOWGjCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogcmVxdWlyZSgnQC9zdGF0aWMvY29tbS9waG90by5wbmcnKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+eUn+aIkOWIhuS6q+WbvidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGluc3RhbGw6IGZhbHNlLFxyXG5cdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0aWQ6ICcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwYWdlOiAxXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHR0aGlzLmhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCArICdweCdcclxuXHRcdH0sXHJcblx0XHRhc3luYyBvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdGlmKG9wdGlvbi52aWRlbyl7XHJcblx0XHRcdFx0dGhpcy5kZXRhaWwgPSBKU09OLnBhcnNlKG9wdGlvbi52aWRlbylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmRldGFpbCwgJzExMScpXHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3QucHVzaCh7XHJcblx0XHRcdFx0XHR2aWRlb191cmw6IEltZ1VybCArIHRoaXMuZGV0YWlsLnZpZGVvX3VybCxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHRoaXMuZGV0YWlsLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRmbGFnOiB0cnVlLFxyXG5cdFx0XHRcdFx0Y2hlY2s6IGZhbHNlLFxyXG5cdFx0XHRcdFx0aXNMaWtlOiB0aGlzLmRldGFpbC5pc0xpa2UgPT0gMCA/IGZhbHNlIDogdHJ1ZSxcclxuXHRcdFx0XHRcdGxpa2VzOiB0aGlzLmRldGFpbC5saWtlcyxcclxuXHRcdFx0XHRcdGlzRm9sbG93OiB0aGlzLmRldGFpbC5pc0ZvbGxvdyA9PSAwID8gZmFsc2UgOiB0cnVlLFxyXG5cdFx0XHRcdFx0Y29tbWVudHM6IHRoaXMuZGV0YWlsLmNvbW1lbnRzLFxyXG5cdFx0XHRcdFx0dHlwZV90ZXh0OiB0aGlzLmRldGFpbC5pZCxcclxuXHRcdFx0XHRcdGlkOiB0aGlzLmRldGFpbC5pZCxcclxuXHRcdFx0XHRcdGF2YXRhcjonJyxcclxuXHRcdFx0XHRcdGluaXRpYWxUaW1lOiAwLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDAsXHJcblx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLmRldGFpbC51c2VyX2lkLFxyXG5cdFx0XHRcdFx0dXNlcl9ubzogdGhpcy5kZXRhaWwudXNlcl9ubyxcclxuXHRcdFx0XHRcdG5pY2tuYW1lOiAnJyxcclxuXHRcdFx0XHRcdGRlc2M6ICfov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZAnLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bGV0IGlkID0gdGhpcy5kZXRhaWwuaWRcclxuXHRcdFx0XHQvL+iuvue9rmlkIOmAmui/h2lk6L2u5Yiw55u45bqU5L2N572uXHJcblx0XHRcdFx0YXdhaXQgdGhpcy5wdXNoVmlkZW9MaXN0KClcclxuXHRcdFx0XHR0aGlzLmluZGV4ID0gdGhpcy52aWRlb0xpc3QucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGlkID09ICcnIHx8IGlkID09IGl0ZW0uaWQpIHtcclxuXHRcdFx0XHRcdFx0aWQgPSAnJ1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dG90YWwrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRvdGFsXHJcblx0XHRcdFx0fSwgMClcclxuXHRcdFx0XHRpZiAoIXRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb1BsYXkodGhpcy5pbmRleClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGxldCBpZCA9IHRoaXMuZGV0YWlsLmlkXHJcblx0XHRcdC8vIC8v6K6+572uaWQg6YCa6L+HaWTova7liLDnm7jlupTkvY3nva5cclxuXHRcdFx0Ly8gYXdhaXQgdGhpcy5wdXNoVmlkZW9MaXN0KClcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8g6K+E6K665oiQ5Yqf77yM6K+E6K665pWw6YeP5YqgMVxyXG5cdFx0XHR1bmkuJG9uKCdhZGQnLGU9PntcclxuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5jb21tZW50cyA9IGUuY291bnRcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8g55uR5ZCs54K55Ye75pKt5pS+L+aaguWBnFxyXG5cdFx0XHR1bmkuJG9uKCdwbGF5U3RhdHVzJywgZSA9PiB7XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9IGUuc3RhdHVzXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbihcInBvcnRyYWl0LXByaW1hcnlcIilcclxuXHRcdFx0Ly/pmpDol49zdWJudnVlXHJcblx0XHRcdHVuaS5nZXRTdWJOVnVlQnlJZCgnY29tbWVudCcpLmhpZGUoKVxyXG5cdFx0XHQvLyB1bmkuZ2V0U3ViTlZ1ZUJ5SWQoJ2lucHV0LWJveCcpLmhpZGUoKVxyXG5cdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHRsZXQgd2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aFxyXG5cdFx0XHR0aGlzLndpZHRoID0gYCR7d2lkdGh9cHhgXHJcblx0XHRcdC8vIHRoaXMudmlkZW9MaXN0Lmxlbmd0aCA9IDMwMFxyXG5cdFx0XHQvLyB0aGlzLnZpZGVvTGlzdC5maWxsKHtcclxuXHRcdFx0Ly8gXHRzcmM6ICcnXHJcblx0XHRcdC8vIH0pXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHR0aGlzLmluc3RhbGwgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2luc3RhbGwnKVxyXG5cdFx0XHRpZiAoIXRoaXMuaW5zdGFsbCkge1xyXG5cdFx0XHRcdHRoaXMuc2hhcmVMaXN0LnNwbGljZSgwLCAyKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCkge1xyXG5cdFx0XHRmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlkZW9MaXN0KSB7XHJcblx0XHRcdFx0aXRlbS5mbGFnID0gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8gcGxheUVuZCgpe1xyXG5cdFx0XHQvLyBcdHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdLmluaXRpYWxUaW1lID0gMFxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHRhbmltYXRpb25GaW5pc2goZSkge1xyXG5cdFx0XHRcdC8vI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0dGhpcy5jaGFuZ2VDdXJyZW50KGUpXHJcblx0XHRcdFx0Ly8jZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlQ3VycmVudChlKSB7XHJcblx0XHRcdFx0Ly8g5ruR5Yqo6KeG6aKR5riF56m66K+E6K665by556qX5Lit55qE6K+E6K665pWw5o2uXHJcblx0XHRcdFx0dW5pLiRlbWl0KCdjbGVhckNvbScpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWRlb0xpc3QpIHtcclxuXHRcdFx0XHRcdFx0aXRlbS5mbGFnID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gdHJ1ZVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0cHVzaFZpZGVvTGlzdCgpIHtcclxuXHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cDovL2FwcC41MWxpdXhpYW5nLmNvbS9hcGkvd2FubHNob3AvZmluZC9maW5kL2dldExpc3QnLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XHR0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpLnRva2VuXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAndmlkZW8nLFxyXG5cdFx0XHRcdFx0XHRcdHBhZ2U6IHRoaXMucGFnZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHZpZGVvR3JvdXAgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLmRhdGEuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PSAndmlkZW8nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvR3JvdXAucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlkZW9fdXJsOiBJbWdVcmwgKyBpdGVtLnZpZGVvX3VybCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBpdGVtLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZzogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2s6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzTGlrZTogaXRlbS5pc0xpa2UgPT0gMCA/IGZhbHNlIDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaWtlczogaXRlbS5saWtlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0ZvbGxvdzogaXRlbS5pc0ZvbGxvdyA9PSAwID8gZmFsc2UgOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRzOiBpdGVtLmNvbW1lbnRzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGVfdGV4dDogaXRlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogaXRlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXI6IEltZ1VybCArIGl0ZW0udXNlci5hdmF0YXIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5pdGlhbFRpbWU6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogaXRlbS51c2VyX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfbm86IGl0ZW0udXNlcl9ubyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuaWNrbmFtZTogaXRlbS51c2VyLm5pY2tuYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlc2M6ICfov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZDov5nku7boj7HmoLzmt7HlvpfmiJHlv4Mg5pCt6YWN5ZCM6Imy57O75ZCM5p2Q6L+Z5Lu26I+x5qC85rex5b6X5oiR5b+DIOaQremFjeWQjOiJsuezu+WQjOadkOi/meS7tuiPseagvOa3seW+l+aIkeW/gyDmkK3phY3lkIzoibLns7vlkIzmnZAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1czogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0bGV0IGxlbiA9IHRoaXMudmlkZW9MaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udmlkZW9fdXJsKS5sZW5ndGhcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gbGVuOyBpIDwgbGVuICsgdmlkZW9Hcm91cC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMudmlkZW9MaXN0LCBpLCB2aWRlb0dyb3VwW2kgLSBsZW5dKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2UgKytcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBwcm9taXNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvUGxheShpbmRleCkge1xyXG5cdFx0XHRcdGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdFtpbmRleF0sICdmbGFnJywgIXRoaXMudmlkZW9MaXN0W2luZGV4XS5mbGFnKVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXVzZVZpZGVvKHZhbCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy52aWRlb0xpc3RbdGhpcy5vbGRJbmRleF0uaW5pdGlhbFRpbWUgIT0gJ3VuZGVmaW5lZCcpIHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdXHJcblx0XHRcdFx0XHQuaW5pdGlhbFRpbWUgPSB2YWxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2tWaWRlbygpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygxMTEpXHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9ICF0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOivhOiuunN1Yk52dWXlvLnnqpdcclxuXHRcdFx0b3BlbihlLCBuKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0Ly8g6YCa6L+HIGlkIOiOt+WPliBudnVlIOWtkOeql+S9k1xyXG5cdFx0XHRcdGNvbnN0IHN1Yk5WdWUgPSB1bmkuZ2V0U3ViTlZ1ZUJ5SWQoJ2NvbW1lbnQnKVxyXG5cdFx0XHRcdC8vIOaJk+W8gCBudnVlIOWtkOeql+S9kyAgXHJcblx0XHRcdFx0c3ViTlZ1ZS5zaG93KCdzbGlkZS1pbi1ib3R0b20nLCAzMDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KCdzdWJOVnVlU2hvdycse1xyXG5cdFx0XHRcdFx0XHRpZDogZS5pZCxcclxuXHRcdFx0XHRcdFx0dXNlcl9pZDogZS51c2VyX2lkXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdG4uc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YiG5Lqr5by556qXXHJcblx0XHRcdHNoYXJlU2hvdyhlKSB7XHJcblx0XHRcdFx0dGhpcy5zaGFyZVBvcHVwID0gdHJ1ZVxyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWz6Zet5YiG5Lqr5by556qXXHJcblx0XHRcdGhpZGVTaGFyZVBvcHVwKGUpIHtcclxuXHRcdFx0XHR0aGlzLnNoYXJlUG9wdXAgPSBmYWxzZVxyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOeCuei1nlxyXG5cdFx0XHRwcmFpc2UoZSwgbikge1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogJ2h0dHA6Ly9hcHAuNTFsaXV4aWFuZy5jb20vYXBpL3dhbmxzaG9wL2ZpbmQvdXNlci9zZXRGaW5kVXNlcicsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHR0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpLnRva2VuLFxyXG5cdFx0XHRcdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGlkOiBlLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnbGlrZXMnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW0uaWQgPT0gZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtLmlzTGlrZSA9IHJlcy5kYXRhLmRhdGEuZGF0YSA9PSAwID8gZmFsc2UgOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5kYXRhLmRhdGEgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW0ubGlrZXMrK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW0ubGlrZXMtLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWFs+azqFxyXG5cdFx0XHRhdHRlbihlLCBuKSB7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAnaHR0cDovL2FwcC41MWxpdXhpYW5nLmNvbS9hcGkvd2FubHNob3AvZmluZC91c2VyL3NldEZpbmRVc2VyJyxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcdHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykudG9rZW4sXHJcblx0XHRcdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0aWQ6IGUsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdmb2xsb3cnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QuZm9yRWFjaChlbGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtLnVzZXJfbm8gPT0gZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtLmlzRm9sbG93ID0gcmVzLmRhdGEuZGF0YS5kYXRhID09IDAgPyBmYWxzZSA6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRpbmRleChuZXdWYWwsIG9sZFZhbCkge1xyXG5cdFx0XHRcdGxldCBsZW4gPSB0aGlzLnZpZGVvTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNyYykubGVuZ3RoXHJcblx0XHRcdFx0Ly/liqDovb3op4bpopFcclxuXHRcdFx0XHRpZiAobGVuIC0gdGhpcy5pbmRleCAtIDEgPD0gdGhpcy5wbGF5Q291bnQpIHtcclxuXHRcdFx0XHRcdHRoaXMucHVzaFZpZGVvTGlzdCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMub2xkSW5kZXggPSBvbGRWYWxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQuc3dpcGVyIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdH1cclxuXHJcblx0LnN3aXBlci1pdGVtIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQudmlkZW8ge1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC52aWRlby1ib3gge1xyXG5cdFx0LnZibG9jayB7XHJcblx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdGJvcmRlcjogc29saWQgMXB4ICNmZmY7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJpZ2h0IHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHQvKiAjaWZkZWYgIUFQUC1OVlVFICovXHJcblx0XHRcdHJpZ2h0OiAyMHJweDtcclxuXHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0XHR3aWR0aDogNzMwcnB4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdHotaW5kZXg6IDk5OTk5O1xyXG5cclxuXHRcdFx0LmF2YXRhciB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0LmF2YXRhckltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuYWRkIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0NHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDRycHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMTlycHg7XHJcblxyXG5cdFx0XHRcdFx0LmFkZF9pbWFnZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA0NHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NHJweDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQub3BlcmEge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblxyXG5cdFx0XHRcdC5vcGVyYV9pbWcge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDcwcnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5vcGVyYV90ZXh0IHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogUGluZ0ZhbmcgU0M7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmluZm8ge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDI1cnB4O1xyXG5cdFx0XHRib3R0b206IDE1MHJweDtcclxuXHRcdFx0d2lkdGg6IDU4MHJweDtcclxuXHJcblx0XHRcdC5sZXR0bGUge1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0XHRcdC5uaWNrbmFtZSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjogI0Y2RjVGQTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5leWUge1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDE4cnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwMDAwMDtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuMztcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cclxuXHRcdFx0XHRcdC5leWVfaW1nIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5leWVfbnVtIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5kYXJnIHtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRtYXJnaW46IDIwcnB4IDA7XHJcblxyXG5cdFx0XHRcdC5kYXJnX3RleHQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZyBTQztcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuZGVzYyB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHJcblx0XHRcdFx0LmRlc2NfdGV4dCB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5vcGVuIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZyBTQztcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyDliIbkuqvlvLnnqpdcclxuXHQucG9wdXAge1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDQwMHJweDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwMHJweCk7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHQudGl0bGUge1xyXG5cdFx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0LnRpdGxlX3RleHQge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFBpbmdGYW5nIFNDO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnNoYXJlcyB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdHBhZGRpbmc6IDAgNTBycHg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHRcdC5zaGFyZV9pdGVtIHtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHQuc2hhcmVfaW1nIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4OHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogODhycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuc2hhcmVfdGV4dCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxN3JweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJycHg7XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogUGluZ0ZhbmcgU0M7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmNhbmNlbCB7XHJcblx0XHRcdGhlaWdodDogOTdycHg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItdG9wOiBzb2xpZCAxcHggI0YyRjJGMjtcclxuXHJcblx0XHRcdC5jYW5jZWxfdGV4dCB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRmb250LWZhbWlseTogUGluZ0ZhbmcgU0M7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnNob3dQb3B1cCB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJweCk7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG5cdH1cclxuXHJcblx0Ly8g6YGu572pXHJcblx0Lm1hc2sge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0fVxyXG5cclxuXHQuY292ZXItdmlldy1jZW50ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0b3BhY2l0eTogMC4xO1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctbGVmdCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTB1cHg7XHJcblx0XHR3aWR0aDogNTAwdXB4O1xyXG5cdFx0Ym90dG9tOiAxMjB1cHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC5sZWZ0LXZpZXcge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjB1cHg7XHJcblx0fVxyXG5cclxuXHQubGVmdC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmF2YXRlciB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHVweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDJweDtcclxuXHR9XHJcblxyXG5cdC5jb3Zlci12aWV3LXJpZ2h0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMTYwdXB4O1xyXG5cdFx0cmlnaHQ6IDIwdXB4O1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHR9XHJcblxyXG5cdC5yaWdodC10ZXh0LWF2YXRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHR0b3A6IDgwdXB4O1xyXG5cdFx0bGVmdDogMzB1cHg7XHJcblx0XHRoZWlnaHQ6IDQwdXB4O1xyXG5cdFx0d2lkdGg6IDQwdXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RENTI0RDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwdXB4O1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdH1cclxuXHJcblx0LmF2YXRlci1pY29uIHtcclxuXHRcdGhlaWdodDogNDB1cHg7XHJcblx0XHR3aWR0aDogNDB1cHg7XHJcblxyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjREQ1MjREO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMzB1cHg7XHJcblx0XHR0b3A6IC0yMHVweDtcclxuXHR9XHJcblxyXG5cdC5yaWdodC10ZXh0IHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTB1cHg7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuaW1nIHtcclxuXHRcdGhlaWdodDogMTAwdXB4O1xyXG5cdFx0d2lkdGg6IDEwMHVweDtcclxuXHRcdG9wYWNpdHk6IDAuOTtcclxuXHR9XHJcblxyXG5cdC5wYWdlIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///105\n");

/***/ }),
/* 106 */
/*!*************************************************!*\
  !*** D:/工作文件夹/HX/flow/static/comm/wxfriend.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/wxfriend.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvc3RhdGljL2NvbW0vd3hmcmllbmQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///106\n");

/***/ }),
/* 107 */
/*!*************************************************!*\
  !*** D:/工作文件夹/HX/flow/static/comm/wxcircle.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/wxcircle.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvc3RhdGljL2NvbW0vd3hjaXJjbGUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///107\n");

/***/ }),
/* 108 */
/*!*********************************************!*\
  !*** D:/工作文件夹/HX/flow/static/comm/copy.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/copy.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvc3RhdGljL2NvbW0vY29weS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///108\n");

/***/ }),
/* 109 */
/*!*************************************************!*\
  !*** D:/工作文件夹/HX/flow/static/comm/downLoad.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/downLoad.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvc3RhdGljL2NvbW0vZG93bkxvYWQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///109\n");

/***/ }),
/* 110 */
/*!**********************************************!*\
  !*** D:/工作文件夹/HX/flow/static/comm/photo.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/comm/photo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvc3RhdGljL2NvbW0vcGhvdG8ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///110\n");

/***/ }),
/* 111 */
/*!***********************************************************************************************************************************!*\
  !*** D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page */ 112);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoList_nvue_vue_type_style_index_0_id_12d4ee14_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 112 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/工作文件夹/HX/flow/pages/community/detail/videoList.nvue?vue&type=style&index=0&id=12d4ee14&lang=scss&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".swiper": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        16
      ]
    }
  },
  ".swiper-item": {
    "": {
      "flex": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".video": {
    "": {
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".vblock": {
    ".video-box ": {
      "width": [
        "750rpx",
        0,
        1,
        19
      ],
      "flex": [
        1,
        0,
        1,
        19
      ],
      "borderWidth": [
        "1",
        0,
        1,
        19
      ],
      "borderStyle": [
        "solid",
        0,
        1,
        19
      ],
      "borderColor": [
        "#ffffff",
        0,
        1,
        19
      ],
      "alignItems": [
        "center",
        0,
        1,
        19
      ],
      "justifyContent": [
        "center",
        0,
        1,
        19
      ],
      "position": [
        "relative",
        0,
        1,
        19
      ]
    }
  },
  ".right": {
    ".video-box ": {
      "position": [
        "absolute",
        0,
        1,
        20
      ],
      "width": [
        "730rpx",
        0,
        1,
        20
      ],
      "justifyContent": [
        "flex-start",
        0,
        1,
        20
      ],
      "alignItems": [
        "flex-end",
        0,
        1,
        20
      ],
      "zIndex": [
        99999,
        0,
        1,
        20
      ]
    }
  },
  ".avatar": {
    ".video-box .right ": {
      "display": [
        "flex",
        0,
        2,
        21
      ],
      "justifyContent": [
        "flex-start",
        0,
        2,
        21
      ],
      "alignItems": [
        "center",
        0,
        2,
        21
      ]
    }
  },
  ".avatarImg": {
    ".video-box .right .avatar ": {
      "width": [
        "80rpx",
        0,
        3,
        22
      ],
      "height": [
        "80rpx",
        0,
        3,
        22
      ],
      "borderBottomLeftRadius": [
        50,
        0,
        3,
        22
      ],
      "borderBottomRightRadius": [
        50,
        0,
        3,
        22
      ],
      "borderTopLeftRadius": [
        50,
        0,
        3,
        22
      ],
      "borderTopRightRadius": [
        50,
        0,
        3,
        22
      ]
    }
  },
  ".add": {
    ".video-box .right .avatar ": {
      "width": [
        "44rpx",
        0,
        3,
        23
      ],
      "height": [
        "44rpx",
        0,
        3,
        23
      ],
      "marginTop": [
        "-19rpx",
        0,
        3,
        23
      ]
    }
  },
  ".add_image": {
    ".video-box .right .avatar .add ": {
      "width": [
        "44rpx",
        0,
        4,
        24
      ],
      "height": [
        "44rpx",
        0,
        4,
        24
      ],
      "borderBottomLeftRadius": [
        50,
        0,
        4,
        24
      ],
      "borderBottomRightRadius": [
        50,
        0,
        4,
        24
      ],
      "borderTopLeftRadius": [
        50,
        0,
        4,
        24
      ],
      "borderTopRightRadius": [
        50,
        0,
        4,
        24
      ]
    }
  },
  ".opera": {
    ".video-box .right ": {
      "display": [
        "flex",
        0,
        2,
        25
      ],
      "justifyContent": [
        "flex-start",
        0,
        2,
        25
      ],
      "alignItems": [
        "center",
        0,
        2,
        25
      ],
      "marginTop": [
        "20rpx",
        0,
        2,
        25
      ]
    }
  },
  ".opera_img": {
    ".video-box .right .opera ": {
      "width": [
        "70rpx",
        0,
        3,
        26
      ],
      "height": [
        "70rpx",
        0,
        3,
        26
      ]
    }
  },
  ".opera_text": {
    ".video-box .right .opera ": {
      "fontSize": [
        "24rpx",
        0,
        3,
        27
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        27
      ],
      "fontWeight": [
        "500",
        0,
        3,
        27
      ],
      "color": [
        "#FFFFFF",
        0,
        3,
        27
      ]
    }
  },
  ".info": {
    ".video-box ": {
      "position": [
        "absolute",
        0,
        1,
        28
      ],
      "left": [
        "25rpx",
        0,
        1,
        28
      ],
      "bottom": [
        "150rpx",
        0,
        1,
        28
      ],
      "width": [
        "580rpx",
        0,
        1,
        28
      ]
    }
  },
  ".lettle": {
    ".video-box .info ": {
      "flexDirection": [
        "row",
        0,
        2,
        29
      ],
      "justifyContent": [
        "flex-start",
        0,
        2,
        29
      ],
      "alignItems": [
        "center",
        0,
        2,
        29
      ]
    }
  },
  ".nickname": {
    ".video-box .info .lettle ": {
      "fontSize": [
        "36rpx",
        0,
        3,
        30
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        30
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        30
      ],
      "color": [
        "#F6F5FA",
        0,
        3,
        30
      ]
    }
  },
  ".eye": {
    ".video-box .info .lettle ": {
      "flexDirection": [
        "row",
        0,
        3,
        31
      ],
      "justifyContent": [
        "flex-start",
        0,
        3,
        31
      ],
      "alignItems": [
        "center",
        0,
        3,
        31
      ],
      "marginLeft": [
        "24rpx",
        0,
        3,
        31
      ],
      "paddingTop": [
        0,
        0,
        3,
        31
      ],
      "paddingRight": [
        "18rpx",
        0,
        3,
        31
      ],
      "paddingBottom": [
        0,
        0,
        3,
        31
      ],
      "paddingLeft": [
        "18rpx",
        0,
        3,
        31
      ],
      "backgroundColor": [
        "#000000",
        0,
        3,
        31
      ],
      "opacity": [
        0.3,
        0,
        3,
        31
      ],
      "borderRadius": [
        "20rpx",
        0,
        3,
        31
      ]
    }
  },
  ".eye_img": {
    ".video-box .info .lettle .eye ": {
      "width": [
        "40rpx",
        0,
        4,
        32
      ],
      "height": [
        "40rpx",
        0,
        4,
        32
      ]
    }
  },
  ".eye_num": {
    ".video-box .info .lettle .eye ": {
      "fontSize": [
        "20rpx",
        0,
        4,
        33
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        4,
        33
      ],
      "fontWeight": [
        "500",
        0,
        4,
        33
      ],
      "color": [
        "#FFFFFF",
        0,
        4,
        33
      ]
    }
  },
  ".darg": {
    ".video-box .info ": {
      "flexDirection": [
        "row",
        0,
        2,
        34
      ],
      "flexWrap": [
        "wrap",
        0,
        2,
        34
      ],
      "marginTop": [
        "20rpx",
        0,
        2,
        34
      ],
      "marginRight": [
        0,
        0,
        2,
        34
      ],
      "marginBottom": [
        "20rpx",
        0,
        2,
        34
      ],
      "marginLeft": [
        0,
        0,
        2,
        34
      ]
    }
  },
  ".darg_text": {
    ".video-box .info .darg ": {
      "fontSize": [
        "30rpx",
        0,
        3,
        35
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        35
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        35
      ],
      "color": [
        "#FFFFFF",
        0,
        3,
        35
      ]
    }
  },
  ".desc": {
    ".video-box .info ": {
      "position": [
        "relative",
        0,
        2,
        36
      ],
      "justifyContent": [
        "flex-start",
        0,
        2,
        36
      ],
      "alignItems": [
        "flex-start",
        0,
        2,
        36
      ],
      "flexWrap": [
        "wrap",
        0,
        2,
        36
      ]
    }
  },
  ".desc_text": {
    ".video-box .info .desc ": {
      "fontSize": [
        "30rpx",
        0,
        3,
        37
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        37
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        37
      ],
      "color": [
        "#FFFFFF",
        0,
        3,
        37
      ]
    }
  },
  ".open": {
    ".video-box .info .desc ": {
      "position": [
        "absolute",
        0,
        3,
        38
      ],
      "right": [
        0,
        0,
        3,
        38
      ],
      "bottom": [
        0,
        0,
        3,
        38
      ],
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
        "#FFFFFF",
        0,
        3,
        38
      ]
    }
  },
  ".popup": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        39
      ],
      "width": [
        "750rpx",
        0,
        0,
        39
      ],
      "height": [
        "400rpx",
        0,
        0,
        39
      ],
      "position": [
        "fixed",
        0,
        0,
        39
      ],
      "bottom": [
        0,
        0,
        0,
        39
      ],
      "borderTopLeftRadius": [
        "20rpx",
        0,
        0,
        39
      ],
      "borderTopRightRadius": [
        "20rpx",
        0,
        0,
        39
      ],
      "transform": [
        "translateY(400rpx)",
        0,
        0,
        39
      ],
      "transitionProperty": [
        "transform",
        0,
        0,
        39
      ],
      "transitionDuration": [
        300,
        0,
        0,
        39
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        39
      ]
    }
  },
  ".title": {
    ".popup ": {
      "paddingTop": [
        "40rpx",
        0,
        1,
        40
      ],
      "paddingRight": [
        0,
        0,
        1,
        40
      ],
      "paddingBottom": [
        "40rpx",
        0,
        1,
        40
      ],
      "paddingLeft": [
        0,
        0,
        1,
        40
      ],
      "alignItems": [
        "center",
        0,
        1,
        40
      ]
    }
  },
  ".title_text": {
    ".popup .title ": {
      "fontSize": [
        "30rpx",
        0,
        2,
        41
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        2,
        41
      ],
      "fontWeight": [
        "bold",
        0,
        2,
        41
      ],
      "color": [
        "#000000",
        0,
        2,
        41
      ]
    }
  },
  ".shares": {
    ".popup ": {
      "flexDirection": [
        "row",
        0,
        1,
        42
      ],
      "paddingTop": [
        0,
        0,
        1,
        42
      ],
      "paddingRight": [
        "50rpx",
        0,
        1,
        42
      ],
      "paddingBottom": [
        0,
        0,
        1,
        42
      ],
      "paddingLeft": [
        "50rpx",
        0,
        1,
        42
      ],
      "justifyContent": [
        "space-between",
        0,
        1,
        42
      ]
    }
  },
  ".share_item": {
    ".popup .shares ": {
      "alignItems": [
        "center",
        0,
        2,
        43
      ]
    }
  },
  ".share_img": {
    ".popup .shares .share_item ": {
      "width": [
        "88rpx",
        0,
        3,
        44
      ],
      "height": [
        "88rpx",
        0,
        3,
        44
      ]
    }
  },
  ".share_text": {
    ".popup .shares .share_item ": {
      "marginTop": [
        "17rpx",
        0,
        3,
        45
      ],
      "fontSize": [
        "22rpx",
        0,
        3,
        45
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        3,
        45
      ],
      "fontWeight": [
        "500",
        0,
        3,
        45
      ],
      "color": [
        "#333333",
        0,
        3,
        45
      ]
    }
  },
  ".cancel": {
    ".popup ": {
      "height": [
        "97rpx",
        0,
        1,
        46
      ],
      "justifyContent": [
        "center",
        0,
        1,
        46
      ],
      "alignItems": [
        "center",
        0,
        1,
        46
      ],
      "borderTopWidth": [
        "1",
        0,
        1,
        46
      ],
      "borderTopStyle": [
        "solid",
        0,
        1,
        46
      ],
      "borderTopColor": [
        "#F2F2F2",
        0,
        1,
        46
      ]
    }
  },
  ".cancel_text": {
    ".popup .cancel ": {
      "fontSize": [
        "30rpx",
        0,
        2,
        47
      ],
      "fontFamily": [
        "PingFang SC",
        0,
        2,
        47
      ],
      "fontWeight": [
        "500",
        0,
        2,
        47
      ],
      "color": [
        "#333333",
        0,
        2,
        47
      ]
    }
  },
  ".showPopup": {
    "": {
      "transform": [
        "translateY(0rpx)",
        0,
        0,
        48
      ],
      "transitionProperty": [
        "transform",
        0,
        0,
        48
      ],
      "transitionDuration": [
        300,
        0,
        0,
        48
      ]
    }
  },
  ".mask": {
    "": {
      "flex": [
        1,
        0,
        0,
        49
      ],
      "position": [
        "absolute",
        0,
        0,
        49
      ],
      "width": [
        "750rpx",
        0,
        0,
        49
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.5)",
        0,
        0,
        49
      ]
    }
  },
  ".cover-view-center": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        50
      ],
      "justifyContent": [
        "center",
        0,
        0,
        50
      ],
      "alignItems": [
        "center",
        0,
        0,
        50
      ],
      "opacity": [
        0.1,
        0,
        0,
        50
      ],
      "zIndex": [
        999,
        0,
        0,
        50
      ]
    }
  },
  ".cover-view-left": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        51
      ],
      "marginLeft": [
        "10upx",
        0,
        0,
        51
      ],
      "width": [
        "500upx",
        0,
        0,
        51
      ],
      "bottom": [
        "120upx",
        0,
        0,
        51
      ],
      "zIndex": [
        9999,
        0,
        0,
        51
      ],
      "fontSize": [
        "16",
        0,
        0,
        51
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        51
      ]
    }
  },
  ".left-view": {
    "": {
      "marginBottom": [
        "20upx",
        0,
        0,
        52
      ]
    }
  },
  ".left-text": {
    "": {
      "fontSize": [
        "16",
        0,
        0,
        53
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        53
      ]
    }
  },
  ".avater": {
    "": {
      "borderRadius": [
        "50upx",
        0,
        0,
        54
      ],
      "borderColor": [
        "#ffffff",
        0,
        0,
        54
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        54
      ],
      "borderWidth": [
        "2",
        0,
        0,
        54
      ]
    }
  },
  ".cover-view-right": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        55
      ],
      "bottom": [
        "160upx",
        0,
        0,
        55
      ],
      "right": [
        "20upx",
        0,
        0,
        55
      ],
      "zIndex": [
        9999,
        0,
        0,
        55
      ]
    }
  },
  ".right-text-avater": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        56
      ],
      "fontSize": [
        "14",
        0,
        0,
        56
      ],
      "top": [
        "80upx",
        0,
        0,
        56
      ],
      "left": [
        "30upx",
        0,
        0,
        56
      ],
      "height": [
        "40upx",
        0,
        0,
        56
      ],
      "width": [
        "40upx",
        0,
        0,
        56
      ],
      "backgroundColor": [
        "#DD524D",
        0,
        0,
        56
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        56
      ],
      "borderRadius": [
        50,
        0,
        0,
        56
      ],
      "textAlign": [
        "center",
        0,
        0,
        56
      ],
      "lineHeight": [
        "40upx",
        0,
        0,
        56
      ],
      "zIndex": [
        999,
        0,
        0,
        56
      ]
    }
  },
  ".avater-icon": {
    "": {
      "height": [
        "40upx",
        0,
        0,
        57
      ],
      "width": [
        "40upx",
        0,
        0,
        57
      ],
      "color": [
        "#ffffff",
        0,
        0,
        57
      ],
      "backgroundColor": [
        "#DD524D",
        0,
        0,
        57
      ],
      "borderRadius": [
        50,
        0,
        0,
        57
      ],
      "position": [
        "absolute",
        0,
        0,
        57
      ],
      "left": [
        "30upx",
        0,
        0,
        57
      ],
      "top": [
        "-20upx",
        0,
        0,
        57
      ]
    }
  },
  ".right-text": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        58
      ],
      "fontSize": [
        "14",
        0,
        0,
        58
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        58
      ],
      "marginBottom": [
        "50upx",
        0,
        0,
        58
      ],
      "height": [
        "20",
        0,
        0,
        58
      ]
    }
  },
  ".img": {
    "": {
      "height": [
        "100upx",
        0,
        0,
        59
      ],
      "width": [
        "100upx",
        0,
        0,
        59
      ],
      "opacity": [
        0.9,
        0,
        0,
        59
      ]
    }
  },
  ".page": {
    "": {
      "flex": [
        1,
        0,
        0,
        60
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);