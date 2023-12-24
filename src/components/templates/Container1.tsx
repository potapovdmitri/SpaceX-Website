import React, { FC } from 'react';
import Header from '../UI/organisms/Header';
import BannerSectionSlider from '../UI/organisms/BannerSection';
import styled from 'styled-components';

const StyledContainer1 = styled.div`
    width: 100%;
    max-height: 740px;
    overflow: hidden;
`
type MyContainer1 = {
    page: string;
}
const Container1: FC<MyContainer1> = ({page}) => {
    return (
        <StyledContainer1>
            <Header page={page}/>
            <BannerSectionSlider page={page}/>
        </StyledContainer1>
    );
};

export default Container1;