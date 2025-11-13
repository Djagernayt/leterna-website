import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-36 bg-primary-cream page-container">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Левая колонка - Заголовок */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-espresso leading-tight">
              ПРЕВРАЩАЕМ ИДЕИ В РЕЗУЛЬТАТ
            </h2>
          </div>

          {/* Правая колонка - Текст */}
          <div className="space-y-8 text-base sm:text-lg md:text-xl text-neutral-brown">
            <p className="leading-relaxed">
              LETERNA — это место, где рождаются уникальные текстильные решения, созданные специально для вас. 
              Мы работаем не просто с тканью, а с атмосферой вашего дома.
            </p>
            <p className="leading-relaxed">
              Каждая деталь имеет значение: от первого касания материала до момента, когда шторы преображают 
              ваше пространство. Мы создаем не просто текстиль — мы создаем место силы, где вам комфортно жить.
            </p>
            <p className="leading-relaxed">
              Индивидуальный подход, премиальные ткани и внимание к деталям — вот что делает каждый наш проект 
              по-настоящему особенным. Мы не работаем по шаблонам, потому что каждый дом уникален, как и его хозяева.
            </p>
            <div className="pt-4">
              <p className="font-heading text-xl text-primary-taupe italic">
                Стильно. Премиально. С любовью.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
