"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUqs = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var index_1 = require("./index");
var components_1 = require("../components");
var red = '\x1b[41m%s\x1b[0m';
var lastBuildTime = 0;
var gUqOwnerMap;
var uqTsSrcPath = 'src/UqApp';
// 返回每个uq构建时的错误
function uqAppStart(options) {
    return __awaiter(this, void 0, void 0, function () {
        var app, uqs, tvs, retErrors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = options.app, uqs = options.uqs, tvs = options.tvs;
                    //process.env.REACT_APP_UNIT = String(appUnitId);
                    components_1.nav.forceDevelopment = true;
                    return [4 /*yield*/, components_1.nav.init()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, index_1.UQsMan.build(options)];
                case 2:
                    retErrors = _a.sent();
                    gUqOwnerMap = index_1.UQsMan.uqOwnerMap;
                    return [2 /*return*/, retErrors];
            }
        });
    });
}
function buildUqs(options) {
    return __awaiter(this, void 0, void 0, function () {
        var tsIndex, tsCApp, tsCBase, tsVMain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (lastBuildTime > 0) {
                        console.log(red, 'quit !');
                        return [2 /*return*/];
                    }
                    if (!fs_1.default.existsSync(uqTsSrcPath)) {
                        fs_1.default.mkdirSync(uqTsSrcPath);
                    }
                    //buildTsAppName(options);
                    buildTsAppConfig(options);
                    tsIndex = buildTsIndex();
                    saveTsFile('index', tsIndex);
                    tsCApp = buildTsCApp();
                    saveTsFileIfNotExists('CApp', tsCApp);
                    tsCBase = buildTsCBase();
                    saveTsFile('CBase', tsCBase);
                    tsVMain = buildTsVMain();
                    saveTsFileIfNotExists('VMain', tsVMain, 'tsx');
                    saveTsFile('uqs', '');
                    fs_1.default.unlinkSync(uqTsSrcPath + '/uqs.ts');
                    return [4 /*yield*/, buildUqsFolder(uqTsSrcPath + '/uqs', options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.buildUqs = buildUqs;
;
function saveTsFileIfNotExists(fileName, content, suffix) {
    if (suffix === void 0) { suffix = 'ts'; }
    var tsFile = uqTsSrcPath + "/" + fileName + "." + suffix;
    if (fs_1.default.existsSync(tsFile) === true)
        return;
    saveTsFile(fileName, content, suffix);
}
function saveTsFile(fileName, content, suffix) {
    if (suffix === void 0) { suffix = 'ts'; }
    var srcFile = uqTsSrcPath + "/" + fileName + "." + suffix + ".txt";
    var tsFile = uqTsSrcPath + "/" + fileName + "." + suffix;
    if (!fs_1.default.existsSync(srcFile)) {
        if (fs_1.default.existsSync(tsFile)) {
            fs_1.default.renameSync(tsFile, srcFile);
        }
    }
    fs_1.default.writeFileSync(tsFile, content);
    lastBuildTime = Date.now();
    console.log(red, tsFile + " is built");
}
function overrideTsFile(path, fileName, content, suffix) {
    if (suffix === void 0) { suffix = 'ts'; }
    var tsFile = path + "/" + fileName + "." + suffix;
    fs_1.default.writeFileSync(tsFile, content);
    lastBuildTime = Date.now();
    console.log(red, tsFile + " is built");
}
function buildTsHeader() {
    return "//=== UqApp builder created on " + new Date() + " ===//";
}
function buildTsAppName(options) {
    var app = options.app;
    if (app) {
        var tsAppName = buildTsHeader() + "\nexport const appName = '" + app.name + "';\n";
        saveTsFile('appName', tsAppName);
    }
}
function buildTsAppConfig(options) {
    var app = options.app, uqs = options.uqs, noUnit = options.noUnit, tvs = options.tvs, oem = options.oem, htmlTitle = options.htmlTitle;
    function toString(s) {
        if (s === undefined)
            return;
        if (s === null)
            return null;
        return "'" + s + "'";
    }
    function toAppString() {
        if (!app)
            return undefined;
        var name = app.name, version = app.version;
        return "{ name: " + name + ", version: " + version + " }";
    }
    function toUqsString() {
        if (!uqs)
            return undefined;
        var ret = '{\n';
        for (var owner in uqs) {
            ret += "\t\t\"" + owner + "\": {\n";
            var ownerObj = uqs[owner];
            for (var name_1 in ownerObj) {
                ret += "\t\t\t\"" + name_1 + "\": \"" + ownerObj[name_1] + "\",\n";
            }
            ret += "\t\t},\n";
        }
        return ret + '\t}';
    }
    var ts = buildTsHeader() + "\nimport { AppConfig } from \"tonva-react\";\n\nexport const appConfig: AppConfig = {\n\tapp: " + toAppString() + ",\n\tuqs: " + toUqsString() + ",\n\tnoUnit: " + noUnit + ",\n    tvs: " + JSON.stringify(tvs) + ",\n\toem: " + toString(oem) + ",\n\thtmlTitle: " + toString(htmlTitle) + ",\n};\n";
    saveTsFile('appConfig', ts);
}
function buildTsIndex() {
    return buildTsHeader() + "\nexport { appConfig } from './appConfig';\nexport { CUqApp, CUqBase, CUqSub } from './CBase';\nexport { CApp } from './CApp';\nexport * from './uqs';\n";
}
function buildTsCApp() {
    return buildTsHeader() + "\nimport { CUqApp } from \"./CBase\";\nimport { VMain } from \"./VMain\";\n\nexport class CApp extends CUqApp {\n\tprotected async internalStart(isUserLogin: boolean) {\n\t\tthis.openVPage(VMain, undefined, this.dispose);\n\t}\n}\n";
}
function buildTsCBase() {
    return buildTsHeader() + "\nimport { CSub, CBase, CAppBase, IConstructor } from 'tonva-react';\nimport { UQs } from './uqs';\nimport { CApp } from './CApp';\n\nexport abstract class CUqBase extends CBase {\n\tget cApp(): CApp { return this._cApp; }\n\tprotected get uqs(): UQs { return this._uqs as UQs };\n}\n\nexport abstract class CUqSub<T extends CUqBase> extends CSub<T> {\n\tget cApp(): CApp { return this._cApp; }\n\tprotected get uqs(): UQs { return this._uqs as UQs };\n\tget owner(): T { return this._owner as T }\n}\n\nexport abstract class CUqApp extends CAppBase {\n\tget uqs(): UQs { return this._uqs };\n\n\tprotected newC<T extends CUqBase>(type: IConstructor<T>): T {\n\t\tlet c = new type(this);\n\t\tc.init();\n\t\treturn c;\n\t}\n}\n";
}
function buildTsVMain() {
    return buildTsHeader() + "\nimport { VPage, Page } from 'tonva-react';\nimport { CApp } from './CApp';\n\nexport class VMain extends VPage<CApp> {\n\tasync open(param?: any, onClosePage?: (ret:any)=>void) {\n\t\tthis.openPage(this.render, param, onClosePage);\n\t}\n\n\trender = (param?: any): JSX.Element => {\n\t\treturn <Page header=\"TEST\">\n\t\t\t<div className=\"m-3\">\n\t\t\t\t<div>{this.renderMe()}</div>\n\t\t\t\t<div className=\"mb-5\">\u540C\u82B1\u6837\u4F8B\u4E3B\u9875\u9762</div>\n\t\t\t</div>\n\t\t</Page>;\n\t}\n}\n";
}
function buildUqsFolder(uqsFolder, options) {
    return __awaiter(this, void 0, void 0, function () {
        var uqErrors, uqsMan, coll, promiseArr, uqs, i, lowerI, _i, uqs_1, uq, files, _a, files_1, file, tsUqsIndexHeader, tsUqsIndexContent, tsUqsExports, _b, uqs_2, uq, uqOwner, uqName, enumArr, o1, n1, tsUq, _c, _d, enm, enmName;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, uqAppStart(options)];
                case 1:
                    uqErrors = _e.sent();
                    uqsMan = index_1.UQsMan.value;
                    coll = uqsMan.getUqCollection();
                    promiseArr = [];
                    uqs = [];
                    for (i in coll) {
                        lowerI = i.toLowerCase();
                        if (lowerI !== i)
                            continue;
                        uqs.push(coll[i]);
                    }
                    if (uqErrors) {
                        //let error = options.uqAppName + ' not defined!';
                        throw new Error(uqErrors.join('\n'));
                    }
                    for (_i = 0, uqs_1 = uqs; _i < uqs_1.length; _i++) {
                        uq = uqs_1[_i];
                        promiseArr.push(loadUqEntities(uq));
                    }
                    return [4 /*yield*/, Promise.all(promiseArr)];
                case 2:
                    _e.sent();
                    if (!fs_1.default.existsSync(uqsFolder)) {
                        fs_1.default.mkdirSync(uqsFolder);
                    }
                    else {
                        try {
                            files = fs_1.default.readdirSync(uqsFolder);
                            for (_a = 0, files_1 = files; _a < files_1.length; _a++) {
                                file = files_1[_a];
                                fs_1.default.unlinkSync(path_1.default.join(uqsFolder, file));
                            }
                        }
                        catch (err) {
                            throw new err;
                        }
                    }
                    tsUqsIndexHeader = buildTsHeader();
                    tsUqsIndexContent = "\n\nexport interface UQs {";
                    tsUqsExports = '\n\n';
                    for (_b = 0, uqs_2 = uqs; _b < uqs_2.length; _b++) {
                        uq = uqs_2[_b];
                        uqOwner = uq.uqOwner, uqName = uq.uqName, enumArr = uq.enumArr;
                        o1 = getUqOwnerName(uqOwner);
                        n1 = getUqName(uqName);
                        tsUq = buildTsUq(uq);
                        overrideTsFile(uqsFolder, o1 + n1, tsUq);
                        // as ${o1}${n1}
                        tsUqsIndexHeader += "\nimport { " + o1 + n1 + " } from './" + o1 + n1 + "';";
                        tsUqsIndexContent += "\n\t" + o1 + n1 + ": " + o1 + n1 + ".Uq" + o1 + n1 + ";";
                        if (enumArr.length > 0) {
                            tsUqsExports += "\nexport {";
                            for (_c = 0, _d = uq.enumArr; _c < _d.length; _c++) {
                                enm = _d[_c];
                                enmName = "" + capitalCaseString(enm.sName);
                                tsUqsExports += "\n\t" + enmName + " as " + o1 + n1 + enmName + ",";
                            }
                            tsUqsExports += "\n} from './" + o1 + n1 + "';";
                        }
                    }
                    overrideTsFile(uqsFolder, 'index', tsUqsIndexHeader + tsUqsIndexContent + '\n}' + tsUqsExports + '\n');
                    return [2 /*return*/];
            }
        });
    });
}
function buildTsUq(uq) {
    var ret = buildTsHeader();
    ret += buildUQ(uq);
    return ret;
}
function capitalCaseString(s) {
    var parts = s.split(/[-._]/);
    return parts.map(function (v) { return firstCharUppercase(v); }).join('');
}
function camelCaseString(s) {
    var parts = s.split(/[-._]/);
    var len = parts.length;
    parts[0] = firstCharLowercase(parts[0]);
    for (var i = 1; i < len; i++) {
        parts[1] = firstCharUppercase(parts[1]);
    }
    return parts.join('');
}
function entityName(s) {
    return capitalCaseString(s);
}
function getUqOwnerName(uqOwner) {
    var uo = gUqOwnerMap[uqOwner.toLowerCase()];
    if (uo === undefined)
        return '';
    if (uo.length === 0)
        return '';
    return capitalCaseString(uo);
}
function getUqName(uqName) {
    return capitalCaseString(uqName);
}
function uqBlock(entity, build) {
    var name = entity.name;
    if (name.indexOf('$') > 0)
        return '';
    var entityCode = build(entity);
    if (!entityCode)
        return '';
    return '\n' + entityCode;
}
function uqEntityInterface(entity, buildInterface) {
    var name = entity.name;
    if (name.indexOf('$') > 0)
        return '';
    var entityCode = buildInterface(entity);
    if (!entityCode)
        return '';
    return '\n' + entityCode + '\n';
}
var aCode = 'a'.charCodeAt(0);
var zCode = 'z'.charCodeAt(0);
function firstCharUppercase(s) {
    if (!s)
        return '';
    var c = s.charCodeAt(0);
    if (c >= aCode && c <= zCode) {
        return String.fromCharCode(c - 0x20) + s.substr(1);
    }
    return s;
}
var ACode = 'A'.charCodeAt(0);
var ZCode = 'Z'.charCodeAt(0);
function firstCharLowercase(s) {
    if (!s)
        return '';
    var c = s.charCodeAt(0);
    if (c >= ACode && c <= ZCode) {
        return String.fromCharCode(c + 0x20) + s.substr(1);
    }
    return s;
}
function loadUqEntities(uq) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, uq.loadAllSchemas()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function buildUQ(uq) {
    var uqOwner = uq.uqOwner, uqName = uq.uqName;
    var tsImport = '\nimport { ';
    var importFirst = true;
    //UqTuid, UqQuery, UqAction, UqSheet/*, Map, Tag*/
    var ts = "\n\n";
    ts += '\n//===============================';
    ts += "\n//======= UQ " + uq.name + " ========";
    ts += '\n//===============================';
    ts += '\n';
    uq.enumArr.forEach(function (v) { return ts += uqEntityInterface(v, buildEnumInterface); });
    ts += "\nexport declare namespace " + getUqOwnerName(uqOwner) + getUqName(uqName) + " {";
    uq.tuidArr.forEach(function (v) { return ts += uqEntityInterface(v, buildTuidInterface); });
    uq.actionArr.forEach(function (v) { return ts += uqEntityInterface(v, buildActionInterface); });
    uq.sheetArr.forEach(function (v) { return ts += uqEntityInterface(v, buildSheetInterface); });
    uq.queryArr.forEach(function (v) { return ts += uqEntityInterface(v, buildQueryInterface); });
    uq.bookArr.forEach(function (v) { return ts += uqEntityInterface(v, buildBookInterface); });
    uq.mapArr.forEach(function (v) { return ts += uqEntityInterface(v, buildMapInterface); });
    uq.historyArr.forEach(function (v) { return ts += uqEntityInterface(v, buildHistoryInterface); });
    uq.pendingArr.forEach(function (v) { return ts += uqEntityInterface(v, buildPendingInterface); });
    uq.tagArr.forEach(function (v) { return ts += uqEntityInterface(v, buildTagInterface); });
    ts += "\n\nexport interface Uq" + getUqOwnerName(uqOwner) + getUqName(uqName) + " {";
    ts += "\n\t$name: string;";
    function appendArr(arr, type, tsBuild) {
        if (arr.length === 0)
            return;
        var tsLen = ts.length;
        arr.forEach(function (v) { return ts += tsBuild(v); });
        if (ts.length - tsLen > 0) {
            if (importFirst === true) {
                importFirst = false;
            }
            else {
                tsImport += ', ';
            }
            tsImport += 'Uq' + type;
        }
    }
    appendArr(uq.tuidArr, 'Tuid', function (v) { return uqBlock(v, buildTuid); });
    appendArr(uq.actionArr, 'Action', function (v) { return uqBlock(v, buildAction); });
    appendArr(uq.sheetArr, 'Sheet', function (v) { return uqBlock(v, buildSheet); });
    appendArr(uq.bookArr, 'Book', function (v) { return uqBlock(v, buildBook); });
    appendArr(uq.queryArr, 'Query', function (v) { return uqBlock(v, buildQuery); });
    appendArr(uq.mapArr, 'Map', function (v) { return uqBlock(v, buildMap); });
    appendArr(uq.historyArr, 'History', function (v) { return uqBlock(v, buildHistory); });
    appendArr(uq.pendingArr, 'Pending', function (v) { return uqBlock(v, buildPending); });
    appendArr(uq.tagArr, 'Tag', function (v) { return uqBlock(v, buildTag); });
    ts += '\n}\n}\n';
    tsImport += ' } from "tonva-react";';
    return tsImport + ts;
}
function buildFields(fields, indent) {
    if (indent === void 0) { indent = 1; }
    if (!fields)
        return;
    var ts = '';
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var f = fields_1[_i];
        ts += buildField(f, indent);
    }
    return ts;
}
var fieldTypeMap = {
    "char": "string",
    "text": "string",
    "id": "number",
    "int": "number",
    "bigint": "number",
    "smallint": "number",
    "tinyint": "number",
};
function buildField(field, indent) {
    if (indent === void 0) { indent = 1; }
    var type = field.type;
    var s = fieldTypeMap[type];
    if (!s)
        s = 'any';
    return "\n" + '\t'.repeat(indent) + field.name + ": " + s + ";";
}
function buildArrs(arrFields) {
    if (!arrFields)
        return '';
    var ts = '\n';
    for (var _i = 0, arrFields_1 = arrFields; _i < arrFields_1.length; _i++) {
        var af = arrFields_1[_i];
        ts += "\t" + camelCaseString(af.name) + ": {";
        ts += buildFields(af.fields, 2);
        ts += '\n\t}[];\n';
    }
    return ts;
}
/*
const typeMap:{[type:string]:string} = {
    action: 'Action',
    query: 'Query',
}
*/
function buildReturns(entity, returns) {
    if (!returns)
        return;
    //let {typeName} = entity;
    //let type = typeMap[typeName] || typeName;
    var sName = entity.sName;
    sName = capitalCaseString(sName);
    var ts = '';
    for (var _i = 0, returns_1 = returns; _i < returns_1.length; _i++) {
        var ret = returns_1[_i];
        var retName = capitalCaseString(ret.name);
        ts += "interface Return" + sName + retName + " {";
        ts += buildFields(ret.fields);
        ts += '\n}\n';
    }
    ts += "interface Result" + sName + " {\n";
    for (var _a = 0, returns_2 = returns; _a < returns_2.length; _a++) {
        var ret = returns_2[_a];
        var retName = capitalCaseString(ret.name);
        ts += "\t" + ret.name + ": Return" + sName + retName + "[];\n";
    }
    ts += '}';
    return ts;
}
function buildTuid(tuid) {
    var ts = "\t" + entityName(tuid.sName) + ": UqTuid<Tuid" + capitalCaseString(tuid.sName) + ">;";
    return ts;
}
function buildTuidInterface(tuid) {
    var ts = "export interface Tuid" + capitalCaseString(tuid.sName) + " {";
    ts += buildFields(tuid.fields);
    ts += '\n}';
    return ts;
}
function buildAction(action) {
    var ts = "\t" + entityName(action.sName) + ": UqAction<Param" + capitalCaseString(action.sName) + ", Result" + capitalCaseString(action.sName) + ">;";
    return ts;
}
function buildActionInterface(action) {
    var ts = "export interface Param" + capitalCaseString(action.sName) + " {";
    ts += buildFields(action.fields);
    ts += buildArrs(action.arrFields);
    ts += '\n}\n';
    ts += buildReturns(action, action.returns);
    return ts;
}
function buildEnumInterface(enm) {
    var schema = enm.schema;
    if (!schema)
        return;
    var values = schema.values;
    var ts = "export enum " + capitalCaseString(enm.sName) + " {";
    var first = true;
    for (var i in values) {
        if (first === false) {
            ts += ',';
        }
        else {
            first = false;
        }
        var v = values[i];
        ts += '\n\t' + i + ' = ';
        if (typeof v === 'string') {
            ts += '"' + v + '"';
        }
        else {
            ts += v;
        }
    }
    return ts += '\n};';
}
function buildQuery(query) {
    var sName = query.sName;
    var ts = "\t" + entityName(sName) + ": UqQuery<Param" + capitalCaseString(sName) + ", Result" + capitalCaseString(sName) + ">;";
    return ts;
}
function buildQueryInterface(query) {
    var ts = "export interface Param" + capitalCaseString(query.sName) + " {";
    ts += buildFields(query.fields);
    ts += '\n}\n';
    ts += buildReturns(query, query.returns);
    return ts;
}
function buildSheet(sheet) {
    var sName = sheet.sName, verify = sheet.verify;
    var cName = capitalCaseString(sName);
    var v = verify ? "Verify" + cName : 'any';
    var ts = "\t" + entityName(sName) + ": UqSheet<Sheet" + cName + ", " + v + ">;";
    return ts;
}
function buildSheetInterface(sheet) {
    var sName = sheet.sName, fields = sheet.fields, arrFields = sheet.arrFields, verify = sheet.verify;
    var ts = "export interface Sheet" + capitalCaseString(sName) + " {";
    ts += buildFields(fields);
    ts += buildArrs(arrFields);
    ts += '}';
    if (verify) {
        var returns = verify.returns;
        ts += "\nexport interface Verify" + capitalCaseString(sName) + " {";
        for (var _i = 0, returns_3 = returns; _i < returns_3.length; _i++) {
            var item = returns_3[_i];
            var arrName = item.name, fields_2 = item.fields;
            ts += '\n\t' + arrName + ': {';
            ts += buildFields(fields_2, 2);
            ts += '\n\t}[];';
        }
        ts += '\n}';
    }
    return ts;
}
function buildBook(book) {
    var sName = book.sName;
    var ts = "\t" + entityName(sName) + ": UqBook<Param" + capitalCaseString(sName) + ", Result" + capitalCaseString(sName) + ">;";
    return ts;
}
function buildBookInterface(book) {
    var sName = book.sName, fields = book.fields, returns = book.returns;
    var ts = "export interface Param" + capitalCaseString(sName) + " {";
    ts += buildFields(fields);
    ts += '\n}\n';
    ts += buildReturns(book, returns);
    return ts;
}
function buildMap(map) {
    var sName = map.sName;
    var ts = "\t" + entityName(sName) + ": UqMap;";
    return ts;
}
function buildMapInterface(map) {
    /*
    let {sName, fields, returns} = map;
    let ts = `export interface Param${capitalCaseString(sName)} {`;
    ts += buildFields(fields);
    ts += '\n}\n';
    ts += buildReturns(map, returns);
    return ts;
    */
    return '';
}
function buildHistory(history) {
    var sName = history.sName;
    var ts = "\t" + entityName(sName) + ": UqHistory<Param" + capitalCaseString(sName) + ", Result" + capitalCaseString(sName) + ">;";
    return ts;
}
function buildHistoryInterface(history) {
    var sName = history.sName, fields = history.fields, returns = history.returns;
    var ts = "export interface Param" + capitalCaseString(sName) + " {";
    ts += buildFields(fields);
    ts += '\n}\n';
    ts += buildReturns(history, returns);
    return ts;
}
function buildPending(pending) {
    var sName = pending.sName;
    var ts = "\t" + entityName(sName) + ": UqPending<any, any>;";
    return ts;
}
function buildPendingInterface(pending) {
    /*
    let {sName, fields, returns} = pending;
    let ts = `export interface Param${capitalCaseString(sName)} {`;
    ts += buildFields(fields);
    ts += '\n}\n';
    ts += buildReturns(pending, returns);
    return ts;
    */
    return '';
}
function buildTag(tag) {
    var sName = tag.sName;
    var ts = "\t" + entityName(sName) + ": UqTag;";
    return ts;
}
function buildTagInterface(tag) {
    return;
}
//# sourceMappingURL=buildUqs.js.map