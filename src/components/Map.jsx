
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { React, useState } from 'react';

const Map = (props) => {
    const data = JSON.parse(localStorage.getItem('locations'));
    const coors = JSON.parse(localStorage.getItem('coordinates'));
    const [locations] = useState(data.reverse());
    const [mapLoaded, setMapLoaded] = useState(false);
    // console.log('COORDINATES:',coors);
    
    let oCoors = [];
    locations.forEach(location => {
        coors.forEach(coor => {coor[0]===location.title && oCoors.push(coor)});
    })
    // console.log('ORDERED COORDINATES:',oCoors);
    const handleMapLoad = (map) => {
        map && setMapLoaded(true);
    }

    const containerStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    };
    let thisCoordinates;
    props.coordinates.forEach(coor=>{
        if(coor[0]===props.title) {
            thisCoordinates = coor[1]
        }
    })
    const center = {
        lat: thisCoordinates[0],
        lng: thisCoordinates[1]
    };
    if (mapLoaded) {
        setTimeout(function(){
            document.querySelectorAll('img').forEach((img, index)=> {
                index < 12 && img.classList.add('map-marker');
            })
        },400)
    }
    // console.log(locations);
    return (
        <GoogleMap
        onLoad={(map) => handleMapLoad(map)}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
            {/* <MarkerF position={center}/> */}
        {
            mapLoaded && (
                locations.map((location, index) => {
                    return (<MarkerF 
                        icon={{
                            // url:("https://img.icons8.com/officel/512/visit.png"),
                            url:(location.cover_img),
                            scaledSize: new window.google.maps.Size(50, 50),
                            labelOrigin: new window.google.maps.Point(25, -10),
                            className: 'map-marker',
                        }}
                        // label={{
                        //     text: location.title, 
                        //     color: 'black', 
                        //     fontFamily: "Montserrat", 
                        //     fontWeight: '700',
                        //     fontSize: '#484848',
                        // }}
                        key={location.title}
                        position={{
                            lat: oCoors[index][1][0],
                            lng: oCoors[index][1][1]
                        }}
                    />)
                })
            )
        }
        <></>
        </GoogleMap>
    )
}

export default Map;
