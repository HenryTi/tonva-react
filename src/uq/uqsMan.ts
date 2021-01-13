import { LocalMap, LocalCache, env } from '../tool';
import { UqData, UqAppData, CenterAppApi } from '../net';
import { UqMan } from './uqMan';
import { TuidImport, TuidInner } from './tuid';
import { nav } from '../components';
import { AppConfig } from '../app';

export interface TVs {
    [uqName:string]: {
        [tuidName: string]: (values: any) => JSX.Element;
    }
}

export class UQsMan {
	static _uqs: any;
	static value: UQsMan;
	static uqOwnerMap: {[key:string]:string};

	static async build(appConfig: AppConfig) {
		let {app, uqs, tvs} = appConfig;
		let retErrors:string[];
		if (app) {
			let {name, version, ownerMap} = app;
			UQsMan.uqOwnerMap = ownerMap || {};
			for (let i in ownerMap) ownerMap[i.toLowerCase()] = ownerMap[i];
			retErrors = await UQsMan.load(name, version, tvs);
		}
		else if (uqs) {
			let uqNames:{owner:string; name:string; version:string}[] = [];
			let map:{[owner:string]: string} = UQsMan.uqOwnerMap = {};
			for (let owner in uqs) {
				let ownerObj = uqs[owner];
				for (let name in ownerObj) {
					let v = ownerObj[name];
					if (name === '$') {
						map[owner.toLowerCase()] = v;
						continue;
					}
					uqNames.push({owner, name, version: v});
				}
			}
			retErrors = await UQsMan.loadUqs(uqNames, tvs);
		}
		else {
			throw new Error('either uqs or app must be defined in AppConfig');
		}
		return retErrors;
	}

	// 返回 errors, 每个uq一行
	private static async load(tonvaAppName:string, version:string, tvs:TVs):Promise<string[]> {
		let uqsMan = UQsMan.value = new UQsManApp(tonvaAppName, tvs);
        let {appOwner, appName} = uqsMan;
        let {localData} = uqsMan;
        let uqAppData:UqAppData = localData.get();
        if (!uqAppData || uqAppData.version !== version) {
			uqAppData = await loadAppUqs(appOwner, appName);
			if (!uqAppData.id) {
				return [
					`${appOwner}/${appName}不存在。请仔细检查app全名。`
				];
			}
            uqAppData.version = version;
            localData.set(uqAppData);
            // 
            for (let uq of uqAppData.uqs) uq.newVersion = true;
        }
        let {id, uqs} = uqAppData;
		uqsMan.id = id;
		//console.error(uqAppData);
		let ownerProfixMap: {[owner: string]: string};
		return uqsMan.buildUqs(uqs);
	}

	// 返回 errors, 每个uq一行
	private static async loadUqs(uqNames: {owner:string; name:string;version:string}[], tvs:TVs):Promise<string[]> {
		let uqsMan = UQsMan.value = new UQsMan(tvs);
		let uqs = await loadUqs(uqNames);
		return uqsMan.buildUqs(uqs);
	}

    private collection: {[uqName: string]: UqMan};
    private readonly tvs: TVs;

    protected constructor(tvs:TVs) {
        this.tvs = tvs || {};
        this.buildTVs();
        this.collection = {};
    }

	private async buildUqs(uqDataArr:UqData[]):Promise<string[]> {
		//let uqsMan: UQsMan = UQsMan.value;
        await this.init(uqDataArr);
        let retErrors = await this.load();
        if (retErrors.length === 0) {
            retErrors.push(...this.setTuidImportsLocal());
            if (retErrors.length === 0) {
                UQsMan._uqs = this.buildUQs();
                return;
            }
        }
		//UQsMan.errors = retErrors;
		return retErrors;
	}

	// to be removed in the future
	/*
    addUq(uq: UqMan) {
        this.collection[uq.name] = uq;
	}
	*/

	static uq(uqLower: string): UqMan {
		return UQsMan.value.collection[uqLower];
	}
	
	static async getUqUserRoles(uqLower:string):Promise<string[]> {
		let uqMan = UQsMan.value.collection[uqLower];
		if (uqMan === undefined) return null;
		let roles = await uqMan.getRoles();
		return roles;
	}

    private buildTVs() {
        for (let i in this.tvs) {
            let uqTVs = this.tvs[i];
            if (uqTVs === undefined) continue;
            let l = i.toLowerCase();
            if (l === i) continue;
            this.tvs[l] = uqTVs;
            for (let j in uqTVs) {
                let en = uqTVs[j];
                if (en === undefined) continue;
                let lj = j.toLowerCase();
                if (lj === j) continue;
                uqTVs[lj] = en;
            }
        }
    }

    async init(uqsData:UqData[]):Promise<void> {
        let promiseInits: PromiseLike<void>[] = uqsData.map(uqData => {
			let {uqOwner, uqName} = uqData;
			let uqFullName = uqOwner + '/' + uqName;
			//let uqUI = this.ui.uqs[uqFullName] as UqUI || {};
			//let cUq = this.newCUq(uqData, uqUI);
			//this.cUqCollection[uqFullName] = cUq;
			//this.uqs.addUq(cUq.uq);
			let uq = new UqMan(this, uqData, undefined, this.tvs[uqFullName] || this.tvs[uqName]);
			uq.ownerProfix = UQsMan.uqOwnerMap[uqOwner.toLowerCase()];
			this.collection[uqFullName] = uq;
			let lower = uqFullName.toLowerCase();
			if (lower !== uqFullName) {
				this.collection[lower] = uq;
			}
			return uq.init();
		});
        await Promise.all(promiseInits);
    }

