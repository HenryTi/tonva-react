"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromMinuteId = exports.toLocaleDateString = void 0;
var tool_1 = require("tool");
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
    var d0 = new Date('');
    return new Date(minuteId0.getTime() + ((id >> 20) + tool_1.env.timeZone * 60) * 60000);
}
exports.dateFromMinuteId = dateFromMinuteId;
//# sourceMappingURL=date.js.map