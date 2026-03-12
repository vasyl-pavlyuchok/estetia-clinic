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

export type HeaderTreatmentLink = {
  slug: string;
  name: string;
};

export type HeaderTreatmentCategory = {
  category: string;
  categoryLabel: string;
  treatments: HeaderTreatmentLink[];
};

export type TreatmentZoneKey =
  | 'rostro-cuello'
  | 'cuerpo-contorno'
  | 'cuero-cabelludo'
  | 'piel-textura'
  | 'estetica-integral';

export type HeaderTreatmentZone = {
  zoneKey: TreatmentZoneKey;
  zoneLabel: string;
  zoneDescription: string;
  treatmentCount: number;
  categories: HeaderTreatmentCategory[];
};

const services = rawServices as Service[];

const CATEGORY_TO_ZONE: Record<
  string,
  {
    zoneKey: TreatmentZoneKey;
    zoneLabel: string;
    zoneDescription: string;
  }
> = {
  'tratamientos-faciales': {
    zoneKey: 'rostro-cuello',
    zoneLabel: 'Rostro y cuello',
    zoneDescription: 'Protocolos para calidad de piel, firmeza y armonía facial.',
  },
  'rejuvenecimiento-antiedad': {
    zoneKey: 'rostro-cuello',
    zoneLabel: 'Rostro y cuello',
    zoneDescription: 'Protocolos para calidad de piel, firmeza y armonía facial.',
  },
  'medicina-estetica-inyectable': {
    zoneKey: 'rostro-cuello',
    zoneLabel: 'Rostro y cuello',
    zoneDescription: 'Protocolos para calidad de piel, firmeza y armonía facial.',
  },
  'contorno-corporal': {
    zoneKey: 'cuerpo-contorno',
    zoneLabel: 'Cuerpo y contorno',
    zoneDescription: 'Tratamientos para silueta, drenaje, textura y definición corporal.',
  },
  'tratamientos-capilares': {
    zoneKey: 'cuero-cabelludo',
    zoneLabel: 'Cuero cabelludo',
    zoneDescription: 'Soluciones para densidad, regeneración y fortalecimiento capilar.',
  },
  'dermatologia-estetica': {
    zoneKey: 'piel-textura',
    zoneLabel: 'Piel y textura',
    zoneDescription: 'Tecnología dermatológica para manchas, poros, marcas y tono.',
  },
};

const ZONE_ORDER: TreatmentZoneKey[] = [
  'rostro-cuello',
  'cuerpo-contorno',
  'cuero-cabelludo',
  'piel-textura',
  'estetica-integral',
];

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

export function getHeaderTreatmentCategories(): HeaderTreatmentCategory[] {
  const grouped = new Map<string, HeaderTreatmentCategory>();

  services.forEach(({ category, categoryLabel, slug, name }) => {
    const existing = grouped.get(categoryLabel);

    if (existing) {
      existing.treatments.push({ slug, name });
      return;
    }

    grouped.set(categoryLabel, {
      category,
      categoryLabel,
      treatments: [{ slug, name }],
    });
  });

  return Array.from(grouped.values());
}

export function getHeaderTreatmentZones(): HeaderTreatmentZone[] {
  const groupedZones = new Map<TreatmentZoneKey, HeaderTreatmentZone>();

  services.forEach(({ category, categoryLabel, slug, name }) => {
    const zoneConfig = CATEGORY_TO_ZONE[category] ?? {
      zoneKey: 'estetica-integral' as const,
      zoneLabel: 'Estética integral',
      zoneDescription: 'Selección transversal de medicina estética avanzada.',
    };

    const existingZone = groupedZones.get(zoneConfig.zoneKey);

    if (!existingZone) {
      groupedZones.set(zoneConfig.zoneKey, {
        zoneKey: zoneConfig.zoneKey,
        zoneLabel: zoneConfig.zoneLabel,
        zoneDescription: zoneConfig.zoneDescription,
        treatmentCount: 1,
        categories: [
          {
            category,
            categoryLabel,
            treatments: [{ slug, name }],
          },
        ],
      });
      return;
    }

    existingZone.treatmentCount += 1;

    const existingCategory = existingZone.categories.find(
      (serviceCategory) => serviceCategory.category === category
    );

    if (existingCategory) {
      existingCategory.treatments.push({ slug, name });
      return;
    }

    existingZone.categories.push({
      category,
      categoryLabel,
      treatments: [{ slug, name }],
    });
  });

  return Array.from(groupedZones.values()).sort(
    (zoneA, zoneB) => ZONE_ORDER.indexOf(zoneA.zoneKey) - ZONE_ORDER.indexOf(zoneB.zoneKey)
  );
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
