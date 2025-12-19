import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
          {/* Левая колонка - Заголовок */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] font-light text-primary-espresso leading-[1.1] tracking-tight">
              ПРЕВРАЩАЕМ
              <br />
              ИДЕИ В
              <br />
              РЕЗУЛЬТАТ
            </h2>
          </div>

          {/* Правая колонка - Текст */}
          <div className="space-y-6">
            <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
              <span className="font-semibold text-primary-espresso">Дом, наше Место силы</span> где мы расслабляемся, наполняемся силами и вдохновением, 
              общаемся с близкими и любимыми.

            </p>
            <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
              Мы — Студия штор и текстильного декора <span className="font-semibold text-primary-espresso">LETERNA</span>. 
              Мы не просто создаем стильные интерьеры, мы создаем атмосферу, где важна каждая деталь, 
              мы создаем отражение вашего характера и вашего ДНК. Интерьеры, 
              в котором каждую минуту наслаждаешься жизнью и комфортом.
            </p>
            <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
              Шторы и текстильное декорирование – финальный штрих, который преображает интерьер и нашу жизнь, 
              создает пространство, куда хочется возвращаться снова и снова.
              Почувствуй себя дома с студией штор и текстильного декора LETERNA.
            </p>
            <div className="pt-4">
              <p className="font-heading text-xl md:text-2xl text-primary-taupe italic">
                Стильно. Премиально. С Любовью.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
