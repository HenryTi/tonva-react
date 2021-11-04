"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoHideTips = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var mobx_react_1 = require("mobx-react");
function autoHideTips(tips, templet, timeout) {
    var timer;
    return react_1.default.createElement((0, mobx_react_1.observer)(function () {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
        var t = tips.get();
        if (!t)
            return null;
        if (timeout === undefined)
            timeout = 3000;
        if (timeout > 0) {
            timer = setTimeout(function () {
                tips.set(null);
            }, timeout);
        }
        switch (typeof templet) {
            case 'undefined': return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: t }, void 0);
            case 'function': return templet(t);
            case 'string': return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: templet }, void 0);
            default: return templet;
        }
    }));
}
exports.autoHideTips = autoHideTips;
;
//# sourceMappingURL=autoHideTips.js.map