import React, { useEffect, useState } from 'react';
import PlaceList from './PlaceList';
import TourList from 'pages/TourList';
import 'components/Pages/test.css';
import Img from 'components/test/Img';
import Place from 'components/test/PlaceOne';
import CarouList from './CarouList';
import NewCarou from 'components/test/NewCarou';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/common/Button';
import axios from 'axios';
import AuthService from '../services/auth.service';

const title = styled.div`
display : iflex;
`

const StyledButton = styled.button`
  display: iflex;
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  padding: 1rem;
  align-items: center;
  text-align: center;

  height: 3rem;
  width: 24rem;
  font-size: 1rem;
`;

const H = styled.div`
  display: iflex;
  margin-bottom: 20px;
`;

const Box = styled.div`
  padding: 0px;
  width: 63vw;
  height: 350px;
  /* background-color: pink; */
`;

const Cardtitle = styled.div`
  float: left;
  /* margin-left: 10px; */
  margin-right: 80px;
  margin-top: 12px;
  width: 132px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
`;

const CardPlace = styled.div`
overflow: auto;
  float: left;
  padding: 10px;
  width: 63vw;
  height: 300px;
  overflow-x: scroll;   
  overflow-y: hidden;
  display: flex;
  text-align: center;  
  &::-webkit-scrollbar {
     width: 0px;
     height: 10px;
     border-radius: 6px;
     background: #d1d1d1;
   }
   &::-webkit-scrollbar-thumb {
     width: 10px;
     background: #77aefc;
     border-radius: 6px;
   }
`;

{
  /* <style>-------------------------------------------------------- */
}

const character = [
  {
    id: 1,
    name: 'choa',
    value: 'Choa who loves Korean culture!',
    type: 'K-Culture',
    imageSrc: require('images/character/choa.jpg'),
  },
  {
    id: 2,
    name: 'MIR',
    value: 'Mir who loves Korea history!',
    type: 'K-History',
    imageSrc: require('images/character/mir.jpg'),
  },
  {
    id: 3,
    name: 'HIMCHAN',
    value: 'Himchan who loves taking phothos!',
    type: 'Photo/Film',
    imageSrc: require('images/character/himchan.jpg'),
  },
  {
    id: 4,
    name: 'PUREUM',
    value: 'Pureum who loves Korean Nature!',
    type: 'K-Nature',
    imageSrc: require('images/character/pureum.jpg'),
  },
  {
    id: 5,
    name: 'SODAM',
    value: 'Sodam who loves Korean culture',
    type: 'K-Food',
    imageSrc: require('images/character/sodam.jpg'),
  },
  {
    id: 6,
    name: 'NORI',
    value: 'Nori who loves Korean entertainments!',
    type: 'K-entertain',
    imageSrc: require('images/character/nori.jpg'),
  },
];

const ShowResult = () => {
  const [type, setType] = useState(0);
  const [like, setLike] = useState(false);
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`http://localhost:8080/survey/result/type=choa`);
        console.debug(response.data);
        setPlace(response.data);
        console.log('야야야야ㅑ양', place.cat2);
        // setA(place.areacode);
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

  const hahahaha = (idx) => {
    const currentUser = AuthService.getCurrentUser();
    console.debug(idx, '모양ㅇ모양');
    return (
      <Img
        name={character[idx].name}
        value={character[idx].value}
        imageSrc={character[idx].imageSrc}
        type={character[idx].type}
        id={character[idx].id}
      />
    );
  };

  // const toggleLike = async (e) => {
  //   const res = await axios.post(...)
  // }

  // item 값이 유효할 때

  // useEffect(() => {
  //   // axios({
  //   //   url: '/survey/result/type=choa',
  //   //   method: 'get',
  //   //   data: {
  //   //     "user_id": currentUser.id,
  //   //     "like_cno" : 21,
  //   //   },
  //   //   baseURL: 'http://localhost:8080',
  //   // })

  //   // fetch('/api/getMyType')
  //   //   .then((res) => {
  //   //     return res.json();
  //   //   })

  //   //   .then((data) => {
  //   //     //1 , 2 , 3
  //   //     //setType(data.~~~);
  //   //     setType(1);
  //   //   });
  // }, []);

  return (
    <div>
      <div className="app-container">
        {hahahaha(type)}
        {/* <Img
          name={character[type].name} // 
          value={character[type].value}
          imageSrc={character[type].imageSrc}
          type={character[type].type}
          id={character[type].id}
        /> */}
        {/* {character.map((item) => {
          return (
            <Img name={item.name} value={item.value} imageSrc={item.imageSrc} type={item.type} />
          );
        })} */}
      </div>

      <div className="wrap-t">
        <div className="carousel">
          <h2>K-POP PLACE</h2>

          <NewCarou key={place.contentid} place={place} />
        </div>
      </div>
      <div className="wrap-t">
        <H>
          <h2>K-DRAMA PLACE</h2>
          <Box>
            <CardPlace>
              {place.map((place) => (
                <PlaceList key={place.contentid} place={place} />
              ))}
            </CardPlace>
          </Box>
        </H>
      </div>
      <div className="wrap-t">
        <H>
          <Link to="/">
            <StyledButton>Recommended Trip Place</StyledButton>
          </Link>
        </H>
      </div>
    </div>
  );
};
export default ShowResult;
