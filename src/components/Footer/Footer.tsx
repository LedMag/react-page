import { Menu, Nav, Ul } from 'components/Navbar/NavbarStyle';
import React from 'react';
import { FooterStyled } from './FooterStyle';

const Footer = (): JSX.Element | null  => {
    return (
        <FooterStyled>
            <Menu>
                <Nav>
                    <Ul>
                        <div style={{"height": "16px"}}></div>
                    </Ul>
                </Nav>
            </Menu>
        </FooterStyled>
    )
}

export default Footer;