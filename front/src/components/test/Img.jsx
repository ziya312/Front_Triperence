import React, { Component, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/testShow.css';
import styled from 'styled-components';
import CustomButton from '../common/CustomButton';

const MyB = styled.button`
  border: 1px solid #77aefc;
  color: #77aefc;
  border-radius: 30px;
  width: 150px;
  background: none;
  text-align: center;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1200px) {
    .MyB {
      font-size: 10px;
    }
  }
`;

const Img = (props) => {
  return (
    <div>
      <div className="card__container">
        <div className="cards__wrapper">
          <label className="text"> Dear.{props.name}</label>
          <label className="text">
            <div>
              You are <span>{props.value}</span>
            </div>
          </label>
          <img src={props.imageSrc} />
          <MyB>{props.type}Lover</MyB>
        </div>
      </div>
    </div>
  );
};

export default Img;
