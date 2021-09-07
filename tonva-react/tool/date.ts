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
	return new Date(minuteId0.getTime() + ((id >> 20) + env.timeZone * 60) * 60000);
}
