import React, { useEffect, useState } from 'react';
import { Container } from 'Container';
import { LOCALES } from 'i18n/locales'
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import Main from 'pages/Main/Main';
import Logout from 'pages/Logout/Logout';
import { useDispatch, useSelector } from 'react-redux';
import CreateProducts from 'pages/admin/CreateProducts/CreateProducts';
import PrivateRoutes from 'utils/PrivateRoutes';
import Navbar from 'components/Navbar/Navbar';
import { AdminContainer, Li, Menu, Nav, Link, Ul } from './AdminStyle';
import { FormattedMessage } from 'react-intl';
import Login from 'pages/Login/Login';
import { SET_LANG } from 'redux/constans';

const Admin = (): JSX.Element => {

    const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

    const links = ["configurations", "products", "addProducts"/*, "registration"*/, "logout"];

    const { user } = useSelector( (store: any) => {
        return {
            user: store.setUser,
        }
    });

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.ENGLISH
    }

    const getLinkElements = (arr: Array<string>): Array<JSX.Element> => {
        const elements = arr.map( (link, index) => {
            return (
            <Li key={index}>
                <Link to={link} key={index}>
                    <FormattedMessage id={link} />
                </Link>
            </Li>
            )
        })
        return elements;
    }

    const isAuth = user && user.roles?.includes('admin') ? true : false

    return (
        <>
        <Menu>
            <Nav>
                <Ul>
                    {getLinkElements(links)}
                </Ul>
            </Nav>
        </Menu>
        <AdminContainer>
            <Outlet />
        </AdminContainer>
        </>
    );
}

export default Admin;

