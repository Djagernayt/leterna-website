import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { ImageGallery } from '@/components/common';

export const metadata: Metadata = {
  title: 'Римские шторы - LETERNA',
  description: 'Римские шторы на заказ. Элегантное и практичное решение для любого интерьера. Широкий выбор тканей и механизмов.',
};

// Типы римских штор
const romanTypes = [
  {
    title: 'Классические',
    description: 'Ровные горизонтальные складки, которые накладываются друг на друга при подъёме. Строгий и элегантный вид.',
    image: '/images/by-product/roman/belova/001.jpg',
  },
  {
    title: 'Каскадные',
    description: 'Складки сохраняют форму даже в опущенном состоянии. Создают эффект драпировки и объёма.',
    image: '/images/by-product/roman/pudrikova/001.jpg',
  },
  {
    title: 'Бескаркасные',
    description: 'Мягкая ткань без жёстких вставок. Поднимаются волнообразно, создавая романтичный образ.',
    image: '/images/by-product/roman/skurskaya/001.jpg',
  },
  {
    title: 'Двойные день-ночь',
    description: 'Комбинация плотной и прозрачной ткани. Гибкое управление освещением в течение дня.',
    image: '/images/by-product/roman/belova/002.jpg',
  },
];

// Преимущества
const advantages = [
  {
    icon: '✓',
    title: 'Экономия пространства',
    desc: 'Компактно располагаются в оконном проёме, не занимают место у стен',
  },
  {
    icon: '✓',
    title: 'Удобное управление',
    desc: 'Цепочный или электропривод с пультом ДУ и интеграцией в умный дом',
  },
  {
    icon: '✓',
    title: 'Любые ткани',
    desc: 'От полупрозрачных до блэкаут. Натуральные и синтетические материалы',
  },
  {
    icon: '✓',
    title: 'Точный размер',
    desc: 'Изготовление по индивидуальным замерам с точностью до миллиметра',
  },
];

// Где используются
const useCases = [
  { room: 'Кухня', desc: 'Практичность и лёгкий уход. Специальные пропитки от загрязнений.' },
  { room: 'Детская', desc: 'Безопасные механизмы. Яркие принты и натуральные ткани.' },
  { room: 'Кабинет', desc: 'Управление светом для работы. Строгий деловой стиль.' },
  { room: 'Спальня', desc: 'Блэкаут для полной темноты. Тихие механизмы подъёма.' },
];

export default function RomanPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/images/by-product/roman/belova/001.jpg"
            alt="Римские шторы"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-espresso/80 via-primary-espresso/50 to-transparent" />
          <div className="relative z-10 w-full">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
                <Link href="/" className="hover:text-white transition-colors">Главная</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Услуги</Link>
                <span>/</span>
                <span className="text-white">Римские шторы</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Римские шторы
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Идеальное сочетание элегантности и функциональности. 
                Компактное решение для современного интерьера
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

        {/* Advantages */}
        <section className="py-16 bg-white border-b border-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-cream flex items-center justify-center">
                    <span className="text-primary-espresso text-xl">{adv.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-espresso mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-primary-espresso/60 text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Коллекция
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Виды римских штор
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {romanTypes.map((type, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden h-80"
                >
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-espresso/90 via-primary-espresso/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-cream via-primary-taupe/20 to-primary-cream flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-primary-espresso/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Технология
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-6">
                  Механизмы управления
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-espresso flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-white">01</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary-espresso mb-1">Цепочный механизм</h4>
                      <p className="text-primary-espresso/70">Классическое ручное управление. Надёжно и долговечно.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-espresso flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-white">02</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary-espresso mb-1">Шнуровой механизм</h4>
                      <p className="text-primary-espresso/70">Компактный вариант для небольших окон.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-espresso flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-white">03</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary-espresso mb-1">Электропривод</h4>
                      <p className="text-primary-espresso/70">Управление пультом, смартфоном или голосом через умный дом.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Применение
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Римские шторы для каждой комнаты
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-espresso flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-espresso mb-2">
                    {item.room}
                  </h3>
                  <p className="text-primary-espresso/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-20 md:py-28 bg-primary-cream/30">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center mb-12">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Наши работы
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso mb-6 text-center">
                Римские шторы в проектах
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl mx-auto mb-8">
                Элегантные римские шторы в наших реализованных интерьерах
              </p>
            </div>

            <ImageGallery 
              images={[
                '/images/by-product/roman/belova/001.jpg',
                '/images/by-product/roman/belova/002.jpg',
                '/images/by-product/roman/pudrikova/001.jpg',
                '/images/by-product/roman/skurskaya/001.jpg',
                '/images/by-product/roman/skurskaya/002.jpg',
                '/images/by-product/roman/skurskaya/003.jpg',
              ]} 
              columns={3} 
            />

            <div className="text-center mt-12">
              <Link
                href="/portfolio?filter=roman"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-taupe text-white font-medium rounded-full hover:bg-primary-espresso transition-colors"
              >
                Смотреть все проекты с римскими шторами
              </Link>
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
                Цены на римские шторы
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Римские шторы (стандарт)', price: 'от 8 000 ₽' },
                { service: 'Римские шторы (премиум ткани)', price: 'от 15 000 ₽' },
                { service: 'Каскадные римские шторы', price: 'от 12 000 ₽' },
                { service: 'Электропривод', price: 'от 7 000 ₽' },
                { service: 'Замер и монтаж', price: 'от 2 000 ₽' },
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
              Закажите римские шторы
            </h2>
            <p className="text-white/80 text-lg mb-10 w-full max-w-xl mx-auto">
              Бесплатный замер и консультация. Изготовление от 7 дней
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-espresso font-medium rounded-full hover:bg-primary-cream transition-colors duration-300"
              >
                Заказать замер
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
