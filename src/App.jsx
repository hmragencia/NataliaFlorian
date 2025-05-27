import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import HikeDetailPage from '@/pages/HikeDetailPage';
import Layout from '@/components/Layout';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  const phoneNumber = "573028519920";
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('header.title') + " - " + t('hero.subtitle');
  }, [t]);


  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caminata/:id" element={<HikeDetailPage />} />
        </Routes>
        <Toaster />
        <WhatsAppButton phoneNumber={phoneNumber} />
      </Layout>
    </Router>
  );
}

export default App;