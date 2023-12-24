import React, { useEffect } from 'react';
import styled from 'styled-components';
import { favoriteRockets, pageTypeState } from '../state/atoms';
import { useRecoilState } from 'recoil';
import SliderCard from '../UI/molecules/SliderCard';

const StyledFavoritesContainer = styled.div`
    position: relative;
    background-color: white;
    min-height: 809px;
    height: fit-content;
    margin-top: -300px;
    padding: 0 80px 0 80px;
    z-index: 4;
`
const StyledContentBlock = styled.div`
    width: 100%;
    padding-top: 64px;
    min-height: 641px;
`
const StyledHeadFavorites = styled.p`
    display: flex;
    justify-content: flex-end;
    font-family: "Lato-Light";
    font-size: 24px;
&:hover {
    cursor: pointer;
    text-decoration: underline;
}
`
const StyledFavoritesBlock = styled.div`
    display: grid;
    margin-top: 40px;
    height: 572px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 24px;
    row-gap: 24px;
`
const FavoritesContainer = () => {
    const [favoriteRocketsState, setFavoriteRockets] = useRecoilState(favoriteRockets);
    const [pageType, setPageType] = useRecoilState(pageTypeState);
    
    const deleteAll = () => {
        setFavoriteRockets([])
    }
    useEffect(() => {
        if(pageType === "favorite") return
        else setPageType("favorite");
    }, [])
    return (
        <StyledFavoritesContainer>
            <StyledContentBlock>
                <StyledHeadFavorites onClick={() => deleteAll()}>Clear all</StyledHeadFavorites>
                <StyledFavoritesBlock>
                    {favoriteRocketsState 
                    ? favoriteRocketsState.map((x:any, index:number) => 
                        <SliderCard key = {index} rockets = {x} page = {pageType}/>)
                    : null
                    }
                </StyledFavoritesBlock>
            </StyledContentBlock>
        </StyledFavoritesContainer>
    );
};

export default FavoritesContainer;