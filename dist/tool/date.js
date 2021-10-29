"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromMinuteId = exports.minute2020_01_01 = exports.toLocaleDateString = void 0;
var tool_1 = require("../tool");
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
exports.minute2020_01_01 = 26297280; // 2020-1-1 到 1970-1-1 的毫秒数
function dateFromMinuteId(id, timeZone) {
    var envTimezone = tool_1.env.timeZone;
    var m = (id / Math.pow(2, 20)) + (-envTimezone + (timeZone !== null && timeZone !== void 0 ? timeZone : envTimezone)) * 60;
    return new Date((m + exports.minute2020_01_01) * 60000);
}
exports.dateFromMinuteId = dateFromMinuteId;
//# sourceMappingURL=date.js.map