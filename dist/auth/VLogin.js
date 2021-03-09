"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        while (_) try {
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
exports.VLogin = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("../components");
var tools_1 = require("./tools");
var vm_1 = require("../vm");
var schema = [
    { name: 'username', type: 'string', required: true, maxLength: 100 },
    { name: 'password', type: 'string', required: true, maxLength: 100 },
    { name: 'login', type: 'submit' },
];
var VLogin = /** @class */ (function (_super) {
    __extends(VLogin, _super);
    function VLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiSchema = {
            items: {
                username: { placeholder: '手机/邮箱/用户名', label: '登录账号' },
                password: { widget: 'password', placeholder: '密码', label: '密码' },
                login: { widget: 'button', className: 'btn btn-primary btn-block mt-3', label: '登录' },
            }
        };
        _this.onSubmit = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            var values, un, pwd, ret, sender, type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = context.form.data;
                        un = values['username'];
                        pwd = values['password'];
                        if (pwd === undefined) {
                            return [2 /*return*/, 'something wrong, pwd is undefined'];
                        }
                        return [4 /*yield*/, this.onLogin(un, pwd)];
                    case 1:
                        ret = _a.sent();
                        if (ret === true)
                            return [2 /*return*/];
                        sender = tools_1.getSender(un);
                        type = sender !== undefined ? sender.caption : '用户名';
                        return [2 /*return*/, type + '或密码错！'];
                }
            });
        }); };
        _this.onEnter = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name === 'password')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onSubmit('login', context)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    VLogin.prototype.init = function (_a) {
        var onLogin = _a.onLogin, withBack = _a.withBack;
        this.onLogin = onLogin;
        this.withBack = withBack;
    };
    VLogin.prototype.header = function () {
        if (this.withBack === true) {
            return '登录';
        }
        return false;
    };
    VLogin.prototype.footer = function () {
        return null;
        /*
        return <div className="d-block">
            <div className='text-center'>
                <Ax href="/register" className="btn btn-link" style={{margin:'0px auto'}}>
                    注册账号
                </Ax>
            </div>
            {nav.privacyEntry()}
        </div>;
        */
    };
    VLogin.prototype.content = function () {
        return jsx_runtime_1.jsxs("div", __assign({ className: "d-flex p-5 flex-column justify-content-center align-items-center" }, { children: [jsx_runtime_1.jsx("div", { className: "flex-fill" }, void 0),
                jsx_runtime_1.jsxs("div", __assign({ className: "w-20c" }, { children: [tools_1.tonvaTop(), jsx_runtime_1.jsx("div", { className: "h-2c" }, void 0),
                        jsx_runtime_1.jsx(components_1.Form, { schema: schema, uiSchema: this.uiSchema, onButtonClick: this.onSubmit, onEnter: this.onEnter, requiredFlag: false }, void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "text-center" }, { children: [jsx_runtime_1.jsx(components_1.Ax, __assign({ className: "btn btn-link btn-block mr-3", href: "/forget" }, { children: "\u5FD8\u8BB0\u5BC6\u7801" }), void 0),
                                jsx_runtime_1.jsx(components_1.Ax, __assign({ href: "/register", className: "btn btn-link", style: { margin: '0px auto' } }, { children: "\u6CE8\u518C\u8D26\u53F7" }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("div", { className: "flex-fill" }, void 0),
                jsx_runtime_1.jsx("div", { className: "flex-fill" }, void 0)] }), void 0);
    };
    return VLogin;
}(vm_1.VPage));
exports.VLogin = VLogin;
//# sourceMappingURL=VLogin.js.map