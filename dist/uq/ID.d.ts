import { TFunc } from "../res";
import { Entity } from "./entity";
import { Render, UI } from '../ui';
export declare abstract class IDXEntity<M> extends Entity {
    readonly ui: UI;
    readonly render: Render<M>;
    readonly t: TFunc;
}
export declare class UqID<M> extends IDXEntity<M> {
    get typeName(): string;
    NO(): Promise<string>;
}
export declare class ID extends UqID<any> {
}
export declare class UqIDX<M> extends IDXEntity<M> {
    get typeName(): string;
}
export declare class IDX extends UqIDX<any> {
}
export declare class UqIX<M> extends IDXEntity<M> {
    get typeName(): string;
}
export declare class IX extends UqIX<any> {
}
