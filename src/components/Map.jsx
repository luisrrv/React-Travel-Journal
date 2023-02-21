
import { GoogleMap, MarkerF } from '@react-google-maps/api';
// import { React, useState, useEffect } from 'react';
// import Data from '../Data'


const Map = (props) => {
    const containerStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    };
    const center = {
        lat: props.coordinates.lat,
        lng: props.coordinates.lng
    };
        return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      <MarkerF 
        icon={{
            // url:("https://img.icons8.com/officel/512/visit.png"),
            url:(props.coverImg),
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
        key={props.title}
        position={{
            lat: props.coordinates.lat,
            lng: props.coordinates.lng
        }}
      />
        <></>
      </GoogleMap>
  )
}

export default Map;
