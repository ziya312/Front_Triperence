import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import HeartImg from 'icons/Heart.svg';
import EmptyHeartImg from "icons/EmptyHeart.svg";

const Heart = styled.img`
float: right;
margin-right: 12px;
`;

const HeartButton = ({ like, onClick }) => {
    return (
        <Heart src={like?HeartImg:EmptyHeartImg} onClick={onClick} />
    );
};

export default HeartButton;
