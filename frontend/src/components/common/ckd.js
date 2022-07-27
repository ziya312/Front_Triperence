import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const D = styled.button`
  width: 156px;
  height: 48px;
  border: 1px solid #77AEFC;
  border-radius: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #FFFFFF;
  text-align: center;
  color: #77AEFC;
  margin-left: 16px;

  &:hover {
    background: #FFFFFF;
  }
`
const R = styled.button`
  width: 21vw;
  height: 48px;
  margin-left: 1.25vw;

  margin-top: 2vw;
  margin-bottom: 2.5vw;

  background: #77AEFC;
  border-radius: 30px;


  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 2.604166666666667vw;

  text-align: center;

  color: #FFFFFF;


`
const L = styled.div`
  float: bottom;
  z-index: 10;

  position: sticky;
  box-sizing: border-box;

  border-radius: 30px;
  @media (max-width: 1200px) {
    .B {
      display: none;
    }
  }
  width: 24vw;
  height: 192px;

  left: 1176px;


  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 2
`;
const B = styled.div`
  float: bottom;
  z-index: 10;
  height: 0px;
  position: sticky;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    .B {
      display: none;
    }
  }

  left: 1176px;${`top: calc(100vh - 460px);`}


`;

const Box = () => {
    return (

        <B>
            <L>
                <Link to="/">
                    <R>Reservation</R>
                </Link>
                <Link to="/">
                    <D>Directions</D>
                </Link>
                <Link to="/">
                    <D>Call</D>
                </Link>
            </L>
        </B>

    )
}


export default Box;


