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
/******/ 	return __webpack_require__(__webpack_require__.s = "2649");
/******/ })
/************************************************************************/
/******/ ({

/***/ "027b":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "0357":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".photo__layers[data-v-d4bc1fda]{width:100%;min-height:200px;max-height:600px;height:100%;position:relative;overflow:hidden;display:flex;justify-content:center;align-items:center}.photo__layers__bgColor[data-v-d4bc1fda],.photo__layers__bgImage[data-v-d4bc1fda],.photo__layers__image[data-v-d4bc1fda]{position:absolute;width:100%;height:100%;z-index:-2}.photo__layers__image[data-v-d4bc1fda]{position:absolute;transform:translate(-50%,-50%);z-index:-1;background-repeat:no-repeat;background-size:cover;background-position:50%}.photo__layers__bgImage[data-v-d4bc1fda]{background-size:cover}", ""]);


/***/ }),

/***/ "065a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("027b").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "06a2":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4aca");
var anObject = __webpack_require__("3bcb");
var getKeys = __webpack_require__("c489");

module.exports = __webpack_require__("99db") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "09e0":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("7156");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0b23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonClose_vue_vue_type_style_index_0_id_bfe20b52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d68f");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonClose_vue_vue_type_style_index_0_id_bfe20b52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonClose_vue_vue_type_style_index_0_id_bfe20b52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonClose_vue_vue_type_style_index_0_id_bfe20b52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonClose_vue_vue_type_style_index_0_id_bfe20b52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonClose_vue_vue_type_style_index_0_id_bfe20b52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "15f3":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "16cb":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4aca");
var createDesc = __webpack_require__("379d");
module.exports = __webpack_require__("99db") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "1917":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c5c3");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1ca4":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("24b1");
var toLength = __webpack_require__("e5fa");
var toAbsoluteIndex = __webpack_require__("1917");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "24b1":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6969");
var defined = __webpack_require__("493c");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("a5d0")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("7488");

