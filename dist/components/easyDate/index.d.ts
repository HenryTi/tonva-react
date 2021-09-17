import * as React from 'react';
export interface EasyDateProps {
    date: Date | number;
    timeZone?: number;
}
export declare class EasyDate extends React.Component<EasyDateProps> {
    render(): string;
}
interface EasyTimeProps extends EasyDateProps {
    always?: boolean;
}
export declare class EasyTime extends React.Component<EasyTimeProps> {
    render(): string;
}
interface DateProps {
    date: Date;
    hideTime?: boolean;
    hideSameYear?: boolean;
}
export declare const VDate: React.FunctionComponent<DateProps>;
export {};
