import { Controller } from "../../ui";
import { CUq } from "./uq";
export declare abstract class ControllerUq extends Controller {
    constructor(cUq: CUq, res: any);
    cUq: CUq;
}
