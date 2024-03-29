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
exports.UQsMan = void 0;
var tool_1 = require("../tool");
var net_1 = require("../net");
var uqMan_1 = require("./uqMan");
var components_1 = require("../components");
var UQsMan = exports.UQsMan = /** @class */ (function () {
    function UQsMan(tvs) {
        this.uqMans = [];
        this.tvs = tvs || {};
        this.buildTVs();
        this.uqMans = [];
        this.collection = {};
    }
    UQsMan.build = function (appConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var app, uqs, tvs, version, retErrors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app = appConfig.app, uqs = appConfig.uqs, tvs = appConfig.tvs, version = appConfig.version;
                        if (!app) return [3 /*break*/, 2];
                        return [4 /*yield*/, UQsMan.loadApp(appConfig)];
                    case 1:
                        retErrors = _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!uqs) return [3 /*break*/, 4];
                        return [4 /*yield*/, UQsMan.loadUqs(uqs, version, tvs)];
                    case 3:
                        retErrors = _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error('either uqs or app must be defined in AppConfig');
                    case 5: return [2 /*return*/, retErrors];
                }
            });
        });
    };
    UQsMan.buildUQs = function (uqsConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var uqs, tvs, version, retErrors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uqs = uqsConfig.uqs, tvs = uqsConfig.tvs, version = uqsConfig.version;
                        if (!uqs) return [3 /*break*/, 2];
                        UQsMan.isBuildingUQ = true;
                        return [4 /*yield*/, UQsMan.loadUqs(uqs, version, tvs)];
                    case 1:
                        retErrors = _a.sent();
                        return [3 /*break*/, 3];
                    case 2: throw new Error('either uqs or app must be defined in AppConfig');
                    case 3: return [2 /*return*/, retErrors];
                }
            });
        });
    };
    // 返回 errors, 每个uq一行
    UQsMan.loadApp = function (appConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var app, uqConfigs, tvs, version, name, dev, uqsMan, appOwner, appName, localData, uqAppData, data, _i, _a, uq, id, uqs;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        app = appConfig.app, uqConfigs = appConfig.uqs, tvs = appConfig.tvs, version = appConfig.version;
                        name = app.name, dev = app.dev;
                        uqsMan = UQsMan.value = new UQsManApp("".concat(dev.name, "/").concat(name), tvs);
                        appOwner = uqsMan.appOwner, appName = uqsMan.appName;
                        localData = uqsMan.localData;
                        uqAppData = localData.get();
                        if (!(!uqAppData || uqAppData.version !== version)) return [3 /*break*/, 4];
                        return [4 /*yield*/, loadAppUqs(appOwner, appName)];
                    case 1:
                        uqAppData = _c.sent();
                        if (!uqAppData.id) {
                            return [2 /*return*/, [
                                    "".concat(appOwner, "/").concat(appName, "\u4E0D\u5B58\u5728\u3002\u8BF7\u4ED4\u7EC6\u68C0\u67E5app\u5168\u540D\u3002")
                                ]];
                        }
                        uqAppData.version = version;
                        if (!uqConfigs) return [3 /*break*/, 3];
                        return [4 /*yield*/, loadUqs(uqConfigs)];
                    case 2:
                        data = _c.sent();
                        (_b = uqAppData.uqs).push.apply(_b, data);
                        _c.label = 3;
                    case 3:
                        localData.set(uqAppData);
                        // 
                        for (_i = 0, _a = uqAppData.uqs; _i < _a.length; _i++) {
                            uq = _a[_i];
                            uq.newVersion = true;
                        }
                        _c.label = 4;
                    case 4:
                        id = uqAppData.id, uqs = uqAppData.uqs;
                        uqsMan.id = id;
                        return [4 /*yield*/, uqsMan.buildUqs(uqs, version, uqConfigs)];
                    case 5: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    // 返回 errors, 每个uq一行
    UQsMan.loadUqs = function (uqConfigs, version, tvs) {
        return __awaiter(this, void 0, void 0, function () {
            var uqsMan, uqs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uqsMan = UQsMan.value = new UQsMan(tvs);
                        return [4 /*yield*/, loadUqs(uqConfigs)];
                    case 1:
                        uqs = _a.sent();
                        return [4 /*yield*/, uqsMan.buildUqs(uqs, version, uqConfigs)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UQsMan.prototype.buildUqs = function (uqDataArr, version, uqConfigs) {
        return __awaiter(this, void 0, void 0, function () {
            var localMap, localCacheVersion, cacheVersion, _i, _a, uqMan, retErrors, _b, uqConfigs_1, uqConfig, dev, name_1, alias, owner, ownerAlias, uqLower, uq;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.init(uqDataArr)];
                    case 1:
                        _c.sent();
                        localMap = tool_1.env.localDb.map('$app');
                        localCacheVersion = localMap.child('version');
                        cacheVersion = localCacheVersion.get();
                        if (version !== cacheVersion) {
                            for (_i = 0, _a = this.uqMans; _i < _a.length; _i++) {
                                uqMan = _a[_i];
                                uqMan.localMap.removeAll();
                            }
                            localCacheVersion.set(version);
                        }
                        return [4 /*yield*/, this.load()];
                    case 2:
                        retErrors = _c.sent();
                        if (retErrors.length > 0)
                            return [2 /*return*/, retErrors];
                        if (UQsMan.isBuildingUQ === false) {
                            this.setTuidImportsLocal();
                        }
                        if (retErrors.length > 0)
                            return [2 /*return*/, retErrors];
                        if (uqConfigs) {
                            for (_b = 0, uqConfigs_1 = uqConfigs; _b < uqConfigs_1.length; _b++) {
                                uqConfig = uqConfigs_1[_b];
                                dev = uqConfig.dev, name_1 = uqConfig.name, alias = uqConfig.alias;
                                owner = dev.name, ownerAlias = dev.alias;
                                uqLower = (ownerAlias !== null && ownerAlias !== void 0 ? ownerAlias : owner).toLowerCase() + '/' + (alias !== null && alias !== void 0 ? alias : name_1).toLowerCase();
                                uq = this.collection[uqLower];
                                uq.config = uqConfig;
                            }
                        }
                        UQsMan._uqs = this.buildUQs();
                        return [2 /*return*/];
                }
            });
        });
    };
    UQsMan.uq = function (uqName) {
        return UQsMan.value.collection[uqName.toLowerCase()];
    };
    UQsMan.getUqUserRoles = function (uqLower) {
        return __awaiter(this, void 0, void 0, function () {
            var uqMan, roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uqMan = UQsMan.value.collection[uqLower];
                        if (uqMan === undefined)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, uqMan.getRoles()];
                    case 1:
                        roles = _a.sent();
                        return [2 /*return*/, roles];
                }
            });
        });
    };
    UQsMan.prototype.buildTVs = function () {
        if (!this.tvs)
            return;
        for (var i in this.tvs) {
            var uqTVs = this.tvs[i];
            if (uqTVs === undefined)
                continue;
            var l = i.toLowerCase();
            if (l === i)
                continue;
            this.tvs[l] = uqTVs;
            for (var j in uqTVs) {
                var en = uqTVs[j];
                if (en === undefined)
                    continue;
                var lj = j.toLowerCase();
                if (lj === j)
                    continue;
                uqTVs[lj] = en;
            }
        }
    };
    UQsMan.prototype.init = function (uqsData) {
        return __awaiter(this, void 0, void 0, function () {
            var promiseInits, _i, uqsData_1, uqData, uqOwner, ownerAlias, uqName, uqAlias, uqFullName, uqFull, uq, lower;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseInits = [];
                        for (_i = 0, uqsData_1 = uqsData; _i < uqsData_1.length; _i++) {
                            uqData = uqsData_1[_i];
                            uqOwner = uqData.uqOwner, ownerAlias = uqData.ownerAlias, uqName = uqData.uqName, uqAlias = uqData.uqAlias;
                            uqFullName = uqOwner + '/' + uqName;
                            uqFull = this.collection[uqFullName];
                            uq = void 0;
                            if (uqFull) {
                                uq = uqFull;
                            }
                            else {
                                uq = new uqMan_1.UqMan(this, uqData, undefined, this.tvs[uqFullName] || this.tvs[uqName]);
                                this.collection[uqFullName] = uq;
                                promiseInits.push(uq.init());
                            }
                            this.uqMans.push(uq);
                            lower = uqFullName.toLowerCase();
                            this.collection[lower] = uq;
                            // 别名加入collection
                            if (uqAlias)
                                uqName = uqAlias;
                            if (ownerAlias)
                                uqOwner = ownerAlias;
                            uqFullName = uqOwner + '/' + uqName;
                            lower = uqFullName.toLowerCase();
                            this.collection[lower] = uq;
                        }
                        return [4 /*yield*/, Promise.all(promiseInits)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UQsMan.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retErrors, promises, _i, _a, uqMan, results, _b, results_1, result, retError;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        retErrors = [];
                        promises = [];
                        //let lowerUqNames:string[] = [];
                        // collection有小写名字，还有正常名字
                        //for (let i in this.collection) {
                        for (_i = 0, _a = this.uqMans; _i < _a.length; _i++) {
                            uqMan = _a[_i];
                            //let lower = (i as string).toLowerCase();
                            //if (lowerUqNames.indexOf(lower) >= 0) continue;
                            //lowerUqNames.push(lower);
                            //let uq = this.collection[i];
                            promises.push(uqMan.loadEntities());
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        results = _c.sent();
                        for (_b = 0, results_1 = results; _b < results_1.length; _b++) {
                            result = results_1[_b];
                            retError = result;
                            if (retError !== undefined) {
                                retErrors.push(retError);
                            }
                        }
                        return [2 /*return*/, retErrors];
                }
            });
        });
    };
    UQsMan.prototype.buildUQs = function () {
        var _this = this;
        var uqs = {};
        function setUq(uqKey, proxy) {
            if (!uqKey)
                return;
            var lower = uqKey.toLowerCase();
            uqs[uqKey] = proxy;
            if (lower !== uqKey)
                uqs[lower] = proxy;
        }
        for (var _i = 0, _a = this.uqMans; _i < _a.length; _i++) {
            var uqMan = _a[_i];
            var proxy = uqMan.createProxy();
            setUq(uqMan.getUqKey(), proxy);
            setUq(uqMan.getUqKeyWithConfig(), proxy);
            /*
            let uqKey = uqMan.getUqKey();
            let lower = uqKey.toLowerCase();
            uqs[uqKey] = proxy;
            if (lower !== uqKey) uqs[lower] = proxy;
            let uqKeyWithConfig = uqMan.getUqKeyWithConfig();
            let lowerWithConfig = uqKeyWithConfig.toLowerCase();
            uqs[uqKeyWithConfig] = proxy;
            if (lowerWithConfig !== uqKeyWithConfig) uqs[lowerWithConfig] = proxy;
            */
        }
        return new Proxy(uqs, {
            get: function (target, key, receiver) {
                var lk = key.toLowerCase();
                var ret = target[lk];
                if (ret !== undefined)
                    return ret;
                debugger;
                console.error("controller.uqs.".concat(String(key), " undefined"));
                _this.showReload("\u65B0\u589E uq ".concat(String(key)));
                return undefined;
            },
        });
    };
    UQsMan.prototype.getUqMans = function () {
        return this.uqMans;
    };
    UQsMan.prototype.showReload = function (msg) {
        for (var _i = 0, _a = this.uqMans; _i < _a.length; _i++) {
            var uqMan = _a[_i];
            uqMan.localMap.removeAll();
        }
        components_1.nav.showReloadPage(msg);
    };
    UQsMan.prototype.setTuidImportsLocal = function () {
        var ret = [];
        for (var _i = 0, _a = this.uqMans; _i < _a.length; _i++) {
            var uqMan = _a[_i];
            for (var _b = 0, _c = uqMan.tuidArr; _b < _c.length; _b++) {
                var tuid = _c[_b];
                if (tuid.isImport === true) {
                    var error = this.setInner(tuid);
                    if (error)
                        ret.push(error);
                }
            }
        }
        return ret;
    };
    UQsMan.prototype.setInner = function (tuidImport) {
        var from = tuidImport.from;
        var fromName = from.owner + '/' + from.uq;
        var uq = this.collection[fromName];
        if (uq === undefined) {
            //debugger;
            if (tool_1.env.buildingUq === false) {
                console.error("setInner(tuidImport: TuidImport): uq ".concat(fromName, " is not loaded"));
            }
            return;
        }
        var iName = tuidImport.name;
        var tuid = uq.tuid(iName);
        if (tuid === undefined) {
            //debugger;
            return "setInner(tuidImport: TuidImport): uq ".concat(fromName, " has no Tuid ").concat(iName);
        }
        if (tuid.isImport === true) {
            //debugger;
            return "setInner(tuidImport: TuidImport): uq ".concat(fromName, " Tuid ").concat(iName, " is import");
        }
        tuidImport.setFrom(tuid);
    };
    UQsMan.isBuildingUQ = false;
    return UQsMan;
}());
var UQsManApp = /** @class */ (function (_super) {
    __extends(UQsManApp, _super);
    function UQsManApp(tonvaAppName, tvs) {
        var _this = _super.call(this, tvs) || this;
        var parts = tonvaAppName.split('/');
        if (parts.length !== 2) {
            throw new Error('tonvaApp name must be / separated, owner/app');
        }
        _this.appOwner = parts[0];
        _this.appName = parts[1];
        _this.localMap = tool_1.env.localDb.map(tonvaAppName);
        _this.localData = _this.localMap.child('uqData');
        return _this;
    }
    return UQsManApp;
}(UQsMan));
function loadAppUqs(appOwner, appName) {
    return __awaiter(this, void 0, void 0, function () {
        var centerAppApi, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    centerAppApi = new net_1.CenterAppApi('tv/', undefined);
                    return [4 /*yield*/, centerAppApi.appUqs(appOwner, appName)];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, ret];
            }
        });
    });
}
function loadUqs(uqConfigs) {
    return __awaiter(this, void 0, void 0, function () {
        var uqs, centerAppApi, ret, err, i, _a, ownerAlias, alias;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    uqs = uqConfigs.map(function (v) {
                        var dev = v.dev, name = v.name, version = v.version, alias = v.alias;
                        var owner = dev.name, ownerAlias = dev.alias;
                        return { owner: owner, ownerAlias: ownerAlias, name: name, version: version, alias: alias };
                    });
                    centerAppApi = new net_1.CenterAppApi('tv/', undefined);
                    return [4 /*yield*/, centerAppApi.uqs(uqs)];
                case 1:
                    ret = _b.sent();
                    if (ret.length < uqs.length) {
                        err = "\u4E0B\u5217UQ\uFF1A\n".concat(uqs.map(function (v) { return "".concat(v.owner, "/").concat(v.name); }).join('\n'), "\u4E4B\u4E00\u4E0D\u5B58\u5728");
                        console.error(err);
                        throw Error(err);
                    }
                    for (i = 0; i < uqs.length; i++) {
                        _a = uqs[i], ownerAlias = _a.ownerAlias, alias = _a.alias;
                        ret[i].ownerAlias = ownerAlias;
                        ret[i].uqAlias = alias;
                    }
                    return [2 /*return*/, ret];
            }
        });
    });
}
//# sourceMappingURL=uqsMan.js.map