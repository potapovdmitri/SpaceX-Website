import React, { FC } from 'react';
import styled from 'styled-components';
import "../../../App.css"

const CardBtnsWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0 32px 0 32px;
`
const StyledBuyBtn = styled.button`
    max-width: 278px;
    width: 100%;
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

type PageType = {
    page: string; 
}
const CardButtons:FC <PageType> = ({page}) => {
    return (
        <CardBtnsWrapper>
            <StyledBuyBtn>BUY</StyledBuyBtn>
            {page === "main" 
            ?
            <button className='favorite-card-btn'>
                <img src={process.env.PUBLIC_URL + '/images/icons/Heart.png'} alt='Like'/>
            </button>
            : 
            <button className='favorite-card-btn'>
                <img src={process.env.PUBLIC_URL + '/images/icons/GarbageCan.png'} alt='Dislike'/>
            </button>
            }
        </CardBtnsWrapper>
    );
};

export default CardButtons;