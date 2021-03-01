import { ID } from "../uq";
import { FieldItem } from "./fieldItem";
export interface FormUI {
    ID: ID;
    fields: {
        [name: string]: Partial<FieldItem>;
    };
}
