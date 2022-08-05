import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import lll from "icons/x.svg"
import Mage from "./modals/Mage";
import "components/common/Modal.css"
import Mgen from "./modals/Mgen";
import Password from "./modals/Password";
import Mname from "./modals/Mname";

const Modal = ({onClose, value}) => {




    return (
        <Overlay>
            <ModalWrap>



                {value === 'gender' ? <Mgen onClose={onClose} value={value}/> : value === 'age' ? <Mage onClose={onClose} value={value}/> :value === 'Password' ? <Password onClose={onClose} value={value}/>:value === 'Name' ? <Mname onClose={onClose} value={value}/>: <div></div>}






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


background: #FFFFFF;
border-radius: 20px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;




export default Modal;
