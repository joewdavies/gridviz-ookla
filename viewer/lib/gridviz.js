(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gviz"] = factory();
	else
		root["gviz"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   Rgb: () => (/* binding */ Rgb),
/* harmony export */   brighter: () => (/* binding */ brighter),
/* harmony export */   darker: () => (/* binding */ darker),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   hsl: () => (/* binding */ hsl),
/* harmony export */   hslConvert: () => (/* binding */ hslConvert),
/* harmony export */   rgb: () => (/* binding */ rgb),
/* harmony export */   rgbConvert: () => (/* binding */ rgbConvert)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   extend: () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-drag/src/nodrag.js":
/*!********************************************!*\
  !*** ./node_modules/d3-drag/src/nodrag.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   yesdrag: () => (/* binding */ yesdrag)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(view) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ "./node_modules/d3-drag/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-drag/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nonpassive: () => (/* binding */ nonpassive),
/* harmony export */   nonpassivecapture: () => (/* binding */ nonpassivecapture),
/* harmony export */   nopropagation: () => (/* binding */ nopropagation)
/* harmony export */ });
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-dsv/src/csv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/csv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csvFormat: () => (/* binding */ csvFormat),
/* harmony export */   csvFormatBody: () => (/* binding */ csvFormatBody),
/* harmony export */   csvFormatRow: () => (/* binding */ csvFormatRow),
/* harmony export */   csvFormatRows: () => (/* binding */ csvFormatRows),
/* harmony export */   csvFormatValue: () => (/* binding */ csvFormatValue),
/* harmony export */   csvParse: () => (/* binding */ csvParse),
/* harmony export */   csvParseRows: () => (/* binding */ csvParseRows)
/* harmony export */ });
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");


var csv = (0,_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;


/***/ }),

/***/ "./node_modules/d3-dsv/src/dsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/dsv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
}


/***/ }),

/***/ "./node_modules/d3-dsv/src/tsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/tsv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tsvFormat: () => (/* binding */ tsvFormat),
/* harmony export */   tsvFormatBody: () => (/* binding */ tsvFormatBody),
/* harmony export */   tsvFormatRow: () => (/* binding */ tsvFormatRow),
/* harmony export */   tsvFormatRows: () => (/* binding */ tsvFormatRows),
/* harmony export */   tsvFormatValue: () => (/* binding */ tsvFormatValue),
/* harmony export */   tsvParse: () => (/* binding */ tsvParse),
/* harmony export */   tsvParseRows: () => (/* binding */ tsvParseRows)
/* harmony export */ });
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");


var tsv = (0,_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicIn: () => (/* binding */ cubicIn),
/* harmony export */   cubicInOut: () => (/* binding */ cubicInOut),
/* harmony export */   cubicOut: () => (/* binding */ cubicOut)
/* harmony export */ });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-fetch/src/dsv.js":
/*!******************************************!*\
  !*** ./node_modules/d3-fetch/src/dsv.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csv: () => (/* binding */ csv),
/* harmony export */   "default": () => (/* binding */ dsv),
/* harmony export */   tsv: () => (/* binding */ tsv)
/* harmony export */ });
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/dsv.js");
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/csv.js");
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/tsv.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-fetch/src/text.js");



function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return (0,_text_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = (0,d3_dsv__WEBPACK_IMPORTED_MODULE_1__["default"])(delimiter);
  return (0,_text_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input, init).then(function(response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_2__.csvParse);
var tsv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_3__.tsvParse);


/***/ }),

/***/ "./node_modules/d3-fetch/src/json.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/json.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205) return;
  return response.json();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {
  return fetch(input, init).then(responseJson);
}


/***/ }),

/***/ "./node_modules/d3-fetch/src/text.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/text.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {
  return fetch(input, init).then(responseText);
}


/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultLocale),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatPrefix: () => (/* binding */ formatPrefix)
/* harmony export */ });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatDecimalParts: () => (/* binding */ formatDecimalParts)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   prefixExponent: () => (/* binding */ prefixExponent)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {
  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {
  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatSpecifier: () => (/* binding */ FormatSpecifier),
/* harmony export */   "default": () => (/* binding */ formatSpecifier)
/* harmony export */ });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/d3-format/src/formatRounded.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => (0,_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p),
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-format/src/identity.js");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"] : (0,_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"] : (0,_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_4__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = (0,_formatTrim_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basis: () => (/* binding */ basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nogamma),
/* harmony export */   gamma: () => (/* binding */ gamma),
/* harmony export */   hue: () => (/* binding */ hue)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   rgbBasis: () => (/* binding */ rgbBasis),
/* harmony export */   rgbBasisClosed: () => (/* binding */ rgbBasisClosed)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateTransformCss: () => (/* binding */ interpolateTransformCss),
/* harmony export */   interpolateTransformSvg: () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseSvg, ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseCss: () => (/* binding */ parseCss),
/* harmony export */   parseSvg: () => (/* binding */ parseSvg)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ "./node_modules/d3-random/src/defaultSource.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-random/src/defaultSource.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Math.random);


/***/ }),

/***/ "./node_modules/d3-random/src/normal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-random/src/normal.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultSource.js */ "./node_modules/d3-random/src/defaultSource.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(_defaultSource_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./node_modules/d3-selection/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   childMatcher: () => (/* binding */ childMatcher),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   xhtml: () => (/* binding */ xhtml)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/pointer.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/pointer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {
  event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-selection/src/constant.js");




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnterNode: () => (/* binding */ EnterNode),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Selection: () => (/* binding */ Selection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   root: () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ "./node_modules/d3-selection/src/selection/selectChild.js");
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ "./node_modules/d3-selection/src/selection/selectChildren.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-selection/src/selection/dispatch.js");
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/d3-selection/src/selection/iterator.js");



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__["default"],
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(merges, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-selection/src/array.js");
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(subgroups, parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styleValue: () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   timer: () => (/* binding */ timer),
/* harmony export */   timerFlush: () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.SCHEDULED && schedule.name === name) {
        return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   active: () => (/* reexport safe */ _active_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   interrupt: () => (/* reexport safe */ _interrupt_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   transition: () => (/* reexport safe */ _transition_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");






/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.STARTING && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDING;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/cubic.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__.cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__.newId)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(groups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.interpolateTransformSvg : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__.tweenValue)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).delay;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).duration;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).ease;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/easeVarying.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/easeVarying.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/matcher.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transition: () => (/* binding */ Transition),
/* harmony export */   "default": () => (/* binding */ transition),
/* harmony export */   newId: () => (/* binding */ newId)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./easeVarying.js */ "./node_modules/d3-transition/src/transition/easeVarying.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/string.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["default"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__["default"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"]
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"])(a, b);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__.init : _schedule_js__WEBPACK_IMPORTED_MODULE_0__.set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CREATED: () => (/* binding */ CREATED),
/* harmony export */   ENDED: () => (/* binding */ ENDED),
/* harmony export */   ENDING: () => (/* binding */ ENDING),
/* harmony export */   RUNNING: () => (/* binding */ RUNNING),
/* harmony export */   SCHEDULED: () => (/* binding */ SCHEDULED),
/* harmony export */   STARTED: () => (/* binding */ STARTED),
/* harmony export */   STARTING: () => (/* binding */ STARTING),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timeout.js");



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selector.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.set)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.interpolateTransformCss : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__.tweenValue)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__.tweenValue)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(groups, this._parents, name, id1);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   tweenValue: () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/src/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/event.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomEvent)
/* harmony export */ });
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomTransform: () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.Transform),
/* harmony export */   zoom: () => (/* reexport safe */ _zoom_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   zoomIdentity: () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   zoomTransform: () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-zoom/src/zoom.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");




/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-zoom/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nopropagation: () => (/* binding */ nopropagation)
/* harmony export */ });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-zoom/src/transform.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: () => (/* binding */ Transform),
/* harmony export */   "default": () => (/* binding */ transform),
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/*!******************************************!*\
  !*** ./node_modules/d3-zoom/src/zoom.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-drag */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-zoom/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./node_modules/d3-zoom/src/event.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-zoom/src/noevent.js");










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_3__.identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__["default"],
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_6__["default"])("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_3__.identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new _event_js__WEBPACK_IMPORTED_MODULE_2__["default"](type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
      g.start();
    }

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__["default"])(event.view);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    g.mouse = [p, this.__zoom.invert(p)];
    (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
    g.start();

    function mousemoved(event) {
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__.yesdrag)(event.view, g.moved);
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    if (duration > 0) (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).transition().duration(duration).call(schedule, t1, p0, event);
    else (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _GeoCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeoCanvas.js */ "./src/GeoCanvas.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.js */ "./src/Layer.js");
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dataset.js */ "./src/Dataset.js");
/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip.js */ "./src/Tooltip.js");
/* harmony import */ var _dataset_CSVGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataset/CSVGrid.js */ "./src/dataset/CSVGrid.js");
/* harmony import */ var _dataset_LGrid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataset/LGrid.js */ "./src/dataset/LGrid.js");
/* harmony import */ var _dataset_TiledGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataset/TiledGrid.js */ "./src/dataset/TiledGrid.js");
/* harmony import */ var _BackgroundLayer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BackgroundLayer.js */ "./src/BackgroundLayer.js");
/* harmony import */ var _BackgroundLayerWMS_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BackgroundLayerWMS.js */ "./src/BackgroundLayerWMS.js");
/* harmony import */ var _LabelLayer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LabelLayer.js */ "./src/LabelLayer.js");
/* harmony import */ var _LineLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LineLayer.js */ "./src/LineLayer.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/Utils.js */ "./src/utils/Utils.js");
/* harmony import */ var _button_ZoomButtons_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button/ZoomButtons.js */ "./src/button/ZoomButtons.js");
/* harmony import */ var _button_FullscreenButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button/FullscreenButton.js */ "./src/button/FullscreenButton.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
//@ts-check


// internal imports
;














// external imports


/**
 * A gridviz application.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class App {
    /**
     * @param {HTMLDivElement} container
     * @param {object} opts
     */
    constructor(container, opts) {
        opts = opts || {}

        /**
         * The layers.
         * @type {Array.<Layer>}
         * */
        this.layers = []

        //get container element
        this.container = container || document.getElementById('gridviz')
        if (!this.container) {
            console.error('Cannot find gridviz container element.')
            return
        }

        //https://css-tricks.com/absolute-positioning-inside-relative-positioning/
        this.container.style.position = "relative"; // container element must have relative positioning

        //set dimensions
        /** @type {number} */
        this.w = opts.w || this.container.offsetWidth
        /** @type {number} */
        this.h = opts.h || this.container.offsetHeight

        //create canvas element if user doesnt specify one
        /** @type {HTMLCanvasElement} */
        let canvas = opts.canvas || null
        if (!canvas) {
            canvas = document.createElement('canvas')
            canvas.setAttribute('width', '' + this.w)
            canvas.setAttribute('height', '' + this.h)
            this.container.appendChild(canvas)
        }

        /** Make geo canvas
         * @type {GeoCanvas}
         * @private */
        this.cg = new _GeoCanvas_js__WEBPACK_IMPORTED_MODULE_0__.GeoCanvas(canvas, undefined, 1, opts)
        this.cg.redraw = (strong = true) => {
            if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_11__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_11__.monitorDuration)('Start redraw')
            //console.log("?x=" + this.cg.getCenter().x + "&y=" + this.cg.getCenter().y + "&z=" + this.cg.getZf())

            //remove legend elements
            if (this.legend && strong) this.legend.selectAll('*').remove()

            //clear
            this.cg.initCanvasTransform()
            this.cg.clear(this.cg.backgroundColor)

            const zf = this.getZoomFactor()
            this.updateExtentGeo()

            //go through the background layers
            if (this.showBgLayers)
                for (const layer of this.bgLayers) {
                    //check if layer is visible
                    if (!layer.visible) continue
                    if (zf > layer.maxZoom) continue
                    if (zf < layer.minZoom) continue

                    //draw layer
                    layer.draw(this.cg)
                }

            //go through the layers
            for (const layer of this.layers) {
                //check if layer is visible
                if (!layer.visible) continue
                if (zf > layer.maxZoom) continue
                if (zf < layer.minZoom) continue

                //get layer dataset component
                /** @type {import('./DatasetComponent').DatasetComponent|undefined} */
                const dsc = layer.getDatasetComponent(zf)
                if (!dsc) continue

                //launch data download, if necessary
                if (strong)
                    dsc.getData(this.cg.extGeo, () => {
                        this.cg.redraw()
                    })

                //update dataset view cache
                if (strong) dsc.updateViewCache(this.cg.extGeo)

                //set layer alpha and blend mode
                this.cg.ctx.globalAlpha = layer.alpha ? layer.alpha(zf) : 1.0
                this.cg.ctx.globalCompositeOperation = layer.blendOperation(zf)

                //draw cells, style by style
                if (strong)
                    for (const s of layer.styles) {
                        //check if style is visible
                        if (!s.visible) continue
                        if (zf > s.maxZoom) continue
                        if (zf < s.minZoom) continue

                        //set style alpha and blend mode
                        //TODO: multiply by layer alpha ?
                        this.cg.ctx.globalAlpha = s.alpha ? s.alpha(zf) : 1.0
                        this.cg.ctx.globalCompositeOperation = s.blendOperation(zf)

                        s.draw(dsc.getViewCache(), dsc.getResolution(), this.cg)
                    }

                //add legend element
                if (this.legend && strong) {
                    for (const s of layer.styles) {
                        if (zf > s.maxZoom) continue
                        if (zf < s.minZoom) continue
                        for (const lg of s.legends) {
                            //console.log(s, lg)
                            //this.legend.append(lg.div)
                            //s1.node().appendChild(s2.node())
                            this.legend.node().append(lg.div.node())
                        }

                        //case for styles of styles, like kernel smoothing
                        //TODO do better
                        if (s['styles']) {
                            for (const s2 of s.styles) {
                                if (zf > s2.maxZoom) continue
                                if (zf < s2.minZoom) continue
                                for (const lg of s2.legends) {
                                    //console.log(s, lg)
                                    //this.legend.append(lg.div)
                                    //s1.node().appendChild(s2.node())
                                    this.legend.node().append(lg.div.node())
                                }
                            }
                        }
                    }
                }

                //restore default alpha and blend operation
                this.cg.ctx.globalAlpha = 1.0
                this.cg.ctx.globalCompositeOperation = this.defaultGlobalCompositeOperation
            }

            //draw boundary layer
            //if (strong)
            if (this.showBoundaries && this.boundaryLayer) this.boundaryLayer.draw(this.cg)

            //draw label layer
            //if (strong)
            if (this.showLabels && this.labelLayer) this.labelLayer.draw(this.cg)

            //
            this.canvasSave = null

            if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_11__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_11__.monitorDuration)('End redraw')

            // listen for resize events on the App's container and handle them
            this.defineResizeObserver(this.container, canvas)

            return this
        }

        /** @type {Array.<BackgroundLayer|BackgroundLayerWMS>} */
        this.bgLayers = []
        /** @type {boolean} */
        this.showBgLayers = true

        /** @type {LabelLayer | undefined} */
        this.labelLayer = undefined
        /** @type {boolean} */
        this.showLabels = true

        /** @type {LineLayer | undefined} */
        this.boundaryLayer = undefined
        /** @type {boolean} */
        this.showBoundaries = true

        // legend div
        this.legendDivId = opts.legendDivId || 'gvizLegend'
        this.legend = (0,d3_selection__WEBPACK_IMPORTED_MODULE_14__["default"])('#' + this.legendDivId)
        if (this.legend.empty()) {
            this.legend = (0,d3_selection__WEBPACK_IMPORTED_MODULE_14__["default"])(
                this.container.id && this.container.id != '' ? '#' + this.container.id : 'body'
            )
                .append('div')
                .attr('id', this.legendDivId)
                .style('position', 'absolute')
                .style('width', 'auto')
                .style('height', 'auto')
                .style('background', '#FFFFFF')
                //.style("padding", this.padding)
                .style('border', '0px')
                //.style('border-radius', '5px')
                .style('box-shadow', '3px 3px 3px grey, -3px -3px 3px #ddd')
                .style('font-family', 'Helvetica, Arial, sans-serif')
                .style('bottom', '15px')
                .style('right', '15px')
            //hide
            //.style("visibility", "hidden")
        }

        //tooltip

        // set App container as default parent element for tooltip
        if (!opts.tooltip) opts.tooltip = {}
        if (!opts.tooltip.parentElement) opts.tooltip.parentElement = this.container

        /**
         * @private
         * @type {Tooltip} */
        this.tooltip = new _Tooltip_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip(opts.tooltip)

        /** @param {MouseEvent} e */
        const focusCell = (e) => {
            //compute mouse geo position
            const mousePositionGeo = {
                x: this.cg.pixToGeoX(e.offsetX + this.tooltip.xMouseOffset),
                y: this.cg.pixToGeoY(e.offsetY + this.tooltip.yMouseOffset),
            }
            /** @type {{cell:import('./Dataset').Cell,html:string,resolution:number} | undefined} */
            const focus = this.getCellFocusInfo(mousePositionGeo)

            // transparent background (e.g. leaflet) 'red painting' fix
            if (opts.transparentBackground) {
                if (focus) {
                    this.tooltip.html(focus.html)
                    this.tooltip.setPosition(e)
                    this.tooltip.show()
                } else {
                    this.tooltip.hide()
                }
                this.canvasSave = document.createElement('canvas')
                this.canvasSave.setAttribute('width', '' + this.w)
                this.canvasSave.setAttribute('height', '' + this.h)
                this.canvasSave.getContext('2d').drawImage(this.cg.canvas, 0, 0)
                this.cg.initCanvasTransform()
                return
            }

            if (focus) {
                this.tooltip.html(focus.html)
                this.tooltip.setPosition(e)
                this.tooltip.show()

                //show cell position as a rectangle
                if (!this.canvasSave) {
                    this.canvasSave = document.createElement('canvas')
                    this.canvasSave.setAttribute('width', '' + this.w)
                    this.canvasSave.setAttribute('height', '' + this.h)
                    this.canvasSave.getContext('2d').drawImage(this.cg.canvas, 0, 0)
                } else {
                    this.cg.ctx.drawImage(this.canvasSave, 0, 0)
                }

                //draw image saved + draw rectangle
                const rectWPix = this.selectionRectangleWidthPix
                    ? this.selectionRectangleWidthPix(focus.resolution, this.getZoomFactor())
                    : 4
                this.cg.initCanvasTransform()
                this.cg.ctx.strokeStyle = this.selectionRectangleColor
                this.cg.ctx.lineWidth = rectWPix
                this.cg.ctx.beginPath()

                this.cg.ctx.rect(
                    this.cg.geoToPixX(focus.cell.x) - rectWPix / 2,
                    this.cg.geoToPixY(focus.cell.y) + rectWPix / 2,
                    focus.resolution / this.getZoomFactor() + rectWPix,
                    -focus.resolution / this.getZoomFactor() - rectWPix
                )
                this.cg.ctx.stroke()
            } else {
                this.tooltip.hide()
                if (this.canvasSave) this.cg.ctx.drawImage(this.canvasSave, 0, 0)
            }
        }

        // add event listeners to container
        this.mouseOverHandler = (e) => focusCell(e)
        this.mouseMoveHandler = (e) => focusCell(e)
        this.mouseOutHandler = (e) => this.tooltip.hide()
        this.cg.canvas.addEventListener('mouseover', this.mouseOverHandler)
        this.cg.canvas.addEventListener('mousemove', this.mouseMoveHandler)
        this.cg.canvas.addEventListener('mouseout', this.mouseOutHandler)

        // add extra logic to onZoomStartFun
        this.cg.onZoomStartFun = (e) => {
            if (opts.onZoomStartFun) opts.onZoomStartFun(e)
            this.tooltip.hide()
        }

        //for mouse over
        /**
         * @private
         * @type {HTMLCanvasElement|null} */
        this.canvasSave = null

        this.selectionRectangleColor = opts.selectionRectangleColor || 'red'
        this.selectionRectangleWidthPix = opts.selectionRectangleWidthPix || (() => 4) //(r,zf) => {}

        //
        //canvas.addEventListener("keydown", e => { console.log(arguments) });

        //set default globalCompositeOperation
        this.defaultGlobalCompositeOperation =
            opts.defaultGlobalCompositeOperation || this.cg.ctx.globalCompositeOperation
    }

    /**
     * @param {number} marginPx
     * @returns {import('./Dataset').Envelope}
     * @public
     */
    updateExtentGeo(marginPx = 20) {
        return this.cg.updateExtentGeo(marginPx)
    }

    /**
     * Return the cell HTML info at a given geo position.
     * This is usefull for user interactions, to show this info where the user clicks for example.
     *
     * @param {{x:number,y:number}} posGeo
     * @returns {{cell:import('./Dataset').Cell,html:string,resolution:number} | undefined}
     * @protected
     */
    getCellFocusInfo(posGeo) {
        //go through the layers, starting from top
        const zf = this.getZoomFactor()
        for (let i = this.layers.length - 1; i >= 0; i--) {
            /** @type {Layer} */
            const layer = this.layers[i]
            if (!layer.visible) continue
            if (!layer.cellInfoHTML) continue
            //if (layer.cellInfoHTML === 'none') continue
            const dsc = layer.getDatasetComponent(zf)
            if (!dsc) continue

            //get cell at mouse position
            /** @type {import('./Dataset').Cell|undefined} */
            const cell = dsc.getCellFromPosition(posGeo, dsc.getViewCache())
            //console.log(cell, dsc.resolution)
            if (!cell) return undefined
            const html = layer.cellInfoHTML(cell, dsc.getResolution())
            if (!html) return undefined
            return { cell: cell, html: html, resolution: dsc.getResolution() }
        }
    }

    //getters and setters

    /** @returns {{x:number,y:number}} */
    getGeoCenter() {
        return this.cg.getCenter()
    }
    /** @param {{x:number,y:number}} val @returns {this} */
    setGeoCenter(val) {
        this.cg.setCenter(val)
        return this
    }

    /** @returns {number} */
    getZoomFactor() {
        return this.cg.getZf()
    }
    /** @param {number} val @returns {this} */
    setZoomFactor(val) {
        this.cg.setZf(val)
        return this
    }

    /** @returns {Array.<number>} */
    getZoomFactorExtent() {
        return this.cg.getZfExtent()
    }
    /** @param {Array.<number>} val @returns {this} */
    setZoomFactorExtent(val) {
        this.cg.setZfExtent(val)
        return this
    }

    /** @returns {string} */
    getBackgroundColor() {
        return this.cg.backgroundColor
    }
    /** @param {string} val @returns {this} */
    setBackgroundColor(val) {
        this.cg.backgroundColor = val
        return this
    }

    /** @returns {LineLayer | undefined} */
    getBoundaryLayer() {
        return this.boundaryLayer
    }
    /** @param {object} opts @returns {this} */
    setBoundaryLayer(opts) {
        this.boundaryLayer = new _LineLayer_js__WEBPACK_IMPORTED_MODULE_10__.LineLayer(opts)
        return this
    }

    /** @returns {LabelLayer | undefined} */
    getLabelLayer() {
        return this.labelLayer
    }
    /** @param {object} opts @returns {this} */
    setLabelLayer(opts) {
        this.labelLayer = new _LabelLayer_js__WEBPACK_IMPORTED_MODULE_9__.LabelLayer(opts)
        return this
    }

    /** @returns {this} */
    redraw() {
        this.cg.redraw()
        return this
    }

    /**
     * Add a layer to the app.
     *
     * @param {Dataset} dataset The dataset of the layer
     * @param {Array.<import('./Style').Style>} styles The styles of the layer
     * @param {{visible?:boolean,minZoom?:number,maxZoom?:number,pixNb?:number,cellInfoHTML?:function(import('./Dataset').Cell):string}} opts The layer options.
     * @returns {this}
     */
    addLayerFromDataset(dataset, styles, opts) {
        const lay = new _Layer_js__WEBPACK_IMPORTED_MODULE_1__.Layer(dataset, styles, opts)
        this.layers.push(lay)
        return this
    }

    //dataset creation

    /**
     * Make a local grid dataset.
     *
     * @param {number} resolution The dataset resolution in geographical unit.
     * @param {Array} cells The cells.
     * @param {object=} opts The parameters of the dataset.
     * @returns {Dataset}
     */
    makeLGridDataset(resolution, cells, opts) {
        return new _Dataset_js__WEBPACK_IMPORTED_MODULE_2__.Dataset([new _dataset_LGrid_js__WEBPACK_IMPORTED_MODULE_5__.LGrid(resolution, cells)], [], opts)
    }

    /**
     * Make a CSV grid dataset.
     *
     * @param {string} url The URL of the dataset.
     * @param {number} resolution The dataset resolution in geographical unit.
     * @param {object=} opts The parameters of the dataset.
     * @returns {Dataset}
     */
    makeCSVGridDataset(url, resolution, opts) {
        return new _Dataset_js__WEBPACK_IMPORTED_MODULE_2__.Dataset(
            [
                new _dataset_CSVGrid_js__WEBPACK_IMPORTED_MODULE_4__.CSVGrid(url, resolution, opts).getData(undefined, () => {
                    this.cg.redraw()
                }),
            ],
            [],
            opts
        )
    }

    /**
     * Make a tiled grid dataset.
     *
     * @param {string} url
     * @param {{preprocess?:function(import('./Dataset').Cell):boolean}} opts
     * @returns {Dataset}
     */
    makeTiledGridDataset(url, opts) {
        return new _Dataset_js__WEBPACK_IMPORTED_MODULE_2__.Dataset(
            [
                new _dataset_TiledGrid_js__WEBPACK_IMPORTED_MODULE_6__.TiledGrid(url, this, opts).loadInfo(() => {
                    this.cg.redraw()
                }),
            ],
            [],
            opts
        )
    }

    //multi scale dataset creation

    /**
     * Make a multi scale CSV grid dataset.
     *
     * @param {Array.<number>} resolutions
     * @param {function(number):string} resToURL
     * @param {{preprocess?:function(import('./Dataset').Cell):boolean}} opts
     * @returns {Dataset}
     */
    makeMultiScaleCSVGridDataset(resolutions, resToURL, opts) {
        return _Dataset_js__WEBPACK_IMPORTED_MODULE_2__.Dataset.make(
            resolutions,
            (res) =>
                new _dataset_CSVGrid_js__WEBPACK_IMPORTED_MODULE_4__.CSVGrid(resToURL(res), res, opts).getData(undefined, () => {
                    this.cg.redraw()
                }),
            opts
        )
    }

    //tiled multiscale

    /**
     * Make a multi scale tiled grid dataset.
     *
     * @param {Array.<number>} resolutions
     * @param {function(number):string} resToURL
     * @param {{preprocess?:function(import('./Dataset').Cell):boolean}} opts
     * @returns {Dataset}
     */
    makeMultiScaleTiledGridDataset(resolutions, resToURL, opts) {
        return _Dataset_js__WEBPACK_IMPORTED_MODULE_2__.Dataset.make(
            resolutions,
            (res) =>
                new _dataset_TiledGrid_js__WEBPACK_IMPORTED_MODULE_6__.TiledGrid(resToURL(res), this, opts).loadInfo(() => {
                    this.cg.redraw()
                }),
            opts
        )
    }

    // direct layer creation

    /**
     * Add a layer from a CSV grid dataset.
     *
     * @param {string} url The URL of the dataset.
     * @param {number} resolution The dataset resolution in geographical unit.
     * @param {Array.<import('./Style').Style>} styles The styles, ordered in drawing order.
     * @param {object=} opts The parameters of the dataset and layer.
     * @returns {this}
     */
    addCSVGridLayer(url, resolution, styles, opts) {
        const ds = this.makeCSVGridDataset(url, resolution, opts)
        return this.addLayerFromDataset(ds, styles, opts)
    }

    /**
     *
     * @param {string} url
     * @param {Array.<import('./Style').Style>} styles
     * @param {{visible?:boolean,minZoom?:number,maxZoom?:number,pixNb?:number,cellInfoHTML?:function(import('./Dataset').Cell):string, preprocess?:function(import('./Dataset').Cell):boolean}} opts
     * @returns {this}
     */
    addTiledGridLayer(url, styles, opts) {
        const ds = this.makeTiledGridDataset(url, opts)
        return this.addLayerFromDataset(ds, styles, opts)
    }

    /**
     * Add a layer from a CSV grid dataset.
     *
     * @param {Array.<number>} resolutions
     * @param {function(number):string} resToURL
     * @param {Array.<import('./Style').Style>} styles The styles, ordered in drawing order.
     * @param {object=} opts The parameters of the dataset and layer.
     * @returns {this}
     */
    addMultiScaleCSVGridLayer(resolutions, resToURL, styles, opts) {
        const ds = this.makeMultiScaleCSVGridDataset(resolutions, resToURL, opts)
        return this.addLayerFromDataset(ds, styles, opts)
    }

    /**
     * @param {Array.<number>} resolutions
     * @param {function(number):string} resToURL
     * @param {Array.<import('./Style').Style>} styles
     * @param {{visible?:boolean,minZoom?:number,maxZoom?:number,pixNb?:number,cellInfoHTML?:function(import('./Dataset').Cell):string, preprocess?:function(import('./Dataset').Cell):boolean}} opts
     * @returns {this}
     */
    addMultiScaleTiledGridLayer(resolutions, resToURL, styles, opts) {
        const ds = this.makeMultiScaleTiledGridDataset(resolutions, resToURL, opts)
        return this.addLayerFromDataset(ds, styles, opts)
    }

    /**
     * Add a background layer to the app.
     *
     * @param {object} opts
     * @returns {this}
     */
    addBackgroundLayer(opts) {
        this.bgLayers.push(new _BackgroundLayer_js__WEBPACK_IMPORTED_MODULE_7__.BackgroundLayer(opts))
        this.redraw()
        return this
    }

    /**
     * Add a WMS background layer to the app.
     *
     * @param {object} opts
     * @returns {this}
     */
    addBackgroundLayerWMS(opts) {
        this.bgLayers.push(new _BackgroundLayerWMS_js__WEBPACK_IMPORTED_MODULE_8__.BackgroundLayerWMS(opts))
        this.redraw()
        return this
    }

    /**
     *
     * @param {string} id
     * @param {object} opts
     * @returns {this}
     */
    addZoomSlider(id, opts) {
        this.cg.addZoomSlider(id, opts)
        return this
    }

    /**
     * Adds a set of zoom buttons to the app
     *
     * @param {object} opts
     * @returns {this}
     */
    addZoomButtons(opts) {
        // * opts.id
        // * opts.onZoom - custom event handler function
        // * opts.x
        // * opts.y
        // * opts.delta - zoom delta applied on each click

        this.zoomButtons = new _button_ZoomButtons_js__WEBPACK_IMPORTED_MODULE_12__.ZoomButtons({
            app: this,
            id: opts?.id || 'gridviz-zoom-buttons',
            class: opts?.class,
            x: opts?.x,
            y: opts?.y,
            onZoom: opts?.onZoom,
            delta: opts?.delta || 0.2
        })

        return this
    }

    /**
     * Adds a fullscreen toggle button to the app
     *
     * @param {object} opts
     * @returns {this}
     */
    addFullscreenButton(opts) {
        // * opts.app - the gridviz app
        // * opts.id
        // * opts.x
        // * opts.y

        this.fullscreenButton = new _button_FullscreenButton_js__WEBPACK_IMPORTED_MODULE_13__.FullscreenButton({
            app: this,
            id: opts?.id || 'gridviz-fullscreen-button',
            class: opts?.class,
            x: opts?.x,
            y: opts?.y
        })

        return this
    }

    /** @returns {this} */
    setViewFromURL() {
        this.cg.setViewFromURL()
        return this
    }

    /**
     * @description Add a resize event observer to the Apps container and update the canvas accordingly
     * @param {HTMLDivElement} container The App's container element
     * @param {HTMLCanvasElement} canvas The App canvas element
     * @memberof App
     */
    defineResizeObserver(container, canvas) {
        // listen to resize events
        const resizeObserver = new ResizeObserver((entries) => {
            // make sure canvas has been built
            if (container.clientWidth > 0 && container.clientHeight > 0) {
                // make sure we dont exceed loop limit first
                // see: https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
                window.requestAnimationFrame(() => {
                    if (!Array.isArray(entries) || !entries.length) {
                        return
                    }
                    // update the app and canvas size
                    if (this.h !== container.clientHeight || this.w !== container.clientWidth) {
                        this.h = container.clientHeight
                        this.w = container.clientWidth
                        this.cg.h = container.clientHeight
                        this.cg.w = container.clientWidth
                        canvas.setAttribute('width', '' + this.w)
                        canvas.setAttribute('height', '' + this.h)
                        this.redraw()

                        //update button positions
                        // if (this.zoomButtons) this.zoomButtons.node.style.left = this.w - 50 + 'px'
                        // if (this.fullscreenButton) this.fullscreenButton.node.style.left = this.w - 50 + 'px'
                    }
                })
            }
        })

        resizeObserver.observe(container)
    }

    /**
     * @description Destroy the app and it's event listeners
     * This should significantly reduce the memory used when creating and destroying gridviz app instances (for example in leaflet-gridviz)
     * @memberof App
     */
    destroy() {
        // clear layers
        this.layers = []
        this.bgLayers = []

        // remove event listeners from container
        this.container.removeEventListener('mouseover', this.mouseOverHandler)
        this.container.removeEventListener('mousemove', this.mouseMoveHandler)
        this.container.removeEventListener('mouseout', this.mouseOutHandler)

        // remove canvas
        this.cg.canvas.remove()

        // remove legend
        this.legend?.remove()

        // remove tooltip
        this.tooltip.tooltip?.remove()
    }
}


/***/ }),

/***/ "./src/BackgroundLayer.js":
/*!********************************!*\
  !*** ./src/BackgroundLayer.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundLayer: () => (/* binding */ BackgroundLayer)
/* harmony export */ });
//@ts-check


/**
 *
 * A map background layer in "Slippy map" XYZ standard.
 * See https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
 * https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/#6/27.88/44.48
 * 
 * @author Julien Gaffuri
 */
