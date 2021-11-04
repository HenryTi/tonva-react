"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMR = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var mobx_react_1 = require("mobx-react");
var classnames_1 = __importDefault(require("classnames"));
require("../../css/va-lmr.css");
var LMR = /** @class */ (function (_super) {
    __extends(LMR, _super);
    function LMR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LMR.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, left = _a.left, children = _a.children, right = _a.right, onClick = _a.onClick;
        var l, r;
        if (left !== undefined)
            l = (0, jsx_runtime_1.jsx)("header", { children: left }, void 0);
        if (right !== undefined)
            r = (0, jsx_runtime_1.jsx)("footer", { children: right }, void 0);
        var cursor;
        if (onClick !== undefined)
            cursor = 'cursor-pointer';
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('va-lmr', className, cursor), style: style, onClick: onClick }, { children: [l, (0, jsx_runtime_1.jsx)("div", { children: children }, void 0), r] }), void 0);
    };
    LMR = __decorate([
        mobx_react_1.observer
    ], LMR);
    return LMR;
}(React.Component));
exports.LMR = LMR;
//# sourceMappingURL=LMR.js.map