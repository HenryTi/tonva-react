import { Input, InputProps } from "./../input";
interface InputNumberProps extends InputProps {
    placeholder?: string;
    max?: number;
    min?: number;
}
export declare class InputNumber<P extends InputNumberProps> extends Input<P, number> {
    static defaultClassName: string;
    protected get type(): 'text' | 'number' | 'checkbox' | 'radio';
    protected get max(): number;
    protected get min(): number;
    protected get className(): string;
    protected buildRules(): void;
    protected parseValue(): number;
    protected valueFromInput(): number;
}
export interface InputIntegerProps extends InputNumberProps {
}
export declare class InputInteger<P extends InputIntegerProps> extends InputNumber<P> {
    protected buildRules(): void;
    protected parseValue(): number;
}
export {};
