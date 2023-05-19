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
exports.InputInteger = exports.InputNumber = void 0;
var inputRules_1 = require("../../inputRules");
var input_1 = require("./../input");
var InputNumber = exports.InputNumber = /** @class */ (function (_super) {
    __extends(InputNumber, _super);
    function InputNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputNumber.prototype, "type", {
        get: function () { return 'number'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputNumber.prototype, "max", {
        get: function () { return this.props.max; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputNumber.prototype, "min", {
        get: function () { return this.props.min; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputNumber.prototype, "className", {
        get: function () {
            var className = this.props.className;
            if (className === null)
                return null;
            if (!className)
                return InputNumber.defaultClassName;
            return className;
        },
        enumerable: false,
        configurable: true
    });
    InputNumber.prototype.buildRules = function () {
        var _a;
        var max = (_a = this.props, _a.max), min = _a.min;
        this.rules.push(new inputRules_1.RuleNum(undefined, min, max));
    };
    InputNumber.prototype.parseValue = function () {
        return Number.parseFloat(this.input.value);
    };
    InputNumber.prototype.valueFromInput = function () {
        var v = this.parseValue();
        if (isNaN(v) === true)
            return undefined;
        return v;
    };
    InputNumber.defaultClassName = 'form-control w-8c d-inline text-right';
    return InputNumber;
}(input_1.Input));
var InputInteger = /** @class */ (function (_super) {
    __extends(InputInteger, _super);
    function InputInteger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInteger.prototype.buildRules = function () {
        var _a = this.props, max = _a.max, min = _a.min;
        this.rules.push(new inputRules_1.RuleInt(undefined, min, max));
    };
    InputInteger.prototype.parseValue = function () {
        return Number.parseInt(this.input.value);
    };
    return InputInteger;
}(InputNumber));
exports.InputInteger = InputInteger;
//# sourceMappingURL=inputNumber.js.map