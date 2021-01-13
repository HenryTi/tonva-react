/// <reference types="react" />
import { RouteFunc, Hooks, Navigo, NamedRoute } from "../components";
import { Controller } from '../vm';
import { TVs } from "../uq";
export interface IConstructor<T> {
    new (...args: any[]): T;
}
export interface AppConfig {
    app?: {
        name: string;
        version: string;
        ownerMap?: {
            [key: string]: string;
        };
    };
    uqs?: {
        [owner: string]: {
            [name: string]: string;
        };
    };
    tvs?: TVs;
    loginTop?: JSX.Element;
    oem?: string;
    privacy?: string;
    noUnit?: boolean;
    htmlTitle?: string;
}
export interface Elements {
    [id: string]: (element: HTMLElement) => void;
}
export declare abstract class CAppBase extends Controller {
    private appConfig;
    protected _uqs: any;
    constructor(config?: AppConfig);
    get uqs(): any;
    internalT(str: string): any;
    protected setRes(res: any): void;
    protected beforeStart(): Promise<boolean>;
    protected afterStart(): Promise<void>;
    userFromId(userId: number): Promise<any>;
    protected on(routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    protected on(url: string, routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    protected on(regex: RegExp, routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    protected on(options: {
        [url: string]: RouteFunc | NamedRoute;
    }): Navigo;
    protected onNavRoutes(): void;
    private showUnsupport;
    getUqRoles(uqName: string): Promise<string[]>;
    isAdmin(roles: string[]): boolean;
    isRole(roles: string[], role: string): boolean;
}
