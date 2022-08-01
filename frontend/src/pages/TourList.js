import { useState, useEffect } from "react";
import styled from "styled-components";
import TourItem from "./TourItem";
import axios from "axios";
import Map from "components/map/map";
import Categories from "components/categoriescom/Categories";
import Pagination from "react-js-pagination";
import Paging from "components/common/Paging";
import ManageEvents from "components/Container";

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
`;

const TourListBlock = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const TourList = ({category}) => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? 'all' : `${category}`;
        const response = await axios.get(
            `http://localhost:8080/places/category=${query}`,
        );
        setItem(response.data);
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
  if (!item) {
    return null;
  }
  // item 값이 유효할 때
  return (
    <>
      <Box>
         <CardPlace>
         {item.map((item1) => (
          
            <TourItem key={item1.title} item1={item1} />
        ))} 
        
         </CardPlace>
        

       </Box>
      <Map />
    </>
  );
};

export default TourList;