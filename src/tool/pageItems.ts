import {observable, IObservableArray, computed} from 'mobx';
import {uid} from './uid';

export abstract class PageItems<T> {
    constructor(itemObservable:boolean = false) {
        this._items = observable.array<T>([], {deep:itemObservable});
    }
	private isFirst: boolean = true;
	private pageItemAction: (item:T, results:{[name:string]:any[]}) => void;
	private itemConverter: (item:any, queryResults:{[name:string]:any[]}) => T;
    @observable loading: boolean = false;
    @observable private beforeLoad: boolean = true;
    @observable protected loaded: boolean = false;
    protected _items:IObservableArray<T>;
    @observable allLoaded: boolean = false;
    @computed get items():IObservableArray<T> {
        if (this.beforeLoad === true) return null;
        if (this.loaded === false) return undefined;
        return this._items;
	}
	
	setEachPageItem(pageItemAction: (item:T, results:{[name:string]:any[]}) => void) {
		this.pageItemAction = pageItemAction;
	}

	setItemConverter(itemConverter: (item:any, queryResults:{[name:string]:any[]}) => T) {
		this.itemConverter = itemConverter;
	}

    @observable topDiv:string;
    @observable bottomDiv:string;
    scrollToTop() {
        this.topDiv = '$$'+uid();
    }
    scrollToBottom() {
        this.bottomDiv = '$$'+uid();
    }

    protected param: any;
    protected firstSize = 100;
    protected pageStart:any = undefined;
    protected pageSize = 30;
    protected appendPosition:'head'|'tail' = 'tail';

	protected abstract async loadResults(param:any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}>;
	protected abstract setPageStart(item:T):void;
	
	protected async load(param:any, pageStart:any, pageSize:number):Promise<any[]> {
		let results = await this.loadResults(param, pageStart, pageSize);
		let pageList = results.$page;
		if (this.itemConverter) {
			let ret:T[] = [];
			let len = pageList.length;
			for (let i=0; i<len; i++) {
				let item = this.itemConverter(pageList[i], results);
				ret.push(item);
			}
			return ret;
		}
		if (this.pageItemAction !== undefined) {
			let len = pageList.length;
			for (let i=0; i<len; i++) {
				this.pageItemAction(pageList[i], results);
			}
		}
		return pageList;
	}

    reset() {
        this.isFirst = true;
        this.beforeLoad = true;
        this.loaded = false;
        this.param = undefined;
		this.allLoaded = false;
		this.pageStart = undefined;
        this._items.clear();
        //this.setPageStart(undefined);
    }

    append(item:T) {
        if (this.appendPosition === 'tail')
            this._items.unshift(item);
        else
            this._items.push(item);
    }

    async first(param:any):Promise<void> {
        this.reset();
        this.beforeLoad = false;
        this.param = param;
        await this.more();        
    }

    protected async onLoad(): Promise<void> {}
    protected async onLoaded(): Promise<void> {}

    async more():Promise<void> {
        if (this.allLoaded === true) return;
        if (this.loading === true) return;
        this.loading = true;
        await this.onLoad();
        if (this.pageStart === undefined) this.setPageStart(undefined);
        let pageSize = this.pageSize + 1;
        if (this.isFirst === true) {
            if (this.firstSize > this.pageSize) pageSize = this.firstSize+1;
        }
        let ret = await this.load(
                this.param, 
                this.pageStart,
				pageSize);
        this.loading = false;
        this.loaded = true;
		let len = ret.length;
        if ((this.isFirst===true && len>this.firstSize) ||
            (this.isFirst===false && len>this.pageSize))
        {
            this.allLoaded = false;
            --len;
            ret.splice(len, 1);
        }
        else {
            this.allLoaded = true;
        }
        if (len === 0) {
            this._items.clear();
            return;
        }
        this.setPageStart(ret[len-1]);
        if (this.appendPosition === 'tail') {
			this._items.push(...ret);
		}
        else {
			this._items.unshift(...ret.reverse());
		}
        this.isFirst = false;
        this.onLoaded();
    }
}
