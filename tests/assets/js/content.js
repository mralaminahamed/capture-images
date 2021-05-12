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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webextension-polyfill-ts/lib/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/webextension-polyfill-ts/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

// if not in a browser, assume we're in a test, return a dummy
if (typeof window === "undefined") exports.browser = {};
else exports.browser = __webpack_require__(/*! webextension-polyfill */ "../node_modules/webextension-polyfill/dist/browser-polyfill.js");


/***/ }),

/***/ "../node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!**********************************************************************!*\
  !*** ../node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.6.0 - Mon Dec 23 2019 12:32:53 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./assets/ts/app.ts":
/*!**************************!*\
  !*** ./assets/ts/app.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill-ts */ "../node_modules/webextension-polyfill-ts/lib/index.js");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./assets/ts/lib.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./assets/ts/db.ts");
/*
* Capture Images
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/captureimages
* */




/*@ts-ignore*/
let images = [];
webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.onMessage.addListener((request, sender) => {
    addAppWindow();
    if (request.greeting === "hello") {
        Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('app-window').style.display = 'block';
        if (document.querySelectorAll('img').length !== 0) {
            document.querySelectorAll('img').forEach(function (img) {
                console.log(img);
            });
        }
        alert(request);
        /*let capture_images_app:any = document.getElementById('captured-images-viewer');
      /*if (capture_images_app.style.display !== 'block'){
            capture_images_app.style = 'display:block';
            document.getElementById('viewer-close')?.addEventListener('click', function () {
                capture_images_app.style = 'display:none';
            });

            let coll_img:any = '';
            let images_div:any = document.getElementById('images-div');
            let achor:any = document.getElementsByTagName('a');
            for (let i = 0; i < achor.length; i++) {
                let ext_exists_point = achor[i].href.search('.jpg' || '.jpeg' || '.png' || '.gif');
                let coll_ext_text = achor[i].href.substr(ext_exists_point, (achor[i].href.length - ext_exists_point));
                if (ext_exists_point !== -1 && coll_ext_text === '.jpg' || coll_ext_text === '.jpeg' || coll_ext_text === '.png' || coll_ext_text === '.gif') {
                    //img_count += i;
                    coll_img = document.createElement('img');
                    coll_img.setAttribute('src', achor[i].href);
                    coll_img.setAttribute('id', 'coll_images');
                    coll_img.setAttribute('class', 'coll-image');
                    coll_img.setAttribute('alt', 'Photo');
                    coll_img.setAttribute('title', 'Click to download');
                    images_div.appendChild(coll_img);
                }
            }
            if (coll_img === ''){
                images_div.textContent = 'No image found..';
            }

        } else {
            alert('Please reload this page');
            window.location.reload();
        }*/
        (function () {
            let coll = document.getElementsByClassName("coll-image");
            let i;
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function () {
                    //console.log(this);
                    const a = document.createElement("a");
                    a.style.display = "none";
                    document.body.appendChild(a);
                    a.setAttribute("download", '');
                    a.href = this.src;
                    a.click();
                    document.body.removeChild(a);
                });
            }
        }());
        return Promise.resolve('downloaded');
    }
});
/*@ts-ignore*/
function addAppWindow() {
    let appWindow = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{
            'div': {
                'id': 'app-window',
                'class': 'app-window',
                'style': 'display:none;'
            }
        }]);
    let appBody = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{
            'div': {
                'id': 'app-window-body',
                'class': 'row app-window-body animate'
            }
        }]);
    appWindow.appendChild(appBody);
    let appTitleBar = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{ 'div': { 'class': 'appTitleBar' } }]);
    let appTitleText = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{ 'div': { 'class': 'appTitleText' } }]);
    appTitleText.textContent = _db__WEBPACK_IMPORTED_MODULE_2__["app"].about.name_spaced;
    appTitleBar.appendChild(appTitleText);
    let appSearchBox = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{ 'input': { 'id': 'image-search-box', 'class': 'app-search-box', 'type': 'search', 'placeholder': 'Search any images' } }]);
    appTitleBar.appendChild(appSearchBox);
    let appTitleSymbol = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["createElement"])([{ 'div': { 'id': 'app-close-button', 'class': 'appTitleSymbol' } }]);
    appTitleSymbol.textContent = 'x';
    appTitleBar.appendChild(appTitleSymbol);
    appBody.appendChild(appTitleBar);
    /*navigators content*/
    if (Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('app-window') === null || Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('app-window') === undefined) {
        /*console.info('setting window added')*/
        document.body.insertBefore(appWindow, document.body.lastElementChild);
    }
    return globalEventControllers('app-setting-window');
}
async function globalEventControllers(component) {
    var _a;
    if (component == 'app-setting-window') {
        /*console.log('set event for app-setting-button action');*/
        /*console.log('set event for app-setting-opener action');
        console.log(document.querySelector('#app-setting-button'));*/
        (_a = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('app-setting-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            /*console.info('preparing to send data request');*/
            /*console.info('send data request');*/
        });
        /*console.log('set event for app-close-button action');
        console.log(captureElementById('-app-close-button'));*/
        Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('app-close-button').addEventListener('click', function () {
            Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementById"])('app-window').style.display = 'none';
        });
        /*console.log('set event for setting-get-a-licence action');
        console.log(captureElementById('setting-get-a-licence'));*/
        /*console.log('set event for nav action');*/
        /*console.log(captureElementByClassName('acsAppNavUL'));*/
        Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementByClassName"])('appNavUL').childNodes.forEach(function (element) {
            const content = (element.id).substr(((element.id).indexOf('nav-') + "nav-".length), (element.id).length);
            element.addEventListener('click', function () {
                /*const parentNavigatorId = element.id;
                console.log(element.id)
                console.log(content)*/
                if (content) {
                    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["captureElementByClassName"])('setting-app-body-content').childNodes.forEach(function (element) {
                        /*console.log(element)*/
                        if (element.id !== 'setting-app-content-' + content) {
                            /*captureElementById(parentNavigatorId).removeAttribute('style');*/
                            element.style.display = 'none';
                            /*console.log(element)
                            console.log(captureElementById(parentNavigatorId))*/
                        }
                        else {
                            if (element.style.display === 'none') {
                                element.style.display = 'block';
                                /*captureElementById(parentNavigatorId).setAttribute('style','background-color: #9932CC;cursor: pointer;');
                                console.log(element)
                                console.log(captureElementById(parentNavigatorId))*/
                            }
                        }
                    });
                }
            });
        });
        /*console.log(captureElementById('app-setting-window'));*/
        /*console.log('completed');*/
    }
}
/*@ts-ignore*/
function assembleUI() {
    /* attach external css file*/
    /*let app_css_file = document.createElement('link');
    app_css_file.setAttribute('type','text/css');
    app_css_file.setAttribute('rel','stylesheet');
    app_css_file.setAttribute('href',browser.runtime.getURL('assets/css/app.css'));
    document.getElementsByTagName('head')[0].appendChild(app_css_file);*/
    let app_image_window = document.createElement('div');
    app_image_window.setAttribute('id', 'captured-images-viewer');
    app_image_window.setAttribute('class', 'modal');
    let app_image_modal_content = document.createElement('div');
    app_image_modal_content.setAttribute('class', 'modal-content');
    let app_image_modal_header = document.createElement('div');
    app_image_modal_header.setAttribute('class', 'modal-header');
    let app_image_modal_header_span = document.createElement('span');
    app_image_modal_header_span.setAttribute('id', 'viewer-close');
    app_image_modal_header_span.setAttribute('class', 'close');
    app_image_modal_header_span.textContent = 'x';
    app_image_modal_header.appendChild(app_image_modal_header_span);
    let app_image_modal_header_h2 = document.createElement('h2');
    app_image_modal_header_h2.textContent = 'Capture Images';
    app_image_modal_header.appendChild(app_image_modal_header_h2);
    app_image_modal_content.appendChild(app_image_modal_header);
    let app_image_modal_body = document.createElement('div');
    app_image_modal_body.setAttribute('class', 'modal-body');
    let app_image_modal_body_p = document.createElement('p');
    app_image_modal_body.appendChild(app_image_modal_body_p);
    let app_image_modal_body_div = document.createElement('div');
    app_image_modal_body_div.setAttribute('id', 'images-div');
    app_image_modal_body.appendChild(app_image_modal_body_div);
    app_image_modal_content.appendChild(app_image_modal_body);
    app_image_window.appendChild(app_image_modal_content);
    document.body.appendChild(app_image_window);
}


