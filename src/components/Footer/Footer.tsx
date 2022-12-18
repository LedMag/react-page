import React from 'react';
import { FooterStyled, Bar, Inner, Bottom } from './FooterStyle';

const Footer = (): JSX.Element | null  => {
    return (
        <FooterStyled>
            <Bar>
                <Inner />
            </Bar>
            <Bottom />
        </FooterStyled>
    )
}

export default Footer;