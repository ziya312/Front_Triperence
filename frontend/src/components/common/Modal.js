import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import lll from "icons/x.svg"
import Mage from "./modals/Mage";
import "components/common/Modal.css"
import Mgen from "./modals/Mgen";

const Modal = ({onClose, value}) => {


    const handleClose = () => {
        onClose?.();
    };

    return (
        <Overlay>
            <ModalWrap>
                <CloseButton onClick={handleClose}>

                </CloseButton>
                <Contents>

                <div className="Mtitle">{value}  Change</div>
                {value === 'gen' ? <Mgen /> : value === 'age' ? <Mage/> : <div>vxczvzxcv</div>}

                    <Button onClick={handleClose}>닫혀라 모달!</Button>



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
  font-size: 14px;
  border: none;
  background-color: #ababab;
  border-radiusc: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 45px;

  color: #FFFFFF;
margin 40px auto;
width: 384px;
height: 48px;

background: #77AEFC;
border-radius: 30px;

`;

export default Modal;
