import { CLogin } from "./CLogin";
import { VPage } from "../vm";
import { nav } from "../components";
import { userApi } from "../net";

const waitingTime = '一小时';

export class VQuitUser extends VPage<CLogin> {
    header() {return '注销账号'}
    content() {
        return <div className="p-3">
            <div className="border p-3 rounded w-max-30c">
                注意：账号注销后，账号绑定手机、邮件等相关信息将被释放。账号无法将登录。<br/>
                请确认！
            </div>
            <div>
                <button className="btn btn-primary" onClick={this.goBack}>不注销</button>
                <button className="btn btn-outline-warning" onClick={this.quit}>我已了解，仍然注销</button>
            </div>
        </div>
    }

    private goBack = () => {
        this.closePage();
    }

    private quit = () => {
        this.openVPage(VQuitConfirm);
    }
}

class VQuitConfirm extends VPage<CLogin> {
    header() {return '注销账号'}
    content() {
        return <div className="p-3">
            <div className="border p-3 rounded w-max-30c">
                账号注销后，如果在{waitingTime}内容重新登录账号，账号自动恢复。
                {waitingTime}之后，账号绑定手机、邮件等相关信息将被释放。账号无法将登录。<br/>
                请再次确认！
            </div>
            <div>
                <button className="btn btn-primary" onClick={this.goBack}>不注销</button>
                <button className="btn btn-outline-warning" onClick={this.quit}>确认注销</button>
            </div>
        </div>
    }

    private goBack = () => {
        this.closePage(2);
    }

    private quit = async () => {
        await userApi.quitUser();
        this.openVPage(VQuitDone);
    }
}

class VQuitDone extends VPage<CLogin> {
    header() {return '注销已账号'}
    protected get back(): 'close' | 'back' | 'none' {return 'none'}
    content() {
        return <div className="p-3">
            <div className="border p-3 rounded w-max-30c">
                账号将在{waitingTime}后彻底注销。
                如果在{waitingTime}内容重新登录账号，注销操作自动取消。
                {waitingTime}之后，账号绑定手机、邮件等相关信息将被释放。账号无法将登录。<br/>
            </div>
            <div>
                <button className="btn btn-outline-warning" onClick={this.quit}>退出</button>
            </div>
        </div>
    }

    private quit = () => {
        nav.logout();
    }
}
