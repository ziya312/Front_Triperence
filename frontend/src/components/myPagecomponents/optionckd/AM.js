import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 462px;
  height: 38px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const Key = styled.div`
  width: 78px;
  height: 18px;
  left: 792px;
  top: 351px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  float: left;
  color: #000000;
`;

const Value = styled.div`
  width: 266px;
  margin-bottom: 24px;
  height: 18px;
  float: right;
  margin-right: 350px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #222222;
`;

export default class AM extends React.Component {
  render() {
    return (
      <>
        <Title>Account Management</Title>
        <hr style={{ height: '0px', width: '744px', margin: '30px 0' }} />
        <Key>ID(Email)</Key>
        <Value>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Value>

        <Key>Link to SNS</Key>
        <Value></Value>

        <Key>Password</Key>
        <Value></Value>

        <Key>Name</Key>
        <Value></Value>

        <Key>NickName</Key>
        <Value></Value>

        <Key>Gender</Key>
        <Value></Value>

        <Key>Age</Key>
        <Value></Value>

        <Key>Nationality</Key>
        <Value></Value>
      </>
    );
  }
}
