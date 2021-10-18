/// <reference types="react" />
import { CLogin } from "./CLogin";
import { VPage } from "../vm";
export declare class VQuitUser extends VPage<CLogin> {
    header(): string;
    content(): JSX.Element;
    private goBack;
    private quit;
}
