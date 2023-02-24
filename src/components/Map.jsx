
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { React, useState, useEffect } from 'react';
// import Data from '../Data'


const Map = (props) => {
    let data = JSON.parse(localStorage.getItem('locations'));
    let coors = JSON.parse(localStorage.getItem('coordinates'));
    const [locations, setLocations] = useState(data.reverse());
    // const [coordinates, setCoordinates] = useState(coors);
    console.log(coors);

    const containerStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    };
    const center = {
        lat: props.coordinates.lat,
        lng: props.coordinates.lng
    };
    // console.log(locations);
    return (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
        {
            locations && locations.forEach((location, index) => {
                <MarkerF 
                    icon={{
                        // url:("https://img.icons8.com/officel/512/visit.png"),
                        url:(location.cover_img),
                        scaledSize: new window.google.maps.Size(50, 50),
                        labelOrigin: new window.google.maps.Point(25, -10),
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
                        // lat: coordinates && coordinates[index].lat,
                        // lng: coordinates && coordinates[index].lng
                        lat: props.coordinates.lat,
                        lng: props.coordinates.lng
                    }}
                />
            })
        }
        <></>
        </GoogleMap>
    )
}

export default Map;
