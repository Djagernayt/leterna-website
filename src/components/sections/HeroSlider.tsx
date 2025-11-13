'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    alt: 'Элегантные шторы в гостиной с панорамным окном',
  },
  {
    id: 2,
    image: '/images/hero/hero-2.jpg',
    alt: 'Спальня с мягкими портьерами, утренний свет',
  },
  {
    id: 3,
    image: '/images/hero/hero-3.jpg',
    alt: 'Загородный дом, французские окна с тюлем',
  },
  {
    id: 4,
    image: '/images/hero/hero-4.jpg',
    alt: 'Современная гостиная с минималистичными шторами',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Проверка монтирования для предотвращения hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Автопереключение слайдов каждые 7 секунд
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMounted]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Возобновить автовоспроизведение через 10 секунд
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          {/* Overlay Gradient - улучшенная читаемость текста */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-cream/60 via-primary-cream/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center page-container">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-espresso mb-4 md:mb-6 leading-tight drop-shadow-sm">
              LETERNA
            </h1>
            <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-espresso mb-6 md:mb-8 drop-shadow-sm">
              Студия штор и текстильного декора
            </p>
            <div className="flex flex-wrap gap-4 md:gap-5 mb-10 md:mb-12">
              <span className="px-8 py-4 bg-white backdrop-blur-md text-primary-espresso rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                Стильно
              </span>
              <span className="px-8 py-4 bg-white backdrop-blur-md text-primary-espresso rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                Премиально
              </span>
              <span className="px-8 py-4 bg-white backdrop-blur-md text-primary-espresso rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                С любовью
              </span>
            </div>
            <Button variant="primary" size="large" href="/contacts">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-primary-espresso p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={24} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-primary-espresso p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Следующий слайд"
      >
        <ChevronRight size={24} className="md:w-6 md:h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 md:h-3.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-taupe w-10 md:w-12'
                : 'bg-white/60 hover:bg-white/80 w-3 md:w-3.5'
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* 
ИЗОБРАЖЕНИЯ ДЛЯ HERO-СЕКЦИИ:
Разместить в public/images/hero/

hero-1.jpg (1920x1080px минимум, формат .jpg или .webp)
- Описание: Элегантные шторы в гостиной с панорамным окном
- Требования: Хорошее естественное освещение, видимость текстуры ткани
- Стиль: Премиальный, светлые тона

hero-2.jpg
- Описание: Спальня с мягкими портьерами, утренний свет
- Требования: Уютная атмосфера, мягкий свет
- Стиль: Нежные пастельные тона

hero-3.jpg
- Описание: Загородный дом, французские окна с тюлем
- Требования: Просторное помещение, большие окна
- Стиль: Классический, светлый

hero-4.jpg
- Описание: Современная гостиная с минималистичными шторами
- Требования: Современный интерьер, чистые линии
- Стиль: Минимализм, нейтральные цвета
*/
