'use client';

import React, { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { getAllProjects, getRoomCategories, getProductCategories } from '@/lib/portfolio';
import { Project, Category } from '@/types/portfolio';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const allProjects = getAllProjects();
  const roomCategories = getRoomCategories();
  const productCategories = getProductCategories();

  const [activeTab, setActiveTab] = useState<'all' | 'room' | 'product'>('all');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Фильтрация проектов
  const filteredProjects = useMemo(() => {
    if (activeTab === 'all' || selectedFilter === 'all') {
      return allProjects;
    }

    if (activeTab === 'room') {
      return allProjects.filter(p => p.rooms.includes(selectedFilter));
    }

    if (activeTab === 'product') {
      return allProjects.filter(p => p.products.includes(selectedFilter));
    }

    return allProjects;
  }, [activeTab, selectedFilter, allProjects]);

  const handleTabChange = (tab: 'all' | 'room' | 'product') => {
    setActiveTab(tab);
    setSelectedFilter('all');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-4 text-center">
                Портфолио проектов
              </h1>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl mx-auto">
                Более 100 реализованных проектов в Москве и области. 
                Премиальное оформление окон для квартир, домов и коммерческих объектов.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 md:py-12 border-b border-neutral-sand">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                onClick={() => handleTabChange('all')}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === 'all'
                    ? 'bg-primary-taupe text-white'
                    : 'bg-primary-cream text-neutral-brown hover:bg-primary-sand'
                }`}
              >
                Все проекты
              </button>
              <button
                onClick={() => handleTabChange('room')}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === 'room'
                    ? 'bg-primary-taupe text-white'
                    : 'bg-primary-cream text-neutral-brown hover:bg-primary-sand'
                }`}
              >
                По помещению
              </button>
              <button
                onClick={() => handleTabChange('product')}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === 'product'
                    ? 'bg-primary-taupe text-white'
                    : 'bg-primary-cream text-neutral-brown hover:bg-primary-sand'
                }`}
              >
                По типу изделия
              </button>
            </div>

            {/* Filter Options */}
            {activeTab === 'room' && (
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-primary-espresso text-white'
                      : 'bg-white border border-neutral-sand text-neutral-brown hover:border-primary-taupe'
                  }`}
                >
                  Все
                </button>
                {roomCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedFilter(cat.slug)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedFilter === cat.slug
                        ? 'bg-primary-espresso text-white'
                        : 'bg-white border border-neutral-sand text-neutral-brown hover:border-primary-taupe'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'product' && (
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-primary-espresso text-white'
                      : 'bg-white border border-neutral-sand text-neutral-brown hover:border-primary-taupe'
                  }`}
                >
                  Все
                </button>
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedFilter(cat.slug)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedFilter === cat.slug
                        ? 'bg-primary-espresso text-white'
                        : 'bg-white border border-neutral-sand text-neutral-brown hover:border-primary-taupe'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-body text-neutral-brown text-lg">
                  Проекты не найдены
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-sand">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary-taupe text-white text-xs font-medium rounded-full">
            Премиум
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-primary-espresso mb-2 group-hover:text-primary-taupe transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm text-neutral-brown mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center text-primary-taupe font-medium text-sm group-hover:gap-2 transition-all">
          Смотреть проект
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
