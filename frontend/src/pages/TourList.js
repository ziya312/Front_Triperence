import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TourItem from './TourItem';
import axios from 'axios';
import Map from 'components/map/map';
import Mapmodalper from 'components/common/mapmodalper';
import Categories from 'components/categoriescom/Categories';
import ManageEvents from 'components/Container';
import MapModal from 'components/common/mapmodal';

const Box = styled.div`
  float: left;
  padding: 0px;
  width: 28.95vw;
  height: 675px;
`;
const CardPlace = styled.div`
  overflow: auto;
  float: left;
  padding: 10px;
  width: 28.5vw;
  height: 850px;
<<<<<<< Updated upstream
`;
=======
<<<<<<< HEAD
`; //리스트 틀
=======
`;
>>>>>>> e15c79cdb0bcf30b54a22c70d4bb466c136f3b58
>>>>>>> Stashed changes

const TourListBlock = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const DIV = styled.div`
  z-index: 100;
`;
=======
>>>>>>> e15c79cdb0bcf30b54a22c70d4bb466c136f3b58
>>>>>>> Stashed changes
const TourList = ({ category }) => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accom, setAccom] = useState('');
  const [restaur, setRestaur] = useState('');
  
  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? 'all' : `${category}`;
        const response = await axios.get(`http://localhost:8080/places/category=${query}`,{
          params:{
            accom : "B02011200",
            restaur : "A05020800",
            cat2 : "A0101"
          }
        });
        console.log(accom);
        setPlace(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
  }
  //아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }
  // item 값이 유효할 때
  return (
    <>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
      <DIV>
        <Box>
          <CardPlace>
            {place.map((place) => (
              <TourItem key={place.contentid} place={place} />
            ))}
          </CardPlace>
        </Box>
        <Map place={place} />
      </DIV>
=======
>>>>>>> Stashed changes
    <Mapmodalper />
      <Box>
        <CardPlace>
          {place.map((place) => (
            <TourItem key={place.contentid} place={place} />
          ))}
        </CardPlace>
      </Box>
      <Map place={place} />
<<<<<<< Updated upstream
=======
>>>>>>> e15c79cdb0bcf30b54a22c70d4bb466c136f3b58
>>>>>>> Stashed changes
    </>
  );
};

export default TourList;
