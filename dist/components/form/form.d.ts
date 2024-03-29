import * as React from 'react';
import { Schema, ItemSchema, UiSchema } from '../schema';
import 'font-awesome/css/font-awesome.min.css';
import { FormContext, Context } from './context';
import { InputRes } from '../../res';
export type FormButtonClick = (name: string, context: Context) => Promise<any>;
export type InputEnter = (name: string, context: Context) => Promise<any>;
export interface FormProps {
    className?: string;
    schema: Schema;
    uiSchema?: UiSchema;
    formData?: any;
    onButtonClick?: FormButtonClick;
    onEnter?: InputEnter;
    fieldLabelSize?: number;
    fieldLabelAlign?: 'left' | 'center' | 'right';
    requiredFlag?: boolean;
    beforeShow?: (formContext: FormContext) => void;
    res?: InputRes;
    Container?: (content: JSX.Element) => JSX.Element;
    FieldContainer?: (label: string | JSX.Element, content: JSX.Element) => JSX.Element;
    FieldClass?: string;
    ButtonClass?: string;
}
export declare class Form extends React.Component<FormProps> {
    readonly schema: Schema;
    readonly itemSchemas: {
        [name: string]: ItemSchema;
    };
    readonly uiSchema: UiSchema;
    readonly res?: InputRes;
    formContext: FormContext;
    private disposer;
    readonly data: any;
    readonly Container: (content: JSX.Element) => JSX.Element;
    readonly FieldContainer: (label: any, content: JSX.Element) => JSX.Element;
    readonly FieldClass: string;
    readonly ButtonClass: string;
    constructor(props: FormProps);
    private renderContent;
    private initData;
    private initDataItem;
    private watch;
    private calcSelectOrDelete;
    private arrItemOperated;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    buttonClick(buttonName: string): Promise<void>;
    protected DefaultContainer: (content: JSX.Element) => JSX.Element;
    protected DefaultFieldContainer: (label: string | JSX.Element, content: JSX.Element) => JSX.Element;
    protected DefaultFieldClass: string;
    protected DefaultButtonClass: string;
    protected DefaultRes: InputRes;
    ArrContainer: (label: any, content: JSX.Element) => JSX.Element;
    RowContainer: (content: JSX.Element) => JSX.Element;
    RowSeperator: JSX.Element;
}
