import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import lll from 'icons/x.svg';
import Mage from './modals/Mage';
import 'components/common/Modal.css';
import Mgen from './modals/Mgen';
import AuthService from 'components/Header/services/auth.service';
import axios from 'axios';

const Modal1 = ({ onClose }) => {
  const currentUser = AuthService.getCurrentUser();

  const handleClose = () => {
    onClose?.();
  };

  // const Unregister = async () => {
  //   try {
  //     const response = await axios.delete(`http://localhost:8080/api/auth//delete/${currentUser}`);
  //   } catch (e) {}
  // };

  // const handleApi = () => {
  //   axios
  //     .post('api/auth//delete/${seq}', {
  //       "transportation": ty.transportation,
  //       "stay": ty.stay,
  //       "destination": ty.destination,
  //       "category": ty.category,
  //       "eat": eatResult,
  //       "allergie": allergieResult,
  //       "k_pop": k_popResult,
  //       "k_movie_drama": k_movieResult,
  //       "user_id":  currentUser.id,
  //       "user_email": currentUser.email,

  //     })
  //     .then(function (response) {
  //       alert('다음장');
  //       navigate('/showResult');
  //       // console.log(response.data);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //       alert('service error');
  //       console.log(error.data);
  //     });
  // };
  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}></CloseButton>
        <Contents>
          <div className="Mtitle">Would you like to apply to cancel your membership?</div>

          <Button onClick={handleClose}>No</Button>
          <Button1 onClick={handleClose}>Yes[unregister]</Button1>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 588px;
  height: 278px;

  background: #ffffff;
  border-radius: 20px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 21px;
  height: 22px;

  margin: 20px;
  cursor: pointer;
  background-image: url(${lll});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Contents = styled.div`
  margin: 50px 30px;

  h1 {
    font-size: 30px;
    font-weight: 600;
    matgin-bottom: 60px;
  }
`;

const Button = styled.div`
  width: 180px;
  height: 48px;
  float: left;
  margin-left: 78px;
  margin-top: 70px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 30px;
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  color: #d1d1d1;
`;
const Button1 = styled.div`
  width: 180px;
  height: 48px;
  text-align: center;
  float: left;
  margin-left: 24px;
  margin-top: 70px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;

  border-radius: 30px;
  color: #d1d1d1;
`;

export default Modal1;