// EXTERNAL MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("cab7");

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./photo-upload.vue?vue&type=template&id=c9d20600&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload__photo"},[(!_vm.uploadPhoto)?_c('button',{staticClass:"upload__photo__button",on:{"click":_vm.clickUploadPhoto}},[_vm._v("Добавить фотo")]):_vm._e(),(_vm.uploadPhoto && !_vm.showReadyImg)?_c('div',{staticClass:"upload__photo__wrapper"},[_c('div',{staticClass:"photo"},[_c('ButtonClose',{staticClass:"close",on:{"closePhotoUpload":_vm.closePhotoUpload}}),_c('div',{staticClass:"photo__layers"},[_c('Layers',{attrs:{"image":_vm.imageFull}})],1),_c('div',{staticClass:"photo__buttons"},[_c('Button',{attrs:{"hasImg":_vm.img,"imgName":"img","name":"фото"},on:{"getImage":_vm.getImage,"deleteImage":_vm.deleteImage}}),_c('Button',{attrs:{"hasImg":_vm.bgImage,"imgName":"bgImage","name":"фон","text":"text"},on:{"getImage":_vm.getImage,"deleteImage":_vm.deleteImage}})],1),_c('div',{staticClass:"photo__filters"},[_c('h4',[_vm._v(_vm._s(_vm.img ? 'Фильтры картинки' : 'Добавьте фото!!!')+" ")]),(_vm.img)?_c('ul',{staticClass:"photo__filters__image"},_vm._l((_vm.imageFilters),function(filter){return _c('li',{key:filter.id},[_c('span',[_vm._v(_vm._s(filter.name))]),_c('FilterItem',{attrs:{"type":"range","name":"filter","values":filter,"initialValue":_vm.imageFull.filter[filter.value]},on:{"updateValue":_vm.updateValue}})],1)}),0):_vm._e(),(_vm.img)?_c('h4',[_vm._v("Перемещение картинки")]):_vm._e(),(_vm.img)?_c('ul',{staticClass:"photo__filters__image move"},_vm._l((_vm.moveFilters),function(filter){return _c('li',{key:filter.id},[_c('span',[_vm._v(_vm._s(filter.name))]),_c('div',[_c('FilterItem',{attrs:{"type":"range","name":"move","values":filter,"initialValue":_vm.imageFull.move[filter.value]},on:{"updateValue":_vm.updateValue}}),_c('FilterItem',{staticClass:"move__item",attrs:{"type":"number","name":"move","values":filter,"initialValue":_vm.imageFull.move[filter.value]},on:{"updateValue":_vm.updateValue}})],1)])}),0):_vm._e(),_c('h4',[_vm._v("Изменить цвет фона")]),_c('ul',{staticClass:"photo__filters__image"},[_c('li',{staticClass:"color"},[_c('span',[_vm._v("Цвет фона")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.imageFull.bgColor),expression:"imageFull.bgColor"}],style:({backgroundColor: _vm.imageFull.bgColor}),attrs:{"type":"color"},domProps:{"value":(_vm.imageFull.bgColor)},on:{"change":function($event){return _vm.addBgColor($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.imageFull, "bgColor", $event.target.value)}}})])]),_c('h4',[_vm._v("Изменить тень")]),_c('ul',{staticClass:"photo__filters__image"},_vm._l((_vm.shadowFilters),function(filter){return _c('li',{key:filter.id},[_c('span',[_vm._v(_vm._s(filter.name))]),_c('FilterItem',{attrs:{"type":"range","name":"shadow","values":filter,"initialValue":_vm.imageFull.shadow[filter.value]},on:{"updateValue":_vm.updateValue}})],1)}),0),(_vm.img)?_c('button',{staticClass:"photo__filters__save",on:{"click":function($event){return _vm.saveImage(_vm.imageFull.id)}}},[_vm._v("Сохранить картинку")]):_vm._e()])],1)]):_vm._e(),(_vm.showReadyImg)?_c('div',{staticClass:"image"},[_c('ImageItem',{attrs:{"img":_vm.imageFull},on:{"editImage":_vm.editImage,"deleteImage":_vm.deleteImageItem}})],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./photo-upload.vue?vue&type=template&id=c9d20600&scoped=true&shadow

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/ImageItem/ImageItem.vue?vue&type=template&id=70f2d3dc&scoped=true&
var ImageItemvue_type_template_id_70f2d3dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"img"},[_c('Controls',{staticClass:"img__controls",on:{"editImage":function($event){return _vm.$emit('editImage')},"deleteImage":function($event){return _vm.$emit('deleteImage')}}}),_c('Layers',{attrs:{"image":_vm.img}})],1)}
var ImageItemvue_type_template_id_70f2d3dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/ImageItem/ImageItem.vue?vue&type=template&id=70f2d3dc&scoped=true&

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Layers/Layers.vue?vue&type=template&id=d4bc1fda&scoped=true&
var Layersvue_type_template_id_d4bc1fda_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"photo__layers",style:({boxShadow: _vm.shadowLayers})},[(_vm.image.bgImage)?_c('div',{staticClass:"photo__layers__bgImage",style:({backgroundImage: ("url(" + (_vm.image.bgImage) + ")")})}):_c('div',{staticClass:"photo__layers__bgColor",style:({backgroundColor: _vm.image.bgColor})}),_c('div',{staticClass:"photo__layers__image",style:({
           backgroundImage: ("url(" + (_vm.image.img) + ")"),
           opacity: _vm.image.filter.opacity,
           minWidth: ((_vm.image.filter.sizeImg) + "%"),
           minHeight: ((_vm.image.filter.sizeImg) + "%"),
           width: ((_vm.image.filter.sizeImg) + "%"),
           height: ((_vm.image.filter.sizeImg) + "%"),
           left: ((_vm.image.move.positionX) + "%"),
           top: ((_vm.image.move.positionY) + "%"),
           filter: ("\n             blur(" + (_vm.image.filter.blur) + "px)\n             contrast(" + (_vm.image.filter.contrast) + ")\n             brightness(" + (_vm.image.filter.brightness) + ")\n             saturate(" + (_vm.image.filter.saturate) + ")\n             "),
           })})])}
