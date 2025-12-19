'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Send } from 'lucide-react';
import { CONTACTS, COMPANY_DETAILS } from '@/lib/constants';
import { PDFModal } from '@/components/common/PDFModal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  return (
    <>
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="/Обработка пресональных данных.pdf"
        title="Политика обработки персональных данных"
      />
      
      <footer id="contacts" className="bg-white border-t border-primary-sand/50">
      {/* Main Footer */}
      <div className="w-full max-w-[1440px] mx-auto py-12 md:py-14 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16">
          {/* Колонка 1: О компании */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading text-xl font-bold text-primary-espresso mb-3">
              LETERNA
            </h3>
            <p className="text-xs md:text-sm text-neutral-brown mb-4 leading-relaxed">
              Студия премиальных штор и текстильного декора.
              <br />
              Стильно. Премиально. С любовью.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/leterna_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-sand flex items-center justify-center text-neutral-brown hover:text-primary-taupe hover:border-primary-taupe transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-sand flex items-center justify-center text-neutral-brown hover:text-primary-taupe hover:border-primary-taupe transition-colors"
                aria-label="Telegram"
              >
                <Send size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div>
            <h4 className="font-semibold text-sm text-primary-espresso mb-4">
              Услуги
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Выезд декоратора
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Пошив штор
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Монтаж карнизов
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Навес и отпаривание
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Печать на ткани
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div>
            <h4 className="font-semibold text-sm text-primary-espresso mb-4">
              Информация
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#about" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Наши проекты
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/designers" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Дизайнерам
                </Link>
              </li>
              <li>
                <Link href="/#contacts" className="text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="font-semibold text-sm text-primary-espresso mb-4">
              Контакты
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${CONTACTS.phoneRaw}`}
                  className="flex items-center gap-2 text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors"
                >
                  <Phone size={14} strokeWidth={1.5} />
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-2 text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors"
                >
                  <Mail size={14} strokeWidth={1.5} />
                  {CONTACTS.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-neutral-brown hover:text-primary-taupe transition-colors"
                >
                  <Send size={14} strokeWidth={1.5} />
                  {CONTACTS.telegram}
                </a>
              </li>
              <li className="text-xs md:text-sm text-neutral-brown pt-1">
                {CONTACTS.workingHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Company Details Section */}
      <div className="border-t border-primary-sand/50 bg-primary-cream/30">
        <div className="w-full max-w-[1440px] mx-auto py-6 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-neutral-brown">
            <div>
              <h4 className="font-semibold text-sm text-primary-espresso mb-2">Реквизиты организации</h4>
              <div className="space-y-1">
                <p>{COMPANY_DETAILS.legalName}</p>
                <p>ОГРНИП: {COMPANY_DETAILS.ogrnip}</p>
                <p>ИНН: {COMPANY_DETAILS.inn}</p>
                <p>ОКПО: {COMPANY_DETAILS.okpo}</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-xs text-neutral-brown/70 italic">
                *Instagram принадлежит компании Meta,<br className="hidden sm:inline" /> признанной экстремистской организацией и запрещенной на территории РФ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-sand/50">
        <div className="w-full max-w-[1440px] mx-auto py-5 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-brown">
            <p>© {currentYear} LETERNA. Все права защищены.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/offer" className="hover:text-primary-taupe transition-colors">
                Оферта
              </Link>
              <button
                onClick={() => setIsPDFModalOpen(true)}
                className="hover:text-primary-taupe transition-colors"
              >
                Политика конфиденциальности
              </button>
              <Link href="/terms" className="hover:text-primary-taupe transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
