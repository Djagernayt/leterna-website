import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Текстильный декор - LETERNA',
  description: 'Текстильный декор для интерьера: декоративные подушки, покрывала, скатерти, салфетки. Создание единого стиля.',
};

// Категории декора
const decorCategories = [
  {
    title: 'Декоративные подушки',
    description: 'Акцентные и декоративные подушки из премиальных тканей. Разные размеры, формы и наполнители.',
    items: ['Квадратные 45×45', 'Прямоугольные 30×50', 'Круглые', 'Валики'],
  },
  {
    title: 'Покрывала и пледы',
    description: 'Стёганые покрывала, мягкие пледы и дорожки для кровати. Натуральные и смесовые ткани.',
    items: ['Стёганые', 'Вязаные', 'Меховые', 'Двусторонние'],
  },
  {
    title: 'Столовый текстиль',
    description: 'Скатерти, дорожки, салфетки и чехлы на стулья. Для повседневного использования и праздников.',
    items: ['Скатерти', 'Раннеры', 'Салфетки', 'Чехлы'],
  },
  {
    title: 'Текстиль для ванной',
    description: 'Шторы для ванной, полотенца, халаты и коврики. Влагостойкие и антибактериальные материалы.',
    items: ['Шторы', 'Полотенца', 'Коврики', 'Халаты'],
  },
];

// Преимущества
const features = [
  {
    title: 'Единый стиль',
    desc: 'Создаём комплекты, идеально сочетающиеся со шторами и интерьером',
  },
  {
    title: 'Премиум ткани',
    desc: 'Используем те же ткани, что и для штор — для полной гармонии',
  },
  {
    title: 'Индивидуальный пошив',
    desc: 'Любые размеры и формы по вашим пожеланиям',
  },
  {
    title: 'Быстрые сроки',
    desc: 'Изготовление декора от 3 дней',
  },
];

// Примеры комплектов
const sets = [
  {
    name: 'Спальня',
    items: 'Покрывало + 4 подушки + 2 валика + дорожка',
    price: 'от 35 000 ₽',
  },
  {
    name: 'Гостиная',
    items: '6-8 подушек разных размеров + плед',
    price: 'от 25 000 ₽',
  },
  {
    name: 'Столовая',
    items: 'Скатерть + раннер + 6 салфеток + 6 чехлов',
    price: 'от 20 000 ₽',
  },
  {
    name: 'Детская',
    items: 'Покрывало + подушки + балдахин + бортики',
    price: 'от 30 000 ₽',
  },
];

export default function DecorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-primary-cream via-primary-sand to-primary-taupe">
          <div className="relative z-10 w-full">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
                <Link href="/" className="hover:text-white transition-colors">Главная</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Услуги</Link>
                <span>/</span>
                <span className="text-white">Текстильный декор</span>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                Текстильный декор
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Завершающие штрихи для вашего интерьера. Подушки, покрывала, 
                скатерти в едином стиле со шторами
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-cream flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary-espresso">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-espresso mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-espresso/60 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Каталог
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Категории декора
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {decorCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-cream via-primary-taupe/10 to-primary-cream flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto text-primary-espresso/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-heading text-2xl font-bold text-primary-espresso mb-3">
                      {category.title}
                    </h3>
                    <p className="text-primary-espresso/70 mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-cream text-primary-taupe text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-cream via-primary-taupe/20 to-primary-cream flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-primary-espresso/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                  Процесс
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-6">
                  Как мы создаём декор
                </h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Консультация', desc: 'Обсуждаем стиль, цветовую гамму и потребности' },
                    { step: '02', title: 'Подбор тканей', desc: 'Предлагаем образцы, сочетающиеся со шторами' },
                    { step: '03', title: 'Эскиз', desc: 'Создаём визуализацию или чертежи изделий' },
                    { step: '04', title: 'Производство', desc: 'Пошив на собственном производстве' },
                    { step: '05', title: 'Доставка', desc: 'Привозим готовые изделия и при необходимости укомплектовываем' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-espresso flex items-center justify-center flex-shrink-0">
                        <span className="font-heading font-bold text-white">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-primary-espresso mb-1">{item.title}</h4>
                        <p className="text-primary-espresso/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sets */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Комплекты
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-4">
                Готовые решения
              </h2>
              <p className="text-primary-espresso/70 w-full max-w-2xl mx-auto">
                Закажите комплект декора для конкретной комнаты со скидкой
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sets.map((set, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-heading text-xl font-bold text-primary-espresso mb-3">
                    {set.name}
                  </h3>
                  <p className="text-primary-espresso/70 text-sm mb-4">
                    {set.items}
                  </p>
                  <div className="font-heading text-2xl font-bold text-primary-espresso">
                    {set.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-block text-primary-taupe text-sm tracking-[0.2em] uppercase mb-4">
                Стоимость
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso">
                Цены на декор
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { service: 'Декоративная подушка 45×45', price: 'от 3 500 ₽' },
                { service: 'Подушка-валик', price: 'от 4 000 ₽' },
                { service: 'Покрывало стёганое', price: 'от 15 000 ₽' },
                { service: 'Плед вязаный', price: 'от 8 000 ₽' },
                { service: 'Скатерть', price: 'от 5 000 ₽' },
                { service: 'Комплект салфеток (6 шт)', price: 'от 3 000 ₽' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 rounded-xl bg-white hover:shadow-md transition-shadow"
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
              Создайте уютный интерьер
            </h2>
            <p className="text-white/80 text-lg mb-10 w-full max-w-xl mx-auto">
              Закажите текстильный декор в едином стиле со шторами
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