var Layersvue_type_template_id_d4bc1fda_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Layers/Layers.vue?vue&type=template&id=d4bc1fda&scoped=true&

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Layers/Layers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Layersvue_type_script_lang_js_ = ({
  name: 'Layers',
  props: {
    image: Object
  },
  computed: {
    shadowLayers() {
      var sh = this.image.shadow;
      return `inset 0px 0px ${sh.height}px rgba(0,0,0,${sh.opacity})`;
    }

  }
});
// CONCATENATED MODULE: ./components/Layers/Layers.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layers_Layersvue_type_script_lang_js_ = (Layersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Layers/Layers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("cff2")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  Layers_Layersvue_type_script_lang_js_,
  Layersvue_type_template_id_d4bc1fda_scoped_true_render,
  Layersvue_type_template_id_d4bc1fda_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "d4bc1fda",
  null
  ,true
)

/* harmony default export */ var Layers = (component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Controls/Controls.vue?vue&type=template&id=1fd9ab8a&scoped=true&
var Controlsvue_type_template_id_1fd9ab8a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttons"},[_c('button',{on:{"click":function($event){return _vm.$emit('editImage')}}},[_vm._v("Edit")]),_c('button',{on:{"click":function($event){return _vm.$emit('deleteImage')}}},[_vm._v("Delete")])])}
var Controlsvue_type_template_id_1fd9ab8a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Controls/Controls.vue?vue&type=template&id=1fd9ab8a&scoped=true&

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Controls/Controls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Controlsvue_type_script_lang_js_ = ({
  name: 'Controls'
});
// CONCATENATED MODULE: ./components/Controls/Controls.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_Controlsvue_type_script_lang_js_ = (Controlsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Controls/Controls.vue



function Controls_injectStyles (context) {
  
  var style0 = __webpack_require__("aa3a")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Controls_component = normalizeComponent(
  Controls_Controlsvue_type_script_lang_js_,
  Controlsvue_type_template_id_1fd9ab8a_scoped_true_render,
  Controlsvue_type_template_id_1fd9ab8a_scoped_true_staticRenderFns,
  false,
  Controls_injectStyles,
  "1fd9ab8a",
  null
  ,true
)

/* harmony default export */ var Controls = (Controls_component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/ImageItem/ImageItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ImageItemvue_type_script_lang_js_ = ({
  name: 'ImageItem',
  props: {
    img: Object
  },
  components: {
    Layers: Layers,
    Controls: Controls
  }
});
// CONCATENATED MODULE: ./components/ImageItem/ImageItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var ImageItem_ImageItemvue_type_script_lang_js_ = (ImageItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/ImageItem/ImageItem.vue



function ImageItem_injectStyles (context) {
  
  var style0 = __webpack_require__("f1a0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ImageItem_component = normalizeComponent(
  ImageItem_ImageItemvue_type_script_lang_js_,
  ImageItemvue_type_template_id_70f2d3dc_scoped_true_render,
  ImageItemvue_type_template_id_70f2d3dc_scoped_true_staticRenderFns,
  false,
  ImageItem_injectStyles,
  "70f2d3dc",
  null
  ,true
)

/* harmony default export */ var ImageItem = (ImageItem_component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Button/Button.vue?vue&type=template&id=e5bb5d60&scoped=true&
var Buttonvue_type_template_id_e5bb5d60_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"photo__button"},[(!_vm.hasImg)?_c('input',{class:{text: _vm.text},attrs:{"type":"file"},on:{"change":function($event){return _vm.addImage($event, _vm.imgName)}}}):_c('button',{on:{"click":function($event){return _vm.deleteImage(_vm.imgName)}}},[_vm._v("Удалить "+_vm._s(_vm.name))])])}
var Buttonvue_type_template_id_e5bb5d60_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Button/Button.vue?vue&type=template&id=e5bb5d60&scoped=true&

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Button/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  props: {
    hasImg: Boolean,
    imgName: String,
    name: String,
    text: String
  },
  methods: {
    addImage(e, value) {
      var file = e.target.files[0];
      var filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload = e => {
        this.$emit('getImage', {
          img: e.target.result,
          imgName: value
        });
      };
    },

    deleteImage(value) {
      this.$emit('deleteImage', value);
    }

  }
});
// CONCATENATED MODULE: ./components/Button/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Button/Button.vue



