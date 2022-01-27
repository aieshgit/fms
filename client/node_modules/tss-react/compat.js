"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMakeAndWithStyles = exports.TssCacheProvider = exports.getTssDefaultEmotionCache = exports.GlobalStyles = exports.keyframes = exports.createWithStyles = exports.createMakeStyles = exports.useCssAndCx = void 0;
var cssAndCx_1 = require("./cssAndCx");
Object.defineProperty(exports, "useCssAndCx", { enumerable: true, get: function () { return cssAndCx_1.useCssAndCx; } });
const makeStyles_1 = require("./makeStyles");
Object.defineProperty(exports, "createMakeStyles", { enumerable: true, get: function () { return makeStyles_1.createMakeStyles; } });
const withStyles_compat_1 = require("./withStyles_compat");
Object.defineProperty(exports, "createWithStyles", { enumerable: true, get: function () { return withStyles_compat_1.createWithStyles; } });
/** Reexport from @emotion/react */
var react_1 = require("@emotion/react");
Object.defineProperty(exports, "keyframes", { enumerable: true, get: function () { return react_1.keyframes; } });
var GlobalStyles_1 = require("./GlobalStyles");
Object.defineProperty(exports, "GlobalStyles", { enumerable: true, get: function () { return GlobalStyles_1.GlobalStyles; } });
var cache_1 = require("./cache");
Object.defineProperty(exports, "getTssDefaultEmotionCache", { enumerable: true, get: function () { return cache_1.getTssDefaultEmotionCache; } });
Object.defineProperty(exports, "TssCacheProvider", { enumerable: true, get: function () { return cache_1.TssCacheProvider; } });
function createMakeAndWithStyles(params) {
    return Object.assign(Object.assign({}, (0, makeStyles_1.createMakeStyles)(params)), (0, withStyles_compat_1.createWithStyles)(params));
}
exports.createMakeAndWithStyles = createMakeAndWithStyles;
