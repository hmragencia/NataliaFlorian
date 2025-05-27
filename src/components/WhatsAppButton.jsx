import React from 'react';
import { motion } from 'framer-motion';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const WhatsAppButton = ({ phoneNumber }) => {
  const { t } = useLanguage();
  const message = encodeURIComponent(t('whatsapp.greetingGeneral'));
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('whatsapp.buttonTooltip')}
          >
            <MessageSquare size={28} />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-gray-800 text-white p-2 rounded-md">
          <p>{t('whatsapp.buttonTooltip')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;