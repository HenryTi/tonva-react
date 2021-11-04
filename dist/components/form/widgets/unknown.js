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
exports.Unknown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Unknown = function (dataType, uiType, dataTypes) {
    return (0, jsx_runtime_1.jsxs)("span", __assign({ className: "text-danger" }, { children: ["!!data type ", dataType, " only support ", (dataTypes || []).join(', '), ", can't use ui ", uiType, "!!"] }), void 0);
};
exports.Unknown = Unknown;
//# sourceMappingURL=unknown.js.map