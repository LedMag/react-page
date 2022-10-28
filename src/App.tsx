import React, { useState } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { IntlProvider } from 'react-intl';
import { Container } from 'Container';
import { LOCALES } from 'i18n/locales'
import { messages } from 'i18n/messages'
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from 'pages/Catalog/Catalog';
import Product from 'components/Product/Product';
import Main from 'pages/Main/Main';

const App = (): JSX.Element => {

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  const handleChange = (lang: string) => {
    setCurrentLocale(lang)
    localStorage.setItem('locale', lang)
  }

  return (
    <IntlProvider locale={currentLocale} defaultLocale={LOCALES.ENGLISH} messages={messages[currentLocale]}>
      <Container>
        <Router>
          <Header currentLang={currentLocale} setLocale={handleChange} />
            <main style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'}}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/products" element={<Catalog />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="*" element={(<h2>Error 404</h2>)} />
                </Routes>
          </main>
        </Router>
        <Footer />
      </Container>
    </IntlProvider>
  );
}

export default App;