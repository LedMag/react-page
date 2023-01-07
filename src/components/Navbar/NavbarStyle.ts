import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme/colors';

type Open = {open: boolean};

export const Menu = styled.menu`
    @media(min-width: 320px) {     
        width: 100%;
        padding-top: 2px;
        padding-bottom: 2px;
        border-top: 1px solid ${colors.blue};
        border-bottom: 1px solid ${colors.blue};
    }
`

export const Inner = styled.div`
    @media(min-width: 320px) {
        position: relative;
        height: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        background-color: ${colors.blue};
    }

    @media(min-width: 768px) {
        position: unset;
        height: auto;
    }
`
export const FilterButton = styled.div<Open>`
@media(min-width: 320px) {
    position: relative;
    height: 3px;
    width: 15px;
    background-color: ${ ({open}) => open ? colors.blue : colors.white};
    transition: all 0.3s easy;
    // &:after {
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     top: ${ ({open}) => open ? 0 : -6}px;
    //     left: 0;
    //     height: 3px;
    //     width: 15px;
    //     transform: rotate(${ ({open}) => open ? 45 : 0}deg);
    //     background-color: ${colors.white};
    //     transition: all 0.3s easy;
    // }

    // &:before {
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     top: ${ ({open}) => open ? 0 : 6}px;
    //     left: 0;
    //     height: 3px;
    //     width: 15px;
    //     transform: rotate(${ ({open}) => open ? -45 : 0}deg);
    //     background-color: ${colors.white};
    //     transition: all 0.3s easy;
    // }
}

@media(min-width: 768px) {
    display: none;
}
`


export const Button = styled.div<Open>`
    @media(min-width: 320px) {
        position: relative;
        height: 3px;
        width: 15px;
        background-color: ${ ({open}) => open ? colors.blue : colors.white};
        transition: all 0.3s easy;
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: ${ ({open}) => open ? 0 : -6}px;
            left: 0;
            height: 3px;
            width: 15px;
            transform: rotate(${ ({open}) => open ? 45 : 0}deg);
            background-color: ${colors.white};
            transition: all 0.3s easy;
        }

        &:before {
            content: '';
            display: block;
            position: absolute;
            top: ${ ({open}) => open ? 0 : 6}px;
            left: 0;
            height: 3px;
            width: 15px;
            transform: rotate(${ ({open}) => open ? -45 : 0}deg);
            background-color: ${colors.white};
            transition: all 0.3s easy;
        }
    }

    @media(min-width: 768px) {
        display: none;
    }
`

export const Nav = styled.nav<Open>`
    @media(min-width: 320px) {
        display: ${ ({open}) => open ? 'flex' : 'none'};
        position: absolute;
        top: 28px;
        right: 0;
        padding: 10px;
        background-color: ${colors.blue};
        z-index: 99;
    }

    @media(min-width: 768px) {
        position: unset;
        width: 100%;
        display: flex;
        padding: 0;
        background-color: ${colors.blue};
    }
`
export const Ul = styled.ul`
    @media(min-width: 320px) {
        display: flex;
        flex-direction: column;
        margin: 0;
        list-style-type: none;
    }

    @media(min-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: flex-end;
        background-color: ${colors.blue};
    }
`
export const Li = styled.li`
    @media(min-width: 320px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 5px 0;
    }

    @media(min-width: 768px) {
        justify-content: center;
        margin-left: 10px;
    }
`

export const NavLink = styled(BaseNavLink)`
    @media(min-width: 320px) {
        font-family: 'Ghotic';
        opacity: 0.8;
        text-decoration: none;
        font-size: 16px;
        line-height: 16px;
        color: ${colors.black};
    
        &:hover {
            color: ${colors.white}
        };
    }
`