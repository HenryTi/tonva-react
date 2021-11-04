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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var react_1 = __importStar(require("react"));
var inputRules_1 = require("../inputRules");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.rules = [];
        _this.value = null;
        _this.ruleMessage = null;
        (0, mobx_1.makeObservable)(_this, {
            ruleMessage: mobx_1.observable,
            onChange: mobx_1.action,
            onFocus: mobx_1.action,
            onBlur: mobx_1.action,
        });
        _this.init();
        return _this;
    }
    Object.defineProperty(Input.prototype, "placeholder", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "max", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "min", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "maxLength", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "className", {
        get: function () { return this.props.className; },
        enumerable: false,
        configurable: true
    });
    Input.prototype.init = function () {
        var _a = this.props, required = _a.required, rules = _a.rules, requiredFlagElement = _a.requiredFlagElement, defaultValue = _a.defaultValue;
        if (required === true) {
            if (requiredFlagElement === undefined)
                requiredFlagElement = Input.defaultRequiredFlagElement;
            this.requiredFlagElement = requiredFlagElement;
            this.rules.push(new inputRules_1.RuleRequired());
        }
        this.buildRules();
        if (rules) {
            for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
                var rule = rules_1[_i];
                this.rules.push(new inputRules_1.RuleCustom(rule));
            }
            ;
        }
        this.value = defaultValue;
    };
    Input.prototype.buildRules = function () {
    };
    Input.prototype.getValue = function () { return this.value; };
    Input.prototype.setValue = function (v) {
        var p = this.value;
        this.value = v;
        this.checkRules();
        var onValueChange = this.props.onValueChange;
        if (!onValueChange)
            return;
        if (v !== p)
            onValueChange(v, p, this.ruleMessage);
    };
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, defaultValue = _a.defaultValue, disabled = _a.disabled, required = _a.required;
        var content = (0, jsx_runtime_1.jsx)("input", { ref: function (inp) { return _this.input = inp; }, className: this.className, type: this.type, placeholder: this.placeholder, defaultValue: defaultValue, defaultChecked: defaultValue, maxLength: this.maxLength, max: this.max, min: this.min, disabled: disabled, onChange: function () { return _this.onChange(); }, onBlur: function () { return _this.onBlur(); }, onFocus: function () { return _this.onFocus(); } }, void 0);
        if (this.rules.length === 0)
            return content;
        var _b = this.props, containerClassName = _b.containerClassName, ruleClassName = _b.ruleClassName;
        return (0, jsx_runtime_1.jsxs)("span", __assign({ className: containerClassName }, { children: [required === true && this.requiredFlagElement, content, react_1.default.createElement((0, mobx_react_1.observer)(function () {
                    return (0, jsx_runtime_1.jsx)("span", __assign({ className: ruleClassName !== null && ruleClassName !== void 0 ? ruleClassName : Input.defaultRuleClassName }, { children: _this.ruleMessage }), void 0);
                }))] }), void 0);
    };
    Input.prototype.onChange = function () {
        var preValue = this.value;
        var value = this.value = this.valueFromInput();
        this.checkRules();
        var onValueChange = this.props.onValueChange;
        if (!onValueChange)
            return;
        if (value !== preValue)
            onValueChange(value, preValue, this.ruleMessage);
    };
    Input.prototype.valueFromInput = function () { return; };
    Input.prototype.checkRules = function () {
        var defy = [];
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            rule.check(defy, this.value);
        }
        if (defy.length === 0) {
            this.ruleMessage = null;
        }
        else {
            this.ruleMessage = defy[0];
        }
    };
    Input.prototype.onBlur = function () {
        this.checkRules();
    };
    Input.prototype.onFocus = function () {
        this.ruleMessage = null;
    };
    Input.defaultRequiredFlagElement = (0, jsx_runtime_1.jsx)("span", __assign({ className: "mx-2 text-danger" }, { children: "*" }), void 0);
    Input.defaultRuleClassName = ' mx-2 text-danger ';
    return Input;
}(react_1.Component));
exports.Input = Input;
//# sourceMappingURL=input.js.map