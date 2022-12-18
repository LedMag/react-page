import React, { useState } from 'react';
import { Menu, Nav, Ul, Li, NavLink, Inner, Button } from './NavbarStyle';
import { FormattedMessage } from 'react-intl';

const Navbar = ({links}: any):JSX.Element => {

    const [open, setOpne] = useState(false);

    const getLinkElements = (arr: Array<string>): Array<JSX.Element> => {
        const elements = arr.map( (link, index) => {
            return (
            <Li key={index}>
                <NavLink to={`/${link !== 'main' ? link : ''}` } key={index}>
                    <FormattedMessage id={link} />
                </NavLink>
            </Li>
            )
        })
        return elements;
    }

    return (
        <Menu>
            <Inner>
                <Nav open={open}>
                    <Ul>
                        {getLinkElements(links)}
                    </Ul>
                </Nav>
                <Button open={open} onClick={ (e) => {
                        e.preventDefault();
                        setOpne(!open);
                    }} />
            </Inner>
        </Menu>
    )
}

export default Navbar;