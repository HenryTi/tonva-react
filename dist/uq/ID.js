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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IX = exports.UqIX = exports.IDX = exports.UqIDX = exports.ID = exports.UqID = void 0;
var entity_1 = require("./entity");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var UqID = /** @class */ (function (_super) {
    __extends(UqID, _super);
    function UqID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqID.prototype, "typeName", {
        get: function () { return 'id'; },
        enumerable: false,
        configurable: true
    });
    return UqID;
}(entity_1.Entity));
exports.UqID = UqID;
var ID = /** @class */ (function (_super) {
    __extends(ID, _super);
    function ID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ID;
}(UqID));
exports.ID = ID;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var UqIDX = /** @class */ (function (_super) {
    __extends(UqIDX, _super);
    function UqIDX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqIDX.prototype, "typeName", {
        get: function () { return 'idx'; },
        enumerable: false,
        configurable: true
    });
    return UqIDX;
}(entity_1.Entity));
exports.UqIDX = UqIDX;
var IDX = /** @class */ (function (_super) {
    __extends(IDX, _super);
    function IDX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IDX;
}(UqIDX));
exports.IDX = IDX;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var UqIX = /** @class */ (function (_super) {
    __extends(UqIX, _super);
    function UqIX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqIX.prototype, "typeName", {
        get: function () { return 'ix'; },
        enumerable: false,
        configurable: true
    });
    return UqIX;
}(entity_1.Entity));
exports.UqIX = UqIX;
var IX = /** @class */ (function (_super) {
    __extends(IX, _super);
    function IX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IX;
}(UqIX));
exports.IX = IX;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=ID.js.map