import React from 'react'
import { GoogleMap, InfoWindow, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
  width: '82rem',
  height: '856px'
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};


const onLoad = marker => {
  console.log('marker: ', marker)
}

const options = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
}

function Map({place}) {
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
        <MarkerClusterer options={options}>
        {(clusterer) =>
            place.map((place) => (
              <Marker
              icon={{url:'https://drive.google.com/uc?id=1Mt5tR73ZyY-DCPZx_svJ3EBaeEQG8BBT'}}
              key={place.contentid} 
              position={{lat: place.mapy, lng: place.mapx}} 
              clusterer={clusterer} />
            ))
          }
        </MarkerClusterer>
        
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)