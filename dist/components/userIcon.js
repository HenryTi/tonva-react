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
exports.useUser = exports.UserView = exports.UserIcon = exports.UserCache = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var nav_1 = require("./nav");
var mobx_react_1 = require("mobx-react");
var mobx_1 = require("mobx");
var net_1 = require("../net");
var UserCache = /** @class */ (function () {
    function UserCache(loader) {
        this.map = (0, mobx_1.observable)(new Map());
        if (loader === undefined)
            loader = function (userId) { return net_1.userApi.user(userId); };
        this.loader = loader;
    }
    UserCache.prototype.use = function (id, onLoaded) {
        if (!id)
            return;
        if (typeof id === 'object')
            id = id.id;
        if (!id)
            return;
        this.onLoaded = onLoaded;
        id = Number(id);
        var ret = this.map.get(id);
        if (ret === undefined) {
            this.map.set(id, id);
        }
    };
    UserCache.prototype.getValue = function (id) {
        var _this = this;
        if (!id)
            return;
        switch (typeof (id)) {
            case 'object':
                id = id.id;
                if (!id)
                    return;
                break;
        }
        var ret = this.map.get(id);
        if (!ret)
            return;
        switch (typeof (ret)) {
            default:
                return ret;
            case 'number':
                if (ret < 0)
                    return id;
                this.map.set(id, -id);
                this.loader(id).then(function (v) {
                    if (!v)
                        v = null;
                    _this.map.set(id, v);
                    if (_this.onLoaded)
                        _this.onLoaded(v);
                }).catch(function (reason) {
                    console.error(reason);
                });
                return id;
        }
    };
    return UserCache;
}());
exports.UserCache = UserCache;
var userCache = new UserCache(undefined);
exports.UserIcon = (0, mobx_react_1.observer)(function (props) {
    var className = props.className, style = props.style, id = props.id, altImage = props.altImage, noneImage = props.noneImage;
    var user = userCache.getValue(id);
    switch (typeof user) {
        case 'undefined':
        case 'number':
            return (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(className, 'image-none'), style: style }, { children: noneImage || (0, jsx_runtime_1.jsx)("i", { className: "fa fa-file-o" }, void 0) }), void 0);
    }
    var icon = user.icon;
    if (!icon) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(className, 'image-none'), style: style }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa fa-file-o" }, void 0) }), void 0);
    }
    if (icon.startsWith(':') === true) {
        icon = nav_1.nav.resUrl + icon.substr(1);
    }
    return (0, jsx_runtime_1.jsx)("img", { src: icon, className: className, alt: "img", style: style, onError: function (evt) {
            if (altImage)
                evt.currentTarget.src = altImage;
            else
                evt.currentTarget.src = 'https://tv.jkchemical.com/imgs/0001.png';
        } }, void 0);
});
exports.UserView = (0, mobx_react_1.observer)(function (props) {
    var idProp = props.id, user = props.user, render = props.render, onLoaded = props.onLoaded;
    if (user === null)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "null" }, void 0);
    switch (typeof user) {
        case 'undefined':
            user = userCache.getValue(idProp);
            break;
        case 'object':
            var /*obj, */ id = user.id;
            //if (typeof obj !== 'object') {
            useUser(id, onLoaded);
            user = userCache.getValue(id);
            //}
            break;
        case 'number':
            useUser(user, onLoaded);
            user = userCache.getValue(user);
            break;
        case 'string':
            useUser(Number(user), onLoaded);
            user = userCache.getValue(Number(user));
            break;
        default:
            user = undefined;
            break;
    }
    switch (typeof user) {
        case 'undefined':
        case 'number':
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: user }, void 0);
    }
    return render(user);
});
function useUser(id, onLoaded) {
    if (!id)
        return;
    if (typeof (id) === 'object') {
        id = id.id;
    }
    userCache.use(id, onLoaded);
}
exports.useUser = useUser;
//# sourceMappingURL=userIcon.js.map