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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCheckBox = void 0;
var input_1 = require("../input");
var InputCheckBox = /** @class */ (function (_super) {
    __extends(InputCheckBox, _super);
    function InputCheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputCheckBox.prototype, "type", {
        get: function () { return 'checkbox'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputCheckBox.prototype, "className", {
        get: function () {
            var className = this.props.className;
            if (className === null)
                return null;
            if (!className)
                return InputCheckBox.defaultClassName;
            return className;
        },
        enumerable: false,
        configurable: true
    });
    InputCheckBox.prototype.valueFromInput = function () {
        return this.input.checked;
    };
    InputCheckBox.prototype.onBlur = function () { };
    InputCheckBox.prototype.onFocus = function () { };
    InputCheckBox.prototype.setValue = function (v) {
        _super.prototype.setValue.call(this, v);
        this.input.checked = v;
    };
    InputCheckBox.defaultClassName = 'form-check-input p-2';
    return InputCheckBox;
}(input_1.Input));
exports.InputCheckBox = InputCheckBox;
//# sourceMappingURL=checkBox.js.map