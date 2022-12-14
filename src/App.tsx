import React, { useEffect, useState } from 'react';
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
import Logout from 'pages/Logout/Logout';
import PrivateRoutes from 'utils/PrivateRoutes';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import CreateProducts from 'pages/admin/CreateProducts.ts/CreateProducts';
import ProductDetails from 'components/Product/ProductDetails/ProductDetails';
import Admin from 'pages/admin/Admin';

const App = (): JSX.Element => {

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const { user } = useSelector( (store: any) => {
    return {
        user: store.setUser,
    }
  });

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  const handleChange = (lang: string) => {
    setCurrentLocale(lang)
    localStorage.setItem('locale', lang)
  }

  const isAuth = user && user.role === 'admin' ? true : false

  return (
    <IntlProvider locale={currentLocale} defaultLocale={LOCALES.ENGLISH} messages={messages[currentLocale]}>
      <Container>
        <Router>
          <Header currentLang={currentLocale} setLocale={handleChange} />
            <main style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'position': 'relative'}}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="products" element={<Catalog isAllowed={false} />} />
                    <Route path="products/:id" element={<ProductDetails />} />
                    <Route path="admin" element={<PrivateRoutes children={<Admin />} isAllowed={isAuth} path='/' />} >
                      <Route path="" element={<CreateProducts />} />
                      <Route path="products" element={<Catalog isAllowed={isAuth} />} />
                      <Route path="addProducts" element={<CreateProducts />} />
                      <Route path="logout" element={<Logout />} />
                      {/* <Route path="registration" element={<Registration />} /> */}
                      <Route path="*" element={<CreateProducts />} />
                    </Route>
                    <Route path="login" element={<Login />} />
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
