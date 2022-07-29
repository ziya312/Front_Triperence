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
          {A === 38
            ? '전남'
            : A === 1
            ? '서울'
            : A === 2
            ? '인천'
            : A === 3
            ? '대전'
            : A === 4
            ? '대구'
            : A === 5
            ? '광주'
            : A === 6
            ? '부산'
            : A === 7
            ? '울산'
            : A === 8
            ? '세종'
            : A === 31
            ? '경기'
            : A === 32
            ? '강원'
            : A === 33
            ? '충북'
            : A === 34
            ? '충남'
            : A === 35
            ? '경북'
            : A === 36
            ? '경남'
            : A === 37
            ? '전북'
            : A === 38
            ? '전남'
            : '제주'}
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
          무엇이 들어가야 합니까?
        </article>

        <article className="Details" style={{ marginBottom: '24px' }}>
          <img className="details" src={require('icons/w.svg').default} alt="" />
          무엇이 들어가야 합니까?
        </article>

        <hr />

        <article>무엇이 들어가야 합니까?</article>

        <hr />
      </section>
    </div>
  );
};
export default Detail;
