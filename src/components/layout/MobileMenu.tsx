'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, Mail, Send, ChevronRight } from 'lucide-react';
import { NAVIGATION_MENU, SERVICES_SUBMENU, CONTACTS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Закрытие по Escape и блокировка скролла
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-primary-espresso/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-primary-sand/50">
          <span className="font-heading text-xl font-bold text-primary-espresso">
            Меню
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-brown hover:text-primary-espresso hover:bg-primary-sand/50 transition-all"
            aria-label="Закрыть меню"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-5 py-6 overflow-y-auto max-h-[calc(100vh-280px)]">
          {NAVIGATION_MENU.map((item) => (
            item.hasDropdown ? (
              <div key={item.href} className="border-b border-primary-sand/30">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full font-body text-base py-3 text-primary-espresso"
                >
                  {item.label}
                  <ChevronRight 
                    size={18} 
                    className={`transition-transform duration-200 rotate-90 ${isServicesOpen ? '-rotate-90' : ''}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pb-3 pl-4 space-y-1">
                    {SERVICES_SUBMENU.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-neutral-brown hover:text-primary-taupe transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`font-body text-base py-3 border-b border-primary-sand/30 transition-colors ${
                  pathname === item.href
                    ? 'text-primary-taupe font-medium'
                    : 'text-primary-espresso hover:text-primary-taupe'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="px-5 py-4">
          <Link
            href="/#contacts"
            onClick={onClose}
            className="block w-full py-3 bg-primary-taupe text-white text-center text-sm font-medium rounded-full hover:bg-primary-espresso transition-colors"
          >
            Заказать звонок
          </Link>
        </div>

        {/* Contacts */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-primary-sand/50 bg-primary-cream/50">
          <div className="space-y-3">
            <a
              href={`tel:${CONTACTS.phoneRaw}`}
              className="flex items-center gap-3 text-primary-espresso hover:text-primary-taupe transition-colors"
            >
              <Phone size={18} strokeWidth={1.5} />
              <span className="font-body text-sm">{CONTACTS.phone}</span>
            </a>

            <a
              href={`mailto:${CONTACTS.email}`}
              className="flex items-center gap-3 text-primary-espresso hover:text-primary-taupe transition-colors"
            >
              <Mail size={18} strokeWidth={1.5} />
              <span className="font-body text-sm">{CONTACTS.email}</span>
            </a>

            <a
              href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-espresso hover:text-primary-taupe transition-colors"
            >
              <Send size={18} strokeWidth={1.5} />
              <span className="font-body text-sm">Telegram</span>
            </a>

            <p className="text-xs text-neutral-brown pt-2">
              {CONTACTS.workingHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
