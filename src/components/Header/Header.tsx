import React from 'react';
import { HeaderStyled, NavLink, Logo, Info } from './HeaderStyles';
import logoImg from 'utils/images/logo.png';
import Navbar from 'components/Navbar/Navbar';
import LanguageDropdown from 'components/LanguageDropdown/LanguageDropdown';
import { LOCALES } from 'i18n/locales';

const Header = ({currentLang, setLocale}: any): JSX.Element | null => {

    const links = ["main", "products", "login", "registration", "logout"];

    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
        { name: 'Español', code: LOCALES.SPANISH },
      ]

    return (
        <HeaderStyled>
                <NavLink to="/">
                    <Logo src={logoImg} alt="Logo"></Logo>
                </NavLink>
                <Navbar links={links} />
            <LanguageDropdown langs={languages} currentLang={currentLang} setLocale={setLocale} />
            <Info />
        </HeaderStyled>
    )
}

export default Header;