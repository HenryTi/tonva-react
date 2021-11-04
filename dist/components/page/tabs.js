"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootTabs = exports.Tabs = exports.TabsView = exports.TabCaptionComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var classnames_1 = __importDefault(require("classnames"));
require("../../css/va-tab.css");
var scrollView_1 = require("./scrollView");
var Tab = /** @class */ (function () {
    function Tab() {
        this.loaded = false;
        this.selected = false;
        (0, mobx_1.makeObservable)(this, {
            loaded: mobx_1.observable,
            selected: mobx_1.observable,
        });
    }
    Object.defineProperty(Tab.prototype, "content", {
        get: function () {
            if (this.load && this.loaded === false)
                return null;
            if (this.selected === false)
                return this._content;
            if (!this._content) {
                if (this.contentBuilder !== undefined) {
                    this._content = this.contentBuilder();
                }
                else if (this.page !== undefined) {
                    this._content = this.page.content();
                }
                else {
                    this._content = (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-5" }, { children: "tab \u5E94\u8BE5\u5B9A\u4E49content\u6216\u8005page" }), void 0);
                }
            }
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Tab.prototype.shown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.onShown !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onShown()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(this.load !== undefined)) return [3 /*break*/, 4];
                        if (!(this.loaded === false)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.load()];
                    case 3:
                        _a.sent();
                        (0, mobx_1.runInAction)(function () {
                            _this.loaded = true;
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Tab;
}());
var TabCaptionComponent = function (label, icon, color) { return (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'd-flex justify-content-center align-items-center flex-column cursor-pointer ' + color }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("i", { className: 'fa fa-lg fa-' + icon }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("small", { children: label }, void 0)] }), void 0); };
exports.TabCaptionComponent = TabCaptionComponent;
//export const TabCaption = TabCaptionComponent;
var TabsView = /** @class */ (function () {
    function TabsView(props) {
        var _this = this;
        this.tabClick = function (tab) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!tab) {
                            tab = this.selectedTab;
                            if (tab === undefined) {
                                if (this.tabArr === undefined)
                                    return [2 /*return*/];
                                if (this.tabArr.length === 0)
                                    return [2 /*return*/];
                                tab = this.tabArr[0];
                            }
                        }
                        (0, mobx_1.runInAction)(function () {
                            _this.selectedTab.selected = false;
                            tab.selected = true;
                            _this.selectedTab = tab;
                        });
                        return [4 /*yield*/, tab.shown()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.tabs = (0, mobx_react_1.observer)(function () {
            var _a = _this.props, tabPosition = _a.tabPosition, borderColor = _a.borderColor;
            var bsCur, bsTab;
            if (borderColor) {
                bsCur = {
                    borderColor: borderColor,
                    borderStyle: 'solid',
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                };
                bsTab = {
                    borderColor: borderColor,
                    borderStyle: 'solid',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    cursor: 'pointer',
                };
                if (tabPosition === 'top') {
                    bsCur.borderBottomWidth = 0;
                    bsCur.borderTopLeftRadius = 10;
                    bsCur.borderTopRightRadius = 10;
                    bsTab.borderTopWidth = 0;
                }
                else {
                    bsCur.borderTopWidth = 0;
                    bsCur.borderBottomLeftRadius = 10;
                    bsCur.borderBottomRightRadius = 10;
                    bsTab.borderBottomWidth = 0;
                }
            }
            var cn = (0, classnames_1.default)('tv-tabs', _this.tabBg, _this.sep, 'tv-tabs-' + _this.size);
            var tabs = (0, jsx_runtime_1.jsx)("div", __assign({ className: cn }, { children: _this.tabArr.map(function (v, index) {
                    var selected = v.selected, caption = v.caption, notify = v.notify;
                    var notifyCircle;
                    if (notify !== undefined) {
                        var num = typeof notify === 'number' ? notify : notify.get();
                        if (num !== undefined) {
                            if (num > 0)
                                notifyCircle = (0, jsx_runtime_1.jsx)("u", { children: num > 99 ? '99+' : num }, void 0);
                            else if (num < 0)
                                notifyCircle = (0, jsx_runtime_1.jsx)("u", { className: "dot" }, void 0);
                        }
                    }
                    return (0, jsx_runtime_1.jsx)("div", __assign({ onClick: function () { return _this.tabClick(v); }, style: selected === true ? bsCur : bsTab }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [notifyCircle, caption(selected)] }, void 0) }), index);
                }) }), void 0);
            return tabs;
        });
        this.content = (0, mobx_react_1.observer)(function () {
            var displayNone = { visibility: 'hidden' };
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: _this.tabArr.map(function (v, index) {
                    var tabPosition = _this.props.tabPosition;
                    var content = v.content, page = v.page, onScroll = v.onScroll, onScrollTop = v.onScrollTop, onScrollBottom = v.onScrollBottom, className = v.className;
                    var tabs = React.createElement(_this.tabs);
                    var pageHeader, pageFooter;
                    if (page !== undefined) {
                        pageHeader = page.header();
                        pageFooter = page.footer();
                    }
                    var header, footer;
                    var visibility = { visibility: 'hidden' };
                    if (tabPosition === 'top') {
                        header = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("section", __assign({ className: "tv-page-header" }, { children: (0, jsx_runtime_1.jsxs)("header", { children: [tabs, pageHeader] }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("header", __assign({ style: visibility }, { children: [tabs, pageHeader] }), void 0)] }, void 0);
                        if (pageFooter !== undefined) {
                            footer = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("footer", __assign({ style: visibility }, { children: pageFooter }), void 0), (0, jsx_runtime_1.jsx)("section", __assign({ className: "tv-page-footer" }, { children: (0, jsx_runtime_1.jsx)("footer", { children: pageFooter }, void 0) }), void 0)] }, void 0);
                        }
                    }
                    else {
                        if (pageHeader !== undefined) {
                            header = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("section", __assign({ className: 'tv-page-header' }, { children: (0, jsx_runtime_1.jsx)("header", { children: pageHeader }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("header", __assign({ style: visibility }, { children: pageHeader }), void 0)] }, void 0);
                        }
                        footer = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("footer", __assign({ style: visibility }, { children: [pageFooter, tabs] }), void 0), (0, jsx_runtime_1.jsx)("section", __assign({ className: 'tv-page-footer' }, { children: (0, jsx_runtime_1.jsxs)("footer", { children: [pageFooter, tabs] }, void 0) }), void 0)] }, void 0);
                    }
                    var style;
                    if (v.selected === false)
                        style = displayNone;
                    return (0, jsx_runtime_1.jsxs)(scrollView_1.ScrollView, __assign({ className: className, style: style, onScroll: onScroll, onScrollTop: onScrollTop, onScrollBottom: onScrollBottom }, { children: [header, content, footer] }), index);
                }) }, void 0);
        });
        this.props = props;
        var size = props.size, tabs = props.tabs, tabBack = props.tabBg, sep = props.sep, selected = props.selected;
        this.size = size || 'md';
        this.tabArr = tabs.map(function (v) {
            var tab = new Tab();
            var name = v.name, caption = v.caption, content = v.content, page = v.page, notify = v.notify, load = v.load, onShown = v.onShown, isSelected = v.isSelected, onScroll = v.onScroll, onScrollTop = v.onScrollTop, onScrollBottom = v.onScrollBottom, className = v.className;
            tab.name = name;
            if (isSelected === true || name === selected) {
                _this.selectedTab = tab;
            }
            tab.selected = false;
            tab.caption = caption;
            if (content !== undefined) {
                tab.contentBuilder = content;
            }
            else if (page !== undefined) {
                tab.page = page;
                //contentBuilder = () => {return page.content()};
            }
            tab.notify = notify;
            tab.load = load;
            tab.onShown = onShown;
            tab.onScroll = onScroll;
            tab.onScrollTop = onScrollTop;
            tab.onScrollBottom = onScrollBottom;
            tab.className = className;
            return tab;
        });
        this.tabBg = tabBack;
        //this.contentBg = contentBack;
        this.sep = sep;
        if (this.selectedTab === undefined) {
            this.selectedTab = this.tabArr[0];
        }
        this.selectedTab.selected = true;
        (0, mobx_1.makeObservable)(this, {
            selectedTab: mobx_1.observable,
            tabArr: mobx_1.observable,
        });
        setTimeout(function () {
            _this.tabClick(_this.selectedTab);
        }, 100);
    }
    TabsView.prototype.render = function () {
        var tabPosition = this.props.tabPosition;
        var tabs = React.createElement(this.tabs);
        var header, footer;
        var visibility = { display: 'none' };
        if (tabPosition === 'top') {
            header = (0, jsx_runtime_1.jsx)("header", { children: tabs }, void 0);
        }
        else {
            footer = (0, jsx_runtime_1.jsx)("footer", { children: tabs }, void 0);
        }
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [header, this.tabArr.map(function (v, index) {
                    var style;
                    if (v.selected === false)
                        style = visibility;
                    return (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(v.className), style: style }, { children: v.content }), index);
                }), footer] }, void 0);
    };
    return TabsView;
}());
exports.TabsView = TabsView;
;
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tabsView = new TabsView(props);
        return _this;
        /*
        setTimeout(() => {
            this.tabsView.tabClick(undefined);
        }, 100);
        */
    }
    Tabs.prototype.render = function () {
        return this.tabsView.render();
    };
    Tabs = __decorate([
        mobx_react_1.observer
    ], Tabs);
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
;
var RootTabs = /** @class */ (function (_super) {
    __extends(RootTabs, _super);
    function RootTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tabsView = new TabsView(props);
        return _this;
        /*
        setTimeout(() => {
            this.tabsView.tabClick(undefined);
        }, 100);
        */
    }
    RootTabs.prototype.render = function () {
        return React.createElement(this.tabsView.content);
    };
    RootTabs = __decorate([
        mobx_react_1.observer
    ], RootTabs);
    return RootTabs;
}(React.Component));
exports.RootTabs = RootTabs;
;
//# sourceMappingURL=tabs.js.map