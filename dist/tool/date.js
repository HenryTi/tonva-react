"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromMinuteId = exports.toLocaleDateString = void 0;
var env_1 = require("./env");
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
function dateFromMinuteId(id) {
    var m = (id / Math.pow(2, 20)) + env_1.env.timeZone * 60;
    var t = minuteId0.getTime();
    return new Date(m * 60000 + t);
}
exports.dateFromMinuteId = dateFromMinuteId;
//# sourceMappingURL=date.js.map