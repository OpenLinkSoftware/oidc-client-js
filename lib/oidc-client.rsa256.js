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
      //if (!testing && typeof window !== "undefined") {
      //  return request || XMLHttpRequest;
      //}
      return null;
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
    var jwtHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

    //this._XMLHttpRequest = XMLHttpRequestCtor;
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
    var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;

    _classCallCheck(this, TokenRevocationClient);

    if (!settings) {
      _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
      throw new Error("No settings provided.");
    }

    this._settings = settings;
    //this._XMLHttpRequestCtor = XMLHttpRequestCtor;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tTZXNzaW9uSUZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9DbG9ja1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFJRnJhbWVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9FcnJvclJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5NZW1vcnlXZWJTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9Kb3NlVXRpbEltcGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsUnNhLmpzIiwid2VicGFjazovLy8uL3NyYy9Kc29uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9NZXRhZGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09pZGNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9SZWRpcmVjdE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzcG9uc2VWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Nlc3Npb25Nb25pdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5SZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbGVudFJlbmV3U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlbkNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9VcmxVdGlsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VySW5mb1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlckV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXJTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyeXB0by9yc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi92ZXJzaW9uLmpzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbIlZlcnNpb24iLCJMb2ciLCJPaWRjQ2xpZW50IiwiT2lkY0NsaWVudFNldHRpbmdzIiwiV2ViU3RvcmFnZVN0YXRlU3RvcmUiLCJJbk1lbW9yeVdlYlN0b3JhZ2UiLCJVc2VyTWFuYWdlciIsIkFjY2Vzc1Rva2VuRXZlbnRzIiwiTWV0YWRhdGFTZXJ2aWNlIiwiQ29yZG92YVBvcHVwTmF2aWdhdG9yIiwiQ29yZG92YUlGcmFtZU5hdmlnYXRvciIsIkNoZWNrU2Vzc2lvbklGcmFtZSIsIlRva2VuUmV2b2NhdGlvbkNsaWVudCIsIlNlc3Npb25Nb25pdG9yIiwiR2xvYmFsIiwiVXNlciIsIkRlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsImFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyIiwiVGltZXIiLCJhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lciIsIl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsIl9hY2Nlc3NUb2tlbkV4cGlyaW5nIiwiX2FjY2Vzc1Rva2VuRXhwaXJlZCIsImxvYWQiLCJjb250YWluZXIiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzX2luIiwidW5kZWZpbmVkIiwiZHVyYXRpb24iLCJkZWJ1ZyIsImV4cGlyaW5nIiwiaW5pdCIsImNhbmNlbCIsImV4cGlyZWQiLCJ1bmxvYWQiLCJhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nIiwiY2IiLCJhZGRIYW5kbGVyIiwicmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyIsInJlbW92ZUhhbmRsZXIiLCJhZGRBY2Nlc3NUb2tlbkV4cGlyZWQiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyZWQiLCJEZWZhdWx0SW50ZXJ2YWwiLCJjYWxsYmFjayIsImNsaWVudF9pZCIsInVybCIsImludGVydmFsIiwic3RvcE9uRXJyb3IiLCJfY2FsbGJhY2siLCJfY2xpZW50X2lkIiwiX3VybCIsIl9pbnRlcnZhbCIsIl9zdG9wT25FcnJvciIsImlkeCIsImluZGV4T2YiLCJfZnJhbWVfb3JpZ2luIiwic3Vic3RyIiwiX2ZyYW1lIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIl9ib3VuZE1lc3NhZ2VFdmVudCIsIl9tZXNzYWdlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib3JpZ2luIiwic291cmNlIiwiY29udGVudFdpbmRvdyIsImRhdGEiLCJlcnJvciIsInN0b3AiLCJzdGFydCIsInNlc3Npb25fc3RhdGUiLCJfc2Vzc2lvbl9zdGF0ZSIsInNlbmQiLCJwb3N0TWVzc2FnZSIsIl90aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkNsb2NrU2VydmljZSIsImdldEVwb2NoVGltZSIsIkRhdGUiLCJub3ciLCJwcmVwYXJlIiwicGFyYW1zIiwicG9wdXBXaW5kb3dGZWF0dXJlcyIsInBvcHVwIiwiQ29yZG92YVBvcHVwV2luZG93IiwiRGVmYXVsdFBvcHVwRmVhdHVyZXMiLCJEZWZhdWx0UG9wdXBUYXJnZXQiLCJfcHJvbWlzZSIsInJlamVjdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsImZlYXR1cmVzIiwidGFyZ2V0IiwicG9wdXBXaW5kb3dUYXJnZXQiLCJyZWRpcmVjdF91cmkiLCJzdGFydFVybCIsIl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZCIsImNvcmRvdmFNZXRhZGF0YSIsInNvbWUiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJuYXZpZ2F0ZSIsIl9lcnJvciIsImNvcmRvdmEiLCJyZXF1aXJlIiwibWV0YWRhdGEiLCJfcG9wdXAiLCJJbkFwcEJyb3dzZXIiLCJvcGVuIiwiX2V4aXRDYWxsYmFja0V2ZW50IiwiX2V4aXRDYWxsYmFjayIsIl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50IiwiX2xvYWRTdGFydENhbGxiYWNrIiwicHJvbWlzZSIsImV2ZW50IiwiX3N1Y2Nlc3MiLCJtZXNzYWdlIiwiX2NsZWFudXAiLCJFcnJvciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVycm9yUmVzcG9uc2UiLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yX3VyaSIsInN0YXRlIiwiRXZlbnQiLCJfbmFtZSIsIl9jYWxsYmFja3MiLCJwdXNoIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInJhaXNlIiwiaSIsImxlbmd0aCIsInRpbWVyIiwiaGFuZGxlIiwidGVzdGluZyIsInJlcXVlc3QiLCJfdGVzdGluZyIsInNldFhNTEh0dHBSZXF1ZXN0IiwibmV3UmVxdWVzdCIsImxvY2F0aW9uIiwibG9jYWxTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJfb3JpZ2luIiwic3RhcnRzV2l0aCIsImhyZWYiLCJwYXJlbnQiLCJwcm90b2NvbCIsImhvc3QiLCJfZGF0YSIsImdldEl0ZW0iLCJrZXkiLCJzZXRJdGVtIiwidmFsdWUiLCJyZW1vdmVJdGVtIiwiaW5kZXgiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0Sm9zZVV0aWwiLCJqd3MiLCJLZXlVdGlsIiwiWDUwOSIsImNyeXB0byIsImhleHRvYjY0dSIsImI2NHRvaGV4IiwiQWxsb3dlZFNpZ25pbmdBbGdzIiwicGFyc2VKd3QiLCJqd3QiLCJ0b2tlbiIsIkpXUyIsInBhcnNlIiwiaGVhZGVyIiwiaGVhZGVyT2JqIiwicGF5bG9hZCIsInBheWxvYWRPYmoiLCJ2YWxpZGF0ZUp3dCIsImlzc3VlciIsImF1ZGllbmNlIiwiY2xvY2tTa2V3IiwidGltZUluc2Vuc2l0aXZlIiwia3R5IiwibiIsImdldEtleSIsIng1YyIsImhleCIsImdldFB1YmxpY0tleUZyb21DZXJ0SGV4IiwiY3J2IiwieCIsInkiLCJKb3NlVXRpbCIsIl92YWxpZGF0ZUp3dCIsInZhbGlkYXRlSnd0QXR0cmlidXRlcyIsInBhcnNlSW50IiwiaXNzIiwiYXVkIiwidmFsaWRBdWRpZW5jZSIsIkFycmF5IiwiaXNBcnJheSIsImF6cCIsImxvd2VyTm93IiwidXBwZXJOb3ciLCJpYXQiLCJuYmYiLCJleHAiLCJ0aGVuIiwidmVyaWZ5IiwiaGFzaFN0cmluZyIsImFsZyIsIlV0aWwiLCJoZXhUb0Jhc2U2NFVybCIsIkpzb25TZXJ2aWNlIiwiYWRkaXRpb25hbENvbnRlbnRUeXBlcyIsImp3dEhhbmRsZXIiLCJfY29udGVudFR5cGVzIiwic2xpY2UiLCJfand0SGFuZGxlciIsImdldEpzb24iLCJhbGxvd2VkQ29udGVudFR5cGVzIiwiZm91bmQiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInJjIiwiZmV0Y2giLCJvayIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiZ2V0IiwicmVxIiwidGV4dCIsImpzb24iLCJleCIsInN0YXR1c1RleHQiLCJwb3N0Rm9ybSIsImJhc2ljQXV0aCIsImJ0b2EiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ0b1N0cmluZyIsIm1zZyIsIm5vcExvZ2dlciIsImluZm8iLCJ3YXJuIiwiTk9ORSIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsImxvZ2dlciIsImxldmVsIiwicmVzZXQiLCJhcmdzIiwiYXBwbHkiLCJmcm9tIiwiT2lkY01ldGFkYXRhVXJsUGF0aCIsInNldHRpbmdzIiwiSnNvblNlcnZpY2VDdG9yIiwiX3NldHRpbmdzIiwiX2pzb25TZXJ2aWNlIiwicmVzZXRTaWduaW5nS2V5cyIsInNpZ25pbmdLZXlzIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YVVybCIsInNlZWQiLCJtZXRhZGF0YVNlZWQiLCJhc3NpZ24iLCJnZXRJc3N1ZXIiLCJfZ2V0TWV0YWRhdGFQcm9wZXJ0eSIsImdldEF1dGhvcml6YXRpb25FbmRwb2ludCIsImdldFVzZXJJbmZvRW5kcG9pbnQiLCJnZXRUb2tlbkVuZHBvaW50Iiwib3B0aW9uYWwiLCJnZXRDaGVja1Nlc3Npb25JZnJhbWUiLCJnZXRFbmRTZXNzaW9uRW5kcG9pbnQiLCJnZXRSZXZvY2F0aW9uRW5kcG9pbnQiLCJnZXRLZXlzRW5kcG9pbnQiLCJnZXRTaWduaW5nS2V5cyIsImp3a3NfdXJpIiwia2V5U2V0Iiwia2V5cyIsIl9tZXRhZGF0YVVybCIsImF1dGhvcml0eSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJwcm9tcHQiLCJtYXhfYWdlIiwidWlfbG9jYWxlcyIsImlkX3Rva2VuX2hpbnQiLCJsb2dpbl9oaW50IiwiYWNyX3ZhbHVlcyIsInJlc291cmNlIiwicmVxdWVzdF91cmkiLCJyZXNwb25zZV9tb2RlIiwiZXh0cmFRdWVyeVBhcmFtcyIsImV4dHJhVG9rZW5QYXJhbXMiLCJyZXF1ZXN0X3R5cGUiLCJza2lwVXNlckluZm8iLCJzdGF0ZVN0b3JlIiwiU2lnbmluUmVxdWVzdCIsImlzQ29kZSIsIl9tZXRhZGF0YVNlcnZpY2UiLCJzaWduaW5SZXF1ZXN0IiwiY2xpZW50X3NlY3JldCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlYWRTaWduaW5SZXNwb25zZVN0YXRlIiwicmVtb3ZlU3RhdGUiLCJ1c2VRdWVyeSIsImRlbGltaXRlciIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJzdGF0ZUFwaSIsInJlbW92ZSIsInN0b3JlZFN0YXRlU3RyaW5nIiwiU2lnbmluU3RhdGUiLCJmcm9tU3RvcmFnZVN0cmluZyIsInByb2Nlc3NTaWduaW5SZXNwb25zZSIsIl92YWxpZGF0b3IiLCJ2YWxpZGF0ZVNpZ25pblJlc3BvbnNlIiwiY3JlYXRlU2lnbm91dFJlcXVlc3QiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsInJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsInN0YXRlS2V5IiwiU3RhdGUiLCJwcm9jZXNzU2lnbm91dFJlc3BvbnNlIiwidmFsaWRhdGVTaWdub3V0UmVzcG9uc2UiLCJjbGVhclN0YWxlU3RhdGUiLCJzdGFsZVN0YXRlQWdlIiwidmFsaWRhdG9yIiwibWV0YWRhdGFTZXJ2aWNlIiwiRGVmYXVsdFJlc3BvbnNlVHlwZSIsIkRlZmF1bHRTY29wZSIsIkRlZmF1bHRDbGllbnRBdXRoZW50aWNhdGlvbiIsIkRlZmF1bHRTdGFsZVN0YXRlQWdlIiwiRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyIsImNsaWVudF9hdXRoZW50aWNhdGlvbiIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwiY2xvY2tTZXJ2aWNlIiwidXNlckluZm9Kd3RJc3N1ZXIiLCJtZXJnZUNsYWltcyIsIlJlc3BvbnNlVmFsaWRhdG9yQ3RvciIsIlJlc3BvbnNlVmFsaWRhdG9yIiwiTWV0YWRhdGFTZXJ2aWNlQ3RvciIsIl9hdXRob3JpdHkiLCJfbWV0YWRhdGEiLCJfbWV0YWRhdGFTZWVkIiwiX3NpZ25pbmdLZXlzIiwiX2NsaWVudF9zZWNyZXQiLCJfcmVzcG9uc2VfdHlwZSIsIl9zY29wZSIsIl9yZWRpcmVjdF91cmkiLCJfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX2NsaWVudF9hdXRoZW50aWNhdGlvbiIsIl9wcm9tcHQiLCJfZGlzcGxheSIsIl9tYXhfYWdlIiwiX3VpX2xvY2FsZXMiLCJfYWNyX3ZhbHVlcyIsIl9yZXNvdXJjZSIsIl9yZXNwb25zZV9tb2RlIiwiX2ZpbHRlclByb3RvY29sQ2xhaW1zIiwiX2xvYWRVc2VySW5mbyIsIl9zdGFsZVN0YXRlQWdlIiwiX2Nsb2NrU2tldyIsIl9jbG9ja1NlcnZpY2UiLCJfdXNlckluZm9Kd3RJc3N1ZXIiLCJfbWVyZ2VDbGFpbXMiLCJfZXh0cmFRdWVyeVBhcmFtcyIsIl9leHRyYVRva2VuUGFyYW1zIiwiUG9wdXBOYXZpZ2F0b3IiLCJQb3B1cFdpbmRvdyIsImtlZXBPcGVuIiwibm90aWZ5T3BlbmVyIiwiQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsIiwiX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciIsIl9jaGVja0ZvclBvcHVwQ2xvc2VkIiwiX2lkIiwiZm9jdXMiLCJjbG9zZWQiLCJvcGVuZXIiLCJVcmxVdGlsaXR5IiwicGFyc2VVcmxGcmFnbWVudCIsIlJlZGlyZWN0TmF2aWdhdG9yIiwidXNlUmVwbGFjZVRvTmF2aWdhdGUiLCJyZXBsYWNlIiwiUHJvdG9jb2xDbGFpbXMiLCJVc2VySW5mb1NlcnZpY2VDdG9yIiwiVXNlckluZm9TZXJ2aWNlIiwiam9zZVV0aWwiLCJUb2tlbkNsaWVudEN0b3IiLCJUb2tlbkNsaWVudCIsIl91c2VySW5mb1NlcnZpY2UiLCJfam9zZVV0aWwiLCJfdG9rZW5DbGllbnQiLCJfcHJvY2Vzc1NpZ25pblBhcmFtcyIsIl92YWxpZGF0ZVRva2VucyIsIl9wcm9jZXNzQ2xhaW1zIiwibm9uY2UiLCJpZF90b2tlbiIsImNvZGVfdmVyaWZpZXIiLCJjb2RlIiwiaXNPcGVuSWRDb25uZWN0IiwicHJvZmlsZSIsImdldENsYWltcyIsImNsYWltcyIsInN1YiIsImNsYWltczEiLCJjbGFpbXMyIiwicmVzdWx0IiwidmFsdWVzIiwiZm9yRWFjaCIsInR5cGUiLCJfcHJvY2Vzc0NvZGUiLCJfdmFsaWRhdGVJZFRva2VuQW5kQWNjZXNzVG9rZW4iLCJfdmFsaWRhdGVJZFRva2VuIiwiZXhjaGFuZ2VDb2RlIiwidG9rZW5SZXNwb25zZSIsIl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzIiwiY2xvY2tTa2V3SW5TZWNvbmRzIiwiX3ZhbGlkYXRlQWNjZXNzVG9rZW4iLCJfZ2V0U2lnbmluZ0tleUZvckp3dCIsImtpZCIsIl9maWx0ZXJCeUFsZyIsImZpbHRlciIsIl9nZXRTaWduaW5nS2V5Rm9ySnd0V2l0aFNpbmdsZVJldHJ5IiwiYXRfaGFzaCIsImhhc2hBbGciLCJoYXNoQml0cyIsInNoYSIsImhhc2giLCJsZWZ0IiwibGVmdF9iNjR1IiwidXNlck1hbmFnZXIiLCJDaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiX3VzZXJNYW5hZ2VyIiwiX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJldmVudHMiLCJhZGRVc2VyTG9hZGVkIiwiX3N0YXJ0IiwiYWRkVXNlclVubG9hZGVkIiwiX3N0b3AiLCJnZXRVc2VyIiwidXNlciIsIm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwicXVlcnlTZXNzaW9uU3RhdHVzIiwic2Vzc2lvbiIsInRtcFVzZXIiLCJzaWQiLCJjYXRjaCIsImVyciIsIl9zdWIiLCJfc2lkIiwiX2NoZWNrU2Vzc2lvbklGcmFtZSIsIl9jaGVja1Nlc3Npb25JbnRlcnZhbCIsIl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsInRpbWVySGFuZGxlIiwicmFpc2VFdmVudCIsIl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIl9yYWlzZVVzZXJTaWduZWRPdXQiLCJfcmFpc2VVc2VyU2lnbmVkSW4iLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwib2lkYyIsImlzT2lkYyIsImFkZFF1ZXJ5UGFyYW0iLCJjb2RlX2NoYWxsZW5nZSIsInNwbGl0IiwiaXNPQXV0aCIsIk9pZGNTY29wZSIsInRva2VuX3R5cGUiLCJleHBpcmVzX2F0Iiwic2NvcGVzIiwiYXJndW1lbnRzIiwiX25vbmNlIiwiX2NvZGVfdmVyaWZpZXIiLCJfY29kZV9jaGFsbGVuZ2UiLCJfc2tpcFVzZXJJbmZvIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZWQiLCJzdG9yYWdlU3RyaW5nIiwiU2lsZW50UmVuZXdTZXJ2aWNlIiwiX3Rva2VuRXhwaXJpbmciLCJzaWduaW5TaWxlbnQiLCJfcmFpc2VTaWxlbnRSZW5ld0Vycm9yIiwiX2NyZWF0ZWQiLCJfcmVxdWVzdF90eXBlIiwic3RvcmFnZSIsImFnZSIsImN1dG9mZiIsImdldEFsbEtleXMiLCJwcm9taXNlcyIsInAiLCJhbGwiLCJUaW1lckR1cmF0aW9uIiwibm93RnVuYyIsIl9ub3dGdW5jIiwiZXhwaXJhdGlvbiIsIl90aW1lckhhbmRsZSIsIl9leHBpcmF0aW9uIiwidGltZXJEdXJhdGlvbiIsImRpZmYiLCJncmFudF90eXBlIiwiZXhjaGFuZ2VSZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiQWNjZXNzVG9rZW5UeXBlSGludCIsIlJlZnJlc2hUb2tlblR5cGVIaW50IiwicmV2b2tlIiwicmVxdWlyZWQiLCJfcmV2b2tlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2xvYmFsIiwibGFzdEluZGV4T2YiLCJyZWdleCIsIm0iLCJjb3VudGVyIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsInByb3AiLCJfZ2V0Q2xhaW1zRnJvbUp3dCIsInJlc3BvbnNlVGV4dCIsImlzc3VlclByb21pc2UiLCJTaWxlbnRSZW5ld1NlcnZpY2VDdG9yIiwiU2Vzc2lvbk1vbml0b3JDdG9yIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciIsIlVzZXJNYW5hZ2VyU2V0dGluZ3MiLCJfZXZlbnRzIiwiVXNlck1hbmFnZXJFdmVudHMiLCJfc2lsZW50UmVuZXdTZXJ2aWNlIiwiYXV0b21hdGljU2lsZW50UmVuZXciLCJzdGFydFNpbGVudFJlbmV3IiwibW9uaXRvclNlc3Npb24iLCJfc2Vzc2lvbk1vbml0b3IiLCJfdG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiX2xvYWRVc2VyIiwicmVtb3ZlVXNlciIsInN0b3JlVXNlciIsInNpZ25pblJlZGlyZWN0IiwibmF2UGFyYW1zIiwiX3NpZ25pblN0YXJ0IiwiX3JlZGlyZWN0TmF2aWdhdG9yIiwic2lnbmluUmVkaXJlY3RDYWxsYmFjayIsIl9zaWduaW5FbmQiLCJzaWduaW5Qb3B1cCIsInBvcHVwX3JlZGlyZWN0X3VyaSIsIl9zaWduaW4iLCJfcG9wdXBOYXZpZ2F0b3IiLCJzaWduaW5Qb3B1cENhbGxiYWNrIiwiX3NpZ25pbkNhbGxiYWNrIiwiX3VzZVJlZnJlc2hUb2tlbiIsImluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsInZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsImN1cnJlbnRfc3ViIiwiX3NpZ25pblNpbGVudElmcmFtZSIsImlkVG9rZW5WYWxpZGF0aW9uIiwiX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbiIsImF1dGhfdGltZSIsInNpbGVudF9yZWRpcmVjdF91cmkiLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lnbmluU2lsZW50Q2FsbGJhY2siLCJzaWduaW5DYWxsYmFjayIsInNpZ25vdXRDYWxsYmFjayIsInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIiwic2lnbm91dFBvcHVwQ2FsbGJhY2siLCJxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIm5hdlJlc3BvbnNlIiwic2lnbmluUmVzcG9uc2UiLCJuYXZpZ2F0b3IiLCJuYXZpZ2F0b3JQYXJhbXMiLCJzaWdub3V0UmVkaXJlY3QiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJfc2lnbm91dFN0YXJ0IiwiX3NpZ25vdXRFbmQiLCJzaWdub3V0UG9wdXAiLCJwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfc2lnbm91dCIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInNpZ25vdXRSZXF1ZXN0Iiwic2lnbm91dFJlc3BvbnNlIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzdWNjZXNzIiwiX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwiLCJhdFN1Y2Nlc3MiLCJfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwiLCJydFN1Y2Nlc3MiLCJzdG9wU2lsZW50UmVuZXciLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJfdXNlckxvYWRlZCIsIl91c2VyVW5sb2FkZWQiLCJfc2lsZW50UmVuZXdFcnJvciIsIl91c2VyU2lnbmVkSW4iLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyTG9hZGVkIiwicmVtb3ZlVXNlclVubG9hZGVkIiwiYWRkU2lsZW50UmVuZXdFcnJvciIsInJlbW92ZVNpbGVudFJlbmV3RXJyb3IiLCJhZGRVc2VyU2lnbmVkSW4iLCJyZW1vdmVVc2VyU2lnbmVkSW4iLCJhZGRVc2VyU2lnbmVkT3V0IiwicmVtb3ZlVXNlclNpZ25lZE91dCIsImFkZFVzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIkRlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCIsInN0b3JlIiwiX3BvcHVwX3JlZGlyZWN0X3VyaSIsIl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcG9wdXBXaW5kb3dGZWF0dXJlcyIsIl9wb3B1cFdpbmRvd1RhcmdldCIsIl9zaWxlbnRfcmVkaXJlY3RfdXJpIiwiX3NpbGVudFJlcXVlc3RUaW1lb3V0IiwiX2F1dG9tYXRpY1NpbGVudFJlbmV3IiwiX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfbW9uaXRvclNlc3Npb24iLCJfbW9uaXRvckFub255bW91c1Nlc3Npb24iLCJfcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJwcmVmaXgiLCJfc3RvcmUiLCJfcHJlZml4IiwiQmlnSW50ZWdlciIsIkpTQk4iLCJiNjRtYXAiLCJiNjRwYWQiLCJCYXNlNjQiLCJzIiwicmV0IiwiayIsInNsb3AiLCJjaGFyQXQiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaGV4VG9CYXNlNjQiLCJoIiwiYyIsInN1YnN0cmluZyIsInBhZGRpbmciLCJzdHIiLCJtb2QiLCJwYWQiLCJqb2luIiwiYnl0ZUFycmF5VG9IZXgiLCJyYXciLCJIRVgiLCJfaGV4IiwiZGVjb2RlVG9IRVgiLCJiYXNlNjRKcyIsInRvQnl0ZUFycmF5IiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJ1cmxEZWNvZGUiLCJhdG9iIiwiRGlnZXN0SW5mb0hlYWQiLCJzaGExIiwic2hhMjI0Iiwic2hhMjU2Iiwic2hhMzg0Iiwic2hhNTEyIiwibWQyIiwibWQ1IiwicmlwZW1kMTYwIiwiRGlnZXN0QWxncyIsIlNIQTI1NiIsIlJTQVZlcmlmaWVyIiwibW9kdWx1cyIsImdldEFsZ29yaXRobUZyb21EaWdlc3QiLCJoRGlnZXN0SW5mbyIsImFsZ05hbWUiLCJoZWFkIiwibGVuIiwicHJvdG90eXBlIiwiZW5jc2lnIiwic2lnIiwiYml0TGVuZ3RoIiwiZGVjcnlwdGVkU2lnIiwibW9kUG93SW50IiwiZGlnZXN0IiwiZGlnZXN0SW5mbyIsIm1zZ0hhc2giLCJwYXJ0cyIsImFsbG93ZWRTaWduaW5nQWxncyIsImhlYWRlckFuZFBheWxvYWQiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydFBFTSIsImhhc2hGdW5jIiwicmFuZG9tIiwibXNDcnlwdG8iLCJfY3J5cHRvVXVpZHY0IiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsIl91dWlkdjQiLCJNYXRoIiwiaGFzQ3J5cHRvIiwiaGFzUmFuZG9tVmFsdWVzIiwidXVpZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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SixDQUFlLENBQWYsQ0FBdkIsRUFBMEMsQ0FBMUMsSUFBZ0QsTUFBT3JELElBQUksQ0FGOUQsRUFHRTdaLFFBSEYsQ0FHVyxFQUhYLENBRDREO0FBQUEsR0FBdkQsQ0FBUDtBQU1EOztBQUVELFNBQVNtZCxPQUFULEdBQW1CO0FBQ2pCLFNBQU8sQ0FBQyxDQUFDLEdBQUQsSUFBUSxDQUFDLEdBQVQsR0FBZSxDQUFDLEdBQWhCLEdBQXNCLENBQUMsR0FBdkIsR0FBNkIsQ0FBQyxJQUEvQixFQUFxQ3pULE9BQXJDLENBQTZDLFFBQTdDLEVBQXVELFVBQUNtUSxDQUFEO0FBQUEsV0FDNUQsQ0FBQ0EsSUFBTXVELEtBQUtOLE1BQUwsS0FBZ0IsRUFBakIsSUFBeUJqRCxJQUFJLENBQW5DLEVBQXdDN1osUUFBeEMsQ0FBaUQsRUFBakQsQ0FENEQ7QUFBQSxHQUF2RCxDQUFQO0FBR0Q7O0FBRWMsU0FBUzhjLE1BQVQsR0FBa0I7QUFDL0IsTUFBSU8sWUFBWWppQixVQUFVLFdBQVYsSUFBeUJBLFdBQVcsSUFBcEQ7QUFDQSxNQUFJa2lCLGtCQUNGRCxhQUFhLE9BQU9qaUIsT0FBTzZoQixlQUFkLElBQWlDLFdBRGhEO0FBRUEsTUFBSU0sT0FBT0Qsa0JBQWtCTixhQUFsQixHQUFrQ0csT0FBN0M7QUFDQSxTQUFPSSxPQUFPN1QsT0FBUCxDQUFlLElBQWYsRUFBcUIsRUFBckIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkQsSUFBTXRhLFVBQVUsUUFBaEIsQyxRQUFrQ0EsTyxHQUFBQSxPOzs7Ozs7Ozs7OztBQ0FsQyxlIiwiZmlsZSI6Im9pZGMtY2xpZW50LnJzYTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9zcmMvTG9nLmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBWZXJzaW9uLFxuICAgIExvZyxcbiAgICBPaWRjQ2xpZW50LFxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXG4gICAgVXNlck1hbmFnZXIsXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgU2Vzc2lvbk1vbml0b3IsXG4gICAgR2xvYmFsLFxuICAgIFVzZXJcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKmdsb2JhbHMgd2luZG93LCBnbG9iYWwsIHJlcXVpcmUqL1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXG5cdCAgICB2YXIgY3J5cHRvO1xuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGluIHdlYiB3b3JrZXIgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gc2VsZi5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3b3JrZXJcblx0ICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWxUaGlzLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIChleHBlcmltZW50YWwgSUUgMTEpIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tc0NyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5tc0NyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIGdsb2JhbCAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbC5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW1wb3J0IHZpYSByZXF1aXJlIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgIH1cblxuXHQgICAgLypcblx0ICAgICAqIENyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuXHQgICAgICpcblx0ICAgICAqIEFzIE1hdGgucmFuZG9tKCkgaXMgY3J5cHRvZ3JhcGhpY2FsbHkgbm90IHNhZmUgdG8gdXNlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcnlwdG9TZWN1cmVSYW5kb21JbnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKGNyeXB0bykge1xuXHQgICAgICAgICAgICAvLyBVc2UgZ2V0UmFuZG9tVmFsdWVzIG1ldGhvZCAoQnJvd3Nlcilcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF07XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBVc2UgcmFuZG9tQnl0ZXMgbWV0aG9kIChOb2RlSlMpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLnJhbmRvbUJ5dGVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoNCkucmVhZEludDMyTEUoKTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignTmF0aXZlIGNyeXB0byBtb2R1bGUgY291bGQgbm90IGJlIHVzZWQgdG8gZ2V0IHNlY3VyZSByYW5kb20gbnVtYmVyLicpO1xuXHQgICAgfTtcblxuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWxsIG9mIE9iamVjdC5jcmVhdGVcblxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fVxuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0U2lnQnl0ZXM7IGogKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaikgPj4+IDJdID0gdGhhdFdvcmRzW2ogPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goY3J5cHRvU2VjdXJlUmFuZG9tSW50KCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBIID0gW107XG5cdCAgICB2YXIgSyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcblx0ICAgICAgICAgICAgdmFyIHNxcnROID0gTWF0aC5zcXJ0KG4pO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBmYWN0b3IgPSAyOyBmYWN0b3IgPD0gc3FydE47IGZhY3RvcisrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbiA9IDI7XG5cdCAgICAgICAgdmFyIG5QcmltZSA9IDA7XG5cdCAgICAgICAgd2hpbGUgKG5QcmltZSA8IDY0KSB7XG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoblByaW1lIDwgOCkge1xuXHQgICAgICAgICAgICAgICAgICAgIEhbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAyKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMykpO1xuXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIG4rKztcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTI1NiBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTYgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgZiA9IEhbNV07XG5cdCAgICAgICAgICAgIHZhciBnID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMCAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKSAgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWEweCA+Pj4gMyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTEgID0gKChnYW1tYTF4IDw8IDE1KSB8IChnYW1tYTF4ID4+PiAxNykpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoICA9IChlICYgZikgXiAofmUgJiBnKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XG5cblx0ICAgICAgICAgICAgICAgIGggPSBnO1xuXHQgICAgICAgICAgICAgICAgZyA9IGY7XG5cdCAgICAgICAgICAgICAgICBmID0gZTtcblx0ICAgICAgICAgICAgICAgIGUgPSAoZCArIHQxKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSBiO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNl0gPSAoSFs2XSArIGcpIHwgMDtcblx0ICAgICAgICAgICAgSFs3XSA9IChIWzddICsgaCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1Nih3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjU2KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyNTY7XG5cbn0pKTsiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBCYXNpYyBKYXZhU2NyaXB0IEJOIGxpYnJhcnkgLSBzdWJzZXQgdXNlZnVsIGZvciBSU0EgZW5jcnlwdGlvbi5cblxuICAgIC8vIEJpdHMgcGVyIGRpZ2l0XG4gICAgdmFyIGRiaXRzO1xuXG4gICAgLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbiAgICB2YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG4gICAgdmFyIGpfbG0gPSAoKGNhbmFyeSYweGZmZmZmZik9PTB4ZWZjYWZlKTtcblxuICAgIC8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYykge1xuICAgICAgaWYoYSAhPSBudWxsKVxuICAgICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBhKSB0aGlzLmZyb21OdW1iZXIoYSxiLGMpO1xuICAgICAgICBlbHNlIGlmKGIgPT0gbnVsbCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBhKSB0aGlzLmZyb21TdHJpbmcoYSwyNTYpO1xuICAgICAgICBlbHNlIHRoaXMuZnJvbVN0cmluZyhhLGIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbiAgICBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuXG4gICAgLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuICAgIC8vIGMgaXMgaW5pdGlhbCBjYXJyeSwgcmV0dXJucyBmaW5hbCBjYXJyeS5cbiAgICAvLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4gICAgLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cblxuICAgIC8vIGFtMTogdXNlIGEgc2luZ2xlIG11bHQgYW5kIGRpdmlkZSB0byBnZXQgdGhlIGhpZ2ggYml0cyxcbiAgICAvLyBtYXggZGlnaXQgYml0cyBzaG91bGQgYmUgMjYgYmVjYXVzZVxuICAgIC8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbiAgICBmdW5jdGlvbiBhbTEoaSx4LHcsaixjLG4pIHtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCp0aGlzW2krK10rd1tqXStjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2LzB4NDAwMDAwMCk7XG4gICAgICAgIHdbaisrXSA9IHYmMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIGZ1bmN0aW9uIGFtMihpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDdmZmYsIHhoID0geD4+MTU7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTU7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHg3ZmZmKTw8MTUpK3dbal0rKGMmMHgzZmZmZmZmZik7XG4gICAgICAgIGMgPSAobD4+PjMwKSsobT4+PjE1KSt4aCpoKyhjPj4+MzApO1xuICAgICAgICB3W2orK10gPSBsJjB4M2ZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gQWx0ZXJuYXRlbHksIHNldCBtYXggZGlnaXQgYml0cyB0byAyOCBzaW5jZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgc2xvdyBkb3duIHdoZW4gZGVhbGluZyB3aXRoIDMyLWJpdCBudW1iZXJzLlxuICAgIGZ1bmN0aW9uIGFtMyhpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDNmZmYsIHhoID0geD4+MTQ7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHgzZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTQ7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHgzZmZmKTw8MTQpK3dbal0rYztcbiAgICAgICAgYyA9IChsPj4yOCkrKG0+PjE0KSt4aCpoO1xuICAgICAgICB3W2orK10gPSBsJjB4ZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0yO1xuICAgICAgZGJpdHMgPSAzMDtcbiAgICB9XG4gICAgZWxzZSBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgIT0gXCJOZXRzY2FwZVwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTE7XG4gICAgICBkYml0cyA9IDI2O1xuICAgIH1cbiAgICBlbHNlIHsgLy8gTW96aWxsYS9OZXRzY2FwZSBzZWVtcyB0byBwcmVmZXIgYW0zXG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMztcbiAgICAgIGRiaXRzID0gMjg7XG4gICAgfVxuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuREIgPSBkYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMTw8ZGJpdHMpLTEpO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDE8PGRiaXRzKTtcblxuICAgIHZhciBCSV9GUCA9IDUyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkZWID0gTWF0aC5wb3coMixCSV9GUCk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjEgPSBCSV9GUC1kYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMiA9IDIqZGJpdHMtQklfRlA7XG5cbiAgICAvLyBEaWdpdCBjb252ZXJzaW9uc1xuICAgIHZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgdmFyIEJJX1JDID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIHJyLHZ2O1xuICAgIHJyID0gXCIwXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAwOyB2diA8PSA5OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJhXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiQVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG5cbiAgICBmdW5jdGlvbiBpbnQyY2hhcihuKSB7IHJldHVybiBCSV9STS5jaGFyQXQobik7IH1cbiAgICBmdW5jdGlvbiBpbnRBdChzLGkpIHtcbiAgICAgIHZhciBjID0gQklfUkNbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIHJldHVybiAoYz09bnVsbCk/LTE6YztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb3B5IHRoaXMgdG8gclxuICAgIGZ1bmN0aW9uIGJucENvcHlUbyhyKSB7XG4gICAgICBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIGludGVnZXIgdmFsdWUgeCwgLURWIDw9IHggPCBEVlxuICAgIGZ1bmN0aW9uIGJucEZyb21JbnQoeCkge1xuICAgICAgdGhpcy50ID0gMTtcbiAgICAgIHRoaXMucyA9ICh4PDApPy0xOjA7XG4gICAgICBpZih4ID4gMCkgdGhpc1swXSA9IHg7XG4gICAgICBlbHNlIGlmKHggPCAtMSkgdGhpc1swXSA9IHgrdGhpcy5EVjtcbiAgICAgIGVsc2UgdGhpcy50ID0gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYmlnaW50IGluaXRpYWxpemVkIHRvIHZhbHVlXG4gICAgZnVuY3Rpb24gbmJ2KGkpIHsgdmFyIHIgPSBuYmkoKTsgci5mcm9tSW50KGkpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gc3RyaW5nIGFuZCByYWRpeFxuICAgIGZ1bmN0aW9uIGJucEZyb21TdHJpbmcocyxiKSB7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDI1NikgayA9IDg7IC8vIGJ5dGUgYXJyYXlcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHsgdGhpcy5mcm9tUmFkaXgocyxiKTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnQgPSAwO1xuICAgICAgdGhpcy5zID0gMDtcbiAgICAgIHZhciBpID0gcy5sZW5ndGgsIG1pID0gZmFsc2UsIHNoID0gMDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHZhciB4ID0gKGs9PTgpP3NbaV0mMHhmZjppbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2ggPT0gMClcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IHg7XG4gICAgICAgIGVsc2UgaWYoc2grayA+IHRoaXMuREIpIHtcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSAoeCYoKDE8PCh0aGlzLkRCLXNoKSktMSkpPDxzaDtcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4Pj4odGhpcy5EQi1zaCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSB4PDxzaDtcbiAgICAgICAgc2ggKz0gaztcbiAgICAgICAgaWYoc2ggPj0gdGhpcy5EQikgc2ggLT0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGsgPT0gOCAmJiAoc1swXSYweDgwKSAhPSAwKSB7XG4gICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICBpZihzaCA+IDApIHRoaXNbdGhpcy50LTFdIHw9ICgoMTw8KHRoaXMuREItc2gpKS0xKTw8c2g7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgZnVuY3Rpb24gYm5wQ2xhbXAoKSB7XG4gICAgICB2YXIgYyA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgd2hpbGUodGhpcy50ID4gMCAmJiB0aGlzW3RoaXMudC0xXSA9PSBjKSAtLXRoaXMudDtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIGluIGdpdmVuIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5Ub1N0cmluZyhiKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gXCItXCIrdGhpcy5uZWdhdGUoKS50b1N0cmluZyhiKTtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgdmFyIGttID0gKDE8PGspLTEsIGQsIG0gPSBmYWxzZSwgciA9IFwiXCIsIGkgPSB0aGlzLnQ7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklaztcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSA+IDApIHsgbSA9IHRydWU7IHIgPSBpbnQyY2hhcihkKTsgfVxuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgaykge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoay1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT1rKSkma207XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZCA+IDApIG0gPSB0cnVlO1xuICAgICAgICAgIGlmKG0pIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtP3I6XCIwXCI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBmdW5jdGlvbiBibk5lZ2F0ZSgpIHsgdmFyIHIgPSBuYmkoKTsgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBmdW5jdGlvbiBibkFicygpIHsgcmV0dXJuICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gKyBpZiB0aGlzID4gYSwgLSBpZiB0aGlzIDwgYSwgMCBpZiBlcXVhbFxuICAgIGZ1bmN0aW9uIGJuQ29tcGFyZVRvKGEpIHtcbiAgICAgIHZhciByID0gdGhpcy5zLWEucztcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuIHI7XG4gICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgIHIgPSBpLWEudDtcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuICh0aGlzLnM8MCk/LXI6cjtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSBpZigocj10aGlzW2ldLWFbaV0pICE9IDApIHJldHVybiByO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbiAgICBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgICB2YXIgciA9IDEsIHQ7XG4gICAgICBpZigodD14Pj4+MTYpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh0PXg+PjgpICE9IDApIHsgeCA9IHQ7IHIgKz0gODsgfVxuICAgICAgaWYoKHQ9eD4+NCkgIT0gMCkgeyB4ID0gdDsgciArPSA0OyB9XG4gICAgICBpZigodD14Pj4yKSAhPSAwKSB7IHggPSB0OyByICs9IDI7IH1cbiAgICAgIGlmKCh0PXg+PjEpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHRoZSBudW1iZXIgb2YgYml0cyBpbiBcInRoaXNcIlxuICAgIGZ1bmN0aW9uIGJuQml0TGVuZ3RoKCkge1xuICAgICAgaWYodGhpcy50IDw9IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV4odGhpcy5zJnRoaXMuRE0pKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpK25dID0gdGhpc1tpXTtcbiAgICAgIGZvcihpID0gbi0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByLnQgPSB0aGlzLnQrbjtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRFJTaGlmdFRvKG4scikge1xuICAgICAgZm9yKHZhciBpID0gbjsgaSA8IHRoaXMudDsgKytpKSByW2ktbl0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gTWF0aC5tYXgodGhpcy50LW4sMCk7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJucExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8Y2JzKS0xO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpLCBjID0gKHRoaXMuczw8YnMpJnRoaXMuRE0sIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkge1xuICAgICAgICByW2krZHMrMV0gPSAodGhpc1tpXT4+Y2JzKXxjO1xuICAgICAgICBjID0gKHRoaXNbaV0mYm0pPDxicztcbiAgICAgIH1cbiAgICAgIGZvcihpID0gZHMtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgcltkc10gPSBjO1xuICAgICAgci50ID0gdGhpcy50K2RzKzE7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJucFJTaGlmdFRvKG4scikge1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoZHMgPj0gdGhpcy50KSB7IHIudCA9IDA7IHJldHVybjsgfVxuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8YnMpLTE7XG4gICAgICByWzBdID0gdGhpc1tkc10+PmJzO1xuICAgICAgZm9yKHZhciBpID0gZHMrMTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgIHJbaS1kcy0xXSB8PSAodGhpc1tpXSZibSk8PGNicztcbiAgICAgICAgcltpLWRzXSA9IHRoaXNbaV0+PmJzO1xuICAgICAgfVxuICAgICAgaWYoYnMgPiAwKSByW3RoaXMudC1kcy0xXSB8PSAodGhpcy5zJmJtKTw8Y2JzO1xuICAgICAgci50ID0gdGhpcy50LWRzO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJucFN1YlRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldLWFbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjIC09IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjIC09IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIGVsc2UgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICogYSwgciAhPSB0aGlzLGEgKEhBQyAxNC4xMilcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlUbyhhLHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKSwgeSA9IGEuYWJzKCk7XG4gICAgICB2YXIgaSA9IHgudDtcbiAgICAgIHIudCA9IGkreS50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeS50OyArK2kpIHJbaSt4LnRdID0geC5hbSgwLHlbaV0scixpLDAseC50KTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZih0aGlzLnMgIT0gYS5zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpc14yLCByICE9IHRoaXMgKEhBQyAxNC4xNilcbiAgICBmdW5jdGlvbiBibnBTcXVhcmVUbyhyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICB2YXIgaSA9IHIudCA9IDIqeC50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeC50LTE7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICAgIGlmKChyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSkgPj0geC5EVikge1xuICAgICAgICAgIHJbaSt4LnRdIC09IHguRFY7XG4gICAgICAgICAgcltpK3gudCsxXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHIudCA+IDApIHJbci50LTFdICs9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGRpdmlkZSB0aGlzIGJ5IG0sIHF1b3RpZW50IGFuZCByZW1haW5kZXIgdG8gcSwgciAoSEFDIDE0LjIwKVxuICAgIC8vIHIgIT0gcSwgdGhpcyAhPSBtLiAgcSBvciByIG1heSBiZSBudWxsLlxuICAgIGZ1bmN0aW9uIGJucERpdlJlbVRvKG0scSxyKSB7XG4gICAgICB2YXIgcG0gPSBtLmFicygpO1xuICAgICAgaWYocG0udCA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgaWYocHQudCA8IHBtLnQpIHtcbiAgICAgICAgaWYocSAhPSBudWxsKSBxLmZyb21JbnQoMCk7XG4gICAgICAgIGlmKHIgIT0gbnVsbCkgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHIgPT0gbnVsbCkgciA9IG5iaSgpO1xuICAgICAgdmFyIHkgPSBuYmkoKSwgdHMgPSB0aGlzLnMsIG1zID0gbS5zO1xuICAgICAgdmFyIG5zaCA9IHRoaXMuREItbmJpdHMocG1bcG0udC0xXSk7ICAgLy8gbm9ybWFsaXplIG1vZHVsdXNcbiAgICAgIGlmKG5zaCA+IDApIHsgcG0ubFNoaWZ0VG8obnNoLHkpOyBwdC5sU2hpZnRUbyhuc2gscik7IH1cbiAgICAgIGVsc2UgeyBwbS5jb3B5VG8oeSk7IHB0LmNvcHlUbyhyKTsgfVxuICAgICAgdmFyIHlzID0geS50O1xuICAgICAgdmFyIHkwID0geVt5cy0xXTtcbiAgICAgIGlmKHkwID09IDApIHJldHVybjtcbiAgICAgIHZhciB5dCA9IHkwKigxPDx0aGlzLkYxKSsoKHlzPjEpP3lbeXMtMl0+PnRoaXMuRjI6MCk7XG4gICAgICB2YXIgZDEgPSB0aGlzLkZWL3l0LCBkMiA9ICgxPDx0aGlzLkYxKS95dCwgZSA9IDE8PHRoaXMuRjI7XG4gICAgICB2YXIgaSA9IHIudCwgaiA9IGkteXMsIHQgPSAocT09bnVsbCk/bmJpKCk6cTtcbiAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICBpZihyLmNvbXBhcmVUbyh0KSA+PSAwKSB7XG4gICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgfVxuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpO1xuICAgICAgdC5zdWJUbyh5LHkpOyAgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgIHdoaWxlKHkudCA8IHlzKSB5W3kudCsrXSA9IDA7XG4gICAgICB3aGlsZSgtLWogPj0gMCkge1xuICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICB2YXIgcWQgPSAoclstLWldPT15MCk/dGhpcy5ETTpNYXRoLmZsb29yKHJbaV0qZDErKHJbaS0xXStlKSpkMik7XG4gICAgICAgIGlmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKSA8IHFkKSB7ICAgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgICAgIHdoaWxlKHJbaV0gPCAtLXFkKSByLnN1YlRvKHQscik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHEgIT0gbnVsbCkge1xuICAgICAgICByLmRyU2hpZnRUbyh5cyxxKTtcbiAgICAgICAgaWYodHMgIT0gbXMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpO1xuICAgICAgfVxuICAgICAgci50ID0geXM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZihuc2ggPiAwKSByLnJTaGlmdFRvKG5zaCxyKTsgLy8gRGVub3JtYWxpemUgcmVtYWluZGVyXG4gICAgICBpZih0cyA8IDApIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBmdW5jdGlvbiBibk1vZChhKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwscik7XG4gICAgICBpZih0aGlzLnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSBhLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHsgdGhpcy5tID0gbTsgfVxuICAgIGZ1bmN0aW9uIGNDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgcmV0dXJuIHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIGNSZWR1Y2UoeCkgeyB4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpOyB9XG4gICAgZnVuY3Rpb24gY011bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuICAgIGZ1bmN0aW9uIGNTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBjQ29udmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBjUmV2ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4gXCItMS90aGlzICUgMl5EQlwiOyB1c2VmdWwgZm9yIE1vbnQuIHJlZHVjdGlvblxuICAgIC8vIGp1c3RpZmljYXRpb246XG4gICAgLy8gICAgICAgICB4eSA9PSAxIChtb2QgbSlcbiAgICAvLyAgICAgICAgIHh5ID0gIDEra21cbiAgICAvLyAgIHh5KDIteHkpID0gKDEra20pKDEta20pXG4gICAgLy8geFt5KDIteHkpXSA9IDEta14ybV4yXG4gICAgLy8geFt5KDIteHkpXSA9PSAxIChtb2QgbV4yKVxuICAgIC8vIGlmIHkgaXMgMS94IG1vZCBtLCB0aGVuIHkoMi14eSkgaXMgMS94IG1vZCBtXjJcbiAgICAvLyBzaG91bGQgcmVkdWNlIHggYW5kIHkoMi14eSkgYnkgbV4yIGF0IGVhY2ggc3RlcCB0byBrZWVwIHNpemUgYm91bmRlZC5cbiAgICAvLyBKUyBtdWx0aXBseSBcIm92ZXJmbG93c1wiIGRpZmZlcmVudGx5IGZyb20gQy9DKyssIHNvIGNhcmUgaXMgbmVlZGVkIGhlcmUuXG4gICAgZnVuY3Rpb24gYm5wSW52RGlnaXQoKSB7XG4gICAgICBpZih0aGlzLnQgPCAxKSByZXR1cm4gMDtcbiAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgIGlmKCh4JjEpID09IDApIHJldHVybiAwO1xuICAgICAgdmFyIHkgPSB4JjM7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXjJcbiAgICAgIHkgPSAoeSooMi0oeCYweGYpKnkpKSYweGY7IC8vIHkgPT0gMS94IG1vZCAyXjRcbiAgICAgIHkgPSAoeSooMi0oeCYweGZmKSp5KSkmMHhmZjsgICAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICB5ID0gKHkqKDItKCgoeCYweGZmZmYpKnkpJjB4ZmZmZikpKSYweGZmZmY7ICAgIC8vIHkgPT0gMS94IG1vZCAyXjE2XG4gICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgIHkgPSAoeSooMi14KnkldGhpcy5EVikpJXRoaXMuRFY7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAvLyB3ZSByZWFsbHkgd2FudCB0aGUgbmVnYXRpdmUgaW52ZXJzZSwgYW5kIC1EViA8IHkgPCBEVlxuICAgICAgcmV0dXJuICh5PjApP3RoaXMuRFYteToteTtcbiAgICB9XG5cbiAgICAvLyBNb250Z29tZXJ5IHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIE1vbnRnb21lcnkobSkge1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICB0aGlzLm1wbCA9IHRoaXMubXAmMHg3ZmZmO1xuICAgICAgdGhpcy5tcGggPSB0aGlzLm1wPj4xNTtcbiAgICAgIHRoaXMudW0gPSAoMTw8KG0uREItMTUpKS0xO1xuICAgICAgdGhpcy5tdDIgPSAyKm0udDtcbiAgICB9XG5cbiAgICAvLyB4UiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRDb252ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKTtcbiAgICAgIHIuZGl2UmVtVG8odGhpcy5tLG51bGwscik7XG4gICAgICBpZih4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB0aGlzLm0uc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHgvUiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRSZXZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguY29weVRvKHIpO1xuICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4ID0geC9SIG1vZCBtIChIQUMgMTQuMzIpXG4gICAgZnVuY3Rpb24gbW9udFJlZHVjZSh4KSB7XG4gICAgICB3aGlsZSh4LnQgPD0gdGhpcy5tdDIpIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICB4W3gudCsrXSA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAvLyBmYXN0ZXIgd2F5IG9mIGNhbGN1bGF0aW5nIHUwID0geFtpXSptcCBtb2QgRFZcbiAgICAgICAgdmFyIGogPSB4W2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIHUwID0gKGoqdGhpcy5tcGwrKCgoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsKSZ0aGlzLnVtKTw8MTUpKSZ4LkRNO1xuICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgaiA9IGkrdGhpcy5tLnQ7XG4gICAgICAgIHhbal0gKz0gdGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO1xuICAgICAgICAvLyBwcm9wYWdhdGUgY2FycnlcbiAgICAgICAgd2hpbGUoeFtqXSA+PSB4LkRWKSB7IHhbal0gLT0geC5EVjsgeFsrK2pdKys7IH1cbiAgICAgIH1cbiAgICAgIHguY2xhbXAoKTtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LHgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBtb250U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgZnVuY3Rpb24gbW9udE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydCA9IG1vbnRDb252ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlID0gbW9udFJlZHVjZTtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIGZ1bmN0aW9uIGJucElzRXZlbigpIHsgcmV0dXJuICgodGhpcy50PjApPyh0aGlzWzBdJjEpOnRoaXMucykgPT0gMDsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpc15lLCBlIDwgMl4zMiwgZG9pbmcgc3FyIGFuZCBtdWwgd2l0aCBcInJcIiAoSEFDIDE0Ljc5KVxuICAgIGZ1bmN0aW9uIGJucEV4cChlLHopIHtcbiAgICAgIGlmKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICB2YXIgciA9IG5iaSgpLCByMiA9IG5iaSgpLCBnID0gei5jb252ZXJ0KHRoaXMpLCBpID0gbmJpdHMoZSktMTtcbiAgICAgIGcuY29weVRvKHIpO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgei5zcXJUbyhyLHIyKTtcbiAgICAgICAgaWYoKGUmKDE8PGkpKSA+IDApIHoubXVsVG8ocjIsZyxyKTtcbiAgICAgICAgZWxzZSB7IHZhciB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3dJbnQoZSxtKSB7XG4gICAgICB2YXIgejtcbiAgICAgIGlmKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkgeiA9IG5ldyBDbGFzc2ljKG0pOyBlbHNlIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cChlLHopO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvcHlUbyA9IGJucENvcHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50ID0gYm5wRnJvbUludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGFtcCA9IGJucENsYW1wO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbyA9IGJucERMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kclNoaWZ0VG8gPSBibnBEUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG8gPSBibnBMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbyA9IGJucFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvID0gYm5wU3ViVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBibnBTcXVhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGJucERpdlJlbVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gYm5Ub1N0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBibkNvbXBhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcblxuICAgIC8vIFwiY29uc3RhbnRzXCJcbiAgICBCaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG4gICAgQmlnSW50ZWdlci5PTkUgPSBuYnYoMSk7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUtMjAwOSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBFeHRlbmRlZCBKYXZhU2NyaXB0IEJOIGZ1bmN0aW9ucywgcmVxdWlyZWQgZm9yIFJTQSBwcml2YXRlIG9wcy5cblxuICAgIC8vIFZlcnNpb24gMS4xOiBuZXcgQmlnSW50ZWdlcihcIjBcIiwgMTApIHJldHVybnMgXCJwcm9wZXJcIiB6ZXJvXG4gICAgLy8gVmVyc2lvbiAxLjI6IHNxdWFyZSgpIEFQSSwgaXNQcm9iYWJsZVByaW1lIGZpeFxuXG4gICAgLy8gKHB1YmxpYylcbiAgICBmdW5jdGlvbiBibkNsb25lKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmNvcHlUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgZnVuY3Rpb24gYm5JbnRWYWx1ZSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHtcbiAgICAgICAgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdLXRoaXMuRFY7XG4gICAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPCAzMlxuICAgICAgcmV0dXJuICgodGhpc1sxXSYoKDE8PCgzMi10aGlzLkRCKSktMSkpPDx0aGlzLkRCKXx0aGlzWzBdO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgZnVuY3Rpb24gYm5CeXRlVmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDI0KT4+MjQ7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBzaG9ydCAoYXNzdW1lcyBEQj49MTYpXG4gICAgZnVuY3Rpb24gYm5TaG9ydFZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwxNik+PjE2OyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgZnVuY3Rpb24gYm5wQ2h1bmtTaXplKHIpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSk7IH1cblxuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgZnVuY3Rpb24gYm5TaWdOdW0oKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gLTE7XG4gICAgICBlbHNlIGlmKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSByZXR1cm4gMDtcbiAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBUb1JhZGl4KGIpIHtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgaWYodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikgcmV0dXJuIFwiMFwiO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgYSA9IE1hdGgucG93KGIsY3MpO1xuICAgICAgdmFyIGQgPSBuYnYoYSksIHkgPSBuYmkoKSwgeiA9IG5iaSgpLCByID0gXCJcIjtcbiAgICAgIHRoaXMuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgd2hpbGUoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgciA9IChhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgeS5kaXZSZW1UbyhkLHkseik7XG4gICAgICB9XG4gICAgICByZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpICsgcjtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IGZyb20gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wRnJvbVJhZGl4KHMsYikge1xuICAgICAgdGhpcy5mcm9tSW50KDApO1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBkID0gTWF0aC5wb3coYixjcyksIG1pID0gZmFsc2UsIGogPSAwLCB3ID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB4ID0gaW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIiAmJiB0aGlzLnNpZ251bSgpID09IDApIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gYip3K3g7XG4gICAgICAgIGlmKCsraiA+PSBjcykge1xuICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIHcgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihqID4gMCkge1xuICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKTtcbiAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICB9XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gYm5wRnJvbU51bWJlcihhLGIsYykge1xuICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgaWYoYSA8IDIpIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsYyk7XG4gICAgICAgICAgaWYoIXRoaXMudGVzdEJpdChhLTEpKSAgICAvLyBmb3JjZSBNU0Igc2V0XG4gICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKTtcbiAgICAgICAgICBpZih0aGlzLmlzRXZlbigpKSB0aGlzLmRBZGRPZmZzZXQoMSwwKTsgLy8gZm9yY2Ugb2RkXG4gICAgICAgICAgd2hpbGUoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMiwwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxSTkcpXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KCksIHQgPSBhJjc7XG4gICAgICAgIHgubGVuZ3RoID0gKGE+PjMpKzE7XG4gICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICBpZih0ID4gMCkgeFswXSAmPSAoKDE8PHQpLTEpOyBlbHNlIHhbMF0gPSAwO1xuICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwyNTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGNvbnZlcnQgdG8gYmlnZW5kaWFuIGJ5dGUgYXJyYXlcbiAgICBmdW5jdGlvbiBiblRvQnl0ZUFycmF5KCkge1xuICAgICAgdmFyIGkgPSB0aGlzLnQsIHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJbMF0gPSB0aGlzLnM7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklOCwgZCwgayA9IDA7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgIT0gKHRoaXMucyZ0aGlzLkRNKT4+cClcbiAgICAgICAgICByW2srK10gPSBkfCh0aGlzLnM8PCh0aGlzLkRCLXApKTtcbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IDgpIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KDgtcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09OCkpJjB4ZmY7XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKGQmMHg4MCkgIT0gMCkgZCB8PSAtMjU2O1xuICAgICAgICAgIGlmKGsgPT0gMCAmJiAodGhpcy5zJjB4ODApICE9IChkJjB4ODApKSArK2s7XG4gICAgICAgICAgaWYoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHJbaysrXSA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJuRXF1YWxzKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPT0wKTsgfVxuICAgIGZ1bmN0aW9uIGJuTWluKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPDApP3RoaXM6YTsgfVxuICAgIGZ1bmN0aW9uIGJuTWF4KGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPjApP3RoaXM6YTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBmdW5jdGlvbiBibnBCaXR3aXNlVG8oYSxvcCxyKSB7XG4gICAgICB2YXIgaSwgZiwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbTsgKytpKSByW2ldID0gb3AodGhpc1tpXSxhW2ldKTtcbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBmID0gYS5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gb3AodGhpc1tpXSxmKTtcbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGYgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgYS50OyArK2kpIHJbaV0gPSBvcChmLGFbaV0pO1xuICAgICAgICByLnQgPSBhLnQ7XG4gICAgICB9XG4gICAgICByLnMgPSBvcCh0aGlzLnMsYS5zKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgYVxuICAgIGZ1bmN0aW9uIG9wX2FuZCh4LHkpIHsgcmV0dXJuIHgmeTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgYVxuICAgIGZ1bmN0aW9uIG9wX29yKHgseSkgeyByZXR1cm4geHx5OyB9XG4gICAgZnVuY3Rpb24gYm5PcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gYVxuICAgIGZ1bmN0aW9uIG9wX3hvcih4LHkpIHsgcmV0dXJuIHheeTsgfVxuICAgIGZ1bmN0aW9uIGJuWG9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF94b3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfmFcbiAgICBmdW5jdGlvbiBvcF9hbmRub3QoeCx5KSB7IHJldHVybiB4Jn55OyB9XG4gICAgZnVuY3Rpb24gYm5BbmROb3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZG5vdCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIH50aGlzXG4gICAgZnVuY3Rpb24gYm5Ob3QoKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gdGhpcy5ETSZ+dGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0TGVmdChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMuclNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5sU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdFJpZ2h0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5sU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLnJTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaW5kZXggb2YgbG93ZXN0IDEtYml0IGluIHgsIHggPCAyXjMxXG4gICAgZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgICBpZih4ID09IDApIHJldHVybiAtMTtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIGlmKCh4JjB4ZmZmZikgPT0gMCkgeyB4ID4+PSAxNjsgciArPSAxNjsgfVxuICAgICAgaWYoKHgmMHhmZikgPT0gMCkgeyB4ID4+PSA4OyByICs9IDg7IH1cbiAgICAgIGlmKCh4JjB4ZikgPT0gMCkgeyB4ID4+PSA0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh4JjMpID09IDApIHsgeCA+Pj0gMjsgciArPSAyOyB9XG4gICAgICBpZigoeCYxKSA9PSAwKSArK3I7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBmdW5jdGlvbiBibkdldExvd2VzdFNldEJpdCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSlcbiAgICAgICAgaWYodGhpc1tpXSAhPSAwKSByZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gdGhpcy50KnRoaXMuREI7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuICAgIGZ1bmN0aW9uIGNiaXQoeCkge1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgd2hpbGUoeCAhPSAwKSB7IHggJj0geC0xOyArK3I7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBudW1iZXIgb2Ygc2V0IGJpdHNcbiAgICBmdW5jdGlvbiBibkJpdENvdW50KCkge1xuICAgICAgdmFyIHIgPSAwLCB4ID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHIgKz0gY2JpdCh0aGlzW2ldXngpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBmdW5jdGlvbiBiblRlc3RCaXQobikge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihqID49IHRoaXMudCkgcmV0dXJuKHRoaXMucyE9MCk7XG4gICAgICByZXR1cm4oKHRoaXNbal0mKDE8PChuJXRoaXMuREIpKSkhPTApO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgb3AgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5wQ2hhbmdlQml0KG4sb3ApIHtcbiAgICAgIHZhciByID0gQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO1xuICAgICAgdGhpcy5iaXR3aXNlVG8ocixvcCxyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCAoMTw8bilcbiAgICBmdW5jdGlvbiBiblNldEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX29yKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBmdW5jdGlvbiBibkNsZWFyQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfYW5kbm90KTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuRmxpcEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcik7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJucEFkZFRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldK2FbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjICs9IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgKz0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIGVsc2UgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5BZGQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmFkZFRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJuU3VidHJhY3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnN1YlRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIGZ1bmN0aW9uIGJuTXVsdGlwbHkoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLm11bHRpcGx5VG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeMlxuICAgIGZ1bmN0aW9uIGJuU3F1YXJlKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnNxdWFyZVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAvIGFcbiAgICBmdW5jdGlvbiBibkRpdmlkZShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxyLG51bGwpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBmdW5jdGlvbiBiblJlbWFpbmRlcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgZnVuY3Rpb24gYm5EaXZpZGVBbmRSZW1haW5kZXIoYSkge1xuICAgICAgdmFyIHEgPSBuYmkoKSwgciA9IG5iaSgpO1xuICAgICAgdGhpcy5kaXZSZW1UbyhhLHEscik7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KHEscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBmdW5jdGlvbiBibnBETXVsdGlwbHkobikge1xuICAgICAgdGhpc1t0aGlzLnRdID0gdGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpO1xuICAgICAgKyt0aGlzLnQ7XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIGZ1bmN0aW9uIGJucERBZGRPZmZzZXQobix3KSB7XG4gICAgICBpZihuID09IDApIHJldHVybjtcbiAgICAgIHdoaWxlKHRoaXMudCA8PSB3KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICB0aGlzW3ddICs9IG47XG4gICAgICB3aGlsZSh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgdGhpc1t3XSAtPSB0aGlzLkRWO1xuICAgICAgICBpZigrK3cgPj0gdGhpcy50KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgICsrdGhpc1t3XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBIFwibnVsbFwiIHJlZHVjZXJcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge31cbiAgICBmdW5jdGlvbiBuTm9wKHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBuTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IH1cbiAgICBmdW5jdGlvbiBuU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IH1cblxuICAgIE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBmdW5jdGlvbiBiblBvdyhlKSB7IHJldHVybiB0aGlzLmV4cChlLG5ldyBOdWxsRXhwKCkpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gbG93ZXIgbiB3b3JkcyBvZiBcInRoaXMgKiBhXCIsIGEudCA8PSBuXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5TG93ZXJUbyhhLG4scikge1xuICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQrYS50LG4pO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgci50ID0gaTtcbiAgICAgIHdoaWxlKGkgPiAwKSByWy0taV0gPSAwO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IoaiA9IHIudC10aGlzLnQ7IGkgPCBqOyArK2kpIHJbaSt0aGlzLnRdID0gdGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtcbiAgICAgIGZvcihqID0gTWF0aC5taW4oYS50LG4pOyBpIDwgajsgKytpKSB0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBcInRoaXMgKiBhXCIgd2l0aG91dCBsb3dlciBuIHdvcmRzLCBuID4gMFxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVVwcGVyVG8oYSxuLHIpIHtcbiAgICAgIC0tbjtcbiAgICAgIHZhciBpID0gci50ID0gdGhpcy50K2EudC1uO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSBNYXRoLm1heChuLXRoaXMudCwwKTsgaSA8IGEudDsgKytpKVxuICAgICAgICByW3RoaXMudCtpLW5dID0gdGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIHIuZHJTaGlmdFRvKDEscik7XG4gICAgfVxuXG4gICAgLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIEJhcnJldHQobSkge1xuICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgdGhpcy5xMyA9IG5iaSgpO1xuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpO1xuICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0Q29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHgudCA+IDIqdGhpcy5tLnQpIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSBpZih4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkgcmV0dXJuIHg7XG4gICAgICBlbHNlIHsgdmFyIHIgPSBuYmkoKTsgeC5jb3B5VG8ocik7IHRoaXMucmVkdWNlKHIpOyByZXR1cm4gcjsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuXG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBmdW5jdGlvbiBiYXJyZXR0UmVkdWNlKHgpIHtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMik7XG4gICAgICBpZih4LnQgPiB0aGlzLm0udCsxKSB7IHgudCA9IHRoaXMubS50KzE7IHguY2xhbXAoKTsgfVxuICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpO1xuICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLHRoaXMubS50KzEsdGhpcy5yMik7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO1xuICAgICAgeC5zdWJUbyh0aGlzLnIyLHgpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0geCp5IG1vZCBtOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3coZSxtKSB7XG4gICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCksIGssIHIgPSBuYnYoMSksIHo7XG4gICAgICBpZihpIDw9IDApIHJldHVybiByO1xuICAgICAgZWxzZSBpZihpIDwgMTgpIGsgPSAxO1xuICAgICAgZWxzZSBpZihpIDwgNDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihpIDwgMTQ0KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoaSA8IDc2OCkgayA9IDU7XG4gICAgICBlbHNlIGsgPSA2O1xuICAgICAgaWYoaSA8IDgpXG4gICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgIGVsc2UgaWYobS5pc0V2ZW4oKSlcbiAgICAgICAgeiA9IG5ldyBCYXJyZXR0KG0pO1xuICAgICAgZWxzZVxuICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG5cbiAgICAgIC8vIHByZWNvbXB1dGF0aW9uXG4gICAgICB2YXIgZyA9IG5ldyBBcnJheSgpLCBuID0gMywgazEgPSBrLTEsIGttID0gKDE8PGspLTE7XG4gICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYoayA+IDEpIHtcbiAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgIHouc3FyVG8oZ1sxXSxnMik7XG4gICAgICAgIHdoaWxlKG4gPD0ga20pIHtcbiAgICAgICAgICBnW25dID0gbmJpKCk7XG4gICAgICAgICAgei5tdWxUbyhnMixnW24tMl0sZ1tuXSk7XG4gICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBqID0gZS50LTEsIHcsIGlzMSA9IHRydWUsIHIyID0gbmJpKCksIHQ7XG4gICAgICBpID0gbmJpdHMoZVtqXSktMTtcbiAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBpZihpID49IGsxKSB3ID0gKGVbal0+PihpLWsxKSkma207XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHcgPSAoZVtqXSYoKDE8PChpKzEpKS0xKSk8PChrMS1pKTtcbiAgICAgICAgICBpZihqID4gMCkgdyB8PSBlW2otMV0+Pih0aGlzLkRCK2ktazEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbiA9IGs7XG4gICAgICAgIHdoaWxlKCh3JjEpID09IDApIHsgdyA+Pj0gMTsgLS1uOyB9XG4gICAgICAgIGlmKChpIC09IG4pIDwgMCkgeyBpICs9IHRoaXMuREI7IC0tajsgfVxuICAgICAgICBpZihpczEpIHsgICAgLy8gcmV0ID09IDEsIGRvbid0IGJvdGhlciBzcXVhcmluZyBvciBtdWx0aXBseWluZyBpdFxuICAgICAgICAgIGdbd10uY29weVRvKHIpO1xuICAgICAgICAgIGlzMSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdoaWxlKG4gPiAxKSB7IHouc3FyVG8ocixyMik7IHouc3FyVG8ocjIscik7IG4gLT0gMjsgfVxuICAgICAgICAgIGlmKG4gPiAwKSB6LnNxclRvKHIscjIpOyBlbHNlIHsgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICAgICAgei5tdWxUbyhyMixnW3ddLHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUoaiA+PSAwICYmIChlW2pdJigxPDxpKSkgPT0gMCkge1xuICAgICAgICAgIHouc3FyVG8ocixyMik7IHQgPSByOyByID0gcjI7IHIyID0gdDtcbiAgICAgICAgICBpZigtLWkgPCAwKSB7IGkgPSB0aGlzLkRCLTE7IC0tajsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgZ2NkKHRoaXMsYSkgKEhBQyAxNC41NClcbiAgICBmdW5jdGlvbiBibkdDRChhKSB7XG4gICAgICB2YXIgeCA9ICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgeSA9IChhLnM8MCk/YS5uZWdhdGUoKTphLmNsb25lKCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh5KSA8IDApIHsgdmFyIHQgPSB4OyB4ID0geTsgeSA9IHQ7IH1cbiAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKSwgZyA9IHkuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihnIDwgMCkgcmV0dXJuIHg7XG4gICAgICBpZihpIDwgZykgZyA9IGk7XG4gICAgICBpZihnID4gMCkge1xuICAgICAgICB4LnJTaGlmdFRvKGcseCk7XG4gICAgICAgIHkuclNoaWZ0VG8oZyx5KTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKHguc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIGlmKChpID0geC5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB4LnJTaGlmdFRvKGkseCk7XG4gICAgICAgIGlmKChpID0geS5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB5LnJTaGlmdFRvKGkseSk7XG4gICAgICAgIGlmKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICB4LnN1YlRvKHkseCk7XG4gICAgICAgICAgeC5yU2hpZnRUbygxLHgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHkuc3ViVG8oeCx5KTtcbiAgICAgICAgICB5LnJTaGlmdFRvKDEseSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGcgPiAwKSB5LmxTaGlmdFRvKGcseSk7XG4gICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICUgbiwgbiA8IDJeMjZcbiAgICBmdW5jdGlvbiBibnBNb2RJbnQobikge1xuICAgICAgaWYobiA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciBkID0gdGhpcy5EViVuLCByID0gKHRoaXMuczwwKT9uLTE6MDtcbiAgICAgIGlmKHRoaXMudCA+IDApXG4gICAgICAgIGlmKGQgPT0gMCkgciA9IHRoaXNbMF0lbjtcbiAgICAgICAgZWxzZSBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHIgPSAoZCpyK3RoaXNbaV0pJW47XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAxL3RoaXMgJSBtIChIQUMgMTQuNjEpXG4gICAgZnVuY3Rpb24gYm5Nb2RJbnZlcnNlKG0pIHtcbiAgICAgIHZhciBhYyA9IG0uaXNFdmVuKCk7XG4gICAgICBpZigodGhpcy5pc0V2ZW4oKSAmJiBhYykgfHwgbS5zaWdudW0oKSA9PSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgdmFyIHUgPSBtLmNsb25lKCksIHYgPSB0aGlzLmNsb25lKCk7XG4gICAgICB2YXIgYSA9IG5idigxKSwgYiA9IG5idigwKSwgYyA9IG5idigwKSwgZCA9IG5idigxKTtcbiAgICAgIHdoaWxlKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICB3aGlsZSh1LmlzRXZlbigpKSB7XG4gICAgICAgICAgdS5yU2hpZnRUbygxLHUpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYS5pc0V2ZW4oKSB8fCAhYi5pc0V2ZW4oKSkgeyBhLmFkZFRvKHRoaXMsYSk7IGIuc3ViVG8obSxiKTsgfVxuICAgICAgICAgICAgYS5yU2hpZnRUbygxLGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFiLmlzRXZlbigpKSBiLnN1YlRvKG0sYik7XG4gICAgICAgICAgYi5yU2hpZnRUbygxLGIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHYuaXNFdmVuKCkpIHtcbiAgICAgICAgICB2LnJTaGlmdFRvKDEsdik7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFjLmlzRXZlbigpIHx8ICFkLmlzRXZlbigpKSB7IGMuYWRkVG8odGhpcyxjKTsgZC5zdWJUbyhtLGQpOyB9XG4gICAgICAgICAgICBjLnJTaGlmdFRvKDEsYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWQuaXNFdmVuKCkpIGQuc3ViVG8obSxkKTtcbiAgICAgICAgICBkLnJTaGlmdFRvKDEsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodS5jb21wYXJlVG8odikgPj0gMCkge1xuICAgICAgICAgIHUuc3ViVG8odix1KTtcbiAgICAgICAgICBpZihhYykgYS5zdWJUbyhjLGEpO1xuICAgICAgICAgIGIuc3ViVG8oZCxiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2LnN1YlRvKHUsdik7XG4gICAgICAgICAgaWYoYWMpIGMuc3ViVG8oYSxjKTtcbiAgICAgICAgICBkLnN1YlRvKGIsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgaWYoZC5jb21wYXJlVG8obSkgPj0gMCkgcmV0dXJuIGQuc3VidHJhY3QobSk7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgZC5hZGRUbyhtLGQpOyBlbHNlIHJldHVybiBkO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIHJldHVybiBkLmFkZChtKTsgZWxzZSByZXR1cm4gZDtcbiAgICB9XG5cbiAgICB2YXIgbG93cHJpbWVzID0gWzIsMyw1LDcsMTEsMTMsMTcsMTksMjMsMjksMzEsMzcsNDEsNDMsNDcsNTMsNTksNjEsNjcsNzEsNzMsNzksODMsODksOTcsMTAxLDEwMywxMDcsMTA5LDExMywxMjcsMTMxLDEzNywxMzksMTQ5LDE1MSwxNTcsMTYzLDE2NywxNzMsMTc5LDE4MSwxOTEsMTkzLDE5NywxOTksMjExLDIyMywyMjcsMjI5LDIzMywyMzksMjQxLDI1MSwyNTcsMjYzLDI2OSwyNzEsMjc3LDI4MSwyODMsMjkzLDMwNywzMTEsMzEzLDMxNywzMzEsMzM3LDM0NywzNDksMzUzLDM1OSwzNjcsMzczLDM3OSwzODMsMzg5LDM5Nyw0MDEsNDA5LDQxOSw0MjEsNDMxLDQzMyw0MzksNDQzLDQ0OSw0NTcsNDYxLDQ2Myw0NjcsNDc5LDQ4Nyw0OTEsNDk5LDUwMyw1MDksNTIxLDUyMyw1NDEsNTQ3LDU1Nyw1NjMsNTY5LDU3MSw1NzcsNTg3LDU5Myw1OTksNjAxLDYwNyw2MTMsNjE3LDYxOSw2MzEsNjQxLDY0Myw2NDcsNjUzLDY1OSw2NjEsNjczLDY3Nyw2ODMsNjkxLDcwMSw3MDksNzE5LDcyNyw3MzMsNzM5LDc0Myw3NTEsNzU3LDc2MSw3NjksNzczLDc4Nyw3OTcsODA5LDgxMSw4MjEsODIzLDgyNyw4MjksODM5LDg1Myw4NTcsODU5LDg2Myw4NzcsODgxLDg4Myw4ODcsOTA3LDkxMSw5MTksOTI5LDkzNyw5NDEsOTQ3LDk1Myw5NjcsOTcxLDk3Nyw5ODMsOTkxLDk5N107XG4gICAgdmFyIGxwbGltID0gKDE8PDI2KS9sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXTtcblxuICAgIC8vIChwdWJsaWMpIHRlc3QgcHJpbWFsaXR5IHdpdGggY2VydGFpbnR5ID49IDEtLjVedFxuICAgIGZ1bmN0aW9uIGJuSXNQcm9iYWJsZVByaW1lKHQpIHtcbiAgICAgIHZhciBpLCB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV0pIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbG93cHJpbWVzLmxlbmd0aDsgKytpKVxuICAgICAgICAgIGlmKHhbMF0gPT0gbG93cHJpbWVzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoeC5pc0V2ZW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaSA9IDE7XG4gICAgICB3aGlsZShpIDwgbG93cHJpbWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXSwgaiA9IGkrMTtcbiAgICAgICAgd2hpbGUoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSBtICo9IGxvd3ByaW1lc1tqKytdO1xuICAgICAgICBtID0geC5tb2RJbnQobSk7XG4gICAgICAgIHdoaWxlKGkgPCBqKSBpZihtJWxvd3ByaW1lc1tpKytdID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWYgcHJvYmFibHkgcHJpbWUgKEhBQyA0LjI0LCBNaWxsZXItUmFiaW4pXG4gICAgZnVuY3Rpb24gYm5wTWlsbGVyUmFiaW4odCkge1xuICAgICAgdmFyIG4xID0gdGhpcy5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICB2YXIgayA9IG4xLmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoayA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgciA9IG4xLnNoaWZ0UmlnaHQoayk7XG4gICAgICB0ID0gKHQrMSk+PjE7XG4gICAgICBpZih0ID4gbG93cHJpbWVzLmxlbmd0aCkgdCA9IGxvd3ByaW1lcy5sZW5ndGg7XG4gICAgICB2YXIgYSA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHQ7ICsraSkge1xuICAgICAgICAvL1BpY2sgYmFzZXMgYXQgcmFuZG9tLCBpbnN0ZWFkIG9mIHN0YXJ0aW5nIGF0IDJcbiAgICAgICAgYS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbG93cHJpbWVzLmxlbmd0aCldKTtcbiAgICAgICAgdmFyIHkgPSBhLm1vZFBvdyhyLHRoaXMpO1xuICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgICB3aGlsZShqKysgPCBrICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICB5ID0geS5tb2RQb3dJbnQoMix0aGlzKTtcbiAgICAgICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHkuY29tcGFyZVRvKG4xKSAhPSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGJucENodW5rU2l6ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4ID0gYm5wVG9SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBibnBGcm9tUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGJucEZyb21OdW1iZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0d2lzZVRvID0gYm5wQml0d2lzZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGJucENoYW5nZUJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbyA9IGJucEFkZFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGJucERNdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kQWRkT2Zmc2V0ID0gYm5wREFkZE9mZnNldDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBibnBNdWx0aXBseUxvd2VyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvID0gYm5wTXVsdGlwbHlVcHBlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGJucE1vZEludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGJucE1pbGxlclJhYmluO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xvbmUgPSBibkNsb25lO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludFZhbHVlID0gYm5JbnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ieXRlVmFsdWUgPSBibkJ5dGVWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlID0gYm5TaG9ydFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNpZ251bSA9IGJuU2lnTnVtO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gYm5Ub0J5dGVBcnJheTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBibkVxdWFscztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW4gPSBibk1pbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBibk1heDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBibkFuZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGJuT3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gYm5Yb3I7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gYm5BbmROb3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gYm5Ob3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gYm5TaGlmdExlZnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGJuU2hpZnRSaWdodDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBibkdldExvd2VzdFNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudCA9IGJuQml0Q291bnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGVzdEJpdCA9IGJuVGVzdEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQgPSBiblNldEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGJuQ2xlYXJCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGJuRmxpcEJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBibkFkZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGJuU3VidHJhY3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBibk11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGJuRGl2aWRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IGJuUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGJuRGl2aWRlQW5kUmVtYWluZGVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGJuTW9kUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludmVyc2UgPSBibk1vZEludmVyc2U7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gYm5Qb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2NkID0gYm5HQ0Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG5cbiAgICAvLyBKU0JOLXNwZWNpZmljIGV4dGVuc2lvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGJuU3F1YXJlO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBCYXJyZXR0IGZ1bmN0aW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuQmFycmV0dCA9IEJhcnJldHRcblxuICAgIC8vIEJpZ0ludGVnZXIgaW50ZXJmYWNlcyBub3QgaW1wbGVtZW50ZWQgaW4ganNibjpcblxuICAgIC8vIEJpZ0ludGVnZXIoaW50IHNpZ251bSwgYnl0ZVtdIG1hZ25pdHVkZSlcbiAgICAvLyBkb3VibGUgZG91YmxlVmFsdWUoKVxuICAgIC8vIGZsb2F0IGZsb2F0VmFsdWUoKVxuICAgIC8vIGludCBoYXNoQ29kZSgpXG4gICAgLy8gbG9uZyBsb25nVmFsdWUoKVxuICAgIC8vIHN0YXRpYyBCaWdJbnRlZ2VyIHZhbHVlT2YobG9uZyB2YWwpXG5cbiAgICAvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG5cbiAgICAvLyBGb3IgYmVzdCByZXN1bHRzLCBwdXQgY29kZSBsaWtlXG4gICAgLy8gPGJvZHkgb25DbGljaz0ncm5nX3NlZWRfdGltZSgpOycgb25LZXlQcmVzcz0ncm5nX3NlZWRfdGltZSgpOyc+XG4gICAgLy8gaW4geW91ciBtYWluIEhUTUwgZG9jdW1lbnQuXG5cbiAgICB2YXIgcm5nX3N0YXRlO1xuICAgIHZhciBybmdfcG9vbDtcbiAgICB2YXIgcm5nX3BwdHI7XG5cbiAgICAvLyBNaXggaW4gYSAzMi1iaXQgaW50ZWdlciBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfaW50KHgpIHtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49IHggJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiA4KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDE2KSAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDI0KSAmIDI1NTtcbiAgICAgIGlmKHJuZ19wcHRyID49IHJuZ19wc2l6ZSkgcm5nX3BwdHIgLT0gcm5nX3BzaXplO1xuICAgIH1cblxuICAgIC8vIE1peCBpbiB0aGUgY3VycmVudCB0aW1lICh3L21pbGxpc2Vjb25kcykgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKSB7XG4gICAgICBybmdfc2VlZF9pbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cbiAgICBpZihybmdfcG9vbCA9PSBudWxsKSB7XG4gICAgICBybmdfcG9vbCA9IG5ldyBBcnJheSgpO1xuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgdmFyIHQ7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jcnlwdG8pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgLy8gVXNlIHdlYmNyeXB0byBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgdWEgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgICAgICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXModWEpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IDMyOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHVhW3RdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJOZXRzY2FwZVwiICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uIDwgXCI1XCIpIHtcbiAgICAgICAgICAvLyBFeHRyYWN0IGVudHJvcHkgKDI1NiBiaXRzKSBmcm9tIE5TNCBSTkcgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHogPSB3aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgei5sZW5ndGg7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gei5jaGFyQ29kZUF0KHQpICYgMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZShybmdfcHB0ciA8IHJuZ19wc2l6ZSkgeyAgLy8gZXh0cmFjdCBzb21lIHJhbmRvbW5lc3MgZnJvbSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIHQgPSBNYXRoLmZsb29yKDY1NTM2ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCA+Pj4gODtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ICYgMjU1O1xuICAgICAgfVxuICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblgpO1xuICAgICAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcbiAgICAgIGlmKHJuZ19zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgICAgcm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuICAgICAgICBybmdfc3RhdGUuaW5pdChybmdfcG9vbCk7XG4gICAgICAgIGZvcihybmdfcHB0ciA9IDA7IHJuZ19wcHRyIDwgcm5nX3Bvb2wubGVuZ3RoOyArK3JuZ19wcHRyKVxuICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG4gICAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgICAgLy9ybmdfcG9vbCA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuICAgICAgcmV0dXJuIHJuZ19zdGF0ZS5uZXh0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlcyhiYSkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBiYS5sZW5ndGg7ICsraSkgYmFbaV0gPSBybmdfZ2V0X2J5dGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7fVxuXG4gICAgU2VjdXJlUmFuZG9tLnByb3RvdHlwZS5uZXh0Qnl0ZXMgPSBybmdfZ2V0X2J5dGVzO1xuXG4gICAgLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG5cbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgICB0aGlzLlMgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFyY2ZvdXIgY29udGV4dCBmcm9tIGtleSwgYW4gYXJyYXkgb2YgaW50cywgZWFjaCBmcm9tIFswLi4yNTVdXG4gICAgZnVuY3Rpb24gQVJDNGluaXQoa2V5KSB7XG4gICAgICB2YXIgaSwgaiwgdDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKVxuICAgICAgICB0aGlzLlNbaV0gPSBpO1xuICAgICAgaiA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBqID0gKGogKyB0aGlzLlNbaV0gKyBrZXlbaSAlIGtleS5sZW5ndGhdKSAmIDI1NTtcbiAgICAgICAgdCA9IHRoaXMuU1tpXTtcbiAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICB0aGlzLlNbal0gPSB0O1xuICAgICAgfVxuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuaiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQVJDNG5leHQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMuaSA9ICh0aGlzLmkgKyAxKSAmIDI1NTtcbiAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICB0ID0gdGhpcy5TW3RoaXMuaV07XG4gICAgICB0aGlzLlNbdGhpcy5pXSA9IHRoaXMuU1t0aGlzLmpdO1xuICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgcmV0dXJuIHRoaXMuU1sodCArIHRoaXMuU1t0aGlzLmldKSAmIDI1NV07XG4gICAgfVxuXG4gICAgQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBBUkM0bmV4dDtcblxuICAgIC8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuICAgIGZ1bmN0aW9uIHBybmdfbmV3c3RhdGUoKSB7XG4gICAgICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcbiAgICB9XG5cbiAgICAvLyBQb29sIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQgYW5kIGdyZWF0ZXIgdGhhbiAzMi5cbiAgICAvLyBBbiBhcnJheSBvZiBieXRlcyB0aGUgc2l6ZSBvZiB0aGUgcG9vbCB3aWxsIGJlIHBhc3NlZCB0byBpbml0KClcbiAgICB2YXIgcm5nX3BzaXplID0gMjU2O1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuanNibiA9IHtcbiAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgIFNlY3VyZVJhbmRvbTogU2VjdXJlUmFuZG9tXG4gICAgICAgIH07XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL1RpbWVyLmpzXCI7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcbiAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJpbmdcIiksXG4gICAgYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJlZFwiKSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPVxuICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG5cbiAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nID0gYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyO1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZCA9IGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyO1xuICB9XG5cbiAgbG9hZChjb250YWluZXIpIHtcbiAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiBhbmQgaXQgaGFzIGFuIGV4cGlyYXRpb25cbiAgICBpZiAoY29udGFpbmVyLmFjY2Vzc190b2tlbiAmJiBjb250YWluZXIuZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgZHVyYXRpb24gPSBjb250YWluZXIuZXhwaXJlc19pbjtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBhY2Nlc3MgdG9rZW4gcHJlc2VudCwgcmVtYWluaW5nIGR1cmF0aW9uOlwiLFxuICAgICAgICBkdXJhdGlvblxuICAgICAgKTtcblxuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV4cGlyaW5nIGlmIHdlIHN0aWxsIGhhdmUgdGltZVxuICAgICAgICBsZXQgZXhwaXJpbmcgPSBkdXJhdGlvbiAtIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgICAgICBpZiAoZXhwaXJpbmcgPD0gMCkge1xuICAgICAgICAgIGV4cGlyaW5nID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyaW5nIHRpbWVyIGluOlwiLFxuICAgICAgICAgIGV4cGlyaW5nXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuaW5pdChleHBpcmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBjYW5jZWxpbmcgZXhpc3RpbmcgZXhwaXJpbmcgdGltZXIgYmVjYXNlIHdlJ3JlIHBhc3QgZXhwaXJhdGlvbi5cIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcbiAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyZWQgdGltZXIgaW46XCIsXG4gICAgICAgIGV4cGlyZWRcbiAgICAgICk7XG4gICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcbiAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJBY2Nlc3NUb2tlbkV2ZW50cy51bmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBhY2Nlc3MgdG9rZW4gdGltZXJzXCJcbiAgICApO1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xuICB9XG5cbiAgYWRkQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuYWRkSGFuZGxlcihjYik7XG4gIH1cbiAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcucmVtb3ZlSGFuZGxlcihjYik7XG4gIH1cblxuICBhZGRBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcbiAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuYWRkSGFuZGxlcihjYik7XG4gIH1cbiAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGNsYXNzIENoZWNrU2Vzc2lvbklGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yID0gdHJ1ZSkge1xuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcbiAgICB0aGlzLl9zdG9wT25FcnJvciA9IHN0b3BPbkVycm9yO1xuXG4gICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCB1cmwuaW5kZXhPZihcIi8vXCIpICsgMik7XG4gICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgIC8vIHNob3RndW4gYXBwcm9hY2hcbiAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5fZnJhbWUud2lkdGggPSAwO1xuICAgIHRoaXMuX2ZyYW1lLmhlaWdodCA9IDA7XG5cbiAgICB0aGlzLl9mcmFtZS5zcmMgPSB1cmw7XG4gIH1cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2ZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xuICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuICBfbWVzc2FnZShlKSB7XG4gICAgaWYgKFxuICAgICAgZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxuICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICApIHtcbiAgICAgIGlmIChlLmRhdGEgPT09IFwiZXJyb3JcIikge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJDaGVja1Nlc3Npb25JRnJhbWU6IGVycm9yIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLl9zdG9wT25FcnJvcikge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJjaGFuZ2VkXCIpIHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBjaGFuZ2VkIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiQ2hlY2tTZXNzaW9uSUZyYW1lOiBcIiArXG4gICAgICAgICAgICBlLmRhdGEgK1xuICAgICAgICAgICAgXCIgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xuICAgIGlmICh0aGlzLl9zZXNzaW9uX3N0YXRlICE9PSBzZXNzaW9uX3N0YXRlKSB7XG4gICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWUuc3RhcnRcIik7XG5cbiAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcblxuICAgICAgbGV0IHNlbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy5fY2xpZW50X2lkICsgXCIgXCIgKyB0aGlzLl9zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgIHRoaXMuX2ZyYW1lX29yaWdpblxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgLy8gdHJpZ2dlciBub3dcbiAgICAgIHNlbmQoKTtcblxuICAgICAgLy8gYW5kIHNldHVwIHRpbWVyXG4gICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChzZW5kLCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gbnVsbDtcblxuICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0b3BcIik7XG5cbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDbG9ja1NlcnZpY2Uge1xuICBnZXRFcG9jaFRpbWUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgoRGF0ZS5ub3coKSAvIDEwMDApIHwgMCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gXCIuL0NvcmRvdmFQb3B1cFdpbmRvdy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB7XG4gIHByZXBhcmUocGFyYW1zKSB7XG4gICAgcGFyYW1zLnBvcHVwV2luZG93RmVhdHVyZXMgPSBcImhpZGRlbj15ZXNcIjtcbiAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gXCIuL0NvcmRvdmFQb3B1cFdpbmRvdy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwTmF2aWdhdG9yIHtcbiAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9IFwibG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vXCI7XG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xuXG5leHBvcnQgY2xhc3MgQ29yZG92YVBvcHVwV2luZG93IHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5mZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuICAgIHRoaXMudGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcblxuICAgIHRoaXMucmVkaXJlY3RfdXJpID0gcGFyYW1zLnN0YXJ0VXJsO1xuICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5jdG9yOiByZWRpcmVjdF91cmk6IFwiICsgdGhpcy5yZWRpcmVjdF91cmkpO1xuICB9XG5cbiAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xuICAgIHJldHVybiBbXG4gICAgICBcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlclwiLFxuICAgICAgXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIuaW5hcHBicm93c2VyXCIsXG4gICAgICBcIm9yZy5hcGFjaGUuY29yZG92YS5pbmFwcGJyb3dzZXJcIixcbiAgICBdLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBjb3Jkb3ZhTWV0YWRhdGEuaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKFwiY29yZG92YSBpcyB1bmRlZmluZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb3Jkb3ZhTWV0YWRhdGEgPSB3aW5kb3cuY29yZG92YS5yZXF1aXJlKFxuICAgICAgICBcImNvcmRvdmEvcGx1Z2luX2xpc3RcIlxuICAgICAgKS5tZXRhZGF0YTtcbiAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJJbkFwcEJyb3dzZXIgcGx1Z2luIG5vdCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHVwID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3BlbihcbiAgICAgICAgcGFyYW1zLnVybCxcbiAgICAgICAgdGhpcy50YXJnZXQsXG4gICAgICAgIHRoaXMuZmVhdHVyZXNcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93Lm5hdmlnYXRlOiBwb3B1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcblxuICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2V4aXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50ID0gdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibG9hZHN0YXJ0XCIsXG4gICAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXJyb3IoXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvd1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxuXG4gIGdldCBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG5cbiAgX2xvYWRTdGFydENhbGxiYWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKHRoaXMucmVkaXJlY3RfdXJpKSA9PT0gMCkge1xuICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogZXZlbnQudXJsIH0pO1xuICAgIH1cbiAgfVxuICBfZXhpdENhbGxiYWNrKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIF9zdWNjZXNzKGRhdGEpIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICBMb2cuZGVidWcoXG4gICAgICBcIkNvcmRvdmFQb3B1cFdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGNvcmRvdmEgcG9wdXAgd2luZG93XCJcbiAgICApO1xuICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XG4gIH1cbiAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICBMb2cuZXJyb3IobWVzc2FnZSk7XG4gICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gIH1cblxuICBfY2xlYW51cCgpIHtcbiAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogY2xlYW5pbmcgdXAgcG9wdXBcIik7XG4gICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJsb2Fkc3RhcnRcIixcbiAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLl9wb3B1cCA9IG51bGw7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JSZXNwb25zZSBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGVycm9yLFxuICAgIGVycm9yX2Rlc2NyaXB0aW9uLFxuICAgIGVycm9yX3VyaSxcbiAgICBzdGF0ZSxcbiAgICBzZXNzaW9uX3N0YXRlLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBMb2cuZXJyb3IoXCJObyBlcnJvciBwYXNzZWQgdG8gRXJyb3JSZXNwb25zZVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVycm9yXCIpO1xuICAgIH1cblxuICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcblxuICAgIHRoaXMubmFtZSA9IFwiRXJyb3JSZXNwb25zZVwiO1xuXG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmVycm9yX3VyaSA9IGVycm9yX3VyaTtcblxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgYWRkSGFuZGxlcihjYikge1xuICAgIHRoaXMuX2NhbGxiYWNrcy5wdXNoKGNiKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIoY2IpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fY2FsbGJhY2tzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gY2IpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJhaXNlKC4uLnBhcmFtcykge1xuICAgIExvZy5kZWJ1ZyhcIkV2ZW50OiBSYWlzaW5nIGV2ZW50OiBcIiArIHRoaXMuX25hbWUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja3NbaV0oLi4ucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmNvbnN0IHRpbWVyID0ge1xuICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xuICAgIHJldHVybiBzZXRJbnRlcnZhbChjYiwgZHVyYXRpb24pO1xuICB9LFxuICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgfSxcbn07XG5cbmxldCB0ZXN0aW5nID0gZmFsc2U7XG5sZXQgcmVxdWVzdCA9IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xuICBzdGF0aWMgX3Rlc3RpbmcoKSB7XG4gICAgdGVzdGluZyA9IHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxvY2F0aW9uKCkge1xuICAgIGlmICghdGVzdGluZykge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgbG9jYWxTdG9yYWdlKCkge1xuICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2Vzc2lvblN0b3JhZ2UoKSB7XG4gICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xuICAgIHJlcXVlc3QgPSBuZXdSZXF1ZXN0O1xuICB9XG5cbiAgc3RhdGljIGdldCBYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICAvL2lmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gIHJldHVybiByZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0O1xuICAgIC8vfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0aW1lcigpIHtcbiAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgIHJldHVybiB0aW1lcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgSUZyYW1lV2luZG93IH0gZnJvbSBcIi4vSUZyYW1lV2luZG93LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVOYXZpZ2F0b3Ige1xuICBwcmVwYXJlKHBhcmFtcykge1xuICAgIGxldCBmcmFtZSA9IG5ldyBJRnJhbWVXaW5kb3cocGFyYW1zKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZyYW1lKTtcbiAgfVxuXG4gIGNhbGxiYWNrKHVybCkge1xuICAgIExvZy5kZWJ1ZyhcIklGcmFtZU5hdmlnYXRvci5jYWxsYmFja1wiKTtcblxuICAgIHRyeSB7XG4gICAgICBJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50KHVybCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmNvbnN0IERlZmF1bHRUaW1lb3V0ID0gMTAwMDA7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVXaW5kb3cge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQsIGZhbHNlKTtcblxuICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXG4gICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5fZnJhbWUud2lkdGggPSAwO1xuICAgIHRoaXMuX2ZyYW1lLmhlaWdodCA9IDA7XG5cbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gIH1cblxuICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0aW1lb3V0ID0gcGFyYW1zLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IERlZmF1bHRUaW1lb3V0O1xuICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5hdmlnYXRlOiBVc2luZyB0aW1lb3V0IG9mOlwiLCB0aW1lb3V0KTtcbiAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5fdGltZW91dC5iaW5kKHRoaXMpLCB0aW1lb3V0KTtcbiAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHBhcmFtcy51cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxuXG4gIGdldCBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG5cbiAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMuX2NsZWFudXAoKTtcblxuICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcbiAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xuICB9XG4gIF9lcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xuICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fY2xlYW51cCgpO1xuICB9XG5cbiAgX2NsZWFudXAoKSB7XG4gICAgaWYgKHRoaXMuX2ZyYW1lKSB7XG4gICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3c6IGNsZWFudXBcIik7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9mcmFtZSk7XG5cbiAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyYW1lID0gbnVsbDtcbiAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfdGltZW91dCgpIHtcbiAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cudGltZW91dFwiKTtcbiAgICB0aGlzLl9lcnJvcihcIkZyYW1lIHdpbmRvdyB0aW1lZCBvdXRcIik7XG4gIH1cblxuICBfbWVzc2FnZShlKSB7XG4gICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm1lc3NhZ2VcIik7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLl90aW1lciAmJlxuICAgICAgZS5vcmlnaW4gPT09IHRoaXMuX29yaWdpbiAmJlxuICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cgJiZcbiAgICAgIHR5cGVvZiBlLmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgIChlLmRhdGEuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgZS5kYXRhLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSlcbiAgICApIHtcbiAgICAgIGxldCB1cmwgPSBlLmRhdGE7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIGZyYW1lXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBfb3JpZ2luKCkge1xuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIH1cblxuICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xuICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnQ6IHBvc3RpbmcgdXJsIG1lc3NhZ2UgdG8gcGFyZW50XCIpO1xuICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh1cmwsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIEluTWVtb3J5V2ViU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5KSB7XG4gICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLmdldEl0ZW1cIiwga2V5KTtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICB9XG5cbiAgc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnNldEl0ZW1cIiwga2V5KTtcbiAgICB0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnJlbW92ZUl0ZW1cIiwga2V5KTtcbiAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xuICB9XG5cbiAga2V5KGluZGV4KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpW2luZGV4XTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpvc2VVdGlsKHtcbiAgandzLFxuICBLZXlVdGlsLFxuICBYNTA5LFxuICBjcnlwdG8sXG4gIGhleHRvYjY0dSxcbiAgYjY0dG9oZXgsXG4gIEFsbG93ZWRTaWduaW5nQWxncyxcbn0pIHtcbiAgcmV0dXJuIGNsYXNzIEpvc2VVdGlsIHtcbiAgICBzdGF0aWMgcGFyc2VKd3Qoand0KSB7XG4gICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC5wYXJzZUp3dFwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB0b2tlbiA9IGp3cy5KV1MucGFyc2Uoand0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IHRva2VuLmhlYWRlck9iaixcbiAgICAgICAgICBwYXlsb2FkOiB0b2tlbi5wYXlsb2FkT2JqLFxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlSnd0KFxuICAgICAgand0LFxuICAgICAga2V5LFxuICAgICAgaXNzdWVyLFxuICAgICAgYXVkaWVuY2UsXG4gICAgICBjbG9ja1NrZXcsXG4gICAgICBub3csXG4gICAgICB0aW1lSW5zZW5zaXRpdmVcbiAgICApIHtcbiAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLnZhbGlkYXRlSnd0XCIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoa2V5Lmt0eSA9PT0gXCJSU0FcIikge1xuICAgICAgICAgIGlmIChrZXkuZSAmJiBrZXkubikge1xuICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBoZXggPSBiNjR0b2hleChrZXkueDVjWzBdKTtcbiAgICAgICAgICAgIGtleSA9IFg1MDkuZ2V0UHVibGljS2V5RnJvbUNlcnRIZXgoaGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICBcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsXG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XG4gICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcbiAgICAgICAgICAgIGtleSA9IEtleVV0aWwuZ2V0S2V5KGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICBcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBVbnN1cHBvcnRlZCBrZXkgdHlwZVwiLFxuICAgICAgICAgICAga2V5ICYmIGtleS5rdHlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgIG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGtleSB0eXBlOiBcIiArIGtleSAmJiBrZXkua3R5KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KFxuICAgICAgICAgIGp3dCxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgaXNzdWVyLFxuICAgICAgICAgIGF1ZGllbmNlLFxuICAgICAgICAgIGNsb2NrU2tldyxcbiAgICAgICAgICBub3csXG4gICAgICAgICAgdGltZUluc2Vuc2l0aXZlXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIExvZy5lcnJvcigoZSAmJiBlLm1lc3NhZ2UpIHx8IGUpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJKV1QgdmFsaWRhdGlvbiBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlSnd0QXR0cmlidXRlcyhcbiAgICAgIGp3dCxcbiAgICAgIGlzc3VlcixcbiAgICAgIGF1ZGllbmNlLFxuICAgICAgY2xvY2tTa2V3LFxuICAgICAgbm93LFxuICAgICAgdGltZUluc2Vuc2l0aXZlXG4gICAgKSB7XG4gICAgICBpZiAoIWNsb2NrU2tldykge1xuICAgICAgICBjbG9ja1NrZXcgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vdykge1xuICAgICAgICBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXlsb2FkID0gSm9zZVV0aWwucGFyc2VKd3Qoand0KS5wYXlsb2FkO1xuXG4gICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XG4gICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaXNzdWVyIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICB9XG4gICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IEludmFsaWQgaXNzdWVyIGluIHRva2VuXCIsXG4gICAgICAgICAgcGF5bG9hZC5pc3NcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBFcnJvcihcIkludmFsaWQgaXNzdWVyIGluIHRva2VuOiBcIiArIHBheWxvYWQuaXNzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBheWxvYWQuYXVkKSB7XG4gICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogYXVkIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICB9XG4gICAgICB2YXIgdmFsaWRBdWRpZW5jZSA9XG4gICAgICAgIHBheWxvYWQuYXVkID09PSBhdWRpZW5jZSB8fFxuICAgICAgICAoQXJyYXkuaXNBcnJheShwYXlsb2FkLmF1ZCkgJiYgcGF5bG9hZC5hdWQuaW5kZXhPZihhdWRpZW5jZSkgPj0gMCk7XG4gICAgICBpZiAoIXZhbGlkQXVkaWVuY2UpIHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuXCIsXG4gICAgICAgICAgcGF5bG9hZC5hdWRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBFcnJvcihcIkludmFsaWQgYXVkaWVuY2UgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5hdWQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IGF1ZGllbmNlKSB7XG4gICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgbmV3IEVycm9yKFwiSW52YWxpZCBhenAgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5henApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGltZUluc2Vuc2l0aXZlKSB7XG4gICAgICAgIHZhciBsb3dlck5vdyA9IG5vdyArIGNsb2NrU2tldztcbiAgICAgICAgdmFyIHVwcGVyTm93ID0gbm93IC0gY2xvY2tTa2V3O1xuXG4gICAgICAgIGlmICghcGF5bG9hZC5pYXQpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpYXQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvd2VyTm93IDwgcGF5bG9hZC5pYXQpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlhdCBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQuaWF0KTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXCJpYXQgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLmlhdClcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXCJuYmYgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLm5iZilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkLmV4cCkge1xuICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogZXhwIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5leHAgPCB1cHBlck5vdykge1xuICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogZXhwIGlzIGluIHRoZSBwYXN0XCIsIHBheWxvYWQuZXhwKTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIGlzIGluIHRoZSBwYXN0OlwiICsgcGF5bG9hZC5leHApKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBheWxvYWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBfdmFsaWRhdGVKd3QoXG4gICAgICBqd3QsXG4gICAgICBrZXksXG4gICAgICBpc3N1ZXIsXG4gICAgICBhdWRpZW5jZSxcbiAgICAgIGNsb2NrU2tldyxcbiAgICAgIG5vdyxcbiAgICAgIHRpbWVJbnNlbnNpdGl2ZVxuICAgICkge1xuICAgICAgcmV0dXJuIEpvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhcbiAgICAgICAgand0LFxuICAgICAgICBpc3N1ZXIsXG4gICAgICAgIGF1ZGllbmNlLFxuICAgICAgICBjbG9ja1NrZXcsXG4gICAgICAgIG5vdyxcbiAgICAgICAgdGltZUluc2Vuc2l0aXZlXG4gICAgICApLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIWp3cy5KV1MudmVyaWZ5KGp3dCwga2V5LCBBbGxvd2VkU2lnbmluZ0FsZ3MpKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IHNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJzaWduYXR1cmUgdmFsaWRhdGlvbiBmYWlsZWRcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgTG9nLmVycm9yKChlICYmIGUubWVzc2FnZSkgfHwgZSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYXNoU3RyaW5nKHZhbHVlLCBhbGcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjcnlwdG8uVXRpbC5oYXNoU3RyaW5nKHZhbHVlLCBhbGcpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGp3cyxcbiAgS2V5VXRpbCxcbiAgWDUwOSxcbiAgY3J5cHRvLFxuICBoZXh0b2I2NHUsXG4gIGI2NHRvaGV4LFxuICBBbGxvd2VkU2lnbmluZ0FsZ3MsXG59IGZyb20gXCIuL2NyeXB0by9yc2FcIjtcbmltcG9ydCBnZXRKb3NlVXRpbCBmcm9tIFwiLi9Kb3NlVXRpbEltcGxcIjtcblxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoe1xuICBqd3MsXG4gIEtleVV0aWwsXG4gIFg1MDksXG4gIGNyeXB0byxcbiAgaGV4dG9iNjR1LFxuICBiNjR0b2hleCxcbiAgQWxsb3dlZFNpZ25pbmdBbGdzLFxufSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgSnNvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCxcbiAgICAvL1hNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCxcbiAgICBqd3RIYW5kbGVyID0gbnVsbFxuICApIHtcbiAgICBpZiAoYWRkaXRpb25hbENvbnRlbnRUeXBlcyAmJiBBcnJheS5pc0FycmF5KGFkZGl0aW9uYWxDb250ZW50VHlwZXMpKSB7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZXMgPSBhZGRpdGlvbmFsQ29udGVudFR5cGVzLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZW50VHlwZXMucHVzaChcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaWYgKGp3dEhhbmRsZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKFwiYXBwbGljYXRpb24vand0XCIpO1xuICAgIH1cblxuICAgIC8vdGhpcy5fWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XG4gICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XG4gIH1cblxuICBhc3luYyBnZXRKc29uKHVybCwgdG9rZW4pIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICB9XG5cbiAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xuICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xuICAgIHZhciBqd3RIYW5kbGVyID0gdGhpcy5fand0SGFuZGxlcjtcbiAgICB2YXIgZm91bmQgPSBudWxsO1xuICAgIHZhciBvcHRpb25zID0ge21ldGhvZDogXCJHRVRcIiwgaGVhZGVyczp7fSB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIHRva2VuXG4gICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uOiB0b2tlbiBwYXNzZWQsIHNldHRpbmcgQXV0aG9yaXphdGlvbiBoZWFkZXJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmMgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgIGlmIChyYy5vayAmJiByYy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJjLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xuICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XG4gICAgICAgIGZvcihjb25zdCBpdGVtIG9mIGFsbG93ZWRDb250ZW50VHlwZXMpIFxuICAgICAgICAgIGlmIChjb250ZW50VHlwZS5zdGFydHNXaXRoKGl0ZW0pKSB7XG4gICAgICAgICAgICBmb3VuZCA9IGl0ZW07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGlmIChmb3VuZCA9PT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xuICAgICAgICAgIGNvbnN0IHJlcSA9IHsncmVzcG9uc2VUZXh0JzogYXdhaXQgcmMudGV4dCgpfVxuICAgICAgICAgIGNvbnN0IGp3dCA9IGF3YWl0IGp3dEhhbmRsZXIocmVxKTtcbiAgICAgICAgICByZXR1cm4gand0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByYy5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4ganNvblxuICAgICAgICAgIH0gY2F0Y2goZXgpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZSBcIiwgZXgubWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyhleClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZXNwb25zZSBDb250ZW50LVR5cGU6IFwiICsgY29udGVudFR5cGUgKyBcIiwgZnJvbSBVUkw6IFwiICsgdXJsKVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocmMuc3RhdHVzVGV4dCArIFwiIChcIiArIHJjLnN0YXR1cyArIFwiKVwiKTtcbiAgfVxuXG4gIGFzeW5jIHBvc3RGb3JtKHVybCwgcGF5bG9hZCwgYmFzaWNBdXRoKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgIH1cblxuICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xuICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xuICAgIHZhciBvcHRpb25zID0ge21ldGhvZDogXCJQT1NUXCIsIGhlYWRlcnM6e30sIGJvZHk6IFwiXCJ9XG4gICAgXG4gICAgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgIGlmIChiYXNpY0F1dGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmFzaWMgXCIgKyBidG9hKGJhc2ljQXV0aCk7XG4gICAgfVxuXG4gICAgbGV0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgZm9yIChsZXQga2V5IGluIHBheWxvYWQpIHtcbiAgICAgIGJvZHkuYXBwZW5kKGtleSwgcGF5bG9hZFtrZXldKVxuICAgIH1cbiAgICBvcHRpb25zLmJvZHkgPSBib2R5LnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCByYyA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgaWYgKHJjLm9rICYmIHJjLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmMuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW0gb2YgYWxsb3dlZENvbnRlbnRUeXBlcykgXG4gICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gaXRlbTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByYy5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4ganNvblxuICAgICAgICAgIH0gY2F0Y2goZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2UgXCIrZXgubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyYy5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgY29uc3QgY29udGVudFR5cGUgPSByYy5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgIGlmIChjb250ZW50VHlwZSkge1xuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xuICAgICAgICBmb3IoY29uc3QgaXRlbSBvZiBhbGxvd2VkQ29udGVudFR5cGVzKSBcbiAgICAgICAgICBpZiAoY29udGVudFR5cGUuc3RhcnRzV2l0aChpdGVtKSkge1xuICAgICAgICAgICAgZm91bmQgPSBpdGVtO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGF3YWl0IHJjLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIGZyb20gc2VydmVyOiBcIiwgcGF5bG9hZC5lcnJvcik7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwYXlsb2FkLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlOiBcIjtcbiAgICAgICAgICAgIExvZy5lcnJvcihtc2csIGV4Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhyb3coZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocmMuc3RhdHVzVGV4dCArIFwiIChcIiArIHJjLnN0YXR1cyArIFwiKVwiKTtcbiAgfVxuXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5sZXQgbm9wTG9nZ2VyID0ge1xuICBkZWJ1ZygpIHt9LFxuICBpbmZvKCkge30sXG4gIHdhcm4oKSB7fSxcbiAgZXJyb3IoKSB7fSxcbn07XG5cbmNvbnN0IE5PTkUgPSAwO1xuY29uc3QgRVJST1IgPSAxO1xuY29uc3QgV0FSTiA9IDI7XG5jb25zdCBJTkZPID0gMztcbmNvbnN0IERFQlVHID0gNDtcblxubGV0IGxvZ2dlcjtcbmxldCBsZXZlbDtcblxuZXhwb3J0IGNsYXNzIExvZyB7XG4gIHN0YXRpYyBnZXQgTk9ORSgpIHtcbiAgICByZXR1cm4gTk9ORTtcbiAgfVxuICBzdGF0aWMgZ2V0IEVSUk9SKCkge1xuICAgIHJldHVybiBFUlJPUjtcbiAgfVxuICBzdGF0aWMgZ2V0IFdBUk4oKSB7XG4gICAgcmV0dXJuIFdBUk47XG4gIH1cbiAgc3RhdGljIGdldCBJTkZPKCkge1xuICAgIHJldHVybiBJTkZPO1xuICB9XG4gIHN0YXRpYyBnZXQgREVCVUcoKSB7XG4gICAgcmV0dXJuIERFQlVHO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0KCkge1xuICAgIGxldmVsID0gSU5GTztcbiAgICBsb2dnZXIgPSBub3BMb2dnZXI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiBsZXZlbDtcbiAgfVxuICBzdGF0aWMgc2V0IGxldmVsKHZhbHVlKSB7XG4gICAgaWYgKE5PTkUgPD0gdmFsdWUgJiYgdmFsdWUgPD0gREVCVUcpIHtcbiAgICAgIGxldmVsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nIGxldmVsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgbG9nZ2VyKCkge1xuICAgIHJldHVybiBsb2dnZXI7XG4gIH1cbiAgc3RhdGljIHNldCBsb2dnZXIodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8pIHtcbiAgICAgIC8vIGp1c3QgdG8gc3RheSBiYWNrd2FyZHMgY29tcGF0LiBjYW4gcmVtb3ZlIGluIDIuMFxuICAgICAgdmFsdWUuZGVidWcgPSB2YWx1ZS5pbmZvO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvICYmIHZhbHVlLndhcm4gJiYgdmFsdWUuZXJyb3IpIHtcbiAgICAgIGxvZ2dlciA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZ2dlclwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGVidWcoLi4uYXJncykge1xuICAgIGlmIChsZXZlbCA+PSBERUJVRykge1xuICAgICAgbG9nZ2VyLmRlYnVnLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBpbmZvKC4uLmFyZ3MpIHtcbiAgICBpZiAobGV2ZWwgPj0gSU5GTykge1xuICAgICAgbG9nZ2VyLmluZm8uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChsZXZlbCA+PSBXQVJOKSB7XG4gICAgICBsb2dnZXIud2Fybi5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZXJyb3IoLi4uYXJncykge1xuICAgIGlmIChsZXZlbCA+PSBFUlJPUikge1xuICAgICAgbG9nZ2VyLmVycm9yLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgfVxuICB9XG59XG5cbkxvZy5yZXNldCgpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gXCIuL0pzb25TZXJ2aWNlLmpzXCI7XG5cbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSBcIi53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YVNlcnZpY2U6IE5vIHNldHRpbmdzIHBhc3NlZCB0byBNZXRhZGF0YVNlcnZpY2VcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbXCJhcHBsaWNhdGlvbi9qd2stc2V0K2pzb25cIl0pO1xuICB9XG5cbiAgZ2V0IG1ldGFkYXRhVXJsKCkge1xuICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVVybCkge1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhVXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICYmXG4gICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSBcIi9cIikge1xuICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gXCIvXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFVcmw7XG4gIH1cblxuICByZXNldFNpZ25pbmdLZXlzKCkge1xuICAgIHRoaXMuX3NldHRpbmdzID0gdGhpcy5fc2V0dGluZ3MgfHwge307XG4gICAgdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRNZXRhZGF0YSgpIHtcbiAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IFJldHVybmluZyBtZXRhZGF0YSBmcm9tIHNldHRpbmdzXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubWV0YWRhdGFVcmwpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IE5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCIpXG4gICAgICApO1xuICAgIH1cblxuICAgIExvZy5kZWJ1ZyhcbiAgICAgIFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBnZXR0aW5nIG1ldGFkYXRhIGZyb21cIixcbiAgICAgIHRoaXMubWV0YWRhdGFVcmxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLmdldEpzb24odGhpcy5tZXRhZGF0YVVybCkudGhlbigobWV0YWRhdGEpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YToganNvbiByZWNlaXZlZFwiKTtcblxuICAgICAgdmFyIHNlZWQgPSB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVNlZWQgfHwge307XG4gICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNlZWQsIG1ldGFkYXRhKTtcbiAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldElzc3VlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImlzc3VlclwiKTtcbiAgfVxuXG4gIGdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImF1dGhvcml6YXRpb25fZW5kcG9pbnRcIik7XG4gIH1cblxuICBnZXRVc2VySW5mb0VuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XG4gIH1cblxuICBnZXRUb2tlbkVuZHBvaW50KG9wdGlvbmFsID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidG9rZW5fZW5kcG9pbnRcIiwgb3B0aW9uYWwpO1xuICB9XG5cbiAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiY2hlY2tfc2Vzc2lvbl9pZnJhbWVcIiwgdHJ1ZSk7XG4gIH1cblxuICBnZXRFbmRTZXNzaW9uRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJlbmRfc2Vzc2lvbl9lbmRwb2ludFwiLCB0cnVlKTtcbiAgfVxuXG4gIGdldFJldm9jYXRpb25FbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcInJldm9jYXRpb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XG4gIH1cblxuICBnZXRLZXlzRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiLCB0cnVlKTtcbiAgfVxuXG4gIF9nZXRNZXRhZGF0YVByb3BlcnR5KG5hbWUsIG9wdGlvbmFsID0gZmFsc2UpIHtcbiAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eSBmb3I6IFwiICsgbmFtZSk7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSgpLnRoZW4oKG1ldGFkYXRhKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogbWV0YWRhdGEgcmVjaWV2ZWRcIik7XG5cbiAgICAgIGlmIChtZXRhZGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25hbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIExvZy53YXJuKFxuICAgICAgICAgICAgXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBvcHRpb25hbCBwcm9wZXJ0eSBcIiArXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWV0YWRhdGFbbmFtZV07XG4gICAgfSk7XG4gIH1cblxuICBnZXRTaWduaW5nS2V5cygpIHtcbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IFJldHVybmluZyBzaWduaW5nS2V5cyBmcm9tIHNldHRpbmdzXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIpLnRoZW4oKGp3a3NfdXJpKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IGp3a3NfdXJpIHJlY2VpdmVkXCIsIGp3a3NfdXJpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLmdldEpzb24oandrc191cmkpLnRoZW4oKGtleVNldCkgPT4ge1xuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IGtleSBzZXQgcmVjZWl2ZWRcIiwga2V5U2V0KTtcblxuICAgICAgICBpZiAoIWtleVNldC5rZXlzKSB7XG4gICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcga2V5cyBvbiBrZXlzZXRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyA9IGtleVNldC5rZXlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tIFwiLi9PaWRjQ2xpZW50U2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiLi9FcnJvclJlc3BvbnNlLmpzXCI7XG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSBcIi4vU2lnbmluUmVxdWVzdC5qc1wiO1xuaW1wb3J0IHsgU2lnbmluUmVzcG9uc2UgfSBmcm9tIFwiLi9TaWduaW5SZXNwb25zZS5qc1wiO1xuaW1wb3J0IHsgU2lnbm91dFJlcXVlc3QgfSBmcm9tIFwiLi9TaWdub3V0UmVxdWVzdC5qc1wiO1xuaW1wb3J0IHsgU2lnbm91dFJlc3BvbnNlIH0gZnJvbSBcIi4vU2lnbm91dFJlc3BvbnNlLmpzXCI7XG5pbXBvcnQgeyBTaWduaW5TdGF0ZSB9IGZyb20gXCIuL1NpZ25pblN0YXRlLmpzXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL1N0YXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSkge1xuICAgIGlmIChzZXR0aW5ncyBpbnN0YW5jZW9mIE9pZGNDbGllbnRTZXR0aW5ncykge1xuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBuZXcgT2lkY0NsaWVudFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX3N0YXRlU3RvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muc3RhdGVTdG9yZTtcbiAgfVxuICBnZXQgX3ZhbGlkYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy52YWxpZGF0b3I7XG4gIH1cbiAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWV0YWRhdGFTZXJ2aWNlO1xuICB9XG5cbiAgZ2V0IHNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcbiAgfVxuICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XG4gIH1cblxuICBjcmVhdGVTaWduaW5SZXF1ZXN0KFxuICAgIHtcbiAgICAgIHJlc3BvbnNlX3R5cGUsXG4gICAgICBzY29wZSxcbiAgICAgIHJlZGlyZWN0X3VyaSxcbiAgICAgIC8vIGRhdGEgd2FzIG1lYW50IHRvIGJlIHRoZSBwbGFjZSBhIGNhbGxlciBjb3VsZCBpbmRpY2F0ZSB0aGUgZGF0YSB0b1xuICAgICAgLy8gaGF2ZSByb3VuZCB0cmlwcGVkLCBidXQgcGVvcGxlIHdlcmUgZ2V0dGluZyBjb25mdXNlZCwgc28gaSBhZGRlZCBzdGF0ZSAoc2luY2UgdGhhdCBtYXRjaGVzIHRoZSBzcGVjKVxuICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxuICAgICAgZGF0YSxcbiAgICAgIHN0YXRlLFxuICAgICAgcHJvbXB0LFxuICAgICAgZGlzcGxheSxcbiAgICAgIG1heF9hZ2UsXG4gICAgICB1aV9sb2NhbGVzLFxuICAgICAgaWRfdG9rZW5faGludCxcbiAgICAgIGxvZ2luX2hpbnQsXG4gICAgICBhY3JfdmFsdWVzLFxuICAgICAgcmVzb3VyY2UsXG4gICAgICByZXF1ZXN0LFxuICAgICAgcmVxdWVzdF91cmksXG4gICAgICByZXNwb25zZV9tb2RlLFxuICAgICAgZXh0cmFRdWVyeVBhcmFtcyxcbiAgICAgIGV4dHJhVG9rZW5QYXJhbXMsXG4gICAgICByZXF1ZXN0X3R5cGUsXG4gICAgICBza2lwVXNlckluZm8sXG4gICAgfSA9IHt9LFxuICAgIHN0YXRlU3RvcmVcbiAgKSB7XG4gICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0XCIpO1xuXG4gICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICByZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV90eXBlO1xuICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcy5fc2V0dGluZ3Muc2NvcGU7XG4gICAgcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgIC8vIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQgYXJlbid0IGFsbG93ZWQgb24gX3NldHRpbmdzXG4gICAgcHJvbXB0ID0gcHJvbXB0IHx8IHRoaXMuX3NldHRpbmdzLnByb21wdDtcbiAgICBkaXNwbGF5ID0gZGlzcGxheSB8fCB0aGlzLl9zZXR0aW5ncy5kaXNwbGF5O1xuICAgIG1heF9hZ2UgPSBtYXhfYWdlIHx8IHRoaXMuX3NldHRpbmdzLm1heF9hZ2U7XG4gICAgdWlfbG9jYWxlcyA9IHVpX2xvY2FsZXMgfHwgdGhpcy5fc2V0dGluZ3MudWlfbG9jYWxlcztcbiAgICBhY3JfdmFsdWVzID0gYWNyX3ZhbHVlcyB8fCB0aGlzLl9zZXR0aW5ncy5hY3JfdmFsdWVzO1xuICAgIHJlc291cmNlID0gcmVzb3VyY2UgfHwgdGhpcy5fc2V0dGluZ3MucmVzb3VyY2U7XG4gICAgcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZTtcbiAgICBleHRyYVF1ZXJ5UGFyYW1zID0gZXh0cmFRdWVyeVBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVF1ZXJ5UGFyYW1zO1xuICAgIGV4dHJhVG9rZW5QYXJhbXMgPSBleHRyYVRva2VuUGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhVG9rZW5QYXJhbXM7XG5cbiAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xuXG4gICAgaWYgKFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpICYmIHJlc3BvbnNlX3R5cGUgIT09IFwiY29kZVwiKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcIk9wZW5JRCBDb25uZWN0IGh5YnJpZCBmbG93IGlzIG5vdCBzdXBwb3J0ZWRcIilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKS50aGVuKCh1cmwpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3Q6IFJlY2VpdmVkIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcIixcbiAgICAgICAgdXJsXG4gICAgICApO1xuXG4gICAgICBsZXQgc2lnbmluUmVxdWVzdCA9IG5ldyBTaWduaW5SZXF1ZXN0KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBjbGllbnRfaWQsXG4gICAgICAgIHJlZGlyZWN0X3VyaSxcbiAgICAgICAgcmVzcG9uc2VfdHlwZSxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGUsXG4gICAgICAgIGF1dGhvcml0eSxcbiAgICAgICAgcHJvbXB0LFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBtYXhfYWdlLFxuICAgICAgICB1aV9sb2NhbGVzLFxuICAgICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgICBsb2dpbl9oaW50LFxuICAgICAgICBhY3JfdmFsdWVzLFxuICAgICAgICByZXNvdXJjZSxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcmVxdWVzdF91cmksXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMsXG4gICAgICAgIHJlcXVlc3RfdHlwZSxcbiAgICAgICAgcmVzcG9uc2VfbW9kZSxcbiAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldCxcbiAgICAgICAgc2tpcFVzZXJJbmZvLFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzaWduaW5TdGF0ZSA9IHNpZ25pblJlcXVlc3Quc3RhdGU7XG4gICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICByZXR1cm4gc3RhdGVTdG9yZVxuICAgICAgICAuc2V0KHNpZ25pblN0YXRlLmlkLCBzaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBzaWduaW5SZXF1ZXN0O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xuICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGVcIik7XG5cbiAgICBsZXQgdXNlUXVlcnkgPVxuICAgICAgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfbW9kZSA9PT0gXCJxdWVyeVwiIHx8XG4gICAgICAoIXRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgJiZcbiAgICAgICAgU2lnbmluUmVxdWVzdC5pc0NvZGUodGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZSkpO1xuICAgIGxldCBkZWxpbWl0ZXIgPSB1c2VRdWVyeSA/IFwiP1wiIDogXCIjXCI7XG5cbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbmluUmVzcG9uc2UodXJsLCBkZWxpbWl0ZXIpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xuICAgIH1cblxuICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZVxuICAgICAgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpXG4gICAgICA6IHN0YXRlU3RvcmUuZ2V0LmJpbmQoc3RhdGVTdG9yZSk7XG5cbiAgICByZXR1cm4gc3RhdGVBcGkocmVzcG9uc2Uuc3RhdGUpLnRoZW4oKHN0b3JlZFN0YXRlU3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIlxuICAgICAgICApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc3RhdGUgPSBTaWduaW5TdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhzdG9yZWRTdGF0ZVN0cmluZyk7XG4gICAgICByZXR1cm4geyBzdGF0ZSwgcmVzcG9uc2UgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcbiAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZVwiKTtcblxuICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgdHJ1ZSkudGhlbihcbiAgICAgICh7IHN0YXRlLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY3JlYXRlU2lnbm91dFJlcXVlc3QoXG4gICAge1xuICAgICAgaWRfdG9rZW5faGludCxcbiAgICAgIGRhdGEsXG4gICAgICBzdGF0ZSxcbiAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgICByZXF1ZXN0X3R5cGUsXG4gICAgfSA9IHt9LFxuICAgIHN0YXRlU3RvcmVcbiAgKSB7XG4gICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdFwiKTtcblxuICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9XG4gICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEVuZFNlc3Npb25FbmRwb2ludCgpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogTm8gZW5kIHNlc3Npb24gZW5kcG9pbnQgdXJsIHJldHVybmVkXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XG4gICAgICB9XG5cbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0OiBSZWNlaXZlZCBlbmQgc2Vzc2lvbiBlbmRwb2ludFwiLFxuICAgICAgICB1cmxcbiAgICAgICk7XG5cbiAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFNpZ25vdXRSZXF1ZXN0KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGUsXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgICAgIHJlcXVlc3RfdHlwZSxcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc2lnbm91dFN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcbiAgICAgIGlmIChzaWdub3V0U3RhdGUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCJcbiAgICAgICAgKTtcblxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0pO1xuICB9XG5cbiAgcmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xuICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlXCIpO1xuXG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFNpZ25vdXRSZXNwb25zZSh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBzdGF0ZSBpbiByZXNwb25zZVwiKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIExvZy53YXJuKFxuICAgICAgICAgIFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IFJlc3BvbnNlIHdhcyBlcnJvcjogXCIsXG4gICAgICAgICAgcmVzcG9uc2UuZXJyb3JcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBzdGF0ZTogdW5kZWZpbmVkLCByZXNwb25zZSB9KTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGVLZXkgPSByZXNwb25zZS5zdGF0ZTtcblxuICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZVxuICAgICAgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpXG4gICAgICA6IHN0YXRlU3RvcmUuZ2V0LmJpbmQoc3RhdGVTdG9yZSk7XG4gICAgcmV0dXJuIHN0YXRlQXBpKHN0YXRlS2V5KS50aGVuKChzdG9yZWRTdGF0ZVN0cmluZykgPT4ge1xuICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiXG4gICAgICAgICk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICB9XG5cbiAgICAgIGxldCBzdGF0ZSA9IFN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcblxuICAgICAgcmV0dXJuIHsgc3RhdGUsIHJlc3BvbnNlIH07XG4gICAgfSk7XG4gIH1cblxuICBwcm9jZXNzU2lnbm91dFJlc3BvbnNlKHVybCwgc3RhdGVTdG9yZSkge1xuICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZVwiKTtcblxuICAgIHJldHVybiB0aGlzLnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHRydWUpLnRoZW4oXG4gICAgICAoeyBzdGF0ZSwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICBcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICBcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZTogTm8gc3RhdGUgZnJvbSBzdG9yYWdlOyBza2lwcGluZyB2YWxpZGF0aW5nIHJlc3BvbnNlXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xuICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xuXG4gICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgIHJldHVybiBTdGF0ZS5jbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSwgdGhpcy5zZXR0aW5ncy5zdGFsZVN0YXRlQWdlKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBDbG9ja1NlcnZpY2UgfSBmcm9tIFwiLi9DbG9ja1NlcnZpY2UuanNcIjtcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSBcIi4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanNcIjtcbmltcG9ydCB7IFJlc3BvbnNlVmFsaWRhdG9yIH0gZnJvbSBcIi4vUmVzcG9uc2VWYWxpZGF0b3IuanNcIjtcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCIuL01ldGFkYXRhU2VydmljZS5qc1wiO1xuXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gXCIud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCBEZWZhdWx0UmVzcG9uc2VUeXBlID0gXCJpZF90b2tlblwiO1xuY29uc3QgRGVmYXVsdFNjb3BlID0gXCJvcGVuaWRcIjtcbmNvbnN0IERlZmF1bHRDbGllbnRBdXRoZW50aWNhdGlvbiA9IFwiY2xpZW50X3NlY3JldF9wb3N0XCI7IC8vIFRoZSBkZWZhdWx0IHZhbHVlIG11c3QgYmUgY2xpZW50X3NlY3JldF9iYXNpYywgYXMgZXhwbGFpbmVkIGluIGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI0NsaWVudEF1dGhlbnRpY2F0aW9uXG5jb25zdCBEZWZhdWx0U3RhbGVTdGF0ZUFnZSA9IDYwICogMTU7IC8vIHNlY29uZHNcbmNvbnN0IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMgPSA2MCAqIDU7XG5cbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgLy8gbWV0YWRhdGEgcmVsYXRlZFxuICAgIGF1dGhvcml0eSxcbiAgICBtZXRhZGF0YVVybCxcbiAgICBtZXRhZGF0YSxcbiAgICBzaWduaW5nS2V5cyxcbiAgICBtZXRhZGF0YVNlZWQsXG4gICAgLy8gY2xpZW50IHJlbGF0ZWRcbiAgICBjbGllbnRfaWQsXG4gICAgY2xpZW50X3NlY3JldCxcbiAgICByZXNwb25zZV90eXBlID0gRGVmYXVsdFJlc3BvbnNlVHlwZSxcbiAgICBzY29wZSA9IERlZmF1bHRTY29wZSxcbiAgICByZWRpcmVjdF91cmksXG4gICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxuICAgIGNsaWVudF9hdXRoZW50aWNhdGlvbiA9IERlZmF1bHRDbGllbnRBdXRoZW50aWNhdGlvbixcbiAgICAvLyBvcHRpb25hbCBwcm90b2NvbFxuICAgIHByb21wdCxcbiAgICBkaXNwbGF5LFxuICAgIG1heF9hZ2UsXG4gICAgdWlfbG9jYWxlcyxcbiAgICBhY3JfdmFsdWVzLFxuICAgIHJlc291cmNlLFxuICAgIHJlc3BvbnNlX21vZGUsXG4gICAgLy8gYmVoYXZpb3IgZmxhZ3NcbiAgICBmaWx0ZXJQcm90b2NvbENsYWltcyA9IHRydWUsXG4gICAgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcbiAgICBzdGFsZVN0YXRlQWdlID0gRGVmYXVsdFN0YWxlU3RhdGVBZ2UsXG4gICAgY2xvY2tTa2V3ID0gRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyxcbiAgICBjbG9ja1NlcnZpY2UgPSBuZXcgQ2xvY2tTZXJ2aWNlKCksXG4gICAgdXNlckluZm9Kd3RJc3N1ZXIgPSBcIk9QXCIsXG4gICAgbWVyZ2VDbGFpbXMgPSBmYWxzZSxcbiAgICAvLyBvdGhlciBiZWhhdmlvclxuICAgIHN0YXRlU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoKSxcbiAgICBSZXNwb25zZVZhbGlkYXRvckN0b3IgPSBSZXNwb25zZVZhbGlkYXRvcixcbiAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxuICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICAgIGV4dHJhUXVlcnlQYXJhbXMgPSB7fSxcbiAgICBleHRyYVRva2VuUGFyYW1zID0ge30sXG4gIH0gPSB7fSkge1xuICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcbiAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xuICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgdGhpcy5fbWV0YWRhdGFTZWVkID0gbWV0YWRhdGFTZWVkO1xuICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gc2lnbmluZ0tleXM7XG5cbiAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XG4gICAgdGhpcy5fcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGU7XG4gICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLl9yZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmk7XG4gICAgdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIHRoaXMuX2NsaWVudF9hdXRoZW50aWNhdGlvbiA9IGNsaWVudF9hdXRoZW50aWNhdGlvbjtcblxuICAgIHRoaXMuX3Byb21wdCA9IHByb21wdDtcbiAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB0aGlzLl9tYXhfYWdlID0gbWF4X2FnZTtcbiAgICB0aGlzLl91aV9sb2NhbGVzID0gdWlfbG9jYWxlcztcbiAgICB0aGlzLl9hY3JfdmFsdWVzID0gYWNyX3ZhbHVlcztcbiAgICB0aGlzLl9yZXNvdXJjZSA9IHJlc291cmNlO1xuICAgIHRoaXMuX3Jlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlO1xuXG4gICAgdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSAhIWZpbHRlclByb3RvY29sQ2xhaW1zO1xuICAgIHRoaXMuX2xvYWRVc2VySW5mbyA9ICEhbG9hZFVzZXJJbmZvO1xuICAgIHRoaXMuX3N0YWxlU3RhdGVBZ2UgPSBzdGFsZVN0YXRlQWdlO1xuICAgIHRoaXMuX2Nsb2NrU2tldyA9IGNsb2NrU2tldztcbiAgICB0aGlzLl9jbG9ja1NlcnZpY2UgPSBjbG9ja1NlcnZpY2U7XG4gICAgdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXIgPSB1c2VySW5mb0p3dElzc3VlcjtcbiAgICB0aGlzLl9tZXJnZUNsYWltcyA9ICEhbWVyZ2VDbGFpbXM7XG5cbiAgICB0aGlzLl9zdGF0ZVN0b3JlID0gc3RhdGVTdG9yZTtcbiAgICB0aGlzLl92YWxpZGF0b3IgPSBuZXcgUmVzcG9uc2VWYWxpZGF0b3JDdG9yKHRoaXMpO1xuICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMpO1xuXG4gICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9XG4gICAgICB0eXBlb2YgZXh0cmFRdWVyeVBhcmFtcyA9PT0gXCJvYmplY3RcIiA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcbiAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID1cbiAgICAgIHR5cGVvZiBleHRyYVRva2VuUGFyYW1zID09PSBcIm9iamVjdFwiID8gZXh0cmFUb2tlblBhcmFtcyA6IHt9O1xuICB9XG5cbiAgLy8gY2xpZW50IGNvbmZpZ1xuICBnZXQgY2xpZW50X2lkKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfaWQ7XG4gIH1cbiAgc2V0IGNsaWVudF9pZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5fY2xpZW50X2lkKSB7XG4gICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxuICAgICAgdGhpcy5fY2xpZW50X2lkID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2NsaWVudF9pZDogY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCJcbiAgICAgICk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIik7XG4gICAgfVxuICB9XG4gIGdldCBjbGllbnRfc2VjcmV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xuICB9XG4gIGdldCByZXNwb25zZV90eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV90eXBlO1xuICB9XG4gIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gIH1cbiAgZ2V0IHJlZGlyZWN0X3VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xuICB9XG4gIGdldCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgfVxuICBnZXQgY2xpZW50X2F1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfYXV0aGVudGljYXRpb247XG4gIH1cblxuICAvLyBvcHRpb25hbCBwcm90b2NvbCBwYXJhbXNcbiAgZ2V0IHByb21wdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xuICB9XG4gIGdldCBkaXNwbGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5O1xuICB9XG4gIGdldCBtYXhfYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhfYWdlO1xuICB9XG4gIGdldCB1aV9sb2NhbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl91aV9sb2NhbGVzO1xuICB9XG4gIGdldCBhY3JfdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3JfdmFsdWVzO1xuICB9XG4gIGdldCByZXNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2U7XG4gIH1cbiAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX21vZGU7XG4gIH1cblxuICAvLyBtZXRhZGF0YVxuICBnZXQgYXV0aG9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XG4gIH1cbiAgc2V0IGF1dGhvcml0eSh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5fYXV0aG9yaXR5KSB7XG4gICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxuICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2F1dGhvcml0eTogYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCJcbiAgICAgICk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIik7XG4gICAgfVxuICB9XG4gIGdldCBtZXRhZGF0YVVybCgpIHtcbiAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XG4gICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuYXV0aG9yaXR5O1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICYmXG4gICAgICAgIHRoaXMuX21ldGFkYXRhVXJsLmluZGV4T2YoT2lkY01ldGFkYXRhVXJsUGF0aCkgPCAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSBcIi9cIikge1xuICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xuICB9XG5cbiAgLy8gc2V0dGFibGUvY2FjaGFibGUgbWV0YWRhdGEgdmFsdWVzXG4gIGdldCBtZXRhZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGE7XG4gIH1cbiAgc2V0IG1ldGFkYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5fbWV0YWRhdGEgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWV0YWRhdGFTZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlZWQ7XG4gIH1cbiAgc2V0IG1ldGFkYXRhU2VlZCh2YWx1ZSkge1xuICAgIHRoaXMuX21ldGFkYXRhU2VlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNpZ25pbmdLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduaW5nS2V5cztcbiAgfVxuICBzZXQgc2lnbmluZ0tleXModmFsdWUpIHtcbiAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHZhbHVlO1xuICB9XG5cbiAgLy8gYmVoYXZpb3IgZmxhZ3NcbiAgZ2V0IGZpbHRlclByb3RvY29sQ2xhaW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcztcbiAgfVxuICBnZXQgbG9hZFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XG4gIH1cbiAgZ2V0IHN0YWxlU3RhdGVBZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWxlU3RhdGVBZ2U7XG4gIH1cbiAgZ2V0IGNsb2NrU2tldygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvY2tTa2V3O1xuICB9XG4gIGdldCB1c2VySW5mb0p3dElzc3VlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXI7XG4gIH1cbiAgZ2V0IG1lcmdlQ2xhaW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9tZXJnZUNsYWltcztcbiAgfVxuXG4gIGdldCBzdGF0ZVN0b3JlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVN0b3JlO1xuICB9XG4gIGdldCB2YWxpZGF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcjtcbiAgfVxuICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XG4gIH1cblxuICAvLyBleHRyYSBxdWVyeSBwYXJhbXNcbiAgZ2V0IGV4dHJhUXVlcnlQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXM7XG4gIH1cbiAgc2V0IGV4dHJhUXVlcnlQYXJhbXModmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICAvLyBleHRyYSB0b2tlbiBwYXJhbXNcbiAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XG4gIH1cbiAgc2V0IGV4dHJhVG9rZW5QYXJhbXModmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgdGhlIHRpbWVcbiAgZ2V0RXBvY2hUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9ja1NlcnZpY2UuZ2V0RXBvY2hUaW1lKCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgUG9wdXBXaW5kb3cgfSBmcm9tIFwiLi9Qb3B1cFdpbmRvdy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBOYXZpZ2F0b3Ige1xuICBwcmVwYXJlKHBhcmFtcykge1xuICAgIGxldCBwb3B1cCA9IG5ldyBQb3B1cFdpbmRvdyhwYXJhbXMpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICB9XG5cbiAgY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKSB7XG4gICAgTG9nLmRlYnVnKFwiUG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2tcIik7XG5cbiAgICB0cnkge1xuICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBVcmxVdGlsaXR5IH0gZnJvbSBcIi4vVXJsVXRpbGl0eS5qc1wiO1xuXG5jb25zdCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwgPSA1MDA7XG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9XG4gIFwibG9jYXRpb249bm8sdG9vbGJhcj1ubyx3aWR0aD01MDAsaGVpZ2h0PTUwMCxsZWZ0PTEwMCx0b3A9MTAwO1wiO1xuLy9jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7cmVzaXphYmxlPXllcyc7XG5cbmNvbnN0IERlZmF1bHRQb3B1cFRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIGxldCB0YXJnZXQgPSBwYXJhbXMucG9wdXBXaW5kb3dUYXJnZXQgfHwgRGVmYXVsdFBvcHVwVGFyZ2V0O1xuICAgIGxldCBmZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuXG4gICAgdGhpcy5fcG9wdXAgPSB3aW5kb3cub3BlbihcIlwiLCB0YXJnZXQsIGZlYXR1cmVzKTtcbiAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgdGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkLmJpbmQodGhpcyksXG4gICAgICAgIENoZWNrRm9yUG9wdXBDbG9zZWRJbnRlcnZhbFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgfVxuXG4gIG5hdmlnYXRlKHBhcmFtcykge1xuICAgIGlmICghdGhpcy5fcG9wdXApIHtcbiAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IEVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xuICAgIH0gZWxzZSBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogbm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5hdmlnYXRlOiBTZXR0aW5nIFVSTCBpbiBwb3B1cFwiKTtcblxuICAgICAgdGhpcy5faWQgPSBwYXJhbXMuaWQ7XG4gICAgICBpZiAodGhpcy5faWQpIHtcbiAgICAgICAgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHBhcmFtcy5pZF0gPSB0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3B1cC5mb2N1cygpO1xuICAgICAgdGhpcy5fcG9wdXAud2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICB9XG5cbiAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gcG9wdXAgd2luZG93XCIpO1xuXG4gICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XG4gIH1cbiAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICBMb2cuZXJyb3IoXCJQb3B1cFdpbmRvdy5lcnJvcjogXCIsIG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fY2xlYW51cChmYWxzZSk7XG4gIH1cblxuICBfY2xlYW51cChrZWVwT3Blbikge1xuICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNsZWFudXBcIik7XG5cbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIpO1xuICAgIHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciA9IG51bGw7XG5cbiAgICBkZWxldGUgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHRoaXMuX2lkXTtcblxuICAgIGlmICh0aGlzLl9wb3B1cCAmJiAha2VlcE9wZW4pIHtcbiAgICAgIHRoaXMuX3BvcHVwLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuX3BvcHVwID0gbnVsbDtcbiAgfVxuXG4gIF9jaGVja0ZvclBvcHVwQ2xvc2VkKCkge1xuICAgIGlmICghdGhpcy5fcG9wdXAgfHwgdGhpcy5fcG9wdXAuY2xvc2VkKSB7XG4gICAgICB0aGlzLl9lcnJvcihcIlBvcHVwIHdpbmRvdyBjbG9zZWRcIik7XG4gICAgfVxuICB9XG5cbiAgX2NhbGxiYWNrKHVybCwga2VlcE9wZW4pIHtcbiAgICB0aGlzLl9jbGVhbnVwKGtlZXBPcGVuKTtcblxuICAgIGlmICh1cmwpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrIHN1Y2Nlc3NcIik7XG4gICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XG4gICAgICB0aGlzLl9lcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZnJvbSBwb3B1cFwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xuICAgIGlmICh3aW5kb3cub3BlbmVyKSB7XG4gICAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHZhciBkYXRhID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgZGVsaW1pdGVyKTtcblxuICAgICAgICBpZiAoZGF0YS5zdGF0ZSkge1xuICAgICAgICAgIHZhciBuYW1lID0gXCJwb3B1cENhbGxiYWNrX1wiICsgZGF0YS5zdGF0ZTtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB3aW5kb3cub3BlbmVyW25hbWVdO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogcGFzc2luZyB1cmwgbWVzc2FnZSB0byBvcGVuZXJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2cud2FybihcbiAgICAgICAgICAgICAgXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gc3RhdGUgZm91bmQgaW4gcmVzcG9uc2UgdXJsXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy53YXJuKFxuICAgICAgICBcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciB7XG4gIHByZXBhcmUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgfVxuXG4gIG5hdmlnYXRlKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXCJSZWRpcmVjdE5hdmlnYXRvci5uYXZpZ2F0ZTogTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy51c2VSZXBsYWNlVG9OYXZpZ2F0ZSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGFyYW1zLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vTWV0YWRhdGFTZXJ2aWNlLmpzXCI7XG5pbXBvcnQgeyBVc2VySW5mb1NlcnZpY2UgfSBmcm9tIFwiLi9Vc2VySW5mb1NlcnZpY2UuanNcIjtcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSBcIi4vVG9rZW5DbGllbnQuanNcIjtcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiLi9FcnJvclJlc3BvbnNlLmpzXCI7XG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gXCIuL0pvc2VVdGlsLmpzXCI7XG5cbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1xuICBcIm5vbmNlXCIsXG4gIFwiYXRfaGFzaFwiLFxuICBcImlhdFwiLFxuICBcIm5iZlwiLFxuICBcImV4cFwiLFxuICBcImF1ZFwiLFxuICBcImlzc1wiLFxuICBcImNfaGFzaFwiLFxuXTtcblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2V0dGluZ3MsXG4gICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcbiAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLFxuICAgIGpvc2VVdGlsID0gSm9zZVV0aWwsXG4gICAgVG9rZW5DbGllbnRDdG9yID0gVG9rZW5DbGllbnRcbiAgKSB7XG4gICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZCB0byBSZXNwb25zZVZhbGlkYXRvclwiXG4gICAgICApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgfVxuXG4gIHZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZVwiKTtcblxuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHN0YXRlIHByb2Nlc3NlZFwiKTtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVRva2VucyhzdGF0ZSwgcmVzcG9uc2UpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHRva2VucyB2YWxpZGF0ZWRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ2xhaW1zKHN0YXRlLCByZXNwb25zZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IGNsYWltcyBwcm9jZXNzZWRcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdGVTaWdub3V0UmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICB9XG5cbiAgICAvLyBub3cgdGhhdCB3ZSBrbm93IHRoZSBzdGF0ZSBtYXRjaGVzLCB0YWtlIHRoZSBzdG9yZWQgZGF0YVxuICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgZm9yIGJvdGggc3VjY2VzcyAmIGVycm9yIG91dGNvbWVzXG4gICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IHN0YXRlIHZhbGlkYXRlZFwiKTtcbiAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIExvZy53YXJuKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBSZXNwb25zZSB3YXMgZXJyb3JcIixcbiAgICAgICAgcmVzcG9uc2UuZXJyb3JcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIF9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkge1xuICAgIGlmIChzdGF0ZS5pZCAhPT0gcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5jbGllbnRfaWQpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmF1dGhvcml0eSkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBhdXRob3JpdHkgb24gc3RhdGVcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBhdXRob3JpdHkgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxuICAgIGlmICghdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5KSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgPSBzdGF0ZS5hdXRob3JpdHk7XG4gICAgfVxuICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBhdXRob3JpdHkgaWYgdGhlIGF1dGhvcml0eSBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXG4gICAgZWxzZSBpZiAoXG4gICAgICB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgJiZcbiAgICAgIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAhPT0gc3RhdGUuYXV0aG9yaXR5XG4gICAgKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGF1dGhvcml0eSBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcImF1dGhvcml0eSBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpXG4gICAgICApO1xuICAgIH1cbiAgICAvLyB0aGlzIGFsbG93cyB0aGUgY2xpZW50X2lkIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBzaWduaW4gc3RhdGVcbiAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCkge1xuICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkID0gc3RhdGUuY2xpZW50X2lkO1xuICAgIH1cbiAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgY2xpZW50X2lkIGlmIHRoZSBjbGllbnRfaWQgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxuICAgIGVsc2UgaWYgKFxuICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICYmXG4gICAgICB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgIT09IHN0YXRlLmNsaWVudF9pZFxuICAgICkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBjbGllbnRfaWQgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBuZXcgRXJyb3IoXCJjbGllbnRfaWQgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBub3cgdGhhdCB3ZSBrbm93IHRoZSBzdGF0ZSBtYXRjaGVzLCB0YWtlIHRoZSBzdG9yZWQgZGF0YVxuICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgZm9yIGJvdGggc3VjY2VzcyAmIGVycm9yIG91dGNvbWVzXG4gICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IHN0YXRlIHZhbGlkYXRlZFwiKTtcbiAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIExvZy53YXJuKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBSZXNwb25zZSB3YXMgZXJyb3JcIixcbiAgICAgICAgcmVzcG9uc2UuZXJyb3JcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IEV4cGVjdGluZyBpZF90b2tlbiBpbiByZXNwb25zZVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLm5vbmNlICYmIHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vdCBleHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY29kZV92ZXJpZmllciAmJiAhcmVzcG9uc2UuY29kZSkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgY29kZSBpbiByZXNwb25zZVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vdCBleHBlY3RpbmcgY29kZSBpbiByZXNwb25zZVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgY29kZSBpbiByZXNwb25zZVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5zY29wZSkge1xuICAgICAgLy8gaWYgdGhlcmUncyBubyBzY29wZSBvbiB0aGUgcmVzcG9uc2UsIHRoZW4gYXNzdW1lIGFsbCBzY29wZXMgZ3JhbnRlZCAocGVyLXNwZWMpIGFuZCBjb3B5IG92ZXIgc2NvcGVzIGZyb20gb3JpZ2luYWwgcmVxdWVzdFxuICAgICAgcmVzcG9uc2Uuc2NvcGUgPSBzdGF0ZS5zY29wZTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIF9wcm9jZXNzQ2xhaW1zKHN0YXRlLCByZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc09wZW5JZENvbm5lY3QpIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogcmVzcG9uc2UgaXMgT0lEQywgcHJvY2Vzc2luZyBjbGFpbXNcIlxuICAgICAgKTtcblxuICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXRlLnNraXBVc2VySW5mbyAhPT0gdHJ1ZSAmJlxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5sb2FkVXNlckluZm8gJiZcbiAgICAgICAgcmVzcG9uc2UuYWNjZXNzX3Rva2VuXG4gICAgICApIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2VcbiAgICAgICAgICAuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbilcbiAgICAgICAgICAudGhlbigoY2xhaW1zKSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnRcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGNsYWltcy5zdWIgIT09IHJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiBzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBpZF90b2tlblwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gdGhpcy5fbWVyZ2VDbGFpbXMocmVzcG9uc2UucHJvZmlsZSwgY2xhaW1zKTtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogdXNlciBpbmZvIGNsYWltcyByZWNlaXZlZCwgdXBkYXRlZCBwcm9maWxlOlwiLFxuICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogbm90IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBMb2cuZGVidWcoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIG5vdCBPSURDLCBub3QgcHJvY2Vzc2luZyBjbGFpbXNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIF9tZXJnZUNsYWltcyhjbGFpbXMxLCBjbGFpbXMyKSB7XG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltczEpO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBjbGFpbXMyKSB7XG4gICAgICB2YXIgdmFsdWVzID0gY2xhaW1zMltuYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmICghcmVzdWx0W25hbWVdKSB7XG4gICAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtuYW1lXS5pbmRleE9mKHZhbHVlKSA8IDApIHtcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0W25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdGhpcy5fc2V0dGluZ3MubWVyZ2VDbGFpbXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3VsdFtuYW1lXSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBbcmVzdWx0W25hbWVdLCB2YWx1ZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9maWx0ZXJQcm90b2NvbENsYWltcyhjbGFpbXMpIHtcbiAgICBMb2cuZGVidWcoXG4gICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltcywgaW5jb21pbmcgY2xhaW1zOlwiLFxuICAgICAgY2xhaW1zXG4gICAgKTtcblxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMpO1xuXG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLl9maWx0ZXJQcm90b2NvbENsYWltcykge1xuICAgICAgUHJvdG9jb2xDbGFpbXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBkZWxldGUgcmVzdWx0W3R5cGVdO1xuICAgICAgfSk7XG5cbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHByb3RvY29sIGNsYWltcyBmaWx0ZXJlZFwiLFxuICAgICAgICByZXN1bHRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXM6IHByb3RvY29sIGNsYWltcyBub3QgZmlsdGVyZWRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5jb2RlKSB7XG4gICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgY29kZVwiKTtcbiAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgaWYgKHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgaWRfdG9rZW4gYW5kIGFjY2Vzc190b2tlblwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgfVxuXG4gICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgaWRfdG9rZW5cIik7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSk7XG4gICAgfVxuXG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IE5vIGNvZGUgdG8gcHJvY2VzcyBvciBpZF90b2tlbiB0byB2YWxpZGF0ZVwiXG4gICAgKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIF9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgIGNsaWVudF9pZDogc3RhdGUuY2xpZW50X2lkLFxuICAgICAgY2xpZW50X3NlY3JldDogc3RhdGUuY2xpZW50X3NlY3JldCxcbiAgICAgIGNvZGU6IHJlc3BvbnNlLmNvZGUsXG4gICAgICByZWRpcmVjdF91cmk6IHN0YXRlLnJlZGlyZWN0X3VyaSxcbiAgICAgIGNvZGVfdmVyaWZpZXI6IHN0YXRlLmNvZGVfdmVyaWZpZXIsXG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS5leHRyYVRva2VuUGFyYW1zICYmIHR5cGVvZiBzdGF0ZS5leHRyYVRva2VuUGFyYW1zID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90b2tlbkNsaWVudC5leGNoYW5nZUNvZGUocmVxdWVzdCkudGhlbigodG9rZW5SZXNwb25zZSkgPT4ge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRva2VuUmVzcG9uc2UpIHtcbiAgICAgICAgcmVzcG9uc2Vba2V5XSA9IHRva2VuUmVzcG9uc2Vba2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcHJvY2Vzc2luZyBpZF90b2tlblwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHJldHVybmluZyByZXNwb25zZVwiXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KTtcbiAgfVxuXG4gIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbigoaXNzdWVyKSA9PiB7XG4gICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XG4gICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBWYWxpZGFpbmcgSldUIGF0dHJpYnV0ZXM7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIixcbiAgICAgICAgY2xvY2tTa2V3SW5TZWNvbmRzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZ2V0RXBvY2hUaW1lKCkudGhlbigobm93KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbFxuICAgICAgICAgIC52YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoXG4gICAgICAgICAgICByZXNwb25zZS5pZF90b2tlbixcbiAgICAgICAgICAgIGlzc3VlcixcbiAgICAgICAgICAgIGF1ZGllbmNlLFxuICAgICAgICAgICAgY2xvY2tTa2V3SW5TZWNvbmRzLFxuICAgICAgICAgICAgbm93XG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgc3RhdGUubm9uY2UgIT09IHBheWxvYWQubm9uY2UpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdWIpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IE5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaWduaW5nS2V5Rm9ySnd0KGp3dCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXMoKS50aGVuKChrZXlzKSA9PiB7XG4gICAgICBjb25zdCBraWQgPSBqd3QuaGVhZGVyLmtpZDtcbiAgICAgIGlmICgha2V5cykge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKSk7XG4gICAgICB9XG5cbiAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFJlY2VpdmVkIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgIGxldCBrZXk7XG4gICAgICBpZiAoIWtpZCkge1xuICAgICAgICBrZXlzID0gdGhpcy5fZmlsdGVyQnlBbGcoa2V5cywgand0LmhlYWRlci5hbGcpO1xuXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxuICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcbiAgICAgICAgICBrZXkgPSBrZXlzWzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcbiAgICAgICAgfSlbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGtleSk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0U2lnbmluZ0tleUZvckp3dFdpdGhTaW5nbGVSZXRyeShqd3QpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0U2lnbmluZ0tleUZvckp3dChqd3QpLnRoZW4oKGtleSkgPT4ge1xuICAgICAgLy8gUmVmcmVzaGluZyBzaWduaW5nS2V5cyBpZiBubyBzdWl0YWJsZSB2ZXJpZmljYXRpb24ga2V5IGlzIHByZXNlbnQgZm9yIGdpdmVuIGp3dCBoZWFkZXIuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICAvLyBzZXQgdG8gdW5kZWZpbmVkLCB0byB0cmlnZ2VyIG5ldHdvcmsgY2FsbCB0byBqd2tzX3VyaS5cbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLnJlc2V0U2lnbmluZ0tleXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNpZ25pbmdLZXlGb3JKd3Qoand0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgaWYgKCFzdGF0ZS5ub25jZSkge1xuICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gbm9uY2Ugb24gc3RhdGVcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbm9uY2Ugb24gc3RhdGVcIikpO1xuICAgIH1cblxuICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XG4gICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIsXG4gICAgICAgIGp3dFxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKChpc3N1ZXIpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFJlY2VpdmVkIGlzc3VlclwiKTtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRTaWduaW5nS2V5Rm9ySnd0V2l0aFNpbmdsZVJldHJ5KGp3dCkudGhlbigoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgbmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhdWRpZW5jZSA9IHN0YXRlLmNsaWVudF9pZDtcblxuICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBWYWxpZGFpbmcgSldUOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsXG4gICAgICAgICAgY2xvY2tTa2V3SW5TZWNvbmRzXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsXG4gICAgICAgICAgLnZhbGlkYXRlSnd0KFxuICAgICAgICAgICAgcmVzcG9uc2UuaWRfdG9rZW4sXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpc3N1ZXIsXG4gICAgICAgICAgICBhdWRpZW5jZSxcbiAgICAgICAgICAgIGNsb2NrU2tld0luU2Vjb25kc1xuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWp3dC5wYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSBqd3QucGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XG4gICAgdmFyIGt0eSA9IG51bGw7XG4gICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcbiAgICAgIGt0eSA9IFwiUlNBXCI7XG4gICAgfSBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XG4gICAgICBrdHkgPSBcIlBTXCI7XG4gICAgfSBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIkVTXCIpKSB7XG4gICAgICBrdHkgPSBcIkVDXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIExvZy5kZWJ1ZyhcbiAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIixcbiAgICAgIGt0eVxuICAgICk7XG5cbiAgICBrZXlzID0ga2V5cy5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICB9KTtcblxuICAgIExvZy5kZWJ1ZyhcbiAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsXG4gICAgICBrdHksXG4gICAgICBrZXlzLmxlbmd0aFxuICAgICk7XG5cbiAgICByZXR1cm4ga2V5cztcbiAgfVxuXG4gIF92YWxpZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5wcm9maWxlKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBhdF9oYXNoIGluIGlkX3Rva2VuXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIGlkX3Rva2VuXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuXCIpKTtcbiAgICB9XG5cbiAgICBsZXQgand0ID0gdGhpcy5fam9zZVV0aWwucGFyc2VKd3QocmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgIGlmICghand0IHx8ICFqd3QuaGVhZGVyKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLFxuICAgICAgICBqd3RcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgaGFzaEFsZyA9IGp3dC5oZWFkZXIuYWxnO1xuICAgIGlmICghaGFzaEFsZyB8fCBoYXNoQWxnLmxlbmd0aCAhPT0gNSkge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsXG4gICAgICAgIGhhc2hBbGdcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcbiAgICB9XG5cbiAgICB2YXIgaGFzaEJpdHMgPSBoYXNoQWxnLnN1YnN0cigyLCAzKTtcbiAgICBpZiAoIWhhc2hCaXRzKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIixcbiAgICAgICAgaGFzaEFsZyxcbiAgICAgICAgaGFzaEJpdHNcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcbiAgICB9XG5cbiAgICBoYXNoQml0cyA9IHBhcnNlSW50KGhhc2hCaXRzKTtcbiAgICBpZiAoaGFzaEJpdHMgIT09IDI1NiAmJiBoYXNoQml0cyAhPT0gMzg0ICYmIGhhc2hCaXRzICE9PSA1MTIpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLFxuICAgICAgICBoYXNoQWxnLFxuICAgICAgICBoYXNoQml0c1xuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgIH1cblxuICAgIGxldCBzaGEgPSBcInNoYVwiICsgaGFzaEJpdHM7XG4gICAgdmFyIGhhc2ggPSB0aGlzLl9qb3NlVXRpbC5oYXNoU3RyaW5nKHJlc3BvbnNlLmFjY2Vzc190b2tlbiwgc2hhKTtcbiAgICBpZiAoIWhhc2gpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogYWNjZXNzX3Rva2VuIGhhc2ggZmFpbGVkOlwiLFxuICAgICAgICBzaGFcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xuICAgIH1cblxuICAgIHZhciBsZWZ0ID0gaGFzaC5zdWJzdHIoMCwgaGFzaC5sZW5ndGggLyAyKTtcbiAgICB2YXIgbGVmdF9iNjR1ID0gdGhpcy5fam9zZVV0aWwuaGV4VG9CYXNlNjRVcmwobGVmdCk7XG4gICAgaWYgKGxlZnRfYjY0dSAhPT0gcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsXG4gICAgICAgIGxlZnRfYjY0dSxcbiAgICAgICAgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcbiAgICB9XG5cbiAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogc3VjY2Vzc1wiKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gXCIuL0NoZWNrU2Vzc2lvbklGcmFtZS5qc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uTW9uaXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJNYW5hZ2VyLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZUN0b3IgPSBDaGVja1Nlc3Npb25JRnJhbWUsXG4gICAgdGltZXIgPSBHbG9iYWwudGltZXJcbiAgKSB7XG4gICAgaWYgKCF1c2VyTWFuYWdlcikge1xuICAgICAgTG9nLmVycm9yKFxuICAgICAgICBcIlNlc3Npb25Nb25pdG9yLmN0b3I6IE5vIHVzZXIgbWFuYWdlciBwYXNzZWQgdG8gU2Vzc2lvbk1vbml0b3JcIlxuICAgICAgKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX3VzZXJNYW5hZ2VyID0gdXNlck1hbmFnZXI7XG4gICAgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZUN0b3I7XG4gICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcblxuICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyTG9hZGVkKHRoaXMuX3N0YXJ0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQodGhpcy5fc3RvcC5iaW5kKHRoaXMpKTtcblxuICAgIFByb21pc2UucmVzb2x2ZShcbiAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyXG4gICAgICAgIC5nZXRVc2VyKClcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAvLyBkb2luZyB0aGlzIG1hbnVhbGx5IGhlcmUgc2luY2UgY2FsbGluZyBnZXRVc2VyXG4gICAgICAgICAgLy8gZG9lc24ndCB0cmlnZ2VyIGxvYWQgZXZlbnQuXG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHVzZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyXG4gICAgICAgICAgICAgIC5xdWVyeVNlc3Npb25TdGF0dXMoKVxuICAgICAgICAgICAgICAudGhlbigoc2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xuICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc3ViICYmIHNlc3Npb24uc2lkKSB7XG4gICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yjogc2Vzc2lvbi5zdWIsXG4gICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWQsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvciBjdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIixcbiAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcbiAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOiBlcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IF9zZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIuc2V0dGluZ3M7XG4gIH1cbiAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLm1ldGFkYXRhU2VydmljZTtcbiAgfVxuICBnZXQgX2NsaWVudF9pZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICB9XG4gIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNoZWNrU2Vzc2lvbkludGVydmFsO1xuICB9XG4gIGdldCBfc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnN0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuICB9XG5cbiAgX3N0YXJ0KHVzZXIpIHtcbiAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcblxuICAgIGlmIChzZXNzaW9uX3N0YXRlKSB7XG4gICAgICBpZiAodXNlci5wcm9maWxlKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHVzZXIucHJvZmlsZS5zdWI7XG4gICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XG4gICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogc2Vzc2lvbl9zdGF0ZTpcIixcbiAgICAgICAgICBzZXNzaW9uX3N0YXRlLFxuICAgICAgICAgIFwiLCBzdWI6XCIsXG4gICAgICAgICAgdGhpcy5fc3ViXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3NpZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX3N0YXJ0OiBzZXNzaW9uX3N0YXRlOlwiLFxuICAgICAgICAgIHNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgXCIsIGFub255bW91cyB1c2VyXCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlXG4gICAgICAgICAgLmdldENoZWNrU2Vzc2lvbklmcmFtZSgpXG4gICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IEluaXRpYWxpemluZyBjaGVjayBzZXNzaW9uIGlmcmFtZVwiXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX2NsaWVudF9pZDtcbiAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSA9IG5ldyB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yKFxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCxcbiAgICAgICAgICAgICAgICBzdG9wT25FcnJvclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uX3N0YXRlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBMb2cud2FybihcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogTm8gY2hlY2sgc2Vzc2lvbiBpZnJhbWUgZm91bmQgaW4gdGhlIG1ldGFkYXRhXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gbm9uLXByb21pc2UgY2FsbGJhY2tcbiAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IEVycm9yIGZyb20gZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lOlwiLFxuICAgICAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uX3N0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc3RvcCgpIHtcbiAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2lkID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xuICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0b3BcIik7XG4gICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RvcCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgLy8gdXNpbmcgYSB0aW1lciB0byBkZWxheSByZS1pbml0aWFsaXphdGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHNpZ25vdXRcbiAgICAgIGxldCB0aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdGltZXIuY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXJcbiAgICAgICAgICAucXVlcnlTZXNzaW9uU3RhdHVzKClcbiAgICAgICAgICAudGhlbigoc2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XG4gICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcbiAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xuICAgICAgICAgICAgICAgIHN1Yjogc2Vzc2lvbi5zdWIsXG4gICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHRtcFVzZXIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGNhbGxiYWNrXG4gICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLFxuICAgICAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9jYWxsYmFjaygpIHtcbiAgICB0aGlzLl91c2VyTWFuYWdlclxuICAgICAgLnF1ZXJ5U2Vzc2lvblN0YXR1cygpXG4gICAgICAudGhlbigoc2Vzc2lvbikgPT4ge1xuICAgICAgICB2YXIgcmFpc2VFdmVudCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgPT09IHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgcmFpc2VFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG5cbiAgICAgICAgICAgIGlmIChzZXNzaW9uLnNpZCA9PT0gdGhpcy5fc2lkKSB7XG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU2FtZSBzdWIgc3RpbGwgbG9nZ2VkIGluIGF0IE9QLCByZXN0YXJ0aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lOyBzZXNzaW9uX3N0YXRlOlwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHNlc3Npb24gc3RhdGUgaGFzIGNoYW5nZWQsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRGlmZmVyZW50IHN1YmplY3Qgc2lnbmVkIGludG8gT1A6XCIsXG4gICAgICAgICAgICAgIHNlc3Npb24uc3ViXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICBcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFpc2VFdmVudCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zdWIpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZEluKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgIFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBFcnJvciBjYWxsaW5nIHF1ZXJ5Q3VycmVudFNpZ25pblNlc3Npb247IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiLFxuICAgICAgICAgICAgZXJyLm1lc3NhZ2VcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tIFwiLi9VcmxVdGlsaXR5LmpzXCI7XG5pbXBvcnQgeyBTaWduaW5TdGF0ZSB9IGZyb20gXCIuL1NpZ25pblN0YXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1ZXN0IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIC8vIG1hbmRhdG9yeVxuICAgIHVybCxcbiAgICBjbGllbnRfaWQsXG4gICAgcmVkaXJlY3RfdXJpLFxuICAgIHJlc3BvbnNlX3R5cGUsXG4gICAgc2NvcGUsXG4gICAgYXV0aG9yaXR5LFxuICAgIC8vIG9wdGlvbmFsXG4gICAgZGF0YSxcbiAgICBwcm9tcHQsXG4gICAgZGlzcGxheSxcbiAgICBtYXhfYWdlLFxuICAgIHVpX2xvY2FsZXMsXG4gICAgaWRfdG9rZW5faGludCxcbiAgICBsb2dpbl9oaW50LFxuICAgIGFjcl92YWx1ZXMsXG4gICAgcmVzb3VyY2UsXG4gICAgcmVzcG9uc2VfbW9kZSxcbiAgICByZXF1ZXN0LFxuICAgIHJlcXVlc3RfdXJpLFxuICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgcmVxdWVzdF90eXBlLFxuICAgIGNsaWVudF9zZWNyZXQsXG4gICAgZXh0cmFUb2tlblBhcmFtcyxcbiAgICBza2lwVXNlckluZm8sXG4gIH0pIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgIH1cbiAgICBpZiAoIWNsaWVudF9pZCkge1xuICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xuICAgIH1cbiAgICBpZiAoIXJlZGlyZWN0X3VyaSkge1xuICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyByZWRpcmVjdF91cmkgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVkaXJlY3RfdXJpXCIpO1xuICAgIH1cbiAgICBpZiAoIXJlc3BvbnNlX3R5cGUpIHtcbiAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVzcG9uc2VfdHlwZSBwYXNzZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXNwb25zZV90eXBlXCIpO1xuICAgIH1cbiAgICBpZiAoIXNjb3BlKSB7XG4gICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHNjb3BlIHBhc3NlZFwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xuICAgIH1cbiAgICBpZiAoIWF1dGhvcml0eSkge1xuICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBhdXRob3JpdHkgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aG9yaXR5XCIpO1xuICAgIH1cblxuICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XG4gICAgbGV0IGNvZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKTtcblxuICAgIGlmICghcmVzcG9uc2VfbW9kZSkge1xuICAgICAgcmVzcG9uc2VfbW9kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpID8gXCJxdWVyeVwiIDogbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gbmV3IFNpZ25pblN0YXRlKHtcbiAgICAgIG5vbmNlOiBvaWRjLFxuICAgICAgZGF0YSxcbiAgICAgIGNsaWVudF9pZCxcbiAgICAgIGF1dGhvcml0eSxcbiAgICAgIHJlZGlyZWN0X3VyaSxcbiAgICAgIGNvZGVfdmVyaWZpZXI6IGNvZGUsXG4gICAgICByZXF1ZXN0X3R5cGUsXG4gICAgICByZXNwb25zZV9tb2RlLFxuICAgICAgY2xpZW50X3NlY3JldCxcbiAgICAgIHNjb3BlLFxuICAgICAgZXh0cmFUb2tlblBhcmFtcyxcbiAgICAgIHNraXBVc2VySW5mbyxcbiAgICB9KTtcblxuICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY2xpZW50X2lkXCIsIGNsaWVudF9pZCk7XG4gICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJyZWRpcmVjdF91cmlcIiwgcmVkaXJlY3RfdXJpKTtcbiAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlc3BvbnNlX3R5cGVcIiwgcmVzcG9uc2VfdHlwZSk7XG4gICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzY29wZVwiLCBzY29wZSk7XG5cbiAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xuICAgIGlmIChvaWRjKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xuICAgIH1cbiAgICBpZiAoY29kZSkge1xuICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKFxuICAgICAgICB1cmwsXG4gICAgICAgIFwiY29kZV9jaGFsbGVuZ2VcIixcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2RlX2NoYWxsZW5nZVxuICAgICAgKTtcbiAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY29kZV9jaGFsbGVuZ2VfbWV0aG9kXCIsIFwiUzI1NlwiKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9uYWwgPSB7XG4gICAgICBwcm9tcHQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgbWF4X2FnZSxcbiAgICAgIHVpX2xvY2FsZXMsXG4gICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgbG9naW5faGludCxcbiAgICAgIGFjcl92YWx1ZXMsXG4gICAgICByZXNvdXJjZSxcbiAgICAgIHJlcXVlc3QsXG4gICAgICByZXF1ZXN0X3VyaSxcbiAgICAgIHJlc3BvbnNlX21vZGUsXG4gICAgfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9uYWwpIHtcbiAgICAgIGlmIChvcHRpb25hbFtrZXldKSB7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgb3B0aW9uYWxba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGV4dHJhUXVlcnlQYXJhbXMpIHtcbiAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKTtcbiAgICB9XG5cbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHN0YXRpYyBpc09pZGMocmVzcG9uc2VfdHlwZSkge1xuICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiaWRfdG9rZW5cIjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHRbMF07XG4gIH1cblxuICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gXCJ0b2tlblwiO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdFswXTtcbiAgfVxuXG4gIHN0YXRpYyBpc0NvZGUocmVzcG9uc2VfdHlwZSkge1xuICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiY29kZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdFswXTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gXCIuL1VybFV0aWxpdHkuanNcIjtcblxuY29uc3QgT2lkY1Njb3BlID0gXCJvcGVuaWRcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25pblJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IodXJsLCBkZWxpbWl0ZXIgPSBcIiNcIikge1xuICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xuXG4gICAgdGhpcy5lcnJvciA9IHZhbHVlcy5lcnJvcjtcbiAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gdmFsdWVzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZXJyb3JfdXJpID0gdmFsdWVzLmVycm9yX3VyaTtcblxuICAgIHRoaXMuY29kZSA9IHZhbHVlcy5jb2RlO1xuICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gICAgdGhpcy5pZF90b2tlbiA9IHZhbHVlcy5pZF90b2tlbjtcbiAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSB2YWx1ZXMuc2Vzc2lvbl9zdGF0ZTtcbiAgICB0aGlzLmFjY2Vzc190b2tlbiA9IHZhbHVlcy5hY2Nlc3NfdG9rZW47XG4gICAgdGhpcy50b2tlbl90eXBlID0gdmFsdWVzLnRva2VuX3R5cGU7XG4gICAgdGhpcy5zY29wZSA9IHZhbHVlcy5zY29wZTtcbiAgICB0aGlzLnByb2ZpbGUgPSB1bmRlZmluZWQ7IC8vIHdpbGwgYmUgc2V0IGZyb20gUmVzcG9uc2VWYWxpZGF0b3JcblxuICAgIHRoaXMuZXhwaXJlc19pbiA9IHZhbHVlcy5leHBpcmVzX2luO1xuICB9XG5cbiAgZ2V0IGV4cGlyZXNfaW4oKSB7XG4gICAgaWYgKHRoaXMuZXhwaXJlc19hdCkge1xuICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cGlyZXNfYXQgLSBub3c7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgc2V0IGV4cGlyZXNfaW4odmFsdWUpIHtcbiAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09IFwibnVtYmVyXCIgJiYgZXhwaXJlc19pbiA+IDApIHtcbiAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICB0aGlzLmV4cGlyZXNfYXQgPSBub3cgKyBleHBpcmVzX2luO1xuICAgIH1cbiAgfVxuXG4gIGdldCBleHBpcmVkKCkge1xuICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xuICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgc2NvcGVzKCkge1xuICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XG4gIH1cblxuICBnZXQgaXNPcGVuSWRDb25uZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnNjb3Blcy5pbmRleE9mKE9pZGNTY29wZSkgPj0gMCB8fCAhIXRoaXMuaWRfdG9rZW47XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZS5qc1wiO1xuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tIFwiLi9Kb3NlVXRpbC5qc1wiO1xuaW1wb3J0IHJhbmRvbSBmcm9tIFwiLi9yYW5kb20uanNcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25pblN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbm9uY2UsXG4gICAgYXV0aG9yaXR5LFxuICAgIGNsaWVudF9pZCxcbiAgICByZWRpcmVjdF91cmksXG4gICAgY29kZV92ZXJpZmllcixcbiAgICByZXNwb25zZV9tb2RlLFxuICAgIGNsaWVudF9zZWNyZXQsXG4gICAgc2NvcGUsXG4gICAgZXh0cmFUb2tlblBhcmFtcyxcbiAgICBza2lwVXNlckluZm8sXG4gIH0gPSB7fSkge1xuICAgIHN1cGVyKGFyZ3VtZW50c1swXSk7XG5cbiAgICBpZiAobm9uY2UgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX25vbmNlID0gcmFuZG9tKCk7XG4gICAgfSBlbHNlIGlmIChub25jZSkge1xuICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZV92ZXJpZmllciA9PT0gdHJ1ZSkge1xuICAgICAgLy8gcmFuZG9tKCkgcHJvZHVjZXMgMzIgbGVuZ3RoXG4gICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xuICAgIH0gZWxzZSBpZiAoY29kZV92ZXJpZmllcikge1xuICAgICAgdGhpcy5fY29kZV92ZXJpZmllciA9IGNvZGVfdmVyaWZpZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29kZV92ZXJpZmllcikge1xuICAgICAgbGV0IGhhc2ggPSBKb3NlVXRpbC5oYXNoU3RyaW5nKHRoaXMuY29kZV92ZXJpZmllciwgXCJTSEEyNTZcIik7XG4gICAgICB0aGlzLl9jb2RlX2NoYWxsZW5nZSA9IEpvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGhhc2gpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaTtcbiAgICB0aGlzLl9hdXRob3JpdHkgPSBhdXRob3JpdHk7XG4gICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xuICAgIHRoaXMuX3Jlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlO1xuICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xuICAgIHRoaXMuX3Njb3BlID0gc2NvcGU7XG4gICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IGV4dHJhVG9rZW5QYXJhbXM7XG4gICAgdGhpcy5fc2tpcFVzZXJJbmZvID0gc2tpcFVzZXJJbmZvO1xuICB9XG5cbiAgZ2V0IG5vbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub25jZTtcbiAgfVxuICBnZXQgYXV0aG9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XG4gIH1cbiAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50X2lkO1xuICB9XG4gIGdldCByZWRpcmVjdF91cmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcbiAgfVxuICBnZXQgY29kZV92ZXJpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZV92ZXJpZmllcjtcbiAgfVxuICBnZXQgY29kZV9jaGFsbGVuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVfY2hhbGxlbmdlO1xuICB9XG4gIGdldCByZXNwb25zZV9tb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xuICB9XG4gIGdldCBjbGllbnRfc2VjcmV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xuICB9XG4gIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gIH1cbiAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XG4gIH1cbiAgZ2V0IHNraXBVc2VySW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tpcFVzZXJJbmZvO1xuICB9XG5cbiAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxuICAgICAgbm9uY2U6IHRoaXMubm9uY2UsXG4gICAgICBjb2RlX3ZlcmlmaWVyOiB0aGlzLmNvZGVfdmVyaWZpZXIsXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxuICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICBzY29wZTogdGhpcy5zY29wZSxcbiAgICAgIGV4dHJhVG9rZW5QYXJhbXM6IHRoaXMuZXh0cmFUb2tlblBhcmFtcyxcbiAgICAgIHNraXBVc2VySW5mbzogdGhpcy5za2lwVXNlckluZm8sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcbiAgICByZXR1cm4gbmV3IFNpZ25pblN0YXRlKGRhdGEpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tIFwiLi9VcmxVdGlsaXR5LmpzXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL1N0YXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWdub3V0UmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB1cmwsXG4gICAgaWRfdG9rZW5faGludCxcbiAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgZGF0YSxcbiAgICBleHRyYVF1ZXJ5UGFyYW1zLFxuICAgIHJlcXVlc3RfdHlwZSxcbiAgfSkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXCJTaWdub3V0UmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgIH1cblxuICAgIGlmIChpZF90b2tlbl9oaW50KSB7XG4gICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImlkX3Rva2VuX2hpbnRcIiwgaWRfdG9rZW5faGludCk7XG4gICAgfVxuXG4gICAgaWYgKHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xuICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKFxuICAgICAgICB1cmwsXG4gICAgICAgIFwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpXCIsXG4gICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVxuICAgICAgKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZSh7IGRhdGEsIHJlcXVlc3RfdHlwZSB9KTtcblxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBrZXksIGV4dHJhUXVlcnlQYXJhbXNba2V5XSk7XG4gICAgfVxuXG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tIFwiLi9VcmxVdGlsaXR5LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWdub3V0UmVzcG9uc2Uge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xuXG4gICAgdGhpcy5lcnJvciA9IHZhbHVlcy5lcnJvcjtcbiAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gdmFsdWVzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZXJyb3JfdXJpID0gdmFsdWVzLmVycm9yX3VyaTtcblxuICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU2lsZW50UmVuZXdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXNlck1hbmFnZXIpIHtcbiAgICB0aGlzLl91c2VyTWFuYWdlciA9IHVzZXJNYW5hZ2VyO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLl9jYWxsYmFjaykge1xuICAgICAgdGhpcy5fY2FsbGJhY2sgPSB0aGlzLl90b2tlbkV4cGlyaW5nLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XG5cbiAgICAgIC8vIHRoaXMgd2lsbCB0cmlnZ2VyIGxvYWRpbmcgb2YgdGhlIHVzZXIgc28gdGhlIGV4cGlyaW5nIGV2ZW50cyBjYW4gYmUgaW5pdGlhbGl6ZWRcbiAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyXG4gICAgICAgIC5nZXRVc2VyKClcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAvLyBkZWxpYmVyYXRlIG5vcFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcbiAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICBcIlNpbGVudFJlbmV3U2VydmljZS5zdGFydDogRXJyb3IgZnJvbSBnZXRVc2VyOlwiLFxuICAgICAgICAgICAgZXJyLm1lc3NhZ2VcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xuICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLnJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmcodGhpcy5fY2FsbGJhY2spO1xuICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrO1xuICAgIH1cbiAgfVxuXG4gIF90b2tlbkV4cGlyaW5nKCkge1xuICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnNpZ25pblNpbGVudCgpLnRoZW4oXG4gICAgICAodXNlcikgPT4ge1xuICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IFNpbGVudCB0b2tlbiByZW5ld2FsIHN1Y2Nlc3NmdWxcIlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBFcnJvciBmcm9tIHNpZ25pblNpbGVudDpcIixcbiAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gXCIuL0xvZy5qc1wiO1xuaW1wb3J0IHJhbmRvbSBmcm9tIFwiLi9yYW5kb20uanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IoeyBpZCwgZGF0YSwgY3JlYXRlZCwgcmVxdWVzdF90eXBlIH0gPSB7fSkge1xuICAgIHRoaXMuX2lkID0gaWQgfHwgcmFuZG9tKCk7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG5cbiAgICBpZiAodHlwZW9mIGNyZWF0ZWQgPT09IFwibnVtYmVyXCIgJiYgY3JlYXRlZCA+IDApIHtcbiAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jcmVhdGVkID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICB0aGlzLl9yZXF1ZXN0X3R5cGUgPSByZXF1ZXN0X3R5cGU7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGdldCBjcmVhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkO1xuICB9XG4gIGdldCByZXF1ZXN0X3R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcbiAgfVxuXG4gIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICBMb2cuZGVidWcoXCJTdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxuICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgTG9nLmRlYnVnKFwiU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclN0YWxlU3RhdGUoc3RvcmFnZSwgYWdlKSB7XG4gICAgdmFyIGN1dG9mZiA9IERhdGUubm93KCkgLyAxMDAwIC0gYWdlO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0QWxsS2V5cygpLnRoZW4oKGtleXMpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGtleXNcIiwga2V5cyk7XG5cbiAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgcCA9IHN0b3JhZ2UuZ2V0KGtleSkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKTtcblxuICAgICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgICAgXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IGdvdCBpdGVtIGZyb20ga2V5OiBcIixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgc3RhdGUuY3JlYXRlZFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBFcnJvciBwYXJzaW5nIHN0YXRlIGZvciBrZXlcIixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IG5vIGl0ZW0gaW4gc3RvcmFnZSBmb3Iga2V5OiBcIixcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlLnJlbW92ZShrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcbiAgICAgIH1cblxuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogd2FpdGluZyBvbiBwcm9taXNlIGNvdW50OlwiLFxuICAgICAgICBwcm9taXNlcy5sZW5ndGhcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbC5qc1wiO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9FdmVudC5qc1wiO1xuXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xuXG5leHBvcnQgY2xhc3MgVGltZXIgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRpbWVyID0gR2xvYmFsLnRpbWVyLCBub3dGdW5jID0gdW5kZWZpbmVkKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcblxuICAgIGlmIChub3dGdW5jKSB7XG4gICAgICB0aGlzLl9ub3dGdW5jID0gbm93RnVuYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbm93RnVuYyA9ICgpID0+IERhdGUubm93KCkgLyAxMDAwO1xuICAgIH1cbiAgfVxuXG4gIGdldCBub3coKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX25vd0Z1bmMoKSk7XG4gIH1cblxuICBpbml0KGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgIGR1cmF0aW9uID0gMTtcbiAgICB9XG4gICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XG5cbiAgICB2YXIgZXhwaXJhdGlvbiA9IHRoaXMubm93ICsgZHVyYXRpb247XG4gICAgaWYgKHRoaXMuZXhwaXJhdGlvbiA9PT0gZXhwaXJhdGlvbiAmJiB0aGlzLl90aW1lckhhbmRsZSkge1xuICAgICAgLy8gbm8gbmVlZCB0byByZWluaXRpYWxpemUgdG8gc2FtZSBleHBpcmF0aW9uLCBzbyBiYWlsIG91dFxuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlRpbWVyLmluaXQgdGltZXIgXCIgK1xuICAgICAgICAgIHRoaXMuX25hbWUgK1xuICAgICAgICAgIFwiIHNraXBwaW5nIGluaXRpYWxpemF0aW9uIHNpbmNlIGFscmVhZHkgaW5pdGlhbGl6ZWQgZm9yIGV4cGlyYXRpb246XCIsXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhbmNlbCgpO1xuXG4gICAgTG9nLmRlYnVnKFwiVGltZXIuaW5pdCB0aW1lciBcIiArIHRoaXMuX25hbWUgKyBcIiBmb3IgZHVyYXRpb246XCIsIGR1cmF0aW9uKTtcbiAgICB0aGlzLl9leHBpcmF0aW9uID0gZXhwaXJhdGlvbjtcblxuICAgIC8vIHdlJ3JlIHVzaW5nIGEgZmFpcmx5IHNob3J0IHRpbWVyIGFuZCB0aGVuIGNoZWNraW5nIHRoZSBleHBpcmF0aW9uIGluIHRoZVxuICAgIC8vIGNhbGxiYWNrIHRvIGhhbmRsZSBzY2VuYXJpb3Mgd2hlcmUgdGhlIGJyb3dzZXIgZGV2aWNlIHNsZWVwcywgYW5kIHRoZW5cbiAgICAvLyB0aGUgdGltZXJzIGVuZCB1cCBnZXR0aW5nIGRlbGF5ZWQuXG4gICAgdmFyIHRpbWVyRHVyYXRpb24gPSBUaW1lckR1cmF0aW9uO1xuICAgIGlmIChkdXJhdGlvbiA8IHRpbWVyRHVyYXRpb24pIHtcbiAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbChcbiAgICAgIHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksXG4gICAgICB0aW1lckR1cmF0aW9uICogMTAwMFxuICAgICk7XG4gIH1cblxuICBnZXQgZXhwaXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwaXJhdGlvbjtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5fdGltZXJIYW5kbGUpIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmNhbmNlbDogXCIsIHRoaXMuX25hbWUpO1xuICAgICAgdGhpcy5fdGltZXIuY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lckhhbmRsZSk7XG4gICAgICB0aGlzLl90aW1lckhhbmRsZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgX2NhbGxiYWNrKCkge1xuICAgIHZhciBkaWZmID0gdGhpcy5fZXhwaXJhdGlvbiAtIHRoaXMubm93O1xuICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmNhbGxiYWNrOyBcIiArIHRoaXMuX25hbWUgKyBcIiB0aW1lciBleHBpcmVzIGluOlwiLCBkaWZmKTtcblxuICAgIGlmICh0aGlzLl9leHBpcmF0aW9uIDw9IHRoaXMubm93KSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgc3VwZXIucmFpc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSBcIi4vSnNvblNlcnZpY2UuanNcIjtcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCIuL01ldGFkYXRhU2VydmljZS5qc1wiO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbkNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNldHRpbmdzLFxuICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLFxuICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IoKTtcbiAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gIH1cblxuICBleGNoYW5nZUNvZGUoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgYXJncy5jbGllbnRfaWQgPSBhcmdzLmNsaWVudF9pZCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgYXJncy5jbGllbnRfc2VjcmV0ID0gYXJncy5jbGllbnRfc2VjcmV0IHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9zZWNyZXQ7XG4gICAgYXJncy5yZWRpcmVjdF91cmkgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5yZWRpcmVjdF91cmk7XG5cbiAgICB2YXIgYmFzaWNBdXRoID0gdW5kZWZpbmVkO1xuICAgIHZhciBjbGllbnRfYXV0aGVudGljYXRpb24gPVxuICAgICAgYXJncy5fY2xpZW50X2F1dGhlbnRpY2F0aW9uIHx8IHRoaXMuX3NldHRpbmdzLl9jbGllbnRfYXV0aGVudGljYXRpb247XG4gICAgZGVsZXRlIGFyZ3MuX2NsaWVudF9hdXRoZW50aWNhdGlvbjtcblxuICAgIGlmICghYXJncy5jb2RlKSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGUgcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY29kZSBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuICAgIGlmICghYXJncy5yZWRpcmVjdF91cmkpIHtcbiAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gcmVkaXJlY3RfdXJpIHBhc3NlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuICAgIGlmICghYXJncy5jb2RlX3ZlcmlmaWVyKSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGVfdmVyaWZpZXIgcGFzc2VkXCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY29kZV92ZXJpZmllciBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuICAgIGlmICghYXJncy5jbGllbnRfaWQpIHtcbiAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNsaWVudF9pZCBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuICAgIGlmICghYXJncy5jbGllbnRfc2VjcmV0ICYmIGNsaWVudF9hdXRoZW50aWNhdGlvbiA9PSBcImNsaWVudF9zZWNyZXRfYmFzaWNcIikge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjbGllbnRfc2VjcmV0IHBhc3NlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNsaWVudF9zZWNyZXQgaXMgcmVxdWlyZWRcIikpO1xuICAgIH1cblxuICAgIC8vIFNlbmRpbmcgdGhlIGNsaWVudCBjcmVkZW50aWFscyB1c2luZyB0aGUgQmFzaWMgQXV0aCBtZXRob2RcbiAgICBpZiAoY2xpZW50X2F1dGhlbnRpY2F0aW9uID09IFwiY2xpZW50X3NlY3JldF9iYXNpY1wiKSB7XG4gICAgICBiYXNpY0F1dGggPSBhcmdzLmNsaWVudF9pZCArIFwiOlwiICsgYXJncy5jbGllbnRfc2VjcmV0O1xuICAgICAgZGVsZXRlIGFyZ3MuY2xpZW50X2lkO1xuICAgICAgZGVsZXRlIGFyZ3MuY2xpZW50X3NlY3JldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoZmFsc2UpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBSZWNlaXZlZCB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZVxuICAgICAgICAucG9zdEZvcm0odXJsLCBhcmdzLCBiYXNpY0F1dGgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogcmVzcG9uc2UgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MgPSB7fSkge1xuICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcbiAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICBhcmdzLmNsaWVudF9zZWNyZXQgPSBhcmdzLmNsaWVudF9zZWNyZXQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcblxuICAgIHZhciBiYXNpY0F1dGggPSB1bmRlZmluZWQ7XG4gICAgdmFyIGNsaWVudF9hdXRoZW50aWNhdGlvbiA9XG4gICAgICBhcmdzLl9jbGllbnRfYXV0aGVudGljYXRpb24gfHwgdGhpcy5fc2V0dGluZ3MuX2NsaWVudF9hdXRoZW50aWNhdGlvbjtcbiAgICBkZWxldGUgYXJncy5fY2xpZW50X2F1dGhlbnRpY2F0aW9uO1xuXG4gICAgaWYgKCFhcmdzLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBObyByZWZyZXNoX3Rva2VuIHBhc3NlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZnJlc2hfdG9rZW4gaXMgcmVxdWlyZWRcIikpO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNsaWVudF9pZCBpcyByZXF1aXJlZFwiKSk7XG4gICAgfVxuXG4gICAgLy8gU2VuZGluZyB0aGUgY2xpZW50IGNyZWRlbnRpYWxzIHVzaW5nIHRoZSBCYXNpYyBBdXRoIG1ldGhvZFxuICAgIGlmIChjbGllbnRfYXV0aGVudGljYXRpb24gPT0gXCJjbGllbnRfc2VjcmV0X2Jhc2ljXCIpIHtcbiAgICAgIGJhc2ljQXV0aCA9IGFyZ3MuY2xpZW50X2lkICsgXCI6XCIgKyBhcmdzLmNsaWVudF9zZWNyZXQ7XG4gICAgICBkZWxldGUgYXJncy5jbGllbnRfaWQ7XG4gICAgICBkZWxldGUgYXJncy5jbGllbnRfc2VjcmV0O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbigodXJsKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XG5cbiAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZVxuICAgICAgICAucG9zdEZvcm0odXJsLCBhcmdzLCBiYXNpY0F1dGgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiByZXNwb25zZSByZWNlaXZlZFwiKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCIuL01ldGFkYXRhU2VydmljZS5qc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsLmpzXCI7XG5cbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xuY29uc3QgUmVmcmVzaFRva2VuVHlwZUhpbnQgPSBcInJlZnJlc2hfdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNldHRpbmdzLFxuICAgIC8vWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LFxuICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmN0b3I6IE5vIHNldHRpbmdzIHByb3ZpZGVkXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2V0dGluZ3MgcHJvdmlkZWQuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgLy90aGlzLl9YTUxIdHRwUmVxdWVzdEN0b3IgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XG4gICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICB9XG5cbiAgcmV2b2tlKHRva2VuLCByZXF1aXJlZCwgdHlwZSA9IFwiYWNjZXNzX3Rva2VuXCIpIHtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBObyB0b2tlbiBwcm92aWRlZFwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSAhPT0gQWNjZXNzVG9rZW5UeXBlSGludCAmJiB0eXBlICE9IFJlZnJlc2hUb2tlblR5cGVIaW50KSB7XG4gICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBJbnZhbGlkIHRva2VuIHR5cGVcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuIHR5cGUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkudGhlbigodXJsKSA9PiB7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90IHJlcXVpcmVkLCBzbyBkb24ndCBlcnJvciBhbmQganVzdCByZXR1cm5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZva2luZyBcIiArIHR5cGUpO1xuICAgICAgdmFyIGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcbiAgICAgIHJldHVybiB0aGlzLl9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7bWV0aG9kOiBcIlBPU1RcIiwgaGVhZGVyczp7fSwgYm9keTogXCJcIn1cbiAgICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgbGV0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgYm9keS5hcHBlbmQoXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcbiAgICBpZiAoY2xpZW50X3NlY3JldCkge1xuICAgICAgYm9keS5hcHBlbmQoXCJjbGllbnRfc2VjcmV0XCIsIGNsaWVudF9zZWNyZXQpO1xuICAgIH1cbiAgICBib2R5LmFwcGVuZChcInRva2VuX3R5cGVfaGludFwiLCB0eXBlKTtcbiAgICBib2R5LmFwcGVuZChcInRva2VuXCIsIHRva2VuKTtcbiAgICBvcHRpb25zLmJvZHkgPSBib2R5LnRvU3RyaW5nKCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmMgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgTG9nLmRlYnVnKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHJjLnN0YXR1cyk7XG4gICAgICBpZiAocmMub2sgJiYgcmMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyYy5zdGF0dXNUZXh0ICsgXCIgKFwiICsgcmMuc3RhdHVzICsgXCIpXCIpXG4gICAgICB9XG4gICAgfSBjYXRjaChleCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTmV0d29yayBFcnJvci5cIiwgZXgubWVzc2FnZSlcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWwuanNcIjtcblxuZXhwb3J0IGNsYXNzIFVybFV0aWxpdHkge1xuICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiP1wiKSA8IDApIHtcbiAgICAgIHVybCArPSBcIj9cIjtcbiAgICB9XG5cbiAgICBpZiAodXJsW3VybC5sZW5ndGggLSAxXSAhPT0gXCI/XCIpIHtcbiAgICAgIHVybCArPSBcIiZcIjtcbiAgICB9XG5cbiAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICAgIHVybCArPSBcIj1cIjtcbiAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VVcmxGcmFnbWVudCh2YWx1ZSwgZGVsaW1pdGVyID0gXCIjXCIsIGdsb2JhbCA9IEdsb2JhbCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhbHVlID0gZ2xvYmFsLmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgdmFyIGlkeCA9IHZhbHVlLmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcbiAgICB9XG5cbiAgICBpZiAoZGVsaW1pdGVyID09PSBcIj9cIikge1xuICAgICAgLy8gaWYgd2UncmUgZG9pbmcgcXVlcnksIHRoZW4gc3RyaXAgb2ZmIGhhc2ggZnJhZ21lbnQgYmVmb3JlIHdlIHBhcnNlXG4gICAgICBpZHggPSB2YWx1ZS5pbmRleE9mKFwiI1wiKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBpZHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSB7fSxcbiAgICAgIHJlZ2V4ID0gLyhbXiY9XSspPShbXiZdKikvZyxcbiAgICAgIG07XG5cbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyh2YWx1ZSkpKSB7XG4gICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgbVsyXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpXG4gICAgICApO1xuICAgICAgaWYgKGNvdW50ZXIrKyA+IDUwKSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudDogcmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIixcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBcIlJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCIsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBwYXJhbXMpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgaWRfdG9rZW4sXG4gICAgc2Vzc2lvbl9zdGF0ZSxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gICAgcmVmcmVzaF90b2tlbixcbiAgICB0b2tlbl90eXBlLFxuICAgIHNjb3BlLFxuICAgIHByb2ZpbGUsXG4gICAgZXhwaXJlc19hdCxcbiAgICBzdGF0ZSxcbiAgfSkge1xuICAgIHRoaXMuaWRfdG9rZW4gPSBpZF90b2tlbjtcbiAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xuICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XG4gICAgdGhpcy50b2tlbl90eXBlID0gdG9rZW5fdHlwZTtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICB0aGlzLmV4cGlyZXNfYXQgPSBleHBpcmVzX2F0O1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCBleHBpcmVzX2luKCkge1xuICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcbiAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICByZXR1cm4gdGhpcy5leHBpcmVzX2F0IC0gbm93O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHNldCBleHBpcmVzX2luKHZhbHVlKSB7XG4gICAgbGV0IGV4cGlyZXNfaW4gPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSBcIm51bWJlclwiICYmIGV4cGlyZXNfaW4gPiAwKSB7XG4gICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgdGhpcy5leHBpcmVzX2F0ID0gbm93ICsgZXhwaXJlc19pbjtcbiAgICB9XG4gIH1cblxuICBnZXQgZXhwaXJlZCgpIHtcbiAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcbiAgICBpZiAoZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXhwaXJlc19pbiA8PSAwO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHNjb3BlcygpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuICB9XG5cbiAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXIudG9TdG9yYWdlU3RyaW5nXCIpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcbiAgICAgIHNlc3Npb25fc3RhdGU6IHRoaXMuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW4sXG4gICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXG4gICAgICB0b2tlbl90eXBlOiB0aGlzLnRva2VuX3R5cGUsXG4gICAgICBzY29wZTogdGhpcy5zY29wZSxcbiAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcbiAgICAgIGV4cGlyZXNfYXQ6IHRoaXMuZXhwaXJlc19hdCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgTG9nLmRlYnVnKFwiVXNlci5mcm9tU3RvcmFnZVN0cmluZ1wiKTtcbiAgICByZXR1cm4gbmV3IFVzZXIoSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKSk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSBcIi4vSnNvblNlcnZpY2UuanNcIjtcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCIuL01ldGFkYXRhU2VydmljZS5qc1wiO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gXCIuL0pvc2VVdGlsLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5ncyxcbiAgICBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSxcbiAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxuICAgIGpvc2VVdGlsID0gSm9zZVV0aWxcbiAgKSB7XG4gICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZFwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgdGhpcy5fZ2V0Q2xhaW1zRnJvbUp3dC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgfVxuXG4gIGdldENsYWltcyh0b2tlbikge1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IE5vIHRva2VuIHBhc3NlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFVzZXJJbmZvRW5kcG9pbnQoKS50aGVuKCh1cmwpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IHJlY2VpdmVkIHVzZXJpbmZvIHVybFwiLCB1cmwpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKChjbGFpbXMpID0+IHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogY2xhaW1zIHJlY2VpdmVkXCIsIGNsYWltcyk7XG4gICAgICAgIHJldHVybiBjbGFpbXM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRDbGFpbXNGcm9tSnd0KHJlcSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgand0ID0gdGhpcy5fam9zZVV0aWwucGFyc2VKd3QocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlciB8fCAhand0LnBheWxvYWQpIHtcbiAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgIFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBGYWlsZWQgdG8gcGFyc2UgSldUXCIsXG4gICAgICAgICAgand0XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XG5cbiAgICAgIGxldCBpc3N1ZXJQcm9taXNlO1xuICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xuICAgICAgICBjYXNlIFwiT1BcIjpcbiAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQU5ZXCI6XG4gICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShqd3QucGF5bG9hZC5pc3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3MudXNlckluZm9Kd3RJc3N1ZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNzdWVyUHJvbWlzZS50aGVuKChpc3N1ZXIpID0+IHtcbiAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgIFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBSZWNlaXZlZCBpc3N1ZXI6XCIgKyBpc3N1ZXJcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbigoa2V5cykgPT4ge1xuICAgICAgICAgIGlmICgha2V5cykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICBcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBSZWNlaXZlZCBzaWduaW5nIGtleXNcIik7XG4gICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICBpZiAoIWtpZCkge1xuICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XG4gICAgICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcbiAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGF1ZGllbmNlID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuXG4gICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICBcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogVmFsaWRhaW5nIEpXVDsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLFxuICAgICAgICAgICAgY2xvY2tTa2V3SW5TZWNvbmRzXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbFxuICAgICAgICAgICAgLnZhbGlkYXRlSnd0KFxuICAgICAgICAgICAgICByZXEucmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIGlzc3VlcixcbiAgICAgICAgICAgICAgYXVkaWVuY2UsXG4gICAgICAgICAgICAgIGNsb2NrU2tld0luU2Vjb25kcyxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEVycm9yIHBhcnNpbmcgSldUIHJlc3BvbnNlXCIsXG4gICAgICAgIGUubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJlamVjdChlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XG4gICAgdmFyIGt0eSA9IG51bGw7XG4gICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcbiAgICAgIGt0eSA9IFwiUlNBXCI7XG4gICAgfSBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XG4gICAgICBrdHkgPSBcIlBTXCI7XG4gICAgfSBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIkVTXCIpKSB7XG4gICAgICBrdHkgPSBcIkVDXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBMb2cuZGVidWcoXG4gICAgICBcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLFxuICAgICAga3R5XG4gICAgKTtcblxuICAgIGtleXMgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ga2V5Lmt0eSA9PT0ga3R5O1xuICAgIH0pO1xuXG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsXG4gICAgICBrdHksXG4gICAgICBrZXlzLmxlbmd0aFxuICAgICk7XG5cbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBPaWRjQ2xpZW50IH0gZnJvbSBcIi4vT2lkY0NsaWVudC5qc1wiO1xuaW1wb3J0IHsgVXNlck1hbmFnZXJTZXR0aW5ncyB9IGZyb20gXCIuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5pbXBvcnQgeyBVc2VyTWFuYWdlckV2ZW50cyB9IGZyb20gXCIuL1VzZXJNYW5hZ2VyRXZlbnRzLmpzXCI7XG5pbXBvcnQgeyBTaWxlbnRSZW5ld1NlcnZpY2UgfSBmcm9tIFwiLi9TaWxlbnRSZW5ld1NlcnZpY2UuanNcIjtcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSBcIi4vU2Vzc2lvbk1vbml0b3IuanNcIjtcbmltcG9ydCB7IFNpZ25pblJlcXVlc3QgfSBmcm9tIFwiLi9TaWduaW5SZXF1ZXN0XCI7XG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tIFwiLi9Ub2tlblJldm9jYXRpb25DbGllbnQuanNcIjtcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSBcIi4vVG9rZW5DbGllbnQuanNcIjtcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSBcIi4vSm9zZVV0aWwuanNcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNldHRpbmdzID0ge30sXG4gICAgU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciA9IFNpbGVudFJlbmV3U2VydmljZSxcbiAgICBTZXNzaW9uTW9uaXRvckN0b3IgPSBTZXNzaW9uTW9uaXRvcixcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yID0gVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxuICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50LFxuICAgIGpvc2VVdGlsID0gSm9zZVV0aWxcbiAgKSB7XG4gICAgaWYgKCEoc2V0dGluZ3MgaW5zdGFuY2VvZiBVc2VyTWFuYWdlclNldHRpbmdzKSkge1xuICAgICAgc2V0dGluZ3MgPSBuZXcgVXNlck1hbmFnZXJTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgfVxuICAgIHN1cGVyKHNldHRpbmdzKTtcblxuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBVc2VyTWFuYWdlckV2ZW50cyhzZXR0aW5ncyk7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlID0gbmV3IFNpbGVudFJlbmV3U2VydmljZUN0b3IodGhpcyk7XG5cbiAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlVzZXJNYW5hZ2VyLmN0b3I6IGF1dG9tYXRpY1NpbGVudFJlbmV3IGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2lsZW50IHJlbmV3XCJcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXJ0U2lsZW50UmVuZXcoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xuICAgICAgTG9nLmRlYnVnKFxuICAgICAgICBcIlVzZXJNYW5hZ2VyLmN0b3I6IG1vbml0b3JTZXNzaW9uIGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2Vzc2lvbiBtb25pdG9yXCJcbiAgICAgICk7XG4gICAgICB0aGlzLl9zZXNzaW9uTW9uaXRvciA9IG5ldyBTZXNzaW9uTW9uaXRvckN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50ID0gbmV3IFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgfVxuXG4gIGdldCBfcmVkaXJlY3ROYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucmVkaXJlY3ROYXZpZ2F0b3I7XG4gIH1cbiAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5wb3B1cE5hdmlnYXRvcjtcbiAgfVxuICBnZXQgX2lmcmFtZU5hdmlnYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pZnJhbWVOYXZpZ2F0b3I7XG4gIH1cbiAgZ2V0IF91c2VyU3RvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudXNlclN0b3JlO1xuICB9XG5cbiAgZ2V0IGV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbG9hZGVkXCIpO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuZ2V0VXNlcjogdXNlciBub3QgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcihudWxsKS50aGVuKCgpID0+IHtcbiAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucmVtb3ZlVXNlcjogdXNlciByZW1vdmVkIGZyb20gc3RvcmFnZVwiKTtcbiAgICAgIHRoaXMuX2V2ZW50cy51bmxvYWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25pblJlZGlyZWN0KGFyZ3MgPSB7fSkge1xuICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpyXCI7XG4gICAgbGV0IG5hdlBhcmFtcyA9IHtcbiAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLCBuYXZQYXJhbXMpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3Q6IHN1Y2Nlc3NmdWxcIik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBzaWduaW5SZWRpcmVjdENhbGxiYWNrKHVybCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgIExvZy5pbmZvKFxuICAgICAgICAgIFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsXG4gICAgICAgICAgdXNlci5wcm9maWxlLnN1YlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBubyBzdWJcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbmluUG9wdXAoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnBcIjtcbiAgICBsZXQgdXJsID1cbiAgICAgIGFyZ3MucmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIExvZy5lcnJvcihcbiAgICAgICAgXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcIk5vIHBvcHVwX3JlZGlyZWN0X3VyaSBvciByZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICBhcmdzLmRpc3BsYXkgPSBcInBvcHVwXCI7XG5cbiAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX3BvcHVwTmF2aWdhdG9yLCB7XG4gICAgICBzdGFydFVybDogdXJsLFxuICAgICAgcG9wdXBXaW5kb3dGZWF0dXJlczpcbiAgICAgICAgYXJncy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyxcbiAgICAgIHBvcHVwV2luZG93VGFyZ2V0OlxuICAgICAgICBhcmdzLnBvcHVwV2luZG93VGFyZ2V0IHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dUYXJnZXQsXG4gICAgfSkudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgTG9nLmluZm8oXG4gICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBzaWduaW5Qb3B1cCBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIixcbiAgICAgICAgICAgIHVzZXIucHJvZmlsZS5zdWJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IG5vIHN1YlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9KTtcbiAgfVxuICBzaWduaW5Qb3B1cENhbGxiYWNrKHVybCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgIExvZy5pbmZvKFxuICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLFxuICAgICAgICAgICAgICB1c2VyLnByb2ZpbGUuc3ViXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBMb2cuZXJyb3IoXG4gICAgICAgICAgXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrIGVycm9yOiBcIiArIGVyciAmJiBlcnIubWVzc2FnZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgLy8gZmlyc3QgZGV0ZXJtaW5lIGlmIHdlIGhhdmUgYSByZWZyZXNoIHRva2VuLCBvciBuZWVkIHRvIHVzZSBpZnJhbWVcbiAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlciAmJiB1c2VyLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgYXJncy5yZWZyZXNoX3Rva2VuID0gdXNlci5yZWZyZXNoX3Rva2VuO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnNcIjtcbiAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID1cbiAgICAgICAgICBhcmdzLmlkX3Rva2VuX2hpbnQgfHxcbiAgICAgICAgICAodGhpcy5zZXR0aW5ncy5pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcgJiYgdXNlciAmJiB1c2VyLmlkX3Rva2VuKTtcbiAgICAgICAgaWYgKHVzZXIgJiYgdGhpcy5fc2V0dGluZ3MudmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KSB7XG4gICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQsIHN1YmplY3QgcHJpb3IgdG8gc2lsZW50IHJlbmV3OiBcIixcbiAgICAgICAgICAgIHVzZXIucHJvZmlsZS5zdWJcbiAgICAgICAgICApO1xuICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfdXNlUmVmcmVzaFRva2VuKGFyZ3MgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLl90b2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIGFjY2VzcyB0b2tlbiByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gYWNjZXNzIHRva2VuIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICBsZXQgaWRUb2tlblZhbGlkYXRpb24gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICBpZiAocmVzdWx0LmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBpZFRva2VuVmFsaWRhdGlvbiA9IHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbihcbiAgICAgICAgICAgICAgdXNlci5wcm9maWxlLFxuICAgICAgICAgICAgICByZXN1bHQuaWRfdG9rZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGlkVG9rZW5WYWxpZGF0aW9uLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IHJlZnJlc2ggdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbiB8fCB1c2VyLmlkX3Rva2VuO1xuICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSByZXN1bHQuYWNjZXNzX3Rva2VuO1xuICAgICAgICAgICAgdXNlci5yZWZyZXNoX3Rva2VuID0gcmVzdWx0LnJlZnJlc2hfdG9rZW4gfHwgdXNlci5yZWZyZXNoX3Rva2VuO1xuICAgICAgICAgICAgdXNlci5leHBpcmVzX2luID0gcmVzdWx0LmV4cGlyZXNfaW47XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XG4gICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbihwcm9maWxlLCBpZF90b2tlbikge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbigoaXNzdWVyKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5nZXRFcG9jaFRpbWUoKS50aGVuKChub3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsXG4gICAgICAgICAgLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhcbiAgICAgICAgICAgIGlkX3Rva2VuLFxuICAgICAgICAgICAgaXNzdWVyLFxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkLFxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3LFxuICAgICAgICAgICAgbm93XG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogRmFpbGVkIHRvIHZhbGlkYXRlIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5zdWIgIT09IHByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IHN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJzdWIgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggY3VycmVudCBzdWJcIilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF1dGhfdGltZSAmJiBwYXlsb2FkLmF1dGhfdGltZSAhPT0gcHJvZmlsZS5hdXRoX3RpbWUpIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBcImF1dGhfdGltZSBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhdXRoX3RpbWVcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gcHJvZmlsZS5henApIHtcbiAgICAgICAgICAgICAgTG9nLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXpwIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF6cFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJhenAgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXpwXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuYXpwICYmIHByb2ZpbGUuYXpwKSB7XG4gICAgICAgICAgICAgIExvZy5lcnJvcihcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiYXpwIG5vdCBpbiBpZF90b2tlbiwgYnV0IHByZXNlbnQgaW4gb3JpZ2luYWwgaWRfdG9rZW5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3NpZ25pblNpbGVudElmcmFtZShhcmdzID0ge30pIHtcbiAgICBsZXQgdXJsID1cbiAgICAgIGFyZ3MucmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHxcbiAgICAgIHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgIGlmICghdXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgIH1cblxuICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgIGFyZ3MucHJvbXB0ID0gYXJncy5wcm9tcHQgfHwgXCJub25lXCI7XG5cbiAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xuICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OlxuICAgICAgICBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXQsXG4gICAgfSkudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgTG9nLmluZm8oXG4gICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsXG4gICAgICAgICAgICB1c2VyLnByb2ZpbGUuc3ViXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogbm8gc3ViXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbmluU2lsZW50Q2FsbGJhY2sodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pbkNhbGxiYWNrKHVybCwgdGhpcy5faWZyYW1lTmF2aWdhdG9yKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50Q2FsbGJhY2s6IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLFxuICAgICAgICAgICAgdXNlci5wcm9maWxlLnN1YlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnRDYWxsYmFjazogbm8gc3ViXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbmluQ2FsbGJhY2sodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsKS50aGVuKCh7IHN0YXRlLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnJcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5SZWRpcmVjdENhbGxiYWNrKHVybCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5Qb3B1cENhbGxiYWNrKHVybCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnNcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBzaWdub3V0Q2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgIHJldHVybiB0aGlzLnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwpLnRoZW4oKHsgc3RhdGUsIHJlc3BvbnNlIH0pID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzbzpwXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaWdub3V0UG9wdXBDYWxsYmFjayh1cmwsIGtlZXBPcGVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaW52YWxpZCByZXNwb25zZV90eXBlIGluIHN0YXRlXCIpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcbiAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6c1wiOyAvLyB0aGlzIGFjdHMgbGlrZSBhIHNpZ25pbiBzaWxlbnRcbiAgICBsZXQgdXJsID1cbiAgICAgIGFyZ3MucmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHxcbiAgICAgIHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgIGlmICghdXJsKSB7XG4gICAgICBMb2cuZXJyb3IoXG4gICAgICAgIFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgIH1cblxuICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgIGFyZ3MucHJvbXB0ID0gXCJub25lXCI7XG4gICAgYXJncy5yZXNwb25zZV90eXBlID1cbiAgICAgIGFyZ3MucmVzcG9uc2VfdHlwZSB8fCB0aGlzLnNldHRpbmdzLnF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICAgIGFyZ3Muc2NvcGUgPSBhcmdzLnNjb3BlIHx8IFwib3BlbmlkXCI7XG4gICAgYXJncy5za2lwVXNlckluZm8gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xuICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OlxuICAgICAgICBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXQsXG4gICAgfSkudGhlbigobmF2UmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZShuYXZSZXNwb25zZS51cmwpXG4gICAgICAgIC50aGVuKChzaWduaW5SZXNwb25zZSkgPT4ge1xuICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogZ290IHNpZ25pbiByZXNwb25zZVwiKTtcblxuICAgICAgICAgIGlmIChzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlICYmIHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLFxuICAgICAgICAgICAgICBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1YlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXG4gICAgICAgICAgICAgIHNpZDogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcInF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzZnVsLCB1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImxvZ2luX3JlcXVpcmVkXCIgfHxcbiAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJjb25zZW50X3JlcXVpcmVkXCIgfHxcbiAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJpbnRlcmFjdGlvbl9yZXF1aXJlZFwiIHx8XG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWRcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIExvZy5pbmZvKFxuICAgICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2VzcyBmb3IgYW5vbnltb3VzIHVzZXJcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IGVyci5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oXG4gICAgICAobmF2UmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkVuZChuYXZSZXNwb25zZS51cmwsIGFyZ3MpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgX3NpZ25pblN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKChoYW5kbGUpID0+IHtcbiAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduaW5SZXF1ZXN0KGFyZ3MpXG4gICAgICAgIC50aGVuKChzaWduaW5SZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3Qgc2lnbmluIHJlcXVlc3RcIik7XG5cbiAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbmluUmVxdWVzdC51cmw7XG4gICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbmluUmVxdWVzdC5zdGF0ZS5pZDtcblxuICAgICAgICAgIHJldHVybiBoYW5kbGUubmF2aWdhdGUobmF2aWdhdG9yUGFyYW1zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIF9zaWduaW5FbmQodXJsLCBhcmdzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbmluUmVzcG9uc2UodXJsKS50aGVuKChzaWduaW5SZXNwb25zZSkgPT4ge1xuICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogZ290IHNpZ25pbiByZXNwb25zZVwiKTtcblxuICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XG5cbiAgICAgIGlmIChhcmdzLmN1cnJlbnRfc3ViKSB7XG4gICAgICAgIGlmIChhcmdzLmN1cnJlbnRfc3ViICE9PSB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgZG9lcyBub3QgbWF0Y2ggdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pbi4gc3ViIGZyb20gc2lnbmluOiBcIixcbiAgICAgICAgICAgIHVzZXIucHJvZmlsZS5zdWJcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJsb2dpbl9yZXF1aXJlZFwiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgbWF0Y2hlcyB1c2VyIHJldHVybmVkIGZyb20gc2lnbmluXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogdXNlciBzdG9yZWRcIik7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfc2lnbmluQ2FsbGJhY2sodXJsLCBuYXZpZ2F0b3IpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluQ2FsbGJhY2tcIik7XG4gICAgbGV0IHVzZVF1ZXJ5ID1cbiAgICAgIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgPT09IFwicXVlcnlcIiB8fFxuICAgICAgKCF0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlICYmXG4gICAgICAgIFNpZ25pblJlcXVlc3QuaXNDb2RlKHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGUpKTtcbiAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xuICAgIHJldHVybiBuYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCB1bmRlZmluZWQsIGRlbGltaXRlcik7XG4gIH1cblxuICBzaWdub3V0UmVkaXJlY3QoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnJcIjtcbiAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID1cbiAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIGlmIChwb3N0TG9nb3V0UmVkaXJlY3RVcmkpIHtcbiAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdExvZ291dFJlZGlyZWN0VXJpO1xuICAgIH1cbiAgICBsZXQgbmF2UGFyYW1zID0ge1xuICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGU6IGFyZ3MudXNlUmVwbGFjZVRvTmF2aWdhdGUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLCBuYXZQYXJhbXMpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcbiAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic286cFwiO1xuICAgIGxldCB1cmwgPVxuICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHxcbiAgICAgIHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHVybDtcbiAgICBhcmdzLmRpc3BsYXkgPSBcInBvcHVwXCI7XG4gICAgaWYgKGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKSB7XG4gICAgICAvLyB3ZSdyZSBwdXR0aW5nIGEgZHVtbXkgZW50cnkgaW4gaGVyZSBiZWNhdXNlIHdlXG4gICAgICAvLyBuZWVkIGEgdW5pcXVlIGlkIGZyb20gdGhlIHN0YXRlIGZvciBub3RpZmljYXRpb25cbiAgICAgIC8vIHRvIHRoZSBwYXJlbnQgd2luZG93LCB3aGljaCBpcyBuZWNlc3NhcnkgaWYgd2VcbiAgICAgIC8vIHBsYW4gdG8gcmV0dXJuIGJhY2sgdG8gdGhlIGNsaWVudCBhZnRlciBzaWdub3V0XG4gICAgICAvLyBhbmQgc28gd2UgY2FuIGNsb3NlIHRoZSBwb3B1cCBhZnRlciBzaWdub3V0XG4gICAgICBhcmdzLnN0YXRlID0gYXJncy5zdGF0ZSB8fCB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xuICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6XG4gICAgICAgIGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICBwb3B1cFdpbmRvd1RhcmdldDpcbiAgICAgICAgYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0LFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXA6IHN1Y2Nlc3NmdWxcIik7XG4gICAgfSk7XG4gIH1cbiAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgIGlmICh0eXBlb2Yga2VlcE9wZW4gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHVybCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIGtlZXBPcGVuID0gdXJsO1xuICAgICAgdXJsID0gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgZGVsaW1pdGVyID0gXCI/XCI7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yLmNhbGxiYWNrKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikudGhlbigoKSA9PiB7XG4gICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRQb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NpZ25vdXQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oXG4gICAgICAobmF2UmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQobmF2UmVzcG9uc2UudXJsKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIF9zaWdub3V0U3RhcnQoYXJncyA9IHt9LCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbigoaGFuZGxlKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XG5cbiAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBsb2FkZWQgY3VycmVudCB1c2VyIGZyb20gc3RvcmFnZVwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXRcbiAgICAgICAgICAgID8gdGhpcy5fcmV2b2tlSW50ZXJuYWwodXNlcilcbiAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgcmV0dXJuIHJldm9rZVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB2YXIgaWRfdG9rZW4gPSBhcmdzLmlkX3Rva2VuX2hpbnQgfHwgKHVzZXIgJiYgdXNlci5pZF90b2tlbik7XG4gICAgICAgICAgICBpZiAoaWRfdG9rZW4pIHtcbiAgICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogU2V0dGluZyBpZF90b2tlbiBpbnRvIHNpZ25vdXQgcmVxdWVzdFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVVc2VyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIExvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IHVzZXIgcmVtb3ZlZCwgY3JlYXRpbmcgc2lnbm91dCByZXF1ZXN0XCJcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWdub3V0UmVxdWVzdChhcmdzKS50aGVuKChzaWdub3V0UmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGdvdCBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgIGlmIChzaWdub3V0UmVxdWVzdC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbm91dFJlcXVlc3Quc3RhdGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUubmF2aWdhdGUobmF2aWdhdG9yUGFyYW1zKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgIFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfc2lnbm91dEVuZCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbm91dFJlc3BvbnNlKHVybCkudGhlbigoc2lnbm91dFJlc3BvbnNlKSA9PiB7XG4gICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dEVuZDogZ290IHNpZ25vdXQgcmVzcG9uc2VcIik7XG5cbiAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XG4gICAgfSk7XG4gIH1cblxuICByZXZva2VBY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFxuICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiByZW1vdmluZyB0b2tlbiBwcm9wZXJ0aWVzIGZyb20gdXNlciBhbmQgcmUtc3RvcmluZ1wiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1c2VyLmFjY2Vzc190b2tlbiA9IG51bGw7XG4gICAgICAgICAgICB1c2VyLnJlZnJlc2hfdG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcbiAgICAgICAgICAgIHVzZXIudG9rZW5fdHlwZSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IHVzZXIgc3RvcmVkXCIpO1xuICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiBhY2Nlc3MgdG9rZW4gcmV2b2tlZCBzdWNjZXNzZnVsbHlcIlxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBfcmV2b2tlSW50ZXJuYWwodXNlciwgcmVxdWlyZWQpIHtcbiAgICBpZiAodXNlcikge1xuICAgICAgdmFyIGFjY2Vzc190b2tlbiA9IHVzZXIuYWNjZXNzX3Rva2VuO1xuICAgICAgdmFyIHJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpLnRoZW4oXG4gICAgICAgIChhdFN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpLnRoZW4oXG4gICAgICAgICAgICAocnRTdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghYXRTdWNjZXNzICYmICFydFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXG4gICAgICAgICAgICAgICAgICBcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiBubyBuZWVkIHRvIHJldm9rZSBkdWUgdG8gbm8gdG9rZW4ocyksIG9yIEpXVCBmb3JtYXRcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gYXRTdWNjZXNzIHx8IHJ0U3VjY2VzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICB9XG5cbiAgX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkge1xuICAgIC8vIGNoZWNrIGZvciBKV1QgdnMuIHJlZmVyZW5jZSB0b2tlblxuICAgIGlmICghYWNjZXNzX3Rva2VuIHx8IGFjY2Vzc190b2tlbi5pbmRleE9mKFwiLlwiKSA+PSAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50XG4gICAgICAucmV2b2tlKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpXG4gICAgICAudGhlbigoKSA9PiB0cnVlKTtcbiAgfVxuXG4gIF9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbChyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCkge1xuICAgIGlmICghcmVmcmVzaF90b2tlbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudFxuICAgICAgLnJldm9rZShyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCwgXCJyZWZyZXNoX3Rva2VuXCIpXG4gICAgICAudGhlbigoKSA9PiB0cnVlKTtcbiAgfVxuXG4gIHN0YXJ0U2lsZW50UmVuZXcoKSB7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0KCk7XG4gIH1cblxuICBzdG9wU2lsZW50UmVuZXcoKSB7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcbiAgfVxuXG4gIGdldCBfdXNlclN0b3JlS2V5KCkge1xuICAgIHJldHVybiBgdXNlcjoke3RoaXMuc2V0dGluZ3MuYXV0aG9yaXR5fToke3RoaXMuc2V0dGluZ3MuY2xpZW50X2lkfWA7XG4gIH1cblxuICBfbG9hZFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5nZXQodGhpcy5fdXNlclN0b3JlS2V5KS50aGVuKChzdG9yYWdlU3RyaW5nKSA9PiB7XG4gICAgICBpZiAoc3RvcmFnZVN0cmluZykge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IHVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XG4gICAgICAgIHJldHVybiBVc2VyLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IG5vIHVzZXIgc3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgc3RvcmVVc2VyKHVzZXIpIHtcbiAgICBpZiAodXNlcikge1xuICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XG5cbiAgICAgIHZhciBzdG9yYWdlU3RyaW5nID0gdXNlci50b1N0b3JhZ2VTdHJpbmcoKTtcbiAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvZy5kZWJ1ZyhcInN0b3JlVXNlci5zdG9yZVVzZXI6IHJlbW92aW5nIHVzZXJcIik7XG4gICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkV2ZW50cyB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuRXZlbnRzLmpzXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL0V2ZW50LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlckV2ZW50cyBleHRlbmRzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgdGhpcy5fdXNlckxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgbG9hZGVkXCIpO1xuICAgIHRoaXMuX3VzZXJVbmxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgdW5sb2FkZWRcIik7XG4gICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcbiAgICB0aGlzLl91c2VyU2lnbmVkSW4gPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBpblwiKTtcbiAgICB0aGlzLl91c2VyU2lnbmVkT3V0ID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgb3V0XCIpO1xuICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xuICB9XG5cbiAgbG9hZCh1c2VyLCByYWlzZUV2ZW50ID0gdHJ1ZSkge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLmxvYWRcIik7XG4gICAgc3VwZXIubG9hZCh1c2VyKTtcbiAgICBpZiAocmFpc2VFdmVudCkge1xuICAgICAgdGhpcy5fdXNlckxvYWRlZC5yYWlzZSh1c2VyKTtcbiAgICB9XG4gIH1cbiAgdW5sb2FkKCkge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLnVubG9hZFwiKTtcbiAgICBzdXBlci51bmxvYWQoKTtcbiAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcbiAgfVxuXG4gIGFkZFVzZXJMb2FkZWQoY2IpIHtcbiAgICB0aGlzLl91c2VyTG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xuICB9XG4gIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcbiAgICB0aGlzLl91c2VyTG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICB9XG5cbiAgYWRkVXNlclVubG9hZGVkKGNiKSB7XG4gICAgdGhpcy5fdXNlclVubG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xuICB9XG4gIHJlbW92ZVVzZXJVbmxvYWRlZChjYikge1xuICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgfVxuXG4gIGFkZFNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLmFkZEhhbmRsZXIoY2IpO1xuICB9XG4gIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJlbW92ZUhhbmRsZXIoY2IpO1xuICB9XG4gIF9yYWlzZVNpbGVudFJlbmV3RXJyb3IoZSkge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVNpbGVudFJlbmV3RXJyb3JcIiwgZS5tZXNzYWdlKTtcbiAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJhaXNlKGUpO1xuICB9XG5cbiAgYWRkVXNlclNpZ25lZEluKGNiKSB7XG4gICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xuICB9XG4gIHJlbW92ZVVzZXJTaWduZWRJbihjYikge1xuICAgIHRoaXMuX3VzZXJTaWduZWRJbi5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgfVxuICBfcmFpc2VVc2VyU2lnbmVkSW4oKSB7XG4gICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNpZ25lZEluXCIpO1xuICAgIHRoaXMuX3VzZXJTaWduZWRJbi5yYWlzZSgpO1xuICB9XG5cbiAgYWRkVXNlclNpZ25lZE91dChjYikge1xuICAgIHRoaXMuX3VzZXJTaWduZWRPdXQuYWRkSGFuZGxlcihjYik7XG4gIH1cbiAgcmVtb3ZlVXNlclNpZ25lZE91dChjYikge1xuICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmVtb3ZlSGFuZGxlcihjYik7XG4gIH1cbiAgX3JhaXNlVXNlclNpZ25lZE91dCgpIHtcbiAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0XCIpO1xuICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcbiAgfVxuXG4gIGFkZFVzZXJTZXNzaW9uQ2hhbmdlZChjYikge1xuICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5hZGRIYW5kbGVyKGNiKTtcbiAgfVxuICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcbiAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gIH1cbiAgX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkKCkge1xuICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZFwiKTtcbiAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmFpc2UoKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4vTG9nLmpzXCI7XG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tIFwiLi9PaWRjQ2xpZW50U2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IFJlZGlyZWN0TmF2aWdhdG9yIH0gZnJvbSBcIi4vUmVkaXJlY3ROYXZpZ2F0b3IuanNcIjtcbmltcG9ydCB7IFBvcHVwTmF2aWdhdG9yIH0gZnJvbSBcIi4vUG9wdXBOYXZpZ2F0b3IuanNcIjtcbmltcG9ydCB7IElGcmFtZU5hdmlnYXRvciB9IGZyb20gXCIuL0lGcmFtZU5hdmlnYXRvci5qc1wiO1xuaW1wb3J0IHsgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tIFwiLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsLmpzXCI7XG5pbXBvcnQgeyBTaWduaW5SZXF1ZXN0IH0gZnJvbSBcIi4vU2lnbmluUmVxdWVzdC5qc1wiO1xuXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDtcbmNvbnN0IERlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCA9IDIwMDA7XG5cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlclNldHRpbmdzIGV4dGVuZHMgT2lkY0NsaWVudFNldHRpbmdzIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHBvcHVwX3JlZGlyZWN0X3VyaSxcbiAgICBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgcG9wdXBXaW5kb3dGZWF0dXJlcyxcbiAgICBwb3B1cFdpbmRvd1RhcmdldCxcbiAgICBzaWxlbnRfcmVkaXJlY3RfdXJpLFxuICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0LFxuICAgIGF1dG9tYXRpY1NpbGVudFJlbmV3ID0gZmFsc2UsXG4gICAgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3ID0gZmFsc2UsXG4gICAgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gdHJ1ZSxcbiAgICBtb25pdG9yU2Vzc2lvbiA9IHRydWUsXG4gICAgbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBmYWxzZSxcbiAgICBjaGVja1Nlc3Npb25JbnRlcnZhbCA9IERlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCxcbiAgICBzdG9wQ2hlY2tTZXNzaW9uT25FcnJvciA9IHRydWUsXG4gICAgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUsXG4gICAgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSBmYWxzZSxcbiAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcbiAgICByZWRpcmVjdE5hdmlnYXRvciA9IG5ldyBSZWRpcmVjdE5hdmlnYXRvcigpLFxuICAgIHBvcHVwTmF2aWdhdG9yID0gbmV3IFBvcHVwTmF2aWdhdG9yKCksXG4gICAgaWZyYW1lTmF2aWdhdG9yID0gbmV3IElGcmFtZU5hdmlnYXRvcigpLFxuICAgIHVzZXJTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSh7IHN0b3JlOiBHbG9iYWwuc2Vzc2lvblN0b3JhZ2UgfSksXG4gIH0gPSB7fSkge1xuICAgIHN1cGVyKGFyZ3VtZW50c1swXSk7XG5cbiAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XG4gICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXMgPSBwb3B1cFdpbmRvd0ZlYXR1cmVzO1xuICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XG5cbiAgICB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpID0gc2lsZW50X3JlZGlyZWN0X3VyaTtcbiAgICB0aGlzLl9zaWxlbnRSZXF1ZXN0VGltZW91dCA9IHNpbGVudFJlcXVlc3RUaW1lb3V0O1xuICAgIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3ID0gYXV0b21hdGljU2lsZW50UmVuZXc7XG4gICAgdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3ID0gdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xuICAgIHRoaXMuX2luY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldztcbiAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9XG4gICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcblxuICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XG4gICAgdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcbiAgICB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbCA9IGNoZWNrU2Vzc2lvbkludGVydmFsO1xuICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG4gICAgaWYgKHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKSB7XG4gICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzWzBdICYmIGFyZ3VtZW50c1swXS5yZXNwb25zZV90eXBlKSB7XG4gICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKFxuICAgICAgICBhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZVxuICAgICAgKVxuICAgICAgICA/IFwiaWRfdG9rZW5cIlxuICAgICAgICA6IFwiY29kZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IFwiaWRfdG9rZW5cIjtcbiAgICB9XG4gICAgdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dDtcblxuICAgIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yID0gcmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgdGhpcy5fcG9wdXBOYXZpZ2F0b3IgPSBwb3B1cE5hdmlnYXRvcjtcbiAgICB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IgPSBpZnJhbWVOYXZpZ2F0b3I7XG5cbiAgICB0aGlzLl91c2VyU3RvcmUgPSB1c2VyU3RvcmU7XG4gIH1cblxuICBnZXQgcG9wdXBfcmVkaXJlY3RfdXJpKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmk7XG4gIH1cbiAgZ2V0IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICB9XG4gIGdldCBwb3B1cFdpbmRvd0ZlYXR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3B1cFdpbmRvd0ZlYXR1cmVzO1xuICB9XG4gIGdldCBwb3B1cFdpbmRvd1RhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQ7XG4gIH1cblxuICBnZXQgc2lsZW50X3JlZGlyZWN0X3VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaTtcbiAgfVxuICBnZXQgc2lsZW50UmVxdWVzdFRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0O1xuICB9XG4gIGdldCBhdXRvbWF0aWNTaWxlbnRSZW5ldygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXc7XG4gIH1cbiAgZ2V0IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xuICB9XG4gIGdldCBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldztcbiAgfVxuICBnZXQgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICB9XG5cbiAgZ2V0IG1vbml0b3JTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yU2Vzc2lvbjtcbiAgfVxuICBnZXQgbW9uaXRvckFub255bW91c1Nlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uO1xuICB9XG4gIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gIH1cbiAgZ2V0IHN0b3BDaGVja1Nlc3Npb25PbkVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcbiAgfVxuICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICB9XG4gIGdldCByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQ7XG4gIH1cblxuICBnZXQgcmVkaXJlY3ROYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yO1xuICB9XG4gIGdldCBwb3B1cE5hdmlnYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3I7XG4gIH1cbiAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5faWZyYW1lTmF2aWdhdG9yO1xuICB9XG5cbiAgZ2V0IHVzZXJTdG9yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi9Mb2cuanNcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0dsb2JhbC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgV2ViU3RvcmFnZVN0YXRlU3RvcmUge1xuICBjb25zdHJ1Y3Rvcih7IHByZWZpeCA9IFwib2lkYy5cIiwgc3RvcmUgPSBHbG9iYWwubG9jYWxTdG9yYWdlIH0gPSB7fSkge1xuICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5fcHJlZml4ID0gcHJlZml4O1xuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5zZXRcIiwga2V5KTtcblxuICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcblxuICAgIHRoaXMuX3N0b3JlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBnZXQoa2V5KSB7XG4gICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0XCIsIGtleSk7XG5cbiAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUucmVtb3ZlXCIsIGtleSk7XG5cbiAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcbiAgICB0aGlzLl9zdG9yZS5yZW1vdmVJdGVtKGtleSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0pO1xuICB9XG5cbiAgZ2V0QWxsS2V5cygpIHtcbiAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5nZXRBbGxLZXlzXCIpO1xuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBrZXkgPSB0aGlzLl9zdG9yZS5rZXkoaW5kZXgpO1xuXG4gICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xuICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cih0aGlzLl9wcmVmaXgubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShrZXlzKTtcbiAgfVxufVxuIiwiLypcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXG5odHRwczovL2dpdGh1Yi5jb20vYXV0aDAvaWR0b2tlbi12ZXJpZmllclxuaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2lkdG9rZW4tdmVyaWZpZXIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vXG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vTElDRU5TRVxuKi9cblxuLypcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxuICogcmVxdWlyaW5nIHRoZSBmdWxsIGpyc2FzaWduIGZlYXR1cmUgc2V0IChhbmQgcmVzdWx0aW5nIG1hc3NpdmUgYnVuZGxlKS5cbiAqXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcbiAqIC0gUGFyc2UgSldUIHRva2VucyB1c2luZyB0aGUgKG4pIHBhcmFtZXRlci5cbiAqIC0gVmVyaWZ5IHNpZ25hdHVyZSBvZiBpZF90b2tlbnNcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xuICogLSBQZXJmb3JtIGNvbW1vbiBiYXNlNjQgZW5jb2RpbmcvZGVjb2RpbmcgdGFza3MuXG4gKi9cblxuaW1wb3J0IEpTQk4gZnJvbSBcImpzYm5cIjtcbmltcG9ydCBTSEEyNTYgZnJvbSBcImNyeXB0by1qcy9zaGEyNTZcIjtcbmltcG9ydCBiYXNlNjRKcyBmcm9tIFwiYmFzZTY0LWpzXCI7XG5cbnZhciBCaWdJbnRlZ2VyID0gSlNCTi5CaWdJbnRlZ2VyO1xuXG4vKiEgKGMpIFRvbSBXdSB8IGh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cbiAqL1xudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xudmFyIGI2NHBhZCA9IFwiPVwiO1xuXG5jb25zdCBCYXNlNjQgPSB7XG4gIGI2NHRvaGV4KHMpIHtcbiAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICB2YXIgaTtcbiAgICB2YXIgayA9IDA7IC8vIGI2NCBzdGF0ZSwgMC0zXG4gICAgdmFyIHNsb3A7XG4gICAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChzLmNoYXJBdChpKSA9PT0gYjY0cGFkKSBicmVhaztcbiAgICAgIHZhciB2ID0gYjY0bWFwLmluZGV4T2Yocy5jaGFyQXQoaSkpO1xuICAgICAgaWYgKHYgPCAwKSBjb250aW51ZTtcbiAgICAgIGlmIChrID09PSAwKSB7XG4gICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XG4gICAgICAgIHNsb3AgPSB2ICYgMztcbiAgICAgICAgayA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGsgPT09IDEpIHtcbiAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XG4gICAgICAgIHNsb3AgPSB2ICYgMHhmO1xuICAgICAgICBrID0gMjtcbiAgICAgIH0gZWxzZSBpZiAoayA9PT0gMikge1xuICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzbG9wKTtcbiAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcbiAgICAgICAgc2xvcCA9IHYgJiAzO1xuICAgICAgICBrID0gMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xuICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhmKTtcbiAgICAgICAgayA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrID09PSAxKSByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzbG9wIDw8IDIpO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGhleFRvQmFzZTY0KGgpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgYztcbiAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICBmb3IgKGkgPSAwOyBpICsgMyA8PSBoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSwgaSArIDMpLCAxNik7XG4gICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDYpICsgYjY0bWFwLmNoYXJBdChjICYgNjMpO1xuICAgIH1cbiAgICBpZiAoaSArIDEgPT09IGgubGVuZ3RoKSB7XG4gICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSwgaSArIDEpLCAxNik7XG4gICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjIDw8IDIpO1xuICAgIH0gZWxzZSBpZiAoaSArIDIgPT09IGgubGVuZ3RoKSB7XG4gICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSwgaSArIDIpLCAxNik7XG4gICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDIpICsgYjY0bWFwLmNoYXJBdCgoYyAmIDMpIDw8IDQpO1xuICAgIH1cbiAgICBpZiAoYjY0cGFkKSB3aGlsZSAoKHJldC5sZW5ndGggJiAzKSA+IDApIHJldCArPSBiNjRwYWQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBwYWRkaW5nKHN0cikge1xuICAgIHZhciBtb2QgPSBzdHIubGVuZ3RoICUgNDtcbiAgICB2YXIgcGFkID0gNCAtIG1vZDtcblxuICAgIGlmIChtb2QgPT09IDApIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ciArIG5ldyBBcnJheSgxICsgcGFkKS5qb2luKFwiPVwiKTtcbiAgfSxcblxuICBieXRlQXJyYXlUb0hleChyYXcpIHtcbiAgICB2YXIgSEVYID0gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX2hleCA9IHJhd1tpXS50b1N0cmluZygxNik7XG4gICAgICBIRVggKz0gX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogXCIwXCIgKyBfaGV4O1xuICAgIH1cblxuICAgIHJldHVybiBIRVg7XG4gIH0sXG5cbiAgZGVjb2RlVG9IRVgoc3RyKSB7XG4gICAgcmV0dXJuIEJhc2U2NC5ieXRlQXJyYXlUb0hleChiYXNlNjRKcy50b0J5dGVBcnJheShCYXNlNjQucGFkZGluZyhzdHIpKSk7XG4gIH0sXG5cbiAgYmFzZTY0VG9CYXNlNjRVcmwocykge1xuICAgIHMgPSBzLnJlcGxhY2UoLz0vZywgXCJcIik7XG4gICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcbiAgICBzID0gcy5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xuICAgIHJldHVybiBzO1xuICB9LFxuXG4gIHVybERlY29kZShzdHIpIHtcbiAgICBzdHIgPSBzdHJcbiAgICAgIC5yZXBsYWNlKC8tL2csIFwiK1wiKSAvLyBDb252ZXJ0ICctJyB0byAnKydcbiAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKSAvLyBDb252ZXJ0ICdfJyB0byAnLydcbiAgICAgIC5yZXBsYWNlKC9cXHMvZywgXCIgXCIpOyAvLyBDb252ZXJ0ICdcXHMnIHRvICcgJ1xuXG4gICAgcmV0dXJuIGF0b2Ioc3RyKTtcbiAgfSxcbn07XG5cbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcbiAgc2hhMTogXCIzMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTRcIixcbiAgc2hhMjI0OiBcIjMwMmQzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwNDA1MDAwNDFjXCIsXG4gIHNoYTI1NjogXCIzMDMxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDEwNTAwMDQyMFwiLFxuICBzaGEzODQ6IFwiMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzBcIixcbiAgc2hhNTEyOiBcIjMwNTEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMzA1MDAwNDQwXCIsXG4gIG1kMjogXCIzMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjAyMDUwMDA0MTBcIixcbiAgbWQ1OiBcIjMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMFwiLFxuICByaXBlbWQxNjA6IFwiMzAyMTMwMDkwNjA1MmIyNDAzMDIwMTA1MDAwNDE0XCIsXG59O1xuXG52YXIgRGlnZXN0QWxncyA9IHtcbiAgc2hhMjU2OiBTSEEyNTYsXG4gIFNIQTI1NjogU0hBMjU2LFxufTtcblxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XG4gIHRoaXMubiA9IG51bGw7XG4gIHRoaXMuZSA9IDA7XG5cbiAgaWYgKG1vZHVsdXMgIT0gbnVsbCAmJiBleHAgIT0gbnVsbCAmJiBtb2R1bHVzLmxlbmd0aCA+IDAgJiYgZXhwLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLm4gPSBuZXcgQmlnSW50ZWdlcihtb2R1bHVzLCAxNik7XG4gICAgdGhpcy5lID0gcGFyc2VJbnQoZXhwLCAxNik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBrZXkgZGF0YVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGhEaWdlc3RJbmZvKSB7XG4gIGZvciAodmFyIGFsZ05hbWUgaW4gRGlnZXN0SW5mb0hlYWQpIHtcbiAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xuICAgIHZhciBsZW4gPSBoZWFkLmxlbmd0aDtcblxuICAgIGlmIChoRGlnZXN0SW5mby5zdWJzdHJpbmcoMCwgbGVuKSA9PT0gaGVhZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxnOiBhbGdOYW1lLFxuICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBbXTtcbn1cblxuUlNBVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIChtc2csIGVuY3NpZykge1xuICBlbmNzaWcgPSBCYXNlNjQuZGVjb2RlVG9IRVgoZW5jc2lnKTtcbiAgZW5jc2lnID0gZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vZ2ksIFwiXCIpO1xuXG4gIHZhciBzaWcgPSBuZXcgQmlnSW50ZWdlcihlbmNzaWcsIDE2KTtcblxuICBpZiAoc2lnLmJpdExlbmd0aCgpID4gdGhpcy5uLmJpdExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLlwiKTtcbiAgfVxuXG4gIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcbiAgdmFyIGRpZ2VzdCA9IGRlY3J5cHRlZFNpZy50b1N0cmluZygxNikucmVwbGFjZSgvXjFmKzAwLywgXCJcIik7XG4gIHZhciBkaWdlc3RJbmZvID0gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChkaWdlc3QpO1xuXG4gIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghRGlnZXN0QWxncy5oYXNPd25Qcm9wZXJ0eShkaWdlc3RJbmZvLmFsZykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgfVxuXG4gIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xuICByZXR1cm4gZGlnZXN0SW5mby5oYXNoID09PSBtc2dIYXNoO1xufTtcblxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gW1wiUlMyNTZcIl07XG5cbmNvbnN0IGp3cyA9IHtcbiAgSldTOiB7XG4gICAgcGFyc2U6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgdmFyIHBhcnRzID0gdG9rZW4uc3BsaXQoXCIuXCIpO1xuICAgICAgdmFyIGhlYWRlcjtcbiAgICAgIHZhciBwYXlsb2FkO1xuXG4gICAgICAvLyBUaGlzIGRpdmVyZ2VzIGZyb20gQXV0aDAncyBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggdGhyb3dzIHJhdGhlciB0aGFuXG4gICAgICAvLyByZXR1cm5pbmcgdW5kZWZpbmVkXG4gICAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlYWRlciA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1swXSkpO1xuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShCYXNlNjQudXJsRGVjb2RlKHBhcnRzWzFdKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUb2tlbiBoZWFkZXIgb3IgcGF5bG9hZCBpcyBub3QgdmFsaWQgSlNPTlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyT2JqOiBoZWFkZXIsXG4gICAgICAgIHBheWxvYWRPYmo6IHBheWxvYWQsXG4gICAgICB9O1xuICAgIH0sXG4gICAgdmVyaWZ5OiBmdW5jdGlvbiAoand0LCBrZXksIGFsbG93ZWRTaWduaW5nQWxncyA9IFtdKSB7XG4gICAgICBhbGxvd2VkU2lnbmluZ0FsZ3MuZm9yRWFjaCgoYWxnKSA9PiB7XG4gICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2lnbmluZyBhbGdvcml0aG06IFwiICsgYWxnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgdmVyaWZ5ID0gbmV3IFJTQVZlcmlmaWVyKGtleS5uLCBrZXkuZSk7XG4gICAgICB2YXIgcGFydHMgPSBqd3Quc3BsaXQoXCIuXCIpO1xuXG4gICAgICB2YXIgaGVhZGVyQW5kUGF5bG9hZCA9IFtwYXJ0c1swXSwgcGFydHNbMV1dLmpvaW4oXCIuXCIpO1xuICAgICAgcmV0dXJuIHZlcmlmeS52ZXJpZnkoaGVhZGVyQW5kUGF5bG9hZCwgcGFydHNbMl0pO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBLZXlVdGlsID0ge1xuICAvKipcbiAgICogUmV0dXJucyBkZWNvZGVkIGtleXMgaW4gSGV4IGZvcm1hdCBmb3IgdXNlIGluIGNyeXB0byBmdW5jdGlvbnMuXG4gICAqIFN1cHBvcnRzIG1vZHVsdXMvZXhwb25lbnQtc3R5bGUga2V5cy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGtleSB0aGUgc2VjdXJpdHkga2V5XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBnZXRLZXkoa2V5KSB7XG4gICAgaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGU6IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkuZSksXG4gICAgICAgIG46IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkubiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxufTtcblxuY29uc3QgWDUwOSA9IHtcbiAgZ2V0UHVibGljS2V5RnJvbUNlcnRQRU06IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIk5vdCBpbXBsZW1lbnRlZC4gVXNlIHRoZSBmdWxsIG9pZGMtY2xpZW50IGxpYnJhcnkgaWYgeW91IG5lZWQgc3VwcG9ydCBmb3IgWDUwOS5cIlxuICAgICk7XG4gIH0sXG59O1xuXG5jb25zdCBjcnlwdG8gPSB7XG4gIFV0aWw6IHtcbiAgICBoYXNoU3RyaW5nOiBmdW5jdGlvbiAodmFsdWUsIGFsZykge1xuICAgICAgdmFyIGhhc2hGdW5jID0gRGlnZXN0QWxnc1thbGddO1xuICAgICAgcmV0dXJuIGhhc2hGdW5jKHZhbHVlKS50b1N0cmluZygpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xuICBpZiAocy5sZW5ndGggJSAyID09PSAxKSB7XG4gICAgcyA9IFwiMFwiICsgcztcbiAgfVxuICByZXR1cm4gQmFzZTY0LmJhc2U2NFRvQmFzZTY0VXJsKEJhc2U2NC5oZXhUb0Jhc2U2NChzKSk7XG59XG5cbmNvbnN0IHsgYjY0dG9oZXggfSA9IEJhc2U2NDtcblxuZXhwb3J0IHsgandzLCBLZXlVdGlsLCBYNTA5LCBjcnlwdG8sIGhleHRvYjY0dSwgYjY0dG9oZXgsIEFsbG93ZWRTaWduaW5nQWxncyB9O1xuIiwiLyoqXG4gKiBHZW5lcmF0ZXMgUkZDNDEyMiB2ZXJzaW9uIDQgZ3VpZCAoKVxuICovXG5cbnZhciBjcnlwdG8gPVxuICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8gOiBudWxsO1xuXG5mdW5jdGlvbiBfY3J5cHRvVXVpZHY0KCkge1xuICByZXR1cm4gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIChjKSA9PlxuICAgIChcbiAgICAgIGMgXlxuICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgKDE1ID4+IChjIC8gNCkpKVxuICAgICkudG9TdHJpbmcoMTYpXG4gICk7XG59XG5cbmZ1bmN0aW9uIF91dWlkdjQoKSB7XG4gIHJldHVybiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgKGMpID0+XG4gICAgKGMgXiAoKE1hdGgucmFuZG9tKCkgKiAxNikgPj4gKGMgLyA0KSkpLnRvU3RyaW5nKDE2KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XG4gIHZhciBoYXNDcnlwdG8gPSBjcnlwdG8gIT0gXCJ1bmRlZmluZWRcIiAmJiBjcnlwdG8gIT09IG51bGw7XG4gIHZhciBoYXNSYW5kb21WYWx1ZXMgPVxuICAgIGhhc0NyeXB0byAmJiB0eXBlb2YgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAhPSBcInVuZGVmaW5lZFwiO1xuICB2YXIgdXVpZCA9IGhhc1JhbmRvbVZhbHVlcyA/IF9jcnlwdG9VdWlkdjQgOiBfdXVpZHY0O1xuICByZXR1cm4gdXVpZCgpLnJlcGxhY2UoLy0vZywgXCJcIik7XG59XG4iLCJjb25zdCBWZXJzaW9uID0gXCIxLjExLjZcIjsgZXhwb3J0IHtWZXJzaW9ufTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9