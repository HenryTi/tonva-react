import { nav, RouteFunc, Hooks, Navigo, NamedRoute } from "../components";
import { t, setGlobalRes } from '../res';
import { Controller } from '../vm';
import { UQsMan, TVs } from "../uq";
import { centerApi, logoutApis } from "../net";
import { VErrorsPage, VStartError } from "./vMain";
import { User } from "../tool";
import { TryCode } from "tonva-core";

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
	/*
	app?: {
		name: string;
		version: string;
		ownerMap?: {[key:string]: string};
	};
	*/
    //appName: string;        // 格式: owner/appName
    version: string;        // 版本变化，缓存的uqs才会重载
    tvs?: TVs;
    //uqNameMap?: {[uqName:string]: string};      // uqName='owner/uq' 映射到内存简单名字：uq, 可以注明映射，也可以自动。有可能重
    loginTop?: JSX.Element;
    oem?: string;               // 用户注册发送验证码的oem厂家，默认同花
	privacy?: string;
	noUnit?: boolean;			// app的运行，不跟unit绑定
	htmlTitle?: string;
}

export interface Elements {
	[id:string]: (element: HTMLElement)=>void,
}

export abstract class CAppBase<U> extends Controller {
	private appConfig: AppConfig;
    protected _uqs: U;
	timezone: number;
	unitTimezone: number;
	tryCode: TryCode;

    constructor(config?: AppConfig) {
		super();
		this.appConfig = config || (nav.navSettings as AppConfig);
		if (this.appConfig) {
			let {app, uqs} = this.appConfig;
			if (app === undefined && uqs === undefined) {
				throw new Error('app or uqs must be defined in AppConfig');
			}
		}
		this.tryCode = new TryCode();
		this.tryCode.hello();
    }

    get uqs(): U {return this._uqs;}

	internalT(str:string):any {
		return t(str);
	}
	
	setRes(res:any) {
		setGlobalRes(res);
	}
	protected afterBuiltUQs(uqs: any) {}

	private uqsUser: any = '';
	protected async initUQs():Promise<any> {
		if (!this.appConfig) return;
		let {user} = nav;
		if (user === this.uqsUser) return;
		this.uqsUser = user;
		logoutApis();
		let retErrors = await UQsMan.build(this.appConfig);
		this._uqs = UQsMan._uqs;
		this.afterBuiltUQs(this._uqs);
		return retErrors;
	}

    protected async beforeStart():Promise<boolean> {
        try {
			this.onNavRoutes();
			let retErrors = await this.initUQs();
            if (retErrors !== undefined) {
                this.openVPage(VErrorsPage, retErrors);
                return false;
            }
            return true;
        }
        catch (err) {
            this.openVPage(VStartError, err);
            return false;
        }
    }
	protected async afterStart():Promise<void> {
		nav.resolveRoute();
		nav.onChangeLogin = (user:User) => this.onChangeLogin(user);
		this.onChangeLogin(this.user);
	}

    async userFromId(userId:number):Promise<any> {
        return await centerApi.userFromId(userId);
    }

	protected on(routeFunc:RouteFunc, hooks?:Hooks):Navigo;
	protected on(url:string, routeFunc:RouteFunc, hooks?:Hooks):Navigo;
	protected on(regex:RegExp, routeFunc:RouteFunc, hooks?:Hooks):Navigo;
	protected on(options: {[url:string]: RouteFunc|NamedRoute}):Navigo;
	protected on(...args:any[]):Navigo {
		return nav.on(args[0], args[1], args[2]);
	}

	protected onNavRoutes() {return;}

	async getUqRoles(uqName:string):Promise<string[]> {
		let {user} = nav;
		if (!user) return null;
		let {roles:userRoles} = nav.user;
		let uq = uqName.toLowerCase();
		let roles:string[];
		if (userRoles) {
			roles = userRoles[uq];
		}
		if (roles) return roles;

		roles = await UQsMan.getUqUserRoles(uq);
		if (!roles) roles = null;
		nav.setUqRoles(uq, roles);
		return roles;
	}

	isAdmin(roles:string[]):boolean {
		return this.isRole(roles, '$');
	}

	isRole(roles:string[], role:string):boolean {
		if (!roles) return false;
		role = role.toLowerCase();
		return roles.indexOf(role) >= 0;
	}

	protected onChangeLogin(user: User):Promise<void> {
		return;
	}
}
