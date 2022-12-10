import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme/colors';

export const Menu = styled.menu`
    grid-area: D;
    padding: 0;
`

export const Nav = styled.nav`
    margin-top: 22px;
    padding: 2px;
    border-top: 1px solid ${colors.blue};
    border-bottom: 1px solid ${colors.blue};
    
`
export const Ul = styled.ul`
    display: flex;
    justify-content: end;
    padding: 5px;
    margin: 0;
    background-color: ${colors.blue};
    list-style-type: none;
`
export const Li = styled.li`
    display: flex;
    align-items: center;
    margin-left: 5px;

`

export const NavLink = styled(BaseNavLink)`
    font-family: 'Ghotic';
    opacity: 0.8;
    text-decoration: none;
    font-size: 16px;
    line-height: 16px;
    color: ${colors.black};

    &:hover {
        color: ${colors.white}
    };
`