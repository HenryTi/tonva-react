import { Uq } from '../uqMan';
export declare class IDCache {
    private uq;
    private queue;
    private cache;
    private waitingIds;
    private timeoutHandler;
    constructor(uq: Uq);
    getValue(id: number): object;
    private timeOut;
    private useId;
    private moveToHead;
    remove(id: number): void;
    resetCache(id: number): void;
}
