export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  year: number;
  rooms: string[];
  products: string[];
  featured: boolean;
  coverImage: string;
  images: {
    normal: string;
    enhanced?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  serviceSlug?: string | null;
}

export interface PortfolioData {
  projects: Project[];
  categories: {
    rooms: Category[];
    products: Category[];
  };
}

export type FilterType = 'all' | 'room' | 'product';

export interface PortfolioFilter {
  type: FilterType;
  value: string;
}
