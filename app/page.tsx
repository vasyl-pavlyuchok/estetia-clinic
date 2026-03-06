import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
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

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicatorsSection />
      <ServicesSection services={serviceList} />
    </main>
  );
}