class BackgroundLayer {
    /**
     * @param {object} opts
     */
    constructor(opts) {
        opts = opts || {}

        /** An attribute to specify if a layer should be drawn or not
         * @type {boolean} */
        this.visible = opts.visible == false ? false : true

        /** The minimum zoom factor: Below this level, the layer is not shown.
         * @type {number} */
        this.minZoom = opts.minZoom || 0

        /** The maximum zoom factor: Above this level, the layer is not shown.
         * @type {number} */
        this.maxZoom = opts.maxZoom || Infinity

        //ensure acceptable values for the zoom limits.
        if (this.minZoom >= this.maxZoom)
            throw new Error('Unexpected zoom limits for layer. Zoom min should be smaller than zoom max.')

        /** The image cache, indexed by z/y/x */
        this.cache = {}

        /**
         * @type {string} */
        this.url = opts.url
        /** @type {function(number,number,number):string} */
        this.urlFun = opts.urlFun || ((x, y, z) => this.url + z + '/' + x + '/' + y + '.png')

        /** @type {Array.<number>} */
        this.resolutions = opts.resolutions
        if (!this.resolutions || this.resolutions.length == 0)
            throw new Error('No resolutions provided for background layer')

        /** @type {number} */
        this.nbPix = opts.nbPix || 256
        /** CRS coordinates of top left corner
         * @type {Array.<number>} */
        this.origin = opts.origin || [0, 0]
        /** @type {number} */
        this.z0 = opts.z0 || 0

        /** @type {function(number):string} */
        this.filterColor = opts.filterColor // (zf) => "#eee7"
    }

    /**
     * Get z/x/y cache data.
     * @param {number} z
     * @param {number} x
     * @param {number} y
     * @returns {HTMLImageElement|string|undefined}
     * @private
     */
    get(z, x, y) {
        let d = this.cache[z]
        if (!d) return
        d = d[x]
        if (!d) return
        return d[y]
    }

    /**
     * Get z/x/y cache data.
     * @param {HTMLImageElement|string} img
     * @param {number} z
     * @param {number} x
     * @param {number} y
     * @returns
     * @private
     */
    put(img, z, x, y) {
        if (!this.cache[z]) this.cache[z] = {}
        if (!this.cache[z][x]) this.cache[z][x] = {}
        this.cache[z][x][y] = img
    }

    /**
     * @param {import("./GeoCanvas").GeoCanvas} cg The canvas where to draw the layer.
     * @returns {void}
     */
    draw(cg) {
        if (!this.resolutions || this.resolutions.length == 0) {
            console.error('No resolutions provided for background layer')
            return
        }

        //
        const zf = cg.getZf()
        const x0 = this.origin[0],
            y0 = this.origin[1]

        //get zoom level and resolution
        let z = 0
        for (z = 0; z < this.resolutions.length; z++) if (this.resolutions[z] < zf) break
        z -= 1
        z = Math.max(0, z)
        z = Math.min(z, this.resolutions.length - 1)
        //console.log(this.resolutions.length, z)
        const res = this.resolutions[z]

        z += this.z0

        const sizeG = this.nbPix * res
        const size = sizeG / zf

        //get tile numbers
        const xGeoToTMS = (x) => Math.ceil((x - x0) / sizeG)
        const yGeoToTMS = (y) => Math.ceil(-(y - y0) / sizeG)
        const xMin = xGeoToTMS(cg.extGeo.xMin) - 1
        const xMax = xGeoToTMS(cg.extGeo.xMax)
        const yMax = yGeoToTMS(cg.extGeo.yMin)
        const yMin = yGeoToTMS(cg.extGeo.yMax) - 1

        //TODO ?
        //cg.setCanvasTransform()

        //handle images
        for (let x = xMin; x < xMax; x++) {
            for (let y = yMin; y < yMax; y++) {
                //get image
                let img = this.get(z, x, y)

                //load image
                if (!img) {
                    const img = new Image()
                    this.put(img, z, x, y)
                    img.onload = () => {
                        cg.redraw()
                    }
                    img.onerror = () => {
                        //case when no image
                        this.put('failed', z, x, y)
                    }
                    img.src = this.urlFun(x, y, z)
                    continue
                }

                //case when no image
                if (img === 'failed') continue
                if (!(img instanceof HTMLImageElement)) {
                    console.log(img)
                    continue
                }
                if (img.width == 0 || img.height == 0) continue

                //draw image
                const xGeo = x0 + x * sizeG
                const yGeo = y0 - y * sizeG
                try {
                    cg.ctx.drawImage(img, cg.geoToPixX(xGeo), cg.geoToPixY(yGeo), size, size)
                    //cg.ctx.drawImage(img, xGeo, yGeo, sizeG, -sizeG)
                } catch (error) {
                    console.error(error)
                }
            }
        }

        //apply filter
        if (this.filterColor) {
            const fc = this.filterColor(zf)
            if (fc && fc != 'none') {
                cg.ctx.fillStyle = fc
                cg.ctx.fillRect(0, 0, cg.w, cg.h)
            }
        }
    }
}


/***/ }),

/***/ "./src/BackgroundLayerWMS.js":
/*!***********************************!*\
  !*** ./src/BackgroundLayerWMS.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundLayerWMS: () => (/* binding */ BackgroundLayerWMS)
/* harmony export */ });
//@ts-check


/**
 *
 * A map WMS background layer.
 * 
 * @author Julien Gaffuri
 */
class BackgroundLayerWMS {
    /**
     * @param {object} opts
     */
    constructor(opts) {
        opts = opts || {}

        /** An attribute to specify if a layer should be drawn or not
         * @type {boolean} */
        this.visible = opts.visible == false ? false : true

        /** The minimum zoom factor: Below this level, the layer is not shown.
         * @type {number} */
        this.minZoom = opts.minZoom || 0

        /** The maximum zoom factor: Above this level, the layer is not shown.
         * @type {number} */
        this.maxZoom = opts.maxZoom || Infinity

        //ensure acceptable values for the zoom limits.
        if (this.minZoom >= this.maxZoom)
            throw new Error('Unexpected zoom limits for layer. Zoom min should be smaller than zoom max.')

        /**
         * @type {string} */
        this.url = opts.url

        /** @type {function(number):string} */
        this.filterColor = opts.filterColor // (zf) => "#eee7"

        /** @type {HTMLImageElement|undefined} */
        this.img = undefined;

        /** @type {number|undefined} */
        this.xMin = undefined;
        /** @type {number|undefined} */
        this.xMax = undefined;
        /** @type {number|undefined} */
        this.yMin = undefined;
        /** @type {number|undefined} */
        this.yMax = undefined;
    }

    /** Check if the view has moved and a new image needs to be retrieved.
     * @private */
    hasMoved(extGeo) {
        if ((extGeo.xMin) != this.xMin) return true
        else if ((extGeo.xMax) != this.xMax) return true
        else if ((extGeo.yMin) != this.yMin) return true
        else if ((extGeo.yMax) != this.yMax) return true
        else return false
    }


    /**
     * @param {import("./GeoCanvas").GeoCanvas} cg The canvas where to draw the layer.
     * @returns {void}
     */
    draw(cg) {

        //update map extent
        cg.updateExtentGeo(0)

        if (!this.hasMoved(cg.extGeo) && this.img) {
            //the map did not move and the image was already downloaded: draw the image
            cg.ctx.drawImage(this.img, 0, 0, cg.w, cg.h)

        } else {
            //the map moved: retrieve new image

            //
            this.xMin = cg.extGeo.xMin
            this.xMax = cg.extGeo.xMax
            this.yMin = cg.extGeo.yMin
            this.yMax = cg.extGeo.yMax

            //build WMS URL
            const url = []
            url.push(this.url)
            url.push("&width=")
            url.push(cg.w)
            url.push("&height=")
            url.push(cg.h)
            //bbox: xmin ymin xmax ymax
            url.push("&bbox=")
            url.push(cg.extGeo.xMin)
            url.push(",")
            url.push(cg.extGeo.yMin)
            url.push(",")
            url.push(cg.extGeo.xMax)
            url.push(",")
            url.push(cg.extGeo.yMax)

            const urlS = url.join("")
            //console.log(urlS)

            if (!this.img) {
                this.img = new Image()
                this.img.onload = () => {
                    cg.redraw()
                }
                this.img.onerror = () => {
                    //case when no image
                    console.warn("Could not retrieve WMS background image from", urlS)
                }
            }

            //set URL to launch the download
            this.img.src = urlS
        }

        //apply filter
        const zf = cg.getZf()
        if (this.filterColor) {
            const fc = this.filterColor(zf)
            if (fc && fc != 'none') {
                cg.ctx.fillStyle = fc
                cg.ctx.fillRect(0, 0, cg.w, cg.h)
            }
        }
    }
}


/***/ }),

/***/ "./src/Dataset.js":
/*!************************!*\
  !*** ./src/Dataset.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dataset: () => (/* binding */ Dataset)
/* harmony export */ });
//@ts-check


/**
 * A grid cell.
 * @typedef {{x: number, y: number}} Cell */
/**
 * An envelope.
 * @typedef { {xMin: number, xMax: number, yMin: number, yMax: number} } Envelope */

/**
 * A multi resolution dataset of grid cells.
 * It consists of different {@link DatasetComponent}s for each resolution.
 *
 * @abstract
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class Dataset {
    /**
     * @param {Array.<import("./DatasetComponent").DatasetComponent>} datasetComponents The dataset components
     * @param {Array.<number>} resolutions The resolutions of the dataset components, in CRS geographical unit
     * @param { {preprocess?:function(Cell):boolean} } opts Options. preprocess: A function to apply on each dataset cell to prepare its values. Can be used also to select cells to keep.
     */
    constructor(datasetComponents, resolutions, opts = {}) {
        opts = opts || {}

        /** The dataset components.
         * @type {Array.<import("./DatasetComponent").DatasetComponent>} */
        this.datasetComponents = datasetComponents

        /** The resolutions of the dataset components, in CRS geographical unit.
         * @type {Array.<number>} */
        this.resolutions = resolutions

        //there must be as many dataset components as resolutions
        if (this.datasetComponents.length > 1 && this.datasetComponents.length != this.resolutions.length)
            throw new Error(
                'Uncompatible number of datasets and resolutions: ' +
                    this.datasetComponents.length +
                    ' ' +
                    this.resolutions.length
            )

        //set dataset preprocesses if specified
        if (opts.preprocess) this.setPrepocesses(opts.preprocess)
    }

    /**
     * Set a preprocess function for all dataset components.
     * This is a function applied on each cell after it has been loaded.
     *
     * @param {function(Cell):boolean} preprocess
     * @returns {this}
     */
    setPrepocesses(preprocess) {
        for (let ds of this.datasetComponents) ds.preprocess = preprocess
        return this
    }

    /**
     * A function to ease the creation of datasets from their components.
     *
     * @param {Array.<number>} resolutions The resolutions of the dataset components, in CRS geographical unit
     * @param {function(number):import("./DatasetComponent").DatasetComponent} resToDatasetComponent Function returning a dataset component from a resolution
     * @param { {preprocess?:function(Cell):boolean} } opts Options. preprocess: A function to apply on each dataset cell to prepare its values
     * @returns {Dataset}
     */
    static make(resolutions, resToDatasetComponent, opts) {
        //make dataset components
        const dsc = []
        for (const res of resolutions) dsc.push(resToDatasetComponent(res))
        //make dataset
        return new Dataset(dsc, resolutions, opts)
    }
}


/***/ }),

/***/ "./src/DatasetComponent.js":
/*!*********************************!*\
  !*** ./src/DatasetComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetComponent: () => (/* binding */ DatasetComponent)
/* harmony export */ });
//@ts-check


/**
 * A dataset component, of grid cells.
 * @abstract
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class DatasetComponent {
    /**
     * @param {string} url The URL of the dataset.
     * @param {number} resolution The dataset resolution, in the CRS geographical unit.
     * @param {{preprocess?:function(import("./Dataset").Cell):boolean}} opts
     * @abstract
     */
    constructor(url, resolution, opts = {}) {
        opts = opts || {}

        /**
         * The url of the dataset.
         * @protected
         * @type {string} */
        this.url = url

        /**
         * The dataset resolution in geographical unit.
         * @protected
         * @type {number} */
        this.resolution = resolution

        /**
         * A preprocess to run on each cell after loading. It can be used to apply some specific treatment before or compute a new column. And also to determine which cells to keep after loading.
         * @type {(function(import("./Dataset").Cell):boolean )| undefined } */
        this.preprocess = opts.preprocess || undefined

        /** The cells within the view
         * @protected
         * @type {Array.<import("./Dataset").Cell>} */
        this.cellsViewCache = []
    }

    /**
     * Request data within a geographic envelope.
     *
     * @abstract
     * @param {import("./Dataset").Envelope|undefined} extGeo
     * @param {function():void} callback
     * @returns {this}
     */
    getData(extGeo, callback) {
        throw new Error('Method getData not implemented.')
    }

    /**
     * Fill the view cache with all cells which are within a geographical envelope.
     * @abstract
     * @param {import("./Dataset").Envelope} extGeo The view geographical envelope.
     * @returns {void}
     */
    updateViewCache(extGeo) {
        throw new Error('Method updateViewCache not implemented.')
    }

    /**
     * Get a cell under a given position, if any.
     *
     * @param {{x:number,y:number}} posGeo
     * @param {Array.<import("./Dataset").Cell>} cells Some cells from the dataset (a subset if necessary, usually the view cache).
     * @returns {import("./Dataset").Cell|undefined}
     */
    getCellFromPosition(posGeo, cells) {
        //compute candidate cell position
        /** @type {number} */
        //const r = this.getResolution()
        /** @type {number} */
        //const cellX = r * Math.floor(posGeo.x / r)
        /** @type {number} */
        //const cellY = r * Math.floor(posGeo.y / r)

        /*/get cell
        for (const cell of cells) {
            if (cell.x != cellX) continue
            if (cell.y != cellY) continue
            return cell
        }
        return undefined*/

        /** @type {number} */
        const r = this.getResolution()
        for (const cell of cells) {
            if (posGeo.x < cell.x) continue
            else if (cell.x + r < posGeo.x) continue
            else if (posGeo.y < cell.y) continue
            else if (cell.y + r < posGeo.y) continue
            else return cell
        }
        return undefined

    }

    //getters and setters

    /** @returns {number} */
    getResolution() {
        return this.resolution
    }

    /** @returns {Array.<import("./Dataset").Cell>} */
    getViewCache() {
        return this.cellsViewCache
    }
}


/***/ }),

/***/ "./src/GeoCanvas.js":
/*!**************************!*\
  !*** ./src/GeoCanvas.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoCanvas: () => (/* binding */ GeoCanvas)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");
//@ts-check


/** @typedef { {xMin: number, xMax: number, yMin: number, yMax: number} } Envelope */

;


/**
 * A HTML canvas for geo data display, enhanced with zoom and pan capabilities.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class GeoCanvas {
    /**
     * @constructor
     * @param {HTMLCanvasElement} canvas
     * @param {object} center Geographical coordinates of the center
     * @param {number} zf The zoom factor (pixel size, in ground m)
     * @param {object} opts
     */
    constructor(canvas, center, zf, opts) {
        this.opts = opts || {}

        /** @type {HTMLCanvasElement} */
        this.canvas = canvas

        /** @type {number} */
        this.w = this.canvas.offsetWidth
        /** @type {number} */
        this.h = this.canvas.offsetHeight

        this.canvas.width = this.w
        this.canvas.height = this.h

        const ctx = this.canvas.getContext('2d')
        if (!ctx) throw 'Impossible to create canvas 2D context'
        /**@type {CanvasRenderingContext2D} */
        this.ctx = ctx

        // set geo coordinates of the center
        this.center = center || { x: this.w * 0.5, y: this.h * 0.5 }

        // zoom factor: pixel size, in m/pix
        /** @type {number} */
        this.zf = zf

        /** Background color.
         * @type {string} */
        this.backgroundColor = opts.backgroundColor || 'white'

        /** @type {function():void} */
        this.onZoomStartFun = opts.onZoomStartFun

        /** @type {function():void} */
        this.onZoomEndFun = opts.onZoomEndFun

        /** @type {function():void} */
        this.onZoomFun = opts.onZoomFun

        //current extent
        /** @type {Envelope} */
        this.extGeo = { xMin: NaN, xMax: NaN, yMin: NaN, yMax: NaN }
        this.updateExtentGeo()

        //rely on d3 zoom for pan/zoom
        if (!opts.disableZoom) {
            let tP = d3_zoom__WEBPACK_IMPORTED_MODULE_0__.zoomIdentity
            const z = (0,d3_zoom__WEBPACK_IMPORTED_MODULE_0__.zoom)()
                //to make the zooming a bit faster
                .wheelDelta((e) => -e.deltaY * (e.deltaMode === 1 ? 0.07 : e.deltaMode ? 1 : 0.004))
                .on('zoom', (e) => {
                    const t = e.transform
                    const f = tP.k / t.k
                    if (f == 1) {
                        //pan
                        const dx = tP.x - t.x
                        const dy = tP.y - t.y
                        this.pan(dx * this.getZf(), -dy * this.getZf())
                    } else {
                        const se = e.sourceEvent
                        if (se instanceof WheelEvent) {
                            //zoom at the mouse position
                            this.zoom(
                                f,
                                this.pixToGeoX(e.sourceEvent.offsetX),
                                this.pixToGeoY(e.sourceEvent.offsetY)
                            )
                        } else if (se instanceof TouchEvent) {
                            //compute average position of the touches
                            let tx = 0,
                                ty = 0
                            for (let tt of se.targetTouches) {
                                tx += tt.clientX
                                ty += tt.clientY
                            }
                            tx /= se.targetTouches.length
                            ty /= se.targetTouches.length
                            //zoom at this average position
                            this.zoom(f, this.pixToGeoX(tx), this.pixToGeoY(ty))
                        }
                    }
                    tP = t

                    if (this.onZoomFun) this.onZoomFun(e)
                })
                .on('start', (e) => {
                    this.canvasSave.c = document.createElement('canvas')
                    this.canvasSave.c.setAttribute('width', '' + this.w)
                    this.canvasSave.c.setAttribute('height', '' + this.h)
                    this.canvasSave.c.getContext('2d').drawImage(this.canvas, 0, 0)
                    this.canvasSave.dx = 0
                    this.canvasSave.dy = 0
                    this.canvasSave.f = 1

                    if (this.onZoomStartFun) this.onZoomStartFun(e)
                })
                .on('end', (e) => {
                    this.redraw(true)
                    this.canvasSave = { c: null, dx: 0, dy: 0, f: 1 }

                    if (this.onZoomEndFun) this.onZoomEndFun(e)
                })
            z((0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(this.canvas))
        }
        //select(this.canvas).call(z);

        /** Zoom extent, to limit zoom in and out
         *  @type {Array.<number>} */
        this.zfExtent = [0, Infinity]

        /** Canvas state, to be used to avoid unnecessary redraws on zoom/pan
         *  @type {{c:HTMLCanvasElement|null,dx:number,dy:number,f:number}} */
        this.canvasSave = { c: null, dx: 0, dy: 0, f: 1 }
    }

    /** @param {{x:number,y:number}} v Geographical coordinates of the center */
    setCenter(v) {
        this.center = v
    }
    /** @returns {{x:number,y:number}} Geographical coordinates of the center */
    getCenter() {
        return this.center
    }

    /** @param {number} v The zoom factor (pixel size, in ground m) */
    setZf(v) {
        this.zf = v
        if (this.slider) this.slider.attr('value', +this.zf)
    }
    /** @returns {number} The zoom factor (pixel size, in ground m) */
    getZf() {
        return this.zf
    }

    /** @param {Array.<number>} v */
    setZfExtent(v) {
        this.zfExtent = v
    }
    /** @returns {Array.<number>} */
    getZfExtent() {
        return this.zfExtent
    }

    /** Initialise canvas transform with identity transformation. */
    initCanvasTransform() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    }

    /** Initialise canvas transform with geo to screen transformation, so that geo objects can be drawn directly in geo coordinates. */
    setCanvasTransform() {
        const k = 1 / this.getZf()
        const tx = -this.center.x / this.getZf() + this.w * 0.5
        const ty = this.center.y / this.getZf() + this.h * 0.5
        this.ctx.setTransform(k, 0, 0, -k, tx, ty)
    }

    /** Get the transformation matrix to webGL screen coordinates, within [-1,1]*[-1,1] */
    getWebGLTransform() {
        const kx = 2.0 / (this.w * this.getZf())
        const ky = 2.0 / (this.h * this.getZf())
        return [kx, 0.0, 0.0, 0.0, ky, 0.0, -kx * this.center.x, -ky * this.center.y, 1.0]
    }

    /** The function specifying how to draw the map.
     * @param {boolean} strong */
    redraw(strong = true) {
        throw new Error('Method redraw not implemented.')
    }

    /**
     * Clear. To be used before a redraw for example.
     * @param {string} color
     */
    clear(color = 'white') {
        if (this.opts.transparentBackground) {
            this.ctx.clearRect(0, 0, this.w, this.h)
        } else {
            if (this.ctx) this.ctx.fillStyle = color
            this.ctx.fillRect(0, 0, this.w, this.h)
        }
    }

    /**
     * @param {number} dxGeo
     * @param {number} dyGeo
     */
    pan(dxGeo = 0, dyGeo = 0) {
        //TODO force extend to remain
        this.center.x += dxGeo
        this.center.y += dyGeo
        this.updateExtentGeo()

        if (this.canvasSave.c) {
            this.canvasSave.dx -= dxGeo / this.getZf()
            this.canvasSave.dy += dyGeo / this.getZf()
            this.clear(this.backgroundColor)
            // this doesnt work on mobile https://github.com/eurostat/gridviz/issues/98
            this.ctx.drawImage(this.canvasSave.c, this.canvasSave.dx, this.canvasSave.dy)
        }
    }

    /**
     * Zoom.
     * @param {number} f The zoom factor, within ]0, Infinity]. 1 is for no change. <1 to zoom-in, >1 to zoom-out.
     * @param {number} xGeo The x geo position fixed in the screen.
     * @param {number} yGeo The y geo position fixed in the screen.
     */
    zoom(f = 1, xGeo = this.center.x, yGeo = this.center.y) {
        //TODO force geo extend to remain

        //trying to zoom in/out beyond limit
        if (this.zfExtent[0] == this.getZf() && f <= 1) return
        if (this.zfExtent[1] == this.getZf() && f >= 1) return

        //ensure zoom extent preserved
        const newZf = f * this.getZf()
        if (newZf < this.zfExtent[0]) f = this.zfExtent[0] / this.getZf()
        if (newZf > this.zfExtent[1]) f = this.zfExtent[1] / this.getZf()

        this.setZf(f * this.getZf())
        const dxGeo = (xGeo - this.center.x) * (1 - f)
        this.center.x += dxGeo
        const dyGeo = (yGeo - this.center.y) * (1 - f)
        this.center.y += dyGeo
        this.updateExtentGeo()

        //TODO
        //this.redraw(false)
        if (this.canvasSave.c) {
            this.clear(this.backgroundColor)
            this.canvasSave.f /= f
            this.canvasSave.dx = this.geoToPixX(xGeo) * (1 - this.canvasSave.f)
            this.canvasSave.dy = this.geoToPixY(yGeo) * (1 - this.canvasSave.f)
            this.clear(this.backgroundColor)
            this.ctx.drawImage(
                this.canvasSave.c,
                this.canvasSave.dx,
                this.canvasSave.dy,
                this.canvasSave.f * this.canvasSave.c.width,
                this.canvasSave.f * this.canvasSave.c.height
            )
        }
    }

    /**
     * @param {number} marginPx
     * @returns {Envelope} The envelope of the view, in geo coordinates.
     */
    updateExtentGeo(marginPx = 20) {
        this.extGeo = {
            xMin: this.pixToGeoX(-marginPx),
            xMax: this.pixToGeoX(this.w + marginPx),
            yMin: this.pixToGeoY(this.h + marginPx),
            yMax: this.pixToGeoY(-marginPx),
        }
        return this.extGeo
    }

    /**
     * Check if the object has to be drawn
     *
     * @param {{x:number,y:number}} obj
     */
    toDraw(obj) {
        if (obj.x < this.extGeo.xMin) return false
        if (obj.x > this.extGeo.xMax) return false
        if (obj.y < this.extGeo.yMin) return false
        if (obj.y > this.extGeo.yMax) return false
        return true
    }

    //conversion functions
    /**
     * @param {number} xGeo Geo x coordinate, in m.
     * @returns {number} Screen x coordinate, in pix.
     */
    geoToPixX(xGeo) {
        return (xGeo - this.center.x) / this.getZf() + this.w * 0.5
    }
    /**
     * @param {number} yGeo Geo y coordinate, in m.
     * @returns {number} Screen y coordinate, in pix.
     */
    geoToPixY(yGeo) {
        return -(yGeo - this.center.y) / this.getZf() + this.h * 0.5
    }
    /**
     * @param {number} x Screen x coordinate, in pix.
     * @returns {number} Geo x coordinate, in m.
     */
    pixToGeoX(x) {
        return (x - this.w * 0.5) * this.getZf() + this.center.x
    }
    /**
     * @param {number} y Screen y coordinate, in pix.
     * @returns {number} Geo y coordinate, in m.
     */
    pixToGeoY(y) {
        return -(y - this.h * 0.5) * this.getZf() + this.center.y
    }

    /** Get x,y,z elements from URL and assign them to the view center and zoom level. */
    setViewFromURL() {
        const x = GeoCanvas.getParameterByName('x'),
            y = GeoCanvas.getParameterByName('y'),
            z = GeoCanvas.getParameterByName('z')
        const c = this.getCenter()
        if (x != null && x != undefined && !isNaN(+x)) c.x = +x
        if (y != null && y != undefined && !isNaN(+y)) c.y = +y
        if (z != null && z != undefined && !isNaN(+z)) this.setZf(+z)
    }

    /**
     *
     * @param {string} id
     * @param {object} opts
     * @returns {this}
     */
    addZoomSlider(id, opts) {
        opts = opts || {}
        opts.width = opts.width || '30px'
        opts.height = opts.height || '300px'

        //the div element
        const div = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])('#' + id)
        if (div.empty()) {
            console.error('Could not find div element to build zoom slider. Id: ' + id)
            return this
        }

        const th = this
        /** */
        this.slider = div
            .append('input')
            .attr('type', 'range')
            .attr('min', this.getZfExtent()[0])
            .attr('max', this.getZfExtent()[1])
            .attr('value', this.getZf())
            .on('input', function (d) {
                if (!this || !this.value) return
                const v = +this.value
                ;(0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(this).attr('value', v)
                th.setZf(v)
                //redraw
                th.redraw()
            })
            .style('width', opts.width)
            .style('height', opts.height)
            .style('opacity', 0.7)
            .on('mouseover', function (d) {
                (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(this).style('opacity', 1)
            })
            .on('mouseout', function (d) {
                (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(this).style('opacity', 0.7)
            })
            .style('-webkit-appearance', 'slider-vertical') //for chrome
            .style('writing-mode', 'bt-lr') //for IE/edge
            .attr('orient', 'vertical') //for firefox
            .style('background', 'lightgray')
            .style('outline', 'none')
            .style('-webkit-transition', '.2s')
            .style('transition', 'opacity .2s')

        //TODO
        /*select(".slider::-webkit-slider-thumb")
            .style("-webkit-appearance", "none")
            .style("appearance", "none")
            .style("width", "30px")
            .style("height", "40px")
            .style("background", "black")
            .style("cursor", "pointer")*/

        /*select("slider::-moz-range-thumb")
            .style("-webkit-appearance", "none")
            .style("width", "30px")
            .style("height", "40px")
            .style("background", "#04AA6D")
            .style("cursor", "pointer")*/
        /*
            .slider::ms-thumb,
        .slider::-moz-range-thumb {
        }*/

        return this
    }

    /**
     * Get a URL parameter by name.
     *
     * @param {string} name
     * @returns {string | null}
     */
    static getParameterByName(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search)
        return !results ? null : decodeURIComponent(results[1].replace(/\+/g, ' '))
    }
}


/***/ }),

/***/ "./src/LabelLayer.js":
/*!***************************!*\
  !*** ./src/LabelLayer.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelLayer: () => (/* binding */ LabelLayer)
/* harmony export */ });
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/dsv.js");
//@ts-check


;

/** A label. The name is the text to show. (x,y) are the coordinates in the same CRS as the grid.
 * @typedef {{name: string, x:number, y:number }} Label */

/**
 * A (generic) layer for placename labels, to be shown on top of the grid layers.
 * The input is a CSV file with the position (x, y) of the labels and name + some other info on the label importance.
 * If the label data is not in the expected format or in the same CRS as the grid, it can be corrected with the "preprocess" function.
 * The selection of the label, their style (font, weight, etc.) and color can be specified depending on their importance and the zoom level.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class LabelLayer {
    /**
     * @param {object} opts
     */
    constructor(opts) {
        opts = opts || {}

        /**
         * The URL of the label data, as CSV file.
         * The file should contain the information for each label such as the text, the position and other information for the display of the label according to the zoom level.
         * If necessary, this data can be reformated with the 'preprocess' parameter.
         * @private
         * @type {string} */
        this.url = opts.url

        /** Specify if and how a label should be drawn, depending on its importance and the zoom level.
         * @private
         * @type {function(Label,number):string} */
        this.style = opts.style || (() => 'bold 1em Arial')

        /** Specify the label color, depending on its importance and the zoom level.
         * @private
         * @type {function(Label,number):string} */
        this.color = opts.color || (opts.dark ? () => '#ddd' : () => '#222')

        /** Specify the label halo color, depending on its importance and the zoom level.
         * @private
         * @type {function(Label,number):string} */
        this.haloColor = opts.haloColor || (opts.dark ? () => '#000000BB' : () => '#FFFFFFBB')

        /** Specify the label halo width, depending on its importance and the zoom level.
         * @private
         * @type {function(Label,number):number} */
        this.haloWidth = opts.haloWidth || (() => 4)

        /** The anchor where to draw the text, from label position. See HTML-canvas textAlign property.
         * "left" || "right" || "center" || "start" || "end"
         * @private
         * @type {CanvasTextAlign} */
        this.textAlign = opts.textAlign || 'start'

        /**
         * @private
         * @type {Array.<number>} */
        this.offsetPix = opts.offsetPix || [5, 5]

        /**
         * A preprocess to run on each label after loading.
         * It can be used to apply some specific treatment before, format the label data, project coordinates, etc.
         * Return false if the label should not be kept.
         * @private
         * @type {function(Label):boolean} */
        this.preprocess = opts.preprocess

        /**
         * @private
         * @type {Array.<Label> | undefined} */
        this.labels = undefined

        /**
         * @private
         * @type {string} */
        this.loadingStatus = 'notLoaded'
    }

    /**
     * Draw the label layer.
     *
     * @param {import("./GeoCanvas").GeoCanvas} cg The canvas where to draw the layer.
     * @returns {void}
     */
    draw(cg) {
        //load labels, if not done yet.
        if (!this.labels) {
            this.load(cg.redraw)
            return
        }

        //zoom factor
        const zf = cg.getZf()

        //text align
        cg.ctx.textAlign = this.textAlign || 'start'

        //line join and cap
        cg.ctx.lineJoin = 'bevel' //|| "round" || "miter";
        cg.ctx.lineCap = 'butt' //|| "round" || "square";

        //draw in pix coordinates
        cg.initCanvasTransform()

        //draw labels, one by one
        for (const lb of this.labels) {
            //get label style
            const st = this.style(lb, zf)
            if (!st) continue
            cg.ctx.font = st

            //check label within the view, to be drawn
            if (!cg.toDraw(lb)) continue

            //position
            const xP = cg.geoToPixX(lb.x) + this.offsetPix[0]
            const yP = cg.geoToPixY(lb.y) - this.offsetPix[1]

            //label stroke, for the halo
            if (this.haloColor && this.haloWidth) {
                const hc = this.haloColor(lb, zf)
                const hw = this.haloWidth(lb, zf)
                if (hc && hw && hw > 0) {
                    cg.ctx.strokeStyle = hc
                    cg.ctx.lineWidth = hw
                    cg.ctx.strokeText(lb.name, xP, yP)
                }
            }

            //label fill
            if (this.color) {
                const col = this.color(lb, zf)
                if (col) {
                    cg.ctx.fillStyle = col
                    cg.ctx.fillText(lb.name, xP, yP)
                }
            }
        }
    }

    /**
     * Load data for labels, from URL this.url
     * @param {function():void} callback
     * @private
     */
    async load(callback) {
        if (!this.url) {
            console.log('Failed loading labels: No URL specified. ' + this.url)
            this.loadingStatus = 'failed'
            this.labels = []
            return
        }

        //check if data already loaded
        if (this.loadingStatus != 'notLoaded') return

        //load data
        this.loadingStatus = 'loading'

        try {
            /** @type { Array.<Label> } */
            const data = await (0,d3_fetch__WEBPACK_IMPORTED_MODULE_0__.csv)(this.url)

            //preprocess/filter
            if (this.preprocess) {
                this.labels = []
                for (const c of data) {
                    const b = this.preprocess(c)
                    if (b == false) continue
                    this.labels.push(c)
                }
            } else {
                //store labels
                this.labels = data
            }

            this.loadingStatus = 'loaded'

            //redraw
            if (callback) callback()
        } catch (error) {
            console.log('Failed loading labels from ' + this.url)
            this.labels = []
            this.loadingStatus = 'failed'
        }
    }
}


/***/ }),

/***/ "./src/Layer.js":
/*!**********************!*\
  !*** ./src/Layer.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layer: () => (/* binding */ Layer)
/* harmony export */ });
//@ts-check


