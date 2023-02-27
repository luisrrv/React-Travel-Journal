
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { React, useState } from 'react';
// import Data from '../Data'


const Map = (props) => {
    let data = JSON.parse(localStorage.getItem('locations'));
    let coors = JSON.parse(localStorage.getItem('coordinates'));
    const [locations] = useState(data.reverse());
    const [mapLoaded, setMapLoaded] = useState(false);
    console.log(coors);

    const handleMapLoad = (map) => {
        map && setMapLoaded(true);
    }

    const containerStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    };
    const center = {
        lat: props.coordinates.lat,
        lng: props.coordinates.lng
    };
    console.log(locations);
    return (
        <GoogleMap
        onLoad={(map) => handleMapLoad(map)}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
        {
            mapLoaded && (
                locations && locations.forEach(location => {
                    coors && coors.forEach(coor => {
                        if (coor[0]===location.title) {
                            <MarkerF 
                                icon={{
                                    // url:("https://img.icons8.com/officel/512/visit.png"),
                                    url:(location.cover_img),
                                    scaledSize: new window.google.maps.Size(50, 50),
                                    // labelOrigin: new window.google.maps.Point(25, -10),
                                    className: 'map-marker',
                                }}
                                // label={{
                                //     text: props.title, 
                                //     color: 'black', 
                                //     fontFamily: "Montserrat", 
                                //     fontWeight: '700',
                                //     fontSize: '#484848',
                                // }}
                                key={location.title}
                                position={{
                                    lat: coor[1][0],
                                    lng: coor[1][1]
                                }}
                            />
                        }
                    })
                })
            )
        }
        <></>
        </GoogleMap>
    )
}

export default Map;
