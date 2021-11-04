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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var TextAreaWidget = /** @class */ (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputChange = function (evt) {
            _this.setValue(evt.currentTarget.value);
        };
        _this.onBlur = function (evt) {
            _this.onInputChange(evt);
            _this.checkRules();
            _this.context.checkContextRules();
        };
        _this.onFocus = function (evt) {
            _this.clearError();
            _this.context.removeErrorWidget(_this);
            _this.context.clearErrors();
        };
        return _this;
    }
    Object.defineProperty(TextAreaWidget.prototype, "itemSchema", {
        get: function () { return this._itemSchema; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TextAreaWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    TextAreaWidget.prototype.setElementValue = function (value) { this.input.value = value; };
    TextAreaWidget.prototype.setReadOnly = function (value) { this.input.readOnly = this.readOnly = value; };
    TextAreaWidget.prototype.setDisabled = function (value) { this.input.disabled = this.disabled = value; };
    TextAreaWidget.prototype.render = function () {
        var _this = this;
        var renderTemplet = this.renderTemplet();
        if (renderTemplet !== undefined)
            return renderTemplet;
        var cn = {};
        if (this.hasError === true) {
            cn['is-invalid'] = true;
        }
        else {
            cn['required-item'] = this.itemSchema.required === true;
        }
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("textarea", { ref: function (input) { return _this.input = input; }, onBlur: this.onBlur, onFocus: this.onFocus, className: (0, classnames_1.default)(this.className, cn), rows: this.ui && this.ui.rows, maxLength: this.itemSchema.maxLength, defaultValue: this.defaultValue, onChange: this.onInputChange }, void 0), this.renderErrors()] }, void 0);
    };
    return TextAreaWidget;
}(widget_1.Widget));
exports.TextAreaWidget = TextAreaWidget;
//# sourceMappingURL=textareaWidget.js.map