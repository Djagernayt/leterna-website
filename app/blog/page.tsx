'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/layout';

// Mock данные статей (замените на реальные или подключите CMS)
const blogPosts = [
  {
    id: 'kak-vybrat-shtory-dlya-spalni',
    title: 'Как выбрать шторы для спальни: 7 важных критериев',
    excerpt: 'Рассказываем, на что обратить внимание при выборе штор для спальни, чтобы создать уютную и комфортную атмосферу для отдыха.',
    image: '/images/by-project/belova/normal/001.jpg',
    category: 'Советы',
    author: 'Альбина Гадельшина',
    date: '2024-11-10',
    readTime: '8 мин',
  },
  {
    id: 'trendy-v-tekstilnom-dizaine-2024',
    title: 'Тренды в текстильном дизайне 2024: что выбрать для дома',
    excerpt: 'Обзор актуальных трендов в мире текстильного дизайна: от цветовых решений до фактур и стилей оформления окон.',
    image: '/images/by-project/moscow-city/normal/001.jpg',
    category: 'Тренды',
    author: 'Альбина Гадельшина',
    date: '2024-11-05',
    readTime: '10 мин',
  },
  {
    id: 'uhod-za-premialnym-tekstilem',
    title: 'Уход за премиальным текстилем: как сохранить красоту штор',
    excerpt: 'Правила ухода за дорогими тканями, чистка, стирка и хранение штор, чтобы они служили долгие годы.',
    image: '/images/by-project/toirus/normal/001.jpg',
    category: 'Уход',
    author: 'Команда LETERNA',
    date: '2024-10-28',
    readTime: '6 мин',
  },
  {
    id: 'francuzskie-shtory-v-interiere',
    title: 'Французские шторы в современном интерьере',
    excerpt: 'История, особенности и варианты использования французских штор в разных стилях интерьера.',
    image: '/images/by-project/malofeev/normal/001.jpg',
    category: 'Стили',
    author: 'Альбина Гадельшина',
    date: '2024-10-20',
    readTime: '7 мин',
  },
  {
    id: 'kak-vybrat-karnizy',
    title: 'Как выбрать карнизы: практическое руководство',
    excerpt: 'Виды карнизов, материалы, способы крепления и советы по выбору идеального решения для вашего окна.',
    image: '/images/by-project/pudrikova/001.jpg',
    category: 'Советы',
    author: 'Команда LETERNA',
    date: '2024-10-12',
    readTime: '9 мин',
  },
  {
    id: 'shtory-dlya-detskoy',
    title: 'Шторы для детской комнаты: безопасность и красота',
    excerpt: 'Как выбрать шторы для детской, которые будут безопасными, практичными и понравятся вашему ребенку.',
    image: '/images/by-project/skurskaya/001.jpg',
    category: 'Детская',
    author: 'Альбина Гадельшина',
    date: '2024-10-05',
    readTime: '8 мин',
  },
];

const categories = ['Все статьи', 'Советы', 'Тренды', 'Уход', 'Стили', 'Детская'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Все статьи');

  // Фильтрация статей по категории
  const filteredPosts = activeCategory === 'Все статьи' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-espresso mb-4 md:mb-6 text-center">
                Блог LETERNA
              </h1>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl">
                Экспертные советы по выбору штор, актуальные тренды и полезные статьи 
                о текстильном оформлении интерьера
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-4 md:py-6 bg-white border-b border-primary-sand/50 sticky top-14 md:top-16 lg:top-[80px] z-30">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {categories.map((category) => {
                  const categoryCount = category === 'Все статьи' 
                    ? blogPosts.length 
                    : blogPosts.filter(p => p.category === category).length;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                        category === activeCategory
                          ? 'bg-primary-taupe text-white shadow-md scale-105'
                          : 'bg-primary-sand text-primary-espresso hover:bg-primary-rose hover:scale-105'
                      }`}
                    >
                      {category} <span className="opacity-70">({categoryCount})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-brown text-lg">Статьи в этой категории скоро появятся</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group"
                >
                  <article className="bg-primary-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-primary-taupe text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col p-4 md:p-5">
                      {/* Meta */}
                      <div className="flex items-center gap-3 font-body text-xs text-neutral-brown mb-3">
                        <span>
                          {new Date(post.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-base md:text-lg font-bold text-primary-espresso mb-2 group-hover:text-primary-taupe transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="font-body text-xs md:text-sm text-neutral-brown mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author & Link */}
                      <div className="flex items-center justify-between pt-3 border-t border-primary-sand/50">
                        <span className="font-body text-xs text-neutral-brown">{post.author}</span>
                        <div className="flex items-center gap-1 text-primary-taupe text-xs font-medium group-hover:gap-2 transition-all">
                          <span>Читать</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary-sand">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-xl mx-auto flex flex-col items-center">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary-espresso mb-3 md:mb-4 text-center">
                Подпишитесь на рассылку
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown mb-6">
                Получайте новые статьи и эксклюзивные предложения
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 md:px-5 py-3 rounded-full border-2 border-primary-taupe focus:outline-none focus:border-primary-espresso text-sm md:text-base"
                />
                <button className="px-6 md:px-8 py-3 bg-primary-taupe text-white rounded-full text-sm md:text-base font-medium hover:bg-primary-espresso transition-colors">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
