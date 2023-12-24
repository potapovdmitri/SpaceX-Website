import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    color: white;
    font-size: 32px;
    font-family: "Lato-Light";
    -webkit-text-stroke: 0.8px #000;
    margin-right: 7px;
    background: transparent;
    border: 0;
    margin: 0;
    cursor: pointer;
&:hover {
    -webkit-text-stroke: 0px;
}
&:active {
    -webkit-text-stroke: 1px white;
}
`

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  }
  
  
  export const BtnScroll: React.FunctionComponent<ButtonProps> = ({ children, ...buttonProps }) => {
    return <StyledButton {...buttonProps}>{children}</StyledButton>;
  };