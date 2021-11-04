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
exports.InputForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
//import { computed, makeObservable, observable } from "mobx";
var mobx_1 = require("mobx");
var inputs_1 = require("./inputs");
var InputForm = /** @class */ (function () {
    function InputForm(values) {
        this.widgets = null;
        this.inputLists = null;
        this.values = values;
        this.widgetViews = {};
        (0, mobx_1.makeObservable)(this, {
            hasError: mobx_1.computed,
            widgetViews: mobx_1.observable.shallow,
        });
    }
    InputForm.prototype.initWidgets = function () { return; };
    InputForm.prototype.initInputLists = function () { return; };
    Object.defineProperty(InputForm.prototype, "hasError", {
        get: function () {
            for (var i in this.widgetViews) {
                var widget = this.widgetViews[i];
                if (widget === null || widget === void 0 ? void 0 : widget.ruleMessage)
                    return true;
            }
            if (!this.inputLists)
                return false;
            for (var i in this.inputLists) {
                var list = this.inputLists[i];
                if (list.hasError === true)
                    return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    InputForm.prototype.renderList = function (name) {
        if (this.inputLists === null) {
            this.inputLists = this.initInputLists();
        }
        if (this.inputLists === undefined)
            return null;
        var inputList = this.inputLists[name];
        if (inputList === undefined)
            return null;
        return inputList.render();
    };
    InputForm.prototype.renderInput = function (name) {
        if (this.widgets === null) {
            this.widgets = this.initWidgets();
        }
        if (this.widgets === undefined)
            return null;
        var widgetProps = this.widgets[name];
        if (widgetProps === undefined)
            return null;
        var widgetType = widgetProps.widgetType;
        switch (widgetType) {
            default: throw new Error('undefined widget');
            case 'boolean': return this.renderInputBoolean(name, widgetProps);
            case 'integer': return this.renderInputInteger(name, widgetProps);
            case 'number':
                return this.renderInputNumber(name, widgetProps);
                ;
        }
    };
    InputForm.prototype.renderInputBoolean = function (name, widgetProps) {
        var _this = this;
        return (0, jsx_runtime_1.jsx)(inputs_1.InputCheckBox, __assign({ ref: function (w) { return _this.widgetViews[name] = w; } }, widgetProps), void 0);
    };
    InputForm.prototype.renderInputInteger = function (name, widgetProps) {
        var _this = this;
        return (0, jsx_runtime_1.jsx)(inputs_1.InputInteger, __assign({ ref: function (w) { return _this.widgetViews[name] = w; } }, widgetProps), void 0);
    };
    InputForm.prototype.renderInputNumber = function (name, widgetProps) {
        var _this = this;
        return (0, jsx_runtime_1.jsx)(inputs_1.InputNumber, __assign({ ref: function (w) { return _this.widgetViews[name] = w; } }, widgetProps), void 0);
    };
    InputForm.prototype.getValues = function () {
        var data = __assign({}, this.values);
        for (var i in this.widgetViews) {
            data[i] = this.widgetViews[i].getValue();
        }
        if (this.inputLists) {
            for (var i in this.inputLists) {
                var list = this.inputLists[i];
                data[i] = list.getValuesArr();
            }
        }
        return data;
    };
    InputForm.prototype.setValue = function (name, v) {
        var widgetView = this.widgetViews[name];
        if (widgetView)
            widgetView.setValue(v);
        this.values[name] = v;
    };
    InputForm.prototype.getInputList = function (name) {
        var _a;
        return (_a = this.inputLists) === null || _a === void 0 ? void 0 : _a[name];
    };
    return InputForm;
}());
exports.InputForm = InputForm;
//# sourceMappingURL=inputForm.js.map