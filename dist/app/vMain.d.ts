import { VPage } from '../vm';
import { CAppBase } from "./CAppBase";
export declare class VUnsupportedUnit extends VPage<CAppBase<any>> {
    private params;
    open(params: {
        predefinedUnit: number;
        uqsLoadErrors: string[];
    }): Promise<void>;
    private page;
}
export declare class VUnitSelect extends VPage<CAppBase<any>> {
    open(): Promise<void>;
    private renderRow;
    private onRowClick;
    private page;
}
export declare class VErrorsPage extends VPage<CAppBase<any>> {
    open(errors: string[]): Promise<void>;
    private page;
}
export declare class VStartError extends VPage<CAppBase<any>> {
    open(error: any): Promise<void>;
    private page;
}
