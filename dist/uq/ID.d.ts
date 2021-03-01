import { Res } from "../res";
import { Entity } from "./entity";
import { Render, UI, FieldItems } from '../ui';
export declare class UqID<M> extends Entity {
    get typeName(): string;
    readonly fieldItems: FieldItems;
    readonly ui: UI;
    readonly render: Render<M>;
    readonly res: Res<any>;
}
export declare class ID extends UqID<any> {
}
export declare class UqIDX<M> extends Entity {
    get typeName(): string;
    readonly fieldItems: FieldItems;
    readonly ui: UI;
    readonly render: Render<M>;
    readonly res: Res<any>;
}
export declare class IDX extends UqIDX<any> {
}
export declare class UqIX<M> extends Entity {
    get typeName(): string;
    readonly fieldItems: FieldItems;
    readonly ui: UI;
    readonly render: Render<M>;
    readonly res: Res<any>;
}
export declare class IX extends UqIX<any> {
}
