import styled from 'styled-components';

export const StyledLink = styled.a`
margin: 16px;
color: white;
font-size: 16px;
font-family: "Lato-Medium";
text-decoration: none;
background: no-repeat 0 100%;
background-image: linear-gradient(currentColor, currentColor);
background-size: 0% 1px;
transition: background-size 0.6s ease;
&:hover, &:focus {
  background-size: 100% 1px;
}
`;