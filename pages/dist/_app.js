"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var app_1 = require("next/app");
var head_1 = require("next/head");
var styled_components_1 = require("styled-components");
var nprogress_1 = require("nprogress");
var Footer_1 = require("@/components/Footer");
var Header_1 = require("@/components/Header");
var useGlobalState_1 = require("@/customHooks/useGlobalState");
var api_1 = require("@/modules/user/api");
var index_1 = require("@/utils/index");
var api_2 = require("@/modules/posts/api");
var SlideBar_1 = require("@/components/SlideBar");
require("bootstrap/dist/css/bootstrap.min.css");
require("nprogress/nprogress.css");
require("antd/dist/antd.css");
require("@/assets/css/style.css");
var HeaderAnt = antd_1.Layout.Header, Content = antd_1.Layout.Content, FooterWrapper = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider;
var HeaderWrapper = styled_components_1["default"](HeaderAnt)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 1px 1px 5px lightgray;\n  z-index: 2;\n"], ["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 1px 1px 5px lightgray;\n  z-index: 2;\n"])));
var ContentWrapper = styled_components_1["default"](Content)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1200px;\n  max-width: 100%;\n  //@ts-ignore\n  margin: ", ";\n  margin-top: 100px;\n  overflow: initial;\n"], ["\n  width: 1200px;\n  max-width: 100%;\n  //@ts-ignore\n  margin: ", ";\n  margin-top: 100px;\n  overflow: initial;\n"])), function (_a) {
    var hasSider = _a.hasSider;
    return (!hasSider ? "0 0 0 350px" : "0 auto");
});
var SiderWrapper = styled_components_1["default"](Sider)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 400px !important;\n  height: 100vh;\n  overflow: hidden;\n  position: fixed;\n  left: 0;\n  z-index: 1;\n  &:hover {\n    overflow: auto;\n  }\n"], ["\n  width: 400px !important;\n  height: 100vh;\n  overflow: hidden;\n  position: fixed;\n  left: 0;\n  z-index: 1;\n  &:hover {\n    overflow: auto;\n  }\n"])));
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps, router = _a.router;
    var _b = useGlobalState_1.useGlobalState("token"), setToken = _b[1];
    var _c = useGlobalState_1.useGlobalState("currentUser"), setCureentUser = _c[1];
    var _d = useGlobalState_1.useGlobalState("categories"), setCategories = _d[1];
    var _e = useGlobalState_1.useGlobalState("mode"), mode = _e[0], setMode = _e[1];
    // with SSR set at server (when f5 page)
    react_1.useMemo(function () {
        setCureentUser(pageProps.userInfo);
        setCategories(pageProps.categories);
        setToken(pageProps.token);
        setMode(pageProps.mode);
    }, []);
    react_1.useEffect(function () {
        router.events.on("routeChangeStart", function () {
            nprogress_1["default"].start();
        });
        router.events.on("routeChangeComplete", function () {
            nprogress_1["default"].done();
        });
    }, []);
    var currentPath = router.pathname;
    var hiddenFooter = react_1.useMemo(function () {
        var excludes = ["/", "/posts/[postId]"];
        return excludes.indexOf(currentPath) !== -1;
    }, [currentPath]);
    var hiddenHeader = react_1.useMemo(function () {
        var excludes = ["/login", "/register"];
        return excludes.indexOf(currentPath) !== -1;
    }, [currentPath]);
    var hideSidebar = react_1.useMemo(function () {
        var excludes = [
            "/login",
            "/register",
            "/users/profile",
            "/posts/create",
            "/posts/[postId]",
            "/users/[userId]",
            "/users/changePassword",
        ];
        return excludes.indexOf(currentPath) !== -1;
    }, [currentPath]);
    return (react_1["default"].createElement("div", { id: "root" },
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("meta", { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" }),
            react_1["default"].createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
            react_1["default"].createElement("meta", { name: "viewport", content: "width=device-width, minimum-scale=1, maximum-scale=1" }),
            react_1["default"].createElement("meta", { name: "keywords", content: "HTML5 Template" }),
            react_1["default"].createElement("meta", { name: "description", content: "C\u1ED9ng \u0111\u1ED3ng ch\u1EBF \u1EA3nh" }),
            react_1["default"].createElement("meta", { name: "author", content: "etheme.com" }),
            react_1["default"].createElement("title", null, "C\u1ED9ng \u0111\u1ED3ng ch\u1EBF \u1EA3nh "),
            react_1["default"].createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700", rel: "stylesheet" }),
            react_1["default"].createElement("link", { rel: "stylesheet", href: "/fonts/font-awesome/css/font-awesome.css" }),
            react_1["default"].createElement("link", { rel: "stylesheet", href: "/fonts/emotion/style.css" })),
        react_1["default"].createElement(antd_1.Layout, null,
            !hiddenHeader && (react_1["default"].createElement(HeaderWrapper, null,
                react_1["default"].createElement(Header_1.Header, null))),
            react_1["default"].createElement(antd_1.Layout, null,
                !hideSidebar && (react_1["default"].createElement(SiderWrapper, { theme: mode, width: 300 },
                    react_1["default"].createElement(SlideBar_1.LeftSideBar, null))),
                react_1["default"].createElement(ContentWrapper, { hasSider: hideSidebar },
                    react_1["default"].createElement(Component, __assign({}, pageProps)))),
            !hiddenFooter && (react_1["default"].createElement(FooterWrapper, null,
                react_1["default"].createElement(Footer_1.Footer, null))))));
}
MyApp.getInitialProps = function (appContext) { return __awaiter(void 0, void 0, void 0, function () {
    var appProps, _a, token, currentUser, currentUserPr, categoryPr, _b, currentUserRes, categoryRes;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, app_1["default"].getInitialProps(appContext)];
            case 1:
                appProps = _c.sent();
                _a = index_1.getTokenInSsrAndCsr(appContext.ctx), token = _a[0], currentUser = _a[1];
                currentUserPr = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) ? api_1.getUserById(currentUser.id) : null;
                categoryPr = api_2.fetchCategories();
                return [4 /*yield*/, Promise.all([
                        currentUserPr,
                        categoryPr,
                    ])];
            case 2:
                _b = _c.sent(), currentUserRes = _b[0], categoryRes = _b[1];
                return [2 /*return*/, {
                        pageProps: __assign(__assign({}, appProps.pageProps), { userInfo: currentUserRes === null || currentUserRes === void 0 ? void 0 : currentUserRes.user, categories: categoryRes.categories || [], token: token, mode: "light" })
                    }];
        }
    });
}); };
exports["default"] = MyApp;
var templateObject_1, templateObject_2, templateObject_3;
