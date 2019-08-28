import { HttpChannelUI } from './httpChannelUI';
import { Caller } from './caller';
export declare abstract class HttpChannel {
    private timeout;
    protected ui?: HttpChannelUI;
    protected hostUrl: string;
    protected apiToken: string;
    constructor(hostUrl: string, apiToken: string, ui?: HttpChannelUI);
    private startWait;
    private endWait;
    private showError;
    used(): void;
    xcall(urlPrefix: string, caller: Caller<any>): Promise<void>;
    get(url: string, params?: any): Promise<any>;
    post(url: string, params: any): Promise<any>;
    put(url: string, params: any): Promise<any>;
    delete(url: string, params: any): Promise<any>;
    fetch(url: string, options: any, resolve: (value?: any) => any, reject: (reason?: any) => void): Promise<void>;
    protected abstract innerFetch(url: string, options: any): Promise<any>;
    callFetch(url: string, method: string, body: any): Promise<any>;
    private buildOptions;
    protected buildHeaders(): Headers;
}
export declare class CenterHttpChannel extends HttpChannel {
    protected innerFetch(url: string, options: any): Promise<any>;
}
export declare class UqHttpChannel extends HttpChannel {
    protected innerFetch(url: string, options: any): Promise<any>;
}