/**
 * A layer, which specifies a dataset to be shown with specified styles.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class Layer {
    /**
     * @param {import("./Dataset").Dataset} dataset The multi resolution dataset to show.
     * @param {Array.<import("./Style").Style>} styles The styles, ordered in drawing order.
     * @param {{visible?:boolean,alpha?:number,blendOperation?:GlobalCompositeOperation,minZoom?:number,maxZoom?:number,pixNb?:number,cellInfoHTML?:function(import("./Dataset").Cell):string}} opts
     *      minZoom: The minimum zoom level when to show the layer. maxZoom: The maximum zoom level when to show the layer
     */
    constructor(dataset, styles, opts = {}) {
        opts = opts || {}

        /** @type {import("./Dataset").Dataset} */
        this.dataset = dataset
        /** @type {Array.<import("./Style").Style>} */
        this.styles = styles

        /** An attribute to specify if a layer should be drawn or not
         * @type {boolean} */
        this.visible = opts.visible === false ? false : true

        /** A function returning the alpha (transparency/opacity), between 0.0 (fully transparent) and 1.0 (fully opaque).
         *  The function parameter is the zoom factor.
         * (see CanvasRenderingContext2D: globalAlpha property)
         * @type {function(number):number|undefined} */
        this.alpha = opts.alpha

        /** A function returning the blend operation. The function parameter is the zoom factor.
         * (see CanvasRenderingContext2D: globalCompositeOperation property)
         * @type {GlobalCompositeOperation} */
        this.blendOperation = opts.blendOperation || (zf => "source-over")

        /** The minimum zoom factor: Below this level, the layer is not shown.
         * @type {number} */
        this.minZoom = opts.minZoom || 0

        /** The maximum zoom factor: Above this level, the layer is not shown.
         * @type {number} */
        this.maxZoom = opts.maxZoom || Infinity

        //ensure acceptable values for the zoom limits.
        if (this.minZoom >= this.maxZoom)
            throw new Error('Unexpected zoom limits for layer. Zoom min should be smaller than zoom max.')

        /** Unit: number of pixels
         * @type {number} */
        this.pixNb = opts.pixNb || 3

        /**
         * The function returning cell information as HTML.
         * This is typically used for tooltip information.
         * @type {function(import("./Dataset").Cell, number):string} */
        this.cellInfoHTML = opts.cellInfoHTML || Layer.defaultCellInfoHTML
    }

    /**
     * Return the relevant dataset component for a specified zoom factor.
     *
     * @param {number} zf
     * @returns {import("./DatasetComponent").DatasetComponent|undefined}
     * */
    getDatasetComponent(zf) {
        if (zf < this.minZoom || zf > this.maxZoom) return

        //special case whith single component dataset
        if (this.dataset.datasetComponents.length == 1) return this.dataset.datasetComponents[0]

        const rs = this.dataset.resolutions
        let i = 0
        let z = rs[i] / this.pixNb
        while (z < zf && i < rs.length) {
            i++
            z = rs[i] / this.pixNb
        }
        //if (i == 0) return this.dataset.datasetComponents[0];
        //return this.dataset.datasetComponents[i - 1];
        if (i == rs.length) return this.dataset.datasetComponents[rs.length - 1]
        return this.dataset.datasetComponents[i]
    }

    /**
     * The default function returning cell information as HTML.
     * This is typically used for tooltip information.
     *
     * @param {import("./Dataset").Cell} cell
     * @returns {string}
     */
    static defaultCellInfoHTML(cell) {
        const buf = []
        for (const key of Object.keys(cell)) {
            if (key === 'x') continue
            if (key === 'y') continue
            buf.push('<b>', key, '</b>', ' : ', cell[key], '<br>')
        }
        return buf.join('')
    }
}


/***/ }),

/***/ "./src/Legend.js":
/*!***********************!*\
  !*** ./src/Legend.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Legend: () => (/* binding */ Legend)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
//@ts-check


;

/**
 * A legend container.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class Legend {
    /**
     * @param {Object} opts
     */
    constructor(opts) {
        opts = opts || {}

        /** @type {string} */
        this.id = opts.id

        //TODO stop using it. Use style method below instead.

        /** @type {number} @deprecated */
        this.top = opts.top
        /** @type {number} @deprecated */
        this.bottom = opts.bottom
        /** @type {number} @deprecated */
        this.left = opts.left
        /** @type {number} @deprecated */
        this.right = opts.right
        /** @type {string} @deprecated */
        this.background = opts.background || 'none'
        /** @type {string} @deprecated */
        this.padding = opts.padding || '5px'
        /** @type {string} @deprecated */
        this.border = opts.border || '0px'
        /** @type {string} @deprecated */
        this['border-radius'] = opts['border-radius'] || 'none'
        /** @type {string} @deprecated */
        this['box-shadow'] = opts['box-shadow'] || 'none'
        /** @type {string} @deprecated */
        this['font-family'] = opts['font-family'] || 'Helvetica, Arial, sans-serif'
        /** @type {string} @deprecated */
        this.width = opts.width
        /** @type {string} @deprecated */
        this.height = opts.height

        //the div element
        if (this.id) this.div = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])('#' + this.id)

        if (!this.div || this.div.empty()) {
            this.div = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(document.createElement('div'))
            if (this.id) this.div.attr('id', this.id)
        }

        //set style
        this.div.style('background', this.background)
        this.div.style('padding', this.padding)
        this.div.style('border', this.border)
        this.div.style('border-radius', this['border-radius'])
        this.div.style('box-shadow', this['box-shadow'])
        this.div.style('font-family', this['font-family'])

        if (this.width) this.div.style('width', this.width)
        if (this.height) this.div.style('height', this.height)
    }

    /**
     * Apply a style to the legend div.
     * @param {string} k
     * @param {string} v
     * @returns {this}
     */
    style(k, v) {
        this.div.style(k, v)
        return this
    }

    /**
     * @param {Object} opts
     * @abstract
     */
    update(opts) {
        console.error('Legend update not implemented yet.')
    }
}


/***/ }),

/***/ "./src/LineLayer.js":
/*!**************************!*\
  !*** ./src/LineLayer.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineLayer: () => (/* binding */ LineLayer)
/* harmony export */ });
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/json.js");
//@ts-check


;

/**
 * @author Joseph Davies, Julien Gaffuri
 */
class LineLayer {
    /**
     * @param {object} opts
     */
    constructor(opts) {
        opts = opts || {}

        /**
         * @private
         * @type {string} */
        this.url = opts.url

        /**
         * A preprocess to run on each feature after loading.
         * It can be used to apply some specific treatment before, format the label data, project coordinates, etc.
         * Return false if the label should not be kept.
         * @private
         * @type {function(object):boolean} */
        this.preprocess = opts.preprocess

        /**
         * @private
         * @type {function(object,number):string} */
        this.color = opts.color || ((f, zf) => 'gray')
        /**
         * @private
         * @type {function(object,number):number} */
        this.width = opts.width || ((f, zf) => 2)
        /**
         * @private
         * @type {function(object,number):Array.<number>|undefined} */
        this.lineDash = opts.lineDash || ((f, zf) => undefined)

        /**
         * @private
         * @type {Array.<object> | undefined} */
        this.fs = undefined

        /**
         * @private
         * @type {string} */
        this.loadingStatus = 'notLoaded'
    }

    /**
     * Draw the layer.
     * @param {import("./GeoCanvas").GeoCanvas} cg The canvas where to draw the layer.
     * @returns {void}
     */
    draw(cg) {
        //load data, if not done yet.
        if (!this.fs) {
            this.load(cg.redraw)
            return
        }

        //TODO sort lines by width ?

        //zoom factor
        const zf = cg.getZf()

        //draw in geo coordinates
        cg.setCanvasTransform()

        for (const f of this.fs) {
            const cs = f.geometry.coordinates
            if (cs.length < 2) continue

            //set color
            const col = this.color(f, zf)
            if (!col || col == 'none') continue
            cg.ctx.strokeStyle = col

            //set linewidth
            const wP = this.width(f, zf)
            if (!wP || wP < 0) continue
            cg.ctx.lineWidth = wP * zf

            //set line dash
            const ldP = this.lineDash(f, zf)
            if (ldP) cg.ctx.setLineDash(ldP)

            //draw line
            cg.ctx.beginPath()
            cg.ctx.moveTo(cs[0][0], cs[0][1])
            for (let i = 1; i < cs.length; i++) cg.ctx.lineTo(cs[i][0], cs[i][1])
            cg.ctx.stroke()
        }

        //...
        cg.ctx.setLineDash([])
    }

    /**
     * Load data for labels, from URL this.url
     * @param {function():void} callback
     * @private
     */
    async load(callback) {
        if (!this.url) {
            console.log('Failed loading boundaries: No URL specified. ' + this.url)
            this.loadingStatus = 'failed'
            this.labels = []
            return
        }

        //check if data already loaded
        if (this.loadingStatus != 'notLoaded') return

        //load data
        this.loadingStatus = 'loading'

        try {
            const data_ = await (0,d3_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(this.url)

            /** @type { Array.<object> } */
            const data = data_.features

            //preprocess/filter
            if (this.preprocess) {
                this.fs = []
                for (const c of data) {
                    const b = this.preprocess(c)
                    if (b == false) continue
                    this.fs.push(c)
                }
            } else {
                //store labels
                this.fs = data
            }

            this.loadingStatus = 'loaded'

            //redraw
            if (callback) callback()
        } catch (error) {
            console.log('Failed loading boundaries from ' + this.url)
            this.fs = []
            this.loadingStatus = 'failed'
        }
    }
}


/***/ }),

/***/ "./src/Style.js":
/*!**********************!*\
  !*** ./src/Style.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style: () => (/* binding */ Style)
/* harmony export */ });
//@ts-check


/**
 * Statistics of a set of values
 * @typedef {{min:number,max:number}} Stat */

/** @typedef {"square"|"circle"|"diamond"|"donut"|"none"} Shape */

/**
 * A style, to show a grid dataset.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class Style {
    /**
     * @abstract
     * @param {{filter?:function(import('./Dataset').Cell):boolean,offset?:function(import('./Dataset').Cell,number,number):{dx:number,dy:number},visible?:boolean,alpha?:function(number):number,blendOperation?:function(number):GlobalCompositeOperation,minZoom?:number,maxZoom?:number,drawFun?:function}} opts
     */
    constructor(opts) {
        opts = opts || {}

        /** A filter function to apply to the cell list, to filter out some cells not to be drawn (such as for example the cells with value=0).
         * @protected
         * @type {function(import('./Dataset').Cell):boolean} */
        this.filter = opts.filter || (() => true)

        /** An offset. This is to alter the position of all symbols in a given direction. In geographical unit.
         * @protected
         * @type {function(import('./Dataset').Cell,number,number):{dx:number,dy:number}} */
        this.offset = opts.offset || ((c, r, zf) => ({ dx: 0, dy: 0 }))

        /** An attribute to specify if a style should be drawn or not
         * @type {boolean} */
        this.visible = opts.visible === false ? false : true

        /** A function returning the alpha (transparency/opacity), between 0.0 (fully transparent) and 1.0 (fully opaque).
         *  The function parameter is the zoom factor.
         * (see CanvasRenderingContext2D: globalAlpha property)
         * @type {function(number):number|undefined} */
        this.alpha = opts.alpha

        /** A function returning the blend operation. The function parameter is the zoom factor.
         * (see CanvasRenderingContext2D: globalCompositeOperation property)
         * @type {function(number):GlobalCompositeOperation} */
        this.blendOperation = opts.blendOperation || (zf => "source-over")

        /** The minimum zoom factor: Below this level, the layer is not shown.
         * @type {number}
         * */
        this.minZoom = opts.minZoom || 0

        /** The maximum zoom factor: Above this level, the layer is not shown.
         * @type {number}
         * */
        this.maxZoom = opts.maxZoom || Infinity

        /** A draw function for the style.
         * @type {function} */
        this.drawFun = opts.drawFun

        //ensure acceptable values for the zoom limits.
        if (this.minZoom >= this.maxZoom)
            throw new Error('Unexpected zoom limits for layer. Zoom min should be smaller than zoom max.')

        /**
         * @public
         * @type {Array.<import("./Legend").Legend>} */
        this.legends = []
    }

    /**
     * Draw cells.
     *
     * @param {Array.<import('./Dataset').Cell>} cells The cells to draw.
     * @param {number} resolution Their resolution (in geographic unit)
     * @param {import("./GeoCanvas").GeoCanvas} cg The canvas where to draw them.
     * @abstract
     */
    draw(cells, resolution, cg) {
        if (this.drawFun) this.drawFun(cells, resolution, cg)
        else throw new Error('Method draw not implemented.')
    }

    //getters and setters

    /** @returns {function(import('./Dataset').Cell,number,number):{dx:number,dy:number}} */
    getOffset() {
        return this.offset
    }
    /** @param {function(import('./Dataset').Cell,number,number):{dx:number,dy:number}} val @returns {this} */
    setOffset(val) {
        this.offset = val
        return this
    }

    /** Hide all legend elements of the style, if any
     * @param {object} opts
     * @returns {this} */
    updateLegends(opts) {
        for (const lg of this.legends) lg.update(opts)
        return this
    }

    /**
     * Compute some statistics on a value of some cells.
     * This is used to define how to draw specifically the cells within the view.
     * TODO: compute median ?
     *
     * @param {Array.<import('./Dataset').Cell>} cells
     * @param {function(import('./Dataset').Cell):number} valFun
     * @param {boolean} ignoreZeros
     * @returns {Stat | undefined}
     */
    static getStatistics(cells, valFun, ignoreZeros) {
        if (!cells || cells.length == 0) return undefined
        let min = Infinity
        let max = -Infinity
        //let sum = 0
        //let nb = 0
        for (const cell of cells) {
            const v = +valFun(cell)
            if (ignoreZeros && !v) continue
            if (v < min) min = v
            if (v > max) max = v
            //sum += v
            //nb++
        }
        return { min: min, max: max }
    }
}


/***/ }),

/***/ "./src/Tooltip.js":
/*!************************!*\
  !*** ./src/Tooltip.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
//@ts-check


;
//import { transition } from "d3-transition";

/**
 * A generic class to make a tooltip.
 * It is a div element, which can be moved under the mouse pointer and filled with some information in html.
 */
class Tooltip {
    /**
     * @param {object} opts
     */
    constructor(opts) {
        opts = opts || {}

        /** @type {string} */
        this.div = opts.div || 'tooltip_eurostat'
        /** @type {string} */
        this.maxWidth = opts.maxWidth || '20em'
        /** @type {string} */
        this.fontSize = opts.fontSize || '1.2em'
        /** @type {string} */
        this.background = opts.background || 'white'
        /** @type {string} */
        this.padding = opts.padding || '5px'
        /** @type {string} */
        this.border = opts.border || '0px'
        /** @type {string} */
        this['border-radius'] = opts['border-radius'] || '0px'
        /** @type {string} */
        this['box-shadow'] = opts['box-shadow'] || '5px 5px 5px grey'
        /** @type {string} */
        this['font-family'] = opts['font-family'] || 'Helvetica, Arial, sans-serif'

        /** @type {number} */
        this.transitionDuration = opts.transitionDuration || 100
        /** @type {number} */
        this.xOffset = opts.xOffset || 30
        /** @type {number} */
        this.yOffset = opts.yOffset || 20
        /** @type {number} */ // e.g. to prevent mouse cursor covering cell being highlighted
        this.yMouseOffset = opts.yMouseOffset || 0
        /** @type {number} */
        this.xMouseOffset = opts.xMouseOffset || 0
        /** @type {HTMLElement} */
        this.parentElement = opts.parentElement || document.body

        /**
         * @public
         * @type {import("d3-selection").Selection} */
        this.tooltip = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])('#' + this.div)

        if (this.tooltip.empty()) {
            //create tooltip DOM node
            // this.tooltip = select(
            //     '#' + this.parentElement.id && this.parentElement.id != ''
            //         ? '#' + this.parentElement.id
            //         : 'body'
            // )
            this.tooltip = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])('body').append('div').attr('id', this.div)
        }

        //initialise
        this.tooltip.style('max-width', this.maxWidth)
        this.tooltip.style('overflow', 'hidden')
        this.tooltip.style('font-size', this.fontSize)
        this.tooltip.style('background', this.background)
        this.tooltip.style('padding', this.padding)
        this.tooltip.style('border', this.border)
        this.tooltip.style('border-radius', this['border-radius'])
        this.tooltip.style('box-shadow', this['box-shadow'])
        this.tooltip.style('font-family', this['font-family'])
        this.tooltip.style('position', 'absolute')
        this.tooltip.style('pointer-events', 'none')
        this.tooltip.style('opacity', '0')
        this.tooltip.style('text-wrap', 'nowrap')

        // aria-labels (thanks to wahlatlas)
        this.tooltip.attr('role', 'tooltip').attr('aria-live', 'polite')
    }

    /** Show the tooltip */
    show() {
        // @ts-ignore
        this.tooltip.transition().duration(this.transitionDuration).style('opacity', 1)
    }

    /** Hide the tooltip */
    hide() {
        // @ts-ignore
        this.tooltip.transition().duration(this.transitionDuration).style('opacity', 0)
    }

    /**
     * Set the content of the tooltip.
     * @param {string} html
     */
    html(html) {
        this.tooltip.html(html)
    }

    /**
     * Set the position of the tooltip at the mouse event position.
     * @param {MouseEvent} event
     */
    setPosition(event) {
        let parentRect = this.parentElement.getBoundingClientRect()

        let x = event.pageX + this.xOffset
        let y = event.pageY - this.yOffset

        this.tooltip.style('left', x + 'px').style('top', y + 'px')

        this.ensureTooltipInsideContainer(event, parentRect)
    }

    /*
	my.mouseover = function (event, html) {
		if (html) my.html(html);
		my.setPosition(event);
		my.show()
		//this.ensureTooltipInsideContainer();
	};
	
	my.mousemove = function (event) {
		my.setPosition(event);
		//this.ensureTooltipInsideContainer();
	};
	
	my.mouseout = function () {
		my.hide();
	};*/

    style(k, v) {
        if (arguments.length == 1) return this.tooltip.style(k)
        this.tooltip.style(k, v)
        return this
    }

    attr(k, v) {
        if (arguments.length == 1) return this.tooltip.attr(k)
        this.tooltip.attr(k, v)
        return this
    }

    /**
     * @function ensureTooltipInsideContainer
     * @description Prevents the tooltip from overflowing out of the App container (ensures that the tooltip is inside the gridviz container)
     * @param {MouseEvent} event
     * @param {DOMRect} parentRect
     */
    ensureTooltipInsideContainer = function (event, parentRect) {
        let node = this.tooltip.node()
        let parentWidth = parentRect.width
        let parentHeight = parentRect.height

        //too far right
        if (node.offsetLeft > parentRect.left + parentWidth - node.clientWidth) {
            let left = event.x - node.clientWidth - this.xOffset
            node.style.left = left + 'px'
            // check if mouse covers tooltip
            if (node.offsetLeft + node.clientWidth > event.x) {
                //move tooltip left so it doesnt cover mouse
                let left2 = event.x - node.clientWidth - this.xOffset
                node.style.left = left2 + 'px'
            }
            // node.style.top = node.offsetTop + config.yOffset + "px";
        }

        //too far down
        if (node.offsetTop + node.clientHeight > parentRect.top + parentHeight) {
            node.style.top = node.offsetTop - node.clientHeight + 'px'
        }

        //too far up
        if (node.offsetTop < parentRect.top) {
            node.style.top = parentRect.top + this.yOffset + 'px'
        }
    }
}


/***/ }),

/***/ "./src/button/Button.js":
/*!******************************!*\
  !*** ./src/button/Button.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");


/**
 * Parent class for button elements used to interact with the gridviz viewer.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class Button {
    /**
     * @param {Object} opts
     * opts.parentNode
     * opts.id
     * opts.title
     * opts.class
     * opts.onClickFunction
     * opts.x
     * opts.y
     */
    constructor(opts) {
        opts = opts || {}

        this.app = opts.app
        this.parentNode = opts.parentNode || opts.app.container

        // the div element
        if (this.id) this.div = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])('#' + this.id)

        if (!this.div || this.div.empty()) {
            this.div = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(document.createElement('div'))
            if (this.id) this.div.attr('id', this.id)
        }

        if (opts.title) this.div.attr('title',opts.title)
        if (opts.class) this.div.attr('class',opts.class)

        // add events
        if (opts.onClickFunction) this.div.on('click', opts.onClickFunction)

        //set styles
        this.style('box-shadow','0 7px 8px rgba(0,47,103,.08), 0 0 22px rgba(0,47,103,.04), 0 12px 17px rgba(0,47,103,.04), 0 -4px 4px rgba(0,47,103,.04)') //.ecl-u-shadow-3
        this.style('background-color','#ffffff')
        this.style('position' , 'absolute')
        this.style('cursor' , 'pointer')
        this.style('display' , 'flex')
        this.style('justify-content' , 'center')
        this.style('align-items' , 'center')
        this.style('width' , '30px')
        this.style('height' , '30px')
        // this.style(padding , '4px'


        // append to parent
        this.parentNode.appendChild(this.div.node())
    }

    /**
     * Apply a style to the button div.
     * @param {string} k
     * @param {string} v
     * @returns {this}
     */
    style(k, v) {
        this.div.style(k, v)
        return this
    }
}


/***/ }),

/***/ "./src/button/FullscreenButton.js":
/*!****************************************!*\
  !*** ./src/button/FullscreenButton.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenButton: () => (/* binding */ FullscreenButton)
/* harmony export */ });
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ "./src/button/Button.js");


/**
 * Button for toggling fullscreen mode
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class FullscreenButton extends _Button_js__WEBPACK_IMPORTED_MODULE_0__.Button {
    /**
     * @param {Object} opts
     * opts.parentNode - the node that the button is appended to
     * opts.canvas - the gridviz canvas
     * opts.id
     * opts.title - HTML title attribute
     * opts.class - css class
     * opts.onClickFunction
     * opts.x - x position of the button
     * opts.y - y position of the button
     */

    // default state
    isFullscreen = false

    constructor(opts) {
        super(opts)

        // append fullscreen icon to button container
        this.div.node().innerHTML = `
        <svg
            style="height: 1.2rem; width: 1.2rem; fill:black; margin:0;"
            focusable="false"
            aria-hidden="true"
        >
            <svg fill="#000000" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <title/>
            <g>
            <path d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/>
            <path d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/>
            <path d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/>
            <path d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/>
            </g>
            </svg>
        </svg>
        `

        //save initial app dimensions
        this.defaultHeight = this.app.h
        this.defaultWidth = this.app.w

        // event handler
        this.div.on('click', (e) => {
            this.onClickFunction(e)
        })
        this.div.on('mouseover', (e) => {
            this.style('background-color', 'lightgrey')
        })
        this.div.on('mouseout', (e) => {
            this.style('background-color', '#ffffff')
        })

        //set position
        if (opts.x) {
            this.style('left', opts.x + 'px')
        } else {
            this.style('right', '10px')
        }
        if (opts.y) {
            this.style('top', opts.y + 'px')
        } else {
            this.style('top', '90px')
        }
    }

    onClickFunction(e) {
        if (this.isFullscreen) {
            this.closeFullscreen(this.app.container)
            //resize canvas to default
            this.app.h = this.defaultHeight
            this.app.w = this.defaultWidth
            this.app.cg.h = this.defaultHeight
            this.app.cg.w = this.defaultWidth
            this.app.cg.canvas.setAttribute('width', '' + this.defaultWidth)
            this.app.cg.canvas.setAttribute('height', '' + this.defaultHeight)
            this.app.redraw()
            this.isFullscreen = false
        } else {
            this.openFullscreen(this.app.container)
            //resize canvas to fullscreen
            this.app.h = window.screen.height
            this.app.w = window.screen.width
            this.isFullscreen = true
        }
    }

    /* Open fullscreen */
    openFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen()
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen()
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen()
        }
    }

    /* Close fullscreen */
    closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen()
        }
    }
}


/***/ }),

/***/ "./src/button/ZoomButtons.js":
/*!***********************************!*\
  !*** ./src/button/ZoomButtons.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomButtons: () => (/* binding */ ZoomButtons)
/* harmony export */ });
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ "./src/button/Button.js");


/**
 * Button for toggling fullscreen mode
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class ZoomButtons extends _Button_js__WEBPACK_IMPORTED_MODULE_0__.Button {
    /**
     * @param {Object} opts
     */
    constructor(opts) {
        super(opts)

        this.onZoom = opts.onZoom // custom user event handler
        this.delta = opts.delta || 0.2

        // zoom in btn
        this.zoomInBtn = document.createElement('a')
        this.zoomInBtn.innerHTML = `<a id="zoomin" class="gridviz-zoom-button" title="Zoom in">+</a>`
        this.zoomInBtn.title = 'Zoom in'
        this.zoomInBtn.addEventListener('click', (e) => {
            this.zoomIn(e)
        })
        this.zoomInBtn.addEventListener('mouseover', (e) => {
            this.zoomInBtn.style.backgroundColor = 'lightgrey'
        })
        this.zoomInBtn.addEventListener('mouseout', (e) => {
            this.zoomInBtn.style.backgroundColor = '#ffffff'
        })

        // zoom out btn
        this.zoomOutBtn = document.createElement('a')
        this.zoomOutBtn.innerHTML = `<a id="zoomin" class="gridviz-zoom-button" title="Zoom out">-</a>`
        this.zoomOutBtn.title = 'Zoom out'
        this.zoomOutBtn.addEventListener('click', (e) => {
            this.zoomOut(e)
        })
        this.zoomOutBtn.addEventListener('mouseover', (e) => {
            this.zoomOutBtn.style.backgroundColor = 'lightgrey'
        })
        this.zoomOutBtn.addEventListener('mouseout', (e) => {
            this.zoomOutBtn.style.backgroundColor = '#ffffff'
        })

        //set styles
        let btns = [this.zoomInBtn, this.zoomOutBtn]
        btns.forEach((btn, i) => {
            btn.style.alignItems = 'center'
            btn.style.justifyContent = 'center'
            btn.style.display = 'flex'
            btn.style.border = 'none'
            btn.style.color = 'black'
            btn.style.textAlign = 'center'
            btn.style.textDecoration = 'none'
            btn.style.padding = '4px'
            btn.style.fontSize = '20px'
            btn.style.fontWeight = 'bold'
            btn.style.userSelect = 'none'
            if (i == 0) btn.style.borderBottom = '1px solid grey'
        })

        // unset parent class height and display for dual buttons
        this.style('height', 'unset')
        this.style('display', 'unset')

        //set position
        if (opts.x) {
            this.style('left', opts.x + 'px')
        } else {
            this.style('right', '10px')
        }
        if (opts.y) {
            this.style('top', opts.y + 'px')
        } else {
            this.style('top', '10px')
        }

        // append to button container
        this.div.node().appendChild(this.zoomInBtn)
        this.div.node().appendChild(this.zoomOutBtn)
    }

    /* Zoom in */
    zoomIn(e) {
        this.app.setZoomFactor(this.app.getZoomFactor() * (1 - this.delta)).redraw()
        if (this.onZoom) this.onZoom(e)
    }

    /* Zoom out */
    zoomOut(e) {
        this.app.setZoomFactor(this.app.getZoomFactor() * (1 + this.delta)).redraw()
        if (this.onZoom) this.onZoom(e)
    }
}


/***/ }),

/***/ "./src/dataset/CSVGrid.js":
/*!********************************!*\
  !*** ./src/dataset/CSVGrid.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSVGrid: () => (/* binding */ CSVGrid)
/* harmony export */ });
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/dsv.js");
/* harmony import */ var _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DatasetComponent.js */ "./src/DatasetComponent.js");
//@ts-check


/** @typedef {{ dims: object, crs: string, tileSizeCell: number, originPoint: {x:number,y:number}, resolutionGeo: number, tilingBounds:import("../Dataset").Envelope }} GridInfo */

;


/**
 * A dataset composed of a single CSV file (not tiled).
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class CSVGrid extends _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_0__.DatasetComponent {
    /**
     * @param {string} url The URL of the dataset.
     * @param {number} resolution The dataset resolution in geographical unit.
     * @param {{preprocess?:(function(import("../Dataset").Cell):boolean)}} opts
     */
    constructor(url, resolution, opts = {}) {
        super(url, resolution, opts)

        /**
         * @private
         * @type {Array.<import("../Dataset").Cell>} */
        this.cells = []

        /**
         * @type {string}
         * @private  */
        this.infoLoadingStatus = 'notLoaded'
    }

    /**
     * Request data within a geographic envelope.
     *
     * @param {import("../Dataset").Envelope|undefined} e
     * @param {function():void} redraw
     */
    getData(e, redraw) {
        //check if data already loaded
        if (this.infoLoadingStatus != 'notLoaded') return this

        //load data
        this.infoLoadingStatus = 'loading'
        ;(async () => {
            try {
                const data = await (0,d3_fetch__WEBPACK_IMPORTED_MODULE_1__.csv)(this.url)

                //convert coordinates in numbers
                for (const c of data) {
                    c.x = +c.x
                    c.y = +c.y
                }

                //preprocess/filter
                if (this.preprocess) {
                    this.cells = []
                    for (const c of data) {
                        const b = this.preprocess(c)
                        if (b == false) continue
                        this.cells.push(c)
                    }
                } else {
                    this.cells = data
                }

                //TODO check if redraw is necessary
                //that is if the dataset belongs to a layer which is visible at the current zoom level

                //execute the callback, usually a draw function
                if (redraw) redraw()

                this.infoLoadingStatus = 'loaded'
            } catch (error) {
                //mark as failed
                this.infoLoadingStatus = 'failed'
                this.cells = []
            }
        })()

        return this
    }

    /**
     * Fill the view cache with all cells which are within a geographical envelope.
     *
     * @param {import("../Dataset").Envelope} extGeo
     * @returns {void}
     */
    updateViewCache(extGeo) {
        //data not loaded yet
        if (!this.cells) return

        this.cellsViewCache = []
        for (const cell of this.cells) {
            if (+cell.x + this.resolution < extGeo.xMin) continue
            if (+cell.x - this.resolution > extGeo.xMax) continue
            if (+cell.y + this.resolution < extGeo.yMin) continue
            if (+cell.y - this.resolution > extGeo.yMax) continue
            this.cellsViewCache.push(cell)
        }
    }
}


/***/ }),

/***/ "./src/dataset/GridTile.js":
/*!*********************************!*\
  !*** ./src/dataset/GridTile.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridTile: () => (/* binding */ GridTile)
/* harmony export */ });
//@ts-check


/**
 * A grid tile.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class GridTile {
    /**
     * @param {Array.<import("../Dataset").Cell>} cells The tile cells.
     * @param {number} xT The X position of the tile.
     * @param {number} yT The Y position of the tile.
     * @param {import("./CSVGrid").GridInfo} gridInfo The grid info object.
     */
    constructor(cells, xT, yT, gridInfo) {
        /** @type {Array.<import("../Dataset").Cell>} */
        this.cells = cells
        /** @type {number} */
        this.x = xT
        /** @type {number} */
        this.y = yT

        const r = gridInfo.resolutionGeo
        const s = gridInfo.tileSizeCell

        /** @type {import("../Dataset").Envelope} */
        this.extGeo = {
            xMin: gridInfo.originPoint.x + r * s * this.x,
            xMax: gridInfo.originPoint.x + r * s * (this.x + 1),
            yMin: gridInfo.originPoint.y + r * s * this.y,
            yMax: gridInfo.originPoint.y + r * s * (this.y + 1),
        }

        //convert cell coordinates into geographical coordinates
        for (let cell of this.cells) {
            cell.x = this.extGeo.xMin + cell.x * r
            cell.y = this.extGeo.yMin + cell.y * r
        }
    }
}


/***/ }),

/***/ "./src/dataset/LGrid.js":
/*!******************************!*\
  !*** ./src/dataset/LGrid.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LGrid: () => (/* binding */ LGrid)
/* harmony export */ });
/* harmony import */ var _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DatasetComponent.js */ "./src/DatasetComponent.js");
//@ts-check


/** @typedef {{ dims: object, crs: string, tileSizeCell: number, originPoint: {x:number,y:number}, resolutionGeo: number, tilingBounds:import("../Dataset.js").Envelope }} GridInfo */

;

/**
 * A dataset composed of a single CSV file (not tiled).
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class LGrid extends _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_0__.DatasetComponent {
    /**
     * @param {number} resolution The dataset resolution in geographical unit.
     * @param {Array.<Object>} cells The cells.
     */
    constructor(resolution, cells) {
        super("", resolution)

        /**
         * @private
         * @type {Array.<import("../Dataset.js").Cell>} */
        this.cells = cells || []
    }

    /**
     * Request data within a geographic envelope.
     *
     * @param {import("../Dataset.js").Envelope|undefined} e
     * @param {function():void} redraw
     */
    getData(e, redraw) { return this }

    /**
     * Fill the view cache with all cells which are within a geographical envelope.
     *
     * @param {import("../Dataset.js").Envelope} extGeo
     * @returns {void}
     */
    updateViewCache(extGeo) {
        //data not loaded yet
        if (!this.cells) return

        this.cellsViewCache = []
        for (const cell of this.cells) {
            if (+cell.x + this.resolution < extGeo.xMin) continue
            if (+cell.x - this.resolution > extGeo.xMax) continue
            if (+cell.y + this.resolution < extGeo.yMin) continue
            if (+cell.y - this.resolution > extGeo.yMax) continue
            this.cellsViewCache.push(cell)
        }
    }
}


/***/ }),

/***/ "./src/dataset/TiledGrid.js":
/*!**********************************!*\
  !*** ./src/dataset/TiledGrid.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiledGrid: () => (/* binding */ TiledGrid)
/* harmony export */ });
/* harmony import */ var _GridTile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridTile.js */ "./src/dataset/GridTile.js");
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.js */ "./src/App.js");
/* harmony import */ var _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DatasetComponent.js */ "./src/DatasetComponent.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils.js */ "./src/utils/Utils.js");
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/json.js");
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/dsv.js");
//@ts-check


/** @typedef {{ dims: object, crs: string, tileSizeCell: number, originPoint: {x:number,y:number}, resolutionGeo: number, tilingBounds:import("../Dataset").Envelope, format:import("../DatasetComponent").Format }} GridInfo */

// internal
;




// external


