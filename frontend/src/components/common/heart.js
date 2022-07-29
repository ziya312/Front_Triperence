import styled from 'styled-components';
import palette from 'lib/styles/palette';
import heart from 'icons/heart.svg';
const H = styled.div`
  float: right;
  width: 32px;
  height: 25px;
  margin-right: 20px;
  margin-bottom: 20px;

  background-image: url(${heart});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Heart = () => {
  return <H onClick={() => alert('개발예정')}></H>;
};

export default Heart;
