import rawServices from '@/_project/services.json';

export type Service = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  benefits: string[];
  indications: string[];
  process: string[];
  duration: string;
  sessions: string;
  recovery: string;
  results: string;
  contraindications: string[];
  price: string;
  seoTags: string[];
  icon: string;
  featured: boolean;
};

const services = rawServices as Service[];

export function getAllServices(): Service[] {
  return services;
}

export function getFeaturedServices(limit = 6): Service[] {
  return services.filter((service) => service.featured).slice(0, limit);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceCategories(): string[] {
  return Array.from(new Set(services.map((service) => service.categoryLabel)));
}