/***/ }),

/***/ "./assets/ts/db.ts":
/*!*************************!*\
  !*** ./assets/ts/db.ts ***!
  \*************************/
/*! exports provided: today, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/*
* Capture Images
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/captureimages
* */
const today = new Date();
const app = {
    "about": {
        "name": "CaptureImages",
        "guid": "addon.firefox@developer.mishuoft.com",
        "short_name": "CaptureImages",
        "name_spaced": "Capture Images",
        "total_users": "380",
        "version": "0.4.0",
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "IpInfoTEST": "https://api.ipdata.co/?api-key=test",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
        }
    },
    "baseURI": document.URL,
    "document": document,
    "domain": {
        "name": document.domain,
    }
};


/***/ }),

/***/ "./assets/ts/lib.ts":
/*!**************************!*\
  !*** ./assets/ts/lib.ts ***!
  \**************************/
/*! exports provided: appTracker, globalAppMonitorURL, appdata_default, IsJsonString, createElement, captureElementById, captureElementByClassName, captureElementByTagName, sendRequest, createDefaultAppData, optimizeAppSettingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appTracker", function() { return appTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalAppMonitorURL", function() { return globalAppMonitorURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appdata_default", function() { return appdata_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsJsonString", function() { return IsJsonString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementById", function() { return captureElementById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementByClassName", function() { return captureElementByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureElementByTagName", function() { return captureElementByTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultAppData", function() { return createDefaultAppData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeAppSettingObject", function() { return optimizeAppSettingObject; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./assets/ts/db.ts");
/*
* Capture Images
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/captureimages
* */


