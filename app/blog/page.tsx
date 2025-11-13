import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowRight, User } from 'lucide-react';
import { Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Блог - LETERNA',
  description: 'Полезные статьи о выборе штор, трендах в текстильном дизайне, уходе за тканями и оформлении интерьера от экспертов LETERNA.',
};

// Mock данные статей (замените на реальные или подключите CMS)
const blogPosts = [
  {
    id: 'kak-vybrat-shtory-dlya-spalni',
    title: 'Как выбрать шторы для спальни: 7 важных критериев',
    excerpt: 'Рассказываем, на что обратить внимание при выборе штор для спальни, чтобы создать уютную и комфортную атмосферу для отдыха.',
    image: '/images/hero/hero-2.jpg',
    category: 'Советы',
    author: 'Альбина Гадельшина',
    date: '2024-11-10',
    readTime: '8 мин',
  },
  {
    id: 'trendy-v-tekstilnom-dizaine-2024',
    title: 'Тренды в текстильном дизайне 2024: что выбрать для дома',
    excerpt: 'Обзор актуальных трендов в мире текстильного дизайна: от цветовых решений до фактур и стилей оформления окон.',
    image: '/images/hero/hero-1.jpg',
    category: 'Тренды',
    author: 'Альбина Гадельшина',
    date: '2024-11-05',
    readTime: '10 мин',
  },
  {
    id: 'uhod-za-premialnym-tekstilem',
    title: 'Уход за премиальным текстилем: как сохранить красоту штор',
    excerpt: 'Правила ухода за дорогими тканями, чистка, стирка и хранение штор, чтобы они служили долгие годы.',
    image: '/images/portfolio/project-1.jpg',
    category: 'Уход',
    author: 'Команда LETERNA',
    date: '2024-10-28',
    readTime: '6 мин',
  },
  {
    id: 'francuzskie-shtory-v-interiere',
    title: 'Французские шторы в современном интерьере',
    excerpt: 'История, особенности и варианты использования французских штор в разных стилях интерьера.',
    image: '/images/hero/hero-3.jpg',
    category: 'Стили',
    author: 'Альбина Гадельшина',
    date: '2024-10-20',
    readTime: '7 мин',
  },
  {
    id: 'kak-vybrat-karnizy',
    title: 'Как выбрать карнизы: практическое руководство',
    excerpt: 'Виды карнизов, материалы, способы крепления и советы по выбору идеального решения для вашего окна.',
    image: '/images/portfolio/project-3.jpg',
    category: 'Советы',
    author: 'Команда LETERNA',
    date: '2024-10-12',
    readTime: '9 мин',
  },
  {
    id: 'shtory-dlya-detskoy',
    title: 'Шторы для детской комнаты: безопасность и красота',
    excerpt: 'Как выбрать шторы для детской, которые будут безопасными, практичными и понравятся вашему ребенку.',
    image: '/images/portfolio/project-3.jpg',
    category: 'Детская',
    author: 'Альбина Гадельшина',
    date: '2024-10-05',
    readTime: '8 мин',
  },
];

const categories = ['Все статьи', 'Советы', 'Тренды', 'Уход', 'Стили', 'Детская'];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary-cream page-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-espresso mb-6">
            Блог LETERNA
          </h1>
          <p className="text-lg md:text-xl text-neutral-brown">
            Экспертные советы по выбору штор, актуальные тренды и полезные статьи 
            о текстильном оформлении интерьера от профессионалов
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-primary-sand">
        <div className="page-container">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    category === 'Все статьи'
                      ? 'bg-primary-taupe text-white'
                      : 'bg-primary-sand text-primary-espresso hover:bg-primary-rose'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-28 lg:py-36 bg-white page-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <Card hover className="h-full flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary-taupe text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-neutral-brown mb-3">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        <span>
                          {new Date(post.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-espresso mb-3 group-hover:text-primary-taupe transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-brown mb-4 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-primary-sand">
                      <div className="flex items-center gap-2 text-sm text-neutral-brown">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary-taupe font-semibold group-hover:gap-3 transition-all">
                        <span>Читать</span>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-28 bg-primary-sand page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-espresso mb-4">
            Подпишитесь на рассылку
          </h2>
          <p className="text-lg text-neutral-brown mb-8">
            Получайте новые статьи, советы экспертов и эксклюзивные предложения на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-primary-taupe focus:outline-none focus:border-primary-espresso"
            />
            <button className="px-8 py-4 bg-primary-taupe text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
