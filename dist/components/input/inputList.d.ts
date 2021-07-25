/// <reference types="react" />
import { InputForm } from "./inputForm";
export declare class InputList<T, F extends InputForm<T>> {
    private readonly keyFromItem;
    private readonly createInputForm;
    readonly itemForms: F[];
    readonly valuesArr: T[];
    constructor(valuesArr: T[], keyFromItem: (item: T) => number | string, createInputForm: (item: T) => F);
    protected renderItemContainer(itemElement: JSX.Element): JSX.Element;
    addItem(item: T, index?: number): void;
    getValuesArr(): any[];
    render(): JSX.Element;
    get hasError(): boolean;
    setEachValue<T>(name: string, value: T): void;
}
