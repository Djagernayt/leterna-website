import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Услуги - LETERNA',
  description: 'Полный спектр услуг по текстильному оформлению интерьера: выезд декоратора, пошив штор, монтаж карнизов, навес и отпаривание, печать на ткани.',
};

const services = [
  {
    title: 'Выезд декоратора',
    description: 'Профессиональный декоратор приедет к вам с образцами тканей, поможет подобрать идеальное решение для вашего интерьера, снимет точные замеры и предложит несколько вариантов оформления окон.',
    features: ['Бесплатный выезд по Москве', 'Образцы премиальных тканей', 'Консультация по стилю', 'Точные замеры'],
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Пошив штор',
    description: 'Изготовление штор любой сложности на собственном производстве. Работаем с премиальными тканями из Италии, Бельгии, Турции. Строгий контроль качества на каждом этапе.',
    features: ['Собственное производство', 'Премиальные ткани', 'Любая сложность', 'Сроки от 7 дней'],
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    title: 'Монтаж карнизов',
    description: 'Профессиональная установка карнизов любого типа: потолочных, настенных, электрических. Работаем с любыми материалами стен и потолков, включая бетон, гипсокартон, натяжные потолки.',
    features: ['Любые типы карнизов', 'Работа с любыми поверхностями', 'Гарантия крепления', 'Аккуратный монтаж'],
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Навес и отпаривание',
    description: 'Бережный навес готовых изделий с соблюдением всех технологий. Профессиональное отпаривание для идеального внешнего вида. Финальная проверка качества и корректировка при необходимости.',
    features: ['Бережный навес', 'Профессиональное отпаривание', 'Проверка качества', 'Корректировка драпировки'],
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Печать на ткани',
    description: 'Эксклюзивная печать на текстиле: логотипы, фотографии, авторские рисунки. Современное оборудование позволяет наносить любые изображения с высокой детализацией и стойкостью красок.',
    features: ['Любые изображения', 'Высокое качество печати', 'Стойкие краски', 'Эксклюзивный дизайн'],
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-espresso mb-4 md:mb-6">
                Наши услуги
              </h1>
              <p className="font-body text-base md:text-lg text-neutral-brown max-w-3xl">
                Полный спектр услуг для создания идеального текстильного оформления вашего интерьера. 
                От консультации до финального результата - мы берём на себя все заботы.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon & Title */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-primary-taupe flex-shrink-0">
                        {service.icon}
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-espresso">
                        {service.title}
                      </h2>
                    </div>
                    <p className="font-body text-base md:text-lg text-neutral-brown leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-primary-taupe mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="font-body text-sm md:text-base text-neutral-brown">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Element */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-cream via-primary-sand to-primary-rose flex items-center justify-center">
                      <div className="text-primary-espresso/10">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary-espresso">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Готовы обсудить ваш проект?
            </h2>
            <p className="font-body text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и наш декоратор свяжется с вами для бесплатной консультации
            </p>
            <Link
              href="/#contacts"
              className="inline-block px-8 py-4 bg-white text-primary-espresso rounded-full font-medium hover:bg-primary-cream transition-colors text-base md:text-lg"
            >
              Заказать консультацию
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
