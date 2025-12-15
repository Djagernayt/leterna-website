import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { ImageGallery } from '@/components/common';

export const metadata: Metadata = {
  title: 'Рулонные шторы - LETERNA',
  description: 'Рулонные шторы: блэкаут, день-ночь, светофильтры. Современный дизайн и надёжные механизмы. Моторизация и умный дом.',
};

// Типы рулонных штор
const rollerTypes = [
  {
    title: 'Блэкаут',
    description: '100% затемнение для спальни и домашнего кинотеатра. Специальная светонепроницаемая ткань.',
    image: '/images/by-product/roller/moscow-city/001.jpg',
    features: ['Полное затемнение', 'Термоизоляция', 'Шумопоглощение'],
  },
  {
    title: 'День-Ночь',
    description: 'Чередование прозрачных и непрозрачных полос. Гибкая регулировка освещения.',
    image: '/images/by-product/roller/moscow-city/002.jpg',
    features: ['Плавная регулировка', 'Современный вид', 'Защита от взглядов'],
  },
  {
    title: 'Светофильтры',
    description: 'Рассеивают солнечный свет, сохраняя приватность. Широкая палитра цветов.',
    image: '/images/by-product/roller/evraziya-service/001.jpg',
    features: ['Мягкий свет', 'Защита от UV', 'Цветовое разнообразие'],
  },
  {
    title: 'Мини-кассеты',
    description: 'Компактная система для пластиковых окон. Крепление без сверления.',
    image: '/images/by-product/roller/evraziya-service/002.jpg',
    features: ['Без сверления', 'Компактность', 'Простой монтаж'],
  },
];

// Системы крепления
const mountingSystems = [
  {
    name: 'Открытый механизм',
    desc: 'Бюджетный вариант. Вал со шторой открыт, крепление к стене или потолку.',
  },
  {
    name: 'Кассетная система',
    desc: 'Вал спрятан в короб. Боковые направляющие для плотного прилегания.',
  },
  {
    name: 'Мини-система',
    desc: 'Для створки окна. Компактный короб, крепление на двусторонний скотч.',
  },
  {
    name: 'Встроенная система',
    desc: 'Интеграция в подвесной потолок или нишу. Невидимый механизм.',
  },
];

// Характеристики
const specs = [
  { label: 'Ширина', value: 'до 300 см' },
  { label: 'Высота', value: 'до 400 см' },
  { label: 'Срок службы', value: '10+ лет' },
  { label: 'Гарантия', value: '3 года' },
];

export default function RollerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/images/by-product/roller/moscow-city/001.jpg"
            alt="Рулонные шторы"
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
                <span className="text-white">Рулонные шторы</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Рулонные шторы
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Современный минимализм и функциональность. Идеальный контроль 
                освещения для любого помещения
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

        {/* Specs */}
        <section className="py-12 bg-white border-b border-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-1">
                    {spec.value}
                  </div>
                  <div className="text-primary-taupe text-sm">{spec.label}</div>
                </div>
              ))}
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
                Виды рулонных штор
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rollerTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary-espresso mb-2">
                      {type.title}
                    </h3>
                    <p className="text-primary-espresso/70 text-sm mb-4">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-cream text-primary-taupe text-xs rounded-full"
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

        {/* Mounting systems */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Технологии
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-6">
                  Системы крепления
                </h2>
                <p className="text-primary-espresso/70 mb-8">
                  Подберём оптимальную систему крепления под ваши окна и задачи
                </p>
                <div className="space-y-4">
                  {mountingSystems.map((system, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-primary-cream/50 hover:bg-primary-cream transition-colors"
                    >
                      <h4 className="font-heading font-bold text-primary-espresso mb-1">
                        {system.name}
                      </h4>
                      <p className="text-primary-espresso/60 text-sm">{system.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-cream via-primary-taupe/20 to-primary-cream flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-primary-espresso/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motorization */}
        <section className="py-20 md:py-28 bg-primary-espresso">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-taupe/30 via-primary-cream to-primary-taupe/30 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Умный дом
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Моторизация штор
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Управляйте шторами с помощью пульта, смартфона или голосовых команд. 
                  Интеграция с системами умного дома.
                </p>
                <ul className="space-y-4">
                  {[
                    'Пульт дистанционного управления',
                    'Приложение для iOS и Android',
                    'Голосовое управление Алиса, Google, Siri',
                    'Сценарии по времени и датчикам',
                    'Групповое управление несколькими шторами',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                Рулонные шторы в интерьере
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl mx-auto mb-8">
                Практичные и стильные рулонные шторы в наших проектах
              </p>
            </div>

            <ImageGallery 
              images={[
                '/images/by-product/roller/moscow-city/002.jpg',
                '/images/by-product/roller/moscow-city/003.jpg',
                '/images/by-product/roller/evraziya-service/001.jpg',
                '/images/by-product/roller/evraziya-service/002.jpg',
              ]} 
              columns={2} 
            />

            <div className="text-center mt-12">
              <Link
                href="/portfolio?filter=roller"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-taupe text-white font-medium rounded-full hover:bg-primary-espresso transition-colors"
              >
                Смотреть все проекты с рулонными шторами
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
                Цены на рулонные шторы
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Светофильтры (открытый механизм)', price: 'от 3 500 ₽' },
                { service: 'Блэкаут в кассете', price: 'от 6 000 ₽' },
                { service: 'День-ночь', price: 'от 5 500 ₽' },
                { service: 'Мини-система на створку', price: 'от 2 500 ₽' },
                { service: 'Электропривод Somfy', price: 'от 12 000 ₽' },
                { service: 'Монтаж', price: 'от 1 500 ₽' },
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
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[900px] mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso mb-6">
              Закажите рулонные шторы
            </h2>
            <p className="text-primary-espresso/70 text-lg mb-10 w-full max-w-xl mx-auto">
              Бесплатный замер. Изготовление от 5 дней. Гарантия 3 года
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-espresso text-white font-medium rounded-full hover:bg-primary-espresso/90 transition-colors duration-300"
              >
                Заказать замер
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-espresso text-primary-espresso font-medium rounded-full hover:bg-primary-espresso/5 transition-colors duration-300"
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
