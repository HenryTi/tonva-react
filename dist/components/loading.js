"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function Loading() {
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex h-100 align-items-center justify-content-center" }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa fa-spinner fa-spin fa-2x fa-fw text-info" }, void 0) }), void 0);
}
exports.Loading = Loading;
//# sourceMappingURL=loading.js.map