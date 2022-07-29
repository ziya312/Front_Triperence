import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heart from 'components/common/heart';

const C = styled.div`
  float: left;
  margin-left: 28px;
  width: 222px;
  height: 254px;
  margin-top: 22px;
  margin-bottom:24px;
  font-family: 'Pretendard';
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

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
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
  const { title, addr1, tel, firstimage, contentid, areacode } = item1;
  return (

    <div className="contents">
      <C>
      
        <Cardbox>
          <Link to="/detail" state={{contentid}}>
            <H>
              <Cardtitle>
              {areacode === 1
            ? 'Seoul'
            : areacode === 2
            ? 'Incheon'
            : areacode === 3
            ? 'Daejeon'
            : areacode === 4
            ? 'Daegu'
            : areacode === 5
            ? 'Gwangju'
            : areacode === 6
            ? 'Busan'
            : areacode === 7
            ? 'Ulsan'
            : areacode === 8
            ? 'Sejong'
            : areacode === 31
            ? 'Gyeonggi'
            : areacode === 32
            ? 'Gangwon'
            : areacode === 33
            ? 'Chungbuk'
            : areacode === 34
            ? 'Chungnam'
            : areacode === 35
            ? 'Gyeongbuk'
            : areacode === 36
            ? 'GyeongNam'
            : areacode === 37
            ? 'JeonBuk'
            : areacode === 38
            ? 'Jeonnam'
            : 'Jeju'}
              </Cardtitle>
            </H>
          
            <CardImage
              img
              src={firstimage}
              onerror="this.src='images/default.png'"
            ></CardImage>
           </Link>
          <Heart />
        </Cardbox>
       
        <Cardname>{title}</Cardname>
        <Cardclass></Cardclass>
      </C>
    </div>

  );
};

export default TourItem;
