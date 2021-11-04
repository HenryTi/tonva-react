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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var inputRules_1 = require("../../inputRules");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var Widget = /** @class */ (function () {
    function Widget(context, itemSchema, fieldProps, children) {
        var _this = this;
        this.disabled = false;
        this.errors = [];
        this.contextErrors = [];
        this.visible = null;
        this.value = null;
        this.onInputChange = function (evt) {
            _this.changeValue(evt.target.value, true);
        };
        this.container = (0, mobx_react_1.observer)(function () {
            if (_this.visible === false)
                return null;
            var _a = _this.context, form = _a.form, inNode = _a.inNode;
            if (inNode === true)
                return _this.render();
            var label = _this.label;
            if (_this.itemSchema.required === true && form.props.requiredFlag !== false) {
                if (label !== null)
                    label = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [label, "\u00A0", (0, jsx_runtime_1.jsx)("span", __assign({ className: "text-danger" }, { children: "*" }), void 0)] }, void 0);
            }
            return form.FieldContainer(label, _this.renderBody());
        });
        (0, mobx_1.makeObservable)(this, {
            errors: mobx_1.observable,
            contextErrors: mobx_1.observable,
            hasError: mobx_1.computed,
            visible: mobx_1.observable,
            value: mobx_1.observable,
            disabled: mobx_1.observable,
            isOk: mobx_1.computed,
        });
        this.context = context;
        var name = itemSchema.name;
        this.name = name;
        this._itemSchema = itemSchema;
        this.fieldProps = fieldProps;
        this.children = children;
        this._ui = context.getUiItem(name);
        if (this.ui === undefined) {
            this.readOnly = false;
            this.disabled = false;
            this.visible = true;
        }
        else {
            var _a = this.ui, readOnly = _a.readOnly, disabled = _a.disabled, visible = _a.visible;
            this.readOnly = (readOnly === true);
            this.disabled = (disabled === true);
            this.visible = !(visible === false);
        }
        this.value = this.defaultValue = context.getValue(name); //defaultValue;
        // this.init();
    }
    Object.defineProperty(Widget.prototype, "hasError", {
        get: function () { return (this.errors.length + this.contextErrors.length) > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "itemSchema", {
        get: function () { return this._itemSchema; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Widget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    Widget.prototype.init = function () {
        this.rules = [];
        if (this.itemSchema.required === true) {
            this.rules.push(new inputRules_1.RuleRequired(this.context.form.res));
        }
        this.buildRules();
        if (this.ui === undefined)
            return;
        var rules = this.ui.rules;
        if (rules === undefined)
            return;
        if (Array.isArray(rules) === false) {
            this.rules.push(new inputRules_1.RuleCustom(rules));
            return;
        }
        for (var _i = 0, _a = rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            this.rules.push(new inputRules_1.RuleCustom(rule));
        }
    };
    Widget.prototype.buildRules = function () {
    };
    Widget.prototype.checkRules = function () {
        var _a;
        var defy = [];
        for (var _i = 0, _b = this.rules; _i < _b.length; _i++) {
            var r = _b[_i];
            r.check(defy, this.value);
        }
        if (defy.length === 0) {
            this.context.removeErrorWidget(this);
        }
        else {
            this.context.addErrorWidget(this);
            (_a = this.errors).push.apply(_a, defy);
        }
    };
    Object.defineProperty(Widget.prototype, "isOk", {
        get: function () {
            return this.errors.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Widget.prototype.setError = function (err) {
        var _a;
        if (err === undefined)
            return;
        if (typeof err === 'string')
            this.errors.push(err);
        else
            (_a = this.errors).push.apply(_a, err);
    };
    Widget.prototype.setContextError = function (err) {
        var _a;
        if (err === undefined)
            return;
        if (typeof err === 'string')
            this.contextErrors.push(err);
        else
            (_a = this.contextErrors).push.apply(_a, err);
    };
    Widget.prototype.clearError = function () {
        this.errors.splice(0);
    };
    Widget.prototype.clearContextError = function () {
        this.contextErrors.splice(0);
    };
    Widget.prototype.parse = function (value) { return value; };
    Widget.prototype.setElementValue = function (value) { };
    Widget.prototype.setDataValue = function (value) {
        if (this.isChanging === true)
            return;
        this.context.initData[this.name] = this.value = this.parse(value);
    };
    Widget.prototype.setValue = function (value) {
        if (this.isChanging === true)
            return;
        this.changeValue(value, false);
    };
    Widget.prototype.getValue = function () {
        return this.context.getValue(this.name);
    };
    Widget.prototype.getReadOnly = function () { return this.readOnly; };
    Widget.prototype.getDisabled = function () { return this.disabled; };
    Widget.prototype.getVisible = function () { return this.visible; };
    Widget.prototype.setReadOnly = function (value) { this.readOnly = value; };
    Widget.prototype.setDisabled = function (value) {
        this.disabled = value;
    };
    Widget.prototype.setVisible = function (value) { this.visible = value; };
    Widget.prototype.changeValue = function (newValue, fromElement) {
        var prev = this.value;
        var onChanging;
        var onChanged;
        if (this.ui !== undefined) {
            onChanging = this.ui.onChanging;
            onChanged = this.ui.onChanged;
        }
        var allowChange = true;
        if (onChanging !== undefined) {
            this.isChanging = true;
            allowChange = onChanging(this.context, this.value, prev);
            this.isChanging = false;
        }
        if (allowChange === true) {
            this.setDataValue(newValue);
            if (fromElement !== true)
                this.setElementValue(newValue);
            if (onChanged !== undefined) {
                this.isChanging = true;
                onChanged(this.context, this.value, prev);
                this.isChanging = false;
            }
        }
    };
    Object.defineProperty(Widget.prototype, "className", {
        get: function () {
            var fieldClass;
            if (this.context.inNode === false)
                fieldClass = 'form-control';
            return (0, classnames_1.default)(fieldClass, this.context.form.FieldClass, this.ui && this.ui.className);
        },
        enumerable: false,
        configurable: true
    });
    Widget.prototype.renderBody = function () {
        var elDiscription;
        if (this.hasError === false && this.ui) {
            var _a = this.ui, discription = _a.discription, discriptionClassName = _a.discriptionClassName;
            if (discriptionClassName === undefined)
                discriptionClassName = 'small text-muted';
            elDiscription = (0, jsx_runtime_1.jsx)("span", __assign({ className: discriptionClassName }, { children: discription }), void 0);
        }
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [this.render(), elDiscription] }, void 0);
    };
    Object.defineProperty(Widget.prototype, "label", {
        get: function () {
            var label;
            if (this.ui === undefined) {
                label = this.name;
            }
            else {
                var uiLabel = this.ui.label;
                if (uiLabel === null)
                    label = null;
                else
                    label = uiLabel || this.name;
            }
            return label;
        },
        enumerable: false,
        configurable: true
    });
    Widget.prototype.renderTemplet = function () {
        if (this.children !== undefined) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: this.children }, void 0);
        }
        if (this.ui === undefined)
            return undefined;
        var Templet = this.ui.Templet;
        if (typeof Templet === 'function')
            return Templet(this.value);
        return Templet;
    };
    Widget.prototype.renderErrors = function () {
        var errorList = __spreadArray(__spreadArray([], this.errors, true), this.contextErrors, true);
        if (errorList.length === 0)
            return null;
        var inNode = this.context.inNode;
        var tag = inNode === true ? 'span' : 'div';
        return errorList.map(function (err) { return React.createElement(tag, {
            key: err,
            className: 'text-danger d-inline-block my-2 ms-3'
        }, (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa fa-exclamation-circle" }, void 0), " \u00A0", err] }, void 0)); });
    };
    return Widget;
}());
exports.Widget = Widget;
//# sourceMappingURL=widget.js.map