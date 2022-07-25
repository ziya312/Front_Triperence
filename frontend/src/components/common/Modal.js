import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import M from "icons/x.svg"

const Modal = ({onClose}) => {
    const [values, setValues] = useState({
        gender: "",
        age: "",
    });
    const handleClose = () => {
        onClose?.();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const showData = () => {
        console.log("value:", values);
    };

    return (
        <Overlay>
            <ModalWrap>
                <CloseButton onClick={handleClose}>
                    <i></i>
                </CloseButton>
                <Contents>
                    <div style={{height:"18px", width:"100%"}}/>
                  <Mimg/>
                    <Button onClick={handleClose}>닫혀라 모달!</Button>



                </Contents>
            </ModalWrap>
        </Overlay>
    );
};
            const Mimg = styled.div`
            background-image: url(${M});
            height: 22px;
            margin-left: 506px;

            margin-bottom: 18px;
  background-repeat: no-repeat;
  background-size: contain;


            `
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
margin-left: calc(50% - 294px);
margin-top: calc(30% - 189px);
background: #FFFFFF;
border-radius: 20px;
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;

  i {
    color: #5d5d5d;
    font-size: 30px;
  }
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
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radiusc: 10px;
  color: white;
  cursor: pointer;
  $: hover {
    background-color: #898989;
  }
`;

export default Modal;
