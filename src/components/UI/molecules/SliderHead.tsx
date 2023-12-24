import React from 'react';
import styled from 'styled-components';
import BtnsForSlider from '../atoms/BtnsForSlider';

const SliderHeadDiv = styled.div`
    height: 44px;
`
const StyledP = styled.p`
    font-family: "Syne";
    font-weight: 800;
    font-size: 32px;
`

const SliderHead = () => {
    return (
        <SliderHeadDiv>
            <StyledP>POPULAR TOURS</StyledP>
        </SliderHeadDiv>
    );
};

export default SliderHead;