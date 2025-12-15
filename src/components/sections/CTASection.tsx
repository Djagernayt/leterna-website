import React from 'react';
import Link from 'next/link';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary-sand">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-primary-espresso leading-tight mb-4 text-center">
            Готовы преобразить
            <br />
            ваш интерьер?
          </h2>
          <p className="text-center text-sm md:text-[15px] text-neutral-brown mb-8">
            Оставьте заявку, и наш дизайнер свяжется с вами в течение часа
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              href="/#contacts"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-primary-taupe text-white text-sm md:text-[15px] font-medium rounded-full hover:bg-primary-espresso transition-colors"
            >
              Заказать бесплатную консультацию
            </Link>
            <Link 
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-transparent border-2 border-primary-espresso text-primary-espresso text-sm md:text-[15px] font-medium rounded-full hover:bg-primary-espresso hover:text-white transition-colors"
            >
              Посмотреть портфолио
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
