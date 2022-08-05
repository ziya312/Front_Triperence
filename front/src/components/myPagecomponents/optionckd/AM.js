import React, {useState, useEffect} from "react"
import styled from "styled-components"
import ModalPerformance from "components/common/ModalPerformance"
import AuthService from "../../Header/services/auth.service";

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
const AM = () => {
const [snsg, setsnsg] = useState("on");
const [snsf, setsnsf] = useState("on");
const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    })
const onClickg = () => {
    if (snsg === 'on') {
        setsnsg("off")
}  else {setsnsg("on")}}
    const onClickf = () => {
        if (snsf === 'on') {
            setsnsf("off")
        }  else {setsnsf("on")}}
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
                <div onClick={onClickg}>
                {snsg === 'on' ? <img src={require("icons/sns1.svg").default} alt="" className="snsbtnimg"></img> :  <img src={require("icons/sns2.svg").default} alt="" className="snsbtnimg"></img> }
                </div>
                <ATT style={{marginTop:"12px",marginLeft:"100px"}}> vfvbf
                </ATT>
                <input className='snsbtn' type="checkbox"/>
                <div onClick={onClickf}>
                    {snsf === 'on' ? <img src={require("icons/sns1.svg").default} alt="" className="snsbtnimg"></img> :  <img src={require("icons/sns2.svg").default} alt="" className="snsbtnimg"></img> }
                </div>
            </UU>
            <UU>
                <AT>Password 
                </AT>

                <ModalPerformance value="Password"/>
            </UU>
                <UU>
                    <AT>Name
                    </AT>
                    <ATT style={{marginBottom:"24px"}}> ikiouliulyu
                    </ATT>
                    <ATT style={{marginLeft:"100px"}}> ikiouliulyu
                </ATT>
                    <ModalPerformance value="Name"/>

                </UU>
                <UU>
                    <AT>Gender
                    </AT>
                    <ATT> ikiouliulyu
                    </ATT>
                    <ModalPerformance value="gender"/>
                </UU>
                <UU>
                    <AT>Age
                    </AT>
                    <ATT> ikiouliulyu
                    </ATT>
                    <ModalPerformance value="age"/>
                </UU>
                <UU>
                    <AT>Nationality
                    </AT>
                    <ATT> ikiouliulyu
                    </ATT>
                    <ModalPerformance value="gen"/>
                </UU>
                


            </>
            
        )


}
export default AM;
