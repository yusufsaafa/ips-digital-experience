import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { EngineeringProcessSection } from "@/components/sections/engineering-process-section";
import { HomeHeroSection } from "@/components/sections/home-hero-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProblemsWeSolveSection } from "@/components/sections/problems-we-solve-section";
import { ProofSection } from "@/components/sections/proof-section";
import { SpecialistNetworkSection } from "@/components/sections/specialist-network-section";

export function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <ProblemsWeSolveSection />
      <IndustriesSection />
      <CapabilitiesSection />
      <EngineeringProcessSection />
      <SpecialistNetworkSection />
      <ProofSection />
      <ContactCtaSection />
    </main>
  );
}
