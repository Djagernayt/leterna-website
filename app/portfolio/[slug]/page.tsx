import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { ImageGallery } from '@/components/common';
import { 
  getAllProjects, 
  getProjectBySlug, 
  getRelatedProjects,
  getRoomCategories,
  getProductCategories 
} from '@/lib/portfolio';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Генерация метаданных
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Проект не найден - LETERNA',
    };
  }

  return {
    title: `${project.title} - Портфолио LETERNA`,
    description: project.description,
  };
}

// Генерация статических путей
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 3);
  const roomCategories = getRoomCategories();
  const productCategories = getProductCategories();

  // Получаем имена категорий
  const roomNames = project.rooms
    .map(roomId => roomCategories.find(r => r.slug === roomId)?.name)
    .filter(Boolean);
  
  const productNames = project.products
    .map(productId => productCategories.find(p => p.slug === productId)?.name)
    .filter(Boolean);

  // Генерируем пути к изображениям на основе структуры папок
  const galleryImages: string[] = [];
  
  // Проверяем, есть ли папка enhanced, если нет - используем normal
  const imageFolder = project.images.enhanced ? 'enhanced' : 'normal';
  const basePath = project.images.enhanced || project.images.normal;
  
  // Enhanced папки содержат PNG, normal папки содержат JPG
  const imageExtension = imageFolder === 'enhanced' ? 'png' : 'jpg';
  
  // Проекты pudrikova и skurskaya имеют файлы прямо в папке проекта
  if (project.slug === 'pudrikova' || project.slug === 'skurskaya') {
    // Для этих проектов файлы лежат прямо в папке проекта
    const directImageCounts: Record<string, number> = {
      'pudrikova': 10,
      'skurskaya': 21,
    };
    const count = directImageCounts[project.slug] || 10;
    for (let i = 1; i <= count; i++) {
      galleryImages.push(`${basePath}/${String(i).padStart(3, '0')}.jpg`);
    }
  } else {
    // Для остальных проектов определяем количество файлов
    // Разные количества для enhanced (PNG) и normal (JPG) папок
    const imageCountsEnhanced: Record<string, number> = {
      'moscow-city': 13,
      'belova': 10,
      'girko': 2,
      'kilinkarov': 9,
      'malofeev': 6,
      'moskin': 6,
      'toirus': 8,
      'transavtokom': 4,
      'alliance-security': 6,
    };
    
    const imageCountsNormal: Record<string, number> = {
      'moscow-city': 25,
      'belova': 45,
      'girko': 2,
      'kilinkarov': 9,
      'malofeev': 10,
      'moskin': 8,
      'toirus': 14,
      'transavtokom': 4,
      'alliance-security': 6,
    };
    
    const counts = imageFolder === 'enhanced' ? imageCountsEnhanced : imageCountsNormal;
    const count = counts[project.slug] || 8;
    for (let i = 1; i <= count; i++) {
      galleryImages.push(`${basePath}/${String(i).padStart(3, '0')}.${imageExtension}`);
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <section className="py-6 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm font-body text-neutral-brown">
              <Link href="/" className="hover:text-primary-taupe transition-colors">
                Главная
              </Link>
              <span>/</span>
              <Link href="/portfolio" className="hover:text-primary-taupe transition-colors">
                Портфолио
              </Link>
              <span>/</span>
              <span className="text-primary-espresso">{project.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary-taupe hover:text-primary-espresso transition-colors mb-8 font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Назад к портфолио
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Project Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso">
                    {project.title}
                  </h1>
                  {project.featured && (
                    <span className="px-3 py-1 bg-primary-taupe text-white text-xs font-medium rounded-full">
                      Премиум
                    </span>
                  )}
                </div>

                <p className="font-body text-base md:text-lg text-neutral-brown mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-taupe mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-primary-espresso mb-1">Год реализации</p>
                      <p className="font-body text-sm text-neutral-brown">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-taupe mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-primary-espresso mb-1">Клиент</p>
                      <p className="font-body text-sm text-neutral-brown">{project.client}</p>
                    </div>
                  </div>

                  {roomNames.length > 0 && (
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-taupe mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <div>
                        <p className="font-medium text-primary-espresso mb-1">Помещения</p>
                        <div className="flex flex-wrap gap-2">
                          {roomNames.map((name, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-cream text-primary-espresso text-xs rounded-full"
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {productNames.length > 0 && (
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-taupe mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <div>
                        <p className="font-medium text-primary-espresso mb-1">Типы изделий</p>
                        <div className="flex flex-wrap gap-2">
                          {productNames.map((name, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-cream text-primary-espresso text-xs rounded-full"
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="/#contacts"
                  className="inline-block px-8 py-4 bg-primary-taupe text-white font-medium rounded-full hover:bg-primary-espresso transition-colors"
                >
                  Заказать похожий проект
                </Link>
              </div>

              {/* Right: Cover Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-sand shadow-lg">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary-cream/30">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-primary-espresso mb-4 text-center">
                Фотографии проекта
              </h2>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown max-w-2xl mx-auto">
                Детальные фотографии выполненных работ
              </p>
            </div>

            <ImageGallery images={galleryImages} columns={3} />
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-12 md:py-16 lg:py-20">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-primary-espresso mb-4 text-center">
                  Похожие проекты
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-sand">
                      <Image
                        src={relatedProject.coverImage}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-primary-espresso mb-2 group-hover:text-primary-taupe transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="font-body text-sm text-neutral-brown line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
