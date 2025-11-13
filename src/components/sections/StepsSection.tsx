import React from 'react';
import { 
  User, 
  PenTool, 
  Briefcase, 
  FileText, 
  ClipboardList, 
  Settings, 
  Package 
} from 'lucide-react';
import { Card } from '@/components/ui';
import { WORK_STEPS } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  User,
  PenTool,
  Briefcase,
  FileText,
  ClipboardList,
  Settings,
  Package,
};

export const StepsSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-36 bg-white page-container">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-6 md:mb-8">
            Этапы работы
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-brown max-w-2xl mx-auto">
            От первой встречи до финальной установки — мы контролируем каждый шаг, 
            чтобы результат превзошел ваши ожидания.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-10">
          {WORK_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];
            
            return (
              <Card key={step.id} hover className="relative">
                <div className="flex items-start gap-6">
                  {/* Номер и иконка */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-sand flex items-center justify-center text-primary-taupe">
                      {Icon && <Icon size={28} />}
                    </div>
                    {index < WORK_STEPS.length - 1 && (
                      <div className="w-0.5 h-12 bg-primary-sand mx-auto mt-4" />
                    )}
                  </div>

                  {/* Содержание */}
                  <div className="flex-1 pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-3xl font-bold text-primary-taupe/30">
                        {String(step.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-heading text-h3-mobile md:text-h3 font-semibold text-primary-espresso">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
