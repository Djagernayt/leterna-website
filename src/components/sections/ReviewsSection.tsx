'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui';
import { REVIEWS } from '@/lib/constants';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ReviewsSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white page-container">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6 md:mb-8">
            Отзывы наших клиентов
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-brown max-w-2xl mx-auto">
            Нам доверяют те, кто ценит качество, внимание к деталям и индивидуальный подход
          </p>
        </div>

        {/* Swiper Slider - показывается только после монтирования */}
        {!isMounted ? (
          // Placeholder на время SSR
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {REVIEWS.slice(0, 3).map((review) => (
              <Card key={review.id} className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-primary-taupe text-primary-taupe"
                    />
                  ))}
                </div>
                <p className="text-body-mobile md:text-body text-neutral-brown mb-6 flex-1">
                  "{review.text}"
                </p>
                <div className="border-t border-primary-sand pt-4">
                  <p className="font-heading text-lg font-semibold text-primary-espresso">
                    {review.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="reviews-swiper"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id}>
                <Card className="h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-primary-taupe text-primary-taupe"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-body-mobile md:text-body text-neutral-brown mb-6 flex-1">
                    "{review.text}"
                  </p>

                  {/* Client Name */}
                  <div className="border-t border-primary-sand pt-4">
                    <p className="font-heading text-lg font-semibold text-primary-espresso">
                      {review.name}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
