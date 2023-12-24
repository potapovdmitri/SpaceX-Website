import React, { FC } from 'react';
import Container1 from '../templates/Container1';
import Container2 from '../templates/Container2';
import styled from 'styled-components';

const StyledMainPage = styled.div`
    max-width: 1440px;
    min-height: 1652px;
    margin: 0 auto;
`
const MainPage: FC = () => {
    return (
        <StyledMainPage>
            <Container1 page='main'/>
            <Container2/>
        </StyledMainPage>
    );
};

export default MainPage;