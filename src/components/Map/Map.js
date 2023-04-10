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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var api_1 = require("@react-google-maps/api");
var react_1 = require("react");
var Map = function (props) {
    var data = JSON.parse(localStorage.getItem('locations'));
    var coors = JSON.parse(localStorage.getItem('coordinates'));
    var locations = (0, react_1.useState)(data.reverse())[0];
    var _a = (0, react_1.useState)(false), mapLoaded = _a[0], setMapLoaded = _a[1];
    // console.log('COORDINATES:',coors);
    var oCoors = [];
    locations.forEach(function (location) {
        coors.forEach(function (coor) { coor[0] === location.title && oCoors.push(coor); });
    });
    // console.log('ORDERED COORDINATES:',oCoors);
    var handleMapLoad = function (map) {
        map && setMapLoaded(true);
    };
    var containerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
    };
    var thisCoordinates;
    props.coordinates.forEach(function (coor) {
        if (coor[0] === props.title) {
            thisCoordinates = coor[1];
        }
    });
    var center = {
        lat: thisCoordinates[0],
        lng: thisCoordinates[1]
    };
    if (mapLoaded) {
        setTimeout(function () {
            document.querySelectorAll('img').forEach(function (img, index) {
                index < 12 && img.classList.add('map-marker');
            });
        }, 400);
    }
    // console.log(locations);
    return (React.createElement(api_1.GoogleMap, { onLoad: function (map) { return handleMapLoad(map); }, mapContainerStyle: containerStyle, center: center, zoom: 10 },
        mapLoaded && (locations.map(function (location, index) {
            return (React.createElement(api_1.MarkerF, { icon: {
                    // url:("https://img.icons8.com/officel/512/visit.png"),
                    url: (location.cover_img),
                    scaledSize: new window.google.maps.Size(50, 50),
                    labelOrigin: new window.google.maps.Point(25, -10),
                    // className: 'map-marker',
                }, 
                // label={{
                //     text: location.title, 
                //     color: 'black', 
                //     fontFamily: "Montserrat", 
                //     fontWeight: '700',
                //     fontSize: '#484848',
                // }}
                key: location.title, position: {
                    lat: oCoors[index][1][0],
                    lng: oCoors[index][1][1]
                } }));
        })),
        React.createElement(React.Fragment, null)));
};
exports.default = Map;
//# sourceMappingURL=Map.js.map