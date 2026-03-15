import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
import { getAllServices } from '@/lib/services';

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const AIShowcaseSectionV2 = dynamic(() => import('@/components/sections/AIShowcaseSectionV2'));
const SocialProofSection = dynamic(() => import('@/components/sections/SocialProofSection'));
const ClinicalProcessSection = dynamic(() => import('@/components/sections/ClinicalProcessSection'));
const TechnologySection = dynamic(() => import('@/components/sections/TechnologySection'));
const DreamTeamSection = dynamic(() => import('@/components/sections/DreamTeamSection'));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const FooterSection = dynamic(() => import('@/components/sections/FooterSection'));

export default function Home() {
  const serviceList = getAllServices();
  const serviceCategories = Array.from(new Set(serviceList.map((service) => service.categoryLabel)));

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicatorsSection />
      <ServicesSection services={serviceList} mode="preview" />
      <AIShowcaseSectionV2 />
      <SocialProofSection />
      <ClinicalProcessSection />
      <TechnologySection />
      <DreamTeamSection />
      <FAQSection />
      <ContactSection />
      <FooterSection categories={serviceCategories} />
    </main>
  );
}
