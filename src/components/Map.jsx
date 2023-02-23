
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { React, useState, useEffect } from 'react';
// import Data from '../Data'


const Map = (props) => {
    let data = JSON.parse(localStorage.getItem('locations'));
    const [locations, setLocations] = useState(data.reverse());
    // const [coordinates, setCoordinates] = useState('');
    // const [get, setGet] = useState(false);
    // console.log(localStorage.getItem('coordinates'))
    // (localStorage.getItem('coordinates').length === 0) && setGet(true);

    // useEffect(() => {
    // const saveCoordinates = () => {
    //     // if (!get) {
    //     //     return;
    //     // } else {
    //         let c = [];
    //         console.log('getting coordinates...');
    //         locations.forEach(location => {
    //             const getCoordinates = async () => {
    //                 const response = await fetch(
    //                     `https://maps.googleapis.com/maps/api/geocode/json?address=${location.title}&key=${process.env.REACT_APP_MAPS_KEY}`
    //                 );
    //                 const data = await response.json();
    //                 const { lat, lng } = data.results[0].geometry.location;
    //                 c.push({ lat, lng });
    //             };
    //             getCoordinates();
    //         })
    //         setCoordinates(c);
    //     // }
    //     // localStorage.setItem('coordinates',JSON.stringify(coordinates));
    // }
    // get && saveCoordinates();
    // (saved!=='saved' && localStorage.getItem('coorditantes').length!==0) && saveCoordinates();
    // }, [get, locations]);
    
    
    
    // useEffect(() => {
    //     get && localStorage.setItem('coordinates',JSON.stringify(coordinates)) && setGet(false);
    // }, [coordinates, get]); 

    // console.log(coordinates);

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