    async load(): Promise<string[]> {
        let retErrors:string[] = [];
		let promises: PromiseLike<string>[] = [];
		let lowerUqNames:string[] = [];
		// collection有小写名字，还有正常名字
        for (let i in this.collection) {
			let lower = (i as string).toLowerCase();
			if (lowerUqNames.indexOf(lower) >= 0) continue;
			lowerUqNames.push(lower);
            let uq = this.collection[i];
            promises.push(uq.loadEntities());
		}
		let results = await Promise.all(promises);
		console.log('uqsMan.load ', results);
        for (let result of results)
        {
            let retError = result; // await cUq.loadSchema();
            if (retError !== undefined) {
                retErrors.push(retError);
                continue;
            }
		}
        return retErrors;
    }

    buildUQs(): any {
        let that = this;
        let uqs:any = {};
        for (let i in this.collection) {
            let uqMan = this.collection[i];
            //let n = uqMan.name;
            let {uqName, ownerProfix} = uqMan;
            let l = uqName.toLowerCase();
			let uqKey:string = uqName.split(/[-._]/).join('').toLowerCase();
			if (ownerProfix) uqKey = ownerProfix + uqKey;
            let entities = uqMan.entities;
            let keys = Object.keys(entities);
            for (let key of keys) {
                let entity = entities[key];
				let {name} = entity;
				entities[name.toLowerCase()] = entity;
            }
            let proxy = uqs[l] = new Proxy(entities, {
                get: function(target, key, receiver) {
					let lk = (key as string).toLowerCase();
					if (lk === '$name') {
						return uqMan.name;
					}
                    let ret = target[lk];
                    if (ret !== undefined) return ret;
					debugger;
					let err = `entity ${uqName}.${String(key)} not defined`;
                    console.error(err);
                    that.showReload('UQ错误：' + err);
                    return undefined;
                }
			})
			if (uqKey !== l) uqs[uqKey] = proxy;
        }
        //let uqs = this.collection;
        return new Proxy(uqs, {
            get: function (target, key, receiver) {
                let lk = (key as string).toLowerCase();
                let ret = target[lk];
                if (ret !== undefined) return ret;
                /*
                for (let i in uqs) {
                    if (i.toLowerCase() === lk) {
                        return uqs[i];
                    }
                }*/
                debugger;
                console.error('error in uqs');
                that.showReload(`代码错误：新增 uq ${String(key)}`);
                return undefined;
            },
        });
	}
	
	getUqCollection() {
		return this.collection;
	}

    private showReload(msg: string) {
		for (let i in this.collection) {
			this.collection[i].localMap.removeAll();
		}
        nav.showReloadPage(msg);
    }

    setTuidImportsLocal():string[] {
        let ret:string[] = [];
        for (let i in this.collection) {
            let uq = this.collection[i];
            for (let tuid of uq.tuidArr) {
                if (tuid.isImport === true) {
                    let error = this.setInner(tuid as TuidImport);
                    if (error) ret.push(error);
                }
            }
        }
        return ret;
    }

    private setInner(tuidImport: TuidImport):string {
        let {from} = tuidImport;
        let fromName = from.owner + '/' + from.uq;
        let uq = this.collection[fromName];
        if (uq === undefined) {
            //debugger;
            return `setInner(tuidImport: TuidImport): uq ${fromName} is not loaded`;
        }
        let iName = tuidImport.name
        let tuid = uq.tuid(iName);
        if (tuid === undefined) {
            //debugger;
            return `setInner(tuidImport: TuidImport): uq ${fromName} has no Tuid ${iName}`;
        }
        if (tuid.isImport === true) {
            //debugger;
            return `setInner(tuidImport: TuidImport): uq ${fromName} Tuid ${iName} is import`;
        }
        tuidImport.setFrom(tuid as TuidInner);
    }
}

class UQsManApp extends UQsMan {
    readonly appOwner: string;
    readonly appName: string;
    readonly localMap: LocalMap;
    readonly localData: LocalCache;
    id: number;

	constructor(tonvaAppName:string, tvs:TVs) {
		super(tvs);
        let parts = tonvaAppName.split('/');
        if (parts.length !== 2) {
            throw new Error('tonvaApp name must be / separated, owner/app');
        }
        this.appOwner = parts[0];
        this.appName = parts[1];
        this.localMap = env.localDb.map(tonvaAppName);
        this.localData = this.localMap.child('uqData');
	}
}

async function loadAppUqs(appOwner:string, appName:string): Promise<UqAppData> {
    let centerAppApi = new CenterAppApi('tv/', undefined);
    let ret = await centerAppApi.appUqs(appOwner, appName);
    return ret;
}

async function loadUqs(uqs: {owner:string; name:string; version:string}[]): Promise<UqData[]> {
	let a:[{a:string, b:string}, string];
    let centerAppApi = new CenterAppApi('tv/', undefined);
    let ret = await centerAppApi.uqs(uqs);
    return ret;
}
