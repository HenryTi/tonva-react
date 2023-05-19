"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
// client code
var net_1 = __importDefault(require("net"));
function getToken() {
    return net_1.default.token;
}
exports.getToken = getToken;
/*
export async function fetchWithToken() {
    const url = 'http://a.com/b';
    const token = getToken();
    const param = {};
    let ret = await fetch(url, {
        method: 'POST',
        headers: {
            Authentication: token,
        },
        body: JSON.stringify(param),
    });
    return ret;
}

// server code
import * as jwt from 'jsonwebtoken';
// in default.json:
// "secret": "dddd-wwww",
const secret = config.get<string>('secret');
export interface UserToken {
    id: number;
    unit: number;
    guest: number;
    uqs: string;
    aon: string;    // app owner name
}

function checkAuth(req: Request, callback: (err, userToken: UserToken) => void) {
    let token = req.header('Authorization');
    if (token === undefined) {
        token = req.header('sec-websocket-protocol');
    }
    if (token === undefined) {
        console.log('not authorized request');
        if (callback !== undefined) callback('Unauthorized', undefined);
        return;
    }
    jwt.verify(token, secret, (err, userToken: UserToken) => {
        if (err === null) {
            (req as any).user = userToken;
            console.log("auth: %s", JSON.stringify(userToken));
        }
        if (callback !== undefined) callback(err, userToken);
    });
}

function auth(req: Request, res: Response, next: NextFunction): void {
    checkAuth(req, (err, userToken) => {
        if (err === null) {
            next();
            return;
        }
        res.status(401);
        res.json(
            {
                error: {
                    unauthorized: true,
                    message: 'Unauthorized'
                }
            });
    });
}

export function buildRouter(path: string, router: Router) {
    let router = Router();
    router.use('/sticky', auth, router);
    return router;
}
*/ 
//# sourceMappingURL=fetch-token.js.map