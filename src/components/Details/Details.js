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
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
var Map_1 = __importDefault(require("../Map/Map"));
var ai_1 = require("react-icons/ai");
var cg_1 = require("react-icons/cg");
var hi_1 = require("react-icons/hi");
var Details = function () {
    // console.log('Getting locations from local storage...')
    var locs = JSON.parse(localStorage.getItem('locations'));
    var locations = (0, react_1.useState)(locs)[0];
    // console.log('Getting coordinates from local storage...')
    var coors = JSON.parse(localStorage.getItem('coordinates'));
    var coordinates = (0, react_1.useState)(coors)[0];
    var windowWidth = window.innerWidth;
    var id = (0, react_router_dom_1.useParams)()['*'];
    var item;
    locations && locations.forEach(function (location) {
        (location.my_id === parseInt(id)) && (item = location);
    });
    var _a = (0, react_1.useState)('off'), map = _a[0], setMap = _a[1];
    var _b = (0, react_1.useState)('off'), details = _b[0], setDetails = _b[1];
    var _c = (0, react_1.useState)(false), blur = _c[0], setBlur = _c[1];
    var _d = (0, react_1.useState)(''), fullImg = _d[0], setFullImg = _d[1];
    (0, react_1.useEffect)(function () {
        item && item.title && (document.title = "".concat(item.title, " - My Travel Journal"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ /*item.title*/]);
    var updateMap = function () {
        if (map === 'off') {
            setMap('on');
            setDetails('off');
        }
        else {
            setMap('off');
        }
        details === 'on' && setDetails('off');
    };
    var closeMap = function () {
        setMap('off');
    };
    var updateDetails = function () {
        details === 'off' ? setDetails('on') : setDetails('off');
        map === 'on' && setMap('off');
    };
    var detailsOff = function (e) {
        setDetails('off');
    };
    var blurSet = function () {
        (map === 'on' || details === 'on') ? setBlur(false) : setBlur(true);
    };
    var fullScreenImg = function () {
        var img = document.querySelector('.img-full');
        var imgBg = document.querySelector('.img-full-bg');
        if (img.classList.contains('on')) {
            img.classList.remove('on');
            imgBg.classList.remove('on');
        }
        else {
            img.classList.add('on');
            imgBg.classList.add('on');
        }
    };
    var handleImages = function (e) {
        var clickedImg = e.target;
        var imgs = document.querySelectorAll('.img');
        var url = clickedImg.style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
        if (clickedImg.classList.contains('on')) {
            setFullImg(url);
            fullScreenImg();
            // console.log(url);
            return;
        }
        imgs.forEach(function (img) {
            img.classList.remove('on');
            img.classList.remove('off');
            img.classList.remove('full');
        });
        clickedImg.classList.add('on');
        imgs.forEach(function (img, index) {
            if (img.classList.contains('on')) {
                if (windowWidth < 700) {
                    if (index === 0) {
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                    }
                    else if (index === imgs.length - 1) {
                        imgs[index - 1].classList.add('off');
                        imgs[index - 2].classList.add('off');
                    }
                    else {
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                    }
                }
                else if (windowWidth >= 700) {
                    // console.log(index)
                    if (index === 0) {
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                        imgs[index + 4].classList.add('off');
                        imgs[index + 5].classList.add('off');
                        imgs[index + 6].classList.add('off');
                    }
                    else if (index === imgs.length - 1) {
                        imgs[index - 1].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 3].classList.add('off');
                        imgs[index - 4].classList.add('off');
                        imgs[index - 5].classList.add('off');
                        imgs[index - 6].classList.add('off');
                    }
                    else if (index === 1) {
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                        imgs[index + 4].classList.add('off');
                        imgs[index + 5].classList.add('off');
                    }
                    else if (index === 2) {
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                        imgs[index + 4].classList.add('off');
                    }
                    else if (index === 3) {
                        imgs[index - 3].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                    }
                    else if (index === 4) {
                        imgs[index - 3].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                    }
                    else if (index === 5) {
                        imgs[index - 3].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                    }
                    else if (index === 6) {
                        imgs[index - 3].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                        imgs[index + 3].classList.add('off');
                    }
                    else if (index === 7) {
                        imgs[index - 4].classList.add('off');
                        imgs[index - 3].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                        imgs[index + 2].classList.add('off');
                    }
                    else if (index === 8) {
                        imgs[index - 5].classList.add('off');
                        imgs[index - 4].classList.add('off');
                        imgs[index - 3].classList.add('off');
                        imgs[index - 2].classList.add('off');
                        imgs[index - 1].classList.add('off');
                        imgs[index + 1].classList.add('off');
                    }
                }
            }
        });
        // console.log('CLICKED:', clickedImg);
        // console.log('ALL:',imgs);
    };
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            var img = document.querySelectorAll('.map img');
            (img.length > 0) && img[0].classList.add('map-marker');
        }, 150);
    }, [map]);
    // function CustomMarker() {
    //     return (
    //       <div className="marker">
    //         {item.title}
    //       </div>
    //     );
    //   }
    return (locations ? (React.createElement("div", { className: blur ? 'details off' : 'details', style: { backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(".concat(item.cover_img, ")") } },
        React.createElement("div", { className: 'blurred-bg' }),
        !item ? (React.createElement(react_router_dom_1.Navigate, { to: '/' })) : (React.createElement("div", { className: 'container' },
            React.createElement("div", { className: "nav" },
                React.createElement(react_router_dom_1.Link, { to: '/', className: "back-btn" }, "back to the list"),
                React.createElement("p", { className: "about", onClick: function () { updateDetails(); blurSet(); } }, "About ".concat(item.location))),
            React.createElement("div", { className: "header" },
                React.createElement("h1", null, item.title),
                React.createElement("p", { className: "dates" }, "".concat(item.dates.start, " - ").concat(item.dates.end))),
            React.createElement("div", { className: "content" },
                React.createElement("div", { className: "pics-title" },
                    "pics taken ",
                    React.createElement(hi_1.HiChevronDoubleRight, null)),
                windowWidth < 700 && (React.createElement("div", { className: "pics" },
                    React.createElement("div", { className: "img on", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(".concat(item.cover_img, ")") } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)" } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)" } }))),
                windowWidth >= 700 && (React.createElement("div", { className: "pics" },
                    React.createElement("div", { className: "img on", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(".concat(item.cover_img, ")") } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)" } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)" } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)" } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)" } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)" } }),
                    React.createElement("div", { className: "img off", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)" } }),
                    React.createElement("div", { className: "img", onClick: function (e) { handleImages(e); }, style: { backgroundImage: "url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)" } }))),
                React.createElement("div", { className: "pics-title end" },
                    React.createElement(hi_1.HiChevronDoubleLeft, null),
                    " during the trip")),
            React.createElement("div", { className: "btn", onClick: function () { updateMap(); blurSet(); } }, "Map"))),
        (map === 'on' &&
            React.createElement("div", { className: "popup map-container" },
                React.createElement("div", { onClick: function () { closeMap(); blurSet(); }, className: "x" },
                    React.createElement(cg_1.CgCloseO, { size: 30 })),
                React.createElement("div", { className: "map" },
                    React.createElement(Map_1.default, { coordinates: coordinates, title: item.title, cover_img: item.cover_img })))),
        details === 'on' && React.createElement("div", { className: "popup details" },
            item.description,
            React.createElement("div", { onClick: function (e) { detailsOff(e); blurSet(); }, className: 'x' },
                React.createElement(ai_1.AiFillCloseCircle, null))),
        React.createElement("div", { className: "img-full-bg" }),
        React.createElement("div", { className: "img-full", onClick: fullScreenImg, style: { backgroundImage: "url(".concat(fullImg, ")") } }),
        React.createElement("div", { className: blur ? 'img-full-bg on' : 'img-full-bg' }))) : (React.createElement(react_router_dom_1.Navigate, { to: '/' })));
};
exports.default = Details;
//# sourceMappingURL=Details.js.map