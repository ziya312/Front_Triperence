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
  height: '420px',
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};

const Detail = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [A, setA] = useState(null);
  var checknull = ""

  const id = location.state.contentid;

  useEffect(() => {}, [location]);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`http://localhost:8080/places/detail/${id}`);
        setPlace(response.data[0]);
        setA(place.areacode);
      } catch (e) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
  }
  // 아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }
  return (
    <div>
      <section className="section">
        <article className="categorie">
          {place.areacode === 1
            ? 'Seoul'
            : place.areacode === 2
            ? 'Incheon'
            : place.areacode === 3
            ? 'Daejeon'
            : place.areacode === 4
            ? 'Daegu'
            : place.areacode === 5
            ? 'Gwangju'
            : place.areacode === 6
            ? 'Busan'
            : place.areacode === 7
            ? 'Ulsan'
            : place.areacode === 8
            ? 'Sejong'
            : place.areacode === 31
            ? 'Gyeonggi'
            : place.areacode === 32
            ? 'Gangwon'
            : place.areacode === 33
            ? 'Chungbuk'
            : place.areacode === 34
            ? 'Chungnam'
            : place.areacode === 35
            ? 'Gyeongbuk'
            : place.areacode === 36
            ? 'GyeongNam'
            : place.areacodeA === 37
            ? 'JeonBuk'
            : 'Jeju'}
        </article>

        <article className="title">
          {place.title}
          <Heart />
        </article>

        <article className="images">
          <img className="img1" src={'/'} alt=" 무엇이 들어가야 합니까?" />

          <img className="img2" src={'/'} alt=" 무엇이 들어가야 합니까?" />

          <img className="img3" src={'/'} alt=" 무엇이 들어가야 합니까?" />

          <img className="img4" src={'/'} alt=" 무엇이 들어가야 합니까?" />
        </article>

        <Box place={place}/>

        <article className="Information">{place.overview}</article>
        <hr className="l" />
        <article className="Details">
          <img className="details" src={require('icons/p.svg').default} alt="" />
          {place.addr1}
          <CopyToClipboard text={place.addr1}>
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
          {place.tel}
          <CopyToClipboard text={place.tel}>
            <img
              className="d"
              src={require('icons/ss.svg').default}
              onClick={() => alert('Copy success')}
              alt=""
            />
          </CopyToClipboard>
        </article>

        <article className="Details" style={{ marginBottom: '24px' }}>
          <img className="details" src={require('icons/w.svg').default} alt="" />
          <div dangerouslySetInnerHTML={{ __html: place.usefee }}></div>
        </article>

        <hr />
        <br />
        <div className="subtitle">Detailed Location</div>
        <DetailMap place={place} />
        <div className="Details" dangerouslySetInnerHTML={{ __html: place.directions }}></div>
        <br />
        <hr />
      </section>
    </div>
  );
};
export default Detail;
