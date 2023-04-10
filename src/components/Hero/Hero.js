"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ai_1 = require("react-icons/ai");
var Hero = function () {
    var closeMenu = function () {
        var menuBtn = document.querySelector('.menu-btn');
        var menuItems = document.querySelector('.menu-items');
        menuBtn && menuBtn.classList.add('on');
        menuItems && menuItems.classList.remove('on');
    };
    return (react_1.default.createElement("section", { className: 'hero', onClick: closeMenu },
        react_1.default.createElement("div", { className: "blob" }),
        react_1.default.createElement("h1", { className: 'hero--text' }, "My travels"),
        react_1.default.createElement("a", { href: '#cards-list', className: 'hero--header' },
            react_1.default.createElement("h1", { className: 'hero--header-text' },
                react_1.default.createElement(ai_1.AiOutlineDown, null)))));
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map