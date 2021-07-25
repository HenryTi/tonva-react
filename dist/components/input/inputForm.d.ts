/// <reference types="react" />
import { Input, InputProps } from "./input";
import { InputList } from "./inputList";
export interface WidgetProps extends InputProps {
    widgetType?: 'text' | 'number' | 'integer' | 'boolean';
}
export declare abstract class InputForm<T> {
    protected widgets: {
        [name: string]: WidgetProps;
    };
    protected inputLists: {
        [name: string]: InputList<any, any>;
    };
    readonly widgetViews: {
        [name: string]: Input<any, any>;
    };
    readonly values: T;
    constructor(values: T);
    protected initWidgets(): {
        [name: string]: WidgetProps;
    };
    protected initInputLists(): {
        [name: string]: InputList<any, any>;
    };
    abstract render(): JSX.Element;
    get hasError(): boolean;
    protected renderList(name: string): JSX.Element;
    protected renderInput(name: string): JSX.Element;
    protected renderInputBoolean(name: string, widgetProps: WidgetProps): JSX.Element;
    protected renderInputInteger(name: string, widgetProps: WidgetProps): JSX.Element;
    protected renderInputNumber(name: string, widgetProps: WidgetProps): JSX.Element;
    getValues(): T;
    setValue(name: string, v: any): void;
    getInputList(name: string): InputList<any, any>;
}
