import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import CalendarDays from 'lucide-react/dist/esm/icons/calendar-days';
import MountainIcon from 'lucide-react/dist/esm/icons/mountain'; // Renamed to avoid conflict
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import DollarSign from 'lucide-react/dist/esm/icons/dollar-sign';
import { useLanguage } from '@/contexts/LanguageContext';

const HikeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const hikeDetailsData = {
    'paramo-trek': {
      titleKey: 'hikeDetail.paramoTrek.title',
      imageSrc: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/9952c64f-bb24-4164-92dd-5bd8a408e951/3af34b39dfd77ffc53fcd928b04ff0f7.png',
      imageAlt: 'Vista panorámica de un valle de páramo colombiano con lagunas azules y frailejones amarillos altos bajo un cielo nublado y dramático',
      fullDescriptionKey: 'hikeDetail.paramoTrek.fullDescription',
      durationKey: 'hikeDetail.paramoTrek.duration',
      difficultyKey: 'hikeDetail.paramoTrek.difficulty',
      altitudeKey: 'hikeDetail.paramoTrek.altitude',
      includesKeys: ['hikeDetail.paramoTrek.includes.0', 'hikeDetail.paramoTrek.includes.1', 'hikeDetail.paramoTrek.includes.2', 'hikeDetail.paramoTrek.includes.3', 'hikeDetail.paramoTrek.includes.4'],
      bringKeys: ['hikeDetail.paramoTrek.bring.0', 'hikeDetail.paramoTrek.bring.1', 'hikeDetail.paramoTrek.bring.2', 'hikeDetail.paramoTrek.bring.3', 'hikeDetail.paramoTrek.bring.4', 'hikeDetail.paramoTrek.bring.5', 'hikeDetail.paramoTrek.bring.6', 'hikeDetail.paramoTrek.bring.7', 'hikeDetail.paramoTrek.bring.8'],
      priceKey: 'hikeDetail.paramoTrek.price',
      customizable: true,
      phoneNumber: "573028519920"
    },
    'cloud-forest-hike': {
      titleKey: 'hikeDetail.cloudForestHike.title',
      imageSrc: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/9952c64f-bb24-4164-92dd-5bd8a408e951/673af5da6ae320b67cf4edfd3c82fd21.png',
      imageAlt: 'Puente colgante de madera internándose en un denso y verde bosque de niebla, con helechos gigantes y musgo cubriendo los árboles altos',
      fullDescriptionKey: 'hikeDetail.cloudForestHike.fullDescription',
      durationKey: 'hikeDetail.cloudForestHike.duration',
      difficultyKey: 'hikeDetail.cloudForestHike.difficulty',
      altitudeKey: 'hikeDetail.cloudForestHike.altitude',
      includesKeys: ['hikeDetail.cloudForestHike.includes.0', 'hikeDetail.cloudForestHike.includes.1', 'hikeDetail.cloudForestHike.includes.2', 'hikeDetail.cloudForestHike.includes.3', 'hikeDetail.cloudForestHike.includes.4'],
      bringKeys: ['hikeDetail.cloudForestHike.bring.0', 'hikeDetail.cloudForestHike.bring.1', 'hikeDetail.cloudForestHike.bring.2', 'hikeDetail.cloudForestHike.bring.3', 'hikeDetail.cloudForestHike.bring.4', 'hikeDetail.cloudForestHike.bring.5', 'hikeDetail.cloudForestHike.bring.6', 'hikeDetail.cloudForestHike.bring.7'],
      priceKey: 'hikeDetail.cloudForestHike.price',
      customizable: true,
      phoneNumber: "573028519920"
    },
    'coffee-trail-walk': {
      titleKey: 'hikeDetail.coffeeTrailWalk.title',
      imageSrc: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/9952c64f-bb24-4164-92dd-5bd8a408e951/59d357024c678ceb3e70ab8a277b348d.png',
      imageAlt: 'Trabajador agrícola sonriente recogiendo granos de café rojos maduros en una finca montañosa con cafetales extendiéndose por las laderas y montañas al fondo',
      fullDescriptionKey: 'hikeDetail.coffeeTrailWalk.fullDescription',
      durationKey: 'hikeDetail.coffeeTrailWalk.duration',
      difficultyKey: 'hikeDetail.coffeeTrailWalk.difficulty',
      altitudeKey: 'hikeDetail.coffeeTrailWalk.altitude',
      includesKeys: ['hikeDetail.coffeeTrailWalk.includes.0', 'hikeDetail.coffeeTrailWalk.includes.1', 'hikeDetail.coffeeTrailWalk.includes.2', 'hikeDetail.coffeeTrailWalk.includes.3', 'hikeDetail.coffeeTrailWalk.includes.4', 'hikeDetail.coffeeTrailWalk.includes.5', 'hikeDetail.coffeeTrailWalk.includes.6'],
      bringKeys: ['hikeDetail.coffeeTrailWalk.bring.0', 'hikeDetail.coffeeTrailWalk.bring.1', 'hikeDetail.coffeeTrailWalk.bring.2', 'hikeDetail.coffeeTrailWalk.bring.3', 'hikeDetail.coffeeTrailWalk.bring.4', 'hikeDetail.coffeeTrailWalk.bring.5', 'hikeDetail.coffeeTrailWalk.bring.6'],
      priceKey: 'hikeDetail.coffeeTrailWalk.price',
      customizable: false,
      phoneNumber: "573028519920"
    },
  };
  
  const hike = hikeDetailsData[id];
  
  const handleBackToServices = (e) => {
    e.preventDefault();
    navigate('/#servicios');
  };

  if (!hike) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">{t('hikeDetail.notFoundTitle')}</h1>
        <p className="mb-8">{t('hikeDetail.notFoundDescription')}</p>
        <Button asChild>
          <a href="/#servicios" onClick={handleBackToServices}>
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('hikeDetail.backToServicesButton')}
          </a>
        </Button>
      </div>
    );
  }
  
  const hikeTitle = t(hike.titleKey);
  const whatsappLink = `https://wa.me/${hike.phoneNumber}?text=${encodeURIComponent(t('whatsapp.greetingHike', { hikeName: hikeTitle }))}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <Button variant="outline" asChild>
          <a href="/#servicios" onClick={handleBackToServices}>
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('hikeDetail.backToServicesButton')}
          </a>
        </Button>
      </div>

      <Card className="overflow-hidden shadow-xl bg-white">
        <div className="relative h-64 md:h-96">
            <img  className="w-full h-full object-cover" alt={hike.imageAlt} src={hike.imageSrc} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.h1 
              className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {hikeTitle}
            </motion.h1>
        </div>
        
        <CardContent className="p-6 md:p-8">
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t(hike.fullDescriptionKey)}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8 text-gray-700">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-forest-green mb-3">{t('hikeDetail.adventureDetailsTitle')}</h3>
              <p className="flex items-center mb-2"><CalendarDays className="h-5 w-5 mr-2 text-sky-blue" /> <strong>{t('hikeDetail.durationLabel')}</strong> {t(hike.durationKey)}</p>
              <p className="flex items-center mb-2"><MountainIcon className="h-5 w-5 mr-2 text-sky-blue" /> <strong>{t('hikeDetail.difficultyLabel')}</strong> {t(hike.difficultyKey)}</p>
              <p className="flex items-center mb-2"><MapPin className="h-5 w-5 mr-2 text-sky-blue" /> <strong>{t('hikeDetail.altitudeLabel')}</strong> {t(hike.altitudeKey)}</p>
              <p className="flex items-center mb-2"><DollarSign className="h-5 w-5 mr-2 text-sky-blue" /> <strong>{t('hikeDetail.priceLabel')}</strong> {t(hike.priceKey)}</p>
              {hike.customizable && <p className="flex items-center text-sm text-green-600"><CheckCircle className="h-4 w-4 mr-1" /> {t('hikeDetail.customizableLabel')}</p>}
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-forest-green mb-3">{t('hikeDetail.whatToBringTitle')}</h3>
              <ul className="list-disc list-inside space-y-1">
                {hike.bringKeys.map((itemKey, index) => <li key={index}>{t(itemKey)}</li>)}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-forest-green mb-3">{t('hikeDetail.includesTitle')}</h3>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
              {hike.includesKeys.map((itemKey, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                  <span>{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </CardContent>
        <CardFooter className="p-6 md:p-8 bg-gray-50">
          <motion.div 
            className="w-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-sky-blue hover:bg-sky-blue/80 text-primary-foreground px-8 py-3 text-lg"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {t('hikeDetail.reserveAdventureButton')}
              </a>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default HikeDetailPage;