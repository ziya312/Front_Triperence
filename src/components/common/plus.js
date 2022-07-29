import styled from "styled-components";

import plus from "icons/plus.svg";
const P = styled.div`
border-radius: 20px;
border: 0px none;
clear: none;
background-color: transparent;
background-repeat: no-repeat;
background-size: contain;
float: right;
margin-right: 10px;
margin-top: 8px;
width: 28px;
height: 28px;
background-image: url(${plus});

        `;

const Plus = () => {
    return (
    <P onClick={() => alert("개발예정")}></P>
    )}

export default Plus;
