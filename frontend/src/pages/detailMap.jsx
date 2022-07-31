import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '740px',
  height: '420px',
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const DetailMap = ({Ditem}) => {
  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyCrXhf7dS8MZ1tiCUiy-y-yVfy_GToWCNA"
        language="en"
        region="KR"
      >
        <GoogleMap mapContainerStyle={containerStyle} 
        center={{lat: Ditem.mapy, lng: Ditem.mapx}}
        zoom={20}>

        <Marker
          onLoad={onLoad}
          position={
            {lat: Ditem.mapy,
            lng: Ditem.mapx}
          }/>
          {/* <Marker position={lat:37.4692, lng: 126.451}/> */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DetailMap;
