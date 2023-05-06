import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';
import logo from '../../utils/images/logo.png';
import logoSmall from '../../utils/images/logo-small.png';

export const HeaderStyled = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 320px) {}

    @media(min-width: 425px) {}

    @media(min-width: 768px) {}

    @media(min-width: 1024px) {}
`

export const NavLink = styled(BaseNavLink)`
    @media(min-width: 320px) {     
        width: 60px;
        height: 50px;
    }

    @media(min-width: 425px) {
        width: 220px;
        height: 70px;
    }

    @media(min-width: 768px) {
        width: 300px;
        height: 100px;
    }

`

export const Logo = styled.div`

    @media(min-width: 320px) {     
        width: 100%;
        height: 100%;
        background-image: url(${logoSmall});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        object-fit: contain;
    }

    @media(min-width: 425px) {
        background-image: url(${logo});
        background-position: 0 5px;
    }

    @media(min-width: 768px) {
        background-position: 0 10px;
    }
`

export const Top = styled.div`
    @media(min-width: 320px) { 
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
`