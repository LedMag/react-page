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
import { useDispatch, useSelector } from 'react-redux';
import CreateProducts from 'pages/admin/CreateProducts/CreateProducts';
import ProductDetails from 'components/Product/ProductDetails/ProductDetails';
import Admin from 'pages/admin/Admin';
import { SET_LANG } from 'redux/constans';
import Cart from 'pages/Cart/Cart';

const App = (): JSX.Element => {

  const dispatch = useDispatch();

  const { user } = useSelector( (store: any) => {
    return {
        user: store.setUser,
    }
  });

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const handleChange = (lang: string) => {
    setCurrentLocale(lang);
    dispatch({type: SET_LANG, payload: lang});
    localStorage.setItem('locale', lang);
  }

  useEffect( () => {
    setCurrentLocale(currentLocale);
    dispatch({type: SET_LANG, payload: currentLocale});
    localStorage.setItem('locale', currentLocale);
  }, [dispatch])

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
                    <Route path="cart" element={<Cart />} />
                    <Route path="products/:id" element={<ProductDetails />} />
                    <Route path="admin" element={<PrivateRoutes children={<Admin />} isAllowed={isAuth} path='/' />} >
                      <Route path="" element={<CreateProducts edit={false} />} />
                      <Route path="products" element={<Catalog isAllowed={isAuth} />} />
                      <Route path="products/edit/:id" element={<CreateProducts edit={true} />} />
                      <Route path="addProducts" element={<CreateProducts edit={false} />} />
                      <Route path="logout" element={<Logout />} />
                      {/* <Route path="registration" element={<Registration />} /> */}
                      <Route path="*" element={<CreateProducts edit={false} />} />
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
