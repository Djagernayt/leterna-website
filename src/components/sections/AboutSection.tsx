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
              <span className="font-semibold text-primary-espresso">Дом, наше Место силы</span> — это место где мы проводим 
              много времени, черпаем вдохновение и отдыхаем после сложного дня. Сегодня ценность дома, своего гнезда, 
              очень высока. Поэтому к выбору всего, что связано с его обустройством мы подходим тщательно и неспеша, 
              не желая допускать ошибок.
            </p>
            <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
              Мы — Студия штор и текстильного декора <span className="font-semibold text-primary-espresso">LETERNA</span>. 
              Поможем воплотить Ваши мечты об идеальном текстиле. Индивидуальный подход к каждому клиенту, 
              с полным погружением в нюансы и задачи.
            </p>
            <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
              Наша команда найдет решения для любых окон. Подберем ткани, 
              карнизные системы, автоматику и декор под любой интерьер.
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
