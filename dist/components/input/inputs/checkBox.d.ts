import { Input, InputProps } from "../input";
export interface InputCheckBoxProps extends InputProps {
}
export declare class InputCheckBox extends Input<InputCheckBoxProps, boolean> {
    static defaultClassName: string;
    protected get type(): 'text' | 'number' | 'checkbox' | 'radio';
    protected get className(): string;
    protected valueFromInput(): boolean;
    onBlur(): void;
    onFocus(): void;
    setValue(v: boolean): void;
}
