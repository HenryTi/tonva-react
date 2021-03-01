import { AppConfig, CAppBase } from './CAppBase';
export declare function start(CApp: new (config: AppConfig) => CAppBase<any>, appConfig: AppConfig, isUserLogin?: boolean): Promise<void>;
