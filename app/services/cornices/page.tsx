import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Карнизы - LETERNA',
  description: 'Карнизы для штор: декоративные, профильные, скрытые. Электрокарнизы с дистанционным управлением. Монтаж и настройка.',
};

// Типы карнизов  
const corniceTypes = [
  {
    title: 'Профильные алюминиевые',
    description: 'Надёжная основа для тяжёлых штор. Скрытый монтаж в потолочную нишу или открытую установку.',
    features: ['До 50 кг нагрузки', '1-3 ряда', 'Любая длина'],
  },
  {
    title: 'Декоративные',
    description: 'Красивые наконечники, кронштейны и штанги. Металл, дерево, кованые элементы.',
    features: ['Дизайнерские модели', 'Кольца и люверсы', 'Под заказ'],
  },
  {
    title: 'Потолочные скрытые',
    description: 'Шторы «из потолка». Ниша из гипсокартона или натяжного потолка скрывает механизм.',
    features: ['Эффект парения', 'LED подсветка', 'Под натяжной потолок'],
  },
  {
    title: 'Электрокарнизы',
    description: 'Моторизированное управление шторами. Пульт, смартфон, голосовые команды.',
    features: ['Somfy / Dooya', 'Умный дом', 'Тихий мотор'],
  },
];

// Материалы
const materials = [
  {
    name: 'Алюминий',
    desc: 'Лёгкий и прочный. Не деформируется. Любые длины без стыков.',
  },
  {
    name: 'Дерево',
    desc: 'Тёплый натуральный материал. Дуб, орех, венге.',
  },
  {
    name: 'Сталь',
    desc: 'Индустриальный стиль. Кованые и литые элементы.',
  },
  {
    name: 'Латунь',
    desc: 'Благородный блеск. Классический и арт-деко стиль.',
  },
];

// Услуги
const services = [
  'Консультация и подбор карниза под интерьер',
  'Выезд замерщика на объект',
  'Изготовление по индивидуальным размерам',
  'Монтаж на стену, потолок или в нишу',
  'Подключение электрокарнизов',
  'Интеграция с системами умного дома',
  'Гарантийное и сервисное обслуживание',
];

export default function CornicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-primary-espresso via-primary-taupe to-neutral-brown">
          <div className="relative z-10 w-full">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
                <Link href="/" className="hover:text-white transition-colors">Главная</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Услуги</Link>
                <span>/</span>
                <span className="text-white">Карнизы</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Карнизы
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Надёжная основа для ваших штор. От классических декоративных 
                до современных моторизированных систем
              </p>
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-espresso font-medium rounded-full hover:bg-primary-cream transition-colors duration-300"
              >
                Заказать консультацию
              </Link>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Каталог
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Виды карнизов
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corniceTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-cream to-primary-sand flex items-center justify-center">
                    <div className="text-6xl text-primary-taupe/20">
                      {index === 0 && '◼'}
                      {index === 1 && '◆'}
                      {index === 2 && '●'}
                      {index === 3 && '⚡'}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-heading text-2xl font-bold text-primary-espresso mb-3">
                      {type.title}
                    </h3>
                    <p className="text-primary-espresso/70 mb-4">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-cream text-primary-taupe text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Материалы
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Из чего мы делаем
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-primary-cream/50 hover:bg-primary-cream transition-colors duration-300"
                >
                  <h3 className="font-heading text-xl font-bold text-primary-espresso mb-2">
                    {material.name}
                  </h3>
                  <p className="text-primary-espresso/70 text-sm">{material.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Electric Section */}
        <section className="py-20 md:py-28 bg-primary-espresso">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Технологии
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Электрокарнизы
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Современное решение для панорамных окон, высоких потолков 
                  и интеграции в систему умного дома.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Грузоподъёмность', value: 'до 80 кг' },
                    { label: 'Длина', value: 'до 12 м' },
                    { label: 'Скорость', value: '0.1-0.5 м/с' },
                    { label: 'Шум', value: 'менее 35 дБ' },
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/60">{spec.label}</span>
                      <span className="font-heading font-bold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-taupe to-primary-espresso flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-sand to-primary-cream flex items-center justify-center">
                <svg className="w-36 h-36 text-primary-taupe opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Сервис
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-6">
                  Полный комплекс услуг
                </h2>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 mt-0.5 rounded-full bg-primary-espresso flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-primary-espresso">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Стоимость
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Цены на карнизы
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Профильный карниз (1 ряд)', price: 'от 2 500 ₽/м.п.' },
                { service: 'Профильный карниз (2-3 ряда)', price: 'от 4 000 ₽/м.п.' },
                { service: 'Декоративный штанговый', price: 'от 5 000 ₽' },
                { service: 'Потолочная ниша с подсветкой', price: 'от 8 000 ₽/м.п.' },
                { service: 'Электрокарниз Somfy', price: 'от 25 000 ₽' },
                { service: 'Монтаж', price: 'от 3 000 ₽' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 rounded-xl bg-primary-cream/50 hover:bg-primary-cream transition-colors"
                >
                  <span className="text-primary-espresso">{item.service}</span>
                  <span className="font-heading font-bold text-primary-espresso whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary-espresso">
          <div className="w-full max-w-[900px] mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Закажите карнизы
            </h2>
            <p className="text-white/80 text-lg mb-10 w-full max-w-xl mx-auto">
              Подберём и установим карнизы под ваши шторы и интерьер
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-espresso font-medium rounded-full hover:bg-primary-cream transition-colors duration-300"
              >
                Заказать расчёт
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Все услуги
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
