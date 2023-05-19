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
exports.messageHub = void 0;
var MessageHub = /** @class */ (function () {
    function MessageHub() {
        this.handlerSeed = 1;
        this.anyHandlers = {};
        this.msgHandlers = {};
    }
    MessageHub.prototype.registerReceiveHandler = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var seed = this.handlerSeed++;
        var args0 = args[0];
        var handler;
        switch (typeof args0) {
            case 'string':
                handler = args[1];
                this.msgHandlers[seed] = { type: args0, handler: handler };
                break;
            case 'function':
                this.anyHandlers[seed] = args0;
                break;
        }
        return seed;
    };
    MessageHub.prototype.unregisterReceiveHandler = function (handlerId) {
        delete this.anyHandlers[handlerId];
        delete this.msgHandlers[handlerId];
    };
    MessageHub.prototype.dispatch = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var $type, _a, _b, _c, _i, i, _d, _e, _f, _g, i, _h, type, handler;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        $type = msg.$type;
                        _a = this.anyHandlers;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _j.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 4];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 3];
                        i = _c;
                        return [4 /*yield*/, this.anyHandlers[i](msg)];
                    case 2:
                        _j.sent();
                        _j.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _d = this.msgHandlers;
                        _e = [];
                        for (_f in _d)
                            _e.push(_f);
                        _g = 0;
                        _j.label = 5;
                    case 5:
                        if (!(_g < _e.length)) return [3 /*break*/, 8];
                        _f = _e[_g];
                        if (!(_f in _d)) return [3 /*break*/, 7];
                        i = _f;
                        _h = this.msgHandlers[i], type = _h.type, handler = _h.handler;
                        if (type !== $type)
                            return [3 /*break*/, 7];
                        return [4 /*yield*/, handler(msg)];
                    case 6:
                        _j.sent();
                        _j.label = 7;
                    case 7:
                        _g++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return MessageHub;
}());
exports.messageHub = new MessageHub();
//# sourceMappingURL=messageHub.js.map