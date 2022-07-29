import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCrXhf7dS8MZ1tiCUiy-y-yVfy_GToWCNA"
      language='en'
      region="KR"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)