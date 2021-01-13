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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.PageHeader = exports.renderPageHeader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var nav_1 = require("../nav");
function renderPageHeader(props, inWebNav) {
    var _this = this;
    var onBack = function () { return __awaiter(_this, void 0, void 0, function () {
        var afterBack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nav_1.nav.back()];
                case 1:
                    _a.sent(); // 这个才会显示confirm box，在dataForm里面，如果输入了数据的话
                    afterBack = props.afterBack;
                    if (afterBack)
                        afterBack();
                    return [2 /*return*/];
            }
        });
    }); };
    var onLogoutClick = function () {
        var logout = function () { return __awaiter(_this, void 0, void 0, function () {
            var logout;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logout = props.logout;
                        if (!(typeof logout === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, logout()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, nav_1.nav.logout(undefined)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        nav_1.nav.showLogout(logout);
    };
    var b = nav_1.nav.level > 1 || window.self !== window.top;
    var back = props.back, right = props.right, center = props.center, logout = props.logout, className = props.className, ex = props.ex;
    if (inWebNav === true && !back && !right && !center)
        return;
    var vBack, debugLogout;
    if (logout !== undefined && window.self === window.top) {
        if ((typeof logout === 'boolean' && logout === true)
            || typeof logout === 'function') {
            var user = nav_1.nav.user;
            if (user !== undefined) {
                var nick = user.nick, name_1 = user.name;
                debugLogout = jsx_runtime_1.jsxs("div", __assign({ className: "d-flex align-items-center" }, { children: [jsx_runtime_1.jsx("small", __assign({ className: "text-light" }, { children: nick || name_1 }), void 0),
                        // eslint-disable-next-line
                        jsx_runtime_1.jsx("div", __assign({ className: "ml-2 py-2 px-3 cursor-pointer", role: "button", onClick: onLogoutClick }, { children: jsx_runtime_1.jsx("i", { className: "fa fa-sign-out fa-lg" }, void 0) }), void 0)] }), void 0);
            }
        }
    }
    if (b) {
        switch (props.back) {
            case 'none':
                vBack = undefined;
                break;
            default:
            case 'back':
                vBack = jsx_runtime_1.jsx("nav", __assign({ onClick: onBack }, { children: nav_1.nav.backIcon }), void 0);
                break;
            case 'close':
                vBack = jsx_runtime_1.jsx("nav", __assign({ onClick: onBack }, { children: nav_1.nav.backIcon }), void 0);
                break;
        }
    }
    if (window.self !== window.top) {
        console.log(document.location.href);
        // pop = <header onClick={this.openWindow} className="mx-1"><FA name="external-link" /></header>;
    }
    if (vBack === undefined && typeof center === 'string') {
        center = jsx_runtime_1.jsx("div", __assign({ className: "px-3" }, { children: center }), void 0);
    }
    var rightView = (right || debugLogout) && jsx_runtime_1.jsxs("aside", { children: [right, " ", debugLogout] }, void 0);
    var header = jsx_runtime_1.jsxs("header", __assign({ className: className }, { children: [jsx_runtime_1.jsxs("nav", { children: [vBack, jsx_runtime_1.jsx("div", { children: center }, void 0), rightView] }, void 0), ex] }), void 0);
    if (inWebNav === true)
        return header;
    return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("section", __assign({ className: "tv-page-header" }, { children: header }), void 0), header] }, void 0);
}
exports.renderPageHeader = renderPageHeader;
var PageHeader = /** @class */ (function (_super) {
    __extends(PageHeader, _super);
    function PageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageHeader.prototype.render = function () { return renderPageHeader(this.props); };
    return PageHeader;
}(React.Component));
exports.PageHeader = PageHeader;
//# sourceMappingURL=pageHeader.js.map