import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AIShowcaseSection from '@/components/sections/AIShowcaseSection';
import DreamTeamSection from '@/components/sections/DreamTeamSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ClinicalProcessSection from '@/components/sections/ClinicalProcessSection';
import TechnologySection from '@/components/sections/TechnologySection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import { getAllServices } from '@/lib/services';

export default function Home() {
  const serviceList = getAllServices();
  const serviceCategories = Array.from(new Set(serviceList.map((service) => service.categoryLabel)));

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicatorsSection />
      <ServicesSection services={serviceList} mode="preview" />
      <AIShowcaseSection />
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
