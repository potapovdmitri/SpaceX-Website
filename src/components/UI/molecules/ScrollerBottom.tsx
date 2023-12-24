import React from 'react';
import styled from 'styled-components';
import { BtnScroll } from '../atoms/BtnScroller';

const ScrollerWrapper = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    top: -166px;
    display: flex;
    justify-content: center;
    z-index: 4;
`

const handlerScroll = (event: any) => {
    window.scrollBy({
        top: 876,
        behavior: "smooth",
    });
};

const ScrollerBottom = () => {
    return (
        <ScrollerWrapper>
            <BtnScroll onClick={(e:any) => handlerScroll(e)}>
            Explore tours
            <img src={process.env.PUBLIC_URL + '/images/icons/Arrow-Down.png'} 
                alt="V" width={"40px"} height={"40px"} style={{marginLeft: "8px"}}/>
            </BtnScroll>
        </ScrollerWrapper>
    );
};

export default ScrollerBottom;