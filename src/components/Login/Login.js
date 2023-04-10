"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var react_1 = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var styles_1 = require("@mui/material/styles");
// import { styled } from '@mui/material/styles';
function Login(_a) {
    var setEmail = _a.setEmail, setPassword = _a.setPassword, loginFormOn = _a.loginFormOn, handleAction = _a.handleAction, blurSet = _a.blurSet;
    var _b = (0, react_1.useState)(false), disabled = _b[0], setDisabled = _b[1];
    var handleClick = function () {
        setDisabled(true);
        setTimeout(function () {
            setDisabled(false);
        }, 1000);
    };
    var darkTheme = (0, styles_1.createTheme)({
        palette: {
            mode: 'dark',
        },
    });
    return (react_1.default.createElement("div", { className: 'login-form', onClick: loginFormOn },
        react_1.default.createElement("div", { className: "heading-container" },
            react_1.default.createElement("h3", null, "login to manage this journal")),
        react_1.default.createElement(styles_1.ThemeProvider, { theme: darkTheme },
            react_1.default.createElement(Box_1.default, { component: "form", sx: {
                    '& > :not(style)': { m: 1 },
                }, noValidate: true, autoComplete: "off" },
                react_1.default.createElement("div", { className: 'manager-login-form' },
                    react_1.default.createElement(TextField_1.default, { id: "email", label: "Email", variant: "outlined", type: "email", className: 'login-text-form', onChange: function (e) { return setEmail(e.target.value); } }),
                    react_1.default.createElement(TextField_1.default, { id: "password", label: "Password", type: "password", variant: "outlined", className: 'login-text-form', onChange: function (e) { return setPassword(e.target.value); } })))),
        react_1.default.createElement(Button_1.default, { variant: "contained", disabled: disabled, onClick: function () { handleAction(); handleClick(); blurSet(); }, className: "login-btn" }, "Login")));
}
exports.default = Login;
//# sourceMappingURL=Login.js.map