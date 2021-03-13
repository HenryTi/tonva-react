import { ID, IDX } from "../uq";
import { FieldItem } from "./fieldItem";
export interface IDUI {
    ID: ID | IDX;
    fields: {
        [name: string]: Partial<FieldItem>;
    };
}
