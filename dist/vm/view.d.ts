import * as React from 'react';
import { Controller } from './controller';
import { VPage } from './vpage';
export declare abstract class View<C extends Controller> {
    protected controller: C;
    protected readonly res: any;
    protected readonly x: any;
    protected readonly t: (str: string) => any;
    constructor(controller: C);
    protected get isDev(): boolean;
    abstract render(param?: any): JSX.Element;
    protected renderVm(vm: new (controller: C) => View<C>, param?: any): JSX.Element;
    protected openVPage(vp: new (controller: C) => VPage<C>, param?: any): Promise<void>;
    protected event(type: string, value?: any): Promise<void>;
    vCall<C extends Controller>(vp: new (controller: C) => VPage<C>, param?: any): Promise<any>;
    protected returnCall(value: any): void;
    protected openPage(view: React.StatelessComponent<any>, param?: any): void;
    protected replacePage(view: React.StatelessComponent<any>, param?: any): void;
    protected openPageElement(page: JSX.Element): void;
    protected replacePageElement(page: JSX.Element): void;
    protected backPage(): void;
    protected closePage(level?: number): void;
    protected ceasePage(level?: number): void;
    protected removeCeased(): void;
    protected regConfirmClose(confirmClose: () => Promise<boolean>): void;
}