function Button_injectStyles (context) {
  
  var style0 = __webpack_require__("e1f0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Button_component = normalizeComponent(
  Button_Buttonvue_type_script_lang_js_,
  Buttonvue_type_template_id_e5bb5d60_scoped_true_render,
  Buttonvue_type_template_id_e5bb5d60_scoped_true_staticRenderFns,
  false,
  Button_injectStyles,
  "e5bb5d60",
  null
  ,true
)

/* harmony default export */ var Button = (Button_component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/ButtonClose/ButtonClose.vue?vue&type=template&id=bfe20b52&scoped=true&
var ButtonClosevue_type_template_id_bfe20b52_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{staticClass:"close",on:{"click":function($event){return _vm.closePhotoUpload()}}},[_vm._v("x")])])}
var ButtonClosevue_type_template_id_bfe20b52_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/ButtonClose/ButtonClose.vue?vue&type=template&id=bfe20b52&scoped=true&

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/ButtonClose/ButtonClose.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ButtonClosevue_type_script_lang_js_ = ({
  methods: {
    closePhotoUpload() {
      this.$emit('closePhotoUpload');
    }

  }
});
// CONCATENATED MODULE: ./components/ButtonClose/ButtonClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var ButtonClose_ButtonClosevue_type_script_lang_js_ = (ButtonClosevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/ButtonClose/ButtonClose.vue



function ButtonClose_injectStyles (context) {
  
  var style0 = __webpack_require__("0b23")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ButtonClose_component = normalizeComponent(
  ButtonClose_ButtonClosevue_type_script_lang_js_,
  ButtonClosevue_type_template_id_bfe20b52_scoped_true_render,
  ButtonClosevue_type_template_id_bfe20b52_scoped_true_staticRenderFns,
  false,
  ButtonClose_injectStyles,
  "bfe20b52",
  null
  ,true
)

/* harmony default export */ var ButtonClose = (ButtonClose_component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7f5e338-vue-loader-template"}!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Filter/Filter.vue?vue&type=template&id=4b16980a&scoped=true&
var Filtervue_type_template_id_4b16980a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"photo__filter"},[((_vm.type)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],staticClass:"slider",attrs:{"min":_vm.values.min,"max":_vm.values.max,"step":_vm.values.step,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.currentValue)?_vm._i(_vm.currentValue,null)>-1:(_vm.currentValue)},on:{"change":function($event){var $$a=_vm.currentValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.currentValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.currentValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.currentValue=$$c}}}}):((_vm.type)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],staticClass:"slider",attrs:{"min":_vm.values.min,"max":_vm.values.max,"step":_vm.values.step,"type":"radio"},domProps:{"checked":_vm._q(_vm.currentValue,null)},on:{"change":function($event){_vm.currentValue=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],staticClass:"slider",attrs:{"min":_vm.values.min,"max":_vm.values.max,"step":_vm.values.step,"type":_vm.type},domProps:{"value":(_vm.currentValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}})])}
var Filtervue_type_template_id_4b16980a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Filter/Filter.vue?vue&type=template&id=4b16980a&scoped=true&

// EXTERNAL MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("d9ab");

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./components/Filter/Filter.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Filtervue_type_script_lang_js_ = ({
  name: 'FilterItem',
  props: {
    type: String,
    name: String,
    values: Object,
    initialValue: [Number, String]
  },

  data() {
    return {
      currentValue: this.initialValue
    };
  },

  watch: {
    currentValue(value) {
      this.$emit('updateValue', {
        value: value,
        filterName: this.name,
        name: this.values.value
      });
    },

    initialValue(value) {
      this.currentValue = value;
    }

  }
});
// CONCATENATED MODULE: ./components/Filter/Filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Filter_Filtervue_type_script_lang_js_ = (Filtervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Filter/Filter.vue



