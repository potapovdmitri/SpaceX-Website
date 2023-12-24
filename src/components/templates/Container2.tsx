import React from 'react';
import styled from 'styled-components';
import ScrollerBottom from '../UI/molecules/ScrollerBottom';
import Slider from '../UI/organisms/Slider';

const StyledContainer2 = styled.div`
    width: 100%;
    height: 816px;
    margin-top: 96px;
    padding: 0 80px 0 80px;
`
const Container2 = () => {
    return (
        <StyledContainer2>
            <ScrollerBottom/>
            <Slider/>
        </StyledContainer2>
    );
};

export default Container2;