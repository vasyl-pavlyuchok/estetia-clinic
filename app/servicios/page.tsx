import type { Metadata } from 'next';
import ServicesSection from '@/components/sections/ServicesSection';
import { getAllServices, getServiceCategories } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Servicios | Estetia',
  description:
    'Catalogo completo de tratamientos de medicina estetica avanzada en Estetia.',
};

type ServicesPageProps = {
  searchParams?: {
    categoria?: string;
  };
};

export default function ServicesPage({ searchParams }: ServicesPageProps) {
  const services = getAllServices();
  const category = searchParams?.categoria;
  const categories = getServiceCategories();
  const filteredServices =
    category && categories.includes(category)
      ? services.filter((service) => service.categoryLabel === category)
      : services;

  return (
    <main className="overflow-x-hidden">
      <ServicesSection
        services={filteredServices}
        mode="full"
        activeCategory={category && categories.includes(category) ? category : undefined}
        allCategories={categories}
        basePath="/servicios"
      />
    </main>
  );
}
