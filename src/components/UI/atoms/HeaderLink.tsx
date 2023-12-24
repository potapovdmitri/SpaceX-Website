import React, { FC } from "react";
import { StyledLink } from './HeaderLink.styles';

interface ILink {
    href: string;
    children: React.ReactNode;
  }

const HeaderLink: FC<ILink> = ({href, children}) => {
  return <StyledLink href={href}>{children}</StyledLink>
};

export default HeaderLink;
