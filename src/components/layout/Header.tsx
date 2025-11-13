'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Send, Menu } from 'lucide-react';
import { NAVIGATION_MENU, CONTACTS } from '@/lib/constants';
import { Button } from '@/components/ui';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Проверка монтирования для предотвращения hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-cream/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
            : 'bg-primary-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto page-container">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-3xl font-bold text-primary-espresso hover:text-primary-taupe transition-colors"
            >
              LETERNA
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {NAVIGATION_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body text-base transition-colors relative ${
                    pathname === item.href
                      ? 'text-primary-taupe'
                      : 'text-primary-espresso hover:text-primary-taupe'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-taupe" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Contacts & CTA */}
            <div className="flex items-center gap-4">
              {/* Phone */}
              <a
                href={`tel:${CONTACTS.phoneRaw}`}
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="Позвонить"
              >
                <Phone size={24} />
              </a>

              {/* Telegram */}
              <a
                href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="Telegram"
              >
                <Send size={24} />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-taupe hover:text-primary-rose transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>

              {/* CTA Button */}
              <Button variant="primary" size="small" href="/contacts">
                Заказать звонок
              </Button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-primary-espresso"
            >
              LETERNA
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-primary-espresso hover:text-primary-taupe transition-colors"
              aria-label="Открыть меню"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer для fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};
