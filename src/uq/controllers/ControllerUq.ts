import { Controller } from "../../ui";
import { CUq } from "./uq";

export abstract class ControllerUq extends Controller {
    constructor(cUq: CUq, res:any) {
        super(res);
        this.cUq = cUq;
    }
    cUq: CUq;
}
