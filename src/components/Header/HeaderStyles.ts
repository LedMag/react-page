import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
    "A B"
    "A C"
    "D D";
`

export const NavLink = styled(BaseNavLink)`
    width: 410px;
    display: block;
    margin-left: 22px;
    grid-area: A;
`

export const Logo = styled.img`
    width: 100%;
    height: auto;
`

export const Info = styled.div`
    grid-area: C;

`