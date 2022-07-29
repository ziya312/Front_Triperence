import Header from 'components/Header/header';
import 'components/Pages/detail.css';
import Box from 'components/common/ckd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Heart from 'components/common/heart';
import I from 'icons/img_19975_1.jpg';
import Y from 'icons/스토리_(5).jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DetailMap from './detailMap';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '792px',
  height: '420px'
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};

const Detail = () => {
  const [Ditem, setDItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [A, setA] = useState(null);

  const id = location.state.contentid;

  useEffect(() => {}, [location]);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`http://localhost:8080/places/detail/${id}`);
        setDItem(response.data[0]);
        setA(Ditem.areacode);
      } catch (e) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
  }
  // 아직 item 값이 설정되지 않았을 때
  if (!Ditem) {
    return null;
  }
  return (
    <div>
      <section className="section">
        <article className="categorie">
          {Ditem.areacode === 1
            ? 'Seoul'
            : Ditem.areacode === 2
            ? 'Incheon'
            : Ditem.areacode === 3
            ? 'Daejeon'
            : Ditem.areacode === 4
            ? 'Daegu'
            : Ditem.areacode === 5
            ? 'Gwangju'
            : Ditem.areacode === 6
            ? 'Busan'
            : Ditem.areacode === 7
            ? 'Ulsan'
            : Ditem.areacode === 8
            ? 'Sejong'
            : Ditem.areacode === 31
            ? 'Gyeonggi'
            : Ditem.areacode === 32
            ? 'Gangwon'
            : Ditem.areacode === 33
            ? 'Chungbuk'
            : Ditem.areacode === 34
            ? 'Chungnam'
            : Ditem.areacode === 35
            ? 'Gyeongbuk'
            : Ditem.areacode === 36
            ? 'GyeongNam'
            : Ditem.areacodeA === 37
            ? 'JeonBuk'
            : 'Jeju'}
        </article>

        <article className="title">
          {Ditem.title}
          <Heart />
        </article>

        <article className="images">
          <img className="img1" src={'/'} alt=" 무엇이 들어가야 합니까?" />

          <img className="img2" src={'/'} alt=" 무엇이 들어가야 합니까?" />

          <img className="img3" src={'/'} alt=" 무엇이 들어가야 합니까?" />

          <img className="img4" src={'/'} alt=" 무엇이 들어가야 합니까?" />
        </article>

        <Box />

        <article className="Information">{Ditem.overview}</article>

        <hr className="l" />

        <article className="Details">
          <img className="details" src={require('icons/p.svg').default} alt="" />
          {Ditem.addr1}
          <CopyToClipboard text={Ditem.addr1}>
            <img
              className="d"
              src={require('icons/ss.svg').default}
              onClick={() => alert('Copy success')}
              alt=""
            />
          </CopyToClipboard>
        </article>

        <article className="Details">
          <img className="details" src={require('icons/t.svg').default} alt="" />
          <div classdangerouslySetInnerHTML={{__html:Ditem.usetime}}></div>
        </article>

        <article className="Details" style={{ marginBottom: '24px' }}>
          <img className="details" src={require('icons/w.svg').default} alt="" />
          <div dangerouslySetInnerHTML={{__html:Ditem.usefee}}></div>
        </article>

        <hr />
        <div>
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
    </div>

        <hr />
      </section>
    </div>
  );
};
export default Detail;