/**
 * A tiled dataset, composed of CSV tiles.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class TiledGrid extends _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_2__.DatasetComponent {
    /**
     * @param {string} url The URL of the dataset.
     * @param {App} app The application.
     * @param {{preprocess?:(function(import("../Dataset").Cell):boolean) }} opts
     */
    constructor(url, app, opts = {}) {
        super(url, 0, opts)

        /**
         * The app being used.
         * @type {App}
         */
        this.app = app

        /**
         * The grid info object, from the info.json file.
         *  @type {GridInfo | undefined}
         * @private
         *  */
        this.info = undefined

        /**
         * @type {string}
         * @private  */
        this.infoLoadingStatus = 'notLoaded'

        /**
         * The cache of the loaded tiles. It is double indexed: by xT and then yT.
         * Example: this.cache[xT][yT] returns the tile at [xT][yT] location.
         *
         * @type {object}
         * */
        this.cache = {}

    }

    /**
     * Load the info.json from the url.
     *
     * @param {function():void} callback
     * @returns this
     */
    loadInfo(callback) {
        if (!this.info && this.infoLoadingStatus === 'notLoaded') {
            ; (async () => {
                try {
                    const data = await (0,d3_fetch__WEBPACK_IMPORTED_MODULE_4__["default"])(this.url + 'info.json')
                    this.info = data
                    this.resolution = data.resolutionGeo
                    this.infoLoadingStatus = 'loaded'
                    if (callback) callback()
                } catch (error) {
                    //mark as failed
                    this.infoLoadingStatus = 'failed'
                }
            })()
        } else if (callback && (this.infoLoadingStatus === 'loaded' || this.infoLoadingStatus === 'failed'))
            callback()
        return this
    }

    /**
     * Compute a tiling envelope from a geographical envelope.
     * This is the function to use to know which tiles to download for a geographical view.
     *
     * @param {import("../Dataset").Envelope} e
     * @returns {import("../Dataset").Envelope|undefined}
     */
    getTilingEnvelope(e) {
        if (!this.info) {
            this.loadInfo(() => { })
            return
        }

        const po = this.info.originPoint,
            r = this.info.resolutionGeo,
            s = this.info.tileSizeCell

        return {
            xMin: Math.floor((e.xMin - po.x) / (r * s)),
            xMax: Math.floor((e.xMax - po.x) / (r * s)),
            yMin: Math.floor((e.yMin - po.y) / (r * s)),
            yMax: Math.floor((e.yMax - po.y) / (r * s)),
        }
    }

    /**
     * Request data within a geographic envelope.
     *
     * @param {import("../Dataset").Envelope} extGeo
     * @param {function():void} redrawFun
     * @returns {this}
     */
    getData(extGeo, redrawFun) {
        //TODO empty cache when it gets too big ?

        //check if info has been loaded
        if (!this.info) return this

        //tiles within the scope
        /** @type {import("../Dataset").Envelope|undefined} */
        const tb = this.getTilingEnvelope(extGeo)
        if (!tb) return this

        //grid bounds
        /** @type {import("../Dataset").Envelope} */
        const gb = this.info.tilingBounds

        for (let xT = Math.max(tb.xMin, gb.xMin); xT <= Math.min(tb.xMax, gb.xMax); xT++) {
            for (let yT = Math.max(tb.yMin, gb.yMin); yT <= Math.min(tb.yMax, gb.yMax); yT++) {
                //prepare cache
                if (!this.cache[xT]) this.cache[xT] = {}

                //check if tile exists in the cache
                /** @type {GridTile} */
                let tile = this.cache[xT][yT]
                if (tile) continue

                //mark tile as loading
                this.cache[xT][yT] = "loading";
                (async () => {
                    //request tile
                    /** @type {Array.<import("../Dataset").Cell>}  */
                    let cells

                    try {
                        /** @type {Array.<import("../Dataset").Cell>}  */
                        // @ts-ignore
                        const data = await (0,d3_fetch__WEBPACK_IMPORTED_MODULE_5__.csv)(this.url + xT + '/' + yT + '.csv')

                        //if (monitor) monitorDuration('*** TiledGrid parse start')

                        //preprocess/filter
                        if (this.preprocess) {
                            cells = []
                            for (const c of data) {
                                const b = this.preprocess(c)
                                if (b == false) continue
                                cells.push(c)
                            }
                        } else {
                            cells = data
                        }

                        //if (monitor) monitorDuration('preprocess / filter')
                    } catch (error) {
                        //mark as failed
                        this.cache[xT][yT] = 'failed'
                        return
                    }

                    //store tile in cache
                    if (!this.info) {
                        console.error('Tile info inknown')
                        return
                    }
                    const tile_ = new _GridTile_js__WEBPACK_IMPORTED_MODULE_0__.GridTile(cells, xT, yT, this.info)
                    this.cache[xT][yT] = tile_

                    //if (monitor) monitorDuration('storage')

                    //if no redraw is specified, then leave
                    if (!redrawFun) return

                    //check if redraw is really needed, that is if:

                    // 1. the dataset belongs to a layer which is visible at the current zoom level
                    let redraw = false
                    //go through the layers
                    const zf = this.app.getZoomFactor()
                    for (const lay of this.app.layers) {
                        if (!lay.visible) continue
                        if (lay.getDatasetComponent(zf) != this) continue
                        //found one layer. No need to seek more.
                        redraw = true
                        break
                    }
                    //if (monitor) monitorDuration('check redraw 1')

                    if (!redraw) return

                    // 2. the tile is within the view, that is its geo envelope intersects the viewer geo envelope.
                    const env = this.app.updateExtentGeo()
                    const envT = tile_.extGeo
                    if (env.xMax <= envT.xMin) return
                    if (env.xMin >= envT.xMax) return
                    if (env.yMax <= envT.yMin) return
                    if (env.yMin >= envT.yMax) return

                    //if (monitor) monitorDuration('check redraw 2')
                    //if (monitor) monitorDuration('*** TiledGrid parse end')

                    //redraw
                    redrawFun()
                })()
            }
        }
        return this
    }

    /**
     * Fill the view cache with all cells which are within a geographical envelope.
     * @abstract
     * @param {import("../Dataset").Envelope} extGeo
     * @returns {void}
     */
    updateViewCache(extGeo) {
        //
        this.cellsViewCache = []

        //check if info has been loaded
        if (!this.info) return

        //tiles within the scope
        /** @type {import("../Dataset").Envelope|undefined} */
        const tb = this.getTilingEnvelope(extGeo)
        if (!tb) return

        //grid bounds
        /** @type {import("../Dataset").Envelope} */
        const gb = this.info.tilingBounds

        for (let xT = Math.max(tb.xMin, gb.xMin); xT <= Math.min(tb.xMax, gb.xMax); xT++) {
            if (!this.cache[xT]) continue
            for (let yT = Math.max(tb.yMin, gb.yMin); yT <= Math.min(tb.yMax, gb.yMax); yT++) {
                //get tile
                /** @type {GridTile} */
                const tile = this.cache[xT][yT]
                if (!tile || typeof tile === 'string') continue

                //get cells
                //this.cellsViewCache = this.cellsViewCache.concat(tile.cells)

                for (const cell of tile.cells) {
                    if (+cell.x + this.resolution < extGeo.xMin) continue
                    if (+cell.x - this.resolution > extGeo.xMax) continue
                    if (+cell.y + this.resolution < extGeo.yMin) continue
                    if (+cell.y - this.resolution > extGeo.yMax) continue
                    this.cellsViewCache.push(cell)
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/legend/ColorCategoryLegend.js":
/*!*******************************************!*\
  !*** ./src/legend/ColorCategoryLegend.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorCategoryLegend: () => (/* binding */ ColorCategoryLegend)
/* harmony export */ });
/* harmony import */ var _Legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Legend.js */ "./src/Legend.js");
//@ts-check


;

/**
 * A legend element for color categrories.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class ColorCategoryLegend extends _Legend_js__WEBPACK_IMPORTED_MODULE_0__.Legend {
    /** @param {Object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        //col/categories array, in display order
        /**
         * @private
         * @type {Array.<Array.<string>>} */
        this.colCat = opts.colCat || [['gray', '-']]

        /**
         * @private
         * @type {import("../Style").Shape} */
        this.shape = opts.shape || 'circle'
        this.dimension = opts.dimension || { r: 8 }
        this.strokeColor = opts.strokeColor || 'gray'
        this.strokeWidth = opts.strokeWidth || 1

        this.title = opts.title
        this.titleFontSize = opts.titleFontSize || '0.8em'
        this.titleFontWeight = opts.titleFontWeight || 'bold'

        //label
        this.labelFontSize = opts.labelFontSize || '0.8em'
    }

    /**
     * @param {{ style: import("../Style").Style, r: number, zf: number, sSize: import("../Style").Stat, sColor: import("../Style").Stat }} opts
     */
    update(opts) {
        //clear
        this.div.selectAll('*').remove()

        //build

        //title
        if (this.title)
            this.div
                .append('div')
                .style('font-size', this.titleFontSize)
                .style('font-weight', this.titleFontWeight)
                .style('margin-bottom', '7px')
                .text(this.title)

        //categories
        const nb = this.colCat.length
        if (nb == 0) return

        for (let i = 0; i < nb; i++) {
            const cat = this.colCat[i]

            //make div for category
            const d = this.div.append('div')
            //to enable vertical centering
            //.style("position", "relative")

            const sw = this.strokeWidth

            //draw graphic element: box / circle
            if (this.shape === 'square') {
                const h = this.dimension.h || 15
                const w = this.dimension.w || 20
                d.append('div')
                    .style('display', 'inline')

                    .append('svg')
                    .attr('width', w + 2 * sw)
                    .attr('height', h + 2 * sw)

                    .append('rect')
                    .attr('x', sw)
                    .attr('y', sw)
                    .attr('width', w)
                    .attr('height', h)
                    .style('fill', cat[0])
                    .style('stroke', this.strokeColor)
                    .style('stroke-width', this.strokeWidth)
            } else if (this.shape === 'circle') {
                const r = this.dimension.r || 8
                const h = 2 * r + 2 * sw
                d.append('div')
                    .style('display', 'inline')

                    .append('svg')
                    .attr('width', h)
                    .attr('height', h)

                    .append('circle')
                    .attr('cx', r + sw)
                    .attr('cy', r + sw)
                    .attr('r', r)
                    .style('fill', cat[0])
                    .style('stroke', this.strokeColor)
                    .style('stroke-width', this.strokeWidth)
            } else {
                throw new Error('Unexpected shape:' + this.shape)
            }

            //write label text
            d.append('div')
                //show on right of graphic
                .style('display', 'inline')

                //center vertically
                //.style("position", "absolute").style("top", "0").style("bottom", "0")

                .style('padding-left', '5px')
                .style('font-size', this.labelFontSize)
                .text(cat[1])
        }
    }
}


/***/ }),

/***/ "./src/legend/ColorDiscreteLegend.js":
/*!*******************************************!*\
  !*** ./src/legend/ColorDiscreteLegend.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorDiscreteLegend: () => (/* binding */ ColorDiscreteLegend)
/* harmony export */ });
/* harmony import */ var _Legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Legend.js */ "./src/Legend.js");
//@ts-check


;

/**
 * A legend element for discrete color style.
 * Inspiration: https://observablehq.com/@d3/color-legend
 *
 * @author Julien Gaffuri
 */
class ColorDiscreteLegend extends _Legend_js__WEBPACK_IMPORTED_MODULE_0__.Legend {
    /** @param {Object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** @private @type {Array.<Array.<string>>} */
        this.colors = opts.colors
        /** @private @type {Array.<Array.<string>>} */
        this.breaksText = opts.breaksText

        this.width = opts.width || 300
        this.height = opts.height || 15

        this.title = opts.title
        this.titleFontSize = opts.titleFontSize || '0.8em'
        this.titleFontWeight = opts.titleFontWeight || 'bold'

        this.tickSize = opts.tickSize || 3

        //label
        this.labelFontSize = opts.labelFontSize || '0.8em'
        this.invert = opts.invert
    }

    /**
     * @param {{ style: import("../Style").Style, r: number, zf: number, sSize: import("../Style").Stat, sColor: import("../Style").Stat }} opts
     */
    update(opts) {
        //clear
        this.div.selectAll('*').remove()

        //build

        //title
        if (this.title)
            this.div
                .append('div')
                .style('font-size', this.titleFontSize)
                .style('font-weight', this.titleFontWeight)
                .style('margin-bottom', '7px')
                .text(this.title)

        //classes
        const nb = this.colors.length
        if (nb == 0) return
        const w = this.width / nb

        //make svg element
        const svg = this.div
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height + this.tickSize + 2 + 10)

        //draw graphic elements
        for (let i = 0; i < nb; i++) {
            svg.append('rect')
                .attr('x', i * w)
                .attr('y', 0)
                .attr('width', w)
                .attr('height', this.height)
                .style('fill', this.colors[i])
        }

        //tick line
        for (let i = 1; i < nb; i++) {
            svg.append('line')
                .attr('x1', w * i)
                .attr('y1', 0)
                .attr('x2', w * i)
                .attr('y2', this.height + this.tickSize)
                .style('stroke', 'black')
        }

        //labels
        for (let i = 1; i < nb; i++) {
            //prepare label
            svg.append('text')
                .attr('id', 'ticklabel_' + i)
                .attr('x', w * i)
                .attr('y', this.height + this.tickSize + 2)
                .style('font-size', this.labelFontSize)
                //.style("font-weight", "bold")
                //.style("font-family", "Arial")
                .style('text-anchor', i == 0 ? 'start' : i == this.ticks - 1 ? 'end' : 'middle')
                .style('alignment-baseline', 'top')
                .style('dominant-baseline', 'hanging')
                .style('pointer-events', 'none')
                .text(this.breaksText[i - 1])
        }
    }
}


/***/ }),

/***/ "./src/legend/ColorLegend.js":
/*!***********************************!*\
  !*** ./src/legend/ColorLegend.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorLegend: () => (/* binding */ ColorLegend)
/* harmony export */ });
/* harmony import */ var _Legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Legend.js */ "./src/Legend.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/defaultLocale.js");
//@ts-check


;


/**
 * A legend element for continuous color style.
 * Inspiration: https://observablehq.com/@d3/color-legend
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class ColorLegend extends _Legend_js__WEBPACK_IMPORTED_MODULE_0__.Legend {
    /** @param {Object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        this.colorRamp = opts.colorRamp

        //function (t[0,1], r, s) -> v (for label text)
        this.fun = opts.fun

        this.title = opts.title
        this.tickSize = opts.tickSize || 6
        this.width = opts.width || 300
        this.height = opts.height || 15
        this.margin = opts.margin || 5
        this.ticks = opts.ticks || Math.floor(this.width / 50)
        this.tickFormat = opts.tickFormat || ',.0f'
        this.tickUnit = opts.tickUnit

        this.fontSize = opts.fontSize || '0.8em'
        this.invert = opts.invert

        //to be used as opts => opts.sAlpha to show legend on alpha channel
        this.getStats = opts.getStats || (opts => opts.sColor)
    }

    /**
     * @param {{ style: import("../Style").Style, r: number, zf: number, sSize: import("../Style").Stat, sColor: import("../Style").Stat, sAlpha: import("../Style").Stat }} opts
     */
    update(opts) {
        //could happen when data is still loading
        if (!opts.sColor) return

        //clear
        this.div.selectAll('*').remove()

        const titleHeight = 12

        const svgW = this.width + 2 * this.margin
        const svgH = this.height + 3 * this.margin + titleHeight + this.tickSize + 10
        const svg = this.div.append('svg').attr('width', svgW).attr('height', svgH)
        //  <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />

        //title
        svg.append('text')
            .attr('x', this.margin)
            .attr('y', this.margin)
            .style('font-size', '0.8em')
            .style('font-weight', 'bold')
            .style('alignment-baseline', 'top')
            .style('dominant-baseline', 'hanging')
            .style('pointer-events', 'none')
            .text(this.title)

        const g = svg
            .append('g')
            .attr('transform', 'translate(' + this.margin + ' ' + (2 * this.margin + titleHeight) + ')')

        //draw color bar
        const w = this.width,
            h = this.height
        const step = 5
        for (let i = 0; i < w; i += step) {
            let t = i / (w - 1)
            if (this.invert) t = 1 - t
            g.append('rect')
                .attr('x', i)
                .attr('y', 0)
                .attr('width', step)
                .attr('height', h)
                .style('fill', this.colorRamp(t))
        }

        for (let i = 0; i < this.ticks; i++) {
            let t = i / (this.ticks - 1)

            //tick line
            g.append('line')
                .attr('x1', w * t)
                .attr('y1', 0)
                .attr('x2', w * t)
                .attr('y2', h + this.tickSize)
                .style('stroke', 'black')

            //prepare tick label
            g.append('text')
                .attr('id', 'ticklabel_' + i)
                .attr('x', w * t)
                .attr('y', h + this.tickSize + 2)
                .style('font-size', this.fontSize)
                //.style("font-weight", "bold")
                //.style("font-family", "Arial")
                .style('text-anchor', i == 0 ? 'start' : i == this.ticks - 1 ? 'end' : 'middle')
                .style('alignment-baseline', 'top')
                .style('dominant-baseline', 'hanging')
                .style('pointer-events', 'none')
            //.text("-")
        }

        //update tick labels

        //label text format
        const f = this.tickFormat && this.tickFormat != 'text' ? (0,d3_format__WEBPACK_IMPORTED_MODULE_1__.format)(this.tickFormat) : (v) => v
        const stat = this.getStats(opts)
        for (let i = 0; i < this.ticks; i++) {
            let t = i / (this.ticks - 1)

            const v = this.fun(t, opts.r, stat)
            const text = (v ? f(v) : '0') + (this.tickUnit ? this.tickUnit : '')

            //tick label
            this.div.select('#' + 'ticklabel_' + i).text(text)
        }
    }
}


/***/ }),

/***/ "./src/legend/SegmentOrientationLegend.js":
/*!************************************************!*\
  !*** ./src/legend/SegmentOrientationLegend.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentOrientationLegend: () => (/* binding */ SegmentOrientationLegend)
/* harmony export */ });
/* harmony import */ var _Legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Legend.js */ "./src/Legend.js");
//@ts-check


;

/**
 * A legend element for segment orientation.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class SegmentOrientationLegend extends _Legend_js__WEBPACK_IMPORTED_MODULE_0__.Legend {
    /** @param {Object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        //title
        this.title = opts.title
        this.titleFontSize = opts.titleFontSize || '0.8em'
        this.titleFontWeight = opts.titleFontWeight || 'bold'

        //exageration
        this.exaggerationFactor = opts.exaggerationFactor || 0.5

        //color
        this.color = opts.color || 'gray'
        //orientation
        this.orientation = opts.orientation || 0
        //width
        this.widthPix = opts.widthPix || 3

        //label
        this.labelFontSize = opts.labelFontSize || '0.8em'
        this.labelUnitText = opts.labelUnitText || ''
    }

    /**
     * @param {{ style: import("../style/SegmentStyle").SegmentStyle, r: number, zf: number, sColor: import("../Style").Stat, sLength: import("../Style").Stat, sWidth: import("../Style").Stat }} opts
     */
    update(opts) {
        //could happen when data is still loading
        if (!opts.sWidth) return

        //clear
        this.div.selectAll('*').remove()

        const d = this.div.append('div')

        //title
        if (this.title) {
            d.append('div')
                .attr('class', 'title')
                .style('font-size', this.titleFontSize)
                .style('font-weight', this.titleFontWeight)
                .text(this.title)
        }

        //compute segment width and length, in pix
        const sWidth = this.widthPix
        const sLength = (1 * opts.r) / opts.zf

        //draw SVG segment
        const svgS = Math.max(sLength, sWidth)
        const svg = d.append('svg').attr('width', svgS).attr('height', svgS).style('', 'inline-block')

        const cos = Math.cos((-this.orientation * Math.PI) / 180)
        const sin = Math.sin((-this.orientation * Math.PI) / 180)
        const dc = svgS * 0.5,
            l2 = sLength * 0.5
        svg.append('line')
            .attr('x1', dc - cos * l2)
            .attr('y1', dc - sin * l2)
            .attr('x2', dc + cos * l2)
            .attr('y2', dc + sin * l2)
            .style('stroke', this.color)
            .style('stroke-width', sWidth)

        //text label
        d.append('div')
            //show on right of svg
            .style('display', 'inline')
            .style('padding-left', '5px')
            .style('font-size', this.labelFontSize)
            //.style("font-weight", "bold")
            .text(this.labelUnitText)
    }
}


/***/ }),

/***/ "./src/legend/SegmentWidthLegend.js":
/*!******************************************!*\
  !*** ./src/legend/SegmentWidthLegend.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentWidthLegend: () => (/* binding */ SegmentWidthLegend)
/* harmony export */ });
/* harmony import */ var _Legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Legend.js */ "./src/Legend.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/defaultLocale.js");
//@ts-check


;


/**
 * A legend element for segment width.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class SegmentWidthLegend extends _Legend_js__WEBPACK_IMPORTED_MODULE_0__.Legend {
    /** @param {Object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        //title
        this.title = opts.title
        this.titleFontSize = opts.titleFontSize || '0.8em'
        this.titleFontWeight = opts.titleFontWeight || 'bold'

        //exageration
        //if set to 1, the segment width in the legend will be the one of the maximum width on the map
        this.exaggerationFactor = opts.exaggerationFactor || 0.5

        //color of the segment in the legend
        this.color = opts.color || 'gray'
        //orientation of the segment in the legend
        this.orientation = opts.orientation || 0

        //label
        this.labelFontSize = opts.labelFontSize || '0.8em'
        this.labelUnitText = opts.labelUnitText || ''

        //segment length in geo unit - a function of the resolution r and zoom level zf
        this.lengthFun = opts.lengthExaggerationFactor || ((r, zf) => r)
    }

    /**
     * @param {{ style: import("../style/SegmentStyle").SegmentStyle, r: number, zf: number, sColor: import("../Style").Stat, sLength: import("../Style").Stat, sWidth: import("../Style").Stat }} opts
     */
    update(opts) {
        //could happen when data is still loading
        if (!opts.sWidth) return

        //clear
        this.div.selectAll('*').remove()

        const d = this.div.append('div')

        //title
        if (this.title) {
            d.append('div')
                .attr('class', 'title')
                .style('font-size', this.titleFontSize)
                .style('font-weight', this.titleFontWeight)
                .text(this.title)
        }

        //get segment max value
        const value_ = opts.sWidth.max * this.exaggerationFactor
        //make 'nice' value (power of ten, or multiple)
        let pow10 = Math.log10(value_)
        pow10 = Math.floor(pow10)
        let value = Math.pow(10, pow10)
        if (value * 8 <= value_) value *= 8
        else if (value * 6 <= value_) value *= 6
        else if (value * 5 <= value_) value *= 5
        else if (value * 4 <= value_) value *= 4
        else if (value * 2.5 <= value_) value *= 2.5
        else if (value * 2 <= value_) value *= 2
        else if (value * 1.5 <= value_) value *= 1.5

        //compute segment width and length, in pix
        const sWidth = opts.widthFun(value, opts.r, opts.sWidth, opts.zf) / opts.zf
        const sLength = this.lengthFun(opts.r, opts.zf) / opts.zf

        //TODO use orientation

        const svg = d.append('svg').attr('width', sLength).attr('height', sWidth).style('', 'inline-block')

        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        svg.append('line')
            .attr('x1', 0)
            .attr('y1', sWidth / 2)
            .attr('x2', sLength)
            .attr('y2', sWidth / 2)
            .style('stroke', this.color)
            .style('stroke-width', sWidth)

        const valueT = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__.format)(',.2r')(value)
        d.append('div')
            //show on right of graphic
            .style('display', 'inline')
            .style('padding-left', '5px')
            .style('font-size', this.labelFontSize)
            //.style("font-weight", "bold")
            .text(valueT + (this.labelUnitText ? ' ' : '') + this.labelUnitText)
    }
}


/***/ }),

/***/ "./src/legend/SizeLegend.js":
/*!**********************************!*\
  !*** ./src/legend/SizeLegend.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeLegend: () => (/* binding */ SizeLegend)
/* harmony export */ });
/* harmony import */ var _Legend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Legend.js */ "./src/Legend.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/defaultLocale.js");
//@ts-check


;


/**
 * A legend element for proportional symbols.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class SizeLegend extends _Legend_js__WEBPACK_IMPORTED_MODULE_0__.Legend {
    /** @param {Object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        //exageration
        this.exaggerationFactor = opts.exaggerationFactor || 0.8

        //if value is to be forced
        this.value = opts.value || undefined

        //title
        this.title = opts.title
        this.titleFontSize = opts.titleFontSize || '0.8em'
        this.titleFontWeight = opts.titleFontWeight || 'bold'

        //symbol
        /**
         * @private
         * @type {import("../Style").Shape} */
        this.shape = opts.shape || 'circle'
        this.fillColor = opts.fillColor || 'none'
        this.strokeColor = opts.strokeColor || 'gray'
        this.strokeWidth = opts.strokeWidth || 1

        //label
        this.labelFontSize = opts.labelFontSize || '0.8em'
        this.labelUnitText = opts.labelUnitText || ''
        this.labelFormat = opts.labelFormat || ',.2r'

        //
        //this.div.style("text-align", "center")
    }

    /**
     * @param {{ style: import("../style/ShapeColorSizeStyle").ShapeColorSizeStyle, r: number, zf: number, sSize: import("../Style").Stat, sColor: import("../Style").Stat }} opts
     */
    update(opts) {
        //could happen when data is still loading
        if (!opts.sSize) return

        //clear
        this.div.selectAll('*').remove()

        //get value
        let value = this.value
        if (value == undefined) {
            //compute 'nice value

            //get max value
            const value_ = opts.sSize.max * this.exaggerationFactor

            //take 'nice' value (power of ten, or multiple)
            let pow10 = Math.log10(value_)
            pow10 = Math.floor(pow10)
            value = Math.pow(10, pow10)
            if (value * 8 <= value_) value *= 8
            else if (value * 6 <= value_) value *= 6
            else if (value * 5 <= value_) value *= 5
            else if (value * 4 <= value_) value *= 4
            else if (value * 2.5 <= value_) value *= 2.5
            else if (value * 2 <= value_) value *= 2
        }

        if (!value) return

        const d = this.div.append('div')
        //to enable vertical centering
        //.style("position", "relative")

        //title
        if (this.title) {
            d.append('div')
                .attr('class', 'title')
                .style('font-size', this.titleFontSize)
                .style('font-weight', this.titleFontWeight)
                .text(this.title)
        }

        //compute size of symbol, in pix
        const size = opts.style.size(value, opts.r, opts.sSize, opts.zf) / opts.zf

        const svg = d
            .append('svg')
            .attr('width', size + this.strokeWidth + 2)
            .attr('height', size + this.strokeWidth + 2)
            .style('', 'inline-block')

        if (this.shape === 'square') {
            svg.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', size)
                .attr('height', size)
                .style('fill', this.fillColor)
                .style('stroke', this.strokeColor)
                .style('stroke-width', this.strokeWidth)
            //TODO test
        } else if (this.shape === 'circle') {
            // <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
            const r = (size + this.strokeWidth) * 0.5
            svg.append('circle')
                .attr('cx', r + 1)
                .attr('cy', r + 1)
                .attr('r', r)
                .style('fill', this.fillColor)
                .style('stroke', this.strokeColor)
                .style('stroke-width', this.strokeWidth)
        } else if (this.shape === 'donut') {
            //TODO
        } else if (this.shape === 'diamond') {
            //TODO
        } else {
            throw new Error('Unexpected shape:' + this.shape)
        }

        const valueT = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__.format)(this.labelFormat)(value)
        d.append('div')
            //show on right of graphic
            .style('display', 'inline')

            //center vertically
            //.style("position", "absolute").style("top", "0").style("bottom", "0")

            .style('padding-left', '5px')
            .style('font-size', this.labelFontSize)
            .text(valueT + (this.labelUnitText ? ' ' : '') + this.labelUnitText)
    }
}


/***/ }),

/***/ "./src/style/CompositionStyle.js":
/*!***************************************!*\
  !*** ./src/style/CompositionStyle.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositionStyle: () => (/* binding */ CompositionStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/** @typedef {"flag"|"piechart"|"ring"|"segment"|"radar"|"agepyramid"|"halftone"} CompositionType */

/**
 * A style showing the composition of a total in different categories, with different color hues.
 * It consists of a symbol with different parts, whose size reflect the proportion of the corresponding category.
 * For a list of supported symbols, @see CompositionType
 * The symbol can be scaled depending on the cell importance.
 *
 * @author Julien Gaffuri
 */
class CompositionStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /**
         * The dictionary (string -> color) which give the color of each category.
         * @type {object} */
        this.color = opts.color

        /**
         * A function returning the type of decomposition symbol of a cell, @see CompositionType
         * @type {function(import("../Dataset").Cell):CompositionType} */
        this.type = opts.type

        /** The column where to get the size values.
         * @type {string} */
        this.sizeCol = opts.sizeCol

        /** A function returning the size of a cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.size = opts.size || ((v, r, s, zf) => r)

        /** For style types with stripes (flag, segment), the orientation of the stripes (0 for horizontal, other for vertical).
         * @type {function(import("../Dataset").Cell,number,number):number} */
        this.stripesOrientation = opts.stripesOrientation || (() => 0) //(c,r,zf) => ...

        /** The function specifying an offset angle for a radar, halftone or pie chart style.
         * The angle is specified in degree. The rotation is anti-clockwise.
         * @type {function(import("../Dataset").Cell,number,number):number} */
        this.offsetAngle = opts.offsetAngle || (() => 0) //(cell,r,zf) => ...

        /** The function specifying the height of the age pyramid, in geo unit.
         * @type {function(import("../Dataset").Cell,number,number):number} */
        this.agePyramidHeight = opts.agePyramidHeight || ((c, r, zf) => r) //(cell,r,zf) => ...

        /** For pie chart, this is parameter for internal radius, so that the pie chart looks like a donut.
         * 0 for normal pie charts, 0.5 to empty half of the radius.
         * @type {number} */
        this.pieChartInternalRadiusFactor = opts.pieChartInternalRadiusFactor || 0
    }

    /**
     * Draw cells as squares depending on their value.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let stat
        if (this.sizeCol) {
            //if size is used, sort cells by size so that the biggest are drawn first
            cells.sort((c1, c2) => c2[this.sizeCol] - c1[this.sizeCol])
            //and compute statistics
            stat = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.sizeCol], true)
        }

        //nb categories - used for radar and agepyramid
        const nbCat = Object.entries(this.color).length

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw calls
        for (let cell of cells) {
            //size
            /** @type {function(number,number,import("../Style").Stat|undefined,number):number} */
            let s_ = this.size || (() => r)
            //size - in geo
            /** @type {number} */
            const sG = s_(cell[this.sizeCol], r, stat, zf)

            //get offset
            const offset = this.offset(cell, r, zf)

            //get symbol type
            const type_ = this.type ? this.type(cell) : 'flag'

            //compute center position
            const xc = cell.x + offset.dx + (type_ === 'agepyramid' ? 0 : r * 0.5)
            const yc = cell.y + offset.dy + (type_ === 'agepyramid' ? 0 : r * 0.5)

            //compute offset angle, when relevant
            const offAng = this.offsetAngle ? (this.offsetAngle(cell, r, zf) * Math.PI) / 180 : 0

            if (type_ === 'agepyramid' || type_ === 'radar' || type_ === 'halftone') {
                //get cell category max value
                let maxVal = -Infinity
                for (let key of Object.keys(this.color)) {
                    const v = +cell[key]
                    if (v > maxVal) maxVal = v
                }

                //cumul
                let cumul = 0
                if (type_ === 'agepyramid' && this.agePyramidHeight)
                    cumul = (r - this.agePyramidHeight(cell, r, zf)) / 2
                if (type_ === 'radar' || type_ === 'halftone') cumul = Math.PI / 2 + offAng

                //compute the increment, which is the value to increment the cumul for each category
                const incr =
                    type_ === 'agepyramid'
                        ? (this.agePyramidHeight ? this.agePyramidHeight(cell, r, zf) : r) / nbCat
                        : type_ === 'radar' || type_ === 'halftone'
                        ? (2 * Math.PI) / nbCat
                        : undefined
                if (incr === undefined) throw new Error('Unexpected symbol type:' + type_)

                for (let [column, color] of Object.entries(this.color)) {
                    if (type_ === 'agepyramid') {
                        //set category color
                        cg.ctx.fillStyle = color

                        //get category value
                        const val = cell[column]

                        //compute category length - in geo
                        /** @type {number} */
                        const wG = (sG * val) / maxVal

                        //draw bar
                        cg.ctx.fillRect(xc + (r - wG) / 2, yc + cumul, wG, incr)

                        //next height
                        cumul += incr
                    } else if (type_ === 'radar') {
                        //set category color
                        cg.ctx.fillStyle = color

                        //get categroy value
                        const val = cell[column]

                        //compute category radius - in geo
                        /** @type {number} */
                        //const rG = this.radius(val, r, stat, cellStat, zf)
                        const rG = (sG / 2) * Math.sqrt(val / maxVal)

                        //draw angular sector
                        cg.ctx.beginPath()
                        cg.ctx.moveTo(xc, yc)
                        cg.ctx.arc(xc, yc, rG, cumul - incr, cumul)
                        cg.ctx.lineTo(xc, yc)
                        cg.ctx.fill()

                        //next angular sector
                        cumul += incr
                    } else if (type_ === 'halftone') {
                        //set category color
                        cg.ctx.fillStyle = color

                        //get categroy value
                        const val = cell[column]

                        //compute category radius - in geo
                        /** @type {number} */
                        const rG = sG * 0.333 * Math.sqrt(val / maxVal)

                        //draw circle
                        cg.ctx.beginPath()
                        cg.ctx.arc(
                            xc + r * 0.25 * Math.cos(cumul),
                            yc + r * 0.25 * Math.sin(cumul),
                            rG,
                            0,
                            2 * Math.PI
                        )
                        cg.ctx.fill()

                        //next angular sector
                        cumul += incr
                    } else {
                        throw new Error('Unexpected symbol type:' + type_)
                    }
                }
            } else {
                //compute total
                let total = 0
                for (let column of Object.keys(this.color)) {
                    const v = +cell[column]
                    if (!v) continue
                    total += v
                }
                if (!total || isNaN(total)) continue

                //draw decomposition symbol
                let cumul = 0
                const d = r * (1 - sG / r) * 0.5
                const ori = this.stripesOrientation(cell, r, zf)

                for (let [column, color] of Object.entries(this.color)) {
                    //get share
                    const share = cell[column] / total
                    if (!share || isNaN(share)) continue

                    //set color
                    cg.ctx.fillStyle = color

                    //draw symbol part
                    if (type_ === 'flag') {
                        //draw flag stripe
                        if (ori == 0) {
                            //horizontal
                            cg.ctx.fillRect(
                                cell.x + d + offset.dx,
                                cell.y + d + cumul * sG + offset.dy,
                                sG,
                                share * sG
                            )
                        } else {
                            //vertical
                            cg.ctx.fillRect(
                                cell.x + d + cumul * sG + offset.dx,
                                cell.y + d + offset.dy,
                                share * sG,
                                sG
                            )
                        }
                    } else if (type_ === 'piechart') {
                        //draw pie chart angular sector

                        //compute angles
                        const a1 = cumul * 2 * Math.PI
                        const a2 = (cumul + share) * 2 * Math.PI

                        //draw
                        cg.ctx.beginPath()
                        cg.ctx.moveTo(xc, yc)
                        cg.ctx.arc(xc, yc, sG * 0.5, a1 + offAng, a2 + offAng)
                        if (this.pieChartInternalRadiusFactor)
                            cg.ctx.arc(
                                xc,
                                yc,
                                sG * 0.5 * this.pieChartInternalRadiusFactor,
                                a1 + offAng,
                                a2 + offAng,
                                true
                            )
                        cg.ctx.closePath()
                        cg.ctx.fill()
                    } else if (type_ === 'ring') {
                        //draw ring
                        cg.ctx.beginPath()
                        cg.ctx.arc(xc, yc, Math.sqrt(1 - cumul) * sG * 0.5, 0, 2 * Math.PI)
                        cg.ctx.fill()
                    } else if (type_ === 'segment') {
                        //draw segment sections
                        const wG = (sG * sG) / r
                        if (ori == 0) {
                            //horizontal
                            cg.ctx.fillRect(
                                cell.x + offset.dx,
                                cell.y + (r - wG) / 2 + cumul * wG + offset.dy,
                                r,
                                share * wG
                            )
                        } else {
                            //vertical
                            cg.ctx.fillRect(
                                cell.x + cumul * r + offset.dx,
                                cell.y + (r - wG) / 2 + offset.dy,
                                share * r,
                                wG
                            )
                        }
                    } else {
                        throw new Error('Unexpected symbol type:' + type_)
                    }

                    cumul += share
                }
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sSize: stat })
    }
}


