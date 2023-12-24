import React, { FC } from 'react';
import styled from 'styled-components';
import "../../../App.css"

const StyledDivForArrows = styled.div`
    width: 104px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
type MyButton = {
    direction?: string;
    className?: string;
}
const StyledBtnLeft = styled.button`
    height: 100%;
    border: 0;
    margin: 0;
    padding: 0
    z-index: 1;
& :hover {
    margin: 0;
    padding: 0;
    --angle: 0deg;
    border: 2px solid;
    border-image: linear-gradient(var(--angle), rgb(0, 213, 255), rgb(255, 255, 255)) 1;
	animation: 2s rotate linear infinite ;
    cursor: pointer;
}
& :active {
    border: 0;
}
`
const StyledBtnRight = styled.button`
    height: 100%;
    border: 0;
    margin: 0;
    padding: 0
    z-index: 1;
& :hover {
    margin: 0;
    padding: 0;
    --angle: 0deg;
    border: 2px solid;
    border-image: linear-gradient(var(--angle), rgb(0, 213, 255), rgb(255, 255, 255)) 1;
	animation: 2s rotate linear infinite ;
    cursor: pointer;
}
& :active {
    border: 0;
}
`

const BtnForSlider: FC<MyButton> = ({direction, className}) => {
    return (
        <>
            {
            direction === "left" 
            ? <StyledBtnLeft className={className}>
                <img src={process.env.PUBLIC_URL + '/images/icons/Arrowbtn-left.png'} alt="<"/>
            </StyledBtnLeft> 
            : <StyledBtnRight className={className}>
                <img src={process.env.PUBLIC_URL + '/images/icons/Arrowbtn-right.png'} alt=">"/>
            </StyledBtnRight>
            }
        </>
    );
};

export default BtnForSlider;