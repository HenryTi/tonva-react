/// <reference types="react" />
import { RouteFunc, Hooks, Navigo, NamedRoute } from "../components";
import { Controller } from '../vm';
import { TVs } from "../uq";
import { User } from "../tool";
export interface IConstructor<T> {
    new (...args: any[]): T;
}
export interface DevConfig {
    name: string;
    alias?: string;
    memo?: string;
}
export interface UqConfig {
    dev: DevConfig;
    name: string;
    alias?: string;
    version?: string;
    memo?: string;
}
export interface UqsConfig {
    app?: {
        dev: DevConfig;
        name: string;
        version?: string;
    };
    uqs?: UqConfig[];
}
export interface AppConfig extends UqsConfig {
    version: string;
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
export declare abstract class CAppBase<U> extends Controller {
    private appConfig;
    protected _uqs: U;
    timezone: number;
    unitTimezone: number;
    constructor(config?: AppConfig);
    get uqs(): U;
    internalT(str: string): any;
    setRes(res: any): void;
    protected afterBuiltUQs(uqs: any): void;
    private uqsUser;
    protected initUQs(): Promise<any>;
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
    getUqRoles(uqName: string): Promise<string[]>;
    isAdmin(roles: string[]): boolean;
    isRole(roles: string[], role: string): boolean;
    protected onChangeLogin(user: User): Promise<void>;
}
