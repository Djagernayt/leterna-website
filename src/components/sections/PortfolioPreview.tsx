import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Гостиная с панорамными окнами',
    image: '/images/portfolio/project-1.jpg',
    slug: 'gostinaya-s-panoramnymi-oknami',
  },
  {
    id: 2,
    title: 'Спальня в светлых тонах',
    image: '/images/portfolio/project-2.jpg',
    slug: 'spalnya-v-svetlyh-tonah',
  },
  {
    id: 3,
    title: 'Детская комната с яркими акцентами',
    image: '/images/portfolio/project-3.jpg',
    slug: 'detskaya-komnata-s-yarkimi-akcentami',
  },
  {
    id: 4,
    title: 'Кабинет в классическом стиле',
    image: '/images/portfolio/project-4.jpg',
    slug: 'kabinet-v-klassicheskom-stile',
  },
];

export const PortfolioPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-primary-cream page-container">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6 md:mb-8">
            Наши проекты
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-brown max-w-2xl mx-auto">
            Вдохновитесь реализованными проектами и представьте, как преобразится ваш интерьер
          </p>
        </div>

        {/* Grid проектов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-[16px] aspect-[3/4] bg-neutral-brown"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-espresso/80 via-primary-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-xl font-semibold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-sm">Смотреть проект</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="primary" size="large" href="/projects">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

/* 
ИЗОБРАЖЕНИЯ ДЛЯ ПОРТФОЛИО (ПРЕВЬЮ НА ГЛАВНОЙ):
Разместить в public/images/portfolio/

project-1.jpg (800x1067px - соотношение 3:4)
- Описание: Гостиная с панорамными окнами
- Требования: Впечатляющий вид, качественный пошив заметен
- Стиль: Премиальный, современный

project-2.jpg
- Описание: Спальня в светлых тонах
- Требования: Уютная атмосфера, нежные ткани
- Стиль: Светлый, воздушный

project-3.jpg
- Описание: Детская комната с яркими акцентами
- Требования: Яркие цвета, игривый дизайн
- Стиль: Современный, радостный

project-4.jpg
- Описание: Кабинет в классическом стиле
- Требования: Солидность, классические шторы
- Стиль: Классический, темные благородные тона
*/
