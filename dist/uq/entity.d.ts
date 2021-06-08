import { UqApi } from '../net';
import { LocalCache } from '../tool';
import { UqMan, Field, ArrFields, FieldMap } from './uqMan';
import { Tuid } from './tuid';
export declare abstract class Entity {
    private jName;
    schema: any;
    ver: number;
    sys?: boolean;
    readonly uq: UqMan;
    readonly name: string;
    readonly typeId: number;
    readonly schemaLocal: LocalCache;
    readonly uqApi: UqApi;
    abstract get typeName(): string;
    get sName(): string;
    fields: Field[];
    arrFields: ArrFields[];
    returns: ArrFields[];
    constructor(uq: UqMan, name: string, typeId: number);
    face: any;
    private fieldMaps;
    fieldMap(arr?: string): FieldMap;
    loadSchema(): Promise<void>;
    buildSchema(schema: any): void;
    protected loadValues(): Promise<any>;
    clearSchema(): void;
    setSchema(schema: any): void;
    protected setJName(name: string): void;
    buildFieldsTuid(): void;
    schemaStringify(): string;
    tuidFromName(fieldName: string, arrName?: string): Tuid;
    buildParams(params: any): any;
    private buildFieldsParams;
    buildDateTimeParam(val: any): number;
    buildDateParam(val: any): string;
    pack(data: any): string;
    private escape;
    private packRow;
    private packArr;
    protected cacheFieldsInValue(values: any, fields: Field[]): void;
    protected unpackTuidIdsOfFields(values: string[], fields: Field[]): any[];
    unpackSheet(data: string): any;
    unpackReturns(data: string, returns?: ArrFields[]): {
        [name: string]: any[];
    };
    protected unpackRow(ret: any, fields: Field[], data: string, p: number): number;
    private to;
    private reverseNT;
    private unpackArr;
}
