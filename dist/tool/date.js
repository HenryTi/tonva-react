"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromMinuteId = exports.toLocaleDateString = void 0;
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
function toLocaleDateString(date) {
    if (!date)
        return '';
    return date.toLocaleDateString('zh-cn', options);
}
exports.toLocaleDateString = toLocaleDateString;
var minuteId0 = new Date('2020-1-1');
function dateFromMinuteId(id, timeZone) {
    var _a;
    var offset = (_a = timeZone * 60) !== null && _a !== void 0 ? _a : 0; // env.timeZone;
    var m = (id / Math.pow(2, 20)) + offset;
    var t = minuteId0.getTime();
    return new Date(m * 60000 + t);
}
exports.dateFromMinuteId = dateFromMinuteId;
//# sourceMappingURL=date.js.map