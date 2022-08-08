import MapModal from "./mapmodal";
import styled from "styled-components";
import {useState} from "react";
import op from "icons/filter.svg"

const Mapmodalper = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickButton = () => {
        setIsOpen(true);
    };
    return (
        <ModalPerformanceWrap>
            <Button onClick={onClickButton}></Button>
            {isOpen && (
                <MapModal
                    open={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                />
            )}
        </ModalPerformanceWrap>
    );
};

const Button = styled.button`


  height: 48px;
  width: 48px;
  border: none;
  background-repeat: no-repeat;

  background-image: url(${op});
  border-radius: 10px;


  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;

`;

const ModalPerformanceWrap = styled.button`

  margin: 10px 200px;
  border: 0px none;
  clear: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
`;

export default Mapmodalper;
