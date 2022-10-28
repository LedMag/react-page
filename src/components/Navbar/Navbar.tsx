import React from 'react';
import { Menu, Nav, Ul, Li, NavLink } from './NavbarStyle';
import { FormattedMessage } from 'react-intl';

const Navbar = ({links}: any):JSX.Element => {

    const getLinkElements = (arr: Array<string>): Array<JSX.Element> => {
        const elements = arr.map( (link, index) => {
            return (
            <Li key={index}>
                <NavLink to={"/" + link} key={index}>
                    <FormattedMessage id={link} />
                </NavLink>
            </Li>
            )
        })
        return elements;
    }

    return (
        <Menu>
            <Nav>
                <Ul>
                    {getLinkElements(links)}
                </Ul>
            </Nav>
        </Menu>
    )
}

export default Navbar;