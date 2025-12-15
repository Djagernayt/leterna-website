'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    id: 1,
    name: 'Дмитрий Х.',
    text: 'Профессиональный подход на всех этапах. Особенно порадовала консультация дизайнера.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Анна С.',
    text: 'Рекомендую! Сроки соблюдены, цены адекватные, результат превзошёл ожидания.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Михаил П.',
    text: 'Отличное качество пошива и монтажа. Всё выполнено профессионально и в срок.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Елена В.',
    text: 'Спасибо за терпение и внимание к мелочам! Шторы идеально вписались в интерьер.',
    rating: 5,
  },
];

export const ReviewsSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const StarRating = () => (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-primary-taupe text-primary-taupe"
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-primary-cream">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Заголовок */}
        <div className="flex flex-col items-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-primary-espresso mb-4 text-center">
            Отзывы наших клиентов
          </h2>
          <p className="text-center text-sm md:text-[15px] text-neutral-brown max-w-xl">
            Нам доверяют те, кто ценит качество, внимание к деталям и индивидуальный подход
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          {!isMounted ? (
            // Placeholder на время SSR
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <StarRating />
                  <p className="text-sm md:text-[15px] text-neutral-brown mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-sm text-primary-espresso">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Navigation Buttons */}
              <button 
                className="reviews-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-neutral-brown hover:text-primary-taupe transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="reviews-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-neutral-brown hover:text-primary-taupe transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight size={20} />
              </button>

              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '.reviews-prev',
                  nextEl: '.reviews-next',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="!overflow-visible"
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] h-full">
                      <StarRating />
                      <p className="text-sm md:text-[15px] text-neutral-brown mb-6 leading-relaxed">
                        "{review.text}"
                      </p>
                      <p className="font-semibold text-sm text-primary-espresso">
                        {review.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            href="/reviews"
            className="inline-block px-8 md:px-10 py-3 md:py-3.5 bg-primary-taupe text-white text-sm md:text-[15px] font-medium rounded-full hover:bg-primary-espresso transition-colors"
          >
            Смотреть все отзывы
          </Link>
        </div>
      </div>
    </section>
  );
};
