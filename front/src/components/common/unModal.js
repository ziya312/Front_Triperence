import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import lll from "icons/x.svg"
import Mage from "./modals/Mage";
import "components/common/Modal.css"
import Mgen from "./modals/Mgen";

const Modal1 = ({onClose}) => {


    const handleClose = () => {
        onClose?.();
    };

    return (
        <Overlay>
            <ModalWrap>
                <CloseButton onClick={handleClose}>

                </CloseButton>
                <Contents>

                    <div className="Mtitle">Would you like to
                        apply to cancel your membership?</div>


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

background: #FFFFFF;
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
float:left;
margin-left:78px;
margin-top:70px;
background: #FFFFFF;
border: 1px solid #D1D1D1;
border-radius: 30px;
 text-align : center;font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 50px;
color: #D1D1D1;

`;
const Button1 = styled.div`
width: 180px;
height: 48px;
 text-align : center;
float:left;
margin-left:24px;
margin-top:70px;
background: #FFFFFF;
border: 1px solid #D1D1D1;font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 50px;

border-radius: 30px;
color: #D1D1D1;
`;

export default Modal1;
