"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTsVMain = void 0;
var tools_1 = require("./tools");
function buildTsVMain() {
    return tools_1.buildTsHeader() + "\nimport { VPage, Page } from 'tonva-react';\nimport { CApp } from './CApp';\n\nexport class VMain extends VPage<CApp> {\n\tasync open(param?: any, onClosePage?: (ret:any)=>void) {\n\t\tthis.openPage(this.render, param, onClosePage);\n\t}\n\n\trender = (param?: any): JSX.Element => {\n\t\treturn <Page header=\"TEST\">\n\t\t\t<div className=\"m-3\">\n\t\t\t\t<div>{this.renderMe()}</div>\n\t\t\t\t<div className=\"mb-5\">\u540C\u82B1\u6837\u4F8B\u4E3B\u9875\u9762</div>\n\t\t\t</div>\n\t\t</Page>;\n\t}\n}\n";
}
exports.buildTsVMain = buildTsVMain;
//# sourceMappingURL=tsVMain.js.map