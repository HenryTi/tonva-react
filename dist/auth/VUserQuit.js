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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VUserQuit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var vm_1 = require("../vm");
var components_1 = require("../components");
var net_1 = require("../net");
var waitingTime = '一小时';
var VUserQuitBase = /** @class */ (function (_super) {
    __extends(VUserQuitBase, _super);
    function VUserQuitBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VUserQuitBase.prototype, "button1Caption", {
        get: function () { return; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VUserQuitBase.prototype, "button2Caption", {
        get: function () { return; },
        enumerable: false,
        configurable: true
    });
    VUserQuitBase.prototype.renderButton1 = function () {
        var _this = this;
        var caption = this.button1Caption;
        if (caption === null)
            return null;
        return (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-primary", onClick: function () { return _this.onClickButton1(); } }, { children: caption !== null && caption !== void 0 ? caption : '不注销' }));
    };
    VUserQuitBase.prototype.renderButton2 = function () {
        var _this = this;
        var caption = this.button2Caption;
        if (caption === null)
            return null;
        return (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-info ms-3", onClick: function () { return _this.onClickButton2(); } }, { children: caption !== null && caption !== void 0 ? caption : '确认注销' }));
    };
    VUserQuitBase.prototype.header = function () { return '注销账号'; };
    VUserQuitBase.prototype.content = function () {
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "border border-danger rounded mx-auto m-3 w-max-30c bg-white " }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "p-4 border-bottom" }, { children: this.note })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-3 text-center" }, { children: [this.renderButton1(), this.renderButton2()] }))] }));
    };
    VUserQuitBase.prototype.onClickButton1 = function () {
        this.closePage();
    };
    VUserQuitBase.prototype.onClickButton2 = function () {
    };
    return VUserQuitBase;
}(vm_1.VPage));
var VUserQuit = /** @class */ (function (_super) {
    __extends(VUserQuit, _super);
    function VUserQuit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VUserQuit.prototype, "note", {
        get: function () {
            return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u6CE8\u610F\uFF1A\u8D26\u53F7\u6CE8\u9500\u540E\uFF0C\u8D26\u53F7\u7ED1\u5B9A\u624B\u673A\u3001\u90AE\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F\u5C06\u88AB\u91CA\u653E\u3002\u8D26\u53F7\u65E0\u6CD5\u5C06\u767B\u5F55\u3002", (0, jsx_runtime_1.jsx)("br", {}), "\u8BF7\u786E\u8BA4\uFF01"] });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VUserQuit.prototype, "button2Caption", {
        get: function () { return '我已了解，仍然注销'; },
        enumerable: false,
        configurable: true
    });
    VUserQuit.prototype.onClickButton2 = function () {
        this.openVPage(VQuitConfirm);
    };
    return VUserQuit;
}(VUserQuitBase));
exports.VUserQuit = VUserQuit;
var VQuitConfirm = /** @class */ (function (_super) {
    __extends(VQuitConfirm, _super);
    function VQuitConfirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VQuitConfirm.prototype, "note", {
        get: function () {
            return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u8D26\u53F7\u6CE8\u9500\u540E\uFF0C\u5982\u679C\u5728", waitingTime, "\u5185\u5BB9\u91CD\u65B0\u767B\u5F55\u8D26\u53F7\uFF0C\u8D26\u53F7\u81EA\u52A8\u6062\u590D\u3002", waitingTime, "\u4E4B\u540E\uFF0C\u8D26\u53F7\u7ED1\u5B9A\u624B\u673A\u3001\u90AE\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F\u5C06\u88AB\u91CA\u653E\u3002\u8D26\u53F7\u65E0\u6CD5\u5C06\u767B\u5F55\u3002", (0, jsx_runtime_1.jsx)("br", {}), "\u8BF7\u518D\u6B21\u786E\u8BA4\uFF01"] });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VQuitConfirm.prototype, "button2Caption", {
        get: function () { return '确认注销'; },
        enumerable: false,
        configurable: true
    });
    VQuitConfirm.prototype.onClickButton1 = function () {
        this.closePage(2);
    };
    VQuitConfirm.prototype.onClickButton2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var centerAppApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        centerAppApi = new net_1.CenterAppApi('tv/', undefined);
                        return [4 /*yield*/, centerAppApi.userQuit()];
                    case 1:
                        _a.sent();
                        this.openVPage(VQuitDone);
                        return [2 /*return*/];
                }
            });
        });
    };
    return VQuitConfirm;
}(VUserQuitBase));
var VQuitDone = /** @class */ (function (_super) {
    __extends(VQuitDone, _super);
    function VQuitDone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VQuitDone.prototype.header = function () { return '注销已账号'; };
    Object.defineProperty(VQuitDone.prototype, "back", {
        get: function () { return 'none'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VQuitDone.prototype, "note", {
        get: function () {
            return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u8D26\u53F7\u5C06\u5728", waitingTime, "\u540E\u5F7B\u5E95\u6CE8\u9500\u3002", (0, jsx_runtime_1.jsx)("br", {}), "\u5982\u679C\u5728", waitingTime, "\u5185\u5BB9\u91CD\u65B0\u767B\u5F55\u8D26\u53F7\uFF0C\u6CE8\u9500\u64CD\u4F5C\u81EA\u52A8\u53D6\u6D88\u3002", waitingTime, "\u4E4B\u540E\uFF0C\u8D26\u53F7\u7ED1\u5B9A\u624B\u673A\u3001\u90AE\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F\u5C06\u88AB\u91CA\u653E\u3002\u8D26\u53F7\u65E0\u6CD5\u5C06\u767B\u5F55\u3002"] });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VQuitDone.prototype, "button1Caption", {
        get: function () { return '退出'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VQuitDone.prototype, "button2Caption", {
        get: function () { return null; },
        enumerable: false,
        configurable: true
    });
    VQuitDone.prototype.onClickButton1 = function () {
        components_1.nav.logout();
    };
    return VQuitDone;
}(VUserQuitBase));
//# sourceMappingURL=VUserQuit.js.map