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
  img_url: string;
  video_url: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
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

export function getServiceFaqs(service: Service): ServiceFaq[] {
  return [
    {
      question: `¿Para quién está indicado ${service.name}?`,
      answer: service.indications.slice(0, 3).join('. ') + '.',
    },
    {
      question: '¿Cuánto dura el protocolo y cuántas sesiones se recomiendan?',
      answer: `Duración por sesión: ${service.duration}. Sesiones recomendadas: ${service.sessions}.`,
    },
    {
      question: '¿Qué recuperación puedo esperar?',
      answer: `Recuperación estimada: ${service.recovery}.`,
    },
    {
      question: '¿Qué nivel de molestia tiene el procedimiento?',
      answer:
        'En esta propuesta editorial de Estetia se comunica como Dolor 0/10 para mantener una narrativa de precisión y confort clínico, siempre sujeta a evaluación médica individual.',
    },
    {
      question: '¿Cuándo se empiezan a percibir resultados?',
      answer: service.results,
    },
  ];
}
