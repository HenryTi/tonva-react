"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTsUqFolder = void 0;
var fs_1 = __importDefault(require("fs"));
var tool_1 = require("../../tool");
var buildUQ_1 = require("./buildUQ");
var fieldItem_1 = require("./fieldItem");
var tools_1 = require("./tools");
function buildTsUqFolder(uq, uqsFolder, uqAlias) {
    var uqFolder = uqsFolder + '/' + uqAlias;
    if (fs_1.default.existsSync(uqFolder) === false) {
        fs_1.default.mkdirSync(uqFolder);
    }
    var tsUq = tools_1.buildTsHeader();
    tsUq += buildUQ_1.buildUQ(uq, uqAlias);
    //overrideTsFile(uqFolder, uqAlias, tsUq);
    tools_1.overrideTsFile(uqFolder + "/" + uqAlias + ".ts", tsUq);
    saveTsIndexAndRender(uqFolder, uq, uqAlias);
}
exports.buildTsUqFolder = buildTsUqFolder;
function saveTsIndexAndRender(uqFolder, uq, uqAlias) {
    var imports = '', sets = '';
    var idArr = uq.idArr, idxArr = uq.idxArr, ixArr = uq.ixArr;
    for (var _i = 0, _a = __spreadArrays(idArr, idxArr, ixArr); _i < _a.length; _i++) {
        var i = _a[_i];
        var cName = tool_1.capitalCase(i.name);
        imports += "\nimport * as " + cName + " from './" + cName + ".ui';";
        sets += "\n\tObject.assign(uq." + cName + ", " + cName + ");";
        var tsUI = "import { Res, UI } from \"tonva-react\";\n// eslint-disable-next-line @typescript-eslint/no-unused-vars\nimport { FieldItem, FieldItemNumber, FieldItemString, FieldItemId } from \"tonva-react\";\nimport { " + cName + " } from \"./" + uqAlias + "\";\n\n/*--fields--*/\nconst fields = {\n};\n/*==fields==*/\n\nexport const fieldArr: FieldItem[] = [\n];\n\nexport const ui: UI = {\n\tlabel: \"" + cName + "\",\n\tfieldArr,\n\tfields,\n};\n\nexport const res: Res<any> = {\n\tzh: {\n\t},\n\ten: {\n\t}\n};\n\nexport function render(item: " + cName + "):JSX.Element {\n\treturn <>{JSON.stringify(item)}</>;\n};\n";
        //let path = `${uqFolder}/${file}.${suffix}`;
        var path = uqFolder + "/" + cName + ".ui.tsx";
        tools_1.saveTsFileIfNotExists(path, tsUI);
        var fields = buildFields(i);
        var tsFieldArr = buildFieldArr(i);
        replaceTsFileFields(path, fields);
        var tsImportFieldItemsBegin = 'import { FieldItem, ';
        var tsImportFieldItemsEnd = ' } from "tonva-react";';
        var tsImportFieldItems = 'FieldItemInt, FieldItemNum, FieldItemString, FieldItemId';
        replaceTsFileString(path, {
            begin: tsImportFieldItemsBegin,
            end: tsImportFieldItemsEnd,
            content: tsImportFieldItemsBegin + tsImportFieldItems + tsImportFieldItemsEnd,
        });
        replaceTsFileString(path, { begin: 'export const fieldArr: FieldItem[] = [\n', end: '\n];\n', content: tsFieldArr });
    }
    var tsIndex = "import { UqExt as Uq } from './" + uqAlias + "';" + imports + "\n\nexport function setUI(uq: Uq) {" + sets + "\n}\nexport * from './" + uqAlias + "';\n";
    tools_1.overrideTsFile(uqFolder + "/index.ts", tsIndex);
}
function buildFields(i) {
    switch (i.typeName) {
        case 'id': return buildIDFields(i);
        case 'idx': return buildIDXFields(i);
        case 'ix': return buildIXFields(i);
    }
}
;
function buildIDFields(ID) {
    var _a;
    var ret = {};
    var schema = ID.schema;
    var keys = schema.keys, fields = schema.fields;
    var _loop_1 = function (f) {
        var name_1 = f.name;
        var isKey = ((_a = keys) === null || _a === void 0 ? void 0 : _a.findIndex(function (v) { return v.name === name_1; })) >= 0;
        ret[name_1] = fieldItem_1.buildFieldItem(f, isKey);
    };
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var f = fields_1[_i];
        _loop_1(f);
    }
    return ret;
}
function buildIDXFields(IDX) {
    var _a;
    var ret = {};
    var schema = IDX.schema;
    var keys = schema.keys, fields = schema.fields;
    var _loop_2 = function (f) {
        var name_2 = f.name;
        var isKey = ((_a = keys) === null || _a === void 0 ? void 0 : _a.findIndex(function (v) { return v.name === name_2; })) >= 0;
        ret[name_2] = fieldItem_1.buildFieldItem(f, isKey);
    };
    for (var _i = 0, fields_2 = fields; _i < fields_2.length; _i++) {
        var f = fields_2[_i];
        _loop_2(f);
    }
    return ret;
}
;
function buildIXFields(IX) {
    var _a;
    var ret = {};
    var schema = IX.schema;
    var keys = schema.keys, fields = schema.fields;
    var _loop_3 = function (f) {
        var name_3 = f.name;
        var isKey = ((_a = keys) === null || _a === void 0 ? void 0 : _a.findIndex(function (v) { return v.name === name_3; })) >= 0;
        ret[name_3] = fieldItem_1.buildFieldItem(f, isKey);
    };
    for (var _i = 0, fields_3 = fields; _i < fields_3.length; _i++) {
        var f = fields_3[_i];
        _loop_3(f);
    }
    return ret;
}
;
function buildFieldArr(i) {
    var ts = 'export const fieldArr: FieldItem[] = [\n\t';
    switch (i.typeName) {
        case 'id':
            ts += buildIDFieldArr(i);
            break;
        case 'idx':
            ts += buildIDXFieldArr(i);
            break;
        case 'ix':
            ts += buildIXFieldArr(i);
            break;
    }
    return ts += '\n];\n';
}
function buildIDFieldArr(i) {
    var schema = i.schema;
    var ts = '';
    for (var _i = 0, _a = schema.fields; _i < _a.length; _i++) {
        var f = _a[_i];
        var name_4 = f.name;
        if (name_4 === 'id')
            continue;
        ts += "fields." + name_4 + ", ";
    }
    return ts;
}
function buildIDXFieldArr(i) {
    var schema = i.schema;
    var ts = '';
    for (var _i = 0, _a = schema.fields; _i < _a.length; _i++) {
        var f = _a[_i];
        var name_5 = f.name;
        if (name_5 === 'id')
            continue;
        ts += "fields." + name_5 + ", ";
    }
    return ts;
}
function buildIXFieldArr(i) {
    var schema = i.schema;
    var ts = '';
    for (var _i = 0, _a = schema.fields; _i < _a.length; _i++) {
        var f = _a[_i];
        var name_6 = f.name;
        if (name_6 === 'id')
            continue;
        if (name_6 === 'id2')
            continue;
        ts += "fields." + name_6 + ", ";
    }
    return ts;
}
function replaceTsFileFields(path, fields) {
    var text = fs_1.default.readFileSync(path).toString();
    var startStr = '\n/*--fields--*/';
    var endStr = '\n/*==fields==*/\n';
    var start = text.indexOf(startStr);
    if (start > 0) {
        var end = text.indexOf(endStr, start + startStr.length);
        if (end > 0) {
            var lBrace = text.indexOf('{', start + startStr.length);
            var rBrace = text.lastIndexOf('}', end);
            var oldText = text.substring(lBrace, rBrace + 1);
            var fieldsText = buildFieldsText(fields, oldText);
            text = text.substring(0, start)
                + startStr + '\nconst fields = {'
                + fieldsText
                + '\n};'
                + text.substring(end);
            fs_1.default.writeFileSync(path, text);
        }
    }
}
var fieldItemReplaceProps = ['label', 'placeholder', 'widget', 'type'];
function buildFieldsText(fields, oldText) {
    var ret = '';
    for (var i in fields) {
        var field = fields[i];
        setFieldOldProp(field, oldText);
        ret += buildFieldText(field);
    }
    return ret;
}
function setFieldOldProp(field, text) {
    var fieldStart = field.name + ':';
    var start = text.indexOf('\t' + fieldStart);
    if (start < 0)
        start = text.indexOf('\n' + fieldStart);
    if (start < 0)
        start = text.indexOf(' ' + fieldStart);
    if (start < 0)
        return;
    ++start;
    var end = text.indexOf('}', start + fieldStart.length);
    if (end < 0)
        return;
    var fieldText = text.substring(start + fieldStart.length, end + 1);
    /* eslint no-eval: 0 */
    var obj = eval('(' + fieldText + ')');
    fieldItemReplaceProps.forEach(function (v) {
        var prop = obj[v];
        if (!prop)
            return;
        field[v] = prop;
    });
}
function buildFieldText(field) {
    var $FieldItemType = field.$FieldItemType;
    delete field.$FieldItemType;
    var ret = '\n\t' + field.name + ': ';
    var json = JSON.stringify(field, null, '\t\t');
    json = json.replace('}', '\t}');
    ret += json;
    return ret + ' as ' + $FieldItemType + ',';
}
;
function replaceTsFileString(path, sec) {
    var text = fs_1.default.readFileSync(path).toString();
    var begin = sec.begin, end = sec.end, content = sec.content;
    var b = text.indexOf(begin);
    if (b < 0)
        return;
    var e = text.indexOf(end, b + begin.length - 1);
    if (e < 0)
        return;
    text = text.substring(0, b) + content + text.substr(e + end.length);
    fs_1.default.writeFileSync(path, text);
}
//# sourceMappingURL=buildTsUqFolder.js.map