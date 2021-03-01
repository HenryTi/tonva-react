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
exports.build = void 0;
var fs_1 = __importDefault(require("fs"));
var tool_1 = require("../../tool");
var tools_1 = require("./tools");
var uqsFolder_1 = require("./uqsFolder");
var tsIndex_1 = require("./tsIndex");
var tsCApp_1 = require("./tsCApp");
var tsCBase_1 = require("./tsCBase");
var tsVMain_1 = require("./tsVMain");
function build(options) {
    return __awaiter(this, void 0, void 0, function () {
        var tsIndex, tsCApp, tsCBase, tsVMain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 只从test 数据库构建uq ts
                    tool_1.env.testing = true;
                    if (tools_1.lastBuildTime > 0) {
                        console.log(tools_1.red, 'quit !');
                        return [2 /*return*/];
                    }
                    if (!fs_1.default.existsSync(tools_1.uqTsSrcPath)) {
                        fs_1.default.mkdirSync(tools_1.uqTsSrcPath);
                    }
                    tsIndex = tsIndex_1.buildTsIndex();
                    tools_1.saveTsFile('index', tsIndex);
                    tsCApp = tsCApp_1.buildTsCApp();
                    tools_1.saveSrcTsFileIfNotExists('CApp', 'ts', tsCApp);
                    tsCBase = tsCBase_1.buildTsCBase();
                    tools_1.saveTsFile('CBase', tsCBase);
                    tsVMain = tsVMain_1.buildTsVMain();
                    tools_1.saveSrcTsFileIfNotExists('VMain', 'tsx', tsVMain);
                    tools_1.saveTsFile('uqs', '');
                    fs_1.default.unlinkSync(tools_1.uqTsSrcPath + '/uqs.ts');
                    return [4 /*yield*/, uqsFolder_1.buildUqsFolder(tools_1.uqTsSrcPath + '/uqs', options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.build = build;
;
//# sourceMappingURL=build.js.map