function Filter_injectStyles (context) {
  
  var style0 = __webpack_require__("4aed")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Filter_component = normalizeComponent(
  Filter_Filtervue_type_script_lang_js_,
  Filtervue_type_template_id_4b16980a_scoped_true_render,
  Filtervue_type_template_id_4b16980a_scoped_true_staticRenderFns,
  false,
  Filter_injectStyles,
  "4b16980a",
  null
  ,true
)

/* harmony default export */ var Filter = (Filter_component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./photo-upload.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var defaultImageSettings = {
  id: '',
  bgImage: '',
  bgColor: 'rgb(191, 128, 255)',
  img: '',
  shadow: {
    height: 100,
    opacity: 0.35
  },
  filter: {
    opacity: 1,
    blur: 0,
    contrast: 1,
    brightness: 1,
    saturate: 1,
    sizeImg: 100
  },
  move: {
    positionX: 50,
    positionY: 50
  }
};
/* harmony default export */ var lib_vue_loader_options_photo_uploadvue_type_script_lang_js_shadow = ({
  name: 'NewImage',
  props: {
    image: {
      type: String,
      default: JSON.stringify({})
    }
  },
  components: {
    ImageItem: ImageItem,
    Layers: Layers,
    Button: Button,
    ButtonClose: ButtonClose,
    FilterItem: Filter
  },

  data() {
    return {
      uploadPhoto: false,
      img: false,
      bgImage: false,
      imageFull: JSON.parse(JSON.stringify(defaultImageSettings)),
      showReadyImg: false,
      imageFilters: [],
      moveFilters: [],
      shadowFilters: []
    };
  },

  methods: {
    updateValue(_ref) {
      var name = _ref.name,
          filterName = _ref.filterName,
          value = _ref.value;
      this.imageFull[filterName][name] = value;
    },

    addBgColor(e) {
      this.bgColor = e.target.value;
    },

    getImage(value) {
      this.imageFull[value.imgName] = value.img;
      this[value.imgName] = true;
    },

    deleteImage(value) {
      this.imageFull[value] = '';
      this[value] = false;
    },

    deleteImageItem() {
      this.$emit('delete', this.imageFull.id);
      this.clearImageFull();
    },

    clickUploadPhoto() {
      this.imageFull = this.imageFull.id ? this.imageFull : JSON.parse(JSON.stringify(defaultImageSettings));
      this.uploadPhoto = true;
    },

    saveImage(id) {
      this.imageFull.id = id === '' ? Date.now() : id;
      this.showReadyImg = true;
      this.$emit('post', this.imageFull);
    },

    clearImageFull() {
      this.img = this.bgImage = false;
      this.uploadPhoto = false;
      this.showReadyImg = false;
      this.imageFull = JSON.parse(JSON.stringify(defaultImageSettings));
    },

    getFilterObj(name, value, min, max, step) {
      return {
        name,
        value,
        min,
        max,
        step
      };
    },

    closePhotoUpload() {
      if (!this.imageFull.img) {
        this.deleteImageItem();
        this.showReadyImg = false;
        this.uploadPhoto = false;
      } else {
        this.showReadyImg = true;
        this.uploadPhoto = true;
      }
    },

    editImage() {
      this.uploadPhoto = true;
      this.showReadyImg = false;
    },

    getFullImage() {
      this.imageFull = JSON.parse(this.image);

      if (!this.imageFull.img) {
        this.showReadyImg = false;
        this.uploadPhoto = false;
      } else {
        this.img = true;
        this.bgImage = !this.imageFull.bgImage === '';
        this.showReadyImg = true;
        this.uploadPhoto = true;
      }
    }

  },

  mounted() {
    this.imageFilters.push(this.getFilterObj('Прозрачность', 'opacity', '0.1', '1', '0.01'), this.getFilterObj('Размытие', 'blur', '0', '5', '1'), this.getFilterObj('Контраст', 'contrast', '1', '3', '0.1'), this.getFilterObj('Яркость', 'brightness', '1', '5', '0.1'), this.getFilterObj('Насыщенность', 'saturate', '0', '10', '0.1'), this.getFilterObj('Масштаб', 'sizeImg', '20', '300', '1'));
    this.shadowFilters.push(this.getFilterObj('Высота:', 'height', '0', '300', '1'), this.getFilterObj('Прозрачность:', 'opacity', '0', '1', '0.01'));
    this.moveFilters.push(this.getFilterObj('Перемещение по x', 'positionX', '0', '100', '1'), this.getFilterObj('Перемещение по y', 'positionY', '0', '100', '1'));
    this.getFullImage();
  },

  watch: {
    image() {
      this.getFullImage();
    }

  }
});
// CONCATENATED MODULE: ./photo-upload.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var photo_uploadvue_type_script_lang_js_shadow = (lib_vue_loader_options_photo_uploadvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./photo-upload.vue?shadow



function photo_uploadshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("5fd7")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var photo_uploadshadow_component = normalizeComponent(
  photo_uploadvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  photo_uploadshadow_injectStyles,
  "c9d20600",
  null
  ,true
)

/* harmony default export */ var photo_uploadshadow = (photo_uploadshadow_component.exports);
// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('photo-upload', vue_wc_wrapper(external_Vue_default.a, photo_uploadshadow))

/***/ }),

