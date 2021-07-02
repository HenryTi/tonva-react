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
exports.VStartError = exports.VErrorsPage = exports.VUnitSelect = exports.VUnsupportedUnit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
//import * as React from 'react';
var components_1 = require("../components");
var vm_1 = require("../vm");
//import { UQsMan } from '../uq';
/*
export class VAppMain extends VPage<CMainBase> {
    async open(param?:any) {
        this.openPage(this.appPage);
    }

    render(param?:any) {
        return this.appContent();
    }

    protected appPage = () => {
        let {caption} = this.controller;
        return <Page header={caption} logout={async()=>{appInFrame.unit = undefined}}>
            {this.appContent()}
        </Page>;
    }

    protected appContent = () => {
        let {cUqArr} = this.controller;
        let content:any;
        if (cUqArr.length === 0) {
            content = <div className="text-danger">
                <FA name="" /> 此APP没有绑定任何的UQ
            </div>;
        }
        else {
            content = cUqArr.map((v,i) => <div key={i}>{v.render()}</div>);
        }
        return <>{content}</>;
    };
}
*/
var VUnsupportedUnit = /** @class */ (function (_super) {
    __extends(VUnsupportedUnit, _super);
    function VUnsupportedUnit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = function () {
            var _a = _this.params, predefinedUnit = _a.predefinedUnit, uqsLoadErrors = _a.uqsLoadErrors;
            var user = components_1.nav.user;
            var userName = user ? user.name : '[未登录]';
            //let {appOwner, appName} = UQsMan.value;
            return jsx_runtime_1.jsx(components_1.Page, __assign({ header: "APP\u65E0\u6CD5\u8FD0\u884C", logout: true }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "m-3 text-danger container" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "form-group row" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "col-sm-3 font-weight-bold" }, { children: "\u767B\u5F55\u7528\u6237" }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "col-sm text-body" }, { children: userName }), void 0)] }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "form-group row" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "col-sm-3 font-weight-bold" }, { children: "\u9884\u8BBE\u5C0F\u53F7" }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "col-sm text-body" }, { children: predefinedUnit || jsx_runtime_1.jsx("small", __assign({ className: "" }, { children: "[\u65E0\u9884\u8BBE\u5C0F\u53F7]" }), void 0) }), void 0)] }), void 0), uqsLoadErrors && uqsLoadErrors.map(function (v) {
                            return jsx_runtime_1.jsxs("div", __assign({ className: "form-group row" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "col-sm-3 font-weight-bold" }, { children: "App" }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "col-sm text-body" }, { children: v }), void 0)] }), void 0);
                        }), jsx_runtime_1.jsxs("div", __assign({ className: "form-group row" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "col-sm-3 font-weight-bold" }, { children: ["\u5C0F\u53F7", predefinedUnit] }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "col-sm text-body" }, { children: ["\u9884\u8BBE\u5C0F\u53F7\u5B9A\u4E49\u5728 public/unit.json \u6587\u4EF6\u4E2D\u3002 \u5B9A\u4E49\u4E86\u8FD9\u4E2A\u6587\u4EF6\u7684\u7A0B\u5E8F\uFF0C\u53EA\u80FD\u7531url\u76F4\u63A5\u542F\u52A8\u3002 \u7528\u6237\u7B2C\u4E00\u6B21\u8BBF\u95EEapp\u4E4B\u540E\uFF0C\u4F1A\u7F13\u5B58\u5728localStorage\u91CC\u3002", jsx_runtime_1.jsx("br", {}, void 0), "\u5982\u679C\u8981\u5220\u53BB\u7F13\u5B58\u7684\u9884\u5B9A\u4E49Unit\uFF0Clogout\u7136\u540E\u518Dlogin\u3002"] }), void 0)] }), void 0)] }), void 0) }), void 0);
        };
        return _this;
        /*
        <div className="form-group row">
            <div className="col-sm-3 font-weight-bold">
                可能原因<FA name="exclamation-triangle" />
            </div>
            <div className="col-sm text-body">
                <ul className="p-0">
                    <li>没有小号运行 {appName}</li>
                    <li>用户 <b>{userName}</b> 没有加入任何一个运行{appName}的小号</li>
                    {
                        predefinedUnit &&
                        <li>预设小号 <b>{predefinedUnit}</b> 没有运行App {appName}</li>
                    }
                </ul>
            </div>
        </div>
        */
    }
    VUnsupportedUnit.prototype.open = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.params = params;
                this.openPage(this.page);
                return [2 /*return*/];
            });
        });
    };
    return VUnsupportedUnit;
}(vm_1.VPage));
exports.VUnsupportedUnit = VUnsupportedUnit;
var VUnitSelect = /** @class */ (function (_super) {
    __extends(VUnitSelect, _super);
    function VUnitSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRow = function (item, index) {
            var id = item.id, nick = item.nick, name = item.name;
            return jsx_runtime_1.jsx(components_1.LMR, __assign({ className: "px-3 py-2", right: 'id: ' + id }, { children: jsx_runtime_1.jsx("div", { children: nick || name }, void 0) }), void 0);
        };
        _this.onRowClick = function (appUnit) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //appInFrame.unit = appUnit.id; // 25;
                    //this.controller.setAppUnit(appUnit);
                    return [4 /*yield*/, this.controller.start()];
                    case 1:
                        //appInFrame.unit = appUnit.id; // 25;
                        //this.controller.setAppUnit(appUnit);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.page = function () {
            return jsx_runtime_1.jsx(components_1.Page, __assign({ header: "\u9009\u62E9\u5C0F\u53F7", logout: true }, { children: jsx_runtime_1.jsx("div", { children: "this.controller.appUnits appUnits removed" }, void 0) }), void 0);
            // <List items={this.controller.appUnits} item={{render: this.renderRow, onClick: this.onRowClick}}/>
        };
        return _this;
    }
    VUnitSelect.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openPage(this.page);
                return [2 /*return*/];
            });
        });
    };
    return VUnitSelect;
}(vm_1.VPage));
exports.VUnitSelect = VUnitSelect;
var VErrorsPage = /** @class */ (function (_super) {
    __extends(VErrorsPage, _super);
    function VErrorsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = function (errors) {
            return jsx_runtime_1.jsx(components_1.Page, __assign({ header: "ERROR" }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "m-3" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "p-3 d-flex justify-content-center align-items-center" }, { children: jsx_runtime_1.jsx("button", __assign({ className: "btn btn-danger", onClick: components_1.nav.resetAll }, { children: "\u91CD\u542F\u7F51\u9875" }), void 0) }), void 0), jsx_runtime_1.jsx("div", { children: "Load Uqs \u53D1\u751F\u9519\u8BEF\uFF1A" }, void 0), errors.errors.map(function (r, i) { return jsx_runtime_1.jsx("div", { children: r }, i); })] }), void 0) }), void 0);
        };
        return _this;
    }
    VErrorsPage.prototype.open = function (errors) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openPage(this.page, { errors: errors });
                return [2 /*return*/];
            });
        });
    };
    return VErrorsPage;
}(vm_1.VPage));
exports.VErrorsPage = VErrorsPage;
var VStartError = /** @class */ (function (_super) {
    __extends(VStartError, _super);
    function VStartError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = function (_a) {
            var error = _a.error;
            return jsx_runtime_1.jsx(components_1.Page, __assign({ header: "App start error!" }, { children: jsx_runtime_1.jsx("pre", { children: typeof error === 'string' ? error : error.message }, void 0) }), void 0);
        };
        return _this;
    }
    VStartError.prototype.open = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openPage(this.page, { error: error });
                return [2 /*return*/];
            });
        });
    };
    return VStartError;
}(vm_1.VPage));
exports.VStartError = VStartError;
//# sourceMappingURL=vMain.js.map