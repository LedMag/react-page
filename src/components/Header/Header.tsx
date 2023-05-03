import React from 'react';
import { HeaderStyled, NavLink, Logo, Top } from './HeaderStyles';
import logoImg from 'utils/images/logo.png';
import logoSmallImg from 'utils/images/logo-small.png';
import Navbar from 'components/Navbar/Navbar';
import LanguageDropdown from 'components/LanguageDropdown/LanguageDropdown';
import { LOCALES } from 'i18n/locales';

const Header = ({currentLang, setLocale}: any): JSX.Element | null => {

    const links = ["main", "products", "cart", "admin", "login"];

    const languages = [
        { name: 'en', code: LOCALES.ENGLISH },
        { name: 'ru', code: LOCALES.RUSSIAN },
        { name: 'es', code: LOCALES.SPANISH },
    ]

    return (
        <HeaderStyled>
            <Top>
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <LanguageDropdown langs={languages} currentLang={currentLang} setLocale={setLocale} />
            </Top>
            <Navbar links={links} />
        </HeaderStyled>
    )
}

export default Header;