/*required variables*/
const appTracker = _db__WEBPACK_IMPORTED_MODULE_0__["app"].about.short_name + '@' + _db__WEBPACK_IMPORTED_MODULE_0__["app"].about.version;
let globalAppMonitorURL;
let appdata_default;
/*initialize on extension installed*/
globalAppMonitorURL = 'http://localhost/monitor/browser/';
/*required variables*/
function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function createElement(node_data) {
    let element, i, j, k;
    for (i in node_data) {
        let data = node_data[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}
function captureElementById(elementId) {
    if (document.querySelector('#' + elementId) !== null) {
        return document.querySelector('#' + elementId);
    }
}
function captureElementByClassName(ClassName) {
    if (document.querySelector('.' + ClassName) !== null) {
        return document.querySelector('.' + ClassName);
    }
}
function captureElementByTagName(TagName) {
    if (document.querySelector(TagName) !== null) {
        return document.querySelector(TagName);
    }
}
function sendRequest(options, callback) {
    let dataType;
    console.group('XHR request');
    console.log(options);
    if (typeof options === "object") {
        console.info('options is object');
        if (options.method !== null && options.url !== null) {
            console.info('method and url found');
            let request = new XMLHttpRequest();
            console.info('creating xhr request');
            request.open(options.method, options.url, options.async);
            console.info('opening url with xhr request');
            console.info('setting xhr request header');
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            else {
                console.error("Error: Invalid headers.");
            }
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    console.info(options.data);
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    console.info(options.data);
                    console.info(formData);
                    request.send(formData);
                }
            }
            else {
                request.send();
            }
            console.info('sending data with xhr request');
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.info('getting data with xhr request');
                    console.log(this.responseText);
                    if (IsJsonString(this.responseText)) {
                        let data = JSON.parse(this.responseText);
                        if (callback) {
                            callback(data);
                        }
                    }
                }
            };
        }
        else {
            console.error("Error: METHOD and URL empty.");
        }
    }
    else {
        console.error("Error: Invalid options.");
    }
    console.groupEnd();
}
function createDefaultAppData(browserNameFull, browserVersion, clientIP, clientCity, clientCountry, clientDeviceName, clientDevicePlatform, clientPlatformArchitecture) {
    return appdata_default = {
        "app": { "id": "", "name": _db__WEBPACK_IMPORTED_MODULE_0__["app"].about.name, "version": _db__WEBPACK_IMPORTED_MODULE_0__["app"].about.version },
        "browser": { "name": browserNameFull, "version": browserVersion },
        "client": { "ip": clientIP, "city": clientCity, "country": clientCountry },
        "device": {
            "name": clientDeviceName,
            "platform": clientDevicePlatform,
            "architecture": clientPlatformArchitecture
        },
        "install": { "date": _db__WEBPACK_IMPORTED_MODULE_0__["today"] },
    };
}
function optimizeAppSettingObject(setting, options, callbackFn, fallbackFn) {
    /*console.log(setting);
    console.log(options);
    console.log(Object.keys(setting));*/
    if (options.length !== 0) {
        options.forEach(function (item) {
            Object.keys(item).forEach(function (__opt_Key) {
                Object.keys(setting).forEach(function (__obj_Key) {
                    if (__opt_Key === __obj_Key) {
                        item[__opt_Key].forEach(function (__opt_sub_key) {
                            Object.keys(setting[__obj_Key]).forEach(function (__obj_sub_key) {
                                if (__opt_sub_key !== __obj_sub_key && __obj_sub_key === '') {
                                    /*console.log("__opt_sub_key undefined...");
                                    console.log(__opt_sub_key);*/
                                    if (fallbackFn) {
                                        return fallbackFn();
                                    }
                                } /*else {
                                    console.log("__obj_Key...");
                                    console.log(__obj_Key);
                                    console.log("setting[__objKey]...");
                                    console.log(setting[__obj_Key]);
                                    console.log("[__sub_key]...");
                                    console.log(__obj_sub_key);
                                    console.log("setting[__objKey][__sub_key]...");
                                    console.log(setting[__obj_Key][__obj_sub_key]);
                                }*/
                            });
                        });
                    }
                });
            });
        });
        if (callbackFn) {
            return callbackFn(setting);
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=content.js.map