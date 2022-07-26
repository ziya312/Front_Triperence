import Modal from "./Modal";
import styled from "styled-components";
import {useState} from "react";


const ModalPerformance = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickButton = () => {
        setIsOpen(true);
    };
    return (
<>
            <TXT style={{color:'#77AEFC'}} onClick={onClickButton}>Change</TXT>
            {isOpen && (
                <Modal N={props.V}
                    open={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                />
            )}
        </>
    );
};

const TXT = styled.button`



font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;


text-align: right;
width: 78px;
height: 18px



`;


export default ModalPerformance;
