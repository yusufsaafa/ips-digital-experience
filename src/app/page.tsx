import { CinematicHero } from "./components/CinematicHero";
import { IndustriesSection } from "./components/IndustriesSection";
import { CaseStudySection } from "./components/CaseStudySection";

export default function Home() {
  return (
    <>
      <CinematicHero />
      <IndustriesSection />
      <CaseStudySection />
    </>
  );
}
