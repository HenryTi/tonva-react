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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSender = exports.tonvaTop = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("../components");
var tool_1 = require("../tool");
var logo_svg_1 = __importDefault(require("../img/logo.svg"));
function tonvaTop() {
    return components_1.nav.loginTop((0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex align-items-center position-relative" }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "App-logo h-3c position-absolute", src: logo_svg_1.default, alt: "img" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "h3 flex-fill text-center" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "text-primary me-3" }, { children: "\u540C" }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "text-danger" }, { children: "\u82B1" }), void 0)] }), void 0)] }), void 0));
}
exports.tonvaTop = tonvaTop;
var senders = [
    { type: 'mobile', caption: '手机号', regex: tool_1.mobileRegex },
    { type: 'email', caption: '邮箱', regex: tool_1.emailRegex }
];
function getSender(un) {
    var sender = senders.find(function (v) { return v.regex.test(un) === true; });
    return sender;
}
exports.getSender = getSender;
//# sourceMappingURL=tools.js.map