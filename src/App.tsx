import { useEffect, useState } from 'react';
import AOS from 'aos';
import { useLocation, useMatch, useRoutes } from 'react-router-dom';
import routes from './router';
import { TopNav, Navbar, Footer, PagesWrapper } from './components';
import { useCallApi, useLang } from './hooks';
import { ROUTES } from './constants';
import './styles/app.scss';
import 'swiper/css/pagination';
import { FooterData, HeaderData } from './models';
import NavbarContextProvider from './contexts/navbar-context';

function App() {
  const content = useRoutes(routes);
  const match = useMatch(ROUTES.home);
  const location = useLocation();
  const currentLanguage = useLang();
  const { data: headerData, isLoading } = useCallApi<HeaderData>('/header');
  const { data: footerData, isLoading: footerLoading } =
    useCallApi<FooterData>('/footer');

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const direction = currentLanguage === 'en' ? 'ltr' : 'rtl';
    document.dir = direction;
    document.body.dir = direction;
    document.documentElement.setAttribute('lang', currentLanguage);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <div className='App'>
      <NavbarContextProvider>
        <PagesWrapper loading={isLoading || footerLoading}>
          <div>
            <TopNav headerData={headerData} />
            <Navbar isWhiteBg={!match} navBarData={headerData} />
          </div>

          {content}
          <Footer footerData={footerData} />
        </PagesWrapper>
      </NavbarContextProvider>
    </div>
  );
}

export default App;
