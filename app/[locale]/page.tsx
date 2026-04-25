import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AIShowcaseSectionV2 from '@/components/sections/AIShowcaseSectionV2';
import { getAllServices } from '@/lib/services';

const ph = (h: number) => () => <div style={{ minHeight: h }} aria-hidden="true" />;

const DreamTeamSection = dynamic(() => import('@/components/sections/DreamTeamSection'), { loading: ph(500) });
const ClinicalProcessSection = dynamic(() => import('@/components/sections/ClinicalProcessSection'), { loading: ph(400) });
const TechnologySection = dynamic(() => import('@/components/sections/TechnologySection'), { loading: ph(400) });
const FAQSection       = dynamic(() => import('@/components/sections/FAQSection'),       { loading: ph(400) });
const ContactSection   = dynamic(() => import('@/components/sections/ContactSection'),   { loading: ph(400) });
const FooterSection    = dynamic(() => import('@/components/sections/FooterSection'),    { loading: ph(300) });

export default function Home() {
  const serviceList = getAllServices();
  const serviceCategories = Array.from(new Set(serviceList.map((service) => service.categoryLabel)));

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicatorsSection />
      <ServicesSection services={serviceList} mode="preview" />
      <DreamTeamSection />
      <ClinicalProcessSection />
      <TechnologySection />
      <AIShowcaseSectionV2 />
      <FAQSection />
      <ContactSection />
      <FooterSection categories={serviceCategories} />
    </main>
  );
}