/***/ "29ad":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".close[data-v-bfe20b52]{cursor:pointer;z-index:10;width:22px;height:22px;border-radius:20px;border:0;font-size:17px;font-weight:600;color:red;padding:0;display:flex;justify-content:center}.close[data-v-bfe20b52]:hover{color:#fff;background-color:red}", ""]);


/***/ }),

/***/ "2d98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("e041");
var descriptor = __webpack_require__("379d");
var setToStringTag = __webpack_require__("5440");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("16cb")(IteratorPrototype, __webpack_require__("7ac9")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "3340":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "379d":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "38bb":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "3b51":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";.photo__button button[data-v-e5bb5d60],.photo__button input[data-v-e5bb5d60]{border:1px solid #21fb92;border-radius:10px;width:120px;height:2.5em;position:relative;background-color:#fff}.photo__button input[data-v-e5bb5d60]:after{content:\"Выбрать фото\";position:absolute;top:0;left:0;background-color:#fff;width:100%;height:100%;z-index:2;display:flex;justify-content:center;align-items:center;cursor:pointer}.photo__button .text[data-v-e5bb5d60]:after{content:\"Выбрать фон\"}", ""]);


/***/ }),

/***/ "3bcb":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("c7e2");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "4169":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("c7e2");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "42ae":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("38bb");
var toObject = __webpack_require__("8fb1");
var IE_PROTO = __webpack_require__("b184")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "493c":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "4aca":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("3bcb");
var IE8_DOM_DEFINE = __webpack_require__("8904");
var toPrimitive = __webpack_require__("4169");
var dP = Object.defineProperty;

exports.f = __webpack_require__("99db") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "4aed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_style_index_0_id_4b16980a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c36e");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_style_index_0_id_4b16980a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_style_index_0_id_4b16980a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_style_index_0_id_4b16980a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_style_index_0_id_4b16980a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_style_index_0_id_4b16980a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "53f3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".img[data-v-70f2d3dc]{position:relative;height:100%}.img__controls[data-v-70f2d3dc]{position:absolute;top:5px;right:5px;left:5px}", ""]);


/***/ }),

