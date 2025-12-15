import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { ImageGallery } from '@/components/common';

export const metadata: Metadata = {
  title: 'Тюль - LETERNA',
  description: 'Элегантный тюль для оформления окон. Органза, вуаль, сетка с вышивкой. Премиальные ткани из Европы.',
};

// Типы тюля
const tulleTypes = [
  {
    title: 'Классическая вуаль',
    description: 'Нежная полупрозрачная ткань с матовой текстурой. Мягко рассеивает свет, создавая уютную атмосферу.',
    image: '/images/by-product/tulle/belova/001.jpg',
  },
  {
    title: 'Органза',
    description: 'Тонкая прозрачная ткань с лёгким блеском. Идеальна для современных интерьеров и французских окон.',
    image: '/images/by-product/tulle/girko/001.jpg',
  },
  {
    title: 'Тюль с вышивкой',
    description: 'Изысканные орнаменты и растительные мотивы. Ручная и машинная вышивка на тончайшей основе.',
    image: '/images/by-product/tulle/malofeev/001.jpg',
  },
  {
    title: 'Сетка',
    description: 'Крупная или мелкая сетчатая структура. Современный вид и отличная циркуляция воздуха.',
    image: '/images/by-product/tulle/kilinkarov/001.jpg',
  },
];

// Характеристики
const characteristics = [
  { label: 'Светопропускание', value: '60-90%' },
  { label: 'Ширина рулона', value: 'до 320 см' },
  { label: 'Плотность', value: '20-80 г/м²' },
  { label: 'Уход', value: 'Машинная стирка' },
];

// Применение
const applications = [
  { room: 'Гостиная', desc: 'Создание воздушности и простора' },
  { room: 'Спальня', desc: 'Мягкий рассеянный свет' },
  { room: 'Детская', desc: 'Лёгкие и безопасные ткани' },
  { room: 'Кухня', desc: 'Практичные износостойкие материалы' },
];

export default function TullePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/images/by-product/tulle/moscow-city/001.jpg"
            alt="Тюль"
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
                <span className="text-white">Тюль</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Тюль
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Воздушные полупрозрачные ткани для создания атмосферы лёгкости 
                и мягкого рассеянного света в вашем доме
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

        {/* Characteristics */}
        <section className="py-12 bg-white border-b border-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {characteristics.map((char, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-1">
                    {char.value}
                  </div>
                  <div className="text-primary-taupe text-sm">{char.label}</div>
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
                Виды тюля
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tulleTypes.map((type, index) => (
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

        {/* Applications */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Применение
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-6">
                  Тюль для каждой комнаты
                </h2>
                <p className="text-primary-espresso/70 mb-8 leading-relaxed">
                  Мы подберём оптимальный вариант тюля с учётом назначения помещения, 
                  уровня освещённости и стиля интерьера.
                </p>
                <div className="space-y-4">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-primary-cream/50 hover:bg-primary-cream transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-espresso flex items-center justify-center flex-shrink-0">
                        <span className="font-heading font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-primary-espresso">{app.room}</h4>
                        <p className="text-primary-espresso/60 text-sm">{app.desc}</p>
                      </div>
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

        {/* Features */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Преимущества
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Почему выбирают наш тюль
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Европейские ткани',
                  desc: 'Работаем с лучшими производителями из Германии, Турции и Польши',
                },
                {
                  title: 'Точный пошив',
                  desc: 'Идеальная длина и ширина. Учитываем коэффициент сборки',
                },
                {
                  title: 'Долговечность',
                  desc: 'Устойчивость к выцветанию и деформации при стирке',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-espresso flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-espresso mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary-espresso/70">{feature.desc}</p>
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
                Тюль в интерьере
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl mx-auto mb-8">
                Воздушный тюль в наших проектах создает атмосферу легкости и комфорта
              </p>
            </div>

            <ImageGallery 
              images={[
                '/images/by-product/tulle/moscow-city/001.jpg',
                '/images/by-product/tulle/moscow-city/002.jpg',
                '/images/by-product/tulle/alliance-security/001.jpg',
                '/images/by-product/tulle/belova/001.jpg',
                '/images/by-product/tulle/girko/001.jpg',
                '/images/by-product/tulle/kilinkarov/001.jpg',
                '/images/by-product/tulle/malofeev/001.jpg',
                '/images/by-product/tulle/moskin/001.jpg',
                '/images/by-product/tulle/toirus/001.jpg',
              ]} 
              columns={3} 
            />

            <div className="text-center mt-12">
              <Link
                href="/portfolio?filter=tulle"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-taupe text-white font-medium rounded-full hover:bg-primary-espresso transition-colors"
              >
                Смотреть все проекты с тюлем
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
                Цены на тюль
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Классическая вуаль', price: 'от 1 200 ₽/м²' },
                { service: 'Органза', price: 'от 1 500 ₽/м²' },
                { service: 'Тюль с вышивкой', price: 'от 2 500 ₽/м²' },
                { service: 'Дизайнерские коллекции', price: 'от 4 000 ₽/м²' },
                { service: 'Пошив и обработка', price: 'от 800 ₽/м.п.' },
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
              Создайте воздушный интерьер
            </h2>
            <p className="text-white/80 text-lg mb-10 w-full max-w-xl mx-auto">
              Закажите образцы тюля с доставкой на дом или посетите наш шоурум
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-espresso font-medium rounded-full hover:bg-primary-cream transition-colors duration-300"
              >
                Заказать образцы
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
