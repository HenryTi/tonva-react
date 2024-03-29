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
exports.A = exports.Ax = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var nav_1 = require("../nav");
// 如果是web方式，用webNav方式route网页
// 如果是app方式，用click方式压栈页面
var Ax = function (axProps) {
    var href = axProps.href, children = axProps.children, className = axProps.className, onClick = axProps.onClick;
    if (nav_1.nav.isWebNav === true) {
        var aClassName = axProps.aClassName;
        if (!href)
            return (0, jsx_runtime_1.jsx)("span", __assign({ className: "text-danger" }, { children: "Error: href not defined in Ax" }));
        var onAxClick = function (evt) {
            evt.preventDefault();
            var ret;
            if (onClick) {
                ret = onClick(evt);
            }
            else {
                nav_1.nav.navigate(href);
                ret = false;
            }
            return ret;
        };
        return (0, jsx_runtime_1.jsx)("a", __assign({}, axProps, { className: (0, classnames_1.default)(className, aClassName), onClick: onAxClick }, { children: children }));
    }
    else {
        var naClassName = axProps.naClassName;
        if (!onClick) {
            onClick = function () {
                if (nav_1.nav.openSysPage(href) === false) {
                    nav_1.nav.navigate(href);
                }
                ;
                return false;
            };
        }
        return (0, jsx_runtime_1.jsx)("span", __assign({ className: (0, classnames_1.default)(className, 'cursor-pointer', naClassName), onClick: onClick }, { children: children }));
    }
};
exports.Ax = Ax;
// 同普通的a tag
// 会自动处理href，处理生产版跟测试版之间的不同
var A = function (props) {
    var children = props.children;
    if (nav_1.nav.isWebNav === false) {
        return (0, jsx_runtime_1.jsx)("a", __assign({}, props, { children: children }));
    }
    var href = props.href;
    //if (nav.testing === true) href += '#test';
    var onClick = function (evt) {
        evt.preventDefault();
        nav_1.nav.navigate(href);
        return false;
    };
    return (0, jsx_runtime_1.jsx)("a", __assign({}, props, { href: href, onClick: onClick }, { children: children }));
};
exports.A = A;
//# sourceMappingURL=index.js.map