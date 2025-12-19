import React from 'react';
import Image from 'next/image';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-primary-cream via-white to-primary-sand/30">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Левая колонка - Цитата */}
          <div className="order-2 lg:order-1">
            <blockquote className="space-y-6 md:space-y-8">
              <p className="font-body text-lg md:text-xl lg:text-2xl text-neutral-brown leading-relaxed">
                «Самая большая благодарность и награда для меня – видеть счастливые лица Клиентов, 
                для которых мы создаем авторские проекты по текстильному оформлению, 
                ведь в каждый интерьер мы вкладываем частичку своей души»

              </p>
              <p className="font-body text-lg md:text-xl lg:text-2xl text-neutral-brown leading-relaxed">
              </p>

              <div className="border-l-2 border-primary-taupe pl-5">
                <p className="font-heading text-xl md:text-2xl font-semibold text-primary-espresso mb-1">
                  Гадельшина Альбина
                </p>
                <p className="font-body text-base md:text-lg text-neutral-brown">
                  Руководитель студии штор
                  <br />
                  и текстильного декора
                </p>
              </div>

              <p className="font-heading text-2xl md:text-3xl text-primary-taupe italic pt-4">
                Стильно. Премиально. С Любовью.
              </p>
            </blockquote>
          </div>

          {/* Правая колонка - Круглое фото интерьера */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
              <Image
                src="/images/portfolio/founder.jpg"
                alt="Интерьер проекта LETERNA"
                fill
                className="rounded-full object-cover shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              />
              {/* Декоративное кольцо */}
              <div className="absolute inset-0 rounded-full border-[3px] border-primary-sand/40 scale-[1.06]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
