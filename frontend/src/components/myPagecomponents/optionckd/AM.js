import React from "react"
import styled from "styled-components"
import ModalPerformance from "components/common/ModalPerformance"

const AT =styled.div`
width:100px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
float:left;
font-size: 16px;
line-height: 19px;


color: #000000;
`
const SS = styled.div`
width: 462px;



font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 43px;


color: #000000;
`
const UU = styled.div`
margin-left:24px;
margin-bottom: 24px;
width: 744px;
float:left;
`
const ATT =styled.div`
width: 500px;
height: 18px;
float:left;


font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;


color: #222222;

`
export default class AM extends React.Component {

    render() {
        return (
            
            <>
                <SS>
                Account Management
                </SS>
                <hr style={{margin:"30px 0px"}}></hr>
            <UU>
                
                <AT>ID(Email) 
                </AT>
                <ATT style={{width:"584px"}}> vfvbf
                </ATT>    
                
            </UU>
            <UU>
                
                <AT>Link to SNS 
                </AT>
                <ATT > vfvbf
                </ATT>
                <input className='snsbtn' type="checkbox"/>
                <ATT style={{marginTop:"12px",marginLeft:"100px"}}> vfvbf
                </ATT>
                <input className='snsbtn' type="checkbox"/>
                
            </UU>
            <UU>
                <AT>Password 
                </AT>
                <ATT> ikiouliulyu
                </ATT>    
                <ModalPerformance value="gen"/> 
            </UU>
                
                


            </>
            
        )
    }

}
