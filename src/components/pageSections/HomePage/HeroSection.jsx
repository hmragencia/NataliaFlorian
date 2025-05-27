import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const phoneNumber = "573028519920";
  const message = encodeURIComponent(t('whatsapp.greetingGeneral'));
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <img   
          className="w-full h-full object-cover" 
          alt={t('hero.title')}
          src="https://images.unsplash.com/photo-1695577870881-59760527954e" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>
      
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          {t('hero.subtitle')}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            className="bg-sky-blue hover:bg-sky-blue/80 text-primary-foreground px-8 py-3 text-lg"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {t('hero.buttonReserve')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-forest-green bg-white border-white hover:bg-gray-100 hover:border-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={scrollToServices}
          >
            {t('hero.buttonServices')}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;