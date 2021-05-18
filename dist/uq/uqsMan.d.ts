/// <reference types="react" />
import { UqData } from '../net';
import { UqMan } from './uqMan';
import { AppConfig } from '../app';
export interface TVs {
    [uqName: string]: {
        [tuidName: string]: (values: any) => JSX.Element;
    };
}
export declare class UQsMan {
    private static isBuildingUQ;
    static _uqs: any;
    static value: UQsMan;
    static build(appConfig: AppConfig): Promise<string[]>;
    static buildUQs(uqsConfig: AppConfig): Promise<string[]>;
    private static load;
    private static loadUqs;
    private uqMans;
    private collection;
    private readonly tvs;
    protected constructor(tvs: TVs);
    private buildUqs;
    static uq(uqName: string): UqMan;
    static getUqUserRoles(uqLower: string): Promise<string[]>;
    private buildTVs;
    init(uqsData: UqData[]): Promise<void>;
    load(): Promise<string[]>;
    buildUQs(): any;
    getUqMans(): UqMan[];
    private showReload;
    setTuidImportsLocal(): string[];
    private setInner;
}
