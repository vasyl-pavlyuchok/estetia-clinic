import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
import AIShowcaseSection from '@/components/sections/AIShowcaseSection';
import ServicesSection from '@/components/sections/ServicesSection';
import services from '@/_project/services.json';

type Service = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  duration: string;
  recovery: string;
  price: string;
  featured: boolean;
};

export default function Home() {
  const serviceList = services as Service[];
  const featuredServices = serviceList.filter((service) => service.featured);
  const categories = new Set(serviceList.map((service) => service.categoryLabel));

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicatorsSection
        totalServices={serviceList.length}
        totalCategories={categories.size}
        featuredServices={featuredServices.length}
      />
      <AIShowcaseSection />
      <ServicesSection services={serviceList} />
    </main>
  );
}
