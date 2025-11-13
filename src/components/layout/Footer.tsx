import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Send, Instagram } from 'lucide-react';
import { CONTACTS, SERVICES, SOCIAL_LINKS } from '@/lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-primary-sand text-neutral-brown">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Колонка 1: О компании */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-espresso mb-4">
              LETERNA
            </h3>
            <p className="text-sm mb-4">
              Студия премиальных штор и текстильного декора. Стильно. Премиально. С любовью.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="Telegram"
              >
                <Send size={24} />
              </a>
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-espresso mb-4">
              Услуги
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-primary-taupe hover:underline transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-espresso mb-4">
              Информация
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary-taupe hover:underline transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm hover:text-primary-taupe hover:underline transition-colors"
                >
                  Наши проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-primary-taupe hover:underline transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="/designers"
                  className="text-sm hover:text-primary-taupe hover:underline transition-colors"
                >
                  Дизайнерам
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-sm hover:text-primary-taupe hover:underline transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-espresso mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACTS.phoneRaw}`}
                  className="flex items-center gap-2 text-sm hover:text-primary-taupe transition-colors"
                >
                  <Phone size={16} />
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-2 text-sm hover:text-primary-taupe transition-colors"
                >
                  <Mail size={16} />
                  {CONTACTS.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary-taupe transition-colors"
                >
                  <Send size={16} />
                  {CONTACTS.telegram}
                </a>
              </li>
              <li className="text-sm pt-2">
                {CONTACTS.workingHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-taupe/20">
        <div className="max-w-7xl mx-auto py-6 page-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-sm">
            <p>© {currentYear} LETERNA. Все права защищены.</p>
            <div className="flex gap-6">
              <button className="hover:text-primary-taupe hover:underline transition-colors">
                Оферта
              </button>
              <button className="hover:text-primary-taupe hover:underline transition-colors">
                Политика конфиденциальности
              </button>
              <button className="hover:text-primary-taupe hover:underline transition-colors">
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
