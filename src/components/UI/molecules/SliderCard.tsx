import React from 'react';
import styled from 'styled-components';
import CardButtons from '../atoms/CardBtns';
import { useRecoilState } from 'recoil';
import { allRockets, favoriteRockets} from '../../state/atoms';

const StyledCard = styled.figure`
    min-width: fit-content;
    height: 572px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(211, 234, 255, 1);
`
const StyledFigcaption = styled.figcaption`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 30px;
`
const StyledHeader = styled.p`
    font-family: "Syne";
    font-weight: 700;
    font-size: 24px;
    height: 29px;
    margin-bottom: 16px;
`
const StyledDescription = styled.p`
    font-family: "Lato-Light";
    font-size: 24px;
    height: 58px;
    margin-bottom: 64px;
`
const StyledImg = styled.img`
    width: 100%;
    height: 296px;
    margin-bottom: 32px;
`

const SliderCard = (props: any) => {
    const [allRocketsState, setRockets] = useRecoilState(allRockets)
    const [favoriteRocketsState, setFavoriteRockets] = useRecoilState(favoriteRockets)

    const addToFavorite = () => {
        const favorite = allRocketsState.find(elem => elem.key === props.rockets.key);
        if(favorite) {
            if(favoriteRocketsState.includes(favorite)) {
                return
            }
        setFavoriteRockets((prevState) => [...prevState, favorite])
        }
    }
    const deleteFromFavorite = () => {
        const toDeleteElem = favoriteRocketsState.find(elem => elem.key === props.rockets.key);
        setFavoriteRockets((prevState) => prevState.filter((elem) => elem !== toDeleteElem))
    }
    return (
        <StyledCard  
            id={props.rockets.id} onClick={(e:any) => {
                if (e.target.alt === "Like") {
                    addToFavorite();
                }
                else if (e.target.alt === "Dislike") {
                    deleteFromFavorite();
                }
            }
            }>
            <StyledImg src={process.env.PUBLIC_URL + `${props.rockets.image}`}/>
            <StyledFigcaption>
                <StyledHeader>{props.rockets.name}</StyledHeader>
                <StyledDescription>{props.rockets.description}</StyledDescription>
            </StyledFigcaption>
            <CardButtons page = {props.page}/>
        </StyledCard>
    );
};

export default SliderCard;