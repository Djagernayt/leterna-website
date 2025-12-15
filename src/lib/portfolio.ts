import portfolioData from '@/data/portfolio.json';
import { Project, PortfolioData, Category } from '@/types/portfolio';

export function getAllProjects(): Project[] {
  return portfolioData.projects as Project[];
}

export function getFeaturedProjects(): Project[] {
  return portfolioData.projects.filter(p => p.featured) as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolioData.projects.find(p => p.slug === slug) as Project | undefined;
}

export function getProjectsByRoom(roomSlug: string): Project[] {
  return portfolioData.projects.filter(p => 
    p.rooms.includes(roomSlug)
  ) as Project[];
}

export function getProjectsByProduct(productSlug: string): Project[] {
  return portfolioData.projects.filter(p => 
    p.products.includes(productSlug)
  ) as Project[];
}

export function getRoomCategories(): Category[] {
  return portfolioData.categories.rooms as Category[];
}

export function getProductCategories(): Category[] {
  return portfolioData.categories.products as Category[];
}

export function getProductCategoryByServiceSlug(serviceSlug: string): Category | undefined {
  return portfolioData.categories.products.find(
    p => p.serviceSlug === serviceSlug
  ) as Category | undefined;
}

export function getRelatedProjects(projectSlug: string, limit: number = 3): Project[] {
  const project = getProjectBySlug(projectSlug);
  if (!project) return [];

  const related = portfolioData.projects.filter(p => {
    if (p.slug === projectSlug) return false;
    
    // Проекты с общими комнатами или продуктами
    const hasCommonRoom = p.rooms.some(room => project.rooms.includes(room));
    const hasCommonProduct = p.products.some(product => project.products.includes(product));
    
    return hasCommonRoom || hasCommonProduct;
  }) as Project[];

  return related.slice(0, limit);
}
