/// <reference types="react" />
import { CLogin } from "./CLogin";
import { VPage } from "../vm";
declare abstract class VQuitUserBase extends VPage<CLogin> {
    protected abstract get note(): any;
    protected get button1Caption(): string;
    protected get button2Caption(): string;
    protected renderButton1(): JSX.Element;
    protected renderButton2(): JSX.Element;
    header(): string;
    content(): JSX.Element;
    protected onClickButton1(): void;
    protected onClickButton2(): void;
}
export declare class VQuitUser extends VQuitUserBase {
    protected get note(): any;
    protected get button2Caption(): string;
    protected onClickButton2(): void;
}
export {};
