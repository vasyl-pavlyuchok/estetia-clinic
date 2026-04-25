import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServicesSection from '@/components/sections/ServicesSection';
import { getAllServices, getServiceCategories } from '@/lib/services';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ categoria?: string }>;
};

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicios' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ServicesPage({ params, searchParams }: ServicesPageProps) {
  await params;
  const sp = await searchParams;
  const services = getAllServices();
  const category = sp?.categoria;
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
