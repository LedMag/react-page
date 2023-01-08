import React, { useEffect, useState } from 'react';
import { Menu, Nav, Ul, Li, NavLink, Inner, Button, FilterButton } from './NavbarStyle';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_FILTER } from 'redux/constans';
import { useLocation } from 'react-router-dom';

const Navbar = ({links}: any):JSX.Element => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [open, setOpen] = useState(false);
    const { isOpen } = useSelector( (store: any) => {
        return {
            isOpen: store.toggleFilter,
        }
    });

    const getLinkElements = (arr: Array<string>): Array<JSX.Element> => {
        const elements = arr.map( (link, index) => {
            return (
            <Li key={index} onClick={ (e) => {
                e.preventDefault();
                setOpen(!open);
            }}>
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
            <Inner hasSearch={location.pathname.includes('products')}>
                <FilterButton open={isOpen} onClick={ (e) => {
                        e.preventDefault();
                        dispatch({type: TOGGLE_FILTER, payload: !isOpen});
                    }} >
                    O--
                </FilterButton>
                <Nav open={open}>
                    <Ul>
                        {getLinkElements(links)}
                    </Ul>
                </Nav>
                <Button open={open} onClick={ (e) => {
                        e.preventDefault();
                        setOpen(!open);
                    }} />
            </Inner>
        </Menu>
    )
}

export default Navbar;