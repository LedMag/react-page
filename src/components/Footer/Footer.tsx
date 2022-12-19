import React from 'react';
import {
    FooterStyled,
    Bar,
    Inner,
    Bottom,
    Links,
    Link,
    Img
} from './FooterStyle';
import email from 'utils/images/footer/email.jpg';
import facebook from 'utils/images/footer/facebook.jpg';
import instagram from 'utils/images/footer/instagram.jpg';

const Footer = (): JSX.Element | null  => {
    return (
        <FooterStyled>
            <Bar>
                <Inner />
            </Bar>
            <Bottom>
                <Links>
                    <Link href="abanicosluciegabrielle@gmail.com" target="_blank">
                        <Img src={email} />
                    </Link>
                    <Link href="https://www.facebook.com/Abanicos-LucieGabrielle-307336746520321" target="_blank">
                        <Img src={facebook} />
                    </Link>
                    <Link href="https://www.instagram.com/abanicos_luciegabrielle/" target="_blank">
                        <Img src={instagram} />
                    </Link>
                </Links>
                <p>© 2022 Lucie Gabrielle - Все права защищены</p>
            </Bottom>
        </FooterStyled>
    )
}

export default Footer;