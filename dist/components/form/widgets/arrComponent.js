"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var mobx_react_1 = require("mobx-react");
var classnames_1 = __importDefault(require("classnames"));
//import { ArrRow } from '../arrRow';
var context_1 = require("../context");
var unknown_1 = require("./unknown");
var factory_1 = require("./factory");
exports.ArrComponent = (0, mobx_react_1.observer)(function (_a) {
    var parentContext = _a.parentContext, arrSchema = _a.arrSchema, children = _a.children;
    var name = arrSchema.name, arr = arrSchema.arr;
    var data = parentContext.initData[name];
    var form = parentContext.form;
    var arrRowContexts = parentContext.getArrRowContexts(name);
    var ui = parentContext.getUiItem(name);
    var onDeleted = ui.onDeleted, onRestored = ui.onRestored;
    var arrLabel = name;
    var Templet;
    var selectable, deletable, restorable;
    var ArrContainer = form.ArrContainer, RowContainer = form.RowContainer, RowSeperator = form.RowSeperator, uiSchema = form.uiSchema;
    if (uiSchema !== undefined) {
        var formSelectable = uiSchema.selectable, formDeletable = uiSchema.deletable, formRestorable = uiSchema.restorable;
        if (selectable !== true)
            selectable = formSelectable;
        if (deletable !== true)
            deletable = formDeletable;
        if (restorable !== true)
            restorable = formRestorable;
    }
    if (ui !== undefined) {
        var widgetType = ui.widget, label = ui.label, arrSelectable = ui.selectable, arrDeletable = ui.deletable, arrRestorable = ui.restorable, ac = ui.ArrContainer, rc = ui.RowContainer, rs = ui.RowSeperator;
        if (arrSelectable !== undefined)
            selectable = arrSelectable;
        if (arrDeletable !== undefined)
            deletable = arrDeletable;
        if (arrRestorable !== undefined)
            restorable = arrRestorable;
        if (ac !== undefined)
            ArrContainer = ac;
        if (rc !== undefined)
            RowContainer = rc;
        if (rs !== undefined)
            RowSeperator = rs;
        Templet = ui.Templet;
        if (widgetType !== 'arr')
            return (0, unknown_1.Unknown)(arrSchema.type, widgetType, ['arr']);
        arrLabel = label || arrLabel;
    }
    var first = true;
    return ArrContainer(arrLabel, (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map(function (row, index) {
            var rowContext;
            var rowContent;
            var sep = undefined;
            if (first === false)
                sep = RowSeperator;
            else
                first = false;
            if (children !== undefined) {
                rowContext = new context_1.RowContext(parentContext, arrSchema, row, true);
                rowContent = (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
            }
            else {
                var typeofTemplet = typeof Templet;
                if (typeofTemplet === 'function') {
                    rowContext = new context_1.RowContext(parentContext, arrSchema, row, true);
                    rowContent = React.createElement((0, mobx_react_1.observer)(Templet), row);
                }
                else if (typeofTemplet === 'object') {
                    rowContext = new context_1.RowContext(parentContext, arrSchema, row, true);
                    rowContent = Templet;
                }
                else {
                    rowContext = new context_1.RowContext(parentContext, arrSchema, row, false);
                    rowContent = (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: arr.map(function (v, index) {
                            return (0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, factory_1.factory)(rowContext, v, undefined) }, v.name);
                        }) }, void 0);
                }
            }
            var rowKey = rowContext.rowKey;
            arrRowContexts[rowKey] = rowContext;
            var selectCheck, deleteIcon;
            if (selectable === true) {
                var onClick = function (evt) {
                    var checked = evt.target.checked;
                    row.$isSelected = checked;
                    var $source = row.$source;
                    if ($source !== undefined)
                        $source.$isSelected = checked;
                    rowContext.clearErrors();
                };
                selectCheck = (0, jsx_runtime_1.jsx)("div", __assign({ className: "form-row-checkbox" }, { children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", onClick: onClick, defaultChecked: row.$isSelected }, void 0) }), void 0);
            }
            var isDeleted = !(row.$isDeleted === undefined || row.$isDeleted === false);
            if (deletable === true) {
                var icon = isDeleted ? 'fa-undo' : 'fa-trash';
                var onDelClick = function () {
                    if (restorable === true) {
                        row.$isDeleted = !isDeleted;
                        var $source = row.$source;
                        if ($source !== undefined)
                            $source.$isDeleted = !isDeleted;
                        if (onRestored)
                            onRestored(row);
                    }
                    else {
                        var p = data.indexOf(row);
                        if (p >= 0)
                            data.splice(p, 1);
                        if (onDeleted)
                            onDeleted(row);
                    }
                    rowContext.clearErrors();
                };
                deleteIcon = (0, jsx_runtime_1.jsx)("div", __assign({ className: "form-row-edit text-info", onClick: onDelClick }, { children: (0, jsx_runtime_1.jsx)("i", { className: (0, classnames_1.default)('fa', icon, 'fa-fw') }, void 0) }), void 0);
            }
            var editContainer = selectable === true || deletable === true ?
                function (content) { return (0, jsx_runtime_1.jsx)("fieldset", __assign({ disabled: isDeleted }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('d-flex', { 'deleted': isDeleted, 'row-selected': row.$isSelected }) }, { children: [selectCheck, (0, jsx_runtime_1.jsx)("div", __assign({ className: selectable === true && deletable === true ? "form-row-content" : "form-row-content-1" }, { children: content }), void 0), deleteIcon] }), void 0) }), void 0); }
                :
                    function (content) { return content; };
            return (0, jsx_runtime_1.jsxs)(context_1.ContextContainer.Provider, __assign({ value: rowContext }, { children: [sep, RowContainer(editContainer((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(rowContext.renderErrors, {}, void 0), rowContent] }, void 0)))] }), rowKey);
        }) }, void 0));
});
//# sourceMappingURL=arrComponent.js.map