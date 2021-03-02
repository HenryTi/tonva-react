/// <reference types="react" />
import { Widget } from './widget';
import { UiIdItem } from '../../schema';
export declare class IdWidget extends Widget {
    protected get ui(): UiIdItem;
    setReadOnly(value: boolean): void;
    setDisabled(value: boolean): void;
    protected onClick: () => Promise<void>;
    setValue(value: any): void;
    render(): JSX.Element;
}
