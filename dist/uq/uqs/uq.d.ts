import { UqApi, UqData } from '../../net';
import { Tuid, TuidDiv, TuidBox } from './tuid';
import { Action } from './action';
import { Sheet } from './sheet';
import { Query } from './query';
import { Book } from './book';
import { History } from './history';
import { Map } from './map';
import { Pending } from './pending';
import { CreateBoxId } from './boxId';
export declare type FieldType = 'id' | 'tinyint' | 'smallint' | 'int' | 'bigint' | 'dec' | 'char' | 'text' | 'datetime' | 'date' | 'time';
export declare function fieldDefaultValue(type: FieldType): "" | 0 | "2000-1-1" | "0:00";
export interface Field {
    name: string;
    type: FieldType;
    tuid?: string;
    arr?: string;
    null?: boolean;
    size?: number;
    owner?: string;
    _tuid: TuidBox;
}
export interface ArrFields {
    name: string;
    fields: Field[];
    id?: string;
    order?: string;
}
export interface FieldMap {
    [name: string]: Field;
}
export interface SchemaFrom {
    owner: string;
    uq: string;
}
export declare class Uq {
    private tuids;
    private actions;
    private sheets;
    private queries;
    private books;
    private maps;
    private histories;
    private pendings;
    private tuidsCache;
    private readonly cache;
    readonly createBoxId: CreateBoxId;
    readonly uqOwner: string;
    readonly uqName: string;
    readonly name: string;
    readonly uqApi: UqApi;
    readonly id: number;
    uqVersion: number;
    constructor(uqData: UqData, createBoxId: CreateBoxId);
    tuid(name: string): Tuid;
    tuidDiv(name: string, div: string): TuidDiv;
    action(name: string): Action;
    sheet(name: string): Sheet;
    query(name: string): Query;
    book(name: string): Book;
    map(name: string): Map;
    history(name: string): History;
    pending(name: string): Pending;
    sheetFromTypeId(typeId: number): Sheet;
    tuidArr: Tuid[];
    actionArr: Action[];
    sheetArr: Sheet[];
    queryArr: Query[];
    bookArr: Book[];
    mapArr: Map[];
    historyArr: History[];
    pendingArr: Pending[];
    init(): Promise<void>;
    loadEntities(): Promise<void>;
    buildEntities(entities: any): void;
    loadEntitySchema(entityName: string): Promise<any>;
    getTuid(name: string): Tuid;
    private buildTuids;
    private buildAccess;
    cacheTuids(defer: number): void;
    newAction(name: string, id: number): Action;
    private newTuid;
    newQuery(name: string, id: number): Query;
    private newBook;
    private newMap;
    private newHistory;
    private newPending;
    newSheet(name: string, id: number): Sheet;
    private fromType;
    private fromObj;
    private buildSheet;
    buildFieldTuid(fields: Field[], mainFields?: Field[]): void;
    buildArrFieldsTuid(arrFields: ArrFields[], mainFields: Field[]): void;
}
