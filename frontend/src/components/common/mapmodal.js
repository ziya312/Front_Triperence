import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import "components/common/mapm.css"


const MapModal = ({onClose}) => {
    const categories = [
    {
        name: 'all',
        text: 'All',
    },
    {
        name: 75,
        text: 'Leports',
    },
    {
        name: 76,
        text: 'Landmark',
    },
    {
        name: 78,
        text: 'Culture',
    },
    {
        name: 79,
        text: 'Shopping',
    },
    {
        name: 80,
        text: 'Accommodation',
    },
    {
        name: 82,
        text: 'Dining',
    },
    {
        name: 85,
        text: 'Festival',
    },
];
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
                <Title>Option</Title>
                <H/>
                <Title2>Accommodations</Title2>

                <div style={{marginLeft:"-24px"}}>
                <label className="B">
                    <input type="radio" name="Accommodations" style={{display:"none"}}/>
                    <div></div>
                    <input type="radio" name="Accommodations" style={{display:"none"}}/>
                    <div></div><input type="radio" name="Accommodations" style={{display:"none"}}/>
                    <div></div>
                    <input type="radio" name="Accommodations" style={{display:"none"}}/>
                    <div></div>



                </label>
            </div>

                <Title2>Restaurants</Title2>

                <div style={{marginLeft:"-24px"}}>
                    <label className="B">
                        <input type="radio" name="Restaurants" style={{display:"none"}}/>
                        <div></div>


                    </label>
                </div>

                <Title2>Landmark</Title2>

                <div style={{marginLeft:"-24px"}}>
                    <label className="B">
                        <input type="radio" name="Landmark" style={{display:"none"}}/>
                        <div></div>


                    </label>
                </div>

                <Button onClick={handleClose}>CANCEL</Button>
                <Button1 onClick={handleClose}>CHECK</Button1>
            </ModalWrap>
        </Overlay>
    );
};
const Title2 = styled.div`
width: 100%;
height: 22px;
margin-top: 74px;
margin-bottom:28px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
float: left;
text-align: left;

color: #000000;

`

const H = styled.hr`
margin-top:24px;`
const Title = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;

align-items: center;
text-align: center;

color: #000000;
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
width: 840px;
height: 900px;

background: #FFFFFF;
border-radius: 20px;

  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 24px 24px;
`;

const Button = styled.div`

width: 384px;
height: 48px;
float: left;
margin-left:-181px;
background: #FFFFFF;
border: 1px solid #D1D1D1;
border-radius: 30px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 50px;

text-align: center;
color: #CCCCCC;
margin-top:250px;

`
const Button1 = styled.div`
margin-left:24px;
float: left;
width: 384px;
height: 48px;
margin-top:250px;
background: #77AEFC;
border: 1px solid #77AEFC;
border-radius: 30px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 50px;
align-items: center;
text-align: center;
color: #fff;


`
export default MapModal;
