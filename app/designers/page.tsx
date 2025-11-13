import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Star, User, Award, Clock } from 'lucide-react';
import { Card, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Для дизайнеров - LETERNA',
  description: 'Партнерская программа для дизайнеров интерьера. Специальные условия, персональный менеджер, скидки и поддержка на всех этапах проекта.',
};

// Преимущества сотрудничества
const benefits = [
  {
    icon: Star,
    title: 'Персональный менеджер',
    description: 'Выделенный специалист для решения всех вопросов по вашим проектам',
  },
  {
    icon: Star,
    title: 'Специальные цены',
    description: 'До 30% скидка на все услуги и материалы для партнеров',
  },
  {
    icon: Clock,
    title: 'Приоритетные сроки',
    description: 'Ускоренное производство и установка для проектов партнеров',
  },
  {
    icon: Award,
    title: 'Портфолио материалов',
    description: 'Доступ к эксклюзивным тканям и коллекциям премиум-сегмента',
  },
  {
    icon: User,
    title: 'Обучение и поддержка',
    description: 'Мастер-классы, консультации и экспертная помощь по текстилю',
  },
  {
    icon: Star,
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
  'Рекомендации от предыдущих клиентов приветствуются',
];

export default function DesignersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Для дизайнеров"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-espresso/60" />
        <div className="relative z-10 text-center text-white page-container">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Для дизайнеров
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Станьте партнером LETERNA и получите доступ к эксклюзивным условиям 
            сотрудничества для реализации проектов премиум-класса
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white page-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6">
              Преимущества партнерства
            </h2>
            <p className="text-lg md:text-xl text-neutral-brown max-w-3xl mx-auto">
              Мы создали программу, которая упрощает работу дизайнеров 
              и помогает реализовывать проекты на высочайшем уровне
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary-rose flex items-center justify-center">
                    <benefit.icon size={32} className="text-primary-espresso" />
                  </div>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-espresso mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-brown leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-primary-cream page-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6">
              Как стать партнером
            </h2>
            <p className="text-lg md:text-xl text-neutral-brown">
              Простой процесс регистрации займет всего несколько дней
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-taupe text-white font-heading text-2xl font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-espresso mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-brown leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6">
              Условия партнерства
            </h2>
            <p className="text-lg md:text-xl text-neutral-brown">
              Мы работаем только с профессионалами своего дела
            </p>
          </div>

          <Card className="bg-primary-sand border-none">
            <ul className="space-y-6">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-taupe flex items-center justify-center text-white text-lg">
                    ✓
                  </div>
                  <span className="text-lg text-primary-espresso pt-1">
                    {condition}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-primary-taupe text-white page-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold mb-2">
                50+
              </div>
              <div className="text-lg md:text-xl opacity-90">
                Партнеров-дизайнеров
              </div>
            </div>
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold mb-2">
                300+
              </div>
              <div className="text-lg md:text-xl opacity-90">
                Совместных проектов
              </div>
            </div>
            <div>
              <div className="font-heading text-5xl md:text-6xl font-bold mb-2">
                15
              </div>
              <div className="text-lg md:text-xl opacity-90">
                Лет на рынке
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white page-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="text-7xl mb-6">🤝</div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6">
              Заявка на партнерство
            </h2>
            <p className="text-lg md:text-xl text-neutral-brown">
              Заполните форму, и мы свяжемся с вами в течение 1 рабочего дня
            </p>
          </div>

          <Card>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-espresso mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-lg border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
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
                    className="w-full px-5 py-4 rounded-lg border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
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
                  className="w-full px-5 py-4 rounded-lg border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-espresso mb-2">
                  Опыт работы (лет) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full px-5 py-4 rounded-lg border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
                  placeholder="5"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-espresso mb-2">
                  Ссылка на портфолио
                </label>
                <input
                  type="url"
                  className="w-full px-5 py-4 rounded-lg border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors"
                  placeholder="https://your-portfolio.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-espresso mb-2">
                  Расскажите о себе и своих проектах
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 rounded-lg border-2 border-primary-sand focus:border-primary-taupe focus:outline-none transition-colors resize-none"
                  placeholder="Опишите свой опыт, стиль работы и проекты, которые вы реализовали..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  required
                  className="mt-1 w-5 h-5 rounded border-2 border-primary-sand focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="agreement" className="text-sm text-neutral-brown">
                  Я согласен(а) на обработку персональных данных и принимаю условия партнерского соглашения
                </label>
              </div>

              <Button size="large" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <p className="text-center text-sm text-neutral-brown mt-6">
            * Обязательные поля для заполнения
          </p>
        </div>
      </section>
    </div>
  );
}
