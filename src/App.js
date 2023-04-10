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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./App.scss");
var Nav_1 = __importDefault(require("./components/Nav/Nav"));
var Hero_1 = __importDefault(require("./components/Hero/Hero"));
var Card_1 = __importDefault(require("./components/Card/Card"));
var Login_1 = __importDefault(require("./components/Login/Login"));
var Footer_1 = __importDefault(require("./components/Footer/Footer"));
var ai_1 = require("react-icons/ai");
var bs_1 = require("react-icons/bs");
var fi_1 = require("react-icons/fi");
var react_router_dom_1 = require("react-router-dom");
var firebase_config_1 = require("./firebase-config");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var auth_1 = require("firebase/auth");
var firestore_1 = require("firebase/firestore");
var LocationForm_1 = __importDefault(require("./components/LocationForm/LocationForm"));
function App() {
    var _this = this;
    var _a = (0, react_1.useState)([]), locations = _a[0], setLocations = _a[1];
    var _b = (0, react_1.useState)(false), get = _b[0], setGet = _b[1];
    var _c = (0, react_1.useState)('off'), loginForm = _c[0], setLoginForm = _c[1];
    var _d = (0, react_1.useState)('off'), locationForm = _d[0], setLocationForm = _d[1];
    var _e = (0, react_1.useState)(''), email = _e[0], setEmail = _e[1];
    var _f = (0, react_1.useState)(''), password = _f[0], setPassword = _f[1];
    var _g = (0, react_1.useState)(false), blur = _g[0], setBlur = _g[1];
    var usersCollectionRef = (0, firestore_1.collection)(firebase_config_1.db, "Places");
    // get data needed on load
    (0, react_1.useEffect)(function () {
        var locs;
        var coors = [];
        var handleGet = function () {
            if (!localStorage.getItem('locations') || localStorage.getItem('locations') === 'null' || localStorage.getItem('locations') === '' || localStorage.getItem('locations') === '[]' || localStorage.getItem('locations') === '{}') {
                setGet(true);
            }
            else {
                setGet(false);
            }
        };
        var getLocations = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Getting locations...', get);
                        return [4 /*yield*/, (0, firestore_1.getDocs)(usersCollectionRef)];
                    case 1:
                        data = _a.sent();
                        locs = (data.docs.map(function (doc) { return (__assign(__assign({}, doc.data()), { id: doc.id })); }));
                        setLocations(locs);
                        localStorage.setItem('locations', JSON.stringify(locs));
                        return [4 /*yield*/, getCoordinates()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        var getFromAPI = function (location) { return __awaiter(_this, void 0, void 0, function () {
            var res, data, coor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Getting coordinates...');
                        return [4 /*yield*/, fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(location.title, "&key=").concat(process.env.REACT_APP_MAPS_KEY))];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        coor = [location.title, [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng]];
                        coors.push(coor);
                        localStorage.setItem('coordinates', JSON.stringify(coors));
                        return [2 /*return*/];
                }
            });
        }); };
        var getCoordinates = function () {
            if (!localStorage.getItem('coordinates') || localStorage.getItem('coordinates') !== '' || localStorage.getItem('coordinates') !== '[]' || localStorage.getItem('coordinates') !== 'null' || localStorage.getItem('coordinates') !== '{}') {
                locs.forEach(function (location) {
                    getFromAPI(location);
                });
            }
        };
        handleGet();
        if (get) {
            getLocations();
        }
        else if (!get) {
            setLocations(JSON.parse(localStorage.getItem('locations')));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [get]);
    // auth
    var navigate = (0, react_router_dom_1.useNavigate)();
    var authToken = sessionStorage.getItem('Auth Token');
    (0, react_1.useEffect)(function () {
        document.title = 'My Travel Journal';
        if (authToken) {
            setLoginForm('off');
        }
    }, [authToken]);
    var clearInfo = function () {
        setEmail('');
        setPassword('');
    };
    var handleAction = function () {
        var authentication = (0, auth_1.getAuth)(firebase_config_1.app);
        if ((email === '') && (password === '')) {
            react_toastify_1.toast.error('Please check your email/password');
            return;
        }
        (0, auth_1.signInWithEmailAndPassword)(authentication, email, password)
            .then(function (response) {
            react_toastify_1.toast.success('Logged in');
            navigate('/');
            sessionStorage.setItem('Auth Token', response.user.refreshToken);
        }).catch(function (error) {
            console.log(error);
            if (error.code === 'auth/wrong-password') {
                react_toastify_1.toast.error('Please check the Password');
            }
            else if (error.code === 'auth/user-not-found') {
                react_toastify_1.toast.error('Please check the Email');
            }
            else if (error.code === 'auth/invalid-email') {
                react_toastify_1.toast.error('Please enter a valid Email');
            }
            else {
                react_toastify_1.toast.error('Please check your email/password');
            }
        });
    };
    var handleLoginForm = function () {
        loginForm === 'off' ? setLoginForm('on') : setLoginForm('off');
    };
    var handleLocationForm = function () {
        locationForm === 'off' ? setLocationForm('on') : setLocationForm('off');
    };
    var loginFormOn = function () {
        setLoginForm('on');
    };
    var locationFormOn = function () {
        setLocationForm('on');
    };
    var handleLogout = function () {
        sessionStorage.removeItem('Auth Token');
        clearInfo();
        (0, react_toastify_1.toast)("Logged out");
        navigate('/');
    };
    var blurSet = function () {
        ((loginForm === 'on') || locationForm === 'on') ? setBlur(false) : setBlur(true);
    };
    var openMenu = function () {
        var menuBtn = document.querySelector('.menu-btn');
        var menuItems = document.querySelector('.menu-items');
        menuBtn && menuBtn.classList.toggle('on');
        menuItems && menuItems.classList.toggle('on');
    };
    var openList = function () {
        var listBtn = document.querySelector('.menu-locations');
        listBtn.classList.toggle('opened');
    };
    var pageNavigate = function (idName) {
        document.getElementById(idName).scrollIntoView();
    };
    var _h = (0, react_1.useState)(false), accordionOpen = _h[0], setAccordionOpen = _h[1];
    var handleAccordionOpen = function () {
        accordionOpen ? setAccordionOpen(false) : setAccordionOpen(true);
    };
    var newId = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')).length + 1 : 1;
    return (react_1.default.createElement("div", { className: blur ? 'App off' : 'App' },
        react_1.default.createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: true, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "colored" }),
        react_1.default.createElement(Nav_1.default, null),
        react_1.default.createElement(Hero_1.default, null),
        react_1.default.createElement("section", { id: 'cards-list', className: 'cards-list' }, locations && locations.sort(function (a, b) { return (a.my_id < b.my_id ? 1 : -1); }).map(function (item) {
            return (react_1.default.createElement(Card_1.default, { key: item.my_id, item: item }));
        })),
        react_1.default.createElement("div", { className: 'menu-btn on' },
            react_1.default.createElement(fi_1.FiMenu, { onClick: openMenu })),
        authToken ? (react_1.default.createElement("div", { className: 'menu-items' },
            react_1.default.createElement("div", { className: 'menu-btn-close' },
                react_1.default.createElement(ai_1.AiFillCloseCircle, { onClick: openMenu })),
            react_1.default.createElement("p", { className: 'btn login-btn', onClick: function () { handleLogout(); openMenu(); } }, "Logout"),
            react_1.default.createElement("p", { className: 'btn add-location', onClick: handleLocationForm }, "Add location"),
            react_1.default.createElement("p", { className: 'btn locations-list-btn', onClick: function () { openList(); handleAccordionOpen(); } },
                "Locations ",
                accordionOpen ? react_1.default.createElement(bs_1.BsChevronUp, null) : react_1.default.createElement(bs_1.BsChevronDown, null)),
            react_1.default.createElement("div", { className: 'menu-locations' }, locations && locations.sort(function (a, b) { return (a.my_id < b.my_id ? 1 : -1); }).map(function (location) {
                var idName = location.location.replace(/\s/g, "_").toLowerCase();
                return react_1.default.createElement("p", { className: 'menu-location', key: location.title, onClick: function () { pageNavigate(idName); openMenu(); } }, location.title);
            })))) : (react_1.default.createElement("div", { className: 'menu-items' },
            react_1.default.createElement("div", { className: 'menu-btn-close' },
                react_1.default.createElement(ai_1.AiFillCloseCircle, { onClick: openMenu })),
            react_1.default.createElement("p", { className: 'btn login-btn', onClick: function () { handleLoginForm(); blurSet(); openMenu(); } }, "Login"),
            react_1.default.createElement("p", { className: 'btn locations-list-btn', onClick: function () { openList(); handleAccordionOpen(); } },
                "Locations ",
                accordionOpen ? react_1.default.createElement(bs_1.BsChevronUp, null) : react_1.default.createElement(bs_1.BsChevronDown, null)),
            react_1.default.createElement("div", { className: 'menu-locations' }, locations && locations.sort(function (a, b) { return (a.my_id < b.my_id ? 1 : -1); }).map(function (location) {
                var idName = location.location.replace(/\s/g, "_").toLowerCase();
                return react_1.default.createElement("p", { className: 'menu-location', key: location.title, onClick: function () { pageNavigate(idName); openMenu(); } }, location.title);
            })))),
        react_1.default.createElement(Footer_1.default, null),
        loginForm === 'on' && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { onClick: function () { handleLoginForm(); blurSet(); }, className: 'popup-back' },
                react_1.default.createElement("div", { onClick: function () { handleLoginForm(); blurSet(); }, className: 'x btn' },
                    react_1.default.createElement(ai_1.AiFillCloseCircle, null))),
            react_1.default.createElement(Login_1.default, { setEmail: setEmail, setPassword: setPassword, loginFormOn: function () { return loginFormOn(); }, handleAction: function () { return handleAction(); }, blurSet: function () { return blurSet(); } }))),
        locationForm === 'on' && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { onClick: function () { handleLocationForm(); blurSet(); }, className: 'popup-back' },
                react_1.default.createElement("div", { onClick: function () { handleLocationForm(); blurSet(); }, className: 'x btn' },
                    react_1.default.createElement(ai_1.AiFillCloseCircle, null))),
            react_1.default.createElement(LocationForm_1.default, { locationFormOn: function () { return locationFormOn(); }, blurSet: function () { return blurSet(); }, 
                // className="Login popup"
                // popup={loginForm}
                db: firebase_config_1.db, newId: newId })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map