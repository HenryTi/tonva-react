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
var input_1 = require("./input");
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
    InputCheckBox.prototype.valueFromInput = function () {
        return this.input.checked;
    };
    InputCheckBox.prototype.onBlur = function () { };
    InputCheckBox.prototype.onFocus = function () { };
    InputCheckBox.prototype.logInputID = function (suffix) { };
    return InputCheckBox;
}(input_1.Input));
exports.InputCheckBox = InputCheckBox;
/*
export function InputCheckBox(props: InputCheckBoxProps): JSX.Element {
    let input = new ClassInputCheckBox(props);
    input.init();
    return input.render();
}
*/
//# sourceMappingURL=checkBox.js.map