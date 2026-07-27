import { CinematicHero3D } from "./components/CinematicHero3D";
import { IndustriesSection } from "./components/IndustriesSection";
import { CaseStudySection } from "./components/CaseStudySection";
import { EngineeringProcessSection } from "./components/EngineeringProcessSection";
import { TechnicalRequestSection } from "./components/TechnicalRequestSection";
import { GlobalNavigation } from "./components/GlobalNavigation";
import { SectionReveal } from "./components/SectionReveal";

export default function Home() {
  return (
    <>
      <GlobalNavigation />
      <div id="experience" style={{ scrollMarginTop: "92px" }}>
        <CinematicHero3D />
      </div>
      <SectionReveal id="industries" index="02" label="Application environments">
        <IndustriesSection />
      </SectionReveal>
      <SectionReveal id="case-study" index="03" label="Failure to control" delay={80}>
        <CaseStudySection />
      </SectionReveal>
      <SectionReveal id="engineering-process" index="04" label="Evidence to validation" delay={90}>
        <EngineeringProcessSection />
      </SectionReveal>
      <SectionReveal id="technical-brief" index="05" label="Start an engineering brief" delay={100}>
        <TechnicalRequestSection />
      </SectionReveal>
    </>
  );
}
