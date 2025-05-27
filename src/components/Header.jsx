import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Check from 'lucide-react/dist/esm/icons/check';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9952c64f-bb24-4164-92dd-5bd8a408e951/d46e5f185775cedc8e9cbfffb673e459.png";

  const navItems = [
    { nameKey: 'header.home', path: '/', isExternal: false, sectionId: 'inicio' },
    { nameKey: 'header.about', path: '/#sobre-natalia', isExternal: false, sectionId: 'sobre-natalia' },
    { nameKey: 'header.services', path: '/#servicios', isExternal: false, sectionId: 'servicios' },
    { nameKey: 'header.contact', path: '/#contacto', isExternal: false, sectionId: 'contacto' },
  ];

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
  
    if (path.startsWith('/#')) { // Link a una sección en la página de inicio
      if (location.pathname === '/' && location.hash === path.substring(1)) {
        // Ya estamos en la sección correcta en la página de inicio
        scrollToSection(sectionId);
      } else if (location.pathname === '/') {
        // Estamos en la página de inicio, pero no en la sección correcta
        navigate(path); // Actualiza el hash para el historial y el efecto de useEffect
        scrollToSection(sectionId);
      } else {
        // No estamos en la página de inicio, navegar primero y luego scroll
        navigate(path); // Esto navegará a /#sectionId
      }
    } else if (path === '/') { // Link a la página de inicio (arriba)
       if (location.pathname === '/') {
        scrollToSection('inicio');
      } else {
        navigate('/');
      }
    } else { // Link a otra página (no aplica en este caso, pero por completitud)
      navigate(path);
    }
  };
  
  useEffect(() => {
    // Este efecto maneja el scroll cuando la URL tiene un hash (ej. /#servicios)
    // ya sea por navegación directa o por el navigate(path) en handleNavClick
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Da un pequeño tiempo para que el DOM se actualice después de la navegación
      const timer = setTimeout(() => {
        scrollToSection(id);
      }, 100);
      return () => clearTimeout(timer);
    } else if (location.pathname === '/' && !location.hash) {
      // Si estamos en la raíz sin hash, y no es una recarga (lo cual ScrollToTop maneja)
      // nos aseguramos que estamos arriba.
      // Esto es más bien un fallback, ScrollToTop debería manejar esto.
    }
  }, [location]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={(e) => handleNavClick(e, '/', 'inicio')} className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <img src={logoUrl} alt={t('header.title')} className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold">{t('header.title')}</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.nameKey}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path, item.sectionId)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {t(item.nameKey)}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t('header.language')}>
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('es')} className="flex items-center justify-between">
                  {t('header.spanish')}
                  {language === 'es' && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="flex items-center justify-between">
                  {t('header.english')}
                  {language === 'en' && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="md:hidden flex items-center">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2" aria-label={t('header.language')}>
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('es')} className="flex items-center justify-between">
                  {t('header.spanish')}
                  {language === 'es' && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="flex items-center justify-between">
                  {t('header.english')}
                  {language === 'en' && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 shadow-lg"
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
             <a
              key={item.nameKey}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path, item.sectionId)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {t(item.nameKey)}
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;