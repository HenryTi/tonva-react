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
exports.SelectWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var mobx_1 = require("mobx");
var widget_1 = require("./widget");
var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
    function SelectWidget(context, itemSchema, fieldProps, children) {
        var _this = _super.call(this, context, itemSchema, fieldProps, children) || this;
        _this.readOnly = false;
        _this.onInputChange = function (evt) {
            _this.setDataValue(evt.target.value);
        };
        (0, mobx_1.makeObservable)(_this, {
            readOnly: mobx_1.observable,
        });
        return _this;
    }
    Object.defineProperty(SelectWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    SelectWidget.prototype.setElementValue = function (value) { this.select.value = value; };
    SelectWidget.prototype.setReadOnly = function (value) { this.select.disabled = this.readOnly = !value; };
    SelectWidget.prototype.setDisabled = function (value) { this.select.disabled = this.disabled = value; };
    SelectWidget.prototype.render = function () {
        var _this = this;
        if (this.readOnly === true) {
            var option = this.ui.list.find(function (v) { return v.value === _this.value; });
            var title = (option === undefined) ? '(???)' : option.title;
            return (0, jsx_runtime_1.jsx)("span", __assign({ className: "form-control w-min-6c" }, { children: title }), void 0);
        }
        return (0, jsx_runtime_1.jsx)("select", __assign({ ref: function (select) { return _this.select = select; }, className: (0, classnames_1.default)(this.className, 'form-control'), defaultValue: this.defaultValue, onChange: this.onInputChange }, { children: this.ui.list.map(function (v, index) {
                var title = v.title, value = v.value;
                var cn;
                //if (value === undefined || value === null) cn = 'text-light small';
                //else cn = 'text-danger';
                return (0, jsx_runtime_1.jsx)("option", __assign({ className: cn, value: value }, { children: title || value }), index);
            }) }), void 0);
    };
    return SelectWidget;
}(widget_1.Widget));
exports.SelectWidget = SelectWidget;
//# sourceMappingURL=selectWidget.js.map