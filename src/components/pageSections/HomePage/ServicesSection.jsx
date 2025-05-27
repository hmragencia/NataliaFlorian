import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import MountainIcon from 'lucide-react/dist/esm/icons/mountain'; // Renamed to avoid conflict
import Leaf from 'lucide-react/dist/esm/icons/leaf';
import Coffee from 'lucide-react/dist/esm/icons/coffee';
import Clock from 'lucide-react/dist/esm/icons/clock';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const servicesData = [
    {
      id: 'paramo-trek',
      icon: <MountainIcon className="h-10 w-10 text-sky-blue" />,
      titleKey: 'services.paramoTrekTitle',
      descriptionKey: 'services.paramoTrekDescription',
      imageSrc: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/9952c64f-bb24-4164-92dd-5bd8a408e951/3af34b39dfd77ffc53fcd928b04ff0f7.png',
      imageAlt: 'Impresionante paisaje de páramo con frailejones y montañas nebulosas al fondo',
      durationKey: 'services.paramoTrekDuration',
      difficultyKey: 'services.paramoTrekDifficulty',
      interestPointsKeys: ['services.paramoTrekInterestPoints.0', 'services.paramoTrekInterestPoints.1', 'services.paramoTrekInterestPoints.2'],
      phoneNumber: "573028519920"
    },
    {
      id: 'cloud-forest-hike',
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      titleKey: 'services.cloudForestHikeTitle',
      descriptionKey: 'services.cloudForestHikeDescription',
      imageSrc: 'https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Sendero exuberante en un bosque de niebla con árboles cubiertos de musgo y luz solar filtrándose',
      durationKey: 'services.cloudForestHikeDuration',
      difficultyKey: 'services.cloudForestHikeDifficulty',
      interestPointsKeys: ['services.cloudForestHikeInterestPoints.0', 'services.cloudForestHikeInterestPoints.1', 'services.cloudForestHikeInterestPoints.2'],
      phoneNumber: "573028519920"
    },
    {
      id: 'coffee-trail-walk',
      icon: <Coffee className="h-10 w-10 text-yellow-600" />,
      titleKey: 'services.coffeeTrailWalkTitle',
      descriptionKey: 'services.coffeeTrailWalkDescription',
      imageSrc: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/9952c64f-bb24-4164-92dd-5bd8a408e951/59d357024c678ceb3e70ab8a277b348d.png',
      imageAlt: 'Plantación de café en una ladera montañosa con cerezas de café rojas maduras',
      durationKey: 'services.coffeeTrailWalkDuration',
      difficultyKey: 'services.coffeeTrailWalkDifficulty',
      interestPointsKeys: ['services.coffeeTrailWalkInterestPoints.0', 'services.coffeeTrailWalkInterestPoints.1', 'services.coffeeTrailWalkInterestPoints.2'],
      phoneNumber: "573028519920"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-sky-blue/10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-center text-forest-green mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('services.title')}
        </motion.h2>
        <motion.p 
          className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay:0.2 }}
        >
          {t('services.description')}
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const serviceTitle = t(service.titleKey);
            const whatsappLink = `https://wa.me/${service.phoneNumber}?text=${encodeURIComponent(t('whatsapp.greetingHike', { hikeName: serviceTitle }))}`;
            return (
              <motion.div
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl">
                  <CardHeader className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img   
                        src={service.imageSrc} 
                        alt={service.imageAlt} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                         />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <div className="flex justify-center mb-3">{service.icon}</div>
                    <CardTitle className="text-xl font-semibold text-forest-green mb-2 text-center">{serviceTitle}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm mb-4 text-center min-h-[40px]">{t(service.descriptionKey)}</CardDescription>
                    
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-sky-blue flex-shrink-0" />
                        <span><strong>{t('services.durationLabel')}</strong> {t(service.durationKey)}</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="h-4 w-4 mr-2 text-sky-blue flex-shrink-0" />
                        <span><strong>{t('services.difficultyLabel')}</strong> {t(service.difficultyKey)}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 text-sky-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>{t('services.interestPointsLabel')}</strong>
                          <ul className="list-disc list-inside ml-1">
                            {service.interestPointsKeys.map(pointKey => <li key={pointKey}>{t(pointKey)}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </CardContent>
                  <CardFooter className="p-6 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-2">
                    <Button variant="ghost" className="text-forest-green hover:bg-forest-green/10 w-full sm:w-auto" asChild>
                      <Link to={`/caminata/${service.id}`}>
                        {t('services.moreInfoButton')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button className="bg-sky-blue hover:bg-sky-blue/80 text-primary-foreground w-full sm:w-auto" asChild>
                       <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        {t('services.reserveButton')}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay:0.5 }}
        >
          <p className="text-lg text-gray-700 mb-2">{t('services.customHikesTitle')}</p>
          <p className="text-md text-gray-600">
            {t('services.customHikesDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;