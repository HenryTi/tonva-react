import { AppConfig } from '../app';
export interface UqOptions extends Partial<AppConfig> {
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
}
export declare function buildUqs(options: UqOptions): Promise<void>;
