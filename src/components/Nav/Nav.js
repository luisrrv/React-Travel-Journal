"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
var Nav = function () {
    return (react_1.default.createElement("nav", { id: 'nav' },
        react_1.default.createElement("p", { className: 'nav-title' },
            react_1.default.createElement(fa_1.FaGlobeAmericas, { size: 24 }),
            " my travel journal.")));
};
exports.default = Nav;
//# sourceMappingURL=Nav.js.map