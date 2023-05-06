import styled from "styled-components";
import { Link as BaseLink } from 'react-router-dom';
import { colors } from 'theme/colors';
import { mediaMob } from "utils/FuncHelpers";


export const AdminContainer = styled.div`
    width: calc(100% - 20px);
    margin: 10px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 6px -2px rgb(0 0 0);
`

export const Menu = styled.menu`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 2px;
    padding-bottom: 2px;
    border-top: 1px solid ${colors.blue};
    border-bottom: 1px solid ${colors.blue};
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    padding: 0;
    background-color: ${colors.blue};
    z-index: 99;
`
export const Ul = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    background-color: ${colors.blue};
`
export const Li = styled.li`
    display: flex;
    justify-content: center;
    margin-right: 10px;
    align-items: center;
    padding: 5px 0;
`
//admin menu links
export const Link = styled(BaseLink)`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    opacity: 0.8;
    text-decoration: none;
    ${mediaMob('font-size', '13px')};
    ${mediaMob('margin', '1px')};
    line-height: 16px;
    color: ${colors.black};

    &:hover {
        color: ${colors.white}
    };
`
