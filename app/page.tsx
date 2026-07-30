import SiteHeader from "./_components/site-header";
import SiteFooter from "./_components/site-footer";
import HeroSection from "./_components/home/hero-section";
import ProblemSection from "./_components/home/problem-section";
import ServicesSection from "./_components/home/services-section";
import ProofSection from "./_components/home/proof-section";
import FounderSection from "./_components/home/founder-section";
import ProcessSection from "./_components/home/process-section";
import DiagnosticCtaSection from "./_components/home/diagnostic-cta-section";
import FinalCtaSection from "./_components/home/final-cta-section";

export default function Home() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />

      <SiteHeader />

      <HeroSection />

      <ProblemSection />

      <ServicesSection />

      <ProofSection />

      <FounderSection />

      <ProcessSection />

      <DiagnosticCtaSection />

      <FinalCtaSection />

      <SiteFooter />
    </main>
  );
}
