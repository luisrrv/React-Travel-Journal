"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var si_1 = require("react-icons/si");
var react_router_dom_1 = require("react-router-dom");
var Card = function (props) {
    var idName = props.item.location.replace(/\s/g, "_").toLowerCase();
    var divImage = {
        backgroundImage: "url(".concat(props.item.cover_img, ")")
    };
    var style = { color: "#F55A5A", fontSize: "20px" };
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/details/".concat(props.item.my_id), className: "card", id: idName },
        react_1.default.createElement("div", { style: divImage, className: "card--image" }),
        react_1.default.createElement("div", { className: "card--stats" },
            react_1.default.createElement("div", { className: 'card--title', style: { color: '#000000' } },
                react_1.default.createElement(si_1.SiGooglemaps, { style: style }),
                "\u00A0",
                props.item.title),
            react_1.default.createElement("h6", { className: 'card--date' },
                props.item.dates.start,
                " - ",
                props.item.dates.end))));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map