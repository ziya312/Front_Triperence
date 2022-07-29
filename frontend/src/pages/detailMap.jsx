import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '792px',
  height: '420px',
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};

const DetailMap = () => {
  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyCrXhf7dS8MZ1tiCUiy-y-yVfy_GToWCNA"
        language="en"
        region="KR"
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={lat:37.4692, lng: 126.451}/>
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DetailMap;
