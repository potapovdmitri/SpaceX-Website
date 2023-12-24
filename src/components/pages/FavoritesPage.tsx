import React from 'react';
import Container1 from '../templates/Container1';
import FavoritesContainer from '../templates/FavoritesContainer';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

const StyledFavoritesPage = styled.div`
    max-width: 1440px;
    min-height: 1249px;
    height: fit-content;
    margin: 0 auto;
`
const FavoritesPage: React.FC = () => {
    return (
        <StyledFavoritesPage>
            <Container1 page='favorite'/>
            <FavoritesContainer />
        </StyledFavoritesPage>
    );
};

export default FavoritesPage;