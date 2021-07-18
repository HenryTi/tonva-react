import { Input, InputProps } from "./input";
interface InputCheckBoxProps extends InputProps {
}
export declare class InputCheckBox extends Input<InputCheckBoxProps, boolean> {
    protected get type(): 'text' | 'number' | 'checkbox' | 'radio';
    protected valueFromInput(): boolean;
    onBlur(): void;
    onFocus(): void;
    protected logInputID(suffix?: string): void;
}
export {};
