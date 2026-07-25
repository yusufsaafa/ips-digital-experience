import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { HomeHeroSection } from "@/components/sections/home-hero-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProblemsWeSolveSection } from "@/components/sections/problems-we-solve-section";

export function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <ProblemsWeSolveSection />
      <IndustriesSection />
      <CapabilitiesSection />
    </main>
  );
}
