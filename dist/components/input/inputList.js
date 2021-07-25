"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var react_1 = __importDefault(require("react"));
var InputList = /** @class */ (function () {
    function InputList(valuesArr, keyFromItem, createInputForm) {
        this.valuesArr = __spreadArray([], valuesArr);
        this.keyFromItem = keyFromItem;
        this.createInputForm = createInputForm;
        this.itemForms = valuesArr.map(function (item) { return createInputForm(item); });
        mobx_1.makeObservable(this, {
            itemForms: mobx_1.observable.shallow,
            valuesArr: mobx_1.observable.shallow,
            hasError: mobx_1.computed,
        });
    }
    InputList.prototype.renderItemContainer = function (itemElement) {
        return itemElement;
    };
    InputList.prototype.addItem = function (item, index) {
        var form = this.createInputForm(item);
        if (index === undefined)
            this.itemForms.push(form);
        else
            this.itemForms.splice(index, 0, form);
    };
    InputList.prototype.getValuesArr = function () {
        return this.itemForms.map(function (v) { return v.getValues(); });
    };
    InputList.prototype.render = function () {
        var _this = this;
        return react_1.default.createElement(mobx_react_1.observer(function () { return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: _this.itemForms.map(function (v) {
                var key = _this.keyFromItem(v.values);
                var element = v.render();
                return jsx_runtime_1.jsx(react_1.default.Fragment, { children: _this.renderItemContainer(element) }, key);
            }) }, void 0); }));
    };
    Object.defineProperty(InputList.prototype, "hasError", {
        get: function () {
            for (var _i = 0, _a = this.itemForms; _i < _a.length; _i++) {
                var itemForm = _a[_i];
                if (itemForm.hasError === true)
                    return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    InputList.prototype.setEachValue = function (name, value) {
        this.itemForms.forEach(function (v) { return v.setValue(name, value); });
    };
    return InputList;
}());
exports.InputList = InputList;
//# sourceMappingURL=inputList.js.map