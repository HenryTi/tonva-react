"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selectable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var mobx_1 = require("mobx");
var classnames_1 = __importDefault(require("classnames"));
var base_1 = require("./base");
var uid_1 = require("../../tool/uid");
var mobx_react_1 = require("mobx-react");
var Selectable = /** @class */ (function (_super) {
    __extends(Selectable, _super);
    function Selectable(list) {
        var _this = _super.call(this, list) || this;
        _this._items = null;
        _this.inputItems = {};
        _this.buildItems = function () {
            var _a = _this.list.props, items = _a.items, isItemSelected = _a.isItemSelected, selectedItems = _a.selectedItems, compare = _a.compare;
            var itemsArray;
            if (items === undefined) {
                _this._items = undefined;
                return;
            }
            if (items === null) {
                _this._items = null;
                return;
            }
            if (Array.isArray(items) === true) {
                itemsArray = items;
            }
            else {
                itemsArray = items.items;
            }
            if (isItemSelected) {
                var retItems = itemsArray.map(function (v) {
                    return {
                        selected: isItemSelected(v),
                        item: v,
                        labelId: uid_1.uid()
                    };
                });
                _this._items = retItems;
            }
            else {
                var comp_1;
                if (compare === undefined) {
                    comp_1 = function (item, selectItem) { return item === selectItem; };
                }
                else {
                    comp_1 = compare;
                }
                var retItems = itemsArray.map(function (v) {
                    //let isObserved = isObservable(v);
                    //let obj = isObserved === true? toJS(v) : v;
                    //let obj = v;
                    var selected = selectedItems === undefined ?
                        false
                        : selectedItems.find(function (si) { return comp_1(v, si); }) !== undefined;
                    return {
                        selected: selected,
                        item: v,
                        labelId: uid_1.uid()
                    };
                });
                _this._items = retItems;
            }
        };
        _this.render = function (item, index) {
            var key = _this.list.props.item.key;
            return React.createElement(_this.row, { item: item, index: index, key: key === undefined ? index : key(item) });
        };
        _this.row = mobx_react_1.observer(function (props) {
            var item = props.item, index = props.index;
            var className = _this.list.props.item.className;
            var labelId = item.labelId, selected = item.selected, obItem = item.item;
            return jsx_runtime_1.jsx("li", __assign({ className: classnames_1.default(className) }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "d-flex align-items-center px-3" }, { children: [jsx_runtime_1.jsx("input", { ref: function (input) { if (input)
                                _this.inputItems[labelId] = input; }, className: "", type: "checkbox", value: "", id: labelId, defaultChecked: selected, onChange: function (e) {
                                _this.onSelect(item, e.target.checked);
                            } }, void 0),
                        jsx_runtime_1.jsx("label", __assign({ className: "", style: { flex: 1, marginBottom: 0 }, htmlFor: labelId }, { children: _this.renderContent(obItem, index) }), void 0)] }), void 0) }), void 0);
        });
        mobx_1.makeObservable(_this, {
            _items: mobx_1.observable
        });
        _this.buildItems();
        _this.listenArraySplice();
        return _this;
    }
    Selectable.prototype.listenArraySplice = function () {
        var _this = this;
        var items = this.list.props.items;
        if (items === undefined)
            return;
        if (items === null)
            return;
        var itemsArray;
        if (Array.isArray(items) === true) {
            itemsArray = items;
        }
        else {
            itemsArray = items.items;
        }
        if (mobx_1.isObservableArray(items) === true) {
            mobx_1.observe(itemsArray, function (change) {
                var _a;
                if (change.type === 'splice') {
                    var index = change.index, removedCount = change.removedCount, added = change.added;
                    var _added = added && added.map(function (v) {
                        return {
                            selected: false,
                            item: v,
                            labelId: uid_1.uid()
                        };
                    });
                    (_a = _this._items).splice.apply(_a, __spreadArrays([index, removedCount], _added));
                    _this.buildItems();
                }
            }, true);
        }
    };
    Object.defineProperty(Selectable.prototype, "items", {
        get: function () {
            //if (this._items === undefined) 
            //this.buildItems();
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Selectable.prototype.checkAll = function (on) {
        for (var i in this.inputItems)
            this.inputItems[i].checked = on;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.selected = on;
        }
    };
    Selectable.prototype.selectAll = function () {
        //if (this._items) this._items.forEach(v => v.selected = true);
        this.checkAll(true);
        this.list.props.item.onSelect(undefined, true, this.anySelected);
    };
    Selectable.prototype.unselectAll = function () {
        this.checkAll(false);
        this.list.props.item.onSelect(undefined, false, this.anySelected);
    };
    Object.defineProperty(Selectable.prototype, "anySelected", {
        get: function () { return this._items.some(function (v) { return v.selected; }); },
        enumerable: false,
        configurable: true
    });
    Selectable.prototype.onSelect = function (item, selected) {
        item.selected = selected;
        this.list.props.item.onSelect(item.item, selected, this.anySelected);
    };
    Object.defineProperty(Selectable.prototype, "selectedItems", {
        get: function () {
            return this._items.filter(function (v) { return v.selected === true; }).map(function (v) { return v.item; });
        },
        enumerable: false,
        configurable: true
    });
    return Selectable;
}(base_1.ListBase));
exports.Selectable = Selectable;
//# sourceMappingURL=selectable.js.map