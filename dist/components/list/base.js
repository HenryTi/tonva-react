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
exports.ListBase = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var ListBase = /** @class */ (function () {
    function ListBase(list) {
        this.list = list;
        (0, mobx_1.makeObservable)(this, {
            loading: mobx_1.computed,
        });
    }
    Object.defineProperty(ListBase.prototype, "isPaged", {
        get: function () {
            var items = this.list.props.items;
            return (items !== null && items !== undefined && Array.isArray(items) === false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListBase.prototype, "items", {
        get: function () {
            var items = this.list.props.items;
            if (items === null)
                return null;
            if (items === undefined)
                return undefined;
            if (Array.isArray(items) === true)
                return items;
            else
                return items.items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListBase.prototype, "loading", {
        get: function () {
            var items = this.list.props.items;
            if (items === null)
                return false;
            if (items === undefined)
                return true;
            var pageItems = items;
            if (pageItems.items === undefined)
                return false;
            return pageItems.loading;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListBase.prototype, "selectedItems", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    //updateProps(nextProps:any) {}
    ListBase.prototype.dispose = function () { };
    ;
    ListBase.prototype.renderContent = function (item, index) {
        var render = this.list.props.item.render;
        if (render === undefined)
            return (0, jsx_runtime_1.jsx)("div", __assign({ className: "px-3 py-2" }, { children: JSON.stringify(item) }), void 0);
        return render(item, index);
    };
    return ListBase;
}());
exports.ListBase = ListBase;
//# sourceMappingURL=base.js.map