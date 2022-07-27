import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heart from 'components/common/heart';

const C = styled.div`
  float: left;
  margin-left: 28px;
  width: 222px;
  height: 254px;
  margin-top: 22px;
  
`;
const CardImage = styled.img`
  width: 222px;
  height: 222px;
  position: relative;
  border-radius: 20px;
  z-index: -1;
  top: -200px;
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
const H = styled.div`
  float: left;
  border-radius: 20px;
  width: 222px;
  height: 197px;
`;
const Cardtitle = styled.div`
  float: left;
  margin-left: 10px;
  margin-right: 80px;
  margin-top: 12px;
  width: 80px;
  height: 26px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  text-align: center;
  line-height: 25px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #161616;
`;

const Cardname = styled.div`
  float: left;
  width: 222px;
  height: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-bottom: 4px;
`;
const Cardclass = styled.div`
  float: left;
  width: 222px;
  height: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  color: #595959;
`;

const TourItem = ({ item1 }) => {
  const { title, addr1, tel, firstimage, contentid } = item1;
  return (

    <div className="contents">
      <C>
      
        <Cardbox>
          <Link to="/detail" state={{contentid}}>
            <H>
              <Cardtitle>{title}</Cardtitle>

            </H>
          
            <CardImage
              img
              src={firstimage}
              onerror="this.src='images/default.png'"
            ></CardImage>
           </Link>
          <Heart />
        </Cardbox>
       
        <Cardname></Cardname>
        <Cardclass></Cardclass>
      </C>
    </div>

  );
};

export default TourItem;
