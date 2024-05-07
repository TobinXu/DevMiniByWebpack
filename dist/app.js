;require('./runtime');(wx["webpackChunk"] = wx["webpackChunk"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
 // app.js
App({
  onLaunch: function onLaunch() {
    console.log('hhhhh-------');
    console.log(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()('OnLaunch'));
    console.log("\u73AF\u5883\uFF1A".concat("development", " \u6784\u5EFA\u7C7B\u578B\uFF1A").concat("debug"));

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: function success(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },
  globalData: {
    userInfo: null
  }
});

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var capitalize = __webpack_require__(5),
  createCompounder = __webpack_require__(15);

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
module.exports = camelCase;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(6),
  upperFirst = __webpack_require__(7);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}
module.exports = capitalize;

/***/ }),
/* 6 */
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
module.exports = identity;

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCaseFirst = __webpack_require__(8);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');
module.exports = upperFirst;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castSlice = __webpack_require__(9),
  hasUnicode = __webpack_require__(11),
  stringToArray = __webpack_require__(12),
  toString = __webpack_require__(6);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function (string) {
    string = toString(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
module.exports = createCaseFirst;

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(10);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
module.exports = castSlice;

/***/ }),
/* 10 */
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
    length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
module.exports = baseSlice;

/***/ }),
/* 11 */
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f',
  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange = '\\u20d0-\\u20ff',
  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
module.exports = hasUnicode;

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(13),
  hasUnicode = __webpack_require__(11),
  unicodeToArray = __webpack_require__(14);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
module.exports = stringToArray;

/***/ }),
/* 13 */
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}
module.exports = asciiToArray;

/***/ }),
/* 14 */
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f',
  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange = '\\u20d0-\\u20ff',
  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
  rsCombo = '[' + rsComboRange + ']',
  rsFitz = '\\ud83c[\\udffb-\\udfff]',
  rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
  rsNonAstral = '[^' + rsAstralRange + ']',
  rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
  rsOptVar = '[' + rsVarRange + ']?',
  rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
module.exports = unicodeToArray;

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(16),
  deburr = __webpack_require__(17),
  words = __webpack_require__(19);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function (string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}
module.exports = createCompounder;

/***/ }),
/* 16 */
/***/ ((module) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
    length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
module.exports = arrayReduce;

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(18);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}
module.exports = toString;

/***/ }),
/* 18 */
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
module.exports = identity;

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiWords = __webpack_require__(20),
  hasUnicodeWord = __webpack_require__(21),
  toString = __webpack_require__(6),
  unicodeWords = __webpack_require__(22);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;
  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
module.exports = words;

/***/ }),
/* 20 */
/***/ ((module) => {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
module.exports = asciiWords;

/***/ }),
/* 21 */
/***/ ((module) => {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
module.exports = hasUnicodeWord;

/***/ }),
/* 22 */
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f',
  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange = '\\u20d0-\\u20ff',
  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsDingbatRange = '\\u2700-\\u27bf',
  rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
  rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
  rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
  rsPunctuationRange = '\\u2000-\\u206f',
  rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
  rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
  rsVarRange = '\\ufe0e\\ufe0f',
  rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
  rsBreak = '[' + rsBreakRange + ']',
  rsCombo = '[' + rsComboRange + ']',
  rsDigits = '\\d+',
  rsDingbat = '[' + rsDingbatRange + ']',
  rsLower = '[' + rsLowerRange + ']',
  rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
  rsFitz = '\\ud83c[\\udffb-\\udfff]',
  rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
  rsNonAstral = '[^' + rsAstralRange + ']',
  rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  rsUpper = '[' + rsUpperRange + ']',
  rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
  rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
  rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
  rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
  reOptMod = rsModifier + '?',
  rsOptVar = '[' + rsVarRange + ']?',
  rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
  rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
  rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
