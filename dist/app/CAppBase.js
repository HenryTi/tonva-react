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
exports.CAppBase = void 0;
var components_1 = require("../components");
var res_1 = require("../res");
var vm_1 = require("../vm");
var uq_1 = require("../uq");
var net_1 = require("../net");
var vMain_1 = require("./vMain");
var tonva_core_1 = require("tonva-core");
var CAppBase = /** @class */ (function (_super) {
    __extends(CAppBase, _super);
    function CAppBase(config) {
        var _this = _super.call(this) || this;
        _this.uqsUser = '';
        _this.appConfig = config || components_1.nav.navSettings;
        if (_this.appConfig) {
            var _a = _this.appConfig, app = _a.app, uqs = _a.uqs;
            if (app === undefined && uqs === undefined) {
                throw new Error('app or uqs must be defined in AppConfig');
            }
        }
        _this.tryCode = new tonva_core_1.TryCode();
        _this.tryCode.hello();
        return _this;
    }
    Object.defineProperty(CAppBase.prototype, "uqs", {
        get: function () { return this._uqs; },
        enumerable: false,
        configurable: true
    });
    CAppBase.prototype.internalT = function (str) {
        return (0, res_1.t)(str);
    };
    CAppBase.prototype.setRes = function (res) {
        (0, res_1.setGlobalRes)(res);
    };
    CAppBase.prototype.afterBuiltUQs = function (uqs) { };
    CAppBase.prototype.initUQs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, retErrors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.appConfig)
                            return [2 /*return*/];
                        user = components_1.nav.user;
                        if (user === this.uqsUser)
                            return [2 /*return*/];
                        this.uqsUser = user;
                        (0, net_1.logoutApis)();
                        return [4 /*yield*/, uq_1.UQsMan.build(this.appConfig)];
                    case 1:
                        retErrors = _a.sent();
                        this._uqs = uq_1.UQsMan._uqs;
                        this.afterBuiltUQs(this._uqs);
                        return [2 /*return*/, retErrors];
                }
            });
        });
    };
    CAppBase.prototype.beforeStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retErrors, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.onNavRoutes();
                        return [4 /*yield*/, this.initUQs()];
                    case 1:
                        retErrors = _a.sent();
                        if (retErrors !== undefined) {
                            this.openVPage(vMain_1.VErrorsPage, retErrors);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                    case 2:
                        err_1 = _a.sent();
                        this.openVPage(vMain_1.VStartError, err_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CAppBase.prototype.afterStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                components_1.nav.resolveRoute();
                components_1.nav.onChangeLogin = function (user) { return _this.onChangeLogin(user); };
                this.onChangeLogin(this.user);
                return [2 /*return*/];
            });
        });
    };
    CAppBase.prototype.userFromId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, net_1.centerApi.userFromId(userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CAppBase.prototype.on = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return components_1.nav.on(args[0], args[1], args[2]);
    };
    CAppBase.prototype.onNavRoutes = function () { return; };
    CAppBase.prototype.getUqRoles = function (uqName) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userRoles, uq, roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = components_1.nav.user;
                        if (!user)
                            return [2 /*return*/, null];
                        userRoles = components_1.nav.user.roles;
                        uq = uqName.toLowerCase();
                        if (userRoles) {
                            roles = userRoles[uq];
                        }
                        if (roles)
                            return [2 /*return*/, roles];
                        return [4 /*yield*/, uq_1.UQsMan.getUqUserRoles(uq)];
                    case 1:
                        roles = _a.sent();
                        if (!roles)
                            roles = null;
                        components_1.nav.setUqRoles(uq, roles);
                        return [2 /*return*/, roles];
                }
            });
        });
    };
    CAppBase.prototype.isAdmin = function (roles) {
        return this.isRole(roles, '$');
    };
    CAppBase.prototype.isRole = function (roles, role) {
        if (!roles)
            return false;
        role = role.toLowerCase();
        return roles.indexOf(role) >= 0;
    };
    CAppBase.prototype.onChangeLogin = function (user) {
        return;
    };
    return CAppBase;
}(vm_1.Controller));
exports.CAppBase = CAppBase;
//# sourceMappingURL=CAppBase.js.map