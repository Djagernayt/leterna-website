'use client';

import React from 'react';

const benefits = [
  {
    text: 'Выезд дизайнера на объект',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    text: 'Собственное производство в короткие сроки',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'Безупречный сервис и полный комплекс услуг',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    text: 'Гарантия 3 года',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    text: '1100+ реализованных проектов',
    icon: (
      <svg className="w-8 h-8 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
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
              className="py-6 px-4 text-center"
            >
              <div className="text-primary-taupe">
                {benefit.icon}
              </div>
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
              className="flex-shrink-0 w-[200px] py-5 px-4 text-center border-r border-primary-sand/50 last:border-r-0"
            >
              <div className="text-primary-taupe">
                {benefit.icon}
              </div>
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
              <div className="text-primary-taupe">
                {benefit.icon}
              </div>
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