module.exports = unicodeWords;

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(3));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNWLFNBQVMsRUFBRXJDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLENBQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHK0IsS0FBSzs7QUFFakY7QUFDQSxJQUFJMkMsYUFBYSxHQUFHMUQsTUFBTSxDQUFDLENBQ3pCa0QsT0FBTyxHQUFHLEdBQUcsR0FBR0YsT0FBTyxHQUFHLEdBQUcsR0FBR0ssZUFBZSxHQUFHLEtBQUssR0FBRyxDQUFDUixPQUFPLEVBQUVLLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQ2pHb0UsV0FBVyxHQUFHLEdBQUcsR0FBR0UsZUFBZSxHQUFHLEtBQUssR0FBRyxDQUFDVCxPQUFPLEVBQUVLLE9BQU8sR0FBR0MsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFDbkdrRSxPQUFPLEdBQUcsR0FBRyxHQUFHQyxXQUFXLEdBQUcsR0FBRyxHQUFHRSxlQUFlLEVBQ25ESCxPQUFPLEdBQUcsR0FBRyxHQUFHSSxlQUFlLEVBQy9CRSxVQUFVLEVBQ1ZELFVBQVUsRUFDVlQsUUFBUSxFQUNSVyxPQUFPLENBQ1IsQ0FBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU2dELFlBQVlBLENBQUM3RCxNQUFNLEVBQUU7RUFDNUIsT0FBT0EsTUFBTSxDQUFDK0MsS0FBSyxDQUFDd0MsYUFBYSxDQUFDLElBQUksRUFBRTtBQUMxQztBQUVBM0YsTUFBTSxDQUFDQyxPQUFPLEdBQUdnRSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9jYW1lbENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFNsaWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2hANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoL3dvcmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaEA0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC5qc1xuaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSAnbG9kYXNoJztcblxuQXBwKHtcbiAgb25MYXVuY2goKSB7XG4gICAgY29uc29sZS5sb2coJ2hoaGhoLS0tLS0tLScpXG4gICAgY29uc29sZS5sb2coY2FtZWxDYXNlKCdPbkxhdW5jaCcpKTtcbiAgICBjb25zb2xlLmxvZyhg546v5aKD77yaJHtwcm9jZXNzLmVudi5OT0RFX0VOVn0g5p6E5bu657G75Z6L77yaJHtwcm9jZXNzLmVudi5CVUlMRF9UWVBFfWApXG5cbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cbn0pXG4iLCJ2YXIgY2FwaXRhbGl6ZSA9IHJlcXVpcmUoJy4vY2FwaXRhbGl6ZScpLFxuICAgIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gW2NhbWVsIGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhbWVsQ2FzZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhbWVsIGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYW1lbENhc2UoJ0ZvbyBCYXInKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIF8uY2FtZWxDYXNlKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqL1xudmFyIGNhbWVsQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gY2FwaXRhbGl6ZSh3b3JkKSA6IHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxDYXNlO1xuIiwidmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UgYW5kIHRoZSByZW1haW5pbmdcbiAqIHRvIGxvd2VyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdGUkVEJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHVwcGVyRmlyc3QodG9TdHJpbmcoc3RyaW5nKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciBjYXN0U2xpY2UgPSByZXF1aXJlKCcuL19jYXN0U2xpY2UnKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8ubG93ZXJGaXJzdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBgU3RyaW5nYCBjYXNlIG1ldGhvZCB0byB1c2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXNlRmlyc3QobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgIHZhciBzdHJTeW1ib2xzID0gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgICA/IHN0cmluZ1RvQXJyYXkoc3RyaW5nKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgY2hyID0gc3RyU3ltYm9sc1xuICAgICAgPyBzdHJTeW1ib2xzWzBdXG4gICAgICA6IHN0cmluZy5jaGFyQXQoMCk7XG5cbiAgICB2YXIgdHJhaWxpbmcgPSBzdHJTeW1ib2xzXG4gICAgICA/IGNhc3RTbGljZShzdHJTeW1ib2xzLCAxKS5qb2luKCcnKVxuICAgICAgOiBzdHJpbmcuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gY2hyW21ldGhvZE5hbWVdKCkgKyB0cmFpbGluZztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDYXNlRmlyc3Q7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyk7XG5cbi8qKlxuICogQ2FzdHMgYGFycmF5YCB0byBhIHNsaWNlIGlmIGl0J3MgbmVlZGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3Qgc2xpY2UuXG4gKi9cbmZ1bmN0aW9uIGNhc3RTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZDtcbiAgcmV0dXJuICghc3RhcnQgJiYgZW5kID49IGxlbmd0aCkgPyBhcnJheSA6IGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFNsaWNlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCJ2YXIgYXNjaWlUb0FycmF5ID0gcmVxdWlyZSgnLi9fYXNjaWlUb0FycmF5JyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlVG9BcnJheSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVUb0FycmF5Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvQXJyYXk7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBhc2NpaVdvcmRzID0gcmVxdWlyZSgnLi9fYXNjaWlXb3JkcycpLFxuICAgIGhhc1VuaWNvZGVXb3JkID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZVdvcmQnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1bmljb2RlV29yZHMgPSByZXF1aXJlKCcuL191bmljb2RlV29yZHMnKTtcblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7XG4iLCIvKiogVXNlZCB0byBtYXRjaCB3b3JkcyBjb21wb3NlZCBvZiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy4gKi9cbnZhciByZUFzY2lpV29yZCA9IC9bXlxceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdmXSsvZztcblxuLyoqXG4gKiBTcGxpdHMgYW4gQVNDSUkgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiBhc2NpaVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlQXNjaWlXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVdvcmRzO1xuIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3MgdGhhdCBuZWVkIGEgbW9yZSByb2J1c3QgcmVnZXhwIHRvIG1hdGNoIHdvcmRzLiAqL1xudmFyIHJlSGFzVW5pY29kZVdvcmQgPSAvW2Etel1bQS1aXXxbQS1aXXsyfVthLXpdfFswLTldW2EtekEtWl18W2EtekEtWl1bMC05XXxbXmEtekEtWjAtOSBdLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgYSB3b3JkIGNvbXBvc2VkIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSB3b3JkIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGVXb3JkKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlV29yZC50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZVdvcmQ7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc01pc2NMb3dlciA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc01pc2NVcHBlciA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdENvbnRyTG93ZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdENvbnRyVXBwZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzT3JkTG93ZXIgPSAnXFxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxcXGR0aCkoPz1cXFxcYnxbQS1aX10pJyxcbiAgICByc09yZFVwcGVyID0gJ1xcXFxkKig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcXFxkVEgpKD89XFxcXGJ8W2Etel9dKScsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzRW1vamkgPSAnKD86JyArIFtyc0RpbmdiYXQsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzU2VxO1xuXG4vKiogVXNlZCB0byBtYXRjaCBjb21wbGV4IG9yIGNvbXBvdW5kIHdvcmRzLiAqL1xudmFyIHJlVW5pY29kZVdvcmQgPSBSZWdFeHAoW1xuICByc1VwcGVyICsgJz8nICsgcnNMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc01pc2NVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIgKyByc01pc2NMb3dlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXIgKyAnPycgKyByc01pc2NMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlcixcbiAgcnNVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlcixcbiAgcnNPcmRVcHBlcixcbiAgcnNPcmRMb3dlcixcbiAgcnNEaWdpdHMsXG4gIHJzRW1vamlcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVdvcmRzO1xuIl0sIm5hbWVzIjpbIkFwcCIsIm9uTGF1bmNoIiwiY29uc29sZSIsImxvZyIsIl9jYW1lbENhc2UiLCJjb25jYXQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJCVUlMRF9UWVBFIiwibG9ncyIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJ1bnNoaWZ0IiwiRGF0ZSIsIm5vdyIsInNldFN0b3JhZ2VTeW5jIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiY2FwaXRhbGl6ZSIsInJlcXVpcmUiLCJjcmVhdGVDb21wb3VuZGVyIiwiY2FtZWxDYXNlIiwicmVzdWx0Iiwid29yZCIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwidG9TdHJpbmciLCJ1cHBlckZpcnN0Iiwic3RyaW5nIiwiaWRlbnRpdHkiLCJ2YWx1ZSIsImNyZWF0ZUNhc2VGaXJzdCIsImNhc3RTbGljZSIsImhhc1VuaWNvZGUiLCJzdHJpbmdUb0FycmF5IiwibWV0aG9kTmFtZSIsInN0clN5bWJvbHMiLCJ1bmRlZmluZWQiLCJjaHIiLCJjaGFyQXQiLCJ0cmFpbGluZyIsImpvaW4iLCJzbGljZSIsImJhc2VTbGljZSIsImFycmF5Iiwic3RhcnQiLCJlbmQiLCJsZW5ndGgiLCJBcnJheSIsInJzQXN0cmFsUmFuZ2UiLCJyc0NvbWJvTWFya3NSYW5nZSIsInJlQ29tYm9IYWxmTWFya3NSYW5nZSIsInJzQ29tYm9TeW1ib2xzUmFuZ2UiLCJyc0NvbWJvUmFuZ2UiLCJyc1ZhclJhbmdlIiwicnNaV0oiLCJyZUhhc1VuaWNvZGUiLCJSZWdFeHAiLCJ0ZXN0IiwiYXNjaWlUb0FycmF5IiwidW5pY29kZVRvQXJyYXkiLCJzcGxpdCIsInJzQXN0cmFsIiwicnNDb21ibyIsInJzRml0eiIsInJzTW9kaWZpZXIiLCJyc05vbkFzdHJhbCIsInJzUmVnaW9uYWwiLCJyc1N1cnJQYWlyIiwicmVPcHRNb2QiLCJyc09wdFZhciIsInJzT3B0Sm9pbiIsInJzU2VxIiwicnNTeW1ib2wiLCJyZVVuaWNvZGUiLCJtYXRjaCIsImFycmF5UmVkdWNlIiwiZGVidXJyIiwid29yZHMiLCJyc0Fwb3MiLCJyZUFwb3MiLCJjYWxsYmFjayIsInJlcGxhY2UiLCJpdGVyYXRlZSIsImFjY3VtdWxhdG9yIiwiaW5pdEFjY3VtIiwiYmFzZVRvU3RyaW5nIiwiYXNjaWlXb3JkcyIsImhhc1VuaWNvZGVXb3JkIiwidW5pY29kZVdvcmRzIiwicGF0dGVybiIsImd1YXJkIiwicmVBc2NpaVdvcmQiLCJyZUhhc1VuaWNvZGVXb3JkIiwicnNEaW5nYmF0UmFuZ2UiLCJyc0xvd2VyUmFuZ2UiLCJyc01hdGhPcFJhbmdlIiwicnNOb25DaGFyUmFuZ2UiLCJyc1B1bmN0dWF0aW9uUmFuZ2UiLCJyc1NwYWNlUmFuZ2UiLCJyc1VwcGVyUmFuZ2UiLCJyc0JyZWFrUmFuZ2UiLCJyc0JyZWFrIiwicnNEaWdpdHMiLCJyc0RpbmdiYXQiLCJyc0xvd2VyIiwicnNNaXNjIiwicnNVcHBlciIsInJzTWlzY0xvd2VyIiwicnNNaXNjVXBwZXIiLCJyc09wdENvbnRyTG93ZXIiLCJyc09wdENvbnRyVXBwZXIiLCJyc09yZExvd2VyIiwicnNPcmRVcHBlciIsInJzRW1vamkiLCJyZVVuaWNvZGVXb3JkIl0sInNvdXJjZVJvb3QiOiIifQ==