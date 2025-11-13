import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Наши проекты - LETERNA',
  description: 'Портфолио реализованных проектов LETERNA. Вдохновитесь нашими работами по оформлению интерьеров премиальными шторами и текстилем.',
};

// Mock данные проектов (замените на реальные)
const projects = [
  {
    id: 1,
    title: 'Гостиная с панорамными окнами',
    description: 'Современная гостиная в стиле минимализм с французскими окнами',
    image: '/images/portfolio/project-1.jpg',
    category: 'Гостиная',
    date: '2024-11',
    tags: ['Минимализм', 'Панорамные окна', 'Светлые тона'],
  },
  {
    id: 2,
    title: 'Спальня в светлых тонах',
    description: 'Уютная спальня с мягкими портьерами и тюлем из премиальных тканей',
    image: '/images/portfolio/project-2.jpg',
    category: 'Спальня',
    date: '2024-10',
    tags: ['Классика', 'Уют', 'Светлая палитра'],
  },
  {
    id: 3,
    title: 'Детская комната с яркими акцентами',
    description: 'Радостная детская комната с римскими шторами в ярких тонах',
    image: '/images/portfolio/project-3.jpg',
    category: 'Детская',
    date: '2024-09',
    tags: ['Яркие цвета', 'Римские шторы', 'Детская'],
  },
  {
    id: 4,
    title: 'Кабинет в классическом стиле',
    description: 'Солидный домашний кабинет с плотными портьерами и ламбрекенами',
    image: '/images/portfolio/project-4.jpg',
    category: 'Кабинет',
    date: '2024-08',
    tags: ['Классика', 'Темные тона', 'Ламбрекены'],
  },
  {
    id: 5,
    title: 'Столовая в загородном доме',
    description: 'Просторная столовая с панорамным остеклением и французскими шторами',
    image: '/images/hero/hero-3.jpg',
    category: 'Столовая',
    date: '2024-07',
    tags: ['Загородный дом', 'Французские шторы', 'Премиум'],
  },
  {
    id: 6,
    title: 'Современная квартира в ЖК',
    description: 'Комплексное оформление 3-комнатной квартиры в новостройке',
    image: '/images/hero/hero-1.jpg',
    category: 'Квартира',
    date: '2024-06',
    tags: ['Новостройка', 'Комплексное оформление', 'Современный стиль'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-4.jpg"
          alt="Наши проекты"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-espresso/60" />
        <div className="relative z-10 text-center text-white page-container">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Наши проекты
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Более 50 реализованных проектов по оформлению интерьеров премиальными шторами.
            Каждый проект — это уникальное решение, созданное специально для вас.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 lg:py-36 bg-primary-cream page-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group"
              >
                <Card hover className="h-full flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-primary-espresso">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-neutral-brown mb-3">
                      <span>📅</span>
                      <span>
                        {new Date(project.date).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-espresso mb-3 group-hover:text-primary-taupe transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-brown mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-sand rounded-full text-xs text-primary-espresso"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-primary-taupe font-semibold group-hover:gap-3 transition-all">
                      <span>Смотреть проект</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary-taupe text-white page-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Хотите увидеть свой проект здесь?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Оставьте заявку, и мы создадим уникальное текстильное решение для вашего интерьера
          </p>
          <Button variant="secondary" size="large" href="/#contacts">
            Заказать бесплатную консультацию
          </Button>
        </div>
      </section>
    </div>
  );
}
