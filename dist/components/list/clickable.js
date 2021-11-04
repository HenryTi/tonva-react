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
exports.Clickable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var base_1 = require("./base");
var Clickable = /** @class */ (function (_super) {
    __extends(Clickable, _super);
    function Clickable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function (item, index) {
            var _a = _this.list.props.item, className = _a.className, key = _a.key, onClick = _a.onClick;
            return (0, jsx_runtime_1.jsx)("li", __assign({ className: (0, classnames_1.default)('va-row-clickable', className), onClick: function () { return onClick && onClick(item); } }, { children: _this.renderContent(item, index) }), key === undefined ? index : key(item));
        };
        return _this;
    }
    return Clickable;
}(base_1.ListBase));
exports.Clickable = Clickable;
//# sourceMappingURL=clickable.js.map