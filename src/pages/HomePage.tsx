import React from "react";
import { Hero } from "../components/sections/Hero";
import { SystemStatus } from "../components/sections/SystemStatus";
import { Introduction } from "../components/sections/Introduction";
import { Services } from "../components/sections/Services";
import { SystemVisualizer } from "../components/sections/SystemVisualizer";
import { ProblemSection } from "../components/sections/ProblemSection";
import { Process } from "../components/sections/Process";
import { UseCases } from "../components/sections/UseCases";
import { CaseStudies } from "../components/sections/CaseStudies";
import { WhyOnechip } from "../components/sections/WhyOnechip";
import { Results } from "../components/sections/Results";
import { FAQSection } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { AboutSection } from "../components/sections/AboutSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <SystemStatus />
      <Introduction />
      <Services />
      <SystemVisualizer />
      <ProblemSection />
      <Process />
      <UseCases />
      <CaseStudies />
      <WhyOnechip />
      <Results />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default HomePage;
