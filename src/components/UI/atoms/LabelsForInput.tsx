import React, { FC } from 'react';
import styled from 'styled-components';
type MyLabel = {
    htmlFor?: string;
    id?: string;
    style?: object;
    colorType?: string;
    className?: string;
}

const StyledWhiteLabel = styled.label`
display: inline-block;
--s: 24px; /* control the size */  
--c: #ffffff; /* the active color */

height: var(--s);
margin: 4px;
aspect-ratio: 1;
border: calc(var(--s)/20) solid #ffffff; 
padding: calc(var(--s)/4.7);
background: 
   radial-gradient(farthest-side,var(--c) 94%,#00000000) 
   50%/0 0 no-repeat content-box;
border-radius: 50%;
outline-offset: calc(var(--s)/10);
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor: pointer;
font-size: inherit;
transition: .3s;
`
const StyledBlackLabel = styled.label`
display: inline-block;
--s: 24px; /* control the size */  
--c: #000; /* the active color */

height: var(--s);
margin: 4px;
aspect-ratio: 1;
border: calc(var(--s)/20) solid #000; 
padding: calc(var(--s)/4.7);
background: 
   radial-gradient(farthest-side,var(--c) 94%,#00000000) 
   50%/0 0 no-repeat content-box;
border-radius: 50%;
outline-offset: calc(var(--s)/10);
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor: pointer;
font-size: inherit;
transition: .3s;
`

const MyLabel: FC<MyLabel> = ({htmlFor, id, style, colorType, className}) => {
    return (
        <>
        {colorType === "white" 
        ? <StyledWhiteLabel className={className} htmlFor={htmlFor} id={id} style={style} />
        : <StyledBlackLabel className={className} htmlFor={htmlFor} id={id} style={style} />
        }
        </>
    );
};

export default MyLabel;