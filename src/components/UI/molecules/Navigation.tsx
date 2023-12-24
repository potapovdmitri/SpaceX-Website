import React from 'react';
import HeaderLink from '../atoms/HeaderLink';

const Navigation = () => {
    return (
        <div>
        <HeaderLink href='/'>HOME</HeaderLink>
        <HeaderLink href=''>TOURS</HeaderLink>
        <HeaderLink href=''>ABOUT</HeaderLink>
        <HeaderLink href=''>HELP</HeaderLink>
        </div>
    );
};

export default Navigation;