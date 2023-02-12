
import { GoogleMap } from '@react-google-maps/api';


const Map = (props) => {
    const containerStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '8px'
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
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  )
}

export default Map;
