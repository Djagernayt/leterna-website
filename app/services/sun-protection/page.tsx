import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Солнцезащита - LETERNA',
  description: 'Профессиональные системы солнцезащиты: жалюзи, плиссе, маркизы. Защита от солнца и перегрева для дома и офиса.',
};

// Типы солнцезащиты
const sunProtectionTypes = [
  {
    title: 'Горизонтальные жалюзи',
    description: 'Классика солнцезащиты. Алюминиевые или деревянные ламели с точной регулировкой угла.',
    features: ['Алюминий / Дерево', 'Регулировка света', 'Офис / Дом'],
  },
  {
    title: 'Вертикальные жалюзи',
    description: 'Для больших окон и панорамного остекления. Широкие тканевые ламели.',
    features: ['Ткань / Пластик', 'Панорамные окна', 'Офисы'],
  },
  {
    title: 'Шторы плиссе',
    description: 'Изящные гофрированные шторы. Идеальны для нестандартных окон и мансард.',
    features: ['Любая форма окна', 'День-ночь', 'Мансарды'],
  },
  {
    title: 'Маркизы',
    description: 'Наружная солнцезащита для террас, балконов и зимних садов. Моторизированные системы.',
    features: ['Террасы', 'Автоматика', 'Ветро/солнце датчики'],
  },
];

// Применение
const applications = [
  {
    title: 'Жилые помещения',
    items: ['Спальни', 'Гостиные', 'Детские', 'Кухни', 'Мансарды'],
    desc: 'Комфортный микроклимат и защита интерьера от выгорания',
  },
  {
    title: 'Коммерческие объекты',
    items: ['Офисы', 'Переговорные', 'Рестораны', 'Магазины', 'Салоны'],
    desc: 'Снижение нагрузки на кондиционирование, комфорт сотрудников',
  },
  {
    title: 'Специальные решения',
    items: ['Зимние сады', 'Бассейны', 'Теплицы', 'Веранды', 'Беседки'],
    desc: 'Защита от перегрева и создание комфортных зон отдыха',
  },
];

// Преимущества
const benefits = [
  {
    number: '01',
    title: 'Энергоэффективность',
    desc: 'Снижение затрат на кондиционирование до 30% летом',
  },
  {
    number: '02',
    title: 'Защита интерьера',
    desc: 'Предотвращение выгорания мебели и отделки',
  },
  {
    number: '03',
    title: 'Приватность',
    desc: 'Защита от посторонних взглядов без потери освещённости',
  },
  {
    number: '04',
    title: 'Комфорт',
    desc: 'Оптимальный микроклимат и отсутствие бликов',
  },
];

export default function SunProtectionPage() {
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
                <span className="text-white">Солнцезащита</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Солнцезащита
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Профессиональные решения для защиты от солнца, перегрева 
                и создания комфортного микроклимата
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

        {/* Benefits */}
        <section className="py-16 bg-white border-b border-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-espresso flex items-center justify-center">
                    <span className="font-heading font-bold text-white">{benefit.number}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-espresso mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-espresso/60 text-sm">{benefit.desc}</p>
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
                Системы солнцезащиты
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sunProtectionTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-cream via-primary-taupe/10 to-primary-cream flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto text-primary-espresso/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
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

        {/* Applications */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Применение
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Где используется солнцезащита
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-primary-cream/50 hover:bg-primary-cream transition-colors duration-300"
                >
                  <h3 className="font-heading text-xl font-bold text-primary-espresso mb-4">
                    {app.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-primary-espresso text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-primary-espresso/70 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outdoor */}
        <section className="py-20 md:py-28 bg-primary-espresso">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Наружная защита
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Маркизы и навесы
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Наружные системы солнцезащиты для террас, балконов, веранд 
                  и зимних садов. Автоматическое управление с датчиками погоды.
                </p>
                <ul className="space-y-4">
                  {[
                    'Кассетные выдвижные маркизы',
                    'Пергольные системы',
                    'Вертикальные экраны',
                    'Рафшторы наружные',
                    'Автоматика с датчиками ветра и солнца',
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
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-cream via-primary-taupe/20 to-primary-cream flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto text-primary-espresso/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
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
                Цены на солнцезащиту
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Горизонтальные жалюзи алюминий', price: 'от 1 500 ₽/м²' },
                { service: 'Горизонтальные жалюзи дерево', price: 'от 4 000 ₽/м²' },
                { service: 'Вертикальные жалюзи', price: 'от 1 200 ₽/м²' },
                { service: 'Шторы плиссе', price: 'от 3 500 ₽/м²' },
                { service: 'Маркиза кассетная', price: 'от 45 000 ₽' },
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
              Защитите свой дом от солнца
            </h2>
            <p className="text-primary-espresso/70 text-lg mb-10 w-full max-w-xl mx-auto">
              Бесплатная консультация и расчёт стоимости солнцезащитных систем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacts"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-espresso text-white font-medium rounded-full hover:bg-primary-espresso/90 transition-colors duration-300"
              >
                Заказать расчёт
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
