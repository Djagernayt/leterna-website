'use client';

import React from 'react';

const benefits = [
  {
    text: 'Выезд дизайнера на объект',
  },
  {
    text: 'Собственное производство в короткие сроки',
  },
  {
    text: 'Безупречный сервис и полный комплекс услуг',
  },
  {
    text: 'Гарантия 3 года',
  },
  {
    text: '1100+ реализованных проектов',
  },
];

export const BenefitsBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-primary-sand/50">
      {/* Desktop: 5 в ряд */}
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-5 divide-x divide-primary-sand/50">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="py-5 px-4 text-center"
            >
              <p className="font-body text-sm font-semibold text-neutral-brown leading-snug">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet: 3+2 или скролл */}
      <div className="hidden md:block lg:hidden overflow-x-auto">
        <div className="flex min-w-max">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] py-4 px-4 text-center border-r border-primary-sand/50 last:border-r-0"
            >
              <p className="font-body text-sm font-semibold text-neutral-brown leading-snug">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: горизонтальный скролл */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max px-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] py-4 px-3 text-center border-r border-primary-sand/50 last:border-r-0"
            >
              <p className="font-body text-xs font-semibold text-neutral-brown leading-snug">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
