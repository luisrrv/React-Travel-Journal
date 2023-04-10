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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
// import { db } from '../../firebase-config'
var firestore_1 = require("firebase/firestore");
// import { styled } from '@mui/material/styles';
function LocationForm(_a) {
    var _this = this;
    var locationFormOn = _a.locationFormOn, blurSet = _a.blurSet, db = _a.db, newId = _a.newId;
    var _b = (0, react_1.useState)(true), disabled = _b[0], setDisabled = _b[1];
    var usersCollectionRef = (0, firestore_1.collection)(db, "Places");
    var _c = (0, react_1.useState)([]), allLocations = _c[0], setAllLocations = _c[1];
    var _d = (0, react_1.useState)(''), title = _d[0], setTitle = _d[1];
    var _f = (0, react_1.useState)(''), description = _f[0], setDescription = _f[1];
    var _g = (0, react_1.useState)(''), coverImg = _g[0], setCoverImg = _g[1];
    var _h = (0, react_1.useState)({}), dates = _h[0], setDates = _h[1];
    var _j = (0, react_1.useState)(''), dateStart = _j[0], setDateStart = _j[1];
    var _k = (0, react_1.useState)(''), dateEnd = _k[0], setDateEnd = _k[1];
    var _l = (0, react_1.useState)(''), location = _l[0], setLocation = _l[1];
    var _m = (0, react_1.useState)(['', '', '', '', '', '', '', '', '', '']), pics = _m[0], setPics = _m[1];
    var _o = (0, react_1.useState)(1), piptN = _o[0], setPiptN = _o[1];
    var iptsCheck = function () {
        setDates({ start: dateStart, end: dateEnd });
        var ipts = document.querySelectorAll('input');
        var filled = 0;
        ipts.forEach(function (ipt) {
            ipt.value !== '' && (filled += 1);
        });
        filled === ipts.length ? setDisabled(false) : setDisabled(true);
    };
    var addpipt = function () {
        piptN < 10 && setPiptN(piptN + 1);
    };
    var pushPics = function (e, i) {
        (i === 0) && setPics([e, pics[1], pics[2], pics[3], pics[4], pics[5], pics[6], pics[7], pics[8], pics[9]]);
        (i === 1) && setPics([pics[0], e, pics[2], pics[3], pics[4], pics[5], pics[6], pics[7], pics[8], pics[9]]);
        (i === 2) && setPics([pics[0], pics[1], e, pics[3], pics[4], pics[5], pics[6], pics[7], pics[8], pics[9]]);
        (i === 3) && setPics([pics[0], pics[1], pics[2], e, pics[4], pics[5], pics[6], pics[7], pics[8], pics[9]]);
        (i === 4) && setPics([pics[0], pics[1], pics[2], pics[3], e, pics[5], pics[6], pics[7], pics[8], pics[9]]);
        (i === 5) && setPics([pics[0], pics[1], pics[2], pics[3], pics[4], e, pics[6], pics[7], pics[8], pics[9]]);
        (i === 6) && setPics([pics[0], pics[1], pics[2], pics[3], pics[4], pics[5], e, pics[7], pics[8], pics[9]]);
        (i === 7) && setPics([pics[0], pics[1], pics[2], pics[3], pics[4], pics[5], pics[6], e, pics[8], pics[9]]);
        (i === 8) && setPics([pics[0], pics[1], pics[2], pics[3], pics[4], pics[5], pics[6], pics[7], e, pics[9]]);
        (i === 9) && setPics([pics[0], pics[1], pics[2], pics[3], pics[4], pics[5], pics[6], pics[7], pics[8], e,]);
    };
    var createLocation = function () { return __awaiter(_this, void 0, void 0, function () {
        var picsTaken, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    picsTaken = [];
                    pics.forEach(function (e) {
                        e !== '' && picsTaken.push(e);
                    });
                    return [4 /*yield*/, (0, firestore_1.addDoc)(usersCollectionRef, {
                            my_id: newId,
                            title: title,
                            description: description,
                            cover_img: coverImg,
                            dates: dates,
                            location: location,
                            pics: picsTaken,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, firestore_1.getDocs)(usersCollectionRef)];
                case 2:
                    data = _a.sent();
                    setAllLocations(data.docs.map(function (doc) { return (__assign(__assign({}, doc.data()), { id: doc.id })); }));
                    console.log(allLocations);
                    alert("New location added to your journal");
                    setTimeout(function () {
                        localStorage.clear();
                        window.location.reload();
                    }, 2000);
                    return [2 /*return*/];
            }
        });
    }); };
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
    return (react_1.default.createElement("div", { className: 'login-form location-form', onClick: locationFormOn },
        react_1.default.createElement("div", { className: "heading-container" },
            react_1.default.createElement("h3", null, "add a new location to your journal")),
        react_1.default.createElement(styles_1.ThemeProvider, { theme: darkTheme },
            react_1.default.createElement(Box_1.default, { component: "form", sx: {
                    '& > :not(style)': { m: 1 },
                }, noValidate: true, autoComplete: "off" },
                react_1.default.createElement("div", { className: 'manager-login-form' },
                    react_1.default.createElement(TextField_1.default, { required: true, key: "title", id: "title", label: "Title", placeholder: 'City, Country', variant: "outlined", type: "title", className: 'login-text-form', onChange: function (e) { setTitle(e.target.value); iptsCheck(); } }),
                    react_1.default.createElement(TextField_1.default, { required: true, key: "description", id: "description", label: "Description", placeholder: '', type: "description", variant: "outlined", className: 'login-text-form', onChange: function (e) { setDescription(e.target.value); iptsCheck(); } }),
                    react_1.default.createElement(TextField_1.default, { required: true, key: "coverImg", id: "coverImg", label: "Cover Image (url)", type: "coverImg", variant: "outlined", className: 'login-text-form', onChange: function (e) { setCoverImg(e.target.value); iptsCheck(); } }),
                    react_1.default.createElement(TextField_1.default, { required: true, key: "dates1", id: "dates", label: "Trip start date", placeholder: '1 January, 2020', type: "dates", variant: "outlined", className: 'login-text-form', onChange: function (e) { setDateStart(e.target.value); iptsCheck(); } }),
                    react_1.default.createElement(TextField_1.default, { required: true, key: "dates2", id: "dates", label: "Trip end date", placeholder: '1 January, 2020', type: "dates", variant: "outlined", className: 'login-text-form', onChange: function (e) { setDateEnd(e.target.value); iptsCheck(); } }),
                    react_1.default.createElement(TextField_1.default, { required: true, key: "location", id: "location", label: "Location (city)", placeholder: 'CITY NAME', type: "location", variant: "outlined", className: 'login-text-form', onChange: function (e) { setLocation(e.target.value); iptsCheck(); } }),
                    react_1.default.createElement("h3", null, "Pics taken during the trip"),
                    react_1.default.createElement("div", { className: 'pics-inputs' }, __spreadArray([], Array(piptN), true).map(function (_e, i) {
                        return react_1.default.createElement(TextField_1.default, { required: true, key: (i + 1).toString(), id: "pic".concat(i + 1), label: "Picture ".concat(i + 1, " url"), type: "pics", variant: "outlined", className: 'login-text-form', onChange: function (e) { pushPics(e.target.value, i); iptsCheck(); } });
                    })),
                    piptN < 10 && react_1.default.createElement(Button_1.default, { onClick: addpipt }, "add more pics")))),
        react_1.default.createElement(Button_1.default, { variant: "contained", disabled: disabled, onClick: function () { createLocation(); handleClick(); blurSet(); }, className: "login-btn add-location-btn" }, "Add")));
}
exports.default = LocationForm;
//# sourceMappingURL=LocationForm.js.map