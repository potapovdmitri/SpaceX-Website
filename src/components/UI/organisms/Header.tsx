import React, { FC } from 'react';
import Navigation from '../molecules/Navigation';
import StyledHeader from './Header.styles';
import RightBtns from '../molecules/RightBtns';

type HeaderType = {
    page: string;
}
const Header:FC<HeaderType> = ({page}) => {
    return (
        <StyledHeader>
            <a href='/'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} 
                alt="Logo" width={"229px"} height={"29px"}/>
            </a>
            <Navigation/>
            <RightBtns page = {page}/>
        </StyledHeader>
    );
};

export default Header;