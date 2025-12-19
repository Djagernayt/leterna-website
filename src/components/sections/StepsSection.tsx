import React from 'react';
import { 
  User, 
  Ruler, 
  PenTool, 
  FileText, 
  ClipboardList, 
  Settings, 
  Truck 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Выезд декоратора с образцами тканей на объект',
    icon: User,
  },
  {
    id: 2,
    title: 'Разработка концепции, замеры и выбор материалов',
    icon: Ruler,
  },
  {
    id: 3,
    title: 'Создание дизайн-проекта',
    icon: PenTool,
  },
  {
    id: 4,
    title: 'Заключение договора',
    icon: FileText,
  },
  {
    id: 5,
    title: 'Оформление Технического Задания',
    icon: ClipboardList,
  },
  {
    id: 6,
    title: 'Производство',
    icon: Settings,
  },
  {
    id: 7,
    title: 'Доставка, монтаж, навес, отпаривание',
    icon: Truck,
  },
];

export const StepsSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 bg-primary-cream">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="flex flex-col items-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-primary-espresso mb-6 md:mb-8 text-center">
            Этапы работы
          </h2>
          <p className="text-center text-base md:text-lg text-neutral-brown max-w-xl">
            От первой встречи до финальной установки — мы контролируем каждый шаг, 
            чтобы результат превзошел ваши ожидания.
          </p>
        </div>

        {/* Grid 2 колонки */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={step.id} 
                className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 min-h-[100px] md:min-h-[110px]"
              >
                <div className="flex items-center gap-4 h-full">
                  {/* Иконка в бежевом кружке */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-sand/60 flex items-center justify-center">
                    <Icon size={22} className="text-primary-taupe" strokeWidth={1.5} />
                  </div>

                  {/* Содержание */}
                  <div className="flex-1 flex items-center gap-3">
                    <span className="font-heading text-2xl md:text-[28px] font-bold text-primary-sand flex-shrink-0">
                      {String(step.id).padStart(2, '0')}
                    </span>
                    <p className="font-body text-base md:text-lg text-primary-espresso leading-snug">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
