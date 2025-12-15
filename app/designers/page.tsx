import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Для дизайнеров - LETERNA',
  description: 'Партнерская программа для дизайнеров интерьера. Специальные условия, персональный менеджер, скидки и поддержка на всех этапах проекта.',
};

// Преимущества сотрудничества
const benefits = [
  {
    number: '01',
    title: 'Персональный менеджер',
    description: 'Выделенный специалист для решения всех вопросов по вашим проектам',
  },
  {
    number: '02',
    title: 'Специальные цены',
    description: 'До 30% скидка на все услуги и материалы для партнеров',
  },
  {
    number: '03',
    title: 'Приоритетные сроки',
    description: 'Ускоренное производство и установка для проектов партнеров',
  },
  {
    number: '04',
    title: 'Портфолио материалов',
    description: 'Доступ к эксклюзивным тканям и коллекциям премиум-сегмента',
  },
  {
    number: '05',
    title: 'Обучение и поддержка',
    description: 'Мастер-классы, консультации и экспертная помощь по текстилю',
  },
  {
    number: '06',
    title: 'Бонусная программа',
    description: 'Накопительные бонусы и дополнительные скидки для постоянных партнеров',
  },
];

// Этапы сотрудничества
const steps = [
  {
    number: '01',
    title: 'Регистрация',
    description: 'Заполните заявку и предоставьте портфолио работ',
  },
  {
    number: '02',
    title: 'Встреча',
    description: 'Знакомство с командой и обсуждение условий сотрудничества',
  },
  {
    number: '03',
    title: 'Договор',
    description: 'Подписание партнерского соглашения с фиксацией условий',
  },
  {
    number: '04',
    title: 'Работа',
    description: 'Доступ к специальным ценам и персональному менеджеру',
  },
];

// Условия партнерства
const conditions = [
  'Опыт работы в дизайне интерьера от 1 года',
  'Наличие портфолио реализованных проектов',
  'Профессиональный подход к работе с клиентами',
  'Готовность к долгосрочному сотрудничеству',
];

export default function DesignersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Для дизайнеров"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-espresso/60" />
          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
                Дизайнерам
              </h1>
              <p className="font-body text-center text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Станьте партнером LETERNA и получите доступ к эксклюзивным условиям 
                сотрудничества для реализации проектов премиум-класса
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso mb-6 text-center">
                Преимущества партнерства
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl">
                Мы создали программу, которая упрощает работу дизайнеров 
                и помогает реализовывать проекты на высочайшем уровне
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.number} 
                  className="bg-primary-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-taupe text-white font-heading text-xl font-bold flex items-center justify-center mx-auto mb-5">
                    {benefit.number}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary-espresso mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso mb-6 text-center">
                Как стать партнером
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown">
                Простой процесс регистрации займет всего несколько дней
              </p>
            </div>

            <div className="w-full max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step) => (
                  <div 
                    key={step.number} 
                    className="bg-white rounded-2xl p-6 flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-taupe text-white font-heading text-xl font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-primary-espresso mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex flex-col items-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-espresso mb-6 text-center">
                  Условия партнерства
                </h2>
                <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown">
                  Мы работаем только с профессионалами своего дела
                </p>
              </div>

              <div className="bg-primary-sand rounded-2xl p-8 md:p-10">
                <ul className="space-y-5">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-taupe flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="font-body text-sm md:text-[15px] text-primary-espresso">
                        {condition}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-primary-taupe">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Партнеров-дизайнеров
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  300+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Совместных проектов
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  15
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Лет на рынке
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 md:py-28 bg-primary-cream">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="w-full max-w-xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-espresso mb-4">
                  Заявка на партнерство
                </h2>
                <p className="text-neutral-brown">
                  Заполните форму, и мы свяжемся с вами в течение 1 рабочего дня
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary-espresso mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
                        placeholder="Альбина"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-espresso mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-espresso mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-espresso mb-2">
                      Расскажите о себе
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors resize-none"
                      placeholder="Опишите ваш опыт и проекты..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      className="mt-1 w-5 h-5 rounded border-2 border-primary-sand accent-primary-taupe"
                    />
                    <label htmlFor="agreement" className="text-sm text-neutral-brown">
                      Я согласен(а) на обработку персональных данных
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary-taupe text-white font-semibold rounded-full hover:bg-primary-espresso transition-colors"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-4 text-center">
                Остались вопросы?
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown mb-8 max-w-xl">
                Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contacts"
                  className="px-8 py-4 bg-primary-taupe text-white font-semibold rounded-full hover:bg-primary-espresso transition-colors"
                >
                  Связаться с нами
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-primary-taupe text-primary-taupe font-semibold rounded-full hover:bg-primary-taupe hover:text-white transition-colors"
                >
                  Посмотреть проекты
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
