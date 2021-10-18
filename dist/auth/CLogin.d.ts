import { User } from '../tool';
import { Login } from '../components';
import { Controller, VPage } from "../vm";
export declare class CLogin extends Controller implements Login {
    protected internalStart(): Promise<void>;
    showLogin(callback?: (user: User) => Promise<void>, withBack?: boolean): Promise<void>;
    showLogout(callback?: () => Promise<void>): Promise<void>;
    protected getVChangePassword(): new (cLogin: CLogin) => VPage<CLogin>;
    showChangePassword(): Promise<void>;
    showQuitUser(): Promise<void>;
}
