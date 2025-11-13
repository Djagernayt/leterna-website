'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { NAVIGATION_MENU, CONTACTS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

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
        className="absolute inset-0 bg-primary-espresso/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-primary-cream shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-sand">
          <span className="font-heading text-2xl font-bold text-primary-espresso">
            LETERNA
          </span>
          <button
            onClick={onClose}
            className="text-primary-espresso hover:text-primary-taupe transition-colors"
            aria-label="Закрыть меню"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-4">
          {NAVIGATION_MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`font-body text-lg py-2 transition-colors ${
                pathname === item.href
                  ? 'text-primary-taupe font-semibold'
                  : 'text-primary-espresso hover:text-primary-taupe'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contacts */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-primary-sand bg-primary-sand/30">
          <div className="space-y-3">
            <a
              href={`tel:${CONTACTS.phoneRaw}`}
              className="flex items-center gap-3 text-primary-espresso hover:text-primary-taupe transition-colors"
            >
              <Phone size={20} />
              <span className="font-body">{CONTACTS.phone}</span>
            </a>

            <a
              href={`mailto:${CONTACTS.email}`}
              className="flex items-center gap-3 text-primary-espresso hover:text-primary-taupe transition-colors"
            >
              <Mail size={20} />
              <span className="font-body">{CONTACTS.email}</span>
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="Telegram"
              >
                <Send size={24} />
              </a>

              <a
                href={`https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>

            <p className="text-sm text-neutral-brown pt-2">
              {CONTACTS.workingHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
