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
            <TXT onClick={onClickButton}>{}</TXT>
            {isOpen && (
                <Modal
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


  height: 48px;
  width: 48px;
  border: none;
  background-repeat: no-repeat;


  border-radius: 10px;


  background-color: red;
  background-repeat: no-repeat;
  background-size: contain;

`;

const ModalPerformanceWrap = styled.button`

  margin: 10px -370px;
  border: 0px none;
  clear: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
`;

export default ModalPerformance;
