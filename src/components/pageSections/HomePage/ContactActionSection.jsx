import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactActionSection = ({ phoneNumber }) => {
  const { t } = useLanguage();
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('whatsapp.greetingGeneral'))}`;

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-gradient-to-br from-sky-blue/30 via-emerald-50 to-forest-green/30">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-forest-green mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('contact.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-forest-green hover:bg-forest-green/90 text-white px-10 py-6 text-lg"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <MessageCircle className="h-6 w-6 mr-3" />
              {t('contact.button')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactActionSection;