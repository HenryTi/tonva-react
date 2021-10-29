import { env } from "../tool";

const options:Intl.DateTimeFormatOptions = { 
	weekday: 'long', 
	year: 'numeric', 
	month: 'long', 
	day: 'numeric' 
}

export function toLocaleDateString(date:Date) {
	if (!date) return '';
	return date.toLocaleDateString('zh-cn', options);
}

export const minute2020_01_01 = 26297280;  // 2020-1-1 到 1970-1-1 的毫秒数
export function dateFromMinuteId(id: number, timeZone?: number): Date {
	let m = (id / Math.pow(2, 20)) + (timeZone??0) * 60;
	return new Date((m + minute2020_01_01) * 60000);
}
