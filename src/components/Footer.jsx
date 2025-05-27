import React from 'react';
import { motion } from 'framer-motion';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Mail from 'lucide-react/dist/esm/icons/mail';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-forest-green text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{t('header.title')}</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-blue transition-colors">
            <Instagram size={28} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-blue transition-colors">
            <Facebook size={28} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="mailto:contacto@nataliaflorian.com" className="text-gray-300 hover:text-sky-blue transition-colors">
            <Mail size={28} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p className="mb-1">{t('footer.rights', { year: currentYear })}</p>
          <p>{t('footer.developedBy')}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;