/***/ "5440":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("4aca").f;
var has = __webpack_require__("38bb");
var TAG = __webpack_require__("7ac9")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "5fd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_upload_vue_vue_type_style_index_0_id_c9d20600_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("73be");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_upload_vue_vue_type_style_index_0_id_c9d20600_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_upload_vue_vue_type_style_index_0_id_c9d20600_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_upload_vue_vue_type_style_index_0_id_c9d20600_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_upload_vue_vue_type_style_index_0_id_c9d20600_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_upload_vue_vue_type_style_index_0_id_c9d20600_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "62c8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("c7e2");
var document = __webpack_require__("027b").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "6969":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("f108");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6f53":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7156":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "73be":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b6f5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("0203e65d", content, shadowRoot)
};

/***/ }),

/***/ "7488":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "7936":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8e15");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("a69d896e", content, shadowRoot)
};

/***/ }),

/***/ "7a0d":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "7ac9":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("a88f")('wks');
var uid = __webpack_require__("15f3");
var Symbol = __webpack_require__("027b").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "8904":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("99db") && !__webpack_require__("6f53")(function () {
  return Object.defineProperty(__webpack_require__("62c8")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8abb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("027b");
var core = __webpack_require__("e987");
var hide = __webpack_require__("16cb");
var redefine = __webpack_require__("b75e");
var ctx = __webpack_require__("09e0");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "8e15":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".buttons[data-v-1fd9ab8a]{display:flex;justify-content:space-between}.buttons button[data-v-1fd9ab8a]{border:1px solid #21fb92;border-radius:5px;padding:3px 10px;display:flex;justify-content:center;background-color:#fff;z-index:3;cursor:pointer}", ""]);


/***/ }),

/***/ "8fb1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("493c");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "958f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0357");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("98c649a8", content, shadowRoot)
};

/***/ }),

/***/ "99db":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("6f53")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a19f":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("7ac9")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("16cb")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "a5d0":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "a88f":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("e987");
var global = __webpack_require__("027b");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("3340") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "aa3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_1fd9ab8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7936");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_1fd9ab8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_1fd9ab8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_1fd9ab8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_1fd9ab8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_1fd9ab8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "adc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("a19f");
var step = __webpack_require__("7a0d");
var Iterators = __webpack_require__("ba06");
var toIObject = __webpack_require__("24b1");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("d689")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "ade9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a88f")('native-function-to-string', Function.toString);


/***/ }),

/***/ "b184":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("a88f")('keys');
var uid = __webpack_require__("15f3");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "b425":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".photo__filter input[type=range][data-v-4b16980a]{-webkit-appearance:none;width:120px;margin:15px 0}.photo__filter input[type=range][data-v-4b16980a]::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;background:#e2e2e2;border-radius:1.3px}.photo__filter input[type=range][data-v-4b16980a]::-webkit-slider-thumb{height:22px;width:22px;border-radius:5px;background:#21fb92;cursor:pointer;-webkit-appearance:none;margin-top:-8px}.photo__filter input[type=number][data-v-4b16980a]{margin:5px 0;border:2px solid #21fb92;border-radius:5px;padding:5px 0 2px 5px}", ""]);


/***/ }),

/***/ "b519":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3b51");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("0b54e392", content, shadowRoot)
};

/***/ }),

