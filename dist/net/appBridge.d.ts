export interface UqToken {
    name: string;
    db: string;
    url: string;
    token: string;
}
export declare function logoutUqTokens(): void;
export declare function isBridged(): boolean;
export declare function buildAppUq(uq: string, uqOwner: string, uqName: string): Promise<void>;
export declare function getUqToken(uq: string): UqToken;
export declare function bridgeCenterApi(url: string, method: string, body: any): Promise<any>;
