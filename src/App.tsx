import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { ConsentProvider } from './contexts/ConsentContext';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ConsentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="servicos" element={<Services />} />
            <Route path="sobre" element={<About />} />
            <Route path="contactos" element={<Contacts />} />
            <Route path="politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="politica-cookies" element={<CookiePolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConsentProvider>
  );
}

export default App;
