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
exports.RadioWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
//import { TextWidget } from './textWidget';
var widget_1 = require("./widget");
var radioStyle = { height: 'auto' };
var RadioWidget = /** @class */ (function (_super) {
    __extends(RadioWidget, _super);
    function RadioWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = {};
        return _this;
    }
    Object.defineProperty(RadioWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    RadioWidget.prototype.setElementValue = function (value) {
        for (var i in this.inputs) {
            var input = this.inputs[i];
            input.checked = value === input.value;
        }
    };
    RadioWidget.prototype.setReadOnly = function (value) {
        this.readOnly = value;
        for (var i in this.inputs)
            this.inputs[i].readOnly = value;
    };
    RadioWidget.prototype.setDisabled = function (value) {
        this.disabled = value;
        for (var i in this.inputs)
            this.inputs[i].disabled = value;
    };
    /*
    protected onInputChange = (evt: React.ChangeEvent<any>) => {
        this.changeValue(evt.target.value, true);
    }
    */
    RadioWidget.prototype.render = function () {
        var _this = this;
        var _a = this.ui, defaultValue = _a.defaultValue, list = _a.list;
        var isRow = this.context.isRow;
        var rowKey;
        if (isRow === true) {
            rowKey = this.context.rowKey;
        }
        var cn = (0, classnames_1.default)(this.className, 'py-0');
        return (0, jsx_runtime_1.jsx)("span", __assign({ className: cn, style: radioStyle }, { children: list.map(function (v, index) {
                var value = v.value, title = v.title;
                var name = _this.name;
                if (rowKey !== undefined)
                    name += '-' + rowKey;
                return (0, jsx_runtime_1.jsxs)("label", __assign({ className: "form-radio-inline" }, { children: [(0, jsx_runtime_1.jsx)("input", { ref: function (input) { return _this.inputs[index] = input; }, type: "radio", name: name, value: value, defaultChecked: (_this.defaultValue || defaultValue) === value, onChange: _this.onInputChange }, void 0), title || value] }), index);
                //</span>
            }) }), void 0);
    };
    return RadioWidget;
}(widget_1.Widget));
exports.RadioWidget = RadioWidget;
//# sourceMappingURL=radioWidget.js.map