import { CinematicHero } from "./components/CinematicHero";
import { IndustriesSection } from "./components/IndustriesSection";
import { CaseStudySection } from "./components/CaseStudySection";
import { TechnicalRequestSection } from "./components/TechnicalRequestSection";
import { GlobalNavigation } from "./components/GlobalNavigation";

const anchorStyle = { scrollMarginTop: "92px" };

export default function Home() {
  return (
    <>
      <GlobalNavigation />
      <div id="experience" style={anchorStyle}>
        <CinematicHero />
      </div>
      <div id="industries" style={anchorStyle}>
        <IndustriesSection />
      </div>
      <div id="case-study" style={anchorStyle}>
        <CaseStudySection />
      </div>
      <div id="technical-brief" style={anchorStyle}>
        <TechnicalRequestSection />
      </div>
    </>
  );
}
