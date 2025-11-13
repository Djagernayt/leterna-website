import React from 'react';
import { Button } from '@/components/ui';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-primary-taupe text-white page-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Готовы преобразить ваш интерьер?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
          Оставьте заявку, и наш дизайнер свяжется с вами в течение часа
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button 
            variant="secondary" 
            size="large" 
            href="/contacts"
            className="bg-white text-primary-espresso hover:bg-primary-cream"
          >
            Заказать бесплатную консультацию
          </Button>
          <Button 
            variant="outline" 
            size="large" 
            href="/projects"
            className="border-white text-white hover:bg-white hover:text-primary-taupe"
          >
            Посмотреть портфолио
          </Button>
        </div>
      </div>
    </section>
  );
};
