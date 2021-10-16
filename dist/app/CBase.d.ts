import { Controller, WebNav } from "../vm";
import { CAppBase, IConstructor } from "./CAppBase";
export declare abstract class CBase<A extends CAppBase<U>, U> extends Controller {
    protected readonly _uqs: U;
    protected readonly _cApp: A;
    constructor(cApp: any);
    get uqs(): U;
    get cApp(): A;
    getUqRoles(uqName: string): Promise<string[]>;
    internalT(str: string): any;
    protected newC<T extends CBase<A, U>>(type: IConstructor<T>, ...param: any[]): T;
    newSub<O extends CBase<A, U>, T extends CSub<A, U, O>>(type: IConstructor<T>, ...param: any[]): T;
    getWebNav(): WebNav<any>;
}
export declare abstract class CSub<A extends CAppBase<U>, U, T extends CBase<A, U>> extends CBase<A, U> {
    protected _owner: T;
    constructor(owner: T);
    internalT(str: string): any;
    protected get owner(): T;
    getWebNav(): WebNav<any>;
}
