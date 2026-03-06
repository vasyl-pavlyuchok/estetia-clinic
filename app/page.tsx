import HeroSection from '@/components/sections/HeroSection';
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AIShowcaseSection from '@/components/sections/AIShowcaseSection';
import CenterMethodSection from '@/components/sections/CenterMethodSection';
import DreamTeamSection from '@/components/sections/DreamTeamSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import Reveal from '@/components/ui/Reveal';
import { getAllServices } from '@/lib/services';

export default function Home() {
  const serviceList = getAllServices();

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
        <DreamTeamSection />
      </Reveal>
      <Reveal delay={0.06}>
        <SocialProofSection />
      </Reveal>
      <Reveal delay={0.07}>
        <AIShowcaseSection />
      </Reveal>
    </main>
  );
}
