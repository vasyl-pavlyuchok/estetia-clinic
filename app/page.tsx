import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AIShowcaseSection from '@/components/sections/AIShowcaseSection';
import CenterMethodSection from '@/components/sections/CenterMethodSection';
import DreamTeamSection from '@/components/sections/DreamTeamSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ClinicalProcessSection from '@/components/sections/ClinicalProcessSection';
import TechnologySection from '@/components/sections/TechnologySection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import Reveal from '@/components/ui/Reveal';
import { getAllServices } from '@/lib/services';

export default function Home() {
  const serviceList = getAllServices();
  const serviceCategories = Array.from(new Set(serviceList.map((service) => service.categoryLabel)));

  return (
    <main className="overflow-x-hidden">
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal delay={0.02}>
        <TrustIndicatorsSection />
      </Reveal>
      <Reveal delay={0.03}>
        <CenterMethodSection />
      </Reveal>
      <Reveal delay={0.04}>
        <ServicesSection services={serviceList} mode="preview" />
      </Reveal>
      <Reveal delay={0.05}>
        <AIShowcaseSection />
      </Reveal>
      <Reveal delay={0.06}>
        <SocialProofSection />
      </Reveal>
      <Reveal delay={0.07}>
        <ClinicalProcessSection />
      </Reveal>
      <Reveal delay={0.08}>
        <TechnologySection />
      </Reveal>
      <Reveal delay={0.09}>
        <DreamTeamSection />
      </Reveal>
      <Reveal delay={0.1}>
        <FAQSection />
      </Reveal>
      <Reveal delay={0.11}>
        <ContactSection />
      </Reveal>
      <Reveal delay={0.12}>
        <FooterSection categories={serviceCategories} />
      </Reveal>
    </main>
  );
}
