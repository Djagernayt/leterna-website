import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: 'Название классное',
    price: '20 000 руб.',
    image: '/images/portfolio/project-1.jpg',
    slug: 'project-1',
  },
  {
    id: 2,
    title: 'Название классное',
    price: '20 000 руб.',
    image: '/images/portfolio/project-2.jpg',
    slug: 'project-2',
  },
  {
    id: 3,
    title: 'Название классное',
    price: '20 000 руб.',
    image: '/images/portfolio/project-3.jpg',
    slug: 'project-3',
  },
  {
    id: 4,
    title: 'Название классное',
    price: '20 000 руб.',
    image: '/images/portfolio/project-4.jpg',
    slug: 'project-4',
  },
];

export const PortfolioPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Заголовок */}
        <div className="flex flex-col items-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-primary-espresso mb-4 text-center">
            Наши проекты
          </h2>
          <p className="text-center text-sm md:text-[15px] text-neutral-brown max-w-xl">
            Вдохновитесь реализованными проектами и представьте, как преобразится ваш интерьер
          </p>
        </div>

        {/* Grid проектов - 4 в ряд */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-10 md:mb-14">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              {/* Изображение */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-primary-sand">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Текст под изображением */}
              <div>
                <h3 className="font-body text-sm md:text-[15px] text-primary-espresso mb-1 group-hover:text-primary-taupe transition-colors">
                  {project.title}
                </h3>
                <p className="font-semibold text-sm md:text-[15px] text-primary-espresso">
                  {project.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block px-8 md:px-10 py-3 md:py-3.5 bg-primary-taupe text-white text-sm md:text-[15px] font-medium rounded-full hover:bg-primary-espresso transition-colors"
          >
            Смотреть все проекты
          </Link>
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
