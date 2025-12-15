import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Услуги - LETERNA',
  description: 'Полный спектр услуг по оформлению окон: шторы, тюль, римские и рулонные шторы, карнизы, солнцезащита и текстильный декор премиум-класса.',
};

// Категории услуг
const services = [
  {
    id: 'curtains',
    title: 'Шторы и портьеры',
    description: 'Классические шторы из натуральных и смесовых тканей. Многослойные композиции, ламбрекены, подхваты и декоративные элементы.',
    image: '/images/services/curtains.jpg',
    features: ['Натуральные ткани', 'Индивидуальный пошив', 'Сложный декор'],
  },
  {
    id: 'tulle',
    title: 'Тюль',
    description: 'Воздушные полупрозрачные ткани для создания мягкого рассеянного света. Органза, вуаль, сетка с вышивкой.',
    image: '/images/services/tulle.jpg',
    features: ['Вышивка', 'Органза', 'Вуаль'],
  },
  {
    id: 'roman',
    title: 'Римские шторы',
    description: 'Элегантное и практичное решение с горизонтальными складками. Идеальны для кухни, детской и кабинета.',
    image: '/images/services/roman.jpg',
    features: ['Точный замер', 'Любые ткани', 'Механизм подъёма'],
  },
  {
    id: 'roller',
    title: 'Рулонные шторы',
    description: 'Современный минималистичный дизайн с отличной светозащитой. Системы "день-ночь", блэкаут, светофильтры.',
    image: '/images/services/roller.jpg',
    features: ['Блэкаут', 'День-ночь', 'Моторизация'],
  },
  {
    id: 'cornices',
    title: 'Карнизы',
    description: 'Профильные, декоративные и скрытые карнизы. Электрокарнизы с дистанционным управлением.',
    image: '/images/services/cornices.jpg',
    features: ['Электропривод', 'Скрытый монтаж', 'Дизайнерские модели'],
  },
  {
    id: 'sun-protection',
    title: 'Солнцезащита',
    description: 'Профессиональные решения для защиты от солнца: жалюзи, плиссе, маркизы для террас и зимних садов.',
    image: '/images/services/sun-protection.jpg',
    features: ['Жалюзи', 'Плиссе', 'Маркизы'],
  },
  {
    id: 'decor',
    title: 'Текстильный декор',
    description: 'Декоративные подушки, покрывала, скатерти, салфетки. Создание единого текстильного ансамбля.',
    image: '/images/services/decor.jpg',
    features: ['Подушки', 'Покрывала', 'Скатерти'],
  },
];

// Преимущества
const advantages = [
  {
    number: '01',
    title: 'Премиум материалы',
    description: 'Работаем только с проверенными поставщиками и лучшими тканями из Италии, Бельгии и Турции',
  },
  {
    number: '02',
    title: 'Авторский дизайн',
    description: 'Каждый проект разрабатывается индивидуально с учётом стиля интерьера и ваших пожеланий',
  },
  {
    number: '03',
    title: 'Собственное производство',
    description: 'Полный цикл создания изделий: от замера до установки на нашем оборудовании',
  },
  {
    number: '04',
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все изделия и услуги. Сервисное обслуживание после установки',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Услуги LETERNA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-espresso/60" />
          <div className="relative z-10 w-full text-center">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Наши услуги
              </h1>
              <p className="text-lg md:text-xl text-white/90 w-full max-w-2xl mx-auto leading-relaxed">
                Полный спектр решений для оформления окон — от классических штор 
                до современных автоматизированных систем солнцезащиты
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Каталог услуг
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso">
                Выберите направление
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-espresso/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-primary-espresso/70 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-cream text-primary-taupe text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary-espresso font-medium group-hover:text-primary-taupe transition-colors">
                      Подробнее
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Почему мы
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso mb-4">
                Наши преимущества
              </h2>
              <p className="text-primary-espresso/70 w-full max-w-2xl mx-auto">
                Мы создаём не просто текстильное оформление, а атмосферу вашего дома
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {advantages.map((advantage) => (
                <div
                  key={advantage.number}
                  className="flex gap-6 p-6 rounded-2xl bg-primary-cream/50 hover:bg-primary-cream transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-espresso flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-white">
                      {advantage.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-espresso mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-primary-espresso/70 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Как мы работаем
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso">
                Этапы сотрудничества
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Консультация', desc: 'Бесплатный выезд декоратора с образцами тканей' },
                { step: '02', title: 'Дизайн-проект', desc: 'Разработка концепции и подбор материалов' },
                { step: '03', title: 'Производство', desc: 'Пошив изделий на собственном производстве' },
                { step: '04', title: 'Установка', desc: 'Монтаж и настройка карнизов и штор' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-espresso flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-espresso mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-espresso/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary-espresso">
          <div className="w-full max-w-[900px] mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Готовы преобразить ваш интерьер?
            </h2>
            <p className="text-white/80 text-lg mb-10 w-full max-w-xl mx-auto">
              Закажите бесплатную консультацию с выездом декоратора и образцами тканей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-espresso font-medium rounded-full hover:bg-primary-cream transition-colors duration-300"
              >
                Заказать консультацию
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Смотреть проекты
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
