import React from 'react';
import Image from 'next/image';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white page-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Фото руководителя */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src="/images/about/portrait-albina.jpg"
                alt="Руководитель студии Иван Ульянов"
                fill
                className="rounded-full object-cover shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          {/* Текст */}
          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            <div>
              <p className="text-base sm:text-lg md:text-xl text-neutral-brown italic leading-relaxed">
                "Самая большая благодарность и награда для меня — видеть счастливые лица Клиентов 
                и слышать восхищённые отзывы об их интерьерах. Каждый проект для нас — это не просто 
                работа, а возможность создать что-то по-настоящему особенное, что будет радовать 
                вас каждый день."
              </p>
            </div>

            <div className="border-l-4 border-primary-taupe pl-6">
              <p className="font-heading text-xl font-semibold text-primary-espresso mb-2">
                Иван Ульянов
              </p>
              <p className="text-neutral-brown">
                Руководитель студии LETERNA, гений миллиардер плейбой филантроп
              </p>
            </div>

            <div className="pt-4">
              <p className="font-heading text-2xl text-primary-taupe">
                Стильно. Премиально. С любовью.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
ИЗОБРАЖЕНИЕ ДЛЯ СЕКЦИИ О РУКОВОДИТЕЛЕ:
Разместить в public/images/about/

portrait-albina.jpg (500x500px минимум, квадратное)
- Описание: Профессиональное фото руководителя Гадельшиной Альбины
- Требования: 
  * Естественное освещение
  * Нейтральный или размытый фон
  * Деловой, но приветливый стиль
  * Качественный портрет крупным планом
  * Фото будет обрезано в круг
- Стиль: Профессиональный портрет, премиальный вид
*/
