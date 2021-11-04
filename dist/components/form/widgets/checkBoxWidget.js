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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var CheckBoxWidget = /** @class */ (function (_super) {
    __extends(CheckBoxWidget, _super);
    function CheckBoxWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputChange = function (evt) {
            var v = evt.target.checked === true ? _this.trueValue : _this.falseValue;
            _this.setDataValue(v);
        };
        _this.onClick = function () {
            _this.context.clearErrors();
        };
        return _this;
    }
    Object.defineProperty(CheckBoxWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    CheckBoxWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.ui !== undefined) {
            var _a = this.ui, trueValue = _a.trueValue, falseValue = _a.falseValue;
            if (trueValue === undefined)
                this.trueValue = true;
            else
                this.trueValue = trueValue;
            if (falseValue === undefined)
                this.falseValue = false;
            else
                this.falseValue = falseValue;
        }
        else {
            this.trueValue = true;
            this.falseValue = false;
        }
    };
    CheckBoxWidget.prototype.setElementValue = function (value) {
        this.input.checked = value === this.trueValue;
    };
    CheckBoxWidget.prototype.setReadOnly = function (value) { this.input.readOnly = this.readOnly = value; };
    CheckBoxWidget.prototype.setDisabled = function (value) { this.input.disabled = this.disabled = value; };
    CheckBoxWidget.prototype.render = function () {
        var _this = this;
        var cn = (0, classnames_1.default)(this.className, 'form-check-inline p-0');
        var input = (0, jsx_runtime_1.jsx)("input", { ref: function (input) { return _this.input = input; }, className: 'align-self-center', type: "checkbox", defaultChecked: this.defaultValue, onChange: this.onInputChange, onClick: this.onClick }, void 0);
        if (this.context.inNode === true) {
            return (0, jsx_runtime_1.jsxs)("label", __assign({ className: cn }, { children: [input, " ", (this.ui && this.ui.label) || this.name] }), void 0);
        }
        else {
            return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn }, { children: (0, jsx_runtime_1.jsx)("label", __assign({ className: "w-100 h-100 mb-0 d-flex justify-content-center" }, { children: input }), void 0) }), void 0);
        }
    };
    return CheckBoxWidget;
}(widget_1.Widget));
exports.CheckBoxWidget = CheckBoxWidget;
//# sourceMappingURL=checkBoxWidget.js.map