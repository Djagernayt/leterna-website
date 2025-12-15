import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { ImageGallery } from '@/components/common';
import { getProjectsByProduct } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'Шторы и портьеры - LETERNA',
  description: 'Пошив штор и портьер премиум-класса. Классические и современные решения из лучших тканей Италии и Бельгии.',
};

// Типы штор
const curtainTypes = [
  {
    title: 'Классические портьеры',
    description: 'Роскошные многослойные композиции с ламбрекенами, свагами и декоративными элементами. Идеальны для парадных гостиных.',
    image: '/images/by-product/curtains-blackout/moscow-city/001.jpg',
  },
  {
    title: 'Современные шторы',
    description: 'Лаконичный дизайн с чистыми линиями. Люверсы, петли или скрытый карниз для минималистичного интерьера.',
    image: '/images/by-product/curtains-blackout/malofeev/001.jpg',
  },
  {
    title: 'Шторы на подкладке',
    description: 'Дополнительная защита от света и холода. Подкладка blackout, термоподкладка или декоративная контрастная.',
    image: '/images/by-product/curtains-blackout/toirus/001.jpg',
  },
  {
    title: 'Шторы с вышивкой',
    description: 'Эксклюзивные ткани с ручной и машинной вышивкой. Уникальные орнаменты и авторские рисунки.',
    image: '/images/by-product/curtains-blackout/pudrikova/001.jpg',
  },
];

// Ткани
const fabrics = [
  { name: 'Бархат', origin: 'Италия', desc: 'Роскошная текстура, глубокие цвета' },
  { name: 'Лён', origin: 'Бельгия', desc: 'Натуральность и экологичность' },
  { name: 'Шёлк', origin: 'Италия', desc: 'Благородный блеск, лёгкость' },
  { name: 'Жаккард', origin: 'Турция', desc: 'Сложные узоры, долговечность' },
  { name: 'Хлопок', origin: 'Португалия', desc: 'Практичность и комфорт' },
  { name: 'Смесовые', origin: 'Испания', desc: 'Оптимальные свойства' },
];

// Преимущества
const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Точный замер',
    desc: 'Бесплатный выезд на объект',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Подбор ткани',
    desc: 'Образцы с доставкой на дом',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Индивидуальный пошив',
    desc: 'Производство за 10-14 дней',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Монтаж с гарантией',
    desc: 'Установка и обслуживание',
  },
];

// Старая галерея удалена - используется реальная секция Portfolio Gallery ниже

export default function CurtainsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/images/by-product/curtains-blackout/moscow-city/001.jpg"
            alt="Шторы и портьеры"
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
                <span className="text-white">Шторы и портьеры</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Шторы и портьеры
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Создаём текстильное оформление окон, которое становится украшением интерьера 
                и служит долгие годы
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

        {/* Features */}
        <section className="py-16 bg-white border-b border-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-cream flex items-center justify-center text-primary-espresso">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-espresso mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-espresso/60">{feature.desc}</p>
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
                Направления
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Виды штор
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curtainTypes.map((type, index) => (
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

        {/* Fabrics */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Материалы
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-4">
                Премиальные ткани
              </h2>
              <p className="text-primary-espresso/70 w-full max-w-2xl mx-auto">
                Работаем только с лучшими производителями текстиля Европы
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {fabrics.map((fabric, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-primary-cream/50 text-center hover:bg-primary-cream transition-colors duration-300"
                >
                  <h4 className="font-heading text-lg font-bold text-primary-espresso mb-1">
                    {fabric.name}
                  </h4>
                  <p className="text-primary-taupe text-sm mb-2">{fabric.origin}</p>
                  <p className="text-primary-espresso/60 text-sm">{fabric.desc}</p>
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
                Реализованные проекты
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl mx-auto mb-8">
                Портьеры и блэкаут-системы в наших проектах. Посмотрите, как выглядят шторы в реальных интерьерах
              </p>
            </div>

            <ImageGallery 
              images={[
                '/images/by-product/curtains-blackout/moscow-city/001.jpg',
                '/images/by-product/curtains-blackout/moscow-city/002.jpg',
                '/images/by-product/curtains-blackout/girko/001.jpg',
                '/images/by-product/curtains-blackout/malofeev/001.jpg',
                '/images/by-product/curtains-blackout/toirus/001.jpg',
                '/images/by-product/curtains-blackout/pudrikova/001.jpg',
                '/images/by-product/curtains-blackout/skurskaya/001.jpg',
                '/images/by-product/curtains-blackout/skurskaya/002.jpg',
              ]} 
              columns={3} 
            />

            <div className="text-center mt-12">
              <Link
                href="/portfolio?filter=curtains-blackout"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-taupe text-white font-medium rounded-full hover:bg-primary-espresso transition-colors"
              >
                Смотреть все проекты со шторами
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-4">
                Цены на услуги
              </h2>
              <p className="text-primary-espresso/70">
                Итоговая стоимость зависит от выбранных тканей и сложности изделия
              </p>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Пошив простых штор (люверсы, лента)', price: 'от 2 500 ₽/м²' },
                { service: 'Пошив штор с подкладкой', price: 'от 3 500 ₽/м²' },
                { service: 'Шторы с ламбрекеном', price: 'от 5 000 ₽/м²' },
                { service: 'Сложные декоративные композиции', price: 'от 8 000 ₽/м²' },
                { service: 'Замер и консультация на объекте', price: 'Бесплатно' },
                { service: 'Монтаж карниза и штор', price: 'от 3 000 ₽' },
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
              Закажите шторы вашей мечты
            </h2>
            <p className="text-white/80 text-lg mb-10 w-full max-w-xl mx-auto">
              Оставьте заявку, и наш декоратор приедет к вам с образцами тканей для подбора идеального решения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-espresso font-medium rounded-full hover:bg-primary-cream transition-colors duration-300"
              >
                Заказать консультацию
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
