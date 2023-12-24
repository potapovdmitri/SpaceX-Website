import styled from "styled-components";

export const StyledBtnSign = styled.button`
    width: 163px;
    font-family: "Syne";
    font-weight: 600;
    font-size: 24px;
    background-color: rgba(211, 234, 255, 1);
    border: 0;
    -webkit-transition: background 0.3s ease;
    -o-transition: background 0.3s ease;
    transition: background 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: rgba(161, 210, 255, 1);
    }
    &: active {
        font-size: 22px;
        color: white;
    }
`