import React from 'react';
import { motion } from 'framer-motion';
import Award from 'lucide-react/dist/esm/icons/award';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Mountain from 'lucide-react/dist/esm/icons/mountain';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-natalia" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-forest-green mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Award className="h-6 w-6 text-sky-blue mr-3" />
                <span>{t('about.certification1')}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BookOpen className="h-6 w-6 text-sky-blue mr-3" />
                <span>{t('about.certification2')}</span>
              </div>
               <div className="flex items-center text-gray-700">
                <Mountain className="h-6 w-6 text-sky-blue mr-3" />
                <span>{t('about.certification3')}</span>
              </div>
            </div>
          </div>
          <motion.div
            className="order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              className="w-full h-auto object-cover aspect-square"
              alt={t('about.title')}
             src="https://images.unsplash.com/photo-1616794448732-17b953353db0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;