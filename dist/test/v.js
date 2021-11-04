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
exports.VTestMobx = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var VTestMobx = /** @class */ (function () {
    function VTestMobx() {
        var _this = this;
        this.map = new Map();
        this.mapAdd = function () {
            var v = _this.map.get(1);
            if (!v) {
                v = 1;
            }
            else {
                v = { v: v };
            }
            _this.map.set(1, v);
        };
        (0, mobx_1.makeObservable)(this, {
            map: mobx_1.observable.shallow,
            mapAdd: mobx_1.action,
        });
    }
    VTestMobx.prototype.render = function () {
        var _this = this;
        var VTest = (0, mobx_react_1.observer)(function () { return (0, jsx_runtime_1.jsxs)("div", { children: ["test: ", JSON.stringify(_this.map.get(1))] }, void 0); });
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(VTest, {}, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: this.mapAdd }, { children: "click" }), void 0)] }, void 0);
    };
    return VTestMobx;
}());
exports.VTestMobx = VTestMobx;
//# sourceMappingURL=v.js.map