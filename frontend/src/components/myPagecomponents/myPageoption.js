import React from "react"
import styled from "styled-components"

const SS = styled.div`

width:336px;
height:50px;
margin-left: 24px;
margin-bottom: 24px;
line-height: 2vw;
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 16px;

letter-spacing: -0.03em;

color: #222222;

`
export default class MyPageoption extends React.Component {

    render() {
        return (
            
               
                <SS>
                    <img style={{float:'left', marginRight:'15px'}} src={require("icons/Vector.svg").default} alt=""/>
                    adadad
                </SS>
            
            
        )
    }

}
