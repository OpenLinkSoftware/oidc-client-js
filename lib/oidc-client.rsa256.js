(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Log = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");

var _OidcClient = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");

var _OidcClientSettings = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _WebStorageStateStore = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _InMemoryWebStorage = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");

var _UserManager = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");

var _AccessTokenEvents = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _MetadataService = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");

var _CordovaPopupNavigator = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");

var _CordovaIFrameNavigator = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _TokenRevocationClient = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _SessionMonitor = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");

var _Global = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");

var _User = __webpack_require__(/*! ./src/User.js */ "./src/User.js");

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

exports.default = {
    Version: _version.Version,
    Log: _Log.Log,
    OidcClient: _OidcClient.OidcClient,
    OidcClientSettings: _OidcClientSettings.OidcClientSettings,
    WebStorageStateStore: _WebStorageStateStore.WebStorageStateStore,
    InMemoryWebStorage: _InMemoryWebStorage.InMemoryWebStorage,
    UserManager: _UserManager.UserManager,
    AccessTokenEvents: _AccessTokenEvents.AccessTokenEvents,
    MetadataService: _MetadataService.MetadataService,
    CordovaPopupNavigator: _CordovaPopupNavigator.CordovaPopupNavigator,
    CordovaIFrameNavigator: _CordovaIFrameNavigator.CordovaIFrameNavigator,
    CheckSessionIFrame: _CheckSessionIFrame.CheckSessionIFrame,
    TokenRevocationClient: _TokenRevocationClient.TokenRevocationClient,
    SessionMonitor: _SessionMonitor.SessionMonitor,
    Global: _Global.Global,
    User: _User.User
};
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ 0);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/jsbn/index.js":
/*!************************************!*\
  !*** ./node_modules/jsbn/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (true) {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessTokenEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Timer = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = exports.AccessTokenEvents = function () {
  function AccessTokenEvents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
        accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
        _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
        accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer.Timer("Access token expiring") : _ref$accessTokenExpir2,
        _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
        accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer.Timer("Access token expired") : _ref$accessTokenExpir3;

    _classCallCheck(this, AccessTokenEvents);

    this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

    this._accessTokenExpiring = accessTokenExpiringTimer;
    this._accessTokenExpired = accessTokenExpiredTimer;
  }

  AccessTokenEvents.prototype.load = function load(container) {
    // only register events if there's an access token and it has an expiration
    if (container.access_token && container.expires_in !== undefined) {
      var duration = container.expires_in;
      _Log.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

      if (duration > 0) {
        // only register expiring if we still have time
        var expiring = duration - this._accessTokenExpiringNotificationTime;
        if (expiring <= 0) {
          expiring = 1;
        }

        _Log.Log.debug("AccessTokenEvents.load: registering expiring timer in:", expiring);
        this._accessTokenExpiring.init(expiring);
      } else {
        _Log.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");
        this._accessTokenExpiring.cancel();
      }

      // if it's negative, it will still fire
      var expired = duration + 1;
      _Log.Log.debug("AccessTokenEvents.load: registering expired timer in:", expired);
      this._accessTokenExpired.init(expired);
    } else {
      this._accessTokenExpiring.cancel();
      this._accessTokenExpired.cancel();
    }
  };

  AccessTokenEvents.prototype.unload = function unload() {
    _Log.Log.debug("AccessTokenEvents.unload: canceling existing access token timers");
    this._accessTokenExpiring.cancel();
    this._accessTokenExpired.cancel();
  };

  AccessTokenEvents.prototype.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
    this._accessTokenExpiring.addHandler(cb);
  };

  AccessTokenEvents.prototype.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
    this._accessTokenExpiring.removeHandler(cb);
  };

  AccessTokenEvents.prototype.addAccessTokenExpired = function addAccessTokenExpired(cb) {
    this._accessTokenExpired.addHandler(cb);
  };

  AccessTokenEvents.prototype.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
    this._accessTokenExpired.removeHandler(cb);
  };

  return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckSessionIFrame = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;

var CheckSessionIFrame = exports.CheckSessionIFrame = function () {
  function CheckSessionIFrame(callback, client_id, url, interval) {
    var stopOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    _classCallCheck(this, CheckSessionIFrame);

    this._callback = callback;
    this._client_id = client_id;
    this._url = url;
    this._interval = interval || DefaultInterval;
    this._stopOnError = stopOnError;

    var idx = url.indexOf("/", url.indexOf("//") + 2);
    this._frame_origin = url.substr(0, idx);

    this._frame = window.document.createElement("iframe");

    // shotgun approach
    this._frame.style.visibility = "hidden";
    this._frame.style.position = "absolute";
    this._frame.style.display = "none";
    this._frame.width = 0;
    this._frame.height = 0;

    this._frame.src = url;
  }

  CheckSessionIFrame.prototype.load = function load() {
    var _this = this;

    return new Promise(function (resolve) {
      _this._frame.onload = function () {
        resolve();
      };

      window.document.body.appendChild(_this._frame);
      _this._boundMessageEvent = _this._message.bind(_this);
      window.addEventListener("message", _this._boundMessageEvent, false);
    });
  };

  CheckSessionIFrame.prototype._message = function _message(e) {
    if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
      if (e.data === "error") {
        _Log.Log.error("CheckSessionIFrame: error message from check session op iframe");
        if (this._stopOnError) {
          this.stop();
        }
      } else if (e.data === "changed") {
        _Log.Log.debug("CheckSessionIFrame: changed message from check session op iframe");
        this.stop();
        this._callback();
      } else {
        _Log.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
      }
    }
  };

  CheckSessionIFrame.prototype.start = function start(session_state) {
    var _this2 = this;

    if (this._session_state !== session_state) {
      _Log.Log.debug("CheckSessionIFrame.start");

      this.stop();

      this._session_state = session_state;

      var send = function send() {
        _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
      };

      // trigger now
      send();

      // and setup timer
      this._timer = window.setInterval(send, this._interval);
    }
  };

  CheckSessionIFrame.prototype.stop = function stop() {
    this._session_state = null;

    if (this._timer) {
      _Log.Log.debug("CheckSessionIFrame.stop");

      window.clearInterval(this._timer);
      this._timer = null;
    }
  };

  return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/ClockService.js":
/*!*****************************!*\
  !*** ./src/ClockService.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClockService = exports.ClockService = function () {
  function ClockService() {
    _classCallCheck(this, ClockService);
  }

  ClockService.prototype.getEpochTime = function getEpochTime() {
    return Promise.resolve(Date.now() / 1000 | 0);
  };

  return ClockService;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CordovaIFrameNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = exports.CordovaIFrameNavigator = function () {
  function CordovaIFrameNavigator() {
    _classCallCheck(this, CordovaIFrameNavigator);
  }

  CordovaIFrameNavigator.prototype.prepare = function prepare(params) {
    params.popupWindowFeatures = "hidden=yes";
    var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
    return Promise.resolve(popup);
  };

  return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CordovaPopupNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = exports.CordovaPopupNavigator = function () {
  function CordovaPopupNavigator() {
    _classCallCheck(this, CordovaPopupNavigator);
  }

  CordovaPopupNavigator.prototype.prepare = function prepare(params) {
    var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
    return Promise.resolve(popup);
  };

  return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CordovaPopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPopupFeatures = "location=no,toolbar=no,zoom=no";
var DefaultPopupTarget = "_blank";

var CordovaPopupWindow = exports.CordovaPopupWindow = function () {
  function CordovaPopupWindow(params) {
    var _this = this;

    _classCallCheck(this, CordovaPopupWindow);

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });

    this.features = params.popupWindowFeatures || DefaultPopupFeatures;
    this.target = params.popupWindowTarget || DefaultPopupTarget;

    this.redirect_uri = params.startUrl;
    _Log.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
  }

  CordovaPopupWindow.prototype._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
    return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (name) {
      return cordovaMetadata.hasOwnProperty(name);
    });
  };

  CordovaPopupWindow.prototype.navigate = function navigate(params) {
    if (!params || !params.url) {
      this._error("No url provided");
    } else {
      if (!window.cordova) {
        return this._error("cordova is undefined");
      }

      var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;
      if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
        return this._error("InAppBrowser plugin not found");
      }
      this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);
      if (this._popup) {
        _Log.Log.debug("CordovaPopupWindow.navigate: popup successfully created");

        this._exitCallbackEvent = this._exitCallback.bind(this);
        this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

        this._popup.addEventListener("exit", this._exitCallbackEvent, false);
        this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
      } else {
        this._error("Error opening popup window");
      }
    }
    return this.promise;
  };

  CordovaPopupWindow.prototype._loadStartCallback = function _loadStartCallback(event) {
    if (event.url.indexOf(this.redirect_uri) === 0) {
      this._success({ url: event.url });
    }
  };

  CordovaPopupWindow.prototype._exitCallback = function _exitCallback(message) {
    this._error(message);
  };

  CordovaPopupWindow.prototype._success = function _success(data) {
    this._cleanup();

    _Log.Log.debug("CordovaPopupWindow: Successful response from cordova popup window");
    this._resolve(data);
  };

  CordovaPopupWindow.prototype._error = function _error(message) {
    this._cleanup();

    _Log.Log.error(message);
    this._reject(new Error(message));
  };

  CordovaPopupWindow.prototype.close = function close() {
    this._cleanup();
  };

  CordovaPopupWindow.prototype._cleanup = function _cleanup() {
    if (this._popup) {
      _Log.Log.debug("CordovaPopupWindow: cleaning up popup");
      this._popup.removeEventListener("exit", this._exitCallbackEvent, false);
      this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);
      this._popup.close();
    }
    this._popup = null;
  };

  _createClass(CordovaPopupWindow, [{
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }]);

  return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorResponse = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = exports.ErrorResponse = function (_Error) {
  _inherits(ErrorResponse, _Error);

  function ErrorResponse() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        error = _ref.error,
        error_description = _ref.error_description,
        error_uri = _ref.error_uri,
        state = _ref.state,
        session_state = _ref.session_state;

    _classCallCheck(this, ErrorResponse);

    if (!error) {
      _Log.Log.error("No error passed to ErrorResponse");
      throw new Error("error");
    }

    var _this = _possibleConstructorReturn(this, _Error.call(this, error_description || error));

    _this.name = "ErrorResponse";

    _this.error = error;
    _this.error_description = error_description;
    _this.error_uri = error_uri;

    _this.state = state;
    _this.session_state = session_state;
    return _this;
  }

  return ErrorResponse;
}(Error);

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = exports.Event = function () {
  function Event(name) {
    _classCallCheck(this, Event);

    this._name = name;
    this._callbacks = [];
  }

  Event.prototype.addHandler = function addHandler(cb) {
    this._callbacks.push(cb);
  };

  Event.prototype.removeHandler = function removeHandler(cb) {
    var idx = this._callbacks.findIndex(function (item) {
      return item === cb;
    });
    if (idx >= 0) {
      this._callbacks.splice(idx, 1);
    }
  };

  Event.prototype.raise = function raise() {
    _Log.Log.debug("Event: Raising event: " + this._name);
    for (var i = 0; i < this._callbacks.length; i++) {
      var _callbacks;

      (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
    }
  };

  return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var timer = {
  setInterval: function (_setInterval) {
    function setInterval(_x, _x2) {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (cb, duration) {
    return setInterval(cb, duration);
  }),
  clearInterval: function (_clearInterval) {
    function clearInterval(_x3) {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function (handle) {
    return clearInterval(handle);
  })
};

var testing = false;
var request = null;

var Global = exports.Global = function () {
  function Global() {
    _classCallCheck(this, Global);
  }

  Global._testing = function _testing() {
    testing = true;
  };

  Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
    request = newRequest;
  };

  _createClass(Global, null, [{
    key: "location",
    get: function get() {
      if (!testing) {
        return location;
      }
    }
  }, {
    key: "localStorage",
    get: function get() {
      if (!testing && typeof window !== "undefined") {
        return localStorage;
      }
    }
  }, {
    key: "sessionStorage",
    get: function get() {
      if (!testing && typeof window !== "undefined") {
        return sessionStorage;
      }
    }
  }, {
    key: "XMLHttpRequest",
    get: function get() {
      if (!testing && typeof window !== "undefined") {
        return request || XMLHttpRequest;
      }
    }
  }, {
    key: "timer",
    get: function get() {
      if (!testing) {
        return timer;
      }
    }
  }]);

  return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrameNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _IFrameWindow = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var IFrameNavigator = exports.IFrameNavigator = function () {
  function IFrameNavigator() {
    _classCallCheck(this, IFrameNavigator);
  }

  IFrameNavigator.prototype.prepare = function prepare(params) {
    var frame = new _IFrameWindow.IFrameWindow(params);
    return Promise.resolve(frame);
  };

  IFrameNavigator.prototype.callback = function callback(url) {
    _Log.Log.debug("IFrameNavigator.callback");

    try {
      _IFrameWindow.IFrameWindow.notifyParent(url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrameWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTimeout = 10000;

var IFrameWindow = exports.IFrameWindow = function () {
  function IFrameWindow(params) {
    var _this = this;

    _classCallCheck(this, IFrameWindow);

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });

    this._boundMessageEvent = this._message.bind(this);
    window.addEventListener("message", this._boundMessageEvent, false);

    this._frame = window.document.createElement("iframe");

    // shotgun approach
    this._frame.style.visibility = "hidden";
    this._frame.style.position = "absolute";
    this._frame.width = 0;
    this._frame.height = 0;

    window.document.body.appendChild(this._frame);
  }

  IFrameWindow.prototype.navigate = function navigate(params) {
    if (!params || !params.url) {
      this._error("No url provided");
    } else {
      var timeout = params.silentRequestTimeout || DefaultTimeout;
      _Log.Log.debug("IFrameWindow.navigate: Using timeout of:", timeout);
      this._timer = window.setTimeout(this._timeout.bind(this), timeout);
      this._frame.src = params.url;
    }

    return this.promise;
  };

  IFrameWindow.prototype._success = function _success(data) {
    this._cleanup();

    _Log.Log.debug("IFrameWindow: Successful response from frame window");
    this._resolve(data);
  };

  IFrameWindow.prototype._error = function _error(message) {
    this._cleanup();

    _Log.Log.error(message);
    this._reject(new Error(message));
  };

  IFrameWindow.prototype.close = function close() {
    this._cleanup();
  };

  IFrameWindow.prototype._cleanup = function _cleanup() {
    if (this._frame) {
      _Log.Log.debug("IFrameWindow: cleanup");

      window.removeEventListener("message", this._boundMessageEvent, false);
      window.clearTimeout(this._timer);
      window.document.body.removeChild(this._frame);

      this._timer = null;
      this._frame = null;
      this._boundMessageEvent = null;
    }
  };

  IFrameWindow.prototype._timeout = function _timeout() {
    _Log.Log.debug("IFrameWindow.timeout");
    this._error("Frame window timed out");
  };

  IFrameWindow.prototype._message = function _message(e) {
    _Log.Log.debug("IFrameWindow.message");

    if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow && typeof e.data === "string" && (e.data.startsWith("http://") || e.data.startsWith("https://"))) {
      var url = e.data;
      if (url) {
        this._success({ url: url });
      } else {
        this._error("Invalid response from frame");
      }
    }
  };

  IFrameWindow.notifyParent = function notifyParent(url) {
    _Log.Log.debug("IFrameWindow.notifyParent");
    url = url || window.location.href;
    if (url) {
      _Log.Log.debug("IFrameWindow.notifyParent: posting url message to parent");
      window.parent.postMessage(url, location.protocol + "//" + location.host);
    }
  };

  _createClass(IFrameWindow, [{
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }, {
    key: "_origin",
    get: function get() {
      return location.protocol + "//" + location.host;
    }
  }]);

  return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InMemoryWebStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InMemoryWebStorage = exports.InMemoryWebStorage = function () {
  function InMemoryWebStorage() {
    _classCallCheck(this, InMemoryWebStorage);

    this._data = {};
  }

  InMemoryWebStorage.prototype.getItem = function getItem(key) {
    _Log.Log.debug("InMemoryWebStorage.getItem", key);
    return this._data[key];
  };

  InMemoryWebStorage.prototype.setItem = function setItem(key, value) {
    _Log.Log.debug("InMemoryWebStorage.setItem", key);
    this._data[key] = value;
  };

  InMemoryWebStorage.prototype.removeItem = function removeItem(key) {
    _Log.Log.debug("InMemoryWebStorage.removeItem", key);
    delete this._data[key];
  };

  InMemoryWebStorage.prototype.key = function key(index) {
    return Object.getOwnPropertyNames(this._data)[index];
  };

  _createClass(InMemoryWebStorage, [{
    key: "length",
    get: function get() {
      return Object.getOwnPropertyNames(this._data).length;
    }
  }]);

  return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getJoseUtil;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
  var jws = _ref.jws,
      KeyUtil = _ref.KeyUtil,
      X509 = _ref.X509,
      crypto = _ref.crypto,
      hextob64u = _ref.hextob64u,
      b64tohex = _ref.b64tohex,
      AllowedSigningAlgs = _ref.AllowedSigningAlgs;

  return function () {
    function JoseUtil() {
      _classCallCheck(this, JoseUtil);
    }

    JoseUtil.parseJwt = function parseJwt(jwt) {
      _Log.Log.debug("JoseUtil.parseJwt");
      try {
        var token = jws.JWS.parse(jwt);
        return {
          header: token.headerObj,
          payload: token.payloadObj
        };
      } catch (e) {
        _Log.Log.error(e);
      }
    };

    JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
      _Log.Log.debug("JoseUtil.validateJwt");

      try {
        if (key.kty === "RSA") {
          if (key.e && key.n) {
            key = KeyUtil.getKey(key);
          } else if (key.x5c && key.x5c.length) {
            var hex = b64tohex(key.x5c[0]);
            key = X509.getPublicKeyFromCertHex(hex);
          } else {
            _Log.Log.error("JoseUtil.validateJwt: RSA key missing key material", key);
            return Promise.reject(new Error("RSA key missing key material"));
          }
        } else if (key.kty === "EC") {
          if (key.crv && key.x && key.y) {
            key = KeyUtil.getKey(key);
          } else {
            _Log.Log.error("JoseUtil.validateJwt: EC key missing key material", key);
            return Promise.reject(new Error("EC key missing key material"));
          }
        } else {
          _Log.Log.error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
          return Promise.reject(new Error( true && key.kty));
        }

        return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
      } catch (e) {
        _Log.Log.error(e && e.message || e);
        return Promise.reject("JWT validation failed");
      }
    };

    JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive) {
      if (!clockSkew) {
        clockSkew = 0;
      }

      if (!now) {
        now = parseInt(Date.now() / 1000);
      }

      var payload = JoseUtil.parseJwt(jwt).payload;

      if (!payload.iss) {
        _Log.Log.error("JoseUtil._validateJwt: issuer was not provided");
        return Promise.reject(new Error("issuer was not provided"));
      }
      if (payload.iss !== issuer) {
        _Log.Log.error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
        return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
      }

      if (!payload.aud) {
        _Log.Log.error("JoseUtil._validateJwt: aud was not provided");
        return Promise.reject(new Error("aud was not provided"));
      }
      var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
      if (!validAudience) {
        _Log.Log.error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
        return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
      }
      if (payload.azp && payload.azp !== audience) {
        _Log.Log.error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
        return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
      }

      if (!timeInsensitive) {
        var lowerNow = now + clockSkew;
        var upperNow = now - clockSkew;

        if (!payload.iat) {
          _Log.Log.error("JoseUtil._validateJwt: iat was not provided");
          return Promise.reject(new Error("iat was not provided"));
        }
        if (lowerNow < payload.iat) {
          _Log.Log.error("JoseUtil._validateJwt: iat is in the future", payload.iat);
          return Promise.reject(new Error("iat is in the future: " + payload.iat));
        }

        if (payload.nbf && lowerNow < payload.nbf) {
          _Log.Log.error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
          return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
        }

        if (!payload.exp) {
          _Log.Log.error("JoseUtil._validateJwt: exp was not provided");
          return Promise.reject(new Error("exp was not provided"));
        }
        if (payload.exp < upperNow) {
          _Log.Log.error("JoseUtil._validateJwt: exp is in the past", payload.exp);
          return Promise.reject(new Error("exp is in the past:" + payload.exp));
        }
      }

      return Promise.resolve(payload);
    };

    JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
      return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
        try {
          if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
            _Log.Log.error("JoseUtil._validateJwt: signature validation failed");
            return Promise.reject(new Error("signature validation failed"));
          }

          return payload;
        } catch (e) {
          _Log.Log.error(e && e.message || e);
          return Promise.reject(new Error("signature validation failed"));
        }
      });
    };

    JoseUtil.hashString = function hashString(value, alg) {
      try {
        return crypto.Util.hashString(value, alg);
      } catch (e) {
        _Log.Log.error(e);
      }
    };

    JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
      try {
        return hextob64u(value);
      } catch (e) {
        _Log.Log.error(e);
      }
    };

    return JoseUtil;
  }();
}
module.exports = exports.default;

/***/ }),

/***/ "./src/JoseUtilRsa.js":
/*!****************************!*\
  !*** ./src/JoseUtilRsa.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoseUtil = undefined;

var _rsa = __webpack_require__(/*! ./crypto/rsa */ "./src/crypto/rsa.js");

var _JoseUtilImpl = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");

var _JoseUtilImpl2 = _interopRequireDefault(_JoseUtilImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoseUtil = exports.JoseUtil = (0, _JoseUtilImpl2.default)({
  jws: _rsa.jws,
  KeyUtil: _rsa.KeyUtil,
  X509: _rsa.X509,
  crypto: _rsa.crypto,
  hextob64u: _rsa.hextob64u,
  b64tohex: _rsa.b64tohex,
  AllowedSigningAlgs: _rsa.AllowedSigningAlgs
});

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var JsonService = exports.JsonService = function () {
  function JsonService() {
    var additionalContentTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
    var jwtHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, JsonService);

    if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
      this._contentTypes = additionalContentTypes.slice();
    } else {
      this._contentTypes = [];
    }
    this._contentTypes.push("application/json");
    if (jwtHandler) {
      this._contentTypes.push("application/jwt");
    }

    this._XMLHttpRequest = XMLHttpRequestCtor;
    this._jwtHandler = jwtHandler;
  }

  JsonService.prototype.getJson = async function getJson(url, token) {
    if (!url) {
      _Log.Log.error("JsonService.getJson: No url passed");
      throw new Error("url");
    }

    _Log.Log.debug("JsonService.getJson, url: ", url);
    var allowedContentTypes = this._contentTypes;
    var jwtHandler = this._jwtHandler;
    var found = null;
    var options = { method: "GET", headers: {} };

    if (token) {
      options.headers["Authorization"] = "Bearer " + token;
      _Log.Log.debug("JsonService.getJson: token passed, setting Authorization header");
    }

    var rc = await fetch(url, options);
    if (rc.ok && rc.status == 200) {
      var contentType = rc.headers.get("Content-Type");
      if (contentType) {
        var _found = null;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = allowedContentTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (contentType.startsWith(item)) {
              _found = item;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (_found === "application/jwt") {
          var req = { 'responseText': await rc.text() };
          var jwt = await jwtHandler(req);
          return jwt;
        }
        if (_found) {
          try {
            var json = await rc.json();
            return json;
          } catch (ex) {
            _Log.Log.error("JsonService.getJson: Error parsing JSON response ", ex.message);
            throw ex;
          }
        }
        throw new Error("Invalid response Content-Type: " + contentType + ", from URL: " + url);
      }
    }
    throw new Error(rc.statusText + " (" + rc.status + ")");
  };

  JsonService.prototype.postForm = async function postForm(url, payload, basicAuth) {
    if (!url) {
      _Log.Log.error("JsonService.postForm: No url passed");
      throw new Error("url");
    }

    _Log.Log.debug("JsonService.postForm, url: ", url);
    var allowedContentTypes = this._contentTypes;
    var options = { method: "POST", headers: {}, body: "" };

    options.headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (basicAuth !== undefined) {
      options.headers["Authorization"] = "Basic " + btoa(basicAuth);
    }

    var body = new URLSearchParams();
    for (var key in payload) {
      body.append(key, payload[key]);
    }
    options.body = body.toString();

    var rc = await fetch(url, options);
    if (rc.ok && rc.status == 200) {
      var contentType = rc.headers.get("Content-Type");
      if (contentType) {
        var found = null;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = allowedContentTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (contentType.startsWith(item)) {
              found = item;
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (found) {
          try {
            var json = await rc.json();
            return json;
          } catch (ex) {
            throw new Error("JsonService.postForm: Error parsing JSON response " + ex.message);
          }
        }

        throw new Error("Invalid response Content-Type: " + contentType + ", from URL: " + url);
      }
    }
    if (rc.status === 400) {
      var _contentType = rc.headers.get("Content-Type");
      if (_contentType) {
        var _found2 = null;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = allowedContentTypes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _item = _step3.value;

            if (_contentType.startsWith(_item)) {
              _found2 = _item;
              break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (_found2) {
          try {
            var payload = await rc.json();
            if (payload && payload.error) {
              _Log.Log.error("JsonService.postForm: Error from server: ", payload.error);
              throw new Error(payload.error);
            }
          } catch (ex) {
            var msg = "JsonService.postForm: Error parsing JSON response: ";
            _Log.Log.error(msg, ex.message);
            throw ex;
          }
        }
      }
    }
    throw new Error(rc.statusText + " (" + rc.status + ")");
  };

  return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var nopLogger = {
  debug: function debug() {},
  info: function info() {},
  warn: function warn() {},
  error: function error() {}
};

var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;

var logger = void 0;
var level = void 0;

var Log = exports.Log = function () {
  function Log() {
    _classCallCheck(this, Log);
  }

  Log.reset = function reset() {
    level = INFO;
    logger = nopLogger;
  };

  Log.debug = function debug() {
    if (level >= DEBUG) {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      logger.debug.apply(logger, Array.from(args));
    }
  };

  Log.info = function info() {
    if (level >= INFO) {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      logger.info.apply(logger, Array.from(args));
    }
  };

  Log.warn = function warn() {
    if (level >= WARN) {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      logger.warn.apply(logger, Array.from(args));
    }
  };

  Log.error = function error() {
    if (level >= ERROR) {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      logger.error.apply(logger, Array.from(args));
    }
  };

  _createClass(Log, null, [{
    key: "NONE",
    get: function get() {
      return NONE;
    }
  }, {
    key: "ERROR",
    get: function get() {
      return ERROR;
    }
  }, {
    key: "WARN",
    get: function get() {
      return WARN;
    }
  }, {
    key: "INFO",
    get: function get() {
      return INFO;
    }
  }, {
    key: "DEBUG",
    get: function get() {
      return DEBUG;
    }
  }, {
    key: "level",
    get: function get() {
      return level;
    },
    set: function set(value) {
      if (NONE <= value && value <= DEBUG) {
        level = value;
      } else {
        throw new Error("Invalid log level");
      }
    }
  }, {
    key: "logger",
    get: function get() {
      return logger;
    },
    set: function set(value) {
      if (!value.debug && value.info) {
        // just to stay backwards compat. can remove in 2.0
        value.debug = value.info;
      }

      if (value.debug && value.info && value.warn && value.error) {
        logger = value;
      } else {
        throw new Error("Invalid logger");
      }
    }
  }]);

  return Log;
}();

Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetadataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = ".well-known/openid-configuration";

var MetadataService = exports.MetadataService = function () {
  function MetadataService(settings) {
    var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;

    _classCallCheck(this, MetadataService);

    if (!settings) {
      _Log.Log.error("MetadataService: No settings passed to MetadataService");
      throw new Error("settings");
    }

    this._settings = settings;
    this._jsonService = new JsonServiceCtor(["application/jwk-set+json"]);
  }

  MetadataService.prototype.resetSigningKeys = function resetSigningKeys() {
    this._settings = this._settings || {};
    this._settings.signingKeys = undefined;
  };

  MetadataService.prototype.getMetadata = function getMetadata() {
    var _this = this;

    if (this._settings.metadata) {
      _Log.Log.debug("MetadataService.getMetadata: Returning metadata from settings");
      return Promise.resolve(this._settings.metadata);
    }

    if (!this.metadataUrl) {
      _Log.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
      return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
    }

    _Log.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);

    return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
      _Log.Log.debug("MetadataService.getMetadata: json received");

      var seed = _this._settings.metadataSeed || {};
      _this._settings.metadata = Object.assign({}, seed, metadata);
      return _this._settings.metadata;
    });
  };

  MetadataService.prototype.getIssuer = function getIssuer() {
    return this._getMetadataProperty("issuer");
  };

  MetadataService.prototype.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
    return this._getMetadataProperty("authorization_endpoint");
  };

  MetadataService.prototype.getUserInfoEndpoint = function getUserInfoEndpoint() {
    return this._getMetadataProperty("userinfo_endpoint");
  };

  MetadataService.prototype.getTokenEndpoint = function getTokenEndpoint() {
    var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return this._getMetadataProperty("token_endpoint", optional);
  };

  MetadataService.prototype.getCheckSessionIframe = function getCheckSessionIframe() {
    return this._getMetadataProperty("check_session_iframe", true);
  };

  MetadataService.prototype.getEndSessionEndpoint = function getEndSessionEndpoint() {
    return this._getMetadataProperty("end_session_endpoint", true);
  };

  MetadataService.prototype.getRevocationEndpoint = function getRevocationEndpoint() {
    return this._getMetadataProperty("revocation_endpoint", true);
  };

  MetadataService.prototype.getKeysEndpoint = function getKeysEndpoint() {
    return this._getMetadataProperty("jwks_uri", true);
  };

  MetadataService.prototype._getMetadataProperty = function _getMetadataProperty(name) {
    var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _Log.Log.debug("MetadataService.getMetadataProperty for: " + name);

    return this.getMetadata().then(function (metadata) {
      _Log.Log.debug("MetadataService.getMetadataProperty: metadata recieved");

      if (metadata[name] === undefined) {
        if (optional === true) {
          _Log.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
          return undefined;
        } else {
          _Log.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
          throw new Error("Metadata does not contain property " + name);
        }
      }

      return metadata[name];
    });
  };

  MetadataService.prototype.getSigningKeys = function getSigningKeys() {
    var _this2 = this;

    if (this._settings.signingKeys) {
      _Log.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
      return Promise.resolve(this._settings.signingKeys);
    }

    return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
      _Log.Log.debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);

      return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
        _Log.Log.debug("MetadataService.getSigningKeys: key set received", keySet);

        if (!keySet.keys) {
          _Log.Log.error("MetadataService.getSigningKeys: Missing keys on keyset");
          throw new Error("Missing keys on keyset");
        }

        _this2._settings.signingKeys = keySet.keys;
        return _this2._settings.signingKeys;
      });
    });
  };

  _createClass(MetadataService, [{
    key: "metadataUrl",
    get: function get() {
      if (!this._metadataUrl) {
        if (this._settings.metadataUrl) {
          this._metadataUrl = this._settings.metadataUrl;
        } else {
          this._metadataUrl = this._settings.authority;

          if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
            if (this._metadataUrl[this._metadataUrl.length - 1] !== "/") {
              this._metadataUrl += "/";
            }
            this._metadataUrl += OidcMetadataUrlPath;
          }
        }
      }

      return this._metadataUrl;
    }
  }]);

  return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OidcClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

var _SigninResponse = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");

var _SignoutRequest = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");

var _SignoutResponse = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcClient = exports.OidcClient = function () {
  function OidcClient() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, OidcClient);

    if (settings instanceof _OidcClientSettings.OidcClientSettings) {
      this._settings = settings;
    } else {
      this._settings = new _OidcClientSettings.OidcClientSettings(settings);
    }
  }

  OidcClient.prototype.createSigninRequest = function createSigninRequest() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        response_type = _ref.response_type,
        scope = _ref.scope,
        redirect_uri = _ref.redirect_uri,
        data = _ref.data,
        state = _ref.state,
        prompt = _ref.prompt,
        display = _ref.display,
        max_age = _ref.max_age,
        ui_locales = _ref.ui_locales,
        id_token_hint = _ref.id_token_hint,
        login_hint = _ref.login_hint,
        acr_values = _ref.acr_values,
        resource = _ref.resource,
        request = _ref.request,
        request_uri = _ref.request_uri,
        response_mode = _ref.response_mode,
        extraQueryParams = _ref.extraQueryParams,
        extraTokenParams = _ref.extraTokenParams,
        request_type = _ref.request_type,
        skipUserInfo = _ref.skipUserInfo;

    var stateStore = arguments[1];

    _Log.Log.debug("OidcClient.createSigninRequest");

    var client_id = this._settings.client_id;
    response_type = response_type || this._settings.response_type;
    scope = scope || this._settings.scope;
    redirect_uri = redirect_uri || this._settings.redirect_uri;

    // id_token_hint, login_hint aren't allowed on _settings
    prompt = prompt || this._settings.prompt;
    display = display || this._settings.display;
    max_age = max_age || this._settings.max_age;
    ui_locales = ui_locales || this._settings.ui_locales;
    acr_values = acr_values || this._settings.acr_values;
    resource = resource || this._settings.resource;
    response_mode = response_mode || this._settings.response_mode;
    extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
    extraTokenParams = extraTokenParams || this._settings.extraTokenParams;

    var authority = this._settings.authority;

    if (_SigninRequest.SigninRequest.isCode(response_type) && response_type !== "code") {
      return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
    }

    return this._metadataService.getAuthorizationEndpoint().then(function (url) {
      _Log.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", url);

      var signinRequest = new _SigninRequest.SigninRequest({
        url: url,
        client_id: client_id,
        redirect_uri: redirect_uri,
        response_type: response_type,
        scope: scope,
        data: data || state,
        authority: authority,
        prompt: prompt,
        display: display,
        max_age: max_age,
        ui_locales: ui_locales,
        id_token_hint: id_token_hint,
        login_hint: login_hint,
        acr_values: acr_values,
        resource: resource,
        request: request,
        request_uri: request_uri,
        extraQueryParams: extraQueryParams,
        extraTokenParams: extraTokenParams,
        request_type: request_type,
        response_mode: response_mode,
        client_secret: _this._settings.client_secret,
        skipUserInfo: skipUserInfo
      });

      var signinState = signinRequest.state;
      stateStore = stateStore || _this._stateStore;

      return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
        return signinRequest;
      });
    });
  };

  OidcClient.prototype.readSigninResponseState = function readSigninResponseState(url, stateStore) {
    var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _Log.Log.debug("OidcClient.readSigninResponseState");

    var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
    var delimiter = useQuery ? "?" : "#";

    var response = new _SigninResponse.SigninResponse(url, delimiter);

    if (!response.state) {
      _Log.Log.error("OidcClient.readSigninResponseState: No state in response");
      return Promise.reject(new Error("No state in response"));
    }

    stateStore = stateStore || this._stateStore;

    var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);

    return stateApi(response.state).then(function (storedStateString) {
      if (!storedStateString) {
        _Log.Log.error("OidcClient.readSigninResponseState: No matching state found in storage");
        throw new Error("No matching state found in storage");
      }

      var state = _SigninState.SigninState.fromStorageString(storedStateString);
      return { state: state, response: response };
    });
  };

  OidcClient.prototype.processSigninResponse = function processSigninResponse(url, stateStore) {
    var _this2 = this;

    _Log.Log.debug("OidcClient.processSigninResponse");

    return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
      var state = _ref2.state,
          response = _ref2.response;

      _Log.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response");
      return _this2._validator.validateSigninResponse(state, response);
    });
  };

  OidcClient.prototype.createSignoutRequest = function createSignoutRequest() {
    var _this3 = this;

    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id_token_hint = _ref3.id_token_hint,
        data = _ref3.data,
        state = _ref3.state,
        post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
        extraQueryParams = _ref3.extraQueryParams,
        request_type = _ref3.request_type;

    var stateStore = arguments[1];

    _Log.Log.debug("OidcClient.createSignoutRequest");

    post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
    extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

    return this._metadataService.getEndSessionEndpoint().then(function (url) {
      if (!url) {
        _Log.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned");
        throw new Error("no end session endpoint");
      }

      _Log.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", url);

      var request = new _SignoutRequest.SignoutRequest({
        url: url,
        id_token_hint: id_token_hint,
        post_logout_redirect_uri: post_logout_redirect_uri,
        data: data || state,
        extraQueryParams: extraQueryParams,
        request_type: request_type
      });

      var signoutState = request.state;
      if (signoutState) {
        _Log.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist");

        stateStore = stateStore || _this3._stateStore;
        stateStore.set(signoutState.id, signoutState.toStorageString());
      }

      return request;
    });
  };

  OidcClient.prototype.readSignoutResponseState = function readSignoutResponseState(url, stateStore) {
    var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _Log.Log.debug("OidcClient.readSignoutResponseState");

    var response = new _SignoutResponse.SignoutResponse(url);
    if (!response.state) {
      _Log.Log.debug("OidcClient.readSignoutResponseState: No state in response");

      if (response.error) {
        _Log.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
        return Promise.reject(new _ErrorResponse.ErrorResponse(response));
      }

      return Promise.resolve({ state: undefined, response: response });
    }

    var stateKey = response.state;

    stateStore = stateStore || this._stateStore;

    var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
    return stateApi(stateKey).then(function (storedStateString) {
      if (!storedStateString) {
        _Log.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage");
        throw new Error("No matching state found in storage");
      }

      var state = _State.State.fromStorageString(storedStateString);

      return { state: state, response: response };
    });
  };

  OidcClient.prototype.processSignoutResponse = function processSignoutResponse(url, stateStore) {
    var _this4 = this;

    _Log.Log.debug("OidcClient.processSignoutResponse");

    return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
      var state = _ref4.state,
          response = _ref4.response;

      if (state) {
        _Log.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
        return _this4._validator.validateSignoutResponse(state, response);
      } else {
        _Log.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response");
        return response;
      }
    });
  };

  OidcClient.prototype.clearStaleState = function clearStaleState(stateStore) {
    _Log.Log.debug("OidcClient.clearStaleState");

    stateStore = stateStore || this._stateStore;

    return _State.State.clearStaleState(stateStore, this.settings.staleStateAge);
  };

  _createClass(OidcClient, [{
    key: "_stateStore",
    get: function get() {
      return this.settings.stateStore;
    }
  }, {
    key: "_validator",
    get: function get() {
      return this.settings.validator;
    }
  }, {
    key: "_metadataService",
    get: function get() {
      return this.settings.metadataService;
    }
  }, {
    key: "settings",
    get: function get() {
      return this._settings;
    }
  }, {
    key: "metadataService",
    get: function get() {
      return this._metadataService;
    }
  }]);

  return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OidcClientSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _ClockService = __webpack_require__(/*! ./ClockService.js */ "./src/ClockService.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _ResponseValidator = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = ".well-known/openid-configuration";

var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultClientAuthentication = "client_secret_post"; // The default value must be client_secret_basic, as explained in https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication
var DefaultStaleStateAge = 60 * 15; // seconds
var DefaultClockSkewInSeconds = 60 * 5;

var OidcClientSettings = exports.OidcClientSettings = function () {
  function OidcClientSettings() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        authority = _ref.authority,
        metadataUrl = _ref.metadataUrl,
        metadata = _ref.metadata,
        signingKeys = _ref.signingKeys,
        metadataSeed = _ref.metadataSeed,
        client_id = _ref.client_id,
        client_secret = _ref.client_secret,
        _ref$response_type = _ref.response_type,
        response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
        _ref$scope = _ref.scope,
        scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
        redirect_uri = _ref.redirect_uri,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        _ref$client_authentic = _ref.client_authentication,
        client_authentication = _ref$client_authentic === undefined ? DefaultClientAuthentication : _ref$client_authentic,
        prompt = _ref.prompt,
        display = _ref.display,
        max_age = _ref.max_age,
        ui_locales = _ref.ui_locales,
        acr_values = _ref.acr_values,
        resource = _ref.resource,
        response_mode = _ref.response_mode,
        _ref$filterProtocolCl = _ref.filterProtocolClaims,
        filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
        _ref$loadUserInfo = _ref.loadUserInfo,
        loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
        _ref$staleStateAge = _ref.staleStateAge,
        staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
        _ref$clockSkew = _ref.clockSkew,
        clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
        _ref$clockService = _ref.clockService,
        clockService = _ref$clockService === undefined ? new _ClockService.ClockService() : _ref$clockService,
        _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
        userInfoJwtIssuer = _ref$userInfoJwtIssue === undefined ? "OP" : _ref$userInfoJwtIssue,
        _ref$mergeClaims = _ref.mergeClaims,
        mergeClaims = _ref$mergeClaims === undefined ? false : _ref$mergeClaims,
        _ref$stateStore = _ref.stateStore,
        stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore.WebStorageStateStore() : _ref$stateStore,
        _ref$ResponseValidato = _ref.ResponseValidatorCtor,
        ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator.ResponseValidator : _ref$ResponseValidato,
        _ref$MetadataServiceC = _ref.MetadataServiceCtor,
        MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService.MetadataService : _ref$MetadataServiceC,
        _ref$extraQueryParams = _ref.extraQueryParams,
        extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams,
        _ref$extraTokenParams = _ref.extraTokenParams,
        extraTokenParams = _ref$extraTokenParams === undefined ? {} : _ref$extraTokenParams;

    _classCallCheck(this, OidcClientSettings);

    this._authority = authority;
    this._metadataUrl = metadataUrl;
    this._metadata = metadata;
    this._metadataSeed = metadataSeed;
    this._signingKeys = signingKeys;

    this._client_id = client_id;
    this._client_secret = client_secret;
    this._response_type = response_type;
    this._scope = scope;
    this._redirect_uri = redirect_uri;
    this._post_logout_redirect_uri = post_logout_redirect_uri;
    this._client_authentication = client_authentication;

    this._prompt = prompt;
    this._display = display;
    this._max_age = max_age;
    this._ui_locales = ui_locales;
    this._acr_values = acr_values;
    this._resource = resource;
    this._response_mode = response_mode;

    this._filterProtocolClaims = !!filterProtocolClaims;
    this._loadUserInfo = !!loadUserInfo;
    this._staleStateAge = staleStateAge;
    this._clockSkew = clockSkew;
    this._clockService = clockService;
    this._userInfoJwtIssuer = userInfoJwtIssuer;
    this._mergeClaims = !!mergeClaims;

    this._stateStore = stateStore;
    this._validator = new ResponseValidatorCtor(this);
    this._metadataService = new MetadataServiceCtor(this);

    this._extraQueryParams = (typeof extraQueryParams === "undefined" ? "undefined" : _typeof(extraQueryParams)) === "object" ? extraQueryParams : {};
    this._extraTokenParams = (typeof extraTokenParams === "undefined" ? "undefined" : _typeof(extraTokenParams)) === "object" ? extraTokenParams : {};
  }

  // client config


  // get the time
  OidcClientSettings.prototype.getEpochTime = function getEpochTime() {
    return this._clockService.getEpochTime();
  };

  _createClass(OidcClientSettings, [{
    key: "client_id",
    get: function get() {
      return this._client_id;
    },
    set: function set(value) {
      if (!this._client_id) {
        // one-time set only
        this._client_id = value;
      } else {
        _Log.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.");
        throw new Error("client_id has already been assigned.");
      }
    }
  }, {
    key: "client_secret",
    get: function get() {
      return this._client_secret;
    }
  }, {
    key: "response_type",
    get: function get() {
      return this._response_type;
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    }
  }, {
    key: "redirect_uri",
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: "post_logout_redirect_uri",
    get: function get() {
      return this._post_logout_redirect_uri;
    }
  }, {
    key: "client_authentication",
    get: function get() {
      return this._client_authentication;
    }

    // optional protocol params

  }, {
    key: "prompt",
    get: function get() {
      return this._prompt;
    }
  }, {
    key: "display",
    get: function get() {
      return this._display;
    }
  }, {
    key: "max_age",
    get: function get() {
      return this._max_age;
    }
  }, {
    key: "ui_locales",
    get: function get() {
      return this._ui_locales;
    }
  }, {
    key: "acr_values",
    get: function get() {
      return this._acr_values;
    }
  }, {
    key: "resource",
    get: function get() {
      return this._resource;
    }
  }, {
    key: "response_mode",
    get: function get() {
      return this._response_mode;
    }

    // metadata

  }, {
    key: "authority",
    get: function get() {
      return this._authority;
    },
    set: function set(value) {
      if (!this._authority) {
        // one-time set only
        this._authority = value;
      } else {
        _Log.Log.error("OidcClientSettings.set_authority: authority has already been assigned.");
        throw new Error("authority has already been assigned.");
      }
    }
  }, {
    key: "metadataUrl",
    get: function get() {
      if (!this._metadataUrl) {
        this._metadataUrl = this.authority;

        if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
          if (this._metadataUrl[this._metadataUrl.length - 1] !== "/") {
            this._metadataUrl += "/";
          }
          this._metadataUrl += OidcMetadataUrlPath;
        }
      }

      return this._metadataUrl;
    }

    // settable/cachable metadata values

  }, {
    key: "metadata",
    get: function get() {
      return this._metadata;
    },
    set: function set(value) {
      this._metadata = value;
    }
  }, {
    key: "metadataSeed",
    get: function get() {
      return this._metadataSeed;
    },
    set: function set(value) {
      this._metadataSeed = value;
    }
  }, {
    key: "signingKeys",
    get: function get() {
      return this._signingKeys;
    },
    set: function set(value) {
      this._signingKeys = value;
    }

    // behavior flags

  }, {
    key: "filterProtocolClaims",
    get: function get() {
      return this._filterProtocolClaims;
    }
  }, {
    key: "loadUserInfo",
    get: function get() {
      return this._loadUserInfo;
    }
  }, {
    key: "staleStateAge",
    get: function get() {
      return this._staleStateAge;
    }
  }, {
    key: "clockSkew",
    get: function get() {
      return this._clockSkew;
    }
  }, {
    key: "userInfoJwtIssuer",
    get: function get() {
      return this._userInfoJwtIssuer;
    }
  }, {
    key: "mergeClaims",
    get: function get() {
      return this._mergeClaims;
    }
  }, {
    key: "stateStore",
    get: function get() {
      return this._stateStore;
    }
  }, {
    key: "validator",
    get: function get() {
      return this._validator;
    }
  }, {
    key: "metadataService",
    get: function get() {
      return this._metadataService;
    }

    // extra query params

  }, {
    key: "extraQueryParams",
    get: function get() {
      return this._extraQueryParams;
    },
    set: function set(value) {
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
        this._extraQueryParams = value;
      } else {
        this._extraQueryParams = {};
      }
    }

    // extra token params

  }, {
    key: "extraTokenParams",
    get: function get() {
      return this._extraTokenParams;
    },
    set: function set(value) {
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
        this._extraTokenParams = value;
      } else {
        this._extraTokenParams = {};
      }
    }
  }]);

  return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _PopupWindow = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var PopupNavigator = exports.PopupNavigator = function () {
  function PopupNavigator() {
    _classCallCheck(this, PopupNavigator);
  }

  PopupNavigator.prototype.prepare = function prepare(params) {
    var popup = new _PopupWindow.PopupWindow(params);
    return Promise.resolve(popup);
  };

  PopupNavigator.prototype.callback = function callback(url, keepOpen, delimiter) {
    _Log.Log.debug("PopupNavigator.callback");

    try {
      _PopupWindow.PopupWindow.notifyOpener(url, keepOpen, delimiter);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = "location=no,toolbar=no,width=500,height=500,left=100,top=100;";
//const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";

var PopupWindow = exports.PopupWindow = function () {
  function PopupWindow(params) {
    var _this = this;

    _classCallCheck(this, PopupWindow);

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });

    var target = params.popupWindowTarget || DefaultPopupTarget;
    var features = params.popupWindowFeatures || DefaultPopupFeatures;

    this._popup = window.open("", target, features);
    if (this._popup) {
      _Log.Log.debug("PopupWindow.ctor: popup successfully created");
      this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
    }
  }

  PopupWindow.prototype.navigate = function navigate(params) {
    if (!this._popup) {
      this._error("PopupWindow.navigate: Error opening popup window");
    } else if (!params || !params.url) {
      this._error("PopupWindow.navigate: no url provided");
      this._error("No url provided");
    } else {
      _Log.Log.debug("PopupWindow.navigate: Setting URL in popup");

      this._id = params.id;
      if (this._id) {
        window["popupCallback_" + params.id] = this._callback.bind(this);
      }

      this._popup.focus();
      this._popup.window.location = params.url;
    }

    return this.promise;
  };

  PopupWindow.prototype._success = function _success(data) {
    _Log.Log.debug("PopupWindow.callback: Successful response from popup window");

    this._cleanup();
    this._resolve(data);
  };

  PopupWindow.prototype._error = function _error(message) {
    _Log.Log.error("PopupWindow.error: ", message);

    this._cleanup();
    this._reject(new Error(message));
  };

  PopupWindow.prototype.close = function close() {
    this._cleanup(false);
  };

  PopupWindow.prototype._cleanup = function _cleanup(keepOpen) {
    _Log.Log.debug("PopupWindow.cleanup");

    window.clearInterval(this._checkForPopupClosedTimer);
    this._checkForPopupClosedTimer = null;

    delete window["popupCallback_" + this._id];

    if (this._popup && !keepOpen) {
      this._popup.close();
    }
    this._popup = null;
  };

  PopupWindow.prototype._checkForPopupClosed = function _checkForPopupClosed() {
    if (!this._popup || this._popup.closed) {
      this._error("Popup window closed");
    }
  };

  PopupWindow.prototype._callback = function _callback(url, keepOpen) {
    this._cleanup(keepOpen);

    if (url) {
      _Log.Log.debug("PopupWindow.callback success");
      this._success({ url: url });
    } else {
      _Log.Log.debug("PopupWindow.callback: Invalid response from popup");
      this._error("Invalid response from popup");
    }
  };

  PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
    if (window.opener) {
      url = url || window.location.href;
      if (url) {
        var data = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

        if (data.state) {
          var name = "popupCallback_" + data.state;
          var callback = window.opener[name];
          if (callback) {
            _Log.Log.debug("PopupWindow.notifyOpener: passing url message to opener");
            callback(url, keepOpen);
          } else {
            _Log.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
          }
        } else {
          _Log.Log.warn("PopupWindow.notifyOpener: no state found in response url");
        }
      }
    } else {
      _Log.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
    }
  };

  _createClass(PopupWindow, [{
    key: "promise",
    get: function get() {
      return this._promise;
    }
  }]);

  return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedirectNavigator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectNavigator = exports.RedirectNavigator = function () {
  function RedirectNavigator() {
    _classCallCheck(this, RedirectNavigator);
  }

  RedirectNavigator.prototype.prepare = function prepare() {
    return Promise.resolve(this);
  };

  RedirectNavigator.prototype.navigate = function navigate(params) {
    if (!params || !params.url) {
      _Log.Log.error("RedirectNavigator.navigate: No url provided");
      return Promise.reject(new Error("No url provided"));
    }

    if (params.useReplaceToNavigate) {
      window.location.replace(params.url);
    } else {
      window.location = params.url;
    }

    return Promise.resolve();
  };

  _createClass(RedirectNavigator, [{
    key: "url",
    get: function get() {
      return window.location.href;
    }
  }]);

  return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _UserInfoService = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];

var ResponseValidator = exports.ResponseValidator = function () {
  function ResponseValidator(settings) {
    var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;
    var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService.UserInfoService;
    var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;
    var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;

    _classCallCheck(this, ResponseValidator);

    if (!settings) {
      _Log.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator");
      throw new Error("settings");
    }

    this._settings = settings;
    this._metadataService = new MetadataServiceCtor(this._settings);
    this._userInfoService = new UserInfoServiceCtor(this._settings);
    this._joseUtil = joseUtil;
    this._tokenClient = new TokenClientCtor(this._settings);
  }

  ResponseValidator.prototype.validateSigninResponse = function validateSigninResponse(state, response) {
    var _this = this;

    _Log.Log.debug("ResponseValidator.validateSigninResponse");

    return this._processSigninParams(state, response).then(function (response) {
      _Log.Log.debug("ResponseValidator.validateSigninResponse: state processed");
      return _this._validateTokens(state, response).then(function (response) {
        _Log.Log.debug("ResponseValidator.validateSigninResponse: tokens validated");
        return _this._processClaims(state, response).then(function (response) {
          _Log.Log.debug("ResponseValidator.validateSigninResponse: claims processed");
          return response;
        });
      });
    });
  };

  ResponseValidator.prototype.validateSignoutResponse = function validateSignoutResponse(state, response) {
    if (state.id !== response.state) {
      _Log.Log.error("ResponseValidator.validateSignoutResponse: State does not match");
      return Promise.reject(new Error("State does not match"));
    }

    // now that we know the state matches, take the stored data
    // and set it into the response so callers can get their state
    // this is important for both success & error outcomes
    _Log.Log.debug("ResponseValidator.validateSignoutResponse: state validated");
    response.state = state.data;

    if (response.error) {
      _Log.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
      return Promise.reject(new _ErrorResponse.ErrorResponse(response));
    }

    return Promise.resolve(response);
  };

  ResponseValidator.prototype._processSigninParams = function _processSigninParams(state, response) {
    if (state.id !== response.state) {
      _Log.Log.error("ResponseValidator._processSigninParams: State does not match");
      return Promise.reject(new Error("State does not match"));
    }

    if (!state.client_id) {
      _Log.Log.error("ResponseValidator._processSigninParams: No client_id on state");
      return Promise.reject(new Error("No client_id on state"));
    }

    if (!state.authority) {
      _Log.Log.error("ResponseValidator._processSigninParams: No authority on state");
      return Promise.reject(new Error("No authority on state"));
    }

    // this allows the authority to be loaded from the signin state
    if (!this._settings.authority) {
      this._settings.authority = state.authority;
    }
    // ensure we're using the correct authority if the authority is not loaded from signin state
    else if (this._settings.authority && this._settings.authority !== state.authority) {
        _Log.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
        return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
      }
    // this allows the client_id to be loaded from the signin state
    if (!this._settings.client_id) {
      this._settings.client_id = state.client_id;
    }
    // ensure we're using the correct client_id if the client_id is not loaded from signin state
    else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
        _Log.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
        return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
      }

    // now that we know the state matches, take the stored data
    // and set it into the response so callers can get their state
    // this is important for both success & error outcomes
    _Log.Log.debug("ResponseValidator._processSigninParams: state validated");
    response.state = state.data;

    if (response.error) {
      _Log.Log.warn("ResponseValidator._processSigninParams: Response was error", response.error);
      return Promise.reject(new _ErrorResponse.ErrorResponse(response));
    }

    if (state.nonce && !response.id_token) {
      _Log.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response");
      return Promise.reject(new Error("No id_token in response"));
    }

    if (!state.nonce && response.id_token) {
      _Log.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response");
      return Promise.reject(new Error("Unexpected id_token in response"));
    }

    if (state.code_verifier && !response.code) {
      _Log.Log.error("ResponseValidator._processSigninParams: Expecting code in response");
      return Promise.reject(new Error("No code in response"));
    }

    if (!state.code_verifier && response.code) {
      _Log.Log.error("ResponseValidator._processSigninParams: Not expecting code in response");
      return Promise.reject(new Error("Unexpected code in response"));
    }

    if (!response.scope) {
      // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
      response.scope = state.scope;
    }

    return Promise.resolve(response);
  };

  ResponseValidator.prototype._processClaims = function _processClaims(state, response) {
    var _this2 = this;

    if (response.isOpenIdConnect) {
      _Log.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims");

      response.profile = this._filterProtocolClaims(response.profile);

      if (state.skipUserInfo !== true && this._settings.loadUserInfo && response.access_token) {
        _Log.Log.debug("ResponseValidator._processClaims: loading user info");

        return this._userInfoService.getClaims(response.access_token).then(function (claims) {
          _Log.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

          if (claims.sub !== response.profile.sub) {
            _Log.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in id_token");
            return Promise.reject(new Error("sub from user info endpoint does not match sub in id_token"));
          }

          response.profile = _this2._mergeClaims(response.profile, claims);
          _Log.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);

          return response;
        });
      } else {
        _Log.Log.debug("ResponseValidator._processClaims: not loading user info");
      }
    } else {
      _Log.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
    }

    return Promise.resolve(response);
  };

  ResponseValidator.prototype._mergeClaims = function _mergeClaims(claims1, claims2) {
    var result = Object.assign({}, claims1);

    for (var name in claims2) {
      var values = claims2[name];
      if (!Array.isArray(values)) {
        values = [values];
      }

      for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (!result[name]) {
          result[name] = value;
        } else if (Array.isArray(result[name])) {
          if (result[name].indexOf(value) < 0) {
            result[name].push(value);
          }
        } else if (result[name] !== value) {
          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && this._settings.mergeClaims) {
            result[name] = this._mergeClaims(result[name], value);
          } else {
            result[name] = [result[name], value];
          }
        }
      }
    }

    return result;
  };

  ResponseValidator.prototype._filterProtocolClaims = function _filterProtocolClaims(claims) {
    _Log.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);

    var result = Object.assign({}, claims);

    if (this._settings._filterProtocolClaims) {
      ProtocolClaims.forEach(function (type) {
        delete result[type];
      });

      _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
    } else {
      _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
    }

    return result;
  };

  ResponseValidator.prototype._validateTokens = function _validateTokens(state, response) {
    if (response.code) {
      _Log.Log.debug("ResponseValidator._validateTokens: Validating code");
      return this._processCode(state, response);
    }

    if (response.id_token) {
      if (response.access_token) {
        _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token");
        return this._validateIdTokenAndAccessToken(state, response);
      }

      _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token");
      return this._validateIdToken(state, response);
    }

    _Log.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
    return Promise.resolve(response);
  };

  ResponseValidator.prototype._processCode = function _processCode(state, response) {
    var _this3 = this;

    var request = {
      client_id: state.client_id,
      client_secret: state.client_secret,
      code: response.code,
      redirect_uri: state.redirect_uri,
      code_verifier: state.code_verifier
    };

    if (state.extraTokenParams && _typeof(state.extraTokenParams) === "object") {
      Object.assign(request, state.extraTokenParams);
    }

    return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {
      for (var key in tokenResponse) {
        response[key] = tokenResponse[key];
      }

      if (response.id_token) {
        _Log.Log.debug("ResponseValidator._processCode: token response successful, processing id_token");
        return _this3._validateIdTokenAttributes(state, response);
      } else {
        _Log.Log.debug("ResponseValidator._processCode: token response successful, returning response");
      }

      return response;
    });
  };

  ResponseValidator.prototype._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
    var _this4 = this;

    return this._metadataService.getIssuer().then(function (issuer) {
      var audience = state.client_id;
      var clockSkewInSeconds = _this4._settings.clockSkew;
      _Log.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);

      return _this4._settings.getEpochTime().then(function (now) {
        return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds, now).then(function (payload) {
          if (state.nonce && state.nonce !== payload.nonce) {
            _Log.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
            return Promise.reject(new Error("Invalid nonce in id_token"));
          }

          if (!payload.sub) {
            _Log.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
            return Promise.reject(new Error("No sub present in id_token"));
          }

          response.profile = payload;
          return response;
        });
      });
    });
  };

  ResponseValidator.prototype._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
    var _this5 = this;

    return this._validateIdToken(state, response).then(function (response) {
      return _this5._validateAccessToken(response);
    });
  };

  ResponseValidator.prototype._getSigningKeyForJwt = function _getSigningKeyForJwt(jwt) {
    var _this6 = this;

    return this._metadataService.getSigningKeys().then(function (keys) {
      var kid = jwt.header.kid;
      if (!keys) {
        _Log.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata");
        return Promise.reject(new Error("No signing keys from metadata"));
      }

      _Log.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
      var key = void 0;
      if (!kid) {
        keys = _this6._filterByAlg(keys, jwt.header.alg);

        if (keys.length > 1) {
          _Log.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
          return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
        } else {
          // kid is mandatory only when there are multiple keys in the referenced JWK Set document
          // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
          key = keys[0];
        }
      } else {
        key = keys.filter(function (key) {
          return key.kid === kid;
        })[0];
      }
      return Promise.resolve(key);
    });
  };

  ResponseValidator.prototype._getSigningKeyForJwtWithSingleRetry = function _getSigningKeyForJwtWithSingleRetry(jwt) {
    var _this7 = this;

    return this._getSigningKeyForJwt(jwt).then(function (key) {
      // Refreshing signingKeys if no suitable verification key is present for given jwt header.
      if (!key) {
        // set to undefined, to trigger network call to jwks_uri.
        _this7._metadataService.resetSigningKeys();
        return _this7._getSigningKeyForJwt(jwt);
      } else {
        return Promise.resolve(key);
      }
    });
  };

  ResponseValidator.prototype._validateIdToken = function _validateIdToken(state, response) {
    var _this8 = this;

    if (!state.nonce) {
      _Log.Log.error("ResponseValidator._validateIdToken: No nonce on state");
      return Promise.reject(new Error("No nonce on state"));
    }

    var jwt = this._joseUtil.parseJwt(response.id_token);
    if (!jwt || !jwt.header || !jwt.payload) {
      _Log.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
      return Promise.reject(new Error("Failed to parse id_token"));
    }

    if (state.nonce !== jwt.payload.nonce) {
      _Log.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
      return Promise.reject(new Error("Invalid nonce in id_token"));
    }

    return this._metadataService.getIssuer().then(function (issuer) {
      _Log.Log.debug("ResponseValidator._validateIdToken: Received issuer");
      return _this8._getSigningKeyForJwtWithSingleRetry(jwt).then(function (key) {
        if (!key) {
          _Log.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
          return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
        }

        var audience = state.client_id;

        var clockSkewInSeconds = _this8._settings.clockSkew;
        _Log.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

        return _this8._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
          _Log.Log.debug("ResponseValidator._validateIdToken: JWT validation successful");

          if (!jwt.payload.sub) {
            _Log.Log.error("ResponseValidator._validateIdToken: No sub present in id_token");
            return Promise.reject(new Error("No sub present in id_token"));
          }

          response.profile = jwt.payload;

          return response;
        });
      });
    });
  };

  ResponseValidator.prototype._filterByAlg = function _filterByAlg(keys, alg) {
    var kty = null;
    if (alg.startsWith("RS")) {
      kty = "RSA";
    } else if (alg.startsWith("PS")) {
      kty = "PS";
    } else if (alg.startsWith("ES")) {
      kty = "EC";
    } else {
      _Log.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
      return [];
    }

    _Log.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);

    keys = keys.filter(function (key) {
      return key.kty === kty;
    });

    _Log.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);

    return keys;
  };

  ResponseValidator.prototype._validateAccessToken = function _validateAccessToken(response) {
    if (!response.profile) {
      _Log.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
      return Promise.reject(new Error("No profile loaded from id_token"));
    }

    if (!response.profile.at_hash) {
      _Log.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token");
      return Promise.reject(new Error("No at_hash in id_token"));
    }

    if (!response.id_token) {
      _Log.Log.error("ResponseValidator._validateAccessToken: No id_token");
      return Promise.reject(new Error("No id_token"));
    }

    var jwt = this._joseUtil.parseJwt(response.id_token);
    if (!jwt || !jwt.header) {
      _Log.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
      return Promise.reject(new Error("Failed to parse id_token"));
    }

    var hashAlg = jwt.header.alg;
    if (!hashAlg || hashAlg.length !== 5) {
      _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
      return Promise.reject(new Error("Unsupported alg: " + hashAlg));
    }

    var hashBits = hashAlg.substr(2, 3);
    if (!hashBits) {
      _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
      return Promise.reject(new Error("Unsupported alg: " + hashAlg));
    }

    hashBits = parseInt(hashBits);
    if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
      _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
      return Promise.reject(new Error("Unsupported alg: " + hashAlg));
    }

    var sha = "sha" + hashBits;
    var hash = this._joseUtil.hashString(response.access_token, sha);
    if (!hash) {
      _Log.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
      return Promise.reject(new Error("Failed to validate at_hash"));
    }

    var left = hash.substr(0, hash.length / 2);
    var left_b64u = this._joseUtil.hexToBase64Url(left);
    if (left_b64u !== response.profile.at_hash) {
      _Log.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
      return Promise.reject(new Error("Failed to validate at_hash"));
    }

    _Log.Log.debug("ResponseValidator._validateAccessToken: success");

    return Promise.resolve(response);
  };

  return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionMonitor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionMonitor = exports.SessionMonitor = function () {
  function SessionMonitor(userManager) {
    var _this = this;

    var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame.CheckSessionIFrame;
    var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global.timer;

    _classCallCheck(this, SessionMonitor);

    if (!userManager) {
      _Log.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
      throw new Error("userManager");
    }

    this._userManager = userManager;
    this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
    this._timer = timer;

    this._userManager.events.addUserLoaded(this._start.bind(this));
    this._userManager.events.addUserUnloaded(this._stop.bind(this));

    Promise.resolve(this._userManager.getUser().then(function (user) {
      // doing this manually here since calling getUser
      // doesn't trigger load event.
      if (user) {
        _this._start(user);
      } else if (_this._settings.monitorAnonymousSession) {
        _this._userManager.querySessionStatus().then(function (session) {
          var tmpUser = {
            session_state: session.session_state
          };
          if (session.sub && session.sid) {
            tmpUser.profile = {
              sub: session.sub,
              sid: session.sid
            };
          }
          _this._start(tmpUser);
        }).catch(function (err) {
          // catch to suppress errors since we're in a ctor
          _Log.Log.error("SessionMonitor ctor: error from querySessionStatus:", err.message);
        });
      }
    }).catch(function (err) {
      // catch to suppress errors since we're in a ctor
      _Log.Log.error("SessionMonitor ctor: error from getUser:", err.message);
    }));
  }

  SessionMonitor.prototype._start = function _start(user) {
    var _this2 = this;

    var session_state = user.session_state;

    if (session_state) {
      if (user.profile) {
        this._sub = user.profile.sub;
        this._sid = user.profile.sid;
        _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);
      } else {
        this._sub = undefined;
        this._sid = undefined;
        _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", anonymous user");
      }

      if (!this._checkSessionIFrame) {
        this._metadataService.getCheckSessionIframe().then(function (url) {
          if (url) {
            _Log.Log.debug("SessionMonitor._start: Initializing check session iframe");

            var client_id = _this2._client_id;
            var interval = _this2._checkSessionInterval;
            var stopOnError = _this2._stopCheckSessionOnError;

            _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);
            _this2._checkSessionIFrame.load().then(function () {
              _this2._checkSessionIFrame.start(session_state);
            });
          } else {
            _Log.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
          }
        }).catch(function (err) {
          // catch to suppress errors since we're in non-promise callback
          _Log.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
        });
      } else {
        this._checkSessionIFrame.start(session_state);
      }
    }
  };

  SessionMonitor.prototype._stop = function _stop() {
    var _this3 = this;

    this._sub = undefined;
    this._sid = undefined;

    if (this._checkSessionIFrame) {
      _Log.Log.debug("SessionMonitor._stop");
      this._checkSessionIFrame.stop();
    }

    if (this._settings.monitorAnonymousSession) {
      // using a timer to delay re-initialization to avoid race conditions during signout
      var timerHandle = this._timer.setInterval(function () {
        _this3._timer.clearInterval(timerHandle);

        _this3._userManager.querySessionStatus().then(function (session) {
          var tmpUser = {
            session_state: session.session_state
          };
          if (session.sub && session.sid) {
            tmpUser.profile = {
              sub: session.sub,
              sid: session.sid
            };
          }
          _this3._start(tmpUser);
        }).catch(function (err) {
          // catch to suppress errors since we're in a callback
          _Log.Log.error("SessionMonitor: error from querySessionStatus:", err.message);
        });
      }, 1000);
    }
  };

  SessionMonitor.prototype._callback = function _callback() {
    var _this4 = this;

    this._userManager.querySessionStatus().then(function (session) {
      var raiseEvent = true;

      if (session) {
        if (session.sub === _this4._sub) {
          raiseEvent = false;
          _this4._checkSessionIFrame.start(session.session_state);

          if (session.sid === _this4._sid) {
            _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
          } else {
            _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
            _this4._userManager.events._raiseUserSessionChanged();
          }
        } else {
          _Log.Log.debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
        }
      } else {
        _Log.Log.debug("SessionMonitor._callback: Subject no longer signed into OP");
      }

      if (raiseEvent) {
        if (_this4._sub) {
          _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");
          _this4._userManager.events._raiseUserSignedOut();
        } else {
          _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event");
          _this4._userManager.events._raiseUserSignedIn();
        }
      }
    }).catch(function (err) {
      if (_this4._sub) {
        _Log.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);
        _this4._userManager.events._raiseUserSignedOut();
      }
    });
  };

  _createClass(SessionMonitor, [{
    key: "_settings",
    get: function get() {
      return this._userManager.settings;
    }
  }, {
    key: "_metadataService",
    get: function get() {
      return this._userManager.metadataService;
    }
  }, {
    key: "_client_id",
    get: function get() {
      return this._settings.client_id;
    }
  }, {
    key: "_checkSessionInterval",
    get: function get() {
      return this._settings.checkSessionInterval;
    }
  }, {
    key: "_stopCheckSessionOnError",
    get: function get() {
      return this._settings.stopCheckSessionOnError;
    }
  }]);

  return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninRequest = exports.SigninRequest = function () {
  function SigninRequest(_ref) {
    var url = _ref.url,
        client_id = _ref.client_id,
        redirect_uri = _ref.redirect_uri,
        response_type = _ref.response_type,
        scope = _ref.scope,
        authority = _ref.authority,
        data = _ref.data,
        prompt = _ref.prompt,
        display = _ref.display,
        max_age = _ref.max_age,
        ui_locales = _ref.ui_locales,
        id_token_hint = _ref.id_token_hint,
        login_hint = _ref.login_hint,
        acr_values = _ref.acr_values,
        resource = _ref.resource,
        response_mode = _ref.response_mode,
        request = _ref.request,
        request_uri = _ref.request_uri,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type,
        client_secret = _ref.client_secret,
        extraTokenParams = _ref.extraTokenParams,
        skipUserInfo = _ref.skipUserInfo;

    _classCallCheck(this, SigninRequest);

    if (!url) {
      _Log.Log.error("SigninRequest.ctor: No url passed");
      throw new Error("url");
    }
    if (!client_id) {
      _Log.Log.error("SigninRequest.ctor: No client_id passed");
      throw new Error("client_id");
    }
    if (!redirect_uri) {
      _Log.Log.error("SigninRequest.ctor: No redirect_uri passed");
      throw new Error("redirect_uri");
    }
    if (!response_type) {
      _Log.Log.error("SigninRequest.ctor: No response_type passed");
      throw new Error("response_type");
    }
    if (!scope) {
      _Log.Log.error("SigninRequest.ctor: No scope passed");
      throw new Error("scope");
    }
    if (!authority) {
      _Log.Log.error("SigninRequest.ctor: No authority passed");
      throw new Error("authority");
    }

    var oidc = SigninRequest.isOidc(response_type);
    var code = SigninRequest.isCode(response_type);

    if (!response_mode) {
      response_mode = SigninRequest.isCode(response_type) ? "query" : null;
    }

    this.state = new _SigninState.SigninState({
      nonce: oidc,
      data: data,
      client_id: client_id,
      authority: authority,
      redirect_uri: redirect_uri,
      code_verifier: code,
      request_type: request_type,
      response_mode: response_mode,
      client_secret: client_secret,
      scope: scope,
      extraTokenParams: extraTokenParams,
      skipUserInfo: skipUserInfo
    });

    url = _UrlUtility.UrlUtility.addQueryParam(url, "client_id", client_id);
    url = _UrlUtility.UrlUtility.addQueryParam(url, "redirect_uri", redirect_uri);
    url = _UrlUtility.UrlUtility.addQueryParam(url, "response_type", response_type);
    url = _UrlUtility.UrlUtility.addQueryParam(url, "scope", scope);

    url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
    if (oidc) {
      url = _UrlUtility.UrlUtility.addQueryParam(url, "nonce", this.state.nonce);
    }
    if (code) {
      url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge", this.state.code_challenge);
      url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge_method", "S256");
    }

    var optional = {
      prompt: prompt,
      display: display,
      max_age: max_age,
      ui_locales: ui_locales,
      id_token_hint: id_token_hint,
      login_hint: login_hint,
      acr_values: acr_values,
      resource: resource,
      request: request,
      request_uri: request_uri,
      response_mode: response_mode
    };
    for (var key in optional) {
      if (optional[key]) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, key, optional[key]);
      }
    }

    for (var _key in extraQueryParams) {
      url = _UrlUtility.UrlUtility.addQueryParam(url, _key, extraQueryParams[_key]);
    }

    this.url = url;
  }

  SigninRequest.isOidc = function isOidc(response_type) {
    var result = response_type.split(/\s+/g).filter(function (item) {
      return item === "id_token";
    });
    return !!result[0];
  };

  SigninRequest.isOAuth = function isOAuth(response_type) {
    var result = response_type.split(/\s+/g).filter(function (item) {
      return item === "token";
    });
    return !!result[0];
  };

  SigninRequest.isCode = function isCode(response_type) {
    var result = response_type.split(/\s+/g).filter(function (item) {
      return item === "code";
    });
    return !!result[0];
  };

  return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcScope = "openid";

var SigninResponse = exports.SigninResponse = function () {
  function SigninResponse(url) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

    _classCallCheck(this, SigninResponse);

    var values = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

    this.error = values.error;
    this.error_description = values.error_description;
    this.error_uri = values.error_uri;

    this.code = values.code;
    this.state = values.state;
    this.id_token = values.id_token;
    this.session_state = values.session_state;
    this.access_token = values.access_token;
    this.token_type = values.token_type;
    this.scope = values.scope;
    this.profile = undefined; // will be set from ResponseValidator

    this.expires_in = values.expires_in;
  }

  _createClass(SigninResponse, [{
    key: "expires_in",
    get: function get() {
      if (this.expires_at) {
        var now = parseInt(Date.now() / 1000);
        return this.expires_at - now;
      }
      return undefined;
    },
    set: function set(value) {
      var expires_in = parseInt(value);
      if (typeof expires_in === "number" && expires_in > 0) {
        var now = parseInt(Date.now() / 1000);
        this.expires_at = now + expires_in;
      }
    }
  }, {
    key: "expired",
    get: function get() {
      var expires_in = this.expires_in;
      if (expires_in !== undefined) {
        return expires_in <= 0;
      }
      return undefined;
    }
  }, {
    key: "scopes",
    get: function get() {
      return (this.scope || "").split(" ");
    }
  }, {
    key: "isOpenIdConnect",
    get: function get() {
      return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
    }
  }]);

  return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _State2 = __webpack_require__(/*! ./State.js */ "./src/State.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninState = exports.SigninState = function (_State) {
  _inherits(SigninState, _State);

  function SigninState() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        nonce = _ref.nonce,
        authority = _ref.authority,
        client_id = _ref.client_id,
        redirect_uri = _ref.redirect_uri,
        code_verifier = _ref.code_verifier,
        response_mode = _ref.response_mode,
        client_secret = _ref.client_secret,
        scope = _ref.scope,
        extraTokenParams = _ref.extraTokenParams,
        skipUserInfo = _ref.skipUserInfo;

    _classCallCheck(this, SigninState);

    var _this = _possibleConstructorReturn(this, _State.call(this, arguments[0]));

    if (nonce === true) {
      _this._nonce = (0, _random2.default)();
    } else if (nonce) {
      _this._nonce = nonce;
    }

    if (code_verifier === true) {
      // random() produces 32 length
      _this._code_verifier = (0, _random2.default)() + (0, _random2.default)() + (0, _random2.default)();
    } else if (code_verifier) {
      _this._code_verifier = code_verifier;
    }

    if (_this.code_verifier) {
      var hash = _JoseUtil.JoseUtil.hashString(_this.code_verifier, "SHA256");
      _this._code_challenge = _JoseUtil.JoseUtil.hexToBase64Url(hash);
    }

    _this._redirect_uri = redirect_uri;
    _this._authority = authority;
    _this._client_id = client_id;
    _this._response_mode = response_mode;
    _this._client_secret = client_secret;
    _this._scope = scope;
    _this._extraTokenParams = extraTokenParams;
    _this._skipUserInfo = skipUserInfo;
    return _this;
  }

  SigninState.prototype.toStorageString = function toStorageString() {
    _Log.Log.debug("SigninState.toStorageString");
    return JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      nonce: this.nonce,
      code_verifier: this.code_verifier,
      redirect_uri: this.redirect_uri,
      authority: this.authority,
      client_id: this.client_id,
      response_mode: this.response_mode,
      client_secret: this.client_secret,
      scope: this.scope,
      extraTokenParams: this.extraTokenParams,
      skipUserInfo: this.skipUserInfo
    });
  };

  SigninState.fromStorageString = function fromStorageString(storageString) {
    _Log.Log.debug("SigninState.fromStorageString");
    var data = JSON.parse(storageString);
    return new SigninState(data);
  };

  _createClass(SigninState, [{
    key: "nonce",
    get: function get() {
      return this._nonce;
    }
  }, {
    key: "authority",
    get: function get() {
      return this._authority;
    }
  }, {
    key: "client_id",
    get: function get() {
      return this._client_id;
    }
  }, {
    key: "redirect_uri",
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: "code_verifier",
    get: function get() {
      return this._code_verifier;
    }
  }, {
    key: "code_challenge",
    get: function get() {
      return this._code_challenge;
    }
  }, {
    key: "response_mode",
    get: function get() {
      return this._response_mode;
    }
  }, {
    key: "client_secret",
    get: function get() {
      return this._client_secret;
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    }
  }, {
    key: "extraTokenParams",
    get: function get() {
      return this._extraTokenParams;
    }
  }, {
    key: "skipUserInfo",
    get: function get() {
      return this._skipUserInfo;
    }
  }]);

  return SigninState;
}(_State2.State);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignoutRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutRequest = exports.SignoutRequest = function SignoutRequest(_ref) {
  var url = _ref.url,
      id_token_hint = _ref.id_token_hint,
      post_logout_redirect_uri = _ref.post_logout_redirect_uri,
      data = _ref.data,
      extraQueryParams = _ref.extraQueryParams,
      request_type = _ref.request_type;

  _classCallCheck(this, SignoutRequest);

  if (!url) {
    _Log.Log.error("SignoutRequest.ctor: No url passed");
    throw new Error("url");
  }

  if (id_token_hint) {
    url = _UrlUtility.UrlUtility.addQueryParam(url, "id_token_hint", id_token_hint);
  }

  if (post_logout_redirect_uri) {
    url = _UrlUtility.UrlUtility.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

    if (data) {
      this.state = new _State.State({ data: data, request_type: request_type });

      url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
    }
  }

  for (var key in extraQueryParams) {
    url = _UrlUtility.UrlUtility.addQueryParam(url, key, extraQueryParams[key]);
  }

  this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignoutResponse = undefined;

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = exports.SignoutResponse = function SignoutResponse(url) {
  _classCallCheck(this, SignoutResponse);

  var values = _UrlUtility.UrlUtility.parseUrlFragment(url, "?");

  this.error = values.error;
  this.error_description = values.error_description;
  this.error_uri = values.error_uri;

  this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SilentRenewService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = exports.SilentRenewService = function () {
  function SilentRenewService(userManager) {
    _classCallCheck(this, SilentRenewService);

    this._userManager = userManager;
  }

  SilentRenewService.prototype.start = function start() {
    if (!this._callback) {
      this._callback = this._tokenExpiring.bind(this);
      this._userManager.events.addAccessTokenExpiring(this._callback);

      // this will trigger loading of the user so the expiring events can be initialized
      this._userManager.getUser().then(function (user) {
        // deliberate nop
      }).catch(function (err) {
        // catch to suppress errors since we're in a ctor
        _Log.Log.error("SilentRenewService.start: Error from getUser:", err.message);
      });
    }
  };

  SilentRenewService.prototype.stop = function stop() {
    if (this._callback) {
      this._userManager.events.removeAccessTokenExpiring(this._callback);
      delete this._callback;
    }
  };

  SilentRenewService.prototype._tokenExpiring = function _tokenExpiring() {
    var _this = this;

    this._userManager.signinSilent().then(function (user) {
      _Log.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
    }, function (err) {
      _Log.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);
      _this._userManager.events._raiseSilentRenewError(err);
    });
  };

  return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = exports.State = function () {
  function State() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        data = _ref.data,
        created = _ref.created,
        request_type = _ref.request_type;

    _classCallCheck(this, State);

    this._id = id || (0, _random2.default)();
    this._data = data;

    if (typeof created === "number" && created > 0) {
      this._created = created;
    } else {
      this._created = parseInt(Date.now() / 1000);
    }
    this._request_type = request_type;
  }

  State.prototype.toStorageString = function toStorageString() {
    _Log.Log.debug("State.toStorageString");
    return JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type
    });
  };

  State.fromStorageString = function fromStorageString(storageString) {
    _Log.Log.debug("State.fromStorageString");
    return new State(JSON.parse(storageString));
  };

  State.clearStaleState = function clearStaleState(storage, age) {
    var cutoff = Date.now() / 1000 - age;

    return storage.getAllKeys().then(function (keys) {
      _Log.Log.debug("State.clearStaleState: got keys", keys);

      var promises = [];

      var _loop = function _loop(i) {
        var key = keys[i];
        p = storage.get(key).then(function (item) {
          var remove = false;

          if (item) {
            try {
              var state = State.fromStorageString(item);

              _Log.Log.debug("State.clearStaleState: got item from key: ", key, state.created);

              if (state.created <= cutoff) {
                remove = true;
              }
            } catch (e) {
              _Log.Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
              remove = true;
            }
          } else {
            _Log.Log.debug("State.clearStaleState: no item in storage for key: ", key);
            remove = true;
          }

          if (remove) {
            _Log.Log.debug("State.clearStaleState: removed item for key: ", key);
            return storage.remove(key);
          }
        });


        promises.push(p);
      };

      for (var i = 0; i < keys.length; i++) {
        var p;

        _loop(i);
      }

      _Log.Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
      return Promise.all(promises);
    });
  };

  _createClass(State, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
  }, {
    key: "created",
    get: function get() {
      return this._created;
    }
  }, {
    key: "request_type",
    get: function get() {
      return this._request_type;
    }
  }]);

  return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _Event2 = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TimerDuration = 5; // seconds

var Timer = exports.Timer = function (_Event) {
  _inherits(Timer, _Event);

  function Timer(name) {
    var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.timer;
    var nowFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, _Event.call(this, name));

    _this._timer = timer;

    if (nowFunc) {
      _this._nowFunc = nowFunc;
    } else {
      _this._nowFunc = function () {
        return Date.now() / 1000;
      };
    }
    return _this;
  }

  Timer.prototype.init = function init(duration) {
    if (duration <= 0) {
      duration = 1;
    }
    duration = parseInt(duration);

    var expiration = this.now + duration;
    if (this.expiration === expiration && this._timerHandle) {
      // no need to reinitialize to same expiration, so bail out
      _Log.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
      return;
    }

    this.cancel();

    _Log.Log.debug("Timer.init timer " + this._name + " for duration:", duration);
    this._expiration = expiration;

    // we're using a fairly short timer and then checking the expiration in the
    // callback to handle scenarios where the browser device sleeps, and then
    // the timers end up getting delayed.
    var timerDuration = TimerDuration;
    if (duration < timerDuration) {
      timerDuration = duration;
    }
    this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
  };

  Timer.prototype.cancel = function cancel() {
    if (this._timerHandle) {
      _Log.Log.debug("Timer.cancel: ", this._name);
      this._timer.clearInterval(this._timerHandle);
      this._timerHandle = null;
    }
  };

  Timer.prototype._callback = function _callback() {
    var diff = this._expiration - this.now;
    _Log.Log.debug("Timer.callback; " + this._name + " timer expires in:", diff);

    if (this._expiration <= this.now) {
      this.cancel();
      _Event.prototype.raise.call(this);
    }
  };

  _createClass(Timer, [{
    key: "now",
    get: function get() {
      return parseInt(this._nowFunc());
    }
  }, {
    key: "expiration",
    get: function get() {
      return this._expiration;
    }
  }]);

  return Timer;
}(_Event2.Event);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenClient = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TokenClient = exports.TokenClient = function () {
  function TokenClient(settings) {
    var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
    var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

    _classCallCheck(this, TokenClient);

    if (!settings) {
      _Log.Log.error("TokenClient.ctor: No settings passed");
      throw new Error("settings");
    }

    this._settings = settings;
    this._jsonService = new JsonServiceCtor();
    this._metadataService = new MetadataServiceCtor(this._settings);
  }

  TokenClient.prototype.exchangeCode = function exchangeCode() {
    var _this = this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.grant_type = args.grant_type || "authorization_code";
    args.client_id = args.client_id || this._settings.client_id;
    args.client_secret = args.client_secret || this._settings.client_secret;
    args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

    var basicAuth = undefined;
    var client_authentication = args._client_authentication || this._settings._client_authentication;
    delete args._client_authentication;

    if (!args.code) {
      _Log.Log.error("TokenClient.exchangeCode: No code passed");
      return Promise.reject(new Error("A code is required"));
    }
    if (!args.redirect_uri) {
      _Log.Log.error("TokenClient.exchangeCode: No redirect_uri passed");
      return Promise.reject(new Error("A redirect_uri is required"));
    }
    if (!args.code_verifier) {
      _Log.Log.error("TokenClient.exchangeCode: No code_verifier passed");
      return Promise.reject(new Error("A code_verifier is required"));
    }
    if (!args.client_id) {
      _Log.Log.error("TokenClient.exchangeCode: No client_id passed");
      return Promise.reject(new Error("A client_id is required"));
    }
    if (!args.client_secret && client_authentication == "client_secret_basic") {
      _Log.Log.error("TokenClient.exchangeCode: No client_secret passed");
      return Promise.reject(new Error("A client_secret is required"));
    }

    // Sending the client credentials using the Basic Auth method
    if (client_authentication == "client_secret_basic") {
      basicAuth = args.client_id + ":" + args.client_secret;
      delete args.client_id;
      delete args.client_secret;
    }

    return this._metadataService.getTokenEndpoint(false).then(function (url) {
      _Log.Log.debug("TokenClient.exchangeCode: Received token endpoint");
      return _this._jsonService.postForm(url, args, basicAuth).then(function (response) {
        _Log.Log.debug("TokenClient.exchangeCode: response received");
        return response;
      });
    });
  };

  TokenClient.prototype.exchangeRefreshToken = function exchangeRefreshToken() {
    var _this2 = this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.grant_type = args.grant_type || "refresh_token";
    args.client_id = args.client_id || this._settings.client_id;
    args.client_secret = args.client_secret || this._settings.client_secret;

    var basicAuth = undefined;
    var client_authentication = args._client_authentication || this._settings._client_authentication;
    delete args._client_authentication;

    if (!args.refresh_token) {
      _Log.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed");
      return Promise.reject(new Error("A refresh_token is required"));
    }
    if (!args.client_id) {
      _Log.Log.error("TokenClient.exchangeRefreshToken: No client_id passed");
      return Promise.reject(new Error("A client_id is required"));
    }

    // Sending the client credentials using the Basic Auth method
    if (client_authentication == "client_secret_basic") {
      basicAuth = args.client_id + ":" + args.client_secret;
      delete args.client_id;
      delete args.client_secret;
    }

    return this._metadataService.getTokenEndpoint(false).then(function (url) {
      _Log.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint");

      return _this2._jsonService.postForm(url, args, basicAuth).then(function (response) {
        _Log.Log.debug("TokenClient.exchangeRefreshToken: response received");
        return response;
      });
    });
  };

  return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenRevocationClient = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";

var TokenRevocationClient = exports.TokenRevocationClient = function () {
  function TokenRevocationClient(settings) {
    var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
    var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

    _classCallCheck(this, TokenRevocationClient);

    if (!settings) {
      _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
      throw new Error("No settings provided.");
    }

    this._settings = settings;
    this._XMLHttpRequestCtor = XMLHttpRequestCtor;
    this._metadataService = new MetadataServiceCtor(this._settings);
  }

  TokenRevocationClient.prototype.revoke = function revoke(token, required) {
    var _this = this;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "access_token";

    if (!token) {
      _Log.Log.error("TokenRevocationClient.revoke: No token provided");
      throw new Error("No token provided.");
    }

    if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
      _Log.Log.error("TokenRevocationClient.revoke: Invalid token type");
      throw new Error("Invalid token type.");
    }

    return this._metadataService.getRevocationEndpoint().then(function (url) {
      if (!url) {
        if (required) {
          _Log.Log.error("TokenRevocationClient.revoke: Revocation not supported");
          throw new Error("Revocation not supported");
        }

        // not required, so don't error and just return
        return;
      }

      _Log.Log.debug("TokenRevocationClient.revoke: Revoking " + type);
      var client_id = _this._settings.client_id;
      var client_secret = _this._settings.client_secret;
      return _this._revoke(url, client_id, client_secret, token, type);
    });
  };

  TokenRevocationClient.prototype._revoke = async function _revoke(url, client_id, client_secret, token, type) {
    var options = { method: "POST", headers: {}, body: "" };
    options.headers["Content-Type"] = "application/x-www-form-urlencoded";
    var body = new URLSearchParams();
    body.append("client_id", client_id);
    if (client_secret) {
      body.append("client_secret", client_secret);
    }
    body.append("token_type_hint", type);
    body.append("token", token);
    options.body = body.toString();

    try {
      var rc = await fetch(url, options);
      _Log.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", rc.status);
      if (rc.ok && rc.status == 200) {
        return;
      } else {
        throw new Error(rc.statusText + " (" + rc.status + ")");
      }
    } catch (ex) {
      throw new Error("TokenRevocationClient.revoke: Network Error.", ex.message);
    }
  };

  return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlUtility = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UrlUtility = exports.UrlUtility = function () {
  function UrlUtility() {
    _classCallCheck(this, UrlUtility);
  }

  UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
    if (url.indexOf("?") < 0) {
      url += "?";
    }

    if (url[url.length - 1] !== "?") {
      url += "&";
    }

    url += encodeURIComponent(name);
    url += "=";
    url += encodeURIComponent(value);

    return url;
  };

  UrlUtility.parseUrlFragment = function parseUrlFragment(value) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
    var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global;

    if (typeof value !== "string") {
      value = global.location.href;
    }

    var idx = value.lastIndexOf(delimiter);
    if (idx >= 0) {
      value = value.substr(idx + 1);
    }

    if (delimiter === "?") {
      // if we're doing query, then strip off hash fragment before we parse
      idx = value.indexOf("#");
      if (idx >= 0) {
        value = value.substr(0, idx);
      }
    }

    var params = {},
        regex = /([^&=]+)=([^&]*)/g,
        m;

    var counter = 0;
    while (m = regex.exec(value)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2].replace(/\+/g, " "));
      if (counter++ > 50) {
        _Log.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
        return {
          error: "Response exceeded expected number of parameters"
        };
      }
    }

    for (var prop in params) {
      return params;
    }

    return {};
  };

  return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
  function User(_ref) {
    var id_token = _ref.id_token,
        session_state = _ref.session_state,
        access_token = _ref.access_token,
        refresh_token = _ref.refresh_token,
        token_type = _ref.token_type,
        scope = _ref.scope,
        profile = _ref.profile,
        expires_at = _ref.expires_at,
        state = _ref.state;

    _classCallCheck(this, User);

    this.id_token = id_token;
    this.session_state = session_state;
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.token_type = token_type;
    this.scope = scope;
    this.profile = profile;
    this.expires_at = expires_at;
    this.state = state;
  }

  User.prototype.toStorageString = function toStorageString() {
    _Log.Log.debug("User.toStorageString");
    return JSON.stringify({
      id_token: this.id_token,
      session_state: this.session_state,
      access_token: this.access_token,
      refresh_token: this.refresh_token,
      token_type: this.token_type,
      scope: this.scope,
      profile: this.profile,
      expires_at: this.expires_at
    });
  };

  User.fromStorageString = function fromStorageString(storageString) {
    _Log.Log.debug("User.fromStorageString");
    return new User(JSON.parse(storageString));
  };

  _createClass(User, [{
    key: "expires_in",
    get: function get() {
      if (this.expires_at) {
        var now = parseInt(Date.now() / 1000);
        return this.expires_at - now;
      }
      return undefined;
    },
    set: function set(value) {
      var expires_in = parseInt(value);
      if (typeof expires_in === "number" && expires_in > 0) {
        var now = parseInt(Date.now() / 1000);
        this.expires_at = now + expires_in;
      }
    }
  }, {
    key: "expired",
    get: function get() {
      var expires_in = this.expires_in;
      if (expires_in !== undefined) {
        return expires_in <= 0;
      }
      return undefined;
    }
  }, {
    key: "scopes",
    get: function get() {
      return (this.scope || "").split(" ");
    }
  }]);

  return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoService = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserInfoService = exports.UserInfoService = function () {
  function UserInfoService(settings) {
    var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
    var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;
    var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;

    _classCallCheck(this, UserInfoService);

    if (!settings) {
      _Log.Log.error("UserInfoService.ctor: No settings passed");
      throw new Error("settings");
    }

    this._settings = settings;
    this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
    this._metadataService = new MetadataServiceCtor(this._settings);
    this._joseUtil = joseUtil;
  }

  UserInfoService.prototype.getClaims = function getClaims(token) {
    var _this = this;

    if (!token) {
      _Log.Log.error("UserInfoService.getClaims: No token passed");
      return Promise.reject(new Error("A token is required"));
    }

    return this._metadataService.getUserInfoEndpoint().then(function (url) {
      _Log.Log.debug("UserInfoService.getClaims: received userinfo url", url);

      return _this._jsonService.getJson(url, token).then(function (claims) {
        _Log.Log.debug("UserInfoService.getClaims: claims received", claims);
        return claims;
      });
    });
  };

  UserInfoService.prototype._getClaimsFromJwt = function _getClaimsFromJwt(req) {
    var _this2 = this;

    try {
      var jwt = this._joseUtil.parseJwt(req.responseText);
      if (!jwt || !jwt.header || !jwt.payload) {
        _Log.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
        return Promise.reject(new Error("Failed to parse id_token"));
      }

      var kid = jwt.header.kid;

      var issuerPromise = void 0;
      switch (this._settings.userInfoJwtIssuer) {
        case "OP":
          issuerPromise = this._metadataService.getIssuer();
          break;
        case "ANY":
          issuerPromise = Promise.resolve(jwt.payload.iss);
          break;
        default:
          issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
          break;
      }

      return issuerPromise.then(function (issuer) {
        _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);

        return _this2._metadataService.getSigningKeys().then(function (keys) {
          if (!keys) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
            return Promise.reject(new Error("No signing keys from metadata"));
          }

          _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
          var key = void 0;
          if (!kid) {
            keys = _this2._filterByAlg(keys, jwt.header.alg);

            if (keys.length > 1) {
              _Log.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
              return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
            } else {
              // kid is mandatory only when there are multiple keys in the referenced JWK Set document
              // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
              key = keys[0];
            }
          } else {
            key = keys.filter(function (key) {
              return key.kid === kid;
            })[0];
          }

          if (!key) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
            return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
          }

          var audience = _this2._settings.client_id;

          var clockSkewInSeconds = _this2._settings.clockSkew;
          _Log.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

          return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
            _Log.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
            return jwt.payload;
          });
        });
      });
      return;
    } catch (e) {
      _Log.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
      reject(e);
      return;
    }
  };

  UserInfoService.prototype._filterByAlg = function _filterByAlg(keys, alg) {
    var kty = null;
    if (alg.startsWith("RS")) {
      kty = "RSA";
    } else if (alg.startsWith("PS")) {
      kty = "PS";
    } else if (alg.startsWith("ES")) {
      kty = "EC";
    } else {
      _Log.Log.debug("UserInfoService._filterByAlg: alg not supported: ", alg);
      return [];
    }

    _Log.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);

    keys = keys.filter(function (key) {
      return key.kty === kty;
    });

    _Log.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);

    return keys;
  };

  return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClient2 = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");

var _UserManagerSettings = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/User.js");

var _UserManagerEvents = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");

var _SilentRenewService = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");

var _SessionMonitor = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest */ "./src/SigninRequest.js");

var _TokenRevocationClient = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManager = exports.UserManager = function (_OidcClient) {
  _inherits(UserManager, _OidcClient);

  function UserManager() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService.SilentRenewService;
    var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor.SessionMonitor;
    var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient.TokenRevocationClient;
    var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;
    var joseUtil = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _JoseUtil.JoseUtil;

    _classCallCheck(this, UserManager);

    if (!(settings instanceof _UserManagerSettings.UserManagerSettings)) {
      settings = new _UserManagerSettings.UserManagerSettings(settings);
    }

    var _this = _possibleConstructorReturn(this, _OidcClient.call(this, settings));

    _this._events = new _UserManagerEvents.UserManagerEvents(settings);
    _this._silentRenewService = new SilentRenewServiceCtor(_this);

    // order is important for the following properties; these services depend upon the events.
    if (_this.settings.automaticSilentRenew) {
      _Log.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");
      _this.startSilentRenew();
    }

    if (_this.settings.monitorSession) {
      _Log.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
      _this._sessionMonitor = new SessionMonitorCtor(_this);
    }

    _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
    _this._tokenClient = new TokenClientCtor(_this._settings);
    _this._joseUtil = joseUtil;
    return _this;
  }

  UserManager.prototype.getUser = function getUser() {
    var _this2 = this;

    return this._loadUser().then(function (user) {
      if (user) {
        _Log.Log.info("UserManager.getUser: user loaded");

        _this2._events.load(user, false);

        return user;
      } else {
        _Log.Log.info("UserManager.getUser: user not found in storage");
        return null;
      }
    });
  };

  UserManager.prototype.removeUser = function removeUser() {
    var _this3 = this;

    return this.storeUser(null).then(function () {
      _Log.Log.info("UserManager.removeUser: user removed from storage");
      _this3._events.unload();
    });
  };

  UserManager.prototype.signinRedirect = function signinRedirect() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.request_type = "si:r";
    var navParams = {
      useReplaceToNavigate: args.useReplaceToNavigate
    };
    return this._signinStart(args, this._redirectNavigator, navParams).then(function () {
      _Log.Log.info("UserManager.signinRedirect: successful");
    });
  };

  UserManager.prototype.signinRedirectCallback = function signinRedirectCallback(url) {
    return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
      if (user.profile && user.profile.sub) {
        _Log.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
      } else {
        _Log.Log.info("UserManager.signinRedirectCallback: no sub");
      }

      return user;
    });
  };

  UserManager.prototype.signinPopup = function signinPopup() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.request_type = "si:p";
    var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
    if (!url) {
      _Log.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
      return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
    }

    args.redirect_uri = url;
    args.display = "popup";

    return this._signin(args, this._popupNavigator, {
      startUrl: url,
      popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
      popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
    }).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
        } else {
          _Log.Log.info("UserManager.signinPopup: no sub");
        }
      }

      return user;
    });
  };

  UserManager.prototype.signinPopupCallback = function signinPopupCallback(url) {
    return this._signinCallback(url, this._popupNavigator).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
        } else {
          _Log.Log.info("UserManager.signinPopupCallback: no sub");
        }
      }

      return user;
    }).catch(function (err) {
      _Log.Log.error( true && err.message);
    });
  };

  UserManager.prototype.signinSilent = function signinSilent() {
    var _this4 = this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    // first determine if we have a refresh token, or need to use iframe
    return this._loadUser().then(function (user) {
      if (user && user.refresh_token) {
        args.refresh_token = user.refresh_token;
        return _this4._useRefreshToken(args);
      } else {
        args.request_type = "si:s";
        args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;
        if (user && _this4._settings.validateSubOnSilentRenew) {
          _Log.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", user.profile.sub);
          args.current_sub = user.profile.sub;
        }
        return _this4._signinSilentIframe(args);
      }
    });
  };

  UserManager.prototype._useRefreshToken = function _useRefreshToken() {
    var _this5 = this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
      if (!result) {
        _Log.Log.error("UserManager._useRefreshToken: No response returned from token endpoint");
        return Promise.reject("No response returned from token endpoint");
      }
      if (!result.access_token) {
        _Log.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint");
        return Promise.reject("No access token returned from token endpoint");
      }

      return _this5._loadUser().then(function (user) {
        if (user) {
          var idTokenValidation = Promise.resolve();
          if (result.id_token) {
            idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
          }

          return idTokenValidation.then(function () {
            _Log.Log.debug("UserManager._useRefreshToken: refresh token response success");
            user.id_token = result.id_token || user.id_token;
            user.access_token = result.access_token;
            user.refresh_token = result.refresh_token || user.refresh_token;
            user.expires_in = result.expires_in;

            return _this5.storeUser(user).then(function () {
              _this5._events.load(user);
              return user;
            });
          });
        } else {
          return null;
        }
      });
    });
  };

  UserManager.prototype._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
    var _this6 = this;

    return this._metadataService.getIssuer().then(function (issuer) {
      return _this6.settings.getEpochTime().then(function (now) {
        return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew, now).then(function (payload) {
          if (!payload) {
            _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
            return Promise.reject(new Error("Failed to validate id_token"));
          }
          if (payload.sub !== profile.sub) {
            _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
            return Promise.reject(new Error("sub in id_token does not match current sub"));
          }
          if (payload.auth_time && payload.auth_time !== profile.auth_time) {
            _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
            return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
          }
          if (payload.azp && payload.azp !== profile.azp) {
            _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
            return Promise.reject(new Error("azp in id_token does not match original azp"));
          }
          if (!payload.azp && profile.azp) {
            _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
            return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
          }
        });
      });
    });
  };

  UserManager.prototype._signinSilentIframe = function _signinSilentIframe() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
    if (!url) {
      _Log.Log.error("UserManager.signinSilent: No silent_redirect_uri configured");
      return Promise.reject(new Error("No silent_redirect_uri configured"));
    }

    args.redirect_uri = url;
    args.prompt = args.prompt || "none";

    return this._signin(args, this._iframeNavigator, {
      startUrl: url,
      silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
    }).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log.Log.info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
        } else {
          _Log.Log.info("UserManager.signinSilent: no sub");
        }
      }

      return user;
    });
  };

  UserManager.prototype.signinSilentCallback = function signinSilentCallback(url) {
    return this._signinCallback(url, this._iframeNavigator).then(function (user) {
      if (user) {
        if (user.profile && user.profile.sub) {
          _Log.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
        } else {
          _Log.Log.info("UserManager.signinSilentCallback: no sub");
        }
      }

      return user;
    });
  };

  UserManager.prototype.signinCallback = function signinCallback(url) {
    var _this7 = this;

    return this.readSigninResponseState(url).then(function (_ref) {
      var state = _ref.state,
          response = _ref.response;

      if (state.request_type === "si:r") {
        return _this7.signinRedirectCallback(url);
      }
      if (state.request_type === "si:p") {
        return _this7.signinPopupCallback(url);
      }
      if (state.request_type === "si:s") {
        return _this7.signinSilentCallback(url);
      }
      return Promise.reject(new Error("invalid response_type in state"));
    });
  };

  UserManager.prototype.signoutCallback = function signoutCallback(url, keepOpen) {
    var _this8 = this;

    return this.readSignoutResponseState(url).then(function (_ref2) {
      var state = _ref2.state,
          response = _ref2.response;

      if (state) {
        if (state.request_type === "so:r") {
          return _this8.signoutRedirectCallback(url);
        }
        if (state.request_type === "so:p") {
          return _this8.signoutPopupCallback(url, keepOpen);
        }
        return Promise.reject(new Error("invalid response_type in state"));
      }
      return response;
    });
  };

  UserManager.prototype.querySessionStatus = function querySessionStatus() {
    var _this9 = this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.request_type = "si:s"; // this acts like a signin silent
    var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
    if (!url) {
      _Log.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured");
      return Promise.reject(new Error("No silent_redirect_uri configured"));
    }

    args.redirect_uri = url;
    args.prompt = "none";
    args.response_type = args.response_type || this.settings.query_status_response_type;
    args.scope = args.scope || "openid";
    args.skipUserInfo = true;

    return this._signinStart(args, this._iframeNavigator, {
      startUrl: url,
      silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
    }).then(function (navResponse) {
      return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
        _Log.Log.debug("UserManager.querySessionStatus: got signin response");

        if (signinResponse.session_state && signinResponse.profile.sub) {
          _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
          return {
            session_state: signinResponse.session_state,
            sub: signinResponse.profile.sub,
            sid: signinResponse.profile.sid
          };
        } else {
          _Log.Log.info("querySessionStatus successful, user not authenticated");
        }
      }).catch(function (err) {
        if (err.session_state && _this9.settings.monitorAnonymousSession) {
          if (err.message == "login_required" || err.message == "consent_required" || err.message == "interaction_required" || err.message == "account_selection_required") {
            _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user");
            return {
              session_state: err.session_state
            };
          }
        }

        throw err;
      });
    });
  };

  UserManager.prototype._signin = function _signin(args, navigator) {
    var _this10 = this;

    var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
      return _this10._signinEnd(navResponse.url, args);
    });
  };

  UserManager.prototype._signinStart = function _signinStart(args, navigator) {
    var _this11 = this;

    var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return navigator.prepare(navigatorParams).then(function (handle) {
      _Log.Log.debug("UserManager._signinStart: got navigator window handle");

      return _this11.createSigninRequest(args).then(function (signinRequest) {
        _Log.Log.debug("UserManager._signinStart: got signin request");

        navigatorParams.url = signinRequest.url;
        navigatorParams.id = signinRequest.state.id;

        return handle.navigate(navigatorParams);
      }).catch(function (err) {
        if (handle.close) {
          _Log.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
          handle.close();
        }
        throw err;
      });
    });
  };

  UserManager.prototype._signinEnd = function _signinEnd(url) {
    var _this12 = this;

    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.processSigninResponse(url).then(function (signinResponse) {
      _Log.Log.debug("UserManager._signinEnd: got signin response");

      var user = new _User.User(signinResponse);

      if (args.current_sub) {
        if (args.current_sub !== user.profile.sub) {
          _Log.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
          return Promise.reject(new Error("login_required"));
        } else {
          _Log.Log.debug("UserManager._signinEnd: current user matches user returned from signin");
        }
      }

      return _this12.storeUser(user).then(function () {
        _Log.Log.debug("UserManager._signinEnd: user stored");

        _this12._events.load(user);

        return user;
      });
    });
  };

  UserManager.prototype._signinCallback = function _signinCallback(url, navigator) {
    _Log.Log.debug("UserManager._signinCallback");
    var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
    var delimiter = useQuery ? "?" : "#";
    return navigator.callback(url, undefined, delimiter);
  };

  UserManager.prototype.signoutRedirect = function signoutRedirect() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.request_type = "so:r";
    var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
    if (postLogoutRedirectUri) {
      args.post_logout_redirect_uri = postLogoutRedirectUri;
    }
    var navParams = {
      useReplaceToNavigate: args.useReplaceToNavigate
    };
    return this._signoutStart(args, this._redirectNavigator, navParams).then(function () {
      _Log.Log.info("UserManager.signoutRedirect: successful");
    });
  };

  UserManager.prototype.signoutRedirectCallback = function signoutRedirectCallback(url) {
    return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
      _Log.Log.info("UserManager.signoutRedirectCallback: successful");
      return response;
    });
  };

  UserManager.prototype.signoutPopup = function signoutPopup() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    args = Object.assign({}, args);

    args.request_type = "so:p";
    var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
    args.post_logout_redirect_uri = url;
    args.display = "popup";
    if (args.post_logout_redirect_uri) {
      // we're putting a dummy entry in here because we
      // need a unique id from the state for notification
      // to the parent window, which is necessary if we
      // plan to return back to the client after signout
      // and so we can close the popup after signout
      args.state = args.state || {};
    }

    return this._signout(args, this._popupNavigator, {
      startUrl: url,
      popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
      popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
    }).then(function () {
      _Log.Log.info("UserManager.signoutPopup: successful");
    });
  };

  UserManager.prototype.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
    if (typeof keepOpen === "undefined" && typeof url === "boolean") {
      keepOpen = url;
      url = null;
    }

    var delimiter = "?";
    return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
      _Log.Log.info("UserManager.signoutPopupCallback: successful");
    });
  };

  UserManager.prototype._signout = function _signout(args, navigator) {
    var _this13 = this;

    var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
      return _this13._signoutEnd(navResponse.url);
    });
  };

  UserManager.prototype._signoutStart = function _signoutStart() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _this14 = this;

    var navigator = arguments[1];
    var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return navigator.prepare(navigatorParams).then(function (handle) {
      _Log.Log.debug("UserManager._signoutStart: got navigator window handle");

      return _this14._loadUser().then(function (user) {
        _Log.Log.debug("UserManager._signoutStart: loaded current user from storage");

        var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
        return revokePromise.then(function () {
          var id_token = args.id_token_hint || user && user.id_token;
          if (id_token) {
            _Log.Log.debug("UserManager._signoutStart: Setting id_token into signout request");
            args.id_token_hint = id_token;
          }

          return _this14.removeUser().then(function () {
            _Log.Log.debug("UserManager._signoutStart: user removed, creating signout request");

            return _this14.createSignoutRequest(args).then(function (signoutRequest) {
              _Log.Log.debug("UserManager._signoutStart: got signout request");

              navigatorParams.url = signoutRequest.url;
              if (signoutRequest.state) {
                navigatorParams.id = signoutRequest.state.id;
              }
              return handle.navigate(navigatorParams);
            });
          });
        });
      }).catch(function (err) {
        if (handle.close) {
          _Log.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
          handle.close();
        }
        throw err;
      });
    });
  };

  UserManager.prototype._signoutEnd = function _signoutEnd(url) {
    return this.processSignoutResponse(url).then(function (signoutResponse) {
      _Log.Log.debug("UserManager._signoutEnd: got signout response");

      return signoutResponse;
    });
  };

  UserManager.prototype.revokeAccessToken = function revokeAccessToken() {
    var _this15 = this;

    return this._loadUser().then(function (user) {
      return _this15._revokeInternal(user, true).then(function (success) {
        if (success) {
          _Log.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");

          user.access_token = null;
          user.refresh_token = null;
          user.expires_at = null;
          user.token_type = null;

          return _this15.storeUser(user).then(function () {
            _Log.Log.debug("UserManager.revokeAccessToken: user stored");
            _this15._events.load(user);
          });
        }
      });
    }).then(function () {
      _Log.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
    });
  };

  UserManager.prototype._revokeInternal = function _revokeInternal(user, required) {
    var _this16 = this;

    if (user) {
      var access_token = user.access_token;
      var refresh_token = user.refresh_token;

      return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
        return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
          if (!atSuccess && !rtSuccess) {
            _Log.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
          }

          return atSuccess || rtSuccess;
        });
      });
    }

    return Promise.resolve(false);
  };

  UserManager.prototype._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
    // check for JWT vs. reference token
    if (!access_token || access_token.indexOf(".") >= 0) {
      return Promise.resolve(false);
    }

    return this._tokenRevocationClient.revoke(access_token, required).then(function () {
      return true;
    });
  };

  UserManager.prototype._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
    if (!refresh_token) {
      return Promise.resolve(false);
    }

    return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
      return true;
    });
  };

  UserManager.prototype.startSilentRenew = function startSilentRenew() {
    this._silentRenewService.start();
  };

  UserManager.prototype.stopSilentRenew = function stopSilentRenew() {
    this._silentRenewService.stop();
  };

  UserManager.prototype._loadUser = function _loadUser() {
    return this._userStore.get(this._userStoreKey).then(function (storageString) {
      if (storageString) {
        _Log.Log.debug("UserManager._loadUser: user storageString loaded");
        return _User.User.fromStorageString(storageString);
      }

      _Log.Log.debug("UserManager._loadUser: no user storageString");
      return null;
    });
  };

  UserManager.prototype.storeUser = function storeUser(user) {
    if (user) {
      _Log.Log.debug("UserManager.storeUser: storing user");

      var storageString = user.toStorageString();
      return this._userStore.set(this._userStoreKey, storageString);
    } else {
      _Log.Log.debug("storeUser.storeUser: removing user");
      return this._userStore.remove(this._userStoreKey);
    }
  };

  _createClass(UserManager, [{
    key: "_redirectNavigator",
    get: function get() {
      return this.settings.redirectNavigator;
    }
  }, {
    key: "_popupNavigator",
    get: function get() {
      return this.settings.popupNavigator;
    }
  }, {
    key: "_iframeNavigator",
    get: function get() {
      return this.settings.iframeNavigator;
    }
  }, {
    key: "_userStore",
    get: function get() {
      return this.settings.userStore;
    }
  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
  }, {
    key: "_userStoreKey",
    get: function get() {
      return "user:" + this.settings.authority + ":" + this.settings.client_id;
    }
  }]);

  return UserManager;
}(_OidcClient2.OidcClient);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserManagerEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _AccessTokenEvents2 = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _Event = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManagerEvents = exports.UserManagerEvents = function (_AccessTokenEvents) {
  _inherits(UserManagerEvents, _AccessTokenEvents);

  function UserManagerEvents(settings) {
    _classCallCheck(this, UserManagerEvents);

    var _this = _possibleConstructorReturn(this, _AccessTokenEvents.call(this, settings));

    _this._userLoaded = new _Event.Event("User loaded");
    _this._userUnloaded = new _Event.Event("User unloaded");
    _this._silentRenewError = new _Event.Event("Silent renew error");
    _this._userSignedIn = new _Event.Event("User signed in");
    _this._userSignedOut = new _Event.Event("User signed out");
    _this._userSessionChanged = new _Event.Event("User session changed");
    return _this;
  }

  UserManagerEvents.prototype.load = function load(user) {
    var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _Log.Log.debug("UserManagerEvents.load");
    _AccessTokenEvents.prototype.load.call(this, user);
    if (raiseEvent) {
      this._userLoaded.raise(user);
    }
  };

  UserManagerEvents.prototype.unload = function unload() {
    _Log.Log.debug("UserManagerEvents.unload");
    _AccessTokenEvents.prototype.unload.call(this);
    this._userUnloaded.raise();
  };

  UserManagerEvents.prototype.addUserLoaded = function addUserLoaded(cb) {
    this._userLoaded.addHandler(cb);
  };

  UserManagerEvents.prototype.removeUserLoaded = function removeUserLoaded(cb) {
    this._userLoaded.removeHandler(cb);
  };

  UserManagerEvents.prototype.addUserUnloaded = function addUserUnloaded(cb) {
    this._userUnloaded.addHandler(cb);
  };

  UserManagerEvents.prototype.removeUserUnloaded = function removeUserUnloaded(cb) {
    this._userUnloaded.removeHandler(cb);
  };

  UserManagerEvents.prototype.addSilentRenewError = function addSilentRenewError(cb) {
    this._silentRenewError.addHandler(cb);
  };

  UserManagerEvents.prototype.removeSilentRenewError = function removeSilentRenewError(cb) {
    this._silentRenewError.removeHandler(cb);
  };

  UserManagerEvents.prototype._raiseSilentRenewError = function _raiseSilentRenewError(e) {
    _Log.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message);
    this._silentRenewError.raise(e);
  };

  UserManagerEvents.prototype.addUserSignedIn = function addUserSignedIn(cb) {
    this._userSignedIn.addHandler(cb);
  };

  UserManagerEvents.prototype.removeUserSignedIn = function removeUserSignedIn(cb) {
    this._userSignedIn.removeHandler(cb);
  };

  UserManagerEvents.prototype._raiseUserSignedIn = function _raiseUserSignedIn() {
    _Log.Log.debug("UserManagerEvents._raiseUserSignedIn");
    this._userSignedIn.raise();
  };

  UserManagerEvents.prototype.addUserSignedOut = function addUserSignedOut(cb) {
    this._userSignedOut.addHandler(cb);
  };

  UserManagerEvents.prototype.removeUserSignedOut = function removeUserSignedOut(cb) {
    this._userSignedOut.removeHandler(cb);
  };

  UserManagerEvents.prototype._raiseUserSignedOut = function _raiseUserSignedOut() {
    _Log.Log.debug("UserManagerEvents._raiseUserSignedOut");
    this._userSignedOut.raise();
  };

  UserManagerEvents.prototype.addUserSessionChanged = function addUserSessionChanged(cb) {
    this._userSessionChanged.addHandler(cb);
  };

  UserManagerEvents.prototype.removeUserSessionChanged = function removeUserSessionChanged(cb) {
    this._userSessionChanged.removeHandler(cb);
  };

  UserManagerEvents.prototype._raiseUserSessionChanged = function _raiseUserSessionChanged() {
    _Log.Log.debug("UserManagerEvents._raiseUserSessionChanged");
    this._userSessionChanged.raise();
  };

  return UserManagerEvents;
}(_AccessTokenEvents2.AccessTokenEvents);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserManagerSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings2 = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _RedirectNavigator = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");

var _PopupNavigator = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");

var _IFrameNavigator = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;

var UserManagerSettings = exports.UserManagerSettings = function (_OidcClientSettings) {
  _inherits(UserManagerSettings, _OidcClientSettings);

  function UserManagerSettings() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        popup_redirect_uri = _ref.popup_redirect_uri,
        popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
        popupWindowFeatures = _ref.popupWindowFeatures,
        popupWindowTarget = _ref.popupWindowTarget,
        silent_redirect_uri = _ref.silent_redirect_uri,
        silentRequestTimeout = _ref.silentRequestTimeout,
        _ref$automaticSilentR = _ref.automaticSilentRenew,
        automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
        _ref$validateSubOnSil = _ref.validateSubOnSilentRenew,
        validateSubOnSilentRenew = _ref$validateSubOnSil === undefined ? false : _ref$validateSubOnSil,
        _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
        includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
        _ref$monitorSession = _ref.monitorSession,
        monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
        _ref$monitorAnonymous = _ref.monitorAnonymousSession,
        monitorAnonymousSession = _ref$monitorAnonymous === undefined ? false : _ref$monitorAnonymous,
        _ref$checkSessionInte = _ref.checkSessionInterval,
        checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
        _ref$stopCheckSession = _ref.stopCheckSessionOnError,
        stopCheckSessionOnError = _ref$stopCheckSession === undefined ? true : _ref$stopCheckSession,
        query_status_response_type = _ref.query_status_response_type,
        _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
        revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
        _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
        accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
        _ref$redirectNavigato = _ref.redirectNavigator,
        redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator.RedirectNavigator() : _ref$redirectNavigato,
        _ref$popupNavigator = _ref.popupNavigator,
        popupNavigator = _ref$popupNavigator === undefined ? new _PopupNavigator.PopupNavigator() : _ref$popupNavigator,
        _ref$iframeNavigator = _ref.iframeNavigator,
        iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator.IFrameNavigator() : _ref$iframeNavigator,
        _ref$userStore = _ref.userStore,
        userStore = _ref$userStore === undefined ? new _WebStorageStateStore.WebStorageStateStore({ store: _Global.Global.sessionStorage }) : _ref$userStore;

    _classCallCheck(this, UserManagerSettings);

    var _this = _possibleConstructorReturn(this, _OidcClientSettings.call(this, arguments[0]));

    _this._popup_redirect_uri = popup_redirect_uri;
    _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
    _this._popupWindowFeatures = popupWindowFeatures;
    _this._popupWindowTarget = popupWindowTarget;

    _this._silent_redirect_uri = silent_redirect_uri;
    _this._silentRequestTimeout = silentRequestTimeout;
    _this._automaticSilentRenew = automaticSilentRenew;
    _this._validateSubOnSilentRenew = validateSubOnSilentRenew;
    _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
    _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

    _this._monitorSession = monitorSession;
    _this._monitorAnonymousSession = monitorAnonymousSession;
    _this._checkSessionInterval = checkSessionInterval;
    _this._stopCheckSessionOnError = stopCheckSessionOnError;
    if (query_status_response_type) {
      _this._query_status_response_type = query_status_response_type;
    } else if (arguments[0] && arguments[0].response_type) {
      _this._query_status_response_type = _SigninRequest.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
    } else {
      _this._query_status_response_type = "id_token";
    }
    _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;

    _this._redirectNavigator = redirectNavigator;
    _this._popupNavigator = popupNavigator;
    _this._iframeNavigator = iframeNavigator;

    _this._userStore = userStore;
    return _this;
  }

  _createClass(UserManagerSettings, [{
    key: "popup_redirect_uri",
    get: function get() {
      return this._popup_redirect_uri;
    }
  }, {
    key: "popup_post_logout_redirect_uri",
    get: function get() {
      return this._popup_post_logout_redirect_uri;
    }
  }, {
    key: "popupWindowFeatures",
    get: function get() {
      return this._popupWindowFeatures;
    }
  }, {
    key: "popupWindowTarget",
    get: function get() {
      return this._popupWindowTarget;
    }
  }, {
    key: "silent_redirect_uri",
    get: function get() {
      return this._silent_redirect_uri;
    }
  }, {
    key: "silentRequestTimeout",
    get: function get() {
      return this._silentRequestTimeout;
    }
  }, {
    key: "automaticSilentRenew",
    get: function get() {
      return this._automaticSilentRenew;
    }
  }, {
    key: "validateSubOnSilentRenew",
    get: function get() {
      return this._validateSubOnSilentRenew;
    }
  }, {
    key: "includeIdTokenInSilentRenew",
    get: function get() {
      return this._includeIdTokenInSilentRenew;
    }
  }, {
    key: "accessTokenExpiringNotificationTime",
    get: function get() {
      return this._accessTokenExpiringNotificationTime;
    }
  }, {
    key: "monitorSession",
    get: function get() {
      return this._monitorSession;
    }
  }, {
    key: "monitorAnonymousSession",
    get: function get() {
      return this._monitorAnonymousSession;
    }
  }, {
    key: "checkSessionInterval",
    get: function get() {
      return this._checkSessionInterval;
    }
  }, {
    key: "stopCheckSessionOnError",
    get: function get() {
      return this._stopCheckSessionOnError;
    }
  }, {
    key: "query_status_response_type",
    get: function get() {
      return this._query_status_response_type;
    }
  }, {
    key: "revokeAccessTokenOnSignout",
    get: function get() {
      return this._revokeAccessTokenOnSignout;
    }
  }, {
    key: "redirectNavigator",
    get: function get() {
      return this._redirectNavigator;
    }
  }, {
    key: "popupNavigator",
    get: function get() {
      return this._popupNavigator;
    }
  }, {
    key: "iframeNavigator",
    get: function get() {
      return this._iframeNavigator;
    }
  }, {
    key: "userStore",
    get: function get() {
      return this._userStore;
    }
  }]);

  return UserManagerSettings;
}(_OidcClientSettings2.OidcClientSettings);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebStorageStateStore = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var WebStorageStateStore = exports.WebStorageStateStore = function () {
  function WebStorageStateStore() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
        _ref$store = _ref.store,
        store = _ref$store === undefined ? _Global.Global.localStorage : _ref$store;

    _classCallCheck(this, WebStorageStateStore);

    this._store = store;
    this._prefix = prefix;
  }

  WebStorageStateStore.prototype.set = function set(key, value) {
    _Log.Log.debug("WebStorageStateStore.set", key);

    key = this._prefix + key;

    this._store.setItem(key, value);

    return Promise.resolve();
  };

  WebStorageStateStore.prototype.get = function get(key) {
    _Log.Log.debug("WebStorageStateStore.get", key);

    key = this._prefix + key;

    var item = this._store.getItem(key);

    return Promise.resolve(item);
  };

  WebStorageStateStore.prototype.remove = function remove(key) {
    _Log.Log.debug("WebStorageStateStore.remove", key);

    key = this._prefix + key;

    var item = this._store.getItem(key);
    this._store.removeItem(key);

    return Promise.resolve(item);
  };

  WebStorageStateStore.prototype.getAllKeys = function getAllKeys() {
    _Log.Log.debug("WebStorageStateStore.getAllKeys");

    var keys = [];

    for (var index = 0; index < this._store.length; index++) {
      var key = this._store.key(index);

      if (key.indexOf(this._prefix) === 0) {
        keys.push(key.substr(this._prefix.length));
      }
    }

    return Promise.resolve(keys);
  };

  return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/rsa.js":
/*!***************************!*\
  !*** ./src/crypto/rsa.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllowedSigningAlgs = exports.b64tohex = exports.hextob64u = exports.crypto = exports.X509 = exports.KeyUtil = exports.jws = undefined;

var _jsbn = __webpack_require__(/*! jsbn */ "./node_modules/jsbn/index.js");

var _jsbn2 = _interopRequireDefault(_jsbn);

var _sha = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");

var _sha2 = _interopRequireDefault(_sha);

var _base64Js = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var _base64Js2 = _interopRequireDefault(_base64Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigInteger = _jsbn2.default.BigInteger;

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*
Based on the work of Auth0
https://github.com/auth0/idtoken-verifier
https://github.com/auth0/idtoken-verifier/blob/master/LICENSE
Which is based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

/*
 * To support most basic OpenId use cases (using RSA256), we can get away without
 * requiring the full jrsasign feature set (and resulting massive bundle).
 *
 * - Support RSA 256 algorithm (optionally could support RSA* family)
 * - Parse JWT tokens using the (n) parameter.
 * - Verify signature of id_tokens
 * - Verify at_hash of access_tokens
 * - Perform common base64 encoding/decoding tasks.
 */

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

var Base64 = {
  b64tohex: function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3
    var slop;
    for (i = 0; i < s.length; ++i) {
      if (s.charAt(i) === b64pad) break;
      var v = b64map.indexOf(s.charAt(i));
      if (v < 0) continue;
      if (k === 0) {
        ret += String.fromCharCode(v >> 2);
        slop = v & 3;
        k = 1;
      } else if (k === 1) {
        ret += String.fromCharCode(slop << 2 | v >> 4);
        slop = v & 0xf;
        k = 2;
      } else if (k === 2) {
        ret += String.fromCharCode(slop);
        ret += String.fromCharCode(v >> 2);
        slop = v & 3;
        k = 3;
      } else {
        ret += String.fromCharCode(slop << 2 | v >> 4);
        ret += String.fromCharCode(v & 0xf);
        k = 0;
      }
    }
    if (k === 1) ret += String.fromCharCode(slop << 2);
    return ret;
  },
  hexToBase64: function hexToBase64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
      c = parseInt(h.substring(i, i + 3), 16);
      ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 === h.length) {
      c = parseInt(h.substring(i, i + 1), 16);
      ret += b64map.charAt(c << 2);
    } else if (i + 2 === h.length) {
      c = parseInt(h.substring(i, i + 2), 16);
      ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    if (b64pad) while ((ret.length & 3) > 0) {
      ret += b64pad;
    }return ret;
  },
  padding: function padding(str) {
    var mod = str.length % 4;
    var pad = 4 - mod;

    if (mod === 0) {
      return str;
    }

    return str + new Array(1 + pad).join("=");
  },
  byteArrayToHex: function byteArrayToHex(raw) {
    var HEX = "";

    for (var i = 0; i < raw.length; i++) {
      var _hex = raw[i].toString(16);
      HEX += _hex.length === 2 ? _hex : "0" + _hex;
    }

    return HEX;
  },
  decodeToHEX: function decodeToHEX(str) {
    return Base64.byteArrayToHex(_base64Js2.default.toByteArray(Base64.padding(str)));
  },
  base64ToBase64Url: function base64ToBase64Url(s) {
    s = s.replace(/=/g, "");
    s = s.replace(/\+/g, "-");
    s = s.replace(/\//g, "_");
    return s;
  },
  urlDecode: function urlDecode(str) {
    str = str.replace(/-/g, "+") // Convert '-' to '+'
    .replace(/_/g, "/") // Convert '_' to '/'
    .replace(/\s/g, " "); // Convert '\s' to ' '

    return atob(str);
  }
};

var DigestInfoHead = {
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  ripemd160: "3021300906052b2403020105000414"
};

var DigestAlgs = {
  sha256: _sha2.default,
  SHA256: _sha2.default
};

function RSAVerifier(modulus, exp) {
  this.n = null;
  this.e = 0;

  if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
    this.n = new BigInteger(modulus, 16);
    this.e = parseInt(exp, 16);
  } else {
    throw new Error("Invalid key data");
  }
}

function getAlgorithmFromDigest(hDigestInfo) {
  for (var algName in DigestInfoHead) {
    var head = DigestInfoHead[algName];
    var len = head.length;

    if (hDigestInfo.substring(0, len) === head) {
      return {
        alg: algName,
        hash: hDigestInfo.substring(len)
      };
    }
  }
  return [];
}

RSAVerifier.prototype.verify = function (msg, encsig) {
  encsig = Base64.decodeToHEX(encsig);
  encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/gi, "");

  var sig = new BigInteger(encsig, 16);

  if (sig.bitLength() > this.n.bitLength()) {
    throw new Error("Signature does not match with the key modulus.");
  }

  var decryptedSig = sig.modPowInt(this.e, this.n);
  var digest = decryptedSig.toString(16).replace(/^1f+00/, "");
  var digestInfo = getAlgorithmFromDigest(digest);

  if (digestInfo.length === 0) {
    return false;
  }

  if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
    throw new Error("Hashing algorithm is not supported.");
  }

  var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
  return digestInfo.hash === msgHash;
};

var AllowedSigningAlgs = ["RS256"];

var jws = {
  JWS: {
    parse: function parse(token) {
      var parts = token.split(".");
      var header;
      var payload;

      // This diverges from Auth0's implementation, which throws rather than
      // returning undefined
      if (parts.length !== 3) {
        return undefined;
      }

      try {
        header = JSON.parse(Base64.urlDecode(parts[0]));
        payload = JSON.parse(Base64.urlDecode(parts[1]));
      } catch (e) {
        return new Error("Token header or payload is not valid JSON");
      }

      return {
        headerObj: header,
        payloadObj: payload
      };
    },
    verify: function verify(jwt, key) {
      var allowedSigningAlgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      allowedSigningAlgs.forEach(function (alg) {
        if (AllowedSigningAlgs.indexOf(alg) === -1) {
          throw new Error("Invalid signing algorithm: " + alg);
        }
      });
      var verify = new RSAVerifier(key.n, key.e);
      var parts = jwt.split(".");

      var headerAndPayload = [parts[0], parts[1]].join(".");
      return verify.verify(headerAndPayload, parts[2]);
    }
  }
};

var KeyUtil = {
  /**
   * Returns decoded keys in Hex format for use in crypto functions.
   * Supports modulus/exponent-style keys.
   *
   * @param {object} key the security key
   * @returns
   */
  getKey: function getKey(key) {
    if (key.kty === "RSA") {
      return {
        e: Base64.decodeToHEX(key.e),
        n: Base64.decodeToHEX(key.n)
      };
    }

    return null;
  }
};

var X509 = {
  getPublicKeyFromCertPEM: function getPublicKeyFromCertPEM() {
    throw new Error("Not implemented. Use the full oidc-client library if you need support for X509.");
  }
};

var crypto = {
  Util: {
    hashString: function hashString(value, alg) {
      var hashFunc = DigestAlgs[alg];
      return hashFunc(value).toString();
    }
  }
};

function hextob64u(s) {
  if (s.length % 2 === 1) {
    s = "0" + s;
  }
  return Base64.base64ToBase64Url(Base64.hexToBase64(s));
}

var b64tohex = Base64.b64tohex;
exports.jws = jws;
exports.KeyUtil = KeyUtil;
exports.X509 = X509;
exports.crypto = crypto;
exports.hextob64u = hextob64u;
exports.b64tohex = b64tohex;
exports.AllowedSigningAlgs = AllowedSigningAlgs;

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
/**
 * Generates RFC4122 version 4 guid ()
 */

var crypto = typeof window !== "undefined" ? window.crypto || window.msCrypto : null;

function _cryptoUuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

function _uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ Math.random() * 16 >> c / 4).toString(16);
  });
}

function random() {
  var hasCrypto = crypto != "undefined" && crypto !== null;
  var hasRandomValues = hasCrypto && typeof crypto.getRandomValues != "undefined";
  var uuid = hasRandomValues ? _cryptoUuidv4 : _uuidv4;
  return uuid().replace(/-/g, "");
}
module.exports = exports.default;

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Version = "1.11.6";exports.Version = Version;

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tTZXNzaW9uSUZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9DbG9ja1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFJRnJhbWVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9FcnJvclJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5NZW1vcnlXZWJTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9Kb3NlVXRpbEltcGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsUnNhLmpzIiwid2VicGFjazovLy8uL3NyYy9Kc29uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9NZXRhZGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09pZGNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9SZWRpcmVjdE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzcG9uc2VWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Nlc3Npb25Nb25pdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5SZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbGVudFJlbmV3U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlbkNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9VcmxVdGlsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VySW5mb1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlckV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyeXB0by9yc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi92ZXJzaW9uLmpzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbIlZlcnNpb24iLCJMb2ciLCJPaWRjQ2xpZW50IiwiT2lkY0NsaWVudFNldHRpbmdzIiwiV2ViU3RvcmFnZVN0YXRlU3RvcmUiLCJJbk1lbW9yeVdlYlN0b3JhZ2UiLCJVc2VyTWFuYWdlciIsIkFjY2Vzc1Rva2VuRXZlbnRzIiwiTWV0YWRhdGFTZXJ2aWNlIiwiQ29yZG92YVBvcHVwTmF2aWdhdG9yIiwiQ29yZG92YUlGcmFtZU5hdmlnYXRvciIsIkNoZWNrU2Vzc2lvbklGcmFtZSIsIlRva2VuUmV2b2NhdGlvbkNsaWVudCIsIlNlc3Npb25Nb25pdG9yIiwiR2xvYmFsIiwiVXNlciIsIkRlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsImFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyIiwiVGltZXIiLCJhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lciIsIl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsIl9hY2Nlc3NUb2tlbkV4cGlyaW5nIiwiX2FjY2Vzc1Rva2VuRXhwaXJlZCIsImxvYWQiLCJjb250YWluZXIiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzX2luIiwidW5kZWZpbmVkIiwiZHVyYXRpb24iLCJkZWJ1ZyIsImV4cGlyaW5nIiwiaW5pdCIsImNhbmNlbCIsImV4cGlyZWQiLCJ1bmxvYWQiLCJhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nIiwiY2IiLCJhZGRIYW5kbGVyIiwicmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyIsInJlbW92ZUhhbmRsZXIiLCJhZGRBY2Nlc3NUb2tlbkV4cGlyZWQiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyZWQiLCJEZWZhdWx0SW50ZXJ2YWwiLCJjYWxsYmFjayIsImNsaWVudF9pZCIsInVybCIsImludGVydmFsIiwic3RvcE9uRXJyb3IiLCJfY2FsbGJhY2siLCJfY2xpZW50X2lkIiwiX3VybCIsIl9pbnRlcnZhbCIsIl9zdG9wT25FcnJvciIsImlkeCIsImluZGV4T2YiLCJfZnJhbWVfb3JpZ2luIiwic3Vic3RyIiwiX2ZyYW1lIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIl9ib3VuZE1lc3NhZ2VFdmVudCIsIl9tZXNzYWdlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib3JpZ2luIiwic291cmNlIiwiY29udGVudFdpbmRvdyIsImRhdGEiLCJlcnJvciIsInN0b3AiLCJzdGFydCIsInNlc3Npb25fc3RhdGUiLCJfc2Vzc2lvbl9zdGF0ZSIsInNlbmQiLCJwb3N0TWVzc2FnZSIsIl90aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkNsb2NrU2VydmljZSIsImdldEVwb2NoVGltZSIsIkRhdGUiLCJub3ciLCJwcmVwYXJlIiwicGFyYW1zIiwicG9wdXBXaW5kb3dGZWF0dXJlcyIsInBvcHVwIiwiQ29yZG92YVBvcHVwV2luZG93IiwiRGVmYXVsdFBvcHVwRmVhdHVyZXMiLCJEZWZhdWx0UG9wdXBUYXJnZXQiLCJfcHJvbWlzZSIsInJlamVjdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsImZlYXR1cmVzIiwidGFyZ2V0IiwicG9wdXBXaW5kb3dUYXJnZXQiLCJyZWRpcmVjdF91cmkiLCJzdGFydFVybCIsIl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZCIsImNvcmRvdmFNZXRhZGF0YSIsInNvbWUiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuYXZpZ2F0ZSIsIl9lcnJvciIsImNvcmRvdmEiLCJyZXF1aXJlIiwibWV0YWRhdGEiLCJfcG9wdXAiLCJJbkFwcEJyb3dzZXIiLCJvcGVuIiwiX2V4aXRDYWxsYmFja0V2ZW50IiwiX2V4aXRDYWxsYmFjayIsIl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50IiwiX2xvYWRTdGFydENhbGxiYWNrIiwicHJvbWlzZSIsImV2ZW50IiwiX3N1Y2Nlc3MiLCJtZXNzYWdlIiwiX2NsZWFudXAiLCJFcnJvciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVycm9yUmVzcG9uc2UiLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yX3VyaSIsInN0YXRlIiwiRXZlbnQiLCJfbmFtZSIsIl9jYWxsYmFja3MiLCJwdXNoIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInJhaXNlIiwiaSIsImxlbmd0aCIsInRpbWVyIiwiaGFuZGxlIiwidGVzdGluZyIsInJlcXVlc3QiLCJfdGVzdGluZyIsInNldFhNTEh0dHBSZXF1ZXN0IiwibmV3UmVxdWVzdCIsImxvY2F0aW9uIiwibG9jYWxTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJYTUxIdHRwUmVxdWVzdCIsIklGcmFtZU5hdmlnYXRvciIsImZyYW1lIiwiSUZyYW1lV2luZG93Iiwibm90aWZ5UGFyZW50IiwiRGVmYXVsdFRpbWVvdXQiLCJ0aW1lb3V0Iiwic2lsZW50UmVxdWVzdFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIl9vcmlnaW4iLCJzdGFydHNXaXRoIiwiaHJlZiIsInBhcmVudCIsInByb3RvY29sIiwiaG9zdCIsIl9kYXRhIiwiZ2V0SXRlbSIsImtleSIsInNldEl0ZW0iLCJ2YWx1ZSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRKb3NlVXRpbCIsImp3cyIsIktleVV0aWwiLCJYNTA5IiwiY3J5cHRvIiwiaGV4dG9iNjR1IiwiYjY0dG9oZXgiLCJBbGxvd2VkU2lnbmluZ0FsZ3MiLCJwYXJzZUp3dCIsImp3dCIsInRva2VuIiwiSldTIiwicGFyc2UiLCJoZWFkZXIiLCJoZWFkZXJPYmoiLCJwYXlsb2FkIiwicGF5bG9hZE9iaiIsInZhbGlkYXRlSnd0IiwiaXNzdWVyIiwiYXVkaWVuY2UiLCJjbG9ja1NrZXciLCJ0aW1lSW5zZW5zaXRpdmUiLCJrdHkiLCJuIiwiZ2V0S2V5IiwieDVjIiwiaGV4IiwiZ2V0UHVibGljS2V5RnJvbUNlcnRIZXgiLCJjcnYiLCJ4IiwieSIsIkpvc2VVdGlsIiwiX3ZhbGlkYXRlSnd0IiwidmFsaWRhdGVKd3RBdHRyaWJ1dGVzIiwicGFyc2VJbnQiLCJpc3MiLCJhdWQiLCJ2YWxpZEF1ZGllbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXpwIiwibG93ZXJOb3ciLCJ1cHBlck5vdyIsImlhdCIsIm5iZiIsImV4cCIsInRoZW4iLCJ2ZXJpZnkiLCJoYXNoU3RyaW5nIiwiYWxnIiwiVXRpbCIsImhleFRvQmFzZTY0VXJsIiwiSnNvblNlcnZpY2UiLCJhZGRpdGlvbmFsQ29udGVudFR5cGVzIiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiand0SGFuZGxlciIsIl9jb250ZW50VHlwZXMiLCJzbGljZSIsIl9YTUxIdHRwUmVxdWVzdCIsIl9qd3RIYW5kbGVyIiwiZ2V0SnNvbiIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJmb3VuZCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmMiLCJmZXRjaCIsIm9rIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJnZXQiLCJyZXEiLCJ0ZXh0IiwianNvbiIsImV4Iiwic3RhdHVzVGV4dCIsInBvc3RGb3JtIiwiYmFzaWNBdXRoIiwiYnRvYSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInRvU3RyaW5nIiwibXNnIiwibm9wTG9nZ2VyIiwiaW5mbyIsIndhcm4iLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJyZXNldCIsImFyZ3MiLCJhcHBseSIsImZyb20iLCJPaWRjTWV0YWRhdGFVcmxQYXRoIiwic2V0dGluZ3MiLCJKc29uU2VydmljZUN0b3IiLCJfc2V0dGluZ3MiLCJfanNvblNlcnZpY2UiLCJyZXNldFNpZ25pbmdLZXlzIiwic2lnbmluZ0tleXMiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhVXJsIiwic2VlZCIsIm1ldGFkYXRhU2VlZCIsImFzc2lnbiIsImdldElzc3VlciIsIl9nZXRNZXRhZGF0YVByb3BlcnR5IiwiZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50IiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImdldFRva2VuRW5kcG9pbnQiLCJvcHRpb25hbCIsImdldENoZWNrU2Vzc2lvbklmcmFtZSIsImdldEVuZFNlc3Npb25FbmRwb2ludCIsImdldFJldm9jYXRpb25FbmRwb2ludCIsImdldEtleXNFbmRwb2ludCIsImdldFNpZ25pbmdLZXlzIiwiandrc191cmkiLCJrZXlTZXQiLCJrZXlzIiwiX21ldGFkYXRhVXJsIiwiYXV0aG9yaXR5IiwiY3JlYXRlU2lnbmluUmVxdWVzdCIsInJlc3BvbnNlX3R5cGUiLCJzY29wZSIsInByb21wdCIsIm1heF9hZ2UiLCJ1aV9sb2NhbGVzIiwiaWRfdG9rZW5faGludCIsImxvZ2luX2hpbnQiLCJhY3JfdmFsdWVzIiwicmVzb3VyY2UiLCJyZXF1ZXN0X3VyaSIsInJlc3BvbnNlX21vZGUiLCJleHRyYVF1ZXJ5UGFyYW1zIiwiZXh0cmFUb2tlblBhcmFtcyIsInJlcXVlc3RfdHlwZSIsInNraXBVc2VySW5mbyIsInN0YXRlU3RvcmUiLCJTaWduaW5SZXF1ZXN0IiwiaXNDb2RlIiwiX21ldGFkYXRhU2VydmljZSIsInNpZ25pblJlcXVlc3QiLCJjbGllbnRfc2VjcmV0Iiwic2lnbmluU3RhdGUiLCJfc3RhdGVTdG9yZSIsInNldCIsImlkIiwidG9TdG9yYWdlU3RyaW5nIiwicmVhZFNpZ25pblJlc3BvbnNlU3RhdGUiLCJyZW1vdmVTdGF0ZSIsInVzZVF1ZXJ5IiwiZGVsaW1pdGVyIiwicmVzcG9uc2UiLCJTaWduaW5SZXNwb25zZSIsInN0YXRlQXBpIiwicmVtb3ZlIiwic3RvcmVkU3RhdGVTdHJpbmciLCJTaWduaW5TdGF0ZSIsImZyb21TdG9yYWdlU3RyaW5nIiwicHJvY2Vzc1NpZ25pblJlc3BvbnNlIiwiX3ZhbGlkYXRvciIsInZhbGlkYXRlU2lnbmluUmVzcG9uc2UiLCJjcmVhdGVTaWdub3V0UmVxdWVzdCIsInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIlNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFN0YXRlIiwicmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlIiwiU2lnbm91dFJlc3BvbnNlIiwic3RhdGVLZXkiLCJTdGF0ZSIsInByb2Nlc3NTaWdub3V0UmVzcG9uc2UiLCJ2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZSIsImNsZWFyU3RhbGVTdGF0ZSIsInN0YWxlU3RhdGVBZ2UiLCJ2YWxpZGF0b3IiLCJtZXRhZGF0YVNlcnZpY2UiLCJEZWZhdWx0UmVzcG9uc2VUeXBlIiwiRGVmYXVsdFNjb3BlIiwiRGVmYXVsdENsaWVudEF1dGhlbnRpY2F0aW9uIiwiRGVmYXVsdFN0YWxlU3RhdGVBZ2UiLCJEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzIiwiY2xpZW50X2F1dGhlbnRpY2F0aW9uIiwiZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJsb2FkVXNlckluZm8iLCJjbG9ja1NlcnZpY2UiLCJ1c2VySW5mb0p3dElzc3VlciIsIm1lcmdlQ2xhaW1zIiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YSIsIl9tZXRhZGF0YVNlZWQiLCJfc2lnbmluZ0tleXMiLCJfY2xpZW50X3NlY3JldCIsIl9yZXNwb25zZV90eXBlIiwiX3Njb3BlIiwiX3JlZGlyZWN0X3VyaSIsIl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfY2xpZW50X2F1dGhlbnRpY2F0aW9uIiwiX3Byb21wdCIsIl9kaXNwbGF5IiwiX21heF9hZ2UiLCJfdWlfbG9jYWxlcyIsIl9hY3JfdmFsdWVzIiwiX3Jlc291cmNlIiwiX3Jlc3BvbnNlX21vZGUiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX2Nsb2NrU2VydmljZSIsIl91c2VySW5mb0p3dElzc3VlciIsIl9tZXJnZUNsYWltcyIsIl9leHRyYVF1ZXJ5UGFyYW1zIiwiX2V4dHJhVG9rZW5QYXJhbXMiLCJQb3B1cE5hdmlnYXRvciIsIlBvcHVwV2luZG93Iiwia2VlcE9wZW4iLCJub3RpZnlPcGVuZXIiLCJDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwiLCJfY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyIiwiX2NoZWNrRm9yUG9wdXBDbG9zZWQiLCJfaWQiLCJmb2N1cyIsImNsb3NlZCIsIm9wZW5lciIsIlVybFV0aWxpdHkiLCJwYXJzZVVybEZyYWdtZW50IiwiUmVkaXJlY3ROYXZpZ2F0b3IiLCJ1c2VSZXBsYWNlVG9OYXZpZ2F0ZSIsInJlcGxhY2UiLCJQcm90b2NvbENsYWltcyIsIlVzZXJJbmZvU2VydmljZUN0b3IiLCJVc2VySW5mb1NlcnZpY2UiLCJqb3NlVXRpbCIsIlRva2VuQ2xpZW50Q3RvciIsIlRva2VuQ2xpZW50IiwiX3VzZXJJbmZvU2VydmljZSIsIl9qb3NlVXRpbCIsIl90b2tlbkNsaWVudCIsIl9wcm9jZXNzU2lnbmluUGFyYW1zIiwiX3ZhbGlkYXRlVG9rZW5zIiwiX3Byb2Nlc3NDbGFpbXMiLCJub25jZSIsImlkX3Rva2VuIiwiY29kZV92ZXJpZmllciIsImNvZGUiLCJpc09wZW5JZENvbm5lY3QiLCJwcm9maWxlIiwiZ2V0Q2xhaW1zIiwiY2xhaW1zIiwic3ViIiwiY2xhaW1zMSIsImNsYWltczIiLCJyZXN1bHQiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidHlwZSIsIl9wcm9jZXNzQ29kZSIsIl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbiIsIl92YWxpZGF0ZUlkVG9rZW4iLCJleGNoYW5nZUNvZGUiLCJ0b2tlblJlc3BvbnNlIiwiX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMiLCJjbG9ja1NrZXdJblNlY29uZHMiLCJfdmFsaWRhdGVBY2Nlc3NUb2tlbiIsIl9nZXRTaWduaW5nS2V5Rm9ySnd0Iiwia2lkIiwiX2ZpbHRlckJ5QWxnIiwiZmlsdGVyIiwiX2dldFNpZ25pbmdLZXlGb3JKd3RXaXRoU2luZ2xlUmV0cnkiLCJhdF9oYXNoIiwiaGFzaEFsZyIsImhhc2hCaXRzIiwic2hhIiwiaGFzaCIsImxlZnQiLCJsZWZ0X2I2NHUiLCJ1c2VyTWFuYWdlciIsIkNoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJfdXNlck1hbmFnZXIiLCJfQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciIsImV2ZW50cyIsImFkZFVzZXJMb2FkZWQiLCJfc3RhcnQiLCJhZGRVc2VyVW5sb2FkZWQiLCJfc3RvcCIsImdldFVzZXIiLCJ1c2VyIiwibW9uaXRvckFub255bW91c1Nlc3Npb24iLCJxdWVyeVNlc3Npb25TdGF0dXMiLCJzZXNzaW9uIiwidG1wVXNlciIsInNpZCIsImNhdGNoIiwiZXJyIiwiX3N1YiIsIl9zaWQiLCJfY2hlY2tTZXNzaW9uSUZyYW1lIiwiX2NoZWNrU2Vzc2lvbkludGVydmFsIiwiX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwidGltZXJIYW5kbGUiLCJyYWlzZUV2ZW50IiwiX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkIiwiX3JhaXNlVXNlclNpZ25lZE91dCIsIl9yYWlzZVVzZXJTaWduZWRJbiIsImNoZWNrU2Vzc2lvbkludGVydmFsIiwic3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IiLCJvaWRjIiwiaXNPaWRjIiwiYWRkUXVlcnlQYXJhbSIsImNvZGVfY2hhbGxlbmdlIiwic3BsaXQiLCJpc09BdXRoIiwiT2lkY1Njb3BlIiwidG9rZW5fdHlwZSIsImV4cGlyZXNfYXQiLCJzY29wZXMiLCJhcmd1bWVudHMiLCJfbm9uY2UiLCJfY29kZV92ZXJpZmllciIsIl9jb2RlX2NoYWxsZW5nZSIsIl9za2lwVXNlckluZm8iLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlZCIsInN0b3JhZ2VTdHJpbmciLCJTaWxlbnRSZW5ld1NlcnZpY2UiLCJfdG9rZW5FeHBpcmluZyIsInNpZ25pblNpbGVudCIsIl9yYWlzZVNpbGVudFJlbmV3RXJyb3IiLCJfY3JlYXRlZCIsIl9yZXF1ZXN0X3R5cGUiLCJzdG9yYWdlIiwiYWdlIiwiY3V0b2ZmIiwiZ2V0QWxsS2V5cyIsInByb21pc2VzIiwicCIsImFsbCIsIlRpbWVyRHVyYXRpb24iLCJub3dGdW5jIiwiX25vd0Z1bmMiLCJleHBpcmF0aW9uIiwiX3RpbWVySGFuZGxlIiwiX2V4cGlyYXRpb24iLCJ0aW1lckR1cmF0aW9uIiwiZGlmZiIsImdyYW50X3R5cGUiLCJleGNoYW5nZVJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBY2Nlc3NUb2tlblR5cGVIaW50IiwiUmVmcmVzaFRva2VuVHlwZUhpbnQiLCJfWE1MSHR0cFJlcXVlc3RDdG9yIiwicmV2b2tlIiwicmVxdWlyZWQiLCJfcmV2b2tlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2xvYmFsIiwibGFzdEluZGV4T2YiLCJyZWdleCIsIm0iLCJjb3VudGVyIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb3AiLCJfZ2V0Q2xhaW1zRnJvbUp3dCIsInJlc3BvbnNlVGV4dCIsImlzc3VlclByb21pc2UiLCJTaWxlbnRSZW5ld1NlcnZpY2VDdG9yIiwiU2Vzc2lvbk1vbml0b3JDdG9yIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciIsIlVzZXJNYW5hZ2VyU2V0dGluZ3MiLCJfZXZlbnRzIiwiVXNlck1hbmFnZXJFdmVudHMiLCJfc2lsZW50UmVuZXdTZXJ2aWNlIiwiYXV0b21hdGljU2lsZW50UmVuZXciLCJzdGFydFNpbGVudFJlbmV3IiwibW9uaXRvclNlc3Npb24iLCJfc2Vzc2lvbk1vbml0b3IiLCJfdG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiX2xvYWRVc2VyIiwicmVtb3ZlVXNlciIsInN0b3JlVXNlciIsInNpZ25pblJlZGlyZWN0IiwibmF2UGFyYW1zIiwiX3NpZ25pblN0YXJ0IiwiX3JlZGlyZWN0TmF2aWdhdG9yIiwic2lnbmluUmVkaXJlY3RDYWxsYmFjayIsIl9zaWduaW5FbmQiLCJzaWduaW5Qb3B1cCIsInBvcHVwX3JlZGlyZWN0X3VyaSIsIl9zaWduaW4iLCJfcG9wdXBOYXZpZ2F0b3IiLCJzaWduaW5Qb3B1cENhbGxiYWNrIiwiX3NpZ25pbkNhbGxiYWNrIiwiX3VzZVJlZnJlc2hUb2tlbiIsImluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsInZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsImN1cnJlbnRfc3ViIiwiX3NpZ25pblNpbGVudElmcmFtZSIsImlkVG9rZW5WYWxpZGF0aW9uIiwiX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbiIsImF1dGhfdGltZSIsInNpbGVudF9yZWRpcmVjdF91cmkiLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lnbmluU2lsZW50Q2FsbGJhY2siLCJzaWduaW5DYWxsYmFjayIsInNpZ25vdXRDYWxsYmFjayIsInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIiwic2lnbm91dFBvcHVwQ2FsbGJhY2siLCJxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIm5hdlJlc3BvbnNlIiwic2lnbmluUmVzcG9uc2UiLCJuYXZpZ2F0b3IiLCJuYXZpZ2F0b3JQYXJhbXMiLCJzaWdub3V0UmVkaXJlY3QiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJfc2lnbm91dFN0YXJ0IiwiX3NpZ25vdXRFbmQiLCJzaWdub3V0UG9wdXAiLCJwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfc2lnbm91dCIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFJlc3BvbnNlIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzdWNjZXNzIiwiX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwiLCJhdFN1Y2Nlc3MiLCJfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwiLCJydFN1Y2Nlc3MiLCJzdG9wU2lsZW50UmVuZXciLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJfdXNlckxvYWRlZCIsIl91c2VyVW5sb2FkZWQiLCJfc2lsZW50UmVuZXdFcnJvciIsIl91c2VyU2lnbmVkSW4iLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyTG9hZGVkIiwicmVtb3ZlVXNlclVubG9hZGVkIiwiYWRkU2lsZW50UmVuZXdFcnJvciIsInJlbW92ZVNpbGVudFJlbmV3RXJyb3IiLCJhZGRVc2VyU2lnbmVkSW4iLCJyZW1vdmVVc2VyU2lnbmVkSW4iLCJhZGRVc2VyU2lnbmVkT3V0IiwicmVtb3ZlVXNlclNpZ25lZE91dCIsImFkZFVzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIkRlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3JlIiwiX3BvcHVwX3JlZGlyZWN0X3VyaSIsIl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcG9wdXBXaW5kb3dGZWF0dXJlcyIsIl9wb3B1cFdpbmRvd1RhcmdldCIsIl9zaWxlbnRfcmVkaXJlY3RfdXJpIiwiX3NpbGVudFJlcXVlc3RUaW1lb3V0IiwiX2F1dG9tYXRpY1NpbGVudFJlbmV3IiwiX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfbW9uaXRvclNlc3Npb24iLCJfbW9uaXRvckFub255bW91c1Nlc3Npb24iLCJfcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJwcmVmaXgiLCJfc3RvcmUiLCJfcHJlZml4IiwiQmlnSW50ZWdlciIsIkpTQk4iLCJiNjRtYXAiLCJiNjRwYWQiLCJCYXNlNjQiLCJzIiwicmV0IiwiayIsInNsb3AiLCJjaGFyQXQiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaGV4VG9CYXNlNjQiLCJoIiwiYyIsInN1YnN0cmluZyIsInBhZGRpbmciLCJzdHIiLCJtb2QiLCJwYWQiLCJqb2luIiwiYnl0ZUFycmF5VG9IZXgiLCJyYXciLCJIRVgiLCJfaGV4IiwiZGVjb2RlVG9IRVgiLCJiYXNlNjRKcyIsInRvQnl0ZUFycmF5IiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJ1cmxEZWNvZGUiLCJhdG9iIiwiRGlnZXN0SW5mb0hlYWQiLCJzaGExIiwic2hhMjI0Iiwic2hhMjU2Iiwic2hhMzg0Iiwic2hhNTEyIiwibWQyIiwibWQ1IiwicmlwZW1kMTYwIiwiRGlnZXN0QWxncyIsIlNIQTI1NiIsIlJTQVZlcmlmaWVyIiwibW9kdWx1cyIsImdldEFsZ29yaXRobUZyb21EaWdlc3QiLCJoRGlnZXN0SW5mbyIsImFsZ05hbWUiLCJoZWFkIiwibGVuIiwicHJvdG90eXBlIiwiZW5jc2lnIiwic2lnIiwiYml0TGVuZ3RoIiwiZGVjcnlwdGVkU2lnIiwibW9kUG93SW50IiwiZGlnZXN0IiwiZGlnZXN0SW5mbyIsIm1zZ0hhc2giLCJwYXJ0cyIsImFsbG93ZWRTaWduaW5nQWxncyIsImhlYWRlckFuZFBheWxvYWQiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydFBFTSIsImhhc2hGdW5jIiwicmFuZG9tIiwibXNDcnlwdG8iLCJfY3J5cHRvVXVpZHY0IiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsIl91dWlkdjQiLCJNYXRoIiwiaGFzQ3J5cHRvIiwiaGFzUmFuZG9tVmFsdWVzIiwidXVpZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBbkJBO0FBQ0E7O2tCQW9CZTtBQUNYQSw2QkFEVztBQUVYQyxpQkFGVztBQUdYQyxzQ0FIVztBQUlYQyw4REFKVztBQUtYQyxvRUFMVztBQU1YQyw4REFOVztBQU9YQyx5Q0FQVztBQVFYQywyREFSVztBQVNYQyxxREFUVztBQVVYQyx1RUFWVztBQVdYQywwRUFYVztBQVlYQyw4REFaVztBQWFYQyx1RUFiVztBQWNYQyxrREFkVztBQWVYQywwQkFmVztBQWdCWEM7QUFoQlcsQzs7Ozs7Ozs7Ozs7OztBQ3JCSDs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JKQSwrQ0FBQztBQUNELEtBQUssSUFBMkI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQU9KO0FBQ0YsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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Ozs7QUM1QkQsSUFBTXphLFVBQVUsUUFBaEIsQyxRQUFrQ0EsTyxHQUFBQSxPOzs7Ozs7Ozs7OztBQ0FsQyxlIiwiZmlsZSI6Im9pZGMtY2xpZW50LnJzYTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9zcmMvTG9nLmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBWZXJzaW9uLFxuICAgIExvZyxcbiAgICBPaWRjQ2xpZW50LFxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXG4gICAgVXNlck1hbmFnZXIsXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgU2Vzc2lvbk1vbml0b3IsXG4gICAgR2xvYmFsLFxuICAgIFVzZXJcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKmdsb2JhbHMgd2luZG93LCBnbG9iYWwsIHJlcXVpcmUqL1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXG5cdCAgICB2YXIgY3J5cHRvO1xuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGluIHdlYiB3b3JrZXIgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gc2VsZi5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3b3JrZXJcblx0ICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWxUaGlzLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIChleHBlcmltZW50YWwgSUUgMTEpIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tc0NyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5tc0NyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIGdsb2JhbCAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbC5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW1wb3J0IHZpYSByZXF1aXJlIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgIH1cblxuXHQgICAgLypcblx0ICAgICAqIENyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuXHQgICAgICpcblx0ICAgICAqIEFzIE1hdGgucmFuZG9tKCkgaXMgY3J5cHRvZ3JhcGhpY2FsbHkgbm90IHNhZmUgdG8gdXNlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcnlwdG9TZWN1cmVSYW5kb21JbnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKGNyeXB0bykge1xuXHQgICAgICAgICAgICAvLyBVc2UgZ2V0UmFuZG9tVmFsdWVzIG1ldGhvZCAoQnJvd3Nlcilcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF07XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBVc2UgcmFuZG9tQnl0ZXMgbWV0aG9kIChOb2RlSlMpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLnJhbmRvbUJ5dGVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoNCkucmVhZEludDMyTEUoKTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignTmF0aXZlIGNyeXB0byBtb2R1bGUgY291bGQgbm90IGJlIHVzZWQgdG8gZ2V0IHNlY3VyZSByYW5kb20gbnVtYmVyLicpO1xuXHQgICAgfTtcblxuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWxsIG9mIE9iamVjdC5jcmVhdGVcblxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fVxuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0U2lnQnl0ZXM7IGogKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaikgPj4+IDJdID0gdGhhdFdvcmRzW2ogPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goY3J5cHRvU2VjdXJlUmFuZG9tSW50KCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBCYXNpYyBKYXZhU2NyaXB0IEJOIGxpYnJhcnkgLSBzdWJzZXQgdXNlZnVsIGZvciBSU0EgZW5jcnlwdGlvbi5cblxuICAgIC8vIEJpdHMgcGVyIGRpZ2l0XG4gICAgdmFyIGRiaXRzO1xuXG4gICAgLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbiAgICB2YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG4gICAgdmFyIGpfbG0gPSAoKGNhbmFyeSYweGZmZmZmZik9PTB4ZWZjYWZlKTtcblxuICAgIC8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYykge1xuICAgICAgaWYoYSAhPSBudWxsKVxuICAgICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBhKSB0aGlzLmZyb21OdW1iZXIoYSxiLGMpO1xuICAgICAgICBlbHNlIGlmKGIgPT0gbnVsbCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBhKSB0aGlzLmZyb21TdHJpbmcoYSwyNTYpO1xuICAgICAgICBlbHNlIHRoaXMuZnJvbVN0cmluZyhhLGIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbiAgICBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuXG4gICAgLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuICAgIC8vIGMgaXMgaW5pdGlhbCBjYXJyeSwgcmV0dXJucyBmaW5hbCBjYXJyeS5cbiAgICAvLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4gICAgLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cblxuICAgIC8vIGFtMTogdXNlIGEgc2luZ2xlIG11bHQgYW5kIGRpdmlkZSB0byBnZXQgdGhlIGhpZ2ggYml0cyxcbiAgICAvLyBtYXggZGlnaXQgYml0cyBzaG91bGQgYmUgMjYgYmVjYXVzZVxuICAgIC8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbiAgICBmdW5jdGlvbiBhbTEoaSx4LHcsaixjLG4pIHtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCp0aGlzW2krK10rd1tqXStjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2LzB4NDAwMDAwMCk7XG4gICAgICAgIHdbaisrXSA9IHYmMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIGZ1bmN0aW9uIGFtMihpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDdmZmYsIHhoID0geD4+MTU7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTU7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHg3ZmZmKTw8MTUpK3dbal0rKGMmMHgzZmZmZmZmZik7XG4gICAgICAgIGMgPSAobD4+PjMwKSsobT4+PjE1KSt4aCpoKyhjPj4+MzApO1xuICAgICAgICB3W2orK10gPSBsJjB4M2ZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gQWx0ZXJuYXRlbHksIHNldCBtYXggZGlnaXQgYml0cyB0byAyOCBzaW5jZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgc2xvdyBkb3duIHdoZW4gZGVhbGluZyB3aXRoIDMyLWJpdCBudW1iZXJzLlxuICAgIGZ1bmN0aW9uIGFtMyhpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDNmZmYsIHhoID0geD4+MTQ7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHgzZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTQ7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHgzZmZmKTw8MTQpK3dbal0rYztcbiAgICAgICAgYyA9IChsPj4yOCkrKG0+PjE0KSt4aCpoO1xuICAgICAgICB3W2orK10gPSBsJjB4ZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0yO1xuICAgICAgZGJpdHMgPSAzMDtcbiAgICB9XG4gICAgZWxzZSBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgIT0gXCJOZXRzY2FwZVwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTE7XG4gICAgICBkYml0cyA9IDI2O1xuICAgIH1cbiAgICBlbHNlIHsgLy8gTW96aWxsYS9OZXRzY2FwZSBzZWVtcyB0byBwcmVmZXIgYW0zXG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMztcbiAgICAgIGRiaXRzID0gMjg7XG4gICAgfVxuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuREIgPSBkYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMTw8ZGJpdHMpLTEpO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDE8PGRiaXRzKTtcblxuICAgIHZhciBCSV9GUCA9IDUyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkZWID0gTWF0aC5wb3coMixCSV9GUCk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjEgPSBCSV9GUC1kYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMiA9IDIqZGJpdHMtQklfRlA7XG5cbiAgICAvLyBEaWdpdCBjb252ZXJzaW9uc1xuICAgIHZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgdmFyIEJJX1JDID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIHJyLHZ2O1xuICAgIHJyID0gXCIwXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAwOyB2diA8PSA5OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJhXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiQVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG5cbiAgICBmdW5jdGlvbiBpbnQyY2hhcihuKSB7IHJldHVybiBCSV9STS5jaGFyQXQobik7IH1cbiAgICBmdW5jdGlvbiBpbnRBdChzLGkpIHtcbiAgICAgIHZhciBjID0gQklfUkNbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIHJldHVybiAoYz09bnVsbCk/LTE6YztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb3B5IHRoaXMgdG8gclxuICAgIGZ1bmN0aW9uIGJucENvcHlUbyhyKSB7XG4gICAgICBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIGludGVnZXIgdmFsdWUgeCwgLURWIDw9IHggPCBEVlxuICAgIGZ1bmN0aW9uIGJucEZyb21JbnQoeCkge1xuICAgICAgdGhpcy50ID0gMTtcbiAgICAgIHRoaXMucyA9ICh4PDApPy0xOjA7XG4gICAgICBpZih4ID4gMCkgdGhpc1swXSA9IHg7XG4gICAgICBlbHNlIGlmKHggPCAtMSkgdGhpc1swXSA9IHgrdGhpcy5EVjtcbiAgICAgIGVsc2UgdGhpcy50ID0gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYmlnaW50IGluaXRpYWxpemVkIHRvIHZhbHVlXG4gICAgZnVuY3Rpb24gbmJ2KGkpIHsgdmFyIHIgPSBuYmkoKTsgci5mcm9tSW50KGkpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gc3RyaW5nIGFuZCByYWRpeFxuICAgIGZ1bmN0aW9uIGJucEZyb21TdHJpbmcocyxiKSB7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDI1NikgayA9IDg7IC8vIGJ5dGUgYXJyYXlcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHsgdGhpcy5mcm9tUmFkaXgocyxiKTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnQgPSAwO1xuICAgICAgdGhpcy5zID0gMDtcbiAgICAgIHZhciBpID0gcy5sZW5ndGgsIG1pID0gZmFsc2UsIHNoID0gMDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHZhciB4ID0gKGs9PTgpP3NbaV0mMHhmZjppbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2ggPT0gMClcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IHg7XG4gICAgICAgIGVsc2UgaWYoc2grayA+IHRoaXMuREIpIHtcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSAoeCYoKDE8PCh0aGlzLkRCLXNoKSktMSkpPDxzaDtcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4Pj4odGhpcy5EQi1zaCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSB4PDxzaDtcbiAgICAgICAgc2ggKz0gaztcbiAgICAgICAgaWYoc2ggPj0gdGhpcy5EQikgc2ggLT0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGsgPT0gOCAmJiAoc1swXSYweDgwKSAhPSAwKSB7XG4gICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICBpZihzaCA+IDApIHRoaXNbdGhpcy50LTFdIHw9ICgoMTw8KHRoaXMuREItc2gpKS0xKTw8c2g7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgZnVuY3Rpb24gYm5wQ2xhbXAoKSB7XG4gICAgICB2YXIgYyA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgd2hpbGUodGhpcy50ID4gMCAmJiB0aGlzW3RoaXMudC0xXSA9PSBjKSAtLXRoaXMudDtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIGluIGdpdmVuIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5Ub1N0cmluZyhiKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gXCItXCIrdGhpcy5uZWdhdGUoKS50b1N0cmluZyhiKTtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgdmFyIGttID0gKDE8PGspLTEsIGQsIG0gPSBmYWxzZSwgciA9IFwiXCIsIGkgPSB0aGlzLnQ7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklaztcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSA+IDApIHsgbSA9IHRydWU7IHIgPSBpbnQyY2hhcihkKTsgfVxuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgaykge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoay1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT1rKSkma207XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZCA+IDApIG0gPSB0cnVlO1xuICAgICAgICAgIGlmKG0pIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtP3I6XCIwXCI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBmdW5jdGlvbiBibk5lZ2F0ZSgpIHsgdmFyIHIgPSBuYmkoKTsgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBmdW5jdGlvbiBibkFicygpIHsgcmV0dXJuICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gKyBpZiB0aGlzID4gYSwgLSBpZiB0aGlzIDwgYSwgMCBpZiBlcXVhbFxuICAgIGZ1bmN0aW9uIGJuQ29tcGFyZVRvKGEpIHtcbiAgICAgIHZhciByID0gdGhpcy5zLWEucztcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuIHI7XG4gICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgIHIgPSBpLWEudDtcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuICh0aGlzLnM8MCk/LXI6cjtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSBpZigocj10aGlzW2ldLWFbaV0pICE9IDApIHJldHVybiByO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbiAgICBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgICB2YXIgciA9IDEsIHQ7XG4gICAgICBpZigodD14Pj4+MTYpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh0PXg+PjgpICE9IDApIHsgeCA9IHQ7IHIgKz0gODsgfVxuICAgICAgaWYoKHQ9eD4+NCkgIT0gMCkgeyB4ID0gdDsgciArPSA0OyB9XG4gICAgICBpZigodD14Pj4yKSAhPSAwKSB7IHggPSB0OyByICs9IDI7IH1cbiAgICAgIGlmKCh0PXg+PjEpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHRoZSBudW1iZXIgb2YgYml0cyBpbiBcInRoaXNcIlxuICAgIGZ1bmN0aW9uIGJuQml0TGVuZ3RoKCkge1xuICAgICAgaWYodGhpcy50IDw9IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV4odGhpcy5zJnRoaXMuRE0pKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpK25dID0gdGhpc1tpXTtcbiAgICAgIGZvcihpID0gbi0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByLnQgPSB0aGlzLnQrbjtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRFJTaGlmdFRvKG4scikge1xuICAgICAgZm9yKHZhciBpID0gbjsgaSA8IHRoaXMudDsgKytpKSByW2ktbl0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gTWF0aC5tYXgodGhpcy50LW4sMCk7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJucExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8Y2JzKS0xO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpLCBjID0gKHRoaXMuczw8YnMpJnRoaXMuRE0sIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkge1xuICAgICAgICByW2krZHMrMV0gPSAodGhpc1tpXT4+Y2JzKXxjO1xuICAgICAgICBjID0gKHRoaXNbaV0mYm0pPDxicztcbiAgICAgIH1cbiAgICAgIGZvcihpID0gZHMtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgcltkc10gPSBjO1xuICAgICAgci50ID0gdGhpcy50K2RzKzE7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJucFJTaGlmdFRvKG4scikge1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoZHMgPj0gdGhpcy50KSB7IHIudCA9IDA7IHJldHVybjsgfVxuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8YnMpLTE7XG4gICAgICByWzBdID0gdGhpc1tkc10+PmJzO1xuICAgICAgZm9yKHZhciBpID0gZHMrMTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgIHJbaS1kcy0xXSB8PSAodGhpc1tpXSZibSk8PGNicztcbiAgICAgICAgcltpLWRzXSA9IHRoaXNbaV0+PmJzO1xuICAgICAgfVxuICAgICAgaWYoYnMgPiAwKSByW3RoaXMudC1kcy0xXSB8PSAodGhpcy5zJmJtKTw8Y2JzO1xuICAgICAgci50ID0gdGhpcy50LWRzO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJucFN1YlRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldLWFbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjIC09IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjIC09IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIGVsc2UgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICogYSwgciAhPSB0aGlzLGEgKEhBQyAxNC4xMilcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlUbyhhLHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKSwgeSA9IGEuYWJzKCk7XG4gICAgICB2YXIgaSA9IHgudDtcbiAgICAgIHIudCA9IGkreS50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeS50OyArK2kpIHJbaSt4LnRdID0geC5hbSgwLHlbaV0scixpLDAseC50KTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZih0aGlzLnMgIT0gYS5zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpc14yLCByICE9IHRoaXMgKEhBQyAxNC4xNilcbiAgICBmdW5jdGlvbiBibnBTcXVhcmVUbyhyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICB2YXIgaSA9IHIudCA9IDIqeC50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeC50LTE7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICAgIGlmKChyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSkgPj0geC5EVikge1xuICAgICAgICAgIHJbaSt4LnRdIC09IHguRFY7XG4gICAgICAgICAgcltpK3gudCsxXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHIudCA+IDApIHJbci50LTFdICs9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGRpdmlkZSB0aGlzIGJ5IG0sIHF1b3RpZW50IGFuZCByZW1haW5kZXIgdG8gcSwgciAoSEFDIDE0LjIwKVxuICAgIC8vIHIgIT0gcSwgdGhpcyAhPSBtLiAgcSBvciByIG1heSBiZSBudWxsLlxuICAgIGZ1bmN0aW9uIGJucERpdlJlbVRvKG0scSxyKSB7XG4gICAgICB2YXIgcG0gPSBtLmFicygpO1xuICAgICAgaWYocG0udCA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgaWYocHQudCA8IHBtLnQpIHtcbiAgICAgICAgaWYocSAhPSBudWxsKSBxLmZyb21JbnQoMCk7XG4gICAgICAgIGlmKHIgIT0gbnVsbCkgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHIgPT0gbnVsbCkgciA9IG5iaSgpO1xuICAgICAgdmFyIHkgPSBuYmkoKSwgdHMgPSB0aGlzLnMsIG1zID0gbS5zO1xuICAgICAgdmFyIG5zaCA9IHRoaXMuREItbmJpdHMocG1bcG0udC0xXSk7ICAgLy8gbm9ybWFsaXplIG1vZHVsdXNcbiAgICAgIGlmKG5zaCA+IDApIHsgcG0ubFNoaWZ0VG8obnNoLHkpOyBwdC5sU2hpZnRUbyhuc2gscik7IH1cbiAgICAgIGVsc2UgeyBwbS5jb3B5VG8oeSk7IHB0LmNvcHlUbyhyKTsgfVxuICAgICAgdmFyIHlzID0geS50O1xuICAgICAgdmFyIHkwID0geVt5cy0xXTtcbiAgICAgIGlmKHkwID09IDApIHJldHVybjtcbiAgICAgIHZhciB5dCA9IHkwKigxPDx0aGlzLkYxKSsoKHlzPjEpP3lbeXMtMl0+PnRoaXMuRjI6MCk7XG4gICAgICB2YXIgZDEgPSB0aGlzLkZWL3l0LCBkMiA9ICgxPDx0aGlzLkYxKS95dCwgZSA9IDE8PHRoaXMuRjI7XG4gICAgICB2YXIgaSA9IHIudCwgaiA9IGkteXMsIHQgPSAocT09bnVsbCk/bmJpKCk6cTtcbiAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICBpZihyLmNvbXBhcmVUbyh0KSA+PSAwKSB7XG4gICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgfVxuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpO1xuICAgICAgdC5zdWJUbyh5LHkpOyAgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgIHdoaWxlKHkudCA8IHlzKSB5W3kudCsrXSA9IDA7XG4gICAgICB3aGlsZSgtLWogPj0gMCkge1xuICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICB2YXIgcWQgPSAoclstLWldPT15MCk/dGhpcy5ETTpNYXRoLmZsb29yKHJbaV0qZDErKHJbaS0xXStlKSpkMik7XG4gICAgICAgIGlmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKSA8IHFkKSB7ICAgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgICAgIHdoaWxlKHJbaV0gPCAtLXFkKSByLnN1YlRvKHQscik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHEgIT0gbnVsbCkge1xuICAgICAgICByLmRyU2hpZnRUbyh5cyxxKTtcbiAgICAgICAgaWYodHMgIT0gbXMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpO1xuICAgICAgfVxuICAgICAgci50ID0geXM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZihuc2ggPiAwKSByLnJTaGlmdFRvKG5zaCxyKTsgLy8gRGVub3JtYWxpemUgcmVtYWluZGVyXG4gICAgICBpZih0cyA8IDApIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBmdW5jdGlvbiBibk1vZChhKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwscik7XG4gICAgICBpZih0aGlzLnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSBhLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHsgdGhpcy5tID0gbTsgfVxuICAgIGZ1bmN0aW9uIGNDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgcmV0dXJuIHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIGNSZWR1Y2UoeCkgeyB4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpOyB9XG4gICAgZnVuY3Rpb24gY011bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuICAgIGZ1bmN0aW9uIGNTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBjQ29udmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBjUmV2ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4gXCItMS90aGlzICUgMl5EQlwiOyB1c2VmdWwgZm9yIE1vbnQuIHJlZHVjdGlvblxuICAgIC8vIGp1c3RpZmljYXRpb246XG4gICAgLy8gICAgICAgICB4eSA9PSAxIChtb2QgbSlcbiAgICAvLyAgICAgICAgIHh5ID0gIDEra21cbiAgICAvLyAgIHh5KDIteHkpID0gKDEra20pKDEta20pXG4gICAgLy8geFt5KDIteHkpXSA9IDEta14ybV4yXG4gICAgLy8geFt5KDIteHkpXSA9PSAxIChtb2QgbV4yKVxuICAgIC8vIGlmIHkgaXMgMS94IG1vZCBtLCB0aGVuIHkoMi14eSkgaXMgMS94IG1vZCBtXjJcbiAgICAvLyBzaG91bGQgcmVkdWNlIHggYW5kIHkoMi14eSkgYnkgbV4yIGF0IGVhY2ggc3RlcCB0byBrZWVwIHNpemUgYm91bmRlZC5cbiAgICAvLyBKUyBtdWx0aXBseSBcIm92ZXJmbG93c1wiIGRpZmZlcmVudGx5IGZyb20gQy9DKyssIHNvIGNhcmUgaXMgbmVlZGVkIGhlcmUuXG4gICAgZnVuY3Rpb24gYm5wSW52RGlnaXQoKSB7XG4gICAgICBpZih0aGlzLnQgPCAxKSByZXR1cm4gMDtcbiAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgIGlmKCh4JjEpID09IDApIHJldHVybiAwO1xuICAgICAgdmFyIHkgPSB4JjM7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXjJcbiAgICAgIHkgPSAoeSooMi0oeCYweGYpKnkpKSYweGY7IC8vIHkgPT0gMS94IG1vZCAyXjRcbiAgICAgIHkgPSAoeSooMi0oeCYweGZmKSp5KSkmMHhmZjsgICAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICB5ID0gKHkqKDItKCgoeCYweGZmZmYpKnkpJjB4ZmZmZikpKSYweGZmZmY7ICAgIC8vIHkgPT0gMS94IG1vZCAyXjE2XG4gICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgIHkgPSAoeSooMi14KnkldGhpcy5EVikpJXRoaXMuRFY7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAvLyB3ZSByZWFsbHkgd2FudCB0aGUgbmVnYXRpdmUgaW52ZXJzZSwgYW5kIC1EViA8IHkgPCBEVlxuICAgICAgcmV0dXJuICh5PjApP3RoaXMuRFYteToteTtcbiAgICB9XG5cbiAgICAvLyBNb250Z29tZXJ5IHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIE1vbnRnb21lcnkobSkge1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICB0aGlzLm1wbCA9IHRoaXMubXAmMHg3ZmZmO1xuICAgICAgdGhpcy5tcGggPSB0aGlzLm1wPj4xNTtcbiAgICAgIHRoaXMudW0gPSAoMTw8KG0uREItMTUpKS0xO1xuICAgICAgdGhpcy5tdDIgPSAyKm0udDtcbiAgICB9XG5cbiAgICAvLyB4UiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRDb252ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKTtcbiAgICAgIHIuZGl2UmVtVG8odGhpcy5tLG51bGwscik7XG4gICAgICBpZih4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB0aGlzLm0uc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHgvUiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRSZXZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguY29weVRvKHIpO1xuICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4ID0geC9SIG1vZCBtIChIQUMgMTQuMzIpXG4gICAgZnVuY3Rpb24gbW9udFJlZHVjZSh4KSB7XG4gICAgICB3aGlsZSh4LnQgPD0gdGhpcy5tdDIpIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICB4W3gudCsrXSA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAvLyBmYXN0ZXIgd2F5IG9mIGNhbGN1bGF0aW5nIHUwID0geFtpXSptcCBtb2QgRFZcbiAgICAgICAgdmFyIGogPSB4W2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIHUwID0gKGoqdGhpcy5tcGwrKCgoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsKSZ0aGlzLnVtKTw8MTUpKSZ4LkRNO1xuICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgaiA9IGkrdGhpcy5tLnQ7XG4gICAgICAgIHhbal0gKz0gdGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO1xuICAgICAgICAvLyBwcm9wYWdhdGUgY2FycnlcbiAgICAgICAgd2hpbGUoeFtqXSA+PSB4LkRWKSB7IHhbal0gLT0geC5EVjsgeFsrK2pdKys7IH1cbiAgICAgIH1cbiAgICAgIHguY2xhbXAoKTtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LHgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBtb250U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgZnVuY3Rpb24gbW9udE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydCA9IG1vbnRDb252ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlID0gbW9udFJlZHVjZTtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIGZ1bmN0aW9uIGJucElzRXZlbigpIHsgcmV0dXJuICgodGhpcy50PjApPyh0aGlzWzBdJjEpOnRoaXMucykgPT0gMDsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpc15lLCBlIDwgMl4zMiwgZG9pbmcgc3FyIGFuZCBtdWwgd2l0aCBcInJcIiAoSEFDIDE0Ljc5KVxuICAgIGZ1bmN0aW9uIGJucEV4cChlLHopIHtcbiAgICAgIGlmKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICB2YXIgciA9IG5iaSgpLCByMiA9IG5iaSgpLCBnID0gei5jb252ZXJ0KHRoaXMpLCBpID0gbmJpdHMoZSktMTtcbiAgICAgIGcuY29weVRvKHIpO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgei5zcXJUbyhyLHIyKTtcbiAgICAgICAgaWYoKGUmKDE8PGkpKSA+IDApIHoubXVsVG8ocjIsZyxyKTtcbiAgICAgICAgZWxzZSB7IHZhciB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3dJbnQoZSxtKSB7XG4gICAgICB2YXIgejtcbiAgICAgIGlmKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkgeiA9IG5ldyBDbGFzc2ljKG0pOyBlbHNlIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cChlLHopO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvcHlUbyA9IGJucENvcHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50ID0gYm5wRnJvbUludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGFtcCA9IGJucENsYW1wO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbyA9IGJucERMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kclNoaWZ0VG8gPSBibnBEUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG8gPSBibnBMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbyA9IGJucFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvID0gYm5wU3ViVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBibnBTcXVhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGJucERpdlJlbVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gYm5Ub1N0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBibkNvbXBhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcblxuICAgIC8vIFwiY29uc3RhbnRzXCJcbiAgICBCaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG4gICAgQmlnSW50ZWdlci5PTkUgPSBuYnYoMSk7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUtMjAwOSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBFeHRlbmRlZCBKYXZhU2NyaXB0IEJOIGZ1bmN0aW9ucywgcmVxdWlyZWQgZm9yIFJTQSBwcml2YXRlIG9wcy5cblxuICAgIC8vIFZlcnNpb24gMS4xOiBuZXcgQmlnSW50ZWdlcihcIjBcIiwgMTApIHJldHVybnMgXCJwcm9wZXJcIiB6ZXJvXG4gICAgLy8gVmVyc2lvbiAxLjI6IHNxdWFyZSgpIEFQSSwgaXNQcm9iYWJsZVByaW1lIGZpeFxuXG4gICAgLy8gKHB1YmxpYylcbiAgICBmdW5jdGlvbiBibkNsb25lKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmNvcHlUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgZnVuY3Rpb24gYm5JbnRWYWx1ZSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHtcbiAgICAgICAgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdLXRoaXMuRFY7XG4gICAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPCAzMlxuICAgICAgcmV0dXJuICgodGhpc1sxXSYoKDE8PCgzMi10aGlzLkRCKSktMSkpPDx0aGlzLkRCKXx0aGlzWzBdO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgZnVuY3Rpb24gYm5CeXRlVmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDI0KT4+MjQ7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBzaG9ydCAoYXNzdW1lcyBEQj49MTYpXG4gICAgZnVuY3Rpb24gYm5TaG9ydFZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwxNik+PjE2OyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgZnVuY3Rpb24gYm5wQ2h1bmtTaXplKHIpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSk7IH1cblxuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgZnVuY3Rpb24gYm5TaWdOdW0oKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gLTE7XG4gICAgICBlbHNlIGlmKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSByZXR1cm4gMDtcbiAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBUb1JhZGl4KGIpIHtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgaWYodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikgcmV0dXJuIFwiMFwiO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgYSA9IE1hdGgucG93KGIsY3MpO1xuICAgICAgdmFyIGQgPSBuYnYoYSksIHkgPSBuYmkoKSwgeiA9IG5iaSgpLCByID0gXCJcIjtcbiAgICAgIHRoaXMuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgd2hpbGUoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgciA9IChhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgeS5kaXZSZW1UbyhkLHkseik7XG4gICAgICB9XG4gICAgICByZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpICsgcjtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IGZyb20gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wRnJvbVJhZGl4KHMsYikge1xuICAgICAgdGhpcy5mcm9tSW50KDApO1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBkID0gTWF0aC5wb3coYixjcyksIG1pID0gZmFsc2UsIGogPSAwLCB3ID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB4ID0gaW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIiAmJiB0aGlzLnNpZ251bSgpID09IDApIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gYip3K3g7XG4gICAgICAgIGlmKCsraiA+PSBjcykge1xuICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIHcgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihqID4gMCkge1xuICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKTtcbiAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICB9XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gYm5wRnJvbU51bWJlcihhLGIsYykge1xuICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgaWYoYSA8IDIpIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsYyk7XG4gICAgICAgICAgaWYoIXRoaXMudGVzdEJpdChhLTEpKSAgICAvLyBmb3JjZSBNU0Igc2V0XG4gICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKTtcbiAgICAgICAgICBpZih0aGlzLmlzRXZlbigpKSB0aGlzLmRBZGRPZmZzZXQoMSwwKTsgLy8gZm9yY2Ugb2RkXG4gICAgICAgICAgd2hpbGUoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMiwwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxSTkcpXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KCksIHQgPSBhJjc7XG4gICAgICAgIHgubGVuZ3RoID0gKGE+PjMpKzE7XG4gICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICBpZih0ID4gMCkgeFswXSAmPSAoKDE8PHQpLTEpOyBlbHNlIHhbMF0gPSAwO1xuICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwyNTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGNvbnZlcnQgdG8gYmlnZW5kaWFuIGJ5dGUgYXJyYXlcbiAgICBmdW5jdGlvbiBiblRvQnl0ZUFycmF5KCkge1xuICAgICAgdmFyIGkgPSB0aGlzLnQsIHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJbMF0gPSB0aGlzLnM7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklOCwgZCwgayA9IDA7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgIT0gKHRoaXMucyZ0aGlzLkRNKT4+cClcbiAgICAgICAgICByW2srK10gPSBkfCh0aGlzLnM8PCh0aGlzLkRCLXApKTtcbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IDgpIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KDgtcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09OCkpJjB4ZmY7XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKGQmMHg4MCkgIT0gMCkgZCB8PSAtMjU2O1xuICAgICAgICAgIGlmKGsgPT0gMCAmJiAodGhpcy5zJjB4ODApICE9IChkJjB4ODApKSArK2s7XG4gICAgICAgICAgaWYoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHJbaysrXSA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJuRXF1YWxzKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPT0wKTsgfVxuICAgIGZ1bmN0aW9uIGJuTWluKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPDApP3RoaXM6YTsgfVxuICAgIGZ1bmN0aW9uIGJuTWF4KGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPjApP3RoaXM6YTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBmdW5jdGlvbiBibnBCaXR3aXNlVG8oYSxvcCxyKSB7XG4gICAgICB2YXIgaSwgZiwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbTsgKytpKSByW2ldID0gb3AodGhpc1tpXSxhW2ldKTtcbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBmID0gYS5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gb3AodGhpc1tpXSxmKTtcbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGYgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgYS50OyArK2kpIHJbaV0gPSBvcChmLGFbaV0pO1xuICAgICAgICByLnQgPSBhLnQ7XG4gICAgICB9XG4gICAgICByLnMgPSBvcCh0aGlzLnMsYS5zKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgYVxuICAgIGZ1bmN0aW9uIG9wX2FuZCh4LHkpIHsgcmV0dXJuIHgmeTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgYVxuICAgIGZ1bmN0aW9uIG9wX29yKHgseSkgeyByZXR1cm4geHx5OyB9XG4gICAgZnVuY3Rpb24gYm5PcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gYVxuICAgIGZ1bmN0aW9uIG9wX3hvcih4LHkpIHsgcmV0dXJuIHheeTsgfVxuICAgIGZ1bmN0aW9uIGJuWG9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF94b3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfmFcbiAgICBmdW5jdGlvbiBvcF9hbmRub3QoeCx5KSB7IHJldHVybiB4Jn55OyB9XG4gICAgZnVuY3Rpb24gYm5BbmROb3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZG5vdCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIH50aGlzXG4gICAgZnVuY3Rpb24gYm5Ob3QoKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gdGhpcy5ETSZ+dGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0TGVmdChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMuclNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5sU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdFJpZ2h0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5sU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLnJTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaW5kZXggb2YgbG93ZXN0IDEtYml0IGluIHgsIHggPCAyXjMxXG4gICAgZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgICBpZih4ID09IDApIHJldHVybiAtMTtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIGlmKCh4JjB4ZmZmZikgPT0gMCkgeyB4ID4+PSAxNjsgciArPSAxNjsgfVxuICAgICAgaWYoKHgmMHhmZikgPT0gMCkgeyB4ID4+PSA4OyByICs9IDg7IH1cbiAgICAgIGlmKCh4JjB4ZikgPT0gMCkgeyB4ID4+PSA0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh4JjMpID09IDApIHsgeCA+Pj0gMjsgciArPSAyOyB9XG4gICAgICBpZigoeCYxKSA9PSAwKSArK3I7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBmdW5jdGlvbiBibkdldExvd2VzdFNldEJpdCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSlcbiAgICAgICAgaWYodGhpc1tpXSAhPSAwKSByZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gdGhpcy50KnRoaXMuREI7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuICAgIGZ1bmN0aW9uIGNiaXQoeCkge1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgd2hpbGUoeCAhPSAwKSB7IHggJj0geC0xOyArK3I7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBudW1iZXIgb2Ygc2V0IGJpdHNcbiAgICBmdW5jdGlvbiBibkJpdENvdW50KCkge1xuICAgICAgdmFyIHIgPSAwLCB4ID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHIgKz0gY2JpdCh0aGlzW2ldXngpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBmdW5jdGlvbiBiblRlc3RCaXQobikge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihqID49IHRoaXMudCkgcmV0dXJuKHRoaXMucyE9MCk7XG4gICAgICByZXR1cm4oKHRoaXNbal0mKDE8PChuJXRoaXMuREIpKSkhPTApO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgb3AgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5wQ2hhbmdlQml0KG4sb3ApIHtcbiAgICAgIHZhciByID0gQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO1xuICAgICAgdGhpcy5iaXR3aXNlVG8ocixvcCxyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCAoMTw8bilcbiAgICBmdW5jdGlvbiBiblNldEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX29yKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBmdW5jdGlvbiBibkNsZWFyQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfYW5kbm90KTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuRmxpcEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcik7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJucEFkZFRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldK2FbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjICs9IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgKz0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIGVsc2UgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5BZGQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmFkZFRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJuU3VidHJhY3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnN1YlRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIGZ1bmN0aW9uIGJuTXVsdGlwbHkoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLm11bHRpcGx5VG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeMlxuICAgIGZ1bmN0aW9uIGJuU3F1YXJlKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnNxdWFyZVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAvIGFcbiAgICBmdW5jdGlvbiBibkRpdmlkZShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxyLG51bGwpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBmdW5jdGlvbiBiblJlbWFpbmRlcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgZnVuY3Rpb24gYm5EaXZpZGVBbmRSZW1haW5kZXIoYSkge1xuICAgICAgdmFyIHEgPSBuYmkoKSwgciA9IG5iaSgpO1xuICAgICAgdGhpcy5kaXZSZW1UbyhhLHEscik7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KHEscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBmdW5jdGlvbiBibnBETXVsdGlwbHkobikge1xuICAgICAgdGhpc1t0aGlzLnRdID0gdGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpO1xuICAgICAgKyt0aGlzLnQ7XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIGZ1bmN0aW9uIGJucERBZGRPZmZzZXQobix3KSB7XG4gICAgICBpZihuID09IDApIHJldHVybjtcbiAgICAgIHdoaWxlKHRoaXMudCA8PSB3KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICB0aGlzW3ddICs9IG47XG4gICAgICB3aGlsZSh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgdGhpc1t3XSAtPSB0aGlzLkRWO1xuICAgICAgICBpZigrK3cgPj0gdGhpcy50KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgICsrdGhpc1t3XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBIFwibnVsbFwiIHJlZHVjZXJcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge31cbiAgICBmdW5jdGlvbiBuTm9wKHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBuTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IH1cbiAgICBmdW5jdGlvbiBuU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IH1cblxuICAgIE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBmdW5jdGlvbiBiblBvdyhlKSB7IHJldHVybiB0aGlzLmV4cChlLG5ldyBOdWxsRXhwKCkpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gbG93ZXIgbiB3b3JkcyBvZiBcInRoaXMgKiBhXCIsIGEudCA8PSBuXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5TG93ZXJUbyhhLG4scikge1xuICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQrYS50LG4pO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgci50ID0gaTtcbiAgICAgIHdoaWxlKGkgPiAwKSByWy0taV0gPSAwO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IoaiA9IHIudC10aGlzLnQ7IGkgPCBqOyArK2kpIHJbaSt0aGlzLnRdID0gdGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtcbiAgICAgIGZvcihqID0gTWF0aC5taW4oYS50LG4pOyBpIDwgajsgKytpKSB0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBcInRoaXMgKiBhXCIgd2l0aG91dCBsb3dlciBuIHdvcmRzLCBuID4gMFxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVVwcGVyVG8oYSxuLHIpIHtcbiAgICAgIC0tbjtcbiAgICAgIHZhciBpID0gci50ID0gdGhpcy50K2EudC1uO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSBNYXRoLm1heChuLXRoaXMudCwwKTsgaSA8IGEudDsgKytpKVxuICAgICAgICByW3RoaXMudCtpLW5dID0gdGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIHIuZHJTaGlmdFRvKDEscik7XG4gICAgfVxuXG4gICAgLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIEJhcnJldHQobSkge1xuICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgdGhpcy5xMyA9IG5iaSgpO1xuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpO1xuICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0Q29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHgudCA+IDIqdGhpcy5tLnQpIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSBpZih4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkgcmV0dXJuIHg7XG4gICAgICBlbHNlIHsgdmFyIHIgPSBuYmkoKTsgeC5jb3B5VG8ocik7IHRoaXMucmVkdWNlKHIpOyByZXR1cm4gcjsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuXG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBmdW5jdGlvbiBiYXJyZXR0UmVkdWNlKHgpIHtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMik7XG4gICAgICBpZih4LnQgPiB0aGlzLm0udCsxKSB7IHgudCA9IHRoaXMubS50KzE7IHguY2xhbXAoKTsgfVxuICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpO1xuICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLHRoaXMubS50KzEsdGhpcy5yMik7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO1xuICAgICAgeC5zdWJUbyh0aGlzLnIyLHgpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0geCp5IG1vZCBtOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3coZSxtKSB7XG4gICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCksIGssIHIgPSBuYnYoMSksIHo7XG4gICAgICBpZihpIDw9IDApIHJldHVybiByO1xuICAgICAgZWxzZSBpZihpIDwgMTgpIGsgPSAxO1xuICAgICAgZWxzZSBpZihpIDwgNDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihpIDwgMTQ0KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoaSA8IDc2OCkgayA9IDU7XG4gICAgICBlbHNlIGsgPSA2O1xuICAgICAgaWYoaSA8IDgpXG4gICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgIGVsc2UgaWYobS5pc0V2ZW4oKSlcbiAgICAgICAgeiA9IG5ldyBCYXJyZXR0KG0pO1xuICAgICAgZWxzZVxuICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG5cbiAgICAgIC8vIHByZWNvbXB1dGF0aW9uXG4gICAgICB2YXIgZyA9IG5ldyBBcnJheSgpLCBuID0gMywgazEgPSBrLTEsIGttID0gKDE8PGspLTE7XG4gICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYoayA+IDEpIHtcbiAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgIHouc3FyVG8oZ1sxXSxnMik7XG4gICAgICAgIHdoaWxlKG4gPD0ga20pIHtcbiAgICAgICAgICBnW25dID0gbmJpKCk7XG4gICAgICAgICAgei5tdWxUbyhnMixnW24tMl0sZ1tuXSk7XG4gICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBqID0gZS50LTEsIHcsIGlzMSA9IHRydWUsIHIyID0gbmJpKCksIHQ7XG4gICAgICBpID0gbmJpdHMoZVtqXSktMTtcbiAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBpZihpID49IGsxKSB3ID0gKGVbal0+PihpLWsxKSkma207XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHcgPSAoZVtqXSYoKDE8PChpKzEpKS0xKSk8PChrMS1pKTtcbiAgICAgICAgICBpZihqID4gMCkgdyB8PSBlW2otMV0+Pih0aGlzLkRCK2ktazEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbiA9IGs7XG4gICAgICAgIHdoaWxlKCh3JjEpID09IDApIHsgdyA+Pj0gMTsgLS1uOyB9XG4gICAgICAgIGlmKChpIC09IG4pIDwgMCkgeyBpICs9IHRoaXMuREI7IC0tajsgfVxuICAgICAgICBpZihpczEpIHsgICAgLy8gcmV0ID09IDEsIGRvbid0IGJvdGhlciBzcXVhcmluZyBvciBtdWx0aXBseWluZyBpdFxuICAgICAgICAgIGdbd10uY29weVRvKHIpO1xuICAgICAgICAgIGlzMSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdoaWxlKG4gPiAxKSB7IHouc3FyVG8ocixyMik7IHouc3FyVG8ocjIscik7IG4gLT0gMjsgfVxuICAgICAgICAgIGlmKG4gPiAwKSB6LnNxclRvKHIscjIpOyBlbHNlIHsgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICAgICAgei5tdWxUbyhyMixnW3ddLHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUoaiA+PSAwICYmIChlW2pdJigxPDxpKSkgPT0gMCkge1xuICAgICAgICAgIHouc3FyVG8ocixyMik7IHQgPSByOyByID0gcjI7IHIyID0gdDtcbiAgICAgICAgICBpZigtLWkgPCAwKSB7IGkgPSB0aGlzLkRCLTE7IC0tajsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgZ2NkKHRoaXMsYSkgKEhBQyAxNC41NClcbiAgICBmdW5jdGlvbiBibkdDRChhKSB7XG4gICAgICB2YXIgeCA9ICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgeSA9IChhLnM8MCk/YS5uZWdhdGUoKTphLmNsb25lKCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh5KSA8IDApIHsgdmFyIHQgPSB4OyB4ID0geTsgeSA9IHQ7IH1cbiAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKSwgZyA9IHkuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihnIDwgMCkgcmV0dXJuIHg7XG4gICAgICBpZihpIDwgZykgZyA9IGk7XG4gICAgICBpZihnID4gMCkge1xuICAgICAgICB4LnJTaGlmdFRvKGcseCk7XG4gICAgICAgIHkuclNoaWZ0VG8oZyx5KTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKHguc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIGlmKChpID0geC5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB4LnJTaGlmdFRvKGkseCk7XG4gICAgICAgIGlmKChpID0geS5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB5LnJTaGlmdFRvKGkseSk7XG4gICAgICAgIGlmKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICB4LnN1YlRvKHkseCk7XG4gICAgICAgICAgeC5yU2hpZnRUbygxLHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHkuc3ViVG8oeCx5KTtcbiAgICAgICAgICB5LnJTaGlmdFRvKDEseSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGcgPiAwKSB5LmxTaGlmdFRvKGcseSk7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICUgbiwgbiA8IDJeMjZcbiAgICBmdW5jdGlvbiBibnBNb2RJbnQobikge1xuICAgICAgaWYobiA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciBkID0gdGhpcy5EViVuLCByID0gKHRoaXMuczwwKT9uLTE6MDtcbiAgICAgIGlmKHRoaXMudCA+IDApXG4gICAgICAgIGlmKGQgPT0gMCkgciA9IHRoaXNbMF0lbjtcbiAgICAgICAgZWxzZSBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHIgPSAoZCpyK3RoaXNbaV0pJW47XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAxL3RoaXMgJSBtIChIQUMgMTQuNjEpXG4gICAgZnVuY3Rpb24gYm5Nb2RJbnZlcnNlKG0pIHtcbiAgICAgIHZhciBhYyA9IG0uaXNFdmVuKCk7XG4gICAgICBpZigodGhpcy5pc0V2ZW4oKSAmJiBhYykgfHwgbS5zaWdudW0oKSA9PSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgdmFyIHUgPSBtLmNsb25lKCksIHYgPSB0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgYSA9IG5idigxKSwgYiA9IG5idigwKSwgYyA9IG5idigwKSwgZCA9IG5idigxKTtcbiAgICAgIHdoaWxlKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICB3aGlsZSh1LmlzRXZlbigpKSB7XG4gICAgICAgICAgdS5yU2hpZnRUbygxLHUpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYS5pc0V2ZW4oKSB8fCAhYi5pc0V2ZW4oKSkgeyBhLmFkZFRvKHRoaXMsYSk7IGIuc3ViVG8obSxiKTsgfVxuICAgICAgICAgICAgYS5yU2hpZnRUbygxLGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFiLmlzRXZlbigpKSBiLnN1YlRvKG0sYik7XG4gICAgICAgICAgYi5yU2hpZnRUbygxLGIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHYuaXNFdmVuKCkpIHtcbiAgICAgICAgICB2LnJTaGlmdFRvKDEsdik7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFjLmlzRXZlbigpIHx8ICFkLmlzRXZlbigpKSB7IGMuYWRkVG8odGhpcyxjKTsgZC5zdWJUbyhtLGQpOyB9XG4gICAgICAgICAgICBjLnJTaGlmdFRvKDEsYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWQuaXNFdmVuKCkpIGQuc3ViVG8obSxkKTtcbiAgICAgICAgICBkLnJTaGlmdFRvKDEsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodS5jb21wYXJlVG8odikgPj0gMCkge1xuICAgICAgICAgIHUuc3ViVG8odix1KTtcbiAgICAgICAgICBpZihhYykgYS5zdWJUbyhjLGEpO1xuICAgICAgICAgIGIuc3ViVG8oZCxiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2LnN1YlRvKHUsdik7XG4gICAgICAgICAgaWYoYWMpIGMuc3ViVG8oYSxjKTtcbiAgICAgICAgICBkLnN1YlRvKGIsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgaWYoZC5jb21wYXJlVG8obSkgPj0gMCkgcmV0dXJuIGQuc3VidHJhY3QobSk7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgZC5hZGRUbyhtLGQpOyBlbHNlIHJldHVybiBkO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIHJldHVybiBkLmFkZChtKTsgZWxzZSByZXR1cm4gZDtcbiAgICB9XG5cbiAgICB2YXIgbG93cHJpbWVzID0gWzIsMyw1LDcsMTEsMTMsMTcsMTksMjMsMjksMzEsMzcsNDEsNDMsNDcsNTMsNTksNjEsNjcsNzEsNzMsNzksODMsODksOTcsMTAxLDEwMywxMDcsMTA5LDExMywxMjcsMTMxLDEzNywxMzksMTQ5LDE1MSwxNTcsMTYzLDE2NywxNzMsMTc5LDE4MSwxOTEsMTkzLDE5NywxOTksMjExLDIyMywyMjcsMjI5LDIzMywyMzksMjQxLDI1MSwyNTcsMjYzLDI2OSwyNzEsMjc3LDI4MSwyODMsMjkzLDMwNywzMTEsMzEzLDMxNywzMzEsMzM3LDM0NywzNDksMzUzLDM1OSwzNjcsMzczLDM3OSwzODMsMzg5LDM5Nyw0MDEsNDA5LDQxOSw0MjEsNDMxLDQzMyw0MzksNDQzLDQ0OSw0NTcsNDYxLDQ2Myw0NjcsNDc5LDQ4Nyw0OTEsNDk5LDUwMyw1MDksNTIxLDUyMyw1NDEsNTQ3LDU1Nyw1NjMsNTY5LDU3MSw1NzcsNTg3LDU5Myw1OTksNjAxLDYwNyw2MTMsNjE3LDYxOSw2MzEsNjQxLDY0Myw2NDcsNjUzLDY1OSw2NjEsNjczLDY3Nyw2ODMsNjkxLDcwMSw3MDksNzE5LDcyNyw3MzMsNzM5LDc0Myw3NTEsNzU3LDc2MSw3NjksNzczLDc4Nyw3OTcsODA5LDgxMSw4MjEsODIzLDgyNyw4MjksODM5LDg1Myw4NTcsODU5LDg2Myw4NzcsODgxLDg4Myw4ODcsOTA3LDkxMSw5MTksOTI5LDkzNyw5NDEsOTQ3LDk1Myw5NjcsOTcxLDk3Nyw5ODMsOTkxLDk5N107XG4gICAgdmFyIGxwbGltID0gKDE8PDI2KS9sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXTtcblxuICAgIC8vIChwdWJsaWMpIHRlc3QgcHJpbWFsaXR5IHdpdGggY2VydGFpbnR5ID49IDEtLjVedFxuICAgIGZ1bmN0aW9uIGJuSXNQcm9iYWJsZVByaW1lKHQpIHtcbiAgICAgIHZhciBpLCB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV0pIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbG93cHJpbWVzLmxlbmd0aDsgKytpKVxuICAgICAgICAgIGlmKHhbMF0gPT0gbG93cHJpbWVzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoeC5pc0V2ZW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaSA9IDE7XG4gICAgICB3aGlsZShpIDwgbG93cHJpbWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXSwgaiA9IGkrMTtcbiAgICAgICAgd2hpbGUoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSBtICo9IGxvd3ByaW1lc1tqKytdO1xuICAgICAgICBtID0geC5tb2RJbnQobSk7XG4gICAgICAgIHdoaWxlKGkgPCBqKSBpZihtJWxvd3ByaW1lc1tpKytdID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWYgcHJvYmFibHkgcHJpbWUgKEhBQyA0LjI0LCBNaWxsZXItUmFiaW4pXG4gICAgZnVuY3Rpb24gYm5wTWlsbGVyUmFiaW4odCkge1xuICAgICAgdmFyIG4xID0gdGhpcy5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICB2YXIgayA9IG4xLmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoayA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgciA9IG4xLnNoaWZ0UmlnaHQoayk7XG4gICAgICB0ID0gKHQrMSk+PjE7XG4gICAgICBpZih0ID4gbG93cHJpbWVzLmxlbmd0aCkgdCA9IGxvd3ByaW1lcy5sZW5ndGg7XG4gICAgICB2YXIgYSA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHQ7ICsraSkge1xuICAgICAgICAvL1BpY2sgYmFzZXMgYXQgcmFuZG9tLCBpbnN0ZWFkIG9mIHN0YXJ0aW5nIGF0IDJcbiAgICAgICAgYS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbG93cHJpbWVzLmxlbmd0aCldKTtcbiAgICAgICAgdmFyIHkgPSBhLm1vZFBvdyhyLHRoaXMpO1xuICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgICB3aGlsZShqKysgPCBrICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICB5ID0geS5tb2RQb3dJbnQoMix0aGlzKTtcbiAgICAgICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHkuY29tcGFyZVRvKG4xKSAhPSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGJucENodW5rU2l6ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4ID0gYm5wVG9SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBibnBGcm9tUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGJucEZyb21OdW1iZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0d2lzZVRvID0gYm5wQml0d2lzZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGJucENoYW5nZUJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbyA9IGJucEFkZFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGJucERNdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kQWRkT2Zmc2V0ID0gYm5wREFkZE9mZnNldDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBibnBNdWx0aXBseUxvd2VyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvID0gYm5wTXVsdGlwbHlVcHBlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGJucE1vZEludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGJucE1pbGxlclJhYmluO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xvbmUgPSBibkNsb25lO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludFZhbHVlID0gYm5JbnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ieXRlVmFsdWUgPSBibkJ5dGVWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlID0gYm5TaG9ydFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNpZ251bSA9IGJuU2lnTnVtO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gYm5Ub0J5dGVBcnJheTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBibkVxdWFscztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW4gPSBibk1pbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBibk1heDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBibkFuZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGJuT3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gYm5Yb3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gYm5BbmROb3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gYm5Ob3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gYm5TaGlmdExlZnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGJuU2hpZnRSaWdodDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBibkdldExvd2VzdFNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudCA9IGJuQml0Q291bnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGVzdEJpdCA9IGJuVGVzdEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQgPSBiblNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGJuQ2xlYXJCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGJuRmxpcEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBibkFkZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGJuU3VidHJhY3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBibk11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGJuRGl2aWRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IGJuUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGJuRGl2aWRlQW5kUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGJuTW9kUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludmVyc2UgPSBibk1vZEludmVyc2U7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gYm5Qb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2NkID0gYm5HQ0Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG5cbiAgICAvLyBKU0JOLXNwZWNpZmljIGV4dGVuc2lvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGJuU3F1YXJlO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBCYXJyZXR0IGZ1bmN0aW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuQmFycmV0dCA9IEJhcnJldHRcblxuICAgIC8vIEJpZ0ludGVnZXIgaW50ZXJmYWNlcyBub3QgaW1wbGVtZW50ZWQgaW4ganNibjpcblxuICAgIC8vIEJpZ0ludGVnZXIoaW50IHNpZ251bSwgYnl0ZVtdIG1hZ25pdHVkZSlcbiAgICAvLyBkb3VibGUgZG91YmxlVmFsdWUoKVxuICAgIC8vIGZsb2F0IGZsb2F0VmFsdWUoKVxuICAgIC8vIGludCBoYXNoQ29kZSgpXG4gICAgLy8gbG9uZyBsb25nVmFsdWUoKVxuICAgIC8vIHN0YXRpYyBCaWdJbnRlZ2VyIHZhbHVlT2YobG9uZyB2YWwpXG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG5cbiAgICAvLyBGb3IgYmVzdCByZXN1bHRzLCBwdXQgY29kZSBsaWtlXG4gICAgLy8gPGJvZHkgb25DbGljaz0ncm5nX3NlZWRfdGltZSgpOycgb25LZXlQcmVzcz0ncm5nX3NlZWRfdGltZSgpOyc+XG4gICAgLy8gaW4geW91ciBtYWluIEhUTUwgZG9jdW1lbnQuXG5cbiAgICB2YXIgcm5nX3N0YXRlO1xuICAgIHZhciBybmdfcG9vbDtcbiAgICB2YXIgcm5nX3BwdHI7XG5cbiAgICAvLyBNaXggaW4gYSAzMi1iaXQgaW50ZWdlciBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfaW50KHgpIHtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49IHggJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiA4KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDE2KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDI0KSAmIDI1NTtcbiAgICAgIGlmKHJuZ19wcHRyID49IHJuZ19wc2l6ZSkgcm5nX3BwdHIgLT0gcm5nX3BzaXplO1xuICAgIH1cblxuICAgIC8vIE1peCBpbiB0aGUgY3VycmVudCB0aW1lICh3L21pbGxpc2Vjb25kcykgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKSB7XG4gICAgICBybmdfc2VlZF9pbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cbiAgICBpZihybmdfcG9vbCA9PSBudWxsKSB7XG4gICAgICBybmdfcG9vbCA9IG5ldyBBcnJheSgpO1xuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgdmFyIHQ7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jcnlwdG8pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgLy8gVXNlIHdlYmNyeXB0byBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgdWEgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgICAgICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXModWEpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IDMyOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHVhW3RdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJOZXRzY2FwZVwiICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uIDwgXCI1XCIpIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGVudHJvcHkgKDI1NiBiaXRzKSBmcm9tIE5TNCBSTkcgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHogPSB3aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgei5sZW5ndGg7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gei5jaGFyQ29kZUF0KHQpICYgMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZShybmdfcHB0ciA8IHJuZ19wc2l6ZSkgeyAgLy8gZXh0cmFjdCBzb21lIHJhbmRvbW5lc3MgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHQgPSBNYXRoLmZsb29yKDY1NTM2ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCA+Pj4gODtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ICYgMjU1O1xuICAgICAgfVxuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcbiAgICAgIGlmKHJuZ19zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgICAgcm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuICAgICAgICBybmdfc3RhdGUuaW5pdChybmdfcG9vbCk7XG4gICAgICAgIGZvcihybmdfcHB0ciA9IDA7IHJuZ19wcHRyIDwgcm5nX3Bvb2wubGVuZ3RoOyArK3JuZ19wcHRyKVxuICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG4gICAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgICAgLy9ybmdfcG9vbCA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuICAgICAgcmV0dXJuIHJuZ19zdGF0ZS5uZXh0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlcyhiYSkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBiYS5sZW5ndGg7ICsraSkgYmFbaV0gPSBybmdfZ2V0X2J5dGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7fVxuXG4gICAgU2VjdXJlUmFuZG9tLnByb3RvdHlwZS5uZXh0Qnl0ZXMgPSBybmdfZ2V0X2J5dGVzO1xuXG4gICAgLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG5cbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgICB0aGlzLlMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFyY2ZvdXIgY29udGV4dCBmcm9tIGtleSwgYW4gYXJyYXkgb2YgaW50cywgZWFjaCBmcm9tIFswLi4yNTVdXG4gICAgZnVuY3Rpb24gQVJDNGluaXQoa2V5KSB7XG4gICAgICB2YXIgaSwgaiwgdDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKVxuICAgICAgICB0aGlzLlNbaV0gPSBpO1xuICAgICAgaiA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBqID0gKGogKyB0aGlzLlNbaV0gKyBrZXlbaSAlIGtleS5sZW5ndGhdKSAmIDI1NTtcbiAgICAgICAgdCA9IHRoaXMuU1tpXTtcbiAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICB0aGlzLlNbal0gPSB0O1xuICAgICAgfVxuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQVJDNG5leHQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMuaSA9ICh0aGlzLmkgKyAxKSAmIDI1NTtcbiAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICB0ID0gdGhpcy5TW3RoaXMuaV07XG4gICAgICB0aGlzLlNbdGhpcy5pXSA9IHRoaXMuU1t0aGlzLmpdO1xuICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgcmV0dXJuIHRoaXMuU1sodCArIHRoaXMuU1t0aGlzLmldKSAmIDI1NV07XG4gICAgfVxuXG4gICAgQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBBUkM0bmV4dDtcblxuICAgIC8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuICAgIGZ1bmN0aW9uIHBybmdfbmV3c3RhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcbiAgICB9XG5cbiAgICAvLyBQb29sIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQgYW5kIGdyZWF0ZXIgdGhhbiAzMi5cbiAgICAvLyBBbiBhcnJheSBvZiBieXRlcyB0aGUgc2l6ZSBvZiB0aGUgcG9vbCB3aWxsIGJlIHBhc3NlZCB0byBpbml0KClcbiAgICB2YXIgcm5nX3BzaXplID0gMjU2O1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuanNibiA9IHtcbiAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tXG4gICAgICAgIH07XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL1RpbWVyLmpzXCI7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcbiAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJpbmdcIiksXG4gICAgYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJlZFwiKSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPVxuICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG5cbiAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nID0gYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyO1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZCA9IGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyO1xuICB9XG5cbiAgbG9hZChjb250YWluZXIpIHtcbiAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiBhbmQgaXQgaGFzIGFuIGV4cGlyYXRpb25cbiAgICBpZiAoY29udGFpbmVyLmFjY2Vzc190b2tlbiAmJiBjb250YWluZXIuZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgZHVyYXRpb24gPSBjb250YWluZXIuZXhwaXJlc19pbjtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBhY2Nlc3MgdG9rZW4gcHJlc2VudCwgcmVtYWluaW5nIGR1cmF0aW9uOlwiLFxuICAgICAgICBkdXJhdGlvblxuICAgICAgKTtcblxuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV4cGlyaW5nIGlmIHdlIHN0aWxsIGhhdmUgdGltZVxuICAgICAgICBsZXQgZXhwaXJpbmcgPSBkdXJhdGlvbiAtIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgICAgICBpZiAoZXhwaXJpbmcgPD0gMCkge1xuICAgICAgICAgIGV4cGlyaW5nID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyaW5nIHRpbWVyIGluOlwiLFxuICAgICAgICAgIGV4cGlyaW5nXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuaW5pdChleHBpcmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBjYW5jZWxpbmcgZXhpc3RpbmcgZXhwaXJpbmcgdGltZXIgYmVjYXNlIHdlJ3JlIHBhc3QgZXhwaXJhdGlvbi5cIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcbiAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyZWQgdGltZXIgaW46XCIsXG4gICAgICAgIGV4cGlyZWRcbiAgICAgICk7XG4gICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcbiAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJBY2Nlc3NUb2tlbkV2ZW50cy51bmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBhY2Nlc3MgdG9rZW4gdGltZXJzXCJcbiAgICApO1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xuICB9XG5cbiAgYWRkQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuYWRkSGFuZGxlcihjYik7XG4gIH1cbiAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcucmVtb3ZlSGFuZGxlcihjYik7XG4gIH1cblxuICBhZGRBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcbiAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuYWRkSGFuZGxlcihjYik7XG4gIH1cbiAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGNsYXNzIENoZWNrU2Vzc2lvbklGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yID0gdHJ1ZSkge1xuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcbiAgICB0aGlzLl9zdG9wT25FcnJvciA9IHN0b3BPbkVycm9yO1xuXG4gICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCB1cmwuaW5kZXhPZihcIi8vXCIpICsgMik7XG4gICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgIC8vIHNob3RndW4gYXBwcm9hY2hcbiAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5fZnJhbWUud2lkdGggPSAwO1xuICAgIHRoaXMuX2ZyYW1lLmhlaWdodCA9IDA7XG5cbiAgICB0aGlzLl9mcmFtZS5zcmMgPSB1cmw7XG4gIH1cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2ZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xuICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuICBfbWVzc2FnZShlKSB7XG4gICAgaWYgKFxuICAgICAgZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxuICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICApIHtcbiAgICAgIGlmIChlLmRhdGEgPT09IFwiZXJyb3JcIikge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJDaGVja1Nlc3Npb25JRnJhbWU6IGVycm9yIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLl9zdG9wT25FcnJvcikge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJjaGFuZ2VkXCIpIHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBjaGFuZ2VkIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBcIiArXG4gICAgICAgICAgICBlLmRhdGEgK1xuICAgICAgICAgICAgXCIgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xuICAgIGlmICh0aGlzLl9zZXNzaW9uX3N0YXRlICE9PSBzZXNzaW9uX3N0YXRlKSB7XG4gICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RhcnRcIik7XG5cbiAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcblxuICAgICAgbGV0IHNlbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy5fY2xpZW50X2lkICsgXCIgXCIgKyB0aGlzLl9zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgIHRoaXMuX2ZyYW1lX29yaWdpblxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgLy8gdHJpZ2dlciBub3dcbiAgICAgIHNlbmQoKTtcblxuICAgICAgLy8gYW5kIHNldHVwIHRpbWVyXG4gICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChzZW5kLCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gbnVsbDtcblxuICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0b3BcIik7XG5cbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDbG9ja1NlcnZpY2Uge1xuICBnZXRFcG9jaFRpbWUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgoRGF0ZS5ub3coKSAvIDEwMDApIHwgMCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gXCIuL0NvcmRvdmFQb3B1cFdpbmRvdy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB7XG4gIHByZXBhcmUocGFyYW1zKSB7XG4gICAgcGFyYW1zLnBvcHVwV2luZG93RmVhdHVyZXMgPSBcImhpZGRlbj15ZXNcIjtcbiAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gXCIuL0NvcmRvdmFQb3B1cFdpbmRvdy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwTmF2aWdhdG9yIHtcbiAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9IFwibG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vXCI7XG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwV2luZG93IHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5mZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuICAgIHRoaXMudGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcblxuICAgIHRoaXMucmVkaXJlY3RfdXJpID0gcGFyYW1zLnN0YXJ0VXJsO1xuICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5jdG9yOiByZWRpcmVjdF91cmk6IFwiICsgdGhpcy5yZWRpcmVjdF91cmkpO1xuICB9XG5cbiAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xuICAgIHJldHVybiBbXG4gICAgICBcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlclwiLFxuICAgICAgXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIuaW5hcHBicm93c2VyXCIsXG4gICAgICBcIm9yZy5hcGFjaGUuY29yZG92YS5pbmFwcGJyb3dzZXJcIixcbiAgICBdLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBjb3Jkb3ZhTWV0YWRhdGEuaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKFwiY29yZG92YSBpcyB1bmRlZmluZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb3Jkb3ZhTWV0YWRhdGEgPSB3aW5kb3cuY29yZG92YS5yZXF1aXJlKFxuICAgICAgICBcImNvcmRvdmEvcGx1Z2luX2xpc3RcIlxuICAgICAgKS5tZXRhZGF0YTtcbiAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJJbkFwcEJyb3dzZXIgcGx1Z2luIG5vdCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHVwID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3BlbihcbiAgICAgICAgcGFyYW1zLnVybCxcbiAgICAgICAgdGhpcy50YXJnZXQsXG4gICAgICAgIHRoaXMuZmVhdHVyZXNcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93Lm5hdmlnYXRlOiBwb3B1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcblxuICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2V4aXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50ID0gdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibG9hZHN0YXJ0XCIsXG4gICAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXJyb3IoXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvd1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxuXG4gIGdldCBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG5cbiAgX2xvYWRTdGFydENhbGxiYWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKHRoaXMucmVkaXJlY3RfdXJpKSA9PT0gMCkge1xuICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogZXZlbnQudXJsIH0pO1xuICAgIH1cbiAgfVxuICBfZXhpdENhbGxiYWNrKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIF9zdWNjZXNzKGRhdGEpIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICBMb2cuZGVidWcoXG4gICAgICBcIkNvcmRvdmFQb3B1cFdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGNvcmRvdmEgcG9wdXAgd2luZG93XCJcbiAgICApO1xuICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XG4gIH1cbiAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICBMb2cuZXJyb3IobWVzc2FnZSk7XG4gICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gIH1cblxuICBfY2xlYW51cCgpIHtcbiAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogY2xlYW5pbmcgdXAgcG9wdXBcIik7XG4gICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJsb2Fkc3RhcnRcIixcbiAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLl9wb3B1cCA9IG51bGw7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JSZXNwb25zZSBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGVycm9yLFxuICAgIGVycm9yX2Rlc2NyaXB0aW9uLFxuICAgIGVycm9yX3VyaSxcbiAgICBzdGF0ZSxcbiAgICBzZXNzaW9uX3N0YXRlLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBMb2cuZXJyb3IoXCJObyBlcnJvciBwYXNzZWQgdG8gRXJyb3JSZXNwb25zZVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVycm9yXCIpO1xuICAgIH1cblxuICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcblxuICAgIHRoaXMubmFtZSA9IFwiRXJyb3JSZXNwb25zZVwiO1xuXG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmVycm9yX3VyaSA9IGVycm9yX3VyaTtcblxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgYWRkSGFuZGxlcihjYikge1xuICAgIHRoaXMuX2NhbGxiYWNrcy5wdXNoKGNiKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIoY2IpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fY2FsbGJhY2tzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gY2IpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJhaXNlKC4uLnBhcmFtcykge1xuICAgIExvZy5kZWJ1ZyhcIkV2ZW50OiBSYWlzaW5nIGV2ZW50OiBcIiArIHRoaXMuX25hbWUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja3NbaV0oLi4ucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmNvbnN0IHRpbWVyID0ge1xuICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xuICAgIHJldHVybiBzZXRJbnRlcnZhbChjYiwgZHVyYXRpb24pO1xuICB9LFxuICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgfSxcbn07XG5cbmxldCB0ZXN0aW5nID0gZmFsc2U7XG5sZXQgcmVxdWVzdCA9IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xuICBzdGF0aWMgX3Rlc3RpbmcoKSB7XG4gICAgdGVzdGluZyA9IHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxvY2F0aW9uKCkge1xuICAgIGlmICghdGVzdGluZykge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgbG9jYWxTdG9yYWdlKCkge1xuICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2Vzc2lvblN0b3JhZ2UoKSB7XG4gICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xuICAgIHJlcXVlc3QgPSBuZXdSZXF1ZXN0O1xuICB9XG5cbiAgc3RhdGljIGdldCBYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3Q7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCB0aW1lcigpIHtcbiAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgIHJldHVybiB0aW1lcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgSUZyYW1lV2luZG93IH0gZnJvbSBcIi4vSUZyYW1lV2luZG93LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVOYXZpZ2F0b3Ige1xuICBwcmVwYXJlKHBhcmFtcykge1xuICAgIGxldCBmcmFtZSA9IG5ldyBJRnJhbWVXaW5kb3cocGFyYW1zKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZyYW1lKTtcbiAgfVxuXG4gIGNhbGxiYWNrKHVybCkge1xuICAgIExvZy5kZWJ1ZyhcIklGcmFtZU5hdmlnYXRvci5jYWxsYmFja1wiKTtcblxuICAgIHRyeSB7XG4gICAgICBJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50KHVybCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmNvbnN0IERlZmF1bHRUaW1lb3V0ID0gMTAwMDA7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVXaW5kb3cge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcblxuICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXG4gICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5fZnJhbWUud2lkdGggPSAwO1xuICAgIHRoaXMuX2ZyYW1lLmhlaWdodCA9IDA7XG5cbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gIH1cblxuICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0aW1lb3V0ID0gcGFyYW1zLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IERlZmF1bHRUaW1lb3V0O1xuICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5hdmlnYXRlOiBVc2luZyB0aW1lb3V0IG9mOlwiLCB0aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5fdGltZW91dC5iaW5kKHRoaXMpLCB0aW1lb3V0KTtcbiAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHBhcmFtcy51cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxuXG4gIGdldCBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG5cbiAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMuX2NsZWFudXAoKTtcblxuICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcbiAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xuICB9XG4gIF9lcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xuICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fY2xlYW51cCgpO1xuICB9XG5cbiAgX2NsZWFudXAoKSB7XG4gICAgaWYgKHRoaXMuX2ZyYW1lKSB7XG4gICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3c6IGNsZWFudXBcIik7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9mcmFtZSk7XG5cbiAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyYW1lID0gbnVsbDtcbiAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfdGltZW91dCgpIHtcbiAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cudGltZW91dFwiKTtcbiAgICB0aGlzLl9lcnJvcihcIkZyYW1lIHdpbmRvdyB0aW1lZCBvdXRcIik7XG4gIH1cblxuICBfbWVzc2FnZShlKSB7XG4gICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm1lc3NhZ2VcIik7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLl90aW1lciAmJlxuICAgICAgZS5vcmlnaW4gPT09IHRoaXMuX29yaWdpbiAmJlxuICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cgJiZcbiAgICAgIHR5cGVvZiBlLmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgIChlLmRhdGEuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgZS5kYXRhLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSlcbiAgICApIHtcbiAgICAgIGxldCB1cmwgPSBlLmRhdGE7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIGZyYW1lXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBfb3JpZ2luKCkge1xuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIH1cblxuICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xuICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnQ6IHBvc3RpbmcgdXJsIG1lc3NhZ2UgdG8gcGFyZW50XCIpO1xuICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh1cmwsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIEluTWVtb3J5V2ViU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5KSB7XG4gICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLmdldEl0ZW1cIiwga2V5KTtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICB9XG5cbiAgc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnNldEl0ZW1cIiwga2V5KTtcbiAgICB0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnJlbW92ZUl0ZW1cIiwga2V5KTtcbiAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xuICB9XG5cbiAga2V5KGluZGV4KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpW2luZGV4XTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpvc2VVdGlsKHtcbiAgandzLFxuICBLZXlVdGlsLFxuICBYNTA5LFxuICBjcnlwdG8sXG4gIGhleHRvYjY0dSxcbiAgYjY0dG9oZXgsXG4gIEFsbG93ZWRTaWduaW5nQWxncyxcbn0pIHtcbiAgcmV0dXJuIGNsYXNzIEpvc2VVdGlsIHtcbiAgICBzdGF0aWMgcGFyc2VKd3Qoand0KSB7XG4gICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC5wYXJzZUp3dFwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB0b2tlbiA9IGp3cy5KV1MucGFyc2Uoand0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IHRva2VuLmhlYWRlck9iaixcbiAgICAgICAgICBwYXlsb2FkOiB0b2tlbi5wYXlsb2FkT2JqLFxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlSnd0KFxuICAgICAgand0LFxuICAgICAga2V5LFxuICAgICAgaXNzdWVyLFxuICAgICAgYXVkaWVuY2UsXG4gICAgICBjbG9ja1NrZXcsXG4gICAgICBub3csXG4gICAgICB0aW1lSW5zZW5zaXRpdmVcbiAgICApIHtcbiAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLnZhbGlkYXRlSnd0XCIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoa2V5Lmt0eSA9PT0gXCJSU0FcIikge1xuICAgICAgICAgIGlmIChrZXkuZSAmJiBrZXkubikge1xuICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBoZXggPSBiNjR0b2hleChrZXkueDVjWzBdKTtcbiAgICAgICAgICAgIGtleSA9IFg1MDkuZ2V0UHVibGljS2V5RnJvbUNlcnRIZXgoaGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICBcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsXG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XG4gICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcbiAgICAgICAgICAgIGtleSA9IEtleVV0aWwuZ2V0S2V5KGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICBcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBVbnN1cHBvcnRlZCBrZXkgdHlwZVwiLFxuICAgICAgICAgICAga2V5ICYmIGtleS5rdHlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgIG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGtleSB0eXBlOiBcIiArIGtleSAmJiBrZXkua3R5KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KFxuICAgICAgICAgIGp3dCxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgaXNzdWVyLFxuICAgICAgICAgIGF1ZGllbmNlLFxuICAgICAgICAgIGNsb2NrU2tldyxcbiAgICAgICAgICBub3csXG4gICAgICAgICAgdGltZUluc2Vuc2l0aXZlXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIExvZy5lcnJvcigoZSAmJiBlLm1lc3NhZ2UpIHx8IGUpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJKV1QgdmFsaWRhdGlvbiBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlSnd0QXR0cmlidXRlcyhcbiAgICAgIGp3dCxcbiAgICAgIGlzc3VlcixcbiAgICAgIGF1ZGllbmNlLFxuICAgICAgY2xvY2tTa2V3LFxuICAgICAgbm93LFxuICAgICAgdGltZUluc2Vuc2l0aXZlXG4gICAgKSB7XG4gICAgICBpZiAoIWNsb2NrU2tldykge1xuICAgICAgICBjbG9ja1NrZXcgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vdykge1xuICAgICAgICBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXlsb2FkID0gSm9zZVV0aWwucGFyc2VKd3Qoand0KS5wYXlsb2FkO1xuXG4gICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XG4gICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaXNzdWVyIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICB9XG4gICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IEludmFsaWQgaXNzdWVyIGluIHRva2VuXCIsXG4gICAgICAgICAgcGF5bG9hZC5pc3NcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBFcnJvcihcIkludmFsaWQgaXNzdWVyIGluIHRva2VuOiBcIiArIHBheWxvYWQuaXNzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBheWxvYWQuYXVkKSB7XG4gICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogYXVkIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICB9XG4gICAgICB2YXIgdmFsaWRBdWRpZW5jZSA9XG4gICAgICAgIHBheWxvYWQuYXVkID09PSBhdWRpZW5jZSB8fFxuICAgICAgICAoQXJyYXkuaXNBcnJheShwYXlsb2FkLmF1ZCkgJiYgcGF5bG9hZC5hdWQuaW5kZXhPZihhdWRpZW5jZSkgPj0gMCk7XG4gICAgICBpZiAoIXZhbGlkQXVkaWVuY2UpIHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuXCIsXG4gICAgICAgICAgcGF5bG9hZC5hdWRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBFcnJvcihcIkludmFsaWQgYXVkaWVuY2UgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5hdWQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IGF1ZGllbmNlKSB7XG4gICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgbmV3IEVycm9yKFwiSW52YWxpZCBhenAgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5henApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGltZUluc2Vuc2l0aXZlKSB7XG4gICAgICAgIHZhciBsb3dlck5vdyA9IG5vdyArIGNsb2NrU2tldztcbiAgICAgICAgdmFyIHVwcGVyTm93ID0gbm93IC0gY2xvY2tTa2V3O1xuXG4gICAgICAgIGlmICghcGF5bG9hZC5pYXQpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpYXQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvd2VyTm93IDwgcGF5bG9hZC5pYXQpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQuaWF0KTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXCJpYXQgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLmlhdClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXCJuYmYgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLm5iZilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkLmV4cCkge1xuICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogZXhwIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5leHAgPCB1cHBlck5vdykge1xuICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogZXhwIGlzIGluIHRoZSBwYXN0XCIsIHBheWxvYWQuZXhwKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIGlzIGluIHRoZSBwYXN0OlwiICsgcGF5bG9hZC5leHApKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBheWxvYWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBfdmFsaWRhdGVKd3QoXG4gICAgICBqd3QsXG4gICAgICBrZXksXG4gICAgICBpc3N1ZXIsXG4gICAgICBhdWRpZW5jZSxcbiAgICAgIGNsb2NrU2tldyxcbiAgICAgIG5vdyxcbiAgICAgIHRpbWVJbnNlbnNpdGl2ZVxuICAgICkge1xuICAgICAgcmV0dXJuIEpvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhcbiAgICAgICAgand0LFxuICAgICAgICBpc3N1ZXIsXG4gICAgICAgIGF1ZGllbmNlLFxuICAgICAgICBjbG9ja1NrZXcsXG4gICAgICAgIG5vdyxcbiAgICAgICAgdGltZUluc2Vuc2l0aXZlXG4gICAgICApLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIWp3cy5KV1MudmVyaWZ5KGp3dCwga2V5LCBBbGxvd2VkU2lnbmluZ0FsZ3MpKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IHNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJzaWduYXR1cmUgdmFsaWRhdGlvbiBmYWlsZWRcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgTG9nLmVycm9yKChlICYmIGUubWVzc2FnZSkgfHwgZSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYXNoU3RyaW5nKHZhbHVlLCBhbGcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjcnlwdG8uVXRpbC5oYXNoU3RyaW5nKHZhbHVlLCBhbGcpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGp3cyxcbiAgS2V5VXRpbCxcbiAgWDUwOSxcbiAgY3J5cHRvLFxuICBoZXh0b2I2NHUsXG4gIGI2NHRvaGV4LFxuICBBbGxvd2VkU2lnbmluZ0FsZ3MsXG59IGZyb20gXCIuL2NyeXB0by9yc2FcIjtcbmltcG9ydCBnZXRKb3NlVXRpbCBmcm9tIFwiLi9Kb3NlVXRpbEltcGxcIjtcblxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoe1xuICBqd3MsXG4gIEtleVV0aWwsXG4gIFg1MDksXG4gIGNyeXB0byxcbiAgaGV4dG9iNjR1LFxuICBiNjR0b2hleCxcbiAgQWxsb3dlZFNpZ25pbmdBbGdzLFxufSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgSnNvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCxcbiAgICBYTUxIdHRwUmVxdWVzdEN0b3IgPSBHbG9iYWwuWE1MSHR0cFJlcXVlc3QsXG4gICAgand0SGFuZGxlciA9IG51bGxcbiAgKSB7XG4gICAgaWYgKGFkZGl0aW9uYWxDb250ZW50VHlwZXMgJiYgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQ29udGVudFR5cGVzKSkge1xuICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gYWRkaXRpb25hbENvbnRlbnRUeXBlcy5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGlmIChqd3RIYW5kbGVyKSB7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZXMucHVzaChcImFwcGxpY2F0aW9uL2p3dFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0Q3RvcjtcbiAgICB0aGlzLl9qd3RIYW5kbGVyID0gand0SGFuZGxlcjtcbiAgfVxuXG4gIGFzeW5jIGdldEpzb24odXJsLCB0b2tlbikge1xuICAgIGlmICghdXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgIH1cblxuICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb24sIHVybDogXCIsIHVybCk7XG4gICAgdmFyIGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLl9jb250ZW50VHlwZXM7XG4gICAgdmFyIGp3dEhhbmRsZXIgPSB0aGlzLl9qd3RIYW5kbGVyO1xuICAgIHZhciBmb3VuZCA9IG51bGw7XG4gICAgdmFyIG9wdGlvbnMgPSB7bWV0aG9kOiBcIkdFVFwiLCBoZWFkZXJzOnt9IH1cblxuICAgIGlmICh0b2tlbikge1xuICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgdG9rZW5cbiAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb246IHRva2VuIHBhc3NlZCwgc2V0dGluZyBBdXRob3JpemF0aW9uIGhlYWRlclwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByYyA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgaWYgKHJjLm9rICYmIHJjLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmMuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW0gb2YgYWxsb3dlZENvbnRlbnRUeXBlcykgXG4gICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gaXRlbTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kID09PSBcImFwcGxpY2F0aW9uL2p3dFwiKSB7XG4gICAgICAgICAgY29uc3QgcmVxID0geydyZXNwb25zZVRleHQnOiBhd2FpdCByYy50ZXh0KCl9XG4gICAgICAgICAgY29uc3Qgand0ID0gYXdhaXQgand0SGFuZGxlcihyZXEpO1xuICAgICAgICAgIHJldHVybiBqd3RcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJjLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uXG4gICAgICAgICAgfSBjYXRjaChleCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlIFwiLCBleC5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93KGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpXG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihyYy5zdGF0dXNUZXh0ICsgXCIgKFwiICsgcmMuc3RhdHVzICsgXCIpXCIpO1xuICB9XG5cbiAgYXN5bmMgcG9zdEZvcm0odXJsLCBwYXlsb2FkLCBiYXNpY0F1dGgpIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IE5vIHVybCBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgfVxuXG4gICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UucG9zdEZvcm0sIHVybDogXCIsIHVybCk7XG4gICAgdmFyIGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLl9jb250ZW50VHlwZXM7XG4gICAgdmFyIG9wdGlvbnMgPSB7bWV0aG9kOiBcIlBPU1RcIiwgaGVhZGVyczp7fSwgYm9keTogXCJcIn1cbiAgICBcbiAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgaWYgKGJhc2ljQXV0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCYXNpYyBcIiArIGJ0b2EoYmFzaWNBdXRoKTtcbiAgICB9XG5cbiAgICBsZXQgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcGF5bG9hZCkge1xuICAgICAgYm9keS5hcHBlbmQoa2V5LCBwYXlsb2FkW2tleV0pXG4gICAgfVxuICAgIG9wdGlvbnMuYm9keSA9IGJvZHkudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IHJjID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICBpZiAocmMub2sgJiYgcmMuc3RhdHVzID09IDIwMCkge1xuICAgICAgY29uc3QgY29udGVudFR5cGUgPSByYy5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgIGlmIChjb250ZW50VHlwZSkge1xuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xuICAgICAgICBmb3IoY29uc3QgaXRlbSBvZiBhbGxvd2VkQ29udGVudFR5cGVzKSBcbiAgICAgICAgICBpZiAoY29udGVudFR5cGUuc3RhcnRzV2l0aChpdGVtKSkge1xuICAgICAgICAgICAgZm91bmQgPSBpdGVtO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJjLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uXG4gICAgICAgICAgfSBjYXRjaChleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZSBcIitleC5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgQ29udGVudC1UeXBlOiBcIiArIGNvbnRlbnRUeXBlICsgXCIsIGZyb20gVVJMOiBcIiArIHVybClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJjLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJjLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xuICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XG4gICAgICAgIGZvcihjb25zdCBpdGVtIG9mIGFsbG93ZWRDb250ZW50VHlwZXMpIFxuICAgICAgICAgIGlmIChjb250ZW50VHlwZS5zdGFydHNXaXRoKGl0ZW0pKSB7XG4gICAgICAgICAgICBmb3VuZCA9IGl0ZW07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0gYXdhaXQgcmMuanNvbigpO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQgJiYgcGF5bG9hZC5lcnJvcikge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgZnJvbSBzZXJ2ZXI6IFwiLCBwYXlsb2FkLmVycm9yKTtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHBheWxvYWQuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2U6IFwiO1xuICAgICAgICAgICAgTG9nLmVycm9yKG1zZywgZXgubWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyhleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihyYy5zdGF0dXNUZXh0ICsgXCIgKFwiICsgcmMuc3RhdHVzICsgXCIpXCIpO1xuICB9XG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmxldCBub3BMb2dnZXIgPSB7XG4gIGRlYnVnKCkge30sXG4gIGluZm8oKSB7fSxcbiAgd2FybigpIHt9LFxuICBlcnJvcigpIHt9LFxufTtcblxuY29uc3QgTk9ORSA9IDA7XG5jb25zdCBFUlJPUiA9IDE7XG5jb25zdCBXQVJOID0gMjtcbmNvbnN0IElORk8gPSAzO1xuY29uc3QgREVCVUcgPSA0O1xuXG5sZXQgbG9nZ2VyO1xubGV0IGxldmVsO1xuXG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgc3RhdGljIGdldCBOT05FKCkge1xuICAgIHJldHVybiBOT05FO1xuICB9XG4gIHN0YXRpYyBnZXQgRVJST1IoKSB7XG4gICAgcmV0dXJuIEVSUk9SO1xuICB9XG4gIHN0YXRpYyBnZXQgV0FSTigpIHtcbiAgICByZXR1cm4gV0FSTjtcbiAgfVxuICBzdGF0aWMgZ2V0IElORk8oKSB7XG4gICAgcmV0dXJuIElORk87XG4gIH1cbiAgc3RhdGljIGdldCBERUJVRygpIHtcbiAgICByZXR1cm4gREVCVUc7XG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgbGV2ZWwgPSBJTkZPO1xuICAgIGxvZ2dlciA9IG5vcExvZ2dlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIGxldmVsO1xuICB9XG4gIHN0YXRpYyBzZXQgbGV2ZWwodmFsdWUpIHtcbiAgICBpZiAoTk9ORSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBERUJVRykge1xuICAgICAgbGV2ZWwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2cgbGV2ZWxcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIGxvZ2dlcjtcbiAgfVxuICBzdGF0aWMgc2V0IGxvZ2dlcih2YWx1ZSkge1xuICAgIGlmICghdmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbykge1xuICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXG4gICAgICB2YWx1ZS5kZWJ1ZyA9IHZhbHVlLmluZm87XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8gJiYgdmFsdWUud2FybiAmJiB2YWx1ZS5lcnJvcikge1xuICAgICAgbG9nZ2VyID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nZ2VyXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWJ1ZyguLi5hcmdzKSB7XG4gICAgaWYgKGxldmVsID49IERFQlVHKSB7XG4gICAgICBsb2dnZXIuZGVidWcuYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGluZm8oLi4uYXJncykge1xuICAgIGlmIChsZXZlbCA+PSBJTkZPKSB7XG4gICAgICBsb2dnZXIuaW5mby5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKGxldmVsID49IFdBUk4pIHtcbiAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBlcnJvciguLi5hcmdzKSB7XG4gICAgaWYgKGxldmVsID49IEVSUk9SKSB7XG4gICAgICBsb2dnZXIuZXJyb3IuYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICB9XG4gIH1cbn1cblxuTG9nLnJlc2V0KCk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSBcIi4vSnNvblNlcnZpY2UuanNcIjtcblxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9IFwiLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSkge1xuICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZTogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIE1ldGFkYXRhU2VydmljZVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKFtcImFwcGxpY2F0aW9uL2p3ay1zZXQranNvblwiXSk7XG4gIH1cblxuICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhVXJsKSB7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgJiZcbiAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09IFwiL1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSBcIi9cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcbiAgfVxuXG4gIHJlc2V0U2lnbmluZ0tleXMoKSB7XG4gICAgdGhpcy5fc2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncyB8fCB7fTtcbiAgICB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldE1ldGFkYXRhKCkge1xuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSkge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogUmV0dXJuaW5nIG1ldGFkYXRhIGZyb20gc2V0dGluZ3NcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tZXRhZGF0YVVybCkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKFwiTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGdldHRpbmcgbWV0YWRhdGEgZnJvbVwiLFxuICAgICAgdGhpcy5tZXRhZGF0YVVybFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKS50aGVuKChtZXRhZGF0YSkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBqc29uIHJlY2VpdmVkXCIpO1xuXG4gICAgICB2YXIgc2VlZCA9IHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhU2VlZCB8fCB7fTtcbiAgICAgIHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc2VlZCwgbWV0YWRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SXNzdWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiaXNzdWVyXCIpO1xuICB9XG5cbiAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiYXV0aG9yaXphdGlvbl9lbmRwb2ludFwiKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ1c2VyaW5mb19lbmRwb2ludFwiKTtcbiAgfVxuXG4gIGdldFRva2VuRW5kcG9pbnQob3B0aW9uYWwgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XG4gIH1cblxuICBnZXRDaGVja1Nlc3Npb25JZnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJjaGVja19zZXNzaW9uX2lmcmFtZVwiLCB0cnVlKTtcbiAgfVxuXG4gIGdldEVuZFNlc3Npb25FbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImVuZF9zZXNzaW9uX2VuZHBvaW50XCIsIHRydWUpO1xuICB9XG5cbiAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcbiAgfVxuXG4gIGdldEtleXNFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIsIHRydWUpO1xuICB9XG5cbiAgX2dldE1ldGFkYXRhUHJvcGVydHkobmFtZSwgb3B0aW9uYWwgPSBmYWxzZSkge1xuICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5IGZvcjogXCIgKyBuYW1lKTtcblxuICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKCkudGhlbigobWV0YWRhdGEpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBtZXRhZGF0YSByZWNpZXZlZFwiKTtcblxuICAgICAgaWYgKG1ldGFkYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgTG9nLndhcm4oXG4gICAgICAgICAgICBcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIG9wdGlvbmFsIHByb3BlcnR5IFwiICtcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICBcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICtcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXRhZGF0YVtuYW1lXTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNpZ25pbmdLZXlzKCkge1xuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cykge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogUmV0dXJuaW5nIHNpZ25pbmdLZXlzIGZyb20gc2V0dGluZ3NcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiandrc191cmlcIikudGhlbigoandrc191cmkpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogandrc191cmkgcmVjZWl2ZWRcIiwgandrc191cmkpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbigoa2V5U2V0KSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czoga2V5IHNldCByZWNlaXZlZFwiLCBrZXlTZXQpO1xuXG4gICAgICAgIGlmICgha2V5U2V0LmtleXMpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IE1pc3Npbmcga2V5cyBvbiBrZXlzZXRcIik7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzID0ga2V5U2V0LmtleXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gXCIuL09pZGNDbGllbnRTZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSB9IGZyb20gXCIuL0Vycm9yUmVzcG9uc2UuanNcIjtcbmltcG9ydCB7IFNpZ25pblJlcXVlc3QgfSBmcm9tIFwiLi9TaWduaW5SZXF1ZXN0LmpzXCI7XG5pbXBvcnQgeyBTaWduaW5SZXNwb25zZSB9IGZyb20gXCIuL1NpZ25pblJlc3BvbnNlLmpzXCI7XG5pbXBvcnQgeyBTaWdub3V0UmVxdWVzdCB9IGZyb20gXCIuL1NpZ25vdXRSZXF1ZXN0LmpzXCI7XG5pbXBvcnQgeyBTaWdub3V0UmVzcG9uc2UgfSBmcm9tIFwiLi9TaWdub3V0UmVzcG9uc2UuanNcIjtcbmltcG9ydCB7IFNpZ25pblN0YXRlIH0gZnJvbSBcIi4vU2lnbmluU3RhdGUuanNcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vU3RhdGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9KSB7XG4gICAgaWYgKHNldHRpbmdzIGluc3RhbmNlb2YgT2lkY0NsaWVudFNldHRpbmdzKSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncyA9IG5ldyBPaWRjQ2xpZW50U2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBfc3RhdGVTdG9yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGF0ZVN0b3JlO1xuICB9XG4gIGdldCBfdmFsaWRhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnZhbGlkYXRvcjtcbiAgfVxuICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tZXRhZGF0YVNlcnZpY2U7XG4gIH1cblxuICBnZXQgc2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzO1xuICB9XG4gIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcbiAgfVxuXG4gIGNyZWF0ZVNpZ25pblJlcXVlc3QoXG4gICAge1xuICAgICAgcmVzcG9uc2VfdHlwZSxcbiAgICAgIHNjb3BlLFxuICAgICAgcmVkaXJlY3RfdXJpLFxuICAgICAgLy8gZGF0YSB3YXMgbWVhbnQgdG8gYmUgdGhlIHBsYWNlIGEgY2FsbGVyIGNvdWxkIGluZGljYXRlIHRoZSBkYXRhIHRvXG4gICAgICAvLyBoYXZlIHJvdW5kIHRyaXBwZWQsIGJ1dCBwZW9wbGUgd2VyZSBnZXR0aW5nIGNvbmZ1c2VkLCBzbyBpIGFkZGVkIHN0YXRlIChzaW5jZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWMpXG4gICAgICAvLyBhbmQgc28gbm93IGlmIGRhdGEgaXMgbm90IHBhc3NlZCwgYnV0IHN0YXRlIGlzIHRoZW4gc3RhdGUgd2lsbCBiZSB1c2VkXG4gICAgICBkYXRhLFxuICAgICAgc3RhdGUsXG4gICAgICBwcm9tcHQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgbWF4X2FnZSxcbiAgICAgIHVpX2xvY2FsZXMsXG4gICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgbG9naW5faGludCxcbiAgICAgIGFjcl92YWx1ZXMsXG4gICAgICByZXNvdXJjZSxcbiAgICAgIHJlcXVlc3QsXG4gICAgICByZXF1ZXN0X3VyaSxcbiAgICAgIHJlc3BvbnNlX21vZGUsXG4gICAgICBleHRyYVF1ZXJ5UGFyYW1zLFxuICAgICAgZXh0cmFUb2tlblBhcmFtcyxcbiAgICAgIHJlcXVlc3RfdHlwZSxcbiAgICAgIHNraXBVc2VySW5mbyxcbiAgICB9ID0ge30sXG4gICAgc3RhdGVTdG9yZVxuICApIHtcbiAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3RcIik7XG5cbiAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgIHJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGU7XG4gICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcbiAgICByZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuXG4gICAgLy8gaWRfdG9rZW5faGludCwgbG9naW5faGludCBhcmVuJ3QgYWxsb3dlZCBvbiBfc2V0dGluZ3NcbiAgICBwcm9tcHQgPSBwcm9tcHQgfHwgdGhpcy5fc2V0dGluZ3MucHJvbXB0O1xuICAgIGRpc3BsYXkgPSBkaXNwbGF5IHx8IHRoaXMuX3NldHRpbmdzLmRpc3BsYXk7XG4gICAgbWF4X2FnZSA9IG1heF9hZ2UgfHwgdGhpcy5fc2V0dGluZ3MubWF4X2FnZTtcbiAgICB1aV9sb2NhbGVzID0gdWlfbG9jYWxlcyB8fCB0aGlzLl9zZXR0aW5ncy51aV9sb2NhbGVzO1xuICAgIGFjcl92YWx1ZXMgPSBhY3JfdmFsdWVzIHx8IHRoaXMuX3NldHRpbmdzLmFjcl92YWx1ZXM7XG4gICAgcmVzb3VyY2UgPSByZXNvdXJjZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNvdXJjZTtcbiAgICByZXNwb25zZV9tb2RlID0gcmVzcG9uc2VfbW9kZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlO1xuICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XG4gICAgZXh0cmFUb2tlblBhcmFtcyA9IGV4dHJhVG9rZW5QYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFUb2tlblBhcmFtcztcblxuICAgIGxldCBhdXRob3JpdHkgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XG5cbiAgICBpZiAoU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgJiYgcmVzcG9uc2VfdHlwZSAhPT0gXCJjb2RlXCIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKFwiT3BlbklEIENvbm5lY3QgaHlicmlkIGZsb3cgaXMgbm90IHN1cHBvcnRlZFwiKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLFxuICAgICAgICB1cmxcbiAgICAgICk7XG5cbiAgICAgIGxldCBzaWduaW5SZXF1ZXN0ID0gbmV3IFNpZ25pblJlcXVlc3Qoe1xuICAgICAgICB1cmwsXG4gICAgICAgIGNsaWVudF9pZCxcbiAgICAgICAgcmVkaXJlY3RfdXJpLFxuICAgICAgICByZXNwb25zZV90eXBlLFxuICAgICAgICBzY29wZSxcbiAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcbiAgICAgICAgYXV0aG9yaXR5LFxuICAgICAgICBwcm9tcHQsXG4gICAgICAgIGRpc3BsYXksXG4gICAgICAgIG1heF9hZ2UsXG4gICAgICAgIHVpX2xvY2FsZXMsXG4gICAgICAgIGlkX3Rva2VuX2hpbnQsXG4gICAgICAgIGxvZ2luX2hpbnQsXG4gICAgICAgIGFjcl92YWx1ZXMsXG4gICAgICAgIHJlc291cmNlLFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICByZXF1ZXN0X3VyaSxcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyxcbiAgICAgICAgZXh0cmFUb2tlblBhcmFtcyxcbiAgICAgICAgcmVxdWVzdF90eXBlLFxuICAgICAgICByZXNwb25zZV9tb2RlLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxuICAgICAgICBza2lwVXNlckluZm8sXG4gICAgICB9KTtcblxuICAgICAgdmFyIHNpZ25pblN0YXRlID0gc2lnbmluUmVxdWVzdC5zdGF0ZTtcbiAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgIHJldHVybiBzdGF0ZVN0b3JlXG4gICAgICAgIC5zZXQoc2lnbmluU3RhdGUuaWQsIHNpZ25pblN0YXRlLnRvU3RvcmFnZVN0cmluZygpKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNpZ25pblJlcXVlc3Q7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCByZW1vdmVTdGF0ZSA9IGZhbHNlKSB7XG4gICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZVwiKTtcblxuICAgIGxldCB1c2VRdWVyeSA9XG4gICAgICB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlID09PSBcInF1ZXJ5XCIgfHxcbiAgICAgICghdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZSAmJlxuICAgICAgICBTaWduaW5SZXF1ZXN0LmlzQ29kZSh0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV90eXBlKSk7XG4gICAgbGV0IGRlbGltaXRlciA9IHVzZVF1ZXJ5ID8gXCI/XCIgOiBcIiNcIjtcblxuICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWduaW5SZXNwb25zZSh1cmwsIGRlbGltaXRlcik7XG5cbiAgICBpZiAoIXJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50LnJlYWRTaWduaW5SZXNwb25zZVN0YXRlOiBObyBzdGF0ZSBpbiByZXNwb25zZVwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdGF0ZSBpbiByZXNwb25zZVwiKSk7XG4gICAgfVxuXG4gICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgIHZhciBzdGF0ZUFwaSA9IHJlbW92ZVN0YXRlXG4gICAgICA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSlcbiAgICAgIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcblxuICAgIHJldHVybiBzdGF0ZUFwaShyZXNwb25zZS5zdGF0ZSkudGhlbigoc3RvcmVkU3RhdGVTdHJpbmcpID0+IHtcbiAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiXG4gICAgICAgICk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICB9XG5cbiAgICAgIGxldCBzdGF0ZSA9IFNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcbiAgICAgIHJldHVybiB7IHN0YXRlLCByZXNwb25zZSB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc1NpZ25pblJlc3BvbnNlKHVybCwgc3RhdGVTdG9yZSkge1xuICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKFxuICAgICAgKHsgc3RhdGUsIHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbmluUmVzcG9uc2U6IFJlY2VpdmVkIHN0YXRlIGZyb20gc3RvcmFnZTsgdmFsaWRhdGluZyByZXNwb25zZVwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVTaWdub3V0UmVxdWVzdChcbiAgICB7XG4gICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgZGF0YSxcbiAgICAgIHN0YXRlLFxuICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxuICAgICAgZXh0cmFRdWVyeVBhcmFtcyxcbiAgICAgIHJlcXVlc3RfdHlwZSxcbiAgICB9ID0ge30sXG4gICAgc3RhdGVTdG9yZVxuICApIHtcbiAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xuXG4gICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID1cbiAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcblxuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbigodXJsKSA9PiB7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0OiBObyBlbmQgc2Vzc2lvbiBlbmRwb2ludCB1cmwgcmV0dXJuZWRcIlxuICAgICAgICApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBlbmQgc2Vzc2lvbiBlbmRwb2ludFwiKTtcbiAgICAgIH1cblxuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsXG4gICAgICAgIHVybFxuICAgICAgKTtcblxuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgU2lnbm91dFJlcXVlc3Qoe1xuICAgICAgICB1cmwsXG4gICAgICAgIGlkX3Rva2VuX2hpbnQsXG4gICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyxcbiAgICAgICAgcmVxdWVzdF90eXBlLFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzaWdub3V0U3RhdGUgPSByZXF1ZXN0LnN0YXRlO1xuICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0OiBTaWdub3V0IHJlcXVlc3QgaGFzIHN0YXRlIHRvIHBlcnNpc3RcIlxuICAgICAgICApO1xuXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG4gICAgICAgIHN0YXRlU3RvcmUuc2V0KHNpZ25vdXRTdGF0ZS5pZCwgc2lnbm91dFN0YXRlLnRvU3RvcmFnZVN0cmluZygpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSk7XG4gIH1cblxuICByZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCByZW1vdmVTdGF0ZSA9IGZhbHNlKSB7XG4gICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGVcIik7XG5cbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbm91dFJlc3BvbnNlKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xuXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgTG9nLndhcm4oXG4gICAgICAgICAgXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZTogUmVzcG9uc2Ugd2FzIGVycm9yOiBcIixcbiAgICAgICAgICByZXNwb25zZS5lcnJvclxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IHN0YXRlOiB1bmRlZmluZWQsIHJlc3BvbnNlIH0pO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZUtleSA9IHJlc3BvbnNlLnN0YXRlO1xuXG4gICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgIHZhciBzdGF0ZUFwaSA9IHJlbW92ZVN0YXRlXG4gICAgICA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSlcbiAgICAgIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcbiAgICByZXR1cm4gc3RhdGVBcGkoc3RhdGVLZXkpLnRoZW4oKHN0b3JlZFN0YXRlU3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xuXG4gICAgICByZXR1cm4geyBzdGF0ZSwgcmVzcG9uc2UgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XG4gICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgdHJ1ZSkudGhlbihcbiAgICAgICh7IHN0YXRlLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlKSB7XG4gICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jbGVhclN0YWxlU3RhdGVcIik7XG5cbiAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgcmV0dXJuIFN0YXRlLmNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlLCB0aGlzLnNldHRpbmdzLnN0YWxlU3RhdGVBZ2UpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IENsb2NrU2VydmljZSB9IGZyb20gXCIuL0Nsb2NrU2VydmljZS5qc1wiO1xuaW1wb3J0IHsgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tIFwiLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qc1wiO1xuaW1wb3J0IHsgUmVzcG9uc2VWYWxpZGF0b3IgfSBmcm9tIFwiLi9SZXNwb25zZVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vTWV0YWRhdGFTZXJ2aWNlLmpzXCI7XG5cbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSBcIi53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XG5jb25zdCBEZWZhdWx0U2NvcGUgPSBcIm9wZW5pZFwiO1xuY29uc3QgRGVmYXVsdENsaWVudEF1dGhlbnRpY2F0aW9uID0gXCJjbGllbnRfc2VjcmV0X3Bvc3RcIjsgLy8gVGhlIGRlZmF1bHQgdmFsdWUgbXVzdCBiZSBjbGllbnRfc2VjcmV0X2Jhc2ljLCBhcyBleHBsYWluZWQgaW4gaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjQ2xpZW50QXV0aGVudGljYXRpb25cbmNvbnN0IERlZmF1bHRTdGFsZVN0YXRlQWdlID0gNjAgKiAxNTsgLy8gc2Vjb25kc1xuY29uc3QgRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyA9IDYwICogNTtcblxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnRTZXR0aW5ncyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICAvLyBtZXRhZGF0YSByZWxhdGVkXG4gICAgYXV0aG9yaXR5LFxuICAgIG1ldGFkYXRhVXJsLFxuICAgIG1ldGFkYXRhLFxuICAgIHNpZ25pbmdLZXlzLFxuICAgIG1ldGFkYXRhU2VlZCxcbiAgICAvLyBjbGllbnQgcmVsYXRlZFxuICAgIGNsaWVudF9pZCxcbiAgICBjbGllbnRfc2VjcmV0LFxuICAgIHJlc3BvbnNlX3R5cGUgPSBEZWZhdWx0UmVzcG9uc2VUeXBlLFxuICAgIHNjb3BlID0gRGVmYXVsdFNjb3BlLFxuICAgIHJlZGlyZWN0X3VyaSxcbiAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgY2xpZW50X2F1dGhlbnRpY2F0aW9uID0gRGVmYXVsdENsaWVudEF1dGhlbnRpY2F0aW9uLFxuICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXG4gICAgcHJvbXB0LFxuICAgIGRpc3BsYXksXG4gICAgbWF4X2FnZSxcbiAgICB1aV9sb2NhbGVzLFxuICAgIGFjcl92YWx1ZXMsXG4gICAgcmVzb3VyY2UsXG4gICAgcmVzcG9uc2VfbW9kZSxcbiAgICAvLyBiZWhhdmlvciBmbGFnc1xuICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSxcbiAgICBsb2FkVXNlckluZm8gPSB0cnVlLFxuICAgIHN0YWxlU3RhdGVBZ2UgPSBEZWZhdWx0U3RhbGVTdGF0ZUFnZSxcbiAgICBjbG9ja1NrZXcgPSBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzLFxuICAgIGNsb2NrU2VydmljZSA9IG5ldyBDbG9ja1NlcnZpY2UoKSxcbiAgICB1c2VySW5mb0p3dElzc3VlciA9IFwiT1BcIixcbiAgICBtZXJnZUNsYWltcyA9IGZhbHNlLFxuICAgIC8vIG90aGVyIGJlaGF2aW9yXG4gICAgc3RhdGVTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSgpLFxuICAgIFJlc3BvbnNlVmFsaWRhdG9yQ3RvciA9IFJlc3BvbnNlVmFsaWRhdG9yLFxuICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXG4gICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXG4gICAgZXh0cmFRdWVyeVBhcmFtcyA9IHt9LFxuICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuICAgIHRoaXMuX21ldGFkYXRhVXJsID0gbWV0YWRhdGFVcmw7XG4gICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICB0aGlzLl9tZXRhZGF0YVNlZWQgPSBtZXRhZGF0YVNlZWQ7XG4gICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcblxuICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICB0aGlzLl9jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcbiAgICB0aGlzLl9yZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZTtcbiAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuX3JlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaTtcbiAgICB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgdGhpcy5fY2xpZW50X2F1dGhlbnRpY2F0aW9uID0gY2xpZW50X2F1dGhlbnRpY2F0aW9uO1xuXG4gICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xuICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xuICAgIHRoaXMuX21heF9hZ2UgPSBtYXhfYWdlO1xuICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xuICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xuICAgIHRoaXMuX3Jlc291cmNlID0gcmVzb3VyY2U7XG4gICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XG5cbiAgICB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyA9ICEhZmlsdGVyUHJvdG9jb2xDbGFpbXM7XG4gICAgdGhpcy5fbG9hZFVzZXJJbmZvID0gISFsb2FkVXNlckluZm87XG4gICAgdGhpcy5fc3RhbGVTdGF0ZUFnZSA9IHN0YWxlU3RhdGVBZ2U7XG4gICAgdGhpcy5fY2xvY2tTa2V3ID0gY2xvY2tTa2V3O1xuICAgIHRoaXMuX2Nsb2NrU2VydmljZSA9IGNsb2NrU2VydmljZTtcbiAgICB0aGlzLl91c2VySW5mb0p3dElzc3VlciA9IHVzZXJJbmZvSnd0SXNzdWVyO1xuICAgIHRoaXMuX21lcmdlQ2xhaW1zID0gISFtZXJnZUNsYWltcztcblxuICAgIHRoaXMuX3N0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlO1xuICAgIHRoaXMuX3ZhbGlkYXRvciA9IG5ldyBSZXNwb25zZVZhbGlkYXRvckN0b3IodGhpcyk7XG4gICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcyk7XG5cbiAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID1cbiAgICAgIHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSBcIm9iamVjdFwiID8gZXh0cmFRdWVyeVBhcmFtcyA6IHt9O1xuICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPVxuICAgICAgdHlwZW9mIGV4dHJhVG9rZW5QYXJhbXMgPT09IFwib2JqZWN0XCIgPyBleHRyYVRva2VuUGFyYW1zIDoge307XG4gIH1cblxuICAvLyBjbGllbnQgY29uZmlnXG4gIGdldCBjbGllbnRfaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgfVxuICBzZXQgY2xpZW50X2lkKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLl9jbGllbnRfaWQpIHtcbiAgICAgIC8vIG9uZS10aW1lIHNldCBvbmx5XG4gICAgICB0aGlzLl9jbGllbnRfaWQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfY2xpZW50X2lkOiBjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIlxuICAgICAgKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNsaWVudF9pZCBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XG4gIH1cbiAgZ2V0IHJlc3BvbnNlX3R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX3R5cGU7XG4gIH1cbiAgZ2V0IHNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgfVxuICBnZXQgcmVkaXJlY3RfdXJpKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdF91cmk7XG4gIH1cbiAgZ2V0IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICB9XG4gIGdldCBjbGllbnRfYXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudF9hdXRoZW50aWNhdGlvbjtcbiAgfVxuXG4gIC8vIG9wdGlvbmFsIHByb3RvY29sIHBhcmFtc1xuICBnZXQgcHJvbXB0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9tcHQ7XG4gIH1cbiAgZ2V0IGRpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XG4gIH1cbiAgZ2V0IG1heF9hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heF9hZ2U7XG4gIH1cbiAgZ2V0IHVpX2xvY2FsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VpX2xvY2FsZXM7XG4gIH1cbiAgZ2V0IGFjcl92YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fjcl92YWx1ZXM7XG4gIH1cbiAgZ2V0IHJlc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZTtcbiAgfVxuICBnZXQgcmVzcG9uc2VfbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfbW9kZTtcbiAgfVxuXG4gIC8vIG1ldGFkYXRhXG4gIGdldCBhdXRob3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcbiAgfVxuICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLl9hdXRob3JpdHkpIHtcbiAgICAgIC8vIG9uZS10aW1lIHNldCBvbmx5XG4gICAgICB0aGlzLl9hdXRob3JpdHkgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIk9pZGNDbGllbnRTZXR0aW5ncy5zZXRfYXV0aG9yaXR5OiBhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIlxuICAgICAgKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKTtcbiAgICB9XG4gIH1cbiAgZ2V0IG1ldGFkYXRhVXJsKCkge1xuICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgJiZcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09IFwiL1wiKSB7XG4gICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFVcmw7XG4gIH1cblxuICAvLyBzZXR0YWJsZS9jYWNoYWJsZSBtZXRhZGF0YSB2YWx1ZXNcbiAgZ2V0IG1ldGFkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcbiAgfVxuICBzZXQgbWV0YWRhdGEodmFsdWUpIHtcbiAgICB0aGlzLl9tZXRhZGF0YSA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXRhZGF0YVNlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VlZDtcbiAgfVxuICBzZXQgbWV0YWRhdGFTZWVkKHZhbHVlKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFTZWVkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2lnbmluZ0tleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pbmdLZXlzO1xuICB9XG4gIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xuICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gdmFsdWU7XG4gIH1cblxuICAvLyBiZWhhdmlvciBmbGFnc1xuICBnZXQgZmlsdGVyUHJvdG9jb2xDbGFpbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zO1xuICB9XG4gIGdldCBsb2FkVXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VySW5mbztcbiAgfVxuICBnZXQgc3RhbGVTdGF0ZUFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcbiAgfVxuICBnZXQgY2xvY2tTa2V3KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9ja1NrZXc7XG4gIH1cbiAgZ2V0IHVzZXJJbmZvSnd0SXNzdWVyKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VySW5mb0p3dElzc3VlcjtcbiAgfVxuICBnZXQgbWVyZ2VDbGFpbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lcmdlQ2xhaW1zO1xuICB9XG5cbiAgZ2V0IHN0YXRlU3RvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RvcmU7XG4gIH1cbiAgZ2V0IHZhbGlkYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuICB9XG4gIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcbiAgfVxuXG4gIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICBnZXQgZXh0cmFRdWVyeVBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFRdWVyeVBhcmFtcztcbiAgfVxuICBzZXQgZXh0cmFRdWVyeVBhcmFtcyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4dHJhIHRva2VuIHBhcmFtc1xuICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFUb2tlblBhcmFtcztcbiAgfVxuICBzZXQgZXh0cmFUb2tlblBhcmFtcyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldCB0aGUgdGltZVxuICBnZXRFcG9jaFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2VydmljZS5nZXRFcG9jaFRpbWUoKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBQb3B1cFdpbmRvdyB9IGZyb20gXCIuL1BvcHVwV2luZG93LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cE5hdmlnYXRvciB7XG4gIHByZXBhcmUocGFyYW1zKSB7XG4gICAgbGV0IHBvcHVwID0gbmV3IFBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XG4gIH1cblxuICBjYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcbiAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcblxuICAgIHRyeSB7XG4gICAgICBQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXIodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tIFwiLi9VcmxVdGlsaXR5LmpzXCI7XG5cbmNvbnN0IENoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbCA9IDUwMDtcbmNvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID1cbiAgXCJsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7XCI7XG4vL2NvbnN0IERlZmF1bHRQb3B1cEZlYXR1cmVzID0gJ2xvY2F0aW9uPW5vLHRvb2xiYXI9bm8sd2lkdGg9NTAwLGhlaWdodD01MDAsbGVmdD0xMDAsdG9wPTEwMDtyZXNpemFibGU9eWVzJztcblxuY29uc3QgRGVmYXVsdFBvcHVwVGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwV2luZG93IHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgbGV0IHRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XG4gICAgbGV0IGZlYXR1cmVzID0gcGFyYW1zLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgRGVmYXVsdFBvcHVwRmVhdHVyZXM7XG5cbiAgICB0aGlzLl9wb3B1cCA9IHdpbmRvdy5vcGVuKFwiXCIsIHRhcmdldCwgZmVhdHVyZXMpO1xuICAgIGlmICh0aGlzLl9wb3B1cCkge1xuICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY3RvcjogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XG4gICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG4gICAgICAgIHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWQuYmluZCh0aGlzKSxcbiAgICAgICAgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG5cbiAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgaWYgKCF0aGlzLl9wb3B1cCkge1xuICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XG4gICAgfSBlbHNlIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XG4gICAgICB0aGlzLl9lcnJvcihcIlBvcHVwV2luZG93Lm5hdmlnYXRlOiBubyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IFNldHRpbmcgVVJMIGluIHBvcHVwXCIpO1xuXG4gICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcbiAgICAgIGlmICh0aGlzLl9pZCkge1xuICAgICAgICB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgcGFyYW1zLmlkXSA9IHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHVwLmZvY3VzKCk7XG4gICAgICB0aGlzLl9wb3B1cC53aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudXJsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gIH1cblxuICBfc3VjY2VzcyhkYXRhKSB7XG4gICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2s6IFN1Y2Nlc3NmdWwgcmVzcG9uc2UgZnJvbSBwb3B1cCB3aW5kb3dcIik7XG5cbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcbiAgfVxuICBfZXJyb3IobWVzc2FnZSkge1xuICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XG5cbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhbnVwKGZhbHNlKTtcbiAgfVxuXG4gIF9jbGVhbnVwKGtlZXBPcGVuKSB7XG4gICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2xlYW51cFwiKTtcblxuICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lcik7XG4gICAgdGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyID0gbnVsbDtcblxuICAgIGRlbGV0ZSB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgdGhpcy5faWRdO1xuXG4gICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xuICAgICAgdGhpcy5fcG9wdXAuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5fcG9wdXAgPSBudWxsO1xuICB9XG5cbiAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9wb3B1cCB8fCB0aGlzLl9wb3B1cC5jbG9zZWQpIHtcbiAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXAgd2luZG93IGNsb3NlZFwiKTtcbiAgICB9XG4gIH1cblxuICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgIHRoaXMuX2NsZWFudXAoa2VlcE9wZW4pO1xuXG4gICAgaWYgKHVybCkge1xuICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2sgc3VjY2Vzc1wiKTtcbiAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2s6IEludmFsaWQgcmVzcG9uc2UgZnJvbSBwb3B1cFwiKTtcbiAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBub3RpZnlPcGVuZXIodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKSB7XG4gICAgaWYgKHdpbmRvdy5vcGVuZXIpIHtcbiAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xuXG4gICAgICAgIGlmIChkYXRhLnN0YXRlKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBcInBvcHVwQ2FsbGJhY2tfXCIgKyBkYXRhLnN0YXRlO1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBwYXNzaW5nIHVybCBtZXNzYWdlIHRvIG9wZW5lclwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FsbGJhY2sodXJsLCBrZWVwT3Blbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZy53YXJuKFxuICAgICAgICAgICAgICBcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gbWF0Y2hpbmcgY2FsbGJhY2sgZm91bmQgb24gb3BlbmVyXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZy53YXJuKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBubyBzdGF0ZSBmb3VuZCBpbiByZXNwb25zZSB1cmxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLndhcm4oXG4gICAgICAgIFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBubyB3aW5kb3cub3BlbmVyLiBDYW4ndCBjb21wbGV0ZSBub3RpZmljYXRpb24uXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcbiAgcHJlcGFyZSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICB9XG5cbiAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcbiAgICAgIExvZy5lcnJvcihcIlJlZGlyZWN0TmF2aWdhdG9yLm5hdmlnYXRlOiBObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXJhbXMudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBnZXQgdXJsKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9NZXRhZGF0YVNlcnZpY2UuanNcIjtcbmltcG9ydCB7IFVzZXJJbmZvU2VydmljZSB9IGZyb20gXCIuL1VzZXJJbmZvU2VydmljZS5qc1wiO1xuaW1wb3J0IHsgVG9rZW5DbGllbnQgfSBmcm9tIFwiLi9Ub2tlbkNsaWVudC5qc1wiO1xuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSB9IGZyb20gXCIuL0Vycm9yUmVzcG9uc2UuanNcIjtcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSBcIi4vSm9zZVV0aWwuanNcIjtcblxuY29uc3QgUHJvdG9jb2xDbGFpbXMgPSBbXG4gIFwibm9uY2VcIixcbiAgXCJhdF9oYXNoXCIsXG4gIFwiaWF0XCIsXG4gIFwibmJmXCIsXG4gIFwiZXhwXCIsXG4gIFwiYXVkXCIsXG4gIFwiaXNzXCIsXG4gIFwiY19oYXNoXCIsXG5dO1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5ncyxcbiAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxuICAgIFVzZXJJbmZvU2VydmljZUN0b3IgPSBVc2VySW5mb1NlcnZpY2UsXG4gICAgam9zZVV0aWwgPSBKb3NlVXRpbCxcbiAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudFxuICApIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIFJlc3BvbnNlVmFsaWRhdG9yXCJcbiAgICAgICk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB0aGlzLl91c2VySW5mb1NlcnZpY2UgPSBuZXcgVXNlckluZm9TZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgICB0aGlzLl90b2tlbkNsaWVudCA9IG5ldyBUb2tlbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduaW5SZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZTogc3RhdGUgcHJvY2Vzc2VkXCIpO1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZTogdG9rZW5zIHZhbGlkYXRlZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZTogY2xhaW1zIHByb2Nlc3NlZFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIikpO1xuICAgIH1cblxuICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcbiAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcbiAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcblxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgTG9nLndhcm4oXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFJlc3BvbnNlIHdhcyBlcnJvclwiLFxuICAgICAgICByZXNwb25zZS5lcnJvclxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG5cbiAgX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmNsaWVudF9pZCkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBjbGllbnRfaWQgb24gc3RhdGVcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjbGllbnRfaWQgb24gc3RhdGVcIikpO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXG4gICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkpIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSA9IHN0YXRlLmF1dGhvcml0eTtcbiAgICB9XG4gICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGF1dGhvcml0eSBpZiB0aGUgYXV0aG9yaXR5IGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcbiAgICBlbHNlIGlmIChcbiAgICAgIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAmJlxuICAgICAgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ICE9PSBzdGF0ZS5hdXRob3JpdHlcbiAgICApIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKFwiYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIilcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxuICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgPSBzdGF0ZS5jbGllbnRfaWQ7XG4gICAgfVxuICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBjbGllbnRfaWQgaWYgdGhlIGNsaWVudF9pZCBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXG4gICAgZWxzZSBpZiAoXG4gICAgICB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgJiZcbiAgICAgIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAhPT0gc3RhdGUuY2xpZW50X2lkXG4gICAgKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcImNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcbiAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcbiAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogc3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcblxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgTG9nLndhcm4oXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IFJlc3BvbnNlIHdhcyBlcnJvclwiLFxuICAgICAgICByZXNwb25zZS5lcnJvclxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5ub25jZSAmJiAhcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW4gaW4gcmVzcG9uc2VcIikpO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUubm9uY2UgJiYgcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm90IGV4cGVjdGluZyBpZF90b2tlbiBpbiByZXNwb25zZVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIikpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jb2RlX3ZlcmlmaWVyICYmICFyZXNwb25zZS5jb2RlKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IEV4cGVjdGluZyBjb2RlIGluIHJlc3BvbnNlXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY29kZSBpbiByZXNwb25zZVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5jb2RlX3ZlcmlmaWVyICYmIHJlc3BvbnNlLmNvZGUpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm90IGV4cGVjdGluZyBjb2RlIGluIHJlc3BvbnNlXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBjb2RlIGluIHJlc3BvbnNlXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlLnNjb3BlKSB7XG4gICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XG4gICAgICByZXNwb25zZS5zY29wZSA9IHN0YXRlLnNjb3BlO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG5cbiAgX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzT3BlbklkQ29ubmVjdCkge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiXG4gICAgICApO1xuXG4gICAgICByZXNwb25zZS5wcm9maWxlID0gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMocmVzcG9uc2UucHJvZmlsZSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuc2tpcFVzZXJJbmZvICE9PSB0cnVlICYmXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmxvYWRVc2VySW5mbyAmJlxuICAgICAgICByZXNwb25zZS5hY2Nlc3NfdG9rZW5cbiAgICAgICkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogbG9hZGluZyB1c2VyIGluZm9cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvU2VydmljZVxuICAgICAgICAgIC5nZXRDbGFpbXMocmVzcG9uc2UuYWNjZXNzX3Rva2VuKVxuICAgICAgICAgIC50aGVuKChjbGFpbXMpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogdXNlciBpbmZvIGNsYWltcyByZWNlaXZlZCBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoY2xhaW1zLnN1YiAhPT0gcmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHN1YiBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludCBkb2VzIG5vdCBtYXRjaCBzdWIgaW4gaWRfdG9rZW5cIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSB0aGlzLl9tZXJnZUNsYWltcyhyZXNwb25zZS5wcm9maWxlLCBjbGFpbXMpO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkLCB1cGRhdGVkIHByb2ZpbGU6XCIsXG4gICAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiBub3QgbG9hZGluZyB1c2VyIGluZm9cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogcmVzcG9uc2UgaXMgbm90IE9JREMsIG5vdCBwcm9jZXNzaW5nIGNsYWltc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG5cbiAgX21lcmdlQ2xhaW1zKGNsYWltczEsIGNsYWltczIpIHtcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgY2xhaW1zMSk7XG5cbiAgICBmb3IgKGxldCBuYW1lIGluIGNsYWltczIpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgaWYgKCFyZXN1bHRbbmFtZV0pIHtcbiAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdFtuYW1lXSkpIHtcbiAgICAgICAgICBpZiAocmVzdWx0W25hbWVdLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzLl9zZXR0aW5ncy5tZXJnZUNsYWltcykge1xuICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gdGhpcy5fbWVyZ2VDbGFpbXMocmVzdWx0W25hbWVdLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IFtyZXN1bHRbbmFtZV0sIHZhbHVlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2ZpbHRlclByb3RvY29sQ2xhaW1zKGNsYWltcykge1xuICAgIExvZy5kZWJ1ZyhcbiAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zLCBpbmNvbWluZyBjbGFpbXM6XCIsXG4gICAgICBjbGFpbXNcbiAgICApO1xuXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltcyk7XG5cbiAgICBpZiAodGhpcy5fc2V0dGluZ3MuX2ZpbHRlclByb3RvY29sQ2xhaW1zKSB7XG4gICAgICBQcm90b2NvbENsYWltcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XG4gICAgICB9KTtcblxuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIGZpbHRlcmVkXCIsXG4gICAgICAgIHJlc3VsdFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmNvZGUpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBjb2RlXCIpO1xuICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICBpZiAocmVzcG9uc2UuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlbiBhbmQgYWNjZXNzX3Rva2VuXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICB9XG5cbiAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBMb2cuZGVidWcoXG4gICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogTm8gY29kZSB0byBwcm9jZXNzIG9yIGlkX3Rva2VuIHRvIHZhbGlkYXRlXCJcbiAgICApO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG5cbiAgX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSkge1xuICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgY2xpZW50X2lkOiBzdGF0ZS5jbGllbnRfaWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiBzdGF0ZS5jbGllbnRfc2VjcmV0LFxuICAgICAgY29kZTogcmVzcG9uc2UuY29kZSxcbiAgICAgIHJlZGlyZWN0X3VyaTogc3RhdGUucmVkaXJlY3RfdXJpLFxuICAgICAgY29kZV92ZXJpZmllcjogc3RhdGUuY29kZV92ZXJpZmllcixcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMgJiYgdHlwZW9mIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdCwgc3RhdGUuZXh0cmFUb2tlblBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZShyZXF1ZXN0KS50aGVuKCh0b2tlblJlc3BvbnNlKSA9PiB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdG9rZW5SZXNwb25zZSkge1xuICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDb2RlOiB0b2tlbiByZXNwb25zZSBzdWNjZXNzZnVsLCBwcm9jZXNzaW5nIGlkX3Rva2VuXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcmV0dXJuaW5nIHJlc3BvbnNlXCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pO1xuICB9XG5cbiAgX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKChpc3N1ZXIpID0+IHtcbiAgICAgIGxldCBhdWRpZW5jZSA9IHN0YXRlLmNsaWVudF9pZDtcbiAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XG4gICAgICBMb2cuZGVidWcoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IFZhbGlkYWluZyBKV1QgYXR0cmlidXRlczsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLFxuICAgICAgICBjbG9ja1NrZXdJblNlY29uZHNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5nZXRFcG9jaFRpbWUoKS50aGVuKChub3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsXG4gICAgICAgICAgLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkX3Rva2VuLFxuICAgICAgICAgICAgaXNzdWVyLFxuICAgICAgICAgICAgYXVkaWVuY2UsXG4gICAgICAgICAgICBjbG9ja1NrZXdJblNlY29uZHMsXG4gICAgICAgICAgICBub3dcbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5ub25jZSAmJiBzdGF0ZS5ub25jZSAhPT0gcGF5bG9hZC5ub25jZSkge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gcGF5bG9hZDtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFNpZ25pbmdLZXlGb3JKd3Qoand0KSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oKGtleXMpID0+IHtcbiAgICAgIGNvbnN0IGtpZCA9IGp3dC5oZWFkZXIua2lkO1xuICAgICAgaWYgKCFrZXlzKSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcbiAgICAgIH1cblxuICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xuICAgICAgbGV0IGtleTtcbiAgICAgIGlmICgha2lkKSB7XG4gICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XG5cbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XG4gICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xuICAgICAgICAgIGtleSA9IGtleXNbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleSA9IGtleXMuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xuICAgICAgICB9KVswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaWduaW5nS2V5Rm9ySnd0V2l0aFNpbmdsZVJldHJ5KGp3dCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRTaWduaW5nS2V5Rm9ySnd0KGp3dCkudGhlbigoa2V5KSA9PiB7XG4gICAgICAvLyBSZWZyZXNoaW5nIHNpZ25pbmdLZXlzIGlmIG5vIHN1aXRhYmxlIHZlcmlmaWNhdGlvbiBrZXkgaXMgcHJlc2VudCBmb3IgZ2l2ZW4gand0IGhlYWRlci5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIC8vIHNldCB0byB1bmRlZmluZWQsIHRvIHRyaWdnZXIgbmV0d29yayBjYWxsIHRvIGp3a3NfdXJpLlxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UucmVzZXRTaWduaW5nS2V5cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U2lnbmluZ0tleUZvckp3dChqd3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICBpZiAoIXN0YXRlLm5vbmNlKSB7XG4gICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBub25jZSBvbiBzdGF0ZVwiKSk7XG4gICAgfVxuXG4gICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcbiAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlciB8fCAhand0LnBheWxvYWQpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIixcbiAgICAgICAgand0XG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm5vbmNlICE9PSBqd3QucGF5bG9hZC5ub25jZSkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oKGlzc3VlcikgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xuICAgICAgcmV0dXJuIHRoaXMuX2dldFNpZ25pbmdLZXlGb3JKd3RXaXRoU2luZ2xlUmV0cnkoand0KS50aGVuKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXCJObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xuXG4gICAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIixcbiAgICAgICAgICBjbG9ja1NrZXdJblNlY29uZHNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWxcbiAgICAgICAgICAudmFsaWRhdGVKd3QoXG4gICAgICAgICAgICByZXNwb25zZS5pZF90b2tlbixcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGlzc3VlcixcbiAgICAgICAgICAgIGF1ZGllbmNlLFxuICAgICAgICAgICAgY2xvY2tTa2V3SW5TZWNvbmRzXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBKV1QgdmFsaWRhdGlvbiBzdWNjZXNzZnVsXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICghand0LnBheWxvYWQuc3ViKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IGp3dC5wYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9maWx0ZXJCeUFsZyhrZXlzLCBhbGcpIHtcbiAgICB2YXIga3R5ID0gbnVsbDtcbiAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xuICAgICAga3R5ID0gXCJSU0FcIjtcbiAgICB9IGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiUFNcIikpIHtcbiAgICAgIGt0eSA9IFwiUFNcIjtcbiAgICB9IGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcbiAgICAgIGt0eSA9IFwiRUNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBhbGcgbm90IHN1cHBvcnRlZDogXCIsIGFsZyk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLFxuICAgICAga3R5XG4gICAgKTtcblxuICAgIGtleXMgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ga2V5Lmt0eSA9PT0ga3R5O1xuICAgIH0pO1xuXG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IE51bWJlciBvZiBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIixcbiAgICAgIGt0eSxcbiAgICAgIGtleXMubGVuZ3RoXG4gICAgKTtcblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIikpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIGF0X2hhc2ggaW4gaWRfdG9rZW5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gaWRfdG9rZW5cIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW5cIikpO1xuICAgIH1cblxuICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XG4gICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIsXG4gICAgICAgIGp3dFxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgIH1cblxuICAgIHZhciBoYXNoQWxnID0gand0LmhlYWRlci5hbGc7XG4gICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIixcbiAgICAgICAgaGFzaEFsZ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgIH1cblxuICAgIHZhciBoYXNoQml0cyA9IGhhc2hBbGcuc3Vic3RyKDIsIDMpO1xuICAgIGlmICghaGFzaEJpdHMpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLFxuICAgICAgICBoYXNoQWxnLFxuICAgICAgICBoYXNoQml0c1xuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgIH1cblxuICAgIGhhc2hCaXRzID0gcGFyc2VJbnQoaGFzaEJpdHMpO1xuICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsXG4gICAgICAgIGhhc2hBbGcsXG4gICAgICAgIGhhc2hCaXRzXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgfVxuXG4gICAgbGV0IHNoYSA9IFwic2hhXCIgKyBoYXNoQml0cztcbiAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xuICAgIGlmICghaGFzaCkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBhY2Nlc3NfdG9rZW4gaGFzaCBmYWlsZWQ6XCIsXG4gICAgICAgIHNoYVxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xuICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcbiAgICBpZiAobGVmdF9iNjR1ICE9PSByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIixcbiAgICAgICAgbGVmdF9iNjR1LFxuICAgICAgICByZXNwb25zZS5wcm9maWxlLmF0X2hhc2hcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xuICAgIH1cblxuICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBzdWNjZXNzXCIpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgQ2hlY2tTZXNzaW9uSUZyYW1lIH0gZnJvbSBcIi4vQ2hlY2tTZXNzaW9uSUZyYW1lLmpzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWwuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25Nb25pdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXNlck1hbmFnZXIsXG4gICAgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICB0aW1lciA9IEdsb2JhbC50aW1lclxuICApIHtcbiAgICBpZiAoIXVzZXJNYW5hZ2VyKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuY3RvcjogTm8gdXNlciBtYW5hZ2VyIHBhc3NlZCB0byBTZXNzaW9uTW9uaXRvclwiXG4gICAgICApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlck1hbmFnZXJcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvcjtcbiAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xuXG4gICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJMb2FkZWQodGhpcy5fc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJVbmxvYWRlZCh0aGlzLl9zdG9wLmJpbmQodGhpcykpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgdGhpcy5fdXNlck1hbmFnZXJcbiAgICAgICAgLmdldFVzZXIoKVxuICAgICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgIC8vIGRvaW5nIHRoaXMgbWFudWFsbHkgaGVyZSBzaW5jZSBjYWxsaW5nIGdldFVzZXJcbiAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnQodXNlcik7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2Vzc2lvblN0YXR1cygpXG4gICAgICAgICAgICAgIC50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBzZXNzaW9uLnNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcbiAgICAgICAgICAgICAgICAgIHRtcFVzZXIucHJvZmlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcbiAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZCxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHRtcFVzZXIpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLFxuICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gZ2V0VXNlcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgX3NldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5zZXR0aW5ncztcbiAgfVxuICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIubWV0YWRhdGFTZXJ2aWNlO1xuICB9XG4gIGdldCBfY2xpZW50X2lkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gIH1cbiAgZ2V0IF9jaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gIH1cbiAgZ2V0IF9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG4gIH1cblxuICBfc3RhcnQodXNlcikge1xuICAgIGxldCBzZXNzaW9uX3N0YXRlID0gdXNlci5zZXNzaW9uX3N0YXRlO1xuXG4gICAgaWYgKHNlc3Npb25fc3RhdGUpIHtcbiAgICAgIGlmICh1c2VyLnByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcbiAgICAgICAgdGhpcy5fc2lkID0gdXNlci5wcm9maWxlLnNpZDtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBzZXNzaW9uX3N0YXRlOlwiLFxuICAgICAgICAgIHNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgXCIsIHN1YjpcIixcbiAgICAgICAgICB0aGlzLl9zdWJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fc2lkID0gdW5kZWZpbmVkO1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsXG4gICAgICAgICAgc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICBcIiwgYW5vbnltb3VzIHVzZXJcIlxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2VcbiAgICAgICAgICAuZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKClcbiAgICAgICAgICAudGhlbigodXJsKSA9PiB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogSW5pdGlhbGl6aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lXCJcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fY2xpZW50X2lkO1xuICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICAgICAgICAgICAgbGV0IHN0b3BPbkVycm9yID0gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG5cbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IoXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGludGVydmFsLFxuICAgICAgICAgICAgICAgIHN0b3BPbkVycm9yXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIExvZy53YXJuKFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBObyBjaGVjayBzZXNzaW9uIGlmcmFtZSBmb3VuZCBpbiB0aGUgbWV0YWRhdGFcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xuICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsXG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zdG9wKCkge1xuICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lKSB7XG4gICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RvcFwiKTtcbiAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XG4gICAgICAvLyB1c2luZyBhIHRpbWVyIHRvIGRlbGF5IHJlLWluaXRpYWxpemF0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyBkdXJpbmcgc2lnbm91dFxuICAgICAgbGV0IHRpbWVySGFuZGxlID0gdGhpcy5fdGltZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl90aW1lci5jbGVhckludGVydmFsKHRpbWVySGFuZGxlKTtcblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlclxuICAgICAgICAgIC5xdWVyeVNlc3Npb25TdGF0dXMoKVxuICAgICAgICAgIC50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG1wVXNlciA9IHtcbiAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xuICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XG4gICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcbiAgICAgICAgICAgICAgICBzaWQ6IHNlc3Npb24uc2lkLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY2FsbGJhY2tcbiAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvcjogZXJyb3IgZnJvbSBxdWVyeVNlc3Npb25TdGF0dXM6XCIsXG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX2NhbGxiYWNrKCkge1xuICAgIHRoaXMuX3VzZXJNYW5hZ2VyXG4gICAgICAucXVlcnlTZXNzaW9uU3RhdHVzKClcbiAgICAgIC50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICAgIHZhciByYWlzZUV2ZW50ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiA9PT0gdGhpcy5fc3ViKSB7XG4gICAgICAgICAgICByYWlzZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcblxuICAgICAgICAgICAgaWYgKHNlc3Npb24uc2lkID09PSB0aGlzLl9zaWQpIHtcbiAgICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnNlc3Npb25fc3RhdGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBEaWZmZXJlbnQgc3ViamVjdCBzaWduZWQgaW50byBPUDpcIixcbiAgICAgICAgICAgICAgc2Vzc2lvbi5zdWJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTdWJqZWN0IG5vIGxvbmdlciBzaWduZWQgaW50byBPUFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgaW4gZXZlbnRcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkSW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3ViKSB7XG4gICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IEVycm9yIGNhbGxpbmcgcXVlcnlDdXJyZW50U2lnbmluU2Vzc2lvbjsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCIsXG4gICAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gXCIuL1VybFV0aWxpdHkuanNcIjtcbmltcG9ydCB7IFNpZ25pblN0YXRlIH0gZnJvbSBcIi4vU2lnbmluU3RhdGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25pblJlcXVlc3Qge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgLy8gbWFuZGF0b3J5XG4gICAgdXJsLFxuICAgIGNsaWVudF9pZCxcbiAgICByZWRpcmVjdF91cmksXG4gICAgcmVzcG9uc2VfdHlwZSxcbiAgICBzY29wZSxcbiAgICBhdXRob3JpdHksXG4gICAgLy8gb3B0aW9uYWxcbiAgICBkYXRhLFxuICAgIHByb21wdCxcbiAgICBkaXNwbGF5LFxuICAgIG1heF9hZ2UsXG4gICAgdWlfbG9jYWxlcyxcbiAgICBpZF90b2tlbl9oaW50LFxuICAgIGxvZ2luX2hpbnQsXG4gICAgYWNyX3ZhbHVlcyxcbiAgICByZXNvdXJjZSxcbiAgICByZXNwb25zZV9tb2RlLFxuICAgIHJlcXVlc3QsXG4gICAgcmVxdWVzdF91cmksXG4gICAgZXh0cmFRdWVyeVBhcmFtcyxcbiAgICByZXF1ZXN0X3R5cGUsXG4gICAgY2xpZW50X3NlY3JldCxcbiAgICBleHRyYVRva2VuUGFyYW1zLFxuICAgIHNraXBVc2VySW5mbyxcbiAgfSkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHVybCBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgfVxuICAgIGlmICghY2xpZW50X2lkKSB7XG4gICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGNsaWVudF9pZCBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWRcIik7XG4gICAgfVxuICAgIGlmICghcmVkaXJlY3RfdXJpKSB7XG4gICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWRpcmVjdF91cmlcIik7XG4gICAgfVxuICAgIGlmICghcmVzcG9uc2VfdHlwZSkge1xuICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyByZXNwb25zZV90eXBlIHBhc3NlZFwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlX3R5cGVcIik7XG4gICAgfVxuICAgIGlmICghc2NvcGUpIHtcbiAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gc2NvcGUgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2NvcGVcIik7XG4gICAgfVxuICAgIGlmICghYXV0aG9yaXR5KSB7XG4gICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHlcIik7XG4gICAgfVxuXG4gICAgbGV0IG9pZGMgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhyZXNwb25zZV90eXBlKTtcbiAgICBsZXQgY29kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpO1xuXG4gICAgaWYgKCFyZXNwb25zZV9tb2RlKSB7XG4gICAgICByZXNwb25zZV9tb2RlID0gU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgPyBcInF1ZXJ5XCIgOiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSBuZXcgU2lnbmluU3RhdGUoe1xuICAgICAgbm9uY2U6IG9pZGMsXG4gICAgICBkYXRhLFxuICAgICAgY2xpZW50X2lkLFxuICAgICAgYXV0aG9yaXR5LFxuICAgICAgcmVkaXJlY3RfdXJpLFxuICAgICAgY29kZV92ZXJpZmllcjogY29kZSxcbiAgICAgIHJlcXVlc3RfdHlwZSxcbiAgICAgIHJlc3BvbnNlX21vZGUsXG4gICAgICBjbGllbnRfc2VjcmV0LFxuICAgICAgc2NvcGUsXG4gICAgICBleHRyYVRva2VuUGFyYW1zLFxuICAgICAgc2tpcFVzZXJJbmZvLFxuICAgIH0pO1xuXG4gICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcbiAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xuICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcbiAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInNjb3BlXCIsIHNjb3BlKTtcblxuICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgaWYgKG9pZGMpIHtcbiAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwibm9uY2VcIiwgdGhpcy5zdGF0ZS5ub25jZSk7XG4gICAgfVxuICAgIGlmIChjb2RlKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0oXG4gICAgICAgIHVybCxcbiAgICAgICAgXCJjb2RlX2NoYWxsZW5nZVwiLFxuICAgICAgICB0aGlzLnN0YXRlLmNvZGVfY2hhbGxlbmdlXG4gICAgICApO1xuICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjb2RlX2NoYWxsZW5nZV9tZXRob2RcIiwgXCJTMjU2XCIpO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25hbCA9IHtcbiAgICAgIHByb21wdCxcbiAgICAgIGRpc3BsYXksXG4gICAgICBtYXhfYWdlLFxuICAgICAgdWlfbG9jYWxlcyxcbiAgICAgIGlkX3Rva2VuX2hpbnQsXG4gICAgICBsb2dpbl9oaW50LFxuICAgICAgYWNyX3ZhbHVlcyxcbiAgICAgIHJlc291cmNlLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHJlcXVlc3RfdXJpLFxuICAgICAgcmVzcG9uc2VfbW9kZSxcbiAgICB9O1xuICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25hbCkge1xuICAgICAgaWYgKG9wdGlvbmFsW2tleV0pIHtcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBvcHRpb25hbFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcykge1xuICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBleHRyYVF1ZXJ5UGFyYW1zW2tleV0pO1xuICAgIH1cblxuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gXCJpZF90b2tlblwiO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdFswXTtcbiAgfVxuXG4gIHN0YXRpYyBpc09BdXRoKHJlc3BvbnNlX3R5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBcInRva2VuXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0WzBdO1xuICB9XG5cbiAgc3RhdGljIGlzQ29kZShyZXNwb25zZV90eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gXCJjb2RlXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0WzBdO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBVcmxVdGlsaXR5IH0gZnJvbSBcIi4vVXJsVXRpbGl0eS5qc1wiO1xuXG5jb25zdCBPaWRjU2NvcGUgPSBcIm9wZW5pZFwiO1xuXG5leHBvcnQgY2xhc3MgU2lnbmluUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3Rvcih1cmwsIGRlbGltaXRlciA9IFwiI1wiKSB7XG4gICAgdmFyIHZhbHVlcyA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIGRlbGltaXRlcik7XG5cbiAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xuICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xuXG4gICAgdGhpcy5jb2RlID0gdmFsdWVzLmNvZGU7XG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlcy5zdGF0ZTtcbiAgICB0aGlzLmlkX3Rva2VuID0gdmFsdWVzLmlkX3Rva2VuO1xuICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHZhbHVlcy5zZXNzaW9uX3N0YXRlO1xuICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gdmFsdWVzLmFjY2Vzc190b2tlbjtcbiAgICB0aGlzLnRva2VuX3R5cGUgPSB2YWx1ZXMudG9rZW5fdHlwZTtcbiAgICB0aGlzLnNjb3BlID0gdmFsdWVzLnNjb3BlO1xuICAgIHRoaXMucHJvZmlsZSA9IHVuZGVmaW5lZDsgLy8gd2lsbCBiZSBzZXQgZnJvbSBSZXNwb25zZVZhbGlkYXRvclxuXG4gICAgdGhpcy5leHBpcmVzX2luID0gdmFsdWVzLmV4cGlyZXNfaW47XG4gIH1cblxuICBnZXQgZXhwaXJlc19pbigpIHtcbiAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBzZXQgZXhwaXJlc19pbih2YWx1ZSkge1xuICAgIGxldCBleHBpcmVzX2luID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmICh0eXBlb2YgZXhwaXJlc19pbiA9PT0gXCJudW1iZXJcIiAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgfVxuICB9XG5cbiAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzY29wZXMoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjb3BlIHx8IFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgfVxuXG4gIGdldCBpc09wZW5JZENvbm5lY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcGVzLmluZGV4T2YoT2lkY1Njb3BlKSA+PSAwIHx8ICEhdGhpcy5pZF90b2tlbjtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL1N0YXRlLmpzXCI7XG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gXCIuL0pvc2VVdGlsLmpzXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCIuL3JhbmRvbS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBub25jZSxcbiAgICBhdXRob3JpdHksXG4gICAgY2xpZW50X2lkLFxuICAgIHJlZGlyZWN0X3VyaSxcbiAgICBjb2RlX3ZlcmlmaWVyLFxuICAgIHJlc3BvbnNlX21vZGUsXG4gICAgY2xpZW50X3NlY3JldCxcbiAgICBzY29wZSxcbiAgICBleHRyYVRva2VuUGFyYW1zLFxuICAgIHNraXBVc2VySW5mbyxcbiAgfSA9IHt9KSB7XG4gICAgc3VwZXIoYXJndW1lbnRzWzBdKTtcblxuICAgIGlmIChub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcbiAgICB9IGVsc2UgaWYgKG5vbmNlKSB7XG4gICAgICB0aGlzLl9ub25jZSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XG4gICAgICAvLyByYW5kb20oKSBwcm9kdWNlcyAzMiBsZW5ndGhcbiAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gICAgfSBlbHNlIGlmIChjb2RlX3ZlcmlmaWVyKSB7XG4gICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gY29kZV92ZXJpZmllcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2RlX3ZlcmlmaWVyKSB7XG4gICAgICBsZXQgaGFzaCA9IEpvc2VVdGlsLmhhc2hTdHJpbmcodGhpcy5jb2RlX3ZlcmlmaWVyLCBcIlNIQTI1NlwiKTtcbiAgICAgIHRoaXMuX2NvZGVfY2hhbGxlbmdlID0gSm9zZVV0aWwuaGV4VG9CYXNlNjRVcmwoaGFzaCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xuICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcbiAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XG4gICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XG4gICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcztcbiAgICB0aGlzLl9za2lwVXNlckluZm8gPSBza2lwVXNlckluZm87XG4gIH1cblxuICBnZXQgbm9uY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vbmNlO1xuICB9XG4gIGdldCBhdXRob3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcbiAgfVxuICBnZXQgY2xpZW50X2lkKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfaWQ7XG4gIH1cbiAgZ2V0IHJlZGlyZWN0X3VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xuICB9XG4gIGdldCBjb2RlX3ZlcmlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xuICB9XG4gIGdldCBjb2RlX2NoYWxsZW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZV9jaGFsbGVuZ2U7XG4gIH1cbiAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XG4gIH1cbiAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XG4gIH1cbiAgZ2V0IHNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgfVxuICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFUb2tlblBhcmFtcztcbiAgfVxuICBnZXQgc2tpcFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XG4gIH1cblxuICB0b1N0b3JhZ2VTdHJpbmcoKSB7XG4gICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcbiAgICAgIHJlcXVlc3RfdHlwZTogdGhpcy5yZXF1ZXN0X3R5cGUsXG4gICAgICBub25jZTogdGhpcy5ub25jZSxcbiAgICAgIGNvZGVfdmVyaWZpZXI6IHRoaXMuY29kZV92ZXJpZmllcixcbiAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdF91cmksXG4gICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgIHJlc3BvbnNlX21vZGU6IHRoaXMucmVzcG9uc2VfbW9kZSxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcbiAgICAgIHNjb3BlOiB0aGlzLnNjb3BlLFxuICAgICAgZXh0cmFUb2tlblBhcmFtczogdGhpcy5leHRyYVRva2VuUGFyYW1zLFxuICAgICAgc2tpcFVzZXJJbmZvOiB0aGlzLnNraXBVc2VySW5mbyxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpO1xuICAgIHJldHVybiBuZXcgU2lnbmluU3RhdGUoZGF0YSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gXCIuL1VybFV0aWxpdHkuanNcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vU3RhdGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25vdXRSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHVybCxcbiAgICBpZF90b2tlbl9oaW50LFxuICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICBkYXRhLFxuICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgcmVxdWVzdF90eXBlLFxuICB9KSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIExvZy5lcnJvcihcIlNpZ25vdXRSZXF1ZXN0LmN0b3I6IE5vIHVybCBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgfVxuXG4gICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcbiAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiaWRfdG9rZW5faGludFwiLCBpZF90b2tlbl9oaW50KTtcbiAgICB9XG5cbiAgICBpZiAocG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0oXG4gICAgICAgIHVybCxcbiAgICAgICAgXCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmlcIixcbiAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpXG4gICAgICApO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlKHsgZGF0YSwgcmVxdWVzdF90eXBlIH0pO1xuXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGV4dHJhUXVlcnlQYXJhbXMpIHtcbiAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKTtcbiAgICB9XG5cbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gXCIuL1VybFV0aWxpdHkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25vdXRSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKHVybCkge1xuICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBcIj9cIik7XG5cbiAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xuICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlcy5zdGF0ZTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlcikge1xuICAgIHRoaXMuX3VzZXJNYW5hZ2VyID0gdXNlck1hbmFnZXI7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9jYWxsYmFjayA9IHRoaXMuX3Rva2VuRXhwaXJpbmcuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcblxuICAgICAgLy8gdGhpcyB3aWxsIHRyaWdnZXIgbG9hZGluZyBvZiB0aGUgdXNlciBzbyB0aGUgZXhwaXJpbmcgZXZlbnRzIGNhbiBiZSBpbml0aWFsaXplZFxuICAgICAgdGhpcy5fdXNlck1hbmFnZXJcbiAgICAgICAgLmdldFVzZXIoKVxuICAgICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgIFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsXG4gICAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMucmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XG4gICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2s7XG4gICAgfVxuICB9XG5cbiAgX3Rva2VuRXhwaXJpbmcoKSB7XG4gICAgdGhpcy5fdXNlck1hbmFnZXIuc2lnbmluU2lsZW50KCkudGhlbihcbiAgICAgICh1c2VyKSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlNpbGVudFJlbmV3U2VydmljZS5fdG9rZW5FeHBpcmluZzogU2lsZW50IHRva2VuIHJlbmV3YWwgc3VjY2Vzc2Z1bFwiXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IEVycm9yIGZyb20gc2lnbmluU2lsZW50OlwiLFxuICAgICAgICAgIGVyci5tZXNzYWdlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCIuL3JhbmRvbS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3Rvcih7IGlkLCBkYXRhLCBjcmVhdGVkLCByZXF1ZXN0X3R5cGUgfSA9IHt9KSB7XG4gICAgdGhpcy5faWQgPSBpZCB8fCByYW5kb20oKTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcblxuICAgIGlmICh0eXBlb2YgY3JlYXRlZCA9PT0gXCJudW1iZXJcIiAmJiBjcmVhdGVkID4gMCkge1xuICAgICAgdGhpcy5fY3JlYXRlZCA9IGNyZWF0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWF0ZWQgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgfVxuICAgIHRoaXMuX3JlcXVlc3RfdHlwZSA9IHJlcXVlc3RfdHlwZTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgZ2V0IGNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWQ7XG4gIH1cbiAgZ2V0IHJlcXVlc3RfdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdF90eXBlO1xuICB9XG5cbiAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgIExvZy5kZWJ1ZyhcIlN0YXRlLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICBMb2cuZGVidWcoXCJTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZ1wiKTtcbiAgICByZXR1cm4gbmV3IFN0YXRlKEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZykpO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyU3RhbGVTdGF0ZShzdG9yYWdlLCBhZ2UpIHtcbiAgICB2YXIgY3V0b2ZmID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBhZ2U7XG5cbiAgICByZXR1cm4gc3RvcmFnZS5nZXRBbGxLZXlzKCkudGhlbigoa2V5cykgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBnb3Qga2V5c1wiLCBrZXlzKTtcblxuICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBwID0gc3RvcmFnZS5nZXQoa2V5KS50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBzdGF0ZSA9IFN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKGl0ZW0pO1xuXG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGl0ZW0gZnJvbSBrZXk6IFwiLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBzdGF0ZS5jcmVhdGVkXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YXRlLmNyZWF0ZWQgPD0gY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IEVycm9yIHBhcnNpbmcgc3RhdGUgZm9yIGtleVwiLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogbm8gaXRlbSBpbiBzdG9yYWdlIGZvciBrZXk6IFwiLFxuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogcmVtb3ZlZCBpdGVtIGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9taXNlcy5wdXNoKHApO1xuICAgICAgfVxuXG4gICAgICBMb2cuZGVidWcoXG4gICAgICAgIFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsXG4gICAgICAgIHByb21pc2VzLmxlbmd0aFxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsLmpzXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL0V2ZW50LmpzXCI7XG5cbmNvbnN0IFRpbWVyRHVyYXRpb24gPSA1OyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBjbGFzcyBUaW1lciBleHRlbmRzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIsIG5vd0Z1bmMgPSB1bmRlZmluZWQpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xuXG4gICAgaWYgKG5vd0Z1bmMpIHtcbiAgICAgIHRoaXMuX25vd0Z1bmMgPSBub3dGdW5jO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5vdygpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fbm93RnVuYygpKTtcbiAgfVxuXG4gIGluaXQoZHVyYXRpb24pIHtcbiAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgICAgZHVyYXRpb24gPSAxO1xuICAgIH1cbiAgICBkdXJhdGlvbiA9IHBhcnNlSW50KGR1cmF0aW9uKTtcblxuICAgIHZhciBleHBpcmF0aW9uID0gdGhpcy5ub3cgKyBkdXJhdGlvbjtcbiAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIHJlaW5pdGlhbGl6ZSB0byBzYW1lIGV4cGlyYXRpb24sIHNvIGJhaWwgb3V0XG4gICAgICBMb2cuZGVidWcoXG4gICAgICAgIFwiVGltZXIuaW5pdCB0aW1lciBcIiArXG4gICAgICAgICAgdGhpcy5fbmFtZSArXG4gICAgICAgICAgXCIgc2tpcHBpbmcgaW5pdGlhbGl6YXRpb24gc2luY2UgYWxyZWFkeSBpbml0aWFsaXplZCBmb3IgZXhwaXJhdGlvbjpcIixcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIGZvciBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xuICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xuXG4gICAgLy8gd2UncmUgdXNpbmcgYSBmYWlybHkgc2hvcnQgdGltZXIgYW5kIHRoZW4gY2hlY2tpbmcgdGhlIGV4cGlyYXRpb24gaW4gdGhlXG4gICAgLy8gY2FsbGJhY2sgdG8gaGFuZGxlIHNjZW5hcmlvcyB3aGVyZSB0aGUgYnJvd3NlciBkZXZpY2Ugc2xlZXBzLCBhbmQgdGhlblxuICAgIC8vIHRoZSB0aW1lcnMgZW5kIHVwIGdldHRpbmcgZGVsYXllZC5cbiAgICB2YXIgdGltZXJEdXJhdGlvbiA9IFRpbWVyRHVyYXRpb247XG4gICAgaWYgKGR1cmF0aW9uIDwgdGltZXJEdXJhdGlvbikge1xuICAgICAgdGltZXJEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cbiAgICB0aGlzLl90aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKFxuICAgICAgdGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSxcbiAgICAgIHRpbWVyRHVyYXRpb24gKiAxMDAwXG4gICAgKTtcbiAgfVxuXG4gIGdldCBleHBpcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9leHBpcmF0aW9uO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLl90aW1lckhhbmRsZSkge1xuICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XG4gICAgICB0aGlzLl90aW1lci5jbGVhckludGVydmFsKHRoaXMuX3RpbWVySGFuZGxlKTtcbiAgICAgIHRoaXMuX3RpbWVySGFuZGxlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfY2FsbGJhY2soKSB7XG4gICAgdmFyIGRpZmYgPSB0aGlzLl9leHBpcmF0aW9uIC0gdGhpcy5ub3c7XG4gICAgTG9nLmRlYnVnKFwiVGltZXIuY2FsbGJhY2s7IFwiICsgdGhpcy5fbmFtZSArIFwiIHRpbWVyIGV4cGlyZXMgaW46XCIsIGRpZmYpO1xuXG4gICAgaWYgKHRoaXMuX2V4cGlyYXRpb24gPD0gdGhpcy5ub3cpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICBzdXBlci5yYWlzZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tIFwiLi9Kc29uU2VydmljZS5qc1wiO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vTWV0YWRhdGFTZXJ2aWNlLmpzXCI7XG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2V0dGluZ3MsXG4gICAgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UsXG4gICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZVxuICApIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcigpO1xuICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgfVxuXG4gIGV4Y2hhbmdlQ29kZShhcmdzID0ge30pIHtcbiAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICBhcmdzLmdyYW50X3R5cGUgPSBhcmdzLmdyYW50X3R5cGUgfHwgXCJhdXRob3JpemF0aW9uX2NvZGVcIjtcbiAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICBhcmdzLmNsaWVudF9zZWNyZXQgPSBhcmdzLmNsaWVudF9zZWNyZXQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcbiAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgIHZhciBiYXNpY0F1dGggPSB1bmRlZmluZWQ7XG4gICAgdmFyIGNsaWVudF9hdXRoZW50aWNhdGlvbiA9XG4gICAgICBhcmdzLl9jbGllbnRfYXV0aGVudGljYXRpb24gfHwgdGhpcy5fc2V0dGluZ3MuX2NsaWVudF9hdXRoZW50aWNhdGlvbjtcbiAgICBkZWxldGUgYXJncy5fY2xpZW50X2F1dGhlbnRpY2F0aW9uO1xuXG4gICAgaWYgKCFhcmdzLmNvZGUpIHtcbiAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZSBwYXNzZWRcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlIGlzIHJlcXVpcmVkXCIpKTtcbiAgICB9XG4gICAgaWYgKCFhcmdzLnJlZGlyZWN0X3VyaSkge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyByZWRpcmVjdF91cmkgcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgcmVkaXJlY3RfdXJpIGlzIHJlcXVpcmVkXCIpKTtcbiAgICB9XG4gICAgaWYgKCFhcmdzLmNvZGVfdmVyaWZpZXIpIHtcbiAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlX3ZlcmlmaWVyIGlzIHJlcXVpcmVkXCIpKTtcbiAgICB9XG4gICAgaWYgKCFhcmdzLmNsaWVudF9pZCkge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcbiAgICB9XG4gICAgaWYgKCFhcmdzLmNsaWVudF9zZWNyZXQgJiYgY2xpZW50X2F1dGhlbnRpY2F0aW9uID09IFwiY2xpZW50X3NlY3JldF9iYXNpY1wiKSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNsaWVudF9zZWNyZXQgcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X3NlY3JldCBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuXG4gICAgLy8gU2VuZGluZyB0aGUgY2xpZW50IGNyZWRlbnRpYWxzIHVzaW5nIHRoZSBCYXNpYyBBdXRoIG1ldGhvZFxuICAgIGlmIChjbGllbnRfYXV0aGVudGljYXRpb24gPT0gXCJjbGllbnRfc2VjcmV0X2Jhc2ljXCIpIHtcbiAgICAgIGJhc2ljQXV0aCA9IGFyZ3MuY2xpZW50X2lkICsgXCI6XCIgKyBhcmdzLmNsaWVudF9zZWNyZXQ7XG4gICAgICBkZWxldGUgYXJncy5jbGllbnRfaWQ7XG4gICAgICBkZWxldGUgYXJncy5jbGllbnRfc2VjcmV0O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbigodXJsKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlXG4gICAgICAgIC5wb3N0Rm9ybSh1cmwsIGFyZ3MsIGJhc2ljQXV0aClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiByZXNwb25zZSByZWNlaXZlZFwiKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhjaGFuZ2VSZWZyZXNoVG9rZW4oYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwicmVmcmVzaF90b2tlblwiO1xuICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgIGFyZ3MuY2xpZW50X3NlY3JldCA9IGFyZ3MuY2xpZW50X3NlY3JldCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0O1xuXG4gICAgdmFyIGJhc2ljQXV0aCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgY2xpZW50X2F1dGhlbnRpY2F0aW9uID1cbiAgICAgIGFyZ3MuX2NsaWVudF9hdXRoZW50aWNhdGlvbiB8fCB0aGlzLl9zZXR0aW5ncy5fY2xpZW50X2F1dGhlbnRpY2F0aW9uO1xuICAgIGRlbGV0ZSBhcmdzLl9jbGllbnRfYXV0aGVudGljYXRpb247XG5cbiAgICBpZiAoIWFyZ3MucmVmcmVzaF90b2tlbikge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IE5vIHJlZnJlc2hfdG9rZW4gcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgcmVmcmVzaF90b2tlbiBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuICAgIGlmICghYXJncy5jbGllbnRfaWQpIHtcbiAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcbiAgICB9XG5cbiAgICAvLyBTZW5kaW5nIHRoZSBjbGllbnQgY3JlZGVudGlhbHMgdXNpbmcgdGhlIEJhc2ljIEF1dGggbWV0aG9kXG4gICAgaWYgKGNsaWVudF9hdXRoZW50aWNhdGlvbiA9PSBcImNsaWVudF9zZWNyZXRfYmFzaWNcIikge1xuICAgICAgYmFzaWNBdXRoID0gYXJncy5jbGllbnRfaWQgKyBcIjpcIiArIGFyZ3MuY2xpZW50X3NlY3JldDtcbiAgICAgIGRlbGV0ZSBhcmdzLmNsaWVudF9pZDtcbiAgICAgIGRlbGV0ZSBhcmdzLmNsaWVudF9zZWNyZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRUb2tlbkVuZHBvaW50KGZhbHNlKS50aGVuKCh1cmwpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBSZWNlaXZlZCB0b2tlbiBlbmRwb2ludFwiKTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlXG4gICAgICAgIC5wb3N0Rm9ybSh1cmwsIGFyZ3MsIGJhc2ljQXV0aClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vTWV0YWRhdGFTZXJ2aWNlLmpzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWwuanNcIjtcblxuY29uc3QgQWNjZXNzVG9rZW5UeXBlSGludCA9IFwiYWNjZXNzX3Rva2VuXCI7XG5jb25zdCBSZWZyZXNoVG9rZW5UeXBlSGludCA9IFwicmVmcmVzaF90b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2V0dGluZ3MsXG4gICAgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LFxuICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmN0b3I6IE5vIHNldHRpbmdzIHByb3ZpZGVkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2V0dGluZ3MgcHJvdmlkZWQuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xuICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgfVxuXG4gIHJldm9rZSh0b2tlbiwgcmVxdWlyZWQsIHR5cGUgPSBcImFjY2Vzc190b2tlblwiKSB7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTm8gdG9rZW4gcHJvdmlkZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB0b2tlbiBwcm92aWRlZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IEFjY2Vzc1Rva2VuVHlwZUhpbnQgJiYgdHlwZSAhPSBSZWZyZXNoVG9rZW5UeXBlSGludCkge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSW52YWxpZCB0b2tlbiB0eXBlXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlbiB0eXBlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFJldm9jYXRpb25FbmRwb2ludCgpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJldm9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgTG9nLmRlYnVnKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogUmV2b2tpbmcgXCIgKyB0eXBlKTtcbiAgICAgIHZhciBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgICB2YXIgY2xpZW50X3NlY3JldCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9zZWNyZXQ7XG4gICAgICByZXR1cm4gdGhpcy5fcmV2b2tlKHVybCwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCB0b2tlbiwgdHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfcmV2b2tlKHVybCwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCB0b2tlbiwgdHlwZSkge1xuICAgIHZhciBvcHRpb25zID0ge21ldGhvZDogXCJQT1NUXCIsIGhlYWRlcnM6e30sIGJvZHk6IFwiXCJ9XG4gICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgIGxldCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGJvZHkuYXBwZW5kKFwiY2xpZW50X2lkXCIsIGNsaWVudF9pZCk7XG4gICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcbiAgICAgIGJvZHkuYXBwZW5kKFwiY2xpZW50X3NlY3JldFwiLCBjbGllbnRfc2VjcmV0KTtcbiAgICB9XG4gICAgYm9keS5hcHBlbmQoXCJ0b2tlbl90eXBlX2hpbnRcIiwgdHlwZSk7XG4gICAgYm9keS5hcHBlbmQoXCJ0b2tlblwiLCB0b2tlbik7XG4gICAgb3B0aW9ucy5ib2R5ID0gYm9keS50b1N0cmluZygpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJjID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IEhUVFAgcmVzcG9uc2UgcmVjZWl2ZWQsIHN0YXR1c1wiLCByYy5zdGF0dXMpO1xuICAgICAgaWYgKHJjLm9rICYmIHJjLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmMuc3RhdHVzVGV4dCArIFwiIChcIiArIHJjLnN0YXR1cyArIFwiKVwiKVxuICAgICAgfVxuICAgIH0gY2F0Y2goZXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IE5ldHdvcmsgRXJyb3IuXCIsIGV4Lm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBVcmxVdGlsaXR5IHtcbiAgc3RhdGljIGFkZFF1ZXJ5UGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh1cmwuaW5kZXhPZihcIj9cIikgPCAwKSB7XG4gICAgICB1cmwgKz0gXCI/XCI7XG4gICAgfVxuXG4gICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gIT09IFwiP1wiKSB7XG4gICAgICB1cmwgKz0gXCImXCI7XG4gICAgfVxuXG4gICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICB1cmwgKz0gXCI9XCI7XG4gICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlVXJsRnJhZ21lbnQodmFsdWUsIGRlbGltaXRlciA9IFwiI1wiLCBnbG9iYWwgPSBHbG9iYWwpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YWx1ZSA9IGdsb2JhbC5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuICAgIHZhciBpZHggPSB2YWx1ZS5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGltaXRlciA9PT0gXCI/XCIpIHtcbiAgICAgIC8vIGlmIHdlJ3JlIGRvaW5nIHF1ZXJ5LCB0aGVuIHN0cmlwIG9mZiBoYXNoIGZyYWdtZW50IGJlZm9yZSB3ZSBwYXJzZVxuICAgICAgaWR4ID0gdmFsdWUuaW5kZXhPZihcIiNcIik7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGFyYW1zID0ge30sXG4gICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXG4gICAgICBtO1xuXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSkge1xuICAgICAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChtWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIG1bMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKVxuICAgICAgKTtcbiAgICAgIGlmIChjb3VudGVyKysgPiA1MCkge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQ6IHJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIHByb3AgaW4gcGFyYW1zKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkX3Rva2VuLFxuICAgIHNlc3Npb25fc3RhdGUsXG4gICAgYWNjZXNzX3Rva2VuLFxuICAgIHJlZnJlc2hfdG9rZW4sXG4gICAgdG9rZW5fdHlwZSxcbiAgICBzY29wZSxcbiAgICBwcm9maWxlLFxuICAgIGV4cGlyZXNfYXQsXG4gICAgc3RhdGUsXG4gIH0pIHtcbiAgICB0aGlzLmlkX3Rva2VuID0gaWRfdG9rZW47XG4gICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcbiAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcbiAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSByZWZyZXNoX3Rva2VuO1xuICAgIHRoaXMudG9rZW5fdHlwZSA9IHRva2VuX3R5cGU7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucHJvZmlsZSA9IHByb2ZpbGU7XG4gICAgdGhpcy5leHBpcmVzX2F0ID0gZXhwaXJlc19hdDtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICBnZXQgZXhwaXJlc19pbigpIHtcbiAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBzZXQgZXhwaXJlc19pbih2YWx1ZSkge1xuICAgIGxldCBleHBpcmVzX2luID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmICh0eXBlb2YgZXhwaXJlc19pbiA9PT0gXCJudW1iZXJcIiAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgfVxuICB9XG5cbiAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzY29wZXMoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjb3BlIHx8IFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgfVxuXG4gIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWRfdG9rZW46IHRoaXMuaWRfdG9rZW4sXG4gICAgICBzZXNzaW9uX3N0YXRlOiB0aGlzLnNlc3Npb25fc3RhdGUsXG4gICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuYWNjZXNzX3Rva2VuLFxuICAgICAgcmVmcmVzaF90b2tlbjogdGhpcy5yZWZyZXNoX3Rva2VuLFxuICAgICAgdG9rZW5fdHlwZTogdGhpcy50b2tlbl90eXBlLFxuICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXG4gICAgICBwcm9maWxlOiB0aGlzLnByb2ZpbGUsXG4gICAgICBleHBpcmVzX2F0OiB0aGlzLmV4cGlyZXNfYXQsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXIuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgcmV0dXJuIG5ldyBVc2VyKEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZykpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gXCIuL0pzb25TZXJ2aWNlLmpzXCI7XG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9NZXRhZGF0YVNlcnZpY2UuanNcIjtcbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tIFwiLi9Kb3NlVXRpbC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlckluZm9TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2V0dGluZ3MsXG4gICAgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UsXG4gICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcbiAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXG4gICkge1xuICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHRoaXMuX2dldENsYWltc0Zyb21Kd3QuYmluZCh0aGlzKVxuICAgICk7XG4gICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gIH1cblxuICBnZXRDbGFpbXModG9rZW4pIHtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBObyB0b2tlbiBwYXNzZWRcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSB0b2tlbiBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRVc2VySW5mb0VuZHBvaW50KCkudGhlbigodXJsKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiByZWNlaXZlZCB1c2VyaW5mbyB1cmxcIiwgdXJsKTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLmdldEpzb24odXJsLCB0b2tlbikudGhlbigoY2xhaW1zKSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IGNsYWltcyByZWNlaXZlZFwiLCBjbGFpbXMpO1xuICAgICAgICByZXR1cm4gY2xhaW1zO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0Q2xhaW1zRnJvbUp3dChyZXEpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogRmFpbGVkIHRvIHBhcnNlIEpXVFwiLFxuICAgICAgICAgIGp3dFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xuXG4gICAgICBsZXQgaXNzdWVyUHJvbWlzZTtcbiAgICAgIHN3aXRjaCAodGhpcy5fc2V0dGluZ3MudXNlckluZm9Kd3RJc3N1ZXIpIHtcbiAgICAgICAgY2FzZSBcIk9QXCI6XG4gICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFOWVwiOlxuICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoand0LnBheWxvYWQuaXNzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLnVzZXJJbmZvSnd0SXNzdWVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzc3VlclByb21pc2UudGhlbigoaXNzdWVyKSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgaXNzdWVyOlwiICsgaXNzdWVyXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oKGtleXMpID0+IHtcbiAgICAgICAgICBpZiAoIWtleXMpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgaWYgKCFraWQpIHtcbiAgICAgICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XG5cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxuICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXG4gICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IGtleXMuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgIFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBhdWRpZW5jZSA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcblxuICAgICAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XG4gICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIixcbiAgICAgICAgICAgIGNsb2NrU2tld0luU2Vjb25kc1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWxcbiAgICAgICAgICAgIC52YWxpZGF0ZUp3dChcbiAgICAgICAgICAgICAgcmVxLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICBpc3N1ZXIsXG4gICAgICAgICAgICAgIGF1ZGllbmNlLFxuICAgICAgICAgICAgICBjbG9ja1NrZXdJblNlY29uZHMsXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gand0LnBheWxvYWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBFcnJvciBwYXJzaW5nIEpXVCByZXNwb25zZVwiLFxuICAgICAgICBlLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZWplY3QoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgX2ZpbHRlckJ5QWxnKGtleXMsIGFsZykge1xuICAgIHZhciBrdHkgPSBudWxsO1xuICAgIGlmIChhbGcuc3RhcnRzV2l0aChcIlJTXCIpKSB7XG4gICAgICBrdHkgPSBcIlJTQVwiO1xuICAgIH0gZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xuICAgICAga3R5ID0gXCJQU1wiO1xuICAgIH0gZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xuICAgICAga3R5ID0gXCJFQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBhbGcgbm90IHN1cHBvcnRlZDogXCIsIGFsZyk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIixcbiAgICAgIGt0eVxuICAgICk7XG5cbiAgICBrZXlzID0ga2V5cy5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICB9KTtcblxuICAgIExvZy5kZWJ1ZyhcbiAgICAgIFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLFxuICAgICAga3R5LFxuICAgICAga2V5cy5sZW5ndGhcbiAgICApO1xuXG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgT2lkY0NsaWVudCB9IGZyb20gXCIuL09pZGNDbGllbnQuanNcIjtcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tIFwiLi9Vc2VyTWFuYWdlclNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlci5qc1wiO1xuaW1wb3J0IHsgVXNlck1hbmFnZXJFdmVudHMgfSBmcm9tIFwiLi9Vc2VyTWFuYWdlckV2ZW50cy5qc1wiO1xuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSBcIi4vU2lsZW50UmVuZXdTZXJ2aWNlLmpzXCI7XG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gXCIuL1Nlc3Npb25Nb25pdG9yLmpzXCI7XG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSBcIi4vU2lnbmluUmVxdWVzdFwiO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSBcIi4vVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzXCI7XG5pbXBvcnQgeyBUb2tlbkNsaWVudCB9IGZyb20gXCIuL1Rva2VuQ2xpZW50LmpzXCI7XG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gXCIuL0pvc2VVdGlsLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlciBleHRlbmRzIE9pZGNDbGllbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5ncyA9IHt9LFxuICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXG4gICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXG4gICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciA9IFRva2VuUmV2b2NhdGlvbkNsaWVudCxcbiAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcbiAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXG4gICkge1xuICAgIGlmICghKHNldHRpbmdzIGluc3RhbmNlb2YgVXNlck1hbmFnZXJTZXR0aW5ncykpIHtcbiAgICAgIHNldHRpbmdzID0gbmV3IFVzZXJNYW5hZ2VyU2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgIH1cbiAgICBzdXBlcihzZXR0aW5ncyk7XG5cbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xuICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZSA9IG5ldyBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yKHRoaXMpO1xuXG4gICAgLy8gb3JkZXIgaXMgaW1wb3J0YW50IGZvciB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM7IHRoZXNlIHNlcnZpY2VzIGRlcGVuZCB1cG9uIHRoZSBldmVudHMuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b21hdGljU2lsZW50UmVuZXcpIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJVc2VyTWFuYWdlci5jdG9yOiBhdXRvbWF0aWNTaWxlbnRSZW5ldyBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNpbGVudCByZW5ld1wiXG4gICAgICApO1xuICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubW9uaXRvclNlc3Npb24pIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJVc2VyTWFuYWdlci5jdG9yOiBtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiXG4gICAgICApO1xuICAgICAgdGhpcy5fc2Vzc2lvbk1vbml0b3IgPSBuZXcgU2Vzc2lvbk1vbml0b3JDdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudCA9IG5ldyBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB0aGlzLl90b2tlbkNsaWVudCA9IG5ldyBUb2tlbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gIH1cblxuICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnJlZGlyZWN0TmF2aWdhdG9yO1xuICB9XG4gIGdldCBfcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucG9wdXBOYXZpZ2F0b3I7XG4gIH1cbiAgZ2V0IF9pZnJhbWVOYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaWZyYW1lTmF2aWdhdG9yO1xuICB9XG4gIGdldCBfdXNlclN0b3JlKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnVzZXJTdG9yZTtcbiAgfVxuXG4gIGdldCBldmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcblxuICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XG4gICAgICB0aGlzLl9ldmVudHMudW5sb2FkKCk7XG4gICAgfSk7XG4gIH1cblxuICBzaWduaW5SZWRpcmVjdChhcmdzID0ge30pIHtcbiAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6clwiO1xuICAgIGxldCBuYXZQYXJhbXMgPSB7XG4gICAgICB1c2VSZXBsYWNlVG9OYXZpZ2F0ZTogYXJncy51c2VSZXBsYWNlVG9OYXZpZ2F0ZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciwgbmF2UGFyYW1zKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLFxuICAgICAgICAgIHVzZXIucHJvZmlsZS5zdWJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RDYWxsYmFjazogbm8gc3ViXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25pblBvcHVwKGFyZ3MgPSB7fSkge1xuICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpwXCI7XG4gICAgbGV0IHVybCA9XG4gICAgICBhcmdzLnJlZGlyZWN0X3VyaSB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5wb3B1cF9yZWRpcmVjdF91cmkgfHxcbiAgICAgIHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgIGlmICghdXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IE5vIHBvcHVwX3JlZGlyZWN0X3VyaSBvciByZWRpcmVjdF91cmkgY29uZmlndXJlZFwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBuZXcgRXJyb3IoXCJObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xuICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6XG4gICAgICAgIGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICBwb3B1cFdpbmRvd1RhcmdldDpcbiAgICAgICAgYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0LFxuICAgIH0pLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgIExvZy5pbmZvKFxuICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogc2lnbmluUG9wdXAgc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsXG4gICAgICAgICAgICB1c2VyLnByb2ZpbGUuc3ViXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBubyBzdWJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSk7XG4gIH1cbiAgc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9wb3B1cE5hdmlnYXRvcilcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIixcbiAgICAgICAgICAgICAgdXNlci5wcm9maWxlLnN1YlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBubyBzdWJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBDYWxsYmFjayBlcnJvcjogXCIgKyBlcnIgJiYgZXJyLm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2lnbmluU2lsZW50KGFyZ3MgPSB7fSkge1xuICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgIC8vIGZpcnN0IGRldGVybWluZSBpZiB3ZSBoYXZlIGEgcmVmcmVzaCB0b2tlbiwgb3IgbmVlZCB0byB1c2UgaWZyYW1lXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIgJiYgdXNlci5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgIGFyZ3MucmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZVJlZnJlc2hUb2tlbihhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7XG4gICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9XG4gICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50IHx8XG4gICAgICAgICAgKHRoaXMuc2V0dGluZ3MuaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ICYmIHVzZXIgJiYgdXNlci5pZF90b2tlbik7XG4gICAgICAgIGlmICh1c2VyICYmIHRoaXMuX3NldHRpbmdzLnZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldykge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50LCBzdWJqZWN0IHByaW9yIHRvIHNpbGVudCByZW5ldzogXCIsXG4gICAgICAgICAgICB1c2VyLnByb2ZpbGUuc3ViXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhcmdzLmN1cnJlbnRfc3ViID0gdXNlci5wcm9maWxlLnN1YjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU2lsZW50SWZyYW1lKGFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3VzZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW4oYXJncykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0LmFjY2Vzc190b2tlbikge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIGFjY2VzcyB0b2tlbiByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgbGV0IGlkVG9rZW5WYWxpZGF0aW9uID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xuICAgICAgICAgICAgaWRUb2tlblZhbGlkYXRpb24gPSB0aGlzLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4oXG4gICAgICAgICAgICAgIHVzZXIucHJvZmlsZSxcbiAgICAgICAgICAgICAgcmVzdWx0LmlkX3Rva2VuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpZFRva2VuVmFsaWRhdGlvbi50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiByZWZyZXNoIHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHVzZXIuaWRfdG9rZW4gPSByZXN1bHQuaWRfdG9rZW4gfHwgdXNlci5pZF90b2tlbjtcbiAgICAgICAgICAgIHVzZXIuYWNjZXNzX3Rva2VuID0gcmVzdWx0LmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IHJlc3VsdC5yZWZyZXNoX3Rva2VuIHx8IHVzZXIucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oKGlzc3VlcikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuZ2V0RXBvY2hUaW1lKCkudGhlbigobm93KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbFxuICAgICAgICAgIC52YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoXG4gICAgICAgICAgICBpZF90b2tlbixcbiAgICAgICAgICAgIGlzc3VlcixcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCxcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldyxcbiAgICAgICAgICAgIG5vd1xuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQuc3ViICE9PSBwcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBzdWIgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggY3VycmVudCBzdWJcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKFwic3ViIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIGN1cnJlbnQgc3ViXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5hdXRoX3RpbWUgJiYgcGF5bG9hZC5hdXRoX3RpbWUgIT09IHByb2ZpbGUuYXV0aF90aW1lKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF1dGhfdGltZSBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhdXRoX3RpbWVcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJhdXRoX3RpbWUgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXV0aF90aW1lXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF6cCBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhenBcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKFwiYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF6cCAmJiBwcm9maWxlLmF6cCkge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhenAgbm90IGluIGlkX3Rva2VuLCBidXQgcHJlc2VudCBpbiBvcmlnaW5hbCBpZF90b2tlblwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XG4gICAgbGV0IHVybCA9XG4gICAgICBhcmdzLnJlZGlyZWN0X3VyaSB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICB9XG5cbiAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICBhcmdzLnByb21wdCA9IGFyZ3MucHJvbXB0IHx8IFwibm9uZVwiO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDpcbiAgICAgICAgYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0LFxuICAgIH0pLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgIExvZy5pbmZvKFxuICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLFxuICAgICAgICAgICAgdXNlci5wcm9maWxlLnN1YlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IG5vIHN1YlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25pblNpbGVudENhbGxiYWNrKHVybCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX2lmcmFtZU5hdmlnYXRvcikudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgTG9nLmluZm8oXG4gICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIixcbiAgICAgICAgICAgIHVzZXIucHJvZmlsZS5zdWJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50Q2FsbGJhY2s6IG5vIHN1YlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25pbkNhbGxiYWNrKHVybCkge1xuICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCkudGhlbigoeyBzdGF0ZSwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpwXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpzXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluU2lsZW50Q2FsbGJhY2sodXJsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3BvbnNlX3R5cGUgaW4gc3RhdGVcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbm91dENhbGxiYWNrKHVybCwga2VlcE9wZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsKS50aGVuKCh7IHN0YXRlLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzbzpyXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaWdub3V0UmVkaXJlY3RDYWxsYmFjayh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic286cFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSk7XG4gIH1cblxuICBxdWVyeVNlc3Npb25TdGF0dXMoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnNcIjsgLy8gdGhpcyBhY3RzIGxpa2UgYSBzaWduaW4gc2lsZW50XG4gICAgbGV0IHVybCA9XG4gICAgICBhcmdzLnJlZGlyZWN0X3VyaSB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICB9XG5cbiAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICBhcmdzLnByb21wdCA9IFwibm9uZVwiO1xuICAgIGFyZ3MucmVzcG9uc2VfdHlwZSA9XG4gICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgICBhcmdzLnNjb3BlID0gYXJncy5zY29wZSB8fCBcIm9wZW5pZFwiO1xuICAgIGFyZ3Muc2tpcFVzZXJJbmZvID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDpcbiAgICAgICAgYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0LFxuICAgIH0pLnRoZW4oKG5hdlJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbmluUmVzcG9uc2UobmF2UmVzcG9uc2UudXJsKVxuICAgICAgICAudGhlbigoc2lnbmluUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IGdvdCBzaWduaW4gcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICBpZiAoc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSAmJiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgTG9nLmluZm8oXG4gICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2VzcyBmb3Igc3ViOiBcIixcbiAgICAgICAgICAgICAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgICBzdWI6IHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViLFxuICAgICAgICAgICAgICBzaWQ6IHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc2lkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2Vzc2Z1bCwgdXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVyci5zZXNzaW9uX3N0YXRlICYmIHRoaXMuc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJsb2dpbl9yZXF1aXJlZFwiIHx8XG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiY29uc2VudF9yZXF1aXJlZFwiIHx8XG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIiB8fFxuICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImFjY291bnRfc2VsZWN0aW9uX3JlcXVpcmVkXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBlcnIuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3NpZ25pbihhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKFxuICAgICAgKG5hdlJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQobmF2UmVzcG9uc2UudXJsLCBhcmdzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIF9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbigoaGFuZGxlKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluU3RhcnQ6IGdvdCBuYXZpZ2F0b3Igd2luZG93IGhhbmRsZVwiKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbmluUmVxdWVzdChhcmdzKVxuICAgICAgICAudGhlbigoc2lnbmluUmVxdWVzdCkgPT4ge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IHNpZ25pbiByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xuICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy5pZCA9IHNpZ25pblJlcXVlc3Quc3RhdGUuaWQ7XG5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGhhbmRsZS5jbG9zZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfc2lnbmluRW5kKHVybCwgYXJncyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25pblJlc3BvbnNlKHVybCkudGhlbigoc2lnbmluUmVzcG9uc2UpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGdvdCBzaWduaW4gcmVzcG9uc2VcIik7XG5cbiAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoc2lnbmluUmVzcG9uc2UpO1xuXG4gICAgICBpZiAoYXJncy5jdXJyZW50X3N1Yikge1xuICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1YiAhPT0gdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIGRvZXMgbm90IG1hdGNoIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW4uIHN1YiBmcm9tIHNpZ25pbjogXCIsXG4gICAgICAgICAgICB1c2VyLnByb2ZpbGUuc3ViXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibG9naW5fcmVxdWlyZWRcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIG1hdGNoZXMgdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pblwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IHVzZXIgc3RvcmVkXCIpO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX3NpZ25pbkNhbGxiYWNrKHVybCwgbmF2aWdhdG9yKSB7XG4gICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkNhbGxiYWNrXCIpO1xuICAgIGxldCB1c2VRdWVyeSA9XG4gICAgICB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlID09PSBcInF1ZXJ5XCIgfHxcbiAgICAgICghdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZSAmJlxuICAgICAgICBTaWduaW5SZXF1ZXN0LmlzQ29kZSh0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV90eXBlKSk7XG4gICAgbGV0IGRlbGltaXRlciA9IHVzZVF1ZXJ5ID8gXCI/XCIgOiBcIiNcIjtcbiAgICByZXR1cm4gbmF2aWdhdG9yLmNhbGxiYWNrKHVybCwgdW5kZWZpbmVkLCBkZWxpbWl0ZXIpO1xuICB9XG5cbiAgc2lnbm91dFJlZGlyZWN0KGFyZ3MgPSB7fSkge1xuICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpyXCI7XG4gICAgbGV0IHBvc3RMb2dvdXRSZWRpcmVjdFVyaSA9XG4gICAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICBpZiAocG9zdExvZ291dFJlZGlyZWN0VXJpKSB7XG4gICAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcbiAgICB9XG4gICAgbGV0IG5hdlBhcmFtcyA9IHtcbiAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciwgbmF2UGFyYW1zKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCkge1xuICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzaWdub3V0UG9wdXAoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnBcIjtcbiAgICBsZXQgdXJsID1cbiAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xuICAgIGlmIChhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xuICAgICAgLy8gd2UncmUgcHV0dGluZyBhIGR1bW15IGVudHJ5IGluIGhlcmUgYmVjYXVzZSB3ZVxuICAgICAgLy8gbmVlZCBhIHVuaXF1ZSBpZCBmcm9tIHRoZSBzdGF0ZSBmb3Igbm90aWZpY2F0aW9uXG4gICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXG4gICAgICAvLyBwbGFuIHRvIHJldHVybiBiYWNrIHRvIHRoZSBjbGllbnQgYWZ0ZXIgc2lnbm91dFxuICAgICAgLy8gYW5kIHNvIHdlIGNhbiBjbG9zZSB0aGUgcG9wdXAgYWZ0ZXIgc2lnbm91dFxuICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NpZ25vdXQoYXJncywgdGhpcy5fcG9wdXBOYXZpZ2F0b3IsIHtcbiAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOlxuICAgICAgICBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxuICAgICAgcG9wdXBXaW5kb3dUYXJnZXQ6XG4gICAgICAgIGFyZ3MucG9wdXBXaW5kb3dUYXJnZXQgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd1RhcmdldCxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xuICAgIH0pO1xuICB9XG4gIHNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pIHtcbiAgICBpZiAodHlwZW9mIGtlZXBPcGVuID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB1cmwgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBrZWVwT3BlbiA9IHVybDtcbiAgICAgIHVybCA9IG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGRlbGltaXRlciA9IFwiP1wiO1xuICAgIHJldHVybiB0aGlzLl9wb3B1cE5hdmlnYXRvci5jYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXBDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zaWdub3V0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKFxuICAgICAgKG5hdlJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKG5hdlJlc3BvbnNlLnVybCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBfc2lnbm91dFN0YXJ0KGFyZ3MgPSB7fSwgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oKGhhbmRsZSkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKVxuICAgICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogbG9hZGVkIGN1cnJlbnQgdXNlciBmcm9tIHN0b3JhZ2VcIlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YXIgcmV2b2tlUHJvbWlzZSA9IHRoaXMuX3NldHRpbmdzLnJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0XG4gICAgICAgICAgICA/IHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIpXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIHJldHVybiByZXZva2VQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGlkX3Rva2VuID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xuICAgICAgICAgICAgaWYgKGlkX3Rva2VuKSB7XG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IFNldHRpbmcgaWRfdG9rZW4gaW50byBzaWdub3V0IHJlcXVlc3RcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBhcmdzLmlkX3Rva2VuX2hpbnQgPSBpZF90b2tlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiB1c2VyIHJlbW92ZWQsIGNyZWF0aW5nIHNpZ25vdXQgcmVxdWVzdFwiXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbm91dFJlcXVlc3QoYXJncykudGhlbigoc2lnbm91dFJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBnb3Qgc2lnbm91dCByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25vdXRSZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbm91dFJlcXVlc3Quc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy5pZCA9IHNpZ25vdXRSZXF1ZXN0LnN0YXRlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGhhbmRsZS5jbG9zZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IEVycm9yIGFmdGVyIHByZXBhcmluZyBuYXZpZ2F0b3IsIGNsb3NpbmcgbmF2aWdhdG9yIHdpbmRvd1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX3NpZ25vdXRFbmQodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25vdXRSZXNwb25zZSh1cmwpLnRoZW4oKHNpZ25vdXRSZXNwb25zZSkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRFbmQ6IGdvdCBzaWdub3V0IHJlc3BvbnNlXCIpO1xuXG4gICAgICByZXR1cm4gc2lnbm91dFJlc3BvbnNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKClcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyLCB0cnVlKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogcmVtb3ZpbmcgdG9rZW4gcHJvcGVydGllcyBmcm9tIHVzZXIgYW5kIHJlLXN0b3JpbmdcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgdXNlci5yZWZyZXNoX3Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgIHVzZXIuZXhwaXJlc19hdCA9IG51bGw7XG4gICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiB1c2VyIHN0b3JlZFwiKTtcbiAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgTG9nLmluZm8oXG4gICAgICAgICAgXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCJcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3Jldm9rZUludGVybmFsKHVzZXIsIHJlcXVpcmVkKSB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyLmFjY2Vzc190b2tlbjtcbiAgICAgIHZhciByZWZyZXNoX3Rva2VuID0gdXNlci5yZWZyZXNoX3Rva2VuO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKS50aGVuKFxuICAgICAgICAoYXRTdWNjZXNzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZVJlZnJlc2hUb2tlbkludGVybmFsKHJlZnJlc2hfdG9rZW4sIHJlcXVpcmVkKS50aGVuKFxuICAgICAgICAgICAgKHJ0U3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWF0U3VjY2VzcyAmJiAhcnRTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogbm8gbmVlZCB0byByZXZva2UgZHVlIHRvIG5vIHRva2VuKHMpLCBvciBKV1QgZm9ybWF0XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgfVxuXG4gIF9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpIHtcbiAgICAvLyBjaGVjayBmb3IgSldUIHZzLiByZWZlcmVuY2UgdG9rZW5cbiAgICBpZiAoIWFjY2Vzc190b2tlbiB8fCBhY2Nlc3NfdG9rZW4uaW5kZXhPZihcIi5cIikgPj0gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudFxuICAgICAgLnJldm9rZShhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKVxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSk7XG4gIH1cblxuICBfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpIHtcbiAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnRcbiAgICAgIC5yZXZva2UocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQsIFwicmVmcmVzaF90b2tlblwiKVxuICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSk7XG4gIH1cblxuICBzdGFydFNpbGVudFJlbmV3KCkge1xuICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdGFydCgpO1xuICB9XG5cbiAgc3RvcFNpbGVudFJlbmV3KCkge1xuICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdG9wKCk7XG4gIH1cblxuICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcbiAgICByZXR1cm4gYHVzZXI6JHt0aGlzLnNldHRpbmdzLmF1dGhvcml0eX06JHt0aGlzLnNldHRpbmdzLmNsaWVudF9pZH1gO1xuICB9XG5cbiAgX2xvYWRVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuZ2V0KHRoaXMuX3VzZXJTdG9yZUtleSkudGhlbigoc3RvcmFnZVN0cmluZykgPT4ge1xuICAgICAgaWYgKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiB1c2VyIHN0b3JhZ2VTdHJpbmcgbG9hZGVkXCIpO1xuICAgICAgICByZXR1cm4gVXNlci5mcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiBubyB1c2VyIHN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0b3JlVXNlcih1c2VyKSB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnN0b3JlVXNlcjogc3RvcmluZyB1c2VyXCIpO1xuXG4gICAgICB2YXIgc3RvcmFnZVN0cmluZyA9IHVzZXIudG9TdG9yYWdlU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnNldCh0aGlzLl91c2VyU3RvcmVLZXksIHN0b3JhZ2VTdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xuICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5yZW1vdmUodGhpcy5fdXNlclN0b3JlS2V5KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5FdmVudHMgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbkV2ZW50cy5qc1wiO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9FdmVudC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgc3VwZXIoc2V0dGluZ3MpO1xuICAgIHRoaXMuX3VzZXJMb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIGxvYWRlZFwiKTtcbiAgICB0aGlzLl91c2VyVW5sb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIHVubG9hZGVkXCIpO1xuICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IgPSBuZXcgRXZlbnQoXCJTaWxlbnQgcmVuZXcgZXJyb3JcIik7XG4gICAgdGhpcy5fdXNlclNpZ25lZEluID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgaW5cIik7XG4gICAgdGhpcy5fdXNlclNpZ25lZE91dCA9IG5ldyBFdmVudChcIlVzZXIgc2lnbmVkIG91dFwiKTtcbiAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQgPSBuZXcgRXZlbnQoXCJVc2VyIHNlc3Npb24gY2hhbmdlZFwiKTtcbiAgfVxuXG4gIGxvYWQodXNlciwgcmFpc2VFdmVudCA9IHRydWUpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5sb2FkXCIpO1xuICAgIHN1cGVyLmxvYWQodXNlcik7XG4gICAgaWYgKHJhaXNlRXZlbnQpIHtcbiAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XG4gICAgfVxuICB9XG4gIHVubG9hZCgpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy51bmxvYWRcIik7XG4gICAgc3VwZXIudW5sb2FkKCk7XG4gICAgdGhpcy5fdXNlclVubG9hZGVkLnJhaXNlKCk7XG4gIH1cblxuICBhZGRVc2VyTG9hZGVkKGNiKSB7XG4gICAgdGhpcy5fdXNlckxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcbiAgfVxuICByZW1vdmVVc2VyTG9hZGVkKGNiKSB7XG4gICAgdGhpcy5fdXNlckxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgfVxuXG4gIGFkZFVzZXJVbmxvYWRlZChjYikge1xuICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcbiAgfVxuICByZW1vdmVVc2VyVW5sb2FkZWQoY2IpIHtcbiAgICB0aGlzLl91c2VyVW5sb2FkZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gIH1cblxuICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5hZGRIYW5kbGVyKGNiKTtcbiAgfVxuICByZW1vdmVTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgfVxuICBfcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGUpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VTaWxlbnRSZW5ld0Vycm9yXCIsIGUubWVzc2FnZSk7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yYWlzZShlKTtcbiAgfVxuXG4gIGFkZFVzZXJTaWduZWRJbihjYikge1xuICAgIHRoaXMuX3VzZXJTaWduZWRJbi5hZGRIYW5kbGVyKGNiKTtcbiAgfVxuICByZW1vdmVVc2VyU2lnbmVkSW4oY2IpIHtcbiAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmVtb3ZlSGFuZGxlcihjYik7XG4gIH1cbiAgX3JhaXNlVXNlclNpZ25lZEluKCkge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcbiAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmFpc2UoKTtcbiAgfVxuXG4gIGFkZFVzZXJTaWduZWRPdXQoY2IpIHtcbiAgICB0aGlzLl91c2VyU2lnbmVkT3V0LmFkZEhhbmRsZXIoY2IpO1xuICB9XG4gIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcbiAgICB0aGlzLl91c2VyU2lnbmVkT3V0LnJlbW92ZUhhbmRsZXIoY2IpO1xuICB9XG4gIF9yYWlzZVVzZXJTaWduZWRPdXQoKSB7XG4gICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNpZ25lZE91dFwiKTtcbiAgICB0aGlzLl91c2VyU2lnbmVkT3V0LnJhaXNlKCk7XG4gIH1cblxuICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcbiAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQuYWRkSGFuZGxlcihjYik7XG4gIH1cbiAgcmVtb3ZlVXNlclNlc3Npb25DaGFuZ2VkKGNiKSB7XG4gICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICB9XG4gIF9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWRcIik7XG4gICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJhaXNlKCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSBcIi4vT2lkY0NsaWVudFNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBSZWRpcmVjdE5hdmlnYXRvciB9IGZyb20gXCIuL1JlZGlyZWN0TmF2aWdhdG9yLmpzXCI7XG5pbXBvcnQgeyBQb3B1cE5hdmlnYXRvciB9IGZyb20gXCIuL1BvcHVwTmF2aWdhdG9yLmpzXCI7XG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tIFwiLi9JRnJhbWVOYXZpZ2F0b3IuanNcIjtcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSBcIi4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanNcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbC5qc1wiO1xuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gXCIuL1NpZ25pblJlcXVlc3QuanNcIjtcblxuY29uc3QgRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gNjA7XG5jb25zdCBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSAyMDAwO1xuXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJTZXR0aW5ncyBleHRlbmRzIE9pZGNDbGllbnRTZXR0aW5ncyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwb3B1cF9yZWRpcmVjdF91cmksXG4gICAgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxuICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgcG9wdXBXaW5kb3dUYXJnZXQsXG4gICAgc2lsZW50X3JlZGlyZWN0X3VyaSxcbiAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcbiAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxuICAgIHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IGZhbHNlLFxuICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXG4gICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxuICAgIG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gZmFsc2UsXG4gICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXG4gICAgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSB0cnVlLFxuICAgIHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlLFxuICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXG4gICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXG4gICAgcmVkaXJlY3ROYXZpZ2F0b3IgPSBuZXcgUmVkaXJlY3ROYXZpZ2F0b3IoKSxcbiAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxuICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcbiAgICB1c2VyU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoeyBzdG9yZTogR2xvYmFsLnNlc3Npb25TdG9yYWdlIH0pLFxuICB9ID0ge30pIHtcbiAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xuXG4gICAgdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpID0gcG9wdXBfcmVkaXJlY3RfdXJpO1xuICAgIHRoaXMuX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICB0aGlzLl9wb3B1cFdpbmRvd0ZlYXR1cmVzID0gcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgICB0aGlzLl9wb3B1cFdpbmRvd1RhcmdldCA9IHBvcHVwV2luZG93VGFyZ2V0O1xuXG4gICAgdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaSA9IHNpbGVudF9yZWRpcmVjdF91cmk7XG4gICAgdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQgPSBzaWxlbnRSZXF1ZXN0VGltZW91dDtcbiAgICB0aGlzLl9hdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGF1dG9tYXRpY1NpbGVudFJlbmV3O1xuICAgIHRoaXMuX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldztcbiAgICB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcgPSBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPVxuICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG5cbiAgICB0aGlzLl9tb25pdG9yU2Vzc2lvbiA9IG1vbml0b3JTZXNzaW9uO1xuICAgIHRoaXMuX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gbW9uaXRvckFub255bW91c1Nlc3Npb247XG4gICAgdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBjaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICB0aGlzLl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvciA9IHN0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuICAgIGlmIChxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSkge1xuICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50c1swXSAmJiBhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZSkge1xuICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhcbiAgICAgICAgYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGVcbiAgICAgIClcbiAgICAgICAgPyBcImlkX3Rva2VuXCJcbiAgICAgICAgOiBcImNvZGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBcImlkX3Rva2VuXCI7XG4gICAgfVxuICAgIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQ7XG5cbiAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xuICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XG4gICAgdGhpcy5faWZyYW1lTmF2aWdhdG9yID0gaWZyYW1lTmF2aWdhdG9yO1xuXG4gICAgdGhpcy5fdXNlclN0b3JlID0gdXNlclN0b3JlO1xuICB9XG5cbiAgZ2V0IHBvcHVwX3JlZGlyZWN0X3VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpO1xuICB9XG4gIGdldCBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgfVxuICBnZXQgcG9wdXBXaW5kb3dGZWF0dXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgfVxuICBnZXQgcG9wdXBXaW5kb3dUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0O1xuICB9XG5cbiAgZ2V0IHNpbGVudF9yZWRpcmVjdF91cmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmk7XG4gIH1cbiAgZ2V0IHNpbGVudFJlcXVlc3RUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaWxlbnRSZXF1ZXN0VGltZW91dDtcbiAgfVxuICBnZXQgYXV0b21hdGljU2lsZW50UmVuZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xuICB9XG4gIGdldCB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldztcbiAgfVxuICBnZXQgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XG4gIH1cbiAgZ2V0IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcbiAgfVxuXG4gIGdldCBtb25pdG9yU2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9uaXRvclNlc3Npb247XG4gIH1cbiAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcbiAgfVxuICBnZXQgY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsO1xuICB9XG4gIGdldCBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG4gIH1cbiAgZ2V0IHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgfVxuICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xuICB9XG5cbiAgZ2V0IHJlZGlyZWN0TmF2aWdhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvcjtcbiAgfVxuICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yO1xuICB9XG4gIGdldCBpZnJhbWVOYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lmcmFtZU5hdmlnYXRvcjtcbiAgfVxuXG4gIGdldCB1c2VyU3RvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWwuanNcIjtcblxuZXhwb3J0IGNsYXNzIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIHtcbiAgY29uc3RydWN0b3IoeyBwcmVmaXggPSBcIm9pZGMuXCIsIHN0b3JlID0gR2xvYmFsLmxvY2FsU3RvcmFnZSB9ID0ge30pIHtcbiAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcbiAgfVxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuc2V0XCIsIGtleSk7XG5cbiAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICB0aGlzLl9zdG9yZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldFwiLCBrZXkpO1xuXG4gICAga2V5ID0gdGhpcy5fcHJlZml4ICsga2V5O1xuXG4gICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xuXG4gICAga2V5ID0gdGhpcy5fcHJlZml4ICsga2V5O1xuXG4gICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XG4gICAgdGhpcy5fc3RvcmUucmVtb3ZlSXRlbShrZXkpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcbiAgfVxuXG4gIGdldEFsbEtleXMoKSB7XG4gICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0QWxsS2V5c1wiKTtcblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fc3RvcmUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQga2V5ID0gdGhpcy5fc3RvcmUua2V5KGluZGV4KTtcblxuICAgICAgaWYgKGtleS5pbmRleE9mKHRoaXMuX3ByZWZpeCkgPT09IDApIHtcbiAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIodGhpcy5fcHJlZml4Lmxlbmd0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5cyk7XG4gIH1cbn1cbiIsIi8qXG5CYXNlZCBvbiB0aGUgd29yayBvZiBBdXRoMFxuaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2lkdG9rZW4tdmVyaWZpZXJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbldoaWNoIGlzIGJhc2VkIG9uIHRoZSB3b3JrIG9mIFRvbSBXdVxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL0xJQ0VOU0VcbiovXG5cbi8qXG4gKiBUbyBzdXBwb3J0IG1vc3QgYmFzaWMgT3BlbklkIHVzZSBjYXNlcyAodXNpbmcgUlNBMjU2KSwgd2UgY2FuIGdldCBhd2F5IHdpdGhvdXRcbiAqIHJlcXVpcmluZyB0aGUgZnVsbCBqcnNhc2lnbiBmZWF0dXJlIHNldCAoYW5kIHJlc3VsdGluZyBtYXNzaXZlIGJ1bmRsZSkuXG4gKlxuICogLSBTdXBwb3J0IFJTQSAyNTYgYWxnb3JpdGhtIChvcHRpb25hbGx5IGNvdWxkIHN1cHBvcnQgUlNBKiBmYW1pbHkpXG4gKiAtIFBhcnNlIEpXVCB0b2tlbnMgdXNpbmcgdGhlIChuKSBwYXJhbWV0ZXIuXG4gKiAtIFZlcmlmeSBzaWduYXR1cmUgb2YgaWRfdG9rZW5zXG4gKiAtIFZlcmlmeSBhdF9oYXNoIG9mIGFjY2Vzc190b2tlbnNcbiAqIC0gUGVyZm9ybSBjb21tb24gYmFzZTY0IGVuY29kaW5nL2RlY29kaW5nIHRhc2tzLlxuICovXG5cbmltcG9ydCBKU0JOIGZyb20gXCJqc2JuXCI7XG5pbXBvcnQgU0hBMjU2IGZyb20gXCJjcnlwdG8tanMvc2hhMjU2XCI7XG5pbXBvcnQgYmFzZTY0SnMgZnJvbSBcImJhc2U2NC1qc1wiO1xuXG52YXIgQmlnSW50ZWdlciA9IEpTQk4uQmlnSW50ZWdlcjtcblxuLyohIChjKSBUb20gV3UgfCBodHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vXG4gKi9cbnZhciBiNjRtYXAgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbnZhciBiNjRwYWQgPSBcIj1cIjtcblxuY29uc3QgQmFzZTY0ID0ge1xuICBiNjR0b2hleChzKSB7XG4gICAgdmFyIHJldCA9IFwiXCI7XG4gICAgdmFyIGk7XG4gICAgdmFyIGsgPSAwOyAvLyBiNjQgc3RhdGUsIDAtM1xuICAgIHZhciBzbG9wO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAocy5jaGFyQXQoaSkgPT09IGI2NHBhZCkgYnJlYWs7XG4gICAgICB2YXIgdiA9IGI2NG1hcC5pbmRleE9mKHMuY2hhckF0KGkpKTtcbiAgICAgIGlmICh2IDwgMCkgY29udGludWU7XG4gICAgICBpZiAoayA9PT0gMCkge1xuICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ID4+IDIpO1xuICAgICAgICBzbG9wID0gdiAmIDM7XG4gICAgICAgIGsgPSAxO1xuICAgICAgfSBlbHNlIGlmIChrID09PSAxKSB7XG4gICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xuICAgICAgICBzbG9wID0gdiAmIDB4ZjtcbiAgICAgICAgayA9IDI7XG4gICAgICB9IGVsc2UgaWYgKGsgPT09IDIpIHtcbiAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2xvcCk7XG4gICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XG4gICAgICAgIHNsb3AgPSB2ICYgMztcbiAgICAgICAgayA9IDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcbiAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiAmIDB4Zik7XG4gICAgICAgIGsgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoayA9PT0gMSkgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2xvcCA8PCAyKTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBoZXhUb0Jhc2U2NChoKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIGM7XG4gICAgdmFyIHJldCA9IFwiXCI7XG4gICAgZm9yIChpID0gMDsgaSArIDMgPD0gaC5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksIGkgKyAzKSwgMTYpO1xuICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiA2KSArIGI2NG1hcC5jaGFyQXQoYyAmIDYzKTtcbiAgICB9XG4gICAgaWYgKGkgKyAxID09PSBoLmxlbmd0aCkge1xuICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksIGkgKyAxKSwgMTYpO1xuICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA8PCAyKTtcbiAgICB9IGVsc2UgaWYgKGkgKyAyID09PSBoLmxlbmd0aCkge1xuICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksIGkgKyAyKSwgMTYpO1xuICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiAyKSArIGI2NG1hcC5jaGFyQXQoKGMgJiAzKSA8PCA0KTtcbiAgICB9XG4gICAgaWYgKGI2NHBhZCkgd2hpbGUgKChyZXQubGVuZ3RoICYgMykgPiAwKSByZXQgKz0gYjY0cGFkO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgcGFkZGluZyhzdHIpIHtcbiAgICB2YXIgbW9kID0gc3RyLmxlbmd0aCAlIDQ7XG4gICAgdmFyIHBhZCA9IDQgLSBtb2Q7XG5cbiAgICBpZiAobW9kID09PSAwKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIgKyBuZXcgQXJyYXkoMSArIHBhZCkuam9pbihcIj1cIik7XG4gIH0sXG5cbiAgYnl0ZUFycmF5VG9IZXgocmF3KSB7XG4gICAgdmFyIEhFWCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF9oZXggPSByYXdbaV0udG9TdHJpbmcoMTYpO1xuICAgICAgSEVYICs9IF9oZXgubGVuZ3RoID09PSAyID8gX2hleCA6IFwiMFwiICsgX2hleDtcbiAgICB9XG5cbiAgICByZXR1cm4gSEVYO1xuICB9LFxuXG4gIGRlY29kZVRvSEVYKHN0cikge1xuICAgIHJldHVybiBCYXNlNjQuYnl0ZUFycmF5VG9IZXgoYmFzZTY0SnMudG9CeXRlQXJyYXkoQmFzZTY0LnBhZGRpbmcoc3RyKSkpO1xuICB9LFxuXG4gIGJhc2U2NFRvQmFzZTY0VXJsKHMpIHtcbiAgICBzID0gcy5yZXBsYWNlKC89L2csIFwiXCIpO1xuICAgIHMgPSBzLnJlcGxhY2UoL1xcKy9nLCBcIi1cIik7XG4gICAgcyA9IHMucmVwbGFjZSgvXFwvL2csIFwiX1wiKTtcbiAgICByZXR1cm4gcztcbiAgfSxcblxuICB1cmxEZWNvZGUoc3RyKSB7XG4gICAgc3RyID0gc3RyXG4gICAgICAucmVwbGFjZSgvLS9nLCBcIitcIikgLy8gQ29udmVydCAnLScgdG8gJysnXG4gICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIikgLy8gQ29udmVydCAnXycgdG8gJy8nXG4gICAgICAucmVwbGFjZSgvXFxzL2csIFwiIFwiKTsgLy8gQ29udmVydCAnXFxzJyB0byAnICdcblxuICAgIHJldHVybiBhdG9iKHN0cik7XG4gIH0sXG59O1xuXG52YXIgRGlnZXN0SW5mb0hlYWQgPSB7XG4gIHNoYTE6IFwiMzAyMTMwMDkwNjA1MmIwZTAzMDIxYTA1MDAwNDE0XCIsXG4gIHNoYTIyNDogXCIzMDJkMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDQwNTAwMDQxY1wiLFxuICBzaGEyNTY6IFwiMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjBcIixcbiAgc2hhMzg0OiBcIjMwNDEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMjA1MDAwNDMwXCIsXG4gIHNoYTUxMjogXCIzMDUxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDMwNTAwMDQ0MFwiLFxuICBtZDI6IFwiMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwXCIsXG4gIG1kNTogXCIzMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjA1MDUwMDA0MTBcIixcbiAgcmlwZW1kMTYwOiBcIjMwMjEzMDA5MDYwNTJiMjQwMzAyMDEwNTAwMDQxNFwiLFxufTtcblxudmFyIERpZ2VzdEFsZ3MgPSB7XG4gIHNoYTI1NjogU0hBMjU2LFxuICBTSEEyNTY6IFNIQTI1Nixcbn07XG5cbmZ1bmN0aW9uIFJTQVZlcmlmaWVyKG1vZHVsdXMsIGV4cCkge1xuICB0aGlzLm4gPSBudWxsO1xuICB0aGlzLmUgPSAwO1xuXG4gIGlmIChtb2R1bHVzICE9IG51bGwgJiYgZXhwICE9IG51bGwgJiYgbW9kdWx1cy5sZW5ndGggPiAwICYmIGV4cC5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5uID0gbmV3IEJpZ0ludGVnZXIobW9kdWx1cywgMTYpO1xuICAgIHRoaXMuZSA9IHBhcnNlSW50KGV4cCwgMTYpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQga2V5IGRhdGFcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChoRGlnZXN0SW5mbykge1xuICBmb3IgKHZhciBhbGdOYW1lIGluIERpZ2VzdEluZm9IZWFkKSB7XG4gICAgdmFyIGhlYWQgPSBEaWdlc3RJbmZvSGVhZFthbGdOYW1lXTtcbiAgICB2YXIgbGVuID0gaGVhZC5sZW5ndGg7XG5cbiAgICBpZiAoaERpZ2VzdEluZm8uc3Vic3RyaW5nKDAsIGxlbikgPT09IGhlYWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsZzogYWxnTmFtZSxcbiAgICAgICAgaGFzaDogaERpZ2VzdEluZm8uc3Vic3RyaW5nKGxlbiksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cblJTQVZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAobXNnLCBlbmNzaWcpIHtcbiAgZW5jc2lnID0gQmFzZTY0LmRlY29kZVRvSEVYKGVuY3NpZyk7XG4gIGVuY3NpZyA9IGVuY3NpZy5yZXBsYWNlKC9bXjAtOWEtZl18W1xcc1xcbl1dL2dpLCBcIlwiKTtcblxuICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XG5cbiAgaWYgKHNpZy5iaXRMZW5ndGgoKSA+IHRoaXMubi5iaXRMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCB3aXRoIHRoZSBrZXkgbW9kdWx1cy5cIik7XG4gIH1cblxuICB2YXIgZGVjcnlwdGVkU2lnID0gc2lnLm1vZFBvd0ludCh0aGlzLmUsIHRoaXMubik7XG4gIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sIFwiXCIpO1xuICB2YXIgZGlnZXN0SW5mbyA9IGdldEFsZ29yaXRobUZyb21EaWdlc3QoZGlnZXN0KTtcblxuICBpZiAoZGlnZXN0SW5mby5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIURpZ2VzdEFsZ3MuaGFzT3duUHJvcGVydHkoZGlnZXN0SW5mby5hbGcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSGFzaGluZyBhbGdvcml0aG0gaXMgbm90IHN1cHBvcnRlZC5cIik7XG4gIH1cblxuICB2YXIgbXNnSGFzaCA9IERpZ2VzdEFsZ3NbZGlnZXN0SW5mby5hbGddKG1zZykudG9TdHJpbmcoKTtcbiAgcmV0dXJuIGRpZ2VzdEluZm8uaGFzaCA9PT0gbXNnSGFzaDtcbn07XG5cbmNvbnN0IEFsbG93ZWRTaWduaW5nQWxncyA9IFtcIlJTMjU2XCJdO1xuXG5jb25zdCBqd3MgPSB7XG4gIEpXUzoge1xuICAgIHBhcnNlOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KFwiLlwiKTtcbiAgICAgIHZhciBoZWFkZXI7XG4gICAgICB2YXIgcGF5bG9hZDtcblxuICAgICAgLy8gVGhpcyBkaXZlcmdlcyBmcm9tIEF1dGgwJ3MgaW1wbGVtZW50YXRpb24sIHdoaWNoIHRocm93cyByYXRoZXIgdGhhblxuICAgICAgLy8gcmV0dXJuaW5nIHVuZGVmaW5lZFxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBoZWFkZXIgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMF0pKTtcbiAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1sxXSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiVG9rZW4gaGVhZGVyIG9yIHBheWxvYWQgaXMgbm90IHZhbGlkIEpTT05cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxuICAgICAgICBwYXlsb2FkT2JqOiBwYXlsb2FkLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHZlcmlmeTogZnVuY3Rpb24gKGp3dCwga2V5LCBhbGxvd2VkU2lnbmluZ0FsZ3MgPSBbXSkge1xuICAgICAgYWxsb3dlZFNpZ25pbmdBbGdzLmZvckVhY2goKGFsZykgPT4ge1xuICAgICAgICBpZiAoQWxsb3dlZFNpZ25pbmdBbGdzLmluZGV4T2YoYWxnKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNpZ25pbmcgYWxnb3JpdGhtOiBcIiArIGFsZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHZlcmlmeSA9IG5ldyBSU0FWZXJpZmllcihrZXkubiwga2V5LmUpO1xuICAgICAgdmFyIHBhcnRzID0gand0LnNwbGl0KFwiLlwiKTtcblxuICAgICAgdmFyIGhlYWRlckFuZFBheWxvYWQgPSBbcGFydHNbMF0sIHBhcnRzWzFdXS5qb2luKFwiLlwiKTtcbiAgICAgIHJldHVybiB2ZXJpZnkudmVyaWZ5KGhlYWRlckFuZFBheWxvYWQsIHBhcnRzWzJdKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgS2V5VXRpbCA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxuICAgKiBTdXBwb3J0cyBtb2R1bHVzL2V4cG9uZW50LXN0eWxlIGtleXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgZ2V0S2V5KGtleSkge1xuICAgIGlmIChrZXkua3R5ID09PSBcIlJTQVwiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlOiBCYXNlNjQuZGVjb2RlVG9IRVgoa2V5LmUpLFxuICAgICAgICBuOiBCYXNlNjQuZGVjb2RlVG9IRVgoa2V5Lm4pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG5cbmNvbnN0IFg1MDkgPSB7XG4gIGdldFB1YmxpY0tleUZyb21DZXJ0UEVNOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJOb3QgaW1wbGVtZW50ZWQuIFVzZSB0aGUgZnVsbCBvaWRjLWNsaWVudCBsaWJyYXJ5IGlmIHlvdSBuZWVkIHN1cHBvcnQgZm9yIFg1MDkuXCJcbiAgICApO1xuICB9LFxufTtcblxuY29uc3QgY3J5cHRvID0ge1xuICBVdGlsOiB7XG4gICAgaGFzaFN0cmluZzogZnVuY3Rpb24gKHZhbHVlLCBhbGcpIHtcbiAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcbiAgICAgIHJldHVybiBoYXNoRnVuYyh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gaGV4dG9iNjR1KHMpIHtcbiAgaWYgKHMubGVuZ3RoICUgMiA9PT0gMSkge1xuICAgIHMgPSBcIjBcIiArIHM7XG4gIH1cbiAgcmV0dXJuIEJhc2U2NC5iYXNlNjRUb0Jhc2U2NFVybChCYXNlNjQuaGV4VG9CYXNlNjQocykpO1xufVxuXG5jb25zdCB7IGI2NHRvaGV4IH0gPSBCYXNlNjQ7XG5cbmV4cG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfTtcbiIsIi8qKlxuICogR2VuZXJhdGVzIFJGQzQxMjIgdmVyc2lvbiA0IGd1aWQgKClcbiAqL1xuXG52YXIgY3J5cHRvID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvIDogbnVsbDtcblxuZnVuY3Rpb24gX2NyeXB0b1V1aWR2NCgpIHtcbiAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCAoYykgPT5cbiAgICAoXG4gICAgICBjIF5cbiAgICAgIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoYyAvIDQpKSlcbiAgICApLnRvU3RyaW5nKDE2KVxuICApO1xufVxuXG5mdW5jdGlvbiBfdXVpZHY0KCkge1xuICByZXR1cm4gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIChjKSA9PlxuICAgIChjIF4gKChNYXRoLnJhbmRvbSgpICogMTYpID4+IChjIC8gNCkpKS50b1N0cmluZygxNilcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tKCkge1xuICB2YXIgaGFzQ3J5cHRvID0gY3J5cHRvICE9IFwidW5kZWZpbmVkXCIgJiYgY3J5cHRvICE9PSBudWxsO1xuICB2YXIgaGFzUmFuZG9tVmFsdWVzID1cbiAgICBoYXNDcnlwdG8gJiYgdHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgIT0gXCJ1bmRlZmluZWRcIjtcbiAgdmFyIHV1aWQgPSBoYXNSYW5kb21WYWx1ZXMgPyBfY3J5cHRvVXVpZHY0IDogX3V1aWR2NDtcbiAgcmV0dXJuIHV1aWQoKS5yZXBsYWNlKC8tL2csIFwiXCIpO1xufVxuIiwiY29uc3QgVmVyc2lvbiA9IFwiMS4xMS42XCI7IGV4cG9ydCB7VmVyc2lvbn07IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==