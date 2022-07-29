import React from 'react';
import styled from "styled-components";
import palette from "../../lib/styles/palette";

//  const sizeStyles = css`
//     ${props =>                         //다양한 사이즈 만드는
//      props.size === "large" &&
//     css`
//     height:3rem;
//     font-size: 1rem;
//     `}
//
//    ${props =>
//     props.size === "medium" &&
//     css`
//    height:3rem;
//    font-size: 1rem;
//     `}
//
//     ${props =>
//     props.size === "small" &&
//     css`
//     height:1.75rem;
//     font-size: 0.875rem;
//     `}
// `;


const StyledButton = styled.button`
display: iflex;
outline: none;
border: none;
border-radius: 30px;
color: white;
cursor: pointer;
padding: 1rem;
align-items: center;
text-align: center;

height: 3rem;
width: 24rem;
font-size: 1rem;

background: ${palette.gray[1]};
&hover {
    background: ${palette.main[0]};
}

`;

const Button = props => <StyledButton {...props} />;

export default Button;