/***/ "b6f5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".upload__photo[data-v-c9d20600]{width:100%;height:100%}.upload__photo__wrapper[data-v-c9d20600]{position:fixed;top:0;left:0;bottom:0;right:0;background-color:#fff;z-index:30}.upload__photo__button[data-v-c9d20600]{border:2px solid #21fb92;width:100px;height:100px;background-color:#fff;border-radius:10px;margin:10px;cursor:pointer}.close[data-v-c9d20600]{top:5px;right:5px}.close[data-v-c9d20600],.photo[data-v-c9d20600]{position:fixed}.photo[data-v-c9d20600]{width:100%;min-width:300px;max-width:320px;min-height:400px;max-height:550px;height:100%;top:50%;left:50%;overflow:hidden;transform:translate(-50%,-50%);border-radius:5px;border:1px solid silver;background-color:#fff;box-shadow:0 0 26px rgba(0,0,0,.5);z-index:20}.photo__buttons[data-v-c9d20600]{height:3em;padding:5px;box-sizing:border-box;display:flex;justify-content:space-around;align-items:center}.photo__filters[data-v-c9d20600]{position:relative;height:40em;max-height:300px;overflow-y:scroll;margin:0;font-family:Comic Sans MS;text-align:center;padding:0}.photo__filters__image[data-v-c9d20600]{padding:0 15px;margin:0}.photo__filters__image li[data-v-c9d20600]{display:flex;padding:0;justify-content:space-between;align-items:center}.photo__filters__image .color>input[data-v-c9d20600]{margin-right:-2px;width:120px;height:20px;padding:5px 60px 6px;border:2px solid #21fb92;cursor:pointer;box-sizing:border-box;border-radius:20px}.photo__filters h4[data-v-c9d20600]{margin:10px auto 5px}.photo__filters .move li[data-v-c9d20600]{display:flex;flex-direction:column}.photo__filters .move li div[data-v-c9d20600]{display:flex;justify-content:space-between;width:100%}.photo__filters .move li div div[data-v-c9d20600]{width:auto}.photo__filters__save[data-v-c9d20600]{background-color:#fff;border:1px solid silver;margin:10px 10px 10px;height:30px;width:60%;border-radius:10px}.image[data-v-c9d20600]{height:100%}", ""]);


/***/ }),

/***/ "b75e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("027b");
var hide = __webpack_require__("16cb");
var has = __webpack_require__("38bb");
var SRC = __webpack_require__("15f3")('src');
var $toString = __webpack_require__("ade9");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("e987").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "ba06":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "c36e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b425");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("4d18ac94", content, shadowRoot)
};

/***/ }),

/***/ "c489":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e774");
var enumBugKeys = __webpack_require__("d8f8");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5c3":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c7e2":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "cab7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: C:/Users/Admin/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "cff2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Layers_vue_vue_type_style_index_0_id_d4bc1fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("958f");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Layers_vue_vue_type_style_index_0_id_d4bc1fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Layers_vue_vue_type_style_index_0_id_d4bc1fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Layers_vue_vue_type_style_index_0_id_d4bc1fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Layers_vue_vue_type_style_index_0_id_d4bc1fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Layers_vue_vue_type_style_index_0_id_d4bc1fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d689":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("3340");
var $export = __webpack_require__("8abb");
var redefine = __webpack_require__("b75e");
var hide = __webpack_require__("16cb");
var Iterators = __webpack_require__("ba06");
var $iterCreate = __webpack_require__("2d98");
var setToStringTag = __webpack_require__("5440");
var getPrototypeOf = __webpack_require__("42ae");
var ITERATOR = __webpack_require__("7ac9")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "d68f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("29ad");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("3a54780e", content, shadowRoot)
};

/***/ }),

/***/ "d8f8":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "d9ab":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("adc6");
var getKeys = __webpack_require__("c489");
var redefine = __webpack_require__("b75e");
var global = __webpack_require__("027b");
var hide = __webpack_require__("16cb");
var Iterators = __webpack_require__("ba06");
var wks = __webpack_require__("7ac9");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "e041":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("3bcb");
var dPs = __webpack_require__("06a2");
var enumBugKeys = __webpack_require__("d8f8");
var IE_PROTO = __webpack_require__("b184")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("62c8")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("065a").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "e1f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e5bb5d60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b519");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e5bb5d60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e5bb5d60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e5bb5d60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e5bb5d60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e5bb5d60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e5fa":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c5c3");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "e774":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("38bb");
var toIObject = __webpack_require__("24b1");
var arrayIndexOf = __webpack_require__("1ca4")(false);
var IE_PROTO = __webpack_require__("b184")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e987":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "f108":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "f1a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_70f2d3dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fec3");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_70f2d3dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_70f2d3dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_70f2d3dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_70f2d3dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_70f2d3dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fec3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("53f3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("cab7").default
module.exports.__inject__ = function (shadowRoot) {
  add("11ca7154", content, shadowRoot)
};

/***/ })

/******/ });
//# sourceMappingURL=photo-upload.js.map