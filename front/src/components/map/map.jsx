import { React, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ModalPerformance from "../common/ModalPerformance";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "82rem",
  height: "856px",
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};

const MapDiv = styled.div`
  z-index: -1;
`;

const FilterBtn = styled.div`
  width: 48px;
  height: 48px;
  float: right;
  background: #77aefc;
  border-radius: 24px;
  z-index: 1;
`;

const InfoCard = styled.div`
  float: left;
  border-radius: 20px;
  width: 350px;
  height: 150px;
  border-radius: 20px;
  margin-bottom: 4px;
  background-color: transparent;
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 12px;
  border-radius: 20px;
`;

const TextDiv = styled.div`
  float: right;
  width: 200px;
  margin-top: 12px;
`;

const Cardtitle = styled.div`
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-bottom: 4px;
  line-height: 1.2;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  color: #77aefc;
  word-break: break-all;
`;

const Cardname = styled.div`
  float: left;
  font-family: "Pretendard";
  font-weight: 40;
  font-size: 16px;
  color: #222222;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Cardbox = styled.div`
  float: left;
  border-radius: 20px;
  width: 222px;
  height: 222px;
  border-radius: 20px;
  margin-bottom: 4px;
  background-color: transparent;
`;

function Map({ place }) {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
const OnClick = () => {
  navigate("/detail", {state:selected.contentid})
}

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCrXhf7dS8MZ1tiCUiy-y-yVfy_GToWCNA"
      language="en"
      region="KR"
    >
      <MapDiv>
        <FilterBtn></FilterBtn>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <MarkerClusterer options={options}>
            {(clusterer) =>
              place.map((place) => (
                <Marker
                  icon={{
                    url: "https://drive.google.com/uc?id=107OwTILQ7WeO8YRqxW-RHUAU9oBr3W2J",
                  }}
                  key={place.contentid}
                  position={{ lat: place.mapy, lng: place.mapx }}
                  clusterer={clusterer}
                  onClick={(place) => {
                    setSelected(place);
                    console.log(selected.contentid);
                  }}
                ></Marker>
              ))
            }
          </MarkerClusterer>
          {selected && (
            <InfoWindow position={{ lat: selected.mapy+0.06, lng: selected.mapx }}>

              <InfoCard>
                  <CardImage
                    img
                    src={selected.firstimage}
                    onerror="this.src='images/default.png'"
                    onClick={OnClick}
                  />

                <TextDiv>
                  <Cardtitle> {selected.contentid}</Cardtitle>
                  <Cardname> {selected.addr1}</Cardname>
                </TextDiv>
              </InfoCard>
            </InfoWindow>
          )}
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </MapDiv>
    </LoadScript>
  );
}

export default Map;
