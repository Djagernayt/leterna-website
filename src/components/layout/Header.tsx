'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Send, Menu, ChevronRight } from 'lucide-react';
import { NAVIGATION_MENU, SERVICES_SUBMENU, CONTACTS } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Закрыть dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
            : 'bg-white'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Desktop & Tablet Header (768px+) */}
          <div className="hidden md:flex items-center justify-between h-16 lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/hero/logo.jpg"
                alt="LETERNA"
                width={40}
                height={40}
                className="object-contain lg:w-[50px] lg:h-[50px]"
              />
              <Image
                src="/images/hero/logo text.jpg"
                alt="LETERNA"
                width={100}
                height={32}
                className="object-contain lg:w-[120px] lg:h-[40px]"
              />
            </Link>

            {/* Navigation - только на Desktop (1024px+) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
              {NAVIGATION_MENU.map((item) => (
                item.hasDropdown ? (
                  <div key={item.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      className={`flex items-center gap-1 font-body text-sm transition-colors ${
                        pathname.startsWith('/catalog') || pathname === '/services'
                          ? 'text-primary-taupe font-medium'
                          : 'text-neutral-brown hover:text-primary-taupe'
                      }`}
                    >
                      {item.label}
                      <ChevronRight 
                        size={14} 
                        className={`transition-transform duration-200 rotate-90 ${isServicesOpen ? '-rotate-90' : ''}`} 
                      />
                    </button>
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-primary-sand/30 py-2 z-50"
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {SERVICES_SUBMENU.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-neutral-brown hover:text-primary-taupe hover:bg-primary-cream/50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
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
                    className={`font-body text-sm transition-colors whitespace-nowrap ${
                      pathname === item.href
                        ? 'text-primary-taupe font-medium'
                        : 'text-neutral-brown hover:text-primary-taupe'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
              <a
                href={`tel:${CONTACTS.phoneRaw}`}
                className="hidden lg:flex items-center gap-2 text-primary-espresso hover:text-primary-taupe transition-colors"
              >
                <Phone size={18} strokeWidth={1.5} />
                <span className="text-sm font-medium">{CONTACTS.phone}</span>
              </a>
              <a
                href={`tel:${CONTACTS.phoneRaw}`}
                className="lg:hidden w-9 h-9 flex items-center justify-center text-neutral-brown hover:text-primary-taupe transition-colors"
                aria-label="Позвонить"
              >
                <Phone size={18} strokeWidth={1.5} />
              </a>
              <a
                href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-neutral-brown hover:text-primary-taupe hover:bg-primary-sand/50 transition-all"
                aria-label="Telegram"
              >
                <Send size={18} strokeWidth={1.5} />
              </a>
              <Link
                href="/#contacts"
                className="hidden sm:block px-4 lg:px-5 py-2 lg:py-2.5 bg-primary-taupe text-white text-sm font-medium rounded-full hover:bg-primary-espresso transition-colors whitespace-nowrap"
              >
                Заказать звонок
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-primary-espresso hover:text-primary-taupe transition-colors"
                aria-label="Открыть меню"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Mobile Header (до 767px) */}
          <div className="md:hidden flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-1.5">
              <Image src="/images/hero/logo.jpg" alt="LETERNA" width={32} height={32} className="object-contain" />
              <Image src="/images/hero/logo text.jpg" alt="LETERNA" width={80} height={24} className="object-contain" />
            </Link>
            <div className="flex items-center gap-1">
              <a href={`tel:${CONTACTS.phoneRaw}`} className="w-9 h-9 flex items-center justify-center text-neutral-brown" aria-label="Позвонить">
                <Phone size={18} strokeWidth={1.5} />
              </a>
              <button onClick={() => setIsMobileMenuOpen(true)} className="w-9 h-9 flex items-center justify-center text-primary-espresso" aria-label="Открыть меню">
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="h-14 md:h-16 lg:h-[80px]" />
    </>
  );
};