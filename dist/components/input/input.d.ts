import { Component } from "react";
import { Rule } from "../inputRules";
export interface InputProps {
    className?: string;
    defaultValue?: any;
    disabled?: boolean;
    onValueChange?: (newValue: any, preValue: any, ruleMessage: string) => void;
    required?: boolean;
    containerClassName?: string;
    ruleClassName?: string;
    requiredFlagElement?: JSX.Element;
    rules?: ((value: any) => string[] | string)[];
}
export declare abstract class Input<P extends InputProps, V> extends Component<P> {
    static defaultRequiredFlagElement: JSX.Element;
    static defaultRuleClassName: string;
    protected readonly rules: Rule[];
    protected value: V;
    protected input: HTMLInputElement;
    protected abstract get type(): 'text' | 'number' | 'checkbox' | 'radio';
    protected get placeholder(): string;
    protected get max(): number;
    protected get min(): number;
    protected get maxLength(): number;
    protected get className(): string;
    protected requiredFlagElement?: JSX.Element;
    ruleMessage: string;
    constructor(props: P);
    private init;
    protected buildRules(): void;
    getValue(): V;
    setValue(v: V): void;
    render(): JSX.Element;
    onChange(): void;
    protected valueFromInput(): V;
    protected checkRules(): void;
    onBlur(): void;
    onFocus(): void;
}