/***/ }),

/***/ "./src/style/CompositionStyle_.js":
/*!****************************************!*\
  !*** ./src/style/CompositionStyle_.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositionStyle_: () => (/* binding */ CompositionStyle_)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/** @typedef {"flag"|"piechart"|"ring"|"segment"|"radar"|"agepyramid"|"halftone"} CompositionType */

/**
 * A style showing the composition of a total in different categories, with different color hues.
 * It consists of a symbol with different parts, whose size reflect the proportion of the corresponding category.
 * For a list of supported symbols, @see CompositionType
 * The symbol can be scaled depending on the cell importance.
 *
 * @author Julien Gaffuri
 */
class CompositionStyle_ extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** A function returning the view scale.
         * @type {function(Array.<import('../Dataset.js').Cell>,number, number):object} */
        this.viewScale = opts.viewScale

        /**
         * The dictionary (string -> color) which give the color of each category.
         * @type {object} */
        this.color = opts.color

        /**
         * A function returning the type of decomposition symbol of a cell, @see CompositionType
         * @type {function(import("../Dataset.js").Cell,number, number,object):CompositionType} */
        this.type = opts.type

        /** A function returning the size of a cell in geographical unit.
         * @type {function(import('../Dataset.js').Cell,number, number,object):number} */
        this.size = opts.size

        /** For style types with stripes (flag, segment), the orientation of the stripes (0 for horizontal, other for vertical).
         * @type {function(import("../Dataset.js").Cell,number,number,object):number} */
        this.stripesOrientation = opts.stripesOrientation || (() => 0) //(c,r,zf,vc) => ...

        /** The function specifying an offset angle for a radar, halftone or pie chart style.
         * The angle is specified in degree. The rotation is anti-clockwise.
         * @type {function(import("../Dataset.js").Cell,number,number,object):number} */
        this.offsetAngle = opts.offsetAngle || (() => 0) //(cell,r,zf,vc) => ...

        /** The function specifying the height of the age pyramid, in geo unit.
         * @type {function(import("../Dataset.js").Cell,number,number,object):number} */
        this.agePyramidHeight = opts.agePyramidHeight || ((c, r, zf) => r) //(cell,r,zf,vc) => ...

        /** For pie chart, this is parameter for internal radius, so that the pie chart looks like a donut.
         * 0 for normal pie charts, 0.5 to empty half of the radius.
         * @type {number} */
        this.pieChartInternalRadiusFactor = opts.pieChartInternalRadiusFactor || 0
    }

    /**
     * Draw cells as squares depending on their value.
     *
     * @param {Array.<import("../Dataset.js").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas.js").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        //get view scale
        const vc = this.viewScale ? this.viewScale(cells, r, zf) : undefined

        //nb categories - used for radar and agepyramid
        const nbCat = Object.entries(this.color).length

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw calls
        for (let cell of cells) {

            //size
            const sG = this.size ? this.size(cell, r, zf, vc) : r
            if (!sG) continue

            //get offset
            const offset = this.offset(cell, r, zf)

            //get symbol type
            const type_ = this.type ? this.type(cell, r, zf, vc) : 'flag'

            //compute center position
            const xc = cell.x + offset.dx + (type_ === 'agepyramid' ? 0 : r * 0.5)
            const yc = cell.y + offset.dy + (type_ === 'agepyramid' ? 0 : r * 0.5)

            //compute offset angle, when relevant
            const offAng = this.offsetAngle ? (this.offsetAngle(cell, r, zf, vc) * Math.PI) / 180 : 0

            if (type_ === 'agepyramid' || type_ === 'radar' || type_ === 'halftone') {
                //get cell category max value
                let maxVal = -Infinity
                for (let key of Object.keys(this.color)) {
                    const v = +cell[key]
                    if (v > maxVal) maxVal = v
                }

                //cumul
                let cumul = 0
                if (type_ === 'agepyramid' && this.agePyramidHeight)
                    cumul = (r - this.agePyramidHeight(cell, r, zf, vc)) / 2
                if (type_ === 'radar' || type_ === 'halftone') cumul = Math.PI / 2 + offAng

                //compute the increment, which is the value to increment the cumul for each category
                const incr =
                    type_ === 'agepyramid'
                        ? (this.agePyramidHeight ? this.agePyramidHeight(cell, r, zf, vc) : r) / nbCat
                        : type_ === 'radar' || type_ === 'halftone'
                            ? (2 * Math.PI) / nbCat
                            : undefined
                if (incr === undefined) throw new Error('Unexpected symbol type:' + type_)

                for (let [column, color] of Object.entries(this.color)) {
                    if (type_ === 'agepyramid') {
                        //set category color
                        cg.ctx.fillStyle = color

                        //get category value
                        const val = cell[column]

                        //compute category length - in geo
                        /** @type {number} */
                        const wG = (sG * val) / maxVal

                        //draw bar
                        cg.ctx.fillRect(xc + (r - wG) / 2, yc + cumul, wG, incr)

                        //next height
                        cumul += incr
                    } else if (type_ === 'radar') {
                        //set category color
                        cg.ctx.fillStyle = color

                        //get categroy value
                        const val = cell[column]

                        //compute category radius - in geo
                        /** @type {number} */
                        //const rG = this.radius(val, r, stat, cellStat, zf)
                        const rG = (sG / 2) * Math.sqrt(val / maxVal)

                        //draw angular sector
                        cg.ctx.beginPath()
                        cg.ctx.moveTo(xc, yc)
                        cg.ctx.arc(xc, yc, rG, cumul - incr, cumul)
                        cg.ctx.lineTo(xc, yc)
                        cg.ctx.fill()

                        //next angular sector
                        cumul += incr
                    } else if (type_ === 'halftone') {
                        //set category color
                        cg.ctx.fillStyle = color

                        //get categroy value
                        const val = cell[column]

                        //compute category radius - in geo
                        /** @type {number} */
                        const rG = sG * 0.333 * Math.sqrt(val / maxVal)

                        //draw circle
                        cg.ctx.beginPath()
                        cg.ctx.arc(
                            xc + r * 0.25 * Math.cos(cumul),
                            yc + r * 0.25 * Math.sin(cumul),
                            rG,
                            0,
                            2 * Math.PI
                        )
                        cg.ctx.fill()

                        //next angular sector
                        cumul += incr
                    } else {
                        throw new Error('Unexpected symbol type:' + type_)
                    }
                }
            } else {
                //compute total
                let total = 0
                for (let column of Object.keys(this.color)) {
                    const v = +cell[column]
                    if (!v) continue
                    total += v
                }
                if (!total || isNaN(total)) continue

                //draw decomposition symbol
                let cumul = 0
                const d = r * (1 - sG / r) * 0.5
                const ori = this.stripesOrientation(cell, r, zf, vc)

                for (let [column, color] of Object.entries(this.color)) {
                    //get share
                    const share = cell[column] / total
                    if (!share || isNaN(share)) continue

                    //set color
                    cg.ctx.fillStyle = color

                    //draw symbol part
                    if (type_ === 'flag') {
                        //draw flag stripe
                        if (ori == 0) {
                            //horizontal
                            cg.ctx.fillRect(
                                cell.x + d + offset.dx,
                                cell.y + d + cumul * sG + offset.dy,
                                sG,
                                share * sG
                            )
                        } else {
                            //vertical
                            cg.ctx.fillRect(
                                cell.x + d + cumul * sG + offset.dx,
                                cell.y + d + offset.dy,
                                share * sG,
                                sG
                            )
                        }
                    } else if (type_ === 'piechart') {
                        //draw pie chart angular sector

                        //compute angles
                        const a1 = cumul * 2 * Math.PI
                        const a2 = (cumul + share) * 2 * Math.PI

                        //draw
                        cg.ctx.beginPath()
                        cg.ctx.moveTo(xc, yc)
                        cg.ctx.arc(xc, yc, sG * 0.5, a1 + offAng, a2 + offAng)
                        if (this.pieChartInternalRadiusFactor)
                            cg.ctx.arc(
                                xc,
                                yc,
                                sG * 0.5 * this.pieChartInternalRadiusFactor,
                                a1 + offAng,
                                a2 + offAng,
                                true
                            )
                        cg.ctx.closePath()
                        cg.ctx.fill()
                    } else if (type_ === 'ring') {
                        //draw ring
                        cg.ctx.beginPath()
                        cg.ctx.arc(xc, yc, Math.sqrt(1 - cumul) * sG * 0.5, 0, 2 * Math.PI)
                        cg.ctx.fill()
                    } else if (type_ === 'segment') {
                        //draw segment sections
                        const wG = (sG * sG) / r
                        if (ori == 0) {
                            //horizontal
                            cg.ctx.fillRect(
                                cell.x + offset.dx,
                                cell.y + (r - wG) / 2 + cumul * wG + offset.dy,
                                r,
                                share * wG
                            )
                        } else {
                            //vertical
                            cg.ctx.fillRect(
                                cell.x + cumul * r + offset.dx,
                                cell.y + (r - wG) / 2 + offset.dy,
                                share * r,
                                wG
                            )
                        }
                    } else {
                        throw new Error('Unexpected symbol type:' + type_)
                    }

                    cumul += share
                }
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, viewScale: vc })
    }
}


/***/ }),

/***/ "./src/style/ContourStyle.js":
/*!***********************************!*\
  !*** ./src/style/ContourStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContourStyle: () => (/* binding */ ContourStyle)
/* harmony export */ });
/* harmony import */ var _SideStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideStyle.js */ "./src/style/SideStyle.js");
//@ts-check


;

/** @typedef {{x:number,y:number,or:"v"|"h",value:number}} Side */

/**
 *
 * @author Julien Gaffuri
 */
class ContourStyle extends _SideStyle_js__WEBPACK_IMPORTED_MODULE_0__.SideStyle {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** @type {number} */
        //opts.interval = opts.interval || 100

        /** @type {Array.<number>} */
        opts.breaks = opts.breaks || [100, 1000, 10000, 100000, 1000000]

        /** @type {function(Side,number,number):string} */
        opts.width = opts.width || (() => 1) //(s, r, zf) => ...

        /** @type {function(Side,number,number):string} */
        opts.color = opts.color || (() => '#E7A935') //(s, r, zf) => ...

        //override method for contour drawing

        const getClass = function (v) {
            if (v == undefined) return 0
            for (let i = 0; i < opts.breaks.length; i++) if (v < opts.breaks[i]) return i
            return opts.breaks.length
        }

        this.value = (v1, v2, r, s, zf) => {
            //if (!v1 || !v2) return 0
            return Math.abs(getClass(v2) - getClass(v1))

            //check if v1 - v2 cross a contour line
            //const r1 = Math.floor(v1 / opts.interval);
            //const r2 = Math.floor(v2 / opts.interval);
            //return Math.abs(r2 - r1);
        }

        //same color for all
        this.color = (side, r, s, zf) => (side.value ? opts.color(side, r, zf) : undefined)

        //width: multiple of
        this.width = (side, r, s, zf) => side.value * zf * opts.width(side, r, zf)
    }
}


/***/ }),

/***/ "./src/style/DotDensityStyle.js":
/*!**************************************!*\
  !*** ./src/style/DotDensityStyle.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DotDensityStyle: () => (/* binding */ DotDensityStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
/* harmony import */ var d3_random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-random */ "./node_modules/d3-random/src/normal.js");
/* harmony import */ var _utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/webGLUtils.js */ "./src/utils/webGLUtils.js");
/* harmony import */ var _utils_WebGLSquareColoring_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WebGLSquareColoring.js */ "./src/utils/WebGLSquareColoring.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils.js */ "./src/utils/Utils.js");
//@ts-check


;






/**
 *
 * @author Julien Gaffuri
 */
class DotDensityStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for dot number.
         * @type {string} */
        this.nbCol = opts.nbCol

        /** A function returning the number of dots for a cell value.
         * @type {function(number,number,import("../Style").Stat,number):number} */
        this.nb = opts.nb || ((v, r, s, zf) => (((0.3 * r * r) / (zf * zf)) * v) / s.max)

        /** The color of the dots. Same color for all dots within a cell.
         * @type {function(import("../Dataset").Cell):string} */
        this.color = opts.color || (() => '#FF5733')

        /** A function returning the size of the dots, in geo unit.
         * @type {function(number,number):number} */
        this.dotSize = opts.dotSize //|| ((r, zf) => ...

        /** A function returning the sigma of the distribution from the resolution, in geo unit.
         * @type {function(number,number):number} */
        this.sigma = opts.sigma //|| ((r,zf) => ...
    }

    /**
     * Draw cells as text.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('*** DotDensityStyle draw')

        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let stat
        if (this.nbCol) stat = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.nbCol], true)
        if (!stat) return

        //size of the dots
        const sGeo = this.dotSize ? this.dotSize(r, zf) : 2 * zf

        //make random function
        const sig = this.sigma ? this.sigma(r, zf) : r * 0.4
        const rand = (0,d3_random__WEBPACK_IMPORTED_MODULE_4__["default"])(0, sig)

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)(' preparation')

        if ((0,_utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__.checkWebGLSupport)()) {
            //create canvas and webgl renderer
            const cvWGL = (0,_utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeWebGLCanvas)(cg.w + '', cg.h + '')
            if (!cvWGL) {
                console.error('No webGL')
                return
            }

            //create webGL program
            const prog = new _utils_WebGLSquareColoring_js__WEBPACK_IMPORTED_MODULE_2__.WebGLSquareColoring(cvWGL.gl, sGeo / zf)

            if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)(' webgl creation')

            const r2 = r / 2

            let col, offset, nb, cx, cy, cc
            for (let c of cells) {
                //get color
                col = this.color(c)
                if (!col || col === 'none') continue

                //get offset
                offset = this.offset(c, r, zf)

                //number of dots
                nb = this.nb(c[this.nbCol], r, stat, zf)

                //cell center
                cx = c.x + offset.dx + r2
                cy = c.y + offset.dy + r2

                //convert color
                cc = (0,d3_color__WEBPACK_IMPORTED_MODULE_5__["default"])(col)
                if (!cc) return

                //random points
                for (let i = 0; i <= nb; i++)
                    prog.addPointData2(cx + rand(), cy + rand(), cc.r, cc.g, cc.b, cc.opacity)
            }

            if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)(' data preparation')

            //draw
            prog.draw(cg.getWebGLTransform())

            if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)(' webgl drawing')

            //draw in canvas geo
            cg.initCanvasTransform()
            cg.ctx.drawImage(cvWGL.canvas, 0, 0)

            if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)(' canvas drawing')
        } else {
            //draw with HTML canvas

            //draw in geo coordinates
            cg.setCanvasTransform()

            for (let c of cells) {
                //get color
                const col = this.color(c)
                if (!col || col === 'none') continue
                //set color
                cg.ctx.fillStyle = col

                //get offset
                const offset = this.offset(c, r, zf)

                //number of dots
                const nb = this.nb(c[this.nbCol], r, stat, zf)

                //draw random dots
                const cx = c.x + offset.dx + r / 2,
                    cy = c.y + offset.dy + r / 2
                for (let i = 0; i <= nb; i++) {
                    cg.ctx.fillRect(cx + rand(), cy + rand(), sGeo, sGeo)
                }
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf })

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('*** DotDensityStyle end draw')
    }
}


/***/ }),

/***/ "./src/style/IsoFenceStyle.js":
/*!************************************!*\
  !*** ./src/style/IsoFenceStyle.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsoFenceStyle: () => (/* binding */ IsoFenceStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/** @typedef {{x:number,y:number,or:"v"|"h",c1:import('../Dataset.js').Cell|undefined,c2:import('../Dataset.js').Cell|undefined}} Side */

/**
 * @author Julien Gaffuri
 */
class IsoFenceStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {

    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /**
         * The dictionary (string -> color) which give the color of each category.
         * @type {object} */
        this.color = opts.color

        /** The column where to get the height values.
         * @type {string} */
        this.heightCol = opts.heightCol

        /** A function returning the height of a cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.height = opts.height || ((v, r, s, zf) => r * 0.4)

        /** The perspective angle, in degree, within [-180,180], from [O,x] axis.
         * @type {number} */
        this.angle = opts.angle != undefined ? opts.angle : 50

        /** A function returning the corner line stroke style.
         * @type {function(import('../Dataset.js').Cell,number,number,number):string} */
        this.cornerLineStrokeColor = opts.cornerLineStrokeColor || ((c, r, zf, angle) => "#999")

        /** A function returning the corner line width.
        * @type {function(import('../Dataset.js').Cell,number,number,number):number} */
        this.cornerLineWidth = opts.cornerLineWidth || ((c, r, zf, angle) => (angle % 90 == 0 ? 0 : 0.8 * zf))

        /**
        * Show vertical cross-sections.
        * @type {boolean} */
        this.sVert = opts.sVert != undefined ? opts.sVert : true

        /**
        * Show horizontal cross-sections.
        * @type {boolean} */
        this.sHor = opts.sHor != undefined ? opts.sHor : true
    }

    /**
     * Draw cells as segments.
     *
     * @param {Array.<import("../Dataset.js").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas.js").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let stat
        if (this.heightCol) {
            //if size is used, sort cells by size so that the biggest are drawn first
            cells.sort((c1, c2) => c2[this.heightCol] - c1[this.heightCol])
            //and compute statistics
            stat = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.heightCol], true)
        }

        //nb categories - used for radar and agepyramid
        const cats = Object.keys(this.color)

        //half resolution
        const r2 = r / 2

        //get offset
        // @ts-ignore
        const offset = this.offset(undefined, r, zf), dx = offset.dx, dy = offset.dy

        //height
        /** @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        let h_ = this.height

        //make sides
        /**  @type {Array.<Side>} */
        const sides = []

        //make horizontal sides - except when angle%180=0
        //sort cells by x and y
        if (this.angle % 180 != 90 && this.sVert) {
            cells.sort((c1, c2) => (c2.x == c1.x ? c1.y - c2.y : c1.x - c2.x))
            let c1 = cells[0]
            for (let i = 1; i < cells.length; i++) {
                let c2 = cells[i]

                if ((c1.y + r == c2.y) && (c1.x == c2.x))
                    //cells in same column and touch along horizontal side
                    //make shared side
                    sides.push({ x: c1.x + r2, y: c2.y, or: 'h', c1: c1, c2: c2 })
                else {
                    //cells do not touch along horizontal side
                    //make two sides: top one for c1, bottom for c2
                    sides.push({ x: c1.x + r2, y: c1.y + r, or: 'h', c1: c1, c2: undefined })
                    sides.push({ x: c2.x + r2, y: c2.y, or: 'h', c1: undefined, c2: c2 })
                }

                c1 = c2
            }
        }

        //make vertical sides - except when angle%180=90
        //sort cells by y and x
        if (this.angle % 180 != 0 && this.sHor) {
            cells.sort((c1, c2) => (c2.y == c1.y ? c1.x - c2.x : c1.y - c2.y))
            let c1 = cells[0]
            for (let i = 1; i < cells.length; i++) {
                let c2 = cells[i]

                if ((c1.x + r == c2.x) && (c1.y == c2.y))
                    //cells in same row and touch along vertical side
                    //make shared side
                    sides.push({ x: c2.x, y: c1.y + r2, or: 'v', c1: c1, c2: c2 })
                else {
                    //cells do not touch along vertical side
                    //make two sides: right one for c1, left for c2
                    sides.push({ x: c1.x + r, y: c1.y + r2, or: 'v', c1: c1, c2: undefined })
                    sides.push({ x: c2.x, y: c2.y + r2, or: 'v', c1: undefined, c2: c2 })
                }

                c1 = c2
            }
        }

        //
        if (sides.length == 0) return

        //angle in radians
        const aRad = this.angle * Math.PI / 180, cos = Math.cos(aRad), sin = Math.sin(aRad)

        //sort sides so that the back ones are drawn first. This depends on the angle.
        //depending on distance to the reference corner point
        const xCorner = Math.abs(this.angle) < 90 ? cg.extGeo.xMin : cg.extGeo.xMax
        const yCorner = this.angle < 0 ? cg.extGeo.yMax : cg.extGeo.yMin
        sides.sort((s1, s2) => (Math.hypot(s2.x - xCorner, s2.y - yCorner) - Math.hypot(s1.x - xCorner, s1.y - yCorner)))

        //prepare function to draw corner line for a cell *c*
        const drawCornerLine = (c) => {

            if (!c) return
            //line style
            const lw = this.cornerLineWidth ? this.cornerLineWidth(c, r, zf, this.angle) : 0.8 * zf
            if (lw == 0) return
            cg.ctx.strokeStyle = this.cornerLineStrokeColor ? this.cornerLineStrokeColor(c, r, zf, this.angle) : "#333"
            cg.ctx.lineWidth = lw

            //height - in geo
            const hG = h_(c[this.heightCol], r, stat, zf)

            //draw line
            cg.ctx.beginPath()
            cg.ctx.moveTo(c.x + r2 + dx, c.y + r2 + dy)
            cg.ctx.lineTo(c.x + r2 + hG * cos + dx, c.y + r2 + hG * sin + dy)
            cg.ctx.stroke()
        }

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw sides
        cg.ctx.lineCap = "round";
        for (let s of sides) {

            //heights - in geo
            const hG1 = s.c1 ? h_(s.c1[this.heightCol], r, stat, zf) : 0,
                hG2 = s.c2 ? h_(s.c2[this.heightCol], r, stat, zf) : 0

            //compute totals for both cells
            const total1 = computeTotal(s.c1, cats),
                total2 = computeTotal(s.c2, cats)
            if (total1 == 0 && total2 == 0) continue

            let cumul1 = 0, cumul2 = 0
            for (let [column, color] of Object.entries(this.color)) {
                //draw stripe of side s and category column

                //get values for both cells
                let v1 = s.c1 ? +s.c1[column] : 0
                let v2 = s.c2 ? +s.c2[column] : 0
                if (v1 == 0 && v2 == 0) continue

                //compute heights
                const h1 = hG1 * cumul1 / total1 || 0
                const h1n = hG1 * (cumul1 + v1) / total1 || 0
                const h2 = hG2 * cumul2 / total2 || 0
                const h2n = hG2 * (cumul2 + v2) / total2 || 0

                //make path
                cg.ctx.beginPath()
                if (s.or == "h") {
                    //horizontal side - vertical section
                    //bottom left
                    cg.ctx.moveTo(s.x + h1 * cos + dx, s.y - r2 + h1 * sin + dy)
                    //top left
                    cg.ctx.lineTo(s.x + h2 * cos + dx, s.y + r2 + h2 * sin + dy)
                    //top right
                    cg.ctx.lineTo(s.x + h2n * cos + dx, s.y + r2 + h2n * sin + dy)
                    //bottom right
                    cg.ctx.lineTo(s.x + h1n * cos + dx, s.y - r2 + h1n * sin + dy)
                } else {
                    //vertical side - horizontal section
                    //bottom left
                    cg.ctx.moveTo(s.x - r2 + h1 * cos + dx, s.y + h1 * sin + dy)
                    //bottom right
                    cg.ctx.lineTo(s.x + r2 + h2 * cos + dx, s.y + h2 * sin + dy)
                    //top right
                    cg.ctx.lineTo(s.x + r2 + h2n * cos + dx, s.y + h2n * sin + dy)
                    //top left
                    cg.ctx.lineTo(s.x - r2 + h1n * cos + dx, s.y + h1n * sin + dy)
                }
                //cg.ctx.closePath()

                //fill
                cg.ctx.fillStyle = color
                cg.ctx.fill()

                cumul1 += v1
                cumul2 += v2

                //TODO draw only one line
                //draw corner line
                //if (s.or == "h") {
                drawCornerLine(s.c1)
                drawCornerLine(s.c2)
                //if (this.angle > 0 && s.or == "h") drawCornerLine(s.c2)
                //else drawCornerLine(s.c2)
                //}
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sSize: stat })
    }
}



const computeTotal = (cell, categories) => {
    if (!cell) return 0
    let total = 0
    for (let column of categories) {
        const v = cell[column]
        if (!v) continue
        total += +v
    }
    return total || 0
}


/***/ }),

/***/ "./src/style/JoyPlotStyle.js":
/*!***********************************!*\
  !*** ./src/style/JoyPlotStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoyPlotStyle: () => (/* binding */ JoyPlotStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 *
 * @author Julien Gaffuri
 */
class JoyPlotStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The cell column where to get the value to represent.
         * @type {string} */
        this.heightCol = opts.heightCol

        /** A function returning the height of a cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.height = opts.height || ((v) => Math.sqrt(v))

        /**
         * @type {function(number,{min:number, max:number},number,number):string} */
        this.lineColor = opts.lineColor || ((y, ys, r, zf) => '#BBB')
        /**
         * @type {function(number,{min:number, max:number},number,number):number} */
        this.lineWidth = opts.lineWidth || ((y, ys, r, zf) => zf)
        /**
         * @type {function(number,{min:number, max:number},number,number):string} */
        this.fillColor = opts.fillColor || ((y, ys, r, zf) => '#c08c5968')
    }

    /**
     * Draw cells as squares depending on their value.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     * */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        cg.ctx.lineJoin = 'round'

        //zoom factor
        const zf = cg.getZf()

        //compute statistics
        const stat = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.heightCol], true)

        //index cells by y and x
        /**  @type {object} */
        const ind = {}
        for (const cell of cells) {
            let row = ind[cell.y]
            if (!row) {
                row = {}
                ind[cell.y] = row
            }
            row[cell.x] = this.height(cell[this.heightCol], r, stat, zf)
        }

        //compute extent
        const e = cg.extGeo
        if (!e) return
        const xMin = Math.floor(e.xMin / r) * r
        const xMax = Math.floor(e.xMax / r) * r
        const yMin = Math.floor(e.yMin / r) * r
        const yMax = Math.floor(e.yMax / r) * r

        /**  @type {{min:number, max:number}} */
        const ys = { min: yMin, max: yMax }

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw lines, row by row, stating from the top
        for (let y = yMax; y >= yMin; y -= r) {
            //get row
            const row = ind[y]

            //no row
            if (!row) continue

            //place first point
            cg.ctx.beginPath()
            cg.ctx.moveTo(xMin - r / 2, y)

            //store the previous height
            /** @type {number|undefined} */
            let hG_

            //go through the line cells
            for (let x = xMin; x <= xMax; x += r) {
                //get column value
                /** @type {number} */
                let hG = row[x]
                if (!hG) hG = 0

                if (hG || hG_) {
                    //draw line only when at least one of both values is non-null
                    //TODO test bezierCurveTo
                    cg.ctx.lineTo(x + r / 2, y + hG)
                } else {
                    //else move the point
                    cg.ctx.moveTo(x + r / 2, y)
                }
                //store the previous value
                hG_ = hG
            }

            //last point
            if (hG_) cg.ctx.lineTo(xMax + r / 2, y)

            //draw fill
            const fc = this.fillColor(y, ys, r, zf)
            if (fc && fc != 'none') {
                cg.ctx.fillStyle = fc
                cg.ctx.fill()
            }

            //draw line
            const lc = this.lineColor(y, ys, r, zf)
            const lw = this.lineWidth(y, ys, r, zf)
            if (lc && lc != 'none' && lw > 0) {
                cg.ctx.strokeStyle = lc
                cg.ctx.lineWidth = lw
                cg.ctx.stroke()
            }
        }
    }
}


/***/ }),

/***/ "./src/style/LegoStyle.js":
/*!********************************!*\
  !*** ./src/style/LegoStyle.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegoStyle: () => (/* binding */ LegoStyle)
/* harmony export */ });
/* harmony import */ var _TanakaStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TanakaStyle.js */ "./src/style/TanakaStyle.js");
/* harmony import */ var _StrokeStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrokeStyle.js */ "./src/style/StrokeStyle.js");
/* harmony import */ var _SquareColorCatWGLStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SquareColorCatWGLStyle.js */ "./src/style/SquareColorCatWGLStyle.js");
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;




/**
 * @author Julien Gaffuri
 */
class LegoStyle {
    /**
     * @param {string} col
     * @param {object} opts
     * @returns {Array.<Style>}
     */
    static get(col, opts) {
        opts = opts || {}

        //the colors
        //http://www.jennyscrayoncollection.com/2021/06/all-current-lego-colors.html
        //https://leonawicz.github.io/legocolors/reference/figures/README-plot-1.png
        opts.colors = opts.colors || [
            '#00852b', //darker green
            '#afd246', //light green
            '#fac80a', //dark yellow
            '#bb805a', //brown
            '#d67923', //mostard
            '#cb4e29', //redish
            '#b40000', //red
            '#720012', //dark red
            //"purple",
            //"#eee" //whithe
        ]

        opts.colDark = opts.colDark || '#333'
        opts.colBright = opts.colBright || '#aaa'
        opts.widthFactor = opts.widthFactor || 0.12

        //reuse tanaka as basis
        const ts = _TanakaStyle_js__WEBPACK_IMPORTED_MODULE_0__.TanakaStyle.get(col, opts)
        //style to show limits between pieces
        const sst = new _StrokeStyle_js__WEBPACK_IMPORTED_MODULE_1__.StrokeStyle({
            strokeColor: () => '#666',
            strokeWidth: (v, r, s, z) => 0.2 * z,
            filter: opts.filter,
        })

        return [
            ts[0],
            sst,
            ts[1],
            new LegoTopStyle({ colDark: opts.colDark, colBright: opts.colBright, filter: opts.filter }),
        ]
    }

    /**
     * @param {function(string):string} col
     * @param {object} opts
     * @returns {Array.<Style>}
     */
    static getCat(col, opts) {
        opts = opts || {}

        opts.colDark = opts.colDark || '#333'
        opts.colBright = opts.colBright || '#aaa'

        //
        const s = new _SquareColorCatWGLStyle_js__WEBPACK_IMPORTED_MODULE_2__.SquareColorCatWGLStyle({ colorCol: col, color: opts.color })
        //style to show limits between pieces
        const sst = new _StrokeStyle_js__WEBPACK_IMPORTED_MODULE_1__.StrokeStyle({ strokeColor: () => '#666', strokeWidth: (v, r, s, z) => 0.2 * z })

        return [s, sst, new LegoTopStyle({ colDark: opts.colDark, colBright: opts.colBright })]
    }
}

/**
 * A style to draw top circle of lego bricks.
 */
class LegoTopStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_3__.Style {
    /** @param {object|undefined} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}
        this.colDark = opts.colDark || '#333'
        this.colBright = opts.colBright || '#aaa'
    }

    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        cg.ctx.lineWidth = 0.6 * cg.getZf()

        //dark part
        cg.ctx.strokeStyle = this.colDark
        for (let c of cells) {
            cg.ctx.beginPath()
            cg.ctx.arc(c.x + r * 0.5, c.y + r * 0.5, r * 0.55 * 0.5, Math.PI / 4, -Math.PI * (3 / 4), true)
            cg.ctx.stroke()
        }

        //bright part
        cg.ctx.strokeStyle = this.colBright
        for (let c of cells) {
            cg.ctx.beginPath()
            cg.ctx.arc(c.x + r * 0.5, c.y + r * 0.5, r * 0.55 * 0.5, Math.PI / 4, -Math.PI * (3 / 4), false)
            cg.ctx.stroke()
        }
    }
}


/***/ }),

/***/ "./src/style/MosaicStyle.js":
/*!**********************************!*\
  !*** ./src/style/MosaicStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MosaicStyle: () => (/* binding */ MosaicStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 * @author Julien Gaffuri
 */
class MosaicStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for color.
         * @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the cell.
         * @type {function(number,number,import("../Style").Stat|undefined):string} */
        this.color = opts.color || (() => '#EA6BAC')

        /** The mosaic factor, within [0,0.5]. Set to 0 for no mosaic effect. Set to 0.5 for strong mosaic effect.
         * @type {number} */
        this.mosaicFactor = opts.mosaicFactor || 0.15

        /** The mosaic shadow factor, within [0,0.5]. Set to 0 for no mosaic shadow. Set to 0.5 for strong mosaic shadow.
         * @type {number} */
        this.shadowFactor = opts.shadowFactor || 0.2

        /** The mosaic shadow color.
         * @type {string} */
        this.shadowColor = opts.shadowColor || '#555'
    }

    /**
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} resolution
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, resolution, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        //set stroke style, for shadow
        cg.ctx.strokeStyle = this.shadowColor
        cg.ctx.lineWidth = this.shadowFactor * resolution
        cg.ctx.lineJoin = 'round'
        cg.ctx.lineCap = 'butt'

        //function to compute position mosaic effect
        const d = resolution * this.mosaicFactor
        const mosaic = () => {
            return { x: Math.random() * d, y: Math.random() * d }
        }

        //draw with HTML canvas in geo coordinates
        cg.setCanvasTransform()

        for (let cell of cells) {
            //set fill color
            const col = this.color ? this.color(cell[this.colorCol], resolution, statColor) : undefined
            if (!col || col === 'none') continue
            cg.ctx.fillStyle = col

            //get offset
            const offset = this.offset(cell, resolution, zf)

            //compute position mosaic effect
            const ll = mosaic(),
                ul = mosaic(),
                lr = mosaic(),
                ur = mosaic()

            //stroke
            if (this.shadowFactor > 0) {
                cg.ctx.beginPath()
                cg.ctx.moveTo(cell.x + offset.dx + ll.x, cell.y + offset.dy + ll.y)
                cg.ctx.lineTo(cell.x + offset.dx + resolution - lr.x, cell.y + offset.dy + lr.y)
                cg.ctx.lineTo(cell.x + offset.dx + resolution - ur.x, cell.y + offset.dy + resolution - ur.y)
                cg.ctx.stroke()
            }

            //fill

            cg.ctx.beginPath()
            cg.ctx.moveTo(cell.x + offset.dx + ll.x, cell.y + offset.dy + ll.y)
            cg.ctx.lineTo(cell.x + offset.dx + resolution - lr.x, cell.y + offset.dy + lr.y)
            cg.ctx.lineTo(cell.x + offset.dx + resolution - ur.x, cell.y + offset.dy + resolution - ur.y)
            cg.ctx.lineTo(cell.x + offset.dx + ul.x, cell.y + offset.dy + resolution - ul.y)
            cg.ctx.fill()
        }

        //update legends
        this.updateLegends({ style: this, r: resolution, zf: zf, sColor: statColor })
    }
}


/***/ }),

/***/ "./src/style/NinjaStarStyle.js":
/*!*************************************!*\
  !*** ./src/style/NinjaStarStyle.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NinjaStarStyle: () => (/* binding */ NinjaStarStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class NinjaStarStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for color.
         * @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):string} */
        this.color = opts.color || (() => '#EA6BAC') //(v,r,s,zf) => {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for size.
         * @type {string} */
        this.sizeCol = opts.sizeCol

        /** A function returning the size of a cell, within [0,1]:
         *  - 0, nothing shown
         *  - 1, entire square
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.size = opts.size

        /** A function returning the shape.
         * @type {function(import("../Dataset").Cell):string} */
        this.shape = opts.shape || (() => 'o')
    }

    /**
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statSize
        if (this.sizeCol) {
            //if size is used, sort cells by size so that the biggest are drawn first
            cells.sort((c1, c2) => c2[this.sizeCol] - c1[this.sizeCol])
            //and compute size variable statistics
            statSize = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.sizeCol], true)
        }

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        //draw with HTML canvas
        //in geo coordinates
        cg.setCanvasTransform()

        const r2 = r * 0.5
        for (let cell of cells) {
            //color
            const col = this.color ? this.color(cell[this.colorCol], r, statColor, zf) : undefined
            if (!col || col === 'none') continue
            cg.ctx.fillStyle = col

            //shape
            const shape = this.shape ? this.shape(cell) : 'o'
            if (shape === 'none') continue

            //size
            /** @type {function(number,number,import("../Style").Stat|undefined,number):number} */
            let s_ = this.size || (() => 0.5)
            //size - in geo unit
            const sG2 = s_(cell[this.sizeCol], r, statSize, zf) * r2

            //get offset
            //TODO use
            //const offset = this.offset(cell, r, zf)

            //center position
            const cx = cell.x + r2
            const cy = cell.y + r2

            if (shape === 'p') {
                cg.ctx.beginPath()
                cg.ctx.moveTo(cx, cy + r2)
                cg.ctx.lineTo(cx + sG2, cy + sG2)
                cg.ctx.lineTo(cx + r2, cy)
                cg.ctx.lineTo(cx + sG2, cy - sG2)
                cg.ctx.lineTo(cx, cy - r2)
                cg.ctx.lineTo(cx - sG2, cy - sG2)
                cg.ctx.lineTo(cx - r2, cy)
                cg.ctx.lineTo(cx - sG2, cy + sG2)
                cg.ctx.fill()
            } else if (shape === 'o') {
                cg.ctx.beginPath()
                cg.ctx.moveTo(cx, cy + sG2)
                cg.ctx.lineTo(cx + r2, cy + r2)
                cg.ctx.lineTo(cx + sG2, cy)
                cg.ctx.lineTo(cx + r2, cy - r2)
                cg.ctx.lineTo(cx, cy - sG2)
                cg.ctx.lineTo(cx - r2, cy - r2)
                cg.ctx.lineTo(cx - sG2, cy)
                cg.ctx.lineTo(cx - r2, cy + r2)
                cg.ctx.fill()
            } else {
                throw new Error('Unexpected shape:' + shape)
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sSize: statSize, sColor: statColor })
    }
}


/***/ }),

/***/ "./src/style/PillarStyle.js":
/*!**********************************!*\
  !*** ./src/style/PillarStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PillarStyle: () => (/* binding */ PillarStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 * @author Julien Gaffuri
 */
class PillarStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    //TODO make a webGL version ?

    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** @type {string} */
        this.heightCol = opts.heightCol

        /** A function returning the height of the line representing a cell, in geo unit
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.height = opts.height

        /** @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the line representing a cell.
         * @type {function(number,number,import("../Style").Stat|undefined):string} */
        this.color = opts.color || (() => '#c08c59') //bb

        /** @type {string} */
        this.widthCol = opts.widthCol

        /** A function returning the width of the line representing a cell, in geo unit
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.width = opts.width || ((v, r) => 0.5 * r)

        /** @type {boolean} */
        this.simple = opts.simple == true

        /** @type {number} */
        this.viewHeightFactor = opts.viewHeightFactor || 1.5
        //0,0 is the center
        /** @type {number} */
        this.viewSX = opts.viewSX == undefined ? 0 : opts.viewSX
        /** @type {number} */
        this.viewSY = opts.viewSY == undefined ? -0.5 : opts.viewSY

        //TODO replace with sun location ?
        /** @type {number} */
        this.shadowDirection =
            opts.shadowDirection == undefined ? (-40.3 * Math.PI) / 180.0 : opts.shadowDirection
        /** @type {number} */
        this.shadowFactor = opts.shadowFactor || 0.3
        /** @type {string} */
        this.shadowColor = opts.shadowColor || '#00000033'

        /** @type {string} */
        this.outlineCol = opts.outlineCol || '#FFFFFF'
        /** @type {number} */
        this.outlineWidthPix = opts.outlineWidthPix == undefined ? 0.5 : opts.outlineWidthPix
    }

    /**
     * Draw cells as segments.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statHeight
        if (this.heightCol) {
            //compute size variable statistics
            statHeight = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.heightCol], true)
        }

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        let statWidth
        if (this.widthCol) {
            //and compute size variable statistics
            statWidth = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.widthCol], true)
        }

        //get view center geo position
        const cvx = cg.getCenter().x + this.viewSX * cg.w * zf
        const cvy = cg.getCenter().y + this.viewSY * cg.h * zf
        //get view height
        const H = this.viewHeightFactor * (cg.w + cg.h) * 0.5 * zf

        //sort cells by y and x
        //const distToViewCenter = (c) => { const dx = cvx - c.x, dy = cvy - c.y; return Math.sqrt(dx * dx + dy * dy) }
        cells.sort((c1, c2) => 100000000 * (c2.y - c1.y) + c1.x - c2.x)

        cg.ctx.lineCap = this.simple ? 'butt' : 'round'

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw shadows
        cg.ctx.strokeStyle = this.shadowColor
        cg.ctx.fillStyle = this.shadowColor
        for (let c of cells) {
            //width
            /** @type {number|undefined} */
            const wG = this.width ? this.width(c[this.widthCol], r, statWidth, zf) : undefined
            if (!wG || wG < 0) continue

            //height
            /** @type {number|undefined} */
            const hG = this.height ? this.height(c[this.heightCol], r, statHeight, zf) : undefined
            if (!hG || hG < 0) continue

            //get offset
            //TODO use that
            const offset = this.offset(c, r, zf)

            //set width
            cg.ctx.lineWidth = wG

            //compute cell centre postition
            const cx = c.x + r / 2
            const cy = c.y + r / 2
            const ls = hG * this.shadowFactor

            //draw segment
            cg.ctx.beginPath()
            cg.ctx.moveTo(cx, cy)
            cg.ctx.lineTo(cx + ls * Math.cos(this.shadowDirection), cy + ls * Math.sin(this.shadowDirection))
            cg.ctx.stroke()

            /*
            if (this.simple) {
                //draw base circle
                cg.ctx.beginPath();
                cg.ctx.arc(
                    cx, cy,
                    wG * 0.5,
                    0, 2 * Math.PI, false);
                //cg.ctx.stroke();
                cg.ctx.fill();
            }*/
        }

        //draw pillars
        for (let c of cells) {
            //color
            /** @type {string|undefined} */
            const col = this.color ? this.color(c[this.colorCol], r, statColor) : undefined
            if (!col) continue

            //width
            /** @type {number|undefined} */
            const wG = this.width ? this.width(c[this.widthCol], r, statWidth, zf) : undefined
            if (!wG || wG < 0) continue

            //height
            /** @type {number|undefined} */
            const hG = this.height ? this.height(c[this.heightCol], r, statHeight, zf) : undefined
            if (!hG || hG < 0) continue

            //get offset
            //TODO use that
            const offset = this.offset(c, r, zf)

            //compute cell centre postition
            const cx = c.x + r / 2
            const cy = c.y + r / 2

            //compute angle
            const dx = cx - cvx,
                dy = cy - cvy
            const a = Math.atan2(dy, dx)
            const D = Math.sqrt(dx * dx + dy * dy)
            const d = (D * hG) / (H - hG)

            if (this.simple) {
                //draw segment
                cg.ctx.strokeStyle = col
                cg.ctx.lineWidth = wG
                cg.ctx.beginPath()
                cg.ctx.moveTo(cx, cy)
                cg.ctx.lineTo(cx + d * Math.cos(a), cy + d * Math.sin(a))
                cg.ctx.stroke()
            } else {
                //draw background segment
                cg.ctx.strokeStyle = this.outlineCol
                cg.ctx.lineWidth = wG + 2 * this.outlineWidthPix * zf
                cg.ctx.beginPath()
                cg.ctx.moveTo(cx, cy)
                cg.ctx.lineTo(cx + d * Math.cos(a), cy + d * Math.sin(a))
                cg.ctx.stroke()

                //draw segment
                cg.ctx.strokeStyle = col
                cg.ctx.lineWidth = wG
                cg.ctx.beginPath()
                cg.ctx.moveTo(cx, cy)
                cg.ctx.lineTo(cx + d * Math.cos(a), cy + d * Math.sin(a))
                cg.ctx.stroke()

                //draw top circle
                cg.ctx.strokeStyle = this.outlineCol
                //cg.ctx.fillStyle = "#c08c59"
                cg.ctx.lineWidth = this.outlineWidthPix * zf
                cg.ctx.beginPath()
                cg.ctx.arc(cx + d * Math.cos(a), cy + d * Math.sin(a), wG * 0.5, 0, 2 * Math.PI, false)
                cg.ctx.stroke()
                //cg.ctx.fill();
            }
        }

        //in case...
        cg.ctx.lineCap = 'butt'

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sColor: statColor })
    }
}


/***/ }),

/***/ "./src/style/SegmentStyle.js":
/*!***********************************!*\
  !*** ./src/style/SegmentStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentStyle: () => (/* binding */ SegmentStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 * A style where each cell is represented by a segment whose length, width, color and orientation can vary according to statistical values.
 *
 * @author Julien Gaffuri
 */
class SegmentStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** A function returning the orientation (in degrees) of the segment representing a cell.
         * @type {function(import("../Dataset").Cell):number} */
        this.orientation = opts.orientation || (() => 0)

        /**
         * @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the cell segment.
         * @type {function(number,number,import("../Style").Stat|undefined):string} */
        this.color = opts.color || (() => '#EA6BAC')

        /**
         * @type {string} */
        this.lengthCol = opts.lengthCol

        /** A function returning the length of the segment representing a cell, in geo unit
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.length = opts.length

        /**
         * @type {string} */
        this.widthCol = opts.widthCol

        /** A function returning the width of the segment representing a cell, in geo unit
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.width = opts.width
    }

    /**
     * Draw cells as segments.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        let statLength
        if (this.lengthCol) {
            //if length is used, sort cells by length so that the longests are drawn first
            cells.sort((c1, c2) => c2[this.lengthCol] - c1[this.lengthCol])
            //and compute size variable statistics
            statLength = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.lengthCol], true)
        }

        let statWidth
        if (this.widthCol) {
            //and compute size variable statistics
            statWidth = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.widthCol], true)
        }

        //
        cg.ctx.lineCap = 'butt'

        //conversion factor degree -> radian
        const f = Math.PI / 180

        //draw in geo coordinates
        cg.setCanvasTransform()

        for (let c of cells) {
            //color
            /** @type {string|undefined} */
            const col = this.color ? this.color(c[this.colorCol], r, statColor) : undefined
            if (!col) continue

            //width
            /** @type {number|undefined} */
            const wG = this.width ? this.width(c[this.widthCol], r, statWidth, zf) : undefined
            if (!wG || wG < 0) continue

            //length
            /** @type {number|undefined} */
            const lG = this.length ? this.length(c[this.lengthCol], r, statLength, zf) : undefined
            if (!lG || lG < 0) continue

            //orientation (in radian)
            /** @type {number} */
            const or = this.orientation(c) * f
            if (or === undefined || isNaN(or)) continue

            //get offset
            const offset = this.offset(c, r, zf)

            //set color and width
            cg.ctx.strokeStyle = col
            cg.ctx.lineWidth = wG

            //compute segment centre postition
            const cx = c.x + r / 2 + offset.dx
            const cy = c.y + r / 2 + offset.dy

            //compute segment direction
            const dx = 0.5 * Math.cos(or) * lG
            const dy = 0.5 * Math.sin(or) * lG

            //draw segment
            cg.ctx.beginPath()
            cg.ctx.moveTo(cx - dx, cy - dy)
            cg.ctx.lineTo(cx + dx, cy + dy)
            cg.ctx.stroke()
        }

        //update legend, if any
        this.updateLegends({
            widthFun: this.width,
            r: r,
            zf: zf,
            sColor: statColor,
            //sLength: statLength,
            sWidth: statWidth,
        })
    }
}


/***/ }),

/***/ "./src/style/ShapeColorSizeStyle.js":
/*!******************************************!*\
  !*** ./src/style/ShapeColorSizeStyle.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShapeColorSizeStyle: () => (/* binding */ ShapeColorSizeStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
//@ts-check


;


/**
 * A very generic style that shows grid cells with specific color, size and shape.
 * It can be used to show variables as cell colors, cell size, cell shape, or any combination of the three visual variables.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class ShapeColorSizeStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for color.
         * @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):string} */
        this.color = opts.color || (() => '#EA6BAC') //(v,r,s,zf) => {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for size.
         * @type {string} */
        this.sizeCol = opts.sizeCol

        /** A function returning the size of a cell in geographical unit.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.size = opts.size

        /** A function returning the shape of a cell.
         * @type {function(import("../Dataset").Cell):import("../Style").Shape} */
        this.shape = opts.shape || (() => 'square')

        /** The name of the column/attribute of the tabular data where to retrieve the variable for color alpha.
         * @type {string} */
        this.alphaCol = opts.alphaCol

        /** A function returning the color alpha of the cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.alphaF = opts.alphaF
    }

    /**
     * Draw cells as squares, with various colors and size.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statSize
        if (this.sizeCol) {
            //if size is used, sort cells by size so that the biggest are drawn first
            cells.sort((c1, c2) => c2[this.sizeCol] - c1[this.sizeCol])
            //and compute size variable statistics
            statSize = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.sizeCol], true)
        }

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        let statAlpha
        if (this.alphaCol) {
            //compute color alpha variable statistics
            statAlpha = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.alphaCol], true)
        }

        //draw with HTML canvas
        //in geo coordinates
        cg.setCanvasTransform()

        const r2 = r * 0.5
        for (let cell of cells) {
            //color
            let col = this.color ? this.color(cell[this.colorCol], r, statColor, zf) : undefined
            if (!col || col === 'none') continue

            //alpha
            if (this.alphaCol && this.alphaF) {
                //get alpha
                const alpha = this.alphaF(cell[this.alphaCol], r, statAlpha, zf)
                if (alpha == 0) continue
                //apply alpha to color col
                const col_ = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(col);
                if (col_) col = `rgba(${col_.r}, ${col_.g}, ${col_.b}, ${alpha})`;
                else console.warn("Could not decode color " + col + " in ShapeColorSizeStyle")
            }

            //shape
            const shape = this.shape ? this.shape(cell) : 'square'
            if (shape === 'none') continue

            //size
            /** @type {function(number,number,import("../Style").Stat|undefined,number):number} */
            let s_ = this.size || (() => r)
            //size - in geo unit
            const sG = s_(cell[this.sizeCol], r, statSize, zf)

            //get offset
            const offset = this.offset(cell, r, zf)

            cg.ctx.fillStyle = col
            if (shape === 'square') {
                //draw square
                const d = r * (1 - sG / r) * 0.5
                cg.ctx.fillRect(cell.x + d + offset.dx, cell.y + d + offset.dy, sG, sG)
            } else if (shape === 'circle') {
                //draw circle
                cg.ctx.beginPath()
                cg.ctx.arc(cell.x + r2 + offset.dx, cell.y + r2 + offset.dy, sG * 0.5, 0, 2 * Math.PI, false)
                cg.ctx.fill()
            } else if (shape === 'donut') {
                //draw donut
                const xc = cell.x + r2 + offset.dx,
                    yc = cell.y + r2 + offset.dy
                cg.ctx.beginPath()
                cg.ctx.moveTo(xc, yc)
                cg.ctx.arc(xc, yc, r2, 0, 2 * Math.PI)
                cg.ctx.arc(xc, yc, (1 - sG / r) * r2, 0, 2 * Math.PI, true)
                cg.ctx.closePath()
                cg.ctx.fill()
            } else if (shape === 'diamond') {
                const s2 = sG * 0.5
                cg.ctx.beginPath()
                cg.ctx.moveTo(cell.x + r2 - s2, cell.y + r2)
                cg.ctx.lineTo(cell.x + r2, cell.y + r2 + s2)
                cg.ctx.lineTo(cell.x + r2 + s2, cell.y + r2)
                cg.ctx.lineTo(cell.x + r2, cell.y + r2 - s2)
                cg.ctx.fill()
            } else {
                throw new Error('Unexpected shape:' + shape)
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sSize: statSize, sColor: statColor, sAlpha: statAlpha })
    }
}


/***/ }),

/***/ "./src/style/ShapeColorSizeStyle_.js":
/*!*******************************************!*\
  !*** ./src/style/ShapeColorSizeStyle_.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShapeColorSizeStyle_: () => (/* binding */ ShapeColorSizeStyle_)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 * A very generic style that shows grid cells with specific color, size and shape.
 * It can be used to show variables as cell colors, cell size, cell shape, or any combination of the three visual variables.
 *
 * @author Joseph Davies, Julien Gaffuri
 */
class ShapeColorSizeStyle_ extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** A function returning the view scale.
         * @type {function(Array.<import('../Dataset.js').Cell>,number, number):object} */
        this.viewScale = opts.viewScale //(cells,r,z) => {}

        /** A function returning the color of the cell.
         * @type {function(import('../Dataset.js').Cell,number, number,object):string} */
        this.color = opts.color //(c,r,z,o) => {}

        /** A function returning the size of a cell in geographical unit.
         * @type {function(import('../Dataset.js').Cell,number, number,object):number} */
        this.size = opts.size //(c,r,z,o) => {}

        /** A function returning the shape of a cell.
         * @type {function(import("../Dataset.js").Cell,number, number,object):import("../Style.js").Shape} */
        this.shape = opts.shape //(c,r,z,o) => {}
    }

    /**
     * Draw cells as squares, with various colors and sizes.
     *
     * @param {Array.<import("../Dataset.js").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas.js").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        //get view scale
        const vc = this.viewScale ? this.viewScale(cells, r, zf) : undefined

        //draw with HTML canvas in geo coordinates
        cg.setCanvasTransform()

        const r2 = r * 0.5
        for (let c of cells) {
            //color
            let col = this.color ? this.color(c, r, zf, vc) : "black"
            if (!col || col === 'none') continue

            //size
            const size = this.size ? this.size(c, r, zf, vc) : r
            if (!size) continue

            //shape
            const shape = this.shape ? this.shape(c, r, zf, vc) : 'square'
            if (shape === 'none') continue

            //get offset
            const offset = this.offset(c, r, zf)

            cg.ctx.fillStyle = col
            if (shape === 'square') {
                //draw square
                const d = r * (1 - size / r) * 0.5
                cg.ctx.fillRect(c.x + d + offset.dx, c.y + d + offset.dy, size, size)
            } else if (shape === 'circle') {
                //draw circle
                cg.ctx.beginPath()
                cg.ctx.arc(c.x + r2 + offset.dx, c.y + r2 + offset.dy, size * 0.5, 0, 2 * Math.PI, false)
                cg.ctx.fill()
            } else if (shape === 'donut') {
                //draw donut
                const xc = c.x + r2 + offset.dx,
                    yc = c.y + r2 + offset.dy
                cg.ctx.beginPath()
                cg.ctx.moveTo(xc, yc)
                cg.ctx.arc(xc, yc, r2, 0, 2 * Math.PI)
                cg.ctx.arc(xc, yc, (1 - size / r) * r2, 0, 2 * Math.PI, true)
                cg.ctx.closePath()
                cg.ctx.fill()
            } else if (shape === 'diamond') {
                const s2 = size * 0.5
                cg.ctx.beginPath()
                cg.ctx.moveTo(c.x + r2 - s2, c.y + r2)
                cg.ctx.lineTo(c.x + r2, c.y + r2 + s2)
                cg.ctx.lineTo(c.x + r2 + s2, c.y + r2)
                cg.ctx.lineTo(c.x + r2, c.y + r2 - s2)
                cg.ctx.fill()
            } else {
                throw new Error('Unexpected shape:' + shape)
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, viewScale: vc })
    }
}


/***/ }),

/***/ "./src/style/SideCatStyle.js":
/*!***********************************!*\
  !*** ./src/style/SideCatStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideCatStyle: () => (/* binding */ SideCatStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/** @typedef {{x:number,y:number,or:"v"|"h",v1:string|undefined,v2:string|undefined}} Side */

/**
 * A style to show the sides of grid cells based on their different categories.
 *
 * @author Julien Gaffuri
 */
class SideCatStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the categorical value.
         * @type {string} */
        this.col = opts.col

        /**
         * The dictionary (string -> color) which give the color of each category.
         * @type {object} */
        this.color = opts.color

        /** A function returning the width of a cell side line, in geo unit
         * @type {function(Side,number,number):number} */
        this.width = opts.width || ((side, r, z) => r * 0.2)

        /** A fill color for the cells.
         * @type {function(import("../Dataset").Cell):string} */
        this.fillColor = opts.fillColor
    }

    /**
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        if (!cells || cells.length == 0) return

        //zoom factor
        const zf = cg.getZf()

        /**  @type {Array.<Side>} */
        const sides = []

        //make horizontal sides
        //sort cells by x and y
        cells.sort((c1, c2) => (c2.x == c1.x ? c1.y - c2.y : c1.x - c2.x))
        let c1 = cells[0]
        let v1 = c1[this.col]
        for (let i = 1; i < cells.length; i++) {
            let c2 = cells[i]
            let v2 = c2[this.col]

            if (c1.y + r == c2.y && c1.x == c2.x) {
                //cells in same column and touch along horizontal side
                //make shared side
                if (v1 != v2) sides.push({ x: c1.x, y: c2.y, or: 'h', v1: v1, v2: v2 })
            } else {
                //cells do not touch along horizontal side
                //make two sides: top one for c1, bottom for c2
                sides.push({ x: c1.x, y: c1.y + r, or: 'h', v1: v1, v2: undefined })
                sides.push({ x: c2.x, y: c2.y, or: 'h', v1: undefined, v2: v2 })
            }

            c1 = c2
            v1 = v2
        }

        //make vertical sides
        //sort cells by y and x
        cells.sort((c1, c2) => (c2.y == c1.y ? c1.x - c2.x : c1.y - c2.y))
        c1 = cells[0]
        v1 = c1[this.col]
        for (let i = 1; i < cells.length; i++) {
            let c2 = cells[i]
            let v2 = c2[this.col]

            if (c1.x + r == c2.x && c1.y == c2.y) {
                //cells in same row and touch along vertical side
                //make shared side
                if (v1 != v2) sides.push({ x: c1.x + r, y: c1.y, or: 'v', v1: v1, v2: v2 })
            } else {
                //cells do not touch along vertical side
                //make two sides: right one for c1, left for c2
                sides.push({ x: c1.x + r, y: c1.y, or: 'v', v1: v1, v2: undefined })
                sides.push({ x: c2.x, y: c2.y, or: 'v', v1: undefined, v2: v2 })
            }

            c1 = c2
            v1 = v2
        }

        //
        if (sides.length == 0) return

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw cells, if fillColor specified
        if (this.fillColor)
            for (let c of cells) {
                const fc = this.fillColor(c)
                if (!fc || fc == 'none') continue
                cg.ctx.fillStyle = fc
                cg.ctx.fillRect(c.x, c.y, r, r)
            }

        //draw sides
        cg.ctx.lineCap = 'butt'
        for (let s of sides) {
            //width
            /** @type {number|undefined} */
            const wG = this.width ? this.width(s, r, zf) : undefined
            if (!wG || wG <= 0) continue
            const w2 = wG * 0.5

            //set color and width
            cg.ctx.lineWidth = wG

            //draw segment with correct orientation
            if (s.or === 'h') {
                //top line
                if (s.v2) {
                    cg.ctx.beginPath()
                    cg.ctx.strokeStyle = this.color[s.v2]
                    cg.ctx.moveTo(s.x, s.y + w2)
                    cg.ctx.lineTo(s.x + r, s.y + w2)
                    cg.ctx.stroke()
                }

                //bottom line
                if (s.v1) {
                    cg.ctx.beginPath()
                    cg.ctx.strokeStyle = this.color[s.v1]
                    cg.ctx.moveTo(s.x, s.y - w2)
                    cg.ctx.lineTo(s.x + r, s.y - w2)
                    cg.ctx.stroke()
                }
            } else {
                //right line
                if (s.v2) {
                    cg.ctx.beginPath()
                    cg.ctx.strokeStyle = this.color[s.v2]
                    cg.ctx.moveTo(s.x + w2, s.y)
                    cg.ctx.lineTo(s.x + w2, s.y + r)
                    cg.ctx.stroke()
                }

                //left line
                if (s.v1) {
                    cg.ctx.beginPath()
                    cg.ctx.strokeStyle = this.color[s.v1]
                    cg.ctx.moveTo(s.x - w2, s.y)
                    cg.ctx.lineTo(s.x - w2, s.y + r)
                    cg.ctx.stroke()
                }
            }
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf })
    }
}


/***/ }),

/***/ "./src/style/SideStyle.js":
/*!********************************!*\
  !*** ./src/style/SideStyle.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideStyle: () => (/* binding */ SideStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/** @typedef {{x:number,y:number,or:"v"|"h",value:number}} Side */

/**
 *
 * @author Julien Gaffuri
 */
class SideStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for the cell values.
         * @type {string} */
        this.valueCol = opts.valueCol

        /** A function returning the value of a cell side. This value is computed from the two adjacent cell values.
         * For horizontal sides, v1 is the value of the cell below and v2 the value of the cell above.
         * For vertical sides, v1 is the value of the cell left and v2 the value of the cell right.
         * @type {function(number|undefined,number|undefined,number,import("../Style").Stat|undefined,number):number} */
        this.value = opts.value || ((v1, v2, r, s, zf) => 1)

        /** A function returning the color of a cell side.
         * @type {function(Side,number,import("../Style").Stat|undefined,number):string} */
        this.color = opts.color || (() => '#EA6BAC')

        /** A function returning the width of a cell side, in geo unit
         * @type {function(Side,number,import("../Style").Stat|undefined,number):number} */
        this.width = opts.width || ((side, r, s, zf) => (r * side.value) / 5)

        /** orientation. Set to 90 to show sides as slope lines for example.
         * @type {number} */
        this.orientation = opts.orientation || 0

        /** A fill color for the cells.
         * @type {function(import("../Dataset").Cell):string} */
        this.fillColor = opts.fillColor
    }

    /**
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        //compute stats on cell values
        let statValue
        if (this.valueCol) {
            //compute color variable statistics
            statValue = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.valueCol], true)
        }

        /**  @type {Array.<Side>} */
        const sides = []

        //make horizontal sides
        //sort cells by x and y
        cells.sort((c1, c2) => (c2.x == c1.x ? c1.y - c2.y : c1.x - c2.x))
        let c1 = cells[0]
        for (let i = 1; i < cells.length; i++) {
            let c2 = cells[i]

            if ((c1.y + r == c2.y) && (c1.x == c2.x))
                //cells in same column and touch along horizontal side
                //make shared side
                sides.push({
                    x: c1.x,
                    y: c2.y,
                    or: 'h',
                    value: this.value(c1[this.valueCol], c2[this.valueCol], r, statValue, zf),
                })
            else {
                //cells do not touch along horizontal side
                //make two sides: top one for c1, bottom for c2
                sides.push({
                    x: c1.x,
                    y: c1.y + r,
                    or: 'h',
                    value: this.value(c1[this.valueCol], undefined, r, statValue, zf),
                })
                sides.push({
                    x: c2.x,
                    y: c2.y,
                    or: 'h',
                    value: this.value(undefined, c2[this.valueCol], r, statValue, zf),
                })
            }

            c1 = c2
        }

        //make vertical sides
        //sort cells by y and x
        cells.sort((c1, c2) => (c2.y == c1.y ? c1.x - c2.x : c1.y - c2.y))
        c1 = cells[0]
        for (let i = 1; i < cells.length; i++) {
            let c2 = cells[i]

            if ((c1.x + r == c2.x) && (c1.y == c2.y))
                //cells in same row and touch along vertical side
                //make shared side
                sides.push({
                    x: c1.x + r,
                    y: c1.y,
                    or: 'v',
                    value: this.value(c1[this.valueCol], c2[this.valueCol], r, statValue, zf),
                })
            else {
                //cells do not touch along vertical side
                //make two sides: right one for c1, left for c2
                sides.push({
                    x: c1.x + r,
                    y: c1.y,
                    or: 'v',
                    value: this.value(c1[this.valueCol], undefined, r, statValue, zf),
                })
                sides.push({
                    x: c2.x,
                    y: c2.y,
                    or: 'v',
                    value: this.value(undefined, c2[this.valueCol], r, statValue, zf),
                })
            }

            c1 = c2
        }

        //
        if (sides.length == 0) return

        //compute stats on sides
        const statSides = SideStyle.getSideStatistics(sides, true)

        //draw in geo coordinates
        cg.setCanvasTransform()

        //draw cells, if fillColor specified
        if (this.fillColor)
            for (let c of cells) {
                const fc = this.fillColor(c)
                if (!fc || fc == 'none') continue
                cg.ctx.fillStyle = fc
                cg.ctx.fillRect(c.x, c.y, r, r)
            }

        //draw sides
        cg.ctx.lineCap = 'butt'
        const r2 = r / 2
        for (let s of sides) {
            //color
            /** @type {string|undefined} */
            const col = this.color ? this.color(s, r, statSides, zf) : undefined
            if (!col || col == 'none') continue

            //width
            /** @type {number|undefined} */
            const wG = this.width ? this.width(s, r, statSides, zf) : undefined
            if (!wG || wG <= 0) continue

            //set color and width
            cg.ctx.strokeStyle = col
            cg.ctx.lineWidth = wG

            //draw segment with correct orientation
            cg.ctx.beginPath()
            if (this.orientation == 90) {
                cg.ctx.moveTo(s.x + r2, s.y + r2)
                if (s.or === 'h') cg.ctx.lineTo(s.x + r2, s.y - r2)
                else cg.ctx.lineTo(s.x - r2, s.y + r2)
            } else {
                cg.ctx.moveTo(s.x, s.y)
                cg.ctx.lineTo(s.x + (s.or === 'h' ? r : 0), s.y + (s.or === 'v' ? r : 0))
            }
            cg.ctx.stroke()
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf })
    }

    /**
     * Compute some statistics on a value of some sides.
     * This is used to define how to draw specifically the sides within the view.
     *
     * @param {Array.<Side>} sides
     * @param {boolean} ignoreZeros
     * @returns {import("../Style").Stat | undefined}
     */
    static getSideStatistics(sides, ignoreZeros) {
        if (!sides || sides.length == 0) return undefined
        let min = Infinity
        let max = -Infinity
        //let sum = 0
        //let nb = 0
        for (const s of sides) {
            const v = s.value
            if (ignoreZeros && !v) continue
            if (v < min) min = v
            if (v > max) max = v
            //sum += v
            //nb++
        }
        return { min: min, max: max }
    }
}


/***/ }),

/***/ "./src/style/SquareColorCatWGLStyle.js":
/*!*********************************************!*\
  !*** ./src/style/SquareColorCatWGLStyle.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SquareColorCatWGLStyle: () => (/* binding */ SquareColorCatWGLStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
/* harmony import */ var _utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/webGLUtils.js */ "./src/utils/webGLUtils.js");
/* harmony import */ var _utils_WebGLSquareColoringCatAdvanced_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WebGLSquareColoringCatAdvanced.js */ "./src/utils/WebGLSquareColoringCatAdvanced.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils.js */ "./src/utils/Utils.js");
//@ts-check


;




/**
 * Style based on webGL
 * To show cells as colored squares, from categories.
 * Alls squares with the same size
 *
 * @author Julien Gaffuri
 */
class SquareColorCatWGLStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /**
         * The name of the column/attribute of the tabular data where to retrieve the category of the cell, for coloring.
         * @type {string} */
        this.colorCol = opts.colorCol

        /**
         * The dictionary (string -> color) which give the color of each category.
         * @type {object} */
        opts.color = opts.color || undefined

        /** @type { Array.<string> } @private */
        const keys = Object.keys(opts.color)

        /** @type { object } @private */
        this.catToI = {}
        for (let i = 0; i < keys.length; i++) this.catToI[keys[i]] = i + ''

        /** @type { Array.<string> } @private */
        this.colors = []
        for (let i = 0; i < keys.length; i++) {
            this.colors.push(opts.color['' + keys[i]])
        }

        /**
         * A function returning the size of the cells, in geographical unit. All cells have the same size.
         * @type {function(number,number):number} */
        this.size = opts.size // (resolution, zf) => ...

        /**
         * @private
         * @type { WebGLSquareColoringCatAdvanced } */
        this.wgp = new _utils_WebGLSquareColoringCatAdvanced_js__WEBPACK_IMPORTED_MODULE_2__.WebGLSquareColoringCatAdvanced(this.colors)
    }

    /**
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('*** SquareColorCatWGLStyle draw')

        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        //add vertice and fragment data
        const r2 = r / 2
        let c,
            nb = cells.length
        const verticesBuffer = []
        const iBuffer = []
        for (let i = 0; i < nb; i++) {
            c = cells[i]
            const cat = c[this.colorCol]
            if (cat == undefined) {
                console.log('Unexpected category: ' + cat)
                continue
            }
            /** @type {number} */
            const i_ = this.catToI[cat]
            if (isNaN(+i_)) {
                console.log('Unexpected category index: ' + cat + ' ' + i_)
                continue
            }
            verticesBuffer.push(c.x + r2, c.y + r2)
            iBuffer.push(+i_)
        }

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   webgl program inputs preparation')

        //create canvas and webgl renderer
        const cvWGL = (0,_utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeWebGLCanvas)(cg.w + '', cg.h + '')
        if (!cvWGL) {
            console.error('No webGL')
            return
        }
        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   web GL canvas creation')

        //draw
        const sizeGeo = this.size ? this.size(r, zf) : r + 0.2 * zf
        this.wgp.draw(cvWGL.gl, verticesBuffer, iBuffer, cg.getWebGLTransform(), sizeGeo / zf)

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   webgl drawing')

        //draw in canvas geo
        cg.initCanvasTransform()
        cg.ctx.drawImage(cvWGL.canvas, 0, 0)

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   canvas drawing')

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf })

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('*** SquareColorCatWGLStyle end draw')
    }
}


/***/ }),

/***/ "./src/style/SquareColorWGLStyle.js":
/*!******************************************!*\
  !*** ./src/style/SquareColorWGLStyle.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SquareColorWGLStyle: () => (/* binding */ SquareColorWGLStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
/* harmony import */ var _utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/webGLUtils.js */ "./src/utils/webGLUtils.js");
/* harmony import */ var _utils_WebGLSquareColoringAdvanced_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WebGLSquareColoringAdvanced.js */ "./src/utils/WebGLSquareColoringAdvanced.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils.js */ "./src/utils/Utils.js");
//@ts-check


;




/**
 * Style based on webGL
 * To show cells as colored squares, with computation of the colors on GPU side (faster than JavaScript side).
 * Alls squares with the same size
 *
 * @author Julien Gaffuri
 */
class SquareColorWGLStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /**
         * The name of the column/attribute of the tabular data where to retrieve the variable for color.
         * @type {string} */
        this.colorCol = opts.colorCol

        /**
         * A function returning the t value (within [0,1]) of the cell.
         * @type {function(number,number,import("../Style").Stat):number} */
        this.tFun = opts.tFun || ((v, r, s) => v / s.max)

        /**
         * Distribution stretching method.
         * The stretching is performed on GPU side (fragment shader).
         * @type {{ fun:string, alpha:number }} */
        this.stretching = opts.stretching

        /**
         * The sample of the color ramp.
         * The color is computed on GPU side (fragment shader) based on those values (linear interpolation).
         * @type {Array.<string>} */
        this.colors =
            opts.colors ||
            [
                'rgb(158, 1, 66)',
                'rgb(248, 142, 83)',
                'rgb(251, 248, 176)',
                'rgb(137, 207, 165)',
                'rgb(94, 79, 162)',
            ].reverse()
        if (opts.color)
            this.colors = [
                opts.color(0),
                opts.color(0.2),
                opts.color(0.4),
                opts.color(0.6),
                opts.color(0.8),
                opts.color(1),
            ]

        /**
         * Define the opacity of the style, within [0,1].
         * If this opacity is defined, the individual color opacity will be ignored.
         * @type {function(number,number):number} */
        this.opacity = opts.opacity // (r,zf) => ...

        /**
         * A function returning the size of the cells, in geographical unit. All cells have the same size.
         * @type {function(number,number):number} */
        this.size = opts.size // (resolution, zf) => ...
    }

    /**
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('*** SquareColorWGLStyle draw')

        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        //compute color variable statistics
        const statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   color stats computation')

        if (!statColor) return

        //create canvas and webgl renderer
        //for opacity control, see: https://webglfundamentals.org/webgl/lessons/webgl-and-alpha.html
        const cvWGL = (0,_utils_webGLUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeWebGLCanvas)(
            cg.w + '',
            cg.h + '',
            this.opacity != undefined ? { premultipliedAlpha: false } : undefined
        )
        if (!cvWGL) {
            console.error('No webGL')
            return
        }
        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   web GL canvas creation')

        //add vertice and fragment data
        const r2 = r / 2
        const verticesBuffer = []
        const tBuffer = []
        for (let c of cells) {
            const t = this.tFun(c[this.colorCol], r, statColor)
            if (t == null || t == undefined) continue
            verticesBuffer.push(c.x + r2, c.y + r2)
            tBuffer.push(t > 1 ? 1 : t < 0 ? 0 : t)
        }

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   webgl drawing data preparation')

        //compute pixel size
        const sizeGeo = this.size ? this.size(r, zf) : r + 0.2 * zf

        //compute opacity
        const op = this.opacity ? this.opacity(r, zf) : undefined

        //
        const wgp = new _utils_WebGLSquareColoringAdvanced_js__WEBPACK_IMPORTED_MODULE_2__.WebGLSquareColoringAdvanced(cvWGL.gl, this.colors, this.stretching, sizeGeo / zf, op)

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   webgl program preparation')

        //draw
        wgp.draw(verticesBuffer, tBuffer, cg.getWebGLTransform())

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   webgl drawing')

        //draw in canvas geo
        cg.initCanvasTransform()
        cg.ctx.drawImage(cvWGL.canvas, 0, 0)

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('   canvas drawing')

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sColor: statColor })

        if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitor) (0,_utils_Utils_js__WEBPACK_IMPORTED_MODULE_3__.monitorDuration)('*** SquareColorWGLStyle end draw')
    }
}


/***/ }),

/***/ "./src/style/StrokeStyle.js":
/*!**********************************!*\
  !*** ./src/style/StrokeStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrokeStyle: () => (/* binding */ StrokeStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 *
 * @author Julien Gaffuri
 */
class StrokeStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for color.
         * @type {string} */
        this.strokeColorCol = opts.strokeColorCol

        /** A function returning the color of the stroke.
         * @type {function(number,number,import("../Style").Stat|undefined):string} */
        this.strokeColor = opts.strokeColor || (() => '#666')

        /** The name of the column/attribute of the tabular data where to retrieve the variable for size.
         * @type {string} */
        this.sizeCol = opts.sizeCol

        /** A function returning the size of a cell in geographical unit.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.size = opts.size

        /** The stroke line width, in pixels.
         * @type {string} */
        this.strokeWidthCol = opts.strokeWidthCol

        /** The stroke line width in geographical unit.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.strokeWidth = opts.strokeWidth // (v,r,s,z)=>...

        /** A function returning the shape of a cell.
         * @type {function(import("../Dataset").Cell):import("../Style").Shape} */
        this.shape = opts.shape || (() => 'square')
    }

    /**
     * Draw cells as squares, with various colors and size.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statColor
        if (this.strokeColorCol) statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.strokeColorCol], true)

        let statSize
        if (this.sizeCol) statSize = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.sizeCol], true)

        let statWidth
        if (this.strokeWidthCol) statWidth = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.strokeWidthCol], true)

        //draw with HTML canvas
        //in geo coordinates
        cg.setCanvasTransform()

        const r2 = r * 0.5
        for (let cell of cells) {
            //color
            const col = this.strokeColor
                ? this.strokeColor(cell[this.strokeColorCol], r, statColor)
                : undefined
            if (!col || col === 'none') continue
            cg.ctx.strokeStyle = col

            //size
            /** @type {function(number,number,import("../Style").Stat|undefined,number):number} */
            let s_ = this.size || (() => r)
            //size - in geo unit
            const sG = s_(cell[this.sizeCol], r, statSize, zf)

            //width
            const wi = this.strokeWidth
                ? this.strokeWidth(cell[this.strokeWidthCol], r, statWidth, zf)
                : 1 * zf
            if (!wi || wi <= 0) continue
            cg.ctx.lineWidth = wi

            //shape
            const shape = this.shape ? this.shape(cell) : 'square'
            if (shape === 'none') continue

            //get offset
            const offset = this.offset(cell, r, zf)

            if (shape === 'square') {
                //draw square
                const d = r * (1 - sG / r) * 0.5
                cg.ctx.beginPath()
                cg.ctx.rect(cell.x + d + offset.dx, cell.y + d + offset.dy, sG, sG)
                cg.ctx.stroke()
            } else if (shape === 'circle') {
                //draw circle
                cg.ctx.beginPath()
                cg.ctx.arc(cell.x + r2 + offset.dx, cell.y + r2 + offset.dy, sG * 0.5, 0, 2 * Math.PI, false)
                cg.ctx.stroke()
            } else if (shape === 'diamond') {
                const s2 = sG * 0.5
                cg.ctx.beginPath()
                cg.ctx.moveTo(cell.x + r2 - s2, cell.y + r2)
                cg.ctx.lineTo(cell.x + r2, cell.y + r2 + s2)
                cg.ctx.lineTo(cell.x + r2 + s2, cell.y + r2)
                cg.ctx.lineTo(cell.x + r2, cell.y + r2 - s2)
                cg.ctx.lineTo(cell.x + r2 - s2, cell.y + r2)
                cg.ctx.stroke()
            } else if (shape === 'donut') {
                console.error('Not implemented')
            } else {
                throw new Error('Unexpected shape:' + shape)
            }
        }

        //update legends
        //this.updateLegends({ style: this, r: resolution, zf: zf, sSize: statSize, sColor: statColor });
    }
}


/***/ }),

/***/ "./src/style/TanakaStyle.js":
/*!**********************************!*\
  !*** ./src/style/TanakaStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TanakaStyle: () => (/* binding */ TanakaStyle)
/* harmony export */ });
/* harmony import */ var _SquareColorWGLStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareColorWGLStyle.js */ "./src/style/SquareColorWGLStyle.js");
/* harmony import */ var _SideStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideStyle.js */ "./src/style/SideStyle.js");
//@ts-check


;


/**
 *
 * @see https://manifold.net/doc/mfd9/example__tanaka_contours.htm
 *
 * @author Julien Gaffuri
 */
class TanakaStyle {
    /**
     * @param {string} col
     * @param {object} opts
     * @returns {Array.<import("../Style").Style>}
     */
    static get(col, opts) {
        opts = opts || {}

        //get colors from d3 ramps, if 'nb' is specified
        if (opts.nb != undefined) {
            if (opts.nb < 2) {
                console.error('unexpected number of colors in tanaka (<2): ' + opts.nb)
                opts.nb = 2
            }
            if (!opts.color) {
                console.error('color function not defined in tanaka')
                opts.color = () => 'gray'
            }
            opts.colors = []
            for (let i = 0; i < opts.nb; i++) opts.colors.push(opts.color(i / (opts.nb - 1)))
        }

        /**
         * The colors.
         * @type {Array.<string>} */
        opts.colors = opts.colors || ['#a9bb9e', '#c9dcaa', '#fde89f', '#f9a579', '#eb444b']
        const nb = opts.colors.length

        /** A function to compute 't' from the value v
         * @type {function(number,number,import("../Style").Stat):number} */
        opts.tFun = opts.tFun || ((v, r, s) => (v - s.min) / (s.max - s.min))

        //shadow colors
        opts.colDark = opts.colDark || '#111'
        opts.colBright = opts.colBright || '#ddd'

        //width of the segment (share of the resolution)
        opts.widthFactor = opts.widthFactor || 0.08

        //shading
        opts.newShading = opts.newShading
        opts.newShadingWidthPix = opts.newShadingWidthPix || 2
        //transparency value, within [0,1]
        opts.newShadingTr =
            opts.newShadingTr ||
            ((sideValue, sideStat) =>
                Math.abs(sideValue) / Math.max(Math.abs(sideStat.min), Math.abs(sideStat.max)))

        /**
         * @param {number} t A cell t value, within [0,1].
         * @returns the class number for the value
         */
        const getClass = (t) => {
            if (isNaN(t) || t == undefined) {
                console.error('Unexpected t value 1: ' + t)
                return -9
            }
            for (let i = 0; i < nb; i++) if (t <= (i + 1) / nb) return i
            console.error('Unexpected t value 2: ' + t)
            return -9
        }

        const colStyle = new _SquareColorWGLStyle_js__WEBPACK_IMPORTED_MODULE_0__.SquareColorWGLStyle({
            colorCol: col,
            colors: opts.colors,
            tFun: (v, r, s) => {
                const t = opts.tFun(v, r, s)
                const c = getClass(t)
                return c / (nb - 1)
            },
            //stretching: { fun: "expRev", alpha: -7 },
            size: (r, zf) => r + 0.5 * zf, //that is to ensure no gap between same class cells is visible
            filter: opts.filter,
        })

        /*
        if no web gl:    
            const colStyle = new ShapeColorSizeStyle({
                colorCol: col,
                //the color corresponding to the class
                color: (v, r, s, zf) => {
                    if (v == 0 && opts.tFun && isNaN(opts.tFun(v, r, s)))
                        return undefined
                    return opts.colors[getClass(opts.tFun ? opts.tFun(v, r, s) : v)]
                },
                shape: () => "square",
                size: (v, r, s, zf) => r + 0.5 * zf, //that is to ensure no gap between same class cells is visible
            })
        */

        /** The side style, for the shadow effect */
        const sideStyle = new _SideStyle_js__WEBPACK_IMPORTED_MODULE_1__.SideStyle({
            valueCol: col,
            value: (v1, v2, r, s, zf) => {
                //compute the number of classes of difference
                if (v1 === undefined && v2 === undefined) return 0
                else if (v2 === undefined) {
                    const t = opts.tFun(v1, r, s)
                    if (t == undefined || isNaN(t)) throw new Error('Unexpected value: ' + v1 + ' - ' + t)
                    const c = getClass(t)
                    return c + 1
                } else if (v1 === undefined) {
                    const t = opts.tFun(v2, r, s)
                    if (t == undefined || isNaN(t)) throw new Error('Unexpected value: ' + v2 + ' - ' + t)
                    const c = getClass(t)
                    return -c - 1
                }
                const t1 = opts.tFun(v1, r, s)
                if (t1 == undefined || isNaN(t1)) throw new Error('Unexpected value: ' + v1 + ' - ' + t1)
                const t2 = opts.tFun(v2, r, s)
                if (t2 == undefined || isNaN(t2)) throw new Error('Unexpected value: ' + v2 + ' - ' + t2)
                const c1 = getClass(t1)
                const c2 = getClass(t2)
                return -c2 + c1
            },

            color: opts.newShading
                ? //black with transparency depending on difference
                  (side, r, s, z) => {
                      const tr = opts.newShadingTr(side.value, s)
                      return (side.value > 0 && side.or === 'h') || (side.value < 0 && side.or === 'v')
                          ? 'rgba(255,255,100,' + tr + ')'
                          : 'rgba(0,0,0,' + tr + ')'
                  }
                : //white or black, depending on orientation and value
                  (side, r, s, z) => {
                      if (side.value === 0) return
                      //return "gray"
                      if (side.or === 'v') return side.value < 0 ? opts.colBright : opts.colDark
                      return side.value < 0 ? opts.colDark : opts.colBright
                  },

            width: opts.newShading
                ? //fill size
                  (side, r, s, z) => {
                      return opts.newShadingWidthPix * z
                  }
                : //width depends on the value, that is the number of classes of difference
                  (side, r, s, z) =>
                      opts.widthFactor * r * Math.abs(side.value) * (side.or === 'v' ? 0.5 : 1),

            filter: opts.filter,
        })

        return [colStyle, sideStyle]
    }
}


/***/ }),

/***/ "./src/style/TextStyle.js":
/*!********************************!*\
  !*** ./src/style/TextStyle.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextStyle: () => (/* binding */ TextStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/**
 *
 * @author Julien Gaffuri
 */
class TextStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The name of the column/attribute of the tabular data where to retrieve the variable for text.
         * @type {string} */
        this.textCol = opts.textCol

        /** A function returning the text of a cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):string} */
        this.text = opts.text || ((v, r, s, z) => 'X')

        /** The name of the column/attribute of the tabular data where to retrieve the variable for color.
         * @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the cell.
         * @type {function(number,number,import("../Style").Stat|undefined,number):string} */
        this.color = opts.color || (() => '#EA6BAC')

        /** The name of the column/attribute of the tabular data where to retrieve the variable for font size.
         * @type {string} */
        this.fontSizeCol = opts.fontSizeCol

        /** A function returning the font size of a cell in geo unit.
         * @type {function(number,number,import("../Style").Stat|undefined,number):number} */
        this.fontSize = opts.fontSize || ((v, r, s, z) => r * 0.8)

        /** The text font family.
         * @type {string} */
        this.fontFamily = opts.fontFamily || 'Arial'

        /** The text font weight.
         * @type {string} */
        this.fontWeight = opts.fontWeight || 'bold'
    }

    /**
     * Draw cells as text.
     *
     * @param {Array.<import("../Dataset").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas").GeoCanvas} cg
     */
    draw(cells, r, cg) {
        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statText
        if (this.textCol) {
            //compute text variable statistics
            statText = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.textCol], true)
        }

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        let statFontSize
        if (this.fontSizeCol) {
            //if size is used, sort cells by size so that the biggest are drawn first
            cells.sort((c1, c2) => c2[this.fontSizeCol] - c1[this.fontSizeCol])
            //and compute size variable statistics
            statFontSize = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.fontSizeCol], true)
        }

        //draw with HTML canvas
        //in screen coordinates
        cg.initCanvasTransform()

        for (let cell of cells) {
            //get cell text
            const text = this.text ? this.text(cell[this.textCol], r, statText, zf) : undefined
            if (text == undefined || text == null || text + '' === '') continue

            //color
            const col = this.color ? this.color(cell[this.colorCol], r, statColor, zf) : undefined
            if (!col) continue
            cg.ctx.fillStyle = col

            //font size
            //size - in pixel unit
            const fontSizePix = this.fontSize(cell[this.fontSizeCol], r, statFontSize, zf) / zf

            //set font
            const fontFamily = this.fontFamily || 'Arial'
            const fontWeight = this.fontWeight || 'bold'
            cg.ctx.font = fontWeight + ' ' + fontSizePix + 'px ' + fontFamily

            //get offset
            const offset = this.offset(cell, r, zf)

            //text position
            cg.ctx.textAlign = 'center'
            const tx = cg.geoToPixX(cell.x + r * 0.5 + offset.dx)
            const ty = cg.geoToPixY(cell.y + r * 0.5 + offset.dy) + fontSizePix * 0.3 //it should be 0.5 but 0.3 seems to work better

            //draw the text
            cg.ctx.fillText(text, tx, ty)
        }

        //update legends
        this.updateLegends({ style: this, r: r, zf: zf, sColor: statColor })
    }

    /**
     * Build a function [0,1]->string for characters legend
     *
     * @param {Array.<string>} chars
     * @returns {function(number):string}
     */
    static getCharLegendFun(chars) {
        const nb = chars.length
        return (t) => (t == 0 ? '' : t == 1 ? chars[nb - 1] : chars[Math.floor(t * nb)])
    }
}


/***/ }),

/***/ "./src/style/TimeSeriesStyle.js":
/*!**************************************!*\
  !*** ./src/style/TimeSeriesStyle.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesStyle: () => (/* binding */ TimeSeriesStyle)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style.js */ "./src/Style.js");
//@ts-check


;

/** @typedef {"first"|"bottom"|"center"|"top"|"last"} AnchorModeYEnum */

/**
 * Show cell as timeseries chart
 * Can be used for sparkline map of https://datagistips.hypotheses.org/488
 *
 * @author Julien Gaffuri
 */
class TimeSeriesStyle extends _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style {
    /** @param {object} opts */
    constructor(opts) {
        super(opts)
        opts = opts || {}

        /** The columns of the time series, ordered in chronological order.
         * @type {Array.<string>} */
        this.ts = opts.ts

        /** A function specifying when a value should be considered as "no data" and thus not ignored. The line will have a break at these values.
         * @type {function(string):boolean} */
        this.noData = opts.noData || ((v) => v === undefined || v == "" || v === null || isNaN(+v))

        //x
        /** in geo unit
         * @type {function(import("../Dataset.js").Cell,number,number):number} */
        this.offsetX = opts.offsetX || ((c, r, zf) => 0)
        /** @type {function(import("../Dataset.js").Cell,number,number):number} */
        this.width = opts.width || ((c, r, zf) => r)

        //y
        /** in geo unit
         * @type {function(import("../Dataset.js").Cell,number,number):number} */
        this.offsetY = opts.offsetY || ((c, r, zf) => 0)
        /** @type {function(import("../Dataset.js").Cell,number,number):number} */
        this.height = opts.height || ((c, r, zf) => r)
        /** @type {function(import("../Dataset.js").Cell,number,number):AnchorModeYEnum} */
        this.anchorModeY = opts.anchorModeY || ((c, r, zf) => "center")


        /**
         * @type {string} */
        this.lineWidthCol = opts.lineWidthCol

        /** A function returning the width of the line, in geo unit
         * @type {function(number,number,import("../Style.js").Stat|undefined,number):number} */
        this.lineWidth = opts.lineWidth || ((v, r, s, zf) => 1.5 * zf)

        /**
         * @type {string} */
        this.colorCol = opts.colorCol

        /** A function returning the color of the cell.
         * @type {function(number,number,import("../Style.js").Stat|undefined,number):string} */
        this.color = opts.color || ((v, r, s, zf) => 'black')

    }

    /**
     * Draw cells as text.
     *
     * @param {Array.<import("../Dataset.js").Cell>} cells
     * @param {number} r
     * @param {import("../GeoCanvas.js").GeoCanvas} cg
     */
    draw(cells, r, cg) {

        //filter
        if (this.filter) cells = cells.filter(this.filter)

        //zoom factor
        const zf = cg.getZf()

        let statWidth
        if (this.lineWidthCol) {
            //and compute size variable statistics
            statWidth = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.lineWidthCol], true)
        }

        let statColor
        if (this.colorCol) {
            //compute color variable statistics
            statColor = _Style_js__WEBPACK_IMPORTED_MODULE_0__.Style.getStatistics(cells, (c) => c[this.colorCol], true)
        }

        //compute cell amplitude
        const getAmplitude = c => {
            let min, max
            for (let t of this.ts) {
                const val = c[t];
                if (val == undefined) continue
                if (min == undefined || val < min) min = val
                if (max == undefined || val > max) max = val
            }
            if (min == undefined) return undefined
            return max - min
        }

        //compute max amplitude
        let ampMax
        for (let c of cells) {
            const amp = getAmplitude(c)
            if (amp == undefined) continue
            if (ampMax == undefined || amp > ampMax) ampMax = amp
        }
        if (!ampMax) return

        const nb = this.ts.length

        //draw with HTML canvas
        //in geo coordinates
        cg.setCanvasTransform()

        cg.ctx.lineCap = "butt"
        for (let c of cells) {

            //line width
            /** @type {number|undefined} */
            const wG = this.lineWidth ? this.lineWidth(c[this.lineWidthCol], r, statWidth, zf) : undefined
            if (!wG || wG < 0) continue

            //line color
            /** @type {string|undefined} */
            const col = this.color ? this.color(c[this.colorCol], r, statColor, zf) : undefined
            if (!col) continue


            //x
            const offX = this.offsetX ? this.offsetX(c, r, zf) : 0
            if (offX == undefined || isNaN(offX)) continue
            const w = this.width ? this.width(c, r, zf) : r
            if (w == undefined || isNaN(w)) continue

            //y
            const offY = this.offsetY ? this.offsetY(c, r, zf) : 0
            if (offY == undefined || isNaN(offY)) continue
            const h = this.height ? this.height(c, r, zf) : r
            if (h == undefined || isNaN(h)) continue
            const anchY = this.anchorModeY ? this.anchorModeY(c, r, zf) : "center"
            if (!anchY) continue

            cg.ctx.lineWidth = wG
            cg.ctx.strokeStyle = col

            //compute anchor Y figures
            let val0, y0
            if (anchY === "first") {
                //get first value
                val0 = c[this.ts[0]]
                y0 = 0
            } else if (anchY === "last") {
                //get last value
                val0 = c[this.ts[this.ts.length - 1]]
                y0 = 0
            } else if (anchY === "bottom") {
                //get min
                for (let t of this.ts) {
                    const val = +c[t];
                    if (val == undefined) continue
                    if (val0 == undefined || val < val0) val0 = val
                }
                y0 = 0
            } else if (anchY === "top") {
                //get max
                for (let t of this.ts) {
                    const val = +c[t];
                    if (val == undefined) continue
                    if (val0 == undefined || val > val0) val0 = val
                }
                y0 = r
            } else if (anchY === "center") {
                //get min and max
                let min, max
                for (let t of this.ts) {
                    const val = c[t];
                    if (val == undefined) continue
                    if (min == undefined || val < min) min = val
                    if (max == undefined || val > max) max = val
                }
                val0 = (+max + +min) * 0.5
                y0 = r / 2
            } else {
                console.log("Unexpected anchorModeY: " + anchY)
                continue;
            }

            /*/draw line
            if (val0 == undefined || isNaN(val0)) continue
            cg.ctx.beginPath()
            const sX = w / (nb - 1)
            for (let i = 0; i < nb; i++) {
                const val = c[this.ts[i]]
                if (val == undefined || isNaN(val)) break
                if (i == 0)
                    cg.ctx.moveTo(c.x + i * sX + offX, c.y + y0 + (val - val0) * h / ampMax + offY)
                else
                    cg.ctx.lineTo(c.x + i * sX + offX, c.y + y0 + (val - val0) * h / ampMax + offY)
            }
            cg.ctx.stroke()*/


            //draw line, segment by segment
            const sX = w / (nb - 1)

            //handle first point
            let v0 = c[this.ts[0]]
            if (!this.noData(v0)) {
                cg.ctx.beginPath()
                cg.ctx.moveTo(c.x + offX, c.y + y0 + (v0 - val0) * h / ampMax + offY)
            }
            //console.log(v0, isNaN(v0))

            let v1
            for (let i = 1; i < nb; i++) {
                v1 = c[this.ts[i]]

                //draw segment from v0 to v1

                //both points 'no data'
                if (this.noData(v0) && this.noData(v1)) {

                    //second point 'no data'
                } else if (!this.noData(v0) && this.noData(v1)) {
                    cg.ctx.stroke()

                    //first point 'no data'
                } else if (this.noData(v0) && !this.noData(v1)) {
                    cg.ctx.beginPath()
                    cg.ctx.moveTo(c.x + i * sX + offX, c.y + y0 + (v1 - val0) * h / ampMax + offY)

                    //both points have data: trace line
                } else {
                    cg.ctx.lineTo(c.x + i * sX + offX, c.y + y0 + (v1 - val0) * h / ampMax + offY)
                    //if it is the last point, stroke
                    if (i == nb - 1) cg.ctx.stroke()
                }
                v0 = v1
            }

        }

        //update legend, if any
        this.updateLegends({
            widthFun: this.lineWidth,
            r: r,
            zf: zf,
            sColor: statColor,
            //sLength: statLength,
            sWidth: statWidth,
        })

    }

}



/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClass: () => (/* binding */ getClass),
/* harmony export */   monitor: () => (/* binding */ monitor),
/* harmony export */   monitorDuration: () => (/* binding */ monitorDuration)
/* harmony export */ });
//@ts-check


/**
 * Get the class id from a value and class break values
 *
 * @param {number} v the value
 * @param {Array.<number>} breaks the breaks
 * @returns The class id, from 0 to breaks.length
 */
function getClass(v, breaks) {
    if (!breaks) return
    if (breaks.length == 0) return 0
    if (v <= breaks[0]) return 0
    for (let i = 1; i < breaks.length; i++) if (breaks[i - 1] < v && v <= breaks[i]) return i
    return breaks.length
}

let monitor = false

let previousDate
function monitorDuration(message) {
    const nowDate = Date.now()

    //first call
    if (!previousDate) {
        previousDate = nowDate
        console.log(previousDate, message)
        return
    }

    const d = nowDate - previousDate
    previousDate = nowDate
    console.log(d, message)
}


/***/ }),

/***/ "./src/utils/WebGLSquareColoring.js":
/*!******************************************!*\
  !*** ./src/utils/WebGLSquareColoring.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebGLSquareColoring: () => (/* binding */ WebGLSquareColoring)
/* harmony export */ });
/* harmony import */ var _webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webGLUtils.js */ "./src/utils/webGLUtils.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
//@ts-check


;


/**
 * Everything to easily draw colored squares with webGL.
 * All the same size, but different fill color.
 */
class WebGLSquareColoring {
    /**
     *
     * @param {WebGLRenderingContext} gl
     */
    constructor(gl, sizePix) {
        this.gl = gl
        this.sizePix = sizePix || 10.0

        this.program = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.initShaderProgram)(
            gl,
            (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.createShader)(
                gl,
                gl.VERTEX_SHADER,
                `
            attribute vec2 pos;
            uniform float sizePix;
            uniform mat3 mat;
            attribute vec4 color;
            varying vec4 vColor;
            void main() {
              gl_Position = vec4(mat * vec3(pos, 1.0), 1.0);
              gl_PointSize = sizePix;
              vColor = color;
            }
          `
            ),
            (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.createShader)(
                gl,
                gl.FRAGMENT_SHADER,
                `
            precision mediump float;
            varying vec4 vColor;
            void main(void) {
                vec4 vColor_ = vColor / 255.0;
                vColor_[3] = 255.0 * vColor_[3];
                gl_FragColor = vColor_;
            }`
            )
        )
        gl.useProgram(this.program)

        //buffer data
        this.verticesBuffer = []
        this.colorsBuffer = []
    }

    /** Add data to vertices/size/color buffers for color squares drawing */
    addPointData(xC, yC, col) {
        //convert color
        const cc = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(col)
        //const cc = {r:45,g:87,b:98,opacity:0.9}
        if (!cc) return

        //vertices
        this.verticesBuffer.push(xC, yC)
        //color
        this.colorsBuffer.push(cc.r, cc.g, cc.b, cc.opacity)
    }

    addPointData2(xC, yC, r, g, b, opacity) {
        //vertices
        this.verticesBuffer.push(xC, yC)
        //color
        this.colorsBuffer.push(r, g, b, opacity)
    }

    /**  */
    draw(transfoMat) {
        const gl = this.gl

        //vertice data
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesBuffer), gl.STATIC_DRAW)
        const position = gl.getAttribLocation(this.program, 'pos')
        gl.vertexAttribPointer(
            position,
            2, //numComponents
            gl.FLOAT, //type
            false, //normalise
            0, //stride
            0 //offset
        )
        gl.enableVertexAttribArray(position)

        //color data
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colorsBuffer), gl.STATIC_DRAW)
        var color = gl.getAttribLocation(this.program, 'color')
        gl.vertexAttribPointer(color, 4, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(color)

        //sizePix
        gl.uniform1f(gl.getUniformLocation(this.program, 'sizePix'), 1.0 * this.sizePix)

        //transformation
        gl.uniformMatrix3fv(gl.getUniformLocation(this.program, 'mat'), false, new Float32Array(transfoMat))

        // Enable the depth test
        //gl.enable(gl.DEPTH_TEST);
        // Clear the color buffer bit
        gl.clear(gl.COLOR_BUFFER_BIT)
        // Set the view port
        //gl.viewport(0, 0, cg.w, cg.h);

        gl.drawArrays(gl.POINTS, 0, this.verticesBuffer.length / 2)
    }
}


/***/ }),

/***/ "./src/utils/WebGLSquareColoringAdvanced.js":
/*!**************************************************!*\
  !*** ./src/utils/WebGLSquareColoringAdvanced.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebGLSquareColoringAdvanced: () => (/* binding */ WebGLSquareColoringAdvanced)
/* harmony export */ });
/* harmony import */ var _webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webGLUtils.js */ "./src/utils/webGLUtils.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
//@ts-check


;


/**
 * Everything to easily draw colored squares with webGL.
 * All the same size, but different fill color.
 * The color interpolation is computed in the fragment shader program, by the GPU, thus it is less flexible but faster.
 */
class WebGLSquareColoringAdvanced {
    //see:
    //https://webglfundamentals.org/webgl/lessons/fr/webgl-shaders-and-glsl.html#les-uniforms-dans-les-shaders-de-vertex
    //https://thebookofshaders.com/glossary/?search=mix
    //https://thebookofshaders.com/06/
    //https://thebookofshaders.com/glossary/

