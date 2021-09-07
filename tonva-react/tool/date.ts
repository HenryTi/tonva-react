import { env } from "./env";

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

const minuteId0 = new Date('2020-1-1');
export function dateFromMinuteId(id: number): Date {
	let m = (id / Math.pow(2, 20)) + env.timeZone * 60;
	let t = minuteId0.getTime();
	return new Date(m * 60000 + t);
}
