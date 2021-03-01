import { UqMan } from "../uqMan";
export declare const red = "\u001B[41m%s\u001B[0m";
export declare let lastBuildTime: number;
export declare const uqTsSrcPath = "src/UqApp";
export declare function saveSrcTsFileIfNotExists(fileName: string, suffix: string, content: string): void;
export declare function saveTsFile(fileName: string, content: string, suffix?: string): void;
export declare function overrideTsFile(path: string, content: string): void;
export declare function saveTsFileIfNotExists(tsFilePath: string, content: string): void;
export declare function buildTsHeader(): string;
export declare function entityName(s: string): string;
export declare function getNameFromUq(uqMan: UqMan): {
    devName: string;
    uqName: string;
};