    /**
     *
     * @param {*} gl
     * @param {Array.<String>} colors
     * @param {{fun:string,alpha:number}} stretching
     * @param {number} sizePix
     * @param {number|undefined} globalOpacity
     */
    constructor(gl, colors, stretching, sizePix = 10, globalOpacity = undefined) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl
        //gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        /** @type {WebGLShader} */
        const vShader = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.createShader)(
            gl,
            gl.VERTEX_SHADER,
            `
        attribute vec2 pos;
        uniform float sizePix;
        uniform mat3 mat;

        attribute float t;
        varying float vt;

        void main() {
          gl_Position = vec4(mat * vec3(pos, 1.0), 1.0);
          gl_PointSize = sizePix;
          vt = t;
        }
      `
        )

        //prepare fragment shader code
        //declare the uniform and other variables
        let fshString =
            '' +
            'precision mediump float;\n' +
            'varying float vt;\n' +
            'uniform float alpha;\n' +
            (() => {
                const out = []
                for (let i = 0; i < colors.length; i++) out.push('uniform vec4 c' + i + ';\n')
                return out.join('')
            })() +
            //start the main function, apply the stretching of t
            'void main(void) {\n'

        if (stretching) {
            if (stretching.fun == 'pow')
                //sPow = (t, alpha = 3) => Math.pow(t, alpha);
                fshString += '   float t = pow(vt, alpha);\n'
            else if (stretching.fun == 'powRev')
                //sPowRev = (t, alpha = 3) => 1 - Math.pow(1 - t, 1 / alpha);
                fshString += '   float t = 1.0-pow(1.0-vt, 1.0/alpha);\n'
            else if (stretching.fun == 'exp')
                //sExp = (t, alpha = 3) => alpha == 0 ? t : (Math.exp(t * alpha) - 1) / (Math.exp(alpha) - 1);
                fshString +=
                    stretching.alpha == 0
                        ? `float t = vt;`
                        : '   float t = (exp(vt * alpha) - 1.0) / (exp(alpha) - 1.0);\n'
            else if (stretching.fun == 'expRev')
                //sExpRev = (t, alpha = 3) => alpha == 0 ? t : 1 - (1 / alpha) * Math.log(Math.exp(alpha) * (1 - t) + t);
                fshString +=
                    stretching.alpha == 0
                        ? `float t = vt;`
                        : '   float t = 1.0 - (1.0 / alpha) * log(exp(alpha) * (1.0 - vt) + vt);\n'
            else if (stretching.fun == 'circleLow') {
                if (stretching.alpha == 0)
                    //if (alpha == 0) return t;
                    fshString += '   float t = vt;\n'
                else if (stretching.alpha == 1)
                    // if (alpha == 1) return Math.sqrt(2 * t - t * t);
                    fshString += '   float t = sqrt(vt * (2.0 - vt));\n'
                else {
                    //const a = alpha / (1 - alpha);
                    //return Math.sqrt(1 / (a * a) + t * (2 / a + 2 - t)) - 1 / a;
                    fshString +=
                        '   float a = alpha / (1.0 - alpha);\n' +
                        '   float t = sqrt(1.0 / (a * a) + vt * ( 2.0/a + 2.0 - vt )) - 1.0 / a;\n'
                }
            } else if (stretching.fun == 'circleHigh') {
                // 1 - sCircleLow(1 - t, alpha)
                if (stretching.alpha == 0)
                    //if (alpha == 0) return t;
                    fshString += '   float t = vt;\n'
                else if (stretching.alpha == 1)
                    // if (alpha == 1) return Math.sqrt(2 * t - t * t);
                    fshString += '   float t = 1.0 - sqrt((1.0 - vt) * (1.0 + vt));\n'
                else {
                    //const a = alpha / (1 - alpha);
                    //return Math.sqrt(1 / (a * a) + (2 * t) / a + 2 * t - t * t) - 1 / a;
                    fshString +=
                        '   float a = alpha / (1.0 - alpha);\n' +
                        '   float t = 1.0 - sqrt(1.0 / (a * a) + (1.0-vt) * ( 2.0/a + 1.0 + vt )) + 1.0 / a;\n'
                }
            } else {
                console.error('Unexpected stretching function code: ' + stretching.fun)
                fshString += '   float t = vt;\n'
            }
        } else {
            fshString += '   float t = vt;\n'
        }

        //choose initial and final colors, and adjust t value
        if (colors.length == 1) fshString += '   vec4 cI=c0;\n   vec4 cF=c0;\n'
        else if (colors.length == 2) fshString += '   vec4 cI=c0;\n   vec4 cF=c1;\n'
        else {
            const nb = colors.length - 1
            const nbs = nb + '.0'
            fshString += '   vec4 cI;\n'
            fshString += '   vec4 cF;\n'
            fshString += '   if(t<1.0/' + nbs + ') { cI=c0; cF=c1; t=t*' + nbs + '; }\n'
            for (let i = 2; i < nb; i++)
                fshString +=
                    '   else if(t<' +
                    i +
                    '.0/' +
                    nbs +
                    ') { cI=c' +
                    (i - 1) +
                    '; cF=c' +
                    i +
                    '; t=' +
                    nbs +
                    '*t-' +
                    (i - 1) +
                    '.0; }\n'
            fshString +=
                '   else { cI=c' + (nb - 1) + '; cF=c' + nb + '; t=' + nbs + '*t-' + (nb - 1) + '.0; }\n'
        }

        //one single color
        if (colors.length == 1) fshString += '   gl_FragColor = vec4(c0[0], c0[1], c0[2], c0[3]);}\n'
        //set interpolated color, between initial and final one
        else fshString += '   gl_FragColor = mix(cI, cF, t);}\n'

        //console.log(fshString)

        /** @type {WebGLShader} */
        const fShader = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.createShader)(gl, gl.FRAGMENT_SHADER, fshString)

        /** @type {WebGLProgram} */
        this.program = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.initShaderProgram)(gl, vShader, fShader)
        gl.useProgram(this.program)

        //set uniforms

        //sizePix
        //TODO: bug here. Seems to be limited to some threshold value (around 250).
        gl.uniform1f(gl.getUniformLocation(this.program, 'sizePix'), 1.0 * sizePix)

        //stretching alpha factor
        gl.uniform1f(gl.getUniformLocation(this.program, 'alpha'), stretching ? 1.0 * stretching.alpha : 0.0)

        //colors
        for (let i = 0; i < colors.length; i++) {
            const c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(colors[i])

            let opacity = c.opacity
            if (c.opacity == 1 && globalOpacity != undefined) opacity = globalOpacity

            gl.uniform4fv(gl.getUniformLocation(this.program, 'c' + i), [
                +c.r / 255.0,
                +c.g / 255.0,
                +c.b / 255.0,
                +opacity,
            ])
        }
    }

    /**  */
    draw(verticesBuffer, tBuffer, transfoMat) {
        const gl = this.gl
        const program = this.program

        //vertice data
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesBuffer), gl.STATIC_DRAW)
        const position = gl.getAttribLocation(program, 'pos')
        gl.vertexAttribPointer(
            position,
            2, //numComponents
            gl.FLOAT, //type
            false, //normalise
            0, //stride
            0 //offset
        )
        gl.enableVertexAttribArray(position)

        //t data
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tBuffer), gl.STATIC_DRAW)
        const t = gl.getAttribLocation(program, 't')
        gl.vertexAttribPointer(t, 1, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(t)

        //transformation
        gl.uniformMatrix3fv(gl.getUniformLocation(program, 'mat'), false, new Float32Array(transfoMat))

        // Enable the depth test
        //gl.enable(gl.DEPTH_TEST);
        // Clear the color buffer bit
        gl.clear(gl.COLOR_BUFFER_BIT)
        // Set the view port
        //gl.viewport(0, 0, cg.w, cg.h);

        gl.drawArrays(gl.POINTS, 0, verticesBuffer.length / 2)
    }
}


/***/ }),

/***/ "./src/utils/WebGLSquareColoringCatAdvanced.js":
/*!*****************************************************!*\
  !*** ./src/utils/WebGLSquareColoringCatAdvanced.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebGLSquareColoringCatAdvanced: () => (/* binding */ WebGLSquareColoringCatAdvanced)
/* harmony export */ });
/* harmony import */ var _webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webGLUtils.js */ "./src/utils/webGLUtils.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
//@ts-check


;


/**
 * Everything to easily draw colored squares with webGL.
 * All the same size, but different fill color.
 * Color based on categories.
 */
class WebGLSquareColoringCatAdvanced {
    /**
     * @param {Array.<string>} colors
     */
    constructor(colors) {
        /**
         * @type {Array.<string>} */
        this.colors = colors

        /** Vector shader program
         * @type {string} */
        this.vshString = `
        attribute vec2 pos;
        uniform float sizePix;
        uniform mat3 mat;

        attribute float i;
        varying float vi;

        void main() {
          gl_Position = vec4(mat * vec3(pos, 1.0), 1.0);
          gl_PointSize = sizePix;
          vi = i;
        }
        `

        //prepare fragment shader code
        //declare the uniform and other variables
        const out = []
        out.push('precision mediump float;\nvarying float vi;\n')
        //add color uniforms
        out.push('uniform vec4')
        for (let i = 0; i < colors.length; i++) {
            if (i > 0) out.push(',')
            out.push(' c' + i)
        }
        out.push(';\n')
        //start the main function
        out.push('void main(void) {\n')
        //choose color i
        for (let i = 0; i < colors.length; i++) {
            if (i > 0) out.push('else ')
            out.push('if(vi==')
            out.push(i)
            out.push('.0) gl_FragColor = vec4(c')
            out.push(i)
            out.push('[0], c')
            out.push(i)
            out.push('[1], c')
            out.push(i)
            out.push('[2], c')
            out.push(i)
            out.push('[3]);\n')
        }
        out.push('else gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}')
        /** Fragment shader program
         * @type {string} */
        this.fshString = out.join('')
    }

    /**  */
    draw(gl, verticesBuffer, iBuffer, transfoMat, sizePix = 10) {
        /** @type {WebGLShader} */
        const vShader = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.createShader)(gl, gl.VERTEX_SHADER, this.vshString)

        /** @type {WebGLShader} */
        const fShader = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.createShader)(gl, gl.FRAGMENT_SHADER, this.fshString)

        /** @type {WebGLProgram} */
        const program = (0,_webGLUtils_js__WEBPACK_IMPORTED_MODULE_0__.initShaderProgram)(gl, vShader, fShader)
        gl.useProgram(program)

        //set uniforms

        //sizePix
        gl.uniform1f(gl.getUniformLocation(program, 'sizePix'), 1.0 * sizePix)

        //colors
        for (let i = 0; i < this.colors.length; i++) {
            const c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(this.colors[i])
            gl.uniform4fv(gl.getUniformLocation(program, 'c' + i), [
                +c.r / 255.0,
                +c.g / 255.0,
                +c.b / 255.0,
                +c.opacity,
            ])
        }

        //vertice data
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesBuffer), gl.STATIC_DRAW)
        const position = gl.getAttribLocation(program, 'pos')
        gl.vertexAttribPointer(
            position,
            2, //numComponents
            gl.FLOAT, //type
            false, //normalise
            0, //stride
            0 //offset
        )
        gl.enableVertexAttribArray(position)

        //i data
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(iBuffer), gl.STATIC_DRAW)
        const i = gl.getAttribLocation(program, 'i')
        gl.vertexAttribPointer(i, 1, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(i)

        //transformation
        gl.uniformMatrix3fv(gl.getUniformLocation(program, 'mat'), false, new Float32Array(transfoMat))

        // Enable the depth test
        //gl.enable(gl.DEPTH_TEST);
        // Clear the color buffer bit
        gl.clear(gl.COLOR_BUFFER_BIT)
        // Set the view port
        //gl.viewport(0, 0, cg.w, cg.h);

        gl.drawArrays(gl.POINTS, 0, verticesBuffer.length / 2)
    }
}


/***/ }),

/***/ "./src/utils/stretching.js":
/*!*********************************!*\
  !*** ./src/utils/stretching.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circularInverseScale: () => (/* binding */ circularInverseScale),
/* harmony export */   circularScale: () => (/* binding */ circularScale),
/* harmony export */   exponentialScale: () => (/* binding */ exponentialScale),
/* harmony export */   logarithmicScale: () => (/* binding */ logarithmicScale),
/* harmony export */   powerInverseScale: () => (/* binding */ powerInverseScale),
/* harmony export */   powerScale: () => (/* binding */ powerScale),
/* harmony export */   sCircleHigh: () => (/* binding */ sCircleHigh),
/* harmony export */   sCircleLow: () => (/* binding */ sCircleLow),
/* harmony export */   sExp: () => (/* binding */ sExp),
/* harmony export */   sExpInverse: () => (/* binding */ sExpInverse),
/* harmony export */   sExpRev: () => (/* binding */ sExpRev),
/* harmony export */   sExpRevInverse: () => (/* binding */ sExpRevInverse),
/* harmony export */   sPow: () => (/* binding */ sPow),
/* harmony export */   sPowInverse: () => (/* binding */ sPowInverse),
/* harmony export */   sPowRev: () => (/* binding */ sPowRev),
/* harmony export */   sPowRevInverse: () => (/* binding */ sPowRevInverse)
/* harmony export */ });
//@ts-check



/**
 * Some function [0,1]->[0,1] to stretch range of values.
 * @see https://github.com/eurostat/gridviz/blob/master/docs/reference.md#stretching
 * @see https://observablehq.com/@jgaffuri/stretching
 */


const powerScale = (exponent = 3) => t => Math.pow(t, exponent)
const powerInverseScale = (exponent = 3) => t => 1 - Math.pow(1 - t, 1 / exponent)
const exponentialScale = (base = 3) => {
    if (base == 0) return t => t
    const a = (Math.exp(base) - 1)
    return t => (Math.exp(t * base) - 1) / a
}
const logarithmicScale = (base = 3) => {
    if (base == 0) return t => t
    return t => 1 - (1 / base) * Math.log(Math.exp(base) * (1 - t) + t)
}

const circularScale = (alpha = 0.8) => {
    if (alpha == 0) return t => t
    if (alpha == 1) return t => Math.sqrt(t * (2 - t))
    else {
        const a = alpha / (1 - alpha)
        return t => Math.sqrt(1 / (a * a) + t * (2 / a + 2 - t)) - 1 / a
    }
}
const circularInverseScale = (alpha = 0.8) => {
    const f = circularScale(alpha)
    return t => 1 - f(1 - t)
}








// deprecated


/**
 * Function [0,1]->[0,1] to stretch range of values.
 * Polynomial
 *
 * @param {number} t The value to stretch, within [0,1]
 * @param {number} exponent 1: no stretching. <1: show low values. >1: show high values.
 * @returns {number} The stretched value, within [0,1]
 */
const sPow = (t, exponent = 3) => Math.pow(t, exponent)

/**
 * Function [0,1]->[0,1] to stretch range of values.
 * Polynomial (reverse)
 *
 * @param {number} t The value to stretch, within [0,1]
 * @param {number} exponent 1: no stretching. <1: show low values. >1: show high values.
 * @returns {number} The stretched value, within [0,1]
 */
const sPowRev = (t, exponent = 3) => 1 - Math.pow(1 - t, 1 / exponent)

/**
 * Function [0,1]->[0,1] to stretch range of values.
 * Exponential
 *
 * @param {number} t The value to stretch, within [0,1]
 * @param {number} base 0: no stretching. -Inf: show low values. Inf: show high values.
 * @returns {number} The stretched value, within [0,1]
 */
const sExp = (t, base = 3) => (base == 0 ? t : (Math.exp(t * base) - 1) / (Math.exp(base) - 1))

/**
 * Function [0,1]->[0,1] to stretch range of values.
 * Exponential (reverse)
 *
 * @param {number} t The value to stretch, within [0,1]
 * @param {number} base 0: no stretching. -Inf: show low values. Inf: show high values.
 * @returns {number} The stretched value, within [0,1]
 */
const sExpRev = (t, base = 3) =>
    base == 0 ? t : 1 - (1 / base) * Math.log(Math.exp(base) * (1 - t) + t)

/**
 * Function [0,1]->[0,1] to stretch range of values.
 * Circle, show low values
 * NB: sCircleHigh and sCircleLow are inverse functions of each other.
 *
 * @param {number} t The value to stretch, within [0,1]
 * @param {number} alpha 0: no stretching. 1: perfect circle section
 * @returns {number} The stretched value, within [0,1]
 */
const sCircleLow = (t, alpha = 0.8) => {
    if (alpha == 0) return t
    if (alpha == 1) return Math.sqrt(t * (2 - t))
    const a = alpha / (1 - alpha)
    return Math.sqrt(1 / (a * a) + t * (2 / a + 2 - t)) - 1 / a
}

/**
 * Function [0,1]->[0,1] to stretch range of values.
 * Circle, show high values
 * NB: sCircleHigh and sCircleLow are inverse functions of each other.
 *
 * @param {number} t The value to stretch, within [0,1]
 * @param {number} alpha 0: no stretching. 1: perfect circle section
 * @returns {number} The stretched value, within [0,1]
 */
const sCircleHigh = (t, alpha = 0.8) => 1 - sCircleLow(1 - t, alpha)

/**
 * Inverse functions
 */

/**
 * Inverse function of sExp
 * @param {number} y
 * @param {number} base
 * @returns {number}
 */
const sExpInverse = (y, base = 3) =>
    base == 0 ? y : (1 / base) * Math.log(1 - y + y * Math.exp(base))

/**
 * Inverse function of sExpRev
 * @param {number} y
 * @param {number} base
 * @returns {number}
 */
const sExpRevInverse = (y, base = 3) => (Math.exp(-base * y) - 1) / (Math.exp(-base) - 1)

/**
 * Inverse function of sPow
 * @param {number} y
 * @param {number} exponent
 * @returns {number}
 */

const sPowInverse = (y, exponent = 3) => Math.pow(y, 1 / exponent)





/**
 * Inverse function of sPowRev
 * @param {number} y
 * @param {number} exponent
 * @returns {number}
 */
const sPowRevInverse = (y, exponent = 3) => 1 - Math.pow(1 - y, exponent)

//test code
/*
for (let i = 0; i <= 1; i += 0.001) {
  //const v = gviz.sExp(gviz.sExpInverse(i));
  //const v = gviz.sExpInverse(gviz.sExp(i));
  //const v = gviz.sExpRev(gviz.sExpRevInverse(i));
  //const v = gviz.sExpRevInverse(gviz.sExpRev(i));
  //const v = gviz.sPow(gviz.sPowInverse(i));
  //const v = gviz.sPowInverse(gviz.sPow(i));
  //const v = gviz.sPowRev(gviz.sPowRevInverse(i));
  //const v = gviz.sPowRevInverse(gviz.sPowRev(i));
  //const v = gviz.sCircleLow(gviz.sCircleHigh(i));
  //const v = gviz.sCircleHigh(gviz.sCircleLow(i));
  console.log(i - v)
}
*/


/***/ }),

/***/ "./src/utils/webGLUtils.js":
/*!*********************************!*\
  !*** ./src/utils/webGLUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkWebGLSupport: () => (/* binding */ checkWebGLSupport),
/* harmony export */   createShader: () => (/* binding */ createShader),
/* harmony export */   initShaderProgram: () => (/* binding */ initShaderProgram),
/* harmony export */   makeWebGLCanvas: () => (/* binding */ makeWebGLCanvas)
/* harmony export */ });
//@ts-check


/**
 * @param {string} width
 * @param {string} height
 * @param {object} opts
 * @returns {{canvas:HTMLCanvasElement, gl:WebGLRenderingContext}}
 */
function makeWebGLCanvas(width, height, opts) {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    const gl = canvas.getContext('webgl', opts)
    if (!gl) {
        throw new Error('Unable to initialize WebGL. Your browser or machine may not support it.')
    }
    return { canvas: canvas, gl: gl }
}

/**
 * Initialize a shader program, so WebGL knows how to draw our data
 *
 * @param {WebGLRenderingContext} gl
 * @param  {...WebGLShader} shaders
 * @returns {WebGLProgram}
 */
function initShaderProgram(gl, ...shaders) {
    /** @type {WebGLProgram|null} */
    const program = gl.createProgram()
    if (program == null) throw new Error('Cannot create webGL program')
    for (const shader of shaders) gl.attachShader(program, shader)
    gl.linkProgram(program)
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) return program
    throw new Error(gl.getProgramInfoLog(program) || 'Cannot create webGL program (2)')
}

/**
 * Creates a shader of the given type, uploads the source and compiles it.
 *
 * @param {WebGLRenderingContext} gl
 * @param {number} type
 * @param  {...string} sources
 * @returns {WebGLShader}
 */
function createShader(gl, type, ...sources) {
    /** @type {WebGLShader|null} */
    const shader = gl.createShader(type)
    if (shader == null) throw new Error('Cannot create webGL shader')
    gl.shaderSource(shader, sources.join('\n'))
    gl.compileShader(shader)
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader
    throw new Error(gl.getShaderInfoLog(shader) || 'Cannot create webGL shader (2)')
}

/**
 * Check if webGL is supported
 *
 * @returns {boolean}
 */
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas')
        return !!window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
            ? true
            : false
    } catch (err) {
        return false
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* reexport safe */ _App_js__WEBPACK_IMPORTED_MODULE_0__.App),
/* harmony export */   BackgroundLayer: () => (/* reexport safe */ _BackgroundLayer_js__WEBPACK_IMPORTED_MODULE_31__.BackgroundLayer),
/* harmony export */   BackgroundLayerWMS: () => (/* reexport safe */ _BackgroundLayerWMS_js__WEBPACK_IMPORTED_MODULE_32__.BackgroundLayerWMS),
/* harmony export */   BoundaryLayer: () => (/* reexport safe */ _LineLayer_js__WEBPACK_IMPORTED_MODULE_34__.LineLayer),
/* harmony export */   CSVGrid: () => (/* reexport safe */ _dataset_CSVGrid_js__WEBPACK_IMPORTED_MODULE_8__.CSVGrid),
/* harmony export */   ColorCategoryLegend: () => (/* reexport safe */ _legend_ColorCategoryLegend_js__WEBPACK_IMPORTED_MODULE_37__.ColorCategoryLegend),
/* harmony export */   ColorDiscreteLegend: () => (/* reexport safe */ _legend_ColorDiscreteLegend_js__WEBPACK_IMPORTED_MODULE_36__.ColorDiscreteLegend),
/* harmony export */   ColorLegend: () => (/* reexport safe */ _legend_ColorLegend_js__WEBPACK_IMPORTED_MODULE_35__.ColorLegend),
/* harmony export */   CompositionStyle: () => (/* reexport safe */ _style_CompositionStyle_js__WEBPACK_IMPORTED_MODULE_14__.CompositionStyle),
/* harmony export */   CompositionStyle_: () => (/* reexport safe */ _style_CompositionStyle_js__WEBPACK_IMPORTED_MODULE_15__.CompositionStyle_),
/* harmony export */   ContourStyle: () => (/* reexport safe */ _style_ContourStyle_js__WEBPACK_IMPORTED_MODULE_20__.ContourStyle),
/* harmony export */   Dataset: () => (/* reexport safe */ _Dataset_js__WEBPACK_IMPORTED_MODULE_4__.Dataset),
/* harmony export */   DatasetComponent: () => (/* reexport safe */ _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_5__.DatasetComponent),
/* harmony export */   DotDensityStyle: () => (/* reexport safe */ _style_DotDensityStyle_js__WEBPACK_IMPORTED_MODULE_22__.DotDensityStyle),
/* harmony export */   GeoCanvas: () => (/* reexport safe */ _GeoCanvas_js__WEBPACK_IMPORTED_MODULE_1__.GeoCanvas),
/* harmony export */   GridTile: () => (/* reexport safe */ _dataset_GridTile_js__WEBPACK_IMPORTED_MODULE_7__.GridTile),
/* harmony export */   IsoFenceStyle: () => (/* reexport safe */ _style_IsoFenceStyle_js__WEBPACK_IMPORTED_MODULE_30__.IsoFenceStyle),
/* harmony export */   JoyPlotStyle: () => (/* reexport safe */ _style_JoyPlotStyle_js__WEBPACK_IMPORTED_MODULE_13__.JoyPlotStyle),
/* harmony export */   LGrid: () => (/* reexport safe */ _dataset_LGrid_js__WEBPACK_IMPORTED_MODULE_9__.LGrid),
/* harmony export */   LabelLayer: () => (/* reexport safe */ _LabelLayer_js__WEBPACK_IMPORTED_MODULE_33__.LabelLayer),
/* harmony export */   Layer: () => (/* reexport safe */ _Layer_js__WEBPACK_IMPORTED_MODULE_3__.Layer),
/* harmony export */   LegoStyle: () => (/* reexport safe */ _style_LegoStyle_js__WEBPACK_IMPORTED_MODULE_24__.LegoStyle),
/* harmony export */   MosaicStyle: () => (/* reexport safe */ _style_MosaicStyle_js__WEBPACK_IMPORTED_MODULE_27__.MosaicStyle),
/* harmony export */   NinjaStarStyle: () => (/* reexport safe */ _style_NinjaStarStyle_js__WEBPACK_IMPORTED_MODULE_28__.NinjaStarStyle),
/* harmony export */   PillarStyle: () => (/* reexport safe */ _style_PillarStyle_js__WEBPACK_IMPORTED_MODULE_18__.PillarStyle),
/* harmony export */   SegmentOrientationLegend: () => (/* reexport safe */ _legend_SegmentOrientationLegend_js__WEBPACK_IMPORTED_MODULE_40__.SegmentOrientationLegend),
/* harmony export */   SegmentStyle: () => (/* reexport safe */ _style_SegmentStyle_js__WEBPACK_IMPORTED_MODULE_16__.SegmentStyle),
/* harmony export */   SegmentWidthLegend: () => (/* reexport safe */ _legend_SegmentWidthLegend_js__WEBPACK_IMPORTED_MODULE_39__.SegmentWidthLegend),
/* harmony export */   ShapeColorSizeStyle: () => (/* reexport safe */ _style_ShapeColorSizeStyle_js__WEBPACK_IMPORTED_MODULE_10__.ShapeColorSizeStyle),
/* harmony export */   ShapeColorSizeStyle_: () => (/* reexport safe */ _style_ShapeColorSizeStyle_js__WEBPACK_IMPORTED_MODULE_11__.ShapeColorSizeStyle_),
/* harmony export */   SideCatStyle: () => (/* reexport safe */ _style_SideCatStyle_js__WEBPACK_IMPORTED_MODULE_21__.SideCatStyle),
/* harmony export */   SideStyle: () => (/* reexport safe */ _style_SideStyle_js__WEBPACK_IMPORTED_MODULE_19__.SideStyle),
/* harmony export */   SizeLegend: () => (/* reexport safe */ _legend_SizeLegend_js__WEBPACK_IMPORTED_MODULE_38__.SizeLegend),
/* harmony export */   SquareColorCatWGLStyle: () => (/* reexport safe */ _style_SquareColorCatWGLStyle_js__WEBPACK_IMPORTED_MODULE_26__.SquareColorCatWGLStyle),
/* harmony export */   SquareColorWGLStyle: () => (/* reexport safe */ _style_SquareColorWGLStyle_js__WEBPACK_IMPORTED_MODULE_25__.SquareColorWGLStyle),
/* harmony export */   StrokeStyle: () => (/* reexport safe */ _style_StrokeStyle_js__WEBPACK_IMPORTED_MODULE_12__.StrokeStyle),
/* harmony export */   Style: () => (/* reexport safe */ _Style_js__WEBPACK_IMPORTED_MODULE_2__.Style),
/* harmony export */   TanakaStyle: () => (/* reexport safe */ _style_TanakaStyle_js__WEBPACK_IMPORTED_MODULE_23__.TanakaStyle),
/* harmony export */   TextStyle: () => (/* reexport safe */ _style_TextStyle_js__WEBPACK_IMPORTED_MODULE_17__.TextStyle),
/* harmony export */   TiledGrid: () => (/* reexport safe */ _dataset_TiledGrid_js__WEBPACK_IMPORTED_MODULE_6__.TiledGrid),
/* harmony export */   TimeSeriesStyle: () => (/* reexport safe */ _style_TimeSeriesStyle_js__WEBPACK_IMPORTED_MODULE_29__.TimeSeriesStyle),
/* harmony export */   circularInverseScale: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.circularInverseScale),
/* harmony export */   circularScale: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.circularScale),
/* harmony export */   exponentialScale: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.exponentialScale),
/* harmony export */   getClass: () => (/* reexport safe */ _utils_Utils_js__WEBPACK_IMPORTED_MODULE_42__.getClass),
/* harmony export */   getParameterByName: () => (/* binding */ getParameterByName),
/* harmony export */   logarithmicScale: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.logarithmicScale),
/* harmony export */   powerInverseScale: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.powerInverseScale),
/* harmony export */   powerScale: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.powerScale),
/* harmony export */   sCircleHigh: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sCircleHigh),
/* harmony export */   sCircleLow: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sCircleLow),
/* harmony export */   sExp: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sExp),
/* harmony export */   sExpInverse: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sExpInverse),
/* harmony export */   sExpRev: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sExpRev),
/* harmony export */   sExpRevInverse: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sExpRevInverse),
/* harmony export */   sPow: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sPow),
/* harmony export */   sPowInverse: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sPowInverse),
/* harmony export */   sPowRev: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sPowRev),
/* harmony export */   sPowRevInverse: () => (/* reexport safe */ _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__.sPowRevInverse)
/* harmony export */ });
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ "./src/App.js");
/* harmony import */ var _GeoCanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeoCanvas.js */ "./src/GeoCanvas.js");
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style.js */ "./src/Style.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer.js */ "./src/Layer.js");
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dataset.js */ "./src/Dataset.js");
/* harmony import */ var _DatasetComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DatasetComponent.js */ "./src/DatasetComponent.js");
/* harmony import */ var _dataset_TiledGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataset/TiledGrid.js */ "./src/dataset/TiledGrid.js");
/* harmony import */ var _dataset_GridTile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataset/GridTile.js */ "./src/dataset/GridTile.js");
/* harmony import */ var _dataset_CSVGrid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataset/CSVGrid.js */ "./src/dataset/CSVGrid.js");
/* harmony import */ var _dataset_LGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataset/LGrid.js */ "./src/dataset/LGrid.js");
/* harmony import */ var _style_ShapeColorSizeStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/ShapeColorSizeStyle.js */ "./src/style/ShapeColorSizeStyle.js");
/* harmony import */ var _style_ShapeColorSizeStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style/ShapeColorSizeStyle_.js */ "./src/style/ShapeColorSizeStyle_.js");
/* harmony import */ var _style_StrokeStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style/StrokeStyle.js */ "./src/style/StrokeStyle.js");
/* harmony import */ var _style_JoyPlotStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style/JoyPlotStyle.js */ "./src/style/JoyPlotStyle.js");
/* harmony import */ var _style_CompositionStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style/CompositionStyle.js */ "./src/style/CompositionStyle.js");
/* harmony import */ var _style_CompositionStyle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style/CompositionStyle_.js */ "./src/style/CompositionStyle_.js");
/* harmony import */ var _style_SegmentStyle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style/SegmentStyle.js */ "./src/style/SegmentStyle.js");
/* harmony import */ var _style_TextStyle_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style/TextStyle.js */ "./src/style/TextStyle.js");
/* harmony import */ var _style_PillarStyle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style/PillarStyle.js */ "./src/style/PillarStyle.js");
/* harmony import */ var _style_SideStyle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style/SideStyle.js */ "./src/style/SideStyle.js");
/* harmony import */ var _style_ContourStyle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./style/ContourStyle.js */ "./src/style/ContourStyle.js");
/* harmony import */ var _style_SideCatStyle_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./style/SideCatStyle.js */ "./src/style/SideCatStyle.js");
/* harmony import */ var _style_DotDensityStyle_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./style/DotDensityStyle.js */ "./src/style/DotDensityStyle.js");
/* harmony import */ var _style_TanakaStyle_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./style/TanakaStyle.js */ "./src/style/TanakaStyle.js");
/* harmony import */ var _style_LegoStyle_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./style/LegoStyle.js */ "./src/style/LegoStyle.js");
/* harmony import */ var _style_SquareColorWGLStyle_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./style/SquareColorWGLStyle.js */ "./src/style/SquareColorWGLStyle.js");
/* harmony import */ var _style_SquareColorCatWGLStyle_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./style/SquareColorCatWGLStyle.js */ "./src/style/SquareColorCatWGLStyle.js");
/* harmony import */ var _style_MosaicStyle_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./style/MosaicStyle.js */ "./src/style/MosaicStyle.js");
/* harmony import */ var _style_NinjaStarStyle_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./style/NinjaStarStyle.js */ "./src/style/NinjaStarStyle.js");
/* harmony import */ var _style_TimeSeriesStyle_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./style/TimeSeriesStyle.js */ "./src/style/TimeSeriesStyle.js");
/* harmony import */ var _style_IsoFenceStyle_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./style/IsoFenceStyle.js */ "./src/style/IsoFenceStyle.js");
/* harmony import */ var _BackgroundLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./BackgroundLayer.js */ "./src/BackgroundLayer.js");
/* harmony import */ var _BackgroundLayerWMS_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./BackgroundLayerWMS.js */ "./src/BackgroundLayerWMS.js");
/* harmony import */ var _LabelLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./LabelLayer.js */ "./src/LabelLayer.js");
/* harmony import */ var _LineLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./LineLayer.js */ "./src/LineLayer.js");
/* harmony import */ var _legend_ColorLegend_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./legend/ColorLegend.js */ "./src/legend/ColorLegend.js");
/* harmony import */ var _legend_ColorDiscreteLegend_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./legend/ColorDiscreteLegend.js */ "./src/legend/ColorDiscreteLegend.js");
/* harmony import */ var _legend_ColorCategoryLegend_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./legend/ColorCategoryLegend.js */ "./src/legend/ColorCategoryLegend.js");
/* harmony import */ var _legend_SizeLegend_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./legend/SizeLegend.js */ "./src/legend/SizeLegend.js");
/* harmony import */ var _legend_SegmentWidthLegend_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./legend/SegmentWidthLegend.js */ "./src/legend/SegmentWidthLegend.js");
/* harmony import */ var _legend_SegmentOrientationLegend_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./legend/SegmentOrientationLegend.js */ "./src/legend/SegmentOrientationLegend.js");
/* harmony import */ var _utils_stretching_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./utils/stretching.js */ "./src/utils/stretching.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./utils/Utils.js */ "./src/utils/Utils.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/defaultLocale.js");
//@ts-check


// the application







// export dataset types




//export { GeoTIFF } from "./dataset/GeoTIFF"

// export styles






















// export additional layers





// export legends







// export { goToStraight, zoomTo } from "./utils/zoomUtils"






;
const getParameterByName = _GeoCanvas_js__WEBPACK_IMPORTED_MODULE_1__.GeoCanvas.getParameterByName

// set default d3 locale
;
(0,d3_format__WEBPACK_IMPORTED_MODULE_43__["default"])({
    decimal: '.',
    thousands: ' ',
    grouping: [3],
    currency: ['', '€'],
})

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});